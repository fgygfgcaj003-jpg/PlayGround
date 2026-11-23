import * as THREE from 'three';

/* ------------------------------------------------------------------ *
 *  Deterministic noise / random helpers
 * ------------------------------------------------------------------ */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash2i(x, y) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

const smooth = (t) => t * t * (3 - 2 * t);

export function noise2(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = smooth(xf), v = smooth(yf);
  const a = hash2i(xi, yi), b = hash2i(xi + 1, yi);
  const c = hash2i(xi, yi + 1), d = hash2i(xi + 1, yi + 1);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

export function fbm(x, y, oct = 4) {
  let amp = 0.5, f = 1, sum = 0, norm = 0;
  for (let i = 0; i < oct; i++) {
    sum += noise2(x * f, y * f) * amp;
    norm += amp; amp *= 0.5; f *= 2.03;
  }
  return sum / norm;
}

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const rand = (rng, a, b) => a + rng() * (b - a);
export const TAU = Math.PI * 2;

/* ------------------------------------------------------------------ *
 *  Canvas textures
 * ------------------------------------------------------------------ */
function canvas(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}

export function makeNoiseTexture(size = 256, base = '#8b7250', dark = '#5d4a30', light = '#a68a63', seed = 7) {
  const c = canvas(size), g = c.getContext('2d');
  const rng = mulberry32(seed);
  g.fillStyle = base; g.fillRect(0, 0, size, size);
  for (let i = 0; i < size * size * 0.10; i++) {
    const x = rng() * size, y = rng() * size;
    const r = 0.6 + rng() * 3.2;
    g.globalAlpha = 0.06 + rng() * 0.25;
    g.fillStyle = rng() < 0.55 ? dark : light;
    g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill();
  }
  g.globalAlpha = 1;
  // fine speckle
  for (let i = 0; i < 5000; i++) {
    g.fillStyle = rng() < 0.5 ? 'rgba(40,30,18,0.25)' : 'rgba(210,190,150,0.14)';
    g.fillRect(rng() * size, rng() * size, 1, 1);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function makeWoodTexture(seed = 3) {
  const size = 256, c = canvas(size), g = c.getContext('2d');
  const rng = mulberry32(seed);
  g.fillStyle = '#7a5c3a'; g.fillRect(0, 0, size, size);
  for (let i = 0; i < 90; i++) {
    const y = rng() * size;
    g.strokeStyle = rng() < 0.5 ? 'rgba(50,32,18,0.35)' : 'rgba(160,125,80,0.28)';
    g.lineWidth = 0.5 + rng() * 2.5;
    g.beginPath();
    g.moveTo(0, y);
    for (let x = 0; x <= size; x += 16) g.lineTo(x, y + Math.sin(x * 0.05 + i) * 2 + (rng() - 0.5) * 2);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeSoftPuff(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 128) {
  const c = canvas(size), g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, inner);
  grd.addColorStop(0.35, inner.replace('1)', '0.72)'));
  grd.addColorStop(1, outer);
  g.fillStyle = grd; g.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeFlashTexture() {
  const s = 128, c = canvas(s), g = c.getContext('2d');
  g.translate(s / 2, s / 2);
  const grd = g.createRadialGradient(0, 0, 0, 0, 0, s / 2);
  grd.addColorStop(0, 'rgba(255,255,235,1)');
  grd.addColorStop(0.2, 'rgba(255,226,140,0.95)');
  grd.addColorStop(0.55, 'rgba(255,150,40,0.45)');
  grd.addColorStop(1, 'rgba(255,90,0,0)');
  g.fillStyle = grd;
  g.beginPath(); g.arc(0, 0, s / 2, 0, TAU); g.fill();
  // star spikes
  g.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 6; i++) {
    g.rotate(TAU / 6);
    const lg = g.createLinearGradient(0, 0, s / 2, 0);
    lg.addColorStop(0, 'rgba(255,240,190,0.8)');
    lg.addColorStop(1, 'rgba(255,120,20,0)');
    g.fillStyle = lg;
    g.beginPath(); g.moveTo(0, -5); g.lineTo(s / 2, 0); g.lineTo(0, 5); g.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeRingTexture() {
  const s = 128, c = canvas(s), g = c.getContext('2d');
  const grd = g.createRadialGradient(s / 2, s / 2, s * 0.28, s / 2, s / 2, s / 2);
  grd.addColorStop(0, 'rgba(255,220,160,0)');
  grd.addColorStop(0.7, 'rgba(255,200,120,0.75)');
  grd.addColorStop(1, 'rgba(255,140,40,0)');
  g.fillStyle = grd; g.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeMuzzleTexture() {
  const s = 64, c = canvas(s), g = c.getContext('2d');
  const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  grd.addColorStop(0, 'rgba(255,255,230,1)');
  grd.addColorStop(0.3, 'rgba(255,210,110,0.9)');
  grd.addColorStop(1, 'rgba(255,120,20,0)');
  g.fillStyle = grd; g.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ------------------------------------------------------------------ *
 *  GPU point particles (smoke / sparks)
 * ------------------------------------------------------------------ */
const particleVert = /* glsl */`
  attribute float size;
  attribute vec4 pcolor;
  varying vec4 vColor;
  void main() {
    vColor = pcolor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / max(1.0, -mv.z));
    gl_Position = projectionMatrix * mv;
  }
`;
const particleFrag = /* glsl */`
  uniform sampler2D map;
  varying vec4 vColor;
  void main() {
    vec4 t = texture2D(map, gl_PointCoord);
    gl_FragColor = vec4(vColor.rgb, vColor.a) * t;
    if (gl_FragColor.a < 0.01) discard;
  }
`;

export class ParticleField {
  constructor(max, texture, additive = false, depthWrite = false) {
    this.max = max;
    this.count = 0;
    this.data = [];
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.siz = new Float32Array(max);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('pcolor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('size', new THREE.BufferAttribute(this.siz, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setDrawRange(0, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: texture } },
      vertexShader: particleVert,
      fragmentShader: particleFrag,
      transparent: true,
      depthWrite,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.geo = geo;
  }

  spawn(x, y, z, vx, vy, vz, size, life, r, g, b, a, drag = 1.2, grav = 0, grow = 0.6) {
    if (this.data.length >= this.max) this.data.shift();
    this.data.push({ x, y, z, vx, vy, vz, size, life, maxLife: life, r, g, b, a, drag, grav, grow });
  }

  update(dt) {
    const arr = this.data;
    for (let i = arr.length - 1; i >= 0; i--) {
      const p = arr[i];
      p.life -= dt;
      if (p.life <= 0) { arr.splice(i, 1); continue; }
      const d = Math.exp(-p.drag * dt);
      p.vx *= d; p.vz *= d; p.vy = p.vy * d - p.grav * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
      p.size += p.grow * dt;
    }
    const n = Math.min(arr.length, this.max);
    for (let i = 0; i < n; i++) {
      const p = arr[i], t = p.life / p.maxLife;
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
      this.col[i * 4] = p.r; this.col[i * 4 + 1] = p.g; this.col[i * 4 + 2] = p.b;
      this.col[i * 4 + 3] = p.a * Math.min(1, t * 1.7) * Math.min(1, (1 - t) * 8 + 0.15);
      this.siz[i] = p.size;
    }
    this.geo.setDrawRange(0, n);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.pcolor.needsUpdate = true;
    this.geo.attributes.size.needsUpdate = true;
  }
}

/* ------------------------------------------------------------------ *
 *  Tracer pool: single LineSegments draw call
 * ------------------------------------------------------------------ */
export class Tracers {
  constructor(max = 160) {
    this.max = max;
    this.items = [];
    const geo = new THREE.BufferGeometry();
    this.pos = new Float32Array(max * 6);
    this.col = new Float32Array(max * 6);
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setDrawRange(0, 0);
    const mat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false });
    this.lines = new THREE.LineSegments(geo, mat);
    this.lines.frustumCulled = false;
    this.geo = geo;
  }

  add(from, to, color = 0xffd98a, life = 0.09) {
    if (this.items.length >= this.max) this.items.shift();
    this.items.push({ from: from.clone(), to: to.clone(), color, life, maxLife: life });
  }

  update(dt) {
    const n = this.items.length;
    for (let i = n - 1; i >= 0; i--) {
      this.items[i].life -= dt;
      if (this.items[i].life <= 0) this.items.splice(i, 1);
    }
    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      this.pos[i * 6] = it.from.x; this.pos[i * 6 + 1] = it.from.y; this.pos[i * 6 + 2] = it.from.z;
      this.pos[i * 6 + 3] = it.to.x; this.pos[i * 6 + 4] = it.to.y; this.pos[i * 6 + 5] = it.to.z;
      const c = new THREE.Color(it.color);
      const f = Math.max(0, it.life / it.maxLife);
      this.col[i * 6] = c.r * f; this.col[i * 6 + 1] = c.g * f; this.col[i * 6 + 2] = c.b * f;
      this.col[i * 6 + 3] = c.r * f; this.col[i * 6 + 4] = c.g * f; this.col[i * 6 + 5] = c.b * f;
    }
    this.geo.setDrawRange(0, this.items.length * 2);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
  }
}

/* ------------------------------------------------------------------ *
 *  Small geometry helpers
 * ------------------------------------------------------------------ */
export function boxGeo(w, h, d) { return new THREE.BoxGeometry(w, h, d); }

export function setShadow(obj, cast = true, receive = true) {
  obj.traverse?.((o) => { if (o.isMesh) { o.castShadow = cast; o.receiveShadow = receive; } });
  return obj;
}

export function jitterGeo(geo, amount, seed = 1) {
  const rng = mulberry32(seed);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setXYZ(i,
      pos.getX(i) + (rng() - 0.5) * amount,
      pos.getY(i) + (rng() - 0.5) * amount,
      pos.getZ(i) + (rng() - 0.5) * amount);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}
