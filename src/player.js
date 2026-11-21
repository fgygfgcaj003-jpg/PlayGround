import * as THREE from 'three';
import { clamp, lerp, lerpAngle, normAngle, TAU, formatMoney } from './utils.js';

export class Player {
  constructor(game) {
    this.game = game;
    this.group = new THREE.Group();
    this.group.name = 'player';
    game.scene.add(this.group);
    this.pos = new THREE.Vector3(10, 0.18, 34);
    this.heading = Math.PI;
    this.velocity = new THREE.Vector3();
    this.verticalVelocity = 0;
    this.onGround = true;
    this.groundY = 0.18;
    this.walkPhase = 0;
    this.moveAmount = 0;
    this.sprinting = false;
    this.crouching = false;
    this.firstPerson = false;
    this.cameraYaw = Math.PI;
    this.cameraPitch = 0.04;
    this.cameraDist = 5.2;
    this.cameraHeight = 1.55;
    this.camShake = 0;
    this.riding = null;
    this.interior = null;
    this.vehicle = null;
    this.visible = true;
    this.footTimer = 0;
    this.animT = 0;
    this.idleT = 0;
    this.clothing = { jacket: 0x27384d, pants: 0x222a33, shoes: 0x14181c, skin: 0xc08a63, hair: 0x2b211b };
    this.buildModel();
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.heading;
    this.camera = game.camera;
    this.camera.position.set(0, 10, 20);
    this.tmp = new THREE.Vector3();
    this.wantToSit = false;
    this.cinematic = null;
    this.lookHold = 0;
  }

  buildModel() {
    const g = this.group;
    this.body = new THREE.Group();
    g.add(this.body);
    const skinMat = new THREE.MeshStandardMaterial({ color: this.clothing.skin, roughness: .72 });
    const jacketMat = new THREE.MeshStandardMaterial({ color: this.clothing.jacket, roughness: .82 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: this.clothing.pants, roughness: .9 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: this.clothing.shoes, roughness: .7 });
    const hairMat = new THREE.MeshStandardMaterial({ color: this.clothing.hair, roughness: .9 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0xe4e9ec, roughness: .86 });
    const detailMat = new THREE.MeshStandardMaterial({ color: 0x141a20, roughness: .74, metalness: .18 });
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xf3f5f2, roughness: .35 });
    const irisMat = new THREE.MeshStandardMaterial({ color: 0x2c3f49, roughness: .3 });
    this.mats = { skinMat, jacketMat, pantsMat, shoeMat, hairMat };

    const hips = new THREE.Group(); hips.position.y = .88; this.body.add(hips);
    this.addPart = (geo, mat, x, y, z, parent = hips) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      m.castShadow = true;
      parent.add(m);
      return m;
    };

    // pelvis, belt and tailored jacket
    this.addPart(new THREE.BoxGeometry(.38, .26, .27), pantsMat, 0, -.04, 0);
    this.addPart(new THREE.BoxGeometry(.405, .075, .285), detailMat, 0, .09, 0);
    this.addPart(new THREE.CapsuleGeometry(.238, .4, 5, 12), jacketMat, 0, .37, 0);
    this.addPart(new THREE.BoxGeometry(.5, .16, .3), jacketMat, 0, .57, 0);
    this.addPart(new THREE.BoxGeometry(.34, .08, .28), jacketMat, 0, .64, 0);
    this.addPart(new THREE.BoxGeometry(.026, .34, .022), detailMat, 0, .38, .239);
    this.addPart(new THREE.BoxGeometry(.16, .16, .025), shirtMat, 0, .53, .232);
    for (const s of [-1, 1]) {
      const lapel = this.addPart(new THREE.BoxGeometry(.11, .2, .035), jacketMat, s * .1, .52, .235);
      lapel.rotation.z = s * .22;
      this.addPart(new THREE.BoxGeometry(.13, .1, .025), detailMat, s * .14, .25, .235);
    }
    // backpack with straps
    this.addPart(new THREE.BoxGeometry(.34, .42, .16), detailMat, 0, .4, -.245);
    this.addPart(new THREE.BoxGeometry(.28, .08, .07), detailMat, 0, .58, -.32);
    for (const s of [-1, 1]) this.addPart(new THREE.BoxGeometry(.045, .34, .025), detailMat, s * .14, .43, .235);

    // neck, head and face
    this.addPart(new THREE.CylinderGeometry(.072, .084, .14, 9), skinMat, 0, .7, 0);
    const head = this.addPart(new THREE.SphereGeometry(.182, 18, 14), skinMat, 0, .865, 0);
    head.scale.set(.94, 1.05, .96);
    this.addPart(new THREE.BoxGeometry(.18, .09, .14), skinMat, 0, .77, .055);
    for (const s of [-1, 1]) {
      this.addPart(new THREE.SphereGeometry(.045, 8, 6), skinMat, s * .177, .87, .012);
      const eye = this.addPart(new THREE.SphereGeometry(.036, 10, 8), eyeMat, s * .067, .9, .148);
      eye.scale.set(1, .82, .55);
      this.addPart(new THREE.SphereGeometry(.017, 8, 6), irisMat, s * .067, .9, .181);
      const brow = this.addPart(new THREE.BoxGeometry(.075, .016, .02), hairMat, s * .068, .944, .166);
      brow.rotation.z = -s * .1;
    }
    this.addPart(new THREE.BoxGeometry(.045, .1, .06), skinMat, 0, .855, .185);
    this.addPart(new THREE.BoxGeometry(.078, .018, .018), new THREE.MeshStandardMaterial({ color: 0x6d3c33, roughness: .7 }), 0, .792, .178);
    const hair = this.addPart(new THREE.SphereGeometry(.19, 14, 12, 0, TAU, 0, Math.PI * .56), hairMat, 0, .884, -.008);
    hair.scale.set(.99, 1.02, 1.0);
    this.addPart(new THREE.BoxGeometry(.3, .1, .08), hairMat, 0, .93, -.16);

    // arms with elbows and hands
    const makeArm = (side) => {
      const shoulder = new THREE.Group(); shoulder.position.set(side * .305, .565, 0); hips.add(shoulder);
      this.addPart(new THREE.CapsuleGeometry(.072, .24, 4, 9), jacketMat, 0, -.17, 0, shoulder);
      const elbow = new THREE.Group(); elbow.position.y = -.34; shoulder.add(elbow);
      this.addPart(new THREE.CapsuleGeometry(.062, .23, 4, 9), jacketMat, 0, -.14, 0, elbow);
      this.addPart(new THREE.SphereGeometry(.07, 10, 8), skinMat, 0, -.3, 0, elbow);
      const fingers = this.addPart(new THREE.BoxGeometry(.1, .09, .06), skinMat, 0, -.35, .02, elbow);
      fingers.scale.set(1, .9, 1);
      return { shoulder, elbow };
    };
    const armL = makeArm(-1), armR = makeArm(1);
    this.armL = armL.shoulder; this.elbowL = armL.elbow;
    this.armR = armR.shoulder; this.elbowR = armR.elbow;

    // legs with knees, trousers and shoes
    const makeLeg = (side) => {
      const hip = new THREE.Group(); hip.position.set(side * .118, -.02, 0); hips.add(hip);
      this.addPart(new THREE.CapsuleGeometry(.095, .25, 4, 9), pantsMat, 0, -.16, 0, hip);
      const knee = new THREE.Group(); knee.position.y = -.33; hip.add(knee);
      this.addPart(new THREE.CapsuleGeometry(.079, .23, 4, 9), pantsMat, 0, -.15, 0, knee);
      const shoe = this.addPart(new THREE.BoxGeometry(.185, .11, .33), shoeMat, 0, -.32, .04, knee);
      shoe.scale.set(1, 1, 1);
      this.addPart(new THREE.BoxGeometry(.2, .045, .35), detailMat, 0, -.373, .045, knee);
      return { hip, knee };
    };
    const legL = makeLeg(-1), legR = makeLeg(1);
    this.legL = legL.hip; this.kneeL = legL.knee;
    this.legR = legR.hip; this.kneeR = legR.knee;
    this.hips = hips;

    const shadow = new THREE.Mesh(new THREE.CircleGeometry(.44, 18), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .24, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = .012; g.add(shadow);
    this.shadow = shadow;
  }

  setClothing(c) {
    Object.assign(this.clothing, c);
    this.mats.jacketMat.color.setHex(this.clothing.jacket);
    this.mats.pantsMat.color.setHex(this.clothing.pants);
    this.mats.shoeMat.color.setHex(this.clothing.shoes);
    this.mats.hairMat.color.setHex(this.clothing.hair);
    this.mats.skinMat.color.setHex(this.clothing.skin);
  }

  setPosition(x, z, y = 0.18) {
    this.pos.set(x, y, z);
    this.groundY = y;
    this.group.position.copy(this.pos);
  }

  enteredVehicle(v) {
    this.vehicle = v;
    this.group.visible = false;
    this.shadow.visible = false;
    this.riding = null;
    this.lookHold = 0;
    this.cameraYaw = v.heading;
    this.cameraPitch = v.isAir ? .18 : .1;
    this.cameraDist = v.cfg.len > 6 ? 11 : v.cfg.len > 4.8 ? 7.4 : 5.6;
    if (v.isAir) this.cameraDist = 12;
  }

  exitVehicle(v, side = 1) {
    const fx = Math.sin(v.heading), fz = Math.cos(v.heading);
    const rx = -fz, rz = fx;
    const off = v.cfg.wid / 2 + 1.1;
    let x = v.pos.x + rx * off * side, z = v.pos.z + rz * off * side;
    // avoid placing inside a wall
    const hit = this.game.city.collideCircle(x, z, .5);
    if (hit) { x = v.pos.x - rx * off * side; z = v.pos.z - rz * off * side; }
    this.vehicle = null;
    this.group.visible = true;
    this.shadow.visible = true;
    this.setPosition(x, z, this.groundY || .18);
    this.heading = v.heading;
    this.group.rotation.y = this.heading;
    this.cameraYaw = v.heading;
    this.velocity.set(0, 0, 0);
  }

  toggleCamera() {
    this.firstPerson = !this.firstPerson;
    this.cameraDist = this.firstPerson ? 0 : (this.vehicle ? 7 : 5.2);
    this.group.visible = !this.firstPerson && !this.vehicle;
    this.shadow.visible = !this.firstPerson && !this.vehicle;
    return this.firstPerson;
  }

  updateCamera(dt) {
    const cam = this.camera;
    if (this.cinematic) {
      const c = this.cinematic;
      c.t += dt;
      const t = c.t;
      cam.position.set(c.cx + Math.sin(t * c.speed) * c.radius, c.cy + Math.sin(t * .3) * 12, c.cz + Math.cos(t * c.speed) * c.radius);
      cam.lookAt(0, 28, 0);
      return;
    }
    if (this.vehicle) {
      this.updateVehicleCamera(dt);
      return;
    }
    if (this.riding) {
      this.updateRidingCamera(dt);
      return;
    }
    const target = this.tmp.set(this.pos.x, this.pos.y + this.cameraHeight, this.pos.z);
    const yaw = this.cameraYaw, pitch = this.cameraPitch;
    let dist = this.cameraDist;
    if (this.firstPerson) {
      const eye = new THREE.Vector3(this.pos.x, this.pos.y + 1.62, this.pos.z);
      cam.position.lerp(eye, clamp(dt * 18, 0, 1));
      const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(-pitch), Math.cos(yaw) * Math.cos(pitch));
      cam.lookAt(eye.x + dir.x, eye.y + dir.y, eye.z + dir.z);
      cam.rotation.z = 0;
      return;
    }
    const back = new THREE.Vector3(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
    let desired = new THREE.Vector3(target.x + back.x * dist, target.y + back.y * dist + 1.15, target.z + back.z * dist);
    // camera wall avoidance
    const hit = this.game.city.collideCircle(desired.x, desired.z, .45);
    if (hit) {
      desired.x += hit.nx * hit.pen * 1.2;
      desired.z += hit.nz * hit.pen * 1.2;
    }
    desired.y = Math.max(desired.y, .55);
    cam.position.lerp(desired, clamp(dt * 9, 0, 1));
    const look = new THREE.Vector3(this.pos.x, this.pos.y + 1.45, this.pos.z);
    cam.lookAt(look);
    // subtle shake
    if (this.game.camShake > 0) {
      const s = this.game.camShake;
      cam.position.x += (Math.random() - .5) * s * .25;
      cam.position.y += (Math.random() - .5) * s * .2;
      this.game.camShake = Math.max(0, s - dt * 2.2);
    }
  }

  updateVehicleCamera(dt) {
    const v = this.vehicle;
    const cam = this.camera;
    // The chase camera follows the vehicle heading. Mouse/stick look adds a
    // temporary orbit which eases back behind the car once released.
    if (this.lookHold > 0) this.lookHold -= dt;
    else this.cameraYaw = lerpAngle(this.cameraYaw, v.heading, clamp(dt * 3.4, 0, 1));
    const yaw = this.cameraYaw;
    const baseDist = v.isAir ? 13 : v.cfg.len > 6 ? 13 : v.cfg.len > 4.8 ? 9 : 7.2;
    const dist = this.cameraDist || baseDist;
    const pitch = this.cameraPitch;
    const target = new THREE.Vector3(v.pos.x, v.pos.y + (v.isAir ? 2 : v.cfg.height * .55), v.pos.z);
    if (this.firstPerson) {
      const eye = new THREE.Vector3(v.pos.x + Math.sin(v.heading) * v.cfg.len * .15, v.pos.y + (v.isAir ? 2.0 : v.cfg.height * .55), v.pos.z + Math.cos(v.heading) * v.cfg.len * .15);
      cam.position.lerp(eye, clamp(dt * 12, 0, 1));
      const dir = new THREE.Vector3(Math.sin(this.cameraYaw) * Math.cos(pitch), Math.sin(-pitch), Math.cos(this.cameraYaw) * Math.cos(pitch));
      cam.lookAt(eye.x + dir.x, eye.y + dir.y, eye.z + dir.z);
      return;
    }
    // orbit yaw = cameraYaw, but when moving it eases toward driving direction
    const drivingYaw = this.cameraYaw;
    const back = new THREE.Vector3(-Math.sin(drivingYaw) * Math.cos(pitch), Math.sin(pitch) * .6, -Math.cos(drivingYaw) * Math.cos(pitch));
    const desired = new THREE.Vector3(target.x + back.x * dist, target.y + Math.max(1.2, back.y * dist), target.z + back.z * dist);
    const hit = this.game.city.collideCircle(desired.x, desired.z, .45);
    if (hit) { desired.x += hit.nx * hit.pen; desired.z += hit.nz * hit.pen; }
    desired.y = Math.max(desired.y, v.isAir ? v.pos.y - 2 : .7);
    cam.position.lerp(desired, clamp(dt * 7, 0, 1));
    cam.lookAt(target);
    if (this.game.camShake > 0) {
      const s = this.game.camShake;
      cam.position.x += (Math.random() - .5) * s * .22;
      cam.position.y += (Math.random() - .5) * s * .18;
      this.game.camShake = Math.max(0, s - dt * 2.4);
    }
  }

  updateRidingCamera(dt) {
    const r = this.riding;
    const cam = this.camera;
    const t = r.group ? r.group.position : r.pos;
    const trainHeading = r.group?.rotation.y ?? this.cameraYaw;
    if (this.lookHold > 0) this.lookHold -= dt;
    else this.cameraYaw = lerpAngle(this.cameraYaw, trainHeading, clamp(dt * 2.2, 0, 1));
    const yaw = this.cameraYaw;
    // The train geometry grows backwards along its local -Z axis, so aim at
    // the middle of the consist rather than the lead car's origin.
    const cars = r.group?.userData?.cars;
    const trainLen = r.group?.userData?.trainLength ?? (cars?.length ? (cars.length - 1) * 10.6 + 10 : 22);
    const fx = Math.sin(trainHeading), fz = Math.cos(trainHeading);
    if (this.firstPerson) {
      const eye = new THREE.Vector3(t.x + fx * 1.8, t.y + 2.3, t.z + fz * 1.8);
      cam.position.lerp(eye, clamp(dt * 8, 0, 1));
      cam.lookAt(eye.x + fx * 30, eye.y - .25 + Math.sin(this.cameraPitch) * 14, eye.z + fz * 30);
      return;
    }
    const mid = new THREE.Vector3(
      t.x - fx * (trainLen * .5 - 5),
      t.y + 2.1,
      t.z - fz * (trainLen * .5 - 5)
    );
    const dist = (this.cameraDist || 18) + trainLen * .55;
    const back = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw)).multiplyScalar(dist);
    const desired = new THREE.Vector3(
      mid.x + back.x,
      mid.y + 4.4 + Math.sin(this.cameraPitch) * dist * .55,
      mid.z + back.z
    );
    cam.position.lerp(desired, clamp(dt * 4, 0, 1));
    cam.lookAt(mid);
  }

  update(dt, input) {
    if (this.cinematic) { this.updateCamera(dt); return; }
    if (this.vehicle) {
      this.updateCamera(dt);
      return;
    }
    if (this.riding) {
      this.updateCamera(dt);
      return;
    }
    // movement on foot
    const yaw = this.cameraYaw;
    let mx = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    let mz = (input.forward ? 1 : 0) - (input.back ? 1 : 0);
    const mag = Math.hypot(mx, mz);
    if (mag > 0) { mx /= mag; mz /= mag; }
    // Camera-relative forward is the screen-up direction.  Right is always
    // the camera's right vector, independent of keyboard/gamepad source.
    const f = new THREE.Vector2(Math.sin(yaw), Math.cos(yaw));
    const r = new THREE.Vector2(-f.y, f.x);
    const sprint = !!input.sprint;
    const crouching = !!this.crouching;
    const speed = crouching ? 2.1 : sprint ? 6.9 : 3.7;
    const targetVel = new THREE.Vector2(f.x * mz + r.x * mx, f.y * mz + r.y * mx).multiplyScalar(speed * (mag > 0 ? 1 : 0));
    const accel = this.onGround ? 16 : 5;
    this.velocity.x = lerp(this.velocity.x, targetVel.x, clamp(dt * accel, 0, 1));
    this.velocity.z = lerp(this.velocity.z, targetVel.y, clamp(dt * accel, 0, 1));
    if (mag > 0) {
      const moveHeading = Math.atan2(this.velocity.x, this.velocity.z);
      this.heading = lerpAngle(this.heading, moveHeading, clamp(dt * 11, 0, 1));
    }
    this.group.rotation.y = this.heading;
    const nextX = this.pos.x + this.velocity.x * dt;
    const nextZ = this.pos.z + this.velocity.z * dt;
    // collision
    let nx = nextX, nz = nextZ;
    const hit = this.game.city.collideCircle(nx, nz, .42);
    if (hit) {
      nx += hit.nx * hit.pen; nz += hit.nz * hit.pen;
      this.velocity.x *= .3; this.velocity.z *= .3;
    }
    // world bounds
    nx = clamp(nx, -680, 820);
    nz = clamp(nz, -660, 900);
    // Deep water is not walkable; the islands are reached over the bridges.
    if (this.game.city.isWater?.(nx, nz)) {
      nx = this.pos.x; nz = this.pos.z;
      this.velocity.multiplyScalar(.2);
    }
    this.pos.x = nx; this.pos.z = nz;
    // jump / gravity
    if (input.jump && this.onGround) {
      this.verticalVelocity = 5.8;
      this.onGround = false;
      this.game.audio?.jump();
    }
    this.verticalVelocity -= 18 * dt;
    this.pos.y += this.verticalVelocity * dt;
    if (this.pos.y <= this.groundY) {
      this.pos.y = this.groundY;
      this.verticalVelocity = 0;
      this.onGround = true;
    }
    this.moveAmount = Math.hypot(this.velocity.x, this.velocity.z);
    this.sprinting = sprint && this.moveAmount > 4;
    this.group.position.copy(this.pos);
    this.animate(dt, this.moveAmount, sprint);
    // footsteps
    if (this.onGround && this.moveAmount > .5) {
      this.footTimer -= dt * (sprint ? 1.8 : 1.2);
      if (this.footTimer <= 0) { this.footTimer = .48; this.game.audio?.footstep(sprint); }
    }
    this.updateCamera(dt);
  }

  animate(dt, speed, sprint) {
    this.animT += dt;
    const kneeL = this.kneeL, kneeR = this.kneeR;
    if (speed > .2) {
      this.walkPhase += dt * (sprint ? 12 : 7.5) * clamp(speed / 3.5, .5, 1.6);
      const swing = Math.sin(this.walkPhase) * (sprint ? .78 : .5);
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
      kneeL.rotation.x = Math.max(0, -swing) * 1.15;
      kneeR.rotation.x = Math.max(0, swing) * 1.15;
      this.elbowL.rotation.x = -.28 - Math.max(0, swing) * .5;
      this.elbowR.rotation.x = -.28 - Math.max(0, -swing) * .5;
      this.armL.rotation.x = -swing * .8;
      this.armR.rotation.x = swing * .8;
      this.armL.rotation.z = .045;
      this.armR.rotation.z = -.045;
      this.hips.position.y = .88 + Math.abs(Math.sin(this.walkPhase)) * (sprint ? .075 : .038);
      this.body.rotation.x = sprint ? -.16 : -.035;
      this.body.rotation.y = Math.sin(this.walkPhase) * (sprint ? .07 : .045);
      this.hips.rotation.z = Math.sin(this.walkPhase) * (sprint ? .035 : .02);
    } else {
      this.idleT += dt;
      const idle = Math.sin(this.idleT * 1.6) * .02;
      const breath = Math.sin(this.idleT * 1.6) * .012;
      this.legL.rotation.x = lerp(this.legL.rotation.x, 0, dt * 7);
      this.legR.rotation.x = lerp(this.legR.rotation.x, 0, dt * 7);
      kneeL.rotation.x = lerp(kneeL.rotation.x, .03, dt * 6);
      kneeR.rotation.x = lerp(kneeR.rotation.x, .03, dt * 6);
      this.armL.rotation.x = lerp(this.armL.rotation.x, -idle, dt * 6);
      this.armR.rotation.x = lerp(this.armR.rotation.x, idle, dt * 6);
      this.armL.rotation.z = lerp(this.armL.rotation.z, .08, dt * 5);
      this.armR.rotation.z = lerp(this.armR.rotation.z, -.08, dt * 5);
      this.elbowL.rotation.x = lerp(this.elbowL.rotation.x, -.22, dt * 5);
      this.elbowR.rotation.x = lerp(this.elbowR.rotation.x, -.22, dt * 5);
      this.hips.position.y = .88 + idle * .18 + breath;
      this.hips.rotation.z = lerp(this.hips.rotation.z, 0, dt * 5);
      this.body.rotation.x = lerp(this.body.rotation.x, 0, dt * 5);
      this.body.rotation.y = lerp(this.body.rotation.y, 0, dt * 5);
    }
    // vertical bob / jump pose
    if (!this.onGround) {
      this.legL.rotation.x = .45; this.legR.rotation.x = -.25;
      kneeL.rotation.x = .8; kneeR.rotation.x = .45;
      this.armL.rotation.x = -.7; this.armR.rotation.x = -.7;
      this.elbowL.rotation.x = -.4; this.elbowR.rotation.x = -.4;
    }
    this.shadow.position.y = this.groundY - this.pos.y + .012;
    this.shadow.material.opacity = clamp(.26 - (this.pos.y - this.groundY) * .08, .05, .3);
  }

  beginCinematic(cx, cy, cz, radius, speed) {
    this.cinematic = { cx, cy, cz, radius, speed, t: 0 };
    this.group.visible = false;
  }

  endCinematic() {
    this.cinematic = null;
    this.group.visible = !this.vehicle && !this.firstPerson;
  }
}
