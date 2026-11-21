(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const ko="187",au=0,bl=1,ou=2,Cs=1,lu=2,bs=3,bn=0,hi=1,mi=2,Jn=0,Sn=1,Ki=2,El=3,Tl=4,cu=5,$n=100,hu=101,uu=102,du=103,fu=104,pu=200,mu=201,gu=202,xu=203,$c=204,Zc=205,vu=206,_u=207,Mu=208,yu=209,wu=210,Su=211,bu=212,Eu=213,Tu=214,Ba=0,Ga=1,Ha=2,Ns=3,Va=4,Wa=5,Xa=6,qa=7,Kc=0,Au=1,Ru=2,$i=0,Jc=1,Qc=2,jc=3,Bo=4,th=5,eh=6,ih=7,nh=300,ns=301,Us=302,ea=303,ia=304,Nr=1e3,Yi=1001,Ya=1002,je=1003,Cu=1004,$s=1005,di=1006,na=1007,ln=1008,gi=1009,sh=1010,rh=1011,Os=1012,Go=1013,Oi=1014,Ei=1015,Fi=1016,Ho=1017,Vo=1018,ss=1020,ah=35902,oh=35899,lh=1021,ch=1022,Ni=1023,dn=1026,cn=1027,Wo=1028,Xo=1029,En=1030,qo=1031,Yo=1033,Rr=33776,Cr=33777,Pr=33778,Lr=33779,$a=35840,Za=35841,Ka=35842,Ja=35843,Qa=36196,ja=37492,to=37496,eo=37488,io=37489,Ur=37490,no=37491,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,ho=37814,uo=37815,fo=37816,po=37817,mo=37818,go=37819,xo=37820,vo=37821,_o=36492,Mo=36494,yo=36495,wo=36283,So=36284,Or=36285,bo=36286,Pu=3200,Eo=0,Lu=1,on="",si="srgb",Fr="srgb-linear",zr="linear",Re="srgb",sa=7680,Iu=519,Du=512,Nu=513,Uu=514,hh=515,Ou=516,Fu=517,uh=518,dh=519,fh=35044,zu=35048,Al="300 es",Ti=2e3,Fs=2001;function ku(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bu(){const s=kr("canvas");return s.style.display="block",s}const Rl={};function Br(...s){const t="THREE."+s.shift();console.log(t,...s)}function ph(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function jt(...s){s=ph(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function we(...s){s=ph(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ir(...s){const t=s.join(" ");t in Rl||(Rl[t]=!0,jt(...s))}function Gu(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Hu={[Ba]:Ba,[Ha]:Xa,[Va]:Va,[Ns]:Wa,[Ga]:Ga,[Xa]:Ha,[qa]:qa,[Wa]:Ns};class Rn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const Ps=Math.PI/180,zs=180/Math.PI;function Ji(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[s&255]+ii[s>>8&255]+ii[s>>16&255]+ii[s>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[e&63|128]+ii[e>>8&255]+"-"+ii[e>>16&255]+ii[e>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function de(s,t,e){return Math.max(t,Math.min(e,s))}function $o(s,t){return(s%t+t)%t}function Vu(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Wu(s,t,e){return s!==t?(e-s)/(t-s):0}function Ls(s,t,e){return(1-e)*s+e*t}function Xu(s,t,e,i){return Ls(s,t,1-Math.exp(-e*i))}function qu(s,t=1){return t-Math.abs($o(s,t*2)-t)}function Yu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $u(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Zu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ku(s,t){return s+Math.random()*(t-s)}function Ju(s){return s*(.5-Math.random())}function Qu(s){s!==void 0&&(Cl=s);let t=Cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ju(s){return s*Ps}function td(s){return s*zs}function ed(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function id(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nd(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Yr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Zo(s,t){if(t.constructor===Float32Array)return s;const e=Yr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Ko(s,t){if(t.constructor===Float32Array)return s;const e=Yr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Qe={DEG2RAD:Ps,RAD2DEG:zs,generateUUID:Ji,clamp:de,euclideanModulo:$o,mapLinear:Vu,inverseLerp:Wu,lerp:Ls,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:$u,randInt:Zu,randFloat:Ku,randFloatSpread:Ju,seededRandom:Qu,degToRad:ju,radToDeg:td,isPowerOfTwo:ed,ceilPowerOfTwo:id,floorPowerOfTwo:mh,setQuaternionFromProperEuler:nd,normalize:Ko,denormalize:Zo},cl=class cl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cl.prototype.isVector2=!0;let lt=cl;class cs{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){const _=Math.acos(m),y=Math.sin(_);g=Math.sin(g*_)/y,o=Math.sin(o*_)/y,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+x*o;const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let D=hl;const ra=new D,Pl=new cs,ul=class ul{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],_=n[1],y=n[4],M=n[7],w=n[2],b=n[5],v=n[8];return r[0]=a*x+o*_+l*w,r[3]=a*m+o*y+l*b,r[6]=a*g+o*M+l*v,r[1]=c*x+h*_+u*w,r[4]=c*m+h*y+u*b,r[7]=c*g+h*M+u*v,r[2]=d*x+f*_+p*w,r[5]=d*m+f*y+p*b,r[8]=d*g+f*M+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(aa.makeScale(t,e)),this}rotate(t){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ul.prototype.isMatrix3=!0;let ie=ul;const aa=new ie,Ll=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sd(){const s={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Re&&(n.r=Zi(n.r),n.g=Zi(n.g),n.b=Zi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Re&&(n.r=Qn(n.r),n.g=Qn(n.g),n.b=Qn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===on?zr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Fr]:{primaries:t,whitePoint:i,transfer:zr,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:Re,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const xe=sd();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ln;class rd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ln===void 0&&(Ln=kr("canvas")),Ln.width=t.width,Ln.height=t.height;const n=Ln.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ln}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ad=0;class Jo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(oa(n[a].image)):r.push(oa(n[a]))}else r=oa(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function oa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let od=0;const la=new D;class ri extends Rn{constructor(t=ri.DEFAULT_IMAGE,e=ri.DEFAULT_MAPPING,i=Yi,n=Yi,r=di,a=ln,o=Ni,l=gi,c=ri.DEFAULT_ANISOTROPY,h=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Ji(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=nh;ri.DEFAULT_ANISOTROPY=1;const dl=class dl{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,w=(g+1)/2,b=(h+d)/4,v=(u+x)/4,S=(p+m)/4;return y>M&&y>w?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=b/i,r=v/i):M>w?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=b/n,r=S/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=v/r,n=S/r),this.set(i,n,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dl.prototype.isVector4=!0;let ze=dl;class ld extends Rn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new ri({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Jo(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends ld{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class gh extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=je,this.minFilter=je,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cd extends ri{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=je,this.minFilter=je,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const qr=class qr{constructor(t,e,i,n,r,a,o,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,d,f,p,x,m)}set(t,e,i,n,r,a,o,l,c,h,u,d,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/In.setFromMatrixColumn(t,0).length(),r=1/In.setFromMatrixColumn(t,1).length(),a=1/In.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,i){const n=this.elements;return fi.subVectors(t,e),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),tn.crossVectors(i,fi),tn.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),tn.crossVectors(i,fi)),tn.normalize(),Zs.crossVectors(fi,tn),n[0]=tn.x,n[4]=Zs.x,n[8]=fi.x,n[1]=tn.y,n[5]=Zs.y,n[9]=fi.y,n[2]=tn.z,n[6]=Zs.z,n[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],_=i[3],y=i[7],M=i[11],w=i[15],b=n[0],v=n[4],S=n[8],L=n[12],A=n[1],P=n[5],k=n[9],B=n[13],I=n[2],G=n[6],W=n[10],H=n[14],ot=n[3],Z=n[7],nt=n[11],st=n[15];return r[0]=a*b+o*A+l*I+c*ot,r[4]=a*v+o*P+l*G+c*Z,r[8]=a*S+o*k+l*W+c*nt,r[12]=a*L+o*B+l*H+c*st,r[1]=h*b+u*A+d*I+f*ot,r[5]=h*v+u*P+d*G+f*Z,r[9]=h*S+u*k+d*W+f*nt,r[13]=h*L+u*B+d*H+f*st,r[2]=p*b+x*A+m*I+g*ot,r[6]=p*v+x*P+m*G+g*Z,r[10]=p*S+x*k+m*W+g*nt,r[14]=p*L+x*B+m*H+g*st,r[3]=_*b+y*A+M*I+w*ot,r[7]=_*v+y*P+M*G+w*Z,r[11]=_*S+y*k+M*W+w*nt,r[15]=_*L+y*B+M*H+w*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=l*f-c*d,y=o*f-c*u,M=o*d-l*u,w=a*f-c*h,b=a*d-l*h,v=a*u-o*h;return e*(x*_-m*y+g*M)-i*(p*_-m*w+g*b)+n*(p*y-x*w+g*v)-r*(p*M-x*b+m*v)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*o-i*a,y=e*l-n*a,M=e*c-r*a,w=i*l-n*o,b=i*c-r*o,v=n*c-r*l,S=h*x-u*p,L=h*m-d*p,A=h*g-f*p,P=u*m-d*x,k=u*g-f*x,B=d*g-f*m,I=_*B-y*k+M*P+w*A-b*L+v*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return t[0]=(o*B-l*k+c*P)*G,t[1]=(n*k-i*B-r*P)*G,t[2]=(x*v-m*b+g*w)*G,t[3]=(d*b-u*v-f*w)*G,t[4]=(l*A-a*B-c*L)*G,t[5]=(e*B-n*A+r*L)*G,t[6]=(m*M-p*v-g*y)*G,t[7]=(h*v-d*M+f*y)*G,t[8]=(a*k-o*A+c*S)*G,t[9]=(i*A-e*k-r*S)*G,t[10]=(p*b-x*M+g*_)*G,t[11]=(u*M-h*b-f*_)*G,t[12]=(o*L-a*P-l*S)*G,t[13]=(e*P-i*L+n*S)*G,t[14]=(x*y-p*w-m*_)*G,t[15]=(h*w-u*y+d*_)*G,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,x=a*h,m=a*u,g=o*u,_=l*c,y=l*h,M=l*u,w=i.x,b=i.y,v=i.z;return n[0]=(1-(x+g))*w,n[1]=(f+M)*w,n[2]=(p-y)*w,n[3]=0,n[4]=(f-M)*b,n[5]=(1-(d+g))*b,n[6]=(m+_)*b,n[7]=0,n[8]=(p+y)*v,n[9]=(m-_)*v,n[10]=(1-(d+x))*v,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=In.set(n[0],n[1],n[2]).length();const o=In.set(n[4],n[5],n[6]).length(),l=In.set(n[8],n[9],n[10]).length();r<0&&(a=-a),yi.copy(this);const c=1/a,h=1/o,u=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,e.setFromRotationMatrix(yi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Ti,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n);let p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Ti)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Fs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Ti,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n);let p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Ti)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Fs)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};qr.prototype.isMatrix4=!0;let _e=qr;const In=new D,yi=new _e,hd=new D(0,0,0),ud=new D(1,1,1),tn=new D,Zs=new D,fi=new D,Dl=new _e,Nl=new cs;class fn{constructor(t=0,e=0,i=0,n=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class xh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dd=0;const Ul=new D,Dn=new cs,Gi=new _e,Ks=new D,ds=new D,fd=new D,pd=new cs,Ol=new D(1,0,0),Fl=new D(0,1,0),zl=new D(0,0,1),kl={type:"added"},md={type:"removed"},Nn={type:"childadded",child:null},ca={type:"childremoved",child:null};class Ee extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new D,e=new fn,i=new cs,n=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new _e},normalMatrix:{value:new ie}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(zl,t)}translateOnAxis(t,e){return Ul.copy(t).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ks.copy(t):Ks.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ds,Ks,this.up):Gi.lookAt(Ks,ds,this.up),this.quaternion.setFromRotationMatrix(Gi),n&&(Gi.extractRotation(n.matrixWorld),Dn.setFromRotationMatrix(Gi),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kl),Nn.child=t,this.dispatchEvent(Nn),Nn.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),ca.child=t,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kl),Nn.child=t,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ee.DEFAULT_UP=new D(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gd={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ua(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=xe.workingColorSpace){if(t=$o(t,1),e=de(e,0,1),i=de(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ua(a,r,t+1/3),this.g=ua(a,r,t),this.b=ua(a,r,t-1/3)}return xe.colorSpaceToWorking(this,n),this}setStyle(t,e=si){function i(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const i=vh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return xe.workingToColorSpace(ni.copy(this),t),Math.round(de(ni.r*255,0,255))*65536+Math.round(de(ni.g*255,0,255))*256+Math.round(de(ni.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(ni.copy(this),e);const i=ni.r,n=ni.g,r=ni.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(ni.copy(this),e),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=si){xe.workingToColorSpace(ni.copy(this),t);const e=ni.r,i=ni.g,n=ni.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(en),this.setHSL(en.h+t,en.s+e,en.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(en),t.getHSL(Js);const i=Ls(en.h,Js.h,e),n=Ls(en.s,Js.s,e),r=Ls(en.l,Js.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Wt;Wt.NAMES=vh;class Qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(t),this.density=e}clone(){return new Qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xd extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const wi=new D,Hi=new D,da=new D,Vi=new D,Un=new D,On=new D,Bl=new D,fa=new D,pa=new D,ma=new D,ga=new ze,xa=new ze,va=new ze;class _i{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),wi.subVectors(t,e),n.cross(wi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){wi.subVectors(n,e),Hi.subVectors(i,e),da.subVectors(t,e);const a=wi.dot(wi),o=wi.dot(Hi),l=wi.dot(da),c=Hi.dot(Hi),h=Hi.dot(da),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return ga.setScalar(0),xa.setScalar(0),va.setScalar(0),ga.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,i),va.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(ga,r.x),a.addScaledVector(xa,r.y),a.addScaledVector(va,r.z),a}static isFrontFacing(t,e,i,n){return wi.subVectors(i,e),Hi.subVectors(t,e),wi.cross(Hi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),wi.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return _i.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Un.subVectors(n,i),On.subVectors(r,i),fa.subVectors(t,i);const l=Un.dot(fa),c=On.dot(fa);if(l<=0&&c<=0)return e.copy(i);pa.subVectors(t,n);const h=Un.dot(pa),u=On.dot(pa);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Un,a);ma.subVectors(t,r);const f=Un.dot(ma),p=On.dot(ma);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(On,o);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Bl.subVectors(r,n),o=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Bl,o);const g=1/(m+x+d);return a=x*g,o=d*g,e.copy(i).addScaledVector(Un,a).addScaledVector(On,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Cn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Si):Si.fromBufferAttribute(r,a),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),js.subVectors(this.max,fs),Fn.subVectors(t.a,fs),zn.subVectors(t.b,fs),kn.subVectors(t.c,fs),nn.subVectors(zn,Fn),sn.subVectors(kn,zn),vn.subVectors(Fn,kn);let e=[0,-nn.z,nn.y,0,-sn.z,sn.y,0,-vn.z,vn.y,nn.z,0,-nn.x,sn.z,0,-sn.x,vn.z,0,-vn.x,-nn.y,nn.x,0,-sn.y,sn.x,0,-vn.y,vn.x,0];return!_a(e,Fn,zn,kn,js)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,Fn,zn,kn,js))?!1:(tr.crossVectors(nn,sn),e=[tr.x,tr.y,tr.z],_a(e,Fn,zn,kn,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wi=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,Qs=new Cn,Fn=new D,zn=new D,kn=new D,nn=new D,sn=new D,vn=new D,fs=new D,js=new D,tr=new D,_n=new D;function _a(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){_n.fromArray(s,r);const o=n.x*Math.abs(_n.x)+n.y*Math.abs(_n.y)+n.z*Math.abs(_n.z),l=t.dot(_n),c=e.dot(_n),h=i.dot(_n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const He=new D,er=new lt;let vd=0;class Xe extends Rn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=Ei,this.version=0,this._normalizationScale=t!==void 0?Yr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Zo(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ko(t,this.array)}}class _h extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Mh extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}const _d=new Cn,ps=new D,Ma=new D;class Pn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_d.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ps,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Ma)),this.expandByPoint(ps.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Md=0;const xi=new _e,ya=new Ee,Bn=new D,pi=new Cn,ms=new Cn,Ke=new D;class Ie extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?Mh:_h)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,e,i){return xi.makeTranslation(t,e,i),this.applyMatrix4(xi),this}scale(t,e,i){return xi.makeScale(t,e,i),this.applyMatrix4(xi),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bn).negate(),this.translate(Bn.x,Bn.y,Bn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(pi.min,ms.min),pi.expandByPoint(Ke),Ke.addVectors(pi.max,ms.max),pi.expandByPoint(Ke)):(pi.expandByPoint(ms.min),pi.expandByPoint(ms.max))}pi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(Bn.fromBufferAttribute(t,c),Ke.add(Bn)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new D,l[L]=new D;const h=new D,u=new D,d=new D,f=new lt,p=new lt,x=new lt,m=new D,g=new D;function _(L,A,P){c[L]=c[A]=c[P]=1,h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,P),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,A),x.fromBufferAttribute(r,P),u.sub(h),d.sub(h),p.sub(f),x.sub(f);const k=1/(p.x*x.y-x.x*p.y);isFinite(k)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(k),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(k),o[L].add(m),o[A].add(m),o[P].add(m),l[L].add(g),l[A].add(g),l[P].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,A=y.length;L<A;++L){const P=y[L],k=P.start,B=P.count;for(let I=k,G=k+B;I<G;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const M=new D,w=new D,b=new D,v=new D;function S(L){b.fromBufferAttribute(n,L),v.copy(b);const A=o[L];M.copy(A),M.sub(b.multiplyScalar(b.dot(A))).normalize(),w.crossVectors(v,A);const k=w.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,k)}for(let L=0,A=i.count;L<A;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Xe(d,h,u)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Gl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Gl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Gl(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ji()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const oi=new D;class Gr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Yr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix4(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.applyNormalMatrix(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oi.fromBufferAttribute(this,e),oi.transformDirection(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Zo(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ko(t,this.data.array)}}const wa=new D,wd=new D,Sd=new ie;class an{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=wa.subVectors(i,e).cross(wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(wa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Sd.getNormalMatrix(t),n=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let bd=0;class pn extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Sn,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Zc,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new an().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class To extends pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gn;const gs=new D,Hn=new D,Vn=new D,Wn=new lt,xs=new lt,yh=new _e,ir=new D,vs=new D,nr=new D,Hl=new lt,Sa=new lt,Vl=new lt;class Wl extends Ee{constructor(t=new To){if(super(),this.isSprite=!0,this.type="Sprite",Gn===void 0){Gn=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yd(e,5);Gn.setIndex([0,1,2,0,2,3]),Gn.setAttribute("position",new Gr(i,3,0,!1)),Gn.setAttribute("uv",new Gr(i,2,3,!1))}this.geometry=Gn,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&we('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hn.setFromMatrixScale(this.matrixWorld),yh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hn.multiplyScalar(-Vn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;sr(ir.set(-.5,-.5,0),Vn,a,Hn,n,r),sr(vs.set(.5,-.5,0),Vn,a,Hn,n,r),sr(nr.set(.5,.5,0),Vn,a,Hn,n,r),Hl.set(0,0),Sa.set(1,0),Vl.set(1,1);let o=t.ray.intersectTriangle(ir,vs,nr,!1,gs);if(o===null&&(sr(vs.set(-.5,.5,0),Vn,a,Hn,n,r),Sa.set(0,1),o=t.ray.intersectTriangle(ir,nr,vs,!1,gs),o===null))return;const l=t.ray.origin.distanceTo(gs);l<t.near||l>t.far||e.push({distance:l,point:gs.clone(),uv:_i.getInterpolation(gs,ir,vs,nr,Hl,Sa,Vl,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function sr(s,t,e,i,n,r){Wn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(xs.x=r*Wn.x-n*Wn.y,xs.y=n*Wn.x+r*Wn.y):xs.copy(Wn),s.copy(t),s.x+=xs.x,s.y+=xs.y,s.applyMatrix4(yh)}const Xi=new D,ba=new D,rr=new D,ar=new D;class jo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){ba.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),ar.copy(this.origin).sub(ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=ar.dot(this.direction),l=-ar.dot(rr),c=ar.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ba).addScaledVector(rr,d),f}intersectSphere(t,e){if(t.radius<0)return null;Xi.subVectors(t.center,this.origin);const i=Xi.dot(this.direction),n=Xi.dot(Xi)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,_=i.y-a.y,y=i.z-a.z,M=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let v,S,L,A,P,k,B,I,G,W,H,ot;if(M>=w&&M>=b?(L=l,k=u,G=p,ot=g,l>=0?(v=c,S=h,A=d,P=f,B=x,I=m,W=_,H=y):(v=h,S=c,A=f,P=d,B=m,I=x,W=y,H=_)):w>=b?(L=c,k=d,G=x,ot=_,c>=0?(v=h,S=l,A=f,P=u,B=m,I=p,W=y,H=g):(v=l,S=h,A=u,P=f,B=p,I=m,W=g,H=y)):(L=h,k=f,G=m,ot=y,h>=0?(v=l,S=c,A=u,P=d,B=p,I=x,W=g,H=_):(v=c,S=l,A=d,P=u,B=x,I=p,W=_,H=g)),L===0)return null;const Z=v/L,nt=S/L,st=1/L,Mt=A-Z*k,Nt=P-nt*k,J=B-Z*G,At=I-nt*G,Ot=W-Z*ot,Xt=H-nt*ot,Rt=Ot*At-Xt*J,Bt=Mt*Xt-Nt*Ot,Se=J*Nt-At*Mt;if(n){if(Rt<0||Bt<0||Se<0)return null}else if((Rt<0||Bt<0||Se<0)&&(Rt>0||Bt>0||Se>0))return null;const qt=Rt+Bt+Se;if(qt===0)return null;const ne=st*(Rt*k+Bt*G+Se*ot);return(qt>0?ne<0:ne>0)?null:this.at(ne/qt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee extends pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xl=new _e,Mn=new jo,or=new Pn,ql=new D,lr=new D,cr=new D,hr=new D,Ea=new D,ur=new D,Yl=new D,dr=new D;class C extends Ee{constructor(t=new Ie,e=new ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,t),a?ur.addScaledVector(Ea,h):ur.addScaledVector(Ea.sub(e),h))}e.add(ur)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(r),Mn.copy(t.ray).recast(t.near),!(or.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(or,ql)===null||Mn.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),Mn.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&Mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,w=y;M<w;M+=3){const b=o.getX(M),v=o.getX(M+1),S=o.getX(M+2);n=fr(this,g,t,i,c,h,u,b,v,S),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);n=fr(this,a,t,i,c,h,u,_,y,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,w=y;M<w;M+=3){const b=M,v=M+1,S=M+2;n=fr(this,g,t,i,c,h,u,b,v,S),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const _=m,y=m+1,M=m+2;n=fr(this,a,t,i,c,h,u,_,y,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Ed(s,t,e,i,n,r,a,o){let l;if(t.side===hi?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===bn,o),l===null)return null;dr.copy(o),dr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:s}}function fr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,lr),s.getVertexPosition(l,cr),s.getVertexPosition(c,hr);const h=Ed(s,t,e,i,lr,cr,hr,Yl);if(h){const u=new D;_i.getBarycoord(Yl,lr,cr,hr,u),n&&(h.uv=_i.getInterpolatedAttribute(n,o,l,c,u,new lt)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,l,c,u,new lt)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};_i.getNormal(lr,cr,hr,d.normal),h.face=d,h.barycoord=u}return h}class wh extends ri{constructor(t=null,e=1,i=1,n,r,a,o,l,c=je,h=je,u,d){super(null,a,o,l,c,h,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao extends Xe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xn=new _e,$l=new _e,pr=[],Zl=new Cn,Td=new _e,_s=new C,Ms=new Pn;class Oe extends C{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Td)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xn),Zl.copy(t.boundingBox).applyMatrix4(Xn),this.boundingBox.union(Zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xn),Ms.copy(t.boundingSphere).applyMatrix4(Xn),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(i),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Xn),$l.multiplyMatrices(i,Xn),_s.matrixWorld=$l,_s.raycast(t,pr);for(let a=0,o=pr.length;a<o;a++){const l=pr[a];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new wh(new Float32Array(n*this.count),n,this.count,Wo,Ei));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yn=new Pn,Ad=new lt(.5,.5),mr=new D;class ks{constructor(t=new an,e=new an,i=new an,n=new an,r=new an,a=new an){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ti,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],y=r[13],M=r[14],w=r[15];if(n[0].setComponents(c-a,f-h,g-p,w-_).normalize(),n[1].setComponents(c+a,f+h,g+p,w+_).normalize(),n[2].setComponents(c+o,f+u,g+x,w+y).normalize(),n[3].setComponents(c-o,f-u,g-x,w-y).normalize(),i)n[4].setComponents(l,d,m,M).normalize(),n[5].setComponents(c-l,f-d,g-m,w-M).normalize();else if(n[4].setComponents(c-l,f-d,g-m,w-M).normalize(),e===Ti)n[5].setComponents(c+l,f+d,g+m,w+M).normalize();else if(e===Fs)n[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){yn.center.set(0,0,0);const e=Ad.distanceTo(t.center);return yn.radius=.7071067811865476+e,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(mr.x=n.normal.x>0?t.max.x:t.min.x,mr.y=n.normal.y>0?t.max.y:t.min.y,mr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Kl=new _e;class tl{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];Kl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new ks),i[n].setFromProjectionMatrix(Kl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new ks),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new tl().copy(this)}}class Sh extends pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new D,Vr=new D,Jl=new _e,ys=new jo,gr=new Pn,Ta=new D,Ql=new D;class Rd extends Ee{constructor(t=new Ie,e=new Sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Hr.fromBufferAttribute(e,n-1),Vr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Te(i,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(n),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;Jl.copy(n).invert(),ys.copy(t.ray).applyMatrix4(Jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){const g=h.getX(x),_=h.getX(x+1),y=xr(this,t,ys,l,g,_,x);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=xr(this,t,ys,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){const g=xr(this,t,ys,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=xr(this,t,ys,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xr(s,t,e,i,n,r,a){const o=s.geometry.attributes.position;if(Hr.fromBufferAttribute(o,n),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Vr,Ta,Ql)>i)return;Ta.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ta);if(!(c<t.near||c>t.far))return{distance:c,point:Ql.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const jl=new D,tc=new D;class Cd extends Rd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)jl.fromBufferAttribute(e,n),tc.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jl.distanceTo(tc);t.setAttribute("lineDistance",new Te(i,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jn extends pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ec=new _e,Ro=new jo,vr=new Pn,_r=new D;class ts extends Ee{constructor(t=new Ie,e=new jn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(n),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;ec.copy(n).invert(),Ro.copy(t.ray).applyMatrix4(ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,x=f;p<x;p++){const m=c.getX(p);_r.fromBufferAttribute(u,m),ic(_r,m,l,n,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)_r.fromBufferAttribute(u,p),ic(_r,p,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ic(s,t,e,i,n,r,a){const o=Ro.distanceSqToPoint(s);if(o<e){const l=new D;Ro.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class bh extends ri{constructor(t=[],e=ns,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class el extends ri{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends ri{constructor(t,e,i=Oi,n,r,a,o=je,l=je,c,h=dn,u=1){if(h!==dn&&h!==cn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Eh extends rs{constructor(t,e=Oi,i=ns,n,r,a=je,o=je,l,c=dn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Th extends ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class N extends Ie{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function p(x,m,g,_,y,M,w,b,v,S,L){const A=M/v,P=w/S,k=M/2,B=w/2,I=b/2,G=v+1,W=S+1;let H=0,ot=0;const Z=new D;for(let nt=0;nt<W;nt++){const st=nt*P-B;for(let Mt=0;Mt<G;Mt++){const Nt=Mt*A-k;Z[x]=Nt*_,Z[m]=st*y,Z[g]=I,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Mt/v),u.push(1-nt/S),H+=1}}for(let nt=0;nt<S;nt++)for(let st=0;st<v;st++){const Mt=d+st+G*nt,Nt=d+st+G*(nt+1),J=d+(st+1)+G*(nt+1),At=d+(st+1)+G*nt;l.push(Mt,Nt,At),l.push(Nt,J,At),ot+=6}o.addGroup(f,ot,L),f+=ot,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new N(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Di extends Ie{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+r,x=n+1,m=new D,g=new D;for(let _=0;_<=p;_++){let y=0,M=0,w=0,b=0;if(_<=i){const L=_/i,A=L*Math.PI/2;M=-h-t*Math.cos(A),w=t*Math.sin(A),b=-t*Math.cos(A),y=L*u}else if(_<=i+r){const L=(_-i)/r;M=-h+L*e,w=t,b=0,y=u+L*d}else{const L=(_-i-r)/i,A=L*Math.PI/2;M=h+t*Math.sin(A),w=t*Math.cos(A),b=t*Math.sin(A),y=u+d+L*u}const v=Math.max(0,Math.min(1,y/f));let S=0;_===0?S=.5/n:_===p&&(S=-.5/n);for(let L=0;L<=n;L++){const A=L/n,P=A*Math.PI*2,k=Math.sin(P),B=Math.cos(P);g.x=-w*B,g.y=M,g.z=w*k,o.push(g.x,g.y,g.z),m.set(-w*B,b,w*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+S,v)}if(_>0){const L=(_-1)*x;for(let A=0;A<n;A++){const P=L+A,k=L+A+1,B=_*x+A,I=_*x+A+1;a.push(P,k,B),a.push(k,I,B)}}}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class as extends Ie{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new D,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class te extends Ie{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const x=[],m=i/2;let g=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function _(){const M=new D,w=new D;let b=0;const v=(e-t)/i;for(let S=0;S<=r;S++){const L=[],A=S/r,P=A*(e-t)+t;for(let k=0;k<=n;k++){const B=k/n,I=B*l+o,G=Math.sin(I),W=Math.cos(I);w.x=P*G,w.y=-A*i+m,w.z=P*W,u.push(w.x,w.y,w.z),M.set(G,v,W).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-A),L.push(p++)}x.push(L)}for(let S=0;S<n;S++)for(let L=0;L<r;L++){const A=x[L][S],P=x[L+1][S],k=x[L+1][S+1],B=x[L][S+1];(t>0||L!==0)&&(h.push(A,P,B),b+=3),(e>0||L!==r-1)&&(h.push(P,k,B),b+=3)}c.addGroup(g,b,0),g+=b}function y(M){const w=p,b=new lt,v=new D;let S=0;const L=M===!0?t:e,A=M===!0?1:-1;for(let k=1;k<=n;k++)u.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),p++;const P=p;for(let k=0;k<=n;k++){const I=k/n*l+o,G=Math.cos(I),W=Math.sin(I);v.x=L*W,v.y=m*A,v.z=L*G,u.push(v.x,v.y,v.z),d.push(0,A,0),b.x=G*.5+.5,b.y=W*.5*A+.5,f.push(b.x,b.y),p++}for(let k=0;k<n;k++){const B=w+k,I=P+k;M===!0?h.push(I,I+1,B):h.push(I+1,I,B),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ri extends te{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ri(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $r extends Ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new D,M=new D,w=new D;for(let b=0;b<e.length;b+=3)f(e[b+0],y),f(e[b+1],M),f(e[b+2],w),l(y,M,w,_)}function l(_,y,M,w){const b=w+1,v=[];for(let S=0;S<=b;S++){v[S]=[];const L=_.clone().lerp(M,S/b),A=y.clone().lerp(M,S/b),P=b-S;for(let k=0;k<=P;k++)k===0&&S===b?v[S][k]=L:v[S][k]=L.clone().lerp(A,k/P)}for(let S=0;S<b;S++)for(let L=0;L<2*(b-S)-1;L++){const A=Math.floor(L/2);L%2===0?(d(v[S][A+1]),d(v[S+1][A]),d(v[S][A])):(d(v[S][A+1]),d(v[S+1][A+1]),d(v[S+1][A]))}}function c(_){const y=new D;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const _=new D;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const M=m(_)/2/Math.PI+.5,w=g(_)/Math.PI+.5;a.push(M,1-w)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){const y=a[_+0],M=a[_+2],w=a[_+4],b=Math.max(y,M,w),v=Math.min(y,M,w);b>.9&&v<.1&&(y<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),w<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){const M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){const _=new D,y=new D,M=new D,w=new D,b=new lt,v=new lt,S=new lt;for(let L=0,A=0;L<r.length;L+=9,A+=6){_.set(r[L+0],r[L+1],r[L+2]),y.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),b.set(a[A+0],a[A+1]),v.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),w.copy(_).add(y).add(M).divideScalar(3);const P=m(w);x(b,A+0,_,P),x(v,A+2,y,P),x(S,A+4,M,P)}}function x(_,y,M,w){w<0&&_.x===1&&(a[y]=_.x-1),M.x===0&&M.z===0&&(a[y]=w/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.vertices,t.indices,t.radius,t.detail)}}class il extends $r{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new il(t.radius,t.detail)}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new lt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,n=[],r=[],a=[],o=new D,l=new _e;for(let f=0;f<=t;f++){const p=f/t;n[f]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(de(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(de(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class nl extends ki{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pd extends nl{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const nc=new D,sc=new D,Aa=new sl,Ra=new sl,Ca=new sl;class Ld extends ki{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(sc.subVectors(n[0],n[1]).add(n[0]),c=sc);const u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(nc.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=nc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Aa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),Ra.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),Ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ra.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Aa.calc(l),Ra.calc(l),Ca.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rc(s,t,e,i,n){const r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Id(s,t){const e=1-s;return e*e*t}function Dd(s,t){return 2*(1-s)*s*t}function Nd(s,t){return s*s*t}function Is(s,t,e,i){return Id(s,t)+Dd(s,e)+Nd(s,i)}function Ud(s,t){const e=1-s;return e*e*e*t}function Od(s,t){const e=1-s;return 3*e*e*s*t}function Fd(s,t){return 3*(1-s)*s*s*t}function zd(s,t){return s*s*s*t}function Ds(s,t,e,i,n){return Ud(s,t)+Od(s,e)+Fd(s,i)+zd(s,n)}class Ah extends ki{constructor(t=new lt,e=new lt,i=new lt,n=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new lt){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ds(t,n.x,r.x,a.x,o.x),Ds(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kd extends ki{constructor(t=new D,e=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new D){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ds(t,n.x,r.x,a.x,o.x),Ds(t,n.y,r.y,a.y,o.y),Ds(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rh extends ki{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends ki{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends ki{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Is(t,n.x,r.x,a.x),Is(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gd extends ki{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Is(t,n.x,r.x,a.x),Is(t,n.y,r.y,a.y),Is(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(rc(o,l.x,c.x,h.x,u.x),rc(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new lt().fromArray(n))}return this}}var Co=Object.freeze({__proto__:null,ArcCurve:Pd,CatmullRomCurve3:Ld,CubicBezierCurve:Ah,CubicBezierCurve3:kd,EllipseCurve:nl,LineCurve:Rh,LineCurve3:Bd,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:Gd,SplineCurve:Ph});class Hd extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Co[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Co[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class ac extends Hd{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Rh(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Ch(this.currentPoint.clone(),new lt(t,e),new lt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){const o=new Ah(this.currentPoint.clone(),new lt(t,e),new lt(i,n),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ph(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){const c=new nl(t,e,i,n,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Lh extends ac{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new ac().fromJSON(n))}return this}}function Vd(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=Ih(s,0,n,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=$d(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let d=e;d<n;d+=e){const f=s[d],p=s[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Bs(r,a,e,o,l,c,0),a}function Ih(s,t,e,i,n){let r;if(n===af(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=oc(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=oc(a/i|0,s[a],s[a+1],r);return r&&os(r,r.next)&&(Hs(r),r=r.next),r}function Tn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(os(e,e.next)||ke(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Bs(s,t,e,i,n,r,a){if(!s)return;!a&&r&&jd(s,i,n,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Xd(s,i,n,r):Wd(s)){t.push(l.i,s.i,c.i),Hs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=qd(Tn(s),t),Bs(s,t,e,i,n,r,2)):a===2&&Yd(s,t,e,i,n,r):Bs(Tn(s),t,e,i,n,r,1);break}}}function Wd(s){const t=s.prev,e=s,i=s.next;if(ke(t,e,i)>=0)return!1;const n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,r,a),u=Math.min(o,l,c),d=Math.max(n,r,a),f=Math.max(o,l,c);let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Es(n,o,r,l,a,c,p.x,p.y)&&ke(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Xd(s,t,e,i){const n=s.prev,r=s,a=s.next;if(ke(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),g=Po(f,p,t,e,i),_=Po(x,m,t,e,i);let y=s.prevZ,M=s.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Es(o,h,l,u,c,d,y.x,y.y)&&ke(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==n&&M!==a&&Es(o,h,l,u,c,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Es(o,h,l,u,c,d,y.x,y.y)&&ke(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==n&&M!==a&&Es(o,h,l,u,c,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function qd(s,t){let e=s;do{const i=e.prev,n=e.next.next;!os(i,n)&&Nh(i,e,e.next,n)&&Gs(i,n)&&Gs(n,i)&&(t.push(i.i,e.i,n.i),Hs(e),Hs(e.next),e=s=n),e=e.next}while(e!==s);return Tn(e)}function Yd(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nf(a,o)){let l=Uh(a,o);a=Tn(a,a.next),l=Tn(l,l.next),Bs(a,t,e,i,n,r,0),Bs(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function $d(s,t,e,i){const n=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=Ih(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(ef(c))}n.sort(Zd);for(let r=0;r<n.length;r++)e=Kd(n[r],e);return e}function Zd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Kd(s,t){const e=Jd(s,t);if(!e)return t;const i=Uh(e,s);return Tn(i,i.next),Tn(e,e.next)}function Jd(s,t){let e=t;const i=s.x,n=s.y;let r=-1/0,a;if(os(s,e))return e;do{if(os(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Dh(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){const u=Math.abs(n-e.y)/(i-e.x);Gs(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Qd(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Qd(s,t){return ke(s.prev,s,t.prev)<0&&ke(t.next,s,s.next)<0}function jd(s,t,e,i){let n=s;do n.z===0&&(n.z=Po(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,tf(n)}function tf(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function Po(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ef(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Dh(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Es(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&Dh(s,t,e,i,n,r,a,o)}function nf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!sf(s,t)&&(Gs(s,t)&&Gs(t,s)&&rf(s,t)&&(ke(s.prev,s,t.prev)||ke(s,t.prev,t))||os(s,t)&&ke(s.prev,s,s.next)>0&&ke(t.prev,t,t.next)>0)}function ke(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function os(s,t){return s.x===t.x&&s.y===t.y}function Nh(s,t,e,i){const n=yr(ke(s,t,e)),r=yr(ke(s,t,i)),a=yr(ke(e,i,s)),o=yr(ke(e,i,t));return!!(n!==r&&a!==o||n===0&&Mr(s,e,t)||r===0&&Mr(s,i,t)||a===0&&Mr(e,s,i)||o===0&&Mr(e,t,i))}function Mr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function yr(s){return s>0?1:s<0?-1:0}function sf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Nh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Gs(s,t){return ke(s.prev,s,s.next)<0?ke(s,t,s.next)>=0&&ke(s,s.prev,t)>=0:ke(s,t,s.prev)<0||ke(s,s.next,t)<0}function rf(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Uh(s,t){const e=Lo(s.i,s.x,s.y),i=Lo(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function oc(s,t,e,i){const n=Lo(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Hs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Lo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function af(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class of{static triangulate(t,e,i=2){return Vd(t,e,i)}}class Kn{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return Kn.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];lc(t),cc(i,t);let a=t.length;e.forEach(lc);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,cc(i,e[l]);const o=of.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function lc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function cc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class rl extends Ie{constructor(t=new Lh([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Te(n,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:lf;let y,M=!1,w,b,v,S;if(g){y=g.getSpacedPoints(h),M=!0,d=!1;const at=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,at),b=new D,v=new D,S=new D}d||(m=0,f=0,p=0,x=0);const L=o.extractPoints(c);let A=L.shape;const P=L.holes;if(!Kn.isClockWise(A)){A=A.reverse();for(let at=0,pt=P.length;at<pt;at++){const mt=P[at];Kn.isClockWise(mt)&&(P[at]=mt.reverse())}}function B(at){const mt=10000000000000001e-36;let Ut=at[0];for(let yt=1;yt<=at.length;yt++){const V=yt%at.length,$=at[V],ct=$.x-Ut.x,Ct=$.y-Ut.y,Ht=ct*ct+Ct*Ct,O=Math.max(Math.abs($.x),Math.abs($.y),Math.abs(Ut.x),Math.abs(Ut.y)),fe=mt*O*O;if(Ht<=fe){at.splice(V,1),yt--;continue}Ut=$}}B(A),P.forEach(B);const I=P.length,G=A;for(let at=0;at<I;at++){const pt=P[at];A=A.concat(pt)}function W(at,pt,mt){return pt||we("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(pt,mt)}const H=A.length;function ot(at,pt,mt){let Ut,yt,V;const $=at.x-pt.x,ct=at.y-pt.y,Ct=mt.x-at.x,Ht=mt.y-at.y,O=$*$+ct*ct,fe=$*Ht-ct*Ct;if(Math.abs(fe)>Number.EPSILON){const Jt=Math.sqrt(O),Me=Math.sqrt(Ct*Ct+Ht*Ht),xt=pt.x-ct/Jt,Le=pt.y+$/Jt,Zt=mt.x-Ht/Me,Qt=mt.y+Ct/Me,R=((Zt-xt)*Ht-(Qt-Le)*Ct)/($*Ht-ct*Ct);Ut=xt+$*R-at.x,yt=Le+ct*R-at.y;const E=Ut*Ut+yt*yt;if(E<=2)return new lt(Ut,yt);V=Math.sqrt(E/2)}else{let Jt=!1;$>Number.EPSILON?Ct>Number.EPSILON&&(Jt=!0):$<-Number.EPSILON?Ct<-Number.EPSILON&&(Jt=!0):Math.sign(ct)===Math.sign(Ht)&&(Jt=!0),Jt?(Ut=-ct,yt=$,V=Math.sqrt(O)):(Ut=$,yt=ct,V=Math.sqrt(O/2))}return new lt(Ut/V,yt/V)}const Z=[];for(let at=0,pt=G.length,mt=pt-1,Ut=at+1;at<pt;at++,mt++,Ut++)mt===pt&&(mt=0),Ut===pt&&(Ut=0),Z[at]=ot(G[at],G[mt],G[Ut]);const nt=[];let st,Mt=Z.concat();for(let at=0,pt=I;at<pt;at++){const mt=P[at];st=[];for(let Ut=0,yt=mt.length,V=yt-1,$=Ut+1;Ut<yt;Ut++,V++,$++)V===yt&&(V=0),$===yt&&($=0),st[Ut]=ot(mt[Ut],mt[V],mt[$]);nt.push(st),Mt=Mt.concat(st)}let Nt;if(m===0)Nt=Kn.triangulateShape(G,P);else{const at=[],pt=[];for(let mt=0;mt<m;mt++){const Ut=mt/m,yt=f*Math.cos(Ut*Math.PI/2),V=p*Math.sin(Ut*Math.PI/2)+x;for(let $=0,ct=G.length;$<ct;$++){const Ct=W(G[$],Z[$],V);Bt(Ct.x,Ct.y,-yt),Ut===0&&at.push(Ct)}for(let $=0,ct=I;$<ct;$++){const Ct=P[$];st=nt[$];const Ht=[];for(let O=0,fe=Ct.length;O<fe;O++){const Jt=W(Ct[O],st[O],V);Bt(Jt.x,Jt.y,-yt),Ut===0&&Ht.push(Jt)}Ut===0&&pt.push(Ht)}}Nt=Kn.triangulateShape(at,pt)}const J=Nt.length,At=p+x;for(let at=0;at<H;at++){const pt=d?W(A[at],Mt[at],At):A[at];M?(v.copy(w.normals[0]).multiplyScalar(pt.x),b.copy(w.binormals[0]).multiplyScalar(pt.y),S.copy(y[0]).add(v).add(b),Bt(S.x,S.y,S.z)):Bt(pt.x,pt.y,0)}for(let at=1;at<=h;at++)for(let pt=0;pt<H;pt++){const mt=d?W(A[pt],Mt[pt],At):A[pt];M?(v.copy(w.normals[at]).multiplyScalar(mt.x),b.copy(w.binormals[at]).multiplyScalar(mt.y),S.copy(y[at]).add(v).add(b),Bt(S.x,S.y,S.z)):Bt(mt.x,mt.y,u/h*at)}for(let at=m-1;at>=0;at--){const pt=at/m,mt=f*Math.cos(pt*Math.PI/2),Ut=p*Math.sin(pt*Math.PI/2)+x;for(let yt=0,V=G.length;yt<V;yt++){const $=W(G[yt],Z[yt],Ut);Bt($.x,$.y,u+mt)}for(let yt=0,V=P.length;yt<V;yt++){const $=P[yt];st=nt[yt];for(let ct=0,Ct=$.length;ct<Ct;ct++){const Ht=W($[ct],st[ct],Ut);M?Bt(Ht.x,Ht.y+y[h-1].y,y[h-1].x+mt):Bt(Ht.x,Ht.y,u+mt)}}}Ot(),Xt();function Ot(){const at=n.length/3;if(d){let pt=0,mt=H*pt;for(let Ut=0;Ut<J;Ut++){const yt=Nt[Ut];Se(yt[2]+mt,yt[1]+mt,yt[0]+mt)}pt=h+m*2,mt=H*pt;for(let Ut=0;Ut<J;Ut++){const yt=Nt[Ut];Se(yt[0]+mt,yt[1]+mt,yt[2]+mt)}}else{for(let pt=0;pt<J;pt++){const mt=Nt[pt];Se(mt[2],mt[1],mt[0])}for(let pt=0;pt<J;pt++){const mt=Nt[pt];Se(mt[0]+H*h,mt[1]+H*h,mt[2]+H*h)}}i.addGroup(at,n.length/3-at,0)}function Xt(){const at=n.length/3;let pt=0;Rt(G,pt),pt+=G.length;for(let mt=0,Ut=P.length;mt<Ut;mt++){const yt=P[mt];Rt(yt,pt),pt+=yt.length}i.addGroup(at,n.length/3-at,1)}function Rt(at,pt){let mt=at.length;for(;--mt>=0;){const Ut=mt;let yt=mt-1;yt<0&&(yt=at.length-1);for(let V=0,$=h+m*2;V<$;V++){const ct=H*V,Ct=H*(V+1),Ht=pt+Ut+ct,O=pt+yt+ct,fe=pt+yt+Ct,Jt=pt+Ut+Ct;qt(Ht,O,fe,Jt)}}}function Bt(at,pt,mt){l.push(at),l.push(pt),l.push(mt)}function Se(at,pt,mt){ne(at),ne(pt),ne(mt);const Ut=n.length/3,yt=_.generateTopUV(i,n,Ut-3,Ut-2,Ut-1);le(yt[0]),le(yt[1]),le(yt[2])}function qt(at,pt,mt,Ut){ne(at),ne(pt),ne(Ut),ne(pt),ne(mt),ne(Ut);const yt=n.length/3,V=_.generateSideWallUV(i,n,yt-6,yt-3,yt-2,yt-1);le(V[0]),le(V[1]),le(V[3]),le(V[1]),le(V[2]),le(V[3])}function ne(at){n.push(l[at*3+0]),n.push(l[at*3+1]),n.push(l[at*3+2])}function le(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return cf(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Co[n.type]().fromJSON(n)),new rl(i,t.options)}}const lf={generateTopUV:function(s,t,e,i,n){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(d,1-p),new lt(x,1-g)]:[new lt(o,1-l),new lt(h,1-u),new lt(f,1-p),new lt(m,1-g)]}};function cf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ws extends $r{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ws(t.radius,t.detail)}}class ue extends Ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const _=g*d-a;for(let y=0;y<c;y++){const M=y*u-r;p.push(M,-_,0),x.push(0,0,1),m.push(y/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){const y=_+c*g,M=_+c*(g+1),w=_+1+c*(g+1),b=_+1+c*g;f.push(y,M,b),f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.widthSegments,t.heightSegments)}}class al extends Ie{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/n,f=new D,p=new lt;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const g=r+m/i*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){const m=x*(i+1);for(let g=0;g<i;g++){const _=g+m,y=_,M=_+i+1,w=_+i+2,b=_+1;o.push(y,M,b),o.push(M,w,b)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ne extends Ie{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){const _=[],y=g/i,M=a+y*o,w=t*Math.cos(M),b=Math.sqrt(t*t-w*w);let v=0;g===0&&a===0?v=.5/e:g===i&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){const L=S/e,A=n+L*r;u.x=-b*Math.cos(A),u.y=w,u.z=b*Math.sin(A),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(L+v,1-y),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<e;_++){const y=h[g][_+1],M=h[g][_],w=h[g+1][_],b=h[g+1][_+1];(g!==0||a>0)&&f.push(y,M,b),(g!==i-1||l<Math.PI)&&f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ls(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(hc(n))n.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(hc(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function li(s){const t={};for(let e=0;e<s.length;e++){const i=ls(s[e]);for(const n in i)t[n]=i[n]}return t}function hc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Oh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const uf={clone:ls,merge:li};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(n.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new D().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ze().fromArray(n.value);break;case"m3":this.uniforms[i].value=new ie().fromArray(n.value);break;case"m4":this.uniforms[i].value=new _e().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class pf extends zi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class z extends pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mf extends pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gf extends pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zr extends Ee{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class xf extends Zr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Pa=new _e,uc=new D,dc=new D;class Fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Pa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Fs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const wr=new D,Sr=new cs,Pi=new D;class zh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wr,Sr,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Sr,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(wr,Sr,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wr,Sr,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rn=new D,fc=new lt,pc=new lt;class vi extends zh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rn.x,rn.y).multiplyScalar(-t/rn.z),rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rn.x,rn.y).multiplyScalar(-t/rn.z)}getViewSize(t,e){return this.getViewBounds(t,fc,pc),e.subVectors(pc,fc)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class vf extends Fh{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0}}class An extends Zr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new vf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class kh extends zh{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _f extends Fh{constructor(){super(new kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mf extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new _f}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class yf extends Zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const qn=-90,Yn=1;class Io extends Ee{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new vi(qn,Yn,t,e);n.layers=this.layers,this.add(n);const r=new vi(qn,Yn,t,e);r.layers=this.layers,this.add(r);const a=new vi(qn,Yn,t,e);a.layers=this.layers,this.add(a);const o=new vi(qn,Yn,t,e);o.layers=this.layers,this.add(o);const l=new vi(qn,Yn,t,e);l.layers=this.layers,this.add(l);const c=new vi(qn,Yn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class wf extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Sf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,jt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mc(s,t,e,i){const n=bf(i);switch(e){case lh:return s*t;case Wo:return s*t/n.components*n.byteLength;case Xo:return s*t/n.components*n.byteLength;case En:return s*t*2/n.components*n.byteLength;case qo:return s*t*2/n.components*n.byteLength;case ch:return s*t*3/n.components*n.byteLength;case Ni:return s*t*4/n.components*n.byteLength;case Yo:return s*t*4/n.components*n.byteLength;case Rr:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pr:case Lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ja:return Math.max(s,16)*Math.max(t,8)/4;case $a:case Ka:return Math.max(s,8)*Math.max(t,8)/2;case Qa:case ja:case eo:case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case to:case Ur:case no:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ao:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case lo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case co:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ho:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case uo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case fo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case go:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _o:case Mo:case yo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wo:case So:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Or:case bo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bf(s){switch(s){case gi:case sh:return{byteLength:1,components:1};case Os:case rh:case Fi:return{byteLength:2,components:1};case Ho:case Vo:return{byteLength:2,components:4};case Oi:case Go:case Ei:return{byteLength:4,components:1};case ah:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);function Bh(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ef(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Tf,alphahash_pars_fragment:Af,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:Lf,aomap_fragment:If,aomap_pars_fragment:Df,batching_pars_vertex:Nf,batching_vertex:Uf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:zf,iridescence_fragment:kf,bumpmap_pars_fragment:Bf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:$f,common:Zf,defaultnormal_vertex:Kf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:jf,emissivemap_pars_fragment:tp,colorspace_fragment:ep,colorspace_pars_fragment:ip,envmap_fragment:np,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:op,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:dp,lightmap_pars_fragment:fp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:vp,lights_toon_pars_fragment:_p,lights_phong_fragment:Mp,lights_phong_pars_fragment:yp,lights_physical_fragment:wp,lights_physical_pars_fragment:Sp,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:Tp,lightprobes_pars_fragment:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Ip,map_pars_fragment:Dp,map_particle_fragment:Np,map_particle_pars_fragment:Up,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Fp,morphinstance_vertex:zp,morphcolor_vertex:kp,morphnormal_vertex:Bp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:Qp,opaque_fragment:jp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:im,dithering_fragment:nm,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:xm,tonemapping_pars_fragment:vm,transmission_fragment:_m,transmission_pars_fragment:Mm,uv_pars_fragment:ym,uv_pars_vertex:wm,uv_vertex:Sm,worldpos_vertex:bm,background_vert:Em,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Lm,depth_frag:Im,distance_vert:Dm,distance_frag:Nm,equirect_vert:Um,equirect_frag:Om,linedashed_vert:Fm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Bm,meshlambert_vert:Gm,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:$m,meshphysical_vert:Zm,meshphysical_frag:Km,meshtoon_vert:Jm,meshtoon_frag:Qm,points_vert:jm,points_frag:t0,shadow_vert:e0,shadow_frag:i0,sprite_vert:n0,sprite_frag:s0},Lt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Ii={basic:{uniforms:li([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:li([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:li([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:li([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:li([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:li([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:li([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:li([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:li([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:li([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:li([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:li([Lt.common,Lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:li([Lt.lights,Lt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ii.physical={uniforms:li([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const br={r:0,b:0,g:0},r0=new _e,Gh=new ie;Gh.set(-1,0,0,0,1,0,0,0,1);function a0(s,t,e,i,n,r){const a=new Wt(0);let o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const M=_.backgroundBlurriness>0;y=t.get(y,M)}return y}function p(_){let y=!1;const M=f(_);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){const M=f(y);M&&M.isCubeTexture?(c===void 0&&(c=new C(new N(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:ls(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gh),c.material.toneMapped=xe.getTransfer(M.colorSpace)!==Re,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new C(new ue(2,2),new zi({name:"BackgroundMaterial",uniforms:ls(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=xe.getTransfer(M.colorSpace)!==Re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(br,Oh(s)),e.buffers.color.setClear(br.r,br.g,br.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:x,dispose:g}}function o0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,a=!1;function o(P,k,B,I,G){let W=!1;const H=u(P,I,B,k);r!==H&&(r=H,c(r.object)),W=f(P,I,B,G),W&&p(P,I,B,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(P,k,B,I),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function u(P,k,B,I){const G=I.wireframe===!0;let W=i[k.id];W===void 0&&(W={},i[k.id]=W);const H=P.isInstancedMesh===!0?P.id:0;let ot=W[H];ot===void 0&&(ot={},W[H]=ot);let Z=ot[B.id];Z===void 0&&(Z={},ot[B.id]=Z);let nt=Z[G];return nt===void 0&&(nt=d(l()),Z[G]=nt),nt}function d(P){const k=[],B=[],I=[];for(let G=0;G<e;G++)k[G]=0,B[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:B,attributeDivisors:I,object:P,attributes:{},index:null}}function f(P,k,B,I){const G=r.attributes,W=k.attributes;let H=0;const ot=B.getAttributes();for(const Z in ot)if(ot[Z].location>=0){const st=G[Z];let Mt=W[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Mt=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Mt=P.instanceColor)),st===void 0||st.attribute!==Mt||Mt&&st.data!==Mt.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(P,k,B,I){const G={},W=k.attributes;let H=0;const ot=B.getAttributes();for(const Z in ot)if(ot[Z].location>=0){let st=W[Z];st===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(st=P.instanceColor));const Mt={};Mt.attribute=st,st&&st.data&&(Mt.data=st.data),G[Z]=Mt,H++}r.attributes=G,r.attributesNum=H,r.index=I}function x(){const P=r.newAttributes;for(let k=0,B=P.length;k<B;k++)P[k]=0}function m(P){g(P,0)}function g(P,k){const B=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;B[P]=1,I[P]===0&&(s.enableVertexAttribArray(P),I[P]=1),G[P]!==k&&(s.vertexAttribDivisor(P,k),G[P]=k)}function _(){const P=r.newAttributes,k=r.enabledAttributes;for(let B=0,I=k.length;B<I;B++)k[B]!==P[B]&&(s.disableVertexAttribArray(B),k[B]=0)}function y(P,k,B,I,G,W,H){H===!0?s.vertexAttribIPointer(P,k,B,G,W):s.vertexAttribPointer(P,k,B,I,G,W)}function M(P,k,B,I){x();const G=I.attributes,W=B.getAttributes(),H=k.defaultAttributeValues;for(const ot in W){const Z=W[ot];if(Z.location>=0){let nt=G[ot];if(nt===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),nt!==void 0){const st=nt.normalized,Mt=nt.itemSize,Nt=t.get(nt);if(Nt===void 0)continue;const J=Nt.buffer,At=Nt.type,Ot=Nt.bytesPerElement,Xt=At===s.INT||At===s.UNSIGNED_INT||nt.gpuType===Go;if(nt.isInterleavedBufferAttribute){const Rt=nt.data,Bt=Rt.isInterleavedBuffer===!0?Rt.stride:Rt.itemSize,Se=nt.offset;if(Rt.isInstancedInterleavedBuffer||Rt.isInstancedBufferAttribute){for(let qt=0;qt<Z.locationSize;qt++)g(Z.location+qt,Rt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Rt.meshPerAttribute*Rt.count)}else for(let qt=0;qt<Z.locationSize;qt++)m(Z.location+qt);s.bindBuffer(s.ARRAY_BUFFER,J);for(let qt=0;qt<Z.locationSize;qt++)y(Z.location+qt,Mt/Z.locationSize,At,st,Bt*Ot,(Se+Mt/Z.locationSize*qt)*Ot,Xt)}else{if(nt.isInstancedBufferAttribute){for(let Rt=0;Rt<Z.locationSize;Rt++)g(Z.location+Rt,nt.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<Z.locationSize;Rt++)m(Z.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Rt=0;Rt<Z.locationSize;Rt++)y(Z.location+Rt,Mt/Z.locationSize,At,st,Mt*Ot,Mt/Z.locationSize*Rt*Ot,Xt)}}else if(H!==void 0){const st=H[ot];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(Z.location,st);break;case 3:s.vertexAttrib3fv(Z.location,st);break;case 4:s.vertexAttrib4fv(Z.location,st);break;default:s.vertexAttrib1fv(Z.location,st)}}}}_()}function w(){L();for(const P in i){const k=i[P];for(const B in k){const I=k[B];for(const G in I){const W=I[G];for(const H in W)h(W[H].object),delete W[H];delete I[G]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const B in k){const I=k[B];for(const G in I){const W=I[G];for(const H in W)h(W[H].object),delete W[H];delete I[G]}}delete i[P.id]}function v(P){for(const k in i){const B=i[k];for(const I in B){const G=B[I];if(G[P.id]===void 0)continue;const W=G[P.id];for(const H in W)h(W[H].object),delete W[H];delete G[P.id]}}}function S(P){for(const k in i){const B=i[k],I=P.isInstancedMesh===!0?P.id:0,G=B[I];if(G!==void 0){for(const W in G){const H=G[W];for(const ot in H)h(H[ot].object),delete H[ot];delete G[W]}delete B[I],Object.keys(B).length===0&&delete i[k]}}}function L(){A(),a=!0,r!==n&&(r=n,c(r.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:L,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function l0(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function c0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(v){return!(v!==Ni&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const S=v===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==gi&&v!==Ei&&!S&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:w,samples:b}}function h0(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new an,o=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{const _=r?0:i,y=_*4;let M=g.clippingState||null;l.value=M,M=h(p,d,y,f);for(let w=0;w!==y;++w)M[w]=e[w];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=f;y!==x;++y,M+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class ol extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new bh(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new N(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:Jn});r.uniforms.tEquirect.value=e;const a=new C(n,r),o=e.minFilter;return e.minFilter===ln&&(e.minFilter=di),new Io(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const gc=256,u0=3,d0=20,Hh=256,Vh=16,f0=3,p0=new D,m0=new Wt;class Wr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Io(1,10,null),this._boxMesh=new C(new N(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=p0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(m0));const m=new Io(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gc,mh(t))}_fromTexture(t,e){t.mapping===ns||t.mapping===Us?this._setSize(t.image.length===0?gc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=xc(t,!1,!1),i=Math.log2(t)-u0;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=xc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ns||t.mapping===Us?(this._cubemapMaterial===null&&(this._cubemapMaterial=_c()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=g0(),this._integrationMaterial=x0());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Vh);for(let a=0;a<=i;a++){const o=Wr.lodToRoughness(a,i);if(a>i-f0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Hh*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=v0());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function xc(s,t,e){return new ol(s,{minFilter:ln,generateMipmaps:t,type:Fi,colorSpace:Fr,depthBuffer:e})}function Xs(s,t,e){return new zi({name:s,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:hi,blending:Jn,depthTest:!1,depthWrite:!1})}function g0(){return Xs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function x0(){return Xs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function v0(){return Xs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vc(){return Xs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function _c(){return Xs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _0(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===ea||f===ia)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const x=new ol(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===ea||f===ia,x=f===ns||f===Us;if(p||x){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new Wr(s)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return p&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Wr(s)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===ea?d.mapping=ns:f===ia&&(d.mapping=Us),d}function l(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function M0(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Ir("WebGLRenderer: "+i+" extension not supported."),n}}}function y0(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const _=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?Mh:_h,M=new y(Math.ceil(_/3)*6,1),w=M.array;if(x!==null){const v=x.array;g=x.version;for(let S=0,L=0;S<_;S+=3){const A=v[S+0],P=v[S+1],k=v[S+2];w[L++]=A,w[L++]=P,w[L++]=P,w[L++]=k,w[L++]=k,w[L++]=A}}else{g=m.version;for(let v=0,S=0;v<_;v+=3){const L=v+0,A=v+1,P=v+2;w[S++]=L,w[S++]=A,w[S++]=A,w[S++]=P,w[S++]=P,w[S++]=L}}M.version=g;const b=r.get(p);b&&t.remove(b),r.set(p,M)}function d(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(const p in n){const x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function w0(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(i,d,r,u*a),e.update(d,i,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function S0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:we("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function b0(s,t,e){const i=new WeakMap,n=new ze;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let A=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var f=A;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const v=new Float32Array(w*b*4*u),S=new gh(v,w,b,u);S.type=Ei,S.needsUpdate=!0;const L=M*4;for(let P=0;P<u;P++){const k=g[P],B=_[P],I=y[P],G=w*b*4*P;for(let W=0;W<k.count;W++){const H=W*L;p===!0&&(n.fromBufferAttribute(k,W),v[G+H+0]=n.x,v[G+H+1]=n.y,v[G+H+2]=n.z,v[G+H+3]=0),x===!0&&(n.fromBufferAttribute(B,W),v[G+H+4]=n.x,v[G+H+5]=n.y,v[G+H+6]=n.z,v[G+H+7]=0),m===!0&&(n.fromBufferAttribute(I,W),v[G+H+8]=n.x,v[G+H+9]=n.y,v[G+H+10]=n.z,v[G+H+11]=I.itemSize===4?n.w:1)}}d={count:u,texture:S,size:new lt(w,b)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function E0(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const T0={[Jc]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[Bo]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[ih]:"NEUTRAL_TONE_MAPPING",[th]:"CUSTOM_TONE_MAPPING"};function A0(s,t,e,i,n,r){const a=new Ui(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Ie;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));const u=new pf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new C(h,u),f=new kh(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,_=null,y=[],M=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let v=0;v<y.length;v++){const S=y[v];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;const b=a.width,v=a.height;y.length>0&&o===null&&(o=new Ui(b,v,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new Ui(b,v,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));const S=n===!0&&y.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new rs(b,v),r===!0&&(c.format=cn,c.type=ss)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<y.length;L++){const A=y[L];A.setSize&&A.setSize(b,v),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===$i&&y.length===0)return!1;if(_=b,b!==null){const v=b.width,S=b.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return M===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=$i,!0},this.hasRenderPass=function(){return M},this.end=function(w,b){w.toneMapping=g,m=!0;let v=a,S=o;for(let L=0;L<y.length;L++){const A=y[L];A.enabled!==!1&&(A.render(w,S,v,b),A.needsSwap!==!1&&(v=S,S=S===o?l:o))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,u.defines={},xe.getTransfer(p)===Re&&(u.defines.SRGB_TRANSFER="");const L=T0[x];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(_),w.render(d,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Wh=new ri,Xh=new rs(1,1),qh=new Eh(1),Yh=new gh,$h=new cd,Zh=new bh,Mc=[],yc=[],wc=new Float32Array(16),Sc=new Float32Array(9),bc=new Float32Array(4);function hs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Mc[n];if(r===void 0&&(r=new Float32Array(n),Mc[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Kr(s,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function R0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function C0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function P0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function L0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function I0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;bc.set(i),s.uniformMatrix2fv(this.addr,!1,bc),Ye(e,i)}}function D0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Sc.set(i),s.uniformMatrix3fv(this.addr,!1,Sc),Ye(e,i)}}function N0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;wc.set(i),s.uniformMatrix4fv(this.addr,!1,wc),Ye(e,i)}}function U0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function O0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function F0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function k0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function B0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function G0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function H0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function Jr(s){return s.version===0&&(s.compareFunction=dh,s.needsUpdate=!0),s}function V0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Jr(Xh):r=Wh,e.setTexture2D(t||r,n)}function W0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||$h,n)}function X0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Jr(qh):r=Zh,e.setTextureCube(t||r,n)}function q0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Yh,n)}function Y0(s){switch(s){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return O0;case 35668:case 35672:return F0;case 35669:case 35673:return z0;case 5125:return k0;case 36294:return B0;case 36295:return G0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function $0(s,t){s.uniform1fv(this.addr,t)}function Z0(s,t){const e=hs(t,this.size,2);s.uniform2fv(this.addr,e)}function K0(s,t){const e=hs(t,this.size,3);s.uniform3fv(this.addr,e)}function J0(s,t){const e=hs(t,this.size,4);s.uniform4fv(this.addr,e)}function Q0(s,t){const e=hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function j0(s,t){const e=hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function tg(s,t){const e=hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function eg(s,t){s.uniform1iv(this.addr,t)}function ig(s,t){s.uniform2iv(this.addr,t)}function ng(s,t){s.uniform3iv(this.addr,t)}function sg(s,t){s.uniform4iv(this.addr,t)}function rg(s,t){s.uniform1uiv(this.addr,t)}function ag(s,t){s.uniform2uiv(this.addr,t)}function og(s,t){s.uniform3uiv(this.addr,t)}function lg(s,t){s.uniform4uiv(this.addr,t)}function cg(s,t,e){const i=this.cache,n=t.length,r=Kr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Jr(Xh):a=Wh;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function hg(s,t,e){const i=this.cache,n=t.length,r=Kr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||$h,r[a])}function ug(s,t,e){const i=this.cache,n=t.length,r=Kr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Jr(qh):a=Zh;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function dg(s,t,e){const i=this.cache,n=t.length,r=Kr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function fg(s){switch(s){case 5126:return $0;case 35664:return Z0;case 35665:return K0;case 35666:return J0;case 35674:return Q0;case 35675:return j0;case 35676:return tg;case 5124:case 35670:return eg;case 35667:case 35671:return ig;case 35668:case 35672:return ng;case 35669:case 35673:return sg;case 5125:return rg;case 36294:return ag;case 36295:return og;case 36296:return lg;case 35678:case 36198:case 36298:case 36306:case 35682:return cg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}class pg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Y0(e.type)}}class mg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fg(e.type)}}class gg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Ec(s,t){s.seq.push(t),s.map[t.id]=t}function xg(s,t,e){const i=s.name,n=i.length;for(La.lastIndex=0;;){const r=La.exec(i),a=La.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Ec(e,c===void 0?new pg(o,s,t):new mg(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new gg(o),Ec(e,u)),e=u}}}class Dr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);xg(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Tc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const vg=37297;let _g=0;function Mg(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ac=new ie;function yg(s){xe._getMatrix(Ac,xe.workingColorSpace,s);const t=`mat3( ${Ac.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(s)){case zr:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Mg(s.getShaderSource(t),o)}else return r}function wg(s,t){const e=yg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Sg={[Jc]:"Linear",[Qc]:"Reinhard",[jc]:"Cineon",[Bo]:"ACESFilmic",[eh]:"AgX",[ih]:"Neutral",[th]:"Custom"};function bg(s,t){const e=Sg[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Er=new D;function Eg(){xe.getLuminanceCoefficients(Er);const s=Er.x.toFixed(4),t=Er.y.toFixed(4),e=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Ag(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Rg(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ts(s){return s!==""}function Cc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(s){return s.replace(Cg,Pg)}function Pg(s,t){const e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Do(e)}const Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(s){return s.replace(Lg,Ig)}function Ig(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ic(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Dg={[Cs]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function Ng(s){return Dg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ug={[Us]:"ENVMAP_MODE_REFRACTION"};function Og(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ug[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fg={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[Au]:"ENVMAP_BLENDING_MIX",[Ru]:"ENVMAP_BLENDING_ADD"};function zg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Fg[s.combine]||"ENVMAP_BLENDING_NONE"}function kg(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ng(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Og(e),u=zg(e),d=Tg(e),f=Ag(r),p=n.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ts).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(x=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?he.tonemapping_pars_fragment:"",e.toneMapping!==$i?bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),Eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Do(a),a=Cc(a,e),a=Pc(a,e),o=Do(o),o=Cc(o,e),o=Pc(o,e),a=Lc(a),o=Lc(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+x+a,y=g+m+o,M=Tc(n,n.VERTEX_SHADER,_),w=Tc(n,n.FRAGMENT_SHADER,y);n.attachShader(p,M),n.attachShader(p,w),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function b(A){if(s.debug.checkShaderErrors){const P=n.getProgramInfoLog(p)||"",k=n.getShaderInfoLog(M)||"",B=n.getShaderInfoLog(w)||"",I=P.trim(),G=k.trim(),W=B.trim();let H=!0,ot=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,M,w);else{const Z=Rc(n,M,"vertex"),nt=Rc(n,w,"fragment");we("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+Z+`
`+nt)}else I!==""?jt("WebGLProgram: Program Info Log:",I):(G===""||W==="")&&(ot=!1);ot&&(A.diagnostics={runnable:H,programLog:I,vertexShader:{log:G,prefix:x},fragmentShader:{log:W,prefix:m}})}n.deleteShader(M),n.deleteShader(w),v=new Dr(n,p),S=Rg(n,p)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(p,vg)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=w,this}let Bg=0;class Gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Hg(t),e.set(t,i)),i}}class Hg{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}}function Vg(s){return s===En||s===Ur||s===Or}function Wg(s,t,e,i,n,r){const a=new xh,o=new Gg,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,L,A,P,k){const B=A.fog,I=P.geometry,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,H=t.get(v.envMap||G,W),ot=d[v.type];let Z=i.precision;v.precision!==null&&(Z=i.getMaxPrecision(v.precision),Z!==v.precision&&jt("WebGLProgram.getParameters:",v.precision,"not supported, using",Z,"instead."));const nt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,st=nt!==void 0?nt.length:0;let Mt=0;I.morphAttributes.position!==void 0&&(Mt=1),I.morphAttributes.normal!==void 0&&(Mt=2),I.morphAttributes.color!==void 0&&(Mt=3);let Nt,J,At,Ot;if(ot){const Pt=Ii[ot];Nt=Pt.vertexShader,J=Pt.fragmentShader}else{Nt=v.vertexShader,J=v.fragmentShader;const Pt=o.getVertexShaderStage(v),Ae=o.getFragmentShaderStage(v);o.update(v,Pt,Ae),At=Pt.id,Ot=Ae.id}const Xt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Bt=P.isInstancedMesh===!0,Se=P.isBatchedMesh===!0,qt=!!v.map,ne=!!v.matcap,le=!!H,at=le&&H.isPMREMTexture===!0,pt=!!v.aoMap,mt=!!v.lightMap,Ut=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,V=!!v.displacementMap,$=!!v.emissiveMap,ct=!!v.metalnessMap,Ct=!!v.roughnessMap,Ht=v.anisotropy>0,O=v.clearcoat>0,fe=v.diffuseRoughness>0,Jt=v.dispersion>0,Me=v.retroreflectivity>0,xt=v.iridescence>0,Le=v.sheen>0,Zt=v.transmission>0,Qt=Ht&&!!v.anisotropyMap,R=O&&!!v.clearcoatMap,E=O&&!!v.clearcoatNormalMap,X=O&&!!v.clearcoatRoughnessMap,ht=fe&&!!v.diffuseRoughnessMap,rt=xt&&!!v.iridescenceMap,vt=xt&&!!v.iridescenceThicknessMap,Et=Le&&!!v.sheenColorMap,tt=Le&&!!v.sheenRoughnessMap,et=!!v.specularMap,wt=!!v.specularColorMap,U=!!v.specularIntensityMap,it=Zt&&!!v.transmissionMap,Q=Zt&&!!v.thicknessMap,St=!!v.gradientMap,ft=!!v.alphaMap,_t=v.alphaTest>0,Yt=!!v.alphaHash,ce=!!v.extensions;let ut=$i;v.toneMapped&&(Xt===null||Xt.isXRRenderTarget===!0)&&(ut=s.toneMapping);const Kt=at?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,oe={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:Nt,fragmentShader:J,defines:v.defines,customVertexShaderID:At,customFragmentShaderID:Ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:Z,batching:Se,batchingColor:Se&&P._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&P.instanceColor!==null,instancingMorph:Bt&&P.morphTexture!==null,outputColorSpace:Xt===null?s.outputColorSpace:Xt.isXRRenderTarget===!0?Xt.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:qt,matcap:ne,envMap:le,envMapMode:le&&H.mapping,envMapPMREM:at,envMapMaxLod:at?Kt.length-1:null,envMapSize:at?Kt[0].width:null,aoMap:pt,lightMap:mt,bumpMap:Ut,normalMap:yt,displacementMap:V,emissiveMap:$,normalMapObjectSpace:yt&&v.normalMapType===Lu,normalMapTangentSpace:yt&&v.normalMapType===Eo,packedNormalMap:yt&&v.normalMapType===Eo&&Vg(v.normalMap.format),metalnessMap:ct,roughnessMap:Ct,anisotropy:Ht,anisotropyMap:Qt,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:E,clearcoatRoughnessMap:X,diffuseRoughness:fe,diffuseRoughnessMap:ht,dispersion:Jt,retroreflection:Me,iridescence:xt,iridescenceMap:rt,iridescenceThicknessMap:vt,sheen:Le,sheenColorMap:Et,sheenRoughnessMap:tt,specularMap:et,specularColorMap:wt,specularIntensityMap:U,transmission:Zt,transmissionMap:it,thicknessMap:Q,gradientMap:St,opaque:v.transparent===!1&&v.blending===Sn&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:_t,alphaHash:Yt,combine:v.combine,mapUv:qt&&f(v.map.channel),aoMapUv:pt&&f(v.aoMap.channel),lightMapUv:mt&&f(v.lightMap.channel),bumpMapUv:Ut&&f(v.bumpMap.channel),normalMapUv:yt&&f(v.normalMap.channel),displacementMapUv:V&&f(v.displacementMap.channel),emissiveMapUv:$&&f(v.emissiveMap.channel),metalnessMapUv:ct&&f(v.metalnessMap.channel),roughnessMapUv:Ct&&f(v.roughnessMap.channel),anisotropyMapUv:Qt&&f(v.anisotropyMap.channel),clearcoatMapUv:R&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:tt&&f(v.sheenRoughnessMap.channel),specularMapUv:et&&f(v.specularMap.channel),specularColorMapUv:wt&&f(v.specularColorMap.channel),specularIntensityMapUv:U&&f(v.specularIntensityMap.channel),transmissionMapUv:it&&f(v.transmissionMap.channel),thicknessMapUv:Q&&f(v.thicknessMap.channel),alphaMapUv:ft&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(yt||Ht),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(qt||ft),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Rt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Mt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:k.filter(Pt=>Pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:qt&&v.map.isVideoTexture===!0&&xe.getTransfer(v.map.colorSpace)===Re,decodeVideoTextureEmissive:$&&v.emissiveMap.isVideoTexture===!0&&xe.getTransfer(v.emissiveMap.colorSpace)===Re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===hi,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function x(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){const S=d[v.type];let L;if(S){const A=Ii[S];L=uf.clone(A.uniforms)}else L=v.uniforms;return L}function y(v,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new kg(s,S,v,n),c.push(L),h.set(S,L)),L}function M(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:b}}function Xg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function qg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Dc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nc(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,x,m,g){let _=s[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),t++,_}function l(d,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);const y=o(d,f,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?n.push(y):e.push(y)}function c(d,f,p,x,m,g){const _=o(d,f,p,x,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||qg),i.length>1&&i.sort(f||Dc),n.length>1&&n.sort(f||Dc)}function u(){for(let d=t,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function Yg(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Nc,s.set(i,[a])):n>=r.length?(a=new Nc,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function $g(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Wt};break;case"SpotLight":e={position:new D,direction:new D,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Zg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Kg=0;function Jg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Qg(s){const t=new $g,e=Zg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,r=new _e,a=new _e;function o(c){let h=0,u=0,d=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,y=0,M=0,w=0,b=0,v=0,S=0,L=0,A=0;c.sort(Jg);for(let k=0,B=c.length;k<B;k++){const I=c[k],G=I.color,W=I.intensity,H=I.distance;let ot=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===En?ot=I.shadow.map.texture:ot=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*W,u+=G.g*W,d+=G.b*W;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],W);A++}else if(I.isSunLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const nt=I.shadow,st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[p]=st,i.sunShadowMap[p]=ot;const Mt=nt.getViewportCount();for(let Nt=0;Nt<Mt;Nt++)i.sunShadowMatrix[x+Nt]=nt.getMatrix(Nt),i.sunShadowCascade[x+Nt]=nt._cascadeData[Nt];x+=Mt,p++}i.sun[f]=Z,f++}else if(I.isDirectionalLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const nt=I.shadow,st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,i.directionalShadow[m]=st,i.directionalShadowMap[m]=ot,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=Z,m++}else if(I.isSpotLight){const Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(G).multiplyScalar(W),Z.distance=H,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[_]=Z;const nt=I.shadow;if(I.map&&(i.spotLightMap[S]=I.map,S++,nt.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[_]=nt.matrix,I.castShadow){const st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,i.spotShadow[_]=st,i.spotShadowMap[_]=ot,v++}_++}else if(I.isRectAreaLight){const Z=t.get(I);Z.color.copy(G).multiplyScalar(W),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=Z,y++}else if(I.isPointLight){const Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){const nt=I.shadow,st=e.get(I);st.shadowIntensity=nt.intensity,st.shadowBias=nt.bias,st.shadowNormalBias=nt.normalBias,st.shadowRadius=nt.radius,st.shadowMapSize=nt.mapSize,st.shadowCameraNear=nt.camera.near,st.shadowCameraFar=nt.camera.far,i.pointShadow[g]=st,i.pointShadowMap[g]=ot,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=Z,g++}else if(I.isHemisphereLight){const Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(W),Z.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[M]=Z,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==y||P.hemiLength!==M||P.numSunShadows!==p||P.numDirectionalShadows!==w||P.numPointShadows!==b||P.numSpotShadows!==v||P.numSpotMaps!==S||P.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=y,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=A,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=y,P.hemiLength=M,P.numSunShadows=p,P.numDirectionalShadows=w,P.numPointShadows=b,P.numSpotShadows=v,P.numSpotMaps=S,P.numLightProbes=A,i.version=Kg++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const M=c[_];if(M.isSunLight){const w=i.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),u++}else if(M.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),d++}else if(M.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Uc(s){const t=new Qg(s),e=[],i=[],n=[];function r(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jg(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Uc(s),t.set(n,[o])):r>=a.length?(o=new Uc(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ix=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],nx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Oc=new _e,ws=new D,Ia=new D;function sx(s,t,e){let i=new ks;const n=new lt,r=new lt,a=new ze,o=new mf,l=new gf,c={},h=e.maxTextureSize,u={[bn]:hi,[hi]:bn,[mi]:mi},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ie;p.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new C(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let g=this.type;this.render=function(b,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===lu&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);const L=s.getRenderTarget(),A=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Jn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=g!==this.type;B&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=b.length;I<G;I++){const W=b[I],H=W.shadow;if(H===void 0){jt("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const ot=H.getFrameExtents();n.multiply(ot),r.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ot.x),n.x=r.x*ot.x,H.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ot.y),n.y=r.y*ot.y,H.mapSize.y=r.y));const Z=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===bs){if(W.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ui(n.x,n.y,{format:En,type:Fi,minFilter:di,magFilter:di,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new rs(n.x,n.y,Ei),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=dn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=je,H.map.depthTexture.magFilter=je}else W.isPointLight?(H.map=new ol(n.x),H.map.depthTexture=new Eh(n.x,Oi)):(H.map=new Ui(n.x,n.y),H.map.depthTexture=new rs(n.x,n.y,Oi)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=dn,this.type===Cs?(H.map.depthTexture.compareFunction=Z?uh:hh,H.map.depthTexture.minFilter=di,H.map.depthTexture.magFilter=di):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=je,H.map.depthTexture.magFilter=je);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);const nt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,S);const st=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Mt=0;Mt<nt;Mt++){const Nt=H.getCamera(Mt);if(W.isPointLight){const J=H.camera,At=H.matrix,Ot=W.distance||J.far;Ot!==J.far&&(J.far=Ot,J.updateProjectionMatrix()),ws.setFromMatrixPosition(W.matrixWorld),J.position.copy(ws),Ia.copy(J.position),Ia.add(ix[Mt]),J.up.copy(nx[Mt]),J.lookAt(Ia),J.updateMatrixWorld(),At.makeTranslation(-ws.x,-ws.y,-ws.z),Oc.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oc,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Mt),s.clear();else{Mt===0&&(s.setRenderTarget(H.map),s.clear());const J=H.getViewport(Mt);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),k.viewport(a)}i=H.getFrustum(Mt),M(v,S,Nt,W,st,this.type)}H.isPointLightShadow!==!0&&this.type===bs&&_(H,S),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(L,A,P)};function _(b,v){const S=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ui(n.x,n.y,{format:En,type:Fi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(v,null,S,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(v,null,S,f,x,null)}function y(b,v,S,L){let A=null;const P=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)A=P;else if(A=S.isPointLight===!0?l:o,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const k=A.uuid,B=v.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let G=I[B];G===void 0&&(G=A.clone(),I[B]=G,v.addEventListener("dispose",w)),A=G}if(A.visible=v.visible,A.wireframe=v.wireframe,L===bs?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:u[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=s.properties.get(A);k.light=S}return A}function M(b,v,S,L,A,P){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===bs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const I=t.update(b),G=b.material;if(Array.isArray(G)){const W=I.groups;for(let H=0,ot=W.length;H<ot;H++){const Z=W[H],nt=G[Z.materialIndex];if(nt&&nt.visible){const st=y(b,nt,L,P);b.onBeforeShadow(s,b,v,S,I,st,Z),s.renderBufferDirect(S,null,I,st,b,Z),b.onAfterShadow(s,b,v,S,I,st,Z)}}}else if(G.visible){const W=y(b,G,L,P);b.onBeforeShadow(s,b,v,S,I,W,null),s.renderBufferDirect(S,null,I,W,b,null),b.onAfterShadow(s,b,v,S,I,W,null)}}const B=b.children;for(let I=0,G=B.length;I<G;I++)M(B[I],v,S,L,A,P)}function w(b){b.target.removeEventListener("dispose",w);for(const S in c){const L=c[S],A=b.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function rx(s,t){function e(){let U=!1;const it=new ze;let Q=null;const St=new ze(0,0,0,0);return{setMask:function(ft){Q!==ft&&!U&&(s.colorMask(ft,ft,ft,ft),Q=ft)},setLocked:function(ft){U=ft},setClear:function(ft,_t,Yt,ce,ut){ut===!0&&(ft*=ce,_t*=ce,Yt*=ce),it.set(ft,_t,Yt,ce),St.equals(it)===!1&&(s.clearColor(ft,_t,Yt,ce),St.copy(it))},reset:function(){U=!1,Q=null,St.set(-1,0,0,0)}}}function i(){let U=!1,it=!1,Q=null,St=null,ft=null;return{setReversed:function(_t){if(it!==_t){const Yt=t.get("EXT_clip_control");_t?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),it=_t;const ce=ft;ft=null,this.setClear(ce)}},getReversed:function(){return it},setTest:function(_t){_t?Rt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(_t){Q!==_t&&!U&&(s.depthMask(_t),Q=_t)},setFunc:function(_t){if(it&&(_t=Hu[_t]),St!==_t){switch(_t){case Ba:s.depthFunc(s.NEVER);break;case Ga:s.depthFunc(s.ALWAYS);break;case Ha:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case Va:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=_t}},setLocked:function(_t){U=_t},setClear:function(_t){ft!==_t&&(ft=_t,it&&(_t=1-_t),s.clearDepth(_t))},reset:function(){U=!1,Q=null,St=null,ft=null,it=!1}}}function n(){let U=!1,it=null,Q=null,St=null,ft=null,_t=null,Yt=null,ce=null,ut=null;return{setTest:function(Kt){U||(Kt?Rt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(Kt){it!==Kt&&!U&&(s.stencilMask(Kt),it=Kt)},setFunc:function(Kt,oe,Pt){(Q!==Kt||St!==oe||ft!==Pt)&&(s.stencilFunc(Kt,oe,Pt),Q=Kt,St=oe,ft=Pt)},setOp:function(Kt,oe,Pt){(_t!==Kt||Yt!==oe||ce!==Pt)&&(s.stencilOp(Kt,oe,Pt),_t=Kt,Yt=oe,ce=Pt)},setLocked:function(Kt){U=Kt},setClear:function(Kt){ut!==Kt&&(s.clearStencil(Kt),ut=Kt)},reset:function(){U=!1,it=null,Q=null,St=null,ft=null,_t=null,Yt=null,ce=null,ut=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,y=null,M=null,w=null,b=null,v=null,S=new Wt(0,0,0),L=0,A=!1,P=null,k=null,B=null,I=null,G=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ot=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=ot>=1):Z.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=ot>=2);let nt=null,st={};const Mt=s.getParameter(s.SCISSOR_BOX),Nt=s.getParameter(s.VIEWPORT),J=new ze().fromArray(Mt),At=new ze().fromArray(Nt);function Ot(U,it,Q,St){const ft=new Uint8Array(4),_t=s.createTexture();s.bindTexture(U,_t),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Q;Yt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(it+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return _t}const Xt={};Xt[s.TEXTURE_2D]=Ot(s.TEXTURE_2D,s.TEXTURE_2D,1),Xt[s.TEXTURE_CUBE_MAP]=Ot(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Xt[s.TEXTURE_2D_ARRAY]=Ot(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Xt[s.TEXTURE_3D]=Ot(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Rt(s.DEPTH_TEST),a.setFunc(Ns),Ut(!1),yt(bl),Rt(s.CULL_FACE),pt(Jn);function Rt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Bt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Se(U,it){return d[U]!==it?(s.bindFramebuffer(U,it),d[U]=it,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=it),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=it),!0):!1}function qt(U,it){let Q=p,St=!1;if(U){Q=f.get(it),Q===void 0&&(Q=[],f.set(it,Q));const ft=U.textures;if(Q.length!==ft.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Yt=ft.length;_t<Yt;_t++)Q[_t]=s.COLOR_ATTACHMENT0+_t;Q.length=ft.length,St=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,St=!0);St&&s.drawBuffers(Q)}function ne(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const le={[$n]:s.FUNC_ADD,[hu]:s.FUNC_SUBTRACT,[uu]:s.FUNC_REVERSE_SUBTRACT};le[du]=s.MIN,le[fu]=s.MAX;const at={[pu]:s.ZERO,[mu]:s.ONE,[gu]:s.SRC_COLOR,[$c]:s.SRC_ALPHA,[wu]:s.SRC_ALPHA_SATURATE,[Mu]:s.DST_COLOR,[vu]:s.DST_ALPHA,[xu]:s.ONE_MINUS_SRC_COLOR,[Zc]:s.ONE_MINUS_SRC_ALPHA,[yu]:s.ONE_MINUS_DST_COLOR,[_u]:s.ONE_MINUS_DST_ALPHA,[Su]:s.CONSTANT_COLOR,[bu]:s.ONE_MINUS_CONSTANT_COLOR,[Eu]:s.CONSTANT_ALPHA,[Tu]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(U,it,Q,St,ft,_t,Yt,ce,ut,Kt){if(U===Jn){m===!0&&(Bt(s.BLEND),m=!1);return}if(m===!1&&(Rt(s.BLEND),m=!0),U!==cu){if(U!==g||Kt!==A){if((_!==$n||w!==$n)&&(s.blendEquation(s.FUNC_ADD),_=$n,w=$n),Kt)switch(U){case Sn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFunc(s.ONE,s.ONE);break;case El:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:we("WebGLState: Invalid blending: ",U);break}else switch(U){case Sn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ki:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case El:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tl:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",U);break}y=null,M=null,b=null,v=null,S.set(0,0,0),L=0,g=U,A=Kt}return}ft=ft||it,_t=_t||Q,Yt=Yt||St,(it!==_||ft!==w)&&(s.blendEquationSeparate(le[it],le[ft]),_=it,w=ft),(Q!==y||St!==M||_t!==b||Yt!==v)&&(s.blendFuncSeparate(at[Q],at[St],at[_t],at[Yt]),y=Q,M=St,b=_t,v=Yt),(ce.equals(S)===!1||ut!==L)&&(s.blendColor(ce.r,ce.g,ce.b,ut),S.copy(ce),L=ut),g=U,A=!1}function mt(U,it){U.side===mi?Bt(s.CULL_FACE):Rt(s.CULL_FACE);let Q=U.side===hi;it&&(Q=!Q),Ut(Q),U.blending===Sn&&U.transparent===!1?pt(Jn):pt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const St=U.stencilWrite;o.setTest(St),St&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(U){P!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),P=U)}function yt(U){U!==au?(Rt(s.CULL_FACE),U!==k&&(U===bl?s.cullFace(s.BACK):U===ou?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),k=U}function V(U){U!==B&&(H&&s.lineWidth(U),B=U)}function $(U,it,Q){U?(Rt(s.POLYGON_OFFSET_FILL),(I!==it||G!==Q)&&(I=it,G=Q,a.getReversed()&&(it=-it,Q=-Q),s.polygonOffset(it,Q))):Bt(s.POLYGON_OFFSET_FILL)}function ct(U){U?Rt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function Ct(U){U===void 0&&(U=s.TEXTURE0+W-1),nt!==U&&(s.activeTexture(U),nt=U)}function Ht(U,it,Q){Q===void 0&&(nt===null?Q=s.TEXTURE0+W-1:Q=nt);let St=st[Q];St===void 0&&(St={type:void 0,texture:void 0},st[Q]=St),(St.type!==U||St.texture!==it)&&(nt!==Q&&(s.activeTexture(Q),nt=Q),s.bindTexture(U,it||Xt[U]),St.type=U,St.texture=it)}function O(){const U=st[nt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(U){we("WebGLState:",U)}}function Jt(){try{s.compressedTexImage3D(...arguments)}catch(U){we("WebGLState:",U)}}function Me(){try{s.texSubImage2D(...arguments)}catch(U){we("WebGLState:",U)}}function xt(){try{s.texSubImage3D(...arguments)}catch(U){we("WebGLState:",U)}}function Le(){try{s.compressedTexSubImage2D(...arguments)}catch(U){we("WebGLState:",U)}}function Zt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){we("WebGLState:",U)}}function Qt(){try{s.texStorage2D(...arguments)}catch(U){we("WebGLState:",U)}}function R(){try{s.texStorage3D(...arguments)}catch(U){we("WebGLState:",U)}}function E(){try{s.texImage2D(...arguments)}catch(U){we("WebGLState:",U)}}function X(){try{s.texImage3D(...arguments)}catch(U){we("WebGLState:",U)}}function ht(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function rt(U,it){u[U]!==it&&(s.pixelStorei(U,it),u[U]=it)}function vt(U){J.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),J.copy(U))}function Et(U){At.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),At.copy(U))}function tt(U,it){let Q=c.get(it);Q===void 0&&(Q=new WeakMap,c.set(it,Q));let St=Q.get(U);St===void 0&&(St=s.getUniformBlockIndex(it,U.name),s.uniformBlockBinding(it,St,St),Q.set(U,St))}function et(U,it,Q){const ft=c.get(it).get(U);l[ft]!==Q&&(s.bindBufferBase(s.UNIFORM_BUFFER,ft,Q),l[ft]=Q)}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},nt=null,st={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,y=null,M=null,w=null,b=null,v=null,S=new Wt(0,0,0),L=0,A=!1,P=null,k=null,B=null,I=null,G=null,J.set(0,0,s.canvas.width,s.canvas.height),At.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Rt,disable:Bt,bindFramebuffer:Se,drawBuffers:qt,useProgram:ne,setBlending:pt,setMaterial:mt,setFlipSided:Ut,setCullFace:yt,setLineWidth:V,setPolygonOffset:$,setScissorTest:ct,activeTexture:Ct,bindTexture:Ht,unbindTexture:O,compressedTexImage2D:fe,compressedTexImage3D:Jt,texImage2D:E,texImage3D:X,pixelStorei:rt,getParameter:ht,updateUBOMapping:tt,uniformBlockBinding:et,texStorage2D:Qt,texStorage3D:R,texSubImage2D:Me,texSubImage3D:xt,compressedTexSubImage2D:Le,compressedTexSubImage3D:Zt,scissor:vt,viewport:Et,reset:wt}}function ax(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set;let d;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(R=>p.delete(R));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return m?new OffscreenCanvas(R,E):kr("canvas")}function _(R,E,X){let ht=1;const rt=Qt(R);if((rt.width>X||rt.height>X)&&(ht=X/Math.max(rt.width,rt.height)),ht<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const vt=Math.floor(ht*rt.width),Et=Math.floor(ht*rt.height);d===void 0&&(d=g(vt,Et));const tt=E?g(vt,Et):d;return tt.width=vt,tt.height=Et,tt.getContext("2d").drawImage(R,0,0,vt,Et),jt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+vt+"x"+Et+")."),tt}else return"data"in R&&jt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function y(R){return R.generateMipmaps}function M(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(R,E,X,ht,rt,vt=!1){if(R!==null){if(s[R]!==void 0)return s[R];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Et;ht&&(Et=t.get("EXT_texture_norm16"),Et||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=E;if(E===s.RED&&(X===s.FLOAT&&(tt=s.R32F),X===s.HALF_FLOAT&&(tt=s.R16F),X===s.UNSIGNED_BYTE&&(tt=s.R8),X===s.UNSIGNED_SHORT&&Et&&(tt=Et.R16_EXT),X===s.SHORT&&Et&&(tt=Et.R16_SNORM_EXT)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.R8UI),X===s.UNSIGNED_SHORT&&(tt=s.R16UI),X===s.UNSIGNED_INT&&(tt=s.R32UI),X===s.BYTE&&(tt=s.R8I),X===s.SHORT&&(tt=s.R16I),X===s.INT&&(tt=s.R32I)),E===s.RG&&(X===s.FLOAT&&(tt=s.RG32F),X===s.HALF_FLOAT&&(tt=s.RG16F),X===s.UNSIGNED_BYTE&&(tt=s.RG8),X===s.UNSIGNED_SHORT&&Et&&(tt=Et.RG16_EXT),X===s.SHORT&&Et&&(tt=Et.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RG8UI),X===s.UNSIGNED_SHORT&&(tt=s.RG16UI),X===s.UNSIGNED_INT&&(tt=s.RG32UI),X===s.BYTE&&(tt=s.RG8I),X===s.SHORT&&(tt=s.RG16I),X===s.INT&&(tt=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),X===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),X===s.UNSIGNED_INT&&(tt=s.RGB32UI),X===s.BYTE&&(tt=s.RGB8I),X===s.SHORT&&(tt=s.RGB16I),X===s.INT&&(tt=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),X===s.UNSIGNED_INT&&(tt=s.RGBA32UI),X===s.BYTE&&(tt=s.RGBA8I),X===s.SHORT&&(tt=s.RGBA16I),X===s.INT&&(tt=s.RGBA32I)),E===s.RGB&&(X===s.UNSIGNED_SHORT&&Et&&(tt=Et.RGB16_EXT),X===s.SHORT&&Et&&(tt=Et.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),E===s.RGBA){const et=vt?zr:xe.getTransfer(rt);X===s.FLOAT&&(tt=s.RGBA32F),X===s.HALF_FLOAT&&(tt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(tt=et===Re?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&Et&&(tt=Et.RGBA16_EXT),X===s.SHORT&&Et&&(tt=Et.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(R,E){let X;return R?E===null||E===Oi||E===ss?X=s.DEPTH24_STENCIL8:E===Ei?X=s.DEPTH32F_STENCIL8:E===Os&&(X=s.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Oi||E===ss?X=s.DEPTH_COMPONENT24:E===Ei?X=s.DEPTH_COMPONENT32F:E===Os&&(X=s.DEPTH_COMPONENT16),X}function S(R,E){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==je&&R.minFilter!==di?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function L(R){const E=new WeakRef(R);i.get(R).__ref=E,p.add(E),x.register(R,E,E)}function A(R){const E=i.get(R).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function P(R){B(R.target)}function k(R){I(R.target)}function B(R){R.removeEventListener("dispose",P),A(R),W(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function I(R){R.removeEventListener("dispose",k),A(R),ot(R)}function G(){for(const R of p){const E=R.deref();E!==void 0&&(E.isRenderTarget===!0?I(E):B(E))}p.clear(),u.clear()}function W(R){const E=i.get(R);if(E.__webglInit===void 0)return;const X=R.source,ht=f.get(X);if(ht){const rt=ht[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&H(R),Object.keys(ht).length===0&&f.delete(X)}i.remove(R)}function H(R){const E=i.get(R);s.deleteTexture(E.__webglTexture);const X=R.source,ht=f.get(X);delete ht[E.__cacheKey],a.memory.textures--}function ot(R){const E=i.get(R);E.__depthDisposeCallback&&E.__depthDisposeCallback();const X=R.depthTexture;if(X&&X.renderTarget===R&&B(X),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let vt=0;vt<E.__webglFramebuffer[rt].length;vt++)s.deleteFramebuffer(E.__webglFramebuffer[rt][vt]);else s.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)s.deleteFramebuffer(E.__webglFramebuffer[rt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ht=R.textures;for(let rt=0,vt=ht.length;rt<vt;rt++){const Et=i.get(ht[rt]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),a.memory.textures--),i.remove(ht[rt])}i.remove(R)}let Z=0;function nt(){Z=0}function st(){return Z}function Mt(R){Z=R}function Nt(){const R=Z;return R>=n.maxTextures&&jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),Z+=1,R}function J(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.mipmapsAutoUpdate),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function At(R,E){const X=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){const ht=R.image;if(ht===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(X,R,E);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function Ot(R,E){const X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){mt(X,R,E);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function Xt(R,E){const X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){mt(X,R,E);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function Rt(R,E){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Ut(X,R,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const Bt={[Nr]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[Ya]:s.MIRRORED_REPEAT},Se={[je]:s.NEAREST,[Cu]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[di]:s.LINEAR,[na]:s.LINEAR_MIPMAP_NEAREST,[ln]:s.LINEAR_MIPMAP_LINEAR},qt={[Du]:s.NEVER,[dh]:s.ALWAYS,[Nu]:s.LESS,[hh]:s.LEQUAL,[Uu]:s.EQUAL,[uh]:s.GEQUAL,[Ou]:s.GREATER,[Fu]:s.NOTEQUAL};function ne(R,E){if(E.type===Ei&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===di||E.magFilter===na||E.magFilter===$s||E.magFilter===ln||E.minFilter===di||E.minFilter===na||E.minFilter===$s||E.minFilter===ln)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Bt[E.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Bt[E.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Bt[E.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Se[E.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,qt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===je||E.minFilter!==$s&&E.minFilter!==ln||E.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function le(R,E){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P),L(E));const ht=E.source;let rt=f.get(ht);rt===void 0&&(rt={},f.set(ht,rt));const vt=J(E);if(vt!==R.__cacheKey){rt[vt]===void 0&&(rt[vt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),rt[vt].usedTimes++;const Et=rt[R.__cacheKey];Et!==void 0&&(rt[R.__cacheKey].usedTimes--,Et.usedTimes===0&&H(E)),R.__cacheKey=vt,R.__webglTexture=rt[vt].texture}return X}function at(R,E,X){return Math.floor(Math.floor(R/X)/E)}function pt(R,E,X,ht){const vt=R.updateRanges;if(vt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,X,ht,E.data);else{vt.sort((U,it)=>U.start-it.start);let Et=0;for(let U=1;U<vt.length;U++){const it=vt[Et],Q=vt[U],St=it.start+it.count,ft=at(Q.start,E.width,4),_t=at(it.start,E.width,4);Q.start<=St+1&&ft===_t&&at(Q.start+Q.count-1,E.width,4)===ft?it.count=Math.max(it.count,Q.start+Q.count-it.start):(++Et,vt[Et]=Q)}vt.length=Et+1;const tt=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),wt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let U=0,it=vt.length;U<it;U++){const Q=vt[U],St=Math.floor(Q.start/4),ft=Math.ceil(Q.count/4),_t=St%E.width,Yt=Math.floor(St/E.width),ce=ft,ut=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(s.UNPACK_SKIP_ROWS,Yt),e.texSubImage2D(s.TEXTURE_2D,0,_t,Yt,ce,ut,X,ht,E.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,wt)}}function mt(R,E,X){let ht=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=s.TEXTURE_3D);const rt=le(R,E),vt=E.source;e.bindTexture(ht,R.__webglTexture,s.TEXTURE0+X);const Et=i.get(vt);if(vt.version!==Et.__version||rt===!0){if(e.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ut=xe.getPrimaries(xe.workingColorSpace),Kt=E.colorSpace===on?null:xe.getPrimaries(E.colorSpace),oe=E.colorSpace===on||ut===Kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let et=_(E.image,!1,n.maxTextureSize);et=Zt(E,et);const wt=r.convert(E.format,E.colorSpace),U=r.convert(E.type);let it=b(E.internalFormat,wt,U,E.normalized,E.colorSpace,E.isVideoTexture);ne(ht,E);let Q;const St=E.mipmaps,ft=E.isVideoTexture!==!0,_t=Et.__version===void 0||rt===!0,Yt=vt.dataReady,ce=S(E,et);if(E.isDepthTexture)it=v(E.format===cn,E.type),_t&&(ft?e.texStorage2D(s.TEXTURE_2D,1,it,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,it,et.width,et.height,0,wt,U,null));else if(E.isDataTexture)if(St.length>0){ft&&_t&&e.texStorage2D(s.TEXTURE_2D,ce,it,St[0].width,St[0].height);for(let ut=0,Kt=St.length;ut<Kt;ut++)Q=St[ut],ft?Yt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Q.width,Q.height,wt,U,Q.data):e.texImage2D(s.TEXTURE_2D,ut,it,Q.width,Q.height,0,wt,U,Q.data);E.generateMipmaps=!1}else ft?(_t&&e.texStorage2D(s.TEXTURE_2D,ce,it,et.width,et.height),Yt&&pt(E,et,wt,U)):e.texImage2D(s.TEXTURE_2D,0,it,et.width,et.height,0,wt,U,et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ce,it,St[0].width,St[0].height,et.depth);for(let ut=0,Kt=St.length;ut<Kt;ut++)if(Q=St[ut],E.format!==Ni)if(wt!==null)if(ft){if(Yt)if(E.layerUpdates.size>0){const oe=mc(Q.width,Q.height,E.format,E.type);for(const Pt of E.layerUpdates){const Ae=Q.data.subarray(Pt*oe/Q.data.BYTES_PER_ELEMENT,(Pt+1)*oe/Q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Pt,Q.width,Q.height,1,wt,Ae)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Q.width,Q.height,et.depth,wt,Q.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,it,Q.width,Q.height,et.depth,0,Q.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Yt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Q.width,Q.height,et.depth,wt,U,Q.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,it,Q.width,Q.height,et.depth,0,wt,U,Q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ft&&_t&&e.texStorage2D(s.TEXTURE_2D,ce,it,St[0].width,St[0].height);for(let ut=0,Kt=St.length;ut<Kt;ut++)Q=St[ut],E.format!==Ni?wt!==null?ft?Yt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Q.width,Q.height,wt,Q.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,it,Q.width,Q.height,0,Q.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Yt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Q.width,Q.height,wt,U,Q.data):e.texImage2D(s.TEXTURE_2D,ut,it,Q.width,Q.height,0,wt,U,Q.data)}else if(E.isDataArrayTexture)if(ft){if(_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ce,it,et.width,et.height,et.depth),Yt)if(E.layerUpdates.size>0){const ut=mc(et.width,et.height,E.format,E.type);for(const Kt of E.layerUpdates){const oe=et.data.subarray(Kt*ut/et.data.BYTES_PER_ELEMENT,(Kt+1)*ut/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Kt,et.width,et.height,1,wt,U,oe)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,wt,U,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,it,et.width,et.height,et.depth,0,wt,U,et.data);else if(E.isData3DTexture)ft?(_t&&e.texStorage3D(s.TEXTURE_3D,ce,it,et.width,et.height,et.depth),Yt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,wt,U,et.data)):e.texImage3D(s.TEXTURE_3D,0,it,et.width,et.height,et.depth,0,wt,U,et.data);else if(E.isFramebufferTexture){if(_t)if(ft)e.texStorage2D(s.TEXTURE_2D,ce,it,et.width,et.height);else{let ut=et.width,Kt=et.height;for(let oe=0;oe<ce;oe++)e.texImage2D(s.TEXTURE_2D,oe,it,ut,Kt,0,wt,U,null),ut>>=1,Kt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ut=s.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),et.parentNode!==ut){ut.appendChild(et),u.add(E),ut.onpaint=Kt=>{const oe=Kt.changedElements;for(const Pt of u)oe.includes(Pt.image)&&(Pt.needsUpdate=!0)},ut.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{const oe=s.RGBA,Pt=s.RGBA,Ae=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,oe,Pt,Ae,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(St.length>0){if(ft&&_t){const ut=Qt(St[0]);e.texStorage2D(s.TEXTURE_2D,ce,it,ut.width,ut.height)}for(let ut=0,Kt=St.length;ut<Kt;ut++)Q=St[ut],ft?Yt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,wt,U,Q):e.texImage2D(s.TEXTURE_2D,ut,it,wt,U,Q);E.generateMipmaps=!1}else if(ft){if(_t){const ut=Qt(et);e.texStorage2D(s.TEXTURE_2D,ce,it,ut.width,ut.height)}Yt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,U,et)}else e.texImage2D(s.TEXTURE_2D,0,it,wt,U,et);y(E)&&E.mipmapsAutoUpdate===!0&&M(ht),Et.__version=vt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ut(R,E,X){if(E.image.length!==6)return;const ht=le(R,E),rt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+X);const vt=i.get(rt);if(rt.version!==vt.__version||ht===!0){e.activeTexture(s.TEXTURE0+X);const Et=xe.getPrimaries(xe.workingColorSpace),tt=E.colorSpace===on?null:xe.getPrimaries(E.colorSpace),et=E.colorSpace===on||Et===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const wt=E.isCompressedTexture||E.image[0].isCompressedTexture,U=E.image[0]&&E.image[0].isDataTexture,it=[];for(let Pt=0;Pt<6;Pt++)!wt&&!U?it[Pt]=_(E.image[Pt],!0,n.maxCubemapSize):it[Pt]=U?E.image[Pt].image:E.image[Pt],it[Pt]=Zt(E,it[Pt]);const Q=it[0],St=r.convert(E.format,E.colorSpace),ft=r.convert(E.type);let _t=b(E.internalFormat,St,ft,E.normalized,E.colorSpace);const Yt=E.isVideoTexture!==!0,ce=vt.__version===void 0||ht===!0,ut=rt.dataReady;let Kt=S(E,Q);ne(s.TEXTURE_CUBE_MAP,E);let oe;if(E.isDepthTexture){if(_t=v(E.format===cn,E.type),ce)if(Yt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,_t,Q.width,Q.height);else for(let Pt=0;Pt<6;Pt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,Q.width,Q.height,0,St,ft,null)}else if(wt){Yt&&ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,_t,Q.width,Q.height);for(let Pt=0;Pt<6;Pt++){oe=it[Pt].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const $e=oe[Ae];E.format!==Ni?St!==null?Yt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae,0,0,$e.width,$e.height,St,$e.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae,_t,$e.width,$e.height,0,$e.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae,0,0,$e.width,$e.height,St,ft,$e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae,_t,$e.width,$e.height,0,St,ft,$e.data)}}}else{if(oe=E.mipmaps,Yt&&ce){oe.length>0&&Kt++;const Pt=Qt(it[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,_t,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(U){Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,it[Pt].width,it[Pt].height,St,ft,it[Pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,it[Pt].width,it[Pt].height,0,St,ft,it[Pt].data);for(let Ae=0;Ae<oe.length;Ae++){const Qi=oe[Ae].image[Pt].image;Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae+1,0,0,Qi.width,Qi.height,St,ft,Qi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae+1,_t,Qi.width,Qi.height,0,St,ft,Qi.data)}}else{Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,St,ft,it[Pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,_t,St,ft,it[Pt]);for(let Ae=0;Ae<oe.length;Ae++){const $e=oe[Ae];Yt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae+1,0,0,St,ft,$e.image[Pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Ae+1,_t,St,ft,$e.image[Pt])}}}y(E)&&E.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),vt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function yt(R,E,X,ht,rt,vt){const Et=r.convert(X.format,X.colorSpace),tt=r.convert(X.type),et=b(X.internalFormat,Et,tt,X.normalized,X.colorSpace),wt=i.get(E),U=i.get(X);if(U.__renderTarget=E,!wt.__hasExternalTextures){const it=Math.max(1,E.width>>vt),Q=Math.max(1,E.height>>vt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,vt,et,it,Q,E.depth,0,Et,tt,null):e.texImage2D(rt,vt,et,it,Q,0,Et,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),xt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,rt,U.__webglTexture,0,Me(E)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,rt,U.__webglTexture,vt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function V(R,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,R),E.depthBuffer){const ht=E.depthTexture,rt=ht&&ht.isDepthTexture?ht.type:null,vt=v(E.stencilBuffer,rt),Et=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(E),vt,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(E),vt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,vt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,R)}else{const ht=E.textures;for(let rt=0;rt<ht.length;rt++){const vt=ht[rt],Et=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),et=b(vt.internalFormat,Et,tt,vt.normalized,vt.colorSpace);xt(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me(E),et,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me(E),et,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,et,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $(R,E,X){const ht=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const rt=i.get(E.depthTexture);rt.__renderTarget=E;const vt=ht?E.depthTexture.image[0]:E.depthTexture.image;(!rt.__webglTexture||vt.width!==E.width||vt.height!==E.height)&&(vt.width=E.width,vt.height=E.height,E.depthTexture.needsUpdate=!0),ht?Rt(E.depthTexture,0):At(E.depthTexture,0);const Et=rt.__webglTexture,tt=Me(E),et=ht?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,wt=E.depthTexture.format===cn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===dn)xt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,wt,et,Et,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,wt,et,Et,0);else if(E.depthTexture.format===cn)xt(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,wt,et,Et,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,wt,et,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(R){const E=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ht=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",rt)};ht.addEventListener("dispose",rt),E.__depthDisposeCallback=rt}E.__boundDepthTexture=ht}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let ht=0;ht<6;ht++)$(E.__webglFramebuffer[ht],R,ht);else R.texture.mipmaps.length>0?$(E.__webglFramebuffer[0],R,0):$(E.__webglFramebuffer,R,0);else if(X){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=s.createRenderbuffer(),V(E.__webglDepthbuffer[ht],R,!1);else{const rt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,vt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),V(E.__webglDepthbuffer,R,!1);else{const rt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,vt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(R,E,X){const ht=i.get(R);E!==void 0&&yt(ht.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ct(R)}function Ht(R){const E=R.texture,X=i.get(R),ht=i.get(E);R.addEventListener("dispose",k),L(R);const rt=R.textures,vt=R.isWebGLCubeRenderTarget===!0,Et=rt.length>1;if(Et||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=E.version,a.memory.textures++),vt){X.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(E.mipmaps.length>0){X.__webglFramebuffer[tt]=[];for(let et=0;et<E.mipmaps.length;et++)X.__webglFramebuffer[tt][et]=s.createFramebuffer()}else X.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(E.mipmaps.length>0){X.__webglFramebuffer=[];for(let tt=0;tt<E.mipmaps.length;tt++)X.__webglFramebuffer[tt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Et)for(let tt=0,et=rt.length;tt<et;tt++){const wt=i.get(rt[tt]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&xt(R)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let tt=0;tt<rt.length;tt++){const et=rt[tt];X.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[tt]);const wt=r.convert(et.format,et.colorSpace),U=r.convert(et.type),it=b(et.internalFormat,wt,U,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),Q=Me(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,it,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,X.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),V(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(vt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let tt=0;tt<6;tt++)if(E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)yt(X.__webglFramebuffer[tt][et],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,et);else yt(X.__webglFramebuffer[tt],R,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);y(E)?M(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(Et){for(let tt=0,et=rt.length;tt<et;tt++){const wt=rt[tt],U=i.get(wt);let it=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,U.__webglTexture),ne(it,wt),yt(X.__webglFramebuffer,R,wt,s.COLOR_ATTACHMENT0+tt,it,0),y(wt)&&M(it)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,ht.__webglTexture),ne(tt,E),E.mipmaps.length>0)for(let et=0;et<E.mipmaps.length;et++)yt(X.__webglFramebuffer[et],R,E,s.COLOR_ATTACHMENT0,tt,et);else yt(X.__webglFramebuffer,R,E,s.COLOR_ATTACHMENT0,tt,0);y(E)?M(tt):E.mipmaps.length>0&&s.texParameteri(tt,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&ct(R)}function O(R){const E=R.textures;for(let X=0,ht=E.length;X<ht;X++){const rt=E[X];if(y(rt)&&rt.mipmapsAutoUpdate===!0){const vt=w(R),Et=i.get(rt).__webglTexture;e.bindTexture(vt,Et),M(vt),e.unbindTexture()}}}const fe=[];function Jt(R){if(R.samples>0){if(xt(R)===!1){const E=R.textures,X=R.width,ht=R.height;let rt=s.COLOR_BUFFER_BIT;const vt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(R),tt=E.length>1;if(tt)for(let wt=0;wt<E.length;wt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let wt=0;wt<E.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const U=i.get(E[wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,X,ht,0,0,X,ht,rt,s.NEAREST),l===!0&&(fe.length=0,fe.push(s.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&fe.push(vt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let wt=0;wt<E.length;wt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[wt]);const U=i.get(E[wt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+wt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Me(R){return Math.min(n.maxSamples,R.samples)}function xt(R){const E=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Le(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function Zt(R,E){const X=R.colorSpace,ht=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Fr&&X!==on&&(xe.getTransfer(X)===Re?(ht!==Ni||rt!==gi)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",X)),E}function Qt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=nt,this.getTextureUnits=st,this.setTextureUnits=Mt,this.setTexture2D=At,this.setTexture2DArray=Ot,this.setTexture3D=Xt,this.setTextureCube=Rt,this.rebindTextures=Ct,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=xt,this.dispose=G}function ox(s,t){function e(i,n=on){let r;const a=xe.getTransfer(n);if(i===gi)return s.UNSIGNED_BYTE;if(i===Ho)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Vo)return s.UNSIGNED_SHORT_5_5_5_1;if(i===ah)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===oh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===sh)return s.BYTE;if(i===rh)return s.SHORT;if(i===Os)return s.UNSIGNED_SHORT;if(i===Go)return s.INT;if(i===Oi)return s.UNSIGNED_INT;if(i===Ei)return s.FLOAT;if(i===Fi)return s.HALF_FLOAT;if(i===lh)return s.ALPHA;if(i===ch)return s.RGB;if(i===Ni)return s.RGBA;if(i===dn)return s.DEPTH_COMPONENT;if(i===cn)return s.DEPTH_STENCIL;if(i===Wo)return s.RED;if(i===Xo)return s.RED_INTEGER;if(i===En)return s.RG;if(i===qo)return s.RG_INTEGER;if(i===Yo)return s.RGBA_INTEGER;if(i===Rr||i===Cr||i===Pr||i===Lr)if(a===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===Za||i===Ka||i===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===ja||i===to||i===eo||i===io||i===Ur||i===no)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Qa||i===ja)return a===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===to)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===eo)return r.COMPRESSED_R11_EAC;if(i===io)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ur)return r.COMPRESSED_RG11_EAC;if(i===no)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===xo||i===vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===so)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ro)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ao)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===co)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ho)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===po)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===go)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vo)return a===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_o||i===Mo||i===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===_o)return a===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wo||i===So||i===Or||i===bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===So)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new zi({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new C(new ue(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ux extends Rn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new hx,g={},_=e.getContextAttributes();let y=null,M=null;const w=[],b=[],v=new lt;let S=null,L=null;const A=new vi;A.viewport=new ze;const P=new vi;P.viewport=new ze;const k=[A,P],B=new wf;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let At=w[J];return At===void 0&&(At=new ha,w[J]=At),At.getTargetRaySpace()},this.getControllerGrip=function(J){let At=w[J];return At===void 0&&(At=new ha,w[J]=At),At.getGripSpace()},this.getHand=function(J){let At=w[J];return At===void 0&&(At=new ha,w[J]=At),At.getHandSpace()};function W(J){const At=b.indexOf(J.inputSource);if(At===-1)return;const Ot=w[At];Ot!==void 0&&(Ot.update(J.inputSource,J.frame,c||a),Ot.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){n.removeEventListener("select",W),n.removeEventListener("selectstart",W),n.removeEventListener("selectend",W),n.removeEventListener("squeeze",W),n.removeEventListener("squeezestart",W),n.removeEventListener("squeezeend",W),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",ot);for(let J=0;J<w.length;J++){const At=b[J];At!==null&&(b[J]=null,w[J].disconnect(At))}I=null,G=null,m.reset();for(const J in g)delete g[J];if(t.setRenderTarget(y),f=null,d=null,u=null,n=null,M=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),L!==null){const J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",W),n.addEventListener("selectstart",W),n.addEventListener("selectend",W),n.addEventListener("squeeze",W),n.addEventListener("squeezestart",W),n.addEventListener("squeezeend",W),n.addEventListener("end",H),n.addEventListener("inputsourceschange",ot),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Xt=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=_.stencil?cn:dn,Xt=_.stencil?ss:Oi);const Bt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ui(d.textureWidth,d.textureHeight,{format:Ni,type:gi,depthTexture:new rs(d.textureWidth,d.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ot={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,Ot),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ui(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Nt.setContext(n),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(J){for(let At=0;At<J.removed.length;At++){const Ot=J.removed[At],Xt=b.indexOf(Ot);Xt>=0&&(b[Xt]=null,w[Xt].disconnect(Ot))}for(let At=0;At<J.added.length;At++){const Ot=J.added[At];let Xt=b.indexOf(Ot);if(Xt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=b.length){b.push(Ot),Xt=Bt;break}else if(b[Bt]===null){b[Bt]=Ot,Xt=Bt;break}if(Xt===-1)break}const Rt=w[Xt];Rt&&Rt.connect(Ot)}}function Z(J,At){At===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(At.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let At=J.near,Ot=J.far;m.texture!==null&&(m.depthNear>0&&(At=m.depthNear),m.depthFar>0&&(Ot=m.depthFar)),B.near=P.near=A.near=At,B.far=P.far=A.far=Ot,(I!==B.near||G!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,G=B.far),B.layers.mask=J.layers.mask|6,A.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;const Xt=J.parent,Rt=B.cameras;Z(B,Xt);for(let Bt=0;Bt<Rt.length;Bt++)Z(Rt[Bt],Xt);B.projectionMatrix.copy(A.projectionMatrix),B.projectionMatrixInverse.copy(A.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),nt(J,B,Xt)};function nt(J,At,Ot){Ot===null?J.matrix.copy(At.matrixWorld):(J.matrix.copy(Ot.matrixWorld),J.matrix.invert(),J.matrix.multiply(At.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(At.projectionMatrix),J.projectionMatrixInverse.copy(At.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return g[J]};let st=null;function Mt(J,At){if(h=At.getViewerPose(c||a),p=At,h!==null){const Ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Xt=!1;Ot.length!==B.cameras.length&&(B.cameras.length=0,Xt=!0);for(let qt=0;qt<Ot.length;qt++){const ne=Ot[qt];let le=null;if(f!==null)le=f.getViewport(ne);else{const pt=u.getViewSubImage(d,ne);le=pt.viewport,qt===0&&(t.setRenderTargetTextures(M,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(M))}let at=k[qt];at===void 0&&(at=new vi,at.layers.enable(qt),at.viewport=new ze,k[qt]=at),at.matrix.fromArray(ne.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ne.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(le.x,le.y,le.width,le.height),qt===0&&(B.matrix.copy(at.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Xt===!0&&B.cameras.push(at)}const Rt=n.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const qt=u.getDepthInformation(Ot[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,n.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let qt=0;qt<Ot.length;qt++){const ne=Ot[qt].camera;if(ne){let le=g[ne];le||(le=new Th,g[ne]=le);const at=u.getCameraImage(ne);le.sourceTexture=at}}}}for(let Ot=0;Ot<w.length;Ot++){const Xt=b[Ot],Rt=w[Ot];Xt!==null&&Rt!==void 0&&Rt.update(Xt,At,c||a)}st&&st(J,At),At.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:At}),p=null}const Nt=new Bh;Nt.setAnimationLoop(Mt),this.setAnimationLoop=function(J){st=J},this.dispose=function(){}}}const dx=new _e,Kh=new ie;Kh.set(-1,0,0,0,1,0,0,0,1);function fx(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Oh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,_,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===hi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===hi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(dx.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kh),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===hi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function px(s,t,e,i){let n={},r={};function a(_,y){const M=y.program;i.uniformBlockBinding(_,M,n[_.id])}function o(_,y){let M=n[_.id];M===void 0&&(p(_),M=l(_),n[_.id]=M,_.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(_,w);const b=t.render.frame;r[_.id]!==b&&(c(_),r[_.id]=b)}function l(_){const y=s.createBuffer(),M=_.__size,w=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,w),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(_){const y=n[_.id],M=_.uniforms,w=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,v=M.length;b<v;b++){const S=M[b];if(Array.isArray(S))for(let L=0,A=S.length;L<A;L++)h(S[L],b,L,w);else h(S,b,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,y,M,w){if(d(_,y,M,w)===!0){const b=_.__offset,v=_.value;if(Array.isArray(v)){let S=0;for(let L=0;L<v.length;L++){const A=v[L],P=x(A,!0);u(A,_.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,_.__data)}}function u(_,y,M){typeof _=="number"||typeof _=="boolean"?y[M]=_:_.isMatrix3?(y[M]=_.elements[0],y[M+1]=_.elements[1],y[M+2]=_.elements[2],y[M+3]=0,y[M+4]=_.elements[3],y[M+5]=_.elements[4],y[M+6]=_.elements[5],y[M+7]=0,y[M+8]=_.elements[6],y[M+9]=_.elements[7],y[M+10]=_.elements[8],y[M+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-M),M):_.toArray(y,M)}function d(_,y,M,w){const b=_.value,v=y+"_"+M;if(Array.isArray(b)){w[v]===void 0&&(w[v]=[]);const S=w[v];let L=!1;for(let A=0;A<b.length;A++)f(b[A],S,A)===!0&&(L=!0);return L}return f(b,w,v)}function f(_,y,M){if(y[M]===void 0)return typeof _=="number"||typeof _=="boolean"?y[M]=_:ArrayBuffer.isView(_)?y[M]=_.slice():y[M]=_.clone(),!0;{const w=y[M];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return y[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function p(_){const y=_.uniforms;let M=0;const w=16;for(let v=0,S=y.length;v<S;v++){const L=Array.isArray(y[v])?y[v]:[y[v]];for(let A=0,P=L.length;A<P;A++){const k=L[A],B=Array.isArray(k.value)?k.value:[k.value],I=Array.isArray(y[v])||Array.isArray(k.value);let G=M;for(let H=0,ot=B.length;H<ot;H++){const Z=B[H],nt=x(Z,I),st=M%w,Mt=st%nt.boundary,Nt=st+Mt;M+=Mt,Nt!==0&&w-Nt<nt.storage&&(M+=w-Nt),H===0&&(G=M),M+=nt.storage}const W=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new W((M-G)/Float32Array.BYTES_PER_ELEMENT),k.__offset=G}}const b=M%w;return b>0&&(M+=w-b),_.__size=M,_.__cache={},this}function x(_,y){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){const y=_.target;y.removeEventListener("dispose",m),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function g(){for(const _ in n)s.deleteBuffer(n[_]);n={},r={}}return{bind:a,update:o,dispose:g}}const mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function gx(){return Li===null&&(Li=new wh(mx,16,16,En,Fi),Li.name="DFG_LUT",Li.minFilter=di,Li.magFilter=di,Li.wrapS=Yi,Li.wrapT=Yi,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class xx{constructor(t={}){const{canvas:e=Bu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=f,m=new Set([Yo,qo,Xo]),g=new Set([gi,Oi,Os,ss,Ho,Vo]),_=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const v=[],S=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1,k=null,B=null,I=null,G=null;this._outputColorSpace=si;let W=0,H=0,ot=null,Z=-1,nt=null;const st=new ze,Mt=new ze;let Nt=null;const J=new Wt(0);let At=0,Ot=e.width,Xt=e.height,Rt=1,Bt=null,Se=null;const qt=new ze(0,0,Ot,Xt),ne=new ze(0,0,Ot,Xt);let le=!1;const at=new ks,pt=new tl;let mt=!1,Ut=!1;const yt=new _e,V=new D,$=new ze,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ht(){return ot===null?Rt:1}let O=i;function fe(T,F){return e.getContext(T,F)}let Jt,Me,xt,Le,Zt,Qt,R,E,X,ht,rt,vt,Et,tt,et,wt,U,it,Q,St,ft,_t,Yt;try{const T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),O===null){const F="webgl2";if(O=fe(F,T),O===null)throw fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(T){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),we("WebGLRenderer: "+T.message),T}function ce(){Jt=new M0(O),Jt.init(),ft=new ox(O,Jt),Me=new c0(O,Jt,t,ft),xt=new rx(O,Jt),Me.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),B=O.createFramebuffer(),I=O.createFramebuffer(),G=O.createFramebuffer(),Le=new S0(O),Zt=new Xg,Qt=new ax(O,Jt,xt,Zt,Me,ft,Le),R=new _0(A),E=new Ef(O),_t=new o0(O,E),X=new y0(O,E,Le,_t),ht=new E0(O,X,E,_t,Le),it=new b0(O,Me,Qt),et=new h0(Zt),rt=new Wg(A,R,Jt,Me,_t,et),vt=new fx(A,Zt),Et=new Yg,tt=new jg(Jt),U=new a0(A,R,xt,ht,p,l),wt=new sx(A,ht,Me),Yt=new px(O,Le,Me,xt),Q=new l0(O,Jt,Le),St=new w0(O,Jt,Le),Le.programs=rt.programs,A.capabilities=Me,A.extensions=Jt,A.properties=Zt,A.renderLists=Et,A.shadowMap=wt,A.state=xt,A.info=Le}x!==gi&&(L=new A0(x,e.width,e.height,o,n,r));const ut=new ux(A,O);this.xr=ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Jt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Jt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Rt},this.setPixelRatio=function(T){T!==void 0&&(Rt=T,this.setSize(Ot,Xt,!1))},this.getSize=function(T){return T.set(Ot,Xt)},this.setSize=function(T,F,K=!0){if(ut.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=T,Xt=F,e.width=Math.floor(T*Rt),e.height=Math.floor(F*Rt),K===!0&&(e.style.width=T+"px",e.style.height=F+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Ot*Rt,Xt*Rt).floor()},this.setDrawingBufferSize=function(T,F,K){Ot=T,Xt=F,Rt=K,e.width=Math.floor(T*K),e.height=Math.floor(F*K),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(x===gi){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(st)},this.getViewport=function(T){return T.copy(qt)},this.setViewport=function(T,F,K,q){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,F,K,q),xt.viewport(st.copy(qt).multiplyScalar(Ht()).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,F,K,q){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,F,K,q),xt.scissor(Mt.copy(ne).multiplyScalar(Ht()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){xt.setScissorTest(le=T)},this.setOpaqueSort=function(T){Bt=T},this.setTransparentSort=function(T){Se=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,K=!0){let q=0;if(T){let Y=!1;if(ot!==null){const Tt=ot.texture.format;Y=m.has(Tt)}if(Y){const Tt=ot.texture.type,Ft=g.has(Tt),bt=U.getClearColor(),Dt=U.getClearAlpha(),Vt=bt.r,se=bt.g,pe=bt.b;Ft?(_[0]=Vt,_[1]=se,_[2]=pe,_[3]=Dt,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=Vt,y[1]=se,y[2]=pe,y[3]=Dt,O.clearBufferiv(O.COLOR,0,y))}else q|=O.COLOR_BUFFER_BIT}F&&(q|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&O.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),k=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),U.dispose(),Et.dispose(),tt.dispose(),Qt.dispose(),Zt.dispose(),R.dispose(),ht.dispose(),X.dispose(),_t.dispose(),Yt.dispose(),rt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",pl),ut.removeEventListener("sessionend",ml),mn.stop()};function Kt(T){T.preventDefault(),Br("WebGLRenderer: Context Lost."),P=!0}function oe(){Br("WebGLRenderer: Context Restored."),P=!1;const T=Le.autoReset,F=wt.enabled,K=wt.autoUpdate,q=wt.needsUpdate,Y=wt.type;ce(),Le.autoReset=T,wt.enabled=F,wt.autoUpdate=K,wt.needsUpdate=q,wt.type=Y}function Pt(T){we("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){const F=T.target;F.removeEventListener("dispose",Ae),$e(F)}function $e(T){Qi(T),Zt.remove(T)}function Qi(T){const F=Zt.get(T).programs;F!==void 0&&(F.forEach(function(K){rt.releaseProgram(K)}),T.isShaderMaterial&&rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,K,q,Y,Tt){F===null&&(F=ct);const Ft=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,bt=nu(T,F,K,q,Y);xt.setMaterial(q,Ft);let Dt=K.index,Vt=1;if(q.wireframe===!0){if(Dt=X.getWireframeAttribute(K),Dt===void 0)return;Vt=2}const se=K.drawRange,pe=K.attributes.position;let zt=se.start*Vt,me=(se.start+se.count)*Vt;Tt!==null&&(zt=Math.max(zt,Tt.start*Vt),me=Math.min(me,(Tt.start+Tt.count)*Vt)),Dt!==null?(zt=Math.max(zt,0),me=Math.min(me,Dt.count)):pe!=null&&(zt=Math.max(zt,0),me=Math.min(me,pe.count));const Ge=me-zt;if(Ge<0||Ge===1/0)return;_t.setup(Y,q,bt,K,Dt);let Pe,Ce=Q;if(Dt!==null&&(Pe=E.get(Dt),Ce=St,Ce.setIndex(Pe)),Y.isMesh)q.wireframe===!0?(xt.setLineWidth(q.wireframeLinewidth*Ht()),Ce.setMode(O.LINES)):Ce.setMode(O.TRIANGLES);else if(Y.isLine){let ti=q.linewidth;ti===void 0&&(ti=1),xt.setLineWidth(ti*Ht()),Y.isLineSegments?Ce.setMode(O.LINES):Y.isLineLoop?Ce.setMode(O.LINE_LOOP):Ce.setMode(O.LINE_STRIP)}else Y.isPoints?Ce.setMode(O.POINTS):Y.isSprite&&Ce.setMode(O.TRIANGLES);if(Y.isBatchedMesh)if(Jt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ti=Y._multiDrawStarts,kt=Y._multiDrawCounts,ai=Y._multiDrawCount,be=Dt?E.get(Dt).bytesPerElement:1,gn=Zt.get(q).currentProgram.getUniforms();for(let ei=0;ei<ai;ei++)gn.setValue(O,"_gl_DrawID",ei),Ce.render(ti[ei]/be,kt[ei])}else if(Y.isInstancedMesh)Ce.renderInstances(zt,Ge,Y.count);else if(K.isInstancedBufferGeometry){const ti=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,kt=Math.min(K.instanceCount,ti);Ce.renderInstances(zt,Ge,kt)}else Ce.render(zt,Ge)};function fl(T,F,K,q){k!==null&&T.isNodeMaterial&&k.setObject(q,T),mt===!0&&et.setState(T,K,!1),T.transparent===!0&&T.side===mi&&T.forceSinglePass===!1?(T.side=hi,T.needsUpdate=!0,us(T,F,q),T.side=bn,T.needsUpdate=!0,us(T,F,q),T.side=mi):us(T,F,q)}this.compile=function(T,F,K=null){K===null&&(K=T),k!==null&&k.renderStart(T,F,K),b=tt.get(K),b.init(F),S.push(b),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),T!==K&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),k!==null&&k.updateLights(b.state.lightsArray),Ut=this.localClippingEnabled,mt=et.init(this.clippingPlanes,Ut),mt===!0&&et.setGlobalState(this.clippingPlanes,F),k!==null&&wt.render(b.state.shadowsArray,K,F);const q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Tt=Y.material;if(Tt)if(Array.isArray(Tt))for(let Ft=0;Ft<Tt.length;Ft++){const bt=Tt[Ft];fl(bt,K,F,Y),q.add(bt)}else fl(Tt,K,F,Y),q.add(Tt)}),b=S.pop(),k!==null&&k.renderEnd(),q},this.compileAsync=function(T,F,K=null){const q=this.compile(T,F,K);return new Promise(Y=>{function Tt(){if(q.forEach(function(Ft){const Dt=Zt.get(Ft).currentProgram;(Dt===void 0||Dt.isReady())&&q.delete(Ft)}),q.size===0){Y(T);return}setTimeout(Tt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let jr=null;function eu(T){jr&&jr(T)}function pl(){mn.stop()}function ml(){mn.start()}const mn=new Bh;mn.setAnimationLoop(eu),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(T){jr=T,ut.setAnimationLoop(T),T===null?mn.stop():mn.start()},ut.addEventListener("sessionstart",pl),ut.addEventListener("sessionend",ml),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(T,F);const K=ut.enabled===!0&&ut.isPresenting===!0,q=L!==null&&(ot===null||K)&&L.begin(A,ot);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,ot),b=tt.get(T,S.length),b.init(F),b.state.textureUnits=Qt.getTextureUnits(),S.push(b),yt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?pt.setFromArrayCamera(F):at.setFromProjectionMatrix(yt,Ti,F.reversedDepth),Ut=this.localClippingEnabled,mt=et.init(this.clippingPlanes,Ut),w=Et.get(T,v.length),w.init(),v.push(w),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){const Ft=A.xr.getDepthSensingMesh();Ft!==null&&ta(Ft,F,-1/0,A.sortObjects)}ta(T,F,0,A.sortObjects),w.finish(),k!==null&&k.updateLights(b.state.lightsArray),A.sortObjects===!0&&w.sort(Bt,Se),Ct=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ct&&U.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),mt===!0&&et.beginShadows();const Y=b.state.shadowsArray;if(wt.render(Y,T,F),mt===!0&&et.endShadows(),(q&&L.hasRenderPass())===!1){const Ft=w.opaque,bt=w.transmissive;if(b.setupLights(),F.isArrayCamera){const Dt=F.cameras;if(bt.length>0)for(let Vt=0,se=Dt.length;Vt<se;Vt++){const pe=Dt[Vt];xl(Ft,bt,T,pe)}Ct&&U.render(T);for(let Vt=0,se=Dt.length;Vt<se;Vt++){const pe=Dt[Vt];gl(w,T,pe,pe.viewport)}}else bt.length>0&&xl(Ft,bt,T,F),Ct&&U.render(T),gl(w,T,F)}ot!==null&&H===0&&(Qt.updateMultisampleRenderTarget(ot),Qt.updateRenderTargetMipmap(ot)),q&&L.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),_t.resetDefaultState(),Z=-1,nt=null,S.pop(),S.length>0?(b=S[S.length-1],Qt.setTextureUnits(b.state.textureUnits),mt===!0&&et.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,k!==null&&k.renderEnd()};function ta(T,F,K,q){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){const Ft=F.isArrayCamera?pt:at;if(!T.frustumCulled||T.intersectsFrustum(Ft)){q&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);const bt=ht.update(T),Dt=T.material;Dt.visible&&w.push(T,bt,Dt,K,$.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){const Ft=F.isArrayCamera?pt:at;if(!T.frustumCulled||T.intersectsFrustum(Ft)){const bt=ht.update(T),Dt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$.copy(T.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),$.copy(bt.boundingSphere.center)),$.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(Dt)){const Vt=bt.groups;for(let se=0,pe=Vt.length;se<pe;se++){const zt=Vt[se],me=Dt[zt.materialIndex];me&&me.visible&&w.push(T,bt,me,K,$.z,zt,F)}}else Dt.visible&&w.push(T,bt,Dt,K,$.z,null,F)}}}const Tt=T.children;for(let Ft=0,bt=Tt.length;Ft<bt;Ft++)ta(Tt[Ft],F,K,q)}function gl(T,F,K,q){const{opaque:Y,transmissive:Tt,transparent:Ft}=T;b.setupLightsView(K),mt===!0&&et.setGlobalState(A.clippingPlanes,K),q&&xt.viewport(st.copy(q)),Y.length>0&&qs(Y,F,K),Tt.length>0&&qs(Tt,F,K),Ft.length>0&&qs(Ft,F,K),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function xl(T,F,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const zt=Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new Ui(1,1,{generateMipmaps:!0,type:zt?Fi:gi,minFilter:ln,samples:Math.max(4,Me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}const Tt=b.state.transmissionRenderTarget[q.id],Ft=q.viewport||st;Tt.setSize(Ft.z*A.transmissionResolutionScale,Ft.w*A.transmissionResolutionScale);const bt=A.getRenderTarget(),Dt=A.getActiveCubeFace(),Vt=A.getActiveMipmapLevel();A.setRenderTarget(Tt),A.getClearColor(J),At=A.getClearAlpha(),At<1&&A.setClearColor(16777215,.5),A.clear(),Ct&&U.render(K);const se=A.toneMapping;A.toneMapping=$i;const pe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),mt===!0&&et.setGlobalState(A.clippingPlanes,q),qs(T,K,q),Qt.updateMultisampleRenderTarget(Tt),Qt.updateRenderTargetMipmap(Tt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let me=0,Ge=F.length;me<Ge;me++){const Pe=F[me],{object:Ce,geometry:ti,material:kt,group:ai}=Pe;if(kt.side===mi&&Ce.layers.test(q.layers)){const be=kt.side;kt.side=hi,kt.needsUpdate=!0,vl(Ce,K,q,ti,kt,ai),kt.side=be,kt.needsUpdate=!0,zt=!0}}zt===!0&&(Qt.updateMultisampleRenderTarget(Tt),Qt.updateRenderTargetMipmap(Tt))}A.setRenderTarget(bt,Dt,Vt),A.setClearColor(J,At),pe!==void 0&&(q.viewport=pe),A.toneMapping=se}function qs(T,F,K){const q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Tt=T.length;Y<Tt;Y++){const Ft=T[Y],{object:bt,geometry:Dt,group:Vt}=Ft;let se=Ft.material;se.allowOverride===!0&&q!==null&&(se=q),bt.layers.test(K.layers)&&vl(bt,F,K,Dt,se,Vt)}}function vl(T,F,K,q,Y,Tt){k!==null&&Y.isNodeMaterial&&k.setObject(T,Y),T.onBeforeRender(A,F,K,q,Y,Tt),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(A,F,K,q,T,Tt),Y.transparent===!0&&Y.side===mi&&Y.forceSinglePass===!1?(Y.side=hi,Y.needsUpdate=!0,A.renderBufferDirect(K,F,q,Y,T,Tt),Y.side=bn,Y.needsUpdate=!0,A.renderBufferDirect(K,F,q,Y,T,Tt),Y.side=mi):A.renderBufferDirect(K,F,q,Y,T,Tt),T.onAfterRender(A,F,K,q,Y,Tt)}function _l(T){let F=0;for(const K of T)K.texture!==null&&F++;return F}function us(T,F,K){F.isScene!==!0&&(F=ct);const q=Zt.get(T),Y=b.state.lights,Tt=b.state.shadowsArray,Ft=Y.state.version,bt=rt.getParameters(T,Y.state,Tt,F,K,b.state.lightProbeGridArray),Dt=rt.getProgramCacheKey(bt);let Vt=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;const se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=R.get(T.envMap||q.environment,se),q.envMapRotation=q.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Ae),Vt=new Map,q.programs=Vt,q.programVariants=new Map);let pe=Vt.get(Dt);if(pe!==void 0){if(q.currentProgram===pe&&q.lightsStateVersion===Ft)return yl(T,bt),pe}else bt.uniforms=rt.getUniforms(T),k!==null&&T.isNodeMaterial&&k.build(T,K,bt),T.onBeforeCompile(bt,A),pe=rt.acquireProgram(bt,Dt),Vt.set(Dt,pe),q.uniforms=bt.uniforms;const zt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=et.uniform),yl(T,bt),q.needsLights=ru(T),q.lightsStateVersion=Ft,q.needsLights&&(zt.ambientLightColor.value=Y.state.ambient,zt.lightProbe.value=Y.state.probe,zt.sunLights.value=Y.state.sun,zt.sunLightShadows.value=Y.state.sunShadow,zt.directionalLights.value=Y.state.directional,zt.directionalLightShadows.value=Y.state.directionalShadow,zt.spotLights.value=Y.state.spot,zt.spotLightShadows.value=Y.state.spotShadow,zt.rectAreaLights.value=Y.state.rectArea,zt.ltc_1.value=Y.state.rectAreaLTC1,zt.ltc_2.value=Y.state.rectAreaLTC2,zt.pointLights.value=Y.state.point,zt.pointLightShadows.value=Y.state.pointShadow,zt.hemisphereLights.value=Y.state.hemi,zt.sunShadowMatrix.value=Y.state.sunShadowMatrix,zt.sunShadowCascade.value=Y.state.sunShadowCascade,zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,zt.spotLightMatrix.value=Y.state.spotLightMatrix,zt.spotLightMap.value=Y.state.spotLightMap,zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=_l(b.state.lightProbeGridArray),q.currentProgram=pe,q.uniformsList=null,pe}function iu(T,F,K,q,Y){const Tt=Zt.get(T),Ft=Tt.currentProgram.id+","+q+","+Y;let bt=Tt.programVariants.get(Ft);return bt===void 0?(bt=us(T,F,K),Tt.programVariants.set(Ft,bt)):(Tt.currentProgram=bt,Tt.uniformsList=null,Tt.outputColorSpace=q,Tt.toneMapping=Y),bt}function Ml(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Dr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function yl(T,F){const K=Zt.get(T);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function nu(T,F,K,q,Y){F.isScene!==!0&&(F=ct),Qt.resetTextureUnits();const Tt=F.fog,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,bt=ot===null?A.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:xe.workingColorSpace,Dt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Vt=R.get(q.envMap||Ft,Dt),se=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pe=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!K.morphAttributes.position,me=!!K.morphAttributes.normal,Ge=!!K.morphAttributes.color;let Pe=$i;q.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Pe=A.toneMapping);const Ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ti=Ce!==void 0?Ce.length:0,kt=Zt.get(q),ai=b.state.lights;if(mt===!0&&(Ut===!0||T!==nt)){const Ue=T===nt&&q.id===Z;et.setState(q,T,Ue)}let be=!1,gn=!1;q.version===kt.__version?kt.needsLights&&kt.lightsStateVersion!==ai.state.version||Y.isBatchedMesh&&kt.batching===!1||!Y.isBatchedMesh&&kt.batching===!0||Y.isBatchedMesh&&kt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&kt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&kt.instancing===!1||!Y.isInstancedMesh&&kt.instancing===!0||Y.isSkinnedMesh&&kt.skinning===!1||!Y.isSkinnedMesh&&kt.skinning===!0||Y.isInstancedMesh&&kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&kt.instancingMorph===!1&&Y.morphTexture!==null||kt.envMap!==Vt||q.fog===!0&&kt.fog!==Tt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==et.numPlanes||kt.numIntersection!==et.numIntersection)||kt.vertexAlphas!==se||kt.vertexTangents!==pe||kt.morphTargets!==zt||kt.morphNormals!==me||kt.morphColors!==Ge||kt.morphTargetsCount!==ti||kt.numLightProbeGrids!==_l(b.state.lightProbeGridArray)?be=!0:(kt.outputColorSpace!==bt||kt.toneMapping!==Pe)&&(gn=!0):(be=!0,kt.__version=q.version);let ei=kt.currentProgram;(be===!0||gn===!0)&&(ei=gn===!0?iu(q,F,Y,bt,Pe):us(q,F,Y),k&&q.isNodeMaterial&&k.onUpdateProgram(q,ei,kt));let Ys=!1,ji=!1,xn=!1;const ye=ei.getUniforms(),Je=kt.uniforms;if(xt.useProgram(ei.program)&&(Ys=!0,ji=!0,xn=!0),q.id!==Z&&(Z=q.id,ji=!0),Ys||nt!==T){xt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ye.setValue(O,"projectionMatrix",T.projectionMatrix),ye.setValue(O,"viewMatrix",T.matrixWorldInverse);const Ze=ye.map.cameraPosition;Ze!==void 0&&Ze.setValue(O,V.setFromMatrixPosition(T.matrixWorld)),Me.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ye.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),nt!==T&&(nt=T,ji=!0,xn=!0)}if(kt.needsLights&&(ai.state.sunShadowMap.length>0&&ye.setValue(O,"sunShadowMap",ai.state.sunShadowMap,Qt),ai.state.directionalShadowMap.length>0&&ye.setValue(O,"directionalShadowMap",ai.state.directionalShadowMap,Qt),ai.state.spotShadowMap.length>0&&ye.setValue(O,"spotShadowMap",ai.state.spotShadowMap,Qt),ai.state.pointShadowMap.length>0&&ye.setValue(O,"pointShadowMap",ai.state.pointShadowMap,Qt)),Y.isSkinnedMesh){ye.setOptional(O,Y,"bindMatrix"),ye.setOptional(O,Y,"bindMatrixInverse");const Ue=Y.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ye.setValue(O,"boneTexture",Ue.boneTexture,Qt))}Y.isBatchedMesh&&(ye.setOptional(O,Y,"batchingTexture"),ye.setValue(O,"batchingTexture",Y._matricesTexture,Qt),ye.setOptional(O,Y,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",Y._indirectTexture,Qt),ye.setOptional(O,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",Y._colorsTexture,Qt));const Mi=K.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&it.update(Y,K,ei),(ji||kt.receiveShadow!==Y.receiveShadow)&&(kt.receiveShadow=Y.receiveShadow,ye.setValue(O,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=gx()),ji){if(ye.setValue(O,"toneMappingExposure",A.toneMappingExposure),kt.needsLights&&su(Je,xn),Tt&&q.fog===!0&&vt.refreshFogUniforms(Je,Tt),vt.refreshMaterialUniforms(Je,q,Rt,Xt,b.state.transmissionRenderTarget[T.id]),kt.needsLights&&kt.numLightProbeGrids>0){const Ue=M;let Ze=0;for(const Bi of b.state.lightProbeGridArray)Bi.texture!==null&&(Ue.textures[Ze]=Bi.texture,Ue.min[Ze]=Bi.boundingBox.min,Ue.max[Ze]=Bi.boundingBox.max,Ue.resolution[Ze]=Bi.resolution,Ze++);for(const Bi in Ue)Ue[Bi].length=Ze;Je.probesSH.value=Ue.textures,Je.probesMin.value=Ue.min,Je.probesMax.value=Ue.max,Je.probesResolution.value=Ue.resolution}Dr.upload(O,Ml(kt),Je,Qt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Dr.upload(O,Ml(kt),Je,Qt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ye.setValue(O,"center",Y.center),ye.setValue(O,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(O,"normalMatrix",Y.normalMatrix),ye.setValue(O,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const Ue=q.uniformsGroups;for(let Ze=0,Bi=Ue.length;Ze<Bi;Ze++){const Sl=Ue[Ze];Yt.update(Sl,ei),Yt.bind(Sl,ei)}}return ei}function su(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function ru(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(T,F,K){const q=Zt.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Zt.get(T.texture).__webglTexture=F,Zt.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const K=Zt.get(T);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,K=0){ot=T,W=F,H=K;let q=null,Y=!1,Tt=!1;if(T){const bt=Zt.get(T);if(bt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(O.FRAMEBUFFER,bt.__webglFramebuffer),st.copy(T.viewport),Mt.copy(T.scissor),Nt=T.scissorTest,xt.viewport(st),xt.scissor(Mt),xt.setScissorTest(Nt),Z=-1;return}else if(bt.__webglFramebuffer===void 0)Qt.setupRenderTarget(T);else if(bt.__hasExternalTextures)Qt.rebindTextures(T,Zt.get(T.texture).__webglTexture,Zt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const se=T.depthTexture;if(bt.__boundDepthTexture!==se){if(se!==null&&Zt.has(se)&&(T.width!==se.image.width||T.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(T)}}const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Tt=!0);const Vt=Zt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[F])?q=Vt[F][K]:q=Vt[F],Y=!0):T.samples>0&&Qt.useMultisampledRTT(T)===!1?q=Zt.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?q=Vt[K]:q=Vt,st.copy(T.viewport),Mt.copy(T.scissor),Nt=T.scissorTest}else st.copy(qt).multiplyScalar(Rt).floor(),Mt.copy(ne).multiplyScalar(Rt).floor(),Nt=le;if(K!==0&&(q=B),xt.bindFramebuffer(O.FRAMEBUFFER,q)&&xt.drawBuffers(T,q),xt.viewport(st),xt.scissor(Mt),xt.setScissorTest(Nt),Y){const bt=Zt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,K)}else if(Tt){const bt=F;for(let Dt=0;Dt<T.textures.length;Dt++){const Vt=Zt.get(T.textures[Dt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Dt,Vt.__webglTexture,K,bt)}}else if(T!==null&&K!==0){const bt=Zt.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,bt.__webglTexture,K)}Z=-1};function wl(T){const F=Zt.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=Me.textureFormatReadable(T.format),F.__typeReadable=Me.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,K,q,Y,Tt,Ft,bt=0){if(!(T&&T.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Dt=Dt[Ft],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){xt.bindFramebuffer(O.FRAMEBUFFER,Dt);try{const Vt=T.textures[bt],se=Vt.format,pe=Vt.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);const zt=wl(Vt);if(zt.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-q&&K>=0&&K<=T.height-Y&&O.readPixels(F,K,q,Y,ft.convert(se),ft.convert(pe),Tt)}finally{const Vt=ot!==null?Zt.get(ot).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,F,K,q,Y,Tt,Ft,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Dt=Dt[Ft],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(F>=0&&F<=T.width-q&&K>=0&&K<=T.height-Y){xt.bindFramebuffer(O.FRAMEBUFFER,Dt);const Vt=T.textures[bt],se=Vt.format,pe=Vt.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+bt);const zt=wl(Vt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.bufferData(O.PIXEL_PACK_BUFFER,Tt.byteLength,O.STREAM_READ),O.readPixels(F,K,q,Y,ft.convert(se),ft.convert(pe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ge=ot!==null?Zt.get(ot).__webglFramebuffer:null;xt.bindFramebuffer(O.FRAMEBUFFER,Ge);const Pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Gu(O,Pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Tt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(me),O.deleteSync(Pe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,K=0){const q=Math.pow(2,-K),Y=Math.floor(T.image.width*q),Tt=Math.floor(T.image.height*q),Ft=F!==null?F.x:0,bt=F!==null?F.y:0;Qt.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Ft,bt,Y,Tt),xt.unbindTexture()},this.copyTextureToTexture=function(T,F,K=null,q=null,Y=0,Tt=0){let Ft,bt,Dt,Vt,se,pe,zt,me,Ge;const Pe=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(K!==null)Ft=K.max.x-K.min.x,bt=K.max.y-K.min.y,Dt=K.isBox3?K.max.z-K.min.z:1,Vt=K.min.x,se=K.min.y,pe=K.isBox3?K.min.z:0;else{const ye=Math.pow(2,-Y);Ft=Math.floor(Pe.width*ye),bt=Math.floor(Pe.height*ye),T.isDataArrayTexture?Dt=Pe.depth:T.isData3DTexture?Dt=Math.floor(Pe.depth*ye):Dt=1,Vt=0,se=0,pe=0}q!==null?(zt=q.x,me=q.y,Ge=q.z):(zt=0,me=0,Ge=0);const Ce=ft.convert(F.format),ti=ft.convert(F.type);let kt;F.isData3DTexture?(Qt.setTexture3D(F,0),kt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Qt.setTexture2DArray(F,0),kt=O.TEXTURE_2D_ARRAY):(Qt.setTexture2D(F,0),kt=O.TEXTURE_2D),xt.activeTexture(O.TEXTURE0),xt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),xt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),xt.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const ai=xt.getParameter(O.UNPACK_ROW_LENGTH),be=xt.getParameter(O.UNPACK_IMAGE_HEIGHT),gn=xt.getParameter(O.UNPACK_SKIP_PIXELS),ei=xt.getParameter(O.UNPACK_SKIP_ROWS),Ys=xt.getParameter(O.UNPACK_SKIP_IMAGES);xt.pixelStorei(O.UNPACK_ROW_LENGTH,Pe.width),xt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pe.height),xt.pixelStorei(O.UNPACK_SKIP_PIXELS,Vt),xt.pixelStorei(O.UNPACK_SKIP_ROWS,se),xt.pixelStorei(O.UNPACK_SKIP_IMAGES,pe);const ji=T.isDataArrayTexture||T.isData3DTexture,xn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const ye=Zt.get(T),Je=Zt.get(F),Mi=Zt.get(ye.__renderTarget),Ue=Zt.get(Je.__renderTarget);xt.bindFramebuffer(O.READ_FRAMEBUFFER,Mi.__webglFramebuffer),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ze=0;Ze<Dt;Ze++)ji&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.get(T).__webglTexture,Y,pe+Ze),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.get(F).__webglTexture,Tt,Ge+Ze)),O.blitFramebuffer(Vt,se,Vt+Ft,se+bt,zt,me,zt+Ft,me+bt,O.DEPTH_BUFFER_BIT,O.NEAREST);xt.bindFramebuffer(O.READ_FRAMEBUFFER,null),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Zt.has(T)){const ye=Zt.get(T),Je=Zt.get(F);xt.bindFramebuffer(O.READ_FRAMEBUFFER,I),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let Mi=0;Mi<Dt;Mi++)ji?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.__webglTexture,Y,pe+Mi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,Y),xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Je.__webglTexture,Tt,Ge+Mi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Je.__webglTexture,Tt),Y!==0?O.blitFramebuffer(Vt,se,Vt+Ft,se+bt,zt,me,zt+Ft,me+bt,O.COLOR_BUFFER_BIT,O.NEAREST):xn?O.copyTexSubImage3D(kt,Tt,zt,me,Ge+Mi,Vt,se,Ft,bt):O.copyTexSubImage2D(kt,Tt,zt,me,Vt,se,Ft,bt);xt.bindFramebuffer(O.READ_FRAMEBUFFER,null),xt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xn?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(kt,Tt,zt,me,Ge,Ft,bt,Dt,Ce,ti,Pe.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(kt,Tt,zt,me,Ge,Ft,bt,Dt,Ce,Pe.data):O.texSubImage3D(kt,Tt,zt,me,Ge,Ft,bt,Dt,Ce,ti,Pe):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Tt,zt,me,Ft,bt,Ce,ti,Pe.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Tt,zt,me,Pe.width,Pe.height,Ce,Pe.data):O.texSubImage2D(O.TEXTURE_2D,Tt,zt,me,Ft,bt,Ce,ti,Pe);xt.pixelStorei(O.UNPACK_ROW_LENGTH,ai),xt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be),xt.pixelStorei(O.UNPACK_SKIP_PIXELS,gn),xt.pixelStorei(O.UNPACK_SKIP_ROWS,ei),xt.pixelStorei(O.UNPACK_SKIP_IMAGES,Ys),Tt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(kt),xt.unbindTexture()},this.initRenderTarget=function(T){Zt.get(T).__webglFramebuffer===void 0&&Qt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Qt.setTextureCube(T,0):T.isData3DTexture?Qt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Qt.setTexture2DArray(T,0):Qt.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){W=0,H=0,ot=null,xt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}function Jh(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ie;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0,f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Fc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);const p=Fc(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Fc(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Xe(a,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const x=h.getComponent(d,p);o.setComponent(d+u,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const ae=Math.PI*2,Gt=(s,t,e)=>Math.max(t,Math.min(e,s)),ge=(s,t,e)=>s+(t-s)*e,j=(s=0,t=1)=>s+Math.random()*(t-s),ve=s=>s[Math.random()*s.length|0],es=(s,t,e)=>{let i=((t-s+Math.PI)%ae+ae)%ae-Math.PI;return s+i*e},Ss=s=>(s=((s+Math.PI)%ae+ae)%ae,s-Math.PI);function vx(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ui(s){const t=vx(s);return t.range=(e,i)=>e+t()*(i-e),t.int=(e,i)=>Math.floor(e+t()*(i-e+1)),t.pick=e=>e[Math.floor(t()*e.length)],t.chance=e=>t()<e,t}function Ci(s,t,e,i=1,n=1){const r=document.createElement("canvas");r.width=s,r.height=t;const a=r.getContext("2d");e(a,s,t);const o=new el(r);return o.wrapS=o.wrapT=Nr,o.repeat.set(i,n),o.anisotropy=8,o.colorSpace=si,o}function bi(s){return"$"+Math.round(s).toLocaleString("en-US")}function Da(s){const t=Math.floor(s)%24,e=Math.floor(s%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}class zc{constructor(t=24){this.cell=t,this.map=new Map}key(t,e){return t+":"+e}insert(t,e,i,n,r){const a=this.cell;for(let o=Math.floor(e/a);o<=Math.floor(n/a);o++)for(let l=Math.floor(i/a);l<=Math.floor(r/a);l++){const c=this.key(o,l);let h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}query(t,e,i=0){const n=this.cell,r=new Set;for(let a=Math.floor((t-i)/n);a<=Math.floor((t+i)/n);a++)for(let o=Math.floor((e-i)/n);o<=Math.floor((e+i)/n);o++){const l=this.map.get(this.key(a,o));if(l)for(const c of l)r.add(c)}return r}}function Qh(s=16757847){const t=new $t,e=new ee({color:s,transparent:!0,opacity:.9,depthWrite:!1,blending:Ki}),i=new C(new al(1.6,2.1,32),e);i.rotation.x=-Math.PI/2,i.position.y=.25;const n=new ee({color:s,transparent:!0,opacity:.18,depthWrite:!1,blending:Ki,side:mi}),r=new C(new te(1,1.4,38,18,1,!0),n);return r.position.y=19,t.add(i,r),t.userData.ring=i,t.userData.beam=r,t.userData.t=0,t}function jh(s,t){s.userData.t+=t;const e=1+Math.sin(s.userData.t*3)*.12;s.userData.ring.scale.setScalar(e),s.userData.ring.material.opacity=.55+Math.sin(s.userData.t*3)*.25,s.userData.beam.material.opacity=.09+Math.sin(s.userData.t*1.7)*.03,s.rotation.y+=t*.4}function Qr(s,t,e,i,n,r){s.fillStyle=i,s.fillRect(0,0,t,e);for(let a=0;a<n;a++){const o=r()*t,l=r()*e,c=r()*.09;s.fillStyle=r()>.5?`rgba(255,255,255,${c})`:`rgba(0,0,0,${c})`,s.fillRect(o,l,1+r()*2,1+r()*2)}}function _x(s=4){const t=ui(s);return Ci(256,256,(e,i,n)=>{Qr(e,i,n,"#22252b",5200,t),e.strokeStyle="rgba(0,0,0,.22)",e.lineWidth=1;for(let r=0;r<7;r++){e.beginPath();let a=t()*i,o=t()*n;e.moveTo(a,o);for(let l=0;l<4;l++)a+=t()*30-15,o+=t()*30,e.lineTo(a,o);e.stroke()}for(let r=0;r<20;r++)e.fillStyle=`rgba(255,255,255,${.02+t()*.03})`,e.fillRect(t()*i,t()*n,t()*20+3,1)})}function kc(s=7,t="#777a7b"){const e=ui(s);return Ci(256,256,(i,n,r)=>{Qr(i,n,r,t,3600,e),i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=2,i.strokeRect(0,0,n,r),i.strokeStyle="rgba(255,255,255,.05)",i.strokeRect(1,1,n-2,r-2)})}function Mx(s=11){const t=ui(s);return Ci(256,256,(e,i,n)=>{Qr(e,i,n,"#4b633c",9e3,t);for(let r=0;r<700;r++){e.strokeStyle=`rgba(${40+t()*50},${75+t()*60},${35+t()*30},${.3+t()*.5})`,e.beginPath();const a=t()*i,o=t()*n;e.moveTo(a,o),e.lineTo(a+t()*3-1.5,o-2-t()*4),e.stroke()}})}function yx(s=15){const t=ui(s);return Ci(256,256,(e,i,n)=>{Qr(e,i,n,"#b9a67c",8500,t);for(let r=0;r<80;r++){e.strokeStyle=`rgba(90,70,45,${.08+t()*.1})`,e.beginPath();const a=t()*n;e.moveTo(0,a),e.bezierCurveTo(i*.3,a+t()*12,i*.6,a-t()*12,i,a+t()*8),e.stroke()}})}function wx(s,t,e,i,n="glass"){const r=Ci(256,256,(o,l,c)=>{o.fillStyle=s,o.fillRect(0,0,l,c);const h=ui(i);for(let u=0;u<4;u++)o.fillStyle=`rgba(255,255,255,${.015+h()*.02})`,o.fillRect(u*64+2,0,60,c);for(let u=0;u<4;u++){for(let d=0;d<4;d++){const f=d*64+11,p=u*64+9,x=42,m=38,g=o.createLinearGradient(f,p,f+x,p+m);if(g.addColorStop(0,t),g.addColorStop(.55,"#1a222c"),g.addColorStop(1,"#0c1118"),o.fillStyle=g,o.fillRect(f,p,x,m),o.fillStyle="rgba(190,225,255,.12)",o.fillRect(f+2,p+2,x-4,2),o.fillStyle="rgba(0,0,0,.32)",o.fillRect(f+x/2-1,p,2,m),h()>.64&&(o.fillStyle=`rgba(240,245,255,${.05+h()*.09})`,o.fillRect(f,p,x,m)),n==="brick"){o.fillStyle="rgba(255,255,255,.06)";for(let y=p;y<p+m;y+=7)o.fillRect(f,y,x,1)}}o.fillStyle="rgba(0,0,0,.23)",o.fillRect(0,u*64+59,l,5)}}),a=Ci(256,256,(o,l,c)=>{o.fillStyle="#000",o.fillRect(0,0,l,c);const h=ui(i+871);for(let u=0;u<4;u++)for(let d=0;d<4;d++){if(h()>.42)continue;const f=d*64+11,p=u*64+9,x=h()>.25;o.fillStyle=x?e:"#b8dfff",o.globalAlpha=.35+h()*.65,o.fillRect(f+1,p+1,40,36)}o.globalAlpha=1});return{diffuse:r,emissive:a}}function qi(s,t,e,i=""){return Ci(512,256,(n,r,a)=>{n.fillStyle=t,n.fillRect(0,0,r,a),n.strokeStyle="rgba(255,255,255,.25)",n.lineWidth=8,n.strokeRect(10,10,r-20,a-20),n.fillStyle=e,n.font="700 92px Inter, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,r/2,a/2-(i?18:0)),i&&(n.font="500 26px Inter, sans-serif",n.globalAlpha=.7,n.fillText(i,r/2,a/2+66))})}function tu(s,t,e,i){return Ci(512,256,(n,r,a)=>{const o=n.createLinearGradient(0,0,r,a);o.addColorStop(0,e),o.addColorStop(1,i),n.fillStyle=o,n.fillRect(0,0,r,a);for(let l=0;l<14;l++)n.fillStyle=`rgba(255,255,255,${.03+Math.random()*.04})`,n.beginPath(),n.arc(Math.random()*r,Math.random()*a,20+Math.random()*80,0,Math.PI*2),n.fill();n.fillStyle="rgba(255,255,255,.92)",n.font="700 64px Space Grotesk, sans-serif",n.textAlign="left",n.fillText(s,40,128),n.fillStyle="rgba(255,255,255,.62)",n.font="500 22px Inter, sans-serif",n.fillText(t,42,168),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(40,190,150,3)})}function No(){return Ci(128,128,(s,t,e)=>{const i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.28,"rgba(255,226,170,.7)"),i.addColorStop(1,"rgba(255,200,100,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)})}function Sx(){return Ci(128,128,(s,t,e)=>{const i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(255,255,255,.55)"),i.addColorStop(.5,"rgba(210,215,225,.25)"),i.addColorStop(1,"rgba(200,205,215,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)})}function bx(){return Ci(32,32,(s,t,e)=>{const i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(210,230,255,.6)"),i.addColorStop(1,"rgba(210,230,255,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)})}function Ex(){const s=_x(),t=kc(7,"#8b8d8c");return s.repeat.set(3,150),t.repeat.set(1.2,160),{asphalt:new z({map:s,color:16777215,roughness:.94,metalness:.02}),sidewalk:new z({map:t,color:16777215,roughness:.92}),lot:new z({map:kc(9,"#85847f"),roughness:.98}),grass:new z({map:Mx(),roughness:1}),sand:new z({map:yx(),roughness:1})}}const Ai=new z({color:660509,roughness:.08,metalness:.75}),Tx=new z({color:858660,roughness:.12,metalness:.7});new z({color:12568524,roughness:.25,metalness:.9});const Uo=new z({color:1447963,roughness:.95}),Vs=new z({color:10134441,roughness:.35,metalness:.75}),De=new z({color:1777701,roughness:.75}),Xr=new z({color:2830905,roughness:.9}),Na=new z({color:15133162,roughness:.55}),As=new z({color:12069428,roughness:.45}),Ax=new z({color:14723367,roughness:.5}),hn=new z({color:11778235,roughness:.4,metalness:.6}),Ua=new Map;function Oo(s,t){const e=s.toFixed(2)+":"+t.toFixed(2);if(!Ua.has(e)){const i=new te(s,s,t,16);i.rotateZ(Math.PI/2),Ua.set(e,i)}return Ua.get(e)}const Oa=new Map;function Fo(s,t){const e=s.toFixed(2)+":"+t.toFixed(2);if(!Oa.has(e)){const i=new te(s*.58,s*.58,t+.02,8);i.rotateZ(Math.PI/2),Oa.set(e,i)}return Oa.get(e)}const ci={sedan:{name:"Nova Sable",klass:"SEDAN",len:4.55,wid:1.84,height:1.42,wheelbase:2.75,wheelR:.33,wheelW:.24,maxSpeed:47,accel:9.2,brake:22,grip:8.6,mass:1480,fuel:55,price:17500,seats:5},taxi:{name:"Nova Sable Taxi",klass:"TAXI",len:4.55,wid:1.84,height:1.46,wheelbase:2.75,wheelR:.33,wheelW:.24,maxSpeed:45,accel:8.8,brake:21,grip:8.4,mass:1490,fuel:55,price:19e3,seats:5,color:15250730},suv:{name:"Aster Ridge",klass:"SUV",len:4.95,wid:1.96,height:1.78,wheelbase:2.95,wheelR:.4,wheelW:.28,maxSpeed:42,accel:7.8,brake:19,grip:8.9,mass:2150,fuel:70,price:32e3,seats:5},sports:{name:"Vanta GT",klass:"SPORTS",len:4.48,wid:1.91,height:1.22,wheelbase:2.65,wheelR:.34,wheelW:.3,maxSpeed:63,accel:13.5,brake:27,grip:10.5,mass:1360,fuel:60,price:86e3,seats:2},super:{name:"Vanta XR",klass:"SUPERCAR",len:4.62,wid:2.02,height:1.12,wheelbase:2.72,wheelR:.35,wheelW:.34,maxSpeed:82,accel:18.5,brake:32,grip:12.2,mass:1290,fuel:62,price:268e3,seats:2},pickup:{name:"Bison 150",klass:"PICKUP",len:5.35,wid:2,height:1.83,wheelbase:3.3,wheelR:.42,wheelW:.3,maxSpeed:39,accel:7.4,brake:18,grip:8.2,mass:2280,fuel:76,price:38e3,seats:3},van:{name:"Haul-It 300",klass:"VAN",len:5.4,wid:2,height:2.1,wheelbase:3.2,wheelR:.38,wheelW:.27,maxSpeed:36,accel:6.4,brake:16,grip:7.8,mass:2400,fuel:80,price:41e3,seats:4},bus:{name:"Nova Transit 40",klass:"BUS",len:11.6,wid:2.52,height:3.15,wheelbase:6.3,wheelR:.53,wheelW:.34,maxSpeed:26,accel:4.2,brake:12,grip:7.2,mass:12800,fuel:220,price:32e4,seats:32},truck:{name:"Atlas Hauler",klass:"TRUCK",len:10.8,wid:2.48,height:3.4,wheelbase:5.4,wheelR:.5,wheelW:.36,maxSpeed:24,accel:3.8,brake:11,grip:6.9,mass:15600,fuel:260,price:21e4,seats:2},construction:{name:"Vulcan 8M",klass:"CONSTRUCTION",len:8.6,wid:2.55,height:3.25,wheelbase:4.6,wheelR:.58,wheelW:.4,maxSpeed:21,accel:3.2,brake:10,grip:7.4,mass:18500,fuel:240,price:195e3,seats:2},police:{name:"NCPD Interceptor",klass:"POLICE",len:4.7,wid:1.9,height:1.46,wheelbase:2.82,wheelR:.34,wheelW:.26,maxSpeed:56,accel:11.5,brake:25,grip:9.8,mass:1580,fuel:62,price:56e3,seats:4,color:15265264},fire:{name:"Nova Fire Engine",klass:"FIRE",len:9.6,wid:2.52,height:3.3,wheelbase:5.2,wheelR:.52,wheelW:.36,maxSpeed:29,accel:4.6,brake:13,grip:7.4,mass:14200,fuel:240,price:38e4,seats:6,color:12067886},ambulance:{name:"LifeLine Med 2",klass:"AMBULANCE",len:5.7,wid:2.1,height:2.65,wheelbase:3.4,wheelR:.4,wheelW:.28,maxSpeed:40,accel:7.2,brake:18,grip:8.1,mass:3100,fuel:85,price:12e4,seats:4,color:15265006},motorcycle:{name:"Wasp R",klass:"MOTORCYCLE",len:2.25,wid:.82,height:1.18,wheelbase:1.55,wheelR:.32,wheelW:.14,maxSpeed:58,accel:14,brake:24,grip:9.4,mass:210,fuel:18,price:22e3,seats:1},boat:{name:"Harborrunner 24",klass:"SPEEDBOAT",len:6.2,wid:2.2,height:1.4,wheelbase:0,wheelR:0,wheelW:0,maxSpeed:28,accel:6,brake:8,grip:4.4,mass:1600,fuel:90,price:74e3,seats:6,isBoat:!0},helicopter:{name:"Skyline H4",klass:"HELICOPTER",len:5.2,wid:2,height:2.4,wheelbase:0,wheelR:0,wheelW:0,maxSpeed:58,accel:8,brake:10,grip:5,mass:2200,fuel:120,price:64e4,seats:4,isAir:!0}},Rx=[13620182,1843753,9183020,2181746,4939086,12104097,6961964,3094080,9141051,5926792,10104646,14605008];function dt(s,t,e,i=0,n=0,r=0,a=0,o=0,l=0,c=!0){const h=new C(t,e);return h.position.set(i,n,r),h.rotation.set(a,o,l),h.castShadow=c,h.receiveShadow=!1,s.add(h),h}function gt(s,t,e){return new N(s,t,e)}function ll(s,t,e=2,i=2,n=!1){const r=[],a=t.wheelR,o=t.wheelW,l=t.wheelbase||t.len*.55,c=t.wid/2-.08,h=n?[-l/2,0,l/2]:[-l/2,l/2],u=n?[2,2,2]:[e,i];for(let d=0;d<h.length;d++)for(let f=-1;f<=1;f+=2)for(let p=0;p<u[d]/2;p++){const x=dt(s,Oo(a,o),Uo,c*f-f*p*o*1.1,a,h[d]),m=new C(Fo(a,o),Vs);m.position.set(0,0,0),x.add(m);const g=new C(gt(o*1.02,a*1.1,a*.3),Vs);g.position.set(0,0,0),x.add(g),x.userData.rim=m,r.push({mesh:x,front:d===h.length-1,side:f})}return r}function Fe(s,t,e,i,n,r,a,o,l={}){const c=new ee({color:t,toneMapped:!1}),h=new C(new N(r,a,o),c);return h.position.set(e,i,n),s.add(h),h.userData.base=new Wt(t),h.userData.kind=l.kind||"head",h}function Cx(s,t,e){const i=t.wid/2-.01,n=t.wheelbase||t.len*.55;for(const r of[-n/2,n/2])for(const a of[-1,1]){const o=new C(new N(.06,.16,t.wheelR*2.4),De);o.position.set(i*a,t.wheelR+.3,r),s.add(o)}}function Px(s,t,e,i,n=13621469){const r=new C(new N(.3,.09,.02),new z({color:n,roughness:.3,metalness:.8}));r.position.set(t,e,i),s.add(r)}function Lx(s,t){const e=ci[s],i=new $t,n=new z({color:t,roughness:.32,metalness:.55}),r=s==="taxi",a=s==="police",o=e.len,l=e.wid;e.wheelbase;const c=e.height*.42,h=e.wheelR+c/2+.04,u=dt(i,gt(l*.96,c,o*.97),n,0,h,0);u.userData.panel=!0,dt(i,gt(l*.92,c*.55,o*.23),n,0,h+c*.25,o*.33),dt(i,gt(l*.9,c*.5,o*.18),n,0,h+c*.22,-o*.36);const d=o*(s==="super"?.34:s==="sports"?.38:.42),f=l*.82,p=e.height*(s==="super"?.24:.3),x=s==="sports"||s==="super"?-o*.04:-o*.06,m=dt(i,gt(f,p,d),Ai,0,h+c/2+p/2,x);m.userData.panel=!0,dt(i,gt(f*.94,.09,d*.86),n,0,h+c/2+p-.02,x-.05);for(const P of[-1,1])dt(i,gt(.06,p,.08),n,P*f/2,h+c/2+p/2,x+d/2,0,0,0),dt(i,gt(.06,p,.1),n,P*f/2,h+c/2+p/2,x-d/2);dt(i,gt(f*.86,p*.8,.05),Ai,0,h+c/2+p*.48,x+d/2+.01,-.32,0,0),dt(i,gt(f*.84,p*.7,.05),Ai,0,h+c/2+p*.46,x-d/2-.01,.3,0,0),dt(i,gt(l*.98,.18,.18),De,0,h-c*.2,o/2-.02),dt(i,gt(l*.98,.18,.18),De,0,h-c*.2,-o/2+.02),dt(i,gt(l*.5,.16,.05),De,0,h-.02,o/2+.02);const g=h+c*.18,_=Fe(i,15922921,-l*.32,g,o/2+.02,.34,.13,.06,{kind:"head"}),y=Fe(i,15922921,l*.32,g,o/2+.02,.34,.13,.06,{kind:"head"}),M=Fe(i,5901067,-l*.33,g,-o/2-.02,.36,.12,.05,{kind:"brake"}),w=Fe(i,5901067,l*.33,g,-o/2-.02,.36,.12,.05,{kind:"brake"}),b=Fe(i,4860933,-l*.45,g,o/2+.02,.1,.1,.05,{kind:"turn"}),v=Fe(i,4860933,l*.45,g,o/2+.02,.1,.1,.05,{kind:"turn"});for(const P of[-1,1])dt(i,gt(.16,.1,.12),n,P*(l/2+.09),h+c*.55,x+d*.35);for(const P of[-1,1])dt(i,gt(.06,.14,o*.55),De,P*(l/2+.01),e.wheelR+.1,0);if(Cx(i,e),Px(i,0,h+c*.25,-o/2-.015),r){dt(i,gt(.7,.22,.3),new ee({color:16764762}),0,h+c/2+p+.12,x);for(const P of[-1,1])dt(i,gt(.06,.1,o*.8),De,P*l/2,h,0)}if(a&&(dt(i,gt(l*.45,.13,.85),As,0,h+c/2+p+.1,x),dt(i,gt(l*.45,.13,.85),new z({color:1715800,roughness:.4,metalness:.5}),0,h+c/2+p+.1,x),dt(i,gt(l*.5,.22,.16),De,0,h-.05,o/2+.1)),s==="sports"||s==="super"){dt(i,gt(l*.8,.05,.32),De,0,h+c*.75,-o/2+.18);for(const P of[-1,1])dt(i,gt(.06,.3,.08),De,P*l*.3,h+c*.55,-o/2+.18);dt(i,gt(l*.95,.06,.34),De,0,h-c*.42,o/2-.2)}if(s==="suv"||s==="pickup"){for(const P of[-1,1])dt(i,gt(.05,.06,o*.4),De,P*l*.3,h+c/2+p+.15,x-o*.05);s==="suv"&&dt(i,gt(l*.5,.12,o*.5),De,0,h+c/2+p+.22,x-o*.05)}s==="pickup"&&(dt(i,gt(l*.92,.14,o*.38),n,0,h+c*.55,-o*.28),dt(i,gt(l*.8,.4,o*.34),De,0,h+c*.35,-o*.28));const S=ll(i,e,2,2),L=[_.material,y.material],A=[M.material,w.material];return{group:i,wheels:S,bodyMat:n,headMats:L,brakeMats:A,turnMats:[b.material,v.material],cfg:e,type:s}}function Ix(s,t="bus"){const e=ci[t],i=new $t,n=new z({color:s,roughness:.4,metalness:.35}),r=e.len,a=e.wid,o=e.height*.78,l=e.wheelR+o/2+.08;dt(i,gt(a*.98,o,r*.98),n,0,l,0),dt(i,gt(a*1,.3,r*.99),De,0,e.wheelR+.25,0),dt(i,gt(a*.96,.18,r*.99),hn,0,l+o*.2,0),dt(i,gt(a*1.006,o*.32,r*.82),Ai,0,l+o*.22,0),dt(i,gt(a*1.007,o*.34,r*.28),Ai,0,l+o*.2,-r*.34),dt(i,gt(a*.9,o*.48,.06),Ai,0,l+o*.2,r*.5),dt(i,gt(a*.55,.28,r*.25),hn,0,l+o/2+.14,0);for(const p of[r*.34,-r*.2])dt(i,gt(.06,o*.62,1.1),Tx,a/2+.005,l-.1,p);Fe(i,16757575,0,l+o*.38,r/2+.035,2.4,.34,.04,{kind:"sign"});const c=Fe(i,15922921,-a*.34,e.wheelR+.55,r/2+.03,.38,.2,.06),h=Fe(i,15922921,a*.34,e.wheelR+.55,r/2+.03,.38,.2,.06),u=Fe(i,5901067,-a*.34,e.wheelR+.6,-r/2-.03,.3,.4,.05,{kind:"brake"}),d=Fe(i,5901067,a*.34,e.wheelR+.6,-r/2-.03,.3,.4,.05,{kind:"brake"}),f=ll(i,e,2,4);return{group:i,wheels:f,bodyMat:n,headMats:[c.material,h.material],brakeMats:[u.material,d.material],turnMats:[],cfg:e,type:t}}function Dx(s,t,e={}){const i=ci[s],n=new $t,r=new z({color:t,roughness:.45,metalness:.4}),a=i.len,o=i.wid,l=i.wheelR,c=a*(s==="construction"?.28:.25),h=a/2-c/2-.2,u=i.height*.58;if(dt(n,gt(o*.8,.3,a*.92),De,0,l+.2,0),dt(n,gt(o*.96,u,c),r,0,l+u/2+.3,h),dt(n,gt(o*.88,u*.55,c*.96),Ai,0,l+u*.62,h),dt(n,gt(o*.92,.22,c),r,0,l+u+.35,h),s==="truck"){dt(n,gt(o,i.height*.8,a*.62),Na,0,l+i.height*.4+.25,-a*.16),dt(n,gt(o*1.004,i.height*.1,a*.62),r,0,l+i.height*.3,-a*.16);for(let g=-5;g<=5;g++)dt(n,gt(o*1.006,i.height*.78,.05),hn,0,l+i.height*.4+.25,-a*.16+g*a*.05)}else if(s==="construction"){dt(n,gt(o,.9,a*.55),r,0,l+1,-a*.2),dt(n,gt(o*.92,.5,a*.5),new z({color:6117962,roughness:1}),0,l+1.6,-a*.2),dt(n,gt(o*.8,.4,a*.1),Ax,0,l+1.8,-a*.48);for(const g of[-1,1])for(const _ of[-a*.05,-a*.4])dt(n,gt(.12,.9,.12),De,g*o*.4,l+2,_)}else if(s==="fire"){const g=i.height*.8;dt(n,gt(o,g,a*.72),As,0,l+g/2+.25,-a*.12),dt(n,gt(o*1.002,g*.18,a*.72),Na,0,l+g*.62,-a*.12);const _=new $t;for(const y of[-1,1])dt(_,gt(.1,.1,a*.75),hn,y*.5,0,0);for(let y=-6;y<=6;y++)dt(_,gt(1.1,.06,.06),hn,0,0,y*a*.055);_.position.set(0,l+g+.5,-a*.05),n.add(_),dt(n,gt(1.6,.3,.16),De,0,l+u+.5,h+c/2);for(let y=0;y<3;y++)dt(n,gt(.5,.5,.16),hn,-1+y,l+u+.5,h+c/2+.2)}else if(s==="ambulance"){const g=i.height*.8;dt(n,gt(o,g,a*.7),Na,0,l+g/2+.25,-a*.13),dt(n,gt(o*1.004,.35,a*.7),As,0,l+g*.4,-a*.13);for(const _ of[-1,1])dt(n,gt(o*1.005,.5,.06),As,0,l+g*.72,-a*.13+_*a*.18);dt(n,gt(o*.86,.5,a*.72),Ai,0,l+g*.85,-a*.13)}const d=ll(n,i,2,4),f=Fe(n,15922921,-o*.33,l+.6,a/2+.03,.4,.2,.06),p=Fe(n,15922921,o*.33,l+.6,a/2+.03,.4,.2,.06),x=Fe(n,5901067,-o*.38,l+.6,-a/2-.02,.25,.3,.05,{kind:"brake"}),m=Fe(n,5901067,o*.38,l+.6,-a/2-.02,.25,.3,.05,{kind:"brake"});return(s==="fire"||s==="ambulance")&&(dt(n,gt(o*.6,.16,.4),As,0,l+u+.52,h),dt(n,gt(o*.3,.16,.4),new ee({color:1793279,toneMapped:!1}),-o*.15,l+u+.52,h)),{group:n,wheels:d,bodyMat:r,headMats:[f.material,p.material],brakeMats:[x.material,m.material],turnMats:[],cfg:i,type:s}}function Nx(s){const t=ci.motorcycle,e=new $t,i=new z({color:s,roughness:.35,metalness:.6});dt(e,gt(.34,.3,1.1),i,0,.75,0),dt(e,gt(.3,.18,.45),Xr,0,.96,-.2),dt(e,gt(.24,.12,.5),i,0,1.02,.38),dt(e,gt(.7,.06,.06),De,0,1.12,.32);const n=dt(e,Oo(.32,.14),Uo,0,.32,.78),r=dt(e,Oo(.32,.14),Uo,0,.32,-.72),a=new C(Fo(.32,.14),Vs);n.add(a);const o=new C(Fo(.32,.14),Vs);r.add(o);for(const h of[-1,1])dt(e,gt(.05,.75,.05),hn,h*.08,.65,.72,.25,0,0);Fe(e,15922921,0,.95,.6,.22,.16,.06),Fe(e,5901067,0,.86,-.55,.16,.1,.05,{kind:"brake"});const l=[{mesh:n,front:!0,side:1},{mesh:r,front:!1,side:1}],c=new $t;return dt(c,gt(.36,.5,.24),new z({color:3029314,roughness:.8}),0,1.3,-.05),dt(c,new Ne(.16,10,8),new z({color:1909287,roughness:.7}),0,1.67,-.02),dt(c,gt(.1,.44,.1),new z({color:3029314,roughness:.8}),-.25,1.3,.18,-.5,0,0),dt(c,gt(.1,.44,.1),new z({color:3029314,roughness:.8}),.25,1.3,.18,-.5,0,0),c.visible=!1,e.add(c),{group:e,wheels:l,bodyMat:i,headMats:[],brakeMats:[],rider:c,cfg:t,type:"motorcycle"}}function Ux(s){const t=ci.boat,e=new $t,i=new z({color:s,roughness:.3,metalness:.3}),n=new Lh;n.moveTo(-1.1,-3.1),n.lineTo(1.1,-3.1),n.lineTo(1.1,1.4),n.quadraticCurveTo(1,2.7,0,3.1),n.quadraticCurveTo(-1,2.7,-1.1,1.4),n.lineTo(-1.1,-3.1);const r=new rl(n,{depth:.8,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2});r.rotateX(Math.PI/2);const a=new C(r,i);a.position.y=.9,a.castShadow=!0,e.add(a),dt(e,gt(1.8,.08,4.8),new z({color:10128500,roughness:.9}),0,1.05,-.3),dt(e,gt(2.2,.12,5.8),new z({color:1731210,roughness:.4}),0,.72,0),dt(e,gt(1.5,.5,.06),Ai,0,1.45,.7,-.25,0,0),dt(e,gt(1.4,.4,.06),Ai,0,1.4,-.9,.2,0,0);for(let o=0;o<2;o++)dt(e,gt(.55,.18,.5),Xr,-.45+o*.9,1.28,-1.2);dt(e,gt(1,.3,.5),De,0,1.35,.6),dt(e,gt(.4,.1,.35),new ee({color:6805759,toneMapped:!1}),0,1.52,.6),dt(e,gt(.4,.65,.7),De,0,.8,-3.25),Fe(e,13626111,0,1,3.02,.3,.12,.08),Fe(e,5901067,0,1,-3.02,.3,.12,.08,{kind:"brake"});for(const o of[-1,1])dt(e,gt(.04,.25,3.2),hn,o*1.05,1.28,-.6);return{group:e,wheels:[],bodyMat:i,headMats:[],brakeMats:[],cfg:t,type:"boat"}}function Ox(s){const t=ci.helicopter,e=new $t,i=new z({color:s,roughness:.3,metalness:.45}),n=new Ne(1.05,18,14),r=new C(n,i);r.scale.set(1,1,1.9),r.position.y=1.65,r.castShadow=!0,e.add(r);const a=new C(new Ne(.92,16,12),Ai);a.scale.set(.98,.8,1),a.position.set(0,1.75,1),e.add(a),dt(e,gt(.28,.28,2.9),i,0,1.75,-2.1),dt(e,gt(.1,.8,.6),i,0,2.2,-3.4);const o=new z({color:3817541,roughness:.6,metalness:.5});for(const u of[-1,1])dt(e,gt(.1,.1,3),o,u*.85,.28,0),dt(e,gt(.1,.7,.1),o,u*.7,.62,.7,0,0,-.25),dt(e,gt(.1,.7,.1),o,u*.7,.62,-.7,0,0,.25);const l=new $t;l.position.set(0,2.6,0),dt(l,gt(.18,.12,5.4),De,0,0,0,0,0,0),dt(l,gt(5.4,.06,.18),De,0,0,0);const c=new C(new te(.14,.14,.4,8),Vs);c.position.y=.1,l.add(c),e.add(l);const h=new $t;return h.position.set(.25,2.1,-3.45),dt(h,gt(.06,1.4,.16),De,0,0,0),dt(h,gt(.06,.16,1.4),De,0,0,0),e.add(h),Fe(e,15922921,-.65,1.3,1.65,.18,.18,.08),Fe(e,15922921,.65,1.3,1.65,.18,.18,.08),Fe(e,16719904,0,2.2,-2.8,.12,.12,.12),Fe(e,2162496,-1.05,1.5,-.8,.1,.1,.1),dt(e,gt(.5,.3,.5),Xr,-.35,1.5,.2),dt(e,gt(.5,.3,.5),Xr,.35,1.5,.2),{group:e,wheels:[],bodyMat:i,headMats:[],brakeMats:[],rotor:l,tailRotor:h,cfg:t,type:"helicopter"}}function Fx(s){const t=s.group;t.updateMatrixWorld(!0);const e=new Set,i=o=>{o?.traverse&&o.traverse(l=>e.add(l))};for(const o of s.wheels||[])i(o.mesh);i(s.rider),i(s.rotor),i(s.tailRotor);const n=new Set([...s.headMats||[],...s.brakeMats||[],...s.turnMats||[]]);n.size&&t.traverse(o=>{o.isMesh&&n.has(o.material)&&e.add(o)});const r=new _e().copy(t.matrixWorld).invert(),a=new Map;t.traverse(o=>{if(!o.isMesh||e.has(o)||Array.isArray(o.material))return;const l=o.geometry;if(!l?.attributes?.position||!l.attributes.normal)return;const c=o.material.uuid;let h=a.get(c);h||(h={material:o.material,geos:[],meshes:[],panel:!1,shadow:!1},a.set(c,h));const u=l.index?l.toNonIndexed():l.clone();for(const d of Object.keys(u.attributes))d!=="position"&&d!=="normal"&&d!=="uv"&&u.deleteAttribute(d);u.clearGroups(),u.applyMatrix4(new _e().multiplyMatrices(r,o.matrixWorld)),h.geos.push(u),h.meshes.push(o),h.panel=h.panel||!!o.userData.panel,h.shadow=h.shadow||o.castShadow});for(const o of a.values()){if(o.meshes.length<2){for(const h of o.geos)h.dispose();continue}const l=Jh(o.geos,!1);if(!l){for(const h of o.geos)h.dispose();continue}const c=new C(l,o.material);c.castShadow=o.shadow,c.userData.panel=o.panel,t.add(c);for(const h of o.meshes)h.parent?.remove(h);for(const h of o.geos)h.dispose()}}function is(s,t,e={}){let i;return["bus"].includes(s)?i=Ix(t):["truck","construction","fire","ambulance"].includes(s)?i=Dx(s,t):s==="motorcycle"?i=Nx(t):s==="boat"?i=Ux(t):s==="helicopter"?i=Ox(t):i=Lx(s,t),Fx(i),i.group.userData.vehicleType=s,i.group.userData.wheels=i.wheels,i.rider&&(i.group.userData.rider=i.rider),i.color=t,e.traffic&&i.rider&&(i.rider.visible=!0),i}function zo(s){return s==="taxi"?15250730:s==="police"?15265264:s==="fire"?12067886:s==="ambulance"?15265006:s==="construction"?14066975:ve(Rx)}function Bc(s,t,e,i){const{lightsOn:n=!1,braking:r=!1,left:a=!1,right:o=!1,hazard:l=!1}=i;for(const c of s)c.color.setHex(n?16774872:4934982);for(const c of t)c.color.setHex(r?16722731:n?7999504:3803144);if(e.length>=2){const c=a||l,h=o||l;e[0].color.setHex(c?16756768:3811848),e[1].color.setHex(h?16756768:3811848)}}function zx(s){const t=s.scene,e=new Ne(1900,32,20),i=new zi({side:hi,depthWrite:!1,uniforms:{topColor:{value:new Wt(3108520)},bottomColor:{value:new Wt(12047334)},night:{value:0},storm:{value:0},sunDir:{value:new D(0,1,0)}},vertexShader:"varying vec3 vWorld; void main(){ vWorld = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`}),n=new C(e,i);n.frustumCulled=!1,t.add(n),s.sky=n;const r=new Mf(16771012,2.4);r.position.set(300,500,200),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=10,r.shadow.camera.far=1500,r.shadow.camera.left=-280,r.shadow.camera.right=280,r.shadow.camera.top=280,r.shadow.camera.bottom=-280,r.shadow.bias=-.0012,r.shadow.normalBias=.6,t.add(r),t.add(r.target),s.sun=r;const a=new xf(10340607,3883568,.6);t.add(a),s.hemi=a;const o=new yf(12113151,.24);t.add(o),s.ambient=o;const l=new To({map:No(),color:13624575,transparent:!0,opacity:0,depthWrite:!1,blending:Ki}),c=new Wl(l);c.scale.set(70,70,1),c.position.set(-500,900,-600),t.add(c),s.moon=c;const h=new Ie,u=new Float32Array(1400*3);for(let x=0;x<1400;x++){const m=Math.random()*ae,g=Math.acos(2*Math.random()-1),_=1500;u[x*3]=Math.sin(g)*Math.cos(m)*_,u[x*3+1]=Math.abs(Math.cos(g))*_*.8+120,u[x*3+2]=Math.sin(g)*Math.sin(m)*_}h.setAttribute("position",new Xe(u,3));const d=new jn({map:bx(),size:6,transparent:!0,opacity:0,depthWrite:!1,blending:Ki,sizeAttenuation:!0}),f=new ts(h,d);t.add(f),s.stars=f;const p=new To({map:kx(),color:15922943,transparent:!0,opacity:.85,depthWrite:!1});s.cloudSpriteMat=p;for(let x=0;x<30;x++){const m=new Wl(p),g=90+Math.random()*180;m.scale.set(g*2.1,g*.8,1),m.position.set(j(-900,900),j(130,220),j(-900,900)),m.userData.speed=j(1.5,4.5),t.add(m),s.clouds.push(m)}}function kx(){const s=document.createElement("canvas");s.width=256,s.height=128;const t=s.getContext("2d");for(let i=0;i<34;i++){const n=30+Math.random()*196,r=64+(Math.random()-.5)*40,a=12+Math.random()*30,o=t.createRadialGradient(n,r,0,n,r,a);o.addColorStop(0,"rgba(255,255,255,.5)"),o.addColorStop(.55,"rgba(240,246,255,.22)"),o.addColorStop(1,"rgba(240,246,255,0)"),t.fillStyle=o,t.beginPath(),t.arc(n,r,a,0,ae),t.fill()}const e=new el(s);return e.colorSpace=si,e}function Bx(s,t){const e=s.root,i=new Ee,n=new te(.09,.14,5.6,6),r=new z({color:3159611,roughness:.7,metalness:.5}),a=new N(2.4,.1,.1),o=new N(1.1,.18,.4),l=new z({color:16770744,emissive:16764810,emissiveIntensity:2.2,roughness:.4}),c=[];for(let B=0;B<We;B++){const I=re(B);for(let G=-Be+12;G<=Be-12;G+=44)for(const W of[-1,1])c.push({pole:[I+W*(Ve+3.4),2.85,G],arm:[I+W*(Ve+2.4),5.5,G],armR:0,head:[I+W*(Ve+1.6),5.45,G]}),c.push({pole:[G,2.85,I+W*(Ve+3.4)],arm:[G,5.5,I+W*(Ve+2.4)],armR:Math.PI/2,head:[G,5.45,I+W*(Ve+1.6)]})}const h=new Oe(n,r,c.length),u=new Oe(a,r,c.length),d=new Oe(o,l,c.length);c.forEach((B,I)=>{i.position.set(...B.pole),i.rotation.set(0,0,0),i.updateMatrix(),h.setMatrixAt(I,i.matrix),i.position.set(...B.arm),i.rotation.set(0,B.armR,0),i.updateMatrix(),u.setMatrixAt(I,i.matrix),i.position.set(...B.head),i.rotation.set(0,0,0),i.updateMatrix(),d.setMatrixAt(I,i.matrix)}),h.castShadow=!0,e.add(h,u,d);const f=new Ie,p=new Float32Array(c.length*3);c.forEach((B,I)=>{p[I*3]=B.head[0],p[I*3+1]=B.head[1]-.1,p[I*3+2]=B.head[2]}),f.setAttribute("position",new Xe(p,3));const x=new jn({map:No(),color:16762236,size:6,transparent:!0,opacity:.35,depthWrite:!1,blending:Ki,sizeAttenuation:!0}),m=new ts(f,x);m.frustumCulled=!1,e.add(m),s.lampGlow=m;const g=new te(.16,.2,.6,8),_=new z({color:11549230,roughness:.7}),y=new Oe(g,_,44);for(let B=0;B<44;B++){const I=Math.floor(Math.random()*We),G=re(I),W=j(-Be+20,Be-20),H=Math.random()>.5?1:-1;i.position.set(Math.random()>.5?G+H*10:W,.45,Math.random()>.5?W:G+H*10),i.updateMatrix(),y.setMatrixAt(B,i.matrix)}e.add(y);const M=new te(.32,.26,.9,8),w=new z({color:3621450,roughness:.8}),b=new Oe(M,w,55);for(let B=0;B<55;B++){const I=Math.floor(Math.random()*We),G=re(I),W=j(-Be+20,Be-20),H=Math.random()>.5?1:-1;i.position.set(Math.random()>.5?G+H*10.2:W,.6,Math.random()>.5?W:G+H*10.2),i.updateMatrix(),b.setMatrixAt(B,i.matrix)}e.add(b);const v=[[-260,-192,Math.PI/2],[132,-96,Math.PI/2],[96,180,0],[-96,96,0],[260,48,Math.PI/2],[-192,260,0],[288,-240,Math.PI/2],[-48,-300,0]];for(const[B,I,G]of v){s.busStops.push({x:B,z:I});const W=new $t;W.position.set(B,.15,I),W.rotation.y=G;const H=new C(new N(5.6,.18,2.2),new z({color:3028800,roughness:.7,metalness:.4}));H.position.y=2.7,W.add(H);const ot=new C(new N(5.2,2.5,.08),new z({color:10471133,transparent:!0,opacity:.28,roughness:.05,metalness:.3}));ot.position.set(0,1.4,-1),W.add(ot);for(const st of[-2.6,2.6]){const Mt=new C(new N(.1,2.7,.1),s.metalMat);Mt.position.set(st,1.35,-1),W.add(Mt)}const Z=new C(new N(4.2,.16,.55),s.woodMat);Z.position.set(0,.58,-.7),W.add(Z);const nt=new C(new ue(.9,.9),new ee({map:qi("BUS","#1c5a8a","#eef8ff"),transparent:!0}));nt.position.set(2.9,1.8,0),W.add(nt),e.add(W),s.busStops[s.busStops.length-1].mesh=W}[["SOLARIS","clean energy · bright future","#062c46","#1188b8"],["VOLT","the city runs electric","#2b0a3d","#8a37b8"],["AURORA","live above it all","#3c1a08","#c86a23"],["NOVA AIR","fly beyond the skyline","#082c33","#16a6a0"]].forEach((B,I)=>{const G=I*Math.PI/2+.4,W=Math.cos(G)*190,H=Math.sin(G)*190,ot=new ee({map:tu(B[0],B[1],B[2],B[3])}),Z=new C(new ue(28,14),ot);Z.position.set(W,42+I*3,H),Z.lookAt(0,30,0),e.add(Z);for(const nt of[-1,1]){const st=new C(new N(.5,8,.5),s.metalMat);st.position.set(W+nt*8,38,H),e.add(st)}});for(let B=0;B<8;B++)for(let I=0;I<8;I++){const G=s.blocks.find(W=>W.bi===B&&W.bj===I);if(!(!G||!["suburb","residential","waterfront","park"].includes(G.district)))for(let W=0;W<4;W++){const H=Math.floor(Math.random()*4),ot=j(-30,30);H===0&&s.tree(G.x+ot,G.z-35.6,j(.55,.9)),H===1&&s.tree(G.x+ot,G.z+35.6,j(.55,.9)),H===2&&s.tree(G.x-35.6,G.z+ot,j(.55,.9)),H===3&&s.tree(G.x+35.6,G.z+ot,j(.55,.9))}}const L=new Ie,A=new Float32Array(360);for(let B=0;B<120;B++)A[B*3]=-24+j(-25,25),A[B*3+1]=j(.6,4),A[B*3+2]=-24+j(-25,25);L.setAttribute("position",new Xe(A,3));const P=new jn({color:16769162,size:.35,transparent:!0,opacity:.7,map:No(),blending:Ki,depthWrite:!1}),k=new ts(L,P);if(e.add(k),s.fireflyPoints=k,s.factorySmokePos){const B=new Ie,I=new Float32Array(210);for(let H=0;H<70;H++)I[H*3]=s.factorySmokePos.x+j(-2,2),I[H*3+1]=j(0,48),I[H*3+2]=s.factorySmokePos.z+j(-2,2);B.setAttribute("position",new Xe(I,3));const G=new jn({map:Sx(),color:9211020,size:10,transparent:!0,opacity:.28,depthWrite:!1}),W=new ts(B,G);W.frustumCulled=!1,e.add(W),s.smokeParticles=W}s.finalizeProps()}function Gx(s,t){const e=s.root,i=new C(new ue(1700,100),s.mats.sand);i.rotation.x=-Math.PI/2,i.position.set(0,.05,438),i.receiveShadow=!0,e.add(i);const n=new C(new ue(1400,12),s.mats.sidewalk);n.rotation.x=-Math.PI/2,n.position.set(0,.12,392),e.add(n);const r=new z({color:7166531,roughness:.9});for(let p=-420;p<=420;p+=16){const x=new C(new N(.16,1.1,.16),r);x.position.set(p,.65,398),e.add(x)}const a=new C(new N(840,.1,.12),r);a.position.set(0,1.15,398),e.add(a);for(let p=0;p<18;p++){const x=-400+p*46+j(-8,8),m=404+p%2*6,g=new $t,_=new C(new te(.18,.32,7,6),new z({color:8020551,roughness:1}));_.position.y=3.5,g.add(_);for(let y=0;y<6;y++){const M=new C(new Ri(.8,4.4,5),new z({color:3103282,roughness:1}));M.position.set(Math.cos(y/6*ae)*1.4,7.2,Math.sin(y/6*ae)*1.4),M.rotation.set(Math.cos(y/6*ae)*.9,0,Math.sin(y/6*ae)*.9+.5),g.add(M)}g.position.set(x,.1,m),e.add(g)}const o=new ue(2600,1300,80,40),l=new zi({uniforms:{time:{value:0},night:{value:0},deep:{value:new Wt(670546)},shallow:{value:new Wt(2788518)},sky:{value:new Wt(10405597)}},vertexShader:`
      uniform float time; varying vec3 vWorld; varying float vWave;
      void main(){
        vec3 p = position;
        float w = sin(p.x*.035 + time*.7)*.5 + sin(p.y*.06 - time*.9)*.3 + sin((p.x+p.y)*.11 + time*1.6)*.12;
        p.z += w; vWave = w;
        vec4 wp = modelMatrix * vec4(p,1.0);
        vWorld = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
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
      }`,transparent:!0}),c=new C(o,l);c.rotation.x=-Math.PI/2,c.position.set(0,.02,920),e.add(c),s.water=c;const h=new C(new ue(1700,3),new ee({color:15202047,transparent:!0,opacity:.5}));h.rotation.x=-Math.PI/2,h.position.set(0,.09,486),e.add(h),s.animated.push({type:"foam",mesh:h});const u=new z({color:8085313,roughness:.95});for(let p=0;p<4;p++){const x=new C(new N(4,.35,26),u);x.position.set(300+p*13,.35,460),e.add(x)}const d=new C(new N(52,.4,6),u);d.position.set(319,.4,444),e.add(d);const f=new C(new ue(7,2.4),new ee({map:qi("MARINA","#123a4a","#d8f4ff"),transparent:!0}));f.position.set(319,2.6,440),e.add(f),s.marina={x:319,z:452},s.addPOI("marina","Harbor Marina",319,442,20,{icon:"marina"});for(let p=0;p<14;p++){const x=-380+p*55,m=414+p%3*8,g=new C(new te(.05,.05,2.6,5),s.metalMat);g.position.set(x,1.35,m),e.add(g);const _=new C(new Ri(2,.6,10),new z({color:ve([14248795,5214115,14726236,7183991]),roughness:.9,side:mi}));_.position.set(x,2.7,m),e.add(_)}}function Hx(s,t,e,i=1,n=Math.random){const r=new $t,a=new C(new te(.16*i,.3*i,6.2*i,7),new z({color:8020551,roughness:1}));a.position.y=3.1*i,a.rotation.z=(n()-.5)*.08,r.add(a);const o=new z({color:3103282,roughness:1,side:mi});for(let l=0;l<7;l++){const c=new C(new Ri(.75*i,4.2*i,5),o),h=l/7*ae;c.position.set(Math.cos(h)*1.3*i,6.6*i,Math.sin(h)*1.3*i),c.rotation.set(Math.cos(h)*.95,0,Math.sin(h)*.95+.45),r.add(c)}r.position.set(t,.1,e),s.add(r)}function Vx(s,t,e,i,n){const r=s.root,a=new $t;a.position.set(t,.12,e),a.rotation.y=i;const o=new z({color:n,roughness:.86}),l=new z({color:ve([9060147,3690588,7031347,4872770]),roughness:.9}),c=new C(new N(9,3.4,7),o);c.position.y=1.8,c.castShadow=!0,a.add(c);const h=new C(new Ri(7.1,2.7,4),l);h.position.y=4.5,h.rotation.y=Math.PI/4,h.castShadow=!0,a.add(h);const u=new C(new N(1.2,2.2,.14),new z({color:4863269,roughness:.8}));u.position.set(0,1.15,3.55),a.add(u);const d=new z({color:10474726,emissive:16762746,emissiveIntensity:.15,roughness:.15,metalness:.3});for(const m of[-1,1]){const g=new C(new N(1.6,1.2,.1),d);g.position.set(m*2.9,2,3.56),a.add(g)}const f=new C(new N(.7,2.1,.7),new z({color:7031354,roughness:.95}));f.position.set(2.2,5,-1.2),a.add(f),r.add(a);const p=Math.abs(Math.cos(i))*4.6+Math.abs(Math.sin(i))*3.6,x=Math.abs(Math.cos(i))*3.6+Math.abs(Math.sin(i))*4.6;s.colliders.push({minX:t-p,maxX:t+p,minZ:e-x,maxZ:e+x,height:7,type:"building",mesh:c})}function Fa(s,t,e,i,n,r,a=!1){const o=s.root,l=i-t,c=n-e,h=Math.hypot(l,c),u=Math.atan2(l,c),d=new $t;d.position.set((t+i)*.5,0,(e+n)*.5),d.rotation.y=u,o.add(d);const f=new z({color:4870230,roughness:.9}),p=new z({color:2632753,roughness:.96}),x=new C(new N(r,.32,h),f);if(x.position.y=-.06,x.castShadow=!0,d.add(x),!a){const S=new C(new N(r-1.6,.06,h-.4),p);S.position.y=.12,d.add(S)}const m=new z({color:11055544,roughness:.35,metalness:.7}),g=new z({color:5331812,roughness:.55,metalness:.5});for(const S of[-1,1]){const L=new C(new N(.16,.16,h),m);L.position.set(S*(r/2-.25),1.05,0),d.add(L);const A=new C(new N(.12,.12,h),m);A.position.set(S*(r/2-.25),.55,0),d.add(A);const P=Math.max(2,Math.floor(h/9));for(let B=0;B<=P;B++){const I=new C(new N(.14,1.1,.14),g);I.position.set(S*(r/2-.25),.55,-h/2+B*h/P),d.add(I)}const k=new C(new N(.3,.55,h),g);k.position.set(S*(r/2-.7),-.45,0),d.add(k)}const _=new te(.85,1.1,9,8),y=Math.max(1,Math.floor(h/22));for(let S=1;S<=y;S++){const L=new C(_,new z({color:6975606,roughness:.8}));L.position.set(0,-4.2,-h/2+S*h/(y+1)),d.add(L)}if(a)for(const S of[-1,1]){const L=new C(new N(.22,2.6,h),g);L.position.set(S*(r/2+.1),1.7,0),d.add(L);const A=Math.max(3,Math.floor(h/7));for(let P=0;P<=A;P++){const k=new C(new N(.15,2.6,.15),g);k.position.set(S*(r/2+.1),1.7,-h/2+P*h/A),d.add(k)}}const M=Math.min(t,i)-r/2-2,w=Math.max(t,i)+r/2+2,b=Math.min(e,n)-r/2-2,v=Math.max(e,n)+r/2+2;s.bridges.push({minX:M,maxX:w,minZ:b,maxZ:v})}function Wx(s,t){const e=s.root,i=new z({color:14207906,roughness:1}),n=new z({color:4942396,roughness:1}),r=new z({color:2764339,roughness:.95}),a=new z({color:10132114,roughness:.9}),o=[{name:"PALM ISLAND",x:300,z:700,rx:182,rz:132},{name:"CORAL ISLAND",x:-310,z:748,rx:156,rz:114}];s.islands=o,s.bridges=[];for(const w of o){const b=new C(new te(1,1.04,.16,56),i);b.scale.set(w.rx,1,w.rz),b.position.set(w.x,-.02,w.z),b.receiveShadow=!0,e.add(b);const v=new C(new te(1,1,.18,56),n);v.scale.set(w.rx*.87,1,w.rz*.85),v.position.set(w.x,.02,w.z),v.receiveShadow=!0,e.add(v);for(let S=0;S<16;S++){const L=t()*ae,A=new C(new il(.8+t()*1.7,0),new z({color:8025192,roughness:1,flatShading:!0}));A.position.set(w.x+Math.cos(L)*w.rx*.97,.2,w.z+Math.sin(L)*w.rz*.97),A.rotation.set(t(),t()*ae,t()),e.add(A)}}const l=[{x:300,z:700,w:16,d:262},{x:300,z:700,w:330,d:16},{x:-310,z:748,w:16,d:208},{x:-310,z:748,w:268,d:16}];s.islandRoads=l;for(const w of l){const b=new C(new N(w.w,.05,w.d),r);b.position.set(w.x,.135,w.z),e.add(b);const v=w.w>w.d;for(const S of[-1,1]){const L=new C(new N(v?w.w:1.2,.18,v?1.2:w.d),a);L.position.set(w.x+(v?0:S*(w.w/2+.4)),.16,w.z+(v?S*(w.d/2+.4):0)),e.add(L)}}const c=new N(.18,.02,3),h=new ee({color:14276280});for(let w=590;w<=812;w+=12){const b=new C(c,h);b.position.set(300,.17,w),e.add(b)}for(let w=150;w<=452;w+=12){const b=new C(c,h);b.rotation.y=Math.PI/2,b.position.set(w,.17,700),e.add(b)}for(let w=660;w<=840;w+=12){const b=new C(c,h);b.position.set(-310,.17,w),e.add(b)}for(let w=-432;w<=-188;w+=12){const b=new C(c,h);b.rotation.y=Math.PI/2,b.position.set(w,.17,748),e.add(b)}const u=[15261126,14137743,13227727,14731177,12175805],d=[[158,638,.2],[398,648,-.15],[236,776,.35],[400,778,-.4],[248,604,.1],[356,606,-.2],[244,800,.25],[358,802,-.3],[-390,690,.15],[-232,692,-.25],[-392,806,.3],[-228,810,-.15]];for(let w=0;w<d.length;w++)Vx(s,d[w][0],d[w][1],d[w][2],u[w%u.length]);for(let w=0;w<26;w++){const b=o[w%2],v=t()*ae,S=b.x+Math.cos(v)*b.rx*(.55+t()*.34),L=b.z+Math.sin(v)*b.rz*(.55+t()*.34);Math.abs(S-300)<14||Math.abs(L-700)<14||Math.abs(S+310)<14||Math.abs(L-748)<14||Math.abs(S-200)<10&&L>440&&L<682||Hx(e,S,L,.8+t()*.45,t)}for(let w=0;w<10;w++){const b=180+w*26,v=820+w%2*6,S=new C(new te(.05,.05,2.4,5),s.metalMat);S.position.set(b,1.3,v),e.add(S);const L=new C(new Ri(1.9,.55,10),new z({color:ve([14248795,5214115,14726236]),roughness:.9,side:mi}));L.position.set(b,2.5,v),e.add(L)}const f=new $t;f.position.set(-360,.1,830);const p=new z({color:15657696,roughness:.7}),x=new z({color:11680308,roughness:.65});for(let w=0;w<5;w++){const b=new C(new te(1.8-w*.22,2-w*.22,3,12),w%2?x:p);b.position.y=1.5+w*3,f.add(b)}const m=new C(new te(2.3,2,.35,12),new z({color:3093818,roughness:.6}));m.position.y=15.1,f.add(m);const g=new C(new Ne(.75,10,8),new ee({color:16773818,toneMapped:!1}));g.position.y=16,f.add(g);const _=new An(16769696,2.4,70,2);_.position.y=16,f.add(_),e.add(f),s.lighthouse={group:f,light:_,lamp:g};const y=new z({color:8085313,roughness:.95});for(let w=0;w<3;w++){const b=new C(new N(4,.38,22),y);b.position.set(-286+w*14,.35,878),e.add(b)}const M=new C(new N(38,.42,6),y);M.position.set(-272,.38,868),e.add(M),Fa(s,300,466,300,594,18),Fa(s,122,700,-152,741,16),Fa(s,200,466,200,622,9,!0),s.addPOI("park","Palm Island Beach",300,812,34,{icon:"park"}),s.addPOI("shop","Palm Island Market",388,700,16,{icon:"shop"}),s.addPOI("marina","Coral Island Marina",-272,866,22,{icon:"marina"}),s.addPOI("park","Coral Lighthouse",-360,820,18,{icon:"park"}),s.addPOI("hotel","Palm Island Resort",208,646,20,{icon:"hotel"})}function Xx(s,t){const e=s.root,i=250,n=14,r=18,a=new z({color:9411235,roughness:.4,metalness:.55}),o=new z({color:4871520,roughness:.5,metalness:.5}),l=new $t,c=2*(i-r),h=[[0,-i,c,3.2,0],[0,i,c,3.2,0],[-i,0,3.2,c,0],[i,0,3.2,c,0]];for(const[V,$,ct,Ct]of h){const Ht=new C(new N(ct,.9,Ct),a);Ht.position.set(V,n,$),Ht.castShadow=!0,l.add(Ht);const O=new C(new N(ct+.2,.16,Ct+.2),o);O.position.set(V,n+.52,$),l.add(O)}const u=[[i-r,-i+r,-Math.PI/2],[i-r,i-r,0],[-i+r,i-r,Math.PI/2],[-i+r,-i+r,Math.PI]];for(const[V,$,ct]of u)Gc(l,V,$,r,ct,ct+Math.PI/2,n,.9,3.2,a),Gc(l,V,$,r,ct,ct+Math.PI/2,n+.52,.16,3.4,o);const d=new te(.75,.95,n,8);for(let V=-i;V<=i;V+=25)for(const $ of[-i,i]){const ct=new C(d,o);ct.position.set(V,n/2,$),ct.castShadow=!0,l.add(ct)}for(let V=-i+25;V<=i-25;V+=25)for(const $ of[-i,i]){const ct=new C(d,o);ct.position.set($,n/2,V),ct.castShadow=!0,l.add(ct)}const f=[{x:0,z:-i,ang:0,name:"NORTH LOOP"},{x:i,z:0,ang:Math.PI/2,name:"EAST GATE"},{x:0,z:i,ang:Math.PI,name:"HARBOR VIEW"},{x:-i,z:0,ang:-Math.PI/2,name:"WEST END"}];for(let V=0;V<f.length;V++){const $=f[V],ct=new C(new N(28,.6,7),a);ct.position.set($.x+Math.cos($.ang)*0,n-.9,$.z+0),l.add(ct);const Ct=new C(new N(26,.25,6),new z({color:14149872,roughness:.3,metalness:.2,transparent:!0,opacity:.65}));Ct.position.set($.x,n+4.4,$.z),l.add(Ct);for(let X=-1;X<=1;X+=2){const ht=new C(new N(.28,5.3,.28),o);ht.position.set($.x+X*12,n+2.1,$.z),l.add(ht)}const Ht=new C(new N(28,.2,7),new z({color:5267568,roughness:.5}));Ht.position.set($.x,n+4.6,$.z),l.add(Ht);const O=new ee({map:qi("MONORAIL","#071d2b","#8ceaff",$.name),transparent:!0}),fe=new C(new ue(6,3),O);fe.position.set($.x,n+2.8,$.z),fe.rotation.y=$.ang+Math.PI,l.add(fe);const Jt=$.x,Me=$.z+10,xt=new C(new N(5.5,n,5.5),new z({color:4148312,roughness:.35,metalness:.4}));xt.position.set(Jt,n/2,Me),l.add(xt);const Le=new C(new N(4.2,n-1.5,4.4),new z({color:7325149,transparent:!0,opacity:.45,roughness:.1,metalness:.6}));Le.position.set(Jt,n/2,Me),l.add(Le);const Zt=new C(new N(6.4,.4,6.4),a);Zt.position.set(Jt,n+.4,Me),l.add(Zt);const Qt=new $t;Qt.position.set(Jt,0,Me+5);const R=new C(new te(.08,.1,2.8,6),o);R.position.y=1.4,Qt.add(R);const E=new C(new ue(2.2,1.1),new ee({map:qi("NOVA RAIL","#081c2b","#8ceaff",$.name),transparent:!0}));E.position.set(0,3.2,0),Qt.add(E),l.add(Qt),s.addPOI("monorail",$.name+" Monorail",Jt,Me+2,7,{icon:"transit",station:V}),$.tower=new D(Jt,0,Me),$.platformY=n}const p=Yx();p.position.set(0,n+1.1,-i),l.add(p),e.add(l);const x=4*(2*i),m=x/8,g={group:p,progress:m,speed:0,targetSpeed:11,dwell:5.5,manual:!1,stations:f,Y:n,R:i,perimeter:x,doorOpen:!0,currentStation:0,lastStation:0,stopAt:null,riding:!1,update(V,$){if(this.manual){this.targetSpeed=Gt(this.targetSpeed,0,24),this.speed=Qe.damp(this.speed,this.targetSpeed,1.6,V),this.speed*=1-V*.12,this.progress=(this.progress+this.speed*V)%this.perimeter,this.speed<0&&(this.speed=0),this.speed>.5||this.stationAt(this.progress)!==this.currentStation?this.currentStation=-1:this.speed<.25&&(this.currentStation=this.stationAt(this.progress)),this.doorOpen=this.currentStation>=0&&this.speed<.25,this.positionCars(),this.animateDoors(V);return}const ct=this.nextStationDistance();this.dwell>0?(this.dwell-=V,this.speed=Qe.damp(this.speed,0,6,V),this.doorOpen=!0):(this.doorOpen=!1,ct<26&&this.speed>0?(this.speed=Qe.damp(this.speed,0,3.4,V),ct<1.6&&(this.dwell=5.5,this.speed=0,this.currentStation=this.stationAt(this.progress))):this.speed=Qe.damp(this.speed,11,1.1,V),this.progress=(this.progress+this.speed*V)%this.perimeter,this.speed>.5&&(this.currentStation=-1)),this.positionCars(),this.animateDoors(V)},nextStationDistance(){let V=1e9;for(const $ of this.stations){let Ct=(this.stationProgress($)-this.progress+this.perimeter)%this.perimeter;Ct<2&&(Ct=this.perimeter),V=Math.min(V,Ct)}return V},stationProgress(V){const $=this.perimeter/4;return Math.abs(V.z+i)<1?$*.5:Math.abs(V.x-i)<1?$*1.5:Math.abs(V.z-i)<1?$*2.5:$*3.5},stationAt(V){let $=-1,ct=4;for(let Ct=0;Ct<this.stations.length;Ct++){const Ht=this.stationProgress(this.stations[Ct]);let O=Math.abs((V-Ht+this.perimeter/2)%this.perimeter-this.perimeter/2);O<ct&&(ct=O,$=Ct)}return $},positionCars(){const V=qx(this.progress,this.perimeter,this.R);this.group.position.set(V.x,this.Y+1.1,V.z),this.group.rotation.y=-V.angle+Math.PI/2;for(let $=1;$<this.group.userData.cars.length;$++)this.group.userData.cars[$].position.set(0,0,-$*10.6)},animateDoors(V){const $=this.group.userData.doors||[];for(const ct of $)ct.scale.x=Qe.damp(ct.scale.x,this.doorOpen?.05:1,5,V)},board(){return this.dwell=5,!0},stationPositions(){return this.stations.map(V=>V.tower)}};g.positionCars(),g.animateDoors(1),s.monorail=g;const _=.1,y=-446,M=y-5.2,w=new z({color:11055028,roughness:.26,metalness:.85}),b=new C(new N(1200,.28,15),new z({color:4012596,roughness:1}));b.position.set(0,.05,(y+M)/2),e.add(b);const v=new N(.3,.13,10.4),S=new Oe(v,s.woodMat,300),L=new Ee;for(let V=0;V<300;V++)L.position.set(-600+V*4,_+.1,(y+M)/2),L.rotation.set(0,Math.PI/2,0),L.updateMatrix(),S.setMatrixAt(V,L.matrix);e.add(S);for(const V of[y,M])for(const $ of[-1,1]){const ct=new C(new N(1200,.13,.16),w);ct.position.set(0,_+.21,V+$*.75),e.add(ct);const Ct=new C(new N(1200,.05,.34),new z({color:5922659,roughness:.6,metalness:.5}));Ct.position.set(0,_+.13,V+$*.75),e.add(Ct)}const A=new z({color:5858156,roughness:.5,metalness:.6});for(let V=-600;V<=600;V+=48){const $=new C(new te(.14,.2,8.6,7),A);$.position.set(V,4.3,M-4.1),e.add($);const ct=new C(new N(.14,.14,7.4),A);ct.position.set(V,7.9,M-.55),e.add(ct);for(const Ct of[y,M]){const Ht=new C(new N(.035,.035,48),new ee({color:2830388}));Ht.position.set(V,7.62,Ct),e.add(Ht)}}for(const V of[-340,-40,260,520]){const $=new C(new te(.08,.11,3.4,6),A);$.position.set(V,1.8,y+3.6),e.add($);for(let ct=0;ct<3;ct++){const Ct=new C(new Ne(.13,8,6),new ee({color:ct===0?3407735:ct===1?2761744:2755082,toneMapped:!1}));Ct.position.set(V,3.5-ct*.36,y+3.7),e.add(Ct)}}const P=new $t,k=new C(new N(92,1.1,8),s.concreteMat);k.position.set(170,.55,-438),P.add(k);const B=new C(new N(90,.08,.7),new z({color:14135871,roughness:.8}));B.position.set(170,1.13,-441.2),P.add(B);const I=new C(new N(82,.3,9.5),new z({color:3752522,roughness:.6,metalness:.3}));I.position.set(170,5.3,-438),P.add(I);const G=new C(new N(80,.08,8.8),new z({color:9422812,transparent:!0,opacity:.28,roughness:.05,metalness:.4}));G.position.set(170,5.08,-438),P.add(G);for(let V=-38;V<=38;V+=12){const $=new C(new N(.2,4.8,.2),s.metalMat);if($.position.set(170+V,2.7,-438),P.add($),V%24===0){const ct=new C(new N(5.6,.16,.7),s.woodMat);ct.position.set(170+V,1.25,-436.4),P.add(ct)}}const W=new C(new ue(12,3),new ee({map:qi("NOVA CENTRAL","#0b1b2b","#cfefff","RAIL TERMINAL"),transparent:!0}));W.position.set(170,3.7,-434),P.add(W);const H=new C(new N(9,1.2,6),s.concreteMat);H.position.set(170,.45,-430),P.add(H),e.add(P),s.addPOI("train","Nova Central Rail",170,-430,16,{icon:"transit",station:1});const ot=[{x:-260,name:"WESTBROOK",sub:"COMMUTER STOP"},{x:430,name:"EASTGATE",sub:"COMMUTER STOP"}];for(const V of ot){const $=new $t,ct=new C(new N(64,1.05,7),s.concreteMat);ct.position.set(V.x,.52,-438),$.add(ct);const Ct=new C(new N(62,.07,.6),new z({color:14135871,roughness:.8}));Ct.position.set(V.x,1.08,-441),$.add(Ct);const Ht=new C(new N(58,.25,8),new z({color:3752522,roughness:.6,metalness:.3}));Ht.position.set(V.x,4.5,-438),$.add(Ht);for(let fe=-26;fe<=26;fe+=13){const Jt=new C(new N(.18,4.1,.18),s.metalMat);Jt.position.set(V.x+fe,2.3,-438),$.add(Jt)}const O=new C(new ue(9,2.4),new ee({map:qi(V.name,"#0b1b2b","#cfefff",V.sub),transparent:!0}));O.position.set(V.x,3.2,-434),$.add(O),e.add($),s.addPOI("train",`${V.name[0]}${V.name.slice(1).toLowerCase()} Rail`,V.x,-429,13,{icon:"transit",station:V===ot[0]?0:2})}const Z=$x();Z.position.set(-420,_+.3,y),e.add(Z);const nt=[{x:-260,z:-430,name:"Westbrook"},{x:170,z:-430,name:"Nova Central"},{x:430,z:-430,name:"Eastgate"}];s.rail={group:Z,speed:16,progress:0,length:1200,dwell:0,lineName:"COMMUTER RAIL",routeName:"Nova Central Line",stations:nt,auto:!0,currentStation:-1,trainLength:70,departCool:0,nearestStation(){return this.stations[Math.max(0,this.currentStation)]},update(V,$){if(this.auto){if(this.dwell>0)this.dwell-=V,this.speed=Qe.damp(this.speed,0,5,V),this.dwell<=0&&(this.departCool=4.5);else if(this.departCool>0)this.departCool-=V,this.speed=Qe.damp(this.speed,16,1.4,V);else{const ct=this.group.position.x;let Ct=null,Ht=1e9,O=-1;for(let fe=0;fe<this.stations.length;fe++){let Jt=this.stations[fe].x-ct;Jt<-1&&(Jt+=1200),Jt<Ht&&(Ht=Jt,Ct=this.stations[fe],O=fe)}if(Ct&&Ht<90){const fe=Qe.clamp(Ht*.32,0,16);this.speed=Qe.damp(this.speed,fe,1.8,V),Ht<3.5&&Math.abs(this.speed)<3&&(this.speed=0,this.dwell=6.5,this.currentStation=O,this.progress=(Ct.x+600+1200)%1200,this.group.position.x=Ct.x)}else this.speed=Qe.damp(this.speed,16,.9,V);this.speed>.4&&(this.currentStation=-1)}this.progress=(this.progress+this.speed*V+1200)%1200,this.group.position.x=-600+this.progress}else if(this.progress=(this.progress+this.speed*V+1200)%1200,this.group.position.x=-600+this.progress,this.speed>.4)this.currentStation=-1;else{let ct=1e9,Ct=-1;for(let Ht=0;Ht<this.stations.length;Ht++){const O=Math.abs(this.stations[Ht].x-this.group.position.x);O<ct&&(ct=O,Ct=Ht)}this.currentStation=ct<8?Ct:-1}this.speed>.01&&this.group.userData.wheels?.forEach(ct=>ct.rotation.x+=this.speed*V/.55)}},s.rail&&(s.rail.group.userData.trainLength=70);const st=Zx();st.position.set(520,_+.3,M),e.add(st),s.freightRail={group:st,speed:12,progress:520,update(V){this.progress=(this.progress+this.speed*V)%1200,this.group.position.x=600-this.progress,this.group.userData.wheels?.forEach($=>$.rotation.x+=V*7)}};const Mt=200,Nt=452,J=210,At=new C(new N(6.2,.22,J+14),new z({color:4012596,roughness:1}));At.position.set(Mt,.1,Nt+J/2),e.add(At);const Ot=new Oe(new N(.26,.12,3.2),s.woodMat,Math.floor(J/1.6)),Xt=new Ee;for(let V=0;V<Ot.count;V++)Xt.position.set(Mt,.22,Nt+V*1.6+2),Xt.rotation.set(0,Math.PI/2,0),Xt.updateMatrix(),Ot.setMatrixAt(V,Xt.matrix);e.add(Ot);for(const V of[-1,1]){const $=new C(new N(.14,.12,J+10),w);$.position.set(Mt+V*.75,.32,Nt+J/2),e.add($)}for(const V of[Nt,Nt+J]){const $=new C(new N(7,.9,18),s.concreteMat);$.position.set(Mt+5.4,.5,V+(V===Nt?6:-6)),e.add($);const ct=new C(new N(7.6,.18,18),new z({color:5267568,roughness:.5}));ct.position.set(Mt+5.4,4.2,V+(V===Nt?6:-6)),e.add(ct);for(const Ht of[-6,6]){const O=new C(new te(.1,.12,4.1,6),s.metalMat);O.position.set(Mt+8.6,2.05,V+Ht+(V===Nt?6:-6)),e.add(O)}const Ct=new C(new ue(4.8,1.6),new ee({map:qi(V===Nt?"HARBOR":"PALM ISLAND","#0b1b2b","#cfefff","ISLAND LINE"),transparent:!0}));Ct.position.set(Mt+8.9,3,V+(V===Nt?6:-6)),Ct.rotation.y=-Math.PI/2,e.add(Ct)}s.addPOI("train","Harbor Island Line",Mt+5,Nt+6,13,{icon:"transit",line:"island",station:0}),s.addPOI("train","Palm Island Station",Mt+5,Nt+J-6,13,{icon:"transit",line:"island",station:1});const Rt=Kx();Rt.position.set(Mt,.42,Nt+2),e.add(Rt);const Bt=[{x:Mt,z:Nt+2,name:"Harbor Island",exit:{x:Mt+10,z:Nt+6}},{x:Mt,z:Nt+J-2,name:"Palm Island",exit:{x:Mt+10,z:Nt+J-6}}];s.islandRail={group:Rt,speed:0,progress:2,dir:1,dwell:3,length:J,lineName:"PALM ISLAND LINE",routeName:"Harbor ↔ Palm Island",stations:Bt,currentStation:0,trainLength:21,doors:!0,nearestStation(V){return Math.hypot(V.x-Bt[0].x,V.z-Bt[0].z)<Math.hypot(V.x-Bt[1].x,V.z-Bt[1].z)?Bt[0]:Bt[1]},stoppedAtStation(){return this.speed>.6?-1:this.progress<=3?0:this.progress>=this.length-3?1:-1},update(V){if(this.dwell>0)this.dwell-=V,this.speed=Qe.damp(this.speed,0,5,V);else{const ct=(this.dir>0?this.length-this.progress:this.progress)<34?2.6:14;this.speed=Qe.damp(this.speed,ct,1.4,V),this.progress+=this.speed*this.dir*V,this.progress>=this.length-2&&(this.progress=this.length-2,this.dir=-1,this.dwell=6,this.speed=0),this.progress<=2&&(this.progress=2,this.dir=1,this.dwell=6,this.speed=0)}this.currentStation=this.stoppedAtStation(),this.doors=this.currentStation>=0&&this.dwell>0,this.group.position.z=Nt+this.progress,this.group.rotation.y=this.dir>0?0:Math.PI,this.group.userData.wheels?.forEach($=>$.rotation.x+=this.speed*V/.4)}};const Se=8.5,qt=-392,ne=new $t,le=new C(new N(1280,.8,20),new z({color:3488578,roughness:.9}));le.position.set(0,Se,qt),ne.add(le);for(const V of[-1,1]){const $=new C(new N(1280,.9,.25),new z({color:9279134,roughness:.5,metalness:.5}));$.position.set(0,Se+1,qt+V*9.8),ne.add($)}const at=new te(1.1,1.3,Se,8);for(let V=-620;V<=620;V+=40){const $=new C(at,s.concreteMat);$.position.set(V,Se/2,qt),ne.add($)}e.add(ne);for(let V=0;V<12;V++){const $=new $t,ct=new C(new N(3.6,1.1,1.8),new z({color:ve([9121587,3100538,13684936,3026484,10124082]),roughness:.6,metalness:.3}));ct.position.y=.8,$.add(ct);const Ct=new C(new N(1.9,.8,1.6),new z({color:1779764,roughness:.2,metalness:.5}));Ct.position.set(-.1,1.55,0),$.add(Ct),$.position.set(j(-600,600),Se+.6,qt+(V%2?4:-4)),$.userData.speed=16+Math.random()*10,$.userData.lane=qt,e.add($),s.highwayCars.push($)}const pt=new $t,mt=new C(new N(6,14,30),new z({color:5987938,roughness:.95}));mt.position.set(430,7,120),pt.add(mt);const Ut=new C(new N(.2,8,14),new ee({color:329482}));Ut.position.set(427,4.2,120),pt.add(Ut),e.add(pt);const yt=new C(new ue(60,30),new z({color:3027510,roughness:1}));yt.rotation.x=-Math.PI/2,yt.position.set(96,.17,336),e.add(yt)}function Gc(s,t,e,i,n,r,a,o,l,c){for(let u=0;u<12;u++){const d=n+(r-n)*u/12,f=n+(r-n)*(u+1)/12,p=(d+f)*.5,x=Math.cos(p)*i,m=Math.sin(p)*i,g=i*Math.abs(f-d),_=new C(new N(l,o,g+.12),c);_.position.set(t+x,a,e+m),_.rotation.y=-p,_.castShadow=!0,s.add(_)}}function qx(s,t,e){const i=t/4;let n=s%t;return n<i?{x:-e+n,z:-e,angle:0}:(n-=i,n<i?{x:e,z:-e+n,angle:Math.PI/2}:(n-=i,n<i?{x:e-n,z:e,angle:Math.PI}:(n-=i,{x:-e,z:e-n,angle:-Math.PI/2})))}function Yx(){const s=new $t,t=new z({color:15660279,roughness:.26,metalness:.38}),e=new z({color:1522254,roughness:.07,metalness:.72}),i=new z({color:3123145,emissive:1400432,emissiveIntensity:.8,roughness:.35}),n=new z({color:2569276,roughness:.6,metalness:.45}),r=new z({color:3108744,roughness:.85}),a=[],o=[];for(let l=0;l<4;l++){const c=new $t,h=new C(new N(2.9,2.15,9.7),t);h.position.y=1.45,h.castShadow=!0,c.add(h);const u=new C(new N(2.8,.55,9.4),n);u.position.y=.52,c.add(u);const d=new C(new N(2.7,1.45,1.6),t);d.position.set(0,1.1,5.35),c.add(d);const f=new C(new N(2.2,.75,.4),i);f.position.set(0,.82,6.1),c.add(f);const p=new C(new N(2.93,.2,9.6),i);p.position.y=1.28,c.add(p);const x=new C(new N(2.94,.82,8.4),e);x.position.y=1.98,c.add(x);for(let y=-3;y<=3;y++){const M=new C(new N(2.96,.86,.09),t);M.position.set(0,1.98,y*1.35),c.add(M)}const m=new C(new N(2.72,.2,9.2),t);m.position.y=2.63,c.add(m);const g=new C(new N(1.5,.24,2.6),n);if(g.position.set(0,2.78,-.4),c.add(g),l===0){const y=new C(new N(2.2,.95,.1),e);y.position.set(0,1.78,6.13),c.add(y);const M=new C(new N(1.4,.26,.08),new ee({color:9235199,toneMapped:!1}));M.position.set(0,2.42,6.12),c.add(M);for(const w of[-1,1]){const b=new C(new N(.34,.2,.1),new ee({color:16774352,toneMapped:!1}));b.position.set(w*1,.95,6.16),c.add(b)}}for(const y of[-1,1]){for(const w of[-2.9,2.9]){const b=new C(new N(.05,1.72,1.24),e);b.position.set(y*1.48,1.45,w),c.add(b),o.push(b)}for(let w=0;w<3;w++){const b=new C(new N(.62,.34,1.7),r);b.position.set(y*.78,1.15,-3+w*2.6),c.add(b)}const M=new C(new N(.05,.05,8.4),new z({color:14005317,roughness:.35,metalness:.7}));M.position.set(0,2.34,0),c.add(M)}const _=new C(new N(2.1,.42,2.2),n);_.position.y=.32,c.add(_),c.position.z=-l*10.6,s.add(c),a.push(c)}return s.userData.cars=a,s.userData.doors=o,s}function $x(){const s=new $t,t=new z({color:11121078,roughness:.5,metalness:.42}),e=new z({color:2437950,roughness:.3,metalness:.5}),i=new z({color:1325389,roughness:.06,metalness:.75}),n=new z({color:14135871,roughness:.45,metalness:.3}),r=new z({color:3626603,roughness:.88}),a=[],o=[],l=(c,h,u)=>{const d=new $t,f=new C(new N(3.1,3.25,h),t);f.position.y=2.25,f.castShadow=!0,d.add(f);const p=new C(new N(3,.55,h-.4),e);p.position.y=.8,d.add(p);const x=new C(new N(3.14,.92,h-1.4),i);x.position.y=2.9,d.add(x);for(let y=0;y<5;y++){const M=new C(new N(3.16,.98,.1),t);M.position.set(0,2.9,-h/2+1.5+y*(h-3)/4),d.add(M)}const m=new C(new N(3.14,.32,h-.2),n);m.position.y=1.42,d.add(m);const g=new C(new N(2.9,.22,h-.7),t);g.position.y=3.9,d.add(g);const _=new C(new N(1.7,.26,2.8),e);_.position.set(0,4.04,0),d.add(_);for(const y of[-1,1])for(const M of[-h*.24,h*.24]){const w=new C(new N(.06,2.05,1.3),e);w.position.set(y*1.56,1.95,M),d.add(w);const b=new C(new N(.04,1.1,.95),i);b.position.set(y*1.585,2.2,M),d.add(b)}for(const y of[-1,1])for(let M=0;M<4;M++){const w=new C(new N(.62,.36,1.8),r);w.position.set(y*.8,1.55,-h*.28+M*2.4+(u?1:0)),d.add(w)}if(u){const y=new C(new N(2.9,2.3,2.2),t);y.position.set(0,2,h/2+1),d.add(y);const M=new C(new N(2.6,1.4,1.3),t);M.position.set(0,1.55,h/2+2.2),M.rotation.x=-.28,d.add(M);const w=new C(new N(2.75,1,.1),i);w.position.set(0,2.65,h/2+1.9),w.rotation.x=-.15,d.add(w);for(const b of[-1,1]){const v=new C(new Ne(.2,8,6),new ee({color:16773824,toneMapped:!1}));v.position.set(b*.95,1.4,h/2+2.75),d.add(v)}}for(const y of[-1,1])for(const M of[-h/2+2.2,h/2-2.2]){const w=new C(new N(1.9,.5,2.5),e);w.position.set(0,.68,M),d.add(w);for(const b of[-1,1]){const v=new C(new te(.55,.55,.28,12),new z({color:2237994,roughness:.9}));v.rotation.z=Math.PI/2,v.position.set(y*1.28,.55,M),d.add(v),a.push(v)}}d.position.z=c,s.add(d),o.push(d)};return l(0,15,!0),l(-18,16,!1),l(-36,16,!1),l(-54,16,!1),s.userData.wheels=a,s.userData.cars=o,s.userData.trainLength=70,s}function Zx(){const s=new $t,t=new z({color:5003874,roughness:.62,metalness:.45}),e=new z({color:2238508,roughness:.85}),i=new z({color:2040615,roughness:.9}),n=[],r=[9058866,3102064,7040837,9075259],a=new $t,o=new C(new N(3.2,3.1,13),t);o.position.y=2.2,a.add(o);const l=new C(new N(3,1.4,3),new z({color:2372928,roughness:.4,metalness:.5}));l.position.set(0,3.5,4.4),a.add(l);const c=new C(new N(3.22,.35,12.8),new z({color:14135871,roughness:.5}));c.position.y=1.4,a.add(c);for(const h of[-1,1]){const u=new C(new Ne(.2,8,6),new ee({color:16773312,toneMapped:!1}));u.position.set(h*1,2.4,6.6),a.add(u)}for(const h of[-4.4,4.4]){const u=new C(new N(2.2,.55,2.8),e);u.position.y=.65,u.position.z=h,a.add(u);for(const d of[-1,1])for(const f of[-.8,.8]){const p=new C(new te(.6,.6,.3,12),i);p.rotation.z=Math.PI/2,p.position.set(d*1.3,.6,h+f),a.add(p),n.push(p)}}s.add(a);for(let h=0;h<4;h++){const u=new $t,d=new C(new N(3.2,.3,15),e);d.position.y=1.2,u.add(d);const f=new C(new N(3.32,2.9,14.2),new z({color:r[h%r.length],roughness:.75,metalness:.25}));f.position.y=2.8,f.castShadow=!0,u.add(f);for(let p=-6;p<=6;p+=1.2){const x=new C(new N(3.34,2.8,.06),new z({color:16777215,roughness:1,transparent:!0,opacity:.16}));x.position.set(0,2.8,p),u.add(x)}for(const p of[-5,5]){const x=new C(new N(2.1,.5,2.6),e);x.position.y=.65,x.position.z=p,u.add(x);for(const m of[-1,1])for(const g of[-.75,.75]){const _=new C(new te(.55,.55,.28,12),i);_.rotation.z=Math.PI/2,_.position.set(m*1.28,.55,p+g),u.add(_),n.push(_)}}u.position.z=-18-h*16.4,s.add(u)}return s.userData.wheels=n,s}function Kx(){const s=new $t,t=new z({color:15199728,roughness:.3,metalness:.35}),e=new z({color:1325645,roughness:.07,metalness:.7}),i=new z({color:13211450,roughness:.4,metalness:.3}),n=new z({color:2502454,roughness:.7}),r=[],a=[];for(let o=0;o<2;o++){const l=new $t,c=new C(new N(2.7,2,9.4),t);c.position.y=1.45,l.add(c);const h=new C(new N(2.6,.4,9.1),n);h.position.y=.55,l.add(h);const u=new C(new N(2.74,.8,8.2),e);u.position.y=1.95,l.add(u);const d=new C(new N(2.76,.18,9.3),i);d.position.y=1.3,l.add(d);const f=new C(new N(2.55,.18,9),t);f.position.y=2.55,l.add(f);for(const p of[-1,1])for(const x of[-2.6,2.6]){const m=new C(new N(.05,1.55,1.2),e);m.position.set(p*1.38,1.4,x),l.add(m)}if(o===0){const p=new C(new N(2.3,.9,.1),e);p.position.set(0,1.85,4.72),l.add(p);for(const x of[-1,1]){const m=new C(new N(.3,.18,.1),new ee({color:16774352,toneMapped:!1}));m.position.set(x*.95,1,4.75),l.add(m)}}for(const p of[-3,3]){const x=new C(new N(1.8,.35,2.1),n);x.position.y=.45,x.position.z=p,l.add(x);for(const m of[-1,1]){const g=new C(new te(.4,.4,.24,10),new z({color:2040615,roughness:.9}));g.rotation.z=Math.PI/2,g.position.set(m*1.1,.42,p),l.add(g),r.push(g)}}l.position.z=-o*10.2,s.add(l),a.push(l)}return s.userData.wheels=r,s.userData.cars=a,s.userData.trainLength=21,s}function Jx(s,t){const e=s.root,i=610,n=-60,r=new C(new ue(420,500),new z({color:4871742,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(i,.03,n),e.add(r);const a=new C(new ue(42,360),new z({color:2435116,roughness:.95}));a.rotation.x=-Math.PI/2,a.position.set(i+60,.08,n),e.add(a);const o=new ee({color:15263449});for(let P=-160;P<160;P+=20){const k=new C(new ue(1,10),o);k.rotation.x=-Math.PI/2,k.position.set(i+60,.1,n+P),e.add(k)}const l=new C(new ue(18,220),new z({color:3422268,roughness:.95}));l.rotation.x=-Math.PI/2,l.position.set(i+28,.07,n),e.add(l);const c=new C(new N(50,12,26),new z({color:9213596,roughness:.4,metalness:.3}));c.position.set(i-40,6,n+80),e.add(c);const h=new C(new N(46,7,26.4),new z({color:4026250,roughness:.1,metalness:.7,transparent:!0,opacity:.8}));h.position.set(i-40,6,n+80),e.add(h);const u=new C(new ue(18,4),new ee({map:qi("NOVA AIR","#082b3a","#d8f5ff","INTERNATIONAL"),transparent:!0}));u.position.set(i-40,11,n+93.4),e.add(u);const d=new C(new te(2,3,22,10),new z({color:12107714,roughness:.7}));d.position.set(i-10,11,n+130),e.add(d);const f=new C(new te(4.5,3.5,4,12),new z({color:2903907,roughness:.1,metalness:.6}));f.position.set(i-10,24,n+130),e.add(f);const p=new C(new te(18,18,40,12,1,!1,0,Math.PI),new z({color:7305341,roughness:.7,metalness:.3}));p.rotation.z=Math.PI/2,p.rotation.y=Math.PI/2,p.position.set(i-55,.2,n-120),e.add(p);const x=ka();x.position.set(i+60,.7,n-80),x.rotation.y=Math.PI,e.add(x),s.airportAirliner=x;const m=new ee({color:16773296,toneMapped:!1});for(const P of[-1,1])for(let k=n-175;k<=n+175;k+=18){const B=new C(new N(.4,.18,.4),m);B.position.set(i+60+P*22,.16,k),e.add(B)}for(let P=0;P<8;P++){const k=new C(new N(.7,.2,.7),new ee({color:16751930,toneMapped:!1}));k.position.set(i+60+(P%2?8:-8)*.7,.18,n+210+P*16),e.add(k)}s.airTraffic=[];const g=ka();g.scale.setScalar(1.15),e.add(g);const _=[{x:i+60,z:n+980,y:150},{x:i+60,z:n+540,y:112},{x:i+60,z:n+300,y:66},{x:i+60,z:n+190,y:20},{x:i+60,z:n+150,y:1},{x:i+60,z:n-150,y:1},{x:i+60,z:n-230,y:14},{x:i+60,z:n-440,y:74},{x:i+230,z:n-610,y:128},{x:i+580,z:n-500,y:155},{x:i+790,z:n+60,y:165},{x:i+600,z:n+700,y:160},{x:i+210,z:n+960,y:152}];s.airTraffic.push(za(g,_,66,{bank:.5,pitchScale:.65}));const y=ka();y.scale.setScalar(1.35),e.add(y);const M=[];for(let P=0;P<10;P++){const k=P/10*ae;M.push({x:Math.cos(k)*720+120,z:Math.sin(k)*620+60,y:235+Math.sin(k*2)*12})}s.airTraffic.push(za(y,M,54,{bank:.28,pitchScale:.35}));const w=is("helicopter",3163740,{});w.group.scale.setScalar(.92),e.add(w.group),s.airTraffic.push(Qx(w,0,0,205,62,.13,16771256));const b=is("helicopter",14278112,{});b.group.scale.setScalar(.8),e.add(b.group);const v=s.helipad?.x??150,S=s.helipad?.z??140,L=[{x:v,z:S,y:1.2},{x:v,z:S,y:34},{x:v+55,z:S+45,y:52},{x:v+125,z:S,y:58},{x:v+70,z:S-70,y:54},{x:v-40,z:S-45,y:44},{x:v-35,z:S+30,y:34},{x:v,z:S,y:1.2}],A=za(b.group,L,16,{bank:.2,pitchScale:.12});A.rotor=b.rotor,A.tailRotor=b.tailRotor,s.airTraffic.push(A),s.flyingPlane=s.airTraffic[1],s.addPOI("airport","Nova International Airport",i-40,n+80,40,{icon:"airport"}),s.addPOI("airport","Runway 09",i+60,n,50,{icon:"airport"})}function za(s,t,e,i={}){const n=[];let r=0;for(let o=0;o<t.length;o++){const l=t[o],c=t[(o+1)%t.length],h=c.x-l.x,u=c.z-l.z,d=c.y-l.y,f=Math.hypot(h,d,u);n.push({a:l,b:c,dx:h,dz:u,dy:d,len:f,heading:Math.atan2(h,u)}),r+=f}return{group:s,path:t,segments:n,speed:e,total:r,distance:Math.random()*r,heading:0,bank:0,update(o){this.distance=(this.distance+this.speed*o)%this.total;let l=this.distance,c=this.segments[0];for(const p of this.segments){if(l<=p.len){c=p;break}l-=p.len}const h=c.len>0?l/c.len:0;s.position.set(c.a.x+c.dx*h,c.a.y+c.dy*h,c.a.z+c.dz*h);const u=Math.hypot(c.dx,c.dz);u>.01&&(this.heading=Math.atan2(c.dx,c.dz));const d=u>.01?-Math.atan2(c.dy,u)*(i.pitchScale??.5):0,f=Qe.clamp(Qe.euclideanModulo(this.heading-s.rotation.y+Math.PI,ae)-Math.PI,-.5,.5);this.bank=Qe.damp(this.bank,-f*(i.bank??.4)*6,2.5,o),s.rotation.y=this.heading,s.rotation.x=Qe.damp(s.rotation.x,Qe.clamp(d,-.22,.22),2.5,o),s.rotation.z=this.bank,this.rotor&&(this.rotor.rotation.y+=o*38,this.tailRotor.rotation.x+=o*54)}}}function Qx(s,t,e,i,n,r,a){const o=s.group,l=new An(a,1.4,75,2);return l.position.set(0,-1.5,2),o.add(l),{group:o,angle:Math.random()*ae,update(c,h){this.angle+=r*c;const u=t+Math.cos(this.angle)*i,d=e+Math.sin(this.angle)*i;o.position.set(u,n+Math.sin(h*.55+this.angle)*2.4,d),o.rotation.y=Math.atan2(-Math.sin(this.angle),Math.cos(this.angle)),o.rotation.z=-.1,o.rotation.x=.04,s.rotor.rotation.y+=c*42,s.tailRotor&&(s.tailRotor.rotation.x+=c*58),l.intensity=1+Math.sin(h*2.2)*.5}}}function ka(){const s=new $t,t=new z({color:15330800,roughness:.35,metalness:.25}),e=new z({color:1793418,roughness:.4}),i=new C(new te(2.2,2.2,30,14),t);i.rotation.x=Math.PI/2,i.position.y=2.8,s.add(i);const n=new C(new Ne(2.2,12,10),t);n.position.set(0,2.8,15),s.add(n);const r=new C(new Ri(2.1,5,12),t);r.rotation.x=Math.PI/2,r.position.set(0,2.8,-17),s.add(r);const a=new C(new te(2.23,2.23,22,14),e);a.rotation.x=Math.PI/2,a.position.y=2.6,s.add(a);const o=new C(new N(38,.4,6),t);o.position.set(0,2.7,1),s.add(o);const l=new C(new N(.4,6,5),t);l.position.set(0,6,-15),s.add(l);const c=new C(new te(1.1,1.1,4,10),e);c.rotation.x=Math.PI/2,c.position.set(-9,2.1,1),s.add(c);const h=c.clone();h.position.x=9,s.add(h);for(let u=0;u<14;u++){const d=new C(new N(.35,.45,.35),new ee({color:10475240}));d.position.set(1,3.1,12-u*1.7),s.add(d)}return s}function jx(s,t){const e=s.root;for(let f=0;f<260;f++){const p=t()*ae,x=470+t()*220;let m=Math.cos(p)*x,g=Math.sin(p)*x;g>400||m>430&&g>-300&&g<200||s.tree(m,g,1.2+t()*1.4)}const i=new z({color:4149814,roughness:1,flatShading:!0});for(let f=0;f<18;f++){const p=t()*ae,x=700+t()*200,m=Math.cos(p)*x,g=Math.sin(p)*x;if(g>420||s.isWater?.(m,g))continue;const _=new C(new Ri(70+t()*90,40+t()*70,7),i);_.position.set(m,10,g),e.add(_)}const n=220,r=new te(.4,.6,6,5),a=new Ws(4,0),o=new z({color:4863781,roughness:1}),l=new z({color:3099174,roughness:1,flatShading:!0}),c=new Oe(r,o,n),h=new Oe(a,l,n),u=new Ee;let d=0;for(let f=0;f<900&&d<n;f++){const p=t()*ae,x=480+t()*240,m=Math.cos(p)*x,g=Math.sin(p)*x;if(g>400||m>440&&m<800&&g>-250&&g<200)continue;const _=.8+t()*1.2;u.position.set(m,3*_,g),u.scale.setScalar(_),u.rotation.set(0,t()*ae,0),u.updateMatrix(),c.setMatrixAt(d,u.matrix),u.position.set(m,7*_,g),u.scale.set(_,_*(1+t()*.5),_),u.updateMatrix(),h.setMatrixAt(d,u.matrix),d++}e.add(c,h);for(let f=0;f<6;f++){const p=-520+f*40,x=-480,m=new C(new te(5,5,16,12),new z({color:9146256,roughness:.6,metalness:.4}));m.position.set(p,8,x),e.add(m)}}const We=9,un=96,Zn=16,Ve=Zn/2,re=s=>(s-4)*un,Hc=s=>(s-4)*un+un/2,Be=(We-1)/2*un,tv={"3,3":"park","5,5":"hospital","5,4":"police","2,3":"fire","3,4":"garage","4,5":"dealership","3,2":"apartment","2,5":"shop","6,3":"office","1,2":"industrial","7,5":"hotel"};class ev{constructor(t){this.scene=t,this.root=new $t,this.root.name="city",t.add(this.root),this.colliders=[],this.spatial=new zc(32),this.blocks=[],this.pois=[],this.parkingSpots=[],this.busStops=[],this.facadeMaterials=[],this.emissiveMats=[],this.signalNodes=[],this.seed=7781,this.hour=6.4,this.night=0,this.weather="clear",this.clouds=[],this.animated=[],this.lampGlow=null,this.sky=null,this.sun=null,this.hemi=null,this.ambient=null,this.water=null,this.monorail=null,this.rail=null,this.islandRail=null,this.freightRail=null,this.airTraffic=[],this.islands=[],this.bridges=[],this.islandRoads=[],this.highwayCars=[],this.factorySmoke=null,this.init()}init(){const t=ui(this.seed);this.mats=Ex(),this.makeMaterials(),zx(this),this.buildGround(),this.buildRoads(),this.buildBlocks(t),Bx(this),Gx(this),Wx(this,t),Xx(this),Jx(this),jx(this,t),this.buildSignals(),this.buildParkingSpots(t),this.spatial=new zc(32);for(const e of this.colliders)this.spatial.insert(e,e.minX,e.minZ,e.maxX,e.maxZ);this.updateLighting(6.4,"clear",0),this.mergeStatic()}mergeStatic(){const t=this.root;t.updateMatrixWorld(!0);const e=new _e().copy(t.matrixWorld).invert(),i=new Set,n=o=>{o&&o.traverse(l=>i.add(l))};n(this.water),n(this.lampGlow),n(this.smokeParticles),n(this.fireflyPoints),this.monorail&&n(this.monorail.group),this.rail&&n(this.rail.group),this.islandRail&&n(this.islandRail.group),this.freightRail&&n(this.freightRail.group),this.flyingPlane&&n(this.flyingPlane.group);for(const o of this.airTraffic)n(o.group);this.lighthouse&&n(this.lighthouse.group);for(const o of this.highwayCars)n(o);for(const o of this.animated)o.mesh&&n(o.mesh);const r=new Map,a=o=>{let l=o;for(;l;){if(i.has(l)||l.userData?.noMerge)return!0;l=l.parent}return!1};t.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||o.isPoints||o.isSprite||a(o)||Array.isArray(o.material))return;const l=o.material;if(!l||l.isShaderMaterial||l.transparent||l.opacity<1||l.depthWrite===!1||!(l.isMeshStandardMaterial||l.isMeshBasicMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial))return;const c=o.geometry;if(!c||!c.attributes.position||!c.attributes.normal||!c.attributes.uv||c.morphAttributes&&Object.keys(c.morphAttributes).length)return;const h=l.uuid;let u=r.get(h);u||(u={material:l,geos:[],meshes:[],cast:!1,receive:!1},r.set(h,u));const d=c.index?c.toNonIndexed():c.clone();for(const f of Object.keys(d.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&d.deleteAttribute(f);d.clearGroups(),d.applyMatrix4(new _e().multiplyMatrices(e,o.matrixWorld)),u.geos.push(d),u.meshes.push(o),u.cast=u.cast||o.castShadow,u.receive=u.receive||o.receiveShadow});for(const o of r.values()){if(o.meshes.length<2){for(const h of o.geos)h.dispose();continue}const l=Jh(o.geos,!1);for(const h of o.geos)h.dispose();if(!l)continue;const c=new C(l,o.material);c.name=`merged-${o.material.uuid}`,c.castShadow=o.cast,c.receiveShadow=o.receive,t.add(c);for(const h of o.meshes)h.parent?.remove(h)}this.mergedStaticMeshes=t.children.filter(o=>o.name.startsWith("merged-")).length}makeMaterials(){this.roofMat=new z({color:3949128,roughness:.94}),this.roofMatDark=new z({color:2501425,roughness:.95}),this.glassMat=new z({color:1516336,roughness:.22,metalness:.65,emissive:660768,emissiveIntensity:.4}),this.metalMat=new z({color:5330780,roughness:.7,metalness:.5}),this.concreteMat=new z({color:7631983,roughness:.96}),this.whiteMat=new z({color:14474452,roughness:.8}),this.darkMat=new z({color:1777702,roughness:.9}),this.woodMat=new z({color:6966066,roughness:.9}),this.grassMat=this.mats.grass,this.crownMat=new z({color:10480127,emissive:6021375,emissiveIntensity:1.4,roughness:.4}),this.warmMat=new z({color:16765593,emissive:16757847,emissiveIntensity:1.6,roughness:.5}),this.redMat=new z({color:12728890,roughness:.7}),this.tsMat=new z({color:4343885,roughness:.8,metalness:.4}),this.palettes={downtown:this.buildPalette([["#5d7285","#182430","#ffd9a0","glass"],["#7c8996","#1a2a3a","#cfe9ff","glass"],["#49525f","#111b26","#ffcf8c","glass"],["#8a8e93","#1e2b38","#d7ecff","stone"]]),midrise:this.buildPalette([["#9b7c63","#27313b","#ffd7a1","brick"],["#b2a08a","#2a333c","#ffe0b0","stone"],["#7e6c5c","#1d2731","#ffcf94","brick"],["#a7a8a3","#232f3a","#e9f4ff","stone"]]),suburb:this.buildPalette([["#d8d1c2","#26313c","#ffdca6","stone"],["#bdc7c0","#22303a","#ffe3b5","stone"],["#ccb6a3","#2a333c","#ffd49b","stone"],["#e0ddd4","#202b36","#ffe9c4","stone"]]),industrial:this.buildPalette([["#696e71","#1a2127","#ffd18a","stone"],["#7b7165","#20262b","#ffc77e","stone"],["#5d666b","#161d23","#cfe4ff","stone"]])}}buildPalette(t){return t.map(([e,i,n,r],a)=>{const{diffuse:o,emissive:l}=wx(e,i,n,this.seed+a*31+e.length*7,r),c=new z({map:o,emissiveMap:l,emissive:16777215,emissiveIntensity:.02,roughness:r==="glass"?.34:.85,metalness:r==="glass"?.52:.06});return this.facadeMaterials.push(c),c})}buildGround(){const t=new C(new ue(2600,2600),new z({color:3753263,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-.08,t.receiveShadow=!0,this.root.add(t),this.groundBase=t}roadPlaneGeometry(){if(!this._roadGeo){const t=new ue(Zn,840);t.rotateX(-Math.PI/2),this._roadGeo=t}return this._roadGeo}buildRoads(){const t=this.mats.asphalt,e=this.roadPlaneGeometry();this.roadMeshes=[];for(let m=0;m<We;m++){const g=re(m),_=new C(e,t);_.position.set(g,.02,0),_.receiveShadow=!0,this.root.add(_),this.roadMeshes.push(_);const y=new C(e,t);y.rotation.y=Math.PI/2,y.position.set(0,.021,g),y.receiveShadow=!0,this.root.add(y),this.roadMeshes.push(y)}const i=new ue(Zn,Zn);i.rotateX(-Math.PI/2);const n=new z({color:2303531,roughness:.93});for(let m=0;m<We;m++)for(let g=0;g<We;g++){const _=new C(i,n);_.position.set(re(m),.035,re(g)),this.root.add(_)}const r=new N(.16,.012,3.2),a=new z({color:14276292,roughness:.8}),o=[];for(let m=0;m<We;m++)for(let g=-Be-10;g<Be+10;g+=8)Math.abs(((g+4+48)%96+96)%96-48)<10||(o.push([re(m),g,0]),o.push([g,re(m),Math.PI/2]));const l=new Oe(r,a,o.length),c=new Ee;o.forEach(([m,g,_],y)=>{c.position.set(m,.055,g),c.rotation.set(0,_,0),c.updateMatrix(),l.setMatrixAt(y,c.matrix)}),l.instanceMatrix.needsUpdate=!0,this.root.add(l);const h=new N(.72,.014,3.5),u=new z({color:15329247,roughness:.75}),d=[];for(let m=0;m<We;m++)for(let g=0;g<We;g++){const _=re(m),y=re(g);for(let M=-3;M<=3;M++)d.push([_+M*1.1,y-Ve-2.1,0]),d.push([_+M*1.1,y+Ve+2.1,0]),d.push([_-Ve-2.1,y+M*1.1,Math.PI/2]),d.push([_+Ve+2.1,y+M*1.1,Math.PI/2])}const f=new Oe(h,u,d.length);d.forEach(([m,g,_],y)=>{c.position.set(m,.06,g),c.rotation.set(0,_,0),c.updateMatrix(),f.setMatrixAt(y,c.matrix)}),this.root.add(f);const p=new ue(.14,840);p.rotateX(-Math.PI/2);const x=new z({color:13223607,roughness:.85});for(let m=0;m<We;m++)for(const g of[-1,1]){const _=new C(p,x);_.position.set(re(m)+g*(Ve-.45),.05,0),this.root.add(_);const y=new C(p,x);y.rotation.y=Math.PI/2,y.position.set(0,.05,re(m)+g*(Ve-.45)),this.root.add(y)}}buildBlocks(t){const e=new ue(un-Zn,un-Zn);e.rotateX(-Math.PI/2);const i=this.mats.sidewalk.clone();i.map=this.mats.sidewalk.map.clone(),i.map.repeat.set(12,12),i.map.needsUpdate=!0,this.sidewalkMat=i,this.sidewalkMesh=new Oe(e,i,64);const n=new Ee;let r=0;const a=this.mats.lot.clone();a.map=this.mats.lot.map.clone(),a.map.repeat.set(9,9);const o=this.mats.grass.clone();o.map=this.mats.grass.map.clone(),o.map.repeat.set(9,9);const l={concrete:[],grass:[]},c=new N(68,.16,.28),h=[];for(let f=0;f<8;f++)for(let p=0;p<8;p++){const x=Hc(f),m=Hc(p),g=tv[`${f},${p}`]||null,_=this.districtForBlock(f,p,g),y={bi:f,bj:p,x,z:m,district:_,special:g};this.blocks.push(y),n.position.set(x,.1,m),n.rotation.set(0,0,0),n.scale.set(1,1,1),n.updateMatrix(),this.sidewalkMesh.setMatrixAt(r++,n.matrix),(["suburb","park","residential"].includes(_)||g==="park"?l.grass:l.concrete).push([x,m]),h.push([x,m-34,0],[x,m+34,0],[x-34,m,Math.PI/2],[x+34,m,Math.PI/2]),this.buildBlockContent(y,t)}this.root.add(this.sidewalkMesh),this.lotMeshes=[];for(const[f,p]of Object.entries(l)){if(!p.length)continue;const x=new ue(68,68);x.rotateX(-Math.PI/2);const m=new Oe(x,f==="grass"?o:a,p.length);p.forEach(([g,_],y)=>{n.position.set(g,.15,_),n.updateMatrix(),m.setMatrixAt(y,n.matrix)}),m.receiveShadow=!0,this.root.add(m),this.lotMeshes.push(m)}const u=new z({color:9408394,roughness:.95}),d=new Oe(c,u,h.length);h.forEach(([f,p,x],m)=>{n.position.set(f,.18,p),n.rotation.set(0,x,0),n.updateMatrix(),d.setMatrixAt(m,n.matrix)}),this.root.add(d)}districtForBlock(t,e,i){return i==="park"?"park":i==="suburb"?"suburb":i==="industrial"?"industrial":i==="airport"?"airport":e<=1?"industrial":t>=6&&e>=2&&e<=5?"suburb":e>=6?"waterfront":t<=2&&e>=3?"residential":t>=3&&t<=5&&e>=2&&e<=5?"downtown":"midtown"}buildBlockContent(t,e){const{bi:i,bj:n,x:r,z:a,district:o,special:l}=t;if(l==="park"){this.buildPark(t,e);return}if(l==="hospital"){this.buildHospital(t);return}if(l==="police"){this.buildPolice(t);return}if(l==="fire"){this.buildFireStation(t);return}if(l==="garage"){this.buildGarage(t);return}if(l==="dealership"){this.buildDealership(t);return}if(l==="apartment"){this.buildApartment(t);return}if(l==="shop"){this.buildShop(t);return}if(l==="office"){this.buildOffice(t);return}if(l==="hotel"){this.buildHotel(t);return}if(l==="industrial"){this.buildFactory(t,e);return}o==="downtown"?this.buildDowntown(t,e):o==="industrial"?this.buildIndustrial(t,e):o==="suburb"?this.buildSuburb(t,e):o==="waterfront"?this.buildWaterfront(t,e):this.buildMidrise(t,e)}buildingMaterial(t,e=0){return this.palettes[t][e%this.palettes[t].length]}facadeGeometry(t,e,i){const n=new N(t,e,i),r=n.attributes.uv,a=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++){const l=a[o][0]/12,c=a[o][1]/13;for(let h=0;h<4;h++){const u=o*4+h;r.setXY(u,r.getX(u)*l,r.getY(u)*c)}}return r.needsUpdate=!0,n}addBuilding(t,e,i,n,r,a,o,l={}){const c=this.buildingMaterial(a,o),h=l.roofMat||this.roofMat,u=this.facadeGeometry(i,r,n),d=new C(u,[c,c,h,h,c,c]);d.position.set(t,r/2+.15+(l.base||0),e),d.castShadow=r>14,d.receiveShadow=!0,this.root.add(d);const f={minX:t-i/2,maxX:t+i/2,minZ:e-n/2,maxZ:e+n/2,height:r,type:"building",mesh:d};if(this.colliders.push(f),l.extraColliders)for(const p of l.extraColliders)this.colliders.push(p);return{mesh:d,collider:f}}addRoofDetails(t,e,i,n,r,a,o="normal"){const l=new $t;l.position.set(t,r,e);const c=1+Math.floor(a()*3);for(let h=0;h<c;h++){const u=1.4+a()*2.6,d=.7+a()*1.5,f=1.4+a()*2.4,p=new C(new N(u,d,f),a()>.5?this.metalMat:this.concreteMat);p.position.set((a()-.5)*(i-u-2),d/2+.15,(a()-.5)*(n-f-2)),p.castShadow=!0,l.add(p)}if(o==="tower"){const h=new C(new te(.1,.22,8+a()*12,5),this.metalMat);h.position.y=4+a()*4,l.add(h);const u=new C(new Ne(.26,6,6),this.warmMat);u.position.y=h.position.y+h.geometry.parameters.height/2,l.add(u),this.animated.push({type:"beacon",mesh:u,phase:a()*6})}if(o==="tower"&&a()>.5){const h=new C(new N(i*.92,.45,n*.92),this.crownMat);h.position.y=.35,l.add(h)}if(a()>.55){const h=new C(new N(1.8,.8,1.4),this.whiteMat);h.position.set((a()-.5)*i*.5,.55,(a()-.5)*n*.5),l.add(h)}return this.root.add(l),l}buildDowntown(t,e){const{x:i,z:n}=t,r=34+e()*26,a=34+e()*26,o=58+e()*120,l=(e()-.5)*(66-r),c=(e()-.5)*(66-a),h=i+l,u=n+c,d=Math.floor(e()*4),{mesh:f}=this.addBuilding(h,u,r,a,o,"downtown",d,{roofMat:this.roofMatDark}),p=7+e()*9;if(e()>.35){const x=this.addBuilding(h,u,r+8,a+8,p,"downtown",(d+1)%4,{roofMat:this.roofMat});x.mesh.castShadow=!0}if(o>100&&e()>.35){const x=o*(.18+e()*.12);this.addBuilding(h,u,r*.72,a*.72,x,"downtown",(d+2)%4,{base:o,roofMat:this.roofMatDark})}if(this.addRoofDetails(h,u,r,a,o+.2,e,o>70?"tower":"normal"),d<2){const x=new z({color:10466244,roughness:.4,metalness:.6});for(let m=-2;m<=2;m++){const g=new C(new N(.28,o*.94,.5),x);g.position.set(h+m*r/6,o/2+.2,u+a/2+.3),this.root.add(g)}}if(o>125){const x=new C(new ue(18,5),new ee({map:tu("NOVA","ABOVE ALL","#0a2d4d","#1b6d91"),transparent:!1}));x.position.set(h,o*.75,u+a/2+.3),this.root.add(x)}}buildMidrise(t,e){const{x:i,z:n}=t,r=e()>.5?2:1;for(let a=0;a<r;a++){const o=20+e()*16,l=18+e()*14,c=12+e()*24,h=i+(r===2?(a-.5)*30:(e()-.5)*24),u=n+(e()-.5)*(66-l-4);this.addBuilding(h,u,o,l,c,"midrise",Math.floor(e()*4)),this.addRoofDetails(h,u,o,l,c+.2,e),e()>.6&&this.addBalconies(h,u,o,l,c,e)}}addBalconies(t,e,i,n,r,a){const o=new z({color:5987160,roughness:.9}),l=Math.floor((r-4)/4),c=new N(i*.55,.18,.9);for(let h=0;h<l;h++){const u=4.5+h*4;if(u>r-1)break;const d=new C(c,o);d.position.set(t,u,e+n/2+.45),this.root.add(d);const f=new C(new N(i*.55,.7,.06),this.glassMat);f.position.set(t,u+.45,e+n/2+.88),this.root.add(f)}}buildResidential(t,e){this.buildMidrise(t,e)}buildSuburb(t,e){const{x:i,z:n}=t;for(let r=0;r<2;r++)for(let a=0;a<2;a++){const o=i+(r-.5)*31,l=n+(a-.5)*31,c=12+e()*4,h=10+e()*4,u=3.6+e()*2.4,d=Math.floor(e()*4);this.addBuilding(o,l,c,h,u,"suburb",d);const f=new C(new Ri(1,1,4),new z({color:[5980727,4868682,7028022,4541256][d],roughness:.92}));f.rotation.y=Math.PI/4,f.scale.set(c*.78,2.6+e()*1.2,h*.78),f.position.set(o,u+1.45,l),f.castShadow=!0,this.root.add(f);const p=new C(new N(3.2,.22,2.2),this.woodMat);p.position.set(o+(e()-.5)*2,.55,l+h/2+.9),this.root.add(p);const x=new C(new ue(10,8),new z({color:4283698,roughness:1}));x.rotation.x=-Math.PI/2,x.position.set(o+8,.17,l+7),this.root.add(x);const m=this.woodMat;for(let _=0;_<5;_++){const y=new C(new N(.16,.9,.16),m);y.position.set(o+3,.6,l+11+_*1.4),this.root.add(y)}const g=new C(new ue(4,12),new z({color:7828846,roughness:1}));g.rotation.x=-Math.PI/2,g.position.set(o+5,.16,l+8),this.root.add(g),e()>.6&&this.tree(o+10,l+9,.8+e()*.4)}}buildIndustrial(t,e){const{x:i,z:n}=t,r=44+e()*12,a=30+e()*16,o=8+e()*6,l=i+(e()-.5)*8,c=n+(e()-.5)*8;this.addBuilding(l,c,r,a,o,"industrial",Math.floor(e()*3),{roofMat:this.roofMatDark}),this.addRoofDetails(l,c,r,a,o+.2,e);const h=new C(new N(r*.7,1.4,3.2),this.concreteMat);h.position.set(l,.85,c+a/2+1.6),h.castShadow=!0,this.root.add(h);const u=[9321266,3039098,8153646,3500874,8014386];for(let d=0;d<4+Math.floor(e()*5);d++){const m=new C(new N(6,2.6,2.5),new z({color:ve(u),roughness:.8,metalness:.3}));m.position.set(i-24+e()*48,.6+(e()>.8?2.6:0),n+24+e()*8),m.rotation.y=e()>.5?0:Math.PI/2,m.castShadow=!0,this.root.add(m)}}buildWaterfront(t,e){const{x:i,z:n}=t,r=22+e()*18,a=24+e()*16,o=22+e()*44,l=i+(e()-.5)*18,c=n+(e()-.5)*10;this.addBuilding(l,c,r,a,o,"midrise",Math.floor(e()*4)),this.addRoofDetails(l,c,r,a,o+.2,e,o>50?"tower":"normal"),this.addBalconies(l,c,r,a,o,e)}buildPark(t,e){const{x:i,z:n}=t;t.isPark=!0;const r=new z({color:10129274,roughness:1}),a=new C(new ue(6,68),r);a.rotation.x=-Math.PI/2,a.position.set(i,.17,n),this.root.add(a);const o=new C(new ue(68,6),r);o.rotation.x=-Math.PI/2,o.position.set(i,.171,n),this.root.add(o);const l=new C(new as(11,32),new z({color:1789283,roughness:.15,metalness:.5,transparent:!0,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.set(i-14,.18,n+15),this.root.add(l);const c=new $t;c.position.set(i+15,.2,n-14);const h=new C(new te(4.2,4.6,.8,24),this.concreteMat);h.position.y=.4,c.add(h);const u=new C(new te(3.7,3.7,.3,24),new z({color:4891588,roughness:.12,metalness:.5}));u.position.y=.82,c.add(u);const d=new C(new te(.4,.6,2.4,12),this.whiteMat);d.position.y=1.9,c.add(d),this.root.add(c);for(let x=0;x<12;x++){const m=e()*ae,g=8+e()*25;Math.abs(Math.cos(m)*g)<5||Math.abs(Math.sin(m)*g)<5||this.tree(i+Math.cos(m)*g,n+Math.sin(m)*g,.9+e()*.7)}for(let x=0;x<7;x++){const m=e()*ae,g=10+e()*18;this.bench(i+Math.cos(m)*g,n+Math.sin(m)*g,-m+Math.PI/2)}const f=new C(new N(12,.7,7),this.woodMat);f.position.set(i+20,.55,n+22),f.castShadow=!0,this.root.add(f);const p=new C(new N(12,4,.4),this.darkMat);p.position.set(i+20,2.6,n+25),this.root.add(p),this.addPOI("park","Aurora Park",i,n,30,{icon:"park"})}tree(t,e,i=1){this._treeGeo||(this._treeGeo={trunk:new te(.22,.32,3.2,6),leaves:new Ws(2.1,0)},this._treeMat=new z({color:3099174,roughness:1}),this._trunkMat=new z({color:4863781,roughness:1}),this._trees=[]),this._trees.push({x:t,z:e,scale:i})}bench(t,e,i){this._benches||(this._benches=[]),this._benches.push({x:t,z:e,rot:i})}addPOI(t,e,i,n,r,a={}){const o={type:t,name:e,x:i,z:n,radius:r,...a};return this.pois.push(o),o}addSign(t,e,i,n,r,a="#0b3a5a"){const o=new ee({map:qi(t,a,"#eaf6ff"),transparent:!0}),l=new C(new ue(6,3),o);return l.position.set(e,i,n),l.rotation.y=r,this.root.add(l),l}buildHospital(t){const{x:e,z:i}=t;this.addBuilding(e,i,38,30,28,"midrise",3),this.addRoofDetails(e,i,38,30,28.2,ui(99));const n=new ee({color:16735084}),r=new C(new N(4,12,.3),n);r.position.set(e,22,i+15.2),this.root.add(r);const a=new C(new N(12,4,.3),n);a.position.set(e,22,i+15.2),this.root.add(a),this.addSign("HOSPITAL",e,13,i+15.3,0,"#5c1020");const o=new C(new te(9,9,.2,24),new z({color:3817282,roughness:.9}));o.position.set(e+24,.25,i+20),this.root.add(o);const l=new ee({color:15265522}),c=new C(new N(1,.03,5),l);c.position.set(e+24,.38,i+20),this.root.add(c);const h=new C(new N(3,.03,1),l);h.position.set(e+24,.38,i+20),this.root.add(h),this.helipad=new D(e+24,.4,i+20),this.addPOI("hospital","Nova General Hospital",e,i,32,{icon:"hospital"})}buildPolice(t){const{x:e,z:i}=t;this.addBuilding(e,i,32,26,18,"midrise",3,{roofMat:this.roofMatDark}),this.addRoofDetails(e,i,32,26,18.2,ui(33)),this.addSign("POLICE",e,10.5,i+13.2,0,"#0b2a5a");const n=new C(new ue(26,12),new z({color:2895924,roughness:1}));n.rotation.x=-Math.PI/2,n.position.set(e,.17,i+20),this.root.add(n),this.addPOI("police","NCPD Central Precinct",e,i,30,{icon:"police"})}buildFireStation(t){const{x:e,z:i}=t;this.addBuilding(e,i,30,24,11,"industrial",0,{roofMat:this.roofMatDark}),this.addSign("FIRE DEPT",e,8,i+12.2,0,"#5c1015");const n=new z({color:8003108,roughness:.8});for(let r=-1;r<=1;r++){const a=new C(new N(7,7,.3),n);a.position.set(e+r*8,3.7,i+12.2),this.root.add(a)}this.addPOI("fire","Nova Fire Station 3",e,i,28,{icon:"fire"})}buildGarage(t){const{x:e,z:i}=t;this.addBuilding(e,i,30,24,9,"industrial",2,{roofMat:this.roofMatDark}),this.addSign("AUTO GARAGE",e,6.8,i+12.2,0,"#4a2b05"),this.addPOI("garage","Apex Auto Garage",e,i-2,22,{icon:"garage"})}buildDealership(t){const{x:e,z:i}=t;this.addBuilding(e-8,i,34,22,8,"downtown",1,{roofMat:this.roofMatDark}),this.addSign("NOVA MOTORS",e-8,10,i+11.5,0,"#1d4e7a");const n=new C(new ue(60,22),new z({color:3159098,roughness:.9}));n.rotation.x=-Math.PI/2,n.position.set(e,.17,i+24),this.root.add(n),this.addPOI("dealership","Nova Motors Dealership",e-8,i+8,22,{icon:"dealer"})}buildApartment(t){const{x:e,z:i}=t;this.addBuilding(e,i-4,34,26,26,"midrise",0),this.addRoofDetails(e,i-4,34,26,26.2,ui(17)),this.addBalconies(e,i-4,34,26,26,ui(19)),this.addSign("THE HALE",e,5.4,i+10.5,0,"#2b251e"),this.addPOI("apartment","The Hale Apartments",e,i+12,18,{icon:"home"})}buildShop(t){const{x:e,z:i}=t;this.addBuilding(e,i,28,20,7,"midrise",2),this.addSign("MARKET",e,5,i+10.2,0,"#1b4a39"),this.addPOI("shop","Corner Market",e,i+12,16,{icon:"shop"})}buildOffice(t){const{x:e,z:i}=t;this.addBuilding(e,i,40,30,42,"downtown",0),this.addBuilding(e,i,28,20,58,"downtown",1,{base:42}),this.addRoofDetails(e,i,28,20,100.2,ui(5),"tower"),this.addPOI("office","Meridian Tower",e,i,20,{icon:"office"})}buildHotel(t){const{x:e,z:i}=t;this.addBuilding(e,i,36,28,46,"midrise",3),this.addBalconies(e,i,36,28,46,ui(21)),this.addRoofDetails(e,i,36,28,46.2,ui(22),"tower"),this.addSign("HOTEL AURORA",e,5.5,i+14.5,0,"#2b3c52"),this.addPOI("hotel","Hotel Aurora",e,i+16,18,{icon:"hotel"})}buildFactory(t,e){const{x:i,z:n}=t;this.addBuilding(i,n,52,34,15,"industrial",2,{roofMat:this.roofMatDark});for(let r=-1;r<=1;r+=2){const a=new C(new te(1.1,1.5,34,12),new z({color:9210499,roughness:.95}));a.position.set(i+r*17,17,n-10),a.castShadow=!0,this.root.add(a)}this.factorySmokePos=new D(i,34,n-10),this.addPOI("factory","Northgate Works",i,n,24,{icon:"factory"})}buildSignals(){const t=[];for(let f=0;f<We;f++)for(let p=0;p<We;p++){const x=Math.abs(f-4)<=3&&Math.abs(p-4)<=3;t.push({i:f,j:p,x:re(f),z:re(p),hasLights:x})}this.nodes=t,this.nodeGrid=[];for(let f=0;f<We;f++){this.nodeGrid[f]=[];for(let p=0;p<We;p++)this.nodeGrid[f][p]=t.find(x=>x.i===f&&x.j===p)}const e=new te(.12,.16,4.8,6),i=new z({color:3817284,roughness:.8,metalness:.4}),n=new Ne(.19,8,6),r=new ee({color:16777215}),a=[],o=[],l=new N(2.2,.12,.12),c=[];this.signalLampData=[];for(const f of t){if(!f.hasLights)continue;const p=[[-1,-1],[1,-1],[1,1],[-1,1]];for(const[x,m]of p){const g=f.x+x*(Ve+1.3),_=f.z+m*(Ve+1.3);o.push([g,2.4,_]),c.push([g+(x>0?-1:1)*1.1,4.35,_,x>0?0:Math.PI]);for(let y=0;y<3;y++){const M=4.75-y*.34;a.push([g+(x>0?-1.05:1.05),M,_]),this.signalLampData.push({node:f,axis:m===0?"x":"z",slot:y,index:a.length-1})}}}const h=new Oe(e,i,o.length),u=new Ee;o.forEach(([f,p,x],m)=>{u.position.set(f,p,x),u.updateMatrix(),h.setMatrixAt(m,u.matrix)}),this.root.add(h);const d=new Oe(l,i,c.length);c.forEach(([f,p,x,m],g)=>{u.position.set(f,p,x),u.rotation.set(0,m,0),u.updateMatrix(),d.setMatrixAt(g,u.matrix)}),this.root.add(d),this.signalLampMesh=new Oe(n,r,a.length),this.signalLampMesh.instanceColor=new Ao(new Float32Array(a.length*3),3),a.forEach(([f,p,x],m)=>{u.position.set(f,p,x),u.rotation.set(0,0,0),u.updateMatrix(),this.signalLampMesh.setMatrixAt(m,u.matrix),this.signalLampMesh.setColorAt(m,new Wt(1118481))}),this.root.add(this.signalLampMesh),this.signalNodes=t}signalState(t,e,i){if(!t.hasLights)return"green";const n=(i+(t.i*1.7+t.j*2.3))%26;return e==="x"?n<9?"green":n<11?"yellow":"red":n<12?"red":n<22?"green":n<24?"yellow":"red"}updateSignals(t){const e={red:new Wt(16722750),yellow:new Wt(16757035),green:new Wt(2883482),off:new Wt(1053462)};for(const i of this.signalLampData){const n=this.signalState(i.node,i.axis,t),r=n==="red"?0:n==="yellow"?1:2;let a;i.slot===r?a=e[n]:a=e.off,this.signalLampMesh.setColorAt(i.index,a)}this.signalLampMesh.instanceColor.needsUpdate=!0}buildParkingSpots(t){for(let e=0;e<We;e++)for(let i=0;i<8;i++){const n=re(i)+18+t()*50;this.parkingSpots.push({x:re(e)+Ve+2.8,z:n,heading:-Math.PI/2}),this.parkingSpots.push({x:re(e)-Ve-2.8,z:n,heading:Math.PI/2});const r=re(i)+18+t()*50;this.parkingSpots.push({x:r,z:re(e)+Ve+2.8,heading:Math.PI}),this.parkingSpots.push({x:r,z:re(e)-Ve-2.8,heading:0})}}finalizeProps(){if(this._trees&&this._trees.length){const t=this._trees.length,e=new Oe(this._treeGeo.trunk,this._trunkMat,t),i=new Oe(this._treeGeo.leaves,this._treeMat,t),n=new Ee;this._trees.forEach((r,a)=>{n.position.set(r.x,1.6*r.scale+.15,r.z),n.scale.setScalar(r.scale),n.updateMatrix(),e.setMatrixAt(a,n.matrix),n.position.set(r.x,4.3*r.scale+.15,r.z),n.scale.set(r.scale*(1+Math.random()*.3),r.scale*(1+Math.random()*.4),r.scale*(1+Math.random()*.3)),n.rotation.set(Math.random(),Math.random()*3,Math.random()),n.updateMatrix(),i.setMatrixAt(a,n.matrix)}),e.castShadow=!0,i.castShadow=!0,this.root.add(e,i)}if(this._benches&&this._benches.length){const t=new N(2.2,.16,.65),e=new N(2.2,.5,.12),i=new N(.14,.5,.55),n=new Oe(t,this.woodMat,this._benches.length),r=new Oe(e,this.woodMat,this._benches.length),a=new Oe(i,this.metalMat,this._benches.length*2),o=new Ee;this._benches.forEach((l,c)=>{o.position.set(l.x,.72,l.z),o.rotation.set(0,l.rot,0),o.updateMatrix(),n.setMatrixAt(c,o.matrix),o.position.set(l.x-Math.sin(l.rot)*.26,1,l.z-Math.cos(l.rot)*.26),o.updateMatrix(),r.setMatrixAt(c,o.matrix),o.position.set(l.x-Math.cos(l.rot)*.8,.38,l.z+Math.sin(l.rot)*.8),o.updateMatrix(),a.setMatrixAt(c*2,o.matrix),o.position.set(l.x+Math.cos(l.rot)*.8,.38,l.z+Math.sin(l.rot)*.8),o.updateMatrix(),a.setMatrixAt(c*2+1,o.matrix)}),this.root.add(n,r,a)}}updateLighting(t,e,i){this.hour=t;const n=Math.max(0,Math.sin((t-6)/24*ae)),r=Gt(1-Math.max(0,Math.sin((t-5.5)/24*ae))*2.2,0,1);this.night=r,this.weather=e;const a=e==="storm"?1:e==="rain"?.7:e==="snow"?.55:0,o=1-a*.35;if(this.sun){const c=t/24*ae-Math.PI/2;this.sun.position.set(Math.cos(c)*700,Math.sin(c)*700,260),this.sun.intensity=Gt(Math.sin((t-5.8)/12.4*Math.PI)*2.6,0,2.6)*o,this.sun.color.setHSL(.09+n*.02,.45,.55+n*.25)}this.hemi.intensity=ge(.2,.7,n)*o,this.ambient.intensity=ge(.18,.32,n);const l=r*1.9+(a>0?.15:0);for(const c of this.facadeMaterials)c.emissiveIntensity=.015+l*.95;this.lampGlow&&(this.lampGlow.material.opacity=.22+r*.78,this.lampGlow.material.size=6+r*2),this.crownMat&&(this.crownMat.emissiveIntensity=.2+r*2.4),this.sky&&(this.sky.material.uniforms.night.value=r,this.sky.material.uniforms.storm.value=a,this.sky.material.uniforms.sunDir.value.copy(this.sun.position).normalize()),this.stars&&(this.stars.material.opacity=Gt(r*1.1-.15,0,.95)),this.water&&(this.water.material.uniforms.night.value=r),this.moon&&(this.moon.material.opacity=r*.95),this.cloudSpriteMat&&this.cloudSpriteMat.color.setScalar(ge(1.1,.18,r)*(1-a*.25)),document.body.dataset.night=r>.55?"1":"0"}update(t,e,i){this.updateSignals(e),this.water&&(this.water.material.uniforms.time.value=e);for(const n of this.clouds)n.position.x+=n.userData.speed*t,n.position.x>900&&(n.position.x=-900),n.position.z+=n.userData.speed*t*.1,n.position.z>700&&(n.position.z=-700);this.lampGlow&&(this.lampGlow.rotation.y+=0),this.stars&&(this.stars.rotation.y=e*.002);for(const n of this.animated)n.type==="beacon"&&(n.mesh.material=this.warmMat);this.monorail&&this.monorail.update(t,e),this.rail&&this.rail.update(t,e),this.islandRail&&this.islandRail.update(t,e),this.freightRail&&this.freightRail.update(t,e);for(const n of this.airTraffic)n.update(t,e);if(this.lighthouse){const n=Math.sin(e*.8)*.5+.5;this.lighthouse.light.intensity=this.night>.4?2.2+n*2.2:.4,this.lighthouse.lamp.material.color.setHex(this.night>.4?16773818:9077864)}if(this.highwayCars.length)for(const n of this.highwayCars)n.position.z+=n.userData.speed*t,n.position.z>700&&(n.position.z=-700,n.position.x=n.userData.lane);this.updateFactorySmoke(t,e),this.updateFireflies(t,e)}updateFactorySmoke(t,e){if(!this.factorySmokePos||!this.smokeParticles)return;const i=this.smokeParticles;i.userData.t=(i.userData.t||0)+t;const n=i.geometry.attributes.position;for(let r=0;r<n.count;r++){let a=n.getY(r)+t*(2.2+r%5*.3),o=n.getX(r)+t*.55,l=n.getZ(r)+Math.sin(e*.6+r)*t*.2;a>50&&(a=0,o=this.factorySmokePos.x+(Math.random()-.5)*2,l=this.factorySmokePos.z+(Math.random()-.5)*2),n.setXYZ(r,o,a,l)}n.needsUpdate=!0}updateFireflies(t,e){this.fireflyPoints&&(this.fireflyPoints.material.opacity=(this.night>.5?.8:0)*(this.weather==="clear"?1:.15),this.fireflyPoints.position.y=.6+Math.sin(e*.8)*.1)}districtAt(t,e){for(const a of this.islands||[]){const o=(t-a.x)/a.rx,l=(e-a.z)/a.rz;if(o*o+l*l<1)return a.name}const i=Math.floor((t+Be)/un),n=Math.floor((e+Be)/un),r=this.blocks.find(a=>a.bi===i&&a.bj===n);return r?this.districtName(r.district):e>420?"NOVA HARBOR":t>420?"NOVA AIRFIELD":e<-400||t<-400?"OUTSKIRTS":"NOVA CITY"}isLand(t,e){if(e<486)return!0;for(const i of this.islands||[]){const n=(t-i.x)/i.rx,r=(e-i.z)/i.rz;if(n*n+r*r<1.03)return!0}for(const i of this.bridges||[])if(t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ)return!0;return!1}isWater(t,e){return!this.isLand(t,e)}districtName(t){return{downtown:"DOWNTOWN",midtown:"MIDTOWN",industrial:"INDUSTRIAL",suburb:"PINE HILLS",waterfront:"HARBORFRONT",residential:"WEST END",park:"AURORA PARK",airport:"AIRFIELD"}[t]||"NOVA CITY"}collideCircle(t,e,i){let n=null;for(const r of this.spatial.query(t,e,i+2)){if(r.type!=="building")continue;const a=Gt(t,r.minX,r.maxX),o=Gt(e,r.minZ,r.maxZ),l=t-a,c=e-o,h=l*l+c*c;if(h<i*i){const u=Math.sqrt(h)||1e-4;n={nx:l/u,nz:c/u,pen:i-u,box:r};break}}return n}nearestPOI(t,e,i=999,n=null){let r=null,a=i;for(const o of this.pois){if(n&&!n.includes(o.type))continue;const l=Math.hypot(t-o.x,e-o.z);l<a&&(a=l,r=o)}return r?{poi:r,dist:a}:null}nearestNode(t,e){let i=null,n=1/0;for(const r of this.nodes){const a=Math.hypot(t-r.x,e-r.z);a<n&&(n=a,i=r)}return i}isOnRoad(t,e){for(let i=0;i<We;i++)if(Math.abs(t-re(i))<Ve||Math.abs(e-re(i))<Ve)return!0;for(const i of this.islandRoads||[])if(Math.abs(t-i.x)<=i.w/2&&Math.abs(e-i.z)<=i.d/2)return!0;for(const i of this.bridges||[])if(t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ)return!0;return!1}}class iv{constructor(t){this.game=t,this.group=new $t,this.group.name="player",t.scene.add(this.group),this.pos=new D(10,.18,34),this.heading=Math.PI,this.velocity=new D,this.verticalVelocity=0,this.onGround=!0,this.groundY=.18,this.walkPhase=0,this.moveAmount=0,this.sprinting=!1,this.crouching=!1,this.firstPerson=!1,this.cameraYaw=Math.PI,this.cameraPitch=.04,this.cameraDist=5.2,this.cameraHeight=1.55,this.camShake=0,this.riding=null,this.interior=null,this.vehicle=null,this.visible=!0,this.footTimer=0,this.animT=0,this.idleT=0,this.clothing={jacket:2570317,pants:2239027,shoes:1316892,skin:12618339,hair:2826523},this.buildModel(),this.group.position.copy(this.pos),this.group.rotation.y=this.heading,this.camera=t.camera,this.camera.position.set(0,10,20),this.tmp=new D,this.wantToSit=!1,this.cinematic=null,this.lookHold=0}buildModel(){const t=this.group;this.body=new $t,t.add(this.body);const e=new z({color:this.clothing.skin,roughness:.72}),i=new z({color:this.clothing.jacket,roughness:.82}),n=new z({color:this.clothing.pants,roughness:.9}),r=new z({color:this.clothing.shoes,roughness:.7}),a=new z({color:this.clothing.hair,roughness:.9}),o=new z({color:15002092,roughness:.86}),l=new z({color:1317408,roughness:.74,metalness:.18}),c=new z({color:15988210,roughness:.35}),h=new z({color:2899785,roughness:.3});this.mats={skinMat:e,jacketMat:i,pantsMat:n,shoeMat:r,hairMat:a};const u=new $t;u.position.y=.88,this.body.add(u),this.addPart=(w,b,v,S,L,A=u)=>{const P=new C(w,b);return P.position.set(v,S,L),P.castShadow=!0,A.add(P),P},this.addPart(new N(.38,.26,.27),n,0,-.04,0),this.addPart(new N(.405,.075,.285),l,0,.09,0),this.addPart(new Di(.238,.4,5,12),i,0,.37,0),this.addPart(new N(.5,.16,.3),i,0,.57,0),this.addPart(new N(.34,.08,.28),i,0,.64,0),this.addPart(new N(.026,.34,.022),l,0,.38,.239),this.addPart(new N(.16,.16,.025),o,0,.53,.232);for(const w of[-1,1]){const b=this.addPart(new N(.11,.2,.035),i,w*.1,.52,.235);b.rotation.z=w*.22,this.addPart(new N(.13,.1,.025),l,w*.14,.25,.235)}this.addPart(new N(.34,.42,.16),l,0,.4,-.245),this.addPart(new N(.28,.08,.07),l,0,.58,-.32);for(const w of[-1,1])this.addPart(new N(.045,.34,.025),l,w*.14,.43,.235);this.addPart(new te(.072,.084,.14,9),e,0,.7,0),this.addPart(new Ne(.182,18,14),e,0,.865,0).scale.set(.94,1.05,.96),this.addPart(new N(.18,.09,.14),e,0,.77,.055);for(const w of[-1,1]){this.addPart(new Ne(.045,8,6),e,w*.177,.87,.012),this.addPart(new Ne(.036,10,8),c,w*.067,.9,.148).scale.set(1,.82,.55),this.addPart(new Ne(.017,8,6),h,w*.067,.9,.181);const v=this.addPart(new N(.075,.016,.02),a,w*.068,.944,.166);v.rotation.z=-w*.1}this.addPart(new N(.045,.1,.06),e,0,.855,.185),this.addPart(new N(.078,.018,.018),new z({color:7158835,roughness:.7}),0,.792,.178),this.addPart(new Ne(.19,14,12,0,ae,0,Math.PI*.56),a,0,.884,-.008).scale.set(.99,1.02,1),this.addPart(new N(.3,.1,.08),a,0,.93,-.16);const p=w=>{const b=new $t;b.position.set(w*.305,.565,0),u.add(b),this.addPart(new Di(.072,.24,4,9),i,0,-.17,0,b);const v=new $t;return v.position.y=-.34,b.add(v),this.addPart(new Di(.062,.23,4,9),i,0,-.14,0,v),this.addPart(new Ne(.07,10,8),e,0,-.3,0,v),this.addPart(new N(.1,.09,.06),e,0,-.35,.02,v).scale.set(1,.9,1),{shoulder:b,elbow:v}},x=p(-1),m=p(1);this.armL=x.shoulder,this.elbowL=x.elbow,this.armR=m.shoulder,this.elbowR=m.elbow;const g=w=>{const b=new $t;b.position.set(w*.118,-.02,0),u.add(b),this.addPart(new Di(.095,.25,4,9),n,0,-.16,0,b);const v=new $t;return v.position.y=-.33,b.add(v),this.addPart(new Di(.079,.23,4,9),n,0,-.15,0,v),this.addPart(new N(.185,.11,.33),r,0,-.32,.04,v).scale.set(1,1,1),this.addPart(new N(.2,.045,.35),l,0,-.373,.045,v),{hip:b,knee:v}},_=g(-1),y=g(1);this.legL=_.hip,this.kneeL=_.knee,this.legR=y.hip,this.kneeR=y.knee,this.hips=u;const M=new C(new as(.44,18),new ee({color:0,transparent:!0,opacity:.24,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.012,t.add(M),this.shadow=M}setClothing(t){Object.assign(this.clothing,t),this.mats.jacketMat.color.setHex(this.clothing.jacket),this.mats.pantsMat.color.setHex(this.clothing.pants),this.mats.shoeMat.color.setHex(this.clothing.shoes),this.mats.hairMat.color.setHex(this.clothing.hair),this.mats.skinMat.color.setHex(this.clothing.skin)}setPosition(t,e,i=.18){this.pos.set(t,i,e),this.groundY=i,this.group.position.copy(this.pos)}enteredVehicle(t){this.vehicle=t,this.group.visible=!1,this.shadow.visible=!1,this.riding=null,this.lookHold=0,this.cameraYaw=t.heading,this.cameraPitch=t.isAir?.18:.1,this.cameraDist=t.cfg.len>6?11:t.cfg.len>4.8?7.4:5.6,t.isAir&&(this.cameraDist=12)}exitVehicle(t,e=1){const i=Math.sin(t.heading),r=-Math.cos(t.heading),a=i,o=t.cfg.wid/2+1.1;let l=t.pos.x+r*o*e,c=t.pos.z+a*o*e;this.game.city.collideCircle(l,c,.5)&&(l=t.pos.x-r*o*e,c=t.pos.z-a*o*e),this.vehicle=null,this.group.visible=!0,this.shadow.visible=!0,this.setPosition(l,c,this.groundY||.18),this.heading=t.heading,this.group.rotation.y=this.heading,this.cameraYaw=t.heading,this.velocity.set(0,0,0)}toggleCamera(){return this.firstPerson=!this.firstPerson,this.cameraDist=this.firstPerson?0:this.vehicle?7:5.2,this.group.visible=!this.firstPerson&&!this.vehicle,this.shadow.visible=!this.firstPerson&&!this.vehicle,this.firstPerson}updateCamera(t){const e=this.camera;if(this.cinematic){const u=this.cinematic;u.t+=t;const d=u.t;e.position.set(u.cx+Math.sin(d*u.speed)*u.radius,u.cy+Math.sin(d*.3)*12,u.cz+Math.cos(d*u.speed)*u.radius),e.lookAt(0,28,0);return}if(this.vehicle){this.updateVehicleCamera(t);return}if(this.riding){this.updateRidingCamera(t);return}const i=this.tmp.set(this.pos.x,this.pos.y+this.cameraHeight,this.pos.z),n=this.cameraYaw,r=this.cameraPitch;let a=this.cameraDist;if(this.firstPerson){const u=new D(this.pos.x,this.pos.y+1.62,this.pos.z);e.position.lerp(u,Gt(t*18,0,1));const d=new D(Math.sin(n)*Math.cos(r),Math.sin(-r),Math.cos(n)*Math.cos(r));e.lookAt(u.x+d.x,u.y+d.y,u.z+d.z),e.rotation.z=0;return}const o=new D(-Math.sin(n)*Math.cos(r),Math.sin(r),-Math.cos(n)*Math.cos(r));let l=new D(i.x+o.x*a,i.y+o.y*a+1.15,i.z+o.z*a);const c=this.game.city.collideCircle(l.x,l.z,.45);c&&(l.x+=c.nx*c.pen*1.2,l.z+=c.nz*c.pen*1.2),l.y=Math.max(l.y,.55),e.position.lerp(l,Gt(t*9,0,1));const h=new D(this.pos.x,this.pos.y+1.45,this.pos.z);if(e.lookAt(h),this.game.camShake>0){const u=this.game.camShake;e.position.x+=(Math.random()-.5)*u*.25,e.position.y+=(Math.random()-.5)*u*.2,this.game.camShake=Math.max(0,u-t*2.2)}}updateVehicleCamera(t){const e=this.vehicle,i=this.camera;this.lookHold>0?this.lookHold-=t:this.cameraYaw=es(this.cameraYaw,e.heading,Gt(t*3.4,0,1)),this.cameraYaw;const n=e.isAir||e.cfg.len>6?13:e.cfg.len>4.8?9:7.2,r=this.cameraDist||n,a=this.cameraPitch,o=new D(e.pos.x,e.pos.y+(e.isAir?2:e.cfg.height*.55),e.pos.z);if(this.firstPerson){const d=new D(e.pos.x+Math.sin(e.heading)*e.cfg.len*.15,e.pos.y+(e.isAir?2:e.cfg.height*.55),e.pos.z+Math.cos(e.heading)*e.cfg.len*.15);i.position.lerp(d,Gt(t*12,0,1));const f=new D(Math.sin(this.cameraYaw)*Math.cos(a),Math.sin(-a),Math.cos(this.cameraYaw)*Math.cos(a));i.lookAt(d.x+f.x,d.y+f.y,d.z+f.z);return}const l=this.cameraYaw,c=new D(-Math.sin(l)*Math.cos(a),Math.sin(a)*.6,-Math.cos(l)*Math.cos(a)),h=new D(o.x+c.x*r,o.y+Math.max(1.2,c.y*r),o.z+c.z*r),u=this.game.city.collideCircle(h.x,h.z,.45);if(u&&(h.x+=u.nx*u.pen,h.z+=u.nz*u.pen),h.y=Math.max(h.y,e.isAir?e.pos.y-2:.7),i.position.lerp(h,Gt(t*7,0,1)),i.lookAt(o),this.game.camShake>0){const d=this.game.camShake;i.position.x+=(Math.random()-.5)*d*.22,i.position.y+=(Math.random()-.5)*d*.18,this.game.camShake=Math.max(0,d-t*2.4)}}updateRidingCamera(t){const e=this.riding,i=this.camera,n=e.group?e.group.position:e.pos,r=e.group?.rotation.y??this.cameraYaw;this.lookHold>0?this.lookHold-=t:this.cameraYaw=es(this.cameraYaw,r,Gt(t*2.2,0,1));const a=this.cameraYaw,o=e.group?.userData?.cars,l=e.group?.userData?.trainLength??(o?.length?(o.length-1)*10.6+10:22),c=Math.sin(r),h=Math.cos(r);if(this.firstPerson){const x=new D(n.x+c*1.8,n.y+2.3,n.z+h*1.8);i.position.lerp(x,Gt(t*8,0,1)),i.lookAt(x.x+c*30,x.y-.25+Math.sin(this.cameraPitch)*14,x.z+h*30);return}const u=new D(n.x-c*(l*.5-5),n.y+2.1,n.z-h*(l*.5-5)),d=(this.cameraDist||18)+l*.55,f=new D(-Math.sin(a),0,-Math.cos(a)).multiplyScalar(d),p=new D(u.x+f.x,u.y+4.4+Math.sin(this.cameraPitch)*d*.55,u.z+f.z);i.position.lerp(p,Gt(t*4,0,1)),i.lookAt(u)}update(t,e){if(this.cinematic){this.updateCamera(t);return}if(this.vehicle){this.updateCamera(t);return}if(this.riding){this.updateCamera(t);return}const i=this.cameraYaw;let n=(e.right?1:0)-(e.left?1:0),r=(e.forward?1:0)-(e.back?1:0);const a=Math.hypot(n,r);a>0&&(n/=a,r/=a);const o=new lt(Math.sin(i),Math.cos(i)),l=new lt(-o.y,o.x),c=!!e.sprint,u=!!this.crouching?2.1:c?6.9:3.7,d=new lt(o.x*r+l.x*n,o.y*r+l.y*n).multiplyScalar(u*(a>0?1:0)),f=this.onGround?16:5;if(this.velocity.x=ge(this.velocity.x,d.x,Gt(t*f,0,1)),this.velocity.z=ge(this.velocity.z,d.y,Gt(t*f,0,1)),a>0){const y=Math.atan2(this.velocity.x,this.velocity.z);this.heading=es(this.heading,y,Gt(t*11,0,1))}this.group.rotation.y=this.heading;const p=this.pos.x+this.velocity.x*t,x=this.pos.z+this.velocity.z*t;let m=p,g=x;const _=this.game.city.collideCircle(m,g,.42);_&&(m+=_.nx*_.pen,g+=_.nz*_.pen,this.velocity.x*=.3,this.velocity.z*=.3),m=Gt(m,-680,820),g=Gt(g,-660,900),this.game.city.isWater?.(m,g)&&(m=this.pos.x,g=this.pos.z,this.velocity.multiplyScalar(.2)),this.pos.x=m,this.pos.z=g,e.jump&&this.onGround&&(this.verticalVelocity=5.8,this.onGround=!1,this.game.audio?.jump()),this.verticalVelocity-=18*t,this.pos.y+=this.verticalVelocity*t,this.pos.y<=this.groundY&&(this.pos.y=this.groundY,this.verticalVelocity=0,this.onGround=!0),this.moveAmount=Math.hypot(this.velocity.x,this.velocity.z),this.sprinting=c&&this.moveAmount>4,this.group.position.copy(this.pos),this.animate(t,this.moveAmount,c),this.onGround&&this.moveAmount>.5&&(this.footTimer-=t*(c?1.8:1.2),this.footTimer<=0&&(this.footTimer=.48,this.game.audio?.footstep(c))),this.updateCamera(t)}animate(t,e,i){this.animT+=t;const n=this.kneeL,r=this.kneeR;if(e>.2){this.walkPhase+=t*(i?12:7.5)*Gt(e/3.5,.5,1.6);const a=Math.sin(this.walkPhase)*(i?.78:.5);this.legL.rotation.x=a,this.legR.rotation.x=-a,n.rotation.x=Math.max(0,-a)*1.15,r.rotation.x=Math.max(0,a)*1.15,this.elbowL.rotation.x=-.28-Math.max(0,a)*.5,this.elbowR.rotation.x=-.28-Math.max(0,-a)*.5,this.armL.rotation.x=-a*.8,this.armR.rotation.x=a*.8,this.armL.rotation.z=.045,this.armR.rotation.z=-.045,this.hips.position.y=.88+Math.abs(Math.sin(this.walkPhase))*(i?.075:.038),this.body.rotation.x=i?-.16:-.035,this.body.rotation.y=Math.sin(this.walkPhase)*(i?.07:.045),this.hips.rotation.z=Math.sin(this.walkPhase)*(i?.035:.02)}else{this.idleT+=t;const a=Math.sin(this.idleT*1.6)*.02,o=Math.sin(this.idleT*1.6)*.012;this.legL.rotation.x=ge(this.legL.rotation.x,0,t*7),this.legR.rotation.x=ge(this.legR.rotation.x,0,t*7),n.rotation.x=ge(n.rotation.x,.03,t*6),r.rotation.x=ge(r.rotation.x,.03,t*6),this.armL.rotation.x=ge(this.armL.rotation.x,-a,t*6),this.armR.rotation.x=ge(this.armR.rotation.x,a,t*6),this.armL.rotation.z=ge(this.armL.rotation.z,.08,t*5),this.armR.rotation.z=ge(this.armR.rotation.z,-.08,t*5),this.elbowL.rotation.x=ge(this.elbowL.rotation.x,-.22,t*5),this.elbowR.rotation.x=ge(this.elbowR.rotation.x,-.22,t*5),this.hips.position.y=.88+a*.18+o,this.hips.rotation.z=ge(this.hips.rotation.z,0,t*5),this.body.rotation.x=ge(this.body.rotation.x,0,t*5),this.body.rotation.y=ge(this.body.rotation.y,0,t*5)}this.onGround||(this.legL.rotation.x=.45,this.legR.rotation.x=-.25,n.rotation.x=.8,r.rotation.x=.45,this.armL.rotation.x=-.7,this.armR.rotation.x=-.7,this.elbowL.rotation.x=-.4,this.elbowR.rotation.x=-.4),this.shadow.position.y=this.groundY-this.pos.y+.012,this.shadow.material.opacity=Gt(.26-(this.pos.y-this.groundY)*.08,.05,.3)}beginCinematic(t,e,i,n,r){this.cinematic={cx:t,cy:e,cz:i,radius:n,speed:r,t:0},this.group.visible=!1}endCinematic(){this.cinematic=null,this.group.visible=!this.vehicle&&!this.firstPerson}}const Rs=[[1,0],[-1,0],[0,1],[0,-1]];class nv{constructor(t,e,i,n,r=0,a={}){this.game=t,this.type=e,this.cfg=ci[e],this.model=is(e,a.color??this.cfg.color??zo(e),{traffic:a.traffic}),this.group=this.model.group,this.wheels=this.model.wheels||[],this.headMats=this.model.headMats||[],this.brakeMats=this.model.brakeMats||[],this.turnMats=this.model.turnMats||[],this.bodyMat=this.model.bodyMat,this.rotor=this.model.rotor,this.tailRotor=this.model.tailRotor,this.rider=this.model.rider,this.group.position.set(i,a.y??.02,n),this.group.rotation.y=r,t.scene.add(this.group),this.pos=this.group.position,this.heading=r,this.velocity=new lt,this.speed=0,this.steer=0,this.throttle=0,this.brakeInput=0,this.handbrake=!1,this.health=100,this.fuel=this.cfg.fuel,this.engineOn=!0,this.lightsOn=!1,this.indicator=0,this.damageFlash=0,this.lastCrash=0,this.wheelSpin=0,this.mode=a.mode||(a.traffic?"traffic":"parked"),this.service=a.service||null,this.owned=!!a.owned,this.knock=new lt,this.knockTimer=0,this.smokeAcc=0,this.driverVisible=!1,this.verticalVelocity=0,this.altitude=a.y??0,this.rotorAngle=0,this.traffic=null,this.parkedName=a.name||null,this.interiorLight=0,this.isPlayer=!1,this.enterable=!0,this.doorOpen=!1,this.turret=null,this.wakeAcc=0,this.speedKmh=0,this.brakeOn=!1,this.cruise=0,this.lodTick=Math.random()*4,a.traffic&&this.initTraffic(a.trafficRoute),this.service&&this.addServiceLights()}get isBoat(){return!!this.cfg.isBoat}get isAir(){return!!this.cfg.isAir}get halfLen(){return this.cfg.len/2}get halfWid(){return this.cfg.wid/2}addServiceLights(){const t=new $t,e=new ee({color:16719904,toneMapped:!1}),i=new ee({color:2776063,toneMapped:!1}),n=this.type==="motorcycle"?1.2:this.cfg.height+(this.type==="bus"?.1:.02),r=new N(this.type==="fire"?1.4:.55,.16,.38),a=new C(r,e);a.position.set(-.3,n,(this.type==="sedan",0));const o=new C(r,i);o.position.set(.3,n,0),t.add(a,o);const l=new An(16724787,0,18,2);l.position.set(0,n,0),t.add(l),this.group.add(t),this.serviceLights={redM:e,blueM:i,light:l,group:t}}initTraffic(t=null){let e=t?.node||this.game.city.nearestNode(this.pos.x,this.pos.z),i=t?.dir||ve(Rs),n=this.getNeighbor(e,i),r=0;for(;!n&&r++<8;)i=ve(Rs),n=this.getNeighbor(e,i);if(!n){this.mode="parked";return}this.traffic={node:e,next:n,dir:i,t:t?.t??j(2,60),lane:t?.lane??3.9,cruise:this.type==="bus"||this.type==="truck"?j(8,10):j(10,14),turnTimer:0,stopTimer:0};const a=this.lanePoint(this.traffic);this.pos.x=a.x,this.pos.z=a.z,this.heading=Math.atan2(i[0],i[1]),this.group.rotation.y=this.heading,this.mode="traffic"}getNeighbor(t,e){const i=t.i+e[0],n=t.j+e[1];return i<0||i>=9||n<0||n>=9?null:this.game.city.nodeGrid[i][n]}lanePoint(t,e=0){const i=t.node.x+t.dir[0]*(t.t+e),n=t.node.z+t.dir[1]*(t.t+e),r=-t.dir[1],a=t.dir[0];return{x:i+r*t.lane,z:n+a*t.lane}}chooseNext(t){const e=[],i=[-t.dir[0],-t.dir[1]];for(const r of Rs)r[0]===i[0]&&r[1]===i[1]||this.getNeighbor(t.next,r)&&e.push(r);if(!e.length)return[-t.dir[0],-t.dir[1]];const n=e.filter(r=>r[0]===t.dir[0]&&r[1]===t.dir[1]);return n.length&&Math.random()<.55?n[0]:ve(e)}updateTraffic(t,e,i,n){const r=this.traffic;if(!r)return;this.knockTimer>0&&(this.knockTimer-=t,this.pos.x+=this.knock.x*t,this.pos.z+=this.knock.y*t,this.knock.multiplyScalar(1-t*4));const a=96,o=r.dir[0]!==0?"x":"z",l=a-r.t;let c=r.cruise,h=!1;if(l<34){const S=this.game.city.signalState(r.next,o,e),L=Math.max(0,l-10),A=this.speed*this.speed<=2*this.cfg.brake*.8*L;if(S==="red"||S==="yellow"&&A){const P=Math.sqrt(2*this.cfg.brake*.8*L);c=Math.min(c,P),l<=10.5&&(c=0,h=!0)}}const u=Math.sin(this.heading),d=Math.cos(this.heading);for(const S of this.game.vehicles.vehicles){if(S===this||S.mode==="parked"&&S.isAir)continue;const L=S.pos.x-this.pos.x,A=S.pos.z-this.pos.z,P=L*u+A*d;if(P<=0)continue;const k=Math.abs(L*d-A*u),B=(this.cfg.wid+S.cfg.wid)*.5+1.1,I=P-(this.cfg.len+S.cfg.len)*.5;k<B&&I<6.5&&(c=Math.min(c,Math.max(0,S.speed||0)),(I<1.5||S.mode!=="traffic"&&S!==this.game.vehicles.playerVehicle)&&(h=!0))}this.game.npcs?.anyInFront(this.pos.x,this.pos.z,this.heading,8)&&(h=!0),h&&(c=0),this.health<15&&(c=0);const p=h?this.cfg.brake*.8:this.cfg.accel*.55;this.speed=this.speed<c?Math.min(c,this.speed+p*t):Math.max(c,this.speed-this.cfg.brake*t),this.brakeOn=h&&this.speed>.1;const x=this.lanePoint(r,10),m=x.x-this.pos.x,g=x.z-this.pos.z,_=Math.atan2(m,g);let y=Ss(_-this.heading);this.steer=ge(this.steer,Gt(y*1.7,-.65,.65),Gt(t*8,0,1));const M=Gt(this.speed*.35,0,2.2);this.heading=Ss(this.heading+Gt(y,-M*t,M*t));const w=Math.sin(this.heading),b=Math.cos(this.heading);this.pos.x+=w*this.speed*t,this.pos.z+=b*this.speed*t,this.group.rotation.y=this.heading,r.t+=this.speed*t;const v=this.lanePoint(r,0);if(this.pos.x+=(v.x-this.pos.x)*Math.min(1,t*1.5),this.pos.z+=(v.z-this.pos.z)*Math.min(1,t*1.5),r.t>=a&&(r.t-=a,r.node=r.next,r.dir=this.chooseNext(r),r.next=this.getNeighbor(r.node,r.dir),r.next||(r.node=this.game.city.nearestNode(this.pos.x,this.pos.z),r.dir=ve(Rs),r.next=this.getNeighbor(r.node,r.dir))),this.animateWheels(t),this.speedKmh=this.speed*3.6,this.lightsOn!==(i>.4||n!=="clear")&&(this.lightsOn=i>.4||n!=="clear"),Bc(this.headMats,this.brakeMats,this.turnMats,{lightsOn:this.lightsOn,braking:this.brakeOn||this.speed<.2}),this.serviceLights){const S=Math.floor(e*5)%2===0;this.serviceLights.redM.color.setHex(S?16719904:3147784),this.serviceLights.blueM.color.setHex(S?657968:2776063),this.serviceLights.light.color.setHex(S?16719904:2776063),this.serviceLights.light.intensity=S?2.6:2.2}}updatePlayer(t,e,i,n,r){if(this.isPlayer=!0,this.isAir)return this.updateHelicopter(t,e,r);if(this.isBoat)return this.updateBoat(t,e,i,r);const a=this.cfg,o=new lt(Math.sin(this.heading),Math.cos(this.heading)),l=new lt(-o.y,o.x);let c=this.velocity.dot(o),h=this.velocity.dot(l);const u=Gt(1-(100-this.health)/150,.35,1),d=this.fuel>.1,f=this.engineOn&&d&&this.health>6;this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.handbrake=!!e.handbrake;const p=!this.game.city.isOnRoad(this.pos.x,this.pos.z),x=i==="rain"||i==="storm",m=a.maxSpeed*u*(p?.62:1)*(x?.86:1);if(this.brakeInput>0&&c<=.4?f&&(c-=a.accel*.45*t*u):this.brakeInput>0&&(c-=a.brake*this.brakeInput*t),this.throttle>0&&f){const A=a.accel*(1-Gt(Math.abs(c)/m,0,1)*.72);c+=A*this.throttle*t*u}c=Gt(c,-m*.35,m),c*=1-t*(p?1.2:.22),c-=Math.sign(c)*Math.min(Math.abs(c),(p?4.5:.8)*t);let g=a.grip*(x?.52:1)*(p?.55:1);this.handbrake&&(g*=.16),this.health<40&&(g*=.86),h*=Math.exp(-g*t);const _=e.steer||0;this.steer=ge(this.steer,_,Gt(t*8,0,1));const y=Gt(Math.abs(c)/7,0,1),M=this.handbrake?1.45:1,w=1.5*y*(1-Gt(Math.abs(c)/a.maxSpeed,0,1)*.38)*M;this.heading=Ss(this.heading-this.steer*w*t*(c<0?-1:1)),(x||this.handbrake)&&(h-=this.steer*c*(x?.09:.2)*t*(this.handbrake?2.4:1));const b=new lt(Math.sin(this.heading),Math.cos(this.heading)),v=new lt(-b.y,b.x);this.velocity.set(b.x*c+v.x*h,b.y*c+v.y*h);const S=this.pos.x,L=this.pos.z;this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.game.city.isWater?.(this.pos.x,this.pos.z)&&(this.pos.x=S,this.pos.z=L,this.velocity.multiplyScalar(.15),this.speed>4&&(this.game.audio?.crash?.(4),this.game.notify?.("Deep water ahead — use the bridge","warn")),this.speed*=.35),this.group.rotation.y=this.heading,this.wheels.length&&(this.group.rotation.z=ge(this.group.rotation.z,-this.steer*Gt(c/40,0,1)*.055,t*5),this.group.rotation.x=ge(this.group.rotation.x,Gt((this.throttle-this.brakeInput)*.012,-.02,.02),t*4)),this.speed=c,this.speedKmh=Math.abs(c)*3.6,this.brakeOn=this.brakeInput>0||this.throttle===0&&Math.abs(c)>.2||this.handbrake,f&&(this.fuel=Math.max(0,this.fuel-t*(.011+Math.abs(c)*75e-5*(this.throttle>0?2.2:1)))),this.resolveWorldCollisions(t,c),this.animateWheels(t),this.animateLights(n,r,e),this.health<55&&this.game.effects.smokeAtVehicle(this,t),d===!1&&f&&(this.engineOn=!1)}updateHelicopter(t,e,i){const n=this.cfg,r=this.fuel>.1,a=this.engineOn&&r;this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.steer=e.steer||0;const o=e.up||0,l=e.down||0,c=a?(o-l)*11:-9;this.verticalVelocity=ge(this.verticalVelocity,c,t*2.2),this.altitude=Math.max(.5,this.altitude+this.verticalVelocity*t);const h=new lt(Math.sin(this.heading),Math.cos(this.heading));let u=this.velocity.dot(h);const d=a?this.throttle*n.maxSpeed-this.brakeInput*10:0;u=ge(u,d,t*.7),this.heading=Ss(this.heading-this.steer*t*(1.15+Gt(Math.abs(u)/40,0,.4)));const f=new lt(Math.sin(this.heading),Math.cos(this.heading));if(this.velocity.set(f.x*u,f.y*u),this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.pos.y=ge(this.pos.y,this.altitude+Math.sin(performance.now()*.001)*.06,t*5),this.group.rotation.y=this.heading,this.group.rotation.z=ge(this.group.rotation.z,-this.steer*.18-this.velocity.x*.001,t*2),this.group.rotation.x=ge(this.group.rotation.x,Gt(-u*.004,-.16,.16),t*2),this.speed=Math.abs(u),this.speedKmh=Math.abs(u)*3.6,this.fuel=Math.max(0,this.fuel-t*(.03+(o?.04:0))),this.rotorAngle+=t*(a?42:8),this.model.rotor.rotation.y=this.rotorAngle,this.model.tailRotor&&(this.model.tailRotor.rotation.x=this.rotorAngle*1.4),this.rotor&&(this.rotor.rotation.y=this.rotorAngle),this.brakeOn=!1,this.altitude<30){const p=this.game.city.collideCircle(this.pos.x,this.pos.z,3);p&&p.box.height>this.pos.y&&(this.pos.x-=p.nx*p.pen,this.pos.z-=p.nz*p.pen,this.health=Math.max(0,this.health-12),this.game.effects.sparksAt(this.pos.x,this.pos.y,this.pos.z,14),this.verticalVelocity=2)}this.pos.y<2.2&&(this.pos.y=2.2,this.altitude=2.2,this.verticalVelocity=0,e.up&&(this.altitude=2.4)),this.health<55&&this.game.effects.smokeAtVehicle(this,t),this.animateLights(performance.now()/1e3,i,e),!a&&this.altitude>1&&(this.altitude=Math.max(.5,this.altitude-t*4))}updateBoat(t,e,i,n){const r=this.cfg,a=new lt(Math.sin(this.heading),Math.cos(this.heading)),o=new lt(-a.y,a.x);let l=this.velocity.dot(a);this.velocity.dot(o),this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.steer=e.steer||0,this.engineOn&&this.fuel>.1&&this.throttle>0&&(l+=r.accel*this.throttle*t*(1-Gt(l/r.maxSpeed,0,1)*.6)),this.brakeInput>0&&(l-=r.brake*this.brakeInput*t),l*=1-t*.25,l=Gt(l,-4,r.maxSpeed),this.heading=Ss(this.heading-this.steer*1.1*Gt(Math.abs(l)/8,0,1)*t);const h=new lt(Math.sin(this.heading),Math.cos(this.heading));if(this.velocity.set(h.x*l,h.y*l),this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.pos.z<492&&(this.pos.z=492,this.velocity.y=Math.abs(this.velocity.y)*.2,l*=.2),this.pos.z>1400&&(this.pos.z=1400),this.pos.y=.25+Math.sin(performance.now()*.0012+this.pos.x*.01)*.12,this.group.rotation.y=this.heading,this.group.rotation.z=ge(this.group.rotation.z,this.steer*.08,t*3),this.group.rotation.x=ge(this.group.rotation.x,Math.sin(performance.now()*.0015)*.02,t*2),this.speed=l,this.speedKmh=Math.abs(l)*3.6,this.fuel=Math.max(0,this.fuel-t*(.02+this.throttle*.04)),this.animateLights(performance.now()/1e3,n,e),Math.abs(l)>3&&(this.wakeAcc+=t,this.wakeAcc>.08)){this.wakeAcc=0;const u=new lt(-Math.sin(this.heading),-Math.cos(this.heading));this.game.effects.wakes.spawn(this.pos.x+u.x*3.2,this.pos.y+.2,this.pos.z+u.y*3.2,{color:14152191,size:1.2,grow:2.4,life:.9,vy:.2,vx:j(-.4,.4),vz:j(-.4,.4),drag:.9})}this.health<55&&this.game.effects.smokeAtVehicle(this,t)}resolveWorldCollisions(t,e){const i=this.cfg.len,n=this.cfg.wid*.46,r=[-i*.32,0,i*.32],a={x:Math.sin(this.heading),z:Math.cos(this.heading)};let o=!1,l=0,c=null;for(const h of r){const u=this.pos.x+a.x*h,d=this.pos.z+a.z*h,f=this.game.city.collideCircle(u,d,n);f&&(this.pos.x+=f.nx*f.pen,this.pos.z+=f.nz*f.pen,o=!0,f.pen>l&&(l=f.pen,c=f))}if(o){const h=Math.abs(e)+l*8;if(h>1.6){const u=c.nx,d=c.nz,f=this.velocity.x*u+this.velocity.y*d;f<0&&(this.velocity.x-=u*f*1.35,this.velocity.y-=d*f*1.35),this.velocity.multiplyScalar(.72);const p=Gt((h-1.2)*.9,0,30);this.applyDamage(p,{x:this.pos.x+a.x*(i*.32),y:this.pos.y+.7,z:this.pos.z+a.z*(i*.32)}),this.game.audio?.crash(h),h>4&&(this.game.camShake=Math.max(this.game.camShake,Math.min(1,h/20)))}}}animateWheels(t){const e=this.speed*t/(this.cfg.wheelR||.35);for(const i of this.wheels)i.mesh.rotation.x+=e,i.front&&(i.mesh.rotation.y=this.steer*.42)}animateLights(t,e,i){(this.lightsOn||e>.5)&&(this.lightsOn=!0);const r=this.indicator===-1||i?.left,a=this.indicator===1||i?.right;if(Bc(this.headMats,this.brakeMats,this.turnMats,{lightsOn:this.lightsOn,braking:this.brakeOn,left:r,right:a}),this.serviceLights){const o=Math.floor(t*6)%2===0;this.serviceLights.redM.color.setHex(o?16719904:2622982),this.serviceLights.blueM.color.setHex(o?1785855:526368),this.serviceLights.light.color.setHex(o?16719904:2776063),this.serviceLights.light.intensity=3}}applyDamage(t,e=null){this.health=Gt(this.health-t,0,100),this.damageFlash=1,e&&(t>4&&this.game.effects.sparksAt(e.x,e.y,e.z,Math.min(24,t)),t>8&&(this.deform(t,e),this.game.effects.debris(e.x,e.y,e.z,Math.min(12,t/2))),t>22&&this.game.effects.explosion(e.x,e.y,e.z)),this.health<=0&&!this.dead&&(this.dead=!0,this.engineOn=!1,this.game.notify?.("Vehicle disabled — engine failure","bad")),this.serviceLights&&(this.serviceLights.group.visible=this.health>30)}deform(t,e){const i=e?this.group.worldToLocal(new D(e.x,e.y,e.z)):new D(0,0,1),n=[];if(this.group.traverse(h=>{h.isMesh&&h.userData.panel&&h.geometry&&n.push(h)}),!n.length)return;const a=n[Math.floor(Math.random()*n.length)].geometry,o=a.attributes.position,l=i.clone(),c=Math.min(.28,t*.008);for(let h=0;h<o.count;h++){const u=o.getX(h),d=o.getY(h),f=o.getZ(h),p=Math.hypot(u-l.x,d-l.y,f-l.z);if(p<2.5){const x=(1-p/2.5)*c;o.setXYZ(h,u*(1-x*.5),d*(1-x*.7),f*(1-x*.3))}}o.needsUpdate=!0,a.computeVertexNormals(),this.bodyMat.color.multiplyScalar(.985)}repair(){this.health=100,this.fuel=this.cfg.fuel,this.engineOn=!0,this.dead=!1,this.visible=!0,this.group.visible=!0}dispose(){this.game.scene.remove(this.group)}}class sv{constructor(t){this.game=t,this.vehicles=[],this.playerVehicle=null,this.trafficLimit=74,this.spawnedTraffic=!1,this.pendingTraffic=[]}spawn(t,e,i,n=0,r={}){const a=new nv(this.game,t,e,i,n,r);return this.vehicles.push(a),a}spawnTraffic(t){const e=["sedan","sedan","sedan","taxi","taxi","suv","suv","sports","van","van","pickup","bus","bus","truck","truck","construction","motorcycle","motorcycle","sedan"],i=this.vehicles.filter(a=>a.mode==="traffic").length,n=Math.max(0,Math.min(Math.floor(t),this.trafficLimit-i));let r=0;for(let a=0;a<n;a++){let o,l;for(let h=0;h<48;h++){o=ve(e),l=this.randomRoadPoint();const u=ci[o];if(!this.vehicles.some(f=>{const p=(u.len+f.cfg.len)*.5+5;return Math.hypot(f.pos.x-l.x,f.pos.z-l.z)<Math.max(13,p)}))break;l=null}if(!l)continue;const c=this.spawn(o,l.x,l.z,l.heading,{traffic:!0,trafficRoute:l.route,color:zo(o),y:.02});c.traffic.cruise=o==="bus"||o==="truck"?j(7,9):o==="construction"?j(5,7):o==="motorcycle"?j(13,17):j(10,14.5),r++}return r}randomRoadPoint(){const e=this.game.city.nodeGrid[Math.floor(Math.random()*9)][Math.floor(Math.random()*9)],i=Rs.filter(u=>e.i+u[0]>=0&&e.i+u[0]<9&&e.j+u[1]>=0&&e.j+u[1]<9),n=ve(i),r=j(12,84),a=3.9,o=-n[1],l=n[0],c=e.x+n[0]*r+o*a,h=e.z+n[1]*r+l*a;return{x:c,z:h,heading:Math.atan2(n[0],n[1]),route:{node:e,dir:n,t:r,lane:a}}}spawnParkedCity(){const t=[...this.game.city.parkingSpots].sort(()=>Math.random()-.5).slice(0,18),e=["sedan","suv","sports","van","pickup","sedan","taxi"];for(const r of t)this.spawn(ve(e),r.x,r.z,r.heading,{color:zo(ve(e))});this.startCar=this.spawn("sedan",4,36,Math.PI,{color:2837103,owned:!0,name:"Your Sable"});const i=this.spawn("police",132,44,Math.PI/2,{service:"police",color:15265264}),n=this.spawn("police",132,58,-Math.PI/2,{service:"police"});this.policeUnits=[i,n],this.ambulance=this.spawn("ambulance",168,166,Math.PI/2,{service:"ambulance"}),this.fireEngine=this.spawn("fire",-150,-30,Math.PI/2,{service:"fire"}),this.helipadHeli=this.spawn("helicopter",this.game.city.helipad.x,this.game.city.helipad.z,0,{y:this.game.city.helipad.y+1.7}),this.helipadHeli.altitude=this.helipadHeli.pos.y,this.boats=[this.spawn("boat",300,500,Math.PI,{y:.25}),this.spawn("boat",322,510,Math.PI*.9,{y:.25,color:12270132}),this.spawn("boat",345,530,Math.PI,{y:.25,color:3108495})],this.supercars=[this.spawn("super",30,158,Math.PI/2,{color:14992458}),this.spawn("super",36,166,Math.PI/2,{color:1842210}),this.spawn("sports",24,170,Math.PI/2,{color:11678772})],this.bus=this.spawn("bus",96,340,0,{color:2912136}),this.construction=this.spawn("construction",-300,-300,Math.PI/2,{color:14066975})}findNearest(t,e,i=5,n=null){let r=null,a=i;for(const o of this.vehicles){if(o.isPlayer||n&&!n(o))continue;const l=Math.hypot(o.pos.x-t,o.pos.z-e);l<a&&(a=l,r=o)}return r?{vehicle:r,dist:a}:null}startDriving(t){this.playerVehicle=t,t.mode="player",t.isPlayer=!0,t.traffic=null,t.parkedName=t.parkedName||t.cfg.name,t.engineOn=!0,this.game.audio?.startEngine(t)}stopDriving(t){t&&(t.mode="parked",t.isPlayer=!1,t.throttle=0,t.brakeInput=0,t.steer=0,t.indicator=0,this.playerVehicle=null,this.game.audio?.stopEngine())}update(t,e,i,n){const r=this.playerVehicle;r&&r.velocity&&r.updatePlayer(t,this.game.controls.vehicle,n,e,i);for(const a of this.vehicles)if(a!==r){if(a.mode==="traffic")a.updateTraffic(t,e,i,n);else if(a.health<55&&this.game.effects.smokeAtVehicle(a,t*.5),a.serviceLights){const o=Math.floor(e*5)%2===0;a.serviceLights.redM.color.setHex(o?16719904:2622982),a.serviceLights.blueM.color.setHex(o?723760:2776063),a.serviceLights.light.intensity=o?2.4:1.8}}r&&this.handleTrafficCollisions(r)}handleTrafficCollisions(t){Math.sin(t.heading),Math.cos(t.heading);for(const e of this.vehicles){if(e===t||e.mode!=="traffic")continue;const i=e.pos.x-t.pos.x,n=e.pos.z-t.pos.z,r=Math.hypot(i,n),a=(e.cfg.len+t.cfg.len)*.38;if(r<a&&r>.01){const o=i/r,l=n/r,c=Math.abs(t.speed);e.knock.set(o*(2+c*.35),l*(2+c*.35)),e.knockTimer=.8,e.pos.x+=o*(a-r)*.8,e.pos.z+=l*(a-r)*.8,t.speed>4&&(t.velocity.multiplyScalar(.82),this.game.effects.sparksAt(e.pos.x,e.pos.y+.8,e.pos.z,14),e.health=Gt(e.health-Math.min(30,c*.8),0,100),this.game.audio?.crash(c),this.game.camShake=Math.max(this.game.camShake,Math.min(.8,c/35)),this.game.onTrafficCollision?.(t,e))}}}nearestService(t,e,i){let n=null,r=1/0;for(const a of this.vehicles){if(a.service!==t)continue;const o=Math.hypot(a.pos.x-e,a.pos.z-i);o<r&&(r=o,n=a)}return n}}const rv=[12618339,9198652,14725772,7029296,11039311,14262394,6043686],av=[2832973,7023925,3426874,5326428,2303532,9202493,11055285,4087680,8011346,5068103],ov=[2239027,2895670,3881792,4866358,2237996,5922144,1777702],lv=[1971729,3877405,6965804,10123850,1381653,7829367];class cv{constructor(t){this.game=t,this.count=140,this.peds=[],this.parts={},this.dummy=new Ee,this.local=new Ee,this.mat4=new _e,this.initMeshes(),this.spawn(),this.scanTimer=0}initMeshes(){const t=this.count,e={torso:new N(.42,.64,.26),head:new Ne(.172,10,8),legL:new N(.15,.72,.18),legR:new N(.15,.72,.18),armL:new N(.13,.62,.15),armR:new N(.13,.62,.15),hair:new Ne(.177,8,6,0,ae,0,Math.PI*.55)};new z({vertexColors:!1,roughness:.85}),this.meshMats={torso:new z({roughness:.85}),head:new z({roughness:.7}),leg:new z({roughness:.9}),arm:new z({roughness:.85}),hair:new z({roughness:.93})};for(const i of Object.keys(e)){const n=new Oe(e[i],this.meshMats[i==="head"||i==="hair"?"head":i.startsWith("leg")?"leg":i.startsWith("arm")?"arm":i==="hair"?"hair":"torso"],t);n.instanceMatrix.setUsage(zu),n.castShadow=i!=="hair",n.frustumCulled=!1,this.game.scene.add(n),this.parts[i]=n}for(const i of[]);for(const i of Object.values(this.parts)){for(let n=0;n<t;n++)i.setColorAt(n,new Wt(16777215));i.instanceColor.needsUpdate=!0}}colorFor(t){new Wt;for(let e=0;e<this.count;e++){const i=this.peds[e];i&&(this.parts.torso.setColorAt(e,new Wt(i.colors.jacket)),this.parts.armL.setColorAt(e,new Wt(i.colors.jacket)),this.parts.armR.setColorAt(e,new Wt(i.colors.jacket)),this.parts.head.setColorAt(e,new Wt(i.colors.skin)),this.parts.hair.setColorAt(e,new Wt(i.colors.hair)),this.parts.legL.setColorAt(e,new Wt(i.colors.pants)),this.parts.legR.setColorAt(e,new Wt(i.colors.pants)))}for(const e of Object.values(this.parts))e.instanceColor.needsUpdate=!0}spawn(){this.game.city;for(let t=0;t<this.count;t++){let e;t<22?e=this.makeCrosser(t):t<34?e=this.makeIdler(t):e=this.makeWalker(t),e.index=t,e.colors={jacket:ve(av),pants:ve(ov),skin:ve(rv),hair:ve(lv)},e.scale=j(.9,1.06),e.phase=j(0,ae),e.speed=j(.85,1.5),e.idleTimer=j(0,3),e.state=e.type==="idler"?"idle":"walk",e.fleeTimer=0,e.downTimer=0,e.talkTimer=0,e.pos=new D(e.x,.18,e.z),e.heading=j(0,ae),this.peds.push(e)}this.colorFor()}randomSidewalkPoint(){const t=Math.random()>.5,e=Math.floor(Math.random()*We),i=Math.random()>.5?1:-1,n=1+Math.floor(Math.random()*6),r=(Math.random()>.5,9.3);if(t){const l=re(e)-i*r,c=re(n)+j(4,60);return{x:l,z:c,axis:"z",line:e,dir:i,i:e,j:n,t:j(4,60)}}const a=re(e)+i*r;return{x:re(n)+j(4,60),z:a,axis:"x",line:e,dir:i,i:n,j:e,t:j(4,60)}}makeWalker(t){const e=this.randomSidewalkPoint();return{type:"walker",x:e.x,z:e.z,axis:e.axis,dir:e.dir,line:e.line,ni:e.i,nj:e.j,t:e.t,wait:0,crossing:!1}}makeCrosser(t){const e=Math.random()>.5,i=1+Math.floor(Math.random()*7),n=1+Math.floor(Math.random()*7),r=Math.random()>.5?1:-1,a=e?"x":"z",o=e?re(n)+r*9.3:re(i)+j(-3,3),l=e?re(i)+10.4:re(n)+r*9.3,c=e?re(n)-r*9.3:o,h=e?l:re(n)-r*9.3;return{type:"crosser",x:o,z:l,axis:a,line:i,dir:r,ni:n,nj:i,startX:o,startZ:l,endX:c,endZ:h,t:0,wait:j(0,4),crossing:!1,side:r,originNode:n,originLine:i,crossVertical:e}}makeIdler(t){const e={x:-24,z:-24},i=j(0,ae),n=j(4,28);return{type:"idler",x:e.x+Math.cos(i)*n,z:e.z+Math.sin(i)*n,axis:"z",line:4,dir:1,ni:4,nj:4,t:0,wait:j(2,12),home:!0}}nextWalkerTarget(t){const e=[];for(const r of[[1,0],[-1,0],[0,1],[0,-1]]){if(r[0]===-t.dir&&t.axis==="x"||r[1]===-t.dir&&t.axis==="z")continue;const a=t.ni+r[0],o=t.nj+r[1];a<0||a>We-1||o<0||o>We-1||e.push(r)}if(!e.length){t.dir=-t.dir;return}const i=e.find(r=>t.axis==="x"?r[0]===t.dir:r[1]===t.dir);let n;i&&Math.random()<.68?n=i:n=ve(e),n[0]!==0?(t.axis="x",t.dir=n[0],t.ni=t.ni+n[0]):(t.axis="z",t.dir=n[1],t.nj=t.nj+n[1]),t.t=0,t.wait=Math.random()<.2?j(1,4):0,t.line=t.axis==="z"?t.ni:t.nj}targetPoint(t){if(t.axis==="z"){const r=re(t.ni)-t.dir*9.3,a=re(t.nj)+t.dir*t.t;return{x:r,z:a}}const i=re(t.nj)+t.dir*9.3;return{x:re(t.ni)+t.dir*t.t,z:i}}update(t,e,i){const n=i.pos.x,r=i.pos.z;i.vehicle;for(const a of this.peds){if(a.x-n,a.z-r,a.state==="down"){a.downTimer-=t,a.downTimer<=0&&(a.state="walk",a.x+=j(-1,1),a.z+=j(-1,1)),this.writePed(a,e,t,!0);continue}if(a.fleeTimer>0){a.fleeTimer-=t,a.x+=Math.sin(a.heading)*5.2*t,a.z+=Math.cos(a.heading)*5.2*t,a.state="flee",a.phase+=t*16,this.writePed(a,e,t);continue}const o=this.game.vehicles?.playerVehicle;if(o&&Math.hypot(o.pos.x-a.x,o.pos.z-a.z)<9&&Math.abs(o.speed)>4.5){a.heading=Math.atan2(a.x-o.pos.x,a.z-o.pos.z),a.fleeTimer=j(1.2,2.4),Math.random()<.2&&this.game.notify?.("Pedestrians scatter from the road","warn");continue}if(a.type==="crosser")this.updateCrosser(a,t,e);else if(a.type==="idler"){if(a.wait-=t,a.wait<=0)if(a.wait=j(2,7),Math.random()<.45&&a.home){const l={x:-24,z:-24},c=j(0,ae),h=j(4,28);a.tx=l.x+Math.cos(c)*h,a.tz=l.z+Math.sin(c)*h,a.state="walk"}else a.state="idle";if(a.state==="walk"&&a.tx!==void 0)if(Math.hypot(a.tx-a.x,a.tz-a.z)>.4){const c=Math.atan2(a.tx-a.x,a.tz-a.z);a.heading=es(a.heading,c,t*5),a.x+=Math.sin(a.heading)*1.1*t,a.z+=Math.cos(a.heading)*1.1*t,a.phase+=t*6}else a.state="idle",a.wait=j(2,8)}else this.updateWalker(a,t);if(a.wait>0){a.wait-=t,a.phase=ge(a.phase,0,t),Math.random()<.002&&(a.heading+=j(-.5,.5)),this.writePed(a,e,t);continue}a.state==="walk"||a.state==="flee"?(a.phase+=t*(a.type==="crosser"?8:7)*(a.fleeTimer>0?1.6:1),a.x+=Math.sin(a.heading)*a.speed*t,a.z+=Math.cos(a.heading)*a.speed*t):a.state==="idle"&&(a.phase+=t*.8),this.writePed(a,e,t)}this.scanTimer-=t,this.scanTimer<=0&&(this.scanTimer=.18,this.checkVehicleHits())}updateWalker(t,e){const i=this.targetPoint(t),n=i.x-t.x,r=i.z-t.z;t.heading=es(t.heading,Math.atan2(n,r),e*4.5),t.state="walk",t.t+=t.speed*e*.72,t.t>96&&(t.t=0,this.nextWalkerTarget(t))}updateCrosser(t,e,i){if(t.crossing){const n=t.endX-t.x,r=t.endZ-t.z,a=Math.hypot(n,r);if(t.heading=es(t.heading,Math.atan2(n,r),e*7),t.state="walk",t.x+=Math.sin(t.heading)*1.65*e,t.z+=Math.cos(t.heading)*1.65*e,a<.5){t.crossing=!1,t.wait=j(2.5,7);const o=t.startX,l=t.startZ;t.startX=t.endX,t.startZ=t.endZ,t.endX=o,t.endZ=l}}else{if(t.wait-=e,t.wait>0)return;const n=this.game.city.nodeGrid?.[t.originNode]?.[t.originLine],r=t.crossVertical?"z":"x";if((n?this.game.city.signalState(n,r,i):"green")!=="green"){t.wait=.45;return}let o=!1;const l=this.game.vehicles?.vehicles||[];for(const c of l){if(c.disposed||!c.pos)continue;const h=c.pos.x-t.x,u=c.pos.z-t.z;if(Math.hypot(h,u)<16&&Math.abs(c.speed)>3.5){const f=Math.sin(c.heading||0),p=Math.cos(c.heading||0);if((t.x-c.pos.x)*f+(t.z-c.pos.z)*p>0){o=!0;break}}}if(o){t.wait=.35;return}t.crossing=!0}}writePed(t,e,i,n=!1){const r=t.index;this.dummy.position.set(t.x,.18,t.z),this.dummy.rotation.set(0,t.heading,0),n&&(this.dummy.rotation.z=Math.PI/2,this.dummy.position.y=.3),this.dummy.updateMatrix();const l=-(Math.sin(t.phase)*.55)*.75,c=t.scale,h=this.parts,u=this.local,d=this.mat4,f=(p,x,m,g,_=0,y=0,M=0,w=c,b=c,v=c)=>{u.position.set(x,m,g),u.rotation.set(_,y,M),u.scale.set(w,b,v),u.updateMatrix(),d.multiplyMatrices(this.dummy.matrix,u.matrix),p.setMatrixAt(r,d)};n?(f(h.torso,0,1.1,0),f(h.head,0,1.6,0),f(h.hair,0,1.62,0),f(h.armL,-.3,1.32,0,.3),f(h.armR,.3,1.32,0,-.3),f(h.legL,-.12,.52,.1),f(h.legR,.12,.52,-.1)):(t.state==="idle"&&t.type==="idler"&&t.wait>0&&Math.random()<0,f(h.torso,0,1.18*c,0),f(h.head,0,1.66*c,0),f(h.hair,0,1.674*c,-.005),f(h.legL,-.12*c,.44*c,Math.sin(t.phase)*.24*c,Math.sin(t.phase)*.5),f(h.legR,.12*c,.44*c,-Math.sin(t.phase)*.24*c,-Math.sin(t.phase)*.5),f(h.armL,-.3*c,1.28*c,-Math.sin(t.phase)*.2*c,l),f(h.armR,.3*c,1.28*c,Math.sin(t.phase)*.2*c,-l));for(const p of Object.values(h))p.instanceMatrix.needsUpdate=!0}checkVehicleHits(){const t=this.game.vehicles?.playerVehicle;if(!t||Math.abs(t.speed)<2)return;const e=t.cfg.len,i={x:Math.sin(t.heading),z:Math.cos(t.heading)};for(const n of this.peds){if(n.state==="down")continue;const r=n.x-t.pos.x,a=n.z-t.pos.z,o=r*i.x+a*i.z,l=Math.abs(r*i.z-a*i.x);Math.abs(o)<e*.55&&l<t.cfg.wid*.55&&(n.state="down",n.downTimer=j(5,8),n.heading=t.heading+j(-1,1),this.game.onPedHit?.(n,t))}}anyInFront(t,e,i,n){const r=Math.sin(i),a=Math.cos(i);for(const o of this.peds){if(o.state==="down")continue;const l=o.x-t,c=o.z-e;if(Math.abs(l)>n||Math.abs(c)>n)continue;const h=Math.hypot(l,c);if(h<n&&(l*r+c*a)/Math.max(h,.001)>.55)return o}return null}nearest(t,e,i=3){let n=null,r=i;for(const a of this.peds){if(a.state==="down")continue;const o=Math.hypot(a.x-t,a.z-e);o<r&&(r=o,n=a)}return n}panic(t,e,i=25){for(const n of this.peds)Math.hypot(n.x-t,n.z-e)<i&&(n.fleeTimer=j(2,4),n.heading=Math.atan2(n.x-t,n.z-e))}gather(t,e,i=18){for(const n of this.peds)if(this.peds.indexOf(n)%5===0&&Math.hypot(n.x-t,n.z-e)<i){const r=j(0,ae),a=j(4,12);n.tx=t+Math.cos(r)*a,n.tz=e+Math.sin(r)*a,n.state="walk",n.wait=0,n.heading=Math.atan2(n.tx-n.x,n.tz-n.z)}}}const It=s=>document.getElementById(s),Tr={en:{startGame:"Start Game",newLife:"New life in Nova City",continue:"Continue",settings:"Settings",settingsCaption:"Video · audio · controls",chooseControls:"Choose how to play",pcMode:"PC mode",pcModeDesc:"Keyboard and mouse",phoneMode:"Phone mode",phoneModeDesc:"Touch controls",language:"Language",liveSimulation:"LIVE SIMULATION",menuKicker:"AN OPEN-WORLD LIFE SIMULATOR",menuTitle:"Your city.",menuTitleAccent:"Every life in it.",menuCopy:"A living metropolis of towers, traffic, weather and consequence. Walk it, drive it, fly it, or just watch the city breathe.",districts:"districts",vehicles:"vehicles",citizens:"citizens",liveSystems:"live systems",pcControls:"WASD move · Mouse look · E interact · Tab phone · M map · Esc pause",buildInfo:"WebGL · Procedural build",move:"Move",sprint:"Sprint",jump:"Jump",interact:"Interact",phone:"Phone",graphics:"Graphics quality",shadows:"Shadows",volume:"Master volume",invert:"Invert camera Y",timeOfDay:"Time of day",cameraFov:"Camera FOV",resetSave:"Reset save data",clearSave:"Clear save",applyClose:"Apply & Close",backCity:"Back to Nova City",system:"SYSTEM"},ru:{startGame:"Начать игру",newLife:"Новая жизнь в Нова-Сити",continue:"Продолжить",settings:"Настройки",settingsCaption:"Графика · звук · управление",chooseControls:"Выберите управление",pcMode:"Режим ПК",pcModeDesc:"Клавиатура и мышь",phoneMode:"Режим телефона",phoneModeDesc:"Сенсорное управление",language:"Язык",liveSimulation:"ЖИВАЯ СИМУЛЯЦИЯ",menuKicker:"СИМУЛЯТОР ЖИЗНИ В ОТКРЫТОМ МИРЕ",menuTitle:"Твой город.",menuTitleAccent:"Твоя история.",menuCopy:"Живой мегаполис с небоскрёбами, движением, погодой и последствиями. Гуляй, води, летай или наблюдай за городом.",districts:"районов",vehicles:"машин",citizens:"жителей",liveSystems:"систем",pcControls:"WASD движение · Мышь обзор · E действие · Tab телефон · M карта · Esc пауза",buildInfo:"WebGL · Процедурный мир",move:"Идти",sprint:"Бег",jump:"Прыжок",interact:"Действие",phone:"Телефон",graphics:"Качество графики",shadows:"Тени",volume:"Общая громкость",invert:"Обратить ось камеры Y",timeOfDay:"Время суток",cameraFov:"Поле зрения",resetSave:"Сбросить сохранение",clearSave:"Очистить",applyClose:"Применить и закрыть",backCity:"Вернуться в Нова-Сити",system:"СИСТЕМА"},zh:{startGame:"开始游戏",newLife:"在新星城开启新生活",continue:"继续游戏",settings:"设置",settingsCaption:"画面 · 音频 · 控制",chooseControls:"选择操作方式",pcMode:"电脑模式",pcModeDesc:"键盘和鼠标",phoneMode:"手机模式",phoneModeDesc:"触屏操作",language:"语言",liveSimulation:"城市实时模拟",menuKicker:"开放世界生活模拟器",menuTitle:"你的城市。",menuTitleAccent:"你的每一种人生。",menuCopy:"充满高楼、车流、天气与机遇的鲜活都市。步行、驾驶、飞行，或静静感受城市脉搏。",districts:"个城区",vehicles:"辆车辆",citizens:"位市民",liveSystems:"项动态系统",pcControls:"WASD 移动 · 鼠标视角 · E 互动 · Tab 手机 · M 地图 · Esc 暂停",buildInfo:"WebGL · 程序生成城市",move:"移动",sprint:"冲刺",jump:"跳跃",interact:"互动",phone:"手机",graphics:"画面质量",shadows:"阴影",volume:"主音量",invert:"反转镜头 Y 轴",timeOfDay:"时间",cameraFov:"视野范围",resetSave:"重置存档",clearSave:"清除存档",applyClose:"应用并关闭",backCity:"返回新星城",system:"系统"}},Vc={downtown:"#26333f",midtown:"#34373a",industrial:"#3a3b36",suburb:"#2f3c2f",waterfront:"#2f4048",residential:"#333a3a",park:"#243d29",airport:"#39382f"};class hv{constructor(t){this.game=t,this.el={loading:It("loading"),menu:It("menu"),hud:It("hud"),overlayRoot:It("overlay-root"),notifications:It("notifications"),prompt:It("prompt"),promptText:It("prompt-text"),vehicleHud:It("vehicle-hud"),speed:It("speed"),dial:It("dial-fill"),vehName:It("veh-name"),fuelBar:It("fuel-bar"),hullBar:It("hull-bar"),money:It("money"),wantedStars:It("wanted-stars"),wantedChip:It("wanted-chip"),clock:It("clock"),weather:It("weather-label"),temp:It("temp-label"),daybar:It("daybar"),district:It("district-label"),objective:It("objective"),objTitle:It("obj-title"),objSub:It("obj-sub"),objDist:It("obj-dist"),minimap:It("minimap"),fullmap:It("fullmap"),mapPos:It("map-pos"),fade:It("fade"),toast:It("toast"),phoneTime:It("phone-time"),phoneCash:It("phone-cash"),phoneWelcome:It("phone-welcome"),phonePulse:It("phone-pulse"),jobsList:It("jobs-list"),garageList:It("garage-list"),shopList:It("shop-list"),settingsList:It("settings-list"),phoneActions:It("phone-actions"),modal:It("modal-inner"),damageFlash:It("damage-flash"),weatherFx:It("weather-fx"),controlsHint:It("controls-hint")},this.notifications=[],this.overlay=null,this.mapCache=null,this.mapOpen=!1,this.wantedStars=["☆☆☆☆☆","★☆☆☆☆","★★☆☆☆","★★★☆☆","★★★★☆","★★★★★"],this.transit=null,this.gps=null,this.binding(),this.updateSettingsUI()}binding(){const t=this.game;It("btn-start").addEventListener("click",()=>{It("mode-picker").classList.toggle("hidden")}),document.querySelectorAll("[data-start-mode]").forEach(i=>{i.addEventListener("click",()=>{t.settings.mode=i.dataset.startMode,t.saveSettings(),t.startNewGame()})}),It("btn-continue").addEventListener("click",()=>t.continueGame()),It("btn-settings-menu").addEventListener("click",()=>this.openSettings()),It("btn-resume").addEventListener("click",()=>this.closeOverlay()),It("btn-pause-save").addEventListener("click",()=>{t.saveGame(),this.toast("Game saved to this browser")}),It("btn-pause-settings").addEventListener("click",()=>this.openSettings()),It("btn-pause-restart").addEventListener("click",()=>t.startNewGame()),It("btn-pause-menu").addEventListener("click",()=>t.returnToMenu()),document.querySelectorAll("[data-overlay]").forEach(i=>{i.addEventListener("click",()=>this.openOverlay(i.dataset.overlay))}),document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>this.closeOverlay())),document.querySelectorAll(".phone-apps button").forEach(i=>{i.addEventListener("click",()=>this.switchPhoneTab(i.dataset.phoneTab))}),this.el.fullmap.addEventListener("click",i=>{const n=this.el.fullmap.getBoundingClientRect(),r=(i.clientX-n.left)/n.width*1400,a=(i.clientY-n.top)/n.height*1e3,o=(r-700)/1,l=(a-500)/1;this.gps={x:Gt(o,-650,700),z:Gt(l,-650,500)},t.gps=this.gps,this.drawFullMap(),this.toast("GPS waypoint set"),t.audio?.click()});const e=It("language-select");e&&(e.value=t.settings.language||"en",e.addEventListener("change",()=>{t.settings.language=e.value,this.applyLanguage(),t.saveSettings(),this.overlay==="settings"&&this.buildSettings(It("modal-settings")||It("settings-list"))})),this.bindTouchControls(),this.applyLanguage(),this.applyPlayMode(),document.addEventListener("keydown",i=>{i.key==="Escape"&&(this.overlay?(i.preventDefault(),this.closeOverlay()):this.game.mode!=="menu"&&(i.preventDefault(),this.game.togglePause()))})}applyPlayMode(){const t=this.game.settings.mode==="phone"?"phone":"pc";document.body.classList.toggle("mode-phone",t==="phone"),document.body.classList.toggle("mode-pc",t==="pc")}applyLanguage(){const t=Tr[this.game.settings.language]?this.game.settings.language:"en";this.game.settings.language=t,document.documentElement.lang=t;const e=Tr[t];document.querySelectorAll("[data-i18n]").forEach(n=>{const r=n.dataset.i18n;e[r]&&(n.textContent=e[r])});const i=It("language-select");i&&(i.value=t)}bindTouchControls(){const t=It("touch-stick"),e=It("touch-stick-thumb");if(!t)return;const i=r=>{const a=t.getBoundingClientRect(),o=r.touches?.[0]||r;let l=(o.clientX-(a.left+a.width/2))/(a.width/2),c=(o.clientY-(a.top+a.height/2))/(a.height/2);const h=Math.hypot(l,c);h>1&&(l/=h,c/=h),this.game.touch.x=l,this.game.touch.y=c,e&&(e.style.transform=`translate(${l*28}px, ${c*28}px)`)},n=()=>{this.game.touch.x=0,this.game.touch.y=0,this.game.touch.sprint=!1,e&&(e.style.transform="")};t.addEventListener("pointerdown",r=>{t.setPointerCapture?.(r.pointerId),i(r)}),t.addEventListener("pointermove",r=>{(r.buttons||r.pointerType==="touch")&&i(r)}),t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("lostpointercapture",n),document.querySelectorAll("[data-touch-action]").forEach(r=>{const a=r.dataset.touchAction,o=c=>{c.preventDefault(),a==="map"?this.game.toggleOverlay("map"):a==="phone"?this.game.toggleOverlay("phone"):a==="interact"?this.game.interact():a==="exit"?this.game.exitVehicle():a==="jump"?this.game.touch.jump=!0:a==="sprint"?this.game.touch.sprint=!0:a==="throttle"?(this.game.touch.brake=!1,this.game.touch.throttle=!0):a==="brake"&&(this.game.touch.throttle=!1,this.game.touch.brake=!0)},l=c=>{c.preventDefault(),a==="jump"&&(this.game.touch.jump=!1),a==="sprint"&&(this.game.touch.sprint=!1),a==="throttle"&&(this.game.touch.throttle=!1),a==="brake"&&(this.game.touch.brake=!1)};r.addEventListener("pointerdown",o),r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l),r.addEventListener("lostpointercapture",l),r.addEventListener("pointerleave",c=>{c.buttons&&l(c)})})}hideLoading(){this.el.loading.classList.add("out"),setTimeout(()=>this.el.loading.classList.add("hidden"),900)}showMenu(){document.body.classList.remove("game-playing","ui-overlay-open"),this.el.menu.classList.remove("hidden"),requestAnimationFrame(()=>this.el.menu.classList.add("on")),this.el.hud.classList.add("hidden"),this.el.overlayRoot.classList.add("hidden");const t=localStorage.getItem("novacity-save-v1"),e=It("btn-continue");e.disabled=!t,It("continue-meta").textContent=t?"Return to your saved life":"No saved city yet",this.el.menu.querySelectorAll(".menu-stats b")[0].textContent="9"}hideMenu(){this.applyPlayMode(),document.body.classList.add("game-playing"),this.el.menu.classList.remove("on"),setTimeout(()=>this.el.menu.classList.add("hidden"),700),this.el.hud.classList.remove("hidden")}showHUD(){this.el.hud.classList.remove("hidden")}notify(t,e=""){this.notifications.length>5&&this.notifications.shift();const i=document.createElement("div");for(i.className="notification "+e,i.textContent=t,this.el.notifications.appendChild(i),this.notifications.push(i);this.el.notifications.children.length>6;)this.el.notifications.firstChild.remove();setTimeout(()=>{i.style.transition="opacity .4s, transform .4s",i.style.opacity="0",i.style.transform="translateX(-10px)",setTimeout(()=>i.remove(),450)},5200);const n=this.notifications.indexOf(i);n>=0&&this.notifications.splice(n,1)}toast(t){this.el.toast.textContent=t,this.el.toast.classList.remove("hidden"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.el.toast.classList.add("hidden"),1800)}setPrompt(t){if(!t){this.el.prompt.classList.add("hidden");return}this.el.promptText.textContent=t,this.el.prompt.classList.remove("hidden")}updateMoney(){this.el.money.textContent=Math.round(this.game.money).toLocaleString("en-US"),this.el.phoneCash.textContent=bi(this.game.money)}updateWanted(){const t=this.game.wanted?.level||0;this.el.wantedStars.textContent=this.wantedStars[t],this.el.wantedChip.classList.toggle("alert",t>0),this.el.wantedChip.classList.toggle("dim",t===0)}updateHUD(t){const e=this.game;if(!e.player)return;const i=e.hour;this.el.clock.textContent=Da(i),this.el.phoneTime.textContent=Da(i),this.el.weather.textContent={clear:"Clear",rain:"Rain",storm:"Thunderstorm",snow:"Snow",fog:"Fog"}[e.weather]||"Clear",this.el.temp.textContent=`${Math.round(e.temperature)}°C`,this.el.daybar.style.width=`${(i/24*100).toFixed(0)}%`,this.el.district.textContent=e.city.districtAt(e.player.pos.x,e.player.pos.z).toUpperCase();const n=!!e.vehicles.playerVehicle;if(document.body.classList.toggle("phone-driving",n),e.vehicles.playerVehicle){const r=e.vehicles.playerVehicle;this.el.vehicleHud.classList.remove("hidden"),this.el.speed.textContent=Math.round(r.speedKmh);const a=Gt(Math.abs(r.speed)/r.cfg.maxSpeed,0,1);this.el.dial.style.strokeDashoffset=String(283-283*a*.97),this.el.dial.style.stroke=a>.82?"#ffb457":"#5be0ff",this.el.vehName.textContent=r.cfg.klass+" · "+(r.engineOn?"RUNNING":"OFF"),this.el.fuelBar.style.width=`${Gt(r.fuel/r.cfg.fuel*100,0,100)}%`,this.el.hullBar.style.width=`${r.health}%`,this.el.fuelBar.classList.toggle("low",r.fuel/r.cfg.fuel<.18),this.el.hullBar.classList.toggle("low",r.health<30),this.el.controlsHint.classList.add("hidden"),this.transit||this.el.vehicleHud.classList.remove("hidden")}else this.el.vehicleHud.classList.add("hidden"),this.el.controlsHint.classList.remove("hidden");e.player.firstPerson&&!e.vehicles.playerVehicle?this.el.controlsHint.classList.add("hidden"):e.vehicles.playerVehicle||this.el.controlsHint.classList.remove("hidden"),this.drawMinimap(t),this.overlay==="map"&&this.mapOpen}drawMinimap(t){const e=this.el.minimap;if(!e)return;const i=e.getContext("2d"),n=this.game,r=n.player,a=e.width,o=e.height,l=2.15;i.clearRect(0,0,a,o),i.save(),i.translate(a/2,o/2),i.fillStyle="#111922",i.fillRect(-a/2,-o/2,a,o);const c=(p,x)=>[(p-r.pos.x)*l,(x-r.pos.z)*l],[h,u]=c(0,490);u<o/2&&(i.fillStyle="#0e3547",i.fillRect(-a/2,u,a,o/2-u));for(const p of n.city.blocks){const[x,m]=c(p.x,p.z);if(Math.abs(x)>a/2+60||Math.abs(m)>o/2+60)continue;const g=68*l;i.fillStyle=Vc[p.district]||"#2c3238",i.fillRect(x-g/2,m-g/2,g,g),p.isPark&&(i.fillStyle="#2f5034",i.fillRect(x-g/2,m-g/2,g,g))}i.strokeStyle="rgba(140,160,175,.32)",i.lineWidth=8*l*.45;for(let p=0;p<9;p++){const x=c(re(p),-Be),m=c(re(p),Be);i.beginPath(),i.moveTo(x[0],x[1]),i.lineTo(m[0],m[1]),i.stroke();const g=c(-Be,re(p)),_=c(Be,re(p));i.beginPath(),i.moveTo(g[0],g[1]),i.lineTo(_[0],_[1]),i.stroke()}const d=n.city.pois.filter(p=>Math.hypot(p.x-r.pos.x,p.z-r.pos.z)<140);for(const p of d){const[x,m]=c(p.x,p.z);i.fillStyle=this.poiColor(p.type),i.beginPath(),i.arc(x,m,4.2,0,Math.PI*2),i.fill()}for(const p of n.events?.mapMarkers()||[]){const[x,m]=c(p.x,p.z);Math.abs(x)>a/2||Math.abs(m)>o/2||(i.fillStyle=p.type==="fire"?"#ff5b2a":"#ffb457",i.beginPath(),i.arc(x,m,5,0,Math.PI*2),i.fill())}if(n.jobs.current){const p=n.jobs.current.stage==="pickup"?n.jobs.current.pickup:n.jobs.current.dropoff,[x,m]=c(p.x,p.z);i.fillStyle="#ffb457",i.beginPath(),i.arc(x,m,5.5,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(255,180,87,.5)",i.lineWidth=2,i.beginPath(),i.arc(x,m,10,0,Math.PI*2),i.stroke()}if(this.gps){const[p,x]=c(this.gps.x,this.gps.z);i.strokeStyle="#5be0ff",i.lineWidth=2,i.setLineDash([4,4]),i.beginPath(),i.moveTo(0,0),i.lineTo(p,x),i.stroke(),i.setLineDash([]),i.fillStyle="#5be0ff",i.beginPath(),i.arc(p,x,4,0,Math.PI*2),i.fill()}if(n.vehicles)for(const p of n.vehicles.vehicles){const[x,m]=c(p.pos.x,p.pos.z);Math.abs(x)>a/2||Math.abs(m)>o/2||p!==n.vehicles.playerVehicle&&(i.fillStyle=p.service?p.service==="police"?"#5b8fff":p.service==="fire"?"#ff5b5b":"#ffffff":"rgba(200,220,240,.42)",i.fillRect(x-2,m-2,4,4))}i.save(),i.rotate(-n.player.heading+Math.PI),i.fillStyle="#5be0ff",i.shadowColor="#5be0ff",i.shadowBlur=10,i.beginPath(),i.moveTo(0,8),i.lineTo(-5,-6),i.lineTo(0,-3),i.lineTo(5,-6),i.closePath(),i.fill(),i.restore(),i.restore();const f=i.createRadialGradient(a/2,o/2,a*.34,a/2,o/2,a*.5);f.addColorStop(0,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(5,9,15,.72)"),i.fillStyle=f,i.fillRect(0,0,a,o)}poiColor(t){return{police:"#5b8fff",fire:"#ff5b5b",hospital:"#63f0d0",garage:"#ffb457",dealership:"#5be0ff",shop:"#9be36b",apartment:"#e8d28a",metro:"#b18cff",monorail:"#b18cff",train:"#b18cff",park:"#63f0b0",marina:"#5bc8ff",airport:"#d7eaff",hotel:"#ffcf7a",office:"#8fa8c0"}[t]||"#c8d8e8"}buildMapCache(){if(this.mapCache)return;const t=document.createElement("canvas");t.width=1400,t.height=1e3;const e=t.getContext("2d"),i=this.game;e.fillStyle="#0b121b",e.fillRect(0,0,1400,1e3);const n=(a,o)=>[a+700,o+500];e.fillStyle="#0d2c3d",e.fillRect(0,986,1400,200),e.fillStyle="#3b4330",e.fillRect(0,0,1400,1e3);const r=80;for(const a of i.city.blocks){const[o,l]=n(a.x,a.z);e.fillStyle=a.isPark?"#24472c":Vc[a.district]||"#2f353b",e.fillRect(o-r/2,l-r/2,r,r),a.district==="downtown"&&(e.fillStyle="rgba(180,210,235,.09)",e.fillRect(o-20,l-20,40,40))}e.strokeStyle="#4a5259",e.lineWidth=15,e.lineCap="butt";for(let a=0;a<9;a++){let[o,l]=n(re(a),-Be);e.beginPath(),e.moveTo(o,l),e.lineTo(o,l+2*Be),e.stroke();let[c,h]=n(-Be,re(a));e.beginPath(),e.moveTo(c,h),e.lineTo(c+2*Be,h),e.stroke()}e.strokeStyle="rgba(230,230,210,.18)",e.lineWidth=1,e.setLineDash([6,8]);for(let a=0;a<9;a++){let[o,l]=n(re(a),-Be);e.beginPath(),e.moveTo(o,l),e.lineTo(o,l+2*Be),e.stroke();let[c,h]=n(-Be,re(a));e.beginPath(),e.moveTo(c,h),e.lineTo(c+2*Be,h),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(177,140,255,.4)",e.lineWidth=3,e.strokeRect(450,250,500,500),e.strokeStyle="rgba(220,180,90,.5)",e.lineWidth=4,e.beginPath(),e.moveTo(0,54),e.lineTo(1400,54),e.stroke(),e.strokeStyle="#5d5d5d",e.lineWidth=26,e.beginPath(),e.moveTo(1370,340),e.lineTo(1370,660),e.stroke(),e.strokeStyle="rgba(255,255,255,.35)",e.lineWidth=2,e.setLineDash([10,12]),e.beginPath(),e.moveTo(1370,340),e.lineTo(1370,660),e.stroke(),e.setLineDash([]),e.fillStyle="rgba(190,215,240,.28)",e.font="600 11px Inter, sans-serif",e.textAlign="center",e.fillText("DOWNTOWN",700,490),e.fillText("INDUSTRIAL",500,185),e.fillText("PINE HILLS",1080,430),e.fillText("WEST END",250,560),e.fillText("HARBORFRONT",700,905);for(const a of i.city.pois){const[o,l]=n(a.x,a.z);e.fillStyle=this.poiColor(a.type),e.beginPath(),e.arc(o,l,6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(220,238,255,.7)",e.font="500 9px Inter, sans-serif",e.fillText(a.name.toUpperCase(),o,l-10)}this.mapCache=t}drawFullMap(){this.buildMapCache();const e=this.el.fullmap.getContext("2d");e.drawImage(this.mapCache,0,0);const i=this.game,n=(o,l)=>[o+700,l+500];for(const o of i.city.monorail.stations){const[l,c]=n(o.x,o.z);e.strokeStyle="#b18cff",e.lineWidth=3,e.beginPath(),e.arc(l,c,9,0,Math.PI*2),e.stroke(),e.fillStyle="#b18cff",e.font="600 10px Inter, sans-serif",e.textAlign="center",e.fillText("M",l,c+4)}for(const o of i.events.mapMarkers()){const[l,c]=n(o.x,o.z);e.fillStyle=o.type==="fire"?"#ff5b2a":"#ffb457",e.beginPath(),e.arc(l,c,8,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,180,87,.4)",e.lineWidth=2,e.beginPath(),e.arc(l,c,15+Math.sin(performance.now()*.003)*3,0,Math.PI*2),e.stroke()}if(i.jobs.current){const o=i.jobs.current.stage==="pickup"?i.jobs.current.pickup:i.jobs.current.dropoff,[l,c]=n(o.x,o.z);e.fillStyle="#ffb457",e.beginPath(),e.arc(l,c,10,0,Math.PI*2),e.fill(),e.fillStyle="#0a1018",e.font="700 12px Inter",e.textAlign="center",e.fillText("!",l,c+4)}if(this.gps){const[o,l]=n(this.gps.x,this.gps.z);e.strokeStyle="#5be0ff",e.lineWidth=2,e.setLineDash([8,8]);const[c,h]=n(i.player.pos.x,i.player.pos.z);e.beginPath(),e.moveTo(c,h),e.lineTo(o,l),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(o,l,7,0,Math.PI*2),e.fillStyle="#5be0ff",e.fill()}const[r,a]=n(i.player.pos.x,i.player.pos.z);e.save(),e.translate(r,a),e.rotate(-i.player.heading+Math.PI),e.fillStyle="#5be0ff",e.shadowColor="#5be0ff",e.shadowBlur=16,e.beginPath(),e.moveTo(0,14),e.lineTo(-9,-9),e.lineTo(0,-4),e.lineTo(9,-9),e.closePath(),e.fill(),e.restore(),this.el.mapPos.textContent=`${Math.round(i.player.pos.x)}, ${Math.round(i.player.pos.z)} · ${i.city.districtAt(i.player.pos.x,i.player.pos.z)}`}openOverlay(t){if(!t)return;this.overlay=t,document.body.classList.add("ui-overlay-open"),this.el.overlayRoot.classList.remove("hidden"),this.el.overlayRoot.querySelectorAll(".overlay-panel").forEach(i=>i.classList.add("hidden"));const e=this.el.overlayRoot.querySelector(`[data-panel="${t}"]`);e&&e.classList.remove("hidden"),t==="phone"&&this.refreshPhone(),t==="map"&&(this.mapOpen=!0,this.drawFullMap()),t==="pause"&&(this.game.paused=!0),t!=="pause"&&(this.game.paused=!0),this.game.audio?.click(),document.pointerLockElement&&document.exitPointerLock()}closeOverlay(){this.overlay=null,this.mapOpen=!1,document.body.classList.remove("ui-overlay-open"),this.el.overlayRoot.classList.add("hidden"),this.game.paused=!1,this.game.touch.x=0,this.game.touch.y=0,this.game.touch.sprint=!1,this.game.touch.jump=!1,this.game.keys.clear(),this.game.audio?.click()}openSettings(){this.openOverlay("modal"),this.el.overlayRoot.querySelector('[data-panel="phone"]')?.classList.add("hidden"),this.el.overlayRoot.querySelector('[data-panel="modal"]')?.classList.remove("hidden"),this.el.modal.innerHTML=`
      <div class="kicker">SYSTEM</div><h2>Settings</h2>
      <div class="modal-body"><div id="modal-settings" class="settings-list"></div></div>
      <div class="modal-actions"><button id="modal-close-btn" class="btn primary"><span>Apply & Close</span><small>Back to Nova City</small></button></div>`,this.buildSettings(It("modal-settings")),It("modal-close-btn").addEventListener("click",()=>{this.closeOverlay(),this.updateSettingsUI()}),this.overlay="settings"}switchPhoneTab(t){document.querySelectorAll(".phone-apps button").forEach(e=>e.classList.toggle("active",e.dataset.phoneTab===t));for(const e of["home","jobs","garage","shop","settings"])It("phone-"+e).classList.toggle("hidden",e!==t);t==="jobs"&&this.refreshJobs(),t==="garage"&&this.refreshGarage(),t==="shop"&&this.refreshShop(),t==="settings"&&this.buildSettings(It("settings-list")),this.game.audio?.click()}refreshPhone(){const t=this.game;this.updateMoney(),t.jobs.current?this.el.phoneWelcome.textContent=`${t.jobs.current.title} · ${t.jobs.current.stage==="pickup"?"Pick up cargo":"Deliver to destination"}`:this.el.phoneWelcome.textContent="The city is awake. Find work, buy a car, or just drive.";const e=this.el.phonePulse;e.innerHTML=`
      <div><span>Wanted</span><b>${this.wantedStars[t.wanted.level]}</b></div>
      <div><span>Weather</span><b>${t.weather.toUpperCase()}</b></div>
      <div><span>Time</span><b>${Da(t.hour)}</b></div>
      <div><span>Active events</span><b>${t.events.events.filter(n=>n.active).length}</b></div>
      <div><span>Owned vehicles</span><b>${t.ownedVehicles.length}</b></div>`;const i=this.el.phoneActions;i.innerHTML=`
      <button data-phone-action="job">Find work</button>
      <button data-phone-action="garage">Track vehicle</button>
      <button data-phone-action="map">Open city map</button>
      <button data-phone-action="save">Save game</button>`,i.querySelectorAll("[data-phone-action]").forEach(n=>n.addEventListener("click",()=>{const r=n.dataset.phoneAction;r==="map"?this.openOverlay("map"):r==="save"?(t.saveGame(),this.toast("Game saved")):r==="job"?this.switchPhoneTab("jobs"):r==="garage"&&this.switchPhoneTab("garage")})),this.switchPhoneTab("home")}refreshJobs(){const t=this.game,e=t.jobs.offers.map(i=>`
      <div class="list-item">
        <div class="li-top"><b>${i.title}</b><span class="price">${bi(i.pay)}</span></div>
        <p>${i.desc}</p>
        <div class="meta">${i.pickupName} → ${i.dropName}${i.require?" · requires "+i.require[0]:""}</div>
        <div class="li-row"><span class="meta">${t.jobs.current?"Job active":"Available now"}</span>
        <button class="act" data-job="${i.uid}" ${t.jobs.current?"disabled":""}>Accept job</button></div>
      </div>`).join("");this.el.jobsList.innerHTML=e,this.el.jobsList.querySelectorAll("[data-job]").forEach(i=>i.addEventListener("click",()=>{t.jobs.start(i.dataset.job),this.refreshJobs(),this.closeOverlay()}))}refreshGarage(){const t=this.game,e=t.ownedVehicles;let i="";e.length||(i='<div class="list-item"><p>No owned vehicles. Visit Nova Motors to buy one, or find a car in the city.</p></div>');for(const[n,r]of e.entries()){const a=r;i+=`<div class="list-item">
        <div class="li-top"><b>${a.name}</b><span class="price">${bi(a.price)}</span></div>
        <p>${a.klass} · max ${Math.round(a.maxSpeed*3.6)} km/h · ${a.seats} seats</p>
        <div class="li-row"><span class="meta">${a.fuel} L tank</span><button class="act" data-track="${n}">Track & recall</button></div>
      </div>`}this.el.garageList.innerHTML=i,this.el.garageList.querySelectorAll("[data-track]").forEach(n=>n.addEventListener("click",()=>{t.recallVehicle(parseInt(n.dataset.track)),this.closeOverlay()}))}refreshShop(){const t=[{id:"coffee",name:"Coffee",desc:"A small pick-me-up while exploring.",price:6},{id:"sandwich",name:"Deli sandwich",desc:"Restores a little health.",price:12},{id:"medkit",name:"First aid kit",desc:"Restores full health.",price:45},{id:"fuelcan",name:"Fuel can (20 L)",desc:"Refuel your current vehicle.",price:32},{id:"jacket",name:"Nova field jacket",desc:"Change your jacket color.",price:60},{id:"pants",name:"Utility trousers",desc:"Change your trousers.",price:45},{id:"metrocard",name:"Metro pass",desc:"Five metro rides, no fare.",price:25}];this.el.shopList.innerHTML=t.map(e=>`
      <div class="list-item"><div class="li-top"><b>${e.name}</b><span class="price">${bi(e.price)}</span></div>
      <p>${e.desc}</p><div class="li-row"><span class="meta">Convenience store</span><button class="act" data-buy="${e.id}">Buy</button></div></div>`).join(""),this.el.shopList.querySelectorAll("[data-buy]").forEach(e=>e.addEventListener("click",()=>{this.game.buyItem(e.dataset.buy),this.refreshShop()}))}buildSettings(t){if(!t)return;const e=this.game.settings;t.innerHTML=`
      <div class="setting-row"><span>Graphics quality</span><select data-set="quality">
        <option value="low" ${e.quality==="low"?"selected":""}>Low</option>
        <option value="medium" ${e.quality==="medium"?"selected":""}>Medium</option>
        <option value="high" ${e.quality==="high"?"selected":""}>High</option>
      </select></div>
      <div class="setting-row"><span>Shadows</span><select data-set="shadows">
        <option value="on" ${e.shadows?"selected":""}>On</option>
        <option value="off" ${e.shadows?"":"selected"}>Off</option>
      </select></div>
      <div class="setting-row"><span>Master volume</span><input data-set="volume" type="range" min="0" max="100" value="${Math.round(e.volume*100)}"></div>
      <div class="setting-row"><span>Invert camera Y</span><select data-set="invert">
        <option value="no" ${e.invert?"":"selected"}>No</option><option value="yes" ${e.invert?"selected":""}>Yes</option>
      </select></div>
      <div class="setting-row"><span>Time of day</span><select data-set="time">
        <option value="dawn" ${e.time==="dawn"?"selected":""}>Dawn</option>
        <option value="day" ${e.time==="day"?"selected":""}>Day</option>
        <option value="dusk" ${e.time==="dusk"?"selected":""}>Dusk</option>
        <option value="night" ${e.time==="night"?"selected":""}>Night</option>
      </select></div>
      <div class="setting-row"><span>Camera FOV</span><input data-set="fov" type="range" min="55" max="90" value="${e.fov}"></div>
      <div class="setting-row"><span>${Tr[this.game.settings.language]?.language||"Language"}</span><select data-set="language">
        <option value="en" ${e.language==="en"?"selected":""}>English</option>
        <option value="ru" ${e.language==="ru"?"selected":""}>Русский</option>
        <option value="zh" ${e.language==="zh"?"selected":""}>中文</option>
      </select></div>
      <div class="setting-row"><span>${Tr[this.game.settings.language]?.chooseControls||"Play mode"}</span><select data-set="mode">
        <option value="pc" ${e.mode==="pc"?"selected":""}>PC</option>
        <option value="phone" ${e.mode==="phone"?"selected":""}>Phone</option>
      </select></div>
      <div class="setting-row"><span>Reset save data</span><button data-reset="1">Clear save</button></div>`,t.querySelectorAll("[data-set]").forEach(i=>{i.addEventListener("change",()=>{const n=i.dataset.set;n==="quality"&&this.game.setQuality(i.value),n==="shadows"&&(this.game.settings.shadows=i.value==="on"),n==="volume"&&(this.game.settings.volume=parseInt(i.value)/100,this.game.audio?.setVolume(this.game.settings.volume)),n==="invert"&&(this.game.settings.invert=i.value==="yes"),n==="time"&&this.game.setTimeOfDay(i.value),n==="fov"&&(this.game.settings.fov=parseInt(i.value),this.game.camera.fov=parseInt(i.value),this.game.camera.updateProjectionMatrix()),n==="language"&&(this.game.settings.language=i.value,this.applyLanguage()),n==="mode"&&(this.game.settings.mode=i.value==="phone"?"phone":"pc",this.applyPlayMode()),this.game.saveSettings(),n==="language"&&this.buildSettings(t),this.game.audio?.click()}),i.type==="range"&&i.addEventListener("input",()=>{const n=i.dataset.set;n==="volume"&&(this.game.settings.volume=parseInt(i.value)/100,this.game.audio?.setVolume(this.game.settings.volume)),n==="fov"&&(this.game.settings.fov=parseInt(i.value),this.game.camera.fov=parseInt(i.value),this.game.camera.updateProjectionMatrix()),this.game.saveSettings()})}),t.querySelector("[data-reset]")?.addEventListener("click",()=>{localStorage.removeItem("novacity-save-v1"),this.toast("Save data cleared"),this.showMenu(),this.closeOverlay()})}updateSettingsUI(){const t=this.game.settings;this.game.audio?.setVolume(t.volume)}showObjective(){this.el.objective.classList.remove("hidden")}hideObjective(){this.el.objective.classList.add("hidden")}updateObjective(t,e){t&&(this.el.objTitle.textContent=t.stage==="pickup"?t.title:"Deliver to "+t.dropName,this.el.objSub.textContent=t.stage==="pickup"?"Pick up · "+t.pickupName:"Drop off · "+t.dropName,this.el.objDist.textContent=Math.round(e)+" m away · "+bi(t.pay),this.showObjective())}showTransit(t,e,i){if(!this.transit){const n=document.createElement("div");n.className="transit-hud glass",n.innerHTML=`<div class="tr-line" id="tr-line">MONORAIL</div><div class="tr-route" id="tr-route">Aurora Loop</div>
        <div class="tr-main"><b id="tr-speed">0</b><span>km/h</span></div>
        <div class="tr-mode" id="tr-mode">Automatic</div>
        <div class="tr-hint" id="tr-hint">E exit · T manual</div>`,this.el.hud.appendChild(n),this.transit=n,n.style.cssText="position:absolute;left:50%;bottom:26px;transform:translateX(-50%);padding:12px 22px;border-radius:14px;text-align:center;min-width:200px;"}this.transit.classList.remove("hidden"),It("tr-line").textContent=t,It("tr-route").textContent=e,It("tr-mode").textContent=i,i.includes("Manual")?It("tr-hint").textContent="W/S throttle · Space brake · T auto · E exit":It("tr-hint").textContent="E exit at station · T manual control",this.el.vehicleHud.classList.add("hidden")}updateTransitSpeed(t,e){this.transit&&(It("tr-speed").textContent=Math.round(Math.abs(t)*3.6),It("tr-mode").textContent=e)}updateTransitMode(t,e){this.transit&&(It("tr-mode").textContent=t,e&&(It("tr-hint").textContent=e))}hideTransit(){this.transit&&(this.transit.remove(),this.transit=null)}showModal({kicker:t="NOVA CITY",title:e="",body:i="",actions:n=[]}){this.openOverlay("modal"),this.el.modal.innerHTML=`<div class="kicker">${t}</div><h2>${e}</h2><div class="modal-body">${i}</div><div class="modal-actions" id="modal-actions"></div>`;const r=It("modal-actions");for(const a of n){const o=document.createElement("button");o.className="btn "+(a.primary?"primary":"ghost"),o.innerHTML=`<span>${a.label}</span>${a.sub?`<small>${a.sub}</small>`:""}`,o.addEventListener("click",()=>{a.onClick?.()}),r.appendChild(o)}this.overlay="modal"}showBusted(){this.toast("BUSTED — NCPD impounded your vehicle"),this.el.damageFlash.classList.add("on"),setTimeout(()=>this.el.damageFlash.classList.remove("on"),900)}setWeatherFx(t){this.el.weatherFx.className="weather-fx",(t==="rain"||t==="storm")&&this.el.weatherFx.classList.add("rain"),t==="snow"&&this.el.weatherFx.classList.add("snow")}damageFlash(){this.el.damageFlash.classList.add("on"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>this.el.damageFlash.classList.remove("on"),140)}}class Ar{constructor(t,e,i){this.capacity=e,this.parts=[];const n=new Ie;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.alpha=new Float32Array(e),this.size=new Float32Array(e),n.setAttribute("position",new Xe(this.pos,3)),n.setAttribute("aColor",new Xe(this.col,3)),n.setAttribute("aAlpha",new Xe(this.alpha,1)),n.setAttribute("aSize",new Xe(this.size,1));const r=new zi({transparent:!0,depthWrite:!1,blending:i?Ki:Sn,uniforms:{},vertexShader:`
        attribute vec3 aColor; attribute float aAlpha; attribute float aSize;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = aSize * (260.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor; varying float vAlpha;
        void main(){
          vec2 c = gl_PointCoord - .5;
          float d = length(c);
          float a = smoothstep(.5, .08, d) * vAlpha;
          if(a < .01) discard;
          gl_FragColor = vec4(vColor, a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.points=new ts(n,r),this.points.frustumCulled=!1,t.add(this.points);for(let a=0;a<e;a++)this.parts.push({alive:!1,life:0,maxLife:1,x:0,y:-999,z:0,vx:0,vy:0,vz:0,size:1,grow:0,color:new Wt,gravity:0,drag:.98})}spawn(t,e,i,n={}){let r=this.parts.find(a=>!a.alive);return r||(r=this.parts[Math.random()*this.capacity|0]),r.alive=!0,r.x=t,r.y=e,r.z=i,r.vx=n.vx??j(-.6,.6),r.vy=n.vy??j(.6,2.2),r.vz=n.vz??j(-.6,.6),r.life=r.maxLife=n.life??j(.8,2.2),r.size=n.size??j(1,3),r.grow=n.grow??1.2,r.gravity=n.gravity??0,r.drag=n.drag??.97,r.color.set(n.color??12105912),r}update(t){for(let i=0;i<this.capacity;i++){const n=this.parts[i];if(!n.alive){this.alpha[i]=0,this.pos[i*3+1]=-999;continue}if(n.life-=t,n.life<=0){n.alive=!1,this.alpha[i]=0,this.pos[i*3+1]=-999;continue}n.vy-=n.gravity*t,n.vx*=Math.pow(n.drag,t*60),n.vz*=Math.pow(n.drag,t*60),n.vy*=Math.pow(n.drag,t*60),n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.size+=n.grow*t,this.pos[i*3]=n.x,this.pos[i*3+1]=n.y,this.pos[i*3+2]=n.z,this.col[i*3]=n.color.r,this.col[i*3+1]=n.color.g,this.col[i*3+2]=n.color.b,this.alpha[i]=n.life/n.maxLife*uv(n),this.size[i]=n.size}const e=this.points.geometry;e.attributes.position.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0,e.attributes.aAlpha.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0}}function uv(s){return Math.min(1,s.maxLife>.5?.82:.95)}class dv{constructor(t){this.scene=t,this.smoke=new Ar(t,420,!1),this.sparks=new Ar(t,260,!0),this.fire=new Ar(t,320,!0),this.rain=null,this.lightningTimer=8,this.flash=0,this.sirens=[],this.wakes=new Ar(t,200,!1),this.wakes.points.material.blending=Sn}spawnSmoke(t,e,i,n=1,r=9409176,a=2){for(let o=0;o<n;o++)this.smoke.spawn(t+j(-.4,.4),e,i+j(-.4,.4),{color:r,size:a+j(0,1.4),grow:1.6,life:j(1.4,3.4),vy:j(.6,2),drag:.96})}smokeAtVehicle(t,e){if(t.smokeAcc===void 0&&(t.smokeAcc=0),t.smokeAcc+=e,t.health<55&&t.smokeAcc>.1){t.smokeAcc=0;const i=t.group.position;this.spawnSmoke(i.x,i.y+t.cfg.height*.7,i.z,1,t.health<25?2829099:10132122,t.health<25?3:1.8),t.health<20&&Math.random()<.3&&this.sparks.spawn(i.x,i.y+.8,i.z,{color:16743210,size:1.2,life:.5,vy:j(.4,1.6),vx:j(-1,1),vz:j(-1,1),gravity:2})}}sparksAt(t,e,i,n=12,r=16757575){for(let a=0;a<n;a++)this.sparks.spawn(t,e,i,{color:r,size:j(.5,1.4),life:j(.25,.9),grow:-.2,vx:j(-4,4),vy:j(1,5),vz:j(-4,4),gravity:9,drag:.98})}fireAt(t,e,i,n=1){this.fire.spawn(t+j(-1,1)*n,e+j(0,1.5)*n,i+j(-1,1)*n,{color:ve([16743204,16757575,16730654,16765802]),size:j(2,4)*n,grow:2.2,life:j(.4,1.1),vy:j(1.6,4.2),vx:j(-.6,.6),vz:j(-.6,.6),drag:.94}),Math.random()<.25&&this.spawnSmoke(t,e+3,i,1,3026478,4*n)}debris(t,e,i,n=10){for(let r=0;r<n;r++)this.sparks.spawn(t,e,i,{color:ve([5593951,9408917,4014662,10189906]),size:j(.8,2.2),life:j(.8,2),vx:j(-5,5),vy:j(2,7),vz:j(-5,5),gravity:12,drag:.99})}explosion(t,e,i){this.sparksAt(t,e,i,60,16753979),this.sparksAt(t,e,i,30,16769674);for(let n=0;n<20;n++)this.spawnSmoke(t+j(-2,2),e+1,i+j(-2,2),1,2763306,5);for(let n=0;n<24;n++)this.fireAt(t,e,i,2);this.debris(t,e+1,i,20)}setWeather(t){if(this.rain&&(this.scene.remove(this.rain),this.rain.geometry.dispose(),this.rain=null),t==="rain"||t==="storm"){const i=new Ie,n=new Float32Array(1600*6);for(let a=0;a<1600;a++){const o=j(-80,80),l=j(0,65),c=j(-80,80);n[a*6]=o,n[a*6+1]=l,n[a*6+2]=c,n[a*6+3]=o+.4,n[a*6+4]=l+2.4,n[a*6+5]=c}i.setAttribute("position",new Xe(n,3));const r=new Sh({color:12113134,transparent:!0,opacity:t==="storm"?.42:.28});this.rain=new Cd(i,r),this.rain.frustumCulled=!1,this.scene.add(this.rain)}else if(t==="snow"){const i=new Ie,n=new Float32Array(1800*3);for(let a=0;a<1800;a++)n[a*3]=j(-70,70),n[a*3+1]=j(0,55),n[a*3+2]=j(-70,70);i.setAttribute("position",new Xe(n,3));const r=new jn({color:16777215,size:.55,transparent:!0,opacity:.8,depthWrite:!1});this.rain=new ts(i,r),this.rain.frustumCulled=!1,this.scene.add(this.rain)}this.weatherKind=t}update(t,e,i,n){if(this.smoke.update(t),this.sparks.update(t),this.fire.update(t),this.wakes.update(t),this.rain&&i){const r=this.rain.geometry.attributes.position,a=r.array,o=this.weatherKind==="rain"||this.weatherKind==="storm",l=this.weatherKind==="storm"?58:38,c=o?6:3;for(let h=0;h<a.length;h+=c)a[h+1]-=l*t,a[h+1]<-2&&(a[h]=i.x+j(-65,65),a[h+2]=i.z+j(-65,65),a[h+1]=55,o&&(a[h+3]=a[h]+.4,a[h+4]=a[h+1]+2.4,a[h+5]=a[h+2])),o&&(a[h+3]=a[h]+.4,a[h+4]=a[h+1]+2.4,a[h+5]=a[h+2]);this.rain.position.set(i.x,0,i.z),r.needsUpdate=!0}n==="storm"&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=j(6,18),this.flash=1),this.flash>0&&(this.flash-=t*3.5))}}class fv{constructor(){this.ctx=null,this.enabled=!0,this.engine=null,this.engineTarget=0,this.siren=null,this.rainGain=null,this.ambienceGain=null,this.master=null,this.t=0,this.lastHorn=0,this.ready=!1}ensure(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=18,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),this.noise=this.makeNoise(2.4),this.buildAmbience(),this.buildEngine(),this.buildSiren(),this.ready=!0}catch{this.enabled=!1}}makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);let r=0;for(let a=0;a<e;a++){const o=Math.random()*2-1;r=(r+.02*o)/1.02,n[a]=r*3.2}return i}loopNoise(t,e,i,n){const r=this.ctx.createBufferSource();r.buffer=this.noise,r.loop=!0;const a=this.ctx.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=i;const o=this.ctx.createGain();return o.gain.value=n,r.connect(a),a.connect(o),o.connect(this.master),r.start(),{src:r,filter:a,gain:o}}buildAmbience(){this.cityHum=this.loopNoise("lowpass",320,.8,.055),this.wind=this.loopNoise("bandpass",900,.5,.018),this.rain=this.loopNoise("highpass",2200,.3,0),this.rainGain=this.rain.gain;const t=this.ctx.createOscillator();t.type="sine",t.frequency.value=52;const e=this.ctx.createGain();e.gain.value=.012,t.connect(e),e.connect(this.master),t.start(),this.drone=e}buildEngine(){const t=this.ctx,e=t.createGain();e.gain.value=0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=620,i.Q.value=.8;const n=t.createOscillator();n.type="sawtooth",n.frequency.value=70;const r=t.createOscillator();r.type="square",r.frequency.value=35;const a=t.createGain();a.gain.value=.35,r.connect(a),a.connect(i),n.connect(i),i.connect(e),e.connect(this.master),n.start(),r.start(),this.engine={out:e,lp:i,o1:n,o2:r,active:!1}}buildSiren(){const t=this.ctx,e=t.createGain();e.gain.value=0;const i=t.createOscillator();i.type="triangle",i.frequency.value=700;const n=t.createOscillator();n.type="sine",n.frequency.value=1050;const r=t.createGain();r.gain.value=.3,i.connect(e),n.connect(r),r.connect(e),e.connect(this.master),i.start(),n.start(),this.siren={out:e,o:i,o2:n,gain:0,target:0}}resume(){this.ensure(),this.ctx?.state==="suspended"&&this.ctx.resume()}setVolume(t){this.master&&this.master.gain.setTargetAtTime(t*.6,this.ctx.currentTime,.1)}startEngine(t){this.ensure(),this.engine&&(this.engine.active=!0,this.engine.type=t.type,this.engine.out.gain.setTargetAtTime(.055,this.ctx.currentTime,.15))}stopEngine(){this.engine&&(this.engine.active=!1,this.engine.out.gain.setTargetAtTime(0,this.ctx.currentTime,.2))}update(t,e,i,n){if(!this.ready||!this.ctx)return;this.t+=t;const r=this.ctx.currentTime;if(this.engine.active&&e){const o=Math.abs(e.speed||0),l=e.cfg.maxSpeed||50,c=.14+o/l*.86,h=e.throttle||0,u=(e.type==="bus"||e.type==="truck"?38:58)+c*(e.type==="super"?220:130)+h*22;this.engine.o1.frequency.setTargetAtTime(u,r,.05),this.engine.o2.frequency.setTargetAtTime(u*.5,r,.05),this.engine.lp.frequency.setTargetAtTime(400+c*1800+h*500,r,.08),this.engine.out.gain.setTargetAtTime(e.isAir?.08:.045+h*.035+c*.02,r,.1),e.isAir&&(this.engine.o1.type="sawtooth",this.engine.o1.frequency.setTargetAtTime(90+Math.sin(this.t*38)*20,r,.03))}if(this.siren){if(n<130){const o=Math.max(0,1-n/130)*.085;this.siren.target=o;const l=Math.sin(this.t*4.6)*.5+.5;this.siren.o.frequency.setTargetAtTime(600+l*550,r,.06),this.siren.o2.frequency.setTargetAtTime(900+l*700,r,.08)}else this.siren.target=0;this.siren.out.gain.setTargetAtTime(this.siren.target,r,.2)}const a=i==="rain"?.045:i==="storm"?.1:i==="snow"?.015:0;this.rainGain?.gain.setTargetAtTime(a,r,1.2),this.cityHum?.gain.gain.setTargetAtTime(this.nightMode?.035:.06,r,.5),this.wind?.gain.gain.setTargetAtTime(this.nightMode?.014:.022,r,2),this.drone&&this.drone.gain.setTargetAtTime(this.nightMode?.018:.01,r,1)}beep(t=660,e=.08,i="sine",n=.08){if(!this.ready)return;const r=this.ctx,a=r.currentTime,o=r.createOscillator();o.type=i,o.frequency.value=t;const l=r.createGain();l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+e+.02)}horn(){if(!this.ready)return;const t=performance.now();if(t-this.lastHorn<280)return;this.lastHorn=t;const e=this.ctx,i=e.currentTime;for(const n of[330,415]){const r=e.createOscillator();r.type="sawtooth",r.frequency.value=n;const a=e.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.045,i+.02),a.gain.setValueAtTime(.045,i+.24),a.gain.exponentialRampToValueAtTime(1e-4,i+.36),r.connect(a),a.connect(this.master),r.start(i),r.stop(i+.4)}}click(){this.beep(520,.04,"sine",.04)}jump(){this.beep(220,.12,"sine",.03)}footstep(t){if(!this.ready)return;const e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.noise;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=t?900:600;const a=e.createGain();a.gain.setValueAtTime(t?.035:.022,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.12),n.connect(r),r.connect(a),a.connect(this.master),n.start(i),n.stop(i+.14)}crash(t=5){if(!this.ready)return;const e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.noise;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=500+Math.min(1800,t*80),r.Q.value=.7;const a=e.createGain(),o=Math.min(.22,.03+t*.012);a.gain.setValueAtTime(o,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.3),n.connect(r),r.connect(a),a.connect(this.master),n.start(i),n.stop(i+.32),this.beep(70,.2,"sine",Math.min(.12,o))}thunder(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.noise;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=180;const r=t.createGain();r.gain.setValueAtTime(.28,e),r.gain.exponentialRampToValueAtTime(1e-4,e+2.4),i.connect(n),n.connect(r),r.connect(this.master),i.start(e),i.stop(e+2.5)}chime(){this.beep(880,.14,"sine",.06),setTimeout(()=>this.beep(1180,.25,"sine",.05),130)}sirenOff(){}}class pv{constructor(t){this.game=t,this.heat=0,this.level=0,this.lastCrime=-999,this.lastKnown=new D,this.reports=0,this.witnesses=0,this.searchTimer=0,this.lastDispatchLevel=0,this.alerted=!1}commit(t,e,i=!0){this.heat+=t*(i?1:.45),this.lastCrime=this.game.clock,this.lastKnown.copy(e),i&&this.witnesses++,this.reports++;const n=this.levelFor(this.heat);n>this.level?(this.level=n,this.game.notify(`WANTED LEVEL ${n} — ${this.levelDesc(n)}`,"bad"),this.game.audio?.beep(220,.12,"square",.06),n>=1&&this.game.emergency.dispatchPolice(e,Math.min(4,n),n)):this.level=n,this.alerted=!0,this.game.ui?.updateWanted()}levelFor(t){return t>=8.5?5:t>=6?4:t>=4?3:t>=2.4?2:t>=1?1:0}levelDesc(t){return["","Patrol attention","Units responding","Search perimeter","Tactical response","Citywide alert"][t]||""}reportPosition(t){this.lastKnown.copy(t)}update(t){const e=this.game.clock-this.lastCrime;if(this.level>0&&(this.game.emergency.isPoliceNear(this.game.player.pos,45)?(this.lastKnown.copy(this.game.player.pos),this.alerted=!0):e>8&&(this.alerted=!1),e>18&&!this.alerted)){this.heat=Math.max(0,this.heat-t*.55);const i=this.levelFor(this.heat);i<this.level&&(this.level=i,this.game.ui?.updateWanted(),this.game.notify(i===0?"You lost the police":`Wanted reduced to level ${i}`,i===0?"good":"warn"))}this.searchTimer-=t,this.level>0&&this.searchTimer<=0&&(this.searchTimer=12,this.game.emergency.dispatchPolice(this.lastKnown,this.level>=3?2:1,this.level))}clear(){this.heat=0,this.level=0,this.alerted=!1,this.game.ui?.updateWanted()}}class mv{constructor(t){this.game=t,this.units=[],this.patrolUnits=[],this.extraUnits=[],this.spawnTimer=0,this.initPatrols()}initPatrols(){const t=this.game.vehicles.vehicles.filter(e=>e.service==="police");for(const e of t)this.units.push({vehicle:e,type:"police",state:"patrol",path:[],target:new D,speed:0,siren:!1,timer:0,onScene:0,home:new D(e.pos.x,0,e.pos.z)}),e.mode="service",e.lightsOn=!0,this.patrolUnits.push(e)}aStar(t,e){const i=c=>c.i*9+c.j,n=[t],r=new Map,a=new Map;a.set(i(t),0);const o=new Map;o.set(i(t),0);const l=new Set;for(;n.length;){n.sort((h,u)=>(o.get(i(h))??1e9)-(o.get(i(u))??1e9));const c=n.shift();if(c===e){const h=[c];let u=c;for(;r.has(i(u));)u=r.get(i(u)),h.unshift(u);return h}l.add(i(c));for(const[h,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const d=c.i+h,f=c.j+u;if(d<0||d>8||f<0||f>8)continue;const p=this.game.city.nodeGrid[d][f],x=i(p);if(l.has(x))continue;const m=(a.get(i(c))??1e9)+96;m<(a.get(x)??1e9)&&(r.set(x,c),a.set(x,m),o.set(x,m+Math.hypot(p.x-e.x,p.z-e.z)),n.includes(p)||n.push(p))}}return[t,e]}setDestination(t,e,i="responding"){const n=this.game.city.nearestNode(t.vehicle.pos.x,t.vehicle.pos.z),r=this.game.city.nearestNode(e.x,e.z);t.path=this.aStar(n,r).slice(1).map(a=>new D(a.x,0,a.z)),t.finalTarget=new D(e.x,0,e.z),t.target.copy(t.path[0]||t.finalTarget),t.state=i,t.siren=i==="responding"||i==="chase",t.vehicle.lightsOn=!0}findFreeUnit(t){for(const e of this.units)if(e.vehicle.service===t&&!e.vehicle.isPlayer&&(e.state==="idle"||e.state==="patrol"))return e;return null}dispatchPolice(t,e,i=1){let n=0;for(const r of this.units)if(!(r.vehicle.service!=="police"||r.vehicle.isPlayer)&&!(r.state==="chase"||r.state==="responding")){if(n>=e)break;this.setDestination(r,t),r.level=i,n++}for(;n<e;){const r=this.game.city.pois.find(l=>l.type==="police"),a=this.game.vehicles.spawn("police",r.x+10+Math.random()*8,r.z+24,j(0,ae),{service:"police"});a.mode="service";const o={vehicle:a,type:"police",state:"responding",path:[],target:new D,speed:0,siren:!0,timer:0,onScene:0,home:new D(a.pos.x,0,a.pos.z),level:i};this.units.push(o),this.extraUnits.push(a),this.setDestination(o,t),n++}this.game.notify("Dispatch: NCPD units en route","warn")}dispatchMedical(t){const e=this.units.find(i=>i.vehicle.service==="ambulance")||this.makeAmbulanceUnit();this.setDestination(e,t),this.game.notify("Dispatch: ambulance responding to incident","warn")}dispatchFire(t){const e=this.units.find(i=>i.vehicle.service==="fire")||null;e&&(this.setDestination(e,t),this.game.notify("Dispatch: fire engine responding","warn"))}makeAmbulanceUnit(){const t=this.game.city.pois.find(n=>n.type==="hospital"),e=this.game.vehicles.spawn("ambulance",t.x+30,t.z+20,0,{service:"ambulance"});e.mode="service";const i={vehicle:e,type:"ambulance",state:"idle",path:[],target:new D,speed:0,siren:!1,timer:0,onScene:0,home:new D(e.pos.x,0,e.pos.z)};return this.units.push(i),i}isPoliceNear(t,e){for(const i of this.units)if(i.vehicle.service==="police"&&Math.hypot(i.vehicle.pos.x-t.x,i.vehicle.pos.z-t.z)<e)return!0;return!1}nearestSirenDistance(t){let e=1e9;for(const i of this.units){if(!i.siren)continue;const n=Math.hypot(i.vehicle.pos.x-t.x,i.vehicle.pos.z-t.z);n<e&&(e=n)}return e}updateUnitDriving(t,e,i){const n=t.vehicle;if(n.isPlayer||n.mode==="player")return;let r=t.target;const a=this.game.wanted.level;if(t.type==="police"&&a>0){const h=Math.hypot(n.pos.x-this.game.player.pos.x,n.pos.z-this.game.player.pos.z);h<48&&!this.game.player.vehicle?(r=this.game.player.pos,t.state="chase",t.path=[]):t.state==="chase"&&h>80&&(t.state="responding",t.target.set(this.game.wanted.lastKnown.x,0,this.game.wanted.lastKnown.z))}t.path&&t.path.length&&(r=t.path[0],Math.hypot(r.x-n.pos.x,r.z-n.pos.z)<7&&(t.path.shift(),t.path.length&&(r=t.path[0])));const o=r.x-n.pos.x,l=r.z-n.pos.z;if(Math.hypot(o,l)<5&&!t.path?.length)t.state==="return"?(t.state="idle",t.siren=!1):(t.state==="responding"||t.state==="chase")&&(t.state="onScene",t.onScene=t.type==="fire"?8:5),t.speed=Math.max(0,t.speed-e*10);else{let u=((Math.atan2(o,l)-n.heading+Math.PI)%ae+ae)%ae-Math.PI;n.heading+=Gt(u,-e*2.1,e*2.1);const d=t.type==="fire"?15:21,f=t.state==="onScene"?0:d;t.speed=ge(t.speed,f,e*1.2);const p=Math.sin(n.heading),x=Math.cos(n.heading);n.pos.x+=p*t.speed*e,n.pos.z+=x*t.speed*e;const m=this.game.city.collideCircle(n.pos.x,n.pos.z,n.cfg.wid*.5);m&&(n.pos.x+=m.nx*m.pen,n.pos.z+=m.nz*m.pen,t.speed*=.4)}if(n.group.rotation.y=n.heading,n.speed=t.speed,n.speedKmh=t.speed*3.6,n.brakeOn=t.speed<.5,n.animateWheels(e),n.animateLights(i,this.game.night,{}),t.type==="fire"&&t.state==="onScene"){const h=this.game.events.fires.find(u=>!u.done);if(t.onScene-=e,h&&t.onScene<=0&&this.game.events.extinguish(h),h&&Math.random()<.5)for(let u=0;u<3;u++)this.game.effects.sparksAt(h.pos.x+j(-2,2),h.pos.y+j(.5,3),h.pos.z+j(-2,2),1,11459839);t.onScene<=0&&this.setDestination(t,t.home,"return")}t.type==="ambulance"&&t.state==="onScene"&&(t.onScene-=e,t.onScene<=0&&(this.game.events.resolveAccident(),this.setDestination(t,t.home,"return"))),t.type==="police"&&this.game.wanted.level>0&&Math.hypot(n.pos.x-this.game.player.pos.x,n.pos.z-this.game.player.pos.z)<4.4&&this.game.player.vehicle===null&&this.game.busted()}update(t,e){for(const i of this.units){if(i.vehicle.isPlayer){i.vehicle.mode="player",i.state="stolen";continue}if(i.state==="patrol"){if(!i.path||!i.path.length){const n=this.game.city.nodes[Math.floor(Math.random()*this.game.city.nodes.length)];i.path=[new D(n.x,0,n.z)],i.target.copy(i.path[0]),i.siren=!1}if(this.updateUnitDriving(i,t,e),i.state==="patrol"&&i.path&&i.path.length===0&&(i.path=[]),i.state!=="patrol")continue;continue}if(i.state==="idle"){i.vehicle.brakeOn=!0;continue}if(i.state==="onScene"){i.siren=i.type==="police"&&this.game.wanted.level>0,this.updateUnitDriving(i,t,e),i.type==="police"&&(i.onScene-=t,i.onScene<=0&&this.game.wanted.level===0&&this.setDestination(i,i.home,"return"));continue}if(i.state==="return"){this.updateUnitDriving(i,t,e),i.path&&i.path.length===0&&(i.state="idle",i.siren=!1,i.speed=0);continue}this.updateUnitDriving(i,t,e)}if(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=5,this.game.wanted.level===0))for(let i=this.extraUnits.length-1;i>=0;i--){const n=this.extraUnits[i],r=this.units.find(o=>o.vehicle===n);if(!r)continue;const a=Math.hypot(n.pos.x-r.home.x,n.pos.z-r.home.z);(r.state==="idle"||a<12)&&(this.game.scene.remove(n.group),n.disposed=!0,this.game.vehicles.vehicles=this.game.vehicles.vehicles.filter(o=>o!==n),this.units=this.units.filter(o=>o!==r),this.extraUnits.splice(i,1))}}}class gv{constructor(t){this.game=t,this.events=[],this.markers=new $t,t.scene.add(this.markers),this.fires=[],this.roadblocks=[],this.timer=35,this.nextId=1,this.accidentCars=[],this.scorchMat=new ee({color:657414,transparent:!0,opacity:.55})}startRandom(){const t=["accident","fire","construction","festival","power","lost","trainDelay"],e=[3,3,2,2,1.2,1.4,1.2];let i=Math.random()*e.reduce((r,a)=>r+a,0),n="accident";for(let r=0;r<t.length;r++)if(i-=e[r],i<=0){n=t[r];break}this.start(n)}start(t,e={}){if(this.events.filter(r=>r.active).length>3)return null;const n={id:this.nextId++,type:t,active:!0,age:0,duration:50,pos:new D,title:"",beacon:null,...e};switch(t){case"fire":return this.startFire(n);case"accident":return this.startAccident(n);case"construction":return this.startConstruction(n);case"festival":return this.startFestival(n);case"power":return this.startPowerOutage(n);case"lost":return this.startLostPedestrian(n);case"trainDelay":return this.game.notify("Transit alert: monorail delays on the East Gate loop","warn"),this.game.audio?.chime(),null;case"stormDamage":return this.startStormDamage(n);default:return null}}makeBeacon(t,e){const i=Qh(e);return i.position.copy(t),i.position.y=.1,this.markers.add(i),i}addEvent(t){return t.beacon=this.makeBeacon(t.pos,t.type==="fire"?16735018:t.type==="festival"?11635967:t.type==="lost"?6549680:16757847),this.events.push(t),t}startFire(t){const e=this.game.city.blocks.filter(r=>!r.isPark&&r.district!=="suburb"),i=ve(e);t.pos.set(i.x+j(-20,20),.4,i.z+j(-20,20)),t.title="Structure fire",t.duration=130;const n={pos:t.pos.clone(),scale:1,done:!1,ev:t,light:null};return n.light=new An(16738850,6,50,2),n.light.position.copy(t.pos).add(new D(0,4,0)),this.game.scene.add(n.light),this.fires.push(n),t.fire=n,this.game.effects.explosion(t.pos.x,t.pos.y+1,t.pos.z),this.game.emergency.dispatchFire(t.pos),this.game.emergency.dispatchPolice(t.pos,1,1),this.game.notify("🔥 Structure fire reported — fire crews dispatched","bad"),this.game.npcs.panic(t.pos.x,t.pos.z,45),this.addEvent(t),t}extinguish(t){t.done||(t.done=!0,t.ev.active=!1,t.light&&this.game.scene.remove(t.light),this.game.effects.spawnSmoke(t.pos.x,t.pos.y+2,t.pos.z,18,14211288,4),this.game.notify("Fire extinguished — crews packing up","good"),this.game.events.cleanup(t.ev))}startAccident(t){const e=ve(this.game.city.nodes);t.pos.set(e.x+j(-8,8),.2,e.z+j(-8,8)),t.title="Traffic collision",t.duration=45;const i=this.game.vehicles.vehicles.filter(r=>r.mode==="traffic"),n=[];for(let r=0;r<2&&i.length;r++){const a=i.splice(Math.floor(Math.random()*i.length),1)[0];a.pos.set(t.pos.x+j(-2,2),.02,t.pos.z+j(-2,2)),a.heading=j(0,ae),a.speed=0,a.health=12,a.traffic.cruise=0,a.mode="parked",a.brakeOn=!0,this.game.effects.sparksAt(a.pos.x,a.pos.y+.8,a.pos.z,18),this.game.effects.debris(a.pos.x,a.pos.y+.6,a.pos.z,10),n.push(a)}return t.wreck=n,this.accidentCars=n,this.game.emergency.dispatchMedical(t.pos),this.game.emergency.dispatchPolice(t.pos,1,1),this.game.npcs.gather(t.pos.x,t.pos.z,24),this.game.npcs.panic(t.pos.x,t.pos.z,30),this.game.notify("Traffic collision reported — emergency services en route","warn"),this.addEvent(t),t}resolveAccident(){const t=this.events.find(e=>e.type==="accident"&&e.active);if(t){for(const e of this.accidentCars||[])e&&(this.game.scene.remove(e.group),this.game.vehicles.vehicles=this.game.vehicles.vehicles.filter(i=>i!==e));this.accidentCars=[],t.active=!1,this.game.notify("Collision cleared — traffic resuming","good"),this.cleanup(t)}}startConstruction(t){const e=ve(this.game.city.nodes),i=Math.random()>.5;t.pos.set(i?e.x:e.x+10,.3,i?e.z+10:e.z),t.title="Road works",t.duration=55;const n=new $t,r=new z({color:15231518,roughness:.7}),a=new z({color:15920864,roughness:.7});for(let o=0;o<6;o++){const l=new C(new Ri(.22,.7,8),r);l.position.set(j(-4,4),.4,j(-8,8)),n.add(l)}for(let o=0;o<3;o++){const l=new C(new N(2.4,.25,.4),r);l.position.set(j(-3,3),1,-4+o*4),n.add(l);const c=new C(new N(.1,1,.4),a);c.position.set(l.position.x,.5,l.position.z),n.add(c)}return n.position.copy(t.pos),this.game.scene.add(n),t.group=n,this.roadblocks.push({x:t.pos.x,z:t.pos.z,r:18}),this.game.npcs.panic(t.pos.x,t.pos.z,12),this.game.notify("Road works ahead — expect delays","warn"),this.addEvent(t),t}startFestival(t){const e=this.game.city.blocks.find(r=>r.isPark);t.pos.set(e.x+15,.4,e.z+15),t.title="Aurora Park street festival",t.duration=80,this.game.npcs.gather(t.pos.x,t.pos.z,45);const i=new $t,n=[16735098,6021375,16757847,10185727];for(let r=0;r<7;r++){const a=new An(n[r%4],4,28,2);a.position.set(t.pos.x+j(-12,12),5,t.pos.z+j(-12,12)),i.add(a);const o=new C(new Ne(.18,8,6),new ee({color:n[r%4],toneMapped:!1}));o.position.copy(a.position),i.add(o)}return this.game.scene.add(i),t.group=i,this.game.notify("Aurora Park festival is underway — crowds gathering","good"),this.game.audio?.chime(),this.addEvent(t),t}startPowerOutage(t){return t.pos.set(0,0,0),t.title="Downtown power outage",t.duration=35,this.game.powerOutage=!0,this.game.notify("⚠ Grid failure — downtown lights offline","warn"),this.game.emergency.dispatchPolice(new D(0,0,0),1,1),this.addEvent(t),t}startLostPedestrian(t){const e=ve(this.game.npcs.peds);return t.pos.set(e.x,.2,e.z),t.title="Lost visitor needs directions",t.duration=90,t.ped=e,e.lost=!0,this.game.notify("A visitor near you looks lost","warn"),this.addEvent(t),t}startStormDamage(t){const e=j(-300,300),i=j(-300,300);t.pos.set(e,.3,i),t.title="Storm debris",t.duration=60;const n=new C(new te(.35,.45,7,6),new z({color:4863781,roughness:1}));n.rotation.z=Math.PI/2,n.position.set(e,.6,i),this.game.scene.add(n);const r=new C(new Ws(3,0),new z({color:3099174,roughness:1}));return r.position.set(e+2,1.2,i+1),this.game.scene.add(r),t.group=new $t,t.group.add(n,r),this.roadblocks.push({x:e,z:i,r:12}),this.addEvent(t),t}cleanup(t){t.beacon&&this.markers.remove(t.beacon),t.active=!1,t.group&&(t.type==="power"&&(this.game.powerOutage=!1),this.game.scene.remove(t.group)),this.roadblocks=this.roadblocks.filter(e=>!(Math.abs(e.x-t.pos.x)<.1&&Math.abs(e.z-t.pos.z)<.1)),t.ped&&(t.ped.lost=!1),t.type==="power"&&(this.game.powerOutage=!1)}update(t,e){this.timer-=t,this.timer<=0&&(this.timer=j(50,95),this.startRandom());for(const i of this.events)i.active&&(i.age+=t,i.beacon&&jh(i.beacon,t),i.type==="fire"&&i.fire&&!i.fire.done&&(Math.random()<.8&&this.game.effects.fireAt(i.pos.x+j(-2,2),i.pos.y+j(0,2),i.pos.z+j(-2,2),i.fire.scale+Math.random()*.6),i.fire.light.intensity=4+Math.sin(e*9)*1.4+Math.random(),i.age>110&&this.extinguish(i.fire)),i.type==="festival"&&i.group&&(i.group.rotation.y=Math.sin(e*.3)*.02),i.type==="lost"&&i.ped&&(i.pos.set(i.ped.x,.2,i.ped.z),i.beacon&&i.beacon.position.copy(i.pos).setY(.1)),i.age>i.duration&&(i.type==="fire"&&i.fire&&!i.fire.done?i.duration+=20:(i.type==="power"&&(this.game.powerOutage=!1,this.game.notify("Power restored downtown","good")),this.cleanup(i))));this.events=this.events.filter(i=>i.active||i.age<i.duration+5),this.roadblocks=this.roadblocks.filter(i=>!0)}isRoadBlocked(t,e){for(const i of this.roadblocks)if(Math.hypot(t-i.x,e-i.z)<i.r)return!0;return!1}mapMarkers(){return this.events.filter(t=>t.active).map(t=>({x:t.pos.x,z:t.pos.z,type:t.type,title:t.title}))}}const Wc={apartment:{name:"The Hale Apartments",wall:7234135,floor:6114364,accent:9136973,light:16766888},shop:{name:"Corner Market",wall:7109232,floor:9080200,accent:4160090,light:15922408},police:{name:"NCPD Central Precinct",wall:4608093,floor:6054246,accent:2841498,light:14674431},hospital:{name:"Nova General Hospital",wall:9280164,floor:11120820,accent:5214115,light:15398655},fire:{name:"Nova Fire Station 3",wall:7097155,floor:6248016,accent:11022382,light:16769472},garage:{name:"Apex Auto Garage",wall:5067607,floor:3882818,accent:13208110,light:16769200},dealership:{name:"Nova Motors",wall:5267567,floor:7634051,accent:4034495,light:15398143},hotel:{name:"Hotel Aurora Lobby",wall:7101782,floor:5915704,accent:12160334,light:16768174},office:{name:"Meridian Tower Lobby",wall:5858414,floor:10132636,accent:4026258,light:15003903}};class xv{constructor(t){this.game=t,this.rooms=new Map,this.current=null,this.returnPos=new D,this.built=!1}build(){if(this.built)return;this.built=!0;let t=0;for(const e of Object.keys(Wc))this.rooms.set(e,this.buildRoom(e,t++))}buildRoom(t,e){const i=Wc[t],n=-1800-e*70,r=24,a=17,o=4.4,l=new $t;l.position.set(n,0,0),this.game.scene.add(l);const c=new z({color:i.wall,roughness:.9}),h=new z({color:i.floor,roughness:.5,metalness:.1}),u=new z({color:i.accent,roughness:.55,metalness:.15}),d=new z({color:2830389,roughness:.8}),f=new z({color:15001572,roughness:.7}),p=new z({color:7229236,roughness:.85}),x=(M,w,b,v,S,L=0)=>{const A=new C(M,w);return A.position.set(b,v,S),A.rotation.y=L,A.castShadow=!0,A.receiveShadow=!0,l.add(A),A},m=new C(new ue(r,a),h);m.rotation.x=-Math.PI/2,m.position.y=.03,m.receiveShadow=!0,l.add(m),x(new N(r,.25,a),new z({color:2895665,roughness:.95}),0,o,0),x(new N(r,o,.35),c,0,o/2,-a/2),x(new N(.35,o,a),c,-r/2,o/2,0),x(new N(.35,o,a),c,r/2,o/2,0),x(new N(6.2,o,.35),c,-r/2+3.1,o/2,a/2),x(new N(6.2,o,.35),c,r/2-3.1,o/2,a/2),x(new N(2.4,o-2.5,.35),c,0,o-(o-2.5)/2,a/2),x(new N(2.8,.16,.4),u,0,2.55,a/2);for(const M of[-1,1])x(new N(.12,2.7,.4),u,M*1.3,1.35,a/2);x(new ue(5,3),new z({color:4015180,roughness:.95}),0,.05,a/2-4);for(const M of[-6,6]){const w=new An(i.light,34,24,2);w.position.set(M,o-.5,0),l.add(w);const b=new C(new te(.3,.45,.12,14),new ee({color:i.light}));b.position.set(M,o-.2,0),l.add(b)}const g=new An(i.light,20,22,2);g.position.set(0,o-.7,4),l.add(g);const _={type:t,name:i.name,group:l,x:n,z:0,W:r,D:a,H:o,interactions:[]},y=(M,w,b,v,S)=>_.interactions.push({x:n+w,z:b,label:v,action:S,radius:2.6});if(t==="apartment")x(new N(5.5,1.1,7),p,-7.5,.55,-3.8),x(new N(5.2,.6,1.8),new z({color:14867922,roughness:.9}),-7.5,.95,-5.2),x(new N(5.2,.55,1.8),u,-7.5,.75,-2.4),x(new N(3.6,1.4,1.8),new z({color:4016728,roughness:.9}),5.5,.7,3),x(new N(.12,2.2,4.2),new ee({color:1054752}),7.4,2.3,1.5),x(new N(3,1.1,1.2),p,-2.5,.55,5.3),x(new te(.35,.35,1.1,10),f,2.4,.55,-6.6),x(new N(1.3,1.4,.7),d,2.4,1.65,-6.6),y("sofa",5.5,3,"Rest at home","rest"),y("kitchen",2.4,-6.6,"Make coffee","coffee");else if(t==="shop"){for(let M=0;M<4;M++)x(new N(1,2.5,8),new z({color:5989728,roughness:.7}),-8+M*2,1.25,-2);for(let M=0;M<4;M++)for(let w=0;w<6;w++){const b=[14048074,14727244,6004333,4882350,13793850][(M+w)%5];x(new N(.5,.4,.5),new z({color:b,roughness:.6}),-8+M*2+j(-.3,.3),.55+w%3*.8,-5.2+w*1.3)}x(new N(8,1,1.5),f,3.5,.5,5.2),x(new N(8.2,.16,1.7),u,3.5,1.05,5.2),this.makeClerk(l,3.5,6.6,Math.PI,3366730),y("counter",3.5,4.2,"Browse the market","shop")}else if(t==="police"){for(let M=0;M<3;M++)x(new N(4,.16,1.8),p,-6+M*4.5,1,0),x(new N(.2,1,1.4),d,-6+M*4.5,.5,0),x(new N(1.4,.6,.7),d,-6+M*4.5,1.35,-.2);x(new N(6,1.1,1.4),f,3,.55,-6.8),x(new N(6.2,.14,1.5),u,3,1.12,-6.8),x(new as(1.2,24),new ee({color:2841498}),3,3,-8.28),this.makeClerk(l,3,-7.9,0,2504778),y("desk",3,-5.8,"Talk to the desk sergeant","policeDesk")}else if(t==="hospital"){for(let M=0;M<3;M++)x(new N(2.4,.7,5),f,-6+M*4,.5,-2),x(new N(2.1,.25,1.1),new z({color:10469576,roughness:.8}),-6+M*4,1,-3.2);x(new N(6,1.1,1.3),u,5,.55,-5.8),this.makeClerk(l,5,-6.7,0,2976634),y("reception",5,-4.8,"Ask for medical treatment","heal")}else if(t==="fire"){x(new N(10,1.2,3.4),u,-3,.6,-2);for(let M=0;M<3;M++)x(new N(.5,2,.4),d,-7+M*2.5,2.2,-6.4),x(new N(.6,.8,.3),new z({color:13214794,roughness:.5,metalness:.4}),-7+M*2.5,1.6,-6.2);this.makeClerk(l,4,-6.6,0,8073002),y("gear",4,-5,"Check fire equipment","fireInfo")}else if(t==="garage"){x(new N(10,.3,6),new z({color:2895923,roughness:.9}),0,.4,0),x(new N(10,.2,.4),new ee({color:14723367}),0,.56,3.1),x(new N(1.2,3.2,1.2),u,-8,1.6,-6);for(let w=0;w<4;w++)x(new N(.8,.5,.8),d,7.5,1.8+w*.6,-5+w*1.2);const M=is("sports",12729147).group;M.position.set(-1,.55,0),M.scale.setScalar(1),l.add(M),y("bench",3,4.2,"Repair & refuel your vehicle","garage")}else if(t==="dealership"){x(new N(14,.2,8),new z({color:12568265,roughness:.15,metalness:.4}),-2,.2,0);const M=is("super",14729548).group;M.position.set(-6,.35,-1),M.rotation.y=.4,l.add(M);const w=is("sports",2908047).group;w.position.set(-1,.35,1),w.rotation.y=-.3,l.add(w),x(new N(6,1,1.4),u,5,.5,-6.4),this.makeClerk(l,5,-7.2,0,3103350),y("sales",5,-5.4,"Browse vehicles for sale","dealership")}else if(t==="hotel"){x(new N(8,1.1,1.5),p,0,.55,-5.8),x(new N(8.2,.16,1.7),u,0,1.12,-5.8);for(let M=0;M<3;M++)x(new N(1.6,.6,1.6),new z({color:4082262,roughness:.9}),-5+M*5,.6,3.8);this.makeClerk(l,0,-6.6,0,5980470),y("front desk",0,-4.8,"Rent a room for the night","hotel")}else if(t==="office"){for(let M=0;M<4;M++)x(new N(3,.12,1.4),f,-7+M*4,1,-3),x(new N(.2,1,1.2),d,-7+M*4,.5,-3),x(new N(1.2,.7,.1),new ee({color:9425128}),-7+M*4,1.5,-3);x(new N(5,1.1,1.3),u,5,.55,5.4),this.makeClerk(l,5,6.4,Math.PI,2900822),y("reception",5,4.2,"Ask about office jobs","office")}return y("exit",0,a/2-1.2,"Leave building","exit"),_}makeClerk(t,e,i,n,r){const a=new $t,o=new z({color:12618339,roughness:.7}),l=new z({color:r,roughness:.85}),c=new z({color:2304046,roughness:.9}),h=new C(new Di(.22,.5,4,8),l);h.position.y=1.08,a.add(h);const u=new C(new Ne(.17,10,8),o);u.position.y=1.6,a.add(u);const d=new C(new Ne(.175,8,6,0,ae,0,Math.PI*.55),new z({color:2826523,roughness:.9}));d.position.y=1.62,a.add(d);for(const p of[-1,1]){const x=new C(new Di(.065,.42,3,6),l);x.position.set(p*.28,1.08,0),a.add(x);const m=new C(new Di(.08,.5,3,6),c);m.position.set(p*.12,.5,0),a.add(m)}const f=new C(new as(.9,20),new ee({color:0,transparent:!0,opacity:.18,depthWrite:!1}));return f.rotation.x=-Math.PI/2,f.position.y=.02,a.add(f),a.position.set(e,0,i),a.rotation.y=n,t.add(a),a.userData.baseY=0,this.clerks||(this.clerks=[]),this.clerks.push({group:a,phase:j(0,ae)}),a}enter(t,e){this.build();const i=this.rooms.get(t)||this.rooms.get("apartment");i&&(this.current=i,this.returnPos.copy(e),this.game.mode="interior",this.game.player.interior=i,this.game.player.cameraDist=3.8,this.game.player.cameraPitch=.03,this.game.player.setPosition(i.x,i.z+i.D/2-5.2,.2),this.game.player.heading=Math.PI,this.game.player.cameraYaw=Math.PI,this.game.vehicles.playerVehicle&&this.game.exitVehicle(!0),this.game.audio?.chime(),this.game.notify(`Entered ${i.name}`,"good"))}exit(){this.current&&(this.current,this.current=null,this.game.player.interior=null,this.game.player.setPosition(this.returnPos.x,this.returnPos.z,.2),this.game.player.cameraDist=5.2,this.game.mode="playing",this.game.audio?.chime(),this.game.notify("Back outside","good"))}update(t){if(this.current){const e=this.game.player.pos,i=this.current;if(e.x=Gt(e.x,i.x-i.W/2+.8,i.x+i.W/2-.8),e.z=Gt(e.z,i.z-i.D/2+.8,i.z+i.D/2-.9),this.clerks)for(const n of this.clerks)n.phase+=t,n.group.position.y=Math.sin(n.phase*1.4)*.006}}nearestInteraction(t,e){if(!this.current)return null;let i=null,n=3.2;for(const r of this.current.interactions){const a=Math.hypot(r.x-t,r.z-e);a<n&&(n=a,i=r)}return i}}class vv{constructor(t){this.game=t,this.current=null,this.offers=[],this.marker=null,this.markerGroup=new $t,t.scene.add(this.markerGroup),this.completed=0,this.refreshOffers()}refreshOffers(){const t=this.game.city,e=t.pois.filter(c=>c.type==="shop"),i=t.pois.filter(c=>c.type==="apartment"),n=t.pois.filter(c=>c.type==="hotel"),r=t.pois.filter(c=>c.type==="garage"),a=t.pois.filter(c=>c.type==="factory"),o=Date.now()+this.completed,l=[{id:"courier",title:"Courier Run",desc:"Pick up a parcel and deliver it across the city.",pay:185,require:null,color:6549680},{id:"freight",title:"Freight Delivery",desc:"Haul industrial cargo in a van, pickup or truck.",pay:460,require:["van","pickup","truck","construction"],color:16757847},{id:"taxi",title:"City Taxi",desc:"Pick up a passenger and take them to their hotel.",pay:330,require:["sedan","taxi","suv","van","sports","super"],color:6021375},{id:"courier",title:"Pharmacy Drop",desc:"Urgent medical parcel for the hospital district.",pay:240,require:null,color:6549680},{id:"inspect",title:"Site Inspection",desc:"Drive to an industrial site and check the perimeter.",pay:260,require:null,color:11635967}];this.offers=l.map((c,h)=>{const u=c.id==="freight"?ve(a):c.id==="taxi"?ve(n):ve(e),d=c.id==="freight"?ve(r):c.id==="taxi"?ve(n):ve(i);return{...c,uid:"job"+o+h,pickup:{x:u.x+j(-5,5),z:u.z+j(-5,5)},dropoff:{x:d.x+j(-5,5),z:d.z+j(-5,5)},pickupName:u.name,dropName:d.name}})}start(t){if(this.current){this.game.notify("Finish your current job first","warn");return}const e=this.offers.find(n=>n.uid===t);if(!e)return;const i=this.game.vehicles.playerVehicle;if(e.require&&(!i||!e.require.includes(i.type))){this.game.notify("This job needs the right vehicle","bad");return}this.current={...e,stage:"pickup",elapsed:0,limit:240},this.setMarker(e.pickup.x,e.pickup.z,e.color),this.game.notify(`Job accepted: ${e.title}`,"good"),this.game.audio?.chime(),this.game.ui?.showObjective()}setMarker(t,e,i){this.marker&&this.markerGroup.remove(this.marker),this.marker=Qh(i),this.marker.position.set(t,.15,e),this.markerGroup.add(this.marker)}clearMarker(){this.marker&&(this.markerGroup.remove(this.marker),this.marker=null)}update(t){if(this.marker&&jh(this.marker,t),!this.current)return;const e=this.current;e.elapsed+=t;const i=this.game.player,n=e.stage==="pickup"?e.pickup:e.dropoff,r=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);i.vehicle,r<6&&(e.stage==="pickup"?(e.stage="dropoff",this.setMarker(e.dropoff.x,e.dropoff.z,16757847),this.game.notify(e.id==="taxi"?"Passenger aboard — drive to the destination":"Cargo loaded — deliver it to the destination","good")):this.complete()),e.elapsed>e.limit&&(this.game.notify("Job expired — the client cancelled","bad"),this.current=null,this.clearMarker(),this.game.ui?.hideObjective()),this.game.ui?.updateObjective(e,r)}complete(){const t=this.current;t&&(this.game.addMoney(t.pay),this.completed++,this.game.notify(`Job complete — earned ${bi(t.pay)}`,"good"),this.game.audio?.chime(),this.current=null,this.clearMarker(),this.refreshOffers(),this.game.ui?.hideObjective())}}class _v{constructor(t){this.game=t,this.mode="none",this.manual=!1,this.currentRail=null,this.atStation=-1,this.metroEntrances=[],this.buildMetroEntrances(),this.fare=3}buildMetroEntrances(){const t=this.game.city,e=[{x:10,z:58,name:"Central Metro"},{x:-200,z:10,name:"West End Metro"},{x:200,z:200,name:"Harbor Metro"}];for(let i=0;i<e.length;i++){const n=e[i],r=new $t;r.position.set(n.x,0,n.z);const a=new z({color:3818573,roughness:.4,metalness:.6});r.add(new C(new N(5,.3,8),new z({color:7830912,roughness:.95})));const o=new C(new N(4.2,.05,.2),new ee({color:9235199}));o.position.set(0,.32,2.5),r.add(o);for(const h of[-1,1]){const u=new C(new N(.25,1,8),a);u.position.set(h*2.3,.8,0),r.add(u)}const l=new C(new ue(3.6,1.4),new ee({map:Mv("METRO","#081b2a","#8ceaff",n.name),transparent:!0}));l.position.set(0,3.2,0),r.add(l);const c=new C(new te(.08,.1,3.2,6),a);c.position.y=1.6,r.add(c);for(let h=0;h<5;h++){const u=new C(new N(4,.2,.7),new z({color:5988710,roughness:.9}));u.position.set(0,-.1-h*.2,-.4+h*.6),r.add(u)}this.game.scene.add(r),t.addPOI("metro",n.name,n.x,n.z,6,{icon:"transit",metro:i}),this.metroEntrances.push(n)}}boardMonorail(t){const e=this.game.city.monorail;if(!e)return;const i=this.game.player;i.riding=e,i.group.visible=!1,i.shadow.visible=!1,i.vehicle=null,i.cameraYaw=e.group.rotation.y,i.cameraDist=18,i.cameraPitch=.2,e.riding=!0,this.mode="monorail",this.manual=e.manual,this.atStation=t??e.currentStation,this.game.mode="riding",this.game.notify("Boarded the monorail — E to exit at a station, T to take controls","good"),this.game.audio?.chime(),this.game.ui&&this.game.ui.showTransit("MONORAIL","Aurora Loop","Automatic")}exitMonorail(){const t=this.game.city.monorail,e=this.game.player,i=t.currentStation,n=i>=0?t.stations[i]:null;if(!(n&&t.speed<.35&&t.stationAt(t.progress)===i)){this.game.notify("Wait until the train stops at a station","warn");return}const a=n,o=a.tower;e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(o.x+8,o.z+11,.2),e.cameraYaw=a.ang,t.riding=!1,t.manual=!1,this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify(`Exited at ${a.name}`,"good")}toggleManual(){if(this.mode==="monorail"){const t=this.game.city.monorail;t.manual=!t.manual,this.manual=t.manual,t.targetSpeed=t.manual?Math.max(4,t.speed):11,this.game.ui?.updateTransitMode(t.manual?"Manual control":"Automatic",t.manual?"W/S throttle · E exit":"Aurora Loop"),this.game.notify(t.manual?"Manual train control enabled":"Automatic train control enabled","good");return}if(this.mode==="rail"){const t=this.game.city.rail;t.auto=!t.auto,t.auto&&(t.dwell=0),this.game.ui?.updateTransitMode(t.auto?"Automatic":"Manual control",t.auto?"Station stops":"W/S throttle · E exit"),this.game.notify(t.auto?"Automatic station stops enabled":"Manual train control enabled","good")}}boardRail(){const t=this.game.city.rail;if(!t)return;const e=this.game.player;e.riding={group:t.group,isRail:!0,trainLength:t.trainLength||70},e.group.visible=!1,e.shadow.visible=!1,e.vehicle=null,e.cameraYaw=Math.PI/2,e.cameraDist=12,e.cameraPitch=.16,this.mode="rail",this.currentRail=t,this.game.mode="riding",this.game.notify("Boarded commuter rail — E to disembark at a station, T for manual control","good"),this.game.ui?.showTransit("COMMUTER RAIL","Nova Central Line",t.auto?"Automatic":"Manual control")}exitRail(){const t=this.game.city.rail,e=this.game.player,i=t.currentStation;if(i<0||t.speed>.35){this.game.notify("Wait until the train stops at a station","warn");return}const n=t.stations[i];e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(n.x,n.z+1,.2),e.cameraYaw=0,t.auto=!0,t.dwell=0,t.departCool=4.5,this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify(`Left the train at ${n.name}`,"good")}boardIslandRail(t=0){const e=this.game.city.islandRail;if(!e)return;const i=this.game.player;i.riding=e,i.group.visible=!1,i.shadow.visible=!1,i.vehicle=null,i.cameraYaw=e.group.rotation.y,i.cameraDist=12,i.cameraPitch=.18,this.mode="islandRail",this.currentRail=e,this.game.mode="riding",this.game.notify("Boarded the Palm Island Line — E to step off at a station","good"),this.game.audio?.chime(),this.game.ui?.showTransit("PALM ISLAND LINE","Harbor ↔ Palm Island","Automatic")}exitIslandRail(){const t=this.game.city.islandRail,e=this.game.player,i=t.stoppedAtStation();if(i<0){this.game.notify("Wait for the tram to stop at a station","warn");return}const n=t.stations[i];e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(n.exit.x,n.exit.z,.2),e.cameraYaw=Math.PI,e.velocity.set(0,0,0),this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify(`Stepped off at ${n.name}`,"good")}update(t,e){if(this.mode==="monorail"){const i=this.game.city.monorail;i.manual&&(i.targetSpeed=Gt(i.targetSpeed+((e.forward?1:0)-(e.back?1:0))*8*t*3,0,24),e.brake&&(i.targetSpeed=0)),this.game.ui?.updateTransitSpeed(i.speed,i.dwell>0?"DOORS OPEN":i.currentStation>=0?i.stations[i.currentStation].name:"EN ROUTE")}else if(this.mode==="rail"){const i=this.game.city.rail;i.auto||(e.forward&&(i.speed=Gt(i.speed+5*t,0,28)),e.back&&(i.speed=Gt(i.speed-7*t,0,28)),e.brake&&(i.speed=0));const n=i.currentStation>=0?i.stations[i.currentStation].name:null;this.game.ui?.updateTransitSpeed(i.speed,n?`AT ${n.toUpperCase()}`:i.dwell>0?"DOORS OPEN":"NOVA CENTRAL LINE")}else if(this.mode==="islandRail"){const i=this.game.city.islandRail,n=i.currentStation>=0?i.stations[i.currentStation].name:null;this.game.ui?.updateTransitSpeed(i.speed,n?`AT ${n.toUpperCase()}`:i.dwell>0?"DOORS OPEN":"HARBOR ↔ PALM ISLAND")}}metroTravel(t){const i=this.metroEntrances[t];if(i){if(this.game.money<this.fare){this.game.notify("Not enough cash for fare","bad");return}this.game.addMoney(-this.fare),this.game.audio?.chime(),this.game.notify(`Metro fare ${bi(this.fare)} — arriving at ${i.name}`,"good"),this.game.player.riding=null,this.game.player.setPosition(i.x,i.z+8,.2),this.game.player.cameraYaw=Math.PI,this.game.mode="playing",this.game.ui?.closeOverlay()}}}function Mv(s,t,e,i=""){const n=document.createElement("canvas");n.width=512,n.height=256;const r=n.getContext("2d");r.fillStyle=t,r.fillRect(0,0,512,256),r.strokeStyle="rgba(255,255,255,.25)",r.lineWidth=8,r.strokeRect(10,10,492,236),r.fillStyle=e,r.font="700 82px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(s,256,108),r.font="500 24px Inter, sans-serif",r.globalAlpha=.7,r.fillText(i,256,172);const a=new el(n);return a.colorSpace=si,a}const Xc="novacity-save-v1",qc="novacity-settings-v1",Yc={forward:!1,back:!1,left:!1,right:!1,sprint:!1,jump:!1,brake:!1,crouch:!1},yv=["clear","clear","clear","rain","storm","snow"],wv=[2570317,7023925,3426874,5326428,9202493,4087680,8011346],Sv=[2239027,2895670,3881792,4866358,5922144],wn=()=>new Promise(s=>requestAnimationFrame(()=>s()));class bv{constructor(){this.canvas=document.getElementById("game"),this.renderer=new xx({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=si,this.renderer.toneMapping=Bo,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.type=Cs,this.scene=new xd,this.scene.background=new Wt(10336205),this.fog=new Qo(10466502,55e-5),this.scene.fog=this.fog,this.camera=new vi(62,1,.1,2600),this.camera.position.set(40,22,60),this.settings=this.loadSettings(),this.applyRendererSettings(),this.clock3=new Sf,this.money=2500,this.health=100,this.hour=6.4,this.totalHours=6.4,this.night=0,this.weather="clear",this.temperature=18,this.weatherTimer=j(150,240),this.thunderTimer=j(6,14),this.flashArmed=!0,this.timeScale=24/720,this.mode="boot",this.paused=!1,this.started=!1,this.ready=!1,this.camShake=0,this.powerOutage=!1,this.gps=null,this.bustedCooldown=0,this.crimeCooldown=0,this.metroPass=0,this.lastVehicle=null,this.interaction=null,this.keys=new Set,this.gamepadButtons=new Set,this.gamepadId=null,this.jumpBuffer=0,this.input={...Yc},this.controls={vehicle:{}},this.touch={x:0,y:0,sprint:!1,jump:!1,throttle:!1,brake:!1},this.elapsed=0,this.ui=null,this.player=null,this.dragging=!1,this.lastPointer={x:0,y:0},this.menuClockAcc=0,this.audio=new fv,this.bindWindowEvents(),this.boot()}loadSettings(){const t={quality:"medium",shadows:!0,volume:.7,invert:!1,time:"dawn",fov:62,mode:"pc",language:"en"};try{const e=localStorage.getItem(qc);return e?{...t,...JSON.parse(e)}:t}catch{return t}}saveSettings(){try{localStorage.setItem(qc,JSON.stringify(this.settings))}catch{}this.applyRendererSettings()}applyRendererSettings(){const t=this.settings,e=t.quality==="low"?1:t.quality==="high"?2:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e)),this.renderer.shadowMap.enabled=!!t.shadows,this.camera.fov=t.fov||62,this.camera.updateProjectionMatrix(),this.city?.sun&&(this.city.sun.castShadow=!!t.shadows)}setQuality(t){this.settings.quality=t,this.applyRendererSettings(),this.saveSettings()}setLoading(t,e){const i=document.querySelector(".loading-note");i&&t&&(i.textContent=t);const n=document.querySelector(".loading-bar i");n&&e!=null&&(n.style.animation="none",n.style.width=`${Gt(e,0,100)}%`)}async boot(){try{this.setLoading("Surveying the bay · plotting districts",8),await wn(),await wn(),this.city=new ev(this.scene),this.night=this.city.night,this.setLoading("Paving roads · raising the skyline",34),await wn(),this.effects=new dv(this.scene),this.player=new iv(this),this.player.beginCinematic(170,96,210,250,.055),this.setLoading("Waking the traffic system",52),await wn(),this.vehicles=new sv(this),this.vehicles.spawnParkedCity();const t=this.settings.quality==="low"?46:68;this.vehicles.spawnTraffic(t),this.onTrafficCollision=(e,i)=>this.handleTrafficCollision(e,i),this.onPedHit=(e,i)=>this.handlePedHit(e,i),this.setLoading("Populating sidewalks · dispatching services",68),await wn(),this.npcs=new cv(this),this.wanted=new pv(this),this.emergency=new mv(this),this.events=new gv(this),this.setLoading("Opening storefronts and stations",82),await wn(),this.interiors=new xv(this),this.jobs=new vv(this),this.transit=new _v(this),this.setupOwnedVehicles(),this.setLoading("Calibrating the city",94),await wn(),this.ui=new hv(this),this.ui.updateMoney(),this.ui.updateWanted(),this.player.endCinematic(),this.player.beginCinematic(170,96,210,250,.055),this.city.updateLighting(this.hour,this.weather,0),this.ready=!0,this.mode="menu",this.resize(),this.clock3.start(),this.ui.hideLoading(),this.ui.showMenu(),this.setLoading("Ready",100),requestAnimationFrame(()=>this.loop())}catch(t){console.error(t),this.fatal(t)}}fatal(t){const e=document.querySelector(".loading-note");e&&(e.textContent="NOVA CITY failed to start — "+(t?.message||"unknown error"),e.style.color="#ff8c9a",e.style.maxWidth="70vw",e.style.textAlign="center",e.style.textTransform="none")}setupOwnedVehicles(){this.ownedVehicles=[{...ci.sedan,type:"sedan",color:2837103,name:"Your Sable"}],this.money=2500}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}bindWindowEvents(){window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",t=>{if(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.mode!=="menu"||t.code==="Tab")&&t.preventDefault(),this.keys.add(t.code),!(this.mode==="menu"||!this.ready)&&(t.code==="Space"&&!t.repeat&&(this.jumpBuffer=.2),!t.repeat))switch(t.code){case"Tab":this.toggleOverlay("phone");break;case"KeyM":this.toggleOverlay("map");break;case"KeyE":this.interact();break;case"KeyF":this.toggleCamera();break;case"KeyH":this.horn();break;case"KeyL":this.toggleLights();break;case"KeyT":this.toggleTransitControls();break;case"KeyR":this.resetVehicle();break;case"KeyC":this.player&&(this.player.crouching=!this.player.crouching);break}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),this.canvas.addEventListener("mousedown",t=>{if(this.settings.mode!=="phone"&&t.button===0&&!(this.mode==="menu"||this.paused||this.ui?.overlay)&&(this.dragging=!0,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY,document.pointerLockElement!==this.canvas))try{this.canvas.requestPointerLock?.()}catch{}}),window.addEventListener("mouseup",()=>{this.dragging=!1}),window.addEventListener("mousemove",t=>{if(this.mode==="menu"||this.paused||this.ui?.overlay||!this.player)return;let e=0,i=0;if(this.settings.mode==="phone"||(document.pointerLockElement===this.canvas?(e=t.movementX||0,i=t.movementY||0):this.dragging&&(e=t.clientX-this.lastPointer.x,i=t.clientY-this.lastPointer.y,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY),!e&&!i))return;const n=.0024;this.player.cameraYaw-=e*n,this.player.lookHold=1.6,this.player.cameraPitch=Gt(this.player.cameraPitch+(this.settings.invert?-1:1)*i*n,-.55,1)}),window.addEventListener("wheel",t=>{this.mode==="menu"||this.paused||this.ui?.overlay||!this.player||(this.player.cameraDist=Gt(this.player.cameraDist+t.deltaY*.006,3,20))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.canvas&&(this.dragging=!1)})}readInput(t=0){const e=this.keys,i=navigator.getGamepads?.()||[],n=Array.from(i).find(y=>y?.connected)||null,r=new Set;let a=0,o=0,l=0,c=0,h=!1,u=!1,d=!1;if(n){this.gamepadId=n.index;const y=b=>Math.abs(b||0)<.16?0:b;a=y(n.axes[0]),o=y(n.axes[1]),l=y(n.axes[2]),c=y(n.axes[3]);const M=b=>!!n.buttons[b]?.pressed||(n.buttons[b]?.value||0)>.6;for(let b=0;b<n.buttons.length;b++)M(b)&&r.add(b);u=r.has(0),d=r.has(1),h=r.has(5)||(n.buttons[7]?.value||0)>.25;const w=b=>r.has(b)&&!this.gamepadButtons.has(b);this.mode!=="menu"&&this.ready&&(w(2)&&this.interact(),w(3)&&this.toggleOverlay("map"),w(4)&&this.toggleOverlay("phone"),w(9)&&this.togglePause()),(l||c)&&(this.player.cameraYaw-=l*t*2.4,this.player.lookHold=1.2,this.player.cameraPitch=Gt(this.player.cameraPitch+(this.settings.invert?-1:1)*c*t*1.8,-.55,1))}else this.gamepadId=null;this.gamepadButtons=r;const f=e.has("KeyW")||e.has("ArrowUp")||o<-.25,p=e.has("KeyS")||e.has("ArrowDown")||o>.25,x=e.has("KeyA")||e.has("ArrowLeft")||a<-.25,m=e.has("KeyD")||e.has("ArrowRight")||a>.25,g=e.has("ShiftLeft")||e.has("ShiftRight")||h,_=e.has("Space")||this.jumpBuffer>0||u;if(this.jumpBuffer=0,this.input.forward=f,this.input.back=p,this.input.left=x,this.input.right=m,this.input.sprint=g,this.input.jump=_,this.input.brake=p||d,this.input.crouch=e.has("KeyC")||r.has(1),this.settings.mode==="phone"&&(this.input.forward=this.touch.y<-.25,this.input.back=this.touch.y>.25,this.input.left=this.touch.x<-.25,this.input.right=this.touch.x>.25,this.input.sprint=this.touch.sprint,this.touch.jump&&(this.jumpBuffer=.2),this.input.jump=this.touch.jump||this.jumpBuffer>0),this.controls.vehicle={throttle:f?1:0,brake:p||d?1:0,steer:(m?1:0)-(x?1:0),handbrake:_,up:_?1:0,down:g?1:0,left:x,right:m},this.settings.mode==="phone"&&!n){const y=Math.abs(this.touch.x)<.12?0:this.touch.x;this.controls.vehicle.throttle=Math.max(this.touch.throttle?1:0,Gt(-this.touch.y,0,1)),this.controls.vehicle.brake=Math.max(this.touch.brake?1:0,Gt(this.touch.y,0,1)),this.controls.vehicle.steer=y,this.controls.vehicle.left=y<-.16,this.controls.vehicle.right=y>.16,this.controls.vehicle.handbrake=this.touch.jump,this.controls.vehicle.up=this.touch.jump?1:0,this.controls.vehicle.down=this.touch.sprint?1:0}n&&this.settings.mode!=="phone"&&(this.controls.vehicle.throttle=o<-.16?-o:0,this.controls.vehicle.brake=o>.16||d?Math.max(o,d?1:0):0,this.controls.vehicle.steer=a,this.controls.vehicle.left=a<-.16,this.controls.vehicle.right=a>.16,this.controls.vehicle.up=Math.max(this.controls.vehicle.up,u?1:0),this.controls.vehicle.down=Math.max(this.controls.vehicle.down,h?1:0))}toggleOverlay(t){this.ui&&(this.ui.overlay===t?this.ui.closeOverlay():this.ui.openOverlay(t))}togglePause(){this.ui&&(this.ui.overlay?this.ui.closeOverlay():this.ui.openOverlay("pause"))}loop(){requestAnimationFrame(()=>this.loop());const t=Math.min(this.clock3.getDelta(),.05);try{this.frame(t)}catch(e){console.error(e)}this.renderer.render(this.scene,this.camera)}frame(t){if(!this.ready)return;const e=this.paused?0:t;if(this.mode==="menu"){if(this.paused||(this.elapsed+=t,this.updateTime(t),this.player.update(t,Yc),this.city.update(t,this.elapsed,this.player.pos),this.effects.update(t,this.elapsed,this.player.pos,this.weather),this.city.updateLighting(this.hour,this.weather,t),this.night=this.city.night,this.updateAtmosphere(t),this.audio.update(t,null,this.weather,999),this.audio.nightMode=this.night>.5),this.menuClockAcc+=t,this.menuClockAcc>.4){this.menuClockAcc=0;const i=document.getElementById("menu-clock");i&&(i.textContent=this.clockText())}return}if(this.started){if(this.elapsed+=e,this.bustedCooldown>0&&(this.bustedCooldown-=e),this.crimeCooldown>0&&(this.crimeCooldown-=e),this.readInput(e),this.updateTime(e),this.updateWeather(e),this.city.updateLighting(this.hour,this.weather,e),this.night=this.city.night,this.mode==="interior")this.updateInterior(e);else if(this.player.riding)this.syncRidingPlayer(),this.player.update(e,this.input),this.transit.update(e,this.input);else{this.vehicles.update(e,this.elapsed,this.night,this.weather),this.player.update(e,this.input);const i=this.player.vehicle;i&&(this.player.pos.copy(i.pos),this.player.heading=i.heading)}this.city.update(e,this.elapsed,this.player.pos),this.npcs.update(e,this.elapsed,this.player),this.wanted.update(e),this.emergency.update(e,this.elapsed),this.events.update(e,this.elapsed),this.jobs.update(e),this.interiors.update(e),this.effects.update(e,this.elapsed,this.player.pos,this.weather),this.applyWeatherAudio(e),this.audio.nightMode=this.night>.5,this.audio.update(e,this.vehicles.playerVehicle,this.weather,this.emergency.nearestSirenDistance(this.player.pos)),this.ui.updateHUD(e),this.updateInteraction(),this.handleVehicleFeedback(),this.updateAtmosphere(t)}}updateTime(t){this.hour=(this.hour+t*this.timeScale)%24,this.totalHours+=t*this.timeScale,this.clock=this.totalHours}updateAtmosphere(t){if(!this.scene.fog||!this.city||this.interiors?.current)return;const e=this.city.night,i=this.weather==="storm"?.0021:this.weather==="rain"?.00135:this.weather==="snow"?.00115:55e-5;this.scene.fog.density=ge(this.scene.fog.density,i,Gt(t*.4,0,1)),this.scene.fog.color.setRGB(ge(.58,.018,e),ge(.68,.032,e),ge(.79,.058,e)),this.scene.background.copy(this.scene.fog.color)}updateWeather(t){if(this.weatherTimer-=t,this.weatherTimer<=0){this.weatherTimer=j(150,260);let i=ve(yv);i===this.weather&&(i=this.weather==="clear"?"rain":"clear"),this.setWeather(i)}const e=this.targetTemperature();this.temperature=ge(this.temperature,e,Gt(t*.16,0,1)),this.weather==="storm"&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderTimer=j(6,16),this.audio.thunder()))}targetTemperature(){const e=11+Math.max(0,Math.sin((this.hour-6)/24*Math.PI*2))*13,i={clear:0,rain:-3,storm:-5,snow:-10,fog:-2}[this.weather]??0;return e+i}setWeather(t,e=!1){if(this.weather=t,this.temperature=this.targetTemperature(),this.effects&&this.effects.setWeather(t),this.ui&&this.ui.setWeatherFx(t),this.city&&this.city.updateLighting(this.hour,t,0),!e&&this.ui){const i={clear:"Skies clearing over Nova City",rain:"Rain moving in from the bay",storm:"Thunderstorm warning issued",snow:"Snow falling across the city",fog:"Fog rolling through downtown"}[t];i&&this.notify(i,t==="storm"?"warn":"")}(t==="storm"||t==="rain")&&this.audio.chime?.()}applyWeatherAudio(){this.effects&&(this.effects.flash>.985&&this.flashArmed&&(this.flashArmed=!1,this.audio.thunder()),this.effects.flash<.05&&(this.flashArmed=!0))}updateInterior(t){const e=this.player;let i=(this.input.right?1:0)-(this.input.left?1:0),n=(this.input.forward?1:0)-(this.input.back?1:0);const r=Math.hypot(i,n);r>0&&(i/=r,n/=r);const a=e.cameraYaw,o=this.input.sprint?4.4:2.7,l=(Math.sin(a)*n+Math.cos(a)*i)*o*(r>0?1:0),c=(Math.cos(a)*n-Math.sin(a)*i)*o*(r>0?1:0);e.pos.x+=l*t,e.pos.z+=c*t,r>0&&(e.heading=Math.atan2(l,c),e.footTimer-=t,e.footTimer<=0&&(e.footTimer=.5,this.audio.footstep(this.input.sprint))),e.group.position.copy(e.pos),e.group.rotation.y=e.heading,e.animate(t,r>0?o:0,this.input.sprint),this.interiors.update(t),e.updateCamera(t)}syncRidingPlayer(){const t=this.player.riding;if(!t)return;const e=t.group?.position||t.pos;e&&(this.player.pos.copy(e),this.player.heading=t.group?.rotation.y??this.player.heading)}updateInteraction(){if(!this.ui)return;if(this.paused||this.ui.overlay){this.interaction=null,this.ui.setPrompt(null);return}const t=this.player;let e=null;if(t.cinematic){this.interaction=null,this.ui.setPrompt(null);return}if(t.vehicle)e={action:"exitVehicle",label:`Exit ${t.vehicle.cfg.name}`};else if(t.riding)e={action:"exitTransit",label:this.transit.mode==="monorail"?"Exit monorail at station":this.transit.mode==="islandRail"?"Exit tram at station":"Leave the train at a station"};else if(this.interiors.current){const i=this.interiors.nearestInteraction(t.pos.x,t.pos.z);i&&(e={action:"interior",payload:i,label:i.label})}else{const i=this.vehicles.findNearest(t.pos.x,t.pos.z,6.5,n=>n.enterable);if(i)e={action:"enterVehicle",payload:i.vehicle,label:`Enter ${i.vehicle.cfg.name}`};else{let n=null,r=1/0;for(const a of this.city.pois){const o=Math.hypot(a.x-t.pos.x,a.z-t.pos.z),l=a.type==="monorail"?11:a.type==="train"?16:a.type==="metro"?9:Math.min(a.radius||16,16);o<l&&o<r&&(r=o,n=a)}n&&(e={action:"poi",payload:n,label:this.poiLabel(n)})}}this.interaction=e,this.ui.setPrompt(e?e.label:null)}poiLabel(t){return t.type==="monorail"?`Board monorail · ${t.name.replace(" Monorail","")}`:t.type==="train"?t.line==="island"?"Board the Palm Island Line":"Board commuter rail":t.type==="metro"?"Ride the metro":t.type==="marina"?"Visit Harbor Marina":t.type==="park"?"Relax in Aurora Park":t.type==="airport"?"Watch the airport":t.type==="factory"?"Inspect Northgate Works":`Enter ${t.name}`}interact(){if(!this.ready||this.paused||this.ui?.overlay)return;const t=this.interaction;t&&(t.action==="exitVehicle"?this.exitVehicle():t.action==="exitTransit"?this.exitTransit():t.action==="enterVehicle"?this.enterVehicle(t.payload):t.action==="interior"?this.runInteriorAction(t.payload):t.action==="poi"&&this.activatePOI(t.payload))}activatePOI(t){if(t.type==="monorail"){this.transit.boardMonorail(t.station),this.mode="riding";return}if(t.type==="train"){t.line==="island"?this.transit.boardIslandRail(t.station??0):this.transit.boardRail(),this.mode="riding";return}if(t.type==="metro"){const e=this.transit.metroEntrances.length,i=((t.metro??0)+1)%e;this.transit.metroTravel(i);return}if(t.type==="marina"){this.notify("Harbor Marina — boats are moored along the waterfront","good");return}if(t.type==="park"){this.notify("Aurora Park — the festival stage is quiet this hour","good");return}if(t.type==="airport"){this.notify("Nova International — departures board flickers","good");return}if(t.type==="factory"){this.notify("Northgate Works — the night shift is running","warn");return}(t.type==="shop"||t.type==="apartment"||t.type==="police"||t.type==="hospital"||t.type==="fire"||t.type==="garage"||t.type==="dealership"||t.type==="hotel"||t.type==="office")&&this.enterInterior(t.type,t)}enterInterior(t,e){const i=this.player;this.interiors.enter(t,new D(i.pos.x,.2,i.pos.z)),this.scene.fog=null,this.mode="interior",this.ui.setPrompt(null),this.audio.chime()}exitInterior(){this.interiors.exit(),this.scene.fog=this.fog,this.mode="playing",this.ui.setPrompt(null)}runInteriorAction(t){if(t)switch(t.action){case"exit":this.exitInterior();break;case"rest":this.hour=(this.hour+7)%24,this.totalHours+=7,this.city.updateLighting(this.hour,this.weather,0),this.notify("You slept for seven hours","good"),this.audio.chime();break;case"coffee":this.health=Math.min(100,this.health+4),this.notify("Fresh coffee — you feel awake","good");break;case"shop":this.ui.openOverlay("phone"),this.ui.switchPhoneTab("shop");break;case"policeDesk":this.openPoliceDesk();break;case"heal":if(this.money<120){this.notify("Treatment costs $120","bad");break}this.addMoney(-120),this.health=100,this.notify("Treated at Nova General — health restored","good"),this.audio.chime();break;case"fireInfo":this.notify("Fire crews are on standby. Report blazes from the phone map.","good");break;case"garage":this.repairAtGarage();break;case"dealership":this.openDealership();break;case"hotel":if(this.money<80){this.notify("A room costs $80","bad");break}this.addMoney(-80),this.hour=(this.hour+8)%24,this.totalHours+=8,this.city.updateLighting(this.hour,this.weather,0),this.notify("Rested at Hotel Aurora","good"),this.audio.chime();break;case"office":this.ui.openOverlay("phone"),this.ui.switchPhoneTab("jobs");break;default:this.notify("Nothing interesting here","")}}openPoliceDesk(){const t=this.wanted.level;if(t===0){this.ui.showModal({kicker:"NCPD CENTRAL",title:"Records clean",body:"<p>No active warrants. Keep it that way, and the city stays open to you.</p>",actions:[{label:"Leave",sub:"Back to the lobby",primary:!0,onClick:()=>{this.exitInterior(),this.ui.closeOverlay()}}]});return}const e=250*t;this.ui.showModal({kicker:"NCPD CENTRAL",title:"Outstanding warrant",body:`<p>Wanted level <b>${t}</b>. Pay a fine of <b>${bi(e)}</b> to clear your record.</p>`,actions:[{label:`Pay ${bi(e)}`,sub:"Clear wanted level",primary:!0,onClick:()=>{if(this.money<e){this.notify("Not enough cash for the fine","bad");return}this.addMoney(-e),this.wanted.clear(),this.notify("Warrant cleared — NCPD stands down","good"),this.exitInterior(),this.ui.closeOverlay()}},{label:"Walk away",sub:"Keep the warrant",onClick:()=>{this.ui.closeOverlay()}}]})}repairAtGarage(){const t=this.lastVehicle||this.vehicles.playerVehicle||this.vehicles.startCar;if(!t){this.notify("No vehicle available to repair","bad");return}const e=80;if(this.money<e){this.notify("Repairs cost $80","bad");return}this.addMoney(-e),t.repair(),t.fuel=t.cfg.fuel,this.notify(`${t.cfg.name} repaired and refuelled`,"good"),this.audio.chime()}openDealership(){const e=["sedan","suv","sports","super","pickup","van"].map(i=>{const n=ci[i];return{label:`${n.name} · ${bi(n.price)}`,sub:`${n.klass} · ${Math.round(n.maxSpeed*3.6)} km/h`,onClick:()=>this.buyVehicle(i)}});this.ui.showModal({kicker:"NOVA MOTORS",title:"Choose your machine",body:"<p>Showroom stock is delivered to the street outside. Insurance and a full tank are included.</p>",actions:e})}buyVehicle(t){const e=ci[t];if(!e)return;if(this.money<e.price){this.notify(`You need ${bi(e.price)} for the ${e.name}`,"bad");return}if(this.ownedVehicles.some(n=>n.type===t)){this.notify("You already own that model","warn");return}this.addMoney(-e.price);const i={...e,type:t,color:ve([2837103,9183020,13620182,1843753,2181746,6961964])};this.ownedVehicles.push(i),this.notify(`Purchased ${e.name}`,"good"),this.audio.chime(),this.ui.closeOverlay(),this.spawnOwnedNearby(i),this.saveGame()}spawnOwnedNearby(t){if(this.interiors?.current)return null;const e=this.player;let i=e.pos.x+Math.sin(e.heading)*11,n=e.pos.z+Math.cos(e.heading)*11;this.city.collideCircle(i,n,1.6)&&(i=e.pos.x-Math.sin(e.heading)*11,n=e.pos.z-Math.cos(e.heading)*11);const a=this.vehicles.spawn(t.type,i,n,e.heading,{color:t.color,owned:!0,name:t.name});return a.mode="parked",a}recallVehicle(t){const e=this.ownedVehicles[t];if(!e)return;this.spawnOwnedNearby(e)?this.notify(`${e.name} delivered nearby`,"good"):this.notify("Step outside to receive the vehicle","warn"),this.saveGame()}enterVehicle(t){if(!t||this.player.vehicle||this.player.riding)return;const e=!!t.service,i=t.mode==="traffic";if(this.vehicles.startDriving(t),this.player.enteredVehicle(t),this.lastVehicle=t,this.mode="driving",this.ui.setPrompt(null),!t.owned&&(e||i)){const n=e?2.2:1.2;this.wanted.commit(n,this.player.pos,!0),this.npcs.panic(t.pos.x,t.pos.z,26),this.notify(e?"Service vehicle stolen — units alerted":"Carjacking reported","bad")}this.audio.click()}exitVehicle(t=!1){const e=this.player.vehicle;if(e){if(!t&&e.isAir&&e.pos.y>4){this.notify("Land the helicopter before exiting","warn");return}if(!t&&e.isBoat&&e.pos.z>515){this.notify("Bring the boat closer to shore","warn");return}this.vehicles.stopDriving(e),this.player.exitVehicle(e),this.lastVehicle=e,this.interiors?.current||(this.mode="playing"),this.ui.setPrompt(null)}}exitTransit(){this.transit.mode==="monorail"?this.transit.exitMonorail():this.transit.mode==="rail"?this.transit.exitRail():this.transit.mode==="islandRail"?this.transit.exitIslandRail():(this.player.riding=null,this.player.group.visible=!0,this.player.shadow.visible=!0,this.mode="playing",this.ui.hideTransit())}toggleCamera(){if(!this.player||this.player.vehicle===null&&this.mode==="interior"){this.notify("Camera options are limited indoors","warn");return}const t=this.player.toggleCamera();this.ui.toast(t?"First-person camera":"Third-person camera")}toggleLights(){const t=this.player.vehicle;t&&(t.lightsOn=!t.lightsOn,this.ui.toast(t.lightsOn?"Lights on":"Lights off"))}horn(){this.audio.horn(),this.player.vehicle&&(this.camShake=Math.max(this.camShake,.05))}resetVehicle(){const t=this.player.vehicle;if(!t)return;const e=this.city.nearestNode(t.pos.x,t.pos.z);t.repair(),t.velocity.set(0,0),t.speed=0,t.pos.set(e.x+4.5,t.isAir?2.2:.02,e.z+4.5),t.altitude=t.pos.y,t.heading=0,t.group.rotation.set(0,0,0),this.notify("Vehicle reset and repaired","good")}toggleTransitControls(){(this.transit.mode==="monorail"||this.transit.mode==="rail")&&this.transit.toggleManual()}handleTrafficCollision(t,e){this.crimeCooldown>0||(this.crimeCooldown=2.5,this.wanted.commit(1.2,t.pos,!0),this.ui.damageFlash(),this.notify("Collision witnessed — NCPD notified","warn"))}handlePedHit(t,e){this.wanted.commit(4.5,e.pos,!0),this.emergency.dispatchMedical(new D(t.x,.2,t.z)),this.npcs.panic(t.x,t.z,34),this.ui.damageFlash(),this.camShake=Math.max(this.camShake,1),this.notify("You struck a pedestrian — witnesses are calling 911","bad")}handleVehicleFeedback(){const t=this.vehicles.playerVehicle;t&&t.damageFlash>0&&(t.damageFlash=0,this.ui.damageFlash(),this.camShake=Math.max(this.camShake,.35)),this.camShake>0&&(this.camShake=Math.max(0,this.camShake-.016*2.2))}busted(){if(this.bustedCooldown>0||!this.wanted||this.wanted.level===0)return;this.bustedCooldown=12,this.player.vehicle&&this.exitVehicle(!0),this.wanted.clear(),this.money=Math.max(0,this.money-500),this.ui.updateMoney();const t=this.city.pois.find(e=>e.type==="police")||{x:132,z:44};this.player.setPosition(t.x+8,t.z+26,.18),this.player.heading=Math.PI,this.player.cameraYaw=Math.PI,this.player.velocity.set(0,0,0),this.mode==="interior"&&this.exitInterior(),this.mode="playing",this.ui.showBusted(),this.notify("Busted — $500 fine and a ride to the precinct","bad"),this.audio.chime()}buyItem(t){const i={coffee:{price:6},sandwich:{price:12},medkit:{price:45},fuelcan:{price:32},jacket:{price:60},pants:{price:45},metrocard:{price:25}}[t];if(i){if(t==="fuelcan"&&!this.vehicles.playerVehicle){this.notify("You need to be in a vehicle to use a fuel can","warn");return}if(this.money<i.price){this.notify("Not enough cash","bad");return}switch(this.addMoney(-i.price),t){case"coffee":this.health=Math.min(100,this.health+4),this.notify("Coffee purchased","good");break;case"sandwich":this.health=Math.min(100,this.health+10),this.notify("Sandwich eaten","good");break;case"medkit":this.health=100,this.notify("First aid kit used — health restored","good");break;case"fuelcan":this.vehicles.playerVehicle.fuel=this.vehicles.playerVehicle.cfg.fuel,this.notify("Vehicle refuelled","good");break;case"jacket":this.player.setClothing({jacket:ve(wv)}),this.notify("New jacket equipped","good");break;case"pants":this.player.setClothing({pants:ve(Sv)}),this.notify("New trousers equipped","good");break;case"metrocard":this.metroPass+=5,this.notify("Metro pass loaded with five rides","good");break}this.audio.chime(),this.saveGame()}}addMoney(t){this.money=Gt(this.money+t,0,1e9),this.ui?.updateMoney()}notify(t,e=""){this.ui?.notify(t,e)}clockText(){const t=Math.floor(this.hour)%24,e=Math.floor(this.hour%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}startNewGame(){this.ready&&(this.audio.resume(),this.audio.setVolume(this.settings.volume),this.paused=!1,this.mode="playing",this.started=!0,this.player.endCinematic(),this.player.firstPerson=!1,this.player.cameraDist=5.2,this.player.setPosition(10,34,.18),this.player.heading=Math.PI,this.player.cameraYaw=Math.PI,this.player.cameraPitch=.04,this.player.group.visible=!0,this.player.shadow.visible=!0,this.health=100,this.money=2500,this.metroPass=0,this.ownedVehicles=[{...ci.sedan,type:"sedan",color:2837103,name:"Your Sable"}],this.wanted.clear(),this.jobs.current=null,this.jobs.clearMarker(),this.jobs.completed=0,this.jobs.refreshOffers(),this.ui.hideObjective(),this.hour={dawn:8.2,day:12.2,dusk:18.8,night:22.4}[this.settings.time]??8.2,this.totalHours=this.hour,this.clock=this.hour,this.weatherTimer=j(150,240),this.setWeather("clear",!0),this.temperature=this.targetTemperature(),this.vehicles.startCar&&(this.vehicles.startCar.repair(),this.vehicles.startCar.pos.set(4,.02,36),this.vehicles.startCar.heading=Math.PI,this.vehicles.startCar.group.rotation.set(0,Math.PI,0)),this.ui.hideMenu(),this.ui.showHUD(),this.ui.updateMoney(),this.ui.updateWanted(),this.ui.closeOverlay(),this.notify("Welcome to Nova City. Find work on your phone, or take the wheel.","good"),this.audio.chime(),this.requestPointerLock(),this.saveGame())}continueGame(){if(!this.ready)return;let t=null;try{t=JSON.parse(localStorage.getItem(Xc)||"null")}catch{t=null}if(!t){this.startNewGame();return}this.audio.resume(),this.audio.setVolume(this.settings.volume),this.paused=!1,this.mode="playing",this.started=!0,this.player.endCinematic(),this.player.firstPerson=!!t.player?.firstPerson,this.player.cameraDist=this.player.firstPerson?0:5.2,this.player.setPosition(t.player?.x??10,t.player?.z??34,.18),this.player.heading=t.player?.heading??Math.PI,this.player.cameraYaw=this.player.heading,this.player.cameraPitch=.04,this.player.group.visible=!this.player.firstPerson,this.player.shadow.visible=!this.player.firstPerson,this.health=Gt(t.health??100,1,100),this.money=Math.max(0,t.money??2500),this.hour=t.hour??6.4,this.totalHours=t.totalHours??this.hour,this.clock=this.totalHours,t.settings&&(this.settings={...this.settings,...t.settings},this.applyRendererSettings());const e=Array.isArray(t.owned)?t.owned:["sedan"];if(this.ownedVehicles=e.map(i=>{const n=typeof i=="string"?i:i.type,r=ci[n];return r?{...r,type:n,name:i.name||(n==="sedan"?"Your Sable":r.name),color:i.color}:null}).filter(Boolean),this.ownedVehicles.length||(this.ownedVehicles=[{...ci.sedan,type:"sedan",name:"Your Sable",color:2837103}]),this.jobs.completed=t.jobsCompleted||0,this.jobs.refreshOffers(),this.wanted.heat=t.wantedHeat||0,this.wanted.level=this.wanted.levelFor(this.wanted.heat),this.setWeather(t.weather||"clear",!0),this.temperature=t.temperature??this.targetTemperature(),t.vehicle?.type&&ci[t.vehicle.type]){const i=this.vehicles.spawn(t.vehicle.type,this.player.pos.x+3.4,this.player.pos.z+2.4,this.player.heading,{owned:!0});i.health=t.vehicle.health??100,i.fuel=t.vehicle.fuel??i.cfg.fuel,i.mode="parked"}this.ui.hideMenu(),this.ui.showHUD(),this.ui.updateMoney(),this.ui.updateWanted(),this.ui.closeOverlay(),this.notify("Welcome back to Nova City","good"),this.audio.chime(),this.requestPointerLock()}saveGame(){if(!this.ready)return;const t=this.player,e=this.vehicles?.playerVehicle,i={version:1,savedAt:Date.now(),money:this.money,health:this.health,hour:this.hour,totalHours:this.totalHours,weather:this.weather,temperature:this.temperature,wantedHeat:this.wanted?.heat||0,jobsCompleted:this.jobs?.completed||0,owned:(this.ownedVehicles||[]).map(n=>({type:n.type,name:n.name,color:n.color})),player:{x:t.pos.x,z:t.pos.z,heading:t.heading,firstPerson:t.firstPerson},vehicle:e?{type:e.type,health:e.health,fuel:e.fuel}:null,settings:this.settings};try{localStorage.setItem(Xc,JSON.stringify(i))}catch{}}returnToMenu(){this.player?.vehicle&&this.exitVehicle(!0),this.player?.riding&&(this.player.riding=null,this.player.group.visible=!0,this.player.shadow.visible=!0),this.interiors?.current&&this.exitInterior(),this.ui.closeOverlay(),this.paused=!1,this.mode="menu",this.started=!1,this.keys.clear(),this.touch.x=0,this.touch.y=0,this.touch.sprint=!1,this.touch.jump=!1,this.gamepadButtons.clear(),this.player.endCinematic(),this.player.beginCinematic(170,96,210,250,.055),this.ui.showMenu(),this.ui.hideTransit(),this.audio.stopEngine()}setTimeOfDay(t){const e={dawn:8.2,day:12.2,dusk:18.8,night:22.4}[t];e!=null&&(this.settings.time=t,this.hour=e,this.totalHours=this.hour,this.clock=this.hour,this.city&&this.city.updateLighting(this.hour,this.weather,0),this.saveSettings())}requestPointerLock(){if(this.settings.mode!=="phone"&&this.canvas.requestPointerLock)try{const t=this.canvas.requestPointerLock();t?.catch&&t.catch(()=>{})}catch{}}}window.novaCity||(window.novaCity=new bv);
