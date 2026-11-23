import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  clamp, lerp, rand, pick, chance, TAU, makeRng, SpatialHash, formatClock
} from './utils.js';
import { facadeTextures, roadMaterialSet, signTexture, billboardTexture, glowTexture } from './textures.js';
import { buildSky, buildWaterfront, buildProps, buildTransit, buildAirport, buildOutskirts, buildIslands } from './cityextra.js';

export const GRID = 9;
export const SPACING = 96;
export const ROAD_W = 16;
export const HALF_ROAD = ROAD_W / 2;
export const NODE_POS = (i) => (i - 4) * SPACING;
export const BLOCK_CENTER = (i) => (i - 4) * SPACING + SPACING / 2;
export const CITY_EXTENT = (GRID - 1) / 2 * SPACING;

const SPECIAL = {
  '3,3': 'park',
  '5,5': 'hospital',
  '5,4': 'police',
  '2,3': 'fire',
  '3,4': 'garage',
  '4,5': 'dealership',
  '3,2': 'apartment',
  '2,5': 'shop',
  '6,3': 'office',
  '1,2': 'industrial',
  '7,5': 'hotel',
};

export class City {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.name = 'city';
    scene.add(this.root);
    this.colliders = [];
    this.spatial = new SpatialHash(32);
    this.blocks = [];
    this.pois = [];
    this.parkingSpots = [];
    this.busStops = [];
    this.facadeMaterials = [];
    this.emissiveMats = [];
    this.signalNodes = [];
    this.seed = 7781;
    this.hour = 6.4;
    this.night = 0;
    this.weather = 'clear';
    this.clouds = [];
    this.animated = [];
    this.lampGlow = null;
    this.sky = null;
    this.sun = null;
    this.hemi = null;
    this.ambient = null;
    this.water = null;
    this.monorail = null;
    this.rail = null;
    this.rail2 = null;
    this.islandRail = null;
    this.militaryRail = null;
    this.freightRail = null;
    this.airTraffic = [];
    this.islands = [];
    this.bridges = [];
    this.islandRoads = [];
    this.highwayCars = [];
    this.factorySmoke = null;
    this.init();
  }

  init() {
    const rng = makeRng(this.seed);
    this.mats = roadMaterialSet();
    this.makeMaterials();
    buildSky(this);
    this.buildGround();
    this.buildRoads();
    this.buildBlocks(rng);
    buildProps(this, rng);
    buildWaterfront(this, rng);
    buildIslands(this, rng);
    buildTransit(this, rng);
    buildAirport(this, rng);
    buildOutskirts(this, rng);
    this.buildSignals();
    this.buildParkingSpots(rng);
    this.spatial = new SpatialHash(32);
    for (const b of this.colliders) this.spatial.insert(b, b.minX, b.minZ, b.maxX, b.maxZ);
    this.updateLighting(6.4, 'clear', 0);
    this.mergeStatic();
  }

  /* Collapse the thousands of static city meshes into one merged mesh per
     material. This is the single biggest win for draw-call bound devices
     (software renderers, integrated GPUs) and leaves animated objects alone. */
  mergeStatic() {
    const root = this.root;
    root.updateMatrixWorld(true);
    const rootInv = new THREE.Matrix4().copy(root.matrixWorld).invert();

    const dynamic = new Set();
    const markDynamic = (obj) => { if (obj) obj.traverse((o) => dynamic.add(o)); };
    markDynamic(this.water);
    markDynamic(this.lampGlow);
    markDynamic(this.smokeParticles);
    markDynamic(this.fireflyPoints);
    if (this.monorail) markDynamic(this.monorail.group);
    if (this.rail) markDynamic(this.rail.group);
    if (this.rail2) markDynamic(this.rail2.group);
    if (this.islandRail) markDynamic(this.islandRail.group);
    if (this.militaryRail) markDynamic(this.militaryRail.group);
    if (this.freightRail) markDynamic(this.freightRail.group);
    if (this.radar) markDynamic(this.radar);
    if (this.militaryFlag) markDynamic(this.militaryFlag);
    if (this.flyingPlane) markDynamic(this.flyingPlane.group);
    for (const a of this.airTraffic) markDynamic(a.group);
    if (this.lighthouse) markDynamic(this.lighthouse.group);
    for (const c of this.highwayCars) markDynamic(c);
    for (const a of this.animated) if (a.mesh) markDynamic(a.mesh);

    const buckets = new Map();
    const isDynamic = (o) => {
      let p = o;
      while (p) { if (dynamic.has(p) || p.userData?.noMerge) return true; p = p.parent; }
      return false;
    };

    root.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || o.isPoints || o.isSprite) return;
      if (isDynamic(o) || Array.isArray(o.material)) return;
      const m = o.material;
      if (!m || m.isShaderMaterial || m.transparent || m.opacity < 1 || m.depthWrite === false) return;
      if (!(m.isMeshStandardMaterial || m.isMeshBasicMaterial || m.isMeshLambertMaterial || m.isMeshPhongMaterial)) return;
      const g = o.geometry;
      if (!g || !g.attributes.position || !g.attributes.normal || !g.attributes.uv) return;
      if (g.morphAttributes && Object.keys(g.morphAttributes).length) return;
      const key = m.uuid;
      let b = buckets.get(key);
      if (!b) { b = { material: m, geos: [], meshes: [], cast: false, receive: false }; buckets.set(key, b); }
      const geo = g.index ? g.toNonIndexed() : g.clone();
      for (const name of Object.keys(geo.attributes)) {
        if (name !== 'position' && name !== 'normal' && name !== 'uv') geo.deleteAttribute(name);
      }
      geo.clearGroups();
      geo.applyMatrix4(new THREE.Matrix4().multiplyMatrices(rootInv, o.matrixWorld));
      b.geos.push(geo); b.meshes.push(o);
      b.cast = b.cast || o.castShadow;
      b.receive = b.receive || o.receiveShadow;
    });

    for (const b of buckets.values()) {
      if (b.meshes.length < 2) {
        for (const g of b.geos) g.dispose();
        continue;
      }
      const merged = mergeGeometries(b.geos, false);
      for (const g of b.geos) g.dispose();
      if (!merged) continue;
      const mesh = new THREE.Mesh(merged, b.material);
      mesh.name = `merged-${b.material.uuid}`;
      mesh.castShadow = b.cast;
      mesh.receiveShadow = b.receive;
      root.add(mesh);
      for (const o of b.meshes) o.parent?.remove(o);
    }
    this.mergedStaticMeshes = root.children.filter((o) => o.name.startsWith('merged-')).length;
  }

  makeMaterials() {
    this.roofMat = new THREE.MeshStandardMaterial({ color: 0x3c4248, roughness: 0.94 });
    this.roofMatDark = new THREE.MeshStandardMaterial({ color: 0x262b31, roughness: 0.95 });
    this.glassMat = new THREE.MeshStandardMaterial({ color: 0x172330, roughness: 0.22, metalness: 0.65, emissive: 0x0a1520, emissiveIntensity: 0.4 });
    this.metalMat = new THREE.MeshStandardMaterial({ color: 0x51575c, roughness: 0.7, metalness: 0.5 });
    this.concreteMat = new THREE.MeshStandardMaterial({ color: 0x74746f, roughness: 0.96 });
    this.whiteMat = new THREE.MeshStandardMaterial({ color: 0xdcdcd4, roughness: 0.8 });
    this.darkMat = new THREE.MeshStandardMaterial({ color: 0x1b2026, roughness: 0.9 });
    this.woodMat = new THREE.MeshStandardMaterial({ color: 0x6a4b32, roughness: 0.9 });
    this.grassMat = this.mats.grass;
    this.crownMat = new THREE.MeshStandardMaterial({ color: 0x9fe9ff, emissive: 0x5be0ff, emissiveIntensity: 1.4, roughness: 0.4 });
    this.warmMat = new THREE.MeshStandardMaterial({ color: 0xffd299, emissive: 0xffb457, emissiveIntensity: 1.6, roughness: 0.5 });
    this.redMat = new THREE.MeshStandardMaterial({ color: 0xc23a3a, roughness: 0.7 });
    this.tsMat = new THREE.MeshStandardMaterial({ color: 0x42484d, roughness: 0.8, metalness: 0.4 });

    this.palettes = {
      downtown: this.buildPalette([
        ['#5d7285', '#182430', '#ffd9a0', 'glass'],
        ['#7c8996', '#1a2a3a', '#cfe9ff', 'glass'],
        ['#49525f', '#111b26', '#ffcf8c', 'glass'],
        ['#8a8e93', '#1e2b38', '#d7ecff', 'stone'],
      ]),
      midrise: this.buildPalette([
        ['#9b7c63', '#27313b', '#ffd7a1', 'brick'],
        ['#b2a08a', '#2a333c', '#ffe0b0', 'stone'],
        ['#7e6c5c', '#1d2731', '#ffcf94', 'brick'],
        ['#a7a8a3', '#232f3a', '#e9f4ff', 'stone'],
      ]),
      suburb: this.buildPalette([
        ['#d8d1c2', '#26313c', '#ffdca6', 'stone'],
        ['#bdc7c0', '#22303a', '#ffe3b5', 'stone'],
        ['#ccb6a3', '#2a333c', '#ffd49b', 'stone'],
        ['#e0ddd4', '#202b36', '#ffe9c4', 'stone'],
      ]),
      industrial: this.buildPalette([
        ['#696e71', '#1a2127', '#ffd18a', 'stone'],
        ['#7b7165', '#20262b', '#ffc77e', 'stone'],
        ['#5d666b', '#161d23', '#cfe4ff', 'stone'],
      ]),
    };
  }

  buildPalette(list) {
    return list.map(([base, win, lit, style], i) => {
      const { diffuse, emissive } = facadeTextures(base, win, lit, this.seed + i * 31 + base.length * 7, style);
      const m = new THREE.MeshStandardMaterial({
        map: diffuse, emissiveMap: emissive, emissive: 0xffffff, emissiveIntensity: 0.02,
        roughness: style === 'glass' ? 0.34 : 0.85, metalness: style === 'glass' ? 0.52 : 0.06,
      });
      this.facadeMaterials.push(m);
      return m;
    });
  }

  buildGround() {
    const base = new THREE.Mesh(new THREE.PlaneGeometry(2600, 2600), new THREE.MeshStandardMaterial({ color: 0x39452f, roughness: 1 }));
    base.rotation.x = -Math.PI / 2;
    base.position.y = -0.08;
    base.receiveShadow = true;
    this.root.add(base);
    this.groundBase = base;
  }

  roadPlaneGeometry() {
    if (!this._roadGeo) {
      const g = new THREE.PlaneGeometry(ROAD_W, 840);
      g.rotateX(-Math.PI / 2);
      this._roadGeo = g;
    }
    return this._roadGeo;
  }

  buildRoads() {
    const mat = this.mats.asphalt;
    const geo = this.roadPlaneGeometry();
    this.roadMeshes = [];
    for (let i = 0; i < GRID; i++) {
      const p = NODE_POS(i);
      const v = new THREE.Mesh(geo, mat);
      v.position.set(p, 0.02, 0);
      v.receiveShadow = true;
      this.root.add(v); this.roadMeshes.push(v);
      const h = new THREE.Mesh(geo, mat);
      h.rotation.y = Math.PI / 2;
      h.position.set(0, 0.021, p);
      h.receiveShadow = true;
      this.root.add(h); this.roadMeshes.push(h);
    }
    // intersections
    const ig = new THREE.PlaneGeometry(ROAD_W, ROAD_W); ig.rotateX(-Math.PI / 2);
    const im = new THREE.MeshStandardMaterial({ color: 0x23262b, roughness: 0.93 });
    for (let i = 0; i < GRID; i++) for (let j = 0; j < GRID; j++) {
      const m = new THREE.Mesh(ig, im);
      m.position.set(NODE_POS(i), 0.035, NODE_POS(j));
      this.root.add(m);
    }

    // lane dashes
    const dashGeo = new THREE.BoxGeometry(0.16, 0.012, 3.2);
    const dashMat = new THREE.MeshStandardMaterial({ color: 0xd9d6c4, roughness: 0.8 });
    const dashes = [];
    for (let i = 0; i < GRID; i++) {
      for (let s = -CITY_EXTENT - 10; s < CITY_EXTENT + 10; s += 8) {
        if (Math.abs(((s + 4 + 48) % 96 + 96) % 96 - 48) < 10) continue;
        dashes.push([NODE_POS(i), s, 0]);
        dashes.push([s, NODE_POS(i), Math.PI / 2]);
      }
    }
    const dMesh = new THREE.InstancedMesh(dashGeo, dashMat, dashes.length);
    const tmp = new THREE.Object3D();
    dashes.forEach(([x, z, r], k) => {
      tmp.position.set(x, 0.055, z); tmp.rotation.set(0, r, 0); tmp.updateMatrix();
      dMesh.setMatrixAt(k, tmp.matrix);
    });
    dMesh.instanceMatrix.needsUpdate = true;
    this.root.add(dMesh);

    // crosswalks
    const cwGeo = new THREE.BoxGeometry(0.72, 0.014, 3.5);
    const cwMat = new THREE.MeshStandardMaterial({ color: 0xe9e7df, roughness: 0.75 });
    const cws = [];
    for (let i = 0; i < GRID; i++) for (let j = 0; j < GRID; j++) {
      const x = NODE_POS(i), z = NODE_POS(j);
      for (let a = -3; a <= 3; a++) {
        cws.push([x + a * 1.1, z - HALF_ROAD - 2.1, 0]);
        cws.push([x + a * 1.1, z + HALF_ROAD + 2.1, 0]);
        cws.push([x - HALF_ROAD - 2.1, z + a * 1.1, Math.PI / 2]);
        cws.push([x + HALF_ROAD + 2.1, z + a * 1.1, Math.PI / 2]);
      }
    }
    const cwMesh = new THREE.InstancedMesh(cwGeo, cwMat, cws.length);
    cws.forEach(([x, z, r], k) => {
      tmp.position.set(x, 0.06, z); tmp.rotation.set(0, r, 0); tmp.updateMatrix();
      cwMesh.setMatrixAt(k, tmp.matrix);
    });
    this.root.add(cwMesh);

    // edge lines
    const edgeGeo = new THREE.PlaneGeometry(0.14, 840); edgeGeo.rotateX(-Math.PI / 2);
    const edgeMat = new THREE.MeshStandardMaterial({ color: 0xc9c6b7, roughness: 0.85 });
    for (let i = 0; i < GRID; i++) {
      for (const side of [-1, 1]) {
        const v = new THREE.Mesh(edgeGeo, edgeMat);
        v.position.set(NODE_POS(i) + side * (HALF_ROAD - 0.45), 0.05, 0);
        this.root.add(v);
        const h = new THREE.Mesh(edgeGeo, edgeMat);
        h.rotation.y = Math.PI / 2;
        h.position.set(0, 0.05, NODE_POS(i) + side * (HALF_ROAD - 0.45));
        this.root.add(h);
      }
    }
  }

  buildBlocks(rng) {
    const sidewalkGeo = new THREE.PlaneGeometry(SPACING - ROAD_W, SPACING - ROAD_W);
    sidewalkGeo.rotateX(-Math.PI / 2);
    const swMat = this.mats.sidewalk.clone();
    swMat.map = this.mats.sidewalk.map.clone();
    swMat.map.repeat.set(12, 12);
    swMat.map.needsUpdate = true;
    this.sidewalkMat = swMat;
    this.sidewalkMesh = new THREE.InstancedMesh(sidewalkGeo, swMat, 64);
    const tmp = new THREE.Object3D();
    let swIndex = 0;

    const lotMatConcrete = this.mats.lot.clone();
    lotMatConcrete.map = this.mats.lot.map.clone(); lotMatConcrete.map.repeat.set(9, 9);
    const lotMatGrass = this.mats.grass.clone();
    lotMatGrass.map = this.mats.grass.map.clone(); lotMatGrass.map.repeat.set(9, 9);
    const lots = { concrete: [], grass: [] };

    const curbGeo = new THREE.BoxGeometry(68, 0.16, 0.28);
    const curbs = [];

    for (let bi = 0; bi < 8; bi++) {
      for (let bj = 0; bj < 8; bj++) {
        const x = BLOCK_CENTER(bi), z = BLOCK_CENTER(bj);
        const special = SPECIAL[`${bi},${bj}`] || null;
        const district = this.districtForBlock(bi, bj, special);
        const block = { bi, bj, x, z, district, special };
        this.blocks.push(block);

        tmp.position.set(x, 0.1, z); tmp.rotation.set(0, 0, 0); tmp.scale.set(1, 1, 1); tmp.updateMatrix();
        this.sidewalkMesh.setMatrixAt(swIndex++, tmp.matrix);

        const isGreen = ['suburb', 'park', 'residential'].includes(district) || special === 'park';
        (isGreen ? lots.grass : lots.concrete).push([x, z]);
        curbs.push([x, z - 34, 0], [x, z + 34, 0], [x - 34, z, Math.PI / 2], [x + 34, z, Math.PI / 2]);

        this.buildBlockContent(block, rng);
      }
    }
    this.root.add(this.sidewalkMesh);
    this.lotMeshes = [];
    for (const [key, arr] of Object.entries(lots)) {
      if (!arr.length) continue;
      const geo = new THREE.PlaneGeometry(68, 68); geo.rotateX(-Math.PI / 2);
      const mesh = new THREE.InstancedMesh(geo, key === 'grass' ? lotMatGrass : lotMatConcrete, arr.length);
      arr.forEach(([x, z], i) => { tmp.position.set(x, 0.15, z); tmp.updateMatrix(); mesh.setMatrixAt(i, tmp.matrix); });
      mesh.receiveShadow = true;
      this.root.add(mesh); this.lotMeshes.push(mesh);
    }
    const curbMat = new THREE.MeshStandardMaterial({ color: 0x8f8f8a, roughness: 0.95 });
    const curbMesh = new THREE.InstancedMesh(curbGeo, curbMat, curbs.length);
    curbs.forEach(([x, z, r], i) => {
      tmp.position.set(x, 0.18, z); tmp.rotation.set(0, r, 0); tmp.updateMatrix();
      curbMesh.setMatrixAt(i, tmp.matrix);
    });
    this.root.add(curbMesh);
  }

  districtForBlock(bi, bj, special) {
    if (special === 'park') return 'park';
    if (special === 'suburb') return 'suburb';
    if (special === 'industrial') return 'industrial';
    if (special === 'airport') return 'airport';
    if (bj <= 1) return 'industrial';
    if (bi >= 6 && bj >= 2 && bj <= 5) return 'suburb';
    if (bj >= 6) return 'waterfront';
    if (bi <= 2 && bj >= 3) return 'residential';
    if (bi >= 3 && bi <= 5 && bj >= 2 && bj <= 5) return 'downtown';
    return 'midtown';
  }

  buildBlockContent(block, rng) {
    const { bi, bj, x, z, district, special } = block;
    if (special === 'park') { this.buildPark(block, rng); return; }
    if (special === 'hospital') { this.buildHospital(block); return; }
    if (special === 'police') { this.buildPolice(block); return; }
    if (special === 'fire') { this.buildFireStation(block); return; }
    if (special === 'garage') { this.buildGarage(block); return; }
    if (special === 'dealership') { this.buildDealership(block); return; }
    if (special === 'apartment') { this.buildApartment(block); return; }
    if (special === 'shop') { this.buildShop(block); return; }
    if (special === 'office') { this.buildOffice(block); return; }
    if (special === 'hotel') { this.buildHotel(block); return; }
    if (special === 'industrial') { this.buildFactory(block, rng); return; }
    if (district === 'downtown') this.buildDowntown(block, rng);
    else if (district === 'industrial') this.buildIndustrial(block, rng);
    else if (district === 'suburb') this.buildSuburb(block, rng);
    else if (district === 'waterfront') this.buildWaterfront(block, rng);
    else this.buildMidrise(block, rng);
  }

  buildingMaterial(palette, variant = 0) {
    return this.palettes[palette][variant % this.palettes[palette].length];
  }

  facadeGeometry(w, h, d) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const uv = geo.attributes.uv;
    const reps = [
      [d, h], [d, h], [w, d], [w, d], [w, h], [w, h],
    ];
    for (let f = 0; f < 6; f++) {
      const rx = reps[f][0] / 12, ry = reps[f][1] / 13;
      for (let k = 0; k < 4; k++) {
        const idx = f * 4 + k;
        uv.setXY(idx, uv.getX(idx) * rx, uv.getY(idx) * ry);
      }
    }
    uv.needsUpdate = true;
    return geo;
  }

  addBuilding(x, z, w, d, h, palette, variant, opts = {}) {
    const mat = this.buildingMaterial(palette, variant);
    const roof = opts.roofMat || this.roofMat;
    const geo = this.facadeGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, [mat, mat, roof, roof, mat, mat]);
    // Railway corridor stays clear of buildings.
    const railTracks = [-320, -325.2, -331.6];
    if (railTracks.some(tz => Math.abs(z - tz) < d / 2 + 2.6)) {
      return { mesh, collider: { minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, height: h, type: 'building', mesh } };
    }
    mesh.position.set(x, h / 2 + 0.15 + (opts.base || 0), z);
    mesh.castShadow = h > 14;
    mesh.receiveShadow = true;
    this.root.add(mesh);
    const collider = { minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2, height: h, type: 'building', mesh };
    this.colliders.push(collider);
    if (opts.extraColliders) {
      for (const c of opts.extraColliders) this.colliders.push(c);
    }
    return { mesh, collider };
  }

  addRoofDetails(x, z, w, d, topY, rng, kind = 'normal') {
    const g = new THREE.Group();
    g.position.set(x, topY, z);
    const boxCount = 1 + Math.floor(rng() * 3);
    for (let i = 0; i < boxCount; i++) {
      const bw = 1.4 + rng() * 2.6, bh = 0.7 + rng() * 1.5, bd = 1.4 + rng() * 2.4;
      const m = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), rng() > .5 ? this.metalMat : this.concreteMat);
      m.position.set((rng() - .5) * (w - bw - 2), bh / 2 + 0.15, (rng() - .5) * (d - bd - 2));
      m.castShadow = true; g.add(m);
    }
    if (kind === 'tower') {
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.22, 8 + rng() * 12, 5), this.metalMat);
      spire.position.y = 4 + rng() * 4; g.add(spire);
      const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.26, 6, 6), this.warmMat);
      beacon.position.y = spire.position.y + spire.geometry.parameters.height / 2; g.add(beacon);
      this.animated.push({ type: 'beacon', mesh: beacon, phase: rng() * 6 });
    }
    if (kind === 'tower' && rng() > 0.5) {
      const crown = new THREE.Mesh(new THREE.BoxGeometry(w * 0.92, 0.45, d * 0.92), this.crownMat);
      crown.position.y = 0.35; g.add(crown);
    }
    if (rng() > 0.55) {
      const ac = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.8, 1.4), this.whiteMat);
      ac.position.set((rng() - .5) * w * .5, 0.55, (rng() - .5) * d * .5); g.add(ac);
    }
    this.root.add(g);
    return g;
  }

  buildDowntown(block, rng) {
    const { x, z } = block;
    const w = 34 + rng() * 26, d = 34 + rng() * 26;
    const h = 58 + rng() * 120;
    const offX = (rng() - .5) * (66 - w), offZ = (rng() - .5) * (66 - d);
    const bx = x + offX, bz = z + offZ;
    const variant = Math.floor(rng() * 4);
    const { mesh } = this.addBuilding(bx, bz, w, d, h, 'downtown', variant, { roofMat: this.roofMatDark });
    // podium
    const podH = 7 + rng() * 9;
    if (rng() > 0.35) {
      const pod = this.addBuilding(bx, bz, w + 8, d + 8, podH, 'downtown', (variant + 1) % 4, { roofMat: this.roofMat });
      pod.mesh.castShadow = true;
    }
    // setbacks
    if (h > 100 && rng() > .35) {
      const h2 = h * (0.18 + rng() * .12);
      this.addBuilding(bx, bz, w * .72, d * .72, h2, 'downtown', (variant + 2) % 4, { base: h, roofMat: this.roofMatDark });
    }
    this.addRoofDetails(bx, bz, w, d, h + 0.2, rng, h > 70 ? 'tower' : 'normal');
    // facade fins for glass towers
    if (variant < 2) {
      const finMat = new THREE.MeshStandardMaterial({ color: 0x9fb3c4, roughness: .4, metalness: .6 });
      for (let i = -2; i <= 2; i++) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(0.28, h * .94, 0.5), finMat);
        fin.position.set(bx + i * w / 6, h / 2 + .2, bz + d / 2 + 0.3);
        this.root.add(fin);
      }
    }
    if (h > 125) {
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(18, 5), new THREE.MeshBasicMaterial({ map: billboardTexture('NOVA', 'ABOVE ALL', '#0a2d4d', '#1b6d91'), transparent: false }));
      sign.position.set(bx, h * .75, bz + d / 2 + 0.3);
      this.root.add(sign);
    }
  }

  buildMidrise(block, rng) {
    const { x, z } = block;
    const rows = rng() > .5 ? 2 : 1;
    for (let r = 0; r < rows; r++) {
      const w = 20 + rng() * 16, d = 18 + rng() * 14, h = 12 + rng() * 24;
      const bx = x + (rows === 2 ? (r - .5) * 30 : (rng() - .5) * 24);
      const bz = z + (rng() - .5) * (66 - d - 4);
      this.addBuilding(bx, bz, w, d, h, 'midrise', Math.floor(rng() * 4));
      this.addRoofDetails(bx, bz, w, d, h + .2, rng);
      if (rng() > .6) this.addBalconies(bx, bz, w, d, h, rng);
    }
  }

  addBalconies(x, z, w, d, h, rng) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x5b5b58, roughness: .9 });
    const count = Math.floor((h - 4) / 4);
    const geo = new THREE.BoxGeometry(w * .55, .18, .9);
    for (let i = 0; i < count; i++) {
      const y = 4.5 + i * 4;
      if (y > h - 1) break;
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z + d / 2 + .45); this.root.add(m);
      const rail = new THREE.Mesh(new THREE.BoxGeometry(w * .55, .7, .06), this.glassMat);
      rail.position.set(x, y + .45, z + d / 2 + .88); this.root.add(rail);
    }
  }

  buildResidential(block, rng) { this.buildMidrise(block, rng); }

  buildSuburb(block, rng) {
    const { x, z } = block;
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const hx = x + (i - .5) * 31, hz = z + (j - .5) * 31;
      const w = 12 + rng() * 4, d = 10 + rng() * 4;
      const h = 3.6 + rng() * 2.4;
      const pal = Math.floor(rng() * 4);
      this.addBuilding(hx, hz, w, d, h, 'suburb', pal);
      // roof
      const roof = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 4), new THREE.MeshStandardMaterial({ color: [0x5b4237, 0x4a4a4a, 0x6b3d36, 0x454b48][pal], roughness: .92 }));
      roof.rotation.y = Math.PI / 4;
      roof.scale.set(w * .78, 2.6 + rng() * 1.2, d * .78);
      roof.position.set(hx, h + 1.45, hz);
      roof.castShadow = true;
      this.root.add(roof);
      // porch
      const porch = new THREE.Mesh(new THREE.BoxGeometry(3.2, .22, 2.2), this.woodMat);
      porch.position.set(hx + (rng() - .5) * 2, .55, hz + d / 2 + .9); this.root.add(porch);
      // garden
      const garden = new THREE.Mesh(new THREE.PlaneGeometry(10, 8), new THREE.MeshStandardMaterial({ color: 0x415d32, roughness: 1 }));
      garden.rotation.x = -Math.PI / 2; garden.position.set(hx + 8, .17, hz + 7); this.root.add(garden);
      // fence
      const fenceMat = this.woodMat;
      for (let f = 0; f < 5; f++) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(.16, .9, .16), fenceMat);
        post.position.set(hx + 3, .6, hz + 11 + f * 1.4); this.root.add(post);
      }
      // driveway
      const drive = new THREE.Mesh(new THREE.PlaneGeometry(4, 12), new THREE.MeshStandardMaterial({ color: 0x77756e, roughness: 1 }));
      drive.rotation.x = -Math.PI / 2; drive.position.set(hx + 5, .16, hz + 8); this.root.add(drive);
      if (rng() > .6) this.tree(hx + 10, hz + 9, .8 + rng() * .4);
    }
  }

  buildIndustrial(block, rng) {
    const { x, z } = block;
    const w = 44 + rng() * 12, d = 30 + rng() * 16, h = 8 + rng() * 6;
    const bx = x + (rng() - .5) * 8, bz = z + (rng() - .5) * 8;
    this.addBuilding(bx, bz, w, d, h, 'industrial', Math.floor(rng() * 3), { roofMat: this.roofMatDark });
    this.addRoofDetails(bx, bz, w, d, h + .2, rng);
    // loading dock
    const dock = new THREE.Mesh(new THREE.BoxGeometry(w * .7, 1.4, 3.2), this.concreteMat);
    dock.position.set(bx, .85, bz + d / 2 + 1.6); dock.castShadow = true; this.root.add(dock);
    // containers
    const colors = [0x8e3b32, 0x2e5f7a, 0x7c6a2e, 0x356b4a, 0x7a4a32];
    for (let i = 0; i < 4 + Math.floor(rng() * 5); i++) {
      const cw = 6, ch = 2.6, cd = 2.5;
      const cont = new THREE.Mesh(new THREE.BoxGeometry(cw, ch, cd), new THREE.MeshStandardMaterial({ color: pick(colors), roughness: .8, metalness: .3 }));
      cont.position.set(x - 24 + rng() * 48, .6 + (rng() > .8 ? ch : 0), z + 24 + rng() * 8);
      cont.rotation.y = rng() > .5 ? 0 : Math.PI / 2;
      cont.castShadow = true; this.root.add(cont);
    }
  }

  buildWaterfront(block, rng) {
    const { x, z } = block;
    const w = 22 + rng() * 18, d = 24 + rng() * 16, h = 22 + rng() * 44;
    const bx = x + (rng() - .5) * 18, bz = z + (rng() - .5) * 10;
    this.addBuilding(bx, bz, w, d, h, 'midrise', Math.floor(rng() * 4));
    this.addRoofDetails(bx, bz, w, d, h + .2, rng, h > 50 ? 'tower' : 'normal');
    this.addBalconies(bx, bz, w, d, h, rng);
  }

  buildPark(block, rng) {
    const { x, z } = block;
    block.isPark = true;
    // path
    const pathMat = new THREE.MeshStandardMaterial({ color: 0x9a8f7a, roughness: 1 });
    const p1 = new THREE.Mesh(new THREE.PlaneGeometry(6, 68), pathMat);
    p1.rotation.x = -Math.PI / 2; p1.position.set(x, .17, z); this.root.add(p1);
    const p2 = new THREE.Mesh(new THREE.PlaneGeometry(68, 6), pathMat);
    p2.rotation.x = -Math.PI / 2; p2.position.set(x, .171, z); this.root.add(p2);
    // pond
    const pond = new THREE.Mesh(new THREE.CircleGeometry(11, 32), new THREE.MeshStandardMaterial({ color: 0x1b4d63, roughness: .15, metalness: .5, transparent: true, opacity: .9 }));
    pond.rotation.x = -Math.PI / 2; pond.position.set(x - 14, .18, z + 15); this.root.add(pond);
    const fountain = new THREE.Group(); fountain.position.set(x + 15, .2, z - 14);
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.6, .8, 24), this.concreteMat); basin.position.y = .4; fountain.add(basin);
    const water = new THREE.Mesh(new THREE.CylinderGeometry(3.7, 3.7, .3, 24), new THREE.MeshStandardMaterial({ color: 0x4aa3c4, roughness: .12, metalness: .5 })); water.position.y = .82; fountain.add(water);
    const column = new THREE.Mesh(new THREE.CylinderGeometry(.4, .6, 2.4, 12), this.whiteMat); column.position.y = 1.9; fountain.add(column);
    this.root.add(fountain);
    for (let i = 0; i < 12; i++) {
      const a = rng() * TAU, r = 8 + rng() * 25;
      if (Math.abs(Math.cos(a) * r) < 5 || Math.abs(Math.sin(a) * r) < 5) continue;
      this.tree(x + Math.cos(a) * r, z + Math.sin(a) * r, .9 + rng() * .7);
    }
    for (let i = 0; i < 7; i++) {
      const a = rng() * TAU, r = 10 + rng() * 18;
      this.bench(x + Math.cos(a) * r, z + Math.sin(a) * r, -a + Math.PI / 2);
    }
    const stage = new THREE.Mesh(new THREE.BoxGeometry(12, .7, 7), this.woodMat);
    stage.position.set(x + 20, .55, z + 22); stage.castShadow = true; this.root.add(stage);
    const backdrop = new THREE.Mesh(new THREE.BoxGeometry(12, 4, .4), this.darkMat);
    backdrop.position.set(x + 20, 2.6, z + 25); this.root.add(backdrop);
    this.addPOI('park', 'Aurora Park', x, z, 30, { icon: 'park' });
  }

  tree(x, z, scale = 1) {
    if (!this._treeGeo) {
      this._treeGeo = {
        trunk: new THREE.CylinderGeometry(.22, .32, 3.2, 6),
        leaves: new THREE.IcosahedronGeometry(2.1, 0),
      };
      this._treeMat = new THREE.MeshStandardMaterial({ color: 0x2f4a26, roughness: 1 });
      this._trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3725, roughness: 1 });
      this._trees = [];
    }
    this._trees.push({ x, z, scale });
  }

  bench(x, z, rot) {
    if (!this._benches) this._benches = [];
    this._benches.push({ x, z, rot });
  }

  addPOI(type, name, x, z, radius, extra = {}) {
    const poi = { type, name, x, z, radius, ...extra };
    this.pois.push(poi);
    return poi;
  }

  addSign(text, x, y, z, rotY, color = '#0b3a5a') {
    const mat = new THREE.MeshBasicMaterial({ map: signTexture(text, color, '#eaf6ff'), transparent: true });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(6, 3), mat);
    m.position.set(x, y, z); m.rotation.y = rotY; this.root.add(m);
    return m;
  }

  buildHospital(block) {
    const { x, z } = block;
    this.addBuilding(x, z, 38, 30, 28, 'midrise', 3);
    this.addRoofDetails(x, z, 38, 30, 28.2, makeRng(99));
    // red cross
    const mat = new THREE.MeshBasicMaterial({ color: 0xff5b6c });
    const c1 = new THREE.Mesh(new THREE.BoxGeometry(4, 12, .3), mat); c1.position.set(x, 22, z + 15.2); this.root.add(c1);
    const c2 = new THREE.Mesh(new THREE.BoxGeometry(12, 4, .3), mat); c2.position.set(x, 22, z + 15.2); this.root.add(c2);
    const sign = this.addSign('HOSPITAL', x, 13, z + 15.3, 0, '#5c1020');
    const helipad = new THREE.Mesh(new THREE.CylinderGeometry(9, 9, .2, 24), new THREE.MeshStandardMaterial({ color: 0x3a3f42, roughness: .9 }));
    helipad.position.set(x + 24, .25, z + 20); this.root.add(helipad);
    const hMat = new THREE.MeshBasicMaterial({ color: 0xe8eef2 });
    const h1 = new THREE.Mesh(new THREE.BoxGeometry(1, .03, 5), hMat); h1.position.set(x + 24, .38, z + 20); this.root.add(h1);
    const h2 = new THREE.Mesh(new THREE.BoxGeometry(3, .03, 1), hMat); h2.position.set(x + 24, .38, z + 20); this.root.add(h2);
    this.helipad = new THREE.Vector3(x + 24, .4, z + 20);
    this.addPOI('hospital', 'Nova General Hospital', x, z, 32, { icon: 'hospital' });
  }

  buildPolice(block) {
    const { x, z } = block;
    this.addBuilding(x, z, 32, 26, 18, 'midrise', 3, { roofMat: this.roofMatDark });
    this.addRoofDetails(x, z, 32, 26, 18.2, makeRng(33));
    this.addSign('POLICE', x, 10.5, z + 13.2, 0, '#0b2a5a');
    const parking = new THREE.Mesh(new THREE.PlaneGeometry(26, 12), new THREE.MeshStandardMaterial({ color: 0x2c3034, roughness: 1 }));
    parking.rotation.x = -Math.PI / 2; parking.position.set(x, .17, z + 20); this.root.add(parking);
    this.addPOI('police', 'NCPD Central Precinct', x, z, 30, { icon: 'police' });
  }

  buildFireStation(block) {
    const { x, z } = block;
    this.addBuilding(x, z, 30, 24, 11, 'industrial', 0, { roofMat: this.roofMatDark });
    this.addSign('FIRE DEPT', x, 8, z + 12.2, 0, '#5c1015');
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x7a1e24, roughness: .8 });
    for (let i = -1; i <= 1; i++) {
      const door = new THREE.Mesh(new THREE.BoxGeometry(7, 7, .3), doorMat);
      door.position.set(x + i * 8, 3.7, z + 12.2); this.root.add(door);
    }
    this.addPOI('fire', 'Nova Fire Station 3', x, z, 28, { icon: 'fire' });
  }

  buildGarage(block) {
    const { x, z } = block;
    this.addBuilding(x, z, 30, 24, 9, 'industrial', 2, { roofMat: this.roofMatDark });
    this.addSign('AUTO GARAGE', x, 6.8, z + 12.2, 0, '#4a2b05');
    this.addPOI('garage', 'Apex Auto Garage', x, z - 2, 22, { icon: 'garage' });
  }

  buildDealership(block) {
    const { x, z } = block;
    // glass showroom
    this.addBuilding(x - 8, z, 34, 22, 8, 'downtown', 1, { roofMat: this.roofMatDark });
    const sign = this.addSign('NOVA MOTORS', x - 8, 10, z + 11.5, 0, '#1d4e7a');
    const lot = new THREE.Mesh(new THREE.PlaneGeometry(60, 22), new THREE.MeshStandardMaterial({ color: 0x30343a, roughness: .9 }));
    lot.rotation.x = -Math.PI / 2; lot.position.set(x, .17, z + 24); this.root.add(lot);
    this.addPOI('dealership', 'Nova Motors Dealership', x - 8, z + 8, 22, { icon: 'dealer' });
  }

  buildApartment(block) {
    const { x, z } = block;
    this.addBuilding(x, z - 4, 34, 26, 26, 'midrise', 0);
    this.addRoofDetails(x, z - 4, 34, 26, 26.2, makeRng(17));
    this.addBalconies(x, z - 4, 34, 26, 26, makeRng(19));
    this.addSign('THE HALE', x, 5.4, z + 10.5, 0, '#2b251e');
    this.addPOI('apartment', 'The Hale Apartments', x, z + 12, 18, { icon: 'home' });
  }

  buildShop(block) {
    const { x, z } = block;
    this.addBuilding(x, z, 28, 20, 7, 'midrise', 2);
    this.addSign('MARKET', x, 5, z + 10.2, 0, '#1b4a39');
    this.addPOI('shop', 'Corner Market', x, z + 12, 16, { icon: 'shop' });
  }

  buildOffice(block) {
    const { x, z } = block;
    this.addBuilding(x, z, 40, 30, 42, 'downtown', 0);
    this.addBuilding(x, z, 28, 20, 58, 'downtown', 1, { base: 42 });
    this.addRoofDetails(x, z, 28, 20, 100.2, makeRng(5), 'tower');
    this.addPOI('office', 'Meridian Tower', x, z, 20, { icon: 'office' });
  }

  buildHotel(block) {
    const { x, z } = block;
    this.addBuilding(x, z, 36, 28, 46, 'midrise', 3);
    this.addBalconies(x, z, 36, 28, 46, makeRng(21));
    this.addRoofDetails(x, z, 36, 28, 46.2, makeRng(22), 'tower');
    this.addSign('HOTEL AURORA', x, 5.5, z + 14.5, 0, '#2b3c52');
    this.addPOI('hotel', 'Hotel Aurora', x, z + 16, 18, { icon: 'hotel' });
  }

  buildFactory(block, rng) {
    const { x, z } = block;
    this.addBuilding(x, z, 52, 34, 15, 'industrial', 2, { roofMat: this.roofMatDark });
    for (let i = -1; i <= 1; i += 2) {
      const chim = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.5, 34, 12), new THREE.MeshStandardMaterial({ color: 0x8c8a83, roughness: .95 }));
      chim.position.set(x + i * 17, 17, z - 10); chim.castShadow = true; this.root.add(chim);
    }
    this.factorySmokePos = new THREE.Vector3(x, 34, z - 10);
    this.addPOI('factory', 'Northgate Works', x, z, 24, { icon: 'factory' });
  }

  buildSignals() {
    const nodes = [];
    for (let i = 0; i < GRID; i++) for (let j = 0; j < GRID; j++) {
      const central = Math.abs(i - 4) <= 3 && Math.abs(j - 4) <= 3;
      nodes.push({ i, j, x: NODE_POS(i), z: NODE_POS(j), hasLights: central });
    }
    this.nodes = nodes;
    this.nodeGrid = [];
    for (let i = 0; i < GRID; i++) { this.nodeGrid[i] = []; for (let j = 0; j < GRID; j++) this.nodeGrid[i][j] = nodes.find(n => n.i === i && n.j === j); }

    const poleGeo = new THREE.CylinderGeometry(.12, .16, 4.8, 6);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x3a3f44, roughness: .8, metalness: .4 });
    const lampGeo = new THREE.SphereGeometry(.19, 8, 6);
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lampPositions = [];
    const poles = [];
    const armGeo = new THREE.BoxGeometry(2.2, .12, .12);
    const arms = [];
    this.signalLampData = [];
    for (const n of nodes) {
      if (!n.hasLights) continue;
      const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
      for (const [sx, sz] of corners) {
        const px = n.x + sx * (HALF_ROAD + 1.3), pz = n.z + sz * (HALF_ROAD + 1.3);
        poles.push([px, 2.4, pz]);
        arms.push([px + (sx > 0 ? -1 : 1) * 1.1, 4.35, pz, sx > 0 ? 0 : Math.PI]);
        for (let k = 0; k < 3; k++) {
          const ly = 4.75 - k * .34;
          lampPositions.push([px + (sx > 0 ? -1.05 : 1.05), ly, pz]);
          this.signalLampData.push({ node: n, axis: sz === 0 ? 'x' : 'z', slot: k, index: lampPositions.length - 1 });
        }
      }
    }
    const poleMesh = new THREE.InstancedMesh(poleGeo, poleMat, poles.length);
    const tmp = new THREE.Object3D();
    poles.forEach(([x, y, z], i) => { tmp.position.set(x, y, z); tmp.updateMatrix(); poleMesh.setMatrixAt(i, tmp.matrix); });
    this.root.add(poleMesh);
    const armMesh = new THREE.InstancedMesh(armGeo, poleMat, arms.length);
    arms.forEach(([x, y, z, r], i) => { tmp.position.set(x, y, z); tmp.rotation.set(0, r, 0); tmp.updateMatrix(); armMesh.setMatrixAt(i, tmp.matrix); });
    this.root.add(armMesh);
    this.signalLampMesh = new THREE.InstancedMesh(lampGeo, lampMat, lampPositions.length);
    this.signalLampMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(lampPositions.length * 3), 3);
    lampPositions.forEach(([x, y, z], i) => {
      tmp.position.set(x, y, z); tmp.rotation.set(0, 0, 0); tmp.updateMatrix();
      this.signalLampMesh.setMatrixAt(i, tmp.matrix);
      this.signalLampMesh.setColorAt(i, new THREE.Color(0x111111));
    });
    this.root.add(this.signalLampMesh);
    this.signalNodes = nodes;
  }

  signalState(node, axis, time) {
    if (!node.hasLights) return 'green';
    const t = (time + (node.i * 1.7 + node.j * 2.3)) % 26;
    if (axis === 'x') {
      if (t < 9) return 'green';
      if (t < 11) return 'yellow';
      return 'red';
    }
    if (t < 12) return 'red';
    if (t < 22) return 'green';
    if (t < 24) return 'yellow';
    return 'red';
  }

  updateSignals(elapsed) {
    const colors = { red: new THREE.Color(0xff2b3e), yellow: new THREE.Color(0xffb12b), green: new THREE.Color(0x2bff9a), off: new THREE.Color(0x101316) };
    for (const data of this.signalLampData) {
      const state = this.signalState(data.node, data.axis, elapsed);
      const active = state === 'red' ? 0 : state === 'yellow' ? 1 : 2;
      let c;
      if (data.slot === active) c = colors[state];
      else c = colors.off;
      this.signalLampMesh.setColorAt(data.index, c);
    }
    this.signalLampMesh.instanceColor.needsUpdate = true;
  }

  buildParkingSpots(rng) {
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < 8; j++) {
        const z1 = NODE_POS(j) + 18 + rng() * 50;
        this.parkingSpots.push({ x: NODE_POS(i) + HALF_ROAD + 2.8, z: z1, heading: -Math.PI / 2 });
        this.parkingSpots.push({ x: NODE_POS(i) - HALF_ROAD - 2.8, z: z1, heading: Math.PI / 2 });
        const x1 = NODE_POS(j) + 18 + rng() * 50;
        this.parkingSpots.push({ x: x1, z: NODE_POS(i) + HALF_ROAD + 2.8, heading: Math.PI });
        this.parkingSpots.push({ x: x1, z: NODE_POS(i) - HALF_ROAD - 2.8, heading: 0 });
      }
    }
  }

  finalizeProps() {
    // instanced trees / benches accumulated during block generation
    if (this._trees && this._trees.length) {
      const n = this._trees.length;
      const trunk = new THREE.InstancedMesh(this._treeGeo.trunk, this._trunkMat, n);
      const leaves = new THREE.InstancedMesh(this._treeGeo.leaves, this._treeMat, n);
      const tmp = new THREE.Object3D();
      this._trees.forEach((t, i) => {
        tmp.position.set(t.x, 1.6 * t.scale + .15, t.z);
        tmp.scale.setScalar(t.scale); tmp.updateMatrix(); trunk.setMatrixAt(i, tmp.matrix);
        tmp.position.set(t.x, 4.3 * t.scale + .15, t.z);
        tmp.scale.set(t.scale * (1 + Math.random() * .3), t.scale * (1 + Math.random() * .4), t.scale * (1 + Math.random() * .3));
        tmp.rotation.set(Math.random(), Math.random() * 3, Math.random()); tmp.updateMatrix();
        leaves.setMatrixAt(i, tmp.matrix);
      });
      trunk.castShadow = true; leaves.castShadow = true;
      this.root.add(trunk, leaves);
    }
    if (this._benches && this._benches.length) {
      const benchGeo = new THREE.BoxGeometry(2.2, .16, .65);
      const backGeo = new THREE.BoxGeometry(2.2, .5, .12);
      const legGeo = new THREE.BoxGeometry(.14, .5, .55);
      const bm = new THREE.InstancedMesh(benchGeo, this.woodMat, this._benches.length);
      const bbm = new THREE.InstancedMesh(backGeo, this.woodMat, this._benches.length);
      const lm = new THREE.InstancedMesh(legGeo, this.metalMat, this._benches.length * 2);
      const tmp = new THREE.Object3D();
      this._benches.forEach((b, i) => {
        tmp.position.set(b.x, .72, b.z); tmp.rotation.set(0, b.rot, 0); tmp.updateMatrix(); bm.setMatrixAt(i, tmp.matrix);
        tmp.position.set(b.x - Math.sin(b.rot) * .26, 1.0, b.z - Math.cos(b.rot) * .26); tmp.updateMatrix(); bbm.setMatrixAt(i, tmp.matrix);
        tmp.position.set(b.x - Math.cos(b.rot) * .8, .38, b.z + Math.sin(b.rot) * .8); tmp.updateMatrix(); lm.setMatrixAt(i * 2, tmp.matrix);
        tmp.position.set(b.x + Math.cos(b.rot) * .8, .38, b.z + Math.sin(b.rot) * .8); tmp.updateMatrix(); lm.setMatrixAt(i * 2 + 1, tmp.matrix);
      });
      this.root.add(bm, bbm, lm);
    }
  }

  updateLighting(hour, weather, dt) {
    this.hour = hour;
    const day = Math.max(0, Math.sin((hour - 6) / 24 * TAU));
    const night = clamp(1 - Math.max(0, Math.sin((hour - 5.5) / 24 * TAU)) * 2.2, 0, 1);
    this.night = night;
    this.weather = weather;
    const storm = weather === 'storm' ? 1 : weather === 'rain' ? .7 : weather === 'snow' ? .55 : 0;
    const dim = 1 - storm * .35;
    if (this.sun) {
      const sunAngle = (hour / 24) * TAU - Math.PI / 2;
      this.sun.position.set(Math.cos(sunAngle) * 700, Math.sin(sunAngle) * 700, 260);
      this.sun.intensity = clamp(Math.sin((hour - 5.8) / 12.4 * Math.PI) * 2.6, 0, 2.6) * dim;
      this.sun.color.setHSL(0.09 + day * .02, .45, .55 + day * .25);
    }
    this.hemi.intensity = lerp(0.2, 0.7, day) * dim;
    this.ambient.intensity = lerp(0.18, 0.32, day);
    const glow = night * 1.9 + (storm > 0 ? .15 : 0);
    for (const m of this.facadeMaterials) m.emissiveIntensity = 0.015 + glow * 0.95;
    if (this.lampGlow) {
      this.lampGlow.material.opacity = 0.22 + night * 0.78;
      this.lampGlow.material.size = 6 + night * 2;
    }
    if (this.crownMat) this.crownMat.emissiveIntensity = .2 + night * 2.4;
    if (this.sky) {
      this.sky.material.uniforms.night.value = night;
      this.sky.material.uniforms.storm.value = storm;
      this.sky.material.uniforms.sunDir.value.copy(this.sun.position).normalize();
    }
    if (this.stars) this.stars.material.opacity = clamp(night * 1.1 - .15, 0, .95);
    if (this.water) this.water.material.uniforms.night.value = night;
    if (this.moon) this.moon.material.opacity = night * .95;
    if (this.cloudSpriteMat) this.cloudSpriteMat.color.setScalar(lerp(1.1, .18, night) * (1 - storm * .25));
    document.body.dataset.night = night > .55 ? '1' : '0';
  }

  update(dt, elapsed, playerPos) {
    this.updateSignals(elapsed);
    if (this.water) {
      this.water.material.uniforms.time.value = elapsed;
    }
    for (const c of this.clouds) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 900) c.position.x = -900;
      c.position.z += c.userData.speed * dt * .1;
      if (c.position.z > 700) c.position.z = -700;
    }
    if (this.lampGlow) this.lampGlow.rotation.y += 0;
    if (this.stars) this.stars.rotation.y = elapsed * .002;
    for (const a of this.animated) {
      if (a.type === 'beacon') a.mesh.material = this.warmMat;
    }
    if (this.monorail) this.monorail.update(dt, elapsed);
    if (this.rail) this.rail.update(dt, elapsed);
    if (this.rail2) this.rail2.update(dt, elapsed);
    if (this.islandRail) this.islandRail.update(dt, elapsed);
    if (this.militaryRail) this.militaryRail.update(dt, elapsed);
    if (this.freightRail) this.freightRail.update(dt, elapsed);
    if (this.radar) this.radar.rotation.y += dt * .35;
    if (this.militaryFlag) this.militaryFlag.rotation.y = Math.sin(elapsed * 1.7) * .15;
    for (const a of this.airTraffic) a.update(dt, elapsed);
    if (this.lighthouse) {
      const sweep = Math.sin(elapsed * .8) * .5 + .5;
      this.lighthouse.light.intensity = this.night > .4 ? 2.2 + sweep * 2.2 : .4;
      this.lighthouse.lamp.material.color.setHex(this.night > .4 ? 0xfff2ba : 0x8a8468);
    }
    if (this.highwayCars.length) {
      for (const c of this.highwayCars) {
        c.position.z += c.userData.speed * dt;
        if (c.position.z > 700) { c.position.z = -700; c.position.x = c.userData.lane; }
      }
    }
    this.updateFactorySmoke(dt, elapsed);
    this.updateFireflies(dt, elapsed);
  }

  updateFactorySmoke(dt, elapsed) {
    if (!this.factorySmokePos || !this.smokeParticles) return;
    const p = this.smokeParticles;
    p.userData.t = (p.userData.t || 0) + dt;
    const pos = p.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) + dt * (2.2 + (i % 5) * .3);
      let x = pos.getX(i) + dt * .55;
      let z = pos.getZ(i) + Math.sin(elapsed * .6 + i) * dt * .2;
      if (y > 50) { y = 0; x = this.factorySmokePos.x + (Math.random() - .5) * 2; z = this.factorySmokePos.z + (Math.random() - .5) * 2; }
      pos.setXYZ(i, x, y, z);
    }
    pos.needsUpdate = true;
  }

  updateFireflies(dt, elapsed) {
    if (!this.fireflyPoints) return;
    this.fireflyPoints.material.opacity = (this.night > .5 ? .8 : 0) * (this.weather === 'clear' ? 1 : .15);
    this.fireflyPoints.position.y = .6 + Math.sin(elapsed * .8) * .1;
  }

  districtAt(x, z) {
    for (const d of this.islands || []) {
      const dx = (x - d.x) / d.rx, dz = (z - d.z) / d.rz;
      if (dx * dx + dz * dz < 1) return d.name;
    }
    const bi = Math.floor((x + CITY_EXTENT) / SPACING);
    const bj = Math.floor((z + CITY_EXTENT) / SPACING);
    const b = this.blocks.find(b => b.bi === bi && b.bj === bj);
    if (b) return this.districtName(b.district);
    if (z > 420) return 'NOVA HARBOR';
    if (x > 420) return 'NOVA AIRFIELD';
    if (z < -400 || x < -400) return 'OUTSKIRTS';
    return 'NOVA CITY';
  }

  isLand(x, z) {
    if (z < 486) return true;
    for (const d of this.islands || []) {
      const dx = (x - d.x) / d.rx, dz = (z - d.z) / d.rz;
      if (dx * dx + dz * dz < 1.03) return true;
    }
    for (const b of this.bridges || []) {
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) return true;
    }
    return false;
  }

  isWater(x, z) {
    return !this.isLand(x, z);
  }

  districtName(d) {
    return {
      downtown: 'DOWNTOWN', midtown: 'MIDTOWN', industrial: 'INDUSTRIAL', suburb: 'PINE HILLS',
      waterfront: 'HARBORFRONT', residential: 'WEST END', park: 'AURORA PARK', airport: 'AIRFIELD',
    }[d] || 'NOVA CITY';
  }

  collideCircle(x, z, r) {
    let hit = null;
    for (const b of this.spatial.query(x, z, r + 2)) {
      if (b.type !== 'building') continue;
      const cx = clamp(x, b.minX, b.maxX), cz = clamp(z, b.minZ, b.maxZ);
      const dx = x - cx, dz = z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        const d = Math.sqrt(d2) || 0.0001;
        hit = { nx: dx / d, nz: dz / d, pen: r - d, box: b };
        break;
      }
    }
    return hit;
  }

  nearestPOI(x, z, radius = 999, types = null) {
    let best = null, bd = radius;
    for (const p of this.pois) {
      if (types && !types.includes(p.type)) continue;
      const d = Math.hypot(x - p.x, z - p.z);
      if (d < bd) { bd = d; best = p; }
    }
    return best ? { poi: best, dist: bd } : null;
  }

  nearestNode(x, z) {
    let best = null, bd = Infinity;
    for (const n of this.nodes) {
      const d = Math.hypot(x - n.x, z - n.z);
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  }

  isOnRoad(x, z) {
    for (let i = 0; i < GRID; i++) {
      if (Math.abs(x - NODE_POS(i)) < HALF_ROAD) return true;
      if (Math.abs(z - NODE_POS(i)) < HALF_ROAD) return true;
    }
    for (const r of this.islandRoads || []) {
      if (Math.abs(x - r.x) <= r.w / 2 && Math.abs(z - r.z) <= r.d / 2) return true;
    }
    for (const b of this.bridges || []) {
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) return true;
    }
    return false;
  }
}
