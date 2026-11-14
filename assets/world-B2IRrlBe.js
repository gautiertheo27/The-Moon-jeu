const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./models-JKrLCy3k.js","./three-1GBwr-H8.js","./index-CNDS1xQu.js","./index-BgeT0hLD.css"])))=>i.map(i=>d[i]);
import{Q as it,M as Cs,C as ne,S as Ge,T as oo,R as Li,N as Oi,L as ao,a as ro,D as xs,b as oi,U as gs,c as Mt,d as no,V as G,G as W,e as Ee,f as j,B as Ce,g as J,h as lo,i as $e,j as et,k as O,l as Ni,I as co,m as _t,n as tt,o as uo,O as yt,p as B,q as ho,r as fo,s as Bi,t as Zt,u as mo,E as po,v as $,A as we,P as Ls,w as Fi,x as vo,y as xo,z as go,F as bo,H as Mo,J as ai,K as We,W as Ve,X as je,Y as wo,Z as So,_ as ri,$ as ni,a0 as yo,a1 as Ao,a2 as To,a3 as zo,a4 as Po,a5 as Do,a6 as Ri,a7 as Eo,a8 as Co,a9 as Lo,aa as Oo,ab as No,ac as li,ad as Bo,ae as Fo,af as Ro,ag as Io,ah as Uo,ai as Ds,aj as Wo}from"./three-1GBwr-H8.js";import{t as Vo,N as Q,M as se,f as ft,T as Qe,a as ci,d as ui,_ as jo,m as Go,l as Ho,b as Xo,c as qo,e as Yo,g as ko,v as Ko,h as hi,i as Zo,j as Qo,C as It,P as Jo,k as _o,S as mt,D as $o}from"./index-CNDS1xQu.js";const di=.3,ea=16;function ta(a){return!Number.isFinite(a)||a<=di?1:Math.min(ea,Math.ceil(a/di))}function sa(a,e,s,i=3){let t=!1;for(let o=0;o<i;o++){let r=!1;for(let n=0;n<s.length;n++){const l=s[n],c=l.bx-l.ax,u=l.bz-l.az,f=c*c+u*u,h=f>1e-12?Math.max(0,Math.min(1,((a.x-l.ax)*c+(a.z-l.az)*u)/f)):0,m=a.x-(l.ax+c*h),p=a.z-(l.az+u*h),w=m*m+p*p;if(!(w>=e*e)){if(w>1e-12){const M=Math.sqrt(w);a.x+=m/M*(e-M),a.z+=p/M*(e-M)}else if(f>1e-12){const M=Math.sqrt(f);a.x+=-u/M*e,a.z+=c/M*e}else continue;r=!0}}if(!r)break;t=!0}return t}function ia(a,e,s,i){const t=s*s;for(let o=0;o<i.length;o++){const r=i[o].x-a,n=i[o].z-e;if(r*r+n*n<t)return 1}return 0}function oa(a,e,s){const i=Number.isFinite(a)?a:0,t=1-Math.exp(-4*Math.max(0,Number.isFinite(s)?s:0)),o=i+(e-i)*t;return Math.abs(e-o)<.002?Math.max(0,Math.min(1,e)):Math.max(0,Math.min(1,o))}function Qt(a){return Vo(a)?.vehicule??!1}const aa=.4,ra=.15,fi=.2,na=.2;function la(a,e,s,i,t=null){if(i)return"conduite";const o=s>(t==="marche"?ra:aa);switch(a){case"brosse-a-dents":case"brosse-a-recurer":return e?"brosse":o?"marche":"repos";case"balai":case"aspirateur-dorsal":return e?"brosse-debout":o?"marche":"repos";case"balayeuse-poussee":return"pousse";default:return o?"marche":"repos"}}function ca(a,e){const s=Math.min(Math.max(0,e),6);return a==="marche"?.55+s*.13:a==="pousse"?.55+s*.12:0}const ua={"brosse-a-dents":.55,"brosse-a-recurer":.6,balai:.95,"aspirateur-dorsal":.95,"balayeuse-poussee":1.1,"balayeuse-autoportee":1.6,"camion-aspirateur":3};class Ii{constructor(e,s,i){this.modeles=e,this.scene=s,this.astro=e.astronaute(i),ze(this.astro.group),s.add(this.astro.group);const t=this.astro.main,o=r=>{for(const n of r.children)n.isMesh||(this.articulations.push(n),n!==t&&o(n))};o(this.astro.group),this.poseDepart=new Float32Array(this.articulations.length*7),this.objTete=this.astro.group.getObjectByName("tete")??null}astro;outilId=null;tenu=null;vehicule=null;assis=!1;affiche=!0;ombre=!0;anim=null;fondu=0;articulations=[];poseDepart;cycles=0;pasFaits=0;vLisse=0;tPrec=-1;depuisBrosse=99;brosseStable=!1;premiere=!1;matInvisible=null;caches=[];objTete;setCosmetiques(e){const s=this.astro;if(!s.setCosmetiques)return;const i=this.premiere;i&&this.setPremierePersonne(!1),s.setCosmetiques(e),ze(s.group),this.ombre||pt(s.group,!1),i&&this.setPremierePersonne(!0)}setOutil(e){e!==this.outilId&&(this.outilId=e,this.retirerOutil(),Qt(e)?(this.vehicule=this.modeles.vehicule(e),ze(this.vehicule.group),this.ombre||pt(this.vehicule.group,!1),this.vehicule.group.visible=this.affiche,this.scene.add(this.vehicule.group)):(this.tenu=this.modeles.outil(e),ze(this.tenu.group),this.ombre||pt(this.tenu.group,!1),this.astro.main.add(this.tenu.group)))}setDistance(e,s){e!==this.affiche&&(this.affiche=e,this.setVisible(e)),s!==this.ombre&&(this.ombre=s,pt(this.astro.group,s),this.vehicule&&pt(this.vehicule.group,s))}retirerOutil(){this.assis&&this.setAssis(!1),this.tenu&&(this.tenu.group.removeFromParent(),this.tenu.dispose(),this.tenu=null),this.vehicule&&(this.vehicule.group.removeFromParent(),this.vehicule.dispose(),this.vehicule=null)}setAssis(e){if(e===this.assis||e&&!this.vehicule)return;this.assis=e;const s=this.astro.group;e&&this.vehicule?(this.vehicule.siege.add(s),s.position.set(0,0,0),s.rotation.set(0,0,0)):this.scene.add(s)}tete(){return this.assis&&this.vehicule?this.vehicule.tete:this.tenu?this.tenu.tete:null}positionTete(e){const s=this.tete();return s?(s.getWorldPosition(e),Number.isFinite(e.x)&&Number.isFinite(e.z)):!1}animer(e,s,i){const t=this.tPrec<0?0:Math.min(.1,Math.max(0,e-this.tPrec));this.tPrec=e;const o=this.outilId??"brosse-a-dents";this.depuisBrosse=i?0:this.depuisBrosse+t,this.brosseStable=this.depuisBrosse<na;const r=Math.max(0,s);this.vLisse+=(r-this.vLisse)*(t>0?1-Math.exp(-t*10):1);const n=la(o,this.brosseStable,this.vLisse,this.assis,this.anim);n!==this.anim&&(this.anim!==null&&(this.capturerPose(),this.fondu=fi),this.anim=n);let l=e;const c=ca(n,this.vLisse);if(c>0){const u=Math.floor(this.cycles*2);this.cycles+=c*t,this.cycles>1e6?this.cycles-=1e6:Math.floor(this.cycles*2)!==u&&this.vLisse>.5&&this.pasFaits++,l=this.cycles/c}this.astro.animer(n,l,this.vLisse),this.fondu>0&&(this.fondu-=t,this.fondu>0&&this.melangerPose(1-this.fondu/fi)),this.tenu&&this.tenu.animer(e,this.brosseStable),this.vehicule&&this.vehicule.animer(e,this.brosseStable&&this.assis)}capturerPose(){const e=this.poseDepart;for(let s=0;s<this.articulations.length;s++){const i=this.articulations[s],t=s*7;e[t]=i.quaternion.x,e[t+1]=i.quaternion.y,e[t+2]=i.quaternion.z,e[t+3]=i.quaternion.w,e[t+4]=i.position.x,e[t+5]=i.position.y,e[t+6]=i.position.z}}melangerPose(e){const s=e*e*(3-2*e),i=this.poseDepart;for(let t=0;t<this.articulations.length;t++){const o=this.articulations[t],r=t*7;mi.set(i[r],i[r+1],i[r+2],i[r+3]).slerp(o.quaternion,s),o.quaternion.copy(mi),o.position.set(i[r+4]+(o.position.x-i[r+4])*s,i[r+5]+(o.position.y-i[r+5])*s,i[r+6]+(o.position.z-i[r+6])*s)}}setPremierePersonne(e){if(e===this.premiere)return;if(this.premiere=e,!e){for(const o of this.caches)o.mesh.material=o.mat;this.caches.length=0;return}const s=this.matInvisible??=new Cs({colorWrite:!1,depthWrite:!1}),i=this.astro.main,t=(o,r)=>{for(const n of o.children){if(n===i)continue;const l=r||n.name.startsWith("epaule"),c=n;c.isMesh?l||(this.caches.push({mesh:c,mat:c.material}),c.material=s):t(n,l)}};t(this.astro.group,!1)}positionYeux(e){return this.objTete?this.objTete.localToWorld(e.set(0,.2,0)):(this.astro.group.getWorldPosition(e),e.y+=this.assis?1.25:1.6,e)}setVisible(e){this.astro.group.visible=e,this.vehicule&&(this.vehicule.group.visible=e)}hautTete(e){return this.astro.group.getWorldPosition(e),e.y+=this.assis?1.9:2.25,e}dispose(){this.setPremierePersonne(!1),this.matInvisible?.dispose(),this.matInvisible=null,this.retirerOutil(),this.astro.group.removeFromParent(),this.astro.dispose()}}const mi=new it;function ze(a){a.traverse(e=>{e.isMesh&&!e.userData.ombreFixee&&(e.castShadow=!0,e.receiveShadow=!0)})}function pt(a,e){a.traverse(s=>{if(!s.isMesh)return;const t=s.userData;e?s.castShadow=t.ombreFixee?t.ombreOrigine??s.castShadow:!0:(t.ombreFixee&&t.ombreOrigine===void 0&&(t.ombreOrigine=s.castShadow),s.castShadow=!1)})}const ha=new oo;async function Ue(a){try{const e=await ha.loadAsync(`./textures/${a}`),s=e.image;return!s||!s.width?(e.dispose(),null):e}catch{return null}}function ue(a,e,s){let i=a*374761393+e*668265263+s*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function da(a,e,s,i){const t=Math.floor(a),o=Math.floor(e),r=a-t,n=e-o,l=r*r*(3-2*r),c=n*n*(3-2*n),u=(t%s+s)%s,f=(o%s+s)%s,h=(u+1)%s,m=(f+1)%s,p=ue(u,f,i),w=ue(h,f,i),M=ue(u,m,i),v=ue(h,m,i);return p+(w-p)*l+(M-p)*c+(p-w-M+v)*l*c}function De(a,e,s,i,t){let o=0,r=.5,n=0,l=s;for(let c=0;c<i;c++)o+=da(a*l,e*l,l,t+c*31)*r,n+=r,r*=.5,l*=2;return o/n}function he(a,e){const s=document.createElement("canvas");s.width=a,s.height=e;const i=s.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("canvas 2D indisponible");return[s,i]}function Ut(a,e){return a.wrapS=a.wrapT=Li,a.colorSpace=e?Ge:Oi,a.minFilter=ao,a.generateMipmaps=!0,a.needsUpdate=!0,a}function pi(a,e,s){const[i,t]=he(e,e),o=t.createImageData(e,e);for(let r=0;r<e;r++)for(let n=0;n<e;n++){const l=(n-1+e)%e,c=(n+1)%e,u=(r-1+e)%e,f=(r+1)%e,h=(a[r*e+c]-a[r*e+l])*s,m=(a[f*e+n]-a[u*e+n])*s,p=Math.hypot(h,m,1),w=(r*e+n)*4;o.data[w]=(-h/p*.5+.5)*255,o.data[w+1]=(-m/p*.5+.5)*255,o.data[w+2]=(1/p*.5+.5)*255,o.data[w+3]=255}return t.putImageData(o,0,0),i}function fa(a){const e=new Float32Array(a*a),[s,i]=he(a,a),t=i.createImageData(a,a);for(let o=0;o<a;o++)for(let r=0;r<a;r++){const n=r/a,l=o/a,c=De(n,l,4,4,11),u=De(n,l,64,2,23),f=ue(r,o,5);let h=0;const m=10,p=Math.floor(n*m),w=Math.floor(l*m);for(let S=-1;S<=1;S++)for(let A=-1;A<=1;A++){const P=((p+A)%m+m)%m,L=((w+S)%m+m)%m;if(ue(P,L,77)>.55)continue;const F=(p+A+ue(P,L,78))/m,I=(w+S+ue(P,L,79))/m,ee=(.12+.22*ue(P,L,80))/m,q=Math.hypot(n-F,l-I)/ee;q<1&&(h=Math.max(h,Math.sqrt(1-q*q)))}const M=c*.5+u*.35+f*.15+h*.8;e[o*a+r]=M;const v=.5+(c-.5)*.35+(u-.5)*.25+(f-.5)*.18-h*.18,y=(o*a+r)*4;t.data[y]=Math.max(0,Math.min(255,v*255*1.02)),t.data[y+1]=Math.max(0,Math.min(255,v*255*1)),t.data[y+2]=Math.max(0,Math.min(255,v*255*.96)),t.data[y+3]=255}return i.putImageData(t,0,0),{c:s,h:e}}function ma(a){const e=new Float32Array(a*a),[s,i]=he(a,a),t=i.createImageData(a,a);for(let o=0;o<a;o++)for(let r=0;r<a;r++){const n=r/a,l=o/a,c=De(n,l,3,4,41),u=De(n,l,32,3,43),f=ue(r,o,9),h=Math.abs(De(n,l,6,3,47)-.5)<.012?1:0;e[o*a+r]=c*.4+u*.2+f*.04-h*.3;const m=.5+(c-.5)*.3+(u-.5)*.15+(f-.5)*.05-h*.15,p=(o*a+r)*4;t.data[p]=Math.max(0,Math.min(255,m*255*.97)),t.data[p+1]=Math.max(0,Math.min(255,m*255*1)),t.data[p+2]=Math.max(0,Math.min(255,m*255*1.05)),t.data[p+3]=255}return i.putImageData(t,0,0),{c:s,h:e}}async function pa(){const[a,e,s,i]=await Promise.all([Ue("regolithe-couleur.webp"),Ue("regolithe-normale.webp"),Ue("sol-propre-couleur.webp"),Ue("sol-propre-normale.webp")]);let t=a,o=e,r=s,n=i;if(!t||!o){const l=fa(512);t??=new ne(l.c),o??=new ne(pi(l.h,512,6))}if(!r||!n){const l=ma(512);r??=new ne(l.c),n??=new ne(pi(l.h,512,3))}return{saleC:Ut(t,!0),saleN:Ut(o,!1),propreC:Ut(r,!0),propreN:Ut(n,!1)}}function bs(a,e){return a.wrapS=Li,a.wrapT=ro,a.colorSpace=e?Ge:Oi,a.needsUpdate=!0,a}function va(a,e){const[s,i]=he(a,e),t=i.createImageData(a,e);for(let o=0;o<e;o++){const r=(o/e-.5)*Math.PI;for(let n=0;n<a;n++){const l=n/a,c=o/e,u=De(l,c*.5,5,5,101),f=De(l,c*.5,12,3,103),h=u>.53,m=Math.abs(r)>1.25-(f-.5)*.2;let p,w,M;if(m)p=235,w=240,M=245;else if(h)Math.abs(r)<.55&&f>.5?(p=190+f*30,w=160+f*20,M=110):(p=60+f*50,w=100+f*50,M=50+f*20);else{const y=Math.min(1,(.53-u)*6);p=15+20*(1-y),w=45+50*(1-y),M=110+50*(1-y)}const v=(o*a+n)*4;t.data[v]=p,t.data[v+1]=w,t.data[v+2]=M,t.data[v+3]=255}}return i.putImageData(t,0,0),s}function xa(a,e){const[s,i]=he(a,e),t=i.createImageData(a,e);for(let o=0;o<e;o++)for(let r=0;r<a;r++){const n=De(r/a,o/e*.5,6,5,211),l=Math.max(0,Math.min(1,(n-.5)*3.2)),c=(o*a+r)*4,u=l*255;t.data[c]=u,t.data[c+1]=u,t.data[c+2]=u,t.data[c+3]=255}return i.putImageData(t,0,0),s}function ga(a){const e=a.image,s=Math.min(2048,e.width),i=Math.max(1,Math.round(e.height*s/e.width)),[t,o]=he(s,i);o.drawImage(e,0,0,s,i);const r=o.getImageData(0,0,s,i);for(let n=0;n<r.data.length;n+=4){const l=(r.data[n]*.3+r.data[n+1]*.59+r.data[n+2]*.11)*(r.data[n+3]/255);r.data[n]=r.data[n+1]=r.data[n+2]=l,r.data[n+3]=255}return o.putImageData(r,0,0),a.dispose(),new ne(t)}async function ba(){const[a,e,s]=await Promise.all([Ue("terre.webp"),Ue("terre-nuages.webp"),Ue("etoiles.webp")]),i=bs(a??new ne(va(1024,512)),!0);i.anisotropy=4;const t=bs(e?ga(e):new ne(xa(1024,512)),!1);return{terre:i,nuages:t,etoiles:s?bs(s,!0):null}}function Ui(a=128,e=0){const[s,i]=he(a,a),t=i.createRadialGradient(a/2,a/2,0,a/2,a/2,a/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(Math.max(.01,e),"rgba(255,255,255,0.9)"),t.addColorStop(Math.min(.99,e+.25),"rgba(255,255,255,0.25)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,a,a);const o=new ne(s);return o.colorSpace=Ge,o}function Os(a,e,s,i,t){a.clearRect(0,0,e,s);const o=t.taille??30;a.font=`600 ${o}px "Segoe UI", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle";const r=Math.min(e-8,a.measureText(i).width+28),n=o+18,l=(e-r)/2,c=t.barre!==void 0?4:(s-n)/2;if(t.fond&&(a.fillStyle=t.fond,Ms(a,l,c,r,n,n/2),a.fill(),t.bordure&&(a.strokeStyle=t.bordure,a.lineWidth=3,a.stroke())),a.fillStyle=t.couleur??"#fff",a.fillText(i,e/2,c+n/2+1,e-20),t.barre!==void 0){const u=Math.min(140,r-20),f=c+n+6;a.fillStyle="rgba(10,14,24,0.7)",Ms(a,(e-u)/2,f,u,10,5),a.fill();const h=Math.max(0,Math.min(1,t.barre));a.fillStyle=h>.95?"#ff5a4a":h>.7?"#ffc04a":"#7fd6ff",h>0&&(Ms(a,(e-u)/2+1,f+1,Math.max(8,(u-2)*h),8,4),a.fill())}}function Ms(a,e,s,i,t,o){a.beginPath(),a.moveTo(e+o,s),a.arcTo(e+i,s,e+i,s+t,o),a.arcTo(e+i,s+t,e,s+t,o),a.arcTo(e,s+t,e,s,o),a.arcTo(e,s,e+i,s,o),a.closePath()}const Fe=Q/2,R=se/2,vt=1969,Re=R+6,Ma=[[42,58,11,1.4],[-55,30,8,1],[-30,-70,14,1.6],[75,-40,9,1.1],[-90,-10,12,1.3],[20,-95,7,.8],[100,85,13,1.5],[-78,92,10,1.2],[64,16,5,.6],[-18,44,4,.45],[8,-38,5,.55],[170,40,22,2.2],[-160,-150,26,2.6],[190,-170,15,1.6],[-200,120,18,1.9],[40,200,24,2.3],[-60,-210,12,1.3],[140,160,10,1.1],[-150,20,9,1],[215,215,14,1.5],[-220,-60,11,1.2]];function Wt(a,e,s){const i=Math.max(0,Math.min(1,(s-a)/(e-a)));return i*i*(3-2*i)}function Jt(a,e){const s=Math.hypot(a,e),i=Wt(18,42,s);let t=(ft(a/70+50,e/70+50,vt,3)-.5)*6+(ft(a/16+9,e/16+9,vt+7,2)-.5)*.9;for(const[l,c,u,f]of Ma){const h=a-l,m=e-c,p=h*h+m*m;if(p>u*u*4)continue;const w=Math.sqrt(p)/u;w<1&&(t-=f*(1-w*w));const M=(w-1)/.35;t+=f*.35*Math.exp(-M*M)}t*=i;const o=Math.abs(a),r=Math.abs(e);if(o<=R&&r<=R)return t;const n=R+Math.hypot(Math.max(0,o-R),Math.max(0,r-R));if(n>Re){const l=Wt(Re,Re+70,n),c=Wt(Re+70,Re+350,n),u=1-Math.abs(ft(a/160+3,e/160+3,vt+3,4)*2-1);t+=l*(ft(a/28,e/28,vt+11,3)-.35)*14,t+=c*(u*u*75+ft(a/45,e/45,vt+13,3)*22),t+=Wt(Re+350,Re+550,n)*30}return t}const At=.5,Tt=R+8,re=Math.round(Tt*2/At)+1;let wa=null;function Sa(){const a=new Float32Array(re*re);for(let e=0;e<re;e++){const s=-Tt+e*At;for(let i=0;i<re;i++)a[e*re+i]=Jt(-Tt+i*At,s)}return a}let Wi=0;function ya(a){Wi=Number.isFinite(a)&&a>0?a:0}function U(a,e){const s=Wi;if(s<=0||a<=-R||e<=-R||a>=R||e>=R)return Me(a,e);const i=(a+R)/s,t=(e+R)/s,o=Math.floor(i),r=Math.floor(t),n=i-o,l=t-r,c=-R+o*s,u=-R+r*s,f=Me(c+s,u),h=Me(c,u+s);if(n+l<=1){const p=Me(c,u);return p+(f-p)*n+(h-p)*l}const m=Me(c+s,u+s);return m+(h-m)*(1-n)+(f-m)*(1-l)}function Me(a,e){const s=(a+Tt)/At,i=(e+Tt)/At;if(s<0||i<0||s>=re-1||i>=re-1)return Jt(a,e);const t=wa??=Sa(),o=Math.floor(s),r=Math.floor(i),n=s-o,l=i-r,c=r*re+o,u=t[c]+(t[c+1]-t[c])*n,f=t[c+re]+(t[c+re+1]-t[c+re])*n;return u+(f-u)*l}function Es(a,e,s,i,t,o){const r=t(a+o,e)-t(a-o,e),n=t(a,e+o)-t(a,e-o),l=-r,c=2*o,u=-n,f=Math.hypot(l,c,u);s[i]=l/f,s[i+1]=c/f,s[i+2]=u/f}const ce=8,Pe=se/ce,vi=4,xi=[48,128,256];function Aa(a,e,s,i){const t=i,o=(t+1)*(t+1),r=4*(t+1)*2,n=new Float32Array((o+r)*3),l=new Float32Array((o+r)*3),c=s/t,u=2+c*2;for(let v=0;v<=t;v++)for(let y=0;y<=t;y++){const S=a+y*c,A=e+v*c,P=(v*(t+1)+y)*3;n[P]=S,n[P+1]=Me(S,A),n[P+2]=A,Es(S,A,l,P,Me,.5)}const f=(t*t+8*t)*6,h=o+r<=65535?new Uint16Array(f):new Uint32Array(f);let m=0;for(let v=0;v<t;v++)for(let y=0;y<t;y++){const S=v*(t+1)+y,A=S+1,P=S+t+1,L=P+1;h[m++]=S,h[m++]=P,h[m++]=A,h[m++]=A,h[m++]=P,h[m++]=L}let p=o;const w=v=>{const y=p;for(let S=0;S<=t;S++){const A=v(S)*3;for(let P=0;P<2;P++){const L=p*3;n[L]=n[A],n[L+1]=n[A+1]-P*u,n[L+2]=n[A+2],l[L]=l[A],l[L+1]=l[A+1],l[L+2]=l[A+2],p++}}for(let S=0;S<t;S++){const A=y+S*2,P=A+1,L=A+2,F=A+3;h[m++]=A,h[m++]=L,h[m++]=P,h[m++]=P,h[m++]=L,h[m++]=F,h[m++]=A,h[m++]=P,h[m++]=L,h[m++]=P,h[m++]=F,h[m++]=L}};w(v=>v),w(v=>t*(t+1)+v),w(v=>v*(t+1)),w(v=>v*(t+1)+t);const M=new Ce;return M.setAttribute("position",new J(n,3)),M.setAttribute("normal",new J(l,3)),M.setIndex(new J(h,1)),M.computeBoundingBox(),M.computeBoundingSphere(),M}function Ta(a){let e=0;for(;e<xi.length&&a>=xi[e];)e++;return e}function za(a,e,s,i){const t=-R+a*Pe,o=-R+e*Pe,r=Math.max(t-s,0,s-(t+Pe)),n=Math.max(o-i,0,i-(o+Pe));return Math.hypot(r,n)}const Pa=6;function Da(a,e){const s=a*4,i=s*(e+1),t=se/a,o=new Float32Array((i+s)*3),r=new Float32Array((i+s)*3);for(let u=0;u<=e;u++){const f=u/e,h=620*Math.pow(f,1.7),m=620*(Math.pow(Math.min(1,f+1/e),1.7)-Math.pow(Math.max(0,f-1/e),1.7))/2;for(let p=0;p<s;p++){const w=Math.floor(p/a),M=p%a/a;let v,y;w===0?(v=-R+M*se,y=-R):w===1?(v=R,y=-R+M*se):w===2?(v=R-M*se,y=R):(v=-R,y=R-M*se);const S=Math.hypot(v,y),A=v+v/S*h,P=y+y/S*h,L=(u*s+p)*3;o[L]=A,o[L+1]=u===0?Me(A,P):Jt(A,P),o[L+2]=P,u===0?Es(A,P,r,L,Me,.5):Es(A,P,r,L,Jt,Math.max(1.5+h*.01,.35*Math.max(m,t*(S+h)/S)))}}for(let u=0;u<s;u++){const f=u*3,h=(i+u)*3;o[h]=o[f],o[h+1]=o[f+1]-Pa,o[h+2]=o[f+2],r[h]=r[f],r[h+1]=r[f+1],r[h+2]=r[f+2]}const n=new Uint32Array((e+2)*s*6);let l=0;for(let u=0;u<e;u++)for(let f=0;f<s;f++){const h=u*s+f,m=u*s+(f+1)%s,p=h+s,w=m+s;n[l++]=h,n[l++]=m,n[l++]=p,n[l++]=m,n[l++]=w,n[l++]=p}for(let u=0;u<s;u++){const f=u,h=(u+1)%s,m=i+u,p=i+(u+1)%s;n[l++]=f,n[l++]=h,n[l++]=m,n[l++]=h,n[l++]=p,n[l++]=m,n[l++]=f,n[l++]=m,n[l++]=h,n[l++]=h,n[l++]=m,n[l++]=p}const c=new Ce;return c.setAttribute("position",new J(o,3)),c.setAttribute("normal",new J(r,3)),c.setIndex(new J(n,1)),c.computeBoundingSphere(),c}const Ea=`
uniform sampler2D uMasque;
uniform float uTexel;
uniform sampler2D uSaleC;
uniform sampler2D uSaleN;
uniform sampler2D uPropreC;
uniform sampler2D uPropreN;
uniform float uDetail;
uniform vec2 uAntiSoleil;
uniform sampler2D uNature;
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
// Sale (0..1) en UNE lecture bilinéaire, sans dérivées (appelée dans une branche) : sert au gradient.
float lmSale(vec2 uv) { return smoothstep(0.3, 0.6, textureLod(uMasque, uv, 0.0).r); }
`,Ca=`
vec2 pw = vPosM.xz;
float distCam = length(vPosM - cameraPosition);
float detailProche = uDetail * (1.0 - smoothstep(18.0, 45.0, distCam));
float fwP = length(fwidth(pw));
vec2 gradM = vec2(0.0);
vec2 pertStries = vec2(0.0);
float bord = 0.0;
float stries = 0.0;
#ifdef ANNEAU
// Anneau de montagnes : hors carte, tout est sale. Aucune lecture du masque.
float sale = 1.0;
float epaisseur = 1.0;
#else
vec2 uvM = (pw + ${R.toFixed(1)}) / ${se.toFixed(1)};
float nA = lmBruit(pw * 3.3);
float nB = lmBruit(pw * 3.3 + 17.0);
vec2 warp = (vec2(nA, nB) - 0.5) * uTexel * 1.1;
float mBrut = lmMasqueLisse(uvM + warp);
float sale = smoothstep(0.34, 0.56, mBrut + (lmBruit(pw * 11.0) - 0.5) * 0.08);
float epaisseur = clamp((mBrut - 0.67) / 0.33, 0.0, 1.0);
// Bourrelet et stries : seulement près de la caméra (au loin ils sont sous le pixel).
float procheM = 1.0 - smoothstep(45.0, 70.0, distCam);
if (procheM > 0.0) {
  // Gradient du masque en 4 lectures bilinéaires (bourrelet et sens des stries).
  float sXp = lmSale(uvM + vec2(uTexel, 0.0));
  float sXm = lmSale(uvM - vec2(uTexel, 0.0));
  float sZp = lmSale(uvM + vec2(0.0, uTexel));
  float sZm = lmSale(uvM - vec2(0.0, uTexel));
  gradM = vec2(sXp - sXm, sZp - sZm) * procheM;
  float moy = (sXp + sXm + sZp + sZm) * 0.25;
  bord = clamp(4.0 * moy * (1.0 - moy), 0.0, 1.0) * procheM;
  // Stries de brossage : parallèles au bord le plus proche, sinon direction lente.
  float visS = (1.0 - smoothstep(0.5, 1.6, fwP * 150.0)) * procheM * (1.0 - sale);
  if (visS > 0.0) {
    float aS = lmBruit(pw * 0.15) * 6.2831;
    vec2 dirS = normalize(vec2(cos(aS), sin(aS)) * 0.35 + vec2(-gradM.y, gradM.x) * 4.0 + 1e-4);
    float coordS = dot(pw, vec2(-dirS.y, dirS.x)) * 150.0 + lmBruit(pw * 5.0) * 7.0;
    stries = sin(coordS) * (0.6 + 0.4 * lmBruit(pw * 9.0)) * visS;
    // Petites ondulations perpendiculaires à leur direction (pour la normale).
    pertStries = vec2(-dirS.y, dirS.x) * cos(coordS) * 0.12 * visS;
  }
}
#endif
// Couleurs : détail proche estompé au loin (évite la répétition et le moiré sur les montagnes).
float loin = smoothstep(25.0, 140.0, distCam);
float macro = texture2D(uSaleC, pw / 47.0).r;
float mers = lmBruit(pw * 0.008) * 0.6 + lmBruit(pw * 0.03) * 0.4;
vec3 cSaleLoin = texture2D(uSaleC, pw / 61.0).rgb * mix(0.8, 1.1, mers);
vec3 cSale = texture2D(uSaleC, pw / 3.1).rgb * mix(0.82, 1.12, macro);
cSale = mix(cSale, texture2D(uSaleC, pw / 0.9).rgb, 0.35 * detailProche);
cSale = mix(cSale, cSaleLoin, loin);
float grain = lmH12(floor(pw * 90.0));
cSale *= 1.0 + (grain - 0.5) * 0.22 * (1.0 - smoothstep(0.4, 1.4, fwP * 90.0));
cSale *= vec3(1.0, 0.985, 0.955) * mix(0.92, 1.1, epaisseur) * mix(1.0, 1.07, bord);
#ifdef ANNEAU
vec3 cPropre = cSale;
#else
vec3 cPropre = texture2D(uPropreC, pw / 2.6).rgb * mix(0.85, 1.08, texture2D(uPropreC, pw / 33.0).g);
cPropre *= vec3(1.22, 1.28, 1.42);
cPropre *= 1.0 + stries * 0.07;
#endif
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
// Poussières spéciales (0.2) : or (paillettes dans la poussière, disparaît au brossage) et glace (bleutée, brillante).
float orSol = 0.0;
float glaceSol = 0.0;
float paillette = 0.0;
#ifndef ANNEAU
vec2 nature = texture2D(uNature, uvM).rg;
glaceSol = smoothstep(0.15, 0.6, nature.g);
orSol = smoothstep(0.1, 0.5, nature.r) * sale * (1.0 - glaceSol);
if (orSol > 0.0) {
  // Paillettes : une cellule de 3 cm sur dix, qui scintille avec l'angle de vue (sans bouger quand on est immobile).
  vec2 cg = floor(pw * 20.0);
  float h1 = lmH12(cg);
  float vueS = fract(h1 * 17.0 + dot(normalize(vPosM - cameraPosition).xz, vec2(3.1, 2.3)) * 0.6);
  paillette = step(0.88, h1) * smoothstep(0.55, 0.95, vueS) * (1.0 - smoothstep(0.6, 1.6, fwP * 20.0)) * orSol;
  couleurSol = mix(couleurSol, couleurSol * vec3(1.6, 1.2, 0.42) + vec3(0.1, 0.07, 0.0), orSol * 0.9);
  couleurSol += vec3(2.2, 1.6, 0.45) * paillette;
}
if (glaceSol > 0.0) {
  // Plaque de glace : givre bleuté tant qu'elle est sale, glace sombre et lisse une fois brossée.
  vec3 cGivre = vec3(0.62, 0.78, 1.0) * (0.9 + 0.2 * lmBruit(pw * 6.0));
  vec3 cGlace = vec3(0.28, 0.46, 0.7) * (0.85 + 0.3 * lmBruit(pw * 1.7));
  couleurSol = mix(couleurSol, mix(cGlace, cGivre, sale), glaceSol * 0.9);
}
#endif
diffuseColor.rgb *= couleurSol;
`,La=`
float roughnessFactor = mix(0.93 - stries * 0.03, 0.98, sale);
roughnessFactor = mix(roughnessFactor, 0.8, step(0.05, caillou));
// Or un peu plus brillant, glace lisse (surtout une fois brossée).
roughnessFactor = mix(roughnessFactor, 0.45, orSol * 0.6 + paillette * 0.4);
roughnessFactor = mix(roughnessFactor, mix(0.18, 0.5, sale), glaceSol);
`,Oa=`
{
  vec3 nG = normalize(vNorM);
  vec3 tG = normalize(vec3(1.0, 0.0, 0.0) - nG * nG.x);
  vec3 bG = cross(tG, nG);
  vec3 nSale = texture2D(uSaleN, pw / 3.1).xyz * 2.0 - 1.0;
  vec3 nSaleF = texture2D(uSaleN, pw / 0.9).xyz * 2.0 - 1.0;
  nSale.xy += nSaleF.xy * 0.6 * detailProche;
#ifdef ANNEAU
  vec2 pert = nSale.xy * 0.9 * (1.0 - 0.75 * loin);
#else
  vec3 nPropre = texture2D(uPropreN, pw / 2.6).xyz * 2.0 - 1.0;
  nPropre.xy *= 0.55;
  vec2 pert = mix(nPropre.xy, nSale.xy * 0.9, sale) * (1.0 - 0.75 * loin);
  // Stries, puis bourrelet : le gradient du masque relève la normale au bord de la poussière.
  pert += pertStries;
  pert -= gradM * (0.07 + 0.08 * bord);
#endif
  // Cailloux : hémisphères.
  pert += cailN * caillou * 1.6;
  vec3 nW = normalize(nG + tG * pert.x + bG * pert.y);
  normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
}
`,Na=24,Ba=1024;function Fa(a,e){const s=new Uint8Array(Q*Q),i=(M,v,y,S)=>{const A=a.data;for(let P=v;P<=S;P++){let L=P*Q+M;for(let F=M;F<=y;F++,L++){const I=A[L];s[L]=I===0?0:170+(I*85/255|0)}}};i(0,0,Q-1,Q-1);const t=new xs(s,Q,Q,oi,gs);t.minFilter=Mt,t.magFilter=Mt,t.generateMipmaps=!1,t.unpackAlignment=1,t.needsUpdate=!0;const o=new xs(s,Q,Q,oi,gs);o.unpackAlignment=1;const r=new lo(new G,new G),n=new Uint8Array(Fe*Fe*2);{const M=a.orBits,v=a.glaceBits,y=(S,A)=>S[A>>3]>>(A&7)&1;for(let S=0;S<Fe;S++)for(let A=0;A<Fe;A++){const P=2*S*Q+2*A,L=P+Q,F=(S*Fe+A)*2;n[F]=(y(M,P)+y(M,P+1)+y(M,L)+y(M,L+1))*63.75,n[F+1]=(y(v,P)+y(v,P+1)+y(v,L)+y(v,L+1))*63.75}}const l=new xs(n,Fe,Fe,no,gs);l.minFilter=Mt,l.magFilter=Mt,l.generateMipmaps=!1,l.unpackAlignment=1,l.needsUpdate=!0;const c=new G,u={uMasque:{value:t},uTexel:{value:1/Q},uSaleC:{value:e.saleC},uSaleN:{value:e.saleN},uPropreC:{value:e.propreC},uPropreN:{value:e.propreN},uDetail:{value:1},uAntiSoleil:{value:new G(.84,.53).normalize()},uNature:{value:l}},f=M=>{const v=new j({color:16777215,roughness:1,metalness:0});return M&&(v.defines={...v.defines,ANNEAU:""}),v.onBeforeCompile=y=>{Object.assign(y.uniforms,u),y.vertexShader=y.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPosM;
varying vec3 vNorM;`).replace("#include <project_vertex>",`#include <project_vertex>
vPosM = (modelMatrix * vec4(transformed, 1.0)).xyz;
vNorM = normalize(mat3(modelMatrix) * objectNormal);`),y.fragmentShader=y.fragmentShader.replace("#include <common>",`#include <common>
${Ea}`).replace("#include <map_fragment>",Ca).replace("#include <roughnessmap_fragment>",La).replace("#include <normal_fragment_maps>",Oa)},v.customProgramCacheKey=()=>M?"sol-lunaire-v3-anneau":"sol-lunaire-v3",v},h=f(!1),m=f(!0);let p=!1;const w=[];return{materiau:h,materiauAnneau:m,masque:t,majMasque(M){const v=a.dirtyTileCount();if(v!==0){if(!p||v>Ba){a.takeDirtyTiles(1/0,w),w.length=0,i(0,0,Q-1,Q-1),t.needsUpdate=!0,p=!0;return}a.takeDirtyTiles(Na,w);for(let y=0;y<w.length;y++){const S=w[y],A=S%ci*Qe,P=Math.floor(S/ci)*Qe;i(A,P,A+Qe-1,P+Qe-1),r.min.set(A,P),r.max.set(A+Qe,P+Qe),c.set(A,P),M.copyTextureToTexture(o,t,r,c)}}},setDetail(M){u.uDetail.value=M},dispose(){h.dispose(),m.dispose(),t.dispose(),o.dispose(),l.dispose(),e.saleC.dispose(),e.saleN.dispose(),e.propreC.dispose(),e.propreN.dispose()}}}function gi(a,e){const s=new W;s.name="terrain-zone";const i=Math.max(8,Math.round(e/ce/8)*8);ya(Pe/i);const t=[],o=new Int8Array(ce*ce).fill(-1);for(let l=0;l<ce;l++)for(let c=0;c<ce;c++){const u=[];for(let f=0;f<vi;f++){const h=Math.max(2,i>>f),m=new Ee(Aa(-R+c*Pe,-R+l*Pe,Pe,h),a.materiau);m.receiveShadow=!0,m.castShadow=!0,m.visible=!1,m.matrixAutoUpdate=!1,m.name=`terrain-tuile-${c}-${l}-n${f}`,s.add(m),u.push(m)}t.push(u)}s.matrixAutoUpdate=!1,s.updateMatrixWorld(!0);const r=Math.max(64,ce*Math.max(2,i>>vi-1)),n=new Ee(Da(r,24+Math.round(e/64)),a.materiauAnneau);return n.receiveShadow=!0,n.castShadow=!1,n.name="terrain-anneau",{zone:s,anneau:n,majLod(l,c,u=0){const f=Math.max(0,u-6);for(let h=0;h<ce;h++)for(let m=0;m<ce;m++){const p=h*ce+m,w=za(m,h,l,c),M=Ta(f>0?Math.hypot(w,f):w);if(M===o[p])continue;const v=t[p];o[p]>=0&&(v[o[p]].visible=!1),v[M].visible=!0,o[p]=M}},dispose(){for(const l of t)for(const c of l)c.geometry.dispose();n.geometry.dispose()}}}const Ra={salut:"Salut !",pouce:"Bien joué !",danse:"♪ Danse ! ♫",flemme:"Flemme…",bravo:"Bravo !",aide:"À l’aide !"};class Ia{mats=new Map;materiau(e){let s=this.mats.get(e);if(!s){const[i,t]=he(256,80);Os(t,256,80,Ra[e],{fond:"rgba(255,255,255,0.94)",couleur:"#14213d",taille:32,bordure:"#d4a017"});const o=new ne(i);o.colorSpace=Ge,s=new et({map:o,depthTest:!1,transparent:!0}),this.mats.set(e,s)}return s}dispose(){for(const e of this.mats.values())e.map?.dispose(),e.dispose();this.mats.clear()}}class Vi{constructor(e,s){this.bulles=s,this.sprite=new $e(s.materiau("salut")),this.sprite.scale.set(1.6,.5,1),this.sprite.visible=!1,this.sprite.renderOrder=20,e.add(this.sprite)}sprite;reste=0;montrer(e){this.sprite.material=this.bulles.materiau(e),this.reste=3.2,this.sprite.visible=!0}update(e,s){if(this.reste<=0)return;this.reste-=e;const i=Math.min(1,(3.2-this.reste)*6),t=Math.min(1,this.reste*3),o=Math.max(.001,i*t);this.sprite.scale.set(1.6*o,.5*o,1),this.sprite.position.set(s.x,s.y+.55+(1-t)*.3,s.z),this.reste<=0&&(this.sprite.visible=!1)}dispose(){this.sprite.removeFromParent()}}const bi=50,Mi=200,ws="0000";function Ua(a,e,s){let i=e-a;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return a+i*s}class Wa{constructor(e,s,i,t){this.modeles=e,this.scene=s,this.particules=i,this.bulles=t}joueurs=new Map;tmp=new O;tmp2=new O;set(e,s){for(const i of this.joueurs.values())i.vu=!1;for(const i of e){if(i.id===s||!i.pose)continue;let t=this.joueurs.get(i.id);t||(t=this.creer(i),this.joueurs.set(i.id,t)),t.vu=!0;const o=i.pose;if(!Number.isFinite(o.x)||!Number.isFinite(o.z))continue;t.cx=o.x,t.cy=Number.isFinite(o.y)?o.y:U(o.x,o.z),t.cz=o.z,t.cyaw=Number.isFinite(o.yaw)?o.yaw:t.cyaw,t.brosse=!!o.brosse,t.sac=Math.max(0,Math.min(1,o.sac||0)),o.outil!==t.outil&&(t.outil=o.outil,t.avatar.setOutil(o.outil),t.avatar.setAssis(Qt(o.outil))),(i.nom!==t.nom||i.couleur!==t.couleur)&&(t.nom=i.nom,i.couleur!==t.couleur&&(t.couleur=i.couleur,t.avatar.astro.setCouleur(i.couleur)),this.dessiner(t));const r=i.tenue??ws;r!==t.tenue&&(t.tenue=r,t.avatar.setCosmetiques(ui(r)))}for(const[i,t]of this.joueurs)t.vu||(this.retirer(t),this.joueurs.delete(i))}creer(e){const s=e.pose,i=new Ii(this.modeles,this.scene,e.couleur);i.setOutil(s.outil),i.setAssis(Qt(s.outil));const t=e.tenue??ws;t!==ws&&i.setCosmetiques(ui(t));const[o,r]=he(256,80),n=new ne(o);n.colorSpace=Ge;const l=new $e(new et({map:n,depthTest:!0,depthWrite:!1,transparent:!0}));l.scale.set(1.7,.53,1),l.renderOrder=19,this.scene.add(l);const c={id:e.id,avatar:i,nom:e.nom,couleur:e.couleur,tenue:t,cx:s.x,cy:s.y,cz:s.z,cyaw:s.yaw,x:s.x,y:s.y,z:s.z,yaw:s.yaw,vitesse:0,brosse:s.brosse,sac:s.sac,sacAffiche:-1,outil:s.outil,roule:0,etiquette:l,ctx:r,tex:n,bulle:new Vi(this.scene,this.bulles),accPart:0,vu:!0};return this.dessiner(c),c}dessiner(e){e.sacAffiche=e.sac,Os(e.ctx,256,80,e.nom.slice(0,20),{fond:"rgba(8,12,24,0.62)",couleur:e.couleur,taille:26,barre:e.sac}),e.tex.needsUpdate=!0}emote(e,s){const i=this.joueurs.get(e);return i?(i.bulle.montrer(s),!0):!1}update(e,s,i){const t=1-Math.exp(-e*9);for(const o of this.joueurs.values()){const r=o.x,n=o.z;Math.abs(o.cx-o.x)+Math.abs(o.cz-o.z)>25&&(o.x=o.cx,o.z=o.cz),o.x+=(o.cx-o.x)*t,o.y+=(o.cy-o.y)*t,o.z+=(o.cz-o.z)*t,o.yaw=Ua(o.yaw,o.cyaw,t);const l=Math.hypot(o.x-r,o.z-n)/Math.max(e,.001);o.vitesse+=(l-o.vitesse)*Math.min(1,e*6),o.roule+=l*e;const c=o.avatar,u=U(o.x,o.z),f=Math.max(o.y,u);c.assis&&c.vehicule?(c.vehicule.group.position.set(o.x,f,o.z),c.vehicule.group.rotation.set(0,o.yaw,0),c.vehicule.rouler(o.roule)):(c.astro.group.position.set(o.x,f,o.z),c.astro.group.rotation.set(0,o.yaw,0));const h=o.x-i.x,m=o.z-i.z,p=h*h+m*m,w=p<Mi*Mi;if(c.setDistance(w,p<bi*bi),o.etiquette.visible=w,!w){o.bulle.reste>0&&(o.bulle.reste=0,o.bulle.sprite.visible=!1);continue}if(c.animer(s,o.vitesse,o.brosse),c.hautTete(this.tmp),o.etiquette.position.set(this.tmp.x,this.tmp.y+.15,this.tmp.z),o.bulle.update(e,this.tmp),Math.abs(o.sac-o.sacAffiche)>.04&&this.dessiner(o),o.brosse&&this.tmp.distanceToSquared(i)<4900){o.accPart+=28*e*this.particules.densite;const v=Math.floor(o.accPart);if(v>0){o.accPart-=v,(c.assis&&c.vehicule?c.vehicule.group:c.astro.group).updateMatrixWorld(!0),c.positionTete(this.tmp2)||this.tmp2.set(o.x-Math.sin(o.yaw)*.6,0,o.z-Math.cos(o.yaw)*.6);const y=U(this.tmp2.x,this.tmp2.z);this.particules.emettre(Math.min(v,12),this.tmp2.x,y+.03,this.tmp2.z,.4+.4*.5,.75,.5,y)}}}}procheDe(e,s,i){const t=i*i;for(const o of this.joueurs.values()){const r=o.x-e,n=o.z-s;if(r*r+n*n<t)return!0}return!1}nombre(){return this.joueurs.size}retirer(e){e.avatar.dispose(),e.etiquette.removeFromParent(),e.etiquette.material.dispose(),e.tex.dispose(),e.bulle.dispose()}dispose(){for(const e of this.joueurs.values())this.retirer(e);this.joueurs.clear()}}const E={combinaison:new j({color:15329250,roughness:.78}),gris:new j({color:9080211,roughness:.55,metalness:.4}),sombre:new j({color:2829877,roughness:.6,metalness:.3}),visiere:new j({color:14263361,roughness:.12,metalness:1}),metal:new j({color:13225170,roughness:.3,metalness:.9}),bois:new j({color:10119996,roughness:.7}),poils:new j({color:15921906,roughness:.9}),jaune:new j({color:15774499,roughness:.5,metalness:.2}),orange:new j({color:15229996,roughness:.55,metalness:.1}),bleu:new j({color:3104680,roughness:.5,metalness:.2}),ecran:new j({color:727594,emissive:new B(4179711),emissiveIntensity:2.2,roughness:.3}),lumiere:new j({color:1118481,emissive:new B(16757575),emissiveIntensity:3}),panneau:new j({color:1780298,roughness:.25,metalness:.7}),roche:new j({color:7828333,roughness:.95,flatShading:!0}),holo:new j({color:663600,emissive:new B(4772351),emissiveIntensity:2,transparent:!0,opacity:.75,depthWrite:!1})},D={capsule:new mo(1,1,6,12),sphere:new Zt(1,24,16),boite:new uo(1,1,1),cyl:new Bi(1,1,1,20),cone:new fo(1,1,20),tore:new ho(1,.12,8,24)};function C(a,e,s=0,i=0,t=0,o=1,r=1,n=1){const l=new Ee(a,e);return l.position.set(s,i,t),l.scale.set(o,r,n),l.castShadow=!0,l.receiveShadow=!0,l}function Va(a){const e=new W,s=new j({color:new B(a),roughness:.6}),i=new W;i.position.y=.95,e.add(i);const t=new W;i.add(t),t.add(C(D.capsule,E.combinaison,0,.32,0,.27,.22,.22)),t.add(C(D.tore,s,0,.22,0,.27,.27,.5).rotateX(Math.PI/2)),t.add(C(D.boite,E.gris,0,.42,.25,.42,.55,.2)),t.add(C(D.boite,s,0,.42,.36,.3,.08,.02));const o=new W;o.position.y=.72,t.add(o),o.add(C(D.sphere,E.combinaison,0,0,0,.23,.23,.23)),o.add(C(D.sphere,E.visiere,0,.01,-.07,.19,.16,.18));const r=m=>{const p=new W;return p.position.set(.33*m,.55,0),t.add(p),p.add(C(D.capsule,E.combinaison,0,-.28,0,.085,.22,.085)),p.add(C(D.tore,s,0,-.12,0,.09,.09,.2).rotateX(Math.PI/2)),p.add(C(D.sphere,E.gris,0,-.58,0,.08,.08,.08)),p},n=r(1),l=r(-1),c=new yt;c.position.y=-.6,n.add(c);const u=m=>{const p=new W;return p.position.set(.13*m,0,0),i.add(p),p.add(C(D.capsule,E.combinaison,0,-.42,0,.11,.3,.11)),p.add(C(D.boite,E.sombre,0,-.88,-.05,.17,.12,.3)),p},f=u(1),h=u(-1);return{group:e,main:c,setCouleur(m){s.color.set(m)},animer(m,p,w){const M=Math.max(1.5,w*2.2),v=Math.sin(p*M*2);switch(i.position.y=.95,i.rotation.set(0,0,0),t.rotation.set(0,0,0),n.rotation.set(0,0,.12),l.rotation.set(0,0,-.12),f.rotation.set(0,0,0),h.rotation.set(0,0,0),m){case"repos":t.rotation.x=Math.sin(p*1.6)*.02;break;case"marche":f.rotation.x=v*.5,h.rotation.x=-v*.5,n.rotation.x=-v*.4,l.rotation.x=v*.4,i.position.y=.95+Math.abs(v)*.04;break;case"brosse":i.position.y=.5,t.rotation.x=-.75,f.rotation.x=1.35,h.rotation.x=1.35,n.rotation.x=-.75+Math.sin(p*13)*.18,n.rotation.z=.05+Math.sin(p*13+1)*.12,l.rotation.x=-.4;break;case"brosse-debout":t.rotation.x=-.25,n.rotation.x=-.55+Math.sin(p*4)*.12,n.rotation.z=Math.sin(p*4)*.35,l.rotation.x=-.9+Math.sin(p*4)*.12,l.rotation.z=.3+Math.sin(p*4)*.35,f.rotation.x=v*.25,h.rotation.x=-v*.25;break;case"pousse":t.rotation.x=-.2,n.rotation.x=-1.1,l.rotation.x=-1.1,f.rotation.x=v*.45,h.rotation.x=-v*.45;break;case"conduite":i.position.y=0,f.rotation.x=-1.45,h.rotation.x=-1.45,n.rotation.x=-1,l.rotation.x=-1;break}},dispose(){s.dispose()}}}function ja(a){const e=new W,s=new yt,i=[];switch(a){case"brosse-a-dents":e.add(C(D.cyl,E.bleu,0,-.09,0,.012,.19,.012)),e.add(C(D.boite,E.poils,0,-.18,-.015,.02,.03,.03)),s.position.set(0,-.19,0);break;case"brosse-a-recurer":e.add(C(D.boite,E.bois,0,-.08,0,.09,.05,.2)),e.add(C(D.boite,E.jaune,0,-.12,0,.09,.04,.2)),s.position.set(0,-.14,0);break;case"balai":e.add(C(D.cyl,E.bois,0,-.65,0,.018,1.3,.018)),e.add(C(D.boite,E.jaune,0,-1.3,0,.45,.08,.08)),e.add(C(D.boite,E.poils,0,-1.37,0,.44,.08,.05)),s.position.set(0,-1.38,0);break;case"aspirateur-dorsal":e.add(C(D.cyl,E.gris,0,-.6,0,.03,1.2,.03)),e.add(C(D.boite,E.orange,0,-1.22,0,.6,.06,.14)),s.position.set(0,-1.25,0);break;default:{e.add(C(D.cyl,E.gris,0,-.5,0,.025,1,.025));const t=C(D.boite,E.jaune,0,-1.05,0,1.1,.35,.5);e.add(t);const o=C(D.cyl,E.poils,0,-1.2,-.25,.14,1,.14);o.rotation.z=Math.PI/2,e.add(o),i.push(o),s.position.set(0,-1.25,-.25)}}return e.add(s),{group:e,tete:s,animer(t,o){for(const r of i)r.rotation.x=o?t*20:0},dispose(){}}}function Ga(a){const e=a==="camion-aspirateur",s=e?5.2:2.4,i=e?2.4:1.4,t=new W;t.add(C(D.boite,e?E.orange:E.jaune,0,e?1.2:.65,.2,i,e?1.6:.6,s*.8)),e&&t.add(C(D.cyl,E.metal,0,2.3,.9,.9,2.6,.9).rotateX(Math.PI/2)),t.add(C(D.boite,E.sombre,0,e?2.25:1.15,e?-1.6:-.15,i*.7,.06,.6));const o=[],r=e?[-1.8,.2,1.9]:[-.75,.8];for(const f of r)for(const h of[-1,1]){const m=C(D.cyl,E.sombre,h*(i/2+.05),e?.5:.32,f,e?.5:.32,.25,e?.5:.32);m.rotation.z=Math.PI/2,o.push(m),t.add(m)}const n=[],l=e?3:2;for(let f=0;f<l;f++){const h=C(D.cyl,E.poils,(f-(l-1)/2)*i/l,.12,-s/2-.2,.32,.08,.32);n.push(h),t.add(h)}const c=new yt;c.position.set(0,0,-s/2-.2),t.add(c);const u=new yt;return u.position.set(0,e?1.95:.95,e?-1.4:.1),t.add(u),{group:t,tete:c,siege:u,animer(f,h){for(const m of n)m.rotation.y=h?f*9:0},rouler(f){for(const h of o)h.rotation.x=-f/(e?.5:.32)},dispose(){}}}function Ha(){const a=new W;a.add(C(D.sphere,E.combinaison,0,0,0,5,3.6,5)),a.add(C(D.tore,E.gris,0,.3,0,5,5,3).rotateX(Math.PI/2));for(let i=0;i<3;i++){const t=i/3*Math.PI*2+.6,o=C(D.cyl,E.combinaison,Math.cos(t)*8,1.3,Math.sin(t)*8,1.6,4.2,1.6);o.rotation.z=Math.PI/2,o.rotation.y=-t,a.add(o)}const e=new W;e.name="terminal",e.position.set(3.5,0,9),e.add(C(D.boite,E.gris,0,.6,0,.8,1.2,.5)),e.add(C(D.boite,E.ecran,0,1.05,-.26,.65,.4,.02)),a.add(e);const s=new W;s.name="rampe",s.position.set(-10,0,-7),s.add(C(D.cyl,E.sombre,0,.15,0,4.2,.3,4.2)),s.add(C(D.tore,E.jaune,0,.31,0,3.6,3.6,.3).rotateX(Math.PI/2)),a.add(s);for(let i=0;i<4;i++){const t=C(D.boite,E.panneau,8+i*.1,2.2,-9+i*2.6,2.2,.05,1.4);t.rotation.z=.6,a.add(t),a.add(C(D.cyl,E.gris,8+i*.1,1.1,-9+i*2.6,.06,2.2,.06))}return a.add(C(D.cyl,E.metal,-3,4.5,3,.05,6,.05)),a.add(C(D.sphere,E.lumiere,-3,7.5,3,.15,.15,.15)),a}function Xa(){const a=new W;return a.add(C(D.cyl,E.gris,0,1,0,1,2,1)),a.add(C(D.cone,E.orange,0,2.4,0,1.15,.8,1.15)),a.add(C(D.tore,E.lumiere,0,.12,0,1.25,1.25,.6).rotateX(Math.PI/2)),a}function qa(){const a=new W,e=new W;a.add(e),e.add(C(D.cyl,E.combinaison,0,4.3,0,1.1,7,1.1)),e.add(C(D.cone,E.orange,0,8.8,0,1.1,2,1.1));for(let s=0;s<4;s++){const i=s/4*Math.PI*2,t=C(D.boite,E.orange,Math.cos(i)*1.3,1.3,Math.sin(i)*1.3,.12,2.2,1);t.rotation.y=-i,e.add(t)}return e.add(C(D.cone,E.sombre,0,.5,0,.8,1,.8)),{group:a,setDecollage(s){e.position.y=s*s*900,e.visible=s<.999},dispose(){}}}function Ya(){const a=new W;return a.add(C(D.cyl,E.jaune,0,.18,0,.45,.22,.45)),a.add(C(D.sphere,E.sombre,0,.3,0,.25,.15,.25)),a.add(C(D.cyl,E.poils,0,.04,-.1,.4,.06,.4)),a.add(C(D.sphere,E.lumiere,0,.42,-.1,.05,.05,.05)),a}function ka(){const a=new W;a.add(C(D.cyl,E.gris,0,.4,0,1,.8,1));const e=new W;e.position.y=1.2,a.add(e);const s=[];for(let i=0;i<8;i++)for(let t=0;t<8;t++){const o=new Ee(D.boite,E.holo);o.position.set((t-3.5)*.2,0,(i-3.5)*.2),o.scale.set(.16,.02,.16),e.add(o),s.push(o)}return{group:a,animer(i){e.rotation.y=i*.3},setProprete(i){for(let t=0;t<64;t++){const o=i[t]??0;s[t].scale.y=.02+o*.8,s[t].position.y=s[t].scale.y/2}},dispose(){}}}function Ka(a,e,s){const i=new W;let t=a>>>0||1;const o=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=[new Ni(1,0),new co(1,0)],n=260,l=new tt,c=new it,u=new O,f=new O;for(let h=0;h<r.length;h++){const m=new _t(r[h],E.roche,n/2);m.castShadow=!0,m.receiveShadow=!0;for(let p=0;p<n/2;p++){const w=o()*Math.PI*2,M=e+(s-e)*Math.pow(o(),1.6);u.set(Math.cos(w)*M,0,Math.sin(w)*M);const v=.4+Math.pow(o(),3)*(M<e+40?3:9);f.set(v*(.8+o()*.6),v*(.5+o()*.5),v*(.8+o()*.6)),c.setFromAxisAngle(u.clone().set(o()-.5,1,o()-.5).normalize(),o()*6.28),l.compose(u,c,f),m.setMatrixAt(p,l)}i.add(m)}return i}const St={astronaute:Va,outil:ja,vehicule:Ga,base:Ha,depot:Xa,fusee:qa,robot:Ya,hologramme:ka,decor:Ka},Za=Object.assign({"./models/index.ts":()=>jo(()=>import("./models-JKrLCy3k.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)});let Qa=!1;async function Ja(){const a=Za["./models/index.ts"];if(!a||Qa)return{modeles:St,source:"provisoire"};try{const s=(await a()).modeles;return!s||typeof s.astronaute!="function"?{modeles:St,source:"provisoire"}:{modeles:_a(s),source:"graphiste"}}catch(e){return console.warn("[monde] modèles du graphiste indisponibles, repli provisoire :",e),{modeles:St,source:"provisoire"}}}function _a(a){const e={};for(const s of Object.keys(St)){const i=a[s],t=St[s];e[s]=typeof i=="function"?(...o)=>{try{const r=i.apply(a,o);if(r==null)throw new Error("modèle vide");return r}catch(r){return console.warn(`[monde] modeles.${s} a échoué, repli provisoire :`,r),t(...o)}}:t}return e}const be=new O(-.82,.25,-.52).normalize(),$a=new O(-.17,.27,.95).normalize(),Ss=4200;function er(a,e){const s=new W;s.name="ciel";const i=[];let t=null;if(e.etoiles)t=e.etoiles,t.mapping=po,a.background=t,a.backgroundIntensity=.55,i.push(t);else{a.background=new B(4);const S=7e3,A=new Float32Array(S*3),P=new Float32Array(S*3),L=new Float32Array(S);let F=12345;const I=()=>(F=F*1664525+1013904223>>>0,F/4294967296);for(let H=0;H<S;H++){let Z=I()*2-1;const ot=I()*Math.PI*2;H%3===0&&(Z=(I()-.5)*.35);const at=Math.sqrt(1-Z*Z),Se=new O(at*Math.cos(ot),Z,at*Math.sin(ot));H%3===0&&Se.applyAxisAngle(new O(1,0,.3).normalize(),1.1),Se.multiplyScalar(Ss*.95),A[H*3]=Se.x,A[H*3+1]=Se.y,A[H*3+2]=Se.z;const Y=I(),Xe=Y<.15?[1,.82,.65]:Y<.35?[.75,.85,1]:[1,1,1],qe=.35+Math.pow(I(),6)*2.2;P[H*3]=Xe[0]*qe,P[H*3+1]=Xe[1]*qe,P[H*3+2]=Xe[2]*qe,L[H]=1+Math.pow(I(),8)*2.6}const ee=new Ce;ee.setAttribute("position",new J(A,3)),ee.setAttribute("color",new J(P,3)),ee.setAttribute("taille",new J(L,1));const q=new $({vertexShader:`
        attribute float taille; attribute vec3 color; varying vec3 vC;
        void main() { vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = taille * 1.6; }`,fragmentShader:`
        varying vec3 vC;
        void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, a); }`,transparent:!0,depthWrite:!1,blending:we}),Le=new Ls(ee,q);Le.frustumCulled=!1,Le.renderOrder=-10,s.add(Le),i.push(ee,q)}const o=Ui(256,.08),r=new et({map:o,color:new B(6,5.6,5),blending:we,depthWrite:!1,fog:!1}),n=new $e(r);n.position.copy(be).multiplyScalar(Ss*.9),n.scale.setScalar(260),n.renderOrder=-9,s.add(n);const l=new et({map:o,color:new B(.5,.45,.38),blending:we,depthWrite:!1,opacity:.6}),c=new $e(l);c.position.copy(n.position),c.scale.setScalar(1300),c.renderOrder=-9,s.add(c),i.push(o,r,l);const u=140,f=new W;f.position.copy($a).multiplyScalar(Ss*.62),f.rotation.set(.35,2.2,.41);const h=new Zt(u,48,32),m=new j({map:e.terre,roughness:.62,metalness:0,emissive:new B(132106),envMapIntensity:0}),p=new Ee(h,m);f.add(p);const w={uNuages:{value:e.nuages},uDecalNuages:{value:0},uSoleilTerre:{value:be}};m.onBeforeCompile=S=>{Object.assign(S.uniforms,w),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uNuages;
uniform float uDecalNuages;
uniform vec3 uSoleilTerre;`).replace("#include <map_fragment>",`#include <map_fragment>
        float nuage = texture2D(uNuages, vec2(vMapUv.x + uDecalNuages, vMapUv.y)).g;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), nuage);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 1.0, nuage);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          float fV = 1.0 - max(dot(normal, normalize(vViewPosition)), 0.0);
          float jourV = smoothstep(-0.2, 0.6, dot(normal, normalize((viewMatrix * vec4(uSoleilTerre, 0.0)).xyz)));
          totalEmissiveRadiance += vec3(0.25, 0.5, 1.0) * pow(fV, 3.0) * jourV * 0.9;
        }`)},m.customProgramCacheKey=()=>"terre-nuages-v1";const M=new Zt(u*1.08,32,24),v=new $({uniforms:{uSoleil:{value:be}},vertexShader:`
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
      }`,blending:we,transparent:!0,depthWrite:!1,side:Fi}),y=new Ee(M,v);f.add(y),s.add(f),i.push(h,m,M,v,e.terre,e.nuages);for(const S of[p,y])S.castShadow=!1,S.receiveShadow=!1;return a.add(s),{group:s,update(S,A){s.position.copy(S.position),p.rotation.y=(p.rotation.y+A*.0015)%(Math.PI*2),w.uDecalNuages.value=(w.uDecalNuages.value+1-A*.0025/(Math.PI*2))%1},dispose(){a.remove(s),a.background===t&&(a.background=null);for(const S of i)S.dispose()}}}const tr={carte:"carte",boutique:"boutique",chat:"chat",emotes:"emotes","poser-depot":"poser-depot",menu:"menu",ping:"ping",aide:"aide",stats:"stats"},wt=["avancer","reculer","gauche","droite","courir","brosser"],wi=new Map(wt.map((a,e)=>[a,e])),sr=.5,ir=.09,or=2.6,ar=2;function ys(a){return a==="zoom-avant"||a==="zoom-arriere"}class rr{constructor(e){this.emettre=e,this.setLiaisons(Ho())}avance=0;lateral=0;courir=!1;brosser=!1;dYaw=0;dPitch=0;pause=!1;manetteActive=!1;table=new Map;pad=[];padAvant=[];clesMaintenues=wt.map(()=>[]);valeurs=new Float32Array(wt.length);tenues=new Set;reglagesManette=Xo();tZoom=0;setLiaisons(e){this.table=qo(e),this.pad=Yo(e),this.padAvant=this.pad.map(()=>!0),this.clesMaintenues=wt.map(s=>{const i=e[s],t=[];for(const o of i.clavier)o&&t.push(ko(o));return t}),this.tenues.clear()}setManette(e){this.reglagesManette={...e}}actionDe(e){return this.table.get(e)??null}appui(e,s=!1){const i=this.table.get(e);return!i||this.pause?i??null:wi.has(i)?(this.tenues.add(e),i):((!s||ys(i))&&this.declencher(i),i)}relache(e){this.tenues.delete(e)}vider(){this.tenues.clear(),this.dYaw=this.dPitch=0}declencher(e){const s=tr[e];if(s)this.emettre({type:"touche",t:s});else if(e==="sauter")this.emettre({type:"sauter"});else if(e==="interagir")this.emettre({type:"interagir"});else if(e==="vue")this.emettre({type:"vue"});else if(e==="zoom-avant")this.emettre({type:"zoom",sens:-1});else if(e==="zoom-arriere")this.emettre({type:"zoom",sens:1});else if(e==="outil-suivant")this.emettre({type:"outil",choix:"suivant"});else if(e==="outil-precedent")this.emettre({type:"outil",choix:"precedent"});else if(e.startsWith("outil-")){const i=Number(e.slice(6));i>=1&&i<=7&&this.emettre({type:"outil",choix:i-1})}}lire(e,s=null){const i=this.valeurs;for(let t=0;t<wt.length;t++){i[t]=0;const o=this.clesMaintenues[t];for(let r=0;r<o.length;r++)this.tenues.has(o[r])&&(i[t]=1)}if(s&&this.lireManette(e,s),this.pause){this.avance=this.lateral=0,this.courir=this.brosser=!1;return}this.avance=Math.max(-1,Math.min(1,i[0]-i[1])),this.lateral=Math.max(-1,Math.min(1,i[3]-i[2])),this.courir=i[4]>.5,this.brosser=i[5]>.3}lireManette(e,s){const i=this.reglagesManette,t=this.pad;let o=null,r=!1;for(let c=0;c<t.length;c++){const u=t[c],f=Ko(s,u.entree,i.zoneMorte);f>0&&(r=!0);const h=wi.get(u.action);if(h!==void 0){!this.pause&&f>this.valeurs[h]&&(this.valeurs[h]=f);continue}const m=f>sr,p=this.padAvant[c];this.padAvant[c]=m,!(this.pause||!m)&&(p?ys(u.action)&&(o=u.action):(this.declencher(u.action),ys(u.action)&&(this.tZoom=-.25)))}o&&(this.tZoom+=e,this.tZoom>=ir&&(this.tZoom=0,this.declencher(o)));const n=hi(s.axes[2]??0,i.zoneMorte),l=hi(s.axes[3]??0,i.zoneMorte);(n!==0||l!==0)&&(r=!0),r&&(this.manetteActive=!0),!this.pause&&(this.dYaw-=n*or*e*i.sensibilite,this.dPitch+=l*ar*e*i.sensibilite*(i.inverserY?-1:1))}}function Si(a){const e=a;if(!e||!e.tagName)return!1;const s=e.tagName;return s==="INPUT"||s==="TEXTAREA"||s==="SELECT"||e.isContentEditable}class nr extends rr{constructor(e,s){super(t=>{t.type==="touche"&&t.t==="menu"?this.menu():s(t)}),this.canvas=e,this.action=s;const i=(t,o,r,n)=>{t.addEventListener(o,r,n),this.enleve.push(()=>t.removeEventListener(o,r,n))};i(window,"keydown",t=>this.bas(t)),i(window,"keyup",t=>this.relache(`k:${t.code}`)),i(window,"blur",()=>this.vider()),i(e,"mousedown",t=>{this.pause||(e.focus(),document.pointerLockElement!==e&&this.verrouiller(),t.button===1&&t.preventDefault(),this.manetteActive=!1,this.appui(`m:${t.button}`))}),i(window,"mouseup",t=>this.relache(`m:${t.button}`)),i(window,"mousemove",t=>{if(this.pause||document.pointerLockElement!==e)return;const o=Math.max(-150,Math.min(150,t.movementX)),r=Math.max(-150,Math.min(150,t.movementY));this.dYaw-=o*.0024*this.sensibilite,this.dPitch+=r*.0024*this.sensibilite*(this.inverserY?-1:1)}),i(e,"wheel",t=>{if(t.preventDefault(),this.pause||Math.abs(t.deltaY)<1)return;const o=`w:${t.deltaY>0?1:-1}`,r=this.actionDe(o);if(!r)return;const n=performance.now();n-this.derniereMolette<(r==="zoom-avant"||r==="zoom-arriere"?25:110)||(this.derniereMolette=n,this.appui(o),this.relache(o))},{passive:!1}),i(e,"contextmenu",t=>t.preventDefault()),i(document,"pointerlockchange",()=>{document.pointerLockElement!==e&&(this.vider(),!this.liberationVoulue&&!this.pause&&this.menu(),this.liberationVoulue=!1)})}sensibilite=1;inverserY=!1;derniereMolette=0;liberationVoulue=!1;dernierMenu=0;enleve=[];menu(){const e=performance.now();e-this.dernierMenu<300||(this.dernierMenu=e,this.action({type:"touche",t:"menu"}))}verrouiller(){try{const e=this.canvas.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}liberer(){document.pointerLockElement===this.canvas&&(this.liberationVoulue=!0,document.exitPointerLock())}setPause(e){this.pause=e,this.vider(),e&&this.liberer()}bas(e){if(Si(e.target)||this.pause){e.code==="Tab"&&!Si(e.target)&&e.preventDefault();return}if(this.manetteActive=!1,e.code==="Escape"){e.repeat||this.menu();return}const s=this.appui(`k:${e.code}`,e.repeat);(e.code==="Tab"||s&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.preventDefault()}lire(e){super.lire(e,Go())}dispose(){this.liberer();for(const e of this.enleve)e()}}const lr=1.62,Vt=se/2-1,yi=.4,cr=2.2,ur=[],xt=.5,Ai=1.3,Ti=620,hr=.9;function dr(a,e,s,i){return s<0?a==="premiere"?{vue:a,zoom:e}:e<=xt*1.001?{vue:"premiere",zoom:xt}:{vue:a,zoom:Math.max(xt,e/Ai)}:a==="premiere"?{vue:"troisieme",zoom:xt}:{vue:a,zoom:Math.min(Math.max(i,xt),e*Ai)}}function zi(a,e,s){const i=Math.max(0,Math.min(1,(s-a)/(e-a)));return i*i*(3-2*i)}function fr(a){return a==="brosse-a-dents"||a==="brosse-a-recurer"}function jt(a,e,s){let i=e-a;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return a+i*s}class mr{constructor(e,s,i,t,o,r){this.camera=t,this.field=o,this.particules=r,this.avatar=new Ii(e,s,i),this.pos.y=U(this.pos.x,this.pos.z)}avatar;pos=new O(0,0,19);batiment=null;garage=null;dedans=!1;vx=0;vz=0;vy=0;auSol=!0;yaw=0;camYaw=0;camPitch=.12;camDist=4.6;vue="troisieme";zoom=1;camYawVue=0;obstacle=null;surPas=null;surSaut=null;surAtterrissage=null;pasVus=0;distLibre=1e9;decalage=0;distBase=4.6;yeux=new O(0,1.6,0);yeuxValides=!1;cible=new O;dir=new O;enVehicule=!1;vehPos=new O;vehYaw=Math.PI;vehVitesse=0;vehDistance=0;outil=null;rayon=.14;vitesse=1.4;sacPlein=!1;brosse=!1;veutBrosser=!1;enMouvement=!1;vitesseSol=0;tete=new O;tetePrec=new O;teteValide=!1;accPart=0;tmp=new O;placer(e,s,i){this.pos.set(e,this.solEn(e,s),s),this.yaw=i,this.camYaw=i,this.vx=this.vz=this.vy=0,this.auSol=!0,this.teteValide=!1}setOutil(e,s,i){const t=!this.outil||this.outil.id!==e.id;if(this.outil=e,this.rayon=s,this.vitesse=i,!t)return;const o=this.enVehicule;if(o&&this.descendre(),this.avatar.setOutil(e.id),this.teteValide=!1,Qt(e.id)){const r=o?this.vehPos:this.pos;if(this.vehVitesse=0,!o&&this.garage&&this.batiment?.contient(r.x,r.z)){this.vehPos.set(this.garage.x,U(this.garage.x,this.garage.z),this.garage.z),this.vehYaw=this.garage.yaw;return}this.vehPos.set(r.x,U(r.x,r.z),r.z),this.vehYaw=o?this.vehYaw:this.yaw,this.monter()}}monter(){this.avatar.vehicule&&(this.enVehicule=!0,this.avatar.setAssis(!0),this.teteValide=!1)}descendre(){if(!this.enVehicule)return;this.enVehicule=!1,this.avatar.setAssis(!1);const e=this.outil?.id==="camion-aspirateur"?2.2:1.4;this.pos.copy(this.vehPos),this.deplacer(this.pos,-Math.cos(this.vehYaw)*e,Math.sin(this.vehYaw)*e,yi,ur),this.pos.y=this.solEn(this.pos.x,this.pos.z),this.yaw=this.vehYaw,this.vehVitesse=0,this.teteValide=!1}distanceVehicule(){return this.avatar.vehicule?this.enVehicule?0:Math.hypot(this.pos.x-this.vehPos.x,this.pos.z-this.vehPos.z):1/0}sauter(){this.enVehicule||!this.auSol||(this.vy=2.7,this.auSol=!1,this.surSaut?.())}setVue(e){this.vue=e}basculerVue(){this.vue=this.vue==="premiere"?"troisieme":"premiere"}zoomer(e){const s=dr(this.vue,this.zoom,e,Ti/Math.max(1,this.distBase));this.vue=s.vue,this.zoom=s.zoom}get dansCasque(){return this.camDist<hr}centre(){return this.enVehicule?this.vehPos:this.pos}update(e,s,i,t,o){this.camYaw+=i.dYaw;const r=this.vue==="premiere"?-1.3:-.35,n=this.vue==="premiere"?1.35:this.camDist>60?1.5:1.25;let l=this.camPitch+i.dPitch;const c=1-Math.exp(-e*10);l<r?l=this.camPitch<r?Math.min(r,this.camPitch+(r-this.camPitch)*c):r:l>n&&(l=this.camPitch>n?Math.max(n,this.camPitch+(n-this.camPitch)*c):n),this.camPitch=l,i.dYaw=i.dPitch=0;const u=this.outil,f=!!u&&(this.enVehicule?u.vehicule:!u.vehicule&&!!this.avatar.tenu);this.veutBrosser=i.brosser&&f,this.enVehicule?this.conduire(e,i,t):this.marcher(e,i,t),this.brosse=this.veutBrosser&&this.auSol&&!this.sacPlein;const h=this.avatar;if(this.enVehicule&&h.vehicule?(h.vehicule.group.position.copy(this.vehPos),h.vehicule.group.rotation.set(0,this.vehYaw,0),h.vehicule.rouler(this.vehDistance)):(h.astro.group.position.copy(this.pos),h.astro.group.rotation.set(0,this.yaw,0),h.vehicule&&(h.vehicule.group.position.copy(this.vehPos),h.vehicule.group.rotation.set(0,this.vehYaw,0))),h.animer(s,this.vitesseSol,this.veutBrosser&&this.auSol),(this.enVehicule&&h.vehicule?h.vehicule.group:h.astro.group).updateMatrixWorld(!0),h.pasFaits!==this.pasVus&&(this.pasVus=h.pasFaits,this.auSol&&!this.enVehicule&&this.surPas?.()),this.brosse){const m=this.centre(),p=this.enVehicule?this.vehYaw:this.yaw;let w=h.positionTete(this.tete);if(w&&Math.hypot(this.tete.x-m.x,this.tete.z-m.z)>7&&(w=!1),!w&&u){const v=ua[u.id];this.tete.set(m.x-Math.sin(p)*v,m.y,m.z-Math.cos(p)*v)}const M=this.field.at(this.tete.x,this.tete.z)>0||this.field.at(this.tetePrec.x,this.tetePrec.z)>0;this.teteValide||(this.tetePrec.copy(this.tete),this.teteValide=!0),o([{xa:this.tetePrec.x,za:this.tetePrec.z,xb:this.tete.x,zb:this.tete.z,r:this.rayon}]),this.tetePrec.copy(this.tete),M&&this.emettrePoussiere(e)}else this.teteValide=!1;this.placerCamera(e)}emettrePoussiere(e){const s=this.rayon;this.accPart+=(30+s*140)*e*this.particules.densite;const i=Math.floor(this.accPart);if(i<=0)return;this.accPart-=i;const t=U(this.tete.x,this.tete.z);this.particules.emettre(Math.min(i,40),this.tete.x,t+.03,this.tete.z,.35+s*.7,.7+s*.45,Math.min(1.2,s*1.6),t)}marcher(e,s,i){const t=this.camYaw,o=-Math.sin(t),r=-Math.cos(t),n=Math.cos(t),l=-Math.sin(t);let c=o*s.avance+n*s.lateral,u=r*s.avance+l*s.lateral;const f=Math.hypot(c,u);f>1&&(c/=f,u/=f);const h=this.veutBrosser,m=h?this.vitesse:s.courir?5.6:3.1,p=this.auSol?1-Math.exp(-e*9):1-Math.exp(-e*1.2);this.vx+=(c*m-this.vx)*p,this.vz+=(u*m-this.vz)*p,this.deplacer(this.pos,this.vx*e,this.vz*e,yi,i),this.vitesseSol=Math.hypot(this.vx,this.vz),this.enMouvement=this.vitesseSol>.2;const w=this.outil?.id==="balayeuse-poussee";this.vue==="premiere"?this.yaw=jt(this.yaw,this.camYaw,1-Math.exp(-e*18)):h&&!w?this.yaw=jt(this.yaw,this.camYaw,1-Math.exp(-e*8)):this.vitesseSol>.3&&(this.yaw=jt(this.yaw,Math.atan2(-this.vx,-this.vz),1-Math.exp(-e*(w?3:10))));const M=this.batiment;this.dedans=!!M&&M.contient(this.pos.x,this.pos.z);const v=this.dedans&&M?M.sol:U(this.pos.x,this.pos.z);if(this.auSol)this.pos.y=v;else{if(this.vy-=lr*e,this.pos.y+=this.vy*e,this.dedans&&M&&this.vy>0){const y=M.plafond(this.pos.x,this.pos.z)-cr;this.pos.y>y&&(this.pos.y=Math.max(v,y),this.vy=0)}this.pos.y<=v&&(this.pos.y=v,this.surAtterrissage?.(Math.min(1.5,Math.abs(this.vy)/2.7)),this.vy=0,this.auSol=!0,this.dedans||this.particules.emettre(Math.round(10*this.particules.densite),this.pos.x,v+.05,this.pos.z,.9,.5,.5,v))}}conduire(e,s,i){const t=this.veutBrosser?this.vitesse:this.vitesse*1.5,o=s.avance>=0?s.avance*t:s.avance*t*.45;this.vehVitesse+=(o-this.vehVitesse)*(1-Math.exp(-e*(s.avance===0?1.6:1.1)));const r=this.outil?.id==="camion-aspirateur",n=Math.min(1,Math.abs(this.vehVitesse)/2.5)*Math.sign(this.vehVitesse);this.vehYaw-=s.lateral*(r?.75:1.25)*n*e;const l=this.vehVitesse*e;this.deplacer(this.vehPos,-Math.sin(this.vehYaw)*l,-Math.cos(this.vehYaw)*l,r?2.4:1.3,i),this.vehDistance+=l,this.dedans=!1,this.vehPos.y=U(this.vehPos.x,this.vehPos.z),this.pos.copy(this.vehPos),this.vitesseSol=Math.abs(this.vehVitesse),this.enMouvement=this.vitesseSol>.2,this.auSol=!0,this.camYaw=jt(this.camYaw,this.vehYaw,1-Math.exp(-e*1.4*Math.min(1,this.vitesseSol/3)))}solEn(e,s){const i=this.batiment;return i&&i.contient(e,s)?i.sol:U(e,s)}deplacer(e,s,i,t,o){const r=this.batiment?ta(Math.hypot(s,i)):1;for(let n=0;n<r;n++)e.x+=s/r,e.z+=i/r,this.collisions(e,t,o)}collisions(e,s,i){for(let t=0;t<i.length;t++){const o=i[t],r=e.x-o.x,n=e.z-o.z,l=o.r+s,c=r*r+n*n;if(c<l*l&&c>1e-8){const u=Math.sqrt(c);e.x=o.x+r/u*l,e.z=o.z+n/u*l}}this.batiment&&sa(e,s,this.batiment.murs,3),e.x=Math.max(-Vt,Math.min(Vt,e.x)),e.z=Math.max(-Vt,Math.min(Vt,e.z))}placerCamera(e){const s=this.avatar,i=this.outil?.id,t=this.vue==="premiere";let o=1.55,r=4.6,n=0;this.enVehicule?(o=i==="camion-aspirateur"?3.6:2.2,r=i==="camion-aspirateur"?13:8):this.veutBrosser&&fr(i)&&(o=.85,r=3.4,n=.55),this.distBase=r;const l=t?0:Math.min(Ti,r*this.zoom);this.camDist+=(l-this.camDist)*(1-Math.exp(-e*6)),t&&this.camDist<.02&&(this.camDist=0);const c=1-zi(.3,1.8,this.camDist);(t||this.zoom>3)&&(n=0),this.decalage+=(n-this.decalage)*(1-Math.exp(-e*3)),s.setPremierePersonne(this.dansCasque);const u=this.enVehicule?this.vehPos:s.astro.group.position;s.positionYeux(this.tmp),this.tmp.sub(u),this.tmp.x*=.3,this.tmp.z*=.3,this.yeuxValides?this.yeux.lerp(this.tmp,1-Math.exp(-e*12)):(this.yeux.copy(this.tmp),this.yeuxValides=!0);const f=this.cible.set(u.x+this.yeux.x*c,u.y+o+(this.yeux.y-o)*c,u.z+this.yeux.z*c),h=-.35+1.3*zi(30,320,this.camDist),m=Math.max(this.camPitch,h),p=this.camYaw+this.decalage;this.camYawVue=p;const w=Math.cos(m),M=this.dir.set(Math.sin(p)*w,Math.sin(m),Math.cos(p)*w);let v=this.camDist;if(this.obstacle&&v>.3){const P=Math.min(v,this.obstacle(f,M,v));P<this.distLibre?this.distLibre=P:this.distLibre+=(P-this.distLibre)*(1-Math.exp(-e*4)),v=Math.min(v,Math.max(.3,this.distLibre))}else this.distLibre=v;const y=this.camera.position;y.set(f.x+M.x*v,f.y+M.y*v,f.z+M.z*v);let S=!1;if(v>.3)for(let P=0;P<6;P++){const L=this.solEn(y.x,y.z)+.35;if(y.y>=L)break;S=!0,v*=.8,y.set(f.x+M.x*v,Math.max(f.y+M.y*v,L),f.z+M.z*v)}S?this.tmp.copy(f):this.tmp.set(y.x-M.x,y.y-M.y,y.z-M.z),this.camera.lookAt(this.tmp);const A=this.dansCasque?.05:Math.max(.12,Math.min(8,v*.02));Math.abs(A-this.camera.near)>this.camera.near*.05&&(this.camera.near=A,this.camera.updateProjectionMatrix())}pointDevant(e){const s=this.centre(),i=this.enVehicule?this.vehYaw:this.yaw;return{x:s.x-Math.sin(i)*e,z:s.z-Math.cos(i)*e}}dispose(){this.avatar.dispose()}}const pr=2.2;class vr{mesh;liste;ramasse;cle="";geo;mat;constructor(e,s){this.liste=Zo(s),this.ramasse=new Uint8Array(this.liste.length),this.geo=new Ni(1,0);const i=this.geo.attributes.position;for(let t=0;t<i.count;t++){const o=i.getY(t),r=.85+.3*Math.abs(Math.sin(t*12.9898)*.5);i.setXYZ(t,i.getX(t)*r,o*.62,i.getZ(t)*(1.7-r))}this.geo.computeVertexNormals(),this.mat=new j({color:new B(.62,.58,.54),roughness:.55,metalness:.05,emissive:new B(.05,.035,.015)}),this.mesh=new _t(this.geo,this.mat,this.liste.length),this.mesh.name="cailloux",this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,e.add(this.mesh),this.reconstruire()}setRamasses(e){if(e!==this.cle){this.cle=e;for(let s=0;s<this.liste.length;s++)this.ramasse[s]=Qo(e,s)?1:0;this.reconstruire()}}reconstruire(){const e=new tt,s=new it,i=new O,t=new O,o=new O(0,1,0);let r=0;for(const n of this.liste)this.ramasse[n.id]||(i.set(n.x,U(n.x,n.z)+n.taille*.25,n.z),s.setFromAxisAngle(o,n.yaw),t.set(n.taille,n.taille,n.taille),this.mesh.setMatrixAt(r++,e.compose(i,s,t)));this.mesh.count=r,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.computeBoundingSphere()}proche(e,s,i=pr){let t=-1,o=i*i;for(let r=0;r<this.liste.length;r++){if(this.ramasse[r])continue;const n=this.liste[r],l=n.x-e,c=n.z-s,u=l*l+c*c;u<o&&(o=u,t=r)}return t}dispose(){this.mesh.removeFromParent(),this.mesh.dispose(),this.geo.dispose(),this.mat.dispose()}}class Pi{constructor(e,s){this.o=s;const i=s.max;this.pos=new Float32Array(i*3),this.vel=new Float32Array(i*3),this.sol=new Float32Array(i),this.etat=new Float32Array(i*2),this.vie=new Float32Array(i),this.age=new Float32Array(i);for(let t=0;t<i;t++)this.etat[t*2]=2,this.pos[t*3+1]=-1e3;this.geo=new Ce,this.geo.setAttribute("position",new J(this.pos,3)),this.geo.setAttribute("etat",new J(this.etat,2)),this.mat=new $({uniforms:{uCouleur:{value:s.couleur},uOpacite:{value:s.opacite},uCroissance:{value:s.croissance},uEchelle:{value:600}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:s.additif?we:vo}),this.points=new Ls(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points)}points;pos;vel;sol;etat;vie;age;geo;mat;prochain=0;vivants=0;graine=1;densite=1;setEchelle(e){this.mat.uniforms.uEchelle.value=e*.9}rnd(){return this.graine=this.graine*1664525+1013904223>>>0,this.graine/4294967296}emettre(e,s,i,t,o,r,n,l){const c=this.o;for(let u=0;u<e;u++){const f=this.prochain;this.prochain=(this.prochain+1)%c.max;const h=this.rnd()*Math.PI*2,m=o*(.3+.7*this.rnd());this.pos[f*3]=s+(this.rnd()-.5)*n,this.pos[f*3+1]=i+this.rnd()*n*.3,this.pos[f*3+2]=t+(this.rnd()-.5)*n,this.vel[f*3]=Math.cos(h)*m,this.vel[f*3+1]=r*(.6+.8*this.rnd()),this.vel[f*3+2]=Math.sin(h)*m,this.sol[f]=l,this.vie[f]=c.vie[0]+(c.vie[1]-c.vie[0])*this.rnd(),this.age[f]=0,this.etat[f*2]=0,this.etat[f*2+1]=c.taille[0]+(c.taille[1]-c.taille[0])*this.rnd()}this.vivants=c.max}emettreDir(e,s,i,t,o,r,n,l,c,u){const f=this.prochain;this.emettre(e,s,i,t,n,l,c,u);for(let h=0;h<e;h++){const m=(f+h)%this.o.max;this.vel[m*3]+=o,this.vel[m*3+2]+=r}}update(e){if(this.vivants===0)return;const s=this.o,i=s.freinage>0?Math.exp(-s.freinage*e):1;let t=0;for(let o=0;o<s.max;o++){if(this.etat[o*2]>1)continue;t++;const r=this.age[o]+=e,n=o*3;this.vel[n+1]-=s.gravite*e,i!==1&&(this.vel[n]*=i,this.vel[n+1]*=i,this.vel[n+2]*=i),this.pos[n]+=this.vel[n]*e,this.pos[n+1]+=this.vel[n+1]*e,this.pos[n+2]+=this.vel[n+2]*e;let l=r/this.vie[o];this.pos[n+1]<this.sol[o]&&(this.pos[n+1]=this.sol[o],this.vel[n]=this.vel[n+1]=this.vel[n+2]=0,l=Math.max(l,.8),this.age[o]=l*this.vie[o]),this.etat[o*2]=l}this.vivants=t,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.etat.needsUpdate=!0}dispose(){this.points.removeFromParent(),this.geo.dispose(),this.mat.dispose()}}const As=1400,Ie=56,gt=18,Ts=5,Je=9;class xr{constructor(e,s,i=!1){this.calque=s,this.mouvementReduit=i;for(let t=0;t<As;t++)this.pos[t*3]=(this.rnd()-.5)*Ie,this.pos[t*3+1]=this.rnd()*gt,this.pos[t*3+2]=(this.rnd()-.5)*Ie;this.geo.setAttribute("position",new J(this.pos,3)),this.mat=new $({uniforms:{uOpacite:{value:0},uEchelle:{value:600},uCouleur:{value:new B(.75,.82,1)}},vertexShader:`
        uniform float uEchelle;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = max(1.5, 0.09 * uEchelle / max(0.1, -mv.z));
        }`,fragmentShader:`
        uniform vec3 uCouleur; uniform float uOpacite;
        void main() {
          float r = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, r) * uOpacite;
          if (a < 0.003) discard;
          gl_FragColor = vec4(uCouleur, a);
        }`,transparent:!0,depthWrite:!1,blending:we}),this.points=new Ls(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=6,this.points.visible=!1,this.geoArcs.setAttribute("position",new J(this.posArcs,3)),this.arcs=new xo(this.geoArcs,this.matArcs),this.arcs.frustumCulled=!1,this.arcs.renderOrder=7,this.arcs.visible=!1,e.add(this.points,this.arcs)}pos=new Float32Array(As*3);geo=new Ce;mat;points;posArcs=new Float32Array(Ts*Je*2*3);geoArcs=new Ce;matArcs=new go({color:new B(.7,.85,1.6),transparent:!0,opacity:0,blending:we,depthWrite:!1,toneMapped:!1});arcs;vieArcs=new Float32Array(Ts);cible=0;courant=0;opaciteCalque=0;graine=7;t=0;rnd(){return this.graine=this.graine*1664525+1013904223>>>0,this.graine/4294967296}setEchelle(e){this.mat.uniforms.uEchelle.value=e*.9}set(e){this.cible=Math.max(0,Math.min(1,Number.isFinite(e)?e:0))}nouvelArc(e,s,i){const t=this.rnd()*Math.PI*2,o=8+this.rnd()*22;let r=s.x+Math.cos(t)*o,n=s.z+Math.sin(t)*o,l=i(r,n);const c=.5+this.rnd()*.7;let u=e*Je*6;for(let f=0;f<Je;f++)this.posArcs[u++]=r,this.posArcs[u++]=l,this.posArcs[u++]=n,r+=(this.rnd()-.5)*.9,n+=(this.rnd()-.5)*.9,l+=c*(.6+this.rnd()*.8),this.posArcs[u++]=r,this.posArcs[u++]=l,this.posArcs[u++]=n;this.vieArcs[e]=.08+this.rnd()*.18}update(e,s,i){const t=1-Math.exp(-e*1.5);this.courant+=(this.cible-this.courant)*t,this.cible===0&&this.courant<.01&&(this.courant=0);const o=this.courant,r=Math.round(o*240)/1e3;if(this.calque&&r!==this.opaciteCalque&&(this.opaciteCalque=r,this.calque.style.opacity=String(r)),this.points.visible=o>0,this.arcs.visible=o>.3&&!this.mouvementReduit,o<=0)return;this.t+=e,this.mat.uniforms.uOpacite.value=.75*o;const n=(9+Math.sin(this.t*.7)*4)*e,l=(2.5+Math.cos(this.t*.45)*2)*e,c=-.6*e,u=Ie/2;for(let h=0;h<As;h++){const m=h*3;let p=this.pos[m]+n,w=this.pos[m+1]+c,M=this.pos[m+2]+l;const v=p-s.x,y=M-s.z;v>u?p-=Ie:v<-u&&(p+=Ie),y>u?M-=Ie:y<-u&&(M+=Ie);const S=s.y-gt*.4;w<S?w+=gt:w>S+gt&&(w-=gt),this.pos[m]=p,this.pos[m+1]=w,this.pos[m+2]=M}if(this.geo.attributes.position.needsUpdate=!0,!this.arcs.visible)return;let f=!1;for(let h=0;h<Ts;h++)if(this.vieArcs[h]-=e,!(this.vieArcs[h]>0)){if(this.rnd()<.35){this.vieArcs[h]=.3+this.rnd()*.6;const m=h*Je*6;this.posArcs.fill(0,m,m+Je*6);for(let p=m+1;p<m+Je*6;p+=3)this.posArcs[p]=-1e3}else this.nouvelArc(h,s,i);f=!0}f&&(this.geoArcs.attributes.position.needsUpdate=!0),this.matArcs.opacity=o*(.55+.45*Math.abs(Math.sin(this.t*37)))}dispose(){this.points.removeFromParent(),this.arcs.removeFromParent(),this.geo.dispose(),this.mat.dispose(),this.geoArcs.dispose(),this.matArcs.dispose(),this.calque&&(this.calque.style.opacity="0")}}const zs=16*_o,Gt=14;function gr(){const a=new Bi(.22,.32,Gt,10,1,!0).toNonIndexed();a.translate(0,Gt/2,0);const e=new bo(.75,0);e.scale(1,1.4,1),e.translate(0,Gt+1.4,0);const s=a.attributes.position.array,i=e.attributes.position.array,t=new Float32Array(s.length+i.length);t.set(s,0),t.set(i,s.length);const o=new Float32Array(t.length);for(let n=0;n<t.length;n+=3){const l=t[n+1],c=n<s.length?.9*(1-l/Gt)+.1:1.4;o[n]=c,o[n+1]=c,o[n+2]=c}a.dispose(),e.dispose();const r=new Ce;return r.setAttribute("position",new J(t,3)),r.setAttribute("color",new J(o,3)),r.computeBoundingSphere(),r}class br{mesh;geo;mat;liste=[];couleurs;m=new tt;q=new it;p=new O;s=new O(1,1,1);axe=new O(0,1,0);c=new B;cle="";constructor(e){this.geo=gr(),this.mat=new Cs({vertexColors:!0,transparent:!0,blending:we,depthWrite:!1,toneMapped:!1}),this.mesh=new _t(this.geo,this.mat,zs),this.mesh.name="pings",this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this.mesh.setColorAt(0,new B(1,1,1)),this.couleurs={nettoyer:new B(It.nettoyer),ici:new B(It.ici),danger:new B(It.danger),aide:new B(It.aide)};for(let s=0;s<zs;s++)this.liste.push({x:0,y:0,z:0,a:0,couleur:this.couleurs.ici});e.add(this.mesh)}set(e){let s="";for(const t of e)s+=`${t.de}${t.a}|`;if(s===this.cle)return;this.cle=s;const i=Math.min(zs,e.length);for(let t=0;t<i;t++){const o=e[e.length-i+t],r=this.liste[t];r.x=o.x,r.z=o.z,r.y=U(o.x,o.z),r.a=o.a,r.couleur=this.couleurs[o.genre]??this.couleurs.ici}this.mesh.count=i}update(e,s){const i=this.mesh.count;if(i){for(let t=0;t<i;t++){const o=this.liste[t],r=(s-o.a)/1e3,n=Math.max(0,Math.min(1,r/.4))*Math.max(0,Math.min(1,(Jo-r)/5));this.q.setFromAxisAngle(this.axe,e*1.6+t),this.s.set(1,.6+.4*n,1),this.p.set(o.x,o.y,o.z),this.mesh.setMatrixAt(t,this.m.compose(this.p,this.q,this.s)),this.c.copy(o.couleur).multiplyScalar(n),this.mesh.setColorAt(t,this.c)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}dispose(){this.mesh.removeFromParent(),this.mesh.dispose(),this.geo.dispose(),this.mat.dispose()}}const Kt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class He{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mr=new Mo(-1,1,1,-1,0,1);class wr extends Ce{constructor(){super(),this.setAttribute("position",new ai([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ai([0,2,0,0,2,0],2))}}const Sr=new wr;class $t{constructor(e){this._mesh=new Ee(Sr,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mr)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ji extends He{constructor(e,s="tDiffuse"){super(),this.textureID=s,this.uniforms=null,this.material=null,e instanceof $?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=We.clone(e.uniforms),this.material=new $({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $t(this.material)}render(e,s,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Di extends He{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,i){const t=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,n;this.inverse?(r=0,n=1):(r=1,n=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(t.REPLACE,t.REPLACE,t.REPLACE),o.buffers.stencil.setFunc(t.ALWAYS,r,4294967295),o.buffers.stencil.setClear(n),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(t.EQUAL,1,4294967295),o.buffers.stencil.setOp(t.KEEP,t.KEEP,t.KEEP),o.buffers.stencil.setLocked(!0)}}class yr extends He{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ar{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const i=e.getSize(new G);this._width=i.width,this._height=i.height,s=new Ve(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ji(Kt),this.copyPass.material.blending=wo,this.timer=new So}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const s=this.renderer.getRenderTarget();let i=!1;for(let t=0,o=this.passes.length;t<o;t++){const r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const n=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}Di!==void 0&&(r instanceof Di?i=!0:r instanceof yr&&(i=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const i=this._width*this._pixelRatio,t=this._height*this._pixelRatio;this.renderTarget1.setSize(i,t),this.renderTarget2.setSize(i,t);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,t)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tr extends He{constructor(e,s,i=null,t=null,o=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=i,this.clearColor=t,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new B}render(e,s,i){const t=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=t}}const zr={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new B(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class st extends He{constructor(e,s=1,i,t){super(),this.strength=s,this.radius=i,this.threshold=t,this.resolution=e!==void 0?new G(e.x,e.y):new G(256,256),this.clearColor=new B(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ve(o,r,{type:je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ve(o,r,{type:je,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new Ve(o,r,{type:je,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),o=Math.round(o/2),r=Math.round(r/2)}const n=zr;this.highPassUniforms=We.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=t,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new G(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=We.clone(Kt.uniforms),this.blendMaterial=new $({uniforms:this.copyUniforms,vertexShader:Kt.vertexShader,fragmentShader:Kt.fragmentShader,premultipliedAlpha:!0,blending:we,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new B,this._oldClearAlpha=1,this._basic=new Cs,this._fsQuad=new $t(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,s){let i=Math.round(e/2),t=Math.round(s/2);this.renderTargetBright.setSize(i,t);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,t),this.renderTargetsVertical[o].setSize(i,t),this.separableBlurMaterials[o].uniforms.invSize.value=new G(1/i,1/t),i=Math.round(i/2),t=Math.round(t/2)}render(e,s,i,t,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let n=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[l].uniforms.direction.value=st.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=st.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),n=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const s=[],i=e/3;for(let r=0;r<e;r++)s.push(.39894*Math.exp(-.5*r*r/(i*i))/i);const t=[],o=[];for(let r=1;r<e;r+=2){const n=s[r],l=r+1<e?s[r+1]:0,c=n+l;t.push((r*n+(r+1)*l)/c),o.push(c)}return new $({defines:{KERNEL_PAIRS:t.length},uniforms:{colorTexture:{value:null},invSize:{value:new G(.5,.5)},direction:{value:new G(.5,.5)},centerWeight:{value:s[0]},gaussianOffsets:{value:t},gaussianWeights:{value:o}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new $({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}st.BlurDirectionX=new G(1,0);st.BlurDirectionY=new G(0,1);const Ht={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`},Xt={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`},Ps={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`};class Pr extends He{constructor(){super(),this._edgesRT=new Ve(1,1,{depthBuffer:!1,type:je}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Ve(1,1,{depthBuffer:!1,type:je}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,s=new Image;s.src=this._getAreaTexture(),s.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new ri,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=s,this._areaTexture.minFilter=Mt,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new ri,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=ni,this._searchTexture.minFilter=ni,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=We.clone(Ht.uniforms),this._materialEdges=new $({defines:Object.assign({},Ht.defines),uniforms:this._uniformsEdges,vertexShader:Ht.vertexShader,fragmentShader:Ht.fragmentShader}),this._uniformsWeights=We.clone(Xt.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new $({defines:Object.assign({},Xt.defines),uniforms:this._uniformsWeights,vertexShader:Xt.vertexShader,fragmentShader:Xt.fragmentShader}),this._uniformsBlend=We.clone(Ps.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new $({uniforms:this._uniformsBlend,vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader}),this._fsQuad=new $t(null)}render(e,s,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,s){this._edgesRT.setSize(e,s),this._weightsRT.setSize(e,s),this._materialEdges.uniforms.resolution.value.set(1/e,1/s),this._materialWeights.uniforms.resolution.value.set(1/e,1/s),this._materialBlend.uniforms.resolution.value.set(1/e,1/s)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Dr={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`};class Er extends ji{constructor(){super(Dr)}setSize(e,s){this.material.uniforms.resolution.value.set(1/e,1/s)}}const qt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Cr extends He{constructor(){super(),this.isOutputPass=!0,this.uniforms=We.clone(qt.uniforms),this.material=new yo({name:qt.name,uniforms:this.uniforms,vertexShader:qt.vertexShader,fragmentShader:qt.fragmentShader}),this._fsQuad=new $t(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ao.getTransfer(this._outputColorSpace)===To&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Po?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ri?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Lo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Ei(a){switch(a){case"basse":return{pixelRatioMax:1,echelle:.75,ombre:1024,ombreRayon:1,bloom:!1,aa:"aucun",terrain:256,particules:.4,anisotropie:1,detail:0};case"moyenne":return{pixelRatioMax:1,echelle:1,ombre:2048,ombreRayon:2,bloom:!0,aa:"fxaa",terrain:512,particules:.7,anisotropie:4,detail:1};case"haute":return{pixelRatioMax:1.5,echelle:1,ombre:2048,ombreRayon:3,bloom:!0,aa:"smaa",terrain:768,particules:1,anisotropie:8,detail:1};case"ultra":return{pixelRatioMax:2,echelle:1,ombre:4096,ombreRayon:3,bloom:!0,aa:"smaa",terrain:1024,particules:1.25,anisotropie:16,detail:1}}}const Lr=3840*2160;function Or(a,e,s,i,t=Lr){const o=Math.max(1,e),r=Math.max(1,s);let n=Number.isFinite(a)&&a>0?a:1;return Number.isFinite(i)&&i>0&&(n=Math.min(n,i/Math.max(o,r))),n=Math.min(n,Math.sqrt(t/(o*r))),Math.max(.25,n)}function Nr(a,e){return Number.isFinite(e)&&e>0?Math.min(a,e):a}function Br(a,e,s,i){const t=new Oo({antialias:!1,powerPreference:"high-performance",stencil:!1});t.outputColorSpace=Ge,t.toneMapping=Ri,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=No,t.info.autoReset=!1;const o=t.domElement;o.style.display="block",o.style.width="100%",o.style.height="100%",o.style.outline="none",o.tabIndex=0,a.appendChild(o);const r=t.getContext(),n=Number(r.getParameter(r.MAX_RENDERBUFFER_SIZE))||0,l=t.capabilities.maxTextureSize||0,c=Math.max(256,Math.min(l||4096,n||l||4096));let u=i,f=Math.max(1,a.clientWidth||window.innerWidth),h=Math.max(1,a.clientHeight||window.innerHeight),m=0;const p=new Ve(1,1,{type:je,samples:0}),w=new Ar(t,p),M=new Tr(e,s),v=new st(new G(f,h),.32,.55,.92),y=new Pr,S=new Er,A=new Cr;w.addPass(M),w.addPass(v),w.addPass(A),w.addPass(y),w.addPass(S);function P(F){u=F,v.enabled=F.bloom,y.enabled=F.aa==="smaa",S.enabled=F.aa==="fxaa",m=0,L(f,h)}function L(F,I){const ee=window.devicePixelRatio||1,q=Or(Math.min(ee,u.pixelRatioMax)*u.echelle,F,I,c);F=Math.max(1,F),I=Math.max(1,I),!(F===f&&I===h&&q===m)&&(f=F,h=I,m=q,t.setPixelRatio(q),t.setSize(f,h,!1),w.setPixelRatio(q),w.setSize(f,h))}return P(i),{renderer:t,coteMax:c,appliquer:P,taille:L,rendre(){t.setRenderTarget(null),t.setScissorTest(!1),t.setViewport(0,0,f,h),w.render()},dispose(){v.dispose(),y.dispose(),S.dispose(),A.dispose(),w.dispose(),p.dispose(),t.dispose(),t.forceContextLoss(),o.remove()}}}const Fr=3.5,Rr=2.6,Ir=2,Ur=8,Wr=3.5,Ci=64,Vr=600,jr=[[40,1],[110,2],[260,4],[1/0,6.5]],Kr=async a=>{const{container:e,field:s}=a;let i=Ei(a.qualite);const t=new li,o=new Bo(62,1,.12,6500),r=Br(e,t,o,i),n=r.renderer,[l,c,u]=await Promise.all([pa(),ba(),Ja()]),f=u.modeles,h=n.capabilities.getMaxAnisotropy(),m=[l.saleC,l.saleN,l.propreC,l.propreN],p=new Fo(n),w=new li,M=new Zt(50,32,16),v=new $({side:Fi,uniforms:{uSoleil:{value:be}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uSoleil; varying vec3 vD;
      void main(){
        float sol = smoothstep(0.05, -0.15, vD.y);
        vec3 c = mix(vec3(0.004, 0.005, 0.01), vec3(0.32, 0.31, 0.3), sol);
        c += vec3(30.0, 28.0, 25.0) * pow(max(dot(vD, uSoleil), 0.0), 600.0);
        gl_FragColor = vec4(c, 1.0);
      }`});w.add(new Ee(M,v));const y=p.fromScene(w,.02);t.environment=y.texture,t.environmentIntensity=.55,M.dispose(),v.dispose(),p.dispose();const S=new Ro(new B(1,.97,.92),3.4);S.castShadow=!0,S.shadow.bias=-3e-4,S.shadow.normalBias=.06;const A=S.shadow.camera;A.near=1,A.far=420,t.add(S,S.target);const P=new Io(new B(2766160),new B(4867648),.55);t.add(P);const L=new O().crossVectors(new O(0,1,0),be).normalize(),F=new O().crossVectors(be,L).normalize();let I=45,ee=1,q=2048;function Le(d=ee){ee=d,q=Nr(i.ombre,r.coteMax),I=(i.ombre>=4096?55:i.ombre>=2048?45:32)*d,A.left=-I,A.right=I,A.top=I,A.bottom=-I,A.far=I*9.5,A.updateProjectionMatrix(),S.shadow.radius=i.ombreRayon,S.shadow.normalBias=.06*Math.max(1,d*.75),S.shadow.mapSize.x!==q&&(S.shadow.mapSize.set(q,q),S.shadow.map?.dispose(),S.shadow.map=null)}Le();const H=Fa(s,l);let Z=gi(H,i.terrain);t.add(Z.zone,Z.anneau);let ot=i.terrain;H.setDetail(i.detail);function at(){const d=Math.min(h,i.anisotropie);for(const x of m)x.anisotropy!==d&&(x.anisotropy=d,x.needsUpdate=!0)}at();const Se=er(t,c),Y=f.base();Y.position.set(0,U(0,0),0),ze(Y),t.add(Y),Y.updateMatrixWorld(!0);const Xe=Y.getObjectByName("terminal")??null,qe=Y.getObjectByName("rampe")??null,Oe=new O(4,0,9),k=new O(-10,0,-7);Xe?.getWorldPosition(Oe),qe?.getWorldPosition(k);const _=Y.userData,ie=Array.isArray(_.murs)&&_.interieur&&_.porte&&Array.isArray(_.cercles)?_:null,Gi=typeof _.animer=="function"?_.animer.bind(_):null,Ns=d=>Y.getObjectByName(d)?.getWorldPosition(new O)??null,es=ie?Ns("terminal-interieur"):null,ts=ie?Ns("vestiaire"):null,Hi={benne:_.ecranBenne,boutique:_.ecranBoutique,tableau:_.ecranTableau};let ss=0,Bs=!1;const is=[{x:0,z:0}],Fs=ie?ie.cercles:Gr(Y),Ye={x:0,z:0,r:0},os={x:k.x,z:k.z,r:1.6};let Rs=[...Fs,os,Ye];const as=f.decor(s.seed,se/2+12,se/2+470);Xr(as),ze(as),t.add(as);let de=null;try{de=f.hologramme();const d=Y.getObjectByName("hologramme");d?d.add(de.group):(de.group.position.set(Oe.x-3,U(Oe.x-3,Oe.z),Oe.z+.5),t.add(de.group))}catch{de=null}const Is=new Array(mt*mt).fill(0);let rs=0;const ye=f.fusee();ye.group.position.set(k.x,k.y+.3,k.z),ze(ye.group),t.add(ye.group),ye.setDecollage(0);const zt=new Uo(new B(1,.6,.3),0,90,1.6),Pt=new yt;Pt.name="ancre-tuyere",Pt.position.set(0,-1.6,0),Pt.add(zt),(ye.group.getObjectByName("corps")??ye.group).add(Pt);let fe="sol",me=0;const pe=new Pi(t,{max:3e3,gravite:1.62,freinage:0,taille:[.02,.06],croissance:.6,vie:[1.6,2.8],couleur:new B(.42,.405,.39),opacite:.8}),ve=new Pi(t,{max:700,gravite:-.15,freinage:.55,taille:[1.2,2.6],croissance:2.5,vie:[3.5,6],couleur:new B(.5,.48,.46),opacite:.4});pe.densite=i.particules,ve.densite=i.particules;const Dt=new vr(t,s.seed),ns=new br(t),ke=document.createElement("div");ke.setAttribute("aria-hidden","true"),ke.className="monde-tempete",ke.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;mix-blend-mode:screen;background:radial-gradient(ellipse 120% 90% at 50% 40%, rgba(120,150,255,.55), rgba(70,60,200,.9));",e.appendChild(ke);const Xi=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Et=new xr(t,ke,Xi),T=new mr(f,t,a.couleur,o,s,pe);if(a.tenue&&T.avatar.setCosmetiques(a.tenue),ie){const d=ie.interieur,x=Y.position.y;T.batiment={murs:ie.murs,contient:(g,b)=>d.contient(g,b),sol:x+d.sol,plafond:(g,b)=>x+d.plafond(g,b)}}const le=_.arrivee;le&&Number.isFinite(le.x)&&Number.isFinite(le.z)&&Number.isFinite(le.yaw)&&(T.placer(le.x,le.z,le.yaw),T.garage={x:le.x-4,z:le.z-2.5,yaw:le.yaw});const ls=new Ia,rt=new Wa(f,t,pe,ls),cs=new Vi(t,ls);let us="";const Us=Ui(64,.55),Ws=new et({map:Us,color:new B(a.couleur),depthTest:!1,transparent:!0,sizeAttenuation:!1,opacity:0}),Ke=new $e(Ws);Ke.scale.set(.035,.035,1),Ke.renderOrder=22,Ke.visible=!1,t.add(Ke);const Ze=document.createElement("div");Ze.setAttribute("aria-hidden","true"),Ze.className="monde-visiere";const qi=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;Ze.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;"+(qi?"":"transition:opacity .25s ease;")+"background:radial-gradient(ellipse 60% 64% at 50% 47%, rgba(0,0,0,0) 72%, rgba(10,16,26,.3) 86%, rgba(4,7,12,.88) 100%),radial-gradient(ellipse 90% 50% at 50% -18%, rgba(190,215,255,.08) 60%, rgba(0,0,0,0) 66%);box-shadow:inset 0 0 70px rgba(0,0,0,.5);",getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.appendChild(Ze);let hs=!1;const[Yi,ki]=he(256,80);Os(ki,256,80,"Sac plein !",{fond:"rgba(200,40,30,0.9)",couleur:"#fff",taille:30,bordure:"#ffd166"});const ds=new ne(Yi);ds.colorSpace=Ge;const Ae=new $e(new et({map:ds,depthTest:!1,transparent:!0}));Ae.scale.set(1.5,.47,1),Ae.visible=!1,Ae.renderOrder=21,t.add(Ae);const oe=new Map,Vs=[];let fs=0;const nt=new Wo,xe=[],Ct=[],lt=new Ds().setFromObject(Y),js=Math.max(Math.abs(lt.min.x),Math.abs(lt.max.x),Math.abs(lt.min.z),Math.abs(lt.max.z),4)+1,Ki=lt.max.y+1,Gs=d=>{const x=d;if(!x.isMesh||x.isInstancedMesh||x.userData.sansOcclusion)return!1;const g=x.material;return!(Array.isArray(g)?g.some(b=>b.transparent):g.transparent)};Y.traverse(d=>{Gs(d)&&Ct.push(d)});for(const d of ie?.occulteursCamera??[])Ct.includes(d)||Ct.push(d);let Lt=[];const Hs=(d,x,g,b,z,N)=>{const V=z-g,X=N-b,dt=V*V+X*X,ti=dt>1e-9?Math.max(0,Math.min(1,((d-g)*V+(x-b)*X)/dt)):0,si=g+V*ti-d,ii=b+X*ti-x;return si*si+ii*ii};T.obstacle=(d,x,g)=>{const b=d.x+x.x*g,z=d.z+x.z*g;let N=1/0;if(nt.set(d,x),nt.near=0,nt.far=g+.4,d.y<Ki&&Hs(0,0,d.x,d.z,b,z)<js*js&&(xe.length=0,nt.intersectObjects(Ct,!1,xe),xe.length&&(N=xe[0].distance)),Lt.length){let V=!1;for(const{d:X}of oe.values())if(Hs(X.x,X.z,d.x,d.z,b,z)<16){V=!0;break}V&&(xe.length=0,nt.intersectObjects(Lt,!1,xe),xe.length&&xe[0].distance<N&&(N=xe[0].distance))}return N===1/0?1/0:Math.max(.3,N-.35)};const Xs=f.robot();Xs.updateMatrixWorld(!0);const Ot=[];Xs.traverse(d=>{const x=d;if(!x.isMesh)return;const g=new _t(x.geometry,x.material,Ci);g.count=0,g.castShadow=!0,g.receiveShadow=!0,g.frustumCulled=!1,t.add(g),Ot.push({inst:g,local:x.matrixWorld.clone()})});const Ne=[],qs=new tt,Ys=new tt,ks=new it,Ks=new O,Zi=new O(1,1,1),Qi=new O(0,1,0),ct={brosse:new Set,interagir:new Set,interactionPossible:new Set,touche:new Set,outil:new Set,pas:new Set,saut:new Set,atterrissage:new Set};function ge(d,...x){for(const g of ct[d])try{g(...x)}catch(b){console.error(`[monde] écouteur « ${d} » :`,b)}}const Ji=d=>ge("brosse",d);T.surPas=()=>ge("pas"),T.surSaut=()=>ge("saut"),T.surAtterrissage=d=>ge("atterrissage",d);let K=null;const ae=new nr(n.domElement,d=>{switch(d.type){case"touche":ge("touche",d.t);break;case"outil":ge("outil",d.choix);break;case"sauter":T.sauter();break;case"vue":T.basculerVue();break;case"zoom":T.zoomer(d.sens);break;case"interagir":if(!K)break;K.type==="vehicule"&&(T.enVehicule?T.descendre():T.monter()),ge("interagir",K);break}});function _i(){const d=T.centre();let x=null;if(T.dedans&&!T.enVehicule)ts&&Math.hypot(d.x-ts.x,d.z-ts.z)<Ir?x={type:"vestiaire"}:es&&Math.hypot(d.x-es.x,d.z-es.z)<Rr&&(x={type:"terminal"});else{let g=$o+(T.enVehicule?2:0),b=-1;for(const{d:z}of oe.values()){const N=Math.hypot(d.x-z.x,d.z-z.z);N<g&&(g=N,b=z.id)}if(b>=0)x={type:"depot",depotId:b};else if(Xe&&!T.enVehicule&&Math.hypot(d.x-Oe.x,d.z-Oe.z)<Fr)x={type:"terminal"};else if(qe&&Math.hypot(d.x-k.x,d.z-k.z)<Ur+(T.enVehicule?3:0))x={type:"rampe"};else if(T.avatar.vehicule&&T.distanceVehicule()<Wr)x={type:"vehicule"};else if(!T.enVehicule){const z=Dt.proche(d.x,d.z);z>=0&&(x={type:"caillou",id:z})}}x?.type===K?.type&&(x?.type!=="depot"||K?.type==="depot"&&K.depotId===x.depotId)&&(x?.type!=="caillou"||K?.type==="caillou"&&K.id===x.id)||(K=x,ge("interactionPossible",x))}function $i(d,x){if(Gi?.(x),!ie)return;const g=T.centre(),b=ie.porte;is[0].x=g.x,is[0].z=g.z;const z=ia(b.x,b.z,b.rayon,is)||rt.procheDe(b.x,b.z,b.rayon)?1:0,N=oa(ss,z,d);N!==ss&&(ss=N,b.setOuverture(N));const V=T.dedans&&!T.enVehicule;V!==Bs&&(Bs=V,ie.setCameraInterieure(V))}function ut(){const d=Math.max(1,e.clientWidth||window.innerWidth),x=Math.max(1,e.clientHeight||window.innerHeight);o.aspect=d/x,o.updateProjectionMatrix(),r.taille(d,x);const g=x*n.getPixelRatio();pe.setEchelle(g),ve.setEchelle(g),Et.setEchelle(g)}ut();const Zs=typeof ResizeObserver<"u"?new ResizeObserver(ut):null;Zs?.observe(e),window.addEventListener("resize",ut);const ms=new O;function eo(){let d=1;for(const[V,X]of jr)if(T.camDist<V){d=X;break}d!==ee&&Le(d);const x=T.centre(),g=I*2/q,b=Math.round(x.dot(L)/g)*g,z=Math.round(x.dot(F)/g)*g,N=x.dot(be);ms.copy(L).multiplyScalar(b).addScaledVector(F,z).addScaledVector(be,N),S.target.position.copy(ms),S.position.copy(ms).addScaledVector(be,I*4.5),S.target.updateMatrixWorld()}function to(d){const x=1-Math.exp(-d*6);for(let g=0;g<Ne.length;g++){const b=Ne[g],z=b.cx-b.x,N=b.cz-b.z;if(Math.abs(z)+Math.abs(N)>20?(b.x=b.cx,b.z=b.cz):(b.x+=z*x,b.z+=N*x),z*z+N*N>1e-5){let X=Math.atan2(-z,-N)-b.yaw;for(;X>Math.PI;)X-=Math.PI*2;for(;X<-Math.PI;)X+=Math.PI*2;b.yaw+=X*Math.min(1,d*8)}Ks.set(b.x,U(b.x,b.z),b.z),ks.setFromAxisAngle(Qi,b.yaw),qs.compose(Ks,ks,Zi);for(const V of Ot)Ys.multiplyMatrices(qs,V.local),V.inst.setMatrixAt(g,Ys)}for(const g of Ot)g.inst.count=Ne.length,g.inst.instanceMatrix.needsUpdate=!0}function so(d,x){if(fe==="sol")return;me+=d;let g=0,b=0;if(fe==="decollage"){const z=Math.min(1,me/6);g=z*z*z,b=z<.05?z/.05:1,z<.5&&ve.emettre(Math.round(18*d*60*ve.densite*(1-z))||1,k.x,k.y+.6,k.z,7,.6,2.5,k.y-50),me>=6&&(fe="attente",me=0)}else if(fe==="attente")g=1,me>=4&&(fe="atterrissage",me=0);else{const z=Math.min(1,me/6.5);g=(1-z)*(1-z)*(1-z),b=z>.97?(1-z)/.03:.75,z>.75&&ve.emettre(Math.round(8*d*60*ve.densite)||1,k.x,k.y+.6,k.z,5,.4,2,k.y-50),me>=6.5&&(fe="sol",g=0,b=0)}if(ye.setDecollage(g),b>0&&g<.97){const z=.85+Math.sin(x*53)*.08+Math.sin(x*31)*.07;zt.intensity=1200*b*z}else zt.intensity=0}const Te=new O;function io(d,x){if(T.avatar.hautTete(Te),T.sacPlein){Ae.visible=!0;const b=1+Math.sin(x*6)*(T.veutBrosser?.12:.04);Ae.scale.set(1.5*b,.47*b,1),Ae.position.set(Te.x,Te.y+.25,Te.z)}else Ae.visible=!1;cs.update(d,Te);const g=Math.max(0,Math.min(1,(T.camDist-45)/60));if(Ke.visible=g>0,g>0&&(Ws.opacity=g*.95,Ke.position.set(Te.x,Te.y+.5,Te.z)),T.dansCasque!==hs&&(hs=T.dansCasque,Ze.style.opacity=hs?"1":"0"),de&&(de.animer(x%Vr),rs-=d,rs<=0)){rs=2;for(let b=0;b<mt;b++)for(let z=0;z<mt;z++)Is[b*mt+z]=s.sectorClean(z,b);de.setProprete(Is)}T.avatar.vehicule&&!T.enVehicule?(Ye.x=T.vehPos.x,Ye.z=T.vehPos.z,Ye.r=T.outil?.id==="camion-aspirateur"?2.4:1.2):Ye.r=0,os.r=fe==="sol"?1.6:0}let Nt=0,Bt=0,Be=0,Qs=0,ps=0,ht=0,Js=!1,Ft=!1;function _s(d){if(Ft)return;Nt=requestAnimationFrame(_s);const x=Bt?Math.min(.1,Math.max(0,(d-Bt)/1e3)):1/60;Bt=d,Be+=x,ae.lire(x),T.update(x,Be,ae,Rs,Ji),Js||_i(),vs&&vs(x),rt.update(x,Be,o.position),to(x),so(x,Be),io(x,Be),$i(x,Be),pe.update(x),ve.update(x),ns.update(Be,Date.now()),Et.update(x,o.position,U),eo(),Se.update(o,x),Z.majLod(o.position.x,o.position.z,o.position.y-U(o.position.x,o.position.z)),H.majMasque(n),n.info.reset(),r.rendre(),ps++,ht?d-ht>=500&&(Qs=ps*1e3/(d-ht),ps=0,ht=d):ht=d}let vs=null;const te={x:0,y:0,z:0,yaw:0,enVehicule:!1,enMouvement:!1,brosse:!1,vitesse:0,yawCamera:0,vue:"troisieme",interieur:!1};let $s=null;const Rt=new O,ei={on(d,x){return ct[d].add(x),()=>{ct[d].delete(x)}},setOutil(d,x,g){T.setOutil(d,x,g)},setSacPlein(d){T.sacPlein=d},setCosmetiques(d){T.avatar.setCosmetiques(d)},setEcran(d,x){Hi[d]?.setTexte(x)},showStamps(d){if(!d.length)return;const x=Math.min(d.length,8),g=d.length/x,b=o.position;for(let z=0;z<x;z++){const N=d[Math.floor(z*g)],V=N.x-b.x,X=N.z-b.z;if(V*V+X*X>3600)continue;const dt=U(N.x,N.z);pe.emettre(Math.max(1,Math.round(2*pe.densite)),N.x,dt+.03,N.z,.35+N.r*.4,.6,N.r,dt)}},setPlayers(d,x){us=x,rt.set(d,x)},setDepots(d){if(d.length===oe.size&&d.every(g=>{const b=oe.get(g.id);return b!==void 0&&b.d.x===g.x&&b.d.z===g.z}))return;const x=new Set;for(const g of d){x.add(g.id);const b=oe.get(g.id);if(b){(b.d.x!==g.x||b.d.z!==g.z)&&(b.d={...g},b.g.position.set(g.x,U(g.x,g.z),g.z),b.c.x=g.x,b.c.z=g.z);continue}const z=f.depot();if(ze(z),!fs){const N=new Ds().setFromObject(z);fs=Math.max(.8,Math.min(3,Math.max(N.max.x,-N.min.x,N.max.z,-N.min.z)*.92-.1))}z.position.set(g.x,U(g.x,g.z),g.z),t.add(z),z.updateMatrixWorld(!0),oe.set(g.id,{d:{...g},g:z,c:{x:g.x,z:g.z,r:fs}})}for(const[g,b]of oe)x.has(g)||(b.g.removeFromParent(),Vs.push(b.g),oe.delete(g));Rs=[...Fs,os,Ye,...[...oe.values()].map(g=>g.c)],Lt=[];for(const g of oe.values())g.g.updateMatrixWorld(!0),g.g.traverse(b=>{Gs(b)&&Lt.push(b)});K=K?.type==="depot"&&!oe.has(K.depotId)?null:K},setRobots(d){const x=Math.min(Ci,d.length);Ne.length=Math.min(Ne.length,x);for(let g=0;g<x;g++){const b=d[g],z=Ne[g];z&&z.id===b.id?(z.cx=b.x,z.cz=b.z):Ne[g]={id:b.id,x:b.x,z:b.z,cx:b.x,cz:b.z,yaw:b.angle+Math.PI}}},lancerFusee(){fe!=="decollage"&&(fe="decollage",me=0)},emote(d,x){if(d===us||us===""){cs.montrer(x);return}rt.emote(d,x)},setPause(d){Js=d,ae.setPause(d),d||ae.verrouiller()},setQualite(d){i=Ei(d),r.appliquer(i),Le(),at(),H.setDetail(i.detail),pe.densite=i.particules,ve.densite=i.particules,i.terrain!==ot&&(ot=i.terrain,t.remove(Z.zone,Z.anneau),Z.dispose(),Z=gi(H,i.terrain),t.add(Z.zone,Z.anneau)),ut()},setControles(d,x){ae.sensibilite=Math.max(.2,Math.min(3,d)),ae.inverserY=x},setLiaisons(d){ae.setLiaisons(d)},setManette(d){ae.setManette(d)},setCamera(d,x){const g=Number.isFinite(d)?Math.max(50,Math.min(100,d)):62;g!==o.fov&&(o.fov=g,o.updateProjectionMatrix()),x!==$s&&($s=x,T.setVue(x))},manetteActive(){return ae.manetteActive},local(){const d=T.centre();return te.x=d.x,te.y=d.y,te.z=d.z,te.yaw=T.enVehicule?T.vehYaw:T.yaw,te.enVehicule=T.enVehicule,te.enMouvement=T.enMouvement,te.brosse=T.brosse,te.vitesse=T.vitesseSol,te.yawCamera=T.camYawVue,te.vue=T.vue,te.interieur=T.dedans&&!T.enVehicule,te},pointDevant(d){return T.pointDevant(d)},pointVise(d){o.getWorldDirection(Rt);const x=o.position,g=Math.max(1,Math.min(400,d));for(let b=.5;b<=g;b+=.5){const z=x.x+Rt.x*b,N=x.z+Rt.z*b;if(x.y+Rt.y*b<=U(z,N))return{x:z,z:N}}return T.pointDevant(8)},setPings(d){ns.set(d)},setCailloux(d){Dt.setRamasses(d),K?.type==="caillou"&&Dt.proche(T.centre().x,T.centre().z)!==K.id&&(K=null,ge("interactionPossible",null))},setTempete(d){Et.set(d)},stats(){const d=n.info;return{fps:Math.round(Qs*10)/10,drawCalls:d.render.calls,triangles:d.render.triangles,geometries:d.memory.geometries,textures:d.memory.textures}},start(d){vs=d,!(Nt||Ft)&&(Bt=0,Nt=requestAnimationFrame(_s))},dispose(){if(!Ft){Ft=!0,cancelAnimationFrame(Nt),window.removeEventListener("resize",ut),Zs?.disconnect(),ae.dispose(),T.dispose(),rt.dispose(),cs.dispose(),ls.dispose(),pe.dispose(),ve.dispose(),Dt.dispose(),ns.dispose(),Et.dispose(),ke.remove(),Se.dispose(),de?.dispose(),ye.dispose();for(const d of Ot)d.inst.dispose();for(const d of Vs)t.add(d);if(typeof _.dispose=="function"){try{_.dispose()}catch(d){console.warn("[monde] libération de la base :",d)}t.add(Y)}qr(t),H.dispose(),ds.dispose(),Us.dispose(),Ze.remove(),zt.dispose(),y.dispose(),S.shadow.map?.dispose(),t.clear(),r.dispose();for(const d of Object.keys(ct))ct[d].clear()}}};ei._debug={scene:t,camera:o,joueur:T,renderer:n,source:u.source,terrain:()=>Z,entrees:ae};try{await Promise.race([n.compileAsync(t,o),new Promise(d=>setTimeout(d,5e3))])}catch(d){console.warn("[monde] précompilation des shaders impossible :",d)}return ei};function Gr(a){const e=[],s=new Ds,i=(t,o)=>{for(const r of t.children){if(s.setFromObject(r),s.isEmpty())continue;const n=(s.max.x-s.min.x)/2,l=(s.max.z-s.min.z)/2,c=s.max.y-s.min.y,u=Math.max(n,l);if(u>7&&r.children.length&&o<4){i(r,o+1);continue}c<.9||u<.15||u>7||r.name==="rampe"||e.push({x:(s.min.x+s.max.x)/2,z:(s.min.z+s.max.z)/2,r:Math.min(n,l)*.5+u*.4})}};return i(a,0),e}const bt=new tt,_e=new O,Hr=new it,Yt=new O,kt=se/2+4;function Xr(a){for(const e of[...a.children]){const s=e;if(s.isInstancedMesh){for(let o=0;o<s.count;o++){s.getMatrixAt(o,bt),bt.decompose(_e,Hr,Yt),_e.applyMatrix4(e.matrix),Math.abs(_e.x)<kt&&Math.abs(_e.z)<kt&&Yt.set(0,0,0);const r=bt.elements;r[13]+=U(_e.x,_e.z)-.2*Yt.y,Yt.x===0&&bt.makeScale(0,0,0),s.setMatrixAt(o,bt)}s.instanceMatrix.needsUpdate=!0,s.computeBoundingSphere();continue}const i=e.position.x,t=e.position.z;if(Math.abs(i)<kt&&Math.abs(t)<kt){e.removeFromParent();continue}e.position.y+=U(i,t)}}function qr(a){const e=new Set,s=new Set;a.traverse(i=>{const t=i;t.geometry&&e.add(t.geometry);const o=t.material;Array.isArray(o)?o.forEach(r=>s.add(r)):o&&s.add(o)});for(const i of e)i.dispose();for(const i of s){for(const t of Object.values(i))t&&t.isTexture&&t.dispose();i.dispose()}}export{Kr as createWorld};
