import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  mulberry32, fbm, noise2, clamp, lerp, TAU,
  makeNoiseTexture, makeWoodTexture, makeSoftPuff,
} from './util.js';
import {
  toonMat, PALETTE, addBox, addCyl, addSphere, addCone, addTorus, buildNissenHut, buildTent, buildHangar,
  buildWindsock, buildFlag, buildBunker, buildTruck, buildCrateStack, buildFieldGun,
  buildMarkI, buildPlane, buildParachute,
} from './models.js';

export const WORLD = {
  minX: -640, maxX: 640, minZ: -320, maxZ: 320,
  width: 1280, depth: 640,
  frontZ: 58,
  spawn: { x: -30, z: -54 },
  tankSpawn: { x: -205, z: -96 },
  planeSpawn: { x: -372, z: -112 },
  enemyPlaneSpawn: { x: 352, z: 118 },
  aerodrome: { x: -380, z: -112, hx: 120, hz: 34 },
};

export const BRITISH = -1;
export const GERMAN = 1;

/* ------------------------------------------------------------------ *
 *  Terrain shaping
 * ------------------------------------------------------------------ */
export function trenchZ(x, side) {
  return side * (WORLD.frontZ + 3.1 * Math.sin(x * 0.041 + side * 0.8) + 1.5 * Math.sin(x * 0.011 + 2.1));
}
export function trenchWidth(x) { return 2.45 + 0.35 * Math.sin(x * 0.09); }

const CRATERS = [];
{
  const rng = mulberry32(1916);
  for (let i = 0; i < 165; i++) {
    const x = -620 + rng() * 1240;
    const z = (rng() - 0.5) * 150;
    const r = 2.2 + rng() * 7.5;
    CRATERS.push({ x, z, r, depth: 0.7 + rng() * 2.4, water: rng() < 0.32 });
  }
  // a few big mine craters
  for (let i = 0; i < 6; i++) {
    CRATERS.push({ x: -400 + rng() * 800, z: (rng() - 0.5) * 80, r: 9 + rng() * 7, depth: 3.2 + rng() * 1.5, water: true });
  }
}
export { CRATERS };

function rectMask(x, z, cx, cz, hx, hz, feather) {
  const dx = Math.max(0, Math.abs(x - cx) - hx);
  const dz = Math.max(0, Math.abs(z - cz) - hz);
  const d = Math.sqrt(dx * dx + dz * dz);
  return 1 - clamp(d / feather, 0, 1);
}

function craterHeight(x, z) {
  let dh = 0;
  for (let i = 0; i < CRATERS.length; i++) {
    const c = CRATERS[i];
    const dx = x - c.x, dz = z - c.z;
    if (Math.abs(dx) > c.r * 1.5 || Math.abs(dz) > c.r * 1.5) continue;
    const d2 = dx * dx + dz * dz;
    if (d2 > c.r * c.r * 1.9) continue;
    const d = Math.sqrt(d2) / c.r;
    if (d < 1) dh -= c.depth * (1 - d * d) * (1 - d * d);
    else dh += c.depth * 0.16 * Math.exp(-(d - 1) * 3.2);
  }
  return dh;
}

function baseHeight(x, z) {
  let h = 1.9 * (fbm(x * 0.0052 + 11.3, z * 0.0052 + 7.1, 3) - 0.5)
    + 0.75 * (fbm(x * 0.021 + 3.7, z * 0.021 + 9.4, 3) - 0.5)
    + 0.22 * (fbm(x * 0.08, z * 0.08, 2) - 0.5);
  // British rear slopes up gently, German rear too
  h += 0.55 * Math.min(1, Math.max(0, (Math.abs(z) - 70) / 130));
  return h;
}

function channelCarve(x, z) {
  // returns depth and parapet for trench / communication trenches
  let depth = 0, parapet = 0;
  for (const side of [-1, 1]) {
    const cz = trenchZ(x, side);
    const w = trenchWidth(x);
    const d = Math.abs(z - cz);
    if (d < w + 2.4) {
      if (d < w) {
        const f = 1 - Math.pow(clamp((d - (w - 0.85)) / 0.85, 0, 1), 2);
        const step = clamp((d - (w - 1.9)) / 0.9, 0, 1) * (1 - 0.65 * clamp((d - (w - 0.2)) / 0.5, 0, 1));
        depth = Math.max(depth, Math.max(0, 2.55 * f - 1.78 * step));
      } else {
        parapet = Math.max(parapet, 0.5 * Math.exp(-Math.pow((d - w - 1.1) / 0.85, 2)));
      }
    }
  }
  // communication trenches
  for (const side of [-1, 1]) {
    for (const cx of [-420, -260, -80, 120, 300, 460]) {
      const xd = Math.abs(x - cx - 4 * Math.sin(z * 0.04 + side));
      if (xd < 2.0) {
        const zmin = side > 0 ? WORLD.frontZ - 4 : -205;
        const zmax = side > 0 ? 205 : -WORLD.frontZ + 4;
        const inside = side > 0 ? (z > zmin && z < zmax) : (z < zmax && z > zmin);
        if (inside) {
          const f = 1 - Math.pow(clamp((xd - 0.55) / 1.4, 0, 1), 2);
          depth = Math.max(depth, 1.85 * f);
        }
      }
    }
  }
  return { depth, parapet };
}

export function heightAt(x, z) {
  let h = baseHeight(x, z) + craterHeight(x, z);
  // flatten aerodrome
  const am = rectMask(x, z, WORLD.aerodrome.x, WORLD.aerodrome.z, WORLD.aerodrome.hx, WORLD.aerodrome.hz, 26);
  if (am > 0) h = lerp(h, 1.15 + 0.06 * noise2(x * 0.1, z * 0.1), am * 0.96);
  const { depth, parapet } = channelCarve(x, z);
  h += -depth + parapet;
  return h;
}

export function trenchDepthAt(x, z) {
  return channelCarve(x, z).depth;
}
export function inTrench(x, z, pad = 0) {
  return trenchDepthAt(x, z) > 0.4 + pad;
}
export function isNoMansLand(x, z) { return Math.abs(z) < 46; }

/* ------------------------------------------------------------------ *
 *  World builder
 * ------------------------------------------------------------------ */
export class World {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.group = new THREE.Group();
    this.group.name = 'world';
    scene.add(this.group);
    this.colliders = [];
    this.smokeSources = [];
    this.campfires = [];
    this.flags = [];
    this.animateProps = [];
    this.rng = mulberry32(777);
    this.interact = {};

    this.setupSky();
    this.setupLights();
    this.buildTerrain();
    this.buildTrenches();
    this.buildBarbedWire();
    this.buildCraters();
    this.buildVegetation();
    this.buildBritishBase();
    this.buildGermanBase();
    this.buildAerodrome();
    this.buildTankPark();
    this.buildMGSites();
    this.buildDistantLand();
  }

  /* ---------------- sky / lights ---------------- */
  setupSky() {
    // Sky + clouds live on a rig that follows the camera so the dome is never
    // clipped by the far plane (which otherwise punches a hole in the sky).
    const skyRig = new THREE.Group();
    skyRig.frustumCulled = false;
    this.group.add(skyRig);
    this.skyRig = skyRig;
    const geo = new THREE.SphereGeometry(1100, 32, 16);
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: {
        top: { value: new THREE.Color(0x6f8ba6) },
        mid: { value: new THREE.Color(0xc9c1a4) },
        bottom: { value: new THREE.Color(0xd8c9a3) },
        sunDir: { value: new THREE.Vector3(-0.55, 0.36, 0.5).normalize() },
      },
      vertexShader: `
        varying vec3 vDir;
        void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
      `,
      fragmentShader: `
        varying vec3 vDir;
        uniform vec3 top, mid, bottom, sunDir;
        void main(){
          float h = clamp(vDir.y*1.15, -0.1, 1.0);
          vec3 col = mix(bottom, mid, smoothstep(-0.02, 0.22, h));
          col = mix(col, top, smoothstep(0.2, 0.85, h));
          float sun = pow(max(dot(vDir, sunDir), 0.0), 22.0);
          float glow = pow(max(dot(vDir, sunDir), 0.0), 4.0);
          col += vec3(1.0,0.72,0.38) * sun * 1.35 + vec3(0.55,0.35,0.16) * glow * 0.22;
          // banded cloud haze
          float band = sin(vDir.y*22.0 + vDir.x*4.0)*0.5+0.5;
          col = mix(col, vec3(0.86,0.82,0.72), band*0.035*smoothstep(0.05,0.5,h));
          gl_FragColor = vec4(col,1.0);
        }
      `,
    });
    const sky = new THREE.Mesh(geo, mat);
    sky.frustumCulled = false;
    skyRig.add(sky);
    this.sky = sky;

    // cloud billboards
    const puff = makeSoftPuff('rgba(255,250,238,0.85)', 'rgba(255,250,238,0)', 128);
    const cloudMat = new THREE.SpriteMaterial({ map: puff, transparent: true, depthWrite: false, opacity: 0.65, fog: false });
    const rng = mulberry32(99);
    this.clouds = [];
    for (let i = 0; i < 26; i++) {
      const s = new THREE.Sprite(cloudMat.clone());
      const scale = 55 + rng() * 130;
      s.scale.set(scale * (1.4 + rng()), scale * 0.5, 1);
      s.position.set((rng() - 0.5) * 1500, 110 + rng() * 100, (rng() - 0.5) * 1400);
      s.material.opacity = 0.18 + rng() * 0.3;
      skyRig.add(s);
      this.clouds.push(s);
    }

    this.scene.fog = new THREE.FogExp2(0xbfb69b, 0.00135);
  }

  setupLights() {
    const hemi = new THREE.HemisphereLight(0xb9c7d6, 0x4a3b28, 0.62);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffd9a0, 1.85);
    sun.position.set(-140, 120, 100);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 420;
    const s = 85;
    sun.shadow.camera.left = -s; sun.shadow.camera.right = s;
    sun.shadow.camera.top = s; sun.shadow.camera.bottom = -s;
    sun.shadow.bias = -0.0012;
    sun.shadow.normalBias = 0.035;
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;
    const fill = new THREE.DirectionalLight(0x8fa6bf, 0.45);
    fill.position.set(100, 60, -120);
    this.scene.add(fill);
  }

  /* ---------------- terrain ---------------- */
  buildTerrain() {
    const segX = 380, segZ = 200;
    const geo = new THREE.PlaneGeometry(WORLD.width, WORLD.depth, segX, segZ);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const cMud = new THREE.Color(0x6e5c42);
    const cMudDark = new THREE.Color(0x4d402d);
    const cMudLight = new THREE.Color(0x8a7554);
    const cGrass = new THREE.Color(0x5e6039);
    const cGrassDry = new THREE.Color(0x777245);
    const cAero = new THREE.Color(0x817a51);
    const tmp = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const y = heightAt(x, z);
      pos.setY(i, y);
      const n = noise2(x * 0.07, z * 0.07);
      const n2 = noise2(x * 0.23 + 4, z * 0.23 + 9);
      const depth = trenchDepthAt(x, z);
      let c;
      if (depth > 0.5) {
        c = tmp.copy(cMudDark).lerp(cMud, n * 0.6);
      } else if (Math.abs(z) < 62) {
        c = tmp.copy(cMud).lerp(n > 0.5 ? cMudLight : cMudDark, Math.abs(n - 0.5) * 1.4);
        c.lerp(cMudDark, clamp(1 - Math.abs(z) / 60, 0, 1) * 0.25);
      } else {
        c = tmp.copy(cGrass).lerp(cGrassDry, n);
        c.lerp(cMud, clamp((Math.abs(z) - 62) / -40 + 0.6, 0, 0.4));
      }
      const am = rectMask(x, z, WORLD.aerodrome.x, WORLD.aerodrome.z, WORLD.aerodrome.hx, WORLD.aerodrome.hz, 18);
      if (am > 0.2) c.lerp(cAero, am * 0.85);
      const shade = 0.86 + n2 * 0.26;
      colors[i * 3] = c.r * shade; colors[i * 3 + 1] = c.g * shade; colors[i * 3 + 2] = c.b * shade;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    const mudTex = makeNoiseTexture(256, '#9c8763', '#5c4a33', '#c0a97f', 5);
    mudTex.repeat.set(46, 23);
    const mat = toonMat(0xffffff, { map: mudTex, vertexColors: true });
    const terrain = new THREE.Mesh(geo, mat);
    terrain.receiveShadow = true;
    terrain.name = 'terrain';
    this.group.add(terrain);
    this.terrain = terrain;
  }

  /* ---------------- trenches ---------------- */
  buildTrenches() {
    const rng = mulberry32(4242);
    // low-poly lumpy bag: cheap enough for ~14k instances
    const sandbagGeo = new THREE.SphereGeometry(0.2, 6, 4);
    const sandMat = toonMat(0xb09a6b);
    const sandMat2 = toonMat(0x8f7a52);
    const bagCount = 11000;
    const bags = new THREE.InstancedMesh(sandbagGeo, sandMat, bagCount);
    bags.castShadow = true; bags.receiveShadow = true;
    const bags2 = new THREE.InstancedMesh(sandbagGeo, sandMat2, bagCount);
    bags2.castShadow = true; bags2.receiveShadow = true;
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const sc = new THREE.Vector3();
    let i1 = 0, i2 = 0;

    const plankGeo = new THREE.BoxGeometry(2.1, 0.055, 0.34);
    const duckMat = toonMat(PALETTE.wood);
    const ducks = new THREE.InstancedMesh(plankGeo, duckMat, 5600);
    ducks.receiveShadow = true;
    let di = 0;

    const revetGeo = new THREE.BoxGeometry(1.0, 1.55, 0.075);
    const revets = new THREE.InstancedMesh(revetGeo, toonMat(PALETTE.woodDark), 5600);
    revets.castShadow = true; revets.receiveShadow = true;
    let ri = 0;

    const postGeo = new THREE.BoxGeometry(0.09, 1.25, 0.09);
    const posts = new THREE.InstancedMesh(postGeo, toonMat(PALETTE.woodDark), 2200);
    posts.castShadow = true;
    let pi = 0;

    for (const side of [-1, 1]) {
      for (let x = -610; x <= 610; x += 0.66) {
        const cz = trenchZ(x, side);
        const w = trenchWidth(x);
        const floor = heightAt(x, cz);
        const top = floor + 2.45;
        // sandbag parapet on both lips
        for (const s of [-1, 1]) {
          for (let row = 0; row < 2; row++) {
            if (rng() < 0.06) continue;
            const bz = cz + s * (w + 0.22 + row * 0.26) + (rng() - 0.5) * 0.1;
            const by = heightAt(x, bz) + 0.06 + row * 0.23;
            q.setFromEuler(new THREE.Euler((rng() - 0.5) * 0.25, (rng() - 0.5) * 0.18, (rng() - 0.5) * 0.1));
            v.set(x + (rng() - 0.5) * 0.12, by, bz);
            sc.set(1.25 + rng() * 0.2, 0.72 + rng() * 0.14, 1.0);
            m4.compose(v, q, sc);
            if (rng() < 0.5) { if (i1 < bagCount) bags.setMatrixAt(i1++, m4); }
            else if (i2 < bagCount) bags2.setMatrixAt(i2++, m4);
          }
        }
        // duckboards
        if (di < 5600 && Math.abs(x) < 560) {
          q.setFromEuler(new THREE.Euler(0, (rng() - 0.5) * 0.05, 0));
          v.set(x, floor + 0.045, cz + (rng() - 0.5) * 0.08);
          sc.set(0.5 + rng() * 0.06, 1, 1);
          m4.compose(v, q, sc);
          ducks.setMatrixAt(di++, m4);
        }
        // revetment planks on both trench walls
        if (ri < 5600) {
          const s = rng() < 0.5 ? 1 : -1;
          q.setFromEuler(new THREE.Euler(0, (rng() - 0.5) * 0.1, (rng() - 0.5) * 0.05));
          v.set(x, floor + 0.82 + (rng() - 0.5) * 0.08, cz + s * (w - 0.05));
          sc.set(0.8, 0.92 + rng() * 0.16, 1);
          m4.compose(v, q, sc);
          revets.setMatrixAt(ri++, m4);
        }
        // occasional upright posts on the lip
        if (pi < 2200 && rng() < 0.18) {
          q.setFromEuler(new THREE.Euler((rng() - 0.5) * 0.2, 0, (rng() - 0.5) * 0.2));
          v.set(x, top + 0.55, cz + (rng() < 0.5 ? 1 : -1) * (w + 0.7));
          sc.set(1, 0.9 + rng() * 0.3, 1);
          m4.compose(v, q, sc);
          posts.setMatrixAt(pi++, m4);
        }
      }
    }
    bags.count = i1; bags2.count = i2; ducks.count = di; revets.count = ri; posts.count = pi;
    this.group.add(bags, bags2, ducks, revets, posts);
    this.sandbags = [bags, bags2];
    this.trenchDetails = [ducks, revets, posts];

    // ladders & dugout entrances along the trench
    const ladders = new THREE.Group();
    for (const side of [-1, 1]) {
      for (let x = -560; x <= 560; x += 76) {
        const cz = trenchZ(x, side), w = trenchWidth(x), floor = heightAt(x, cz);
        const lad = new THREE.Group();
        for (const s of [-1, 1]) addBox(lad, 0.06, 2.5, 0.06, PALETTE.woodDark, s * 0.3, 1.25, 0);
        for (let r = 0; r < 7; r++) addBox(lad, 0.66, 0.05, 0.05, PALETTE.wood, 0, 0.25 + r * 0.34, 0);
        lad.position.set(x, floor, cz + w - 0.2);
        ladders.add(lad);
      }
    }
    this.group.add(ladders);

    // dugouts: dark openings framed with timber on the rear wall
    for (const side of [-1, 1]) {
      for (let x = -520; x <= 520; x += 105) {
        const cz = trenchZ(x, side), w = trenchWidth(x), floor = heightAt(x, cz);
        const g = new THREE.Group();
        addBox(g, 2.2, 2.1, 0.1, 0x14120e, 0, 1.1, 0);
        addBox(g, 2.5, 0.16, 0.2, PALETTE.woodDark, 0, 2.2, 0.05);
        addBox(g, 0.16, 2.2, 0.2, PALETTE.woodDark, -1.1, 1.1, 0.05);
        addBox(g, 0.16, 2.2, 0.2, PALETTE.woodDark, 1.1, 1.1, 0.05);
        // steps
        for (let s = 0; s < 3; s++) addBox(g, 0.8, 0.12, 0.4, PALETTE.wood, 0, 0.1 + s * 0.18, 0.2 + s * 0.2);
        g.position.set(x, floor, cz + side * (w - 0.12));
        g.rotation.y = side > 0 ? 0 : Math.PI;
        this.group.add(g);
      }
    }

    // trench bridges / fascines at tank crossing
    for (const side of [-1, 1]) {
      const cz = trenchZ(-20, side);
      const g = new THREE.Group();
      for (let i = 0; i < 10; i++) {
        addCyl(g, 0.16, 0.16, 5.6, 6, PALETTE.wood, 0, 0.16 + (i % 2) * 0.3, -2.6 + i * 0.58, 0, 0, Math.PI / 2);
      }
      addBox(g, 6.2, 0.15, 6.2, PALETTE.woodDark, 0, 0.6, 0);
      g.position.set(-20, heightAt(-20, cz) + 0.1, cz);
      this.group.add(g);
    }
  }

  /* ---------------- barbed wire ---------------- */
  buildBarbedWire() {
    const rng = mulberry32(881);
    const postGeo = new THREE.CylinderGeometry(0.035, 0.05, 1.1, 5);
    postGeo.rotateZ((rng() - 0.5) * 0.15);
    const posts = new THREE.InstancedMesh(postGeo, toonMat(PALETTE.woodDark), 1400);
    posts.castShadow = true;
    const m4 = new THREE.Matrix4();
    let pi = 0;
    const pts = [];
    for (const side of [-1, 1]) {
      const lines = side < 0 ? [-12, -18] : [12, 18];
      for (const off of lines) {
        for (let x = -600; x < 600; x += 3.1) {
          const z = trenchZ(x, side) + side * off;
          const y = heightAt(x, z);
          m4.makeTranslation(x, y + 0.55, z);
          if (pi < 1400) posts.setMatrixAt(pi++, m4);
          // three sagging wires between posts
          if (x < 597) {
            const z2 = trenchZ(x + 3.1, side) + side * off;
            const y2 = heightAt(x + 3.1, z2);
            for (let s = 0; s < 3; s++) {
              const h = 0.32 + s * 0.3;
              const segs = 3;
              for (let k = 0; k < segs; k++) {
                const t0 = k / segs, t1 = (k + 1) / segs;
                const sag = (t) => Math.sin(t * Math.PI) * 0.16;
                pts.push(
                  lerp(x, x + 3.1, t0), lerp(y, y2, t0) + h - sag(t0), lerp(z, z2, t0),
                  lerp(x, x + 3.1, t1), lerp(y, y2, t1) + h - sag(t1), lerp(z, z2, t1),
                );
              }
            }
          }
        }
      }
    }
    posts.count = pi;
    this.group.add(posts);
    const wg = new THREE.BufferGeometry();
    wg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const wire = new THREE.LineSegments(wg, new THREE.LineBasicMaterial({ color: 0x3d3a30, transparent: true, opacity: 0.85 }));
    this.group.add(wire);

    // knife rests / chevaux-de-frise
    for (let i = 0; i < 70; i++) {
      const side = rng() < 0.5 ? -1 : 1;
      const x = -560 + rng() * 1120;
      const z = trenchZ(x, side) + side * (9 + rng() * 8);
      const g = new THREE.Group();
      for (const a of [-0.7, 0.7]) {
        const bar = addBox(g, 2.6, 0.07, 0.07, PALETTE.woodDark, 0, 0.8, 0, 0, 0, a);
        bar.rotation.y = rng() * 3;
      }
      for (let k = 0; k < 6; k++) addBox(g, 0.04, 0.6, 0.04, 0x3a372d, (rng() - 0.5) * 2.2, 0.8 + (rng() - 0.5) * 0.6, (rng() - 0.5) * 0.2, 0, 0, rng() * 3);
      g.position.set(x, heightAt(x, z), z);
      g.rotation.y = rng() * TAU;
      this.group.add(g);
    }
  }

  /* ---------------- craters ---------------- */
  buildCraters() {
    const waterGeos = [];
    const rng = mulberry32(555);
    for (const c of CRATERS) {
      if (!c.water) continue;
      const y = heightAt(c.x, c.z) + 0.12;
      const g = new THREE.CircleGeometry(c.r * 0.55, 14);
      g.rotateX(-Math.PI / 2);
      g.translate(c.x, y, c.z);
      waterGeos.push(g);
    }
    if (waterGeos.length) {
      const merged = mergeGeometries(waterGeos, false);
      const water = new THREE.Mesh(merged, new THREE.MeshLambertMaterial({ color: 0x4b5248, transparent: true, opacity: 0.9, polygonOffset: true, polygonOffsetFactor: -1 }));
      water.receiveShadow = true;
      this.group.add(water);
    }
    // scattered debris: planks, stakes, helmets, rifles
    const debrisGeo = new THREE.BoxGeometry(0.22, 0.06, 1.2);
    const debris = new THREE.InstancedMesh(debrisGeo, toonMat(PALETTE.woodDark), 700);
    debris.castShadow = true; debris.receiveShadow = true;
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    for (let i = 0; i < 700; i++) {
      const x = -600 + rng() * 1200;
      const z = (rng() - 0.5) * 140;
      const y = heightAt(x, z);
      q.setFromEuler(new THREE.Euler((rng() - 0.5) * 0.5, rng() * TAU, (rng() - 0.5) * 0.5));
      v.set(x, y + 0.06, z);
      sc.set(0.6 + rng() * 0.8, 1, 0.5 + rng() * 0.7);
      m4.compose(v, q, sc);
      debris.setMatrixAt(i, m4);
    }
    this.group.add(debris);

    // broken carts / wheels
    for (let i = 0; i < 9; i++) {
      const x = -450 + rng() * 900, z = (rng() - 0.5) * 90;
      const g = new THREE.Group();
      addTorus(g, 0.7, 0.08, PALETTE.woodDark, 0, 0.7, 0, 0, 0, 0);
      addBox(g, 0.1, 1.3, 0.1, PALETTE.woodDark, 0, 0.7, 0);
      addBox(g, 1.2, 0.08, 0.1, PALETTE.woodDark, 0, 0.7, 0, 0, 0, 1.57);
      g.position.set(x, heightAt(x, z) + 0.3, z);
      g.rotation.set(rng(), rng() * TAU, rng() * 0.8);
      this.group.add(g);
    }
  }

  /* ---------------- vegetation ---------------- */
  buildVegetation() {
    const rng = mulberry32(3131);
    // dead trees
    const parts = [];
    const trunk = new THREE.CylinderGeometry(0.16, 0.3, 5.5, 7);
    trunk.translate(0, 2.75, 0);
    parts.push(trunk);
    for (let i = 0; i < 6; i++) {
      const len = 1.4 + rng() * 2.0;
      const b = new THREE.CylinderGeometry(0.05, 0.13, len, 5);
      const m = new THREE.Matrix4();
      const a = rng() * TAU;
      const tilt = 0.5 + rng() * 0.7;
      m.compose(
        new THREE.Vector3(Math.cos(a) * 0.6, 3.2 + rng() * 1.8, Math.sin(a) * 0.6),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.sin(a) * tilt, 0, Math.cos(a) * tilt)),
        new THREE.Vector3(1, 1, 1),
      );
      b.applyMatrix4(m);
      parts.push(b);
    }
    const treeGeo = mergeGeometries(parts, false);
    const trees = new THREE.InstancedMesh(treeGeo, toonMat(0x4a3d2c), 70);
    trees.castShadow = true; trees.receiveShadow = true;
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), sc = new THREE.Vector3();
    let ti = 0;
    for (let i = 0; i < 70; i++) {
      const x = -610 + rng() * 1220;
      const z = rng() < 0.55 ? (rng() - 0.5) * 140 : (rng() < 0.5 ? -1 : 1) * (80 + rng() * 170);
      const y = heightAt(x, z);
      q.setFromEuler(new THREE.Euler((rng() - 0.5) * 0.16, rng() * TAU, (rng() - 0.5) * 0.16));
      v.set(x, y - 0.15, z);
      sc.set(0.7 + rng() * 0.7, 0.7 + rng() * 0.6, 0.7 + rng() * 0.7);
      m4.compose(v, q, sc);
      trees.setMatrixAt(ti++, m4);
    }
    trees.count = ti;
    this.group.add(trees);

    // live trees near rear areas
    const liveParts = [];
    const lt = new THREE.CylinderGeometry(0.2, 0.32, 4.5, 6); lt.translate(0, 2.2, 0);
    liveParts.push(lt);
    for (let i = 0; i < 4; i++) {
      const s = new THREE.SphereGeometry(1.6 + rng() * 1.1, 7, 5);
      s.translate((rng() - 0.5) * 2.2, 4 + rng() * 1.5, (rng() - 0.5) * 2.2);
      liveParts.push(s);
    }
    const liveGeo = mergeGeometries(liveParts, false);
    const live = new THREE.InstancedMesh(liveGeo, toonMat(0x4d5634), 46);
    live.castShadow = true; live.receiveShadow = true;
    let li = 0;
    for (let i = 0; i < 46; i++) {
      const x = -600 + rng() * 1200;
      const z = (rng() < 0.5 ? -1 : 1) * (95 + rng() * 160);
      const y = heightAt(x, z);
      q.setFromEuler(new THREE.Euler(0, rng() * TAU, 0));
      v.set(x, y - 0.1, z);
      const s = 0.7 + rng() * 0.8;
      sc.set(s, s, s);
      m4.compose(v, q, sc);
      live.setMatrixAt(li++, m4);
    }
    live.count = li;
    this.group.add(live);

    // grass tufts (instanced, vertex colours)
    const blade = new THREE.ConeGeometry(0.05, 0.5, 3);
    blade.translate(0, 0.25, 0);
    const gparts = [];
    for (let i = 0; i < 5; i++) {
      const b = blade.clone();
      b.rotateZ((rng() - 0.5) * 0.7);
      b.rotateY(rng() * TAU);
      b.translate((rng() - 0.5) * 0.4, 0, (rng() - 0.5) * 0.4);
      gparts.push(b);
    }
    const tuftGeo = mergeGeometries(gparts, false);
    const tufts = new THREE.InstancedMesh(tuftGeo, toonMat(0x77743f), 5200);
    tufts.receiveShadow = true;
    const col = new THREE.Color();
    for (let i = 0; i < 5200; i++) {
      let x = -620 + rng() * 1240;
      let z;
      if (rng() < 0.72) z = (rng() < 0.5 ? -1 : 1) * (70 + rng() * 220);
      else z = (rng() - 0.5) * 150;
      if (trenchDepthAt(x, z) > 0.4) z += 6;
      const y = heightAt(x, z);
      q.setFromEuler(new THREE.Euler(0, rng() * TAU, 0));
      v.set(x, y, z);
      const s = 0.6 + rng() * 1.2;
      sc.set(s, s * (0.7 + rng() * 0.8), s);
      m4.compose(v, q, sc);
      tufts.setMatrixAt(i, m4);
      col.setHSL(0.15 + rng() * 0.06, 0.22 + rng() * 0.18, 0.28 + rng() * 0.12);
      tufts.setColorAt(i, col);
    }
    this.group.add(tufts);
  }

  addCollider(x, z, r) { this.colliders.push({ x, z, r }); }

  addCampfire(x, z, big = false) {
    const g = new THREE.Group();
    const y = heightAt(x, z);
    for (let i = 0; i < 7; i++) {
      const a = i / 7 * TAU;
      addBox(g, 0.8, 0.14, 0.14, PALETTE.woodDark, Math.cos(a) * 0.5, 0.1, Math.sin(a) * 0.5, 0, a, 0.15);
    }
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff9a33 }));
    glow.position.y = 0.18; glow.scale.y = 0.5;
    g.add(glow);
    g.position.set(x, y, z);
    this.group.add(g);
    this.campfires.push({ x, y: y + 0.4, z, glow });
    this.smokeSources.push({ x, y: y + 1.2, z, rate: 2.4, size: 1.5, color: [0.36, 0.34, 0.3], life: 5, rise: 1.6 });
  }

  /* ---------------- British base ---------------- */
  buildBritishBase() {
    const rng = mulberry32(101);
    const hutSpots = [[-520, -190, 0], [-520, -172, 0], [-500, -215, 0.15], [-455, -230, 0.2]];
    for (const [x, z, ry] of hutSpots) {
      const h = buildNissenHut();
      h.position.set(x, heightAt(x, z), z);
      h.rotation.y = ry;
      this.group.add(h);
      this.addCollider(x, z, 4.2);
    }
    for (let i = 0; i < 6; i++) {
      const x = -560 + rng() * 100, z = -260 + rng() * 50;
      const t = buildTent();
      t.position.set(x, heightAt(x, z), z);
      t.rotation.y = rng() * TAU;
      this.group.add(t);
      this.addCollider(x, z, 2.4);
    }
    // camp flag
    const flag = buildFlag(0xa32b23, 9);
    flag.position.set(-470, heightAt(-470, -165), -165);
    this.group.add(flag);
    this.flags.push(flag);
    // trucks / crates / guns
    for (const [x, z, ry] of [[-555, -135, 0.4], [-530, -120, -0.2], [-430, -160, 1.2]]) {
      const t = buildTruck();
      t.position.set(x, heightAt(x, z), z); t.rotation.y = ry;
      this.group.add(t); this.addCollider(x, z, 2.6);
    }
    for (let i = 0; i < 8; i++) {
      const x = -540 + rng() * 140, z = -250 + rng() * 110;
      const c = buildCrateStack();
      c.position.set(x, heightAt(x, z), z); c.rotation.y = rng() * TAU;
      this.group.add(c); this.addCollider(x, z, 1.2);
    }
    for (const [x, z] of [[-470, -105], [-445, -100], [-420, -108]]) {
      const gun = buildFieldGun();
      gun.position.set(x, heightAt(x, z), z); gun.rotation.y = Math.PI;
      this.group.add(gun); this.addCollider(x, z, 1.8);
    }
    this.addCampfire(-490, -140, true);
    this.addCampfire(-450, -175);
    // telegraph poles
    for (let i = 0; i < 7; i++) {
      const x = -600 + i * 28, z = -128;
      const y = heightAt(x, z);
      const p = addCyl(this.group, 0.1, 0.14, 7, 6, PALETTE.woodDark, x, y + 3.5, z);
      addBox(this.group, 2.4, 0.1, 0.1, PALETTE.woodDark, x, y + 6.4, z);
    }
  }

  /* ---------------- German base ---------------- */
  buildGermanBase() {
    const rng = mulberry32(202);
    for (const [x, z, ry] of [[500, 205, 0], [470, 235, 0.2], [540, 250, -0.1]]) {
      const b = buildBunker();
      b.position.set(x, heightAt(x, z), z); b.rotation.y = ry;
      this.group.add(b); this.addCollider(x, z, 4.5);
    }
    for (let i = 0; i < 7; i++) {
      const x = 430 + rng() * 150, z = 160 + rng() * 120;
      const t = buildTent();
      t.position.set(x, heightAt(x, z), z);
      t.rotation.y = rng() * TAU;
      this.group.add(t); this.addCollider(x, z, 2.4);
    }
    const flag = buildFlag(0x2a2a24, 9);
    flag.position.set(505, heightAt(505, 190), 190);
    this.group.add(flag);
    this.flags.push(flag);
    for (let i = 0; i < 7; i++) {
      const x = 460 + rng() * 120, z = 160 + rng() * 110;
      const c = buildCrateStack();
      c.position.set(x, heightAt(x, z), z); c.rotation.y = rng() * TAU;
      this.group.add(c); this.addCollider(x, z, 1.2);
    }
    for (const [x, z, ry] of [[450, 150, Math.PI], [420, 140, Math.PI], [390, 148, Math.PI]]) {
      const gun = buildFieldGun();
      gun.position.set(x, heightAt(x, z), z); gun.rotation.y = ry;
      this.group.add(gun); this.addCollider(x, z, 1.8);
    }
    for (const [x, z, ry] of [[540, 150, 2.2], [510, 135, 1.7]]) {
      const t = buildTruck();
      t.position.set(x, heightAt(x, z), z); t.rotation.y = ry;
      this.group.add(t); this.addCollider(x, z, 2.6);
    }
    this.addCampfire(465, 200, true);
    this.addCampfire(525, 225);
  }

  /* ---------------- aerodrome ---------------- */
  buildAerodrome() {
    const rng = mulberry32(303);
    const { x, z, hx, hz } = WORLD.aerodrome;
    // runway strip — packed earth + white markers
    const runwayMat = new THREE.MeshLambertMaterial({ color: 0x6b6349, transparent: true, opacity: 0.9 });
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(hx * 2, hz * 1.1), runwayMat);
    strip.rotation.x = -Math.PI / 2;
    strip.position.set(x, heightAt(x, z) + 0.03, z);
    strip.receiveShadow = true;
    this.group.add(strip);
    for (let i = 0; i < 12; i++) {
      for (const s of [-1, 1]) {
        const m = addBox(this.group, 2.4, 0.03, 0.6, PALETTE.white, x - hx + 14 + i * 19, heightAt(x, z) + 0.06, z + s * (hz * 0.5));
        m.rotation.y = 0;
      }
    }
    // hangar
    const hangar = buildHangar();
    hangar.position.set(x - 40, heightAt(x - 40, z - 26), z - 26);
    this.group.add(hangar);
    this.addCollider(x - 40, z - 26, 8);
    // windsock
    const sock = buildWindsock();
    sock.position.set(x + hx - 18, heightAt(x + hx - 18, z - 14), z - 14);
    this.group.add(sock);
    this.windsock = sock;
    // fuel drums, crates, tools
    for (let i = 0; i < 7; i++) {
      const dx = x - 60 + rng() * 35, dz = z - 22 + rng() * 12;
      addCyl(this.group, 0.32, 0.32, 0.9, 10, i % 2 ? 0x5b5a3c : 0x3e4638, dx, heightAt(dx, dz) + 0.45, dz, 0, 0, 0);
    }
    for (let i = 0; i < 5; i++) {
      const dx = x + 55 + rng() * 30, dz = z - 20 + rng() * 8;
      const c = buildCrateStack();
      c.position.set(dx, heightAt(dx, dz), dz);
      c.rotation.y = rng() * TAU;
      this.group.add(c);
    }
    // spare propeller leaning on crates
    const prop = addCyl(this.group, 0.06, 0.1, 2.6, 6, PALETTE.wood, x + 64, heightAt(x + 64, z - 16) + 1.3, z - 16, 0, 0, 0.5);
    addBox(this.group, 0.6, 0.25, 0.1, PALETTE.woodDark, x + 64, heightAt(x + 64, z - 16) + 1.2, z - 16);
    // parked British plane (static display until pilot boards)
    this.planeSpawn = new THREE.Vector3(WORLD.planeSpawn.x, heightAt(WORLD.planeSpawn.x, WORLD.planeSpawn.z) + 0.35, WORLD.planeSpawn.z);
    // small German field strip
    const gx = 352, gz = 118;
    const gstrip = new THREE.Mesh(new THREE.PlaneGeometry(110, 24), new THREE.MeshLambertMaterial({ color: 0x69664c, transparent: true, opacity: 0.85 }));
    gstrip.rotation.x = -Math.PI / 2;
    gstrip.position.set(gx, heightAt(gx, gz) + 0.03, gz);
    this.group.add(gstrip);
    for (const [x2, z2, ry] of [[330, 150, 0.3], [365, 158, -0.2]]) {
      const t = buildTent();
      t.position.set(x2, heightAt(x2, z2), z2); t.rotation.y = ry;
      this.group.add(t); this.addCollider(x2, z2, 2.4);
    }
    const gsock = buildWindsock();
    gsock.position.set(410, heightAt(410, 100), 100);
    this.group.add(gsock);
    this.germanWindsock = gsock;
    this.enemyPlaneSpawn = new THREE.Vector3(WORLD.enemyPlaneSpawn.x, heightAt(WORLD.enemyPlaneSpawn.x, WORLD.enemyPlaneSpawn.z) + 0.35, WORLD.enemyPlaneSpawn.z);
  }

  /* ---------------- tank park ---------------- */
  buildTankPark() {
    const { x, z } = WORLD.tankSpawn;
    for (let i = 0; i < 6; i++) {
      const dx = x - 22 + (i % 3) * 8, dz = z - 14 + Math.floor(i / 3) * 7;
      const c = buildCrateStack();
      c.position.set(dx, heightAt(dx, dz), dz);
      this.group.add(c);
    }
    for (let i = 0; i < 4; i++) {
      const dx = x + 14 + i * 3.5, dz = z - 8;
      addCyl(this.group, 0.35, 0.35, 1.0, 10, 0x4c4a33, dx, heightAt(dx, dz) + 0.5, dz);
    }
    // track marks
    const trackMat = new THREE.MeshBasicMaterial({ color: 0x4a3d2b, transparent: true, opacity: 0.5, depthWrite: false });
    for (let i = 0; i < 40; i++) {
      const t = i / 40;
      const tx = lerp(x, -20, t), tz = lerp(z, -70, t);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.6), trackMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(tx + Math.sin(t * 8) * 0.2, heightAt(tx, tz) + 0.05, tz);
      this.group.add(m);
    }
  }

  /* ---------------- MG sites ---------------- */
  buildMGSites() {
    const sites = [
      { side: BRITISH, x: -30, team: 'british' },
      { side: BRITISH, x: 140, team: 'british' },
      { side: GERMAN, x: 38, team: 'german' },
      { side: GERMAN, x: -160, team: 'german' },
    ];
    this.mgSites = [];
    for (const s of sites) {
      const cz = trenchZ(s.x, s.side);
      const w = trenchWidth(s.x);
      const z = cz - s.side * (w - 0.55);
      const y = heightAt(s.x, z);
      // sandbag nest
      const nest = new THREE.Group();
      const rng = mulberry32(Math.floor(s.x * 13 + 7));
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * TAU;
        addSphere(nest, 0.28, i % 2 ? PALETTE.sandbag : PALETTE.sandbagDark, Math.cos(a) * 1.15, 0.15 + (i % 3) * 0.18, Math.sin(a) * 1.15, 1.5, 0.75, 0.8);
      }
      nest.position.set(s.x, y, z);
      this.group.add(nest);
      this.mgSites.push({ x: s.x, z, y, team: s.team, side: s.side });
    }
  }

  /* ---------------- distant scenery ---------------- */
  buildDistantLand() {
    const rng = mulberry32(606);
    // flat, hazy silhouettes read as far ridges without black backlit facets
    const mat = new THREE.MeshBasicMaterial({ color: 0x9c9478, fog: true });
    for (const side of [-1, 1]) {
      for (let i = 0; i < 9; i++) {
        const g = new THREE.Group();
        const w = 90 + rng() * 150, h = 16 + rng() * 34;
        const m = new THREE.Mesh(new THREE.ConeGeometry(w, h, 5), mat);
        m.scale.z = 0.5;
        m.position.y = h / 2 - 4;
        g.add(m);
        g.position.set(-700 + i * 175, -3, side * (520 + rng() * 140));
        g.rotation.y = rng() * TAU;
        this.group.add(g);
      }
    }
    // far off church spire / ruins
    const ruins = new THREE.Group();
    addBox(ruins, 10, 14, 8, 0x6c6650, 0, 7, 0);
    addBox(ruins, 4, 22, 4, 0x625c47, 3, 11, 0);
    addCone(ruins, 2.4, 5, 4, 0x55503e, 3, 24, 0);
    ruins.position.set(210, heightAt(210, -160), -160);
    this.group.add(ruins);
  }

  setLowQuality() {
    if (this.lowQuality) return;
    this.lowQuality = true;
    if (this.trenchDetails) {
      for (const m of this.trenchDetails) m.visible = false;
    }
  }

  /* ---------------- per-frame ---------------- */
  update(dt, time, focus) {
    // shadow frustum follows player
    if (focus) {
      this.sun.position.set(focus.x - 90, focus.y + 130, focus.z + 85);
      this.sun.target.position.set(focus.x, focus.y, focus.z);
      this.sun.target.updateMatrixWorld();
      if (this.skyRig) this.skyRig.position.set(focus.x, 0, focus.z);
    }
    for (const c of this.clouds) c.position.x += dt * 0.7;
    for (const f of this.flags) {
      f.userData.flag.rotation.y = Math.sin(time * 1.3 + f.position.x) * 0.22;
      f.userData.flag.children[0].rotation.z = Math.sin(time * 2.1 + f.position.z) * 0.06;
    }
    if (this.windsock) this.windsock.userData.sock.rotation.x = Math.sin(time * 1.7) * 0.12;
    if (this.germanWindsock) this.germanWindsock.userData.sock.rotation.x = Math.sin(time * 1.4 + 1) * 0.12;
    for (const f of this.campfires) {
      f.glow.scale.setScalar(0.8 + Math.sin(time * 9 + f.x) * 0.2 + Math.random() * 0.1);
    }
  }
}
