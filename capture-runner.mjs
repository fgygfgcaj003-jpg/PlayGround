import { createRequire } from 'node:module'
import { mkdirSync, statSync } from 'node:fs'
import { dirname, resolve, sep, join } from 'node:path'

const projectDir = resolve(dirname(new URL(import.meta.url).pathname))
const outputDir = process.env.CAPTURE_DIR ? resolve(process.env.CAPTURE_DIR) : ''
const url = process.env.CAPTURE_URL
if (!url || !outputDir) {
  console.error('Set CAPTURE_URL and CAPTURE_DIR.')
  process.exit(1)
}
if (outputDir === projectDir || outputDir.startsWith(projectDir + sep)) {
  console.error('CAPTURE_DIR must be outside the project source directory.')
  process.exit(1)
}
try {
  new URL(url)
} catch {
  console.error(`CAPTURE_URL is not a valid absolute URL: ${url}`)
  process.exit(1)
}
mkdirSync(outputDir, { recursive: true })

const runtime = join(process.env.HOME, '.local/share/omgithub-playwright')
const require = createRequire(join(runtime, 'package.json'))
const { chromium } = require('playwright')
const config = JSON.parse(await (await import('node:fs/promises')).readFile(
  join(runtime, process.platform === 'darwin' ? 'metal.json' : 'linux.json'), 'utf8'
))
if (process.platform === 'linux') {
  process.env.DISPLAY ||= (await (await import('node:fs/promises')).readFile(join(runtime, 'display'), 'utf8')).trim().replace(/^/, ':')
}

let browser
let exitCode = 0
const infrastructureError = error => Object.assign(error, { exitCode: 75 })
try {
  browser = await chromium.launch({ ...config.browser.launchOptions, timeout: 30000 }).catch(error => { throw infrastructureError(error) })
  const origin = new URL(url).origin
  for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 }).catch(error => { throw infrastructureError(error) })
    page.setDefaultTimeout(30000)
    const pageErrors = []
    const badResponses = []
    const failedRequests = []
    page.on('pageerror', error => pageErrors.push(error.message))
    page.on('response', response => {
      if (new URL(response.url()).origin === origin && response.status() >= 400) {
        badResponses.push(`${response.status()} ${response.url()}`)
      }
    })
    page.on('requestfailed', request => {
      failedRequests.push(`${request.url()}: ${request.failure()?.errorText || 'request failed'}`)
    })

    let response
    try {
      response = await page.goto(url, { waitUntil: 'load', timeout: 45000 })
    } catch (error) {
      await page.close().catch(() => {})
      throw infrastructureError(error)
    }
    if (!response) {
      await page.close().catch(() => {})
      throw infrastructureError(new Error(`No document response for ${url}`))
    }
    if (response.status() >= 500 || response.status() === 408 || response.status() === 429) {
      await page.close().catch(() => {})
      throw infrastructureError(new Error(`Temporary HTTP ${response.status()} loading ${url}`))
    }
    if (!response.ok()) throw new Error(`HTTP ${response.status()} loading ${url}`)

    // The game is rendered by Three.js into a full-viewport WebGL canvas. Waiting
    // for that canvas avoids treating a hidden/document shell as a successful render.
    try {
      await page.waitForFunction(() => {
        const canvas = document.querySelector('#game canvas')
        return canvas && canvas.width >= 300 && canvas.height >= 300 &&
          getComputedStyle(canvas).display !== 'none' &&
          document.querySelector('.topbar')?.getBoundingClientRect().width > 0
      }, { timeout: 30000 })
      await page.evaluate(() => document.fonts.ready)
      await page.waitForTimeout(1200)
    } catch (error) {
      if (failedRequests.length) {
        throw infrastructureError(new Error(`Browser resource request failed: ${failedRequests.join('; ')}`))
      }
      if (pageErrors.length) throw new Error(`Game script failed: ${pageErrors.join('; ')}`)
      throw new Error(`Rendered game did not become ready at ${url}: ${error.message}`)
    }
    if (badResponses.length) throw new Error(`Preview loaded with failed same-origin resources: ${badResponses.join('; ')}`)
    if (pageErrors.length) throw new Error(`Game script failed: ${pageErrors.join('; ')}`)

    const output = join(outputDir, `final-${name}.png`)
    await page.screenshot({ path: output, fullPage: false, timeout: 30000 }).catch(error => {
      if (error.name === 'TimeoutError' || !browser.isConnected()) throw infrastructureError(error)
      throw error
    })
    if (statSync(output).size < 10000) throw new Error(`Screenshot appears empty: ${output}`)
    console.log(`Captured ${name} ${width}x${height}: ${output}`)
    await page.close()
  }
} catch (error) {
  console.error(error)
  exitCode = error.exitCode || 1
} finally {
  if (browser) {
    try {
      await browser.close()
    } catch (error) {
      console.error(`Could not close capture browser cleanly: ${error.message}`)
      if (!exitCode) exitCode = 75
    }
  }
}
process.exitCode = exitCode
