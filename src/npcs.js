import * as THREE from 'three';
import { clamp, lerp, lerpAngle, normAngle, rand, pick, chance, TAU, formatMoney } from './utils.js';
import { NODE_POS, GRID, SPACING } from './city.js';

const SKIN = [0xc08a63, 0x8c5c3c, 0xe0b28c, 0x6b4230, 0xa8724f, 0xd9a07a, 0x5c3826];
const JACKETS = [0x2b3a4d, 0x6b2d35, 0x344a3a, 0x51465c, 0x23262c, 0x8c6b3d, 0xa8b0b5, 0x3e5f80, 0x7a3e52, 0x4d5547];
const PANTS = [0x222a33, 0x2c2f36, 0x3b3b40, 0x4a4136, 0x22262c, 0x5a5d60, 0x1b2026];
const HAIR = [0x1e1611, 0x3b2a1d, 0x6a4a2c, 0x9a7a4a, 0x151515, 0x777777];

export class PedestrianSystem {
  constructor(game) {
    this.game = game;
    this.count = 140;
    this.peds = [];
    this.parts = {};
    this.dummy = new THREE.Object3D();
    this.local = new THREE.Object3D();
    this.mat4 = new THREE.Matrix4();
    this.initMeshes();
    this.spawn();
    this.scanTimer = 0;
  }

  initMeshes() {
    const capacity = this.count;
    const geo = {
      torso: new THREE.BoxGeometry(.42, .64, .26),
      head: new THREE.SphereGeometry(.172, 10, 8),
      legL: new THREE.BoxGeometry(.15, .72, .18),
      legR: new THREE.BoxGeometry(.15, .72, .18),
      armL: new THREE.BoxGeometry(.13, .62, .15),
      armR: new THREE.BoxGeometry(.13, .62, .15),
      hair: new THREE.SphereGeometry(.177, 8, 6, 0, TAU, 0, Math.PI * .55),
    };
    const white = new THREE.MeshStandardMaterial({ vertexColors: false, roughness: .85 });
    this.meshMats = {
      torso: new THREE.MeshStandardMaterial({ roughness: .85 }),
      head: new THREE.MeshStandardMaterial({ roughness: .7 }),
      leg: new THREE.MeshStandardMaterial({ roughness: .9 }),
      arm: new THREE.MeshStandardMaterial({ roughness: .85 }),
      hair: new THREE.MeshStandardMaterial({ roughness: .93 }),
    };
    for (const k of Object.keys(geo)) {
      const mesh = new THREE.InstancedMesh(geo[k], this.meshMats[k === 'head' || k === 'hair' ? 'head' : k.startsWith('leg') ? 'leg' : k.startsWith('arm') ? 'arm' : k === 'hair' ? 'hair' : 'torso'], capacity);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.castShadow = k !== 'hair';
      mesh.frustumCulled = false;
      this.game.scene.add(mesh);
      this.parts[k] = mesh;
    }
    // per instance colors
    for (const ped of []) {}
    for (const mesh of Object.values(this.parts)) {
      for (let i = 0; i < capacity; i++) mesh.setColorAt(i, new THREE.Color(0xffffff));
      mesh.instanceColor.needsUpdate = true;
    }
  }

  colorFor(ped) {
    const c = new THREE.Color();
    for (let i = 0; i < this.count; i++) {
      const p = this.peds[i];
      if (!p) continue;
      this.parts.torso.setColorAt(i, new THREE.Color(p.colors.jacket));
      this.parts.armL.setColorAt(i, new THREE.Color(p.colors.jacket));
      this.parts.armR.setColorAt(i, new THREE.Color(p.colors.jacket));
      this.parts.head.setColorAt(i, new THREE.Color(p.colors.skin));
      this.parts.hair.setColorAt(i, new THREE.Color(p.colors.hair));
      this.parts.legL.setColorAt(i, new THREE.Color(p.colors.pants));
      this.parts.legR.setColorAt(i, new THREE.Color(p.colors.pants));
    }
    for (const mesh of Object.values(this.parts)) mesh.instanceColor.needsUpdate = true;
  }

  spawn() {
    const c = this.game.city;
    for (let i = 0; i < this.count; i++) {
      let ped;
      if (i < 22) ped = this.makeCrosser(i);
      else if (i < 34) ped = this.makeIdler(i);
      else ped = this.makeWalker(i);
      ped.index = i;
      ped.colors = { jacket: pick(JACKETS), pants: pick(PANTS), skin: pick(SKIN), hair: pick(HAIR) };
      ped.scale = rand(.9, 1.06);
      ped.phase = rand(0, TAU);
      ped.speed = rand(.85, 1.5);
      ped.idleTimer = rand(0, 3);
      ped.state = ped.type === 'idler' ? 'idle' : 'walk';
      ped.fleeTimer = 0;
      ped.downTimer = 0;
      ped.talkTimer = 0;
      ped.pos = new THREE.Vector3(ped.x, .18, ped.z);
      ped.heading = rand(0, TAU);
      this.peds.push(ped);
    }
    this.colorFor();
  }

  randomSidewalkPoint() {
    const vertical = Math.random() > .5;
    const line = Math.floor(Math.random() * GRID);
    const dir = Math.random() > .5 ? 1 : -1;
    const start = 1 + Math.floor(Math.random() * 6);
    const offset = Math.random() > .5 ? 9.3 : 9.3;
    if (vertical) {
      const x = NODE_POS(line) - dir * offset;
      const z = NODE_POS(start) + rand(4, 60);
      return { x, z, axis: 'z', line, dir, i: line, j: start, t: rand(4, 60) };
    }
    const z = NODE_POS(line) + dir * offset;
    const x = NODE_POS(start) + rand(4, 60);
    return { x, z, axis: 'x', line, dir, i: start, j: line, t: rand(4, 60) };
  }

  makeWalker(i) {
    const p = this.randomSidewalkPoint();
    return {
      type: 'walker', x: p.x, z: p.z, axis: p.axis, dir: p.dir, line: p.line,
      ni: p.i, nj: p.j, t: p.t, wait: 0, crossing: false,
    };
  }

  makeCrosser(i) {
    const vertical = Math.random() > .5;
    const line = 1 + Math.floor(Math.random() * 7);
    const node = 1 + Math.floor(Math.random() * 7);
    const side = Math.random() > .5 ? 1 : -1;
    const axis = vertical ? 'x' : 'z';
    const x = vertical ? NODE_POS(node) + side * 9.3 : NODE_POS(line) + rand(-3, 3);
    const z = vertical ? NODE_POS(line) + 10.4 : NODE_POS(node) + side * 9.3;
    const endX = vertical ? NODE_POS(node) - side * 9.3 : x;
    const endZ = vertical ? z : NODE_POS(node) - side * 9.3;
    return {
      type: 'crosser', x, z, axis, line, dir: side, ni: node, nj: line,
      startX: x, startZ: z, endX, endZ, t: 0, wait: rand(0, 4), crossing: false, side,
      originNode: node, originLine: line, crossVertical: vertical,
    };
  }

  makeIdler(i) {
    const park = { x: -24, z: -24 };
    const a = rand(0, TAU), r = rand(4, 28);
    return {
      type: 'idler', x: park.x + Math.cos(a) * r, z: park.z + Math.sin(a) * r,
      axis: 'z', line: 4, dir: 1, ni: 4, nj: 4, t: 0, wait: rand(2, 12), home: true,
    };
  }

  nextWalkerTarget(p) {
    // choose a new direction at the upcoming node
    const options = [];
    for (const d of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      if (d[0] === -p.dir && p.axis === 'x') continue;
      if (d[1] === -p.dir && p.axis === 'z') continue;
      const ni = p.ni + d[0], nj = p.nj + d[1];
      if (ni < 0 || ni > GRID - 1 || nj < 0 || nj > GRID - 1) continue;
      options.push(d);
    }
    if (!options.length) {
      p.dir = -p.dir;
      return;
    }
    const straight = options.find(d => (p.axis === 'x' ? d[0] === p.dir : d[1] === p.dir));
    let chosen;
    if (straight && Math.random() < .68) chosen = straight;
    else chosen = pick(options);
    if (chosen[0] !== 0) { p.axis = 'x'; p.dir = chosen[0]; p.ni = p.ni + chosen[0]; }
    else { p.axis = 'z'; p.dir = chosen[1]; p.nj = p.nj + chosen[1]; }
    p.t = 0;
    p.wait = Math.random() < .2 ? rand(1, 4) : 0;
    p.line = p.axis === 'z' ? p.ni : p.nj;
  }

  targetPoint(p) {
    const off = 9.3;
    if (p.axis === 'z') {
      const x = NODE_POS(p.ni) - p.dir * off;
      const z = NODE_POS(p.nj) + p.dir * p.t;
      return { x, z };
    }
    const z = NODE_POS(p.nj) + p.dir * off;
    const x = NODE_POS(p.ni) + p.dir * p.t;
    return { x, z };
  }

  update(dt, elapsed, player) {
    const px = player.pos.x, pz = player.pos.z;
    const pv = player.vehicle;
    for (const p of this.peds) {
      const dx = p.x - px, dz = p.z - pz;
      const distToPlayer = Math.hypot(dx, dz);
      if (p.state === 'down') {
        p.downTimer -= dt;
        if (p.downTimer <= 0) { p.state = 'walk'; p.x += rand(-1, 1); p.z += rand(-1, 1); }
        this.writePed(p, elapsed, dt, true);
        continue;
      }
      // flee from nearby fast vehicles / danger
      if (p.fleeTimer > 0) {
        p.fleeTimer -= dt;
        p.x += Math.sin(p.heading) * 5.2 * dt;
        p.z += Math.cos(p.heading) * 5.2 * dt;
        p.state = 'flee';
        p.phase += dt * 16;
        this.writePed(p, elapsed, dt);
        continue;
      }
      const nearestVehicle = this.game.vehicles?.playerVehicle;
      if (nearestVehicle) {
        const vd = Math.hypot(nearestVehicle.pos.x - p.x, nearestVehicle.pos.z - p.z);
        if (vd < 9 && Math.abs(nearestVehicle.speed) > 4.5) {
          p.heading = Math.atan2(p.x - nearestVehicle.pos.x, p.z - nearestVehicle.pos.z);
          p.fleeTimer = rand(1.2, 2.4);
          if (Math.random() < .2) this.game.notify?.('Pedestrians scatter from the road', 'warn');
          continue;
        }
      }
      if (p.type === 'crosser') {
        this.updateCrosser(p, dt, elapsed);
      } else if (p.type === 'idler') {
        p.wait -= dt;
        if (p.wait <= 0) {
          p.wait = rand(2, 7);
          if (Math.random() < .45 && p.home) {
            // wander a little in the park
            const park = { x: -24, z: -24 };
            const a = rand(0, TAU), r = rand(4, 28);
            p.tx = park.x + Math.cos(a) * r; p.tz = park.z + Math.sin(a) * r; p.state = 'walk';
          } else p.state = 'idle';
        }
        if (p.state === 'walk' && p.tx !== undefined) {
          const d = Math.hypot(p.tx - p.x, p.tz - p.z);
          if (d > .4) {
            const h = Math.atan2(p.tx - p.x, p.tz - p.z);
            p.heading = lerpAngle(p.heading, h, dt * 5);
            p.x += Math.sin(p.heading) * 1.1 * dt; p.z += Math.cos(p.heading) * 1.1 * dt;
            p.phase += dt * 6;
          } else { p.state = 'idle'; p.wait = rand(2, 8); }
        }
      } else {
        this.updateWalker(p, dt);
      }
      // idle pause
      if (p.wait > 0) {
        p.wait -= dt;
        p.phase = lerp(p.phase, 0, dt);
        if (Math.random() < .002) p.heading += rand(-.5, .5);
        this.writePed(p, elapsed, dt);
        continue;
      }
      if (p.state === 'walk' || p.state === 'flee') {
        p.phase += dt * (p.type === 'crosser' ? 8 : 7) * (p.fleeTimer > 0 ? 1.6 : 1);
        p.x += Math.sin(p.heading) * p.speed * dt;
        p.z += Math.cos(p.heading) * p.speed * dt;
      } else if (p.state === 'idle') {
        p.phase += dt * .8;
      }
      this.writePed(p, elapsed, dt);
    }
    // periodic vehicle collision with people
    this.scanTimer -= dt;
    if (this.scanTimer <= 0) {
      this.scanTimer = .18;
      this.checkVehicleHits();
    }
  }

  updateWalker(p, dt) {
    const target = this.targetPoint(p);
    const dx = target.x - p.x, dz = target.z - p.z;
    const d = Math.hypot(dx, dz);
    p.heading = lerpAngle(p.heading, Math.atan2(dx, dz), dt * 4.5);
    p.state = 'walk';
    p.t += p.speed * dt * .72;
    if (p.t > 96) {
      p.t = 0;
      this.nextWalkerTarget(p);
    }
    // collision avoid buildings (sidewalk is safe)
  }

  updateCrosser(p, dt, elapsed) {
    if (p.crossing) {
      const dx = p.endX - p.x, dz = p.endZ - p.z;
      const d = Math.hypot(dx, dz);
      p.heading = lerpAngle(p.heading, Math.atan2(dx, dz), dt * 7);
      p.state = 'walk';
      p.x += Math.sin(p.heading) * 1.65 * dt;
      p.z += Math.cos(p.heading) * 1.65 * dt;
      if (d < .5) {
        p.crossing = false;
        p.wait = rand(2.5, 7);
        const sx = p.startX, sz = p.startZ;
        p.startX = p.endX; p.startZ = p.endZ;
        p.endX = sx; p.endZ = sz;
      }
    } else {
      p.wait -= dt;
      if (p.wait > 0) return;

      const node = this.game.city.nodeGrid?.[p.originNode]?.[p.originLine];
      const roadAxis = p.crossVertical ? 'z' : 'x';
      const signal = node ? this.game.city.signalState(node, roadAxis, elapsed) : 'green';
      if (signal !== 'green') { p.wait = .45; return; }

      let approach = false;
      const vehicles = this.game.vehicles?.vehicles || [];
      for (const v of vehicles) {
        if (v.disposed || !v.pos) continue;
        const dvx = v.pos.x - p.x, dvz = v.pos.z - p.z;
        const dist = Math.hypot(dvx, dvz);
        if (dist < 16 && Math.abs(v.speed) > 3.5) {
          const hx = Math.sin(v.heading || 0), hz = Math.cos(v.heading || 0);
          const closing = (p.x - v.pos.x) * hx + (p.z - v.pos.z) * hz;
          if (closing > 0) { approach = true; break; }
        }
      }
      if (approach) { p.wait = .35; return; }
      p.crossing = true;
    }
  }

  writePed(p, elapsed, dt, downed = false) {
    const idx = p.index;
    const y = .18;
    this.dummy.position.set(p.x, y, p.z);
    this.dummy.rotation.set(0, p.heading, 0);
    if (downed) { this.dummy.rotation.z = Math.PI / 2; this.dummy.position.y = .3; }
    this.dummy.updateMatrix();
    const swing = Math.sin(p.phase) * .55;
    const armSwing = -swing * .75;
    const sc = p.scale;
    const parts = this.parts;
    const local = this.local;
    const m = this.mat4;
    const set = (mesh, lx, ly, lz, rx = 0, ry = 0, rz = 0, sx = sc, sy = sc, sz = sc) => {
      local.position.set(lx, ly, lz); local.rotation.set(rx, ry, rz); local.scale.set(sx, sy, sz); local.updateMatrix();
      m.multiplyMatrices(this.dummy.matrix, local.matrix);
      mesh.setMatrixAt(idx, m);
    };
    if (downed) {
      set(parts.torso, 0, 1.1, 0); set(parts.head, 0, 1.6, 0); set(parts.hair, 0, 1.62, 0);
      set(parts.armL, -.3, 1.32, 0, .3); set(parts.armR, .3, 1.32, 0, -.3);
      set(parts.legL, -.12, .52, .1); set(parts.legR, .12, .52, -.1);
    } else {
      const sitting = p.state === 'idle' && p.type === 'idler' && p.wait > 0 && Math.random() < 0;
      const hipY = .88 * sc;
      set(parts.torso, 0, 1.18 * sc, 0);
      set(parts.head, 0, 1.66 * sc, 0);
      set(parts.hair, 0, 1.674 * sc, -.005);
      set(parts.legL, -.12 * sc, .44 * sc, Math.sin(p.phase) * .24 * sc, Math.sin(p.phase) * .5);
      set(parts.legR, .12 * sc, .44 * sc, -Math.sin(p.phase) * .24 * sc, -Math.sin(p.phase) * .5);
      set(parts.armL, -.3 * sc, 1.28 * sc, -Math.sin(p.phase) * .2 * sc, armSwing);
      set(parts.armR, .3 * sc, 1.28 * sc, Math.sin(p.phase) * .2 * sc, -armSwing);
    }
    for (const mesh of Object.values(parts)) mesh.instanceMatrix.needsUpdate = true;
  }

  checkVehicleHits() {
    const pv = this.game.vehicles?.playerVehicle;
    if (!pv) return;
    if (Math.abs(pv.speed) < 2) return;
    const len = pv.cfg.len;
    const f = { x: Math.sin(pv.heading), z: Math.cos(pv.heading) };
    for (const p of this.peds) {
      if (p.state === 'down') continue;
      const rx = p.x - pv.pos.x, rz = p.z - pv.pos.z;
      const along = rx * f.x + rz * f.z;
      const side = Math.abs(rx * f.z - rz * f.x);
      if (Math.abs(along) < len * .55 && side < pv.cfg.wid * .55) {
        p.state = 'down'; p.downTimer = rand(5, 8);
        p.heading = pv.heading + rand(-1, 1);
        this.game.onPedHit?.(p, pv);
      }
    }
  }

  anyInFront(x, z, heading, dist) {
    const fx = Math.sin(heading), fz = Math.cos(heading);
    for (const p of this.peds) {
      if (p.state === 'down') continue;
      const dx = p.x - x, dz = p.z - z;
      if (Math.abs(dx) > dist || Math.abs(dz) > dist) continue;
      const d = Math.hypot(dx, dz);
      if (d < dist && (dx * fx + dz * fz) / Math.max(d, .001) > .55) return p;
    }
    return null;
  }

  nearest(x, z, radius = 3) {
    let best = null, bd = radius;
    for (const p of this.peds) {
      if (p.state === 'down') continue;
      const d = Math.hypot(p.x - x, p.z - z);
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }

  panic(x, z, radius = 25) {
    for (const p of this.peds) {
      if (Math.hypot(p.x - x, p.z - z) < radius) {
        p.fleeTimer = rand(2, 4);
        p.heading = Math.atan2(p.x - x, p.z - z);
      }
    }
  }

  gather(x, z, radius = 18) {
    for (const p of this.peds) {
      if (this.peds.indexOf(p) % 5 !== 0) continue;
      if (Math.hypot(p.x - x, p.z - z) < radius) {
        const a = rand(0, TAU), r = rand(4, 12);
        p.tx = x + Math.cos(a) * r; p.tz = z + Math.sin(a) * r; p.state = 'walk'; p.wait = 0;
        p.heading = Math.atan2(p.tx - p.x, p.tz - p.z);
      }
    }
  }
}
