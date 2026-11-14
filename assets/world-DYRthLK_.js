const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./models-CaQgNxTp.js","./three-sJYZ9btm.js"])))=>i.map(i=>d[i]);
import{C as Z,T as Hs,R as bs,S as Ce,N as ws,L as Is,a as Xs,D as rs,b as ns,U as ls,c as jt,V as U,M as W,d as K,B as st,e as _,f as Ys,g as _e,h as $e,i as D,G as B,j as ks,I as qs,k as Ms,Q as Vt,l as gt,m as Ks,O as bt,n as F,o as Qs,p as Ss,q as Zs,r as wt,s as Js,E as _s,t as X,A as me,P as ys,u as As,v as $s,w as eo,F as cs,x as ze,W as Pe,H as De,y as to,z as so,J as Gt,K as us,X as hs,Y as oo,Z as io,_ as ao,$ as ro,a0 as no,a1 as lo,a2 as Ts,a3 as co,a4 as uo,a5 as ho,a6 as fo,a7 as mo,a8 as ds,a9 as po,aa as vo,ab as xo,ac as go,ad as bo,ae as wo,af as zs}from"./three-sJYZ9btm.js";import{t as Mo,N as k,M as J,f as qe,_ as So,S as Ke,D as yo}from"./index-BKosd2kI.js";function Mt(a){return Mo(a)?.vehicule??!1}function Ao(a,e,s,o){if(o)return"conduite";switch(a){case"brosse-a-dents":case"brosse-a-recurer":return e?"brosse":s>.25?"marche":"repos";case"balai":case"aspirateur-dorsal":return e?"brosse-debout":s>.25?"marche":"repos";case"balayeuse-poussee":return"pousse";default:return s>.25?"marche":"repos"}}const To={"brosse-a-dents":.55,"brosse-a-recurer":.6,balai:.95,"aspirateur-dorsal":.95,"balayeuse-poussee":1.1,"balayeuse-autoportee":1.6,"camion-aspirateur":3};class Ps{constructor(e,s,o){this.modeles=e,this.scene=s,this.astro=e.astronaute(o),Ae(this.astro.group),s.add(this.astro.group)}astro;outilId=null;tenu=null;vehicule=null;assis=!1;setOutil(e){e!==this.outilId&&(this.outilId=e,this.retirerOutil(),Mt(e)?(this.vehicule=this.modeles.vehicule(e),Ae(this.vehicule.group),this.scene.add(this.vehicule.group)):(this.tenu=this.modeles.outil(e),Ae(this.tenu.group),this.astro.main.add(this.tenu.group)))}retirerOutil(){this.assis&&this.setAssis(!1),this.tenu&&(this.tenu.group.removeFromParent(),this.tenu.dispose(),this.tenu=null),this.vehicule&&(this.vehicule.group.removeFromParent(),this.vehicule.dispose(),this.vehicule=null)}setAssis(e){if(e===this.assis||e&&!this.vehicule)return;this.assis=e;const s=this.astro.group;e&&this.vehicule?(this.vehicule.siege.add(s),s.position.set(0,0,0),s.rotation.set(0,0,0)):this.scene.add(s)}tete(){return this.assis&&this.vehicule?this.vehicule.tete:this.tenu?this.tenu.tete:null}positionTete(e){const s=this.tete();return s?(s.getWorldPosition(e),Number.isFinite(e.x)&&Number.isFinite(e.z)):!1}animer(e,s,o){const t=this.outilId??"brosse-a-dents";this.astro.animer(Ao(t,o,s,this.assis),e,s),this.tenu&&this.tenu.animer(e,o),this.vehicule&&this.vehicule.animer(e,o&&this.assis)}setVisible(e){this.astro.group.visible=e,this.vehicule&&(this.vehicule.group.visible=e)}hautTete(e){return this.astro.group.getWorldPosition(e),e.y+=this.assis?1.9:2.25,e}dispose(){this.retirerOutil(),this.astro.group.removeFromParent(),this.astro.dispose()}}function Ae(a){a.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)})}const zo=new Hs;async function Te(a){try{const e=await zo.loadAsync(`./textures/${a}`),s=e.image;return!s||!s.width?(e.dispose(),null):e}catch{return null}}function se(a,e,s){let o=a*374761393+e*668265263+s*2147483647|0;return o=Math.imul(o^o>>>13,1274126177),o^=o>>>16,(o>>>0)/4294967296}function Po(a,e,s,o){const t=Math.floor(a),i=Math.floor(e),r=a-t,n=e-i,l=r*r*(3-2*r),c=n*n*(3-2*n),h=(t%s+s)%s,u=(i%s+s)%s,d=(h+1)%s,m=(u+1)%s,f=se(h,u,o),w=se(d,u,o),b=se(h,m,o),S=se(d,m,o);return f+(w-f)*l+(b-f)*c+(f-w-b+S)*l*c}function pe(a,e,s,o,t){let i=0,r=.5,n=0,l=s;for(let c=0;c<o;c++)i+=Po(a*l,e*l,l,t+c*31)*r,n+=r,r*=.5,l*=2;return i/n}function oe(a,e){const s=document.createElement("canvas");s.width=a,s.height=e;const o=s.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas 2D indisponible");return[s,o]}function lt(a,e){return a.wrapS=a.wrapT=bs,a.colorSpace=e?Ce:ws,a.minFilter=Is,a.generateMipmaps=!0,a.needsUpdate=!0,a}function fs(a,e,s){const[o,t]=oe(e,e),i=t.createImageData(e,e);for(let r=0;r<e;r++)for(let n=0;n<e;n++){const l=(n-1+e)%e,c=(n+1)%e,h=(r-1+e)%e,u=(r+1)%e,d=(a[r*e+c]-a[r*e+l])*s,m=(a[u*e+n]-a[h*e+n])*s,f=Math.hypot(d,m,1),w=(r*e+n)*4;i.data[w]=(-d/f*.5+.5)*255,i.data[w+1]=(-m/f*.5+.5)*255,i.data[w+2]=(1/f*.5+.5)*255,i.data[w+3]=255}return t.putImageData(i,0,0),o}function Do(a){const e=new Float32Array(a*a),[s,o]=oe(a,a),t=o.createImageData(a,a);for(let i=0;i<a;i++)for(let r=0;r<a;r++){const n=r/a,l=i/a,c=pe(n,l,4,4,11),h=pe(n,l,64,2,23),u=se(r,i,5);let d=0;const m=10,f=Math.floor(n*m),w=Math.floor(l*m);for(let z=-1;z<=1;z++)for(let L=-1;L<=1;L++){const $=((f+L)%m+m)%m,N=((w+z)%m+m)%m;if(se($,N,77)>.55)continue;const Y=(f+L+se($,N,78))/m,I=(w+z+se($,N,79))/m,ve=(.12+.22*se($,N,80))/m,V=Math.hypot(n-Y,l-I)/ve;V<1&&(d=Math.max(d,Math.sqrt(1-V*V)))}const b=c*.5+h*.35+u*.15+d*.8;e[i*a+r]=b;const S=.5+(c-.5)*.35+(h-.5)*.25+(u-.5)*.18-d*.18,C=(i*a+r)*4;t.data[C]=Math.max(0,Math.min(255,S*255*1.02)),t.data[C+1]=Math.max(0,Math.min(255,S*255*1)),t.data[C+2]=Math.max(0,Math.min(255,S*255*.96)),t.data[C+3]=255}return o.putImageData(t,0,0),{c:s,h:e}}function Co(a){const e=new Float32Array(a*a),[s,o]=oe(a,a),t=o.createImageData(a,a);for(let i=0;i<a;i++)for(let r=0;r<a;r++){const n=r/a,l=i/a,c=pe(n,l,3,4,41),h=pe(n,l,32,3,43),u=se(r,i,9),d=Math.abs(pe(n,l,6,3,47)-.5)<.012?1:0;e[i*a+r]=c*.4+h*.2+u*.04-d*.3;const m=.5+(c-.5)*.3+(h-.5)*.15+(u-.5)*.05-d*.15,f=(i*a+r)*4;t.data[f]=Math.max(0,Math.min(255,m*255*.97)),t.data[f+1]=Math.max(0,Math.min(255,m*255*1)),t.data[f+2]=Math.max(0,Math.min(255,m*255*1.05)),t.data[f+3]=255}return o.putImageData(t,0,0),{c:s,h:e}}async function Lo(){const[a,e,s,o]=await Promise.all([Te("regolithe-couleur.webp"),Te("regolithe-normale.webp"),Te("sol-propre-couleur.webp"),Te("sol-propre-normale.webp")]);let t=a,i=e,r=s,n=o;if(!t||!i){const l=Do(512);t??=new Z(l.c),i??=new Z(fs(l.h,512,6))}if(!r||!n){const l=Co(512);r??=new Z(l.c),n??=new Z(fs(l.h,512,3))}return{saleC:lt(t,!0),saleN:lt(i,!1),propreC:lt(r,!0),propreN:lt(n,!1)}}function Bt(a,e){return a.wrapS=bs,a.wrapT=Xs,a.colorSpace=e?Ce:ws,a.needsUpdate=!0,a}function Eo(a,e){const[s,o]=oe(a,e),t=o.createImageData(a,e);for(let i=0;i<e;i++){const r=(i/e-.5)*Math.PI;for(let n=0;n<a;n++){const l=n/a,c=i/e,h=pe(l,c*.5,5,5,101),u=pe(l,c*.5,12,3,103),d=h>.53,m=Math.abs(r)>1.25-(u-.5)*.2;let f,w,b;if(m)f=235,w=240,b=245;else if(d)Math.abs(r)<.55&&u>.5?(f=190+u*30,w=160+u*20,b=110):(f=60+u*50,w=100+u*50,b=50+u*20);else{const C=Math.min(1,(.53-h)*6);f=15+20*(1-C),w=45+50*(1-C),b=110+50*(1-C)}const S=(i*a+n)*4;t.data[S]=f,t.data[S+1]=w,t.data[S+2]=b,t.data[S+3]=255}}return o.putImageData(t,0,0),s}function Oo(a,e){const[s,o]=oe(a,e),t=o.createImageData(a,e);for(let i=0;i<e;i++)for(let r=0;r<a;r++){const n=pe(r/a,i/e*.5,6,5,211),l=Math.max(0,Math.min(1,(n-.5)*3.2)),c=(i*a+r)*4,h=l*255;t.data[c]=h,t.data[c+1]=h,t.data[c+2]=h,t.data[c+3]=255}return o.putImageData(t,0,0),s}function Bo(a){const e=a.image,s=Math.min(2048,e.width),o=Math.max(1,Math.round(e.height*s/e.width)),[t,i]=oe(s,o);i.drawImage(e,0,0,s,o);const r=i.getImageData(0,0,s,o);for(let n=0;n<r.data.length;n+=4){const l=(r.data[n]*.3+r.data[n+1]*.59+r.data[n+2]*.11)*(r.data[n+3]/255);r.data[n]=r.data[n+1]=r.data[n+2]=l,r.data[n+3]=255}return i.putImageData(r,0,0),a.dispose(),new Z(t)}async function No(){const[a,e,s]=await Promise.all([Te("terre.webp"),Te("terre-nuages.webp"),Te("etoiles.webp")]),o=Bt(a??new Z(Eo(1024,512)),!0);o.anisotropy=4;const t=Bt(e?Bo(e):new Z(Oo(1024,512)),!1);return{terre:o,nuages:t,etoiles:s?Bt(s,!0):null}}function Ro(a=128,e=0){const[s,o]=oe(a,a),t=o.createRadialGradient(a/2,a/2,0,a/2,a/2,a/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(Math.max(.01,e),"rgba(255,255,255,0.9)"),t.addColorStop(Math.min(.99,e+.25),"rgba(255,255,255,0.25)"),t.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=t,o.fillRect(0,0,a,a);const i=new Z(s);return i.colorSpace=Ce,i}function Ht(a,e,s,o,t){a.clearRect(0,0,e,s);const i=t.taille??30;a.font=`600 ${i}px "Segoe UI", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle";const r=Math.min(e-8,a.measureText(o).width+28),n=i+18,l=(e-r)/2,c=t.barre!==void 0?4:(s-n)/2;if(t.fond&&(a.fillStyle=t.fond,Nt(a,l,c,r,n,n/2),a.fill(),t.bordure&&(a.strokeStyle=t.bordure,a.lineWidth=3,a.stroke())),a.fillStyle=t.couleur??"#fff",a.fillText(o,e/2,c+n/2+1,e-20),t.barre!==void 0){const h=Math.min(140,r-20),u=c+n+6;a.fillStyle="rgba(10,14,24,0.7)",Nt(a,(e-h)/2,u,h,10,5),a.fill();const d=Math.max(0,Math.min(1,t.barre));a.fillStyle=d>.95?"#ff5a4a":d>.7?"#ffc04a":"#7fd6ff",d>0&&(Nt(a,(e-h)/2+1,u+1,Math.max(8,(h-2)*d),8,4),a.fill())}}function Nt(a,e,s,o,t,i){a.beginPath(),a.moveTo(e+i,s),a.arcTo(e+o,s,e+o,s+t,i),a.arcTo(e+o,s+t,e,s+t,i),a.arcTo(e,s+t,e,s,i),a.arcTo(e,s,e+o,s,i),a.closePath()}const q=J/2,Qe=1969,Fo=[[42,58,11,1.4],[-55,30,8,1],[-30,-70,14,1.6],[75,-40,9,1.1],[-90,-10,12,1.3],[20,-95,7,.8],[100,85,13,1.5],[-78,92,10,1.2],[64,16,5,.6],[-18,44,4,.45],[8,-38,5,.55],[170,40,22,2.2],[-160,-150,26,2.6],[190,-170,15,1.6],[-200,120,18,1.9],[40,200,24,2.3],[-60,-210,12,1.3],[140,160,10,1.1],[-150,20,9,1],[215,215,14,1.5],[-220,-60,11,1.2]];function ct(a,e,s){const o=Math.max(0,Math.min(1,(s-a)/(e-a)));return o*o*(3-2*o)}function St(a,e){const s=Math.hypot(a,e),o=ct(18,42,s);let t=(qe(a/70+50,e/70+50,Qe,3)-.5)*6+(qe(a/16+9,e/16+9,Qe+7,2)-.5)*.9;for(const[l,c,h,u]of Fo){const d=a-l,m=e-c,f=d*d+m*m;if(f>h*h*4)continue;const w=Math.sqrt(f)/h;w<1&&(t-=u*(1-w*w));const b=(w-1)/.35;t+=u*.35*Math.exp(-b*b)}t*=o;const i=Math.abs(a),r=Math.abs(e),n=Math.pow(Math.pow(i,6)+Math.pow(r,6),1/6);if(n>130){const l=ct(130,200,n),c=ct(200,480,n),h=1-Math.abs(qe(a/160+3,e/160+3,Qe+3,4)*2-1);t+=l*(qe(a/28,e/28,Qe+11,3)-.35)*14,t+=c*(h*h*75+qe(a/45,e/45,Qe+13,3)*22),t+=ct(480,680,n)*30}return t}const et=.5,tt=q+8,Q=Math.round(tt*2/et)+1;let Wo=null;function Uo(){const a=new Float32Array(Q*Q);for(let e=0;e<Q;e++){const s=-tt+e*et;for(let o=0;o<Q;o++)a[e*Q+o]=St(-tt+o*et,s)}return a}function O(a,e){const s=(a+tt)/et,o=(e+tt)/et;if(s<0||o<0||s>=Q-1||o>=Q-1)return St(a,e);const t=Wo??=Uo(),i=Math.floor(s),r=Math.floor(o),n=s-i,l=o-r,c=r*Q+i,h=t[c]+(t[c+1]-t[c])*n,u=t[c+Q]+(t[c+Q+1]-t[c+Q])*n;return h+(u-h)*l}function Ds(a,e,s,o,t,i){const r=t(a+i,e)-t(a-i,e),n=t(a,e+i)-t(a,e-i),l=-r,c=2*i,h=-n,u=Math.hypot(l,c,h);s[o]=l/u,s[o+1]=c/u,s[o+2]=h/u}function jo(a){const e=(a+1)*(a+1),s=4*(a+1)*2,o=new Float32Array((e+s)*3),t=new Float32Array((e+s)*3),i=J/a;for(let h=0;h<=a;h++)for(let u=0;u<=a;u++){const d=-q+u*i,m=-q+h*i,f=(h*(a+1)+u)*3;o[f]=d,o[f+1]=O(d,m),o[f+2]=m,Ds(d,m,t,f,O,.5)}const r=[];for(let h=0;h<a;h++)for(let u=0;u<a;u++){const d=h*(a+1)+u,m=d+1,f=d+a+1,w=f+1;r.push(d,f,m,m,f,w)}let n=e;const l=(h,u)=>{const d=n;for(let m=0;m<=a;m++){const f=h(m)*3;for(let w=0;w<2;w++){const b=n*3;o[b]=o[f],o[b+1]=o[f+1]-w*3,o[b+2]=o[f+2],t[b]=t[f],t[b+1]=t[f+1],t[b+2]=t[f+2],n++}}for(let m=0;m<a;m++){const f=d+m*2,w=f+1,b=f+2,S=f+3;u?r.push(f,b,w,w,b,S):r.push(f,w,b,w,S,b)}};l(h=>h,!1),l(h=>a*(a+1)+h,!0),l(h=>h*(a+1),!0),l(h=>h*(a+1)+a,!1);const c=new st;return c.setAttribute("position",new _(o,3)),c.setAttribute("normal",new _(t,3)),c.setIndex(new _(Uint32Array.from(r),1)),c.computeBoundingSphere(),c}function Go(a,e){const s=a*4,o=s*(e+1),t=new Float32Array(o*3),i=new Float32Array(o*3);for(let c=0;c<=e;c++){const h=c/e,u=620*Math.pow(h,1.7);for(let d=0;d<s;d++){const m=Math.floor(d/a),f=d%a/a;let w,b;m===0?(w=-q+f*J,b=-q):m===1?(w=q,b=-q+f*J):m===2?(w=q-f*J,b=q):(w=-q,b=q-f*J);const S=Math.hypot(w,b),C=w+w/S*u,z=b+b/S*u,L=(c*s+d)*3;t[L]=C,t[L+1]=c===0?O(C,z):St(C,z),t[L+2]=z,Ds(C,z,i,L,St,1.5+u*.01)}}const r=new Uint32Array(e*s*6);let n=0;for(let c=0;c<e;c++)for(let h=0;h<s;h++){const u=c*s+h,d=c*s+(h+1)%s,m=u+s,f=d+s;r[n++]=u,r[n++]=d,r[n++]=m,r[n++]=d,r[n++]=f,r[n++]=m}const l=new st;return l.setAttribute("position",new _(t,3)),l.setAttribute("normal",new _(i,3)),l.setIndex(new _(r,1)),l.computeBoundingSphere(),l}const Vo=`
uniform sampler2D uMasque;
uniform float uTexel;
uniform sampler2D uSaleC;
uniform sampler2D uSaleN;
uniform sampler2D uPropreC;
uniform sampler2D uPropreN;
uniform float uDetail;
uniform vec2 uAntiSoleil;
varying vec3 vPosM;
varying vec3 vNorM;

float lmH12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 lmH22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float lmBruit(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lmH12(i), lmH12(i + vec2(1.0, 0.0)), f.x), mix(lmH12(i + vec2(0.0, 1.0)), lmH12(i + vec2(1.0)), f.x), f.y);
}
// Poussière (0 propre .. 1 sale) à partir du masque brut ; hors carte = sale.
// Masque lissé (B-spline cubique en 4 lectures bilinéaires) : contours ronds au lieu de marches.
float lmMasqueLisse(vec2 uv) {
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return 1.0;
  vec2 t = uv / uTexel - 0.5;
  vec2 i = floor(t);
  vec2 f = t - i;
  vec2 f2 = f * f; vec2 f3 = f2 * f;
  vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0;
  vec2 w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0;
  vec2 w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0;
  vec2 w3 = f3 / 6.0;
  vec2 g0 = w0 + w1; vec2 g1 = w2 + w3;
  vec2 h0 = (i - 1.0 + w1 / g0 + 0.5) * uTexel;
  vec2 h1 = (i + 1.0 + w3 / g1 + 0.5) * uTexel;
  return g0.y * (g0.x * texture2D(uMasque, vec2(h0.x, h0.y)).r + g1.x * texture2D(uMasque, vec2(h1.x, h0.y)).r)
       + g1.y * (g0.x * texture2D(uMasque, vec2(h0.x, h1.y)).r + g1.x * texture2D(uMasque, vec2(h1.x, h1.y)).r);
}
float lmSaleLisse(vec2 uv) { return smoothstep(0.3, 0.6, lmMasqueLisse(uv)); }
`,Ho=`
vec2 pw = vPosM.xz;
vec2 uvM = (pw + ${q.toFixed(1)}) / ${J.toFixed(1)};
float distCam = length(vPosM - cameraPosition);
float detailProche = uDetail * (1.0 - smoothstep(18.0, 45.0, distCam));
float nA = lmBruit(pw * 3.3);
float nB = lmBruit(pw * 3.3 + 17.0);
vec2 warp = (vec2(nA, nB) - 0.5) * uTexel * 1.1;
float mBrut = lmMasqueLisse(uvM + warp);
float sale = smoothstep(0.34, 0.56, mBrut + (lmBruit(pw * 11.0) - 0.5) * 0.08);
float epaisseur = clamp((mBrut - 0.67) / 0.33, 0.0, 1.0);
// Gradient du masque (bourrelet et sens des stries).
float sXp = lmSaleLisse(uvM + vec2(uTexel, 0.0));
float sXm = lmSaleLisse(uvM - vec2(uTexel, 0.0));
float sZp = lmSaleLisse(uvM + vec2(0.0, uTexel));
float sZm = lmSaleLisse(uvM - vec2(0.0, uTexel));
vec2 gradM = vec2(sXp - sXm, sZp - sZm);
float moy = (sXp + sXm + sZp + sZm) * 0.25;
float bord = clamp(4.0 * moy * (1.0 - moy), 0.0, 1.0);
// Couleurs : détail proche estompé au loin (évite la répétition et le moiré sur les montagnes).
float loin = smoothstep(25.0, 140.0, distCam);
float macro = texture2D(uSaleC, pw / 47.0).r;
float mers = lmBruit(pw * 0.008) * 0.6 + lmBruit(pw * 0.03) * 0.4;
vec3 cSaleLoin = texture2D(uSaleC, pw / 61.0).rgb * mix(0.8, 1.1, mers);
vec3 cSale = texture2D(uSaleC, pw / 3.1).rgb * mix(0.82, 1.12, macro);
cSale = mix(cSale, texture2D(uSaleC, pw / 0.9).rgb, 0.35 * detailProche);
cSale = mix(cSale, cSaleLoin, loin);
float grain = lmH12(floor(pw * 90.0));
float fwG = length(fwidth(pw)) * 90.0;
cSale *= 1.0 + (grain - 0.5) * 0.22 * (1.0 - smoothstep(0.4, 1.4, fwG));
cSale *= vec3(1.0, 0.985, 0.955) * mix(0.92, 1.1, epaisseur) * mix(1.0, 1.07, bord);
vec3 cPropre = texture2D(uPropreC, pw / 2.6).rgb * mix(0.85, 1.08, texture2D(uPropreC, pw / 33.0).g);
cPropre *= vec3(1.22, 1.28, 1.42);
// Stries de brossage : parallèles au bord le plus proche, sinon direction lente.
float aS = lmBruit(pw * 0.15) * 6.2831;
vec2 dirS = normalize(vec2(cos(aS), sin(aS)) * 0.35 + vec2(-gradM.y, gradM.x) * 4.0 + 1e-4);
float coordS = dot(pw, vec2(-dirS.y, dirS.x)) * 150.0 + lmBruit(pw * 5.0) * 7.0;
float fwS = length(fwidth(pw)) * 150.0;
float stries = sin(coordS) * (0.6 + 0.4 * lmBruit(pw * 9.0)) * (1.0 - smoothstep(0.5, 1.6, fwS));
cPropre *= 1.0 + stries * 0.07;
// Petits cailloux (cellules de Voronoï) sur le sol sale, à demi enfouis.
float caillou = 0.0;
float ombreC = 0.0;
vec2 cailN = vec2(0.0);
if (detailProche > 0.01) {
  vec2 cp = pw / 0.42;
  vec2 ci = floor(cp);
  for (int oy = -1; oy <= 1; oy++) {
    for (int ox = -1; ox <= 1; ox++) {
      vec2 cc = ci + vec2(float(ox), float(oy));
      vec2 hh = lmH22(cc);
      if (hh.x > 0.2) continue;
      vec2 centre = cc + lmH22(cc + 13.7);
      float ray = 0.05 + 0.28 * hh.y * hh.y;
      vec2 dv = (cp - centre) / ray;
      float d2 = dot(dv, dv);
      if (d2 < 1.0) { caillou = max(caillou, sqrt(1.0 - d2)); cailN = dv; }
      vec2 dvO = (cp - centre - uAntiSoleil * ray * 1.25) / (ray * 1.1);
      ombreC = max(ombreC, 1.0 - dot(dvO, dvO));
    }
  }
  float visC = detailProche * smoothstep(0.35, 0.8, sale) * smoothstep(0.25, 0.55, 1.0 - epaisseur * 0.6);
  caillou *= visC;
  ombreC = clamp(ombreC, 0.0, 1.0) * visC * (1.0 - step(0.05, caillou));
}
vec3 cCaillou = cSale * vec3(0.98, 0.96, 0.94) * (0.8 + 0.45 * lmH12(floor(pw / 0.42)));
vec3 couleurSol = mix(cPropre, cSale, sale);
couleurSol = mix(couleurSol, cCaillou, step(0.05, caillou));
couleurSol *= 1.0 - 0.6 * smoothstep(0.0, 0.35, ombreC);
diffuseColor.rgb *= couleurSol;
`,Io=`
float roughnessFactor = mix(0.93 - stries * 0.03, 0.98, sale);
roughnessFactor = mix(roughnessFactor, 0.8, step(0.05, caillou));
`,Xo=`
{
  vec3 nG = normalize(vNorM);
  vec3 tG = normalize(vec3(1.0, 0.0, 0.0) - nG * nG.x);
  vec3 bG = cross(tG, nG);
  vec3 nSale = texture2D(uSaleN, pw / 3.1).xyz * 2.0 - 1.0;
  vec3 nSaleF = texture2D(uSaleN, pw / 0.9).xyz * 2.0 - 1.0;
  nSale.xy += nSaleF.xy * 0.6 * detailProche;
  vec3 nPropre = texture2D(uPropreN, pw / 2.6).xyz * 2.0 - 1.0;
  nPropre.xy *= 0.55;
  vec2 pert = mix(nPropre.xy, nSale.xy * 0.9, sale) * (1.0 - 0.75 * loin);
  // Stries : petites ondulations perpendiculaires à leur direction.
  pert += vec2(-dirS.y, dirS.x) * cos(coordS) * 0.12 * (1.0 - sale) * (1.0 - smoothstep(0.5, 1.6, fwS));
  // Bourrelet : le gradient du masque relève la normale au bord de la poussière.
  pert -= gradM * (0.07 + 0.08 * bord);
  // Cailloux : hémisphères.
  pert += cailN * caillou * 1.6;
  vec3 nW = normalize(nG + tG * pert.x + bG * pert.y);
  normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
}
`;function Yo(a,e){const s=new Uint8Array(k*k),o=(u,d,m,f)=>{const w=a.data;for(let b=d;b<=f;b++){let S=b*k+u;for(let C=u;C<=m;C++,S++){const z=w[S];s[S]=z===0?0:170+z*85/255|0}}};o(0,0,k-1,k-1);const t=new rs(s,k,k,ns,ls);t.minFilter=jt,t.magFilter=jt,t.generateMipmaps=!1,t.unpackAlignment=1,t.needsUpdate=!0;const i=new rs(s,k,k,ns,ls);i.unpackAlignment=1;const r=new Ys(new U,new U),n=new U,l={uMasque:{value:t},uTexel:{value:1/k},uSaleC:{value:e.saleC},uSaleN:{value:e.saleN},uPropreC:{value:e.propreC},uPropreN:{value:e.propreN},uDetail:{value:1},uAntiSoleil:{value:new U(.84,.53).normalize()}},c=new W({color:16777215,roughness:1,metalness:0});c.onBeforeCompile=u=>{Object.assign(u.uniforms,l),u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPosM;
varying vec3 vNorM;`).replace("#include <project_vertex>",`#include <project_vertex>
vPosM = (modelMatrix * vec4(transformed, 1.0)).xyz;
vNorM = normalize(mat3(modelMatrix) * objectNormal);`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
${Vo}`).replace("#include <map_fragment>",Ho).replace("#include <roughnessmap_fragment>",Io).replace("#include <normal_fragment_maps>",Xo)},c.customProgramCacheKey=()=>"sol-lunaire-v1";let h=!1;return{materiau:c,masque:t,majMasque(u){const d=a.takeDirty();if(d){if(o(d.x0,d.y0,d.x1,d.y1),!h||(d.x1-d.x0+1)*(d.y1-d.y0+1)>k*k*.5){t.needsUpdate=!0,h=!0;return}r.min.set(d.x0,d.y0),r.max.set(d.x1+1,d.y1+1),n.set(d.x0,d.y0),u.copyTextureToTexture(i,t,r,n)}},setDetail(u){l.uDetail.value=u},dispose(){c.dispose(),t.dispose(),i.dispose(),e.saleC.dispose(),e.saleN.dispose(),e.propreC.dispose(),e.propreN.dispose()}}}function ms(a,e){const s=new K(jo(e),a.materiau);s.receiveShadow=!0,s.castShadow=!0,s.name="terrain-zone";const o=new K(Go(Math.max(32,e/4),Math.round(40+e/12)),a.materiau);return o.receiveShadow=!0,o.castShadow=!1,o.name="terrain-anneau",{zone:s,anneau:o}}const ko={salut:"Salut !",pouce:"Bien joué !",danse:"♪ Danse ! ♫",flemme:"Flemme…",bravo:"Bravo !",aide:"À l’aide !"};class qo{mats=new Map;materiau(e){let s=this.mats.get(e);if(!s){const[o,t]=oe(256,80);Ht(t,256,80,ko[e],{fond:"rgba(255,255,255,0.94)",couleur:"#14213d",taille:32,bordure:"#d4a017"});const i=new Z(o);i.colorSpace=Ce,s=new $e({map:i,depthTest:!1,transparent:!0}),this.mats.set(e,s)}return s}dispose(){for(const e of this.mats.values())e.map?.dispose(),e.dispose();this.mats.clear()}}class Cs{constructor(e,s){this.bulles=s,this.sprite=new _e(s.materiau("salut")),this.sprite.scale.set(1.6,.5,1),this.sprite.visible=!1,this.sprite.renderOrder=20,e.add(this.sprite)}sprite;reste=0;montrer(e){this.sprite.material=this.bulles.materiau(e),this.reste=3.2,this.sprite.visible=!0}update(e,s){if(this.reste<=0)return;this.reste-=e;const o=Math.min(1,(3.2-this.reste)*6),t=Math.min(1,this.reste*3),i=Math.max(.001,o*t);this.sprite.scale.set(1.6*i,.5*i,1),this.sprite.position.set(s.x,s.y+.55+(1-t)*.3,s.z),this.reste<=0&&(this.sprite.visible=!1)}dispose(){this.sprite.removeFromParent()}}function Ko(a,e,s){let o=e-a;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return a+o*s}class Qo{constructor(e,s,o,t){this.modeles=e,this.scene=s,this.particules=o,this.bulles=t}joueurs=new Map;tmp=new D;tmp2=new D;set(e,s){for(const o of this.joueurs.values())o.vu=!1;for(const o of e){if(o.id===s||!o.pose)continue;let t=this.joueurs.get(o.id);t||(t=this.creer(o),this.joueurs.set(o.id,t)),t.vu=!0;const i=o.pose;!Number.isFinite(i.x)||!Number.isFinite(i.z)||(t.cx=i.x,t.cy=Number.isFinite(i.y)?i.y:O(i.x,i.z),t.cz=i.z,t.cyaw=Number.isFinite(i.yaw)?i.yaw:t.cyaw,t.brosse=!!i.brosse,t.sac=Math.max(0,Math.min(1,i.sac||0)),i.outil!==t.outil&&(t.outil=i.outil,t.avatar.setOutil(i.outil),t.avatar.setAssis(Mt(i.outil))),(o.nom!==t.nom||o.couleur!==t.couleur)&&(t.nom=o.nom,o.couleur!==t.couleur&&(t.couleur=o.couleur,t.avatar.astro.setCouleur(o.couleur)),this.dessiner(t)))}for(const[o,t]of this.joueurs)t.vu||(this.retirer(t),this.joueurs.delete(o))}creer(e){const s=e.pose,o=new Ps(this.modeles,this.scene,e.couleur);o.setOutil(s.outil),o.setAssis(Mt(s.outil));const[t,i]=oe(256,80),r=new Z(t);r.colorSpace=Ce;const n=new _e(new $e({map:r,depthTest:!0,depthWrite:!1,transparent:!0}));n.scale.set(1.7,.53,1),n.renderOrder=19,this.scene.add(n);const l={id:e.id,avatar:o,nom:e.nom,couleur:e.couleur,cx:s.x,cy:s.y,cz:s.z,cyaw:s.yaw,x:s.x,y:s.y,z:s.z,yaw:s.yaw,vitesse:0,brosse:s.brosse,sac:s.sac,sacAffiche:-1,outil:s.outil,roule:0,etiquette:n,ctx:i,tex:r,bulle:new Cs(this.scene,this.bulles),accPart:0,vu:!0};return this.dessiner(l),l}dessiner(e){e.sacAffiche=e.sac,Ht(e.ctx,256,80,e.nom.slice(0,20),{fond:"rgba(8,12,24,0.62)",couleur:e.couleur,taille:26,barre:e.sac}),e.tex.needsUpdate=!0}emote(e,s){const o=this.joueurs.get(e);return o?(o.bulle.montrer(s),!0):!1}update(e,s,o){const t=1-Math.exp(-e*9);for(const i of this.joueurs.values()){const r=i.x,n=i.z;Math.abs(i.cx-i.x)+Math.abs(i.cz-i.z)>25&&(i.x=i.cx,i.z=i.cz),i.x+=(i.cx-i.x)*t,i.y+=(i.cy-i.y)*t,i.z+=(i.cz-i.z)*t,i.yaw=Ko(i.yaw,i.cyaw,t);const l=Math.hypot(i.x-r,i.z-n)/Math.max(e,.001);i.vitesse+=(l-i.vitesse)*Math.min(1,e*6),i.roule+=l*e;const c=i.avatar,h=O(i.x,i.z),u=Math.max(i.y,h);if(c.assis&&c.vehicule?(c.vehicule.group.position.set(i.x,u,i.z),c.vehicule.group.rotation.set(0,i.yaw,0),c.vehicule.rouler(i.roule)):(c.astro.group.position.set(i.x,u,i.z),c.astro.group.rotation.set(0,i.yaw,0)),c.animer(s,i.vitesse,i.brosse),c.hautTete(this.tmp),i.etiquette.position.set(this.tmp.x,this.tmp.y+.15,this.tmp.z),i.bulle.update(e,this.tmp),Math.abs(i.sac-i.sacAffiche)>.04&&this.dessiner(i),i.brosse&&this.tmp.distanceToSquared(o)<4900){i.accPart+=28*e*this.particules.densite;const m=Math.floor(i.accPart);if(m>0){i.accPart-=m,(c.assis&&c.vehicule?c.vehicule.group:c.astro.group).updateMatrixWorld(!0),c.positionTete(this.tmp2)||this.tmp2.set(i.x-Math.sin(i.yaw)*.6,0,i.z-Math.cos(i.yaw)*.6);const f=O(this.tmp2.x,this.tmp2.z);this.particules.emettre(Math.min(m,12),this.tmp2.x,f+.03,this.tmp2.z,.4+.4*.5,.75,.5,f)}}}}nombre(){return this.joueurs.size}retirer(e){e.avatar.dispose(),e.etiquette.removeFromParent(),e.etiquette.material.dispose(),e.tex.dispose(),e.bulle.dispose()}dispose(){for(const e of this.joueurs.values())this.retirer(e);this.joueurs.clear()}}const y={combinaison:new W({color:15329250,roughness:.78}),gris:new W({color:9080211,roughness:.55,metalness:.4}),sombre:new W({color:2829877,roughness:.6,metalness:.3}),visiere:new W({color:14263361,roughness:.12,metalness:1}),metal:new W({color:13225170,roughness:.3,metalness:.9}),bois:new W({color:10119996,roughness:.7}),poils:new W({color:15921906,roughness:.9}),jaune:new W({color:15774499,roughness:.5,metalness:.2}),orange:new W({color:15229996,roughness:.55,metalness:.1}),bleu:new W({color:3104680,roughness:.5,metalness:.2}),ecran:new W({color:727594,emissive:new F(4179711),emissiveIntensity:2.2,roughness:.3}),lumiere:new W({color:1118481,emissive:new F(16757575),emissiveIntensity:3}),panneau:new W({color:1780298,roughness:.25,metalness:.7}),roche:new W({color:7828333,roughness:.95,flatShading:!0}),holo:new W({color:663600,emissive:new F(4772351),emissiveIntensity:2,transparent:!0,opacity:.75,depthWrite:!1})},M={capsule:new Js(1,1,6,12),sphere:new wt(1,24,16),boite:new Ks(1,1,1),cyl:new Zs(1,1,1,20),cone:new Ss(1,1,20),tore:new Qs(1,.12,8,24)};function A(a,e,s=0,o=0,t=0,i=1,r=1,n=1){const l=new K(a,e);return l.position.set(s,o,t),l.scale.set(i,r,n),l.castShadow=!0,l.receiveShadow=!0,l}function Zo(a){const e=new B,s=new W({color:new F(a),roughness:.6}),o=new B;o.position.y=.95,e.add(o);const t=new B;o.add(t),t.add(A(M.capsule,y.combinaison,0,.32,0,.27,.22,.22)),t.add(A(M.tore,s,0,.22,0,.27,.27,.5).rotateX(Math.PI/2)),t.add(A(M.boite,y.gris,0,.42,.25,.42,.55,.2)),t.add(A(M.boite,s,0,.42,.36,.3,.08,.02));const i=new B;i.position.y=.72,t.add(i),i.add(A(M.sphere,y.combinaison,0,0,0,.23,.23,.23)),i.add(A(M.sphere,y.visiere,0,.01,-.07,.19,.16,.18));const r=m=>{const f=new B;return f.position.set(.33*m,.55,0),t.add(f),f.add(A(M.capsule,y.combinaison,0,-.28,0,.085,.22,.085)),f.add(A(M.tore,s,0,-.12,0,.09,.09,.2).rotateX(Math.PI/2)),f.add(A(M.sphere,y.gris,0,-.58,0,.08,.08,.08)),f},n=r(1),l=r(-1),c=new bt;c.position.y=-.6,n.add(c);const h=m=>{const f=new B;return f.position.set(.13*m,0,0),o.add(f),f.add(A(M.capsule,y.combinaison,0,-.42,0,.11,.3,.11)),f.add(A(M.boite,y.sombre,0,-.88,-.05,.17,.12,.3)),f},u=h(1),d=h(-1);return{group:e,main:c,setCouleur(m){s.color.set(m)},animer(m,f,w){const b=Math.max(1.5,w*2.2),S=Math.sin(f*b*2);switch(o.position.y=.95,o.rotation.set(0,0,0),t.rotation.set(0,0,0),n.rotation.set(0,0,.12),l.rotation.set(0,0,-.12),u.rotation.set(0,0,0),d.rotation.set(0,0,0),m){case"repos":t.rotation.x=Math.sin(f*1.6)*.02;break;case"marche":u.rotation.x=S*.5,d.rotation.x=-S*.5,n.rotation.x=-S*.4,l.rotation.x=S*.4,o.position.y=.95+Math.abs(S)*.04;break;case"brosse":o.position.y=.5,t.rotation.x=-.75,u.rotation.x=1.35,d.rotation.x=1.35,n.rotation.x=-.75+Math.sin(f*13)*.18,n.rotation.z=.05+Math.sin(f*13+1)*.12,l.rotation.x=-.4;break;case"brosse-debout":t.rotation.x=-.25,n.rotation.x=-.55+Math.sin(f*4)*.12,n.rotation.z=Math.sin(f*4)*.35,l.rotation.x=-.9+Math.sin(f*4)*.12,l.rotation.z=.3+Math.sin(f*4)*.35,u.rotation.x=S*.25,d.rotation.x=-S*.25;break;case"pousse":t.rotation.x=-.2,n.rotation.x=-1.1,l.rotation.x=-1.1,u.rotation.x=S*.45,d.rotation.x=-S*.45;break;case"conduite":o.position.y=0,u.rotation.x=-1.45,d.rotation.x=-1.45,n.rotation.x=-1,l.rotation.x=-1;break}},dispose(){s.dispose()}}}function Jo(a){const e=new B,s=new bt,o=[];switch(a){case"brosse-a-dents":e.add(A(M.cyl,y.bleu,0,-.09,0,.012,.19,.012)),e.add(A(M.boite,y.poils,0,-.18,-.015,.02,.03,.03)),s.position.set(0,-.19,0);break;case"brosse-a-recurer":e.add(A(M.boite,y.bois,0,-.08,0,.09,.05,.2)),e.add(A(M.boite,y.jaune,0,-.12,0,.09,.04,.2)),s.position.set(0,-.14,0);break;case"balai":e.add(A(M.cyl,y.bois,0,-.65,0,.018,1.3,.018)),e.add(A(M.boite,y.jaune,0,-1.3,0,.45,.08,.08)),e.add(A(M.boite,y.poils,0,-1.37,0,.44,.08,.05)),s.position.set(0,-1.38,0);break;case"aspirateur-dorsal":e.add(A(M.cyl,y.gris,0,-.6,0,.03,1.2,.03)),e.add(A(M.boite,y.orange,0,-1.22,0,.6,.06,.14)),s.position.set(0,-1.25,0);break;default:{e.add(A(M.cyl,y.gris,0,-.5,0,.025,1,.025));const t=A(M.boite,y.jaune,0,-1.05,0,1.1,.35,.5);e.add(t);const i=A(M.cyl,y.poils,0,-1.2,-.25,.14,1,.14);i.rotation.z=Math.PI/2,e.add(i),o.push(i),s.position.set(0,-1.25,-.25)}}return e.add(s),{group:e,tete:s,animer(t,i){for(const r of o)r.rotation.x=i?t*20:0},dispose(){}}}function _o(a){const e=a==="camion-aspirateur",s=e?5.2:2.4,o=e?2.4:1.4,t=new B;t.add(A(M.boite,e?y.orange:y.jaune,0,e?1.2:.65,.2,o,e?1.6:.6,s*.8)),e&&t.add(A(M.cyl,y.metal,0,2.3,.9,.9,2.6,.9).rotateX(Math.PI/2)),t.add(A(M.boite,y.sombre,0,e?2.25:1.15,e?-1.6:-.15,o*.7,.06,.6));const i=[],r=e?[-1.8,.2,1.9]:[-.75,.8];for(const u of r)for(const d of[-1,1]){const m=A(M.cyl,y.sombre,d*(o/2+.05),e?.5:.32,u,e?.5:.32,.25,e?.5:.32);m.rotation.z=Math.PI/2,i.push(m),t.add(m)}const n=[],l=e?3:2;for(let u=0;u<l;u++){const d=A(M.cyl,y.poils,(u-(l-1)/2)*o/l,.12,-s/2-.2,.32,.08,.32);n.push(d),t.add(d)}const c=new bt;c.position.set(0,0,-s/2-.2),t.add(c);const h=new bt;return h.position.set(0,e?1.95:.95,e?-1.4:.1),t.add(h),{group:t,tete:c,siege:h,animer(u,d){for(const m of n)m.rotation.y=d?u*9:0},rouler(u){for(const d of i)d.rotation.x=-u/(e?.5:.32)},dispose(){}}}function $o(){const a=new B;a.add(A(M.sphere,y.combinaison,0,0,0,5,3.6,5)),a.add(A(M.tore,y.gris,0,.3,0,5,5,3).rotateX(Math.PI/2));for(let o=0;o<3;o++){const t=o/3*Math.PI*2+.6,i=A(M.cyl,y.combinaison,Math.cos(t)*8,1.3,Math.sin(t)*8,1.6,4.2,1.6);i.rotation.z=Math.PI/2,i.rotation.y=-t,a.add(i)}const e=new B;e.name="terminal",e.position.set(3.5,0,9),e.add(A(M.boite,y.gris,0,.6,0,.8,1.2,.5)),e.add(A(M.boite,y.ecran,0,1.05,-.26,.65,.4,.02)),a.add(e);const s=new B;s.name="rampe",s.position.set(-10,0,-7),s.add(A(M.cyl,y.sombre,0,.15,0,4.2,.3,4.2)),s.add(A(M.tore,y.jaune,0,.31,0,3.6,3.6,.3).rotateX(Math.PI/2)),a.add(s);for(let o=0;o<4;o++){const t=A(M.boite,y.panneau,8+o*.1,2.2,-9+o*2.6,2.2,.05,1.4);t.rotation.z=.6,a.add(t),a.add(A(M.cyl,y.gris,8+o*.1,1.1,-9+o*2.6,.06,2.2,.06))}return a.add(A(M.cyl,y.metal,-3,4.5,3,.05,6,.05)),a.add(A(M.sphere,y.lumiere,-3,7.5,3,.15,.15,.15)),a}function ei(){const a=new B;return a.add(A(M.cyl,y.gris,0,1,0,1,2,1)),a.add(A(M.cone,y.orange,0,2.4,0,1.15,.8,1.15)),a.add(A(M.tore,y.lumiere,0,.12,0,1.25,1.25,.6).rotateX(Math.PI/2)),a}function ti(){const a=new B,e=new B;a.add(e),e.add(A(M.cyl,y.combinaison,0,4.3,0,1.1,7,1.1)),e.add(A(M.cone,y.orange,0,8.8,0,1.1,2,1.1));for(let s=0;s<4;s++){const o=s/4*Math.PI*2,t=A(M.boite,y.orange,Math.cos(o)*1.3,1.3,Math.sin(o)*1.3,.12,2.2,1);t.rotation.y=-o,e.add(t)}return e.add(A(M.cone,y.sombre,0,.5,0,.8,1,.8)),{group:a,setDecollage(s){e.position.y=s*s*900,e.visible=s<.999},dispose(){}}}function si(){const a=new B;return a.add(A(M.cyl,y.jaune,0,.18,0,.45,.22,.45)),a.add(A(M.sphere,y.sombre,0,.3,0,.25,.15,.25)),a.add(A(M.cyl,y.poils,0,.04,-.1,.4,.06,.4)),a.add(A(M.sphere,y.lumiere,0,.42,-.1,.05,.05,.05)),a}function oi(){const a=new B;a.add(A(M.cyl,y.gris,0,.4,0,1,.8,1));const e=new B;e.position.y=1.2,a.add(e);const s=[];for(let o=0;o<8;o++)for(let t=0;t<8;t++){const i=new K(M.boite,y.holo);i.position.set((t-3.5)*.2,0,(o-3.5)*.2),i.scale.set(.16,.02,.16),e.add(i),s.push(i)}return{group:a,animer(o){e.rotation.y=o*.3},setProprete(o){for(let t=0;t<64;t++){const i=o[t]??0;s[t].scale.y=.02+i*.8,s[t].position.y=s[t].scale.y/2}},dispose(){}}}function ii(a,e,s){const o=new B;let t=a>>>0||1;const i=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=[new ks(1,0),new qs(1,0)],n=260,l=new gt,c=new Vt,h=new D,u=new D;for(let d=0;d<r.length;d++){const m=new Ms(r[d],y.roche,n/2);m.castShadow=!0,m.receiveShadow=!0;for(let f=0;f<n/2;f++){const w=i()*Math.PI*2,b=e+(s-e)*Math.pow(i(),1.6);h.set(Math.cos(w)*b,0,Math.sin(w)*b);const S=.4+Math.pow(i(),3)*(b<e+40?3:9);u.set(S*(.8+i()*.6),S*(.5+i()*.5),S*(.8+i()*.6)),c.setFromAxisAngle(h.clone().set(i()-.5,1,i()-.5).normalize(),i()*6.28),l.compose(h,c,u),m.setMatrixAt(f,l)}o.add(m)}return o}const Je={astronaute:Zo,outil:Jo,vehicule:_o,base:$o,depot:ei,fusee:ti,robot:si,hologramme:oi,decor:ii},ai=Object.assign({"./models/index.ts":()=>So(()=>import("./models-CaQgNxTp.js"),__vite__mapDeps([0,1]),import.meta.url)});let ri=!1;async function ni(){const a=ai["./models/index.ts"];if(!a||ri)return{modeles:Je,source:"provisoire"};try{const s=(await a()).modeles;return!s||typeof s.astronaute!="function"?{modeles:Je,source:"provisoire"}:{modeles:li(s),source:"graphiste"}}catch(e){return console.warn("[monde] modèles du graphiste indisponibles, repli provisoire :",e),{modeles:Je,source:"provisoire"}}}function li(a){const e={};for(const s of Object.keys(Je)){const o=a[s],t=Je[s];e[s]=typeof o=="function"?(...i)=>{try{const r=o.apply(a,i);if(r==null)throw new Error("modèle vide");return r}catch(r){return console.warn(`[monde] modeles.${s} a échoué, repli provisoire :`,r),t(...i)}}:t}return e}const fe=new D(-.82,.25,-.52).normalize(),ci=new D(-.17,.27,.95).normalize(),Rt=4200;function ui(a,e){const s=new B;s.name="ciel";const o=[];let t=null;if(e.etoiles)t=e.etoiles,t.mapping=_s,a.background=t,a.backgroundIntensity=.55,o.push(t);else{a.background=new F(4);const N=7e3,Y=new Float32Array(N*3),I=new Float32Array(N*3),ve=new Float32Array(N);let V=12345;const G=()=>(V=V*1664525+1013904223>>>0,V/4294967296);for(let R=0;R<N;R++){let xe=G()*2-1;const We=G()*Math.PI*2;R%3===0&&(xe=(G()-.5)*.35);const ee=Math.sqrt(1-xe*xe),E=new D(ee*Math.cos(We),xe,ee*Math.sin(We));R%3===0&&E.applyAxisAngle(new D(1,0,.3).normalize(),1.1),E.multiplyScalar(Rt*.95),Y[R*3]=E.x,Y[R*3+1]=E.y,Y[R*3+2]=E.z;const Ue=G(),te=Ue<.15?[1,.82,.65]:Ue<.35?[.75,.85,1]:[1,1,1],ge=.35+Math.pow(G(),6)*2.2;I[R*3]=te[0]*ge,I[R*3+1]=te[1]*ge,I[R*3+2]=te[2]*ge,ve[R]=1+Math.pow(G(),8)*2.6}const ue=new st;ue.setAttribute("position",new _(Y,3)),ue.setAttribute("color",new _(I,3)),ue.setAttribute("taille",new _(ve,1));const Fe=new X({vertexShader:`
        attribute float taille; attribute vec3 color; varying vec3 vC;
        void main() { vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = taille * 1.6; }`,fragmentShader:`
        varying vec3 vC;
        void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, a); }`,transparent:!0,depthWrite:!1,blending:me}),Ee=new ys(ue,Fe);Ee.frustumCulled=!1,Ee.renderOrder=-10,s.add(Ee),o.push(ue,Fe)}const i=Ro(256,.08),r=new $e({map:i,color:new F(6,5.6,5),blending:me,depthWrite:!1,fog:!1}),n=new _e(r);n.position.copy(fe).multiplyScalar(Rt*.9),n.scale.setScalar(260),n.renderOrder=-9,s.add(n);const l=new $e({map:i,color:new F(.5,.45,.38),blending:me,depthWrite:!1,opacity:.6}),c=new _e(l);c.position.copy(n.position),c.scale.setScalar(1300),c.renderOrder=-9,s.add(c),o.push(i,r,l);const h=140,u=new B;u.position.copy(ci).multiplyScalar(Rt*.62),u.rotation.set(.35,2.2,.41);const d=new wt(h,96,64),m=new W({map:e.terre,roughness:.62,metalness:0,emissive:new F(132106),envMapIntensity:0}),f=new K(d,m);u.add(f);const w=new W({color:16777215,alphaMap:e.nuages,transparent:!0,depthWrite:!1,roughness:1,envMapIntensity:0}),b=new K(d,w);b.scale.setScalar(1.012),u.add(b);const S=new wt(h*1.08,64,48),C=new X({uniforms:{uSoleil:{value:fe}},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying vec3 vNW;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
        vNW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uSoleil; varying vec3 vN; varying vec3 vV; varying vec3 vNW;
      void main() {
        float f = 1.0 - abs(dot(vN, vV));
        float rim = pow(f, 2.6) * smoothstep(1.0, 0.82, f);
        float jour = smoothstep(-0.35, 0.5, dot(vNW, uSoleil));
        vec3 c = vec3(0.32, 0.6, 1.4) * rim * (0.08 + 1.4 * jour);
        gl_FragColor = vec4(c, 1.0);
      }`,blending:me,transparent:!0,depthWrite:!1,side:As}),z=new K(S,C);u.add(z);const L=C.clone();L.side=0,L.fragmentShader=`
    uniform vec3 uSoleil; varying vec3 vN; varying vec3 vV; varying vec3 vNW;
    void main() {
      float f = 1.0 - max(dot(vN, vV), 0.0);
      float jour = smoothstep(-0.2, 0.6, dot(vNW, uSoleil));
      gl_FragColor = vec4(vec3(0.25, 0.5, 1.0) * pow(f, 3.0) * jour * 0.9, 1.0);
    }`;const $=new K(d,L);$.scale.setScalar(1.02),u.add($),s.add(u),o.push(d,m,w,S,C,L,e.terre,e.nuages);for(const N of[f,b,z,$])N.castShadow=!1,N.receiveShadow=!1;return a.add(s),{group:s,update(N,Y){s.position.copy(N.position),b.rotation.y+=Y*.004,f.rotation.y+=Y*.0015},dispose(){a.remove(s),a.background===t&&(a.background=null);for(const N of o)N.dispose()}}}const Ft=.18;function ut(a){return Math.abs(a)<Ft?0:(a-Math.sign(a)*Ft)/(1-Ft)}function hi(a){const e=a;if(!e||!e.tagName)return!1;const s=e.tagName;return s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.isContentEditable}class di{constructor(e,s){this.canvas=e,this.action=s;const o=(t,i,r,n)=>{t.addEventListener(i,r,n),this.enleve.push(()=>t.removeEventListener(i,r,n))};o(window,"keydown",t=>this.bas(t)),o(window,"keyup",t=>{this.touches.delete(t.code)}),o(window,"blur",()=>this.vider()),o(e,"mousedown",t=>{this.pause||(e.focus(),document.pointerLockElement!==e&&this.verrouiller(),t.button===0&&(this.sourisBas=!0))}),o(window,"mouseup",t=>{t.button===0&&(this.sourisBas=!1)}),o(window,"mousemove",t=>{if(this.pause||document.pointerLockElement!==e)return;const i=Math.max(-150,Math.min(150,t.movementX)),r=Math.max(-150,Math.min(150,t.movementY));this.dYaw-=i*.0024*this.sensibilite,this.dPitch+=r*.0024*this.sensibilite*(this.inverserY?-1:1)}),o(e,"wheel",t=>{if(t.preventDefault(),this.pause)return;const i=performance.now();i-this.derniereMolette<110||Math.abs(t.deltaY)<1||(this.derniereMolette=i,this.action({type:"outil",choix:t.deltaY>0?"suivant":"precedent"}))},{passive:!1}),o(e,"contextmenu",t=>t.preventDefault()),o(document,"pointerlockchange",()=>{document.pointerLockElement!==e&&(this.sourisBas=!1,!this.liberationVoulue&&!this.pause&&this.menu(),this.liberationVoulue=!1)})}avance=0;lateral=0;courir=!1;brosser=!1;dYaw=0;dPitch=0;sensibilite=1;inverserY=!1;pause=!1;touches=new Set;sourisBas=!1;manetteBrosse=!1;manetteCourir=!1;boutonsAvant=[];derniereMolette=0;liberationVoulue=!1;dernierMenu=0;enleve=[];menu(){const e=performance.now();e-this.dernierMenu<300||(this.dernierMenu=e,this.action({type:"touche",t:"menu"}))}verrouiller(){try{const e=this.canvas.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}liberer(){document.pointerLockElement===this.canvas&&(this.liberationVoulue=!0,document.exitPointerLock())}setPause(e){this.pause=e,this.vider(),e&&this.liberer()}vider(){this.touches.clear(),this.sourisBas=!1,this.dYaw=this.dPitch=0}bas(e){if(!hi(e.target)&&(e.code==="Tab"&&e.preventDefault(),!this.pause)){if(e.repeat){this.touches.add(e.code);return}switch(this.touches.add(e.code),e.code){case"KeyE":this.action({type:"interagir"});break;case"Space":e.preventDefault(),this.action({type:"sauter"});break;case"Tab":this.action({type:"touche",t:"carte"});break;case"KeyB":this.action({type:"touche",t:"boutique"});break;case"KeyT":e.preventDefault(),this.action({type:"touche",t:"chat"});break;case"KeyG":this.action({type:"touche",t:"emotes"});break;case"KeyP":this.action({type:"touche",t:"poser-depot"});break;case"Escape":this.menu();break;default:if(e.code.startsWith("Digit")){const s=Number(e.code.slice(5));s>=1&&s<=7&&this.action({type:"outil",choix:s-1})}}}}lire(e){const s=this.touches;let o=(s.has("KeyW")?1:0)-(s.has("KeyS")?1:0),t=(s.has("KeyD")?1:0)-(s.has("KeyA")?1:0);o+=(s.has("ArrowUp")?1:0)-(s.has("ArrowDown")?1:0),t+=(s.has("ArrowRight")?1:0)-(s.has("ArrowLeft")?1:0),this.manetteBrosse=!1,this.manetteCourir=!1,this.lireManette(e,(i,r)=>{o+=i,t+=r}),this.avance=Math.max(-1,Math.min(1,o)),this.lateral=Math.max(-1,Math.min(1,t)),this.courir=!this.pause&&(s.has("ShiftLeft")||s.has("ShiftRight")||this.manetteCourir),this.brosser=!this.pause&&(this.sourisBas||this.manetteBrosse),this.pause&&(this.avance=this.lateral=0)}lireManette(e,s){if(this.pause||typeof navigator.getGamepads!="function")return;const o=navigator.getGamepads();let t=null;for(let c=0;c<o.length;c++){const h=o[c];if(h&&h.connected){t=h;break}}if(!t)return;s(-ut(t.axes[1]??0),ut(t.axes[0]??0));const i=ut(t.axes[2]??0),r=ut(t.axes[3]??0);this.dYaw-=i*2.6*e*this.sensibilite,this.dPitch+=r*2*e*this.sensibilite*(this.inverserY?-1:1);const n=c=>!!t&&!!t.buttons[c]&&(t.buttons[c].pressed||t.buttons[c].value>.3);this.manetteBrosse=n(7),this.manetteCourir=n(10)||n(6);const l=c=>{const h=n(c),u=this.boutonsAvant[c]??!1;return this.boutonsAvant[c]=h,h&&!u};l(0)&&this.action({type:"sauter"}),l(2)&&this.action({type:"interagir"}),l(3)&&this.action({type:"touche",t:"carte"}),l(4)&&this.action({type:"outil",choix:"precedent"}),l(5)&&this.action({type:"outil",choix:"suivant"}),l(9)&&this.action({type:"touche",t:"menu"}),l(8)&&this.action({type:"touche",t:"boutique"})}dispose(){this.liberer();for(const e of this.enleve)e()}}const fi=1.62,ht=J/2-1,mi=.4;function Wt(a,e,s){let o=e-a;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return a+o*s}class pi{constructor(e,s,o,t,i,r){this.camera=t,this.field=i,this.particules=r,this.avatar=new Ps(e,s,o),this.pos.y=O(this.pos.x,this.pos.z)}avatar;pos=new D(0,0,19);vx=0;vz=0;vy=0;auSol=!0;yaw=0;camYaw=0;camPitch=.12;camDist=4.6;enVehicule=!1;vehPos=new D;vehYaw=Math.PI;vehVitesse=0;vehDistance=0;outil=null;rayon=.14;vitesse=1.4;sacPlein=!1;brosse=!1;veutBrosser=!1;enMouvement=!1;vitesseSol=0;tete=new D;tetePrec=new D;teteValide=!1;accPart=0;tmp=new D;setOutil(e,s,o){const t=!this.outil||this.outil.id!==e.id;if(this.outil=e,this.rayon=s,this.vitesse=o,!t)return;const i=this.enVehicule;if(i&&this.descendre(),this.avatar.setOutil(e.id),this.teteValide=!1,Mt(e.id)){const r=i?this.vehPos:this.pos;this.vehPos.set(r.x,O(r.x,r.z),r.z),this.vehYaw=i?this.vehYaw:this.yaw,this.vehVitesse=0,this.monter()}}monter(){this.avatar.vehicule&&(this.enVehicule=!0,this.avatar.setAssis(!0),this.teteValide=!1)}descendre(){if(!this.enVehicule)return;this.enVehicule=!1,this.avatar.setAssis(!1);const e=this.outil?.id==="camion-aspirateur"?2.2:1.4;this.pos.set(this.vehPos.x-Math.cos(this.vehYaw)*e,0,this.vehPos.z+Math.sin(this.vehYaw)*e),this.pos.y=O(this.pos.x,this.pos.z),this.yaw=this.vehYaw,this.vehVitesse=0,this.teteValide=!1}distanceVehicule(){return this.avatar.vehicule?this.enVehicule?0:Math.hypot(this.pos.x-this.vehPos.x,this.pos.z-this.vehPos.z):1/0}sauter(){this.enVehicule||!this.auSol||(this.vy=2.7,this.auSol=!1)}centre(){return this.enVehicule?this.vehPos:this.pos}update(e,s,o,t,i){this.camYaw+=o.dYaw,this.camPitch=Math.max(-.35,Math.min(1.25,this.camPitch+o.dPitch)),o.dYaw=o.dPitch=0;const r=this.outil,n=!!r&&(this.enVehicule?r.vehicule:!r.vehicule&&!!this.avatar.tenu);this.veutBrosser=o.brosser&&n,this.enVehicule?this.conduire(e,o,t):this.marcher(e,o,t),this.brosse=this.veutBrosser&&this.auSol&&!this.sacPlein;const l=this.avatar;if(this.enVehicule&&l.vehicule?(l.vehicule.group.position.copy(this.vehPos),l.vehicule.group.rotation.set(0,this.vehYaw,0),l.vehicule.rouler(this.vehDistance)):(l.astro.group.position.copy(this.pos),l.astro.group.rotation.set(0,this.yaw,0),l.vehicule&&(l.vehicule.group.position.copy(this.vehPos),l.vehicule.group.rotation.set(0,this.vehYaw,0))),l.animer(s,this.vitesseSol,this.veutBrosser&&this.auSol),(this.enVehicule&&l.vehicule?l.vehicule.group:l.astro.group).updateMatrixWorld(!0),this.brosse){const c=this.centre(),h=this.enVehicule?this.vehYaw:this.yaw;let u=l.positionTete(this.tete);if(u&&Math.hypot(this.tete.x-c.x,this.tete.z-c.z)>7&&(u=!1),!u&&r){const m=To[r.id];this.tete.set(c.x-Math.sin(h)*m,c.y,c.z-Math.cos(h)*m)}const d=this.field.at(this.tete.x,this.tete.z)>0||this.field.at(this.tetePrec.x,this.tetePrec.z)>0;this.teteValide||(this.tetePrec.copy(this.tete),this.teteValide=!0),i([{xa:this.tetePrec.x,za:this.tetePrec.z,xb:this.tete.x,zb:this.tete.z,r:this.rayon}]),this.tetePrec.copy(this.tete),d&&this.emettrePoussiere(e)}else this.teteValide=!1;this.placerCamera(e)}emettrePoussiere(e){const s=this.rayon;this.accPart+=(30+s*140)*e*this.particules.densite;const o=Math.floor(this.accPart);if(o<=0)return;this.accPart-=o;const t=O(this.tete.x,this.tete.z);this.particules.emettre(Math.min(o,40),this.tete.x,t+.03,this.tete.z,.35+s*.7,.7+s*.45,Math.min(1.2,s*1.6),t)}marcher(e,s,o){const t=this.camYaw,i=-Math.sin(t),r=-Math.cos(t),n=Math.cos(t),l=-Math.sin(t);let c=i*s.avance+n*s.lateral,h=r*s.avance+l*s.lateral;const u=Math.hypot(c,h);u>1&&(c/=u,h/=u);const d=this.veutBrosser,m=d?this.vitesse:s.courir?5.6:3.1,f=this.auSol?1-Math.exp(-e*9):1-Math.exp(-e*1.2);this.vx+=(c*m-this.vx)*f,this.vz+=(h*m-this.vz)*f,this.pos.x+=this.vx*e,this.pos.z+=this.vz*e,this.collisions(this.pos,mi,o),this.vitesseSol=Math.hypot(this.vx,this.vz),this.enMouvement=this.vitesseSol>.2;const w=this.outil?.id==="balayeuse-poussee";d&&!w?this.yaw=Wt(this.yaw,this.camYaw,1-Math.exp(-e*8)):this.vitesseSol>.3&&(this.yaw=Wt(this.yaw,Math.atan2(-this.vx,-this.vz),1-Math.exp(-e*(w?3:10))));const b=O(this.pos.x,this.pos.z);this.auSol?this.pos.y=b:(this.vy-=fi*e,this.pos.y+=this.vy*e,this.pos.y<=b&&(this.pos.y=b,this.vy=0,this.auSol=!0,this.particules.emettre(Math.round(10*this.particules.densite),this.pos.x,b+.05,this.pos.z,.9,.5,.5,b)))}conduire(e,s,o){const t=this.veutBrosser?this.vitesse:this.vitesse*1.5,i=s.avance>=0?s.avance*t:s.avance*t*.45;this.vehVitesse+=(i-this.vehVitesse)*(1-Math.exp(-e*(s.avance===0?1.6:1.1)));const r=this.outil?.id==="camion-aspirateur",n=Math.min(1,Math.abs(this.vehVitesse)/2.5)*Math.sign(this.vehVitesse);this.vehYaw-=s.lateral*(r?.75:1.25)*n*e;const l=this.vehVitesse*e;this.vehPos.x-=Math.sin(this.vehYaw)*l,this.vehPos.z-=Math.cos(this.vehYaw)*l,this.vehDistance+=l,this.collisions(this.vehPos,r?2.4:1.3,o),this.vehPos.y=O(this.vehPos.x,this.vehPos.z),this.pos.copy(this.vehPos),this.vitesseSol=Math.abs(this.vehVitesse),this.enMouvement=this.vitesseSol>.2,this.auSol=!0,this.camYaw=Wt(this.camYaw,this.vehYaw,1-Math.exp(-e*1.4*Math.min(1,this.vitesseSol/3)))}collisions(e,s,o){for(let t=0;t<o.length;t++){const i=o[t],r=e.x-i.x,n=e.z-i.z,l=i.r+s,c=r*r+n*n;if(c<l*l&&c>1e-8){const h=Math.sqrt(c);e.x=i.x+r/h*l,e.z=i.z+n/h*l}}e.x=Math.max(-ht,Math.min(ht,e.x)),e.z=Math.max(-ht,Math.min(ht,e.z))}placerCamera(e){const s=this.avatar,o=this.outil?.id;let t=1.55,i=4.6;this.enVehicule?(t=o==="camion-aspirateur"?3.6:2.2,i=o==="camion-aspirateur"?13:8):this.veutBrosser&&(o==="brosse-a-dents"||o==="brosse-a-recurer")&&(t=1,i=3.6),this.camDist+=(i-this.camDist)*(1-Math.exp(-e*3));const r=this.enVehicule?this.vehPos:s.astro.group.position,n=Math.cos(this.camPitch),l=this.camera.position,c=r.x,h=r.y+t,u=r.z;let d=this.camDist;l.set(c+Math.sin(this.camYaw)*n*d,h+Math.sin(this.camPitch)*d,u+Math.cos(this.camYaw)*n*d);for(let m=0;m<4;m++){const f=O(l.x,l.z)+.35;if(l.y>=f)break;d*=.8,l.set(c+Math.sin(this.camYaw)*n*d,Math.max(h+Math.sin(this.camPitch)*d,f),u+Math.cos(this.camYaw)*n*d)}this.tmp.set(c,h,u),this.camera.lookAt(this.tmp)}pointDevant(e){const s=this.centre(),o=this.enVehicule?this.vehYaw:this.yaw;return{x:s.x-Math.sin(o)*e,z:s.z-Math.cos(o)*e}}dispose(){this.avatar.dispose()}}class ps{constructor(e,s){this.o=s;const o=s.max;this.pos=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.sol=new Float32Array(o),this.etat=new Float32Array(o*2),this.vie=new Float32Array(o),this.age=new Float32Array(o);for(let t=0;t<o;t++)this.etat[t*2]=2,this.pos[t*3+1]=-1e3;this.geo=new st,this.geo.setAttribute("position",new _(this.pos,3)),this.geo.setAttribute("etat",new _(this.etat,2)),this.mat=new X({uniforms:{uCouleur:{value:s.couleur},uOpacite:{value:s.opacite},uCroissance:{value:s.croissance},uEchelle:{value:600}},vertexShader:`
        attribute vec2 etat; uniform float uCroissance; uniform float uEchelle; varying float vA;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float vivant = step(etat.x, 1.0);
          vA = vivant * smoothstep(0.0, 0.08, etat.x) * (1.0 - smoothstep(0.55, 1.0, etat.x));
          gl_PointSize = vivant * etat.y * (1.0 + uCroissance * etat.x) * uEchelle / max(0.1, -mv.z);
        }`,fragmentShader:`
        uniform vec3 uCouleur; uniform float uOpacite; varying float vA;
        void main() {
          vec2 d = gl_PointCoord - 0.5; float r = length(d);
          float a = smoothstep(0.5, 0.1, r) * vA * uOpacite;
          if (a < 0.003) discard;
          gl_FragColor = vec4(uCouleur, a);
        }`,transparent:!0,depthWrite:!1,blending:s.additif?me:$s}),this.points=new ys(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points)}points;pos;vel;sol;etat;vie;age;geo;mat;prochain=0;vivants=0;graine=1;densite=1;setEchelle(e){this.mat.uniforms.uEchelle.value=e*.9}rnd(){return this.graine=this.graine*1664525+1013904223>>>0,this.graine/4294967296}emettre(e,s,o,t,i,r,n,l){const c=this.o;for(let h=0;h<e;h++){const u=this.prochain;this.prochain=(this.prochain+1)%c.max;const d=this.rnd()*Math.PI*2,m=i*(.3+.7*this.rnd());this.pos[u*3]=s+(this.rnd()-.5)*n,this.pos[u*3+1]=o+this.rnd()*n*.3,this.pos[u*3+2]=t+(this.rnd()-.5)*n,this.vel[u*3]=Math.cos(d)*m,this.vel[u*3+1]=r*(.6+.8*this.rnd()),this.vel[u*3+2]=Math.sin(d)*m,this.sol[u]=l,this.vie[u]=c.vie[0]+(c.vie[1]-c.vie[0])*this.rnd(),this.age[u]=0,this.etat[u*2]=0,this.etat[u*2+1]=c.taille[0]+(c.taille[1]-c.taille[0])*this.rnd()}this.vivants=c.max}emettreDir(e,s,o,t,i,r,n,l,c,h){const u=this.prochain;this.emettre(e,s,o,t,n,l,c,h);for(let d=0;d<e;d++){const m=(u+d)%this.o.max;this.vel[m*3]+=i,this.vel[m*3+2]+=r}}update(e){if(this.vivants===0)return;const s=this.o,o=s.freinage>0?Math.exp(-s.freinage*e):1;let t=0;for(let i=0;i<s.max;i++){if(this.etat[i*2]>1)continue;t++;const r=this.age[i]+=e,n=i*3;this.vel[n+1]-=s.gravite*e,o!==1&&(this.vel[n]*=o,this.vel[n+1]*=o,this.vel[n+2]*=o),this.pos[n]+=this.vel[n]*e,this.pos[n+1]+=this.vel[n+1]*e,this.pos[n+2]+=this.vel[n+2]*e;let l=r/this.vie[i];this.pos[n+1]<this.sol[i]&&(this.pos[n+1]=this.sol[i],this.vel[n]=this.vel[n+1]=this.vel[n+2]=0,l=Math.max(l,.8),this.age[i]=l*this.vie[i]),this.etat[i*2]=l}this.vivants=t,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.etat.needsUpdate=!0}dispose(){this.points.removeFromParent(),this.geo.dispose(),this.mat.dispose()}}const xt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Le{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vi=new eo(-1,1,1,-1,0,1);class xi extends st{constructor(){super(),this.setAttribute("position",new cs([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new cs([0,2,0,0,2,0],2))}}const gi=new xi;class yt{constructor(e){this._mesh=new K(gi,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,vi)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ls extends Le{constructor(e,s="tDiffuse"){super(),this.textureID=s,this.uniforms=null,this.material=null,e instanceof X?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ze.clone(e.uniforms),this.material=new X({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yt(this.material)}render(e,s,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vs extends Le{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,o){const t=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let r,n;this.inverse?(r=0,n=1):(r=1,n=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(t.REPLACE,t.REPLACE,t.REPLACE),i.buffers.stencil.setFunc(t.ALWAYS,r,4294967295),i.buffers.stencil.setClear(n),i.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(t.EQUAL,1,4294967295),i.buffers.stencil.setOp(t.KEEP,t.KEEP,t.KEEP),i.buffers.stencil.setLocked(!0)}}class bi extends Le{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wi{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const o=e.getSize(new U);this._width=o.width,this._height=o.height,s=new Pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:De}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ls(xt),this.copyPass.material.blending=to,this.timer=new so}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const s=this.renderer.getRenderTarget();let o=!1;for(let t=0,i=this.passes.length;t<i;t++){const r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),r.needsSwap){if(o){const n=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}vs!==void 0&&(r instanceof vs?o=!0:r instanceof bi&&(o=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new U);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const o=this._width*this._pixelRatio,t=this._height*this._pixelRatio;this.renderTarget1.setSize(o,t),this.renderTarget2.setSize(o,t);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(o,t)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Mi extends Le{constructor(e,s,o=null,t=null,i=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=o,this.clearColor=t,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new F}render(e,s,o){const t=e.autoClear;e.autoClear=!1;let i,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=t}}const Si={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new F(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Re extends Le{constructor(e,s=1,o,t){super(),this.strength=s,this.radius=o,this.threshold=t,this.resolution=e!==void 0?new U(e.x,e.y):new U(256,256),this.clearColor=new F(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Pe(i,r,{type:De,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Pe(i,r,{type:De,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Pe(i,r,{type:De,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),i=Math.round(i/2),r=Math.round(r/2)}const n=Si;this.highPassUniforms=ze.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=t,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new X({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new U(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ze.clone(xt.uniforms),this.blendMaterial=new X({uniforms:this.copyUniforms,vertexShader:xt.vertexShader,fragmentShader:xt.fragmentShader,premultipliedAlpha:!0,blending:me,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new F,this._oldClearAlpha=1,this._basic=new Gt,this._fsQuad=new yt(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,s){let o=Math.round(e/2),t=Math.round(s/2);this.renderTargetBright.setSize(o,t);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(o,t),this.renderTargetsVertical[i].setSize(o,t),this.separableBlurMaterials[i].uniforms.invSize.value=new U(1/o,1/t),o=Math.round(o/2),t=Math.round(t/2)}render(e,s,o,t,i){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=o.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=o.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let n=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[l].uniforms.direction.value=Re.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Re.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),n=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(o),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const s=[],o=e/3;for(let r=0;r<e;r++)s.push(.39894*Math.exp(-.5*r*r/(o*o))/o);const t=[],i=[];for(let r=1;r<e;r+=2){const n=s[r],l=r+1<e?s[r+1]:0,c=n+l;t.push((r*n+(r+1)*l)/c),i.push(c)}return new X({defines:{KERNEL_PAIRS:t.length},uniforms:{colorTexture:{value:null},invSize:{value:new U(.5,.5)},direction:{value:new U(.5,.5)},centerWeight:{value:s[0]},gaussianOffsets:{value:t},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new X({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Re.BlurDirectionX=new U(1,0);Re.BlurDirectionY=new U(0,1);const dt={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new U(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ft={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new U(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Ut={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new U(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class yi extends Le{constructor(){super(),this._edgesRT=new Pe(1,1,{depthBuffer:!1,type:De}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Pe(1,1,{depthBuffer:!1,type:De}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,s=new Image;s.src=this._getAreaTexture(),s.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new us,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=s,this._areaTexture.minFilter=jt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const o=new Image;o.src=this._getSearchTexture(),o.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new us,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=o,this._searchTexture.magFilter=hs,this._searchTexture.minFilter=hs,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=ze.clone(dt.uniforms),this._materialEdges=new X({defines:Object.assign({},dt.defines),uniforms:this._uniformsEdges,vertexShader:dt.vertexShader,fragmentShader:dt.fragmentShader}),this._uniformsWeights=ze.clone(ft.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new X({defines:Object.assign({},ft.defines),uniforms:this._uniformsWeights,vertexShader:ft.vertexShader,fragmentShader:ft.fragmentShader}),this._uniformsBlend=ze.clone(Ut.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new X({uniforms:this._uniformsBlend,vertexShader:Ut.vertexShader,fragmentShader:Ut.fragmentShader}),this._fsQuad=new yt(null)}render(e,s,o){this._uniformsEdges.tDiffuse.value=o.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=o.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,s){this._edgesRT.setSize(e,s),this._weightsRT.setSize(e,s),this._materialEdges.uniforms.resolution.value.set(1/e,1/s),this._materialWeights.uniforms.resolution.value.set(1/e,1/s),this._materialBlend.uniforms.resolution.value.set(1/e,1/s)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Ai={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new U(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};class Ti extends Ls{constructor(){super(Ai)}setSize(e,s){this.material.uniforms.resolution.value.set(1/e,1/s)}}const mt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class zi extends Le{constructor(){super(),this.isOutputPass=!0,this.uniforms=ze.clone(mt.uniforms),this.material=new oo({name:mt.name,uniforms:this.uniforms,vertexShader:mt.vertexShader,fragmentShader:mt.fragmentShader}),this._fsQuad=new yt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,o){this.uniforms.tDiffuse.value=o.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},io.getTransfer(this._outputColorSpace)===ao&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ro?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===no?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ts?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===co?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function xs(a){const e=typeof window<"u"&&window.devicePixelRatio||1;switch(a){case"basse":return{pixelRatio:Math.min(e,1)*.75,ombre:1024,ombreRayon:1,bloom:!1,aa:"aucun",msaa:0,terrain:256,particules:.4,anisotropie:1,detail:0};case"moyenne":return{pixelRatio:Math.min(e,1),ombre:2048,ombreRayon:2,bloom:!0,aa:"fxaa",msaa:0,terrain:384,particules:.7,anisotropie:4,detail:1};case"haute":return{pixelRatio:Math.min(e,1.5),ombre:2048,ombreRayon:3,bloom:!0,aa:"smaa",msaa:0,terrain:512,particules:1,anisotropie:8,detail:1};case"ultra":return{pixelRatio:Math.min(e,2),ombre:4096,ombreRayon:3,bloom:!0,aa:"smaa",msaa:4,terrain:768,particules:1.25,anisotropie:16,detail:1}}}function Pi(a,e,s,o){const t=new fo({antialias:!1,powerPreference:"high-performance",stencil:!1});t.outputColorSpace=Ce,t.toneMapping=Ts,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=mo,t.info.autoReset=!1;const i=t.domElement;i.style.display="block",i.style.width="100%",i.style.height="100%",i.style.outline="none",i.tabIndex=0,a.appendChild(i);let r=Math.max(1,a.clientWidth||window.innerWidth),n=Math.max(1,a.clientHeight||window.innerHeight);t.setPixelRatio(o.pixelRatio),t.setSize(r,n,!1);const l=new Pe(1,1,{type:De,samples:o.msaa}),c=new wi(t,l),h=new Mi(e,s),u=new Re(new U(r,n),.32,.55,.92),d=new yi,m=new Ti,f=new zi;c.addPass(h),c.addPass(u),c.addPass(f),c.addPass(d),c.addPass(m);function w(S){t.setPixelRatio(S.pixelRatio),c.setPixelRatio(S.pixelRatio),u.enabled=S.bloom,d.enabled=S.aa==="smaa",m.enabled=S.aa==="fxaa",c.renderTarget1.samples!==S.msaa&&(c.renderTarget1.samples=S.msaa,c.renderTarget2.samples=S.msaa,c.renderTarget1.dispose(),c.renderTarget2.dispose()),b(r,n)}function b(S,C){r=Math.max(1,S),n=Math.max(1,C),t.setSize(r,n,!1),c.setSize(r,n)}return w(o),{renderer:t,appliquer:w,taille:b,rendre(){c.render()},dispose(){u.dispose(),d.dispose(),m.dispose(),f.dispose(),c.dispose(),l.dispose(),t.dispose(),t.forceContextLoss(),i.remove()}}}const Di=3.5,Ci=8,Li=3.5,gs=64,Wi=async a=>{const{container:e,field:s}=a;let o=xs(a.qualite);const t=new ds,i=new po(62,1,.12,6500),r=Pi(e,t,i,o),n=r.renderer,[l,c,h]=await Promise.all([Lo(),No(),ni()]),u=h.modeles,d=n.capabilities.getMaxAnisotropy(),m=[l.saleC,l.saleN,l.propreC,l.propreN],f=new vo(n),w=new ds,b=new wt(50,32,16),S=new X({side:As,uniforms:{uSoleil:{value:fe}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uSoleil; varying vec3 vD;
      void main(){
        float sol = smoothstep(0.05, -0.15, vD.y);
        vec3 c = mix(vec3(0.004, 0.005, 0.01), vec3(0.32, 0.31, 0.3), sol);
        c += vec3(30.0, 28.0, 25.0) * pow(max(dot(vD, uSoleil), 0.0), 600.0);
        gl_FragColor = vec4(c, 1.0);
      }`});w.add(new K(b,S));const C=f.fromScene(w,.02);t.environment=C.texture,t.environmentIntensity=.55,b.dispose(),S.dispose(),f.dispose();const z=new xo(new F(1,.97,.92),3.4);z.castShadow=!0,z.shadow.bias=-3e-4,z.shadow.normalBias=.06;const L=z.shadow.camera;L.near=1,L.far=420,t.add(z,z.target);const $=new go(new F(2766160),new F(4867648),.55);t.add($);const N=new D().crossVectors(new D(0,1,0),fe).normalize(),Y=new D().crossVectors(fe,N).normalize();let I=45;function ve(){I=o.ombre>=4096?55:o.ombre>=2048?45:32,L.left=-I,L.right=I,L.top=I,L.bottom=-I,L.updateProjectionMatrix(),z.shadow.radius=o.ombreRayon,z.shadow.mapSize.x!==o.ombre&&(z.shadow.mapSize.set(o.ombre,o.ombre),z.shadow.map?.dispose(),z.shadow.map=null)}ve();const V=Yo(s,l);let G=ms(V,o.terrain);t.add(G.zone,G.anneau);let ue=o.terrain;V.setDetail(o.detail);function Fe(){const p=Math.min(d,o.anisotropie);for(const x of m)x.anisotropy!==p&&(x.anisotropy=p,x.needsUpdate=!0)}Fe();const Ee=ui(t,c),R=u.base();R.position.set(0,O(0,0),0),Ae(R),t.add(R),R.updateMatrixWorld(!0);const xe=R.getObjectByName("terminal")??null,We=R.getObjectByName("rampe")??null,ee=new D(4,0,9),E=new D(-10,0,-7);xe?.getWorldPosition(ee),We?.getWorldPosition(E);const Ue=Ei(R),te={x:0,z:0,r:0},ge={x:E.x,z:E.z,r:1.6};let It=[...Ue,ge,te];const At=u.decor(s.seed,J/2+12,J/2+470);Bi(At),Ae(At),t.add(At);let ie=null;try{ie=u.hologramme();const p=R.getObjectByName("hologramme");p?p.add(ie.group):(ie.group.position.set(ee.x-3,O(ee.x-3,ee.z),ee.z+.5),t.add(ie.group))}catch{ie=null}const Xt=new Array(Ke*Ke).fill(0);let Tt=0;const be=u.fusee();be.group.position.set(E.x,E.y+.3,E.z),Ae(be.group),t.add(be.group),be.setDecollage(0);const je=new Ss(.85,7,20,1,!0);je.rotateX(Math.PI),je.translate(0,-3.5,0);const Yt=new Gt({color:new F(5,2.6,.9),transparent:!0,opacity:.85,blending:me,depthWrite:!1,side:bo}),kt=new Gt({color:new F(8,7,5),transparent:!0,opacity:.9,blending:me,depthWrite:!1}),ae=new B;ae.name="flamme-fusee";const Es=new K(je,Yt),qt=new K(je,kt);qt.scale.set(.45,.55,.45),ae.add(Es,qt),ae.visible=!1,t.add(ae);const Ge=new wo(new F(1,.6,.3),0,90,1.6);t.add(Ge);const Oe=new zs;let re="sol",ne=0;const le=new ps(t,{max:3e3,gravite:1.62,freinage:0,taille:[.02,.06],croissance:.6,vie:[1.6,2.8],couleur:new F(.42,.405,.39),opacite:.8}),ce=new ps(t,{max:700,gravite:-.15,freinage:.55,taille:[1.2,2.6],croissance:2.5,vie:[3.5,6],couleur:new F(.5,.48,.46),opacite:.4});le.densite=o.particules,ce.densite=o.particules;const P=new pi(u,t,a.couleur,i,s,le),zt=new qo,ot=new Qo(u,t,le,zt),Pt=new Cs(t,zt);let Dt="";const[Os,Bs]=oe(256,80);Ht(Bs,256,80,"Sac plein !",{fond:"rgba(200,40,30,0.9)",couleur:"#fff",taille:30,bordure:"#ffd166"});const Ct=new Z(Os);Ct.colorSpace=Ce;const he=new _e(new $e({map:Ct,depthTest:!1,transparent:!0}));he.scale.set(1.5,.47,1),he.visible=!1,he.renderOrder=21,t.add(he);const we=new Map,Kt=[],Qt=u.robot();Qt.updateMatrixWorld(!0);const it=[];Qt.traverse(p=>{const x=p;if(!x.isMesh)return;const v=new Ms(x.geometry,x.material,gs);v.count=0,v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1,t.add(v),it.push({inst:v,local:x.matrixWorld.clone()})});const Me=[],Zt=new gt,Jt=new gt,_t=new Vt,$t=new D,Ns=new D(1,1,1),Rs=new D(0,1,0),Ve={brosse:new Set,interagir:new Set,interactionPossible:new Set,touche:new Set,outil:new Set};function He(p,...x){for(const v of Ve[p])try{v(...x)}catch(g){console.error(`[monde] écouteur « ${p} » :`,g)}}const Fs=p=>He("brosse",p);let H=null;const Se=new di(n.domElement,p=>{switch(p.type){case"touche":He("touche",p.t);break;case"outil":He("outil",p.choix);break;case"sauter":P.sauter();break;case"interagir":if(!H)break;H.type==="vehicule"&&(P.enVehicule?P.descendre():P.monter()),He("interagir",H);break}});function Ws(){const p=P.centre();let x=null,v=yo+(P.enVehicule?2:0),g=-1;for(const{d:T}of we.values()){const j=Math.hypot(p.x-T.x,p.z-T.z);j<v&&(v=j,g=T.id)}if(g>=0){if(H?.type==="depot"&&H.depotId===g)return;x={type:"depot",depotId:g}}else if(xe&&!P.enVehicule&&Math.hypot(p.x-ee.x,p.z-ee.z)<Di){if(H?.type==="terminal")return;x={type:"terminal"}}else if(We&&Math.hypot(p.x-E.x,p.z-E.z)<Ci+(P.enVehicule?3:0)){if(H?.type==="rampe")return;x={type:"rampe"}}else if(P.avatar.vehicule&&P.distanceVehicule()<Li){if(H?.type==="vehicule")return;x={type:"vehicule"}}x===null&&H===null||(H=x,He("interactionPossible",x))}function Ie(){const p=Math.max(1,e.clientWidth||window.innerWidth),x=Math.max(1,e.clientHeight||window.innerHeight);i.aspect=p/x,i.updateProjectionMatrix(),r.taille(p,x);const v=x*n.getPixelRatio();le.setEchelle(v),ce.setEchelle(v)}Ie();const es=typeof ResizeObserver<"u"?new ResizeObserver(Ie):null;es?.observe(e),window.addEventListener("resize",Ie);const Lt=new D;function Us(){const p=P.centre(),x=I*2/o.ombre,v=Math.round(p.dot(N)/x)*x,g=Math.round(p.dot(Y)/x)*x,T=p.dot(fe);Lt.copy(N).multiplyScalar(v).addScaledVector(Y,g).addScaledVector(fe,T),z.target.position.copy(Lt),z.position.copy(Lt).addScaledVector(fe,200),z.target.updateMatrixWorld()}function js(p){const x=1-Math.exp(-p*6);for(let v=0;v<Me.length;v++){const g=Me[v],T=g.cx-g.x,j=g.cz-g.z;if(Math.abs(T)+Math.abs(j)>20?(g.x=g.cx,g.z=g.cz):(g.x+=T*x,g.z+=j*x),T*T+j*j>1e-5){let de=Math.atan2(-T,-j)-g.yaw;for(;de>Math.PI;)de-=Math.PI*2;for(;de<-Math.PI;)de+=Math.PI*2;g.yaw+=de*Math.min(1,p*8)}$t.set(g.x,O(g.x,g.z),g.z),_t.setFromAxisAngle(Rs,g.yaw),Zt.compose($t,_t,Ns);for(const Be of it)Jt.multiplyMatrices(Zt,Be.local),Be.inst.setMatrixAt(v,Jt)}for(const v of it)v.inst.count=Me.length,v.inst.instanceMatrix.needsUpdate=!0}function Gs(p,x){if(re==="sol")return;ne+=p;let v=0,g=0;if(re==="decollage"){const T=Math.min(1,ne/6);v=T*T*T,g=T<.05?T/.05:1,T<.5&&ce.emettre(Math.round(18*p*60*ce.densite*(1-T))||1,E.x,E.y+.6,E.z,7,.6,2.5,E.y-50),ne>=6&&(re="attente",ne=0)}else if(re==="attente")v=1,ne>=4&&(re="atterrissage",ne=0);else{const T=Math.min(1,ne/6.5);v=(1-T)*(1-T)*(1-T),g=T>.97?(1-T)/.03:.75,T>.75&&ce.emettre(Math.round(8*p*60*ce.densite)||1,E.x,E.y+.6,E.z,5,.4,2,E.y-50),ne>=6.5&&(re="sol",v=0,g=0)}if(be.setDecollage(v),g>0&&v<.97){Oe.setFromObject(be.group);const T=.85+Math.sin(x*53)*.08+Math.sin(x*31)*.07;ae.visible=!0,ae.position.set((Oe.min.x+Oe.max.x)/2,Oe.min.y+.2,(Oe.min.z+Oe.max.z)/2),ae.scale.set(T*g,(.6+.6*T)*g,T*g),Ge.position.copy(ae.position),Ge.position.y-=2,Ge.intensity=1200*g*T}else ae.visible=!1,Ge.intensity=0}const Xe=new D;function Vs(p,x){if(P.avatar.hautTete(Xe),P.sacPlein){he.visible=!0;const v=1+Math.sin(x*6)*(P.veutBrosser?.12:.04);he.scale.set(1.5*v,.47*v,1),he.position.set(Xe.x,Xe.y+.25,Xe.z)}else he.visible=!1;if(Pt.update(p,Xe),ie&&(ie.animer(x),Tt-=p,Tt<=0)){Tt=2;for(let v=0;v<Ke;v++)for(let g=0;g<Ke;g++)Xt[v*Ke+g]=s.sectorClean(g,v);ie.setProprete(Xt)}P.avatar.vehicule&&!P.enVehicule?(te.x=P.vehPos.x,te.z=P.vehPos.z,te.r=P.outil?.id==="camion-aspirateur"?2.4:1.2):te.r=0,ge.r=re==="sol"?1.6:0}let at=0,rt=0,Ye=0,ts=0,Et=0,ke=0,ss=!1,nt=!1;function os(p){if(nt)return;at=requestAnimationFrame(os);const x=rt?Math.min(.1,Math.max(0,(p-rt)/1e3)):1/60;rt=p,Ye+=x,Se.lire(x),P.update(x,Ye,Se,It,Fs),ss||Ws(),Ot&&Ot(x),ot.update(x,Ye,i.position),js(x),Gs(x,Ye),Vs(x,Ye),le.update(x),ce.update(x),Us(),Ee.update(i,x),V.majMasque(n),n.info.reset(),r.rendre(),Et++,ke?p-ke>=500&&(ts=Et*1e3/(p-ke),Et=0,ke=p):ke=p}let Ot=null;const ye={x:0,y:0,z:0,yaw:0,enVehicule:!1,enMouvement:!1},is={on(p,x){return Ve[p].add(x),()=>{Ve[p].delete(x)}},setOutil(p,x,v){P.setOutil(p,x,v)},setSacPlein(p){P.sacPlein=p},showStamps(p){if(!p.length)return;const x=Math.min(p.length,8),v=p.length/x,g=i.position;for(let T=0;T<x;T++){const j=p[Math.floor(T*v)],Be=j.x-g.x,de=j.z-g.z;if(Be*Be+de*de>3600)continue;const as=O(j.x,j.z);le.emettre(Math.max(1,Math.round(2*le.densite)),j.x,as+.03,j.z,.35+j.r*.4,.6,j.r,as)}},setPlayers(p,x){Dt=x,ot.set(p,x)},setDepots(p){const x=new Set;for(const v of p){x.add(v.id);const g=we.get(v.id);if(g){(g.d.x!==v.x||g.d.z!==v.z)&&(g.d={...v},g.g.position.set(v.x,O(v.x,v.z),v.z),g.c.x=v.x,g.c.z=v.z);continue}const T=u.depot();Ae(T),T.position.set(v.x,O(v.x,v.z),v.z),t.add(T),we.set(v.id,{d:{...v},g:T,c:{x:v.x,z:v.z,r:1.1}})}for(const[v,g]of we)x.has(v)||(g.g.removeFromParent(),Kt.push(g.g),we.delete(v));It=[...Ue,ge,te,...[...we.values()].map(v=>v.c)],H=H?.type==="depot"&&!we.has(H.depotId)?null:H},setRobots(p){const x=Math.min(gs,p.length);Me.length=Math.min(Me.length,x);for(let v=0;v<x;v++){const g=p[v],T=Me[v];T&&T.id===g.id?(T.cx=g.x,T.cz=g.z):Me[v]={id:g.id,x:g.x,z:g.z,cx:g.x,cz:g.z,yaw:g.angle+Math.PI}}},lancerFusee(){re!=="decollage"&&(re="decollage",ne=0)},emote(p,x){if(p===Dt||Dt===""){Pt.montrer(x);return}ot.emote(p,x)},setPause(p){ss=p,Se.setPause(p),p||Se.verrouiller()},setQualite(p){o=xs(p),r.appliquer(o),ve(),Fe(),V.setDetail(o.detail),le.densite=o.particules,ce.densite=o.particules,o.terrain!==ue&&(ue=o.terrain,t.remove(G.zone,G.anneau),G.zone.geometry.dispose(),G.anneau.geometry.dispose(),G=ms(V,o.terrain),t.add(G.zone,G.anneau)),Ie()},setControles(p,x){Se.sensibilite=Math.max(.2,Math.min(3,p)),Se.inverserY=x},local(){const p=P.centre();return ye.x=p.x,ye.y=p.y,ye.z=p.z,ye.yaw=P.enVehicule?P.vehYaw:P.yaw,ye.enVehicule=P.enVehicule,ye.enMouvement=P.enMouvement,ye},pointDevant(p){return P.pointDevant(p)},stats(){const p=n.info;return{fps:Math.round(ts*10)/10,drawCalls:p.render.calls,triangles:p.render.triangles,geometries:p.memory.geometries,textures:p.memory.textures}},start(p){Ot=p,!(at||nt)&&(rt=0,at=requestAnimationFrame(os))},dispose(){if(!nt){nt=!0,cancelAnimationFrame(at),window.removeEventListener("resize",Ie),es?.disconnect(),Se.dispose(),P.dispose(),ot.dispose(),Pt.dispose(),zt.dispose(),le.dispose(),ce.dispose(),Ee.dispose(),ie?.dispose(),be.dispose();for(const p of it)p.inst.dispose();for(const p of Kt)t.add(p);Ni(t),V.dispose(),Ct.dispose(),je.dispose(),Yt.dispose(),kt.dispose(),C.dispose(),z.shadow.map?.dispose(),t.clear(),r.dispose();for(const p of Object.keys(Ve))Ve[p].clear()}}};return is._debug={scene:t,camera:i,joueur:P,renderer:n,source:h.source},is};function Ei(a){const e=[],s=new zs,o=(t,i)=>{for(const r of t.children){if(s.setFromObject(r),s.isEmpty())continue;const n=(s.max.x-s.min.x)/2,l=(s.max.z-s.min.z)/2,c=s.max.y-s.min.y,h=Math.max(n,l);if(h>7&&r.children.length&&i<4){o(r,i+1);continue}c<.9||h<.15||h>7||r.name==="rampe"||e.push({x:(s.min.x+s.max.x)/2,z:(s.min.z+s.max.z)/2,r:Math.min(n,l)*.5+h*.4})}};return o(a,0),e}const Ze=new gt,Ne=new D,Oi=new Vt,pt=new D,vt=J/2+4;function Bi(a){for(const e of[...a.children]){const s=e;if(s.isInstancedMesh){for(let i=0;i<s.count;i++){s.getMatrixAt(i,Ze),Ze.decompose(Ne,Oi,pt),Ne.applyMatrix4(e.matrix),Math.abs(Ne.x)<vt&&Math.abs(Ne.z)<vt&&pt.set(0,0,0);const r=Ze.elements;r[13]+=O(Ne.x,Ne.z)-.2*pt.y,pt.x===0&&Ze.makeScale(0,0,0),s.setMatrixAt(i,Ze)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere();continue}const o=e.position.x,t=e.position.z;if(Math.abs(o)<vt&&Math.abs(t)<vt){e.removeFromParent();continue}e.position.y+=O(o,t)}}function Ni(a){const e=new Set,s=new Set;a.traverse(o=>{const t=o;t.geometry&&e.add(t.geometry);const i=t.material;Array.isArray(i)?i.forEach(r=>s.add(r)):i&&s.add(i)});for(const o of e)o.dispose();for(const o of s){for(const t of Object.values(o))t&&t.isTexture&&t.dispose();o.dispose()}}export{Wi as createWorld};
