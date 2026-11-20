import * as THREE from 'three';

export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const inv = (a, b, v) => clamp((v - a) / (b - a), 0, 1);
export const smooth = (t) => t * t * (3 - 2 * t);
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];
export const chance = (p) => Math.random() < p;
export const dist2 = (ax, az, bx, bz) => Math.hypot(ax - bx, az - bz);
export const approach = (cur, target, delta) => cur < target ? Math.min(cur + delta, target) : Math.max(cur - delta, target);
export const lerpAngle = (a, b, t) => {
  let d = ((b - a + Math.PI) % TAU + TAU) % TAU - Math.PI;
  return a + d * t;
};
export const normAngle = (a) => {
  a = ((a + Math.PI) % TAU + TAU) % TAU;
  return a - Math.PI;
};
export const v3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export function mulberry32(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

export function makeRng(seed) {
  const r = mulberry32(seed);
  r.range = (a, b) => a + r() * (b - a);
  r.int = (a, b) => Math.floor(a + r() * (b - a + 1));
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.chance = (p) => r() < p;
  return r;
}

export function canvasTexture(w, h, draw, repeatX = 1, repeatY = 1) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  draw(ctx, w, h);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function seededNoise(x, z, seed = 1) {
  const s = Math.sin(x * 12.9898 + z * 78.233 + seed * 37.719) * 43758.5453;
  return s - Math.floor(s);
}

export function formatMoney(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

export function formatClock(hours) {
  const h = Math.floor(hours) % 24;
  const m = Math.floor((hours % 1) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

export function disposeObject(obj) {
  obj.traverse((o) => {
    if (o.geometry && !o.userData.keepGeometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        if (m.userData.keepMaterial) continue;
        for (const k of ['map', 'emissiveMap', 'normalMap', 'roughnessMap']) if (m[k]) m[k].dispose();
        m.dispose();
      }
    }
  });
}

export function circleVsAABB(x, z, r, box) {
  const cx = clamp(x, box.minX, box.maxX);
  const cz = clamp(z, box.minZ, box.maxZ);
  const dx = x - cx, dz = z - cz;
  const d2 = dx * dx + dz * dz;
  if (d2 >= r * r) return null;
  const d = Math.sqrt(d2);
  if (d < 1e-5) {
    const left = x - box.minX, right = box.maxX - x, top = z - box.minZ, bottom = box.maxZ - z;
    const m = Math.min(left, right, top, bottom);
    if (m === left) return { nx: -1, nz: 0, pen: r + left };
    if (m === right) return { nx: 1, nz: 0, pen: r + right };
    if (m === top) return { nx: 0, nz: -1, pen: r + top };
    return { nx: 0, nz: 1, pen: r + bottom };
  }
  return { nx: dx / d, nz: dz / d, pen: r - d };
}

export class SpatialHash {
  constructor(cell = 24) { this.cell = cell; this.map = new Map(); }
  key(i, j) { return i + ':' + j; }
  insert(obj, minX, minZ, maxX, maxZ) {
    const c = this.cell;
    for (let i = Math.floor(minX / c); i <= Math.floor(maxX / c); i++)
      for (let j = Math.floor(minZ / c); j <= Math.floor(maxZ / c); j++) {
        const k = this.key(i, j);
        let arr = this.map.get(k);
        if (!arr) this.map.set(k, arr = []);
        arr.push(obj);
      }
  }
  query(x, z, r = 0) {
    const c = this.cell;
    const out = new Set();
    for (let i = Math.floor((x - r) / c); i <= Math.floor((x + r) / c); i++)
      for (let j = Math.floor((z - r) / c); j <= Math.floor((z + r) / c); j++) {
        const arr = this.map.get(this.key(i, j));
        if (arr) for (const o of arr) out.add(o);
      }
    return out;
  }
}

export function makeBeacon(color = 0xffb457) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending });
  const ring = new THREE.Mesh(new THREE.RingGeometry(1.6, 2.1, 32), mat);
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.25;
  const beamMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.4, 38, 18, 1, true), beamMat);
  beam.position.y = 19;
  g.add(ring, beam);
  g.userData.ring = ring;
  g.userData.beam = beam;
  g.userData.t = 0;
  return g;
}

export function updateBeacon(g, dt) {
  g.userData.t += dt;
  const s = 1 + Math.sin(g.userData.t * 3) * 0.12;
  g.userData.ring.scale.setScalar(s);
  g.userData.ring.material.opacity = 0.55 + Math.sin(g.userData.t * 3) * 0.25;
  g.userData.beam.material.opacity = 0.09 + Math.sin(g.userData.t * 1.7) * 0.03;
  g.rotation.y += dt * 0.4;
}
