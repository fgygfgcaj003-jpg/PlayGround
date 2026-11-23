import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { clamp, rand, pick } from './utils.js';

const glassMat = new THREE.MeshStandardMaterial({ color: 0x0a141d, roughness: 0.08, metalness: 0.75 });
const darkGlass = new THREE.MeshStandardMaterial({ color: 0x0d1a24, roughness: 0.12, metalness: 0.7 });
const chromeMat = new THREE.MeshStandardMaterial({ color: 0xbfc7cc, roughness: 0.25, metalness: 0.9 });
const tireMat = new THREE.MeshStandardMaterial({ color: 0x16181b, roughness: 0.95 });
const rimMat = new THREE.MeshStandardMaterial({ color: 0x9aa3a9, roughness: 0.35, metalness: 0.75 });
const trimMat = new THREE.MeshStandardMaterial({ color: 0x1b2025, roughness: 0.75 });
const seatMat = new THREE.MeshStandardMaterial({ color: 0x2b3239, roughness: 0.9 });
const whiteMat = new THREE.MeshStandardMaterial({ color: 0xe6e9ea, roughness: 0.55 });
const redMat = new THREE.MeshStandardMaterial({ color: 0xb82a34, roughness: 0.45 });
const yellowMat = new THREE.MeshStandardMaterial({ color: 0xe0a927, roughness: 0.5 });
const silverMat = new THREE.MeshStandardMaterial({ color: 0xb3b8bb, roughness: 0.4, metalness: 0.6 });

const wheelGeoCache = new Map();
function wheelGeo(r, w) {
  const k = r.toFixed(2) + ':' + w.toFixed(2);
  if (!wheelGeoCache.has(k)) {
    const g = new THREE.CylinderGeometry(r, r, w, 16);
    g.rotateZ(Math.PI / 2);
    wheelGeoCache.set(k, g);
  }
  return wheelGeoCache.get(k);
}
const rimGeoCache = new Map();
function rimGeo(r, w) {
  const k = r.toFixed(2) + ':' + w.toFixed(2);
  if (!rimGeoCache.has(k)) {
    const g = new THREE.CylinderGeometry(r * 0.58, r * 0.58, w + 0.02, 8);
    g.rotateZ(Math.PI / 2);
    rimGeoCache.set(k, g);
  }
  return rimGeoCache.get(k);
}

export const VEHICLE_TYPES = {
  sedan: {
    name: 'Nova Sable', klass: 'SEDAN', len: 4.55, wid: 1.84, height: 1.42, wheelbase: 2.75, wheelR: 0.33, wheelW: 0.24,
    maxSpeed: 47, accel: 9.2, brake: 22, grip: 8.6, mass: 1480, fuel: 55, price: 17500, seats: 5,
  },
  taxi: {
    name: 'Nova Sable Taxi', klass: 'TAXI', len: 4.55, wid: 1.84, height: 1.46, wheelbase: 2.75, wheelR: 0.33, wheelW: 0.24,
    maxSpeed: 45, accel: 8.8, brake: 21, grip: 8.4, mass: 1490, fuel: 55, price: 19000, seats: 5, color: 0xe8b52a,
  },
  suv: {
    name: 'Aster Ridge', klass: 'SUV', len: 4.95, wid: 1.96, height: 1.78, wheelbase: 2.95, wheelR: 0.4, wheelW: 0.28,
    maxSpeed: 42, accel: 7.8, brake: 19, grip: 8.9, mass: 2150, fuel: 70, price: 32000, seats: 5,
  },
  sports: {
    name: 'Vanta GT', klass: 'SPORTS', len: 4.48, wid: 1.91, height: 1.22, wheelbase: 2.65, wheelR: 0.34, wheelW: 0.3,
    maxSpeed: 63, accel: 13.5, brake: 27, grip: 10.5, mass: 1360, fuel: 60, price: 86000, seats: 2,
  },
  super: {
    name: 'Vanta XR', klass: 'SUPERCAR', len: 4.62, wid: 2.02, height: 1.12, wheelbase: 2.72, wheelR: 0.35, wheelW: 0.34,
    maxSpeed: 82, accel: 18.5, brake: 32, grip: 12.2, mass: 1290, fuel: 62, price: 268000, seats: 2,
  },
  race: {
    name: 'Vanta XR-R', klass: 'RACE', len: 4.72, wid: 2.06, height: 1.04, wheelbase: 2.74, wheelR: 0.36, wheelW: 0.36,
    maxSpeed: 94, accel: 23, brake: 38, grip: 14.2, mass: 940, fuel: 64, price: 465000, seats: 2,
  },
  hatchback: {
    name: 'Nova Hatch', klass: 'HATCHBACK', len: 4.0, wid: 1.76, height: 1.52, wheelbase: 2.55, wheelR: 0.32, wheelW: 0.22,
    maxSpeed: 45, accel: 9.4, brake: 22, grip: 9.0, mass: 1180, fuel: 50, price: 14900, seats: 5,
  },
  coupe: {
    name: 'Vanta C2', klass: 'COUPE', len: 4.42, wid: 1.88, height: 1.28, wheelbase: 2.68, wheelR: 0.33, wheelW: 0.28,
    maxSpeed: 57, accel: 12.6, brake: 26, grip: 10.2, mass: 1390, fuel: 58, price: 68000, seats: 2,
  },
  muscle: {
    name: 'Nova Rampart', klass: 'MUSCLE', len: 4.86, wid: 1.98, height: 1.34, wheelbase: 2.9, wheelR: 0.35, wheelW: 0.32,
    maxSpeed: 62, accel: 14.2, brake: 24, grip: 9.1, mass: 1610, fuel: 70, price: 74000, seats: 4,
  },
  wagon: {
    name: 'Aster Ridge Touring', klass: 'WAGON', len: 4.98, wid: 1.88, height: 1.58, wheelbase: 2.95, wheelR: 0.36, wheelW: 0.26,
    maxSpeed: 46, accel: 9.2, brake: 22, grip: 8.8, mass: 1620, fuel: 68, price: 27000, seats: 5,
  },
  limo: {
    name: 'Nova Regent L', klass: 'LIMOUSINE', len: 6.4, wid: 1.98, height: 1.52, wheelbase: 3.9, wheelR: 0.35, wheelW: 0.27,
    maxSpeed: 41, accel: 7.2, brake: 20, grip: 8.4, mass: 2480, fuel: 90, price: 132000, seats: 6,
  },
  pickup: {
    name: 'Bison 150', klass: 'PICKUP', len: 5.35, wid: 2.0, height: 1.83, wheelbase: 3.3, wheelR: 0.42, wheelW: 0.3,
    maxSpeed: 39, accel: 7.4, brake: 18, grip: 8.2, mass: 2280, fuel: 76, price: 38000, seats: 3,
  },
  van: {
    name: 'Haul-It 300', klass: 'VAN', len: 5.4, wid: 2.0, height: 2.1, wheelbase: 3.2, wheelR: 0.38, wheelW: 0.27,
    maxSpeed: 36, accel: 6.4, brake: 16, grip: 7.8, mass: 2400, fuel: 80, price: 41000, seats: 4,
  },
  bus: {
    name: 'Nova Transit 40', klass: 'BUS', len: 11.6, wid: 2.52, height: 3.15, wheelbase: 6.3, wheelR: 0.53, wheelW: 0.34,
    maxSpeed: 26, accel: 4.2, brake: 12, grip: 7.2, mass: 12800, fuel: 220, price: 320000, seats: 32,
  },
  truck: {
    name: 'Atlas Hauler', klass: 'TRUCK', len: 10.8, wid: 2.48, height: 3.4, wheelbase: 5.4, wheelR: 0.5, wheelW: 0.36,
    maxSpeed: 24, accel: 3.8, brake: 11, grip: 6.9, mass: 15600, fuel: 260, price: 210000, seats: 2,
  },
  army: {
    name: 'Atlas Command', klass: 'MILITARY', len: 6.4, wid: 2.5, height: 2.8, wheelbase: 3.8, wheelR: 0.5, wheelW: 0.38,
    maxSpeed: 33, accel: 6.8, brake: 16, grip: 7.8, mass: 9800, fuel: 300, price: 0, seats: 4, color: 0x4b5638,
  },
  tank: {
    name: 'Nova MBT', klass: 'TANK', len: 8.8, wid: 3.7, height: 2.9, wheelbase: 5.2, wheelR: 0.52, wheelW: 0.5,
    maxSpeed: 17, accel: 3.4, brake: 13, grip: 9.8, mass: 42000, fuel: 420, price: 0, seats: 2, color: 0x4b5638, isTank: true,
  },
  fastTank: {
    name: 'Nova Riptide', klass: 'TANK', len: 8.8, wid: 3.7, height: 2.9, wheelbase: 5.2, wheelR: 0.52, wheelW: 0.5,
    maxSpeed: 90, accel: 19, brake: 34, grip: 13.5, mass: 5200, fuel: 420, price: 0, seats: 2, color: 0x4b5638, isTank: true,
  },
  construction: {
    name: 'Vulcan 8M', klass: 'CONSTRUCTION', len: 8.6, wid: 2.55, height: 3.25, wheelbase: 4.6, wheelR: 0.58, wheelW: 0.4,
    maxSpeed: 21, accel: 3.2, brake: 10, grip: 7.4, mass: 18500, fuel: 240, price: 195000, seats: 2,
  },
  police: {
    name: 'NCPD Interceptor', klass: 'POLICE', len: 4.7, wid: 1.9, height: 1.46, wheelbase: 2.82, wheelR: 0.34, wheelW: 0.26,
    maxSpeed: 56, accel: 11.5, brake: 25, grip: 9.8, mass: 1580, fuel: 62, price: 56000, seats: 4, color: 0xe8edf0,
  },
  fire: {
    name: 'Nova Fire Engine', klass: 'FIRE', len: 9.6, wid: 2.52, height: 3.3, wheelbase: 5.2, wheelR: 0.52, wheelW: 0.36,
    maxSpeed: 29, accel: 4.6, brake: 13, grip: 7.4, mass: 14200, fuel: 240, price: 380000, seats: 6, color: 0xb8242e,
  },
  ambulance: {
    name: 'LifeLine Med 2', klass: 'AMBULANCE', len: 5.7, wid: 2.1, height: 2.65, wheelbase: 3.4, wheelR: 0.4, wheelW: 0.28,
    maxSpeed: 40, accel: 7.2, brake: 18, grip: 8.1, mass: 3100, fuel: 85, price: 120000, seats: 4, color: 0xe8ecee,
  },
  motorcycle: {
    name: 'Wasp R', klass: 'MOTORCYCLE', len: 2.25, wid: 0.82, height: 1.18, wheelbase: 1.55, wheelR: 0.32, wheelW: 0.14,
    maxSpeed: 58, accel: 14, brake: 24, grip: 9.4, mass: 210, fuel: 18, price: 22000, seats: 1,
  },
  boat: {
    name: 'Harborrunner 24', klass: 'SPEEDBOAT', len: 6.2, wid: 2.2, height: 1.4, wheelbase: 0, wheelR: 0, wheelW: 0,
    maxSpeed: 28, accel: 6.0, brake: 8, grip: 4.4, mass: 1600, fuel: 90, price: 74000, seats: 6, isBoat: true,
  },
  helicopter: {
    name: 'Skyline H4', klass: 'HELICOPTER', len: 5.2, wid: 2.0, height: 2.4, wheelbase: 0, wheelR: 0, wheelW: 0,
    maxSpeed: 58, accel: 8, brake: 10, grip: 5, mass: 2200, fuel: 120, price: 640000, seats: 4, isAir: true,
  },
};

const COLORS = [0xcfd3d6, 0x1c2229, 0x8c1f2c, 0x214a72, 0x4b5d4e, 0xb8b1a1, 0x6a3b2c, 0x2f3640, 0x8b7b3b, 0x5a6f88, 0x9a2f46, 0xdedad0];

function addMesh(parent, geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, shadow = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.rotation.set(rx, ry, rz);
  m.castShadow = shadow; m.receiveShadow = false;
  parent.add(m);
  return m;
}

function box(w, h, d) { return new THREE.BoxGeometry(w, h, d); }
function roundedBox(w, h, d, r = .1, seg = 2) {
  return new RoundedBoxGeometry(Math.max(w, .01), Math.max(h, .01), Math.max(d, .01), seg, Math.min(r, Math.min(w, h, d) * .45));
}

function makeWheels(group, cfg, countFront = 2, countRear = 2, allWheel = false) {
  const wheels = [];
  const wr = cfg.wheelR, ww = cfg.wheelW;
  const wb = cfg.wheelbase || cfg.len * 0.55;
  const xs = cfg.wid / 2 - 0.08;
  const zs = allWheel ? [-wb / 2, 0, wb / 2] : [-wb / 2, wb / 2];
  const axles = allWheel ? [2, 2, 2] : [countFront, countRear];
  let idx = 0;
  for (let a = 0; a < zs.length; a++) {
    for (let side = -1; side <= 1; side += 2) {
      for (let d = 0; d < axles[a] / 2; d++) {
        const tire = addMesh(group, wheelGeo(wr, ww), tireMat, xs * side - side * d * ww * 1.1, wr, zs[a]);
        const rim = new THREE.Mesh(rimGeo(wr, ww), rimMat);
        rim.position.set(0, 0, 0); tire.add(rim);
        const hub = new THREE.Mesh(box(ww * 1.02, wr * 1.1, wr * 0.3), rimMat);
        hub.position.set(0, 0, 0); tire.add(hub);
        tire.userData.rim = rim;
        wheels.push({ mesh: tire, front: a === zs.length - 1, side });
        idx++;
      }
    }
  }
  return wheels;
}

function addLight(parent, color, x, y, z, w, h, d, opts = {}) {
  const mat = new THREE.MeshBasicMaterial({ color, toneMapped: false });
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  parent.add(m);
  m.userData.base = new THREE.Color(color);
  m.userData.kind = opts.kind || 'head';
  return m;
}

function addHeadlightRig(parent, x, y, z, w = .34, h = .13, opts = {}) {
  const lens = addLight(parent, 0x4b4d46, x, y, z, w, h, .06, { kind: 'head' });
  const bezel = new THREE.Mesh(
    new THREE.BoxGeometry(w * 1.14, h * 1.12, .025),
    new THREE.MeshStandardMaterial({ color: 0x171b1e, roughness: .28, metalness: .72 })
  );
  bezel.position.set(x, y, z - .045);
  parent.add(bezel);

  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xfff2c4,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  });
  const beamLength = opts.beamLength || 8;
  const beamWidth = opts.beamWidth || w * 1.7;
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(beamWidth * .38, beamWidth, beamLength, 12, 1, true),
    beamMat
  );
  beam.geometry.rotateX(-Math.PI / 2);
  beam.position.set(x, y - h * .08, z + beamLength * .5);
  beam.visible = false;
  parent.add(beam);

  const light = new THREE.SpotLight(0xfff3c7, 0, beamLength * 1.8, Math.PI * .22, .55, 1.4);
  light.position.set(x, y, z + .06);
  light.target.position.set(x, y - .18, z + beamLength);
  light.visible = false;
  parent.add(light);
  parent.add(light.target);

  lens.userData.beam = beam;
  lens.userData.spot = light;
  return lens;
}

function addWheelArch(group, cfg, mats) {
  const x = cfg.wid / 2 - 0.01;
  const wb = cfg.wheelbase || cfg.len * .55;
  for (const z of [-wb / 2, wb / 2]) {
    for (const s of [-1, 1]) {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, cfg.wheelR * 2.4), trimMat);
      arch.position.set(x * s, cfg.wheelR + .3, z);
      group.add(arch);
    }
  }
}

function addBadge(group, x, y, z, color = 0xcfd8dd) {
  const b = new THREE.Mesh(new THREE.BoxGeometry(.3, .09, .02), new THREE.MeshStandardMaterial({ color, roughness: .3, metalness: .8 }));
  b.position.set(x, y, z); group.add(b);
}

function buildCarLike(type, color) {
  const cfg = VEHICLE_TYPES[type];
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.55 });
  const isTaxi = type === 'taxi';
  const isPolice = type === 'police';
  const len = cfg.len, wid = cfg.wid, wb = cfg.wheelbase;
  const bodyH = cfg.height * .42;
  const y0 = cfg.wheelR + bodyH / 2 + .04;

  const body = addMesh(group, roundedBox(wid * .96, bodyH, len * .97, .12, 2), bodyMat, 0, y0, 0);
  body.userData.panel = true;
  // hood / trunk step
  addMesh(group, roundedBox(wid * .92, bodyH * .55, len * .23, .08), bodyMat, 0, y0 + bodyH * .25, len * .33);
  addMesh(group, roundedBox(wid * .9, bodyH * .5, len * .18, .08), bodyMat, 0, y0 + bodyH * .22, -len * .36);
  // cabin
  // cabin proportions vary by body style instead of every car sharing one box
  const cabLen = len * ({
    super: .34, race: .3, sports: .38, coupe: .36, muscle: .4,
    hatchback: .5, wagon: .62, limo: .6,
  }[type] ?? .42);
  const cabW = wid * (type === 'limo' ? .84 : .82);
  const cabH = cfg.height * ({
    super: .24, race: .2, sports: .27, coupe: .26, muscle: .27,
    hatchback: .3, wagon: .31, limo: .3,
  }[type] ?? .3);
  const cabZ = type === 'sports' || type === 'super' || type === 'race' ? -len * .04
    : type === 'wagon' ? -len * .09
    : type === 'limo' ? -len * .02
    : -len * .06;
  const glassCab = addMesh(group, roundedBox(cabW, cabH, cabLen, .09), glassMat, 0, y0 + bodyH / 2 + cabH / 2, cabZ);
  glassCab.userData.panel = true;
  const roof = addMesh(group, roundedBox(cabW * .94, .12, cabLen * .86, .06), bodyMat, 0, y0 + bodyH / 2 + cabH - .02, cabZ - .05);
  // pillars
  for (const s of [-1, 1]) {
    addMesh(group, box(.06, cabH, .08), bodyMat, s * cabW / 2, y0 + bodyH / 2 + cabH / 2, cabZ + cabLen / 2, 0, 0, 0);
    addMesh(group, box(.06, cabH, .1), bodyMat, s * cabW / 2, y0 + bodyH / 2 + cabH / 2, cabZ - cabLen / 2);
  }
  // windshield slants (thin boxes)
  addMesh(group, box(cabW * .86, cabH * .8, .05), glassMat, 0, y0 + bodyH / 2 + cabH * .48, cabZ + cabLen / 2 + .01, -.32, 0, 0);
  addMesh(group, box(cabW * .84, cabH * .7, .05), glassMat, 0, y0 + bodyH / 2 + cabH * .46, cabZ - cabLen / 2 - .01, .3, 0, 0);
  // bumpers
  addMesh(group, box(wid * .98, .18, .18), trimMat, 0, y0 - bodyH * .2, len / 2 - .02);
  addMesh(group, box(wid * .98, .18, .18), trimMat, 0, y0 - bodyH * .2, -len / 2 + .02);
  // grille
  addMesh(group, box(wid * .5, .16, .05), trimMat, 0, y0 - .02, len / 2 + .02);
  // headlights
  const hlY = y0 + bodyH * .18;
  const headL = addHeadlightRig(group, -wid * .32, hlY, len / 2 + .02, .34, .13, { beamLength: 8, beamWidth: 1.1 });
  const headR = addHeadlightRig(group, wid * .32, hlY, len / 2 + .02, .34, .13, { beamLength: 8, beamWidth: 1.1 });
  const brakeL = addLight(group, 0x5a0b0b, -wid * .33, hlY, -len / 2 - .02, .36, .12, .05, { kind: 'brake' });
  const brakeR = addLight(group, 0x5a0b0b, wid * .33, hlY, -len / 2 - .02, .36, .12, .05, { kind: 'brake' });
  const turnL = addLight(group, 0x4a2c05, -wid * .45, hlY, len / 2 + .02, .1, .1, .05, { kind: 'turn' });
  const turnR = addLight(group, 0x4a2c05, wid * .45, hlY, len / 2 + .02, .1, .1, .05, { kind: 'turn' });
  // mirrors
  for (const s of [-1, 1]) addMesh(group, box(.16, .1, .12), bodyMat, s * (wid / 2 + .09), y0 + bodyH * .55, cabZ + cabLen * .35);
  // side skirts
  for (const s of [-1, 1]) addMesh(group, box(.06, .14, len * .55), trimMat, s * (wid / 2 + .01), cfg.wheelR + .1, 0);
  addWheelArch(group, cfg, null);
  addBadge(group, 0, y0 + bodyH * .25, -len / 2 - .015);

  if (isTaxi) {
    addMesh(group, box(.7, .22, .3), new THREE.MeshBasicMaterial({ color: 0xffcf5a }), 0, y0 + bodyH / 2 + cabH + .12, cabZ);
    for (const s of [-1, 1]) addMesh(group, box(.06, .1, len * .8), trimMat, s * wid / 2, y0, 0);
  }
  if (isPolice) {
    addMesh(group, box(wid * .45, .13, .85), redMat, 0, y0 + bodyH / 2 + cabH + .1, cabZ);
    addMesh(group, box(wid * .45, .13, .85), new THREE.MeshStandardMaterial({ color: 0x1a2e58, roughness: .4, metalness: .5 }), 0, y0 + bodyH / 2 + cabH + .1, cabZ);
    addMesh(group, box(wid * .5, .22, .16), trimMat, 0, y0 - .05, len / 2 + .1);
  }
  if (type === 'sports' || type === 'super' || type === 'race') {
    // rear wing
    const wingY = type === 'race' ? y0 + bodyH * .9 : y0 + bodyH * .75;
    addMesh(group, box(wid * (type === 'race' ? .94 : .8), .05, .32), trimMat, 0, wingY, -len / 2 + .18);
    for (const s of [-1, 1]) addMesh(group, box(.06, type === 'race' ? .42 : .3, .08), trimMat, s * wid * .3, wingY - .16, -len / 2 + .18);
    addMesh(group, box(wid * .95, .06, .34), trimMat, 0, y0 - bodyH * .42, len / 2 - .2);
    if (type === 'race') {
      addMesh(group, box(wid * 1.02, .05, .5), trimMat, 0, y0 - bodyH * .48, len / 2 - .04);
      for (const s of [-1, 1]) addMesh(group, box(.04, .22, .45), trimMat, s * wid * .5, y0 - bodyH * .36, len / 2 - .08);
      addMesh(group, box(wid * .62, .18, .1), new THREE.MeshStandardMaterial({ color: 0x15181c, roughness: .8 }), 0, y0 + bodyH * .12, len / 2 + .035);
    }
  }
  if (type === 'muscle') {
    addMesh(group, box(wid * .5, .18, .72), trimMat, 0, y0 + bodyH * .58, len * .28);
    addMesh(group, box(.08, .08, len * .55), bodyMat, -wid * .34, y0 + bodyH * .4, -len * .04);
    addMesh(group, box(.08, .08, len * .55), bodyMat, wid * .34, y0 + bodyH * .4, -len * .04);
  }
  if (type === 'hatchback') {
    addMesh(group, box(wid * .9, .1, len * .28), bodyMat, 0, y0 + bodyH * .52, -len * .34, -.22, 0, 0);
    addMesh(group, box(wid * .72, .28, .08), glassMat, 0, y0 + bodyH * .58, -len * .45, -.45, 0, 0);
  }
  if (type === 'wagon') {
    addMesh(group, box(wid * .9, .08, len * .34), trimMat, 0, y0 + bodyH / 2 + cabH + .12, cabZ - len * .26);
    for (const s of [-1, 1]) addMesh(group, box(.05, .05, len * .3), trimMat, s * wid * .38, y0 + bodyH / 2 + cabH + .2, cabZ - len * .26);
  }
  if (type === 'limo') {
    for (let i = 0; i < 3; i++) {
      addMesh(group, box(.03, cabH * .72, .06), bodyMat, wid * .41, y0 + bodyH / 2 + cabH * .48, cabZ - cabLen * .3 + i * cabLen * .3);
      addMesh(group, box(.03, cabH * .72, .06), bodyMat, -wid * .41, y0 + bodyH / 2 + cabH * .48, cabZ - cabLen * .3 + i * cabLen * .3);
    }
    addMesh(group, box(.06, cabH * .5, .06), trimMat, 0, y0 + bodyH / 2 + cabH * .4, cabZ + cabLen * .12);
  }
  if (type === 'coupe') {
    addMesh(group, box(wid * .82, .06, .38), trimMat, 0, y0 + bodyH * .63, -len / 2 + .2);
    addMesh(group, box(wid * .74, .08, .9), bodyMat, 0, y0 + bodyH * .56, -len * .3, -.1, 0, 0);
  }
  if (type === 'suv' || type === 'pickup') {
    for (const s of [-1, 1]) addMesh(group, box(.05, .06, len * .4), trimMat, s * wid * .3, y0 + bodyH / 2 + cabH + .15, cabZ - len * .05);
    if (type === 'suv') {
      addMesh(group, box(wid * .5, .12, len * .5), trimMat, 0, y0 + bodyH / 2 + cabH + .22, cabZ - len * .05);
    }
  }
  if (type === 'pickup') {
    addMesh(group, box(wid * .92, .14, len * .38), bodyMat, 0, y0 + bodyH * .55, -len * .28);
    addMesh(group, box(wid * .8, .4, len * .34), trimMat, 0, y0 + bodyH * .35, -len * .28);
  }

  const wheels = makeWheels(group, cfg, 2, 2);
  const headMats = [headL.material, headR.material];
  const brakeMats = [brakeL.material, brakeR.material];
  return { group, wheels, bodyMat, headMats, brakeMats, turnMats: [turnL.material, turnR.material], cfg, type };
}

function buildBus(color, type = 'bus') {
  const cfg = VEHICLE_TYPES[type];
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: .4, metalness: .35 });
  const len = cfg.len, wid = cfg.wid;
  const bodyH = cfg.height * .78;
  const y0 = cfg.wheelR + bodyH / 2 + .08;
  addMesh(group, roundedBox(wid * .98, bodyH, len * .98, .16, 2), bodyMat, 0, y0, 0);
  addMesh(group, box(wid * 1.0, .3, len * .99), trimMat, 0, cfg.wheelR + .25, 0);
  addMesh(group, box(wid * .96, .18, len * .99), silverMat, 0, y0 + bodyH * .2, 0);
  // window strips
  addMesh(group, box(wid * 1.006, bodyH * .32, len * .82), glassMat, 0, y0 + bodyH * .22, 0);
  addMesh(group, box(wid * 1.007, bodyH * .34, len * .28), glassMat, 0, y0 + bodyH * .2, -len * .34);
  // windshield
  addMesh(group, box(wid * .9, bodyH * .48, .06), glassMat, 0, y0 + bodyH * .2, len * .5);
  // roof units
  addMesh(group, box(wid * .55, .28, len * .25), silverMat, 0, y0 + bodyH / 2 + .14, 0);
  // doors
  for (const z of [len * .34, -len * .2]) {
    addMesh(group, box(.06, bodyH * .62, 1.1), darkGlass, wid / 2 + .005, y0 - .1, z);
  }
  // destination board
  addLight(group, 0xffb347, 0, y0 + bodyH * .38, len / 2 + .035, 2.4, .34, .04, { kind: 'sign' });
  // lights
  const headL = addHeadlightRig(group, -wid * .34, cfg.wheelR + .55, len / 2 + .03, .38, .2, { beamLength: 9, beamWidth: 1.25 });
  const headR = addHeadlightRig(group, wid * .34, cfg.wheelR + .55, len / 2 + .03, .38, .2, { beamLength: 9, beamWidth: 1.25 });
  const brakeL = addLight(group, 0x5a0b0b, -wid * .34, cfg.wheelR + .6, -len / 2 - .03, .3, .4, .05, { kind: 'brake' });
  const brakeR = addLight(group, 0x5a0b0b, wid * .34, cfg.wheelR + .6, -len / 2 - .03, .3, .4, .05, { kind: 'brake' });
  const wheels = makeWheels(group, cfg, 2, 4);
  return { group, wheels, bodyMat, headMats: [headL.material, headR.material], brakeMats: [brakeL.material, brakeR.material], turnMats: [], cfg, type };
}

function buildTruck(type, color, opts = {}) {
  const cfg = VEHICLE_TYPES[type];
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: .45, metalness: .4 });
  const len = cfg.len, wid = cfg.wid;
  const wheelR = cfg.wheelR;
  const cabLen = len * (type === 'construction' ? .28 : .25);
  const cabZ = len / 2 - cabLen / 2 - .2;
  const cabH = cfg.height * .58;
  // chassis
  addMesh(group, box(wid * .8, .3, len * .92), trimMat, 0, wheelR + .2, 0);
  // cab
  addMesh(group, box(wid * .96, cabH, cabLen), bodyMat, 0, wheelR + cabH / 2 + .3, cabZ);
  addMesh(group, box(wid * .88, cabH * .55, cabLen * .96), glassMat, 0, wheelR + cabH * .62, cabZ);
  addMesh(group, box(wid * .92, .22, cabLen), bodyMat, 0, wheelR + cabH + .35, cabZ);
  // rear body
  if (type === 'truck') {
    addMesh(group, box(wid, cfg.height * .8, len * .62), whiteMat, 0, wheelR + cfg.height * .4 + .25, -len * .16);
    addMesh(group, box(wid * 1.004, cfg.height * .1, len * .62), bodyMat, 0, wheelR + cfg.height * .3, -len * .16);
    // container ribs
    for (let i = -5; i <= 5; i++) addMesh(group, box(wid * 1.006, cfg.height * .78, .05), silverMat, 0, wheelR + cfg.height * .4 + .25, -len * .16 + i * len * .05);
  } else if (type === 'construction') {
    const bed = addMesh(group, box(wid, .9, len * .55), bodyMat, 0, wheelR + 1.0, -len * .2);
    const load = addMesh(group, box(wid * .92, .5, len * .5), new THREE.MeshStandardMaterial({ color: 0x5d5a4a, roughness: 1 }), 0, wheelR + 1.6, -len * .2);
    addMesh(group, box(wid * .8, .4, len * .1), yellowMat, 0, wheelR + 1.8, -len * .48);
    for (const s of [-1, 1]) for (const z of [-len * .05, -len * .4]) addMesh(group, box(.12, .9, .12), trimMat, s * wid * .4, wheelR + 2, z);
  } else if (type === 'fire') {
    const bodyH2 = cfg.height * .8;
    addMesh(group, box(wid, bodyH2, len * .72), redMat, 0, wheelR + bodyH2 / 2 + .25, -len * .12);
    addMesh(group, box(wid * 1.002, bodyH2 * .18, len * .72), whiteMat, 0, wheelR + bodyH2 * .62, -len * .12);
    // ladder
    const ladder = new THREE.Group();
    for (const s of [-1, 1]) addMesh(ladder, box(.1, .1, len * .75), silverMat, s * .5, 0, 0);
    for (let i = -6; i <= 6; i++) addMesh(ladder, box(1.1, .06, .06), silverMat, 0, 0, i * len * .055);
    ladder.position.set(0, wheelR + bodyH2 + .5, -len * .05);
    group.add(ladder);
    addMesh(group, box(1.6, .3, .16), trimMat, 0, wheelR + cabH + .5, cabZ + cabLen / 2);
    for (let i = 0; i < 3; i++) addMesh(group, box(.5, .5, .16), silverMat, -1 + i, wheelR + cabH + .5, cabZ + cabLen / 2 + .2);
  } else if (type === 'ambulance') {
    const bodyH2 = cfg.height * .8;
    addMesh(group, box(wid, bodyH2, len * .7), whiteMat, 0, wheelR + bodyH2 / 2 + .25, -len * .13);
    addMesh(group, box(wid * 1.004, .35, len * .7), redMat, 0, wheelR + bodyH2 * .4, -len * .13);
    for (const s of [-1, 1]) addMesh(group, box(wid * 1.005, .5, .06), redMat, 0, wheelR + bodyH2 * .72, -len * .13 + s * len * .18);
    addMesh(group, box(wid * .86, .5, len * .72), glassMat, 0, wheelR + bodyH2 * .85, -len * .13);
  } else if (type === 'army') {
    const bodyH2 = cfg.height * .62;
    const canvasMat = new THREE.MeshStandardMaterial({ color: 0x59613f, roughness: .95 });
    addMesh(group, box(wid, bodyH2, len * .64), bodyMat, 0, wheelR + bodyH2 / 2 + .3, -len * .16);
    const canvas = new THREE.Mesh(new THREE.CylinderGeometry(wid * .5, wid * .5, len * .6, 10, 1, false, 0, Math.PI), canvasMat);
    canvas.rotation.z = Math.PI / 2; canvas.rotation.y = Math.PI / 2;
    canvas.position.set(0, wheelR + bodyH2 + .3, -len * .16); group.add(canvas);
    for (let i = -3; i <= 3; i++) addMesh(group, box(wid * 1.01, .06, .05), trimMat, 0, wheelR + bodyH2 * 1.08 + .3, -len * .16 + i * len * .08);
    addMesh(group, box(wid * .9, .22, len * .5), trimMat, 0, wheelR + .3, -len * .16);
    addMesh(group, box(.5, .4, .5), new THREE.MeshStandardMaterial({ color: 0x2f3527, roughness: .9 }), wid * .32, wheelR + bodyH2 + .5, -len * .04);
  }
  // wheels: front 2, rear 4
  const wheels = makeWheels(group, cfg, 2, 4);
  const headL = addHeadlightRig(group, -wid * .33, wheelR + .6, len / 2 + .03, .4, .2, { beamLength: 9, beamWidth: 1.35 });
  const headR = addHeadlightRig(group, wid * .33, wheelR + .6, len / 2 + .03, .4, .2, { beamLength: 9, beamWidth: 1.35 });
  const brakeL = addLight(group, 0x5a0b0b, -wid * .38, wheelR + .6, -len / 2 - .02, .25, .3, .05, { kind: 'brake' });
  const brakeR = addLight(group, 0x5a0b0b, wid * .38, wheelR + .6, -len / 2 - .02, .25, .3, .05, { kind: 'brake' });
  if (type === 'fire' || type === 'ambulance') {
    addMesh(group, box(wid * .6, .16, .4), redMat, 0, wheelR + cabH + .52, cabZ);
    addMesh(group, box(wid * .3, .16, .4), new THREE.MeshBasicMaterial({ color: 0x1b5cff, toneMapped: false }), -wid * .15, wheelR + cabH + .52, cabZ);
  }
  return { group, wheels, bodyMat, headMats: [headL.material, headR.material], brakeMats: [brakeL.material, brakeR.material], turnMats: [], cfg, type };
}

function buildTank(color = 0x4b5638) {
  const cfg = VEHICLE_TYPES.tank;
  const group = new THREE.Group();
  const armor = new THREE.MeshStandardMaterial({ color, roughness: .82, metalness: .22 });
  const armorDark = new THREE.MeshStandardMaterial({ color: 0x353d28, roughness: .9, metalness: .2 });
  const trackMat = new THREE.MeshStandardMaterial({ color: 0x1e211c, roughness: 1 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x17242a, roughness: .1, metalness: .6 });
  const wheels = [];
  const wid = cfg.wid;
  // hull
  addMesh(group, box(wid * .82, .95, cfg.len * .82), armor, 0, 1.05, 0);
  addMesh(group, box(wid * .88, 1.05, cfg.len * .66), armor, 0, 1.72, -.35);
  addMesh(group, box(wid * .8, .55, 2.2), armor, 0, 1.42, cfg.len * .34, .42, 0, 0);
  addMesh(group, box(wid * .7, .32, 1.4), armorDark, 0, 2.16, -.6);
  // tracks and road wheels
  for (const s of [-1, 1]) {
    const tr = addMesh(group, box(1.28, 1.55, cfg.len * .98), trackMat, s * wid * .4, .78, 0);
    tr.castShadow = true;
    for (let z = -cfg.len * .42; z <= cfg.len * .42; z += 1.15) {
      const wh = addMesh(group, wheelGeo(.46, 1.3), trackMat, s * wid * .4, .5, z);
      wh.rotation.z = Math.PI / 2;
      wheels.push({ mesh: wh, front: false, side: s });
    }
    for (let i = 0; i < 7; i++) {
      addMesh(group, box(1.34, .16, 1.0), armorDark, s * wid * .4, 1.62, -cfg.len * .41 + i * cfg.len * .137);
    }
  }
  // turret with independently rotating gun
  const turret = new THREE.Group();
  turret.position.set(0, 2.38, -.45);
  addMesh(turret, new THREE.CylinderGeometry(1.5, 1.66, .92, 10), armor, 0, .2, 0);
  addMesh(turret, new THREE.CylinderGeometry(1.28, 1.4, .32, 10), armorDark, 0, .8, 0);
  addMesh(turret, box(.9, .5, 1.2), armor, 0, .18, 1.15);
  const barrel = addMesh(turret, new THREE.CylinderGeometry(.12, .17, 5.4, 10), armorDark, 0, .26, 3.55);
  barrel.rotation.x = Math.PI / 2;
  addMesh(turret, new THREE.CylinderGeometry(.22, .22, .5, 10), armorDark, 0, .26, 6.2).rotation.x = Math.PI / 2;
  addMesh(turret, box(.18, .14, 1.2), armorDark, .75, .5, .1);
  addMesh(turret, box(.72, .16, .72), armorDark, -.45, .82, -.25);
  const hatch = addMesh(turret, new THREE.CylinderGeometry(.42, .42, .16, 10), armorDark, -.45, .9, -.25);
  hatch.rotation.x = 0;
  addMesh(turret, box(1.1, .2, .3), armorDark, 0, .2, -1.55);
  group.add(turret);
  // lights and sensors
  const headL = addHeadlightRig(group, -wid * .3, 1.25, cfg.len * .44, .3, .18, { beamLength: 10, beamWidth: 1.5 });
  const headR = addHeadlightRig(group, wid * .3, 1.25, cfg.len * .44, .3, .18, { beamLength: 10, beamWidth: 1.5 });
  const brakeL = addLight(group, 0x5a0b0b, -wid * .32, 1.4, -cfg.len * .44, .3, .16, .05, { kind: 'brake' });
  const brakeR = addLight(group, 0x5a0b0b, wid * .32, 1.4, -cfg.len * .44, .3, .16, .05, { kind: 'brake' });
  addMesh(group, box(.45, .28, .2), glass, .6, 1.95, cfg.len * .32);
  addMesh(group, box(.8, .18, .18), armorDark, 0, 1.2, cfg.len * .47);
  return { group, wheels, bodyMat: armor, headMats: [headL.material, headR.material], brakeMats: [brakeL.material, brakeR.material], turnMats: [], turret, cfg, type: 'tank' };
}

function buildMotorcycle(color) {
  const cfg = VEHICLE_TYPES.motorcycle;
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: .35, metalness: .6 });
  addMesh(group, box(.34, .3, 1.1), bodyMat, 0, .75, 0);
  addMesh(group, box(.3, .18, .45), seatMat, 0, .96, -.2);
  addMesh(group, box(.24, .12, .5), bodyMat, 0, 1.02, .38);
  addMesh(group, box(.7, .06, .06), trimMat, 0, 1.12, .32);
  const wheel1 = addMesh(group, wheelGeo(.32, .14), tireMat, 0, .32, .78);
  const wheel2 = addMesh(group, wheelGeo(.32, .14), tireMat, 0, .32, -.72);
  const rim1 = new THREE.Mesh(rimGeo(.32, .14), rimMat); wheel1.add(rim1);
  const rim2 = new THREE.Mesh(rimGeo(.32, .14), rimMat); wheel2.add(rim2);
  // fork
  for (const s of [-1, 1]) addMesh(group, box(.05, .75, .05), silverMat, s * .08, .65, .72, .25, 0, 0);
  const head = addHeadlightRig(group, 0, .95, .6, .22, .16, { beamLength: 7, beamWidth: .75 });
  const brake = addLight(group, 0x5a0b0b, 0, .86, -.55, .16, .1, .05, { kind: 'brake' });
  const wheels = [{ mesh: wheel1, front: true, side: 1 }, { mesh: wheel2, front: false, side: 1 }];
  // rider
  const rider = new THREE.Group();
  addMesh(rider, box(.36, .5, .24), new THREE.MeshStandardMaterial({ color: 0x2e3942, roughness: .8 }), 0, 1.3, -.05);
  addMesh(rider, new THREE.SphereGeometry(.16, 10, 8), new THREE.MeshStandardMaterial({ color: 0x1d2227, roughness: .7 }), 0, 1.67, -.02);
  addMesh(rider, box(.1, .44, .1), new THREE.MeshStandardMaterial({ color: 0x2e3942, roughness: .8 }), -.25, 1.3, .18, -.5, 0, 0);
  addMesh(rider, box(.1, .44, .1), new THREE.MeshStandardMaterial({ color: 0x2e3942, roughness: .8 }), .25, 1.3, .18, -.5, 0, 0);
  rider.visible = false;
  group.add(rider);
  return { group, wheels, bodyMat, headMats: [head.material], brakeMats: [brake.material], rider, cfg, type: 'motorcycle' };
}

function buildBoat(color) {
  const cfg = VEHICLE_TYPES.boat;
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: .3, metalness: .3 });
  const hullShape = new THREE.Shape();
  hullShape.moveTo(-1.1, -3.1); hullShape.lineTo(1.1, -3.1); hullShape.lineTo(1.1, 1.4);
  hullShape.quadraticCurveTo(1.0, 2.7, 0, 3.1); hullShape.quadraticCurveTo(-1.0, 2.7, -1.1, 1.4); hullShape.lineTo(-1.1, -3.1);
  const hullGeo = new THREE.ExtrudeGeometry(hullShape, { depth: .8, bevelEnabled: true, bevelSize: .12, bevelThickness: .12, bevelSegments: 2 });
  hullGeo.rotateX(Math.PI / 2);
  const hull = new THREE.Mesh(hullGeo, bodyMat);
  hull.position.y = .9; hull.castShadow = true; group.add(hull);
  const deck = addMesh(group, box(1.8, .08, 4.8), new THREE.MeshStandardMaterial({ color: 0x9a8c74, roughness: .9 }), 0, 1.05, -.3);
  const stripe = addMesh(group, box(2.2, .12, 5.8), new THREE.MeshStandardMaterial({ color: 0x1a6a8a, roughness: .4 }), 0, .72, 0);
  // windshield
  addMesh(group, box(1.5, .5, .06), glassMat, 0, 1.45, .7, -.25, 0, 0);
  addMesh(group, box(1.4, .4, .06), glassMat, 0, 1.4, -.9, .2, 0, 0);
  // seats
  for (let i = 0; i < 2; i++) addMesh(group, box(.55, .18, .5), seatMat, -0.45 + i * .9, 1.28, -1.2);
  // console
  addMesh(group, box(1.0, .3, .5), trimMat, 0, 1.35, .6);
  addMesh(group, box(.4, .1, .35), new THREE.MeshBasicMaterial({ color: 0x67d8ff, toneMapped: false }), 0, 1.52, .6);
  // motor
  addMesh(group, box(.4, .65, .7), trimMat, 0, .8, -3.25);
  addLight(group, 0xcfeaff, 0, 1.0, 3.02, .3, .12, .08);
  addLight(group, 0x5a0b0b, 0, 1.0, -3.02, .3, .12, .08, { kind: 'brake' });
  // rails
  for (const s of [-1, 1]) addMesh(group, box(.04, .25, 3.2), silverMat, s * 1.05, 1.28, -.6);
  return { group, wheels: [], bodyMat, headMats: [], brakeMats: [], cfg, type: 'boat' };
}

function buildHelicopter(color) {
  const cfg = VEHICLE_TYPES.helicopter;
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color, roughness: .3, metalness: .45 });
  const fusGeo = new THREE.SphereGeometry(1.05, 18, 14);
  const fus = new THREE.Mesh(fusGeo, bodyMat);
  fus.scale.set(1.0, 1.0, 1.9); fus.position.y = 1.65;
  fus.castShadow = true; group.add(fus);
  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(.92, 16, 12), glassMat);
  cockpit.scale.set(.98, .8, 1.0); cockpit.position.set(0, 1.75, 1.0); group.add(cockpit);
  const tail = addMesh(group, box(.28, .28, 2.9), bodyMat, 0, 1.75, -2.1);
  const fin = addMesh(group, box(.1, .8, .6), bodyMat, 0, 2.2, -3.4);
  const skidMat = new THREE.MeshStandardMaterial({ color: 0x3a4045, roughness: .6, metalness: .5 });
  for (const s of [-1, 1]) {
    addMesh(group, box(.1, .1, 3.0), skidMat, s * .85, .28, 0);
    addMesh(group, box(.1, .7, .1), skidMat, s * .7, .62, .7, 0, 0, -.25);
    addMesh(group, box(.1, .7, .1), skidMat, s * .7, .62, -.7, 0, 0, .25);
  }
  // rotor
  const rotor = new THREE.Group(); rotor.position.set(0, 2.6, 0);
  addMesh(rotor, box(.18, .12, 5.4), trimMat, 0, 0, 0, 0, 0, 0);
  addMesh(rotor, box(5.4, .06, .18), trimMat, 0, 0, 0);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(.14, .14, .4, 8), rimMat); hub.position.y = .1; rotor.add(hub);
  group.add(rotor);
  const tailRotor = new THREE.Group(); tailRotor.position.set(.25, 2.1, -3.45);
  addMesh(tailRotor, box(.06, 1.4, .16), trimMat, 0, 0, 0);
  addMesh(tailRotor, box(.06, .16, 1.4), trimMat, 0, 0, 0);
  group.add(tailRotor);
  // lights
  addLight(group, 0xf2f6e9, -.65, 1.3, 1.65, .18, .18, .08);
  addLight(group, 0xf2f6e9, .65, 1.3, 1.65, .18, .18, .08);
  const red = addLight(group, 0xff2020, 0, 2.2, -2.8, .12, .12, .12);
  const green = addLight(group, 0x20ff40, -1.05, 1.5, -.8, .1, .1, .1);
  // interior seats
  addMesh(group, box(.5, .3, .5), seatMat, -.35, 1.5, .2);
  addMesh(group, box(.5, .3, .5), seatMat, .35, 1.5, .2);
  return { group, wheels: [], bodyMat, headMats: [], brakeMats: [], rotor, tailRotor, cfg, type: 'helicopter' };
}

function optimizeModelMeshes(v) {
  const group = v.group;
  group.updateMatrixWorld(true);
  const keep = new Set();
  const mark = (obj) => { if (obj?.traverse) obj.traverse(o => keep.add(o)); };
  for (const w of v.wheels || []) mark(w.mesh);
  mark(v.rider);
  mark(v.turret);
  mark(v.rotor);
  mark(v.tailRotor);
  const dynamicObjects = new Set();
  for (const m of v.headMats || []) {
    if (m?.userData?.beam) dynamicObjects.add(m.userData.beam);
    if (m?.userData?.spot) dynamicObjects.add(m.userData.spot);
  }
  for (const o of dynamicObjects) mark(o);
  mark(v.headLightTarget);
  const dynamicMats = new Set([...(v.headMats || []), ...(v.brakeMats || []), ...(v.turnMats || [])]);
  if (dynamicMats.size) {
    group.traverse((o) => { if (o.isMesh && dynamicMats.has(o.material)) keep.add(o); });
  }
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  const buckets = new Map();
  group.traverse((o) => {
    if (!o.isMesh || keep.has(o) || Array.isArray(o.material)) return;
    const geo = o.geometry;
    if (!geo?.attributes?.position || !geo.attributes.normal) return;
    const key = o.material.uuid;
    let b = buckets.get(key);
    if (!b) { b = { material: o.material, geos: [], meshes: [], panel: false, shadow: false }; buckets.set(key, b); }
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    for (const name of Object.keys(g.attributes)) {
      if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
    }
    g.clearGroups();
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
    b.geos.push(g);
    b.meshes.push(o);
    b.panel = b.panel || !!o.userData.panel;
    b.shadow = b.shadow || o.castShadow;
  });
  for (const b of buckets.values()) {
    if (b.meshes.length < 2) {
      for (const g of b.geos) g.dispose();
      continue;
    }
    const merged = mergeGeometries(b.geos, false);
    if (!merged) { for (const g of b.geos) g.dispose(); continue; }
    const mesh = new THREE.Mesh(merged, b.material);
    mesh.castShadow = b.shadow;
    mesh.userData.panel = b.panel;
    group.add(mesh);
    for (const o of b.meshes) o.parent?.remove(o);
    for (const g of b.geos) g.dispose();
  }
}

export function buildVehicleModel(type, color, opts = {}) {
  let v;
  if (['bus'].includes(type)) v = buildBus(color);
  else if (['truck', 'construction', 'fire', 'ambulance', 'army'].includes(type)) v = buildTruck(type, color);
  else if (['tank', 'fastTank'].includes(type)) v = buildTank(color);
  else if (type === 'motorcycle') v = buildMotorcycle(color);
  else if (type === 'boat') v = buildBoat(color);
  else if (type === 'helicopter') v = buildHelicopter(color);
  else v = buildCarLike(type, color);
  optimizeModelMeshes(v);
  v.group.userData.vehicleType = type;
  v.group.userData.wheels = v.wheels;
  if (v.rider) v.group.userData.rider = v.rider;
  v.color = color;
  if (opts.traffic && v.rider) v.rider.visible = true;
  return v;
}

export function randomVehicleColor(type) {
  if (type === 'taxi') return 0xe8b52a;
  if (type === 'police') return 0xe8edf0;
  if (type === 'fire') return 0xb8242e;
  if (type === 'ambulance') return 0xe8ecee;
  if (type === 'construction') return 0xd6a51f;
  if (type === 'tank' || type === 'army') return pick([0x4b5638, 0x555f3c, 0x3f4a2f]);
  if (type === 'race') return pick([0xd9b23a, 0xb02a34, 0x2e6f9e, 0xe4e6e8, 0x252a30]);
  return pick(COLORS);
}

export function setLightState(headMats, brakeMats, turnMats, opts) {
  const { lightsOn = false, braking = false, left = false, right = false, hazard = false } = opts;
  for (const m of headMats) {
    m.color.setHex(lightsOn ? 0xfff6d8 : 0x4b4d46);
    const beam = m.userData?.beam;
    const spot = m.userData?.spot;
    if (beam) {
      beam.visible = lightsOn;
      beam.material.opacity = lightsOn ? 0.075 : 0;
    }
    if (spot) {
      spot.visible = lightsOn;
      spot.intensity = lightsOn ? 22 : 0;
    }
  }
  for (const m of brakeMats) m.color.setHex(braking ? 0xff2b2b : lightsOn ? 0x7a1010 : 0x3a0808);
  if (turnMats.length >= 2) {
    const l = left || hazard;
    const r = right || hazard;
    turnMats[0].color.setHex(l ? 0xffb020 : 0x3a2a08);
    turnMats[1].color.setHex(r ? 0xffb020 : 0x3a2a08);
  }
}
