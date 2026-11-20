(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const Uo="187",iu=0,Ml=1,nu=2,Es=1,su=2,ys=3,wn=0,li=1,Si=2,Zn=0,yn=1,qi=2,yl=3,Sl=4,ru=5,qn=100,au=101,ou=102,lu=103,cu=104,hu=200,uu=201,du=202,fu=203,Xc=204,qc=205,pu=206,mu=207,gu=208,xu=209,vu=210,_u=211,Mu=212,yu=213,Su=214,Oa=0,Fa=1,za=2,Ps=3,ka=4,Ba=5,Ga=6,Ha=7,Yc=0,wu=1,bu=2,Wi=0,$c=1,Zc=2,Kc=3,Oo=4,Jc=5,Qc=6,jc=7,th=300,jn=301,Ls=302,ta=303,ea=304,Nr=1e3,Vi=1001,Va=1002,Qe=1003,Eu=1004,Xs=1005,ui=1006,ia=1007,sn=1008,pi=1009,eh=1010,ih=1011,Is=1012,Fo=1013,Di=1014,bi=1015,Ni=1016,zo=1017,ko=1018,ts=1020,nh=35902,sh=35899,rh=1021,ah=1022,Li=1023,cn=1026,rn=1027,Bo=1028,Go=1029,bn=1030,Ho=1031,Vo=1033,Tr=33776,Ar=33777,Rr=33778,Cr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,$a=36196,Za=37492,Ka=37496,Ja=37488,Qa=37489,Ur=37490,ja=37491,to=37808,eo=37809,io=37810,no=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,xo=36495,vo=36283,_o=36284,Or=36285,Mo=36286,Tu=3200,yo=0,Au=1,nn="",ni="srgb",Fr="srgb-linear",zr="linear",Ee="srgb",na=7680,Ru=519,Cu=512,Pu=513,Lu=514,oh=515,Iu=516,Du=517,lh=518,ch=519,hh=35044,Nu=35048,wl="300 es",Ei=2e3,Ds=2001;function Uu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ou(){const s=kr("canvas");return s.style.display="block",s}const bl={};function Br(...s){const t="THREE."+s.shift();console.log(t,...s)}function uh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qt(...s){s=uh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ge(...s){s=uh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Pr(...s){const t=s.join(" ");t in bl||(bl[t]=!0,qt(...s))}function Fu(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const zu={[Oa]:Oa,[za]:Ga,[ka]:ka,[Ps]:Ba,[Fa]:Fa,[Ga]:za,[Ha]:Ha,[Ba]:Ps};class Tn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let El=1234567;const Ts=Math.PI/180,Ns=180/Math.PI;function Yi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[s&255]+ei[s>>8&255]+ei[s>>16&255]+ei[s>>24&255]+"-"+ei[t&255]+ei[t>>8&255]+"-"+ei[t>>16&15|64]+ei[t>>24&255]+"-"+ei[e&63|128]+ei[e>>8&255]+"-"+ei[e>>16&255]+ei[e>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function Wo(s,t){return(s%t+t)%t}function ku(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function Bu(s,t,e){return s!==t?(e-s)/(t-s):0}function As(s,t,e){return(1-e)*s+e*t}function Gu(s,t,e,i){return As(s,t,1-Math.exp(-e*i))}function Hu(s,t=1){return t-Math.abs(Wo(s,t*2)-t)}function Vu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Wu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Xu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qu(s,t){return s+Math.random()*(t-s)}function Yu(s){return s*(.5-Math.random())}function $u(s){s!==void 0&&(El=s);let t=El+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zu(s){return s*Ts}function Ku(s){return s*Ns}function Ju(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Qu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function dh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ju(s,t,e,i,n){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),d=r((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Yr(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xo(s,t){if(t.constructor===Float32Array)return s;const e=Yr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function qo(s,t){if(t.constructor===Float32Array)return s;const e=Yr(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const ls={DEG2RAD:Ts,RAD2DEG:Ns,generateUUID:Yi,clamp:re,euclideanModulo:Wo,mapLinear:ku,inverseLerp:Bu,lerp:As,damp:Gu,pingpong:Hu,smoothstep:Vu,smootherstep:Wu,randInt:Xu,randFloat:qu,randFloatSpread:Yu,seededRandom:$u,degToRad:Zu,radToDeg:Ku,isPowerOfTwo:Ju,ceilPowerOfTwo:Qu,floorPowerOfTwo:dh,setQuaternionFromProperEuler:ju,normalize:qo,denormalize:Xo},rl=class rl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rl.prototype.isVector2=!0;let lt=rl;class rs{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],f=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){const _=Math.acos(m),y=Math.sin(_);g=Math.sin(g*_)/y,o=Math.sin(o*_)/y,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+x*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+x*o;const _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-o*d,t[e+2]=c*p+h*d+o*f-l*u,t[e+3]=h*p-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),f=l(i/2),d=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const al=class al{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sa.copy(this).projectOnVector(t),this.sub(sa)}reflect(t){return this.sub(sa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};al.prototype.isVector3=!0;let P=al;const sa=new P,Tl=new rs,ol=class ol{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],x=n[0],m=n[3],g=n[6],_=n[1],y=n[4],M=n[7],T=n[2],E=n[5],v=n[8];return r[0]=a*x+o*_+l*T,r[3]=a*m+o*y+l*E,r[6]=a*g+o*M+l*v,r[1]=c*x+h*_+u*T,r[4]=c*m+h*y+u*E,r[7]=c*g+h*M+u*v,r[2]=f*x+d*_+p*T,r[5]=f*m+d*y+p*E,r[8]=f*g+d*M+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=e*u+i*f+n*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=d*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ra.makeScale(t,e)),this}rotate(t){return Pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ra.makeRotation(-t)),this}translate(t,e){return Pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ol.prototype.isMatrix3=!0;let Kt=ol;const ra=new Kt,Al=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rl=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function td(){const s={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ee&&(n.r=Xi(n.r),n.g=Xi(n.g),n.b=Xi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ee&&(n.r=Kn(n.r),n.g=Kn(n.g),n.b=Kn(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===nn?zr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Fr]:{primaries:t,whitePoint:i,transfer:zr,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:i,transfer:Ee,toXYZ:Al,fromXYZ:Rl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const fe=td();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Kn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cn;class ed{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cn===void 0&&(Cn=kr("canvas")),Cn.width=t.width,Cn.height=t.height;const n=Cn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Cn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xi(e[i]/255)*255):e[i]=Xi(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let id=0;class Yo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(aa(n[a].image)):r.push(aa(n[a]))}else r=aa(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ed.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let nd=0;const oa=new P;class si extends Tn{constructor(t=si.DEFAULT_IMAGE,e=si.DEFAULT_MAPPING,i=Vi,n=Vi,r=ui,a=sn,o=Li,l=pi,c=si.DEFAULT_ANISOTROPY,h=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Yi(),this.name="",this.source=new Yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=th;si.DEFAULT_ANISOTROPY=1;const ll=class ll{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(d+1)/2,T=(g+1)/2,E=(h+f)/4,v=(u+x)/4,b=(p+m)/4;return y>M&&y>T?y<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(y),n=E/i,r=v/i):M>T?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=E/n,r=b/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=v/r,n=b/r),this.set(i,n,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ll.prototype.isVector4=!0;let Ne=ll;class sd extends Tn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];const n=i.count;for(let r=0;r<n;r++)this.textures[r]=new si({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Yo(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends sd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class fh extends si{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rd extends si{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const qr=class qr{constructor(t,e,i,n,r,a,o,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,u,f,d,p,x,m)}set(t,e,i,n,r,a,o,l,c,h,u,f,d,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qr().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/Pn.setFromMatrixColumn(t,0).length(),r=1/Pn.setFromMatrixColumn(t,1).length(),a=1/Pn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,p=o*h,x=o*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){const f=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,od)}lookAt(t,e,i){const n=this.elements;return di.subVectors(t,e),di.lengthSq()===0&&(di.z=1),di.normalize(),Ki.crossVectors(i,di),Ki.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Ki.crossVectors(i,di)),Ki.normalize(),qs.crossVectors(di,Ki),n[0]=Ki.x,n[4]=qs.x,n[8]=di.x,n[1]=Ki.y,n[5]=qs.y,n[9]=di.y,n[2]=Ki.z,n[6]=qs.z,n[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],x=i[6],m=i[10],g=i[14],_=i[3],y=i[7],M=i[11],T=i[15],E=n[0],v=n[4],b=n[8],D=n[12],R=n[1],L=n[5],B=n[9],F=n[13],C=n[2],O=n[6],G=n[10],z=n[14],ot=n[3],Y=n[7],et=n[11],rt=n[15];return r[0]=a*E+o*R+l*C+c*ot,r[4]=a*v+o*L+l*O+c*Y,r[8]=a*b+o*B+l*G+c*et,r[12]=a*D+o*F+l*z+c*rt,r[1]=h*E+u*R+f*C+d*ot,r[5]=h*v+u*L+f*O+d*Y,r[9]=h*b+u*B+f*G+d*et,r[13]=h*D+u*F+f*z+d*rt,r[2]=p*E+x*R+m*C+g*ot,r[6]=p*v+x*L+m*O+g*Y,r[10]=p*b+x*B+m*G+g*et,r[14]=p*D+x*F+m*z+g*rt,r[3]=_*E+y*R+M*C+T*ot,r[7]=_*v+y*L+M*O+T*Y,r[11]=_*b+y*B+M*G+T*et,r[15]=_*D+y*F+M*z+T*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=l*d-c*f,y=o*d-c*u,M=o*f-l*u,T=a*d-c*h,E=a*f-l*h,v=a*u-o*h;return e*(x*_-m*y+g*M)-i*(p*_-m*T+g*E)+n*(p*y-x*T+g*v)-r*(p*M-x*E+m*v)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*o-i*a,y=e*l-n*a,M=e*c-r*a,T=i*l-n*o,E=i*c-r*o,v=n*c-r*l,b=h*x-u*p,D=h*m-f*p,R=h*g-d*p,L=u*m-f*x,B=u*g-d*x,F=f*g-d*m,C=_*F-y*B+M*L+T*R-E*D+v*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return t[0]=(o*F-l*B+c*L)*O,t[1]=(n*B-i*F-r*L)*O,t[2]=(x*v-m*E+g*T)*O,t[3]=(f*E-u*v-d*T)*O,t[4]=(l*R-a*F-c*D)*O,t[5]=(e*F-n*R+r*D)*O,t[6]=(m*M-p*v-g*y)*O,t[7]=(h*v-f*M+d*y)*O,t[8]=(a*B-o*R+c*b)*O,t[9]=(i*R-e*B-r*b)*O,t[10]=(p*E-x*M+g*_)*O,t[11]=(u*M-h*E-d*_)*O,t[12]=(o*D-a*L-l*b)*O,t[13]=(e*L-i*D+n*b)*O,t[14]=(x*y-p*T-m*_)*O,t[15]=(h*T-u*y+f*_)*O,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,x=a*h,m=a*u,g=o*u,_=l*c,y=l*h,M=l*u,T=i.x,E=i.y,v=i.z;return n[0]=(1-(x+g))*T,n[1]=(d+M)*T,n[2]=(p-y)*T,n[3]=0,n[4]=(d-M)*E,n[5]=(1-(f+g))*E,n[6]=(m+_)*E,n[7]=0,n[8]=(p+y)*v,n[9]=(m-_)*v,n[10]=(1-(f+x))*v,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Pn.set(n[0],n[1],n[2]).length();const o=Pn.set(n[4],n[5],n[6]).length(),l=Pn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),_i.copy(this);const c=1/a,h=1/o,u=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,e.setFromRotationMatrix(_i),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Ei,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(i-n),f=(e+t)/(e-t),d=(i+n)/(i-n);let p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Ei)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ds)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Ei,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),f=-(e+t)/(e-t),d=-(i+n)/(i-n);let p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Ei)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ds)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};qr.prototype.isMatrix4=!0;let xe=qr;const Pn=new P,_i=new xe,ad=new P(0,0,0),od=new P(1,1,1),Ki=new P,qs=new P,di=new P,Cl=new xe,Pl=new rs;class hn{constructor(t=0,e=0,i=0,n=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Cl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ld=0;const Ll=new P,Ln=new rs,zi=new xe,Ys=new P,cs=new P,cd=new P,hd=new rs,Il=new P(1,0,0),Dl=new P(0,1,0),Nl=new P(0,0,1),Ul={type:"added"},ud={type:"removed"},In={type:"childadded",child:null},la={type:"childremoved",child:null};class we extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new P,e=new hn,i=new rs,n=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new xe},normalMatrix:{value:new Kt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ln.setFromAxisAngle(t,e),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(t,e){return Ln.setFromAxisAngle(t,e),this.quaternion.premultiply(Ln),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ys.copy(t):Ys.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(cs,Ys,this.up):zi.lookAt(Ys,cs,this.up),this.quaternion.setFromRotationMatrix(zi),n&&(zi.extractRotation(n.matrixWorld),Ln.setFromRotationMatrix(zi),this.quaternion.premultiply(Ln.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),In.child=t,this.dispatchEvent(In),In.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ud),la.child=t,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),In.child=t,this.dispatchEvent(In),In.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}we.DEFAULT_UP=new P(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dd={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},$s={h:0,s:0,l:0};function ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=fe.workingColorSpace){if(t=Wo(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ha(a,r,t+1/3),this.g=ha(a,r,t),this.b=ha(a,r,t-1/3)}return fe.colorSpaceToWorking(this,n),this}setStyle(t,e=ni){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){const i=mh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}copyLinearToSRGB(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return fe.workingToColorSpace(ii.copy(this),t),Math.round(re(ii.r*255,0,255))*65536+Math.round(re(ii.g*255,0,255))*256+Math.round(re(ii.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(ii.copy(this),e);const i=ii.r,n=ii.g,r=ii.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(ii.copy(this),e),t.r=ii.r,t.g=ii.g,t.b=ii.b,t}getStyle(t=ni){fe.workingToColorSpace(ii.copy(this),t);const e=ii.r,i=ii.g,n=ii.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL($s);const i=As(Ji.h,$s.h,e),n=As(Ji.s,$s.s,e),r=As(Ji.l,$s.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new kt;kt.NAMES=mh;class $o{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new $o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fd extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mi=new P,ki=new P,ua=new P,Bi=new P,Dn=new P,Nn=new P,Ol=new P,da=new P,fa=new P,pa=new P,ma=new Ne,ga=new Ne,xa=new Ne;class xi{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Mi.subVectors(t,e),n.cross(Mi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Mi.subVectors(n,e),ki.subVectors(i,e),ua.subVectors(t,e);const a=Mi.dot(Mi),o=Mi.dot(ki),l=Mi.dot(ua),c=ki.dot(ki),h=ki.dot(ua),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return ma.setScalar(0),ga.setScalar(0),xa.setScalar(0),ma.fromBufferAttribute(t,e),ga.fromBufferAttribute(t,i),xa.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(ma,r.x),a.addScaledVector(ga,r.y),a.addScaledVector(xa,r.z),a}static isFrontFacing(t,e,i,n){return Mi.subVectors(i,e),ki.subVectors(t,e),Mi.cross(ki).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),Mi.cross(ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return xi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;Dn.subVectors(n,i),Nn.subVectors(r,i),da.subVectors(t,i);const l=Dn.dot(da),c=Nn.dot(da);if(l<=0&&c<=0)return e.copy(i);fa.subVectors(t,n);const h=Dn.dot(fa),u=Nn.dot(fa);if(h>=0&&u<=h)return e.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(Dn,a);pa.subVectors(t,r);const d=Dn.dot(pa),p=Nn.dot(pa);if(p>=0&&d<=p)return e.copy(r);const x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Nn,o);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Ol.subVectors(r,n),o=(u-h)/(u-h+(d-p)),e.copy(n).addScaledVector(Ol,o);const g=1/(m+x+f);return a=x*g,o=f*g,e.copy(i).addScaledVector(Dn,a).addScaledVector(Nn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class An{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yi):yi.fromBufferAttribute(r,a),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),Ks.subVectors(this.max,hs),Un.subVectors(t.a,hs),On.subVectors(t.b,hs),Fn.subVectors(t.c,hs),Qi.subVectors(On,Un),ji.subVectors(Fn,On),gn.subVectors(Un,Fn);let e=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-gn.z,gn.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,gn.z,0,-gn.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-gn.y,gn.x,0];return!va(e,Un,On,Fn,Ks)||(e=[1,0,0,0,1,0,0,0,1],!va(e,Un,On,Fn,Ks))?!1:(Js.crossVectors(Qi,ji),e=[Js.x,Js.y,Js.z],va(e,Un,On,Fn,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gi=[new P,new P,new P,new P,new P,new P,new P,new P],yi=new P,Zs=new An,Un=new P,On=new P,Fn=new P,Qi=new P,ji=new P,gn=new P,hs=new P,Ks=new P,Js=new P,xn=new P;function va(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){xn.fromArray(s,r);const o=n.x*Math.abs(xn.x)+n.y*Math.abs(xn.y)+n.z*Math.abs(xn.z),l=t.dot(xn),c=e.dot(xn),h=i.dot(xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ge=new P,Qs=new lt;let pd=0;class We extends Tn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=hh,this.updateRanges=[],this.gpuType=bi,this.version=0,this._normalizationScale=t!==void 0?Yr(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xo(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):qo(t,this.array)}}class gh extends We{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xh extends We{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Se extends We{constructor(t,e,i){super(new Float32Array(t),e,i)}}const md=new An,us=new P,_a=new P;class Rn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):md.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(us,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(_a)),this.expandByPoint(us.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let gd=0;const mi=new xe,Ma=new we,zn=new P,fi=new An,ds=new An,Ke=new P;class Pe extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uu(t)?xh:gh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,i){return mi.makeTranslation(t,e,i),this.applyMatrix4(mi),this}scale(t,e,i){return mi.makeScale(t,e,i),this.applyMatrix4(mi),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zn).negate(),this.translate(zn.x,zn.y,zn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(fi.min,ds.min),fi.expandByPoint(Ke),Ke.addVectors(fi.max,ds.max),fi.expandByPoint(Ke)):(fi.expandByPoint(ds.min),fi.expandByPoint(ds.max))}fi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(zn.fromBufferAttribute(t,c),Ke.add(zn)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new We(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;const h=new P,u=new P,f=new P,d=new lt,p=new lt,x=new lt,m=new P,g=new P;function _(D,R,L){c[D]=c[R]=c[L]=1,h.fromBufferAttribute(i,D),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,L),u.sub(h),f.sub(h),p.sub(d),x.sub(d);const B=1/(p.x*x.y-x.x*p.y);isFinite(B)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(B),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(B),o[D].add(m),o[R].add(m),o[L].add(m),l[D].add(g),l[R].add(g),l[L].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,R=y.length;D<R;++D){const L=y[D],B=L.start,F=L.count;for(let C=B,O=B+F;C<O;C+=3)_(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new P,T=new P,E=new P,v=new P;function b(D){E.fromBufferAttribute(n,D),v.copy(E);const R=o[D];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),T.crossVectors(v,R);const B=T.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,B)}for(let D=0,R=i.count;D<R;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new We(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=Yi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Fl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Fl(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Fl(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Yi()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const ai=new P;class Gr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Yr(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Br("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Br("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Xo(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):qo(t,this.data.array)}}const ya=new P,vd=new P,_d=new Kt;class en{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=ya.subVectors(i,e).cross(vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(ya),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||_d.getNormalMatrix(t),n=this.coplanarPoint(ya).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Md=0;class dn extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=yn,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new en().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class So extends dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let kn;const fs=new P,Bn=new P,Gn=new P,Hn=new lt,ps=new lt,vh=new xe,js=new P,ms=new P,tr=new P,zl=new lt,Sa=new lt,kl=new lt;class Bl extends we{constructor(t=new So){if(super(),this.isSprite=!0,this.type="Sprite",kn===void 0){kn=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xd(e,5);kn.setIndex([0,1,2,0,2,3]),kn.setAttribute("position",new Gr(i,3,0,!1)),kn.setAttribute("uv",new Gr(i,2,3,!1))}this.geometry=kn,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bn.setFromMatrixScale(this.matrixWorld),vh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bn.multiplyScalar(-Gn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;er(js.set(-.5,-.5,0),Gn,a,Bn,n,r),er(ms.set(.5,-.5,0),Gn,a,Bn,n,r),er(tr.set(.5,.5,0),Gn,a,Bn,n,r),zl.set(0,0),Sa.set(1,0),kl.set(1,1);let o=t.ray.intersectTriangle(js,ms,tr,!1,fs);if(o===null&&(er(ms.set(-.5,.5,0),Gn,a,Bn,n,r),Sa.set(0,1),o=t.ray.intersectTriangle(js,tr,ms,!1,fs),o===null))return;const l=t.ray.origin.distanceTo(fs);l<t.near||l>t.far||e.push({distance:l,point:fs.clone(),uv:xi.getInterpolation(fs,js,ms,tr,zl,Sa,kl,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function er(s,t,e,i,n,r){Hn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(ps.x=r*Hn.x-n*Hn.y,ps.y=n*Hn.x+r*Hn.y):ps.copy(Hn),s.copy(t),s.x+=ps.x,s.y+=ps.y,s.applyMatrix4(vh)}const Hi=new P,wa=new P,ir=new P,nr=new P;class Zo{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){wa.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),nr.copy(this.origin).sub(wa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=nr.dot(this.direction),l=-nr.dot(ir),c=nr.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(wa).addScaledVector(ir,f),d}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),n=Hi.dot(Hi)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,_=i.y-a.y,y=i.z-a.z,M=Math.abs(l),T=Math.abs(c),E=Math.abs(h);let v,b,D,R,L,B,F,C,O,G,z,ot;if(M>=T&&M>=E?(D=l,B=u,O=p,ot=g,l>=0?(v=c,b=h,R=f,L=d,F=x,C=m,G=_,z=y):(v=h,b=c,R=d,L=f,F=m,C=x,G=y,z=_)):T>=E?(D=c,B=f,O=x,ot=_,c>=0?(v=h,b=l,R=d,L=u,F=m,C=p,G=y,z=g):(v=l,b=h,R=u,L=d,F=p,C=m,G=g,z=y)):(D=h,B=d,O=m,ot=y,h>=0?(v=l,b=c,R=u,L=f,F=p,C=x,G=g,z=_):(v=c,b=l,R=f,L=u,F=x,C=p,G=_,z=g)),D===0)return null;const Y=v/D,et=b/D,rt=1/D,K=R-Y*B,it=L-et*B,W=F-Y*O,ct=C-et*O,Ct=G-Y*ot,Ot=z-et*ot,Tt=Ct*ct-Ot*W,Ft=K*Ot-it*Ct,ve=W*it-ct*K;if(n){if(Tt<0||Ft<0||ve<0)return null}else if((Tt<0||Ft<0||ve<0)&&(Tt>0||Ft>0||ve>0))return null;const Vt=Tt+Ft+ve;if(Vt===0)return null;const jt=rt*(Tt*B+Ft*O+ve*ot);return(Vt>0?jt<0:jt>0)?null:this.at(jt/Vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce extends dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gl=new xe,vn=new Zo,sr=new Rn,Hl=new P,rr=new P,ar=new P,or=new P,ba=new P,lr=new P,Vl=new P,cr=new P;class k extends we{constructor(t=new Pe,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ba.fromBufferAttribute(u,t),a?lr.addScaledVector(ba,h):lr.addScaledVector(ba.sub(e),h))}e.add(lr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(r),vn.copy(t.ray).recast(t.near),!(sr.containsPoint(vn.origin)===!1&&(vn.intersectSphere(sr,Hl)===null||vn.origin.distanceToSquared(Hl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),vn.copy(t.ray).applyMatrix4(Gl),!(i.boundingBox!==null&&vn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=a[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,T=y;M<T;M+=3){const E=o.getX(M),v=o.getX(M+1),b=o.getX(M+2);n=hr(this,g,t,i,c,h,u,E,v,b),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){const _=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);n=hr(this,a,t,i,c,h,u,_,y,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=a[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=_,T=y;M<T;M+=3){const E=M,v=M+1,b=M+2;n=hr(this,g,t,i,c,h,u,E,v,b),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){const _=m,y=m+1,M=m+2;n=hr(this,a,t,i,c,h,u,_,y,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function yd(s,t,e,i,n,r,a,o){let l;if(t.side===li?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===wn,o),l===null)return null;cr.copy(o),cr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:s}}function hr(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,rr),s.getVertexPosition(l,ar),s.getVertexPosition(c,or);const h=yd(s,t,e,i,rr,ar,or,Vl);if(h){const u=new P;xi.getBarycoord(Vl,rr,ar,or,u),n&&(h.uv=xi.getInterpolatedAttribute(n,o,l,c,u,new lt)),r&&(h.uv1=xi.getInterpolatedAttribute(r,o,l,c,u,new lt)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};xi.getNormal(rr,ar,or,f.normal),h.face=f,h.barycoord=u}return h}class _h extends si{constructor(t=null,e=1,i=1,n,r,a,o,l,c=Qe,h=Qe,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo extends We{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Vn=new xe,Wl=new xe,ur=[],Xl=new An,Sd=new xe,gs=new k,xs=new Rn;class Fe extends k{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Sd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Vn),Xl.copy(t.boundingBox).applyMatrix4(Vn),this.boundingBox.union(Xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Vn),xs.copy(t.boundingSphere).applyMatrix4(Vn),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(i),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Vn),Wl.multiplyMatrices(i,Vn),gs.matrixWorld=Wl,gs.raycast(t,ur);for(let a=0,o=ur.length;a<o;a++){const l=ur[a];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(n*this.count),n,this.count,Bo,bi));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _n=new Rn,wd=new lt(.5,.5),dr=new P;class Us{constructor(t=new en,e=new en,i=new en,n=new en,r=new en,a=new en){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ei,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],y=r[13],M=r[14],T=r[15];if(n[0].setComponents(c-a,d-h,g-p,T-_).normalize(),n[1].setComponents(c+a,d+h,g+p,T+_).normalize(),n[2].setComponents(c+o,d+u,g+x,T+y).normalize(),n[3].setComponents(c-o,d-u,g-x,T-y).normalize(),i)n[4].setComponents(l,f,m,M).normalize(),n[5].setComponents(c-l,d-f,g-m,T-M).normalize();else if(n[4].setComponents(c-l,d-f,g-m,T-M).normalize(),e===Ei)n[5].setComponents(c+l,d+f,g+m,T+M).normalize();else if(e===Ds)n[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(t){_n.center.set(0,0,0);const e=wd.distanceTo(t.center);return _n.radius=.7071067811865476+e,_n.applyMatrix4(t.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(dr.x=n.normal.x>0?t.max.x:t.min.x,dr.y=n.normal.y>0?t.max.y:t.min.y,dr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ql=new xe;class Ko{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){const r=e[n];ql.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new Us),i[n].setFromProjectionMatrix(ql,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Us),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new Ko().copy(this)}}class Mh extends dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new P,Vr=new P,Yl=new xe,vs=new Zo,fr=new Rn,Ea=new P,$l=new P;class bd extends we{constructor(t=new Pe,e=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Hr.fromBufferAttribute(e,n-1),Vr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Se(i,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(n),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;Yl.copy(n).invert(),vs.copy(t.ray).applyMatrix4(Yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=d,m=p-1;x<m;x+=c){const g=h.getX(x),_=h.getX(x+1),y=pr(this,t,vs,l,g,_,x);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(d),g=pr(this,t,vs,l,x,m,p-1);g&&e.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,m=p-1;x<m;x+=c){const g=pr(this,t,vs,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=pr(this,t,vs,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pr(s,t,e,i,n,r,a){const o=s.geometry.attributes.position;if(Hr.fromBufferAttribute(o,n),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Vr,Ea,$l)>i)return;Ea.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ea);if(!(c<t.near||c>t.far))return{distance:c,point:$l.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Zl=new P,Kl=new P;class Ed extends bd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Zl.fromBufferAttribute(e,n),Kl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Zl.distanceTo(Kl);t.setAttribute("lineDistance",new Se(i,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jn extends dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jl=new xe,bo=new Zo,mr=new Rn,gr=new P;class Qn extends we{constructor(t=new Pe,e=new Jn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(n),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Jl.copy(n).invert(),bo.copy(t.ray).applyMatrix4(Jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,x=d;p<x;p++){const m=c.getX(p);gr.fromBufferAttribute(u,m),Ql(gr,m,l,n,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,x=d;p<x;p++)gr.fromBufferAttribute(u,p),Ql(gr,p,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ql(s,t,e,i,n,r,a){const o=bo.distanceSqToPoint(s);if(o<e){const l=new P;bo.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class yh extends si{constructor(t=[],e=jn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jo extends si{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class es extends si{constructor(t,e,i=Di,n,r,a,o=Qe,l=Qe,c,h=cn,u=1){if(h!==cn&&h!==rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Sh extends es{constructor(t,e=Di,i=jn,n,r,a=Qe,o=Qe,l,c=cn){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wh extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Z extends Pe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2));function p(x,m,g,_,y,M,T,E,v,b,D){const R=M/v,L=T/b,B=M/2,F=T/2,C=E/2,O=v+1,G=b+1;let z=0,ot=0;const Y=new P;for(let et=0;et<G;et++){const rt=et*L-F;for(let K=0;K<O;K++){const it=K*R-B;Y[x]=it*_,Y[m]=rt*y,Y[g]=C,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[g]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(K/v),u.push(1-et/b),z+=1}}for(let et=0;et<b;et++)for(let rt=0;rt<v;rt++){const K=f+rt+O*et,it=f+rt+O*(et+1),W=f+(rt+1)+O*(et+1),ct=f+(rt+1)+O*et;l.push(K,it,ct),l.push(it,W,ct),ot+=6}o.addGroup(d,ot,D),d+=ot,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Z(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ln extends Pe{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=i*2+r,x=n+1,m=new P,g=new P;for(let _=0;_<=p;_++){let y=0,M=0,T=0,E=0;if(_<=i){const D=_/i,R=D*Math.PI/2;M=-h-t*Math.cos(R),T=t*Math.sin(R),E=-t*Math.cos(R),y=D*u}else if(_<=i+r){const D=(_-i)/r;M=-h+D*e,T=t,E=0,y=u+D*f}else{const D=(_-i-r)/i,R=D*Math.PI/2;M=h+t*Math.sin(R),T=t*Math.cos(R),E=t*Math.sin(R),y=u+f+D*u}const v=Math.max(0,Math.min(1,y/d));let b=0;_===0?b=.5/n:_===p&&(b=-.5/n);for(let D=0;D<=n;D++){const R=D/n,L=R*Math.PI*2,B=Math.sin(L),F=Math.cos(L);g.x=-T*F,g.y=M,g.z=T*B,o.push(g.x,g.y,g.z),m.set(-T*F,E,T*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+b,v)}if(_>0){const D=(_-1)*x;for(let R=0;R<n;R++){const L=D+R,B=D+R+1,F=_*x+R,C=_*x+R+1;a.push(L,B,F),a.push(B,C,F)}}}this.setIndex(a),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class is extends Pe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new P,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*n;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class le extends Pe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const x=[],m=i/2;let g=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function _(){const M=new P,T=new P;let E=0;const v=(e-t)/i;for(let b=0;b<=r;b++){const D=[],R=b/r,L=R*(e-t)+t;for(let B=0;B<=n;B++){const F=B/n,C=F*l+o,O=Math.sin(C),G=Math.cos(C);T.x=L*O,T.y=-R*i+m,T.z=L*G,u.push(T.x,T.y,T.z),M.set(O,v,G).normalize(),f.push(M.x,M.y,M.z),d.push(F,1-R),D.push(p++)}x.push(D)}for(let b=0;b<n;b++)for(let D=0;D<r;D++){const R=x[D][b],L=x[D+1][b],B=x[D+1][b+1],F=x[D][b+1];(t>0||D!==0)&&(h.push(R,L,F),E+=3),(e>0||D!==r-1)&&(h.push(L,B,F),E+=3)}c.addGroup(g,E,0),g+=E}function y(M){const T=p,E=new lt,v=new P;let b=0;const D=M===!0?t:e,R=M===!0?1:-1;for(let B=1;B<=n;B++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;const L=p;for(let B=0;B<=n;B++){const C=B/n*l+o,O=Math.cos(C),G=Math.sin(C);v.x=D*G,v.y=m*R,v.z=D*O,u.push(v.x,v.y,v.z),f.push(0,R,0),E.x=O*.5+.5,E.y=G*.5*R+.5,d.push(E.x,E.y),p++}for(let B=0;B<n;B++){const F=T+B,C=L+B;M===!0?h.push(C,C+1,F):h.push(C+1,C,F),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class un extends le{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new un(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qo extends Pe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(r.slice(),3)),this.setAttribute("uv",new Se(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new P,M=new P,T=new P;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],M),d(e[E+2],T),l(y,M,T,_)}function l(_,y,M,T){const E=T+1,v=[];for(let b=0;b<=E;b++){v[b]=[];const D=_.clone().lerp(M,b/E),R=y.clone().lerp(M,b/E),L=E-b;for(let B=0;B<=L;B++)B===0&&b===E?v[b][B]=D:v[b][B]=D.clone().lerp(R,B/L)}for(let b=0;b<E;b++)for(let D=0;D<2*(E-b)-1;D++){const R=Math.floor(D/2);D%2===0?(f(v[b][R+1]),f(v[b+1][R]),f(v[b][R])):(f(v[b][R+1]),f(v[b+1][R+1]),f(v[b+1][R]))}}function c(_){const y=new P;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const _=new P;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const M=m(_)/2/Math.PI+.5,T=g(_)/Math.PI+.5;a.push(M,1-T)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){const y=a[_+0],M=a[_+2],T=a[_+4],E=Math.max(y,M,T),v=Math.min(y,M,T);E>.9&&v<.1&&(y<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),T<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,y){const M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){const _=new P,y=new P,M=new P,T=new P,E=new lt,v=new lt,b=new lt;for(let D=0,R=0;D<r.length;D+=9,R+=6){_.set(r[D+0],r[D+1],r[D+2]),y.set(r[D+3],r[D+4],r[D+5]),M.set(r[D+6],r[D+7],r[D+8]),E.set(a[R+0],a[R+1]),v.set(a[R+2],a[R+3]),b.set(a[R+4],a[R+5]),T.copy(_).add(y).add(M).divideScalar(3);const L=m(T);x(E,R+0,_,L),x(v,R+2,y,L),x(b,R+4,M,L)}}function x(_,y,M,T){T<0&&_.x===1&&(a[y]=_.x-1),M.x===0&&M.z===0&&(a[y]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.vertices,t.indices,t.radius,t.detail)}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new lt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,n=[],r=[],a=[],o=new P,l=new xe;for(let d=0;d<=t;d++){const p=d/t;n[d]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(re(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(n[d],r[d])}if(e===!0){let d=Math.acos(re(r[0].dot(r[t]),-1,1));d/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],d*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class jo extends Oi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Td extends jo{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const jl=new P,tc=new P,Ta=new tl,Aa=new tl,Ra=new tl;class Ad extends Oi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new P){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(tc.subVectors(n[0],n[1]).add(n[0]),c=tc);const u=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(jl.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=jl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Ta.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),Aa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),Ra.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ra.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Ta.calc(l),Aa.calc(l),Ra.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new P().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ec(s,t,e,i,n){const r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Rd(s,t){const e=1-s;return e*e*t}function Cd(s,t){return 2*(1-s)*s*t}function Pd(s,t){return s*s*t}function Rs(s,t,e,i){return Rd(s,t)+Cd(s,e)+Pd(s,i)}function Ld(s,t){const e=1-s;return e*e*e*t}function Id(s,t){const e=1-s;return 3*e*e*s*t}function Dd(s,t){return 3*(1-s)*s*s*t}function Nd(s,t){return s*s*s*t}function Cs(s,t,e,i,n){return Ld(s,t)+Id(s,e)+Dd(s,i)+Nd(s,n)}class bh extends Oi{constructor(t=new lt,e=new lt,i=new lt,n=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new lt){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cs(t,n.x,r.x,a.x,o.x),Cs(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ud extends Oi{constructor(t=new P,e=new P,i=new P,n=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new P){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cs(t,n.x,r.x,a.x,o.x),Cs(t,n.y,r.y,a.y,o.y),Cs(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Eh extends Oi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Od extends Oi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends Oi{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Rs(t,n.x,r.x,a.x),Rs(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Oi{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Rs(t,n.x,r.x,a.x),Rs(t,n.y,r.y,a.y),Rs(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ah extends Oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(ec(o,l.x,c.x,h.x,u.x),ec(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new lt().fromArray(n))}return this}}var Eo=Object.freeze({__proto__:null,ArcCurve:Td,CatmullRomCurve3:Ad,CubicBezierCurve:bh,CubicBezierCurve3:Ud,EllipseCurve:jo,LineCurve:Eh,LineCurve3:Od,QuadraticBezierCurve:Th,QuadraticBezierCurve3:Fd,SplineCurve:Ah});class zd extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Eo[n.type]().fromJSON(n))}return this.cacheLengths=null,this}}class ic extends zd{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Eh(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Th(this.currentPoint.clone(),new lt(t,e),new lt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){const o=new bh(this.currentPoint.clone(),new lt(t,e),new lt(i,n),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ah(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){const c=new jo(t,e,i,n,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Rh extends ic{constructor(t){super(t),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new ic().fromJSON(n))}return this}}function kd(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=Ch(s,0,n,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Wd(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,u=l;for(let f=e;f<n;f+=e){const d=s[f],p=s[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Os(r,a,e,o,l,c,0),a}function Ch(s,t,e,i,n){let r;if(n===ef(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=nc(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=nc(a/i|0,s[a],s[a+1],r);return r&&ns(r,r.next)&&(zs(r),r=r.next),r}function En(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(ns(e,e.next)||Ue(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Os(s,t,e,i,n,r,a){if(!s)return;!a&&r&&Zd(s,i,n,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Gd(s,i,n,r):Bd(s)){t.push(l.i,s.i,c.i),zs(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Hd(En(s),t),Os(s,t,e,i,n,r,2)):a===2&&Vd(s,t,e,i,n,r):Os(En(s),t,e,i,n,r,1);break}}}function Bd(s){const t=s.prev,e=s,i=s.next;if(Ue(t,e,i)>=0)return!1;const n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,r,a),u=Math.min(o,l,c),f=Math.max(n,r,a),d=Math.max(o,l,c);let p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ss(n,o,r,l,a,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gd(s,t,e,i){const n=s.prev,r=s,a=s.next;if(Ue(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),x=Math.max(o,l,c),m=Math.max(h,u,f),g=To(d,p,t,e,i),_=To(x,m,t,e,i);let y=s.prevZ,M=s.nextZ;for(;y&&y.z>=g&&M&&M.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Ss(o,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=x&&M.y>=p&&M.y<=m&&M!==n&&M!==a&&Ss(o,h,l,u,c,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Ss(o,h,l,u,c,f,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=d&&M.x<=x&&M.y>=p&&M.y<=m&&M!==n&&M!==a&&Ss(o,h,l,u,c,f,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Hd(s,t){let e=s;do{const i=e.prev,n=e.next.next;!ns(i,n)&&Lh(i,e,e.next,n)&&Fs(i,n)&&Fs(n,i)&&(t.push(i.i,e.i,n.i),zs(e),zs(e.next),e=s=n),e=e.next}while(e!==s);return En(e)}function Vd(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qd(a,o)){let l=Ih(a,o);a=En(a,a.next),l=En(l,l.next),Os(a,t,e,i,n,r,0),Os(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Wd(s,t,e,i){const n=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=Ch(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Jd(c))}n.sort(Xd);for(let r=0;r<n.length;r++)e=qd(n[r],e);return e}function Xd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function qd(s,t){const e=Yd(s,t);if(!e)return t;const i=Ih(e,s);return En(i,i.next),En(e,e.next)}function Yd(s,t){let e=t;const i=s.x,n=s.y;let r=-1/0,a;if(ns(s,e))return e;do{if(ns(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const u=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Ph(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){const u=Math.abs(n-e.y)/(i-e.x);Fs(e,s)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&$d(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function $d(s,t){return Ue(s.prev,s,t.prev)<0&&Ue(t.next,s,s.next)<0}function Zd(s,t,e,i){let n=s;do n.z===0&&(n.z=To(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Kd(n)}function Kd(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function To(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Jd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ph(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Ss(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&Ph(s,t,e,i,n,r,a,o)}function Qd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!jd(s,t)&&(Fs(s,t)&&Fs(t,s)&&tf(s,t)&&(Ue(s.prev,s,t.prev)||Ue(s,t.prev,t))||ns(s,t)&&Ue(s.prev,s,s.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ns(s,t){return s.x===t.x&&s.y===t.y}function Lh(s,t,e,i){const n=vr(Ue(s,t,e)),r=vr(Ue(s,t,i)),a=vr(Ue(e,i,s)),o=vr(Ue(e,i,t));return!!(n!==r&&a!==o||n===0&&xr(s,e,t)||r===0&&xr(s,i,t)||a===0&&xr(e,s,i)||o===0&&xr(e,t,i))}function xr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function vr(s){return s>0?1:s<0?-1:0}function jd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Lh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Fs(s,t){return Ue(s.prev,s,s.next)<0?Ue(s,t,s.next)>=0&&Ue(s,s.prev,t)>=0:Ue(s,t,s.prev)<0||Ue(s,s.next,t)<0}function tf(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Ih(s,t){const e=Ao(s.i,s.x,s.y),i=Ao(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function nc(s,t,e,i){const n=Ao(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ao(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ef(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class nf{static triangulate(t,e,i=2){return kd(t,e,i)}}class $n{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return $n.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];sc(t),rc(i,t);let a=t.length;e.forEach(sc);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,rc(i,e[l]);const o=nf.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function sc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function rc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class el extends Pe{constructor(t=new Rh([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Se(n,3)),this.setAttribute("uv",new Se(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:sf;let y,M=!1,T,E,v,b;if(g){y=g.getSpacedPoints(h),M=!0,f=!1;const st=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,st),E=new P,v=new P,b=new P}f||(m=0,d=0,p=0,x=0);const D=o.extractPoints(c);let R=D.shape;const L=D.holes;if(!$n.isClockWise(R)){R=R.reverse();for(let st=0,mt=L.length;st<mt;st++){const pt=L[st];$n.isClockWise(pt)&&(L[st]=pt.reverse())}}function F(st){const pt=10000000000000001e-36;let It=st[0];for(let yt=1;yt<=st.length;yt++){const Qt=yt%st.length,Bt=st[Qt],ae=Bt.x-It.x,he=Bt.y-It.y,_e=ae*ae+he*he,U=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(It.x),Math.abs(It.y)),ke=pt*U*U;if(_e<=ke){st.splice(Qt,1),yt--;continue}It=Bt}}F(R),L.forEach(F);const C=L.length,O=R;for(let st=0;st<C;st++){const mt=L[st];R=R.concat(mt)}function G(st,mt,pt){return mt||ge("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(mt,pt)}const z=R.length;function ot(st,mt,pt){let It,yt,Qt;const Bt=st.x-mt.x,ae=st.y-mt.y,he=pt.x-st.x,_e=pt.y-st.y,U=Bt*Bt+ae*ae,ke=Bt*_e-ae*he;if(Math.abs(ke)>Number.EPSILON){const se=Math.sqrt(U),Te=Math.sqrt(he*he+_e*_e),wt=mt.x-ae/se,Oe=mt.y+Bt/se,Xt=pt.x-_e/Te,Zt=pt.y+he/Te,A=((Xt-wt)*_e-(Zt-Oe)*he)/(Bt*_e-ae*he);It=wt+Bt*A-st.x,yt=Oe+ae*A-st.y;const S=It*It+yt*yt;if(S<=2)return new lt(It,yt);Qt=Math.sqrt(S/2)}else{let se=!1;Bt>Number.EPSILON?he>Number.EPSILON&&(se=!0):Bt<-Number.EPSILON?he<-Number.EPSILON&&(se=!0):Math.sign(ae)===Math.sign(_e)&&(se=!0),se?(It=-ae,yt=Bt,Qt=Math.sqrt(U)):(It=Bt,yt=ae,Qt=Math.sqrt(U/2))}return new lt(It/Qt,yt/Qt)}const Y=[];for(let st=0,mt=O.length,pt=mt-1,It=st+1;st<mt;st++,pt++,It++)pt===mt&&(pt=0),It===mt&&(It=0),Y[st]=ot(O[st],O[pt],O[It]);const et=[];let rt,K=Y.concat();for(let st=0,mt=C;st<mt;st++){const pt=L[st];rt=[];for(let It=0,yt=pt.length,Qt=yt-1,Bt=It+1;It<yt;It++,Qt++,Bt++)Qt===yt&&(Qt=0),Bt===yt&&(Bt=0),rt[It]=ot(pt[It],pt[Qt],pt[Bt]);et.push(rt),K=K.concat(rt)}let it;if(m===0)it=$n.triangulateShape(O,L);else{const st=[],mt=[];for(let pt=0;pt<m;pt++){const It=pt/m,yt=d*Math.cos(It*Math.PI/2),Qt=p*Math.sin(It*Math.PI/2)+x;for(let Bt=0,ae=O.length;Bt<ae;Bt++){const he=G(O[Bt],Y[Bt],Qt);Ft(he.x,he.y,-yt),It===0&&st.push(he)}for(let Bt=0,ae=C;Bt<ae;Bt++){const he=L[Bt];rt=et[Bt];const _e=[];for(let U=0,ke=he.length;U<ke;U++){const se=G(he[U],rt[U],Qt);Ft(se.x,se.y,-yt),It===0&&_e.push(se)}It===0&&mt.push(_e)}}it=$n.triangulateShape(st,mt)}const W=it.length,ct=p+x;for(let st=0;st<z;st++){const mt=f?G(R[st],K[st],ct):R[st];M?(v.copy(T.normals[0]).multiplyScalar(mt.x),E.copy(T.binormals[0]).multiplyScalar(mt.y),b.copy(y[0]).add(v).add(E),Ft(b.x,b.y,b.z)):Ft(mt.x,mt.y,0)}for(let st=1;st<=h;st++)for(let mt=0;mt<z;mt++){const pt=f?G(R[mt],K[mt],ct):R[mt];M?(v.copy(T.normals[st]).multiplyScalar(pt.x),E.copy(T.binormals[st]).multiplyScalar(pt.y),b.copy(y[st]).add(v).add(E),Ft(b.x,b.y,b.z)):Ft(pt.x,pt.y,u/h*st)}for(let st=m-1;st>=0;st--){const mt=st/m,pt=d*Math.cos(mt*Math.PI/2),It=p*Math.sin(mt*Math.PI/2)+x;for(let yt=0,Qt=O.length;yt<Qt;yt++){const Bt=G(O[yt],Y[yt],It);Ft(Bt.x,Bt.y,u+pt)}for(let yt=0,Qt=L.length;yt<Qt;yt++){const Bt=L[yt];rt=et[yt];for(let ae=0,he=Bt.length;ae<he;ae++){const _e=G(Bt[ae],rt[ae],It);M?Ft(_e.x,_e.y+y[h-1].y,y[h-1].x+pt):Ft(_e.x,_e.y,u+pt)}}}Ct(),Ot();function Ct(){const st=n.length/3;if(f){let mt=0,pt=z*mt;for(let It=0;It<W;It++){const yt=it[It];ve(yt[2]+pt,yt[1]+pt,yt[0]+pt)}mt=h+m*2,pt=z*mt;for(let It=0;It<W;It++){const yt=it[It];ve(yt[0]+pt,yt[1]+pt,yt[2]+pt)}}else{for(let mt=0;mt<W;mt++){const pt=it[mt];ve(pt[2],pt[1],pt[0])}for(let mt=0;mt<W;mt++){const pt=it[mt];ve(pt[0]+z*h,pt[1]+z*h,pt[2]+z*h)}}i.addGroup(st,n.length/3-st,0)}function Ot(){const st=n.length/3;let mt=0;Tt(O,mt),mt+=O.length;for(let pt=0,It=L.length;pt<It;pt++){const yt=L[pt];Tt(yt,mt),mt+=yt.length}i.addGroup(st,n.length/3-st,1)}function Tt(st,mt){let pt=st.length;for(;--pt>=0;){const It=pt;let yt=pt-1;yt<0&&(yt=st.length-1);for(let Qt=0,Bt=h+m*2;Qt<Bt;Qt++){const ae=z*Qt,he=z*(Qt+1),_e=mt+It+ae,U=mt+yt+ae,ke=mt+yt+he,se=mt+It+he;Vt(_e,U,ke,se)}}}function Ft(st,mt,pt){l.push(st),l.push(mt),l.push(pt)}function ve(st,mt,pt){jt(st),jt(mt),jt(pt);const It=n.length/3,yt=_.generateTopUV(i,n,It-3,It-2,It-1);ee(yt[0]),ee(yt[1]),ee(yt[2])}function Vt(st,mt,pt,It){jt(st),jt(mt),jt(It),jt(mt),jt(pt),jt(It);const yt=n.length/3,Qt=_.generateSideWallUV(i,n,yt-6,yt-3,yt-2,yt-1);ee(Qt[0]),ee(Qt[1]),ee(Qt[3]),ee(Qt[1]),ee(Qt[2]),ee(Qt[3])}function jt(st){n.push(l[st*3+0]),n.push(l[st*3+1]),n.push(l[st*3+2])}function ee(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return rf(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Eo[n.type]().fromJSON(n)),new el(i,t.options)}}const sf={generateTopUV:function(s,t,e,i,n){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[n*3],d=t[n*3+1],p=t[n*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-u),new lt(f,1-p),new lt(x,1-g)]:[new lt(o,1-l),new lt(h,1-u),new lt(d,1-p),new lt(m,1-g)]}};function rf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Gs extends Qo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Gs(t.radius,t.detail)}}class oe extends Pe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,f=e/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const _=g*f-a;for(let y=0;y<c;y++){const M=y*u-r;p.push(M,-_,0),x.push(0,0,1),m.push(y/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){const y=_+c*g,M=_+c*(g+1),T=_+1+c*(g+1),E=_+1+c*g;d.push(y,M,E),d.push(M,T,E)}this.setIndex(d),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.widthSegments,t.heightSegments)}}class il extends Pe{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/n,d=new P,p=new lt;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const g=r+m/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<n;x++){const m=x*(i+1);for(let g=0;g<i;g++){const _=g+m,y=_,M=_+i+1,T=_+i+2,E=_+1;o.push(y,M,E),o.push(M,T,E)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xe extends Pe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){const _=[],y=g/i,M=a+y*o,T=t*Math.cos(M),E=Math.sqrt(t*t-T*T);let v=0;g===0&&a===0?v=.5/e:g===i&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const D=b/e,R=n+D*r;u.x=-E*Math.cos(R),u.y=T,u.z=E*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(D+v,1-y),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<e;_++){const y=h[g][_+1],M=h[g][_],T=h[g+1][_],E=h[g+1][_+1];(g!==0||a>0)&&d.push(y,M,E),(g!==i-1||l<Math.PI)&&d.push(M,T,E)}this.setIndex(d),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(x,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ss(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(ac(n))n.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(ac(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function oi(s){const t={};for(let e=0;e<s.length;e++){const i=ss(s[e]);for(const n in i)t[n]=i[n]}return t}function ac(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function af(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const of={clone:ss,merge:oi};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(n.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new P().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Kt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new xe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hf extends Ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q extends dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uf extends dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class df extends dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $r extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ff extends $r{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ca=new xe,oc=new P,lc=new P;class Nh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(oc),lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ca,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Ds||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _r=new P,Mr=new rs,Ri=new P;class Uh extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_r,Mr,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_r,Mr,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(_r,Mr,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_r,Mr,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tn=new P,cc=new lt,hc=new lt;class gi extends Uh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(tn.x,tn.y).multiplyScalar(-t/tn.z),tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tn.x,tn.y).multiplyScalar(-t/tn.z)}getViewSize(t,e){return this.getViewBounds(t,cc,hc),e.subVectors(hc,cc)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class pf extends Nh{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class ks extends $r{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new pf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Oh extends Uh{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mf extends Nh{constructor(){super(new Oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gf extends $r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new mf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class xf extends $r{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Wn=-90,Xn=1;class Ro extends we{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new gi(Wn,Xn,t,e);n.layers=this.layers,this.add(n);const r=new gi(Wn,Xn,t,e);r.layers=this.layers,this.add(r);const a=new gi(Wn,Xn,t,e);a.layers=this.layers,this.add(a);const o=new gi(Wn,Xn,t,e);o.layers=this.layers,this.add(o);const l=new gi(Wn,Xn,t,e);l.layers=this.layers,this.add(l);const c=new gi(Wn,Xn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class vf extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class _f{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uc(s,t,e,i){const n=Mf(i);switch(e){case rh:return s*t;case Bo:return s*t/n.components*n.byteLength;case Go:return s*t/n.components*n.byteLength;case bn:return s*t*2/n.components*n.byteLength;case Ho:return s*t*2/n.components*n.byteLength;case ah:return s*t*3/n.components*n.byteLength;case Li:return s*t*4/n.components*n.byteLength;case Vo:return s*t*4/n.components*n.byteLength;case Tr:case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rr:case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(s,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(s,8)*Math.max(t,8)/2;case $a:case Za:case Ja:case Qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ka:case Ur:case ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case mo:case go:case xo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case vo:case _o:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Or:case Mo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mf(s){switch(s){case pi:case eh:return{byteLength:1,components:1};case Is:case ih:case Ni:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case Di:case Fo:case bi:return{byteLength:4,components:1};case nh:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uo}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uo);function Fh(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function yf(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Of=`#ifdef USE_BUMPMAP
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xf=`#define PI 3.141592653589793
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
} // validated`,qf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,_p=`uniform sampler2D dfgLUT;
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
}`,Mp=`
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
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
#endif`,Op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wp=`#ifdef USE_NORMALMAP
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
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform float backgroundBlurriness;
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Rm=`#if DEPTH_PACKING == 3200
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,zm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Bm=`#define MATCAP
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
}`,Gm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define TOON
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
}`,$m=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,t0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Sf,alphahash_pars_fragment:wf,alphamap_fragment:bf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:Lf,begin_vertex:If,beginnormal_vertex:Df,bsdfs:Nf,iridescence_fragment:Uf,bumpmap_pars_fragment:Of,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:zf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Bf,color_fragment:Gf,color_pars_fragment:Hf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Yf,displacementmap_vertex:$f,emissivemap_fragment:Zf,emissivemap_pars_fragment:Kf,colorspace_fragment:Jf,colorspace_pars_fragment:Qf,envmap_fragment:jf,envmap_common_pars_fragment:tp,envmap_pars_fragment:ep,envmap_pars_vertex:ip,envmap_physical_pars_fragment:fp,envmap_vertex:np,fog_vertex:sp,fog_pars_vertex:rp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:hp,lights_lambert_pars_fragment:up,lights_pars_begin:dp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:xp,lights_physical_fragment:vp,lights_physical_pars_fragment:_p,lights_fragment_begin:Mp,lights_fragment_maps:yp,lights_fragment_end:Sp,lightprobes_pars_fragment:wp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:Ep,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Rp,map_pars_fragment:Cp,map_particle_fragment:Pp,map_particle_pars_fragment:Lp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Np,morphcolor_vertex:Up,morphnormal_vertex:Op,morphtarget_pars_vertex:Fp,morphtarget_vertex:zp,normal_fragment_begin:kp,normal_fragment_maps:Bp,normal_pars_fragment:Gp,normal_pars_vertex:Hp,normal_vertex:Vp,normalmap_pars_fragment:Wp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:$p,opaque_fragment:Zp,packing:Kp,premultiplied_alpha_fragment:Jp,project_vertex:Qp,dithering_fragment:jp,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:om,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:vm,uv_vertex:_m,worldpos_vertex:Mm,background_vert:ym,background_frag:Sm,backgroundCube_vert:wm,backgroundCube_frag:bm,cube_vert:Em,cube_frag:Tm,depth_vert:Am,depth_frag:Rm,distance_vert:Cm,distance_frag:Pm,equirect_vert:Lm,equirect_frag:Im,linedashed_vert:Dm,linedashed_frag:Nm,meshbasic_vert:Um,meshbasic_frag:Om,meshlambert_vert:Fm,meshlambert_frag:zm,meshmatcap_vert:km,meshmatcap_frag:Bm,meshnormal_vert:Gm,meshnormal_frag:Hm,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:qm,meshtoon_vert:Ym,meshtoon_frag:$m,points_vert:Zm,points_frag:Km,shadow_vert:Jm,shadow_frag:Qm,sprite_vert:jm,sprite_frag:t0},Rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Pi={basic:{uniforms:oi([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:oi([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:oi([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:oi([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:oi([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:oi([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:oi([Rt.points,Rt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:oi([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:oi([Rt.common,Rt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:oi([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:oi([Rt.sprite,Rt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:oi([Rt.common,Rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:oi([Rt.lights,Rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Pi.physical={uniforms:oi([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const yr={r:0,b:0,g:0},e0=new xe,zh=new Kt;zh.set(-1,0,0,0,1,0,0,0,1);function i0(s,t,e,i,n,r){const a=new kt(0);let o=n===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const M=_.backgroundBlurriness>0;y=t.get(y,M)}return y}function p(_){let y=!1;const M=d(_);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){const M=d(y);M&&M.isCubeTexture?(c===void 0&&(c=new k(new Z(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ss(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zh),c.material.toneMapped=fe.getTransfer(M.colorSpace)!==Ee,(h!==M||u!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new k(new oe(2,2),new Ui({name:"BackgroundMaterial",uniforms:ss(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=fe.getTransfer(M.colorSpace)!==Ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(yr,Dh(s)),e.buffers.color.setClear(yr.r,yr.g,yr.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:x,dispose:g}}function n0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,a=!1;function o(L,B,F,C,O){let G=!1;const z=u(L,C,F,B);r!==z&&(r=z,c(r.object)),G=d(L,C,F,O),G&&p(L,C,F,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(L,B,F,C),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,B,F,C){const O=C.wireframe===!0;let G=i[B.id];G===void 0&&(G={},i[B.id]=G);const z=L.isInstancedMesh===!0?L.id:0;let ot=G[z];ot===void 0&&(ot={},G[z]=ot);let Y=ot[F.id];Y===void 0&&(Y={},ot[F.id]=Y);let et=Y[O];return et===void 0&&(et=f(l()),Y[O]=et),et}function f(L){const B=[],F=[],C=[];for(let O=0;O<e;O++)B[O]=0,F[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:C,object:L,attributes:{},index:null}}function d(L,B,F,C){const O=r.attributes,G=B.attributes;let z=0;const ot=F.getAttributes();for(const Y in ot)if(ot[Y].location>=0){const rt=O[Y];let K=G[Y];if(K===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),rt===void 0||rt.attribute!==K||K&&rt.data!==K.data)return!0;z++}return r.attributesNum!==z||r.index!==C}function p(L,B,F,C){const O={},G=B.attributes;let z=0;const ot=F.getAttributes();for(const Y in ot)if(ot[Y].location>=0){let rt=G[Y];rt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor));const K={};K.attribute=rt,rt&&rt.data&&(K.data=rt.data),O[Y]=K,z++}r.attributes=O,r.attributesNum=z,r.index=C}function x(){const L=r.newAttributes;for(let B=0,F=L.length;B<F;B++)L[B]=0}function m(L){g(L,0)}function g(L,B){const F=r.newAttributes,C=r.enabledAttributes,O=r.attributeDivisors;F[L]=1,C[L]===0&&(s.enableVertexAttribArray(L),C[L]=1),O[L]!==B&&(s.vertexAttribDivisor(L,B),O[L]=B)}function _(){const L=r.newAttributes,B=r.enabledAttributes;for(let F=0,C=B.length;F<C;F++)B[F]!==L[F]&&(s.disableVertexAttribArray(F),B[F]=0)}function y(L,B,F,C,O,G,z){z===!0?s.vertexAttribIPointer(L,B,F,O,G):s.vertexAttribPointer(L,B,F,C,O,G)}function M(L,B,F,C){x();const O=C.attributes,G=F.getAttributes(),z=B.defaultAttributeValues;for(const ot in G){const Y=G[ot];if(Y.location>=0){let et=O[ot];if(et===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),et!==void 0){const rt=et.normalized,K=et.itemSize,it=t.get(et);if(it===void 0)continue;const W=it.buffer,ct=it.type,Ct=it.bytesPerElement,Ot=ct===s.INT||ct===s.UNSIGNED_INT||et.gpuType===Fo;if(et.isInterleavedBufferAttribute){const Tt=et.data,Ft=Tt.isInterleavedBuffer===!0?Tt.stride:Tt.itemSize,ve=et.offset;if(Tt.isInstancedInterleavedBuffer||Tt.isInstancedBufferAttribute){for(let Vt=0;Vt<Y.locationSize;Vt++)g(Y.location+Vt,Tt.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Vt=0;Vt<Y.locationSize;Vt++)m(Y.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,W);for(let Vt=0;Vt<Y.locationSize;Vt++)y(Y.location+Vt,K/Y.locationSize,ct,rt,Ft*Ct,(ve+K/Y.locationSize*Vt)*Ct,Ot)}else{if(et.isInstancedBufferAttribute){for(let Tt=0;Tt<Y.locationSize;Tt++)g(Y.location+Tt,et.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)m(Y.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,W);for(let Tt=0;Tt<Y.locationSize;Tt++)y(Y.location+Tt,K/Y.locationSize,ct,rt,K*Ct,K/Y.locationSize*Tt*Ct,Ot)}}else if(z!==void 0){const rt=z[ot];if(rt!==void 0)switch(rt.length){case 2:s.vertexAttrib2fv(Y.location,rt);break;case 3:s.vertexAttrib3fv(Y.location,rt);break;case 4:s.vertexAttrib4fv(Y.location,rt);break;default:s.vertexAttrib1fv(Y.location,rt)}}}}_()}function T(){D();for(const L in i){const B=i[L];for(const F in B){const C=B[F];for(const O in C){const G=C[O];for(const z in G)h(G[z].object),delete G[z];delete C[O]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;const B=i[L.id];for(const F in B){const C=B[F];for(const O in C){const G=C[O];for(const z in G)h(G[z].object),delete G[z];delete C[O]}}delete i[L.id]}function v(L){for(const B in i){const F=i[B];for(const C in F){const O=F[C];if(O[L.id]===void 0)continue;const G=O[L.id];for(const z in G)h(G[z].object),delete G[z];delete O[L.id]}}}function b(L){for(const B in i){const F=i[B],C=L.isInstancedMesh===!0?L.id:0,O=F[C];if(O!==void 0){for(const G in O){const z=O[G];for(const ot in z)h(z[ot].object),delete z[ot];delete O[G]}delete F[C],Object.keys(F).length===0&&delete i[B]}}}function D(){R(),a=!0,r!==n&&(r=n,c(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function s0(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function r0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(v){return!(v!==Li&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const b=v===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==pi&&v!==bi&&!b&&i.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:T,samples:E}}function a0(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new en,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{const _=r?0:i,y=_*4;let M=g.clippingState||null;l.value=M,M=h(p,f,y,d);for(let T=0;T!==y;++T)M[T]=e[T];g.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=d+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=d;y!==x;++y,M+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class nl extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new yh(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Z(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:Zn});r.uniforms.tEquirect.value=e;const a=new k(n,r),o=e.minFilter;return e.minFilter===sn&&(e.minFilter=ui),new Ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}const dc=256,o0=3,l0=20,kh=256,Bh=16,c0=3,h0=new P,u0=new kt;class Wr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ro(1,10,null),this._boxMesh=new k(new Z(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=h0}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(u0));const m=new Ro(i,n,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(dc,dh(t))}_fromTexture(t,e){t.mapping===jn||t.mapping===Ls?this._setSize(t.image.length===0?dc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){const t=this._cubeSize,e=fc(t,!1,!1),i=Math.log2(t)-o0;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=fc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){const n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===jn||t.mapping===Ls?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=d0(),this._integrationMaterial=f0());const e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Bh);for(let a=0;a<=i;a++){const o=Wr.lodToRoughness(a,i);if(a>i-c0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(kh*Math.pow(o,4)))+.5:0;n.roughness.value=o,n.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=p0());const i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(r,0,i)}}function fc(s,t,e){return new nl(s,{minFilter:sn,generateMipmaps:t,type:Ni,colorSpace:Fr,depthBuffer:e})}function Hs(s,t,e){return new Ui({name:s,uniforms:t,vertexShader:ne.cube_vert,fragmentShader:e,side:li,blending:Zn,depthTest:!1,depthWrite:!1})}function d0(){return Hs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kh}u

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
	`)}function f0(){return Hs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Bh}},`

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
	`)}function p0(){return Hs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${l0}
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
	`)}function pc(){return Hs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function mc(){return Hs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function m0(s){let t=new WeakMap,e=new WeakMap,i=null;function n(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ta||d===ea)if(t.has(f)){const p=t.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new nl(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,p=d===ta||d===ea,x=d===jn||d===Ls;if(p||x){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Wr(s)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const _=f.image;return p&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Wr(s)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===ta?f.mapping=jn:d===ea&&(f.mapping=Ls),f}function l(f){let d=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){const d=f.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function g0(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Pr("WebGLRenderer: "+i+" extension not supported."),n}}}function x0(s,t,e,i){const n={},r=new WeakMap,a=new FinalizationRegistry(p=>delete n[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete n[p.id],a.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return n[x.id]!==void 0||(x.addEventListener("dispose",o),n[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const _=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?xh:gh,M=new y(Math.ceil(_/3)*6,1),T=M.array;if(x!==null){const v=x.array;g=x.version;for(let b=0,D=0;b<_;b+=3){const R=v[b+0],L=v[b+1],B=v[b+2];T[D++]=R,T[D++]=L,T[D++]=L,T[D++]=B,T[D++]=B,T[D++]=R}}else{g=m.version;for(let v=0,b=0;v<_;v+=3){const D=v+0,R=v+1,L=v+2;T[b++]=D,T[b++]=R,T[b++]=R,T[b++]=L,T[b++]=L,T[b++]=D}}M.version=g;const E=r.get(p);E&&t.remove(E),r.set(p,M)}function f(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(const p in n){const x=n[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function v0(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(i,f,r,u*a,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function M0(s,t,e){const i=new WeakMap,n=new Ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let R=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var d=R;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let T=o.attributes.position.count*M,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const v=new Float32Array(T*E*4*u),b=new fh(v,T,E,u);b.type=bi,b.needsUpdate=!0;const D=M*4;for(let L=0;L<u;L++){const B=g[L],F=_[L],C=y[L],O=T*E*4*L;for(let G=0;G<B.count;G++){const z=G*D;p===!0&&(n.fromBufferAttribute(B,G),v[O+z+0]=n.x,v[O+z+1]=n.y,v[O+z+2]=n.z,v[O+z+3]=0),x===!0&&(n.fromBufferAttribute(F,G),v[O+z+4]=n.x,v[O+z+5]=n.y,v[O+z+6]=n.z,v[O+z+7]=0),m===!0&&(n.fromBufferAttribute(C,G),v[O+z+8]=n.x,v[O+z+9]=n.y,v[O+z+10]=n.z,v[O+z+11]=C.itemSize===4?n.w:1)}}f={count:u,texture:b,size:new lt(T,E)},i.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function y0(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const S0={[$c]:"LINEAR_TONE_MAPPING",[Zc]:"REINHARD_TONE_MAPPING",[Kc]:"CINEON_TONE_MAPPING",[Oo]:"ACES_FILMIC_TONE_MAPPING",[Qc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function w0(s,t,e,i,n,r){const a=new Ii(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Pe;h.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Se([0,2,0,0,2,0],2));const u=new hf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new k(h,u),d=new Oh(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,_=null,y=[],M=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let v=0;v<y.length;v++){const b=y[v];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){y=T,M=y.length>0&&y[0].isRenderPass===!0;const E=a.width,v=a.height;y.length>0&&o===null&&(o=new Ii(E,v,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new Ii(E,v,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));const b=n===!0&&y.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new es(E,v),r===!0&&(c.format=rn,c.type=ts)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<y.length;D++){const R=y[D];R.setSize&&R.setSize(E,v),b&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===Wi&&y.length===0)return!1;if(_=E,E!==null){const v=E.width,b=E.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return M===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=Wi,!0},this.hasRenderPass=function(){return M},this.end=function(T,E){T.toneMapping=g,m=!0;let v=a,b=o;for(let D=0;D<y.length;D++){const R=y[D];R.enabled!==!1&&(R.render(T,b,v,E),R.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,u.defines={},fe.getTransfer(p)===Ee&&(u.defines.SRGB_TRANSFER="");const D=S0[x];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,T.setRenderTarget(_),T.render(f,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Gh=new si,Hh=new es(1,1),Vh=new Sh(1),Wh=new fh,Xh=new rd,qh=new yh,gc=[],xc=[],vc=new Float32Array(16),_c=new Float32Array(9),Mc=new Float32Array(4);function as(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=gc[n];if(r===void 0&&(r=new Float32Array(n),gc[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Zr(s,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function b0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function E0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function T0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function A0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function R0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Mc.set(i),s.uniformMatrix2fv(this.addr,!1,Mc),Ye(e,i)}}function C0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;_c.set(i),s.uniformMatrix3fv(this.addr,!1,_c),Ye(e,i)}}function P0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;vc.set(i),s.uniformMatrix4fv(this.addr,!1,vc),Ye(e,i)}}function L0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function I0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function D0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function U0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function O0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function F0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function Kr(s){return s.version===0&&(s.compareFunction=ch,s.needsUpdate=!0),s}function k0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=Kr(Hh):r=Gh,e.setTexture2D(t||r,n)}function B0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Xh,n)}function G0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Kr(Vh):r=qh,e.setTextureCube(t||r,n)}function H0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Wh,n)}function V0(s){switch(s){case 5126:return b0;case 35664:return E0;case 35665:return T0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return L0;case 35667:case 35671:return I0;case 35668:case 35672:return D0;case 35669:case 35673:return N0;case 5125:return U0;case 36294:return O0;case 36295:return F0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return G0;case 36289:case 36303:case 36311:case 36292:return H0}}function W0(s,t){s.uniform1fv(this.addr,t)}function X0(s,t){const e=as(t,this.size,2);s.uniform2fv(this.addr,e)}function q0(s,t){const e=as(t,this.size,3);s.uniform3fv(this.addr,e)}function Y0(s,t){const e=as(t,this.size,4);s.uniform4fv(this.addr,e)}function $0(s,t){const e=as(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Z0(s,t){const e=as(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function K0(s,t){const e=as(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function J0(s,t){s.uniform1iv(this.addr,t)}function Q0(s,t){s.uniform2iv(this.addr,t)}function j0(s,t){s.uniform3iv(this.addr,t)}function tg(s,t){s.uniform4iv(this.addr,t)}function eg(s,t){s.uniform1uiv(this.addr,t)}function ig(s,t){s.uniform2uiv(this.addr,t)}function ng(s,t){s.uniform3uiv(this.addr,t)}function sg(s,t){s.uniform4uiv(this.addr,t)}function rg(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Kr(Hh):a=Gh;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function ag(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Xh,r[a])}function og(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Kr(Vh):a=qh;for(let o=0;o!==n;++o)e.setTextureCube(t[o]||a,r[o])}function lg(s,t,e){const i=this.cache,n=t.length,r=Zr(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Wh,r[a])}function cg(s){switch(s){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return Z0;case 35676:return K0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return j0;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ig;case 36295:return ng;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}class hg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=V0(e.type)}}class ug{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}}class dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function yc(s,t){s.seq.push(t),s.map[t.id]=t}function fg(s,t,e){const i=s.name,n=i.length;for(Pa.lastIndex=0;;){const r=Pa.exec(i),a=Pa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){yc(e,c===void 0?new hg(o,s,t):new ug(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new dg(o),yc(e,u)),e=u}}}class Lr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);fg(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function Sc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const pg=37297;let mg=0;function gg(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const wc=new Kt;function xg(s){fe._getMatrix(wc,fe.workingColorSpace,s);const t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(s)){case zr:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+gg(s.getShaderSource(t),o)}else return r}function vg(s,t){const e=xg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const _g={[$c]:"Linear",[Zc]:"Reinhard",[Kc]:"Cineon",[Oo]:"ACESFilmic",[Qc]:"AgX",[jc]:"Neutral",[Jc]:"Custom"};function Mg(s,t){const e=_g[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Sr=new P;function yg(){fe.getLuminanceCoefficients(Sr);const s=Sr.x.toFixed(4),t=Sr.y.toFixed(4),e=Sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function wg(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function bg(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ws(s){return s!==""}function Ec(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Tc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(s){return s.replace(Eg,Tg)}function Tg(s,t){const e=ne[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Co(e)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(s){return s.replace(Ag,Rg)}function Rg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Rc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const Cg={[Es]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function Pg(s){return Cg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lg={[Ls]:"ENVMAP_MODE_REFRACTION"};function Ig(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Lg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dg={[Yc]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[bu]:"ENVMAP_BLENDING_ADD"};function Ng(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Dg[s.combine]||"ENVMAP_BLENDING_NONE"}function Ug(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Pg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ig(e),u=Ng(e),f=Sg(e),d=wg(r),p=n.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ws).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ws).join(`
`),m.length>0&&(m+=`
`)):(x=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),m=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?ne.tonemapping_pars_fragment:"",e.toneMapping!==Wi?Mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),a=Co(a),a=Ec(a,e),a=Tc(a,e),o=Co(o),o=Ec(o,e),o=Tc(o,e),a=Ac(a),o=Ac(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=g+x+a,y=g+m+o,M=Sc(n,n.VERTEX_SHADER,_),T=Sc(n,n.FRAGMENT_SHADER,y);n.attachShader(p,M),n.attachShader(p,T),e.index0AttributeName!==void 0?n.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function E(R){if(s.debug.checkShaderErrors){const L=n.getProgramInfoLog(p)||"",B=n.getShaderInfoLog(M)||"",F=n.getShaderInfoLog(T)||"",C=L.trim(),O=B.trim(),G=F.trim();let z=!0,ot=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,M,T);else{const Y=bc(n,M,"vertex"),et=bc(n,T,"fragment");ge("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+Y+`
`+et)}else C!==""?qt("WebGLProgram: Program Info Log:",C):(O===""||G==="")&&(ot=!1);ot&&(R.diagnostics={runnable:z,programLog:C,vertexShader:{log:O,prefix:x},fragmentShader:{log:G,prefix:m}})}n.deleteShader(M),n.deleteShader(T),v=new Lr(n,p),b=bg(n,p)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=n.getProgramParameter(p,pg)),D},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}let Og=0;class Fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zg(t),e.set(t,i)),i}}class zg{constructor(t){this.id=Og++,this.code=t,this.usedTimes=0}}function kg(s){return s===bn||s===Ur||s===Or}function Bg(s,t,e,i,n,r){const a=new ph,o=new Fg,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,D,R,L,B){const F=R.fog,C=L.geometry,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,z=t.get(v.envMap||O,G),ot=f[v.type];let Y=i.precision;v.precision!==null&&(Y=i.getMaxPrecision(v.precision),Y!==v.precision&&qt("WebGLProgram.getParameters:",v.precision,"not supported, using",Y,"instead."));const et=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,rt=et!==void 0?et.length:0;let K=0;C.morphAttributes.position!==void 0&&(K=1),C.morphAttributes.normal!==void 0&&(K=2),C.morphAttributes.color!==void 0&&(K=3);let it,W,ct,Ct;if(ot){const At=Pi[ot];it=At.vertexShader,W=At.fragmentShader}else{it=v.vertexShader,W=v.fragmentShader;const At=o.getVertexShaderStage(v),be=o.getFragmentShaderStage(v);o.update(v,At,be),ct=At.id,Ct=be.id}const Ot=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,ve=L.isBatchedMesh===!0,Vt=!!v.map,jt=!!v.matcap,ee=!!z,st=ee&&z.isPMREMTexture===!0,mt=!!v.aoMap,pt=!!v.lightMap,It=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,Qt=!!v.displacementMap,Bt=!!v.emissiveMap,ae=!!v.metalnessMap,he=!!v.roughnessMap,_e=v.anisotropy>0,U=v.clearcoat>0,ke=v.diffuseRoughness>0,se=v.dispersion>0,Te=v.retroreflectivity>0,wt=v.iridescence>0,Oe=v.sheen>0,Xt=v.transmission>0,Zt=_e&&!!v.anisotropyMap,A=U&&!!v.clearcoatMap,S=U&&!!v.clearcoatNormalMap,V=U&&!!v.clearcoatRoughnessMap,ht=ke&&!!v.diffuseRoughnessMap,at=wt&&!!v.iridescenceMap,xt=wt&&!!v.iridescenceThicknessMap,bt=Oe&&!!v.sheenColorMap,j=Oe&&!!v.sheenRoughnessMap,tt=!!v.specularMap,_t=!!v.specularColorMap,I=!!v.specularIntensityMap,nt=Xt&&!!v.transmissionMap,J=Xt&&!!v.thicknessMap,Mt=!!v.gradientMap,ft=!!v.alphaMap,vt=v.alphaTest>0,Gt=!!v.alphaHash,ie=!!v.extensions;let ut=Wi;v.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(ut=s.toneMapping);const Wt=st?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,te={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:W,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:Ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:Y,batching:ve,batchingColor:ve&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,outputColorSpace:Ot===null?s.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:jt,envMap:ee,envMapMode:ee&&z.mapping,envMapPMREM:st,envMapMaxLod:st?Wt.length-1:null,envMapSize:st?Wt[0].width:null,aoMap:mt,lightMap:pt,bumpMap:It,normalMap:yt,displacementMap:Qt,emissiveMap:Bt,normalMapObjectSpace:yt&&v.normalMapType===Au,normalMapTangentSpace:yt&&v.normalMapType===yo,packedNormalMap:yt&&v.normalMapType===yo&&kg(v.normalMap.format),metalnessMap:ae,roughnessMap:he,anisotropy:_e,anisotropyMap:Zt,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:V,diffuseRoughness:ke,diffuseRoughnessMap:ht,dispersion:se,retroreflection:Te,iridescence:wt,iridescenceMap:at,iridescenceThicknessMap:xt,sheen:Oe,sheenColorMap:bt,sheenRoughnessMap:j,specularMap:tt,specularColorMap:_t,specularIntensityMap:I,transmission:Xt,transmissionMap:nt,thicknessMap:J,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===yn&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:vt,alphaHash:Gt,combine:v.combine,mapUv:Vt&&d(v.map.channel),aoMapUv:mt&&d(v.aoMap.channel),lightMapUv:pt&&d(v.lightMap.channel),bumpMapUv:It&&d(v.bumpMap.channel),normalMapUv:yt&&d(v.normalMap.channel),displacementMapUv:Qt&&d(v.displacementMap.channel),emissiveMapUv:Bt&&d(v.emissiveMap.channel),metalnessMapUv:ae&&d(v.metalnessMap.channel),roughnessMapUv:he&&d(v.roughnessMap.channel),anisotropyMapUv:Zt&&d(v.anisotropyMap.channel),clearcoatMapUv:A&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:at&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:j&&d(v.sheenRoughnessMap.channel),specularMapUv:tt&&d(v.specularMap.channel),specularColorMapUv:_t&&d(v.specularColorMap.channel),specularIntensityMapUv:I&&d(v.specularIntensityMap.channel),transmissionMapUv:nt&&d(v.transmissionMap.channel),thicknessMapUv:J&&d(v.thicknessMap.channel),alphaMapUv:ft&&d(v.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(yt||_e),vertexNormals:!!C.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!C.attributes.uv&&(Vt||ft),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||C.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Tt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:K,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&fe.getTransfer(v.map.colorSpace)===Ee,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&fe.getTransfer(v.emissiveMap.colorSpace)===Ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Si,flipSided:v.side===li,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||ve)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return te.vertexUv1s=l.has(1),te.vertexUv2s=l.has(2),te.vertexUv3s=l.has(3),l.clear(),te}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(m(b,v),g(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){const b=f[v.type];let D;if(b){const R=Pi[b];D=of.clone(R.uniforms)}else D=v.uniforms;return D}function y(v,b){let D=h.get(b);return D!==void 0?++D.usedTimes:(D=new Ug(s,b,v,n),c.push(D),h.set(b,D)),D}function M(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:E}}function Gg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Hg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Cc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pc(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,x,m,g){let _=s[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=a(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=m,_.group=g),t++,_}function l(f,d,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);const y=o(f,d,p,x,m,g);p.transmission>0?i.push(y):p.transparent===!0?n.push(y):e.push(y)}function c(f,d,p,x,m,g){const _=o(f,d,p,x,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||Hg),i.length>1&&i.sort(d||Cc),n.length>1&&n.sort(d||Cc)}function u(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:u,sort:h}}function Vg(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Pc,s.set(i,[a])):n>=r.length?(a=new Pc,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Wg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new kt};break;case"SpotLight":e={position:new P,direction:new P,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let qg=0;function Yg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $g(s){const t=new Wg,e=Xg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const n=new P,r=new xe,a=new xe;function o(c){let h=0,u=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,_=0,y=0,M=0,T=0,E=0,v=0,b=0,D=0,R=0;c.sort(Yg);for(let B=0,F=c.length;B<F;B++){const C=c[B],O=C.color,G=C.intensity,z=C.distance;let ot=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===bn?ot=C.shadow.map.texture:ot=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=O.r*G,u+=O.g*G,f+=O.b*G;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],G);R++}else if(C.isSunLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const et=C.shadow,rt=e.get(C);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[p]=rt,i.sunShadowMap[p]=ot;const K=et.getViewportCount();for(let it=0;it<K;it++)i.sunShadowMatrix[x+it]=et.getMatrix(it),i.sunShadowCascade[x+it]=et._cascadeData[it];x+=K,p++}i.sun[d]=Y,d++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const et=C.shadow,rt=e.get(C);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=ot,i.directionalShadowMatrix[m]=C.shadow.matrix,T++}i.directional[m]=Y,m++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(O).multiplyScalar(G),Y.distance=z,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[_]=Y;const et=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,et.updateMatrices(C),C.castShadow&&D++),i.spotLightMatrix[_]=et.matrix,C.castShadow){const rt=e.get(C);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,i.spotShadow[_]=rt,i.spotShadowMap[_]=ot,v++}_++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(O).multiplyScalar(G),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[y]=Y,y++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const et=C.shadow,rt=e.get(C);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,rt.shadowCameraNear=et.camera.near,rt.shadowCameraFar=et.camera.far,i.pointShadow[g]=rt,i.pointShadowMap[g]=ot,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=Y,g++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(G),Y.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[M]=Y,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==y||L.hemiLength!==M||L.numSunShadows!==p||L.numDirectionalShadows!==T||L.numPointShadows!==E||L.numSpotShadows!==v||L.numSpotMaps!==b||L.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=_,i.rectArea.length=y,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+b-D,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=_,L.rectAreaLength=y,L.hemiLength=M,L.numSunShadows=p,L.numDirectionalShadows=T,L.numPointShadows=E,L.numSpotShadows=v,L.numSpotMaps=b,L.numLightProbes=R,i.version=qg++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const M=c[_];if(M.isSunLight){const T=i.sun[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),u++}else if(M.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(g),f++}else if(M.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Lc(s){const t=new $g(s),e=[],i=[],n=[];function r(u){h.camera=u,e.length=0,i.length=0,n.length=0}function a(u){u.isLightProbeGrid?n.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),n.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Zg(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Lc(s),t.set(n,[o])):r>=a.length?(o=new Lc(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`,Qg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],jg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ic=new xe,_s=new P,La=new P;function tx(s,t,e){let i=new Us;const n=new lt,r=new lt,a=new Ne,o=new uf,l=new df,c={},h=e.maxTextureSize,u={[wn]:li,[li]:wn,[Si]:Si},f=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Kg,fragmentShader:Jg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new Pe;p.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new k(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let g=this.type;this.render=function(E,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===su&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Es);const D=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Zn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=g!==this.type;F&&v.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(O=>O.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,O=E.length;C<O;C++){const G=E[C],z=G.shadow;if(z===void 0){qt("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const ot=z.getFrameExtents();n.multiply(ot),r.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ot.x),n.x=r.x*ot.x,z.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ot.y),n.y=r.y*ot.y,z.mapSize.y=r.y));const Y=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ys){if(G.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ii(n.x,n.y,{format:bn,type:Ni,minFilter:ui,magFilter:ui,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new es(n.x,n.y,bi),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=cn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Qe,z.map.depthTexture.magFilter=Qe}else G.isPointLight?(z.map=new nl(n.x),z.map.depthTexture=new Sh(n.x,Di)):(z.map=new Ii(n.x,n.y),z.map.depthTexture=new es(n.x,n.y,Di)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=cn,this.type===Es?(z.map.depthTexture.compareFunction=Y?lh:oh,z.map.depthTexture.minFilter=ui,z.map.depthTexture.magFilter=ui):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Qe,z.map.depthTexture.magFilter=Qe);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==n.x||z.map.height!==n.y)&&z.map.setSize(n.x,n.y);const et=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,b);const rt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let K=0;K<et;K++){const it=z.getCamera(K);if(G.isPointLight){const W=z.camera,ct=z.matrix,Ct=G.distance||W.far;Ct!==W.far&&(W.far=Ct,W.updateProjectionMatrix()),_s.setFromMatrixPosition(G.matrixWorld),W.position.copy(_s),La.copy(W.position),La.add(Qg[K]),W.up.copy(jg[K]),W.lookAt(La),W.updateMatrixWorld(),ct.makeTranslation(-_s.x,-_s.y,-_s.z),Ic.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ic,W.coordinateSystem,W.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,K),s.clear();else{K===0&&(s.setRenderTarget(z.map),s.clear());const W=z.getViewport(K);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),B.viewport(a)}i=z.getFrustum(K),M(v,b,it,G,rt,this.type)}z.isPointLightShadow!==!0&&this.type===ys&&_(z,b),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(D,R,L)};function _(E,v){const b=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ii(n.x,n.y,{format:bn,type:Ni}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(v,null,b,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(v,null,b,d,x,null)}function y(E,v,b,D){let R=null;const L=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=b.isPointLight===!0?l:o,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const B=R.uuid,F=v.uuid;let C=c[B];C===void 0&&(C={},c[B]=C);let O=C[F];O===void 0&&(O=R.clone(),C[F]=O,v.addEventListener("dispose",T)),R=O}if(R.visible=v.visible,R.wireframe=v.wireframe,D===ys?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:u[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const B=s.properties.get(R);B.light=b}return R}function M(E,v,b,D,R,L){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===ys)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const C=t.update(E),O=E.material;if(Array.isArray(O)){const G=C.groups;for(let z=0,ot=G.length;z<ot;z++){const Y=G[z],et=O[Y.materialIndex];if(et&&et.visible){const rt=y(E,et,D,L);E.onBeforeShadow(s,E,v,b,C,rt,Y),s.renderBufferDirect(b,null,C,rt,E,Y),E.onAfterShadow(s,E,v,b,C,rt,Y)}}}else if(O.visible){const G=y(E,O,D,L);E.onBeforeShadow(s,E,v,b,C,G,null),s.renderBufferDirect(b,null,C,G,E,null),E.onAfterShadow(s,E,v,b,C,G,null)}}const F=E.children;for(let C=0,O=F.length;C<O;C++)M(F[C],v,b,D,R,L)}function T(E){E.target.removeEventListener("dispose",T);for(const b in c){const D=c[b],R=E.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function ex(s,t){function e(){let I=!1;const nt=new Ne;let J=null;const Mt=new Ne(0,0,0,0);return{setMask:function(ft){J!==ft&&!I&&(s.colorMask(ft,ft,ft,ft),J=ft)},setLocked:function(ft){I=ft},setClear:function(ft,vt,Gt,ie,ut){ut===!0&&(ft*=ie,vt*=ie,Gt*=ie),nt.set(ft,vt,Gt,ie),Mt.equals(nt)===!1&&(s.clearColor(ft,vt,Gt,ie),Mt.copy(nt))},reset:function(){I=!1,J=null,Mt.set(-1,0,0,0)}}}function i(){let I=!1,nt=!1,J=null,Mt=null,ft=null;return{setReversed:function(vt){if(nt!==vt){const Gt=t.get("EXT_clip_control");vt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),nt=vt;const ie=ft;ft=null,this.setClear(ie)}},getReversed:function(){return nt},setTest:function(vt){vt?Tt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(vt){J!==vt&&!I&&(s.depthMask(vt),J=vt)},setFunc:function(vt){if(nt&&(vt=zu[vt]),Mt!==vt){switch(vt){case Oa:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case za:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case ka:s.depthFunc(s.EQUAL);break;case Ba:s.depthFunc(s.GEQUAL);break;case Ga:s.depthFunc(s.GREATER);break;case Ha:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=vt}},setLocked:function(vt){I=vt},setClear:function(vt){ft!==vt&&(ft=vt,nt&&(vt=1-vt),s.clearDepth(vt))},reset:function(){I=!1,J=null,Mt=null,ft=null,nt=!1}}}function n(){let I=!1,nt=null,J=null,Mt=null,ft=null,vt=null,Gt=null,ie=null,ut=null;return{setTest:function(Wt){I||(Wt?Tt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(Wt){nt!==Wt&&!I&&(s.stencilMask(Wt),nt=Wt)},setFunc:function(Wt,te,At){(J!==Wt||Mt!==te||ft!==At)&&(s.stencilFunc(Wt,te,At),J=Wt,Mt=te,ft=At)},setOp:function(Wt,te,At){(vt!==Wt||Gt!==te||ie!==At)&&(s.stencilOp(Wt,te,At),vt=Wt,Gt=te,ie=At)},setLocked:function(Wt){I=Wt},setClear:function(Wt){ut!==Wt&&(s.clearStencil(Wt),ut=Wt)},reset:function(){I=!1,nt=null,J=null,Mt=null,ft=null,vt=null,Gt=null,ie=null,ut=null}}}const r=new e,a=new i,o=new n;let l={};const c=new WeakMap;let h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,_=null,y=null,M=null,T=null,E=null,v=null,b=new kt(0,0,0),D=0,R=!1,L=null,B=null,F=null,C=null,O=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ot=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=ot>=1):Y.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=ot>=2);let et=null,rt={};const K=s.getParameter(s.SCISSOR_BOX),it=s.getParameter(s.VIEWPORT),W=new Ne().fromArray(K),ct=new Ne().fromArray(it);function Ct(I,nt,J,Mt){const ft=new Uint8Array(4),vt=s.createTexture();s.bindTexture(I,vt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<J;Gt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,Mt,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(nt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return vt}const Ot={};Ot[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Ot[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ot[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Tt(s.DEPTH_TEST),a.setFunc(Ps),It(!1),yt(Ml),Tt(s.CULL_FACE),mt(Zn);function Tt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ft(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function ve(I,nt){return f[I]!==nt?(s.bindFramebuffer(I,nt),f[I]=nt,I===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=nt),I===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Vt(I,nt){let J=p,Mt=!1;if(I){J=d.get(nt),J===void 0&&(J=[],d.set(nt,J));const ft=I.textures;if(J.length!==ft.length||J[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Gt=ft.length;vt<Gt;vt++)J[vt]=s.COLOR_ATTACHMENT0+vt;J.length=ft.length,Mt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,Mt=!0);Mt&&s.drawBuffers(J)}function jt(I){return x!==I?(s.useProgram(I),x=I,!0):!1}const ee={[qn]:s.FUNC_ADD,[au]:s.FUNC_SUBTRACT,[ou]:s.FUNC_REVERSE_SUBTRACT};ee[lu]=s.MIN,ee[cu]=s.MAX;const st={[hu]:s.ZERO,[uu]:s.ONE,[du]:s.SRC_COLOR,[Xc]:s.SRC_ALPHA,[vu]:s.SRC_ALPHA_SATURATE,[gu]:s.DST_COLOR,[pu]:s.DST_ALPHA,[fu]:s.ONE_MINUS_SRC_COLOR,[qc]:s.ONE_MINUS_SRC_ALPHA,[xu]:s.ONE_MINUS_DST_COLOR,[mu]:s.ONE_MINUS_DST_ALPHA,[_u]:s.CONSTANT_COLOR,[Mu]:s.ONE_MINUS_CONSTANT_COLOR,[yu]:s.CONSTANT_ALPHA,[Su]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(I,nt,J,Mt,ft,vt,Gt,ie,ut,Wt){if(I===Zn){m===!0&&(Ft(s.BLEND),m=!1);return}if(m===!1&&(Tt(s.BLEND),m=!0),I!==ru){if(I!==g||Wt!==R){if((_!==qn||T!==qn)&&(s.blendEquation(s.FUNC_ADD),_=qn,T=qn),Wt)switch(I){case yn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qi:s.blendFunc(s.ONE,s.ONE);break;case yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ge("WebGLState: Invalid blending: ",I);break}else switch(I){case yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case yl:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",I);break}y=null,M=null,E=null,v=null,b.set(0,0,0),D=0,g=I,R=Wt}return}ft=ft||nt,vt=vt||J,Gt=Gt||Mt,(nt!==_||ft!==T)&&(s.blendEquationSeparate(ee[nt],ee[ft]),_=nt,T=ft),(J!==y||Mt!==M||vt!==E||Gt!==v)&&(s.blendFuncSeparate(st[J],st[Mt],st[vt],st[Gt]),y=J,M=Mt,E=vt,v=Gt),(ie.equals(b)===!1||ut!==D)&&(s.blendColor(ie.r,ie.g,ie.b,ut),b.copy(ie),D=ut),g=I,R=!1}function pt(I,nt){I.side===Si?Ft(s.CULL_FACE):Tt(s.CULL_FACE);let J=I.side===li;nt&&(J=!J),It(J),I.blending===yn&&I.transparent===!1?mt(Zn):mt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Mt=I.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(I){L!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),L=I)}function yt(I){I!==iu?(Tt(s.CULL_FACE),I!==B&&(I===Ml?s.cullFace(s.BACK):I===nu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),B=I}function Qt(I){I!==F&&(z&&s.lineWidth(I),F=I)}function Bt(I,nt,J){I?(Tt(s.POLYGON_OFFSET_FILL),(C!==nt||O!==J)&&(C=nt,O=J,a.getReversed()&&(nt=-nt,J=-J),s.polygonOffset(nt,J))):Ft(s.POLYGON_OFFSET_FILL)}function ae(I){I?Tt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function he(I){I===void 0&&(I=s.TEXTURE0+G-1),et!==I&&(s.activeTexture(I),et=I)}function _e(I,nt,J){J===void 0&&(et===null?J=s.TEXTURE0+G-1:J=et);let Mt=rt[J];Mt===void 0&&(Mt={type:void 0,texture:void 0},rt[J]=Mt),(Mt.type!==I||Mt.texture!==nt)&&(et!==J&&(s.activeTexture(J),et=J),s.bindTexture(I,nt||Ot[I]),Mt.type=I,Mt.texture=nt)}function U(){const I=rt[et];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ke(){try{s.compressedTexImage2D(...arguments)}catch(I){ge("WebGLState:",I)}}function se(){try{s.compressedTexImage3D(...arguments)}catch(I){ge("WebGLState:",I)}}function Te(){try{s.texSubImage2D(...arguments)}catch(I){ge("WebGLState:",I)}}function wt(){try{s.texSubImage3D(...arguments)}catch(I){ge("WebGLState:",I)}}function Oe(){try{s.compressedTexSubImage2D(...arguments)}catch(I){ge("WebGLState:",I)}}function Xt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){ge("WebGLState:",I)}}function Zt(){try{s.texStorage2D(...arguments)}catch(I){ge("WebGLState:",I)}}function A(){try{s.texStorage3D(...arguments)}catch(I){ge("WebGLState:",I)}}function S(){try{s.texImage2D(...arguments)}catch(I){ge("WebGLState:",I)}}function V(){try{s.texImage3D(...arguments)}catch(I){ge("WebGLState:",I)}}function ht(I){return u[I]!==void 0?u[I]:s.getParameter(I)}function at(I,nt){u[I]!==nt&&(s.pixelStorei(I,nt),u[I]=nt)}function xt(I){W.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function bt(I){ct.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ct.copy(I))}function j(I,nt){let J=c.get(nt);J===void 0&&(J=new WeakMap,c.set(nt,J));let Mt=J.get(I);Mt===void 0&&(Mt=s.getUniformBlockIndex(nt,I.name),s.uniformBlockBinding(nt,Mt,Mt),J.set(I,Mt))}function tt(I,nt,J){const ft=c.get(nt).get(I);l[ft]!==J&&(s.bindBufferBase(s.UNIFORM_BUFFER,ft,J),l[ft]=J)}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,rt={},f={},l={},d=new WeakMap,p=[],x=null,m=!1,g=null,_=null,y=null,M=null,T=null,E=null,v=null,b=new kt(0,0,0),D=0,R=!1,L=null,B=null,F=null,C=null,O=null,W.set(0,0,s.canvas.width,s.canvas.height),ct.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Tt,disable:Ft,bindFramebuffer:ve,drawBuffers:Vt,useProgram:jt,setBlending:mt,setMaterial:pt,setFlipSided:It,setCullFace:yt,setLineWidth:Qt,setPolygonOffset:Bt,setScissorTest:ae,activeTexture:he,bindTexture:_e,unbindTexture:U,compressedTexImage2D:ke,compressedTexImage3D:se,texImage2D:S,texImage3D:V,pixelStorei:at,getParameter:ht,updateUBOMapping:j,uniformBlockBinding:tt,texStorage2D:Zt,texStorage3D:A,texSubImage2D:Te,texSubImage3D:wt,compressedTexSubImage2D:Oe,compressedTexSubImage3D:Xt,scissor:xt,viewport:bt,reset:_t}}function ix(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,u=new Set;let f;const d=new WeakMap,p=new Set,x=new FinalizationRegistry(A=>p.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):kr("canvas")}function _(A,S,V){let ht=1;const at=Zt(A);if((at.width>V||at.height>V)&&(ht=V/Math.max(at.width,at.height)),ht<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const xt=Math.floor(ht*at.width),bt=Math.floor(ht*at.height);f===void 0&&(f=g(xt,bt));const j=S?g(xt,bt):f;return j.width=xt,j.height=bt,j.getContext("2d").drawImage(A,0,0,xt,bt),qt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+xt+"x"+bt+")."),j}else return"data"in A&&qt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function y(A){return A.generateMipmaps}function M(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,S,V,ht,at,xt=!1){if(A!==null){if(s[A]!==void 0)return s[A];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let bt;ht&&(bt=t.get("EXT_texture_norm16"),bt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===s.RED&&(V===s.FLOAT&&(j=s.R32F),V===s.HALF_FLOAT&&(j=s.R16F),V===s.UNSIGNED_BYTE&&(j=s.R8),V===s.UNSIGNED_SHORT&&bt&&(j=bt.R16_EXT),V===s.SHORT&&bt&&(j=bt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.R8UI),V===s.UNSIGNED_SHORT&&(j=s.R16UI),V===s.UNSIGNED_INT&&(j=s.R32UI),V===s.BYTE&&(j=s.R8I),V===s.SHORT&&(j=s.R16I),V===s.INT&&(j=s.R32I)),S===s.RG&&(V===s.FLOAT&&(j=s.RG32F),V===s.HALF_FLOAT&&(j=s.RG16F),V===s.UNSIGNED_BYTE&&(j=s.RG8),V===s.UNSIGNED_SHORT&&bt&&(j=bt.RG16_EXT),V===s.SHORT&&bt&&(j=bt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.RG8UI),V===s.UNSIGNED_SHORT&&(j=s.RG16UI),V===s.UNSIGNED_INT&&(j=s.RG32UI),V===s.BYTE&&(j=s.RG8I),V===s.SHORT&&(j=s.RG16I),V===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.RGB8UI),V===s.UNSIGNED_SHORT&&(j=s.RGB16UI),V===s.UNSIGNED_INT&&(j=s.RGB32UI),V===s.BYTE&&(j=s.RGB8I),V===s.SHORT&&(j=s.RGB16I),V===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),V===s.UNSIGNED_INT&&(j=s.RGBA32UI),V===s.BYTE&&(j=s.RGBA8I),V===s.SHORT&&(j=s.RGBA16I),V===s.INT&&(j=s.RGBA32I)),S===s.RGB&&(V===s.UNSIGNED_SHORT&&bt&&(j=bt.RGB16_EXT),V===s.SHORT&&bt&&(j=bt.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),S===s.RGBA){const tt=xt?zr:fe.getTransfer(at);V===s.FLOAT&&(j=s.RGBA32F),V===s.HALF_FLOAT&&(j=s.RGBA16F),V===s.UNSIGNED_BYTE&&(j=tt===Ee?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&bt&&(j=bt.RGBA16_EXT),V===s.SHORT&&bt&&(j=bt.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(A,S){let V;return A?S===null||S===Di||S===ts?V=s.DEPTH24_STENCIL8:S===bi?V=s.DEPTH32F_STENCIL8:S===Is&&(V=s.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Di||S===ts?V=s.DEPTH_COMPONENT24:S===bi?V=s.DEPTH_COMPONENT32F:S===Is&&(V=s.DEPTH_COMPONENT16),V}function b(A,S){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qe&&A.minFilter!==ui?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function D(A){const S=new WeakRef(A);i.get(A).__ref=S,p.add(S),x.register(A,S,S)}function R(A){const S=i.get(A).__ref;S!==void 0&&(p.delete(S),x.unregister(S))}function L(A){F(A.target)}function B(A){C(A.target)}function F(A){A.removeEventListener("dispose",L),R(A),G(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function C(A){A.removeEventListener("dispose",B),R(A),ot(A)}function O(){for(const A of p){const S=A.deref();S!==void 0&&(S.isRenderTarget===!0?C(S):F(S))}p.clear(),u.clear()}function G(A){const S=i.get(A);if(S.__webglInit===void 0)return;const V=A.source,ht=d.get(V);if(ht){const at=ht[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&z(A),Object.keys(ht).length===0&&d.delete(V)}i.remove(A)}function z(A){const S=i.get(A);s.deleteTexture(S.__webglTexture);const V=A.source,ht=d.get(V);delete ht[S.__cacheKey],a.memory.textures--}function ot(A){const S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();const V=A.depthTexture;if(V&&V.renderTarget===A&&F(V),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(S.__webglFramebuffer[at]))for(let xt=0;xt<S.__webglFramebuffer[at].length;xt++)s.deleteFramebuffer(S.__webglFramebuffer[at][xt]);else s.deleteFramebuffer(S.__webglFramebuffer[at]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[at])}else{if(Array.isArray(S.__webglFramebuffer))for(let at=0;at<S.__webglFramebuffer.length;at++)s.deleteFramebuffer(S.__webglFramebuffer[at]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let at=0;at<S.__webglColorRenderbuffer.length;at++)S.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[at]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ht=A.textures;for(let at=0,xt=ht.length;at<xt;at++){const bt=i.get(ht[at]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),a.memory.textures--),i.remove(ht[at])}i.remove(A)}let Y=0;function et(){Y=0}function rt(){return Y}function K(A){Y=A}function it(){const A=Y;return A>=n.maxTextures&&qt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),Y+=1,A}function W(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ct(A,S){const V=i.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const ht=A.image;if(ht===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(V,A,S);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function Ct(A,S){const V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){pt(V,A,S);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function Ot(A,S){const V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){pt(V,A,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function Tt(A,S){const V=i.get(A);if(A.version>0&&V.__version!==A.version){It(V,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const Ft={[Nr]:s.REPEAT,[Vi]:s.CLAMP_TO_EDGE,[Va]:s.MIRRORED_REPEAT},ve={[Qe]:s.NEAREST,[Eu]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[ui]:s.LINEAR,[ia]:s.LINEAR_MIPMAP_NEAREST,[sn]:s.LINEAR_MIPMAP_LINEAR},Vt={[Cu]:s.NEVER,[ch]:s.ALWAYS,[Pu]:s.LESS,[oh]:s.LEQUAL,[Lu]:s.EQUAL,[lh]:s.GEQUAL,[Iu]:s.GREATER,[Du]:s.NOTEQUAL};function jt(A,S){if(S.type===bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ui||S.magFilter===ia||S.magFilter===Xs||S.magFilter===sn||S.minFilter===ui||S.minFilter===ia||S.minFilter===Xs||S.minFilter===sn)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ft[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ft[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ft[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ve[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ve[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qe||S.minFilter!==Xs&&S.minFilter!==sn||S.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ee(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",L),D(S));const ht=S.source;let at=d.get(ht);at===void 0&&(at={},d.set(ht,at));const xt=W(S);if(xt!==A.__cacheKey){at[xt]===void 0&&(at[xt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),at[xt].usedTimes++;const bt=at[A.__cacheKey];bt!==void 0&&(at[A.__cacheKey].usedTimes--,bt.usedTimes===0&&z(S)),A.__cacheKey=xt,A.__webglTexture=at[xt].texture}return V}function st(A,S,V){return Math.floor(Math.floor(A/V)/S)}function mt(A,S,V,ht){const xt=A.updateRanges;if(xt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,V,ht,S.data);else{xt.sort((I,nt)=>I.start-nt.start);let bt=0;for(let I=1;I<xt.length;I++){const nt=xt[bt],J=xt[I],Mt=nt.start+nt.count,ft=st(J.start,S.width,4),vt=st(nt.start,S.width,4);J.start<=Mt+1&&ft===vt&&st(J.start+J.count-1,S.width,4)===ft?nt.count=Math.max(nt.count,J.start+J.count-nt.start):(++bt,xt[bt]=J)}xt.length=bt+1;const j=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),_t=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let I=0,nt=xt.length;I<nt;I++){const J=xt[I],Mt=Math.floor(J.start/4),ft=Math.ceil(J.count/4),vt=Mt%S.width,Gt=Math.floor(Mt/S.width),ie=ft,ut=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(s.TEXTURE_2D,0,vt,Gt,ie,ut,V,ht,S.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,_t)}}function pt(A,S,V){let ht=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ht=s.TEXTURE_3D);const at=ee(A,S),xt=S.source;e.bindTexture(ht,A.__webglTexture,s.TEXTURE0+V);const bt=i.get(xt);if(xt.version!==bt.__version||at===!0){if(e.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ut=fe.getPrimaries(fe.workingColorSpace),Wt=S.colorSpace===nn?null:fe.getPrimaries(S.colorSpace),te=S.colorSpace===nn||ut===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=_(S.image,!1,n.maxTextureSize);tt=Xt(S,tt);const _t=r.convert(S.format,S.colorSpace),I=r.convert(S.type);let nt=E(S.internalFormat,_t,I,S.normalized,S.colorSpace,S.isVideoTexture);jt(ht,S);let J;const Mt=S.mipmaps,ft=S.isVideoTexture!==!0,vt=bt.__version===void 0||at===!0,Gt=xt.dataReady,ie=b(S,tt);if(S.isDepthTexture)nt=v(S.format===rn,S.type),vt&&(ft?e.texStorage2D(s.TEXTURE_2D,1,nt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,nt,tt.width,tt.height,0,_t,I,null));else if(S.isDataTexture)if(Mt.length>0){ft&&vt&&e.texStorage2D(s.TEXTURE_2D,ie,nt,Mt[0].width,Mt[0].height);for(let ut=0,Wt=Mt.length;ut<Wt;ut++)J=Mt[ut],ft?Gt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,_t,I,J.data):e.texImage2D(s.TEXTURE_2D,ut,nt,J.width,J.height,0,_t,I,J.data);S.generateMipmaps=!1}else ft?(vt&&e.texStorage2D(s.TEXTURE_2D,ie,nt,tt.width,tt.height),Gt&&mt(S,tt,_t,I)):e.texImage2D(s.TEXTURE_2D,0,nt,tt.width,tt.height,0,_t,I,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ft&&vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ie,nt,Mt[0].width,Mt[0].height,tt.depth);for(let ut=0,Wt=Mt.length;ut<Wt;ut++)if(J=Mt[ut],S.format!==Li)if(_t!==null)if(ft){if(Gt)if(S.layerUpdates.size>0){const te=uc(J.width,J.height,S.format,S.type);for(const At of S.layerUpdates){const be=J.data.subarray(At*te/J.data.BYTES_PER_ELEMENT,(At+1)*te/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,At,J.width,J.height,1,_t,be)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,tt.depth,_t,J.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,nt,J.width,J.height,tt.depth,0,J.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Gt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,tt.depth,_t,I,J.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,nt,J.width,J.height,tt.depth,0,_t,I,J.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ft&&vt&&e.texStorage2D(s.TEXTURE_2D,ie,nt,Mt[0].width,Mt[0].height);for(let ut=0,Wt=Mt.length;ut<Wt;ut++)J=Mt[ut],S.format!==Li?_t!==null?ft?Gt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,_t,J.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,nt,J.width,J.height,0,J.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Gt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,J.width,J.height,_t,I,J.data):e.texImage2D(s.TEXTURE_2D,ut,nt,J.width,J.height,0,_t,I,J.data)}else if(S.isDataArrayTexture)if(ft){if(vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ie,nt,tt.width,tt.height,tt.depth),Gt)if(S.layerUpdates.size>0){const ut=uc(tt.width,tt.height,S.format,S.type);for(const Wt of S.layerUpdates){const te=tt.data.subarray(Wt*ut/tt.data.BYTES_PER_ELEMENT,(Wt+1)*ut/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Wt,tt.width,tt.height,1,_t,I,te)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,I,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,tt.width,tt.height,tt.depth,0,_t,I,tt.data);else if(S.isData3DTexture)ft?(vt&&e.texStorage3D(s.TEXTURE_3D,ie,nt,tt.width,tt.height,tt.depth),Gt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,I,tt.data)):e.texImage3D(s.TEXTURE_3D,0,nt,tt.width,tt.height,tt.depth,0,_t,I,tt.data);else if(S.isFramebufferTexture){if(vt)if(ft)e.texStorage2D(s.TEXTURE_2D,ie,nt,tt.width,tt.height);else{let ut=tt.width,Wt=tt.height;for(let te=0;te<ie;te++)e.texImage2D(s.TEXTURE_2D,te,nt,ut,Wt,0,_t,I,null),ut>>=1,Wt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const ut=s.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),tt.parentNode!==ut){ut.appendChild(tt),u.add(S),ut.onpaint=Wt=>{const te=Wt.changedElements;for(const At of u)te.includes(At.image)&&(At.needsUpdate=!0)},ut.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{const te=s.RGBA,At=s.RGBA,be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,te,At,be,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(ft&&vt){const ut=Zt(Mt[0]);e.texStorage2D(s.TEXTURE_2D,ie,nt,ut.width,ut.height)}for(let ut=0,Wt=Mt.length;ut<Wt;ut++)J=Mt[ut],ft?Gt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,_t,I,J):e.texImage2D(s.TEXTURE_2D,ut,nt,_t,I,J);S.generateMipmaps=!1}else if(ft){if(vt){const ut=Zt(tt);e.texStorage2D(s.TEXTURE_2D,ie,nt,ut.width,ut.height)}Gt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,I,tt)}else e.texImage2D(s.TEXTURE_2D,0,nt,_t,I,tt);y(S)&&S.mipmapsAutoUpdate===!0&&M(ht),bt.__version=xt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function It(A,S,V){if(S.image.length!==6)return;const ht=ee(A,S),at=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+V);const xt=i.get(at);if(at.version!==xt.__version||ht===!0){e.activeTexture(s.TEXTURE0+V);const bt=fe.getPrimaries(fe.workingColorSpace),j=S.colorSpace===nn?null:fe.getPrimaries(S.colorSpace),tt=S.colorSpace===nn||bt===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const _t=S.isCompressedTexture||S.image[0].isCompressedTexture,I=S.image[0]&&S.image[0].isDataTexture,nt=[];for(let At=0;At<6;At++)!_t&&!I?nt[At]=_(S.image[At],!0,n.maxCubemapSize):nt[At]=I?S.image[At].image:S.image[At],nt[At]=Xt(S,nt[At]);const J=nt[0],Mt=r.convert(S.format,S.colorSpace),ft=r.convert(S.type);let vt=E(S.internalFormat,Mt,ft,S.normalized,S.colorSpace);const Gt=S.isVideoTexture!==!0,ie=xt.__version===void 0||ht===!0,ut=at.dataReady;let Wt=b(S,J);jt(s.TEXTURE_CUBE_MAP,S);let te;if(S.isDepthTexture){if(vt=v(S.format===rn,S.type),ie)if(Gt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,vt,J.width,J.height);else for(let At=0;At<6;At++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,vt,J.width,J.height,0,Mt,ft,null)}else if(_t){Gt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,vt,J.width,J.height);for(let At=0;At<6;At++){te=nt[At].mipmaps;for(let be=0;be<te.length;be++){const $e=te[be];S.format!==Li?Mt!==null?Gt?ut&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be,0,0,$e.width,$e.height,Mt,$e.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be,vt,$e.width,$e.height,0,$e.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be,0,0,$e.width,$e.height,Mt,ft,$e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be,vt,$e.width,$e.height,0,Mt,ft,$e.data)}}}else{if(te=S.mipmaps,Gt&&ie){te.length>0&&Wt++;const At=Zt(nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,vt,At.width,At.height)}for(let At=0;At<6;At++)if(I){Gt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,nt[At].width,nt[At].height,Mt,ft,nt[At].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,vt,nt[At].width,nt[At].height,0,Mt,ft,nt[At].data);for(let be=0;be<te.length;be++){const $i=te[be].image[At].image;Gt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be+1,0,0,$i.width,$i.height,Mt,ft,$i.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be+1,vt,$i.width,$i.height,0,Mt,ft,$i.data)}}else{Gt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Mt,ft,nt[At]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,vt,Mt,ft,nt[At]);for(let be=0;be<te.length;be++){const $e=te[be];Gt?ut&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be+1,0,0,Mt,ft,$e.image[At]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,be+1,vt,Mt,ft,$e.image[At])}}}y(S)&&S.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),xt.__version=at.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function yt(A,S,V,ht,at,xt){const bt=r.convert(V.format,V.colorSpace),j=r.convert(V.type),tt=E(V.internalFormat,bt,j,V.normalized,V.colorSpace),_t=i.get(S),I=i.get(V);if(I.__renderTarget=S,!_t.__hasExternalTextures){const nt=Math.max(1,S.width>>xt),J=Math.max(1,S.height>>xt);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,xt,tt,nt,J,S.depth,0,bt,j,null):e.texImage2D(at,xt,tt,nt,J,0,bt,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),wt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,at,I.__webglTexture,0,Te(S)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,at,I.__webglTexture,xt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(A,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const ht=S.depthTexture,at=ht&&ht.isDepthTexture?ht.type:null,xt=v(S.stencilBuffer,at),bt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;wt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te(S),xt,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te(S),xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,A)}else{const ht=S.textures;for(let at=0;at<ht.length;at++){const xt=ht[at],bt=r.convert(xt.format,xt.colorSpace),j=r.convert(xt.type),tt=E(xt.internalFormat,bt,j,xt.normalized,xt.colorSpace);wt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te(S),tt,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(A,S,V){const ht=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=i.get(S.depthTexture);at.__renderTarget=S;const xt=ht?S.depthTexture.image[0]:S.depthTexture.image;(!at.__webglTexture||xt.width!==S.width||xt.height!==S.height)&&(xt.width=S.width,xt.height=S.height,S.depthTexture.needsUpdate=!0),ht?Tt(S.depthTexture,0):ct(S.depthTexture,0);const bt=at.__webglTexture,j=Te(S),tt=ht?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,_t=S.depthTexture.format===rn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===cn)wt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,tt,bt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,_t,tt,bt,0);else if(S.depthTexture.format===rn)wt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,tt,bt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,_t,tt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(A){const S=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const ht=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ht){const at=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ht.removeEventListener("dispose",at)};ht.addEventListener("dispose",at),S.__depthDisposeCallback=at}S.__boundDepthTexture=ht}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let ht=0;ht<6;ht++)Bt(S.__webglFramebuffer[ht],A,ht);else A.texture.mipmaps.length>0?Bt(S.__webglFramebuffer[0],A,0):Bt(S.__webglFramebuffer,A,0);else if(V){S.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ht]),S.__webglDepthbuffer[ht]===void 0)S.__webglDepthbuffer[ht]=s.createRenderbuffer(),Qt(S.__webglDepthbuffer[ht],A,!1);else{const at=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=S.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,xt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Qt(S.__webglDepthbuffer,A,!1);else{const at=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,xt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function he(A,S,V){const ht=i.get(A);S!==void 0&&yt(ht.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&ae(A)}function _e(A){const S=A.texture,V=i.get(A),ht=i.get(S);A.addEventListener("dispose",B),D(A);const at=A.textures,xt=A.isWebGLCubeRenderTarget===!0,bt=at.length>1;if(bt||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=S.version,a.memory.textures++),xt){V.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps.length>0){V.__webglFramebuffer[j]=[];for(let tt=0;tt<S.mipmaps.length;tt++)V.__webglFramebuffer[j][tt]=s.createFramebuffer()}else V.__webglFramebuffer[j]=s.createFramebuffer()}else{if(S.mipmaps.length>0){V.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)V.__webglFramebuffer[j]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(bt)for(let j=0,tt=at.length;j<tt;j++){const _t=i.get(at[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&wt(A)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let j=0;j<at.length;j++){const tt=at[j];V.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[j]);const _t=r.convert(tt.format,tt.colorSpace),I=r.convert(tt.type),nt=E(tt.internalFormat,_t,I,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),J=Te(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,J,nt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,V.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Qt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),jt(s.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)yt(V.__webglFramebuffer[j][tt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else yt(V.__webglFramebuffer[j],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);y(S)?M(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let j=0,tt=at.length;j<tt;j++){const _t=at[j],I=i.get(_t);let nt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,I.__webglTexture),jt(nt,_t),yt(V.__webglFramebuffer,A,_t,s.COLOR_ATTACHMENT0+j,nt,0),y(_t)&&M(nt)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,ht.__webglTexture),jt(j,S),S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)yt(V.__webglFramebuffer[tt],A,S,s.COLOR_ATTACHMENT0,j,tt);else yt(V.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,j,0);y(S)?M(j):S.mipmaps.length>0&&s.texParameteri(j,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ae(A)}function U(A){const S=A.textures;for(let V=0,ht=S.length;V<ht;V++){const at=S[V];if(y(at)&&at.mipmapsAutoUpdate===!0){const xt=T(A),bt=i.get(at).__webglTexture;e.bindTexture(xt,bt),M(xt),e.unbindTexture()}}}const ke=[];function se(A){if(A.samples>0){if(wt(A)===!1){const S=A.textures,V=A.width,ht=A.height;let at=s.COLOR_BUFFER_BIT;const xt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(A),j=S.length>1;if(j)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const I=i.get(S[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,V,ht,0,0,V,ht,at,s.NEAREST),l===!0&&(ke.length=0,ke.push(s.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ke.push(xt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,bt.__webglColorRenderbuffer[_t]);const I=i.get(S[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,I,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Te(A){return Math.min(n.maxSamples,A.samples)}function wt(A){const S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Oe(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Xt(A,S){const V=A.colorSpace,ht=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Fr&&V!==nn&&(fe.getTransfer(V)===Ee?(ht!==Li||at!==pi)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",V)),S}function Zt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=et,this.getTextureUnits=rt,this.setTextureUnits=K,this.setTexture2D=ct,this.setTexture2DArray=Ct,this.setTexture3D=Ot,this.setTextureCube=Tt,this.rebindTextures=he,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=wt,this.dispose=O}function nx(s,t){function e(i,n=nn){let r;const a=fe.getTransfer(n);if(i===pi)return s.UNSIGNED_BYTE;if(i===zo)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ko)return s.UNSIGNED_SHORT_5_5_5_1;if(i===nh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===sh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===eh)return s.BYTE;if(i===ih)return s.SHORT;if(i===Is)return s.UNSIGNED_SHORT;if(i===Fo)return s.INT;if(i===Di)return s.UNSIGNED_INT;if(i===bi)return s.FLOAT;if(i===Ni)return s.HALF_FLOAT;if(i===rh)return s.ALPHA;if(i===ah)return s.RGB;if(i===Li)return s.RGBA;if(i===cn)return s.DEPTH_COMPONENT;if(i===rn)return s.DEPTH_STENCIL;if(i===Bo)return s.RED;if(i===Go)return s.RED_INTEGER;if(i===bn)return s.RG;if(i===Ho)return s.RG_INTEGER;if(i===Vo)return s.RGBA_INTEGER;if(i===Tr||i===Ar||i===Rr||i===Cr)if(a===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Za||i===Ka||i===Ja||i===Qa||i===Ur||i===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$a||i===Za)return a===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ja)return r.COMPRESSED_R11_EAC;if(i===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ur)return r.COMPRESSED_RG11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===to||i===eo||i===io||i===no||i===so||i===ro||i===ao||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===to)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===io)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===no)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===so)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ro)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ao)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ho)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return a===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===go||i===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===mo)return a===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vo||i===_o||i===Or||i===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===vo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`;class ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new wh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ui({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new k(new oe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends Tn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const x=typeof XRWebGLBinding<"u",m=new ax,g={},_=e.getContextAttributes();let y=null,M=null;const T=[],E=[],v=new lt;let b=null,D=null;const R=new gi;R.viewport=new Ne;const L=new gi;L.viewport=new Ne;const B=[R,L],F=new vf;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ct=T[W];return ct===void 0&&(ct=new ca,T[W]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(W){let ct=T[W];return ct===void 0&&(ct=new ca,T[W]=ct),ct.getGripSpace()},this.getHand=function(W){let ct=T[W];return ct===void 0&&(ct=new ca,T[W]=ct),ct.getHandSpace()};function G(W){const ct=E.indexOf(W.inputSource);if(ct===-1)return;const Ct=T[ct];Ct!==void 0&&(Ct.update(W.inputSource,W.frame,c||a),Ct.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",ot);for(let W=0;W<T.length;W++){const ct=E[W];ct!==null&&(E[W]=null,T[W].disconnect(ct))}C=null,O=null,m.reset();for(const W in g)delete g[W];if(t.setRenderTarget(y),d=null,f=null,u=null,n=null,M=null,it.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),D!==null){const W=D.camera;W.fov=D.fov,W.zoom=D.zoom,W.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(y=t.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",z),n.addEventListener("inputsourceschange",ot),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Ot=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=_.stencil?rn:cn,Ot=_.stencil?ts:Di);const Ft={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ii(f.textureWidth,f.textureHeight,{format:Li,type:pi,depthTexture:new es(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,Ct),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ii(d.framebufferWidth,d.framebufferHeight,{format:Li,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),it.setContext(n),it.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(W){for(let ct=0;ct<W.removed.length;ct++){const Ct=W.removed[ct],Ot=E.indexOf(Ct);Ot>=0&&(E[Ot]=null,T[Ot].disconnect(Ct))}for(let ct=0;ct<W.added.length;ct++){const Ct=W.added[ct];let Ot=E.indexOf(Ct);if(Ot===-1){for(let Ft=0;Ft<T.length;Ft++)if(Ft>=E.length){E.push(Ct),Ot=Ft;break}else if(E[Ft]===null){E[Ft]=Ct,Ot=Ft;break}if(Ot===-1)break}const Tt=T[Ot];Tt&&Tt.connect(Ct)}}function Y(W,ct){ct===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ct.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let ct=W.near,Ct=W.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),F.near=L.near=R.near=ct,F.far=L.far=R.far=Ct,(C!==F.near||O!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),C=F.near,O=F.far),F.layers.mask=W.layers.mask|6,R.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Ot=W.parent,Tt=F.cameras;Y(F,Ot);for(let Ft=0;Ft<Tt.length;Ft++)Y(Tt[Ft],Ot);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&W.isPerspectiveCamera&&(D={camera:W,fov:W.fov,zoom:W.zoom}),et(W,F,Ot)};function et(W,ct,Ct){Ct===null?W.matrix.copy(ct.matrixWorld):(W.matrix.copy(Ct.matrixWorld),W.matrix.invert(),W.matrix.multiply(ct.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ct.projectionMatrix),W.projectionMatrixInverse.copy(ct.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ns*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(W){return g[W]};let rt=null;function K(W,ct){if(h=ct.getViewerPose(c||a),p=ct,h!==null){const Ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ot=!1;Ct.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let Vt=0;Vt<Ct.length;Vt++){const jt=Ct[Vt];let ee=null;if(d!==null)ee=d.getViewport(jt);else{const mt=u.getViewSubImage(f,jt);ee=mt.viewport,Vt===0&&(t.setRenderTargetTextures(M,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(M))}let st=B[Vt];st===void 0&&(st=new gi,st.layers.enable(Vt),st.viewport=new Ne,B[Vt]=st),st.matrix.fromArray(jt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(jt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(ee.x,ee.y,ee.width,ee.height),Vt===0&&(F.matrix.copy(st.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push(st)}const Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const Vt=u.getDepthInformation(Ct[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,n.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let Vt=0;Vt<Ct.length;Vt++){const jt=Ct[Vt].camera;if(jt){let ee=g[jt];ee||(ee=new wh,g[jt]=ee);const st=u.getCameraImage(jt);ee.sourceTexture=st}}}}for(let Ct=0;Ct<T.length;Ct++){const Ot=E[Ct],Tt=T[Ct];Ot!==null&&Tt!==void 0&&Tt.update(Ot,ct,c||a)}rt&&rt(W,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),p=null}const it=new Fh;it.setAnimationLoop(K),this.setAnimationLoop=function(W){rt=W},this.dispose=function(){}}}const lx=new xe,Yh=new Kt;Yh.set(-1,0,0,0,1,0,0,0,1);function cx(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Dh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,_,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===li&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===li&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=t.get(g),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yh),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===li&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function hx(s,t,e,i){let n={},r={};function a(_,y){const M=y.program;i.uniformBlockBinding(_,M,n[_.id])}function o(_,y){let M=n[_.id];M===void 0&&(p(_),M=l(_),n[_.id]=M,_.addEventListener("dispose",m));const T=y.program;i.updateUBOMapping(_,T);const E=t.render.frame;r[_.id]!==E&&(c(_),r[_.id]=E)}function l(_){const y=s.createBuffer(),M=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,T),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(_){const y=n[_.id],M=_.uniforms,T=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,v=M.length;E<v;E++){const b=M[E];if(Array.isArray(b))for(let D=0,R=b.length;D<R;D++)h(b[D],E,D,T);else h(b,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(_,y,M,T){if(f(_,y,M,T)===!0){const E=_.__offset,v=_.value;if(Array.isArray(v)){let b=0;for(let D=0;D<v.length;D++){const R=v[D],L=x(R,!0);u(R,_.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(v,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,_.__data)}}function u(_,y,M){typeof _=="number"||typeof _=="boolean"?y[M]=_:_.isMatrix3?(y[M]=_.elements[0],y[M+1]=_.elements[1],y[M+2]=_.elements[2],y[M+3]=0,y[M+4]=_.elements[3],y[M+5]=_.elements[4],y[M+6]=_.elements[5],y[M+7]=0,y[M+8]=_.elements[6],y[M+9]=_.elements[7],y[M+10]=_.elements[8],y[M+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-M),M):_.toArray(y,M)}function f(_,y,M,T){const E=_.value,v=y+"_"+M;if(Array.isArray(E)){T[v]===void 0&&(T[v]=[]);const b=T[v];let D=!1;for(let R=0;R<E.length;R++)d(E[R],b,R)===!0&&(D=!0);return D}return d(E,T,v)}function d(_,y,M){if(y[M]===void 0)return typeof _=="number"||typeof _=="boolean"?y[M]=_:ArrayBuffer.isView(_)?y[M]=_.slice():y[M]=_.clone(),!0;{const T=y[M];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return y[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function p(_){const y=_.uniforms;let M=0;const T=16;for(let v=0,b=y.length;v<b;v++){const D=Array.isArray(y[v])?y[v]:[y[v]];for(let R=0,L=D.length;R<L;R++){const B=D[R],F=Array.isArray(B.value)?B.value:[B.value],C=Array.isArray(y[v])||Array.isArray(B.value);let O=M;for(let z=0,ot=F.length;z<ot;z++){const Y=F[z],et=x(Y,C),rt=M%T,K=rt%et.boundary,it=rt+K;M+=K,it!==0&&T-it<et.storage&&(M+=T-it),z===0&&(O=M),M+=et.storage}const G=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new G((M-O)/Float32Array.BYTES_PER_ELEMENT),B.__offset=O}}const E=M%T;return E>0&&(M+=T-E),_.__size=M,_.__cache={},this}function x(_,y){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(_){const y=_.target;y.removeEventListener("dispose",m),s.deleteBuffer(n[y.id]),delete n[y.id],delete r[y.id]}function g(){for(const _ in n)s.deleteBuffer(n[_]);n={},r={}}return{bind:a,update:o,dispose:g}}const ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function dx(){return Ci===null&&(Ci=new _h(ux,16,16,bn,Ni),Ci.name="DFG_LUT",Ci.minFilter=ui,Ci.magFilter=ui,Ci.wrapS=Vi,Ci.wrapT=Vi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class fx{constructor(t={}){const{canvas:e=Ou(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=pi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const x=d,m=new Set([Vo,Ho,Go]),g=new Set([pi,Di,Is,ts,zo,ko]),_=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let T=null,E=null;const v=[],b=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,B=null,F=null,C=null,O=null;this._outputColorSpace=ni;let G=0,z=0,ot=null,Y=-1,et=null;const rt=new Ne,K=new Ne;let it=null;const W=new kt(0);let ct=0,Ct=e.width,Ot=e.height,Tt=1,Ft=null,ve=null;const Vt=new Ne(0,0,Ct,Ot),jt=new Ne(0,0,Ct,Ot);let ee=!1;const st=new Us,mt=new Ko;let pt=!1,It=!1;const yt=new xe,Qt=new P,Bt=new Ne,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function _e(){return ot===null?Tt:1}let U=i;function ke(w,N){return e.getContext(w,N)}let se,Te,wt,Oe,Xt,Zt,A,S,V,ht,at,xt,bt,j,tt,_t,I,nt,J,Mt,ft,vt,Gt;try{const w={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uo}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",te,!1),e.addEventListener("webglcontextcreationerror",At,!1),U===null){const N="webgl2";if(U=ke(N,w),U===null)throw ke(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(w){throw e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",At,!1),ge("WebGLRenderer: "+w.message),w}function ie(){se=new g0(U),se.init(),ft=new nx(U,se),Te=new r0(U,se,t,ft),wt=new ex(U,se),Te.reversedDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),F=U.createFramebuffer(),C=U.createFramebuffer(),O=U.createFramebuffer(),Oe=new _0(U),Xt=new Gg,Zt=new ix(U,se,wt,Xt,Te,ft,Oe),A=new m0(R),S=new yf(U),vt=new n0(U,S),V=new x0(U,S,Oe,vt),ht=new y0(U,V,S,vt,Oe),nt=new M0(U,Te,Zt),tt=new a0(Xt),at=new Bg(R,A,se,Te,vt,tt),xt=new cx(R,Xt),bt=new Vg,j=new Zg(se),I=new i0(R,A,wt,ht,p,l),_t=new tx(R,ht,Te),Gt=new hx(U,Oe,Te,wt),J=new s0(U,se,Oe),Mt=new v0(U,se,Oe),Oe.programs=at.programs,R.capabilities=Te,R.extensions=se,R.properties=Xt,R.renderLists=bt,R.shadowMap=_t,R.state=wt,R.info=Oe}x!==pi&&(D=new w0(x,e.width,e.height,o,n,r));const ut=new ox(R,U);this.xr=ut,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(w){w!==void 0&&(Tt=w,this.setSize(Ct,Ot,!1))},this.getSize=function(w){return w.set(Ct,Ot)},this.setSize=function(w,N,$=!0){if(ut.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=w,Ot=N,e.width=Math.floor(w*Tt),e.height=Math.floor(N*Tt),$===!0&&(e.style.width=w+"px",e.style.height=N+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(Ct*Tt,Ot*Tt).floor()},this.setDrawingBufferSize=function(w,N,$){Ct=w,Ot=N,Tt=$,e.width=Math.floor(w*$),e.height=Math.floor(N*$),this.setViewport(0,0,w,N)},this.setEffects=function(w){if(x===pi){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let N=0;N<w.length;N++)if(w[N].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(rt)},this.getViewport=function(w){return w.copy(Vt)},this.setViewport=function(w,N,$,H){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,N,$,H),wt.viewport(rt.copy(Vt).multiplyScalar(_e()).round())},this.getScissor=function(w){return w.copy(jt)},this.setScissor=function(w,N,$,H){w.isVector4?jt.set(w.x,w.y,w.z,w.w):jt.set(w,N,$,H),wt.scissor(K.copy(jt).multiplyScalar(_e()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){wt.setScissorTest(ee=w)},this.setOpaqueSort=function(w){Ft=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(w=!0,N=!0,$=!0){let H=0;if(w){let X=!1;if(ot!==null){const Et=ot.texture.format;X=m.has(Et)}if(X){const Et=ot.texture.type,Dt=g.has(Et),St=I.getClearColor(),Lt=I.getClearAlpha(),zt=St.r,Jt=St.g,ue=St.b;Dt?(_[0]=zt,_[1]=Jt,_[2]=ue,_[3]=Lt,U.clearBufferuiv(U.COLOR,0,_)):(y[0]=zt,y[1]=Jt,y[2]=ue,y[3]=Lt,U.clearBufferiv(U.COLOR,0,y))}else H|=U.COLOR_BUFFER_BIT}N&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),B=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",te,!1),e.removeEventListener("webglcontextcreationerror",At,!1),I.dispose(),bt.dispose(),j.dispose(),Zt.dispose(),Xt.dispose(),A.dispose(),ht.dispose(),V.dispose(),vt.dispose(),Gt.dispose(),at.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",hl),ut.removeEventListener("sessionend",ul),fn.stop()};function Wt(w){w.preventDefault(),Br("WebGLRenderer: Context Lost."),L=!0}function te(){Br("WebGLRenderer: Context Restored."),L=!1;const w=Oe.autoReset,N=_t.enabled,$=_t.autoUpdate,H=_t.needsUpdate,X=_t.type;ie(),Oe.autoReset=w,_t.enabled=N,_t.autoUpdate=$,_t.needsUpdate=H,_t.type=X}function At(w){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function be(w){const N=w.target;N.removeEventListener("dispose",be),$e(N)}function $e(w){$i(w),Xt.remove(w)}function $i(w){const N=Xt.get(w).programs;N!==void 0&&(N.forEach(function($){at.releaseProgram($)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,$,H,X,Et){N===null&&(N=ae);const Dt=X.isMesh&&X.matrixWorld.determinantAffine()<0,St=jh(w,N,$,H,X);wt.setMaterial(H,Dt);let Lt=$.index,zt=1;if(H.wireframe===!0){if(Lt=V.getWireframeAttribute($),Lt===void 0)return;zt=2}const Jt=$.drawRange,ue=$.attributes.position;let Nt=Jt.start*zt,de=(Jt.start+Jt.count)*zt;Et!==null&&(Nt=Math.max(Nt,Et.start*zt),de=Math.min(de,(Et.start+Et.count)*zt)),Lt!==null?(Nt=Math.max(Nt,0),de=Math.min(de,Lt.count)):ue!=null&&(Nt=Math.max(Nt,0),de=Math.min(de,ue.count));const Be=de-Nt;if(Be<0||Be===1/0)return;vt.setup(X,H,St,$,Lt);let Ce,Ae=J;if(Lt!==null&&(Ce=S.get(Lt),Ae=Mt,Ae.setIndex(Ce)),X.isMesh)H.wireframe===!0?(wt.setLineWidth(H.wireframeLinewidth*_e()),Ae.setMode(U.LINES)):Ae.setMode(U.TRIANGLES);else if(X.isLine){let je=H.linewidth;je===void 0&&(je=1),wt.setLineWidth(je*_e()),X.isLineSegments?Ae.setMode(U.LINES):X.isLineLoop?Ae.setMode(U.LINE_LOOP):Ae.setMode(U.LINE_STRIP)}else X.isPoints?Ae.setMode(U.POINTS):X.isSprite&&Ae.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,Ut=X._multiDrawCounts,ri=X._multiDrawCount,ye=Lt?S.get(Lt).bytesPerElement:1,pn=Xt.get(H).currentProgram.getUniforms();for(let ti=0;ti<ri;ti++)pn.setValue(U,"_gl_DrawID",ti),Ae.render(je[ti]/ye,Ut[ti])}else if(X.isInstancedMesh)Ae.renderInstances(Nt,Be,X.count);else if($.isInstancedBufferGeometry){const je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ut=Math.min($.instanceCount,je);Ae.renderInstances(Nt,Be,Ut)}else Ae.render(Nt,Be)};function cl(w,N,$,H){B!==null&&w.isNodeMaterial&&B.setObject(H,w),pt===!0&&tt.setState(w,$,!1),w.transparent===!0&&w.side===Si&&w.forceSinglePass===!1?(w.side=li,w.needsUpdate=!0,os(w,N,H),w.side=wn,w.needsUpdate=!0,os(w,N,H),w.side=Si):os(w,N,H)}this.compile=function(w,N,$=null){$===null&&($=w),B!==null&&B.renderStart(w,N,$),E=j.get($),E.init(N),b.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),w!==$&&w.traverseVisible(function(X){X.isLight&&X.layers.test(N.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),It=this.localClippingEnabled,pt=tt.init(this.clippingPlanes,It),pt===!0&&tt.setGlobalState(this.clippingPlanes,N),B!==null&&_t.render(E.state.shadowsArray,$,N);const H=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Et=X.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const St=Et[Dt];cl(St,$,N,X),H.add(St)}else cl(Et,$,N,X),H.add(Et)}),E=b.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(w,N,$=null){const H=this.compile(w,N,$);return new Promise(X=>{function Et(){if(H.forEach(function(Dt){const Lt=Xt.get(Dt).currentProgram;(Lt===void 0||Lt.isReady())&&H.delete(Dt)}),H.size===0){X(w);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Qr=null;function Jh(w){Qr&&Qr(w)}function hl(){fn.stop()}function ul(){fn.start()}const fn=new Fh;fn.setAnimationLoop(Jh),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(w){Qr=w,ut.setAnimationLoop(w),w===null?fn.stop():fn.start()},ut.addEventListener("sessionstart",hl),ut.addEventListener("sessionend",ul),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(w,N);const $=ut.enabled===!0&&ut.isPresenting===!0,H=D!==null&&(ot===null||$)&&D.begin(R,ot);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(N),N=ut.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,N,ot),E=j.get(w,b.length),E.init(N),E.state.textureUnits=Zt.getTextureUnits(),b.push(E),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?mt.setFromArrayCamera(N):st.setFromProjectionMatrix(yt,Ei,N.reversedDepth),It=this.localClippingEnabled,pt=tt.init(this.clippingPlanes,It),T=bt.get(w,v.length),T.init(),v.push(T),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){const Dt=R.xr.getDepthSensingMesh();Dt!==null&&jr(Dt,N,-1/0,R.sortObjects)}jr(w,N,0,R.sortObjects),T.finish(),B!==null&&B.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(Ft,ve),he=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,he&&I.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),pt===!0&&tt.beginShadows();const X=E.state.shadowsArray;if(_t.render(X,w,N),pt===!0&&tt.endShadows(),(H&&D.hasRenderPass())===!1){const Dt=T.opaque,St=T.transmissive;if(E.setupLights(),N.isArrayCamera){const Lt=N.cameras;if(St.length>0)for(let zt=0,Jt=Lt.length;zt<Jt;zt++){const ue=Lt[zt];fl(Dt,St,w,ue)}he&&I.render(w);for(let zt=0,Jt=Lt.length;zt<Jt;zt++){const ue=Lt[zt];dl(T,w,ue,ue.viewport)}}else St.length>0&&fl(Dt,St,w,N),he&&I.render(w),dl(T,w,N)}ot!==null&&z===0&&(Zt.updateMultisampleRenderTarget(ot),Zt.updateRenderTargetMipmap(ot)),H&&D.end(R),w.isScene===!0&&w.onAfterRender(R,w,N),vt.resetDefaultState(),Y=-1,et=null,b.pop(),b.length>0?(E=b[b.length-1],Zt.setTextureUnits(E.state.textureUnits),pt===!0&&tt.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?T=v[v.length-1]:T=null,B!==null&&B.renderEnd()};function jr(w,N,$,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){const Dt=N.isArrayCamera?mt:st;if(!w.frustumCulled||w.intersectsFrustum(Dt)){H&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(yt);const St=ht.update(w),Lt=w.material;Lt.visible&&T.push(w,St,Lt,$,Bt.z,null,N)}}else if(w.isMesh||w.isLine||w.isPoints){const Dt=N.isArrayCamera?mt:st;if(!w.frustumCulled||w.intersectsFrustum(Dt)){const St=ht.update(w),Lt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Bt.copy(St.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(yt)),Array.isArray(Lt)){const zt=St.groups;for(let Jt=0,ue=zt.length;Jt<ue;Jt++){const Nt=zt[Jt],de=Lt[Nt.materialIndex];de&&de.visible&&T.push(w,St,de,$,Bt.z,Nt,N)}}else Lt.visible&&T.push(w,St,Lt,$,Bt.z,null,N)}}}const Et=w.children;for(let Dt=0,St=Et.length;Dt<St;Dt++)jr(Et[Dt],N,$,H)}function dl(w,N,$,H){const{opaque:X,transmissive:Et,transparent:Dt}=w;E.setupLightsView($),pt===!0&&tt.setGlobalState(R.clippingPlanes,$),H&&wt.viewport(rt.copy(H)),X.length>0&&Vs(X,N,$),Et.length>0&&Vs(Et,N,$),Dt.length>0&&Vs(Dt,N,$),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function fl(w,N,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){const Nt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new Ii(1,1,{generateMipmaps:!0,type:Nt?Ni:pi,minFilter:sn,samples:Math.max(4,Te.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}const Et=E.state.transmissionRenderTarget[H.id],Dt=H.viewport||rt;Et.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);const St=R.getRenderTarget(),Lt=R.getActiveCubeFace(),zt=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(W),ct=R.getClearAlpha(),ct<1&&R.setClearColor(16777215,.5),R.clear(),he&&I.render($);const Jt=R.toneMapping;R.toneMapping=Wi;const ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),pt===!0&&tt.setGlobalState(R.clippingPlanes,H),Vs(w,$,H),Zt.updateMultisampleRenderTarget(Et),Zt.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let de=0,Be=N.length;de<Be;de++){const Ce=N[de],{object:Ae,geometry:je,material:Ut,group:ri}=Ce;if(Ut.side===Si&&Ae.layers.test(H.layers)){const ye=Ut.side;Ut.side=li,Ut.needsUpdate=!0,pl(Ae,$,H,je,Ut,ri),Ut.side=ye,Ut.needsUpdate=!0,Nt=!0}}Nt===!0&&(Zt.updateMultisampleRenderTarget(Et),Zt.updateRenderTargetMipmap(Et))}R.setRenderTarget(St,Lt,zt),R.setClearColor(W,ct),ue!==void 0&&(H.viewport=ue),R.toneMapping=Jt}function Vs(w,N,$){const H=N.isScene===!0?N.overrideMaterial:null;for(let X=0,Et=w.length;X<Et;X++){const Dt=w[X],{object:St,geometry:Lt,group:zt}=Dt;let Jt=Dt.material;Jt.allowOverride===!0&&H!==null&&(Jt=H),St.layers.test($.layers)&&pl(St,N,$,Lt,Jt,zt)}}function pl(w,N,$,H,X,Et){B!==null&&X.isNodeMaterial&&B.setObject(w,X),w.onBeforeRender(R,N,$,H,X,Et),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(R,N,$,H,w,Et),X.transparent===!0&&X.side===Si&&X.forceSinglePass===!1?(X.side=li,X.needsUpdate=!0,R.renderBufferDirect($,N,H,X,w,Et),X.side=wn,X.needsUpdate=!0,R.renderBufferDirect($,N,H,X,w,Et),X.side=Si):R.renderBufferDirect($,N,H,X,w,Et),w.onAfterRender(R,N,$,H,X,Et)}function ml(w){let N=0;for(const $ of w)$.texture!==null&&N++;return N}function os(w,N,$){N.isScene!==!0&&(N=ae);const H=Xt.get(w),X=E.state.lights,Et=E.state.shadowsArray,Dt=X.state.version,St=at.getParameters(w,X.state,Et,N,$,E.state.lightProbeGridArray),Lt=at.getProgramCacheKey(St);let zt=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const Jt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=A.get(w.envMap||H.environment,Jt),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",be),zt=new Map,H.programs=zt,H.programVariants=new Map);let ue=zt.get(Lt);if(ue!==void 0){if(H.currentProgram===ue&&H.lightsStateVersion===Dt)return xl(w,St),ue}else St.uniforms=at.getUniforms(w),B!==null&&w.isNodeMaterial&&B.build(w,$,St),w.onBeforeCompile(St,R),ue=at.acquireProgram(St,Lt),zt.set(Lt,ue),H.uniforms=St.uniforms;const Nt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=tt.uniform),xl(w,St),H.needsLights=eu(w),H.lightsStateVersion=Dt,H.needsLights&&(Nt.ambientLightColor.value=X.state.ambient,Nt.lightProbe.value=X.state.probe,Nt.sunLights.value=X.state.sun,Nt.sunLightShadows.value=X.state.sunShadow,Nt.directionalLights.value=X.state.directional,Nt.directionalLightShadows.value=X.state.directionalShadow,Nt.spotLights.value=X.state.spot,Nt.spotLightShadows.value=X.state.spotShadow,Nt.rectAreaLights.value=X.state.rectArea,Nt.ltc_1.value=X.state.rectAreaLTC1,Nt.ltc_2.value=X.state.rectAreaLTC2,Nt.pointLights.value=X.state.point,Nt.pointLightShadows.value=X.state.pointShadow,Nt.hemisphereLights.value=X.state.hemi,Nt.sunShadowMatrix.value=X.state.sunShadowMatrix,Nt.sunShadowCascade.value=X.state.sunShadowCascade,Nt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Nt.spotLightMatrix.value=X.state.spotLightMatrix,Nt.spotLightMap.value=X.state.spotLightMap,Nt.pointShadowMatrix.value=X.state.pointShadowMatrix),H.numLightProbeGrids=ml(E.state.lightProbeGridArray),H.currentProgram=ue,H.uniformsList=null,ue}function Qh(w,N,$,H,X){const Et=Xt.get(w),Dt=Et.currentProgram.id+","+H+","+X;let St=Et.programVariants.get(Dt);return St===void 0?(St=os(w,N,$),Et.programVariants.set(Dt,St)):(Et.currentProgram=St,Et.uniformsList=null,Et.outputColorSpace=H,Et.toneMapping=X),St}function gl(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Lr.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function xl(w,N){const $=Xt.get(w);$.outputColorSpace=N.outputColorSpace,$.batching=N.batching,$.batchingColor=N.batchingColor,$.instancing=N.instancing,$.instancingColor=N.instancingColor,$.instancingMorph=N.instancingMorph,$.skinning=N.skinning,$.morphTargets=N.morphTargets,$.morphNormals=N.morphNormals,$.morphColors=N.morphColors,$.morphTargetsCount=N.morphTargetsCount,$.numClippingPlanes=N.numClippingPlanes,$.numIntersection=N.numClipIntersection,$.vertexAlphas=N.vertexAlphas,$.vertexTangents=N.vertexTangents,$.toneMapping=N.toneMapping}function jh(w,N,$,H,X){N.isScene!==!0&&(N=ae),Zt.resetTextureUnits();const Et=N.fog,Dt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,St=ot===null?R.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:fe.workingColorSpace,Lt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,zt=A.get(H.envMap||Dt,Lt),Jt=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ue=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!$.morphAttributes.position,de=!!$.morphAttributes.normal,Be=!!$.morphAttributes.color;let Ce=Wi;H.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ce=R.toneMapping);const Ae=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,je=Ae!==void 0?Ae.length:0,Ut=Xt.get(H),ri=E.state.lights;if(pt===!0&&(It===!0||w!==et)){const Ie=w===et&&H.id===Y;tt.setState(H,w,Ie)}let ye=!1,pn=!1;H.version===Ut.__version?Ut.needsLights&&Ut.lightsStateVersion!==ri.state.version||X.isBatchedMesh&&Ut.batching===!1||!X.isBatchedMesh&&Ut.batching===!0||X.isBatchedMesh&&Ut.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ut.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ut.instancing===!1||!X.isInstancedMesh&&Ut.instancing===!0||X.isSkinnedMesh&&Ut.skinning===!1||!X.isSkinnedMesh&&Ut.skinning===!0||X.isInstancedMesh&&Ut.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ut.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ut.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ut.instancingMorph===!1&&X.morphTexture!==null||Ut.envMap!==zt||H.fog===!0&&Ut.fog!==Et||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==tt.numPlanes||Ut.numIntersection!==tt.numIntersection)||Ut.vertexAlphas!==Jt||Ut.vertexTangents!==ue||Ut.morphTargets!==Nt||Ut.morphNormals!==de||Ut.morphColors!==Be||Ut.morphTargetsCount!==je||Ut.numLightProbeGrids!==ml(E.state.lightProbeGridArray)?ye=!0:(Ut.outputColorSpace!==St||Ut.toneMapping!==Ce)&&(pn=!0):(ye=!0,Ut.__version=H.version);let ti=Ut.currentProgram;(ye===!0||pn===!0)&&(ti=pn===!0?Qh(H,N,X,St,Ce):os(H,N,X),B&&H.isNodeMaterial&&B.onUpdateProgram(H,ti,Ut));let Ws=!1,Zi=!1,mn=!1;const me=ti.getUniforms(),Je=Ut.uniforms;if(wt.useProgram(ti.program)&&(Ws=!0,Zi=!0,mn=!0),H.id!==Y&&(Y=H.id,Zi=!0),Ws||et!==w){wt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),me.setValue(U,"projectionMatrix",w.projectionMatrix),me.setValue(U,"viewMatrix",w.matrixWorldInverse);const Ze=me.map.cameraPosition;Ze!==void 0&&Ze.setValue(U,Qt.setFromMatrixPosition(w.matrixWorld)),Te.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,Zi=!0,mn=!0)}if(Ut.needsLights&&(ri.state.sunShadowMap.length>0&&me.setValue(U,"sunShadowMap",ri.state.sunShadowMap,Zt),ri.state.directionalShadowMap.length>0&&me.setValue(U,"directionalShadowMap",ri.state.directionalShadowMap,Zt),ri.state.spotShadowMap.length>0&&me.setValue(U,"spotShadowMap",ri.state.spotShadowMap,Zt),ri.state.pointShadowMap.length>0&&me.setValue(U,"pointShadowMap",ri.state.pointShadowMap,Zt)),X.isSkinnedMesh){me.setOptional(U,X,"bindMatrix"),me.setOptional(U,X,"bindMatrixInverse");const Ie=X.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),me.setValue(U,"boneTexture",Ie.boneTexture,Zt))}X.isBatchedMesh&&(me.setOptional(U,X,"batchingTexture"),me.setValue(U,"batchingTexture",X._matricesTexture,Zt),me.setOptional(U,X,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",X._indirectTexture,Zt),me.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",X._colorsTexture,Zt));const vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&nt.update(X,$,ti),(Zi||Ut.receiveShadow!==X.receiveShadow)&&(Ut.receiveShadow=X.receiveShadow,me.setValue(U,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Je.envMapIntensity.value=N.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=dx()),Zi){if(me.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&tu(Je,mn),Et&&H.fog===!0&&xt.refreshFogUniforms(Je,Et),xt.refreshMaterialUniforms(Je,H,Tt,Ot,E.state.transmissionRenderTarget[w.id]),Ut.needsLights&&Ut.numLightProbeGrids>0){const Ie=M;let Ze=0;for(const Fi of E.state.lightProbeGridArray)Fi.texture!==null&&(Ie.textures[Ze]=Fi.texture,Ie.min[Ze]=Fi.boundingBox.min,Ie.max[Ze]=Fi.boundingBox.max,Ie.resolution[Ze]=Fi.resolution,Ze++);for(const Fi in Ie)Ie[Fi].length=Ze;Je.probesSH.value=Ie.textures,Je.probesMin.value=Ie.min,Je.probesMax.value=Ie.max,Je.probesResolution.value=Ie.resolution}Lr.upload(U,gl(Ut),Je,Zt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Lr.upload(U,gl(Ut),Je,Zt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(U,"center",X.center),me.setValue(U,"modelViewMatrix",X.modelViewMatrix),me.setValue(U,"normalMatrix",X.normalMatrix),me.setValue(U,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){const Ie=H.uniformsGroups;for(let Ze=0,Fi=Ie.length;Ze<Fi;Ze++){const _l=Ie[Ze];Gt.update(_l,ti),Gt.bind(_l,ti)}}return ti}function tu(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.sunLights.needsUpdate=N,w.sunLightShadows.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function eu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(w,N,$){const H=Xt.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Xt.get(w.texture).__webglTexture=N,Xt.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,N){const $=Xt.get(w);$.__webglFramebuffer=N,$.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,$=0){ot=w,G=N,z=$;let H=null,X=!1,Et=!1;if(w){const St=Xt.get(w);if(St.__useDefaultFramebuffer!==void 0){wt.bindFramebuffer(U.FRAMEBUFFER,St.__webglFramebuffer),rt.copy(w.viewport),K.copy(w.scissor),it=w.scissorTest,wt.viewport(rt),wt.scissor(K),wt.setScissorTest(it),Y=-1;return}else if(St.__webglFramebuffer===void 0)Zt.setupRenderTarget(w);else if(St.__hasExternalTextures)Zt.rebindTextures(w,Xt.get(w.texture).__webglTexture,Xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Jt=w.depthTexture;if(St.__boundDepthTexture!==Jt){if(Jt!==null&&Xt.has(Jt)&&(w.width!==Jt.image.width||w.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Zt.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Et=!0);const zt=Xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?H=zt[N][$]:H=zt[N],X=!0):w.samples>0&&Zt.useMultisampledRTT(w)===!1?H=Xt.get(w).__webglMultisampledFramebuffer:Array.isArray(zt)?H=zt[$]:H=zt,rt.copy(w.viewport),K.copy(w.scissor),it=w.scissorTest}else rt.copy(Vt).multiplyScalar(Tt).floor(),K.copy(jt).multiplyScalar(Tt).floor(),it=ee;if($!==0&&(H=F),wt.bindFramebuffer(U.FRAMEBUFFER,H)&&wt.drawBuffers(w,H),wt.viewport(rt),wt.scissor(K),wt.setScissorTest(it),X){const St=Xt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,$)}else if(Et){const St=N;for(let Lt=0;Lt<w.textures.length;Lt++){const zt=Xt.get(w.textures[Lt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Lt,zt.__webglTexture,$,St)}}else if(w!==null&&$!==0){const St=Xt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,$)}Y=-1};function vl(w){const N=Xt.get(w);return(N.__readFormat!==w.format||N.__readType!==w.type)&&(N.__readFormat=w.format,N.__readType=w.type,N.__formatReadable=Te.textureFormatReadable(w.format),N.__typeReadable=Te.textureTypeReadable(w.type)),N}this.readRenderTargetPixels=function(w,N,$,H,X,Et,Dt,St=0){if(!(w&&w.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){wt.bindFramebuffer(U.FRAMEBUFFER,Lt);try{const zt=w.textures[St],Jt=zt.format,ue=zt.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);const Nt=vl(zt);if(Nt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&$>=0&&$<=w.height-X&&U.readPixels(N,$,H,X,ft.convert(Jt),ft.convert(ue),Et)}finally{const zt=ot!==null?Xt.get(ot).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(w,N,$,H,X,Et,Dt,St=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(N>=0&&N<=w.width-H&&$>=0&&$<=w.height-X){wt.bindFramebuffer(U.FRAMEBUFFER,Lt);const zt=w.textures[St],Jt=zt.format,ue=zt.type;w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);const Nt=vl(zt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.bufferData(U.PIXEL_PACK_BUFFER,Et.byteLength,U.STREAM_READ),U.readPixels(N,$,H,X,ft.convert(Jt),ft.convert(ue),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Be=ot!==null?Xt.get(ot).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Be);const Ce=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Fu(U,Ce,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Et),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(de),U.deleteSync(Ce),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,N=null,$=0){const H=Math.pow(2,-$),X=Math.floor(w.image.width*H),Et=Math.floor(w.image.height*H),Dt=N!==null?N.x:0,St=N!==null?N.y:0;Zt.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Dt,St,X,Et),wt.unbindTexture()},this.copyTextureToTexture=function(w,N,$=null,H=null,X=0,Et=0){let Dt,St,Lt,zt,Jt,ue,Nt,de,Be;const Ce=w.isCompressedTexture?w.mipmaps[Et]:w.image;if($!==null)Dt=$.max.x-$.min.x,St=$.max.y-$.min.y,Lt=$.isBox3?$.max.z-$.min.z:1,zt=$.min.x,Jt=$.min.y,ue=$.isBox3?$.min.z:0;else{const me=Math.pow(2,-X);Dt=Math.floor(Ce.width*me),St=Math.floor(Ce.height*me),w.isDataArrayTexture?Lt=Ce.depth:w.isData3DTexture?Lt=Math.floor(Ce.depth*me):Lt=1,zt=0,Jt=0,ue=0}H!==null?(Nt=H.x,de=H.y,Be=H.z):(Nt=0,de=0,Be=0);const Ae=ft.convert(N.format),je=ft.convert(N.type);let Ut;N.isData3DTexture?(Zt.setTexture3D(N,0),Ut=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Zt.setTexture2DArray(N,0),Ut=U.TEXTURE_2D_ARRAY):(Zt.setTexture2D(N,0),Ut=U.TEXTURE_2D),wt.activeTexture(U.TEXTURE0),wt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),wt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),wt.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const ri=wt.getParameter(U.UNPACK_ROW_LENGTH),ye=wt.getParameter(U.UNPACK_IMAGE_HEIGHT),pn=wt.getParameter(U.UNPACK_SKIP_PIXELS),ti=wt.getParameter(U.UNPACK_SKIP_ROWS),Ws=wt.getParameter(U.UNPACK_SKIP_IMAGES);wt.pixelStorei(U.UNPACK_ROW_LENGTH,Ce.width),wt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ce.height),wt.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),wt.pixelStorei(U.UNPACK_SKIP_ROWS,Jt),wt.pixelStorei(U.UNPACK_SKIP_IMAGES,ue);const Zi=w.isDataArrayTexture||w.isData3DTexture,mn=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const me=Xt.get(w),Je=Xt.get(N),vi=Xt.get(me.__renderTarget),Ie=Xt.get(Je.__renderTarget);wt.bindFramebuffer(U.READ_FRAMEBUFFER,vi.__webglFramebuffer),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ze=0;Ze<Lt;Ze++)Zi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.get(w).__webglTexture,X,ue+Ze),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.get(N).__webglTexture,Et,Be+Ze)),U.blitFramebuffer(zt,Jt,zt+Dt,Jt+St,Nt,de,Nt+Dt,de+St,U.DEPTH_BUFFER_BIT,U.NEAREST);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Xt.has(w)){const me=Xt.get(w),Je=Xt.get(N);wt.bindFramebuffer(U.READ_FRAMEBUFFER,C),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,O);for(let vi=0;vi<Lt;vi++)Zi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.__webglTexture,X,ue+vi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,X),mn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Je.__webglTexture,Et,Be+vi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Je.__webglTexture,Et),X!==0?U.blitFramebuffer(zt,Jt,zt+Dt,Jt+St,Nt,de,Nt+Dt,de+St,U.COLOR_BUFFER_BIT,U.NEAREST):mn?U.copyTexSubImage3D(Ut,Et,Nt,de,Be+vi,zt,Jt,Dt,St):U.copyTexSubImage2D(Ut,Et,Nt,de,zt,Jt,Dt,St);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else mn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ut,Et,Nt,de,Be,Dt,St,Lt,Ae,je,Ce.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ut,Et,Nt,de,Be,Dt,St,Lt,Ae,Ce.data):U.texSubImage3D(Ut,Et,Nt,de,Be,Dt,St,Lt,Ae,je,Ce):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Et,Nt,de,Dt,St,Ae,je,Ce.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Et,Nt,de,Ce.width,Ce.height,Ae,Ce.data):U.texSubImage2D(U.TEXTURE_2D,Et,Nt,de,Dt,St,Ae,je,Ce);wt.pixelStorei(U.UNPACK_ROW_LENGTH,ri),wt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye),wt.pixelStorei(U.UNPACK_SKIP_PIXELS,pn),wt.pixelStorei(U.UNPACK_SKIP_ROWS,ti),wt.pixelStorei(U.UNPACK_SKIP_IMAGES,Ws),Et===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Ut),wt.unbindTexture()},this.initRenderTarget=function(w){Xt.get(w).__webglFramebuffer===void 0&&Zt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Zt.setTextureCube(w,0):w.isData3DTexture?Zt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Zt.setTexture2DArray(w,0):Zt.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){G=0,z=0,ot=null,wt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}function px(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Pe;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Dc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);const p=Dc(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Dc(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new We(a,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);o.setComponent(f+u,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const pe=Math.PI*2,Ht=(s,t,e)=>Math.max(t,Math.min(e,s)),Re=(s,t,e)=>s+(t-s)*e,Q=(s=0,t=1)=>s+Math.random()*(t-s),Me=s=>s[Math.random()*s.length|0],Ir=(s,t,e)=>{let i=((t-s+Math.PI)%pe+pe)%pe-Math.PI;return s+i*e},Ms=s=>(s=((s+Math.PI)%pe+pe)%pe,s-Math.PI);function mx(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ci(s){const t=mx(s);return t.range=(e,i)=>e+t()*(i-e),t.int=(e,i)=>Math.floor(e+t()*(i-e+1)),t.pick=e=>e[Math.floor(t()*e.length)],t.chance=e=>t()<e,t}function Ai(s,t,e,i=1,n=1){const r=document.createElement("canvas");r.width=s,r.height=t;const a=r.getContext("2d");e(a,s,t);const o=new Jo(r);return o.wrapS=o.wrapT=Nr,o.repeat.set(i,n),o.anisotropy=8,o.colorSpace=ni,o}function wi(s){return"$"+Math.round(s).toLocaleString("en-US")}function Ia(s){const t=Math.floor(s)%24,e=Math.floor(s%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}class Nc{constructor(t=24){this.cell=t,this.map=new Map}key(t,e){return t+":"+e}insert(t,e,i,n,r){const a=this.cell;for(let o=Math.floor(e/a);o<=Math.floor(n/a);o++)for(let l=Math.floor(i/a);l<=Math.floor(r/a);l++){const c=this.key(o,l);let h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}query(t,e,i=0){const n=this.cell,r=new Set;for(let a=Math.floor((t-i)/n);a<=Math.floor((t+i)/n);a++)for(let o=Math.floor((e-i)/n);o<=Math.floor((e+i)/n);o++){const l=this.map.get(this.key(a,o));if(l)for(const c of l)r.add(c)}return r}}function $h(s=16757847){const t=new $t,e=new ce({color:s,transparent:!0,opacity:.9,depthWrite:!1,blending:qi}),i=new k(new il(1.6,2.1,32),e);i.rotation.x=-Math.PI/2,i.position.y=.25;const n=new ce({color:s,transparent:!0,opacity:.18,depthWrite:!1,blending:qi,side:Si}),r=new k(new le(1,1.4,38,18,1,!0),n);return r.position.y=19,t.add(i,r),t.userData.ring=i,t.userData.beam=r,t.userData.t=0,t}function Zh(s,t){s.userData.t+=t;const e=1+Math.sin(s.userData.t*3)*.12;s.userData.ring.scale.setScalar(e),s.userData.ring.material.opacity=.55+Math.sin(s.userData.t*3)*.25,s.userData.beam.material.opacity=.09+Math.sin(s.userData.t*1.7)*.03,s.rotation.y+=t*.4}function Jr(s,t,e,i,n,r){s.fillStyle=i,s.fillRect(0,0,t,e);for(let a=0;a<n;a++){const o=r()*t,l=r()*e,c=r()*.09;s.fillStyle=r()>.5?`rgba(255,255,255,${c})`:`rgba(0,0,0,${c})`,s.fillRect(o,l,1+r()*2,1+r()*2)}}function gx(s=4){const t=ci(s);return Ai(256,256,(e,i,n)=>{Jr(e,i,n,"#22252b",5200,t),e.strokeStyle="rgba(0,0,0,.22)",e.lineWidth=1;for(let r=0;r<7;r++){e.beginPath();let a=t()*i,o=t()*n;e.moveTo(a,o);for(let l=0;l<4;l++)a+=t()*30-15,o+=t()*30,e.lineTo(a,o);e.stroke()}for(let r=0;r<20;r++)e.fillStyle=`rgba(255,255,255,${.02+t()*.03})`,e.fillRect(t()*i,t()*n,t()*20+3,1)})}function Uc(s=7,t="#777a7b"){const e=ci(s);return Ai(256,256,(i,n,r)=>{Jr(i,n,r,t,3600,e),i.strokeStyle="rgba(0,0,0,.18)",i.lineWidth=2,i.strokeRect(0,0,n,r),i.strokeStyle="rgba(255,255,255,.05)",i.strokeRect(1,1,n-2,r-2)})}function xx(s=11){const t=ci(s);return Ai(256,256,(e,i,n)=>{Jr(e,i,n,"#4b633c",9e3,t);for(let r=0;r<700;r++){e.strokeStyle=`rgba(${40+t()*50},${75+t()*60},${35+t()*30},${.3+t()*.5})`,e.beginPath();const a=t()*i,o=t()*n;e.moveTo(a,o),e.lineTo(a+t()*3-1.5,o-2-t()*4),e.stroke()}})}function vx(s=15){const t=ci(s);return Ai(256,256,(e,i,n)=>{Jr(e,i,n,"#b9a67c",8500,t);for(let r=0;r<80;r++){e.strokeStyle=`rgba(90,70,45,${.08+t()*.1})`,e.beginPath();const a=t()*n;e.moveTo(0,a),e.bezierCurveTo(i*.3,a+t()*12,i*.6,a-t()*12,i,a+t()*8),e.stroke()}})}function _x(s,t,e,i,n="glass"){const r=Ai(256,256,(o,l,c)=>{o.fillStyle=s,o.fillRect(0,0,l,c);const h=ci(i);for(let u=0;u<4;u++)o.fillStyle=`rgba(255,255,255,${.015+h()*.02})`,o.fillRect(u*64+2,0,60,c);for(let u=0;u<4;u++){for(let f=0;f<4;f++){const d=f*64+11,p=u*64+9,x=42,m=38,g=o.createLinearGradient(d,p,d+x,p+m);if(g.addColorStop(0,t),g.addColorStop(.55,"#1a222c"),g.addColorStop(1,"#0c1118"),o.fillStyle=g,o.fillRect(d,p,x,m),o.fillStyle="rgba(190,225,255,.12)",o.fillRect(d+2,p+2,x-4,2),o.fillStyle="rgba(0,0,0,.32)",o.fillRect(d+x/2-1,p,2,m),h()>.64&&(o.fillStyle=`rgba(240,245,255,${.05+h()*.09})`,o.fillRect(d,p,x,m)),n==="brick"){o.fillStyle="rgba(255,255,255,.06)";for(let y=p;y<p+m;y+=7)o.fillRect(d,y,x,1)}}o.fillStyle="rgba(0,0,0,.23)",o.fillRect(0,u*64+59,l,5)}}),a=Ai(256,256,(o,l,c)=>{o.fillStyle="#000",o.fillRect(0,0,l,c);const h=ci(i+871);for(let u=0;u<4;u++)for(let f=0;f<4;f++){if(h()>.42)continue;const d=f*64+11,p=u*64+9,x=h()>.25;o.fillStyle=x?e:"#b8dfff",o.globalAlpha=.35+h()*.65,o.fillRect(d+1,p+1,40,36)}o.globalAlpha=1});return{diffuse:r,emissive:a}}function Sn(s,t,e,i=""){return Ai(512,256,(n,r,a)=>{n.fillStyle=t,n.fillRect(0,0,r,a),n.strokeStyle="rgba(255,255,255,.25)",n.lineWidth=8,n.strokeRect(10,10,r-20,a-20),n.fillStyle=e,n.font="700 92px Inter, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,r/2,a/2-(i?18:0)),i&&(n.font="500 26px Inter, sans-serif",n.globalAlpha=.7,n.fillText(i,r/2,a/2+66))})}function Kh(s,t,e,i){return Ai(512,256,(n,r,a)=>{const o=n.createLinearGradient(0,0,r,a);o.addColorStop(0,e),o.addColorStop(1,i),n.fillStyle=o,n.fillRect(0,0,r,a);for(let l=0;l<14;l++)n.fillStyle=`rgba(255,255,255,${.03+Math.random()*.04})`,n.beginPath(),n.arc(Math.random()*r,Math.random()*a,20+Math.random()*80,0,Math.PI*2),n.fill();n.fillStyle="rgba(255,255,255,.92)",n.font="700 64px Space Grotesk, sans-serif",n.textAlign="left",n.fillText(s,40,128),n.fillStyle="rgba(255,255,255,.62)",n.font="500 22px Inter, sans-serif",n.fillText(t,42,168),n.fillStyle="rgba(255,255,255,.2)",n.fillRect(40,190,150,3)})}function Po(){return Ai(128,128,(s,t,e)=>{const i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.28,"rgba(255,226,170,.7)"),i.addColorStop(1,"rgba(255,200,100,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)})}function Mx(){return Ai(128,128,(s,t,e)=>{const i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(255,255,255,.55)"),i.addColorStop(.5,"rgba(210,215,225,.25)"),i.addColorStop(1,"rgba(200,205,215,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)})}function yx(){return Ai(32,32,(s,t,e)=>{const i=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(210,230,255,.6)"),i.addColorStop(1,"rgba(210,230,255,0)"),s.fillStyle=i,s.fillRect(0,0,t,e)})}function Sx(){const s=gx(),t=Uc(7,"#8b8d8c");return s.repeat.set(3,150),t.repeat.set(1.2,160),{asphalt:new q({map:s,color:16777215,roughness:.94,metalness:.02}),sidewalk:new q({map:t,color:16777215,roughness:.92}),lot:new q({map:Uc(9,"#85847f"),roughness:.98}),grass:new q({map:xx(),roughness:1}),sand:new q({map:vx(),roughness:1})}}function wx(s){const t=s.scene,e=new Xe(1900,32,20),i=new Ui({side:li,depthWrite:!1,uniforms:{topColor:{value:new kt(3108520)},bottomColor:{value:new kt(12047334)},night:{value:0},storm:{value:0},sunDir:{value:new P(0,1,0)}},vertexShader:"varying vec3 vWorld; void main(){ vWorld = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`}),n=new k(e,i);n.frustumCulled=!1,t.add(n),s.sky=n;const r=new gf(16771012,2.4);r.position.set(300,500,200),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),r.shadow.camera.near=10,r.shadow.camera.far=1500,r.shadow.camera.left=-280,r.shadow.camera.right=280,r.shadow.camera.top=280,r.shadow.camera.bottom=-280,r.shadow.bias=-.0012,r.shadow.normalBias=.6,t.add(r),t.add(r.target),s.sun=r;const a=new ff(10340607,3883568,.6);t.add(a),s.hemi=a;const o=new xf(12113151,.24);t.add(o),s.ambient=o;const l=new So({map:Po(),color:13624575,transparent:!0,opacity:0,depthWrite:!1,blending:qi}),c=new Bl(l);c.scale.set(70,70,1),c.position.set(-500,900,-600),t.add(c),s.moon=c;const h=new Pe,u=new Float32Array(1400*3);for(let x=0;x<1400;x++){const m=Math.random()*pe,g=Math.acos(2*Math.random()-1),_=1500;u[x*3]=Math.sin(g)*Math.cos(m)*_,u[x*3+1]=Math.abs(Math.cos(g))*_*.8+120,u[x*3+2]=Math.sin(g)*Math.sin(m)*_}h.setAttribute("position",new We(u,3));const f=new Jn({map:yx(),size:6,transparent:!0,opacity:0,depthWrite:!1,blending:qi,sizeAttenuation:!0}),d=new Qn(h,f);t.add(d),s.stars=d;const p=new So({map:bx(),color:15922943,transparent:!0,opacity:.85,depthWrite:!1});s.cloudSpriteMat=p;for(let x=0;x<30;x++){const m=new Bl(p),g=90+Math.random()*180;m.scale.set(g*2.1,g*.8,1),m.position.set(Q(-900,900),Q(130,220),Q(-900,900)),m.userData.speed=Q(1.5,4.5),t.add(m),s.clouds.push(m)}}function bx(){const s=document.createElement("canvas");s.width=256,s.height=128;const t=s.getContext("2d");for(let i=0;i<34;i++){const n=30+Math.random()*196,r=64+(Math.random()-.5)*40,a=12+Math.random()*30,o=t.createRadialGradient(n,r,0,n,r,a);o.addColorStop(0,"rgba(255,255,255,.5)"),o.addColorStop(.55,"rgba(240,246,255,.22)"),o.addColorStop(1,"rgba(240,246,255,0)"),t.fillStyle=o,t.beginPath(),t.arc(n,r,a,0,pe),t.fill()}const e=new Jo(s);return e.colorSpace=ni,e}function Ex(s,t){const e=s.root,i=new we,n=new le(.09,.14,5.6,6),r=new q({color:3159611,roughness:.7,metalness:.5}),a=new Z(2.4,.1,.1),o=new Z(1.1,.18,.4),l=new q({color:16770744,emissive:16764810,emissiveIntensity:2.2,roughness:.4}),c=[];for(let F=0;F<Ve;F++){const C=Yt(F);for(let O=-ze+12;O<=ze-12;O+=44)for(const G of[-1,1])c.push({pole:[C+G*(He+3.4),2.85,O],arm:[C+G*(He+2.4),5.5,O],armR:0,head:[C+G*(He+1.6),5.45,O]}),c.push({pole:[O,2.85,C+G*(He+3.4)],arm:[O,5.5,C+G*(He+2.4)],armR:Math.PI/2,head:[O,5.45,C+G*(He+1.6)]})}const h=new Fe(n,r,c.length),u=new Fe(a,r,c.length),f=new Fe(o,l,c.length);c.forEach((F,C)=>{i.position.set(...F.pole),i.rotation.set(0,0,0),i.updateMatrix(),h.setMatrixAt(C,i.matrix),i.position.set(...F.arm),i.rotation.set(0,F.armR,0),i.updateMatrix(),u.setMatrixAt(C,i.matrix),i.position.set(...F.head),i.rotation.set(0,0,0),i.updateMatrix(),f.setMatrixAt(C,i.matrix)}),h.castShadow=!0,e.add(h,u,f);const d=new Pe,p=new Float32Array(c.length*3);c.forEach((F,C)=>{p[C*3]=F.head[0],p[C*3+1]=F.head[1]-.1,p[C*3+2]=F.head[2]}),d.setAttribute("position",new We(p,3));const x=new Jn({map:Po(),color:16762236,size:6,transparent:!0,opacity:.35,depthWrite:!1,blending:qi,sizeAttenuation:!0}),m=new Qn(d,x);m.frustumCulled=!1,e.add(m),s.lampGlow=m;const g=new le(.16,.2,.6,8),_=new q({color:11549230,roughness:.7}),y=new Fe(g,_,44);for(let F=0;F<44;F++){const C=Math.floor(Math.random()*Ve),O=Yt(C),G=Q(-ze+20,ze-20),z=Math.random()>.5?1:-1;i.position.set(Math.random()>.5?O+z*10:G,.45,Math.random()>.5?G:O+z*10),i.updateMatrix(),y.setMatrixAt(F,i.matrix)}e.add(y);const M=new le(.32,.26,.9,8),T=new q({color:3621450,roughness:.8}),E=new Fe(M,T,55);for(let F=0;F<55;F++){const C=Math.floor(Math.random()*Ve),O=Yt(C),G=Q(-ze+20,ze-20),z=Math.random()>.5?1:-1;i.position.set(Math.random()>.5?O+z*10.2:G,.6,Math.random()>.5?G:O+z*10.2),i.updateMatrix(),E.setMatrixAt(F,i.matrix)}e.add(E);const v=[[-260,-192,Math.PI/2],[132,-96,Math.PI/2],[96,180,0],[-96,96,0],[260,48,Math.PI/2],[-192,260,0],[288,-240,Math.PI/2],[-48,-300,0]];for(const[F,C,O]of v){s.busStops.push({x:F,z:C});const G=new $t;G.position.set(F,.15,C),G.rotation.y=O;const z=new k(new Z(5.6,.18,2.2),new q({color:3028800,roughness:.7,metalness:.4}));z.position.y=2.7,G.add(z);const ot=new k(new Z(5.2,2.5,.08),new q({color:10471133,transparent:!0,opacity:.28,roughness:.05,metalness:.3}));ot.position.set(0,1.4,-1),G.add(ot);for(const rt of[-2.6,2.6]){const K=new k(new Z(.1,2.7,.1),s.metalMat);K.position.set(rt,1.35,-1),G.add(K)}const Y=new k(new Z(4.2,.16,.55),s.woodMat);Y.position.set(0,.58,-.7),G.add(Y);const et=new k(new oe(.9,.9),new ce({map:Sn("BUS","#1c5a8a","#eef8ff"),transparent:!0}));et.position.set(2.9,1.8,0),G.add(et),e.add(G),s.busStops[s.busStops.length-1].mesh=G}[["SOLARIS","clean energy · bright future","#062c46","#1188b8"],["VOLT","the city runs electric","#2b0a3d","#8a37b8"],["AURORA","live above it all","#3c1a08","#c86a23"],["NOVA AIR","fly beyond the skyline","#082c33","#16a6a0"]].forEach((F,C)=>{const O=C*Math.PI/2+.4,G=Math.cos(O)*190,z=Math.sin(O)*190,ot=new ce({map:Kh(F[0],F[1],F[2],F[3])}),Y=new k(new oe(28,14),ot);Y.position.set(G,42+C*3,z),Y.lookAt(0,30,0),e.add(Y);for(const et of[-1,1]){const rt=new k(new Z(.5,8,.5),s.metalMat);rt.position.set(G+et*8,38,z),e.add(rt)}});for(let F=0;F<8;F++)for(let C=0;C<8;C++){const O=s.blocks.find(G=>G.bi===F&&G.bj===C);if(!(!O||!["suburb","residential","waterfront","park"].includes(O.district)))for(let G=0;G<4;G++){const z=Math.floor(Math.random()*4),ot=Q(-30,30);z===0&&s.tree(O.x+ot,O.z-35.6,Q(.55,.9)),z===1&&s.tree(O.x+ot,O.z+35.6,Q(.55,.9)),z===2&&s.tree(O.x-35.6,O.z+ot,Q(.55,.9)),z===3&&s.tree(O.x+35.6,O.z+ot,Q(.55,.9))}}const D=new Pe,R=new Float32Array(360);for(let F=0;F<120;F++)R[F*3]=-24+Q(-25,25),R[F*3+1]=Q(.6,4),R[F*3+2]=-24+Q(-25,25);D.setAttribute("position",new We(R,3));const L=new Jn({color:16769162,size:.35,transparent:!0,opacity:.7,map:Po(),blending:qi,depthWrite:!1}),B=new Qn(D,L);if(e.add(B),s.fireflyPoints=B,s.factorySmokePos){const F=new Pe,C=new Float32Array(210);for(let z=0;z<70;z++)C[z*3]=s.factorySmokePos.x+Q(-2,2),C[z*3+1]=Q(0,48),C[z*3+2]=s.factorySmokePos.z+Q(-2,2);F.setAttribute("position",new We(C,3));const O=new Jn({map:Mx(),color:9211020,size:10,transparent:!0,opacity:.28,depthWrite:!1}),G=new Qn(F,O);G.frustumCulled=!1,e.add(G),s.smokeParticles=G}s.finalizeProps()}function Tx(s,t){const e=s.root,i=new k(new oe(1700,100),s.mats.sand);i.rotation.x=-Math.PI/2,i.position.set(0,.05,438),i.receiveShadow=!0,e.add(i);const n=new k(new oe(1400,12),s.mats.sidewalk);n.rotation.x=-Math.PI/2,n.position.set(0,.12,392),e.add(n);const r=new q({color:7166531,roughness:.9});for(let p=-420;p<=420;p+=16){const x=new k(new Z(.16,1.1,.16),r);x.position.set(p,.65,398),e.add(x)}const a=new k(new Z(840,.1,.12),r);a.position.set(0,1.15,398),e.add(a);for(let p=0;p<18;p++){const x=-400+p*46+Q(-8,8),m=404+p%2*6,g=new $t,_=new k(new le(.18,.32,7,6),new q({color:8020551,roughness:1}));_.position.y=3.5,g.add(_);for(let y=0;y<6;y++){const M=new k(new un(.8,4.4,5),new q({color:3103282,roughness:1}));M.position.set(Math.cos(y/6*pe)*1.4,7.2,Math.sin(y/6*pe)*1.4),M.rotation.set(Math.cos(y/6*pe)*.9,0,Math.sin(y/6*pe)*.9+.5),g.add(M)}g.position.set(x,.1,m),e.add(g)}const o=new oe(2600,1300,80,40),l=new Ui({uniforms:{time:{value:0},night:{value:0},deep:{value:new kt(670546)},shallow:{value:new kt(2788518)},sky:{value:new kt(10405597)}},vertexShader:`
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
      }`,transparent:!0}),c=new k(o,l);c.rotation.x=-Math.PI/2,c.position.set(0,.02,920),e.add(c),s.water=c;const h=new k(new oe(1700,3),new ce({color:15202047,transparent:!0,opacity:.5}));h.rotation.x=-Math.PI/2,h.position.set(0,.09,486),e.add(h),s.animated.push({type:"foam",mesh:h});const u=new q({color:8085313,roughness:.95});for(let p=0;p<4;p++){const x=new k(new Z(4,.35,26),u);x.position.set(300+p*13,.35,460),e.add(x)}const f=new k(new Z(52,.4,6),u);f.position.set(319,.4,444),e.add(f);const d=new k(new oe(7,2.4),new ce({map:Sn("MARINA","#123a4a","#d8f4ff"),transparent:!0}));d.position.set(319,2.6,440),e.add(d),s.marina={x:319,z:452},s.addPOI("marina","Harbor Marina",319,442,20,{icon:"marina"});for(let p=0;p<14;p++){const x=-380+p*55,m=414+p%3*8,g=new k(new le(.05,.05,2.6,5),s.metalMat);g.position.set(x,1.35,m),e.add(g);const _=new k(new un(2,.6,10),new q({color:Me([14248795,5214115,14726236,7183991]),roughness:.9,side:Si}));_.position.set(x,2.7,m),e.add(_)}}function Ax(s,t){const e=s.root,i=250,n=14,r=18,a=new q({color:9411235,roughness:.4,metalness:.55}),o=new q({color:4871520,roughness:.5,metalness:.5}),l=new $t,c=2*(i-r),h=[[0,-i,c,3.2,0],[0,i,c,3.2,0],[-i,0,3.2,c,0],[i,0,3.2,c,0]];for(const[K,it,W,ct]of h){const Ct=new k(new Z(W,.9,ct),a);Ct.position.set(K,n,it),Ct.castShadow=!0,l.add(Ct);const Ot=new k(new Z(W+.2,.16,ct+.2),o);Ot.position.set(K,n+.52,it),l.add(Ot)}const u=[[i-r,-i+r,-Math.PI/2],[i-r,i-r,0],[-i+r,i-r,Math.PI/2],[-i+r,-i+r,Math.PI]];for(const[K,it,W]of u)Oc(l,K,it,r,W,W+Math.PI/2,n,.9,3.2,a),Oc(l,K,it,r,W,W+Math.PI/2,n+.52,.16,3.4,o);const f=new le(.75,.95,n,8);for(let K=-i;K<=i;K+=25)for(const it of[-i,i]){const W=new k(f,o);W.position.set(K,n/2,it),W.castShadow=!0,l.add(W)}for(let K=-i+25;K<=i-25;K+=25)for(const it of[-i,i]){const W=new k(f,o);W.position.set(it,n/2,K),W.castShadow=!0,l.add(W)}const d=[{x:0,z:-i,ang:0,name:"NORTH LOOP"},{x:i,z:0,ang:Math.PI/2,name:"EAST GATE"},{x:0,z:i,ang:Math.PI,name:"HARBOR VIEW"},{x:-i,z:0,ang:-Math.PI/2,name:"WEST END"}];for(let K=0;K<d.length;K++){const it=d[K],W=new k(new Z(28,.6,7),a);W.position.set(it.x+Math.cos(it.ang)*0,n-.9,it.z+0),l.add(W);const ct=new k(new Z(26,.25,6),new q({color:14149872,roughness:.3,metalness:.2,transparent:!0,opacity:.65}));ct.position.set(it.x,n+4.4,it.z),l.add(ct);for(let It=-1;It<=1;It+=2){const yt=new k(new Z(.28,5.3,.28),o);yt.position.set(it.x+It*12,n+2.1,it.z),l.add(yt)}const Ct=new k(new Z(28,.2,7),new q({color:5267568,roughness:.5}));Ct.position.set(it.x,n+4.6,it.z),l.add(Ct);const Ot=new ce({map:Sn("MONORAIL","#071d2b","#8ceaff",it.name),transparent:!0}),Tt=new k(new oe(6,3),Ot);Tt.position.set(it.x,n+2.8,it.z),Tt.rotation.y=it.ang+Math.PI,l.add(Tt);const Ft=it.x,ve=it.z+10,Vt=new k(new Z(5.5,n,5.5),new q({color:4148312,roughness:.35,metalness:.4}));Vt.position.set(Ft,n/2,ve),l.add(Vt);const jt=new k(new Z(4.2,n-1.5,4.4),new q({color:7325149,transparent:!0,opacity:.45,roughness:.1,metalness:.6}));jt.position.set(Ft,n/2,ve),l.add(jt);const ee=new k(new Z(6.4,.4,6.4),a);ee.position.set(Ft,n+.4,ve),l.add(ee);const st=new $t;st.position.set(Ft,0,ve+5);const mt=new k(new le(.08,.1,2.8,6),o);mt.position.y=1.4,st.add(mt);const pt=new k(new oe(2.2,1.1),new ce({map:Sn("NOVA RAIL","#081c2b","#8ceaff",it.name),transparent:!0}));pt.position.set(0,3.2,0),st.add(pt),l.add(st),s.addPOI("monorail",it.name+" Monorail",Ft,ve+2,7,{icon:"transit",station:K}),it.tower=new P(Ft,0,ve),it.platformY=n}const p=Cx();p.position.set(0,n+1.1,-i),l.add(p),e.add(l);const x=4*(2*i),m={group:p,progress:0,speed:11,targetSpeed:11,dwell:0,manual:!1,stations:d,Y:n,R:i,perimeter:x,doorOpen:!1,currentStation:-1,lastStation:-1,stopAt:null,riding:!1,update(K,it){if(this.manual){this.targetSpeed=Ht(this.targetSpeed,0,24),this.speed=ls.damp(this.speed,this.targetSpeed,1.6,K),this.speed*=1-K*.12,this.progress=(this.progress+this.speed*K)%this.perimeter,this.speed<0&&(this.speed=0),this.positionCars();return}const W=this.nextStationDistance();this.dwell>0?(this.dwell-=K,this.speed=ls.damp(this.speed,0,6,K),this.doorOpen=!0):(this.doorOpen=!1,W<26&&this.speed>0?(this.speed=ls.damp(this.speed,0,3.4,K),W<1.6&&(this.dwell=5.5,this.speed=0,this.currentStation=this.stationAt(this.progress))):this.speed=ls.damp(this.speed,11,1.1,K),this.progress=(this.progress+this.speed*K)%this.perimeter),this.positionCars(),this.animateDoors(K)},nextStationDistance(){let K=1e9;for(const it of this.stations){let ct=(this.stationProgress(it)-this.progress+this.perimeter)%this.perimeter;ct<2&&(ct=this.perimeter),K=Math.min(K,ct)}return K},stationProgress(K){const it=this.perimeter/4;return Math.abs(K.z+i)<1?it*.5:Math.abs(K.x-i)<1?it*1.5:Math.abs(K.z-i)<1?it*2.5:it*3.5},stationAt(K){let it=-1,W=30;for(let ct=0;ct<this.stations.length;ct++){const Ct=this.stationProgress(this.stations[ct]);let Ot=Math.abs((K-Ct+this.perimeter/2)%this.perimeter-this.perimeter/2);Ot<W&&(W=Ot,it=ct)}return it},positionCars(){const K=Rx(this.progress,this.perimeter,this.R);this.group.position.set(K.x,this.Y+1.1,K.z),this.group.rotation.y=-K.angle+Math.PI/2;for(let it=1;it<this.group.userData.cars.length;it++)this.group.userData.cars[it].position.set(0,0,-it*10.6)},animateDoors(K){const it=this.group.userData.doors||[];for(const W of it)W.scale.x=ls.damp(W.scale.x,this.doorOpen?.05:1,5,K)},board(){return this.dwell=5,!0},stationPositions(){return this.stations.map(K=>K.tower)}};s.monorail=m;const g=.1,_=-446;new $t;const y=new k(new Z(1200,.25,8),new q({color:4012596,roughness:1}));y.position.set(0,.06,_),e.add(y);const M=new Z(.3,.12,3.4),T=new Fe(M,s.woodMat,300),E=new we;for(let K=0;K<300;K++)E.position.set(-600+K*4,g+.1,_),E.rotation.set(0,Math.PI/2,0),E.updateMatrix(),T.setMatrixAt(K,E.matrix);e.add(T);for(const K of[-1,1]){const it=new k(new Z(1200,.12,.16),new q({color:10133668,roughness:.3,metalness:.8}));it.position.set(0,g+.2,_+K*.75),e.add(it)}const v=new $t,b=new k(new Z(90,1.1,8),s.concreteMat);b.position.set(170,.55,-438),v.add(b);const D=new k(new Z(80,.3,9),new q({color:3752522,roughness:.6,metalness:.3}));D.position.set(170,5.3,-438),v.add(D);for(let K=-38;K<=38;K+=12){const it=new k(new Z(.2,4.8,.2),s.metalMat);it.position.set(170+K,2.7,-438),v.add(it)}const R=new k(new oe(12,3),new ce({map:Sn("NOVA CENTRAL","#0b1b2b","#cfefff","RAIL TERMINAL"),transparent:!0}));R.position.set(170,3.7,-434),v.add(R);const L=new k(new Z(9,1.2,6),s.concreteMat);L.position.set(170,.45,-430),v.add(L),e.add(v),s.addPOI("train","Nova Central Rail",170,-430,16,{icon:"transit"});const B=Px();B.position.set(-420,g+.3,_),e.add(B),s.rail={group:B,speed:16,progress:0,length:1200,dwell:0,update(K){this.progress=(this.progress+this.speed*K)%1200,this.group.position.x=-600+this.progress,this.speed>0&&this.group.userData.wheels?.forEach(it=>it.rotation.x+=K*8)}};const F=8.5,C=-392,O=new $t,G=new k(new Z(1280,.8,20),new q({color:3488578,roughness:.9}));G.position.set(0,F,C),O.add(G);for(const K of[-1,1]){const it=new k(new Z(1280,.9,.25),new q({color:9279134,roughness:.5,metalness:.5}));it.position.set(0,F+1,C+K*9.8),O.add(it)}const z=new le(1.1,1.3,F,8);for(let K=-620;K<=620;K+=40){const it=new k(z,s.concreteMat);it.position.set(K,F/2,C),O.add(it)}e.add(O);for(let K=0;K<12;K++){const it=new $t,W=new k(new Z(3.6,1.1,1.8),new q({color:Me([9121587,3100538,13684936,3026484,10124082]),roughness:.6,metalness:.3}));W.position.y=.8,it.add(W);const ct=new k(new Z(1.9,.8,1.6),new q({color:1779764,roughness:.2,metalness:.5}));ct.position.set(-.1,1.55,0),it.add(ct),it.position.set(Q(-600,600),F+.6,C+(K%2?4:-4)),it.userData.speed=16+Math.random()*10,it.userData.lane=C,e.add(it),s.highwayCars.push(it)}const ot=new $t,Y=new k(new Z(6,14,30),new q({color:5987938,roughness:.95}));Y.position.set(430,7,120),ot.add(Y);const et=new k(new Z(.2,8,14),new ce({color:329482}));et.position.set(427,4.2,120),ot.add(et),e.add(ot);const rt=new k(new oe(60,30),new q({color:3027510,roughness:1}));rt.rotation.x=-Math.PI/2,rt.position.set(96,.17,336),e.add(rt)}function Oc(s,t,e,i,n,r,a,o,l,c){for(let u=0;u<12;u++){const f=n+(r-n)*u/12,d=n+(r-n)*(u+1)/12,p=(f+d)*.5,x=Math.cos(p)*i,m=Math.sin(p)*i,g=i*Math.abs(d-f),_=new k(new Z(l,o,g+.12),c);_.position.set(t+x,a,e+m),_.rotation.y=-p,_.castShadow=!0,s.add(_)}}function Rx(s,t,e){const i=t/4;let n=s%t;return n<i?{x:-e+n,z:-e,angle:0}:(n-=i,n<i?{x:e,z:-e+n,angle:Math.PI/2}:(n-=i,n<i?{x:e-n,z:e,angle:Math.PI}:(n-=i,{x:-e,z:e-n,angle:-Math.PI/2})))}function Cx(){const s=new $t,t=new q({color:15265522,roughness:.3,metalness:.25}),e=new q({color:1916759,roughness:.1,metalness:.55}),i=new q({color:3520728,emissive:1929344,emissiveIntensity:.9,roughness:.4}),n=[],r=[];for(let a=0;a<3;a++){const o=new $t,l=new k(new Z(2.8,2.3,9.6),t);l.position.y=1.35,o.add(l);const c=new k(new Z(2.7,1.4,1.4),t);c.position.set(0,1.05,5.2),o.add(c);const h=new k(new Z(2.86,.3,8.5),i);h.position.y=1.1,o.add(h);const u=new k(new Z(2.9,.8,7.4),e);u.position.y=2,o.add(u);const f=new k(new Z(2.6,.25,8.8),i);f.position.y=2.65,o.add(f);const d=new k(new Z(1.1,1.6,.1),e);d.position.set(1.45,1.55,0),o.add(d),r.push(d);const p=d.clone();p.position.x=-1.45,o.add(p),r.push(p),o.position.z=-a*10.5,s.add(o),n.push(o)}return s.userData.cars=n,s.userData.doors=r,s}function Px(){const s=new $t,t=new q({color:10134440,roughness:.55,metalness:.35}),e=new q({color:2569021,roughness:.35,metalness:.4}),i=new q({color:14135871,roughness:.5}),n=[],r=(a,o,l)=>{const c=new $t,h=new k(new Z(3.1,3.2,o),t);h.position.y=2.2,c.add(h);const u=new k(new Z(3.12,.9,o-1.2),e);u.position.y=2.8,c.add(u);const f=new k(new Z(3.13,.3,o),i);if(f.position.y=1.3,c.add(f),l){const d=new k(new Z(3,2.4,2),t);d.position.set(0,1.9,o/2+.9),c.add(d);const p=new k(new Xe(.25,8,6),new ce({color:16773824}));p.position.set(0,2.1,o/2+1.9),c.add(p)}for(const d of[-1,1])for(const p of[-o/2+2,o/2-2]){const x=new k(new le(.55,.55,.3,10),new q({color:2237994,roughness:.9}));x.rotation.z=Math.PI/2,x.position.set(d*1.55,.65,p),c.add(x),n.push(x);const m=x.clone();m.position.x=d*1.2,c.add(m)}c.position.z=a,s.add(c)};return r(0,14,!0),r(-17,15,!1),r(-34,15,!1),r(-51,15,!1),s.userData.wheels=n,s}function Lx(s,t){const e=s.root,i=610,n=-60,r=new k(new oe(420,500),new q({color:4871742,roughness:1}));r.rotation.x=-Math.PI/2,r.position.set(i,.03,n),e.add(r);const a=new k(new oe(42,360),new q({color:2435116,roughness:.95}));a.rotation.x=-Math.PI/2,a.position.set(i+60,.08,n),e.add(a);const o=new ce({color:15263449});for(let g=-160;g<160;g+=20){const _=new k(new oe(1,10),o);_.rotation.x=-Math.PI/2,_.position.set(i+60,.1,n+g),e.add(_)}const l=new k(new oe(18,220),new q({color:3422268,roughness:.95}));l.rotation.x=-Math.PI/2,l.position.set(i+28,.07,n),e.add(l);const c=new k(new Z(50,12,26),new q({color:9213596,roughness:.4,metalness:.3}));c.position.set(i-40,6,n+80),e.add(c);const h=new k(new Z(46,7,26.4),new q({color:4026250,roughness:.1,metalness:.7,transparent:!0,opacity:.8}));h.position.set(i-40,6,n+80),e.add(h);const u=new k(new oe(18,4),new ce({map:Sn("NOVA AIR","#082b3a","#d8f5ff","INTERNATIONAL"),transparent:!0}));u.position.set(i-40,11,n+93.4),e.add(u);const f=new k(new le(2,3,22,10),new q({color:12107714,roughness:.7}));f.position.set(i-10,11,n+130),e.add(f);const d=new k(new le(4.5,3.5,4,12),new q({color:2903907,roughness:.1,metalness:.6}));d.position.set(i-10,24,n+130),e.add(d);const p=new k(new le(18,18,40,12,1,!1,0,Math.PI),new q({color:7305341,roughness:.7,metalness:.3}));p.rotation.z=Math.PI/2,p.rotation.y=Math.PI/2,p.position.set(i-55,.2,n-120),e.add(p);const x=Fc();x.position.set(i+60,.7,n-80),x.rotation.y=Math.PI,e.add(x),s.airportAirliner=x;const m=Fc();m.scale.setScalar(1.5),m.position.set(-300,190,-200),e.add(m),s.flyingPlane={group:m,t:0},s.addPOI("airport","Nova International Airport",i-40,n+80,40,{icon:"airport"}),s.addPOI("airport","Runway 09",i+60,n,50,{icon:"airport"})}function Fc(){const s=new $t,t=new q({color:15330800,roughness:.35,metalness:.25}),e=new q({color:1793418,roughness:.4}),i=new k(new le(2.2,2.2,30,14),t);i.rotation.x=Math.PI/2,i.position.y=2.8,s.add(i);const n=new k(new Xe(2.2,12,10),t);n.position.set(0,2.8,15),s.add(n);const r=new k(new un(2.1,5,12),t);r.rotation.x=Math.PI/2,r.position.set(0,2.8,-17),s.add(r);const a=new k(new le(2.23,2.23,22,14),e);a.rotation.x=Math.PI/2,a.position.y=2.6,s.add(a);const o=new k(new Z(38,.4,6),t);o.position.set(0,2.7,1),s.add(o);const l=new k(new Z(.4,6,5),t);l.position.set(0,6,-15),s.add(l);const c=new k(new le(1.1,1.1,4,10),e);c.rotation.x=Math.PI/2,c.position.set(-9,2.1,1),s.add(c);const h=c.clone();h.position.x=9,s.add(h);for(let u=0;u<14;u++){const f=new k(new Z(.35,.45,.35),new ce({color:10475240}));f.position.set(1,3.1,12-u*1.7),s.add(f)}return s}function Ix(s,t){const e=s.root;for(let d=0;d<260;d++){const p=t()*pe,x=470+t()*220;let m=Math.cos(p)*x,g=Math.sin(p)*x;g>400||m>430&&g>-300&&g<200||s.tree(m,g,1.2+t()*1.4)}const i=new q({color:4149814,roughness:1,flatShading:!0});for(let d=0;d<18;d++){const p=t()*pe,x=700+t()*200,m=new k(new un(70+t()*90,40+t()*70,7),i);m.position.set(Math.cos(p)*x,10,Math.sin(p)*x),e.add(m)}const n=220,r=new le(.4,.6,6,5),a=new Gs(4,0),o=new q({color:4863781,roughness:1}),l=new q({color:3099174,roughness:1,flatShading:!0}),c=new Fe(r,o,n),h=new Fe(a,l,n),u=new we;let f=0;for(let d=0;d<900&&f<n;d++){const p=t()*pe,x=480+t()*240,m=Math.cos(p)*x,g=Math.sin(p)*x;if(g>400||m>440&&m<800&&g>-250&&g<200)continue;const _=.8+t()*1.2;u.position.set(m,3*_,g),u.scale.setScalar(_),u.rotation.set(0,t()*pe,0),u.updateMatrix(),c.setMatrixAt(f,u.matrix),u.position.set(m,7*_,g),u.scale.set(_,_*(1+t()*.5),_),u.updateMatrix(),h.setMatrixAt(f,u.matrix),f++}e.add(c,h);for(let d=0;d<6;d++){const p=-520+d*40,x=-480,m=new k(new le(5,5,16,12),new q({color:9146256,roughness:.6,metalness:.4}));m.position.set(p,8,x),e.add(m)}}const Ve=9,an=96,Yn=16,He=Yn/2,Yt=s=>(s-4)*an,zc=s=>(s-4)*an+an/2,ze=(Ve-1)/2*an,Dx={"3,3":"park","5,5":"hospital","5,4":"police","2,3":"fire","3,4":"garage","4,5":"dealership","3,2":"apartment","2,5":"shop","6,3":"office","1,2":"industrial","7,5":"hotel"};class Nx{constructor(t){this.scene=t,this.root=new $t,this.root.name="city",t.add(this.root),this.colliders=[],this.spatial=new Nc(32),this.blocks=[],this.pois=[],this.parkingSpots=[],this.busStops=[],this.facadeMaterials=[],this.emissiveMats=[],this.signalNodes=[],this.seed=7781,this.hour=6.4,this.night=0,this.weather="clear",this.clouds=[],this.animated=[],this.lampGlow=null,this.sky=null,this.sun=null,this.hemi=null,this.ambient=null,this.water=null,this.monorail=null,this.rail=null,this.highwayCars=[],this.factorySmoke=null,this.init()}init(){const t=ci(this.seed);this.mats=Sx(),this.makeMaterials(),wx(this),this.buildGround(),this.buildRoads(),this.buildBlocks(t),Ex(this),Tx(this),Ax(this),Lx(this),Ix(this,t),this.buildSignals(),this.buildParkingSpots(t),this.spatial=new Nc(32);for(const e of this.colliders)this.spatial.insert(e,e.minX,e.minZ,e.maxX,e.maxZ);this.updateLighting(6.4,"clear",0),this.mergeStatic()}mergeStatic(){const t=this.root;t.updateMatrixWorld(!0);const e=new xe().copy(t.matrixWorld).invert(),i=new Set,n=o=>{o&&o.traverse(l=>i.add(l))};n(this.water),n(this.lampGlow),n(this.smokeParticles),n(this.fireflyPoints),this.monorail&&n(this.monorail.group),this.rail&&n(this.rail.group),this.flyingPlane&&n(this.flyingPlane.group);for(const o of this.highwayCars)n(o);for(const o of this.animated)o.mesh&&n(o.mesh);const r=new Map,a=o=>{let l=o;for(;l;){if(i.has(l)||l.userData?.noMerge)return!0;l=l.parent}return!1};t.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||o.isPoints||o.isSprite||a(o)||Array.isArray(o.material))return;const l=o.material;if(!l||l.isShaderMaterial||l.transparent||l.opacity<1||l.depthWrite===!1||!(l.isMeshStandardMaterial||l.isMeshBasicMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial))return;const c=o.geometry;if(!c||!c.attributes.position||!c.attributes.normal||!c.attributes.uv||c.morphAttributes&&Object.keys(c.morphAttributes).length)return;const h=l.uuid;let u=r.get(h);u||(u={material:l,geos:[],meshes:[],cast:!1,receive:!1},r.set(h,u));const f=c.index?c.toNonIndexed():c.clone();for(const d of Object.keys(f.attributes))d!=="position"&&d!=="normal"&&d!=="uv"&&f.deleteAttribute(d);f.clearGroups(),f.applyMatrix4(new xe().multiplyMatrices(e,o.matrixWorld)),u.geos.push(f),u.meshes.push(o),u.cast=u.cast||o.castShadow,u.receive=u.receive||o.receiveShadow});for(const o of r.values()){if(o.meshes.length<2){for(const h of o.geos)h.dispose();continue}const l=px(o.geos,!1);for(const h of o.geos)h.dispose();if(!l)continue;const c=new k(l,o.material);c.name=`merged-${o.material.uuid}`,c.castShadow=o.cast,c.receiveShadow=o.receive,t.add(c);for(const h of o.meshes)h.parent?.remove(h)}this.mergedStaticMeshes=t.children.filter(o=>o.name.startsWith("merged-")).length}makeMaterials(){this.roofMat=new q({color:3949128,roughness:.94}),this.roofMatDark=new q({color:2501425,roughness:.95}),this.glassMat=new q({color:1516336,roughness:.22,metalness:.65,emissive:660768,emissiveIntensity:.4}),this.metalMat=new q({color:5330780,roughness:.7,metalness:.5}),this.concreteMat=new q({color:7631983,roughness:.96}),this.whiteMat=new q({color:14474452,roughness:.8}),this.darkMat=new q({color:1777702,roughness:.9}),this.woodMat=new q({color:6966066,roughness:.9}),this.grassMat=this.mats.grass,this.crownMat=new q({color:10480127,emissive:6021375,emissiveIntensity:1.4,roughness:.4}),this.warmMat=new q({color:16765593,emissive:16757847,emissiveIntensity:1.6,roughness:.5}),this.redMat=new q({color:12728890,roughness:.7}),this.tsMat=new q({color:4343885,roughness:.8,metalness:.4}),this.palettes={downtown:this.buildPalette([["#5d7285","#182430","#ffd9a0","glass"],["#7c8996","#1a2a3a","#cfe9ff","glass"],["#49525f","#111b26","#ffcf8c","glass"],["#8a8e93","#1e2b38","#d7ecff","stone"]]),midrise:this.buildPalette([["#9b7c63","#27313b","#ffd7a1","brick"],["#b2a08a","#2a333c","#ffe0b0","stone"],["#7e6c5c","#1d2731","#ffcf94","brick"],["#a7a8a3","#232f3a","#e9f4ff","stone"]]),suburb:this.buildPalette([["#d8d1c2","#26313c","#ffdca6","stone"],["#bdc7c0","#22303a","#ffe3b5","stone"],["#ccb6a3","#2a333c","#ffd49b","stone"],["#e0ddd4","#202b36","#ffe9c4","stone"]]),industrial:this.buildPalette([["#696e71","#1a2127","#ffd18a","stone"],["#7b7165","#20262b","#ffc77e","stone"],["#5d666b","#161d23","#cfe4ff","stone"]])}}buildPalette(t){return t.map(([e,i,n,r],a)=>{const{diffuse:o,emissive:l}=_x(e,i,n,this.seed+a*31+e.length*7,r),c=new q({map:o,emissiveMap:l,emissive:16777215,emissiveIntensity:.02,roughness:r==="glass"?.34:.85,metalness:r==="glass"?.52:.06});return this.facadeMaterials.push(c),c})}buildGround(){const t=new k(new oe(2600,2600),new q({color:3753263,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-.08,t.receiveShadow=!0,this.root.add(t),this.groundBase=t}roadPlaneGeometry(){if(!this._roadGeo){const t=new oe(Yn,840);t.rotateX(-Math.PI/2),this._roadGeo=t}return this._roadGeo}buildRoads(){const t=this.mats.asphalt,e=this.roadPlaneGeometry();this.roadMeshes=[];for(let m=0;m<Ve;m++){const g=Yt(m),_=new k(e,t);_.position.set(g,.02,0),_.receiveShadow=!0,this.root.add(_),this.roadMeshes.push(_);const y=new k(e,t);y.rotation.y=Math.PI/2,y.position.set(0,.021,g),y.receiveShadow=!0,this.root.add(y),this.roadMeshes.push(y)}const i=new oe(Yn,Yn);i.rotateX(-Math.PI/2);const n=new q({color:2303531,roughness:.93});for(let m=0;m<Ve;m++)for(let g=0;g<Ve;g++){const _=new k(i,n);_.position.set(Yt(m),.035,Yt(g)),this.root.add(_)}const r=new Z(.16,.012,3.2),a=new q({color:14276292,roughness:.8}),o=[];for(let m=0;m<Ve;m++)for(let g=-ze-10;g<ze+10;g+=8)Math.abs(((g+4+48)%96+96)%96-48)<10||(o.push([Yt(m),g,0]),o.push([g,Yt(m),Math.PI/2]));const l=new Fe(r,a,o.length),c=new we;o.forEach(([m,g,_],y)=>{c.position.set(m,.055,g),c.rotation.set(0,_,0),c.updateMatrix(),l.setMatrixAt(y,c.matrix)}),l.instanceMatrix.needsUpdate=!0,this.root.add(l);const h=new Z(.72,.014,3.5),u=new q({color:15329247,roughness:.75}),f=[];for(let m=0;m<Ve;m++)for(let g=0;g<Ve;g++){const _=Yt(m),y=Yt(g);for(let M=-3;M<=3;M++)f.push([_+M*1.1,y-He-2.1,0]),f.push([_+M*1.1,y+He+2.1,0]),f.push([_-He-2.1,y+M*1.1,Math.PI/2]),f.push([_+He+2.1,y+M*1.1,Math.PI/2])}const d=new Fe(h,u,f.length);f.forEach(([m,g,_],y)=>{c.position.set(m,.06,g),c.rotation.set(0,_,0),c.updateMatrix(),d.setMatrixAt(y,c.matrix)}),this.root.add(d);const p=new oe(.14,840);p.rotateX(-Math.PI/2);const x=new q({color:13223607,roughness:.85});for(let m=0;m<Ve;m++)for(const g of[-1,1]){const _=new k(p,x);_.position.set(Yt(m)+g*(He-.45),.05,0),this.root.add(_);const y=new k(p,x);y.rotation.y=Math.PI/2,y.position.set(0,.05,Yt(m)+g*(He-.45)),this.root.add(y)}}buildBlocks(t){const e=new oe(an-Yn,an-Yn);e.rotateX(-Math.PI/2);const i=this.mats.sidewalk.clone();i.map=this.mats.sidewalk.map.clone(),i.map.repeat.set(12,12),i.map.needsUpdate=!0,this.sidewalkMat=i,this.sidewalkMesh=new Fe(e,i,64);const n=new we;let r=0;const a=this.mats.lot.clone();a.map=this.mats.lot.map.clone(),a.map.repeat.set(9,9);const o=this.mats.grass.clone();o.map=this.mats.grass.map.clone(),o.map.repeat.set(9,9);const l={concrete:[],grass:[]},c=new Z(68,.16,.28),h=[];for(let d=0;d<8;d++)for(let p=0;p<8;p++){const x=zc(d),m=zc(p),g=Dx[`${d},${p}`]||null,_=this.districtForBlock(d,p,g),y={bi:d,bj:p,x,z:m,district:_,special:g};this.blocks.push(y),n.position.set(x,.1,m),n.rotation.set(0,0,0),n.scale.set(1,1,1),n.updateMatrix(),this.sidewalkMesh.setMatrixAt(r++,n.matrix),(["suburb","park","residential"].includes(_)||g==="park"?l.grass:l.concrete).push([x,m]),h.push([x,m-34,0],[x,m+34,0],[x-34,m,Math.PI/2],[x+34,m,Math.PI/2]),this.buildBlockContent(y,t)}this.root.add(this.sidewalkMesh),this.lotMeshes=[];for(const[d,p]of Object.entries(l)){if(!p.length)continue;const x=new oe(68,68);x.rotateX(-Math.PI/2);const m=new Fe(x,d==="grass"?o:a,p.length);p.forEach(([g,_],y)=>{n.position.set(g,.15,_),n.updateMatrix(),m.setMatrixAt(y,n.matrix)}),m.receiveShadow=!0,this.root.add(m),this.lotMeshes.push(m)}const u=new q({color:9408394,roughness:.95}),f=new Fe(c,u,h.length);h.forEach(([d,p,x],m)=>{n.position.set(d,.18,p),n.rotation.set(0,x,0),n.updateMatrix(),f.setMatrixAt(m,n.matrix)}),this.root.add(f)}districtForBlock(t,e,i){return i==="park"?"park":i==="suburb"?"suburb":i==="industrial"?"industrial":i==="airport"?"airport":e<=1?"industrial":t>=6&&e>=2&&e<=5?"suburb":e>=6?"waterfront":t<=2&&e>=3?"residential":t>=3&&t<=5&&e>=2&&e<=5?"downtown":"midtown"}buildBlockContent(t,e){const{bi:i,bj:n,x:r,z:a,district:o,special:l}=t;if(l==="park"){this.buildPark(t,e);return}if(l==="hospital"){this.buildHospital(t);return}if(l==="police"){this.buildPolice(t);return}if(l==="fire"){this.buildFireStation(t);return}if(l==="garage"){this.buildGarage(t);return}if(l==="dealership"){this.buildDealership(t);return}if(l==="apartment"){this.buildApartment(t);return}if(l==="shop"){this.buildShop(t);return}if(l==="office"){this.buildOffice(t);return}if(l==="hotel"){this.buildHotel(t);return}if(l==="industrial"){this.buildFactory(t,e);return}o==="downtown"?this.buildDowntown(t,e):o==="industrial"?this.buildIndustrial(t,e):o==="suburb"?this.buildSuburb(t,e):o==="waterfront"?this.buildWaterfront(t,e):this.buildMidrise(t,e)}buildingMaterial(t,e=0){return this.palettes[t][e%this.palettes[t].length]}facadeGeometry(t,e,i){const n=new Z(t,e,i),r=n.attributes.uv,a=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let o=0;o<6;o++){const l=a[o][0]/12,c=a[o][1]/13;for(let h=0;h<4;h++){const u=o*4+h;r.setXY(u,r.getX(u)*l,r.getY(u)*c)}}return r.needsUpdate=!0,n}addBuilding(t,e,i,n,r,a,o,l={}){const c=this.buildingMaterial(a,o),h=l.roofMat||this.roofMat,u=this.facadeGeometry(i,r,n),f=new k(u,[c,c,h,h,c,c]);f.position.set(t,r/2+.15+(l.base||0),e),f.castShadow=r>14,f.receiveShadow=!0,this.root.add(f);const d={minX:t-i/2,maxX:t+i/2,minZ:e-n/2,maxZ:e+n/2,height:r,type:"building",mesh:f};if(this.colliders.push(d),l.extraColliders)for(const p of l.extraColliders)this.colliders.push(p);return{mesh:f,collider:d}}addRoofDetails(t,e,i,n,r,a,o="normal"){const l=new $t;l.position.set(t,r,e);const c=1+Math.floor(a()*3);for(let h=0;h<c;h++){const u=1.4+a()*2.6,f=.7+a()*1.5,d=1.4+a()*2.4,p=new k(new Z(u,f,d),a()>.5?this.metalMat:this.concreteMat);p.position.set((a()-.5)*(i-u-2),f/2+.15,(a()-.5)*(n-d-2)),p.castShadow=!0,l.add(p)}if(o==="tower"){const h=new k(new le(.1,.22,8+a()*12,5),this.metalMat);h.position.y=4+a()*4,l.add(h);const u=new k(new Xe(.26,6,6),this.warmMat);u.position.y=h.position.y+h.geometry.parameters.height/2,l.add(u),this.animated.push({type:"beacon",mesh:u,phase:a()*6})}if(o==="tower"&&a()>.5){const h=new k(new Z(i*.92,.45,n*.92),this.crownMat);h.position.y=.35,l.add(h)}if(a()>.55){const h=new k(new Z(1.8,.8,1.4),this.whiteMat);h.position.set((a()-.5)*i*.5,.55,(a()-.5)*n*.5),l.add(h)}return this.root.add(l),l}buildDowntown(t,e){const{x:i,z:n}=t,r=34+e()*26,a=34+e()*26,o=58+e()*120,l=(e()-.5)*(66-r),c=(e()-.5)*(66-a),h=i+l,u=n+c,f=Math.floor(e()*4),{mesh:d}=this.addBuilding(h,u,r,a,o,"downtown",f,{roofMat:this.roofMatDark}),p=7+e()*9;if(e()>.35){const x=this.addBuilding(h,u,r+8,a+8,p,"downtown",(f+1)%4,{roofMat:this.roofMat});x.mesh.castShadow=!0}if(o>100&&e()>.35){const x=o*(.18+e()*.12);this.addBuilding(h,u,r*.72,a*.72,x,"downtown",(f+2)%4,{base:o,roofMat:this.roofMatDark})}if(this.addRoofDetails(h,u,r,a,o+.2,e,o>70?"tower":"normal"),f<2){const x=new q({color:10466244,roughness:.4,metalness:.6});for(let m=-2;m<=2;m++){const g=new k(new Z(.28,o*.94,.5),x);g.position.set(h+m*r/6,o/2+.2,u+a/2+.3),this.root.add(g)}}if(o>125){const x=new k(new oe(18,5),new ce({map:Kh("NOVA","ABOVE ALL","#0a2d4d","#1b6d91"),transparent:!1}));x.position.set(h,o*.75,u+a/2+.3),this.root.add(x)}}buildMidrise(t,e){const{x:i,z:n}=t,r=e()>.5?2:1;for(let a=0;a<r;a++){const o=20+e()*16,l=18+e()*14,c=12+e()*24,h=i+(r===2?(a-.5)*30:(e()-.5)*24),u=n+(e()-.5)*(66-l-4);this.addBuilding(h,u,o,l,c,"midrise",Math.floor(e()*4)),this.addRoofDetails(h,u,o,l,c+.2,e),e()>.6&&this.addBalconies(h,u,o,l,c,e)}}addBalconies(t,e,i,n,r,a){const o=new q({color:5987160,roughness:.9}),l=Math.floor((r-4)/4),c=new Z(i*.55,.18,.9);for(let h=0;h<l;h++){const u=4.5+h*4;if(u>r-1)break;const f=new k(c,o);f.position.set(t,u,e+n/2+.45),this.root.add(f);const d=new k(new Z(i*.55,.7,.06),this.glassMat);d.position.set(t,u+.45,e+n/2+.88),this.root.add(d)}}buildResidential(t,e){this.buildMidrise(t,e)}buildSuburb(t,e){const{x:i,z:n}=t;for(let r=0;r<2;r++)for(let a=0;a<2;a++){const o=i+(r-.5)*31,l=n+(a-.5)*31,c=12+e()*4,h=10+e()*4,u=3.6+e()*2.4,f=Math.floor(e()*4);this.addBuilding(o,l,c,h,u,"suburb",f);const d=new k(new un(1,1,4),new q({color:[5980727,4868682,7028022,4541256][f],roughness:.92}));d.rotation.y=Math.PI/4,d.scale.set(c*.78,2.6+e()*1.2,h*.78),d.position.set(o,u+1.45,l),d.castShadow=!0,this.root.add(d);const p=new k(new Z(3.2,.22,2.2),this.woodMat);p.position.set(o+(e()-.5)*2,.55,l+h/2+.9),this.root.add(p);const x=new k(new oe(10,8),new q({color:4283698,roughness:1}));x.rotation.x=-Math.PI/2,x.position.set(o+8,.17,l+7),this.root.add(x);const m=this.woodMat;for(let _=0;_<5;_++){const y=new k(new Z(.16,.9,.16),m);y.position.set(o+3,.6,l+11+_*1.4),this.root.add(y)}const g=new k(new oe(4,12),new q({color:7828846,roughness:1}));g.rotation.x=-Math.PI/2,g.position.set(o+5,.16,l+8),this.root.add(g),e()>.6&&this.tree(o+10,l+9,.8+e()*.4)}}buildIndustrial(t,e){const{x:i,z:n}=t,r=44+e()*12,a=30+e()*16,o=8+e()*6,l=i+(e()-.5)*8,c=n+(e()-.5)*8;this.addBuilding(l,c,r,a,o,"industrial",Math.floor(e()*3),{roofMat:this.roofMatDark}),this.addRoofDetails(l,c,r,a,o+.2,e);const h=new k(new Z(r*.7,1.4,3.2),this.concreteMat);h.position.set(l,.85,c+a/2+1.6),h.castShadow=!0,this.root.add(h);const u=[9321266,3039098,8153646,3500874,8014386];for(let f=0;f<4+Math.floor(e()*5);f++){const m=new k(new Z(6,2.6,2.5),new q({color:Me(u),roughness:.8,metalness:.3}));m.position.set(i-24+e()*48,.6+(e()>.8?2.6:0),n+24+e()*8),m.rotation.y=e()>.5?0:Math.PI/2,m.castShadow=!0,this.root.add(m)}}buildWaterfront(t,e){const{x:i,z:n}=t,r=22+e()*18,a=24+e()*16,o=22+e()*44,l=i+(e()-.5)*18,c=n+(e()-.5)*10;this.addBuilding(l,c,r,a,o,"midrise",Math.floor(e()*4)),this.addRoofDetails(l,c,r,a,o+.2,e,o>50?"tower":"normal"),this.addBalconies(l,c,r,a,o,e)}buildPark(t,e){const{x:i,z:n}=t;t.isPark=!0;const r=new q({color:10129274,roughness:1}),a=new k(new oe(6,68),r);a.rotation.x=-Math.PI/2,a.position.set(i,.17,n),this.root.add(a);const o=new k(new oe(68,6),r);o.rotation.x=-Math.PI/2,o.position.set(i,.171,n),this.root.add(o);const l=new k(new is(11,32),new q({color:1789283,roughness:.15,metalness:.5,transparent:!0,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.set(i-14,.18,n+15),this.root.add(l);const c=new $t;c.position.set(i+15,.2,n-14);const h=new k(new le(4.2,4.6,.8,24),this.concreteMat);h.position.y=.4,c.add(h);const u=new k(new le(3.7,3.7,.3,24),new q({color:4891588,roughness:.12,metalness:.5}));u.position.y=.82,c.add(u);const f=new k(new le(.4,.6,2.4,12),this.whiteMat);f.position.y=1.9,c.add(f),this.root.add(c);for(let x=0;x<12;x++){const m=e()*pe,g=8+e()*25;Math.abs(Math.cos(m)*g)<5||Math.abs(Math.sin(m)*g)<5||this.tree(i+Math.cos(m)*g,n+Math.sin(m)*g,.9+e()*.7)}for(let x=0;x<7;x++){const m=e()*pe,g=10+e()*18;this.bench(i+Math.cos(m)*g,n+Math.sin(m)*g,-m+Math.PI/2)}const d=new k(new Z(12,.7,7),this.woodMat);d.position.set(i+20,.55,n+22),d.castShadow=!0,this.root.add(d);const p=new k(new Z(12,4,.4),this.darkMat);p.position.set(i+20,2.6,n+25),this.root.add(p),this.addPOI("park","Aurora Park",i,n,30,{icon:"park"})}tree(t,e,i=1){this._treeGeo||(this._treeGeo={trunk:new le(.22,.32,3.2,6),leaves:new Gs(2.1,0)},this._treeMat=new q({color:3099174,roughness:1}),this._trunkMat=new q({color:4863781,roughness:1}),this._trees=[]),this._trees.push({x:t,z:e,scale:i})}bench(t,e,i){this._benches||(this._benches=[]),this._benches.push({x:t,z:e,rot:i})}addPOI(t,e,i,n,r,a={}){const o={type:t,name:e,x:i,z:n,radius:r,...a};return this.pois.push(o),o}addSign(t,e,i,n,r,a="#0b3a5a"){const o=new ce({map:Sn(t,a,"#eaf6ff"),transparent:!0}),l=new k(new oe(6,3),o);return l.position.set(e,i,n),l.rotation.y=r,this.root.add(l),l}buildHospital(t){const{x:e,z:i}=t;this.addBuilding(e,i,38,30,28,"midrise",3),this.addRoofDetails(e,i,38,30,28.2,ci(99));const n=new ce({color:16735084}),r=new k(new Z(4,12,.3),n);r.position.set(e,22,i+15.2),this.root.add(r);const a=new k(new Z(12,4,.3),n);a.position.set(e,22,i+15.2),this.root.add(a),this.addSign("HOSPITAL",e,13,i+15.3,0,"#5c1020");const o=new k(new le(9,9,.2,24),new q({color:3817282,roughness:.9}));o.position.set(e+24,.25,i+20),this.root.add(o);const l=new ce({color:15265522}),c=new k(new Z(1,.03,5),l);c.position.set(e+24,.38,i+20),this.root.add(c);const h=new k(new Z(3,.03,1),l);h.position.set(e+24,.38,i+20),this.root.add(h),this.helipad=new P(e+24,.4,i+20),this.addPOI("hospital","Nova General Hospital",e,i,32,{icon:"hospital"})}buildPolice(t){const{x:e,z:i}=t;this.addBuilding(e,i,32,26,18,"midrise",3,{roofMat:this.roofMatDark}),this.addRoofDetails(e,i,32,26,18.2,ci(33)),this.addSign("POLICE",e,10.5,i+13.2,0,"#0b2a5a");const n=new k(new oe(26,12),new q({color:2895924,roughness:1}));n.rotation.x=-Math.PI/2,n.position.set(e,.17,i+20),this.root.add(n),this.addPOI("police","NCPD Central Precinct",e,i,30,{icon:"police"})}buildFireStation(t){const{x:e,z:i}=t;this.addBuilding(e,i,30,24,11,"industrial",0,{roofMat:this.roofMatDark}),this.addSign("FIRE DEPT",e,8,i+12.2,0,"#5c1015");const n=new q({color:8003108,roughness:.8});for(let r=-1;r<=1;r++){const a=new k(new Z(7,7,.3),n);a.position.set(e+r*8,3.7,i+12.2),this.root.add(a)}this.addPOI("fire","Nova Fire Station 3",e,i,28,{icon:"fire"})}buildGarage(t){const{x:e,z:i}=t;this.addBuilding(e,i,30,24,9,"industrial",2,{roofMat:this.roofMatDark}),this.addSign("AUTO GARAGE",e,6.8,i+12.2,0,"#4a2b05"),this.addPOI("garage","Apex Auto Garage",e,i-2,22,{icon:"garage"})}buildDealership(t){const{x:e,z:i}=t;this.addBuilding(e-8,i,34,22,8,"downtown",1,{roofMat:this.roofMatDark}),this.addSign("NOVA MOTORS",e-8,10,i+11.5,0,"#1d4e7a");const n=new k(new oe(60,22),new q({color:3159098,roughness:.9}));n.rotation.x=-Math.PI/2,n.position.set(e,.17,i+24),this.root.add(n),this.addPOI("dealership","Nova Motors Dealership",e-8,i+8,22,{icon:"dealer"})}buildApartment(t){const{x:e,z:i}=t;this.addBuilding(e,i-4,34,26,26,"midrise",0),this.addRoofDetails(e,i-4,34,26,26.2,ci(17)),this.addBalconies(e,i-4,34,26,26,ci(19)),this.addSign("THE HALE",e,5.4,i+10.5,0,"#2b251e"),this.addPOI("apartment","The Hale Apartments",e,i+12,18,{icon:"home"})}buildShop(t){const{x:e,z:i}=t;this.addBuilding(e,i,28,20,7,"midrise",2),this.addSign("MARKET",e,5,i+10.2,0,"#1b4a39"),this.addPOI("shop","Corner Market",e,i+12,16,{icon:"shop"})}buildOffice(t){const{x:e,z:i}=t;this.addBuilding(e,i,40,30,42,"downtown",0),this.addBuilding(e,i,28,20,58,"downtown",1,{base:42}),this.addRoofDetails(e,i,28,20,100.2,ci(5),"tower"),this.addPOI("office","Meridian Tower",e,i,20,{icon:"office"})}buildHotel(t){const{x:e,z:i}=t;this.addBuilding(e,i,36,28,46,"midrise",3),this.addBalconies(e,i,36,28,46,ci(21)),this.addRoofDetails(e,i,36,28,46.2,ci(22),"tower"),this.addSign("HOTEL AURORA",e,5.5,i+14.5,0,"#2b3c52"),this.addPOI("hotel","Hotel Aurora",e,i+16,18,{icon:"hotel"})}buildFactory(t,e){const{x:i,z:n}=t;this.addBuilding(i,n,52,34,15,"industrial",2,{roofMat:this.roofMatDark});for(let r=-1;r<=1;r+=2){const a=new k(new le(1.1,1.5,34,12),new q({color:9210499,roughness:.95}));a.position.set(i+r*17,17,n-10),a.castShadow=!0,this.root.add(a)}this.factorySmokePos=new P(i,34,n-10),this.addPOI("factory","Northgate Works",i,n,24,{icon:"factory"})}buildSignals(){const t=[];for(let d=0;d<Ve;d++)for(let p=0;p<Ve;p++){const x=Math.abs(d-4)<=3&&Math.abs(p-4)<=3;t.push({i:d,j:p,x:Yt(d),z:Yt(p),hasLights:x})}this.nodes=t,this.nodeGrid=[];for(let d=0;d<Ve;d++){this.nodeGrid[d]=[];for(let p=0;p<Ve;p++)this.nodeGrid[d][p]=t.find(x=>x.i===d&&x.j===p)}const e=new le(.12,.16,4.8,6),i=new q({color:3817284,roughness:.8,metalness:.4}),n=new Xe(.19,8,6),r=new ce({color:16777215}),a=[],o=[],l=new Z(2.2,.12,.12),c=[];this.signalLampData=[];for(const d of t){if(!d.hasLights)continue;const p=[[-1,-1],[1,-1],[1,1],[-1,1]];for(const[x,m]of p){const g=d.x+x*(He+1.3),_=d.z+m*(He+1.3);o.push([g,2.4,_]),c.push([g+(x>0?-1:1)*1.1,4.35,_,x>0?0:Math.PI]);for(let y=0;y<3;y++){const M=4.75-y*.34;a.push([g+(x>0?-1.05:1.05),M,_]),this.signalLampData.push({node:d,axis:m===0?"x":"z",slot:y,index:a.length-1})}}}const h=new Fe(e,i,o.length),u=new we;o.forEach(([d,p,x],m)=>{u.position.set(d,p,x),u.updateMatrix(),h.setMatrixAt(m,u.matrix)}),this.root.add(h);const f=new Fe(l,i,c.length);c.forEach(([d,p,x,m],g)=>{u.position.set(d,p,x),u.rotation.set(0,m,0),u.updateMatrix(),f.setMatrixAt(g,u.matrix)}),this.root.add(f),this.signalLampMesh=new Fe(n,r,a.length),this.signalLampMesh.instanceColor=new wo(new Float32Array(a.length*3),3),a.forEach(([d,p,x],m)=>{u.position.set(d,p,x),u.rotation.set(0,0,0),u.updateMatrix(),this.signalLampMesh.setMatrixAt(m,u.matrix),this.signalLampMesh.setColorAt(m,new kt(1118481))}),this.root.add(this.signalLampMesh),this.signalNodes=t}signalState(t,e,i){if(!t.hasLights)return"green";const n=(i+(t.i*1.7+t.j*2.3))%26;return e==="x"?n<9?"green":n<11?"yellow":n<24?"red":"yellow":n<11?"red":n<15?"green":n<24?"red":n<26?"green":"red"}updateSignals(t){const e={red:new kt(16722750),yellow:new kt(16757035),green:new kt(2883482),off:new kt(1053462)};for(const i of this.signalLampData){const n=this.signalState(i.node,i.axis,t),r=n==="red"?0:n==="yellow"?1:2;let a;i.slot===r?a=e[n]:a=e.off,this.signalLampMesh.setColorAt(i.index,a)}this.signalLampMesh.instanceColor.needsUpdate=!0}buildParkingSpots(t){for(let e=0;e<Ve;e++)for(let i=0;i<8;i++){const n=Yt(i)+18+t()*50;this.parkingSpots.push({x:Yt(e)+He+2.8,z:n,heading:-Math.PI/2}),this.parkingSpots.push({x:Yt(e)-He-2.8,z:n,heading:Math.PI/2});const r=Yt(i)+18+t()*50;this.parkingSpots.push({x:r,z:Yt(e)+He+2.8,heading:Math.PI}),this.parkingSpots.push({x:r,z:Yt(e)-He-2.8,heading:0})}}finalizeProps(){if(this._trees&&this._trees.length){const t=this._trees.length,e=new Fe(this._treeGeo.trunk,this._trunkMat,t),i=new Fe(this._treeGeo.leaves,this._treeMat,t),n=new we;this._trees.forEach((r,a)=>{n.position.set(r.x,1.6*r.scale+.15,r.z),n.scale.setScalar(r.scale),n.updateMatrix(),e.setMatrixAt(a,n.matrix),n.position.set(r.x,4.3*r.scale+.15,r.z),n.scale.set(r.scale*(1+Math.random()*.3),r.scale*(1+Math.random()*.4),r.scale*(1+Math.random()*.3)),n.rotation.set(Math.random(),Math.random()*3,Math.random()),n.updateMatrix(),i.setMatrixAt(a,n.matrix)}),e.castShadow=!0,i.castShadow=!0,this.root.add(e,i)}if(this._benches&&this._benches.length){const t=new Z(2.2,.16,.65),e=new Z(2.2,.5,.12),i=new Z(.14,.5,.55),n=new Fe(t,this.woodMat,this._benches.length),r=new Fe(e,this.woodMat,this._benches.length),a=new Fe(i,this.metalMat,this._benches.length*2),o=new we;this._benches.forEach((l,c)=>{o.position.set(l.x,.72,l.z),o.rotation.set(0,l.rot,0),o.updateMatrix(),n.setMatrixAt(c,o.matrix),o.position.set(l.x-Math.sin(l.rot)*.26,1,l.z-Math.cos(l.rot)*.26),o.updateMatrix(),r.setMatrixAt(c,o.matrix),o.position.set(l.x-Math.cos(l.rot)*.8,.38,l.z+Math.sin(l.rot)*.8),o.updateMatrix(),a.setMatrixAt(c*2,o.matrix),o.position.set(l.x+Math.cos(l.rot)*.8,.38,l.z+Math.sin(l.rot)*.8),o.updateMatrix(),a.setMatrixAt(c*2+1,o.matrix)}),this.root.add(n,r,a)}}updateLighting(t,e,i){this.hour=t;const n=Math.max(0,Math.sin((t-6)/24*pe)),r=Ht(1-Math.max(0,Math.sin((t-5.5)/24*pe))*2.2,0,1);this.night=r,this.weather=e;const a=e==="storm"?1:e==="rain"?.7:e==="snow"?.55:0,o=1-a*.35;if(this.sun){const c=t/24*pe-Math.PI/2;this.sun.position.set(Math.cos(c)*700,Math.sin(c)*700,260),this.sun.intensity=Ht(Math.sin((t-5.8)/12.4*Math.PI)*2.6,0,2.6)*o,this.sun.color.setHSL(.09+n*.02,.45,.55+n*.25)}this.hemi.intensity=Re(.2,.7,n)*o,this.ambient.intensity=Re(.18,.32,n);const l=r*1.9+(a>0?.15:0);for(const c of this.facadeMaterials)c.emissiveIntensity=.015+l*.95;this.lampGlow&&(this.lampGlow.material.opacity=.22+r*.78,this.lampGlow.material.size=6+r*2),this.crownMat&&(this.crownMat.emissiveIntensity=.2+r*2.4),this.sky&&(this.sky.material.uniforms.night.value=r,this.sky.material.uniforms.storm.value=a,this.sky.material.uniforms.sunDir.value.copy(this.sun.position).normalize()),this.stars&&(this.stars.material.opacity=Ht(r*1.1-.15,0,.95)),this.water&&(this.water.material.uniforms.night.value=r),this.moon&&(this.moon.material.opacity=r*.95),this.cloudSpriteMat&&this.cloudSpriteMat.color.setScalar(Re(1.1,.18,r)*(1-a*.25)),document.body.dataset.night=r>.55?"1":"0"}update(t,e,i){this.updateSignals(e),this.water&&(this.water.material.uniforms.time.value=e);for(const n of this.clouds)n.position.x+=n.userData.speed*t,n.position.x>900&&(n.position.x=-900),n.position.z+=n.userData.speed*t*.1,n.position.z>700&&(n.position.z=-700);this.lampGlow&&(this.lampGlow.rotation.y+=0),this.stars&&(this.stars.rotation.y=e*.002);for(const n of this.animated)n.type==="beacon"&&(n.mesh.material=this.warmMat);if(this.monorail&&this.monorail.update(t,e),this.rail&&this.rail.update(t,e),this.highwayCars.length)for(const n of this.highwayCars)n.position.z+=n.userData.speed*t,n.position.z>700&&(n.position.z=-700,n.position.x=n.userData.lane);this.updateFactorySmoke(t,e),this.updateFireflies(t,e)}updateFactorySmoke(t,e){if(!this.factorySmokePos||!this.smokeParticles)return;const i=this.smokeParticles;i.userData.t=(i.userData.t||0)+t;const n=i.geometry.attributes.position;for(let r=0;r<n.count;r++){let a=n.getY(r)+t*(2.2+r%5*.3),o=n.getX(r)+t*.55,l=n.getZ(r)+Math.sin(e*.6+r)*t*.2;a>50&&(a=0,o=this.factorySmokePos.x+(Math.random()-.5)*2,l=this.factorySmokePos.z+(Math.random()-.5)*2),n.setXYZ(r,o,a,l)}n.needsUpdate=!0}updateFireflies(t,e){this.fireflyPoints&&(this.fireflyPoints.material.opacity=(this.night>.5?.8:0)*(this.weather==="clear"?1:.15),this.fireflyPoints.position.y=.6+Math.sin(e*.8)*.1)}districtAt(t,e){const i=Math.floor((t+ze)/an),n=Math.floor((e+ze)/an),r=this.blocks.find(a=>a.bi===i&&a.bj===n);return r?this.districtName(r.district):e>420?"NOVA HARBOR":t>420?"NOVA AIRFIELD":e<-400||t<-400?"OUTSKIRTS":"NOVA CITY"}districtName(t){return{downtown:"DOWNTOWN",midtown:"MIDTOWN",industrial:"INDUSTRIAL",suburb:"PINE HILLS",waterfront:"HARBORFRONT",residential:"WEST END",park:"AURORA PARK",airport:"AIRFIELD"}[t]||"NOVA CITY"}collideCircle(t,e,i){let n=null;for(const r of this.spatial.query(t,e,i+2)){if(r.type!=="building")continue;const a=Ht(t,r.minX,r.maxX),o=Ht(e,r.minZ,r.maxZ),l=t-a,c=e-o,h=l*l+c*c;if(h<i*i){const u=Math.sqrt(h)||1e-4;n={nx:l/u,nz:c/u,pen:i-u,box:r};break}}return n}nearestPOI(t,e,i=999,n=null){let r=null,a=i;for(const o of this.pois){if(n&&!n.includes(o.type))continue;const l=Math.hypot(t-o.x,e-o.z);l<a&&(a=l,r=o)}return r?{poi:r,dist:a}:null}nearestNode(t,e){let i=null,n=1/0;for(const r of this.nodes){const a=Math.hypot(t-r.x,e-r.z);a<n&&(n=a,i=r)}return i}isOnRoad(t,e){for(let i=0;i<Ve;i++)if(Math.abs(t-Yt(i))<He||Math.abs(e-Yt(i))<He)return!0;return!1}}class Ux{constructor(t){this.game=t,this.group=new $t,this.group.name="player",t.scene.add(this.group),this.pos=new P(10,.18,34),this.heading=Math.PI,this.velocity=new P,this.verticalVelocity=0,this.onGround=!0,this.groundY=.18,this.walkPhase=0,this.moveAmount=0,this.sprinting=!1,this.crouching=!1,this.firstPerson=!1,this.cameraYaw=Math.PI,this.cameraPitch=.04,this.cameraDist=5.2,this.cameraHeight=1.55,this.camShake=0,this.riding=null,this.interior=null,this.vehicle=null,this.visible=!0,this.footTimer=0,this.animT=0,this.idleT=0,this.clothing={jacket:2570317,pants:2239027,shoes:1316892,skin:12618339,hair:2826523},this.buildModel(),this.group.position.copy(this.pos),this.group.rotation.y=this.heading,this.camera=t.camera,this.camera.position.set(0,10,20),this.tmp=new P,this.wantToSit=!1,this.cinematic=null}buildModel(){const t=this.group;this.body=new $t,t.add(this.body);const e=new q({color:this.clothing.skin,roughness:.72}),i=new q({color:this.clothing.jacket,roughness:.82}),n=new q({color:this.clothing.pants,roughness:.9}),r=new q({color:this.clothing.shoes,roughness:.7}),a=new q({color:this.clothing.hair,roughness:.9});this.mats={skinMat:e,jacketMat:i,pantsMat:n,shoeMat:r,hairMat:a};const o=new $t;o.position.y=.86,this.body.add(o);const l=new k(new ln(.22,.38,4,10),i);l.position.y=.38,l.castShadow=!0,o.add(l);const c=new k(new Z(.44,.22,.26),i);c.position.y=.48,o.add(c);const h=new k(new le(.075,.085,.13,8),e);h.position.y=.68,o.add(h);const u=new k(new Xe(.175,14,12),e);u.position.y=.82,u.castShadow=!0,o.add(u);const f=new k(new Xe(.181,12,10,0,pe,0,Math.PI*.58),a);f.position.set(0,.845,-.006),o.add(f);const d=new ln(.065,.4,3,8);this.armL=new $t,this.armL.position.set(-.29,.56,0),o.add(this.armL);const p=new k(d,i);p.position.y=-.24,p.castShadow=!0,this.armL.add(p);const x=new k(new Xe(.07,8,6),e);x.position.y=-.48,this.armL.add(x),this.armR=new $t,this.armR.position.set(.29,.56,0),o.add(this.armR);const m=new k(d,i);m.position.y=-.24,m.castShadow=!0,this.armR.add(m);const g=new k(new Xe(.07,8,6),e);g.position.y=-.48,this.armR.add(g);const _=new ln(.085,.44,3,8);this.legL=new $t,this.legL.position.set(-.12,.02,0),o.add(this.legL);const y=new k(_,n);y.position.y=-.27,y.castShadow=!0,this.legL.add(y);const M=new k(new Z(.17,.1,.3),r);M.position.set(0,-.53,.05),this.legL.add(M),this.legR=new $t,this.legR.position.set(.12,.02,0),o.add(this.legR);const T=new k(_,n);T.position.y=-.27,T.castShadow=!0,this.legR.add(T);const E=new k(new Z(.17,.1,.3),r);E.position.set(0,-.53,.05),this.legR.add(E),this.hips=o;const v=new k(new is(.42,16),new ce({color:0,transparent:!0,opacity:.24,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=.012,t.add(v),this.shadow=v}setClothing(t){Object.assign(this.clothing,t),this.mats.jacketMat.color.setHex(this.clothing.jacket),this.mats.pantsMat.color.setHex(this.clothing.pants),this.mats.shoeMat.color.setHex(this.clothing.shoes),this.mats.hairMat.color.setHex(this.clothing.hair),this.mats.skinMat.color.setHex(this.clothing.skin)}setPosition(t,e,i=.18){this.pos.set(t,i,e),this.groundY=i,this.group.position.copy(this.pos)}enteredVehicle(t){this.vehicle=t,this.group.visible=!1,this.shadow.visible=!1,this.riding=null,this.cameraYaw=t.heading,this.cameraPitch=t.isAir?.18:.1,this.cameraDist=t.cfg.len>6?11:t.cfg.len>4.8?7.4:5.6,t.isAir&&(this.cameraDist=12)}exitVehicle(t,e=1){const i=Math.sin(t.heading),r=-Math.cos(t.heading),a=i,o=t.cfg.wid/2+1.1;let l=t.pos.x+r*o*e,c=t.pos.z+a*o*e;this.game.city.collideCircle(l,c,.5)&&(l=t.pos.x-r*o*e,c=t.pos.z-a*o*e),this.vehicle=null,this.group.visible=!0,this.shadow.visible=!0,this.setPosition(l,c,this.groundY||.18),this.heading=t.heading,this.group.rotation.y=this.heading,this.cameraYaw=t.heading,this.velocity.set(0,0,0)}toggleCamera(){return this.firstPerson=!this.firstPerson,this.cameraDist=this.firstPerson?0:this.vehicle?7:5.2,this.group.visible=!this.firstPerson&&!this.vehicle,this.shadow.visible=!this.firstPerson&&!this.vehicle,this.firstPerson}updateCamera(t){const e=this.camera;if(this.cinematic){const u=this.cinematic;u.t+=t;const f=u.t;e.position.set(u.cx+Math.sin(f*u.speed)*u.radius,u.cy+Math.sin(f*.3)*12,u.cz+Math.cos(f*u.speed)*u.radius),e.lookAt(0,28,0);return}if(this.vehicle){this.updateVehicleCamera(t);return}if(this.riding){this.updateRidingCamera(t);return}const i=this.tmp.set(this.pos.x,this.pos.y+this.cameraHeight,this.pos.z),n=this.cameraYaw,r=this.cameraPitch;let a=this.cameraDist;if(this.firstPerson){const u=new P(this.pos.x,this.pos.y+1.62,this.pos.z);e.position.lerp(u,Ht(t*18,0,1));const f=new P(Math.sin(n)*Math.cos(r),Math.sin(-r),Math.cos(n)*Math.cos(r));e.lookAt(u.x+f.x,u.y+f.y,u.z+f.z),e.rotation.z=0;return}const o=new P(-Math.sin(n)*Math.cos(r),Math.sin(r),-Math.cos(n)*Math.cos(r));let l=new P(i.x+o.x*a,i.y+o.y*a+1.15,i.z+o.z*a);const c=this.game.city.collideCircle(l.x,l.z,.45);c&&(l.x+=c.nx*c.pen*1.2,l.z+=c.nz*c.pen*1.2),l.y=Math.max(l.y,.55),e.position.lerp(l,Ht(t*9,0,1));const h=new P(this.pos.x,this.pos.y+1.45,this.pos.z);if(e.lookAt(h),this.game.camShake>0){const u=this.game.camShake;e.position.x+=(Math.random()-.5)*u*.25,e.position.y+=(Math.random()-.5)*u*.2,this.game.camShake=Math.max(0,u-t*2.2)}}updateVehicleCamera(t){const e=this.vehicle,i=this.camera;e.heading+this.cameraYaw*0;const n=e.isAir||e.cfg.len>6?13:e.cfg.len>4.8?9:7.2,r=this.cameraDist||n,a=this.cameraPitch,o=new P(e.pos.x,e.pos.y+(e.isAir?2:e.cfg.height*.55),e.pos.z);if(this.firstPerson){const f=new P(e.pos.x+Math.sin(e.heading)*e.cfg.len*.15,e.pos.y+(e.isAir?2:e.cfg.height*.55),e.pos.z+Math.cos(e.heading)*e.cfg.len*.15);i.position.lerp(f,Ht(t*12,0,1));const d=new P(Math.sin(this.cameraYaw)*Math.cos(a),Math.sin(-a),Math.cos(this.cameraYaw)*Math.cos(a));i.lookAt(f.x+d.x,f.y+d.y,f.z+d.z);return}const l=this.cameraYaw,c=new P(-Math.sin(l)*Math.cos(a),Math.sin(a)*.6,-Math.cos(l)*Math.cos(a)),h=new P(o.x+c.x*r,o.y+Math.max(1.2,c.y*r),o.z+c.z*r),u=this.game.city.collideCircle(h.x,h.z,.45);if(u&&(h.x+=u.nx*u.pen,h.z+=u.nz*u.pen),h.y=Math.max(h.y,e.isAir?e.pos.y-2:.7),i.position.lerp(h,Ht(t*7,0,1)),i.lookAt(o),this.game.camShake>0){const f=this.game.camShake;i.position.x+=(Math.random()-.5)*f*.22,i.position.y+=(Math.random()-.5)*f*.18,this.game.camShake=Math.max(0,f-t*2.4)}}updateRidingCamera(t){const e=this.riding,i=this.camera,n=e.group?e.group.position:e.pos,r=this.cameraYaw,a=this.cameraDist,o=new P(n.x,n.y+2,n.z),l=new P(-Math.sin(r),0,-Math.cos(r)).multiplyScalar(a),c=new P(o.x+l.x,o.y+2.2+Math.sin(this.cameraPitch)*a,o.z+l.z);i.position.lerp(c,Ht(t*4,0,1)),i.lookAt(o)}update(t,e){if(this.cinematic){this.updateCamera(t);return}if(this.vehicle){this.updateCamera(t);return}if(this.riding){this.updateCamera(t);return}const i=this.cameraYaw;let n=(e.right?1:0)-(e.left?1:0),r=(e.forward?1:0)-(e.back?1:0);const a=Math.hypot(n,r);a>0&&(n/=a,r/=a);const o=new lt(Math.sin(i),Math.cos(i)),l=new lt(-o.y,o.x),c=e.sprint,h=this.crouching?2.1:c?6.9:3.7,u=new lt(o.x*r+l.x*n,o.y*r+l.y*n).multiplyScalar(h*(a>0?1:0)),f=this.onGround?16:5;if(this.velocity.x=Re(this.velocity.x,u.x,Ht(t*f,0,1)),this.velocity.z=Re(this.velocity.z,u.y,Ht(t*f,0,1)),a>0){const _=Math.atan2(this.velocity.x,this.velocity.z);this.heading=Ir(this.heading,_,Ht(t*11,0,1))}this.group.rotation.y=this.heading;const d=this.pos.x+this.velocity.x*t,p=this.pos.z+this.velocity.z*t;let x=d,m=p;const g=this.game.city.collideCircle(x,m,.42);g&&(x+=g.nx*g.pen,m+=g.nz*g.pen,this.velocity.x*=.3,this.velocity.z*=.3),x=Ht(x,-660,760),m=Ht(m,-660,500),this.pos.x=x,this.pos.z=m,e.jump&&this.onGround&&(this.verticalVelocity=5.8,this.onGround=!1,this.game.audio?.jump()),this.verticalVelocity-=18*t,this.pos.y+=this.verticalVelocity*t,this.pos.y<=this.groundY&&(this.pos.y=this.groundY,this.verticalVelocity=0,this.onGround=!0),this.moveAmount=Math.hypot(this.velocity.x,this.velocity.z),this.sprinting=c&&this.moveAmount>4,this.group.position.copy(this.pos),this.animate(t,this.moveAmount,c),this.onGround&&this.moveAmount>.5&&(this.footTimer-=t*(c?1.8:1.2),this.footTimer<=0&&(this.footTimer=.48,this.game.audio?.footstep(c))),this.updateCamera(t)}animate(t,e,i){if(this.animT+=t,e>.2){this.walkPhase+=t*(i?12:7.5)*Ht(e/3.5,.5,1.6);const n=Math.sin(this.walkPhase)*(i?.78:.5);this.legL.rotation.x=n,this.legR.rotation.x=-n,this.armL.rotation.x=-n*.8,this.armR.rotation.x=n*.8,this.hips.position.y=.86+Math.abs(Math.sin(this.walkPhase))*(i?.07:.035),this.body.rotation.x=i?-.14:-.03}else{this.idleT+=t;const n=Math.sin(this.idleT*1.6)*.02;this.legL.rotation.x=Re(this.legL.rotation.x,0,t*7),this.legR.rotation.x=Re(this.legR.rotation.x,0,t*7),this.armL.rotation.x=Re(this.armL.rotation.x,-n,t*6),this.armR.rotation.x=Re(this.armR.rotation.x,n,t*6),this.hips.position.y=.86+n*.2,this.body.rotation.x=Re(this.body.rotation.x,0,t*5)}this.onGround||(this.legL.rotation.x=.45,this.legR.rotation.x=-.25,this.armL.rotation.x=-.7,this.armR.rotation.x=-.7),this.shadow.position.y=this.groundY-this.pos.y+.012,this.shadow.material.opacity=Ht(.26-(this.pos.y-this.groundY)*.08,.05,.3)}beginCinematic(t,e,i,n,r){this.cinematic={cx:t,cy:e,cz:i,radius:n,speed:r,t:0},this.group.visible=!1}endCinematic(){this.cinematic=null,this.group.visible=!this.vehicle&&!this.firstPerson}}const Ti=new q({color:660509,roughness:.08,metalness:.75}),Ox=new q({color:858660,roughness:.12,metalness:.7});new q({color:12568524,roughness:.25,metalness:.9});const Lo=new q({color:1447963,roughness:.95}),Bs=new q({color:10134441,roughness:.35,metalness:.75}),Le=new q({color:1777701,roughness:.75}),Xr=new q({color:2830905,roughness:.9}),Da=new q({color:15133162,roughness:.55}),bs=new q({color:12069428,roughness:.45}),Fx=new q({color:14723367,roughness:.5}),on=new q({color:11778235,roughness:.4,metalness:.6}),Na=new Map;function Io(s,t){const e=s.toFixed(2)+":"+t.toFixed(2);if(!Na.has(e)){const i=new le(s,s,t,16);i.rotateZ(Math.PI/2),Na.set(e,i)}return Na.get(e)}const Ua=new Map;function Do(s,t){const e=s.toFixed(2)+":"+t.toFixed(2);if(!Ua.has(e)){const i=new le(s*.58,s*.58,t+.02,8);i.rotateZ(Math.PI/2),Ua.set(e,i)}return Ua.get(e)}const hi={sedan:{name:"Nova Sable",klass:"SEDAN",len:4.55,wid:1.84,height:1.42,wheelbase:2.75,wheelR:.33,wheelW:.24,maxSpeed:47,accel:9.2,brake:22,grip:8.6,mass:1480,fuel:55,price:17500,seats:5},taxi:{name:"Nova Sable Taxi",klass:"TAXI",len:4.55,wid:1.84,height:1.46,wheelbase:2.75,wheelR:.33,wheelW:.24,maxSpeed:45,accel:8.8,brake:21,grip:8.4,mass:1490,fuel:55,price:19e3,seats:5,color:15250730},suv:{name:"Aster Ridge",klass:"SUV",len:4.95,wid:1.96,height:1.78,wheelbase:2.95,wheelR:.4,wheelW:.28,maxSpeed:42,accel:7.8,brake:19,grip:8.9,mass:2150,fuel:70,price:32e3,seats:5},sports:{name:"Vanta GT",klass:"SPORTS",len:4.48,wid:1.91,height:1.22,wheelbase:2.65,wheelR:.34,wheelW:.3,maxSpeed:63,accel:13.5,brake:27,grip:10.5,mass:1360,fuel:60,price:86e3,seats:2},super:{name:"Vanta XR",klass:"SUPERCAR",len:4.62,wid:2.02,height:1.12,wheelbase:2.72,wheelR:.35,wheelW:.34,maxSpeed:82,accel:18.5,brake:32,grip:12.2,mass:1290,fuel:62,price:268e3,seats:2},pickup:{name:"Bison 150",klass:"PICKUP",len:5.35,wid:2,height:1.83,wheelbase:3.3,wheelR:.42,wheelW:.3,maxSpeed:39,accel:7.4,brake:18,grip:8.2,mass:2280,fuel:76,price:38e3,seats:3},van:{name:"Haul-It 300",klass:"VAN",len:5.4,wid:2,height:2.1,wheelbase:3.2,wheelR:.38,wheelW:.27,maxSpeed:36,accel:6.4,brake:16,grip:7.8,mass:2400,fuel:80,price:41e3,seats:4},bus:{name:"Nova Transit 40",klass:"BUS",len:11.6,wid:2.52,height:3.15,wheelbase:6.3,wheelR:.53,wheelW:.34,maxSpeed:26,accel:4.2,brake:12,grip:7.2,mass:12800,fuel:220,price:32e4,seats:32},truck:{name:"Atlas Hauler",klass:"TRUCK",len:10.8,wid:2.48,height:3.4,wheelbase:5.4,wheelR:.5,wheelW:.36,maxSpeed:24,accel:3.8,brake:11,grip:6.9,mass:15600,fuel:260,price:21e4,seats:2},construction:{name:"Vulcan 8M",klass:"CONSTRUCTION",len:8.6,wid:2.55,height:3.25,wheelbase:4.6,wheelR:.58,wheelW:.4,maxSpeed:21,accel:3.2,brake:10,grip:7.4,mass:18500,fuel:240,price:195e3,seats:2},police:{name:"NCPD Interceptor",klass:"POLICE",len:4.7,wid:1.9,height:1.46,wheelbase:2.82,wheelR:.34,wheelW:.26,maxSpeed:56,accel:11.5,brake:25,grip:9.8,mass:1580,fuel:62,price:56e3,seats:4,color:15265264},fire:{name:"Nova Fire Engine",klass:"FIRE",len:9.6,wid:2.52,height:3.3,wheelbase:5.2,wheelR:.52,wheelW:.36,maxSpeed:29,accel:4.6,brake:13,grip:7.4,mass:14200,fuel:240,price:38e4,seats:6,color:12067886},ambulance:{name:"LifeLine Med 2",klass:"AMBULANCE",len:5.7,wid:2.1,height:2.65,wheelbase:3.4,wheelR:.4,wheelW:.28,maxSpeed:40,accel:7.2,brake:18,grip:8.1,mass:3100,fuel:85,price:12e4,seats:4,color:15265006},motorcycle:{name:"Wasp R",klass:"MOTORCYCLE",len:2.25,wid:.82,height:1.18,wheelbase:1.55,wheelR:.32,wheelW:.14,maxSpeed:58,accel:14,brake:24,grip:9.4,mass:210,fuel:18,price:22e3,seats:1},boat:{name:"Harborrunner 24",klass:"SPEEDBOAT",len:6.2,wid:2.2,height:1.4,wheelbase:0,wheelR:0,wheelW:0,maxSpeed:28,accel:6,brake:8,grip:4.4,mass:1600,fuel:90,price:74e3,seats:6,isBoat:!0},helicopter:{name:"Skyline H4",klass:"HELICOPTER",len:5.2,wid:2,height:2.4,wheelbase:0,wheelR:0,wheelW:0,maxSpeed:58,accel:8,brake:10,grip:5,mass:2200,fuel:120,price:64e4,seats:4,isAir:!0}},zx=[13620182,1843753,9183020,2181746,4939086,12104097,6961964,3094080,9141051,5926792,10104646,14605008];function dt(s,t,e,i=0,n=0,r=0,a=0,o=0,l=0,c=!0){const h=new k(t,e);return h.position.set(i,n,r),h.rotation.set(a,o,l),h.castShadow=c,h.receiveShadow=!1,s.add(h),h}function gt(s,t,e){return new Z(s,t,e)}function sl(s,t,e=2,i=2,n=!1){const r=[],a=t.wheelR,o=t.wheelW,l=t.wheelbase||t.len*.55,c=t.wid/2-.08,h=n?[-l/2,0,l/2]:[-l/2,l/2],u=n?[2,2,2]:[e,i];for(let f=0;f<h.length;f++)for(let d=-1;d<=1;d+=2)for(let p=0;p<u[f]/2;p++){const x=dt(s,Io(a,o),Lo,c*d-d*p*o*1.1,a,h[f]),m=new k(Do(a,o),Bs);m.position.set(0,0,0),x.add(m);const g=new k(gt(o*1.02,a*1.1,a*.3),Bs);g.position.set(0,0,0),x.add(g),x.userData.rim=m,r.push({mesh:x,front:f===h.length-1,side:d})}return r}function De(s,t,e,i,n,r,a,o,l={}){const c=new ce({color:t,toneMapped:!1}),h=new k(new Z(r,a,o),c);return h.position.set(e,i,n),s.add(h),h.userData.base=new kt(t),h.userData.kind=l.kind||"head",h}function kx(s,t,e){const i=t.wid/2-.01,n=t.wheelbase||t.len*.55;for(const r of[-n/2,n/2])for(const a of[-1,1]){const o=new k(new Z(.06,.16,t.wheelR*2.4),Le);o.position.set(i*a,t.wheelR+.3,r),s.add(o)}}function Bx(s,t,e,i,n=13621469){const r=new k(new Z(.3,.09,.02),new q({color:n,roughness:.3,metalness:.8}));r.position.set(t,e,i),s.add(r)}function Gx(s,t){const e=hi[s],i=new $t,n=new q({color:t,roughness:.32,metalness:.55}),r=s==="taxi",a=s==="police",o=e.len,l=e.wid;e.wheelbase;const c=e.height*.42,h=e.wheelR+c/2+.04,u=dt(i,gt(l*.96,c,o*.97),n,0,h,0);u.userData.panel=!0,dt(i,gt(l*.92,c*.55,o*.23),n,0,h+c*.25,o*.33),dt(i,gt(l*.9,c*.5,o*.18),n,0,h+c*.22,-o*.36);const f=o*(s==="super"?.34:s==="sports"?.38:.42),d=l*.82,p=e.height*(s==="super"?.24:.3),x=s==="sports"||s==="super"?-o*.04:-o*.06,m=dt(i,gt(d,p,f),Ti,0,h+c/2+p/2,x);m.userData.panel=!0,dt(i,gt(d*.94,.09,f*.86),n,0,h+c/2+p-.02,x-.05);for(const L of[-1,1])dt(i,gt(.06,p,.08),n,L*d/2,h+c/2+p/2,x+f/2,0,0,0),dt(i,gt(.06,p,.1),n,L*d/2,h+c/2+p/2,x-f/2);dt(i,gt(d*.86,p*.8,.05),Ti,0,h+c/2+p*.48,x+f/2+.01,-.32,0,0),dt(i,gt(d*.84,p*.7,.05),Ti,0,h+c/2+p*.46,x-f/2-.01,.3,0,0),dt(i,gt(l*.98,.18,.18),Le,0,h-c*.2,o/2-.02),dt(i,gt(l*.98,.18,.18),Le,0,h-c*.2,-o/2+.02),dt(i,gt(l*.5,.16,.05),Le,0,h-.02,o/2+.02);const g=h+c*.18,_=De(i,15922921,-l*.32,g,o/2+.02,.34,.13,.06,{kind:"head"}),y=De(i,15922921,l*.32,g,o/2+.02,.34,.13,.06,{kind:"head"}),M=De(i,5901067,-l*.33,g,-o/2-.02,.36,.12,.05,{kind:"brake"}),T=De(i,5901067,l*.33,g,-o/2-.02,.36,.12,.05,{kind:"brake"}),E=De(i,4860933,-l*.45,g,o/2+.02,.1,.1,.05,{kind:"turn"}),v=De(i,4860933,l*.45,g,o/2+.02,.1,.1,.05,{kind:"turn"});for(const L of[-1,1])dt(i,gt(.16,.1,.12),n,L*(l/2+.09),h+c*.55,x+f*.35);for(const L of[-1,1])dt(i,gt(.06,.14,o*.55),Le,L*(l/2+.01),e.wheelR+.1,0);if(kx(i,e),Bx(i,0,h+c*.25,-o/2-.015),r){dt(i,gt(.7,.22,.3),new ce({color:16764762}),0,h+c/2+p+.12,x);for(const L of[-1,1])dt(i,gt(.06,.1,o*.8),Le,L*l/2,h,0)}if(a&&(dt(i,gt(l*.45,.13,.85),bs,0,h+c/2+p+.1,x),dt(i,gt(l*.45,.13,.85),new q({color:1715800,roughness:.4,metalness:.5}),0,h+c/2+p+.1,x),dt(i,gt(l*.5,.22,.16),Le,0,h-.05,o/2+.1)),s==="sports"||s==="super"){dt(i,gt(l*.8,.05,.32),Le,0,h+c*.75,-o/2+.18);for(const L of[-1,1])dt(i,gt(.06,.3,.08),Le,L*l*.3,h+c*.55,-o/2+.18);dt(i,gt(l*.95,.06,.34),Le,0,h-c*.42,o/2-.2)}if(s==="suv"||s==="pickup"){for(const L of[-1,1])dt(i,gt(.05,.06,o*.4),Le,L*l*.3,h+c/2+p+.15,x-o*.05);s==="suv"&&dt(i,gt(l*.5,.12,o*.5),Le,0,h+c/2+p+.22,x-o*.05)}s==="pickup"&&(dt(i,gt(l*.92,.14,o*.38),n,0,h+c*.55,-o*.28),dt(i,gt(l*.8,.4,o*.34),Le,0,h+c*.35,-o*.28));const b=sl(i,e,2,2),D=[_.material,y.material],R=[M.material,T.material];return{group:i,wheels:b,bodyMat:n,headMats:D,brakeMats:R,turnMats:[E.material,v.material],cfg:e,type:s}}function Hx(s,t="bus"){const e=hi[t],i=new $t,n=new q({color:s,roughness:.4,metalness:.35}),r=e.len,a=e.wid,o=e.height*.78,l=e.wheelR+o/2+.08;dt(i,gt(a*.98,o,r*.98),n,0,l,0),dt(i,gt(a*1,.3,r*.99),Le,0,e.wheelR+.25,0),dt(i,gt(a*.96,.18,r*.99),on,0,l+o*.2,0),dt(i,gt(a*1.006,o*.32,r*.82),Ti,0,l+o*.22,0),dt(i,gt(a*1.007,o*.34,r*.28),Ti,0,l+o*.2,-r*.34),dt(i,gt(a*.9,o*.48,.06),Ti,0,l+o*.2,r*.5),dt(i,gt(a*.55,.28,r*.25),on,0,l+o/2+.14,0);for(const p of[r*.34,-r*.2])dt(i,gt(.06,o*.62,1.1),Ox,a/2+.005,l-.1,p);De(i,16757575,0,l+o*.38,r/2+.035,2.4,.34,.04,{kind:"sign"});const c=De(i,15922921,-a*.34,e.wheelR+.55,r/2+.03,.38,.2,.06),h=De(i,15922921,a*.34,e.wheelR+.55,r/2+.03,.38,.2,.06),u=De(i,5901067,-a*.34,e.wheelR+.6,-r/2-.03,.3,.4,.05,{kind:"brake"}),f=De(i,5901067,a*.34,e.wheelR+.6,-r/2-.03,.3,.4,.05,{kind:"brake"}),d=sl(i,e,2,4);return{group:i,wheels:d,bodyMat:n,headMats:[c.material,h.material],brakeMats:[u.material,f.material],turnMats:[],cfg:e,type:t}}function Vx(s,t,e={}){const i=hi[s],n=new $t,r=new q({color:t,roughness:.45,metalness:.4}),a=i.len,o=i.wid,l=i.wheelR,c=a*(s==="construction"?.28:.25),h=a/2-c/2-.2,u=i.height*.58;if(dt(n,gt(o*.8,.3,a*.92),Le,0,l+.2,0),dt(n,gt(o*.96,u,c),r,0,l+u/2+.3,h),dt(n,gt(o*.88,u*.55,c*.96),Ti,0,l+u*.62,h),dt(n,gt(o*.92,.22,c),r,0,l+u+.35,h),s==="truck"){dt(n,gt(o,i.height*.8,a*.62),Da,0,l+i.height*.4+.25,-a*.16),dt(n,gt(o*1.004,i.height*.1,a*.62),r,0,l+i.height*.3,-a*.16);for(let g=-5;g<=5;g++)dt(n,gt(o*1.006,i.height*.78,.05),on,0,l+i.height*.4+.25,-a*.16+g*a*.05)}else if(s==="construction"){dt(n,gt(o,.9,a*.55),r,0,l+1,-a*.2),dt(n,gt(o*.92,.5,a*.5),new q({color:6117962,roughness:1}),0,l+1.6,-a*.2),dt(n,gt(o*.8,.4,a*.1),Fx,0,l+1.8,-a*.48);for(const g of[-1,1])for(const _ of[-a*.05,-a*.4])dt(n,gt(.12,.9,.12),Le,g*o*.4,l+2,_)}else if(s==="fire"){const g=i.height*.8;dt(n,gt(o,g,a*.72),bs,0,l+g/2+.25,-a*.12),dt(n,gt(o*1.002,g*.18,a*.72),Da,0,l+g*.62,-a*.12);const _=new $t;for(const y of[-1,1])dt(_,gt(.1,.1,a*.75),on,y*.5,0,0);for(let y=-6;y<=6;y++)dt(_,gt(1.1,.06,.06),on,0,0,y*a*.055);_.position.set(0,l+g+.5,-a*.05),n.add(_),dt(n,gt(1.6,.3,.16),Le,0,l+u+.5,h+c/2);for(let y=0;y<3;y++)dt(n,gt(.5,.5,.16),on,-1+y,l+u+.5,h+c/2+.2)}else if(s==="ambulance"){const g=i.height*.8;dt(n,gt(o,g,a*.7),Da,0,l+g/2+.25,-a*.13),dt(n,gt(o*1.004,.35,a*.7),bs,0,l+g*.4,-a*.13);for(const _ of[-1,1])dt(n,gt(o*1.005,.5,.06),bs,0,l+g*.72,-a*.13+_*a*.18);dt(n,gt(o*.86,.5,a*.72),Ti,0,l+g*.85,-a*.13)}const f=sl(n,i,2,4),d=De(n,15922921,-o*.33,l+.6,a/2+.03,.4,.2,.06),p=De(n,15922921,o*.33,l+.6,a/2+.03,.4,.2,.06),x=De(n,5901067,-o*.38,l+.6,-a/2-.02,.25,.3,.05,{kind:"brake"}),m=De(n,5901067,o*.38,l+.6,-a/2-.02,.25,.3,.05,{kind:"brake"});return(s==="fire"||s==="ambulance")&&(dt(n,gt(o*.6,.16,.4),bs,0,l+u+.52,h),dt(n,gt(o*.3,.16,.4),new ce({color:1793279,toneMapped:!1}),-o*.15,l+u+.52,h)),{group:n,wheels:f,bodyMat:r,headMats:[d.material,p.material],brakeMats:[x.material,m.material],turnMats:[],cfg:i,type:s}}function Wx(s){const t=hi.motorcycle,e=new $t,i=new q({color:s,roughness:.35,metalness:.6});dt(e,gt(.34,.3,1.1),i,0,.75,0),dt(e,gt(.3,.18,.45),Xr,0,.96,-.2),dt(e,gt(.24,.12,.5),i,0,1.02,.38),dt(e,gt(.7,.06,.06),Le,0,1.12,.32);const n=dt(e,Io(.32,.14),Lo,0,.32,.78),r=dt(e,Io(.32,.14),Lo,0,.32,-.72),a=new k(Do(.32,.14),Bs);n.add(a);const o=new k(Do(.32,.14),Bs);r.add(o);for(const h of[-1,1])dt(e,gt(.05,.75,.05),on,h*.08,.65,.72,.25,0,0);De(e,15922921,0,.95,.6,.22,.16,.06),De(e,5901067,0,.86,-.55,.16,.1,.05,{kind:"brake"});const l=[{mesh:n,front:!0,side:1},{mesh:r,front:!1,side:1}],c=new $t;return dt(c,gt(.36,.5,.24),new q({color:3029314,roughness:.8}),0,1.3,-.05),dt(c,new Xe(.16,10,8),new q({color:1909287,roughness:.7}),0,1.67,-.02),dt(c,gt(.1,.44,.1),new q({color:3029314,roughness:.8}),-.25,1.3,.18,-.5,0,0),dt(c,gt(.1,.44,.1),new q({color:3029314,roughness:.8}),.25,1.3,.18,-.5,0,0),c.visible=!1,e.add(c),{group:e,wheels:l,bodyMat:i,headMats:[],brakeMats:[],rider:c,cfg:t,type:"motorcycle"}}function Xx(s){const t=hi.boat,e=new $t,i=new q({color:s,roughness:.3,metalness:.3}),n=new Rh;n.moveTo(-1.1,-3.1),n.lineTo(1.1,-3.1),n.lineTo(1.1,1.4),n.quadraticCurveTo(1,2.7,0,3.1),n.quadraticCurveTo(-1,2.7,-1.1,1.4),n.lineTo(-1.1,-3.1);const r=new el(n,{depth:.8,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2});r.rotateX(Math.PI/2);const a=new k(r,i);a.position.y=.9,a.castShadow=!0,e.add(a),dt(e,gt(1.8,.08,4.8),new q({color:10128500,roughness:.9}),0,1.05,-.3),dt(e,gt(2.2,.12,5.8),new q({color:1731210,roughness:.4}),0,.72,0),dt(e,gt(1.5,.5,.06),Ti,0,1.45,.7,-.25,0,0),dt(e,gt(1.4,.4,.06),Ti,0,1.4,-.9,.2,0,0);for(let o=0;o<2;o++)dt(e,gt(.55,.18,.5),Xr,-.45+o*.9,1.28,-1.2);dt(e,gt(1,.3,.5),Le,0,1.35,.6),dt(e,gt(.4,.1,.35),new ce({color:6805759,toneMapped:!1}),0,1.52,.6),dt(e,gt(.4,.65,.7),Le,0,.8,-3.25),De(e,13626111,0,1,3.02,.3,.12,.08),De(e,5901067,0,1,-3.02,.3,.12,.08,{kind:"brake"});for(const o of[-1,1])dt(e,gt(.04,.25,3.2),on,o*1.05,1.28,-.6);return{group:e,wheels:[],bodyMat:i,headMats:[],brakeMats:[],cfg:t,type:"boat"}}function qx(s){const t=hi.helicopter,e=new $t,i=new q({color:s,roughness:.3,metalness:.45}),n=new Xe(1.05,18,14),r=new k(n,i);r.scale.set(1,1,1.9),r.position.y=1.65,r.castShadow=!0,e.add(r);const a=new k(new Xe(.92,16,12),Ti);a.scale.set(.98,.8,1),a.position.set(0,1.75,1),e.add(a),dt(e,gt(.28,.28,2.9),i,0,1.75,-2.1),dt(e,gt(.1,.8,.6),i,0,2.2,-3.4);const o=new q({color:3817541,roughness:.6,metalness:.5});for(const u of[-1,1])dt(e,gt(.1,.1,3),o,u*.85,.28,0),dt(e,gt(.1,.7,.1),o,u*.7,.62,.7,0,0,-.25),dt(e,gt(.1,.7,.1),o,u*.7,.62,-.7,0,0,.25);const l=new $t;l.position.set(0,2.6,0),dt(l,gt(.18,.12,5.4),Le,0,0,0,0,0,0),dt(l,gt(5.4,.06,.18),Le,0,0,0);const c=new k(new le(.14,.14,.4,8),Bs);c.position.y=.1,l.add(c),e.add(l);const h=new $t;return h.position.set(.25,2.1,-3.45),dt(h,gt(.06,1.4,.16),Le,0,0,0),dt(h,gt(.06,.16,1.4),Le,0,0,0),e.add(h),De(e,15922921,-.65,1.3,1.65,.18,.18,.08),De(e,15922921,.65,1.3,1.65,.18,.18,.08),De(e,16719904,0,2.2,-2.8,.12,.12,.12),De(e,2162496,-1.05,1.5,-.8,.1,.1,.1),dt(e,gt(.5,.3,.5),Xr,-.35,1.5,.2),dt(e,gt(.5,.3,.5),Xr,.35,1.5,.2),{group:e,wheels:[],bodyMat:i,headMats:[],brakeMats:[],rotor:l,tailRotor:h,cfg:t,type:"helicopter"}}function Dr(s,t,e={}){let i;return["bus"].includes(s)?i=Hx(t):["truck","construction","fire","ambulance"].includes(s)?i=Vx(s,t):s==="motorcycle"?i=Wx(t):s==="boat"?i=Xx(t):s==="helicopter"?i=qx(t):i=Gx(s,t),i.group.userData.vehicleType=s,i.group.userData.wheels=i.wheels,i.rider&&(i.group.userData.rider=i.rider),i.color=t,e.traffic&&i.rider&&(i.rider.visible=!0),i}function No(s){return s==="taxi"?15250730:s==="police"?15265264:s==="fire"?12067886:s==="ambulance"?15265006:s==="construction"?14066975:Me(zx)}function kc(s,t,e,i){const{lightsOn:n=!1,braking:r=!1,left:a=!1,right:o=!1,hazard:l=!1}=i;for(const c of s)c.color.setHex(n?16774872:4934982);for(const c of t)c.color.setHex(r?16722731:n?7999504:3803144);if(e.length>=2){const c=a||l,h=o||l;e[0].color.setHex(c?16756768:3811848),e[1].color.setHex(h?16756768:3811848)}}const wr=[[1,0],[-1,0],[0,1],[0,-1]];class Yx{constructor(t,e,i,n,r=0,a={}){this.game=t,this.type=e,this.cfg=hi[e],this.model=Dr(e,a.color??this.cfg.color??No(e),{traffic:a.traffic}),this.group=this.model.group,this.wheels=this.model.wheels||[],this.headMats=this.model.headMats||[],this.brakeMats=this.model.brakeMats||[],this.turnMats=this.model.turnMats||[],this.bodyMat=this.model.bodyMat,this.rotor=this.model.rotor,this.tailRotor=this.model.tailRotor,this.rider=this.model.rider,this.group.position.set(i,a.y??.02,n),this.group.rotation.y=r,t.scene.add(this.group),this.pos=this.group.position,this.heading=r,this.velocity=new lt,this.speed=0,this.steer=0,this.throttle=0,this.brakeInput=0,this.handbrake=!1,this.health=100,this.fuel=this.cfg.fuel,this.engineOn=!0,this.lightsOn=!1,this.indicator=0,this.damageFlash=0,this.lastCrash=0,this.wheelSpin=0,this.mode=a.mode||(a.traffic?"traffic":"parked"),this.service=a.service||null,this.owned=!!a.owned,this.knock=new lt,this.knockTimer=0,this.smokeAcc=0,this.driverVisible=!1,this.verticalVelocity=0,this.altitude=a.y??0,this.rotorAngle=0,this.traffic=null,this.parkedName=a.name||null,this.interiorLight=0,this.isPlayer=!1,this.enterable=!0,this.doorOpen=!1,this.turret=null,this.wakeAcc=0,this.speedKmh=0,this.brakeOn=!1,this.cruise=0,this.lodTick=Math.random()*4,a.traffic&&this.initTraffic(),this.service&&this.addServiceLights()}get isBoat(){return!!this.cfg.isBoat}get isAir(){return!!this.cfg.isAir}get halfLen(){return this.cfg.len/2}get halfWid(){return this.cfg.wid/2}addServiceLights(){const t=new $t,e=new ce({color:16719904,toneMapped:!1}),i=new ce({color:2776063,toneMapped:!1}),n=this.type==="motorcycle"?1.2:this.cfg.height+(this.type==="bus"?.1:.02),r=new Z(this.type==="fire"?1.4:.55,.16,.38),a=new k(r,e);a.position.set(-.3,n,(this.type==="sedan",0));const o=new k(r,i);o.position.set(.3,n,0),t.add(a,o);const l=new ks(16724787,0,18,2);l.position.set(0,n,0),t.add(l),this.group.add(t),this.serviceLights={redM:e,blueM:i,light:l,group:t}}initTraffic(){let t=this.game.city.nearestNode(this.pos.x,this.pos.z),e=Me(wr),i=this.getNeighbor(t,e),n=0;for(;!i&&n++<8;)e=Me(wr),i=this.getNeighbor(t,e);if(!i){this.mode="parked";return}this.traffic={node:t,next:i,dir:e,t:Q(2,60),lane:3.9,cruise:this.type==="bus"||this.type==="truck"?Q(8,10):Q(10,14),turnTimer:0,stopTimer:0};const r=this.lanePoint(this.traffic);this.pos.x=r.x,this.pos.z=r.z,this.heading=Math.atan2(e[0],e[1]),this.group.rotation.y=this.heading,this.mode="traffic"}getNeighbor(t,e){const i=t.i+e[0],n=t.j+e[1];return i<0||i>=9||n<0||n>=9?null:this.game.city.nodeGrid[i][n]}lanePoint(t,e=0){const i=t.node.x+t.dir[0]*(t.t+e),n=t.node.z+t.dir[1]*(t.t+e),r=-t.dir[1],a=t.dir[0];return{x:i+r*t.lane,z:n+a*t.lane}}chooseNext(t){const e=[],i=[-t.dir[0],-t.dir[1]];for(const r of wr)r[0]===i[0]&&r[1]===i[1]||this.getNeighbor(t.next,r)&&e.push(r);if(!e.length)return[-t.dir[0],-t.dir[1]];const n=e.filter(r=>r[0]===t.dir[0]&&r[1]===t.dir[1]);return n.length&&Math.random()<.55?n[0]:Me(e)}updateTraffic(t,e,i,n){const r=this.traffic;if(!r)return;this.knockTimer>0&&(this.knockTimer-=t,this.pos.x+=this.knock.x*t,this.pos.z+=this.knock.y*t,this.knock.multiplyScalar(1-t*4));const a=96,o=r.dir[0]!==0?"x":"z",l=a-r.t;let c=r.cruise,h=!1;if(l<25){const T=this.game.city.signalState(r.next,o,e);(T==="red"||T==="yellow"&&l>8)&&l<19&&(h=!0)}if(!h){const T=Math.sin(this.heading),E=Math.cos(this.heading);for(const b of this.game.vehicles.vehicles){if(b===this)continue;const D=b.pos.x-this.pos.x,R=b.pos.z-this.pos.z,L=Math.hypot(D,R);if(L<(b.cfg.len+this.cfg.len)*.5+4&&L>.01&&(D*T+R*E)/L>.7){h=!0;break}}this.game.npcs?.anyInFront(this.pos.x,this.pos.z,this.heading,8)&&(h=!0)}h&&(c=0),this.health<15&&(c=0);const u=h?this.cfg.brake*.8:this.cfg.accel*.55;this.speed=this.speed<c?Math.min(c,this.speed+u*t):Math.max(c,this.speed-this.cfg.brake*t),this.brakeOn=h&&this.speed>.1;const f=this.lanePoint(r,10),d=f.x-this.pos.x,p=f.z-this.pos.z,x=Math.atan2(d,p);let m=Ms(x-this.heading);const g=Ht(this.speed*.35,0,2.2);this.heading=Ms(this.heading+Ht(m,-g*t,g*t));const _=Math.sin(this.heading),y=Math.cos(this.heading);this.pos.x+=_*this.speed*t,this.pos.z+=y*this.speed*t,this.group.rotation.y=this.heading,r.t+=this.speed*t;const M=this.lanePoint(r,0);if(this.pos.x+=(M.x-this.pos.x)*Math.min(1,t*1.5),this.pos.z+=(M.z-this.pos.z)*Math.min(1,t*1.5),r.t>=a&&(r.t-=a,r.node=r.next,r.dir=this.chooseNext(r),r.next=this.getNeighbor(r.node,r.dir),r.next||(r.node=this.game.city.nearestNode(this.pos.x,this.pos.z),r.dir=Me(wr),r.next=this.getNeighbor(r.node,r.dir))),this.animateWheels(t),this.speedKmh=this.speed*3.6,this.lightsOn!==(i>.4||n!=="clear")&&(this.lightsOn=i>.4||n!=="clear"),kc(this.headMats,this.brakeMats,this.turnMats,{lightsOn:this.lightsOn,braking:this.brakeOn||this.speed<.2}),this.serviceLights){const T=Math.floor(e*5)%2===0;this.serviceLights.redM.color.setHex(T?16719904:3147784),this.serviceLights.blueM.color.setHex(T?657968:2776063),this.serviceLights.light.color.setHex(T?16719904:2776063),this.serviceLights.light.intensity=T?2.6:2.2}}updatePlayer(t,e,i,n,r){if(this.isPlayer=!0,this.isAir)return this.updateHelicopter(t,e,r);if(this.isBoat)return this.updateBoat(t,e,i,r);const a=this.cfg,o=new lt(Math.sin(this.heading),Math.cos(this.heading)),l=new lt(-o.y,o.x);let c=this.velocity.dot(o),h=this.velocity.dot(l);const u=Ht(1-(100-this.health)/150,.35,1),f=this.fuel>.1,d=this.engineOn&&f&&this.health>6;this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.handbrake=!!e.handbrake;const p=!this.game.city.isOnRoad(this.pos.x,this.pos.z),x=i==="rain"||i==="storm",m=a.maxSpeed*u*(p?.62:1)*(x?.86:1);if(this.brakeInput>0&&c<=.4?d&&(c-=a.accel*.45*t*u):this.brakeInput>0&&(c-=a.brake*this.brakeInput*t),this.throttle>0&&d){const b=a.accel*(1-Ht(Math.abs(c)/m,0,1)*.72);c+=b*this.throttle*t*u}c=Ht(c,-m*.35,m),c*=1-t*(p?1.2:.22),c-=Math.sign(c)*Math.min(Math.abs(c),(p?4.5:.8)*t);let g=a.grip*(x?.52:1)*(p?.55:1);this.handbrake&&(g*=.16),this.health<40&&(g*=.86),h*=Math.exp(-g*t);const _=e.steer||0;this.steer=Re(this.steer,_,Ht(t*8,0,1));const y=Ht(Math.abs(c)/7,0,1),M=this.handbrake?1.45:1,T=1.5*y*(1-Ht(Math.abs(c)/a.maxSpeed,0,1)*.38)*M;this.heading=Ms(this.heading+this.steer*T*t*(c<0?-1:1)),(x||this.handbrake)&&(h+=this.steer*c*(x?.09:.2)*t*(this.handbrake?2.4:1));const E=new lt(Math.sin(this.heading),Math.cos(this.heading)),v=new lt(-E.y,E.x);this.velocity.set(E.x*c+v.x*h,E.y*c+v.y*h),this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.group.rotation.y=this.heading,this.wheels.length&&(this.group.rotation.z=Re(this.group.rotation.z,-this.steer*Ht(c/40,0,1)*.055,t*5),this.group.rotation.x=Re(this.group.rotation.x,Ht((this.throttle-this.brakeInput)*.012,-.02,.02),t*4)),this.speed=c,this.speedKmh=Math.abs(c)*3.6,this.brakeOn=this.brakeInput>0||this.throttle===0&&Math.abs(c)>.2||this.handbrake,d&&(this.fuel=Math.max(0,this.fuel-t*(.011+Math.abs(c)*75e-5*(this.throttle>0?2.2:1)))),this.resolveWorldCollisions(t,c),this.animateWheels(t),this.animateLights(n,r,e),this.health<55&&this.game.effects.smokeAtVehicle(this,t),f===!1&&d&&(this.engineOn=!1)}updateHelicopter(t,e,i){const n=this.cfg,r=this.fuel>.1,a=this.engineOn&&r;this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.steer=e.steer||0;const o=e.up||0,l=e.down||0,c=a?(o-l)*11:-9;this.verticalVelocity=Re(this.verticalVelocity,c,t*2.2),this.altitude=Math.max(.5,this.altitude+this.verticalVelocity*t);const h=new lt(Math.sin(this.heading),Math.cos(this.heading));let u=this.velocity.dot(h);const f=a?this.throttle*n.maxSpeed-this.brakeInput*10:0;u=Re(u,f,t*.7),this.heading=Ms(this.heading+this.steer*t*(1.15+Ht(Math.abs(u)/40,0,.4)));const d=new lt(Math.sin(this.heading),Math.cos(this.heading));if(this.velocity.set(d.x*u,d.y*u),this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.pos.y=Re(this.pos.y,this.altitude+Math.sin(performance.now()*.001)*.06,t*5),this.group.rotation.y=this.heading,this.group.rotation.z=Re(this.group.rotation.z,-this.steer*.18-this.velocity.x*.001,t*2),this.group.rotation.x=Re(this.group.rotation.x,Ht(-u*.004,-.16,.16),t*2),this.speed=Math.abs(u),this.speedKmh=Math.abs(u)*3.6,this.fuel=Math.max(0,this.fuel-t*(.03+(o?.04:0))),this.rotorAngle+=t*(a?42:8),this.model.rotor.rotation.y=this.rotorAngle,this.model.tailRotor&&(this.model.tailRotor.rotation.x=this.rotorAngle*1.4),this.rotor&&(this.rotor.rotation.y=this.rotorAngle),this.brakeOn=!1,this.altitude<30){const p=this.game.city.collideCircle(this.pos.x,this.pos.z,3);p&&p.box.height>this.pos.y&&(this.pos.x-=p.nx*p.pen,this.pos.z-=p.nz*p.pen,this.health=Math.max(0,this.health-12),this.game.effects.sparksAt(this.pos.x,this.pos.y,this.pos.z,14),this.verticalVelocity=2)}this.pos.y<2.2&&(this.pos.y=2.2,this.altitude=2.2,this.verticalVelocity=0,e.up&&(this.altitude=2.4)),this.health<55&&this.game.effects.smokeAtVehicle(this,t),this.animateLights(performance.now()/1e3,i,e),!a&&this.altitude>1&&(this.altitude=Math.max(.5,this.altitude-t*4))}updateBoat(t,e,i,n){const r=this.cfg,a=new lt(Math.sin(this.heading),Math.cos(this.heading)),o=new lt(-a.y,a.x);let l=this.velocity.dot(a);this.velocity.dot(o),this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.steer=e.steer||0,this.engineOn&&this.fuel>.1&&this.throttle>0&&(l+=r.accel*this.throttle*t*(1-Ht(l/r.maxSpeed,0,1)*.6)),this.brakeInput>0&&(l-=r.brake*this.brakeInput*t),l*=1-t*.25,l=Ht(l,-4,r.maxSpeed),this.heading=Ms(this.heading+this.steer*1.1*Ht(Math.abs(l)/8,0,1)*t);const h=new lt(Math.sin(this.heading),Math.cos(this.heading));if(this.velocity.set(h.x*l,h.y*l),this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.pos.z<492&&(this.pos.z=492,this.velocity.y=Math.abs(this.velocity.y)*.2,l*=.2),this.pos.z>1400&&(this.pos.z=1400),this.pos.y=.25+Math.sin(performance.now()*.0012+this.pos.x*.01)*.12,this.group.rotation.y=this.heading,this.group.rotation.z=Re(this.group.rotation.z,this.steer*.08,t*3),this.group.rotation.x=Re(this.group.rotation.x,Math.sin(performance.now()*.0015)*.02,t*2),this.speed=l,this.speedKmh=Math.abs(l)*3.6,this.fuel=Math.max(0,this.fuel-t*(.02+this.throttle*.04)),this.animateLights(performance.now()/1e3,n,e),Math.abs(l)>3&&(this.wakeAcc+=t,this.wakeAcc>.08)){this.wakeAcc=0;const u=new lt(-Math.sin(this.heading),-Math.cos(this.heading));this.game.effects.wakes.spawn(this.pos.x+u.x*3.2,this.pos.y+.2,this.pos.z+u.y*3.2,{color:14152191,size:1.2,grow:2.4,life:.9,vy:.2,vx:Q(-.4,.4),vz:Q(-.4,.4),drag:.9})}this.health<55&&this.game.effects.smokeAtVehicle(this,t)}resolveWorldCollisions(t,e){const i=this.cfg.len,n=this.cfg.wid*.46,r=[-i*.32,0,i*.32],a={x:Math.sin(this.heading),z:Math.cos(this.heading)};let o=!1,l=0,c=null;for(const h of r){const u=this.pos.x+a.x*h,f=this.pos.z+a.z*h,d=this.game.city.collideCircle(u,f,n);d&&(this.pos.x+=d.nx*d.pen,this.pos.z+=d.nz*d.pen,o=!0,d.pen>l&&(l=d.pen,c=d))}if(o){const h=Math.abs(e)+l*8;if(h>1.6){const u=c.nx,f=c.nz,d=this.velocity.x*u+this.velocity.y*f;d<0&&(this.velocity.x-=u*d*1.35,this.velocity.y-=f*d*1.35),this.velocity.multiplyScalar(.72);const p=Ht((h-1.2)*.9,0,30);this.applyDamage(p,{x:this.pos.x+a.x*(i*.32),y:this.pos.y+.7,z:this.pos.z+a.z*(i*.32)}),this.game.audio?.crash(h),h>4&&(this.game.camShake=Math.max(this.game.camShake,Math.min(1,h/20)))}}}animateWheels(t){const e=this.speed*t/(this.cfg.wheelR||.35);for(const i of this.wheels)i.mesh.rotation.x+=e,i.front&&(i.mesh.rotation.y=this.steer*.42)}animateLights(t,e,i){(this.lightsOn||e>.5)&&(this.lightsOn=!0);const r=this.indicator===-1||i?.left,a=this.indicator===1||i?.right;if(kc(this.headMats,this.brakeMats,this.turnMats,{lightsOn:this.lightsOn,braking:this.brakeOn,left:r,right:a}),this.serviceLights){const o=Math.floor(t*6)%2===0;this.serviceLights.redM.color.setHex(o?16719904:2622982),this.serviceLights.blueM.color.setHex(o?1785855:526368),this.serviceLights.light.color.setHex(o?16719904:2776063),this.serviceLights.light.intensity=3}}applyDamage(t,e=null){this.health=Ht(this.health-t,0,100),this.damageFlash=1,e&&(t>4&&this.game.effects.sparksAt(e.x,e.y,e.z,Math.min(24,t)),t>8&&(this.deform(t,e),this.game.effects.debris(e.x,e.y,e.z,Math.min(12,t/2))),t>22&&this.game.effects.explosion(e.x,e.y,e.z)),this.health<=0&&!this.dead&&(this.dead=!0,this.engineOn=!1,this.game.notify?.("Vehicle disabled — engine failure","bad")),this.serviceLights&&(this.serviceLights.group.visible=this.health>30)}deform(t,e){const i=e?this.group.worldToLocal(new P(e.x,e.y,e.z)):new P(0,0,1),n=[];if(this.group.traverse(h=>{h.isMesh&&h.userData.panel&&h.geometry&&n.push(h)}),!n.length)return;const a=n[Math.floor(Math.random()*n.length)].geometry,o=a.attributes.position,l=i.clone(),c=Math.min(.28,t*.008);for(let h=0;h<o.count;h++){const u=o.getX(h),f=o.getY(h),d=o.getZ(h),p=Math.hypot(u-l.x,f-l.y,d-l.z);if(p<2.5){const x=(1-p/2.5)*c;o.setXYZ(h,u*(1-x*.5),f*(1-x*.7),d*(1-x*.3))}}o.needsUpdate=!0,a.computeVertexNormals(),this.bodyMat.color.multiplyScalar(.985)}repair(){this.health=100,this.fuel=this.cfg.fuel,this.engineOn=!0,this.dead=!1,this.visible=!0,this.group.visible=!0}dispose(){this.game.scene.remove(this.group)}}class $x{constructor(t){this.game=t,this.vehicles=[],this.playerVehicle=null,this.trafficLimit=34,this.spawnedTraffic=!1,this.pendingTraffic=[]}spawn(t,e,i,n=0,r={}){const a=new Yx(this.game,t,e,i,n,r);return this.vehicles.push(a),a}spawnTraffic(t){const e=["sedan","sedan","taxi","suv","sports","van","pickup","bus","truck","suv","sedan"];this.vehicles.filter(i=>i.mode==="parked"||i.mode==="traffic");for(let i=0;i<t;i++){const n=Me(e),r=this.randomRoadPoint(),a=this.spawn(n,r.x,r.z,r.heading,{traffic:!0,color:No(n),y:.02});a.traffic.cruise=n==="bus"||n==="truck"?Q(7,9):Q(10,14.5),this.vehicles.push}}randomRoadPoint(){const t=1+Math.floor(Math.random()*7),e=1+Math.floor(Math.random()*7);if(Math.random()>.5){const a=Yt(t)+(Math.random()>.5?4:-4),o=Yt(e)+Q(10,80)*(Math.random()>.5?1:-1);return{x:a,z:o,heading:o>Yt(e)?0:Math.PI,axis:"z"}}const n=Yt(e)+(Math.random()>.5?4:-4),r=Yt(t)+Q(10,80)*(Math.random()>.5?1:-1);return{x:r,z:n,heading:r>Yt(t)?Math.PI/2:-Math.PI/2,axis:"x"}}spawnParkedCity(){const t=[...this.game.city.parkingSpots].sort(()=>Math.random()-.5).slice(0,18),e=["sedan","suv","sports","van","pickup","sedan","taxi"];for(const r of t)this.spawn(Me(e),r.x,r.z,r.heading,{color:No(Me(e))});this.startCar=this.spawn("sedan",4,36,Math.PI,{color:2837103,owned:!0,name:"Your Sable"});const i=this.spawn("police",132,44,Math.PI/2,{service:"police",color:15265264}),n=this.spawn("police",132,58,-Math.PI/2,{service:"police"});this.policeUnits=[i,n],this.ambulance=this.spawn("ambulance",168,166,Math.PI/2,{service:"ambulance"}),this.fireEngine=this.spawn("fire",-150,-30,Math.PI/2,{service:"fire"}),this.helipadHeli=this.spawn("helicopter",this.game.city.helipad.x,this.game.city.helipad.z,0,{y:this.game.city.helipad.y+1.7}),this.helipadHeli.altitude=this.helipadHeli.pos.y,this.boats=[this.spawn("boat",300,500,Math.PI,{y:.25}),this.spawn("boat",322,510,Math.PI*.9,{y:.25,color:12270132}),this.spawn("boat",345,530,Math.PI,{y:.25,color:3108495})],this.supercars=[this.spawn("super",30,158,Math.PI/2,{color:14992458}),this.spawn("super",36,166,Math.PI/2,{color:1842210}),this.spawn("sports",24,170,Math.PI/2,{color:11678772})],this.bus=this.spawn("bus",96,340,0,{color:2912136}),this.construction=this.spawn("construction",-300,-300,Math.PI/2,{color:14066975})}findNearest(t,e,i=5,n=null){let r=null,a=i;for(const o of this.vehicles){if(o.isPlayer||n&&!n(o))continue;const l=Math.hypot(o.pos.x-t,o.pos.z-e);l<a&&(a=l,r=o)}return r?{vehicle:r,dist:a}:null}startDriving(t){this.playerVehicle=t,t.mode="player",t.isPlayer=!0,t.traffic=null,t.parkedName=t.parkedName||t.cfg.name,t.engineOn=!0,this.game.audio?.startEngine(t)}stopDriving(t){t&&(t.mode="parked",t.isPlayer=!1,t.throttle=0,t.brakeInput=0,t.steer=0,t.indicator=0,this.playerVehicle=null,this.game.audio?.stopEngine())}update(t,e,i,n){const r=this.playerVehicle;r&&r.velocity&&r.updatePlayer(t,this.game.controls.vehicle,n,e,i);for(const a of this.vehicles)if(a!==r){if(a.mode==="traffic")a.updateTraffic(t,e,i,n);else if(a.health<55&&this.game.effects.smokeAtVehicle(a,t*.5),a.serviceLights){const o=Math.floor(e*5)%2===0;a.serviceLights.redM.color.setHex(o?16719904:2622982),a.serviceLights.blueM.color.setHex(o?723760:2776063),a.serviceLights.light.intensity=o?2.4:1.8}}r&&this.handleTrafficCollisions(r)}handleTrafficCollisions(t){Math.sin(t.heading),Math.cos(t.heading);for(const e of this.vehicles){if(e===t||e.mode!=="traffic")continue;const i=e.pos.x-t.pos.x,n=e.pos.z-t.pos.z,r=Math.hypot(i,n),a=(e.cfg.len+t.cfg.len)*.38;if(r<a&&r>.01){const o=i/r,l=n/r,c=Math.abs(t.speed);e.knock.set(o*(2+c*.35),l*(2+c*.35)),e.knockTimer=.8,e.pos.x+=o*(a-r)*.8,e.pos.z+=l*(a-r)*.8,t.speed>4&&(t.velocity.multiplyScalar(.82),this.game.effects.sparksAt(e.pos.x,e.pos.y+.8,e.pos.z,14),e.health=Ht(e.health-Math.min(30,c*.8),0,100),this.game.audio?.crash(c),this.game.camShake=Math.max(this.game.camShake,Math.min(.8,c/35)),this.game.onTrafficCollision?.(t,e))}}}nearestService(t,e,i){let n=null,r=1/0;for(const a of this.vehicles){if(a.service!==t)continue;const o=Math.hypot(a.pos.x-e,a.pos.z-i);o<r&&(r=o,n=a)}return n}}const Zx=[12618339,9198652,14725772,7029296,11039311,14262394,6043686],Kx=[2832973,7023925,3426874,5326428,2303532,9202493,11055285,4087680,8011346,5068103],Jx=[2239027,2895670,3881792,4866358,2237996,5922144,1777702],Qx=[1971729,3877405,6965804,10123850,1381653,7829367];class jx{constructor(t){this.game=t,this.count=140,this.peds=[],this.parts={},this.dummy=new we,this.local=new we,this.mat4=new xe,this.initMeshes(),this.spawn(),this.scanTimer=0}initMeshes(){const t=this.count,e={torso:new Z(.42,.64,.26),head:new Xe(.172,10,8),legL:new Z(.15,.72,.18),legR:new Z(.15,.72,.18),armL:new Z(.13,.62,.15),armR:new Z(.13,.62,.15),hair:new Xe(.177,8,6,0,pe,0,Math.PI*.55)};new q({vertexColors:!1,roughness:.85}),this.meshMats={torso:new q({roughness:.85}),head:new q({roughness:.7}),leg:new q({roughness:.9}),arm:new q({roughness:.85}),hair:new q({roughness:.93})};for(const i of Object.keys(e)){const n=new Fe(e[i],this.meshMats[i==="head"||i==="hair"?"head":i.startsWith("leg")?"leg":i.startsWith("arm")?"arm":i==="hair"?"hair":"torso"],t);n.instanceMatrix.setUsage(Nu),n.castShadow=i!=="hair",n.frustumCulled=!1,this.game.scene.add(n),this.parts[i]=n}for(const i of[]);for(const i of Object.values(this.parts)){for(let n=0;n<t;n++)i.setColorAt(n,new kt(16777215));i.instanceColor.needsUpdate=!0}}colorFor(t){new kt;for(let e=0;e<this.count;e++){const i=this.peds[e];i&&(this.parts.torso.setColorAt(e,new kt(i.colors.jacket)),this.parts.armL.setColorAt(e,new kt(i.colors.jacket)),this.parts.armR.setColorAt(e,new kt(i.colors.jacket)),this.parts.head.setColorAt(e,new kt(i.colors.skin)),this.parts.hair.setColorAt(e,new kt(i.colors.hair)),this.parts.legL.setColorAt(e,new kt(i.colors.pants)),this.parts.legR.setColorAt(e,new kt(i.colors.pants)))}for(const e of Object.values(this.parts))e.instanceColor.needsUpdate=!0}spawn(){this.game.city;for(let t=0;t<this.count;t++){let e;t<22?e=this.makeCrosser(t):t<34?e=this.makeIdler(t):e=this.makeWalker(t),e.index=t,e.colors={jacket:Me(Kx),pants:Me(Jx),skin:Me(Zx),hair:Me(Qx)},e.scale=Q(.9,1.06),e.phase=Q(0,pe),e.speed=Q(.85,1.5),e.idleTimer=Q(0,3),e.state=e.type==="idler"?"idle":"walk",e.fleeTimer=0,e.downTimer=0,e.talkTimer=0,e.pos=new P(e.x,.18,e.z),e.heading=Q(0,pe),this.peds.push(e)}this.colorFor()}randomSidewalkPoint(){const t=Math.random()>.5,e=Math.floor(Math.random()*Ve),i=Math.random()>.5?1:-1,n=1+Math.floor(Math.random()*6),r=(Math.random()>.5,9.3);if(t){const l=Yt(e)-i*r,c=Yt(n)+Q(4,60);return{x:l,z:c,axis:"z",line:e,dir:i,i:e,j:n,t:Q(4,60)}}const a=Yt(e)+i*r;return{x:Yt(n)+Q(4,60),z:a,axis:"x",line:e,dir:i,i:n,j:e,t:Q(4,60)}}makeWalker(t){const e=this.randomSidewalkPoint();return{type:"walker",x:e.x,z:e.z,axis:e.axis,dir:e.dir,line:e.line,ni:e.i,nj:e.j,t:e.t,wait:0,crossing:!1}}makeCrosser(t){const e=Math.random()>.5,i=1+Math.floor(Math.random()*7),n=1+Math.floor(Math.random()*7),r=Math.random()>.5?1:-1,a=e?"x":"z",o=e?Yt(n)+r*9.3:Yt(i)+Q(-3,3),l=e?Yt(i)+10.4:Yt(n)+r*9.3,c=e?Yt(n)-r*9.3:o,h=e?l:Yt(n)-r*9.3;return{type:"crosser",x:o,z:l,axis:a,line:i,dir:r,ni:n,nj:i,startX:o,startZ:l,endX:c,endZ:h,t:0,wait:Q(0,4),crossing:!1,side:r,originNode:n,originLine:i,crossVertical:e}}makeIdler(t){const e={x:-24,z:-24},i=Q(0,pe),n=Q(4,28);return{type:"idler",x:e.x+Math.cos(i)*n,z:e.z+Math.sin(i)*n,axis:"z",line:4,dir:1,ni:4,nj:4,t:0,wait:Q(2,12),home:!0}}nextWalkerTarget(t){const e=[];for(const r of[[1,0],[-1,0],[0,1],[0,-1]]){if(r[0]===-t.dir&&t.axis==="x"||r[1]===-t.dir&&t.axis==="z")continue;const a=t.ni+r[0],o=t.nj+r[1];a<0||a>Ve-1||o<0||o>Ve-1||e.push(r)}if(!e.length){t.dir=-t.dir;return}const i=e.find(r=>t.axis==="x"?r[0]===t.dir:r[1]===t.dir);let n;i&&Math.random()<.68?n=i:n=Me(e),n[0]!==0?(t.axis="x",t.dir=n[0],t.ni=t.ni+n[0]):(t.axis="z",t.dir=n[1],t.nj=t.nj+n[1]),t.t=0,t.wait=Math.random()<.2?Q(1,4):0,t.line=t.axis==="z"?t.ni:t.nj}targetPoint(t){if(t.axis==="z"){const r=Yt(t.ni)-t.dir*9.3,a=Yt(t.nj)+t.dir*t.t;return{x:r,z:a}}const i=Yt(t.nj)+t.dir*9.3;return{x:Yt(t.ni)+t.dir*t.t,z:i}}update(t,e,i){const n=i.pos.x,r=i.pos.z;i.vehicle;for(const a of this.peds){if(a.x-n,a.z-r,a.state==="down"){a.downTimer-=t,a.downTimer<=0&&(a.state="walk",a.x+=Q(-1,1),a.z+=Q(-1,1)),this.writePed(a,e,t,!0);continue}if(a.fleeTimer>0){a.fleeTimer-=t,a.x+=Math.sin(a.heading)*5.2*t,a.z+=Math.cos(a.heading)*5.2*t,a.state="flee",a.phase+=t*16,this.writePed(a,e,t);continue}const o=this.game.vehicles?.playerVehicle;if(o&&Math.hypot(o.pos.x-a.x,o.pos.z-a.z)<9&&Math.abs(o.speed)>4.5){a.heading=Math.atan2(a.x-o.pos.x,a.z-o.pos.z),a.fleeTimer=Q(1.2,2.4),Math.random()<.2&&this.game.notify?.("Pedestrians scatter from the road","warn");continue}if(a.type==="crosser")this.updateCrosser(a,t,e);else if(a.type==="idler"){if(a.wait-=t,a.wait<=0)if(a.wait=Q(2,7),Math.random()<.45&&a.home){const l={x:-24,z:-24},c=Q(0,pe),h=Q(4,28);a.tx=l.x+Math.cos(c)*h,a.tz=l.z+Math.sin(c)*h,a.state="walk"}else a.state="idle";if(a.state==="walk"&&a.tx!==void 0)if(Math.hypot(a.tx-a.x,a.tz-a.z)>.4){const c=Math.atan2(a.tx-a.x,a.tz-a.z);a.heading=Ir(a.heading,c,t*5),a.x+=Math.sin(a.heading)*1.1*t,a.z+=Math.cos(a.heading)*1.1*t,a.phase+=t*6}else a.state="idle",a.wait=Q(2,8)}else this.updateWalker(a,t);if(a.wait>0){a.wait-=t,a.phase=Re(a.phase,0,t),Math.random()<.002&&(a.heading+=Q(-.5,.5)),this.writePed(a,e,t);continue}a.state==="walk"||a.state==="flee"?(a.phase+=t*(a.type==="crosser"?8:7)*(a.fleeTimer>0?1.6:1),a.x+=Math.sin(a.heading)*a.speed*t,a.z+=Math.cos(a.heading)*a.speed*t):a.state==="idle"&&(a.phase+=t*.8),this.writePed(a,e,t)}this.scanTimer-=t,this.scanTimer<=0&&(this.scanTimer=.18,this.checkVehicleHits())}updateWalker(t,e){const i=this.targetPoint(t),n=i.x-t.x,r=i.z-t.z;t.heading=Ir(t.heading,Math.atan2(n,r),e*4.5),t.state="walk",t.t+=t.speed*e*.72,t.t>96&&(t.t=0,this.nextWalkerTarget(t))}updateCrosser(t,e){if(t.crossing){const i=t.endX-t.x,n=t.endZ-t.z,r=Math.hypot(i,n);if(t.heading=Ir(t.heading,Math.atan2(i,n),e*7),t.state="walk",t.x+=Math.sin(t.heading)*1.65*e,t.z+=Math.cos(t.heading)*1.65*e,r<.5){t.crossing=!1,t.wait=Q(2.5,7);const a=t.startX,o=t.startZ;t.startX=t.endX,t.startZ=t.endZ,t.endX=a,t.endZ=o}}else t.wait-=e,t.wait<=0&&(t.crossing=!0)}writePed(t,e,i,n=!1){const r=t.index;this.dummy.position.set(t.x,.18,t.z),this.dummy.rotation.set(0,t.heading,0),n&&(this.dummy.rotation.z=Math.PI/2,this.dummy.position.y=.3),this.dummy.updateMatrix();const l=-(Math.sin(t.phase)*.55)*.75,c=t.scale,h=this.parts,u=this.local,f=this.mat4,d=(p,x,m,g,_=0,y=0,M=0,T=c,E=c,v=c)=>{u.position.set(x,m,g),u.rotation.set(_,y,M),u.scale.set(T,E,v),u.updateMatrix(),f.multiplyMatrices(this.dummy.matrix,u.matrix),p.setMatrixAt(r,f)};n?(d(h.torso,0,1.1,0),d(h.head,0,1.6,0),d(h.hair,0,1.62,0),d(h.armL,-.3,1.32,0,.3),d(h.armR,.3,1.32,0,-.3),d(h.legL,-.12,.52,.1),d(h.legR,.12,.52,-.1)):(t.state==="idle"&&t.type==="idler"&&t.wait>0&&Math.random()<0,d(h.torso,0,1.18*c,0),d(h.head,0,1.66*c,0),d(h.hair,0,1.674*c,-.005),d(h.legL,-.12*c,.44*c,Math.sin(t.phase)*.24*c,Math.sin(t.phase)*.5),d(h.legR,.12*c,.44*c,-Math.sin(t.phase)*.24*c,-Math.sin(t.phase)*.5),d(h.armL,-.3*c,1.28*c,-Math.sin(t.phase)*.2*c,l),d(h.armR,.3*c,1.28*c,Math.sin(t.phase)*.2*c,-l));for(const p of Object.values(h))p.instanceMatrix.needsUpdate=!0}checkVehicleHits(){const t=this.game.vehicles?.playerVehicle;if(!t||Math.abs(t.speed)<2)return;const e=t.cfg.len,i={x:Math.sin(t.heading),z:Math.cos(t.heading)};for(const n of this.peds){if(n.state==="down")continue;const r=n.x-t.pos.x,a=n.z-t.pos.z,o=r*i.x+a*i.z,l=Math.abs(r*i.z-a*i.x);Math.abs(o)<e*.55&&l<t.cfg.wid*.55&&(n.state="down",n.downTimer=Q(5,8),n.heading=t.heading+Q(-1,1),this.game.onPedHit?.(n,t))}}anyInFront(t,e,i,n){const r=Math.sin(i),a=Math.cos(i);for(const o of this.peds){if(o.state==="down")continue;const l=o.x-t,c=o.z-e;if(Math.abs(l)>n||Math.abs(c)>n)continue;const h=Math.hypot(l,c);if(h<n&&(l*r+c*a)/Math.max(h,.001)>.55)return o}return null}nearest(t,e,i=3){let n=null,r=i;for(const a of this.peds){if(a.state==="down")continue;const o=Math.hypot(a.x-t,a.z-e);o<r&&(r=o,n=a)}return n}panic(t,e,i=25){for(const n of this.peds)Math.hypot(n.x-t,n.z-e)<i&&(n.fleeTimer=Q(2,4),n.heading=Math.atan2(n.x-t,n.z-e))}gather(t,e,i=18){for(const n of this.peds)if(this.peds.indexOf(n)%5===0&&Math.hypot(n.x-t,n.z-e)<i){const r=Q(0,pe),a=Q(4,12);n.tx=t+Math.cos(r)*a,n.tz=e+Math.sin(r)*a,n.state="walk",n.wait=0,n.heading=Math.atan2(n.tx-n.x,n.tz-n.z)}}}const Pt=s=>document.getElementById(s),br={en:{startGame:"Start Game",newLife:"New life in Nova City",continue:"Continue",settings:"Settings",settingsCaption:"Video · audio · controls",chooseControls:"Choose how to play",pcMode:"PC mode",pcModeDesc:"Keyboard and mouse",phoneMode:"Phone mode",phoneModeDesc:"Touch controls",language:"Language",liveSimulation:"LIVE SIMULATION",menuKicker:"AN OPEN-WORLD LIFE SIMULATOR",menuTitle:"Your city.",menuTitleAccent:"Every life in it.",menuCopy:"A living metropolis of towers, traffic, weather and consequence. Walk it, drive it, fly it, or just watch the city breathe.",districts:"districts",vehicles:"vehicles",citizens:"citizens",liveSystems:"live systems",pcControls:"WASD move · Mouse look · E interact · Tab phone · M map · Esc pause",buildInfo:"WebGL · Procedural build",move:"Move",sprint:"Sprint",jump:"Jump",interact:"Interact",phone:"Phone",graphics:"Graphics quality",shadows:"Shadows",volume:"Master volume",invert:"Invert camera Y",timeOfDay:"Time of day",cameraFov:"Camera FOV",resetSave:"Reset save data",clearSave:"Clear save",applyClose:"Apply & Close",backCity:"Back to Nova City",system:"SYSTEM"},ru:{startGame:"Начать игру",newLife:"Новая жизнь в Нова-Сити",continue:"Продолжить",settings:"Настройки",settingsCaption:"Графика · звук · управление",chooseControls:"Выберите управление",pcMode:"Режим ПК",pcModeDesc:"Клавиатура и мышь",phoneMode:"Режим телефона",phoneModeDesc:"Сенсорное управление",language:"Язык",liveSimulation:"ЖИВАЯ СИМУЛЯЦИЯ",menuKicker:"СИМУЛЯТОР ЖИЗНИ В ОТКРЫТОМ МИРЕ",menuTitle:"Твой город.",menuTitleAccent:"Твоя история.",menuCopy:"Живой мегаполис с небоскрёбами, движением, погодой и последствиями. Гуляй, води, летай или наблюдай за городом.",districts:"районов",vehicles:"машин",citizens:"жителей",liveSystems:"систем",pcControls:"WASD движение · Мышь обзор · E действие · Tab телефон · M карта · Esc пауза",buildInfo:"WebGL · Процедурный мир",move:"Идти",sprint:"Бег",jump:"Прыжок",interact:"Действие",phone:"Телефон",graphics:"Качество графики",shadows:"Тени",volume:"Общая громкость",invert:"Обратить ось камеры Y",timeOfDay:"Время суток",cameraFov:"Поле зрения",resetSave:"Сбросить сохранение",clearSave:"Очистить",applyClose:"Применить и закрыть",backCity:"Вернуться в Нова-Сити",system:"СИСТЕМА"},zh:{startGame:"开始游戏",newLife:"在新星城开启新生活",continue:"继续游戏",settings:"设置",settingsCaption:"画面 · 音频 · 控制",chooseControls:"选择操作方式",pcMode:"电脑模式",pcModeDesc:"键盘和鼠标",phoneMode:"手机模式",phoneModeDesc:"触屏操作",language:"语言",liveSimulation:"城市实时模拟",menuKicker:"开放世界生活模拟器",menuTitle:"你的城市。",menuTitleAccent:"你的每一种人生。",menuCopy:"充满高楼、车流、天气与机遇的鲜活都市。步行、驾驶、飞行，或静静感受城市脉搏。",districts:"个城区",vehicles:"辆车辆",citizens:"位市民",liveSystems:"项动态系统",pcControls:"WASD 移动 · 鼠标视角 · E 互动 · Tab 手机 · M 地图 · Esc 暂停",buildInfo:"WebGL · 程序生成城市",move:"移动",sprint:"冲刺",jump:"跳跃",interact:"互动",phone:"手机",graphics:"画面质量",shadows:"阴影",volume:"主音量",invert:"反转镜头 Y 轴",timeOfDay:"时间",cameraFov:"视野范围",resetSave:"重置存档",clearSave:"清除存档",applyClose:"应用并关闭",backCity:"返回新星城",system:"系统"}},Bc={downtown:"#26333f",midtown:"#34373a",industrial:"#3a3b36",suburb:"#2f3c2f",waterfront:"#2f4048",residential:"#333a3a",park:"#243d29",airport:"#39382f"};class tv{constructor(t){this.game=t,this.el={loading:Pt("loading"),menu:Pt("menu"),hud:Pt("hud"),overlayRoot:Pt("overlay-root"),notifications:Pt("notifications"),prompt:Pt("prompt"),promptText:Pt("prompt-text"),vehicleHud:Pt("vehicle-hud"),speed:Pt("speed"),dial:Pt("dial-fill"),vehName:Pt("veh-name"),fuelBar:Pt("fuel-bar"),hullBar:Pt("hull-bar"),money:Pt("money"),wantedStars:Pt("wanted-stars"),wantedChip:Pt("wanted-chip"),clock:Pt("clock"),weather:Pt("weather-label"),temp:Pt("temp-label"),daybar:Pt("daybar"),district:Pt("district-label"),objective:Pt("objective"),objTitle:Pt("obj-title"),objSub:Pt("obj-sub"),objDist:Pt("obj-dist"),minimap:Pt("minimap"),fullmap:Pt("fullmap"),mapPos:Pt("map-pos"),fade:Pt("fade"),toast:Pt("toast"),phoneTime:Pt("phone-time"),phoneCash:Pt("phone-cash"),phoneWelcome:Pt("phone-welcome"),phonePulse:Pt("phone-pulse"),jobsList:Pt("jobs-list"),garageList:Pt("garage-list"),shopList:Pt("shop-list"),settingsList:Pt("settings-list"),phoneActions:Pt("phone-actions"),modal:Pt("modal-inner"),damageFlash:Pt("damage-flash"),weatherFx:Pt("weather-fx"),controlsHint:Pt("controls-hint")},this.notifications=[],this.overlay=null,this.mapCache=null,this.mapOpen=!1,this.wantedStars=["☆☆☆☆☆","★☆☆☆☆","★★☆☆☆","★★★☆☆","★★★★☆","★★★★★"],this.transit=null,this.gps=null,this.binding(),this.updateSettingsUI()}binding(){const t=this.game;Pt("btn-start").addEventListener("click",()=>{Pt("mode-picker").classList.toggle("hidden")}),document.querySelectorAll("[data-start-mode]").forEach(i=>{i.addEventListener("click",()=>{t.settings.mode=i.dataset.startMode,t.saveSettings(),t.startNewGame()})}),Pt("btn-continue").addEventListener("click",()=>t.continueGame()),Pt("btn-settings-menu").addEventListener("click",()=>this.openSettings()),Pt("btn-resume").addEventListener("click",()=>this.closeOverlay()),Pt("btn-pause-save").addEventListener("click",()=>{t.saveGame(),this.toast("Game saved to this browser")}),Pt("btn-pause-settings").addEventListener("click",()=>this.openSettings()),Pt("btn-pause-restart").addEventListener("click",()=>t.startNewGame()),Pt("btn-pause-menu").addEventListener("click",()=>t.returnToMenu()),document.querySelectorAll("[data-overlay]").forEach(i=>{i.addEventListener("click",()=>this.openOverlay(i.dataset.overlay))}),document.querySelectorAll("[data-close]").forEach(i=>i.addEventListener("click",()=>this.closeOverlay())),document.querySelectorAll(".phone-apps button").forEach(i=>{i.addEventListener("click",()=>this.switchPhoneTab(i.dataset.phoneTab))}),this.el.fullmap.addEventListener("click",i=>{const n=this.el.fullmap.getBoundingClientRect(),r=(i.clientX-n.left)/n.width*1400,a=(i.clientY-n.top)/n.height*1e3,o=(r-700)/1,l=(a-500)/1;this.gps={x:Ht(o,-650,700),z:Ht(l,-650,500)},t.gps=this.gps,this.drawFullMap(),this.toast("GPS waypoint set"),t.audio?.click()});const e=Pt("language-select");e&&(e.value=t.settings.language||"en",e.addEventListener("change",()=>{t.settings.language=e.value,this.applyLanguage(),t.saveSettings(),this.overlay==="settings"&&this.buildSettings(Pt("modal-settings")||Pt("settings-list"))})),this.bindTouchControls(),this.applyLanguage(),this.applyPlayMode(),document.addEventListener("keydown",i=>{i.key==="Escape"&&(this.overlay?(i.preventDefault(),this.closeOverlay()):this.game.mode!=="menu"&&(i.preventDefault(),this.game.togglePause()))})}applyPlayMode(){const t=this.game.settings.mode==="phone"?"phone":"pc";document.body.classList.toggle("mode-phone",t==="phone"),document.body.classList.toggle("mode-pc",t==="pc")}applyLanguage(){const t=br[this.game.settings.language]?this.game.settings.language:"en";this.game.settings.language=t,document.documentElement.lang=t;const e=br[t];document.querySelectorAll("[data-i18n]").forEach(n=>{const r=n.dataset.i18n;e[r]&&(n.textContent=e[r])});const i=Pt("language-select");i&&(i.value=t)}bindTouchControls(){const t=Pt("touch-stick"),e=Pt("touch-stick-thumb");if(!t)return;const i=r=>{const a=t.getBoundingClientRect(),o=r.touches?.[0]||r;let l=(o.clientX-(a.left+a.width/2))/(a.width/2),c=(o.clientY-(a.top+a.height/2))/(a.height/2);const h=Math.hypot(l,c);h>1&&(l/=h,c/=h),this.game.touch.x=l,this.game.touch.y=c,e&&(e.style.transform=`translate(${l*28}px, ${c*28}px)`)},n=()=>{this.game.touch.x=0,this.game.touch.y=0,this.game.touch.sprint=!1,e&&(e.style.transform="")};t.addEventListener("pointerdown",r=>{t.setPointerCapture?.(r.pointerId),i(r)}),t.addEventListener("pointermove",r=>{(r.buttons||r.pointerType==="touch")&&i(r)}),t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("lostpointercapture",n),document.querySelectorAll("[data-touch-action]").forEach(r=>{const a=r.dataset.touchAction,o=c=>{c.preventDefault(),a==="map"?this.game.toggleOverlay("map"):a==="phone"?this.game.toggleOverlay("phone"):a==="interact"?this.game.interact():a==="jump"?this.game.touch.jump=!0:a==="sprint"&&(this.game.touch.sprint=!0)},l=c=>{c.preventDefault(),a==="jump"&&(this.game.touch.jump=!1),a==="sprint"&&(this.game.touch.sprint=!1)};r.addEventListener("pointerdown",o),r.addEventListener("pointerup",l),r.addEventListener("pointercancel",l)})}hideLoading(){this.el.loading.classList.add("out"),setTimeout(()=>this.el.loading.classList.add("hidden"),900)}showMenu(){document.body.classList.remove("game-playing","ui-overlay-open"),this.el.menu.classList.remove("hidden"),requestAnimationFrame(()=>this.el.menu.classList.add("on")),this.el.hud.classList.add("hidden"),this.el.overlayRoot.classList.add("hidden");const t=localStorage.getItem("novacity-save-v1"),e=Pt("btn-continue");e.disabled=!t,Pt("continue-meta").textContent=t?"Return to your saved life":"No saved city yet",this.el.menu.querySelectorAll(".menu-stats b")[0].textContent="9"}hideMenu(){this.applyPlayMode(),document.body.classList.add("game-playing"),this.el.menu.classList.remove("on"),setTimeout(()=>this.el.menu.classList.add("hidden"),700),this.el.hud.classList.remove("hidden")}showHUD(){this.el.hud.classList.remove("hidden")}notify(t,e=""){this.notifications.length>5&&this.notifications.shift();const i=document.createElement("div");for(i.className="notification "+e,i.textContent=t,this.el.notifications.appendChild(i),this.notifications.push(i);this.el.notifications.children.length>6;)this.el.notifications.firstChild.remove();setTimeout(()=>{i.style.transition="opacity .4s, transform .4s",i.style.opacity="0",i.style.transform="translateX(-10px)",setTimeout(()=>i.remove(),450)},5200);const n=this.notifications.indexOf(i);n>=0&&this.notifications.splice(n,1)}toast(t){this.el.toast.textContent=t,this.el.toast.classList.remove("hidden"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.el.toast.classList.add("hidden"),1800)}setPrompt(t){if(!t){this.el.prompt.classList.add("hidden");return}this.el.promptText.textContent=t,this.el.prompt.classList.remove("hidden")}updateMoney(){this.el.money.textContent=Math.round(this.game.money).toLocaleString("en-US"),this.el.phoneCash.textContent=wi(this.game.money)}updateWanted(){const t=this.game.wanted?.level||0;this.el.wantedStars.textContent=this.wantedStars[t],this.el.wantedChip.classList.toggle("alert",t>0),this.el.wantedChip.classList.toggle("dim",t===0)}updateHUD(t){const e=this.game;if(!e.player)return;const i=e.hour;if(this.el.clock.textContent=Ia(i),this.el.phoneTime.textContent=Ia(i),this.el.weather.textContent={clear:"Clear",rain:"Rain",storm:"Thunderstorm",snow:"Snow",fog:"Fog"}[e.weather]||"Clear",this.el.temp.textContent=`${Math.round(e.temperature)}°C`,this.el.daybar.style.width=`${(i/24*100).toFixed(0)}%`,this.el.district.textContent=e.city.districtAt(e.player.pos.x,e.player.pos.z).toUpperCase(),e.vehicles.playerVehicle){const n=e.vehicles.playerVehicle;this.el.vehicleHud.classList.remove("hidden"),this.el.speed.textContent=Math.round(n.speedKmh);const r=Ht(Math.abs(n.speed)/n.cfg.maxSpeed,0,1);this.el.dial.style.strokeDashoffset=String(283-283*r*.97),this.el.dial.style.stroke=r>.82?"#ffb457":"#5be0ff",this.el.vehName.textContent=n.cfg.klass+" · "+(n.engineOn?"RUNNING":"OFF"),this.el.fuelBar.style.width=`${Ht(n.fuel/n.cfg.fuel*100,0,100)}%`,this.el.hullBar.style.width=`${n.health}%`,this.el.fuelBar.classList.toggle("low",n.fuel/n.cfg.fuel<.18),this.el.hullBar.classList.toggle("low",n.health<30),this.el.controlsHint.classList.add("hidden"),this.transit||this.el.vehicleHud.classList.remove("hidden")}else this.el.vehicleHud.classList.add("hidden"),this.el.controlsHint.classList.remove("hidden");e.player.firstPerson&&!e.vehicles.playerVehicle?this.el.controlsHint.classList.add("hidden"):e.vehicles.playerVehicle||this.el.controlsHint.classList.remove("hidden"),this.drawMinimap(t),this.overlay==="map"&&this.mapOpen}drawMinimap(t){const e=this.el.minimap;if(!e)return;const i=e.getContext("2d"),n=this.game,r=n.player,a=e.width,o=e.height,l=2.15;i.clearRect(0,0,a,o),i.save(),i.translate(a/2,o/2),i.fillStyle="#111922",i.fillRect(-a/2,-o/2,a,o);const c=(p,x)=>[(p-r.pos.x)*l,(x-r.pos.z)*l],[h,u]=c(0,490);u<o/2&&(i.fillStyle="#0e3547",i.fillRect(-a/2,u,a,o/2-u));for(const p of n.city.blocks){const[x,m]=c(p.x,p.z);if(Math.abs(x)>a/2+60||Math.abs(m)>o/2+60)continue;const g=68*l;i.fillStyle=Bc[p.district]||"#2c3238",i.fillRect(x-g/2,m-g/2,g,g),p.isPark&&(i.fillStyle="#2f5034",i.fillRect(x-g/2,m-g/2,g,g))}i.strokeStyle="rgba(140,160,175,.32)",i.lineWidth=8*l*.45;for(let p=0;p<9;p++){const x=c(Yt(p),-ze),m=c(Yt(p),ze);i.beginPath(),i.moveTo(x[0],x[1]),i.lineTo(m[0],m[1]),i.stroke();const g=c(-ze,Yt(p)),_=c(ze,Yt(p));i.beginPath(),i.moveTo(g[0],g[1]),i.lineTo(_[0],_[1]),i.stroke()}const f=n.city.pois.filter(p=>Math.hypot(p.x-r.pos.x,p.z-r.pos.z)<140);for(const p of f){const[x,m]=c(p.x,p.z);i.fillStyle=this.poiColor(p.type),i.beginPath(),i.arc(x,m,4.2,0,Math.PI*2),i.fill()}for(const p of n.events?.mapMarkers()||[]){const[x,m]=c(p.x,p.z);Math.abs(x)>a/2||Math.abs(m)>o/2||(i.fillStyle=p.type==="fire"?"#ff5b2a":"#ffb457",i.beginPath(),i.arc(x,m,5,0,Math.PI*2),i.fill())}if(n.jobs.current){const p=n.jobs.current.stage==="pickup"?n.jobs.current.pickup:n.jobs.current.dropoff,[x,m]=c(p.x,p.z);i.fillStyle="#ffb457",i.beginPath(),i.arc(x,m,5.5,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(255,180,87,.5)",i.lineWidth=2,i.beginPath(),i.arc(x,m,10,0,Math.PI*2),i.stroke()}if(this.gps){const[p,x]=c(this.gps.x,this.gps.z);i.strokeStyle="#5be0ff",i.lineWidth=2,i.setLineDash([4,4]),i.beginPath(),i.moveTo(0,0),i.lineTo(p,x),i.stroke(),i.setLineDash([]),i.fillStyle="#5be0ff",i.beginPath(),i.arc(p,x,4,0,Math.PI*2),i.fill()}if(n.vehicles)for(const p of n.vehicles.vehicles){const[x,m]=c(p.pos.x,p.pos.z);Math.abs(x)>a/2||Math.abs(m)>o/2||p!==n.vehicles.playerVehicle&&(i.fillStyle=p.service?p.service==="police"?"#5b8fff":p.service==="fire"?"#ff5b5b":"#ffffff":"rgba(200,220,240,.42)",i.fillRect(x-2,m-2,4,4))}i.save(),i.rotate(-n.player.heading+Math.PI),i.fillStyle="#5be0ff",i.shadowColor="#5be0ff",i.shadowBlur=10,i.beginPath(),i.moveTo(0,8),i.lineTo(-5,-6),i.lineTo(0,-3),i.lineTo(5,-6),i.closePath(),i.fill(),i.restore(),i.restore();const d=i.createRadialGradient(a/2,o/2,a*.34,a/2,o/2,a*.5);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(5,9,15,.72)"),i.fillStyle=d,i.fillRect(0,0,a,o)}poiColor(t){return{police:"#5b8fff",fire:"#ff5b5b",hospital:"#63f0d0",garage:"#ffb457",dealership:"#5be0ff",shop:"#9be36b",apartment:"#e8d28a",metro:"#b18cff",monorail:"#b18cff",train:"#b18cff",park:"#63f0b0",marina:"#5bc8ff",airport:"#d7eaff",hotel:"#ffcf7a",office:"#8fa8c0"}[t]||"#c8d8e8"}buildMapCache(){if(this.mapCache)return;const t=document.createElement("canvas");t.width=1400,t.height=1e3;const e=t.getContext("2d"),i=this.game;e.fillStyle="#0b121b",e.fillRect(0,0,1400,1e3);const n=(a,o)=>[a+700,o+500];e.fillStyle="#0d2c3d",e.fillRect(0,986,1400,200),e.fillStyle="#3b4330",e.fillRect(0,0,1400,1e3);const r=80;for(const a of i.city.blocks){const[o,l]=n(a.x,a.z);e.fillStyle=a.isPark?"#24472c":Bc[a.district]||"#2f353b",e.fillRect(o-r/2,l-r/2,r,r),a.district==="downtown"&&(e.fillStyle="rgba(180,210,235,.09)",e.fillRect(o-20,l-20,40,40))}e.strokeStyle="#4a5259",e.lineWidth=15,e.lineCap="butt";for(let a=0;a<9;a++){let[o,l]=n(Yt(a),-ze);e.beginPath(),e.moveTo(o,l),e.lineTo(o,l+2*ze),e.stroke();let[c,h]=n(-ze,Yt(a));e.beginPath(),e.moveTo(c,h),e.lineTo(c+2*ze,h),e.stroke()}e.strokeStyle="rgba(230,230,210,.18)",e.lineWidth=1,e.setLineDash([6,8]);for(let a=0;a<9;a++){let[o,l]=n(Yt(a),-ze);e.beginPath(),e.moveTo(o,l),e.lineTo(o,l+2*ze),e.stroke();let[c,h]=n(-ze,Yt(a));e.beginPath(),e.moveTo(c,h),e.lineTo(c+2*ze,h),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(177,140,255,.4)",e.lineWidth=3,e.strokeRect(450,250,500,500),e.strokeStyle="rgba(220,180,90,.5)",e.lineWidth=4,e.beginPath(),e.moveTo(0,54),e.lineTo(1400,54),e.stroke(),e.strokeStyle="#5d5d5d",e.lineWidth=26,e.beginPath(),e.moveTo(1370,340),e.lineTo(1370,660),e.stroke(),e.strokeStyle="rgba(255,255,255,.35)",e.lineWidth=2,e.setLineDash([10,12]),e.beginPath(),e.moveTo(1370,340),e.lineTo(1370,660),e.stroke(),e.setLineDash([]),e.fillStyle="rgba(190,215,240,.28)",e.font="600 11px Inter, sans-serif",e.textAlign="center",e.fillText("DOWNTOWN",700,490),e.fillText("INDUSTRIAL",500,185),e.fillText("PINE HILLS",1080,430),e.fillText("WEST END",250,560),e.fillText("HARBORFRONT",700,905);for(const a of i.city.pois){const[o,l]=n(a.x,a.z);e.fillStyle=this.poiColor(a.type),e.beginPath(),e.arc(o,l,6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(220,238,255,.7)",e.font="500 9px Inter, sans-serif",e.fillText(a.name.toUpperCase(),o,l-10)}this.mapCache=t}drawFullMap(){this.buildMapCache();const e=this.el.fullmap.getContext("2d");e.drawImage(this.mapCache,0,0);const i=this.game,n=(o,l)=>[o+700,l+500];for(const o of i.city.monorail.stations){const[l,c]=n(o.x,o.z);e.strokeStyle="#b18cff",e.lineWidth=3,e.beginPath(),e.arc(l,c,9,0,Math.PI*2),e.stroke(),e.fillStyle="#b18cff",e.font="600 10px Inter, sans-serif",e.textAlign="center",e.fillText("M",l,c+4)}for(const o of i.events.mapMarkers()){const[l,c]=n(o.x,o.z);e.fillStyle=o.type==="fire"?"#ff5b2a":"#ffb457",e.beginPath(),e.arc(l,c,8,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,180,87,.4)",e.lineWidth=2,e.beginPath(),e.arc(l,c,15+Math.sin(performance.now()*.003)*3,0,Math.PI*2),e.stroke()}if(i.jobs.current){const o=i.jobs.current.stage==="pickup"?i.jobs.current.pickup:i.jobs.current.dropoff,[l,c]=n(o.x,o.z);e.fillStyle="#ffb457",e.beginPath(),e.arc(l,c,10,0,Math.PI*2),e.fill(),e.fillStyle="#0a1018",e.font="700 12px Inter",e.textAlign="center",e.fillText("!",l,c+4)}if(this.gps){const[o,l]=n(this.gps.x,this.gps.z);e.strokeStyle="#5be0ff",e.lineWidth=2,e.setLineDash([8,8]);const[c,h]=n(i.player.pos.x,i.player.pos.z);e.beginPath(),e.moveTo(c,h),e.lineTo(o,l),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(o,l,7,0,Math.PI*2),e.fillStyle="#5be0ff",e.fill()}const[r,a]=n(i.player.pos.x,i.player.pos.z);e.save(),e.translate(r,a),e.rotate(-i.player.heading+Math.PI),e.fillStyle="#5be0ff",e.shadowColor="#5be0ff",e.shadowBlur=16,e.beginPath(),e.moveTo(0,14),e.lineTo(-9,-9),e.lineTo(0,-4),e.lineTo(9,-9),e.closePath(),e.fill(),e.restore(),this.el.mapPos.textContent=`${Math.round(i.player.pos.x)}, ${Math.round(i.player.pos.z)} · ${i.city.districtAt(i.player.pos.x,i.player.pos.z)}`}openOverlay(t){if(!t)return;this.overlay=t,document.body.classList.add("ui-overlay-open"),this.el.overlayRoot.classList.remove("hidden"),this.el.overlayRoot.querySelectorAll(".overlay-panel").forEach(i=>i.classList.add("hidden"));const e=this.el.overlayRoot.querySelector(`[data-panel="${t}"]`);e&&e.classList.remove("hidden"),t==="phone"&&this.refreshPhone(),t==="map"&&(this.mapOpen=!0,this.drawFullMap()),t==="pause"&&(this.game.paused=!0),t!=="pause"&&(this.game.paused=!0),this.game.audio?.click(),document.pointerLockElement&&document.exitPointerLock()}closeOverlay(){this.overlay=null,this.mapOpen=!1,document.body.classList.remove("ui-overlay-open"),this.el.overlayRoot.classList.add("hidden"),this.game.paused=!1,this.game.touch.x=0,this.game.touch.y=0,this.game.touch.sprint=!1,this.game.touch.jump=!1,this.game.keys.clear(),this.game.audio?.click()}openSettings(){this.openOverlay("modal"),this.el.overlayRoot.querySelector('[data-panel="phone"]')?.classList.add("hidden"),this.el.overlayRoot.querySelector('[data-panel="modal"]')?.classList.remove("hidden"),this.el.modal.innerHTML=`
      <div class="kicker">SYSTEM</div><h2>Settings</h2>
      <div class="modal-body"><div id="modal-settings" class="settings-list"></div></div>
      <div class="modal-actions"><button id="modal-close-btn" class="btn primary"><span>Apply & Close</span><small>Back to Nova City</small></button></div>`,this.buildSettings(Pt("modal-settings")),Pt("modal-close-btn").addEventListener("click",()=>{this.closeOverlay(),this.updateSettingsUI()}),this.overlay="settings"}switchPhoneTab(t){document.querySelectorAll(".phone-apps button").forEach(e=>e.classList.toggle("active",e.dataset.phoneTab===t));for(const e of["home","jobs","garage","shop","settings"])Pt("phone-"+e).classList.toggle("hidden",e!==t);t==="jobs"&&this.refreshJobs(),t==="garage"&&this.refreshGarage(),t==="shop"&&this.refreshShop(),t==="settings"&&this.buildSettings(Pt("settings-list")),this.game.audio?.click()}refreshPhone(){const t=this.game;this.updateMoney(),t.jobs.current?this.el.phoneWelcome.textContent=`${t.jobs.current.title} · ${t.jobs.current.stage==="pickup"?"Pick up cargo":"Deliver to destination"}`:this.el.phoneWelcome.textContent="The city is awake. Find work, buy a car, or just drive.";const e=this.el.phonePulse;e.innerHTML=`
      <div><span>Wanted</span><b>${this.wantedStars[t.wanted.level]}</b></div>
      <div><span>Weather</span><b>${t.weather.toUpperCase()}</b></div>
      <div><span>Time</span><b>${Ia(t.hour)}</b></div>
      <div><span>Active events</span><b>${t.events.events.filter(n=>n.active).length}</b></div>
      <div><span>Owned vehicles</span><b>${t.ownedVehicles.length}</b></div>`;const i=this.el.phoneActions;i.innerHTML=`
      <button data-phone-action="job">Find work</button>
      <button data-phone-action="garage">Track vehicle</button>
      <button data-phone-action="map">Open city map</button>
      <button data-phone-action="save">Save game</button>`,i.querySelectorAll("[data-phone-action]").forEach(n=>n.addEventListener("click",()=>{const r=n.dataset.phoneAction;r==="map"?this.openOverlay("map"):r==="save"?(t.saveGame(),this.toast("Game saved")):r==="job"?this.switchPhoneTab("jobs"):r==="garage"&&this.switchPhoneTab("garage")})),this.switchPhoneTab("home")}refreshJobs(){const t=this.game,e=t.jobs.offers.map(i=>`
      <div class="list-item">
        <div class="li-top"><b>${i.title}</b><span class="price">${wi(i.pay)}</span></div>
        <p>${i.desc}</p>
        <div class="meta">${i.pickupName} → ${i.dropName}${i.require?" · requires "+i.require[0]:""}</div>
        <div class="li-row"><span class="meta">${t.jobs.current?"Job active":"Available now"}</span>
        <button class="act" data-job="${i.uid}" ${t.jobs.current?"disabled":""}>Accept job</button></div>
      </div>`).join("");this.el.jobsList.innerHTML=e,this.el.jobsList.querySelectorAll("[data-job]").forEach(i=>i.addEventListener("click",()=>{t.jobs.start(i.dataset.job),this.refreshJobs(),this.closeOverlay()}))}refreshGarage(){const t=this.game,e=t.ownedVehicles;let i="";e.length||(i='<div class="list-item"><p>No owned vehicles. Visit Nova Motors to buy one, or find a car in the city.</p></div>');for(const[n,r]of e.entries()){const a=r;i+=`<div class="list-item">
        <div class="li-top"><b>${a.name}</b><span class="price">${wi(a.price)}</span></div>
        <p>${a.klass} · max ${Math.round(a.maxSpeed*3.6)} km/h · ${a.seats} seats</p>
        <div class="li-row"><span class="meta">${a.fuel} L tank</span><button class="act" data-track="${n}">Track & recall</button></div>
      </div>`}this.el.garageList.innerHTML=i,this.el.garageList.querySelectorAll("[data-track]").forEach(n=>n.addEventListener("click",()=>{t.recallVehicle(parseInt(n.dataset.track)),this.closeOverlay()}))}refreshShop(){const t=[{id:"coffee",name:"Coffee",desc:"A small pick-me-up while exploring.",price:6},{id:"sandwich",name:"Deli sandwich",desc:"Restores a little health.",price:12},{id:"medkit",name:"First aid kit",desc:"Restores full health.",price:45},{id:"fuelcan",name:"Fuel can (20 L)",desc:"Refuel your current vehicle.",price:32},{id:"jacket",name:"Nova field jacket",desc:"Change your jacket color.",price:60},{id:"pants",name:"Utility trousers",desc:"Change your trousers.",price:45},{id:"metrocard",name:"Metro pass",desc:"Five metro rides, no fare.",price:25}];this.el.shopList.innerHTML=t.map(e=>`
      <div class="list-item"><div class="li-top"><b>${e.name}</b><span class="price">${wi(e.price)}</span></div>
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
      <div class="setting-row"><span>${br[this.game.settings.language]?.language||"Language"}</span><select data-set="language">
        <option value="en" ${e.language==="en"?"selected":""}>English</option>
        <option value="ru" ${e.language==="ru"?"selected":""}>Русский</option>
        <option value="zh" ${e.language==="zh"?"selected":""}>中文</option>
      </select></div>
      <div class="setting-row"><span>${br[this.game.settings.language]?.chooseControls||"Play mode"}</span><select data-set="mode">
        <option value="pc" ${e.mode==="pc"?"selected":""}>PC</option>
        <option value="phone" ${e.mode==="phone"?"selected":""}>Phone</option>
      </select></div>
      <div class="setting-row"><span>Reset save data</span><button data-reset="1">Clear save</button></div>`,t.querySelectorAll("[data-set]").forEach(i=>{i.addEventListener("change",()=>{const n=i.dataset.set;n==="quality"&&this.game.setQuality(i.value),n==="shadows"&&(this.game.settings.shadows=i.value==="on"),n==="volume"&&(this.game.settings.volume=parseInt(i.value)/100,this.game.audio?.setVolume(this.game.settings.volume)),n==="invert"&&(this.game.settings.invert=i.value==="yes"),n==="time"&&this.game.setTimeOfDay(i.value),n==="fov"&&(this.game.settings.fov=parseInt(i.value),this.game.camera.fov=parseInt(i.value),this.game.camera.updateProjectionMatrix()),n==="language"&&(this.game.settings.language=i.value,this.applyLanguage()),n==="mode"&&(this.game.settings.mode=i.value==="phone"?"phone":"pc",this.applyPlayMode()),this.game.saveSettings(),n==="language"&&this.buildSettings(t),this.game.audio?.click()}),i.type==="range"&&i.addEventListener("input",()=>{const n=i.dataset.set;n==="volume"&&(this.game.settings.volume=parseInt(i.value)/100,this.game.audio?.setVolume(this.game.settings.volume)),n==="fov"&&(this.game.settings.fov=parseInt(i.value),this.game.camera.fov=parseInt(i.value),this.game.camera.updateProjectionMatrix()),this.game.saveSettings()})}),t.querySelector("[data-reset]")?.addEventListener("click",()=>{localStorage.removeItem("novacity-save-v1"),this.toast("Save data cleared"),this.showMenu(),this.closeOverlay()})}updateSettingsUI(){const t=this.game.settings;this.game.audio?.setVolume(t.volume)}showObjective(){this.el.objective.classList.remove("hidden")}hideObjective(){this.el.objective.classList.add("hidden")}updateObjective(t,e){t&&(this.el.objTitle.textContent=t.stage==="pickup"?t.title:"Deliver to "+t.dropName,this.el.objSub.textContent=t.stage==="pickup"?"Pick up · "+t.pickupName:"Drop off · "+t.dropName,this.el.objDist.textContent=Math.round(e)+" m away · "+wi(t.pay),this.showObjective())}showTransit(t,e,i){if(!this.transit){const n=document.createElement("div");n.className="transit-hud glass",n.innerHTML=`<div class="tr-line" id="tr-line">MONORAIL</div><div class="tr-route" id="tr-route">Aurora Loop</div>
        <div class="tr-main"><b id="tr-speed">0</b><span>km/h</span></div>
        <div class="tr-mode" id="tr-mode">Automatic</div>
        <div class="tr-hint" id="tr-hint">E exit · T manual</div>`,this.el.hud.appendChild(n),this.transit=n,n.style.cssText="position:absolute;left:50%;bottom:26px;transform:translateX(-50%);padding:12px 22px;border-radius:14px;text-align:center;min-width:200px;"}this.transit.classList.remove("hidden"),Pt("tr-line").textContent=t,Pt("tr-route").textContent=e,Pt("tr-mode").textContent=i,i.includes("Manual")?Pt("tr-hint").textContent="W/S throttle · Space brake · T auto · E exit":Pt("tr-hint").textContent="E exit at station · T manual control",this.el.vehicleHud.classList.add("hidden")}updateTransitSpeed(t,e){this.transit&&(Pt("tr-speed").textContent=Math.round(Math.abs(t)*3.6),Pt("tr-mode").textContent=e)}updateTransitMode(t,e){this.transit&&(Pt("tr-mode").textContent=t,e&&(Pt("tr-hint").textContent=e))}hideTransit(){this.transit&&(this.transit.remove(),this.transit=null)}showModal({kicker:t="NOVA CITY",title:e="",body:i="",actions:n=[]}){this.openOverlay("modal"),this.el.modal.innerHTML=`<div class="kicker">${t}</div><h2>${e}</h2><div class="modal-body">${i}</div><div class="modal-actions" id="modal-actions"></div>`;const r=Pt("modal-actions");for(const a of n){const o=document.createElement("button");o.className="btn "+(a.primary?"primary":"ghost"),o.innerHTML=`<span>${a.label}</span>${a.sub?`<small>${a.sub}</small>`:""}`,o.addEventListener("click",()=>{a.onClick?.()}),r.appendChild(o)}this.overlay="modal"}showBusted(){this.toast("BUSTED — NCPD impounded your vehicle"),this.el.damageFlash.classList.add("on"),setTimeout(()=>this.el.damageFlash.classList.remove("on"),900)}setWeatherFx(t){this.el.weatherFx.className="weather-fx",(t==="rain"||t==="storm")&&this.el.weatherFx.classList.add("rain"),t==="snow"&&this.el.weatherFx.classList.add("snow")}damageFlash(){this.el.damageFlash.classList.add("on"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>this.el.damageFlash.classList.remove("on"),140)}}class Er{constructor(t,e,i){this.capacity=e,this.parts=[];const n=new Pe;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.alpha=new Float32Array(e),this.size=new Float32Array(e),n.setAttribute("position",new We(this.pos,3)),n.setAttribute("aColor",new We(this.col,3)),n.setAttribute("aAlpha",new We(this.alpha,1)),n.setAttribute("aSize",new We(this.size,1));const r=new Ui({transparent:!0,depthWrite:!1,blending:i?qi:yn,uniforms:{},vertexShader:`
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
        }`});this.points=new Qn(n,r),this.points.frustumCulled=!1,t.add(this.points);for(let a=0;a<e;a++)this.parts.push({alive:!1,life:0,maxLife:1,x:0,y:-999,z:0,vx:0,vy:0,vz:0,size:1,grow:0,color:new kt,gravity:0,drag:.98})}spawn(t,e,i,n={}){let r=this.parts.find(a=>!a.alive);return r||(r=this.parts[Math.random()*this.capacity|0]),r.alive=!0,r.x=t,r.y=e,r.z=i,r.vx=n.vx??Q(-.6,.6),r.vy=n.vy??Q(.6,2.2),r.vz=n.vz??Q(-.6,.6),r.life=r.maxLife=n.life??Q(.8,2.2),r.size=n.size??Q(1,3),r.grow=n.grow??1.2,r.gravity=n.gravity??0,r.drag=n.drag??.97,r.color.set(n.color??12105912),r}update(t){for(let i=0;i<this.capacity;i++){const n=this.parts[i];if(!n.alive){this.alpha[i]=0,this.pos[i*3+1]=-999;continue}if(n.life-=t,n.life<=0){n.alive=!1,this.alpha[i]=0,this.pos[i*3+1]=-999;continue}n.vy-=n.gravity*t,n.vx*=Math.pow(n.drag,t*60),n.vz*=Math.pow(n.drag,t*60),n.vy*=Math.pow(n.drag,t*60),n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.size+=n.grow*t,this.pos[i*3]=n.x,this.pos[i*3+1]=n.y,this.pos[i*3+2]=n.z,this.col[i*3]=n.color.r,this.col[i*3+1]=n.color.g,this.col[i*3+2]=n.color.b,this.alpha[i]=n.life/n.maxLife*ev(n),this.size[i]=n.size}const e=this.points.geometry;e.attributes.position.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0,e.attributes.aAlpha.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0}}function ev(s){return Math.min(1,s.maxLife>.5?.82:.95)}class iv{constructor(t){this.scene=t,this.smoke=new Er(t,420,!1),this.sparks=new Er(t,260,!0),this.fire=new Er(t,320,!0),this.rain=null,this.lightningTimer=8,this.flash=0,this.sirens=[],this.wakes=new Er(t,200,!1),this.wakes.points.material.blending=yn}spawnSmoke(t,e,i,n=1,r=9409176,a=2){for(let o=0;o<n;o++)this.smoke.spawn(t+Q(-.4,.4),e,i+Q(-.4,.4),{color:r,size:a+Q(0,1.4),grow:1.6,life:Q(1.4,3.4),vy:Q(.6,2),drag:.96})}smokeAtVehicle(t,e){if(t.smokeAcc===void 0&&(t.smokeAcc=0),t.smokeAcc+=e,t.health<55&&t.smokeAcc>.1){t.smokeAcc=0;const i=t.group.position;this.spawnSmoke(i.x,i.y+t.cfg.height*.7,i.z,1,t.health<25?2829099:10132122,t.health<25?3:1.8),t.health<20&&Math.random()<.3&&this.sparks.spawn(i.x,i.y+.8,i.z,{color:16743210,size:1.2,life:.5,vy:Q(.4,1.6),vx:Q(-1,1),vz:Q(-1,1),gravity:2})}}sparksAt(t,e,i,n=12,r=16757575){for(let a=0;a<n;a++)this.sparks.spawn(t,e,i,{color:r,size:Q(.5,1.4),life:Q(.25,.9),grow:-.2,vx:Q(-4,4),vy:Q(1,5),vz:Q(-4,4),gravity:9,drag:.98})}fireAt(t,e,i,n=1){this.fire.spawn(t+Q(-1,1)*n,e+Q(0,1.5)*n,i+Q(-1,1)*n,{color:Me([16743204,16757575,16730654,16765802]),size:Q(2,4)*n,grow:2.2,life:Q(.4,1.1),vy:Q(1.6,4.2),vx:Q(-.6,.6),vz:Q(-.6,.6),drag:.94}),Math.random()<.25&&this.spawnSmoke(t,e+3,i,1,3026478,4*n)}debris(t,e,i,n=10){for(let r=0;r<n;r++)this.sparks.spawn(t,e,i,{color:Me([5593951,9408917,4014662,10189906]),size:Q(.8,2.2),life:Q(.8,2),vx:Q(-5,5),vy:Q(2,7),vz:Q(-5,5),gravity:12,drag:.99})}explosion(t,e,i){this.sparksAt(t,e,i,60,16753979),this.sparksAt(t,e,i,30,16769674);for(let n=0;n<20;n++)this.spawnSmoke(t+Q(-2,2),e+1,i+Q(-2,2),1,2763306,5);for(let n=0;n<24;n++)this.fireAt(t,e,i,2);this.debris(t,e+1,i,20)}setWeather(t){if(this.rain&&(this.scene.remove(this.rain),this.rain.geometry.dispose(),this.rain=null),t==="rain"||t==="storm"){const i=new Pe,n=new Float32Array(1600*6);for(let a=0;a<1600;a++){const o=Q(-80,80),l=Q(0,65),c=Q(-80,80);n[a*6]=o,n[a*6+1]=l,n[a*6+2]=c,n[a*6+3]=o+.4,n[a*6+4]=l+2.4,n[a*6+5]=c}i.setAttribute("position",new We(n,3));const r=new Mh({color:12113134,transparent:!0,opacity:t==="storm"?.42:.28});this.rain=new Ed(i,r),this.rain.frustumCulled=!1,this.scene.add(this.rain)}else if(t==="snow"){const i=new Pe,n=new Float32Array(1800*3);for(let a=0;a<1800;a++)n[a*3]=Q(-70,70),n[a*3+1]=Q(0,55),n[a*3+2]=Q(-70,70);i.setAttribute("position",new We(n,3));const r=new Jn({color:16777215,size:.55,transparent:!0,opacity:.8,depthWrite:!1});this.rain=new Qn(i,r),this.rain.frustumCulled=!1,this.scene.add(this.rain)}this.weatherKind=t}update(t,e,i,n){if(this.smoke.update(t),this.sparks.update(t),this.fire.update(t),this.wakes.update(t),this.rain&&i){const r=this.rain.geometry.attributes.position,a=r.array,o=this.weatherKind==="rain"||this.weatherKind==="storm",l=this.weatherKind==="storm"?58:38,c=o?6:3;for(let h=0;h<a.length;h+=c)a[h+1]-=l*t,a[h+1]<-2&&(a[h]=i.x+Q(-65,65),a[h+2]=i.z+Q(-65,65),a[h+1]=55,o&&(a[h+3]=a[h]+.4,a[h+4]=a[h+1]+2.4,a[h+5]=a[h+2])),o&&(a[h+3]=a[h]+.4,a[h+4]=a[h+1]+2.4,a[h+5]=a[h+2]);this.rain.position.set(i.x,0,i.z),r.needsUpdate=!0}n==="storm"&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=Q(6,18),this.flash=1),this.flash>0&&(this.flash-=t*3.5))}}class nv{constructor(){this.ctx=null,this.enabled=!0,this.engine=null,this.engineTarget=0,this.siren=null,this.rainGain=null,this.ambienceGain=null,this.master=null,this.t=0,this.lastHorn=0,this.ready=!1}ensure(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=18,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),this.noise=this.makeNoise(2.4),this.buildAmbience(),this.buildEngine(),this.buildSiren(),this.ready=!0}catch{this.enabled=!1}}makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);let r=0;for(let a=0;a<e;a++){const o=Math.random()*2-1;r=(r+.02*o)/1.02,n[a]=r*3.2}return i}loopNoise(t,e,i,n){const r=this.ctx.createBufferSource();r.buffer=this.noise,r.loop=!0;const a=this.ctx.createBiquadFilter();a.type=t,a.frequency.value=e,a.Q.value=i;const o=this.ctx.createGain();return o.gain.value=n,r.connect(a),a.connect(o),o.connect(this.master),r.start(),{src:r,filter:a,gain:o}}buildAmbience(){this.cityHum=this.loopNoise("lowpass",320,.8,.055),this.wind=this.loopNoise("bandpass",900,.5,.018),this.rain=this.loopNoise("highpass",2200,.3,0),this.rainGain=this.rain.gain;const t=this.ctx.createOscillator();t.type="sine",t.frequency.value=52;const e=this.ctx.createGain();e.gain.value=.012,t.connect(e),e.connect(this.master),t.start(),this.drone=e}buildEngine(){const t=this.ctx,e=t.createGain();e.gain.value=0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=620,i.Q.value=.8;const n=t.createOscillator();n.type="sawtooth",n.frequency.value=70;const r=t.createOscillator();r.type="square",r.frequency.value=35;const a=t.createGain();a.gain.value=.35,r.connect(a),a.connect(i),n.connect(i),i.connect(e),e.connect(this.master),n.start(),r.start(),this.engine={out:e,lp:i,o1:n,o2:r,active:!1}}buildSiren(){const t=this.ctx,e=t.createGain();e.gain.value=0;const i=t.createOscillator();i.type="triangle",i.frequency.value=700;const n=t.createOscillator();n.type="sine",n.frequency.value=1050;const r=t.createGain();r.gain.value=.3,i.connect(e),n.connect(r),r.connect(e),e.connect(this.master),i.start(),n.start(),this.siren={out:e,o:i,o2:n,gain:0,target:0}}resume(){this.ensure(),this.ctx?.state==="suspended"&&this.ctx.resume()}setVolume(t){this.master&&this.master.gain.setTargetAtTime(t*.6,this.ctx.currentTime,.1)}startEngine(t){this.ensure(),this.engine&&(this.engine.active=!0,this.engine.type=t.type,this.engine.out.gain.setTargetAtTime(.055,this.ctx.currentTime,.15))}stopEngine(){this.engine&&(this.engine.active=!1,this.engine.out.gain.setTargetAtTime(0,this.ctx.currentTime,.2))}update(t,e,i,n){if(!this.ready||!this.ctx)return;this.t+=t;const r=this.ctx.currentTime;if(this.engine.active&&e){const o=Math.abs(e.speed||0),l=e.cfg.maxSpeed||50,c=.14+o/l*.86,h=e.throttle||0,u=(e.type==="bus"||e.type==="truck"?38:58)+c*(e.type==="super"?220:130)+h*22;this.engine.o1.frequency.setTargetAtTime(u,r,.05),this.engine.o2.frequency.setTargetAtTime(u*.5,r,.05),this.engine.lp.frequency.setTargetAtTime(400+c*1800+h*500,r,.08),this.engine.out.gain.setTargetAtTime(e.isAir?.08:.045+h*.035+c*.02,r,.1),e.isAir&&(this.engine.o1.type="sawtooth",this.engine.o1.frequency.setTargetAtTime(90+Math.sin(this.t*38)*20,r,.03))}if(this.siren){if(n<130){const o=Math.max(0,1-n/130)*.085;this.siren.target=o;const l=Math.sin(this.t*4.6)*.5+.5;this.siren.o.frequency.setTargetAtTime(600+l*550,r,.06),this.siren.o2.frequency.setTargetAtTime(900+l*700,r,.08)}else this.siren.target=0;this.siren.out.gain.setTargetAtTime(this.siren.target,r,.2)}const a=i==="rain"?.045:i==="storm"?.1:i==="snow"?.015:0;this.rainGain?.gain.setTargetAtTime(a,r,1.2),this.cityHum?.gain.gain.setTargetAtTime(this.nightMode?.035:.06,r,.5),this.wind?.gain.gain.setTargetAtTime(this.nightMode?.014:.022,r,2),this.drone&&this.drone.gain.setTargetAtTime(this.nightMode?.018:.01,r,1)}beep(t=660,e=.08,i="sine",n=.08){if(!this.ready)return;const r=this.ctx,a=r.currentTime,o=r.createOscillator();o.type=i,o.frequency.value=t;const l=r.createGain();l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+e+.02)}horn(){if(!this.ready)return;const t=performance.now();if(t-this.lastHorn<280)return;this.lastHorn=t;const e=this.ctx,i=e.currentTime;for(const n of[330,415]){const r=e.createOscillator();r.type="sawtooth",r.frequency.value=n;const a=e.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.045,i+.02),a.gain.setValueAtTime(.045,i+.24),a.gain.exponentialRampToValueAtTime(1e-4,i+.36),r.connect(a),a.connect(this.master),r.start(i),r.stop(i+.4)}}click(){this.beep(520,.04,"sine",.04)}jump(){this.beep(220,.12,"sine",.03)}footstep(t){if(!this.ready)return;const e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.noise;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=t?900:600;const a=e.createGain();a.gain.setValueAtTime(t?.035:.022,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.12),n.connect(r),r.connect(a),a.connect(this.master),n.start(i),n.stop(i+.14)}crash(t=5){if(!this.ready)return;const e=this.ctx,i=e.currentTime,n=e.createBufferSource();n.buffer=this.noise;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=500+Math.min(1800,t*80),r.Q.value=.7;const a=e.createGain(),o=Math.min(.22,.03+t*.012);a.gain.setValueAtTime(o,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.3),n.connect(r),r.connect(a),a.connect(this.master),n.start(i),n.stop(i+.32),this.beep(70,.2,"sine",Math.min(.12,o))}thunder(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,i=t.createBufferSource();i.buffer=this.noise;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=180;const r=t.createGain();r.gain.setValueAtTime(.28,e),r.gain.exponentialRampToValueAtTime(1e-4,e+2.4),i.connect(n),n.connect(r),r.connect(this.master),i.start(e),i.stop(e+2.5)}chime(){this.beep(880,.14,"sine",.06),setTimeout(()=>this.beep(1180,.25,"sine",.05),130)}sirenOff(){}}class sv{constructor(t){this.game=t,this.heat=0,this.level=0,this.lastCrime=-999,this.lastKnown=new P,this.reports=0,this.witnesses=0,this.searchTimer=0,this.lastDispatchLevel=0,this.alerted=!1}commit(t,e,i=!0){this.heat+=t*(i?1:.45),this.lastCrime=this.game.clock,this.lastKnown.copy(e),i&&this.witnesses++,this.reports++;const n=this.levelFor(this.heat);n>this.level?(this.level=n,this.game.notify(`WANTED LEVEL ${n} — ${this.levelDesc(n)}`,"bad"),this.game.audio?.beep(220,.12,"square",.06),n>=1&&this.game.emergency.dispatchPolice(e,Math.min(4,n),n)):this.level=n,this.alerted=!0,this.game.ui?.updateWanted()}levelFor(t){return t>=8.5?5:t>=6?4:t>=4?3:t>=2.4?2:t>=1?1:0}levelDesc(t){return["","Patrol attention","Units responding","Search perimeter","Tactical response","Citywide alert"][t]||""}reportPosition(t){this.lastKnown.copy(t)}update(t){const e=this.game.clock-this.lastCrime;if(this.level>0&&(this.game.emergency.isPoliceNear(this.game.player.pos,45)?(this.lastKnown.copy(this.game.player.pos),this.alerted=!0):e>8&&(this.alerted=!1),e>18&&!this.alerted)){this.heat=Math.max(0,this.heat-t*.55);const i=this.levelFor(this.heat);i<this.level&&(this.level=i,this.game.ui?.updateWanted(),this.game.notify(i===0?"You lost the police":`Wanted reduced to level ${i}`,i===0?"good":"warn"))}this.searchTimer-=t,this.level>0&&this.searchTimer<=0&&(this.searchTimer=12,this.game.emergency.dispatchPolice(this.lastKnown,this.level>=3?2:1,this.level))}clear(){this.heat=0,this.level=0,this.alerted=!1,this.game.ui?.updateWanted()}}class rv{constructor(t){this.game=t,this.units=[],this.patrolUnits=[],this.extraUnits=[],this.spawnTimer=0,this.initPatrols()}initPatrols(){const t=this.game.vehicles.vehicles.filter(e=>e.service==="police");for(const e of t)this.units.push({vehicle:e,type:"police",state:"patrol",path:[],target:new P,speed:0,siren:!1,timer:0,onScene:0,home:new P(e.pos.x,0,e.pos.z)}),e.mode="service",e.lightsOn=!0,this.patrolUnits.push(e)}aStar(t,e){const i=c=>c.i*9+c.j,n=[t],r=new Map,a=new Map;a.set(i(t),0);const o=new Map;o.set(i(t),0);const l=new Set;for(;n.length;){n.sort((h,u)=>(o.get(i(h))??1e9)-(o.get(i(u))??1e9));const c=n.shift();if(c===e){const h=[c];let u=c;for(;r.has(i(u));)u=r.get(i(u)),h.unshift(u);return h}l.add(i(c));for(const[h,u]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=c.i+h,d=c.j+u;if(f<0||f>8||d<0||d>8)continue;const p=this.game.city.nodeGrid[f][d],x=i(p);if(l.has(x))continue;const m=(a.get(i(c))??1e9)+96;m<(a.get(x)??1e9)&&(r.set(x,c),a.set(x,m),o.set(x,m+Math.hypot(p.x-e.x,p.z-e.z)),n.includes(p)||n.push(p))}}return[t,e]}setDestination(t,e){const i=this.game.city.nearestNode(t.vehicle.pos.x,t.vehicle.pos.z),n=this.game.city.nearestNode(e.x,e.z);t.path=this.aStar(i,n).slice(1).map(r=>new P(r.x,0,r.z)),t.finalTarget=new P(e.x,0,e.z),t.target.copy(t.path[0]||t.finalTarget),t.state="responding",t.siren=!0,t.vehicle.lightsOn=!0}findFreeUnit(t){for(const e of this.units)if(e.vehicle.service===t&&!e.vehicle.isPlayer&&(e.state==="idle"||e.state==="patrol"))return e;return null}dispatchPolice(t,e,i=1){let n=0;for(const r of this.units)if(!(r.vehicle.service!=="police"||r.vehicle.isPlayer)&&!(r.state==="chase"||r.state==="responding")){if(n>=e)break;this.setDestination(r,t),r.level=i,n++}for(;n<e;){const r=this.game.city.pois.find(l=>l.type==="police"),a=this.game.vehicles.spawn("police",r.x+10+Math.random()*8,r.z+24,Q(0,pe),{service:"police"});a.mode="service";const o={vehicle:a,type:"police",state:"responding",path:[],target:new P,speed:0,siren:!0,timer:0,onScene:0,home:new P(a.pos.x,0,a.pos.z),level:i};this.units.push(o),this.extraUnits.push(a),this.setDestination(o,t),n++}this.game.notify("Dispatch: NCPD units en route","warn")}dispatchMedical(t){const e=this.units.find(i=>i.vehicle.service==="ambulance")||this.makeAmbulanceUnit();this.setDestination(e,t),this.game.notify("Dispatch: ambulance responding to incident","warn")}dispatchFire(t){const e=this.units.find(i=>i.vehicle.service==="fire")||null;e&&(this.setDestination(e,t),this.game.notify("Dispatch: fire engine responding","warn"))}makeAmbulanceUnit(){const t=this.game.city.pois.find(n=>n.type==="hospital"),e=this.game.vehicles.spawn("ambulance",t.x+30,t.z+20,0,{service:"ambulance"});e.mode="service";const i={vehicle:e,type:"ambulance",state:"idle",path:[],target:new P,speed:0,siren:!1,timer:0,onScene:0,home:new P(e.pos.x,0,e.pos.z)};return this.units.push(i),i}isPoliceNear(t,e){for(const i of this.units)if(i.vehicle.service==="police"&&Math.hypot(i.vehicle.pos.x-t.x,i.vehicle.pos.z-t.z)<e)return!0;return!1}nearestSirenDistance(t){let e=1e9;for(const i of this.units){if(!i.siren)continue;const n=Math.hypot(i.vehicle.pos.x-t.x,i.vehicle.pos.z-t.z);n<e&&(e=n)}return e}updateUnitDriving(t,e,i){const n=t.vehicle;if(n.isPlayer||n.mode==="player")return;let r=t.target;const a=this.game.wanted.level;if(t.type==="police"&&a>0){const h=Math.hypot(n.pos.x-this.game.player.pos.x,n.pos.z-this.game.player.pos.z);h<48&&!this.game.player.vehicle?(r=this.game.player.pos,t.state="chase",t.path=[]):t.state==="chase"&&h>80&&(t.state="responding",t.target.set(this.game.wanted.lastKnown.x,0,this.game.wanted.lastKnown.z))}t.path&&t.path.length&&(r=t.path[0],Math.hypot(r.x-n.pos.x,r.z-n.pos.z)<7&&(t.path.shift(),t.path.length&&(r=t.path[0])));const o=r.x-n.pos.x,l=r.z-n.pos.z;if(Math.hypot(o,l)<5&&!t.path?.length)t.state!=="onScene"&&(t.state="onScene",t.onScene=t.type==="fire"?8:5),t.speed=Math.max(0,t.speed-e*10);else{let u=((Math.atan2(o,l)-n.heading+Math.PI)%pe+pe)%pe-Math.PI;n.heading+=Ht(u,-e*2.1,e*2.1);const f=t.type==="fire"?15:21,d=t.state==="onScene"?0:f;t.speed=Re(t.speed,d,e*1.2);const p=Math.sin(n.heading),x=Math.cos(n.heading);n.pos.x+=p*t.speed*e,n.pos.z+=x*t.speed*e;const m=this.game.city.collideCircle(n.pos.x,n.pos.z,n.cfg.wid*.5);m&&(n.pos.x+=m.nx*m.pen,n.pos.z+=m.nz*m.pen,t.speed*=.4)}if(n.group.rotation.y=n.heading,n.speed=t.speed,n.speedKmh=t.speed*3.6,n.brakeOn=t.speed<.5,n.animateWheels(e),n.animateLights(i,this.game.night,{}),t.type==="fire"&&t.state==="onScene"){const h=this.game.events.fires.find(u=>!u.done);if(h&&(t.onScene-=e,t.onScene<=0&&this.game.events.extinguish(h),Math.random()<.5))for(let u=0;u<3;u++)this.game.effects.sparksAt(h.pos.x+Q(-2,2),h.pos.y+Q(.5,3),h.pos.z+Q(-2,2),1,11459839)}t.type==="ambulance"&&t.state==="onScene"&&(t.onScene-=e,t.onScene<=0&&this.game.events.resolveAccident()),t.type==="police"&&this.game.wanted.level>0&&Math.hypot(n.pos.x-this.game.player.pos.x,n.pos.z-this.game.player.pos.z)<4.4&&this.game.player.vehicle===null&&this.game.busted()}update(t,e){for(const i of this.units){if(i.vehicle.isPlayer){i.vehicle.mode="player",i.state="stolen";continue}if(i.state==="patrol"){if(!i.path||!i.path.length){const n=this.game.city.nodes[Math.floor(Math.random()*this.game.city.nodes.length)];i.path=[new P(n.x,0,n.z)],i.target.copy(i.path[0]),i.siren=!1}this.updateUnitDriving(i,t,e),!i.path?.length&&i.state!=="onScene"&&(i.state="patrol",i.path=[]);continue}if(i.state==="idle"){i.vehicle.brakeOn=!0;continue}if(i.state==="onScene"){i.siren=i.type==="police"&&this.game.wanted.level>0,this.updateUnitDriving(i,t,e),i.type==="police"&&(i.onScene-=t,i.onScene<=0&&this.game.wanted.level===0&&(i.state="return",this.setDestination(i,i.home)));continue}if(i.state==="return"){this.updateUnitDriving(i,t,e),i.path&&i.path.length===0&&(i.state="idle",i.siren=!1,i.speed=0);continue}this.updateUnitDriving(i,t,e)}if(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=5,this.game.wanted.level===0))for(let i=this.extraUnits.length-1;i>=0;i--){const n=this.extraUnits[i],r=this.units.find(o=>o.vehicle===n);if(!r)continue;const a=Math.hypot(n.pos.x-r.home.x,n.pos.z-r.home.z);(r.state==="idle"||a<12)&&(this.game.scene.remove(n.group),n.disposed=!0,this.game.vehicles.vehicles=this.game.vehicles.vehicles.filter(o=>o!==n),this.units=this.units.filter(o=>o!==r),this.extraUnits.splice(i,1))}}}class av{constructor(t){this.game=t,this.events=[],this.markers=new $t,t.scene.add(this.markers),this.fires=[],this.roadblocks=[],this.timer=35,this.nextId=1,this.accidentCars=[],this.scorchMat=new ce({color:657414,transparent:!0,opacity:.55})}startRandom(){const t=["accident","fire","construction","festival","power","lost","trainDelay"],e=[3,3,2,2,1.2,1.4,1.2];let i=Math.random()*e.reduce((r,a)=>r+a,0),n="accident";for(let r=0;r<t.length;r++)if(i-=e[r],i<=0){n=t[r];break}this.start(n)}start(t,e={}){if(this.events.filter(r=>r.active).length>3)return null;const n={id:this.nextId++,type:t,active:!0,age:0,duration:50,pos:new P,title:"",beacon:null,...e};switch(t){case"fire":return this.startFire(n);case"accident":return this.startAccident(n);case"construction":return this.startConstruction(n);case"festival":return this.startFestival(n);case"power":return this.startPowerOutage(n);case"lost":return this.startLostPedestrian(n);case"trainDelay":return this.game.notify("Transit alert: monorail delays on the East Gate loop","warn"),this.game.audio?.chime(),null;case"stormDamage":return this.startStormDamage(n);default:return null}}makeBeacon(t,e){const i=$h(e);return i.position.copy(t),i.position.y=.1,this.markers.add(i),i}addEvent(t){return t.beacon=this.makeBeacon(t.pos,t.type==="fire"?16735018:t.type==="festival"?11635967:t.type==="lost"?6549680:16757847),this.events.push(t),t}startFire(t){const e=this.game.city.blocks.filter(r=>!r.isPark&&r.district!=="suburb"),i=Me(e);t.pos.set(i.x+Q(-20,20),.4,i.z+Q(-20,20)),t.title="Structure fire",t.duration=130;const n={pos:t.pos.clone(),scale:1,done:!1,ev:t,light:null};return n.light=new ks(16738850,6,50,2),n.light.position.copy(t.pos).add(new P(0,4,0)),this.game.scene.add(n.light),this.fires.push(n),t.fire=n,this.game.effects.explosion(t.pos.x,t.pos.y+1,t.pos.z),this.game.emergency.dispatchFire(t.pos),this.game.emergency.dispatchPolice(t.pos,1,1),this.game.notify("🔥 Structure fire reported — fire crews dispatched","bad"),this.game.npcs.panic(t.pos.x,t.pos.z,45),this.addEvent(t),t}extinguish(t){t.done||(t.done=!0,t.ev.active=!1,t.light&&this.game.scene.remove(t.light),this.game.effects.spawnSmoke(t.pos.x,t.pos.y+2,t.pos.z,18,14211288,4),this.game.notify("Fire extinguished — crews packing up","good"),this.game.events.cleanup(t.ev))}startAccident(t){const e=Me(this.game.city.nodes);t.pos.set(e.x+Q(-8,8),.2,e.z+Q(-8,8)),t.title="Traffic collision",t.duration=45;const i=this.game.vehicles.vehicles.filter(r=>r.mode==="traffic"),n=[];for(let r=0;r<2&&i.length;r++){const a=i.splice(Math.floor(Math.random()*i.length),1)[0];a.pos.set(t.pos.x+Q(-2,2),.02,t.pos.z+Q(-2,2)),a.heading=Q(0,pe),a.speed=0,a.health=12,a.traffic.cruise=0,a.mode="parked",a.brakeOn=!0,this.game.effects.sparksAt(a.pos.x,a.pos.y+.8,a.pos.z,18),this.game.effects.debris(a.pos.x,a.pos.y+.6,a.pos.z,10),n.push(a)}return t.wreck=n,this.accidentCars=n,this.game.emergency.dispatchMedical(t.pos),this.game.emergency.dispatchPolice(t.pos,1,1),this.game.npcs.gather(t.pos.x,t.pos.z,24),this.game.npcs.panic(t.pos.x,t.pos.z,30),this.game.notify("Traffic collision reported — emergency services en route","warn"),this.addEvent(t),t}resolveAccident(){const t=this.events.find(e=>e.type==="accident"&&e.active);if(t){for(const e of this.accidentCars||[])e&&(this.game.scene.remove(e.group),this.game.vehicles.vehicles=this.game.vehicles.vehicles.filter(i=>i!==e));this.accidentCars=[],t.active=!1,this.game.notify("Collision cleared — traffic resuming","good"),this.cleanup(t)}}startConstruction(t){const e=Me(this.game.city.nodes),i=Math.random()>.5;t.pos.set(i?e.x:e.x+10,.3,i?e.z+10:e.z),t.title="Road works",t.duration=55;const n=new $t,r=new q({color:15231518,roughness:.7}),a=new q({color:15920864,roughness:.7});for(let o=0;o<6;o++){const l=new k(new un(.22,.7,8),r);l.position.set(Q(-4,4),.4,Q(-8,8)),n.add(l)}for(let o=0;o<3;o++){const l=new k(new Z(2.4,.25,.4),r);l.position.set(Q(-3,3),1,-4+o*4),n.add(l);const c=new k(new Z(.1,1,.4),a);c.position.set(l.position.x,.5,l.position.z),n.add(c)}return n.position.copy(t.pos),this.game.scene.add(n),t.group=n,this.roadblocks.push({x:t.pos.x,z:t.pos.z,r:18}),this.game.npcs.panic(t.pos.x,t.pos.z,12),this.game.notify("Road works ahead — expect delays","warn"),this.addEvent(t),t}startFestival(t){const e=this.game.city.blocks.find(r=>r.isPark);t.pos.set(e.x+15,.4,e.z+15),t.title="Aurora Park street festival",t.duration=80,this.game.npcs.gather(t.pos.x,t.pos.z,45);const i=new $t,n=[16735098,6021375,16757847,10185727];for(let r=0;r<7;r++){const a=new ks(n[r%4],4,28,2);a.position.set(t.pos.x+Q(-12,12),5,t.pos.z+Q(-12,12)),i.add(a);const o=new k(new Xe(.18,8,6),new ce({color:n[r%4],toneMapped:!1}));o.position.copy(a.position),i.add(o)}return this.game.scene.add(i),t.group=i,this.game.notify("Aurora Park festival is underway — crowds gathering","good"),this.game.audio?.chime(),this.addEvent(t),t}startPowerOutage(t){return t.pos.set(0,0,0),t.title="Downtown power outage",t.duration=35,this.game.powerOutage=!0,this.game.notify("⚠ Grid failure — downtown lights offline","warn"),this.game.emergency.dispatchPolice(new P(0,0,0),1,1),this.addEvent(t),t}startLostPedestrian(t){const e=Me(this.game.npcs.peds);return t.pos.set(e.x,.2,e.z),t.title="Lost visitor needs directions",t.duration=90,t.ped=e,e.lost=!0,this.game.notify("A visitor near you looks lost","warn"),this.addEvent(t),t}startStormDamage(t){const e=Q(-300,300),i=Q(-300,300);t.pos.set(e,.3,i),t.title="Storm debris",t.duration=60;const n=new k(new le(.35,.45,7,6),new q({color:4863781,roughness:1}));n.rotation.z=Math.PI/2,n.position.set(e,.6,i),this.game.scene.add(n);const r=new k(new Gs(3,0),new q({color:3099174,roughness:1}));return r.position.set(e+2,1.2,i+1),this.game.scene.add(r),t.group=new $t,t.group.add(n,r),this.roadblocks.push({x:e,z:i,r:12}),this.addEvent(t),t}cleanup(t){t.beacon&&this.markers.remove(t.beacon),t.active=!1,t.group&&(t.type==="power"&&(this.game.powerOutage=!1),this.game.scene.remove(t.group)),this.roadblocks=this.roadblocks.filter(e=>!(Math.abs(e.x-t.pos.x)<.1&&Math.abs(e.z-t.pos.z)<.1)),t.ped&&(t.ped.lost=!1),t.type==="power"&&(this.game.powerOutage=!1)}update(t,e){this.timer-=t,this.timer<=0&&(this.timer=Q(50,95),this.startRandom());for(const i of this.events)i.active&&(i.age+=t,i.beacon&&Zh(i.beacon,t),i.type==="fire"&&i.fire&&!i.fire.done&&(Math.random()<.8&&this.game.effects.fireAt(i.pos.x+Q(-2,2),i.pos.y+Q(0,2),i.pos.z+Q(-2,2),i.fire.scale+Math.random()*.6),i.fire.light.intensity=4+Math.sin(e*9)*1.4+Math.random(),i.age>110&&this.extinguish(i.fire)),i.type==="festival"&&i.group&&(i.group.rotation.y=Math.sin(e*.3)*.02),i.type==="lost"&&i.ped&&(i.pos.set(i.ped.x,.2,i.ped.z),i.beacon&&i.beacon.position.copy(i.pos).setY(.1)),i.age>i.duration&&(i.type==="fire"&&i.fire&&!i.fire.done?i.duration+=20:(i.type==="power"&&(this.game.powerOutage=!1,this.game.notify("Power restored downtown","good")),this.cleanup(i))));this.events=this.events.filter(i=>i.active||i.age<i.duration+5),this.roadblocks=this.roadblocks.filter(i=>!0)}isRoadBlocked(t,e){for(const i of this.roadblocks)if(Math.hypot(t-i.x,e-i.z)<i.r)return!0;return!1}mapMarkers(){return this.events.filter(t=>t.active).map(t=>({x:t.pos.x,z:t.pos.z,type:t.type,title:t.title}))}}const Gc={apartment:{name:"The Hale Apartments",wall:7234135,floor:6114364,accent:9136973,light:16766888},shop:{name:"Corner Market",wall:7109232,floor:9080200,accent:4160090,light:15922408},police:{name:"NCPD Central Precinct",wall:4608093,floor:6054246,accent:2841498,light:14674431},hospital:{name:"Nova General Hospital",wall:9280164,floor:11120820,accent:5214115,light:15398655},fire:{name:"Nova Fire Station 3",wall:7097155,floor:6248016,accent:11022382,light:16769472},garage:{name:"Apex Auto Garage",wall:5067607,floor:3882818,accent:13208110,light:16769200},dealership:{name:"Nova Motors",wall:5267567,floor:7634051,accent:4034495,light:15398143},hotel:{name:"Hotel Aurora Lobby",wall:7101782,floor:5915704,accent:12160334,light:16768174},office:{name:"Meridian Tower Lobby",wall:5858414,floor:10132636,accent:4026258,light:15003903}};class ov{constructor(t){this.game=t,this.rooms=new Map,this.current=null,this.returnPos=new P,this.built=!1}build(){if(this.built)return;this.built=!0;let t=0;for(const e of Object.keys(Gc))this.rooms.set(e,this.buildRoom(e,t++))}buildRoom(t,e){const i=Gc[t],n=-1800-e*70,r=24,a=17,o=4.4,l=new $t;l.position.set(n,0,0),this.game.scene.add(l);const c=new q({color:i.wall,roughness:.9}),h=new q({color:i.floor,roughness:.5,metalness:.1}),u=new q({color:i.accent,roughness:.55,metalness:.15}),f=new q({color:2830389,roughness:.8}),d=new q({color:15001572,roughness:.7}),p=new q({color:7229236,roughness:.85}),x=(M,T,E,v,b,D=0)=>{const R=new k(M,T);return R.position.set(E,v,b),R.rotation.y=D,R.castShadow=!0,R.receiveShadow=!0,l.add(R),R},m=new k(new oe(r,a),h);m.rotation.x=-Math.PI/2,m.position.y=.03,m.receiveShadow=!0,l.add(m),x(new Z(r,.25,a),new q({color:2895665,roughness:.95}),0,o,0),x(new Z(r,o,.35),c,0,o/2,-a/2),x(new Z(.35,o,a),c,-r/2,o/2,0),x(new Z(.35,o,a),c,r/2,o/2,0),x(new Z(6.2,o,.35),c,-r/2+3.1,o/2,a/2),x(new Z(6.2,o,.35),c,r/2-3.1,o/2,a/2),x(new Z(2.4,o-2.5,.35),c,0,o-(o-2.5)/2,a/2),x(new Z(2.8,.16,.4),u,0,2.55,a/2);for(const M of[-1,1])x(new Z(.12,2.7,.4),u,M*1.3,1.35,a/2);x(new oe(5,3),new q({color:4015180,roughness:.95}),0,.05,a/2-4);for(const M of[-6,6]){const T=new ks(i.light,34,24,2);T.position.set(M,o-.5,0),l.add(T);const E=new k(new le(.3,.45,.12,14),new ce({color:i.light}));E.position.set(M,o-.2,0),l.add(E)}const g=new ks(i.light,20,22,2);g.position.set(0,o-.7,4),l.add(g);const _={type:t,name:i.name,group:l,x:n,z:0,W:r,D:a,H:o,interactions:[]},y=(M,T,E,v,b)=>_.interactions.push({x:n+T,z:E,label:v,action:b,radius:2.6});if(t==="apartment")x(new Z(5.5,1.1,7),p,-7.5,.55,-3.8),x(new Z(5.2,.6,1.8),new q({color:14867922,roughness:.9}),-7.5,.95,-5.2),x(new Z(5.2,.55,1.8),u,-7.5,.75,-2.4),x(new Z(3.6,1.4,1.8),new q({color:4016728,roughness:.9}),5.5,.7,3),x(new Z(.12,2.2,4.2),new ce({color:1054752}),7.4,2.3,1.5),x(new Z(3,1.1,1.2),p,-2.5,.55,5.3),x(new le(.35,.35,1.1,10),d,2.4,.55,-6.6),x(new Z(1.3,1.4,.7),f,2.4,1.65,-6.6),y("sofa",5.5,3,"Rest at home","rest"),y("kitchen",2.4,-6.6,"Make coffee","coffee");else if(t==="shop"){for(let M=0;M<4;M++)x(new Z(1,2.5,8),new q({color:5989728,roughness:.7}),-8+M*2,1.25,-2);for(let M=0;M<4;M++)for(let T=0;T<6;T++){const E=[14048074,14727244,6004333,4882350,13793850][(M+T)%5];x(new Z(.5,.4,.5),new q({color:E,roughness:.6}),-8+M*2+Q(-.3,.3),.55+T%3*.8,-5.2+T*1.3)}x(new Z(8,1,1.5),d,3.5,.5,5.2),x(new Z(8.2,.16,1.7),u,3.5,1.05,5.2),this.makeClerk(l,3.5,6.6,Math.PI,3366730),y("counter",3.5,4.2,"Browse the market","shop")}else if(t==="police"){for(let M=0;M<3;M++)x(new Z(4,.16,1.8),p,-6+M*4.5,1,0),x(new Z(.2,1,1.4),f,-6+M*4.5,.5,0),x(new Z(1.4,.6,.7),f,-6+M*4.5,1.35,-.2);x(new Z(6,1.1,1.4),d,3,.55,-6.8),x(new Z(6.2,.14,1.5),u,3,1.12,-6.8),x(new is(1.2,24),new ce({color:2841498}),3,3,-8.28),this.makeClerk(l,3,-7.9,0,2504778),y("desk",3,-5.8,"Talk to the desk sergeant","policeDesk")}else if(t==="hospital"){for(let M=0;M<3;M++)x(new Z(2.4,.7,5),d,-6+M*4,.5,-2),x(new Z(2.1,.25,1.1),new q({color:10469576,roughness:.8}),-6+M*4,1,-3.2);x(new Z(6,1.1,1.3),u,5,.55,-5.8),this.makeClerk(l,5,-6.7,0,2976634),y("reception",5,-4.8,"Ask for medical treatment","heal")}else if(t==="fire"){x(new Z(10,1.2,3.4),u,-3,.6,-2);for(let M=0;M<3;M++)x(new Z(.5,2,.4),f,-7+M*2.5,2.2,-6.4),x(new Z(.6,.8,.3),new q({color:13214794,roughness:.5,metalness:.4}),-7+M*2.5,1.6,-6.2);this.makeClerk(l,4,-6.6,0,8073002),y("gear",4,-5,"Check fire equipment","fireInfo")}else if(t==="garage"){x(new Z(10,.3,6),new q({color:2895923,roughness:.9}),0,.4,0),x(new Z(10,.2,.4),new ce({color:14723367}),0,.56,3.1),x(new Z(1.2,3.2,1.2),u,-8,1.6,-6);for(let T=0;T<4;T++)x(new Z(.8,.5,.8),f,7.5,1.8+T*.6,-5+T*1.2);const M=Dr("sports",12729147).group;M.position.set(-1,.55,0),M.scale.setScalar(1),l.add(M),y("bench",3,4.2,"Repair & refuel your vehicle","garage")}else if(t==="dealership"){x(new Z(14,.2,8),new q({color:12568265,roughness:.15,metalness:.4}),-2,.2,0);const M=Dr("super",14729548).group;M.position.set(-6,.35,-1),M.rotation.y=.4,l.add(M);const T=Dr("sports",2908047).group;T.position.set(-1,.35,1),T.rotation.y=-.3,l.add(T),x(new Z(6,1,1.4),u,5,.5,-6.4),this.makeClerk(l,5,-7.2,0,3103350),y("sales",5,-5.4,"Browse vehicles for sale","dealership")}else if(t==="hotel"){x(new Z(8,1.1,1.5),p,0,.55,-5.8),x(new Z(8.2,.16,1.7),u,0,1.12,-5.8);for(let M=0;M<3;M++)x(new Z(1.6,.6,1.6),new q({color:4082262,roughness:.9}),-5+M*5,.6,3.8);this.makeClerk(l,0,-6.6,0,5980470),y("front desk",0,-4.8,"Rent a room for the night","hotel")}else if(t==="office"){for(let M=0;M<4;M++)x(new Z(3,.12,1.4),d,-7+M*4,1,-3),x(new Z(.2,1,1.2),f,-7+M*4,.5,-3),x(new Z(1.2,.7,.1),new ce({color:9425128}),-7+M*4,1.5,-3);x(new Z(5,1.1,1.3),u,5,.55,5.4),this.makeClerk(l,5,6.4,Math.PI,2900822),y("reception",5,4.2,"Ask about office jobs","office")}return y("exit",0,a/2-1.2,"Leave building","exit"),_}makeClerk(t,e,i,n,r){const a=new $t,o=new q({color:12618339,roughness:.7}),l=new q({color:r,roughness:.85}),c=new q({color:2304046,roughness:.9}),h=new k(new ln(.22,.5,4,8),l);h.position.y=1.08,a.add(h);const u=new k(new Xe(.17,10,8),o);u.position.y=1.6,a.add(u);const f=new k(new Xe(.175,8,6,0,pe,0,Math.PI*.55),new q({color:2826523,roughness:.9}));f.position.y=1.62,a.add(f);for(const p of[-1,1]){const x=new k(new ln(.065,.42,3,6),l);x.position.set(p*.28,1.08,0),a.add(x);const m=new k(new ln(.08,.5,3,6),c);m.position.set(p*.12,.5,0),a.add(m)}const d=new k(new is(.9,20),new ce({color:0,transparent:!0,opacity:.18,depthWrite:!1}));return d.rotation.x=-Math.PI/2,d.position.y=.02,a.add(d),a.position.set(e,0,i),a.rotation.y=n,t.add(a),a.userData.baseY=0,this.clerks||(this.clerks=[]),this.clerks.push({group:a,phase:Q(0,pe)}),a}enter(t,e){this.build();const i=this.rooms.get(t)||this.rooms.get("apartment");i&&(this.current=i,this.returnPos.copy(e),this.game.mode="interior",this.game.player.interior=i,this.game.player.cameraDist=3.8,this.game.player.cameraPitch=.03,this.game.player.setPosition(i.x,i.z+i.D/2-5.2,.2),this.game.player.heading=Math.PI,this.game.player.cameraYaw=Math.PI,this.game.vehicles.playerVehicle&&this.game.exitVehicle(!0),this.game.audio?.chime(),this.game.notify(`Entered ${i.name}`,"good"))}exit(){this.current&&(this.current,this.current=null,this.game.player.interior=null,this.game.player.setPosition(this.returnPos.x,this.returnPos.z,.2),this.game.player.cameraDist=5.2,this.game.mode="playing",this.game.audio?.chime(),this.game.notify("Back outside","good"))}update(t){if(this.current){const e=this.game.player.pos,i=this.current;if(e.x=Ht(e.x,i.x-i.W/2+.8,i.x+i.W/2-.8),e.z=Ht(e.z,i.z-i.D/2+.8,i.z+i.D/2-.9),this.clerks)for(const n of this.clerks)n.phase+=t,n.group.position.y=Math.sin(n.phase*1.4)*.006}}nearestInteraction(t,e){if(!this.current)return null;let i=null,n=3.2;for(const r of this.current.interactions){const a=Math.hypot(r.x-t,r.z-e);a<n&&(n=a,i=r)}return i}}class lv{constructor(t){this.game=t,this.current=null,this.offers=[],this.marker=null,this.markerGroup=new $t,t.scene.add(this.markerGroup),this.completed=0,this.refreshOffers()}refreshOffers(){const t=this.game.city,e=t.pois.filter(c=>c.type==="shop"),i=t.pois.filter(c=>c.type==="apartment"),n=t.pois.filter(c=>c.type==="hotel"),r=t.pois.filter(c=>c.type==="garage"),a=t.pois.filter(c=>c.type==="factory"),o=Date.now()+this.completed,l=[{id:"courier",title:"Courier Run",desc:"Pick up a parcel and deliver it across the city.",pay:185,require:null,color:6549680},{id:"freight",title:"Freight Delivery",desc:"Haul industrial cargo in a van, pickup or truck.",pay:460,require:["van","pickup","truck","construction"],color:16757847},{id:"taxi",title:"City Taxi",desc:"Pick up a passenger and take them to their hotel.",pay:330,require:["sedan","taxi","suv","van","sports","super"],color:6021375},{id:"courier",title:"Pharmacy Drop",desc:"Urgent medical parcel for the hospital district.",pay:240,require:null,color:6549680},{id:"inspect",title:"Site Inspection",desc:"Drive to an industrial site and check the perimeter.",pay:260,require:null,color:11635967}];this.offers=l.map((c,h)=>{const u=c.id==="freight"?Me(a):c.id==="taxi"?Me(n):Me(e),f=c.id==="freight"?Me(r):c.id==="taxi"?Me(n):Me(i);return{...c,uid:"job"+o+h,pickup:{x:u.x+Q(-5,5),z:u.z+Q(-5,5)},dropoff:{x:f.x+Q(-5,5),z:f.z+Q(-5,5)},pickupName:u.name,dropName:f.name}})}start(t){if(this.current){this.game.notify("Finish your current job first","warn");return}const e=this.offers.find(n=>n.uid===t);if(!e)return;const i=this.game.vehicles.playerVehicle;if(e.require&&(!i||!e.require.includes(i.type))){this.game.notify("This job needs the right vehicle","bad");return}this.current={...e,stage:"pickup",elapsed:0,limit:240},this.setMarker(e.pickup.x,e.pickup.z,e.color),this.game.notify(`Job accepted: ${e.title}`,"good"),this.game.audio?.chime(),this.game.ui?.showObjective()}setMarker(t,e,i){this.marker&&this.markerGroup.remove(this.marker),this.marker=$h(i),this.marker.position.set(t,.15,e),this.markerGroup.add(this.marker)}clearMarker(){this.marker&&(this.markerGroup.remove(this.marker),this.marker=null)}update(t){if(this.marker&&Zh(this.marker,t),!this.current)return;const e=this.current;e.elapsed+=t;const i=this.game.player,n=e.stage==="pickup"?e.pickup:e.dropoff,r=Math.hypot(i.pos.x-n.x,i.pos.z-n.z);i.vehicle,r<6&&(e.stage==="pickup"?(e.stage="dropoff",this.setMarker(e.dropoff.x,e.dropoff.z,16757847),this.game.notify(e.id==="taxi"?"Passenger aboard — drive to the destination":"Cargo loaded — deliver it to the destination","good")):this.complete()),e.elapsed>e.limit&&(this.game.notify("Job expired — the client cancelled","bad"),this.current=null,this.clearMarker(),this.game.ui?.hideObjective()),this.game.ui?.updateObjective(e,r)}complete(){const t=this.current;t&&(this.game.addMoney(t.pay),this.completed++,this.game.notify(`Job complete — earned ${wi(t.pay)}`,"good"),this.game.audio?.chime(),this.current=null,this.clearMarker(),this.refreshOffers(),this.game.ui?.hideObjective())}}class cv{constructor(t){this.game=t,this.mode="none",this.manual=!1,this.currentRail=null,this.atStation=-1,this.metroEntrances=[],this.buildMetroEntrances(),this.fare=3}buildMetroEntrances(){const t=this.game.city,e=[{x:10,z:58,name:"Central Metro"},{x:-200,z:10,name:"West End Metro"},{x:200,z:200,name:"Harbor Metro"}];for(let i=0;i<e.length;i++){const n=e[i],r=new $t;r.position.set(n.x,0,n.z);const a=new q({color:3818573,roughness:.4,metalness:.6});r.add(new k(new Z(5,.3,8),new q({color:7830912,roughness:.95})));const o=new k(new Z(4.2,.05,.2),new ce({color:9235199}));o.position.set(0,.32,2.5),r.add(o);for(const h of[-1,1]){const u=new k(new Z(.25,1,8),a);u.position.set(h*2.3,.8,0),r.add(u)}const l=new k(new oe(3.6,1.4),new ce({map:hv("METRO","#081b2a","#8ceaff",n.name),transparent:!0}));l.position.set(0,3.2,0),r.add(l);const c=new k(new le(.08,.1,3.2,6),a);c.position.y=1.6,r.add(c);for(let h=0;h<5;h++){const u=new k(new Z(4,.2,.7),new q({color:5988710,roughness:.9}));u.position.set(0,-.1-h*.2,-.4+h*.6),r.add(u)}this.game.scene.add(r),t.addPOI("metro",n.name,n.x,n.z,6,{icon:"transit",metro:i}),this.metroEntrances.push(n)}}boardMonorail(t){const e=this.game.city.monorail;if(!e)return;const i=this.game.player;i.riding=e,i.group.visible=!1,i.vehicle=null,i.cameraYaw=e.group.rotation.y,i.cameraDist=18,i.cameraPitch=.2,e.riding=!0,this.mode="monorail",this.manual=e.manual,this.atStation=t??e.currentStation,this.game.mode="riding",this.game.notify("Boarded the monorail — E to exit at a station, T to take controls","good"),this.game.audio?.chime(),this.game.ui&&this.game.ui.showTransit("MONORAIL","Aurora Loop","Automatic")}exitMonorail(){const t=this.game.city.monorail,e=this.game.player,i=t.currentStation>=0?t.stations[t.currentStation]:null;if(!i&&t.dwell<=0){this.game.notify("Wait until the train stops at a station","warn");return}const n=i||t.stations[0],r=n.tower;e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(r.x+8,r.z+11,.2),e.cameraYaw=n.ang,t.riding=!1,t.manual=!1,this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify(`Exited at ${n.name}`,"good")}toggleManual(){if(this.mode!=="monorail")return;const t=this.game.city.monorail;t.manual=!t.manual,this.manual=t.manual,t.targetSpeed=t.manual?Math.max(4,t.speed):11,this.game.ui?.updateTransitMode(t.manual?"Manual control":"Automatic",t.manual?"W/S throttle · E exit":"Aurora Loop"),this.game.notify(t.manual?"Manual train control enabled":"Automatic train control enabled","good")}boardRail(){const t=this.game.city.rail;if(!t)return;const e=this.game.player;e.riding={group:t.group,isRail:!0},e.group.visible=!1,e.cameraYaw=Math.PI/2,e.cameraDist=22,this.mode="rail",this.currentRail=t,this.game.mode="riding",this.game.notify("Boarded commuter rail — W/S to control, E to disembark","good"),this.game.ui?.showTransit("COMMUTER RAIL","Nova Central Line","Manual control")}exitRail(){const t=this.game.city.rail,e=this.game.player,i=t.group.position.x,n=t.group.position.z;e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(Ht(i,-600,600),n+12,.2),e.cameraYaw=0,this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify("Left the train at Nova Central","good")}update(t,e){if(this.mode==="monorail"){const i=this.game.city.monorail;i.manual&&(i.targetSpeed=Ht(i.targetSpeed+((e.forward?1:0)-(e.back?1:0))*8*t*3,0,24),e.brake&&(i.targetSpeed=0)),this.game.ui?.updateTransitSpeed(i.speed,i.dwell>0?"DOORS OPEN":i.currentStation>=0?i.stations[i.currentStation].name:"EN ROUTE")}else if(this.mode==="rail"){const i=this.game.city.rail;e.forward&&(i.speed=Ht(i.speed+5*t,0,28)),e.back&&(i.speed=Ht(i.speed-7*t,0,28)),e.brake&&(i.speed=0),this.game.ui?.updateTransitSpeed(i.speed,"NOVA CENTRAL LINE")}}metroTravel(t){const i=this.metroEntrances[t];if(i){if(this.game.money<this.fare){this.game.notify("Not enough cash for fare","bad");return}this.game.addMoney(-this.fare),this.game.audio?.chime(),this.game.notify(`Metro fare ${wi(this.fare)} — arriving at ${i.name}`,"good"),this.game.player.riding=null,this.game.player.setPosition(i.x,i.z+8,.2),this.game.player.cameraYaw=Math.PI,this.game.mode="playing",this.game.ui?.closeOverlay()}}}function hv(s,t,e,i=""){const n=document.createElement("canvas");n.width=512,n.height=256;const r=n.getContext("2d");r.fillStyle=t,r.fillRect(0,0,512,256),r.strokeStyle="rgba(255,255,255,.25)",r.lineWidth=8,r.strokeRect(10,10,492,236),r.fillStyle=e,r.font="700 82px Inter, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(s,256,108),r.font="500 24px Inter, sans-serif",r.globalAlpha=.7,r.fillText(i,256,172);const a=new Jo(n);return a.colorSpace=ni,a}const Hc="novacity-save-v1",Vc="novacity-settings-v1",Wc={forward:!1,back:!1,left:!1,right:!1,sprint:!1,jump:!1,brake:!1,crouch:!1},uv=["clear","clear","clear","rain","storm","snow"],dv=[2570317,7023925,3426874,5326428,9202493,4087680,8011346],fv=[2239027,2895670,3881792,4866358,5922144],Mn=()=>new Promise(s=>requestAnimationFrame(()=>s()));class pv{constructor(){this.canvas=document.getElementById("game"),this.renderer=new fx({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=ni,this.renderer.toneMapping=Oo,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.type=Es,this.scene=new fd,this.scene.background=new kt(10336205),this.fog=new $o(10466502,55e-5),this.scene.fog=this.fog,this.camera=new gi(62,1,.1,2600),this.camera.position.set(40,22,60),this.settings=this.loadSettings(),this.applyRendererSettings(),this.clock3=new _f,this.money=2500,this.health=100,this.hour=6.4,this.totalHours=6.4,this.night=0,this.weather="clear",this.temperature=18,this.weatherTimer=Q(150,240),this.thunderTimer=Q(6,14),this.flashArmed=!0,this.timeScale=24/720,this.mode="boot",this.paused=!1,this.started=!1,this.ready=!1,this.camShake=0,this.powerOutage=!1,this.gps=null,this.bustedCooldown=0,this.crimeCooldown=0,this.metroPass=0,this.lastVehicle=null,this.interaction=null,this.keys=new Set,this.gamepadButtons=new Set,this.gamepadId=null,this.jumpBuffer=0,this.input={...Wc},this.controls={vehicle:{}},this.touch={x:0,y:0,sprint:!1,jump:!1},this.elapsed=0,this.ui=null,this.player=null,this.dragging=!1,this.lastPointer={x:0,y:0},this.menuClockAcc=0,this.audio=new nv,this.bindWindowEvents(),this.boot()}loadSettings(){const t={quality:"medium",shadows:!0,volume:.7,invert:!1,time:"dawn",fov:62,mode:"pc",language:"en"};try{const e=localStorage.getItem(Vc);return e?{...t,...JSON.parse(e)}:t}catch{return t}}saveSettings(){try{localStorage.setItem(Vc,JSON.stringify(this.settings))}catch{}this.applyRendererSettings()}applyRendererSettings(){const t=this.settings,e=t.quality==="low"?1:t.quality==="high"?2:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e)),this.renderer.shadowMap.enabled=!!t.shadows,this.camera.fov=t.fov||62,this.camera.updateProjectionMatrix(),this.city?.sun&&(this.city.sun.castShadow=!!t.shadows)}setQuality(t){this.settings.quality=t,this.applyRendererSettings(),this.saveSettings()}setLoading(t,e){const i=document.querySelector(".loading-note");i&&t&&(i.textContent=t);const n=document.querySelector(".loading-bar i");n&&e!=null&&(n.style.animation="none",n.style.width=`${Ht(e,0,100)}%`)}async boot(){try{this.setLoading("Surveying the bay · plotting districts",8),await Mn(),await Mn(),this.city=new Nx(this.scene),this.night=this.city.night,this.setLoading("Paving roads · raising the skyline",34),await Mn(),this.effects=new iv(this.scene),this.player=new Ux(this),this.player.beginCinematic(170,96,210,250,.055),this.setLoading("Waking the traffic system",52),await Mn(),this.vehicles=new $x(this),this.vehicles.spawnParkedCity(),this.vehicles.spawnTraffic(30),this.onTrafficCollision=(t,e)=>this.handleTrafficCollision(t,e),this.onPedHit=(t,e)=>this.handlePedHit(t,e),this.setLoading("Populating sidewalks · dispatching services",68),await Mn(),this.npcs=new jx(this),this.wanted=new sv(this),this.emergency=new rv(this),this.events=new av(this),this.setLoading("Opening storefronts and stations",82),await Mn(),this.interiors=new ov(this),this.jobs=new lv(this),this.transit=new cv(this),this.setupOwnedVehicles(),this.setLoading("Calibrating the city",94),await Mn(),this.ui=new tv(this),this.ui.updateMoney(),this.ui.updateWanted(),this.player.endCinematic(),this.player.beginCinematic(170,96,210,250,.055),this.city.updateLighting(this.hour,this.weather,0),this.ready=!0,this.mode="menu",this.resize(),this.clock3.start(),this.ui.hideLoading(),this.ui.showMenu(),this.setLoading("Ready",100),requestAnimationFrame(()=>this.loop())}catch(t){console.error(t),this.fatal(t)}}fatal(t){const e=document.querySelector(".loading-note");e&&(e.textContent="NOVA CITY failed to start — "+(t?.message||"unknown error"),e.style.color="#ff8c9a",e.style.maxWidth="70vw",e.style.textAlign="center",e.style.textTransform="none")}setupOwnedVehicles(){this.ownedVehicles=[{...hi.sedan,type:"sedan",color:2837103,name:"Your Sable"}],this.money=2500}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}bindWindowEvents(){window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",t=>{if(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.mode!=="menu"||t.code==="Tab")&&t.preventDefault(),this.keys.add(t.code),!(this.mode==="menu"||!this.ready)&&(t.code==="Space"&&!t.repeat&&(this.jumpBuffer=.2),!t.repeat))switch(t.code){case"Tab":this.toggleOverlay("phone");break;case"KeyM":this.toggleOverlay("map");break;case"KeyE":this.interact();break;case"KeyF":this.toggleCamera();break;case"KeyH":this.horn();break;case"KeyL":this.toggleLights();break;case"KeyT":this.toggleTransitControls();break;case"KeyR":this.resetVehicle();break;case"KeyC":this.player&&(this.player.crouching=!this.player.crouching);break}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),this.canvas.addEventListener("mousedown",t=>{if(this.settings.mode!=="phone"&&t.button===0&&!(this.mode==="menu"||this.paused||this.ui?.overlay)&&(this.dragging=!0,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY,document.pointerLockElement!==this.canvas))try{this.canvas.requestPointerLock?.()}catch{}}),window.addEventListener("mouseup",()=>{this.dragging=!1}),window.addEventListener("mousemove",t=>{if(this.mode==="menu"||this.paused||this.ui?.overlay||!this.player)return;let e=0,i=0;if(this.settings.mode==="phone"||(document.pointerLockElement===this.canvas?(e=t.movementX||0,i=t.movementY||0):this.dragging&&(e=t.clientX-this.lastPointer.x,i=t.clientY-this.lastPointer.y,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY),!e&&!i))return;const n=.0024;this.player.cameraYaw+=e*n,this.player.cameraPitch=Ht(this.player.cameraPitch+(this.settings.invert?-1:1)*i*n,-.55,1)}),window.addEventListener("wheel",t=>{this.mode==="menu"||this.paused||this.ui?.overlay||!this.player||(this.player.cameraDist=Ht(this.player.cameraDist+t.deltaY*.006,3,20))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.canvas&&(this.dragging=!1)})}readInput(t=0){const e=this.keys,i=navigator.getGamepads?.()||[],n=Array.from(i).find(y=>y?.connected)||null,r=new Set;let a=0,o=0,l=0,c=0,h=!1,u=!1,f=!1;if(n){this.gamepadId=n.index;const y=E=>Math.abs(E||0)<.16?0:E;a=y(n.axes[0]),o=y(n.axes[1]),l=y(n.axes[2]),c=y(n.axes[3]);const M=E=>!!n.buttons[E]?.pressed||(n.buttons[E]?.value||0)>.6;for(let E=0;E<n.buttons.length;E++)M(E)&&r.add(E);u=r.has(0),f=r.has(1),h=r.has(5)||(n.buttons[7]?.value||0)>.25;const T=E=>r.has(E)&&!this.gamepadButtons.has(E);this.mode!=="menu"&&this.ready&&(T(2)&&this.interact(),T(3)&&this.toggleOverlay("map"),T(4)&&this.toggleOverlay("phone"),T(9)&&this.togglePause()),(l||c)&&(this.player.cameraYaw+=l*t*2.4,this.player.cameraPitch=Ht(this.player.cameraPitch+(this.settings.invert?-1:1)*c*t*1.8,-.55,1))}else this.gamepadId=null;this.gamepadButtons=r;const d=e.has("KeyW")||e.has("ArrowUp")||o<-.25,p=e.has("KeyS")||e.has("ArrowDown")||o>.25,x=e.has("KeyA")||e.has("ArrowLeft")||a<-.25,m=e.has("KeyD")||e.has("ArrowRight")||a>.25,g=e.has("ShiftLeft")||e.has("ShiftRight")||h,_=e.has("Space")||this.jumpBuffer>0||u;this.jumpBuffer=0,this.input.forward=d,this.input.back=p,this.input.left=x,this.input.right=m,this.input.sprint=g,this.input.jump=_,this.input.brake=p||f,this.input.crouch=e.has("KeyC")||r.has(1),this.settings.mode==="phone"&&(this.input.forward=this.touch.y<-.25,this.input.back=this.touch.y>.25,this.input.left=this.touch.x<-.25,this.input.right=this.touch.x>.25,this.input.sprint=this.touch.sprint,this.touch.jump&&(this.jumpBuffer=.2),this.input.jump=this.touch.jump||this.jumpBuffer>0),this.controls.vehicle={throttle:d?1:0,brake:p||f?1:0,steer:(m?1:0)-(x?1:0),handbrake:_,up:_?1:0,down:g?1:0,left:x,right:m},n&&this.settings.mode!=="phone"&&(this.controls.vehicle.throttle=o<-.16?-o:0,this.controls.vehicle.brake=o>.16||f?Math.max(o,f?1:0):0,this.controls.vehicle.steer=a,this.controls.vehicle.left=a<-.16,this.controls.vehicle.right=a>.16,this.controls.vehicle.up=Math.max(this.controls.vehicle.up,u?1:0),this.controls.vehicle.down=Math.max(this.controls.vehicle.down,h?1:0))}toggleOverlay(t){this.ui&&(this.ui.overlay===t?this.ui.closeOverlay():this.ui.openOverlay(t))}togglePause(){this.ui&&(this.ui.overlay?this.ui.closeOverlay():this.ui.openOverlay("pause"))}loop(){requestAnimationFrame(()=>this.loop());const t=Math.min(this.clock3.getDelta(),.05);try{this.frame(t)}catch(e){console.error(e)}this.renderer.render(this.scene,this.camera)}frame(t){if(!this.ready)return;const e=this.paused?0:t;if(this.mode==="menu"){if(this.paused||(this.elapsed+=t,this.updateTime(t),this.player.update(t,Wc),this.city.update(t,this.elapsed,this.player.pos),this.effects.update(t,this.elapsed,this.player.pos,this.weather),this.city.updateLighting(this.hour,this.weather,t),this.night=this.city.night,this.updateAtmosphere(t),this.audio.update(t,null,this.weather,999),this.audio.nightMode=this.night>.5),this.menuClockAcc+=t,this.menuClockAcc>.4){this.menuClockAcc=0;const i=document.getElementById("menu-clock");i&&(i.textContent=this.clockText())}return}if(this.started){if(this.elapsed+=e,this.bustedCooldown>0&&(this.bustedCooldown-=e),this.crimeCooldown>0&&(this.crimeCooldown-=e),this.readInput(e),this.updateTime(e),this.updateWeather(e),this.city.updateLighting(this.hour,this.weather,e),this.night=this.city.night,this.mode==="interior")this.updateInterior(e);else if(this.player.riding)this.syncRidingPlayer(),this.player.update(e,this.input),this.transit.update(e,this.input);else{this.vehicles.update(e,this.elapsed,this.night,this.weather),this.player.update(e,this.input);const i=this.player.vehicle;i&&(this.player.pos.copy(i.pos),this.player.heading=i.heading)}this.city.update(e,this.elapsed,this.player.pos),this.npcs.update(e,this.elapsed,this.player),this.wanted.update(e),this.emergency.update(e,this.elapsed),this.events.update(e,this.elapsed),this.jobs.update(e),this.interiors.update(e),this.effects.update(e,this.elapsed,this.player.pos,this.weather),this.applyWeatherAudio(e),this.audio.nightMode=this.night>.5,this.audio.update(e,this.vehicles.playerVehicle,this.weather,this.emergency.nearestSirenDistance(this.player.pos)),this.ui.updateHUD(e),this.updateInteraction(),this.handleVehicleFeedback(),this.updateAtmosphere(t)}}updateTime(t){this.hour=(this.hour+t*this.timeScale)%24,this.totalHours+=t*this.timeScale,this.clock=this.totalHours}updateAtmosphere(t){if(!this.scene.fog||!this.city||this.interiors?.current)return;const e=this.city.night,i=this.weather==="storm"?.0021:this.weather==="rain"?.00135:this.weather==="snow"?.00115:55e-5;this.scene.fog.density=Re(this.scene.fog.density,i,Ht(t*.4,0,1)),this.scene.fog.color.setRGB(Re(.58,.018,e),Re(.68,.032,e),Re(.79,.058,e)),this.scene.background.copy(this.scene.fog.color)}updateWeather(t){if(this.weatherTimer-=t,this.weatherTimer<=0){this.weatherTimer=Q(150,260);let i=Me(uv);i===this.weather&&(i=this.weather==="clear"?"rain":"clear"),this.setWeather(i)}const e=this.targetTemperature();this.temperature=Re(this.temperature,e,Ht(t*.16,0,1)),this.weather==="storm"&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderTimer=Q(6,16),this.audio.thunder()))}targetTemperature(){const e=11+Math.max(0,Math.sin((this.hour-6)/24*Math.PI*2))*13,i={clear:0,rain:-3,storm:-5,snow:-10,fog:-2}[this.weather]??0;return e+i}setWeather(t,e=!1){if(this.weather=t,this.temperature=this.targetTemperature(),this.effects&&this.effects.setWeather(t),this.ui&&this.ui.setWeatherFx(t),this.city&&this.city.updateLighting(this.hour,t,0),!e&&this.ui){const i={clear:"Skies clearing over Nova City",rain:"Rain moving in from the bay",storm:"Thunderstorm warning issued",snow:"Snow falling across the city",fog:"Fog rolling through downtown"}[t];i&&this.notify(i,t==="storm"?"warn":"")}(t==="storm"||t==="rain")&&this.audio.chime?.()}applyWeatherAudio(){this.effects&&(this.effects.flash>.985&&this.flashArmed&&(this.flashArmed=!1,this.audio.thunder()),this.effects.flash<.05&&(this.flashArmed=!0))}updateInterior(t){const e=this.player;let i=(this.input.right?1:0)-(this.input.left?1:0),n=(this.input.forward?1:0)-(this.input.back?1:0);const r=Math.hypot(i,n);r>0&&(i/=r,n/=r);const a=e.cameraYaw,o=this.input.sprint?4.4:2.7,l=(Math.sin(a)*n+Math.cos(a)*i)*o*(r>0?1:0),c=(Math.cos(a)*n-Math.sin(a)*i)*o*(r>0?1:0);e.pos.x+=l*t,e.pos.z+=c*t,r>0&&(e.heading=Math.atan2(l,c),e.footTimer-=t,e.footTimer<=0&&(e.footTimer=.5,this.audio.footstep(this.input.sprint))),e.group.position.copy(e.pos),e.group.rotation.y=e.heading,e.animate(t,r>0?o:0,this.input.sprint),this.interiors.update(t),e.updateCamera(t)}syncRidingPlayer(){const t=this.player.riding;if(!t)return;const e=t.group?.position||t.pos;e&&(this.player.pos.copy(e),this.player.heading=t.group?.rotation.y??this.player.heading)}updateInteraction(){if(!this.ui)return;if(this.paused||this.ui.overlay){this.interaction=null,this.ui.setPrompt(null);return}const t=this.player;let e=null;if(t.cinematic){this.interaction=null,this.ui.setPrompt(null);return}if(t.vehicle)e={action:"exitVehicle",label:`Exit ${t.vehicle.cfg.name}`};else if(t.riding)e={action:"exitTransit",label:this.transit.mode==="monorail"?"Exit monorail at station":"Leave the train"};else if(this.interiors.current){const i=this.interiors.nearestInteraction(t.pos.x,t.pos.z);i&&(e={action:"interior",payload:i,label:i.label})}else{const i=this.vehicles.findNearest(t.pos.x,t.pos.z,6.5,n=>n.enterable);if(i)e={action:"enterVehicle",payload:i.vehicle,label:`Enter ${i.vehicle.cfg.name}`};else{let n=null,r=1/0;for(const a of this.city.pois){const o=Math.hypot(a.x-t.pos.x,a.z-t.pos.z),l=a.type==="monorail"?11:a.type==="train"?16:a.type==="metro"?9:Math.min(a.radius||16,16);o<l&&o<r&&(r=o,n=a)}n&&(e={action:"poi",payload:n,label:this.poiLabel(n)})}}this.interaction=e,this.ui.setPrompt(e?e.label:null)}poiLabel(t){return t.type==="monorail"?`Board monorail · ${t.name.replace(" Monorail","")}`:t.type==="train"?"Board commuter rail":t.type==="metro"?"Ride the metro":t.type==="marina"?"Visit Harbor Marina":t.type==="park"?"Relax in Aurora Park":t.type==="airport"?"Watch the airport":t.type==="factory"?"Inspect Northgate Works":`Enter ${t.name}`}interact(){if(!this.ready||this.paused||this.ui?.overlay)return;const t=this.interaction;t&&(t.action==="exitVehicle"?this.exitVehicle():t.action==="exitTransit"?this.exitTransit():t.action==="enterVehicle"?this.enterVehicle(t.payload):t.action==="interior"?this.runInteriorAction(t.payload):t.action==="poi"&&this.activatePOI(t.payload))}activatePOI(t){if(t.type==="monorail"){this.transit.boardMonorail(t.station),this.mode="riding";return}if(t.type==="train"){this.transit.boardRail(),this.mode="riding";return}if(t.type==="metro"){const e=this.transit.metroEntrances.length,i=((t.metro??0)+1)%e;this.transit.metroTravel(i);return}if(t.type==="marina"){this.notify("Harbor Marina — boats are moored along the waterfront","good");return}if(t.type==="park"){this.notify("Aurora Park — the festival stage is quiet this hour","good");return}if(t.type==="airport"){this.notify("Nova International — departures board flickers","good");return}if(t.type==="factory"){this.notify("Northgate Works — the night shift is running","warn");return}(t.type==="shop"||t.type==="apartment"||t.type==="police"||t.type==="hospital"||t.type==="fire"||t.type==="garage"||t.type==="dealership"||t.type==="hotel"||t.type==="office")&&this.enterInterior(t.type,t)}enterInterior(t,e){const i=this.player;this.interiors.enter(t,new P(i.pos.x,.2,i.pos.z)),this.scene.fog=null,this.mode="interior",this.ui.setPrompt(null),this.audio.chime()}exitInterior(){this.interiors.exit(),this.scene.fog=this.fog,this.mode="playing",this.ui.setPrompt(null)}runInteriorAction(t){if(t)switch(t.action){case"exit":this.exitInterior();break;case"rest":this.hour=(this.hour+7)%24,this.totalHours+=7,this.city.updateLighting(this.hour,this.weather,0),this.notify("You slept for seven hours","good"),this.audio.chime();break;case"coffee":this.health=Math.min(100,this.health+4),this.notify("Fresh coffee — you feel awake","good");break;case"shop":this.ui.openOverlay("phone"),this.ui.switchPhoneTab("shop");break;case"policeDesk":this.openPoliceDesk();break;case"heal":if(this.money<120){this.notify("Treatment costs $120","bad");break}this.addMoney(-120),this.health=100,this.notify("Treated at Nova General — health restored","good"),this.audio.chime();break;case"fireInfo":this.notify("Fire crews are on standby. Report blazes from the phone map.","good");break;case"garage":this.repairAtGarage();break;case"dealership":this.openDealership();break;case"hotel":if(this.money<80){this.notify("A room costs $80","bad");break}this.addMoney(-80),this.hour=(this.hour+8)%24,this.totalHours+=8,this.city.updateLighting(this.hour,this.weather,0),this.notify("Rested at Hotel Aurora","good"),this.audio.chime();break;case"office":this.ui.openOverlay("phone"),this.ui.switchPhoneTab("jobs");break;default:this.notify("Nothing interesting here","")}}openPoliceDesk(){const t=this.wanted.level;if(t===0){this.ui.showModal({kicker:"NCPD CENTRAL",title:"Records clean",body:"<p>No active warrants. Keep it that way, and the city stays open to you.</p>",actions:[{label:"Leave",sub:"Back to the lobby",primary:!0,onClick:()=>{this.exitInterior(),this.ui.closeOverlay()}}]});return}const e=250*t;this.ui.showModal({kicker:"NCPD CENTRAL",title:"Outstanding warrant",body:`<p>Wanted level <b>${t}</b>. Pay a fine of <b>${wi(e)}</b> to clear your record.</p>`,actions:[{label:`Pay ${wi(e)}`,sub:"Clear wanted level",primary:!0,onClick:()=>{if(this.money<e){this.notify("Not enough cash for the fine","bad");return}this.addMoney(-e),this.wanted.clear(),this.notify("Warrant cleared — NCPD stands down","good"),this.exitInterior(),this.ui.closeOverlay()}},{label:"Walk away",sub:"Keep the warrant",onClick:()=>{this.ui.closeOverlay()}}]})}repairAtGarage(){const t=this.lastVehicle||this.vehicles.playerVehicle||this.vehicles.startCar;if(!t){this.notify("No vehicle available to repair","bad");return}const e=80;if(this.money<e){this.notify("Repairs cost $80","bad");return}this.addMoney(-e),t.repair(),t.fuel=t.cfg.fuel,this.notify(`${t.cfg.name} repaired and refuelled`,"good"),this.audio.chime()}openDealership(){const e=["sedan","suv","sports","super","pickup","van"].map(i=>{const n=hi[i];return{label:`${n.name} · ${wi(n.price)}`,sub:`${n.klass} · ${Math.round(n.maxSpeed*3.6)} km/h`,onClick:()=>this.buyVehicle(i)}});this.ui.showModal({kicker:"NOVA MOTORS",title:"Choose your machine",body:"<p>Showroom stock is delivered to the street outside. Insurance and a full tank are included.</p>",actions:e})}buyVehicle(t){const e=hi[t];if(!e)return;if(this.money<e.price){this.notify(`You need ${wi(e.price)} for the ${e.name}`,"bad");return}if(this.ownedVehicles.some(n=>n.type===t)){this.notify("You already own that model","warn");return}this.addMoney(-e.price);const i={...e,type:t,color:Me([2837103,9183020,13620182,1843753,2181746,6961964])};this.ownedVehicles.push(i),this.notify(`Purchased ${e.name}`,"good"),this.audio.chime(),this.ui.closeOverlay(),this.spawnOwnedNearby(i),this.saveGame()}spawnOwnedNearby(t){if(this.interiors?.current)return null;const e=this.player;let i=e.pos.x+Math.sin(e.heading)*11,n=e.pos.z+Math.cos(e.heading)*11;this.city.collideCircle(i,n,1.6)&&(i=e.pos.x-Math.sin(e.heading)*11,n=e.pos.z-Math.cos(e.heading)*11);const a=this.vehicles.spawn(t.type,i,n,e.heading,{color:t.color,owned:!0,name:t.name});return a.mode="parked",a}recallVehicle(t){const e=this.ownedVehicles[t];if(!e)return;this.spawnOwnedNearby(e)?this.notify(`${e.name} delivered nearby`,"good"):this.notify("Step outside to receive the vehicle","warn"),this.saveGame()}enterVehicle(t){if(!t||this.player.vehicle||this.player.riding)return;const e=!!t.service,i=t.mode==="traffic";if(this.vehicles.startDriving(t),this.player.enteredVehicle(t),this.lastVehicle=t,this.mode="driving",this.ui.setPrompt(null),!t.owned&&(e||i)){const n=e?2.2:1.2;this.wanted.commit(n,this.player.pos,!0),this.npcs.panic(t.pos.x,t.pos.z,26),this.notify(e?"Service vehicle stolen — units alerted":"Carjacking reported","bad")}this.audio.click()}exitVehicle(t=!1){const e=this.player.vehicle;if(e){if(!t&&e.isAir&&e.pos.y>4){this.notify("Land the helicopter before exiting","warn");return}if(!t&&e.isBoat&&e.pos.z>515){this.notify("Bring the boat closer to shore","warn");return}this.vehicles.stopDriving(e),this.player.exitVehicle(e),this.lastVehicle=e,this.interiors?.current||(this.mode="playing"),this.ui.setPrompt(null)}}exitTransit(){this.transit.mode==="monorail"?this.transit.exitMonorail():this.transit.mode==="rail"?this.transit.exitRail():(this.player.riding=null,this.player.group.visible=!0,this.player.shadow.visible=!0,this.mode="playing",this.ui.hideTransit())}toggleCamera(){if(!this.player||this.player.vehicle===null&&this.mode==="interior"){this.notify("Camera options are limited indoors","warn");return}const t=this.player.toggleCamera();this.ui.toast(t?"First-person camera":"Third-person camera")}toggleLights(){const t=this.player.vehicle;t&&(t.lightsOn=!t.lightsOn,this.ui.toast(t.lightsOn?"Lights on":"Lights off"))}horn(){this.audio.horn(),this.player.vehicle&&(this.camShake=Math.max(this.camShake,.05))}resetVehicle(){const t=this.player.vehicle;if(!t)return;const e=this.city.nearestNode(t.pos.x,t.pos.z);t.repair(),t.velocity.set(0,0),t.speed=0,t.pos.set(e.x+4.5,t.isAir?2.2:.02,e.z+4.5),t.altitude=t.pos.y,t.heading=0,t.group.rotation.set(0,0,0),this.notify("Vehicle reset and repaired","good")}toggleTransitControls(){this.transit.mode==="monorail"&&this.transit.toggleManual()}handleTrafficCollision(t,e){this.crimeCooldown>0||(this.crimeCooldown=2.5,this.wanted.commit(1.2,t.pos,!0),this.ui.damageFlash(),this.notify("Collision witnessed — NCPD notified","warn"))}handlePedHit(t,e){this.wanted.commit(4.5,e.pos,!0),this.emergency.dispatchMedical(new P(t.x,.2,t.z)),this.npcs.panic(t.x,t.z,34),this.ui.damageFlash(),this.camShake=Math.max(this.camShake,1),this.notify("You struck a pedestrian — witnesses are calling 911","bad")}handleVehicleFeedback(){const t=this.vehicles.playerVehicle;t&&t.damageFlash>0&&(t.damageFlash=0,this.ui.damageFlash(),this.camShake=Math.max(this.camShake,.35)),this.camShake>0&&(this.camShake=Math.max(0,this.camShake-.016*2.2))}busted(){if(this.bustedCooldown>0||!this.wanted||this.wanted.level===0)return;this.bustedCooldown=12,this.player.vehicle&&this.exitVehicle(!0),this.wanted.clear(),this.money=Math.max(0,this.money-500),this.ui.updateMoney();const t=this.city.pois.find(e=>e.type==="police")||{x:132,z:44};this.player.setPosition(t.x+8,t.z+26,.18),this.player.heading=Math.PI,this.player.cameraYaw=Math.PI,this.player.velocity.set(0,0,0),this.mode==="interior"&&this.exitInterior(),this.mode="playing",this.ui.showBusted(),this.notify("Busted — $500 fine and a ride to the precinct","bad"),this.audio.chime()}buyItem(t){const i={coffee:{price:6},sandwich:{price:12},medkit:{price:45},fuelcan:{price:32},jacket:{price:60},pants:{price:45},metrocard:{price:25}}[t];if(i){if(t==="fuelcan"&&!this.vehicles.playerVehicle){this.notify("You need to be in a vehicle to use a fuel can","warn");return}if(this.money<i.price){this.notify("Not enough cash","bad");return}switch(this.addMoney(-i.price),t){case"coffee":this.health=Math.min(100,this.health+4),this.notify("Coffee purchased","good");break;case"sandwich":this.health=Math.min(100,this.health+10),this.notify("Sandwich eaten","good");break;case"medkit":this.health=100,this.notify("First aid kit used — health restored","good");break;case"fuelcan":this.vehicles.playerVehicle.fuel=this.vehicles.playerVehicle.cfg.fuel,this.notify("Vehicle refuelled","good");break;case"jacket":this.player.setClothing({jacket:Me(dv)}),this.notify("New jacket equipped","good");break;case"pants":this.player.setClothing({pants:Me(fv)}),this.notify("New trousers equipped","good");break;case"metrocard":this.metroPass+=5,this.notify("Metro pass loaded with five rides","good");break}this.audio.chime(),this.saveGame()}}addMoney(t){this.money=Ht(this.money+t,0,1e9),this.ui?.updateMoney()}notify(t,e=""){this.ui?.notify(t,e)}clockText(){const t=Math.floor(this.hour)%24,e=Math.floor(this.hour%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}startNewGame(){this.ready&&(this.audio.resume(),this.audio.setVolume(this.settings.volume),this.paused=!1,this.mode="playing",this.started=!0,this.player.endCinematic(),this.player.firstPerson=!1,this.player.cameraDist=5.2,this.player.setPosition(10,34,.18),this.player.heading=Math.PI,this.player.cameraYaw=Math.PI,this.player.cameraPitch=.04,this.player.group.visible=!0,this.player.shadow.visible=!0,this.health=100,this.money=2500,this.metroPass=0,this.ownedVehicles=[{...hi.sedan,type:"sedan",color:2837103,name:"Your Sable"}],this.wanted.clear(),this.jobs.current=null,this.jobs.clearMarker(),this.jobs.completed=0,this.jobs.refreshOffers(),this.ui.hideObjective(),this.hour={dawn:8.2,day:12.2,dusk:18.8,night:22.4}[this.settings.time]??8.2,this.totalHours=this.hour,this.clock=this.hour,this.weatherTimer=Q(150,240),this.setWeather("clear",!0),this.temperature=this.targetTemperature(),this.vehicles.startCar&&(this.vehicles.startCar.repair(),this.vehicles.startCar.pos.set(4,.02,36),this.vehicles.startCar.heading=Math.PI,this.vehicles.startCar.group.rotation.set(0,Math.PI,0)),this.ui.hideMenu(),this.ui.showHUD(),this.ui.updateMoney(),this.ui.updateWanted(),this.ui.closeOverlay(),this.notify("Welcome to Nova City. Find work on your phone, or take the wheel.","good"),this.audio.chime(),this.requestPointerLock(),this.saveGame())}continueGame(){if(!this.ready)return;let t=null;try{t=JSON.parse(localStorage.getItem(Hc)||"null")}catch{t=null}if(!t){this.startNewGame();return}this.audio.resume(),this.audio.setVolume(this.settings.volume),this.paused=!1,this.mode="playing",this.started=!0,this.player.endCinematic(),this.player.firstPerson=!!t.player?.firstPerson,this.player.cameraDist=this.player.firstPerson?0:5.2,this.player.setPosition(t.player?.x??10,t.player?.z??34,.18),this.player.heading=t.player?.heading??Math.PI,this.player.cameraYaw=this.player.heading,this.player.cameraPitch=.04,this.player.group.visible=!this.player.firstPerson,this.player.shadow.visible=!this.player.firstPerson,this.health=Ht(t.health??100,1,100),this.money=Math.max(0,t.money??2500),this.hour=t.hour??6.4,this.totalHours=t.totalHours??this.hour,this.clock=this.totalHours,t.settings&&(this.settings={...this.settings,...t.settings},this.applyRendererSettings());const e=Array.isArray(t.owned)?t.owned:["sedan"];if(this.ownedVehicles=e.map(i=>{const n=typeof i=="string"?i:i.type,r=hi[n];return r?{...r,type:n,name:i.name||(n==="sedan"?"Your Sable":r.name),color:i.color}:null}).filter(Boolean),this.ownedVehicles.length||(this.ownedVehicles=[{...hi.sedan,type:"sedan",name:"Your Sable",color:2837103}]),this.jobs.completed=t.jobsCompleted||0,this.jobs.refreshOffers(),this.wanted.heat=t.wantedHeat||0,this.wanted.level=this.wanted.levelFor(this.wanted.heat),this.setWeather(t.weather||"clear",!0),this.temperature=t.temperature??this.targetTemperature(),t.vehicle?.type&&hi[t.vehicle.type]){const i=this.vehicles.spawn(t.vehicle.type,this.player.pos.x+3.4,this.player.pos.z+2.4,this.player.heading,{owned:!0});i.health=t.vehicle.health??100,i.fuel=t.vehicle.fuel??i.cfg.fuel,i.mode="parked"}this.ui.hideMenu(),this.ui.showHUD(),this.ui.updateMoney(),this.ui.updateWanted(),this.ui.closeOverlay(),this.notify("Welcome back to Nova City","good"),this.audio.chime(),this.requestPointerLock()}saveGame(){if(!this.ready)return;const t=this.player,e=this.vehicles?.playerVehicle,i={version:1,savedAt:Date.now(),money:this.money,health:this.health,hour:this.hour,totalHours:this.totalHours,weather:this.weather,temperature:this.temperature,wantedHeat:this.wanted?.heat||0,jobsCompleted:this.jobs?.completed||0,owned:(this.ownedVehicles||[]).map(n=>({type:n.type,name:n.name,color:n.color})),player:{x:t.pos.x,z:t.pos.z,heading:t.heading,firstPerson:t.firstPerson},vehicle:e?{type:e.type,health:e.health,fuel:e.fuel}:null,settings:this.settings};try{localStorage.setItem(Hc,JSON.stringify(i))}catch{}}returnToMenu(){this.player?.vehicle&&this.exitVehicle(!0),this.player?.riding&&(this.player.riding=null,this.player.group.visible=!0,this.player.shadow.visible=!0),this.interiors?.current&&this.exitInterior(),this.ui.closeOverlay(),this.paused=!1,this.mode="menu",this.started=!1,this.keys.clear(),this.touch.x=0,this.touch.y=0,this.touch.sprint=!1,this.touch.jump=!1,this.gamepadButtons.clear(),this.player.endCinematic(),this.player.beginCinematic(170,96,210,250,.055),this.ui.showMenu(),this.ui.hideTransit(),this.audio.stopEngine()}setTimeOfDay(t){const e={dawn:8.2,day:12.2,dusk:18.8,night:22.4}[t];e!=null&&(this.settings.time=t,this.hour=e,this.totalHours=this.hour,this.clock=this.hour,this.city&&this.city.updateLighting(this.hour,this.weather,0),this.saveSettings())}requestPointerLock(){if(this.settings.mode!=="phone"&&this.canvas.requestPointerLock)try{const t=this.canvas.requestPointerLock();t?.catch&&t.catch(()=>{})}catch{}}}window.novaCity||(window.novaCity=new pv);
