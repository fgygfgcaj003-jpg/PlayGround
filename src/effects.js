import * as THREE from 'three';
import {
  ParticleField, Tracers, makeSoftPuff, makeFlashTexture, makeRingTexture, makeMuzzleTexture,
  mulberry32, clamp, TAU,
} from './util.js';
import { heightAt } from './world.js';

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.rng = mulberry32(2468);
    const puff = makeSoftPuff('rgba(255,255,255,0.9)', 'rgba(255,255,255,0)', 128);
    const flash = makeFlashTexture();
    this.smokeP = new ParticleField(700, puff, false, false);
    this.dustP = new ParticleField(420, puff, false, false);
    this.sparksP = new ParticleField(380, flash, true, false);
    this.fireP = new ParticleField(260, flash, true, false);
    this.bloodP = new ParticleField(180, puff, false, false);
    this.tracers = new Tracers(220);
    for (const f of [this.smokeP, this.dustP, this.sparksP, this.fireP, this.bloodP, this.tracers]) scene.add(f.points || f.lines);

    this.flashTex = flash;
    this.ringTex = makeRingTexture();
    this.muzzleTex = makeMuzzleTexture();
    this.flashes = [];
    for (let i = 0; i < 18; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.muzzleTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffcf7a }));
      s.visible = false; s.userData.life = 0;
      scene.add(s); this.flashes.push(s);
    }
    this.rings = [];
    for (let i = 0; i < 8; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.ringTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, color: 0xffc47a }));
      s.visible = false; s.userData.life = 0;
      scene.add(s); this.rings.push(s);
    }
    this.debrisPieces = [];
    this.debrisGeo = new THREE.BoxGeometry(1, 1, 1);
    this.shake = 0;
    this.lights = [];
    for (let i = 0; i < 3; i++) {
      const l = new THREE.PointLight(0xffb35c, 0, 34, 2);
      l.visible = false; scene.add(l);
      this.lights.push({ light: l, life: 0, max: 1, power: 0 });
    }
    this.lightIdx = 0;
  }

  tracer(from, to, color = 0xffd98a, life = 0.09) {
    this.tracers.add(from, to, color, life);
  }

  muzzle(pos, dir, scale = 1) {
    const s = this.flashes.find((f) => !f.visible) || this.flashes[0];
    s.visible = true;
    s.position.copy(pos).addScaledVector(dir, 0.25);
    s.scale.setScalar((0.9 + Math.random() * 0.6) * scale);
    s.material.rotation = Math.random() * TAU;
    s.userData.life = 0.055;
    s.userData.maxLife = 0.055;
    for (let i = 0; i < 3; i++) {
      this.sparksP.spawn(
        pos.x + dir.x * 0.4, pos.y + dir.y * 0.4, pos.z + dir.z * 0.4,
        dir.x * 8 + (Math.random() - 0.5) * 4, dir.y * 8 + Math.random() * 3, dir.z * 8 + (Math.random() - 0.5) * 4,
        0.16, 0.18, 1, 0.72, 0.32, 0.9, 3, 2, 0,
      );
    }
    this.shake = Math.min(1, this.shake + 0.035 * scale);
  }

  blood(pos, dir) {
    for (let i = 0; i < 7; i++) {
      this.bloodP.spawn(
        pos.x, pos.y + (Math.random() - 0.3) * 0.5, pos.z,
        dir.x * 1.5 + (Math.random() - 0.5) * 2.5, Math.random() * 2.5, dir.z * 1.5 + (Math.random() - 0.5) * 2.5,
        0.28 + Math.random() * 0.25, 0.5 + Math.random() * 0.4, 0.32, 0.035, 0.03, 0.75, 2.5, 5, -0.3,
      );
    }
    this.dustP.spawn(pos.x, pos.y, pos.z, 0, 0.3, 0, 0.7, 0.8, 0.22, 0.03, 0.02, 0.28, 1.5, 0, 1.2);
  }

  impactDirt(pos, scale = 1) {
    const n = Math.max(2, Math.floor(5 * scale));
    for (let i = 0; i < n; i++) {
      this.dustP.spawn(
        pos.x, pos.y + 0.1, pos.z,
        (Math.random() - 0.5) * 5, 1.2 + Math.random() * 3.5, (Math.random() - 0.5) * 5,
        0.4 + Math.random() * 0.6, 0.6 + Math.random() * 0.7,
        0.32, 0.26, 0.17, 0.7, 1.8, 7, 0.8,
      );
    }
  }

  dust(pos, count = 5) {
    for (let i = 0; i < count; i++) {
      this.dustP.spawn(
        pos.x + (Math.random() - 0.5) * 2, pos.y + 0.2, pos.z + (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 3, 0.6 + Math.random() * 1.5, (Math.random() - 0.5) * 3,
        1 + Math.random(), 1.6, 0.45, 0.38, 0.26, 0.4, 1.2, 0.2, 1.2,
      );
    }
  }

  smoke(pos, size = 1, color = [0.35, 0.34, 0.3], count = 1, rise = 0.7, life = 4) {
    for (let i = 0; i < count; i++) {
      this.smokeP.spawn(
        pos.x + (Math.random() - 0.5) * 0.6, pos.y + (Math.random() - 0.5) * 0.4, pos.z + (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 1.2, rise + Math.random() * 1.2, (Math.random() - 0.5) * 1.2,
        size * (0.8 + Math.random() * 0.6), life * (0.7 + Math.random() * 0.6),
        color[0], color[1], color[2], 0.42, 0.5, -0.15, 1.0,
      );
    }
  }

  fire(pos) {
    for (let i = 0; i < 2; i++) {
      this.fireP.spawn(
        pos.x + (Math.random() - 0.5) * 0.5, pos.y, pos.z + (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 1.2, 1.8 + Math.random() * 2.5, (Math.random() - 0.5) * 1.2,
        0.8 + Math.random() * 0.7, 0.4 + Math.random() * 0.35,
        1, 0.55, 0.16, 0.9, 1.0, -1, 0.8,
      );
    }
    this.smoke(pos, 1.0, [0.16, 0.15, 0.14], 1, 1.5, 3);
  }

  sparks(pos, count = 6) {
    for (let i = 0; i < count; i++) {
      this.sparksP.spawn(
        pos.x, pos.y, pos.z,
        (Math.random() - 0.5) * 9, Math.random() * 7, (Math.random() - 0.5) * 9,
        0.16, 0.3 + Math.random() * 0.4, 1, 0.7, 0.25, 0.95, 2.4, 9, 0,
      );
    }
  }

  explosion(pos, scale = 2) {
    this.shake = Math.min(1.8, this.shake + 0.5 * Math.min(2, scale));
    // flash
    const s = this.flashes.find((f) => !f.visible) || this.flashes[0];
    s.visible = true; s.position.copy(pos); s.scale.setScalar(6 * scale); s.material.color.setHex(0xffc06a);
    s.userData.life = 0.16; s.userData.maxLife = 0.16;
    const ring = this.rings.find((r) => !r.visible) || this.rings[0];
    ring.visible = true; ring.position.copy(pos); ring.scale.setScalar(3 * scale);
    ring.userData.life = 0.5; ring.userData.maxLife = 0.5;
    ring.userData.scale = scale;
    // fire + smoke
    const n = Math.floor(22 * scale);
    for (let i = 0; i < n; i++) {
      const a = Math.random() * TAU, sp = 3 + Math.random() * 10 * Math.min(scale, 2);
      this.fireP.spawn(
        pos.x, pos.y, pos.z,
        Math.cos(a) * sp, 2 + Math.random() * 9 * Math.min(scale, 2), Math.sin(a) * sp,
        0.8 + Math.random() * 1.8 * scale, 0.5 + Math.random() * 0.9,
        1, 0.45 + Math.random() * 0.3, 0.1, 0.95, 1.2, 1.5, 1.5,
      );
    }
    for (let i = 0; i < Math.floor(16 * scale); i++) {
      const a = Math.random() * TAU, sp = 1 + Math.random() * 4;
      this.smokeP.spawn(
        pos.x, pos.y + 0.5, pos.z,
        Math.cos(a) * sp, 1.5 + Math.random() * 3, Math.sin(a) * sp,
        2 + Math.random() * 3 * scale, 2.5 + Math.random() * 3,
        0.14, 0.13, 0.12, 0.5, 0.7, -0.2, 1.6,
      );
    }
    // light
    const l = this.lights[this.lightIdx++ % this.lights.length];
    l.light.visible = true;
    l.light.position.copy(pos).add(new THREE.Vector3(0, 1, 0));
    l.light.intensity = 90 * scale;
    l.light.distance = 28 * scale;
    l.life = 0.28; l.max = 0.28; l.power = 90 * scale;
  }

  debris(pos, count = 8, color = 0x5b5a3c) {
    for (let i = 0; i < count; i++) {
      if (this.debrisPieces.length > 55) {
        const old = this.debrisPieces.shift();
        this.scene.remove(old.mesh);
      }
      const mat = new THREE.MeshToonMaterial({ color: Math.random() < 0.4 ? 0x4a3d2b : color });
      const mesh = new THREE.Mesh(this.debrisGeo, mat);
      const s = 0.12 + Math.random() * 0.5;
      mesh.scale.set(s, s * (0.3 + Math.random()), s * (0.6 + Math.random()));
      mesh.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() * 1.5, (Math.random() - 0.5) * 2));
      mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      mesh.castShadow = true;
      this.scene.add(mesh);
      this.debrisPieces.push({
        mesh,
        vel: new THREE.Vector3((Math.random() - 0.5) * 14, 4 + Math.random() * 12, (Math.random() - 0.5) * 14),
        spin: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8),
        life: 8 + Math.random() * 4,
      });
    }
  }

  update(dt) {
    this.smokeP.update(dt);
    this.dustP.update(dt);
    this.sparksP.update(dt);
    this.fireP.update(dt);
    this.bloodP.update(dt);
    this.tracers.update(dt);
    for (const s of this.flashes) {
      if (!s.visible) continue;
      s.userData.life -= dt;
      const t = clamp(s.userData.life / s.userData.maxLife, 0, 1);
      s.material.opacity = t;
      if (s.userData.life <= 0) { s.visible = false; s.material.color.setHex(0xffcf7a); }
    }
    for (const r of this.rings) {
      if (!r.visible) continue;
      r.userData.life -= dt;
      const t = 1 - clamp(r.userData.life / r.userData.maxLife, 0, 1);
      r.scale.setScalar((3 + t * 16) * r.userData.scale);
      r.material.opacity = (1 - t) * 0.8;
      if (r.userData.life <= 0) r.visible = false;
    }
    for (const l of this.lights) {
      if (!l.light.visible) continue;
      l.life -= dt;
      const t = clamp(l.life / l.max, 0, 1);
      l.light.intensity = l.power * t * t;
      if (l.life <= 0) l.light.visible = false;
    }
    for (let i = this.debrisPieces.length - 1; i >= 0; i--) {
      const d = this.debrisPieces[i];
      d.life -= dt;
      d.vel.y -= 18 * dt;
      d.mesh.position.addScaledVector(d.vel, dt);
      d.mesh.rotation.x += d.spin.x * dt;
      d.mesh.rotation.y += d.spin.y * dt;
      d.mesh.rotation.z += d.spin.z * dt;
      const gy = heightAt(d.mesh.position.x, d.mesh.position.z) + 0.1;
      if (d.mesh.position.y < gy) {
        d.mesh.position.y = gy;
        d.vel.y *= -0.3;
        d.vel.x *= 0.6; d.vel.z *= 0.6;
        d.spin.multiplyScalar(0.6);
      }
      if (d.life <= 0) {
        this.scene.remove(d.mesh);
        d.mesh.material.dispose();
        this.debrisPieces.splice(i, 1);
      }
    }
    this.shake = Math.max(0, this.shake - dt * 2.2);
  }
}
