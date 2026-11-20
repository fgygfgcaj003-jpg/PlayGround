import * as THREE from 'three';
import { clamp, lerp, rand, pick, chance, TAU, normAngle, formatMoney } from './utils.js';
import { VEHICLE_TYPES, buildVehicleModel, randomVehicleColor, setLightState } from './models.js';
import { HALF_ROAD, NODE_POS } from './city.js';

const AXES = [[1, 0], [-1, 0], [0, 1], [0, -1]];

export class Vehicle {
  constructor(game, type, x, z, heading = 0, opts = {}) {
    this.game = game;
    this.type = type;
    this.cfg = VEHICLE_TYPES[type];
    this.model = buildVehicleModel(type, opts.color ?? this.cfg.color ?? randomVehicleColor(type), { traffic: opts.traffic });
    this.group = this.model.group;
    this.wheels = this.model.wheels || [];
    this.headMats = this.model.headMats || [];
    this.brakeMats = this.model.brakeMats || [];
    this.turnMats = this.model.turnMats || [];
    this.bodyMat = this.model.bodyMat;
    this.rotor = this.model.rotor;
    this.tailRotor = this.model.tailRotor;
    this.rider = this.model.rider;
    this.group.position.set(x, opts.y ?? 0.02, z);
    this.group.rotation.y = heading;
    game.scene.add(this.group);
    this.pos = this.group.position;
    this.heading = heading;
    this.velocity = new THREE.Vector2();
    this.speed = 0;
    this.steer = 0;
    this.throttle = 0;
    this.brakeInput = 0;
    this.handbrake = false;
    this.health = 100;
    this.fuel = this.cfg.fuel;
    this.engineOn = true;
    this.lightsOn = false;
    this.indicator = 0;
    this.damageFlash = 0;
    this.lastCrash = 0;
    this.wheelSpin = 0;
    this.mode = opts.mode || (opts.traffic ? 'traffic' : 'parked');
    this.service = opts.service || null;
    this.owned = !!opts.owned;
    this.knock = new THREE.Vector2();
    this.knockTimer = 0;
    this.smokeAcc = 0;
    this.driverVisible = false;
    this.verticalVelocity = 0;
    this.altitude = opts.y ?? 0;
    this.rotorAngle = 0;
    this.traffic = null;
    this.parkedName = opts.name || null;
    this.interiorLight = 0;
    this.isPlayer = false;
    this.enterable = true;
    this.doorOpen = false;
    this.turret = null;
    this.wakeAcc = 0;
    this.speedKmh = 0;
    this.brakeOn = false;
    this.cruise = 0;
    this.lodTick = Math.random() * 4;
    if (opts.traffic) this.initTraffic();
    if (this.service) this.addServiceLights();
  }

  get isBoat() { return !!this.cfg.isBoat; }
  get isAir() { return !!this.cfg.isAir; }
  get halfLen() { return this.cfg.len / 2; }
  get halfWid() { return this.cfg.wid / 2; }

  addServiceLights() {
    const g = new THREE.Group();
    const redM = new THREE.MeshBasicMaterial({ color: 0xff2020, toneMapped: false });
    const blueM = new THREE.MeshBasicMaterial({ color: 0x2a5bff, toneMapped: false });
    const y = this.type === 'motorcycle' ? 1.2 : this.cfg.height + (this.type === 'bus' ? .1 : .02);
    const geo = new THREE.BoxGeometry(this.type === 'fire' ? 1.4 : .55, .16, .38);
    const r = new THREE.Mesh(geo, redM); r.position.set(-.3, y, this.type === 'sedan' ? 0 : 0);
    const b = new THREE.Mesh(geo, blueM); b.position.set(.3, y, 0);
    g.add(r, b);
    const l = new THREE.PointLight(0xff3333, 0, 18, 2); l.position.set(0, y, 0);
    g.add(l);
    this.group.add(g);
    this.serviceLights = { redM, blueM, light: l, group: g };
  }

  initTraffic() {
    let node = this.game.city.nearestNode(this.pos.x, this.pos.z);
    let dir = pick(AXES);
    let next = this.getNeighbor(node, dir);
    let guard = 0;
    while (!next && guard++ < 8) { dir = pick(AXES); next = this.getNeighbor(node, dir); }
    if (!next) { this.mode = 'parked'; return; }
    this.traffic = {
      node, next, dir, t: rand(2, 60), lane: 3.9, cruise: this.type === 'bus' || this.type === 'truck' ? rand(8, 10) : rand(10, 14),
      turnTimer: 0, stopTimer: 0,
    };
    const p = this.lanePoint(this.traffic);
    this.pos.x = p.x; this.pos.z = p.z;
    this.heading = Math.atan2(dir[0], dir[1]);
    this.group.rotation.y = this.heading;
    this.mode = 'traffic';
  }

  getNeighbor(node, dir) {
    const i = node.i + dir[0], j = node.j + dir[1];
    if (i < 0 || i >= 9 || j < 0 || j >= 9) return null;
    return this.game.city.nodeGrid[i][j];
  }

  lanePoint(tr, ahead = 0) {
    const nx = tr.node.x + tr.dir[0] * (tr.t + ahead);
    const nz = tr.node.z + tr.dir[1] * (tr.t + ahead);
    const rx = -tr.dir[1], rz = tr.dir[0];
    return { x: nx + rx * tr.lane, z: nz + rz * tr.lane };
  }

  chooseNext(tr) {
    const options = [];
    const back = [-tr.dir[0], -tr.dir[1]];
    for (const d of AXES) {
      if (d[0] === back[0] && d[1] === back[1]) continue;
      if (this.getNeighbor(tr.next, d)) options.push(d);
    }
    if (!options.length) return [-tr.dir[0], -tr.dir[1]];
    // prefer straight
    const straight = options.filter(d => d[0] === tr.dir[0] && d[1] === tr.dir[1]);
    if (straight.length && Math.random() < .55) return straight[0];
    return pick(options);
  }

  updateTraffic(dt, elapsed, night, weather) {
    const tr = this.traffic;
    if (!tr) return;
    if (this.knockTimer > 0) {
      this.knockTimer -= dt;
      this.pos.x += this.knock.x * dt;
      this.pos.z += this.knock.y * dt;
      this.knock.multiplyScalar(1 - dt * 4);
    }
    const segLen = 96;
    // signal ahead
    const axis = tr.dir[0] !== 0 ? 'x' : 'z';
    const distToNode = segLen - tr.t;
    let targetSpeed = tr.cruise;
    let stop = false;
    if (distToNode < 25) {
      const state = this.game.city.signalState(tr.next, axis, elapsed);
      if (state === 'red' || (state === 'yellow' && distToNode > 8)) {
        if (distToNode < 19) stop = true;
      }
    }
    // forward obstacle: traffic and player vehicles
    if (!stop) {
      const fx = Math.sin(this.heading), fz = Math.cos(this.heading);
      for (const other of this.game.vehicles.vehicles) {
        if (other === this) continue;
        const dx = other.pos.x - this.pos.x, dz = other.pos.z - this.pos.z;
        const d = Math.hypot(dx, dz);
        if (d < (other.cfg.len + this.cfg.len) * .5 + 4 && d > 0.01) {
          const dot = (dx * fx + dz * fz) / d;
          if (dot > .7) { stop = true; break; }
        }
      }
      // pedestrians in front
      const ped = this.game.npcs?.anyInFront(this.pos.x, this.pos.z, this.heading, 8);
      if (ped) stop = true;
    }
    if (stop) targetSpeed = 0;
    if (this.health < 15) targetSpeed = 0;
    const accel = stop ? this.cfg.brake * .8 : this.cfg.accel * .55;
    this.speed = this.speed < targetSpeed ? Math.min(targetSpeed, this.speed + accel * dt) : Math.max(targetSpeed, this.speed - this.cfg.brake * dt);
    this.brakeOn = stop && this.speed > .1;
    // steering
    const p = this.lanePoint(tr, 10);
    const dx = p.x - this.pos.x, dz = p.z - this.pos.z;
    const desired = Math.atan2(dx, dz);
    let diff = normAngle(desired - this.heading);
    const turnRate = clamp(this.speed * .35, 0, 2.2);
    this.heading = normAngle(this.heading + clamp(diff, -turnRate * dt, turnRate * dt));
    // move
    const fx = Math.sin(this.heading), fz = Math.cos(this.heading);
    this.pos.x += fx * this.speed * dt;
    this.pos.z += fz * this.speed * dt;
    this.group.rotation.y = this.heading;
    tr.t += this.speed * dt;
    // lane correction
    const lp = this.lanePoint(tr, 0);
    this.pos.x += (lp.x - this.pos.x) * Math.min(1, dt * 1.5);
    this.pos.z += (lp.z - this.pos.z) * Math.min(1, dt * 1.5);
    if (tr.t >= segLen) {
      tr.t -= segLen;
      tr.node = tr.next;
      tr.dir = this.chooseNext(tr);
      tr.next = this.getNeighbor(tr.node, tr.dir);
      if (!tr.next) { tr.node = this.game.city.nearestNode(this.pos.x, this.pos.z); tr.dir = pick(AXES); tr.next = this.getNeighbor(tr.node, tr.dir); }
    }
    // visuals
    this.animateWheels(dt);
    this.speedKmh = this.speed * 3.6;
    if (this.lightsOn !== (night > .4 || weather !== 'clear')) { this.lightsOn = night > .4 || weather !== 'clear'; }
    setLightState(this.headMats, this.brakeMats, this.turnMats, { lightsOn: this.lightsOn, braking: this.brakeOn || this.speed < .2 });
    if (this.serviceLights) {
      const on = Math.floor(elapsed * 5) % 2 === 0;
      this.serviceLights.redM.color.setHex(on ? 0xff2020 : 0x300808);
      this.serviceLights.blueM.color.setHex(on ? 0x0a0a30 : 0x2a5bff);
      this.serviceLights.light.color.setHex(on ? 0xff2020 : 0x2a5bff);
      this.serviceLights.light.intensity = on ? 2.6 : 2.2;
    }
  }

  updatePlayer(dt, controls, weather, elapsed, night) {
    this.isPlayer = true;
    if (this.isAir) return this.updateHelicopter(dt, controls, night);
    if (this.isBoat) return this.updateBoat(dt, controls, weather, night);
    const cfg = this.cfg;
    const f = new THREE.Vector2(Math.sin(this.heading), Math.cos(this.heading));
    const r = new THREE.Vector2(-f.y, f.x);
    let vf = this.velocity.dot(f);
    let vr = this.velocity.dot(r);
    const damageFactor = clamp(1 - (100 - this.health) / 150, .35, 1);
    const hasFuel = this.fuel > 0.1;
    const engine = this.engineOn && hasFuel && this.health > 6;
    this.throttle = controls.throttle || 0;
    this.brakeInput = controls.brake || 0;
    this.handbrake = !!controls.handbrake;
    const offroad = !this.game.city.isOnRoad(this.pos.x, this.pos.z);
    const wet = weather === 'rain' || weather === 'storm';
    const maxSpeed = cfg.maxSpeed * damageFactor * (offroad ? .62 : 1) * (wet ? .86 : 1);
    // reverse handling
    if (this.brakeInput > 0 && vf <= .4) {
      if (engine) vf -= cfg.accel * .45 * dt * damageFactor;
    } else if (this.brakeInput > 0) {
      vf -= cfg.brake * this.brakeInput * dt;
    }
    if (this.throttle > 0 && engine) {
      const power = cfg.accel * (1 - clamp(Math.abs(vf) / maxSpeed, 0, 1) * .72);
      vf += power * this.throttle * dt * damageFactor;
    }
    vf = clamp(vf, -maxSpeed * .35, maxSpeed);
    // drag + rolling
    vf *= 1 - dt * (offroad ? 1.2 : .22);
    vf -= Math.sign(vf) * Math.min(Math.abs(vf), (offroad ? 4.5 : 0.8) * dt);
    // lateral grip
    let grip = cfg.grip * (wet ? .52 : 1) * (offroad ? .55 : 1);
    if (this.handbrake) grip *= .16;
    if (this.health < 40) grip *= .86;
    vr *= Math.exp(-grip * dt);
    // steering
    const steerTarget = controls.steer || 0;
    this.steer = lerp(this.steer, steerTarget, clamp(dt * 8, 0, 1));
    const speedFactor = clamp(Math.abs(vf) / 7, 0, 1);
    const turnBoost = this.handbrake ? 1.45 : 1;
    const turnRate = 1.5 * speedFactor * (1 - clamp(Math.abs(vf) / cfg.maxSpeed, 0, 1) * .38) * turnBoost;
    this.heading = normAngle(this.heading + this.steer * turnRate * dt * (vf < 0 ? -1 : 1));
    // wet slide adds lateral velocity through the turn
    if (wet || this.handbrake) {
      vr += this.steer * vf * (wet ? .09 : .2) * dt * (this.handbrake ? 2.4 : 1);
    }
    const nf = new THREE.Vector2(Math.sin(this.heading), Math.cos(this.heading));
    const nr = new THREE.Vector2(-nf.y, nf.x);
    this.velocity.set(nf.x * vf + nr.x * vr, nf.y * vf + nr.y * vr);
    this.pos.x += this.velocity.x * dt;
    this.pos.z += this.velocity.y * dt;
    this.group.rotation.y = this.heading;
    // body roll / pitch
    if (this.wheels.length) {
      this.group.rotation.z = lerp(this.group.rotation.z, -this.steer * clamp(vf / 40, 0, 1) * .055, dt * 5);
      this.group.rotation.x = lerp(this.group.rotation.x, clamp((this.throttle - this.brakeInput) * .012, -.02, .02), dt * 4);
    }
    this.speed = vf;
    this.speedKmh = Math.abs(vf) * 3.6;
    this.brakeOn = this.brakeInput > 0 || (this.throttle === 0 && Math.abs(vf) > .2) || this.handbrake;
    // fuel
    if (engine) {
      this.fuel = Math.max(0, this.fuel - dt * (0.011 + Math.abs(vf) * .00075 * (this.throttle > 0 ? 2.2 : 1)));
    }
    // collisions
    this.resolveWorldCollisions(dt, vf);
    this.animateWheels(dt);
    this.animateLights(elapsed, night, controls);
    if (this.health < 55) this.game.effects.smokeAtVehicle(this, dt);
    if (hasFuel === false && engine) { this.engineOn = false; }
  }

  updateHelicopter(dt, controls, night) {
    const cfg = this.cfg;
    const hasFuel = this.fuel > 0.1;
    const engine = this.engineOn && hasFuel;
    this.throttle = controls.throttle || 0;
    this.brakeInput = controls.brake || 0;
    this.steer = controls.steer || 0;
    const up = controls.up || 0, down = controls.down || 0;
    const targetVY = engine ? (up - down) * 11 : -9;
    this.verticalVelocity = lerp(this.verticalVelocity, targetVY, dt * 2.2);
    this.altitude = Math.max(0.5, this.altitude + this.verticalVelocity * dt);
    const f = new THREE.Vector2(Math.sin(this.heading), Math.cos(this.heading));
    let forwardSpeed = this.velocity.dot(f);
    const targetSpeed = engine ? this.throttle * cfg.maxSpeed - this.brakeInput * 10 : 0;
    forwardSpeed = lerp(forwardSpeed, targetSpeed, dt * .7);
    this.heading = normAngle(this.heading + this.steer * dt * (1.15 + clamp(Math.abs(forwardSpeed) / 40, 0, .4)));
    const nf = new THREE.Vector2(Math.sin(this.heading), Math.cos(this.heading));
    this.velocity.set(nf.x * forwardSpeed, nf.y * forwardSpeed);
    this.pos.x += this.velocity.x * dt;
    this.pos.z += this.velocity.y * dt;
    this.pos.y = lerp(this.pos.y, this.altitude + Math.sin(performance.now() * .001) * .06, dt * 5);
    this.group.rotation.y = this.heading;
    this.group.rotation.z = lerp(this.group.rotation.z, -this.steer * .18 - this.velocity.x * .001, dt * 2);
    this.group.rotation.x = lerp(this.group.rotation.x, clamp(-forwardSpeed * .004, -.16, .16), dt * 2);
    this.speed = Math.abs(forwardSpeed);
    this.speedKmh = Math.abs(forwardSpeed) * 3.6;
    this.fuel = Math.max(0, this.fuel - dt * (0.03 + (up ? .04 : 0)));
    this.rotorAngle += dt * (engine ? 42 : 8);
    this.model.rotor.rotation.y = this.rotorAngle;
    if (this.model.tailRotor) this.model.tailRotor.rotation.x = this.rotorAngle * 1.4;
    if (this.rotor) this.rotor.rotation.y = this.rotorAngle;
    this.brakeOn = false;
    // building crash
    if (this.altitude < 30) {
      const hit = this.game.city.collideCircle(this.pos.x, this.pos.z, 3);
      if (hit && hit.box.height > this.pos.y) {
        this.pos.x -= hit.nx * hit.pen; this.pos.z -= hit.nz * hit.pen;
        this.health = Math.max(0, this.health - 12);
        this.game.effects.sparksAt(this.pos.x, this.pos.y, this.pos.z, 14);
        this.verticalVelocity = 2;
      }
    }
    if (this.pos.y < 2.2) {
      this.pos.y = 2.2; this.altitude = 2.2; this.verticalVelocity = 0;
      if (controls.up) { this.altitude = 2.4; }
    }
    if (this.health < 55) this.game.effects.smokeAtVehicle(this, dt);
    this.animateLights(performance.now() / 1000, night, controls);
    if (!engine && this.altitude > 1) { this.altitude = Math.max(.5, this.altitude - dt * 4); }
  }

  updateBoat(dt, controls, weather, night) {
    const cfg = this.cfg;
    const f = new THREE.Vector2(Math.sin(this.heading), Math.cos(this.heading));
    const r = new THREE.Vector2(-f.y, f.x);
    let vf = this.velocity.dot(f);
    let vr = this.velocity.dot(r);
    this.throttle = controls.throttle || 0;
    this.brakeInput = controls.brake || 0;
    this.steer = controls.steer || 0;
    const engine = this.engineOn && this.fuel > .1;
    if (engine && this.throttle > 0) vf += cfg.accel * this.throttle * dt * (1 - clamp(vf / cfg.maxSpeed, 0, 1) * .6);
    if (this.brakeInput > 0) vf -= cfg.brake * this.brakeInput * dt;
    vf *= 1 - dt * .25;
    vf = clamp(vf, -4, cfg.maxSpeed);
    vr *= Math.exp(-1.6 * dt);
    this.heading = normAngle(this.heading + this.steer * 1.1 * clamp(Math.abs(vf) / 8, 0, 1) * dt);
    const nf = new THREE.Vector2(Math.sin(this.heading), Math.cos(this.heading));
    this.velocity.set(nf.x * vf, nf.y * vf);
    this.pos.x += this.velocity.x * dt;
    this.pos.z += this.velocity.y * dt;
    // water bounds
    if (this.pos.z < 492) { this.pos.z = 492; this.velocity.y = Math.abs(this.velocity.y) * .2; vf *= .2; }
    if (this.pos.z > 1400) this.pos.z = 1400;
    this.pos.y = .25 + Math.sin(performance.now() * .0012 + this.pos.x * .01) * .12;
    this.group.rotation.y = this.heading;
    this.group.rotation.z = lerp(this.group.rotation.z, this.steer * .08, dt * 3);
    this.group.rotation.x = lerp(this.group.rotation.x, Math.sin(performance.now() * .0015) * .02, dt * 2);
    this.speed = vf;
    this.speedKmh = Math.abs(vf) * 3.6;
    this.fuel = Math.max(0, this.fuel - dt * (.02 + this.throttle * .04));
    this.animateLights(performance.now() / 1000, night, controls);
    if (Math.abs(vf) > 3) {
      this.wakeAcc += dt;
      if (this.wakeAcc > .08) {
        this.wakeAcc = 0;
        const back = new THREE.Vector2(-Math.sin(this.heading), -Math.cos(this.heading));
        this.game.effects.wakes.spawn(this.pos.x + back.x * 3.2, this.pos.y + .2, this.pos.z + back.y * 3.2, {
          color: 0xd7f1ff, size: 1.2, grow: 2.4, life: .9, vy: .2, vx: rand(-.4, .4), vz: rand(-.4, .4), drag: .9,
        });
      }
    }
    if (this.health < 55) this.game.effects.smokeAtVehicle(this, dt);
  }

  resolveWorldCollisions(dt, vf) {
    const len = this.cfg.len;
    const rad = this.cfg.wid * .46;
    const offsets = [-len * .32, 0, len * .32];
    const f = { x: Math.sin(this.heading), z: Math.cos(this.heading) };
    let hitAny = false, maxPen = 0, hitN = null;
    for (const o of offsets) {
      const cx = this.pos.x + f.x * o, cz = this.pos.z + f.z * o;
      const hit = this.game.city.collideCircle(cx, cz, rad);
      if (hit) {
        this.pos.x += hit.nx * hit.pen;
        this.pos.z += hit.nz * hit.pen;
        hitAny = true;
        if (hit.pen > maxPen) { maxPen = hit.pen; hitN = hit; }
      }
    }
    if (hitAny) {
      const impact = Math.abs(vf) + maxPen * 8;
      if (impact > 1.6) {
        const nx = hitN.nx, nz = hitN.nz;
        const vn = this.velocity.x * nx + this.velocity.y * nz;
        if (vn < 0) {
          this.velocity.x -= nx * vn * 1.35;
          this.velocity.y -= nz * vn * 1.35;
        }
        this.velocity.multiplyScalar(.72);
        const dmg = clamp((impact - 1.2) * .9, 0, 30);
        this.applyDamage(dmg, { x: this.pos.x + f.x * (len * .32), y: this.pos.y + .7, z: this.pos.z + f.z * (len * .32) });
        this.game.audio?.crash(impact);
        if (impact > 4) this.game.camShake = Math.max(this.game.camShake, Math.min(1, impact / 20));
      }
    }
  }

  animateWheels(dt) {
    const roll = this.speed * dt / (this.cfg.wheelR || .35);
    for (const w of this.wheels) {
      w.mesh.rotation.x += roll;
      if (w.front) w.mesh.rotation.y = this.steer * .42;
    }
  }

  animateLights(elapsed, night, controls) {
    const lightsOn = this.lightsOn || night > .5;
    if (lightsOn) this.lightsOn = true;
    const left = this.indicator === -1 || controls?.left;
    const right = this.indicator === 1 || controls?.right;
    setLightState(this.headMats, this.brakeMats, this.turnMats, {
      lightsOn: this.lightsOn,
      braking: this.brakeOn,
      left, right,
    });
    if (this.serviceLights) {
      const on = Math.floor(elapsed * 6) % 2 === 0;
      this.serviceLights.redM.color.setHex(on ? 0xff2020 : 0x280606);
      this.serviceLights.blueM.color.setHex(on ? 0x1b3fff : 0x080820);
      this.serviceLights.light.color.setHex(on ? 0xff2020 : 0x2a5bff);
      this.serviceLights.light.intensity = 3;
    }
  }

  applyDamage(amount, hitPos = null) {
    this.health = clamp(this.health - amount, 0, 100);
    this.damageFlash = 1;
    if (hitPos) {
      if (amount > 4) this.game.effects.sparksAt(hitPos.x, hitPos.y, hitPos.z, Math.min(24, amount));
      if (amount > 8) {
        this.deform(amount, hitPos);
        this.game.effects.debris(hitPos.x, hitPos.y, hitPos.z, Math.min(12, amount / 2));
      }
      if (amount > 22) this.game.effects.explosion(hitPos.x, hitPos.y, hitPos.z);
    }
    if (this.health <= 0 && !this.dead) {
      this.dead = true;
      this.engineOn = false;
      this.game.notify?.('Vehicle disabled — engine failure', 'bad');
    }
    if (this.serviceLights) this.serviceLights.group.visible = this.health > 30;
  }

  deform(amount, hitPos) {
    // push nearby body panel vertices inward for persistent visible damage
    const local = hitPos ? this.group.worldToLocal(new THREE.Vector3(hitPos.x, hitPos.y, hitPos.z)) : new THREE.Vector3(0, 0, 1);
    const panels = [];
    this.group.traverse(o => {
      if (o.isMesh && o.userData.panel && o.geometry) panels.push(o);
    });
    if (!panels.length) return;
    const m = panels[Math.floor(Math.random() * panels.length)];
    const g = m.geometry;
    const pos = g.attributes.position;
    const center = local.clone();
    const strength = Math.min(.28, amount * .008);
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i), vy = pos.getY(i), vz = pos.getZ(i);
      const d = Math.hypot(vx - center.x, vy - center.y, vz - center.z);
      if (d < 2.5) {
        const f = (1 - d / 2.5) * strength;
        pos.setXYZ(i, vx * (1 - f * .5), vy * (1 - f * .7), vz * (1 - f * .3));
      }
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    this.bodyMat.color.multiplyScalar(.985);
  }

  repair() {
    this.health = 100; this.fuel = this.cfg.fuel; this.engineOn = true; this.dead = false; this.visible = true;
    this.group.visible = true;
  }

  dispose() {
    this.game.scene.remove(this.group);
  }
}

export class VehicleManager {
  constructor(game) {
    this.game = game;
    this.vehicles = [];
    this.playerVehicle = null;
    this.trafficLimit = 34;
    this.spawnedTraffic = false;
    this.pendingTraffic = [];
  }

  spawn(type, x, z, heading = 0, opts = {}) {
    const v = new Vehicle(this.game, type, x, z, heading, opts);
    this.vehicles.push(v);
    return v;
  }

  spawnTraffic(count) {
    const types = ['sedan', 'sedan', 'taxi', 'suv', 'sports', 'van', 'pickup', 'bus', 'truck', 'suv', 'sedan'];
    const parked = this.vehicles.filter(v => v.mode === 'parked' || v.mode === 'traffic');
    for (let i = 0; i < count; i++) {
      const t = pick(types);
      const seg = this.randomRoadPoint();
      const v = this.spawn(t, seg.x, seg.z, seg.heading, { traffic: true, color: randomVehicleColor(t), y: .02 });
      v.traffic.cruise = t === 'bus' ? rand(7, 9) : t === 'truck' ? rand(7, 9) : rand(10, 14.5);
      this.vehicles.push;
    }
  }

  randomRoadPoint() {
    const i = 1 + Math.floor(Math.random() * 7);
    const j = 1 + Math.floor(Math.random() * 7);
    const vertical = Math.random() > .5;
    if (vertical) {
      const x = NODE_POS(i) + (Math.random() > .5 ? 4 : -4);
      const z = NODE_POS(j) + rand(10, 80) * (Math.random() > .5 ? 1 : -1);
      return { x, z, heading: z > NODE_POS(j) ? 0 : Math.PI, axis: 'z' };
    }
    const z = NODE_POS(j) + (Math.random() > .5 ? 4 : -4);
    const x = NODE_POS(i) + rand(10, 80) * (Math.random() > .5 ? 1 : -1);
    return { x, z, heading: x > NODE_POS(i) ? Math.PI / 2 : -Math.PI / 2, axis: 'x' };
  }

  spawnParkedCity() {
    const spots = [...this.game.city.parkingSpots].sort(() => Math.random() - .5).slice(0, 18);
    const types = ['sedan', 'suv', 'sports', 'van', 'pickup', 'sedan', 'taxi'];
    for (const s of spots) {
      this.spawn(pick(types), s.x, s.z, s.heading, { color: randomVehicleColor(pick(types)) });
    }
    // player starting car (owned)
    this.startCar = this.spawn('sedan', 4, 36, Math.PI, { color: 0x2b4a6f, owned: true, name: 'Your Sable' });
    // special services
    const police1 = this.spawn('police', 132, 44, Math.PI / 2, { service: 'police', color: 0xe8edf0 });
    const police2 = this.spawn('police', 132, 58, -Math.PI / 2, { service: 'police' });
    this.policeUnits = [police1, police2];
    this.ambulance = this.spawn('ambulance', 168, 166, Math.PI / 2, { service: 'ambulance' });
    this.fireEngine = this.spawn('fire', -150, -30, Math.PI / 2, { service: 'fire' });
    this.helipadHeli = this.spawn('helicopter', this.game.city.helipad.x, this.game.city.helipad.z, 0, { y: this.game.city.helipad.y + 1.7 });
    this.helipadHeli.altitude = this.helipadHeli.pos.y;
    this.boats = [
      this.spawn('boat', 300, 500, Math.PI, { y: .25 }),
      this.spawn('boat', 322, 510, Math.PI * .9, { y: .25, color: 0xbb3a34 }),
      this.spawn('boat', 345, 530, Math.PI, { y: .25, color: 0x2f6e8f }),
    ];
    this.supercars = [
      this.spawn('super', 30, 158, Math.PI / 2, { color: 0xe4c44a }),
      this.spawn('super', 36, 166, Math.PI / 2, { color: 0x1c1c22 }),
      this.spawn('sports', 24, 170, Math.PI / 2, { color: 0xb23434 }),
    ];
    this.bus = this.spawn('bus', 96, 340, 0, { color: 0x2c6f88 });
    this.construction = this.spawn('construction', -300, -300, Math.PI / 2, { color: 0xd6a51f });
  }

  findNearest(x, z, radius = 5, filter = null) {
    let best = null, bd = radius;
    for (const v of this.vehicles) {
      if (v.isPlayer) continue;
      if (filter && !filter(v)) continue;
      const d = Math.hypot(v.pos.x - x, v.pos.z - z);
      if (d < bd) { bd = d; best = v; }
    }
    return best ? { vehicle: best, dist: bd } : null;
  }

  startDriving(v) {
    this.playerVehicle = v;
    v.mode = 'player';
    v.isPlayer = true;
    v.traffic = null;
    v.parkedName = v.parkedName || v.cfg.name;
    v.engineOn = true;
    this.game.audio?.startEngine(v);
  }

  stopDriving(v) {
    if (!v) return;
    v.mode = 'parked';
    v.isPlayer = false;
    v.throttle = 0; v.brakeInput = 0; v.steer = 0; v.indicator = 0;
    this.playerVehicle = null;
    this.game.audio?.stopEngine();
  }

  update(dt, elapsed, night, weather) {
    const player = this.playerVehicle;
    if (player) {
      player.velocity && player.updatePlayer(dt, this.game.controls.vehicle, weather, elapsed, night);
    }
    for (const v of this.vehicles) {
      if (v === player) continue;
      if (v.mode === 'traffic') v.updateTraffic(dt, elapsed, night, weather);
      else {
        // keep service lights / smoke alive on parked damaged cars
        if (v.health < 55) this.game.effects.smokeAtVehicle(v, dt * .5);
        if (v.serviceLights) {
          const on = Math.floor(elapsed * 5) % 2 === 0;
          v.serviceLights.redM.color.setHex(on ? 0xff2020 : 0x280606);
          v.serviceLights.blueM.color.setHex(on ? 0x0b0b30 : 0x2a5bff);
          v.serviceLights.light.intensity = on ? 2.4 : 1.8;
        }
      }
    }
    if (player) this.handleTrafficCollisions(player);
  }

  handleTrafficCollisions(player) {
    const pf = { x: Math.sin(player.heading), z: Math.cos(player.heading) };
    for (const v of this.vehicles) {
      if (v === player || v.mode !== 'traffic') continue;
      const dx = v.pos.x - player.pos.x, dz = v.pos.z - player.pos.z;
      const d = Math.hypot(dx, dz);
      const minD = (v.cfg.len + player.cfg.len) * .38;
      if (d < minD && d > .01) {
        const nx = dx / d, nz = dz / d;
        const speed = Math.abs(player.speed);
        v.knock.set(nx * (2 + speed * .35), nz * (2 + speed * .35));
        v.knockTimer = .8;
        v.pos.x += nx * (minD - d) * .8; v.pos.z += nz * (minD - d) * .8;
        if (player.speed > 4) {
          player.velocity.multiplyScalar(.82);
          this.game.effects.sparksAt(v.pos.x, v.pos.y + .8, v.pos.z, 14);
          v.health = clamp(v.health - Math.min(30, speed * .8), 0, 100);
          this.game.audio?.crash(speed);
          this.game.camShake = Math.max(this.game.camShake, Math.min(.8, speed / 35));
          this.game.onTrafficCollision?.(player, v);
        }
      }
    }
  }

  nearestService(type, x, z) {
    let best = null, bd = Infinity;
    for (const v of this.vehicles) {
      if (v.service !== type) continue;
      const d = Math.hypot(v.pos.x - x, v.pos.z - z);
      if (d < bd) { bd = d; best = v; }
    }
    return best;
  }
}
