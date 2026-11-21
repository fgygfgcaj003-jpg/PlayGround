import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp, rand, pick, chance, TAU, makeRng } from './utils.js';
import { glowTexture as glowTex, smokeTexture as smokeTex, starTexture as starTex, billboardTexture, signTexture } from './textures.js';
import { NODE_POS, SPACING, HALF_ROAD, CITY_EXTENT, GRID } from './city.js';
import { buildVehicleModel } from './models.js';

export function buildSky(city) {
  const scene = city.scene;
  const skyGeo = new THREE.SphereGeometry(1900, 32, 20);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x2f6ea8) },
      bottomColor: { value: new THREE.Color(0xb7d3e6) },
      night: { value: 0 }, storm: { value: 0 },
      sunDir: { value: new THREE.Vector3(0, 1, 0) },
    },
    vertexShader: `varying vec3 vWorld; void main(){ vWorld = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform vec3 topColor; uniform vec3 bottomColor; uniform vec3 sunDir; uniform float night; uniform float storm;
      varying vec3 vWorld;
      void main(){
        vec3 d = normalize(vWorld);
        float h = clamp(d.y * 1.4 + .12, 0., 1.);
        vec3 day = mix(bottomColor, topColor, pow(h, .55));
        vec3 dusk = mix(vec3(.16,.11,.19), vec3(.56,.26,.18), h);
        vec3 nightC = mix(vec3(.012,.025,.055), vec3(.004,.008,.02), h);
        vec3 col = mix(day, dusk, smoothstep(.72,.92,night)*.65);
        col = mix(col, nightC, night);
        col = mix(col, vec3(.17,.19,.21), storm*.55);
        float sd = max(dot(d, normalize(sunDir)), 0.);
        col += vec3(1.,.7,.38) * pow(sd, 220.) * (1.-night) * 2.2;
        col += vec3(1.,.6,.3) * pow(sd, 8.) * .16 * (1.-night) * (1.-storm*.5);
        gl_FragColor = vec4(col, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.frustumCulled = false;
  scene.add(sky);
  city.sky = sky;

  const sun = new THREE.DirectionalLight(0xffe7c4, 2.4);
  sun.position.set(300, 500, 200);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 1500;
  sun.shadow.camera.left = -280; sun.shadow.camera.right = 280;
  sun.shadow.camera.top = 280; sun.shadow.camera.bottom = -280;
  sun.shadow.bias = -0.0012;
  sun.shadow.normalBias = 0.6;
  scene.add(sun);
  scene.add(sun.target);
  city.sun = sun;

  const hemi = new THREE.HemisphereLight(0x9dc8ff, 0x3b4230, 0.6);
  scene.add(hemi); city.hemi = hemi;
  const amb = new THREE.AmbientLight(0xb8d4ff, 0.24);
  scene.add(amb); city.ambient = amb;

  // moon
  const moonMat = new THREE.SpriteMaterial({ map: glowTex(), color: 0xcfe4ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const moon = new THREE.Sprite(moonMat);
  moon.scale.set(70, 70, 1); moon.position.set(-500, 900, -600);
  scene.add(moon); city.moon = moon;

  // stars
  const starGeo = new THREE.BufferGeometry();
  const sp = new Float32Array(1400 * 3);
  for (let i = 0; i < 1400; i++) {
    const a = Math.random() * TAU, b = Math.acos(2 * Math.random() - 1);
    const r = 1500;
    sp[i * 3] = Math.sin(b) * Math.cos(a) * r;
    sp[i * 3 + 1] = Math.abs(Math.cos(b)) * r * .8 + 120;
    sp[i * 3 + 2] = Math.sin(b) * Math.sin(a) * r;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const starMat = new THREE.PointsMaterial({ map: starTex(), size: 6, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars); city.stars = stars;

  // clouds
  const cloudMat = new THREE.SpriteMaterial({ map: makeCloud(), color: 0xf2f6ff, transparent: true, opacity: .85, depthWrite: false });
  city.cloudSpriteMat = cloudMat;
  for (let i = 0; i < 30; i++) {
    const s = new THREE.Sprite(cloudMat);
    const sc = 90 + Math.random() * 180;
    s.scale.set(sc * 2.1, sc * .8, 1);
    s.position.set(rand(-900, 900), rand(130, 220), rand(-900, 900));
    s.userData.speed = rand(1.5, 4.5);
    scene.add(s); city.clouds.push(s);
  }
}

function makeCloud() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const ctx = c.getContext('2d');
  for (let i = 0; i < 34; i++) {
    const x = 30 + Math.random() * 196, y = 64 + (Math.random() - .5) * 40, r = 12 + Math.random() * 30;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,.5)');
    g.addColorStop(.55, 'rgba(240,246,255,.22)');
    g.addColorStop(1, 'rgba(240,246,255,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function buildProps(city, rng) {
  const root = city.root;
  const tmp = new THREE.Object3D();

  // street lights
  const poleGeo = new THREE.CylinderGeometry(.09, .14, 5.6, 6);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x30363b, roughness: .7, metalness: .5 });
  const armGeo = new THREE.BoxGeometry(2.4, .1, .1);
  const headGeo = new THREE.BoxGeometry(1.1, .18, .4);
  const headMat = new THREE.MeshStandardMaterial({ color: 0xffe6b8, emissive: 0xffcf8a, emissiveIntensity: 2.2, roughness: .4 });
  const lampPositions = [];
  for (let i = 0; i < GRID; i++) {
    const p = NODE_POS(i);
    for (let t = -CITY_EXTENT + 12; t <= CITY_EXTENT - 12; t += 44) {
      for (const s of [-1, 1]) {
        lampPositions.push({ pole: [p + s * (HALF_ROAD + 3.4), 2.85, t], arm: [p + s * (HALF_ROAD + 2.4), 5.5, t], armR: 0, head: [p + s * (HALF_ROAD + 1.6), 5.45, t] });
        lampPositions.push({ pole: [t, 2.85, p + s * (HALF_ROAD + 3.4)], arm: [t, 5.5, p + s * (HALF_ROAD + 2.4)], armR: Math.PI / 2, head: [t, 5.45, p + s * (HALF_ROAD + 1.6)] });
      }
    }
  }
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, lampPositions.length);
  const arms = new THREE.InstancedMesh(armGeo, poleMat, lampPositions.length);
  const heads = new THREE.InstancedMesh(headGeo, headMat, lampPositions.length);
  lampPositions.forEach((l, i) => {
    tmp.position.set(...l.pole); tmp.rotation.set(0, 0, 0); tmp.updateMatrix(); poles.setMatrixAt(i, tmp.matrix);
    tmp.position.set(...l.arm); tmp.rotation.set(0, l.armR, 0); tmp.updateMatrix(); arms.setMatrixAt(i, tmp.matrix);
    tmp.position.set(...l.head); tmp.rotation.set(0, 0, 0); tmp.updateMatrix(); heads.setMatrixAt(i, tmp.matrix);
  });
  poles.castShadow = true;
  root.add(poles, arms, heads);

  const glowGeo = new THREE.BufferGeometry();
  const gp = new Float32Array(lampPositions.length * 3);
  lampPositions.forEach((l, i) => { gp[i * 3] = l.head[0]; gp[i * 3 + 1] = l.head[1] - .1; gp[i * 3 + 2] = l.head[2]; });
  glowGeo.setAttribute('position', new THREE.BufferAttribute(gp, 3));
  const glowMat = new THREE.PointsMaterial({ map: glowTex(), color: 0xffc57c, size: 6, transparent: true, opacity: .35, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  const glows = new THREE.Points(glowGeo, glowMat);
  glows.frustumCulled = false;
  root.add(glows);
  city.lampGlow = glows;

  // hydrants
  const hydGeo = new THREE.CylinderGeometry(.16, .2, .6, 8);
  const hydMat = new THREE.MeshStandardMaterial({ color: 0xb03a2e, roughness: .7 });
  const hyds = new THREE.InstancedMesh(hydGeo, hydMat, 44);
  for (let i = 0; i < 44; i++) {
    const n = Math.floor(Math.random() * GRID), p = NODE_POS(n);
    const along = rand(-CITY_EXTENT + 20, CITY_EXTENT - 20);
    const side = Math.random() > .5 ? 1 : -1;
    tmp.position.set(Math.random() > .5 ? p + side * 10 : along, .45, Math.random() > .5 ? along : p + side * 10);
    tmp.updateMatrix(); hyds.setMatrixAt(i, tmp.matrix);
  }
  root.add(hyds);

  // bins
  const binGeo = new THREE.CylinderGeometry(.32, .26, .9, 8);
  const binMat = new THREE.MeshStandardMaterial({ color: 0x37424a, roughness: .8 });
  const bins = new THREE.InstancedMesh(binGeo, binMat, 55);
  for (let i = 0; i < 55; i++) {
    const n = Math.floor(Math.random() * GRID), p = NODE_POS(n);
    const along = rand(-CITY_EXTENT + 20, CITY_EXTENT - 20);
    const side = Math.random() > .5 ? 1 : -1;
    tmp.position.set(Math.random() > .5 ? p + side * 10.2 : along, .6, Math.random() > .5 ? along : p + side * 10.2);
    tmp.updateMatrix(); bins.setMatrixAt(i, tmp.matrix);
  }
  root.add(bins);

  // bus shelters
  const busSpots = [
    [-260, -192, Math.PI / 2], [132, -96, Math.PI / 2], [96, 180, 0], [-96, 96, 0],
    [260, 48, Math.PI / 2], [-192, 260, 0], [288, -240, Math.PI / 2], [-48, -300, 0],
  ];
  for (const [x, z, r] of busSpots) {
    city.busStops.push({ x, z });
    const g = new THREE.Group(); g.position.set(x, .15, z); g.rotation.y = r;
    const roof = new THREE.Mesh(new THREE.BoxGeometry(5.6, .18, 2.2), new THREE.MeshStandardMaterial({ color: 0x2e3740, roughness: .7, metalness: .4 }));
    roof.position.y = 2.7; g.add(roof);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(5.2, 2.5, .08), new THREE.MeshStandardMaterial({ color: 0x9fc6dd, transparent: true, opacity: .28, roughness: .05, metalness: .3 }));
    glass.position.set(0, 1.4, -1.0); g.add(glass);
    for (const sx of [-2.6, 2.6]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.1, 2.7, .1), city.metalMat);
      post.position.set(sx, 1.35, -1.0); g.add(post);
    }
    const seat = new THREE.Mesh(new THREE.BoxGeometry(4.2, .16, .55), city.woodMat); seat.position.set(0, .58, -.7); g.add(seat);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(.9, .9), new THREE.MeshBasicMaterial({ map: signTexture('BUS', '#1c5a8a', '#eef8ff'), transparent: true }));
    sign.position.set(2.9, 1.8, 0); g.add(sign);
    root.add(g);
    city.busStops[city.busStops.length - 1].mesh = g;
  }

  // billboards around downtown
  const ads = [
    ['SOLARIS', 'clean energy · bright future', '#062c46', '#1188b8'],
    ['VOLT', 'the city runs electric', '#2b0a3d', '#8a37b8'],
    ['AURORA', 'live above it all', '#3c1a08', '#c86a23'],
    ['NOVA AIR', 'fly beyond the skyline', '#082c33', '#16a6a0'],
  ];
  ads.forEach((a, i) => {
    const angle = i * Math.PI / 2 + .4;
    const x = Math.cos(angle) * 190, z = Math.sin(angle) * 190;
    const mat = new THREE.MeshBasicMaterial({ map: billboardTexture(a[0], a[1], a[2], a[3]) });
    const b = new THREE.Mesh(new THREE.PlaneGeometry(28, 14), mat);
    b.position.set(x, 42 + i * 3, z); b.lookAt(0, 30, 0); root.add(b);
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(.5, 8, .5), city.metalMat);
      leg.position.set(x + s * 8, 38, z); root.add(leg);
    }
  });

  // roadside trees on residential edges
  for (let bi = 0; bi < 8; bi++) {
    for (let bj = 0; bj < 8; bj++) {
      const d = city.blocks.find(b => b.bi === bi && b.bj === bj);
      if (!d || !['suburb', 'residential', 'waterfront', 'park'].includes(d.district)) continue;
      for (let k = 0; k < 4; k++) {
        const edge = Math.floor(Math.random() * 4);
        const off = rand(-30, 30);
        if (edge === 0) city.tree(d.x + off, d.z - 35.6, rand(.55, .9));
        if (edge === 1) city.tree(d.x + off, d.z + 35.6, rand(.55, .9));
        if (edge === 2) city.tree(d.x - 35.6, d.z + off, rand(.55, .9));
        if (edge === 3) city.tree(d.x + 35.6, d.z + off, rand(.55, .9));
      }
    }
  }

  // fireflies in park
  const fg = new THREE.BufferGeometry();
  const fp = new Float32Array(120 * 3);
  for (let i = 0; i < 120; i++) { fp[i * 3] = -24 + rand(-25, 25); fp[i * 3 + 1] = rand(.6, 4); fp[i * 3 + 2] = -24 + rand(-25, 25); }
  fg.setAttribute('position', new THREE.BufferAttribute(fp, 3));
  const fm = new THREE.PointsMaterial({ color: 0xffe08a, size: .35, transparent: true, opacity: .7, map: glowTex(), blending: THREE.AdditiveBlending, depthWrite: false });
  const fireflies = new THREE.Points(fg, fm);
  root.add(fireflies); city.fireflyPoints = fireflies;

  // factory smoke
  if (city.factorySmokePos) {
    const sg = new THREE.BufferGeometry();
    const sp = new Float32Array(70 * 3);
    for (let i = 0; i < 70; i++) {
      sp[i * 3] = city.factorySmokePos.x + rand(-2, 2);
      sp[i * 3 + 1] = rand(0, 48);
      sp[i * 3 + 2] = city.factorySmokePos.z + rand(-2, 2);
    }
    sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    const sm = new THREE.PointsMaterial({ map: smokeTex(), color: 0x8c8c8c, size: 10, transparent: true, opacity: .28, depthWrite: false });
    const smoke = new THREE.Points(sg, sm);
    smoke.frustumCulled = false;
    root.add(smoke); city.smokeParticles = smoke;
  }

  city.finalizeProps();
}

export function buildWaterfront(city, rng) {
  const root = city.root;
  // beach
  const beach = new THREE.Mesh(new THREE.PlaneGeometry(1700, 100), city.mats.sand);
  beach.rotation.x = -Math.PI / 2; beach.position.set(0, .05, 438); beach.receiveShadow = true; root.add(beach);
  // promenade
  const prom = new THREE.Mesh(new THREE.PlaneGeometry(1400, 12), city.mats.sidewalk);
  prom.rotation.x = -Math.PI / 2; prom.position.set(0, .12, 392); root.add(prom);
  // boardwalk rail
  const railMat = new THREE.MeshStandardMaterial({ color: 0x6d5a43, roughness: .9 });
  for (let x = -420; x <= 420; x += 16) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(.16, 1.1, .16), railMat);
    post.position.set(x, .65, 398); root.add(post);
  }
  const topRail = new THREE.Mesh(new THREE.BoxGeometry(840, .1, .12), railMat);
  topRail.position.set(0, 1.15, 398); root.add(topRail);
  // palms
  for (let i = 0; i < 18; i++) {
    const x = -400 + i * 46 + rand(-8, 8), z = 404 + (i % 2) * 6;
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.18, .32, 7, 6), new THREE.MeshStandardMaterial({ color: 0x7a6247, roughness: 1 }));
    trunk.position.y = 3.5; g.add(trunk);
    for (let l = 0; l < 6; l++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(.8, 4.4, 5), new THREE.MeshStandardMaterial({ color: 0x2f5a32, roughness: 1 }));
      leaf.position.set(Math.cos(l / 6 * TAU) * 1.4, 7.2, Math.sin(l / 6 * TAU) * 1.4);
      leaf.rotation.set(Math.cos(l / 6 * TAU) * .9, 0, Math.sin(l / 6 * TAU) * .9 + .5);
      g.add(leaf);
    }
    g.position.set(x, .1, z); root.add(g);
  }

  // ocean shader
  const waterGeo = new THREE.PlaneGeometry(2600, 1300, 80, 40);
  const waterMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 }, night: { value: 0 },
      deep: { value: new THREE.Color(0x0a3b52) }, shallow: { value: new THREE.Color(0x2a8ca6) },
      sky: { value: new THREE.Color(0x9ec6dd) },
    },
    vertexShader: `
      uniform float time; varying vec3 vWorld; varying float vWave;
      void main(){
        vec3 p = position;
        float w = sin(p.x*.035 + time*.7)*.5 + sin(p.y*.06 - time*.9)*.3 + sin((p.x+p.y)*.11 + time*1.6)*.12;
        p.z += w; vWave = w;
        vec4 wp = modelMatrix * vec4(p,1.0);
        vWorld = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: `
      uniform float time; uniform float night; uniform vec3 deep; uniform vec3 shallow; uniform vec3 sky;
      varying vec3 vWorld; varying float vWave;
      void main(){
        vec3 v = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(v.y, 0.0), 2.2);
        vec3 col = mix(deep, shallow, .35 + vWave*.18);
        col = mix(col, sky, fres*.55);
        float sparkle = pow(max(0., sin(vWorld.x*.6 + time*1.3) * sin(vWorld.z*.45 - time)) , 18.);
        col += vec3(.8,.9,1.)*sparkle*.35*(1.-night);
        col *= 1.0 - night*.58;
        gl_FragColor = vec4(col, 0.94);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent: true,
  });
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, .02, 920);
  root.add(water); city.water = water;

  // shoreline foam
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(1700, 3), new THREE.MeshBasicMaterial({ color: 0xe7f6ff, transparent: true, opacity: .5 }));
  foam.rotation.x = -Math.PI / 2; foam.position.set(0, .09, 486); root.add(foam);
  city.animated.push({ type: 'foam', mesh: foam });

  // marina
  const dockMat = new THREE.MeshStandardMaterial({ color: 0x7b5f41, roughness: .95 });
  for (let i = 0; i < 4; i++) {
    const dock = new THREE.Mesh(new THREE.BoxGeometry(4, .35, 26), dockMat);
    dock.position.set(300 + i * 13, .35, 452 + 8); root.add(dock);
  }
  const mainDock = new THREE.Mesh(new THREE.BoxGeometry(52, .4, 6), dockMat);
  mainDock.position.set(319, .4, 444); root.add(mainDock);
  const mSign = new THREE.Mesh(new THREE.PlaneGeometry(7, 2.4), new THREE.MeshBasicMaterial({ map: signTexture('MARINA', '#123a4a', '#d8f4ff'), transparent: true }));
  mSign.position.set(319, 2.6, 440); root.add(mSign);
  city.marina = { x: 319, z: 452 };
  city.addPOI('marina', 'Harbor Marina', 319, 442, 20, { icon: 'marina' });

  // beach umbrellas
  for (let i = 0; i < 14; i++) {
    const x = -380 + i * 55, z = 414 + (i % 3) * 8;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 2.6, 5), city.metalMat);
    pole.position.set(x, 1.35, z); root.add(pole);
    const top = new THREE.Mesh(new THREE.ConeGeometry(2, .6, 10), new THREE.MeshStandardMaterial({ color: pick([0xd96b5b, 0x4f8fa3, 0xe0b45c, 0x6d9e77]), roughness: .9, side: THREE.DoubleSide }));
    top.position.set(x, 2.7, z); root.add(top);
  }
}

/* ------------------------------------------------------------------ */
/* Outlying islands, causeways and the island rail line                */
/* ------------------------------------------------------------------ */

function addPalm(root, x, z, s = 1, rng = Math.random) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.16 * s, .3 * s, 6.2 * s, 7), new THREE.MeshStandardMaterial({ color: 0x7a6247, roughness: 1 }));
  trunk.position.y = 3.1 * s; trunk.rotation.z = (rng() - .5) * .08; g.add(trunk);
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x2f5a32, roughness: 1, side: THREE.DoubleSide });
  for (let l = 0; l < 7; l++) {
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(.75 * s, 4.2 * s, 5), leafMat);
    const a = l / 7 * TAU;
    leaf.position.set(Math.cos(a) * 1.3 * s, 6.6 * s, Math.sin(a) * 1.3 * s);
    leaf.rotation.set(Math.cos(a) * .95, 0, Math.sin(a) * .95 + .45);
    g.add(leaf);
  }
  g.position.set(x, .1, z); root.add(g);
}

function addCottage(city, x, z, rot, color) {
  const root = city.root;
  const g = new THREE.Group();
  g.position.set(x, .12, z); g.rotation.y = rot;
  const wall = new THREE.MeshStandardMaterial({ color, roughness: .86 });
  const roofMat = new THREE.MeshStandardMaterial({ color: pick([0x8a3f33, 0x38505c, 0x6b4a33, 0x4a5a42]), roughness: .9 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(9, 3.4, 7), wall); body.position.y = 1.8; body.castShadow = true; g.add(body);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(7.1, 2.7, 4), roofMat);
  roof.position.y = 4.5; roof.rotation.y = Math.PI / 4; roof.castShadow = true; g.add(roof);
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, .14), new THREE.MeshStandardMaterial({ color: 0x4a3525, roughness: .8 }));
  door.position.set(0, 1.15, 3.55); g.add(door);
  const winMat = new THREE.MeshStandardMaterial({ color: 0x9fd4e6, emissive: 0xffc77a, emissiveIntensity: .15, roughness: .15, metalness: .3 });
  for (const s of [-1, 1]) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, .1), winMat);
    win.position.set(s * 2.9, 2.0, 3.56); g.add(win);
  }
  const chimney = new THREE.Mesh(new THREE.BoxGeometry(.7, 2.1, .7), new THREE.MeshStandardMaterial({ color: 0x6b4a3a, roughness: .95 }));
  chimney.position.set(2.2, 5.0, -1.2); g.add(chimney);
  root.add(g);
  const ext = Math.abs(Math.cos(rot)) * 4.6 + Math.abs(Math.sin(rot)) * 3.6;
  const extZ = Math.abs(Math.cos(rot)) * 3.6 + Math.abs(Math.sin(rot)) * 4.6;
  city.colliders.push({ minX: x - ext, maxX: x + ext, minZ: z - extZ, maxZ: z + extZ, height: 7, type: 'building', mesh: body });
}

function addRoadBridge(city, x0, z0, x1, z1, width, railBridge = false) {
  const root = city.root;
  const dx = x1 - x0, dz = z1 - z0;
  const len = Math.hypot(dx, dz);
  const ang = Math.atan2(dx, dz);
  const g = new THREE.Group();
  g.position.set((x0 + x1) * .5, 0, (z0 + z1) * .5);
  g.rotation.y = ang;
  root.add(g);
  const deckMat = new THREE.MeshStandardMaterial({ color: 0x4a5056, roughness: .9 });
  const asphalt = new THREE.MeshStandardMaterial({ color: 0x282c31, roughness: .96 });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(width, .32, len), deckMat); deck.position.y = -.06; deck.castShadow = true; g.add(deck);
  if (!railBridge) {
    const top = new THREE.Mesh(new THREE.BoxGeometry(width - 1.6, .06, len - .4), asphalt); top.position.y = .12; g.add(top);
  }
  const railMat = new THREE.MeshStandardMaterial({ color: 0xa8b1b8, roughness: .35, metalness: .7 });
  const postMat = new THREE.MeshStandardMaterial({ color: 0x515b64, roughness: .55, metalness: .5 });
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(.16, .16, len), railMat); rail.position.set(side * (width / 2 - .25), 1.05, 0); g.add(rail);
    const rail2 = new THREE.Mesh(new THREE.BoxGeometry(.12, .12, len), railMat); rail2.position.set(side * (width / 2 - .25), .55, 0); g.add(rail2);
    const count = Math.max(2, Math.floor(len / 9));
    for (let i = 0; i <= count; i++) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.14, 1.1, .14), postMat);
      post.position.set(side * (width / 2 - .25), .55, -len / 2 + i * len / count); g.add(post);
    }
    // structural beams under the deck
    const beam = new THREE.Mesh(new THREE.BoxGeometry(.3, .55, len), postMat);
    beam.position.set(side * (width / 2 - .7), -.45, 0); g.add(beam);
  }
  const pillarGeo = new THREE.CylinderGeometry(.85, 1.1, 9, 8);
  const count = Math.max(1, Math.floor(len / 22));
  for (let i = 1; i <= count; i++) {
    const p = new THREE.Mesh(pillarGeo, new THREE.MeshStandardMaterial({ color: 0x6a7076, roughness: .8 }));
    p.position.set(0, -4.2, -len / 2 + i * len / (count + 1)); g.add(p);
  }
  if (railBridge) {
    for (const side of [-1, 1]) {
      const truss = new THREE.Mesh(new THREE.BoxGeometry(.22, 2.6, len), postMat);
      truss.position.set(side * (width / 2 + .1), 1.7, 0); g.add(truss);
      const count2 = Math.max(3, Math.floor(len / 7));
      for (let i = 0; i <= count2; i++) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(.15, 2.6, .15), postMat);
        post.position.set(side * (width / 2 + .1), 1.7, -len / 2 + i * len / count2); g.add(post);
      }
    }
  }
  const minX = Math.min(x0, x1) - width / 2 - 2, maxX = Math.max(x0, x1) + width / 2 + 2;
  const minZ = Math.min(z0, z1) - width / 2 - 2, maxZ = Math.max(z0, z1) + width / 2 + 2;
  city.bridges.push({ minX, maxX, minZ, maxZ });
}

export function buildIslands(city, rng) {
  const root = city.root;
  const sandMat = new THREE.MeshStandardMaterial({ color: 0xd8cba2, roughness: 1 });
  const grassMat = new THREE.MeshStandardMaterial({ color: 0x4b6a3c, roughness: 1 });
  const asphalt = new THREE.MeshStandardMaterial({ color: 0x2a2e33, roughness: .95 });
  const curbMat = new THREE.MeshStandardMaterial({ color: 0x9a9a92, roughness: .9 });

  const islands = [
    { name: 'PALM ISLAND', x: 300, z: 700, rx: 182, rz: 132 },
    { name: 'CORAL ISLAND', x: -310, z: 748, rx: 156, rz: 114 },
  ];
  city.islands = islands;
  city.bridges = [];

  for (const d of islands) {
    const sand = new THREE.Mesh(new THREE.CylinderGeometry(1, 1.04, .16, 56), sandMat);
    sand.scale.set(d.rx, 1, d.rz); sand.position.set(d.x, -.02, d.z); sand.receiveShadow = true; root.add(sand);
    const grass = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, .18, 56), grassMat);
    grass.scale.set(d.rx * .87, 1, d.rz * .85); grass.position.set(d.x, .02, d.z); grass.receiveShadow = true; root.add(grass);
    // rocky shoreline accents
    for (let i = 0; i < 16; i++) {
      const a = rng() * TAU;
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(.8 + rng() * 1.7, 0), new THREE.MeshStandardMaterial({ color: 0x7a7468, roughness: 1, flatShading: true }));
      rock.position.set(d.x + Math.cos(a) * d.rx * .97, .2, d.z + Math.sin(a) * d.rz * .97);
      rock.rotation.set(rng(), rng() * TAU, rng()); root.add(rock);
    }
  }

  // island road network
  const roads = [
    { x: 300, z: 700, w: 16, d: 262 },
    { x: 300, z: 700, w: 330, d: 16 },
    { x: -310, z: 748, w: 16, d: 208 },
    { x: -310, z: 748, w: 268, d: 16 },
  ];
  city.islandRoads = roads;
  for (const r of roads) {
    const road = new THREE.Mesh(new THREE.BoxGeometry(r.w, .05, r.d), asphalt);
    road.position.set(r.x, .135, r.z); root.add(road);
    const curbW = r.w > r.d;
    for (const s of [-1, 1]) {
      const curb = new THREE.Mesh(new THREE.BoxGeometry(curbW ? r.w : 1.2, .18, curbW ? 1.2 : r.d), curbMat);
      curb.position.set(r.x + (curbW ? 0 : s * (r.w / 2 + .4)), .16, r.z + (curbW ? s * (r.d / 2 + .4) : 0));
      root.add(curb);
    }
  }
  // lane markings on the island avenues
  const dashGeo = new THREE.BoxGeometry(.18, .02, 3);
  const dashMat = new THREE.MeshBasicMaterial({ color: 0xd9d6b8 });
  for (let z = 590; z <= 812; z += 12) {
    const dash = new THREE.Mesh(dashGeo, dashMat); dash.position.set(300, .17, z); root.add(dash);
  }
  for (let x = 150; x <= 452; x += 12) {
    const dash = new THREE.Mesh(dashGeo, dashMat); dash.rotation.y = Math.PI / 2; dash.position.set(x, .17, 700); root.add(dash);
  }
  for (let z = 660; z <= 840; z += 12) {
    const dash = new THREE.Mesh(dashGeo, dashMat); dash.position.set(-310, .17, z); root.add(dash);
  }
  for (let x = -432; x <= -188; x += 12) {
    const dash = new THREE.Mesh(dashGeo, dashMat); dash.rotation.y = Math.PI / 2; dash.position.set(x, .17, 748); root.add(dash);
  }

  // cottages, palms and beach dressing
  const houseColors = [0xe8ddc6, 0xd7b98f, 0xc9d6cf, 0xe0c7a9, 0xb9c9bd];
  const houses = [
    [158, 638, .2], [398, 648, -.15], [236, 776, .35], [400, 778, -.4],
    [248, 604, .1], [356, 606, -.2], [244, 800, .25], [358, 802, -.3],
    [-390, 690, .15], [-232, 692, -.25], [-392, 806, .3], [-228, 810, -.15],
  ];
  for (let i = 0; i < houses.length; i++) {
    addCottage(city, houses[i][0], houses[i][1], houses[i][2], houseColors[i % houseColors.length]);
  }
  for (let i = 0; i < 26; i++) {
    const d = islands[i % 2];
    const a = rng() * TAU;
    const x = d.x + Math.cos(a) * d.rx * (0.55 + rng() * .34);
    const z = d.z + Math.sin(a) * d.rz * (0.55 + rng() * .34);
    if (Math.abs(x - 300) < 14 || Math.abs(z - 700) < 14 || Math.abs(x + 310) < 14 || Math.abs(z - 748) < 14) continue;
    if (Math.abs(x - 200) < 10 && z > 440 && z < 682) continue;
    addPalm(root, x, z, .8 + rng() * .45, rng);
  }
  // beach umbrellas
  for (let i = 0; i < 10; i++) {
    const x = 180 + i * 26, z = 820 + (i % 2) * 6;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 2.4, 5), city.metalMat);
    pole.position.set(x, 1.3, z); root.add(pole);
    const top = new THREE.Mesh(new THREE.ConeGeometry(1.9, .55, 10), new THREE.MeshStandardMaterial({ color: pick([0xd96b5b, 0x4f8fa3, 0xe0b45c]), roughness: .9, side: THREE.DoubleSide }));
    top.position.set(x, 2.5, z); root.add(top);
  }

  // lighthouse on Coral Island
  const lh = new THREE.Group();
  lh.position.set(-360, .1, 830);
  const white = new THREE.MeshStandardMaterial({ color: 0xeeeae0, roughness: .7 });
  const red = new THREE.MeshStandardMaterial({ color: 0xb23a34, roughness: .65 });
  for (let i = 0; i < 5; i++) {
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(1.8 - i * .22, 2.0 - i * .22, 3, 12), i % 2 ? red : white);
    seg.position.y = 1.5 + i * 3; lh.add(seg);
  }
  const gallery = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.0, .35, 12), new THREE.MeshStandardMaterial({ color: 0x2f353a, roughness: .6 })); gallery.position.y = 15.1; lh.add(gallery);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(.75, 10, 8), new THREE.MeshBasicMaterial({ color: 0xfff2ba, toneMapped: false })); lamp.position.y = 16; lh.add(lamp);
  const lampLight = new THREE.PointLight(0xffe2a0, 2.4, 70, 2); lampLight.position.y = 16; lh.add(lampLight);
  root.add(lh);
  city.lighthouse = { group: lh, light: lampLight, lamp };

  // marina on the south shore of Coral Island
  const dockMat = new THREE.MeshStandardMaterial({ color: 0x7b5f41, roughness: .95 });
  for (let i = 0; i < 3; i++) {
    const dock = new THREE.Mesh(new THREE.BoxGeometry(4, .38, 22), dockMat);
    dock.position.set(-286 + i * 14, .35, 878); root.add(dock);
  }
  const mainDock = new THREE.Mesh(new THREE.BoxGeometry(38, .42, 6), dockMat);
  mainDock.position.set(-272, .38, 868); root.add(mainDock);

  // bridges: mainland -> Palm Island, Palm -> Coral, and the railway bridge
  addRoadBridge(city, 300, 466, 300, 594, 18);
  addRoadBridge(city, 122, 700, -152, 741, 16);
  addRoadBridge(city, 200, 466, 200, 622, 9, true);

  city.addPOI('park', 'Palm Island Beach', 300, 812, 34, { icon: 'park' });
  city.addPOI('shop', 'Palm Island Market', 388, 700, 16, { icon: 'shop' });
  city.addPOI('marina', 'Coral Island Marina', -272, 866, 22, { icon: 'marina' });
  city.addPOI('park', 'Coral Lighthouse', -360, 820, 18, { icon: 'park' });
  city.addPOI('hotel', 'Palm Island Resort', 208, 646, 20, { icon: 'hotel' });
}

export function buildTransit(city, rng) {
  const root = city.root;
  // --- monorail guideway loop ---
  const R = 250, Y = 14, turnRadius = 18;
  const guideMat = new THREE.MeshStandardMaterial({ color: 0x8f9aa3, roughness: .4, metalness: .55 });
  const guideMat2 = new THREE.MeshStandardMaterial({ color: 0x4a5560, roughness: .5, metalness: .5 });
  const guide = new THREE.Group();
  const straight = 2 * (R - turnRadius);
  const segs = [
    [0, -R, straight, 3.2, 0], [0, R, straight, 3.2, 0],
    [-R, 0, 3.2, straight, 0], [R, 0, 3.2, straight, 0],
  ];
  for (const [x, z, w, d] of segs) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(w, .9, d), guideMat);
    beam.position.set(x, Y, z); beam.castShadow = true; guide.add(beam);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(w + .2, .16, d + .2), guideMat2);
    rail.position.set(x, Y + .52, z); guide.add(rail);
  }
  const corners = [
    [R - turnRadius, -R + turnRadius, -Math.PI / 2],
    [R - turnRadius, R - turnRadius, 0],
    [-R + turnRadius, R - turnRadius, Math.PI / 2],
    [-R + turnRadius, -R + turnRadius, Math.PI],
  ];
  for (const [x, z, start] of corners) {
    addCurvedBeam(guide, x, z, turnRadius, start, start + Math.PI / 2, Y, .9, 3.2, guideMat);
    addCurvedBeam(guide, x, z, turnRadius, start, start + Math.PI / 2, Y + .52, .16, 3.4, guideMat2);
  }
  // pillars
  const pillarGeo = new THREE.CylinderGeometry(.75, .95, Y, 8);
  for (let x = -R; x <= R; x += 25) {
    for (const z of [-R, R]) {
      const p = new THREE.Mesh(pillarGeo, guideMat2);
      p.position.set(x, Y / 2, z); p.castShadow = true; guide.add(p);
    }
  }
  for (let z = -R + 25; z <= R - 25; z += 25) {
    for (const x of [-R, R]) {
      const p = new THREE.Mesh(pillarGeo, guideMat2);
      p.position.set(x, Y / 2, z); p.castShadow = true; guide.add(p);
    }
  }
  // stations (corners of loop midpoints)
  const stations = [
    { x: 0, z: -R, ang: 0, name: 'NORTH LOOP' },
    { x: R, z: 0, ang: Math.PI / 2, name: 'EAST GATE' },
    { x: 0, z: R, ang: Math.PI, name: 'HARBOR VIEW' },
    { x: -R, z: 0, ang: -Math.PI / 2, name: 'WEST END' },
  ];
  for (let i = 0; i < stations.length; i++) {
    const s = stations[i];
    const platform = new THREE.Mesh(new THREE.BoxGeometry(28, .6, 7), guideMat);
    platform.position.set(s.x + Math.cos(s.ang) * 0, Y - .9, s.z + 0); guide.add(platform);
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(26, .25, 6), new THREE.MeshStandardMaterial({ color: 0xd7e8f0, roughness: .3, metalness: .2, transparent: true, opacity: .65 }));
    canopy.position.set(s.x, Y + 4.4, s.z); guide.add(canopy);
    for (let p = -1; p <= 1; p += 2) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.28, 5.3, .28), guideMat2);
      post.position.set(s.x + p * 12, Y + 2.1, s.z); guide.add(post);
    }
    const canopy2 = new THREE.Mesh(new THREE.BoxGeometry(28, .2, 7), new THREE.MeshStandardMaterial({ color: 0x506070, roughness: .5 }));
    canopy2.position.set(s.x, Y + 4.6, s.z); guide.add(canopy2);
    const signMat = new THREE.MeshBasicMaterial({ map: signTexture('MONORAIL', '#071d2b', '#8ceaff', s.name), transparent: true });
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 3), signMat);
    sign.position.set(s.x, Y + 2.8, s.z); sign.rotation.y = s.ang + Math.PI; guide.add(sign);
    // elevator tower to ground
    const towerX = s.x, towerZ = s.z + 10;
    const tower = new THREE.Mesh(new THREE.BoxGeometry(5.5, Y, 5.5), new THREE.MeshStandardMaterial({ color: 0x3f4c58, roughness: .35, metalness: .4 }));
    tower.position.set(towerX, Y / 2, towerZ); guide.add(tower);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(4.2, Y - 1.5, 4.4), new THREE.MeshStandardMaterial({ color: 0x6fc5dd, transparent: true, opacity: .45, roughness: .1, metalness: .6 }));
    glass.position.set(towerX, Y / 2, towerZ); guide.add(glass);
    const eg = new THREE.Mesh(new THREE.BoxGeometry(6.4, .4, 6.4), guideMat);
    eg.position.set(towerX, Y + .4, towerZ); guide.add(eg);
    // entrance sign at ground
    const ent = new THREE.Group(); ent.position.set(towerX, 0, towerZ + 5);
    const post = new THREE.Mesh(new THREE.CylinderGeometry(.08, .1, 2.8, 6), guideMat2); post.position.y = 1.4; ent.add(post);
    const entSign = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 1.1), new THREE.MeshBasicMaterial({ map: signTexture('NOVA RAIL', '#081c2b', '#8ceaff', s.name), transparent: true }));
    entSign.position.set(0, 3.2, 0); ent.add(entSign); guide.add(ent);
    city.addPOI('monorail', s.name + ' Monorail', towerX, towerZ + 2, 7, { icon: 'transit', station: i });
    s.tower = new THREE.Vector3(towerX, 0, towerZ);
    s.platformY = Y;
  }
  // monorail train geometry
  const train = buildMonorailTrain();
  train.position.set(0, Y + 1.1, -R);
  guide.add(train);
  root.add(guide);

  const loopLen = 4 * (2 * R);
  const initialProgress = loopLen / 8;
  const monorail = {
    group: train, progress: initialProgress, speed: 0, targetSpeed: 11, dwell: 5.5, manual: false,
    stations, Y, R, perimeter: loopLen, doorOpen: true, currentStation: 0, lastStation: 0,
    stopAt: null, riding: false,
    update(dt, elapsed) {
      if (this.manual) {
        this.targetSpeed = clamp(this.targetSpeed, 0, 24);
        this.speed = THREE.MathUtils.damp(this.speed, this.targetSpeed, 1.6, dt);
        this.speed *= (1 - dt * .12);
        this.progress = (this.progress + this.speed * dt) % this.perimeter;
        if (this.speed < 0) this.speed = 0;
        if (this.speed > .5 || this.stationAt(this.progress) !== this.currentStation) this.currentStation = -1;
        else if (this.speed < .25) this.currentStation = this.stationAt(this.progress);
        this.doorOpen = this.currentStation >= 0 && this.speed < .25;
        this.positionCars();
        this.animateDoors(dt);
        return;
      }
      // automatic: stop at next station
      const next = this.nextStationDistance();
      if (this.dwell > 0) {
        this.dwell -= dt; this.speed = THREE.MathUtils.damp(this.speed, 0, 6, dt); this.doorOpen = true;
      } else {
        this.doorOpen = false;
        if (next < 26 && this.speed > 0) {
          this.speed = THREE.MathUtils.damp(this.speed, 0, 3.4, dt);
          if (next < 1.6) { this.dwell = 5.5; this.speed = 0; this.currentStation = this.stationAt(this.progress); }
        } else {
          this.speed = THREE.MathUtils.damp(this.speed, 11, 1.1, dt);
        }
        this.progress = (this.progress + this.speed * dt) % this.perimeter;
        if (this.speed > .5) this.currentStation = -1;
      }
      this.positionCars();
      this.animateDoors(dt);
    },
    nextStationDistance() {
      let best = 1e9;
      for (const s of this.stations) {
        const p = this.stationProgress(s);
        let d = (p - this.progress + this.perimeter) % this.perimeter;
        if (d < 2) d = this.perimeter;
        best = Math.min(best, d);
      }
      return best;
    },
    stationProgress(s) {
      // progress order: north (top), east (right), south (bottom), west (left)
      const seg = this.perimeter / 4;
      if (Math.abs(s.z + R) < 1) return seg * 0.5;
      if (Math.abs(s.x - R) < 1) return seg * 1.5;
      if (Math.abs(s.z - R) < 1) return seg * 2.5;
      return seg * 3.5;
    },
    stationAt(p) {
      let best = -1, bd = 4;
      for (let i = 0; i < this.stations.length; i++) {
        const sp = this.stationProgress(this.stations[i]);
        let d = Math.abs(((p - sp + this.perimeter / 2) % this.perimeter) - this.perimeter / 2);
        if (d < bd) { bd = d; best = i; }
      }
      return best;
    },
    positionCars() {
      const pts = loopPoints(this.progress, this.perimeter, this.R);
      this.group.position.set(pts.x, this.Y + 1.1, pts.z);
      this.group.rotation.y = -pts.angle + Math.PI / 2;
      for (let i = 1; i < this.group.userData.cars.length; i++) {
        this.group.userData.cars[i].position.set(0, 0, -i * 10.6);
      }
    },
    animateDoors(dt) {
      const doors = this.group.userData.doors || [];
      for (const d of doors) {
        d.scale.x = THREE.MathUtils.damp(d.scale.x, this.doorOpen ? .05 : 1, 5, dt);
      }
    },
    board() { this.dwell = 5; return true; },
    stationPositions() { return this.stations.map(s => s.tower); },
  };
  monorail.positionCars();
  monorail.animateDoors(1);
  city.monorail = monorail;

  // --- ground railway (double track, freight + commuter) ---
  const railY = .1, railZ = -446, track2Z = railZ - 5.2;
  const railSteel = new THREE.MeshStandardMaterial({ color: 0xa8afb4, roughness: .26, metalness: .85 });
  const ballast = new THREE.Mesh(new THREE.BoxGeometry(1200, .28, 15), new THREE.MeshStandardMaterial({ color: 0x3d3a34, roughness: 1 }));
  ballast.position.set(0, .05, (railZ + track2Z) / 2); root.add(ballast);
  const sleeperGeo = new THREE.BoxGeometry(.3, .13, 10.4);
  const sleepers = new THREE.InstancedMesh(sleeperGeo, city.woodMat, 300);
  const tmp = new THREE.Object3D();
  for (let i = 0; i < 300; i++) {
    tmp.position.set(-600 + i * 4, railY + .1, (railZ + track2Z) / 2); tmp.rotation.set(0, Math.PI / 2, 0); tmp.updateMatrix(); sleepers.setMatrixAt(i, tmp.matrix);
  }
  root.add(sleepers);
  for (const tz of [railZ, track2Z]) {
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(1200, .13, .16), railSteel);
      rail.position.set(0, railY + .21, tz + side * .75); root.add(rail);
      const base = new THREE.Mesh(new THREE.BoxGeometry(1200, .05, .34), new THREE.MeshStandardMaterial({ color: 0x5a5f63, roughness: .6, metalness: .5 }));
      base.position.set(0, railY + .13, tz + side * .75); root.add(base);
    }
  }
  // catenary masts and overhead wire
  const mastMat = new THREE.MeshStandardMaterial({ color: 0x59636c, roughness: .5, metalness: .6 });
  for (let x = -600; x <= 600; x += 48) {
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(.14, .2, 8.6, 7), mastMat);
    mast.position.set(x, 4.3, track2Z - 4.1); root.add(mast);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(.14, .14, 7.4), mastMat);
    arm.position.set(x, 7.9, track2Z - .55); root.add(arm);
    for (const tz of [railZ, track2Z]) {
      const wire = new THREE.Mesh(new THREE.BoxGeometry(.035, .035, 48), new THREE.MeshBasicMaterial({ color: 0x2b3034 }));
      wire.position.set(x, 7.62, tz); root.add(wire);
    }
  }
  // lineside signals
  for (const x of [-340, -40, 260, 520]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(.08, .11, 3.4, 6), mastMat);
    post.position.set(x, 1.8, railZ + 3.6); root.add(post);
    for (let i = 0; i < 3; i++) {
      const lens = new THREE.Mesh(new THREE.SphereGeometry(.13, 8, 6), new THREE.MeshBasicMaterial({ color: i === 0 ? 0x33ff77 : i === 1 ? 0x2a2410 : 0x2a0a0a, toneMapped: false }));
      lens.position.set(x, 3.5 - i * .36, railZ + 3.7); root.add(lens);
    }
  }
  // station
  const st = new THREE.Group();
  const platform = new THREE.Mesh(new THREE.BoxGeometry(92, 1.1, 8), city.concreteMat);
  platform.position.set(170, .55, -438); st.add(platform);
  const tactile = new THREE.Mesh(new THREE.BoxGeometry(90, .08, .7), new THREE.MeshStandardMaterial({ color: 0xd7b23f, roughness: .8 }));
  tactile.position.set(170, 1.13, -441.2); st.add(tactile);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(82, .3, 9.5), new THREE.MeshStandardMaterial({ color: 0x39424a, roughness: .6, metalness: .3 }));
  roof.position.set(170, 5.3, -438); st.add(roof);
  const canopyGlass = new THREE.Mesh(new THREE.BoxGeometry(80, .08, 8.8), new THREE.MeshStandardMaterial({ color: 0x8fc7dc, transparent: true, opacity: .28, roughness: .05, metalness: .4 }));
  canopyGlass.position.set(170, 5.08, -438); st.add(canopyGlass);
  for (let x = -38; x <= 38; x += 12) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(.2, 4.8, .2), city.metalMat);
    post.position.set(170 + x, 2.7, -438); st.add(post);
    if (x % 24 === 0) {
      const bench = new THREE.Mesh(new THREE.BoxGeometry(5.6, .16, .7), city.woodMat); bench.position.set(170 + x, 1.25, -436.4); st.add(bench);
    }
  }
  const stationSign = new THREE.Mesh(new THREE.PlaneGeometry(12, 3), new THREE.MeshBasicMaterial({ map: signTexture('NOVA CENTRAL', '#0b1b2b', '#cfefff', 'RAIL TERMINAL'), transparent: true }));
  stationSign.position.set(170, 3.7, -434); st.add(stationSign);
  const stairs = new THREE.Mesh(new THREE.BoxGeometry(9, 1.2, 6), city.concreteMat);
  stairs.position.set(170, .45, -430); st.add(stairs);
  root.add(st);
  city.addPOI('train', 'Nova Central Rail', 170, -430, 16, { icon: 'transit', station: 1 });

  // smaller stops west and east along the same line
  const commuterStops = [
    { x: -260, name: 'WESTBROOK', sub: 'COMMUTER STOP' },
    { x: 430, name: 'EASTGATE', sub: 'COMMUTER STOP' },
  ];
  for (const s of commuterStops) {
    const stop = new THREE.Group();
    const p = new THREE.Mesh(new THREE.BoxGeometry(64, 1.05, 7), city.concreteMat);
    p.position.set(s.x, .52, -438); stop.add(p);
    const t = new THREE.Mesh(new THREE.BoxGeometry(62, .07, .6), new THREE.MeshStandardMaterial({ color: 0xd7b23f, roughness: .8 }));
    t.position.set(s.x, 1.08, -441); stop.add(t);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(58, .25, 8), new THREE.MeshStandardMaterial({ color: 0x39424a, roughness: .6, metalness: .3 }));
    roof.position.set(s.x, 4.5, -438); stop.add(roof);
    for (let x = -26; x <= 26; x += 13) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(.18, 4.1, .18), city.metalMat);
      post.position.set(s.x + x, 2.3, -438); stop.add(post);
    }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(9, 2.4), new THREE.MeshBasicMaterial({ map: signTexture(s.name, '#0b1b2b', '#cfefff', s.sub), transparent: true }));
    sign.position.set(s.x, 3.2, -434); stop.add(sign);
    root.add(stop);
    city.addPOI('train', `${s.name[0]}${s.name.slice(1).toLowerCase()} Rail`, s.x, -429, 13, { icon: 'transit', station: s === commuterStops[0] ? 0 : 2 });
  }

  // commuter train
  const commuter = buildCommuterTrain();
  commuter.position.set(-420, railY + .3, railZ);
  root.add(commuter);
  const railStations = [
    { x: -260, z: -430, name: 'Westbrook' },
    { x: 170, z: -430, name: 'Nova Central' },
    { x: 430, z: -430, name: 'Eastgate' },
  ];
  city.rail = {
    group: commuter, speed: 16, progress: 0, length: 1200, dwell: 0,
    lineName: 'COMMUTER RAIL', routeName: 'Nova Central Line',
    stations: railStations, auto: true, currentStation: -1, trainLength: 70, departCool: 0,
    nearestStation() {
      return this.stations[Math.max(0, this.currentStation)];
    },
    update(dt, elapsed) {
      if (this.auto) {
        if (this.dwell > 0) {
          this.dwell -= dt;
          this.speed = THREE.MathUtils.damp(this.speed, 0, 5, dt);
          if (this.dwell <= 0) this.departCool = 4.5;
        } else if (this.departCool > 0) {
          this.departCool -= dt;
          this.speed = THREE.MathUtils.damp(this.speed, 16, 1.4, dt);
        } else {
          const x = this.group.position.x;
          let next = null, best = 1e9, idx = -1;
          for (let i = 0; i < this.stations.length; i++) {
            let d = this.stations[i].x - x;
            if (d < -1) d += 1200;
            if (d < best) { best = d; next = this.stations[i]; idx = i; }
          }
          if (next && best < 90) {
            const target = THREE.MathUtils.clamp(best * .32, 0, 16);
            this.speed = THREE.MathUtils.damp(this.speed, target, 1.8, dt);
            if (best < 3.5 && Math.abs(this.speed) < 3) {
              this.speed = 0; this.dwell = 6.5; this.currentStation = idx;
              this.progress = (next.x + 600 + 1200) % 1200;
              this.group.position.x = next.x;
            }
          } else {
            this.speed = THREE.MathUtils.damp(this.speed, 16, .9, dt);
          }
          if (this.speed > .4) this.currentStation = -1;
        }
        this.progress = (this.progress + this.speed * dt + 1200) % 1200;
        this.group.position.x = -600 + this.progress;
      } else {
        this.progress = (this.progress + this.speed * dt + 1200) % 1200;
        this.group.position.x = -600 + this.progress;
        if (this.speed > .4) this.currentStation = -1;
        else {
          let best = 1e9, idx = -1;
          for (let i = 0; i < this.stations.length; i++) {
            const d = Math.abs(this.stations[i].x - this.group.position.x);
            if (d < best) { best = d; idx = i; }
          }
          this.currentStation = best < 8 ? idx : -1;
        }
      }
      if (this.speed > .01) this.group.userData.wheels?.forEach(w => w.rotation.x += this.speed * dt / .55);
    },
  };
  if (city.rail) city.rail.group.userData.trainLength = 70;

  // freight service on the second track
  const freight = buildFreightTrain();
  freight.position.set(520, railY + .3, track2Z);
  root.add(freight);
  city.freightRail = {
    group: freight, speed: 12, progress: 520,
    update(dt) {
      this.progress = (this.progress + this.speed * dt) % 1200;
      this.group.position.x = 600 - this.progress;
      this.group.userData.wheels?.forEach(w => w.rotation.x += dt * 7);
    },
  };

  // --- Island rail: shore terminal across the railway bridge -----------
  const islTrackX = 200, islZ0 = 452, islLen = 210;
  const ballast2 = new THREE.Mesh(new THREE.BoxGeometry(6.2, .22, islLen + 14), new THREE.MeshStandardMaterial({ color: 0x3d3a34, roughness: 1 }));
  ballast2.position.set(islTrackX, .1, islZ0 + islLen / 2); root.add(ballast2);
  const sleepers2 = new THREE.InstancedMesh(new THREE.BoxGeometry(.26, .12, 3.2), city.woodMat, Math.floor(islLen / 1.6));
  const tmp2 = new THREE.Object3D();
  for (let i = 0; i < sleepers2.count; i++) {
    tmp2.position.set(islTrackX, .22, islZ0 + i * 1.6 + 2); tmp2.rotation.set(0, Math.PI / 2, 0); tmp2.updateMatrix(); sleepers2.setMatrixAt(i, tmp2.matrix);
  }
  root.add(sleepers2);
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(.14, .12, islLen + 10), railSteel);
    rail.position.set(islTrackX + side * .75, .32, islZ0 + islLen / 2); root.add(rail);
  }
  for (const z of [islZ0, islZ0 + islLen]) {
    const platform = new THREE.Mesh(new THREE.BoxGeometry(7, .9, 18), city.concreteMat);
    platform.position.set(islTrackX + 5.4, .5, z + (z === islZ0 ? 6 : -6)); root.add(platform);
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(7.6, .18, 18), new THREE.MeshStandardMaterial({ color: 0x506070, roughness: .5 }));
    canopy.position.set(islTrackX + 5.4, 4.2, z + (z === islZ0 ? 6 : -6)); root.add(canopy);
    for (const dz of [-6, 6]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(.1, .12, 4.1, 6), city.metalMat);
      post.position.set(islTrackX + 8.6, 2.05, z + dz + (z === islZ0 ? 6 : -6)); root.add(post);
    }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 1.6), new THREE.MeshBasicMaterial({ map: signTexture(z === islZ0 ? 'HARBOR' : 'PALM ISLAND', '#0b1b2b', '#cfefff', 'ISLAND LINE'), transparent: true }));
    sign.position.set(islTrackX + 8.9, 3.0, z + (z === islZ0 ? 6 : -6)); sign.rotation.y = -Math.PI / 2; root.add(sign);
  }
  city.addPOI('train', 'Harbor Island Line', islTrackX + 5, islZ0 + 6, 13, { icon: 'transit', line: 'island', station: 0 });
  city.addPOI('train', 'Palm Island Station', islTrackX + 5, islZ0 + islLen - 6, 13, { icon: 'transit', line: 'island', station: 1 });
  const tram = buildTramTrain();
  tram.position.set(islTrackX, .42, islZ0 + 2);
  root.add(tram);
  const islandStations = [
    { x: islTrackX, z: islZ0 + 2, name: 'Harbor Island', exit: { x: islTrackX + 10, z: islZ0 + 6 } },
    { x: islTrackX, z: islZ0 + islLen - 2, name: 'Palm Island', exit: { x: islTrackX + 10, z: islZ0 + islLen - 6 } },
  ];
  city.islandRail = {
    group: tram, speed: 0, progress: 2, dir: 1, dwell: 3, length: islLen,
    lineName: 'PALM ISLAND LINE', routeName: 'Harbor ↔ Palm Island',
    stations: islandStations, currentStation: 0, trainLength: 21, doors: true,
    nearestStation(pos) {
      return Math.hypot(pos.x - islandStations[0].x, pos.z - islandStations[0].z) < Math.hypot(pos.x - islandStations[1].x, pos.z - islandStations[1].z)
        ? islandStations[0] : islandStations[1];
    },
    stoppedAtStation() {
      if (this.speed > .6) return -1;
      if (this.progress <= 3) return 0;
      if (this.progress >= this.length - 3) return 1;
      return -1;
    },
    update(dt) {
      if (this.dwell > 0) {
        this.dwell -= dt;
        this.speed = THREE.MathUtils.damp(this.speed, 0, 5, dt);
      } else {
        const distanceLeft = this.dir > 0 ? this.length - this.progress : this.progress;
        const target = distanceLeft < 34 ? 2.6 : 14;
        this.speed = THREE.MathUtils.damp(this.speed, target, 1.4, dt);
        this.progress += this.speed * this.dir * dt;
        if (this.progress >= this.length - 2) { this.progress = this.length - 2; this.dir = -1; this.dwell = 6; this.speed = 0; }
        if (this.progress <= 2) { this.progress = 2; this.dir = 1; this.dwell = 6; this.speed = 0; }
      }
      this.currentStation = this.stoppedAtStation();
      this.doors = this.currentStation >= 0 && this.dwell > 0;
      this.group.position.z = islZ0 + this.progress;
      this.group.rotation.y = this.dir > 0 ? 0 : Math.PI;
      this.group.userData.wheels?.forEach(w => w.rotation.x += this.speed * dt / .4);
    },
  };

  // elevated highway (north edge), visual traffic
  const hwY = 8.5, hwZ = -392;
  const hw = new THREE.Group();
  const deck = new THREE.Mesh(new THREE.BoxGeometry(1280, .8, 20), new THREE.MeshStandardMaterial({ color: 0x353b42, roughness: .9 }));
  deck.position.set(0, hwY, hwZ); hw.add(deck);
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(1280, .9, .25), new THREE.MeshStandardMaterial({ color: 0x8d969e, roughness: .5, metalness: .5 }));
    rail.position.set(0, hwY + 1, hwZ + side * 9.8); hw.add(rail);
  }
  const pillarGeo2 = new THREE.CylinderGeometry(1.1, 1.3, hwY, 8);
  for (let x = -620; x <= 620; x += 40) {
    const p = new THREE.Mesh(pillarGeo2, city.concreteMat); p.position.set(x, hwY / 2, hwZ); hw.add(p);
  }
  root.add(hw);
  for (let i = 0; i < 12; i++) {
    const c = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.1, 1.8), new THREE.MeshStandardMaterial({ color: pick([0x8b2f33, 0x2f4f7a, 0xd0d0c8, 0x2e2e34, 0x9a7b32]), roughness: .6, metalness: .3 }));
    body.position.y = .8; c.add(body);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.9, .8, 1.6), new THREE.MeshStandardMaterial({ color: 0x1b2834, roughness: .2, metalness: .5 })); cab.position.set(-.1, 1.55, 0); c.add(cab);
    c.position.set(rand(-600, 600), hwY + .6, hwZ + (i % 2 ? 4 : -4));
    c.userData.speed = 16 + Math.random() * 10;
    c.userData.lane = hwZ;
    root.add(c); city.highwayCars.push(c);
  }

  // tunnel portal on east outskirt
  const portal = new THREE.Group();
  const arch = new THREE.Mesh(new THREE.BoxGeometry(6, 14, 30), new THREE.MeshStandardMaterial({ color: 0x5b5e62, roughness: .95 }));
  arch.position.set(430, 7, 120); portal.add(arch);
  const hole = new THREE.Mesh(new THREE.BoxGeometry(.2, 8, 14), new THREE.MeshBasicMaterial({ color: 0x05070a }));
  hole.position.set(427, 4.2, 120); portal.add(hole);
  root.add(portal);

  // Buses at terminal
  const busDepot = new THREE.Mesh(new THREE.PlaneGeometry(60, 30), new THREE.MeshStandardMaterial({ color: 0x2e3236, roughness: 1 }));
  busDepot.rotation.x = -Math.PI / 2; busDepot.position.set(96, .17, 336); root.add(busDepot);
}

function addCurvedBeam(root, cx, cz, radius, startAngle, endAngle, y, height, width, material) {
  const steps = 12;
  for (let i = 0; i < steps; i++) {
    const a0 = startAngle + (endAngle - startAngle) * i / steps;
    const a1 = startAngle + (endAngle - startAngle) * (i + 1) / steps;
    const am = (a0 + a1) * .5;
    const dx = Math.cos(am) * radius;
    const dz = Math.sin(am) * radius;
    const span = radius * Math.abs(a1 - a0);
    const segment = new THREE.Mesh(new THREE.BoxGeometry(width, height, span + .12), material);
    segment.position.set(cx + dx, y, cz + dz);
    segment.rotation.y = -am;
    segment.castShadow = true;
    root.add(segment);
  }
}

function loopPoints(progress, perimeter, R) {
  const seg = perimeter / 4;
  let p = progress % perimeter;
  if (p < seg) return { x: -R + p, z: -R, angle: 0 };
  p -= seg;
  if (p < seg) return { x: R, z: -R + p, angle: Math.PI / 2 };
  p -= seg;
  if (p < seg) return { x: R - p, z: R, angle: Math.PI };
  p -= seg;
  return { x: -R, z: R - p, angle: -Math.PI / 2 };
}

function buildMonorailTrain() {
  const g = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({ color: 0xeef4f7, roughness: .26, metalness: .38 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x173a4e, roughness: .07, metalness: .72 });
  const accent = new THREE.MeshStandardMaterial({ color: 0x2fa7c9, emissive: 0x155e70, emissiveIntensity: .8, roughness: .35 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x27343c, roughness: .6, metalness: .45 });
  const seat = new THREE.MeshStandardMaterial({ color: 0x2f6f88, roughness: .85 });
  const cars = [], doors = [];
  for (let i = 0; i < 4; i++) {
    const car = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.9, 2.15, 9.7), shell); body.position.y = 1.45; body.castShadow = true; car.add(body);
    const skirt = new THREE.Mesh(new THREE.BoxGeometry(2.8, .55, 9.4), dark); skirt.position.y = .52; car.add(skirt);
    const nose = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.45, 1.6), shell); nose.position.set(0, 1.1, 5.35); car.add(nose);
    const noseTip = new THREE.Mesh(new THREE.BoxGeometry(2.2, .75, .4), accent); noseTip.position.set(0, .82, 6.1); car.add(noseTip);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.93, .2, 9.6), accent); stripe.position.y = 1.28; car.add(stripe);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(2.94, .82, 8.4), glassMat); glass.position.y = 1.98; car.add(glass);
    for (let p = -3; p <= 3; p++) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(2.96, .86, .09), shell);
      pillar.position.set(0, 1.98, p * 1.35); car.add(pillar);
    }
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.72, .2, 9.2), shell); roof.position.y = 2.63; car.add(roof);
    const ac = new THREE.Mesh(new THREE.BoxGeometry(1.5, .24, 2.6), dark); ac.position.set(0, 2.78, -.4); car.add(ac);
    if (i === 0) {
      const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.2, .95, .1), glassMat); windshield.position.set(0, 1.78, 6.13); car.add(windshield);
      const routeSign = new THREE.Mesh(new THREE.BoxGeometry(1.4, .26, .08), new THREE.MeshBasicMaterial({ color: 0x8ceaff, toneMapped: false })); routeSign.position.set(0, 2.42, 6.12); car.add(routeSign);
      for (const s of [-1, 1]) {
        const head = new THREE.Mesh(new THREE.BoxGeometry(.34, .2, .1), new THREE.MeshBasicMaterial({ color: 0xfff4d0, toneMapped: false }));
        head.position.set(s * 1.0, .95, 6.16); car.add(head);
      }
    }
    // sliding doors and visible interior seating
    for (const side of [-1, 1]) {
      for (const zz of [-2.9, 2.9]) {
        const door = new THREE.Mesh(new THREE.BoxGeometry(.05, 1.72, 1.24), glassMat);
        door.position.set(side * 1.48, 1.45, zz); car.add(door); doors.push(door);
      }
      for (let s = 0; s < 3; s++) {
        const bench = new THREE.Mesh(new THREE.BoxGeometry(.62, .34, 1.7), seat);
        bench.position.set(side * .78, 1.15, -3 + s * 2.6); car.add(bench);
      }
      const grabRail = new THREE.Mesh(new THREE.BoxGeometry(.05, .05, 8.4), new THREE.MeshStandardMaterial({ color: 0xd5b445, roughness: .35, metalness: .7 }));
      grabRail.position.set(0, 2.34, 0); car.add(grabRail);
    }
    const bogie = new THREE.Mesh(new THREE.BoxGeometry(2.1, .42, 2.2), dark); bogie.position.y = .32; car.add(bogie);
    car.position.z = -i * 10.6;
    g.add(car); cars.push(car);
  }
  g.userData.cars = cars; g.userData.doors = doors;
  return g;
}

function buildCommuterTrain() {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xa9b1b6, roughness: .5, metalness: .42 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x25333e, roughness: .3, metalness: .5 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x14394d, roughness: .06, metalness: .75 });
  const stripe = new THREE.MeshStandardMaterial({ color: 0xd7b23f, roughness: .45, metalness: .3 });
  const seatMat = new THREE.MeshStandardMaterial({ color: 0x37566b, roughness: .88 });
  const wheels = [];
  const cars = [];
  const addCar = (z, len, loco) => {
    const car = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.1, 3.25, len), bodyMat); body.position.y = 2.25; body.castShadow = true; car.add(body);
    const skirt = new THREE.Mesh(new THREE.BoxGeometry(3.0, .55, len - .4), darkMat); skirt.position.y = .8; car.add(skirt);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(3.14, .92, len - 1.4), glassMat); glass.position.y = 2.9; car.add(glass);
    for (let p = 0; p < 5; p++) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(3.16, .98, .1), bodyMat);
      pillar.position.set(0, 2.9, -len / 2 + 1.5 + p * (len - 3) / 4); car.add(pillar);
    }
    const st = new THREE.Mesh(new THREE.BoxGeometry(3.14, .32, len - .2), stripe); st.position.y = 1.42; car.add(st);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.9, .22, len - .7), bodyMat); roof.position.y = 3.9; car.add(roof);
    const ac = new THREE.Mesh(new THREE.BoxGeometry(1.7, .26, 2.8), darkMat); ac.position.set(0, 4.04, 0); car.add(ac);
    // doors along both sides
    for (const side of [-1, 1]) for (const zz of [-len * .24, len * .24]) {
      const door = new THREE.Mesh(new THREE.BoxGeometry(.06, 2.05, 1.3), darkMat);
      door.position.set(side * 1.56, 1.95, zz); car.add(door);
      const doorGlass = new THREE.Mesh(new THREE.BoxGeometry(.04, 1.1, .95), glassMat);
      doorGlass.position.set(side * 1.585, 2.2, zz); car.add(doorGlass);
    }
    for (const side of [-1, 1]) for (let s = 0; s < 4; s++) {
      const bench = new THREE.Mesh(new THREE.BoxGeometry(.62, .36, 1.8), seatMat);
      bench.position.set(side * .8, 1.55, -len * .28 + s * 2.4 + (loco ? 1 : 0)); car.add(bench);
    }
    if (loco) {
      const nose = new THREE.Mesh(new THREE.BoxGeometry(2.9, 2.3, 2.2), bodyMat); nose.position.set(0, 2.0, len / 2 + 1.0); car.add(nose);
      const noseSlope = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.4, 1.3), bodyMat); noseSlope.position.set(0, 1.55, len / 2 + 2.2); noseSlope.rotation.x = -.28; car.add(noseSlope);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.75, 1.0, .1), glassMat); cab.position.set(0, 2.65, len / 2 + 1.9); cab.rotation.x = -.15; car.add(cab);
      for (const s of [-1, 1]) {
        const light = new THREE.Mesh(new THREE.SphereGeometry(.2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xfff2c0, toneMapped: false }));
        light.position.set(s * .95, 1.4, len / 2 + 2.75); car.add(light);
      }
    }
    for (const side of [-1, 1]) for (const zz of [-len / 2 + 2.2, len / 2 - 2.2]) {
      const truck = new THREE.Mesh(new THREE.BoxGeometry(1.9, .5, 2.5), darkMat);
      truck.position.set(0, .68, zz); car.add(truck);
      for (const s of [-1, 1]) {
        const w = new THREE.Mesh(new THREE.CylinderGeometry(.55, .55, .28, 12), new THREE.MeshStandardMaterial({ color: 0x22262a, roughness: .9 }));
        w.rotation.z = Math.PI / 2; w.position.set(side * 1.28, .55, zz); car.add(w); wheels.push(w);
      }
    }
    car.position.z = z; g.add(car); cars.push(car);
  };
  addCar(0, 15, true);
  addCar(-18, 16, false); addCar(-36, 16, false); addCar(-54, 16, false);
  g.userData.wheels = wheels;
  g.userData.cars = cars;
  g.userData.trainLength = 70;
  return g;
}

function buildFreightTrain() {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x4c5a62, roughness: .62, metalness: .45 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x22282c, roughness: .85 });
  const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1f2327, roughness: .9 });
  const wheels = [];
  const colors = [0x8a3a32, 0x2f5570, 0x6b6f45, 0x8a7a3b];
  const loco = new THREE.Group();
  const lb = new THREE.Mesh(new THREE.BoxGeometry(3.2, 3.1, 13), bodyMat); lb.position.y = 2.2; loco.add(lb);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(3.0, 1.4, 3), new THREE.MeshStandardMaterial({ color: 0x243540, roughness: .4, metalness: .5 })); cab.position.set(0, 3.5, 4.4); loco.add(cab);
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(3.22, .35, 12.8), new THREE.MeshStandardMaterial({ color: 0xd7b23f, roughness: .5 })); stripe.position.y = 1.4; loco.add(stripe);
  for (const s of [-1, 1]) {
    const light = new THREE.Mesh(new THREE.SphereGeometry(.2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xfff0c0, toneMapped: false }));
    light.position.set(s * 1, 2.4, 6.6); loco.add(light);
  }
  for (const zz of [-4.4, 4.4]) {
    const truck = new THREE.Mesh(new THREE.BoxGeometry(2.2, .55, 2.8), dark); truck.position.y = .65; truck.position.z = zz; loco.add(truck);
    for (const s of [-1, 1]) for (const dz of [-.8, .8]) {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(.6, .6, .3, 12), wheelMat); w.rotation.z = Math.PI / 2; w.position.set(s * 1.3, .6, zz + dz); loco.add(w); wheels.push(w);
    }
  }
  g.add(loco);
  for (let i = 0; i < 4; i++) {
    const car = new THREE.Group();
    const flat = new THREE.Mesh(new THREE.BoxGeometry(3.2, .3, 15), dark); flat.position.y = 1.2; car.add(flat);
    const box = new THREE.Mesh(new THREE.BoxGeometry(3.32, 2.9, 14.2), new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: .75, metalness: .25 })); box.position.y = 2.8; box.castShadow = true; car.add(box);
    for (let r = -6; r <= 6; r += 1.2) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(3.34, 2.8, .06), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, transparent: true, opacity: .16 })); rib.position.set(0, 2.8, r); car.add(rib);
    }
    for (const zz of [-5, 5]) {
      const truck = new THREE.Mesh(new THREE.BoxGeometry(2.1, .5, 2.6), dark); truck.position.y = .65; truck.position.z = zz; car.add(truck);
      for (const s of [-1, 1]) for (const dz of [-.75, .75]) {
        const w = new THREE.Mesh(new THREE.CylinderGeometry(.55, .55, .28, 12), wheelMat); w.rotation.z = Math.PI / 2; w.position.set(s * 1.28, .55, zz + dz); car.add(w); wheels.push(w);
      }
    }
    car.position.z = -18 - i * 16.4; g.add(car);
  }
  g.userData.wheels = wheels;
  return g;
}

function buildTramTrain() {
  const g = new THREE.Group();
  const shell = new THREE.MeshStandardMaterial({ color: 0xe7edf0, roughness: .3, metalness: .35 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x143a4d, roughness: .07, metalness: .7 });
  const accent = new THREE.MeshStandardMaterial({ color: 0xc9973a, roughness: .4, metalness: .3 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x262f36, roughness: .7 });
  const wheels = [];
  const cars = [];
  for (let i = 0; i < 2; i++) {
    const car = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.7, 2.0, 9.4), shell); body.position.y = 1.45; car.add(body);
    const skirt = new THREE.Mesh(new THREE.BoxGeometry(2.6, .4, 9.1), dark); skirt.position.y = .55; car.add(skirt);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(2.74, .8, 8.2), glassMat); glass.position.y = 1.95; car.add(glass);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.76, .18, 9.3), accent); stripe.position.y = 1.3; car.add(stripe);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.55, .18, 9.0), shell); roof.position.y = 2.55; car.add(roof);
    for (const s of [-1, 1]) for (const zz of [-2.6, 2.6]) {
      const door = new THREE.Mesh(new THREE.BoxGeometry(.05, 1.55, 1.2), glassMat); door.position.set(s * 1.38, 1.4, zz); car.add(door);
    }
    if (i === 0) {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.3, .9, .1), glassMat); cab.position.set(0, 1.85, 4.72); car.add(cab);
      for (const s of [-1, 1]) {
        const light = new THREE.Mesh(new THREE.BoxGeometry(.3, .18, .1), new THREE.MeshBasicMaterial({ color: 0xfff4d0, toneMapped: false })); light.position.set(s * .95, 1.0, 4.75); car.add(light);
      }
    }
    for (const zz of [-3, 3]) {
      const truck = new THREE.Mesh(new THREE.BoxGeometry(1.8, .35, 2.1), dark); truck.position.y = .45; truck.position.z = zz; car.add(truck);
      for (const s of [-1, 1]) {
        const w = new THREE.Mesh(new THREE.CylinderGeometry(.4, .4, .24, 10), new THREE.MeshStandardMaterial({ color: 0x1f2327, roughness: .9 }));
        w.rotation.z = Math.PI / 2; w.position.set(s * 1.1, .42, zz); car.add(w); wheels.push(w);
      }
    }
    car.position.z = -i * 10.2;
    g.add(car); cars.push(car);
  }
  g.userData.wheels = wheels;
  g.userData.cars = cars;
  g.userData.trainLength = 21;
  return g;
}

export function buildAirport(city, rng) {
  const root = city.root;
  const cx = 610, cz = -60;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(420, 500), new THREE.MeshStandardMaterial({ color: 0x4a563e, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.position.set(cx, .03, cz); root.add(ground);
  const runway = new THREE.Mesh(new THREE.PlaneGeometry(42, 360), new THREE.MeshStandardMaterial({ color: 0x25282c, roughness: .95 }));
  runway.rotation.x = -Math.PI / 2; runway.position.set(cx + 60, .08, cz); root.add(runway);
  const lineMat = new THREE.MeshBasicMaterial({ color: 0xe8e6d9 });
  for (let i = -160; i < 160; i += 20) {
    const dash = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 10), lineMat);
    dash.rotation.x = -Math.PI / 2; dash.position.set(cx + 60, .1, cz + i); root.add(dash);
  }
  const taxi = new THREE.Mesh(new THREE.PlaneGeometry(18, 220), new THREE.MeshStandardMaterial({ color: 0x34383c, roughness: .95 }));
  taxi.rotation.x = -Math.PI / 2; taxi.position.set(cx + 28, .07, cz); root.add(taxi);
  // terminal
  const term = new THREE.Mesh(new THREE.BoxGeometry(50, 12, 26), new THREE.MeshStandardMaterial({ color: 0x8c969c, roughness: .4, metalness: .3 }));
  term.position.set(cx - 40, 6, cz + 80); root.add(term);
  const termGlass = new THREE.Mesh(new THREE.BoxGeometry(46, 7, 26.4), new THREE.MeshStandardMaterial({ color: 0x3d6f8a, roughness: .1, metalness: .7, transparent: true, opacity: .8 }));
  termGlass.position.set(cx - 40, 6, cz + 80); root.add(termGlass);
  const termSign = new THREE.Mesh(new THREE.PlaneGeometry(18, 4), new THREE.MeshBasicMaterial({ map: signTexture('NOVA AIR', '#082b3a', '#d8f5ff', 'INTERNATIONAL'), transparent: true }));
  termSign.position.set(cx - 40, 11, cz + 93.4); root.add(termSign);
  // control tower
  const towerBase = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 22, 10), new THREE.MeshStandardMaterial({ color: 0xb8bfc2, roughness: .7 }));
  towerBase.position.set(cx - 10, 11, cz + 130); root.add(towerBase);
  const cab = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 3.5, 4, 12), new THREE.MeshStandardMaterial({ color: 0x2c4f63, roughness: .1, metalness: .6 }));
  cab.position.set(cx - 10, 24, cz + 130); root.add(cab);
  // hangar
  const hangar = new THREE.Mesh(new THREE.CylinderGeometry(18, 18, 40, 12, 1, false, 0, Math.PI), new THREE.MeshStandardMaterial({ color: 0x6f787d, roughness: .7, metalness: .3 }));
  hangar.rotation.z = Math.PI / 2; hangar.rotation.y = Math.PI / 2; hangar.position.set(cx - 55, .2, cz - 120); root.add(hangar);

  // parked airliner
  const airliner = buildAirliner();
  airliner.position.set(cx + 60, .7, cz - 80); airliner.rotation.y = Math.PI;
  root.add(airliner);
  city.airportAirliner = airliner;

  // runway edge and approach lighting
  const edgeMat = new THREE.MeshBasicMaterial({ color: 0xfff0b0, toneMapped: false });
  for (const side of [-1, 1]) {
    for (let z = cz - 175; z <= cz + 175; z += 18) {
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(.4, .18, .4), edgeMat);
      lamp.position.set(cx + 60 + side * 22, .16, z); root.add(lamp);
    }
  }
  for (let i = 0; i < 8; i++) {
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(.7, .2, .7), new THREE.MeshBasicMaterial({ color: 0xff9d3a, toneMapped: false }));
    lamp.position.set(cx + 60 + (i % 2 ? 8 : -8) * .7, .18, cz + 210 + i * 16); root.add(lamp);
  }

  city.airTraffic = [];
  // A working airliner: approach, touchdown, roll-out, climb-out and circuit.
  const landing = buildAirliner();
  landing.scale.setScalar(1.15);
  root.add(landing);
  const landingPath = [
    { x: cx + 60, z: cz + 980, y: 150 },
    { x: cx + 60, z: cz + 540, y: 112 },
    { x: cx + 60, z: cz + 300, y: 66 },
    { x: cx + 60, z: cz + 190, y: 20 },
    { x: cx + 60, z: cz + 150, y: 1.0 },
    { x: cx + 60, z: cz - 150, y: 1.0 },
    { x: cx + 60, z: cz - 230, y: 14 },
    { x: cx + 60, z: cz - 440, y: 74 },
    { x: cx + 230, z: cz - 610, y: 128 },
    { x: cx + 580, z: cz - 500, y: 155 },
    { x: cx + 790, z: cz + 60, y: 165 },
    { x: cx + 600, z: cz + 700, y: 160 },
    { x: cx + 210, z: cz + 960, y: 152 },
  ];
  city.airTraffic.push(makePathAircraft(landing, landingPath, 66, { bank: .5, pitchScale: .65 }));

  // A second airliner on a high holding circuit over the bay.
  const cruiser = buildAirliner();
  cruiser.scale.setScalar(1.35);
  root.add(cruiser);
  const cruisePath = [];
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * TAU;
    cruisePath.push({ x: Math.cos(a) * 720 + 120, z: Math.sin(a) * 620 + 60, y: 235 + Math.sin(a * 2) * 12 });
  }
  city.airTraffic.push(makePathAircraft(cruiser, cruisePath, 54, { bank: .28, pitchScale: .35 }));

  // Police helicopter over downtown and an air-taxi shuttling to the hospital.
  const cityHeli = buildVehicleModel('helicopter', 0x30465c, {});
  cityHeli.group.scale.setScalar(.92);
  root.add(cityHeli.group);
  city.airTraffic.push(makeCirclingHelicopter(cityHeli, 0, 0, 205, 62, .13, 0xffe8b8));

  const taxiHeli = buildVehicleModel('helicopter', 0xd9dde0, {});
  taxiHeli.group.scale.setScalar(.8);
  root.add(taxiHeli.group);
  const hx = city.helipad?.x ?? 150, hz = city.helipad?.z ?? 140;
  const heliPath = [
    { x: hx, z: hz, y: 1.2 },
    { x: hx, z: hz, y: 34 },
    { x: hx + 55, z: hz + 45, y: 52 },
    { x: hx + 125, z: hz, y: 58 },
    { x: hx + 70, z: hz - 70, y: 54 },
    { x: hx - 40, z: hz - 45, y: 44 },
    { x: hx - 35, z: hz + 30, y: 34 },
    { x: hx, z: hz, y: 1.2 },
  ];
  const heliFlyer = makePathAircraft(taxiHeli.group, heliPath, 16, { bank: .2, pitchScale: .12, smooth: false });
  heliFlyer.rotor = taxiHeli.rotor; heliFlyer.tailRotor = taxiHeli.tailRotor;
  city.airTraffic.push(heliFlyer);
  city.flyingPlane = city.airTraffic[1];

  city.addPOI('airport', 'Nova International Airport', cx - 40, cz + 80, 40, { icon: 'airport' });
  city.addPOI('airport', 'Runway 09', cx + 60, cz, 50, { icon: 'airport' });
}

function makePathAircraft(group, path, speed, opts = {}) {
  const segments = [];
  let total = 0;
  for (let i = 0; i < path.length; i++) {
    const a = path[i], b = path[(i + 1) % path.length];
    const dx = b.x - a.x, dz = b.z - a.z, dy = b.y - a.y;
    const len = Math.hypot(dx, dy, dz);
    segments.push({ a, b, dx, dz, dy, len, heading: Math.atan2(dx, dz) });
    total += len;
  }
  const air = {
    group, path, segments, speed, total, distance: Math.random() * total,
    heading: 0, bank: 0,
    update(dt) {
      this.distance = (this.distance + this.speed * dt) % this.total;
      let d = this.distance, seg = this.segments[0];
      for (const s of this.segments) {
        if (d <= s.len) { seg = s; break; }
        d -= s.len;
      }
      const t = seg.len > 0 ? d / seg.len : 0;
      group.position.set(
        seg.a.x + seg.dx * t,
        seg.a.y + seg.dy * t,
        seg.a.z + seg.dz * t
      );
      const horiz = Math.hypot(seg.dx, seg.dz);
      if (horiz > .01) this.heading = Math.atan2(seg.dx, seg.dz);
      const pitch = horiz > .01 ? -Math.atan2(seg.dy, horiz) * (opts.pitchScale ?? .5) : 0;
      const turn = THREE.MathUtils.clamp(THREE.MathUtils.euclideanModulo(this.heading - group.rotation.y + Math.PI, TAU) - Math.PI, -.5, .5);
      this.bank = THREE.MathUtils.damp(this.bank, -turn * (opts.bank ?? .4) * 6, 2.5, dt);
      group.rotation.y = this.heading;
      group.rotation.x = THREE.MathUtils.damp(group.rotation.x, THREE.MathUtils.clamp(pitch, -.22, .22), 2.5, dt);
      group.rotation.z = this.bank;
      if (this.rotor) { this.rotor.rotation.y += dt * 38; this.tailRotor.rotation.x += dt * 54; }
    },
  };
  return air;
}

function makeCirclingHelicopter(model, cx, cz, radius, height, speed, lightColor) {
  const group = model.group;
  const spot = new THREE.PointLight(lightColor, 1.4, 75, 2);
  spot.position.set(0, -1.5, 2); group.add(spot);
  return {
    group,
    angle: Math.random() * TAU,
    update(dt, elapsed) {
      this.angle += speed * dt;
      const px = cx + Math.cos(this.angle) * radius;
      const pz = cz + Math.sin(this.angle) * radius;
      group.position.set(px, height + Math.sin(elapsed * .55 + this.angle) * 2.4, pz);
      group.rotation.y = Math.atan2(-Math.sin(this.angle), Math.cos(this.angle));
      group.rotation.z = -.1;
      group.rotation.x = .04;
      model.rotor.rotation.y += dt * 42;
      if (model.tailRotor) model.tailRotor.rotation.x += dt * 58;
      spot.intensity = 1.0 + Math.sin(elapsed * 2.2) * .5;
    },
  };
}

function buildAirliner() {
  const g = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({ color: 0xe9edf0, roughness: .35, metalness: .25 });
  const blue = new THREE.MeshStandardMaterial({ color: 0x1b5d8a, roughness: .4 });
  const fus = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 30, 14), white);
  fus.rotation.x = Math.PI / 2; fus.position.y = 2.8; g.add(fus);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(2.2, 12, 10), white); nose.position.set(0, 2.8, 15); g.add(nose);
  const tail = new THREE.Mesh(new THREE.ConeGeometry(2.1, 5, 12), white); tail.rotation.x = Math.PI / 2; tail.position.set(0, 2.8, -17); g.add(tail);
  const stripe = new THREE.Mesh(new THREE.CylinderGeometry(2.23, 2.23, 22, 14), blue); stripe.rotation.x = Math.PI / 2; stripe.position.y = 2.6; g.add(stripe);
  const wing = new THREE.Mesh(new THREE.BoxGeometry(38, .4, 6), white); wing.position.set(0, 2.7, 1); g.add(wing);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(.4, 6, 5), white); fin.position.set(0, 6, -15); g.add(fin);
  const eng = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 4, 10), blue); eng.rotation.x = Math.PI / 2; eng.position.set(-9, 2.1, 1); g.add(eng);
  const eng2 = eng.clone(); eng2.position.x = 9; g.add(eng2);
  for (let i = 0; i < 14; i++) {
    const w = new THREE.Mesh(new THREE.BoxGeometry(.35, .45, .35), new THREE.MeshBasicMaterial({ color: 0x9fd6e8 }));
    w.position.set(1, 3.1, 12 - i * 1.7); g.add(w);
  }
  return g;
}

export function buildOutskirts(city, rng) {
  const root = city.root;
  // edge forest
  for (let i = 0; i < 260; i++) {
    const a = rng() * TAU;
    const r = 470 + rng() * 220;
    let x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (z > 400 || (x > 430 && z > -300 && z < 200)) continue;
    city.tree(x, z, 1.2 + rng() * 1.4);
  }
  // low hills — keep them off the bay and the island chain
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x3f5236, roughness: 1, flatShading: true });
  for (let i = 0; i < 18; i++) {
    const a = rng() * TAU, r = 700 + rng() * 200;
    const hx = Math.cos(a) * r, hz = Math.sin(a) * r;
    if (hz > 420) continue;
    if (city.isWater?.(hx, hz)) continue;
    const h = new THREE.Mesh(new THREE.ConeGeometry(70 + rng() * 90, 40 + rng() * 70, 7), hillMat);
    h.position.set(hx, 10, hz); root.add(h);
  }
  // forest cleanup uses trees built earlier finalize? We already finalized props, so add direct instanced forest here
  const n = 220;
  const trunkGeo = new THREE.CylinderGeometry(.4, .6, 6, 5);
  const leavesGeo = new THREE.IcosahedronGeometry(4, 0);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3725, roughness: 1 });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x2f4a26, roughness: 1, flatShading: true });
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, n);
  const leaves = new THREE.InstancedMesh(leavesGeo, leafMat, n);
  const tmp = new THREE.Object3D();
  let idx = 0;
  for (let i = 0; i < 900 && idx < n; i++) {
    const a = rng() * TAU, r = 480 + rng() * 240;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (z > 400) continue;
    if (x > 440 && x < 800 && z > -250 && z < 200) continue;
    const s = .8 + rng() * 1.2;
    tmp.position.set(x, 3 * s, z); tmp.scale.setScalar(s); tmp.rotation.set(0, rng() * TAU, 0); tmp.updateMatrix(); trunks.setMatrixAt(idx, tmp.matrix);
    tmp.position.set(x, 7 * s, z); tmp.scale.set(s, s * (1 + rng() * .5), s); tmp.updateMatrix(); leaves.setMatrixAt(idx, tmp.matrix);
    idx++;
  }
  root.add(trunks, leaves);

  // water towers / silos outside
  for (let i = 0; i < 6; i++) {
    const x = -520 + i * 40, z = -480;
    const silo = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 16, 12), new THREE.MeshStandardMaterial({ color: 0x8b8f90, roughness: .6, metalness: .4 }));
    silo.position.set(x, 8, z); root.add(silo);
  }
}
