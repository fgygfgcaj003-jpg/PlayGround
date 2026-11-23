import * as THREE from 'three';
import { clamp, lerp, rand, pick, chance, TAU, makeBeacon, updateBeacon, formatMoney } from './utils.js';
import { GRID, NODE_POS } from './city.js';

export class WantedSystem {
  constructor(game) {
    this.game = game;
    this.heat = 0;
    this.level = 0;
    this.lastCrime = -999;
    this.lastKnown = new THREE.Vector3();
    this.reports = 0;
    this.witnesses = 0;
    this.searchTimer = 0;
    this.lastDispatchLevel = 0;
    this.alerted = false;
  }

  commit(severity, pos, witnessed = true) {
    this.heat += severity * (witnessed ? 1 : .45);
    this.lastCrime = this.game.clock;
    this.lastKnown.copy(pos);
    if (witnessed) this.witnesses++;
    this.reports++;
    const level = this.levelFor(this.heat);
    if (level > this.level) {
      this.level = level;
      this.game.notify(`WANTED LEVEL ${level} — ${this.levelDesc(level)}`, 'bad');
      this.game.audio?.beep(220, .12, 'square', .06);
      if (level >= 1) this.game.emergency.dispatchPolice(pos, Math.min(4, level), level);
      if (level >= 5) this.game.emergency.dispatchArmy(pos, 3);
    } else {
      this.level = level;
    }
    this.alerted = true;
    this.game.ui?.updateWanted();
  }

  levelFor(heat) {
    if (heat >= 8.5) return 5;
    if (heat >= 6) return 4;
    if (heat >= 4) return 3;
    if (heat >= 2.4) return 2;
    if (heat >= 1) return 1;
    return 0;
  }

  levelDesc(l) {
    return ['', 'Patrol attention', 'Units responding', 'Search perimeter', 'Tactical response', 'Citywide alert'][l] || '';
  }

  reportPosition(pos) {
    this.lastKnown.copy(pos);
  }

  update(dt) {
    const t = this.game.clock - this.lastCrime;
    if (this.level > 0) {
      // police close by update last known
      if (this.game.emergency.isPoliceNear(this.game.player.pos, 45)) {
        this.lastKnown.copy(this.game.player.pos);
        this.alerted = true;
      } else if (t > 8) this.alerted = false;
      if (t > 18 && !this.alerted) {
        this.heat = Math.max(0, this.heat - dt * .55);
        const level = this.levelFor(this.heat);
        if (level < this.level) {
          this.level = level;
          this.game.ui?.updateWanted();
          this.game.notify(level === 0 ? 'You lost the police' : `Wanted reduced to level ${level}`, level === 0 ? 'good' : 'warn');
        }
      }
    }
    this.searchTimer -= dt;
    if (this.level > 0 && this.searchTimer <= 0) {
      this.searchTimer = 12;
      this.game.emergency.dispatchPolice(this.lastKnown, this.level >= 3 ? 2 : 1, this.level);
      if (this.level >= 5) this.game.emergency.dispatchArmy(this.lastKnown, 3);
    }
  }

  clear() {
    this.heat = 0; this.level = 0; this.alerted = false;
    this.game.ui?.updateWanted();
  }
}

export class EmergencySystem {
  constructor(game) {
    this.game = game;
    this.units = [];
    this.patrolUnits = [];
    this.extraUnits = [];
    this.spawnTimer = 0;
    this.initPatrols();
  }

  initPatrols() {
    const units = this.game.vehicles.vehicles.filter(v => v.service === 'police');
    for (const v of units) {
      this.units.push({
        vehicle: v, type: 'police', state: 'patrol', path: [], target: new THREE.Vector3(), speed: 0,
        siren: false, timer: 0, onScene: 0, home: new THREE.Vector3(v.pos.x, 0, v.pos.z),
      });
      v.mode = 'service';
      v.lightsOn = true;
      this.patrolUnits.push(v);
    }
  }

  aStar(startNode, endNode) {
    const key = n => n.i * 9 + n.j;
    const open = [startNode];
    const came = new Map();
    const g = new Map(); g.set(key(startNode), 0);
    const f = new Map(); f.set(key(startNode), 0);
    const closed = new Set();
    while (open.length) {
      open.sort((a, b) => (f.get(key(a)) ?? 1e9) - (f.get(key(b)) ?? 1e9));
      const current = open.shift();
      if (current === endNode) {
        const path = [current];
        let c = current;
        while (came.has(key(c))) { c = came.get(key(c)); path.unshift(c); }
        return path;
      }
      closed.add(key(current));
      for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const ni = current.i + di, nj = current.j + dj;
        if (ni < 0 || ni > 8 || nj < 0 || nj > 8) continue;
        const n = this.game.city.nodeGrid[ni][nj];
        const k = key(n);
        if (closed.has(k)) continue;
        const ng = (g.get(key(current)) ?? 1e9) + 96;
        if (ng < (g.get(k) ?? 1e9)) {
          came.set(k, current); g.set(k, ng);
          f.set(k, ng + Math.hypot(n.x - endNode.x, n.z - endNode.z));
          if (!open.includes(n)) open.push(n);
        }
      }
    }
    return [startNode, endNode];
  }

  setDestination(unit, pos, state = 'responding') {
    const start = this.game.city.nearestNode(unit.vehicle.pos.x, unit.vehicle.pos.z);
    const end = this.game.city.nearestNode(pos.x, pos.z);
    unit.path = this.aStar(start, end).slice(1).map(n => new THREE.Vector3(n.x, 0, n.z));
    unit.finalTarget = new THREE.Vector3(pos.x, 0, pos.z);
    unit.target.copy(unit.path[0] || unit.finalTarget);
    unit.state = state;
    unit.siren = state === 'responding' || state === 'chase';
    unit.vehicle.lightsOn = true;
  }

  findFreeUnit(type) {
    let best = null, bd = 1e9;
    for (const u of this.units) {
      if (u.vehicle.service !== type) continue;
      if (u.vehicle.isPlayer) continue;
      if (u.state === 'idle' || u.state === 'patrol') { return u; }
    }
    return null;
  }

  dispatchPolice(pos, count, level = 1) {
    let spawned = 0;
    for (const u of this.units) {
      if (u.vehicle.service !== 'police' || u.vehicle.isPlayer) continue;
      if (u.state === 'chase' || u.state === 'responding') continue;
      if (spawned >= count) break;
      this.setDestination(u, pos);
      u.level = level;
      spawned++;
    }
    while (spawned < count) {
      const station = this.game.city.pois.find(p => p.type === 'police');
      const v = this.game.vehicles.spawn('police', station.x + 10 + Math.random() * 8, station.z + 24, rand(0, TAU), { service: 'police' });
      v.mode = 'service';
      const u = { vehicle: v, type: 'police', state: 'responding', path: [], target: new THREE.Vector3(), speed: 0, siren: true, timer: 0, onScene: 0, home: new THREE.Vector3(v.pos.x, 0, v.pos.z), level };
      this.units.push(u); this.extraUnits.push(v);
      this.setDestination(u, pos);
      spawned++;
    }
    this.game.notify('Dispatch: NCPD units en route', 'warn');
  }

  dispatchArmy(pos, count = 2) {
    const base = this.game.city?.militaryBase;
    if (!base) return;
    let active = 0;
    for (const u of this.units) {
      if (u.type !== 'army' || u.state === 'stolen') continue;
      active++;
      if (active <= count) {
        this.setDestination(u, pos);
        u.state = 'chase';
        u.siren = true;
        u.level = 5;
        u.vehicle.lightsOn = true;
      }
    }
    let spawned = Math.max(0, count - active);
    while (spawned > 0) {
      const heavy = spawned % 2 === 0;
      const type = heavy ? 'tank' : 'army';
      const v = this.game.vehicles.spawn(type, base.x + rand(-70, 70), base.z + rand(-50, 70), rand(0, TAU), {
        service: 'army', color: 0x4b5638,
      });
      v.mode = 'service';
      v.lightsOn = true;
      const u = {
        vehicle: v, type: 'army', state: 'chase', path: [], target: new THREE.Vector3(),
        speed: 0, siren: true, timer: 0, onScene: 0,
        home: new THREE.Vector3(base.x, 0, base.z), level: 5,
      };
      this.units.push(u); this.extraUnits.push(v);
      this.setDestination(u, pos);
      spawned--;
    }
    this.game.notify('FORT NOVA DEPLOYED — armour is rolling out', 'bad');
    this.game.audio?.trainHorn?.();
  }

  dispatchMedical(pos) {
    const u = this.units.find(u => u.vehicle.service === 'ambulance') || this.makeAmbulanceUnit();
    this.setDestination(u, pos);
    this.game.notify('Dispatch: ambulance responding to incident', 'warn');
  }

  dispatchFire(pos) {
    const u = this.units.find(u => u.vehicle.service === 'fire') || null;
    if (!u) return;
    this.setDestination(u, pos);
    this.game.notify('Dispatch: fire engine responding', 'warn');
  }

  makeAmbulanceUnit() {
    const poi = this.game.city.pois.find(p => p.type === 'hospital');
    const v = this.game.vehicles.spawn('ambulance', poi.x + 30, poi.z + 20, 0, { service: 'ambulance' });
    v.mode = 'service';
    const u = { vehicle: v, type: 'ambulance', state: 'idle', path: [], target: new THREE.Vector3(), speed: 0, siren: false, timer: 0, onScene: 0, home: new THREE.Vector3(v.pos.x, 0, v.pos.z) };
    this.units.push(u);
    return u;
  }

  isPoliceNear(pos, radius) {
    for (const u of this.units) {
      if (u.vehicle.service !== 'police') continue;
      if (Math.hypot(u.vehicle.pos.x - pos.x, u.vehicle.pos.z - pos.z) < radius) return true;
    }
    return false;
  }

  nearestSirenDistance(pos) {
    let best = 1e9;
    for (const u of this.units) {
      if (!u.siren) continue;
      const d = Math.hypot(u.vehicle.pos.x - pos.x, u.vehicle.pos.z - pos.z);
      if (d < best) best = d;
    }
    return best;
  }

  updateUnitDriving(u, dt, elapsed) {
    const v = u.vehicle;
    if (v.isPlayer || v.mode === 'player') return;
    let target = u.target;
    const wanted = this.game.wanted.level;
    if ((u.type === 'police' || u.type === 'army') && wanted > 0) {
      const dPlayer = Math.hypot(v.pos.x - this.game.player.pos.x, v.pos.z - this.game.player.pos.z);
      const reach = u.type === 'army' ? 150 : 60;
      if (dPlayer < reach && (!this.game.player.vehicle || wanted >= 4 || u.type === 'army')) {
        target = this.game.player.pos;
        u.state = 'chase';
        u.path = [];
      } else if (u.state === 'chase' && dPlayer > reach + 40) {
        u.state = 'responding';
        u.target.set(this.game.wanted.lastKnown.x, 0, this.game.wanted.lastKnown.z);
      }
    }
    if (u.path && u.path.length) {
      target = u.path[0];
      if (Math.hypot(target.x - v.pos.x, target.z - v.pos.z) < 7) {
        u.path.shift();
        if (u.path.length) target = u.path[0];
      }
    }
    const dx = target.x - v.pos.x, dz = target.z - v.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 5 && !u.path?.length) {
      if (u.state === 'return') {
        u.state = 'idle';
        u.siren = false;
      } else if (u.state === 'responding' || u.state === 'chase') {
        u.state = 'onScene';
        u.onScene = u.type === 'fire' ? 8 : 5;
      }
      u.speed = Math.max(0, u.speed - dt * 10);
    } else {
      const desired = Math.atan2(dx, dz);
      let diff = ((desired - v.heading + Math.PI) % TAU + TAU) % TAU - Math.PI;
      v.heading += clamp(diff, -dt * 2.1, dt * 2.1);
      const maxSpeed = u.type === 'fire' ? 15 : u.type === 'army' ? 18 : 24;
      const targetSpeed = u.state === 'onScene' ? 0 : maxSpeed;
      u.speed = lerp(u.speed, targetSpeed, dt * 1.2);
      const fx = Math.sin(v.heading), fz = Math.cos(v.heading);
      v.pos.x += fx * u.speed * dt;
      v.pos.z += fz * u.speed * dt;
      const hit = this.game.city.collideCircle(v.pos.x, v.pos.z, v.cfg.wid * .5);
      if (hit) { v.pos.x += hit.nx * hit.pen; v.pos.z += hit.nz * hit.pen; u.speed *= .4; }
    }
    v.group.rotation.y = v.heading;
    v.speed = u.speed;
    v.speedKmh = u.speed * 3.6;
    v.brakeOn = u.speed < .5;
    v.animateWheels(dt);
    v.animateLights(elapsed, this.game.night, {});
    if (u.type === 'fire' && u.state === 'onScene') {
      const ev = this.game.events.fires.find(f => !f.done);
      u.onScene -= dt;
      if (ev && u.onScene <= 0) this.game.events.extinguish(ev);
      if (ev && Math.random() < .5) {
        for (let i = 0; i < 3; i++) {
          this.game.effects.sparksAt(ev.pos.x + rand(-2, 2), ev.pos.y + rand(.5, 3), ev.pos.z + rand(-2, 2), 1, 0xaedcff);
        }
      }
      if (u.onScene <= 0) this.setDestination(u, u.home, 'return');
    }
    if (u.type === 'ambulance' && u.state === 'onScene') {
      u.onScene -= dt;
      if (u.onScene <= 0) {
        this.game.events.resolveAccident();
        this.setDestination(u, u.home, 'return');
      }
    }
    // police arrest
    if (u.type === 'police' && this.game.wanted.level > 0) {
      const dp = Math.hypot(v.pos.x - this.game.player.pos.x, v.pos.z - this.game.player.pos.z);
      if (dp < 4.4 && this.game.player.vehicle === null) this.game.busted();
    }
  }

  update(dt, elapsed) {
    for (const u of this.units) {
      if (u.vehicle.isPlayer) { u.vehicle.mode = 'player'; u.state = 'stolen'; continue; }
      if (u.state === 'patrol') {
        if (!u.path || !u.path.length) {
          const node = this.game.city.nodes[Math.floor(Math.random() * this.game.city.nodes.length)];
          u.path = [new THREE.Vector3(node.x, 0, node.z)];
          u.target.copy(u.path[0]);
          u.siren = false;
        }
        this.updateUnitDriving(u, dt, elapsed);
        if (u.state === 'patrol' && u.path && u.path.length === 0) u.path = [];
        if (u.state !== 'patrol') continue;
        continue;
      }
      if (u.state === 'idle') {
        u.vehicle.brakeOn = true;
        continue;
      }
      if (u.state === 'onScene') {
        u.siren = u.type === 'police' && this.game.wanted.level > 0;
        this.updateUnitDriving(u, dt, elapsed);
        if (u.type === 'police') {
          u.onScene -= dt;
          if (u.onScene <= 0 && this.game.wanted.level === 0) { this.setDestination(u, u.home, 'return'); }
        }
        continue;
      }
      if (u.state === 'return') {
        this.updateUnitDriving(u, dt, elapsed);
        if (u.path && u.path.length === 0) { u.state = 'idle'; u.siren = false; u.speed = 0; }
        continue;
      }
      this.updateUnitDriving(u, dt, elapsed);
    }
    // cleanup extra units after wanted is gone
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 5;
      if (this.game.wanted.level === 0) {
        for (let i = this.extraUnits.length - 1; i >= 0; i--) {
          const v = this.extraUnits[i];
          const u = this.units.find(u => u.vehicle === v);
          if (!u) continue;
          const d = Math.hypot(v.pos.x - u.home.x, v.pos.z - u.home.z);
          if (u.state === 'idle' || d < 12) {
            this.game.scene.remove(v.group); v.disposed = true;
            this.game.vehicles.vehicles = this.game.vehicles.vehicles.filter(x => x !== v);
            this.units = this.units.filter(x => x !== u);
            this.extraUnits.splice(i, 1);
          }
        }
      }
    }
  }
}

export class CityEvents {
  constructor(game) {
    this.game = game;
    this.events = [];
    this.markers = new THREE.Group();
    game.scene.add(this.markers);
    this.fires = [];
    this.roadblocks = [];
    this.timer = 35;
    this.nextId = 1;
    this.accidentCars = [];
    this.scorchMat = new THREE.MeshBasicMaterial({ color: 0x0a0806, transparent: true, opacity: .55 });
  }

  startRandom() {
    const pool = ['accident', 'fire', 'construction', 'festival', 'power', 'lost', 'trainDelay'];
    const weights = [3, 3, 2, 2, 1.2, 1.4, 1.2];
    let r = Math.random() * weights.reduce((a, b) => a + b, 0), type = 'accident';
    for (let i = 0; i < pool.length; i++) { r -= weights[i]; if (r <= 0) { type = pool[i]; break; } }
    this.start(type);
  }

  start(type, opts = {}) {
    if (this.events.filter(e => e.active).length > 3) return null;
    const id = this.nextId++;
    const ev = { id, type, active: true, age: 0, duration: 50, pos: new THREE.Vector3(), title: '', beacon: null, ...opts };
    switch (type) {
      case 'fire': return this.startFire(ev);
      case 'accident': return this.startAccident(ev);
      case 'construction': return this.startConstruction(ev);
      case 'festival': return this.startFestival(ev);
      case 'power': return this.startPowerOutage(ev);
      case 'lost': return this.startLostPedestrian(ev);
      case 'trainDelay': {
        this.game.notify('Transit alert: monorail delays on the East Gate loop', 'warn');
        this.game.audio?.chime();
        return null;
      }
      case 'stormDamage': return this.startStormDamage(ev);
      default: return null;
    }
  }

  makeBeacon(pos, color) {
    const b = makeBeacon(color);
    b.position.copy(pos); b.position.y = .1;
    this.markers.add(b);
    return b;
  }

  addEvent(ev) {
    ev.beacon = this.makeBeacon(ev.pos, ev.type === 'fire' ? 0xff5b2a : ev.type === 'festival' ? 0xb18cff : ev.type === 'lost' ? 0x63f0b0 : 0xffb457);
    this.events.push(ev);
    return ev;
  }

  startFire(ev) {
    const blocks = this.game.city.blocks.filter(b => !b.isPark && b.district !== 'suburb');
    const b = pick(blocks);
    ev.pos.set(b.x + rand(-20, 20), .4, b.z + rand(-20, 20));
    ev.title = 'Structure fire';
    ev.duration = 130;
    const fire = { pos: ev.pos.clone(), scale: 1, done: false, ev, light: null };
    fire.light = new THREE.PointLight(0xff6a22, 6, 50, 2);
    fire.light.position.copy(ev.pos).add(new THREE.Vector3(0, 4, 0));
    this.game.scene.add(fire.light);
    this.fires.push(fire);
    ev.fire = fire;
    this.game.effects.explosion(ev.pos.x, ev.pos.y + 1, ev.pos.z);
    this.game.emergency.dispatchFire(ev.pos);
    this.game.emergency.dispatchPolice(ev.pos, 1, 1);
    this.game.notify('🔥 Structure fire reported — fire crews dispatched', 'bad');
    this.game.npcs.panic(ev.pos.x, ev.pos.z, 45);
    this.addEvent(ev);
    return ev;
  }

  extinguish(fire) {
    if (fire.done) return;
    fire.done = true;
    fire.ev.active = false;
    if (fire.light) this.game.scene.remove(fire.light);
    this.game.effects.spawnSmoke(fire.pos.x, fire.pos.y + 2, fire.pos.z, 18, 0xd8d8d8, 4);
    this.game.notify('Fire extinguished — crews packing up', 'good');
    this.game.events.cleanup(fire.ev);
  }

  startAccident(ev) {
    const node = pick(this.game.city.nodes);
    ev.pos.set(node.x + rand(-8, 8), .2, node.z + rand(-8, 8));
    ev.title = 'Traffic collision';
    ev.duration = 45;
    const cars = this.game.vehicles.vehicles.filter(v => v.mode === 'traffic');
    const wreck = [];
    for (let i = 0; i < 2 && cars.length; i++) {
      const c = cars.splice(Math.floor(Math.random() * cars.length), 1)[0];
      c.pos.set(ev.pos.x + rand(-2, 2), .02, ev.pos.z + rand(-2, 2));
      c.heading = rand(0, TAU); c.speed = 0; c.health = 12; c.traffic.cruise = 0; c.mode = 'parked';
      c.brakeOn = true;
      this.game.effects.sparksAt(c.pos.x, c.pos.y + .8, c.pos.z, 18);
      this.game.effects.debris(c.pos.x, c.pos.y + .6, c.pos.z, 10);
      wreck.push(c);
    }
    ev.wreck = wreck;
    this.accidentCars = wreck;
    this.game.emergency.dispatchMedical(ev.pos);
    this.game.emergency.dispatchPolice(ev.pos, 1, 1);
    this.game.npcs.gather(ev.pos.x, ev.pos.z, 24);
    this.game.npcs.panic(ev.pos.x, ev.pos.z, 30);
    this.game.notify('Traffic collision reported — emergency services en route', 'warn');
    this.addEvent(ev);
    return ev;
  }

  resolveAccident() {
    const ev = this.events.find(e => e.type === 'accident' && e.active);
    if (!ev) return;
    for (const c of this.accidentCars || []) {
      if (!c) continue;
      this.game.scene.remove(c.group);
      this.game.vehicles.vehicles = this.game.vehicles.vehicles.filter(x => x !== c);
    }
    this.accidentCars = [];
    ev.active = false;
    this.game.notify('Collision cleared — traffic resuming', 'good');
    this.cleanup(ev);
  }

  startConstruction(ev) {
    const node = pick(this.game.city.nodes);
    const vertical = Math.random() > .5;
    ev.pos.set(vertical ? node.x : node.x + 10, .3, vertical ? node.z + 10 : node.z);
    ev.title = 'Road works';
    ev.duration = 55;
    const group = new THREE.Group();
    const orange = new THREE.MeshStandardMaterial({ color: 0xe86a1e, roughness: .7 });
    const white = new THREE.MeshStandardMaterial({ color: 0xf2eee0, roughness: .7 });
    for (let i = 0; i < 6; i++) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(.22, .7, 8), orange);
      cone.position.set(rand(-4, 4), .4, rand(-8, 8)); group.add(cone);
    }
    for (let i = 0; i < 3; i++) {
      const barrier = new THREE.Mesh(new THREE.BoxGeometry(2.4, .25, .4), orange);
      barrier.position.set(rand(-3, 3), 1.0, -4 + i * 4); group.add(barrier);
      const leg = new THREE.Mesh(new THREE.BoxGeometry(.1, 1, .4), white);
      leg.position.set(barrier.position.x, .5, barrier.position.z); group.add(leg);
    }
    group.position.copy(ev.pos); this.game.scene.add(group);
    ev.group = group;
    this.roadblocks.push({ x: ev.pos.x, z: ev.pos.z, r: 18 });
    this.game.npcs.panic(ev.pos.x, ev.pos.z, 12);
    this.game.notify('Road works ahead — expect delays', 'warn');
    this.addEvent(ev);
    return ev;
  }

  startFestival(ev) {
    const park = this.game.city.blocks.find(b => b.isPark);
    ev.pos.set(park.x + 15, .4, park.z + 15);
    ev.title = 'Aurora Park street festival';
    ev.duration = 80;
    this.game.npcs.gather(ev.pos.x, ev.pos.z, 45);
    const g = new THREE.Group();
    const colors = [0xff5b7a, 0x5be0ff, 0xffb457, 0x9b6bff];
    for (let i = 0; i < 7; i++) {
      const l = new THREE.PointLight(colors[i % 4], 4, 28, 2);
      l.position.set(ev.pos.x + rand(-12, 12), 5, ev.pos.z + rand(-12, 12)); g.add(l);
      const orb = new THREE.Mesh(new THREE.SphereGeometry(.18, 8, 6), new THREE.MeshBasicMaterial({ color: colors[i % 4], toneMapped: false }));
      orb.position.copy(l.position); g.add(orb);
    }
    this.game.scene.add(g); ev.group = g;
    this.game.notify('Aurora Park festival is underway — crowds gathering', 'good');
    this.game.audio?.chime();
    this.addEvent(ev);
    return ev;
  }

  startPowerOutage(ev) {
    ev.pos.set(0, 0, 0);
    ev.title = 'Downtown power outage';
    ev.duration = 35;
    this.game.powerOutage = true;
    this.game.notify('⚠ Grid failure — downtown lights offline', 'warn');
    this.game.emergency.dispatchPolice(new THREE.Vector3(0, 0, 0), 1, 1);
    this.addEvent(ev);
    return ev;
  }

  startLostPedestrian(ev) {
    const ped = pick(this.game.npcs.peds);
    ev.pos.set(ped.x, .2, ped.z);
    ev.title = 'Lost visitor needs directions';
    ev.duration = 90;
    ev.ped = ped;
    ped.lost = true;
    this.game.notify('A visitor near you looks lost', 'warn');
    this.addEvent(ev);
    return ev;
  }

  startStormDamage(ev) {
    const x = rand(-300, 300), z = rand(-300, 300);
    ev.pos.set(x, .3, z);
    ev.title = 'Storm debris';
    ev.duration = 60;
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.35, .45, 7, 6), new THREE.MeshStandardMaterial({ color: 0x4a3725, roughness: 1 }));
    trunk.rotation.z = Math.PI / 2; trunk.position.set(x, .6, z); this.game.scene.add(trunk);
    const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(3, 0), new THREE.MeshStandardMaterial({ color: 0x2f4a26, roughness: 1 }));
    leaves.position.set(x + 2, 1.2, z + 1); this.game.scene.add(leaves);
    ev.group = new THREE.Group(); ev.group.add(trunk, leaves);
    this.roadblocks.push({ x, z, r: 12 });
    this.addEvent(ev);
    return ev;
  }

  cleanup(ev) {
    if (ev.beacon) this.markers.remove(ev.beacon);
    ev.active = false;
    if (ev.group) {
      if (ev.type === 'power') this.game.powerOutage = false;
      this.game.scene.remove(ev.group);
    }
    this.roadblocks = this.roadblocks.filter(r => !(Math.abs(r.x - ev.pos.x) < .1 && Math.abs(r.z - ev.pos.z) < .1));
    if (ev.ped) ev.ped.lost = false;
    if (ev.type === 'power') this.game.powerOutage = false;
  }

  update(dt, elapsed) {
    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = rand(50, 95);
      this.startRandom();
    }
    for (const ev of this.events) {
      if (!ev.active) continue;
      ev.age += dt;
      if (ev.beacon) updateBeacon(ev.beacon, dt);
      // fire particles
      if (ev.type === 'fire' && ev.fire && !ev.fire.done) {
        if (Math.random() < .8) this.game.effects.fireAt(ev.pos.x + rand(-2, 2), ev.pos.y + rand(0, 2), ev.pos.z + rand(-2, 2), ev.fire.scale + Math.random() * .6);
        ev.fire.light.intensity = 4 + Math.sin(elapsed * 9) * 1.4 + Math.random();
        if (ev.age > 110) this.extinguish(ev.fire);
      }
      if (ev.type === 'festival' && ev.group) {
        ev.group.rotation.y = Math.sin(elapsed * .3) * .02;
      }
      if (ev.type === 'lost' && ev.ped) {
        ev.pos.set(ev.ped.x, .2, ev.ped.z);
        if (ev.beacon) ev.beacon.position.copy(ev.pos).setY(.1);
      }
      if (ev.age > ev.duration) {
        if (ev.type === 'fire' && ev.fire && !ev.fire.done) ev.duration += 20;
        else {
          if (ev.type === 'power') { this.game.powerOutage = false; this.game.notify('Power restored downtown', 'good'); }
          this.cleanup(ev);
        }
      }
    }
    this.events = this.events.filter(e => e.active || e.age < e.duration + 5);
    // fade roadblock visuals
    this.roadblocks = this.roadblocks.filter(r => true);
  }

  isRoadBlocked(x, z) {
    for (const r of this.roadblocks) {
      if (Math.hypot(x - r.x, z - r.z) < r.r) return true;
    }
    return false;
  }

  mapMarkers() {
    return this.events.filter(e => e.active).map(e => ({ x: e.pos.x, z: e.pos.z, type: e.type, title: e.title }));
  }
}
