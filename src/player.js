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
    this.mats = { skinMat, jacketMat, pantsMat, shoeMat, hairMat };

    const hips = new THREE.Group(); hips.position.y = .86; this.body.add(hips);
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(.22, .38, 4, 10), jacketMat);
    torso.position.y = .38; torso.castShadow = true; hips.add(torso);
    const chest = new THREE.Mesh(new THREE.BoxGeometry(.44, .22, .26), jacketMat); chest.position.y = .48; hips.add(chest);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(.075, .085, .13, 8), skinMat); neck.position.y = .68; hips.add(neck);
    const head = new THREE.Mesh(new THREE.SphereGeometry(.175, 14, 12), skinMat); head.position.y = .82; head.castShadow = true; hips.add(head);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(.181, 12, 10, 0, TAU, 0, Math.PI * .58), hairMat);
    hair.position.set(0, .845, -.006); hips.add(hair);
    // arms
    const armGeo = new THREE.CapsuleGeometry(.065, .4, 3, 8);
    this.armL = new THREE.Group(); this.armL.position.set(-.29, .56, 0); hips.add(this.armL);
    const armLMesh = new THREE.Mesh(armGeo, jacketMat); armLMesh.position.y = -.24; armLMesh.castShadow = true; this.armL.add(armLMesh);
    const handL = new THREE.Mesh(new THREE.SphereGeometry(.07, 8, 6), skinMat); handL.position.y = -.48; this.armL.add(handL);
    this.armR = new THREE.Group(); this.armR.position.set(.29, .56, 0); hips.add(this.armR);
    const armRMesh = new THREE.Mesh(armGeo, jacketMat); armRMesh.position.y = -.24; armRMesh.castShadow = true; this.armR.add(armRMesh);
    const handR = new THREE.Mesh(new THREE.SphereGeometry(.07, 8, 6), skinMat); handR.position.y = -.48; this.armR.add(handR);
    // legs
    const legGeo = new THREE.CapsuleGeometry(.085, .44, 3, 8);
    this.legL = new THREE.Group(); this.legL.position.set(-.12, .02, 0); hips.add(this.legL);
    const legLMesh = new THREE.Mesh(legGeo, pantsMat); legLMesh.position.y = -.27; legLMesh.castShadow = true; this.legL.add(legLMesh);
    const shoeL = new THREE.Mesh(new THREE.BoxGeometry(.17, .1, .3), shoeMat); shoeL.position.set(0, -.53, .05); this.legL.add(shoeL);
    this.legR = new THREE.Group(); this.legR.position.set(.12, .02, 0); hips.add(this.legR);
    const legRMesh = new THREE.Mesh(legGeo, pantsMat); legRMesh.position.y = -.27; legRMesh.castShadow = true; this.legR.add(legRMesh);
    const shoeR = new THREE.Mesh(new THREE.BoxGeometry(.17, .1, .3), shoeMat); shoeR.position.set(0, -.53, .05); this.legR.add(shoeR);
    this.hips = hips;
    // shadow blob
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(.42, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .24, depthWrite: false }));
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
    const yaw = v.heading + this.cameraYaw * 0; // vehicle camera orbit uses absolute yaw set by input
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
    const yaw = this.cameraYaw;
    const dist = this.cameraDist;
    const target = new THREE.Vector3(t.x, t.y + 2, t.z);
    const back = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw)).multiplyScalar(dist);
    const desired = new THREE.Vector3(target.x + back.x, target.y + 2.2 + Math.sin(this.cameraPitch) * dist, target.z + back.z);
    cam.position.lerp(desired, clamp(dt * 4, 0, 1));
    cam.lookAt(target);
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
    const f = new THREE.Vector2(Math.sin(yaw), Math.cos(yaw));
    const r = new THREE.Vector2(-f.y, f.x);
    const sprint = input.sprint;
    const speed = this.crouching ? 2.1 : sprint ? 6.9 : 3.7;
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
    nx = clamp(nx, -660, 760);
    nz = clamp(nz, -660, 500);
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
    if (speed > .2) {
      this.walkPhase += dt * (sprint ? 12 : 7.5) * clamp(speed / 3.5, .5, 1.6);
      const swing = Math.sin(this.walkPhase) * (sprint ? .78 : .5);
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
      this.armL.rotation.x = -swing * .8;
      this.armR.rotation.x = swing * .8;
      this.hips.position.y = .86 + Math.abs(Math.sin(this.walkPhase)) * (sprint ? .07 : .035);
      this.body.rotation.x = sprint ? -.14 : -.03;
    } else {
      this.idleT += dt;
      const idle = Math.sin(this.idleT * 1.6) * .02;
      this.legL.rotation.x = lerp(this.legL.rotation.x, 0, dt * 7);
      this.legR.rotation.x = lerp(this.legR.rotation.x, 0, dt * 7);
      this.armL.rotation.x = lerp(this.armL.rotation.x, -idle, dt * 6);
      this.armR.rotation.x = lerp(this.armR.rotation.x, idle, dt * 6);
      this.hips.position.y = .86 + idle * .2;
      this.body.rotation.x = lerp(this.body.rotation.x, 0, dt * 5);
    }
    // vertical bob / jump pose
    if (!this.onGround) {
      this.legL.rotation.x = .45; this.legR.rotation.x = -.25;
      this.armL.rotation.x = -.7; this.armR.rotation.x = -.7;
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
