import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js';

(() => {
  const $ = id => document.getElementById(id);
  const canvas = $('game');
  const mini = $('minimap');
  const mapCtx = mini.getContext('2d');
  const ui = {district:$('districtName'),clock:$('clock'),wanted:$('wanted'),vehicle:$('vehicleName'),speed:$('speed'),fill:$('speedFill'),speedCard:$('speedCard'),vehicleTag:$('vehicleTag'),interaction:$('interaction'),toast:$('toast'),missionTitle:$('missionTitle'),missionText:$('missionText'),phone:$('phone'),overlay:$('startOverlay')};
  const renderer = new THREE.WebGLRenderer({canvas,antialias:!matchMedia('(max-width: 700px)').matches,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.6));
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#d28c69');
  scene.fog = new THREE.Fog('#d28c69', 850, 3300);
  const camera = new THREE.PerspectiveCamera(58, innerWidth/innerHeight, .1, 4200);
  const hemi = new THREE.HemisphereLight('#dcebe1','#46564b',2.05); scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffe0b0',3.1); sun.position.set(-500,850,420); scene.add(sun);
  const fillLight = new THREE.DirectionalLight('#9ac4b2',.7); fillLight.position.set(500,260,-650); scene.add(fillLight);
  const world = new THREE.Group(); scene.add(world);
  const mat = (color, roughness=.86, metalness=0) => new THREE.MeshStandardMaterial({color,roughness,metalness});
  const materials = {
    grass:mat('#71876d'), asphalt:mat('#343e3b'), sidewalk:mat('#a49f89'), line:mat('#c5b88d'),
    building:[mat('#c0ad91'),mat('#a8907c'),mat('#91a297'),mat('#c4b99e'),mat('#ad9b84'),mat('#82938c')],
    glass:mat('#45645f',.38,.22), roof:mat('#6a756a'), tree:mat('#45644d'), trunk:mat('#655544'),
    carBody:[mat('#d36d59',.48),mat('#d8c9a7',.5),mat('#668c85',.46),mat('#d3a05f',.48),mat('#7886a0',.46),mat('#b9c9bd',.46),mat('#9e6d5e',.5)],
    tire:mat('#202725'), rail:mat('#737b70',.5,.4), train:mat('#d7e3da',.43,.22), trainGreen:mat('#a8dfc1',.4,.15)
  };
  const boxGeo = new THREE.BoxGeometry(1,1,1);
  const sphereGeo = new THREE.SphereGeometry(1,8,6);
  const cylinderGeo = new THREE.CylinderGeometry(.5,.5,1,8);
  const planeGeo = new THREE.PlaneGeometry(1,1);
  const makeBox = (parent, x,y,z, sx,sy,sz, material, cast=false) => {
    const mesh = new THREE.Mesh(boxGeo,material); mesh.position.set(x,y,z); mesh.scale.set(sx,sy,sz); mesh.castShadow=cast; mesh.receiveShadow=true; parent.add(mesh); return mesh;
  };
  const makePlane = (parent,x,y,z,sx,sz,material) => {
    const mesh = new THREE.Mesh(planeGeo,material); mesh.rotation.x=-Math.PI/2; mesh.position.set(x,y,z); mesh.scale.set(sx,sz,1); parent.add(mesh); return mesh;
  };
  let playing=false, phoneOpen=false, worldClock=19.7, wanted=0, toastTimer=0, last=0;
  const keys=new Set(), touch={x:0,y:0,throttle:0,brake:false};
  const player={x:0,z:0,heading:Math.PI*.15,vehicle:null};
  const spacing=240, roadWidth=76, cars=[], trains=[], peds=[], aircraft=[];
  let seed=3418; const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
  function addTree(x,z,scale=1){
    const group=new THREE.Group(); group.position.set(x,0,z); world.add(group);
    const trunk=new THREE.Mesh(cylinderGeo,materials.trunk); trunk.position.y=2*scale; trunk.scale.set(.55*scale,4*scale,.55*scale); group.add(trunk);
    const crown=new THREE.Mesh(sphereGeo,materials.tree); crown.position.y=5.1*scale; crown.scale.set(2.6*scale,3.2*scale,2.6*scale); group.add(crown);
  }
  function buildCity(){
    makePlane(world,0,-.8,0,5200,5200,materials.grass);
    const roadMat=materials.asphalt, sidewalkMat=materials.sidewalk;
    for(let n=-10;n<=10;n++){
      const p=n*spacing;
      makePlane(world,p,.02,0,roadWidth,5200,roadMat); makePlane(world,0,.025,p,5200,roadWidth,roadMat);
      for(const side of [-1,1]){
        makePlane(world,p+side*(roadWidth*.5+5),.05,0,9,5200,sidewalkMat);
        makePlane(world,0,.05,p+side*(roadWidth*.5+5),5200,9,sidewalkMat);
      }
      makePlane(world,p,.035,0,1.1,5000,materials.line);
      makePlane(world,0,.035,p,5000,1.1,materials.line);
    }
    for(let gx=-7;gx<=7;gx++)for(let gz=-7;gz<=7;gz++){
      const bx=gx*spacing,bz=gz*spacing;
      const selector=(Math.abs(gx*29+gz*47)%19)/19;
      if(selector<.12){
        makePlane(world,bx,.04,bz,115,112,mat('#58775c'));
        for(let i=0;i<5;i++)addTree(bx-44+i*22,bz+(i%2?25:-24),.72+rand()*.22);
        continue;
      }
      const count=selector>.82?1:2;
      for(let i=0;i<count;i++){
        const x=bx+(count===1?0:(i===0?-37:39))+(rand()-.5)*12;
        const z=bz+(count===1?0:(i===0?-28:31))+(rand()-.5)*12;
        const sx=count===1?116:65+rand()*12, sz=count===1?116:72+rand()*8;
        const floors=2+Math.floor(rand()*7)+(Math.abs(gx)+Math.abs(gz)<3?2:0), h=floors*10+8;
        const bmat=materials.building[Math.floor(rand()*materials.building.length)];
        makeBox(world,x,h/2,z,sx,h,sz,bmat);
        makeBox(world,x,h+.55,z,sx*.93,1.1,sz*.93,materials.roof);
        // A pair of continuous facade glass strips keeps the skyline legible on phones.
        makeBox(world,x,h*.53,z-sz/2-.025,sx*.76,h*.72,.07,materials.glass);
        makeBox(world,x-sx/2-.025,h*.53,z,.07,h*.72,sz*.72,materials.glass);
        if(h>75)makeBox(world,x+sx*.2,h+3,z-sz*.12,sx*.23,4,sz*.22,materials.building[2]);
      }
      if(selector>.62){addTree(bx-75,bz-77,.75);addTree(bx+76,bz+77,.8)}
    }
    // Airport apron and runway on the edge of the playable city.
    makePlane(world,1530,.035,-1080,760,530,mat('#58615d'));
    makePlane(world,1530,.06,-1080,560,92,mat('#303a38'));
    makePlane(world,1530,.09,-1080,500,2,materials.line);
    for(let x=1310;x<1750;x+=62)makePlane(world,x,.095,-1080,34,8,materials.line);
    for(let x=1190;x<=1870;x+=170){makeBox(world,x,26,-1370,110,52,80,materials.building[2]);makeBox(world,x,53,-1370,94,2,67,materials.roof)}
    // Elevated monorail viaduct and two ground-level rail corridors.
    for(const [z,elev,color] of [[-390,0,materials.rail],[-960,32,materials.trainGreen],[245,0,materials.train]]){
      makeBox(world,0,elev+.35,z,5200,.7,12,color);
      makeBox(world,0,elev+.8,z-4.1,5200,.35,.55,materials.tire);
      makeBox(world,0,elev+.8,z+4.1,5200,.35,.55,materials.tire);
      for(let x=-2500;x<2500;x+=27)makeBox(world,x,elev+1,z,.9,.45,13,materials.sidewalk);
      if(elev>0)for(let x=-2400;x<2400;x+=180)makeBox(world,x,elev/2,z,7,elev,7,materials.building[4]);
    }
    buildStations(); buildAircraft();
  }
  function buildStations(){
    for(const [x,z] of [[-300,245],[250,-390],[-80,-960]]){
      const elevated=z===-960?32:0;
      makeBox(world,x,2+elevated,z,62,4,25,materials.building[2]);
      makeBox(world,x,4.2+elevated,z,68,.7,30,materials.trainGreen);
    }
  }
  function makeCar(name,color,x,z,kind='TRAFFIC',axis='x',dir=1,speed=0){
    const group=new THREE.Group(); world.add(group);
    const bodyMat=color;
    makeBox(group,0,1.05,0,9,1.75,18,bodyMat);
    makeBox(group,0,2.1,-1.2,7.2,1.15,8.5,materials.glass);
    makeBox(group,0,2.05,4.2,7,1,.65,mat('#e9d7ad',.4));
    makeBox(group,-4.65,.65,-5.7,1.1,1.2,3.8,materials.tire);
    makeBox(group,4.65,.65,-5.7,1.1,1.2,3.8,materials.tire);
    makeBox(group,-4.65,.65,5.7,1.1,1.2,3.8,materials.tire);
    makeBox(group,4.65,.65,5.7,1.1,1.2,3.8,materials.tire);
    const ob={kind,name,x,z,heading:kind==='TRAFFIC'?(axis==='x'?(dir>0?Math.PI/2:-Math.PI/2):(dir>0?0:Math.PI)):0,speed,group,axis,dir,parked:kind==='CAR',damage:0};
    group.position.set(x,0,z);group.rotation.y=ob.heading;cars.push(ob);return ob;
  }
  const coupe=makeCar('CITY COUPE',mat('#dfa36d',.43),24,0,'CAR');
  const carColors=['#d16c58','#d7d3b6','#76a39a','#d7a45e','#7487a5','#c6d4c9','#ad785f'];
  const colorMats=carColors.map(c=>mat(c,.48));
  for(let i=0;i<28;i++){
    const axis=rand()<.52?'x':'z',cell=Math.floor(rand()*7)-3,lane=(rand()<.5?-1:1)*19,pos=rand()*2600-1300;
    makeCar(['HARBOR SEDAN','PALOMA TAXI','COMPACT','CITY SUV'][i%4],colorMats[i%colorMats.length],axis==='x'?pos:cell*spacing+lane,axis==='x'?cell*spacing+lane:pos,'TRAFFIC',axis,rand()<.5?1:-1,28+rand()*32);
  }
  function makeTrain(kind,x,z,speed,color){
    const group=new THREE.Group();world.add(group);
    const pieces=kind==='COMMUTER'?3:2,length=kind==='COMMUTER'?24:19;
    for(let i=0;i<pieces;i++){
      const car=new THREE.Group();car.position.x=(i-(pieces-1)/2)*(length+1);group.add(car);
      makeBox(car,0,3,0,length,5,8,color);
      makeBox(car,0,3.35,-4.08,length*.68,2.4,.15,materials.glass);
      makeBox(car,0,3.35,4.08,length*.68,2.4,.15,materials.glass);
      for(let w=0;w<4;w++)makeBox(car,-length*.34+w*length*.22,3.5,-4.18,2.5,1.5,.1,materials.trainGreen);
      makeBox(car,0,5.6,0,length*.96,.35,7.6,materials.roof);
    }
    const train={kind,name:kind+' TRAIN',x,z,speed,group,heading:0,_isTrain:false};
    group.position.set(x,kind==='MONORAIL'?32:0,z);trains.push(train);return train;
  }
  makeTrain('COMMUTER',-420,245,66,materials.train);
  makeTrain('METRO',380,-390,-58,materials.train);
  makeTrain('MONORAIL',-450,-960,82,materials.trainGreen);
  function makePed(x,z,controlled=false){
    const group=new THREE.Group();world.add(group);
    const shirt=mat(controlled?'#dca06c':['#536b64','#9a7660','#a4aa91','#60768a'][Math.floor(rand()*4)]);
    const body=new THREE.Mesh(cylinderGeo,shirt);body.position.y=1.35;body.scale.set(.55,1.25,.4);group.add(body);
    const head=new THREE.Mesh(sphereGeo,mat('#c99e7d'));head.position.y=2.35;head.scale.set(.48,.52,.48);group.add(head);
    const p={x,z,group,phase:rand()*8,controlled};group.position.set(x,0,z);peds.push(p);return p;
  }
  const avatar=makePed(0,0,true);
  for(let i=0;i<25;i++)makePed((Math.floor(rand()*9)-4)*spacing+(rand()-.5)*140,(Math.floor(rand()*9)-4)*spacing+(rand()-.5)*140);
  function buildAircraft(){
    const plane=new THREE.Group();world.add(plane);
    makeBox(plane,0,0,0,5.5,.7,26,mat('#d6d7ce',.48));
    makeBox(plane,0,0,0,38,.48,5,mat('#c4c9bf',.48));
    makeBox(plane,-16,0,0,11,.4,10,mat('#b9c3b9',.48));
    makeBox(plane,0,1,-2,7,2,6,materials.glass);
    const heli=new THREE.Group();world.add(heli);
    makeBox(heli,0,0,0,12,4,7,mat('#536d66'));
    makeBox(heli,0,.2,-4,4,2,5,materials.glass);
    makeBox(heli,0,0,8,2,.8,13,mat('#536d66'));
    makeBox(heli,0,2,0,1,.25,30,materials.roof);
    aircraft.push({kind:'PLANE',group:plane,x:-900,z:-1200,phase:rand()*8},{kind:'HELICOPTER',group:heli,x:620,z:-620,phase:rand()*8});
  }
  buildCity();
  const sky=new THREE.Mesh(new THREE.SphereGeometry(3900,16,12),new THREE.MeshBasicMaterial({color:'#d28c69',side:THREE.BackSide}));scene.add(sky);
  function resize(){renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix()}
  addEventListener('resize',resize,{passive:true});
  function districtName(){if(player.x>1050&&player.z<-730)return 'AIRPORT';if(player.z<-750)return 'SKYLINE';if(player.x>300)return 'FINANCIAL';if(player.z>300)return 'OLD TOWN';return 'DOWNTOWN'}
  function showToast(message){clearTimeout(toastTimer);ui.toast.textContent=message;ui.toast.classList.add('show');toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),1800)}
  function nearbyTarget(carRange,trainRange){
    let target=null,nearest=Infinity,closestTrain=null,trainDistance=Infinity;
    for(const car of cars){const distance=Math.hypot(car.x-player.x,car.z-player.z);if(distance<carRange&&distance<nearest){target=car;nearest=distance}}
    for(const train of trains){const distance=Math.hypot(train.x-player.x,train.z-player.z);if(distance<trainRange&&distance<trainDistance){closestTrain=train;trainDistance=distance}}
    // Give a train at the platform clear priority over nearby road traffic.
    return closestTrain&&trainDistance<50?closestTrain:target;
  }
  function nearInteractable(){
    if(player.vehicle)return 'EXIT';
    const target=nearbyTarget(39,58);
    if(!target)return '';
    if(trains.includes(target))return 'BOARD '+target.kind;
    return target.kind==='TRAFFIC'?'ENTER':'GET IN';
  }
  function interact(){
    if(player.vehicle){const vehicle=player.vehicle;if(vehicle._isTrain){player.x=vehicle.x-30;player.z=vehicle.z+28}else{player.x=vehicle.x-17;player.z=vehicle.z+15;vehicle.parked=vehicle===coupe}player.vehicle=null;ui.vehicle.textContent='ON FOOT';ui.speedCard.classList.remove('show');showToast('VEHICLE EXITED');return}
    const target=nearbyTarget(43,62);
    if(!target)return;
    if(trains.includes(target)){target._isTrain=true;showToast('TRAIN UNDER CONTROL')}else{target.parked=false;showToast('ENGINE STARTED')}
    player.vehicle=target;ui.vehicle.textContent=target.name;ui.speedCard.classList.add('show');
  }
  function down(...names){return names.some(n=>keys.has(n))}
  function update(dt,time){
    if(!playing||phoneOpen)return;
    worldClock=(worldClock+dt*.008)%24;
    const driving=!!player.vehicle, vehicle=player.vehicle;
    const throttle=(down('w','arrowup')||touch.throttle>0?1:0)-(down('s','arrowdown',' ')||touch.brake?1:0)-(touch.y>.16?touch.y:0)+(touch.y<-.16?-touch.y:0);
    const steer=(down('d','arrowright')?1:0)-(down('a','arrowleft')?1:0)+touch.x;
    if(driving){
      if(vehicle._isTrain){
        vehicle.speed+=throttle*48*dt;if(down(' ','s','arrowdown')||touch.brake)vehicle.speed*=Math.pow(.08,dt);
        vehicle.speed=THREE.MathUtils.clamp(vehicle.speed,-90,125);vehicle.x+=vehicle.speed*dt;
        if(vehicle.x>2500)vehicle.x=-2500;if(vehicle.x<-2500)vehicle.x=2500;
        vehicle.group.position.x=vehicle.x;player.x=vehicle.x;player.z=vehicle.z;player.heading=vehicle.speed>=0?Math.PI/2:-Math.PI/2;
      }else{
        vehicle.speed+=throttle*66*dt;vehicle.speed*=Math.pow(.985,dt*60);vehicle.speed=THREE.MathUtils.clamp(vehicle.speed,-36,145);
        if(Math.abs(vehicle.speed)<.5&&throttle===0)vehicle.speed=0;
        if(Math.abs(steer)>.04&&Math.abs(vehicle.speed)>2)vehicle.heading+=steer*dt*(.9+Math.min(Math.abs(vehicle.speed)/90,.9))*Math.sign(vehicle.speed);
        vehicle.x+=Math.sin(vehicle.heading)*vehicle.speed*dt;vehicle.z+=Math.cos(vehicle.heading)*vehicle.speed*dt;
        vehicle.group.position.set(vehicle.x,0,vehicle.z);vehicle.group.rotation.y=vehicle.heading;
        player.x=vehicle.x;player.z=vehicle.z;player.heading=vehicle.heading;
        if(Math.abs(vehicle.speed)>88)wanted=Math.min(5,wanted+dt*.018);
      }
    }else{
      const dx=THREE.MathUtils.clamp(touch.x+(down('d','arrowright')?1:0)-(down('a','arrowleft')?1:0),-1,1);
      const dz=THREE.MathUtils.clamp(touch.y+(down('s','arrowdown')?1:0)-(down('w','arrowup')?1:0),-1,1);
      const length=Math.hypot(dx,dz)||1;player.x+=dx/length*72*dt;player.z+=dz/length*72*dt;
      if(Math.abs(dx)+Math.abs(dz)>.05)player.heading=Math.atan2(dx,dz);
      avatar.group.position.set(player.x,0,player.z);avatar.group.rotation.y=player.heading;
    }
    for(const c of cars)if(c.kind==='TRAFFIC'){
      if(c.axis==='x')c.x+=c.dir*c.speed*dt;else c.z+=c.dir*c.speed*dt;
      if(c.x>2600)c.x=-2600;if(c.x<-2600)c.x=2600;if(c.z>2600)c.z=-2600;if(c.z<-2600)c.z=2600;
      c.group.position.set(c.x,0,c.z);
    }
    for(const tr of trains)if(tr!==vehicle){tr.x+=tr.speed*dt;if(tr.x>2500)tr.x=-2500;if(tr.x<-2500)tr.x=2500;tr.group.position.x=tr.x}
    for(const ped of peds)if(!ped.controlled){ped.phase+=dt*.7;ped.x+=Math.sin(ped.phase*.37)*dt*3;ped.z+=Math.cos(ped.phase*.28)*dt*3;ped.group.position.set(ped.x,0,ped.z)}
    aircraft.forEach(a=>{a.x+=dt*(a.kind==='PLANE'?22:-12);a.z+=Math.sin(time*.0003+a.phase)*dt*4;if(a.x>2300)a.x=-1800;a.group.position.set(a.x,a.kind==='PLANE'?105:92+Math.sin(time*.001+a.phase)*7,a.z);a.group.rotation.y=a.kind==='PLANE'?Math.PI/2:.2});
  }
  function drawMap(){
    const ctx=mapCtx;ctx.clearRect(0,0,180,180);ctx.fillStyle='#192622';ctx.fillRect(0,0,180,180);
    ctx.save();ctx.translate(90,90);ctx.scale(.095,-.095);ctx.translate(-player.x,-player.z);
    ctx.fillStyle='#303c37';for(let n=-12;n<=12;n++){ctx.fillRect(n*spacing-roadWidth/2,-2800,roadWidth,5600);ctx.fillRect(-2800,n*spacing-roadWidth/2,5600,roadWidth)}
    ctx.fillStyle='#a5d6b8';for(const t of trains){ctx.fillRect(t.x-34,t.z-5,68,10)}
    ctx.fillStyle='#d5a46d';for(const c of cars)if(c.kind==='CAR')ctx.fillRect(c.x-8,c.z-14,16,28);
    ctx.restore();ctx.strokeStyle='rgba(190,220,201,.35)';ctx.lineWidth=1;ctx.strokeRect(8,8,164,164);
    ctx.save();ctx.translate(90,90);ctx.rotate(-player.heading);ctx.fillStyle='#a6f2c5';ctx.beginPath();ctx.moveTo(0,-9);ctx.lineTo(6,7);ctx.lineTo(0,4);ctx.lineTo(-6,7);ctx.closePath();ctx.fill();ctx.restore();
  }
  function updateCamera(dt){
    const targetX=player.x+Math.sin(player.heading)*98,targetZ=player.z+Math.cos(player.heading)*98;
    const desired=new THREE.Vector3(targetX,player.vehicle?58:48,targetZ);
    camera.position.lerp(desired,1-Math.pow(.001,dt));
    camera.lookAt(player.x,player.vehicle?8:4,player.z);
  }
  function render(time){
    requestAnimationFrame(render);const dt=Math.min(.04,(time-last)/1000||0);last=time;update(dt,time);updateCamera(dt);renderer.render(scene,camera);
    const hint=nearInteractable();ui.interaction.classList.toggle('show',!!hint&&!phoneOpen&&playing);$('actionLabel').textContent=hint?hint.split(' ').slice(0,2).join(' '):(player.vehicle?'EXIT':'ENTER');
    ui.district.textContent=districtName();const h=Math.floor(worldClock)%24,m=Math.floor((worldClock%1)*60);ui.clock.textContent=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');
    if(player.vehicle){const km=Math.round(Math.abs(player.vehicle.speed||0)*.78);ui.speed.textContent=String(km).padStart(2,'0');ui.fill.style.width=Math.min(100,km/1.5)+'%';ui.vehicleTag.childNodes[0].textContent=(player.vehicle.name||'VEHICLE')+' '}
    ui.wanted.textContent='★'.repeat(wanted)+'☆'.repeat(5-wanted);drawMap();
  }
  function togglePhone(){if(!playing)return;phoneOpen=!phoneOpen;ui.phone.classList.toggle('open',phoneOpen)}
  function keyName(event){return event.key.toLowerCase()===' '?' ':event.key.toLowerCase()}
  addEventListener('keydown',event=>{const key=keyName(event);if([' ','arrowup','arrowdown','arrowleft','arrowright'].includes(key))event.preventDefault();if(key==='e'&&playing&&!phoneOpen)interact();if(key==='m')togglePhone();keys.add(key)});
  addEventListener('keyup',event=>keys.delete(keyName(event)));
  const stickZone=$('stickZone'),stickKnob=$('stickKnob');let stickPointer=null;
  function updateStick(event){
    const rect=stickZone.getBoundingClientRect(),cx=rect.left+rect.width/2,cy=rect.top+rect.height/2,limit=39;
    let x=event.clientX-cx,y=event.clientY-cy;const len=Math.hypot(x,y);if(len>limit){x=x/len*limit;y=y/len*limit}
    touch.x=x/limit;touch.y=y/limit;stickKnob.style.transform=`translate(${x}px, ${y}px)`;
  }
  stickZone.addEventListener('pointerdown',event=>{event.preventDefault();stickPointer=event.pointerId;stickZone.setPointerCapture(stickPointer);updateStick(event)});
  stickZone.addEventListener('pointermove',event=>{if(event.pointerId===stickPointer)updateStick(event)});
  const releaseStick=event=>{if(event.pointerId!==stickPointer)return;stickPointer=null;touch.x=0;touch.y=0;stickKnob.style.transform='translate(0, 0)'};
  stickZone.addEventListener('pointerup',releaseStick);stickZone.addEventListener('pointercancel',releaseStick);
  const driveButton=$('driveButton');
  driveButton.addEventListener('pointerdown',event=>{event.preventDefault();touch.throttle=1;driveButton.setPointerCapture(event.pointerId)});
  const releaseDrive=()=>touch.throttle=0;driveButton.addEventListener('pointerup',releaseDrive);driveButton.addEventListener('pointercancel',releaseDrive);driveButton.addEventListener('lostpointercapture',releaseDrive);
  $('actionButton').addEventListener('click',()=>{if(playing&&!phoneOpen)interact()});$('phoneButton').addEventListener('click',togglePhone);
  $('startButton').addEventListener('click',()=>{ui.overlay.classList.add('hidden');playing=true;showToast('WELCOME TO SAN PALOMA')});
  $('missionClose').addEventListener('click',()=>{$('missionCard').style.display='none'});
  document.querySelectorAll('.phone-apps button').forEach(button=>button.addEventListener('click',()=>showToast(button.dataset.app.toUpperCase()+' OPENED')));
  camera.position.set(0,48,98);camera.lookAt(0,0,0);drawMap();requestAnimationFrame(render);
})();
