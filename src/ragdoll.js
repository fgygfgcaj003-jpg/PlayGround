import * as THREE from 'three';
import { heightAt, trenchDepthAt } from './world.js';
import { toonMat, PALETTE } from './models.js';
import { clamp } from './util.js';

const P = { PELVIS: 0, CHEST: 1, HEAD: 2, SHL: 3, ELL: 4, HNDL: 5, SHR: 6, ELR: 7, HNDR: 8, HIPL: 9, KNEL: 10, FOOTL: 11, HIPR: 12, KNER: 13, FOOTR: 14 };
const LINKS = [
  [P.PELVIS, P.CHEST, 0.34], [P.CHEST, P.HEAD, 0.24],
  [P.CHEST, P.SHL, 0.22], [P.SHL, P.ELL, 0.3], [P.ELL, P.HNDL, 0.3],
  [P.CHEST, P.SHR, 0.22], [P.SHR, P.ELR, 0.3], [P.ELR, P.HNDR, 0.3],
  [P.PELVIS, P.HIPL, 0.16], [P.HIPL, P.KNEL, 0.44], [P.KNEL, P.FOOTL, 0.42],
  [P.PELVIS, P.HIPR, 0.16], [P.HIPR, P.KNER, 0.44], [P.KNER, P.FOOTR, 0.42],
  // cross-bracing so the ragdoll keeps its shape
  [P.SHL, P.SHR, 0.42], [P.HIPL, P.HIPR, 0.3], [P.CHEST, P.PELVIS, 0.34],
  [P.CHEST, P.HIPL, 0.42], [P.CHEST, P.HIPR, 0.42], [P.PELVIS, P.SHL, 0.36], [P.PELVIS, P.SHR, 0.36],
  [P.HEAD, P.CHEST, 0.24], [P.HIPL, P.KNER, 0.3], [P.HIPR, P.KNEL, 0.3],
];

const geoms = new Map();
function segGeo(r, len) {
  const key = `${r.toFixed(2)},${len.toFixed(2)}`;
  if (!geoms.has(key)) geoms.set(key, new THREE.CapsuleGeometry(r, Math.max(0.02, len - r * 2), 4, 8));
  return geoms.get(key);
}

export class Ragdoll {
  constructor(soldier, team, impulse = new THREE.Vector3(), scene) {
    this.team = team;
    this.scene = scene;
    this.age = 0;
    this.removed = false;
    const soldierGroup = soldier.group || soldier;
    const bones = soldierGroup.userData.bones;
    soldierGroup.updateMatrixWorld(true);
    const wp = (b) => b.getWorldPosition(new THREE.Vector3());
    const positions = [
      wp(bones.root),
      wp(bones.spine).add(new THREE.Vector3(0, 0.12, 0)),
      wp(bones.head).add(new THREE.Vector3(0, 0.08, 0)),
      wp(bones.armL), wp(bones.foreL), wp(bones.handL),
      wp(bones.armR), wp(bones.foreR), wp(bones.handR),
      wp(bones.legL), wp(bones.shinL), wp(bones.footL),
      wp(bones.legR), wp(bones.shinR), wp(bones.footR),
    ];
    this.points = positions.map((p, i) => {
      const jitter = new THREE.Vector3((Math.random() - 0.5) * 0.08, (Math.random() - 0.5) * 0.08, (Math.random() - 0.5) * 0.08);
      return {
        pos: p.clone().add(jitter),
        prev: p.clone().add(jitter),
        radius: i === P.HEAD ? 0.12 : 0.09,
      };
    });
    // seed velocity from impact
    const imp = impulse.clone().multiplyScalar(0.55);
    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];
      const v = imp.clone().add(new THREE.Vector3((Math.random() - 0.5) * 1.4, Math.random() * 0.9, (Math.random() - 0.5) * 1.4));
      p.prev.copy(p.pos).sub(v.multiplyScalar(0.016));
    }
    this.constraints = LINKS.map(([a, b, k]) => ({ a, b, k }));
    this.group = new THREE.Group();
    this.group.position.set(0, 0, 0);
    scene.add(this.group);

    const cloth = team === 'british' ? PALETTE.khaki : PALETTE.fieldgrey;
    const clothDark = team === 'british' ? PALETTE.khakiDark : PALETTE.fieldgreyDark;
    this.meshes = [];
    const mkSeg = (a, b, r, color, baseLen) => {
      const mesh = new THREE.Mesh(segGeo(r, baseLen), toonMat(color));
      mesh.castShadow = true; mesh.receiveShadow = true;
      mesh.userData = { a, b, baseLen, r };
      this.group.add(mesh);
      this.meshes.push(mesh);
      return mesh;
    };
    const d = (a, b) => this.points[a].pos.distanceTo(this.points[b].pos);
    // torso (pelvis -> chest)
    mkSeg(P.PELVIS, P.CHEST, 0.19, cloth, Math.max(0.36, d(P.PELVIS, P.CHEST) + 0.2));
    // head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), toonMat(PALETTE.skin));
    head.scale.set(1, 1.12, 1.03); head.castShadow = true;
    head.userData = { head: true };
    this.group.add(head);
    this.head = head;
    const helmet = new THREE.Group();
    if (team === 'british') {
      const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 0.02, 12), toonMat(PALETTE.khakiDark));
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), toonMat(PALETTE.khakiDark));
      dome.scale.y = 0.62;
      dome.position.y = 0.015;
      helmet.add(brim, dome);
    } else {
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.145, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), toonMat(PALETTE.fieldgreyDark));
      dome.scale.y = 0.85;
      const flare = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.15, 0.05, 10), toonMat(PALETTE.fieldgreyDark));
      flare.position.y = -0.02;
      helmet.add(dome, flare);
    }
    helmet.position.y = 0.09;
    helmet.userData = { helmet: true };
    this.group.add(helmet);
    this.helmet = helmet;
    // arms
    mkSeg(P.SHL, P.ELL, 0.062, cloth, Math.max(0.26, d(P.SHL, P.ELL) + 0.06));
    mkSeg(P.ELL, P.HNDL, 0.055, cloth, Math.max(0.25, d(P.ELL, P.HNDL) + 0.05));
    mkSeg(P.SHR, P.ELR, 0.062, cloth, Math.max(0.26, d(P.SHR, P.ELR) + 0.06));
    mkSeg(P.ELR, P.HNDR, 0.055, cloth, Math.max(0.25, d(P.ELR, P.HNDR) + 0.05));
    // legs
    mkSeg(P.HIPL, P.KNEL, 0.084, clothDark, Math.max(0.4, d(P.HIPL, P.KNEL) + 0.08));
    mkSeg(P.KNEL, P.FOOTL, 0.072, cloth, Math.max(0.4, d(P.KNEL, P.FOOTL) + 0.08));
    mkSeg(P.HIPR, P.KNER, 0.084, clothDark, Math.max(0.4, d(P.HIPR, P.KNER) + 0.08));
    mkSeg(P.KNER, P.FOOTR, 0.072, cloth, Math.max(0.4, d(P.KNER, P.FOOTR) + 0.08));
    // boots
    this.boots = [];
    for (const f of [P.FOOTL, P.FOOTR]) {
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.1, 0.26), toonMat(PALETTE.leatherDark));
      boot.castShadow = true;
      boot.userData = { foot: f };
      this.group.add(boot);
      this.boots.push(boot);
    }
    this.group.userData.ragdoll = this;
  }

  update(dt) {
    if (this.removed) return;
    this.age += dt;
    const g = -17.5;
    const pts = this.points;
    for (const p of pts) {
      const vx = (p.pos.x - p.prev.x) * 0.985;
      const vy = (p.pos.y - p.prev.y) * 0.985;
      const vz = (p.pos.z - p.prev.z) * 0.985;
      p.prev.copy(p.pos);
      p.pos.x += vx;
      p.pos.y += vy + g * dt * dt;
      p.pos.z += vz;
    }
    for (let it = 0; it < 4; it++) {
      for (const c of this.constraints) {
        const a = pts[c.a], b = pts[c.b];
        const dx = b.pos.x - a.pos.x, dy = b.pos.y - a.pos.y, dz = b.pos.z - a.pos.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.0001;
        const target = c.k;
        const diff = (dist - target) / dist;
        const push = diff * 0.5;
        a.pos.x += dx * push; a.pos.y += dy * push; a.pos.z += dz * push;
        b.pos.x -= dx * push; b.pos.y -= dy * push; b.pos.z -= dz * push;
      }
      // ground / trench floor collision
      for (const p of pts) {
        const gy = heightAt(p.pos.x, p.pos.z);
        const floor = gy + p.radius * 0.5;
        if (p.pos.y < floor) {
          p.pos.y = floor;
          // friction
          p.prev.x = p.prev.x * 0.6 + p.pos.x * 0.4;
          p.prev.z = p.prev.z * 0.6 + p.pos.z * 0.4;
        }
        p.pos.x = clamp(p.pos.x, -635, 635);
        p.pos.z = clamp(p.pos.z, -315, 315);
      }
    }
    // update visuals
    const up = new THREE.Vector3(0, 1, 0);
    const dir = new THREE.Vector3();
    for (const mesh of this.meshes) {
      const { a, b, baseLen } = mesh.userData;
      const pa = pts[a].pos, pb = pts[b].pos;
      dir.subVectors(pb, pa);
      const len = dir.length() || 0.001;
      mesh.position.copy(pa).addScaledVector(dir, 0.5);
      mesh.quaternion.setFromUnitVectors(up, dir.normalize());
      mesh.scale.set(1, clamp(len / baseLen, 0.4, 2.2), 1);
    }
    const hp = pts[P.HEAD].pos;
    this.head.position.copy(hp);
    this.helmet.position.copy(hp).add(new THREE.Vector3(0, 0.09, 0));
    this.helmet.rotation.set(0.1, Math.atan2(pts[P.HEAD].pos.x - pts[P.CHEST].pos.x, pts[P.HEAD].pos.z - pts[P.CHEST].pos.z), 0);
    for (const boot of this.boots) {
      const f = pts[boot.userData.foot].pos;
      boot.position.copy(f);
      boot.rotation.set(0, 0.3, Math.PI / 2);
    }
  }

  dispose() {
    if (this.removed) return;
    this.removed = true;
    this.scene.remove(this.group);
    this.group.traverse((o) => { if (o.isMesh && o.geometry && o.geometry.userData?.temp) o.geometry.dispose(); });
  }
}
