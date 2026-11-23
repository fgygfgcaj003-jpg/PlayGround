import * as THREE from 'three';
import { World, WORLD, heightAt, trenchZ, trenchWidth, inTrench } from './world.js';
import { Effects } from './effects.js';
import { AudioEngine } from './audio.js';
import { AIController } from './ai.js';
import { Soldier, StaticMG, Tank, Plane, Parachute, dampAngle } from './entities.js';
import { Ragdoll } from './ragdoll.js';
import { addBox, addCyl, addSphere, PALETTE, toonMat } from './models.js';
import { clamp, damp, lerp, TAU } from './util.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _dir = new THREE.Vector3();
const _q = new THREE.Quaternion();

function makePlayerRifle() {
  const g = new THREE.Group();
  const wood = PALETTE.wood, dark = PALETTE.woodDark, metal = PALETTE.gunmetal;
  addBox(g, 0.065, 0.105, 0.62, wood, 0, 0, 0.03);
  addBox(g, 0.06, 0.13, 0.22, dark, 0, -0.04, 0.33, 0.18);
  addBox(g, 0.058, 0.07, 0.2, wood, 0, -0.005, -0.38);
  addCyl(g, 0.017, 0.019, 0.8, 8, metal, 0, 0.038, -0.6, Math.PI / 2, 0, 0);
  addCyl(g, 0.025, 0.025, 0.11, 8, metal, 0, 0.038, -0.34, Math.PI / 2, 0, 0);
  addBox(g, 0.02, 0.03, 0.05, metal, 0, 0.075, -0.95);
  addBox(g, 0.015, 0.018, 0.11, metal, 0.045, 0.055, 0.12, 0, 0, 0.5);
  addBox(g, 0.06, 0.055, 0.12, metal, 0, -0.065, 0.14);
  addBox(g, 0.012, 0.01, 0.75, PALETTE.leatherDark, -0.035, -0.06, 0.06);
  // hands & sleeves
  addSphere(g, 0.06, PALETTE.skin, 0.02, -0.055, 0.2, 0.9, 1.1, 0.9);
  addSphere(g, 0.055, PALETTE.skin, -0.02, -0.06, -0.3, 0.9, 1.1, 0.9);
  addCapsule(g, 0.065, 0.3, PALETTE.khaki, 0.16, -0.22, 0.3, 0.5, 0, -0.55);
  addCapsule(g, 0.06, 0.3, PALETTE.khaki, -0.1, -0.24, -0.22, 0.6, 0, 0.5);
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0.038, -1.0);
  g.add(muzzle);
  g.userData.muzzle = muzzle;
  g.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false; } });
  return g;
}

function addCapsule(parent, r, len, color, x, y, z, rx, ry, rz) {
  const geo = new THREE.CapsuleGeometry(r, len, 4, 8);
  const m = new THREE.Mesh(geo, toonMat(color));
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  parent.add(m); return m;
}

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.time = 0;
    this.started = false;
    this.paused = false;
    this.isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    this.soldiers = [];
    this.tanks = [];
    this.planes = [];
    this.mgs = [];
    this.parachutes = [];
    this.ragdolls = [];
    this.respawnQueue = [];
    this.artilleryTimer = 7;
    this.smokeTimer = 0;
    this.stats = { allied: 0, enemy: 0, playerKills: 0, deaths: 0 };
    this.flightStick = { x: 0, y: 0, active: false };
    this.setupRenderer();
    this.world = new World(this.scene, this.renderer);
    this.effects = new Effects(this.scene, this.camera);
    this.audio = new AudioEngine();
    this.ai = new AIController(this);
    this.setupPlayer();
    this.hud = new HUD(this);
    this.setupInput();
    this.spawnInitial();
    this.setupResize();
    this.clock = new THREE.Clock();
    this.perf = { start: performance.now(), frames: 0, checked: false, low: false };
    this.forceQuality = new URLSearchParams(location.search).get('quality');
    if (this.softwareRenderer && this.forceQuality !== 'high') this.setLowQuality();
    this.renderer.setAnimationLoop(() => this.loop());
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.92;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.05, 1600);
    this.scene.add(this.camera);
    this.baseFov = 74;
    try {
      const gl = this.renderer.getContext();
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const name = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
      this.softwareRenderer = /swiftshader|llvmpipe|software|mesa offscreen/i.test(name);
    } catch { this.softwareRenderer = false; }
  }

  setupPlayer() {
    const x = -8;
    const side = -1;
    // stand on the fire step, just behind the parapet, so the field is visible
    const z = trenchZ(x, side) - side * (trenchWidth(x) - 0.2);
    this.player = {
      pos: new THREE.Vector3(x, heightAt(x, z), z),
      yaw: Math.PI, pitch: -0.02,
      hp: 100, maxHp: 100,
      dead: false, mode: 'foot',
      ammo: 10, reserve: 90, reloading: 0, fireCd: 0,
      eye: 1.68, crouch: false, jumpY: 0, vy: 0, grounded: true,
      bob: 0, stepT: 0, damageT: 0, regen: 0,
      ads: false, kick: 0, mg: null, tank: null, plane: null, chute: null,
      isPlayer: true, mounted: null,
      kills: 0, spawnGuard: 0,
    };
    this.playerTarget = {
      isPlayer: true, dead: false, x: x, y: heightAt(x, z), z, headY: 1.5, running: false,
      hit: (dmg, from, dir) => this.damagePlayer(dmg, from, dir),
    };
    this.spawnPoint = { x, z };
    this.viewmodel = makePlayerRifle();
    this.viewmodel.scale.setScalar(0.86);
    this.viewmodel.position.set(0.3, -0.26, -0.56);
    this.viewmodel.rotation.set(0.02, 0.06, 0);
    this.camera.add(this.viewmodel);
    this.vmBase = new THREE.Vector3(0.3, -0.26, -0.56);
    this.vmAds = new THREE.Vector3(0, -0.09, -0.43);
    this.camera.rotation.order = 'YXZ';
    this.updateCameraTransform(0, true);
  }

  setupInput() {
    this.keys = new Set();
    this.input = { fire: false, ads: false, forward: 0, right: 0, jump: false };
    this.touch = { mx: 0, my: 0, lookX: 0, lookY: 0 };
    const canvas = this.canvas;
    window.addEventListener('keydown', (e) => {
      if (['Space', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ControlLeft'].includes(e.code)) e.preventDefault();
      this.keys.add(e.code);
      if (e.code === 'KeyE' && !e.repeat) this.interact();
      if (e.code === 'KeyR' && !e.repeat) this.reload();
      if (e.code === 'KeyC' && !e.repeat) this.player.crouch = !this.player.crouch;
      if (e.code === 'Space' && !e.repeat) this.tryJump();
      if (e.code === 'Escape' && this.player.mode === 'plane') this.bailPlane();
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    canvas.addEventListener('mousedown', (e) => {
      if (!this.started) return;
      if (document.pointerLockElement !== canvas && !this.isTouch) { canvas.requestPointerLock?.(); return; }
      if (e.button === 0) this.input.fire = true;
      if (e.button === 2) this.input.ads = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.input.fire = false;
      if (e.button === 2) this.input.ads = false;
    });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== canvas || !this.started) return;
      const p = this.player;
      if (p.mode === 'plane') {
        this.flightStick.x = clamp(this.flightStick.x + e.movementX * 0.0035, -1, 1);
        this.flightStick.y = clamp(this.flightStick.y + e.movementY * 0.0035, -1, 1);
        this.flightStick.active = true;
        return;
      }
      const sens = p.ads ? 0.0014 : 0.0022;
      p.yaw -= e.movementX * sens;
      p.pitch -= e.movementY * sens;
      p.pitch = clamp(p.pitch, -1.42, 1.42);
    });
    document.addEventListener('pointerlockchange', () => {
      if (this.started && document.pointerLockElement !== canvas && !this.isTouch) {
        this.paused = true;
        this.hud.setPause(true);
      } else {
        this.paused = false;
        this.hud.setPause(false);
      }
    });
    canvas.addEventListener('click', () => {
      if (this.started && !this.isTouch && document.pointerLockElement !== canvas) canvas.requestPointerLock?.();
    });
    // mobile touch
    this.setupTouch();
  }

  setupTouch() {
    const joy = document.getElementById('joy');
    const knob = document.getElementById('joy-knob');
    const look = document.getElementById('touch-look');
    const fire = document.getElementById('btn-fire');
    const act = document.getElementById('btn-use');
    const rel = document.getElementById('btn-reload');
    const jump = document.getElementById('btn-jump');
    if (!joy) return;
    let joyId = null;
    const onJoy = (e) => {
      for (const t of e.changedTouches) {
        const r = joy.getBoundingClientRect();
        const dx = (t.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (t.clientY - (r.top + r.height / 2)) / (r.height / 2);
        const len = Math.hypot(dx, dy) || 1;
        const cl = Math.min(1, len);
        this.touch.mx = dx / len * cl;
        this.touch.my = dy / len * cl;
        knob.style.transform = `translate(${this.touch.mx * 34}px, ${this.touch.my * 34}px)`;
        e.preventDefault();
      }
    };
    const endJoy = () => { this.touch.mx = 0; this.touch.my = 0; knob.style.transform = ''; };
    joy.addEventListener('touchstart', onJoy, { passive: false });
    joy.addEventListener('touchmove', onJoy, { passive: false });
    joy.addEventListener('touchend', endJoy);
    joy.addEventListener('touchcancel', endJoy);
    let lookId = null, lx = 0, ly = 0;
    look.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0]; lookId = t.identifier; lx = t.clientX; ly = t.clientY; e.preventDefault();
    }, { passive: false });
    look.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier !== lookId) continue;
        const dx = t.clientX - lx, dy = t.clientY - ly;
        lx = t.clientX; ly = t.clientY;
        if (this.player.mode === 'plane') {
          this.flightStick.x = clamp(this.flightStick.x + dx * 0.01, -1, 1);
          this.flightStick.y = clamp(this.flightStick.y + dy * 0.01, -1, 1);
        } else {
          this.player.yaw -= dx * 0.004;
          this.player.pitch = clamp(this.player.pitch - dy * 0.004, -1.4, 1.4);
        }
        e.preventDefault();
      }
    }, { passive: false });
    const endLook = () => { lookId = null; };
    look.addEventListener('touchend', endLook);
    look.addEventListener('touchcancel', endLook);
    const bind = (el, down, up) => {
      el.addEventListener('touchstart', (e) => { e.preventDefault(); down(); }, { passive: false });
      el.addEventListener('touchend', (e) => { e.preventDefault(); up?.(); }, { passive: false });
      el.addEventListener('touchcancel', () => up?.());
    };
    bind(fire, () => { this.input.fire = true; }, () => { this.input.fire = false; });
    bind(act, () => this.interact());
    bind(rel, () => this.reload());
    bind(jump, () => this.tryJump());
  }

  setupResize() {
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }

  start() {
    this.started = true;
    this.player.spawnGuard = 5;
    this.audio.start();
    this.audio.setCamera(this.camera);
    this.hud.hideMenu();
    if (!this.isTouch) this.canvas.requestPointerLock?.();
    this.hud.message('Держите оборону. Немцы в 100 метрах.', 4);
  }

  /* ---------------- spawning ---------------- */
  spawnInitial() {
    const make = (opts) => new Soldier(this, opts);
    // British infantry along the line
    for (let i = 0; i < 11; i++) {
      const x = -330 + i * 34 + (Math.random() - 0.5) * 12;
      const side = -1;
      const z = trenchZ(x, side) - side * (trenchWidth(x) - 0.85);
      const s = make({ x, z, team: 'british', variant: i % 3 === 0 ? 'british2' : 'british1', role: i % 4 === 0 ? 'mg' : 'rifle' });
      s.homeX = x; s.homeZ = z; s.patrolX = x; s.patrolZ = z; s.aiRole = 'rifle';
    }
    // German infantry
    for (let i = 0; i < 11; i++) {
      const x = -260 + i * 36 + (Math.random() - 0.5) * 12;
      const side = 1;
      const z = trenchZ(x, side) - side * (trenchWidth(x) - 0.85);
      const s = make({ x, z, team: 'german', variant: i % 3 === 0 ? 'german2' : 'german1', role: i % 4 === 0 ? 'mg' : 'rifle' });
      s.homeX = x; s.homeZ = z; s.patrolX = x; s.patrolZ = z; s.aiRole = 'rifle';
    }
    // exposed sentries on the fire step keep the line visibly alive
    for (const side of [-1, 1]) {
      const team = side < 0 ? 'british' : 'german';
      for (const x of [-96, -34, 26, 88]) {
        const z = trenchZ(x, side) - side * (trenchWidth(x) + 0.25);
        const s = make({ x, z, team, variant: team === 'british' ? 'british1' : 'german1' });
        s.aiRole = 'sentry'; s.sentry = true;
        s.homeX = x; s.homeZ = z; s.patrolX = x; s.patrolZ = z;
      }
    }
    // MG detachments (StaticMG registers itself)
    for (const site of this.world.mgSites) new StaticMG(this, site);
    const bMG = this.mgs.find((m) => m.team === 'british' && !m.mountedBy);
    if (bMG) {
      const s = make({ x: bMG.site.x + 4, z: bMG.site.z, team: 'british', variant: 'british1' });
      s.aiRole = 'mg'; s.mgSite = bMG; s.homeX = bMG.site.x; s.homeZ = bMG.site.z;
    }
    const gMG = this.mgs.find((m) => m.team === 'german' && !m.mountedBy);
    if (gMG) {
      const s = make({ x: gMG.site.x - 4, z: gMG.site.z, team: 'german', variant: 'german1' });
      s.aiRole = 'mg'; s.mgSite = gMG; s.homeX = gMG.site.x; s.homeZ = gMG.site.z;
    }
    // British tank (empty — crew will board) and German tank (already crewed)
    this.britishTank = new Tank(this, { team: 'british', type: 'mark1', x: WORLD.tankSpawn.x, z: WORLD.tankSpawn.z, yaw: 0.15 });
    this.germanTank = new Tank(this, { team: 'german', type: 'a7v', x: 205, z: 96, yaw: Math.PI - 0.1, crewed: true });
    // 5 crew for the British tank
    const crewSpots = [[-196, -102], [-190, -96], [-200, -92], [-188, -106], [-198, -108]];
    for (let i = 0; i < 5; i++) {
      const [x, z] = crewSpots[i];
      const s = make({ x, z, team: 'british', variant: i % 2 ? 'british2' : 'british1', role: 'crew' });
      s.aiRole = 'crew'; s.boardTarget = this.britishTank; s.homeX = x; s.homeZ = z;
    }
    // bodies left from the previous night's patrol
    for (const [team, x, z] of [
      ['british', -16, trenchZ(-16, -1) + (trenchWidth(-16) - 1.1)],
      ['british', 42, trenchZ(42, -1) + (trenchWidth(42) - 1.0)],
      ['german', -8, 24],
      ['german', 36, 18],
      ['british', -44, 34],
    ]) this.spawnCorpse(team, x, z);
    // aeroplanes
    const botPlane = new Plane(this, { team: 'british', type: 'camel', x: -400, z: -110, yaw: Math.PI / 2 });
    const playerPlane = new Plane(this, { team: 'british', type: 'camel', x: -368, z: -103, yaw: Math.PI / 2 });
    const enemyPlane = new Plane(this, { team: 'german', type: 'albatros', x: WORLD.enemyPlaneSpawn.x, z: WORLD.enemyPlaneSpawn.z, yaw: -Math.PI / 2 });
    this.botPlane = botPlane; this.playerPlane = playerPlane; this.enemyPlane = enemyPlane;
    // pilots
    const bp = make({ x: -392, z: -124, team: 'british', variant: 'british1' });
    bp.aiRole = 'pilot'; bp.boardTarget = botPlane; bp.homeX = -392; bp.homeZ = -124;
    const ep = make({ x: 342, z: 128, team: 'german', variant: 'german1' });
    ep.aiRole = 'pilot'; ep.boardTarget = enemyPlane; ep.homeX = 342; ep.homeZ = 128;
    // a couple of British soldiers near the aerodrome
    for (let i = 0; i < 2; i++) {
      const s = make({ x: -420 + i * 18, z: -100 + i * 8, team: 'british', variant: 'british2' });
      s.aiRole = 'rifle'; s.homeX = s.x; s.homeZ = s.z; s.patrolX = s.x; s.patrolZ = s.z;
    }
  }

  /* ---------------- main loop ---------------- */
  loop() {
    const dt = Math.min(0.05, this.clock.getDelta());
    this.time += dt;
    this.update(dt);
    this.renderer.render(this.scene, this.camera);
    // one-shot adaptive quality for software renderers / weak devices
    const perf = this.perf;
    if (!perf.checked && this.forceQuality !== 'high') {
      perf.frames++;
      const elapsed = performance.now() - perf.start;
      if (elapsed > 3500) {
        perf.checked = true;
        const fps = perf.frames / (elapsed / 1000);
        if (fps < 32) this.setLowQuality();
      }
    }
  }

  setLowQuality() {
    const perf = this.perf;
    if (perf.low) return;
    perf.low = true;
    this.renderer.shadowMap.enabled = false;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 0.8));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene.fog = new THREE.FogExp2(0xbfb69b, 0.0019);
    // Keep the far plane comfortably beyond the sky dome radius (1100).
    this.camera.far = 1600;
    this.camera.updateProjectionMatrix();
    this.world?.setLowQuality?.();
    this.hud?.message('Режим производительности включён', 2.5);
  }

  update(dt) {
    this.world.update(dt, this.time, this.player.pos);
    if (this.started) {
      this.ai.update(dt);
      for (const s of this.soldiers) s.update(dt);
      for (const t of this.tanks) t.update(dt);
      for (const p of this.planes) p.update(dt);
      for (const m of this.mgs) m.update(dt);
      for (let i = this.parachutes.length - 1; i >= 0; i--) {
        const p = this.parachutes[i];
        p.update(dt);
        if (p.landed) this.parachutes.splice(i, 1);
      }
      for (const r of this.ragdolls) r.update(dt);
      this.updatePlayer(dt);
      this.updateRespawns(dt);
      this.updateAmbient(dt);
      this.hud.update(dt);
    } else {
      // idle menu camera
      const p = this.player;
      p.yaw += Math.sin(this.time * 0.15) * dt * 0.06;
      this.updateCameraTransform(dt, true);
    }
    this.effects.update(dt);
    this.audio.update(dt, this.combatNearby());
  }

  updateCameraTransform(dt, force = false) {
    const p = this.player;
    const cam = this.camera;
    if (p.mode === 'plane' && p.plane) {
      const pl = p.plane;
      const cockpit = new THREE.Vector3(0, 1.92, 0.5).applyQuaternion(pl.quat);
      cam.position.copy(pl.pos).add(cockpit);
      cam.quaternion.copy(pl.quat);
      // slight cockpit shake
      cam.position.y += Math.sin(this.time * 17) * 0.008;
      cam.fov = lerp(cam.fov, 70, 0.1);
      cam.updateProjectionMatrix();
      return;
    }
    if (p.mode === 'parachute' && p.chute) {
      const c = p.chute;
      cam.position.copy(c.pos).add(new THREE.Vector3(0, -1.6, 0));
      cam.rotation.set(p.pitch, p.yaw, Math.sin(this.time * 1.2) * 0.05);
      return;
    }
    if (p.mode === 'mg' && p.mg) {
      const mg = p.mg;
      _dir.set(-Math.sin(p.yaw) * Math.cos(p.pitch), Math.sin(p.pitch), -Math.cos(p.yaw) * Math.cos(p.pitch));
      cam.position.copy(mg.pos).add(new THREE.Vector3(0, 1.55, 0)).addScaledVector(_dir, -1.25);
      cam.rotation.set(p.pitch, p.yaw, 0);
      return;
    }
    if (p.mode === 'tank' && p.tank) {
      const seat = p.tank.getSeatWorld('gunnerL');
      cam.position.copy(seat).add(new THREE.Vector3(0, 0.15, 0));
      cam.rotation.set(p.pitch, p.yaw, 0);
      return;
    }
    // foot / dead
    const bob = p.mode === 'foot' ? Math.sin(p.bob * 2) * 0.028 * Math.min(1, p.speedFactor || 0) : 0;
    const shake = this.effects.shake;
    const eye = p.crouch ? 1.12 : 1.68;
    cam.position.set(
      p.pos.x + (Math.random() - 0.5) * shake * 0.06,
      p.pos.y + eye + bob + (p.dead ? -0.7 : 0) + (Math.random() - 0.5) * shake * 0.05,
      p.pos.z + (Math.random() - 0.5) * shake * 0.06,
    );
    cam.rotation.set(p.pitch + shake * 0.006 * Math.sin(this.time * 40), p.yaw, shake * 0.004 * Math.sin(this.time * 31));
    if (p.dead) cam.rotation.z = 0.5;
    const targetFov = p.ads && p.mode === 'foot' ? 52 : this.baseFov;
    cam.fov = lerp(cam.fov, targetFov, 1 - Math.exp(-10 * dt));
    cam.updateProjectionMatrix();
  }

  updatePlayer(dt) {
    const p = this.player;
    const h = this.hud;
    this.playerTarget.x = p.pos.x; this.playerTarget.z = p.pos.z;
    this.playerTarget.y = p.pos.y; this.playerTarget.dead = p.dead;
    this.playerTarget.headY = p.mode === 'parachute' ? 0 : 1.5;
    if (p.dead) {
      p.deathTimer -= dt;
      if (p.deathTimer <= 0) this.respawnPlayer();
      this.updateCameraTransform(dt);
      return;
    }
    if (p.spawnGuard > 0) p.spawnGuard = Math.max(0, p.spawnGuard - dt);
    if (p.damageT > 0) p.damageT -= dt;
    else if (p.hp < p.maxHp && p.mode === 'foot') p.hp = Math.min(p.maxHp, p.hp + dt * 2.2);
    if (p.reloading > 0) {
      p.reloading -= dt;
      if (p.reloading <= 0) { p.ammo = 10; p.reserve -= 10; h.message('', 0); }
    }
    p.fireCd = Math.max(0, p.fireCd - dt);
    p.kick = Math.max(0, p.kick - dt * 6);
    // flight stick recenter
    if (this.flightStick.active) {
      this.flightStick.x = damp(this.flightStick.x, 0, 1.2, dt);
      this.flightStick.y = damp(this.flightStick.y, 0, 1.2, dt);
    }

    if (p.mode === 'foot') this.updateFoot(dt);
    else if (p.mode === 'plane') this.updatePlanePlayer(dt);
    else if (p.mode === 'parachute') this.updateChutePlayer(dt);
    else if (p.mode === 'mg') this.updateMGPlayer(dt);
    else if (p.mode === 'tank') this.updateTankPlayer(dt);

    this.updateCameraTransform(dt);
    this.updateViewmodel(dt);
    // interaction prompt
    const it = this.findInteractable();
    h.setPrompt(it ? it.label : '');
    this.playerTarget.x = p.pos.x; this.playerTarget.z = p.pos.z; this.playerTarget.y = p.pos.y;
  }

  updateFoot(dt) {
    const p = this.player;
    let f = 0, r = 0;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) f += 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) f -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) r += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) r -= 1;
    f += -this.touch.my;
    r += this.touch.mx;
    const sprint = this.keys.has('ShiftLeft') && !p.ads;
    const speed = (p.crouch ? 2.2 : sprint ? 7.2 : 4.4) * (p.ads ? 0.55 : 1);
    const len = Math.hypot(f, r);
    if (len > 1) { f /= len; r /= len; }
    const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw);
    const rx = Math.cos(p.yaw), rz = -Math.sin(p.yaw);
    let vx = (fx * f + rx * r) * speed;
    let vz = (fz * f + rz * r) * speed;
    p.speedFactor = damp(p.speedFactor || 0, Math.hypot(f, r), 8, dt);
    if (p.ads) p.speedFactor = 0;
    p.pos.x += vx * dt;
    p.pos.z += vz * dt;
    // colliders
    for (const c of this.world.colliders) {
      const dx = p.pos.x - c.x, dz = p.pos.z - c.z, rr = c.r + 0.35;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        p.pos.x = c.x + dx / d * rr;
        p.pos.z = c.z + dz / d * rr;
      }
    }
    for (const t of this.tanks) {
      if (!t.alive) continue;
      const dx = p.pos.x - t.pos.x, dz = p.pos.z - t.pos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < 9.5 && d2 > 0.01) {
        const d = Math.sqrt(d2);
        p.pos.x = t.pos.x + dx / d * 3.1;
        p.pos.z = t.pos.z + dz / d * 3.1;
      }
    }
    p.pos.x = clamp(p.pos.x, WORLD.minX + 3, WORLD.maxX - 3);
    p.pos.z = clamp(p.pos.z, WORLD.minZ + 3, WORLD.maxZ - 3);
    // vertical / jump
    const ground = heightAt(p.pos.x, p.pos.z);
    if (!p.grounded) {
      p.vy -= 19 * dt;
      p.jumpY += p.vy * dt;
      if (p.jumpY <= 0) { p.jumpY = 0; p.vy = 0; p.grounded = true; }
    }
    p.pos.y = ground + p.jumpY;
    // footsteps / bob
    const moving = Math.hypot(vx, vz) > 0.5;
    if (moving) {
      p.bob += dt * (sprint ? 11 : 7);
      p.stepT -= dt;
      if (p.stepT <= 0) {
        p.stepT = sprint ? 0.32 : 0.46;
        this.audio.noiseBurst?.(0.06, 240, 0.7, 0.035, (Math.random() - 0.5) * 0.2);
      }
    }
    // shooting
    if (this.input.fire && p.fireCd <= 0 && p.reloading <= 0) this.fireRifle();
    p.ads = this.input.ads;
    // plane/tank nearby? interactions handled by E
  }

  updatePlanePlayer(dt) {
    const p = this.player, pl = p.plane;
    if (!pl || !pl.alive) { this.killPlayer('Самолёт уничтожен'); return; }
    // controls
    const stick = this.flightStick;
    const kRoll = (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    pl.controls.roll = clamp(stick.x + kRoll, -1, 1);
    pl.controls.pitch = clamp(-stick.y, -1, 1);
    pl.controls.yaw = clamp((this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0), -1, 1) * 0.6;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) pl.throttle = Math.min(1, pl.throttle + dt * 0.8);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) pl.throttle = Math.max(0, pl.throttle - dt * 0.8);
    if (this.touch.my) pl.controls.pitch = clamp(-this.touch.my, -1, 1);
    if (this.touch.mx) pl.controls.roll = clamp(this.touch.mx, -1, 1);
    p.pos.copy(pl.pos);
    this.audio.updateEngine(pl.throttle, pl.speed);
    if (this.input.fire && pl.fireCd === undefined) pl.fireCd = 0;
    // plane's own update fires when game.input.fire
  }

  updateChutePlayer(dt) {
    const p = this.player;
    const c = p.chute;
    if (!c) { p.mode = 'foot'; return; }
    if (this.touch.mx) c.vel.x += this.touch.mx * dt * 4;
    if (this.touch.my) c.vel.z += this.touch.my * dt * 4;
    p.pos.copy(c.pos);
  }

  updateMGPlayer(dt) {
    const p = this.player, mg = p.mg;
    if (!mg) { p.mode = 'foot'; return; }
    mg.yaw = clamp(dampAngle(mg.yaw, ((p.yaw - mg.baseYaw + Math.PI * 3) % TAU) - Math.PI, 14, dt), -0.95, 0.95);
    mg.pitch = clamp(p.pitch, -0.35, 0.55);
    mg.group.rotation.set(-mg.pitch, mg.baseYaw + mg.yaw, 0);
    if (this.input.fire) {
      mg.cooldown = Math.max(0, mg.cooldown - dt);
      if (mg.cooldown <= 0 && !mg.overheated && mg.ammo > 0) {
        const from = mg.worldMuzzle;
        _dir.set(-Math.sin(p.yaw) * Math.cos(p.pitch), Math.sin(p.pitch), -Math.cos(p.yaw) * Math.cos(p.pitch)).normalize();
        const hit = this.raycastTargets(from, _dir, 420, 'british');
        const to = hit ? hit.point : from.clone().addScaledVector(_dir, 420);
        this.effects.tracer(from, to, 0xffe1a0, 0.07);
        this.effects.muzzle(from, _dir, 1.0);
        this.audio.mg('british', from);
        mg.ammo--; mg.heat = Math.min(1, mg.heat + 0.016); mg.cooldown = 0.075;
        if (hit) this.applyHit(hit, 15 + Math.random() * 6, from, _dir, true);
      }
    }
    mg.cooldown = Math.max(0, mg.cooldown - dt);
    mg.heat = Math.max(0, mg.heat - dt * 0.05);
    mg.overheated = mg.heat > 0.98;
  }

  updateTankPlayer(dt) {
    const p = this.player, t = p.tank;
    if (!t || !t.alive) { this.killPlayer('Танк уничтожен'); return; }
    const fwd = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    t.desiredSpeed = fwd * 3.0;
    const desired = p.yaw - Math.PI;
    const err = ((desired - t.yaw + Math.PI * 3) % TAU) - Math.PI;
    t.steer = clamp(err * 1.4, -1, 1);
    p.pos.copy(t.pos);
    t.cannonCd = Math.max(0, t.cannonCd - dt);
    if (this.input.ads && t.cannonCd <= 0 && t.operational) {
      t.cannonCd = 3.2;
      t.fireCannon(this.playerAimPoint());
    }
    if (this.input.fire) {
      t.fireCooldown[0] = Math.max(0, t.fireCooldown[0] - dt);
      if (t.fireCooldown[0] <= 0) {
        t.fireCooldown[0] = 0.1;
        const from = t.getSeatWorld('gunnerL');
        _dir.set(-Math.sin(p.yaw) * Math.cos(p.pitch), Math.sin(p.pitch), -Math.cos(p.yaw) * Math.cos(p.pitch)).normalize();
        const hit = this.raycastTargets(from, _dir, 380, 'british');
        const to = hit ? hit.point : from.clone().addScaledVector(_dir, 380);
        this.effects.tracer(from, to, 0xffe0a0, 0.07);
        this.effects.muzzle(from, _dir, 0.9);
        this.audio.mg('british', from);
        if (hit) this.applyHit(hit, 14 + Math.random() * 5, from, _dir, true);
      }
    }
    if (this.keys.has('KeyE')) { /* handled by keydown */ }
  }

  updateViewmodel(dt) {
    const p = this.player;
    const vm = this.viewmodel;
    const show = p.mode === 'foot' && !p.dead;
    vm.visible = show;
    if (!show) return;
    const ads = p.ads;
    const target = ads ? this.vmAds : this.vmBase;
    const sway = Math.sin(p.bob) * 0.006 * (p.speedFactor || 0);
    const sway2 = Math.cos(p.bob * 0.5) * 0.005 * (p.speedFactor || 0);
    vm.position.x = damp(vm.position.x, target.x + sway, 10, dt);
    vm.position.y = damp(vm.position.y, target.y + sway2 - p.kick * 0.012, 10, dt);
    vm.position.z = damp(vm.position.z, target.z + p.kick * 0.05, 12, dt);
    vm.rotation.x = damp(vm.rotation.x, 0.02 + p.kick * 0.05, 12, dt);
    vm.rotation.y = damp(vm.rotation.y, ads ? 0 : 0.06, 10, dt);
    vm.rotation.z = damp(vm.rotation.z, p.reloading > 0 ? -0.6 * Math.sin((1 - p.reloading / 2.6) * Math.PI) : 0, 8, dt);
    if (p.reloading > 0) vm.position.y -= Math.sin((1 - p.reloading / 2.6) * Math.PI) * 0.15;
  }

  tryJump() {
    const p = this.player;
    if (p.mode !== 'foot' || p.dead) return;
    if (p.grounded) { p.grounded = false; p.vy = 5.6; p.jumpY = 0.01; }
  }

  reload() {
    const p = this.player;
    if (p.mode !== 'foot' || p.dead || p.reloading > 0 || p.ammo === 10) return;
    p.reloading = 2.5;
    this.audio.reload();
    this.hud.message('Перезарядка…', 2.5);
  }

  fireRifle() {
    const p = this.player;
    if (p.ammo <= 0) { this.reload(); return; }
    p.ammo--;
    p.fireCd = 0.72;
    p.kick = 1;
    p.pitch += 0.012 + Math.random() * 0.008;
    const spread = (p.ads ? 0.0016 : 0.007) + (p.speedFactor || 0) * 0.006;
    this.camera.updateMatrixWorld();
    const origin = this.camera.getWorldPosition(new THREE.Vector3());
    const dir = this.camera.getWorldDirection(new THREE.Vector3());
    dir.x += (Math.random() - 0.5) * spread;
    dir.y += (Math.random() - 0.5) * spread;
    dir.z += (Math.random() - 0.5) * spread;
    dir.normalize();
    const hit = this.raycastTargets(origin, dir, 500, 'british');
    const muzzle = this.viewmodel.userData.muzzle.getWorldPosition(new THREE.Vector3());
    const to = hit ? hit.point : origin.clone().addScaledVector(dir, 500);
    this.effects.tracer(muzzle, to, 0xffe0a0, 0.08);
    this.effects.muzzle(muzzle, dir, 1.1);
    this.effects.shake = Math.min(1.5, this.effects.shake + 0.09);
    this.audio.shot('british', origin, 1);
    if (hit) {
      this.applyHit(hit, hit.head ? 120 : 58, muzzle, dir, true);
      this.hud.hitmark(hit.entity?.dead);
    } else {
      this.effects.impactDirt(to, 0.7);
    }
    if (p.ammo === 0) this.hud.message('Нажмите R для перезарядки', 2);
  }

  applyHit(hit, damage, from, dir, byPlayer = false) {
    const e = hit.entity;
    if (!e) { this.effects.impactDirt(hit.point, 0.6); return; }
    if (e.isPlayer) return;
    if (byPlayer) e._killedByPlayer = true;
    if (e.hit) {
      e.hit(damage, from, dir.clone ? dir.clone() : dir, hit.module);
      if (byPlayer && (e.dead || e.alive === false) && !e._counted) {
        e._counted = true;
        this.stats.playerKills++;
      }
    }
    if (hit.point) this.effects.impactDirt(hit.point, 0.4);
  }

  /* ---------------- targeting ---------------- */
  raycastTargets(origin, dir, maxDist, team) {
    let best = { dist: maxDist, entity: null, point: origin.clone().addScaledVector(dir, maxDist), head: false, module: null };
    // terrain march
    for (let t = 1; t < maxDist; t += 2.2) {
      const x = origin.x + dir.x * t, y = origin.y + dir.y * t, z = origin.z + dir.z * t;
      if (y < heightAt(x, z)) {
        best.dist = t;
        best.point.set(x, y, z);
        best.entity = null;
        break;
      }
    }
    const test = (cx, cy, cz, r, entity, head = false, module = null) => {
      const ox = cx - origin.x, oy = cy - origin.y, oz = cz - origin.z;
      const tca = ox * dir.x + oy * dir.y + oz * dir.z;
      if (tca < 0 || tca > best.dist) return;
      const d2 = ox * ox + oy * oy + oz * oz - tca * tca;
      if (d2 > r * r) return;
      const thc = Math.sqrt(r * r - d2);
      const t = tca - thc;
      if (t < 0 || t > best.dist) return;
      best.dist = t; best.entity = entity; best.head = head; best.module = module;
      best.point.set(origin.x + dir.x * t, origin.y + dir.y * t, origin.z + dir.z * t);
    };
    for (const s of this.soldiers) {
      if (s.dead || s.inVehicle || s.team === team) continue;
      test(s.x, s.y + 1.05, s.z, 0.42, s);
      test(s.x, s.y + 1.73, s.z, 0.2, s, true);
    }
    for (const t of this.tanks) {
      if (!t.alive || t.team === team) continue;
      test(t.pos.x, t.pos.y + 1.4, t.pos.z, 3.4, t);
    }
    for (const p of this.planes) {
      if (!p.alive || p.team === team) continue;
      const fwd = p.forward, right = new THREE.Vector3(1, 0, 0).applyQuaternion(p.quat);
      test(p.pos.x, p.pos.y + 1.2, p.pos.z, 2.1, p, false, 'engine');
      test(p.pos.x + right.x * 2.6, p.pos.y + 1.2 + right.y * 2.6, p.pos.z + right.z * 2.6, 1.3, p, false, 'wingL');
      test(p.pos.x - right.x * 2.6, p.pos.y + 1.2 - right.y * 2.6, p.pos.z - right.z * 2.6, 1.3, p, false, 'wingR');
      test(p.pos.x - fwd.x * 2.2, p.pos.y + 1.2, p.pos.z - fwd.z * 2.2, 1.0, p, false, 'tail');
    }
    return best.entity || best.point ? best : null;
  }

  lineBlocked(from, to) {
    const d = to.clone().sub(from);
    const dist = d.length();
    if (dist < 1) return null;
    d.divideScalar(dist);
    for (let t = 4; t < dist - 2; t += 3.5) {
      const x = from.x + d.x * t, y = from.y + d.y * t, z = from.z + d.z * t;
      if (y < heightAt(x, z) + 0.05) return new THREE.Vector3(x, y, z);
    }
    return null;
  }

  hasLineOfSight(a, b) {
    const from = new THREE.Vector3(a.x, (a.y ?? heightAt(a.x, a.z)) + 1.5, a.z);
    const to = new THREE.Vector3(b.x, (b.y ?? heightAt(b.x, b.z)) + (b.headY ?? 1.3), b.z);
    return !this.lineBlocked(from, to);
  }

  findTarget(team, x, z, range) {
    let best = null, bestD = range;
    let bestNoLos = null, bestNoLosD = range;
    for (const s of this.soldiers) {
      if (s.team === team || s.dead || s.inVehicle) continue;
      const d = Math.hypot(s.x - x, s.z - z);
      if (d > range) continue;
      if (this.hasLineOfSight({ x, z, y: heightAt(x, z) }, s)) {
        if (d < bestD) { best = s; bestD = d; }
      } else if (d < bestNoLosD) { bestNoLos = s; bestNoLosD = d; }
    }
    const p = this.player;
    if (!p.dead && (p.mode === 'foot' || p.mode === 'mg' || p.mode === 'tank') && team !== 'british') {
      const d = Math.hypot(p.pos.x - x, p.pos.z - z);
      if (d < range) {
        this.playerTarget.running = (p.speedFactor || 0) > 0.4;
        this.playerTarget.inTrench = inTrench(p.pos.x, p.pos.z);
        if (this.hasLineOfSight({ x, z, y: heightAt(x, z) }, this.playerTarget)) {
          if (d < bestD) { best = this.playerTarget; bestD = d; }
        } else if (d < bestNoLosD) { bestNoLos = this.playerTarget; bestNoLosD = d; }
      }
    }
    return best || bestNoLos;
  }

  isDead(t) {
    if (!t) return true;
    if (t.isPlayer) return this.player.dead;
    if (t.alive === false) return true;
    return !!t.dead;
  }

  /* ---------------- player damage ---------------- */
  damagePlayer(dmg, from, dir) {
    const p = this.player;
    if (p.dead || !this.started || p.spawnGuard > 0) return;
    // incoming fire hits the hull, not the crew, while the player is buttoned up
    if (p.mode === 'tank' && p.tank && p.tank.alive) {
      p.tank.hit(dmg * 0.55, from, dir);
      return;
    }
    p.hp -= dmg;
    p.damageT = 10;
    this.effects.shake = Math.min(2, this.effects.shake + 0.25);
    this.hud.damageFlash();
    if (p.hp <= 0) this.killPlayer('Вы погибли');
  }

  playerPlaneHit(dmg) {
    if (this.player.mode === 'plane') this.damagePlayer(dmg);
  }

  killPlayer(reason = 'Вы погибли') {
    const p = this.player;
    if (p.dead) return;
    p.dead = true;
    p.deathTimer = 4.2;
    p.hp = 0;
    p.deathReason = reason;
    this.stats.deaths++;
    this.hud.setDeath(true, reason);
    if (p.mode === 'mg' && p.mg) p.mg.dismount();
    if (p.mode === 'plane' && p.plane) { p.plane.pilot = null; this.audio.stopEngine(); }
    if (p.mode === 'tank' && p.tank) p.tank.playerAboard = false;
    p.mode = 'foot';
    p.mg = null; p.tank = null; p.plane = null; p.chute = null;
  }

  respawnPlayer() {
    const p = this.player;
    p.dead = false;
    p.hp = p.maxHp;
    p.mode = 'foot';
    p.pos.set(this.spawnPoint.x, heightAt(this.spawnPoint.x, this.spawnPoint.z), this.spawnPoint.z);
    p.yaw = Math.PI; p.pitch = -0.02;
    p.ammo = 10; p.reserve = 90; p.reloading = 0;
    p.jumpY = 0; p.vy = 0; p.grounded = true;
    p.spawnGuard = 5;
    this.hud.setDeath(false);
    this.hud.message('Снова в строю!', 2);
  }

  /* ---------------- interactions ---------------- */
  findInteractable() {
    const p = this.player;
    if (p.dead) return null;
    if (p.mode === 'mg') return { type: 'exit', label: 'E — отпустить пулемёт' };
    if (p.mode === 'tank') return { type: 'exit', label: 'E — выйти из танка' };
    if (p.mode === 'plane') return { type: p.plane?.onGround ? 'exitplane' : 'bail', label: p.plane?.onGround ? 'E — выйти из самолёта' : 'E — прыгнуть с парашютом' };
    if (p.mode !== 'foot') return null;
    let best = null, bestD = 6.5;
    for (const mg of this.mgs) {
      if (mg.mountedBy) continue;
      const d = Math.hypot(p.pos.x - mg.pos.x, p.pos.z - mg.pos.z);
      if (d < 2.8 && d < bestD) { best = { type: 'mg', obj: mg, label: 'E — встать за пулемёт' }; bestD = d; }
    }
    for (const t of this.tanks) {
      if (!t.alive || t.playerAboard) continue;
      const d = Math.hypot(p.pos.x - t.pos.x, p.pos.z - t.pos.z);
      if (d < 7 && d < bestD) { best = { type: 'tank', obj: t, label: 'E — залезть в танк (стрелок)' }; bestD = d; }
    }
    for (const pl of this.planes) {
      if (!pl.alive || pl.pilot) continue;
      const d = Math.hypot(p.pos.x - pl.pos.x, p.pos.z - pl.pos.z);
      if (d < 6.5 && d < bestD) { best = { type: 'plane', obj: pl, label: 'E — сесть в самолёт' }; bestD = d; }
    }
    return best;
  }

  interact() {
    if (!this.started) return;
    const p = this.player;
    if (p.dead) return;
    if (p.mode === 'mg') { this.exitMG(); return; }
    if (p.mode === 'tank') { this.exitTank(); return; }
    if (p.mode === 'plane') {
      if (p.plane?.onGround) this.exitPlane();
      else this.bailPlane();
      return;
    }
    if (p.mode !== 'foot') return;
    const it = this.findInteractable();
    if (!it) return;
    if (it.type === 'mg') this.enterMG(it.obj);
    else if (it.type === 'tank') this.enterTank(it.obj);
    else if (it.type === 'plane') this.enterPlane(it.obj);
  }

  enterMG(mg) {
    const p = this.player;
    mg.mount(p);
    p.mode = 'mg'; p.mg = mg;
    p.pos.set(mg.site.x, mg.site.y, mg.site.z);
    p.yaw = mg.baseYaw;
    this.hud.message('Пулемёт Виккерс. ЛКМ — огонь.', 2.2);
  }

  exitMG() {
    const p = this.player;
    if (p.mg) {
      const mg = p.mg;
      mg.dismount();
      p.pos.set(mg.site.x, heightAt(mg.site.x, mg.site.z), mg.site.z + (mg.site.team === 'british' ? -1.4 : 1.4));
      p.mg = null;
    }
    p.mode = 'foot';
  }

  enterTank(t) {
    const p = this.player;
    t.playerAboard = true;
    p.mode = 'tank'; p.tank = t;
    p.pos.copy(t.pos);
    p.yaw = t.yaw + Math.PI;
    p.pitch = 0;
    this.hud.message(t.operational ? 'Вы в танке Mark I. WASD — ход, ЛКМ — пулемёт, ПКМ — орудие.' : 'Экипаж ещё не занял места. Подождите.', 3);
  }

  exitTank() {
    const p = this.player;
    if (p.tank) {
      p.tank.playerAboard = false;
      const t = p.tank;
      const side = new THREE.Vector3(4.2, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), t.yaw);
      p.pos.set(t.pos.x + side.x, heightAt(t.pos.x + side.x, t.pos.z + side.z), t.pos.z + side.z);
      p.tank = null;
    }
    p.mode = 'foot';
  }

  enterPlane(pl) {
    const p = this.player;
    pl.setPilot('player');
    p.mode = 'plane'; p.plane = pl;
    p.pos.copy(pl.pos);
    this.flightStick.x = 0; this.flightStick.y = 0;
    pl.throttle = Math.max(pl.throttle, 0.15);
    this.audio.startEngine();
    this.hud.message('Самолёт. W/S — газ, мышь — крен/тангаж, Space/ЛКМ — огонь, E — прыжок.', 4);
  }

  exitPlane() {
    const p = this.player;
    if (p.plane) {
      const pl = p.plane;
      pl.setPilot(null);
      const side = new THREE.Vector3(3.4, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), pl.yaw);
      p.pos.set(pl.pos.x + side.x, heightAt(pl.pos.x + side.x, pl.pos.z + side.z), pl.pos.z + side.z);
      p.plane = null;
    }
    p.mode = 'foot';
    this.audio.stopEngine();
  }

  bailPlane() {
    const p = this.player, pl = p.plane;
    if (!pl || p.mode !== 'plane') return;
    if (pl.onGround || pl.altitude < 8) { this.exitPlane(); return; }
    const chute = this.spawnParachute(pl.pos.clone(), 'british', true);
    p.chute = chute;
    p.mode = 'parachute';
    p.pos.copy(pl.pos);
    pl.pilot = null;
    p.plane = null;
    this.audio.stopEngine();
    this.hud.message('Парашют раскрыт!', 3);
  }

  spawnParachute(pos, team, isPlayer) {
    const chute = new Parachute(this, pos, team, isPlayer);
    return chute;
  }

  onParachuteLanded(chute) {
    if (chute.isPlayer) {
      const p = this.player;
      p.mode = 'foot';
      p.chute = null;
      p.pos.set(chute.pos.x, heightAt(chute.pos.x, chute.pos.z), chute.pos.z);
      p.hp = Math.min(p.hp, 85);
      p.jumpY = 0; p.grounded = true;
      this.hud.message('Приземление. Продолжайте бой.', 2.5);
    } else {
      // surviving bot pilot rejoins the fight
      const s = new Soldier(this, {
        x: chute.pos.x, z: chute.pos.z, team: chute.team,
        variant: chute.team === 'british' ? 'british1' : 'german1', hp: 70,
      });
      s.aiRole = 'rifle';
      s.homeX = s.x; s.homeZ = s.z; s.patrolX = s.x; s.patrolZ = s.z;
      this.hud.killfeed(chute.team === 'british' ? 'Британский пилот приземлился' : 'Немецкий пилот приземлился', chute.team);
    }
  }

  /* ---------------- death / respawn hooks ---------------- */
  addRagdoll(soldier, impulse) {
    const r = new Ragdoll(soldier, soldier.team, impulse, this.scene);
    this.ragdolls.push(r);
    if (this.ragdolls.length > 20) {
      const old = this.ragdolls.shift();
      old.dispose();
    }
  }

  spawnCorpse(team, x, z) {
    const s = new Soldier(this, {
      x, z, team,
      variant: team === 'british' ? 'british1' : 'german1',
      yaw: Math.random() * TAU,
    });
    s.dead = true;
    s.group.visible = false;
    s.y = heightAt(x, z);
    const impulse = new THREE.Vector3((Math.random() - 0.5) * 1.2, 0.4 + Math.random() * 0.5, (Math.random() - 0.5) * 1.2);
    this.addRagdoll(s, impulse);
  }

  onSoldierDied(s) {
    if (s.team === 'british') this.stats.enemy++;
    else this.stats.allied++;
    const text = s._killedByPlayer
      ? `ВЫ ⟶ ${s.team === 'german' ? 'немец' : 'противник'}`
      : (s.team === 'german' ? 'Немецкий солдат убит' : 'Британский солдат погиб');
    this.hud.killfeed(text, s.team === 'german' ? 'british' : 'german');
    this.respawnQueue.push({ team: s.team, timer: 22 + Math.random() * 12 });
    if (s.mgSite) {
      s.mgSite.mountedBy = null;
      s.mgSite = null;
    }
  }

  onTankDestroyed(t) {
    if (t.team === 'british') this.stats.enemy += 3;
    else this.stats.allied += 3;
    if (t === this.player.tank || (this.player.mode === 'tank' && this.player.tank === t)) {
      this.killPlayer('Ваш танк уничтожен');
    }
    this.effects.debris(t.pos.clone().add(new THREE.Vector3(0, 1.5, 0)), 14, t.team === 'british' ? 0x5b5a3c : 0x6a6a55);
    this.hud.killfeed(t.team === 'british' ? 'Британский танк уничтожен' : 'Германский A7V уничтожен', t.team === 'british' ? 'german' : 'british');
  }

  onPlaneDestroyed(p) {
    if (p.team === 'british') this.stats.enemy += 2;
    else this.stats.allied += 2;
    this.hud.killfeed(p.team === 'british' ? 'Британский самолёт сбит' : 'Германский самолёт сбит', p.team === 'british' ? 'german' : 'british');
  }

  updateRespawns(dt) {
    for (let i = this.respawnQueue.length - 1; i >= 0; i--) {
      const q = this.respawnQueue[i];
      q.timer -= dt;
      if (q.timer <= 0) {
        this.respawnQueue.splice(i, 1);
        const count = this.soldiers.filter((s) => s.team === q.team && !s.dead).length;
        if (count < 12) this.spawnReinforcement(q.team);
      }
    }
  }

  spawnReinforcement(team) {
    const side = team === 'british' ? -1 : 1;
    // keep the fire step manned
    if (this.soldiers.filter((s) => s.team === team && !s.dead && s.aiRole === 'sentry').length < 3) {
      const x = (team === 'british' ? -120 : -40) + (Math.random() - 0.5) * 260;
      const z = trenchZ(x, side) - side * (trenchWidth(x) + 0.25);
      const s = new Soldier(this, { x, z, team, variant: team === 'british' ? 'british1' : 'german1' });
      s.aiRole = 'sentry'; s.sentry = true;
      s.homeX = x; s.homeZ = z; s.patrolX = x; s.patrolZ = z;
      return;
    }
    const x = (team === 'british' ? -260 : 60) + (Math.random() - 0.5) * 380;
    const z = trenchZ(x, side) - side * (trenchWidth(x) - 0.85);
    const s = new Soldier(this, {
      x, z, team, variant: Math.random() < 0.33 ? (team === 'british' ? 'british2' : 'german2') : (team === 'british' ? 'british1' : 'german1'),
    });
    s.homeX = x; s.homeZ = z; s.patrolX = x; s.patrolZ = z; s.aiRole = 'rifle';
    // if an MG is free, send the reinforcement to it
    const free = this.mgs.find((m) => m.team === team && !m.mountedBy && Math.hypot(m.site.x - x, m.site.z - z) < 200);
    if (free && Math.random() < 0.6) { s.mgSite = free; s.aiRole = 'mg'; }
  }

  updateAmbient(dt) {
    this.artilleryTimer -= dt;
    if (this.artilleryTimer <= 0) {
      this.artilleryTimer = 8 + Math.random() * 12;
      const side = Math.random() < 0.5 ? -1 : 1;
      const x = (Math.random() - 0.5) * 900;
      const z = side * (200 + Math.random() * 90);
      const y = heightAt(x, z);
      this.effects.explosion(new THREE.Vector3(x, y + 1, z), 2.2 + Math.random());
      this.effects.smoke(new THREE.Vector3(x, y + 1, z), 4, [0.24, 0.22, 0.2], 5, 3, 8);
    }
    // campfire smoke
    this.smokeTimer -= dt;
    if (this.smokeTimer <= 0) {
      this.smokeTimer = 0.28;
      for (const src of this.world.smokeSources) {
        if (Math.random() < 0.5) {
          this.effects.smoke(new THREE.Vector3(src.x, src.y, src.z), src.size, src.color, 1, src.rise, src.life);
        }
      }
      for (const p of this.planes) {
        if (!p.alive && Math.random() < 0.5) {
          this.effects.smoke(p.pos.clone().add(new THREE.Vector3(0, 1, 0)), 1.4, [0.18, 0.17, 0.16], 1, 1.2, 4);
        }
      }
      for (const t of this.tanks) {
        if (!t.alive && Math.random() < 0.6) {
          this.effects.smoke(t.pos.clone().add(new THREE.Vector3(0, 2, 0)), 1.6, [0.16, 0.15, 0.14], 1, 1.2, 4);
        }
      }
    }
  }

  combatNearby() {
    const p = this.player.pos;
    for (const s of this.soldiers) {
      if (!s.dead && Math.hypot(s.x - p.x, s.z - p.z) < 80) return true;
    }
    return false;
  }

  playerAimPoint() {
    this.camera.getWorldDirection(_dir);
    return this.camera.getWorldPosition(new THREE.Vector3()).addScaledVector(_dir, 320);
  }
}

/* ================================================================== *
 *  HUD
 * ================================================================== */
class HUD {
  constructor(game) {
    this.game = game;
    this.el = {
      menu: document.getElementById('menu'),
      healthFill: document.getElementById('health-fill'),
      healthText: document.getElementById('health-text'),
      ammo: document.getElementById('ammo'),
      weapon: document.getElementById('weapon-name'),
      prompt: document.getElementById('prompt'),
      message: document.getElementById('message'),
      killfeed: document.getElementById('killfeed'),
      score: document.getElementById('score'),
      crosshair: document.getElementById('crosshair'),
      hitmarker: document.getElementById('hitmarker'),
      damage: document.getElementById('damage-flash'),
      death: document.getElementById('death'),
      deathReason: document.getElementById('death-reason'),
      compass: document.getElementById('compass'),
      vehicle: document.getElementById('vehicle-panel'),
      pause: document.getElementById('pause'),
      minimap: document.getElementById('minimap'),
      objective: document.getElementById('objective'),
      touch: document.getElementById('touch-controls'),
    };
    this.msgTimer = 0;
    this.hitTimer = 0;
    this.damageTimer = 0;
    this.feed = [];
    this.mapCtx = this.el.minimap?.getContext('2d');
    this.mapTimer = 0;
    if (game.isTouch) document.body.classList.add('is-touch');
  }

  hideMenu() { this.el.menu?.classList.add('hidden'); if (this.game.isTouch) this.el.touch?.classList.remove('hidden'); }
  setPause(v) { this.el.pause?.classList.toggle('hidden', !v); }
  setDeath(v, reason = '') {
    this.el.death?.classList.toggle('hidden', !v);
    if (reason && this.el.deathReason) this.el.deathReason.textContent = reason;
  }
  message(text, dur = 2) {
    this.msgTimer = dur;
    if (this.el.message) { this.el.message.textContent = text; this.el.message.classList.add('show'); }
  }
  killfeed(text, team = 'british') {
    this.feed.push({ text, team, t: 6 });
    if (this.feed.length > 5) this.feed.shift();
    this.renderFeed();
  }
  renderFeed() {
    if (!this.el.killfeed) return;
    this.el.killfeed.innerHTML = this.feed.map((f) => `<div class="feed-item ${f.team}">${f.text}</div>`).join('');
  }
  hitmark(dead) {
    this.hitTimer = 0.18;
    this.el.hitmarker?.classList.add('show');
    this.el.hitmarker?.classList.toggle('dead', !!dead);
    this.game.audio.hitmark();
  }
  damageFlash() {
    this.damageTimer = 0.5;
    this.el.damage?.classList.add('show');
  }
  setPrompt(text) {
    if (!this.el.prompt) return;
    this.el.prompt.textContent = text;
    this.el.prompt.classList.toggle('show', !!text);
  }

  update(dt) {
    const g = this.game, p = g.player;
    if (this.msgTimer > 0) {
      this.msgTimer -= dt;
      if (this.msgTimer <= 0) this.el.message?.classList.remove('show');
    }
    if (this.hitTimer > 0) {
      this.hitTimer -= dt;
      if (this.hitTimer <= 0) this.el.hitmarker?.classList.remove('show');
    }
    if (this.damageTimer > 0) {
      this.damageTimer -= dt;
      if (this.damageTimer <= 0) this.el.damage?.classList.remove('show');
    }
    for (const f of this.feed) f.t -= dt;
    const before = this.feed.length;
    this.feed = this.feed.filter((f) => f.t > 0);
    if (this.feed.length !== before) this.renderFeed();
    const hp = Math.max(0, Math.round(p.hp));
    if (this.el.healthFill) this.el.healthFill.style.width = `${clamp(hp, 0, 100)}%`;
    if (this.el.healthText) this.el.healthText.textContent = hp;
    if (this.el.score) this.el.score.innerHTML = `<span class="brit">${g.stats.allied}</span> : <span class="ger">${g.stats.enemy}</span>`;
    if (this.el.ammo) {
      if (p.mode === 'foot') this.el.ammo.textContent = p.reloading > 0 ? '…' : `${p.ammo} / ${p.reserve}`;
      else if (p.mode === 'mg' && p.mg) this.el.ammo.textContent = `${p.mg.ammo}${p.mg.overheated ? ' ПЕРЕГРЕВ' : ''}`;
      else if (p.mode === 'tank') this.el.ammo.textContent = '∞';
      else if (p.mode === 'plane' && p.plane) this.el.ammo.textContent = `${p.plane.ammo}`;
      else this.el.ammo.textContent = '—';
    }
    if (this.el.weapon) {
      const names = { foot: 'SMLE Mk III', mg: 'Vickers .303', tank: 'Mark I — 7.7 мм', plane: 'Sopwith Camel — Lewis', parachute: 'Парашют' };
      this.el.weapon.textContent = names[p.mode] || '';
    }
    // compass
    if (this.el.compass) {
      let deg = (((p.yaw - Math.PI) * 180 / Math.PI) % 360 + 360) % 360;
      const dirs = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
      const d = dirs[Math.round(deg / 45) % 8];
      this.el.compass.innerHTML = `<span class="compass-dir">${d}</span><span class="compass-deg">${Math.round(deg)}°</span>`;
    }
    // vehicle panel
    if (this.el.vehicle) {
      if (p.mode === 'plane' && p.plane) {
        const pl = p.plane;
        this.el.vehicle.classList.add('show');
        this.el.vehicle.innerHTML = `<div><b>ВЫСОТА</b> ${Math.max(0, Math.round(pl.altitude))} м</div><div><b>СКОРОСТЬ</b> ${Math.round(pl.speed * 3.6)} км/ч</div><div><b>ГАЗ</b> ${Math.round(pl.throttle * 100)}%</div><div class="bar"><i style="width:${pl.health}%"></i></div>`;
      } else if (p.mode === 'tank' && p.tank) {
        const t = p.tank;
        this.el.vehicle.classList.add('show');
        this.el.vehicle.innerHTML = `<div><b>MARK I</b> ${t.operational ? 'ЭКИПАЖ ГОТОВ' : 'ЭКИПАЖ ' + t.crewCount + '/3'}</div><div><b>ПРОЧНОСТЬ</b> ${Math.round(t.hp / t.maxHp * 100)}%</div><div class="bar"><i style="width:${t.hp / t.maxHp * 100}%"></i></div>`;
      } else {
        this.el.vehicle.classList.remove('show');
      }
    }
    this.mapTimer -= dt;
    if (this.mapTimer <= 0) { this.mapTimer = 0.12; this.drawMinimap(); }
    this.el.crosshair?.classList.toggle('ads', p.ads);
    this.el.crosshair?.classList.toggle('hide', p.mode !== 'foot' || p.dead);
  }

  drawMinimap() {
    const ctx = this.mapCtx;
    if (!ctx) return;
    const g = this.game, p = g.player;
    const W = ctx.canvas.width, H = ctx.canvas.height;
    const cx = W / 2, cy = H / 2;
    const s = 0.62;
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, W / 2 - 2, 0, TAU);
    ctx.clip();
    ctx.fillStyle = '#3f3a2a';
    ctx.fillRect(0, 0, W, H);
    // no man's land band
    const toMap = (x, z) => [cx + (x - p.pos.x) * s, cy - (z - p.pos.z) * s];
    const bandTop = toMap(0, 46)[1], bandBot = toMap(0, -46)[1];
    ctx.fillStyle = '#6b5b3f';
    ctx.fillRect(0, Math.min(bandTop, bandBot), W, Math.abs(bandBot - bandTop));
    // trenches
    ctx.strokeStyle = '#d0bd8a';
    ctx.lineWidth = 2;
    for (const side of [-1, 1]) {
      ctx.beginPath();
      for (let x = p.pos.x - 240; x <= p.pos.x + 240; x += 8) {
        const [mx, my] = toMap(x, trenchZ(x, side));
        if (x === p.pos.x - 240) ctx.moveTo(mx, my); else ctx.lineTo(mx, my);
      }
      ctx.stroke();
    }
    // bases
    for (const [bx, bz, col] of [[-470, -190, '#8b7b4a'], [500, 210, '#7a3a32']]) {
      const [mx, my] = toMap(bx, bz);
      ctx.fillStyle = col;
      ctx.fillRect(mx - 12, my - 9, 24, 18);
    }
    // entities
    for (const sol of g.soldiers) {
      if (sol.dead) continue;
      const d = Math.hypot(sol.x - p.pos.x, sol.z - p.pos.z);
      if (d > 210) continue;
      const [mx, my] = toMap(sol.x, sol.z);
      ctx.fillStyle = sol.team === 'british' ? '#d8c990' : '#d06a52';
      ctx.fillRect(mx - 1.4, my - 1.4, 2.8, 2.8);
    }
    for (const t of g.tanks) {
      if (!t.alive) continue;
      const [mx, my] = toMap(t.pos.x, t.pos.z);
      ctx.fillStyle = t.team === 'british' ? '#e6d79b' : '#c25a45';
      ctx.fillRect(mx - 5, my - 3.5, 10, 7);
    }
    for (const pl of g.planes) {
      if (!pl.alive) continue;
      const [mx, my] = toMap(pl.pos.x, pl.pos.z);
      ctx.fillStyle = pl.team === 'british' ? '#f1e6b8' : '#e0846b';
      ctx.beginPath();
      ctx.moveTo(mx, my - 5); ctx.lineTo(mx + 4, my + 3); ctx.lineTo(mx - 4, my + 3); ctx.closePath(); ctx.fill();
    }
    // player arrow
    ctx.save();
    ctx.translate(cx, cy);
    const fwd = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(0, p.yaw, 0));
    ctx.rotate(Math.atan2(fwd.x, fwd.z));
    ctx.fillStyle = '#fff8e0';
    ctx.beginPath(); ctx.moveTo(0, -7); ctx.lineTo(5, 5); ctx.lineTo(0, 2); ctx.lineTo(-5, 5); ctx.closePath(); ctx.fill();
    ctx.restore();
    // grid ring
    ctx.strokeStyle = 'rgba(230,215,170,0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, W / 2 - 6, 0, TAU); ctx.stroke();
    ctx.restore();
    // N marker
    ctx.fillStyle = '#e8dcb8';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('С', cx, 14);
  }
}
