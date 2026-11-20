(() => {
  const canvas = document.querySelector('#game'), ctx = canvas.getContext('2d');
  const mini = document.querySelector('#minimap'), mctx = mini.getContext('2d');
  const $ = id => document.getElementById(id);
  const ui = {district:$('districtName'), clock:$('clock'), wanted:$('wanted'), vehicle:$('vehicleName'), speed:$('speed'), fill:$('speedFill'), speedCard:$('speedCard'), vehicleTag:$('vehicleTag'), interaction:$('interaction'), toast:$('toast'), missionTitle:$('missionTitle'), missionText:$('missionText'), phone:$('phone'), overlay:$('startOverlay')};
  let W=innerWidth,H=innerHeight,DPR=1,playing=false,phoneOpen=false,last=0,toastTimer=0,worldClock=19.7;
  const keys = new Set(), spacing=360, road=112;
  const player={x:0,y:0,heading:Math.PI*.15,vx:0,vy:0,vehicle:null};
  let wanted=0;
  const cars=[], aircraft=[];
  const trains=[{kind:'COMMUTER',x:-420,y:236,speed:82,heading:0,phase:0,color:'#d8e4df',length:176},{kind:'METRO',x:370,y:-142,speed:-70,heading:Math.PI,phase:0,color:'#b9d1c9',length:150},{kind:'MONORAIL',x:-400,y:-586,speed:104,heading:0,phase:0,color:'#b0f0ca',length:126}];
  const coupe={kind:'CAR',name:'CITY COUPE',x:36,y:0,heading:0,vx:0,vy:0,speed:0,color:'#e6a56c',length:44,width:23,parked:true,damage:0};
  cars.push(coupe);
  const colors=['#d16c58','#d7d3b6','#76a39a','#d7a45e','#7487a5','#c6d4c9','#ad785f'];
  let seed=3418; const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
  for(let i=0;i<34;i++){
    const axis=rand()<.52?'x':'y', cell=Math.floor(rand()*7)-3, lane=(rand()<.5?-1:1)*22, pos=(rand()*2200-1100);
    cars.push({kind:'TRAFFIC',name:['HARBOR SEDAN','PALOMA TAXI','COMPACT','CITY SUV'][i%4],x:axis==='x'?pos:cell*spacing+lane,y:axis==='x'?cell*spacing+lane:pos,axis,dir:rand()<.5?1:-1,speed:35+rand()*43,color:colors[i%colors.length],length:36+rand()*7,width:18,damage:0});
  }
  for(let i=0;i<2;i++)aircraft.push({x:i?380:-450,y:i?-900:720,phase:rand()*8,kind:i?'HELICOPTER':'PLANE'});
  function resize(){DPR=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;canvas.width=Math.floor(W*DPR);canvas.height=Math.floor(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0)}
  addEventListener('resize',resize);resize();
  const project=(x,y,z=0)=>({x:W*.5+(x-player.x-y+player.y)*.69,y:H*.53+(x-player.x+y-player.y)*.37-z});
  function poly(points,fill,stroke=null,width=1){ctx.beginPath();points.forEach((p,i)=>{const q=project(p[0],p[1],p[2]||0);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y)});ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke()}}
  function line(a,b,color,width=1,dash=[]){const p=project(a[0],a[1],a[2]||0),q=project(b[0],b[1],b[2]||0);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash);ctx.stroke();ctx.setLineDash([])}
  function box(x,y,w,d,h,top,side1,side2){const z=h;poly([[x,y,z],[x+w,y,z],[x+w,y+d,z],[x,y+d,z]],top);poly([[x,y,z],[x+w,y,z],[x+w,y,0],[x,y,0]],side1);poly([[x+w,y,z],[x+w,y+d,z],[x+w,y+d,0],[x+w,y,0]],side2)}
  function roadScene(){
    const minX=player.x-1650,maxX=player.x+1650,minY=player.y-1650,maxY=player.y+1650;
    const x0=Math.floor(minX/spacing)*spacing,x1=Math.ceil(maxX/spacing)*spacing,y0=Math.floor(minY/spacing)*spacing,y1=Math.ceil(maxY/spacing)*spacing;
    ctx.fillStyle='#80917e';ctx.fillRect(0,0,W,H);
    // broad city blocks and asphalt avenues
    for(let x=x0;x<=x1;x+=spacing){line([x,minY],[x,maxY],'#495954',road*.69);line([x,minY],[x,maxY],'#5b6860',road*.69-5);line([x-road*.29,minY],[x-road*.29,maxY],'rgba(233,221,177,.48)',1,[12,15]);line([x+road*.29,minY],[x+road*.29,maxY],'rgba(233,221,177,.48)',1,[12,15]);}
    for(let y=y0;y<=y1;y+=spacing){line([minX,y],[maxX,y],'#495954',road*.69);line([minX,y],[maxX,y],'#5b6860',road*.69-5);line([minX,y-road*.29],[maxX,y-road*.29],'rgba(233,221,177,.48)',1,[12,15]);line([minX,y+road*.29],[maxX,y+road*.29],'rgba(233,221,177,.48)',1,[12,15]);}
    // side walks and curb highlights
    for(let x=x0;x<=x1;x+=spacing){line([x-road*.53,minY],[x-road*.53,maxY],'#a0a18a',2);line([x+road*.53,minY],[x+road*.53,maxY],'#a0a18a',2)}
    for(let y=y0;y<=y1;y+=spacing){line([minX,y-road*.53],[maxX,y-road*.53],'#a0a18a',2);line([minX,y+road*.53],[maxX,y+road*.53],'#a0a18a',2)}
    // runway zone beyond downtown
    const airport=project(1160,-1100);ctx.save();ctx.translate(airport.x,airport.y);ctx.globalAlpha=.72;ctx.fillStyle='#414c4b';ctx.fillRect(-240,-135,480,270);ctx.fillStyle='#c8c8ad';ctx.fillRect(-220,-3,440,3);for(let n=-180;n<200;n+=44)ctx.fillRect(n,-7,22,10);ctx.restore();
    for(let bx=x0-spacing;bx<x1;bx+=spacing)for(let by=y0-spacing;by<y1;by+=spacing){
      const cx=bx+spacing/2,cy=by+spacing/2;if(Math.hypot(cx-player.x,cy-player.y)>1550)continue;
      if(cx>700&&cy<-700)continue;
      const r=((Math.abs(bx*17+by*31)%997)/997);
      // landscaped courtyard pocket
      if(r<.11){poly([[bx+85,by+92],[bx+274,by+92],[bx+274,by+270],[bx+85,by+270]],'#55735d');for(let t=0;t<6;t++){const tx=bx+110+(t*47)%150,ty=by+115+(t*61)%130;const p=project(tx,ty);ctx.fillStyle='#274638';ctx.beginPath();ctx.arc(p.x,p.y,5,0,7);ctx.fill();ctx.fillStyle='#799d73';ctx.beginPath();ctx.arc(p.x-2,p.y-4,9,0,7);ctx.fill()};continue}
      let count=r>.8?1:2;for(let n=0;n<count;n++){const ox=count===1?42:36+(n*103),oy=count===1?48:42+(n*110),ww=count===1?250:82+(r*60),dd=count===1?260:94+((r*137)%60),h=34+((Math.floor((bx+1000)*7+(by+1200)*13+n*41)%5+5)%5)*13;
        let base=r<.28?'#b4a993':r<.56?'#a78e78':r<.78?'#899c90':'#c0b9a2';let side='#59675d';
        box(bx+ox,by+oy,ww,dd,h,base,side,'#657268');
        // rooftop structures / warm windows on the front facade
        const p=project(bx+ox+ww*.5,by+oy+dd*.5,h);ctx.fillStyle='rgba(246,192,115,.65)';for(let j=0;j<3;j++){ctx.fillRect(p.x-10+j*8,p.y-6,3,3)}
        if(h>75){const roof=project(bx+ox+ww*.72,by+oy+dd*.25,h+10);ctx.fillStyle='#d5d3bd';ctx.fillRect(roof.x-4,roof.y-6,8,7)}
      }
    }
    // Railway corridors and station markers
    drawTrack(-1350,236,1350,236,'#d7a56f',0);drawTrack(-1350,-586,1350,-586,'#9bdfbe',28);drawTrack(-1350,-142,1350,-142,'#9bbab0',0);
    station(-360,236,'CENTRAL TERMINAL');station(0,-586,'SKYLINE MONORAIL');station(360,-142,'METRO / MIDTOWN');
    labelWorld(-1000,360,'OLD TOWN');labelWorld(920,-410,'FINANCIAL DISTRICT');labelWorld(1050,-1190,'SAN PALOMA INTERNATIONAL');
  }
  function drawTrack(x1,y,x2,y2,color,elev){
    const elevated=elev>0;line([x1,y,elev],[x2,y2,elev],elevated?'#5c7069':'#4b5954',elevated?20:18);line([x1,y-6,elev],[x2,y2-6,elev],'#252f2c',2);line([x1,y+6,elev],[x2,y2+6,elev],'#252f2c',2);
    const from=Math.min(x1,x2),to=Math.max(x1,x2);for(let x=from;x<=to;x+=35)line([x,y-11,elev],[x,y+11,elev],elevated?'#a0b1a3':'#9e927c',2);
    if(elevated){for(let x=from;x<=to;x+=180)line([x,y,elev],[x,y,0],'#555f57',3)}
    // route lamps
    for(let x=from+65;x<to;x+=420){const p=project(x,y,elev+2);ctx.fillStyle=color;ctx.globalAlpha=.65;ctx.beginPath();ctx.arc(p.x,p.y,2.4,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1}
  }
  function station(x,y,name){const p=project(x,y,0);ctx.save();ctx.translate(p.x,p.y);ctx.fillStyle='rgba(8,19,17,.78)';ctx.fillRect(-48,-14,96,23);ctx.strokeStyle='rgba(202,235,211,.25)';ctx.strokeRect(-48,-14,96,23);ctx.fillStyle='#c9e8d0';ctx.font='7px monospace';ctx.textAlign='center';ctx.fillText(name,0,1);ctx.fillStyle='#9bf0bb';ctx.fillRect(-4,7,8,2);ctx.restore()}
  function labelWorld(x,y,text){const p=project(x,y);ctx.save();ctx.font='600 8px monospace';ctx.textAlign='center';ctx.fillStyle='rgba(8,21,19,.68)';ctx.fillText(text,p.x+1,p.y+1);ctx.fillStyle='rgba(239,238,215,.76)';ctx.fillText(text,p.x,p.y);ctx.restore()}
  function drawCar(o,playerCar=false){const p=project(o.x,o.y,0);const angle=o.heading||0;const sx=Math.cos(angle)*.69-Math.sin(angle)*.69,sy=Math.sin(angle)*.37+Math.cos(angle)*.37;const a=Math.atan2(sy,sx);ctx.save();ctx.translate(p.x,p.y);ctx.rotate(a);const length=(o.length||40)*.68,width=(o.width||20)*.77;
    ctx.fillStyle='rgba(0,0,0,.26)';ctx.beginPath();ctx.ellipse(0,4,length*.55,width*.6,0,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#171d1b';ctx.fillRect(-length*.34,-width*.57,length*.22,width*.17);ctx.fillRect(length*.13,-width*.57,length*.22,width*.17);ctx.fillRect(-length*.34,width*.4,length*.22,width*.17);ctx.fillRect(length*.13,width*.4,length*.22,width*.17);
    ctx.fillStyle=o.color||'#c4d2c7';ctx.beginPath();ctx.moveTo(-length*.5,-width*.42);ctx.lineTo(length*.34,-width*.48);ctx.lineTo(length*.51,-width*.28);ctx.lineTo(length*.51,width*.28);ctx.lineTo(length*.34,width*.48);ctx.lineTo(-length*.5,width*.42);ctx.closePath();ctx.fill();
    ctx.fillStyle='rgba(21,46,46,.78)';ctx.beginPath();ctx.moveTo(-length*.2,-width*.35);ctx.lineTo(length*.19,-width*.34);ctx.lineTo(length*.31,-width*.2);ctx.lineTo(length*.31,width*.2);ctx.lineTo(length*.19,width*.34);ctx.lineTo(-length*.2,width*.35);ctx.closePath();ctx.fill();
    ctx.fillStyle='#f6dcaa';ctx.fillRect(length*.42,-width*.29,3,3);ctx.fillRect(length*.42,width*.18,3,3);ctx.fillStyle='#e47560';ctx.fillRect(-length*.49,-width*.3,3,3);ctx.fillRect(-length*.49,width*.19,3,3);
    if(o.damage>0){ctx.strokeStyle='rgba(44,40,34,.7)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(length*.03,-width*.3);ctx.lineTo(-length*.08,0);ctx.lineTo(length*.02,width*.27);ctx.stroke()}
    if(playerCar){ctx.strokeStyle='rgba(191,255,210,.8)';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(0,0,length*.64,width*.78,0,0,Math.PI*2);ctx.stroke()}
    ctx.restore()}
  function drawTrain(t){const p=project(t.x,t.y,t.kind==='MONORAIL'?28:0),angle=t.heading||0;const vecX=Math.cos(angle)*.69-Math.sin(angle)*.69,vecY=Math.sin(angle)*.37+Math.cos(angle)*.37;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(Math.atan2(vecY,vecX));const n=t.kind==='COMMUTER'?3:2,L=t.length/n;for(let i=0;i<n;i++){const x=-t.length*.5+i*L;ctx.fillStyle='rgba(0,0,0,.27)';ctx.fillRect(x+2,4,L-5,16);ctx.fillStyle=t.color;ctx.beginPath();ctx.roundRect(x,-9,L-4,17,4);ctx.fill();ctx.fillStyle='#263c3a';ctx.fillRect(x+6,-6,L-17,8);for(let w=0;w<3;w++){ctx.fillStyle='#b8ead1';ctx.fillRect(x+8+w*9,-4,5,4)}ctx.fillStyle='#e9cd93';ctx.fillRect(x+L-9,-5,2,3);ctx.fillRect(x+L-9,2,2,3)}ctx.restore();const label=project(t.x,t.y,t.kind==='MONORAIL'?49:25);ctx.fillStyle='rgba(10,21,19,.75)';ctx.fillRect(label.x-31,label.y-18,62,12);ctx.fillStyle='#d8efdf';ctx.font='7px monospace';ctx.textAlign='center';ctx.fillText(t.kind,label.x,label.y-9)}
  function drawPed(o,controlled=false){const p=project(o.x,o.y,0);ctx.save();ctx.translate(p.x,p.y);ctx.fillStyle='rgba(0,0,0,.28)';ctx.beginPath();ctx.ellipse(0,6,8,4,0,0,7);ctx.fill();ctx.fillStyle=controlled?'#26302e':'#53645f';ctx.fillRect(-5,-6,10,12);ctx.fillStyle='#b9d4c4';ctx.beginPath();ctx.arc(0,-10,5,0,7);ctx.fill();ctx.fillStyle=controlled?'#e7ae75':'#8e7564';ctx.fillRect(-4,-5,8,6);ctx.restore()}
  const peds=[];
  for(let i=0;i<18;i++)peds.push({x:(rand()*5|0)*spacing+(rand()*200-100),y:(rand()*5|0)*spacing+(rand()*200-100),phase:rand()*7,heading:rand()*6.28});
  function drawAircraft(a,t){const p=project(a.x,a.y,110+Math.sin(t*.45+a.phase)*18);ctx.save();ctx.translate(p.x,p.y);if(a.kind==='HELICOPTER'){ctx.fillStyle='#283936';ctx.beginPath();ctx.ellipse(0,0,22,7,0,0,7);ctx.fill();ctx.fillStyle='#91a99f';ctx.fillRect(-10,-8,17,7);ctx.strokeStyle='#263936';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-15,-2);ctx.lineTo(-31,-7);ctx.moveTo(-15,2);ctx.lineTo(-31,7);ctx.moveTo(3,-8);ctx.lineTo(3,-16);ctx.stroke();ctx.strokeStyle='#aab9b1';ctx.beginPath();ctx.moveTo(-19,-14);ctx.lineTo(18,-14);ctx.stroke()}else{ctx.fillStyle='#cbd2c7';ctx.beginPath();ctx.moveTo(-24,0);ctx.lineTo(20,-4);ctx.lineTo(26,0);ctx.lineTo(20,4);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(-3,-3);ctx.lineTo(-10,-16);ctx.lineTo(5,-4);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(-3,3);ctx.lineTo(-10,16);ctx.lineTo(5,4);ctx.closePath();ctx.fill()}ctx.restore()}
  function drawMinimap(){mctx.clearRect(0,0,180,180);mctx.fillStyle='#1c2925';mctx.fillRect(0,0,180,180);mctx.fillStyle='#293833';for(let x=-20;x<200;x+=26){mctx.fillRect(x+(player.x*.08%26),0,3,180)}for(let y=-20;y<200;y+=26){mctx.fillRect(0,y+(player.y*.08%26),180,3)}mctx.strokeStyle='#6d8377';mctx.lineWidth=1;mctx.strokeRect(8,8,164,164);mctx.fillStyle='#9ff0c1';mctx.beginPath();mctx.moveTo(90,82);mctx.lineTo(95,94);mctx.lineTo(90,91);mctx.lineTo(85,94);mctx.closePath();mctx.fill();mctx.fillStyle='#f0cf88';[[-.42,-.1],[.48,.35],[.6,-.55],[-.55,.48]].forEach(q=>{mctx.beginPath();mctx.arc(90+q[0]*75+Math.sin(performance.now()/3000)*3,90+q[1]*75,2,0,7);mctx.fill()});mctx.strokeStyle='#95bbaa';mctx.beginPath();mctx.moveTo(7,115);mctx.lineTo(173,115);mctx.moveTo(115,7);mctx.lineTo(115,173);mctx.stroke()}
  function districtName(){if(player.x>600&&player.y<-700)return 'AIRPORT';if(player.y<-480)return 'SKYLINE';if(player.x>360)return 'FINANCIAL';if(player.y>300)return 'OLD TOWN';return 'DOWNTOWN'}
  function update(dt,t){
    if(!playing||phoneOpen)return;
    worldClock=(worldClock+dt*.008)%24;
    const inVehicle=!!player.vehicle;
    if(inVehicle){const car=player.vehicle;let throttle=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0);let steer=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0);if(car._isTrain){if(keys.has(' '))throttle=0,car.speed*=.94;car.speed+=(throttle*42-Math.sign(car.speed)*Math.min(Math.abs(car.speed),8))*dt;car.speed=Math.max(-100,Math.min(140,car.speed));car.x+=car.speed*dt;if(car.x>1450)car.x=-1450;if(car.x<-1450)car.x=1450;player.x=car.x;player.y=car.y;player.heading=car.speed>=0?0:Math.PI;}else{if(keys.has(' '))throttle=0,car.speed*=.94;car.speed+=(throttle*62-dt*7*(car.speed>=0?1:-1)*.35*car.speed)*dt;car.speed=Math.max(-35,Math.min(155,car.speed));if(Math.abs(car.speed)<.8&&throttle===0)car.speed*=.93;if(Math.abs(steer)&&Math.abs(car.speed)>3)car.heading+=steer*dt*(.72+(Math.max(0,1-Math.abs(car.speed)/160)*.35))*Math.sign(car.speed);car.vx=Math.sin(car.heading)*car.speed;car.vy=Math.cos(car.heading)*car.speed;car.x+=car.vx*dt;car.y+=car.vy*dt;player.x=car.x;player.y=car.y;player.heading=car.heading}if(Math.abs(car.speed)>70)wanted=Math.min(5,wanted+dt*.02);}
    else{let dx=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0),dy=(keys.has('s')||keys.has('arrowdown')?1:0)-(keys.has('w')||keys.has('arrowup')?1:0),len=Math.hypot(dx,dy)||1;player.x+=dx/len*110*dt;player.y+=dy/len*110*dt;player.heading=Math.atan2(dx,-dy)}
    for(const c of cars){if(c.kind==='TRAFFIC'){if(c.axis==='x'){c.x+=c.dir*c.speed*dt;c.heading=c.dir>0?Math.PI*.5:-Math.PI*.5;if(c.x<-1450)c.x=1450;if(c.x>1450)c.x=-1450}else{c.y+=c.dir*c.speed*dt;c.heading=c.dir>0?0:Math.PI;if(c.y<-1450)c.y=1450;if(c.y>1450)c.y=-1450}}}
    for(const tr of trains){if(tr===player.vehicle&&tr._isTrain)continue;tr.x+=tr.speed*dt;if(tr.x>1450)tr.x=-1450;if(tr.x<-1450)tr.x=1450}
    for(const a of aircraft){a.x+=dt*(a.kind==='PLANE'?18:-9);a.y+=Math.sin(t*.00025+a.phase)*dt*3;if(a.x>1550)a.x=-1550}
    for(const ped of peds){ped.phase+=dt*.5;ped.x+=Math.sin(ped.phase*.37)*dt*4;ped.y+=Math.cos(ped.phase*.28)*dt*3}
  }
  function nearInteractable(){if(player.vehicle)return 'E · EXIT VEHICLE';let best=null,dist=40;for(const c of cars){const d=Math.hypot(c.x-player.x,c.y-player.y);if(d<dist){dist=d;best=c}}if(best)return 'E · '+(best.kind==='TRAFFIC'?'ENTER VEHICLE':'GET IN COUPE');for(const tr of trains){const d=Math.hypot(tr.x-player.x,tr.y-player.y);if(d<70)return 'E · BOARD '+tr.kind}return ''}
  function interact(){
    if(player.vehicle){
      const vehicle=player.vehicle;
      if(vehicle._isTrain){player.x=vehicle.x-45;player.y=vehicle.y-35}
      else{player.x=vehicle.x-32;player.y=vehicle.y-28;vehicle.parked=vehicle===coupe}
      player.vehicle=null;ui.vehicle.textContent='ON FOOT';ui.speedCard.classList.remove('show');showToast('VEHICLE EXITED');return
    }
    let target=null,bd=44;
    for(const c of cars){const d=Math.hypot(c.x-player.x,c.y-player.y);if(d<bd){bd=d;target=c}}
    if(target){player.vehicle=target;target.parked=false;ui.vehicle.textContent=target.name;ui.speedCard.classList.add('show');showToast('ENGINE STARTED');return}
    for(const tr of trains){if(Math.hypot(tr.x-player.x,tr.y-player.y)<72){tr._isTrain=true;tr.name=tr.kind+' TRAIN';player.vehicle=tr;ui.vehicle.textContent=tr.name;ui.speedCard.classList.add('show');showToast('TRAIN UNDER CONTROL');return}}
  }
  function showToast(s){clearTimeout(toastTimer);ui.toast.textContent=s;ui.toast.classList.add('show');toastTimer=setTimeout(()=>ui.toast.classList.remove('show'),1800)}
  function render(t){const dt=Math.min(.033,(t-last)/1000||0);last=t;update(dt,t);roadScene();for(const tr of trains)drawTrain(tr);for(const c of cars){if(Math.hypot(c.x-player.x,c.y-player.y)<1800)drawCar(c,c===player.vehicle)}for(const ped of peds)if(Math.hypot(ped.x-player.x,ped.y-player.y)<1100)drawPed(ped);for(const a of aircraft)drawAircraft(a,t);if(!player.vehicle)drawPed(player,true);const hint=nearInteractable();ui.interaction.classList.toggle('show',!!hint&&!phoneOpen);if(hint){const p=project(player.x,player.y,0);ui.interaction.style.left=(p.x-10)+'px';ui.interaction.style.top=(p.y-58)+'px';ui.interaction.querySelector('span').textContent=hint.replace('E · ','')}ui.district.textContent=districtName();const h=Math.floor(worldClock)%24,m=Math.floor((worldClock%1)*60);ui.clock.textContent=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');if(player.vehicle){const km=Math.round(Math.abs(player.vehicle.speed||0)*.78);ui.speed.textContent=String(km).padStart(2,'0');ui.fill.style.width=Math.min(100,km/1.5)+'%';ui.vehicleTag.childNodes[0].textContent=(player.vehicle.name||'VEHICLE')+' '}ui.wanted.textContent='★'.repeat(wanted)+'☆'.repeat(5-wanted);drawMinimap();requestAnimationFrame(render)}
  addEventListener('keydown',e=>{const k=e.key.toLowerCase()===' '?' ':e.key.toLowerCase();if([' ','arrowup','arrowdown','arrowleft','arrowright'].includes(k))e.preventDefault();if(k==='e'&&playing&&!phoneOpen)interact();if(k==='m'&&playing){phoneOpen=!phoneOpen;ui.phone.classList.toggle('open',phoneOpen)}keys.add(k)});
  addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()===' '?' ':e.key.toLowerCase()));
  $('startButton').addEventListener('click',()=>{ui.overlay.classList.add('hidden');playing=true;showToast('WELCOME TO SAN PALOMA')});$('missionClose').addEventListener('click',()=>{$('missionCard').style.display='none'});document.querySelectorAll('.phone-apps button').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.app.toUpperCase()+' OPENED')));
  requestAnimationFrame(render);
})();
