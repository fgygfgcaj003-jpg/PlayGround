import * as THREE from 'three';
import { clamp, lerp, rand, pick, chance, TAU, formatMoney, makeBeacon, updateBeacon } from './utils.js';
import { buildVehicleModel } from './models.js';

/* ------------------------------------------------------------------ */
/* Interiors                                                           */
/* ------------------------------------------------------------------ */

const THEMES = {
  apartment: { name: 'The Hale Apartments', wall: 0x6e6257, floor: 0x5d4c3c, accent: 0x8b6b4d, light: 0xffd7a8 },
  shop: { name: 'Corner Market', wall: 0x6c7a70, floor: 0x8a8d88, accent: 0x3f7a5a, light: 0xf2f4e8 },
  police: { name: 'NCPD Central Precinct', wall: 0x46505d, floor: 0x5c6166, accent: 0x2b5b9a, light: 0xdfe9ff },
  hospital: { name: 'Nova General Hospital', wall: 0x8d9aa4, floor: 0xa9b0b4, accent: 0x4f8fa3, light: 0xeaf6ff },
  fire: { name: 'Nova Fire Station 3', wall: 0x6c4b43, floor: 0x5f5650, accent: 0xa8302e, light: 0xffe1c0 },
  garage: { name: 'Apex Auto Garage', wall: 0x4d5357, floor: 0x3b3f42, accent: 0xc98a2e, light: 0xffe0b0 },
  dealership: { name: 'Nova Motors', wall: 0x50606f, floor: 0x747c83, accent: 0x3d8fbf, light: 0xeaf4ff },
  hotel: { name: 'Hotel Aurora Lobby', wall: 0x6c5d56, floor: 0x5a4438, accent: 0xb98d4e, light: 0xffdcae },
  office: { name: 'Meridian Tower Lobby', wall: 0x59646e, floor: 0x9a9c9c, accent: 0x3d6f92, light: 0xe4f0ff },
};

export class InteriorSystem {
  constructor(game) {
    this.game = game;
    this.rooms = new Map();
    this.current = null;
    this.returnPos = new THREE.Vector3();
    this.built = false;
  }

  build() {
    if (this.built) return;
    this.built = true;
    let idx = 0;
    for (const type of Object.keys(THEMES)) {
      this.rooms.set(type, this.buildRoom(type, idx++));
    }
  }

  buildRoom(type, index) {
    const theme = THEMES[type];
    const baseX = -1800 - index * 70;
    const W = 24, D = 17, H = 4.4;
    const g = new THREE.Group();
    g.position.set(baseX, 0, 0);
    this.game.scene.add(g);
    const wallMat = new THREE.MeshStandardMaterial({ color: theme.wall, roughness: .9 });
    const floorMat = new THREE.MeshStandardMaterial({ color: theme.floor, roughness: .5, metalness: .1 });
    const accentMat = new THREE.MeshStandardMaterial({ color: theme.accent, roughness: .55, metalness: .15 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x2b3035, roughness: .8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xe4e7e4, roughness: .7 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e4f34, roughness: .85 });
    const add = (geo, mat, x, y, z, ry = 0) => {
      const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = true; m.receiveShadow = true; g.add(m); return m;
    };
    // shell
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), floorMat); floor.rotation.x = -Math.PI / 2; floor.position.y = .03; floor.receiveShadow = true; g.add(floor);
    add(new THREE.BoxGeometry(W, .25, D), new THREE.MeshStandardMaterial({ color: 0x2c2f31, roughness: .95 }), 0, H, 0);
    add(new THREE.BoxGeometry(W, H, .35), wallMat, 0, H / 2, -D / 2);
    add(new THREE.BoxGeometry(.35, H, D), wallMat, -W / 2, H / 2, 0);
    add(new THREE.BoxGeometry(.35, H, D), wallMat, W / 2, H / 2, 0);
    // front wall with door
    add(new THREE.BoxGeometry(6.2, H, .35), wallMat, -W / 2 + 3.1, H / 2, D / 2);
    add(new THREE.BoxGeometry(6.2, H, .35), wallMat, W / 2 - 3.1, H / 2, D / 2);
    add(new THREE.BoxGeometry(2.4, H - 2.5, .35), wallMat, 0, H - (H - 2.5) / 2, D / 2);
    // door frame
    add(new THREE.BoxGeometry(2.8, .16, .4), accentMat, 0, 2.55, D / 2);
    for (const s of [-1, 1]) add(new THREE.BoxGeometry(.12, 2.7, .4), accentMat, s * 1.3, 1.35, D / 2);
    // rug
    add(new THREE.PlaneGeometry(5, 3), new THREE.MeshStandardMaterial({ color: 0x3d444c, roughness: .95 }), 0, .05, D / 2 - 4);
    // lights
    for (const x of [-6, 6]) {
      const l = new THREE.PointLight(theme.light, 34, 24, 2);
      l.position.set(x, H - .5, 0); g.add(l);
      const fixture = new THREE.Mesh(new THREE.CylinderGeometry(.3, .45, .12, 14), new THREE.MeshBasicMaterial({ color: theme.light }));
      fixture.position.set(x, H - .2, 0); g.add(fixture);
    }
    const fill = new THREE.PointLight(theme.light, 20, 22, 2);
    fill.position.set(0, H - .7, 4); g.add(fill);
    const point = { type, name: theme.name, group: g, x: baseX, z: 0, W, D, H, interactions: [] };
    const addInteract = (name, x, z, label, action) => point.interactions.push({ x: baseX + x, z, label, action, radius: 2.6 });

    if (type === 'apartment') {
      add(new THREE.BoxGeometry(5.5, 1.1, 7), woodMat, -7.5, .55, -3.8);
      add(new THREE.BoxGeometry(5.2, .6, 1.8), new THREE.MeshStandardMaterial({ color: 0xe2ddd2, roughness: .9 }), -7.5, .95, -5.2);
      add(new THREE.BoxGeometry(5.2, .55, 1.8), accentMat, -7.5, .75, -2.4);
      add(new THREE.BoxGeometry(3.6, 1.4, 1.8), new THREE.MeshStandardMaterial({ color: 0x3d4a58, roughness: .9 }), 5.5, .7, 3.0);
      const tv = add(new THREE.BoxGeometry(.12, 2.2, 4.2), new THREE.MeshBasicMaterial({ color: 0x101820 }), 7.4, 2.3, 1.5);
      add(new THREE.BoxGeometry(3.0, 1.1, 1.2), woodMat, -2.5, .55, 5.3);
      add(new THREE.CylinderGeometry(.35, .35, 1.1, 10), whiteMat, 2.4, .55, -6.6);
      add(new THREE.BoxGeometry(1.3, 1.4, .7), darkMat, 2.4, 1.65, -6.6);
      addInteract('sofa', 5.5, 3.0, 'Rest at home', 'rest');
      addInteract('kitchen', 2.4, -6.6, 'Make coffee', 'coffee');
    } else if (type === 'shop') {
      for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(1.0, 2.5, 8), new THREE.MeshStandardMaterial({ color: 0x5b6560, roughness: .7 }), -8 + i * 2.0, 1.25, -2.0);
      for (let i = 0; i < 4; i++) for (let j = 0; j < 6; j++) {
        const c = [0xd65b4a, 0xe0b84c, 0x5b9e6d, 0x4a7fae, 0xd27a3a][(i + j) % 5];
        add(new THREE.BoxGeometry(.5, .4, .5), new THREE.MeshStandardMaterial({ color: c, roughness: .6 }), -8 + i * 2.0 + rand(-.3, .3), .55 + (j % 3) * .8, -5.2 + j * 1.3);
      }
      add(new THREE.BoxGeometry(8, 1.0, 1.5), whiteMat, 3.5, .5, 5.2);
      add(new THREE.BoxGeometry(8.2, .16, 1.7), accentMat, 3.5, 1.05, 5.2);
      const clerk = this.makeClerk(g, 3.5, 6.6, Math.PI, 0x335f4a);
      addInteract('counter', 3.5, 4.2, 'Browse the market', 'shop');
    } else if (type === 'police') {
      for (let i = 0; i < 3; i++) {
        add(new THREE.BoxGeometry(4, .16, 1.8), woodMat, -6 + i * 4.5, 1.0, 0);
        add(new THREE.BoxGeometry(.2, 1.0, 1.4), darkMat, -6 + i * 4.5, .5, 0);
        add(new THREE.BoxGeometry(1.4, .6, .7), darkMat, -6 + i * 4.5, 1.35, -0.2);
      }
      add(new THREE.BoxGeometry(6, 1.1, 1.4), whiteMat, 3, .55, -6.8);
      add(new THREE.BoxGeometry(6.2, .14, 1.5), accentMat, 3, 1.12, -6.8);
      const badge = add(new THREE.CircleGeometry(1.2, 24), new THREE.MeshBasicMaterial({ color: 0x2b5b9a }), 3, 3, -8.28);
      const clerk = this.makeClerk(g, 3, -7.9, 0, 0x26384a);
      addInteract('desk', 3, -5.8, 'Talk to the desk sergeant', 'policeDesk');
    } else if (type === 'hospital') {
      for (let i = 0; i < 3; i++) {
        add(new THREE.BoxGeometry(2.4, .7, 5), whiteMat, -6 + i * 4, .5, -2);
        add(new THREE.BoxGeometry(2.1, .25, 1.1), new THREE.MeshStandardMaterial({ color: 0x9fc0c8, roughness: .8 }), -6 + i * 4, 1.0, -3.2);
      }
      add(new THREE.BoxGeometry(6, 1.1, 1.3), accentMat, 5, .55, -5.8);
      this.makeClerk(g, 5, -6.7, 0, 0x2d6b7a);
      addInteract('reception', 5, -4.8, 'Ask for medical treatment', 'heal');
    } else if (type === 'fire') {
      add(new THREE.BoxGeometry(10, 1.2, 3.4), accentMat, -3, .6, -2.0);
      for (let i = 0; i < 3; i++) {
        add(new THREE.BoxGeometry(.5, 2.0, .4), darkMat, -7 + i * 2.5, 2.2, -6.4);
        add(new THREE.BoxGeometry(.6, .8, .3), new THREE.MeshStandardMaterial({ color: 0xc9a44a, roughness: .5, metalness: .4 }), -7 + i * 2.5, 1.6, -6.2);
      }
      this.makeClerk(g, 4, -6.6, 0, 0x7b2f2a);
      addInteract('gear', 4, -5.0, 'Check fire equipment', 'fireInfo');
    } else if (type === 'garage') {
      add(new THREE.BoxGeometry(10, .3, 6), new THREE.MeshStandardMaterial({ color: 0x2c3033, roughness: .9 }), 0, .4, 0);
      add(new THREE.BoxGeometry(10, .2, .4), new THREE.MeshBasicMaterial({ color: 0xe0a927 }), 0, .56, 3.1);
      add(new THREE.BoxGeometry(1.2, 3.2, 1.2), accentMat, -8, 1.6, -6);
      for (let i = 0; i < 4; i++) add(new THREE.BoxGeometry(.8, .5, .8), darkMat, 7.5, 1.8 + i * .6, -5 + i * 1.2);
      const car = buildVehicleModel('sports', 0xc23b3b).group;
      car.position.set(-1, .55, 0); car.scale.setScalar(1.0); g.add(car);
      addInteract('bench', 3, 4.2, 'Repair & refuel your vehicle', 'garage');
    } else if (type === 'dealership') {
      add(new THREE.BoxGeometry(14, .2, 8), new THREE.MeshStandardMaterial({ color: 0xbfc6c9, roughness: .15, metalness: .4 }), -2, .2, 0);
      const c1 = buildVehicleModel('super', 0xe0c14c).group; c1.position.set(-6, .35, -1); c1.rotation.y = .4; g.add(c1);
      const c2 = buildVehicleModel('sports', 0x2c5f8f).group; c2.position.set(-1, .35, 1); c2.rotation.y = -.3; g.add(c2);
      add(new THREE.BoxGeometry(6, 1.0, 1.4), accentMat, 5, .5, -6.4);
      this.makeClerk(g, 5, -7.2, 0, 0x2f5a76);
      addInteract('sales', 5, -5.4, 'Browse vehicles for sale', 'dealership');
    } else if (type === 'hotel') {
      add(new THREE.BoxGeometry(8, 1.1, 1.5), woodMat, 0, .55, -5.8);
      add(new THREE.BoxGeometry(8.2, .16, 1.7), accentMat, 0, 1.12, -5.8);
      for (let i = 0; i < 3; i++) add(new THREE.BoxGeometry(1.6, .6, 1.6), new THREE.MeshStandardMaterial({ color: 0x3e4a56, roughness: .9 }), -5 + i * 5, .6, 3.8);
      this.makeClerk(g, 0, -6.6, 0, 0x5b4136);
      addInteract('front desk', 0, -4.8, 'Rent a room for the night', 'hotel');
    } else if (type === 'office') {
      for (let i = 0; i < 4; i++) {
        add(new THREE.BoxGeometry(3, .12, 1.4), whiteMat, -7 + i * 4, 1.0, -3);
        add(new THREE.BoxGeometry(.2, 1.0, 1.2), darkMat, -7 + i * 4, .5, -3);
        add(new THREE.BoxGeometry(1.2, .7, .1), new THREE.MeshBasicMaterial({ color: 0x8fd0e8 }), -7 + i * 4, 1.5, -3);
      }
      add(new THREE.BoxGeometry(5, 1.1, 1.3), accentMat, 5, .55, 5.4);
      this.makeClerk(g, 5, 6.4, Math.PI, 0x2c4356);
      addInteract('reception', 5, 4.2, 'Ask about office jobs', 'office');
    }
    // exit interaction
    addInteract('exit', 0, D / 2 - 1.2, 'Leave building', 'exit');
    return point;
  }

  makeClerk(parent, x, z, ry, color) {
    const g = new THREE.Group();
    const skin = new THREE.MeshStandardMaterial({ color: 0xc08a63, roughness: .7 });
    const shirt = new THREE.MeshStandardMaterial({ color, roughness: .85 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x23282e, roughness: .9 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(.22, .5, 4, 8), shirt); body.position.y = 1.08; g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(.17, 10, 8), skin); head.position.y = 1.6; g.add(head);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(.175, 8, 6, 0, TAU, 0, Math.PI * .55), new THREE.MeshStandardMaterial({ color: 0x2b211b, roughness: .9 })); hair.position.y = 1.62; g.add(hair);
    for (const s of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(.065, .42, 3, 6), shirt); arm.position.set(s * .28, 1.08, 0); g.add(arm);
      const leg = new THREE.Mesh(new THREE.CapsuleGeometry(.08, .5, 3, 6), dark); leg.position.set(s * .12, .5, 0); g.add(leg);
    }
    const ring = new THREE.Mesh(new THREE.CircleGeometry(.9, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .18, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.y = .02; g.add(ring);
    g.position.set(x, .0, z); g.rotation.y = ry;
    parent.add(g);
    g.userData.baseY = 0;
    if (!this.clerks) this.clerks = [];
    this.clerks.push({ group: g, phase: rand(0, TAU) });
    return g;
  }

  enter(type, fromPos) {
    this.build();
    const room = this.rooms.get(type) || this.rooms.get('apartment');
    if (!room) return;
    this.current = room;
    this.returnPos.copy(fromPos);
    this.game.mode = 'interior';
    this.game.player.interior = room;
    this.game.player.cameraDist = 3.8;
    this.game.player.cameraPitch = 0.03;
    this.game.player.setPosition(room.x, room.z + room.D / 2 - 5.2, .2);
    this.game.player.heading = Math.PI;
    this.game.player.cameraYaw = Math.PI;
    if (this.game.vehicles.playerVehicle) {
      this.game.exitVehicle(true);
    }
    this.game.audio?.chime();
    this.game.notify(`Entered ${room.name}`, 'good');
  }

  exit() {
    if (!this.current) return;
    const room = this.current;
    this.current = null;
    this.game.player.interior = null;
    this.game.player.setPosition(this.returnPos.x, this.returnPos.z, .2);
    this.game.player.cameraDist = 5.2;
    this.game.mode = 'playing';
    this.game.audio?.chime();
    this.game.notify('Back outside', 'good');
  }

  update(dt) {
    if (this.current) {
      const p = this.game.player.pos;
      const room = this.current;
      p.x = clamp(p.x, room.x - room.W / 2 + .8, room.x + room.W / 2 - .8);
      p.z = clamp(p.z, room.z - room.D / 2 + .8, room.z + room.D / 2 - .9);
      if (this.clerks) for (const c of this.clerks) {
        c.phase += dt;
        c.group.position.y = Math.sin(c.phase * 1.4) * .006;
      }
    }
  }

  nearestInteraction(x, z) {
    if (!this.current) return null;
    let best = null, bd = 3.2;
    for (const i of this.current.interactions) {
      const d = Math.hypot(i.x - x, i.z - z);
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }
}

/* ------------------------------------------------------------------ */
/* Jobs & economy                                                      */
/* ------------------------------------------------------------------ */

export class JobSystem {
  constructor(game) {
    this.game = game;
    this.current = null;
    this.offers = [];
    this.marker = null;
    this.markerGroup = new THREE.Group();
    game.scene.add(this.markerGroup);
    this.completed = 0;
    this.refreshOffers();
  }

  refreshOffers() {
    const c = this.game.city;
    const shops = c.pois.filter(p => p.type === 'shop');
    const apartments = c.pois.filter(p => p.type === 'apartment');
    const hotels = c.pois.filter(p => p.type === 'hotel');
    const garages = c.pois.filter(p => p.type === 'garage');
    const industrial = c.pois.filter(p => p.type === 'factory');
    const seed = Date.now() + this.completed;
    const templates = [
      { id: 'courier', title: 'Courier Run', desc: 'Pick up a parcel and deliver it across the city.', pay: 185, require: null, color: 0x63f0b0 },
      { id: 'freight', title: 'Freight Delivery', desc: 'Haul industrial cargo in a van, pickup or truck.', pay: 460, require: ['van', 'pickup', 'truck', 'construction'], color: 0xffb457 },
      { id: 'taxi', title: 'City Taxi', desc: 'Pick up a passenger and take them to their hotel.', pay: 330, require: ['sedan', 'taxi', 'suv', 'van', 'sports', 'super'], color: 0x5be0ff },
      { id: 'courier', title: 'Pharmacy Drop', desc: 'Urgent medical parcel for the hospital district.', pay: 240, require: null, color: 0x63f0b0 },
      { id: 'inspect', title: 'Site Inspection', desc: 'Drive to an industrial site and check the perimeter.', pay: 260, require: null, color: 0xb18cff },
    ];
    this.offers = templates.map((t, i) => {
      const pickup = t.id === 'freight' ? pick(industrial) : t.id === 'taxi' ? pick(hotels) : pick(shops);
      const drop = t.id === 'freight' ? pick(garages) : t.id === 'taxi' ? pick(hotels) : pick(apartments);
      return {
        ...t, uid: 'job' + seed + i, pickup: { x: pickup.x + rand(-5, 5), z: pickup.z + rand(-5, 5) },
        dropoff: { x: drop.x + rand(-5, 5), z: drop.z + rand(-5, 5) },
        pickupName: pickup.name, dropName: drop.name,
      };
    });
  }

  start(uid) {
    if (this.current) { this.game.notify('Finish your current job first', 'warn'); return; }
    const offer = this.offers.find(o => o.uid === uid);
    if (!offer) return;
    const pv = this.game.vehicles.playerVehicle;
    if (offer.require && (!pv || !offer.require.includes(pv.type))) {
      this.game.notify('This job needs the right vehicle', 'bad');
      return;
    }
    this.current = { ...offer, stage: 'pickup', elapsed: 0, limit: 240 };
    this.setMarker(offer.pickup.x, offer.pickup.z, offer.color);
    this.game.notify(`Job accepted: ${offer.title}`, 'good');
    this.game.audio?.chime();
    this.game.ui?.showObjective();
  }

  setMarker(x, z, color) {
    if (this.marker) this.markerGroup.remove(this.marker);
    this.marker = makeBeacon(color);
    this.marker.position.set(x, .15, z);
    this.markerGroup.add(this.marker);
  }

  clearMarker() { if (this.marker) { this.markerGroup.remove(this.marker); this.marker = null; } }

  update(dt) {
    if (this.marker) updateBeacon(this.marker, dt);
    if (!this.current) return;
    const job = this.current;
    job.elapsed += dt;
    const p = this.game.player;
    const target = job.stage === 'pickup' ? job.pickup : job.dropoff;
    const d = Math.hypot(p.pos.x - target.x, p.pos.z - target.z);
    if (p.vehicle) {
      // vehicles need to actually reach the marker
    }
    if (d < 6) {
      if (job.stage === 'pickup') {
        job.stage = 'dropoff';
        this.setMarker(job.dropoff.x, job.dropoff.z, 0xffb457);
        this.game.notify(job.id === 'taxi' ? 'Passenger aboard — drive to the destination' : 'Cargo loaded — deliver it to the destination', 'good');
      } else {
        this.complete();
      }
    }
    if (job.elapsed > job.limit) {
      this.game.notify('Job expired — the client cancelled', 'bad');
      this.current = null;
      this.clearMarker();
      this.game.ui?.hideObjective();
    }
    this.game.ui?.updateObjective(job, d);
  }

  complete() {
    const job = this.current;
    if (!job) return;
    this.game.addMoney(job.pay);
    this.completed++;
    this.game.notify(`Job complete — earned ${formatMoney(job.pay)}`, 'good');
    this.game.audio?.chime();
    this.current = null;
    this.clearMarker();
    this.refreshOffers();
    this.game.ui?.hideObjective();
  }
}

/* ------------------------------------------------------------------ */
/* Transit: monorail, rail and metro                                   */
/* ------------------------------------------------------------------ */

export class TransitSystem {
  constructor(game) {
    this.game = game;
    this.mode = 'none';
    this.manual = false;
    this.currentRail = null;
    this.atStation = -1;
    this.metroEntrances = [];
    this.buildMetroEntrances();
    this.fare = 3;
  }

  buildMetroEntrances() {
    const city = this.game.city;
    const spots = [
      { x: 10, z: 58, name: 'Central Metro' },
      { x: -200, z: 10, name: 'West End Metro' },
      { x: 200, z: 200, name: 'Harbor Metro' },
    ];
    for (let i = 0; i < spots.length; i++) {
      const s = spots[i];
      const g = new THREE.Group();
      g.position.set(s.x, 0, s.z);
      const frameMat = new THREE.MeshStandardMaterial({ color: 0x3a444d, roughness: .4, metalness: .6 });
      g.add(new THREE.Mesh(new THREE.BoxGeometry(5, .3, 8), new THREE.MeshStandardMaterial({ color: 0x777d80, roughness: .95 })));
      const rails = new THREE.Mesh(new THREE.BoxGeometry(4.2, .05, .2), new THREE.MeshBasicMaterial({ color: 0x8ceaff }));
      rails.position.set(0, .32, 2.5); g.add(rails);
      for (const s2 of [-1, 1]) {
        const side = new THREE.Mesh(new THREE.BoxGeometry(.25, 1.0, 8), frameMat); side.position.set(s2 * 2.3, .8, 0); g.add(side);
      }
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 1.4), new THREE.MeshBasicMaterial({ map: signTexture('METRO', '#081b2a', '#8ceaff', s.name), transparent: true }));
      sign.position.set(0, 3.2, 0); g.add(sign);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(.08, .1, 3.2, 6), frameMat); pole.position.y = 1.6; g.add(pole);
      // stairs down
      for (let k = 0; k < 5; k++) {
        const step = new THREE.Mesh(new THREE.BoxGeometry(4, .2, .7), new THREE.MeshStandardMaterial({ color: 0x5b6166, roughness: .9 }));
        step.position.set(0, -.1 - k * .2, -.4 + k * .6); g.add(step);
      }
      this.game.scene.add(g);
      city.addPOI('metro', s.name, s.x, s.z, 6, { icon: 'transit', metro: i });
      this.metroEntrances.push(s);
    }
  }

  boardMonorail(stationIndex) {
    const m = this.game.city.monorail;
    if (!m) return;
    const p = this.game.player;
    p.riding = m;
    p.group.visible = false;
    p.shadow.visible = false;
    p.vehicle = null;
    p.cameraYaw = m.group.rotation.y;
    p.cameraDist = 18;
    p.cameraPitch = .2;
    m.riding = true;
    this.mode = 'monorail';
    this.manual = m.manual;
    this.atStation = stationIndex ?? m.currentStation;
    this.game.mode = 'riding';
    this.game.notify('Boarded the monorail — E to exit at a station, T to take controls', 'good');
    this.game.audio?.chime();
    if (this.game.ui) {
      this.game.ui.showTransit('MONORAIL', 'Aurora Loop', 'Automatic');
    }
  }

  exitMonorail() {
    const m = this.game.city.monorail;
    const p = this.game.player;
    const stationIndex = m.currentStation;
    const station = stationIndex >= 0 ? m.stations[stationIndex] : null;
    const stoppedAtStation = station && m.speed < .35 && m.stationAt(m.progress) === stationIndex;
    if (!stoppedAtStation) { this.game.notify('Wait until the train stops at a station', 'warn'); return; }
    const st = station;
    const tower = st.tower;
    p.riding = null;
    p.group.visible = true;
    p.shadow.visible = true;
    p.setPosition(tower.x + 8, tower.z + 11, .2);
    p.cameraYaw = st.ang;
    m.riding = false;
    m.manual = false;
    this.mode = 'none';
    this.game.mode = 'playing';
    this.game.ui?.hideTransit();
    this.game.notify(`Exited at ${st.name}`, 'good');
  }

  toggleManual() {
    if (this.mode === 'monorail') {
      const m = this.game.city.monorail;
      m.manual = !m.manual;
      this.manual = m.manual;
      m.targetSpeed = m.manual ? Math.max(4, m.speed) : 11;
      this.game.ui?.updateTransitMode(m.manual ? 'Manual control' : 'Automatic', m.manual ? 'W/S throttle · E exit' : 'Aurora Loop');
      this.game.notify(m.manual ? 'Manual train control enabled' : 'Automatic train control enabled', 'good');
      return;
    }
    if (this.mode === 'rail') {
      const rail = this.game.city.rail;
      rail.auto = !rail.auto;
      if (rail.auto) rail.dwell = 0;
      this.game.ui?.updateTransitMode(rail.auto ? 'Automatic' : 'Manual control', rail.auto ? 'Station stops' : 'W/S throttle · E exit');
      this.game.notify(rail.auto ? 'Automatic station stops enabled' : 'Manual train control enabled', 'good');
    }
  }

  boardRail() {
    const rail = this.game.city.rail;
    if (!rail) return;
    const p = this.game.player;
    p.riding = { group: rail.group, isRail: true, trainLength: rail.trainLength || 70 };
    p.group.visible = false;
    p.shadow.visible = false;
    p.vehicle = null;
    p.cameraYaw = Math.PI / 2;
    p.cameraDist = 12;
    p.cameraPitch = .16;
    this.mode = 'rail';
    this.currentRail = rail;
    this.game.mode = 'riding';
    this.game.notify('Boarded commuter rail — E to disembark at a station, T for manual control', 'good');
    this.game.ui?.showTransit('COMMUTER RAIL', 'Nova Central Line', rail.auto ? 'Automatic' : 'Manual control');
  }

  exitRail() {
    const rail = this.game.city.rail;
    const p = this.game.player;
    const stationIndex = rail.currentStation;
    if (stationIndex < 0 || rail.speed > .35) {
      this.game.notify('Wait until the train stops at a station', 'warn');
      return;
    }
    const st = rail.stations[stationIndex];
    p.riding = null; p.group.visible = true; p.shadow.visible = true;
    p.setPosition(st.x, st.z + 1, .2);
    p.cameraYaw = 0;
    rail.auto = true; rail.dwell = 0; rail.departCool = 4.5;
    this.mode = 'none'; this.game.mode = 'playing';
    this.game.ui?.hideTransit();
    this.game.notify(`Left the train at ${st.name}`, 'good');
  }

  boardIslandRail(stationIndex = 0) {
    const rail = this.game.city.islandRail;
    if (!rail) return;
    const p = this.game.player;
    p.riding = rail;
    p.group.visible = false;
    p.shadow.visible = false;
    p.vehicle = null;
    p.cameraYaw = rail.group.rotation.y;
    p.cameraDist = 12;
    p.cameraPitch = .18;
    this.mode = 'islandRail';
    this.currentRail = rail;
    this.game.mode = 'riding';
    this.game.notify('Boarded the Palm Island Line — E to step off at a station', 'good');
    this.game.audio?.chime();
    this.game.ui?.showTransit('PALM ISLAND LINE', 'Harbor ↔ Palm Island', 'Automatic');
  }

  exitIslandRail() {
    const rail = this.game.city.islandRail;
    const p = this.game.player;
    const stationIndex = rail.stoppedAtStation();
    if (stationIndex < 0) {
      this.game.notify('Wait for the tram to stop at a station', 'warn');
      return;
    }
    const st = rail.stations[stationIndex];
    p.riding = null; p.group.visible = true; p.shadow.visible = true;
    p.setPosition(st.exit.x, st.exit.z, .2);
    p.cameraYaw = Math.PI;
    p.velocity.set(0, 0, 0);
    this.mode = 'none'; this.game.mode = 'playing';
    this.game.ui?.hideTransit();
    this.game.notify(`Stepped off at ${st.name}`, 'good');
  }

  update(dt, input) {
    if (this.mode === 'monorail') {
      const m = this.game.city.monorail;
      if (m.manual) {
        m.targetSpeed = clamp(m.targetSpeed + ((input.forward ? 1 : 0) - (input.back ? 1 : 0)) * 8 * dt * 3, 0, 24);
        if (input.brake) m.targetSpeed = 0;
      }
      this.game.ui?.updateTransitSpeed(m.speed, m.dwell > 0 ? 'DOORS OPEN' : m.currentStation >= 0 ? m.stations[m.currentStation].name : 'EN ROUTE');
    } else if (this.mode === 'rail') {
      const rail = this.game.city.rail;
      if (!rail.auto) {
        if (input.forward) rail.speed = clamp(rail.speed + 5 * dt, 0, 28);
        if (input.back) rail.speed = clamp(rail.speed - 7 * dt, 0, 28);
        if (input.brake) rail.speed = 0;
      }
      const st = rail.currentStation >= 0 ? rail.stations[rail.currentStation].name : null;
      this.game.ui?.updateTransitSpeed(rail.speed, st ? `AT ${st.toUpperCase()}` : rail.dwell > 0 ? 'DOORS OPEN' : 'NOVA CENTRAL LINE');
    } else if (this.mode === 'islandRail') {
      const rail = this.game.city.islandRail;
      const st = rail.currentStation >= 0 ? rail.stations[rail.currentStation].name : null;
      this.game.ui?.updateTransitSpeed(rail.speed, st ? `AT ${st.toUpperCase()}` : rail.dwell > 0 ? 'DOORS OPEN' : 'HARBOR ↔ PALM ISLAND');
    }
  }

  metroTravel(index) {
    const spots = this.metroEntrances;
    const s = spots[index];
    if (!s) return;
    if (this.game.money < this.fare) { this.game.notify('Not enough cash for fare', 'bad'); return; }
    this.game.addMoney(-this.fare);
    this.game.audio?.chime();
    this.game.notify(`Metro fare ${formatMoney(this.fare)} — arriving at ${s.name}`, 'good');
    this.game.player.riding = null;
    this.game.player.setPosition(s.x, s.z + 8, .2);
    this.game.player.cameraYaw = Math.PI;
    this.game.mode = 'playing';
    this.game.ui?.closeOverlay();
  }
}

function signTexture(text, bg, fg, sub = '') {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, 512, 256);
  ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 8; ctx.strokeRect(10, 10, 492, 236);
  ctx.fillStyle = fg; ctx.font = '700 82px Inter, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 108);
  ctx.font = '500 24px Inter, sans-serif'; ctx.globalAlpha = .7; ctx.fillText(sub, 256, 172);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
