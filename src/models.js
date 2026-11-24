import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32, clamp, TAU } from './util.js';

/* ------------------------------------------------------------------ *
 *  Shared stylised (toon) material setup
 * ------------------------------------------------------------------ */
function makeGradientMap() {
  const data = new Uint8Array([46, 112, 190, 255]);
  const tex = new THREE.DataTexture(data, 4, 1, THREE.RedFormat);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}
export const GRADIENT = makeGradientMap();

const matCache = new Map();
export function toonMat(color = 0xffffff, opts = {}) {
  const key = `${color}|${opts.map ? 'm' : ''}|${opts.vertexColors ? 'v' : ''}|${opts.side || 0}|${opts.transparent ? 1 : 0}|${opts.opacity ?? 1}|${opts.emissive ?? 0}`;
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshToonMaterial({
    color,
    gradientMap: GRADIENT,
    map: opts.map || null,
    vertexColors: !!opts.vertexColors,
    side: opts.side ?? THREE.FrontSide,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    emissive: opts.emissive ?? 0x000000,
  });
  matCache.set(key, m);
  return m;
}

export const PALETTE = {
  khaki: 0x8f8054,
  khakiDark: 0x6e6140,
  khakiLight: 0xa19364,
  fieldgrey: 0x5f6a5c,
  fieldgreyDark: 0x485145,
  leather: 0x4a3421,
  leatherDark: 0x2f2115,
  skin: 0xd6a37a,
  skinShadow: 0xb88460,
  metal: 0x4c5250,
  metalDark: 0x2b2f2e,
  gunmetal: 0x343a3a,
  wood: 0x77522f,
  woodDark: 0x54391f,
  brass: 0xb08a42,
  mud: 0x6c5a40,
  mudDark: 0x4a3d2b,
  canvas: 0x9c8f68,
  sandbag: 0x9a8459,
  sandbagDark: 0x7c6845,
  water: 0x3d4741,
  track: 0x4a4238,
  tankGreen: 0x5b5a3c,
  tankBrown: 0x6b5a3d,
  planeKhaki: 0x7d7a4c,
  planeBlue: 0x7f97a0,
  planePurple: 0x5d6470,
  white: 0xe8e2cf,
  red: 0x9e3428,
  black: 0x1b1a17,
  blood: 0x6e1f18,
};

/* ------------------------------------------------------------------ *
 *  Geometry helpers
 * ------------------------------------------------------------------ */
const geoCache = new Map();
function cacheGeo(key, make) {
  if (!geoCache.has(key)) geoCache.set(key, make());
  return geoCache.get(key);
}

export function addBox(parent, w, h, d, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, mat = null) {
  const geo = cacheGeo(`b${w},${h},${d}`, () => new THREE.BoxGeometry(w, h, d));
  const m = new THREE.Mesh(geo, mat || toonMat(color));
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}
export function addCyl(parent, rt, rb, h, seg, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, mat = null) {
  const geo = cacheGeo(`c${rt},${rb},${h},${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg));
  const m = new THREE.Mesh(geo, mat || toonMat(color));
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}
export function addSphere(parent, r, color, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1, mat = null, seg = 12) {
  const geo = cacheGeo(`s${r},${seg}`, () => new THREE.SphereGeometry(r, seg, Math.max(6, seg - 2)));
  const m = new THREE.Mesh(geo, mat || toonMat(color));
  m.position.set(x, y, z); m.scale.set(sx, sy, sz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}
export function addCapsule(parent, r, len, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, mat = null) {
  const geo = cacheGeo(`p${r},${len}`, () => new THREE.CapsuleGeometry(r, len, 4, 8));
  const m = new THREE.Mesh(geo, mat || toonMat(color));
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}
export function addCone(parent, r, h, seg, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const geo = cacheGeo(`k${r},${h},${seg}`, () => new THREE.ConeGeometry(r, h, seg));
  const m = new THREE.Mesh(geo, toonMat(color));
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}
export function addTorus(parent, r, tube, color, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const geo = cacheGeo(`t${r},${tube}`, () => new THREE.TorusGeometry(r, tube, 6, 14));
  const m = new THREE.Mesh(geo, toonMat(color));
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m); return m;
}

/* ================================================================== *
 *  SOLDIER — a single merged, rigidly-skinned mesh (one draw call)
 * ================================================================== */
const BONE_DEFS = [
  ['root', null, [0, 0.93, 0]],
  ['spine', 'root', [0, 0.17, 0]],
  ['head', 'spine', [0, 0.6, 0]],
  ['armL', 'spine', [0.245, 0.41, 0]],
  ['foreL', 'armL', [0, -0.3, 0]],
  ['handL', 'foreL', [0, -0.3, 0]],
  ['armR', 'spine', [-0.245, 0.41, 0]],
  ['foreR', 'armR', [0, -0.3, 0]],
  ['handR', 'foreR', [0, -0.3, 0]],
  ['weapon', 'spine', [0.13, 0.22, 0.12]],
  ['legL', 'root', [0.15, -0.02, 0]],
  ['shinL', 'legL', [0, -0.44, 0]],
  ['footL', 'shinL', [0, -0.41, 0.02]],
  ['legR', 'root', [-0.15, -0.02, 0]],
  ['shinR', 'legR', [0, -0.44, 0]],
  ['footR', 'shinR', [0, -0.41, 0.02]],
];
export const BONE_INDEX = Object.fromEntries(BONE_DEFS.map(([n], i) => [n, i]));

export function createSkeleton() {
  const bones = [], byName = {};
  for (const [name, parent, pos] of BONE_DEFS) {
    const b = new THREE.Bone();
    b.name = name;
    b.position.set(pos[0], pos[1], pos[2]);
    if (parent) byName[parent].add(b);
    byName[name] = b;
    bones.push(b);
  }
  bones[0].updateMatrixWorld(true);
  return { bones, byName, skeleton: new THREE.Skeleton(bones) };
}

const soldierGeoCache = new Map();

function pushPart(list, geo, color, bone, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const g = geo.clone();
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz));
  m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(sx, sy, sz));
  g.applyMatrix4(m);
  const count = g.attributes.position.count;
  const col = new Float32Array(count * 3);
  const c = new THREE.Color(color);
  for (let i = 0; i < count; i++) { col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const si = new Uint16Array(count * 4), sw = new Float32Array(count * 4);
  const bi = BONE_INDEX[bone];
  for (let i = 0; i < count; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
  g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
  // strip extra attrs to keep merges compatible
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color', 'skinIndex', 'skinWeight'].includes(k)) g.deleteAttribute(k);
  if (!g.attributes.uv) {
    const uv = new Float32Array(count * 2); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }
  list.push(g);
}

function buildRifle(list, bone, x, y, z, opts) {
  const wood = opts.wood ?? PALETTE.wood;
  const metal = PALETTE.gunmetal;
  // stock
  pushPart(list, new THREE.BoxGeometry(0.075, 0.11, 0.55), wood, bone, x, y, z + 0.16, 0, 0, 0);
  pushPart(list, new THREE.BoxGeometry(0.07, 0.13, 0.2), wood, bone, x, y - 0.03, z - 0.06, 0.16, 0, 0);
  // barrel
  pushPart(list, new THREE.CylinderGeometry(0.017, 0.019, 0.72, 8), metal, bone, x, y + 0.04, z + 0.65, Math.PI / 2, 0, 0);
  pushPart(list, new THREE.CylinderGeometry(0.024, 0.024, 0.1, 8), metal, bone, x, y + 0.04, z + 0.3, Math.PI / 2, 0, 0);
  // bolt
  pushPart(list, new THREE.BoxGeometry(0.015, 0.015, 0.1), metal, bone, x + 0.045, y + 0.05, z + 0.26, 0, 0, 0.5);
  // magazine
  pushPart(list, new THREE.BoxGeometry(0.06, 0.05, 0.12), metal, bone, x, y - 0.06, z + 0.22);
  // sling
  pushPart(list, new THREE.BoxGeometry(0.012, 0.01, 0.7), PALETTE.leatherDark, bone, x - 0.03, y - 0.05, z + 0.2, 0, 0, 0);
  if (opts.bayonet) {
    pushPart(list, new THREE.BoxGeometry(0.012, 0.045, 0.42), PALETTE.metal, bone, x, y + 0.04, z + 1.22);
  }
}

function buildSoldierGeometry(variant) {
  if (soldierGeoCache.has(variant)) return soldierGeoCache.get(variant);
  const list = [];
  const german = variant.startsWith('german');
  const cloth = german ? PALETTE.fieldgrey : PALETTE.khaki;
  const clothDark = german ? PALETTE.fieldgreyDark : PALETTE.khakiDark;
  const skin = PALETTE.skin;
  const rng = mulberry32(variant.length * 917 + (german ? 51 : 11));

  // pelvis / trousers
  pushPart(list, new THREE.CapsuleGeometry(0.17, 0.2, 4, 10), clothDark, 'root', 0, 1.02, 0, 0, 0, Math.PI / 2, 1, 1, 0.92);
  pushPart(list, new THREE.BoxGeometry(0.34, 0.12, 0.26), PALETTE.leatherDark, 'root', 0, 1.11, 0);

  // torso — tunic, slightly flared
  pushPart(list, new THREE.CapsuleGeometry(0.21, 0.3, 4, 12), cloth, 'spine', 0, 1.33, 0, 0, 0, 0, 1.05, 1, 0.78);
  pushPart(list, new THREE.CylinderGeometry(0.225, 0.26, 0.24, 12), cloth, 'spine', 0, 1.13, 0, 0, 0, 0, 1, 1, 0.85);
  // collar
  pushPart(list, new THREE.CylinderGeometry(0.12, 0.15, 0.1, 10), clothDark, 'spine', 0, 1.56, 0.01);
  // belt + straps
  pushPart(list, new THREE.CylinderGeometry(0.222, 0.228, 0.075, 12), PALETTE.leather, 'spine', 0, 1.19, 0, 0, 0, 0, 1, 1, 0.82);
  pushPart(list, new THREE.BoxGeometry(0.075, 0.36, 0.03), PALETTE.leather, 'spine', 0.1, 1.4, 0.185, 0, 0, 0.1);
  pushPart(list, new THREE.BoxGeometry(0.075, 0.36, 0.03), PALETTE.leather, 'spine', -0.1, 1.4, 0.185, 0, 0, -0.1);
  // pouches
  pushPart(list, new THREE.BoxGeometry(0.12, 0.11, 0.07), PALETTE.leatherDark, 'spine', 0.14, 1.16, 0.16, 0.08);
  pushPart(list, new THREE.BoxGeometry(0.12, 0.11, 0.07), PALETTE.leatherDark, 'spine', -0.14, 1.16, 0.16, -0.08);
  if (german) {
    // ammo pouches on belt (German)
    pushPart(list, new THREE.BoxGeometry(0.1, 0.09, 0.06), PALETTE.leatherDark, 'spine', 0.09, 1.14, 0.185);
    pushPart(list, new THREE.BoxGeometry(0.1, 0.09, 0.06), PALETTE.leatherDark, 'spine', -0.09, 1.14, 0.185);
    // bread bag / pack
    pushPart(list, new THREE.BoxGeometry(0.3, 0.2, 0.14), clothDark, 'spine', 0, 1.28, -0.2);
  } else {
    // British small pack + rolled blanket
    pushPart(list, new THREE.BoxGeometry(0.26, 0.2, 0.13), clothDark, 'spine', 0, 1.29, -0.2);
    pushPart(list, new THREE.CylinderGeometry(0.06, 0.06, 0.42, 8), PALETTE.canvas, 'spine', 0, 1.45, -0.19, 0, 0, Math.PI / 2);
  }
  // neck
  pushPart(list, new THREE.CylinderGeometry(0.055, 0.07, 0.11, 8), skin, 'spine', 0, 1.6, 0.005);
  // head
  pushPart(list, new THREE.SphereGeometry(0.105, 12, 10), skin, 'head', 0, 1.71, 0.015, 0, 0, 0, 1, 1.12, 1.02);
  pushPart(list, new THREE.ConeGeometry(0.024, 0.05, 6), PALETTE.skinShadow, 'head', 0, 1.69, 0.11, Math.PI / 2, 0, 0);
  // eyes
  pushPart(list, new THREE.SphereGeometry(0.012, 6, 5), PALETTE.black, 'head', 0.04, 1.735, 0.1);
  pushPart(list, new THREE.SphereGeometry(0.012, 6, 5), PALETTE.black, 'head', -0.04, 1.735, 0.1);
  // moustache
  pushPart(list, new THREE.BoxGeometry(0.075, 0.018, 0.02), german ? 0x4a3524 : 0x3a2a1c, 'head', 0, 1.665, 0.108, 0, 0, 0);
  // ears
  pushPart(list, new THREE.SphereGeometry(0.024, 6, 5), skin, 'head', 0.103, 1.71, 0, 0, 0, 0, 0.5, 1, 0.8);
  pushPart(list, new THREE.SphereGeometry(0.024, 6, 5), skin, 'head', -0.103, 1.71, 0, 0, 0, 0, 0.5, 1, 0.8);

  // helmet
  if (german) {
    if (variant === 'german2') {
      // pickelhaube
      pushPart(list, new THREE.SphereGeometry(0.115, 12, 8, 0, TAU, 0, Math.PI / 2), PALETTE.leatherDark, 'head', 0, 1.765, 0, 0, 0, 0, 1, 0.95, 1.05);
      pushPart(list, new THREE.CylinderGeometry(0.112, 0.118, 0.035, 12), PALETTE.brass, 'head', 0, 1.77, 0);
      pushPart(list, new THREE.ConeGeometry(0.02, 0.09, 6), PALETTE.brass, 'head', 0, 1.88, 0);
      pushPart(list, new THREE.CylinderGeometry(0.09, 0.1, 0.02, 10), PALETTE.leatherDark, 'head', 0, 1.80, 0.09, 0.15);
    } else {
      // stahlhelm
      pushPart(list, new THREE.SphereGeometry(0.135, 12, 8, 0, TAU, 0, Math.PI / 2), PALETTE.fieldgreyDark, 'head', 0, 1.755, 0, 0, 0, 0, 1, 0.8, 1.12);
      pushPart(list, new THREE.CylinderGeometry(0.175, 0.15, 0.05, 12), PALETTE.fieldgreyDark, 'head', 0, 1.735, 0, 0, 0, 0, 1, 1, 1.12);
      pushPart(list, new THREE.BoxGeometry(0.05, 0.03, 0.02), PALETTE.metalDark, 'head', 0.1, 1.78, 0.09);
    }
  } else {
    // Brodie helmet
    pushPart(list, new THREE.CylinderGeometry(0.235, 0.235, 0.022, 14), PALETTE.khakiDark, 'head', 0, 1.775, 0);
    pushPart(list, new THREE.SphereGeometry(0.155, 12, 8, 0, TAU, 0, Math.PI / 2), PALETTE.khakiDark, 'head', 0, 1.775, 0, 0, 0, 0, 1, 0.62, 1);
    pushPart(list, new THREE.BoxGeometry(0.26, 0.012, 0.05), PALETTE.khakiDark, 'head', 0, 1.79, 0.1, 0.15);
  }

  // arms
  for (const side of [1, -1]) {
    const arm = side > 0 ? 'armL' : 'armR';
    const fore = side > 0 ? 'foreL' : 'foreR';
    const hand = side > 0 ? 'handL' : 'handR';
    const ax = side * 0.245;
    pushPart(list, new THREE.CapsuleGeometry(0.062, 0.2, 4, 8), cloth, arm, ax, 1.36, 0, 0, 0, side * 0.05);
    pushPart(list, new THREE.CapsuleGeometry(0.055, 0.18, 4, 8), cloth, fore, ax, 1.06, 0.01);
    // puttee / cuff
    pushPart(list, new THREE.CylinderGeometry(0.06, 0.058, 0.09, 8), clothDark, fore, ax, 0.93, 0.01);
    pushPart(list, new THREE.SphereGeometry(0.055, 8, 6), skin, hand, ax, 0.86, 0.02, 0, 0, 0, 0.85, 1.1, 0.85);
  }

  // legs
  for (const side of [1, -1]) {
    const leg = side > 0 ? 'legL' : 'legR';
    const shin = side > 0 ? 'shinL' : 'shinR';
    const foot = side > 0 ? 'footL' : 'footR';
    const lx = side * 0.15;
    pushPart(list, new THREE.CapsuleGeometry(0.083, 0.26, 4, 8), clothDark, leg, lx, 0.69, 0);
    pushPart(list, new THREE.CapsuleGeometry(0.07, 0.26, 4, 8), cloth, shin, lx, 0.27, 0.005);
    // puttee wraps
    for (let i = 0; i < 3; i++) pushPart(list, new THREE.CylinderGeometry(0.075, 0.073, 0.035, 8), clothDark, shin, lx, 0.17 + i * 0.075, 0.005);
    // boot
    pushPart(list, new THREE.BoxGeometry(0.13, 0.09, 0.25), PALETTE.leatherDark, foot, lx, 0.06, 0.055);
    pushPart(list, new THREE.SphereGeometry(0.065, 8, 6), PALETTE.leatherDark, foot, lx, 0.06, 0.16, 0, 0, 0, 1, 0.7, 1.2);
  }

  // rifle on weapon bone
  buildRifle(list, 'weapon', 0.02, 0.02, 0, { bayonet: !german && variant !== 'british2', wood: german ? PALETTE.woodDark : PALETTE.wood });

  const merged = mergeGeometries(list, false);
  merged.computeBoundingSphere();
  soldierGeoCache.set(variant, merged);
  return merged;
}

const SOLDIER_MAT = new THREE.MeshToonMaterial({ vertexColors: true, gradientMap: GRADIENT });

export function buildSoldier(variant = 'british1') {
  const geo = buildSoldierGeometry(variant);
  const { bones, byName, skeleton } = createSkeleton();
  const mesh = new THREE.SkinnedMesh(geo, SOLDIER_MAT);
  mesh.castShadow = true; mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  mesh.add(bones[0]);
  mesh.bind(skeleton);
  const group = new THREE.Group();
  group.add(mesh);
  group.userData = { bones: byName, skeleton, mesh, variant, phase: Math.random() * TAU, aimPitch: 0, moving: 0 };
  return group;
}

/* ================================================================== *
 *  TANK — Mark I (British) and A7V (German)
 * ================================================================== */
function rhombusPath(length, height, samples) {
  // rhomboid track loop in X/Y plane (front +X)
  const pts = [];
  const a = length / 2, b = height / 2;
  for (let i = 0; i < samples; i++) {
    const t = i / samples * TAU;
    const x = Math.cos(t) * a;
    const y = Math.sin(t) * b * (0.8 + 0.2 * Math.cos(t));
    pts.push(new THREE.Vector2(x, y));
  }
  return pts;
}

function buildTrackBand(parent, side, mats) {
  const length = 7.4, height = 2.35;
  const path = rhombusPath(length, height, 56);
  // track frame plate (extruded rhombus)
  const shape = new THREE.Shape();
  path.forEach((p, i) => i ? shape.lineTo(p.x, p.y) : shape.moveTo(p.x, p.y));
  shape.closePath();
  const hole = new THREE.Path();
  const inner = rhombusPath(length - 0.55, height - 0.55, 56);
  inner.forEach((p, i) => i ? hole.lineTo(p.x, p.y) : hole.moveTo(p.x, p.y));
  hole.closePath();
  shape.holes.push(hole);
  const frameGeo = new THREE.ExtrudeGeometry(shape, { depth: 0.22, bevelEnabled: false, curveSegments: 4 });
  const frame = new THREE.Mesh(frameGeo, mats.frame);
  frame.position.set(0, 1.25, side * 1.72);
  frame.castShadow = true; frame.receiveShadow = true;
  parent.add(frame);

  // instanced track plates around perimeter
  const plateGeo = new THREE.BoxGeometry(0.2, 0.34, 0.5);
  const plates = new THREE.InstancedMesh(plateGeo, mats.track, 60);
  plates.castShadow = true; plates.receiveShadow = true;
  plates.frustumCulled = false;
  parent.add(plates);

  // road wheels
  const wheels = [];
  for (let i = 0; i < 7; i++) {
    const t = (i / 7) * TAU + 0.2;
    const x = Math.cos(t) * (length / 2 - 0.7);
    const y = Math.sin(t) * (height / 2 - 0.7) * 0.9;
    const w = addCyl(parent, 0.34, 0.34, 0.3, 10, 0x3a352d, x, 1.25 + y, side * 1.6, Math.PI / 2, 0, 0);
    wheels.push(w);
  }
  return { plates, path, wheels, side, length, height };
}

export function buildMarkI() {
  const group = new THREE.Group();
  const mats = {
    hull: toonMat(PALETTE.tankGreen),
    hull2: toonMat(PALETTE.tankBrown),
    frame: toonMat(0x4a4733),
    track: toonMat(PALETTE.track),
    metal: toonMat(PALETTE.metalDark),
    wood: toonMat(PALETTE.wood),
  };
  const tracks = [];
  for (const side of [1, -1]) tracks.push(buildTrackBand(group, side, mats));

  // main hull between tracks
  const hull = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.15, 2.8), mats.hull);
  hull.position.set(0, 1.35, 0); hull.castShadow = true; hull.receiveShadow = true;
  group.add(hull);
  // sloped glacis front/back
  addBox(group, 1.0, 1.25, 2.8, PALETTE.tankGreen, 3.25, 1.3, 0, 0, 0, 0.35, mats.hull);
  addBox(group, 1.0, 1.25, 2.8, PALETTE.tankGreen, -3.25, 1.3, 0, 0, 0, -0.35, mats.hull);
  // top deck
  addBox(group, 5.4, 0.12, 2.6, PALETTE.tankBrown, 0, 1.96, 0, 0, 0, 0, mats.hull2);
  // driver's cab
  const cab = addBox(group, 1.5, 0.95, 2.2, PALETTE.tankGreen, 1.55, 2.45, 0, 0, 0, 0, mats.hull);
  addBox(group, 1.2, 0.5, 1.0, 0x26281f, 1.62, 2.62, 0.0, 0, 0, 0, mats.metal); // vision slit box
  addBox(group, 0.9, 0.07, 0.06, PALETTE.metalDark, 1.9, 2.7, 0.56);
  // sponsons
  for (const side of [1, -1]) {
    const sp = addBox(group, 2.1, 1.05, 0.85, PALETTE.tankGreen, 0.35, 1.55, side * 1.72, 0, 0, 0, mats.hull);
    addBox(group, 1.5, 0.35, 0.55, 0x2c2f25, 0.35, 1.85, side * 1.75, 0, 0, 0, mats.metal);
    // machine-gun port
    addCyl(group, 0.075, 0.09, 0.9, 8, PALETTE.gunmetal, 0.9, 1.6, side * 2.15, Math.PI / 2, 0, 0, mats.metal);
    addCyl(group, 0.11, 0.11, 0.12, 8, PALETTE.gunmetal, 0.9, 1.6, side * 2.55, Math.PI / 2, 0, 0, mats.metal);
    // sponson hatch
    addBox(group, 0.5, 0.55, 0.05, 0x3c3a2b, -0.35, 1.5, side * 2.16);
    // crew gunner visible port
    addSphere(group, 0.12, PALETTE.skin, 0.35, 1.62, side * 2.14, 1, 1, 0.7);
  }
  // front & rear hatches, exhaust
  addBox(group, 0.9, 0.5, 0.06, 0x363425, 2.2, 1.8, 1.44);
  addCyl(group, 0.13, 0.13, 0.6, 8, PALETTE.metalDark, -2.1, 2.3, 1.0, 0, 0, 0.5);
  addCyl(group, 0.13, 0.13, 0.6, 8, PALETTE.metalDark, -2.1, 2.3, -1.0, 0, 0, 0.5);
  // unditching beam
  addBox(group, 3.4, 0.22, 0.22, PALETTE.woodDark, -0.3, 2.15, 0, 0, 0, 0);
  // rivets
  const rivetGeo = new THREE.SphereGeometry(0.035, 5, 4);
  const rivets = new THREE.InstancedMesh(rivetGeo, mats.metal, 220);
  const m4 = new THREE.Matrix4();
  let ri = 0;
  const rng = mulberry32(42);
  for (let i = 0; i < 110; i++) {
    const x = (rng() - 0.5) * 6.2, z = (rng() < 0.5 ? 1 : -1) * 1.42;
    m4.makeTranslation(x, 1.0 + rng() * 0.9, z);
    rivets.setMatrixAt(ri++, m4);
  }
  for (let i = 0; i < 80; i++) {
    const x = (rng() - 0.5) * 5.2, z = (rng() - 0.5) * 2.5;
    m4.makeTranslation(x, 1.98, z);
    rivets.setMatrixAt(ri++, m4);
  }
  rivets.count = ri;
  rivets.castShadow = true;
  group.add(rivets);
  // mud clumps
  for (let i = 0; i < 14; i++) {
    const side = rng() < 0.5 ? 1 : -1;
    addSphere(group, 0.18 + rng() * 0.2, PALETTE.mudDark, (rng() - 0.5) * 5.5, 0.25 + rng() * 0.3, side * (1.9 + rng() * 0.2), 1.4, 0.5, 1.2);
  }
  // tail skid
  addBox(group, 0.25, 0.25, 1.1, PALETTE.woodDark, -3.5, 0.65, 0, 0, 0, 0.6);
  group.userData = { tracks, type: 'mark1' };
  return group;
}

export function buildA7V() {
  const group = new THREE.Group();
  const mats = {
    hull: toonMat(0x6a6a55),
    hull2: toonMat(0x55553f),
    metal: toonMat(PALETTE.metalDark),
    track: toonMat(0x39362d),
  };
  addBox(group, 6.6, 1.9, 3.2, 0x6a6a55, 0, 1.55, 0, 0, 0, 0, mats.hull);
  addBox(group, 6.9, 0.5, 3.4, 0x5c5c45, 0, 0.7, 0, 0, 0, 0, mats.hull2);
  addBox(group, 3.4, 1.15, 2.4, 0x6f6f58, -0.2, 2.85, 0, 0, 0, 0, mats.hull);
  addBox(group, 1.4, 0.8, 1.2, 0x777760, -1.4, 3.6, 0, 0, 0, 0, mats.hull2);
  addBox(group, 0.8, 0.1, 0.08, PALETTE.black, -1.4, 3.7, 0.62, 0, 0, 0, mats.metal);
  // side MG sponsons
  for (const side of [1, -1]) {
    addBox(group, 1.3, 0.85, 0.6, 0x6a6a55, 1.3, 2.0, side * 1.85, 0, 0, 0, mats.hull);
    addCyl(group, 0.06, 0.075, 0.9, 8, PALETTE.gunmetal, 1.3, 2.0, side * 2.35, Math.PI / 2, 0, 0, mats.metal);
    addBox(group, 0.7, 0.1, 0.2, 0x2a2a22, 1.3, 2.42, side * 1.8, 0, 0, 0, mats.metal);
  }
  // cannon at front
  addCyl(group, 0.11, 0.14, 1.2, 10, PALETTE.gunmetal, 3.6, 2.1, 0, 0, 0, Math.PI / 2, mats.metal);
  addBox(group, 0.8, 0.9, 1.1, 0x6a6a55, 3.05, 2.05, 0, 0, 0, 0, mats.hull);
  // tracks with animated road wheels so movement is legible
  const wheels = [];
  const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.24, 10);
  wheelGeo.rotateX(Math.PI / 2); // axle along Z
  const wheelMat = toonMat(0x35322a);
  const hubMat = toonMat(0x55503d);
  for (const side of [1, -1]) {
    for (let i = 0; i < 12; i++) {
      addBox(group, 0.45, 0.5, 0.22, 0x3d3a30, -2.9 + i * 0.52, 0.5, side * 1.95);
    }
    addBox(group, 6.3, 0.7, 0.3, 0x45422f, 0, 0.55, side * 1.95);
    for (let i = 0; i < 5; i++) {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.position.set(-2.2 + i * 1.1, 0.52, side * 2.02);
      w.castShadow = true;
      group.add(w);
      wheels.push(w);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.27, 8).rotateX(Math.PI / 2), hubMat);
      hub.position.copy(w.position);
      group.add(hub);
    }
  }
  // exhausts
  addCyl(group, 0.1, 0.1, 0.8, 8, PALETTE.metalDark, -2.4, 3.2, 0.7, 0, 0, 0.2, mats.metal);
  addCyl(group, 0.1, 0.1, 0.8, 8, PALETTE.metalDark, -2.4, 3.2, -0.7, 0, 0, 0.2, mats.metal);
  // iron cross decals
  const crossMat = toonMat(0x2a2a24);
  for (const side of [1, -1]) {
    addBox(group, 0.7, 0.14, 0.03, 0x2a2a24, 0.6, 1.9, side * 1.72, 0, 0, 0, crossMat);
    addBox(group, 0.14, 0.7, 0.03, 0x2a2a24, 0.6, 1.9, side * 1.72, 0, 0, 0, crossMat);
  }
  group.userData = { type: 'a7v', tracks: [], wheels };
  return group;
}

/* ================================================================== *
 *  AEROPLANES — Sopwith Camel (British) & Albatros D.III (German)
 * ================================================================== */
function addRoundel(parent, r, x, y, z, german = false) {
  const g = new THREE.Group();
  if (german) {
    const m = toonMat(0x22221c);
    const a = new THREE.Mesh(new THREE.BoxGeometry(r * 1.6, r * 0.3, 0.02), m);
    const b = new THREE.Mesh(new THREE.BoxGeometry(r * 0.3, r * 1.6, 0.02), m);
    g.add(a, b);
  } else {
    const outer = new THREE.Mesh(new THREE.CircleGeometry(r, 16), toonMat(0x2f4b6e));
    const mid = new THREE.Mesh(new THREE.CircleGeometry(r * 0.66, 16), toonMat(0xe8e2cf));
    const inner = new THREE.Mesh(new THREE.CircleGeometry(r * 0.34, 16), toonMat(0x9e3428));
    mid.position.z = 0.006; inner.position.z = 0.012;
    g.add(outer, mid, inner);
  }
  g.position.set(x, y, z);
  g.rotation.x = Math.PI / 2;
  parent.add(g);
  return g;
}

function wing(parent, span, chord, thick, y, z, color, mat, dihedral = 0) {
  const geo = new THREE.BoxGeometry(span, thick, chord, 16, 1, 4);
  // round the wing tips
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const tip = Math.max(0, (Math.abs(x) - span * 0.36) / (span * 0.14));
    if (tip > 0) {
      const f = Math.max(0.05, 1 - tip * 0.9);
      pos.setZ(i, pos.getZ(i) * f);
      pos.setY(i, pos.getY(i) * (0.5 + f * 0.5));
    }
    pos.setY(i, pos.getY(i) + Math.abs(x) / span * dihedral);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat || toonMat(color));
  m.position.set(0, y, z);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

export function buildPlane(type = 'camel') {
  const german = type === 'albatros';
  const group = new THREE.Group();
  const bodyColor = german ? PALETTE.planeBlue : PALETTE.planeKhaki;
  const bodyMat = toonMat(bodyColor);
  const darkMat = toonMat(german ? 0x4f5a66 : 0x5f5c3c);
  const metal = toonMat(PALETTE.metalDark);
  const wood = toonMat(PALETTE.woodDark);
  const rng = mulberry32(german ? 88 : 34);

  // fuselage — tapered segments (rounded, organic)
  const fus = new THREE.Group();
  fus.position.set(0, 1.35, 0);
  group.add(fus);
  const segs = [
    { z: 1.7, r1: 0.44, r2: 0.46, len: 0.9, color: bodyColor },
    { z: 0.85, r1: 0.47, r2: 0.44, len: 0.85, color: bodyColor },
    { z: 0.1, r1: 0.4, r2: 0.47, len: 0.7, color: bodyColor },
    { z: -0.6, r1: 0.26, r2: 0.4, len: 0.8, color: bodyColor },
    { z: -1.5, r1: 0.14, r2: 0.26, len: 0.9, color: bodyColor },
    { z: -2.25, r1: 0.08, r2: 0.14, len: 0.6, color: bodyColor },
  ];
  for (const s of segs) {
    const g = new THREE.CylinderGeometry(s.r1, s.r2, s.len, 12);
    const m = new THREE.Mesh(g, bodyMat);
    m.rotation.x = Math.PI / 2;
    m.position.set(0, 0, s.z);
    m.castShadow = true;
    fus.add(m);
  }
  // engine cowling
  const cowl = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.48, 0.55, 14), metal);
  cowl.rotation.x = Math.PI / 2; cowl.position.set(0, 0, 2.25); cowl.castShadow = true;
  fus.add(cowl);
  // rotary engine cylinders
  for (let i = 0; i < 9; i++) {
    const a = i / 9 * TAU;
    addCyl(fus, 0.075, 0.075, 0.35, 6, PALETTE.metal, Math.cos(a) * 0.42, Math.sin(a) * 0.42, 2.5, Math.PI / 2, 0, 0);
  }
  // cockpit
  const cockpit = addCyl(fus, 0.24, 0.24, 0.12, 12, PALETTE.black, 0, 0.4, 0.35, 0, 0, 0);
  addTorus(fus, 0.25, 0.035, PALETTE.leather, 0, 0.45, 0.35, Math.PI / 2, 0, 0);
  // pilot
  addSphere(fus, 0.11, PALETTE.leather, 0, 0.58, 0.32, 1, 1.1, 1);
  addSphere(fus, 0.1, 0xd0a077, 0, 0.6, 0.45, 0.9, 0.9, 0.9);
  addBox(fus, 0.22, 0.26, 0.18, PALETTE.leatherDark, 0, 0.5, 0.22);
  // guns
  addCyl(fus, 0.04, 0.04, 0.5, 6, PALETTE.gunmetal, 0.14, 0.35, 1.6, Math.PI / 2, 0, 0);
  addCyl(fus, 0.04, 0.04, 0.5, 6, PALETTE.gunmetal, -0.14, 0.35, 1.6, Math.PI / 2, 0, 0);
  if (german) addBox(fus, 0.16, 0.1, 0.4, metal, 0, 0.28, 1.55);

  // propeller
  const prop = new THREE.Group();
  prop.position.set(0, 1.35, 2.65);
  const bladeMat = toonMat(0x4a3320);
  for (const s of [1, -1]) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.45, 0.07), bladeMat);
    blade.position.y = s * 0.68;
    blade.rotation.z = s * 0.06;
    blade.castShadow = true;
    prop.add(blade);
  }
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 8), metal);
  hub.rotation.x = Math.PI / 2; prop.add(hub);
  group.add(prop);

  // wings
  const topWing = wing(group, 8.6, 1.5, 0.14, 2.25, 0.55, bodyColor, bodyMat, 0.1);
  const botWing = wing(group, 7.6, 1.35, 0.13, 1.0, 0.65, bodyColor, bodyMat, 0.1);
  // wing ribs
  for (const wy of [1.0, 2.25]) {
    for (let i = -3; i <= 3; i++) {
      addBox(group, 0.05, 0.035, 1.3, darkMat, i * 1.05, wy + 0.08, 0.6);
    }
  }
  // struts
  const strutGeo = new THREE.BoxGeometry(0.07, 1.25, 0.09);
  for (const x of [-2.7, -1.1, 1.1, 2.7]) {
    const s = new THREE.Mesh(strutGeo, wood);
    s.position.set(x, 1.63, 0.7); s.rotation.z = x * 0.012;
    s.castShadow = true; group.add(s);
  }
  // cabane struts
  for (const x of [-0.45, 0.45]) {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.8, 0.07), wood);
    s.position.set(x, 1.8, 0.35); group.add(s);
  }
  // rigging wires
  const wireMat = new THREE.LineBasicMaterial({ color: 0x2b2b24, transparent: true, opacity: 0.7 });
  const wg = new THREE.BufferGeometry();
  const wv = [];
  for (const x of [-3.9, -2.7, 2.7, 3.9]) {
    wv.push(x, 1.1, 0.7, x * 0.6, 2.2, 0.6);
    wv.push(x, 1.1, 0.45, x * 0.6, 2.2, 0.35);
  }
  wg.setAttribute('position', new THREE.Float32BufferAttribute(wv, 3));
  group.add(new THREE.LineSegments(wg, wireMat));
  // roundels
  addRoundel(group, 0.62, 2.6, 2.35, 0.55, german);
  addRoundel(group, 0.62, -2.6, 2.35, 0.55, german);
  addRoundel(group, 0.55, 2.3, 1.12, 0.65, german);
  addRoundel(group, 0.55, -2.3, 1.12, 0.65, german);
  // tail
  addBox(group, 2.6, 0.08, 0.9, bodyColor, 0, 1.55, -2.35, 0, 0, 0, bodyMat);
  addBox(group, 0.08, 1.0, 0.9, bodyColor, 0, 1.9, -2.45, 0, 0, 0, bodyMat);
  // rudder (animated)
  const rudder = new THREE.Group();
  rudder.position.set(0, 1.9, -2.9);
  const rg = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.95, 0.55), darkMat);
  rg.position.z = -0.28; rg.castShadow = true;
  rudder.add(rg);
  group.add(rudder);
  // elevators (animated)
  const elevator = new THREE.Group();
  elevator.position.set(0, 1.55, -2.75);
  const eg = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.07, 0.5), bodyColor);
  eg.position.z = -0.25; eg.castShadow = true;
  elevator.add(eg);
  group.add(elevator);

  // undercarriage
  for (const side of [1, -1]) {
    addCyl(group, 0.045, 0.045, 1.0, 6, metal, side * 0.55, 0.65, 1.05, 0, 0, side * 0.45);
    const wheel = addCyl(group, 0.34, 0.34, 0.13, 12, 0x2b2822, side * 0.95, 0.36, 1.05, Math.PI / 2, 0, 0);
    wheel.name = 'wheel';
    addCyl(group, 0.1, 0.1, 0.15, 8, PALETTE.woodDark, side * 0.95, 0.36, 1.05, Math.PI / 2, 0, 0);
  }
  // tail skid
  addCyl(group, 0.03, 0.03, 0.5, 5, wood, 0, 0.75, -2.1, 0, 0, 0.5);

  // weathering patches
  for (let i = 0; i < 8; i++) {
    addSphere(group, 0.1 + rng() * 0.12, german ? 0x6f7f86 : 0x6d6a44, (rng() - 0.5) * 1.4, 1.15 + rng() * 0.9, (rng() - 0.5) * 3.4, 1.4, 0.3, 1.4);
  }

  group.userData = { type, propeller: prop, rudder, elevator, topWing, botWing, cowl, german };
  return group;
}

/* ================================================================== *
 *  MACHINE GUN / FIELD GUN / PARACHUTE
 * ================================================================== */
export function buildVickersMG() {
  const group = new THREE.Group();
  // tripod
  for (const a of [0, 2.1, 4.2]) {
    addCyl(group, 0.025, 0.035, 1.0, 6, PALETTE.metalDark, Math.cos(a) * 0.22, 0.5, Math.sin(a) * 0.22, Math.sin(a) * 0.25, 0, -Math.cos(a) * 0.25);
  }
  addCyl(group, 0.06, 0.06, 0.12, 8, PALETTE.metalDark, 0, 1.0, 0);
  // water jacket
  const jacket = addCyl(group, 0.105, 0.11, 0.75, 12, PALETTE.gunmetal, 0, 1.12, 0.28, Math.PI / 2, 0, 0);
  addCyl(group, 0.085, 0.085, 0.25, 10, PALETTE.gunmetal, 0, 1.12, 0.76, Math.PI / 2, 0, 0);
  addCyl(group, 0.055, 0.06, 0.25, 8, PALETTE.metalDark, 0, 1.12, 0.98, Math.PI / 2, 0, 0);
  // cooling fins
  for (let i = 0; i < 5; i++) addTorus(group, 0.115, 0.012, PALETTE.metalDark, 0, 1.12, 0.1 + i * 0.12, 0, 0, 0);
  // body & spade grips
  addBox(group, 0.2, 0.22, 0.34, PALETTE.metalDark, 0, 1.12, -0.2);
  addBox(group, 0.04, 0.2, 0.04, PALETTE.woodDark, 0.1, 1.1, -0.44, 0.2);
  addBox(group, 0.04, 0.2, 0.04, PALETTE.woodDark, -0.1, 1.1, -0.44, -0.2);
  // ammo box & belt
  addBox(group, 0.3, 0.2, 0.22, 0x4d4a35, 0.28, 0.9, -0.1);
  addBox(group, 0.06, 0.025, 0.25, PALETTE.brass, 0.14, 1.02, -0.12, 0.2);
  // muzzle reference
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 1.12, 1.12);
  group.add(muzzle);
  group.userData = { muzzle, barrel: jacket };
  return group;
}

export function buildFieldGun() {
  const group = new THREE.Group();
  const mat = toonMat(0x5c6045);
  // wheels
  for (const side of [1, -1]) {
    addTorus(group, 0.55, 0.07, PALETTE.woodDark, side * 0.85, 0.6, 0, 0, Math.PI / 2, 0);
    for (let i = 0; i < 8; i++) {
      const a = i / 8 * TAU;
      addCyl(group, 0.02, 0.02, 1.0, 4, PALETTE.wood, side * 0.85, 0.6, 0, Math.PI / 2, 0, a);
    }
  }
  // carriage
  addBox(group, 0.35, 0.3, 2.3, 0x5c6045, 0, 0.62, -0.2, 0.12, 0, 0, mat);
  addBox(group, 0.9, 0.35, 0.5, 0x5c6045, 0, 0.55, -1.0, 0, 0, 0, mat);
  // barrel
  addCyl(group, 0.07, 0.11, 1.9, 10, PALETTE.gunmetal, 0, 0.9, 0.8, Math.PI / 2 - 0.08, 0, 0);
  addCyl(group, 0.13, 0.13, 0.2, 8, PALETTE.gunmetal, 0, 0.96, 1.75, Math.PI / 2, 0, 0);
  // shield
  addBox(group, 1.1, 0.7, 0.06, 0x4f533c, 0, 0.85, 0.2, 0, 0, 0, mat);
  group.userData = { muzzle: new THREE.Object3D() };
  return group;
}

export function buildParachute() {
  const group = new THREE.Group();
  const canopy = new THREE.Group();
  const n = 10, R = 2.2;
  const colors = [0xd8d2bd, 0xbcb49b, 0xd8d2bd, 0xa9a189];
  for (let i = 0; i < n; i++) {
    const a0 = i / n * TAU, a1 = (i + 1) / n * TAU;
    const g = new THREE.SphereGeometry(R, 4, 3, a0, TAU / n, 0, Math.PI * 0.42);
    const m = new THREE.Mesh(g, toonMat(colors[i % colors.length], { side: THREE.DoubleSide }));
    m.castShadow = true;
    canopy.add(m);
  }
  canopy.position.y = 0;
  group.add(canopy);
  // ropes
  const ropeMat = new THREE.LineBasicMaterial({ color: 0x5a5040 });
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = i / n * TAU;
    pts.push(Math.cos(a) * R * 0.95, -0.1, Math.sin(a) * R * 0.95, 0, -2.2, 0);
  }
  const rg = new THREE.BufferGeometry();
  rg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  group.add(new THREE.LineSegments(rg, ropeMat));
  // harness man
  addCapsule(group, 0.13, 0.5, PALETTE.leatherDark, 0, -2.5, 0);
  addSphere(group, 0.12, 0xd0a077, 0, -2.05, 0);
  group.userData = { canopy };
  return group;
}

export function buildDebris(color = 0x5b5a3c) {
  const group = new THREE.Group();
  const rng = mulberry32(Math.floor(Math.random() * 10000));
  for (let i = 0; i < 7; i++) {
    const m = addBox(group, 0.3 + rng() * 0.7, 0.08 + rng() * 0.25, 0.2 + rng() * 0.6, i % 3 === 0 ? PALETTE.woodDark : color, 0, 0, 0);
    m.rotation.set(rng() * 3, rng() * 3, rng() * 3);
    m.position.set((rng() - 0.5) * 0.6, (rng() - 0.5) * 0.3, (rng() - 0.5) * 0.6);
  }
  return group;
}

/* ================================================================== *
 *  Base / camp props
 * ================================================================== */
export function buildNissenHut() {
  const group = new THREE.Group();
  const geo = new THREE.CylinderGeometry(3.2, 3.2, 9, 16, 1, true, 0, Math.PI);
  const m = new THREE.Mesh(geo, toonMat(0x7a7558, { side: THREE.DoubleSide }));
  m.rotation.z = Math.PI / 2; m.rotation.y = Math.PI / 2;
  m.position.y = 0.1; m.castShadow = true; m.receiveShadow = true;
  group.add(m);
  addBox(group, 9, 0.2, 6.4, 0x6a6550, 0, 0.12, 0);
  addBox(group, 0.15, 2.3, 1.6, 0x2e2a20, 4.5, 1.2, 0);
  return group;
}

export function buildTent() {
  const group = new THREE.Group();
  addCone(group, 3.1, 2.5, 4, 0x8b8464, 0, 1.25, 0, 0, Math.PI / 4, 0);
  addBox(group, 0.12, 2.0, 0.12, PALETTE.woodDark, 0, 2.4, 0);
  addBox(group, 0.7, 1.3, 0.05, 0x37342a, 0, 0.75, 2.05, -0.2);
  return group;
}

export function buildHangar() {
  const group = new THREE.Group();
  const mat = toonMat(0x6e684c);
  addBox(group, 22, 0.3, 16, 0x5c5640, 0, 0.15, 0);
  // walls
  addBox(group, 22, 4.2, 0.3, 0x6e684c, 0, 2.1, -8);
  addBox(group, 0.3, 4.2, 16, 0x6e684c, -11, 2.1, 0);
  addBox(group, 0.3, 4.2, 16, 0x6e684c, 11, 2.1, 0);
  // roof
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 22, 12, 1, true, 0, Math.PI), toonMat(0x77714f, { side: THREE.DoubleSide }));
  roof.rotation.z = Math.PI / 2; roof.rotation.y = Math.PI / 2;
  roof.position.y = 4.2; roof.scale.y = 1; roof.scale.x = 0.4;
  group.add(roof);
  // beams
  for (let i = -4; i <= 4; i++) addBox(group, 0.2, 0.2, 16, PALETTE.woodDark, i * 2.4, 4.15, 0);
  // crates
  addBox(group, 1.4, 1.1, 1.4, PALETTE.wood, 7, 0.7, 4);
  addBox(group, 1.2, 0.9, 1.2, PALETTE.woodDark, 8.5, 0.6, 3);
  return group;
}

export function buildWindsock() {
  const group = new THREE.Group();
  addCyl(group, 0.05, 0.07, 5, 6, PALETTE.woodDark, 0, 2.5, 0);
  const sock = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.42, 1.9, 8, 1, true), toonMat(0xd9cba8, { side: THREE.DoubleSide }));
  sock.rotation.z = -Math.PI / 2 - 0.15; sock.position.set(1.0, 4.9, 0);
  group.add(sock);
  group.userData = { sock };
  return group;
}

export function buildFlag(color = 0xa32b23, pole = 8) {
  const group = new THREE.Group();
  addCyl(group, 0.06, 0.09, pole, 6, PALETTE.woodDark, 0, pole / 2, 0);
  const flag = new THREE.Group();
  flag.position.set(0.02, pole - 1.0, 0);
  const geo = new THREE.PlaneGeometry(2.1, 1.25, 8, 4);
  const m = new THREE.Mesh(geo, toonMat(color, { side: THREE.DoubleSide }));
  m.position.x = 1.05;
  flag.add(m);
  group.add(flag);
  group.userData = { flag };
  return group;
}

export function buildBunker() {
  const group = new THREE.Group();
  const mat = toonMat(0x6a6858);
  addBox(group, 7, 2.6, 5, 0x6a6858, 0, 1.3, 0, 0, 0, 0, mat);
  addBox(group, 6.2, 0.6, 4.4, 0x575545, 0, 2.8, 0);
  addBox(group, 4.2, 0.55, 0.1, PALETTE.black, 0, 1.5, 2.52);
  addBox(group, 0.9, 1.9, 0.1, 0x2c2a22, -2.2, 0.95, 2.52);
  // roof beams
  for (let i = -2; i <= 2; i++) addBox(group, 0.25, 0.25, 5.2, PALETTE.woodDark, i * 1.3, 3.15, 0);
  return group;
}

export function buildTruck() {
  const group = new THREE.Group();
  addBox(group, 2.0, 1.1, 4.6, 0x4f533c, 0, 1.2, 0);
  addBox(group, 1.9, 0.8, 1.4, 0x4f533c, 0, 1.75, 1.5);
  addBox(group, 1.4, 0.55, 1.0, 0x30352d, 0, 2.0, 1.55);
  for (const [x, z] of [[-1, 1.4], [1, 1.4], [-1, -1.5], [1, -1.5]]) {
    addCyl(group, 0.45, 0.45, 0.25, 10, 0x25231e, x, 0.5, z, 0, 0, Math.PI / 2);
  }
  for (let i = 0; i < 4; i++) addBox(group, 0.12, 1.4, 0.06, 0x3a3f32, 0, 1.9, -1.6 + i * 0.4);
  addCyl(group, 0.16, 0.16, 0.8, 8, 0x3a3a30, 1.05, 1.7, 1.4, 0, 0, Math.PI / 2);
  return group;
}

export function buildCrateStack() {
  const group = new THREE.Group();
  const rng = mulberry32(Math.floor(Math.random() * 9999));
  for (let i = 0; i < 5; i++) {
    const w = 0.6 + rng() * 0.5;
    const m = addBox(group, w, w * 0.8, w, rng() < 0.5 ? PALETTE.wood : PALETTE.woodDark, (rng() - 0.5) * 1.2, w * 0.4 + (i > 2 ? 0.6 : 0), (rng() - 0.5) * 1.2, 0, rng() * 3, 0);
    addBox(group, w * 0.9, 0.04, w * 0.9, 0x8a6b44, m.position.x, m.position.y + w * 0.4, m.position.z);
  }
  return group;
}
