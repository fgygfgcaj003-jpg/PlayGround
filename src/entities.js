import * as THREE from 'three';
import { heightAt, trenchDepthAt, WORLD } from './world.js';
import {
  buildSoldier, buildMarkI, buildA7V, buildPlane, buildVickersMG, buildParachute,
  buildMGBunker, PALETTE, toonMat, addSphere, addBox,
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
    // The gun rotates independently of the field works around it.
    this.bunker = new THREE.Group();
    this.bunker.position.set(site.x, site.y, site.z);
    this.bunker.rotation.y = this.baseYaw;
    game.scene.add(this.bunker);
    this.bunkerLevel = 0;
    this.game.mgs.push(this);
  }

  refreshBunker() {
    const lvl = this.level >= 3 ? 3 : this.level >= 2 ? 2 : 0;
    if (lvl === this.bunkerLevel) return;
    this.bunkerLevel = lvl;
    while (this.bunker.children.length) {
      const c = this.bunker.children[this.bunker.children.length - 1];
      this.bunker.remove(c);
      c.traverse?.((o) => { if (o.isMesh && o.geometry?.userData?.temp) o.geometry.dispose(); });
    }
    if (lvl >= 2) {
      const works = buildMGBunker(this.team, lvl);
      this.bunker.add(works);
      this.bunkerBuilt = true;
    }
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
    // level 2 turns the scrape into a proper protected bunker, level 3 adds
    // armour plates and a heavier mounting
    this.group.scale.setScalar(1 + (this.level - 1) * 0.05);
    this.refreshBunker();
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
    // Models are authored with +X as the nose; rotate the visual inside the
    // entity group so the shared +Z forward convention works for movement,
    // steering, cameras and weapon muzzles alike.
    this.visual = this.type === 'mark1' ? buildMarkI() : buildA7V();
    this.visual.rotation.y = -Math.PI / 2;
    this.group = new THREE.Group();
    this.group.add(this.visual);
    this.group.userData = this.visual.userData;
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
      this.visual.add(g);
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

    // track plates / road wheels — continuous, speed-matched, reversible
    for (const tr of this.tracks) {
      const n = tr.path.length;
      const dummy = this._dummy || (this._dummy = new THREE.Object3D());
      if (!tr.pathLen) {
        let l = 0;
        for (let i = 0; i < n; i++) {
          const a = tr.path[i], b = tr.path[(i + 1) % n];
          l += Math.hypot(b.x - a.x, b.y - a.y);
        }
        tr.pathLen = l || 1;
        tr.spacing = tr.pathLen / tr.plates.count;
      }
      const phase = -this.trackDist / tr.spacing;
      const count = tr.plates.count;
      for (let i = 0; i < count; i++) {
        let f = (i + phase) % n;
        if (f < 0) f += n;
        const i0 = Math.floor(f);
        const frac = f - i0;
        const p = tr.path[i0];
        const p2 = tr.path[(i0 + 1) % n];
        dummy.position.set(
          p.x + (p2.x - p.x) * frac,
          (tr.baseY ?? 1.25) + p.y + (p2.y - p.y) * frac,
          tr.side * ((tr.width ?? 1.5) + 0.16),
        );
        const ang = Math.atan2(p2.y - p.y, p2.x - p.x);
        dummy.rotation.set(0, 0, ang);
        dummy.updateMatrix();
        tr.plates.setMatrixAt(i, dummy.matrix);
      }
      tr.plates.instanceMatrix.needsUpdate = true;
      for (const w of (tr.spinners || [])) w.rotation.z -= this.speed * dt * 2.35;
    }
    for (const w of (this.visual.userData.wheels || [])) w.rotation.z -= this.speed * dt * 1.6;

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
        // elevate the visible cannon towards the target
        const cp = this.visual.userData.cannonPivot;
        if (cp) {
          const elev = Math.atan2(targetPos.y - (this.pos.y + 2.1), Math.max(1, dist));
          cp.rotation.z = damp(cp.rotation.z, clamp(elev, -0.12, 0.5), 2.8, dt);
        }
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
      .applyAxisAngle(UP, this.yaw - Math.PI / 2);
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
    local.applyAxisAngle(UP, this.yaw - Math.PI / 2);
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
    out.applyAxisAngle(UP, this.yaw - Math.PI / 2);
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
    this.crashing = false;
    this.broken = false;
    this.impacted = false;
    this.health = 190;
    this.modules = { engine: 100, wingL: 100, wingR: 100, tail: 100, pilot: 100 };
    this.controls = { pitch: 0, roll: 0, yaw: 0 };
    this.pilot = null;
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
    // stable flight state — never allowed to settle inverted
    this.pitchAngle = 0;
    this.rollAngle = 0;
    this.flightSpeed = 0;
    this.wingBrokenL = false;
    this.wingBrokenR = false;
    this.tailBroken = false;
    this.pilotUnconscious = false;
    this.gStress = 0;
    this.glocRolled = false;
    this.group.position.copy(this.pos);
    this.group.quaternion.copy(this.quat);
    game.scene.add(this.group);
    this.prop = this.group.userData.propeller;
    this.rudder = this.group.userData.rudder;
    this.elevators = this.group.userData.elevators || [this.group.userData.elevator].filter(Boolean);
    this.wheels = this.group.userData.wheels || [];
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

  /* ---------------- damage / module failure ---------------- */
  hit(dmg, from, dir, moduleName = null) {
    if (!this.alive) return;
    this.lastDamage = this.game.time;
    const names = ['engine', 'wingL', 'wingR', 'tail', 'pilot'];
    const m = moduleName || names[Math.floor(Math.random() * names.length)];
    this.modules[m] = Math.max(0, this.modules[m] - dmg);
    this.health -= dmg * 0.42;
    const hitPos = this.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 3, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 3));
    this.game.effects.sparks(hitPos, 5);
    if (m === 'wingL' && this.modules.wingL <= 0 && !this.wingBrokenL) this.detachWing(-1);
    if (m === 'wingR' && this.modules.wingR <= 0 && !this.wingBrokenR) this.detachWing(1);
    if (m === 'tail' && this.modules.tail <= 0 && !this.tailBroken) this.detachTail();
    if (m === 'pilot') {
      this.game.hud?.message('Пилот ранен!', 1.1);
      if (this.modules.pilot <= 0) {
        this.game.hud?.message('Пилот без сознания — самолёт падает!', 2.2);
        this.pilotUnconscious = true;
        if (this.pilot === 'bot') this.botBail(false);
      }
    }
    if (this.health <= 0) this.destroy('shot');
    else if (this.pilot === 'bot' && (this.health < 50 || this.modules.engine <= 0)) this.botBail(false);
  }

  detachWing(side) {
    const g = side > 0 ? this.group.userData.wingL : this.group.userData.wingR;
    if (side > 0) {
      if (this.wingBrokenL) return;
      this.wingBrokenL = true;
    } else {
      if (this.wingBrokenR) return;
      this.wingBrokenR = true;
    }
    if (!g) return;
    g.updateWorldMatrix(true, false);
    const wp = g.getWorldPosition(new THREE.Vector3());
    const wq = g.getWorldQuaternion(new THREE.Quaternion());
    const clone = g.clone(true);
    g.visible = false;
    const vel = this.vel.clone().multiplyScalar(0.55).add(new THREE.Vector3(
      (Math.random() - 0.5) * 7, 2 + Math.random() * 5, (Math.random() - 0.5) * 7,
    ));
    const spin = new THREE.Vector3((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 6);
    this.game.effects.detachedPart(clone, wp, wq, vel, spin, 16);
    this.game.hud?.message(side > 0 ? 'Левое крыло оторвано!' : 'Правое крыло оторвано!', 1.8);
    this.game.audio?.explosion(this.pos, 0.8);
  }

  detachTail() {
    if (this.tailBroken) return;
    this.tailBroken = true;
    const parts = [this.group.userData.fin, this.group.userData.hStab, this.rudder, ...(this.elevators || [])].filter(Boolean);
    const anchor = parts.find((p) => p.visible) || this.group;
    anchor.updateWorldMatrix(true, false);
    const wp = anchor.getWorldPosition(new THREE.Vector3());
    const wq = anchor.getWorldQuaternion(new THREE.Quaternion());
    for (const p of parts) p.visible = false;
    const clone = this.group.userData.fin?.clone(true);
    if (clone) {
      const vel = this.vel.clone().multiplyScalar(0.5).add(new THREE.Vector3((Math.random() - 0.5) * 5, 1 + Math.random() * 4, (Math.random() - 0.5) * 5));
      this.game.effects.detachedPart(clone, wp, wq, vel, new THREE.Vector3(1.5, 3, 2), 14);
    }
    this.game.hud?.message('Хвост разрушен!', 1.8);
  }

  botBail(dead) {
    if (this.bailed || !this.pilot) return;
    this.bailed = true;
    if (!dead && this.altitude > 18) {
      this.game.spawnParachute(this.pos.clone(), this.team, false);
      this.game.hud?.message('Пилот выпрыгнул с парашютом', 1.6);
    }
    if (this.pilotSoldier) {
      const s = this.pilotSoldier;
      s.x = this.pos.x; s.y = this.pos.y; s.z = this.pos.z;
      s.inVehicle = null;
      s.group.visible = false;
      if (dead || !this.altitude) s.die(new THREE.Vector3((Math.random() - 0.5) * 0.6, 0.6, (Math.random() - 0.5) * 0.6), this.pos);
      else s.dead = true;
      this.pilotSoldier = null;
    }
    this.pilot = null;
  }

  destroy(kind = 'crash') {
    if (!this.alive) return;
    this.alive = false;
    this.crashed = true;
    this.destroyedAt = this.game.time;
    const alt = this.altitude;
    if (alt > 3) {
      this.crashing = true;
      this.impacted = false;
      this.game.effects.explosion(this.pos.clone(), 1.5);
      this.game.audio?.explosion(this.pos, 1);
      // keep the wreck falling; it breaks up on impact
      this.vel.y = Math.min(this.vel.y, -6);
    } else {
      this.game.effects.explosion(this.pos.clone().add(new THREE.Vector3(0, 0.5, 0)), 2.8);
      this.game.audio?.explosion(this.pos, 1.4);
      this.breakApart();
    }
    if (this.pilot === 'bot' && !this.bailed) this.botBail(this.modules.pilot <= 0);
    this.game.onPlaneDestroyed(this);
  }

  breakApart() {
    if (this.broken) return;
    this.broken = true;
    this.crashing = false;
    this.detachWing(1);
    this.detachWing(-1);
    this.detachTail();
    // scatter recognisable pieces of the airframe
    const color = this.team === 'british' ? 0x6f6a42 : 0x5f6a72;
    this.game.effects.debris(this.pos.clone(), 18, color);
    const rng = mulberry32(Math.floor(this.pos.x * 17 + this.pos.z * 31) >>> 0);
    for (let i = 0; i < 6; i++) {
      const g = new THREE.Group();
      addBox(g, 0.7 + rng() * 0.7, 0.08 + rng() * 0.15, 1.0 + rng(), i % 2 ? color : PALETTE.woodDark, 0, 0, 0);
      g.position.copy(this.pos).add(new THREE.Vector3((rng() - 0.5) * 3, 0.6 + rng(), (rng() - 0.5) * 3));
      this.game.scene.add(g);
      this.game.effects.detachedPart(g, g.position.clone(), new THREE.Quaternion(), new THREE.Vector3((rng() - 0.5) * 10, 3 + rng() * 7, (rng() - 0.5) * 10), new THREE.Vector3(rng() * 8, rng() * 8, rng() * 8), 12);
    }
    if (this.pilot === 'player') {
      this.game.playerPlaneHit?.(100);
      this.pilot = null;
    } else if (this.pilot === 'bot') {
      if (this.pilotSoldier) {
        const s = this.pilotSoldier;
        s.x = this.pos.x; s.y = this.pos.y; s.z = this.pos.z;
        s.inVehicle = null;
        s.group.visible = false;
        s.die(new THREE.Vector3((Math.random() - 0.5) * 2, 1.2, (Math.random() - 0.5) * 2), this.pos);
        this.pilotSoldier = null;
      }
      this.pilot = null;
    }
    this.group.visible = false;
  }

  reset(x, z, yaw) {
    this.alive = true;
    this.crashed = false;
    this.crashing = false;
    this.broken = false;
    this.impacted = false;
    this.deadTimer = 0;
    this.destroyedAt = 0;
    this.health = 190;
    this.modules = { engine: 100, wingL: 100, wingR: 100, tail: 100, pilot: 100 };
    this.pilot = null;
    this.pilotSoldier = null;
    this.bailed = false;
    this.pitchAngle = 0;
    this.rollAngle = 0;
    this.flightSpeed = 0;
    this.wingBrokenL = false;
    this.wingBrokenR = false;
    this.tailBroken = false;
    this.pilotUnconscious = false;
    this.gStress = 0;
    this.glocRolled = false;
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
    const u = this.group.userData;
    if (u.wingL) u.wingL.visible = true;
    if (u.wingR) u.wingR.visible = true;
    if (u.fin) u.fin.visible = true;
    if (u.hStab) u.hStab.visible = true;
    if (u.rudder) u.rudder.visible = true;
    for (const e of this.elevators || []) e.visible = true;
    this.elevators = u.elevators || this.elevators;
    this.wheels = u.wheels || [];
  }

  update(dt) {
    if (!this.alive) {
      this.deadTimer += dt;
      if (this.crashing) {
        this.vel.y -= 15 * dt;
        this.pos.addScaledVector(this.vel, dt);
        this.group.position.copy(this.pos);
        this.group.rotation.z += dt * 1.7;
        this.group.rotation.x += dt * 0.8;
        this.fireT -= dt;
        if (this.fireT <= 0) {
          this.fireT = 0.05;
          this.game.effects.smoke(this.pos.clone(), 3.4, [0.12, 0.11, 0.1], 1, 1.4, 5);
          this.game.effects.fire(this.pos.clone());
        }
        const gy = heightAt(this.pos.x, this.pos.z);
        if (this.pos.y <= gy + 0.3 && !this.impacted) {
          this.impacted = true;
          this.pos.y = gy + 0.25;
          this.game.effects.explosion(this.pos.clone(), 4.2);
          this.game.audio?.explosion(this.pos, 1.6);
          this.breakApart();
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
    const controlled = (this.pilot === 'player' || this.pilot === 'bot') && !this.pilotUnconscious;
    const authority = this.modules.pilot > 0 ? 1 : 0;
    const tailAuth = this.tailBroken ? 0.18 : 0.4 + 0.6 * (this.modules.tail / 100);
    const wingAuth = this.wingBrokenL || this.wingBrokenR ? 0.25 : 0.4 + 0.6 * ((this.modules.wingL + this.modules.wingR) / 200);
    const engineAuth = this.modules.engine / 100;

    if (this.onGround) {
      this.groundTime += dt;
      const gy = heightAt(this.pos.x, this.pos.z) + 0.06;
      this.pos.y = damp(this.pos.y, gy, 10, dt);
      const yaw = this.yaw;
      const fx = Math.sin(yaw), fz = Math.cos(yaw);
      const hSpd = Math.hypot(this.vel.x, this.vel.z);
      if (controlled) {
        this.vel.x = fx * hSpd;
        this.vel.z = fz * hSpd;
        if (this.throttle > 0.02) {
          this.vel.x += fx * 9.5 * this.throttle * engineAuth * dt;
          this.vel.z += fz * 9.5 * this.throttle * engineAuth * dt;
        }
        this.yaw += this.controls.yaw * dt * (hSpd > 1 ? 1.15 : 0.35);
      }
      this.vel.x *= Math.exp(-(controlled ? 0.16 : 1.8) * dt);
      this.vel.z *= Math.exp(-(controlled ? 0.16 : 1.8) * dt);
      this.vel.y = 0;
      this.pos.addScaledVector(this.vel, dt);
      const spd = Math.hypot(this.vel.x, this.vel.z);
      this.flightSpeed = spd;
      this.pitchAngle = damp(this.pitchAngle, 0, 6, dt);
      this.rollAngle = damp(this.rollAngle, 0, 6, dt);
      const hf = heightAt(this.pos.x + Math.sin(yaw) * 2.4, this.pos.z + Math.cos(yaw) * 2.4);
      const hb = heightAt(this.pos.x - Math.sin(yaw) * 2.4, this.pos.z - Math.cos(yaw) * 2.4);
      const slopePitch = clamp(Math.atan2(hf - hb, 4.8), -0.14, 0.14);
      const targetQ = new THREE.Quaternion().setFromEuler(new THREE.Euler(-slopePitch, yaw, 0, 'YXZ'));
      this.quat.slerp(targetQ, 1 - Math.exp(-9 * dt));
      if (controlled && this.throttle > 0.6 && spd > 22) {
        this.onGround = false;
        this.flightSpeed = Math.max(30, spd);
        this.vel.y = 3.2;
        this.pos.y += 0.5;
        this.pitchAngle = 0.15;
        this.game.hud?.message('Отрыв!', 1.1);
      }
      if (!controlled) this.throttle = 0;
      this.group.position.copy(this.pos);
      this.group.quaternion.copy(this.quat);
      // wheels roll on the ground
      for (const w of this.wheels) w.rotation.z -= spd * dt / 0.34;
    } else {
      // ---- stable, bank-to-turn flight model -----------------------------
      if (controlled) {
        const pitchIn = clamp(this.controls.pitch, -1, 1);
        const rollIn = clamp(this.controls.roll, -1, 1);
        const yawIn = clamp(this.controls.yaw, -1, 1);
        // G-load only builds during sustained hard manoeuvres at speed
        this.gStress = clamp(this.gStress + (Math.abs(pitchIn) * 0.9 + Math.abs(rollIn) * 0.35 - 0.42) * dt * 1.4, 0, 1.6);
        if (this.gStress > 0.95 && !this.glocRolled && this.pilot === 'player') {
          this.glocRolled = true;
          if (Math.random() < 0.5) {
            this.pilotUnconscious = true;
            this.game.hud?.message('ПЕРЕГРУЗКА! Пилот потерял сознание — вы падаете с самолётом', 3.2);
          } else {
            this.game.hud?.message('Кратковременная перегрузка — удержались в сознании', 1.6);
          }
        }
        this.pitchAngle += pitchIn * (0.9 + 0.35 * clamp(this.flightSpeed / 60, 0, 1)) * authority * tailAuth * dt;
        this.pitchAngle = clamp(this.pitchAngle, -1.02, 1.02);
        if (Math.abs(pitchIn) < 0.05) this.pitchAngle = damp(this.pitchAngle, 0.02, 1.1, dt);
        // roll is clamped so the aircraft can never end up upside down
        const bankTarget = rollIn * 0.98 * wingAuth;
        this.rollAngle = damp(this.rollAngle, bankTarget, rollIn ? 3.2 : 1.8, dt);
        const wingBias = ((this.wingBrokenL ? -0.5 : 0) + (this.wingBrokenR ? 0.5 : 0));
        this.rollAngle += wingBias * dt;
        this.rollAngle = clamp(this.rollAngle, -1.02, 1.02);
        const bankTurn = -Math.sin(this.rollAngle) * (0.7 + 0.5 * clamp(this.flightSpeed / 55, 0, 1.15));
        const rudderTurn = yawIn * 0.32 * tailAuth;
        this.yaw += (bankTurn + rudderTurn) * dt;
        this.throttle = clamp(this.throttle, 0, 1);
      } else {
        // dead stick / unconscious: nose falls and the aircraft rolls over
        this.pitchAngle = clamp(this.pitchAngle - 0.28 * dt, -1.15, 0.4);
        this.rollAngle += (this.wingBrokenL ? -0.5 : 0.45) * dt;
        this.rollAngle = clamp(this.rollAngle, -1.15, 1.15);
        this.throttle = Math.max(0, this.throttle - dt * 0.1);
      }
      // engine / speed
      const engineTarget = 48 + this.throttle * 40 + (this.modules.engine / 100) * 6;
      this.flightSpeed = damp(this.flightSpeed, engineTarget, 0.55, dt);
      this.flightSpeed -= Math.sin(this.pitchAngle) * 8.5 * dt;
      if (this.modules.engine <= 0) this.flightSpeed -= 5 * dt;
      this.flightSpeed = clamp(this.flightSpeed, 22, 96);
      // orientation is rebuilt from Euler angles every frame, guaranteeing the
      // canopy always points up and turns are smooth and readable
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-this.pitchAngle, this.yaw, this.rollAngle, 'YXZ'));
      this.quat.copy(q).normalize();
      const fwd = this.forward;
      this.vel.copy(fwd).multiplyScalar(this.flightSpeed);
      this.pos.addScaledVector(this.vel, dt);

      // wing / engine damage trails
      if (this.wingBrokenL || this.wingBrokenR || this.modules.wingL < 45 || this.modules.wingR < 45) {
        this.smokeT -= dt;
        if (this.smokeT <= 0) {
          this.smokeT = 0.07;
          const side = this.wingBrokenL ? -3.6 : this.wingBrokenR ? 3.6 : 0;
          const p = this.pos.clone().add(new THREE.Vector3(side, 0, 0).applyQuaternion(this.quat));
          this.game.effects.smoke(p, 1.1, [0.3, 0.3, 0.3], 1, 0.4, 3);
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

      // ground contact / landing / crash
      const gy = heightAt(this.pos.x, this.pos.z);
      if (this.pos.y < gy + 0.55) {
        const hard = this.vel.y < -8 || Math.abs(this.rollAngle) > 0.48 || this.pitchAngle < -0.22 || this.flightSpeed > 58;
        if (hard) {
          this.pos.y = Math.max(gy + 0.35, this.pos.y);
          this.destroy('crash');
          return;
        }
        this.onGround = true;
        this.pos.y = gy + 0.06;
        this.vel.y = 0;
        this.throttle *= 0.35;
        this.pitchAngle = 0;
        this.rollAngle = 0;
        this.yaw = Math.atan2(fwd.x, fwd.z);
        this.quat.setFromEuler(new THREE.Euler(0, this.yaw, 0));
        this.game.effects.dust(this.pos.clone(), 6);
        this.game.hud?.message('Посадка', 1.1);
      }
      this.group.position.copy(this.pos);
      this.group.quaternion.copy(this.quat);
    }

    // control surfaces & propeller
    if (this.prop) this.prop.rotation.z += (2 + this.throttle * 46) * dt;
    if (this.rudder) this.rudder.rotation.y = -this.controls.yaw * 0.45;
    for (const e of this.elevators || []) e.rotation.x = -this.controls.pitch * 0.38;
    for (const sideKey of ['wingL', 'wingR']) {
      const wg = this.group.userData[sideKey];
      const ails = wg?.userData?.ailerons || [];
      for (const a of ails) if (a) a.rotation.x = this.controls.roll * (sideKey === 'wingL' ? 0.4 : -0.4);
    }

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
    const from = this.pos.clone().add(new THREE.Vector3(0, 1.5, 2.6).applyQuaternion(this.quat));
    const to = target.clone();
    const dist = from.distanceTo(to);
    to.x += (Math.random() - 0.5) * dist * 0.02;
    to.y += (Math.random() - 0.5) * dist * 0.02;
    to.z += (Math.random() - 0.5) * dist * 0.02;
    this.game.effects.tracer(from, to, this.team === 'british' ? 0xffe4a6 : 0xffa25e, 0.06);
    this.game.effects.muzzle(from, _v2.copy(to).sub(from).normalize(), 0.9);
    this.game.audio?.mg(this.team, from, 0.5);
    const hit = this.game.raycastTargets(from, _v2.copy(to).sub(from).normalize(), 400, this.team);
    if (hit?.entity) hit.entity.hit?.(7 + Math.random() * 5, from, _v2.copy(to).sub(from).normalize(), hit.module);
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
