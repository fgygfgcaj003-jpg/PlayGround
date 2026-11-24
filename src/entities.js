import * as THREE from 'three';
import { heightAt, trenchDepthAt, WORLD } from './world.js';
import {
  buildSoldier, buildMarkI, buildA7V, buildPlane, buildVickersMG, buildParachute, PALETTE, toonMat, addSphere, addBox,
} from './models.js';
import { Ragdoll } from './ragdoll.js';
import { clamp, lerp, damp, TAU, mulberry32 } from './util.js';

const UP = new THREE.Vector3(0, 1, 0);
const FWD = new THREE.Vector3(0, 0, 1);
const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion();

export class Soldier {
  constructor(game, opts) {
    this.game = game;
    this.team = opts.team;
    this.variant = opts.variant || (opts.team === 'british' ? 'british1' : 'german1');
    this.role = opts.role || 'rifle';
    this.name = opts.name || '';
    this.x = opts.x; this.z = opts.z;
    this.y = heightAt(this.x, this.z);
    this.yaw = opts.yaw ?? (opts.team === 'british' ? 0 : Math.PI);
    this.aimYaw = this.yaw;
    this.aimPitch = 0;
    this.hp = opts.hp ?? 100;
    this.maxHp = this.hp;
    this.speed = opts.speed ?? 3.6;
    this.dead = false;
    this.mounted = null;
    this.inVehicle = null;
    this.group = buildSoldier(this.variant);
    this.group.position.set(this.x, this.y, this.z);
    this.group.rotation.y = this.yaw;
    this.group.userData.soldier = this;
    this.group.userData.phase = Math.random() * TAU;
    game.scene.add(this.group);
    this.velocity = new THREE.Vector2();
    this.cooldown = Math.random() * 1.5;
    this.burst = 0;
    this.recoil = 0;
    this.animSpeed = 0;
    this.moveDir = new THREE.Vector2();
    this.wantFire = false;
    this.fireTarget = null;
    this.suppressed = 0;
    this.stepPhase = Math.random() * TAU;
    this.game.soldiers.push(this);
  }

  get forward() { return _v1.set(Math.sin(this.yaw), 0, Math.cos(this.yaw)).clone(); }

  muzzlePos(out = new THREE.Vector3()) {
    const f = Math.sin(this.yaw), c = Math.cos(this.yaw);
    out.set(this.x + f * 0.95, this.y + 1.35 + Math.sin(this.aimPitch) * 0.5, this.z + c * 0.95);
    return out;
  }

  setMove(dx, dz, run = false) {
    this.moveDir.set(dx, dz);
    if (dx * dx + dz * dz > 0.001) this.moveDir.normalize();
    this.running = run;
  }

  setAim(target) {
    if (!target) return;
    const dx = target.x - this.x, dz = target.z - this.z;
    const dy = (target.y ?? this.y + 1.4) - (this.y + 1.45);
    this.aimYaw = Math.atan2(dx, dz);
    const dist = Math.sqrt(dx * dx + dz * dz) || 1;
    this.aimPitch = Math.atan2(dy, dist);
  }

  fireAt(target) {
    if (this.dead || this.cooldown > 0 || !target) return;
    const from = this.muzzlePos();
    const to = new THREE.Vector3(target.x, (target.y ?? this.y) + (target.headY ?? 1.3), target.z);
    const dist = from.distanceTo(to);
    const spread = clamp(dist / 260, 0.02, 0.2);
    to.x += (Math.random() - 0.5) * dist * spread;
    to.y += (Math.random() - 0.5) * dist * spread * 0.7;
    to.z += (Math.random() - 0.5) * dist * spread;
    const blocked = this.game.lineBlocked(from, to);
    if (blocked) to.copy(blocked);
    this.game.effects.tracer(from, to, this.team === 'british' ? 0xffd68a : 0xffa15c);
    this.game.effects.muzzle(from, _v2.copy(to).sub(from).normalize(), 0.75);
    this.game.audio?.shot(this.team, from, 0.5);
    this.recoil = 1;
    this.cooldown = this.role === 'mg' ? 0.09 : 1.15 + Math.random() * 0.8;
    // accuracy model
    let chance = clamp(0.46 - dist / 240, 0.05, 0.46);
    if (target.running) chance *= 0.62;
    if (target.inTrench) chance *= 0.7;
    if (this.role === 'mg') chance *= 0.55;
    if (!blocked && Math.random() < chance) {
      const dmg = this.role === 'mg' ? 8 : (14 + Math.random() * 8);
      target.hit?.(dmg, from, _v3.copy(to).sub(from).normalize());
    } else {
      this.game.effects.impactDirt(to, 0.6);
    }
  }

  hit(dmg, from, dir) {
    if (this.dead) return;
    this.hp -= dmg;
    this.suppressed = 1;
    this.game.effects.blood(new THREE.Vector3(this.x, this.y + 1.2, this.z), dir || UP);
    if (this.hp <= 0) this.die(dir, from);
  }

  die(dir, from) {
    if (this.dead) return;
    this.dead = true;
    this.group.visible = false;
    if (this.mounted) this.mounted.dismount();
    if (this.inVehicle) this.inVehicle = null;
    const imp = (dir ? dir.clone() : new THREE.Vector3(0, 1, 0)).multiplyScalar(4.5);
    this.game.addRagdoll(this, imp);
    this.game.onSoldierDied(this);
  }

  update(dt) {
    if (this.dead || this.inVehicle) return;
    const moving = this.moveDir.lengthSq() > 0.001;
    this.animSpeed = damp(this.animSpeed, moving ? (this.running ? 1.5 : 1) : 0, 8, dt);
    if (moving) {
      const spd = this.running ? 5.1 : this.speed;
      const speedMul = this.inTrench ? 0.72 : 1;
      this.x += this.moveDir.x * spd * speedMul * dt;
      this.z += this.moveDir.y * spd * speedMul * dt;
      this.yaw = dampAngle(this.yaw, Math.atan2(this.moveDir.x, this.moveDir.y), 8, dt);
    }
    // collisions with camp props
    for (const c of this.game.world.colliders) {
      const dx = this.x - c.x, dz = this.z - c.z;
      const rr = c.r + 0.3;
      const d2 = dx * dx + dz * dz;
      if (d2 < rr * rr && d2 > 0.0001) {
        const d = Math.sqrt(d2);
        this.x = c.x + dx / d * rr;
        this.z = c.z + dz / d * rr;
      }
    }
    // avoid tanks
    for (const t of this.game.tanks) {
      if (!t.alive) continue;
      const dx = this.x - t.pos.x, dz = this.z - t.pos.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < 9 && d2 > 0.01) {
        const d = Math.sqrt(d2);
        this.x = t.pos.x + dx / d * 3;
        this.z = t.pos.z + dz / d * 3;
      }
    }
    this.x = clamp(this.x, WORLD.minX + 4, WORLD.maxX - 4);
    this.z = clamp(this.z, WORLD.minZ + 4, WORLD.maxZ - 4);
    const ground = heightAt(this.x, this.z);
    this.y = ground;
    this.inTrench = trenchDepthAt(this.x, this.z) > 0.8;
    this.group.position.set(this.x, this.y, this.z);
    if (!moving) this.yaw = dampAngle(this.yaw, this.aimYaw, 5, dt);
    this.group.rotation.y = this.yaw;
    if (this.cooldown > 0) this.cooldown -= dt;
    if (this.recoil > 0) this.recoil = Math.max(0, this.recoil - dt * 5);
    if (this.suppressed > 0) this.suppressed = Math.max(0, this.suppressed - dt * 0.3);
    this.animate(dt, moving);
    if (this.wantFire && this.fireTarget && !this.game.isDead(this.fireTarget)) {
      if (this.fireTarget.isPlane) {
        const d = this.fireTarget.pos.distanceTo(new THREE.Vector3(this.x, this.y + 1.4, this.z));
        if (d < 230) this.fireAt({ x: this.fireTarget.pos.x, y: this.fireTarget.pos.y, z: this.fireTarget.pos.z, headY: 0, isPlane: true });
      } else if (Math.random() < 0.65) {
        this.fireAt(this.fireTarget);
      }
    }
  }

  animate(dt, moving) {
    const u = this.group.userData;
    const B = u.bones;
    u.phase += dt * (2.2 + this.animSpeed * 5.2);
    const ph = u.phase;
    const s = Math.sin(ph), c = Math.cos(ph);
    const amt = this.animSpeed;
    const aim = this.wantFire || this.aimPitch !== 0;
    // base
    B.root.position.y = 0.93 + Math.abs(s) * 0.035 * amt;
    B.spine.rotation.set(0.03 + Math.sin(ph * 2) * 0.015 * (1 - amt), 0, 0);
    B.head.rotation.set(0, Math.sin(ph * 0.4) * 0.18, 0);
    B.weapon.rotation.x = -this.aimPitch * 0.9;
    B.weapon.rotation.y = 0;
    // legs
    B.legL.rotation.x = s * 0.6 * amt;
    B.legR.rotation.x = -s * 0.6 * amt;
    B.shinL.rotation.x = Math.max(0, -s) * 0.7 * amt + 0.05;
    B.shinR.rotation.x = Math.max(0, s) * 0.7 * amt + 0.05;
    B.footL.rotation.x = -0.1 - Math.max(0, -s) * 0.2 * amt;
    B.footR.rotation.x = -0.1 - Math.max(0, s) * 0.2 * amt;
    // arms hold rifle forward
    const sway = Math.sin(ph) * 0.06 * amt;
    B.armL.rotation.set(-1.15 + sway, 0.15, 0.35);
    B.armR.rotation.set(-1.2 - sway, -0.1, -0.32);
    B.foreL.rotation.set(-0.5, 0, -0.2);
    B.foreR.rotation.set(-0.65, 0, 0.15);
    B.handL.rotation.set(0, 0, 0);
    B.handR.rotation.set(0, 0, 0);
    if (!aim) {
      // patrol carry: rifle angled across chest
      B.weapon.rotation.x = -0.35;
      B.armL.rotation.set(-0.75 + sway, 0.1, 0.2);
      B.armR.rotation.set(-0.8 - sway, -0.1, -0.2);
    }
    // recoil
    B.spine.rotation.x += this.recoil * 0.08;
    B.armL.rotation.x += this.recoil * 0.15;
    B.armR.rotation.x += this.recoil * 0.15;
  }
}

export class StaticMG {
  constructor(game, site) {
    this.game = game;
    this.site = site;
    this.team = site.team;
    this.baseYaw = site.team === 'british' ? 0 : Math.PI;
    this.yaw = 0; this.pitch = 0;
    this.group = buildVickersMG();
    this.group.position.set(site.x, site.y, site.z);
    this.group.rotation.y = this.baseYaw;
    game.scene.add(this.group);
    this.mountedBy = null;
    this.playerMounted = false;
    this.cooldown = 0;
    this.heat = 0;
    this.overheated = false;
    this.maxAmmo = 500;
    this.ammo = 500;
    this.level = 1;
    this.damageMul = 1;
    this.built = false;
    this.target = null;
    this.spin = 0;
    this.game.mgs.push(this);
  }

  upgrade() {
    if (this.level >= 3) {
      this.ammo = this.maxAmmo;
      return false;
    }
    this.level++;
    this.maxAmmo += 250;
    this.ammo = this.maxAmmo;
    this.damageMul += 0.3;
    // better sandbags / reinforced mount
    this.group.scale.setScalar(1 + (this.level - 1) * 0.05);
    return true;
  }

  get worldMuzzle() {
    this.group.updateMatrixWorld(true);
    return this.group.userData.muzzle.getWorldPosition(new THREE.Vector3());
  }

  get pos() { return this.group.position; }

  mount(entity) {
    if (this.mountedBy) return false;
    this.mountedBy = entity;
    entity.mounted = this;
    if (entity.isPlayer) {
      this.playerMounted = true;
    } else {
      // stand behind the gun
      entity.x = this.site.x - Math.sin(this.baseYaw) * 0.75;
      entity.z = this.site.z - Math.cos(this.baseYaw) * 0.75;
      entity.y = heightAt(entity.x, entity.z);
      entity.group.position.set(entity.x, entity.y, entity.z);
      entity.group.rotation.y = this.baseYaw;
      entity.wantFire = false;
    }
    return true;
  }

  dismount() {
    if (!this.mountedBy) return;
    this.mountedBy.mounted = null;
    this.mountedBy = null;
    this.playerMounted = false;
    this.yaw = 0; this.pitch = 0;
    this.group.rotation.set(0, this.baseYaw, 0);
  }

  aimAt(target, dt) {
    if (!target) return;
    const from = this.worldMuzzle;
    const dx = target.x - from.x, dz = target.z - from.z;
    const dy = (target.y ?? this.site.y + 1.2) + (target.headY ?? 1.1) - from.y;
    const dist = Math.sqrt(dx * dx + dz * dz) || 1;
    const desiredYaw = Math.atan2(dx, dz) - this.baseYaw;
    this.yaw = dampAngle(this.yaw, clamp(desiredYaw, -0.95, 0.95), 6, dt);
    this.pitch = damp(this.pitch, clamp(Math.atan2(dy, dist), -0.4, 0.7), 6, dt);
    this.group.rotation.y = this.baseYaw + this.yaw;
    this.group.rotation.x = -this.pitch;
  }

  fireAt(target) {
    if (this.cooldown > 0 || this.overheated || this.ammo <= 0) return;
    const from = this.worldMuzzle;
    const to = new THREE.Vector3(target.x, (target.y ?? this.site.y) + (target.headY ?? 1.2), target.z);
    const dist = from.distanceTo(to);
    const spread = clamp(dist / 500, 0.01, 0.09);
    to.x += (Math.random() - 0.5) * dist * spread;
    to.y += (Math.random() - 0.5) * dist * spread * 0.6;
    to.z += (Math.random() - 0.5) * dist * spread;
    const blocked = this.game.lineBlocked(from, to);
    if (blocked) to.copy(blocked);
    this.game.effects.tracer(from, to, this.team === 'british' ? 0xffe1a0 : 0xff9a55, 0.07);
    this.game.effects.muzzle(from, _v2.copy(to).sub(from).normalize(), 1.0);
    this.game.audio?.mg(this.team, from);
    this.ammo--;
    this.heat = Math.min(1, this.heat + 0.018);
    this.cooldown = Math.max(0.05, 0.085 - this.level * 0.008);
    this.spin += 1;
    let chance = clamp(0.42 - dist / 320, 0.06, 0.42) * (1 + (this.level - 1) * 0.08);
    if (!blocked && Math.random() < chance) {
      target.hit?.((9 + Math.random() * 7) * this.damageMul, from, _v3.copy(to).sub(from).normalize());
    } else if (Math.random() < 0.6) {
      this.game.effects.impactDirt(to, 0.5);
    }
  }

  update(dt) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.heat = Math.max(0, this.heat - dt * 0.055);
    this.overheated = this.heat > 0.98;
    if (!this.mountedBy) {
      this.group.rotation.y = dampAngle(this.group.rotation.y, this.baseYaw, 2, dt);
      return;
    }
    if (this.mountedBy.isPlayer) return;
    // bot operator
    if (!this.target || this.game.isDead(this.target)) {
      this.target = this.game.findTarget(this.team, this.site.x, this.site.z, 170);
    }
    if (this.target) {
      this.aimAt(this.target, dt);
      this.fireAt(this.target);
    }
  }
}

/* ================================================================== *
 *  TANKS
 * ================================================================== */
export class Tank {
  constructor(game, opts) {
    this.game = game;
    this.team = opts.team;
    this.type = opts.type || 'mark1';
    this.group = this.type === 'mark1' ? buildMarkI() : buildA7V();
    this.pos = new THREE.Vector3(opts.x, heightAt(opts.x, opts.z), opts.z);
    this.yaw = opts.yaw ?? 0;
    this.speed = 0;
    this.maxSpeed = this.type === 'mark1' ? 3.6 : 4.0;
    this.hp = this.type === 'mark1' ? 620 : 720;
    this.maxHp = this.hp;
    this.alive = true;
    this.crewCount = 0;
    this.seats = { driver: null, gunnerL: null, gunnerR: null, crew1: null, crew2: null };
    this.target = null;
    this.fireCooldown = [0, 0];
    this.cannonCd = 1.5 + Math.random() * 2;
    this.smokeT = 0;
    this.trackDist = 0;
    this.pitch = 0; this.roll = 0;
    this.stuck = 0;
    this.moving = false;
    this.playerOperated = false;
    this.playerAboard = false;
    this.mgCd = 0;
    this.bobPhase = 0;
    this.group.rotation.order = 'YXZ';
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    game.scene.add(this.group);
    this.tracks = this.group.userData.tracks || [];
    this.buildCrewVisuals();
    if (opts.crewed) {
      for (const s of ['driver', 'gunnerL', 'gunnerR']) this.seats[s] = { bot: true };
      this.crewCount = 3;
      this.updateCrewVisuals();
    }
    game.tanks.push(this);
  }

  buildCrewVisuals() {
    this.crewHeads = {};
    const spots = this.type === 'mark1'
      ? {
        driver: [1.55, 2.9, 0],
        gunnerL: [0.9, 1.9, 1.48],
        gunnerR: [0.9, 1.9, -1.48],
        crew1: [-1.5, 2.12, 0.72],
        crew2: [-1.5, 2.12, -0.72],
      }
      : {
        driver: [-1.4, 3.5, 0],
        gunnerL: [1.25, 2.35, 1.5],
        gunnerR: [1.25, 2.35, -1.5],
        crew1: [-1.3, 2.9, 0.6],
        crew2: [-1.3, 2.9, -0.6],
      };
    for (const [name, p] of Object.entries(spots)) {
      const g = new THREE.Group();
      const head = addSphere(g, 0.13, PALETTE.skin, 0, 0.12, 0, 1, 1.1, 1);
      const helmet = addSphere(g, 0.16, this.team === 'british' ? PALETTE.khakiDark : PALETTE.fieldgreyDark, 0, 0.2, 0, 1, 0.6, 1);
      const shoulders = addBox(g, 0.4, 0.18, 0.26, this.team === 'british' ? PALETTE.khaki : PALETTE.fieldgrey, 0, -0.06, 0);
      g.position.set(p[0], p[1], p[2]);
      g.visible = false;
      this.group.add(g);
      this.crewHeads[name] = g;
    }
  }

  updateCrewVisuals() {
    for (const k of Object.keys(this.crewHeads)) this.crewHeads[k].visible = !!this.seats[k];
  }

  board(soldier) {
    const order = ['driver', 'gunnerL', 'gunnerR', 'crew1', 'crew2'];
    for (const seat of order) {
      if (!this.seats[seat]) {
        this.seats[seat] = soldier;
        soldier.inVehicle = this;
        soldier.group.visible = false;
        this.crewCount++;
        this.updateCrewVisuals();
        this.game.hud?.message(`${soldier.team === 'british' ? 'Экипаж' : 'Экипаж'}: ${seatName(seat)} занят`, 1.4);
        return true;
      }
    }
    return false;
  }

  get operational() { return this.alive && !!this.seats.driver && !!this.seats.gunnerL && !!this.seats.gunnerR; }

  hit(dmg, from, dir) {
    if (!this.alive) return;
    this.hp -= dmg;
    this.game.effects.sparks(new THREE.Vector3(this.pos.x + (Math.random() - 0.5) * 3, this.pos.y + 1.8, this.pos.z + (Math.random() - 0.5) * 2), 5);
    if (this.hp <= 0) this.destroy();
  }

  destroy() {
    if (!this.alive) return;
    this.alive = false;
    this.game.effects.explosion(new THREE.Vector3(this.pos.x, this.pos.y + 1.6, this.pos.z), 3.2);
    this.game.audio?.explosion(this.pos, 1.4);
    this.game.onTankDestroyed(this);
    // kill crew
    for (const seat of Object.values(this.seats)) {
      if (seat && seat.die) seat.die(new THREE.Vector3(0, 1, 0), this.pos);
    }
    this.group.traverse((o) => { if (o.isMesh) o.material = o.material; });
    this.group.rotation.z = (Math.random() - 0.5) * 0.25;
    this.game.hud?.message('Танк уничтожен!', 2.5);
  }

  update(dt) {
    if (!this.alive) {
      this.smokeT -= dt;
      if (this.smokeT <= 0) {
        this.smokeT = 0.08;
        const p = this.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, 2 + Math.random() * 1.2, (Math.random() - 0.5) * 2.5));
        this.game.effects.smoke(p, 2.4, [0.15, 0.14, 0.12], 1, 0.9, 4);
        if (Math.random() < 0.4) this.game.effects.fire(p);
      }
      return;
    }
    // movement — heavy but responsive enough to drive
    const canDrive = this.operational || this.playerOperated;
    const trench = trenchDepthAt(this.pos.x, this.pos.z);
    let speedMul = 1;
    if (trench > 0.7) speedMul = 0.55;
    if (this.stuck > 0) { speedMul = 0; this.stuck -= dt; }
    const f0 = Math.sin(this.yaw), c0 = Math.cos(this.yaw);
    const slopeAhead = heightAt(this.pos.x + f0 * 2.4, this.pos.z + c0 * 2.4) - heightAt(this.pos.x, this.pos.z);
    if (slopeAhead > 0.55) speedMul *= 0.5;
    let targetSpeed = canDrive ? (this.desiredSpeed ?? 0) : 0;
    targetSpeed = clamp(targetSpeed, -this.maxSpeed, this.maxSpeed);
    this.speed = damp(this.speed, targetSpeed * speedMul, 3.4, dt);
    if (Math.abs(this.speed) > 0.02) {
      this.pos.x += Math.sin(this.yaw) * this.speed * dt;
      this.pos.z += Math.cos(this.yaw) * this.speed * dt;
      this.trackDist += this.speed * dt;
      this.moving = true;
    } else this.moving = false;
    // steering — tanks can pivot slowly in place, faster at speed
    const steerAuth = 0.3 + 0.7 * clamp(Math.abs(this.speed) / this.maxSpeed, 0, 1);
    if (Math.abs(this.steer || 0) > 0.01) this.yaw += this.steer * dt * 0.95 * steerAuth;
    this.pos.x = clamp(this.pos.x, WORLD.minX + 10, WORLD.maxX - 10);
    this.pos.z = clamp(this.pos.z, WORLD.minZ + 10, WORLD.maxZ - 10);

    // terrain fit
    const f = Math.sin(this.yaw), c = Math.cos(this.yaw);
    const hx = 3.3, hz = 1.8;
    const hf = heightAt(this.pos.x + f * hx, this.pos.z + c * hx);
    const hb = heightAt(this.pos.x - f * hx, this.pos.z - c * hx);
    const hl = heightAt(this.pos.x + c * hz, this.pos.z - f * hz);
    const hr = heightAt(this.pos.x - c * hz, this.pos.z + f * hz);
    const avg = (hf + hb + hl + hr) / 4;
    this.bobPhase += Math.abs(this.speed) * dt * 2.6;
    const bob = this.moving ? Math.sin(this.bobPhase) * 0.018 : 0;
    this.pos.y = damp(this.pos.y, avg + 0.06 + bob, 8, dt);
    this.pitch = damp(this.pitch, clamp(Math.atan2(hb - hf, hx * 2), -0.32, 0.32), 5, dt);
    this.roll = damp(this.roll, clamp(Math.atan2(hl - hr, hz * 2), -0.26, 0.26), 5, dt);
    this.group.position.copy(this.pos);
    this.group.rotation.set(this.pitch, this.yaw, this.roll);
    this.group.updateMatrixWorld(true);
    // keep hidden crew entities with the hull so their ragdolls spawn in place
    for (const seat of Object.values(this.seats)) {
      if (seat && typeof seat.x === 'number') {
        seat.x = this.pos.x; seat.y = this.pos.y; seat.z = this.pos.z;
      }
    }

    // track plates / road wheels
    for (const tr of this.tracks) {
      const n = tr.path.length;
      const dummy = this._dummy || (this._dummy = new THREE.Object3D());
      for (let i = 0; i < tr.plates.count; i++) {
        const idx = ((i + Math.floor(this.trackDist * 4)) % n + n) % n;
        const p = tr.path[idx];
        const p2 = tr.path[(idx + 1) % n];
        dummy.position.set(p.x, 1.25 + p.y, tr.side * 1.72);
        dummy.rotation.set(0, 0, Math.atan2(p2.y - p.y, p2.x - p.x));
        dummy.updateMatrix();
        tr.plates.setMatrixAt(i, dummy.matrix);
      }
      tr.plates.instanceMatrix.needsUpdate = true;
      for (const w of tr.wheels) w.rotation.z += this.speed * dt * 1.2;
    }
    for (const w of (this.group.userData.wheels || [])) w.rotation.z += this.speed * dt * 1.6;

    // smoke from exhaust / damage
    this.smokeT -= dt;
    if (this.smokeT <= 0 && (this.hp < this.maxHp * 0.55 || this.operational)) {
      this.smokeT = this.hp < this.maxHp * 0.55 ? 0.12 : 0.6;
      const p = this.pos.clone().add(new THREE.Vector3(-2.0, 2.6, 0.9).applyAxisAngle(UP, this.yaw));
      this.game.effects.smoke(p, this.hp < this.maxHp * 0.55 ? 1.2 : 0.6, [0.22, 0.21, 0.19], 1, 0.5, 3.5);
    }

    // weapons (AI crew; the player fires through updateTankPlayer)
    if (this.operational && !this.playerAboard) {
      this.fireCooldown[0] = Math.max(0, this.fireCooldown[0] - dt);
      this.fireCooldown[1] = Math.max(0, this.fireCooldown[1] - dt);
      this.cannonCd = Math.max(0, this.cannonCd - dt);
      // enemy armour has priority over infantry
      let armour = null, armourD = 240;
      for (const other of this.game.tanks) {
        if (other === this || !other.alive || other.team === this.team) continue;
        const d = Math.hypot(other.pos.x - this.pos.x, other.pos.z - this.pos.z);
        if (d < armourD) { armour = other; armourD = d; }
      }
      if (armour) this.target = armour;
      else if (!this.target || this.game.isDead(this.target)) {
        this.target = this.game.findTarget(this.team, this.pos.x, this.pos.z, 200, this.yaw);
      }
      if (this.target) {
        const t = this.target;
        const targetPos = t.pos ? t.pos.clone() : new THREE.Vector3(t.x, t.y + 1.1, t.z);
        const dx = targetPos.x - this.pos.x, dz = targetPos.z - this.pos.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const ang = Math.atan2(dx, dz);
        let diff = ((ang - this.yaw + Math.PI * 3) % TAU) - Math.PI;
        if (dist < 130) {
          const side = diff > 0 ? 1 : -1;
          const idx = side > 0 ? 0 : 1;
          if (this.fireCooldown[idx] <= 0) {
            this.fireCooldown[idx] = 0.16 + Math.random() * 0.12;
            this.fireMG(side, targetPos);
          }
        }
        // sponson gun: heavy, slow, aimed by the hull
        if (dist < 260 && Math.abs(diff) < 0.34 && this.cannonCd <= 0) {
          this.cannonCd = 3.4 + Math.random() * 2.2;
          this.fireCannon(targetPos);
        }
      }
    }
  }

  fireCannon(targetPos) {
    if (!this.alive) return;
    const local = (this.type === 'a7v' ? new THREE.Vector3(3.55, 2.12, 0) : new THREE.Vector3(1.55, 2.05, 0.15))
      .applyAxisAngle(UP, this.yaw);
    const from = this.pos.clone().add(local);
    from.y += 0.25;
    const dir = targetPos.clone().sub(from).normalize();
    dir.x += (Math.random() - 0.5) * 0.012;
    dir.y += (Math.random() - 0.5) * 0.008;
    dir.z += (Math.random() - 0.5) * 0.012;
    dir.normalize();
    const hit = this.game.raycastTargets(from, dir, 320, this.team);
    const to = hit ? hit.point : from.clone().addScaledVector(dir, 320);
    this.game.effects.tracer(from, to, 0xffcf7a, 0.18);
    this.game.effects.muzzle(from, dir, 2.2);
    this.game.effects.shake = Math.min(1.6, this.game.effects.shake + 0.18);
    this.game.audio?.explosion(from, 1.1);
    this.game.effects.explosion(to, 1.7);
    if (hit?.entity) this.game.applyHit(hit, 120, from, dir);
    else this.game.effects.impactDirt(to, 1.5);
  }

  fireMG(side, targetPos) {
    const local = new THREE.Vector3(0.9, 1.62, side * 2.6);
    local.applyAxisAngle(UP, this.yaw);
    const from = this.pos.clone().add(local);
    from.y += 0.1;
    const to = targetPos.clone();
    const dist = from.distanceTo(to);
    to.x += (Math.random() - 0.5) * dist * 0.045;
    to.y += (Math.random() - 0.5) * dist * 0.03;
    to.z += (Math.random() - 0.5) * dist * 0.045;
    const blocked = this.game.lineBlocked(from, to);
    if (blocked) to.copy(blocked);
    this.game.effects.tracer(from, to, this.team === 'british' ? 0xffe0a0 : 0xff9c55, 0.07);
    this.game.effects.muzzle(from, _v2.copy(to).sub(from).normalize(), 0.9);
    this.game.audio?.mg(this.team, from, 0.7);
    if (!blocked && Math.random() < 0.2) {
      targetPos.y -= 1.1;
      const target = this.target;
      if (target?.hit) target.hit(8 + Math.random() * 5, from, _v2.copy(to).sub(from).normalize());
    }
  }

  getSeatWorld(seat, out = new THREE.Vector3()) {
    const p = seat === 'driver' ? [1.5, 3.05, 0] : seat === 'gunnerL' ? [0.9, 2.1, 2.15] : [0.9, 2.1, -2.15];
    out.set(p[0], p[1], p[2]);
    out.applyAxisAngle(UP, this.yaw);
    return out.add(this.pos);
  }
}

function seatName(seat) {
  return { driver: 'водитель', gunnerL: 'пулемётчик левый', gunnerR: 'пулемётчик правый', crew1: 'экипаж', crew2: 'экипаж' }[seat] || seat;
}

/* ================================================================== *
 *  AEROPLANES
 * ================================================================== */
export class Plane {
  constructor(game, opts) {
    this.game = game;
    this.team = opts.team;
    this.type = opts.type || 'camel';
    this.group = buildPlane(this.type);
    this.pos = new THREE.Vector3(opts.x, heightAt(opts.x, opts.z) + 0.06, opts.z);
    this.yaw = opts.yaw ?? 0;
    this.quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, this.yaw, 0));
    this.vel = new THREE.Vector3();
    this.throttle = 0;
    this.onGround = true;
    this.alive = true;
    this.crashed = false;
    this.health = 180;
    this.modules = { engine: 100, wingL: 100, wingR: 100, tail: 100, pilot: 100 };
    this.controls = { pitch: 0, roll: 0, yaw: 0 };
    this.pilot = null; // 'player' | 'bot'
    this.pilotSoldier = null;
    this.bailed = false;
    this.groundTime = 0;
    this.airTime = 0;
    this.smokeT = 0;
    this.fireT = 0;
    this.tracerT = 0;
    this.target = null;
    this.ammo = 400;
    this.destroyedAt = 0;
    this.deadTimer = 0;
    this.lastDamage = 0;
    this.group.position.copy(this.pos);
    this.group.quaternion.copy(this.quat);
    game.scene.add(this.group);
    this.prop = this.group.userData.propeller;
    this.rudder = this.group.userData.rudder;
    this.elevator = this.group.userData.elevator;
    game.planes.push(this);
  }

  get forward() { return _v1.set(0, 0, 1).applyQuaternion(this.quat).clone(); }
  get speed() { return this.vel.length(); }
  get altitude() { return this.pos.y - heightAt(this.pos.x, this.pos.z); }

  setPilot(kind, soldier = null) {
    this.pilot = kind;
    this.pilotSoldier = soldier;
    if (soldier) {
      soldier.inVehicle = this;
      soldier.group.visible = false;
    }
  }

  hit(dmg, from, dir, moduleName = null) {
    if (!this.alive) return;
    this.lastDamage = this.game.time;
    const names = ['engine', 'wingL', 'wingR', 'tail', 'pilot'];
    const m = moduleName || names[Math.floor(Math.random() * names.length)];
    this.modules[m] = Math.max(0, this.modules[m] - dmg);
    this.health -= dmg * 0.45;
    this.game.effects.sparks(this.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 3)), 4);
    if (m === 'pilot') {
      this.game.hud?.message('Пилот ранен!', 1.2);
      if (this.modules.pilot <= 0) {
        this.game.hud?.message('Пилот убит!', 1.6);
        if (this.pilot === 'bot') this.botBail(true);
        else if (this.pilot === 'player') this.game.playerPlaneHit?.(100);
      }
    }
    if (this.health <= 0 || (this.modules.engine <= 0 && this.modules.wingL <= 0 && this.modules.wingR <= 0)) {
      this.destroy('shot');
    } else if (this.pilot === 'bot' && (this.health < 55 || this.modules.engine <= 0)) {
      this.botBail(false);
    }
  }

  botBail(dead) {
    if (this.bailed || !this.pilot) return;
    this.bailed = true;
    if (!dead && this.altitude > 18) {
      this.game.spawnParachute(this.pos.clone(), this.team, false);
      this.game.hud?.message('Немецкий/британский пилот выпрыгнул с парашютом', 1.6);
    }
    if (this.pilotSoldier) {
      const s = this.pilotSoldier;
      s.x = this.pos.x; s.y = this.pos.y; s.z = this.pos.z;
      s.inVehicle = null;
      s.group.visible = false;
      s.die(new THREE.Vector3((Math.random() - 0.5) * 0.6, 0.6, (Math.random() - 0.5) * 0.6), this.pos);
      this.pilotSoldier = null;
    }
    this.pilot = null;
  }

  destroy(kind = 'crash') {
    if (!this.alive) return;
    this.alive = false;
    this.crashed = true;
    this.destroyedAt = this.game.time;
    const groundY = heightAt(this.pos.x, this.pos.z);
    if (this.altitude > 3) {
      // dive to ground with a trail of fire, explode on impact
      this.crashing = true;
      this.game.effects.explosion(this.pos.clone(), 1.6);
      this.game.audio?.explosion(this.pos, 1);
    } else {
      this.game.effects.explosion(this.pos.clone().add(new THREE.Vector3(0, 0.5, 0)), 2.6);
      this.game.audio?.explosion(this.pos, 1.4);
      this.crashing = false;
    }
    if (this.pilot === 'player') this.game.playerPlaneHit?.(100);
    if (this.pilot === 'bot' || this.pilot === 'player') this.botBail(true);
    this.game.onPlaneDestroyed(this);
    // hide top wing for broken look
    if (this.group.userData.topWing) this.group.userData.topWing.visible = false;
    this.game.effects.debris(this.pos.clone(), 10, this.team === 'british' ? 0x6f6a42 : 0x5f6a72);
  }

  reset(x, z, yaw) {
    this.alive = true;
    this.crashed = false;
    this.crashing = false;
    this.deadTimer = 0;
    this.destroyedAt = 0;
    this.health = 180;
    this.modules = { engine: 100, wingL: 100, wingR: 100, tail: 100, pilot: 100 };
    this.pilot = null;
    this.pilotSoldier = null;
    this.bailed = false;
    this.pos.set(x, heightAt(x, z) + 0.06, z);
    this.yaw = yaw;
    this.quat.setFromEuler(new THREE.Euler(0, yaw, 0));
    this.vel.set(0, 0, 0);
    this.throttle = 0;
    this.onGround = true;
    this.controls = { pitch: 0, roll: 0, yaw: 0 };
    this.ammo = 400;
    this.botState = null;
    this.tracerT = 0;
    this.group.visible = true;
    this.group.position.copy(this.pos);
    this.group.quaternion.copy(this.quat);
    if (this.group.userData.topWing) this.group.userData.topWing.visible = true;
  }

  update(dt) {
    if (!this.alive) {
      this.deadTimer += dt;
      if (this.crashing) {
        // fall and burn
        this.pos.y -= 12 * dt;
        this.pos.x += this.vel.x * dt;
        this.pos.z += this.vel.z * dt;
        this.group.rotation.z += dt * 2;
        this.group.position.copy(this.pos);
        this.fireT -= dt;
        if (this.fireT <= 0) {
          this.fireT = 0.05;
          this.game.effects.smoke(this.pos.clone(), 3.0, [0.12, 0.11, 0.1], 1, 1.4, 5);
          this.game.effects.fire(this.pos.clone());
        }
        const gy = heightAt(this.pos.x, this.pos.z);
        if (this.pos.y <= gy + 0.4) {
          this.pos.y = gy + 0.4;
          this.crashing = false;
          this.game.effects.explosion(this.pos.clone(), 4.0);
          this.game.audio?.explosion(this.pos, 1.6);
          this.game.effects.debris(this.pos.clone(), 16, 0x5f5a3c);
          this.group.rotation.z = 1.2;
          this.group.position.copy(this.pos);
        }
      } else {
        this.fireT -= dt;
        if (this.fireT <= 0) {
          this.fireT = 0.1;
          this.game.effects.smoke(this.pos.clone(), 2.0, [0.14, 0.13, 0.11], 1, 0.8, 4);
          if (Math.random() < 0.3) this.game.effects.fire(this.pos.clone());
        }
      }
      return;
    }

    this.airTime = this.onGround ? 0 : this.airTime + dt;
    const controlled = this.pilot === 'player' || this.pilot === 'bot';
    const authority = this.modules.pilot > 0 ? 1 : 0;
    const tailAuth = 0.35 + 0.65 * (this.modules.tail / 100);
    const wingAuth = 0.4 + 0.6 * ((this.modules.wingL + this.modules.wingR) / 200);
    const engineAuth = this.modules.engine / 100;

    if (this.onGround) {
      this.groundTime += dt;
      const gy = heightAt(this.pos.x, this.pos.z) + 0.06;
      this.pos.y = damp(this.pos.y, gy, 10, dt);
      // Settle firmly upright.  Planes used to keep a rolled/pitched quat
      // after touchdown and could end up taxiing upside-down.
      const yaw = this.yaw;
      const hf = heightAt(this.pos.x + Math.sin(yaw) * 2.4, this.pos.z + Math.cos(yaw) * 2.4);
      const hb = heightAt(this.pos.x - Math.sin(yaw) * 2.4, this.pos.z - Math.cos(yaw) * 2.4);
      const slopePitch = clamp(Math.atan2(hf - hb, 4.8), -0.16, 0.16);
      const targetQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(-slopePitch, yaw, 0, 'YXZ'));
      const upDot = _v2.set(0, 1, 0).applyQuaternion(this.quat).y;
      this.quat.slerp(targetQ, 1 - Math.exp(-(upDot < 0.7 ? 22 : 9) * dt));
      const hSpd = Math.hypot(this.vel.x, this.vel.z);
      const fx = Math.sin(yaw), fz = Math.cos(yaw);
      if (controlled) {
        // keep ground velocity horizontal regardless of quat
        this.vel.x = fx * hSpd;
        this.vel.z = fz * hSpd;
        if (this.throttle > 0.02) {
          this.vel.x += fx * 8.5 * this.throttle * engineAuth * dt;
          this.vel.z += fz * 8.5 * this.throttle * engineAuth * dt;
        }
      }
      this.vel.x *= Math.exp(-(controlled ? 0.12 : 1.8) * dt);
      this.vel.z *= Math.exp(-(controlled ? 0.12 : 1.8) * dt);
      this.vel.y = 0;
      this.pos.addScaledVector(this.vel, dt);
      const spd = Math.hypot(this.vel.x, this.vel.z);
      // fast, readable ground steering
      this.yaw += this.controls.yaw * dt * (spd > 1 ? 1.45 : 0.4);
      // takeoff
      if (controlled && this.throttle > 0.6 && spd > 22) {
        this.onGround = false;
        this.vel.y = 6.2;
        this.pos.y += 0.55;
        this.takeoffBoost = 2.6;
        this.quat.setFromEuler(new THREE.Euler(-0.12, this.yaw, 0, 'YXZ'));
        this.game.hud?.message('Отрыв!', 1.2);
      }
      if (!controlled) this.throttle = 0;
      this.group.position.copy(this.pos);
      this.group.quaternion.copy(this.quat);
    } else {
      // flight model
      const speed = this.speed;
      const wingFactor = (this.modules.wingL + this.modules.wingR) / 200;
      if (controlled) {
        const pitchRate = 1.5 * authority * tailAuth;
        const rollRate = 3.0 * authority * wingAuth;
        const yawRate = 1.35 * authority * tailAuth;
        const pitch = clamp(this.controls.pitch, -1, 1);
        const roll = clamp(this.controls.roll, -1, 1);
        const yaw = clamp(this.controls.yaw, -1, 1);
        _q1.setFromEuler(new THREE.Euler(-pitch * pitchRate * dt, yaw * yawRate * dt, -roll * rollRate * dt, 'YXZ'));
        this.quat.multiply(_q1);
        this.quat.normalize();
        // asymmetric wing damage roll
        const wingBias = (this.modules.wingR - this.modules.wingL) / 100;
        this.quat.multiply(_q2.setFromEuler(new THREE.Euler(0, 0, wingBias * 0.5 * dt)));
        // Never let the aircraft settle inverted; auto-level when the stick
        // is released, and strongly correct if the canopy points at the ground.
        const upNow = _v3.set(0, 1, 0).applyQuaternion(this.quat);
        const handsOff = Math.abs(pitch) < 0.08 && Math.abs(roll) < 0.08;
        if (upNow.y < 0.18 || (handsOff && upNow.y < 0.9)) {
          const fwdNow = this.forward;
          const flat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.atan2(fwdNow.x, fwdNow.z), 0, 'YXZ'));
          this.quat.slerp(flat, 1 - Math.exp(-(upNow.y < 0.18 ? 2.4 : 0.9) * dt));
        }
        this.throttle = clamp(this.throttle, 0, 1);
        const thrust = 15.5 * this.throttle * engineAuth;
        this.vel.addScaledVector(this.forward, thrust * dt);
      }
      // stall
      const stall = 24;
      if (speed < stall) {
        this.quat.multiply(_q2.setFromEuler(new THREE.Euler(0.7 * dt, 0, 0)));
      }
      const fwd = this.forward;
      const up = _v2.set(0, 1, 0).applyQuaternion(this.quat).clone();
      // lift
      const sf = clamp((speed / 40) ** 2, 0.06, 1.75);
      let lift = 9.81 * sf * (0.35 + 0.65 * wingFactor);
      if (this.takeoffBoost > 0) { lift *= 1.9; this.takeoffBoost -= dt; }
      this.vel.addScaledVector(up, lift * dt);
      this.vel.y -= 9.81 * dt;
      // drag
      const drag = 0.0040 * speed * speed + 0.12;
      this.vel.addScaledVector(this.vel.clone().normalize(), -drag * dt);
      // arcade velocity alignment
      const targetVel = fwd.multiplyScalar(Math.max(speed, 1));
      this.vel.lerp(targetVel, 1 - Math.exp(-2.4 * dt));
      const maxSpeed = 92;
      if (this.vel.length() > maxSpeed) this.vel.setLength(maxSpeed);
      this.pos.addScaledVector(this.vel, dt);
      // wing trail / smoke
      if (this.modules.wingL < 45 || this.modules.wingR < 45) {
        this.smokeT -= dt;
        if (this.smokeT <= 0) {
          this.smokeT = 0.08;
          const side = this.modules.wingL < this.modules.wingR ? -1 : 1;
          const p = this.pos.clone().add(new THREE.Vector3(side * 3.5, 0, 0).applyQuaternion(this.quat));
          this.game.effects.smoke(p, 1.0, [0.3, 0.3, 0.3], 1, 0.4, 3);
        }
      }
      if (this.modules.engine < 45) {
        this.fireT -= dt;
        if (this.fireT <= 0) {
          this.fireT = this.modules.engine < 20 ? 0.06 : 0.15;
          const p = this.pos.clone().add(new THREE.Vector3(0, 0.2, 2.2).applyQuaternion(this.quat));
          this.game.effects.smoke(p, 1.4, [0.16, 0.15, 0.14], 1, 0.8, 4);
          if (this.modules.engine < 20) this.game.effects.fire(p);
        }
      }
      // ground collision
      const gy = heightAt(this.pos.x, this.pos.z);
      if (this.pos.y < gy + 0.55) {
        const impact = Math.abs(this.vel.y);
        if (this.speed > 30 || impact > 6) {
          this.pos.y = gy + 0.4;
          this.destroy('crash');
          return;
        }
        // touch down
        this.onGround = true;
        this.pos.y = gy + 0.06;
        this.vel.y = 0;
        this.throttle *= 0.4;
        this.game.effects.dust(this.pos.clone(), 6);
        this.yaw = Math.atan2(fwd.x, fwd.z);
        this.game.hud?.message('Посадка', 1.2);
      }
      this.group.position.copy(this.pos);
      this.group.quaternion.copy(this.quat);
    }

    // control surfaces & prop
    if (this.prop) this.prop.rotation.z += (2 + this.throttle * 46) * dt;
    if (this.rudder) this.rudder.rotation.y = -this.controls.yaw * 0.4;
    if (this.elevator) this.elevator.rotation.x = -this.controls.pitch * 0.35;

    // guns
    if (this.pilot === 'player') {
      this.tracerT -= dt;
      if (this.game.input.fire && this.tracerT <= 0 && this.ammo > 0 && !this.onGround) {
        this.tracerT = 0.075;
        this.fireGuns(this.game.playerAimPoint());
      }
    }
  }

  fireGuns(target) {
    this.ammo--;
    const from = this.pos.clone().add(new THREE.Vector3(0, 0.1, 2.8).applyQuaternion(this.quat));
    const to = target.clone();
    const dist = from.distanceTo(to);
    to.x += (Math.random() - 0.5) * dist * 0.02;
    to.y += (Math.random() - 0.5) * dist * 0.02;
    to.z += (Math.random() - 0.5) * dist * 0.02;
    this.game.effects.tracer(from, to, this.team === 'british' ? 0xffe4a6 : 0xffa25e, 0.06);
    this.game.effects.muzzle(from, _v2.copy(to).sub(from).normalize(), 0.9);
    this.game.audio?.mg(this.team, from, 0.5);
    const hit = this.game.raycastTargets(from, _v2.copy(to).sub(from).normalize(), 400, this.team);
    if (hit?.entity) hit.entity.hit?.(7 + Math.random() * 5, from, _v2.copy(to).sub(from).normalize());
  }

  dispose() {
    this.game.scene.remove(this.group);
  }
}

/* ================================================================== *
 *  PARACHUTE
 * ================================================================== */
export class Parachute {
  constructor(game, pos, team, isPlayer) {
    this.game = game;
    this.team = team;
    this.isPlayer = isPlayer;
    this.pos = pos.clone();
    this.vel = new THREE.Vector3((Math.random() - 0.5) * 1.5, -3.6, (Math.random() - 0.5) * 1.5);
    this.group = buildParachute();
    this.group.position.copy(this.pos);
    this.group.scale.setScalar(1.0);
    game.scene.add(this.group);
    this.sway = Math.random() * TAU;
    this.landed = false;
    game.parachutes.push(this);
  }

  update(dt) {
    if (this.landed) return;
    this.sway += dt;
    this.vel.x = Math.sin(this.sway * 0.7) * 1.2;
    this.vel.z = Math.cos(this.sway * 0.5) * 1.0;
    this.pos.addScaledVector(this.vel, dt);
    const gy = heightAt(this.pos.x, this.pos.z);
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.sway * 0.1;
    this.group.rotation.z = Math.sin(this.sway * 1.1) * 0.08;
    if (this.pos.y <= gy + 2.3) {
      this.landed = true;
      this.game.scene.remove(this.group);
      this.game.onParachuteLanded(this);
    }
  }
}

function dampAngle(a, b, lambda, dt) {
  let d = ((b - a + Math.PI * 3) % TAU) - Math.PI;
  return a + d * (1 - Math.exp(-lambda * dt));
}

export { dampAngle };
