import * as THREE from 'three';
import { heightAt, trenchZ, trenchWidth, WORLD, BRITISH, GERMAN, inTrench } from './world.js';
import { Soldier } from './entities.js';
import { clamp, damp, TAU, mulberry32 } from './util.js';

const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();

function wrapAngle(a) {
  return ((a + Math.PI * 3) % TAU) - Math.PI;
}

export class AIController {
  constructor(game) {
    this.game = game;
    this.rng = mulberry32(4321);
    this.waveTimer = 9;
    this.planeTimer = 0;
    this.planeLaunched = new Set();
  }

  update(dt) {
    const game = this.game;
    // infantry
    for (const s of game.soldiers) {
      if (s.dead || s.inVehicle) continue;
      if (s.aiRole === 'crew' && s.boardTarget) { this.updateCrew(s, dt); continue; }
      if (s.aiRole === 'pilot' && s.boardTarget) { this.updatePilotBoarding(s, dt); continue; }
      if (s.aiRole === 'engineer') { this.updateEngineer(s, dt); continue; }
      if (s.aiRole === 'sentry') { this.updateSentry(s, dt); continue; }
      if (s.mgSite) { this.updateMGunner(s, dt); continue; }
      this.updateInfantry(s, dt);
    }
    // tanks
    for (const t of game.tanks) this.updateTank(t, dt);
    // planes
    for (const p of game.planes) {
      if (!p.alive) {
        if (p.deadTimer > 55) this.respawnPlane(p);
        continue;
      }
      if (p.pilot === 'bot') this.updatePlane(p, dt);
    }
    // waves
    this.waveTimer -= dt;
    if (this.waveTimer <= 0) {
      this.waveTimer = 32 + this.rng() * 12;
      this.launchWave();
    }
    // auto launch bot planes after a delay
    this.planeTimer += dt;
    for (const p of game.planes) {
      if (p.pilot === 'bot' && p.onGround && this.planeTimer > 6 && !this.planeLaunched.has(p)) {
        p.throttle = 1;
      }
    }
  }

  updateInfantry(s, dt) {
    const game = this.game;
    s.aiTimer = (s.aiTimer ?? 0) - dt;
    if (s.aiTimer <= 0) {
      s.aiTimer = 0.4 + this.rng() * 0.5;
      s.target = game.findTarget(s.team, s.x, s.z, 190);
    }
    const side = s.team === 'british' ? -1 : 1;
    const enemyDir = -side;
    const dist = s.target ? Math.hypot(s.target.x - s.x, s.target.z - s.z) : 999;
    const hasTarget = s.target && !game.isDead(s.target);

    if (hasTarget) {
      s.setAim(s.target);
      s.wantFire = true;
      s.fireTarget = s.target;
      if (dist > 100 && s.assault) {
        // advance in bounds
        s.aiMoveTimer = (s.aiMoveTimer ?? 0) - dt;
        if (s.aiMoveTimer <= 0) {
          s.aiMoveTimer = 1.6 + this.rng() * 1.4;
          s.advanceX = s.target.x + (this.rng() - 0.5) * 18;
          s.advanceZ = s.target.z + (this.rng() - 0.5) * 10;
        }
        this.stepToward(s, s.advanceX ?? s.target.x, s.advanceZ ?? s.target.z, 1.0, true);
      } else if (dist < 75) {
        // sidestep for cover
        s.strafeTimer = (s.strafeTimer ?? 0) - dt;
        if (s.strafeTimer <= 0) {
          s.strafeTimer = 1.2 + this.rng() * 1.8;
          s.strafeDir = this.rng() < 0.5 ? -1 : 1;
        }
        const zStep = trenchZ(s.x, side) - side * (trenchWidth(s.x) - 0.85);
        const tx = clamp(s.homeX + (s.strafeDir ?? 1) * 4, -600, 600);
        this.stepToward(s, tx, s.inTrench ? zStep : s.z, 0.6, false);
      } else {
        s.setMove(0, 0);
      }
    } else {
      s.wantFire = false;
      s.fireTarget = null;
      s.target = null;
      // patrol / advance
      if (s.assault) {
        const tz = side > 0 ? -60 : 60;
        if (Math.abs(s.z - tz) < 6) { s.assault = false; }
        s.aiMoveTimer = (s.aiMoveTimer ?? 0) - dt;
        if (s.aiMoveTimer <= 0) {
          s.aiMoveTimer = 2.5;
          s.advanceX = s.x + (this.rng() - 0.5) * 40;
          s.advanceZ = tz;
        }
        this.stepToward(s, s.advanceX, s.advanceZ, 1.0, true);
      } else {
        s.patrolTimer = (s.patrolTimer ?? 0) - dt;
        if (s.patrolTimer <= 0 || Math.hypot((s.patrolX ?? s.homeX) - s.x, (s.patrolZ ?? s.homeZ) - s.z) < 1.5) {
          s.patrolTimer = 3 + this.rng() * 5;
          s.patrolX = clamp(s.homeX + (this.rng() - 0.5) * 56, -580, 580);
          s.patrolZ = trenchZ(s.patrolX, side) - side * (trenchWidth(s.patrolX) - 0.85);
        }
        this.stepToward(s, s.patrolX, s.patrolZ, 0.55, false);
      }
    }
  }

  stepToward(s, tx, tz, speedScale = 1, run = false) {
    const dx = tx - s.x, dz = tz - s.z;
    const d = Math.hypot(dx, dz);
    if (d < 1.0) { s.setMove(0, 0); return; }
    // don't walk straight into a tank (unless it is the one we are boarding)
    for (const t of this.game.tanks) {
      if (!t.alive || t === s.boardTarget) continue;
      const ddx = s.x - t.pos.x, ddz = s.z - t.pos.z;
      if (ddx * ddx + ddz * ddz < 20) {
        s.setMove(-ddz, ddx, false);
        return;
      }
    }
    s.setMove(dx / d, dz / d, run);
    s.running = run;
    s.speedScale = speedScale;
  }

  updateCrew(s, dt) {
    const t = s.boardTarget;
    if (!t || !t.alive) { s.aiRole = 'rifle'; s.boardTarget = null; return; }
    const d = Math.hypot(s.x - t.pos.x, s.z - t.pos.z);
    if (d < 4.2) {
      if (t.board(s)) {
        s.aiRole = 'aboard';
        s.boardTarget = null;
      }
      return;
    }
    this.stepToward(s, t.pos.x, t.pos.z, 1, true);
  }

  updatePilotBoarding(s, dt) {
    const p = s.boardTarget;
    if (!p || !p.alive || p.pilot) { s.aiRole = 'rifle'; s.boardTarget = null; return; }
    const d = Math.hypot(s.x - p.pos.x, s.z - p.pos.z);
    if (d < 4.5) {
      p.setPilot('bot', s);
      s.aiRole = 'aboard';
      s.boardTarget = null;
      p.throttle = 1;
      return;
    }
    this.stepToward(s, p.pos.x, p.pos.z, 1, true);
  }

  updateEngineer(s, dt) {
    const game = this.game;
    s.engineerCd = (s.engineerCd ?? 4) - dt;
    s.toolSwing = Math.max(0, (s.toolSwing || 0) - dt * 3.2);
    const side = s.team === 'british' ? -1 : 1;
    const frontZ = trenchZ(s.x, side) - side * (trenchWidth(s.x) - 0.85);
    const far = Math.abs(s.z - frontZ);
    if (far > 10) {
      this.stepToward(s, s.x + (this.rng() - 0.5) * 10, frontZ, 0.9, far > 28);
      s.wantFire = false;
      return;
    }
    s.setMove(0, 0);
    // engineers stop work and return fire if the enemy is close
    s.aiTimer = (s.aiTimer ?? 0) - dt;
    if (s.aiTimer <= 0) {
      s.aiTimer = 0.5 + this.rng() * 0.6;
      s.target = game.findTarget(s.team, s.x, s.z, 120);
    }
    if (s.target && !game.isDead(s.target)) {
      s.setAim(s.target);
      s.wantFire = true;
      s.fireTarget = s.target;
    } else {
      s.wantFire = false;
      s.fireTarget = null;
      s.target = null;
    }
    if (s.engineerCd <= 0) {
      s.engineerCd = 7 + this.rng() * 8;
      game.engineerBuild(s);
    }
  }

  updateSentry(s, dt) {
    s.aiTimer = (s.aiTimer ?? 0) - dt;
    if (s.aiTimer <= 0) {
      s.aiTimer = 0.35 + this.rng() * 0.5;
      s.target = this.game.findTarget(s.team, s.x, s.z, 230);
    }
    s.setMove(0, 0);
    if (s.target && !this.game.isDead(s.target)) {
      s.setAim(s.target);
      s.wantFire = true;
      s.fireTarget = s.target;
    } else {
      s.wantFire = false;
      s.fireTarget = null;
      s.target = null;
    }
  }

  updateMGunner(s, dt) {
    const mg = s.mgSite;
    if (!mg) return;
    if (mg.mountedBy && mg.mountedBy !== s) { s.mgSite = null; s.aiRole = 'rifle'; return; }
    if (!mg.mountedBy) {
      const d = Math.hypot(s.x - mg.site.x, s.z - mg.site.z);
      if (d < 1.4) { mg.mount(s); s.setMove(0, 0); }
      else this.stepToward(s, mg.site.x, mg.site.z, 1, true);
    } else {
      s.setMove(0, 0);
      s.wantFire = false;
    }
  }

  updateTank(t, dt) {
    if (!t.alive || t.playerAboard) return;
    if (!t.operational) { t.desiredSpeed = 0; return; }
    const side = t.team === 'british' ? 1 : -1;
    if (!t.path || !t.path.length) {
      const base = t.team === 'british' ? [[-180, -92], [-120, -64], [-70, -25], [-20, -2], [-20, 38], [-10, 74], [40, 92]]
        : [[120, 58], [80, 30], [35, 6], [18, -26], [6, -54], [-24, -70], [-60, -88]];
      t.path = base.map(([x, z]) => new THREE.Vector3(x, 0, z));
      t.pathIndex = 0;
    }
    const wp = t.path[t.pathIndex];
    const dx = wp.x - t.pos.x, dz = wp.z - t.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 11) {
      t.pathIndex = Math.min(t.path.length - 1, t.pathIndex + 1);
      t.waitT = (t.waitT ?? 0) + 1;
    }
    // if enemy nearby, hold and fire (armour takes priority)
    let enemy = this.game.findTarget(t.team, t.pos.x, t.pos.z, 140);
    let enemyD = enemy ? Math.hypot(enemy.x - t.pos.x, enemy.z - t.pos.z) : Infinity;
    for (const other of this.game.tanks) {
      if (other === t || !other.alive || other.team === t.team) continue;
      const d = Math.hypot(other.pos.x - t.pos.x, other.pos.z - t.pos.z);
      if (d < 240 && d < enemyD) { enemy = other; enemyD = d; }
    }
    if (enemy) {
      t.target = enemy;
      t.desiredSpeed = dist > 14 ? 2.4 : 0;
      const ex = enemy.pos ? enemy.pos.x : enemy.x;
      const ez = enemy.pos ? enemy.pos.z : enemy.z;
      const desiredYaw = Math.atan2(ex - t.pos.x, ez - t.pos.z);
      t.steer = clamp(wrapAngle(desiredYaw - t.yaw), -1, 1) * 0.8;
    } else {
      t.desiredSpeed = dist > 8 ? 3.0 : 0;
      const desiredYaw = Math.atan2(dx, dz);
      t.steer = clamp(wrapAngle(desiredYaw - t.yaw), -1, 1);
    }
  }

  updatePlane(p, dt) {
    const game = this.game;
    if (!p.alive) return;
    if (!p.botState) p.botState = { mode: 'takeoff', timer: 0, target: null, waypoint: null };
    const st = p.botState;
    st.timer -= dt;
    if (p.onGround) {
      p.throttle = 1;
      p.controls.pitch = 0;
      p.controls.roll = 0;
      const dir = p.team === 'british' ? Math.PI / 2 : -Math.PI / 2;
      const err = wrapAngle(dir - p.yaw);
      p.controls.yaw = clamp(err * 1.5, -1, 1);
      if (p.speed > 26) {
        p.controls.pitch = 0.7;
      }
      if (p.speed > 1) this.planeLaunched.add(p);
      return;
    }
    p.throttle = 0.9;
    // pick target
    if (st.timer <= 0 || !st.target || game.isDead(st.target)) {
      st.timer = 3.5 + Math.random() * 2;
      const enemyPlanes = game.planes.filter((q) => q.alive && q.team !== p.team && (q.pilot === 'player' || q.pilot === 'bot'));
      if (enemyPlanes.length && Math.random() < 0.7) {
        st.target = enemyPlanes[Math.floor(Math.random() * enemyPlanes.length)];
      } else {
        st.target = game.findTarget(p.team, p.pos.x, p.pos.z, 420);
      }
    }
    const target = st.target;
    if (target) {
      const tp = target.pos ? target.pos.clone() : new THREE.Vector3(target.x, target.y + 1, target.z);
      const to = tp.clone().sub(p.pos);
      const dist = to.length();
      const local = to.clone().normalize().applyQuaternion(p.quat.clone().invert());
      // altitude safety
      const alt = p.altitude;
      if (alt < 22) {
        p.controls.pitch = 0.9;
        p.controls.roll = clamp(local.x * 1.2, -0.6, 0.6);
      } else {
        p.controls.pitch = clamp(local.y * 2.2, -0.85, 0.9);
        p.controls.roll = clamp(local.x * 2.4, -1, 1);
        p.controls.yaw = clamp(local.x * 0.5, -0.6, 0.6);
      }
      // fire when aligned
      p.tracerT = (p.tracerT ?? 0) - dt;
      if (dist < 340 && local.z > 0.965 && p.tracerT <= 0) {
        p.tracerT = 0.09;
        p.fireGuns(tp);
        if (target.hit && !target.isPlane) {
          if (Math.random() < 0.06) target.hit(9, p.pos, to.normalize());
        }
      }
      if (target.isPlane && dist < 40) {
        p.controls.roll += 0.6;
      }
    } else {
      // patrol across the lines
      if (!st.waypoint || p.pos.distanceTo(st.waypoint) < 70) {
        st.waypoint = new THREE.Vector3((Math.random() - 0.5) * 500, 65 + Math.random() * 40, (Math.random() - 0.5) * 200);
      }
      const to = st.waypoint.clone().sub(p.pos);
      const local = to.clone().normalize().applyQuaternion(p.quat.clone().invert());
      p.controls.pitch = clamp(local.y * 1.8, -0.4, 0.6);
      p.controls.roll = clamp(local.x * 1.5, -0.6, 0.6);
      p.controls.yaw = clamp(local.x * 0.4, -0.5, 0.5);
      if (p.altitude < 45) p.controls.pitch = 0.5;
    }
  }

  respawnPlane(p) {
    const game = this.game;
    let spec;
    if (p === game.playerPlane) {
      spec = { x: -368, z: -103, yaw: Math.PI / 2, team: 'british', bot: false };
    } else if (p === game.enemyPlane) {
      spec = { x: WORLD.enemyPlaneSpawn.x, z: WORLD.enemyPlaneSpawn.z, yaw: -Math.PI / 2, team: 'german', bot: true };
    } else {
      spec = { x: -400, z: -110, yaw: Math.PI / 2, team: 'british', bot: true };
    }
    p.reset(spec.x, spec.z, spec.yaw);
    if (spec.bot) {
      const s = new Soldier(game, {
        x: spec.x + 9, z: spec.z - 11, team: spec.team,
        variant: spec.team === 'british' ? 'british1' : 'german1',
      });
      s.aiRole = 'pilot';
      s.boardTarget = p;
      s.homeX = s.x; s.homeZ = s.z;
    }
    game.hud?.killfeed(spec.team === 'british' ? 'Британский самолёт готов к вылету' : 'Германский самолёт готов к вылету', spec.team);
  }

  launchWave() {
    const game = this.game;
    for (const team of ['british', 'german']) {
      const pool = game.soldiers.filter((s) => s.team === team && !s.dead && !s.inVehicle && !s.mgSite && s.aiRole === 'rifle' && !s.assault);
      const count = 2 + Math.floor(this.rng() * 3);
      for (let i = 0; i < Math.min(count, pool.length); i++) {
        const s = pool[Math.floor(this.rng() * pool.length)];
        if (s) {
          s.assault = true;
          s.aiRole = 'assault';
          s.homeX = s.x;
          s.patrolTimer = 0;
        }
      }
    }
  }
}
