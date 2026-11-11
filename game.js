import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

// Северный край — небольшой процедурный мир для прогулок и строительства.
const mount = document.querySelector('#game');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#a9c7c3');
scene.fog = new THREE.Fog('#a9c7c3', 85, 205);
const camera = new THREE.PerspectiveCamera(48, innerWidth / innerHeight, .1, 320);
camera.position.set(33, 32, 42);
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
mount.appendChild(renderer.domElement);

const hemi = new THREE.HemisphereLight('#e5f4ed', '#65765c', 2.0); scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff0ce', 3.2); sun.position.set(-35, 55, 24); sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -80; sun.shadow.camera.right = 80; sun.shadow.camera.top = 80; sun.shadow.camera.bottom = -80; scene.add(sun);
const mats = {};
function mat(color, roughness=.9, opts={}) { const key = color + roughness + JSON.stringify(opts); return mats[key] ||= new THREE.MeshStandardMaterial({ color, roughness, ...opts }); }
function box(parent, x,y,z, sx,sy,sz, material, cast=true) { const o = new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz), material); o.position.set(x,y,z); o.castShadow=cast; o.receiveShadow=true; parent.add(o); return o; }
function cylinder(parent, x,y,z, rt,rb,h, material, sides=8) { const o=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,sides),material); o.position.set(x,y,z); o.castShadow=true; o.receiveShadow=true; parent.add(o); return o; }
function groundY(x,z) { const center=Math.max(0,1-Math.hypot(x,z)/23); return .3 + Math.sin(x*.075)*.72 + Math.cos(z*.085)*.55 + Math.sin((x+z)*.045)*.55 - center*.75; }

// Sculpted meadow with a shallow, level village clearing.
const terrainGeo=new THREE.PlaneGeometry(220,190,110,96); terrainGeo.rotateX(-Math.PI/2);
const pos=terrainGeo.attributes.position;
for(let i=0;i<pos.count;i++){const x=pos.getX(i), z=pos.getZ(i); pos.setY(i,groundY(x,z));}
terrainGeo.computeVertexNormals();
const terrain=new THREE.Mesh(terrainGeo,mat('#788b5d')); terrain.receiveShadow=true; scene.add(terrain);
// distant spruce-covered ridges
for(let i=0;i<15;i++){
 const x=-92+i*13, z=-72-(i%3)*9, h=17+(i*17%19), r=15+(i*7%10);
 const hill=new THREE.Mesh(new THREE.ConeGeometry(r,h,6),mat(i%2?'#627d72':'#718b78')); hill.position.set(x, h/2-1,z); hill.rotation.y=i*.4; hill.receiveShadow=true; scene.add(hill);
 const snow=new THREE.Mesh(new THREE.ConeGeometry(r*.39,h*.42,6),mat('#d7e2d6')); snow.position.set(x,h*.79,z); scene.add(snow);
}
// river winding behind the settlement
const riverMat=mat('#7caeae',.27,{metalness:.08,transparent:true,opacity:.91});
const riverPts=[]; for(let i=0;i<=30;i++){const z=-44+i*3; riverPts.push(new THREE.Vector3(35+Math.sin(i*.35)*5,groundY(35,z)+.12,z));}
const river=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(riverPts),100,2.1,8,false),riverMat); scene.add(river);

const wood=mat('#76553b'), darkWood=mat('#4b4336'), cream=mat('#e2d4b5'), red=mat('#a85842'), roofMat=mat('#394b49'), glass=mat('#a9d1c9',.22,{emissive:'#294741',emissiveIntensity:.3}), stone=mat('#918b79');
function makeHouse(x,z,scale=1,style=0){
 const g=new THREE.Group(); g.position.set(x,groundY(x,z),z); scene.add(g);
 const w=5.1*scale,d=4.2*scale,h=3.1*scale;
 box(g,0,h/2,0,w,h,d, style===1?cream:wood);
 // steep gabled roof, two sloping planes
 const roof1=box(g,-w*.25,h+.42,0,w*.72,.22,d+1,style===2?roofMat:red); roof1.rotation.z=-.58;
 const roof2=box(g,w*.25,h+.42,0,w*.72,.22,d+1,style===2?roofMat:red); roof2.rotation.z=.58;
 box(g,.4*scale,.9*scale,d/2+.035,.95*scale,1.8*scale,.09,mat('#453e34'));
 for(const wx of [-1.5,1.5]){box(g,wx*scale,1.85*scale,d/2+.05,.68*scale,.78*scale,.1,glass);box(g,wx*scale,1.85*scale,d/2+.12,.08,.82*scale,.05,cream);}
 box(g,0,.2*scale,d/2+.18,1.25*scale,.18,.42*scale,stone);
 // chimney
 box(g,-w*.3,h+1.05*scale,-.45,.42*scale,1.4*scale,.48*scale,stone);
 return g;
}
makeHouse(-3,-8,1.13,0); makeHouse(7,-8,.9,1); makeHouse(-10,-2,.82,2); makeHouse(9,1,.95,0); makeHouse(-4,7,.82,1); makeHouse(14,-2,.76,2);
// Village lane and station forecourt
const road=mat('#9a9074');
const lane=box(scene,0,0,3,2.8,.12,27,road,false); lane.position.y=groundY(0,3)+.08;
for(let z=-10;z<15;z+=3) box(scene,0,groundY(0,z)+.17,z,.18,.13,.18,mat('#c5b994'),false);
// station platform and timber station
box(scene,-16,groundY(-16,7)+.18,7,18,.38,5.5,stone);
makeHouse(-18,4,1.13,2);
// railway ties, rails, and a siding out toward the forest
const railMat=mat('#59615c',.48,{metalness:.64}), tieMat=mat('#594a38');
function railSegment(x1,z1,x2,z2){const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz),ang=Math.atan2(dx,dz),mx=(x1+x2)/2,mz=(z1+z2)/2,y=groundY(mx,mz)+.2;
 const group=new THREE.Group();group.position.set(mx,y,mz);group.rotation.y=ang;scene.add(group);
 for(let t=-len/2;t<=len/2;t+=1.35) box(group,0,0,t,3.3,.16,.34,tieMat);
 for(const side of [-.95,.95]) box(group,side,.15,0,.14,.2,len,railMat);
}
railSegment(-59,7,45,7); railSegment(-16,7,-16,30);
// depot and platform lamps
makeHouse(-30,12,.9,2);
for(const x of [-23,-9]){cylinder(scene,x,groundY(x,7)+2.3,4,.09,.11,4.5,mat('#33413b')); const lamp=new THREE.Mesh(new THREE.SphereGeometry(.28,8,6),mat('#ffe8a5',.25,{emissive:'#ffbc55',emissiveIntensity:1.6}));lamp.position.set(x,groundY(x,7)+4.5,4);scene.add(lamp);}

// Shared, low-poly woodland: trunks and layered fir crowns.
const trunkGeo=new THREE.CylinderGeometry(.13,.21,1,6), crownGeo1=new THREE.ConeGeometry(1,2.3,7), crownGeo2=new THREE.ConeGeometry(.75,1.9,7);
const firMats=['#345a49','#42694e','#4e7052','#536d58'].map(c=>mat(c));
function tree(x,z,s=1,autumn=false){
 const y=groundY(x,z), group=new THREE.Group();group.position.set(x,y,z);group.scale.setScalar(s);scene.add(group);
 const trunk=new THREE.Mesh(trunkGeo,wood);trunk.position.y=.65;trunk.castShadow=true;group.add(trunk);
 const col=autumn?mat('#a87946'):firMats[(Math.abs(Math.floor(x*7+z*13)))%firMats.length];
 const a=new THREE.Mesh(crownGeo1,col);a.position.y=1.65;a.castShadow=true;group.add(a);
 const b=new THREE.Mesh(crownGeo2,col);b.position.y=2.65;b.castShadow=true;group.add(b);
}
let seed=8254; function rand(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
for(let i=0;i<155;i++){
 let x=(rand()-.5)*150,z=(rand()-.5)*135;
 if(Math.hypot(x,z)<23 || (x>27&&x<43&&z>-48&&z<48)) continue;
 tree(x,z,.72+rand()*.78);
}
// a few birches with pale trunks and airy foliage
for(const [x,z] of [[-25,-17],[22,-18],[25,14],[-27,20],[31,-9]]){
 const y=groundY(x,z);cylinder(scene,x,y+2,z,.2,.3,4,mat('#ded8bd'));
 const top=new THREE.Mesh(new THREE.SphereGeometry(2.1,8,6),mat('#68845e'));top.position.set(x,y+4.3,z);top.castShadow=true;scene.add(top);
}

// Little gardens, split-rail fences, and flower patches bring scale to the clearing.
for(const [x,z] of [[-8,-10],[3,-12],[12,-5],[-11,4],[12,3]]){
 const g=new THREE.Group();g.position.set(x,groundY(x,z),z);scene.add(g);
 box(g,0,.12,0,4,.24,2.8,mat('#725d42'),false);
 for(let i=0;i<12;i++){const f=new THREE.Mesh(new THREE.SphereGeometry(.12,5,4),mat(['#e3b77b','#d58d83','#e5d7a2'][i%3]));f.position.set((rand()-.5)*3.4,.42,(rand()-.5)*2.2);g.add(f);}
 for(let n=0;n<5;n++){box(g,-2+n, .55,-1.55,.12,.9,.12,wood,false);box(g,-2+n,.55,1.55,.12,.9,.12,wood,false);}
 box(g,0,.56,-1.55,4,.12,.12,wood,false);box(g,0,.56,1.55,4,.12,.12,wood,false);
}

// Colorful local train, assembled from simple modeled cars.
const train=new THREE.Group();scene.add(train);
function makeCar(x,color,engine=false){
 const g=new THREE.Group();g.position.x=x;train.add(g);
 box(g,0,.95,0,engine?6:5,1.65,2.6,mat(color));
 box(g,0,1.89,0,engine?4.7:4.7,.24,2.35,roofMat);
 for(const wx of [-1.45,-.35,.8,1.8])box(g,wx,1.2,1.32,.62,.75,.1,glass);
 for(const wx of [-1.7,1.7]){cylinder(g,wx,.31,-.85,.42,.42,.22,railMat,12);cylinder(g,wx,.31,.85,.42,.42,.22,railMat,12);}
 if(engine){const stack=cylinder(g,-2.1,2.05,0,.22,.38,.9,darkWood,8);stack.rotation.z=.12;box(g,1.5,2.5,0,.9,.55,.9,mat('#5f6b63'));}
}
makeCar(0,'#52756b',true);makeCar(6.8,'#b77954');makeCar(12.8,'#b7a981');
const trainState={active:false,t:0,dir:1};

// Person, visible third-person avatar with a soft shadow.
const avatar=new THREE.Group();scene.add(avatar);
const body= new THREE.Mesh(new THREE.CapsuleGeometry(.43,.88,4,7),mat('#c47d50'));body.position.y=1.05;body.castShadow=true;avatar.add(body);
const head=new THREE.Mesh(new THREE.SphereGeometry(.42,10,8),mat('#e5bd91'));head.position.set(0,1.92,0);head.castShadow=true;avatar.add(head);
const coat=new THREE.Mesh(new THREE.CylinderGeometry(.48,.53,.74,8),mat('#405b53'));coat.position.y=.92;coat.castShadow=true;avatar.add(coat);
avatar.position.set(2,groundY(2,12),12);
// Friendly villagers wander along short loops.
const people=[];
for(let i=0;i<8;i++){
 const g=new THREE.Group(), hue=['#b86f54','#697a94','#d0ad68','#798c67'][i%4];
 const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.28,.62,3,6),mat(hue));torso.position.y=.8;g.add(torso);
 const h=new THREE.Mesh(new THREE.SphereGeometry(.27,8,6),mat('#dfb58e'));h.position.y=1.45;g.add(h);
 const x=-12+(i%4)*7,z=-12+Math.floor(i/4)*15;g.position.set(x,groundY(x,z),z);scene.add(g);people.push({g,x,z,phase:i*1.7});
}

const seasons=[{name:'Весна',temp:'+12°',ground:'#788b5d',fog:'#a9c7c3',leaf:false},{name:'Лето',temp:'+21°',ground:'#718858',fog:'#a8c8c0',leaf:false},{name:'Осень',temp:'+8°',ground:'#927e59',fog:'#b9b19a',leaf:true},{name:'Зима',temp:'−6°',ground:'#c2d0c8',fog:'#bdcfd0',leaf:false}];
let seasonIndex=0,mode='walk',elapsed=0,day=1,resources=74,mood=86,weather='Переменная облачность',disasterTimer=0;
const $=s=>document.querySelector(s), seasonLine=$('#seasonLine'), weatherName=$('#weatherName'), weatherIcon=$('#weatherIcon'), temperature=$('#temperature'), clock=$('#clock'), toast=$('#toast'), eventBox=$('#event'), status=$('#status'), prompt=$('#prompt');
function notify(text){toast.innerHTML=text;toast.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>toast.classList.remove('show'),2800);}
function setMode(m){mode=m;document.querySelectorAll('.action').forEach(b=>b.classList.toggle('active',b.dataset.mode===m));if(m!=='walk')notify(({rail:'Выберите место для нового участка пути',road:'Выберите место для улучшения дороги',supply:'Груз готов к отправке со станции',repair:'Найдите жителя или нажмите E'})[m]);}
function updateSeason(){const s=seasons[seasonIndex];seasonLine.textContent=`${s.name} · 12 жителей`;terrain.material.color.set(s.ground);scene.background.set(s.fog);scene.fog.color.set(s.fog);temperature.textContent=`${s.temp} · лёгкий ветер`;}
function startTrain(){if(trainState.active)return;trainState.active=true;train.position.set(-68,groundY(-60,7)+.35,7);notify('🚂 Поезд отправился со станции');resources=Math.max(10,resources-4);$('#resources').textContent=`▰ ${resources}%`;}
function act(){
 if(mode==='supply'){startTrain();return;}
 if(mode==='repair'){const p=people.reduce((a,b)=>Math.hypot(b.g.position.x-avatar.position.x,b.g.position.z-avatar.position.z)<Math.hypot(a.g.position.x-avatar.position.x,a.g.position.z-avatar.position.z)?b:a,people[0]);
 if(Math.hypot(p.g.position.x-avatar.position.x,p.g.position.z-avatar.position.z)<9){mood=Math.min(100,mood+5);resources=Math.min(100,resources+3);$('#mood').textContent=`☺ ${mood}%`;$('#resources').textContent=`▰ ${resources}%`;notify('Жители благодарны за помощь · +5 настроение');}else notify('Подойдите ближе к жителю');return;}
 if(mode==='rail'||mode==='road'){const dir=new THREE.Vector3();camera.getWorldDirection(dir);const target=groundTarget?groundTarget.clone():avatar.position.clone().add(new THREE.Vector3(dir.x,0,dir.z).normalize().multiplyScalar(8));groundTarget=null;
 const y=groundY(target.x,target.z)+.18;box(scene,target.x,y,target.z,mode==='rail'?3.3:3,.15,mode==='rail'?1.1:5,mode==='rail'?tieMat:road);if(mode==='rail'){for(const dx of [-.9,.9])box(scene,target.x+dx,y+.15,target.z,.13,.16,3.3,railMat);}
 resources=Math.max(0,resources-3);$('#resources').textContent=`▰ ${resources}%`;notify(mode==='rail'?'Уложен новый участок железной дороги':'Дорога улучшена');setMode('walk');return;}
 startTrain();
}

// Camera follows the walker; mouse drag pans the view. Keyboard and touch use the same movement vector.
let yaw=.68, cameraDistance=48, dragging=false,lastX=0,lastY=0;
const keys=new Set(), touch=new Set();
function moveAvatar(dt){let x=(keys.has('d')||keys.has('arrowright')||touch.has('right')?1:0)-(keys.has('a')||keys.has('arrowleft')||touch.has('left')?1:0);
 let z=(keys.has('s')||keys.has('arrowdown')||touch.has('down')?1:0)-(keys.has('w')||keys.has('arrowup')||touch.has('up')?1:0);
 if(x||z){const l=Math.hypot(x,z);x/=l;z/=l;const dx=x*Math.cos(yaw)-z*Math.sin(yaw), dz=x*Math.sin(yaw)+z*Math.cos(yaw);avatar.position.x+=dx*dt*7;avatar.position.z+=dz*dt*7;avatar.rotation.y=Math.atan2(dx,dz);avatar.position.x=THREE.MathUtils.clamp(avatar.position.x,-85,85);avatar.position.z=THREE.MathUtils.clamp(avatar.position.z,-68,68);avatar.position.y=groundY(avatar.position.x,avatar.position.z);}
}
function onKey(e){const k=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' '].includes(k))e.preventDefault();keys.add(k);if(k==='e')act();if(k==='1')setMode('walk');if(k==='2')setMode('rail');if(k==='3')setMode('road');if(k==='4')setMode('supply');if(k==='escape')setMode('walk');}
addEventListener('keydown',onKey);addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));
renderer.domElement.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId);});
renderer.domElement.addEventListener('pointermove',e=>{if(!dragging)return;yaw-=(e.clientX-lastX)*.004;cameraDistance=THREE.MathUtils.clamp(cameraDistance+(e.clientY-lastY)*.08,30,67);lastX=e.clientX;lastY=e.clientY;});
renderer.domElement.addEventListener('pointerup',()=>dragging=false);
addEventListener('wheel',e=>cameraDistance=THREE.MathUtils.clamp(cameraDistance+e.deltaY*.025,30,67),{passive:true});
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
document.querySelectorAll('[data-dir]').forEach(b=>{const d=b.dataset.dir;b.addEventListener('pointerdown',e=>{e.preventDefault();touch.add(d);});for(const ev of ['pointerup','pointerleave','pointercancel'])b.addEventListener(ev,()=>touch.delete(d));});
$('#mobileAct').addEventListener('click',act);$('#sound').addEventListener('click',()=>notify('Звуковое сопровождение скоро появится'));

// weather particles, tiny snowflakes or raindrops
const particleCount=280, particlePositions=new Float32Array(particleCount*3);for(let i=0;i<particleCount;i++){particlePositions[i*3]=(rand()-.5)*100;particlePositions[i*3+1]=rand()*35;particlePositions[i*3+2]=(rand()-.5)*100;}
const particleGeo=new THREE.BufferGeometry();particleGeo.setAttribute('position',new THREE.BufferAttribute(particlePositions,3));
const particles=new THREE.Points(particleGeo,new THREE.PointsMaterial({color:'#e4eee6',size:.12,transparent:true,opacity:.0}));scene.add(particles);
const raycaster=new THREE.Raycaster(), mouse=new THREE.Vector2();let groundTarget=null;
renderer.domElement.addEventListener('click',e=>{if(mode==='walk'||mode==='supply'||mode==='repair')return;mouse.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);raycaster.setFromCamera(mouse,camera);const hit=raycaster.intersectObject(terrain)[0];if(hit){groundTarget=hit.point;notify('Участок выбран · нажмите E для строительства');}});

function loop(now){requestAnimationFrame(loop);const dt=Math.min(.045,(now-(loop.last||now))/1000);loop.last=now;elapsed+=dt;disasterTimer+=dt;
 moveAvatar(dt);
 for(const p of people){p.phase+=dt*.42;p.g.position.x=p.x+Math.sin(p.phase)*1.5;p.g.position.z=p.z+Math.cos(p.phase)*1.2;p.g.position.y=groundY(p.g.position.x,p.g.position.z);p.g.rotation.y=p.phase;}
 if(trainState.active){train.position.x+=dt*13;if(train.position.x>60){trainState.active=false;notify('📦 Груз доставлен · запасы деревни растут');resources=Math.min(100,resources+12);$('#resources').textContent=`▰ ${resources}%`;}}
 if(elapsed>34){elapsed=0;day++;seasonIndex=(seasonIndex+1)%4;updateSeason();clock.textContent=`☀️ День ${String(day).padStart(2,'0')} · 08:40`;if(day%4===0){weather=['Лёгкий дождь','Ясно','Утренний туман','Ветер с севера'][Math.floor(rand()*4)];weatherName.textContent=weather;weatherIcon.textContent=weather.includes('дождь')?'🌧️':weather.includes('туман')?'🌫️':'🌤️';particles.material.opacity=weather.includes('дождь')?.56:weather.includes('туман')?.18:0;}}
 if(disasterTimer>105){disasterTimer=0;if(rand()<.18){eventBox.textContent='⚠️ Порывистый ветер повалил дерево у дороги. Жителям нужна помощь!';eventBox.classList.add('show');mood=Math.max(40,mood-4);$('#mood').textContent=`☺ ${mood}%`;setTimeout(()=>eventBox.classList.remove('show'),6000);}}
 const pp=particleGeo.attributes.position;for(let i=0;i<particleCount;i++){let y=pp.getY(i);if(particles.material.opacity>.2){y-=dt*(weather.includes('дождь')?13:2);if(y<0)y=35;pp.setY(i,y);}}pp.needsUpdate=true;
 const target=new THREE.Vector3(avatar.position.x,avatar.position.y+1,avatar.position.z);const cx=target.x+Math.sin(yaw)*cameraDistance*.72,cz=target.z+Math.cos(yaw)*cameraDistance*.72;
 camera.position.lerp(new THREE.Vector3(cx,target.y+cameraDistance*.57,cz),.08);camera.lookAt(target.x-.5,target.y+1,target.z-2);
 prompt.innerHTML=Math.hypot(avatar.position.x+16,avatar.position.z-7)<8?'Нажмите <b>E</b>, чтобы отправить поезд':'Нажмите <b>E</b>, чтобы взаимодействовать';
 renderer.render(scene,camera);
}
updateSeason();requestAnimationFrame(loop);
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));});
status.innerHTML='Пассажирская станция · малое депо<br>Соединено с: <b>1 деревней</b>';
