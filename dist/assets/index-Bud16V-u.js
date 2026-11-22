(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const Xo="187",md=0,Ll=1,gd=2,Us=1,xd=2,Ps=3,Ai=0,fn=1,Qe=2,is=0,Ti=1,kn=2,Il=3,Dl=4,vd=5,ji=100,Md=101,_d=102,yd=103,wd=104,Sd=200,bd=201,Ed=202,Td=203,sh=204,ah=205,Ad=206,Rd=207,Cd=208,Pd=209,Ld=210,Id=211,Dd=212,Nd=213,Ud=214,qr=0,Yr=1,$r=2,Bs=3,Zr=4,Kr=5,Jr=6,Qr=7,rh=0,Od=1,Fd=2,Qn=0,oh=1,lh=2,ch=3,qo=4,hh=5,dh=6,uh=7,fh=300,ls=301,Gs=302,or=303,lr=304,Ba=1e3,Jn=1001,jr=1002,je=1003,zd=1004,ta=1005,mn=1006,cr=1007,hi=1008,Mn=1009,ph=1010,mh=1011,Hs=1012,Yo=1013,Bn=1014,Pn=1015,Gn=1016,$o=1017,Zo=1018,cs=1020,gh=35902,xh=35899,vh=1021,Mh=1022,Fn=1023,mi=1026,di=1027,Ko=1028,Jo=1029,Ri=1030,Qo=1031,jo=1033,Na=33776,Ua=33777,Oa=33778,Fa=33779,to=35840,eo=35841,no=35842,io=35843,so=36196,ao=37492,ro=37496,oo=37488,lo=37489,Ga=37490,co=37491,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,xo=37814,vo=37815,Mo=37816,_o=37817,yo=37818,wo=37819,So=37820,bo=37821,Eo=36492,To=36494,Ao=36495,Ro=36283,Co=36284,Ha=36285,Po=36286,kd=3200,Lo=0,Bd=1,ci="",rn="srgb",Va="srgb-linear",Wa="linear",Re="srgb",hr=7680,Gd=519,Hd=512,Vd=513,Wd=514,_h=515,Xd=516,qd=517,yh=518,wh=519,Sh=35044,Yd=35048,Nl="300 es",Ln=2e3,Vs=2001;function $d(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zd(){const s=Xa("canvas");return s.style.display="block",s}const Ul={};function qa(...s){const t="THREE."+s.shift();console.log(t,...s)}function bh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qt(...s){s=bh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function be(...s){s=bh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function za(...s){const t=s.join(" ");t in Ul||(Ul[t]=!0,Qt(...s))}function Kd(s,t,e){return new Promise(function(n,i){function a(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}const Jd={[qr]:qr,[$r]:Jr,[Zr]:Zr,[Bs]:Kr,[Yr]:Yr,[Jr]:$r,[Qr]:Qr,[Kr]:Bs};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const Os=Math.PI/180,hs=180/Math.PI;function ti(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[s&255]+sn[s>>8&255]+sn[s>>16&255]+sn[s>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function pe(s,t,e){return Math.max(t,Math.min(e,s))}function tl(s,t){return(s%t+t)%t}function Qd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function jd(s,t,e){return s!==t?(e-s)/(t-s):0}function Fs(s,t,e){return(1-e)*s+e*t}function tu(s,t,e,n){return Fs(s,t,1-Math.exp(-e*n))}function eu(s,t=1){return t-Math.abs(tl(s,t*2)-t)}function nu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function iu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function su(s,t){return s+Math.floor(Math.random()*(t-s+1))}function au(s,t){return s+Math.random()*(t-s)}function ru(s){return s*(.5-Math.random())}function ou(s){s!==void 0&&(Ol=s);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lu(s){return s*Os}function cu(s){return s*hs}function hu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function du(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Eh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uu(s,t,e,n,i){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),d=a((t-n)/2),f=r((t-n)/2),u=a((n-t)/2),p=r((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*u,o*c);break;case"YXY":s.set(l*u,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*u,o*h,o*c);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ja(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function el(s,t){if(t.constructor===Float32Array)return s;const e=ja(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function nl(s,t){if(t.constructor===Float32Array)return s;const e=ja(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const Be={DEG2RAD:Os,RAD2DEG:hs,generateUUID:ti,clamp:pe,euclideanModulo:tl,mapLinear:Qd,inverseLerp:jd,lerp:Fs,damp:tu,pingpong:eu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:au,randFloatSpread:ru,seededRandom:ou,degToRad:lu,radToDeg:cu,isPowerOfTwo:hu,ceilPowerOfTwo:du,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:uu,normalize:nl,denormalize:el},gl=class gl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*i+t.x,this.y=a*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gl.prototype.isVector2=!0;let lt=gl;class ps{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,a,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=a[r+0],u=a[r+1],p=a[r+2],x=a[r+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);g=Math.sin(g*M)/y,o=Math.sin(o*M)/y,l=l*g+f*o,c=c*g+u*o,h=h*g+p*o,d=d*g+x*o}else{l=l*g+f*o,c=c*g+u*o,h=h*g+p*o,d=d*g+x*o;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,a,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=a[r],f=a[r+1],u=a[r+2],p=a[r+3];return t[e]=o*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-o*u,t[e+2]=c*p+h*u+o*f-l*d,t[e+3]=h*p-o*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(a/2),f=l(n/2),u=l(i/2),p=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(a-c)*u,this._z=(r-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(a+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(a-c)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(r-i)/u,this._x=(a+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+i*c-a*l,this._y=i*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-a*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xl=class xl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*i,this.y=a[1]*e+a[4]*n+a[7]*i,this.z=a[2]*e+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*i-o*n),h=2*(o*e-a*i),d=2*(a*n-r*e);return this.x=e+l*c+r*d-o*h,this.y=n+l*h+o*c-a*d,this.z=i+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i,this.y=a[1]*e+a[5]*n+a[9]*i,this.z=a[2]*e+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-a*o,this.y=a*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xl.prototype.isVector3=!0;let N=xl;const dr=new N,Fl=new ps,vl=class vl{constructor(t,e,n,i,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c)}set(t,e,n,i,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],x=i[0],m=i[3],g=i[6],M=i[1],y=i[4],_=i[7],w=i[2],b=i[5],v=i[8];return a[0]=r*x+o*M+l*w,a[3]=r*m+o*y+l*b,a[6]=r*g+o*_+l*v,a[1]=c*x+h*M+d*w,a[4]=c*m+h*y+d*b,a[7]=c*g+h*_+d*v,a[2]=f*x+u*M+p*w,a[5]=f*m+u*y+p*b,a[8]=f*g+u*_+p*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+i*a*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,f=o*l-h*a,u=c*a-r*l,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*r)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*a-o*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return za("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ur.makeScale(t,e)),this}rotate(t){return za("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return za("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vl.prototype.isMatrix3=!0;let ee=vl;const ur=new ee,zl=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fu(){const s={enabled:!0,workingColorSpace:Va,spaces:{},convert:function(i,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Re&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[a].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Re&&(i.r=ss(i.r),i.g=ss(i.g),i.b=ss(i.b))),i},workingToColorSpace:function(i,a){return this.convert(i,this.workingColorSpace,a)},colorSpaceToWorking:function(i,a){return this.convert(i,a,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?Wa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,a=this.workingColorSpace){return i.fromArray(this.spaces[a].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,a,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Va]:{primaries:t,whitePoint:n,transfer:Wa,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),s}const Me=fu();function jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oi;class pu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Xa("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=jn(a[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mu=0;class il{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(fr(i[r].image)):a.push(fr(i[r]))}else a=fr(i);n.url=a}return e||(t.images[this.uuid]=n),n}}function fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}let gu=0;const pr=new N;class on extends Di{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=Jn,i=Jn,a=mn,r=hi,o=Fn,l=Mn,c=on.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=ti(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pr).x}get height(){return this.source.getSize(pr).y}get depth(){return this.source.getSize(pr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ba:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ba:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=fh;on.DEFAULT_ANISOTROPY=1;const Ml=class Ml{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,a;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(u+1)/2,w=(g+1)/2,b=(h+f)/4,v=(d+x)/4,S=(p+m)/4;return y>_&&y>w?y<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(y),i=b/n,a=v/n):_>w?_<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(_),n=b/i,a=S/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=v/a,i=S/a),this.set(n,i,a,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ml.prototype.isVector4=!0;let Fe=Ml;class xu extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];const i=n.count;for(let a=0;a<i;a++)this.textures[a]=new on({width:t,height:e,depth:n.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new il(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends xu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Th extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vu extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Qa=class Qa{constructor(t,e,n,i,a,r,o,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,a,r,o,l,c,h,d,f,u,p,x,m)}set(t,e,n,i,a,r,o,l,c,h,d,f,u,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=a,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qa().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),a=1/Fi.setFromMatrixColumn(t,1).length(),r=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const f=r*h,u=r*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=p+u*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f+x*o,e[4]=p*o-u,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-o,e[2]=u*o-p,e[6]=x+f*o,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f-x*o,e[4]=-r*d,e[8]=p+u*o,e[1]=u+p*o,e[5]=r*h,e[9]=x-f*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,u=r*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-p,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,u=r*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){const f=r*l,u=r*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=r*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mu,t,_u)}lookAt(t,e,n){const i=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ii.crossVectors(n,gn),ii.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ii.crossVectors(n,gn)),ii.normalize(),ea.crossVectors(gn,ii),i[0]=ii.x,i[4]=ea.x,i[8]=gn.x,i[1]=ii.y,i[5]=ea.y,i[9]=gn.y,i[2]=ii.z,i[6]=ea.z,i[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],y=n[7],_=n[11],w=n[15],b=i[0],v=i[4],S=i[8],I=i[12],R=i[1],L=i[5],z=i[9],k=i[13],D=i[2],H=i[6],X=i[10],U=i[14],K=i[3],V=i[7],Z=i[11],tt=i[15];return a[0]=r*b+o*R+l*D+c*K,a[4]=r*v+o*L+l*H+c*V,a[8]=r*S+o*z+l*X+c*Z,a[12]=r*I+o*k+l*U+c*tt,a[1]=h*b+d*R+f*D+u*K,a[5]=h*v+d*L+f*H+u*V,a[9]=h*S+d*z+f*X+u*Z,a[13]=h*I+d*k+f*U+u*tt,a[2]=p*b+x*R+m*D+g*K,a[6]=p*v+x*L+m*H+g*V,a[10]=p*S+x*z+m*X+g*Z,a[14]=p*I+x*k+m*U+g*tt,a[3]=M*b+y*R+_*D+w*K,a[7]=M*v+y*L+_*H+w*V,a[11]=M*S+y*z+_*X+w*Z,a[15]=M*I+y*k+_*U+w*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],M=l*u-c*f,y=o*u-c*d,_=o*f-l*d,w=r*u-c*h,b=r*f-l*h,v=r*d-o*h;return e*(x*M-m*y+g*_)-n*(p*M-m*w+g*b)+i*(p*y-x*w+g*v)-a*(p*_-x*b+m*v)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(r*h-o*c)-n*(a*h-o*l)+i*(a*c-r*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=e*o-n*r,y=e*l-i*r,_=e*c-a*r,w=n*l-i*o,b=n*c-a*o,v=i*c-a*l,S=h*x-d*p,I=h*m-f*p,R=h*g-u*p,L=d*m-f*x,z=d*g-u*x,k=f*g-u*m,D=M*k-y*z+_*L+w*R-b*I+v*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return t[0]=(o*k-l*z+c*L)*H,t[1]=(i*z-n*k-a*L)*H,t[2]=(x*v-m*b+g*w)*H,t[3]=(f*b-d*v-u*w)*H,t[4]=(l*R-r*k-c*I)*H,t[5]=(e*k-i*R+a*I)*H,t[6]=(m*_-p*v-g*y)*H,t[7]=(h*v-f*_+u*y)*H,t[8]=(r*z-o*R+c*S)*H,t[9]=(n*R-e*z-a*S)*H,t[10]=(p*b-x*_+g*M)*H,t[11]=(d*_-h*b-u*M)*H,t[12]=(o*I-r*L-l*S)*H,t[13]=(e*L-n*I+i*S)*H,t[14]=(x*y-p*w-m*M)*H,t[15]=(h*w-d*y+f*M)*H,this}scale(t){const e=this.elements,n=t.x,i=t.y,a=t.z;return e[0]*=n,e[4]*=i,e[8]*=a,e[1]*=n,e[5]*=i,e[9]*=a,e[2]*=n,e[6]*=i,e[10]*=a,e[3]*=n,e[7]*=i,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,a,r){return this.set(1,n,a,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,d=o+o,f=a*c,u=a*h,p=a*d,x=r*h,m=r*d,g=o*d,M=l*c,y=l*h,_=l*d,w=n.x,b=n.y,v=n.z;return i[0]=(1-(x+g))*w,i[1]=(u+_)*w,i[2]=(p-y)*w,i[3]=0,i[4]=(u-_)*b,i[5]=(1-(f+g))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(p+y)*v,i[9]=(m-M)*v,i[10]=(1-(f+x))*v,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),e.identity(),this;let r=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),l=Fi.set(i[8],i[9],i[10]).length();a<0&&(r=-r),En.copy(this);const c=1/r,h=1/o,d=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=l,this}makePerspective(t,e,n,i,a,r,o=Ln,l=!1){const c=this.elements,h=2*a/(e-t),d=2*a/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let p,x;if(l)p=a/(r-a),x=r*a/(r-a);else if(o===Ln)p=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Vs)p=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,a,r,o=Ln,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i);let p,x;if(l)p=1/(r-a),x=r/(r-a);else if(o===Ln)p=-2/(r-a),x=-(r+a)/(r-a);else if(o===Vs)p=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Qa.prototype.isMatrix4=!0;let ye=Qa;const Fi=new N,En=new ye,Mu=new N(0,0,0),_u=new N(1,1,1),ii=new N,ea=new N,gn=new N,Bl=new ye,Gl=new ps;class gi{constructor(t=0,e=0,n=0,i=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,a=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-pe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yu=0;const Hl=new N,zi=new ps,Xn=new ye,na=new N,xs=new N,wu=new N,Su=new ps,Vl=new N(1,0,0),Wl=new N(0,1,0),Xl=new N(0,0,1),ql={type:"added"},bu={type:"removed"},ki={type:"childadded",child:null},mr={type:"childremoved",child:null};class we extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new N,e=new gi,n=new ps,i=new N(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new ee}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(xs,na,this.up):Xn.lookAt(na,xs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Xn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ql),ki.child=t,this.dispatchEvent(ki),ki.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu),mr.child=t,this.dispatchEvent(mr),mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ql),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Su,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*n-a[8]*i,a[13]+=n-a[1]*e-a[5]*n-a[9]*i,a[14]+=i-a[2]*e-a[6]*n-a[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),f=r(t.skeletons),u=r(t.animations),p=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gt extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eu={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ia={h:0,s:0,l:0};function xr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Me.workingColorSpace){if(t=tl(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=xr(r,a,t+1/3),this.g=xr(r,a,t),this.b=xr(r,a,t-1/3)}return Me.colorSpaceToWorking(this,i),this}setStyle(t,e=rn){function n(a){a!==void 0&&parseFloat(a)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,e);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Me.workingToColorSpace(an.copy(this),t),Math.round(pe(an.r*255,0,255))*65536+Math.round(pe(an.g*255,0,255))*256+Math.round(pe(an.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,a=an.b,r=Math.max(n,i,a),o=Math.min(n,i,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-a)/d+(i<a?6:0);break;case i:l=(a-n)/d+2;break;case a:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=rn){Me.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(ia);const n=Fs(si.h,ia.h,e),i=Fs(si.s,ia.s,e),a=Fs(si.l,ia.l,e);return this.setHSL(n,i,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*i,this.g=a[1]*e+a[4]*n+a[7]*i,this.b=a[2]*e+a[5]*n+a[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Kt;Kt.NAMES=Rh;class sl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new sl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tu extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new N,qn=new N,vr=new N,Yn=new N,Bi=new N,Gi=new N,Yl=new N,Mr=new N,_r=new N,yr=new N,wr=new Fe,Sr=new Fe,br=new Fe;class wn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,e,n,i,a){Tn.subVectors(i,e),qn.subVectors(n,e),vr.subVectors(t,e);const r=Tn.dot(Tn),o=Tn.dot(qn),l=Tn.dot(vr),c=qn.dot(qn),h=qn.dot(vr),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,u=(c*l-o*h)*f,p=(r*h-o*l)*f;return a.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,a,r,o,l){return this.getBarycoord(t,e,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yn.x),l.addScaledVector(r,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,i,a,r){return wr.setScalar(0),Sr.setScalar(0),br.setScalar(0),wr.fromBufferAttribute(t,e),Sr.fromBufferAttribute(t,n),br.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(wr,a.x),r.addScaledVector(Sr,a.y),r.addScaledVector(br,a.z),r}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),qn.subVectors(t,e),Tn.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,a){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,i,a)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,a=this.c;let r,o;Bi.subVectors(i,n),Gi.subVectors(a,n),Mr.subVectors(t,n);const l=Bi.dot(Mr),c=Gi.dot(Mr);if(l<=0&&c<=0)return e.copy(n);_r.subVectors(t,i);const h=Bi.dot(_r),d=Gi.dot(_r);if(h>=0&&d<=h)return e.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),e.copy(n).addScaledVector(Bi,r);yr.subVectors(t,a);const u=Bi.dot(yr),p=Gi.dot(yr);if(p>=0&&u<=p)return e.copy(a);const x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Gi,o);const m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Yl.subVectors(a,i),o=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(Yl,o);const g=1/(m+x+f);return r=x*g,o=f*g,e.copy(n).addScaledVector(Bi,r).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ni{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,An):An.fromBufferAttribute(a,r),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const i=t.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),aa.subVectors(this.max,vs),Hi.subVectors(t.a,vs),Vi.subVectors(t.b,vs),Wi.subVectors(t.c,vs),ai.subVectors(Vi,Hi),ri.subVectors(Wi,Vi),yi.subVectors(Hi,Wi);let e=[0,-ai.z,ai.y,0,-ri.z,ri.y,0,-yi.z,yi.y,ai.z,0,-ai.x,ri.z,0,-ri.x,yi.z,0,-yi.x,-ai.y,ai.x,0,-ri.y,ri.x,0,-yi.y,yi.x,0];return!Er(e,Hi,Vi,Wi,aa)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,Hi,Vi,Wi,aa))?!1:(ra.crossVectors(ai,ri),e=[ra.x,ra.y,ra.z],Er(e,Hi,Vi,Wi,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,sa=new Ni,Hi=new N,Vi=new N,Wi=new N,ai=new N,ri=new N,yi=new N,vs=new N,aa=new N,ra=new N,wi=new N;function Er(s,t,e,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){wi.fromArray(s,a);const o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const He=new N,oa=new lt;let Au=0;class Xe extends Di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Au++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=t!==void 0?ja(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)oa.fromBufferAttribute(this,e),oa.applyMatrix3(t),this.setXY(e,oa.x,oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):el(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):nl(t,this.array)}}class Ch extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ph extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ru=new Ni,Ms=new N,Tr=new N;class Ui{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ru.setFromPoints(t).getCenter(n);let i=0;for(let a=0,r=t.length;a<r;a++)i=Math.max(i,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Tr)),this.expandByPoint(Ms.copy(t.center).sub(Tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Cu=0;const _n=new ye,Ar=new we,Xi=new N,xn=new Ni,_s=new Ni,Ke=new N;class Ie extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($d(t)?Ph:Ch)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ee().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Ar.lookAt(t),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,a=t.length;i<a;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Te(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const a=e[n];xn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(xn.min,_s.min),xn.expandByPoint(Ke),Ke.addVectors(xn.max,_s.max),xn.expandByPoint(Ke)):(xn.expandByPoint(_s.min),xn.expandByPoint(_s.max))}xn.getCenter(n);let i=0;for(let a=0,r=t.count;a<r;a++)Ke.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),Ke.add(Xi)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,a=e.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));const o=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)o[I]=new N,l[I]=new N;const h=new N,d=new N,f=new N,u=new lt,p=new lt,x=new lt,m=new N,g=new N;function M(I,R,L){c[I]=c[R]=c[L]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,R),f.fromBufferAttribute(n,L),u.fromBufferAttribute(a,I),p.fromBufferAttribute(a,R),x.fromBufferAttribute(a,L),d.sub(h),f.sub(h),p.sub(u),x.sub(u);const z=1/(p.x*x.y-x.x*p.y);isFinite(z)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(z),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(z),o[I].add(m),o[R].add(m),o[L].add(m),l[I].add(g),l[R].add(g),l[L].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,R=y.length;I<R;++I){const L=y[I],z=L.start,k=L.count;for(let D=z,H=z+k;D<H;D+=3)M(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new N,w=new N,b=new N,v=new N;function S(I){b.fromBufferAttribute(i,I),v.copy(b);const R=o[I];_.copy(R),_.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(v,R);const z=w.dot(l[I])<0?-1:1;r.setXYZW(I,_.x,_.y,_.z,z)}for(let I=0,R=n.count;I<R;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);const i=new N,a=new N,r=new N,o=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let f=0,u=t.count;f<u;f+=3){const p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,a),d.subVectors(i,a),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let u=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Xe(f,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,a=this.stride;i<a;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=$l(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=$l(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function $l(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=ti()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const cn=new N;class Ya{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?ja(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),a=this._normalize(a)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ya(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):el(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):nl(t,this.data.array)}}const Rr=new N,Lu=new N,Iu=new ee;class li{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Rr.subVectors(n,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Rr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Iu.getNormalMatrix(t),i=this.coplanarPoint(Rr).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Du=0;class xi extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ti,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=ah,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=i(t.textures),r=i(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Io extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qi;const ys=new N,Yi=new N,$i=new N,Zi=new lt,ws=new lt,Lh=new ye,la=new N,Ss=new N,ca=new N,Zl=new lt,Cr=new lt,Kl=new lt;class Jl extends we{constructor(t=new Io){if(super(),this.isSprite=!0,this.type="Sprite",qi===void 0){qi=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pu(e,5);qi.setIndex([0,1,2,0,2,3]),qi.setAttribute("position",new Ya(n,3,0,!1)),qi.setAttribute("uv",new Ya(n,2,3,!1))}this.geometry=qi,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-$i.z);const n=this.material.rotation;let i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));const r=this.center;ha(la.set(-.5,-.5,0),$i,r,Yi,i,a),ha(Ss.set(.5,-.5,0),$i,r,Yi,i,a),ha(ca.set(.5,.5,0),$i,r,Yi,i,a),Zl.set(0,0),Cr.set(1,0),Kl.set(1,1);let o=t.ray.intersectTriangle(la,Ss,ca,!1,ys);if(o===null&&(ha(Ss.set(-.5,.5,0),$i,r,Yi,i,a),Cr.set(0,1),o=t.ray.intersectTriangle(la,ca,Ss,!1,ys),o===null))return;const l=t.ray.origin.distanceTo(ys);l<t.near||l>t.far||e.push({distance:l,point:ys.clone(),uv:wn.getInterpolation(ys,la,Ss,ca,Zl,Cr,Kl,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function ha(s,t,e,n,i,a){Zi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ws.x=a*Zi.x-i*Zi.y,ws.y=i*Zi.x+a*Zi.y):ws.copy(Zi),s.copy(t),s.x+=ws.x,s.y+=ws.y,s.applyMatrix4(Lh)}const Zn=new N,Pr=new N,da=new N,ua=new N;class al{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pr.copy(t).add(e).multiplyScalar(.5),da.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(Pr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(da),o=ua.dot(this.direction),l=-ua.dot(da),c=ua.lengthSq(),h=Math.abs(1-r*r);let d,f,u,p;if(h>0)if(d=r*l-o,f=r*o-l,p=a*h,d>=0)if(f>=-p)if(f<=p){const x=1/h;d*=x,f*=x,u=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-a,-l),a),u=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),u=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Pr).addScaledVector(da,f),u}intersectSphere(t,e){if(t.radius<0)return null;Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,a=t.radius*t.radius;if(i>a)return null;const r=Math.sqrt(a-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,i,a){const r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,f=t.y-r.y,u=t.z-r.z,p=e.x-r.x,x=e.y-r.y,m=e.z-r.z,g=n.x-r.x,M=n.y-r.y,y=n.z-r.z,_=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let v,S,I,R,L,z,k,D,H,X,U,K;if(_>=w&&_>=b?(I=l,z=d,H=p,K=g,l>=0?(v=c,S=h,R=f,L=u,k=x,D=m,X=M,U=y):(v=h,S=c,R=u,L=f,k=m,D=x,X=y,U=M)):w>=b?(I=c,z=f,H=x,K=M,c>=0?(v=h,S=l,R=u,L=d,k=m,D=p,X=y,U=g):(v=l,S=h,R=d,L=u,k=p,D=m,X=g,U=y)):(I=h,z=u,H=m,K=y,h>=0?(v=l,S=c,R=d,L=f,k=p,D=x,X=g,U=M):(v=c,S=l,R=f,L=d,k=x,D=p,X=M,U=g)),I===0)return null;const V=v/I,Z=S/I,tt=1/I,vt=R-V*z,zt=L-Z*z,j=k-V*H,dt=D-Z*H,Dt=X-V*K,qt=U-Z*K,St=Dt*dt-qt*j,Xt=vt*qt-zt*Dt,le=j*zt-dt*vt;if(i){if(St<0||Xt<0||le<0)return null}else if((St<0||Xt<0||le<0)&&(St>0||Xt>0||le>0))return null;const Ut=St+Xt+le;if(Ut===0)return null;const jt=tt*(St*z+Xt*H+le*K);return(Ut>0?jt<0:jt>0)?null:this.at(jt/Ut,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ql=new ye,Si=new al,fa=new Ui,jl=new N,pa=new N,ma=new N,ga=new N,Lr=new N,xa=new N,tc=new N,va=new N;class A extends we{constructor(t=new Ie,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(a&&o){xa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Lr.fromBufferAttribute(d,t),r?xa.addScaledVector(Lr,h):xa.addScaledVector(Lr.sub(e),h))}e.add(xa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(a),Si.copy(t.ray).recast(t.near),!(fa.containsPoint(Si.origin)===!1&&(Si.intersectSphere(fa,jl)===null||Si.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Ql.copy(a).invert(),Si.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let i;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,u=a.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=r[m.materialIndex],M=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let _=M,w=y;_<w;_+=3){const b=o.getX(_),v=o.getX(_+1),S=o.getX(_+2);i=Ma(this,g,t,n,c,h,d,b,v,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=Ma(this,r,t,n,c,h,d,M,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,x=f.length;p<x;p++){const m=f[p],g=r[m.materialIndex],M=Math.max(m.start,u.start),y=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let _=M,w=y;_<w;_+=3){const b=_,v=_+1,S=_+2;i=Ma(this,g,t,n,c,h,d,b,v,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=m,y=m+1,_=m+2;i=Ma(this,r,t,n,c,h,d,M,y,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Nu(s,t,e,n,i,a,r,o){let l;if(t.side===fn?l=n.intersectTriangle(r,a,i,!0,o):l=n.intersectTriangle(i,a,r,t.side===Ai,o),l===null)return null;va.copy(o),va.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(va);return c<e.near||c>e.far?null:{distance:c,point:va.clone(),object:s}}function Ma(s,t,e,n,i,a,r,o,l,c){s.getVertexPosition(o,pa),s.getVertexPosition(l,ma),s.getVertexPosition(c,ga);const h=Nu(s,t,e,n,pa,ma,ga,tc);if(h){const d=new N;wn.getBarycoord(tc,pa,ma,ga,d),i&&(h.uv=wn.getInterpolatedAttribute(i,o,l,c,d,new lt)),a&&(h.uv1=wn.getInterpolatedAttribute(a,o,l,c,d,new lt)),r&&(h.normal=wn.getInterpolatedAttribute(r,o,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};wn.getNormal(pa,ma,ga,f.normal),h.face=f,h.barycoord=d}return h}class Ih extends on{constructor(t=null,e=1,n=1,i,a,r,o,l,c=je,h=je,d,f){super(null,r,o,l,c,h,i,a,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do extends Xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new ye,ec=new ye,_a=[],nc=new Ni,Uu=new ye,bs=new A,Es=new Ui;class De extends A{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Uu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),nc.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(nc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Es.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Ki),ec.multiplyMatrices(n,Ki),bs.matrixWorld=ec,bs.raycast(t,_a);for(let r=0,o=_a.length;r<o;r++){const l=_a[r];l.instanceId=a,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ih(new Float32Array(i*this.count),i,this.count,Ko,Pn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=i*t;return a[l]=o,a.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const bi=new Ui,Ou=new lt(.5,.5),ya=new N;class Ws{constructor(t=new li,e=new li,n=new li,i=new li,a=new li,r=new li){this.planes=[t,e,n,i,a,r]}set(t,e,n,i,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){const i=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],u=a[7],p=a[8],x=a[9],m=a[10],g=a[11],M=a[12],y=a[13],_=a[14],w=a[15];if(i[0].setComponents(c-r,u-h,g-p,w-M).normalize(),i[1].setComponents(c+r,u+h,g+p,w+M).normalize(),i[2].setComponents(c+o,u+d,g+x,w+y).normalize(),i[3].setComponents(c-o,u-d,g-x,w-y).normalize(),n)i[4].setComponents(l,f,m,_).normalize(),i[5].setComponents(c-l,u-f,g-m,w-_).normalize();else if(i[4].setComponents(c-l,u-f,g-m,w-_).normalize(),e===Ln)i[5].setComponents(c+l,u+f,g+m,w+_).normalize();else if(e===Vs)i[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);const e=Ou.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ya.x=i.normal.x>0?t.max.x:t.min.x,ya.y=i.normal.y>0?t.max.y:t.min.y,ya.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ic=new ye;class rl{constructor(){this.coordinateSystem=Ln,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const a=e[i];ic.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ws),n[i].setFromProjectionMatrix(ic,a.coordinateSystem,a.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ws),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new rl().copy(this)}}class Dh extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $a=new N,Za=new N,sc=new ye,Ts=new al,wa=new Ui,Ir=new N,ac=new N;class Fu extends we{constructor(t=new Ie,e=new Dh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,a=e.count;i<a;i++)$a.fromBufferAttribute(e,i-1),Za.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$a.distanceTo(Za);t.setAttribute("lineDistance",new Te(n,1))}else Qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=a,t.ray.intersectsSphere(wa)===!1)return;sc.copy(i).invert(),Ts.copy(t.ray).applyMatrix4(sc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const u=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let x=u,m=p-1;x<m;x+=c){const g=h.getX(x),M=h.getX(x+1),y=Sa(this,t,Ts,l,g,M,x);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(u),g=Sa(this,t,Ts,l,x,m,p-1);g&&e.push(g)}}else{const u=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let x=u,m=p-1;x<m;x+=c){const g=Sa(this,t,Ts,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=Sa(this,t,Ts,l,p-1,u,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Sa(s,t,e,n,i,a,r){const o=s.geometry.attributes.position;if($a.fromBufferAttribute(o,i),Za.fromBufferAttribute(o,a),e.distanceSqToSegment($a,Za,Ir,ac)>n)return;Ir.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ir);if(!(c<t.near||c>t.far))return{distance:c,point:ac.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const rc=new N,oc=new N;class zu extends Fu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,a=e.count;i<a;i+=2)rc.fromBufferAttribute(e,i),oc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rc.distanceTo(oc);t.setAttribute("lineDistance",new Te(n,1))}else Qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class as extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lc=new ye,No=new al,ba=new Ui,Ea=new N;class rs extends we{constructor(t=new Ie,e=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,a=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=a,t.ray.intersectsSphere(ba)===!1)return;lc.copy(i).invert(),No.copy(t.ray).applyMatrix4(lc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),u=Math.min(c.count,r.start+r.count);for(let p=f,x=u;p<x;p++){const m=c.getX(p);Ea.fromBufferAttribute(d,m),cc(Ea,m,l,i,t,e,this)}}else{const f=Math.max(0,r.start),u=Math.min(d.count,r.start+r.count);for(let p=f,x=u;p<x;p++)Ea.fromBufferAttribute(d,p),cc(Ea,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function cc(s,t,e,n,i,a,r){const o=No.distanceSqToPoint(s);if(o<e){const l=new N;No.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Nh extends on{constructor(t=[],e=ls,n,i,a,r,o,l,c,h){super(t,e,n,i,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ol extends on{constructor(t,e,n,i,a,r,o,l,c){super(t,e,n,i,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ds extends on{constructor(t,e,n=Bn,i,a,r,o=je,l=je,c,h=mi,d=1){if(h!==mi&&h!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,i,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Uh extends ds{constructor(t,e=Bn,n=ls,i,a,r=je,o=je,l,c=mi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Oh extends on{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class P extends Ie{constructor(t=1,e=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};const o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let f=0,u=0;p("z","y","x",-1,-1,n,e,t,r,a,0),p("z","y","x",1,-1,n,e,-t,r,a,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,a,4),p("x","y","z",-1,-1,t,e,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(d,2));function p(x,m,g,M,y,_,w,b,v,S,I){const R=_/v,L=w/S,z=_/2,k=w/2,D=b/2,H=v+1,X=S+1;let U=0,K=0;const V=new N;for(let Z=0;Z<X;Z++){const tt=Z*L-k;for(let vt=0;vt<H;vt++){const zt=vt*R-z;V[x]=zt*M,V[m]=tt*y,V[g]=D,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[g]=b>0?1:-1,h.push(V.x,V.y,V.z),d.push(vt/v),d.push(1-Z/S),U+=1}}for(let Z=0;Z<S;Z++)for(let tt=0;tt<v;tt++){const vt=f+tt+H*Z,zt=f+tt+H*(Z+1),j=f+(tt+1)+H*(Z+1),dt=f+(tt+1)+H*Z;l.push(vt,zt,dt),l.push(zt,j,dt),K+=6}o.addGroup(u,K,I),u+=K,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new P(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class un extends Ie{constructor(t=1,e=1,n=4,i=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:a},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),a=Math.max(1,Math.floor(a));const r=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=n*2+a,x=i+1,m=new N,g=new N;for(let M=0;M<=p;M++){let y=0,_=0,w=0,b=0;if(M<=n){const I=M/n,R=I*Math.PI/2;_=-h-t*Math.cos(R),w=t*Math.sin(R),b=-t*Math.cos(R),y=I*d}else if(M<=n+a){const I=(M-n)/a;_=-h+I*e,w=t,b=0,y=d+I*f}else{const I=(M-n-a)/n,R=I*Math.PI/2;_=h+t*Math.sin(R),w=t*Math.cos(R),b=t*Math.sin(R),y=d+f+I*d}const v=Math.max(0,Math.min(1,y/u));let S=0;M===0?S=.5/i:M===p&&(S=-.5/i);for(let I=0;I<=i;I++){const R=I/i,L=R*Math.PI*2,z=Math.sin(L),k=Math.cos(L);g.x=-w*k,g.y=_,g.z=w*z,o.push(g.x,g.y,g.z),m.set(-w*k,b,w*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,v)}if(M>0){const I=(M-1)*x;for(let R=0;R<i;R++){const L=I+R,z=I+R+1,k=M*x+R,D=M*x+R+1;r.push(L,z,k),r.push(z,D,k)}}}this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new un(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ci extends Ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const a=[],r=[],o=[],l=[],c=new N,h=new lt;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),r.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ft extends Ie{constructor(t=1,e=1,n=1,i=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),a=Math.floor(a);const h=[],d=[],f=[],u=[];let p=0;const x=[],m=n/2;let g=0;M(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Te(d,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(u,2));function M(){const _=new N,w=new N;let b=0;const v=(e-t)/n;for(let S=0;S<=a;S++){const I=[],R=S/a,L=R*(e-t)+t;for(let z=0;z<=i;z++){const k=z/i,D=k*l+o,H=Math.sin(D),X=Math.cos(D);w.x=L*H,w.y=-R*n+m,w.z=L*X,d.push(w.x,w.y,w.z),_.set(H,v,X).normalize(),f.push(_.x,_.y,_.z),u.push(k,1-R),I.push(p++)}x.push(I)}for(let S=0;S<i;S++)for(let I=0;I<a;I++){const R=x[I][S],L=x[I+1][S],z=x[I+1][S+1],k=x[I][S+1];(t>0||I!==0)&&(h.push(R,L,k),b+=3),(e>0||I!==a-1)&&(h.push(L,z,k),b+=3)}c.addGroup(g,b,0),g+=b}function y(_){const w=p,b=new lt,v=new N;let S=0;const I=_===!0?t:e,R=_===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*R,0),f.push(0,R,0),u.push(.5,.5),p++;const L=p;for(let z=0;z<=i;z++){const D=z/i*l+o,H=Math.cos(D),X=Math.sin(D);v.x=I*X,v.y=m*R,v.z=I*H,d.push(v.x,v.y,v.z),f.push(0,R,0),b.x=H*.5+.5,b.y=X*.5*R+.5,u.push(b.x,b.y),p++}for(let z=0;z<i;z++){const k=w+z,D=L+z;_===!0?h.push(D,D+1,k):h.push(D+1,D,k),S+=3}c.addGroup(g,S,_===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sn extends Ft{constructor(t=1,e=1,n=32,i=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,i,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Sn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tr extends Ie{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const a=[],r=[];o(i),c(n),h(),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(a.slice(),3)),this.setAttribute("uv",new Te(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new N,_=new N,w=new N;for(let b=0;b<e.length;b+=3)u(e[b+0],y),u(e[b+1],_),u(e[b+2],w),l(y,_,w,M)}function l(M,y,_,w){const b=w+1,v=[];for(let S=0;S<=b;S++){v[S]=[];const I=M.clone().lerp(_,S/b),R=y.clone().lerp(_,S/b),L=b-S;for(let z=0;z<=L;z++)z===0&&S===b?v[S][z]=I:v[S][z]=I.clone().lerp(R,z/L)}for(let S=0;S<b;S++)for(let I=0;I<2*(b-S)-1;I++){const R=Math.floor(I/2);I%2===0?(f(v[S][R+1]),f(v[S+1][R]),f(v[S][R])):(f(v[S][R+1]),f(v[S+1][R+1]),f(v[S+1][R]))}}function c(M){const y=new N;for(let _=0;_<a.length;_+=3)y.x=a[_+0],y.y=a[_+1],y.z=a[_+2],y.normalize().multiplyScalar(M),a[_+0]=y.x,a[_+1]=y.y,a[_+2]=y.z}function h(){const M=new N;for(let y=0;y<a.length;y+=3){M.x=a[y+0],M.y=a[y+1],M.z=a[y+2];const _=m(M)/2/Math.PI+.5,w=g(M)/Math.PI+.5;r.push(_,1-w)}p(),d()}function d(){for(let M=0;M<r.length;M+=6){const y=r[M+0],_=r[M+2],w=r[M+4],b=Math.max(y,_,w),v=Math.min(y,_,w);b>.9&&v<.1&&(y<.2&&(r[M+0]+=1),_<.2&&(r[M+2]+=1),w<.2&&(r[M+4]+=1))}}function f(M){a.push(M.x,M.y,M.z)}function u(M,y){const _=M*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function p(){const M=new N,y=new N,_=new N,w=new N,b=new lt,v=new lt,S=new lt;for(let I=0,R=0;I<a.length;I+=9,R+=6){M.set(a[I+0],a[I+1],a[I+2]),y.set(a[I+3],a[I+4],a[I+5]),_.set(a[I+6],a[I+7],a[I+8]),b.set(r[R+0],r[R+1]),v.set(r[R+2],r[R+3]),S.set(r[R+4],r[R+5]),w.copy(M).add(y).add(_).divideScalar(3);const L=m(w);x(b,R+0,M,L),x(v,R+2,y,L),x(S,R+4,_,L)}}function x(M,y,_,w){w<0&&M.x===1&&(r[y]=M.x-1),_.x===0&&_.z===0&&(r[y]=w/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.vertices,t.indices,t.radius,t.detail)}}class ll extends tr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ll(t.radius,t.detail)}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(i),e.push(a),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(a-1);const h=n[i],f=n[i+1]-h,u=(r-h)/f;return(i+u)/(a-1)}getTangent(t,e){let i=t-1e-4,a=t+1e-4;i<0&&(i=0),a>1&&(a=1);const r=this.getPoint(i),o=this.getPoint(a),l=e||(r.isVector2?new lt:new N);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,i=[],a=[],r=[],o=new N,l=new ye;for(let u=0;u<=t;u++){const p=u/t;i[u]=this.getTangentAt(p,new N)}a[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),a[0].crossVectors(i[0],o),r[0].crossVectors(i[0],a[0]);for(let u=1;u<=t;u++){if(a[u]=a[u-1].clone(),r[u]=r[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(pe(i[u-1].dot(i[u]),-1,1));a[u].applyMatrix4(l.makeRotationAxis(o,p))}r[u].crossVectors(i[u],a[u])}if(e===!0){let u=Math.acos(pe(a[0].dot(a[t]),-1,1));u/=t,i[0].dot(o.crossVectors(a[0],a[t]))>0&&(u=-u);for(let p=1;p<=t;p++)a[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),r[p].crossVectors(i[p],a[p])}return{tangents:i,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class cl extends Vn{constructor(t=0,e=0,n=1,i=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const n=e,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(r?a=0:a=i),this.aClockwise===!0&&!r&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ku extends cl{constructor(t,e,n,i,a,r){super(t,e,n,n,i,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function hl(){let s=0,t=0,e=0,n=0;function i(a,r,o,l){s=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){i(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,d){let f=(r-a)/c-(o-a)/(c+h)+(o-r)/h,u=(o-r)/h-(l-r)/(h+d)+(l-o)/d;f*=h,u*=h,i(r,o,f,u)},calc:function(a){const r=a*a,o=r*a;return s+t*a+e*r+n*o}}}const hc=new N,dc=new N,Dr=new hl,Nr=new hl,Ur=new hl;class Bu extends Vn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,a=i.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%a]:(dc.subVectors(i[0],i[1]).add(i[0]),c=dc);const d=i[o%a],f=i[(o+1)%a];if(this.closed||o+2<a?h=i[(o+2)%a]:(hc.subVectors(i[a-1],i[a-2]).add(i[a-1]),h=hc),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Dr.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),Nr.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),Ur.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Dr.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Nr.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Ur.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Dr.calc(l),Nr.calc(l),Ur.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function uc(s,t,e,n,i){const a=(n-t)*.5,r=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*s+e}function Gu(s,t){const e=1-s;return e*e*t}function Hu(s,t){return 2*(1-s)*s*t}function Vu(s,t){return s*s*t}function zs(s,t,e,n){return Gu(s,t)+Hu(s,e)+Vu(s,n)}function Wu(s,t){const e=1-s;return e*e*e*t}function Xu(s,t){const e=1-s;return 3*e*e*s*t}function qu(s,t){return 3*(1-s)*s*s*t}function Yu(s,t){return s*s*s*t}function ks(s,t,e,n,i){return Wu(s,t)+Xu(s,e)+qu(s,n)+Yu(s,i)}class Fh extends Vn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ks(t,i.x,a.x,r.x,o.x),ks(t,i.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $u extends Vn{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(ks(t,i.x,a.x,r.x,o.x),ks(t,i.y,a.y,r.y,o.y),ks(t,i.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends Vn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zu extends Vn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends Vn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(zs(t,i.x,a.x,r.x),zs(t,i.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ku extends Vn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,a=this.v1,r=this.v2;return n.set(zs(t,i.x,a.x,r.x),zs(t,i.y,a.y,r.y),zs(t,i.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,a=(i.length-1)*t,r=Math.floor(a),o=a-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(uc(o,l.x,c.x,h.x,d.x),uc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:ku,CatmullRomCurve3:Bu,CubicBezierCurve:Fh,CubicBezierCurve3:$u,EllipseCurve:cl,LineCurve:zh,LineCurve3:Zu,QuadraticBezierCurve:kh,QuadraticBezierCurve3:Ku,SplineCurve:Bh});class Ju extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let a=0;for(;a<i.length;){if(i[a]>=n){const r=i[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,a=this.curves;i<a.length;i++){const r=a[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Uo[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class fc extends Ju{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zh(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const a=new kh(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(a),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,a,r){const o=new Fh(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,a,r),this}absarc(t,e,n,i,a,r){return this.absellipse(t,e,n,n,i,a,r),this}ellipse(t,e,n,i,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,a,r,o,l),this}absellipse(t,e,n,i,a,r,o,l){const c=new cl(t,e,n,i,a,r,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gh extends fc{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new fc().fromJSON(i))}return this}}function Qu(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let a=Hh(s,0,i,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=sf(s,t,a,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let f=e;f<i;f+=e){const u=s[f],p=s[f+1];u<o&&(o=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Xs(a,r,e,o,l,c,0),r}function Hh(s,t,e,n,i){let a;if(i===mf(s,t,e,n)>0)for(let r=t;r<e;r+=n)a=pc(r/n|0,s[r],s[r+1],a);else for(let r=e-n;r>=t;r-=n)a=pc(r/n|0,s[r],s[r+1],a);return a&&us(a,a.next)&&(Ys(a),a=a.next),a}function Pi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(us(e,e.next)||ze(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xs(s,t,e,n,i,a,r){if(!s)return;!r&&a&&cf(s,n,i,a);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(a?tf(s,n,i,a):ju(s)){t.push(l.i,s.i,c.i),Ys(s),s=c.next,o=c.next;continue}if(s=c,s===o){r?r===1?(s=ef(Pi(s),t),Xs(s,t,e,n,i,a,2)):r===2&&nf(s,t,e,n,i,a):Xs(Pi(s),t,e,n,i,a,1);break}}}function ju(s){const t=s.prev,e=s,n=s.next;if(ze(t,e,n)>=0)return!1;const i=t.x,a=e.x,r=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,a,r),d=Math.min(o,l,c),f=Math.max(i,a,r),u=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Ls(i,o,a,l,r,c,p.x,p.y)&&ze(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tf(s,t,e,n){const i=s.prev,a=s,r=s.next;if(ze(i,a,r)>=0)return!1;const o=i.x,l=a.x,c=r.x,h=i.y,d=a.y,f=r.y,u=Math.min(o,l,c),p=Math.min(h,d,f),x=Math.max(o,l,c),m=Math.max(h,d,f),g=Oo(u,p,t,e,n),M=Oo(x,m,t,e,n);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=g&&_&&_.z<=M;){if(y.x>=u&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==r&&Ls(o,h,l,d,c,f,y.x,y.y)&&ze(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=u&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==r&&Ls(o,h,l,d,c,f,_.x,_.y)&&ze(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=g;){if(y.x>=u&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==r&&Ls(o,h,l,d,c,f,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=M;){if(_.x>=u&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==r&&Ls(o,h,l,d,c,f,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ef(s,t){let e=s;do{const n=e.prev,i=e.next.next;!us(n,i)&&Wh(n,e,e.next,i)&&qs(n,i)&&qs(i,n)&&(t.push(n.i,e.i,i.i),Ys(e),Ys(e.next),e=s=i),e=e.next}while(e!==s);return Pi(e)}function nf(s,t,e,n,i,a){let r=s;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&uf(r,o)){let l=Xh(r,o);r=Pi(r,r.next),l=Pi(l,l.next),Xs(r,t,e,n,i,a,0),Xs(l,t,e,n,i,a,0);return}o=o.next}r=r.next}while(r!==s)}function sf(s,t,e,n){const i=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*n,l=a<r-1?t[a+1]*n:s.length,c=Hh(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(df(c))}i.sort(af);for(let a=0;a<i.length;a++)e=rf(i[a],e);return e}function af(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function rf(s,t){const e=of(s,t);if(!e)return t;const n=Xh(e,s);return Pi(n,n.next),Pi(e,e.next)}function of(s,t){let e=t;const n=s.x,i=s.y;let a=-1/0,r;if(us(s,e))return e;do{if(us(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>a&&(a=d,r=e.x<e.next.x?e:e.next,d===n))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vh(i<c?n:a,i,l,c,i<c?a:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);qs(e,s)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&lf(r,e)))&&(r=e,h=d)}e=e.next}while(e!==o);return r}function lf(s,t){return ze(s.prev,s,t.prev)<0&&ze(t.next,s,s.next)<0}function cf(s,t,e,n){let i=s;do i.z===0&&(i.z=Oo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hf(i)}function hf(s){let t,e=1;do{let n=s,i;s=null;let a=null;for(t=0;n;){t++;let r=n,o=0;for(let c=0;c<e&&(o++,r=r.nextZ,!!r);c++);let l=e;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,l--),a?a.nextZ=i:s=i,i.prevZ=a,a=i;n=r}a.nextZ=null,e*=2}while(t>1);return s}function Oo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function df(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Vh(s,t,e,n,i,a,r,o){return(i-r)*(t-o)>=(s-r)*(a-o)&&(s-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(i-r)*(n-o)}function Ls(s,t,e,n,i,a,r,o){return!(s===r&&t===o)&&Vh(s,t,e,n,i,a,r,o)}function uf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ff(s,t)&&(qs(s,t)&&qs(t,s)&&pf(s,t)&&(ze(s.prev,s,t.prev)||ze(s,t.prev,t))||us(s,t)&&ze(s.prev,s,s.next)>0&&ze(t.prev,t,t.next)>0)}function ze(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function us(s,t){return s.x===t.x&&s.y===t.y}function Wh(s,t,e,n){const i=Aa(ze(s,t,e)),a=Aa(ze(s,t,n)),r=Aa(ze(e,n,s)),o=Aa(ze(e,n,t));return!!(i!==a&&r!==o||i===0&&Ta(s,e,t)||a===0&&Ta(s,n,t)||r===0&&Ta(e,s,n)||o===0&&Ta(e,t,n))}function Ta(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Aa(s){return s>0?1:s<0?-1:0}function ff(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Wh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qs(s,t){return ze(s.prev,s,s.next)<0?ze(s,t,s.next)>=0&&ze(s,s.prev,t)>=0:ze(s,t,s.prev)<0||ze(s,s.next,t)<0}function pf(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,a=(s.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&i<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Xh(s,t){const e=Fo(s.i,s.x,s.y),n=Fo(t.i,t.x,t.y),i=s.next,a=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function pc(s,t,e,n){const i=Fo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ys(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mf(s,t,e,n){let i=0;for(let a=t,r=e-n;a<e;a+=n)i+=(s[r]-s[a])*(s[a+1]+s[r+1]),r=a;return i}class gf{static triangulate(t,e,n=2){return Qu(t,e,n)}}class ns{static area(t){const e=t.length;let n=0;for(let i=e-1,a=0;a<e;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return ns.area(t)<0}static triangulateShape(t,e){const n=[],i=[],a=[];mc(t),gc(n,t);let r=t.length;e.forEach(mc);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,gc(n,e[l]);const o=gf.triangulate(n,i);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function mc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function gc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class dl extends Ie{constructor(t=new Gh([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new Te(i,3)),this.setAttribute("uv",new Te(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:xf;let y,_=!1,w,b,v,S;if(g){y=g.getSpacedPoints(h),_=!0,f=!1;const ot=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,ot),b=new N,v=new N,S=new N}f||(m=0,u=0,p=0,x=0);const I=o.extractPoints(c);let R=I.shape;const L=I.holes;if(!ns.isClockWise(R)){R=R.reverse();for(let ot=0,ft=L.length;ot<ft;ot++){const pt=L[ot];ns.isClockWise(pt)&&(L[ot]=pt.reverse())}}function k(ot){const pt=10000000000000001e-36;let Ct=ot[0];for(let _t=1;_t<=ot.length;_t++){const te=_t%ot.length,Ht=ot[te],he=Ht.x-Ct.x,fe=Ht.y-Ct.y,me=he*he+fe*fe,G=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs(Ct.x),Math.abs(Ct.y)),Ue=pt*G*G;if(me<=Ue){ot.splice(te,1),_t--;continue}Ct=Ht}}k(R),L.forEach(k);const D=L.length,H=R;for(let ot=0;ot<D;ot++){const ft=L[ot];R=R.concat(ft)}function X(ot,ft,pt){return ft||be("ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(ft,pt)}const U=R.length;function K(ot,ft,pt){let Ct,_t,te;const Ht=ot.x-ft.x,he=ot.y-ft.y,fe=pt.x-ot.x,me=pt.y-ot.y,G=Ht*Ht+he*he,Ue=Ht*me-he*fe;if(Math.abs(Ue)>Number.EPSILON){const se=Math.sqrt(G),J=Math.sqrt(fe*fe+me*me),W=ft.x-he/se,Rt=ft.y+Ht/se,gt=pt.x-me/J,kt=pt.y+fe/J,C=((gt-W)*me-(kt-Rt)*fe)/(Ht*me-he*fe);Ct=W+Ht*C-ot.x,_t=Rt+he*C-ot.y;const E=Ct*Ct+_t*_t;if(E<=2)return new lt(Ct,_t);te=Math.sqrt(E/2)}else{let se=!1;Ht>Number.EPSILON?fe>Number.EPSILON&&(se=!0):Ht<-Number.EPSILON?fe<-Number.EPSILON&&(se=!0):Math.sign(he)===Math.sign(me)&&(se=!0),se?(Ct=-he,_t=Ht,te=Math.sqrt(G)):(Ct=Ht,_t=he,te=Math.sqrt(G/2))}return new lt(Ct/te,_t/te)}const V=[];for(let ot=0,ft=H.length,pt=ft-1,Ct=ot+1;ot<ft;ot++,pt++,Ct++)pt===ft&&(pt=0),Ct===ft&&(Ct=0),V[ot]=K(H[ot],H[pt],H[Ct]);const Z=[];let tt,vt=V.concat();for(let ot=0,ft=D;ot<ft;ot++){const pt=L[ot];tt=[];for(let Ct=0,_t=pt.length,te=_t-1,Ht=Ct+1;Ct<_t;Ct++,te++,Ht++)te===_t&&(te=0),Ht===_t&&(Ht=0),tt[Ct]=K(pt[Ct],pt[te],pt[Ht]);Z.push(tt),vt=vt.concat(tt)}let zt;if(m===0)zt=ns.triangulateShape(H,L);else{const ot=[],ft=[];for(let pt=0;pt<m;pt++){const Ct=pt/m,_t=u*Math.cos(Ct*Math.PI/2),te=p*Math.sin(Ct*Math.PI/2)+x;for(let Ht=0,he=H.length;Ht<he;Ht++){const fe=X(H[Ht],V[Ht],te);Xt(fe.x,fe.y,-_t),Ct===0&&ot.push(fe)}for(let Ht=0,he=D;Ht<he;Ht++){const fe=L[Ht];tt=Z[Ht];const me=[];for(let G=0,Ue=fe.length;G<Ue;G++){const se=X(fe[G],tt[G],te);Xt(se.x,se.y,-_t),Ct===0&&me.push(se)}Ct===0&&ft.push(me)}}zt=ns.triangulateShape(ot,ft)}const j=zt.length,dt=p+x;for(let ot=0;ot<U;ot++){const ft=f?X(R[ot],vt[ot],dt):R[ot];_?(v.copy(w.normals[0]).multiplyScalar(ft.x),b.copy(w.binormals[0]).multiplyScalar(ft.y),S.copy(y[0]).add(v).add(b),Xt(S.x,S.y,S.z)):Xt(ft.x,ft.y,0)}for(let ot=1;ot<=h;ot++)for(let ft=0;ft<U;ft++){const pt=f?X(R[ft],vt[ft],dt):R[ft];_?(v.copy(w.normals[ot]).multiplyScalar(pt.x),b.copy(w.binormals[ot]).multiplyScalar(pt.y),S.copy(y[ot]).add(v).add(b),Xt(S.x,S.y,S.z)):Xt(pt.x,pt.y,d/h*ot)}for(let ot=m-1;ot>=0;ot--){const ft=ot/m,pt=u*Math.cos(ft*Math.PI/2),Ct=p*Math.sin(ft*Math.PI/2)+x;for(let _t=0,te=H.length;_t<te;_t++){const Ht=X(H[_t],V[_t],Ct);Xt(Ht.x,Ht.y,d+pt)}for(let _t=0,te=L.length;_t<te;_t++){const Ht=L[_t];tt=Z[_t];for(let he=0,fe=Ht.length;he<fe;he++){const me=X(Ht[he],tt[he],Ct);_?Xt(me.x,me.y+y[h-1].y,y[h-1].x+pt):Xt(me.x,me.y,d+pt)}}}Dt(),qt();function Dt(){const ot=i.length/3;if(f){let ft=0,pt=U*ft;for(let Ct=0;Ct<j;Ct++){const _t=zt[Ct];le(_t[2]+pt,_t[1]+pt,_t[0]+pt)}ft=h+m*2,pt=U*ft;for(let Ct=0;Ct<j;Ct++){const _t=zt[Ct];le(_t[0]+pt,_t[1]+pt,_t[2]+pt)}}else{for(let ft=0;ft<j;ft++){const pt=zt[ft];le(pt[2],pt[1],pt[0])}for(let ft=0;ft<j;ft++){const pt=zt[ft];le(pt[0]+U*h,pt[1]+U*h,pt[2]+U*h)}}n.addGroup(ot,i.length/3-ot,0)}function qt(){const ot=i.length/3;let ft=0;St(H,ft),ft+=H.length;for(let pt=0,Ct=L.length;pt<Ct;pt++){const _t=L[pt];St(_t,ft),ft+=_t.length}n.addGroup(ot,i.length/3-ot,1)}function St(ot,ft){let pt=ot.length;for(;--pt>=0;){const Ct=pt;let _t=pt-1;_t<0&&(_t=ot.length-1);for(let te=0,Ht=h+m*2;te<Ht;te++){const he=U*te,fe=U*(te+1),me=ft+Ct+he,G=ft+_t+he,Ue=ft+_t+fe,se=ft+Ct+fe;Ut(me,G,Ue,se)}}}function Xt(ot,ft,pt){l.push(ot),l.push(ft),l.push(pt)}function le(ot,ft,pt){jt(ot),jt(ft),jt(pt);const Ct=i.length/3,_t=M.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);ce(_t[0]),ce(_t[1]),ce(_t[2])}function Ut(ot,ft,pt,Ct){jt(ot),jt(ft),jt(Ct),jt(ft),jt(pt),jt(Ct);const _t=i.length/3,te=M.generateSideWallUV(n,i,_t-6,_t-3,_t-2,_t-1);ce(te[0]),ce(te[1]),ce(te[3]),ce(te[1]),ce(te[2]),ce(te[3])}function jt(ot){i.push(l[ot*3+0]),i.push(l[ot*3+1]),i.push(l[ot*3+2])}function ce(ot){a.push(ot.x),a.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vf(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Uo[i.type]().fromJSON(i)),new dl(n,t.options)}}const xf={generateTopUV:function(s,t,e,n,i){const a=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(a,r),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],p=t[i*3+2],x=t[a*3],m=t[a*3+1],g=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new lt(r,1-l),new lt(c,1-d),new lt(f,1-p),new lt(x,1-g)]:[new lt(o,1-l),new lt(h,1-d),new lt(u,1-p),new lt(m,1-g)]}};function vf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const a=s[n];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Zs extends tr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zs(t.radius,t.detail)}}class ae extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,f=e/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const M=g*f-r;for(let y=0;y<c;y++){const _=y*d-a;p.push(_,-M,0),x.push(0,0,1),m.push(y/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const y=M+c*g,_=M+c*(g+1),w=M+1+c*(g+1),b=M+1+c*g;u.push(y,_,b),u.push(_,w,b)}this.setIndex(u),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.widthSegments,t.heightSegments)}}class er extends Ie{constructor(t=.5,e=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=t;const f=(e-t)/i,u=new N,p=new lt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const g=a+m/n*r;u.x=d*Math.cos(g),u.y=d*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}d+=f}for(let x=0;x<i;x++){const m=x*(n+1);for(let g=0;g<n;g++){const M=g+m,y=M,_=M+n+1,w=M+n+2,b=M+1;o.push(y,_,b),o.push(_,w,b)}}this.setIndex(o),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ce extends Ie{constructor(t=1,e=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new N,f=new N,u=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const M=[],y=g/n,_=r+y*o,w=t*Math.cos(_),b=Math.sqrt(t*t-w*w);let v=0;g===0&&r===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){const I=S/e,R=i+I*a;d.x=-b*Math.cos(R),d.y=w,d.z=b*Math.sin(R),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(I+v,1-y),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const y=h[g][M+1],_=h[g][M],w=h[g+1][M],b=h[g+1][M+1];(g!==0||r>0)&&u.push(y,_,b),(g!==n-1||l<Math.PI)&&u.push(_,w,b)}this.setIndex(u),this.setAttribute("position",new Te(p,3)),this.setAttribute("normal",new Te(x,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function fs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(xc(i))i.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(xc(i[0])){const a=[];for(let r=0,o=i.length;r<o;r++)a[r]=i[r].clone();t[e][n]=a}else t[e][n]=i.slice();else t[e][n]=i}}return t}function hn(s){const t={};for(let e=0;e<s.length;e++){const n=fs(s[e]);for(const i in n)t[i]=n[i]}return t}function xc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Mf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function qh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const _f={clone:fs,merge:hn};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new N().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Sf extends Hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class O extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bf extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ef extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ks extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Tf extends Ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Or=new ye,vc=new N,Mc=new N;class ul{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ws,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Or.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Or,t.coordinateSystem,t.reversedDepth);const a=this._frameExtents,r=i?i.z/a.x:1,o=i?i.w/a.y:1,l=i?i.x/a.x:0,c=i?i.y/a.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ra=new N,Ca=new ps,Nn=new N;class Yh extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ra,Ca,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ra,Ca,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const oi=new N,_c=new lt,yc=new lt;class vn extends Yh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,_c,yc),e.subVectors(yc,_c)}setViewOffset(t,e,n,i,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,a=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Af extends ul{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=hs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,a=t.distance||e.far;(n!==e.fov||i!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=i,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Rf extends Ks{constructor(t,e,n=0,i=Math.PI/3,a=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.distance=n,this.angle=i,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Af}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Cf extends ul{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class Li extends Ks{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class $h extends Yh{constructor(t=-1,e=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pf extends ul{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lf extends Ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Pf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class If extends Ks{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ji=-90,Qi=1;class zo extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new vn(Ji,Qi,t,e);i.layers=this.layers,this.add(i);const a=new vn(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const r=new vn(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const o=new vn(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const l=new vn(Ji,Qi,t,e);l.layers=this.layers,this.add(l);const c=new vn(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Df extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Nf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Qt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wc(s,t,e,n){const i=Uf(n);switch(e){case vh:return s*t;case Ko:return s*t/i.components*i.byteLength;case Jo:return s*t/i.components*i.byteLength;case Ri:return s*t*2/i.components*i.byteLength;case Qo:return s*t*2/i.components*i.byteLength;case Mh:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case jo:return s*t*4/i.components*i.byteLength;case Na:case Ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Oa:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eo:case io:return Math.max(s,16)*Math.max(t,8)/4;case to:case no:return Math.max(s,8)*Math.max(t,8)/2;case so:case ao:case oo:case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ro:case Ga:case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Eo:case To:case Ao:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ro:case Co:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ha:case Po:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uf(s){switch(s){case Mn:case ph:return{byteLength:1,components:1};case Hs:case mh:case Gn:return{byteLength:2,components:1};case $o:case Zo:return{byteLength:2,components:4};case Bn:case Yo:case Pn:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window<"u"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);function Zh(){let s=null,t=!1,e=null,n=null;function i(a,r){n=s.requestAnimationFrame(i),e(a,r)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function Of(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){const p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){const x=d[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:a,update:r}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#endif`,Np=`uniform sampler2D dfgLUT;
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
}`,Up=`
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform float backgroundBlurriness;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
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
}`,Vm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,r0=`#define STANDARD
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
}`,o0=`#define STANDARD
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,u0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Ff,alphahash_pars_fragment:zf,alphamap_fragment:kf,alphamap_pars_fragment:Bf,alphatest_fragment:Gf,alphatest_pars_fragment:Hf,aomap_fragment:Vf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:$f,bsdfs:Zf,iridescence_fragment:Kf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:ap,common:rp,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:dp,colorspace_fragment:up,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Rp,envmap_vertex:vp,fog_vertex:Mp,fog_pars_vertex:_p,fog_fragment:yp,fog_pars_fragment:wp,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:bp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ap,lights_toon_fragment:Cp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Dp,lights_physical_pars_fragment:Np,lights_fragment_begin:Up,lights_fragment_maps:Op,lights_fragment_end:Fp,lightprobes_pars_fragment:zp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Hp,map_fragment:Vp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Zp,morphcolor_vertex:Kp,morphnormal_vertex:Jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:jp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:hm,packing:dm,premultiplied_alpha_fragment:um,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:Mm,shadowmap_vertex:_m,shadowmask_pars_fragment:ym,skinbase_vertex:wm,skinning_pars_vertex:Sm,skinning_vertex:bm,skinnormal_vertex:Em,specularmap_fragment:Tm,specularmap_pars_fragment:Am,tonemapping_fragment:Rm,tonemapping_pars_fragment:Cm,transmission_fragment:Pm,transmission_pars_fragment:Lm,uv_pars_fragment:Im,uv_pars_vertex:Dm,uv_vertex:Nm,worldpos_vertex:Um,background_vert:Om,background_frag:Fm,backgroundCube_vert:zm,backgroundCube_frag:km,cube_vert:Bm,cube_frag:Gm,depth_vert:Hm,depth_frag:Vm,distance_vert:Wm,distance_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:$m,linedashed_frag:Zm,meshbasic_vert:Km,meshbasic_frag:Jm,meshlambert_vert:Qm,meshlambert_frag:jm,meshmatcap_vert:t0,meshmatcap_frag:e0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:a0,meshphysical_vert:r0,meshphysical_frag:o0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:d0,shadow_vert:u0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},It={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},On={basic:{uniforms:hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:hn([It.points,It.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:hn([It.common,It.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:hn([It.sprite,It.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:hn([It.common,It.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:hn([It.lights,It.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};On.physical={uniforms:hn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Pa={r:0,b:0,g:0},g0=new ye,Kh=new ee;Kh.set(-1,0,0,0,1,0,0,0,1);function x0(s,t,e,n,i,a){const r=new Kt(0);let o=i===!0?0:1,l,c,h=null,d=0,f=null;function u(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const _=M.backgroundBlurriness>0;y=t.get(y,_)}return y}function p(M){let y=!1;const _=u(M);_===null?m(r,o):_&&_.isColor&&(m(_,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,y){const _=u(y);_&&_.isCubeTexture?(c===void 0&&(c=new A(new P(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:fs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kh),c.material.toneMapped=Me.getTransfer(_.colorSpace)!==Re,(h!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new A(new ae(2,2),new Hn({name:"BackgroundMaterial",uniforms:fs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Me.getTransfer(_.colorSpace)!==Re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,y){M.getRGB(Pa,qh(s)),e.buffers.color.setClear(Pa.r,Pa.g,Pa.b,y,a)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(M,y=1){r.set(M),o=y,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(r,o)},render:p,addToRenderList:x,dispose:g}}function v0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let a=i,r=!1;function o(L,z,k,D,H){let X=!1;const U=d(L,D,k,z);a!==U&&(a=U,c(a.object)),X=u(L,D,k,H),X&&p(L,D,k,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,_(L,z,k,D),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,z,k,D){const H=D.wireframe===!0;let X=n[z.id];X===void 0&&(X={},n[z.id]=X);const U=L.isInstancedMesh===!0?L.id:0;let K=X[U];K===void 0&&(K={},X[U]=K);let V=K[k.id];V===void 0&&(V={},K[k.id]=V);let Z=V[H];return Z===void 0&&(Z=f(l()),V[H]=Z),Z}function f(L){const z=[],k=[],D=[];for(let H=0;H<e;H++)z[H]=0,k[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:D,object:L,attributes:{},index:null}}function u(L,z,k,D){const H=a.attributes,X=z.attributes;let U=0;const K=k.getAttributes();for(const V in K)if(K[V].location>=0){const tt=H[V];let vt=X[V];if(vt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(vt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(vt=L.instanceColor)),tt===void 0||tt.attribute!==vt||vt&&tt.data!==vt.data)return!0;U++}return a.attributesNum!==U||a.index!==D}function p(L,z,k,D){const H={},X=z.attributes;let U=0;const K=k.getAttributes();for(const V in K)if(K[V].location>=0){let tt=X[V];tt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));const vt={};vt.attribute=tt,tt&&tt.data&&(vt.data=tt.data),H[V]=vt,U++}a.attributes=H,a.attributesNum=U,a.index=D}function x(){const L=a.newAttributes;for(let z=0,k=L.length;z<k;z++)L[z]=0}function m(L){g(L,0)}function g(L,z){const k=a.newAttributes,D=a.enabledAttributes,H=a.attributeDivisors;k[L]=1,D[L]===0&&(s.enableVertexAttribArray(L),D[L]=1),H[L]!==z&&(s.vertexAttribDivisor(L,z),H[L]=z)}function M(){const L=a.newAttributes,z=a.enabledAttributes;for(let k=0,D=z.length;k<D;k++)z[k]!==L[k]&&(s.disableVertexAttribArray(k),z[k]=0)}function y(L,z,k,D,H,X,U){U===!0?s.vertexAttribIPointer(L,z,k,H,X):s.vertexAttribPointer(L,z,k,D,H,X)}function _(L,z,k,D){x();const H=D.attributes,X=k.getAttributes(),U=z.defaultAttributeValues;for(const K in X){const V=X[K];if(V.location>=0){let Z=H[K];if(Z===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const tt=Z.normalized,vt=Z.itemSize,zt=t.get(Z);if(zt===void 0)continue;const j=zt.buffer,dt=zt.type,Dt=zt.bytesPerElement,qt=dt===s.INT||dt===s.UNSIGNED_INT||Z.gpuType===Yo;if(Z.isInterleavedBufferAttribute){const St=Z.data,Xt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,le=Z.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Ut=0;Ut<V.locationSize;Ut++)g(V.location+Ut,St.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,j);for(let Ut=0;Ut<V.locationSize;Ut++)y(V.location+Ut,vt/V.locationSize,dt,tt,Xt*Dt,(le+vt/V.locationSize*Ut)*Dt,qt)}else{if(Z.isInstancedBufferAttribute){for(let St=0;St<V.locationSize;St++)g(V.location+St,Z.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let St=0;St<V.locationSize;St++)m(V.location+St);s.bindBuffer(s.ARRAY_BUFFER,j);for(let St=0;St<V.locationSize;St++)y(V.location+St,vt/V.locationSize,dt,tt,vt*Dt,vt/V.locationSize*St*Dt,qt)}}else if(U!==void 0){const tt=U[K];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(V.location,tt);break;case 3:s.vertexAttrib3fv(V.location,tt);break;case 4:s.vertexAttrib4fv(V.location,tt);break;default:s.vertexAttrib1fv(V.location,tt)}}}}M()}function w(){I();for(const L in n){const z=n[L];for(const k in z){const D=z[k];for(const H in D){const X=D[H];for(const U in X)h(X[U].object),delete X[U];delete D[H]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const z=n[L.id];for(const k in z){const D=z[k];for(const H in D){const X=D[H];for(const U in X)h(X[U].object),delete X[U];delete D[H]}}delete n[L.id]}function v(L){for(const z in n){const k=n[z];for(const D in k){const H=k[D];if(H[L.id]===void 0)continue;const X=H[L.id];for(const U in X)h(X[U].object),delete X[U];delete H[L.id]}}}function S(L){for(const z in n){const k=n[z],D=L.isInstancedMesh===!0?L.id:0,H=k[D];if(H!==void 0){for(const X in H){const U=H[X];for(const K in U)h(U[K].object),delete U[K];delete H[X]}delete k[D],Object.keys(k).length===0&&delete n[z]}}}function I(){R(),r=!0,a!==i&&(a=i,c(a.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function M0(s,t,e){let n;function i(l){n=l}function a(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function r(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,n,1)}this.setMode=i,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function _0(s,t,e,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const v=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(v){return!(v!==Fn&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const S=v===Gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Mn&&v!==Pn&&!S&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,maxSamples:w,samples:b}}function y0(s){const t=this;let e=null,n=0,i=!1,a=!1;const r=new li,o=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||a&&!m)a?h(null):c();else{const M=a?0:n,y=M*4;let _=g.clippingState||null;l.value=_,_=h(p,f,y,u);for(let w=0;w!==y;++w)_[w]=e[w];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=u+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,_=u;y!==x;++y,_+=4)r.copy(d[y]).applyMatrix4(M,o),r.normal.toArray(m,_),m[_+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class fl extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Nh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new P(5,5,5),a=new Hn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:is});a.uniforms.tEquirect.value=e;const r=new A(i,a),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=mn),new zo(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(a)}}const Sc=256,w0=3,S0=20,Jh=256,Qh=16,b0=3,E0=new N,T0=new Kt;class Ka{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zo(1,10,null),this._boxMesh=new A(new P(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,a={}){const{size:r=256,position:o=E0}=a,l=this._renderer;this._setSize(r);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,u=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(T0));const m=new zo(n,i,h);return m.position.copy(o),m.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=u,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Sc,Eh(t))}_fromTexture(t,e){t.mapping===ls||t.mapping===Gs?this._setSize(t.image.length===0?Sc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=bc(t,!1,!1),n=Math.log2(t)-w0;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=bc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,a=this._cubeCamera;i.material=n,a.renderTarget=t,a.activeMipmapLevel=e;const r=t.width>>e;t.viewport.set(0,0,r,r),a.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ls||t.mapping===Gs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ec()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=A0(),this._integrationMaterial=R0());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(e/Qh);for(let r=0;r<=n;r++){const o=Ka.lodToRoughness(r,n);if(r>n-b0)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Jh*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=C0());const n=this._blurMaterial,i=n.uniforms,a=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=a.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(a,0,n)}}function bc(s,t,e){return new fl(s,{minFilter:hi,generateMipmaps:t,type:Gn,colorSpace:Va,depthBuffer:e})}function Js(s,t,e){return new Hn({name:s,uniforms:t,vertexShader:ue.cube_vert,fragmentShader:e,side:fn,blending:is,depthTest:!1,depthWrite:!1})}function A0(){return Js("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jh}u

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
	`)}function R0(){return Js("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qh}},`

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
	`)}function C0(){return Js("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${S0}
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
	`)}function Ec(){return Js("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tc(){return Js("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function P0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?r(f):a(f)}function a(f){if(f&&f.isTexture){const u=f.mapping;if(u===or||u===lr)if(t.has(f)){const p=t.get(f).texture;return o(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const x=new fl(p.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const u=f.mapping,p=u===or||u===lr,x=u===ls||u===Gs;if(p||x){let m=e.get(f);const g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ka(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{const M=f.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Ka(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===or?f.mapping=ls:u===lr&&(f.mapping=Gs),f}function l(f){let u=0;const p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){const u=f.target;u.removeEventListener("dispose",c);const p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function L0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&za("WebGLRenderer: "+n+" extension not supported."),i}}}function I0(s,t,e,n){const i={},a=new WeakMap,r=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],r.unregister(p);const x=a.get(p);x&&(t.remove(x),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),r.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const M=x!==null?x.array.length:m.array.length/3-1,y=m.count>=65535?Ph:Ch,_=new y(Math.ceil(M/3)*6,1),w=_.array;if(x!==null){const v=x.array;g=x.version;for(let S=0,I=0;S<M;S+=3){const R=v[S+0],L=v[S+1],z=v[S+2];w[I++]=R,w[I++]=L,w[I++]=L,w[I++]=z,w[I++]=z,w[I++]=R}}else{g=m.version;for(let v=0,S=0;v<M;v+=3){const I=v+0,R=v+1,L=v+2;w[S++]=I,w[S++]=R,w[S++]=R,w[S++]=L,w[S++]=L,w[S++]=I}}_.version=g;const b=a.get(p);b&&t.remove(b),a.set(p,_)}function f(p){const x=a.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return a.get(p)}function u(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:u}}function D0(s,t,e){let n;function i(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,f){s.drawElements(n,f,a,d*r),e.update(f,n,1)}function c(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,a,d*r,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function N0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=o*(a/3);break;case s.LINES:e.lines+=o*(a/2);break;case s.LINE_STRIP:e.lines+=o*(a-1);break;case s.LINE_LOOP:e.lines+=o*a;break;case s.POINTS:e.points+=o*a;break;default:be("WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function U0(s,t,e){const n=new WeakMap,i=new Fe;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let R=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var u=R;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let w=o.attributes.position.count*_,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const v=new Float32Array(w*b*4*d),S=new Th(v,w,b,d);S.type=Pn,S.needsUpdate=!0;const I=_*4;for(let L=0;L<d;L++){const z=g[L],k=M[L],D=y[L],H=w*b*4*L;for(let X=0;X<z.count;X++){const U=X*I;p===!0&&(i.fromBufferAttribute(z,X),v[H+U+0]=i.x,v[H+U+1]=i.y,v[H+U+2]=i.z,v[H+U+3]=0),x===!0&&(i.fromBufferAttribute(k,X),v[H+U+4]=i.x,v[H+U+5]=i.y,v[H+U+6]=i.z,v[H+U+7]=0),m===!0&&(i.fromBufferAttribute(D,X),v[H+U+8]=i.x,v[H+U+9]=i.y,v[H+U+10]=i.z,v[H+U+11]=D.itemSize===4?i.w:1)}}f={count:d,texture:S,size:new lt(w,b)},n.set(o,f),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:a}}function O0(s,t,e,n,i){let a=new WeakMap;function r(c){const h=i.render.frame,d=c.geometry,f=t.get(c,d);if(a.get(f)!==h&&(t.update(f),a.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;a.get(u)!==h&&(u.update(),a.set(u,h))}return f}function o(){a=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const F0={[oh]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[qo]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[uh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function z0(s,t,e,n,i,a){const r=new zn(t,e,{type:s,depthBuffer:i,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Ie;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));const d=new Sf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new A(h,d),u=new $h(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,M=null,y=[],_=!1;this.setSize=function(w,b){r.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let v=0;v<y.length;v++){const S=y[v];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){y=w,_=y.length>0&&y[0].isRenderPass===!0;const b=r.width,v=r.height;y.length>0&&o===null&&(o=new zn(b,v,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new zn(b,v,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&y.some(I=>I.needsDepthTexture===!0);S!==(r.depthTexture!==null)&&(S===!0&&c===null&&(c=new ds(b,v),a===!0&&(c.format=di,c.type=cs)),r.dispose(),r.depthTexture=S?c:null,r.resolveDepthBuffer=S,r.storeMultisampledDepthBuffer=S);for(let I=0;I<y.length;I++){const R=y[I];R.setSize&&R.setSize(b,v),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===Qn&&y.length===0)return!1;if(M=b,b!==null){const v=b.width,S=b.height;(r.width!==v||r.height!==S)&&this.setSize(v,S)}return _===!1&&w.setRenderTarget(r),g=w.toneMapping,w.toneMapping=Qn,!0},this.hasRenderPass=function(){return _},this.end=function(w,b){w.toneMapping=g,m=!0;let v=r,S=o;for(let I=0;I<y.length;I++){const R=y[I];R.enabled!==!1&&(R.render(w,S,v,b),R.needsSwap!==!1&&(v=S,S=S===o?l:o))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,d.defines={},Me.getTransfer(p)===Re&&(d.defines.SRGB_TRANSFER="");const I=F0[x];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,w.setRenderTarget(M),w.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const jh=new on,td=new ds(1,1),ed=new Uh(1),nd=new Th,id=new vu,sd=new Nh,Ac=[],Rc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function ms(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let a=Ac[i];if(a===void 0&&(a=new Float32Array(i),Ac[i]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,s[r].toArray(a,o)}return a}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nr(s,t){let e=Rc[t];e===void 0&&(e=new Int32Array(t),Rc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function k0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function B0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function G0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function H0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function V0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Lc.set(n),s.uniformMatrix2fv(this.addr,!1,Lc),Ye(e,n)}}function W0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Pc.set(n),s.uniformMatrix3fv(this.addr,!1,Pc),Ye(e,n)}}function X0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Cc.set(n),s.uniformMatrix4fv(this.addr,!1,Cc),Ye(e,n)}}function q0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Y0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function $0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function Z0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function K0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function J0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function Q0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function j0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function ir(s){return s.version===0&&(s.compareFunction=wh,s.needsUpdate=!0),s}function tg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_2D_SHADOW?a=ir(td):a=jh,e.setTexture2D(t||a,i)}function eg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||id,i)}function ng(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a;this.type===s.SAMPLER_CUBE_SHADOW?a=ir(ed):a=sd,e.setTextureCube(t||a,i)}function ig(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nd,i)}function sg(s){switch(s){case 5126:return k0;case 35664:return B0;case 35665:return G0;case 35666:return H0;case 35674:return V0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return $0;case 35669:case 35673:return Z0;case 5125:return K0;case 36294:return J0;case 36295:return Q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function ag(s,t){s.uniform1fv(this.addr,t)}function rg(s,t){const e=ms(t,this.size,2);s.uniform2fv(this.addr,e)}function og(s,t){const e=ms(t,this.size,3);s.uniform3fv(this.addr,e)}function lg(s,t){const e=ms(t,this.size,4);s.uniform4fv(this.addr,e)}function cg(s,t){const e=ms(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hg(s,t){const e=ms(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function dg(s,t){const e=ms(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ug(s,t){s.uniform1iv(this.addr,t)}function fg(s,t){s.uniform2iv(this.addr,t)}function pg(s,t){s.uniform3iv(this.addr,t)}function mg(s,t){s.uniform4iv(this.addr,t)}function gg(s,t){s.uniform1uiv(this.addr,t)}function xg(s,t){s.uniform2uiv(this.addr,t)}function vg(s,t){s.uniform3uiv(this.addr,t)}function Mg(s,t){s.uniform4uiv(this.addr,t)}function _g(s,t,e){const n=this.cache,i=t.length,a=nr(e,i);qe(n,a)||(s.uniform1iv(this.addr,a),Ye(n,a));let r;this.type===s.SAMPLER_2D_SHADOW?r=ir(td):r=jh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||r,a[o])}function yg(s,t,e){const n=this.cache,i=t.length,a=nr(e,i);qe(n,a)||(s.uniform1iv(this.addr,a),Ye(n,a));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||id,a[r])}function wg(s,t,e){const n=this.cache,i=t.length,a=nr(e,i);qe(n,a)||(s.uniform1iv(this.addr,a),Ye(n,a));let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ir(ed):r=sd;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||r,a[o])}function Sg(s,t,e){const n=this.cache,i=t.length,a=nr(e,i);qe(n,a)||(s.uniform1iv(this.addr,a),Ye(n,a));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||nd,a[r])}function bg(s){switch(s){case 5126:return ag;case 35664:return rg;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return dg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}}class Tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bg(e.type)}}class Ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let a=0,r=i.length;a!==r;++a){const o=i[a];o.setValue(t,e[o.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Ic(s,t){s.seq.push(t),s.map[t.id]=t}function Rg(s,t,e){const n=s.name,i=n.length;for(Fr.lastIndex=0;;){const a=Fr.exec(n),r=Fr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){Ic(e,c===void 0?new Eg(o,s,t):new Tg(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Ag(o),Ic(e,d)),e=d}}}class ka{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Rg(o,l,this)}const i=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(r):a.push(r);i.length>0&&(this.seq=i.concat(a))}setValue(t,e,n,i){const a=this.map[e];a!==void 0&&a.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,a=t.length;i!==a;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Dc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Cg=37297;let Pg=0;function Lg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=i;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Nc=new ee;function Ig(s){Me._getMatrix(Nc,Me.workingColorSpace,s);const t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(s)){case Wa:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Uc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),a=(s.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Lg(s.getShaderSource(t),o)}else return a}function Dg(s,t){const e=Ig(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ng={[oh]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[qo]:"ACESFilmic",[dh]:"AgX",[uh]:"Neutral",[hh]:"Custom"};function Ug(s,t){const e=Ng[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const La=new N;function Og(){Me.getLuminanceCoefficients(La);const s=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function zg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const a=s.getActiveAttrib(t,i),r=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:s.getAttribLocation(t,r),locationSize:o}}return e}function Is(s){return s!==""}function Oc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Fc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(s){return s.replace(Bg,Gg)}function Gg(s,t){const e=ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ko(e)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(s){return s.replace(Hg,Vg)}function Vg(s,t,e,n){let i="";for(let a=parseInt(t);a<parseInt(e);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function kc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const Wg={[Us]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function Xg(s){return Wg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qg={[Gs]:"ENVMAP_MODE_REFRACTION"};function Yg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $g={[rh]:"ENVMAP_BLENDING_MULTIPLY",[Od]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function Zg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$g[s.combine]||"ENVMAP_BLENDING_NONE"}function Kg(s,t,e,n){const i=s.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Xg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Yg(e),d=Zg(e),f=Fg(e),u=zg(a),p=i.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(x=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?ue.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),r=ko(r),r=Oc(r,e),r=Fc(r,e),o=ko(o),o=Oc(o,e),o=Fc(o,e),r=zc(r),o=zc(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=g+x+r,y=g+m+o,_=Dc(i,i.VERTEX_SHADER,M),w=Dc(i,i.FRAGMENT_SHADER,y);i.attachShader(p,_),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(R){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(p)||"",z=i.getShaderInfoLog(_)||"",k=i.getShaderInfoLog(w)||"",D=L.trim(),H=z.trim(),X=k.trim();let U=!0,K=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(U=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,_,w);else{const V=Uc(i,_,"vertex"),Z=Uc(i,w,"fragment");be("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+V+`
`+Z)}else D!==""?Qt("WebGLProgram: Program Info Log:",D):(H===""||X==="")&&(K=!1);K&&(R.diagnostics={runnable:U,programLog:D,vertexShader:{log:H,prefix:x},fragmentShader:{log:X,prefix:m}})}i.deleteShader(_),i.deleteShader(w),v=new ka(i,p),S=kg(i,p)}let v;this.getUniforms=function(){return v===void 0&&b(this),v};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(p,Cg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=w,this}let Jg=0;class Qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jg(t),e.set(t,n)),n}}class jg{constructor(t){this.id=Jg++,this.code=t,this.usedTimes=0}}function tx(s){return s===Ri||s===Ga||s===Ha}function ex(s,t,e,n,i,a){const r=new Ah,o=new Qg,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,I,R,L,z){const k=R.fog,D=L.geometry,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,U=t.get(v.envMap||H,X),K=f[v.type];let V=n.precision;v.precision!==null&&(V=n.getMaxPrecision(v.precision),V!==v.precision&&Qt("WebGLProgram.getParameters:",v.precision,"not supported, using",V,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,tt=Z!==void 0?Z.length:0;let vt=0;D.morphAttributes.position!==void 0&&(vt=1),D.morphAttributes.normal!==void 0&&(vt=2),D.morphAttributes.color!==void 0&&(vt=3);let zt,j,dt,Dt;if(K){const Lt=On[K];zt=Lt.vertexShader,j=Lt.fragmentShader}else{zt=v.vertexShader,j=v.fragmentShader;const Lt=o.getVertexShaderStage(v),Ae=o.getFragmentShaderStage(v);o.update(v,Lt,Ae),dt=Lt.id,Dt=Ae.id}const qt=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Xt=L.isInstancedMesh===!0,le=L.isBatchedMesh===!0,Ut=!!v.map,jt=!!v.matcap,ce=!!U,ot=ce&&U.isPMREMTexture===!0,ft=!!v.aoMap,pt=!!v.lightMap,Ct=!!v.bumpMap&&v.wireframe===!1,_t=!!v.normalMap,te=!!v.displacementMap,Ht=!!v.emissiveMap,he=!!v.metalnessMap,fe=!!v.roughnessMap,me=v.anisotropy>0,G=v.clearcoat>0,Ue=v.diffuseRoughness>0,se=v.dispersion>0,J=v.retroreflectivity>0,W=v.iridescence>0,Rt=v.sheen>0,gt=v.transmission>0,kt=me&&!!v.anisotropyMap,C=G&&!!v.clearcoatMap,E=G&&!!v.clearcoatNormalMap,q=G&&!!v.clearcoatRoughnessMap,ct=Ue&&!!v.diffuseRoughnessMap,rt=W&&!!v.iridescenceMap,xt=W&&!!v.iridescenceThicknessMap,yt=Rt&&!!v.sheenColorMap,it=Rt&&!!v.sheenRoughnessMap,st=!!v.specularMap,Mt=!!v.specularColorMap,F=!!v.specularIntensityMap,at=gt&&!!v.transmissionMap,et=gt&&!!v.thicknessMap,bt=!!v.gradientMap,mt=!!v.alphaMap,wt=v.alphaTest>0,Zt=!!v.alphaHash,de=!!v.extensions;let ht=Qn;v.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Jt=ot?U.isCompressedCubeTexture?U.image[0].mipmaps:U.mipmaps:null,oe={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:zt,fragmentShader:j,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:Dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:V,batching:le,batchingColor:le&&L._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&L.instanceColor!==null,instancingMorph:Xt&&L.morphTexture!==null,outputColorSpace:qt===null?s.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:jt,envMap:ce,envMapMode:ce&&U.mapping,envMapPMREM:ot,envMapMaxLod:ot?Jt.length-1:null,envMapSize:ot?Jt[0].width:null,aoMap:ft,lightMap:pt,bumpMap:Ct,normalMap:_t,displacementMap:te,emissiveMap:Ht,normalMapObjectSpace:_t&&v.normalMapType===Bd,normalMapTangentSpace:_t&&v.normalMapType===Lo,packedNormalMap:_t&&v.normalMapType===Lo&&tx(v.normalMap.format),metalnessMap:he,roughnessMap:fe,anisotropy:me,anisotropyMap:kt,clearcoat:G,clearcoatMap:C,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:Ue,diffuseRoughnessMap:ct,dispersion:se,retroreflection:J,iridescence:W,iridescenceMap:rt,iridescenceThicknessMap:xt,sheen:Rt,sheenColorMap:yt,sheenRoughnessMap:it,specularMap:st,specularColorMap:Mt,specularIntensityMap:F,transmission:gt,transmissionMap:at,thicknessMap:et,gradientMap:bt,opaque:v.transparent===!1&&v.blending===Ti&&v.alphaToCoverage===!1,alphaMap:mt,alphaTest:wt,alphaHash:Zt,combine:v.combine,mapUv:Ut&&u(v.map.channel),aoMapUv:ft&&u(v.aoMap.channel),lightMapUv:pt&&u(v.lightMap.channel),bumpMapUv:Ct&&u(v.bumpMap.channel),normalMapUv:_t&&u(v.normalMap.channel),displacementMapUv:te&&u(v.displacementMap.channel),emissiveMapUv:Ht&&u(v.emissiveMap.channel),metalnessMapUv:he&&u(v.metalnessMap.channel),roughnessMapUv:fe&&u(v.roughnessMap.channel),anisotropyMapUv:kt&&u(v.anisotropyMap.channel),clearcoatMapUv:C&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:E&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:it&&u(v.sheenRoughnessMap.channel),specularMapUv:st&&u(v.specularMap.channel),specularColorMapUv:Mt&&u(v.specularColorMap.channel),specularIntensityMapUv:F&&u(v.specularIntensityMap.channel),transmissionMapUv:at&&u(v.transmissionMap.channel),thicknessMapUv:et&&u(v.thicknessMap.channel),alphaMapUv:mt&&u(v.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_t||me),vertexNormals:!!D.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Ut||mt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||D.attributes.normal===void 0&&_t===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(Lt=>Lt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&Me.getTransfer(v.map.colorSpace)===Re,decodeVideoTextureEmissive:Ht&&v.emissiveMap.isVideoTexture===!0&&Me.getTransfer(v.emissiveMap.colorSpace)===Re,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qe,flipSided:v.side===fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:de&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&v.extensions.multiDraw===!0||le)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function x(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(S,v),g(S,v),S.push(s.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function m(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapPMREM),v.push(S.envMapMaxLod),v.push(S.envMapSize),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.diffuseRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.numSunLights),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numSunLightShadows),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.numLightProbeGrids),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function g(v,S){r.disableAll(),S.instancing&&r.enable(0),S.instancingColor&&r.enable(1),S.instancingMorph&&r.enable(2),S.matcap&&r.enable(3),S.envMap&&r.enable(4),S.normalMapObjectSpace&&r.enable(5),S.normalMapTangentSpace&&r.enable(6),S.clearcoat&&r.enable(7),S.iridescence&&r.enable(8),S.alphaTest&&r.enable(9),S.vertexColors&&r.enable(10),S.vertexAlphas&&r.enable(11),S.vertexUv1s&&r.enable(12),S.vertexUv2s&&r.enable(13),S.vertexUv3s&&r.enable(14),S.vertexTangents&&r.enable(15),S.anisotropy&&r.enable(16),S.alphaHash&&r.enable(17),S.batching&&r.enable(18),S.dispersion&&r.enable(19),S.retroreflection&&r.enable(24),S.diffuseRoughness&&r.enable(25),S.batchingColor&&r.enable(20),S.gradientMap&&r.enable(21),S.packedNormalMap&&r.enable(22),S.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reversedDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),S.numLightProbeGrids>0&&r.enable(22),S.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function M(v){const S=f[v.type];let I;if(S){const R=On[S];I=_f.clone(R.uniforms)}else I=v.uniforms;return I}function y(v,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new Kg(s,S,v,i),c.push(I),h.set(S,I)),I}function _(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:M,acquireProgram:y,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:b}}function nx(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function n(r){s.delete(r)}function i(r,o,l){s.get(r)[o]=l}function a(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:a}}function ix(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Bc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gc(){const s=[];let t=0;const e=[],n=[],i=[];function a(){t=0,e.length=0,n.length=0,i.length=0}function r(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,p,x,m,g){let M=s[t];return M===void 0?(M={id:f.id,object:f,geometry:u,material:p,materialVariant:r(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[t]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=p,M.materialVariant=r(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=m,M.group=g),t++,M}function l(f,u,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);const y=o(f,u,p,x,m,g);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):e.push(y)}function c(f,u,p,x,m,g){const M=o(f,u,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(f,u){e.length>1&&e.sort(f||ix),n.length>1&&n.sort(u||Bc),i.length>1&&i.sort(u||Bc)}function d(){for(let f=t,u=s.length;f<u;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:a,push:l,unshift:c,finish:d,sort:h}}function sx(){let s=new WeakMap;function t(n,i){const a=s.get(n);let r;return a===void 0?(r=new Gc,s.set(n,[r])):i>=a.length?(r=new Gc,a.push(r)):r=a[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function ax(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function rx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ox=0;function lx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cx(s){const t=new ax,e=rx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,a=new ye,r=new ye;function o(c){let h=0,d=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,M=0,y=0,_=0,w=0,b=0,v=0,S=0,I=0,R=0;c.sort(lx);for(let z=0,k=c.length;z<k;z++){const D=c[z],H=D.color,X=D.intensity,U=D.distance;let K=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ri?K=D.shadow.map.texture:K=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*X,d+=H.g*X,f+=H.b*X;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],X);R++}else if(D.isSunLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,tt=e.get(D);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=K;const vt=Z.getViewportCount();for(let zt=0;zt<vt;zt++)n.sunShadowMatrix[x+zt]=Z.getMatrix(zt),n.sunShadowCascade[x+zt]=Z._cascadeData[zt];x+=vt,p++}n.sun[u]=V,u++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,tt=e.get(D);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=V,m++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(H).multiplyScalar(X),V.distance=U,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[M]=V;const Z=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,Z.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[M]=Z.matrix,D.castShadow){const tt=e.get(D);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=K,v++}M++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(H).multiplyScalar(X),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[y]=V,y++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Z=D.shadow,tt=e.get(D);tt.shadowIntensity=Z.intensity,tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,tt.shadowCameraNear=Z.camera.near,tt.shadowCameraFar=Z.camera.far,n.pointShadow[g]=tt,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(X),V.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[_]=V,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.sunLength!==u||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==y||L.hemiLength!==_||L.numSunShadows!==p||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==S||L.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=y,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,L.sunLength=u,L.directionalLength=m,L.pointLength=g,L.spotLength=M,L.rectAreaLength=y,L.hemiLength=_,L.numSunShadows=p,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=S,L.numLightProbes=R,n.version=ox++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let M=0,y=c.length;M<y;M++){const _=c[M];if(_.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),d++}else if(_.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(_.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),r.identity(),a.copy(_.matrixWorld),a.premultiply(g),r.extractRotation(a),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),x++}else if(_.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Hc(s){const t=new cx(s),e=[],n=[],i=[];function a(d){h.camera=d,e.length=0,n.length=0,i.length=0}function r(d){d.isLightProbeGrid?i.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function hx(s){let t=new WeakMap;function e(i,a=0){const r=t.get(i);let o;return r===void 0?(o=new Hc(s),t.set(i,[o])):a>=r.length?(o=new Hc(s),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,fx=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],px=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Vc=new ye,As=new N,zr=new N;function mx(s,t,e){let n=new Ws;const i=new lt,a=new lt,r=new Fe,o=new bf,l=new Ef,c={},h=e.maxTextureSize,d={[Ai]:fn,[fn]:Ai,[Qe]:Qe},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:dx,fragmentShader:ux}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const p=new Ie;p.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new A(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let g=this.type;this.render=function(b,v,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===xd&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);const I=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),z=s.state;z.setBlending(is),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=g!==this.type;k&&v.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=b.length;D<H;D++){const X=b[D],U=X.shadow;if(U===void 0){Qt("WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const K=U.getFrameExtents();i.multiply(K),a.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/K.x),i.x=a.x*K.x,U.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/K.y),i.y=a.y*K.y,U.mapSize.y=a.y));const V=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=V,U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ps){if(X.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new zn(i.x,i.y,{format:Ri,type:Gn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),U.map.texture.name=X.name+".shadowMap",U.map.depthTexture=new ds(i.x,i.y,Pn),U.map.depthTexture.name=X.name+".shadowMapDepth",U.map.depthTexture.format=mi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=je,U.map.depthTexture.magFilter=je}else X.isPointLight?(U.map=new fl(i.x),U.map.depthTexture=new Uh(i.x,Bn)):(U.map=new zn(i.x,i.y),U.map.depthTexture=new ds(i.x,i.y,Bn)),U.map.depthTexture.name=X.name+".shadowMap",U.map.depthTexture.format=mi,this.type===Us?(U.map.depthTexture.compareFunction=V?yh:_h,U.map.depthTexture.minFilter=mn,U.map.depthTexture.magFilter=mn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=je,U.map.depthTexture.magFilter=je);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);const Z=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();X.isPointLight!==!0&&U.updateMatrices(X,S);const tt=(U.camera.layers.mask&4294967294)!==0?U.camera.layers:S.layers;for(let vt=0;vt<Z;vt++){const zt=U.getCamera(vt);if(X.isPointLight){const j=U.camera,dt=U.matrix,Dt=X.distance||j.far;Dt!==j.far&&(j.far=Dt,j.updateProjectionMatrix()),As.setFromMatrixPosition(X.matrixWorld),j.position.copy(As),zr.copy(j.position),zr.add(fx[vt]),j.up.copy(px[vt]),j.lookAt(zr),j.updateMatrixWorld(),dt.makeTranslation(-As.x,-As.y,-As.z),Vc.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Vc,j.coordinateSystem,j.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,vt),s.clear();else{vt===0&&(s.setRenderTarget(U.map),s.clear());const j=U.getViewport(vt);r.set(a.x*j.x,a.y*j.y,a.x*j.z,a.y*j.w),z.viewport(r)}n=U.getFrustum(vt),_(v,S,zt,X,tt,this.type)}U.isPointLightShadow!==!0&&this.type===Ps&&M(U,S),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(I,R,L)};function M(b,v){const S=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null?b.mapPass=new zn(i.x,i.y,{format:Ri,type:Gn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(v,null,S,f,x,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(v,null,S,u,x,null)}function y(b,v,S,I){let R=null;const L=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=S.isPointLight===!0?l:o,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const z=R.uuid,k=v.uuid;let D=c[z];D===void 0&&(D={},c[z]=D);let H=D[k];H===void 0&&(H=R.clone(),D[k]=H,v.addEventListener("dispose",w)),R=H}if(R.visible=v.visible,R.wireframe=v.wireframe,I===Ps?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:d[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const z=s.properties.get(R);z.light=S}return R}function _(b,v,S,I,R,L){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Ps)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const D=t.update(b),H=b.material;if(Array.isArray(H)){const X=D.groups;for(let U=0,K=X.length;U<K;U++){const V=X[U],Z=H[V.materialIndex];if(Z&&Z.visible){const tt=y(b,Z,I,L);b.onBeforeShadow(s,b,v,S,D,tt,V),s.renderBufferDirect(S,null,D,tt,b,V),b.onAfterShadow(s,b,v,S,D,tt,V)}}}else if(H.visible){const X=y(b,H,I,L);b.onBeforeShadow(s,b,v,S,D,X,null),s.renderBufferDirect(S,null,D,X,b,null),b.onAfterShadow(s,b,v,S,D,X,null)}}const k=b.children;for(let D=0,H=k.length;D<H;D++)_(k[D],v,S,I,R,L)}function w(b){b.target.removeEventListener("dispose",w);for(const S in c){const I=c[S],R=b.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function gx(s,t){function e(){let F=!1;const at=new Fe;let et=null;const bt=new Fe(0,0,0,0);return{setMask:function(mt){et!==mt&&!F&&(s.colorMask(mt,mt,mt,mt),et=mt)},setLocked:function(mt){F=mt},setClear:function(mt,wt,Zt,de,ht){ht===!0&&(mt*=de,wt*=de,Zt*=de),at.set(mt,wt,Zt,de),bt.equals(at)===!1&&(s.clearColor(mt,wt,Zt,de),bt.copy(at))},reset:function(){F=!1,et=null,bt.set(-1,0,0,0)}}}function n(){let F=!1,at=!1,et=null,bt=null,mt=null;return{setReversed:function(wt){if(at!==wt){const Zt=t.get("EXT_clip_control");wt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),at=wt;const de=mt;mt=null,this.setClear(de)}},getReversed:function(){return at},setTest:function(wt){wt?St(s.DEPTH_TEST):Xt(s.DEPTH_TEST)},setMask:function(wt){et!==wt&&!F&&(s.depthMask(wt),et=wt)},setFunc:function(wt){if(at&&(wt=Jd[wt]),bt!==wt){switch(wt){case qr:s.depthFunc(s.NEVER);break;case Yr:s.depthFunc(s.ALWAYS);break;case $r:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Zr:s.depthFunc(s.EQUAL);break;case Kr:s.depthFunc(s.GEQUAL);break;case Jr:s.depthFunc(s.GREATER);break;case Qr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=wt}},setLocked:function(wt){F=wt},setClear:function(wt){mt!==wt&&(mt=wt,at&&(wt=1-wt),s.clearDepth(wt))},reset:function(){F=!1,et=null,bt=null,mt=null,at=!1}}}function i(){let F=!1,at=null,et=null,bt=null,mt=null,wt=null,Zt=null,de=null,ht=null;return{setTest:function(Jt){F||(Jt?St(s.STENCIL_TEST):Xt(s.STENCIL_TEST))},setMask:function(Jt){at!==Jt&&!F&&(s.stencilMask(Jt),at=Jt)},setFunc:function(Jt,oe,Lt){(et!==Jt||bt!==oe||mt!==Lt)&&(s.stencilFunc(Jt,oe,Lt),et=Jt,bt=oe,mt=Lt)},setOp:function(Jt,oe,Lt){(wt!==Jt||Zt!==oe||de!==Lt)&&(s.stencilOp(Jt,oe,Lt),wt=Jt,Zt=oe,de=Lt)},setLocked:function(Jt){F=Jt},setClear:function(Jt){ht!==Jt&&(s.clearStencil(Jt),ht=Jt)},reset:function(){F=!1,at=null,et=null,bt=null,mt=null,wt=null,Zt=null,de=null,ht=null}}}const a=new e,r=new n,o=new i;let l={};const c=new WeakMap;let h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,y=null,_=null,w=null,b=null,v=null,S=new Kt(0,0,0),I=0,R=!1,L=null,z=null,k=null,D=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),U=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),U=K>=2);let Z=null,tt={};const vt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),j=new Fe().fromArray(vt),dt=new Fe().fromArray(zt);function Dt(F,at,et,bt){const mt=new Uint8Array(4),wt=s.createTexture();s.bindTexture(F,wt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<et;Zt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(at+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return wt}const qt={};qt[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),qt[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),qt[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),qt[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),St(s.DEPTH_TEST),r.setFunc(Bs),Ct(!1),_t(Ll),St(s.CULL_FACE),ft(is);function St(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Xt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function le(F,at){return f[F]!==at?(s.bindFramebuffer(F,at),f[F]=at,F===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=at),F===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Ut(F,at){let et=p,bt=!1;if(F){et=u.get(at),et===void 0&&(et=[],u.set(at,et));const mt=F.textures;if(et.length!==mt.length||et[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,Zt=mt.length;wt<Zt;wt++)et[wt]=s.COLOR_ATTACHMENT0+wt;et.length=mt.length,bt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,bt=!0);bt&&s.drawBuffers(et)}function jt(F){return x!==F?(s.useProgram(F),x=F,!0):!1}const ce={[ji]:s.FUNC_ADD,[Md]:s.FUNC_SUBTRACT,[_d]:s.FUNC_REVERSE_SUBTRACT};ce[yd]=s.MIN,ce[wd]=s.MAX;const ot={[Sd]:s.ZERO,[bd]:s.ONE,[Ed]:s.SRC_COLOR,[sh]:s.SRC_ALPHA,[Ld]:s.SRC_ALPHA_SATURATE,[Cd]:s.DST_COLOR,[Ad]:s.DST_ALPHA,[Td]:s.ONE_MINUS_SRC_COLOR,[ah]:s.ONE_MINUS_SRC_ALPHA,[Pd]:s.ONE_MINUS_DST_COLOR,[Rd]:s.ONE_MINUS_DST_ALPHA,[Id]:s.CONSTANT_COLOR,[Dd]:s.ONE_MINUS_CONSTANT_COLOR,[Nd]:s.CONSTANT_ALPHA,[Ud]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(F,at,et,bt,mt,wt,Zt,de,ht,Jt){if(F===is){m===!0&&(Xt(s.BLEND),m=!1);return}if(m===!1&&(St(s.BLEND),m=!0),F!==vd){if(F!==g||Jt!==R){if((M!==ji||w!==ji)&&(s.blendEquation(s.FUNC_ADD),M=ji,w=ji),Jt)switch(F){case Ti:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kn:s.blendFunc(s.ONE,s.ONE);break;case Il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Dl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:be("WebGLState: Invalid blending: ",F);break}else switch(F){case Ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Il:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",F);break}y=null,_=null,b=null,v=null,S.set(0,0,0),I=0,g=F,R=Jt}return}mt=mt||at,wt=wt||et,Zt=Zt||bt,(at!==M||mt!==w)&&(s.blendEquationSeparate(ce[at],ce[mt]),M=at,w=mt),(et!==y||bt!==_||wt!==b||Zt!==v)&&(s.blendFuncSeparate(ot[et],ot[bt],ot[wt],ot[Zt]),y=et,_=bt,b=wt,v=Zt),(de.equals(S)===!1||ht!==I)&&(s.blendColor(de.r,de.g,de.b,ht),S.copy(de),I=ht),g=F,R=!1}function pt(F,at){F.side===Qe?Xt(s.CULL_FACE):St(s.CULL_FACE);let et=F.side===fn;at&&(et=!et),Ct(et),F.blending===Ti&&F.transparent===!1?ft(is):ft(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),a.setMask(F.colorWrite);const bt=F.stencilWrite;o.setTest(bt),bt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):Xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(F){L!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),L=F)}function _t(F){F!==md?(St(s.CULL_FACE),F!==z&&(F===Ll?s.cullFace(s.BACK):F===gd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xt(s.CULL_FACE),z=F}function te(F){F!==k&&(U&&s.lineWidth(F),k=F)}function Ht(F,at,et){F?(St(s.POLYGON_OFFSET_FILL),(D!==at||H!==et)&&(D=at,H=et,r.getReversed()&&(at=-at,et=-et),s.polygonOffset(at,et))):Xt(s.POLYGON_OFFSET_FILL)}function he(F){F?St(s.SCISSOR_TEST):Xt(s.SCISSOR_TEST)}function fe(F){F===void 0&&(F=s.TEXTURE0+X-1),Z!==F&&(s.activeTexture(F),Z=F)}function me(F,at,et){et===void 0&&(Z===null?et=s.TEXTURE0+X-1:et=Z);let bt=tt[et];bt===void 0&&(bt={type:void 0,texture:void 0},tt[et]=bt),(bt.type!==F||bt.texture!==at)&&(Z!==et&&(s.activeTexture(et),Z=et),s.bindTexture(F,at||qt[F]),bt.type=F,bt.texture=at)}function G(){const F=tt[Z];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ue(){try{s.compressedTexImage2D(...arguments)}catch(F){be("WebGLState:",F)}}function se(){try{s.compressedTexImage3D(...arguments)}catch(F){be("WebGLState:",F)}}function J(){try{s.texSubImage2D(...arguments)}catch(F){be("WebGLState:",F)}}function W(){try{s.texSubImage3D(...arguments)}catch(F){be("WebGLState:",F)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(F){be("WebGLState:",F)}}function gt(){try{s.compressedTexSubImage3D(...arguments)}catch(F){be("WebGLState:",F)}}function kt(){try{s.texStorage2D(...arguments)}catch(F){be("WebGLState:",F)}}function C(){try{s.texStorage3D(...arguments)}catch(F){be("WebGLState:",F)}}function E(){try{s.texImage2D(...arguments)}catch(F){be("WebGLState:",F)}}function q(){try{s.texImage3D(...arguments)}catch(F){be("WebGLState:",F)}}function ct(F){return d[F]!==void 0?d[F]:s.getParameter(F)}function rt(F,at){d[F]!==at&&(s.pixelStorei(F,at),d[F]=at)}function xt(F){j.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function yt(F){dt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),dt.copy(F))}function it(F,at){let et=c.get(at);et===void 0&&(et=new WeakMap,c.set(at,et));let bt=et.get(F);bt===void 0&&(bt=s.getUniformBlockIndex(at,F.name),s.uniformBlockBinding(at,bt,bt),et.set(F,bt))}function st(F,at,et){const mt=c.get(at).get(F);l[mt]!==et&&(s.bindBufferBase(s.UNIFORM_BUFFER,mt,et),l[mt]=et)}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,tt={},f={},l={},u=new WeakMap,p=[],x=null,m=!1,g=null,M=null,y=null,_=null,w=null,b=null,v=null,S=new Kt(0,0,0),I=0,R=!1,L=null,z=null,k=null,D=null,H=null,j.set(0,0,s.canvas.width,s.canvas.height),dt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:St,disable:Xt,bindFramebuffer:le,drawBuffers:Ut,useProgram:jt,setBlending:ft,setMaterial:pt,setFlipSided:Ct,setCullFace:_t,setLineWidth:te,setPolygonOffset:Ht,setScissorTest:he,activeTexture:fe,bindTexture:me,unbindTexture:G,compressedTexImage2D:Ue,compressedTexImage3D:se,texImage2D:E,texImage3D:q,pixelStorei:rt,getParameter:ct,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:kt,texStorage3D:C,texSubImage2D:J,texSubImage3D:W,compressedTexSubImage2D:Rt,compressedTexSubImage3D:gt,scissor:xt,viewport:yt,reset:Mt}}function xx(s,t,e,n,i,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,d=new Set;let f;const u=new WeakMap,p=new Set,x=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):Xa("canvas")}function M(C,E,q){let ct=1;const rt=kt(C);if((rt.width>q||rt.height>q)&&(ct=q/Math.max(rt.width,rt.height)),ct<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const xt=Math.floor(ct*rt.width),yt=Math.floor(ct*rt.height);f===void 0&&(f=g(xt,yt));const it=E?g(xt,yt):f;return it.width=xt,it.height=yt,it.getContext("2d").drawImage(C,0,0,xt,yt),Qt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+xt+"x"+yt+")."),it}else return"data"in C&&Qt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function y(C){return C.generateMipmaps}function _(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,E,q,ct,rt,xt=!1){if(C!==null){if(s[C]!==void 0)return s[C];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let yt;ct&&(yt=t.get("EXT_texture_norm16"),yt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=E;if(E===s.RED&&(q===s.FLOAT&&(it=s.R32F),q===s.HALF_FLOAT&&(it=s.R16F),q===s.UNSIGNED_BYTE&&(it=s.R8),q===s.UNSIGNED_SHORT&&yt&&(it=yt.R16_EXT),q===s.SHORT&&yt&&(it=yt.R16_SNORM_EXT)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.R8UI),q===s.UNSIGNED_SHORT&&(it=s.R16UI),q===s.UNSIGNED_INT&&(it=s.R32UI),q===s.BYTE&&(it=s.R8I),q===s.SHORT&&(it=s.R16I),q===s.INT&&(it=s.R32I)),E===s.RG&&(q===s.FLOAT&&(it=s.RG32F),q===s.HALF_FLOAT&&(it=s.RG16F),q===s.UNSIGNED_BYTE&&(it=s.RG8),q===s.UNSIGNED_SHORT&&yt&&(it=yt.RG16_EXT),q===s.SHORT&&yt&&(it=yt.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RG8UI),q===s.UNSIGNED_SHORT&&(it=s.RG16UI),q===s.UNSIGNED_INT&&(it=s.RG32UI),q===s.BYTE&&(it=s.RG8I),q===s.SHORT&&(it=s.RG16I),q===s.INT&&(it=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RGB8UI),q===s.UNSIGNED_SHORT&&(it=s.RGB16UI),q===s.UNSIGNED_INT&&(it=s.RGB32UI),q===s.BYTE&&(it=s.RGB8I),q===s.SHORT&&(it=s.RGB16I),q===s.INT&&(it=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(it=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(it=s.RGBA16UI),q===s.UNSIGNED_INT&&(it=s.RGBA32UI),q===s.BYTE&&(it=s.RGBA8I),q===s.SHORT&&(it=s.RGBA16I),q===s.INT&&(it=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_SHORT&&yt&&(it=yt.RGB16_EXT),q===s.SHORT&&yt&&(it=yt.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(it=s.R11F_G11F_B10F)),E===s.RGBA){const st=xt?Wa:Me.getTransfer(rt);q===s.FLOAT&&(it=s.RGBA32F),q===s.HALF_FLOAT&&(it=s.RGBA16F),q===s.UNSIGNED_BYTE&&(it=st===Re?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&yt&&(it=yt.RGBA16_EXT),q===s.SHORT&&yt&&(it=yt.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(C,E){let q;return C?E===null||E===Bn||E===cs?q=s.DEPTH24_STENCIL8:E===Pn?q=s.DEPTH32F_STENCIL8:E===Hs&&(q=s.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Bn||E===cs?q=s.DEPTH_COMPONENT24:E===Pn?q=s.DEPTH_COMPONENT32F:E===Hs&&(q=s.DEPTH_COMPONENT16),q}function S(C,E){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==je&&C.minFilter!==mn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){const E=new WeakRef(C);n.get(C).__ref=E,p.add(E),x.register(C,E,E)}function R(C){const E=n.get(C).__ref;E!==void 0&&(p.delete(E),x.unregister(E))}function L(C){k(C.target)}function z(C){D(C.target)}function k(C){C.removeEventListener("dispose",L),R(C),X(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function D(C){C.removeEventListener("dispose",z),R(C),K(C)}function H(){for(const C of p){const E=C.deref();E!==void 0&&(E.isRenderTarget===!0?D(E):k(E))}p.clear(),d.clear()}function X(C){const E=n.get(C);if(E.__webglInit===void 0)return;const q=C.source,ct=u.get(q);if(ct){const rt=ct[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&U(C),Object.keys(ct).length===0&&u.delete(q)}n.remove(C)}function U(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const q=C.source,ct=u.get(q);delete ct[E.__cacheKey],r.memory.textures--}function K(C){const E=n.get(C);E.__depthDisposeCallback&&E.__depthDisposeCallback();const q=C.depthTexture;if(q&&q.renderTarget===C&&k(q),C.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(E.__webglFramebuffer[rt]))for(let xt=0;xt<E.__webglFramebuffer[rt].length;xt++)s.deleteFramebuffer(E.__webglFramebuffer[rt][xt]);else s.deleteFramebuffer(E.__webglFramebuffer[rt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[rt])}else{if(Array.isArray(E.__webglFramebuffer))for(let rt=0;rt<E.__webglFramebuffer.length;rt++)s.deleteFramebuffer(E.__webglFramebuffer[rt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let rt=0;rt<E.__webglColorRenderbuffer.length;rt++)E.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[rt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ct=C.textures;for(let rt=0,xt=ct.length;rt<xt;rt++){const yt=n.get(ct[rt]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),r.memory.textures--),n.remove(ct[rt])}n.remove(C)}let V=0;function Z(){V=0}function tt(){return V}function vt(C){V=C}function zt(){const C=V;return C>=i.maxTextures&&Qt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,C}function j(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.mipmapsAutoUpdate),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function dt(C,E){const q=n.get(C);if(C.isVideoTexture&&Rt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){const ct=C.image;if(ct===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(q,C,E);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function Dt(C,E){const q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){pt(q,C,E);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function qt(C,E){const q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){pt(q,C,E);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function St(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Ct(q,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const Xt={[Ba]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[jr]:s.MIRRORED_REPEAT},le={[je]:s.NEAREST,[zd]:s.NEAREST_MIPMAP_NEAREST,[ta]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[cr]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},Ut={[Hd]:s.NEVER,[wh]:s.ALWAYS,[Vd]:s.LESS,[_h]:s.LEQUAL,[Wd]:s.EQUAL,[yh]:s.GEQUAL,[Xd]:s.GREATER,[qd]:s.NOTEQUAL};function jt(C,E){if(E.type===Pn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===mn||E.magFilter===cr||E.magFilter===ta||E.magFilter===hi||E.minFilter===mn||E.minFilter===cr||E.minFilter===ta||E.minFilter===hi)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Xt[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Xt[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Xt[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,le[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,le[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ut[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===je||E.minFilter!==ta&&E.minFilter!==hi||E.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ce(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",L),I(E));const ct=E.source;let rt=u.get(ct);rt===void 0&&(rt={},u.set(ct,rt));const xt=j(E);if(xt!==C.__cacheKey){rt[xt]===void 0&&(rt[xt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,q=!0),rt[xt].usedTimes++;const yt=rt[C.__cacheKey];yt!==void 0&&(rt[C.__cacheKey].usedTimes--,yt.usedTimes===0&&U(E)),C.__cacheKey=xt,C.__webglTexture=rt[xt].texture}return q}function ot(C,E,q){return Math.floor(Math.floor(C/q)/E)}function ft(C,E,q,ct){const xt=C.updateRanges;if(xt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,ct,E.data);else{xt.sort((F,at)=>F.start-at.start);let yt=0;for(let F=1;F<xt.length;F++){const at=xt[yt],et=xt[F],bt=at.start+at.count,mt=ot(et.start,E.width,4),wt=ot(at.start,E.width,4);et.start<=bt+1&&mt===wt&&ot(et.start+et.count-1,E.width,4)===mt?at.count=Math.max(at.count,et.start+et.count-at.start):(++yt,xt[yt]=et)}xt.length=yt+1;const it=e.getParameter(s.UNPACK_ROW_LENGTH),st=e.getParameter(s.UNPACK_SKIP_PIXELS),Mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let F=0,at=xt.length;F<at;F++){const et=xt[F],bt=Math.floor(et.start/4),mt=Math.ceil(et.count/4),wt=bt%E.width,Zt=Math.floor(bt/E.width),de=mt,ht=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Zt),e.texSubImage2D(s.TEXTURE_2D,0,wt,Zt,de,ht,q,ct,E.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,it),e.pixelStorei(s.UNPACK_SKIP_PIXELS,st),e.pixelStorei(s.UNPACK_SKIP_ROWS,Mt)}}function pt(C,E,q){let ct=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=s.TEXTURE_3D);const rt=ce(C,E),xt=E.source;e.bindTexture(ct,C.__webglTexture,s.TEXTURE0+q);const yt=n.get(xt);if(xt.version!==yt.__version||rt===!0){if(e.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ht=Me.getPrimaries(Me.workingColorSpace),Jt=E.colorSpace===ci?null:Me.getPrimaries(E.colorSpace),oe=E.colorSpace===ci||ht===Jt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let st=M(E.image,!1,i.maxTextureSize);st=gt(E,st);const Mt=a.convert(E.format,E.colorSpace),F=a.convert(E.type);let at=b(E.internalFormat,Mt,F,E.normalized,E.colorSpace,E.isVideoTexture);jt(ct,E);let et;const bt=E.mipmaps,mt=E.isVideoTexture!==!0,wt=yt.__version===void 0||rt===!0,Zt=xt.dataReady,de=S(E,st);if(E.isDepthTexture)at=v(E.format===di,E.type),wt&&(mt?e.texStorage2D(s.TEXTURE_2D,1,at,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,at,st.width,st.height,0,Mt,F,null));else if(E.isDataTexture)if(bt.length>0){mt&&wt&&e.texStorage2D(s.TEXTURE_2D,de,at,bt[0].width,bt[0].height);for(let ht=0,Jt=bt.length;ht<Jt;ht++)et=bt[ht],mt?Zt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,et.width,et.height,Mt,F,et.data):e.texImage2D(s.TEXTURE_2D,ht,at,et.width,et.height,0,Mt,F,et.data);E.generateMipmaps=!1}else mt?(wt&&e.texStorage2D(s.TEXTURE_2D,de,at,st.width,st.height),Zt&&ft(E,st,Mt,F)):e.texImage2D(s.TEXTURE_2D,0,at,st.width,st.height,0,Mt,F,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){mt&&wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,de,at,bt[0].width,bt[0].height,st.depth);for(let ht=0,Jt=bt.length;ht<Jt;ht++)if(et=bt[ht],E.format!==Fn)if(Mt!==null)if(mt){if(Zt)if(E.layerUpdates.size>0){const oe=wc(et.width,et.height,E.format,E.type);for(const Lt of E.layerUpdates){const Ae=et.data.subarray(Lt*oe/et.data.BYTES_PER_ELEMENT,(Lt+1)*oe/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,Lt,et.width,et.height,1,Mt,Ae)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,et.width,et.height,st.depth,Mt,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,at,et.width,et.height,st.depth,0,et.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Zt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,et.width,et.height,st.depth,Mt,F,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,at,et.width,et.height,st.depth,0,Mt,F,et.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{mt&&wt&&e.texStorage2D(s.TEXTURE_2D,de,at,bt[0].width,bt[0].height);for(let ht=0,Jt=bt.length;ht<Jt;ht++)et=bt[ht],E.format!==Fn?Mt!==null?mt?Zt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,et.width,et.height,Mt,et.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,at,et.width,et.height,0,et.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Zt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,et.width,et.height,Mt,F,et.data):e.texImage2D(s.TEXTURE_2D,ht,at,et.width,et.height,0,Mt,F,et.data)}else if(E.isDataArrayTexture)if(mt){if(wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,de,at,st.width,st.height,st.depth),Zt)if(E.layerUpdates.size>0){const ht=wc(st.width,st.height,E.format,E.type);for(const Jt of E.layerUpdates){const oe=st.data.subarray(Jt*ht/st.data.BYTES_PER_ELEMENT,(Jt+1)*ht/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Jt,st.width,st.height,1,Mt,F,oe)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,F,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,at,st.width,st.height,st.depth,0,Mt,F,st.data);else if(E.isData3DTexture)mt?(wt&&e.texStorage3D(s.TEXTURE_3D,de,at,st.width,st.height,st.depth),Zt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,F,st.data)):e.texImage3D(s.TEXTURE_3D,0,at,st.width,st.height,st.depth,0,Mt,F,st.data);else if(E.isFramebufferTexture){if(wt)if(mt)e.texStorage2D(s.TEXTURE_2D,de,at,st.width,st.height);else{let ht=st.width,Jt=st.height;for(let oe=0;oe<de;oe++)e.texImage2D(s.TEXTURE_2D,oe,at,ht,Jt,0,Mt,F,null),ht>>=1,Jt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),st.parentNode!==ht){ht.appendChild(st),d.add(E),ht.onpaint=Jt=>{const oe=Jt.changedElements;for(const Lt of d)oe.includes(Lt.image)&&(Lt.needsUpdate=!0)},ht.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,st);else{const oe=s.RGBA,Lt=s.RGBA,Ae=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,oe,Lt,Ae,st)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(bt.length>0){if(mt&&wt){const ht=kt(bt[0]);e.texStorage2D(s.TEXTURE_2D,de,at,ht.width,ht.height)}for(let ht=0,Jt=bt.length;ht<Jt;ht++)et=bt[ht],mt?Zt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Mt,F,et):e.texImage2D(s.TEXTURE_2D,ht,at,Mt,F,et);E.generateMipmaps=!1}else if(mt){if(wt){const ht=kt(st);e.texStorage2D(s.TEXTURE_2D,de,at,ht.width,ht.height)}Zt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,F,st)}else e.texImage2D(s.TEXTURE_2D,0,at,Mt,F,st);y(E)&&E.mipmapsAutoUpdate===!0&&_(ct),yt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ct(C,E,q){if(E.image.length!==6)return;const ct=ce(C,E),rt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+q);const xt=n.get(rt);if(rt.version!==xt.__version||ct===!0){e.activeTexture(s.TEXTURE0+q);const yt=Me.getPrimaries(Me.workingColorSpace),it=E.colorSpace===ci?null:Me.getPrimaries(E.colorSpace),st=E.colorSpace===ci||yt===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Mt=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,at=[];for(let Lt=0;Lt<6;Lt++)!Mt&&!F?at[Lt]=M(E.image[Lt],!0,i.maxCubemapSize):at[Lt]=F?E.image[Lt].image:E.image[Lt],at[Lt]=gt(E,at[Lt]);const et=at[0],bt=a.convert(E.format,E.colorSpace),mt=a.convert(E.type);let wt=b(E.internalFormat,bt,mt,E.normalized,E.colorSpace);const Zt=E.isVideoTexture!==!0,de=xt.__version===void 0||ct===!0,ht=rt.dataReady;let Jt=S(E,et);jt(s.TEXTURE_CUBE_MAP,E);let oe;if(E.isDepthTexture){if(wt=v(E.format===di,E.type),de)if(Zt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,wt,et.width,et.height);else for(let Lt=0;Lt<6;Lt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,wt,et.width,et.height,0,bt,mt,null)}else if(Mt){Zt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,wt,et.width,et.height);for(let Lt=0;Lt<6;Lt++){oe=at[Lt].mipmaps;for(let Ae=0;Ae<oe.length;Ae++){const $e=oe[Ae];E.format!==Fn?bt!==null?Zt?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae,0,0,$e.width,$e.height,bt,$e.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae,wt,$e.width,$e.height,0,$e.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae,0,0,$e.width,$e.height,bt,mt,$e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae,wt,$e.width,$e.height,0,bt,mt,$e.data)}}}else{if(oe=E.mipmaps,Zt&&de){oe.length>0&&Jt++;const Lt=kt(at[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,wt,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(F){Zt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,at[Lt].width,at[Lt].height,bt,mt,at[Lt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,wt,at[Lt].width,at[Lt].height,0,bt,mt,at[Lt].data);for(let Ae=0;Ae<oe.length;Ae++){const ei=oe[Ae].image[Lt].image;Zt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae+1,0,0,ei.width,ei.height,bt,mt,ei.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae+1,wt,ei.width,ei.height,0,bt,mt,ei.data)}}else{Zt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,bt,mt,at[Lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,wt,bt,mt,at[Lt]);for(let Ae=0;Ae<oe.length;Ae++){const $e=oe[Ae];Zt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae+1,0,0,bt,mt,$e.image[Lt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ae+1,wt,bt,mt,$e.image[Lt])}}}y(E)&&E.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),xt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function _t(C,E,q,ct,rt,xt){const yt=a.convert(q.format,q.colorSpace),it=a.convert(q.type),st=b(q.internalFormat,yt,it,q.normalized,q.colorSpace),Mt=n.get(E),F=n.get(q);if(F.__renderTarget=E,!Mt.__hasExternalTextures){const at=Math.max(1,E.width>>xt),et=Math.max(1,E.height>>xt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,xt,st,at,et,E.depth,0,yt,it,null):e.texImage2D(rt,xt,st,at,et,0,yt,it,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),W(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,rt,F.__webglTexture,0,J(E)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,rt,F.__webglTexture,xt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function te(C,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const ct=E.depthTexture,rt=ct&&ct.isDepthTexture?ct.type:null,xt=v(E.stencilBuffer,rt),yt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;W(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J(E),xt,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,J(E),xt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,C)}else{const ct=E.textures;for(let rt=0;rt<ct.length;rt++){const xt=ct[rt],yt=a.convert(xt.format,xt.colorSpace),it=a.convert(xt.type),st=b(xt.internalFormat,yt,it,xt.normalized,xt.colorSpace);W(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J(E),st,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,J(E),st,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,st,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ht(C,E,q){const ct=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const rt=n.get(E.depthTexture);rt.__renderTarget=E;const xt=ct?E.depthTexture.image[0]:E.depthTexture.image;(!rt.__webglTexture||xt.width!==E.width||xt.height!==E.height)&&(xt.width=E.width,xt.height=E.height,E.depthTexture.needsUpdate=!0),ct?St(E.depthTexture,0):dt(E.depthTexture,0);const yt=rt.__webglTexture,it=J(E),st=ct?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Mt=E.depthTexture.format===di?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===mi)W(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,st,yt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,st,yt,0);else if(E.depthTexture.format===di)W(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,st,yt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,Mt,st,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(C){const E=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ct=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",rt)};ct.addEventListener("dispose",rt),E.__depthDisposeCallback=rt}E.__boundDepthTexture=ct}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ct=0;ct<6;ct++)Ht(E.__webglFramebuffer[ct],C,ct);else C.texture.mipmaps.length>0?Ht(E.__webglFramebuffer[0],C,0):Ht(E.__webglFramebuffer,C,0);else if(q){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=s.createRenderbuffer(),te(E.__webglDepthbuffer[ct],C,!1);else{const rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,xt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),te(E.__webglDepthbuffer,C,!1);else{const rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,xt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(C,E,q){const ct=n.get(C);E!==void 0&&_t(ct.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&he(C)}function me(C){const E=C.texture,q=n.get(C),ct=n.get(E);C.addEventListener("dispose",z),I(C);const rt=C.textures,xt=C.isWebGLCubeRenderTarget===!0,yt=rt.length>1;if(yt||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=E.version,r.memory.textures++),xt){q.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps.length>0){q.__webglFramebuffer[it]=[];for(let st=0;st<E.mipmaps.length;st++)q.__webglFramebuffer[it][st]=s.createFramebuffer()}else q.__webglFramebuffer[it]=s.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)q.__webglFramebuffer[it]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(yt)for(let it=0,st=rt.length;it<st;it++){const Mt=n.get(rt[it]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture(),r.memory.textures++)}if(C.samples>0&&W(C)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let it=0;it<rt.length;it++){const st=rt[it];q.__webglColorRenderbuffer[it]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[it]);const Mt=a.convert(st.format,st.colorSpace),F=a.convert(st.type),at=b(st.internalFormat,Mt,F,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),et=J(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,at,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,q.__webglColorRenderbuffer[it])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),te(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),jt(s.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)_t(q.__webglFramebuffer[it][st],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,st);else _t(q.__webglFramebuffer[it],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);y(E)?_(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let it=0,st=rt.length;it<st;it++){const Mt=rt[it],F=n.get(Mt);let at=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,F.__webglTexture),jt(at,Mt),_t(q.__webglFramebuffer,C,Mt,s.COLOR_ATTACHMENT0+it,at,0),y(Mt)&&_(at)}e.unbindTexture()}else{let it=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(it,ct.__webglTexture),jt(it,E),E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)_t(q.__webglFramebuffer[st],C,E,s.COLOR_ATTACHMENT0,it,st);else _t(q.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,it,0);y(E)?_(it):E.mipmaps.length>0&&s.texParameteri(it,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&he(C)}function G(C){const E=C.textures;for(let q=0,ct=E.length;q<ct;q++){const rt=E[q];if(y(rt)&&rt.mipmapsAutoUpdate===!0){const xt=w(C),yt=n.get(rt).__webglTexture;e.bindTexture(xt,yt),_(xt),e.unbindTexture()}}}const Ue=[];function se(C){if(C.samples>0){if(W(C)===!1){const E=C.textures,q=C.width,ct=C.height;let rt=s.COLOR_BUFFER_BIT;const xt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(C),it=E.length>1;if(it)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),it){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const F=n.get(E[Mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,q,ct,0,0,q,ct,rt,s.NEAREST),l===!0&&(Ue.length=0,Ue.push(s.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Ue.push(xt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),it)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const F=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,F,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function J(C){return Math.min(i.maxSamples,C.samples)}function W(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Rt(C){const E=r.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function gt(C,E){const q=C.colorSpace,ct=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==Va&&q!==ci&&(Me.getTransfer(q)===Re?(ct!==Fn||rt!==Mn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",q)),E}function kt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=zt,this.resetTextureUnits=Z,this.getTextureUnits=tt,this.setTextureUnits=vt,this.setTexture2D=dt,this.setTexture2DArray=Dt,this.setTexture3D=qt,this.setTextureCube=St,this.rebindTextures=fe,this.setupRenderTarget=me,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=W,this.dispose=H}function vx(s,t){function e(n,i=ci){let a;const r=Me.getTransfer(i);if(n===Mn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return s.BYTE;if(n===mh)return s.SHORT;if(n===Hs)return s.UNSIGNED_SHORT;if(n===Yo)return s.INT;if(n===Bn)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===Gn)return s.HALF_FLOAT;if(n===vh)return s.ALPHA;if(n===Mh)return s.RGB;if(n===Fn)return s.RGBA;if(n===mi)return s.DEPTH_COMPONENT;if(n===di)return s.DEPTH_STENCIL;if(n===Ko)return s.RED;if(n===Jo)return s.RED_INTEGER;if(n===Ri)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===jo)return s.RGBA_INTEGER;if(n===Na||n===Ua||n===Oa||n===Fa)if(r===Re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Na)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Na)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===to)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===no)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===io)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===so||n===ao||n===ro||n===oo||n===lo||n===Ga||n===co)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===so||n===ao)return r===Re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ro)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===oo)return a.COMPRESSED_R11_EAC;if(n===lo)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ga)return a.COMPRESSED_RG11_EAC;if(n===co)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===vo||n===Mo||n===_o||n===yo||n===wo||n===So||n===bo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ho)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return r===Re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===To||n===Ao)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Eo)return r===Re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ro||n===Co||n===Ha||n===Po)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ro)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Oh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:Mx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new A(new ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wx extends Di{constructor(t,e){super();const n=this;let i=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null;const x=typeof XRWebGLBinding<"u",m=new yx,g={},M=e.getContextAttributes();let y=null,_=null;const w=[],b=[],v=new lt;let S=null,I=null;const R=new vn;R.viewport=new Fe;const L=new vn;L.viewport=new Fe;const z=[R,L],k=new Df;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=w[j];return dt===void 0&&(dt=new gr,w[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=w[j];return dt===void 0&&(dt=new gr,w[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=w[j];return dt===void 0&&(dt=new gr,w[j]=dt),dt.getHandSpace()};function X(j){const dt=b.indexOf(j.inputSource);if(dt===-1)return;const Dt=w[dt];Dt!==void 0&&(Dt.update(j.inputSource,j.frame,c||r),Dt.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",K);for(let j=0;j<w.length;j++){const dt=b[j];dt!==null&&(b[j]=null,w[j].disconnect(dt))}D=null,H=null,m.reset();for(const j in g)delete g[j];if(t.setRenderTarget(y),u=null,f=null,d=null,i=null,_=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(v.width,v.height,!1),I!==null){const j=I.camera;j.fov=I.fov,j.zoom=I.zoom,j.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",U),i.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,qt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Dt=M.stencil?di:mi,qt=M.stencil?cs:Bn);const Xt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new zn(f.textureWidth,f.textureHeight,{format:Fn,type:Mn,depthTexture:new ds(f.textureWidth,f.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Dt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(i,e,Dt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new zn(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(j){for(let dt=0;dt<j.removed.length;dt++){const Dt=j.removed[dt],qt=b.indexOf(Dt);qt>=0&&(b[qt]=null,w[qt].disconnect(Dt))}for(let dt=0;dt<j.added.length;dt++){const Dt=j.added[dt];let qt=b.indexOf(Dt);if(qt===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=b.length){b.push(Dt),qt=Xt;break}else if(b[Xt]===null){b[Xt]=Dt,qt=Xt;break}if(qt===-1)break}const St=w[qt];St&&St.connect(Dt)}}function V(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let dt=j.near,Dt=j.far;m.texture!==null&&(m.depthNear>0&&(dt=m.depthNear),m.depthFar>0&&(Dt=m.depthFar)),k.near=L.near=R.near=dt,k.far=L.far=R.far=Dt,(D!==k.near||H!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,H=k.far),k.layers.mask=j.layers.mask|6,R.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const qt=j.parent,St=k.cameras;V(k,qt);for(let Xt=0;Xt<St.length;Xt++)V(St[Xt],qt);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&j.isPerspectiveCamera&&(I={camera:j,fov:j.fov,zoom:j.zoom}),Z(j,k,qt)};function Z(j,dt,Dt){Dt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(Dt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return g[j]};let tt=null;function vt(j,dt){if(h=dt.getViewerPose(c||r),p=dt,h!==null){const Dt=h.views;u!==null&&(t.setRenderTargetFramebuffer(_,u.framebuffer),t.setRenderTarget(_));let qt=!1;Dt.length!==k.cameras.length&&(k.cameras.length=0,qt=!0);for(let Ut=0;Ut<Dt.length;Ut++){const jt=Dt[Ut];let ce=null;if(u!==null)ce=u.getViewport(jt);else{const ft=d.getViewSubImage(f,jt);ce=ft.viewport,Ut===0&&(t.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(_))}let ot=z[Ut];ot===void 0&&(ot=new vn,ot.layers.enable(Ut),ot.viewport=new Fe,z[Ut]=ot),ot.matrix.fromArray(jt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(jt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ce.x,ce.y,ce.width,ce.height),Ut===0&&(k.matrix.copy(ot.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),qt===!0&&k.cameras.push(ot)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ut=d.getDepthInformation(Dt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,i.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ut=0;Ut<Dt.length;Ut++){const jt=Dt[Ut].camera;if(jt){let ce=g[jt];ce||(ce=new Oh,g[jt]=ce);const ot=d.getCameraImage(jt);ce.sourceTexture=ot}}}}for(let Dt=0;Dt<w.length;Dt++){const qt=b[Dt],St=w[Dt];qt!==null&&St!==void 0&&St.update(qt,dt,c||r)}tt&&tt(j,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),p=null}const zt=new Zh;zt.setAnimationLoop(vt),this.setAnimationLoop=function(j){tt=j},this.dispose=function(){}}}const Sx=new ye,ad=new ee;ad.set(-1,0,0,0,1,0,0,0,1);function bx(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,qh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,y,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?a(m,g):g.isMeshLambertMaterial?(a(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(m,g),d(m,g)):g.isMeshPhongMaterial?(a(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,_)):g.isMeshMatcapMaterial?(a(m,g),p(m,g)):g.isMeshDepthMaterial?a(m,g):g.isMeshDistanceMaterial?(a(m,g),x(m,g)):g.isMeshNormalMaterial?a(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),y=M.envMap,_=M.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ad),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ex(s,t,e,n){let i={},a={};function r(M,y){const _=y.program;n.uniformBlockBinding(M,_,i[M.id])}function o(M,y){let _=i[M.id];_===void 0&&(p(M),_=l(M),i[M.id]=_,M.addEventListener("dispose",m));const w=y.program;n.updateUBOMapping(M,w);const b=t.render.frame;a[M.id]!==b&&(c(M),a[M.id]=b)}function l(M){const y=s.createBuffer(),_=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,_,w),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(M){const y=i[M.id],_=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,v=_.length;b<v;b++){const S=_[b];if(Array.isArray(S))for(let I=0,R=S.length;I<R;I++)h(S[I],b,I,w);else h(S,b,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,y,_,w){if(f(M,y,_,w)===!0){const b=M.__offset,v=M.value;if(Array.isArray(v)){let S=0;for(let I=0;I<v.length;I++){const R=v[I],L=x(R,!0);d(R,M.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,M.__data)}}function d(M,y,_){typeof M=="number"||typeof M=="boolean"?y[_]=M:M.isMatrix3?(y[_]=M.elements[0],y[_+1]=M.elements[1],y[_+2]=M.elements[2],y[_+3]=0,y[_+4]=M.elements[3],y[_+5]=M.elements[4],y[_+6]=M.elements[5],y[_+7]=0,y[_+8]=M.elements[6],y[_+9]=M.elements[7],y[_+10]=M.elements[8],y[_+11]=0):ArrayBuffer.isView(M)?y.set(M.subarray(0,y.length-_),_):M.toArray(y,_)}function f(M,y,_,w){const b=M.value,v=y+"_"+_;if(Array.isArray(b)){w[v]===void 0&&(w[v]=[]);const S=w[v];let I=!1;for(let R=0;R<b.length;R++)u(b[R],S,R)===!0&&(I=!0);return I}return u(b,w,v)}function u(M,y,_){if(y[_]===void 0)return typeof M=="number"||typeof M=="boolean"?y[_]=M:ArrayBuffer.isView(M)?y[_]=M.slice():y[_]=M.clone(),!0;{const w=y[_];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return y[_]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function p(M){const y=M.uniforms;let _=0;const w=16;for(let v=0,S=y.length;v<S;v++){const I=Array.isArray(y[v])?y[v]:[y[v]];for(let R=0,L=I.length;R<L;R++){const z=I[R],k=Array.isArray(z.value)?z.value:[z.value],D=Array.isArray(y[v])||Array.isArray(z.value);let H=_;for(let U=0,K=k.length;U<K;U++){const V=k[U],Z=x(V,D),tt=_%w,vt=tt%Z.boundary,zt=tt+vt;_+=vt,zt!==0&&w-zt<Z.storage&&(_+=w-zt),U===0&&(H=_),_+=Z.storage}const X=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new X((_-H)/Float32Array.BYTES_PER_ELEMENT),z.__offset=H}}const b=_%w;return b>0&&(_+=w-b),M.__size=_,M.__cache={},this}function x(M,y){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=16,_.storage=48):M.isMatrix4?(_.boundary=16,_.storage=64):M.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",M),y===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(M){const y=M.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete a[y.id]}function g(){for(const M in i)s.deleteBuffer(i[M]);i={},a={}}return{bind:r,update:o,dispose:g}}const Tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function Ax(){return Un===null&&(Un=new Ih(Tx,16,16,Ri,Gn),Un.name="DFG_LUT",Un.minFilter=mn,Un.magFilter=mn,Un.wrapS=Jn,Un.wrapT=Jn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class Rx{constructor(t={}){const{canvas:e=Zd(),context:n=null,depth:i=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const x=u,m=new Set([jo,Qo,Jo]),g=new Set([Mn,Bn,Hs,cs,$o,Zo]),M=new Uint32Array(4),y=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const v=[],S=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,z=null,k=null,D=null,H=null;this._outputColorSpace=rn;let X=0,U=0,K=null,V=-1,Z=null;const tt=new Fe,vt=new Fe;let zt=null;const j=new Kt(0);let dt=0,Dt=e.width,qt=e.height,St=1,Xt=null,le=null;const Ut=new Fe(0,0,Dt,qt),jt=new Fe(0,0,Dt,qt);let ce=!1;const ot=new Ws,ft=new rl;let pt=!1,Ct=!1;const _t=new ye,te=new N,Ht=new Fe,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function me(){return K===null?St:1}let G=n;function Ue(T,B){return e.getContext(T,B)}let se,J,W,Rt,gt,kt,C,E,q,ct,rt,xt,yt,it,st,Mt,F,at,et,bt,mt,wt,Zt;try{const T={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xo}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),G===null){const B="webgl2";if(G=Ue(B,T),G===null)throw Ue(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}de()}catch(T){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),be("WebGLRenderer: "+T.message),T}function de(){se=new L0(G),se.init(),mt=new vx(G,se),J=new _0(G,se,t,mt),W=new gx(G,se),J.reversedDepthBuffer&&f&&W.buffers.depth.setReversed(!0),k=G.createFramebuffer(),D=G.createFramebuffer(),H=G.createFramebuffer(),Rt=new N0(G),gt=new nx,kt=new xx(G,se,W,gt,J,mt,Rt),C=new P0(R),E=new Of(G),wt=new v0(G,E),q=new I0(G,E,Rt,wt),ct=new O0(G,q,E,wt,Rt),at=new U0(G,J,kt),st=new y0(gt),rt=new ex(R,C,se,J,wt,st),xt=new bx(R,gt),yt=new sx,it=new hx(se),F=new x0(R,C,W,ct,p,l),Mt=new mx(R,ct,J),Zt=new Ex(G,Rt,J,W),et=new M0(G,se,Rt),bt=new D0(G,se,Rt),Rt.programs=rt.programs,R.capabilities=J,R.extensions=se,R.properties=gt,R.renderLists=yt,R.shadowMap=Mt,R.state=W,R.info=Rt}x!==Mn&&(I=new z0(x,e.width,e.height,o,i,a));const ht=new wx(R,G);this.xr=ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(T){T!==void 0&&(St=T,this.setSize(Dt,qt,!1))},this.getSize=function(T){return T.set(Dt,qt)},this.setSize=function(T,B,Q=!0){if(ht.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Dt=T,qt=B,e.width=Math.floor(T*St),e.height=Math.floor(B*St),Q===!0&&(e.style.width=T+"px",e.style.height=B+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Dt*St,qt*St).floor()},this.setDrawingBufferSize=function(T,B,Q){Dt=T,qt=B,St=Q,e.width=Math.floor(T*Q),e.height=Math.floor(B*Q),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(x===Mn){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(tt)},this.getViewport=function(T){return T.copy(Ut)},this.setViewport=function(T,B,Q,Y){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,B,Q,Y),W.viewport(tt.copy(Ut).multiplyScalar(me()).round())},this.getScissor=function(T){return T.copy(jt)},this.setScissor=function(T,B,Q,Y){T.isVector4?jt.set(T.x,T.y,T.z,T.w):jt.set(T,B,Q,Y),W.scissor(vt.copy(jt).multiplyScalar(me()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(T){W.setScissorTest(ce=T)},this.setOpaqueSort=function(T){Xt=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Q=!0){let Y=0;if(T){let $=!1;if(K!==null){const Tt=K.texture.format;$=m.has(Tt)}if($){const Tt=K.texture.type,Bt=g.has(Tt),Et=F.getClearColor(),Nt=F.getClearAlpha(),Yt=Et.r,ne=Et.g,ge=Et.b;Bt?(M[0]=Yt,M[1]=ne,M[2]=ge,M[3]=Nt,G.clearBufferuiv(G.COLOR,0,M)):(y[0]=Yt,y[1]=ne,y[2]=ge,y[3]=Nt,G.clearBufferiv(G.COLOR,0,y))}else Y|=G.COLOR_BUFFER_BIT}B&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),F.dispose(),yt.dispose(),it.dispose(),kt.dispose(),gt.dispose(),C.dispose(),ct.dispose(),q.dispose(),wt.dispose(),Zt.dispose(),rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",yl),ht.removeEventListener("sessionend",wl),vi.stop()};function Jt(T){T.preventDefault(),qa("WebGLRenderer: Context Lost."),L=!0}function oe(){qa("WebGLRenderer: Context Restored."),L=!1;const T=Rt.autoReset,B=Mt.enabled,Q=Mt.autoUpdate,Y=Mt.needsUpdate,$=Mt.type;de(),Rt.autoReset=T,Mt.enabled=B,Mt.autoUpdate=Q,Mt.needsUpdate=Y,Mt.type=$}function Lt(T){be("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){const B=T.target;B.removeEventListener("dispose",Ae),$e(B)}function $e(T){ei(T),gt.remove(T)}function ei(T){const B=gt.get(T).programs;B!==void 0&&(B.forEach(function(Q){rt.releaseProgram(Q)}),T.isShaderMaterial&&rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Q,Y,$,Tt){B===null&&(B=he);const Bt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Et=ud(T,B,Q,Y,$);W.setMaterial(Y,Bt);let Nt=Q.index,Yt=1;if(Y.wireframe===!0){if(Nt=q.getWireframeAttribute(Q),Nt===void 0)return;Yt=2}const ne=Q.drawRange,ge=Q.attributes.position;let Vt=ne.start*Yt,xe=(ne.start+ne.count)*Yt;Tt!==null&&(Vt=Math.max(Vt,Tt.start*Yt),xe=Math.min(xe,(Tt.start+Tt.count)*Yt)),Nt!==null?(Vt=Math.max(Vt,0),xe=Math.min(xe,Nt.count)):ge!=null&&(Vt=Math.max(Vt,0),xe=Math.min(xe,ge.count));const Ge=xe-Vt;if(Ge<0||Ge===1/0)return;wt.setup($,Y,Et,Q,Nt);let Le,Pe=et;if(Nt!==null&&(Le=E.get(Nt),Pe=bt,Pe.setIndex(Le)),$.isMesh)Y.wireframe===!0?(W.setLineWidth(Y.wireframeLinewidth*me()),Pe.setMode(G.LINES)):Pe.setMode(G.TRIANGLES);else if($.isLine){let en=Y.linewidth;en===void 0&&(en=1),W.setLineWidth(en*me()),$.isLineSegments?Pe.setMode(G.LINES):$.isLineLoop?Pe.setMode(G.LINE_LOOP):Pe.setMode(G.LINE_STRIP)}else $.isPoints?Pe.setMode(G.POINTS):$.isSprite&&Pe.setMode(G.TRIANGLES);if($.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const en=$._multiDrawStarts,Wt=$._multiDrawCounts,ln=$._multiDrawCount,Ee=Nt?E.get(Nt).bytesPerElement:1,Mi=gt.get(Y).currentProgram.getUniforms();for(let nn=0;nn<ln;nn++)Mi.setValue(G,"_gl_DrawID",nn),Pe.render(en[nn]/Ee,Wt[nn])}else if($.isInstancedMesh)Pe.renderInstances(Vt,Ge,$.count);else if(Q.isInstancedBufferGeometry){const en=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Wt=Math.min(Q.instanceCount,en);Pe.renderInstances(Vt,Ge,Wt)}else Pe.render(Vt,Ge)};function _l(T,B,Q,Y){z!==null&&T.isNodeMaterial&&z.setObject(Y,T),pt===!0&&st.setState(T,Q,!1),T.transparent===!0&&T.side===Qe&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,gs(T,B,Y),T.side=Ai,T.needsUpdate=!0,gs(T,B,Y),T.side=Qe):gs(T,B,Y)}this.compile=function(T,B,Q=null){Q===null&&(Q=T),z!==null&&z.renderStart(T,B,Q),b=it.get(Q),b.init(B),S.push(b),Q.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),T!==Q&&T.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),z!==null&&z.updateLights(b.state.lightsArray),Ct=this.localClippingEnabled,pt=st.init(this.clippingPlanes,Ct),pt===!0&&st.setGlobalState(this.clippingPlanes,B),z!==null&&Mt.render(b.state.shadowsArray,Q,B);const Y=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Tt=$.material;if(Tt)if(Array.isArray(Tt))for(let Bt=0;Bt<Tt.length;Bt++){const Et=Tt[Bt];_l(Et,Q,B,$),Y.add(Et)}else _l(Tt,Q,B,$),Y.add(Tt)}),b=S.pop(),z!==null&&z.renderEnd(),Y},this.compileAsync=function(T,B,Q=null){const Y=this.compile(T,B,Q);return new Promise($=>{function Tt(){if(Y.forEach(function(Bt){const Nt=gt.get(Bt).currentProgram;(Nt===void 0||Nt.isReady())&&Y.delete(Bt)}),Y.size===0){$(T);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let ar=null;function hd(T){ar&&ar(T)}function yl(){vi.stop()}function wl(){vi.start()}const vi=new Zh;vi.setAnimationLoop(hd),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(T){ar=T,ht.setAnimationLoop(T),T===null?vi.stop():vi.start()},ht.addEventListener("sessionstart",yl),ht.addEventListener("sessionend",wl),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(T,B);const Q=ht.enabled===!0&&ht.isPresenting===!0,Y=I!==null&&(K===null||Q)&&I.begin(R,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(B),B=ht.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,B,K),b=it.get(T,S.length),b.init(B),b.state.textureUnits=kt.getTextureUnits(),S.push(b),_t.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ft.setFromArrayCamera(B):ot.setFromProjectionMatrix(_t,Ln,B.reversedDepth),Ct=this.localClippingEnabled,pt=st.init(this.clippingPlanes,Ct),w=yt.get(T,v.length),w.init(),v.push(w),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){const Bt=R.xr.getDepthSensingMesh();Bt!==null&&rr(Bt,B,-1/0,R.sortObjects)}rr(T,B,0,R.sortObjects),w.finish(),z!==null&&z.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(Xt,le),fe=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,fe&&F.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),pt===!0&&st.beginShadows();const $=b.state.shadowsArray;if(Mt.render($,T,B),pt===!0&&st.endShadows(),(Y&&I.hasRenderPass())===!1){const Bt=w.opaque,Et=w.transmissive;if(b.setupLights(),B.isArrayCamera){const Nt=B.cameras;if(Et.length>0)for(let Yt=0,ne=Nt.length;Yt<ne;Yt++){const ge=Nt[Yt];bl(Bt,Et,T,ge)}fe&&F.render(T);for(let Yt=0,ne=Nt.length;Yt<ne;Yt++){const ge=Nt[Yt];Sl(w,T,ge,ge.viewport)}}else Et.length>0&&bl(Bt,Et,T,B),fe&&F.render(T),Sl(w,T,B)}K!==null&&U===0&&(kt.updateMultisampleRenderTarget(K),kt.updateRenderTargetMipmap(K)),Y&&I.end(R),T.isScene===!0&&T.onAfterRender(R,T,B),wt.resetDefaultState(),V=-1,Z=null,S.pop(),S.length>0?(b=S[S.length-1],kt.setTextureUnits(b.state.textureUnits),pt===!0&&st.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,z!==null&&z.renderEnd()};function rr(T,B,Q,Y){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){const Bt=B.isArrayCamera?ft:ot;if(!T.frustumCulled||T.intersectsFrustum(Bt)){Y&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_t);const Et=ct.update(T),Nt=T.material;Nt.visible&&w.push(T,Et,Nt,Q,Ht.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){const Bt=B.isArrayCamera?ft:ot;if(!T.frustumCulled||T.intersectsFrustum(Bt)){const Et=ct.update(T),Nt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ht.copy(Et.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(_t)),Array.isArray(Nt)){const Yt=Et.groups;for(let ne=0,ge=Yt.length;ne<ge;ne++){const Vt=Yt[ne],xe=Nt[Vt.materialIndex];xe&&xe.visible&&w.push(T,Et,xe,Q,Ht.z,Vt,B)}}else Nt.visible&&w.push(T,Et,Nt,Q,Ht.z,null,B)}}}const Tt=T.children;for(let Bt=0,Et=Tt.length;Bt<Et;Bt++)rr(Tt[Bt],B,Q,Y)}function Sl(T,B,Q,Y){const{opaque:$,transmissive:Tt,transparent:Bt}=T;b.setupLightsView(Q),pt===!0&&st.setGlobalState(R.clippingPlanes,Q),Y&&W.viewport(tt.copy(Y)),$.length>0&&Qs($,B,Q),Tt.length>0&&Qs(Tt,B,Q),Bt.length>0&&Qs(Bt,B,Q),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function bl(T,B,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const Vt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:Vt?Gn:Mn,minFilter:hi,samples:Math.max(4,J.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}const Tt=b.state.transmissionRenderTarget[Y.id],Bt=Y.viewport||tt;Tt.setSize(Bt.z*R.transmissionResolutionScale,Bt.w*R.transmissionResolutionScale);const Et=R.getRenderTarget(),Nt=R.getActiveCubeFace(),Yt=R.getActiveMipmapLevel();R.setRenderTarget(Tt),R.getClearColor(j),dt=R.getClearAlpha(),dt<1&&R.setClearColor(16777215,.5),R.clear(),fe&&F.render(Q);const ne=R.toneMapping;R.toneMapping=Qn;const ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),pt===!0&&st.setGlobalState(R.clippingPlanes,Y),Qs(T,Q,Y),kt.updateMultisampleRenderTarget(Tt),kt.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let xe=0,Ge=B.length;xe<Ge;xe++){const Le=B[xe],{object:Pe,geometry:en,material:Wt,group:ln}=Le;if(Wt.side===Qe&&Pe.layers.test(Y.layers)){const Ee=Wt.side;Wt.side=fn,Wt.needsUpdate=!0,El(Pe,Q,Y,en,Wt,ln),Wt.side=Ee,Wt.needsUpdate=!0,Vt=!0}}Vt===!0&&(kt.updateMultisampleRenderTarget(Tt),kt.updateRenderTargetMipmap(Tt))}R.setRenderTarget(Et,Nt,Yt),R.setClearColor(j,dt),ge!==void 0&&(Y.viewport=ge),R.toneMapping=ne}function Qs(T,B,Q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let $=0,Tt=T.length;$<Tt;$++){const Bt=T[$],{object:Et,geometry:Nt,group:Yt}=Bt;let ne=Bt.material;ne.allowOverride===!0&&Y!==null&&(ne=Y),Et.layers.test(Q.layers)&&El(Et,B,Q,Nt,ne,Yt)}}function El(T,B,Q,Y,$,Tt){z!==null&&$.isNodeMaterial&&z.setObject(T,$),T.onBeforeRender(R,B,Q,Y,$,Tt),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(R,B,Q,Y,T,Tt),$.transparent===!0&&$.side===Qe&&$.forceSinglePass===!1?($.side=fn,$.needsUpdate=!0,R.renderBufferDirect(Q,B,Y,$,T,Tt),$.side=Ai,$.needsUpdate=!0,R.renderBufferDirect(Q,B,Y,$,T,Tt),$.side=Qe):R.renderBufferDirect(Q,B,Y,$,T,Tt),T.onAfterRender(R,B,Q,Y,$,Tt)}function Tl(T){let B=0;for(const Q of T)Q.texture!==null&&B++;return B}function gs(T,B,Q){B.isScene!==!0&&(B=he);const Y=gt.get(T),$=b.state.lights,Tt=b.state.shadowsArray,Bt=$.state.version,Et=rt.getParameters(T,$.state,Tt,B,Q,b.state.lightProbeGridArray),Nt=rt.getProgramCacheKey(Et);let Yt=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;const ne=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=C.get(T.envMap||Y.environment,ne),Y.envMapRotation=Y.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Yt===void 0&&(T.addEventListener("dispose",Ae),Yt=new Map,Y.programs=Yt,Y.programVariants=new Map);let ge=Yt.get(Nt);if(ge!==void 0){if(Y.currentProgram===ge&&Y.lightsStateVersion===Bt)return Rl(T,Et),ge}else Et.uniforms=rt.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,Q,Et),T.onBeforeCompile(Et,R),ge=rt.acquireProgram(Et,Nt),Yt.set(Nt,ge),Y.uniforms=Et.uniforms;const Vt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=st.uniform),Rl(T,Et),Y.needsLights=pd(T),Y.lightsStateVersion=Bt,Y.needsLights&&(Vt.ambientLightColor.value=$.state.ambient,Vt.lightProbe.value=$.state.probe,Vt.sunLights.value=$.state.sun,Vt.sunLightShadows.value=$.state.sunShadow,Vt.directionalLights.value=$.state.directional,Vt.directionalLightShadows.value=$.state.directionalShadow,Vt.spotLights.value=$.state.spot,Vt.spotLightShadows.value=$.state.spotShadow,Vt.rectAreaLights.value=$.state.rectArea,Vt.ltc_1.value=$.state.rectAreaLTC1,Vt.ltc_2.value=$.state.rectAreaLTC2,Vt.pointLights.value=$.state.point,Vt.pointLightShadows.value=$.state.pointShadow,Vt.hemisphereLights.value=$.state.hemi,Vt.sunShadowMatrix.value=$.state.sunShadowMatrix,Vt.sunShadowCascade.value=$.state.sunShadowCascade,Vt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Vt.spotLightMatrix.value=$.state.spotLightMatrix,Vt.spotLightMap.value=$.state.spotLightMap,Vt.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.numLightProbeGrids=Tl(b.state.lightProbeGridArray),Y.currentProgram=ge,Y.uniformsList=null,ge}function dd(T,B,Q,Y,$){const Tt=gt.get(T),Bt=Tt.currentProgram.id+","+Y+","+$;let Et=Tt.programVariants.get(Bt);return Et===void 0?(Et=gs(T,B,Q),Tt.programVariants.set(Bt,Et)):(Tt.currentProgram=Et,Tt.uniformsList=null,Tt.outputColorSpace=Y,Tt.toneMapping=$),Et}function Al(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=ka.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Rl(T,B){const Q=gt.get(T);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function ud(T,B,Q,Y,$){B.isScene!==!0&&(B=he),kt.resetTextureUnits();const Tt=B.fog,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Et=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Me.workingColorSpace,Nt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Yt=C.get(Y.envMap||Bt,Nt),ne=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ge=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Vt=!!Q.morphAttributes.position,xe=!!Q.morphAttributes.normal,Ge=!!Q.morphAttributes.color;let Le=Qn;Y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=R.toneMapping);const Pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,en=Pe!==void 0?Pe.length:0,Wt=gt.get(Y),ln=b.state.lights;if(pt===!0&&(Ct===!0||T!==Z)){const Oe=T===Z&&Y.id===V;st.setState(Y,T,Oe)}let Ee=!1,Mi=!1;Y.version===Wt.__version?Wt.needsLights&&Wt.lightsStateVersion!==ln.state.version||$.isBatchedMesh&&Wt.batching===!1||!$.isBatchedMesh&&Wt.batching===!0||$.isBatchedMesh&&Wt.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Wt.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Wt.instancing===!1||!$.isInstancedMesh&&Wt.instancing===!0||$.isSkinnedMesh&&Wt.skinning===!1||!$.isSkinnedMesh&&Wt.skinning===!0||$.isInstancedMesh&&Wt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Wt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Wt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Wt.instancingMorph===!1&&$.morphTexture!==null||Wt.envMap!==Yt||Y.fog===!0&&Wt.fog!==Tt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==st.numPlanes||Wt.numIntersection!==st.numIntersection)||Wt.vertexAlphas!==ne||Wt.vertexTangents!==ge||Wt.morphTargets!==Vt||Wt.morphNormals!==xe||Wt.morphColors!==Ge||Wt.morphTargetsCount!==en||Wt.numLightProbeGrids!==Tl(b.state.lightProbeGridArray)?Ee=!0:(Wt.outputColorSpace!==Et||Wt.toneMapping!==Le)&&(Mi=!0):(Ee=!0,Wt.__version=Y.version);let nn=Wt.currentProgram;(Ee===!0||Mi===!0)&&(nn=Mi===!0?dd(Y,B,$,Et,Le):gs(Y,B,$),z&&Y.isNodeMaterial&&z.onUpdateProgram(Y,nn,Wt));let js=!1,ni=!1,_i=!1;const Se=nn.getUniforms(),Je=Wt.uniforms;if(W.useProgram(nn.program)&&(js=!0,ni=!0,_i=!0),Y.id!==V&&(V=Y.id,ni=!0),js||Z!==T){W.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Se.setValue(G,"projectionMatrix",T.projectionMatrix),Se.setValue(G,"viewMatrix",T.matrixWorldInverse);const Ze=Se.map.cameraPosition;Ze!==void 0&&Ze.setValue(G,te.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&Se.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Se.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,ni=!0,_i=!0)}if(Wt.needsLights&&(ln.state.sunShadowMap.length>0&&Se.setValue(G,"sunShadowMap",ln.state.sunShadowMap,kt),ln.state.directionalShadowMap.length>0&&Se.setValue(G,"directionalShadowMap",ln.state.directionalShadowMap,kt),ln.state.spotShadowMap.length>0&&Se.setValue(G,"spotShadowMap",ln.state.spotShadowMap,kt),ln.state.pointShadowMap.length>0&&Se.setValue(G,"pointShadowMap",ln.state.pointShadowMap,kt)),$.isSkinnedMesh){Se.setOptional(G,$,"bindMatrix"),Se.setOptional(G,$,"bindMatrixInverse");const Oe=$.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Se.setValue(G,"boneTexture",Oe.boneTexture,kt))}$.isBatchedMesh&&(Se.setOptional(G,$,"batchingTexture"),Se.setValue(G,"batchingTexture",$._matricesTexture,kt),Se.setOptional(G,$,"batchingIdTexture"),Se.setValue(G,"batchingIdTexture",$._indirectTexture,kt),Se.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&Se.setValue(G,"batchingColorTexture",$._colorsTexture,kt));const bn=Q.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&at.update($,Q,nn),(ni||Wt.receiveShadow!==$.receiveShadow)&&(Wt.receiveShadow=$.receiveShadow,Se.setValue(G,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Je.envMapIntensity.value=B.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=Ax()),ni){if(Se.setValue(G,"toneMappingExposure",R.toneMappingExposure),Wt.needsLights&&fd(Je,_i),Tt&&Y.fog===!0&&xt.refreshFogUniforms(Je,Tt),xt.refreshMaterialUniforms(Je,Y,St,qt,b.state.transmissionRenderTarget[T.id]),Wt.needsLights&&Wt.numLightProbeGrids>0){const Oe=_;let Ze=0;for(const Wn of b.state.lightProbeGridArray)Wn.texture!==null&&(Oe.textures[Ze]=Wn.texture,Oe.min[Ze]=Wn.boundingBox.min,Oe.max[Ze]=Wn.boundingBox.max,Oe.resolution[Ze]=Wn.resolution,Ze++);for(const Wn in Oe)Oe[Wn].length=Ze;Je.probesSH.value=Oe.textures,Je.probesMin.value=Oe.min,Je.probesMax.value=Oe.max,Je.probesResolution.value=Oe.resolution}ka.upload(G,Al(Wt),Je,kt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ka.upload(G,Al(Wt),Je,kt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Se.setValue(G,"center",$.center),Se.setValue(G,"modelViewMatrix",$.modelViewMatrix),Se.setValue(G,"normalMatrix",$.normalMatrix),Se.setValue(G,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const Oe=Y.uniformsGroups;for(let Ze=0,Wn=Oe.length;Ze<Wn;Ze++){const Pl=Oe[Ze];Zt.update(Pl,nn),Zt.bind(Pl,nn)}}return nn}function fd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function pd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,B,Q){const Y=gt.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),gt.get(T.texture).__webglTexture=B,gt.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const Q=gt.get(T);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Q=0){K=T,X=B,U=Q;let Y=null,$=!1,Tt=!1;if(T){const Et=gt.get(T);if(Et.__useDefaultFramebuffer!==void 0){W.bindFramebuffer(G.FRAMEBUFFER,Et.__webglFramebuffer),tt.copy(T.viewport),vt.copy(T.scissor),zt=T.scissorTest,W.viewport(tt),W.scissor(vt),W.setScissorTest(zt),V=-1;return}else if(Et.__webglFramebuffer===void 0)kt.setupRenderTarget(T);else if(Et.__hasExternalTextures)kt.rebindTextures(T,gt.get(T.texture).__webglTexture,gt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ne=T.depthTexture;if(Et.__boundDepthTexture!==ne){if(ne!==null&&gt.has(ne)&&(T.width!==ne.image.width||T.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(T)}}const Nt=T.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Tt=!0);const Yt=gt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Yt[B])?Y=Yt[B][Q]:Y=Yt[B],$=!0):T.samples>0&&kt.useMultisampledRTT(T)===!1?Y=gt.get(T).__webglMultisampledFramebuffer:Array.isArray(Yt)?Y=Yt[Q]:Y=Yt,tt.copy(T.viewport),vt.copy(T.scissor),zt=T.scissorTest}else tt.copy(Ut).multiplyScalar(St).floor(),vt.copy(jt).multiplyScalar(St).floor(),zt=ce;if(Q!==0&&(Y=k),W.bindFramebuffer(G.FRAMEBUFFER,Y)&&W.drawBuffers(T,Y),W.viewport(tt),W.scissor(vt),W.setScissorTest(zt),$){const Et=gt.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,Q)}else if(Tt){const Et=B;for(let Nt=0;Nt<T.textures.length;Nt++){const Yt=gt.get(T.textures[Nt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Nt,Yt.__webglTexture,Q,Et)}}else if(T!==null&&Q!==0){const Et=gt.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Et.__webglTexture,Q)}V=-1};function Cl(T){const B=gt.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=J.textureFormatReadable(T.format),B.__typeReadable=J.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,Q,Y,$,Tt,Bt,Et=0){if(!(T&&T.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){W.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const Yt=T.textures[Et],ne=Yt.format,ge=Yt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Et);const Vt=Cl(Yt);if(Vt.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Y&&Q>=0&&Q<=T.height-$&&G.readPixels(B,Q,Y,$,mt.convert(ne),mt.convert(ge),Tt)}finally{const Yt=K!==null?gt.get(K).__webglFramebuffer:null;W.bindFramebuffer(G.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(T,B,Q,Y,$,Tt,Bt,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(B>=0&&B<=T.width-Y&&Q>=0&&Q<=T.height-$){W.bindFramebuffer(G.FRAMEBUFFER,Nt);const Yt=T.textures[Et],ne=Yt.format,ge=Yt.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Et);const Vt=Cl(Yt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,xe),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(B,Q,Y,$,mt.convert(ne),mt.convert(ge),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Ge=K!==null?gt.get(K).__webglFramebuffer:null;W.bindFramebuffer(G.FRAMEBUFFER,Ge);const Le=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Kd(G,Le,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,xe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(xe),G.deleteSync(Le),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Q=0){const Y=Math.pow(2,-Q),$=Math.floor(T.image.width*Y),Tt=Math.floor(T.image.height*Y),Bt=B!==null?B.x:0,Et=B!==null?B.y:0;kt.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,Bt,Et,$,Tt),W.unbindTexture()},this.copyTextureToTexture=function(T,B,Q=null,Y=null,$=0,Tt=0){let Bt,Et,Nt,Yt,ne,ge,Vt,xe,Ge;const Le=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(Q!==null)Bt=Q.max.x-Q.min.x,Et=Q.max.y-Q.min.y,Nt=Q.isBox3?Q.max.z-Q.min.z:1,Yt=Q.min.x,ne=Q.min.y,ge=Q.isBox3?Q.min.z:0;else{const Se=Math.pow(2,-$);Bt=Math.floor(Le.width*Se),Et=Math.floor(Le.height*Se),T.isDataArrayTexture?Nt=Le.depth:T.isData3DTexture?Nt=Math.floor(Le.depth*Se):Nt=1,Yt=0,ne=0,ge=0}Y!==null?(Vt=Y.x,xe=Y.y,Ge=Y.z):(Vt=0,xe=0,Ge=0);const Pe=mt.convert(B.format),en=mt.convert(B.type);let Wt;B.isData3DTexture?(kt.setTexture3D(B,0),Wt=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(kt.setTexture2DArray(B,0),Wt=G.TEXTURE_2D_ARRAY):(kt.setTexture2D(B,0),Wt=G.TEXTURE_2D),W.activeTexture(G.TEXTURE0),W.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),W.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),W.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);const ln=W.getParameter(G.UNPACK_ROW_LENGTH),Ee=W.getParameter(G.UNPACK_IMAGE_HEIGHT),Mi=W.getParameter(G.UNPACK_SKIP_PIXELS),nn=W.getParameter(G.UNPACK_SKIP_ROWS),js=W.getParameter(G.UNPACK_SKIP_IMAGES);W.pixelStorei(G.UNPACK_ROW_LENGTH,Le.width),W.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Le.height),W.pixelStorei(G.UNPACK_SKIP_PIXELS,Yt),W.pixelStorei(G.UNPACK_SKIP_ROWS,ne),W.pixelStorei(G.UNPACK_SKIP_IMAGES,ge);const ni=T.isDataArrayTexture||T.isData3DTexture,_i=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Se=gt.get(T),Je=gt.get(B),bn=gt.get(Se.__renderTarget),Oe=gt.get(Je.__renderTarget);W.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),W.bindFramebuffer(G.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ze=0;Ze<Nt;Ze++)ni&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gt.get(T).__webglTexture,$,ge+Ze),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gt.get(B).__webglTexture,Tt,Ge+Ze)),G.blitFramebuffer(Yt,ne,Yt+Bt,ne+Et,Vt,xe,Vt+Bt,xe+Et,G.DEPTH_BUFFER_BIT,G.NEAREST);W.bindFramebuffer(G.READ_FRAMEBUFFER,null),W.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||gt.has(T)){const Se=gt.get(T),Je=gt.get(B);W.bindFramebuffer(G.READ_FRAMEBUFFER,D),W.bindFramebuffer(G.DRAW_FRAMEBUFFER,H);for(let bn=0;bn<Nt;bn++)ni?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Se.__webglTexture,$,ge+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Se.__webglTexture,$),_i?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Je.__webglTexture,Tt,Ge+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Je.__webglTexture,Tt),$!==0?G.blitFramebuffer(Yt,ne,Yt+Bt,ne+Et,Vt,xe,Vt+Bt,xe+Et,G.COLOR_BUFFER_BIT,G.NEAREST):_i?G.copyTexSubImage3D(Wt,Tt,Vt,xe,Ge+bn,Yt,ne,Bt,Et):G.copyTexSubImage2D(Wt,Tt,Vt,xe,Yt,ne,Bt,Et);W.bindFramebuffer(G.READ_FRAMEBUFFER,null),W.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else _i?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Wt,Tt,Vt,xe,Ge,Bt,Et,Nt,Pe,en,Le.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(Wt,Tt,Vt,xe,Ge,Bt,Et,Nt,Pe,Le.data):G.texSubImage3D(Wt,Tt,Vt,xe,Ge,Bt,Et,Nt,Pe,en,Le):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,Vt,xe,Bt,Et,Pe,en,Le.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,Vt,xe,Le.width,Le.height,Pe,Le.data):G.texSubImage2D(G.TEXTURE_2D,Tt,Vt,xe,Bt,Et,Pe,en,Le);W.pixelStorei(G.UNPACK_ROW_LENGTH,ln),W.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ee),W.pixelStorei(G.UNPACK_SKIP_PIXELS,Mi),W.pixelStorei(G.UNPACK_SKIP_ROWS,nn),W.pixelStorei(G.UNPACK_SKIP_IMAGES,js),Tt===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&G.generateMipmap(Wt),W.unbindTexture()},this.initRenderTarget=function(T){gt.get(T).__webglFramebuffer===void 0&&kt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?kt.setTextureCube(T,0):T.isData3DTexture?kt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?kt.setTexture2DArray(T,0):kt.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){X=0,U=0,K=null,W.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}function rd(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,l=new Ie;l.morphTargetsRelative=o;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<s.length;++f){const u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(d)}for(const h in a){const d=Wc(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const u=[];for(let x=0;x<r[h].length;++x)u.push(r[h][x][f]);const p=Wc(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Wc(s){let t,e,n,i=-1,a=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*e}const r=new t(a),o=new Xe(r,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){const x=h.getComponent(f,p);o.setComponent(f+d,p,x)}}else r.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const re=Math.PI*2,Ot=(s,t,e)=>Math.max(t,Math.min(e,s)),ve=(s,t,e)=>s+(t-s)*e,nt=(s=0,t=1)=>s+Math.random()*(t-s),_e=s=>s[Math.random()*s.length|0],os=(s,t,e)=>{let n=((t-s+Math.PI)%re+re)%re-Math.PI;return s+n*e},Rs=s=>(s=((s+Math.PI)%re+re)%re,s-Math.PI);function Cx(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function pn(s){const t=Cx(s);return t.range=(e,n)=>e+t()*(n-e),t.int=(e,n)=>Math.floor(e+t()*(n-e+1)),t.pick=e=>e[Math.floor(t()*e.length)],t.chance=e=>t()<e,t}function Dn(s,t,e,n=1,i=1){const a=document.createElement("canvas");a.width=s,a.height=t;const r=a.getContext("2d");e(r,s,t);const o=new ol(a);return o.wrapS=o.wrapT=Ba,o.repeat.set(n,i),o.anisotropy=8,o.colorSpace=rn,o}function Rn(s){return"$"+Math.round(s).toLocaleString("en-US")}function kr(s){const t=Math.floor(s)%24,e=Math.floor(s%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}class Xc{constructor(t=24){this.cell=t,this.map=new Map}key(t,e){return t+":"+e}insert(t,e,n,i,a){const r=this.cell;for(let o=Math.floor(e/r);o<=Math.floor(i/r);o++)for(let l=Math.floor(n/r);l<=Math.floor(a/r);l++){const c=this.key(o,l);let h=this.map.get(c);h||this.map.set(c,h=[]),h.push(t)}}query(t,e,n=0){const i=this.cell,a=new Set;for(let r=Math.floor((t-n)/i);r<=Math.floor((t+n)/i);r++)for(let o=Math.floor((e-n)/i);o<=Math.floor((e+n)/i);o++){const l=this.map.get(this.key(r,o));if(l)for(const c of l)a.add(c)}return a}}function od(s=16757847){const t=new Gt,e=new $t({color:s,transparent:!0,opacity:.9,depthWrite:!1,blending:kn}),n=new A(new er(1.6,2.1,32),e);n.rotation.x=-Math.PI/2,n.position.y=.25;const i=new $t({color:s,transparent:!0,opacity:.18,depthWrite:!1,blending:kn,side:Qe}),a=new A(new Ft(1,1.4,38,18,1,!0),i);return a.position.y=19,t.add(n,a),t.userData.ring=n,t.userData.beam=a,t.userData.t=0,t}function ld(s,t){s.userData.t+=t;const e=1+Math.sin(s.userData.t*3)*.12;s.userData.ring.scale.setScalar(e),s.userData.ring.material.opacity=.55+Math.sin(s.userData.t*3)*.25,s.userData.beam.material.opacity=.09+Math.sin(s.userData.t*1.7)*.03,s.rotation.y+=t*.4}function sr(s,t,e,n,i,a){s.fillStyle=n,s.fillRect(0,0,t,e);for(let r=0;r<i;r++){const o=a()*t,l=a()*e,c=a()*.09;s.fillStyle=a()>.5?`rgba(255,255,255,${c})`:`rgba(0,0,0,${c})`,s.fillRect(o,l,1+a()*2,1+a()*2)}}function Px(s=4){const t=pn(s);return Dn(256,256,(e,n,i)=>{sr(e,n,i,"#22252b",5200,t),e.strokeStyle="rgba(0,0,0,.22)",e.lineWidth=1;for(let a=0;a<7;a++){e.beginPath();let r=t()*n,o=t()*i;e.moveTo(r,o);for(let l=0;l<4;l++)r+=t()*30-15,o+=t()*30,e.lineTo(r,o);e.stroke()}for(let a=0;a<20;a++)e.fillStyle=`rgba(255,255,255,${.02+t()*.03})`,e.fillRect(t()*n,t()*i,t()*20+3,1)})}function qc(s=7,t="#777a7b"){const e=pn(s);return Dn(256,256,(n,i,a)=>{sr(n,i,a,t,3600,e),n.strokeStyle="rgba(0,0,0,.18)",n.lineWidth=2,n.strokeRect(0,0,i,a),n.strokeStyle="rgba(255,255,255,.05)",n.strokeRect(1,1,i-2,a-2)})}function Lx(s=11){const t=pn(s);return Dn(256,256,(e,n,i)=>{sr(e,n,i,"#4b633c",9e3,t);for(let a=0;a<700;a++){e.strokeStyle=`rgba(${40+t()*50},${75+t()*60},${35+t()*30},${.3+t()*.5})`,e.beginPath();const r=t()*n,o=t()*i;e.moveTo(r,o),e.lineTo(r+t()*3-1.5,o-2-t()*4),e.stroke()}})}function Ix(s=15){const t=pn(s);return Dn(256,256,(e,n,i)=>{sr(e,n,i,"#b9a67c",8500,t);for(let a=0;a<80;a++){e.strokeStyle=`rgba(90,70,45,${.08+t()*.1})`,e.beginPath();const r=t()*i;e.moveTo(0,r),e.bezierCurveTo(n*.3,r+t()*12,n*.6,r-t()*12,n,r+t()*8),e.stroke()}})}function Dx(s,t,e,n,i="glass"){const a=Dn(256,256,(o,l,c)=>{o.fillStyle=s,o.fillRect(0,0,l,c);const h=pn(n);for(let d=0;d<4;d++)o.fillStyle=`rgba(255,255,255,${.015+h()*.02})`,o.fillRect(d*64+2,0,60,c);for(let d=0;d<4;d++){for(let f=0;f<4;f++){const u=f*64+11,p=d*64+9,x=42,m=38,g=o.createLinearGradient(u,p,u+x,p+m);if(g.addColorStop(0,t),g.addColorStop(.55,"#1a222c"),g.addColorStop(1,"#0c1118"),o.fillStyle=g,o.fillRect(u,p,x,m),o.fillStyle="rgba(190,225,255,.12)",o.fillRect(u+2,p+2,x-4,2),o.fillStyle="rgba(0,0,0,.32)",o.fillRect(u+x/2-1,p,2,m),h()>.64&&(o.fillStyle=`rgba(240,245,255,${.05+h()*.09})`,o.fillRect(u,p,x,m)),i==="brick"){o.fillStyle="rgba(255,255,255,.06)";for(let y=p;y<p+m;y+=7)o.fillRect(u,y,x,1)}}o.fillStyle="rgba(0,0,0,.23)",o.fillRect(0,d*64+59,l,5)}}),r=Dn(256,256,(o,l,c)=>{o.fillStyle="#000",o.fillRect(0,0,l,c);const h=pn(n+871);for(let d=0;d<4;d++)for(let f=0;f<4;f++){if(h()>.42)continue;const u=f*64+11,p=d*64+9,x=h()>.25;o.fillStyle=x?e:"#b8dfff",o.globalAlpha=.35+h()*.65,o.fillRect(u+1,p+1,40,36)}o.globalAlpha=1});return{diffuse:a,emissive:r}}function Cn(s,t,e,n=""){return Dn(512,256,(i,a,r)=>{i.fillStyle=t,i.fillRect(0,0,a,r),i.strokeStyle="rgba(255,255,255,.25)",i.lineWidth=8,i.strokeRect(10,10,a-20,r-20),i.fillStyle=e,i.font="700 92px Inter, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(s,a/2,r/2-(n?18:0)),n&&(i.font="500 26px Inter, sans-serif",i.globalAlpha=.7,i.fillText(n,a/2,r/2+66))})}function cd(s,t,e,n){return Dn(512,256,(i,a,r)=>{const o=i.createLinearGradient(0,0,a,r);o.addColorStop(0,e),o.addColorStop(1,n),i.fillStyle=o,i.fillRect(0,0,a,r);for(let l=0;l<14;l++)i.fillStyle=`rgba(255,255,255,${.03+Math.random()*.04})`,i.beginPath(),i.arc(Math.random()*a,Math.random()*r,20+Math.random()*80,0,Math.PI*2),i.fill();i.fillStyle="rgba(255,255,255,.92)",i.font="700 64px Space Grotesk, sans-serif",i.textAlign="left",i.fillText(s,40,128),i.fillStyle="rgba(255,255,255,.62)",i.font="500 22px Inter, sans-serif",i.fillText(t,42,168),i.fillStyle="rgba(255,255,255,.2)",i.fillRect(40,190,150,3)})}function Bo(){return Dn(128,128,(s,t,e)=>{const n=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.28,"rgba(255,226,170,.7)"),n.addColorStop(1,"rgba(255,200,100,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)})}function Nx(){return Dn(128,128,(s,t,e)=>{const n=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,.55)"),n.addColorStop(.5,"rgba(210,215,225,.25)"),n.addColorStop(1,"rgba(200,205,215,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)})}function Ux(){return Dn(32,32,(s,t,e)=>{const n=s.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(210,230,255,.6)"),n.addColorStop(1,"rgba(210,230,255,0)"),s.fillStyle=n,s.fillRect(0,0,t,e)})}function Ox(){const s=Px(),t=qc(7,"#8b8d8c");return s.repeat.set(3,150),t.repeat.set(1.2,160),{asphalt:new O({map:s,color:16777215,roughness:.94,metalness:.02}),sidewalk:new O({map:t,color:16777215,roughness:.92}),lot:new O({map:qc(9,"#85847f"),roughness:.98}),grass:new O({map:Lx(),roughness:1}),sand:new O({map:Ix(),roughness:1})}}const Cs=new N;function yn(s,t,e,n,i,a){const r=2*Math.PI*i/4,o=Math.max(a-2*i,0),l=Math.PI/4;Cs.copy(t),Cs[n]=0,Cs.normalize();const c=.5*r/(r+o),h=1-Cs.angleTo(s)/l;return Math.sign(Cs[e])===1?h*c:o/(r+o)+c+c*(1-h)}class pl extends P{constructor(t=1,e=1,n=1,i=2,a=.1){const r=i*2+1;if(a=Math.min(t/2,e/2,n/2,a),super(1,1,1,r,r,r),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:a},r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(a),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=d.length/6,x=new N,m=.5/r;for(let g=0,M=0;g<d.length;g+=3,M+=2)switch(l.fromArray(d,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[g+0]=h.x*Math.sign(l.x)+c.x*a,d[g+1]=h.y*Math.sign(l.y)+c.y*a,d[g+2]=h.z*Math.sign(l.z)+c.z*a,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),u[M+0]=yn(x,c,"z","y",a,n),u[M+1]=1-yn(x,c,"y","z",a,e);break;case 1:x.set(-1,0,0),u[M+0]=1-yn(x,c,"z","y",a,n),u[M+1]=1-yn(x,c,"y","z",a,e);break;case 2:x.set(0,1,0),u[M+0]=1-yn(x,c,"x","z",a,t),u[M+1]=yn(x,c,"z","x",a,n);break;case 3:x.set(0,-1,0),u[M+0]=1-yn(x,c,"x","z",a,t),u[M+1]=1-yn(x,c,"z","x",a,n);break;case 4:x.set(0,0,1),u[M+0]=1-yn(x,c,"x","y",a,t),u[M+1]=1-yn(x,c,"y","x",a,e);break;case 5:x.set(0,0,-1),u[M+0]=yn(x,c,"x","y",a,t),u[M+1]=1-yn(x,c,"y","x",a,e);break}}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.segments,t.radius)}}const In=new O({color:660509,roughness:.08,metalness:.75}),Fx=new O({color:858660,roughness:.12,metalness:.7});new O({color:12568524,roughness:.25,metalness:.9});const Go=new O({color:1447963,roughness:.95}),$s=new O({color:10134441,roughness:.35,metalness:.75}),Ne=new O({color:1777701,roughness:.75}),Ja=new O({color:2830905,roughness:.9}),Br=new O({color:15133162,roughness:.55}),Ds=new O({color:12069428,roughness:.45}),zx=new O({color:14723367,roughness:.5}),ui=new O({color:11778235,roughness:.4,metalness:.6}),Gr=new Map;function Ho(s,t){const e=s.toFixed(2)+":"+t.toFixed(2);if(!Gr.has(e)){const n=new Ft(s,s,t,16);n.rotateZ(Math.PI/2),Gr.set(e,n)}return Gr.get(e)}const Hr=new Map;function Vo(s,t){const e=s.toFixed(2)+":"+t.toFixed(2);if(!Hr.has(e)){const n=new Ft(s*.58,s*.58,t+.02,8);n.rotateZ(Math.PI/2),Hr.set(e,n)}return Hr.get(e)}const dn={sedan:{name:"Nova Sable",klass:"SEDAN",len:4.55,wid:1.84,height:1.42,wheelbase:2.75,wheelR:.33,wheelW:.24,maxSpeed:47,accel:9.2,brake:22,grip:8.6,mass:1480,fuel:55,price:17500,seats:5},taxi:{name:"Nova Sable Taxi",klass:"TAXI",len:4.55,wid:1.84,height:1.46,wheelbase:2.75,wheelR:.33,wheelW:.24,maxSpeed:45,accel:8.8,brake:21,grip:8.4,mass:1490,fuel:55,price:19e3,seats:5,color:15250730},suv:{name:"Aster Ridge",klass:"SUV",len:4.95,wid:1.96,height:1.78,wheelbase:2.95,wheelR:.4,wheelW:.28,maxSpeed:42,accel:7.8,brake:19,grip:8.9,mass:2150,fuel:70,price:32e3,seats:5},sports:{name:"Vanta GT",klass:"SPORTS",len:4.48,wid:1.91,height:1.22,wheelbase:2.65,wheelR:.34,wheelW:.3,maxSpeed:63,accel:13.5,brake:27,grip:10.5,mass:1360,fuel:60,price:86e3,seats:2},super:{name:"Vanta XR",klass:"SUPERCAR",len:4.62,wid:2.02,height:1.12,wheelbase:2.72,wheelR:.35,wheelW:.34,maxSpeed:82,accel:18.5,brake:32,grip:12.2,mass:1290,fuel:62,price:268e3,seats:2},pickup:{name:"Bison 150",klass:"PICKUP",len:5.35,wid:2,height:1.83,wheelbase:3.3,wheelR:.42,wheelW:.3,maxSpeed:39,accel:7.4,brake:18,grip:8.2,mass:2280,fuel:76,price:38e3,seats:3},van:{name:"Haul-It 300",klass:"VAN",len:5.4,wid:2,height:2.1,wheelbase:3.2,wheelR:.38,wheelW:.27,maxSpeed:36,accel:6.4,brake:16,grip:7.8,mass:2400,fuel:80,price:41e3,seats:4},bus:{name:"Nova Transit 40",klass:"BUS",len:11.6,wid:2.52,height:3.15,wheelbase:6.3,wheelR:.53,wheelW:.34,maxSpeed:26,accel:4.2,brake:12,grip:7.2,mass:12800,fuel:220,price:32e4,seats:32},truck:{name:"Atlas Hauler",klass:"TRUCK",len:10.8,wid:2.48,height:3.4,wheelbase:5.4,wheelR:.5,wheelW:.36,maxSpeed:24,accel:3.8,brake:11,grip:6.9,mass:15600,fuel:260,price:21e4,seats:2},construction:{name:"Vulcan 8M",klass:"CONSTRUCTION",len:8.6,wid:2.55,height:3.25,wheelbase:4.6,wheelR:.58,wheelW:.4,maxSpeed:21,accel:3.2,brake:10,grip:7.4,mass:18500,fuel:240,price:195e3,seats:2},police:{name:"NCPD Interceptor",klass:"POLICE",len:4.7,wid:1.9,height:1.46,wheelbase:2.82,wheelR:.34,wheelW:.26,maxSpeed:56,accel:11.5,brake:25,grip:9.8,mass:1580,fuel:62,price:56e3,seats:4,color:15265264},fire:{name:"Nova Fire Engine",klass:"FIRE",len:9.6,wid:2.52,height:3.3,wheelbase:5.2,wheelR:.52,wheelW:.36,maxSpeed:29,accel:4.6,brake:13,grip:7.4,mass:14200,fuel:240,price:38e4,seats:6,color:12067886},ambulance:{name:"LifeLine Med 2",klass:"AMBULANCE",len:5.7,wid:2.1,height:2.65,wheelbase:3.4,wheelR:.4,wheelW:.28,maxSpeed:40,accel:7.2,brake:18,grip:8.1,mass:3100,fuel:85,price:12e4,seats:4,color:15265006},motorcycle:{name:"Wasp R",klass:"MOTORCYCLE",len:2.25,wid:.82,height:1.18,wheelbase:1.55,wheelR:.32,wheelW:.14,maxSpeed:58,accel:14,brake:24,grip:9.4,mass:210,fuel:18,price:22e3,seats:1},boat:{name:"Harborrunner 24",klass:"SPEEDBOAT",len:6.2,wid:2.2,height:1.4,wheelbase:0,wheelR:0,wheelW:0,maxSpeed:28,accel:6,brake:8,grip:4.4,mass:1600,fuel:90,price:74e3,seats:6,isBoat:!0},helicopter:{name:"Skyline H4",klass:"HELICOPTER",len:5.2,wid:2,height:2.4,wheelbase:0,wheelR:0,wheelW:0,maxSpeed:58,accel:8,brake:10,grip:5,mass:2200,fuel:120,price:64e4,seats:4,isAir:!0}},kx=[13620182,1843753,9183020,2181746,4939086,12104097,6961964,3094080,9141051,5926792,10104646,14605008];function ut(s,t,e,n=0,i=0,a=0,r=0,o=0,l=0,c=!0){const h=new A(t,e);return h.position.set(n,i,a),h.rotation.set(r,o,l),h.castShadow=c,h.receiveShadow=!1,s.add(h),h}function At(s,t,e){return new P(s,t,e)}function ts(s,t,e,n=.1,i=2){return new pl(Math.max(s,.01),Math.max(t,.01),Math.max(e,.01),i,Math.min(n,Math.min(s,t,e)*.45))}function ml(s,t,e=2,n=2,i=!1){const a=[],r=t.wheelR,o=t.wheelW,l=t.wheelbase||t.len*.55,c=t.wid/2-.08,h=i?[-l/2,0,l/2]:[-l/2,l/2],d=i?[2,2,2]:[e,n];for(let f=0;f<h.length;f++)for(let u=-1;u<=1;u+=2)for(let p=0;p<d[f]/2;p++){const x=ut(s,Ho(r,o),Go,c*u-u*p*o*1.1,r,h[f]),m=new A(Vo(r,o),$s);m.position.set(0,0,0),x.add(m);const g=new A(At(o*1.02,r*1.1,r*.3),$s);g.position.set(0,0,0),x.add(g),x.userData.rim=m,a.push({mesh:x,front:f===h.length-1,side:u})}return a}function tn(s,t,e,n,i,a,r,o,l={}){const c=new $t({color:t,toneMapped:!1}),h=new A(new P(a,r,o),c);return h.position.set(e,n,i),s.add(h),h.userData.base=new Kt(t),h.userData.kind=l.kind||"head",h}function Ii(s,t,e,n,i=.34,a=.13,r={}){const o=tn(s,4934982,t,e,n,i,a,.06,{kind:"head"}),l=new A(new P(i*1.14,a*1.12,.025),new O({color:1514270,roughness:.28,metalness:.72}));l.position.set(t,e,n-.045),s.add(l);const c=new $t({color:16773828,transparent:!0,opacity:0,depthWrite:!1,side:Qe,blending:kn,toneMapped:!1}),h=r.beamLength||8,d=r.beamWidth||i*1.7,f=new A(new Ft(d*.38,d,h,12,1,!0),c);f.geometry.rotateX(-Math.PI/2),f.position.set(t,e-a*.08,n+h*.5),f.visible=!1,s.add(f);const u=new Rf(16774087,0,h*1.8,Math.PI*.22,.55,1.4);return u.position.set(t,e,n+.06),u.target.position.set(t,e-.18,n+h),u.visible=!1,s.add(u),s.add(u.target),o.userData.beam=f,o.userData.spot=u,o}function Bx(s,t,e){const n=t.wid/2-.01,i=t.wheelbase||t.len*.55;for(const a of[-i/2,i/2])for(const r of[-1,1]){const o=new A(new P(.06,.16,t.wheelR*2.4),Ne);o.position.set(n*r,t.wheelR+.3,a),s.add(o)}}function Gx(s,t,e,n,i=13621469){const a=new A(new P(.3,.09,.02),new O({color:i,roughness:.3,metalness:.8}));a.position.set(t,e,n),s.add(a)}function Hx(s,t){const e=dn[s],n=new Gt,i=new O({color:t,roughness:.32,metalness:.55}),a=s==="taxi",r=s==="police",o=e.len,l=e.wid;e.wheelbase;const c=e.height*.42,h=e.wheelR+c/2+.04,d=ut(n,ts(l*.96,c,o*.97,.12,2),i,0,h,0);d.userData.panel=!0,ut(n,ts(l*.92,c*.55,o*.23,.08),i,0,h+c*.25,o*.33),ut(n,ts(l*.9,c*.5,o*.18,.08),i,0,h+c*.22,-o*.36);const f=o*(s==="super"?.34:s==="sports"?.38:.42),u=l*.82,p=e.height*(s==="super"?.24:.3),x=s==="sports"||s==="super"?-o*.04:-o*.06,m=ut(n,ts(u,p,f,.09),In,0,h+c/2+p/2,x);m.userData.panel=!0,ut(n,ts(u*.94,.12,f*.86,.06),i,0,h+c/2+p-.02,x-.05);for(const L of[-1,1])ut(n,At(.06,p,.08),i,L*u/2,h+c/2+p/2,x+f/2,0,0,0),ut(n,At(.06,p,.1),i,L*u/2,h+c/2+p/2,x-f/2);ut(n,At(u*.86,p*.8,.05),In,0,h+c/2+p*.48,x+f/2+.01,-.32,0,0),ut(n,At(u*.84,p*.7,.05),In,0,h+c/2+p*.46,x-f/2-.01,.3,0,0),ut(n,At(l*.98,.18,.18),Ne,0,h-c*.2,o/2-.02),ut(n,At(l*.98,.18,.18),Ne,0,h-c*.2,-o/2+.02),ut(n,At(l*.5,.16,.05),Ne,0,h-.02,o/2+.02);const g=h+c*.18,M=Ii(n,-l*.32,g,o/2+.02,.34,.13,{beamLength:8,beamWidth:1.1}),y=Ii(n,l*.32,g,o/2+.02,.34,.13,{beamLength:8,beamWidth:1.1}),_=tn(n,5901067,-l*.33,g,-o/2-.02,.36,.12,.05,{kind:"brake"}),w=tn(n,5901067,l*.33,g,-o/2-.02,.36,.12,.05,{kind:"brake"}),b=tn(n,4860933,-l*.45,g,o/2+.02,.1,.1,.05,{kind:"turn"}),v=tn(n,4860933,l*.45,g,o/2+.02,.1,.1,.05,{kind:"turn"});for(const L of[-1,1])ut(n,At(.16,.1,.12),i,L*(l/2+.09),h+c*.55,x+f*.35);for(const L of[-1,1])ut(n,At(.06,.14,o*.55),Ne,L*(l/2+.01),e.wheelR+.1,0);if(Bx(n,e),Gx(n,0,h+c*.25,-o/2-.015),a){ut(n,At(.7,.22,.3),new $t({color:16764762}),0,h+c/2+p+.12,x);for(const L of[-1,1])ut(n,At(.06,.1,o*.8),Ne,L*l/2,h,0)}if(r&&(ut(n,At(l*.45,.13,.85),Ds,0,h+c/2+p+.1,x),ut(n,At(l*.45,.13,.85),new O({color:1715800,roughness:.4,metalness:.5}),0,h+c/2+p+.1,x),ut(n,At(l*.5,.22,.16),Ne,0,h-.05,o/2+.1)),s==="sports"||s==="super"){ut(n,At(l*.8,.05,.32),Ne,0,h+c*.75,-o/2+.18);for(const L of[-1,1])ut(n,At(.06,.3,.08),Ne,L*l*.3,h+c*.55,-o/2+.18);ut(n,At(l*.95,.06,.34),Ne,0,h-c*.42,o/2-.2)}if(s==="suv"||s==="pickup"){for(const L of[-1,1])ut(n,At(.05,.06,o*.4),Ne,L*l*.3,h+c/2+p+.15,x-o*.05);s==="suv"&&ut(n,At(l*.5,.12,o*.5),Ne,0,h+c/2+p+.22,x-o*.05)}s==="pickup"&&(ut(n,At(l*.92,.14,o*.38),i,0,h+c*.55,-o*.28),ut(n,At(l*.8,.4,o*.34),Ne,0,h+c*.35,-o*.28));const S=ml(n,e,2,2),I=[M.material,y.material],R=[_.material,w.material];return{group:n,wheels:S,bodyMat:i,headMats:I,brakeMats:R,turnMats:[b.material,v.material],cfg:e,type:s}}function Vx(s,t="bus"){const e=dn[t],n=new Gt,i=new O({color:s,roughness:.4,metalness:.35}),a=e.len,r=e.wid,o=e.height*.78,l=e.wheelR+o/2+.08;ut(n,ts(r*.98,o,a*.98,.16,2),i,0,l,0),ut(n,At(r*1,.3,a*.99),Ne,0,e.wheelR+.25,0),ut(n,At(r*.96,.18,a*.99),ui,0,l+o*.2,0),ut(n,At(r*1.006,o*.32,a*.82),In,0,l+o*.22,0),ut(n,At(r*1.007,o*.34,a*.28),In,0,l+o*.2,-a*.34),ut(n,At(r*.9,o*.48,.06),In,0,l+o*.2,a*.5),ut(n,At(r*.55,.28,a*.25),ui,0,l+o/2+.14,0);for(const p of[a*.34,-a*.2])ut(n,At(.06,o*.62,1.1),Fx,r/2+.005,l-.1,p);tn(n,16757575,0,l+o*.38,a/2+.035,2.4,.34,.04,{kind:"sign"});const c=Ii(n,-r*.34,e.wheelR+.55,a/2+.03,.38,.2,{beamLength:9,beamWidth:1.25}),h=Ii(n,r*.34,e.wheelR+.55,a/2+.03,.38,.2,{beamLength:9,beamWidth:1.25}),d=tn(n,5901067,-r*.34,e.wheelR+.6,-a/2-.03,.3,.4,.05,{kind:"brake"}),f=tn(n,5901067,r*.34,e.wheelR+.6,-a/2-.03,.3,.4,.05,{kind:"brake"}),u=ml(n,e,2,4);return{group:n,wheels:u,bodyMat:i,headMats:[c.material,h.material],brakeMats:[d.material,f.material],turnMats:[],cfg:e,type:t}}function Wx(s,t,e={}){const n=dn[s],i=new Gt,a=new O({color:t,roughness:.45,metalness:.4}),r=n.len,o=n.wid,l=n.wheelR,c=r*(s==="construction"?.28:.25),h=r/2-c/2-.2,d=n.height*.58;if(ut(i,At(o*.8,.3,r*.92),Ne,0,l+.2,0),ut(i,At(o*.96,d,c),a,0,l+d/2+.3,h),ut(i,At(o*.88,d*.55,c*.96),In,0,l+d*.62,h),ut(i,At(o*.92,.22,c),a,0,l+d+.35,h),s==="truck"){ut(i,At(o,n.height*.8,r*.62),Br,0,l+n.height*.4+.25,-r*.16),ut(i,At(o*1.004,n.height*.1,r*.62),a,0,l+n.height*.3,-r*.16);for(let g=-5;g<=5;g++)ut(i,At(o*1.006,n.height*.78,.05),ui,0,l+n.height*.4+.25,-r*.16+g*r*.05)}else if(s==="construction"){ut(i,At(o,.9,r*.55),a,0,l+1,-r*.2),ut(i,At(o*.92,.5,r*.5),new O({color:6117962,roughness:1}),0,l+1.6,-r*.2),ut(i,At(o*.8,.4,r*.1),zx,0,l+1.8,-r*.48);for(const g of[-1,1])for(const M of[-r*.05,-r*.4])ut(i,At(.12,.9,.12),Ne,g*o*.4,l+2,M)}else if(s==="fire"){const g=n.height*.8;ut(i,At(o,g,r*.72),Ds,0,l+g/2+.25,-r*.12),ut(i,At(o*1.002,g*.18,r*.72),Br,0,l+g*.62,-r*.12);const M=new Gt;for(const y of[-1,1])ut(M,At(.1,.1,r*.75),ui,y*.5,0,0);for(let y=-6;y<=6;y++)ut(M,At(1.1,.06,.06),ui,0,0,y*r*.055);M.position.set(0,l+g+.5,-r*.05),i.add(M),ut(i,At(1.6,.3,.16),Ne,0,l+d+.5,h+c/2);for(let y=0;y<3;y++)ut(i,At(.5,.5,.16),ui,-1+y,l+d+.5,h+c/2+.2)}else if(s==="ambulance"){const g=n.height*.8;ut(i,At(o,g,r*.7),Br,0,l+g/2+.25,-r*.13),ut(i,At(o*1.004,.35,r*.7),Ds,0,l+g*.4,-r*.13);for(const M of[-1,1])ut(i,At(o*1.005,.5,.06),Ds,0,l+g*.72,-r*.13+M*r*.18);ut(i,At(o*.86,.5,r*.72),In,0,l+g*.85,-r*.13)}const f=ml(i,n,2,4),u=Ii(i,-o*.33,l+.6,r/2+.03,.4,.2,{beamLength:9,beamWidth:1.35}),p=Ii(i,o*.33,l+.6,r/2+.03,.4,.2,{beamLength:9,beamWidth:1.35}),x=tn(i,5901067,-o*.38,l+.6,-r/2-.02,.25,.3,.05,{kind:"brake"}),m=tn(i,5901067,o*.38,l+.6,-r/2-.02,.25,.3,.05,{kind:"brake"});return(s==="fire"||s==="ambulance")&&(ut(i,At(o*.6,.16,.4),Ds,0,l+d+.52,h),ut(i,At(o*.3,.16,.4),new $t({color:1793279,toneMapped:!1}),-o*.15,l+d+.52,h)),{group:i,wheels:f,bodyMat:a,headMats:[u.material,p.material],brakeMats:[x.material,m.material],turnMats:[],cfg:n,type:s}}function Xx(s){const t=dn.motorcycle,e=new Gt,n=new O({color:s,roughness:.35,metalness:.6});ut(e,At(.34,.3,1.1),n,0,.75,0),ut(e,At(.3,.18,.45),Ja,0,.96,-.2),ut(e,At(.24,.12,.5),n,0,1.02,.38),ut(e,At(.7,.06,.06),Ne,0,1.12,.32);const i=ut(e,Ho(.32,.14),Go,0,.32,.78),a=ut(e,Ho(.32,.14),Go,0,.32,-.72),r=new A(Vo(.32,.14),$s);i.add(r);const o=new A(Vo(.32,.14),$s);a.add(o);for(const f of[-1,1])ut(e,At(.05,.75,.05),ui,f*.08,.65,.72,.25,0,0);const l=Ii(e,0,.95,.6,.22,.16,{beamLength:7,beamWidth:.75}),c=tn(e,5901067,0,.86,-.55,.16,.1,.05,{kind:"brake"}),h=[{mesh:i,front:!0,side:1},{mesh:a,front:!1,side:1}],d=new Gt;return ut(d,At(.36,.5,.24),new O({color:3029314,roughness:.8}),0,1.3,-.05),ut(d,new Ce(.16,10,8),new O({color:1909287,roughness:.7}),0,1.67,-.02),ut(d,At(.1,.44,.1),new O({color:3029314,roughness:.8}),-.25,1.3,.18,-.5,0,0),ut(d,At(.1,.44,.1),new O({color:3029314,roughness:.8}),.25,1.3,.18,-.5,0,0),d.visible=!1,e.add(d),{group:e,wheels:h,bodyMat:n,headMats:[l.material],brakeMats:[c.material],rider:d,cfg:t,type:"motorcycle"}}function qx(s){const t=dn.boat,e=new Gt,n=new O({color:s,roughness:.3,metalness:.3}),i=new Gh;i.moveTo(-1.1,-3.1),i.lineTo(1.1,-3.1),i.lineTo(1.1,1.4),i.quadraticCurveTo(1,2.7,0,3.1),i.quadraticCurveTo(-1,2.7,-1.1,1.4),i.lineTo(-1.1,-3.1);const a=new dl(i,{depth:.8,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:2});a.rotateX(Math.PI/2);const r=new A(a,n);r.position.y=.9,r.castShadow=!0,e.add(r),ut(e,At(1.8,.08,4.8),new O({color:10128500,roughness:.9}),0,1.05,-.3),ut(e,At(2.2,.12,5.8),new O({color:1731210,roughness:.4}),0,.72,0),ut(e,At(1.5,.5,.06),In,0,1.45,.7,-.25,0,0),ut(e,At(1.4,.4,.06),In,0,1.4,-.9,.2,0,0);for(let o=0;o<2;o++)ut(e,At(.55,.18,.5),Ja,-.45+o*.9,1.28,-1.2);ut(e,At(1,.3,.5),Ne,0,1.35,.6),ut(e,At(.4,.1,.35),new $t({color:6805759,toneMapped:!1}),0,1.52,.6),ut(e,At(.4,.65,.7),Ne,0,.8,-3.25),tn(e,13626111,0,1,3.02,.3,.12,.08),tn(e,5901067,0,1,-3.02,.3,.12,.08,{kind:"brake"});for(const o of[-1,1])ut(e,At(.04,.25,3.2),ui,o*1.05,1.28,-.6);return{group:e,wheels:[],bodyMat:n,headMats:[],brakeMats:[],cfg:t,type:"boat"}}function Yx(s){const t=dn.helicopter,e=new Gt,n=new O({color:s,roughness:.3,metalness:.45}),i=new Ce(1.05,18,14),a=new A(i,n);a.scale.set(1,1,1.9),a.position.y=1.65,a.castShadow=!0,e.add(a);const r=new A(new Ce(.92,16,12),In);r.scale.set(.98,.8,1),r.position.set(0,1.75,1),e.add(r),ut(e,At(.28,.28,2.9),n,0,1.75,-2.1),ut(e,At(.1,.8,.6),n,0,2.2,-3.4);const o=new O({color:3817541,roughness:.6,metalness:.5});for(const d of[-1,1])ut(e,At(.1,.1,3),o,d*.85,.28,0),ut(e,At(.1,.7,.1),o,d*.7,.62,.7,0,0,-.25),ut(e,At(.1,.7,.1),o,d*.7,.62,-.7,0,0,.25);const l=new Gt;l.position.set(0,2.6,0),ut(l,At(.18,.12,5.4),Ne,0,0,0,0,0,0),ut(l,At(5.4,.06,.18),Ne,0,0,0);const c=new A(new Ft(.14,.14,.4,8),$s);c.position.y=.1,l.add(c),e.add(l);const h=new Gt;return h.position.set(.25,2.1,-3.45),ut(h,At(.06,1.4,.16),Ne,0,0,0),ut(h,At(.06,.16,1.4),Ne,0,0,0),e.add(h),tn(e,15922921,-.65,1.3,1.65,.18,.18,.08),tn(e,15922921,.65,1.3,1.65,.18,.18,.08),tn(e,16719904,0,2.2,-2.8,.12,.12,.12),tn(e,2162496,-1.05,1.5,-.8,.1,.1,.1),ut(e,At(.5,.3,.5),Ja,-.35,1.5,.2),ut(e,At(.5,.3,.5),Ja,.35,1.5,.2),{group:e,wheels:[],bodyMat:n,headMats:[],brakeMats:[],rotor:l,tailRotor:h,cfg:t,type:"helicopter"}}function $x(s){const t=s.group;t.updateMatrixWorld(!0);const e=new Set,n=l=>{l?.traverse&&l.traverse(c=>e.add(c))};for(const l of s.wheels||[])n(l.mesh);n(s.rider),n(s.rotor),n(s.tailRotor);const i=new Set;for(const l of s.headMats||[])l?.userData?.beam&&i.add(l.userData.beam),l?.userData?.spot&&i.add(l.userData.spot);for(const l of i)n(l);n(s.headLightTarget);const a=new Set([...s.headMats||[],...s.brakeMats||[],...s.turnMats||[]]);a.size&&t.traverse(l=>{l.isMesh&&a.has(l.material)&&e.add(l)});const r=new ye().copy(t.matrixWorld).invert(),o=new Map;t.traverse(l=>{if(!l.isMesh||e.has(l)||Array.isArray(l.material))return;const c=l.geometry;if(!c?.attributes?.position||!c.attributes.normal)return;const h=l.material.uuid;let d=o.get(h);d||(d={material:l.material,geos:[],meshes:[],panel:!1,shadow:!1},o.set(h,d));const f=c.index?c.toNonIndexed():c.clone();for(const u of Object.keys(f.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&f.deleteAttribute(u);f.clearGroups(),f.applyMatrix4(new ye().multiplyMatrices(r,l.matrixWorld)),d.geos.push(f),d.meshes.push(l),d.panel=d.panel||!!l.userData.panel,d.shadow=d.shadow||l.castShadow});for(const l of o.values()){if(l.meshes.length<2){for(const d of l.geos)d.dispose();continue}const c=rd(l.geos,!1);if(!c){for(const d of l.geos)d.dispose();continue}const h=new A(c,l.material);h.castShadow=l.shadow,h.userData.panel=l.panel,t.add(h);for(const d of l.meshes)d.parent?.remove(d);for(const d of l.geos)d.dispose()}}function pi(s,t,e={}){let n;return["bus"].includes(s)?n=Vx(t):["truck","construction","fire","ambulance"].includes(s)?n=Wx(s,t):s==="motorcycle"?n=Xx(t):s==="boat"?n=qx(t):s==="helicopter"?n=Yx(t):n=Hx(s,t),$x(n),n.group.userData.vehicleType=s,n.group.userData.wheels=n.wheels,n.rider&&(n.group.userData.rider=n.rider),n.color=t,e.traffic&&n.rider&&(n.rider.visible=!0),n}function Wo(s){return s==="taxi"?15250730:s==="police"?15265264:s==="fire"?12067886:s==="ambulance"?15265006:s==="construction"?14066975:_e(kx)}function Yc(s,t,e,n){const{lightsOn:i=!1,braking:a=!1,left:r=!1,right:o=!1,hazard:l=!1}=n;for(const c of s){c.color.setHex(i?16774872:4934982);const h=c.userData?.beam,d=c.userData?.spot;h&&(h.visible=i,h.material.opacity=i?.075:0),d&&(d.visible=i,d.intensity=i?22:0)}for(const c of t)c.color.setHex(a?16722731:i?7999504:3803144);if(e.length>=2){const c=r||l,h=o||l;e[0].color.setHex(c?16756768:3811848),e[1].color.setHex(h?16756768:3811848)}}function Zx(s){const t=s.scene,e=new Ce(1900,32,20),n=new Hn({side:fn,depthWrite:!1,uniforms:{topColor:{value:new Kt(3108520)},bottomColor:{value:new Kt(12047334)},night:{value:0},storm:{value:0},sunDir:{value:new N(0,1,0)}},vertexShader:"varying vec3 vWorld; void main(){ vWorld = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`}),i=new A(e,n);i.frustumCulled=!1,t.add(i),s.sky=i;const a=new Lf(16771012,2.4);a.position.set(300,500,200),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.camera.near=10,a.shadow.camera.far=1500,a.shadow.camera.left=-280,a.shadow.camera.right=280,a.shadow.camera.top=280,a.shadow.camera.bottom=-280,a.shadow.bias=-.0012,a.shadow.normalBias=.6,t.add(a),t.add(a.target),s.sun=a;const r=new Tf(10340607,3883568,.6);t.add(r),s.hemi=r;const o=new If(12113151,.24);t.add(o),s.ambient=o;const l=new Io({map:Bo(),color:13624575,transparent:!0,opacity:0,depthWrite:!1,blending:kn}),c=new Jl(l);c.scale.set(70,70,1),c.position.set(-500,900,-600),t.add(c),s.moon=c;const h=new Ie,d=new Float32Array(1400*3);for(let x=0;x<1400;x++){const m=Math.random()*re,g=Math.acos(2*Math.random()-1),M=1500;d[x*3]=Math.sin(g)*Math.cos(m)*M,d[x*3+1]=Math.abs(Math.cos(g))*M*.8+120,d[x*3+2]=Math.sin(g)*Math.sin(m)*M}h.setAttribute("position",new Xe(d,3));const f=new as({map:Ux(),size:6,transparent:!0,opacity:0,depthWrite:!1,blending:kn,sizeAttenuation:!0}),u=new rs(h,f);t.add(u),s.stars=u;const p=new Io({map:Kx(),color:15922943,transparent:!0,opacity:.85,depthWrite:!1});s.cloudSpriteMat=p;for(let x=0;x<30;x++){const m=new Jl(p),g=90+Math.random()*180;m.scale.set(g*2.1,g*.8,1),m.position.set(nt(-900,900),nt(130,220),nt(-900,900)),m.userData.speed=nt(1.5,4.5),t.add(m),s.clouds.push(m)}}function Kx(){const s=document.createElement("canvas");s.width=256,s.height=128;const t=s.getContext("2d");for(let n=0;n<34;n++){const i=30+Math.random()*196,a=64+(Math.random()-.5)*40,r=12+Math.random()*30,o=t.createRadialGradient(i,a,0,i,a,r);o.addColorStop(0,"rgba(255,255,255,.5)"),o.addColorStop(.55,"rgba(240,246,255,.22)"),o.addColorStop(1,"rgba(240,246,255,0)"),t.fillStyle=o,t.beginPath(),t.arc(i,a,r,0,re),t.fill()}const e=new ol(s);return e.colorSpace=rn,e}function Jx(s,t){const e=s.root,n=new we,i=new Ft(.09,.14,5.6,6),a=new O({color:3159611,roughness:.7,metalness:.5}),r=new P(2.4,.1,.1),o=new P(1.1,.18,.4),l=new O({color:16770744,emissive:16764810,emissiveIntensity:2.2,roughness:.4}),c=[];for(let k=0;k<We;k++){const D=ie(k);for(let H=-ke+12;H<=ke-12;H+=44)for(const X of[-1,1])c.push({pole:[D+X*(Ve+3.4),2.85,H],arm:[D+X*(Ve+2.4),5.5,H],armR:0,head:[D+X*(Ve+1.6),5.45,H]}),c.push({pole:[H,2.85,D+X*(Ve+3.4)],arm:[H,5.5,D+X*(Ve+2.4)],armR:Math.PI/2,head:[H,5.45,D+X*(Ve+1.6)]})}const h=new De(i,a,c.length),d=new De(r,a,c.length),f=new De(o,l,c.length);c.forEach((k,D)=>{n.position.set(...k.pole),n.rotation.set(0,0,0),n.updateMatrix(),h.setMatrixAt(D,n.matrix),n.position.set(...k.arm),n.rotation.set(0,k.armR,0),n.updateMatrix(),d.setMatrixAt(D,n.matrix),n.position.set(...k.head),n.rotation.set(0,0,0),n.updateMatrix(),f.setMatrixAt(D,n.matrix)}),h.castShadow=!0,e.add(h,d,f);const u=new Ie,p=new Float32Array(c.length*3);c.forEach((k,D)=>{p[D*3]=k.head[0],p[D*3+1]=k.head[1]-.1,p[D*3+2]=k.head[2]}),u.setAttribute("position",new Xe(p,3));const x=new as({map:Bo(),color:16762236,size:6,transparent:!0,opacity:.35,depthWrite:!1,blending:kn,sizeAttenuation:!0}),m=new rs(u,x);m.frustumCulled=!1,e.add(m),s.lampGlow=m;const g=new Ft(.16,.2,.6,8),M=new O({color:11549230,roughness:.7}),y=new De(g,M,44);for(let k=0;k<44;k++){const D=Math.floor(Math.random()*We),H=ie(D),X=nt(-ke+20,ke-20),U=Math.random()>.5?1:-1;n.position.set(Math.random()>.5?H+U*10:X,.45,Math.random()>.5?X:H+U*10),n.updateMatrix(),y.setMatrixAt(k,n.matrix)}e.add(y);const _=new Ft(.32,.26,.9,8),w=new O({color:3621450,roughness:.8}),b=new De(_,w,55);for(let k=0;k<55;k++){const D=Math.floor(Math.random()*We),H=ie(D),X=nt(-ke+20,ke-20),U=Math.random()>.5?1:-1;n.position.set(Math.random()>.5?H+U*10.2:X,.6,Math.random()>.5?X:H+U*10.2),n.updateMatrix(),b.setMatrixAt(k,n.matrix)}e.add(b);const v=[[-260,-192,Math.PI/2],[132,-96,Math.PI/2],[96,180,0],[-96,96,0],[260,48,Math.PI/2],[-192,260,0],[288,-240,Math.PI/2],[-48,-300,0]];for(const[k,D,H]of v){s.busStops.push({x:k,z:D});const X=new Gt;X.position.set(k,.15,D),X.rotation.y=H;const U=new A(new P(5.6,.18,2.2),new O({color:3028800,roughness:.7,metalness:.4}));U.position.y=2.7,X.add(U);const K=new A(new P(5.2,2.5,.08),new O({color:10471133,transparent:!0,opacity:.28,roughness:.05,metalness:.3}));K.position.set(0,1.4,-1),X.add(K);for(const tt of[-2.6,2.6]){const vt=new A(new P(.1,2.7,.1),s.metalMat);vt.position.set(tt,1.35,-1),X.add(vt)}const V=new A(new P(4.2,.16,.55),s.woodMat);V.position.set(0,.58,-.7),X.add(V);const Z=new A(new ae(.9,.9),new $t({map:Cn("BUS","#1c5a8a","#eef8ff"),transparent:!0}));Z.position.set(2.9,1.8,0),X.add(Z),e.add(X),s.busStops[s.busStops.length-1].mesh=X}[["SOLARIS","clean energy · bright future","#062c46","#1188b8"],["VOLT","the city runs electric","#2b0a3d","#8a37b8"],["AURORA","live above it all","#3c1a08","#c86a23"],["NOVA AIR","fly beyond the skyline","#082c33","#16a6a0"]].forEach((k,D)=>{const H=D*Math.PI/2+.4,X=Math.cos(H)*190,U=Math.sin(H)*190,K=new $t({map:cd(k[0],k[1],k[2],k[3])}),V=new A(new ae(28,14),K);V.position.set(X,42+D*3,U),V.lookAt(0,30,0),e.add(V);for(const Z of[-1,1]){const tt=new A(new P(.5,8,.5),s.metalMat);tt.position.set(X+Z*8,38,U),e.add(tt)}});for(let k=0;k<8;k++)for(let D=0;D<8;D++){const H=s.blocks.find(X=>X.bi===k&&X.bj===D);if(!(!H||!["suburb","residential","waterfront","park"].includes(H.district)))for(let X=0;X<4;X++){const U=Math.floor(Math.random()*4),K=nt(-30,30);U===0&&s.tree(H.x+K,H.z-35.6,nt(.55,.9)),U===1&&s.tree(H.x+K,H.z+35.6,nt(.55,.9)),U===2&&s.tree(H.x-35.6,H.z+K,nt(.55,.9)),U===3&&s.tree(H.x+35.6,H.z+K,nt(.55,.9))}}const I=new Ie,R=new Float32Array(360);for(let k=0;k<120;k++)R[k*3]=-24+nt(-25,25),R[k*3+1]=nt(.6,4),R[k*3+2]=-24+nt(-25,25);I.setAttribute("position",new Xe(R,3));const L=new as({color:16769162,size:.35,transparent:!0,opacity:.7,map:Bo(),blending:kn,depthWrite:!1}),z=new rs(I,L);if(e.add(z),s.fireflyPoints=z,s.factorySmokePos){const k=new Ie,D=new Float32Array(210);for(let U=0;U<70;U++)D[U*3]=s.factorySmokePos.x+nt(-2,2),D[U*3+1]=nt(0,48),D[U*3+2]=s.factorySmokePos.z+nt(-2,2);k.setAttribute("position",new Xe(D,3));const H=new as({map:Nx(),color:9211020,size:10,transparent:!0,opacity:.28,depthWrite:!1}),X=new rs(k,H);X.frustumCulled=!1,e.add(X),s.smokeParticles=X}s.finalizeProps()}function Qx(s,t){const e=s.root,n=new A(new ae(1700,100),s.mats.sand);n.rotation.x=-Math.PI/2,n.position.set(0,.05,438),n.receiveShadow=!0,e.add(n);const i=new A(new ae(1400,12),s.mats.sidewalk);i.rotation.x=-Math.PI/2,i.position.set(0,.12,392),e.add(i);const a=new O({color:7166531,roughness:.9});for(let p=-420;p<=420;p+=16){const x=new A(new P(.16,1.1,.16),a);x.position.set(p,.65,398),e.add(x)}const r=new A(new P(840,.1,.12),a);r.position.set(0,1.15,398),e.add(r);for(let p=0;p<18;p++){const x=-400+p*46+nt(-8,8),m=404+p%2*6,g=new Gt,M=new A(new Ft(.18,.32,7,6),new O({color:8020551,roughness:1}));M.position.y=3.5,g.add(M);for(let y=0;y<6;y++){const _=new A(new Sn(.8,4.4,5),new O({color:3103282,roughness:1}));_.position.set(Math.cos(y/6*re)*1.4,7.2,Math.sin(y/6*re)*1.4),_.rotation.set(Math.cos(y/6*re)*.9,0,Math.sin(y/6*re)*.9+.5),g.add(_)}g.position.set(x,.1,m),e.add(g)}const o=new ae(2600,1300,80,40),l=new Hn({uniforms:{time:{value:0},night:{value:0},deep:{value:new Kt(670546)},shallow:{value:new Kt(2788518)},sky:{value:new Kt(10405597)}},vertexShader:`
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
      }`,transparent:!0}),c=new A(o,l);c.rotation.x=-Math.PI/2,c.position.set(0,.02,920),e.add(c),s.water=c;const h=new A(new ae(1700,3),new $t({color:15202047,transparent:!0,opacity:.5}));h.rotation.x=-Math.PI/2,h.position.set(0,.09,486),e.add(h),s.animated.push({type:"foam",mesh:h});const d=new O({color:8085313,roughness:.95});for(let p=0;p<4;p++){const x=new A(new P(4,.35,26),d);x.position.set(300+p*13,.35,460),e.add(x)}const f=new A(new P(52,.4,6),d);f.position.set(319,.4,444),e.add(f);const u=new A(new ae(7,2.4),new $t({map:Cn("MARINA","#123a4a","#d8f4ff"),transparent:!0}));u.position.set(319,2.6,440),e.add(u),s.marina={x:319,z:452},s.addPOI("marina","Harbor Marina",319,442,20,{icon:"marina"});for(let p=0;p<14;p++){const x=-380+p*55,m=414+p%3*8,g=new A(new Ft(.05,.05,2.6,5),s.metalMat);g.position.set(x,1.35,m),e.add(g);const M=new A(new Sn(2,.6,10),new O({color:_e([14248795,5214115,14726236,7183991]),roughness:.9,side:Qe}));M.position.set(x,2.7,m),e.add(M)}}function jx(s,t,e,n=1,i=Math.random){const a=new Gt,r=new A(new Ft(.16*n,.3*n,6.2*n,7),new O({color:8020551,roughness:1}));r.position.y=3.1*n,r.rotation.z=(i()-.5)*.08,a.add(r);const o=new O({color:3103282,roughness:1,side:Qe});for(let l=0;l<7;l++){const c=new A(new Sn(.75*n,4.2*n,5),o),h=l/7*re;c.position.set(Math.cos(h)*1.3*n,6.6*n,Math.sin(h)*1.3*n),c.rotation.set(Math.cos(h)*.95,0,Math.sin(h)*.95+.45),a.add(c)}a.position.set(t,.1,e),s.add(a)}function tv(s,t,e,n,i){const a=s.root,r=new Gt;r.position.set(t,.12,e),r.rotation.y=n;const o=new O({color:i,roughness:.86}),l=new O({color:_e([9060147,3690588,7031347,4872770]),roughness:.9}),c=new A(new P(9,3.4,7),o);c.position.y=1.8,c.castShadow=!0,r.add(c);const h=new A(new Sn(7.1,2.7,4),l);h.position.y=4.5,h.rotation.y=Math.PI/4,h.castShadow=!0,r.add(h);const d=new A(new P(1.2,2.2,.14),new O({color:4863269,roughness:.8}));d.position.set(0,1.15,3.55),r.add(d);const f=new O({color:10474726,emissive:16762746,emissiveIntensity:.15,roughness:.15,metalness:.3});for(const m of[-1,1]){const g=new A(new P(1.6,1.2,.1),f);g.position.set(m*2.9,2,3.56),r.add(g)}const u=new A(new P(.7,2.1,.7),new O({color:7031354,roughness:.95}));u.position.set(2.2,5,-1.2),r.add(u),a.add(r);const p=Math.abs(Math.cos(n))*4.6+Math.abs(Math.sin(n))*3.6,x=Math.abs(Math.cos(n))*3.6+Math.abs(Math.sin(n))*4.6;s.colliders.push({minX:t-p,maxX:t+p,minZ:e-x,maxZ:e+x,height:7,type:"building",mesh:c})}function Kn(s,t,e,n,i,a,r=!1){const o=s.root,l=n-t,c=i-e,h=Math.hypot(l,c),d=Math.atan2(l,c),f=new Gt;f.position.set((t+n)*.5,0,(e+i)*.5),f.rotation.y=d,o.add(f);const u=new O({color:4870230,roughness:.9}),p=new O({color:2632753,roughness:.96}),x=new A(new P(a,.32,h),u);if(x.position.y=-.06,x.castShadow=!0,f.add(x),!r){const S=new A(new P(a-1.6,.06,h-.4),p);S.position.y=.12,f.add(S)}const m=new O({color:11055544,roughness:.35,metalness:.7}),g=new O({color:5331812,roughness:.55,metalness:.5});for(const S of[-1,1]){const I=new A(new P(.16,.16,h),m);I.position.set(S*(a/2-.25),1.05,0),f.add(I);const R=new A(new P(.12,.12,h),m);R.position.set(S*(a/2-.25),.55,0),f.add(R);const L=Math.max(2,Math.floor(h/9));for(let k=0;k<=L;k++){const D=new A(new P(.14,1.1,.14),g);D.position.set(S*(a/2-.25),.55,-h/2+k*h/L),f.add(D)}const z=new A(new P(.3,.55,h),g);z.position.set(S*(a/2-.7),-.45,0),f.add(z)}const M=new Ft(.85,1.1,9,8),y=Math.max(1,Math.floor(h/22));for(let S=1;S<=y;S++){const I=new A(M,new O({color:6975606,roughness:.8}));I.position.set(0,-4.2,-h/2+S*h/(y+1)),f.add(I)}if(r)for(const S of[-1,1]){const I=new A(new P(.22,2.6,h),g);I.position.set(S*(a/2+.1),1.7,0),f.add(I);const R=Math.max(3,Math.floor(h/7));for(let L=0;L<=R;L++){const z=new A(new P(.15,2.6,.15),g);z.position.set(S*(a/2+.1),1.7,-h/2+L*h/R),f.add(z)}}const _=Math.min(t,n)-a/2-2,w=Math.max(t,n)+a/2+2,b=Math.min(e,i)-a/2-2,v=Math.max(e,i)+a/2+2;s.bridges.push({minX:_,maxX:w,minZ:b,maxZ:v})}function ev(s,t){const e=s.root,n=new O({color:14207906,roughness:1}),i=new O({color:4942396,roughness:1}),a=new O({color:2764339,roughness:.95}),r=new O({color:10132114,roughness:.9}),o=[{name:"PALM ISLAND",x:300,z:700,rx:182,rz:132},{name:"CORAL ISLAND",x:-310,z:748,rx:156,rz:114},{name:"SUNSET ISLE",x:-780,z:620,rx:152,rz:112},{name:"FORT NOVA",x:790,z:900,rx:184,rz:142,military:!0},{name:"SEAGLASS CAY",x:40,z:1120,rx:172,rz:122}];s.islands=o,s.bridges=[];for(const w of o){const b=new A(new Ft(1,1.04,.16,56),n);b.scale.set(w.rx,1,w.rz),b.position.set(w.x,-.02,w.z),b.receiveShadow=!0,e.add(b);const v=new A(new Ft(1,1,.18,56),i);v.scale.set(w.rx*.87,1,w.rz*.85),v.position.set(w.x,.02,w.z),v.receiveShadow=!0,e.add(v);for(let S=0;S<16;S++){const I=t()*re,R=new A(new ll(.8+t()*1.7,0),new O({color:8025192,roughness:1,flatShading:!0}));R.position.set(w.x+Math.cos(I)*w.rx*.97,.2,w.z+Math.sin(I)*w.rz*.97),R.rotation.set(t(),t()*re,t()),e.add(R)}}const l=[{x:300,z:700,w:16,d:262},{x:300,z:700,w:330,d:16},{x:-310,z:748,w:16,d:208},{x:-310,z:748,w:268,d:16},{x:-780,z:620,w:16,d:200},{x:-780,z:620,w:290,d:16},{x:790,z:900,w:16,d:270},{x:790,z:900,w:320,d:16},{x:40,z:1120,w:16,d:230},{x:40,z:1120,w:300,d:16}];s.islandRoads=l;for(const w of l){const b=new A(new P(w.w,.05,w.d),a);b.position.set(w.x,.135,w.z),e.add(b);const v=w.w>w.d;for(const S of[-1,1]){const I=new A(new P(v?w.w:1.2,.18,v?1.2:w.d),r);I.position.set(w.x+(v?0:S*(w.w/2+.4)),.16,w.z+(v?S*(w.d/2+.4):0)),e.add(I)}}const c=new P(.18,.02,3),h=new $t({color:14276280});for(let w=590;w<=812;w+=12){const b=new A(c,h);b.position.set(300,.17,w),e.add(b)}for(let w=150;w<=452;w+=12){const b=new A(c,h);b.rotation.y=Math.PI/2,b.position.set(w,.17,700),e.add(b)}for(let w=660;w<=840;w+=12){const b=new A(c,h);b.position.set(-310,.17,w),e.add(b)}for(let w=-432;w<=-188;w+=12){const b=new A(c,h);b.rotation.y=Math.PI/2,b.position.set(w,.17,748),e.add(b)}for(let w=532;w<=708;w+=12){const b=new A(c,h);b.position.set(-780,.17,w),e.add(b)}for(let w=-912;w<=-648;w+=12){const b=new A(c,h);b.rotation.y=Math.PI/2,b.position.set(w,.17,620),e.add(b)}for(let w=778;w<=1022;w+=12){const b=new A(c,h);b.position.set(790,.17,w),e.add(b)}for(let w=646;w<=934;w+=12){const b=new A(c,h);b.rotation.y=Math.PI/2,b.position.set(w,.17,900),e.add(b)}for(let w=1016;w<=1224;w+=12){const b=new A(c,h);b.position.set(40,.17,w),e.add(b)}for(let w=-94;w<=174;w+=12){const b=new A(c,h);b.rotation.y=Math.PI/2,b.position.set(w,.17,1120),e.add(b)}const d=[15261126,14137743,13227727,14731177,12175805],f=[[158,638,.2],[398,648,-.15],[236,776,.35],[400,778,-.4],[248,604,.1],[356,606,-.2],[244,800,.25],[358,802,-.3],[-390,690,.15],[-232,692,-.25],[-392,806,.3],[-228,810,-.15],[-858,566,.2],[-706,566,-.18],[-850,668,.35],[-34,1062,.2],[110,1062,-.2],[-40,1176,.3],[118,1176,-.32]];for(let w=0;w<f.length;w++)tv(s,f[w][0],f[w][1],f[w][2],d[w%d.length]);for(let w=0;w<64;w++){const b=o[w%o.length];if(b.military)continue;const v=t()*re,S=b.x+Math.cos(v)*b.rx*(.55+t()*.34),I=b.z+Math.sin(v)*b.rz*(.55+t()*.34);l.some(L=>Math.abs(S-L.x)<L.w/2+8&&Math.abs(I-L.z)<L.d/2+8)||Math.abs(S-200)<10&&I>440&&I<682||jx(e,S,I,.8+t()*.45,t)}for(let w=0;w<10;w++){const b=180+w*26,v=820+w%2*6,S=new A(new Ft(.05,.05,2.4,5),s.metalMat);S.position.set(b,1.3,v),e.add(S);const I=new A(new Sn(1.9,.55,10),new O({color:_e([14248795,5214115,14726236]),roughness:.9,side:Qe}));I.position.set(b,2.5,v),e.add(I)}const u=new Gt;u.position.set(-360,.1,830);const p=new O({color:15657696,roughness:.7}),x=new O({color:11680308,roughness:.65});for(let w=0;w<5;w++){const b=new A(new Ft(1.8-w*.22,2-w*.22,3,12),w%2?x:p);b.position.y=1.5+w*3,u.add(b)}const m=new A(new Ft(2.3,2,.35,12),new O({color:3093818,roughness:.6}));m.position.y=15.1,u.add(m);const g=new A(new Ce(.75,10,8),new $t({color:16773818,toneMapped:!1}));g.position.y=16,u.add(g);const M=new Li(16769696,2.4,70,2);M.position.y=16,u.add(M),e.add(u),s.lighthouse={group:u,light:M,lamp:g};const y=new O({color:8085313,roughness:.95});for(let w=0;w<3;w++){const b=new A(new P(4,.38,22),y);b.position.set(-286+w*14,.35,878),e.add(b)}const _=new A(new P(38,.42,6),y);_.position.set(-272,.38,868),e.add(_),Kn(s,300,466,300,594,18),Kn(s,122,700,-152,741,16),Kn(s,200,466,200,622,9,!0),Kn(s,-780,466,-780,532,17),Kn(s,790,466,790,770,18),Kn(s,40,466,40,1010,18),Kn(s,-310,790,40,1015,16),Kn(s,700,466,700,782,9,!0),Kn(s,-820,466,-820,548,9,!0),nv(s),iv(s),s.addPOI("park","Palm Island Beach",300,812,34,{icon:"park"}),s.addPOI("shop","Palm Island Market",388,700,16,{icon:"shop"}),s.addPOI("marina","Coral Island Marina",-272,866,22,{icon:"marina"}),s.addPOI("park","Coral Lighthouse",-360,820,18,{icon:"park"}),s.addPOI("hotel","Palm Island Resort",208,646,20,{icon:"hotel"}),s.addPOI("park","Sunset Isle Lookout",-780,654,26,{icon:"park"}),s.addPOI("park","Seaglass Lagoon",40,1120,34,{icon:"park"}),s.addPOI("military","Fort Nova Military Base",860,900,44,{icon:"military"}),s.addPOI("shop","Seaglass Market",112,1120,15,{icon:"shop"})}function nv(s,t){const e=s.root,n=new O({color:4937272,roughness:.82,metalness:.18}),i=new O({color:3160355,roughness:.9}),a=new O({color:9209192,roughness:1}),r=new O({color:6054488,roughness:.55,metalness:.6}),o=new O({color:3231836,roughness:.1,metalness:.6}),l=872,c=892,h=new A(new P(300,.14,250),a);h.position.set(l,.2,c),h.receiveShadow=!0,e.add(h);const d=new A(new P(150,.06,92),new O({color:6974816,roughness:.95}));d.position.set(l-20,.3,c+26),e.add(d);const f=(U,K,V,Z,tt,vt,zt=0)=>{const j=new A(new P(V,tt,Z),vt);j.position.set(U,.3+tt/2,K),j.rotation.y=zt,j.castShadow=!0,e.add(j);const dt=new A(new P(V+1.2,.34,Z+1.2),i);return dt.position.set(U,.3+tt+.1,K),dt.rotation.y=zt,e.add(dt),s.colliders.push({minX:U-V/2-1,maxX:U+V/2+1,minZ:K-Z/2-1,maxZ:K+Z/2+1,height:tt+1,type:"building",mesh:j}),j};f(l-8,c-46,34,18,8.5,n);for(let U=-2;U<=2;U++){const K=new A(new P(4.4,2.1,.2),o);K.position.set(l-8+U*6,5.2,c-46+9.1),e.add(K)}const u=new A(new Ft(.08,.11,13,8),s.metalMat);u.position.set(l-8,6.9,c-58),e.add(u);const p=new A(new ae(3.4,2.1),new O({color:7174725,side:Qe,roughness:.9}));p.position.set(l-6.2,11.9,c-58),e.add(p),s.militaryFlag=p,f(l+62,c-40,42,14,5.6,n),f(l+62,c-15,42,14,5.6,n),f(l+66,c+52,30,22,9,i);const x=new A(new Ft(13,13,32,14,1,!1,0,Math.PI),i);x.rotation.z=Math.PI/2,x.rotation.y=Math.PI/2,x.position.set(l+92,.35,c+4),e.add(x),s.colliders.push({minX:l+76,maxX:l+108,minZ:c-12,maxZ:c+20,height:13,type:"building",mesh:x});const m={x0:l-132,x1:l+122,z0:c-104,z1:c+104},g=new Ft(.07,.09,2.5,5);for(let U=m.x0;U<=m.x1;U+=8){for(const Z of[m.z0,m.z1]){if(Math.abs(U-(l+18))<13&&Z===m.z1)continue;const tt=new A(g,r);tt.position.set(U,1.55,Z),e.add(tt)}const K=new A(new P(8.1,.06,.06),r);K.position.set(U+4,2.7,m.z0),e.add(K);const V=new A(new P(8.1,.06,.06),r);V.position.set(U+4,2.7,m.z1),e.add(V)}for(let U=m.z0;U<=m.z1;U+=8){for(const K of[m.x0,m.x1]){const V=new A(g,r);V.position.set(K,1.55,U),e.add(V)}for(const K of[m.x0,m.x1]){const V=new A(new P(.06,.06,8.1),r);V.position.set(K,2.7,U+4),e.add(V)}}for(const U of[-1,1]){const K=f(l+18+U*15,c+104,8,6,3.2,n),V=new A(new P(6.4,1.3,.2),o);V.position.set(l+18+U*15,2.2,c+107.1),e.add(V),K.castShadow=!0}const M=new A(new ae(12,3.4),new $t({map:Cn("FORT NOVA","#1d2617","#d8e3bd","MILITARY RESERVATION"),transparent:!0}));M.position.set(l+18,6.3,c+105.2),e.add(M);for(const U of[-1,1]){const K=new A(new P(.5,6.4,.5),r);K.position.set(l+18+U*9.5,3.4,c+105),e.add(K)}const y=new A(new Ft(2.4,3.2,16,8),i);y.position.set(l-100,8.3,c-76),e.add(y);const _=new Gt;_.position.set(l-100,17,c-76);const w=new A(new Ft(5.2,.5,1.2,18,1,!0),new O({color:10134164,roughness:.48,metalness:.5,side:Qe}));w.rotation.x=Math.PI/2.5,_.add(w);const b=new A(new P(.35,4.6,.35),r);b.position.set(0,2.2,1.4),_.add(b),e.add(_),s.radar=_;const v=new Gt;v.position.set(l-118,0,c+84);for(const U of[-1,1])for(const K of[-1,1]){const V=new A(new P(.35,13,.35),r);V.position.set(U*4.4,6.5,K*4.4),V.rotation.z=-U*.04,v.add(V)}const S=new A(new P(9,4,9),i);S.position.y=14.5,v.add(S);const I=new A(new P(8.4,1.5,8.4),o);I.position.y=15,v.add(I);const R=new A(new Sn(7.4,2.6,4),i);R.position.y=17.6,R.rotation.y=Math.PI/4,v.add(R),e.add(v),s.colliders.push({minX:l-124,maxX:l-112,minZ:c+78,maxZ:c+90,height:19,type:"building",mesh:S});const L=(U,K,V)=>{const Z=new Gt;Z.position.set(U,.25,K),Z.rotation.y=V;const tt=new A(new P(7.2,1.9,11.6),n);tt.position.y=1.5,Z.add(tt);const vt=new O({color:1974556,roughness:1});for(const Dt of[-1,1]){const qt=new A(new P(1.2,1.5,11.8),vt);qt.position.set(Dt*3.3,.95,0),Z.add(qt);for(let St=-4.2;St<=4.2;St+=1.4){const Xt=new A(new Ft(.55,.55,1.35,10),vt);Xt.rotation.z=Math.PI/2,Xt.position.set(Dt*3.3,.62,St),Z.add(Xt)}}const zt=new A(new Ft(2.3,2.8,1.25,8),i);zt.position.set(0,2.9,-.8),Z.add(zt);const j=new A(new Ft(.16,.21,8.2,8),i);j.rotation.x=Math.PI/2,j.position.set(0,3.1,3.7),Z.add(j);const dt=new A(new P(.9,.18,.9),i);return dt.position.set(0,3.55,-1.2),Z.add(dt),e.add(Z),Z};L(l+20,c+16,-.2),L(l+4,c+16,.12),L(l+36,c+16,-.55);for(const[U,K,V]of[[l+42,c-70,.3],[l+54,c-70,.3]]){const Z=pi("truck",4937272,{});Z.group.position.set(U,.02,K),Z.group.rotation.y=V,e.add(Z.group)}const z=[5069880,5982770,3753532];for(let U=0;U<12;U++){const K=new A(new P(6,2.6,12),new O({color:z[U%3],roughness:.85}));K.position.set(l+72+U%3*14,1.5+Math.floor(U/6)*2.7,c+72+Math.floor(U/3)%2*13),e.add(K)}for(let U=0;U<4;U++){const K=new A(new Ft(4,4,6,16),new O({color:7172696,roughness:.6,metalness:.35}));K.position.set(l-70+U*11,3.2,c+62),e.add(K);const V=new A(new Ft(4.1,4.1,.35,16),i);V.position.set(l-70+U*11,6.35,c+62),e.add(V)}const k=pi("helicopter",4608570,{});k.group.position.set(l-60,.02,c+18),k.group.rotation.y=Math.PI*.2,e.add(k.group);const D=new A(new Ft(16,16,.1,32),new O({color:5198672,roughness:.95}));D.position.set(l-60,.29,c+18),e.add(D);const H=new A(new er(7,9.5,24),new $t({color:13158054,side:Qe}));H.rotation.x=-Math.PI/2,H.position.set(l-60,.35,c+18),e.add(H);const X=new $t({color:16733508,toneMapped:!1});for(const[U,K]of[[l-118,c+78],[l+100,c+104],[l-100,c-100]]){const V=new A(new Ce(.28,8,6),X);V.position.set(U,3,K),e.add(V)}s.militaryBase={x:l,z:c},s.addPOI("military","Fort Nova HQ",l-8,c-58,26,{icon:"military"}),s.addPOI("military","Fort Nova Barracks",l+64,c-28,20,{icon:"military"})}function iv(s){const t=s.root,e=700,n=378,i=1012,a=i-n,r=new A(new P(6.4,.24,a),new O({color:4012596,roughness:1}));r.position.set(e,.08,(n+i)/2),t.add(r);const o=new O({color:11055028,roughness:.26,metalness:.85});for(const m of[-1,1]){const g=new A(new P(.14,.12,a),o);g.position.set(e+m*.75,.3,(n+i)/2),t.add(g)}const l=new P(3.1,.12,.26),c=new De(l,s.woodMat,Math.floor(a/1.8)),h=new we;for(let m=0;m<c.count;m++)h.position.set(e,.19,n+m*1.8+1),h.updateMatrix(),c.setMatrixAt(m,h.matrix);t.add(c);const d=new A(new P(8,.95,34),s.concreteMat);d.position.set(e+7,.55,964),t.add(d);const f=new A(new P(9,.18,36),new O({color:3884084,roughness:.7}));f.position.set(e+7,4.3,964),t.add(f);for(const m of[-15,0,15]){const g=new A(new Ft(.1,.13,4.1,6),s.metalMat);g.position.set(e+11,2.2,964+m),t.add(g)}const u=new A(new ae(6.4,2.2),new $t({map:Cn("FORT NOVA","#1d2617","#d8e3bd","MILITARY RAIL"),transparent:!0}));u.position.set(e+11.3,3.1,954),u.rotation.y=-Math.PI/2,t.add(u);const p=new A(new P(3.2,1.8,1.2),new O({color:6958888,roughness:.7}));p.position.set(e,1,1008),t.add(p),s.addPOI("train","Fort Nova Military Rail",e+7,964,12,{icon:"transit",station:0});const x=sv();x.position.set(e,.42,392),x.rotation.y=0,t.add(x),s.militaryRail={group:x,speed:0,progress:14,dir:1,dwell:5,length:a-46,update(m){if(this.dwell>0)this.dwell-=m,this.speed=Be.damp(this.speed,0,5,m);else{const g=this.dir>0?this.length-this.progress:this.progress;this.speed=Be.damp(this.speed,g<40?3:15,1.3,m),this.progress+=this.speed*this.dir*m,this.progress>=this.length-2&&(this.progress=this.length-2,this.dir=-1,this.dwell=7,this.speed=0),this.progress<=2&&(this.progress=2,this.dir=1,this.dwell=7,this.speed=0)}this.group.position.z=392+this.progress,this.group.rotation.y=this.dir>0?0:Math.PI,this.group.userData.wheels?.forEach(g=>g.rotation.x+=this.speed*m/.5)}}}function sv(){const s=new Gt,t=new O({color:5134135,roughness:.78,metalness:.2}),e=new O({color:2501408,roughness:.85}),n=new O({color:1781812,roughness:.12,metalness:.55}),i=[],a=[];for(let r=0;r<3;r++){const o=new Gt,l=new A(new P(2.9,2.4,12),t);l.position.y=1.85,l.castShadow=!0,o.add(l);const c=new A(new P(2.6,.22,11.6),e);c.position.y=3.16,o.add(c);const h=new A(new P(2.94,.24,11.8),e);h.position.y=1.18,o.add(h);for(const d of[-1,1]){const f=new A(new P(.05,.55,.9),n);f.position.set(d*1.47,2.15,r===0?4.1:2.4),o.add(f);const u=new A(new P(.05,.55,.9),n);u.position.set(d*1.47,2.15,-2.6),o.add(u)}if(r===0){const d=new A(new P(2.6,1.8,1.4),t);d.position.set(0,1.55,6.4),o.add(d);const f=new A(new P(2.3,.8,.1),n);f.position.set(0,2.2,7.12),o.add(f);for(const u of[-1,1]){const p=new A(new P(.36,.22,.1),new $t({color:16773572,toneMapped:!1}));p.position.set(u*1,1.35,7.14),o.add(p)}}for(const d of[-4.2,4.2]){const f=new A(new P(2.1,.42,2.2),e);f.position.y=.55,f.position.z=d,o.add(f);for(const u of[-1,1]){const p=new A(new Ft(.48,.48,.25,10),e);p.rotation.z=Math.PI/2,p.position.set(u*1.25,.45,d),o.add(p),i.push(p)}}o.position.z=-r*13.4,s.add(o),a.push(o)}return s.userData.wheels=i,s.userData.cars=a,s}function av(s,t){const e=s.root,n=250,i=14,a=18,r=new O({color:9411235,roughness:.4,metalness:.55}),o=new O({color:4871520,roughness:.5,metalness:.5}),l=new Gt,c=2*(n-a),h=[[0,-n,c,3.2,0],[0,n,c,3.2,0],[-n,0,3.2,c,0],[n,0,3.2,c,0]];for(const[J,W,Rt,gt]of h){const kt=new A(new P(Rt,.9,gt),r);kt.position.set(J,i,W),kt.castShadow=!0,l.add(kt);const C=new A(new P(Rt+.2,.16,gt+.2),o);C.position.set(J,i+.52,W),l.add(C)}const d=[[n-a,-n+a,-Math.PI/2],[n-a,n-a,0],[-n+a,n-a,Math.PI/2],[-n+a,-n+a,Math.PI]];for(const[J,W,Rt]of d)Kc(l,J,W,a,Rt,Rt+Math.PI/2,i,.9,3.2,r),Kc(l,J,W,a,Rt,Rt+Math.PI/2,i+.52,.16,3.4,o);const f=new Ft(.75,.95,i,8);for(let J=-n;J<=n;J+=25)for(const W of[-n,n]){const Rt=new A(f,o);Rt.position.set(J,i/2,W),Rt.castShadow=!0,l.add(Rt)}for(let J=-n+25;J<=n-25;J+=25)for(const W of[-n,n]){const Rt=new A(f,o);Rt.position.set(W,i/2,J),Rt.castShadow=!0,l.add(Rt)}const u=[{x:0,z:-n,ang:0,name:"NORTH LOOP"},{x:n,z:0,ang:Math.PI/2,name:"EAST GATE"},{x:0,z:n,ang:Math.PI,name:"HARBOR VIEW"},{x:-n,z:0,ang:-Math.PI/2,name:"WEST END"}];for(let J=0;J<u.length;J++){const W=u[J],Rt=new A(new P(28,.6,7),r);Rt.position.set(W.x+Math.cos(W.ang)*0,i-.9,W.z+0),l.add(Rt);const gt=new A(new P(26,.25,6),new O({color:14149872,roughness:.3,metalness:.2,transparent:!0,opacity:.65}));gt.position.set(W.x,i+4.4,W.z),l.add(gt);for(let F=-1;F<=1;F+=2){const at=new A(new P(.28,5.3,.28),o);at.position.set(W.x+F*12,i+2.1,W.z),l.add(at)}const kt=new A(new P(28,.2,7),new O({color:5267568,roughness:.5}));kt.position.set(W.x,i+4.6,W.z),l.add(kt);const C=new $t({map:Cn("MONORAIL","#071d2b","#8ceaff",W.name),transparent:!0}),E=new A(new ae(6,3),C);E.position.set(W.x,i+2.8,W.z),E.rotation.y=W.ang+Math.PI,l.add(E);const q=W.x,ct=W.z+10,rt=new A(new P(5.5,i,5.5),new O({color:4148312,roughness:.35,metalness:.4}));rt.position.set(q,i/2,ct),l.add(rt);const xt=new A(new P(4.2,i-1.5,4.4),new O({color:7325149,transparent:!0,opacity:.45,roughness:.1,metalness:.6}));xt.position.set(q,i/2,ct),l.add(xt);const yt=new A(new P(6.4,.4,6.4),r);yt.position.set(q,i+.4,ct),l.add(yt);const it=new Gt;it.position.set(q,0,ct+5);const st=new A(new Ft(.08,.1,2.8,6),o);st.position.y=1.4,it.add(st);const Mt=new A(new ae(2.2,1.1),new $t({map:Cn("NOVA RAIL","#081c2b","#8ceaff",W.name),transparent:!0}));Mt.position.set(0,3.2,0),it.add(Mt),l.add(it),s.addPOI("monorail",W.name+" Monorail",q,ct+2,7,{icon:"transit",station:J}),W.tower=new N(q,0,ct),W.platformY=i}const p=cv();p.position.set(0,i+1.1,-n),l.add(p),e.add(l);const x=4*(2*n),m=x/8,g={group:p,progress:m,speed:0,targetSpeed:11,dwell:5.5,manual:!1,stations:u,Y:i,R:n,perimeter:x,doorOpen:!0,currentStation:0,lastStation:0,stopAt:null,riding:!1,update(J,W){if(this.manual){this.targetSpeed=Ot(this.targetSpeed,0,24),this.speed=Be.damp(this.speed,this.targetSpeed,1.6,J),this.speed*=1-J*.12,this.progress=(this.progress+this.speed*J)%this.perimeter,this.speed<0&&(this.speed=0),this.speed>.5||this.stationAt(this.progress)!==this.currentStation?this.currentStation=-1:this.speed<.25&&(this.currentStation=this.stationAt(this.progress)),this.doorOpen=this.currentStation>=0&&this.speed<.25,this.positionCars(),this.animateDoors(J);return}const Rt=this.nextStationDistance();this.dwell>0?(this.dwell-=J,this.speed=Be.damp(this.speed,0,6,J),this.doorOpen=!0):(this.doorOpen=!1,Rt<26&&this.speed>0?(this.speed=Be.damp(this.speed,0,3.4,J),Rt<1.6&&(this.dwell=5.5,this.speed=0,this.currentStation=this.stationAt(this.progress))):this.speed=Be.damp(this.speed,11,1.1,J),this.progress=(this.progress+this.speed*J)%this.perimeter,this.speed>.5&&(this.currentStation=-1)),this.positionCars(),this.animateDoors(J)},nextStationDistance(){let J=1e9;for(const W of this.stations){let gt=(this.stationProgress(W)-this.progress+this.perimeter)%this.perimeter;gt<2&&(gt=this.perimeter),J=Math.min(J,gt)}return J},stationProgress(J){const W=this.perimeter/4;return Math.abs(J.z+n)<1?W*.5:Math.abs(J.x-n)<1?W*1.5:Math.abs(J.z-n)<1?W*2.5:W*3.5},stationAt(J){let W=-1,Rt=4;for(let gt=0;gt<this.stations.length;gt++){const kt=this.stationProgress(this.stations[gt]);let C=Math.abs((J-kt+this.perimeter/2)%this.perimeter-this.perimeter/2);C<Rt&&(Rt=C,W=gt)}return W},positionCars(){const J=lv(this.progress,this.perimeter,this.R);this.group.position.set(J.x,this.Y+1.1,J.z),this.group.rotation.y=-J.angle+Math.PI/2;for(let W=1;W<this.group.userData.cars.length;W++)this.group.userData.cars[W].position.set(0,0,-W*10.6)},animateDoors(J){const W=this.group.userData.doors||[];for(const Rt of W)Rt.scale.x=Be.damp(Rt.scale.x,this.doorOpen?.05:1,5,J)},board(){return this.dwell=5,!0},stationPositions(){return this.stations.map(J=>J.tower)}};g.positionCars(),g.animateDoors(1),s.monorail=g;const M=.1,y=-446,_=y-5.2,w=new O({color:11055028,roughness:.26,metalness:.85}),b=new A(new P(1200,.28,15),new O({color:4012596,roughness:1}));b.position.set(0,.05,(y+_)/2),e.add(b);const v=new P(.3,.13,10.4),S=new De(v,s.woodMat,300),I=new we;for(let J=0;J<300;J++)I.position.set(-600+J*4,M+.1,(y+_)/2),I.rotation.set(0,Math.PI/2,0),I.updateMatrix(),S.setMatrixAt(J,I.matrix);e.add(S);for(const J of[y,_])for(const W of[-1,1]){const Rt=new A(new P(1200,.13,.16),w);Rt.position.set(0,M+.21,J+W*.75),e.add(Rt);const gt=new A(new P(1200,.05,.34),new O({color:5922659,roughness:.6,metalness:.5}));gt.position.set(0,M+.13,J+W*.75),e.add(gt)}const R=new O({color:5858156,roughness:.5,metalness:.6});for(let J=-600;J<=600;J+=48){const W=new A(new Ft(.14,.2,8.6,7),R);W.position.set(J,4.3,_-4.1),e.add(W);const Rt=new A(new P(.14,.14,7.4),R);Rt.position.set(J,7.9,_+2.6),e.add(Rt);for(const gt of[y,_]){const kt=new A(new P(48,.035,.035),new $t({color:2830388}));kt.position.set(J,7.62,gt),e.add(kt);const C=new A(new P(.03,.34,.03),new $t({color:2830388}));C.position.set(J,7.78,gt),e.add(C)}}const L=new O({color:12633801,roughness:.2,metalness:.9}),z=62,k=Math.atan2(y-_,z);for(const J of[-1,1]){const W=new A(new P(z,.11,.14),L);W.position.set(-92,M+.21,(y+_)/2+J*.75),W.rotation.y=k,e.add(W)}const D=new A(new P(1.1,.35,1.1),new O({color:3423039,roughness:.6,metalness:.5}));D.position.set(-118,.45,_+2.6),e.add(D);const H=new A(new P(.1,.16,3.4),L);H.position.set(-118,.62,_+2.6),H.rotation.y=.18,e.add(H);const X=new A(new Ce(.16,8,6),new $t({color:3407735,toneMapped:!1}));X.position.set(-118,1.5,_+2.6),e.add(X);const U=new A(new Ft(.07,.09,1.1,6),R);U.position.set(-118,.9,_+2.6),e.add(U),s.railSwitch={blade:H,lens:X,target:0,angle:.18};for(const J of[-340,-40,260,520]){const W=new A(new Ft(.08,.11,3.4,6),R);W.position.set(J,1.8,y+3.6),e.add(W);for(let Rt=0;Rt<3;Rt++){const gt=new A(new Ce(.13,8,6),new $t({color:Rt===0?3407735:Rt===1?2761744:2755082,toneMapped:!1}));gt.position.set(J,3.5-Rt*.36,y+3.7),e.add(gt)}}const K=new Gt,V=new A(new P(92,1.1,8),s.concreteMat);V.position.set(170,.55,-438),K.add(V);const Z=new A(new P(90,.08,.7),new O({color:14135871,roughness:.8}));Z.position.set(170,1.13,-441.2),K.add(Z);const tt=new A(new P(82,.3,9.5),new O({color:3752522,roughness:.6,metalness:.3}));tt.position.set(170,5.3,-438),K.add(tt);const vt=new A(new P(80,.08,8.8),new O({color:9422812,transparent:!0,opacity:.28,roughness:.05,metalness:.4}));vt.position.set(170,5.08,-438),K.add(vt);for(let J=-38;J<=38;J+=12){const W=new A(new P(.2,4.8,.2),s.metalMat);if(W.position.set(170+J,2.7,-438),K.add(W),J%24===0){const Rt=new A(new P(5.6,.16,.7),s.woodMat);Rt.position.set(170+J,1.25,-436.4),K.add(Rt)}}const zt=new A(new ae(12,3),new $t({map:Cn("NOVA CENTRAL","#0b1b2b","#cfefff","RAIL TERMINAL"),transparent:!0}));zt.position.set(170,3.7,-434),K.add(zt);const j=new A(new P(9,1.2,6),s.concreteMat);j.position.set(170,.45,-430),K.add(j),e.add(K),s.addPOI("train","Nova Central Rail",170,-430,16,{icon:"transit",station:1});const dt=[{x:-260,name:"WESTBROOK",sub:"COMMUTER STOP"},{x:430,name:"EASTGATE",sub:"COMMUTER STOP"}];for(const J of dt){const W=new Gt,Rt=new A(new P(64,1.05,7),s.concreteMat);Rt.position.set(J.x,.52,-438),W.add(Rt);const gt=new A(new P(62,.07,.6),new O({color:14135871,roughness:.8}));gt.position.set(J.x,1.08,-441),W.add(gt);const kt=new A(new P(58,.25,8),new O({color:3752522,roughness:.6,metalness:.3}));kt.position.set(J.x,4.5,-438),W.add(kt);for(let E=-26;E<=26;E+=13){const q=new A(new P(.18,4.1,.18),s.metalMat);q.position.set(J.x+E,2.3,-438),W.add(q)}const C=new A(new ae(9,2.4),new $t({map:Cn(J.name,"#0b1b2b","#cfefff",J.sub),transparent:!0}));C.position.set(J.x,3.2,-434),W.add(C),e.add(W),s.addPOI("train",`${J.name[0]}${J.name.slice(1).toLowerCase()} Rail`,J.x,-429,13,{icon:"transit",station:J===dt[0]?0:2})}const Dt=Jc("nova");Dt.position.set(-420,M+.3,y),Dt.rotation.y=Math.PI/2,e.add(Dt);const qt=Jc("express");qt.position.set(320,M+.3,_),qt.rotation.y=-Math.PI/2,e.add(qt);const St=[{x:-260,z:-430,name:"Westbrook"},{x:170,z:-430,name:"Nova Central"},{x:430,z:-430,name:"Eastgate"}];s.rail=$c(s,Dt,{stations:St,dir:1,origin:-600,track:1,z:y,z1:y,z2:_,progress:180,speed:16,maxSpeed:16,name:"COMMUTER RAIL",route:"Nova Central Line",express:!1}),s.rail2=$c(s,qt,{stations:St,dir:-1,origin:600,track:2,z:_,z1:y,z2:_,progress:280,speed:22,maxSpeed:22,name:"NOVA EXPRESS",route:"Bay Express · Track 2",express:!0}),s.rail&&(s.rail.group.userData.trainLength=70);const Xt=hv();Xt.position.set(520,M+.3,_),Xt.rotation.y=-Math.PI/2,e.add(Xt),s.freightRail={group:Xt,speed:12,progress:520,update(J){this.progress=(this.progress+this.speed*J)%1200,this.group.position.x=600-this.progress,this.group.userData.wheels?.forEach(W=>W.rotation.x+=J*7)}};const le=200,Ut=452,jt=210,ce=new A(new P(6.2,.22,jt+14),new O({color:4012596,roughness:1}));ce.position.set(le,.1,Ut+jt/2),e.add(ce);const ot=new De(new P(.26,.12,3.2),s.woodMat,Math.floor(jt/1.6)),ft=new we;for(let J=0;J<ot.count;J++)ft.position.set(le,.22,Ut+J*1.6+2),ft.rotation.set(0,Math.PI/2,0),ft.updateMatrix(),ot.setMatrixAt(J,ft.matrix);e.add(ot);for(const J of[-1,1]){const W=new A(new P(.14,.12,jt+10),w);W.position.set(le+J*.75,.32,Ut+jt/2),e.add(W)}for(const J of[Ut,Ut+jt]){const W=new A(new P(7,.9,18),s.concreteMat);W.position.set(le+5.4,.5,J+(J===Ut?6:-6)),e.add(W);const Rt=new A(new P(7.6,.18,18),new O({color:5267568,roughness:.5}));Rt.position.set(le+5.4,4.2,J+(J===Ut?6:-6)),e.add(Rt);for(const kt of[-6,6]){const C=new A(new Ft(.1,.12,4.1,6),s.metalMat);C.position.set(le+8.6,2.05,J+kt+(J===Ut?6:-6)),e.add(C)}const gt=new A(new ae(4.8,1.6),new $t({map:Cn(J===Ut?"HARBOR":"PALM ISLAND","#0b1b2b","#cfefff","ISLAND LINE"),transparent:!0}));gt.position.set(le+8.9,3,J+(J===Ut?6:-6)),gt.rotation.y=-Math.PI/2,e.add(gt)}s.addPOI("train","Harbor Island Line",le+5,Ut+6,13,{icon:"transit",line:"island",station:0}),s.addPOI("train","Palm Island Station",le+5,Ut+jt-6,13,{icon:"transit",line:"island",station:1});const pt=dv();pt.position.set(le,.42,Ut+2),e.add(pt);const Ct=[{x:le,z:Ut+2,name:"Harbor Island",exit:{x:le+10,z:Ut+6}},{x:le,z:Ut+jt-2,name:"Palm Island",exit:{x:le+10,z:Ut+jt-6}}];s.islandRail={group:pt,speed:0,progress:2,dir:1,dwell:3,length:jt,lineName:"PALM ISLAND LINE",routeName:"Harbor ↔ Palm Island",stations:Ct,currentStation:0,trainLength:21,doors:!0,nearestStation(J){return Math.hypot(J.x-Ct[0].x,J.z-Ct[0].z)<Math.hypot(J.x-Ct[1].x,J.z-Ct[1].z)?Ct[0]:Ct[1]},stoppedAtStation(){return this.speed>.6?-1:this.progress<=3?0:this.progress>=this.length-3?1:-1},update(J){if(this.dwell>0)this.dwell-=J,this.speed=Be.damp(this.speed,0,5,J);else{const Rt=(this.dir>0?this.length-this.progress:this.progress)<34?2.6:14;this.speed=Be.damp(this.speed,Rt,1.4,J),this.progress+=this.speed*this.dir*J,this.progress>=this.length-2&&(this.progress=this.length-2,this.dir=-1,this.dwell=6,this.speed=0),this.progress<=2&&(this.progress=2,this.dir=1,this.dwell=6,this.speed=0)}this.currentStation=this.stoppedAtStation(),this.doors=this.currentStation>=0&&this.dwell>0,this.group.position.z=Ut+this.progress,this.group.rotation.y=this.dir>0?0:Math.PI,this.group.userData.wheels?.forEach(W=>W.rotation.x+=this.speed*J/.4)}};const _t=8.5,te=-392,Ht=new Gt,he=new A(new P(1280,.8,20),new O({color:3488578,roughness:.9}));he.position.set(0,_t,te),Ht.add(he);for(const J of[-1,1]){const W=new A(new P(1280,.9,.25),new O({color:9279134,roughness:.5,metalness:.5}));W.position.set(0,_t+1,te+J*9.8),Ht.add(W)}const fe=new Ft(1.1,1.3,_t,8);for(let J=-620;J<=620;J+=40){const W=new A(fe,s.concreteMat);W.position.set(J,_t/2,te),Ht.add(W)}e.add(Ht);for(let J=0;J<12;J++){const W=new Gt,Rt=new A(new P(3.6,1.1,1.8),new O({color:_e([9121587,3100538,13684936,3026484,10124082]),roughness:.6,metalness:.3}));Rt.position.y=.8,W.add(Rt);const gt=new A(new P(1.9,.8,1.6),new O({color:1779764,roughness:.2,metalness:.5}));gt.position.set(-.1,1.55,0),W.add(gt),W.position.set(nt(-600,600),_t+.6,te+(J%2?4:-4)),W.userData.speed=16+Math.random()*10,W.userData.lane=te,e.add(W),s.highwayCars.push(W)}const me=new Gt,G=new A(new P(6,14,30),new O({color:5987938,roughness:.95}));G.position.set(430,7,120),me.add(G);const Ue=new A(new P(.2,8,14),new $t({color:329482}));Ue.position.set(427,4.2,120),me.add(Ue),e.add(me);const se=new A(new ae(60,30),new O({color:3027510,roughness:1}));se.rotation.x=-Math.PI/2,se.position.set(96,.17,336),e.add(se)}function $c(s,t,e){return{group:t,city:s,speed:e.speed,progress:e.progress,length:1200,dwell:0,lineName:e.name,routeName:e.route,stations:e.stations,auto:!0,currentStation:-1,trainLength:70,departCool:0,dir:e.dir,origin:e.origin,track:e.track,z:e.z,z1:e.z1??e.z,z2:e.z2??e.z-5.2,maxSpeed:e.maxSpeed,express:!!e.express,doorOpen:!1,blocked:!1,blockTimer:0,creeping:!1,creepTimer:0,derailed:!1,derailTimer:0,hornTimer:0,nearestStation(){return this.stations[Math.max(0,this.currentStation)]},stationProgress(n){return((this.dir>0?n.x-this.origin:this.origin-n.x)+2400)%1200},nextStationDistance(){let n=1e9;for(const i of this.stations){let a=(this.stationProgress(i)-this.progress+1200)%1200;a<2&&(a=1200),n=Math.min(n,a)}return n},update(n,i){ov(this,s,n)}}}function rv(s,t){const e=t.game;if(!e)return 1/0;const n=s.group.position.x,i=s.z,a=s.dir;let r=1/0;const o=(c,h,d)=>{const f=(c-n)*a;if(f<-2||f>95||Math.abs(h-i)>3.4)return;const u=f-d*.5;u<r&&(r=u)},l=e.player;l&&!l.riding&&!l.vehicle&&o(l.pos.x,l.pos.z,1.1);for(const c of e.vehicles?.vehicles||[])(c.isPlayer&&e.player?.vehicle===c||c.mode!=="parked"||Math.abs(c.pos.z-i)<4)&&o(c.pos.x,c.pos.z,c.cfg.len);return r}function Zc(s,t){s.derailed=!0,s.derailTimer=17,s.speed=0,s.blockTimer=0,s.creepTimer=0,s.group.rotation.z=0,s.group.rotation.x=0,t.game?.audio?.trainHorn?.(),t.game?.effects?.sparksAt?.(s.group.position.x,1.2,s.z,18),t.game?.notify?.("Train derailed after the track stayed blocked","bad")}function ov(s,t,e,n){const i=s,a=t.railSwitch;if(i===t.rail2&&a){const l=i.track===2?.2:-.2;a.angle=Be.damp(a.angle,l,4.5,e),a.blade.rotation.y=a.angle,a.lens.material.color.setHex(i.track===2?16756768:3407735)}if(i.derailed){i.derailTimer-=e,i.group.rotation.z=Be.damp(i.group.rotation.z,.26,2.5,e),i.group.rotation.x=Be.damp(i.group.rotation.x,.1,2.5,e),i.speed=0,i.doorOpen=!1,i.derailTimer<=0&&(i.derailed=!1,i.group.rotation.z=0,i.group.rotation.x=0,i.blockTimer=0),Vr(i,e);return}i.group.position.z=i.z;const r=rv(i,t);if(i.blocked=r<82,i.dwell>0)i.dwell-=e,i.speed=Be.damp(i.speed,0,5,e),i.dwell<=0&&(i.departCool=4.5),i.doorOpen=!0;else if(!i.auto)i.doorOpen=!1,i.speed=Ot(i.speed,0,28);else if(i.express){i.doorOpen=!1;let l=i.maxSpeed;if(i.blocked&&(l=Math.min(l,Math.max(0,r*.34)),r<3.2&&(l=0,i.blockTimer+=e),i.blockTimer>10&&(i.creeping=!0,l=2.3,i.creepTimer+=e),i.creepTimer>4&&r<1.7)){Zc(i,t);return}const c=l<i.speed;i.speed=Be.damp(i.speed,l,c?2.5:.8,e)}else if(i.departCool>0)i.departCool-=e,i.doorOpen=!1,i.speed=Be.damp(i.speed,i.maxSpeed,1.4,e);else{const l=i.nextStationDistance();let c=i.maxSpeed;if(l<95&&(c=Math.min(c,Ot(l*.34,0,i.maxSpeed))),l<2.3&&i.speed<3){i.speed=0,i.dwell=6.5;let d=0,f=1e9;for(let u=0;u<i.stations.length;u++){const p=Math.abs(((i.stationProgress(i.stations[u])-i.progress+1200)%1200+600)%1200-600);p<f&&(f=p,d=u)}i.currentStation=d,i.progress=i.stationProgress(i.stations[d])%1200,i.doorOpen=!0,i.group.position.x=i.origin+i.dir*i.progress,Vr(i,e);return}if(i.blocked&&(c=Math.min(c,Math.max(0,r*.34)),r<3.2&&(c=0,i.blockTimer+=e),i.blockTimer>10&&(i.creeping=!0,c=2.3,i.creepTimer+=e),i.creepTimer>4&&r<1.7)){Zc(i,t);return}const h=c<i.speed;i.speed=Be.damp(i.speed,c,h?2.2:.9,e),i.speed>.35&&(i.currentStation=-1),i.doorOpen=!1}i.blocked||(i.blockTimer=0,i.creeping=!1,i.creepTimer=0),i.blocked&&i.speed<.55&&(i.hornTimer-=e,i.hornTimer<=0&&(i.hornTimer=2.5,t.game?.audio?.trainHorn?.()));let o=i.progress+i.speed*e;o>=i.length&&(o-=i.length,i.express&&(i.track=i.track===1?2:1,i.z=i.track===2?i.z2:i.z1),i.blockTimer=0,i.creeping=!1,i.creepTimer=0),i.progress=o,i.group.position.x=i.origin+i.dir*i.progress,i.group.rotation.y=i.dir>0?Math.PI/2:-Math.PI/2,i.speed>.01&&i.group.userData.wheels?.forEach(l=>l.rotation.x+=i.speed*e/.55),Vr(i,e)}function Vr(s,t){const e=s.doorOpen;for(const n of s.group.userData.doors||[])n.scale.z=Be.damp(n.scale.z,e?.06:1,5,t)}function Kc(s,t,e,n,i,a,r,o,l,c){for(let d=0;d<12;d++){const f=i+(a-i)*d/12,u=i+(a-i)*(d+1)/12,p=(f+u)*.5,x=Math.cos(p)*n,m=Math.sin(p)*n,g=n*Math.abs(u-f),M=new A(new P(l,o,g+.12),c);M.position.set(t+x,r,e+m),M.rotation.y=-p,M.castShadow=!0,s.add(M)}}function lv(s,t,e){const n=t/4;let i=s%t;return i<n?{x:-e+i,z:-e,angle:0}:(i-=n,i<n?{x:e,z:-e+i,angle:Math.PI/2}:(i-=n,i<n?{x:e-i,z:e,angle:Math.PI}:(i-=n,{x:-e,z:e-i,angle:-Math.PI/2})))}function cv(){const s=new Gt,t=new O({color:15660279,roughness:.26,metalness:.38}),e=new O({color:1522254,roughness:.07,metalness:.72}),n=new O({color:3123145,emissive:1400432,emissiveIntensity:.8,roughness:.35}),i=new O({color:2569276,roughness:.6,metalness:.45}),a=new O({color:3108744,roughness:.85}),r=[],o=[];for(let l=0;l<4;l++){const c=new Gt,h=new A(new P(2.9,2.15,9.7),t);h.position.y=1.45,h.castShadow=!0,c.add(h);const d=new A(new P(2.8,.55,9.4),i);d.position.y=.52,c.add(d);const f=new A(new P(2.7,1.45,1.6),t);f.position.set(0,1.1,5.35),c.add(f);const u=new A(new P(2.2,.75,.4),n);u.position.set(0,.82,6.1),c.add(u);const p=new A(new P(2.93,.2,9.6),n);p.position.y=1.28,c.add(p);const x=new A(new P(2.94,.82,8.4),e);x.position.y=1.98,c.add(x);for(let y=-3;y<=3;y++){const _=new A(new P(2.96,.86,.09),t);_.position.set(0,1.98,y*1.35),c.add(_)}const m=new A(new P(2.72,.2,9.2),t);m.position.y=2.63,c.add(m);const g=new A(new P(1.5,.24,2.6),i);if(g.position.set(0,2.78,-.4),c.add(g),l===0){const y=new A(new P(2.2,.95,.1),e);y.position.set(0,1.78,6.13),c.add(y);const _=new A(new P(1.4,.26,.08),new $t({color:9235199,toneMapped:!1}));_.position.set(0,2.42,6.12),c.add(_);for(const w of[-1,1]){const b=new A(new P(.34,.2,.1),new $t({color:16774352,toneMapped:!1}));b.position.set(w*1,.95,6.16),c.add(b)}}for(const y of[-1,1]){for(const w of[-2.9,2.9]){const b=new A(new P(.05,1.72,1.24),e);b.position.set(y*1.48,1.45,w),c.add(b),o.push(b)}for(let w=0;w<3;w++){const b=new A(new P(.62,.34,1.7),a);b.position.set(y*.78,1.15,-3+w*2.6),c.add(b)}const _=new A(new P(.05,.05,8.4),new O({color:14005317,roughness:.35,metalness:.7}));_.position.set(0,2.34,0),c.add(_)}const M=new A(new P(2.1,.42,2.2),i);M.position.y=.32,c.add(M),c.position.z=-l*10.6,s.add(c),r.push(c)}return s.userData.cars=r,s.userData.doors=o,s}function Jc(s="nova"){const t=new Gt,e=s==="express",n=new O({color:e?2899029:13949662,roughness:.42,metalness:.48}),i=new O({color:e?1581361:3226950,roughness:.5,metalness:.45}),a=new O({color:1778216,roughness:.55,metalness:.5}),r=new O({color:862003,roughness:.05,metalness:.8}),o=new O({color:e?14267482:2599361,roughness:.35,metalness:.45}),l=new O({color:e?3818328:3562348,roughness:.9}),c=new O({color:e?2831686:10134953,roughness:.55,metalness:.4}),h=[],d=[],f=[],u=16,p=2.1,x=(S,I)=>{const R=new A(new P(2,.5,2.9),a);R.position.set(0,.62,I),S.add(R);for(const z of[-.95,.95])for(const k of[-1,1]){const D=new A(new Ft(.52,.52,.27,14),new O({color:2237994,roughness:.9,metalness:.35}));D.rotation.z=Math.PI/2,D.position.set(k*1.29,.52,I+z),S.add(D),h.push(D)}const L=new A(new P(1.5,.24,.5),new O({color:5989223,roughness:.5,metalness:.5}));L.position.set(0,.9,I),S.add(L)},m=(S,I)=>{const R=I?1:-1,L=R*(u/2+.95),z=new A(new P(2.95,2.35,1.9),n);z.position.set(0,1.95,L),z.castShadow=!0,S.add(z);const k=new A(new Ce(1.48,16,12),n);k.scale.set(1,.82,.8),k.position.set(0,2.05,R*(u/2+1.7)),S.add(k);const D=new A(new P(2.55,1.24,.12),r);D.position.set(0,2.86,R*(u/2+1.62)),D.rotation.x=R*.34,S.add(D);const H=new A(new P(2.2,.52,.1),r);H.position.set(0,1.72,R*(u/2+1.91)),S.add(H);const X=new A(new P(1.55,.3,.06),new $t({color:e?16767362:9235199,toneMapped:!1}));X.position.set(0,3.55,R*(u/2+1.83)),S.add(X);for(const V of[-1,1]){const Z=new A(new Ci(.18,12),new $t({color:I?16774610:16724262,toneMapped:!1}));Z.position.set(V*1.02,1.48,R*(u/2+2.02)),I||(Z.rotation.y=Math.PI),S.add(Z)}const U=new A(new P(2.7,.42,1.5),a);U.position.set(0,.78,R*(u/2+1.55)),S.add(U);const K=new A(new P(.42,.32,.55),a);K.position.set(0,.95,R*(u/2+2.12)),S.add(K)},g=(S,I)=>{const R=new Gt,L=new A(new P(3.08,2.35,u),n);L.position.y=1.95,L.castShadow=!0,R.add(L);const z=new A(new Ft(1.54,1.54,u-.3,18,1),c);z.rotation.x=Math.PI/2,z.position.y=2.92,z.castShadow=!0,R.add(z);const k=new A(new P(3.13,1.06,u-1.25),r);k.position.y=2.62,R.add(k);for(const Z of[-5.6,-2.8,0,2.8,5.6]){const tt=new A(new P(3.16,1.1,.09),n);tt.position.set(0,2.62,Z),R.add(tt)}const D=new A(new P(3,.58,u-.5),a);D.position.y=.76,R.add(D);const H=new A(new P(3.14,.24,u-.15),o);H.position.y=1.3,R.add(H);const X=new A(new P(3.1,.1,u-.15),i);X.position.y=2.06,R.add(X);const U=new A(new P(1.55,.26,3.2),i);U.position.set(0,4.42,-1.2),R.add(U);const K=new A(new P(1.2,.16,1.6),a);K.position.set(0,4.4,3.4),R.add(K);for(const Z of[-1,1])for(const tt of[-u*.26,u*.26]){const vt=new Gt,zt=new A(new P(.06,2.02,1.2),i);vt.add(zt);const j=new A(new P(.04,1.22,.92),r);j.position.x=Z*.025,vt.add(j);const dt=new A(new P(.05,.16,.06),o);dt.position.set(Z*.06,0,.48),vt.add(dt),vt.position.set(Z*1.56,1.98,tt),R.add(vt),d.push(vt)}for(const Z of[-1,1])for(let tt=0;tt<4;tt++){const vt=new A(new P(.58,.34,1.7),l);vt.position.set(Z*.82,1.28,-u*.28+tt*2.45),R.add(vt);const zt=new A(new P(.1,.55,1.7),l);zt.position.set(Z*1.1,1.55,-u*.28+tt*2.45),R.add(zt)}const V=new A(new P(.05,.05,u-3),new O({color:14005317,roughness:.35,metalness:.7}));V.position.set(0,3.28,0),R.add(V),x(R,u/2-2.7),x(R,-u/2+2.7),I===0&&m(R,!0),I===3&&m(R,!1),R.position.z=S,t.add(R),f.push(R)};g(0,0),g(-18.1,1),g(-2*(u+p),2),g(-3*(u+p),3);const M=new Gt;M.position.set(0,4.45,-18.1+2.2);const y=new A(new Ft(.12,.16,.26,8),a);y.position.set(-.7,.12,0),M.add(y);const _=y.clone();_.position.x=.7,M.add(_);const w=new A(new P(.09,1.8,.09),a);w.position.set(0,.9,.4),w.rotation.x=-.5,M.add(w);const b=new A(new P(.07,1.5,.07),a);b.position.set(0,2.1,1),b.rotation.x=.6,M.add(b);const v=new A(new P(1.5,.09,.16),new O({color:6975604,roughness:.4,metalness:.7}));v.position.set(0,2.75,1.42),M.add(v),t.add(M);for(let S=1;S<4;S++){const I=new A(new P(2.35,2.3,.85),i);I.position.set(0,2.05,-18.1*S+(u+p)/2),t.add(I)}return t.userData.wheels=h,t.userData.doors=d,t.userData.cars=f,t.userData.pantograph=M,t.userData.trainLength=3*(u+p)+u,t}function hv(){const s=new Gt,t=new O({color:5003874,roughness:.62,metalness:.45}),e=new O({color:2238508,roughness:.85}),n=new O({color:2040615,roughness:.9}),i=[],a=[9058866,3102064,7040837,9075259],r=new Gt,o=new A(new P(3.2,3.1,13),t);o.position.y=2.2,r.add(o);const l=new A(new P(3,1.4,3),new O({color:2372928,roughness:.4,metalness:.5}));l.position.set(0,3.5,4.4),r.add(l);const c=new A(new P(3.22,.35,12.8),new O({color:14135871,roughness:.5}));c.position.y=1.4,r.add(c);for(const h of[-1,1]){const d=new A(new Ce(.2,8,6),new $t({color:16773312,toneMapped:!1}));d.position.set(h*1,2.4,6.6),r.add(d)}for(const h of[-4.4,4.4]){const d=new A(new P(2.2,.55,2.8),e);d.position.y=.65,d.position.z=h,r.add(d);for(const f of[-1,1])for(const u of[-.8,.8]){const p=new A(new Ft(.6,.6,.3,12),n);p.rotation.z=Math.PI/2,p.position.set(f*1.3,.6,h+u),r.add(p),i.push(p)}}s.add(r);for(let h=0;h<4;h++){const d=new Gt,f=new A(new P(3.2,.3,15),e);f.position.y=1.2,d.add(f);const u=new A(new P(3.32,2.9,14.2),new O({color:a[h%a.length],roughness:.75,metalness:.25}));u.position.y=2.8,u.castShadow=!0,d.add(u);for(let p=-6;p<=6;p+=1.2){const x=new A(new P(3.34,2.8,.06),new O({color:16777215,roughness:1,transparent:!0,opacity:.16}));x.position.set(0,2.8,p),d.add(x)}for(const p of[-5,5]){const x=new A(new P(2.1,.5,2.6),e);x.position.y=.65,x.position.z=p,d.add(x);for(const m of[-1,1])for(const g of[-.75,.75]){const M=new A(new Ft(.55,.55,.28,12),n);M.rotation.z=Math.PI/2,M.position.set(m*1.28,.55,p+g),d.add(M),i.push(M)}}d.position.z=-18-h*16.4,s.add(d)}return s.userData.wheels=i,s}function dv(){const s=new Gt,t=new O({color:15199728,roughness:.3,metalness:.35}),e=new O({color:1325645,roughness:.07,metalness:.7}),n=new O({color:13211450,roughness:.4,metalness:.3}),i=new O({color:2502454,roughness:.7}),a=[],r=[];for(let o=0;o<2;o++){const l=new Gt,c=new A(new P(2.7,2,9.4),t);c.position.y=1.45,l.add(c);const h=new A(new P(2.6,.4,9.1),i);h.position.y=.55,l.add(h);const d=new A(new P(2.74,.8,8.2),e);d.position.y=1.95,l.add(d);const f=new A(new P(2.76,.18,9.3),n);f.position.y=1.3,l.add(f);const u=new A(new P(2.55,.18,9),t);u.position.y=2.55,l.add(u);for(const p of[-1,1])for(const x of[-2.6,2.6]){const m=new A(new P(.05,1.55,1.2),e);m.position.set(p*1.38,1.4,x),l.add(m)}if(o===0){const p=new A(new P(2.3,.9,.1),e);p.position.set(0,1.85,4.72),l.add(p);for(const x of[-1,1]){const m=new A(new P(.3,.18,.1),new $t({color:16774352,toneMapped:!1}));m.position.set(x*.95,1,4.75),l.add(m)}}for(const p of[-3,3]){const x=new A(new P(1.8,.35,2.1),i);x.position.y=.45,x.position.z=p,l.add(x);for(const m of[-1,1]){const g=new A(new Ft(.4,.4,.24,10),new O({color:2040615,roughness:.9}));g.rotation.z=Math.PI/2,g.position.set(m*1.1,.42,p),l.add(g),a.push(g)}}l.position.z=-o*10.2,s.add(l),r.push(l)}return s.userData.wheels=a,s.userData.cars=r,s.userData.trainLength=21,s}function uv(s,t){const e=s.root,n=610,i=-60,a=new A(new ae(420,500),new O({color:4871742,roughness:1}));a.rotation.x=-Math.PI/2,a.position.set(n,.03,i),e.add(a);const r=new A(new ae(42,360),new O({color:2435116,roughness:.95}));r.rotation.x=-Math.PI/2,r.position.set(n+60,.08,i),e.add(r);const o=new $t({color:15263449});for(let L=-160;L<160;L+=20){const z=new A(new ae(1,10),o);z.rotation.x=-Math.PI/2,z.position.set(n+60,.1,i+L),e.add(z)}const l=new A(new ae(18,220),new O({color:3422268,roughness:.95}));l.rotation.x=-Math.PI/2,l.position.set(n+28,.07,i),e.add(l);const c=new A(new P(50,12,26),new O({color:9213596,roughness:.4,metalness:.3}));c.position.set(n-40,6,i+80),e.add(c);const h=new A(new P(46,7,26.4),new O({color:4026250,roughness:.1,metalness:.7,transparent:!0,opacity:.8}));h.position.set(n-40,6,i+80),e.add(h);const d=new A(new ae(18,4),new $t({map:Cn("NOVA AIR","#082b3a","#d8f5ff","INTERNATIONAL"),transparent:!0}));d.position.set(n-40,11,i+93.4),e.add(d);const f=new A(new Ft(2,3,22,10),new O({color:12107714,roughness:.7}));f.position.set(n-10,11,i+130),e.add(f);const u=new A(new Ft(4.5,3.5,4,12),new O({color:2903907,roughness:.1,metalness:.6}));u.position.set(n-10,24,i+130),e.add(u);const p=new A(new Ft(18,18,40,12,1,!1,0,Math.PI),new O({color:7305341,roughness:.7,metalness:.3}));p.rotation.z=Math.PI/2,p.rotation.y=Math.PI/2,p.position.set(n-55,.2,i-120),e.add(p);const x=Xr();x.position.set(n+60,.7,i-80),x.rotation.y=Math.PI,e.add(x),s.airportAirliner=x;const m=new $t({color:16773296,toneMapped:!1});for(const L of[-1,1])for(let z=i-175;z<=i+175;z+=18){const k=new A(new P(.4,.18,.4),m);k.position.set(n+60+L*22,.16,z),e.add(k)}for(let L=0;L<8;L++){const z=new A(new P(.7,.2,.7),new $t({color:16751930,toneMapped:!1}));z.position.set(n+60+(L%2?8:-8)*.7,.18,i+210+L*16),e.add(z)}s.airTraffic=[];const g=Xr();g.scale.setScalar(1.15),e.add(g);const M=[{x:n+60,z:i+980,y:150},{x:n+60,z:i+540,y:112},{x:n+60,z:i+300,y:66},{x:n+60,z:i+190,y:20},{x:n+60,z:i+150,y:1},{x:n+60,z:i-150,y:1},{x:n+60,z:i-230,y:14},{x:n+60,z:i-440,y:74},{x:n+230,z:i-610,y:128},{x:n+580,z:i-500,y:155},{x:n+790,z:i+60,y:165},{x:n+600,z:i+700,y:160},{x:n+210,z:i+960,y:152}];s.airTraffic.push(Wr(g,M,66,{bank:.5,pitchScale:.65}));const y=Xr();y.scale.setScalar(1.35),e.add(y);const _=[];for(let L=0;L<10;L++){const z=L/10*re;_.push({x:Math.cos(z)*720+120,z:Math.sin(z)*620+60,y:235+Math.sin(z*2)*12})}s.airTraffic.push(Wr(y,_,54,{bank:.28,pitchScale:.35}));const w=pi("helicopter",3163740,{});w.group.scale.setScalar(.92),e.add(w.group),s.airTraffic.push(fv(w,0,0,205,62,.13,16771256));const b=pi("helicopter",14278112,{});b.group.scale.setScalar(.8),e.add(b.group);const v=s.helipad?.x??150,S=s.helipad?.z??140,I=[{x:v,z:S,y:1.2},{x:v,z:S,y:34},{x:v+55,z:S+45,y:52},{x:v+125,z:S,y:58},{x:v+70,z:S-70,y:54},{x:v-40,z:S-45,y:44},{x:v-35,z:S+30,y:34},{x:v,z:S,y:1.2}],R=Wr(b.group,I,16,{bank:.2,pitchScale:.12});R.rotor=b.rotor,R.tailRotor=b.tailRotor,s.airTraffic.push(R),s.flyingPlane=s.airTraffic[1],s.addPOI("airport","Nova International Airport",n-40,i+80,40,{icon:"airport"}),s.addPOI("airport","Runway 09",n+60,i,50,{icon:"airport"})}function Wr(s,t,e,n={}){const i=[];let a=0;for(let o=0;o<t.length;o++){const l=t[o],c=t[(o+1)%t.length],h=c.x-l.x,d=c.z-l.z,f=c.y-l.y,u=Math.hypot(h,f,d);i.push({a:l,b:c,dx:h,dz:d,dy:f,len:u,heading:Math.atan2(h,d)}),a+=u}return{group:s,path:t,segments:i,speed:e,total:a,distance:Math.random()*a,heading:0,bank:0,update(o){this.distance=(this.distance+this.speed*o)%this.total;let l=this.distance,c=this.segments[0];for(const p of this.segments){if(l<=p.len){c=p;break}l-=p.len}const h=c.len>0?l/c.len:0;s.position.set(c.a.x+c.dx*h,c.a.y+c.dy*h,c.a.z+c.dz*h);const d=Math.hypot(c.dx,c.dz);d>.01&&(this.heading=Math.atan2(c.dx,c.dz));const f=d>.01?-Math.atan2(c.dy,d)*(n.pitchScale??.5):0,u=Be.clamp(Be.euclideanModulo(this.heading-s.rotation.y+Math.PI,re)-Math.PI,-.5,.5);this.bank=Be.damp(this.bank,-u*(n.bank??.4)*6,2.5,o),s.rotation.y=this.heading,s.rotation.x=Be.damp(s.rotation.x,Be.clamp(f,-.22,.22),2.5,o),s.rotation.z=this.bank,this.rotor&&(this.rotor.rotation.y+=o*38,this.tailRotor.rotation.x+=o*54)}}}function fv(s,t,e,n,i,a,r){const o=s.group,l=new Li(r,1.4,75,2);return l.position.set(0,-1.5,2),o.add(l),{group:o,angle:Math.random()*re,update(c,h){this.angle+=a*c;const d=t+Math.cos(this.angle)*n,f=e+Math.sin(this.angle)*n;o.position.set(d,i+Math.sin(h*.55+this.angle)*2.4,f),o.rotation.y=Math.atan2(-Math.sin(this.angle),Math.cos(this.angle)),o.rotation.z=-.1,o.rotation.x=.04,s.rotor.rotation.y+=c*42,s.tailRotor&&(s.tailRotor.rotation.x+=c*58),l.intensity=1+Math.sin(h*2.2)*.5}}}function Xr(){const s=new Gt,t=new O({color:15330800,roughness:.35,metalness:.25}),e=new O({color:1793418,roughness:.4}),n=new A(new Ft(2.2,2.2,30,14),t);n.rotation.x=Math.PI/2,n.position.y=2.8,s.add(n);const i=new A(new Ce(2.2,12,10),t);i.position.set(0,2.8,15),s.add(i);const a=new A(new Sn(2.1,5,12),t);a.rotation.x=Math.PI/2,a.position.set(0,2.8,-17),s.add(a);const r=new A(new Ft(2.23,2.23,22,14),e);r.rotation.x=Math.PI/2,r.position.y=2.6,s.add(r);const o=new A(new P(38,.4,6),t);o.position.set(0,2.7,1),s.add(o);const l=new A(new P(.4,6,5),t);l.position.set(0,6,-15),s.add(l);const c=new A(new Ft(1.1,1.1,4,10),e);c.rotation.x=Math.PI/2,c.position.set(-9,2.1,1),s.add(c);const h=c.clone();h.position.x=9,s.add(h);for(let d=0;d<14;d++){const f=new A(new P(.35,.45,.35),new $t({color:10475240}));f.position.set(1,3.1,12-d*1.7),s.add(f)}return s}function pv(s,t){const e=s.root;for(let u=0;u<260;u++){const p=t()*re,x=470+t()*220;let m=Math.cos(p)*x,g=Math.sin(p)*x;g>400||m>430&&g>-300&&g<200||s.tree(m,g,1.2+t()*1.4)}const n=new O({color:4149814,roughness:1,flatShading:!0});for(let u=0;u<18;u++){const p=t()*re,x=700+t()*200,m=Math.cos(p)*x,g=Math.sin(p)*x;if(g>420||s.isWater?.(m,g))continue;const M=new A(new Sn(70+t()*90,40+t()*70,7),n);M.position.set(m,10,g),e.add(M)}const i=220,a=new Ft(.4,.6,6,5),r=new Zs(4,0),o=new O({color:4863781,roughness:1}),l=new O({color:3099174,roughness:1,flatShading:!0}),c=new De(a,o,i),h=new De(r,l,i),d=new we;let f=0;for(let u=0;u<900&&f<i;u++){const p=t()*re,x=480+t()*240,m=Math.cos(p)*x,g=Math.sin(p)*x;if(g>400||m>440&&m<800&&g>-250&&g<200)continue;const M=.8+t()*1.2;d.position.set(m,3*M,g),d.scale.setScalar(M),d.rotation.set(0,t()*re,0),d.updateMatrix(),c.setMatrixAt(f,d.matrix),d.position.set(m,7*M,g),d.scale.set(M,M*(1+t()*.5),M),d.updateMatrix(),h.setMatrixAt(f,d.matrix),f++}e.add(c,h);for(let u=0;u<6;u++){const p=-520+u*40,x=-480,m=new A(new Ft(5,5,16,12),new O({color:9146256,roughness:.6,metalness:.4}));m.position.set(p,8,x),e.add(m)}}const We=9,fi=96,es=16,Ve=es/2,ie=s=>(s-4)*fi,Qc=s=>(s-4)*fi+fi/2,ke=(We-1)/2*fi,mv={"3,3":"park","5,5":"hospital","5,4":"police","2,3":"fire","3,4":"garage","4,5":"dealership","3,2":"apartment","2,5":"shop","6,3":"office","1,2":"industrial","7,5":"hotel"};class gv{constructor(t){this.scene=t,this.root=new Gt,this.root.name="city",t.add(this.root),this.colliders=[],this.spatial=new Xc(32),this.blocks=[],this.pois=[],this.parkingSpots=[],this.busStops=[],this.facadeMaterials=[],this.emissiveMats=[],this.signalNodes=[],this.seed=7781,this.hour=6.4,this.night=0,this.weather="clear",this.clouds=[],this.animated=[],this.lampGlow=null,this.sky=null,this.sun=null,this.hemi=null,this.ambient=null,this.water=null,this.monorail=null,this.rail=null,this.rail2=null,this.islandRail=null,this.militaryRail=null,this.freightRail=null,this.airTraffic=[],this.islands=[],this.bridges=[],this.islandRoads=[],this.highwayCars=[],this.factorySmoke=null,this.init()}init(){const t=pn(this.seed);this.mats=Ox(),this.makeMaterials(),Zx(this),this.buildGround(),this.buildRoads(),this.buildBlocks(t),Jx(this),Qx(this),ev(this,t),av(this),uv(this),pv(this,t),this.buildSignals(),this.buildParkingSpots(t),this.spatial=new Xc(32);for(const e of this.colliders)this.spatial.insert(e,e.minX,e.minZ,e.maxX,e.maxZ);this.updateLighting(6.4,"clear",0),this.mergeStatic()}mergeStatic(){const t=this.root;t.updateMatrixWorld(!0);const e=new ye().copy(t.matrixWorld).invert(),n=new Set,i=o=>{o&&o.traverse(l=>n.add(l))};i(this.water),i(this.lampGlow),i(this.smokeParticles),i(this.fireflyPoints),this.monorail&&i(this.monorail.group),this.rail&&i(this.rail.group),this.rail2&&i(this.rail2.group),this.islandRail&&i(this.islandRail.group),this.militaryRail&&i(this.militaryRail.group),this.freightRail&&i(this.freightRail.group),this.radar&&i(this.radar),this.militaryFlag&&i(this.militaryFlag),this.flyingPlane&&i(this.flyingPlane.group);for(const o of this.airTraffic)i(o.group);this.lighthouse&&i(this.lighthouse.group);for(const o of this.highwayCars)i(o);for(const o of this.animated)o.mesh&&i(o.mesh);const a=new Map,r=o=>{let l=o;for(;l;){if(n.has(l)||l.userData?.noMerge)return!0;l=l.parent}return!1};t.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.isSkinnedMesh||o.isPoints||o.isSprite||r(o)||Array.isArray(o.material))return;const l=o.material;if(!l||l.isShaderMaterial||l.transparent||l.opacity<1||l.depthWrite===!1||!(l.isMeshStandardMaterial||l.isMeshBasicMaterial||l.isMeshLambertMaterial||l.isMeshPhongMaterial))return;const c=o.geometry;if(!c||!c.attributes.position||!c.attributes.normal||!c.attributes.uv||c.morphAttributes&&Object.keys(c.morphAttributes).length)return;const h=l.uuid;let d=a.get(h);d||(d={material:l,geos:[],meshes:[],cast:!1,receive:!1},a.set(h,d));const f=c.index?c.toNonIndexed():c.clone();for(const u of Object.keys(f.attributes))u!=="position"&&u!=="normal"&&u!=="uv"&&f.deleteAttribute(u);f.clearGroups(),f.applyMatrix4(new ye().multiplyMatrices(e,o.matrixWorld)),d.geos.push(f),d.meshes.push(o),d.cast=d.cast||o.castShadow,d.receive=d.receive||o.receiveShadow});for(const o of a.values()){if(o.meshes.length<2){for(const h of o.geos)h.dispose();continue}const l=rd(o.geos,!1);for(const h of o.geos)h.dispose();if(!l)continue;const c=new A(l,o.material);c.name=`merged-${o.material.uuid}`,c.castShadow=o.cast,c.receiveShadow=o.receive,t.add(c);for(const h of o.meshes)h.parent?.remove(h)}this.mergedStaticMeshes=t.children.filter(o=>o.name.startsWith("merged-")).length}makeMaterials(){this.roofMat=new O({color:3949128,roughness:.94}),this.roofMatDark=new O({color:2501425,roughness:.95}),this.glassMat=new O({color:1516336,roughness:.22,metalness:.65,emissive:660768,emissiveIntensity:.4}),this.metalMat=new O({color:5330780,roughness:.7,metalness:.5}),this.concreteMat=new O({color:7631983,roughness:.96}),this.whiteMat=new O({color:14474452,roughness:.8}),this.darkMat=new O({color:1777702,roughness:.9}),this.woodMat=new O({color:6966066,roughness:.9}),this.grassMat=this.mats.grass,this.crownMat=new O({color:10480127,emissive:6021375,emissiveIntensity:1.4,roughness:.4}),this.warmMat=new O({color:16765593,emissive:16757847,emissiveIntensity:1.6,roughness:.5}),this.redMat=new O({color:12728890,roughness:.7}),this.tsMat=new O({color:4343885,roughness:.8,metalness:.4}),this.palettes={downtown:this.buildPalette([["#5d7285","#182430","#ffd9a0","glass"],["#7c8996","#1a2a3a","#cfe9ff","glass"],["#49525f","#111b26","#ffcf8c","glass"],["#8a8e93","#1e2b38","#d7ecff","stone"]]),midrise:this.buildPalette([["#9b7c63","#27313b","#ffd7a1","brick"],["#b2a08a","#2a333c","#ffe0b0","stone"],["#7e6c5c","#1d2731","#ffcf94","brick"],["#a7a8a3","#232f3a","#e9f4ff","stone"]]),suburb:this.buildPalette([["#d8d1c2","#26313c","#ffdca6","stone"],["#bdc7c0","#22303a","#ffe3b5","stone"],["#ccb6a3","#2a333c","#ffd49b","stone"],["#e0ddd4","#202b36","#ffe9c4","stone"]]),industrial:this.buildPalette([["#696e71","#1a2127","#ffd18a","stone"],["#7b7165","#20262b","#ffc77e","stone"],["#5d666b","#161d23","#cfe4ff","stone"]])}}buildPalette(t){return t.map(([e,n,i,a],r)=>{const{diffuse:o,emissive:l}=Dx(e,n,i,this.seed+r*31+e.length*7,a),c=new O({map:o,emissiveMap:l,emissive:16777215,emissiveIntensity:.02,roughness:a==="glass"?.34:.85,metalness:a==="glass"?.52:.06});return this.facadeMaterials.push(c),c})}buildGround(){const t=new A(new ae(2600,2600),new O({color:3753263,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-.08,t.receiveShadow=!0,this.root.add(t),this.groundBase=t}roadPlaneGeometry(){if(!this._roadGeo){const t=new ae(es,840);t.rotateX(-Math.PI/2),this._roadGeo=t}return this._roadGeo}buildRoads(){const t=this.mats.asphalt,e=this.roadPlaneGeometry();this.roadMeshes=[];for(let m=0;m<We;m++){const g=ie(m),M=new A(e,t);M.position.set(g,.02,0),M.receiveShadow=!0,this.root.add(M),this.roadMeshes.push(M);const y=new A(e,t);y.rotation.y=Math.PI/2,y.position.set(0,.021,g),y.receiveShadow=!0,this.root.add(y),this.roadMeshes.push(y)}const n=new ae(es,es);n.rotateX(-Math.PI/2);const i=new O({color:2303531,roughness:.93});for(let m=0;m<We;m++)for(let g=0;g<We;g++){const M=new A(n,i);M.position.set(ie(m),.035,ie(g)),this.root.add(M)}const a=new P(.16,.012,3.2),r=new O({color:14276292,roughness:.8}),o=[];for(let m=0;m<We;m++)for(let g=-ke-10;g<ke+10;g+=8)Math.abs(((g+4+48)%96+96)%96-48)<10||(o.push([ie(m),g,0]),o.push([g,ie(m),Math.PI/2]));const l=new De(a,r,o.length),c=new we;o.forEach(([m,g,M],y)=>{c.position.set(m,.055,g),c.rotation.set(0,M,0),c.updateMatrix(),l.setMatrixAt(y,c.matrix)}),l.instanceMatrix.needsUpdate=!0,this.root.add(l);const h=new P(.72,.014,3.5),d=new O({color:15329247,roughness:.75}),f=[];for(let m=0;m<We;m++)for(let g=0;g<We;g++){const M=ie(m),y=ie(g);for(let _=-3;_<=3;_++)f.push([M+_*1.1,y-Ve-2.1,0]),f.push([M+_*1.1,y+Ve+2.1,0]),f.push([M-Ve-2.1,y+_*1.1,Math.PI/2]),f.push([M+Ve+2.1,y+_*1.1,Math.PI/2])}const u=new De(h,d,f.length);f.forEach(([m,g,M],y)=>{c.position.set(m,.06,g),c.rotation.set(0,M,0),c.updateMatrix(),u.setMatrixAt(y,c.matrix)}),this.root.add(u);const p=new ae(.14,840);p.rotateX(-Math.PI/2);const x=new O({color:13223607,roughness:.85});for(let m=0;m<We;m++)for(const g of[-1,1]){const M=new A(p,x);M.position.set(ie(m)+g*(Ve-.45),.05,0),this.root.add(M);const y=new A(p,x);y.rotation.y=Math.PI/2,y.position.set(0,.05,ie(m)+g*(Ve-.45)),this.root.add(y)}}buildBlocks(t){const e=new ae(fi-es,fi-es);e.rotateX(-Math.PI/2);const n=this.mats.sidewalk.clone();n.map=this.mats.sidewalk.map.clone(),n.map.repeat.set(12,12),n.map.needsUpdate=!0,this.sidewalkMat=n,this.sidewalkMesh=new De(e,n,64);const i=new we;let a=0;const r=this.mats.lot.clone();r.map=this.mats.lot.map.clone(),r.map.repeat.set(9,9);const o=this.mats.grass.clone();o.map=this.mats.grass.map.clone(),o.map.repeat.set(9,9);const l={concrete:[],grass:[]},c=new P(68,.16,.28),h=[];for(let u=0;u<8;u++)for(let p=0;p<8;p++){const x=Qc(u),m=Qc(p),g=mv[`${u},${p}`]||null,M=this.districtForBlock(u,p,g),y={bi:u,bj:p,x,z:m,district:M,special:g};this.blocks.push(y),i.position.set(x,.1,m),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.updateMatrix(),this.sidewalkMesh.setMatrixAt(a++,i.matrix),(["suburb","park","residential"].includes(M)||g==="park"?l.grass:l.concrete).push([x,m]),h.push([x,m-34,0],[x,m+34,0],[x-34,m,Math.PI/2],[x+34,m,Math.PI/2]),this.buildBlockContent(y,t)}this.root.add(this.sidewalkMesh),this.lotMeshes=[];for(const[u,p]of Object.entries(l)){if(!p.length)continue;const x=new ae(68,68);x.rotateX(-Math.PI/2);const m=new De(x,u==="grass"?o:r,p.length);p.forEach(([g,M],y)=>{i.position.set(g,.15,M),i.updateMatrix(),m.setMatrixAt(y,i.matrix)}),m.receiveShadow=!0,this.root.add(m),this.lotMeshes.push(m)}const d=new O({color:9408394,roughness:.95}),f=new De(c,d,h.length);h.forEach(([u,p,x],m)=>{i.position.set(u,.18,p),i.rotation.set(0,x,0),i.updateMatrix(),f.setMatrixAt(m,i.matrix)}),this.root.add(f)}districtForBlock(t,e,n){return n==="park"?"park":n==="suburb"?"suburb":n==="industrial"?"industrial":n==="airport"?"airport":e<=1?"industrial":t>=6&&e>=2&&e<=5?"suburb":e>=6?"waterfront":t<=2&&e>=3?"residential":t>=3&&t<=5&&e>=2&&e<=5?"downtown":"midtown"}buildBlockContent(t,e){const{bi:n,bj:i,x:a,z:r,district:o,special:l}=t;if(l==="park"){this.buildPark(t,e);return}if(l==="hospital"){this.buildHospital(t);return}if(l==="police"){this.buildPolice(t);return}if(l==="fire"){this.buildFireStation(t);return}if(l==="garage"){this.buildGarage(t);return}if(l==="dealership"){this.buildDealership(t);return}if(l==="apartment"){this.buildApartment(t);return}if(l==="shop"){this.buildShop(t);return}if(l==="office"){this.buildOffice(t);return}if(l==="hotel"){this.buildHotel(t);return}if(l==="industrial"){this.buildFactory(t,e);return}o==="downtown"?this.buildDowntown(t,e):o==="industrial"?this.buildIndustrial(t,e):o==="suburb"?this.buildSuburb(t,e):o==="waterfront"?this.buildWaterfront(t,e):this.buildMidrise(t,e)}buildingMaterial(t,e=0){return this.palettes[t][e%this.palettes[t].length]}facadeGeometry(t,e,n){const i=new P(t,e,n),a=i.attributes.uv,r=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let o=0;o<6;o++){const l=r[o][0]/12,c=r[o][1]/13;for(let h=0;h<4;h++){const d=o*4+h;a.setXY(d,a.getX(d)*l,a.getY(d)*c)}}return a.needsUpdate=!0,i}addBuilding(t,e,n,i,a,r,o,l={}){const c=this.buildingMaterial(r,o),h=l.roofMat||this.roofMat,d=this.facadeGeometry(n,a,i),f=new A(d,[c,c,h,h,c,c]);f.position.set(t,a/2+.15+(l.base||0),e),f.castShadow=a>14,f.receiveShadow=!0,this.root.add(f);const u={minX:t-n/2,maxX:t+n/2,minZ:e-i/2,maxZ:e+i/2,height:a,type:"building",mesh:f};if(this.colliders.push(u),l.extraColliders)for(const p of l.extraColliders)this.colliders.push(p);return{mesh:f,collider:u}}addRoofDetails(t,e,n,i,a,r,o="normal"){const l=new Gt;l.position.set(t,a,e);const c=1+Math.floor(r()*3);for(let h=0;h<c;h++){const d=1.4+r()*2.6,f=.7+r()*1.5,u=1.4+r()*2.4,p=new A(new P(d,f,u),r()>.5?this.metalMat:this.concreteMat);p.position.set((r()-.5)*(n-d-2),f/2+.15,(r()-.5)*(i-u-2)),p.castShadow=!0,l.add(p)}if(o==="tower"){const h=new A(new Ft(.1,.22,8+r()*12,5),this.metalMat);h.position.y=4+r()*4,l.add(h);const d=new A(new Ce(.26,6,6),this.warmMat);d.position.y=h.position.y+h.geometry.parameters.height/2,l.add(d),this.animated.push({type:"beacon",mesh:d,phase:r()*6})}if(o==="tower"&&r()>.5){const h=new A(new P(n*.92,.45,i*.92),this.crownMat);h.position.y=.35,l.add(h)}if(r()>.55){const h=new A(new P(1.8,.8,1.4),this.whiteMat);h.position.set((r()-.5)*n*.5,.55,(r()-.5)*i*.5),l.add(h)}return this.root.add(l),l}buildDowntown(t,e){const{x:n,z:i}=t,a=34+e()*26,r=34+e()*26,o=58+e()*120,l=(e()-.5)*(66-a),c=(e()-.5)*(66-r),h=n+l,d=i+c,f=Math.floor(e()*4),{mesh:u}=this.addBuilding(h,d,a,r,o,"downtown",f,{roofMat:this.roofMatDark}),p=7+e()*9;if(e()>.35){const x=this.addBuilding(h,d,a+8,r+8,p,"downtown",(f+1)%4,{roofMat:this.roofMat});x.mesh.castShadow=!0}if(o>100&&e()>.35){const x=o*(.18+e()*.12);this.addBuilding(h,d,a*.72,r*.72,x,"downtown",(f+2)%4,{base:o,roofMat:this.roofMatDark})}if(this.addRoofDetails(h,d,a,r,o+.2,e,o>70?"tower":"normal"),f<2){const x=new O({color:10466244,roughness:.4,metalness:.6});for(let m=-2;m<=2;m++){const g=new A(new P(.28,o*.94,.5),x);g.position.set(h+m*a/6,o/2+.2,d+r/2+.3),this.root.add(g)}}if(o>125){const x=new A(new ae(18,5),new $t({map:cd("NOVA","ABOVE ALL","#0a2d4d","#1b6d91"),transparent:!1}));x.position.set(h,o*.75,d+r/2+.3),this.root.add(x)}}buildMidrise(t,e){const{x:n,z:i}=t,a=e()>.5?2:1;for(let r=0;r<a;r++){const o=20+e()*16,l=18+e()*14,c=12+e()*24,h=n+(a===2?(r-.5)*30:(e()-.5)*24),d=i+(e()-.5)*(66-l-4);this.addBuilding(h,d,o,l,c,"midrise",Math.floor(e()*4)),this.addRoofDetails(h,d,o,l,c+.2,e),e()>.6&&this.addBalconies(h,d,o,l,c,e)}}addBalconies(t,e,n,i,a,r){const o=new O({color:5987160,roughness:.9}),l=Math.floor((a-4)/4),c=new P(n*.55,.18,.9);for(let h=0;h<l;h++){const d=4.5+h*4;if(d>a-1)break;const f=new A(c,o);f.position.set(t,d,e+i/2+.45),this.root.add(f);const u=new A(new P(n*.55,.7,.06),this.glassMat);u.position.set(t,d+.45,e+i/2+.88),this.root.add(u)}}buildResidential(t,e){this.buildMidrise(t,e)}buildSuburb(t,e){const{x:n,z:i}=t;for(let a=0;a<2;a++)for(let r=0;r<2;r++){const o=n+(a-.5)*31,l=i+(r-.5)*31,c=12+e()*4,h=10+e()*4,d=3.6+e()*2.4,f=Math.floor(e()*4);this.addBuilding(o,l,c,h,d,"suburb",f);const u=new A(new Sn(1,1,4),new O({color:[5980727,4868682,7028022,4541256][f],roughness:.92}));u.rotation.y=Math.PI/4,u.scale.set(c*.78,2.6+e()*1.2,h*.78),u.position.set(o,d+1.45,l),u.castShadow=!0,this.root.add(u);const p=new A(new P(3.2,.22,2.2),this.woodMat);p.position.set(o+(e()-.5)*2,.55,l+h/2+.9),this.root.add(p);const x=new A(new ae(10,8),new O({color:4283698,roughness:1}));x.rotation.x=-Math.PI/2,x.position.set(o+8,.17,l+7),this.root.add(x);const m=this.woodMat;for(let M=0;M<5;M++){const y=new A(new P(.16,.9,.16),m);y.position.set(o+3,.6,l+11+M*1.4),this.root.add(y)}const g=new A(new ae(4,12),new O({color:7828846,roughness:1}));g.rotation.x=-Math.PI/2,g.position.set(o+5,.16,l+8),this.root.add(g),e()>.6&&this.tree(o+10,l+9,.8+e()*.4)}}buildIndustrial(t,e){const{x:n,z:i}=t,a=44+e()*12,r=30+e()*16,o=8+e()*6,l=n+(e()-.5)*8,c=i+(e()-.5)*8;this.addBuilding(l,c,a,r,o,"industrial",Math.floor(e()*3),{roofMat:this.roofMatDark}),this.addRoofDetails(l,c,a,r,o+.2,e);const h=new A(new P(a*.7,1.4,3.2),this.concreteMat);h.position.set(l,.85,c+r/2+1.6),h.castShadow=!0,this.root.add(h);const d=[9321266,3039098,8153646,3500874,8014386];for(let f=0;f<4+Math.floor(e()*5);f++){const m=new A(new P(6,2.6,2.5),new O({color:_e(d),roughness:.8,metalness:.3}));m.position.set(n-24+e()*48,.6+(e()>.8?2.6:0),i+24+e()*8),m.rotation.y=e()>.5?0:Math.PI/2,m.castShadow=!0,this.root.add(m)}}buildWaterfront(t,e){const{x:n,z:i}=t,a=22+e()*18,r=24+e()*16,o=22+e()*44,l=n+(e()-.5)*18,c=i+(e()-.5)*10;this.addBuilding(l,c,a,r,o,"midrise",Math.floor(e()*4)),this.addRoofDetails(l,c,a,r,o+.2,e,o>50?"tower":"normal"),this.addBalconies(l,c,a,r,o,e)}buildPark(t,e){const{x:n,z:i}=t;t.isPark=!0;const a=new O({color:10129274,roughness:1}),r=new A(new ae(6,68),a);r.rotation.x=-Math.PI/2,r.position.set(n,.17,i),this.root.add(r);const o=new A(new ae(68,6),a);o.rotation.x=-Math.PI/2,o.position.set(n,.171,i),this.root.add(o);const l=new A(new Ci(11,32),new O({color:1789283,roughness:.15,metalness:.5,transparent:!0,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.set(n-14,.18,i+15),this.root.add(l);const c=new Gt;c.position.set(n+15,.2,i-14);const h=new A(new Ft(4.2,4.6,.8,24),this.concreteMat);h.position.y=.4,c.add(h);const d=new A(new Ft(3.7,3.7,.3,24),new O({color:4891588,roughness:.12,metalness:.5}));d.position.y=.82,c.add(d);const f=new A(new Ft(.4,.6,2.4,12),this.whiteMat);f.position.y=1.9,c.add(f),this.root.add(c);for(let x=0;x<12;x++){const m=e()*re,g=8+e()*25;Math.abs(Math.cos(m)*g)<5||Math.abs(Math.sin(m)*g)<5||this.tree(n+Math.cos(m)*g,i+Math.sin(m)*g,.9+e()*.7)}for(let x=0;x<7;x++){const m=e()*re,g=10+e()*18;this.bench(n+Math.cos(m)*g,i+Math.sin(m)*g,-m+Math.PI/2)}const u=new A(new P(12,.7,7),this.woodMat);u.position.set(n+20,.55,i+22),u.castShadow=!0,this.root.add(u);const p=new A(new P(12,4,.4),this.darkMat);p.position.set(n+20,2.6,i+25),this.root.add(p),this.addPOI("park","Aurora Park",n,i,30,{icon:"park"})}tree(t,e,n=1){this._treeGeo||(this._treeGeo={trunk:new Ft(.22,.32,3.2,6),leaves:new Zs(2.1,0)},this._treeMat=new O({color:3099174,roughness:1}),this._trunkMat=new O({color:4863781,roughness:1}),this._trees=[]),this._trees.push({x:t,z:e,scale:n})}bench(t,e,n){this._benches||(this._benches=[]),this._benches.push({x:t,z:e,rot:n})}addPOI(t,e,n,i,a,r={}){const o={type:t,name:e,x:n,z:i,radius:a,...r};return this.pois.push(o),o}addSign(t,e,n,i,a,r="#0b3a5a"){const o=new $t({map:Cn(t,r,"#eaf6ff"),transparent:!0}),l=new A(new ae(6,3),o);return l.position.set(e,n,i),l.rotation.y=a,this.root.add(l),l}buildHospital(t){const{x:e,z:n}=t;this.addBuilding(e,n,38,30,28,"midrise",3),this.addRoofDetails(e,n,38,30,28.2,pn(99));const i=new $t({color:16735084}),a=new A(new P(4,12,.3),i);a.position.set(e,22,n+15.2),this.root.add(a);const r=new A(new P(12,4,.3),i);r.position.set(e,22,n+15.2),this.root.add(r),this.addSign("HOSPITAL",e,13,n+15.3,0,"#5c1020");const o=new A(new Ft(9,9,.2,24),new O({color:3817282,roughness:.9}));o.position.set(e+24,.25,n+20),this.root.add(o);const l=new $t({color:15265522}),c=new A(new P(1,.03,5),l);c.position.set(e+24,.38,n+20),this.root.add(c);const h=new A(new P(3,.03,1),l);h.position.set(e+24,.38,n+20),this.root.add(h),this.helipad=new N(e+24,.4,n+20),this.addPOI("hospital","Nova General Hospital",e,n,32,{icon:"hospital"})}buildPolice(t){const{x:e,z:n}=t;this.addBuilding(e,n,32,26,18,"midrise",3,{roofMat:this.roofMatDark}),this.addRoofDetails(e,n,32,26,18.2,pn(33)),this.addSign("POLICE",e,10.5,n+13.2,0,"#0b2a5a");const i=new A(new ae(26,12),new O({color:2895924,roughness:1}));i.rotation.x=-Math.PI/2,i.position.set(e,.17,n+20),this.root.add(i),this.addPOI("police","NCPD Central Precinct",e,n,30,{icon:"police"})}buildFireStation(t){const{x:e,z:n}=t;this.addBuilding(e,n,30,24,11,"industrial",0,{roofMat:this.roofMatDark}),this.addSign("FIRE DEPT",e,8,n+12.2,0,"#5c1015");const i=new O({color:8003108,roughness:.8});for(let a=-1;a<=1;a++){const r=new A(new P(7,7,.3),i);r.position.set(e+a*8,3.7,n+12.2),this.root.add(r)}this.addPOI("fire","Nova Fire Station 3",e,n,28,{icon:"fire"})}buildGarage(t){const{x:e,z:n}=t;this.addBuilding(e,n,30,24,9,"industrial",2,{roofMat:this.roofMatDark}),this.addSign("AUTO GARAGE",e,6.8,n+12.2,0,"#4a2b05"),this.addPOI("garage","Apex Auto Garage",e,n-2,22,{icon:"garage"})}buildDealership(t){const{x:e,z:n}=t;this.addBuilding(e-8,n,34,22,8,"downtown",1,{roofMat:this.roofMatDark}),this.addSign("NOVA MOTORS",e-8,10,n+11.5,0,"#1d4e7a");const i=new A(new ae(60,22),new O({color:3159098,roughness:.9}));i.rotation.x=-Math.PI/2,i.position.set(e,.17,n+24),this.root.add(i),this.addPOI("dealership","Nova Motors Dealership",e-8,n+8,22,{icon:"dealer"})}buildApartment(t){const{x:e,z:n}=t;this.addBuilding(e,n-4,34,26,26,"midrise",0),this.addRoofDetails(e,n-4,34,26,26.2,pn(17)),this.addBalconies(e,n-4,34,26,26,pn(19)),this.addSign("THE HALE",e,5.4,n+10.5,0,"#2b251e"),this.addPOI("apartment","The Hale Apartments",e,n+12,18,{icon:"home"})}buildShop(t){const{x:e,z:n}=t;this.addBuilding(e,n,28,20,7,"midrise",2),this.addSign("MARKET",e,5,n+10.2,0,"#1b4a39"),this.addPOI("shop","Corner Market",e,n+12,16,{icon:"shop"})}buildOffice(t){const{x:e,z:n}=t;this.addBuilding(e,n,40,30,42,"downtown",0),this.addBuilding(e,n,28,20,58,"downtown",1,{base:42}),this.addRoofDetails(e,n,28,20,100.2,pn(5),"tower"),this.addPOI("office","Meridian Tower",e,n,20,{icon:"office"})}buildHotel(t){const{x:e,z:n}=t;this.addBuilding(e,n,36,28,46,"midrise",3),this.addBalconies(e,n,36,28,46,pn(21)),this.addRoofDetails(e,n,36,28,46.2,pn(22),"tower"),this.addSign("HOTEL AURORA",e,5.5,n+14.5,0,"#2b3c52"),this.addPOI("hotel","Hotel Aurora",e,n+16,18,{icon:"hotel"})}buildFactory(t,e){const{x:n,z:i}=t;this.addBuilding(n,i,52,34,15,"industrial",2,{roofMat:this.roofMatDark});for(let a=-1;a<=1;a+=2){const r=new A(new Ft(1.1,1.5,34,12),new O({color:9210499,roughness:.95}));r.position.set(n+a*17,17,i-10),r.castShadow=!0,this.root.add(r)}this.factorySmokePos=new N(n,34,i-10),this.addPOI("factory","Northgate Works",n,i,24,{icon:"factory"})}buildSignals(){const t=[];for(let u=0;u<We;u++)for(let p=0;p<We;p++){const x=Math.abs(u-4)<=3&&Math.abs(p-4)<=3;t.push({i:u,j:p,x:ie(u),z:ie(p),hasLights:x})}this.nodes=t,this.nodeGrid=[];for(let u=0;u<We;u++){this.nodeGrid[u]=[];for(let p=0;p<We;p++)this.nodeGrid[u][p]=t.find(x=>x.i===u&&x.j===p)}const e=new Ft(.12,.16,4.8,6),n=new O({color:3817284,roughness:.8,metalness:.4}),i=new Ce(.19,8,6),a=new $t({color:16777215}),r=[],o=[],l=new P(2.2,.12,.12),c=[];this.signalLampData=[];for(const u of t){if(!u.hasLights)continue;const p=[[-1,-1],[1,-1],[1,1],[-1,1]];for(const[x,m]of p){const g=u.x+x*(Ve+1.3),M=u.z+m*(Ve+1.3);o.push([g,2.4,M]),c.push([g+(x>0?-1:1)*1.1,4.35,M,x>0?0:Math.PI]);for(let y=0;y<3;y++){const _=4.75-y*.34;r.push([g+(x>0?-1.05:1.05),_,M]),this.signalLampData.push({node:u,axis:m===0?"x":"z",slot:y,index:r.length-1})}}}const h=new De(e,n,o.length),d=new we;o.forEach(([u,p,x],m)=>{d.position.set(u,p,x),d.updateMatrix(),h.setMatrixAt(m,d.matrix)}),this.root.add(h);const f=new De(l,n,c.length);c.forEach(([u,p,x,m],g)=>{d.position.set(u,p,x),d.rotation.set(0,m,0),d.updateMatrix(),f.setMatrixAt(g,d.matrix)}),this.root.add(f),this.signalLampMesh=new De(i,a,r.length),this.signalLampMesh.instanceColor=new Do(new Float32Array(r.length*3),3),r.forEach(([u,p,x],m)=>{d.position.set(u,p,x),d.rotation.set(0,0,0),d.updateMatrix(),this.signalLampMesh.setMatrixAt(m,d.matrix),this.signalLampMesh.setColorAt(m,new Kt(1118481))}),this.root.add(this.signalLampMesh),this.signalNodes=t}signalState(t,e,n){if(!t.hasLights)return"green";const i=(n+(t.i*1.7+t.j*2.3))%26;return e==="x"?i<9?"green":i<11?"yellow":"red":i<12?"red":i<22?"green":i<24?"yellow":"red"}updateSignals(t){const e={red:new Kt(16722750),yellow:new Kt(16757035),green:new Kt(2883482),off:new Kt(1053462)};for(const n of this.signalLampData){const i=this.signalState(n.node,n.axis,t),a=i==="red"?0:i==="yellow"?1:2;let r;n.slot===a?r=e[i]:r=e.off,this.signalLampMesh.setColorAt(n.index,r)}this.signalLampMesh.instanceColor.needsUpdate=!0}buildParkingSpots(t){for(let e=0;e<We;e++)for(let n=0;n<8;n++){const i=ie(n)+18+t()*50;this.parkingSpots.push({x:ie(e)+Ve+2.8,z:i,heading:-Math.PI/2}),this.parkingSpots.push({x:ie(e)-Ve-2.8,z:i,heading:Math.PI/2});const a=ie(n)+18+t()*50;this.parkingSpots.push({x:a,z:ie(e)+Ve+2.8,heading:Math.PI}),this.parkingSpots.push({x:a,z:ie(e)-Ve-2.8,heading:0})}}finalizeProps(){if(this._trees&&this._trees.length){const t=this._trees.length,e=new De(this._treeGeo.trunk,this._trunkMat,t),n=new De(this._treeGeo.leaves,this._treeMat,t),i=new we;this._trees.forEach((a,r)=>{i.position.set(a.x,1.6*a.scale+.15,a.z),i.scale.setScalar(a.scale),i.updateMatrix(),e.setMatrixAt(r,i.matrix),i.position.set(a.x,4.3*a.scale+.15,a.z),i.scale.set(a.scale*(1+Math.random()*.3),a.scale*(1+Math.random()*.4),a.scale*(1+Math.random()*.3)),i.rotation.set(Math.random(),Math.random()*3,Math.random()),i.updateMatrix(),n.setMatrixAt(r,i.matrix)}),e.castShadow=!0,n.castShadow=!0,this.root.add(e,n)}if(this._benches&&this._benches.length){const t=new P(2.2,.16,.65),e=new P(2.2,.5,.12),n=new P(.14,.5,.55),i=new De(t,this.woodMat,this._benches.length),a=new De(e,this.woodMat,this._benches.length),r=new De(n,this.metalMat,this._benches.length*2),o=new we;this._benches.forEach((l,c)=>{o.position.set(l.x,.72,l.z),o.rotation.set(0,l.rot,0),o.updateMatrix(),i.setMatrixAt(c,o.matrix),o.position.set(l.x-Math.sin(l.rot)*.26,1,l.z-Math.cos(l.rot)*.26),o.updateMatrix(),a.setMatrixAt(c,o.matrix),o.position.set(l.x-Math.cos(l.rot)*.8,.38,l.z+Math.sin(l.rot)*.8),o.updateMatrix(),r.setMatrixAt(c*2,o.matrix),o.position.set(l.x+Math.cos(l.rot)*.8,.38,l.z+Math.sin(l.rot)*.8),o.updateMatrix(),r.setMatrixAt(c*2+1,o.matrix)}),this.root.add(i,a,r)}}updateLighting(t,e,n){this.hour=t;const i=Math.max(0,Math.sin((t-6)/24*re)),a=Ot(1-Math.max(0,Math.sin((t-5.5)/24*re))*2.2,0,1);this.night=a,this.weather=e;const r=e==="storm"?1:e==="rain"?.7:e==="snow"?.55:0,o=1-r*.35;if(this.sun){const c=t/24*re-Math.PI/2;this.sun.position.set(Math.cos(c)*700,Math.sin(c)*700,260),this.sun.intensity=Ot(Math.sin((t-5.8)/12.4*Math.PI)*2.6,0,2.6)*o,this.sun.color.setHSL(.09+i*.02,.45,.55+i*.25)}this.hemi.intensity=ve(.2,.7,i)*o,this.ambient.intensity=ve(.18,.32,i);const l=a*1.9+(r>0?.15:0);for(const c of this.facadeMaterials)c.emissiveIntensity=.015+l*.95;this.lampGlow&&(this.lampGlow.material.opacity=.22+a*.78,this.lampGlow.material.size=6+a*2),this.crownMat&&(this.crownMat.emissiveIntensity=.2+a*2.4),this.sky&&(this.sky.material.uniforms.night.value=a,this.sky.material.uniforms.storm.value=r,this.sky.material.uniforms.sunDir.value.copy(this.sun.position).normalize()),this.stars&&(this.stars.material.opacity=Ot(a*1.1-.15,0,.95)),this.water&&(this.water.material.uniforms.night.value=a),this.moon&&(this.moon.material.opacity=a*.95),this.cloudSpriteMat&&this.cloudSpriteMat.color.setScalar(ve(1.1,.18,a)*(1-r*.25)),document.body.dataset.night=a>.55?"1":"0"}update(t,e,n){this.updateSignals(e),this.water&&(this.water.material.uniforms.time.value=e);for(const i of this.clouds)i.position.x+=i.userData.speed*t,i.position.x>900&&(i.position.x=-900),i.position.z+=i.userData.speed*t*.1,i.position.z>700&&(i.position.z=-700);this.lampGlow&&(this.lampGlow.rotation.y+=0),this.stars&&(this.stars.rotation.y=e*.002);for(const i of this.animated)i.type==="beacon"&&(i.mesh.material=this.warmMat);this.monorail&&this.monorail.update(t,e),this.rail&&this.rail.update(t,e),this.rail2&&this.rail2.update(t,e),this.islandRail&&this.islandRail.update(t,e),this.militaryRail&&this.militaryRail.update(t,e),this.freightRail&&this.freightRail.update(t,e),this.radar&&(this.radar.rotation.y+=t*.35),this.militaryFlag&&(this.militaryFlag.rotation.y=Math.sin(e*1.7)*.15);for(const i of this.airTraffic)i.update(t,e);if(this.lighthouse){const i=Math.sin(e*.8)*.5+.5;this.lighthouse.light.intensity=this.night>.4?2.2+i*2.2:.4,this.lighthouse.lamp.material.color.setHex(this.night>.4?16773818:9077864)}if(this.highwayCars.length)for(const i of this.highwayCars)i.position.z+=i.userData.speed*t,i.position.z>700&&(i.position.z=-700,i.position.x=i.userData.lane);this.updateFactorySmoke(t,e),this.updateFireflies(t,e)}updateFactorySmoke(t,e){if(!this.factorySmokePos||!this.smokeParticles)return;const n=this.smokeParticles;n.userData.t=(n.userData.t||0)+t;const i=n.geometry.attributes.position;for(let a=0;a<i.count;a++){let r=i.getY(a)+t*(2.2+a%5*.3),o=i.getX(a)+t*.55,l=i.getZ(a)+Math.sin(e*.6+a)*t*.2;r>50&&(r=0,o=this.factorySmokePos.x+(Math.random()-.5)*2,l=this.factorySmokePos.z+(Math.random()-.5)*2),i.setXYZ(a,o,r,l)}i.needsUpdate=!0}updateFireflies(t,e){this.fireflyPoints&&(this.fireflyPoints.material.opacity=(this.night>.5?.8:0)*(this.weather==="clear"?1:.15),this.fireflyPoints.position.y=.6+Math.sin(e*.8)*.1)}districtAt(t,e){for(const r of this.islands||[]){const o=(t-r.x)/r.rx,l=(e-r.z)/r.rz;if(o*o+l*l<1)return r.name}const n=Math.floor((t+ke)/fi),i=Math.floor((e+ke)/fi),a=this.blocks.find(r=>r.bi===n&&r.bj===i);return a?this.districtName(a.district):e>420?"NOVA HARBOR":t>420?"NOVA AIRFIELD":e<-400||t<-400?"OUTSKIRTS":"NOVA CITY"}isLand(t,e){if(e<486)return!0;for(const n of this.islands||[]){const i=(t-n.x)/n.rx,a=(e-n.z)/n.rz;if(i*i+a*a<1.03)return!0}for(const n of this.bridges||[])if(t>=n.minX&&t<=n.maxX&&e>=n.minZ&&e<=n.maxZ)return!0;return!1}isWater(t,e){return!this.isLand(t,e)}districtName(t){return{downtown:"DOWNTOWN",midtown:"MIDTOWN",industrial:"INDUSTRIAL",suburb:"PINE HILLS",waterfront:"HARBORFRONT",residential:"WEST END",park:"AURORA PARK",airport:"AIRFIELD"}[t]||"NOVA CITY"}collideCircle(t,e,n){let i=null;for(const a of this.spatial.query(t,e,n+2)){if(a.type!=="building")continue;const r=Ot(t,a.minX,a.maxX),o=Ot(e,a.minZ,a.maxZ),l=t-r,c=e-o,h=l*l+c*c;if(h<n*n){const d=Math.sqrt(h)||1e-4;i={nx:l/d,nz:c/d,pen:n-d,box:a};break}}return i}nearestPOI(t,e,n=999,i=null){let a=null,r=n;for(const o of this.pois){if(i&&!i.includes(o.type))continue;const l=Math.hypot(t-o.x,e-o.z);l<r&&(r=l,a=o)}return a?{poi:a,dist:r}:null}nearestNode(t,e){let n=null,i=1/0;for(const a of this.nodes){const r=Math.hypot(t-a.x,e-a.z);r<i&&(i=r,n=a)}return n}isOnRoad(t,e){for(let n=0;n<We;n++)if(Math.abs(t-ie(n))<Ve||Math.abs(e-ie(n))<Ve)return!0;for(const n of this.islandRoads||[])if(Math.abs(t-n.x)<=n.w/2&&Math.abs(e-n.z)<=n.d/2)return!0;for(const n of this.bridges||[])if(t>=n.minX&&t<=n.maxX&&e>=n.minZ&&e<=n.maxZ)return!0;return!1}}class xv{constructor(t){this.game=t,this.group=new Gt,this.group.name="player",t.scene.add(this.group),this.pos=new N(10,.18,34),this.heading=Math.PI,this.velocity=new N,this.verticalVelocity=0,this.onGround=!0,this.groundY=.18,this.walkPhase=0,this.moveAmount=0,this.sprinting=!1,this.crouching=!1,this.firstPerson=!1,this.cameraYaw=Math.PI,this.cameraPitch=.04,this.cameraDist=5.2,this.cameraHeight=1.55,this.camShake=0,this.riding=null,this.interior=null,this.vehicle=null,this.visible=!0,this.footTimer=0,this.animT=0,this.idleT=0,this.clothing={jacket:2570317,pants:2239027,shoes:1316892,skin:12618339,hair:2826523},this.buildModel(),this.group.position.copy(this.pos),this.group.rotation.y=this.heading,this.camera=t.camera,this.camera.position.set(0,10,20),this.tmp=new N,this.wantToSit=!1,this.cinematic=null,this.lookHold=0}buildModel(){const t=this.group;this.body=new Gt,t.add(this.body);const e=new O({color:this.clothing.skin,roughness:.72}),n=new O({color:this.clothing.jacket,roughness:.82}),i=new O({color:this.clothing.pants,roughness:.9}),a=new O({color:this.clothing.shoes,roughness:.7}),r=new O({color:this.clothing.hair,roughness:.9}),o=new O({color:15002092,roughness:.86}),l=new O({color:1317408,roughness:.74,metalness:.18}),c=new O({color:15988210,roughness:.35}),h=new O({color:2899785,roughness:.3});this.mats={skinMat:e,jacketMat:n,pantsMat:i,shoeMat:a,hairMat:r};const d=new Gt;d.position.y=.88,this.body.add(d),this.addPart=(w,b,v,S,I,R=d)=>{const L=new A(w,b);return L.position.set(v,S,I),L.castShadow=!0,R.add(L),L},this.addPart(new P(.38,.26,.27),i,0,-.04,0),this.addPart(new P(.405,.075,.285),l,0,.09,0),this.addPart(new un(.238,.4,5,12),n,0,.37,0),this.addPart(new P(.5,.16,.3),n,0,.57,0),this.addPart(new P(.34,.08,.28),n,0,.64,0),this.addPart(new P(.026,.34,.022),l,0,.38,.239),this.addPart(new P(.16,.16,.025),o,0,.53,.232);for(const w of[-1,1]){const b=this.addPart(new P(.11,.2,.035),n,w*.1,.52,.235);b.rotation.z=w*.22,this.addPart(new P(.13,.1,.025),l,w*.14,.25,.235)}this.addPart(new P(.34,.42,.16),l,0,.4,-.245),this.addPart(new P(.28,.08,.07),l,0,.58,-.32);for(const w of[-1,1])this.addPart(new P(.045,.34,.025),l,w*.14,.43,.235);this.addPart(new Ft(.072,.084,.14,9),e,0,.7,0),this.addPart(new Ce(.182,18,14),e,0,.865,0).scale.set(.94,1.05,.96),this.addPart(new P(.18,.09,.14),e,0,.77,.055);for(const w of[-1,1]){this.addPart(new Ce(.045,8,6),e,w*.177,.87,.012),this.addPart(new Ce(.036,10,8),c,w*.067,.9,.148).scale.set(1,.82,.55),this.addPart(new Ce(.017,8,6),h,w*.067,.9,.181);const v=this.addPart(new P(.075,.016,.02),r,w*.068,.944,.166);v.rotation.z=-w*.1}this.addPart(new P(.045,.1,.06),e,0,.855,.185),this.addPart(new P(.078,.018,.018),new O({color:7158835,roughness:.7}),0,.792,.178),this.addPart(new Ce(.19,14,12,0,re,0,Math.PI*.56),r,0,.884,-.008).scale.set(.99,1.02,1),this.addPart(new P(.3,.1,.08),r,0,.93,-.16);const p=w=>{const b=new Gt;b.position.set(w*.305,.565,0),d.add(b),this.addPart(new un(.072,.24,4,9),n,0,-.17,0,b);const v=new Gt;return v.position.y=-.34,b.add(v),this.addPart(new un(.062,.23,4,9),n,0,-.14,0,v),this.addPart(new Ce(.07,10,8),e,0,-.3,0,v),this.addPart(new P(.1,.09,.06),e,0,-.35,.02,v).scale.set(1,.9,1),{shoulder:b,elbow:v}},x=p(-1),m=p(1);this.armL=x.shoulder,this.elbowL=x.elbow,this.armR=m.shoulder,this.elbowR=m.elbow;const g=w=>{const b=new Gt;b.position.set(w*.118,-.02,0),d.add(b),this.addPart(new un(.095,.25,4,9),i,0,-.16,0,b);const v=new Gt;return v.position.y=-.33,b.add(v),this.addPart(new un(.079,.23,4,9),i,0,-.15,0,v),this.addPart(new P(.185,.11,.33),a,0,-.32,.04,v).scale.set(1,1,1),this.addPart(new P(.2,.045,.35),l,0,-.373,.045,v),{hip:b,knee:v}},M=g(-1),y=g(1);this.legL=M.hip,this.kneeL=M.knee,this.legR=y.hip,this.kneeR=y.knee,this.hips=d;const _=new A(new Ci(.44,18),new $t({color:0,transparent:!0,opacity:.24,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.012,t.add(_),this.shadow=_}setClothing(t){Object.assign(this.clothing,t),this.mats.jacketMat.color.setHex(this.clothing.jacket),this.mats.pantsMat.color.setHex(this.clothing.pants),this.mats.shoeMat.color.setHex(this.clothing.shoes),this.mats.hairMat.color.setHex(this.clothing.hair),this.mats.skinMat.color.setHex(this.clothing.skin)}setPosition(t,e,n=.18){this.pos.set(t,n,e),this.groundY=n,this.group.position.copy(this.pos)}enteredVehicle(t){this.vehicle=t,this.group.visible=!1,this.shadow.visible=!1,this.riding=null,this.lookHold=0,this.cameraYaw=t.heading,this.cameraPitch=t.isAir?.18:.1,this.cameraDist=t.cfg.len>6?11:t.cfg.len>4.8?7.4:5.6,t.isAir&&(this.cameraDist=12)}exitVehicle(t,e=1){const n=Math.sin(t.heading),a=-Math.cos(t.heading),r=n,o=t.cfg.wid/2+1.1;let l=t.pos.x+a*o*e,c=t.pos.z+r*o*e;this.game.city.collideCircle(l,c,.5)&&(l=t.pos.x-a*o*e,c=t.pos.z-r*o*e),this.vehicle=null,this.group.visible=!0,this.shadow.visible=!0,this.setPosition(l,c,this.groundY||.18),this.heading=t.heading,this.group.rotation.y=this.heading,this.cameraYaw=t.heading,this.velocity.set(0,0,0)}toggleCamera(){return this.firstPerson=!this.firstPerson,this.cameraDist=this.firstPerson?0:this.vehicle?7:5.2,this.group.visible=!this.firstPerson&&!this.vehicle,this.shadow.visible=!this.firstPerson&&!this.vehicle,this.firstPerson}updateCamera(t){const e=this.camera;if(this.cinematic){const d=this.cinematic;d.t+=t;const f=d.t;e.position.set(d.cx+Math.sin(f*d.speed)*d.radius,d.cy+Math.sin(f*.3)*12,d.cz+Math.cos(f*d.speed)*d.radius),e.lookAt(0,28,0);return}if(this.vehicle){this.updateVehicleCamera(t);return}if(this.riding){this.updateRidingCamera(t);return}const n=this.tmp.set(this.pos.x,this.pos.y+this.cameraHeight,this.pos.z),i=this.cameraYaw,a=this.cameraPitch;let r=this.cameraDist;if(this.firstPerson){const d=new N(this.pos.x,this.pos.y+1.62,this.pos.z);e.position.lerp(d,Ot(t*18,0,1));const f=new N(Math.sin(i)*Math.cos(a),Math.sin(-a),Math.cos(i)*Math.cos(a));e.lookAt(d.x+f.x,d.y+f.y,d.z+f.z),e.rotation.z=0;return}const o=new N(-Math.sin(i)*Math.cos(a),Math.sin(a),-Math.cos(i)*Math.cos(a));let l=new N(n.x+o.x*r,n.y+o.y*r+1.15,n.z+o.z*r);const c=this.game.city.collideCircle(l.x,l.z,.45);c&&(l.x+=c.nx*c.pen*1.2,l.z+=c.nz*c.pen*1.2),l.y=Math.max(l.y,.55),e.position.lerp(l,Ot(t*9,0,1));const h=new N(this.pos.x,this.pos.y+1.45,this.pos.z);if(e.lookAt(h),this.game.camShake>0){const d=this.game.camShake;e.position.x+=(Math.random()-.5)*d*.25,e.position.y+=(Math.random()-.5)*d*.2,this.game.camShake=Math.max(0,d-t*2.2)}}updateVehicleCamera(t){const e=this.vehicle,n=this.camera;this.lookHold>0?this.lookHold-=t:this.cameraYaw=os(this.cameraYaw,e.heading,Ot(t*3.4,0,1)),this.cameraYaw;const i=e.isAir||e.cfg.len>6?13:e.cfg.len>4.8?9:7.2,a=this.cameraDist||i,r=this.cameraPitch,o=new N(e.pos.x,e.pos.y+(e.isAir?2:e.cfg.height*.55),e.pos.z);if(this.firstPerson){const f=new N(e.pos.x+Math.sin(e.heading)*e.cfg.len*.15,e.pos.y+(e.isAir?2:e.cfg.height*.55),e.pos.z+Math.cos(e.heading)*e.cfg.len*.15);n.position.lerp(f,Ot(t*12,0,1));const u=new N(Math.sin(this.cameraYaw)*Math.cos(r),Math.sin(-r),Math.cos(this.cameraYaw)*Math.cos(r));n.lookAt(f.x+u.x,f.y+u.y,f.z+u.z);return}const l=this.cameraYaw,c=new N(-Math.sin(l)*Math.cos(r),Math.sin(r)*.6,-Math.cos(l)*Math.cos(r)),h=new N(o.x+c.x*a,o.y+Math.max(1.2,c.y*a),o.z+c.z*a),d=this.game.city.collideCircle(h.x,h.z,.45);if(d&&(h.x+=d.nx*d.pen,h.z+=d.nz*d.pen),h.y=Math.max(h.y,e.isAir?e.pos.y-2:.7),n.position.lerp(h,Ot(t*7,0,1)),n.lookAt(o),this.game.camShake>0){const f=this.game.camShake;n.position.x+=(Math.random()-.5)*f*.22,n.position.y+=(Math.random()-.5)*f*.18,this.game.camShake=Math.max(0,f-t*2.4)}}updateRidingCamera(t){const e=this.riding,n=this.camera,i=e.group?e.group.position:e.pos,a=e.group?.rotation.y??this.cameraYaw;this.lookHold>0?this.lookHold-=t:this.cameraYaw=os(this.cameraYaw,a,Ot(t*2.2,0,1));const r=this.cameraYaw,o=e.group?.userData?.cars,l=e.group?.userData?.trainLength??(o?.length?(o.length-1)*10.6+10:22),c=Math.sin(a),h=Math.cos(a);if(this.firstPerson){const x=new N(i.x+c*1.8,i.y+2.3,i.z+h*1.8);n.position.lerp(x,Ot(t*8,0,1)),n.lookAt(x.x+c*30,x.y-.25+Math.sin(this.cameraPitch)*14,x.z+h*30);return}const d=new N(i.x-c*(l*.5-5),i.y+2.1,i.z-h*(l*.5-5)),f=(this.cameraDist||18)+l*.55,u=new N(-Math.sin(r),0,-Math.cos(r)).multiplyScalar(f),p=new N(d.x+u.x,d.y+4.4+Math.sin(this.cameraPitch)*f*.55,d.z+u.z);n.position.lerp(p,Ot(t*4,0,1)),n.lookAt(d)}update(t,e){if(this.cinematic){this.updateCamera(t);return}if(this.vehicle){this.updateCamera(t);return}if(this.riding){this.updateCamera(t);return}const n=this.cameraYaw;let i=(e.right?1:0)-(e.left?1:0),a=(e.forward?1:0)-(e.back?1:0);const r=Math.hypot(i,a);r>0&&(i/=r,a/=r);const o=new lt(Math.sin(n),Math.cos(n)),l=new lt(-o.y,o.x),c=!!e.sprint,d=!!this.crouching?2.1:c?6.9:3.7,f=new lt(o.x*a+l.x*i,o.y*a+l.y*i).multiplyScalar(d*(r>0?1:0)),u=this.onGround?16:5;if(this.velocity.x=ve(this.velocity.x,f.x,Ot(t*u,0,1)),this.velocity.z=ve(this.velocity.z,f.y,Ot(t*u,0,1)),r>0){const y=Math.atan2(this.velocity.x,this.velocity.z);this.heading=os(this.heading,y,Ot(t*11,0,1))}this.group.rotation.y=this.heading;const p=this.pos.x+this.velocity.x*t,x=this.pos.z+this.velocity.z*t;let m=p,g=x;const M=this.game.city.collideCircle(m,g,.42);M&&(m+=M.nx*M.pen,g+=M.nz*M.pen,this.velocity.x*=.3,this.velocity.z*=.3),m=Ot(m,-680,820),g=Ot(g,-660,900),this.game.city.isWater?.(m,g)&&(m=this.pos.x,g=this.pos.z,this.velocity.multiplyScalar(.2)),this.pos.x=m,this.pos.z=g,e.jump&&this.onGround&&(this.verticalVelocity=5.8,this.onGround=!1,this.game.audio?.jump()),this.verticalVelocity-=18*t,this.pos.y+=this.verticalVelocity*t,this.pos.y<=this.groundY&&(this.pos.y=this.groundY,this.verticalVelocity=0,this.onGround=!0),this.moveAmount=Math.hypot(this.velocity.x,this.velocity.z),this.sprinting=c&&this.moveAmount>4,this.group.position.copy(this.pos),this.animate(t,this.moveAmount,c),this.onGround&&this.moveAmount>.5&&(this.footTimer-=t*(c?1.8:1.2),this.footTimer<=0&&(this.footTimer=.48,this.game.audio?.footstep(c))),this.updateCamera(t)}animate(t,e,n){this.animT+=t;const i=this.kneeL,a=this.kneeR;if(e>.2){this.walkPhase+=t*(n?12:7.5)*Ot(e/3.5,.5,1.6);const r=Math.sin(this.walkPhase)*(n?.78:.5);this.legL.rotation.x=r,this.legR.rotation.x=-r,i.rotation.x=Math.max(0,-r)*1.15,a.rotation.x=Math.max(0,r)*1.15,this.elbowL.rotation.x=-.28-Math.max(0,r)*.5,this.elbowR.rotation.x=-.28-Math.max(0,-r)*.5,this.armL.rotation.x=-r*.8,this.armR.rotation.x=r*.8,this.armL.rotation.z=.045,this.armR.rotation.z=-.045,this.hips.position.y=.88+Math.abs(Math.sin(this.walkPhase))*(n?.075:.038),this.body.rotation.x=n?-.16:-.035,this.body.rotation.y=Math.sin(this.walkPhase)*(n?.07:.045),this.hips.rotation.z=Math.sin(this.walkPhase)*(n?.035:.02)}else{this.idleT+=t;const r=Math.sin(this.idleT*1.6)*.02,o=Math.sin(this.idleT*1.6)*.012;this.legL.rotation.x=ve(this.legL.rotation.x,0,t*7),this.legR.rotation.x=ve(this.legR.rotation.x,0,t*7),i.rotation.x=ve(i.rotation.x,.03,t*6),a.rotation.x=ve(a.rotation.x,.03,t*6),this.armL.rotation.x=ve(this.armL.rotation.x,-r,t*6),this.armR.rotation.x=ve(this.armR.rotation.x,r,t*6),this.armL.rotation.z=ve(this.armL.rotation.z,.08,t*5),this.armR.rotation.z=ve(this.armR.rotation.z,-.08,t*5),this.elbowL.rotation.x=ve(this.elbowL.rotation.x,-.22,t*5),this.elbowR.rotation.x=ve(this.elbowR.rotation.x,-.22,t*5),this.hips.position.y=.88+r*.18+o,this.hips.rotation.z=ve(this.hips.rotation.z,0,t*5),this.body.rotation.x=ve(this.body.rotation.x,0,t*5),this.body.rotation.y=ve(this.body.rotation.y,0,t*5)}this.onGround||(this.legL.rotation.x=.45,this.legR.rotation.x=-.25,i.rotation.x=.8,a.rotation.x=.45,this.armL.rotation.x=-.7,this.armR.rotation.x=-.7,this.elbowL.rotation.x=-.4,this.elbowR.rotation.x=-.4),this.shadow.position.y=this.groundY-this.pos.y+.012,this.shadow.material.opacity=Ot(.26-(this.pos.y-this.groundY)*.08,.05,.3)}beginCinematic(t,e,n,i,a){this.cinematic={cx:t,cy:e,cz:n,radius:i,speed:a,t:0},this.group.visible=!1}endCinematic(){this.cinematic=null,this.group.visible=!this.vehicle&&!this.firstPerson}}const Ns=[[1,0],[-1,0],[0,1],[0,-1]];class vv{constructor(t,e,n,i,a=0,r={}){this.game=t,this.type=e,this.cfg=dn[e],this.model=pi(e,r.color??this.cfg.color??Wo(e),{traffic:r.traffic}),this.group=this.model.group,this.wheels=this.model.wheels||[],this.headMats=this.model.headMats||[],this.brakeMats=this.model.brakeMats||[],this.turnMats=this.model.turnMats||[],this.bodyMat=this.model.bodyMat,this.rotor=this.model.rotor,this.tailRotor=this.model.tailRotor,this.rider=this.model.rider,this.group.position.set(n,r.y??.02,i),this.group.rotation.y=a,t.scene.add(this.group),this.pos=this.group.position,this.heading=a,this.velocity=new lt,this.speed=0,this.steer=0,this.throttle=0,this.brakeInput=0,this.handbrake=!1,this.health=100,this.fuel=this.cfg.fuel,this.engineOn=!0,this.lightsOn=!1,this.indicator=0,this.damageFlash=0,this.lastCrash=0,this.wheelSpin=0,this.mode=r.mode||(r.traffic?"traffic":"parked"),this.service=r.service||null,this.owned=!!r.owned,this.knock=new lt,this.knockTimer=0,this.smokeAcc=0,this.driverVisible=!1,this.verticalVelocity=0,this.altitude=r.y??0,this.rotorAngle=0,this.traffic=null,this.parkedName=r.name||null,this.interiorLight=0,this.isPlayer=!1,this.enterable=!0,this.doorOpen=!1,this.turret=null,this.wakeAcc=0,this.speedKmh=0,this.brakeOn=!1,this.cruise=0,this.lastSpeed=0,this.offroad=!1,this.suspension=0,this.lodTick=Math.random()*4,r.traffic&&this.initTraffic(r.trafficRoute),this.service&&this.addServiceLights()}get isBoat(){return!!this.cfg.isBoat}get isAir(){return!!this.cfg.isAir}get halfLen(){return this.cfg.len/2}get halfWid(){return this.cfg.wid/2}addServiceLights(){const t=new Gt,e=new $t({color:16719904,toneMapped:!1}),n=new $t({color:2776063,toneMapped:!1}),i=this.type==="motorcycle"?1.2:this.cfg.height+(this.type==="bus"?.1:.02),a=new P(this.type==="fire"?1.4:.55,.16,.38),r=new A(a,e);r.position.set(-.3,i,(this.type==="sedan",0));const o=new A(a,n);o.position.set(.3,i,0),t.add(r,o);const l=new Li(16724787,0,18,2);l.position.set(0,i,0),t.add(l),this.group.add(t),this.serviceLights={redM:e,blueM:n,light:l,group:t}}initTraffic(t=null){let e=t?.node||this.game.city.nearestNode(this.pos.x,this.pos.z),n=t?.dir||_e(Ns),i=this.getNeighbor(e,n),a=0;for(;!i&&a++<8;)n=_e(Ns),i=this.getNeighbor(e,n);if(!i){this.mode="parked";return}this.traffic={node:e,next:i,dir:n,t:t?.t??nt(2,60),lane:t?.lane??3.9,cruise:this.type==="bus"||this.type==="truck"?nt(8,10):nt(10,14),turnTimer:0,stopTimer:0};const r=this.lanePoint(this.traffic);this.pos.x=r.x,this.pos.z=r.z,this.heading=Math.atan2(n[0],n[1]),this.group.rotation.y=this.heading,this.mode="traffic"}getNeighbor(t,e){const n=t.i+e[0],i=t.j+e[1];return n<0||n>=9||i<0||i>=9?null:this.game.city.nodeGrid[n][i]}lanePoint(t,e=0){const n=t.node.x+t.dir[0]*(t.t+e),i=t.node.z+t.dir[1]*(t.t+e),a=-t.dir[1],r=t.dir[0];return{x:n+a*t.lane,z:i+r*t.lane}}chooseNext(t){const e=[],n=[-t.dir[0],-t.dir[1]];for(const a of Ns)a[0]===n[0]&&a[1]===n[1]||this.getNeighbor(t.next,a)&&e.push(a);if(!e.length)return[-t.dir[0],-t.dir[1]];const i=e.filter(a=>a[0]===t.dir[0]&&a[1]===t.dir[1]);return i.length&&Math.random()<.55?i[0]:_e(e)}updateTraffic(t,e,n,i){const a=this.traffic;if(!a)return;this.knockTimer>0&&(this.knockTimer-=t,this.pos.x+=this.knock.x*t,this.pos.z+=this.knock.y*t,this.knock.multiplyScalar(1-t*4));const r=96,o=a.dir[0]!==0?"x":"z",l=r-a.t;let c=a.cruise,h=!1;if(l<34){const S=this.game.city.signalState(a.next,o,e),I=Math.max(0,l-10),R=this.speed*this.speed<=2*this.cfg.brake*.8*I;if(S==="red"||S==="yellow"&&R){const L=Math.sqrt(2*this.cfg.brake*.8*I);c=Math.min(c,L),l<=10.5&&(c=0,h=!0)}}const d=Math.sin(this.heading),f=Math.cos(this.heading);for(const S of this.game.vehicles.vehicles){if(S===this||S.mode==="parked"&&S.isAir)continue;const I=S.pos.x-this.pos.x,R=S.pos.z-this.pos.z,L=I*d+R*f;if(L<=0)continue;const z=Math.abs(I*f-R*d),k=(this.cfg.wid+S.cfg.wid)*.5+1.1,D=L-(this.cfg.len+S.cfg.len)*.5;z<k&&D<6.5&&(c=Math.min(c,Math.max(0,S.speed||0)),(D<1.5||S.mode!=="traffic"&&S!==this.game.vehicles.playerVehicle)&&(h=!0))}this.game.npcs?.anyInFront(this.pos.x,this.pos.z,this.heading,8)&&(h=!0),h&&(c=0),this.health<15&&(c=0);const p=h?this.cfg.brake*.8:this.cfg.accel*.55;this.speed=this.speed<c?Math.min(c,this.speed+p*t):Math.max(c,this.speed-this.cfg.brake*t),this.brakeOn=h&&this.speed>.1;const x=this.lanePoint(a,10),m=x.x-this.pos.x,g=x.z-this.pos.z,M=Math.atan2(m,g);let y=Rs(M-this.heading);this.steer=ve(this.steer,Ot(y*1.7,-.65,.65),Ot(t*8,0,1));const _=Ot(this.speed*.35,0,2.2);this.heading=Rs(this.heading+Ot(y,-_*t,_*t));const w=Math.sin(this.heading),b=Math.cos(this.heading);this.pos.x+=w*this.speed*t,this.pos.z+=b*this.speed*t,this.group.rotation.y=this.heading,a.t+=this.speed*t;const v=this.lanePoint(a,0);if(this.pos.x+=(v.x-this.pos.x)*Math.min(1,t*1.5),this.pos.z+=(v.z-this.pos.z)*Math.min(1,t*1.5),a.t>=r&&(a.t-=r,a.node=a.next,a.dir=this.chooseNext(a),a.next=this.getNeighbor(a.node,a.dir),a.next||(a.node=this.game.city.nearestNode(this.pos.x,this.pos.z),a.dir=_e(Ns),a.next=this.getNeighbor(a.node,a.dir))),this.animateWheels(t),this.speedKmh=this.speed*3.6,this.lightsOn!==(n>.4||i!=="clear")&&(this.lightsOn=n>.4||i!=="clear"),Yc(this.headMats,this.brakeMats,this.turnMats,{lightsOn:this.lightsOn,braking:this.brakeOn||this.speed<.2}),this.serviceLights){const S=Math.floor(e*5)%2===0;this.serviceLights.redM.color.setHex(S?16719904:3147784),this.serviceLights.blueM.color.setHex(S?657968:2776063),this.serviceLights.light.color.setHex(S?16719904:2776063),this.serviceLights.light.intensity=S?2.6:2.2}}updatePlayer(t,e,n,i,a){if(this.isPlayer=!0,this.isAir)return this.updateHelicopter(t,e,a);if(this.isBoat)return this.updateBoat(t,e,n,a);const r=this.cfg,o=new lt(Math.sin(this.heading),Math.cos(this.heading)),l=new lt(-o.y,o.x);let c=this.velocity.dot(o),h=this.velocity.dot(l);const d=Ot(1-(100-this.health)/150,.35,1),f=this.fuel>.1,u=this.engineOn&&f&&this.health>6;this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.handbrake=!!e.handbrake;const p=!this.game.city.isOnRoad(this.pos.x,this.pos.z);this.offroad=p;const x=n==="rain"||n==="storm",m=r.maxSpeed*d*(p?.62:1)*(x?.86:1);if(this.brakeInput>0&&c<=.4?u&&(c-=r.accel*.45*t*d):this.brakeInput>0&&(c-=r.brake*this.brakeInput*t),this.throttle>0&&u){const R=r.accel*(1-Ot(Math.abs(c)/m,0,1)*.72);c+=R*this.throttle*t*d}c=Ot(c,-m*.35,m),c*=1-t*(p?1.2:.22),c-=Math.sign(c)*Math.min(Math.abs(c),(p?4.5:.8)*t);let g=r.grip*(x?.52:1)*(p?.55:1);this.handbrake&&(g*=.16),this.health<40&&(g*=.86),h*=Math.exp(-g*t);const M=e.steer||0;this.steer=ve(this.steer,M,Ot(t*8,0,1));const y=Ot(Math.abs(c)/7,0,1),_=this.handbrake?1.45:1,w=1.5*y*(1-Ot(Math.abs(c)/r.maxSpeed,0,1)*.38)*_;this.heading=Rs(this.heading-this.steer*w*t*(c<0?-1:1)),(x||this.handbrake)&&(h-=this.steer*c*(x?.09:.2)*t*(this.handbrake?2.4:1));const b=new lt(Math.sin(this.heading),Math.cos(this.heading)),v=new lt(-b.y,b.x);this.velocity.set(b.x*c+v.x*h,b.y*c+v.y*h);const S=this.pos.x,I=this.pos.z;if(this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.game.city.isWater?.(this.pos.x,this.pos.z)&&(this.pos.x=S,this.pos.z=I,this.velocity.multiplyScalar(.15),this.speed>4&&(this.game.audio?.crash?.(4),this.game.notify?.("Deep water ahead — use the bridge","warn")),this.speed*=.35),this.group.rotation.y=this.heading,this.wheels.length){const R=(c-this.lastSpeed)/Math.max(t,.001);this.offroadShake=p?Ot(Math.abs(c)/14,0,1):0;const L=Ot(-this.steer*Math.abs(c)*.0037,-.12,.12),z=Ot(-R*.0058,-.085,.085)+(p?Math.sin(performance.now()*.012)*.012:0);this.group.rotation.z=ve(this.group.rotation.z,L,Ot(t*7,0,1)),this.group.rotation.x=ve(this.group.rotation.x,z,Ot(t*6,0,1))}this.lastSpeed=c,this.speed=c,this.speedKmh=Math.abs(c)*3.6,this.brakeOn=this.brakeInput>0||this.throttle===0&&Math.abs(c)>.2||this.handbrake,u&&(this.fuel=Math.max(0,this.fuel-t*(.011+Math.abs(c)*75e-5*(this.throttle>0?2.2:1)))),this.resolveWorldCollisions(t,c),this.animateWheels(t),this.animateLights(i,a,e,n),this.health<55&&this.game.effects.smokeAtVehicle(this,t),f===!1&&u&&(this.engineOn=!1)}updateHelicopter(t,e,n){const i=this.cfg,a=this.fuel>.1,r=this.engineOn&&a;this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.steer=e.steer||0;const o=e.up||0,l=e.down||0,c=r?(o-l)*11:-9;this.verticalVelocity=ve(this.verticalVelocity,c,t*2.2),this.altitude=Math.max(.5,this.altitude+this.verticalVelocity*t);const h=new lt(Math.sin(this.heading),Math.cos(this.heading));let d=this.velocity.dot(h);const f=r?this.throttle*i.maxSpeed-this.brakeInput*10:0;d=ve(d,f,t*.7),this.heading=Rs(this.heading-this.steer*t*(1.15+Ot(Math.abs(d)/40,0,.4)));const u=new lt(Math.sin(this.heading),Math.cos(this.heading));if(this.velocity.set(u.x*d,u.y*d),this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.pos.y=ve(this.pos.y,this.altitude+Math.sin(performance.now()*.001)*.06,t*5),this.group.rotation.y=this.heading,this.group.rotation.z=ve(this.group.rotation.z,-this.steer*.18-this.velocity.x*.001,t*2),this.group.rotation.x=ve(this.group.rotation.x,Ot(-d*.004,-.16,.16),t*2),this.speed=Math.abs(d),this.speedKmh=Math.abs(d)*3.6,this.fuel=Math.max(0,this.fuel-t*(.03+(o?.04:0))),this.rotorAngle+=t*(r?42:8),this.model.rotor.rotation.y=this.rotorAngle,this.model.tailRotor&&(this.model.tailRotor.rotation.x=this.rotorAngle*1.4),this.rotor&&(this.rotor.rotation.y=this.rotorAngle),this.brakeOn=!1,this.altitude<30){const p=this.game.city.collideCircle(this.pos.x,this.pos.z,3);p&&p.box.height>this.pos.y&&(this.pos.x-=p.nx*p.pen,this.pos.z-=p.nz*p.pen,this.health=Math.max(0,this.health-12),this.game.effects.sparksAt(this.pos.x,this.pos.y,this.pos.z,14),this.verticalVelocity=2)}this.pos.y<2.2&&(this.pos.y=2.2,this.altitude=2.2,this.verticalVelocity=0,e.up&&(this.altitude=2.4)),this.health<55&&this.game.effects.smokeAtVehicle(this,t),this.animateLights(performance.now()/1e3,n,e,null),!r&&this.altitude>1&&(this.altitude=Math.max(.5,this.altitude-t*4))}updateBoat(t,e,n,i){const a=this.cfg,r=new lt(Math.sin(this.heading),Math.cos(this.heading)),o=new lt(-r.y,r.x);let l=this.velocity.dot(r);this.velocity.dot(o),this.throttle=e.throttle||0,this.brakeInput=e.brake||0,this.steer=e.steer||0,this.engineOn&&this.fuel>.1&&this.throttle>0&&(l+=a.accel*this.throttle*t*(1-Ot(l/a.maxSpeed,0,1)*.6)),this.brakeInput>0&&(l-=a.brake*this.brakeInput*t),l*=1-t*.25,l=Ot(l,-4,a.maxSpeed),this.heading=Rs(this.heading-this.steer*1.1*Ot(Math.abs(l)/8,0,1)*t);const h=new lt(Math.sin(this.heading),Math.cos(this.heading));if(this.velocity.set(h.x*l,h.y*l),this.pos.x+=this.velocity.x*t,this.pos.z+=this.velocity.y*t,this.pos.z<492&&(this.pos.z=492,this.velocity.y=Math.abs(this.velocity.y)*.2,l*=.2),this.pos.z>1400&&(this.pos.z=1400),this.pos.y=.25+Math.sin(performance.now()*.0012+this.pos.x*.01)*.12,this.group.rotation.y=this.heading,this.group.rotation.z=ve(this.group.rotation.z,this.steer*.08,t*3),this.group.rotation.x=ve(this.group.rotation.x,Math.sin(performance.now()*.0015)*.02,t*2),this.speed=l,this.speedKmh=Math.abs(l)*3.6,this.fuel=Math.max(0,this.fuel-t*(.02+this.throttle*.04)),this.animateLights(performance.now()/1e3,i,e,n),Math.abs(l)>3&&(this.wakeAcc+=t,this.wakeAcc>.08)){this.wakeAcc=0;const d=new lt(-Math.sin(this.heading),-Math.cos(this.heading));this.game.effects.wakes.spawn(this.pos.x+d.x*3.2,this.pos.y+.2,this.pos.z+d.y*3.2,{color:14152191,size:1.2,grow:2.4,life:.9,vy:.2,vx:nt(-.4,.4),vz:nt(-.4,.4),drag:.9})}this.health<55&&this.game.effects.smokeAtVehicle(this,t)}resolveWorldCollisions(t,e){const n=this.cfg.len,i=this.cfg.wid*.46,a=[-n*.32,0,n*.32],r={x:Math.sin(this.heading),z:Math.cos(this.heading)};let o=!1,l=0,c=null;for(const h of a){const d=this.pos.x+r.x*h,f=this.pos.z+r.z*h,u=this.game.city.collideCircle(d,f,i);u&&(this.pos.x+=u.nx*u.pen,this.pos.z+=u.nz*u.pen,o=!0,u.pen>l&&(l=u.pen,c=u))}if(o){const h=Math.abs(e)+l*8;if(h>1.6){const d=c.nx,f=c.nz,u=this.velocity.x*d+this.velocity.y*f;u<0&&(this.velocity.x-=d*u*1.35,this.velocity.y-=f*u*1.35),this.velocity.multiplyScalar(.72);const p=Ot((h-1.2)*.9,0,30);this.applyDamage(p,{x:this.pos.x+r.x*(n*.32),y:this.pos.y+.7,z:this.pos.z+r.z*(n*.32)}),this.game.audio?.crash(h),h>4&&(this.game.camShake=Math.max(this.game.camShake,Math.min(1,h/20)))}}}animateWheels(t){const e=this.speed*t/(this.cfg.wheelR||.35),n=performance.now()*.001;let i=0;for(const a of this.wheels){a.baseY===void 0&&(a.baseY=a.mesh.position.y);const r=(this.offroad?.035:.007)*Ot(Math.abs(this.speed)/9,0,1);a.mesh.position.y=a.baseY+Math.sin(n*13+i*1.7)*r,a.mesh.rotation.x+=e,a.front&&(a.mesh.rotation.y=this.steer*.46),i++}}animateLights(t,e,n,i){const a=e>.5||i&&i!=="clear";this.lightsOn=a;const r=this.indicator===-1||n?.left,o=this.indicator===1||n?.right;if(Yc(this.headMats,this.brakeMats,this.turnMats,{lightsOn:this.lightsOn,braking:this.brakeOn,left:r,right:o}),this.serviceLights){const l=Math.floor(t*6)%2===0;this.serviceLights.redM.color.setHex(l?16719904:2622982),this.serviceLights.blueM.color.setHex(l?1785855:526368),this.serviceLights.light.color.setHex(l?16719904:2776063),this.serviceLights.light.intensity=3}}applyDamage(t,e=null){this.health=Ot(this.health-t,0,100),this.damageFlash=1,e&&(t>4&&this.game.effects.sparksAt(e.x,e.y,e.z,Math.min(24,t)),t>8&&(this.deform(t,e),this.game.effects.debris(e.x,e.y,e.z,Math.min(12,t/2))),t>22&&this.game.effects.explosion(e.x,e.y,e.z)),this.health<=0&&!this.dead&&(this.dead=!0,this.engineOn=!1,this.game.notify?.("Vehicle disabled — engine failure","bad")),this.serviceLights&&(this.serviceLights.group.visible=this.health>30)}deform(t,e){const n=e?this.group.worldToLocal(new N(e.x,e.y,e.z)):new N(0,0,1),i=[];if(this.group.traverse(h=>{h.isMesh&&h.userData.panel&&h.geometry&&i.push(h)}),!i.length)return;const r=i[Math.floor(Math.random()*i.length)].geometry,o=r.attributes.position,l=n.clone(),c=Math.min(.28,t*.008);for(let h=0;h<o.count;h++){const d=o.getX(h),f=o.getY(h),u=o.getZ(h),p=Math.hypot(d-l.x,f-l.y,u-l.z);if(p<2.5){const x=(1-p/2.5)*c;o.setXYZ(h,d*(1-x*.5),f*(1-x*.7),u*(1-x*.3))}}o.needsUpdate=!0,r.computeVertexNormals(),this.bodyMat.color.multiplyScalar(.985)}repair(){this.health=100,this.fuel=this.cfg.fuel,this.engineOn=!0,this.dead=!1,this.visible=!0,this.group.visible=!0}dispose(){this.game.scene.remove(this.group)}}class Mv{constructor(t){this.game=t,this.vehicles=[],this.playerVehicle=null,this.trafficLimit=165,this.spawnedTraffic=!1,this.pendingTraffic=[]}spawn(t,e,n,i=0,a={}){const r=new vv(this.game,t,e,n,i,a);return this.vehicles.push(r),r}spawnTraffic(t){const e=["sedan","sedan","sedan","taxi","taxi","suv","suv","sports","van","van","pickup","bus","bus","truck","truck","construction","motorcycle","motorcycle","sedan"],n=this.vehicles.filter(r=>r.mode==="traffic").length,i=Math.max(0,Math.min(Math.floor(t),this.trafficLimit-n));let a=0;for(let r=0;r<i;r++){let o,l;for(let h=0;h<48;h++){o=_e(e),l=this.randomRoadPoint();const d=dn[o];if(!this.vehicles.some(u=>{const p=(d.len+u.cfg.len)*.5+5;return Math.hypot(u.pos.x-l.x,u.pos.z-l.z)<Math.max(13,p)}))break;l=null}if(!l)continue;const c=this.spawn(o,l.x,l.z,l.heading,{traffic:!0,trafficRoute:l.route,color:Wo(o),y:.02});c.traffic.cruise=o==="bus"||o==="truck"?nt(7,9):o==="construction"?nt(5,7):o==="motorcycle"?nt(13,17):nt(10,14.5),a++}return a}randomRoadPoint(){const e=this.game.city.nodeGrid[Math.floor(Math.random()*9)][Math.floor(Math.random()*9)],n=Ns.filter(d=>e.i+d[0]>=0&&e.i+d[0]<9&&e.j+d[1]>=0&&e.j+d[1]<9),i=_e(n),a=nt(12,84),r=3.9,o=-i[1],l=i[0],c=e.x+i[0]*a+o*r,h=e.z+i[1]*a+l*r;return{x:c,z:h,heading:Math.atan2(i[0],i[1]),route:{node:e,dir:i,t:a,lane:r}}}spawnParkedCity(){const t=[...this.game.city.parkingSpots].sort(()=>Math.random()-.5).slice(0,18),e=["sedan","suv","sports","van","pickup","sedan","taxi"];for(const a of t)this.spawn(_e(e),a.x,a.z,a.heading,{color:Wo(_e(e))});this.startCar=this.spawn("sedan",4,36,Math.PI,{color:2837103,owned:!0,name:"Your Sable"});const n=this.spawn("police",132,44,Math.PI/2,{service:"police",color:15265264}),i=this.spawn("police",132,58,-Math.PI/2,{service:"police"});this.policeUnits=[n,i],this.ambulance=this.spawn("ambulance",168,166,Math.PI/2,{service:"ambulance"}),this.fireEngine=this.spawn("fire",-150,-30,Math.PI/2,{service:"fire"}),this.helipadHeli=this.spawn("helicopter",this.game.city.helipad.x,this.game.city.helipad.z,0,{y:this.game.city.helipad.y+1.7}),this.helipadHeli.altitude=this.helipadHeli.pos.y,this.boats=[this.spawn("boat",300,500,Math.PI,{y:.25}),this.spawn("boat",322,510,Math.PI*.9,{y:.25,color:12270132}),this.spawn("boat",345,530,Math.PI,{y:.25,color:3108495})],this.supercars=[this.spawn("super",30,158,Math.PI/2,{color:14992458}),this.spawn("super",36,166,Math.PI/2,{color:1842210}),this.spawn("sports",24,170,Math.PI/2,{color:11678772})],this.bus=this.spawn("bus",96,340,0,{color:2912136}),this.construction=this.spawn("construction",-300,-300,Math.PI/2,{color:14066975})}findNearest(t,e,n=5,i=null){let a=null,r=n;for(const o of this.vehicles){if(o.isPlayer||i&&!i(o))continue;const l=Math.hypot(o.pos.x-t,o.pos.z-e);l<r&&(r=l,a=o)}return a?{vehicle:a,dist:r}:null}startDriving(t){this.playerVehicle=t,t.mode="player",t.isPlayer=!0,t.traffic=null,t.parkedName=t.parkedName||t.cfg.name,t.engineOn=!0,this.game.audio?.startEngine(t)}stopDriving(t){t&&(t.mode="parked",t.isPlayer=!1,t.throttle=0,t.brakeInput=0,t.steer=0,t.indicator=0,this.playerVehicle=null,this.game.audio?.stopEngine())}update(t,e,n,i){const a=this.playerVehicle;a&&a.velocity&&a.updatePlayer(t,this.game.controls.vehicle,i,e,n);for(const r of this.vehicles)if(r!==a){if(r.mode==="traffic")r.updateTraffic(t,e,n,i);else if(r.health<55&&this.game.effects.smokeAtVehicle(r,t*.5),r.serviceLights){const o=Math.floor(e*5)%2===0;r.serviceLights.redM.color.setHex(o?16719904:2622982),r.serviceLights.blueM.color.setHex(o?723760:2776063),r.serviceLights.light.intensity=o?2.4:1.8}}a&&this.handleTrafficCollisions(a)}handleTrafficCollisions(t){Math.sin(t.heading),Math.cos(t.heading);for(const e of this.vehicles){if(e===t||e.mode!=="traffic")continue;const n=e.pos.x-t.pos.x,i=e.pos.z-t.pos.z,a=Math.hypot(n,i),r=(e.cfg.len+t.cfg.len)*.38;if(a<r&&a>.01){const o=n/a,l=i/a,c=Math.abs(t.speed);e.knock.set(o*(2+c*.35),l*(2+c*.35)),e.knockTimer=.8,e.pos.x+=o*(r-a)*.8,e.pos.z+=l*(r-a)*.8,t.speed>4&&(t.velocity.multiplyScalar(.82),this.game.effects.sparksAt(e.pos.x,e.pos.y+.8,e.pos.z,14),e.health=Ot(e.health-Math.min(30,c*.8),0,100),this.game.audio?.crash(c),this.game.camShake=Math.max(this.game.camShake,Math.min(.8,c/35)),this.game.onTrafficCollision?.(t,e))}}}nearestService(t,e,n){let i=null,a=1/0;for(const r of this.vehicles){if(r.service!==t)continue;const o=Math.hypot(r.pos.x-e,r.pos.z-n);o<a&&(a=o,i=r)}return i}}const _v=[12618339,9198652,14725772,7029296,11039311,14262394,6043686],yv=[2832973,7023925,3426874,5326428,2303532,9202493,11055285,4087680,8011346,5068103],wv=[2239027,2895670,3881792,4866358,2237996,5922144,1777702],Sv=[1971729,3877405,6965804,10123850,1381653,7829367];class bv{constructor(t){this.game=t,this.count=160,this.peds=[],this.parts={},this.dummy=new we,this.local=new we,this.mat4=new ye,this.initMeshes(),this.spawn(),this.scanTimer=0}initMeshes(){const t=this.count,e={torso:new un(.21,.3,4,8),hips:new P(.34,.2,.24),neck:new Ft(.068,.082,.12,8),head:new Ce(.165,12,10),hair:new Ce(.173,10,8,0,re,0,Math.PI*.58),legL:new un(.075,.52,3,7),legR:new un(.075,.52,3,7),armL:new un(.055,.42,3,7),armR:new un(.055,.42,3,7),handL:new Ce(.062,7,6),handR:new Ce(.062,7,6),shoeL:new P(.13,.085,.27),shoeR:new P(.13,.085,.27),bag:new P(.26,.32,.16)};this.meshMats={torso:new O({roughness:.82}),hips:new O({roughness:.9}),head:new O({roughness:.68}),hair:new O({roughness:.93}),leg:new O({roughness:.88}),arm:new O({roughness:.82}),hand:new O({roughness:.7}),shoe:new O({roughness:.82}),bag:new O({roughness:.78})};for(const n of Object.keys(e)){const i=n==="head"||n==="hair"?"head":n==="hips"?"hips":n.startsWith("leg")?"leg":n.startsWith("arm")?"arm":n.startsWith("hand")?"hand":n.startsWith("shoe")?"shoe":n==="bag"?"bag":"torso",a=new De(e[n],this.meshMats[i],t);a.instanceMatrix.setUsage(Yd),a.castShadow=n!=="hair",a.frustumCulled=!1,this.game.scene.add(a),this.parts[n]=a}for(const n of Object.values(this.parts)){for(let i=0;i<t;i++)n.setColorAt(i,new Kt(16777215));n.instanceColor.needsUpdate=!0}}colorFor(t){for(let e=0;e<this.count;e++){const n=this.peds[e];if(!n)continue;const i=new Kt(n.colors.jacket),a=new Kt(n.colors.pants),r=new Kt(n.colors.skin),o=new Kt(n.colors.hair);for(const c of["torso","armL","armR"])this.parts[c].setColorAt(e,i);for(const c of["legL","legR","hips"])this.parts[c].setColorAt(e,a);for(const c of["head","neck","handL","handR"])this.parts[c].setColorAt(e,r);this.parts.hair.setColorAt(e,o);const l=new Kt(2369323);this.parts.shoeL.setColorAt(e,l),this.parts.shoeR.setColorAt(e,l),this.parts.bag.setColorAt(e,i.clone().multiplyScalar(.68))}for(const e of Object.values(this.parts))e.instanceColor.needsUpdate=!0}spawn(){this.game.city;for(let t=0;t<this.count;t++){let e;t<22?e=this.makeCrosser(t):t<34?e=this.makeIdler(t):e=this.makeWalker(t),e.index=t,e.colors={jacket:_e(yv),pants:_e(wv),skin:_e(_v),hair:_e(Sv)},e.scale=nt(.9,1.06),e.phase=nt(0,re),e.speed=nt(.85,1.5),e.idleTimer=nt(0,3),e.state=e.type==="idler"?"idle":"walk",e.fleeTimer=0,e.downTimer=0,e.talkTimer=0,e.pos=new N(e.x,.18,e.z),e.heading=nt(0,re),this.peds.push(e)}this.colorFor()}randomSidewalkPoint(){const t=Math.random()>.5,e=Math.floor(Math.random()*We),n=Math.random()>.5?1:-1,i=1+Math.floor(Math.random()*6),a=(Math.random()>.5,9.3);if(t){const l=ie(e)-n*a,c=ie(i)+nt(4,60);return{x:l,z:c,axis:"z",line:e,dir:n,i:e,j:i,t:nt(4,60)}}const r=ie(e)+n*a;return{x:ie(i)+nt(4,60),z:r,axis:"x",line:e,dir:n,i,j:e,t:nt(4,60)}}makeWalker(t){const e=this.randomSidewalkPoint();return{type:"walker",x:e.x,z:e.z,axis:e.axis,dir:e.dir,line:e.line,ni:e.i,nj:e.j,t:e.t,wait:0,crossing:!1}}makeCrosser(t){const e=Math.random()>.5,n=1+Math.floor(Math.random()*7),i=1+Math.floor(Math.random()*7),a=Math.random()>.5?1:-1,r=e?"x":"z",o=e?ie(i)+a*9.3:ie(n)+nt(-3,3),l=e?ie(n)+10.4:ie(i)+a*9.3,c=e?ie(i)-a*9.3:o,h=e?l:ie(i)-a*9.3;return{type:"crosser",x:o,z:l,axis:r,line:n,dir:a,ni:i,nj:n,startX:o,startZ:l,endX:c,endZ:h,t:0,wait:nt(0,4),crossing:!1,side:a,originNode:i,originLine:n,crossVertical:e}}makeIdler(t){const e={x:-24,z:-24},n=nt(0,re),i=nt(4,28);return{type:"idler",x:e.x+Math.cos(n)*i,z:e.z+Math.sin(n)*i,axis:"z",line:4,dir:1,ni:4,nj:4,t:0,wait:nt(2,12),home:!0}}nextWalkerTarget(t){const e=[];for(const a of[[1,0],[-1,0],[0,1],[0,-1]]){if(a[0]===-t.dir&&t.axis==="x"||a[1]===-t.dir&&t.axis==="z")continue;const r=t.ni+a[0],o=t.nj+a[1];r<0||r>We-1||o<0||o>We-1||e.push(a)}if(!e.length){t.dir=-t.dir;return}const n=e.find(a=>t.axis==="x"?a[0]===t.dir:a[1]===t.dir);let i;n&&Math.random()<.68?i=n:i=_e(e),i[0]!==0?(t.axis="x",t.dir=i[0],t.ni=t.ni+i[0]):(t.axis="z",t.dir=i[1],t.nj=t.nj+i[1]),t.t=0,t.wait=Math.random()<.2?nt(1,4):0,t.line=t.axis==="z"?t.ni:t.nj}targetPoint(t){if(t.axis==="z"){const a=ie(t.ni)-t.dir*9.3,r=ie(t.nj)+t.dir*t.t;return{x:a,z:r}}const n=ie(t.nj)+t.dir*9.3;return{x:ie(t.ni)+t.dir*t.t,z:n}}update(t,e,n){const i=n.pos.x,a=n.pos.z;n.vehicle;for(const r of this.peds){if(r.x-i,r.z-a,r.state==="down"){r.downTimer-=t,r.downTimer<=0&&(r.state="walk",r.x+=nt(-1,1),r.z+=nt(-1,1)),this.writePed(r,e,t,!0);continue}if(r.fleeTimer>0){r.fleeTimer-=t,r.x+=Math.sin(r.heading)*5.2*t,r.z+=Math.cos(r.heading)*5.2*t,r.state="flee",r.phase+=t*16,this.writePed(r,e,t);continue}const o=this.game.vehicles?.playerVehicle;if(o&&Math.hypot(o.pos.x-r.x,o.pos.z-r.z)<9&&Math.abs(o.speed)>4.5){r.heading=Math.atan2(r.x-o.pos.x,r.z-o.pos.z),r.fleeTimer=nt(1.2,2.4),Math.random()<.2&&this.game.notify?.("Pedestrians scatter from the road","warn");continue}if(r.type==="crosser")this.updateCrosser(r,t,e);else if(r.type==="idler"){if(r.wait-=t,r.wait<=0)if(r.wait=nt(2,7),Math.random()<.45&&r.home){const l={x:-24,z:-24},c=nt(0,re),h=nt(4,28);r.tx=l.x+Math.cos(c)*h,r.tz=l.z+Math.sin(c)*h,r.state="walk"}else r.state="idle";if(r.state==="walk"&&r.tx!==void 0)if(Math.hypot(r.tx-r.x,r.tz-r.z)>.4){const c=Math.atan2(r.tx-r.x,r.tz-r.z);r.heading=os(r.heading,c,t*5),r.x+=Math.sin(r.heading)*1.1*t,r.z+=Math.cos(r.heading)*1.1*t,r.phase+=t*6}else r.state="idle",r.wait=nt(2,8)}else this.updateWalker(r,t);if(r.wait>0){r.wait-=t,r.phase=ve(r.phase,0,t),Math.random()<.002&&(r.heading+=nt(-.5,.5)),this.writePed(r,e,t);continue}r.state==="walk"||r.state==="flee"?(r.phase+=t*(r.type==="crosser"?8:7)*(r.fleeTimer>0?1.6:1),r.x+=Math.sin(r.heading)*r.speed*t,r.z+=Math.cos(r.heading)*r.speed*t):r.state==="idle"&&(r.phase+=t*.8),this.writePed(r,e,t)}this.scanTimer-=t,this.scanTimer<=0&&(this.scanTimer=.18,this.checkVehicleHits())}updateWalker(t,e){const n=this.targetPoint(t),i=n.x-t.x,a=n.z-t.z;t.heading=os(t.heading,Math.atan2(i,a),e*4.5),t.state="walk",t.t+=t.speed*e*.72,t.t>96&&(t.t=0,this.nextWalkerTarget(t))}updateCrosser(t,e,n){if(t.crossing){const i=t.endX-t.x,a=t.endZ-t.z,r=Math.hypot(i,a);if(t.heading=os(t.heading,Math.atan2(i,a),e*7),t.state="walk",t.x+=Math.sin(t.heading)*1.65*e,t.z+=Math.cos(t.heading)*1.65*e,r<.5){t.crossing=!1,t.wait=nt(2.5,7);const o=t.startX,l=t.startZ;t.startX=t.endX,t.startZ=t.endZ,t.endX=o,t.endZ=l}}else{if(t.wait-=e,t.wait>0)return;const i=this.game.city.nodeGrid?.[t.originNode]?.[t.originLine],a=t.crossVertical?"z":"x";if((i?this.game.city.signalState(i,a,n):"green")!=="green"){t.wait=.45;return}let o=!1;const l=this.game.vehicles?.vehicles||[];for(const c of l){if(c.disposed||!c.pos)continue;const h=c.pos.x-t.x,d=c.pos.z-t.z;if(Math.hypot(h,d)<16&&Math.abs(c.speed)>3.5){const u=Math.sin(c.heading||0),p=Math.cos(c.heading||0);if((t.x-c.pos.x)*u+(t.z-c.pos.z)*p>0){o=!0;break}}}if(o){t.wait=.35;return}t.crossing=!0}}writePed(t,e,n,i=!1){const a=t.index;this.dummy.position.set(t.x,.18,t.z),this.dummy.rotation.set(0,t.heading,0),i&&(this.dummy.rotation.z=Math.PI/2,this.dummy.position.y=.3),this.dummy.updateMatrix(),Math.sin(t.phase)*.55;const o=t.scale,l=this.parts,c=this.local,h=this.mat4,d=(u,p,x,m,g=0,M=0,y=0,_=o,w=o,b=o)=>{c.position.set(p,x,m),c.rotation.set(g,M,y),c.scale.set(_,w,b),c.updateMatrix(),h.multiplyMatrices(this.dummy.matrix,c.matrix),u.setMatrixAt(a,h)},f=t.index%3===0;if(i)d(l.torso,0,1.08,0,0,0,0,o,o,o*.74),d(l.hips,0,.86,0),d(l.neck,0,1.5,0),d(l.head,0,1.58,0),d(l.hair,0,1.6,-.005),d(l.armL,-.3,1.3,0,.3),d(l.armR,.3,1.3,0,-.3),d(l.handL,-.34,1.02,0),d(l.handR,.34,1.02,0),d(l.legL,-.12,.5,.1),d(l.legR,.12,.5,-.1),d(l.shoeL,-.12,.12,.2),d(l.shoeR,.12,.12,-.2),d(l.bag,0,1.18,-.22,0,0,0,.001,.001,.001);else{const p=t.state==="walk"||t.state==="flee"||t.crossing?Math.sin(t.phase):Math.sin(t.phase*.35)*.08,x=p*.62,m=-x*.8;d(l.hips,0,.92*o,0),d(l.torso,0,1.24*o,0,0,0,0,o*.98,o,o*.74),d(l.neck,0,1.58*o,0),d(l.head,0,1.7*o,0,0,0,0,o*.98,o,o*.94),d(l.hair,0,1.72*o,-.008),d(l.legL,-.11*o,.45*o,p*.17*o,x),d(l.legR,.11*o,.45*o,-p*.17*o,-x),d(l.shoeL,-.11*o,.075,.07+p*.24*o,x*.5),d(l.shoeR,.11*o,.075,.07-p*.24*o,-x*.5),d(l.armL,-.32*o,1.24*o,-p*.12*o,m),d(l.armR,.32*o,1.24*o,p*.12*o,-m),d(l.handL,-.34*o,.98*o,-p*.24*o,m),d(l.handR,.34*o,.98*o,p*.24*o,-m),f?d(l.bag,0,1.22*o,-.24*o):d(l.bag,0,0,0,0,0,0,.001,.001,.001)}for(const u of Object.values(l))u.instanceMatrix.needsUpdate=!0}checkVehicleHits(){const t=this.game.vehicles?.playerVehicle;if(!t||Math.abs(t.speed)<2)return;const e=t.cfg.len,n={x:Math.sin(t.heading),z:Math.cos(t.heading)};for(const i of this.peds){if(i.state==="down")continue;const a=i.x-t.pos.x,r=i.z-t.pos.z,o=a*n.x+r*n.z,l=Math.abs(a*n.z-r*n.x);Math.abs(o)<e*.55&&l<t.cfg.wid*.55&&(i.state="down",i.downTimer=nt(5,8),i.heading=t.heading+nt(-1,1),this.game.onPedHit?.(i,t))}}anyInFront(t,e,n,i){const a=Math.sin(n),r=Math.cos(n);for(const o of this.peds){if(o.state==="down")continue;const l=o.x-t,c=o.z-e;if(Math.abs(l)>i||Math.abs(c)>i)continue;const h=Math.hypot(l,c);if(h<i&&(l*a+c*r)/Math.max(h,.001)>.55)return o}return null}nearest(t,e,n=3){let i=null,a=n;for(const r of this.peds){if(r.state==="down")continue;const o=Math.hypot(r.x-t,r.z-e);o<a&&(a=o,i=r)}return i}panic(t,e,n=25){for(const i of this.peds)Math.hypot(i.x-t,i.z-e)<n&&(i.fleeTimer=nt(2,4),i.heading=Math.atan2(i.x-t,i.z-e))}gather(t,e,n=18){for(const i of this.peds)if(this.peds.indexOf(i)%5===0&&Math.hypot(i.x-t,i.z-e)<n){const a=nt(0,re),r=nt(4,12);i.tx=t+Math.cos(a)*r,i.tz=e+Math.sin(a)*r,i.state="walk",i.wait=0,i.heading=Math.atan2(i.tx-i.x,i.tz-i.z)}}}const Pt=s=>document.getElementById(s),Ia={en:{startGame:"Start Game",newLife:"New life in Nova City",continue:"Continue",settings:"Settings",settingsCaption:"Video · audio · controls",chooseControls:"Choose how to play",pcMode:"PC mode",pcModeDesc:"Keyboard and mouse",phoneMode:"Phone mode",phoneModeDesc:"Touch controls",language:"Language",liveSimulation:"LIVE SIMULATION",menuKicker:"AN OPEN-WORLD LIFE SIMULATOR",menuTitle:"Your city.",menuTitleAccent:"Every life in it.",menuCopy:"A living metropolis of towers, traffic, weather and consequence. Walk it, drive it, fly it, or just watch the city breathe.",districts:"districts",vehicles:"vehicles",citizens:"citizens",liveSystems:"live systems",pcControls:"WASD move · Mouse look · E interact · Tab phone · M map · Esc pause",buildInfo:"WebGL · Procedural build",move:"Move",sprint:"Sprint",jump:"Jump",interact:"Interact",phone:"Phone",graphics:"Graphics quality",shadows:"Shadows",volume:"Master volume",invert:"Invert camera Y",timeOfDay:"Time of day",cameraFov:"Camera FOV",resetSave:"Reset save data",clearSave:"Clear save",applyClose:"Apply & Close",backCity:"Back to Nova City",system:"SYSTEM"},ru:{startGame:"Начать игру",newLife:"Новая жизнь в Нова-Сити",continue:"Продолжить",settings:"Настройки",settingsCaption:"Графика · звук · управление",chooseControls:"Выберите управление",pcMode:"Режим ПК",pcModeDesc:"Клавиатура и мышь",phoneMode:"Режим телефона",phoneModeDesc:"Сенсорное управление",language:"Язык",liveSimulation:"ЖИВАЯ СИМУЛЯЦИЯ",menuKicker:"СИМУЛЯТОР ЖИЗНИ В ОТКРЫТОМ МИРЕ",menuTitle:"Твой город.",menuTitleAccent:"Твоя история.",menuCopy:"Живой мегаполис с небоскрёбами, движением, погодой и последствиями. Гуляй, води, летай или наблюдай за городом.",districts:"районов",vehicles:"машин",citizens:"жителей",liveSystems:"систем",pcControls:"WASD движение · Мышь обзор · E действие · Tab телефон · M карта · Esc пауза",buildInfo:"WebGL · Процедурный мир",move:"Идти",sprint:"Бег",jump:"Прыжок",interact:"Действие",phone:"Телефон",graphics:"Качество графики",shadows:"Тени",volume:"Общая громкость",invert:"Обратить ось камеры Y",timeOfDay:"Время суток",cameraFov:"Поле зрения",resetSave:"Сбросить сохранение",clearSave:"Очистить",applyClose:"Применить и закрыть",backCity:"Вернуться в Нова-Сити",system:"СИСТЕМА"},zh:{startGame:"开始游戏",newLife:"在新星城开启新生活",continue:"继续游戏",settings:"设置",settingsCaption:"画面 · 音频 · 控制",chooseControls:"选择操作方式",pcMode:"电脑模式",pcModeDesc:"键盘和鼠标",phoneMode:"手机模式",phoneModeDesc:"触屏操作",language:"语言",liveSimulation:"城市实时模拟",menuKicker:"开放世界生活模拟器",menuTitle:"你的城市。",menuTitleAccent:"你的每一种人生。",menuCopy:"充满高楼、车流、天气与机遇的鲜活都市。步行、驾驶、飞行，或静静感受城市脉搏。",districts:"个城区",vehicles:"辆车辆",citizens:"位市民",liveSystems:"项动态系统",pcControls:"WASD 移动 · 鼠标视角 · E 互动 · Tab 手机 · M 地图 · Esc 暂停",buildInfo:"WebGL · 程序生成城市",move:"移动",sprint:"冲刺",jump:"跳跃",interact:"互动",phone:"手机",graphics:"画面质量",shadows:"阴影",volume:"主音量",invert:"反转镜头 Y 轴",timeOfDay:"时间",cameraFov:"视野范围",resetSave:"重置存档",clearSave:"清除存档",applyClose:"应用并关闭",backCity:"返回新星城",system:"系统"}},jc={downtown:"#26333f",midtown:"#34373a",industrial:"#3a3b36",suburb:"#2f3c2f",waterfront:"#2f4048",residential:"#333a3a",park:"#243d29",airport:"#39382f"};class Ev{constructor(t){this.game=t,this.el={loading:Pt("loading"),menu:Pt("menu"),hud:Pt("hud"),overlayRoot:Pt("overlay-root"),notifications:Pt("notifications"),prompt:Pt("prompt"),promptText:Pt("prompt-text"),vehicleHud:Pt("vehicle-hud"),speed:Pt("speed"),dial:Pt("dial-fill"),vehName:Pt("veh-name"),fuelBar:Pt("fuel-bar"),hullBar:Pt("hull-bar"),money:Pt("money"),wantedStars:Pt("wanted-stars"),wantedChip:Pt("wanted-chip"),clock:Pt("clock"),weather:Pt("weather-label"),temp:Pt("temp-label"),daybar:Pt("daybar"),district:Pt("district-label"),objective:Pt("objective"),objTitle:Pt("obj-title"),objSub:Pt("obj-sub"),objDist:Pt("obj-dist"),minimap:Pt("minimap"),fullmap:Pt("fullmap"),mapPos:Pt("map-pos"),fade:Pt("fade"),toast:Pt("toast"),phoneTime:Pt("phone-time"),phoneCash:Pt("phone-cash"),phoneWelcome:Pt("phone-welcome"),phonePulse:Pt("phone-pulse"),jobsList:Pt("jobs-list"),garageList:Pt("garage-list"),shopList:Pt("shop-list"),settingsList:Pt("settings-list"),phoneActions:Pt("phone-actions"),modal:Pt("modal-inner"),damageFlash:Pt("damage-flash"),weatherFx:Pt("weather-fx"),controlsHint:Pt("controls-hint")},this.notifications=[],this.overlay=null,this.mapCache=null,this.mapOpen=!1,this.wantedStars=["☆☆☆☆☆","★☆☆☆☆","★★☆☆☆","★★★☆☆","★★★★☆","★★★★★"],this.transit=null,this.gps=null,this.binding(),this.updateSettingsUI()}binding(){const t=this.game;Pt("btn-start").addEventListener("click",()=>{Pt("mode-picker").classList.toggle("hidden")}),document.querySelectorAll("[data-start-mode]").forEach(n=>{n.addEventListener("click",()=>{t.settings.mode=n.dataset.startMode,t.saveSettings(),t.startNewGame()})}),Pt("btn-continue").addEventListener("click",()=>t.continueGame()),Pt("btn-settings-menu").addEventListener("click",()=>this.openSettings()),Pt("btn-resume").addEventListener("click",()=>this.closeOverlay()),Pt("btn-pause-save").addEventListener("click",()=>{t.saveGame(),this.toast("Game saved to this browser")}),Pt("btn-pause-settings").addEventListener("click",()=>this.openSettings()),Pt("btn-pause-restart").addEventListener("click",()=>t.startNewGame()),Pt("btn-pause-menu").addEventListener("click",()=>t.returnToMenu()),document.querySelectorAll("[data-overlay]").forEach(n=>{n.addEventListener("click",()=>this.openOverlay(n.dataset.overlay))}),document.querySelectorAll("[data-close]").forEach(n=>n.addEventListener("click",()=>this.closeOverlay())),document.querySelectorAll(".phone-apps button").forEach(n=>{n.addEventListener("click",()=>this.switchPhoneTab(n.dataset.phoneTab))}),this.el.fullmap.addEventListener("click",n=>{const i=this.el.fullmap.getBoundingClientRect(),a=(n.clientX-i.left)/i.width*1400,r=(n.clientY-i.top)/i.height*1e3,o=(a-700)/1,l=(r-500)/1;this.gps={x:Ot(o,-650,700),z:Ot(l,-650,500)},t.gps=this.gps,this.drawFullMap(),this.toast("GPS waypoint set"),t.audio?.click()});const e=Pt("language-select");e&&(e.value=t.settings.language||"en",e.addEventListener("change",()=>{t.settings.language=e.value,this.applyLanguage(),t.saveSettings(),this.overlay==="settings"&&this.buildSettings(Pt("modal-settings")||Pt("settings-list"))})),this.bindTouchControls(),this.applyLanguage(),this.applyPlayMode(),document.addEventListener("keydown",n=>{n.key==="Escape"&&(this.overlay?(n.preventDefault(),this.closeOverlay()):this.game.mode!=="menu"&&(n.preventDefault(),this.game.togglePause()))})}applyPlayMode(){const t=this.game.settings.mode==="phone"?"phone":"pc";document.body.classList.toggle("mode-phone",t==="phone"),document.body.classList.toggle("mode-pc",t==="pc")}applyLanguage(){const t=Ia[this.game.settings.language]?this.game.settings.language:"en";this.game.settings.language=t,document.documentElement.lang=t;const e=Ia[t];document.querySelectorAll("[data-i18n]").forEach(i=>{const a=i.dataset.i18n;e[a]&&(i.textContent=e[a])});const n=Pt("language-select");n&&(n.value=t)}bindTouchControls(){const t=Pt("touch-stick"),e=Pt("touch-stick-thumb");if(!t)return;const n=o=>{const l=t.getBoundingClientRect(),c=o.touches?.[0]||o;let h=(c.clientX-(l.left+l.width/2))/(l.width/2),d=(c.clientY-(l.top+l.height/2))/(l.height/2);const f=Math.hypot(h,d);f>1&&(h/=f,d/=f),this.game.touch.x=h,this.game.touch.y=d,e&&(e.style.transform=`translate(${h*28}px, ${d*28}px)`)},i=()=>{this.game.touch.x=0,this.game.touch.y=0,this.game.touch.sprint=!1,e&&(e.style.transform="")};t.addEventListener("pointerdown",o=>{t.setPointerCapture?.(o.pointerId),n(o)}),t.addEventListener("pointermove",o=>{(o.buttons||o.pointerType==="touch")&&n(o)}),t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i);const a=Pt("look-stick"),r=Pt("look-stick-thumb");if(a){const o=c=>{const h=a.getBoundingClientRect();let d=(c.clientX-(h.left+h.width/2))/(h.width/2),f=(c.clientY-(h.top+h.height/2))/(h.height/2);const u=Math.hypot(d,f);u>1&&(d/=u,f/=u),this.game.touch.lookX=d,this.game.touch.lookY=f,r&&(r.style.transform=`translate(${d*28}px, ${f*28}px)`)},l=()=>{this.game.touch.lookX=0,this.game.touch.lookY=0,r&&(r.style.transform="")};a.addEventListener("pointerdown",c=>{a.setPointerCapture?.(c.pointerId),o(c)}),a.addEventListener("pointermove",c=>{(c.buttons||c.pointerType==="touch")&&o(c)}),a.addEventListener("pointerup",l),a.addEventListener("pointercancel",l),a.addEventListener("lostpointercapture",l)}document.querySelectorAll("[data-touch-action]").forEach(o=>{const l=o.dataset.touchAction,c=d=>{d.preventDefault(),l==="map"?this.game.toggleOverlay("map"):l==="phone"?this.game.toggleOverlay("phone"):l==="interact"?this.game.interact():l==="exit"?this.game.exitVehicle():l==="jump"?this.game.touch.jump=!0:l==="sprint"?this.game.touch.sprint=!0:l==="throttle"?(this.game.touch.brake=!1,this.game.touch.throttle=!0):l==="brake"&&(this.game.touch.throttle=!1,this.game.touch.brake=!0)},h=d=>{d.preventDefault(),l==="jump"&&(this.game.touch.jump=!1),l==="sprint"&&(this.game.touch.sprint=!1),l==="throttle"&&(this.game.touch.throttle=!1),l==="brake"&&(this.game.touch.brake=!1)};o.addEventListener("pointerdown",c),o.addEventListener("pointerup",h),o.addEventListener("pointercancel",h),o.addEventListener("lostpointercapture",h),o.addEventListener("pointerleave",d=>{d.buttons&&h(d)})})}hideLoading(){this.el.loading.classList.add("out"),setTimeout(()=>this.el.loading.classList.add("hidden"),900)}showMenu(){document.body.classList.remove("game-playing","ui-overlay-open"),this.el.menu.classList.remove("hidden"),requestAnimationFrame(()=>this.el.menu.classList.add("on")),this.el.hud.classList.add("hidden"),this.el.overlayRoot.classList.add("hidden");const t=localStorage.getItem("novacity-save-v1"),e=Pt("btn-continue");e.disabled=!t,Pt("continue-meta").textContent=t?"Return to your saved life":"No saved city yet",this.el.menu.querySelectorAll(".menu-stats b")[0].textContent="9"}hideMenu(){this.applyPlayMode(),document.body.classList.add("game-playing"),this.el.menu.classList.remove("on"),setTimeout(()=>this.el.menu.classList.add("hidden"),700),this.el.hud.classList.remove("hidden")}showHUD(){this.el.hud.classList.remove("hidden")}notify(t,e=""){this.notifications.length>5&&this.notifications.shift();const n=document.createElement("div");for(n.className="notification "+e,n.textContent=t,this.el.notifications.appendChild(n),this.notifications.push(n);this.el.notifications.children.length>6;)this.el.notifications.firstChild.remove();setTimeout(()=>{n.style.transition="opacity .4s, transform .4s",n.style.opacity="0",n.style.transform="translateX(-10px)",setTimeout(()=>n.remove(),450)},5200);const i=this.notifications.indexOf(n);i>=0&&this.notifications.splice(i,1)}toast(t){this.el.toast.textContent=t,this.el.toast.classList.remove("hidden"),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this.el.toast.classList.add("hidden"),1800)}setPrompt(t){if(!t){this.el.prompt.classList.add("hidden");return}this.el.promptText.textContent=t,this.el.prompt.classList.remove("hidden")}updateMoney(){this.el.money.textContent=Math.round(this.game.money).toLocaleString("en-US"),this.el.phoneCash.textContent=Rn(this.game.money)}updateWanted(){const t=this.game.wanted?.level||0;this.el.wantedStars.textContent=this.wantedStars[t],this.el.wantedChip.classList.toggle("alert",t>0),this.el.wantedChip.classList.toggle("dim",t===0)}updateHUD(t){const e=this.game;if(!e.player)return;const n=e.hour;this.el.clock.textContent=kr(n),this.el.phoneTime.textContent=kr(n),this.el.weather.textContent={clear:"Clear",rain:"Rain",storm:"Thunderstorm",snow:"Snow",fog:"Fog"}[e.weather]||"Clear",this.el.temp.textContent=`${Math.round(e.temperature)}°C`,this.el.daybar.style.width=`${(n/24*100).toFixed(0)}%`,this.el.district.textContent=e.city.districtAt(e.player.pos.x,e.player.pos.z).toUpperCase();const i=!!e.vehicles.playerVehicle;if(document.body.classList.toggle("phone-driving",i),e.vehicles.playerVehicle){const a=e.vehicles.playerVehicle;this.el.vehicleHud.classList.remove("hidden"),this.el.speed.textContent=Math.round(a.speedKmh);const r=Ot(Math.abs(a.speed)/a.cfg.maxSpeed,0,1);this.el.dial.style.strokeDashoffset=String(283-283*r*.97),this.el.dial.style.stroke=r>.82?"#ffb457":"#5be0ff",this.el.vehName.textContent=a.cfg.klass+" · "+(a.engineOn?"RUNNING":"OFF"),this.el.fuelBar.style.width=`${Ot(a.fuel/a.cfg.fuel*100,0,100)}%`,this.el.hullBar.style.width=`${a.health}%`,this.el.fuelBar.classList.toggle("low",a.fuel/a.cfg.fuel<.18),this.el.hullBar.classList.toggle("low",a.health<30),this.el.controlsHint.classList.add("hidden"),this.transit||this.el.vehicleHud.classList.remove("hidden")}else this.el.vehicleHud.classList.add("hidden"),this.el.controlsHint.classList.remove("hidden");e.player.firstPerson&&!e.vehicles.playerVehicle?this.el.controlsHint.classList.add("hidden"):e.vehicles.playerVehicle||this.el.controlsHint.classList.remove("hidden"),this.drawMinimap(t),this.overlay==="map"&&this.mapOpen}drawMinimap(t){const e=this.el.minimap;if(!e)return;const n=e.getContext("2d"),i=this.game,a=i.player,r=e.width,o=e.height,l=2.15;n.clearRect(0,0,r,o),n.save(),n.translate(r/2,o/2),n.fillStyle="#111922",n.fillRect(-r/2,-o/2,r,o);const c=(p,x)=>[(p-a.pos.x)*l,(x-a.pos.z)*l],[h,d]=c(0,490);d<o/2&&(n.fillStyle="#0e3547",n.fillRect(-r/2,d,r,o/2-d));for(const p of i.city.blocks){const[x,m]=c(p.x,p.z);if(Math.abs(x)>r/2+60||Math.abs(m)>o/2+60)continue;const g=68*l;n.fillStyle=jc[p.district]||"#2c3238",n.fillRect(x-g/2,m-g/2,g,g),p.isPark&&(n.fillStyle="#2f5034",n.fillRect(x-g/2,m-g/2,g,g))}n.strokeStyle="rgba(140,160,175,.32)",n.lineWidth=8*l*.45;for(let p=0;p<9;p++){const x=c(ie(p),-ke),m=c(ie(p),ke);n.beginPath(),n.moveTo(x[0],x[1]),n.lineTo(m[0],m[1]),n.stroke();const g=c(-ke,ie(p)),M=c(ke,ie(p));n.beginPath(),n.moveTo(g[0],g[1]),n.lineTo(M[0],M[1]),n.stroke()}const f=i.city.pois.filter(p=>Math.hypot(p.x-a.pos.x,p.z-a.pos.z)<140);for(const p of f){const[x,m]=c(p.x,p.z);n.fillStyle=this.poiColor(p.type),n.beginPath(),n.arc(x,m,4.2,0,Math.PI*2),n.fill()}for(const p of i.events?.mapMarkers()||[]){const[x,m]=c(p.x,p.z);Math.abs(x)>r/2||Math.abs(m)>o/2||(n.fillStyle=p.type==="fire"?"#ff5b2a":"#ffb457",n.beginPath(),n.arc(x,m,5,0,Math.PI*2),n.fill())}if(i.jobs.current){const p=i.jobs.current.stage==="pickup"?i.jobs.current.pickup:i.jobs.current.dropoff,[x,m]=c(p.x,p.z);n.fillStyle="#ffb457",n.beginPath(),n.arc(x,m,5.5,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,180,87,.5)",n.lineWidth=2,n.beginPath(),n.arc(x,m,10,0,Math.PI*2),n.stroke()}if(this.gps){const[p,x]=c(this.gps.x,this.gps.z);n.strokeStyle="#5be0ff",n.lineWidth=2,n.setLineDash([4,4]),n.beginPath(),n.moveTo(0,0),n.lineTo(p,x),n.stroke(),n.setLineDash([]),n.fillStyle="#5be0ff",n.beginPath(),n.arc(p,x,4,0,Math.PI*2),n.fill()}if(i.vehicles)for(const p of i.vehicles.vehicles){const[x,m]=c(p.pos.x,p.pos.z);Math.abs(x)>r/2||Math.abs(m)>o/2||p!==i.vehicles.playerVehicle&&(n.fillStyle=p.service?p.service==="police"?"#5b8fff":p.service==="fire"?"#ff5b5b":"#ffffff":"rgba(200,220,240,.42)",n.fillRect(x-2,m-2,4,4))}n.save(),n.rotate(-i.player.heading+Math.PI),n.fillStyle="#5be0ff",n.shadowColor="#5be0ff",n.shadowBlur=10,n.beginPath(),n.moveTo(0,8),n.lineTo(-5,-6),n.lineTo(0,-3),n.lineTo(5,-6),n.closePath(),n.fill(),n.restore(),n.restore();const u=n.createRadialGradient(r/2,o/2,r*.34,r/2,o/2,r*.5);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(5,9,15,.72)"),n.fillStyle=u,n.fillRect(0,0,r,o)}poiColor(t){return{police:"#5b8fff",fire:"#ff5b5b",hospital:"#63f0d0",garage:"#ffb457",dealership:"#5be0ff",shop:"#9be36b",apartment:"#e8d28a",metro:"#b18cff",monorail:"#b18cff",train:"#b18cff",park:"#63f0b0",marina:"#5bc8ff",airport:"#d7eaff",hotel:"#ffcf7a",office:"#8fa8c0"}[t]||"#c8d8e8"}buildMapCache(){if(this.mapCache)return;const t=document.createElement("canvas");t.width=1400,t.height=1e3;const e=t.getContext("2d"),n=this.game;e.fillStyle="#0b121b",e.fillRect(0,0,1400,1e3);const i=(r,o)=>[r+700,o+500];e.fillStyle="#0d2c3d",e.fillRect(0,986,1400,200),e.fillStyle="#3b4330",e.fillRect(0,0,1400,1e3);const a=80;for(const r of n.city.blocks){const[o,l]=i(r.x,r.z);e.fillStyle=r.isPark?"#24472c":jc[r.district]||"#2f353b",e.fillRect(o-a/2,l-a/2,a,a),r.district==="downtown"&&(e.fillStyle="rgba(180,210,235,.09)",e.fillRect(o-20,l-20,40,40))}e.strokeStyle="#4a5259",e.lineWidth=15,e.lineCap="butt";for(let r=0;r<9;r++){let[o,l]=i(ie(r),-ke);e.beginPath(),e.moveTo(o,l),e.lineTo(o,l+2*ke),e.stroke();let[c,h]=i(-ke,ie(r));e.beginPath(),e.moveTo(c,h),e.lineTo(c+2*ke,h),e.stroke()}e.strokeStyle="rgba(230,230,210,.18)",e.lineWidth=1,e.setLineDash([6,8]);for(let r=0;r<9;r++){let[o,l]=i(ie(r),-ke);e.beginPath(),e.moveTo(o,l),e.lineTo(o,l+2*ke),e.stroke();let[c,h]=i(-ke,ie(r));e.beginPath(),e.moveTo(c,h),e.lineTo(c+2*ke,h),e.stroke()}e.setLineDash([]),e.strokeStyle="rgba(177,140,255,.4)",e.lineWidth=3,e.strokeRect(450,250,500,500),e.strokeStyle="rgba(220,180,90,.5)",e.lineWidth=4,e.beginPath(),e.moveTo(0,54),e.lineTo(1400,54),e.stroke(),e.strokeStyle="#5d5d5d",e.lineWidth=26,e.beginPath(),e.moveTo(1370,340),e.lineTo(1370,660),e.stroke(),e.strokeStyle="rgba(255,255,255,.35)",e.lineWidth=2,e.setLineDash([10,12]),e.beginPath(),e.moveTo(1370,340),e.lineTo(1370,660),e.stroke(),e.setLineDash([]),e.fillStyle="rgba(190,215,240,.28)",e.font="600 11px Inter, sans-serif",e.textAlign="center",e.fillText("DOWNTOWN",700,490),e.fillText("INDUSTRIAL",500,185),e.fillText("PINE HILLS",1080,430),e.fillText("WEST END",250,560),e.fillText("HARBORFRONT",700,905);for(const r of n.city.pois){const[o,l]=i(r.x,r.z);e.fillStyle=this.poiColor(r.type),e.beginPath(),e.arc(o,l,6,0,Math.PI*2),e.fill(),e.fillStyle="rgba(220,238,255,.7)",e.font="500 9px Inter, sans-serif",e.fillText(r.name.toUpperCase(),o,l-10)}this.mapCache=t}drawFullMap(){this.buildMapCache();const e=this.el.fullmap.getContext("2d");e.drawImage(this.mapCache,0,0);const n=this.game,i=(o,l)=>[o+700,l+500];for(const o of n.city.monorail.stations){const[l,c]=i(o.x,o.z);e.strokeStyle="#b18cff",e.lineWidth=3,e.beginPath(),e.arc(l,c,9,0,Math.PI*2),e.stroke(),e.fillStyle="#b18cff",e.font="600 10px Inter, sans-serif",e.textAlign="center",e.fillText("M",l,c+4)}for(const o of n.events.mapMarkers()){const[l,c]=i(o.x,o.z);e.fillStyle=o.type==="fire"?"#ff5b2a":"#ffb457",e.beginPath(),e.arc(l,c,8,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,180,87,.4)",e.lineWidth=2,e.beginPath(),e.arc(l,c,15+Math.sin(performance.now()*.003)*3,0,Math.PI*2),e.stroke()}if(n.jobs.current){const o=n.jobs.current.stage==="pickup"?n.jobs.current.pickup:n.jobs.current.dropoff,[l,c]=i(o.x,o.z);e.fillStyle="#ffb457",e.beginPath(),e.arc(l,c,10,0,Math.PI*2),e.fill(),e.fillStyle="#0a1018",e.font="700 12px Inter",e.textAlign="center",e.fillText("!",l,c+4)}if(this.gps){const[o,l]=i(this.gps.x,this.gps.z);e.strokeStyle="#5be0ff",e.lineWidth=2,e.setLineDash([8,8]);const[c,h]=i(n.player.pos.x,n.player.pos.z);e.beginPath(),e.moveTo(c,h),e.lineTo(o,l),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(o,l,7,0,Math.PI*2),e.fillStyle="#5be0ff",e.fill()}const[a,r]=i(n.player.pos.x,n.player.pos.z);e.save(),e.translate(a,r),e.rotate(-n.player.heading+Math.PI),e.fillStyle="#5be0ff",e.shadowColor="#5be0ff",e.shadowBlur=16,e.beginPath(),e.moveTo(0,14),e.lineTo(-9,-9),e.lineTo(0,-4),e.lineTo(9,-9),e.closePath(),e.fill(),e.restore(),this.el.mapPos.textContent=`${Math.round(n.player.pos.x)}, ${Math.round(n.player.pos.z)} · ${n.city.districtAt(n.player.pos.x,n.player.pos.z)}`}openOverlay(t){if(!t)return;this.overlay=t,document.body.classList.add("ui-overlay-open"),this.el.overlayRoot.classList.remove("hidden"),this.el.overlayRoot.querySelectorAll(".overlay-panel").forEach(n=>n.classList.add("hidden"));const e=this.el.overlayRoot.querySelector(`[data-panel="${t}"]`);e&&e.classList.remove("hidden"),t==="phone"&&this.refreshPhone(),t==="map"&&(this.mapOpen=!0,this.drawFullMap()),t==="pause"&&(this.game.paused=!0),t!=="pause"&&(this.game.paused=!0),this.game.audio?.click(),document.pointerLockElement&&document.exitPointerLock()}closeOverlay(){this.overlay=null,this.mapOpen=!1,document.body.classList.remove("ui-overlay-open"),this.el.overlayRoot.classList.add("hidden"),this.game.paused=!1,this.game.touch.x=0,this.game.touch.y=0,this.game.touch.sprint=!1,this.game.touch.jump=!1,this.game.keys.clear(),this.game.audio?.click()}openSettings(){this.openOverlay("modal"),this.el.overlayRoot.querySelector('[data-panel="phone"]')?.classList.add("hidden"),this.el.overlayRoot.querySelector('[data-panel="modal"]')?.classList.remove("hidden"),this.el.modal.innerHTML=`
      <div class="kicker">SYSTEM</div><h2>Settings</h2>
      <div class="modal-body"><div id="modal-settings" class="settings-list"></div></div>
      <div class="modal-actions"><button id="modal-close-btn" class="btn primary"><span>Apply & Close</span><small>Back to Nova City</small></button></div>`,this.buildSettings(Pt("modal-settings")),Pt("modal-close-btn").addEventListener("click",()=>{this.closeOverlay(),this.updateSettingsUI()}),this.overlay="settings"}switchPhoneTab(t){document.querySelectorAll(".phone-apps button").forEach(e=>e.classList.toggle("active",e.dataset.phoneTab===t));for(const e of["home","jobs","garage","shop","settings"])Pt("phone-"+e).classList.toggle("hidden",e!==t);t==="jobs"&&this.refreshJobs(),t==="garage"&&this.refreshGarage(),t==="shop"&&this.refreshShop(),t==="settings"&&this.buildSettings(Pt("settings-list")),this.game.audio?.click()}refreshPhone(){const t=this.game;this.updateMoney(),t.jobs.current?this.el.phoneWelcome.textContent=`${t.jobs.current.title} · ${t.jobs.current.stage==="pickup"?"Pick up cargo":"Deliver to destination"}`:this.el.phoneWelcome.textContent="The city is awake. Find work, buy a car, or just drive.";const e=this.el.phonePulse;e.innerHTML=`
      <div><span>Wanted</span><b>${this.wantedStars[t.wanted.level]}</b></div>
      <div><span>Weather</span><b>${t.weather.toUpperCase()}</b></div>
      <div><span>Time</span><b>${kr(t.hour)}</b></div>
      <div><span>Active events</span><b>${t.events.events.filter(i=>i.active).length}</b></div>
      <div><span>Owned vehicles</span><b>${t.ownedVehicles.length}</b></div>`;const n=this.el.phoneActions;n.innerHTML=`
      <button data-phone-action="job">Find work</button>
      <button data-phone-action="garage">Track vehicle</button>
      <button data-phone-action="map">Open city map</button>
      <button data-phone-action="save">Save game</button>`,n.querySelectorAll("[data-phone-action]").forEach(i=>i.addEventListener("click",()=>{const a=i.dataset.phoneAction;a==="map"?this.openOverlay("map"):a==="save"?(t.saveGame(),this.toast("Game saved")):a==="job"?this.switchPhoneTab("jobs"):a==="garage"&&this.switchPhoneTab("garage")})),this.switchPhoneTab("home")}refreshJobs(){const t=this.game,e=t.jobs.offers.map(n=>`
      <div class="list-item">
        <div class="li-top"><b>${n.title}</b><span class="price">${Rn(n.pay)}</span></div>
        <p>${n.desc}</p>
        <div class="meta">${n.pickupName} → ${n.dropName}${n.require?" · requires "+n.require[0]:""}</div>
        <div class="li-row"><span class="meta">${t.jobs.current?"Job active":"Available now"}</span>
        <button class="act" data-job="${n.uid}" ${t.jobs.current?"disabled":""}>Accept job</button></div>
      </div>`).join("");this.el.jobsList.innerHTML=e,this.el.jobsList.querySelectorAll("[data-job]").forEach(n=>n.addEventListener("click",()=>{t.jobs.start(n.dataset.job),this.refreshJobs(),this.closeOverlay()}))}refreshGarage(){const t=this.game,e=t.ownedVehicles;let n="";e.length||(n='<div class="list-item"><p>No owned vehicles. Visit Nova Motors to buy one, or find a car in the city.</p></div>');for(const[i,a]of e.entries()){const r=a;n+=`<div class="list-item">
        <div class="li-top"><b>${r.name}</b><span class="price">${Rn(r.price)}</span></div>
        <p>${r.klass} · max ${Math.round(r.maxSpeed*3.6)} km/h · ${r.seats} seats</p>
        <div class="li-row"><span class="meta">${r.fuel} L tank</span><button class="act" data-track="${i}">Track & recall</button></div>
      </div>`}this.el.garageList.innerHTML=n,this.el.garageList.querySelectorAll("[data-track]").forEach(i=>i.addEventListener("click",()=>{t.recallVehicle(parseInt(i.dataset.track)),this.closeOverlay()}))}refreshShop(){const t=[{id:"coffee",name:"Coffee",desc:"A small pick-me-up while exploring.",price:6},{id:"sandwich",name:"Deli sandwich",desc:"Restores a little health.",price:12},{id:"medkit",name:"First aid kit",desc:"Restores full health.",price:45},{id:"fuelcan",name:"Fuel can (20 L)",desc:"Refuel your current vehicle.",price:32},{id:"jacket",name:"Nova field jacket",desc:"Change your jacket color.",price:60},{id:"pants",name:"Utility trousers",desc:"Change your trousers.",price:45},{id:"metrocard",name:"Metro pass",desc:"Five metro rides, no fare.",price:25}];this.el.shopList.innerHTML=t.map(e=>`
      <div class="list-item"><div class="li-top"><b>${e.name}</b><span class="price">${Rn(e.price)}</span></div>
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
      <div class="setting-row"><span>${Ia[this.game.settings.language]?.language||"Language"}</span><select data-set="language">
        <option value="en" ${e.language==="en"?"selected":""}>English</option>
        <option value="ru" ${e.language==="ru"?"selected":""}>Русский</option>
        <option value="zh" ${e.language==="zh"?"selected":""}>中文</option>
      </select></div>
      <div class="setting-row"><span>${Ia[this.game.settings.language]?.chooseControls||"Play mode"}</span><select data-set="mode">
        <option value="pc" ${e.mode==="pc"?"selected":""}>PC</option>
        <option value="phone" ${e.mode==="phone"?"selected":""}>Phone</option>
      </select></div>
      <div class="setting-row"><span>Reset save data</span><button data-reset="1">Clear save</button></div>`,t.querySelectorAll("[data-set]").forEach(n=>{n.addEventListener("change",()=>{const i=n.dataset.set;i==="quality"&&this.game.setQuality(n.value),i==="shadows"&&(this.game.settings.shadows=n.value==="on"),i==="volume"&&(this.game.settings.volume=parseInt(n.value)/100,this.game.audio?.setVolume(this.game.settings.volume)),i==="invert"&&(this.game.settings.invert=n.value==="yes"),i==="time"&&this.game.setTimeOfDay(n.value),i==="fov"&&(this.game.settings.fov=parseInt(n.value),this.game.camera.fov=parseInt(n.value),this.game.camera.updateProjectionMatrix()),i==="language"&&(this.game.settings.language=n.value,this.applyLanguage()),i==="mode"&&(this.game.settings.mode=n.value==="phone"?"phone":"pc",this.applyPlayMode()),this.game.saveSettings(),i==="language"&&this.buildSettings(t),this.game.audio?.click()}),n.type==="range"&&n.addEventListener("input",()=>{const i=n.dataset.set;i==="volume"&&(this.game.settings.volume=parseInt(n.value)/100,this.game.audio?.setVolume(this.game.settings.volume)),i==="fov"&&(this.game.settings.fov=parseInt(n.value),this.game.camera.fov=parseInt(n.value),this.game.camera.updateProjectionMatrix()),this.game.saveSettings()})}),t.querySelector("[data-reset]")?.addEventListener("click",()=>{localStorage.removeItem("novacity-save-v1"),this.toast("Save data cleared"),this.showMenu(),this.closeOverlay()})}updateSettingsUI(){const t=this.game.settings;this.game.audio?.setVolume(t.volume)}showObjective(){this.el.objective.classList.remove("hidden")}hideObjective(){this.el.objective.classList.add("hidden")}updateObjective(t,e){t&&(this.el.objTitle.textContent=t.stage==="pickup"?t.title:"Deliver to "+t.dropName,this.el.objSub.textContent=t.stage==="pickup"?"Pick up · "+t.pickupName:"Drop off · "+t.dropName,this.el.objDist.textContent=Math.round(e)+" m away · "+Rn(t.pay),this.showObjective())}showTransit(t,e,n){if(!this.transit){const i=document.createElement("div");i.className="transit-hud glass",i.innerHTML=`<div class="tr-line" id="tr-line">MONORAIL</div><div class="tr-route" id="tr-route">Aurora Loop</div>
        <div class="tr-main"><b id="tr-speed">0</b><span>km/h</span></div>
        <div class="tr-mode" id="tr-mode">Automatic</div>
        <div class="tr-hint" id="tr-hint">E exit · T manual</div>`,this.el.hud.appendChild(i),this.transit=i,i.style.cssText="position:absolute;left:50%;bottom:26px;transform:translateX(-50%);padding:12px 22px;border-radius:14px;text-align:center;min-width:200px;"}this.transit.classList.remove("hidden"),Pt("tr-line").textContent=t,Pt("tr-route").textContent=e,Pt("tr-mode").textContent=n,n.includes("Manual")?Pt("tr-hint").textContent="W/S throttle · Space brake · T auto · E exit":Pt("tr-hint").textContent="E exit at station · T manual control",this.el.vehicleHud.classList.add("hidden")}updateTransitSpeed(t,e){this.transit&&(Pt("tr-speed").textContent=Math.round(Math.abs(t)*3.6),Pt("tr-mode").textContent=e)}updateTransitMode(t,e){this.transit&&(Pt("tr-mode").textContent=t,e&&(Pt("tr-hint").textContent=e))}hideTransit(){this.transit&&(this.transit.remove(),this.transit=null)}showModal({kicker:t="NOVA CITY",title:e="",body:n="",actions:i=[]}){this.openOverlay("modal"),this.el.modal.innerHTML=`<div class="kicker">${t}</div><h2>${e}</h2><div class="modal-body">${n}</div><div class="modal-actions" id="modal-actions"></div>`;const a=Pt("modal-actions");for(const r of i){const o=document.createElement("button");o.className="btn "+(r.primary?"primary":"ghost"),o.innerHTML=`<span>${r.label}</span>${r.sub?`<small>${r.sub}</small>`:""}`,o.addEventListener("click",()=>{r.onClick?.()}),a.appendChild(o)}this.overlay="modal"}showBusted(){this.toast("BUSTED — NCPD impounded your vehicle"),this.el.damageFlash.classList.add("on"),setTimeout(()=>this.el.damageFlash.classList.remove("on"),900)}setWeatherFx(t){this.el.weatherFx.className="weather-fx",(t==="rain"||t==="storm")&&this.el.weatherFx.classList.add("rain"),t==="snow"&&this.el.weatherFx.classList.add("snow")}damageFlash(){this.el.damageFlash.classList.add("on"),clearTimeout(this.damageTimer),this.damageTimer=setTimeout(()=>this.el.damageFlash.classList.remove("on"),140)}}class Da{constructor(t,e,n){this.capacity=e,this.parts=[];const i=new Ie;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.alpha=new Float32Array(e),this.size=new Float32Array(e),i.setAttribute("position",new Xe(this.pos,3)),i.setAttribute("aColor",new Xe(this.col,3)),i.setAttribute("aAlpha",new Xe(this.alpha,1)),i.setAttribute("aSize",new Xe(this.size,1));const a=new Hn({transparent:!0,depthWrite:!1,blending:n?kn:Ti,uniforms:{},vertexShader:`
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
        }`});this.points=new rs(i,a),this.points.frustumCulled=!1,t.add(this.points);for(let r=0;r<e;r++)this.parts.push({alive:!1,life:0,maxLife:1,x:0,y:-999,z:0,vx:0,vy:0,vz:0,size:1,grow:0,color:new Kt,gravity:0,drag:.98})}spawn(t,e,n,i={}){let a=this.parts.find(r=>!r.alive);return a||(a=this.parts[Math.random()*this.capacity|0]),a.alive=!0,a.x=t,a.y=e,a.z=n,a.vx=i.vx??nt(-.6,.6),a.vy=i.vy??nt(.6,2.2),a.vz=i.vz??nt(-.6,.6),a.life=a.maxLife=i.life??nt(.8,2.2),a.size=i.size??nt(1,3),a.grow=i.grow??1.2,a.gravity=i.gravity??0,a.drag=i.drag??.97,a.color.set(i.color??12105912),a}update(t){for(let n=0;n<this.capacity;n++){const i=this.parts[n];if(!i.alive){this.alpha[n]=0,this.pos[n*3+1]=-999;continue}if(i.life-=t,i.life<=0){i.alive=!1,this.alpha[n]=0,this.pos[n*3+1]=-999;continue}i.vy-=i.gravity*t,i.vx*=Math.pow(i.drag,t*60),i.vz*=Math.pow(i.drag,t*60),i.vy*=Math.pow(i.drag,t*60),i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.size+=i.grow*t,this.pos[n*3]=i.x,this.pos[n*3+1]=i.y,this.pos[n*3+2]=i.z,this.col[n*3]=i.color.r,this.col[n*3+1]=i.color.g,this.col[n*3+2]=i.color.b,this.alpha[n]=i.life/i.maxLife*Tv(i),this.size[n]=i.size}const e=this.points.geometry;e.attributes.position.needsUpdate=!0,e.attributes.aColor.needsUpdate=!0,e.attributes.aAlpha.needsUpdate=!0,e.attributes.aSize.needsUpdate=!0}}function Tv(s){return Math.min(1,s.maxLife>.5?.82:.95)}class Av{constructor(t){this.scene=t,this.smoke=new Da(t,420,!1),this.sparks=new Da(t,260,!0),this.fire=new Da(t,320,!0),this.rain=null,this.lightningTimer=8,this.flash=0,this.sirens=[],this.wakes=new Da(t,200,!1),this.wakes.points.material.blending=Ti}spawnSmoke(t,e,n,i=1,a=9409176,r=2){for(let o=0;o<i;o++)this.smoke.spawn(t+nt(-.4,.4),e,n+nt(-.4,.4),{color:a,size:r+nt(0,1.4),grow:1.6,life:nt(1.4,3.4),vy:nt(.6,2),drag:.96})}smokeAtVehicle(t,e){if(t.smokeAcc===void 0&&(t.smokeAcc=0),t.smokeAcc+=e,t.health<55&&t.smokeAcc>.1){t.smokeAcc=0;const n=t.group.position;this.spawnSmoke(n.x,n.y+t.cfg.height*.7,n.z,1,t.health<25?2829099:10132122,t.health<25?3:1.8),t.health<20&&Math.random()<.3&&this.sparks.spawn(n.x,n.y+.8,n.z,{color:16743210,size:1.2,life:.5,vy:nt(.4,1.6),vx:nt(-1,1),vz:nt(-1,1),gravity:2})}}sparksAt(t,e,n,i=12,a=16757575){for(let r=0;r<i;r++)this.sparks.spawn(t,e,n,{color:a,size:nt(.5,1.4),life:nt(.25,.9),grow:-.2,vx:nt(-4,4),vy:nt(1,5),vz:nt(-4,4),gravity:9,drag:.98})}fireAt(t,e,n,i=1){this.fire.spawn(t+nt(-1,1)*i,e+nt(0,1.5)*i,n+nt(-1,1)*i,{color:_e([16743204,16757575,16730654,16765802]),size:nt(2,4)*i,grow:2.2,life:nt(.4,1.1),vy:nt(1.6,4.2),vx:nt(-.6,.6),vz:nt(-.6,.6),drag:.94}),Math.random()<.25&&this.spawnSmoke(t,e+3,n,1,3026478,4*i)}debris(t,e,n,i=10){for(let a=0;a<i;a++)this.sparks.spawn(t,e,n,{color:_e([5593951,9408917,4014662,10189906]),size:nt(.8,2.2),life:nt(.8,2),vx:nt(-5,5),vy:nt(2,7),vz:nt(-5,5),gravity:12,drag:.99})}explosion(t,e,n){this.sparksAt(t,e,n,60,16753979),this.sparksAt(t,e,n,30,16769674);for(let i=0;i<20;i++)this.spawnSmoke(t+nt(-2,2),e+1,n+nt(-2,2),1,2763306,5);for(let i=0;i<24;i++)this.fireAt(t,e,n,2);this.debris(t,e+1,n,20)}setWeather(t){if(this.rain&&(this.scene.remove(this.rain),this.rain.geometry.dispose(),this.rain=null),t==="rain"||t==="storm"){const n=new Ie,i=new Float32Array(1600*6);for(let r=0;r<1600;r++){const o=nt(-80,80),l=nt(0,65),c=nt(-80,80);i[r*6]=o,i[r*6+1]=l,i[r*6+2]=c,i[r*6+3]=o+.4,i[r*6+4]=l+2.4,i[r*6+5]=c}n.setAttribute("position",new Xe(i,3));const a=new Dh({color:12113134,transparent:!0,opacity:t==="storm"?.42:.28});this.rain=new zu(n,a),this.rain.frustumCulled=!1,this.scene.add(this.rain)}else if(t==="snow"){const n=new Ie,i=new Float32Array(1800*3);for(let r=0;r<1800;r++)i[r*3]=nt(-70,70),i[r*3+1]=nt(0,55),i[r*3+2]=nt(-70,70);n.setAttribute("position",new Xe(i,3));const a=new as({color:16777215,size:.55,transparent:!0,opacity:.8,depthWrite:!1});this.rain=new rs(n,a),this.rain.frustumCulled=!1,this.scene.add(this.rain)}this.weatherKind=t}update(t,e,n,i){if(this.smoke.update(t),this.sparks.update(t),this.fire.update(t),this.wakes.update(t),this.rain&&n){const a=this.rain.geometry.attributes.position,r=a.array,o=this.weatherKind==="rain"||this.weatherKind==="storm",l=this.weatherKind==="storm"?58:38,c=o?6:3;for(let h=0;h<r.length;h+=c)r[h+1]-=l*t,r[h+1]<-2&&(r[h]=n.x+nt(-65,65),r[h+2]=n.z+nt(-65,65),r[h+1]=55,o&&(r[h+3]=r[h]+.4,r[h+4]=r[h+1]+2.4,r[h+5]=r[h+2])),o&&(r[h+3]=r[h]+.4,r[h+4]=r[h+1]+2.4,r[h+5]=r[h+2]);this.rain.position.set(n.x,0,n.z),a.needsUpdate=!0}i==="storm"&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=nt(6,18),this.flash=1),this.flash>0&&(this.flash-=t*3.5))}}class Rv{constructor(){this.ctx=null,this.enabled=!0,this.engine=null,this.engineTarget=0,this.siren=null,this.rainGain=null,this.ambienceGain=null,this.master=null,this.t=0,this.lastHorn=0,this.ready=!1}ensure(){if(!this.ctx)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55;const e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.knee.value=18,e.ratio.value=4,this.master.connect(e),e.connect(this.ctx.destination),this.noise=this.makeNoise(2.4),this.buildAmbience(),this.buildEngine(),this.buildSiren(),this.ready=!0}catch{this.enabled=!1}}makeNoise(t){const e=Math.floor(this.ctx.sampleRate*t),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);let a=0;for(let r=0;r<e;r++){const o=Math.random()*2-1;a=(a+.02*o)/1.02,i[r]=a*3.2}return n}loopNoise(t,e,n,i){const a=this.ctx.createBufferSource();a.buffer=this.noise,a.loop=!0;const r=this.ctx.createBiquadFilter();r.type=t,r.frequency.value=e,r.Q.value=n;const o=this.ctx.createGain();return o.gain.value=i,a.connect(r),r.connect(o),o.connect(this.master),a.start(),{src:a,filter:r,gain:o}}buildAmbience(){this.cityHum=this.loopNoise("lowpass",320,.8,.055),this.wind=this.loopNoise("bandpass",900,.5,.018),this.rain=this.loopNoise("highpass",2200,.3,0),this.rainGain=this.rain.gain;const t=this.ctx.createOscillator();t.type="sine",t.frequency.value=52;const e=this.ctx.createGain();e.gain.value=.012,t.connect(e),e.connect(this.master),t.start(),this.drone=e}buildEngine(){const t=this.ctx,e=t.createGain();e.gain.value=0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=620,n.Q.value=.8;const i=t.createOscillator();i.type="sawtooth",i.frequency.value=70;const a=t.createOscillator();a.type="square",a.frequency.value=35;const r=t.createGain();r.gain.value=.35,a.connect(r),r.connect(n),i.connect(n),n.connect(e),e.connect(this.master),i.start(),a.start(),this.engine={out:e,lp:n,o1:i,o2:a,active:!1}}buildSiren(){const t=this.ctx,e=t.createGain();e.gain.value=0;const n=t.createOscillator();n.type="triangle",n.frequency.value=700;const i=t.createOscillator();i.type="sine",i.frequency.value=1050;const a=t.createGain();a.gain.value=.3,n.connect(e),i.connect(a),a.connect(e),e.connect(this.master),n.start(),i.start(),this.siren={out:e,o:n,o2:i,gain:0,target:0}}resume(){this.ensure(),this.ctx?.state==="suspended"&&this.ctx.resume()}setVolume(t){this.master&&this.master.gain.setTargetAtTime(t*.6,this.ctx.currentTime,.1)}startEngine(t){this.ensure(),this.engine&&(this.engine.active=!0,this.engine.type=t.type,this.engine.out.gain.setTargetAtTime(.055,this.ctx.currentTime,.15))}stopEngine(){this.engine&&(this.engine.active=!1,this.engine.out.gain.setTargetAtTime(0,this.ctx.currentTime,.2))}update(t,e,n,i){if(!this.ready||!this.ctx)return;this.t+=t;const a=this.ctx.currentTime;if(this.engine.active&&e){const o=Math.abs(e.speed||0),l=e.cfg.maxSpeed||50,c=.14+o/l*.86,h=e.throttle||0,d=(e.type==="bus"||e.type==="truck"?38:58)+c*(e.type==="super"?220:130)+h*22;this.engine.o1.frequency.setTargetAtTime(d,a,.05),this.engine.o2.frequency.setTargetAtTime(d*.5,a,.05),this.engine.lp.frequency.setTargetAtTime(400+c*1800+h*500,a,.08),this.engine.out.gain.setTargetAtTime(e.isAir?.08:.045+h*.035+c*.02,a,.1),e.isAir&&(this.engine.o1.type="sawtooth",this.engine.o1.frequency.setTargetAtTime(90+Math.sin(this.t*38)*20,a,.03))}if(this.siren){if(i<130){const o=Math.max(0,1-i/130)*.085;this.siren.target=o;const l=Math.sin(this.t*4.6)*.5+.5;this.siren.o.frequency.setTargetAtTime(600+l*550,a,.06),this.siren.o2.frequency.setTargetAtTime(900+l*700,a,.08)}else this.siren.target=0;this.siren.out.gain.setTargetAtTime(this.siren.target,a,.2)}const r=n==="rain"?.045:n==="storm"?.1:n==="snow"?.015:0;this.rainGain?.gain.setTargetAtTime(r,a,1.2),this.cityHum?.gain.gain.setTargetAtTime(this.nightMode?.035:.06,a,.5),this.wind?.gain.gain.setTargetAtTime(this.nightMode?.014:.022,a,2),this.drone&&this.drone.gain.setTargetAtTime(this.nightMode?.018:.01,a,1)}beep(t=660,e=.08,n="sine",i=.08){if(!this.ready)return;const a=this.ctx,r=a.currentTime,o=a.createOscillator();o.type=n,o.frequency.value=t;const l=a.createGain();l.gain.setValueAtTime(i,r),l.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(l),l.connect(this.master),o.start(r),o.stop(r+e+.02)}horn(){if(!this.ready)return;const t=performance.now();if(t-this.lastHorn<280)return;this.lastHorn=t;const e=this.ctx,n=e.currentTime;for(const i of[330,415]){const a=e.createOscillator();a.type="sawtooth",a.frequency.value=i;const r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.045,n+.02),r.gain.setValueAtTime(.045,n+.24),r.gain.exponentialRampToValueAtTime(1e-4,n+.36),a.connect(r),r.connect(this.master),a.start(n),a.stop(n+.4)}}trainHorn(){if(!this.ready)return;const t=performance.now();if(t-(this.lastTrainHorn||0)<1400)return;this.lastTrainHorn=t;const e=this.ctx,n=e.currentTime;for(const[i,a]of[[138,.07],[174,.055],[207,.04]]){const r=e.createOscillator();r.type="sawtooth",r.frequency.value=i;const o=e.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(a,n+.08),o.gain.setValueAtTime(a,n+.75),o.gain.exponentialRampToValueAtTime(1e-4,n+1.45),r.connect(o),o.connect(this.master),r.start(n),r.stop(n+1.5)}}click(){this.beep(520,.04,"sine",.04)}jump(){this.beep(220,.12,"sine",.03)}footstep(t){if(!this.ready)return;const e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=t?900:600;const r=e.createGain();r.gain.setValueAtTime(t?.035:.022,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.12),i.connect(a),a.connect(r),r.connect(this.master),i.start(n),i.stop(n+.14)}crash(t=5){if(!this.ready)return;const e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=500+Math.min(1800,t*80),a.Q.value=.7;const r=e.createGain(),o=Math.min(.22,.03+t*.012);r.gain.setValueAtTime(o,n),r.gain.exponentialRampToValueAtTime(1e-4,n+.3),i.connect(a),a.connect(r),r.connect(this.master),i.start(n),i.stop(n+.32),this.beep(70,.2,"sine",Math.min(.12,o))}thunder(){if(!this.ready)return;const t=this.ctx,e=t.currentTime,n=t.createBufferSource();n.buffer=this.noise;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=180;const a=t.createGain();a.gain.setValueAtTime(.28,e),a.gain.exponentialRampToValueAtTime(1e-4,e+2.4),n.connect(i),i.connect(a),a.connect(this.master),n.start(e),n.stop(e+2.5)}chime(){this.beep(880,.14,"sine",.06),setTimeout(()=>this.beep(1180,.25,"sine",.05),130)}sirenOff(){}}class Cv{constructor(t){this.game=t,this.heat=0,this.level=0,this.lastCrime=-999,this.lastKnown=new N,this.reports=0,this.witnesses=0,this.searchTimer=0,this.lastDispatchLevel=0,this.alerted=!1}commit(t,e,n=!0){this.heat+=t*(n?1:.45),this.lastCrime=this.game.clock,this.lastKnown.copy(e),n&&this.witnesses++,this.reports++;const i=this.levelFor(this.heat);i>this.level?(this.level=i,this.game.notify(`WANTED LEVEL ${i} — ${this.levelDesc(i)}`,"bad"),this.game.audio?.beep(220,.12,"square",.06),i>=1&&this.game.emergency.dispatchPolice(e,Math.min(4,i),i)):this.level=i,this.alerted=!0,this.game.ui?.updateWanted()}levelFor(t){return t>=8.5?5:t>=6?4:t>=4?3:t>=2.4?2:t>=1?1:0}levelDesc(t){return["","Patrol attention","Units responding","Search perimeter","Tactical response","Citywide alert"][t]||""}reportPosition(t){this.lastKnown.copy(t)}update(t){const e=this.game.clock-this.lastCrime;if(this.level>0&&(this.game.emergency.isPoliceNear(this.game.player.pos,45)?(this.lastKnown.copy(this.game.player.pos),this.alerted=!0):e>8&&(this.alerted=!1),e>18&&!this.alerted)){this.heat=Math.max(0,this.heat-t*.55);const n=this.levelFor(this.heat);n<this.level&&(this.level=n,this.game.ui?.updateWanted(),this.game.notify(n===0?"You lost the police":`Wanted reduced to level ${n}`,n===0?"good":"warn"))}this.searchTimer-=t,this.level>0&&this.searchTimer<=0&&(this.searchTimer=12,this.game.emergency.dispatchPolice(this.lastKnown,this.level>=3?2:1,this.level))}clear(){this.heat=0,this.level=0,this.alerted=!1,this.game.ui?.updateWanted()}}class Pv{constructor(t){this.game=t,this.units=[],this.patrolUnits=[],this.extraUnits=[],this.spawnTimer=0,this.initPatrols()}initPatrols(){const t=this.game.vehicles.vehicles.filter(e=>e.service==="police");for(const e of t)this.units.push({vehicle:e,type:"police",state:"patrol",path:[],target:new N,speed:0,siren:!1,timer:0,onScene:0,home:new N(e.pos.x,0,e.pos.z)}),e.mode="service",e.lightsOn=!0,this.patrolUnits.push(e)}aStar(t,e){const n=c=>c.i*9+c.j,i=[t],a=new Map,r=new Map;r.set(n(t),0);const o=new Map;o.set(n(t),0);const l=new Set;for(;i.length;){i.sort((h,d)=>(o.get(n(h))??1e9)-(o.get(n(d))??1e9));const c=i.shift();if(c===e){const h=[c];let d=c;for(;a.has(n(d));)d=a.get(n(d)),h.unshift(d);return h}l.add(n(c));for(const[h,d]of[[1,0],[-1,0],[0,1],[0,-1]]){const f=c.i+h,u=c.j+d;if(f<0||f>8||u<0||u>8)continue;const p=this.game.city.nodeGrid[f][u],x=n(p);if(l.has(x))continue;const m=(r.get(n(c))??1e9)+96;m<(r.get(x)??1e9)&&(a.set(x,c),r.set(x,m),o.set(x,m+Math.hypot(p.x-e.x,p.z-e.z)),i.includes(p)||i.push(p))}}return[t,e]}setDestination(t,e,n="responding"){const i=this.game.city.nearestNode(t.vehicle.pos.x,t.vehicle.pos.z),a=this.game.city.nearestNode(e.x,e.z);t.path=this.aStar(i,a).slice(1).map(r=>new N(r.x,0,r.z)),t.finalTarget=new N(e.x,0,e.z),t.target.copy(t.path[0]||t.finalTarget),t.state=n,t.siren=n==="responding"||n==="chase",t.vehicle.lightsOn=!0}findFreeUnit(t){for(const e of this.units)if(e.vehicle.service===t&&!e.vehicle.isPlayer&&(e.state==="idle"||e.state==="patrol"))return e;return null}dispatchPolice(t,e,n=1){let i=0;for(const a of this.units)if(!(a.vehicle.service!=="police"||a.vehicle.isPlayer)&&!(a.state==="chase"||a.state==="responding")){if(i>=e)break;this.setDestination(a,t),a.level=n,i++}for(;i<e;){const a=this.game.city.pois.find(l=>l.type==="police"),r=this.game.vehicles.spawn("police",a.x+10+Math.random()*8,a.z+24,nt(0,re),{service:"police"});r.mode="service";const o={vehicle:r,type:"police",state:"responding",path:[],target:new N,speed:0,siren:!0,timer:0,onScene:0,home:new N(r.pos.x,0,r.pos.z),level:n};this.units.push(o),this.extraUnits.push(r),this.setDestination(o,t),i++}this.game.notify("Dispatch: NCPD units en route","warn")}dispatchMedical(t){const e=this.units.find(n=>n.vehicle.service==="ambulance")||this.makeAmbulanceUnit();this.setDestination(e,t),this.game.notify("Dispatch: ambulance responding to incident","warn")}dispatchFire(t){const e=this.units.find(n=>n.vehicle.service==="fire")||null;e&&(this.setDestination(e,t),this.game.notify("Dispatch: fire engine responding","warn"))}makeAmbulanceUnit(){const t=this.game.city.pois.find(i=>i.type==="hospital"),e=this.game.vehicles.spawn("ambulance",t.x+30,t.z+20,0,{service:"ambulance"});e.mode="service";const n={vehicle:e,type:"ambulance",state:"idle",path:[],target:new N,speed:0,siren:!1,timer:0,onScene:0,home:new N(e.pos.x,0,e.pos.z)};return this.units.push(n),n}isPoliceNear(t,e){for(const n of this.units)if(n.vehicle.service==="police"&&Math.hypot(n.vehicle.pos.x-t.x,n.vehicle.pos.z-t.z)<e)return!0;return!1}nearestSirenDistance(t){let e=1e9;for(const n of this.units){if(!n.siren)continue;const i=Math.hypot(n.vehicle.pos.x-t.x,n.vehicle.pos.z-t.z);i<e&&(e=i)}return e}updateUnitDriving(t,e,n){const i=t.vehicle;if(i.isPlayer||i.mode==="player")return;let a=t.target;const r=this.game.wanted.level;if(t.type==="police"&&r>0){const h=Math.hypot(i.pos.x-this.game.player.pos.x,i.pos.z-this.game.player.pos.z);h<48&&!this.game.player.vehicle?(a=this.game.player.pos,t.state="chase",t.path=[]):t.state==="chase"&&h>80&&(t.state="responding",t.target.set(this.game.wanted.lastKnown.x,0,this.game.wanted.lastKnown.z))}t.path&&t.path.length&&(a=t.path[0],Math.hypot(a.x-i.pos.x,a.z-i.pos.z)<7&&(t.path.shift(),t.path.length&&(a=t.path[0])));const o=a.x-i.pos.x,l=a.z-i.pos.z;if(Math.hypot(o,l)<5&&!t.path?.length)t.state==="return"?(t.state="idle",t.siren=!1):(t.state==="responding"||t.state==="chase")&&(t.state="onScene",t.onScene=t.type==="fire"?8:5),t.speed=Math.max(0,t.speed-e*10);else{let d=((Math.atan2(o,l)-i.heading+Math.PI)%re+re)%re-Math.PI;i.heading+=Ot(d,-e*2.1,e*2.1);const f=t.type==="fire"?15:21,u=t.state==="onScene"?0:f;t.speed=ve(t.speed,u,e*1.2);const p=Math.sin(i.heading),x=Math.cos(i.heading);i.pos.x+=p*t.speed*e,i.pos.z+=x*t.speed*e;const m=this.game.city.collideCircle(i.pos.x,i.pos.z,i.cfg.wid*.5);m&&(i.pos.x+=m.nx*m.pen,i.pos.z+=m.nz*m.pen,t.speed*=.4)}if(i.group.rotation.y=i.heading,i.speed=t.speed,i.speedKmh=t.speed*3.6,i.brakeOn=t.speed<.5,i.animateWheels(e),i.animateLights(n,this.game.night,{}),t.type==="fire"&&t.state==="onScene"){const h=this.game.events.fires.find(d=>!d.done);if(t.onScene-=e,h&&t.onScene<=0&&this.game.events.extinguish(h),h&&Math.random()<.5)for(let d=0;d<3;d++)this.game.effects.sparksAt(h.pos.x+nt(-2,2),h.pos.y+nt(.5,3),h.pos.z+nt(-2,2),1,11459839);t.onScene<=0&&this.setDestination(t,t.home,"return")}t.type==="ambulance"&&t.state==="onScene"&&(t.onScene-=e,t.onScene<=0&&(this.game.events.resolveAccident(),this.setDestination(t,t.home,"return"))),t.type==="police"&&this.game.wanted.level>0&&Math.hypot(i.pos.x-this.game.player.pos.x,i.pos.z-this.game.player.pos.z)<4.4&&this.game.player.vehicle===null&&this.game.busted()}update(t,e){for(const n of this.units){if(n.vehicle.isPlayer){n.vehicle.mode="player",n.state="stolen";continue}if(n.state==="patrol"){if(!n.path||!n.path.length){const i=this.game.city.nodes[Math.floor(Math.random()*this.game.city.nodes.length)];n.path=[new N(i.x,0,i.z)],n.target.copy(n.path[0]),n.siren=!1}if(this.updateUnitDriving(n,t,e),n.state==="patrol"&&n.path&&n.path.length===0&&(n.path=[]),n.state!=="patrol")continue;continue}if(n.state==="idle"){n.vehicle.brakeOn=!0;continue}if(n.state==="onScene"){n.siren=n.type==="police"&&this.game.wanted.level>0,this.updateUnitDriving(n,t,e),n.type==="police"&&(n.onScene-=t,n.onScene<=0&&this.game.wanted.level===0&&this.setDestination(n,n.home,"return"));continue}if(n.state==="return"){this.updateUnitDriving(n,t,e),n.path&&n.path.length===0&&(n.state="idle",n.siren=!1,n.speed=0);continue}this.updateUnitDriving(n,t,e)}if(this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=5,this.game.wanted.level===0))for(let n=this.extraUnits.length-1;n>=0;n--){const i=this.extraUnits[n],a=this.units.find(o=>o.vehicle===i);if(!a)continue;const r=Math.hypot(i.pos.x-a.home.x,i.pos.z-a.home.z);(a.state==="idle"||r<12)&&(this.game.scene.remove(i.group),i.disposed=!0,this.game.vehicles.vehicles=this.game.vehicles.vehicles.filter(o=>o!==i),this.units=this.units.filter(o=>o!==a),this.extraUnits.splice(n,1))}}}class Lv{constructor(t){this.game=t,this.events=[],this.markers=new Gt,t.scene.add(this.markers),this.fires=[],this.roadblocks=[],this.timer=35,this.nextId=1,this.accidentCars=[],this.scorchMat=new $t({color:657414,transparent:!0,opacity:.55})}startRandom(){const t=["accident","fire","construction","festival","power","lost","trainDelay"],e=[3,3,2,2,1.2,1.4,1.2];let n=Math.random()*e.reduce((a,r)=>a+r,0),i="accident";for(let a=0;a<t.length;a++)if(n-=e[a],n<=0){i=t[a];break}this.start(i)}start(t,e={}){if(this.events.filter(a=>a.active).length>3)return null;const i={id:this.nextId++,type:t,active:!0,age:0,duration:50,pos:new N,title:"",beacon:null,...e};switch(t){case"fire":return this.startFire(i);case"accident":return this.startAccident(i);case"construction":return this.startConstruction(i);case"festival":return this.startFestival(i);case"power":return this.startPowerOutage(i);case"lost":return this.startLostPedestrian(i);case"trainDelay":return this.game.notify("Transit alert: monorail delays on the East Gate loop","warn"),this.game.audio?.chime(),null;case"stormDamage":return this.startStormDamage(i);default:return null}}makeBeacon(t,e){const n=od(e);return n.position.copy(t),n.position.y=.1,this.markers.add(n),n}addEvent(t){return t.beacon=this.makeBeacon(t.pos,t.type==="fire"?16735018:t.type==="festival"?11635967:t.type==="lost"?6549680:16757847),this.events.push(t),t}startFire(t){const e=this.game.city.blocks.filter(a=>!a.isPark&&a.district!=="suburb"),n=_e(e);t.pos.set(n.x+nt(-20,20),.4,n.z+nt(-20,20)),t.title="Structure fire",t.duration=130;const i={pos:t.pos.clone(),scale:1,done:!1,ev:t,light:null};return i.light=new Li(16738850,6,50,2),i.light.position.copy(t.pos).add(new N(0,4,0)),this.game.scene.add(i.light),this.fires.push(i),t.fire=i,this.game.effects.explosion(t.pos.x,t.pos.y+1,t.pos.z),this.game.emergency.dispatchFire(t.pos),this.game.emergency.dispatchPolice(t.pos,1,1),this.game.notify("🔥 Structure fire reported — fire crews dispatched","bad"),this.game.npcs.panic(t.pos.x,t.pos.z,45),this.addEvent(t),t}extinguish(t){t.done||(t.done=!0,t.ev.active=!1,t.light&&this.game.scene.remove(t.light),this.game.effects.spawnSmoke(t.pos.x,t.pos.y+2,t.pos.z,18,14211288,4),this.game.notify("Fire extinguished — crews packing up","good"),this.game.events.cleanup(t.ev))}startAccident(t){const e=_e(this.game.city.nodes);t.pos.set(e.x+nt(-8,8),.2,e.z+nt(-8,8)),t.title="Traffic collision",t.duration=45;const n=this.game.vehicles.vehicles.filter(a=>a.mode==="traffic"),i=[];for(let a=0;a<2&&n.length;a++){const r=n.splice(Math.floor(Math.random()*n.length),1)[0];r.pos.set(t.pos.x+nt(-2,2),.02,t.pos.z+nt(-2,2)),r.heading=nt(0,re),r.speed=0,r.health=12,r.traffic.cruise=0,r.mode="parked",r.brakeOn=!0,this.game.effects.sparksAt(r.pos.x,r.pos.y+.8,r.pos.z,18),this.game.effects.debris(r.pos.x,r.pos.y+.6,r.pos.z,10),i.push(r)}return t.wreck=i,this.accidentCars=i,this.game.emergency.dispatchMedical(t.pos),this.game.emergency.dispatchPolice(t.pos,1,1),this.game.npcs.gather(t.pos.x,t.pos.z,24),this.game.npcs.panic(t.pos.x,t.pos.z,30),this.game.notify("Traffic collision reported — emergency services en route","warn"),this.addEvent(t),t}resolveAccident(){const t=this.events.find(e=>e.type==="accident"&&e.active);if(t){for(const e of this.accidentCars||[])e&&(this.game.scene.remove(e.group),this.game.vehicles.vehicles=this.game.vehicles.vehicles.filter(n=>n!==e));this.accidentCars=[],t.active=!1,this.game.notify("Collision cleared — traffic resuming","good"),this.cleanup(t)}}startConstruction(t){const e=_e(this.game.city.nodes),n=Math.random()>.5;t.pos.set(n?e.x:e.x+10,.3,n?e.z+10:e.z),t.title="Road works",t.duration=55;const i=new Gt,a=new O({color:15231518,roughness:.7}),r=new O({color:15920864,roughness:.7});for(let o=0;o<6;o++){const l=new A(new Sn(.22,.7,8),a);l.position.set(nt(-4,4),.4,nt(-8,8)),i.add(l)}for(let o=0;o<3;o++){const l=new A(new P(2.4,.25,.4),a);l.position.set(nt(-3,3),1,-4+o*4),i.add(l);const c=new A(new P(.1,1,.4),r);c.position.set(l.position.x,.5,l.position.z),i.add(c)}return i.position.copy(t.pos),this.game.scene.add(i),t.group=i,this.roadblocks.push({x:t.pos.x,z:t.pos.z,r:18}),this.game.npcs.panic(t.pos.x,t.pos.z,12),this.game.notify("Road works ahead — expect delays","warn"),this.addEvent(t),t}startFestival(t){const e=this.game.city.blocks.find(a=>a.isPark);t.pos.set(e.x+15,.4,e.z+15),t.title="Aurora Park street festival",t.duration=80,this.game.npcs.gather(t.pos.x,t.pos.z,45);const n=new Gt,i=[16735098,6021375,16757847,10185727];for(let a=0;a<7;a++){const r=new Li(i[a%4],4,28,2);r.position.set(t.pos.x+nt(-12,12),5,t.pos.z+nt(-12,12)),n.add(r);const o=new A(new Ce(.18,8,6),new $t({color:i[a%4],toneMapped:!1}));o.position.copy(r.position),n.add(o)}return this.game.scene.add(n),t.group=n,this.game.notify("Aurora Park festival is underway — crowds gathering","good"),this.game.audio?.chime(),this.addEvent(t),t}startPowerOutage(t){return t.pos.set(0,0,0),t.title="Downtown power outage",t.duration=35,this.game.powerOutage=!0,this.game.notify("⚠ Grid failure — downtown lights offline","warn"),this.game.emergency.dispatchPolice(new N(0,0,0),1,1),this.addEvent(t),t}startLostPedestrian(t){const e=_e(this.game.npcs.peds);return t.pos.set(e.x,.2,e.z),t.title="Lost visitor needs directions",t.duration=90,t.ped=e,e.lost=!0,this.game.notify("A visitor near you looks lost","warn"),this.addEvent(t),t}startStormDamage(t){const e=nt(-300,300),n=nt(-300,300);t.pos.set(e,.3,n),t.title="Storm debris",t.duration=60;const i=new A(new Ft(.35,.45,7,6),new O({color:4863781,roughness:1}));i.rotation.z=Math.PI/2,i.position.set(e,.6,n),this.game.scene.add(i);const a=new A(new Zs(3,0),new O({color:3099174,roughness:1}));return a.position.set(e+2,1.2,n+1),this.game.scene.add(a),t.group=new Gt,t.group.add(i,a),this.roadblocks.push({x:e,z:n,r:12}),this.addEvent(t),t}cleanup(t){t.beacon&&this.markers.remove(t.beacon),t.active=!1,t.group&&(t.type==="power"&&(this.game.powerOutage=!1),this.game.scene.remove(t.group)),this.roadblocks=this.roadblocks.filter(e=>!(Math.abs(e.x-t.pos.x)<.1&&Math.abs(e.z-t.pos.z)<.1)),t.ped&&(t.ped.lost=!1),t.type==="power"&&(this.game.powerOutage=!1)}update(t,e){this.timer-=t,this.timer<=0&&(this.timer=nt(50,95),this.startRandom());for(const n of this.events)n.active&&(n.age+=t,n.beacon&&ld(n.beacon,t),n.type==="fire"&&n.fire&&!n.fire.done&&(Math.random()<.8&&this.game.effects.fireAt(n.pos.x+nt(-2,2),n.pos.y+nt(0,2),n.pos.z+nt(-2,2),n.fire.scale+Math.random()*.6),n.fire.light.intensity=4+Math.sin(e*9)*1.4+Math.random(),n.age>110&&this.extinguish(n.fire)),n.type==="festival"&&n.group&&(n.group.rotation.y=Math.sin(e*.3)*.02),n.type==="lost"&&n.ped&&(n.pos.set(n.ped.x,.2,n.ped.z),n.beacon&&n.beacon.position.copy(n.pos).setY(.1)),n.age>n.duration&&(n.type==="fire"&&n.fire&&!n.fire.done?n.duration+=20:(n.type==="power"&&(this.game.powerOutage=!1,this.game.notify("Power restored downtown","good")),this.cleanup(n))));this.events=this.events.filter(n=>n.active||n.age<n.duration+5),this.roadblocks=this.roadblocks.filter(n=>!0)}isRoadBlocked(t,e){for(const n of this.roadblocks)if(Math.hypot(t-n.x,e-n.z)<n.r)return!0;return!1}mapMarkers(){return this.events.filter(t=>t.active).map(t=>({x:t.pos.x,z:t.pos.z,type:t.type,title:t.title}))}}const th={apartment:{name:"The Hale Apartments",wall:7234135,floor:6114364,accent:9136973,light:16766888},shop:{name:"Corner Market",wall:7109232,floor:9080200,accent:4160090,light:15922408},police:{name:"NCPD Central Precinct",wall:4608093,floor:6054246,accent:2841498,light:14674431},hospital:{name:"Nova General Hospital",wall:9280164,floor:11120820,accent:5214115,light:15398655},fire:{name:"Nova Fire Station 3",wall:7097155,floor:6248016,accent:11022382,light:16769472},garage:{name:"Apex Auto Garage",wall:5067607,floor:3882818,accent:13208110,light:16769200},dealership:{name:"Nova Motors",wall:5267567,floor:7634051,accent:4034495,light:15398143},hotel:{name:"Hotel Aurora Lobby",wall:7101782,floor:5915704,accent:12160334,light:16768174},office:{name:"Meridian Tower Lobby",wall:5858414,floor:10132636,accent:4026258,light:15003903}};class Iv{constructor(t){this.game=t,this.rooms=new Map,this.current=null,this.returnPos=new N,this.built=!1}build(){if(this.built)return;this.built=!0;let t=0;for(const e of Object.keys(th))this.rooms.set(e,this.buildRoom(e,t++))}buildRoom(t,e){const n=th[t],i=-1800-e*70,a=24,r=17,o=4.4,l=new Gt;l.position.set(i,0,0),this.game.scene.add(l);const c=new O({color:n.wall,roughness:.9}),h=new O({color:n.floor,roughness:.5,metalness:.1}),d=new O({color:n.accent,roughness:.55,metalness:.15}),f=new O({color:2830389,roughness:.8}),u=new O({color:15001572,roughness:.7}),p=new O({color:7229236,roughness:.85}),x=(_,w,b,v,S,I=0)=>{const R=new A(_,w);return R.position.set(b,v,S),R.rotation.y=I,R.castShadow=!0,R.receiveShadow=!0,l.add(R),R},m=new A(new ae(a,r),h);m.rotation.x=-Math.PI/2,m.position.y=.03,m.receiveShadow=!0,l.add(m),x(new P(a,.25,r),new O({color:2895665,roughness:.95}),0,o,0),x(new P(a,o,.35),c,0,o/2,-r/2),x(new P(.35,o,r),c,-a/2,o/2,0),x(new P(.35,o,r),c,a/2,o/2,0),x(new P(6.2,o,.35),c,-a/2+3.1,o/2,r/2),x(new P(6.2,o,.35),c,a/2-3.1,o/2,r/2),x(new P(2.4,o-2.5,.35),c,0,o-(o-2.5)/2,r/2),x(new P(2.8,.16,.4),d,0,2.55,r/2);for(const _ of[-1,1])x(new P(.12,2.7,.4),d,_*1.3,1.35,r/2);x(new ae(5,3),new O({color:4015180,roughness:.95}),0,.05,r/2-4);for(const _ of[-6,6]){const w=new Li(n.light,34,24,2);w.position.set(_,o-.5,0),l.add(w);const b=new A(new Ft(.3,.45,.12,14),new $t({color:n.light}));b.position.set(_,o-.2,0),l.add(b)}const g=new Li(n.light,20,22,2);g.position.set(0,o-.7,4),l.add(g);const M={type:t,name:n.name,group:l,x:i,z:0,W:a,D:r,H:o,interactions:[]},y=(_,w,b,v,S)=>M.interactions.push({x:i+w,z:b,label:v,action:S,radius:2.6});if(t==="apartment")x(new P(5.5,1.1,7),p,-7.5,.55,-3.8),x(new P(5.2,.6,1.8),new O({color:14867922,roughness:.9}),-7.5,.95,-5.2),x(new P(5.2,.55,1.8),d,-7.5,.75,-2.4),x(new P(3.6,1.4,1.8),new O({color:4016728,roughness:.9}),5.5,.7,3),x(new P(.12,2.2,4.2),new $t({color:1054752}),7.4,2.3,1.5),x(new P(3,1.1,1.2),p,-2.5,.55,5.3),x(new Ft(.35,.35,1.1,10),u,2.4,.55,-6.6),x(new P(1.3,1.4,.7),f,2.4,1.65,-6.6),y("sofa",5.5,3,"Rest at home","rest"),y("kitchen",2.4,-6.6,"Make coffee","coffee");else if(t==="shop"){for(let _=0;_<4;_++)x(new P(1,2.5,8),new O({color:5989728,roughness:.7}),-8+_*2,1.25,-2);for(let _=0;_<4;_++)for(let w=0;w<6;w++){const b=[14048074,14727244,6004333,4882350,13793850][(_+w)%5];x(new P(.5,.4,.5),new O({color:b,roughness:.6}),-8+_*2+nt(-.3,.3),.55+w%3*.8,-5.2+w*1.3)}x(new P(8,1,1.5),u,3.5,.5,5.2),x(new P(8.2,.16,1.7),d,3.5,1.05,5.2),this.makeClerk(l,3.5,6.6,Math.PI,3366730),y("counter",3.5,4.2,"Browse the market","shop")}else if(t==="police"){for(let _=0;_<3;_++)x(new P(4,.16,1.8),p,-6+_*4.5,1,0),x(new P(.2,1,1.4),f,-6+_*4.5,.5,0),x(new P(1.4,.6,.7),f,-6+_*4.5,1.35,-.2);x(new P(6,1.1,1.4),u,3,.55,-6.8),x(new P(6.2,.14,1.5),d,3,1.12,-6.8),x(new Ci(1.2,24),new $t({color:2841498}),3,3,-8.28),this.makeClerk(l,3,-7.9,0,2504778),y("desk",3,-5.8,"Talk to the desk sergeant","policeDesk")}else if(t==="hospital"){for(let _=0;_<3;_++)x(new P(2.4,.7,5),u,-6+_*4,.5,-2),x(new P(2.1,.25,1.1),new O({color:10469576,roughness:.8}),-6+_*4,1,-3.2);x(new P(6,1.1,1.3),d,5,.55,-5.8),this.makeClerk(l,5,-6.7,0,2976634),y("reception",5,-4.8,"Ask for medical treatment","heal")}else if(t==="fire"){x(new P(10,1.2,3.4),d,-3,.6,-2);for(let _=0;_<3;_++)x(new P(.5,2,.4),f,-7+_*2.5,2.2,-6.4),x(new P(.6,.8,.3),new O({color:13214794,roughness:.5,metalness:.4}),-7+_*2.5,1.6,-6.2);this.makeClerk(l,4,-6.6,0,8073002),y("gear",4,-5,"Check fire equipment","fireInfo")}else if(t==="garage"){x(new P(10,.3,6),new O({color:2895923,roughness:.9}),0,.4,0),x(new P(10,.2,.4),new $t({color:14723367}),0,.56,3.1),x(new P(1.2,3.2,1.2),d,-8,1.6,-6);for(let w=0;w<4;w++)x(new P(.8,.5,.8),f,7.5,1.8+w*.6,-5+w*1.2);const _=pi("sports",12729147).group;_.position.set(-1,.55,0),_.scale.setScalar(1),l.add(_),y("bench",3,4.2,"Repair & refuel your vehicle","garage")}else if(t==="dealership"){x(new P(14,.2,8),new O({color:12568265,roughness:.15,metalness:.4}),-2,.2,0);const _=pi("super",14729548).group;_.position.set(-6,.35,-1),_.rotation.y=.4,l.add(_);const w=pi("sports",2908047).group;w.position.set(-1,.35,1),w.rotation.y=-.3,l.add(w),x(new P(6,1,1.4),d,5,.5,-6.4),this.makeClerk(l,5,-7.2,0,3103350),y("sales",5,-5.4,"Browse vehicles for sale","dealership")}else if(t==="hotel"){x(new P(8,1.1,1.5),p,0,.55,-5.8),x(new P(8.2,.16,1.7),d,0,1.12,-5.8);for(let _=0;_<3;_++)x(new P(1.6,.6,1.6),new O({color:4082262,roughness:.9}),-5+_*5,.6,3.8);this.makeClerk(l,0,-6.6,0,5980470),y("front desk",0,-4.8,"Rent a room for the night","hotel")}else if(t==="office"){for(let _=0;_<4;_++)x(new P(3,.12,1.4),u,-7+_*4,1,-3),x(new P(.2,1,1.2),f,-7+_*4,.5,-3),x(new P(1.2,.7,.1),new $t({color:9425128}),-7+_*4,1.5,-3);x(new P(5,1.1,1.3),d,5,.55,5.4),this.makeClerk(l,5,6.4,Math.PI,2900822),y("reception",5,4.2,"Ask about office jobs","office")}return y("exit",0,r/2-1.2,"Leave building","exit"),M}makeClerk(t,e,n,i,a){const r=new Gt,o=new O({color:12618339,roughness:.7}),l=new O({color:a,roughness:.85}),c=new O({color:2304046,roughness:.9}),h=new A(new un(.22,.5,4,8),l);h.position.y=1.08,r.add(h);const d=new A(new Ce(.17,10,8),o);d.position.y=1.6,r.add(d);const f=new A(new Ce(.175,8,6,0,re,0,Math.PI*.55),new O({color:2826523,roughness:.9}));f.position.y=1.62,r.add(f);for(const p of[-1,1]){const x=new A(new un(.065,.42,3,6),l);x.position.set(p*.28,1.08,0),r.add(x);const m=new A(new un(.08,.5,3,6),c);m.position.set(p*.12,.5,0),r.add(m)}const u=new A(new Ci(.9,20),new $t({color:0,transparent:!0,opacity:.18,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.position.y=.02,r.add(u),r.position.set(e,0,n),r.rotation.y=i,t.add(r),r.userData.baseY=0,this.clerks||(this.clerks=[]),this.clerks.push({group:r,phase:nt(0,re)}),r}enter(t,e){this.build();const n=this.rooms.get(t)||this.rooms.get("apartment");n&&(this.current=n,this.returnPos.copy(e),this.game.mode="interior",this.game.player.interior=n,this.game.player.cameraDist=3.8,this.game.player.cameraPitch=.03,this.game.player.setPosition(n.x,n.z+n.D/2-5.2,.2),this.game.player.heading=Math.PI,this.game.player.cameraYaw=Math.PI,this.game.vehicles.playerVehicle&&this.game.exitVehicle(!0),this.game.audio?.chime(),this.game.notify(`Entered ${n.name}`,"good"))}exit(){this.current&&(this.current,this.current=null,this.game.player.interior=null,this.game.player.setPosition(this.returnPos.x,this.returnPos.z,.2),this.game.player.cameraDist=5.2,this.game.mode="playing",this.game.audio?.chime(),this.game.notify("Back outside","good"))}update(t){if(this.current){const e=this.game.player.pos,n=this.current;if(e.x=Ot(e.x,n.x-n.W/2+.8,n.x+n.W/2-.8),e.z=Ot(e.z,n.z-n.D/2+.8,n.z+n.D/2-.9),this.clerks)for(const i of this.clerks)i.phase+=t,i.group.position.y=Math.sin(i.phase*1.4)*.006}}nearestInteraction(t,e){if(!this.current)return null;let n=null,i=3.2;for(const a of this.current.interactions){const r=Math.hypot(a.x-t,a.z-e);r<i&&(i=r,n=a)}return n}}class Dv{constructor(t){this.game=t,this.current=null,this.offers=[],this.marker=null,this.markerGroup=new Gt,t.scene.add(this.markerGroup),this.completed=0,this.refreshOffers()}refreshOffers(){const t=this.game.city,e=t.pois.filter(c=>c.type==="shop"),n=t.pois.filter(c=>c.type==="apartment"),i=t.pois.filter(c=>c.type==="hotel"),a=t.pois.filter(c=>c.type==="garage"),r=t.pois.filter(c=>c.type==="factory"),o=Date.now()+this.completed,l=[{id:"courier",title:"Courier Run",desc:"Pick up a parcel and deliver it across the city.",pay:185,require:null,color:6549680},{id:"freight",title:"Freight Delivery",desc:"Haul industrial cargo in a van, pickup or truck.",pay:460,require:["van","pickup","truck","construction"],color:16757847},{id:"taxi",title:"City Taxi",desc:"Pick up a passenger and take them to their hotel.",pay:330,require:["sedan","taxi","suv","van","sports","super"],color:6021375},{id:"courier",title:"Pharmacy Drop",desc:"Urgent medical parcel for the hospital district.",pay:240,require:null,color:6549680},{id:"inspect",title:"Site Inspection",desc:"Drive to an industrial site and check the perimeter.",pay:260,require:null,color:11635967}];this.offers=l.map((c,h)=>{const d=c.id==="freight"?_e(r):c.id==="taxi"?_e(i):_e(e),f=c.id==="freight"?_e(a):c.id==="taxi"?_e(i):_e(n);return{...c,uid:"job"+o+h,pickup:{x:d.x+nt(-5,5),z:d.z+nt(-5,5)},dropoff:{x:f.x+nt(-5,5),z:f.z+nt(-5,5)},pickupName:d.name,dropName:f.name}})}start(t){if(this.current){this.game.notify("Finish your current job first","warn");return}const e=this.offers.find(i=>i.uid===t);if(!e)return;const n=this.game.vehicles.playerVehicle;if(e.require&&(!n||!e.require.includes(n.type))){this.game.notify("This job needs the right vehicle","bad");return}this.current={...e,stage:"pickup",elapsed:0,limit:240},this.setMarker(e.pickup.x,e.pickup.z,e.color),this.game.notify(`Job accepted: ${e.title}`,"good"),this.game.audio?.chime(),this.game.ui?.showObjective()}setMarker(t,e,n){this.marker&&this.markerGroup.remove(this.marker),this.marker=od(n),this.marker.position.set(t,.15,e),this.markerGroup.add(this.marker)}clearMarker(){this.marker&&(this.markerGroup.remove(this.marker),this.marker=null)}update(t){if(this.marker&&ld(this.marker,t),!this.current)return;const e=this.current;e.elapsed+=t;const n=this.game.player,i=e.stage==="pickup"?e.pickup:e.dropoff,a=Math.hypot(n.pos.x-i.x,n.pos.z-i.z);n.vehicle,a<6&&(e.stage==="pickup"?(e.stage="dropoff",this.setMarker(e.dropoff.x,e.dropoff.z,16757847),this.game.notify(e.id==="taxi"?"Passenger aboard — drive to the destination":"Cargo loaded — deliver it to the destination","good")):this.complete()),e.elapsed>e.limit&&(this.game.notify("Job expired — the client cancelled","bad"),this.current=null,this.clearMarker(),this.game.ui?.hideObjective()),this.game.ui?.updateObjective(e,a)}complete(){const t=this.current;t&&(this.game.addMoney(t.pay),this.completed++,this.game.notify(`Job complete — earned ${Rn(t.pay)}`,"good"),this.game.audio?.chime(),this.current=null,this.clearMarker(),this.refreshOffers(),this.game.ui?.hideObjective())}}class Nv{constructor(t){this.game=t,this.mode="none",this.manual=!1,this.currentRail=null,this.atStation=-1,this.metroEntrances=[],this.buildMetroEntrances(),this.fare=3}buildMetroEntrances(){const t=this.game.city,e=[{x:10,z:58,name:"Central Metro"},{x:-200,z:10,name:"West End Metro"},{x:200,z:200,name:"Harbor Metro"}];for(let n=0;n<e.length;n++){const i=e[n],a=new Gt;a.position.set(i.x,0,i.z);const r=new O({color:3818573,roughness:.4,metalness:.6});a.add(new A(new P(5,.3,8),new O({color:7830912,roughness:.95})));const o=new A(new P(4.2,.05,.2),new $t({color:9235199}));o.position.set(0,.32,2.5),a.add(o);for(const h of[-1,1]){const d=new A(new P(.25,1,8),r);d.position.set(h*2.3,.8,0),a.add(d)}const l=new A(new ae(3.6,1.4),new $t({map:Uv("METRO","#081b2a","#8ceaff",i.name),transparent:!0}));l.position.set(0,3.2,0),a.add(l);const c=new A(new Ft(.08,.1,3.2,6),r);c.position.y=1.6,a.add(c);for(let h=0;h<5;h++){const d=new A(new P(4,.2,.7),new O({color:5988710,roughness:.9}));d.position.set(0,-.1-h*.2,-.4+h*.6),a.add(d)}this.game.scene.add(a),t.addPOI("metro",i.name,i.x,i.z,6,{icon:"transit",metro:n}),this.metroEntrances.push(i)}}boardMonorail(t){const e=this.game.city.monorail;if(!e)return;const n=this.game.player;n.riding=e,n.group.visible=!1,n.shadow.visible=!1,n.vehicle=null,n.cameraYaw=e.group.rotation.y,n.cameraDist=18,n.cameraPitch=.2,e.riding=!0,this.mode="monorail",this.manual=e.manual,this.atStation=t??e.currentStation,this.game.mode="riding",this.game.notify("Boarded the monorail — E to exit at a station, T to take controls","good"),this.game.audio?.chime(),this.game.ui&&this.game.ui.showTransit("MONORAIL","Aurora Loop","Automatic")}exitMonorail(){const t=this.game.city.monorail,e=this.game.player,n=t.currentStation,i=n>=0?t.stations[n]:null;if(!(i&&t.speed<.35&&t.stationAt(t.progress)===n)){this.game.notify("Wait until the train stops at a station","warn");return}const r=i,o=r.tower;e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(o.x+8,o.z+11,.2),e.cameraYaw=r.ang,t.riding=!1,t.manual=!1,this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify(`Exited at ${r.name}`,"good")}toggleManual(){if(this.mode==="monorail"){const t=this.game.city.monorail;t.manual=!t.manual,this.manual=t.manual,t.targetSpeed=t.manual?Math.max(4,t.speed):11,this.game.ui?.updateTransitMode(t.manual?"Manual control":"Automatic",t.manual?"W/S throttle · E exit":"Aurora Loop"),this.game.notify(t.manual?"Manual train control enabled":"Automatic train control enabled","good");return}if(this.mode==="rail"){const t=this.game.city.rail;t.auto=!t.auto,t.auto&&(t.dwell=0),this.game.ui?.updateTransitMode(t.auto?"Automatic":"Manual control",t.auto?"Station stops":"W/S throttle · E exit"),this.game.notify(t.auto?"Automatic station stops enabled":"Manual train control enabled","good")}}boardRail(){const t=this.game.city.rail;if(!t)return;const e=this.game.player;e.riding={group:t.group,isRail:!0,trainLength:t.trainLength||70},e.group.visible=!1,e.shadow.visible=!1,e.vehicle=null,e.cameraYaw=Math.PI/2,e.cameraDist=12,e.cameraPitch=.16,this.mode="rail",this.currentRail=t,this.game.mode="riding",this.game.notify("Boarded commuter rail — E to disembark at a station, T for manual control","good"),this.game.ui?.showTransit("COMMUTER RAIL","Nova Central Line",t.auto?"Automatic":"Manual control")}exitRail(){const t=this.game.city.rail,e=this.game.player,n=t.currentStation;if(n<0||t.speed>.35){this.game.notify("Wait until the train stops at a station","warn");return}const i=t.stations[n];e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(i.x,i.z+1,.2),e.cameraYaw=0,t.auto=!0,t.dwell=0,t.departCool=4.5,this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify(`Left the train at ${i.name}`,"good")}boardIslandRail(t=0){const e=this.game.city.islandRail;if(!e)return;const n=this.game.player;n.riding=e,n.group.visible=!1,n.shadow.visible=!1,n.vehicle=null,n.cameraYaw=e.group.rotation.y,n.cameraDist=12,n.cameraPitch=.18,this.mode="islandRail",this.currentRail=e,this.game.mode="riding",this.game.notify("Boarded the Palm Island Line — E to step off at a station","good"),this.game.audio?.chime(),this.game.ui?.showTransit("PALM ISLAND LINE","Harbor ↔ Palm Island","Automatic")}exitIslandRail(){const t=this.game.city.islandRail,e=this.game.player,n=t.stoppedAtStation();if(n<0){this.game.notify("Wait for the tram to stop at a station","warn");return}const i=t.stations[n];e.riding=null,e.group.visible=!0,e.shadow.visible=!0,e.setPosition(i.exit.x,i.exit.z,.2),e.cameraYaw=Math.PI,e.velocity.set(0,0,0),this.mode="none",this.game.mode="playing",this.game.ui?.hideTransit(),this.game.notify(`Stepped off at ${i.name}`,"good")}update(t,e){if(this.mode==="monorail"){const n=this.game.city.monorail;n.manual&&(n.targetSpeed=Ot(n.targetSpeed+((e.forward?1:0)-(e.back?1:0))*8*t*3,0,24),e.brake&&(n.targetSpeed=0)),this.game.ui?.updateTransitSpeed(n.speed,n.dwell>0?"DOORS OPEN":n.currentStation>=0?n.stations[n.currentStation].name:"EN ROUTE")}else if(this.mode==="rail"){const n=this.game.city.rail;n.auto||(e.forward&&(n.speed=Ot(n.speed+5*t,0,28)),e.back&&(n.speed=Ot(n.speed-7*t,0,28)),e.brake&&(n.speed=0));const i=n.currentStation>=0?n.stations[n.currentStation].name:null;this.game.ui?.updateTransitSpeed(n.speed,i?`AT ${i.toUpperCase()}`:n.dwell>0?"DOORS OPEN":"NOVA CENTRAL LINE")}else if(this.mode==="islandRail"){const n=this.game.city.islandRail,i=n.currentStation>=0?n.stations[n.currentStation].name:null;this.game.ui?.updateTransitSpeed(n.speed,i?`AT ${i.toUpperCase()}`:n.dwell>0?"DOORS OPEN":"HARBOR ↔ PALM ISLAND")}}metroTravel(t){const n=this.metroEntrances[t];if(n){if(this.game.money<this.fare){this.game.notify("Not enough cash for fare","bad");return}this.game.addMoney(-this.fare),this.game.audio?.chime(),this.game.notify(`Metro fare ${Rn(this.fare)} — arriving at ${n.name}`,"good"),this.game.player.riding=null,this.game.player.setPosition(n.x,n.z+8,.2),this.game.player.cameraYaw=Math.PI,this.game.mode="playing",this.game.ui?.closeOverlay()}}}function Uv(s,t,e,n=""){const i=document.createElement("canvas");i.width=512,i.height=256;const a=i.getContext("2d");a.fillStyle=t,a.fillRect(0,0,512,256),a.strokeStyle="rgba(255,255,255,.25)",a.lineWidth=8,a.strokeRect(10,10,492,236),a.fillStyle=e,a.font="700 82px Inter, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(s,256,108),a.font="500 24px Inter, sans-serif",a.globalAlpha=.7,a.fillText(n,256,172);const r=new ol(i);return r.colorSpace=rn,r}const eh="novacity-save-v1",nh="novacity-settings-v1",ih={forward:!1,back:!1,left:!1,right:!1,sprint:!1,jump:!1,brake:!1,crouch:!1},Ov=["clear","clear","clear","rain","storm","snow"],Fv=[2570317,7023925,3426874,5326428,9202493,4087680,8011346],zv=[2239027,2895670,3881792,4866358,5922144],Ei=()=>new Promise(s=>requestAnimationFrame(()=>s()));class kv{constructor(){this.canvas=document.getElementById("game"),this.renderer=new Rx({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=rn,this.renderer.toneMapping=qo,this.renderer.toneMappingExposure=1.02,this.renderer.shadowMap.type=Us,this.scene=new Tu,this.scene.background=new Kt(10336205),this.fog=new sl(10466502,55e-5),this.scene.fog=this.fog,this.camera=new vn(62,1,.1,2600),this.camera.position.set(40,22,60),this.settings=this.loadSettings(),this.applyRendererSettings(),this.clock3=new Nf,this.money=2500,this.health=100,this.hour=6.4,this.totalHours=6.4,this.night=0,this.weather="clear",this.temperature=18,this.weatherTimer=nt(150,240),this.thunderTimer=nt(6,14),this.flashArmed=!0,this.timeScale=24/720,this.mode="boot",this.paused=!1,this.started=!1,this.ready=!1,this.camShake=0,this.powerOutage=!1,this.gps=null,this.bustedCooldown=0,this.crimeCooldown=0,this.metroPass=0,this.lastVehicle=null,this.interaction=null,this.keys=new Set,this.gamepadButtons=new Set,this.gamepadId=null,this.jumpBuffer=0,this.input={...ih},this.controls={vehicle:{}},this.touch={x:0,y:0,lookX:0,lookY:0,sprint:!1,jump:!1,throttle:!1,brake:!1},this.elapsed=0,this.ui=null,this.player=null,this.dragging=!1,this.lastPointer={x:0,y:0},this.menuClockAcc=0,this.audio=new Rv,this.bindWindowEvents(),this.boot()}loadSettings(){const t={quality:"medium",shadows:!0,volume:.7,invert:!1,time:"dawn",fov:62,mode:"pc",language:"en"};try{const e=localStorage.getItem(nh);return e?{...t,...JSON.parse(e)}:t}catch{return t}}saveSettings(){try{localStorage.setItem(nh,JSON.stringify(this.settings))}catch{}this.applyRendererSettings()}applyRendererSettings(){const t=this.settings,e=t.quality==="low"?1:t.quality==="high"?2:1.5;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,e)),this.renderer.shadowMap.enabled=!!t.shadows,this.camera.fov=t.fov||62,this.camera.updateProjectionMatrix(),this.city?.sun&&(this.city.sun.castShadow=!!t.shadows)}setQuality(t){this.settings.quality=t,this.applyRendererSettings(),this.saveSettings()}setLoading(t,e){const n=document.querySelector(".loading-note");n&&t&&(n.textContent=t);const i=document.querySelector(".loading-bar i");i&&e!=null&&(i.style.animation="none",i.style.width=`${Ot(e,0,100)}%`)}async boot(){try{this.setLoading("Surveying the bay · plotting districts",8),await Ei(),await Ei(),this.city=new gv(this.scene),this.city.game=this,this.night=this.city.night,this.setLoading("Paving roads · raising the skyline",34),await Ei(),this.effects=new Av(this.scene),this.player=new xv(this),this.player.beginCinematic(170,96,210,250,.055),this.setLoading("Waking the traffic system",52),await Ei(),this.vehicles=new Mv(this),this.vehicles.spawnParkedCity();const t=this.settings.quality==="low"?84:140;this.vehicles.spawnTraffic(t),this.onTrafficCollision=(e,n)=>this.handleTrafficCollision(e,n),this.onPedHit=(e,n)=>this.handlePedHit(e,n),this.setLoading("Populating sidewalks · dispatching services",68),await Ei(),this.npcs=new bv(this),this.wanted=new Cv(this),this.emergency=new Pv(this),this.events=new Lv(this),this.setLoading("Opening storefronts and stations",82),await Ei(),this.interiors=new Iv(this),this.jobs=new Dv(this),this.transit=new Nv(this),this.setupOwnedVehicles(),this.setLoading("Calibrating the city",94),await Ei(),this.ui=new Ev(this),this.ui.updateMoney(),this.ui.updateWanted(),this.player.endCinematic(),this.player.beginCinematic(170,96,210,250,.055),this.city.updateLighting(this.hour,this.weather,0),this.ready=!0,this.mode="menu",this.resize(),this.clock3.start(),this.ui.hideLoading(),this.ui.showMenu(),this.setLoading("Ready",100),requestAnimationFrame(()=>this.loop())}catch(t){console.error(t),this.fatal(t)}}fatal(t){const e=document.querySelector(".loading-note");e&&(e.textContent="NOVA CITY failed to start — "+(t?.message||"unknown error"),e.style.color="#ff8c9a",e.style.maxWidth="70vw",e.style.textAlign="center",e.style.textTransform="none")}setupOwnedVehicles(){this.ownedVehicles=[{...dn.sedan,type:"sedan",color:2837103,name:"Your Sable"}],this.money=2500}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}bindWindowEvents(){window.addEventListener("resize",()=>this.resize()),window.addEventListener("keydown",t=>{if(["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&(this.mode!=="menu"||t.code==="Tab")&&t.preventDefault(),this.keys.add(t.code),!(this.mode==="menu"||!this.ready)&&(t.code==="Space"&&!t.repeat&&(this.jumpBuffer=.2),!t.repeat))switch(t.code){case"Tab":this.toggleOverlay("phone");break;case"KeyM":this.toggleOverlay("map");break;case"KeyE":this.interact();break;case"KeyF":this.toggleCamera();break;case"KeyH":this.horn();break;case"KeyL":this.toggleLights();break;case"KeyT":this.toggleTransitControls();break;case"KeyR":this.resetVehicle();break;case"KeyC":this.player&&(this.player.crouching=!this.player.crouching);break}}),window.addEventListener("keyup",t=>this.keys.delete(t.code)),window.addEventListener("blur",()=>this.keys.clear()),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),this.canvas.addEventListener("mousedown",t=>{if(this.settings.mode!=="phone"&&t.button===0&&!(this.mode==="menu"||this.paused||this.ui?.overlay)&&(this.dragging=!0,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY,document.pointerLockElement!==this.canvas))try{this.canvas.requestPointerLock?.()}catch{}}),window.addEventListener("mouseup",()=>{this.dragging=!1}),window.addEventListener("mousemove",t=>{if(this.mode==="menu"||this.paused||this.ui?.overlay||!this.player)return;let e=0,n=0;if(this.settings.mode==="phone"||(document.pointerLockElement===this.canvas?(e=t.movementX||0,n=t.movementY||0):this.dragging&&(e=t.clientX-this.lastPointer.x,n=t.clientY-this.lastPointer.y,this.lastPointer.x=t.clientX,this.lastPointer.y=t.clientY),!e&&!n))return;const i=.0024;this.player.cameraYaw-=e*i,this.player.lookHold=1.6,this.player.cameraPitch=Ot(this.player.cameraPitch+(this.settings.invert?-1:1)*n*i,-.55,1)}),window.addEventListener("wheel",t=>{this.mode==="menu"||this.paused||this.ui?.overlay||!this.player||(this.player.cameraDist=Ot(this.player.cameraDist+t.deltaY*.006,3,20))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==this.canvas&&(this.dragging=!1)})}readInput(t=0){const e=this.keys,n=navigator.getGamepads?.()||[],i=Array.from(n).find(y=>y?.connected)||null,a=new Set;let r=0,o=0,l=0,c=0,h=!1,d=!1,f=!1;if(i){this.gamepadId=i.index;const y=b=>Math.abs(b||0)<.16?0:b;r=y(i.axes[0]),o=y(i.axes[1]),l=y(i.axes[2]),c=y(i.axes[3]);const _=b=>!!i.buttons[b]?.pressed||(i.buttons[b]?.value||0)>.6;for(let b=0;b<i.buttons.length;b++)_(b)&&a.add(b);d=a.has(0),f=a.has(1),h=a.has(5)||(i.buttons[7]?.value||0)>.25;const w=b=>a.has(b)&&!this.gamepadButtons.has(b);this.mode!=="menu"&&this.ready&&(w(2)&&this.interact(),w(3)&&this.toggleOverlay("map"),w(4)&&this.toggleOverlay("phone"),w(9)&&this.togglePause()),(l||c)&&(this.player.cameraYaw-=l*t*2.4,this.player.lookHold=1.2,this.player.cameraPitch=Ot(this.player.cameraPitch+(this.settings.invert?-1:1)*c*t*1.8,-.55,1))}else this.gamepadId=null;this.gamepadButtons=a;const u=e.has("KeyW")||e.has("ArrowUp")||o<-.25,p=e.has("KeyS")||e.has("ArrowDown")||o>.25,x=e.has("KeyA")||e.has("ArrowLeft")||r<-.25,m=e.has("KeyD")||e.has("ArrowRight")||r>.25,g=e.has("ShiftLeft")||e.has("ShiftRight")||h,M=e.has("Space")||this.jumpBuffer>0||d;if(this.jumpBuffer=0,this.input.forward=u,this.input.back=p,this.input.left=x,this.input.right=m,this.input.sprint=g,this.input.jump=M,this.input.brake=p||f,this.input.crouch=e.has("KeyC")||a.has(1),this.settings.mode==="phone"&&(this.input.forward=this.touch.y<-.25,this.input.back=this.touch.y>.25,this.input.left=this.touch.x<-.25,this.input.right=this.touch.x>.25,this.input.sprint=this.touch.sprint,(this.touch.lookX||this.touch.lookY)&&(this.player.cameraYaw-=this.touch.lookX*t*2.4,this.player.lookHold=1.2,this.player.cameraPitch=Ot(this.player.cameraPitch+(this.settings.invert?-1:1)*this.touch.lookY*t*1.8,-.55,1)),this.touch.jump&&(this.jumpBuffer=.2),this.input.jump=this.touch.jump||this.jumpBuffer>0),this.controls.vehicle={throttle:u?1:0,brake:p||f?1:0,steer:(m?1:0)-(x?1:0),handbrake:M,up:M?1:0,down:g?1:0,left:x,right:m},this.settings.mode==="phone"&&!i){const y=Math.abs(this.touch.x)<.12?0:this.touch.x;this.controls.vehicle.throttle=Math.max(this.touch.throttle?1:0,Ot(-this.touch.y,0,1)),this.controls.vehicle.brake=Math.max(this.touch.brake?1:0,Ot(this.touch.y,0,1)),this.controls.vehicle.steer=y,this.controls.vehicle.left=y<-.16,this.controls.vehicle.right=y>.16,this.controls.vehicle.handbrake=this.touch.jump,this.controls.vehicle.up=this.touch.jump?1:0,this.controls.vehicle.down=this.touch.sprint?1:0}i&&this.settings.mode!=="phone"&&(this.controls.vehicle.throttle=o<-.16?-o:0,this.controls.vehicle.brake=o>.16||f?Math.max(o,f?1:0):0,this.controls.vehicle.steer=r,this.controls.vehicle.left=r<-.16,this.controls.vehicle.right=r>.16,this.controls.vehicle.up=Math.max(this.controls.vehicle.up,d?1:0),this.controls.vehicle.down=Math.max(this.controls.vehicle.down,h?1:0))}applyTouchLook(t){if(this.settings.mode!=="phone"||!this.player)return;const e=this.touch.lookX||0,n=this.touch.lookY||0;Math.abs(e)<.03&&Math.abs(n)<.03||(this.player.cameraYaw-=e*t*2.6,this.player.cameraPitch=Ot(this.player.cameraPitch+(this.settings.invert?-1:1)*n*t*1.9,-.55,1),this.player.lookHold=1.4)}toggleOverlay(t){this.ui&&(this.ui.overlay===t?this.ui.closeOverlay():this.ui.openOverlay(t))}togglePause(){this.ui&&(this.ui.overlay?this.ui.closeOverlay():this.ui.openOverlay("pause"))}loop(){requestAnimationFrame(()=>this.loop());const t=Math.min(this.clock3.getDelta(),.05);try{this.frame(t)}catch(e){console.error(e)}this.renderer.render(this.scene,this.camera)}frame(t){if(!this.ready)return;const e=this.paused?0:t;if(this.mode==="menu"){if(this.paused||(this.elapsed+=t,this.updateTime(t),this.player.update(t,ih),this.city.update(t,this.elapsed,this.player.pos),this.effects.update(t,this.elapsed,this.player.pos,this.weather),this.city.updateLighting(this.hour,this.weather,t),this.night=this.city.night,this.updateAtmosphere(t),this.audio.update(t,null,this.weather,999),this.audio.nightMode=this.night>.5),this.menuClockAcc+=t,this.menuClockAcc>.4){this.menuClockAcc=0;const n=document.getElementById("menu-clock");n&&(n.textContent=this.clockText())}return}if(this.started){if(this.elapsed+=e,this.bustedCooldown>0&&(this.bustedCooldown-=e),this.crimeCooldown>0&&(this.crimeCooldown-=e),this.readInput(e),this.applyTouchLook(e),this.updateTime(e),this.updateWeather(e),this.city.updateLighting(this.hour,this.weather,e),this.night=this.city.night,this.mode==="interior")this.updateInterior(e);else if(this.player.riding)this.syncRidingPlayer(),this.player.update(e,this.input),this.transit.update(e,this.input);else{this.vehicles.update(e,this.elapsed,this.night,this.weather),this.player.update(e,this.input);const n=this.player.vehicle;n&&(this.player.pos.copy(n.pos),this.player.heading=n.heading)}this.city.update(e,this.elapsed,this.player.pos),this.npcs.update(e,this.elapsed,this.player),this.wanted.update(e),this.emergency.update(e,this.elapsed),this.events.update(e,this.elapsed),this.jobs.update(e),this.interiors.update(e),this.effects.update(e,this.elapsed,this.player.pos,this.weather),this.applyWeatherAudio(e),this.audio.nightMode=this.night>.5,this.audio.update(e,this.vehicles.playerVehicle,this.weather,this.emergency.nearestSirenDistance(this.player.pos)),this.ui.updateHUD(e),this.updateInteraction(),this.handleVehicleFeedback(),this.updateAtmosphere(t)}}updateTime(t){this.hour=(this.hour+t*this.timeScale)%24,this.totalHours+=t*this.timeScale,this.clock=this.totalHours}updateAtmosphere(t){if(!this.scene.fog||!this.city||this.interiors?.current)return;const e=this.city.night,n=this.weather==="storm"?.0021:this.weather==="rain"?.00135:this.weather==="snow"?.00115:55e-5;this.scene.fog.density=ve(this.scene.fog.density,n,Ot(t*.4,0,1)),this.scene.fog.color.setRGB(ve(.58,.018,e),ve(.68,.032,e),ve(.79,.058,e)),this.scene.background.copy(this.scene.fog.color)}updateWeather(t){if(this.weatherTimer-=t,this.weatherTimer<=0){this.weatherTimer=nt(150,260);let n=_e(Ov);n===this.weather&&(n=this.weather==="clear"?"rain":"clear"),this.setWeather(n)}const e=this.targetTemperature();this.temperature=ve(this.temperature,e,Ot(t*.16,0,1)),this.weather==="storm"&&(this.thunderTimer-=t,this.thunderTimer<=0&&(this.thunderTimer=nt(6,16),this.audio.thunder()))}targetTemperature(){const e=11+Math.max(0,Math.sin((this.hour-6)/24*Math.PI*2))*13,n={clear:0,rain:-3,storm:-5,snow:-10,fog:-2}[this.weather]??0;return e+n}setWeather(t,e=!1){if(this.weather=t,this.temperature=this.targetTemperature(),this.effects&&this.effects.setWeather(t),this.ui&&this.ui.setWeatherFx(t),this.city&&this.city.updateLighting(this.hour,t,0),!e&&this.ui){const n={clear:"Skies clearing over Nova City",rain:"Rain moving in from the bay",storm:"Thunderstorm warning issued",snow:"Snow falling across the city",fog:"Fog rolling through downtown"}[t];n&&this.notify(n,t==="storm"?"warn":"")}(t==="storm"||t==="rain")&&this.audio.chime?.()}applyWeatherAudio(){this.effects&&(this.effects.flash>.985&&this.flashArmed&&(this.flashArmed=!1,this.audio.thunder()),this.effects.flash<.05&&(this.flashArmed=!0))}updateInterior(t){const e=this.player;let n=(this.input.right?1:0)-(this.input.left?1:0),i=(this.input.forward?1:0)-(this.input.back?1:0);const a=Math.hypot(n,i);a>0&&(n/=a,i/=a);const r=e.cameraYaw,o=this.input.sprint?4.4:2.7,l=(Math.sin(r)*i+Math.cos(r)*n)*o*(a>0?1:0),c=(Math.cos(r)*i-Math.sin(r)*n)*o*(a>0?1:0);e.pos.x+=l*t,e.pos.z+=c*t,a>0&&(e.heading=Math.atan2(l,c),e.footTimer-=t,e.footTimer<=0&&(e.footTimer=.5,this.audio.footstep(this.input.sprint))),e.group.position.copy(e.pos),e.group.rotation.y=e.heading,e.animate(t,a>0?o:0,this.input.sprint),this.interiors.update(t),e.updateCamera(t)}syncRidingPlayer(){const t=this.player.riding;if(!t)return;const e=t.group?.position||t.pos;e&&(this.player.pos.copy(e),this.player.heading=t.group?.rotation.y??this.player.heading)}updateInteraction(){if(!this.ui)return;if(this.paused||this.ui.overlay){this.interaction=null,this.ui.setPrompt(null);return}const t=this.player;let e=null;if(t.cinematic){this.interaction=null,this.ui.setPrompt(null);return}if(t.vehicle)e={action:"exitVehicle",label:`Exit ${t.vehicle.cfg.name}`};else if(t.riding)e={action:"exitTransit",label:this.transit.mode==="monorail"?"Exit monorail at station":this.transit.mode==="islandRail"?"Exit tram at station":"Leave the train at a station"};else if(this.interiors.current){const n=this.interiors.nearestInteraction(t.pos.x,t.pos.z);n&&(e={action:"interior",payload:n,label:n.label})}else{const n=this.vehicles.findNearest(t.pos.x,t.pos.z,6.5,i=>i.enterable);if(n)e={action:"enterVehicle",payload:n.vehicle,label:`Enter ${n.vehicle.cfg.name}`};else{let i=null,a=1/0;for(const r of this.city.pois){const o=Math.hypot(r.x-t.pos.x,r.z-t.pos.z),l=r.type==="monorail"?11:r.type==="train"?16:r.type==="metro"?9:Math.min(r.radius||16,16);o<l&&o<a&&(a=o,i=r)}i&&(e={action:"poi",payload:i,label:this.poiLabel(i)})}}this.interaction=e,this.ui.setPrompt(e?e.label:null)}poiLabel(t){return t.type==="monorail"?`Board monorail · ${t.name.replace(" Monorail","")}`:t.type==="train"?t.line==="island"?"Board the Palm Island Line":"Board commuter rail":t.type==="metro"?"Ride the metro":t.type==="marina"?"Visit Harbor Marina":t.type==="park"?"Relax in Aurora Park":t.type==="airport"?"Watch the airport":t.type==="factory"?"Inspect Northgate Works":`Enter ${t.name}`}interact(){if(!this.ready||this.paused||this.ui?.overlay)return;const t=this.interaction;t&&(t.action==="exitVehicle"?this.exitVehicle():t.action==="exitTransit"?this.exitTransit():t.action==="enterVehicle"?this.enterVehicle(t.payload):t.action==="interior"?this.runInteriorAction(t.payload):t.action==="poi"&&this.activatePOI(t.payload))}activatePOI(t){if(t.type==="monorail"){this.transit.boardMonorail(t.station),this.mode="riding";return}if(t.type==="train"){t.line==="island"?this.transit.boardIslandRail(t.station??0):this.transit.boardRail(),this.mode="riding";return}if(t.type==="metro"){const e=this.transit.metroEntrances.length,n=((t.metro??0)+1)%e;this.transit.metroTravel(n);return}if(t.type==="marina"){this.notify("Harbor Marina — boats are moored along the waterfront","good");return}if(t.type==="park"){this.notify("Aurora Park — the festival stage is quiet this hour","good");return}if(t.type==="airport"){this.notify("Nova International — departures board flickers","good");return}if(t.type==="factory"){this.notify("Northgate Works — the night shift is running","warn");return}(t.type==="shop"||t.type==="apartment"||t.type==="police"||t.type==="hospital"||t.type==="fire"||t.type==="garage"||t.type==="dealership"||t.type==="hotel"||t.type==="office")&&this.enterInterior(t.type,t)}enterInterior(t,e){const n=this.player;this.interiors.enter(t,new N(n.pos.x,.2,n.pos.z)),this.scene.fog=null,this.mode="interior",this.ui.setPrompt(null),this.audio.chime()}exitInterior(){this.interiors.exit(),this.scene.fog=this.fog,this.mode="playing",this.ui.setPrompt(null)}runInteriorAction(t){if(t)switch(t.action){case"exit":this.exitInterior();break;case"rest":this.hour=(this.hour+7)%24,this.totalHours+=7,this.city.updateLighting(this.hour,this.weather,0),this.notify("You slept for seven hours","good"),this.audio.chime();break;case"coffee":this.health=Math.min(100,this.health+4),this.notify("Fresh coffee — you feel awake","good");break;case"shop":this.ui.openOverlay("phone"),this.ui.switchPhoneTab("shop");break;case"policeDesk":this.openPoliceDesk();break;case"heal":if(this.money<120){this.notify("Treatment costs $120","bad");break}this.addMoney(-120),this.health=100,this.notify("Treated at Nova General — health restored","good"),this.audio.chime();break;case"fireInfo":this.notify("Fire crews are on standby. Report blazes from the phone map.","good");break;case"garage":this.repairAtGarage();break;case"dealership":this.openDealership();break;case"hotel":if(this.money<80){this.notify("A room costs $80","bad");break}this.addMoney(-80),this.hour=(this.hour+8)%24,this.totalHours+=8,this.city.updateLighting(this.hour,this.weather,0),this.notify("Rested at Hotel Aurora","good"),this.audio.chime();break;case"office":this.ui.openOverlay("phone"),this.ui.switchPhoneTab("jobs");break;default:this.notify("Nothing interesting here","")}}openPoliceDesk(){const t=this.wanted.level;if(t===0){this.ui.showModal({kicker:"NCPD CENTRAL",title:"Records clean",body:"<p>No active warrants. Keep it that way, and the city stays open to you.</p>",actions:[{label:"Leave",sub:"Back to the lobby",primary:!0,onClick:()=>{this.exitInterior(),this.ui.closeOverlay()}}]});return}const e=250*t;this.ui.showModal({kicker:"NCPD CENTRAL",title:"Outstanding warrant",body:`<p>Wanted level <b>${t}</b>. Pay a fine of <b>${Rn(e)}</b> to clear your record.</p>`,actions:[{label:`Pay ${Rn(e)}`,sub:"Clear wanted level",primary:!0,onClick:()=>{if(this.money<e){this.notify("Not enough cash for the fine","bad");return}this.addMoney(-e),this.wanted.clear(),this.notify("Warrant cleared — NCPD stands down","good"),this.exitInterior(),this.ui.closeOverlay()}},{label:"Walk away",sub:"Keep the warrant",onClick:()=>{this.ui.closeOverlay()}}]})}repairAtGarage(){const t=this.lastVehicle||this.vehicles.playerVehicle||this.vehicles.startCar;if(!t){this.notify("No vehicle available to repair","bad");return}const e=80;if(this.money<e){this.notify("Repairs cost $80","bad");return}this.addMoney(-e),t.repair(),t.fuel=t.cfg.fuel,this.notify(`${t.cfg.name} repaired and refuelled`,"good"),this.audio.chime()}openDealership(){const e=["sedan","suv","sports","super","pickup","van"].map(n=>{const i=dn[n];return{label:`${i.name} · ${Rn(i.price)}`,sub:`${i.klass} · ${Math.round(i.maxSpeed*3.6)} km/h`,onClick:()=>this.buyVehicle(n)}});this.ui.showModal({kicker:"NOVA MOTORS",title:"Choose your machine",body:"<p>Showroom stock is delivered to the street outside. Insurance and a full tank are included.</p>",actions:e})}buyVehicle(t){const e=dn[t];if(!e)return;if(this.money<e.price){this.notify(`You need ${Rn(e.price)} for the ${e.name}`,"bad");return}if(this.ownedVehicles.some(i=>i.type===t)){this.notify("You already own that model","warn");return}this.addMoney(-e.price);const n={...e,type:t,color:_e([2837103,9183020,13620182,1843753,2181746,6961964])};this.ownedVehicles.push(n),this.notify(`Purchased ${e.name}`,"good"),this.audio.chime(),this.ui.closeOverlay(),this.spawnOwnedNearby(n),this.saveGame()}spawnOwnedNearby(t){if(this.interiors?.current)return null;const e=this.player;let n=e.pos.x+Math.sin(e.heading)*11,i=e.pos.z+Math.cos(e.heading)*11;this.city.collideCircle(n,i,1.6)&&(n=e.pos.x-Math.sin(e.heading)*11,i=e.pos.z-Math.cos(e.heading)*11);const r=this.vehicles.spawn(t.type,n,i,e.heading,{color:t.color,owned:!0,name:t.name});return r.mode="parked",r}recallVehicle(t){const e=this.ownedVehicles[t];if(!e)return;this.spawnOwnedNearby(e)?this.notify(`${e.name} delivered nearby`,"good"):this.notify("Step outside to receive the vehicle","warn"),this.saveGame()}enterVehicle(t){if(!t||this.player.vehicle||this.player.riding)return;const e=!!t.service,n=t.mode==="traffic";if(this.vehicles.startDriving(t),this.player.enteredVehicle(t),this.lastVehicle=t,this.mode="driving",this.ui.setPrompt(null),!t.owned&&(e||n)){const i=e?2.2:1.2;this.wanted.commit(i,this.player.pos,!0),this.npcs.panic(t.pos.x,t.pos.z,26),this.notify(e?"Service vehicle stolen — units alerted":"Carjacking reported","bad")}this.audio.click()}exitVehicle(t=!1){const e=this.player.vehicle;if(e){if(!t&&e.isAir&&e.pos.y>4){this.notify("Land the helicopter before exiting","warn");return}if(!t&&e.isBoat&&e.pos.z>515){this.notify("Bring the boat closer to shore","warn");return}this.vehicles.stopDriving(e),this.player.exitVehicle(e),this.lastVehicle=e,this.interiors?.current||(this.mode="playing"),this.ui.setPrompt(null)}}exitTransit(){this.transit.mode==="monorail"?this.transit.exitMonorail():this.transit.mode==="rail"?this.transit.exitRail():this.transit.mode==="islandRail"?this.transit.exitIslandRail():(this.player.riding=null,this.player.group.visible=!0,this.player.shadow.visible=!0,this.mode="playing",this.ui.hideTransit())}toggleCamera(){if(!this.player||this.player.vehicle===null&&this.mode==="interior"){this.notify("Camera options are limited indoors","warn");return}const t=this.player.toggleCamera();this.ui.toast(t?"First-person camera":"Third-person camera")}toggleLights(){const t=this.player.vehicle;t&&(t.lightsOn=!t.lightsOn,this.ui.toast(t.lightsOn?"Lights on":"Lights off"))}horn(){this.audio.horn(),this.player.vehicle&&(this.camShake=Math.max(this.camShake,.05))}resetVehicle(){const t=this.player.vehicle;if(!t)return;const e=this.city.nearestNode(t.pos.x,t.pos.z);t.repair(),t.velocity.set(0,0),t.speed=0,t.pos.set(e.x+4.5,t.isAir?2.2:.02,e.z+4.5),t.altitude=t.pos.y,t.heading=0,t.group.rotation.set(0,0,0),this.notify("Vehicle reset and repaired","good")}toggleTransitControls(){(this.transit.mode==="monorail"||this.transit.mode==="rail")&&this.transit.toggleManual()}handleTrafficCollision(t,e){this.crimeCooldown>0||(this.crimeCooldown=2.5,this.wanted.commit(1.2,t.pos,!0),this.ui.damageFlash(),this.notify("Collision witnessed — NCPD notified","warn"))}handlePedHit(t,e){this.wanted.commit(4.5,e.pos,!0),this.emergency.dispatchMedical(new N(t.x,.2,t.z)),this.npcs.panic(t.x,t.z,34),this.ui.damageFlash(),this.camShake=Math.max(this.camShake,1),this.notify("You struck a pedestrian — witnesses are calling 911","bad")}handleVehicleFeedback(){const t=this.vehicles.playerVehicle;t&&t.damageFlash>0&&(t.damageFlash=0,this.ui.damageFlash(),this.camShake=Math.max(this.camShake,.35)),this.camShake>0&&(this.camShake=Math.max(0,this.camShake-.016*2.2))}busted(){if(this.bustedCooldown>0||!this.wanted||this.wanted.level===0)return;this.bustedCooldown=12,this.player.vehicle&&this.exitVehicle(!0),this.wanted.clear(),this.money=Math.max(0,this.money-500),this.ui.updateMoney();const t=this.city.pois.find(e=>e.type==="police")||{x:132,z:44};this.player.setPosition(t.x+8,t.z+26,.18),this.player.heading=Math.PI,this.player.cameraYaw=Math.PI,this.player.velocity.set(0,0,0),this.mode==="interior"&&this.exitInterior(),this.mode="playing",this.ui.showBusted(),this.notify("Busted — $500 fine and a ride to the precinct","bad"),this.audio.chime()}buyItem(t){const n={coffee:{price:6},sandwich:{price:12},medkit:{price:45},fuelcan:{price:32},jacket:{price:60},pants:{price:45},metrocard:{price:25}}[t];if(n){if(t==="fuelcan"&&!this.vehicles.playerVehicle){this.notify("You need to be in a vehicle to use a fuel can","warn");return}if(this.money<n.price){this.notify("Not enough cash","bad");return}switch(this.addMoney(-n.price),t){case"coffee":this.health=Math.min(100,this.health+4),this.notify("Coffee purchased","good");break;case"sandwich":this.health=Math.min(100,this.health+10),this.notify("Sandwich eaten","good");break;case"medkit":this.health=100,this.notify("First aid kit used — health restored","good");break;case"fuelcan":this.vehicles.playerVehicle.fuel=this.vehicles.playerVehicle.cfg.fuel,this.notify("Vehicle refuelled","good");break;case"jacket":this.player.setClothing({jacket:_e(Fv)}),this.notify("New jacket equipped","good");break;case"pants":this.player.setClothing({pants:_e(zv)}),this.notify("New trousers equipped","good");break;case"metrocard":this.metroPass+=5,this.notify("Metro pass loaded with five rides","good");break}this.audio.chime(),this.saveGame()}}addMoney(t){this.money=Ot(this.money+t,0,1e9),this.ui?.updateMoney()}notify(t,e=""){this.ui?.notify(t,e)}clockText(){const t=Math.floor(this.hour)%24,e=Math.floor(this.hour%1*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}startNewGame(){this.ready&&(this.audio.resume(),this.audio.setVolume(this.settings.volume),this.paused=!1,this.mode="playing",this.started=!0,this.player.endCinematic(),this.player.firstPerson=!1,this.player.cameraDist=5.2,this.player.setPosition(10,34,.18),this.player.heading=Math.PI,this.player.cameraYaw=Math.PI,this.player.cameraPitch=.04,this.player.group.visible=!0,this.player.shadow.visible=!0,this.health=100,this.money=2500,this.metroPass=0,this.ownedVehicles=[{...dn.sedan,type:"sedan",color:2837103,name:"Your Sable"}],this.wanted.clear(),this.jobs.current=null,this.jobs.clearMarker(),this.jobs.completed=0,this.jobs.refreshOffers(),this.ui.hideObjective(),this.hour={dawn:8.2,day:12.2,dusk:18.8,night:22.4}[this.settings.time]??8.2,this.totalHours=this.hour,this.clock=this.hour,this.weatherTimer=nt(150,240),this.setWeather("clear",!0),this.temperature=this.targetTemperature(),this.vehicles.startCar&&(this.vehicles.startCar.repair(),this.vehicles.startCar.pos.set(4,.02,36),this.vehicles.startCar.heading=Math.PI,this.vehicles.startCar.group.rotation.set(0,Math.PI,0)),this.ui.hideMenu(),this.ui.showHUD(),this.ui.updateMoney(),this.ui.updateWanted(),this.ui.closeOverlay(),this.notify("Welcome to Nova City. Find work on your phone, or take the wheel.","good"),this.audio.chime(),this.requestPointerLock(),this.saveGame())}continueGame(){if(!this.ready)return;let t=null;try{t=JSON.parse(localStorage.getItem(eh)||"null")}catch{t=null}if(!t){this.startNewGame();return}this.audio.resume(),this.audio.setVolume(this.settings.volume),this.paused=!1,this.mode="playing",this.started=!0,this.player.endCinematic(),this.player.firstPerson=!!t.player?.firstPerson,this.player.cameraDist=this.player.firstPerson?0:5.2,this.player.setPosition(t.player?.x??10,t.player?.z??34,.18),this.player.heading=t.player?.heading??Math.PI,this.player.cameraYaw=this.player.heading,this.player.cameraPitch=.04,this.player.group.visible=!this.player.firstPerson,this.player.shadow.visible=!this.player.firstPerson,this.health=Ot(t.health??100,1,100),this.money=Math.max(0,t.money??2500),this.hour=t.hour??6.4,this.totalHours=t.totalHours??this.hour,this.clock=this.totalHours,t.settings&&(this.settings={...this.settings,...t.settings},this.applyRendererSettings());const e=Array.isArray(t.owned)?t.owned:["sedan"];if(this.ownedVehicles=e.map(n=>{const i=typeof n=="string"?n:n.type,a=dn[i];return a?{...a,type:i,name:n.name||(i==="sedan"?"Your Sable":a.name),color:n.color}:null}).filter(Boolean),this.ownedVehicles.length||(this.ownedVehicles=[{...dn.sedan,type:"sedan",name:"Your Sable",color:2837103}]),this.jobs.completed=t.jobsCompleted||0,this.jobs.refreshOffers(),this.wanted.heat=t.wantedHeat||0,this.wanted.level=this.wanted.levelFor(this.wanted.heat),this.setWeather(t.weather||"clear",!0),this.temperature=t.temperature??this.targetTemperature(),t.vehicle?.type&&dn[t.vehicle.type]){const n=this.vehicles.spawn(t.vehicle.type,this.player.pos.x+3.4,this.player.pos.z+2.4,this.player.heading,{owned:!0});n.health=t.vehicle.health??100,n.fuel=t.vehicle.fuel??n.cfg.fuel,n.mode="parked"}this.ui.hideMenu(),this.ui.showHUD(),this.ui.updateMoney(),this.ui.updateWanted(),this.ui.closeOverlay(),this.notify("Welcome back to Nova City","good"),this.audio.chime(),this.requestPointerLock()}saveGame(){if(!this.ready)return;const t=this.player,e=this.vehicles?.playerVehicle,n={version:1,savedAt:Date.now(),money:this.money,health:this.health,hour:this.hour,totalHours:this.totalHours,weather:this.weather,temperature:this.temperature,wantedHeat:this.wanted?.heat||0,jobsCompleted:this.jobs?.completed||0,owned:(this.ownedVehicles||[]).map(i=>({type:i.type,name:i.name,color:i.color})),player:{x:t.pos.x,z:t.pos.z,heading:t.heading,firstPerson:t.firstPerson},vehicle:e?{type:e.type,health:e.health,fuel:e.fuel}:null,settings:this.settings};try{localStorage.setItem(eh,JSON.stringify(n))}catch{}}returnToMenu(){this.player?.vehicle&&this.exitVehicle(!0),this.player?.riding&&(this.player.riding=null,this.player.group.visible=!0,this.player.shadow.visible=!0),this.interiors?.current&&this.exitInterior(),this.ui.closeOverlay(),this.paused=!1,this.mode="menu",this.started=!1,this.keys.clear(),this.touch.x=0,this.touch.y=0,this.touch.sprint=!1,this.touch.jump=!1,this.gamepadButtons.clear(),this.player.endCinematic(),this.player.beginCinematic(170,96,210,250,.055),this.ui.showMenu(),this.ui.hideTransit(),this.audio.stopEngine()}setTimeOfDay(t){const e={dawn:8.2,day:12.2,dusk:18.8,night:22.4}[t];e!=null&&(this.settings.time=t,this.hour=e,this.totalHours=this.hour,this.clock=this.hour,this.city&&this.city.updateLighting(this.hour,this.weather,0),this.saveSettings())}requestPointerLock(){if(this.settings.mode!=="phone"&&this.canvas.requestPointerLock)try{const t=this.canvas.requestPointerLock();t?.catch&&t.catch(()=>{})}catch{}}}window.novaCity||(window.novaCity=new kv);
