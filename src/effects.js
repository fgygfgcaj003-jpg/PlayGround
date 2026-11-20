import * as THREE from 'three';
import { rand, pick, TAU } from './utils.js';

class ParticlePool {
  constructor(scene, capacity, additive) {
    this.capacity = capacity;
    this.parts = [];
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(capacity * 3);
    this.col = new Float32Array(capacity * 3);
    this.alpha = new Float32Array(capacity);
    this.size = new Float32Array(capacity);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    const mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: {},
      vertexShader: `
        attribute vec3 aColor; attribute float aAlpha; attribute float aSize;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = aSize * (260.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vec2 c = gl_PointCoord - .5;
          float d = length(c);
          float a = smoothstep(.5, .08, d) * vAlpha;
          if(a < .01) discard;
          gl_FragColor = vec4(vColor, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    for (let i = 0; i < capacity; i++) this.parts.push({ alive: false, life: 0, maxLife: 1, x: 0, y: -999, z: 0, vx: 0, vy: 0, vz: 0, size: 1, grow: 0, color: new THREE.Color(), gravity: 0, drag: 0.98 });
  }
  spawn(x, y, z, opts = {}) {
    let p = this.parts.find(q => !q.alive);
    if (!p) p = this.parts[(Math.random() * this.capacity) | 0];
    p.alive = true;
    p.x = x; p.y = y; p.z = z;
    p.vx = opts.vx ?? rand(-.6, .6); p.vy = opts.vy ?? rand(.6, 2.2); p.vz = opts.vz ?? rand(-.6, .6);
    p.life = p.maxLife = opts.life ?? rand(.8, 2.2);
    p.size = opts.size ?? rand(1, 3);
    p.grow = opts.grow ?? 1.2;
    p.gravity = opts.gravity ?? 0;
    p.drag = opts.drag ?? .97;
    p.color.set(opts.color ?? 0xb8b8b8);
    return p;
  }
  update(dt) {
    for (let i = 0; i < this.capacity; i++) {
      const p = this.parts[i];
      if (!p.alive) { this.alpha[i] = 0; this.pos[i * 3 + 1] = -999; continue; }
      p.life -= dt;
      if (p.life <= 0) { p.alive = false; this.alpha[i] = 0; this.pos[i * 3 + 1] = -999; continue; }
      p.vy -= p.gravity * dt;
      p.vx *= Math.pow(p.drag, dt * 60); p.vz *= Math.pow(p.drag, dt * 60); p.vy *= Math.pow(p.drag, dt * 60);
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.size += p.grow * dt;
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
      this.col[i * 3] = p.color.r; this.col[i * 3 + 1] = p.color.g; this.col[i * 3 + 2] = p.color.b;
      this.alpha[i] = (p.life / p.maxLife) * (optsAlpha(p));
      this.size[i] = p.size;
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true;
    g.attributes.aColor.needsUpdate = true;
    g.attributes.aAlpha.needsUpdate = true;
    g.attributes.aSize.needsUpdate = true;
  }
}
function optsAlpha(p) { return Math.min(1, p.maxLife > .5 ? .82 : .95); }

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.smoke = new ParticlePool(scene, 420, false);
    this.sparks = new ParticlePool(scene, 260, true);
    this.fire = new ParticlePool(scene, 320, true);
    this.rain = null;
    this.lightningTimer = 8;
    this.flash = 0;
    this.sirens = [];
    this.wakes = new ParticlePool(scene, 200, false);
    this.wakes.points.material.blending = THREE.NormalBlending;
  }

  spawnSmoke(x, y, z, amount = 1, color = 0x8f9298, size = 2) {
    for (let i = 0; i < amount; i++) this.smoke.spawn(x + rand(-.4, .4), y, z + rand(-.4, .4), { color, size: size + rand(0, 1.4), grow: 1.6, life: rand(1.4, 3.4), vy: rand(.6, 2), drag: .96 });
  }
  smokeAtVehicle(v, dt) {
    if (v.smokeAcc === undefined) v.smokeAcc = 0;
    v.smokeAcc += dt;
    if (v.health < 55 && v.smokeAcc > .1) {
      v.smokeAcc = 0;
      const p = v.group.position;
      this.spawnSmoke(p.x, p.y + v.cfg.height * .7, p.z, 1, v.health < 25 ? 0x2b2b2b : 0x9a9a9a, v.health < 25 ? 3 : 1.8);
      if (v.health < 20 && Math.random() < .3) this.sparks.spawn(p.x, p.y + .8, p.z, { color: 0xff7b2a, size: 1.2, life: .5, vy: rand(.4, 1.6), vx: rand(-1, 1), vz: rand(-1, 1), gravity: 2 });
    }
  }
  sparksAt(x, y, z, n = 12, color = 0xffb347) {
    for (let i = 0; i < n; i++) {
      this.sparks.spawn(x, y, z, {
        color, size: rand(.5, 1.4), life: rand(.25, .9), grow: -.2,
        vx: rand(-4, 4), vy: rand(1, 5), vz: rand(-4, 4), gravity: 9, drag: .98,
      });
    }
  }
  fireAt(x, y, z, scale = 1) {
    this.fire.spawn(x + rand(-1, 1) * scale, y + rand(0, 1.5) * scale, z + rand(-1, 1) * scale, {
      color: pick([0xff7b24, 0xffb347, 0xff4a1e, 0xffd36a]), size: rand(2, 4) * scale, grow: 2.2,
      life: rand(.4, 1.1), vy: rand(1.6, 4.2), vx: rand(-.6, .6), vz: rand(-.6, .6), drag: .94,
    });
    if (Math.random() < .25) this.spawnSmoke(x, y + 3, z, 1, 0x2e2e2e, 4 * scale);
  }
  debris(x, y, z, n = 10) {
    for (let i = 0; i < n; i++) {
      this.sparks.spawn(x, y, z, {
        color: pick([0x555b5f, 0x8f9195, 0x3d4246, 0x9b7c52]), size: rand(.8, 2.2), life: rand(.8, 2),
        vx: rand(-5, 5), vy: rand(2, 7), vz: rand(-5, 5), gravity: 12, drag: .99,
      });
    }
  }
  explosion(x, y, z) {
    this.sparksAt(x, y, z, 60, 0xffa53b);
    this.sparksAt(x, y, z, 30, 0xffe28a);
    for (let i = 0; i < 20; i++) this.spawnSmoke(x + rand(-2, 2), y + 1, z + rand(-2, 2), 1, 0x2a2a2a, 5);
    for (let i = 0; i < 24; i++) this.fireAt(x, y, z, 2);
    this.debris(x, y + 1, z, 20);
  }
  setWeather(kind) {
    if (this.rain) { this.scene.remove(this.rain); this.rain.geometry.dispose(); this.rain = null; }
    if (kind === 'rain' || kind === 'storm') {
      const n = 1600;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(n * 6);
      for (let i = 0; i < n; i++) {
        const x = rand(-80, 80), y = rand(0, 65), z = rand(-80, 80);
        pos[i * 6] = x; pos[i * 6 + 1] = y; pos[i * 6 + 2] = z;
        pos[i * 6 + 3] = x + .4; pos[i * 6 + 4] = y + 2.4; pos[i * 6 + 5] = z;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.LineBasicMaterial({ color: 0xb8d4ee, transparent: true, opacity: kind === 'storm' ? .42 : .28 });
      this.rain = new THREE.LineSegments(geo, mat);
      this.rain.frustumCulled = false;
      this.scene.add(this.rain);
    } else if (kind === 'snow') {
      const n = 1800;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { pos[i * 3] = rand(-70, 70); pos[i * 3 + 1] = rand(0, 55); pos[i * 3 + 2] = rand(-70, 70); }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color: 0xffffff, size: .55, transparent: true, opacity: .8, depthWrite: false });
      this.rain = new THREE.Points(geo, mat);
      this.rain.frustumCulled = false;
      this.scene.add(this.rain);
    }
    this.weatherKind = kind;
  }
  update(dt, elapsed, playerPos, weather) {
    this.smoke.update(dt); this.sparks.update(dt); this.fire.update(dt); this.wakes.update(dt);
    if (this.rain && playerPos) {
      const pos = this.rain.geometry.attributes.position;
      const arr = pos.array;
      const isLines = this.weatherKind === 'rain' || this.weatherKind === 'storm';
      const speed = this.weatherKind === 'storm' ? 58 : 38;
      const step = isLines ? 6 : 3;
      for (let i = 0; i < arr.length; i += step) {
        arr[i + 1] -= speed * dt;
        if (arr[i + 1] < -2) {
          arr[i] = playerPos.x + rand(-65, 65); arr[i + 2] = playerPos.z + rand(-65, 65); arr[i + 1] = 55;
          if (isLines) { arr[i + 3] = arr[i] + .4; arr[i + 4] = arr[i + 1] + 2.4; arr[i + 5] = arr[i + 2]; }
        }
        if (isLines) { arr[i + 3] = arr[i] + .4; arr[i + 4] = arr[i + 1] + 2.4; arr[i + 5] = arr[i + 2]; }
      }
      this.rain.position.set(playerPos.x, 0, playerPos.z);
      pos.needsUpdate = true;
    }
    if (weather === 'storm') {
      this.lightningTimer -= dt;
      if (this.lightningTimer <= 0) {
        this.lightningTimer = rand(6, 18);
        this.flash = 1;
      }
      if (this.flash > 0) {
        this.flash -= dt * 3.5;
      }
    }
  }
}
