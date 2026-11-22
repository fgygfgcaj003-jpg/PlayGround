import * as THREE from 'three';
import { City, NODE_POS } from './city.js';
import { Player } from './player.js';
import { VehicleManager } from './vehicles.js';
import { PedestrianSystem } from './npcs.js';
import { UI } from './ui.js';
import { Effects } from './effects.js';
import { AudioEngine } from './audio.js';
import { WantedSystem, EmergencySystem, CityEvents } from './ai.js';
import { InteriorSystem, JobSystem, TransitSystem } from './gameplay.js';
import { VEHICLE_TYPES } from './models.js';
import { clamp, lerp, rand, pick, formatMoney } from './utils.js';

const SAVE_KEY = 'novacity-save-v1';
const SETTINGS_KEY = 'novacity-settings-v1';
const IDLE_INPUT = { forward: false, back: false, left: false, right: false, sprint: false, jump: false, brake: false, crouch: false };

const WEATHER = ['clear', 'clear', 'clear', 'rain', 'storm', 'snow'];

const SUIT_JACKETS = [0x27384d, 0x6b2d35, 0x344a3a, 0x51465c, 0x8c6b3d, 0x3e5f80, 0x7a3e52];
const SUIT_PANTS = [0x222a33, 0x2c2f36, 0x3b3b40, 0x4a4136, 0x5a5d60];

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => resolve()));

class Game {
  constructor() {
    this.canvas = document.getElementById('game');
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.02;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9db7cd);
    this.fog = new THREE.FogExp2(0x9fb4c6, 0.00055);
    this.scene.fog = this.fog;
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.1, 2600);
    this.camera.position.set(40, 22, 60);

    this.settings = this.loadSettings();
    this.applyRendererSettings();

    this.clock3 = new THREE.Clock();
    this.money = 2500;
    this.health = 100;
    this.hour = 6.4;
    this.totalHours = 6.4;
    this.night = 0;
    this.weather = 'clear';
    this.temperature = 18;
    this.weatherTimer = rand(150, 240);
    this.thunderTimer = rand(6, 14);
    this.flashArmed = true;
    this.timeScale = 24 / 720;
    this.mode = 'boot';
    this.paused = false;
    this.started = false;
    this.ready = false;
    this.camShake = 0;
    this.powerOutage = false;
    this.gps = null;
    this.bustedCooldown = 0;
    this.crimeCooldown = 0;
    this.metroPass = 0;
    this.lastVehicle = null;
    this.interaction = null;
    this.keys = new Set();
    this.gamepadButtons = new Set();
    this.gamepadId = null;
    this.jumpBuffer = 0;
    this.input = { ...IDLE_INPUT };
    this.controls = { vehicle: {} };
    this.touch = { x: 0, y: 0, lookX: 0, lookY: 0, sprint: false, jump: false, throttle: false, brake: false };
    this.elapsed = 0;
    this.ui = null;
    this.player = null;
    this.dragging = false;
    this.lastPointer = { x: 0, y: 0 };
    this.menuClockAcc = 0;

    this.audio = new AudioEngine();
    this.bindWindowEvents();
    this.boot();
  }

  /* ------------------------------------------------------------------ */
  /* Setup                                                               */
  /* ------------------------------------------------------------------ */

  loadSettings() {
    const defaults = { quality: 'medium', shadows: true, volume: 0.7, invert: false, time: 'dawn', fov: 62, mode: 'pc', language: 'en' };
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      return raw ? { ...defaults, ...JSON.parse(raw) } : defaults;
    } catch (e) { return defaults; }
  }

  saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings)); } catch (e) { /* ignore */ }
    this.applyRendererSettings();
  }

  applyRendererSettings() {
    const s = this.settings;
    const cap = s.quality === 'low' ? 1 : s.quality === 'high' ? 2 : 1.5;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
    this.renderer.shadowMap.enabled = !!s.shadows;
    this.camera.fov = s.fov || 62;
    this.camera.updateProjectionMatrix();
    if (this.city?.sun) this.city.sun.castShadow = !!s.shadows;
  }

  setQuality(q) {
    this.settings.quality = q;
    this.applyRendererSettings();
    this.saveSettings();
  }

  setLoading(text, pct) {
    const note = document.querySelector('.loading-note');
    if (note && text) note.textContent = text;
    const bar = document.querySelector('.loading-bar i');
    if (bar && pct != null) {
      bar.style.animation = 'none';
      bar.style.width = `${clamp(pct, 0, 100)}%`;
    }
  }

  async boot() {
    try {
      this.setLoading('Surveying the bay · plotting districts', 8);
      await nextFrame(); await nextFrame();

      this.city = new City(this.scene);
      this.city.game = this;
      this.night = this.city.night;
      this.setLoading('Paving roads · raising the skyline', 34);
      await nextFrame();

      this.effects = new Effects(this.scene);
      this.player = new Player(this);
      this.player.beginCinematic(170, 96, 210, 250, 0.055);
      this.setLoading('Waking the traffic system', 52);
      await nextFrame();

      this.vehicles = new VehicleManager(this);
      this.vehicles.spawnParkedCity();
      const trafficCount = this.settings.quality === 'low' ? 84 : 140;
      this.vehicles.spawnTraffic(trafficCount);
      this.onTrafficCollision = (pv, other) => this.handleTrafficCollision(pv, other);
      this.onPedHit = (ped, pv) => this.handlePedHit(ped, pv);
      this.setLoading('Populating sidewalks · dispatching services', 68);
      await nextFrame();

      this.npcs = new PedestrianSystem(this);
      this.wanted = new WantedSystem(this);
      this.emergency = new EmergencySystem(this);
      this.events = new CityEvents(this);
      this.setLoading('Opening storefronts and stations', 82);
      await nextFrame();

      this.interiors = new InteriorSystem(this);
      this.jobs = new JobSystem(this);
      this.transit = new TransitSystem(this);
      this.setupOwnedVehicles();
      this.setLoading('Calibrating the city', 94);
      await nextFrame();

      this.ui = new UI(this);
      this.ui.updateMoney();
      this.ui.updateWanted();
      this.player.endCinematic();
      this.player.beginCinematic(170, 96, 210, 250, 0.055);
      this.city.updateLighting(this.hour, this.weather, 0);

      this.ready = true;
      this.mode = 'menu';
      this.resize();
      this.clock3.start();
      this.ui.hideLoading();
      this.ui.showMenu();
      this.setLoading('Ready', 100);
      requestAnimationFrame(() => this.loop());
    } catch (err) {
      console.error(err);
      this.fatal(err);
    }
  }

  fatal(err) {
    const note = document.querySelector('.loading-note');
    if (note) {
      note.textContent = 'NOVA CITY failed to start — ' + (err?.message || 'unknown error');
      note.style.color = '#ff8c9a';
      note.style.maxWidth = '70vw';
      note.style.textAlign = 'center';
      note.style.textTransform = 'none';
    }
  }

  setupOwnedVehicles() {
    this.ownedVehicles = [{ ...VEHICLE_TYPES.sedan, type: 'sedan', color: 0x2b4a6f, name: 'Your Sable' }];
    this.money = 2500;
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  }

  /* ------------------------------------------------------------------ */
  /* Input                                                               */
  /* ------------------------------------------------------------------ */

  bindWindowEvents() {
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('keydown', (e) => {
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        if (this.mode !== 'menu' || e.code === 'Tab') e.preventDefault();
      }
      this.keys.add(e.code);
      if (this.mode === 'menu' || !this.ready) return;
      if (e.code === 'Space' && !e.repeat) this.jumpBuffer = 0.2;
      if (e.repeat) return;

      switch (e.code) {
        case 'Tab': this.toggleOverlay('phone'); break;
        case 'KeyM': this.toggleOverlay('map'); break;
        case 'KeyE': this.interact(); break;
        case 'KeyF': this.toggleCamera(); break;
        case 'KeyH': this.horn(); break;
        case 'KeyL': this.toggleLights(); break;
        case 'KeyT': this.toggleTransitControls(); break;
        case 'KeyR': this.resetVehicle(); break;
        case 'KeyC': this.player && (this.player.crouching = !this.player.crouching); break;
        default: break;
      }
    });

    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());

    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    this.canvas.addEventListener('mousedown', (e) => {
      if (this.settings.mode === 'phone') return;
      if (e.button !== 0) return;
      if (this.mode === 'menu' || this.paused || this.ui?.overlay) return;
      this.dragging = true;
      this.lastPointer.x = e.clientX; this.lastPointer.y = e.clientY;
      if (document.pointerLockElement !== this.canvas) {
        try { this.canvas.requestPointerLock?.(); } catch (err) { /* pointer lock can be denied */ }
      }
    });
    window.addEventListener('mouseup', () => { this.dragging = false; });
    window.addEventListener('mousemove', (e) => {
      if (this.mode === 'menu' || this.paused || this.ui?.overlay || !this.player) return;
      let dx = 0, dy = 0;
      if (this.settings.mode === 'phone') return;
      if (document.pointerLockElement === this.canvas) {
        dx = e.movementX || 0; dy = e.movementY || 0;
      } else if (this.dragging) {
        dx = e.clientX - this.lastPointer.x; dy = e.clientY - this.lastPointer.y;
        this.lastPointer.x = e.clientX; this.lastPointer.y = e.clientY;
      }
      if (!dx && !dy) return;
      const s = 0.0024;
      // Dragging right turns the view right (yaw decreases in this world basis).
      this.player.cameraYaw -= dx * s;
      this.player.lookHold = 1.6;
      this.player.cameraPitch = clamp(this.player.cameraPitch + (this.settings.invert ? -1 : 1) * dy * s, -0.55, 1.0);
    });
    window.addEventListener('wheel', (e) => {
      if (this.mode === 'menu' || this.paused || this.ui?.overlay || !this.player) return;
      this.player.cameraDist = clamp(this.player.cameraDist + e.deltaY * 0.006, 3, 20);
    }, { passive: true });

    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== this.canvas) this.dragging = false;
    });
  }

  readInput(dt = 0) {
    const k = this.keys;
    const gamepads = navigator.getGamepads?.() || [];
    const pad = Array.from(gamepads).find((candidate) => candidate?.connected) || null;
    const buttons = new Set();
    let moveX = 0, moveY = 0, lookX = 0, lookY = 0;
    let padSprint = false, padJump = false, padBrake = false;

    if (pad) {
      this.gamepadId = pad.index;
      const axis = (value) => Math.abs(value || 0) < 0.16 ? 0 : value;
      moveX = axis(pad.axes[0]);
      moveY = axis(pad.axes[1]);
      lookX = axis(pad.axes[2]);
      lookY = axis(pad.axes[3]);
      const pressed = (index) => !!pad.buttons[index]?.pressed || (pad.buttons[index]?.value || 0) > 0.6;
      for (let i = 0; i < pad.buttons.length; i++) if (pressed(i)) buttons.add(i);
      padJump = buttons.has(0);
      padBrake = buttons.has(1);
      padSprint = buttons.has(5) || (pad.buttons[7]?.value || 0) > 0.25;
      const justPressed = (index) => buttons.has(index) && !this.gamepadButtons.has(index);
      if (this.mode !== 'menu' && this.ready) {
        if (justPressed(2)) this.interact();
        if (justPressed(3)) this.toggleOverlay('map');
        if (justPressed(4)) this.toggleOverlay('phone');
        if (justPressed(9)) this.togglePause();
      }
      if (lookX || lookY) {
        this.player.cameraYaw -= lookX * dt * 2.4;
        this.player.lookHold = 1.2;
        this.player.cameraPitch = clamp(this.player.cameraPitch + (this.settings.invert ? -1 : 1) * lookY * dt * 1.8, -0.55, 1.0);
      }
    } else {
      this.gamepadId = null;
    }
    this.gamepadButtons = buttons;

    const fwd = k.has('KeyW') || k.has('ArrowUp') || moveY < -0.25;
    const back = k.has('KeyS') || k.has('ArrowDown') || moveY > 0.25;
    const left = k.has('KeyA') || k.has('ArrowLeft') || moveX < -0.25;
    const right = k.has('KeyD') || k.has('ArrowRight') || moveX > 0.25;
    const sprint = k.has('ShiftLeft') || k.has('ShiftRight') || padSprint;
    const jump = k.has('Space') || this.jumpBuffer > 0 || padJump;
    this.jumpBuffer = 0;
    this.input.forward = fwd;
    this.input.back = back;
    this.input.left = left;
    this.input.right = right;
    this.input.sprint = sprint;
    this.input.jump = jump;
    this.input.brake = back || padBrake;
    this.input.crouch = k.has('KeyC') || buttons.has(1);
    if (this.settings.mode === 'phone') {
      this.input.forward = this.touch.y < -0.25;
      this.input.back = this.touch.y > 0.25;
      this.input.left = this.touch.x < -0.25;
      this.input.right = this.touch.x > 0.25;
      this.input.sprint = this.touch.sprint;
      if (this.touch.lookX || this.touch.lookY) {
        this.player.cameraYaw -= this.touch.lookX * dt * 2.4;
        this.player.lookHold = 1.2;
        this.player.cameraPitch = clamp(this.player.cameraPitch + (this.settings.invert ? -1 : 1) * this.touch.lookY * dt * 1.8, -0.55, 1.0);
      }
      if (this.touch.jump) this.jumpBuffer = 0.2;
      this.input.jump = this.touch.jump || this.jumpBuffer > 0;
    }
    this.controls.vehicle = {
      throttle: fwd ? 1 : 0,
      brake: back || padBrake ? 1 : 0,
      steer: (right ? 1 : 0) - (left ? 1 : 0),
      handbrake: jump,
      up: jump ? 1 : 0,
      down: sprint ? 1 : 0,
      left, right,
    };
    if (this.settings.mode === 'phone' && !pad) {
      const touchSteer = Math.abs(this.touch.x) < 0.12 ? 0 : this.touch.x;
      this.controls.vehicle.throttle = Math.max(this.touch.throttle ? 1 : 0, clamp(-this.touch.y, 0, 1));
      this.controls.vehicle.brake = Math.max(this.touch.brake ? 1 : 0, clamp(this.touch.y, 0, 1));
      this.controls.vehicle.steer = touchSteer;
      this.controls.vehicle.left = touchSteer < -0.16;
      this.controls.vehicle.right = touchSteer > 0.16;
      this.controls.vehicle.handbrake = this.touch.jump;
      this.controls.vehicle.up = this.touch.jump ? 1 : 0;
      this.controls.vehicle.down = this.touch.sprint ? 1 : 0;
    }
    if (pad && this.settings.mode !== 'phone') {
      this.controls.vehicle.throttle = moveY < -0.16 ? -moveY : 0;
      this.controls.vehicle.brake = moveY > 0.16 || padBrake ? Math.max(moveY, padBrake ? 1 : 0) : 0;
      this.controls.vehicle.steer = moveX;
      this.controls.vehicle.left = moveX < -0.16;
      this.controls.vehicle.right = moveX > 0.16;
      this.controls.vehicle.up = Math.max(this.controls.vehicle.up, padJump ? 1 : 0);
      this.controls.vehicle.down = Math.max(this.controls.vehicle.down, padSprint ? 1 : 0);
    }
  }

  applyTouchLook(dt) {
    if (this.settings.mode !== 'phone' || !this.player) return;
    const lx = this.touch.lookX || 0, ly = this.touch.lookY || 0;
    if (Math.abs(lx) < .03 && Math.abs(ly) < .03) return;
    this.player.cameraYaw -= lx * dt * 2.6;
    this.player.cameraPitch = clamp(this.player.cameraPitch + (this.settings.invert ? -1 : 1) * ly * dt * 1.9, -0.55, 1.0);
    this.player.lookHold = 1.4;
  }

  toggleOverlay(name) {
    if (!this.ui) return;
    if (this.ui.overlay === name) this.ui.closeOverlay();
    else this.ui.openOverlay(name);
  }

  togglePause() {
    if (!this.ui) return;
    if (this.ui.overlay) this.ui.closeOverlay();
    else this.ui.openOverlay('pause');
  }

  /* ------------------------------------------------------------------ */
  /* Main loop                                                           */
  /* ------------------------------------------------------------------ */

  loop() {
    requestAnimationFrame(() => this.loop());
    const raw = Math.min(this.clock3.getDelta(), 0.05);
    try { this.frame(raw); } catch (err) { console.error(err); }
    this.renderer.render(this.scene, this.camera);
  }

  frame(raw) {
    if (!this.ready) return;
    const dt = this.paused ? 0 : raw;

    if (this.mode === 'menu') {
      if (!this.paused) {
        this.elapsed += raw;
        this.updateTime(raw);
        this.player.update(raw, IDLE_INPUT);
        this.city.update(raw, this.elapsed, this.player.pos);
        this.effects.update(raw, this.elapsed, this.player.pos, this.weather);
        this.city.updateLighting(this.hour, this.weather, raw);
        this.night = this.city.night;
        this.updateAtmosphere(raw);
        this.audio.update(raw, null, this.weather, 999);
        this.audio.nightMode = this.night > 0.5;
      }
      this.menuClockAcc += raw;
      if (this.menuClockAcc > 0.4) {
        this.menuClockAcc = 0;
        const el = document.getElementById('menu-clock');
        if (el) el.textContent = this.clockText();
      }
      return;
    }

    if (!this.started) return;

    this.elapsed += dt;
    if (this.bustedCooldown > 0) this.bustedCooldown -= dt;
    if (this.crimeCooldown > 0) this.crimeCooldown -= dt;

    this.readInput(dt);
    this.applyTouchLook(dt);
    this.updateTime(dt);
    this.updateWeather(dt);
    this.city.updateLighting(this.hour, this.weather, dt);
    this.night = this.city.night;

    if (this.mode === 'interior') {
      this.updateInterior(dt);
    } else if (this.player.riding) {
      this.syncRidingPlayer();
      this.player.update(dt, this.input);
      this.transit.update(dt, this.input);
    } else {
      this.vehicles.update(dt, this.elapsed, this.night, this.weather);
      this.player.update(dt, this.input);
      const pv = this.player.vehicle;
      if (pv) {
        this.player.pos.copy(pv.pos);
        this.player.heading = pv.heading;
      }
    }

    this.city.update(dt, this.elapsed, this.player.pos);
    this.npcs.update(dt, this.elapsed, this.player);
    this.wanted.update(dt);
    this.emergency.update(dt, this.elapsed);
    this.events.update(dt, this.elapsed);
    this.jobs.update(dt);
    this.interiors.update(dt);
    this.effects.update(dt, this.elapsed, this.player.pos, this.weather);
    this.applyWeatherAudio(dt);

    this.audio.nightMode = this.night > 0.5;
    this.audio.update(dt, this.vehicles.playerVehicle, this.weather, this.emergency.nearestSirenDistance(this.player.pos));

    this.ui.updateHUD(dt);
    this.updateInteraction();
    this.handleVehicleFeedback();
    this.updateAtmosphere(raw);
  }

  updateTime(dt) {
    this.hour = (this.hour + dt * this.timeScale) % 24;
    this.totalHours += dt * this.timeScale;
    this.clock = this.totalHours;
  }

  updateAtmosphere(dt) {
    if (!this.scene.fog || !this.city) return;
    if (this.interiors?.current) return;
    const night = this.city.night;
    const wet = this.weather === 'storm' ? 0.0021 : this.weather === 'rain' ? 0.00135 : this.weather === 'snow' ? 0.00115 : 0.00055;
    this.scene.fog.density = lerp(this.scene.fog.density, wet, clamp(dt * 0.4, 0, 1));
    this.scene.fog.color.setRGB(
      lerp(0.58, 0.018, night),
      lerp(0.68, 0.032, night),
      lerp(0.79, 0.058, night)
    );
    this.scene.background.copy(this.scene.fog.color);
  }

  updateWeather(dt) {
    this.weatherTimer -= dt;
    if (this.weatherTimer <= 0) {
      this.weatherTimer = rand(150, 260);
      let next = pick(WEATHER);
      if (next === this.weather) next = this.weather === 'clear' ? 'rain' : 'clear';
      this.setWeather(next);
    }
    const target = this.targetTemperature();
    this.temperature = lerp(this.temperature, target, clamp(dt * 0.16, 0, 1));
    if (this.weather === 'storm') {
      this.thunderTimer -= dt;
      if (this.thunderTimer <= 0) {
        this.thunderTimer = rand(6, 16);
        this.audio.thunder();
      }
    }
  }

  targetTemperature() {
    const day = Math.max(0, Math.sin((this.hour - 6) / 24 * Math.PI * 2));
    const base = 11 + day * 13;
    const penalty = { clear: 0, rain: -3, storm: -5, snow: -10, fog: -2 }[this.weather] ?? 0;
    return base + penalty;
  }

  setWeather(kind, silent = false) {
    this.weather = kind;
    this.temperature = this.targetTemperature();
    if (this.effects) this.effects.setWeather(kind);
    if (this.ui) this.ui.setWeatherFx(kind);
    if (this.city) this.city.updateLighting(this.hour, kind, 0);
    if (!silent && this.ui) {
      const label = { clear: 'Skies clearing over Nova City', rain: 'Rain moving in from the bay', storm: 'Thunderstorm warning issued', snow: 'Snow falling across the city', fog: 'Fog rolling through downtown' }[kind];
      if (label) this.notify(label, kind === 'storm' ? 'warn' : '');
    }
    if (kind === 'storm' || kind === 'rain') this.audio.chime?.();
  }

  applyWeatherAudio() {
    if (!this.effects) return;
    if (this.effects.flash > 0.985 && this.flashArmed) {
      this.flashArmed = false;
      this.audio.thunder();
    }
    if (this.effects.flash < 0.05) this.flashArmed = true;
  }

  updateInterior(dt) {
    const p = this.player;
    let mx = (this.input.right ? 1 : 0) - (this.input.left ? 1 : 0);
    let mz = (this.input.forward ? 1 : 0) - (this.input.back ? 1 : 0);
    const mag = Math.hypot(mx, mz);
    if (mag > 0) { mx /= mag; mz /= mag; }
    const yaw = p.cameraYaw;
    const speed = this.input.sprint ? 4.4 : 2.7;
    const vx = (Math.sin(yaw) * mz + Math.cos(yaw) * mx) * speed * (mag > 0 ? 1 : 0);
    const vz = (Math.cos(yaw) * mz - Math.sin(yaw) * mx) * speed * (mag > 0 ? 1 : 0);
    p.pos.x += vx * dt;
    p.pos.z += vz * dt;
    if (mag > 0) {
      p.heading = Math.atan2(vx, vz);
      p.footTimer -= dt;
      if (p.footTimer <= 0) { p.footTimer = 0.5; this.audio.footstep(this.input.sprint); }
    }
    p.group.position.copy(p.pos);
    p.group.rotation.y = p.heading;
    p.animate(dt, mag > 0 ? speed : 0, this.input.sprint);
    this.interiors.update(dt);
    p.updateCamera(dt);
  }

  syncRidingPlayer() {
    const r = this.player.riding;
    if (!r) return;
    const pos = r.group?.position || r.pos;
    if (pos) {
      this.player.pos.copy(pos);
      this.player.heading = r.group?.rotation.y ?? this.player.heading;
    }
  }

  /* ------------------------------------------------------------------ */
  /* Interaction                                                         */
  /* ------------------------------------------------------------------ */

  updateInteraction() {
    if (!this.ui) return;
    if (this.paused || this.ui.overlay) {
      this.interaction = null;
      this.ui.setPrompt(null);
      return;
    }
    const p = this.player;
    let inter = null;

    if (p.cinematic) {
      this.interaction = null;
      this.ui.setPrompt(null);
      return;
    }

    if (p.vehicle) {
      inter = { action: 'exitVehicle', label: `Exit ${p.vehicle.cfg.name}` };
    } else if (p.riding) {
      const label = this.transit.mode === 'monorail' ? 'Exit monorail at station'
        : this.transit.mode === 'islandRail' ? 'Exit tram at station'
        : 'Leave the train at a station';
      inter = { action: 'exitTransit', label };
    } else if (this.interiors.current) {
      const near = this.interiors.nearestInteraction(p.pos.x, p.pos.z);
      if (near) inter = { action: 'interior', payload: near, label: near.label };
    } else {
      const near = this.vehicles.findNearest(p.pos.x, p.pos.z, 6.5, (v) => v.enterable);
      if (near) {
        inter = { action: 'enterVehicle', payload: near.vehicle, label: `Enter ${near.vehicle.cfg.name}` };
      } else {
        let best = null, bd = Infinity;
        for (const poi of this.city.pois) {
          const d = Math.hypot(poi.x - p.pos.x, poi.z - p.pos.z);
          const reach = poi.type === 'monorail' ? 11 : poi.type === 'train' ? 16 : poi.type === 'metro' ? 9 : Math.min(poi.radius || 16, 16);
          if (d < reach && d < bd) { bd = d; best = poi; }
        }
        if (best) inter = { action: 'poi', payload: best, label: this.poiLabel(best) };
      }
    }

    this.interaction = inter;
    this.ui.setPrompt(inter ? inter.label : null);
  }

  poiLabel(poi) {
    if (poi.type === 'monorail') return `Board monorail · ${poi.name.replace(' Monorail', '')}`;
    if (poi.type === 'train') return poi.line === 'island' ? 'Board the Palm Island Line' : 'Board commuter rail';
    if (poi.type === 'metro') return 'Ride the metro';
    if (poi.type === 'marina') return 'Visit Harbor Marina';
    if (poi.type === 'park') return 'Relax in Aurora Park';
    if (poi.type === 'airport') return 'Watch the airport';
    if (poi.type === 'factory') return 'Inspect Northgate Works';
    return `Enter ${poi.name}`;
  }

  interact() {
    if (!this.ready || this.paused || this.ui?.overlay) return;
    const inter = this.interaction;
    if (!inter) return;
    if (inter.action === 'exitVehicle') this.exitVehicle();
    else if (inter.action === 'exitTransit') this.exitTransit();
    else if (inter.action === 'enterVehicle') this.enterVehicle(inter.payload);
    else if (inter.action === 'interior') this.runInteriorAction(inter.payload);
    else if (inter.action === 'poi') this.activatePOI(inter.payload);
  }

  activatePOI(poi) {
    if (poi.type === 'monorail') {
      this.transit.boardMonorail(poi.station);
      this.mode = 'riding';
      return;
    }
    if (poi.type === 'train') {
      if (poi.line === 'island') this.transit.boardIslandRail(poi.station ?? 0);
      else this.transit.boardRail();
      this.mode = 'riding';
      return;
    }
    if (poi.type === 'metro') {
      const n = this.transit.metroEntrances.length;
      const next = ((poi.metro ?? 0) + 1) % n;
      this.transit.metroTravel(next);
      return;
    }
    if (poi.type === 'marina') {
      this.notify('Harbor Marina — boats are moored along the waterfront', 'good');
      return;
    }
    if (poi.type === 'park') {
      this.notify('Aurora Park — the festival stage is quiet this hour', 'good');
      return;
    }
    if (poi.type === 'airport') {
      this.notify('Nova International — departures board flickers', 'good');
      return;
    }
    if (poi.type === 'factory') {
      this.notify('Northgate Works — the night shift is running', 'warn');
      return;
    }
    if (poi.type === 'shop' || poi.type === 'apartment' || poi.type === 'police' || poi.type === 'hospital' ||
      poi.type === 'fire' || poi.type === 'garage' || poi.type === 'dealership' || poi.type === 'hotel' || poi.type === 'office') {
      this.enterInterior(poi.type, poi);
    }
  }

  enterInterior(type, poi) {
    const p = this.player;
    this.interiors.enter(type, new THREE.Vector3(p.pos.x, 0.2, p.pos.z));
    this.scene.fog = null;
    this.mode = 'interior';
    this.ui.setPrompt(null);
    this.audio.chime();
  }

  exitInterior() {
    this.interiors.exit();
    this.scene.fog = this.fog;
    this.mode = 'playing';
    this.ui.setPrompt(null);
  }

  runInteriorAction(entry) {
    if (!entry) return;
    switch (entry.action) {
      case 'exit': this.exitInterior(); break;
      case 'rest':
        this.hour = (this.hour + 7) % 24;
        this.totalHours += 7;
        this.city.updateLighting(this.hour, this.weather, 0);
        this.notify('You slept for seven hours', 'good');
        this.audio.chime();
        break;
      case 'coffee':
        this.health = Math.min(100, this.health + 4);
        this.notify('Fresh coffee — you feel awake', 'good');
        break;
      case 'shop':
        this.ui.openOverlay('phone');
        this.ui.switchPhoneTab('shop');
        break;
      case 'policeDesk':
        this.openPoliceDesk();
        break;
      case 'heal':
        if (this.money < 120) { this.notify('Treatment costs $120', 'bad'); break; }
        this.addMoney(-120);
        this.health = 100;
        this.notify('Treated at Nova General — health restored', 'good');
        this.audio.chime();
        break;
      case 'fireInfo':
        this.notify('Fire crews are on standby. Report blazes from the phone map.', 'good');
        break;
      case 'garage':
        this.repairAtGarage();
        break;
      case 'dealership':
        this.openDealership();
        break;
      case 'hotel':
        if (this.money < 80) { this.notify('A room costs $80', 'bad'); break; }
        this.addMoney(-80);
        this.hour = (this.hour + 8) % 24;
        this.totalHours += 8;
        this.city.updateLighting(this.hour, this.weather, 0);
        this.notify('Rested at Hotel Aurora', 'good');
        this.audio.chime();
        break;
      case 'office':
        this.ui.openOverlay('phone');
        this.ui.switchPhoneTab('jobs');
        break;
      default:
        this.notify('Nothing interesting here', '');
    }
  }

  openPoliceDesk() {
    const wanted = this.wanted.level;
    if (wanted === 0) {
      this.ui.showModal({
        kicker: 'NCPD CENTRAL',
        title: 'Records clean',
        body: '<p>No active warrants. Keep it that way, and the city stays open to you.</p>',
        actions: [{ label: 'Leave', sub: 'Back to the lobby', primary: true, onClick: () => { this.exitInterior(); this.ui.closeOverlay(); } }],
      });
      return;
    }
    const fine = 250 * wanted;
    this.ui.showModal({
      kicker: 'NCPD CENTRAL',
      title: 'Outstanding warrant',
      body: `<p>Wanted level <b>${wanted}</b>. Pay a fine of <b>${formatMoney(fine)}</b> to clear your record.</p>`,
      actions: [
        { label: `Pay ${formatMoney(fine)}`, sub: 'Clear wanted level', primary: true, onClick: () => {
          if (this.money < fine) { this.notify('Not enough cash for the fine', 'bad'); return; }
          this.addMoney(-fine);
          this.wanted.clear();
          this.notify('Warrant cleared — NCPD stands down', 'good');
          this.exitInterior();
          this.ui.closeOverlay();
        } },
        { label: 'Walk away', sub: 'Keep the warrant', onClick: () => { this.ui.closeOverlay(); } },
      ],
    });
  }

  repairAtGarage() {
    const v = this.lastVehicle || this.vehicles.playerVehicle || this.vehicles.startCar;
    if (!v) { this.notify('No vehicle available to repair', 'bad'); return; }
    const cost = 80;
    if (this.money < cost) { this.notify('Repairs cost $80', 'bad'); return; }
    this.addMoney(-cost);
    v.repair();
    v.fuel = v.cfg.fuel;
    this.notify(`${v.cfg.name} repaired and refuelled`, 'good');
    this.audio.chime();
  }

  openDealership() {
    const types = ['sedan', 'suv', 'sports', 'super', 'pickup', 'van'];
    const actions = types.map((t) => {
      const cfg = VEHICLE_TYPES[t];
      return {
        label: `${cfg.name} · ${formatMoney(cfg.price)}`,
        sub: `${cfg.klass} · ${Math.round(cfg.maxSpeed * 3.6)} km/h`,
        onClick: () => this.buyVehicle(t),
      };
    });
    this.ui.showModal({
      kicker: 'NOVA MOTORS',
      title: 'Choose your machine',
      body: '<p>Showroom stock is delivered to the street outside. Insurance and a full tank are included.</p>',
      actions,
    });
  }

  buyVehicle(type) {
    const cfg = VEHICLE_TYPES[type];
    if (!cfg) return;
    if (this.money < cfg.price) { this.notify(`You need ${formatMoney(cfg.price)} for the ${cfg.name}`, 'bad'); return; }
    if (this.ownedVehicles.some((v) => v.type === type)) { this.notify('You already own that model', 'warn'); return; }
    this.addMoney(-cfg.price);
    const owned = { ...cfg, type, color: pick([0x2b4a6f, 0x8c1f2c, 0xcfd3d6, 0x1c2229, 0x214a72, 0x6a3b2c]) };
    this.ownedVehicles.push(owned);
    this.notify(`Purchased ${cfg.name}`, 'good');
    this.audio.chime();
    this.ui.closeOverlay();
    this.spawnOwnedNearby(owned);
    this.saveGame();
  }

  spawnOwnedNearby(owned) {
    if (this.interiors?.current) return null;
    const p = this.player;
    let x = p.pos.x + Math.sin(p.heading) * 11;
    let z = p.pos.z + Math.cos(p.heading) * 11;
    const hit = this.city.collideCircle(x, z, 1.6);
    if (hit) { x = p.pos.x - Math.sin(p.heading) * 11; z = p.pos.z - Math.cos(p.heading) * 11; }
    const v = this.vehicles.spawn(owned.type, x, z, p.heading, { color: owned.color, owned: true, name: owned.name });
    v.mode = 'parked';
    return v;
  }

  recallVehicle(index) {
    const owned = this.ownedVehicles[index];
    if (!owned) return;
    const v = this.spawnOwnedNearby(owned);
    if (v) this.notify(`${owned.name} delivered nearby`, 'good');
    else this.notify('Step outside to receive the vehicle', 'warn');
    this.saveGame();
  }

  /* ------------------------------------------------------------------ */
  /* Vehicle & player actions                                            */
  /* ------------------------------------------------------------------ */

  enterVehicle(v) {
    if (!v || this.player.vehicle || this.player.riding) return;
    const wasService = !!v.service;
    const wasTraffic = v.mode === 'traffic';
    this.vehicles.startDriving(v);
    this.player.enteredVehicle(v);
    this.lastVehicle = v;
    this.mode = 'driving';
    this.ui.setPrompt(null);
    if (!v.owned && (wasService || wasTraffic)) {
      const severity = wasService ? 2.2 : 1.2;
      this.wanted.commit(severity, this.player.pos, true);
      this.npcs.panic(v.pos.x, v.pos.z, 26);
      this.notify(wasService ? 'Service vehicle stolen — units alerted' : 'Carjacking reported', 'bad');
    }
    this.audio.click();
  }

  exitVehicle(force = false) {
    const v = this.player.vehicle;
    if (!v) return;
    if (!force && v.isAir && v.pos.y > 4) { this.notify('Land the helicopter before exiting', 'warn'); return; }
    if (!force && v.isBoat && v.pos.z > 515) { this.notify('Bring the boat closer to shore', 'warn'); return; }
    this.vehicles.stopDriving(v);
    this.player.exitVehicle(v);
    this.lastVehicle = v;
    if (!this.interiors?.current) this.mode = 'playing';
    this.ui.setPrompt(null);
  }

  exitTransit() {
    if (this.transit.mode === 'monorail') this.transit.exitMonorail();
    else if (this.transit.mode === 'rail') this.transit.exitRail();
    else if (this.transit.mode === 'islandRail') this.transit.exitIslandRail();
    else {
      this.player.riding = null;
      this.player.group.visible = true;
      this.player.shadow.visible = true;
      this.mode = 'playing';
      this.ui.hideTransit();
    }
  }

  toggleCamera() {
    if (!this.player || this.player.vehicle === null && this.mode === 'interior') {
      this.notify('Camera options are limited indoors', 'warn');
      return;
    }
    const fp = this.player.toggleCamera();
    this.ui.toast(fp ? 'First-person camera' : 'Third-person camera');
  }

  toggleLights() {
    const v = this.player.vehicle;
    if (!v) return;
    v.lightsOn = !v.lightsOn;
    this.ui.toast(v.lightsOn ? 'Lights on' : 'Lights off');
  }

  horn() {
    this.audio.horn();
    if (this.player.vehicle) this.camShake = Math.max(this.camShake, 0.05);
  }

  resetVehicle() {
    const v = this.player.vehicle;
    if (!v) return;
    const node = this.city.nearestNode(v.pos.x, v.pos.z);
    v.repair();
    v.velocity.set(0, 0);
    v.speed = 0;
    v.pos.set(node.x + 4.5, v.isAir ? 2.2 : 0.02, node.z + 4.5);
    v.altitude = v.pos.y;
    v.heading = 0;
    v.group.rotation.set(0, 0, 0);
    this.notify('Vehicle reset and repaired', 'good');
  }

  toggleTransitControls() {
    if (this.transit.mode === 'monorail' || this.transit.mode === 'rail') this.transit.toggleManual();
  }

  handleTrafficCollision(pv, other) {
    if (this.crimeCooldown > 0) return;
    this.crimeCooldown = 2.5;
    this.wanted.commit(1.2, pv.pos, true);
    this.ui.damageFlash();
    this.notify('Collision witnessed — NCPD notified', 'warn');
  }

  handlePedHit(ped, pv) {
    this.wanted.commit(4.5, pv.pos, true);
    this.emergency.dispatchMedical(new THREE.Vector3(ped.x, 0.2, ped.z));
    this.npcs.panic(ped.x, ped.z, 34);
    this.ui.damageFlash();
    this.camShake = Math.max(this.camShake, 1);
    this.notify('You struck a pedestrian — witnesses are calling 911', 'bad');
  }

  handleVehicleFeedback() {
    const pv = this.vehicles.playerVehicle;
    if (pv && pv.damageFlash > 0) {
      pv.damageFlash = 0;
      this.ui.damageFlash();
      this.camShake = Math.max(this.camShake, 0.35);
    }
    if (this.camShake > 0) this.camShake = Math.max(0, this.camShake - 0.016 * 2.2);
  }

  busted() {
    if (this.bustedCooldown > 0 || !this.wanted || this.wanted.level === 0) return;
    this.bustedCooldown = 12;
    if (this.player.vehicle) this.exitVehicle(true);
    this.wanted.clear();
    this.money = Math.max(0, this.money - 500);
    this.ui.updateMoney();
    const station = this.city.pois.find((p) => p.type === 'police') || { x: 132, z: 44 };
    this.player.setPosition(station.x + 8, station.z + 26, 0.18);
    this.player.heading = Math.PI;
    this.player.cameraYaw = Math.PI;
    this.player.velocity.set(0, 0, 0);
    if (this.mode === 'interior') this.exitInterior();
    this.mode = 'playing';
    this.ui.showBusted();
    this.notify('Busted — $500 fine and a ride to the precinct', 'bad');
    this.audio.chime();
  }

  /* ------------------------------------------------------------------ */
  /* Economy                                                             */
  /* ------------------------------------------------------------------ */

  buyItem(id) {
    const items = {
      coffee: { price: 6 }, sandwich: { price: 12 }, medkit: { price: 45 }, fuelcan: { price: 32 },
      jacket: { price: 60 }, pants: { price: 45 }, metrocard: { price: 25 },
    };
    const item = items[id];
    if (!item) return;
    if (id === 'fuelcan' && !this.vehicles.playerVehicle) { this.notify('You need to be in a vehicle to use a fuel can', 'warn'); return; }
    if (this.money < item.price) { this.notify('Not enough cash', 'bad'); return; }
    this.addMoney(-item.price);
    switch (id) {
      case 'coffee': this.health = Math.min(100, this.health + 4); this.notify('Coffee purchased', 'good'); break;
      case 'sandwich': this.health = Math.min(100, this.health + 10); this.notify('Sandwich eaten', 'good'); break;
      case 'medkit': this.health = 100; this.notify('First aid kit used — health restored', 'good'); break;
      case 'fuelcan': this.vehicles.playerVehicle.fuel = this.vehicles.playerVehicle.cfg.fuel; this.notify('Vehicle refuelled', 'good'); break;
      case 'jacket': this.player.setClothing({ jacket: pick(SUIT_JACKETS) }); this.notify('New jacket equipped', 'good'); break;
      case 'pants': this.player.setClothing({ pants: pick(SUIT_PANTS) }); this.notify('New trousers equipped', 'good'); break;
      case 'metrocard': this.metroPass += 5; this.notify('Metro pass loaded with five rides', 'good'); break;
      default: break;
    }
    this.audio.chime();
    this.saveGame();
  }

  addMoney(amount) {
    this.money = clamp(this.money + amount, 0, 1e9);
    this.ui?.updateMoney();
  }

  notify(text, kind = '') {
    this.ui?.notify(text, kind);
  }

  /* ------------------------------------------------------------------ */
  /* Persistence & menus                                                 */
  /* ------------------------------------------------------------------ */

  clockText() {
    const h = Math.floor(this.hour) % 24;
    const m = Math.floor((this.hour % 1) * 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  startNewGame() {
    if (!this.ready) return;
    this.audio.resume();
    this.audio.setVolume(this.settings.volume);
    this.paused = false;
    this.mode = 'playing';
    this.started = true;
    this.player.endCinematic();
    this.player.firstPerson = false;
    this.player.cameraDist = 5.2;
    this.player.setPosition(10, 34, 0.18);
    this.player.heading = Math.PI;
    this.player.cameraYaw = Math.PI;
    this.player.cameraPitch = 0.04;
    this.player.group.visible = true;
    this.player.shadow.visible = true;
    this.health = 100;
    this.money = 2500;
    this.metroPass = 0;
    this.ownedVehicles = [{ ...VEHICLE_TYPES.sedan, type: 'sedan', color: 0x2b4a6f, name: 'Your Sable' }];
    this.wanted.clear();
    this.jobs.current = null;
    this.jobs.clearMarker();
    this.jobs.completed = 0;
    this.jobs.refreshOffers();
    this.ui.hideObjective();
    this.hour = { dawn: 8.2, day: 12.2, dusk: 18.8, night: 22.4 }[this.settings.time] ?? 8.2;
    this.totalHours = this.hour;
    this.clock = this.hour;
    this.weatherTimer = rand(150, 240);
    this.setWeather('clear', true);
    this.temperature = this.targetTemperature();
    if (this.vehicles.startCar) {
      this.vehicles.startCar.repair();
      this.vehicles.startCar.pos.set(4, 0.02, 36);
      this.vehicles.startCar.heading = Math.PI;
      this.vehicles.startCar.group.rotation.set(0, Math.PI, 0);
    }
    this.ui.hideMenu();
    this.ui.showHUD();
    this.ui.updateMoney();
    this.ui.updateWanted();
    this.ui.closeOverlay();
    this.notify('Welcome to Nova City. Find work on your phone, or take the wheel.', 'good');
    this.audio.chime();
    this.requestPointerLock();
    this.saveGame();
  }

  continueGame() {
    if (!this.ready) return;
    let data = null;
    try { data = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); } catch (e) { data = null; }
    if (!data) { this.startNewGame(); return; }
    this.audio.resume();
    this.audio.setVolume(this.settings.volume);
    this.paused = false;
    this.mode = 'playing';
    this.started = true;
    this.player.endCinematic();
    this.player.firstPerson = !!data.player?.firstPerson;
    this.player.cameraDist = this.player.firstPerson ? 0 : 5.2;
    this.player.setPosition(data.player?.x ?? 10, data.player?.z ?? 34, 0.18);
    this.player.heading = data.player?.heading ?? Math.PI;
    this.player.cameraYaw = this.player.heading;
    this.player.cameraPitch = 0.04;
    this.player.group.visible = !this.player.firstPerson;
    this.player.shadow.visible = !this.player.firstPerson;
    this.health = clamp(data.health ?? 100, 1, 100);
    this.money = Math.max(0, data.money ?? 2500);
    this.hour = data.hour ?? 6.4;
    this.totalHours = data.totalHours ?? this.hour;
    this.clock = this.totalHours;
    if (data.settings) { this.settings = { ...this.settings, ...data.settings }; this.applyRendererSettings(); }
    const owned = Array.isArray(data.owned) ? data.owned : ['sedan'];
    this.ownedVehicles = owned.map((entry) => {
      const type = typeof entry === 'string' ? entry : entry.type;
      const cfg = VEHICLE_TYPES[type];
      if (!cfg) return null;
      return { ...cfg, type, name: entry.name || (type === 'sedan' ? 'Your Sable' : cfg.name), color: entry.color };
    }).filter(Boolean);
    if (!this.ownedVehicles.length) this.ownedVehicles = [{ ...VEHICLE_TYPES.sedan, type: 'sedan', name: 'Your Sable', color: 0x2b4a6f }];
    this.jobs.completed = data.jobsCompleted || 0;
    this.jobs.refreshOffers();
    this.wanted.heat = data.wantedHeat || 0;
    this.wanted.level = this.wanted.levelFor(this.wanted.heat);
    this.setWeather(data.weather || 'clear', true);
    this.temperature = data.temperature ?? this.targetTemperature();
    if (data.vehicle?.type && VEHICLE_TYPES[data.vehicle.type]) {
      const v = this.vehicles.spawn(data.vehicle.type, this.player.pos.x + 3.4, this.player.pos.z + 2.4, this.player.heading, { owned: true });
      v.health = data.vehicle.health ?? 100;
      v.fuel = data.vehicle.fuel ?? v.cfg.fuel;
      v.mode = 'parked';
    }
    this.ui.hideMenu();
    this.ui.showHUD();
    this.ui.updateMoney();
    this.ui.updateWanted();
    this.ui.closeOverlay();
    this.notify('Welcome back to Nova City', 'good');
    this.audio.chime();
    this.requestPointerLock();
  }

  saveGame() {
    if (!this.ready) return;
    const p = this.player;
    const pv = this.vehicles?.playerVehicle;
    const data = {
      version: 1,
      savedAt: Date.now(),
      money: this.money,
      health: this.health,
      hour: this.hour,
      totalHours: this.totalHours,
      weather: this.weather,
      temperature: this.temperature,
      wantedHeat: this.wanted?.heat || 0,
      jobsCompleted: this.jobs?.completed || 0,
      owned: (this.ownedVehicles || []).map((v) => ({ type: v.type, name: v.name, color: v.color })),
      player: { x: p.pos.x, z: p.pos.z, heading: p.heading, firstPerson: p.firstPerson },
      vehicle: pv ? { type: pv.type, health: pv.health, fuel: pv.fuel } : null,
      settings: this.settings,
    };
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch (e) { /* storage may be unavailable */ }
  }

  returnToMenu() {
    if (this.player?.vehicle) this.exitVehicle(true);
    if (this.player?.riding) { this.player.riding = null; this.player.group.visible = true; this.player.shadow.visible = true; }
    if (this.interiors?.current) this.exitInterior();
    this.ui.closeOverlay();
    this.paused = false;
    this.mode = 'menu';
    this.started = false;
    this.keys.clear();
    this.touch.x = 0;
    this.touch.y = 0;
    this.touch.sprint = false;
    this.touch.jump = false;
    this.gamepadButtons.clear();
    this.player.endCinematic();
    this.player.beginCinematic(170, 96, 210, 250, 0.055);
    this.ui.showMenu();
    this.ui.hideTransit();
    this.audio.stopEngine();
  }

  setTimeOfDay(key) {
    const hours = { dawn: 8.2, day: 12.2, dusk: 18.8, night: 22.4 }[key];
    if (hours == null) return;
    this.settings.time = key;
    this.hour = hours;
    this.totalHours = this.hour;
    this.clock = this.hour;
    if (this.city) this.city.updateLighting(this.hour, this.weather, 0);
    this.saveSettings();
  }

  requestPointerLock() {
    if (this.settings.mode === 'phone') return;
    if (!this.canvas.requestPointerLock) return;
    try {
      const result = this.canvas.requestPointerLock();
      if (result?.catch) result.catch(() => {});
    } catch (e) { /* pointer lock is optional */ }
  }
}

// Module scripts are deferred, so the document is parsed by the time this runs.
if (!window.novaCity) window.novaCity = new Game();
