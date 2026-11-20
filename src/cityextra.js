import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { clamp, rand, pick, chance, TAU, makeRng } from './utils.js';
import { glowTexture as glowTex, smokeTexture as smokeTex, starTexture as starTex, billboardTexture, signTexture } from './textures.js';
import { NODE_POS, SPACING, HALF_ROAD, CITY_EXTENT, GRID } from './city.js';

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

  // --- ground railway (freight/commuter) ---
  const railY = .1, railZ = -446;
  const railGroup = new THREE.Group();
  const ballast = new THREE.Mesh(new THREE.BoxGeometry(1200, .25, 8), new THREE.MeshStandardMaterial({ color: 0x3d3a34, roughness: 1 }));
  ballast.position.set(0, .06, railZ); root.add(ballast);
  const sleeperGeo = new THREE.BoxGeometry(.3, .12, 3.4);
  const sleepers = new THREE.InstancedMesh(sleeperGeo, city.woodMat, 300);
  const tmp = new THREE.Object3D();
  for (let i = 0; i < 300; i++) {
    tmp.position.set(-600 + i * 4, railY + .1, railZ); tmp.rotation.set(0, Math.PI / 2, 0); tmp.updateMatrix(); sleepers.setMatrixAt(i, tmp.matrix);
  }
  root.add(sleepers);
  for (const side of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(1200, .12, .16), new THREE.MeshStandardMaterial({ color: 0x9aa0a4, roughness: .3, metalness: .8 }));
    rail.position.set(0, railY + .2, railZ + side * .75); root.add(rail);
  }
  // station
  const st = new THREE.Group();
  const platform = new THREE.Mesh(new THREE.BoxGeometry(90, 1.1, 8), city.concreteMat);
  platform.position.set(170, .55, -438); st.add(platform);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(80, .3, 9), new THREE.MeshStandardMaterial({ color: 0x39424a, roughness: .6, metalness: .3 }));
  roof.position.set(170, 5.3, -438); st.add(roof);
  for (let x = -38; x <= 38; x += 12) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(.2, 4.8, .2), city.metalMat);
    post.position.set(170 + x, 2.7, -438); st.add(post);
  }
  const stationSign = new THREE.Mesh(new THREE.PlaneGeometry(12, 3), new THREE.MeshBasicMaterial({ map: signTexture('NOVA CENTRAL', '#0b1b2b', '#cfefff', 'RAIL TERMINAL'), transparent: true }));
  stationSign.position.set(170, 3.7, -434); st.add(stationSign);
  const stairs = new THREE.Mesh(new THREE.BoxGeometry(9, 1.2, 6), city.concreteMat);
  stairs.position.set(170, .45, -430); st.add(stairs);
  root.add(st);
  city.addPOI('train', 'Nova Central Rail', 170, -430, 16, { icon: 'transit' });

  // commuter train
  const commuter = buildCommuterTrain();
  commuter.position.set(-420, railY + .3, railZ);
  root.add(commuter);
  city.rail = {
    group: commuter, speed: 16, progress: 0, length: 1200, dwell: 0,
    update(dt) {
      this.progress = (this.progress + this.speed * dt) % 1200;
      this.group.position.x = -600 + this.progress;
      if (this.speed > 0) this.group.userData.wheels?.forEach(w => w.rotation.x += dt * 8);
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
  const carMat = new THREE.MeshStandardMaterial({ color: 0xe8eef2, roughness: .3, metalness: .25 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x1d3f57, roughness: .1, metalness: .55 });
  const accent = new THREE.MeshStandardMaterial({ color: 0x35b8d8, emissive: 0x1d7080, emissiveIntensity: .9, roughness: .4 });
  const cars = [], doors = [];
  for (let i = 0; i < 3; i++) {
    const car = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.3, 9.6), carMat); body.position.y = 1.35; car.add(body);
    const nose = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.4, 1.4), carMat); nose.position.set(0, 1.05, 5.2); car.add(nose);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.86, .3, 8.5), accent); stripe.position.y = 1.1; car.add(stripe);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(2.9, .8, 7.4), glassMat); glass.position.y = 2.0; car.add(glass);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.6, .25, 8.8), accent); roof.position.y = 2.65; car.add(roof);
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.6, .1), glassMat); door.position.set(1.45, 1.55, 0); car.add(door); doors.push(door);
    const door2 = door.clone(); door2.position.x = -1.45; car.add(door2); doors.push(door2);
    car.position.z = -i * 10.5;
    g.add(car); cars.push(car);
  }
  g.userData.cars = cars; g.userData.doors = doors;
  return g;
}

function buildCommuterTrain() {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x9aa3a8, roughness: .55, metalness: .35 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x27333d, roughness: .35, metalness: .4 });
  const stripe = new THREE.MeshStandardMaterial({ color: 0xd7b23f, roughness: .5 });
  const wheels = [];
  const addCar = (z, len, loco) => {
    const car = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.1, 3.2, len), bodyMat); body.position.y = 2.2; car.add(body);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(3.12, .9, len - 1.2), darkMat); glass.position.y = 2.8; car.add(glass);
    const st = new THREE.Mesh(new THREE.BoxGeometry(3.13, .3, len), stripe); st.position.y = 1.3; car.add(st);
    if (loco) {
      const nose = new THREE.Mesh(new THREE.BoxGeometry(3, 2.4, 2), bodyMat); nose.position.set(0, 1.9, len / 2 + .9); car.add(nose);
      const light = new THREE.Mesh(new THREE.SphereGeometry(.25, 8, 6), new THREE.MeshBasicMaterial({ color: 0xfff2c0 })); light.position.set(0, 2.1, len / 2 + 1.9); car.add(light);
    }
    for (const side of [-1, 1]) for (const zz of [-len / 2 + 2, len / 2 - 2]) {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(.55, .55, .3, 10), new THREE.MeshStandardMaterial({ color: 0x22262a, roughness: .9 }));
      w.rotation.z = Math.PI / 2; w.position.set(side * 1.55, .65, zz); car.add(w); wheels.push(w);
      const w2 = w.clone(); w2.position.x = side * 1.2; car.add(w2);
    }
    car.position.z = z; g.add(car);
  };
  addCar(0, 14, true);
  addCar(-17, 15, false); addCar(-34, 15, false); addCar(-51, 15, false);
  g.userData.wheels = wheels;
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

  // flying airliner
  const flyer = buildAirliner();
  flyer.scale.setScalar(1.5);
  flyer.position.set(-300, 190, -200);
  root.add(flyer);
  city.flyingPlane = { group: flyer, t: 0 };

  city.addPOI('airport', 'Nova International Airport', cx - 40, cz + 80, 40, { icon: 'airport' });
  city.addPOI('airport', 'Runway 09', cx + 60, cz, 50, { icon: 'airport' });
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
  // low hills
  const hillMat = new THREE.MeshStandardMaterial({ color: 0x3f5236, roughness: 1, flatShading: true });
  for (let i = 0; i < 18; i++) {
    const a = rng() * TAU, r = 700 + rng() * 200;
    const h = new THREE.Mesh(new THREE.ConeGeometry(70 + rng() * 90, 40 + rng() * 70, 7), hillMat);
    h.position.set(Math.cos(a) * r, 10, Math.sin(a) * r); root.add(h);
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
