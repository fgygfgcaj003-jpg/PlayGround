#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
PORT="${PORT:-3000}"
cd "$PROJECT_DIR"

run_timed() {
  /usr/bin/time -p "$@"
}

export PORT
run_timed npm ci --no-audit --no-fund
run_timed npm run build
run_timed node -e '
  const { mkdirSync, writeFileSync } = require("node:fs");
  const { dirname, resolve } = require("node:path");
  const project = process.argv[1];
  const output = "/home/runner/work/_temp/omgithub-web/deployment-output.json";
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, JSON.stringify({ project, directory: resolve(project, "dist") }));
' "$PROJECT_DIR"

exec /usr/bin/time -p node --input-type=module -e '
  import { readFileSync } from "node:fs";
  import { join } from "node:path";
  import { preview } from "vite";
  const publicUrl = readFileSync(join(process.env.OPENCODE_WEB_DIR, "app-url"), "utf8").trim();
  const allowedHost = new URL(publicUrl).hostname;
  const server = await preview({ preview: {
    host: "0.0.0.0",
    port: Number(process.env.PORT),
    strictPort: true,
    allowedHosts: [allowedHost]
  } });
  server.printUrls();
'
