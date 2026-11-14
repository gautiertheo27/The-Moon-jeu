const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./models-DbEGlOa8.js","./three-vhVOI53r.js","./index-DALoLKJd.js","./index-D-6fNTOz.css"])))=>i.map(i=>d[i]);
import{Q as jt,M as mi,C as re,S as Ie,T as Vi,R as pi,N as vi,L as Hi,a as Gi,D as Ws,b as js,U as Vs,c as us,V,G as I,d as De,e as X,B as xt,f as ne,g as Xi,h as Ke,i as Qe,j as N,k as qi,I as Yi,l as xi,m as Ft,n as ki,O as mt,o as W,p as Ki,q as Qi,r as Zi,s as It,t as Ji,E as _i,u as J,A as ke,P as gi,v as bi,w as $i,x as eo,F as Hs,y as Be,W as Re,H as Fe,z as to,J as so,K as Gs,X as Xs,Y as io,Z as oo,_ as ao,$ as ro,a0 as no,a1 as lo,a2 as Mi,a3 as co,a4 as uo,a5 as ho,a6 as fo,a7 as mo,a8 as qs,a9 as po,aa as vo,ab as xo,ac as go,ad as bo,ae as hs,af as Mo}from"./three-vhVOI53r.js";import{t as wo,N as $,M as ee,f as rt,T as qe,a as Ys,d as ks,_ as So,m as yo,l as Ao,b as To,c as zo,e as Po,g as Do,v as Eo,h as Ks,S as nt,D as Co}from"./index-DALoLKJd.js";const Qs=.3,Lo=16;function Oo(a){return!Number.isFinite(a)||a<=Qs?1:Math.min(Lo,Math.ceil(a/Qs))}function No(a,e,t,i=3){let s=!1;for(let o=0;o<i;o++){let r=!1;for(let n=0;n<t.length;n++){const l=t[n],c=l.bx-l.ax,f=l.bz-l.az,u=c*c+f*f,d=u>1e-12?Math.max(0,Math.min(1,((a.x-l.ax)*c+(a.z-l.az)*f)/u)):0,m=a.x-(l.ax+c*d),p=a.z-(l.az+f*d),M=m*m+p*p;if(!(M>=e*e)){if(M>1e-12){const w=Math.sqrt(M);a.x+=m/w*(e-w),a.z+=p/w*(e-w)}else if(u>1e-12){const w=Math.sqrt(u);a.x+=-f/w*e,a.z+=c/w*e}else continue;r=!0}}if(!r)break;s=!0}return s}function Bo(a,e,t,i){const s=t*t;for(let o=0;o<i.length;o++){const r=i[o].x-a,n=i[o].z-e;if(r*r+n*n<s)return 1}return 0}function Ro(a,e,t){const i=Number.isFinite(a)?a:0,s=1-Math.exp(-4*Math.max(0,Number.isFinite(t)?t:0)),o=i+(e-i)*s;return Math.abs(e-o)<.002?Math.max(0,Math.min(1,e)):Math.max(0,Math.min(1,o))}function Ut(a){return wo(a)?.vehicule??!1}const Fo=.4,Io=.15,Zs=.2,Uo=.2;function Wo(a,e,t,i,s=null){if(i)return"conduite";const o=t>(s==="marche"?Io:Fo);switch(a){case"brosse-a-dents":case"brosse-a-recurer":return e?"brosse":o?"marche":"repos";case"balai":case"aspirateur-dorsal":return e?"brosse-debout":o?"marche":"repos";case"balayeuse-poussee":return"pousse";default:return o?"marche":"repos"}}function jo(a,e){const t=Math.min(Math.max(0,e),6);return a==="marche"?.55+t*.13:a==="pousse"?.55+t*.12:0}const Vo={"brosse-a-dents":.55,"brosse-a-recurer":.6,balai:.95,"aspirateur-dorsal":.95,"balayeuse-poussee":1.1,"balayeuse-autoportee":1.6,"camion-aspirateur":3};class wi{constructor(e,t,i){this.modeles=e,this.scene=t,this.astro=e.astronaute(i),Te(this.astro.group),t.add(this.astro.group);const s=this.astro.main,o=r=>{for(const n of r.children)n.isMesh||(this.articulations.push(n),n!==s&&o(n))};o(this.astro.group),this.poseDepart=new Float32Array(this.articulations.length*7),this.objTete=this.astro.group.getObjectByName("tete")??null}astro;outilId=null;tenu=null;vehicule=null;assis=!1;affiche=!0;ombre=!0;anim=null;fondu=0;articulations=[];poseDepart;cycles=0;pasFaits=0;vLisse=0;tPrec=-1;depuisBrosse=99;brosseStable=!1;premiere=!1;matInvisible=null;caches=[];objTete;setCosmetiques(e){const t=this.astro;if(!t.setCosmetiques)return;const i=this.premiere;i&&this.setPremierePersonne(!1),t.setCosmetiques(e),Te(t.group),this.ombre||lt(t.group,!1),i&&this.setPremierePersonne(!0)}setOutil(e){e!==this.outilId&&(this.outilId=e,this.retirerOutil(),Ut(e)?(this.vehicule=this.modeles.vehicule(e),Te(this.vehicule.group),this.ombre||lt(this.vehicule.group,!1),this.vehicule.group.visible=this.affiche,this.scene.add(this.vehicule.group)):(this.tenu=this.modeles.outil(e),Te(this.tenu.group),this.ombre||lt(this.tenu.group,!1),this.astro.main.add(this.tenu.group)))}setDistance(e,t){e!==this.affiche&&(this.affiche=e,this.setVisible(e)),t!==this.ombre&&(this.ombre=t,lt(this.astro.group,t),this.vehicule&&lt(this.vehicule.group,t))}retirerOutil(){this.assis&&this.setAssis(!1),this.tenu&&(this.tenu.group.removeFromParent(),this.tenu.dispose(),this.tenu=null),this.vehicule&&(this.vehicule.group.removeFromParent(),this.vehicule.dispose(),this.vehicule=null)}setAssis(e){if(e===this.assis||e&&!this.vehicule)return;this.assis=e;const t=this.astro.group;e&&this.vehicule?(this.vehicule.siege.add(t),t.position.set(0,0,0),t.rotation.set(0,0,0)):this.scene.add(t)}tete(){return this.assis&&this.vehicule?this.vehicule.tete:this.tenu?this.tenu.tete:null}positionTete(e){const t=this.tete();return t?(t.getWorldPosition(e),Number.isFinite(e.x)&&Number.isFinite(e.z)):!1}animer(e,t,i){const s=this.tPrec<0?0:Math.min(.1,Math.max(0,e-this.tPrec));this.tPrec=e;const o=this.outilId??"brosse-a-dents";this.depuisBrosse=i?0:this.depuisBrosse+s,this.brosseStable=this.depuisBrosse<Uo;const r=Math.max(0,t);this.vLisse+=(r-this.vLisse)*(s>0?1-Math.exp(-s*10):1);const n=Wo(o,this.brosseStable,this.vLisse,this.assis,this.anim);n!==this.anim&&(this.anim!==null&&(this.capturerPose(),this.fondu=Zs),this.anim=n);let l=e;const c=jo(n,this.vLisse);if(c>0){const f=Math.floor(this.cycles*2);this.cycles+=c*s,this.cycles>1e6?this.cycles-=1e6:Math.floor(this.cycles*2)!==f&&this.vLisse>.5&&this.pasFaits++,l=this.cycles/c}this.astro.animer(n,l,this.vLisse),this.fondu>0&&(this.fondu-=s,this.fondu>0&&this.melangerPose(1-this.fondu/Zs)),this.tenu&&this.tenu.animer(e,this.brosseStable),this.vehicule&&this.vehicule.animer(e,this.brosseStable&&this.assis)}capturerPose(){const e=this.poseDepart;for(let t=0;t<this.articulations.length;t++){const i=this.articulations[t],s=t*7;e[s]=i.quaternion.x,e[s+1]=i.quaternion.y,e[s+2]=i.quaternion.z,e[s+3]=i.quaternion.w,e[s+4]=i.position.x,e[s+5]=i.position.y,e[s+6]=i.position.z}}melangerPose(e){const t=e*e*(3-2*e),i=this.poseDepart;for(let s=0;s<this.articulations.length;s++){const o=this.articulations[s],r=s*7;Js.set(i[r],i[r+1],i[r+2],i[r+3]).slerp(o.quaternion,t),o.quaternion.copy(Js),o.position.set(i[r+4]+(o.position.x-i[r+4])*t,i[r+5]+(o.position.y-i[r+5])*t,i[r+6]+(o.position.z-i[r+6])*t)}}setPremierePersonne(e){if(e===this.premiere)return;if(this.premiere=e,!e){for(const o of this.caches)o.mesh.material=o.mat;this.caches.length=0;return}const t=this.matInvisible??=new mi({colorWrite:!1,depthWrite:!1}),i=this.astro.main,s=(o,r)=>{for(const n of o.children){if(n===i)continue;const l=r||n.name.startsWith("epaule"),c=n;c.isMesh?l||(this.caches.push({mesh:c,mat:c.material}),c.material=t):s(n,l)}};s(this.astro.group,!1)}positionYeux(e){return this.objTete?this.objTete.localToWorld(e.set(0,.2,0)):(this.astro.group.getWorldPosition(e),e.y+=this.assis?1.25:1.6,e)}setVisible(e){this.astro.group.visible=e,this.vehicule&&(this.vehicule.group.visible=e)}hautTete(e){return this.astro.group.getWorldPosition(e),e.y+=this.assis?1.9:2.25,e}dispose(){this.setPremierePersonne(!1),this.matInvisible?.dispose(),this.matInvisible=null,this.retirerOutil(),this.astro.group.removeFromParent(),this.astro.dispose()}}const Js=new jt;function Te(a){a.traverse(e=>{e.isMesh&&!e.userData.ombreFixee&&(e.castShadow=!0,e.receiveShadow=!0)})}function lt(a,e){a.traverse(t=>{if(!t.isMesh)return;const s=t.userData;e?t.castShadow=s.ombreFixee?s.ombreOrigine??t.castShadow:!0:(s.ombreFixee&&s.ombreOrigine===void 0&&(s.ombreOrigine=t.castShadow),t.castShadow=!1)})}const Ho=new Vi;async function Ne(a){try{const e=await Ho.loadAsync(`./textures/${a}`),t=e.image;return!t||!t.width?(e.dispose(),null):e}catch{return null}}function ue(a,e,t){let i=a*374761393+e*668265263+t*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Go(a,e,t,i){const s=Math.floor(a),o=Math.floor(e),r=a-s,n=e-o,l=r*r*(3-2*r),c=n*n*(3-2*n),f=(s%t+t)%t,u=(o%t+t)%t,d=(f+1)%t,m=(u+1)%t,p=ue(f,u,i),M=ue(d,u,i),w=ue(f,m,i),x=ue(d,m,i);return p+(M-p)*l+(w-p)*c+(p-M-w+x)*l*c}function Pe(a,e,t,i,s){let o=0,r=.5,n=0,l=t;for(let c=0;c<i;c++)o+=Go(a*l,e*l,l,s+c*31)*r,n+=r,r*=.5,l*=2;return o/n}function he(a,e){const t=document.createElement("canvas");t.width=a,t.height=e;const i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("canvas 2D indisponible");return[t,i]}function zt(a,e){return a.wrapS=a.wrapT=pi,a.colorSpace=e?Ie:vi,a.minFilter=Hi,a.generateMipmaps=!0,a.needsUpdate=!0,a}function _s(a,e,t){const[i,s]=he(e,e),o=s.createImageData(e,e);for(let r=0;r<e;r++)for(let n=0;n<e;n++){const l=(n-1+e)%e,c=(n+1)%e,f=(r-1+e)%e,u=(r+1)%e,d=(a[r*e+c]-a[r*e+l])*t,m=(a[u*e+n]-a[f*e+n])*t,p=Math.hypot(d,m,1),M=(r*e+n)*4;o.data[M]=(-d/p*.5+.5)*255,o.data[M+1]=(-m/p*.5+.5)*255,o.data[M+2]=(1/p*.5+.5)*255,o.data[M+3]=255}return s.putImageData(o,0,0),i}function Xo(a){const e=new Float32Array(a*a),[t,i]=he(a,a),s=i.createImageData(a,a);for(let o=0;o<a;o++)for(let r=0;r<a;r++){const n=r/a,l=o/a,c=Pe(n,l,4,4,11),f=Pe(n,l,64,2,23),u=ue(r,o,5);let d=0;const m=10,p=Math.floor(n*m),M=Math.floor(l*m);for(let S=-1;S<=1;S++)for(let T=-1;T<=1;T++){const C=((p+T)%m+m)%m,L=((M+S)%m+m)%m;if(ue(C,L,77)>.55)continue;const F=(p+T+ue(C,L,78))/m,R=(M+S+ue(C,L,79))/m,Z=(.12+.22*ue(C,L,80))/m,q=Math.hypot(n-F,l-R)/Z;q<1&&(d=Math.max(d,Math.sqrt(1-q*q)))}const w=c*.5+f*.35+u*.15+d*.8;e[o*a+r]=w;const x=.5+(c-.5)*.35+(f-.5)*.25+(u-.5)*.18-d*.18,y=(o*a+r)*4;s.data[y]=Math.max(0,Math.min(255,x*255*1.02)),s.data[y+1]=Math.max(0,Math.min(255,x*255*1)),s.data[y+2]=Math.max(0,Math.min(255,x*255*.96)),s.data[y+3]=255}return i.putImageData(s,0,0),{c:t,h:e}}function qo(a){const e=new Float32Array(a*a),[t,i]=he(a,a),s=i.createImageData(a,a);for(let o=0;o<a;o++)for(let r=0;r<a;r++){const n=r/a,l=o/a,c=Pe(n,l,3,4,41),f=Pe(n,l,32,3,43),u=ue(r,o,9),d=Math.abs(Pe(n,l,6,3,47)-.5)<.012?1:0;e[o*a+r]=c*.4+f*.2+u*.04-d*.3;const m=.5+(c-.5)*.3+(f-.5)*.15+(u-.5)*.05-d*.15,p=(o*a+r)*4;s.data[p]=Math.max(0,Math.min(255,m*255*.97)),s.data[p+1]=Math.max(0,Math.min(255,m*255*1)),s.data[p+2]=Math.max(0,Math.min(255,m*255*1.05)),s.data[p+3]=255}return i.putImageData(s,0,0),{c:t,h:e}}async function Yo(){const[a,e,t,i]=await Promise.all([Ne("regolithe-couleur.webp"),Ne("regolithe-normale.webp"),Ne("sol-propre-couleur.webp"),Ne("sol-propre-normale.webp")]);let s=a,o=e,r=t,n=i;if(!s||!o){const l=Xo(512);s??=new re(l.c),o??=new re(_s(l.h,512,6))}if(!r||!n){const l=qo(512);r??=new re(l.c),n??=new re(_s(l.h,512,3))}return{saleC:zt(s,!0),saleN:zt(o,!1),propreC:zt(r,!0),propreN:zt(n,!1)}}function os(a,e){return a.wrapS=pi,a.wrapT=Gi,a.colorSpace=e?Ie:vi,a.needsUpdate=!0,a}function ko(a,e){const[t,i]=he(a,e),s=i.createImageData(a,e);for(let o=0;o<e;o++){const r=(o/e-.5)*Math.PI;for(let n=0;n<a;n++){const l=n/a,c=o/e,f=Pe(l,c*.5,5,5,101),u=Pe(l,c*.5,12,3,103),d=f>.53,m=Math.abs(r)>1.25-(u-.5)*.2;let p,M,w;if(m)p=235,M=240,w=245;else if(d)Math.abs(r)<.55&&u>.5?(p=190+u*30,M=160+u*20,w=110):(p=60+u*50,M=100+u*50,w=50+u*20);else{const y=Math.min(1,(.53-f)*6);p=15+20*(1-y),M=45+50*(1-y),w=110+50*(1-y)}const x=(o*a+n)*4;s.data[x]=p,s.data[x+1]=M,s.data[x+2]=w,s.data[x+3]=255}}return i.putImageData(s,0,0),t}function Ko(a,e){const[t,i]=he(a,e),s=i.createImageData(a,e);for(let o=0;o<e;o++)for(let r=0;r<a;r++){const n=Pe(r/a,o/e*.5,6,5,211),l=Math.max(0,Math.min(1,(n-.5)*3.2)),c=(o*a+r)*4,f=l*255;s.data[c]=f,s.data[c+1]=f,s.data[c+2]=f,s.data[c+3]=255}return i.putImageData(s,0,0),t}function Qo(a){const e=a.image,t=Math.min(2048,e.width),i=Math.max(1,Math.round(e.height*t/e.width)),[s,o]=he(t,i);o.drawImage(e,0,0,t,i);const r=o.getImageData(0,0,t,i);for(let n=0;n<r.data.length;n+=4){const l=(r.data[n]*.3+r.data[n+1]*.59+r.data[n+2]*.11)*(r.data[n+3]/255);r.data[n]=r.data[n+1]=r.data[n+2]=l,r.data[n+3]=255}return o.putImageData(r,0,0),a.dispose(),new re(s)}async function Zo(){const[a,e,t]=await Promise.all([Ne("terre.webp"),Ne("terre-nuages.webp"),Ne("etoiles.webp")]),i=os(a??new re(ko(1024,512)),!0);i.anisotropy=4;const s=os(e?Qo(e):new re(Ko(1024,512)),!1);return{terre:i,nuages:s,etoiles:t?os(t,!0):null}}function Si(a=128,e=0){const[t,i]=he(a,a),s=i.createRadialGradient(a/2,a/2,0,a/2,a/2,a/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(Math.max(.01,e),"rgba(255,255,255,0.9)"),s.addColorStop(Math.min(.99,e+.25),"rgba(255,255,255,0.25)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,a,a);const o=new re(t);return o.colorSpace=Ie,o}function fs(a,e,t,i,s){a.clearRect(0,0,e,t);const o=s.taille??30;a.font=`600 ${o}px "Segoe UI", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle";const r=Math.min(e-8,a.measureText(i).width+28),n=o+18,l=(e-r)/2,c=s.barre!==void 0?4:(t-n)/2;if(s.fond&&(a.fillStyle=s.fond,as(a,l,c,r,n,n/2),a.fill(),s.bordure&&(a.strokeStyle=s.bordure,a.lineWidth=3,a.stroke())),a.fillStyle=s.couleur??"#fff",a.fillText(i,e/2,c+n/2+1,e-20),s.barre!==void 0){const f=Math.min(140,r-20),u=c+n+6;a.fillStyle="rgba(10,14,24,0.7)",as(a,(e-f)/2,u,f,10,5),a.fill();const d=Math.max(0,Math.min(1,s.barre));a.fillStyle=d>.95?"#ff5a4a":d>.7?"#ffc04a":"#7fd6ff",d>0&&(as(a,(e-f)/2+1,u+1,Math.max(8,(f-2)*d),8,4),a.fill())}}function as(a,e,t,i,s,o){a.beginPath(),a.moveTo(e+o,t),a.arcTo(e+i,t,e+i,t+s,o),a.arcTo(e+i,t+s,e,t+s,o),a.arcTo(e,t+s,e,t,o),a.arcTo(e,t,e+i,t,o),a.closePath()}const B=ee/2,ct=1969,Oe=B+6,Jo=[[42,58,11,1.4],[-55,30,8,1],[-30,-70,14,1.6],[75,-40,9,1.1],[-90,-10,12,1.3],[20,-95,7,.8],[100,85,13,1.5],[-78,92,10,1.2],[64,16,5,.6],[-18,44,4,.45],[8,-38,5,.55],[170,40,22,2.2],[-160,-150,26,2.6],[190,-170,15,1.6],[-200,120,18,1.9],[40,200,24,2.3],[-60,-210,12,1.3],[140,160,10,1.1],[-150,20,9,1],[215,215,14,1.5],[-220,-60,11,1.2]];function Pt(a,e,t){const i=Math.max(0,Math.min(1,(t-a)/(e-a)));return i*i*(3-2*i)}function Wt(a,e){const t=Math.hypot(a,e),i=Pt(18,42,t);let s=(rt(a/70+50,e/70+50,ct,3)-.5)*6+(rt(a/16+9,e/16+9,ct+7,2)-.5)*.9;for(const[l,c,f,u]of Jo){const d=a-l,m=e-c,p=d*d+m*m;if(p>f*f*4)continue;const M=Math.sqrt(p)/f;M<1&&(s-=u*(1-M*M));const w=(M-1)/.35;s+=u*.35*Math.exp(-w*w)}s*=i;const o=Math.abs(a),r=Math.abs(e);if(o<=B&&r<=B)return s;const n=B+Math.hypot(Math.max(0,o-B),Math.max(0,r-B));if(n>Oe){const l=Pt(Oe,Oe+70,n),c=Pt(Oe+70,Oe+350,n),f=1-Math.abs(rt(a/160+3,e/160+3,ct+3,4)*2-1);s+=l*(rt(a/28,e/28,ct+11,3)-.35)*14,s+=c*(f*f*75+rt(a/45,e/45,ct+13,3)*22),s+=Pt(Oe+350,Oe+550,n)*30}return s}const pt=.5,vt=B+8,ae=Math.round(vt*2/pt)+1;let _o=null;function $o(){const a=new Float32Array(ae*ae);for(let e=0;e<ae;e++){const t=-vt+e*pt;for(let i=0;i<ae;i++)a[e*ae+i]=Wt(-vt+i*pt,t)}return a}let yi=0;function ea(a){yi=Number.isFinite(a)&&a>0?a:0}function j(a,e){const t=yi;if(t<=0||a<=-B||e<=-B||a>=B||e>=B)return be(a,e);const i=(a+B)/t,s=(e+B)/t,o=Math.floor(i),r=Math.floor(s),n=i-o,l=s-r,c=-B+o*t,f=-B+r*t,u=be(c+t,f),d=be(c,f+t);if(n+l<=1){const p=be(c,f);return p+(u-p)*n+(d-p)*l}const m=be(c+t,f+t);return m+(d-m)*(1-n)+(u-m)*(1-l)}function be(a,e){const t=(a+vt)/pt,i=(e+vt)/pt;if(t<0||i<0||t>=ae-1||i>=ae-1)return Wt(a,e);const s=_o??=$o(),o=Math.floor(t),r=Math.floor(i),n=t-o,l=i-r,c=r*ae+o,f=s[c]+(s[c+1]-s[c])*n,u=s[c+ae]+(s[c+ae+1]-s[c+ae])*n;return f+(u-f)*l}function ds(a,e,t,i,s,o){const r=s(a+o,e)-s(a-o,e),n=s(a,e+o)-s(a,e-o),l=-r,c=2*o,f=-n,u=Math.hypot(l,c,f);t[i]=l/u,t[i+1]=c/u,t[i+2]=f/u}const ce=8,ze=ee/ce,$s=4,ei=[48,128,256];function ta(a,e,t,i){const s=i,o=(s+1)*(s+1),r=4*(s+1)*2,n=new Float32Array((o+r)*3),l=new Float32Array((o+r)*3),c=t/s,f=2+c*2;for(let x=0;x<=s;x++)for(let y=0;y<=s;y++){const S=a+y*c,T=e+x*c,C=(x*(s+1)+y)*3;n[C]=S,n[C+1]=be(S,T),n[C+2]=T,ds(S,T,l,C,be,.5)}const u=(s*s+8*s)*6,d=o+r<=65535?new Uint16Array(u):new Uint32Array(u);let m=0;for(let x=0;x<s;x++)for(let y=0;y<s;y++){const S=x*(s+1)+y,T=S+1,C=S+s+1,L=C+1;d[m++]=S,d[m++]=C,d[m++]=T,d[m++]=T,d[m++]=C,d[m++]=L}let p=o;const M=x=>{const y=p;for(let S=0;S<=s;S++){const T=x(S)*3;for(let C=0;C<2;C++){const L=p*3;n[L]=n[T],n[L+1]=n[T+1]-C*f,n[L+2]=n[T+2],l[L]=l[T],l[L+1]=l[T+1],l[L+2]=l[T+2],p++}}for(let S=0;S<s;S++){const T=y+S*2,C=T+1,L=T+2,F=T+3;d[m++]=T,d[m++]=L,d[m++]=C,d[m++]=C,d[m++]=L,d[m++]=F,d[m++]=T,d[m++]=C,d[m++]=L,d[m++]=C,d[m++]=F,d[m++]=L}};M(x=>x),M(x=>s*(s+1)+x),M(x=>x*(s+1)),M(x=>x*(s+1)+s);const w=new xt;return w.setAttribute("position",new ne(n,3)),w.setAttribute("normal",new ne(l,3)),w.setIndex(new ne(d,1)),w.computeBoundingBox(),w.computeBoundingSphere(),w}function sa(a){let e=0;for(;e<ei.length&&a>=ei[e];)e++;return e}function ia(a,e,t,i){const s=-B+a*ze,o=-B+e*ze,r=Math.max(s-t,0,t-(s+ze)),n=Math.max(o-i,0,i-(o+ze));return Math.hypot(r,n)}const oa=6;function aa(a,e){const t=a*4,i=t*(e+1),s=ee/a,o=new Float32Array((i+t)*3),r=new Float32Array((i+t)*3);for(let f=0;f<=e;f++){const u=f/e,d=620*Math.pow(u,1.7),m=620*(Math.pow(Math.min(1,u+1/e),1.7)-Math.pow(Math.max(0,u-1/e),1.7))/2;for(let p=0;p<t;p++){const M=Math.floor(p/a),w=p%a/a;let x,y;M===0?(x=-B+w*ee,y=-B):M===1?(x=B,y=-B+w*ee):M===2?(x=B-w*ee,y=B):(x=-B,y=B-w*ee);const S=Math.hypot(x,y),T=x+x/S*d,C=y+y/S*d,L=(f*t+p)*3;o[L]=T,o[L+1]=f===0?be(T,C):Wt(T,C),o[L+2]=C,f===0?ds(T,C,r,L,be,.5):ds(T,C,r,L,Wt,Math.max(1.5+d*.01,.35*Math.max(m,s*(S+d)/S)))}}for(let f=0;f<t;f++){const u=f*3,d=(i+f)*3;o[d]=o[u],o[d+1]=o[u+1]-oa,o[d+2]=o[u+2],r[d]=r[u],r[d+1]=r[u+1],r[d+2]=r[u+2]}const n=new Uint32Array((e+2)*t*6);let l=0;for(let f=0;f<e;f++)for(let u=0;u<t;u++){const d=f*t+u,m=f*t+(u+1)%t,p=d+t,M=m+t;n[l++]=d,n[l++]=m,n[l++]=p,n[l++]=m,n[l++]=M,n[l++]=p}for(let f=0;f<t;f++){const u=f,d=(f+1)%t,m=i+f,p=i+(f+1)%t;n[l++]=u,n[l++]=d,n[l++]=m,n[l++]=d,n[l++]=p,n[l++]=m,n[l++]=u,n[l++]=m,n[l++]=d,n[l++]=d,n[l++]=m,n[l++]=p}const c=new xt;return c.setAttribute("position",new ne(o,3)),c.setAttribute("normal",new ne(r,3)),c.setIndex(new ne(n,1)),c.computeBoundingSphere(),c}const ra=`
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
// Sale (0..1) en UNE lecture bilinéaire, sans dérivées (appelée dans une branche) : sert au gradient.
float lmSale(vec2 uv) { return smoothstep(0.3, 0.6, textureLod(uMasque, uv, 0.0).r); }
`,na=`
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
vec2 uvM = (pw + ${B.toFixed(1)}) / ${ee.toFixed(1)};
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
diffuseColor.rgb *= couleurSol;
`,la=`
float roughnessFactor = mix(0.93 - stries * 0.03, 0.98, sale);
roughnessFactor = mix(roughnessFactor, 0.8, step(0.05, caillou));
`,ca=`
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
`,ua=24,ha=1024;function da(a,e){const t=new Uint8Array($*$),i=(p,M,w,x)=>{const y=a.data;for(let S=M;S<=x;S++){let T=S*$+p;for(let C=p;C<=w;C++,T++){const L=y[T];t[T]=L===0?0:170+(L*85/255|0)}}};i(0,0,$-1,$-1);const s=new Ws(t,$,$,js,Vs);s.minFilter=us,s.magFilter=us,s.generateMipmaps=!1,s.unpackAlignment=1,s.needsUpdate=!0;const o=new Ws(t,$,$,js,Vs);o.unpackAlignment=1;const r=new Xi(new V,new V),n=new V,l={uMasque:{value:s},uTexel:{value:1/$},uSaleC:{value:e.saleC},uSaleN:{value:e.saleN},uPropreC:{value:e.propreC},uPropreN:{value:e.propreN},uDetail:{value:1},uAntiSoleil:{value:new V(.84,.53).normalize()}},c=p=>{const M=new X({color:16777215,roughness:1,metalness:0});return p&&(M.defines={...M.defines,ANNEAU:""}),M.onBeforeCompile=w=>{Object.assign(w.uniforms,l),w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vPosM;
varying vec3 vNorM;`).replace("#include <project_vertex>",`#include <project_vertex>
vPosM = (modelMatrix * vec4(transformed, 1.0)).xyz;
vNorM = normalize(mat3(modelMatrix) * objectNormal);`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
${ra}`).replace("#include <map_fragment>",na).replace("#include <roughnessmap_fragment>",la).replace("#include <normal_fragment_maps>",ca)},M.customProgramCacheKey=()=>p?"sol-lunaire-v2-anneau":"sol-lunaire-v2",M},f=c(!1),u=c(!0);let d=!1;const m=[];return{materiau:f,materiauAnneau:u,masque:s,majMasque(p){const M=a.dirtyTileCount();if(M!==0){if(!d||M>ha){a.takeDirtyTiles(1/0,m),m.length=0,i(0,0,$-1,$-1),s.needsUpdate=!0,d=!0;return}a.takeDirtyTiles(ua,m);for(let w=0;w<m.length;w++){const x=m[w],y=x%Ys*qe,S=Math.floor(x/Ys)*qe;i(y,S,y+qe-1,S+qe-1),r.min.set(y,S),r.max.set(y+qe,S+qe),n.set(y,S),p.copyTextureToTexture(o,s,r,n)}}},setDetail(p){l.uDetail.value=p},dispose(){f.dispose(),u.dispose(),s.dispose(),o.dispose(),e.saleC.dispose(),e.saleN.dispose(),e.propreC.dispose(),e.propreN.dispose()}}}function ti(a,e){const t=new I;t.name="terrain-zone";const i=Math.max(8,Math.round(e/ce/8)*8);ea(ze/i);const s=[],o=new Int8Array(ce*ce).fill(-1);for(let l=0;l<ce;l++)for(let c=0;c<ce;c++){const f=[];for(let u=0;u<$s;u++){const d=Math.max(2,i>>u),m=new De(ta(-B+c*ze,-B+l*ze,ze,d),a.materiau);m.receiveShadow=!0,m.castShadow=!0,m.visible=!1,m.matrixAutoUpdate=!1,m.name=`terrain-tuile-${c}-${l}-n${u}`,t.add(m),f.push(m)}s.push(f)}t.matrixAutoUpdate=!1,t.updateMatrixWorld(!0);const r=Math.max(64,ce*Math.max(2,i>>$s-1)),n=new De(aa(r,24+Math.round(e/64)),a.materiauAnneau);return n.receiveShadow=!0,n.castShadow=!1,n.name="terrain-anneau",{zone:t,anneau:n,majLod(l,c,f=0){const u=Math.max(0,f-6);for(let d=0;d<ce;d++)for(let m=0;m<ce;m++){const p=d*ce+m,M=ia(m,d,l,c),w=sa(u>0?Math.hypot(M,u):M);if(w===o[p])continue;const x=s[p];o[p]>=0&&(x[o[p]].visible=!1),x[w].visible=!0,o[p]=w}},dispose(){for(const l of s)for(const c of l)c.geometry.dispose();n.geometry.dispose()}}}const fa={salut:"Salut !",pouce:"Bien joué !",danse:"♪ Danse ! ♫",flemme:"Flemme…",bravo:"Bravo !",aide:"À l’aide !"};class ma{mats=new Map;materiau(e){let t=this.mats.get(e);if(!t){const[i,s]=he(256,80);fs(s,256,80,fa[e],{fond:"rgba(255,255,255,0.94)",couleur:"#14213d",taille:32,bordure:"#d4a017"});const o=new re(i);o.colorSpace=Ie,t=new Qe({map:o,depthTest:!1,transparent:!0}),this.mats.set(e,t)}return t}dispose(){for(const e of this.mats.values())e.map?.dispose(),e.dispose();this.mats.clear()}}class Ai{constructor(e,t){this.bulles=t,this.sprite=new Ke(t.materiau("salut")),this.sprite.scale.set(1.6,.5,1),this.sprite.visible=!1,this.sprite.renderOrder=20,e.add(this.sprite)}sprite;reste=0;montrer(e){this.sprite.material=this.bulles.materiau(e),this.reste=3.2,this.sprite.visible=!0}update(e,t){if(this.reste<=0)return;this.reste-=e;const i=Math.min(1,(3.2-this.reste)*6),s=Math.min(1,this.reste*3),o=Math.max(.001,i*s);this.sprite.scale.set(1.6*o,.5*o,1),this.sprite.position.set(t.x,t.y+.55+(1-s)*.3,t.z),this.reste<=0&&(this.sprite.visible=!1)}dispose(){this.sprite.removeFromParent()}}const si=50,ii=200,rs="0000";function pa(a,e,t){let i=e-a;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return a+i*t}class va{constructor(e,t,i,s){this.modeles=e,this.scene=t,this.particules=i,this.bulles=s}joueurs=new Map;tmp=new N;tmp2=new N;set(e,t){for(const i of this.joueurs.values())i.vu=!1;for(const i of e){if(i.id===t||!i.pose)continue;let s=this.joueurs.get(i.id);s||(s=this.creer(i),this.joueurs.set(i.id,s)),s.vu=!0;const o=i.pose;if(!Number.isFinite(o.x)||!Number.isFinite(o.z))continue;s.cx=o.x,s.cy=Number.isFinite(o.y)?o.y:j(o.x,o.z),s.cz=o.z,s.cyaw=Number.isFinite(o.yaw)?o.yaw:s.cyaw,s.brosse=!!o.brosse,s.sac=Math.max(0,Math.min(1,o.sac||0)),o.outil!==s.outil&&(s.outil=o.outil,s.avatar.setOutil(o.outil),s.avatar.setAssis(Ut(o.outil))),(i.nom!==s.nom||i.couleur!==s.couleur)&&(s.nom=i.nom,i.couleur!==s.couleur&&(s.couleur=i.couleur,s.avatar.astro.setCouleur(i.couleur)),this.dessiner(s));const r=i.tenue??rs;r!==s.tenue&&(s.tenue=r,s.avatar.setCosmetiques(ks(r)))}for(const[i,s]of this.joueurs)s.vu||(this.retirer(s),this.joueurs.delete(i))}creer(e){const t=e.pose,i=new wi(this.modeles,this.scene,e.couleur);i.setOutil(t.outil),i.setAssis(Ut(t.outil));const s=e.tenue??rs;s!==rs&&i.setCosmetiques(ks(s));const[o,r]=he(256,80),n=new re(o);n.colorSpace=Ie;const l=new Ke(new Qe({map:n,depthTest:!0,depthWrite:!1,transparent:!0}));l.scale.set(1.7,.53,1),l.renderOrder=19,this.scene.add(l);const c={id:e.id,avatar:i,nom:e.nom,couleur:e.couleur,tenue:s,cx:t.x,cy:t.y,cz:t.z,cyaw:t.yaw,x:t.x,y:t.y,z:t.z,yaw:t.yaw,vitesse:0,brosse:t.brosse,sac:t.sac,sacAffiche:-1,outil:t.outil,roule:0,etiquette:l,ctx:r,tex:n,bulle:new Ai(this.scene,this.bulles),accPart:0,vu:!0};return this.dessiner(c),c}dessiner(e){e.sacAffiche=e.sac,fs(e.ctx,256,80,e.nom.slice(0,20),{fond:"rgba(8,12,24,0.62)",couleur:e.couleur,taille:26,barre:e.sac}),e.tex.needsUpdate=!0}emote(e,t){const i=this.joueurs.get(e);return i?(i.bulle.montrer(t),!0):!1}update(e,t,i){const s=1-Math.exp(-e*9);for(const o of this.joueurs.values()){const r=o.x,n=o.z;Math.abs(o.cx-o.x)+Math.abs(o.cz-o.z)>25&&(o.x=o.cx,o.z=o.cz),o.x+=(o.cx-o.x)*s,o.y+=(o.cy-o.y)*s,o.z+=(o.cz-o.z)*s,o.yaw=pa(o.yaw,o.cyaw,s);const l=Math.hypot(o.x-r,o.z-n)/Math.max(e,.001);o.vitesse+=(l-o.vitesse)*Math.min(1,e*6),o.roule+=l*e;const c=o.avatar,f=j(o.x,o.z),u=Math.max(o.y,f);c.assis&&c.vehicule?(c.vehicule.group.position.set(o.x,u,o.z),c.vehicule.group.rotation.set(0,o.yaw,0),c.vehicule.rouler(o.roule)):(c.astro.group.position.set(o.x,u,o.z),c.astro.group.rotation.set(0,o.yaw,0));const d=o.x-i.x,m=o.z-i.z,p=d*d+m*m,M=p<ii*ii;if(c.setDistance(M,p<si*si),o.etiquette.visible=M,!M){o.bulle.reste>0&&(o.bulle.reste=0,o.bulle.sprite.visible=!1);continue}if(c.animer(t,o.vitesse,o.brosse),c.hautTete(this.tmp),o.etiquette.position.set(this.tmp.x,this.tmp.y+.15,this.tmp.z),o.bulle.update(e,this.tmp),Math.abs(o.sac-o.sacAffiche)>.04&&this.dessiner(o),o.brosse&&this.tmp.distanceToSquared(i)<4900){o.accPart+=28*e*this.particules.densite;const x=Math.floor(o.accPart);if(x>0){o.accPart-=x,(c.assis&&c.vehicule?c.vehicule.group:c.astro.group).updateMatrixWorld(!0),c.positionTete(this.tmp2)||this.tmp2.set(o.x-Math.sin(o.yaw)*.6,0,o.z-Math.cos(o.yaw)*.6);const y=j(this.tmp2.x,this.tmp2.z);this.particules.emettre(Math.min(x,12),this.tmp2.x,y+.03,this.tmp2.z,.4+.4*.5,.75,.5,y)}}}}procheDe(e,t,i){const s=i*i;for(const o of this.joueurs.values()){const r=o.x-e,n=o.z-t;if(r*r+n*n<s)return!0}return!1}nombre(){return this.joueurs.size}retirer(e){e.avatar.dispose(),e.etiquette.removeFromParent(),e.etiquette.material.dispose(),e.tex.dispose(),e.bulle.dispose()}dispose(){for(const e of this.joueurs.values())this.retirer(e);this.joueurs.clear()}}const D={combinaison:new X({color:15329250,roughness:.78}),gris:new X({color:9080211,roughness:.55,metalness:.4}),sombre:new X({color:2829877,roughness:.6,metalness:.3}),visiere:new X({color:14263361,roughness:.12,metalness:1}),metal:new X({color:13225170,roughness:.3,metalness:.9}),bois:new X({color:10119996,roughness:.7}),poils:new X({color:15921906,roughness:.9}),jaune:new X({color:15774499,roughness:.5,metalness:.2}),orange:new X({color:15229996,roughness:.55,metalness:.1}),bleu:new X({color:3104680,roughness:.5,metalness:.2}),ecran:new X({color:727594,emissive:new W(4179711),emissiveIntensity:2.2,roughness:.3}),lumiere:new X({color:1118481,emissive:new W(16757575),emissiveIntensity:3}),panneau:new X({color:1780298,roughness:.25,metalness:.7}),roche:new X({color:7828333,roughness:.95,flatShading:!0}),holo:new X({color:663600,emissive:new W(4772351),emissiveIntensity:2,transparent:!0,opacity:.75,depthWrite:!1})},P={capsule:new Ji(1,1,6,12),sphere:new It(1,24,16),boite:new ki(1,1,1),cyl:new Zi(1,1,1,20),cone:new Qi(1,1,20),tore:new Ki(1,.12,8,24)};function E(a,e,t=0,i=0,s=0,o=1,r=1,n=1){const l=new De(a,e);return l.position.set(t,i,s),l.scale.set(o,r,n),l.castShadow=!0,l.receiveShadow=!0,l}function xa(a){const e=new I,t=new X({color:new W(a),roughness:.6}),i=new I;i.position.y=.95,e.add(i);const s=new I;i.add(s),s.add(E(P.capsule,D.combinaison,0,.32,0,.27,.22,.22)),s.add(E(P.tore,t,0,.22,0,.27,.27,.5).rotateX(Math.PI/2)),s.add(E(P.boite,D.gris,0,.42,.25,.42,.55,.2)),s.add(E(P.boite,t,0,.42,.36,.3,.08,.02));const o=new I;o.position.y=.72,s.add(o),o.add(E(P.sphere,D.combinaison,0,0,0,.23,.23,.23)),o.add(E(P.sphere,D.visiere,0,.01,-.07,.19,.16,.18));const r=m=>{const p=new I;return p.position.set(.33*m,.55,0),s.add(p),p.add(E(P.capsule,D.combinaison,0,-.28,0,.085,.22,.085)),p.add(E(P.tore,t,0,-.12,0,.09,.09,.2).rotateX(Math.PI/2)),p.add(E(P.sphere,D.gris,0,-.58,0,.08,.08,.08)),p},n=r(1),l=r(-1),c=new mt;c.position.y=-.6,n.add(c);const f=m=>{const p=new I;return p.position.set(.13*m,0,0),i.add(p),p.add(E(P.capsule,D.combinaison,0,-.42,0,.11,.3,.11)),p.add(E(P.boite,D.sombre,0,-.88,-.05,.17,.12,.3)),p},u=f(1),d=f(-1);return{group:e,main:c,setCouleur(m){t.color.set(m)},animer(m,p,M){const w=Math.max(1.5,M*2.2),x=Math.sin(p*w*2);switch(i.position.y=.95,i.rotation.set(0,0,0),s.rotation.set(0,0,0),n.rotation.set(0,0,.12),l.rotation.set(0,0,-.12),u.rotation.set(0,0,0),d.rotation.set(0,0,0),m){case"repos":s.rotation.x=Math.sin(p*1.6)*.02;break;case"marche":u.rotation.x=x*.5,d.rotation.x=-x*.5,n.rotation.x=-x*.4,l.rotation.x=x*.4,i.position.y=.95+Math.abs(x)*.04;break;case"brosse":i.position.y=.5,s.rotation.x=-.75,u.rotation.x=1.35,d.rotation.x=1.35,n.rotation.x=-.75+Math.sin(p*13)*.18,n.rotation.z=.05+Math.sin(p*13+1)*.12,l.rotation.x=-.4;break;case"brosse-debout":s.rotation.x=-.25,n.rotation.x=-.55+Math.sin(p*4)*.12,n.rotation.z=Math.sin(p*4)*.35,l.rotation.x=-.9+Math.sin(p*4)*.12,l.rotation.z=.3+Math.sin(p*4)*.35,u.rotation.x=x*.25,d.rotation.x=-x*.25;break;case"pousse":s.rotation.x=-.2,n.rotation.x=-1.1,l.rotation.x=-1.1,u.rotation.x=x*.45,d.rotation.x=-x*.45;break;case"conduite":i.position.y=0,u.rotation.x=-1.45,d.rotation.x=-1.45,n.rotation.x=-1,l.rotation.x=-1;break}},dispose(){t.dispose()}}}function ga(a){const e=new I,t=new mt,i=[];switch(a){case"brosse-a-dents":e.add(E(P.cyl,D.bleu,0,-.09,0,.012,.19,.012)),e.add(E(P.boite,D.poils,0,-.18,-.015,.02,.03,.03)),t.position.set(0,-.19,0);break;case"brosse-a-recurer":e.add(E(P.boite,D.bois,0,-.08,0,.09,.05,.2)),e.add(E(P.boite,D.jaune,0,-.12,0,.09,.04,.2)),t.position.set(0,-.14,0);break;case"balai":e.add(E(P.cyl,D.bois,0,-.65,0,.018,1.3,.018)),e.add(E(P.boite,D.jaune,0,-1.3,0,.45,.08,.08)),e.add(E(P.boite,D.poils,0,-1.37,0,.44,.08,.05)),t.position.set(0,-1.38,0);break;case"aspirateur-dorsal":e.add(E(P.cyl,D.gris,0,-.6,0,.03,1.2,.03)),e.add(E(P.boite,D.orange,0,-1.22,0,.6,.06,.14)),t.position.set(0,-1.25,0);break;default:{e.add(E(P.cyl,D.gris,0,-.5,0,.025,1,.025));const s=E(P.boite,D.jaune,0,-1.05,0,1.1,.35,.5);e.add(s);const o=E(P.cyl,D.poils,0,-1.2,-.25,.14,1,.14);o.rotation.z=Math.PI/2,e.add(o),i.push(o),t.position.set(0,-1.25,-.25)}}return e.add(t),{group:e,tete:t,animer(s,o){for(const r of i)r.rotation.x=o?s*20:0},dispose(){}}}function ba(a){const e=a==="camion-aspirateur",t=e?5.2:2.4,i=e?2.4:1.4,s=new I;s.add(E(P.boite,e?D.orange:D.jaune,0,e?1.2:.65,.2,i,e?1.6:.6,t*.8)),e&&s.add(E(P.cyl,D.metal,0,2.3,.9,.9,2.6,.9).rotateX(Math.PI/2)),s.add(E(P.boite,D.sombre,0,e?2.25:1.15,e?-1.6:-.15,i*.7,.06,.6));const o=[],r=e?[-1.8,.2,1.9]:[-.75,.8];for(const u of r)for(const d of[-1,1]){const m=E(P.cyl,D.sombre,d*(i/2+.05),e?.5:.32,u,e?.5:.32,.25,e?.5:.32);m.rotation.z=Math.PI/2,o.push(m),s.add(m)}const n=[],l=e?3:2;for(let u=0;u<l;u++){const d=E(P.cyl,D.poils,(u-(l-1)/2)*i/l,.12,-t/2-.2,.32,.08,.32);n.push(d),s.add(d)}const c=new mt;c.position.set(0,0,-t/2-.2),s.add(c);const f=new mt;return f.position.set(0,e?1.95:.95,e?-1.4:.1),s.add(f),{group:s,tete:c,siege:f,animer(u,d){for(const m of n)m.rotation.y=d?u*9:0},rouler(u){for(const d of o)d.rotation.x=-u/(e?.5:.32)},dispose(){}}}function Ma(){const a=new I;a.add(E(P.sphere,D.combinaison,0,0,0,5,3.6,5)),a.add(E(P.tore,D.gris,0,.3,0,5,5,3).rotateX(Math.PI/2));for(let i=0;i<3;i++){const s=i/3*Math.PI*2+.6,o=E(P.cyl,D.combinaison,Math.cos(s)*8,1.3,Math.sin(s)*8,1.6,4.2,1.6);o.rotation.z=Math.PI/2,o.rotation.y=-s,a.add(o)}const e=new I;e.name="terminal",e.position.set(3.5,0,9),e.add(E(P.boite,D.gris,0,.6,0,.8,1.2,.5)),e.add(E(P.boite,D.ecran,0,1.05,-.26,.65,.4,.02)),a.add(e);const t=new I;t.name="rampe",t.position.set(-10,0,-7),t.add(E(P.cyl,D.sombre,0,.15,0,4.2,.3,4.2)),t.add(E(P.tore,D.jaune,0,.31,0,3.6,3.6,.3).rotateX(Math.PI/2)),a.add(t);for(let i=0;i<4;i++){const s=E(P.boite,D.panneau,8+i*.1,2.2,-9+i*2.6,2.2,.05,1.4);s.rotation.z=.6,a.add(s),a.add(E(P.cyl,D.gris,8+i*.1,1.1,-9+i*2.6,.06,2.2,.06))}return a.add(E(P.cyl,D.metal,-3,4.5,3,.05,6,.05)),a.add(E(P.sphere,D.lumiere,-3,7.5,3,.15,.15,.15)),a}function wa(){const a=new I;return a.add(E(P.cyl,D.gris,0,1,0,1,2,1)),a.add(E(P.cone,D.orange,0,2.4,0,1.15,.8,1.15)),a.add(E(P.tore,D.lumiere,0,.12,0,1.25,1.25,.6).rotateX(Math.PI/2)),a}function Sa(){const a=new I,e=new I;a.add(e),e.add(E(P.cyl,D.combinaison,0,4.3,0,1.1,7,1.1)),e.add(E(P.cone,D.orange,0,8.8,0,1.1,2,1.1));for(let t=0;t<4;t++){const i=t/4*Math.PI*2,s=E(P.boite,D.orange,Math.cos(i)*1.3,1.3,Math.sin(i)*1.3,.12,2.2,1);s.rotation.y=-i,e.add(s)}return e.add(E(P.cone,D.sombre,0,.5,0,.8,1,.8)),{group:a,setDecollage(t){e.position.y=t*t*900,e.visible=t<.999},dispose(){}}}function ya(){const a=new I;return a.add(E(P.cyl,D.jaune,0,.18,0,.45,.22,.45)),a.add(E(P.sphere,D.sombre,0,.3,0,.25,.15,.25)),a.add(E(P.cyl,D.poils,0,.04,-.1,.4,.06,.4)),a.add(E(P.sphere,D.lumiere,0,.42,-.1,.05,.05,.05)),a}function Aa(){const a=new I;a.add(E(P.cyl,D.gris,0,.4,0,1,.8,1));const e=new I;e.position.y=1.2,a.add(e);const t=[];for(let i=0;i<8;i++)for(let s=0;s<8;s++){const o=new De(P.boite,D.holo);o.position.set((s-3.5)*.2,0,(i-3.5)*.2),o.scale.set(.16,.02,.16),e.add(o),t.push(o)}return{group:a,animer(i){e.rotation.y=i*.3},setProprete(i){for(let s=0;s<64;s++){const o=i[s]??0;t[s].scale.y=.02+o*.8,t[s].position.y=t[s].scale.y/2}},dispose(){}}}function Ta(a,e,t){const i=new I;let s=a>>>0||1;const o=()=>(s=s*1664525+1013904223>>>0,s/4294967296),r=[new qi(1,0),new Yi(1,0)],n=260,l=new Ft,c=new jt,f=new N,u=new N;for(let d=0;d<r.length;d++){const m=new xi(r[d],D.roche,n/2);m.castShadow=!0,m.receiveShadow=!0;for(let p=0;p<n/2;p++){const M=o()*Math.PI*2,w=e+(t-e)*Math.pow(o(),1.6);f.set(Math.cos(M)*w,0,Math.sin(M)*w);const x=.4+Math.pow(o(),3)*(w<e+40?3:9);u.set(x*(.8+o()*.6),x*(.5+o()*.5),x*(.8+o()*.6)),c.setFromAxisAngle(f.clone().set(o()-.5,1,o()-.5).normalize(),o()*6.28),l.compose(f,c,u),m.setMatrixAt(p,l)}i.add(m)}return i}const ft={astronaute:xa,outil:ga,vehicule:ba,base:Ma,depot:wa,fusee:Sa,robot:ya,hologramme:Aa,decor:Ta},za=Object.assign({"./models/index.ts":()=>So(()=>import("./models-DbEGlOa8.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)});let Pa=!1;async function Da(){const a=za["./models/index.ts"];if(!a||Pa)return{modeles:ft,source:"provisoire"};try{const t=(await a()).modeles;return!t||typeof t.astronaute!="function"?{modeles:ft,source:"provisoire"}:{modeles:Ea(t),source:"graphiste"}}catch(e){return console.warn("[monde] modèles du graphiste indisponibles, repli provisoire :",e),{modeles:ft,source:"provisoire"}}}function Ea(a){const e={};for(const t of Object.keys(ft)){const i=a[t],s=ft[t];e[t]=typeof i=="function"?(...o)=>{try{const r=i.apply(a,o);if(r==null)throw new Error("modèle vide");return r}catch(r){return console.warn(`[monde] modeles.${t} a échoué, repli provisoire :`,r),s(...o)}}:s}return e}const ge=new N(-.82,.25,-.52).normalize(),Ca=new N(-.17,.27,.95).normalize(),ns=4200;function La(a,e){const t=new I;t.name="ciel";const i=[];let s=null;if(e.etoiles)s=e.etoiles,s.mapping=_i,a.background=s,a.backgroundIntensity=.55,i.push(s);else{a.background=new W(4);const S=7e3,T=new Float32Array(S*3),C=new Float32Array(S*3),L=new Float32Array(S);let F=12345;const R=()=>(F=F*1664525+1013904223>>>0,F/4294967296);for(let H=0;H<S;H++){let K=R()*2-1;const Je=R()*Math.PI*2;H%3===0&&(K=(R()-.5)*.35);const _e=Math.sqrt(1-K*K),Me=new N(_e*Math.cos(Je),K,_e*Math.sin(Je));H%3===0&&Me.applyAxisAngle(new N(1,0,.3).normalize(),1.1),Me.multiplyScalar(ns*.95),T[H*3]=Me.x,T[H*3+1]=Me.y,T[H*3+2]=Me.z;const Y=R(),We=Y<.15?[1,.82,.65]:Y<.35?[.75,.85,1]:[1,1,1],je=.35+Math.pow(R(),6)*2.2;C[H*3]=We[0]*je,C[H*3+1]=We[1]*je,C[H*3+2]=We[2]*je,L[H]=1+Math.pow(R(),8)*2.6}const Z=new xt;Z.setAttribute("position",new ne(T,3)),Z.setAttribute("color",new ne(C,3)),Z.setAttribute("taille",new ne(L,1));const q=new J({vertexShader:`
        attribute float taille; attribute vec3 color; varying vec3 vC;
        void main() { vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = taille * 1.6; }`,fragmentShader:`
        varying vec3 vC;
        void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, a); }`,transparent:!0,depthWrite:!1,blending:ke}),Ee=new gi(Z,q);Ee.frustumCulled=!1,Ee.renderOrder=-10,t.add(Ee),i.push(Z,q)}const o=Si(256,.08),r=new Qe({map:o,color:new W(6,5.6,5),blending:ke,depthWrite:!1,fog:!1}),n=new Ke(r);n.position.copy(ge).multiplyScalar(ns*.9),n.scale.setScalar(260),n.renderOrder=-9,t.add(n);const l=new Qe({map:o,color:new W(.5,.45,.38),blending:ke,depthWrite:!1,opacity:.6}),c=new Ke(l);c.position.copy(n.position),c.scale.setScalar(1300),c.renderOrder=-9,t.add(c),i.push(o,r,l);const f=140,u=new I;u.position.copy(Ca).multiplyScalar(ns*.62),u.rotation.set(.35,2.2,.41);const d=new It(f,48,32),m=new X({map:e.terre,roughness:.62,metalness:0,emissive:new W(132106),envMapIntensity:0}),p=new De(d,m);u.add(p);const M={uNuages:{value:e.nuages},uDecalNuages:{value:0},uSoleilTerre:{value:ge}};m.onBeforeCompile=S=>{Object.assign(S.uniforms,M),S.fragmentShader=S.fragmentShader.replace("#include <common>",`#include <common>
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
        }`)},m.customProgramCacheKey=()=>"terre-nuages-v1";const w=new It(f*1.08,32,24),x=new J({uniforms:{uSoleil:{value:ge}},vertexShader:`
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
      }`,blending:ke,transparent:!0,depthWrite:!1,side:bi}),y=new De(w,x);u.add(y),t.add(u),i.push(d,m,w,x,e.terre,e.nuages);for(const S of[p,y])S.castShadow=!1,S.receiveShadow=!1;return a.add(t),{group:t,update(S,T){t.position.copy(S.position),p.rotation.y=(p.rotation.y+T*.0015)%(Math.PI*2),M.uDecalNuages.value=(M.uDecalNuages.value+1-T*.0025/(Math.PI*2))%1},dispose(){a.remove(t),a.background===s&&(a.background=null);for(const S of i)S.dispose()}}}const Oa={carte:"carte",boutique:"boutique",chat:"chat",emotes:"emotes","poser-depot":"poser-depot",menu:"menu",ping:"ping",aide:"aide"},dt=["avancer","reculer","gauche","droite","courir","brosser"],oi=new Map(dt.map((a,e)=>[a,e])),Na=.5,Ba=.09,Ra=2.6,Fa=2;function ls(a){return a==="zoom-avant"||a==="zoom-arriere"}class Ia{constructor(e){this.emettre=e,this.setLiaisons(Ao())}avance=0;lateral=0;courir=!1;brosser=!1;dYaw=0;dPitch=0;pause=!1;manetteActive=!1;table=new Map;pad=[];padAvant=[];clesMaintenues=dt.map(()=>[]);valeurs=new Float32Array(dt.length);tenues=new Set;reglagesManette=To();tZoom=0;setLiaisons(e){this.table=zo(e),this.pad=Po(e),this.padAvant=this.pad.map(()=>!0),this.clesMaintenues=dt.map(t=>{const i=e[t],s=[];for(const o of i.clavier)o&&s.push(Do(o));return s}),this.tenues.clear()}setManette(e){this.reglagesManette={...e}}actionDe(e){return this.table.get(e)??null}appui(e,t=!1){const i=this.table.get(e);return!i||this.pause?i??null:oi.has(i)?(this.tenues.add(e),i):((!t||ls(i))&&this.declencher(i),i)}relache(e){this.tenues.delete(e)}vider(){this.tenues.clear(),this.dYaw=this.dPitch=0}declencher(e){const t=Oa[e];if(t)this.emettre({type:"touche",t});else if(e==="sauter")this.emettre({type:"sauter"});else if(e==="interagir")this.emettre({type:"interagir"});else if(e==="vue")this.emettre({type:"vue"});else if(e==="zoom-avant")this.emettre({type:"zoom",sens:-1});else if(e==="zoom-arriere")this.emettre({type:"zoom",sens:1});else if(e==="outil-suivant")this.emettre({type:"outil",choix:"suivant"});else if(e==="outil-precedent")this.emettre({type:"outil",choix:"precedent"});else if(e.startsWith("outil-")){const i=Number(e.slice(6));i>=1&&i<=7&&this.emettre({type:"outil",choix:i-1})}}lire(e,t=null){const i=this.valeurs;for(let s=0;s<dt.length;s++){i[s]=0;const o=this.clesMaintenues[s];for(let r=0;r<o.length;r++)this.tenues.has(o[r])&&(i[s]=1)}if(t&&this.lireManette(e,t),this.pause){this.avance=this.lateral=0,this.courir=this.brosser=!1;return}this.avance=Math.max(-1,Math.min(1,i[0]-i[1])),this.lateral=Math.max(-1,Math.min(1,i[3]-i[2])),this.courir=i[4]>.5,this.brosser=i[5]>.3}lireManette(e,t){const i=this.reglagesManette,s=this.pad;let o=null,r=!1;for(let c=0;c<s.length;c++){const f=s[c],u=Eo(t,f.entree,i.zoneMorte);u>0&&(r=!0);const d=oi.get(f.action);if(d!==void 0){!this.pause&&u>this.valeurs[d]&&(this.valeurs[d]=u);continue}const m=u>Na,p=this.padAvant[c];this.padAvant[c]=m,!(this.pause||!m)&&(p?ls(f.action)&&(o=f.action):(this.declencher(f.action),ls(f.action)&&(this.tZoom=-.25)))}o&&(this.tZoom+=e,this.tZoom>=Ba&&(this.tZoom=0,this.declencher(o)));const n=Ks(t.axes[2]??0,i.zoneMorte),l=Ks(t.axes[3]??0,i.zoneMorte);(n!==0||l!==0)&&(r=!0),r&&(this.manetteActive=!0),!this.pause&&(this.dYaw-=n*Ra*e*i.sensibilite,this.dPitch+=l*Fa*e*i.sensibilite*(i.inverserY?-1:1))}}function ai(a){const e=a;if(!e||!e.tagName)return!1;const t=e.tagName;return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||e.isContentEditable}class Ua extends Ia{constructor(e,t){super(s=>{s.type==="touche"&&s.t==="menu"?this.menu():t(s)}),this.canvas=e,this.action=t;const i=(s,o,r,n)=>{s.addEventListener(o,r,n),this.enleve.push(()=>s.removeEventListener(o,r,n))};i(window,"keydown",s=>this.bas(s)),i(window,"keyup",s=>this.relache(`k:${s.code}`)),i(window,"blur",()=>this.vider()),i(e,"mousedown",s=>{this.pause||(e.focus(),document.pointerLockElement!==e&&this.verrouiller(),s.button===1&&s.preventDefault(),this.manetteActive=!1,this.appui(`m:${s.button}`))}),i(window,"mouseup",s=>this.relache(`m:${s.button}`)),i(window,"mousemove",s=>{if(this.pause||document.pointerLockElement!==e)return;const o=Math.max(-150,Math.min(150,s.movementX)),r=Math.max(-150,Math.min(150,s.movementY));this.dYaw-=o*.0024*this.sensibilite,this.dPitch+=r*.0024*this.sensibilite*(this.inverserY?-1:1)}),i(e,"wheel",s=>{if(s.preventDefault(),this.pause||Math.abs(s.deltaY)<1)return;const o=`w:${s.deltaY>0?1:-1}`,r=this.actionDe(o);if(!r)return;const n=performance.now();n-this.derniereMolette<(r==="zoom-avant"||r==="zoom-arriere"?25:110)||(this.derniereMolette=n,this.appui(o),this.relache(o))},{passive:!1}),i(e,"contextmenu",s=>s.preventDefault()),i(document,"pointerlockchange",()=>{document.pointerLockElement!==e&&(this.vider(),!this.liberationVoulue&&!this.pause&&this.menu(),this.liberationVoulue=!1)})}sensibilite=1;inverserY=!1;derniereMolette=0;liberationVoulue=!1;dernierMenu=0;enleve=[];menu(){const e=performance.now();e-this.dernierMenu<300||(this.dernierMenu=e,this.action({type:"touche",t:"menu"}))}verrouiller(){try{const e=this.canvas.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}liberer(){document.pointerLockElement===this.canvas&&(this.liberationVoulue=!0,document.exitPointerLock())}setPause(e){this.pause=e,this.vider(),e&&this.liberer()}bas(e){if(ai(e.target)||this.pause){e.code==="Tab"&&!ai(e.target)&&e.preventDefault();return}if(this.manetteActive=!1,e.code==="Escape"){e.repeat||this.menu();return}const t=this.appui(`k:${e.code}`,e.repeat);(e.code==="Tab"||t&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.preventDefault()}lire(e){super.lire(e,yo())}dispose(){this.liberer();for(const e of this.enleve)e()}}const Wa=1.62,Dt=ee/2-1,ri=.4,ja=2.2,Va=[],ut=.5,ni=1.3,li=620,Ha=.9;function Ga(a,e,t,i){return t<0?a==="premiere"?{vue:a,zoom:e}:e<=ut*1.001?{vue:"premiere",zoom:ut}:{vue:a,zoom:Math.max(ut,e/ni)}:a==="premiere"?{vue:"troisieme",zoom:ut}:{vue:a,zoom:Math.min(Math.max(i,ut),e*ni)}}function ci(a,e,t){const i=Math.max(0,Math.min(1,(t-a)/(e-a)));return i*i*(3-2*i)}function Xa(a){return a==="brosse-a-dents"||a==="brosse-a-recurer"}function Et(a,e,t){let i=e-a;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return a+i*t}class qa{constructor(e,t,i,s,o,r){this.camera=s,this.field=o,this.particules=r,this.avatar=new wi(e,t,i),this.pos.y=j(this.pos.x,this.pos.z)}avatar;pos=new N(0,0,19);batiment=null;garage=null;dedans=!1;vx=0;vz=0;vy=0;auSol=!0;yaw=0;camYaw=0;camPitch=.12;camDist=4.6;vue="troisieme";zoom=1;camYawVue=0;obstacle=null;surPas=null;surSaut=null;surAtterrissage=null;pasVus=0;distLibre=1e9;decalage=0;distBase=4.6;yeux=new N(0,1.6,0);yeuxValides=!1;cible=new N;dir=new N;enVehicule=!1;vehPos=new N;vehYaw=Math.PI;vehVitesse=0;vehDistance=0;outil=null;rayon=.14;vitesse=1.4;sacPlein=!1;brosse=!1;veutBrosser=!1;enMouvement=!1;vitesseSol=0;tete=new N;tetePrec=new N;teteValide=!1;accPart=0;tmp=new N;placer(e,t,i){this.pos.set(e,this.solEn(e,t),t),this.yaw=i,this.camYaw=i,this.vx=this.vz=this.vy=0,this.auSol=!0,this.teteValide=!1}setOutil(e,t,i){const s=!this.outil||this.outil.id!==e.id;if(this.outil=e,this.rayon=t,this.vitesse=i,!s)return;const o=this.enVehicule;if(o&&this.descendre(),this.avatar.setOutil(e.id),this.teteValide=!1,Ut(e.id)){const r=o?this.vehPos:this.pos;if(this.vehVitesse=0,!o&&this.garage&&this.batiment?.contient(r.x,r.z)){this.vehPos.set(this.garage.x,j(this.garage.x,this.garage.z),this.garage.z),this.vehYaw=this.garage.yaw;return}this.vehPos.set(r.x,j(r.x,r.z),r.z),this.vehYaw=o?this.vehYaw:this.yaw,this.monter()}}monter(){this.avatar.vehicule&&(this.enVehicule=!0,this.avatar.setAssis(!0),this.teteValide=!1)}descendre(){if(!this.enVehicule)return;this.enVehicule=!1,this.avatar.setAssis(!1);const e=this.outil?.id==="camion-aspirateur"?2.2:1.4;this.pos.copy(this.vehPos),this.deplacer(this.pos,-Math.cos(this.vehYaw)*e,Math.sin(this.vehYaw)*e,ri,Va),this.pos.y=this.solEn(this.pos.x,this.pos.z),this.yaw=this.vehYaw,this.vehVitesse=0,this.teteValide=!1}distanceVehicule(){return this.avatar.vehicule?this.enVehicule?0:Math.hypot(this.pos.x-this.vehPos.x,this.pos.z-this.vehPos.z):1/0}sauter(){this.enVehicule||!this.auSol||(this.vy=2.7,this.auSol=!1,this.surSaut?.())}setVue(e){this.vue=e}basculerVue(){this.vue=this.vue==="premiere"?"troisieme":"premiere"}zoomer(e){const t=Ga(this.vue,this.zoom,e,li/Math.max(1,this.distBase));this.vue=t.vue,this.zoom=t.zoom}get dansCasque(){return this.camDist<Ha}centre(){return this.enVehicule?this.vehPos:this.pos}update(e,t,i,s,o){this.camYaw+=i.dYaw;const r=this.vue==="premiere"?-1.3:-.35,n=this.vue==="premiere"?1.35:this.camDist>60?1.5:1.25;let l=this.camPitch+i.dPitch;const c=1-Math.exp(-e*10);l<r?l=this.camPitch<r?Math.min(r,this.camPitch+(r-this.camPitch)*c):r:l>n&&(l=this.camPitch>n?Math.max(n,this.camPitch+(n-this.camPitch)*c):n),this.camPitch=l,i.dYaw=i.dPitch=0;const f=this.outil,u=!!f&&(this.enVehicule?f.vehicule:!f.vehicule&&!!this.avatar.tenu);this.veutBrosser=i.brosser&&u,this.enVehicule?this.conduire(e,i,s):this.marcher(e,i,s),this.brosse=this.veutBrosser&&this.auSol&&!this.sacPlein;const d=this.avatar;if(this.enVehicule&&d.vehicule?(d.vehicule.group.position.copy(this.vehPos),d.vehicule.group.rotation.set(0,this.vehYaw,0),d.vehicule.rouler(this.vehDistance)):(d.astro.group.position.copy(this.pos),d.astro.group.rotation.set(0,this.yaw,0),d.vehicule&&(d.vehicule.group.position.copy(this.vehPos),d.vehicule.group.rotation.set(0,this.vehYaw,0))),d.animer(t,this.vitesseSol,this.veutBrosser&&this.auSol),(this.enVehicule&&d.vehicule?d.vehicule.group:d.astro.group).updateMatrixWorld(!0),d.pasFaits!==this.pasVus&&(this.pasVus=d.pasFaits,this.auSol&&!this.enVehicule&&this.surPas?.()),this.brosse){const m=this.centre(),p=this.enVehicule?this.vehYaw:this.yaw;let M=d.positionTete(this.tete);if(M&&Math.hypot(this.tete.x-m.x,this.tete.z-m.z)>7&&(M=!1),!M&&f){const x=Vo[f.id];this.tete.set(m.x-Math.sin(p)*x,m.y,m.z-Math.cos(p)*x)}const w=this.field.at(this.tete.x,this.tete.z)>0||this.field.at(this.tetePrec.x,this.tetePrec.z)>0;this.teteValide||(this.tetePrec.copy(this.tete),this.teteValide=!0),o([{xa:this.tetePrec.x,za:this.tetePrec.z,xb:this.tete.x,zb:this.tete.z,r:this.rayon}]),this.tetePrec.copy(this.tete),w&&this.emettrePoussiere(e)}else this.teteValide=!1;this.placerCamera(e)}emettrePoussiere(e){const t=this.rayon;this.accPart+=(30+t*140)*e*this.particules.densite;const i=Math.floor(this.accPart);if(i<=0)return;this.accPart-=i;const s=j(this.tete.x,this.tete.z);this.particules.emettre(Math.min(i,40),this.tete.x,s+.03,this.tete.z,.35+t*.7,.7+t*.45,Math.min(1.2,t*1.6),s)}marcher(e,t,i){const s=this.camYaw,o=-Math.sin(s),r=-Math.cos(s),n=Math.cos(s),l=-Math.sin(s);let c=o*t.avance+n*t.lateral,f=r*t.avance+l*t.lateral;const u=Math.hypot(c,f);u>1&&(c/=u,f/=u);const d=this.veutBrosser,m=d?this.vitesse:t.courir?5.6:3.1,p=this.auSol?1-Math.exp(-e*9):1-Math.exp(-e*1.2);this.vx+=(c*m-this.vx)*p,this.vz+=(f*m-this.vz)*p,this.deplacer(this.pos,this.vx*e,this.vz*e,ri,i),this.vitesseSol=Math.hypot(this.vx,this.vz),this.enMouvement=this.vitesseSol>.2;const M=this.outil?.id==="balayeuse-poussee";this.vue==="premiere"?this.yaw=Et(this.yaw,this.camYaw,1-Math.exp(-e*18)):d&&!M?this.yaw=Et(this.yaw,this.camYaw,1-Math.exp(-e*8)):this.vitesseSol>.3&&(this.yaw=Et(this.yaw,Math.atan2(-this.vx,-this.vz),1-Math.exp(-e*(M?3:10))));const w=this.batiment;this.dedans=!!w&&w.contient(this.pos.x,this.pos.z);const x=this.dedans&&w?w.sol:j(this.pos.x,this.pos.z);if(this.auSol)this.pos.y=x;else{if(this.vy-=Wa*e,this.pos.y+=this.vy*e,this.dedans&&w&&this.vy>0){const y=w.plafond(this.pos.x,this.pos.z)-ja;this.pos.y>y&&(this.pos.y=Math.max(x,y),this.vy=0)}this.pos.y<=x&&(this.pos.y=x,this.surAtterrissage?.(Math.min(1.5,Math.abs(this.vy)/2.7)),this.vy=0,this.auSol=!0,this.dedans||this.particules.emettre(Math.round(10*this.particules.densite),this.pos.x,x+.05,this.pos.z,.9,.5,.5,x))}}conduire(e,t,i){const s=this.veutBrosser?this.vitesse:this.vitesse*1.5,o=t.avance>=0?t.avance*s:t.avance*s*.45;this.vehVitesse+=(o-this.vehVitesse)*(1-Math.exp(-e*(t.avance===0?1.6:1.1)));const r=this.outil?.id==="camion-aspirateur",n=Math.min(1,Math.abs(this.vehVitesse)/2.5)*Math.sign(this.vehVitesse);this.vehYaw-=t.lateral*(r?.75:1.25)*n*e;const l=this.vehVitesse*e;this.deplacer(this.vehPos,-Math.sin(this.vehYaw)*l,-Math.cos(this.vehYaw)*l,r?2.4:1.3,i),this.vehDistance+=l,this.dedans=!1,this.vehPos.y=j(this.vehPos.x,this.vehPos.z),this.pos.copy(this.vehPos),this.vitesseSol=Math.abs(this.vehVitesse),this.enMouvement=this.vitesseSol>.2,this.auSol=!0,this.camYaw=Et(this.camYaw,this.vehYaw,1-Math.exp(-e*1.4*Math.min(1,this.vitesseSol/3)))}solEn(e,t){const i=this.batiment;return i&&i.contient(e,t)?i.sol:j(e,t)}deplacer(e,t,i,s,o){const r=this.batiment?Oo(Math.hypot(t,i)):1;for(let n=0;n<r;n++)e.x+=t/r,e.z+=i/r,this.collisions(e,s,o)}collisions(e,t,i){for(let s=0;s<i.length;s++){const o=i[s],r=e.x-o.x,n=e.z-o.z,l=o.r+t,c=r*r+n*n;if(c<l*l&&c>1e-8){const f=Math.sqrt(c);e.x=o.x+r/f*l,e.z=o.z+n/f*l}}this.batiment&&No(e,t,this.batiment.murs,3),e.x=Math.max(-Dt,Math.min(Dt,e.x)),e.z=Math.max(-Dt,Math.min(Dt,e.z))}placerCamera(e){const t=this.avatar,i=this.outil?.id,s=this.vue==="premiere";let o=1.55,r=4.6,n=0;this.enVehicule?(o=i==="camion-aspirateur"?3.6:2.2,r=i==="camion-aspirateur"?13:8):this.veutBrosser&&Xa(i)&&(o=.85,r=3.4,n=.55),this.distBase=r;const l=s?0:Math.min(li,r*this.zoom);this.camDist+=(l-this.camDist)*(1-Math.exp(-e*6)),s&&this.camDist<.02&&(this.camDist=0);const c=1-ci(.3,1.8,this.camDist);(s||this.zoom>3)&&(n=0),this.decalage+=(n-this.decalage)*(1-Math.exp(-e*3)),t.setPremierePersonne(this.dansCasque);const f=this.enVehicule?this.vehPos:t.astro.group.position;t.positionYeux(this.tmp),this.tmp.sub(f),this.tmp.x*=.3,this.tmp.z*=.3,this.yeuxValides?this.yeux.lerp(this.tmp,1-Math.exp(-e*12)):(this.yeux.copy(this.tmp),this.yeuxValides=!0);const u=this.cible.set(f.x+this.yeux.x*c,f.y+o+(this.yeux.y-o)*c,f.z+this.yeux.z*c),d=-.35+1.3*ci(30,320,this.camDist),m=Math.max(this.camPitch,d),p=this.camYaw+this.decalage;this.camYawVue=p;const M=Math.cos(m),w=this.dir.set(Math.sin(p)*M,Math.sin(m),Math.cos(p)*M);let x=this.camDist;if(this.obstacle&&x>.3){const C=Math.min(x,this.obstacle(u,w,x));C<this.distLibre?this.distLibre=C:this.distLibre+=(C-this.distLibre)*(1-Math.exp(-e*4)),x=Math.min(x,Math.max(.3,this.distLibre))}else this.distLibre=x;const y=this.camera.position;y.set(u.x+w.x*x,u.y+w.y*x,u.z+w.z*x);let S=!1;if(x>.3)for(let C=0;C<6;C++){const L=this.solEn(y.x,y.z)+.35;if(y.y>=L)break;S=!0,x*=.8,y.set(u.x+w.x*x,Math.max(u.y+w.y*x,L),u.z+w.z*x)}S?this.tmp.copy(u):this.tmp.set(y.x-w.x,y.y-w.y,y.z-w.z),this.camera.lookAt(this.tmp);const T=this.dansCasque?.05:Math.max(.12,Math.min(8,x*.02));Math.abs(T-this.camera.near)>this.camera.near*.05&&(this.camera.near=T,this.camera.updateProjectionMatrix())}pointDevant(e){const t=this.centre(),i=this.enVehicule?this.vehYaw:this.yaw;return{x:t.x-Math.sin(i)*e,z:t.z-Math.cos(i)*e}}dispose(){this.avatar.dispose()}}class ui{constructor(e,t){this.o=t;const i=t.max;this.pos=new Float32Array(i*3),this.vel=new Float32Array(i*3),this.sol=new Float32Array(i),this.etat=new Float32Array(i*2),this.vie=new Float32Array(i),this.age=new Float32Array(i);for(let s=0;s<i;s++)this.etat[s*2]=2,this.pos[s*3+1]=-1e3;this.geo=new xt,this.geo.setAttribute("position",new ne(this.pos,3)),this.geo.setAttribute("etat",new ne(this.etat,2)),this.mat=new J({uniforms:{uCouleur:{value:t.couleur},uOpacite:{value:t.opacite},uCroissance:{value:t.croissance},uEchelle:{value:600}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:t.additif?ke:$i}),this.points=new gi(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points)}points;pos;vel;sol;etat;vie;age;geo;mat;prochain=0;vivants=0;graine=1;densite=1;setEchelle(e){this.mat.uniforms.uEchelle.value=e*.9}rnd(){return this.graine=this.graine*1664525+1013904223>>>0,this.graine/4294967296}emettre(e,t,i,s,o,r,n,l){const c=this.o;for(let f=0;f<e;f++){const u=this.prochain;this.prochain=(this.prochain+1)%c.max;const d=this.rnd()*Math.PI*2,m=o*(.3+.7*this.rnd());this.pos[u*3]=t+(this.rnd()-.5)*n,this.pos[u*3+1]=i+this.rnd()*n*.3,this.pos[u*3+2]=s+(this.rnd()-.5)*n,this.vel[u*3]=Math.cos(d)*m,this.vel[u*3+1]=r*(.6+.8*this.rnd()),this.vel[u*3+2]=Math.sin(d)*m,this.sol[u]=l,this.vie[u]=c.vie[0]+(c.vie[1]-c.vie[0])*this.rnd(),this.age[u]=0,this.etat[u*2]=0,this.etat[u*2+1]=c.taille[0]+(c.taille[1]-c.taille[0])*this.rnd()}this.vivants=c.max}emettreDir(e,t,i,s,o,r,n,l,c,f){const u=this.prochain;this.emettre(e,t,i,s,n,l,c,f);for(let d=0;d<e;d++){const m=(u+d)%this.o.max;this.vel[m*3]+=o,this.vel[m*3+2]+=r}}update(e){if(this.vivants===0)return;const t=this.o,i=t.freinage>0?Math.exp(-t.freinage*e):1;let s=0;for(let o=0;o<t.max;o++){if(this.etat[o*2]>1)continue;s++;const r=this.age[o]+=e,n=o*3;this.vel[n+1]-=t.gravite*e,i!==1&&(this.vel[n]*=i,this.vel[n+1]*=i,this.vel[n+2]*=i),this.pos[n]+=this.vel[n]*e,this.pos[n+1]+=this.vel[n+1]*e,this.pos[n+2]+=this.vel[n+2]*e;let l=r/this.vie[o];this.pos[n+1]<this.sol[o]&&(this.pos[n+1]=this.sol[o],this.vel[n]=this.vel[n+1]=this.vel[n+2]=0,l=Math.max(l,.8),this.age[o]=l*this.vie[o]),this.etat[o*2]=l}this.vivants=s,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.etat.needsUpdate=!0}dispose(){this.points.removeFromParent(),this.geo.dispose(),this.mat.dispose()}}const Rt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ue{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ya=new eo(-1,1,1,-1,0,1);class ka extends xt{constructor(){super(),this.setAttribute("position",new Hs([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Hs([0,2,0,0,2,0],2))}}const Ka=new ka;class Vt{constructor(e){this._mesh=new De(Ka,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ya)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ti extends Ue{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof J?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Be.clone(e.uniforms),this.material=new J({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vt(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class hi extends Ue{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,n;this.inverse?(r=0,n=1):(r=1,n=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(n),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Qa extends Ue{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Za{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new V);this._width=i.width,this._height=i.height,t=new Re(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fe}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ti(Rt),this.copyPass.material.blending=to,this.timer=new so}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const n=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}hi!==void 0&&(r instanceof hi?i=!0:r instanceof Qa&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ja extends Ue{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const _a={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ze extends Ue{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new V(e.x,e.y):new V(256,256),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Re(o,r,{type:Fe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new Re(o,r,{type:Fe,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Re(o,r,{type:Fe,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const n=_a;this.highPassUniforms=Be.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new J({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new V(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Be.clone(Rt.uniforms),this.blendMaterial=new J({uniforms:this.copyUniforms,vertexShader:Rt.vertexShader,fragmentShader:Rt.fragmentShader,premultipliedAlpha:!0,blending:ke,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new mi,this._fsQuad=new Vt(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new V(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let n=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ze.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ze.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),n=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);const s=[],o=[];for(let r=1;r<e;r+=2){const n=t[r],l=r+1<e?t[r+1]:0,c=n+l;s.push((r*n+(r+1)*l)/c),o.push(c)}return new J({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:o}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new J({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ze.BlurDirectionX=new V(1,0);Ze.BlurDirectionY=new V(0,1);const Ct={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new V(1/1024,1/512)}},vertexShader:`

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

		}`},Lt={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new V(1/1024,1/512)}},vertexShader:`

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

		}`},cs={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new V(1/1024,1/512)}},vertexShader:`

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

		}`};class $a extends Ue{constructor(){super(),this._edgesRT=new Re(1,1,{depthBuffer:!1,type:Fe}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Re(1,1,{depthBuffer:!1,type:Fe}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Gs,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=us,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const i=new Image;i.src=this._getSearchTexture(),i.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Gs,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=i,this._searchTexture.magFilter=Xs,this._searchTexture.minFilter=Xs,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Be.clone(Ct.uniforms),this._materialEdges=new J({defines:Object.assign({},Ct.defines),uniforms:this._uniformsEdges,vertexShader:Ct.vertexShader,fragmentShader:Ct.fragmentShader}),this._uniformsWeights=Be.clone(Lt.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new J({defines:Object.assign({},Lt.defines),uniforms:this._uniformsWeights,vertexShader:Lt.vertexShader,fragmentShader:Lt.fragmentShader}),this._uniformsBlend=Be.clone(cs.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new J({uniforms:this._uniformsBlend,vertexShader:cs.vertexShader,fragmentShader:cs.fragmentShader}),this._fsQuad=new Vt(null)}render(e,t,i){this._uniformsEdges.tDiffuse.value=i.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=i.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const er={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new V(1/1024,1/512)}},vertexShader:`

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

		}`};class tr extends Ti{constructor(){super(er)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}}const Ot={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sr extends Ue{constructor(){super(),this.isOutputPass=!0,this.uniforms=Be.clone(Ot.uniforms),this.material=new io({name:Ot.name,uniforms:this.uniforms,vertexShader:Ot.vertexShader,fragmentShader:Ot.fragmentShader}),this._fsQuad=new Vt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},oo.getTransfer(this._outputColorSpace)===ao&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ro?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===no?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===co?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ho&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function di(a){switch(a){case"basse":return{pixelRatioMax:1,echelle:.75,ombre:1024,ombreRayon:1,bloom:!1,aa:"aucun",terrain:256,particules:.4,anisotropie:1,detail:0};case"moyenne":return{pixelRatioMax:1,echelle:1,ombre:2048,ombreRayon:2,bloom:!0,aa:"fxaa",terrain:512,particules:.7,anisotropie:4,detail:1};case"haute":return{pixelRatioMax:1.5,echelle:1,ombre:2048,ombreRayon:3,bloom:!0,aa:"smaa",terrain:768,particules:1,anisotropie:8,detail:1};case"ultra":return{pixelRatioMax:2,echelle:1,ombre:4096,ombreRayon:3,bloom:!0,aa:"smaa",terrain:1024,particules:1.25,anisotropie:16,detail:1}}}const ir=3840*2160;function or(a,e,t,i,s=ir){const o=Math.max(1,e),r=Math.max(1,t);let n=Number.isFinite(a)&&a>0?a:1;return Number.isFinite(i)&&i>0&&(n=Math.min(n,i/Math.max(o,r))),n=Math.min(n,Math.sqrt(s/(o*r))),Math.max(.25,n)}function ar(a,e){return Number.isFinite(e)&&e>0?Math.min(a,e):a}function rr(a,e,t,i){const s=new fo({antialias:!1,powerPreference:"high-performance",stencil:!1});s.outputColorSpace=Ie,s.toneMapping=Mi,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=mo,s.info.autoReset=!1;const o=s.domElement;o.style.display="block",o.style.width="100%",o.style.height="100%",o.style.outline="none",o.tabIndex=0,a.appendChild(o);const r=s.getContext(),n=Number(r.getParameter(r.MAX_RENDERBUFFER_SIZE))||0,l=s.capabilities.maxTextureSize||0,c=Math.max(256,Math.min(l||4096,n||l||4096));let f=i,u=Math.max(1,a.clientWidth||window.innerWidth),d=Math.max(1,a.clientHeight||window.innerHeight),m=0;const p=new Re(1,1,{type:Fe,samples:0}),M=new Za(s,p),w=new Ja(e,t),x=new Ze(new V(u,d),.32,.55,.92),y=new $a,S=new tr,T=new sr;M.addPass(w),M.addPass(x),M.addPass(T),M.addPass(y),M.addPass(S);function C(F){f=F,x.enabled=F.bloom,y.enabled=F.aa==="smaa",S.enabled=F.aa==="fxaa",m=0,L(u,d)}function L(F,R){const Z=window.devicePixelRatio||1,q=or(Math.min(Z,f.pixelRatioMax)*f.echelle,F,R,c);F=Math.max(1,F),R=Math.max(1,R),!(F===u&&R===d&&q===m)&&(u=F,d=R,m=q,s.setPixelRatio(q),s.setSize(u,d,!1),M.setPixelRatio(q),M.setSize(u,d))}return C(i),{renderer:s,coteMax:c,appliquer:C,taille:L,rendre(){s.setRenderTarget(null),s.setScissorTest(!1),s.setViewport(0,0,u,d),M.render()},dispose(){x.dispose(),y.dispose(),S.dispose(),T.dispose(),M.dispose(),p.dispose(),s.dispose(),s.forceContextLoss(),o.remove()}}}const nr=3.5,lr=2.6,cr=2,ur=8,hr=3.5,fi=64,dr=600,fr=[[40,1],[110,2],[260,4],[1/0,6.5]],Mr=async a=>{const{container:e,field:t}=a;let i=di(a.qualite);const s=new qs,o=new po(62,1,.12,6500),r=rr(e,s,o,i),n=r.renderer,[l,c,f]=await Promise.all([Yo(),Zo(),Da()]),u=f.modeles,d=n.capabilities.getMaxAnisotropy(),m=[l.saleC,l.saleN,l.propreC,l.propreN],p=new vo(n),M=new qs,w=new It(50,32,16),x=new J({side:bi,uniforms:{uSoleil:{value:ge}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uSoleil; varying vec3 vD;
      void main(){
        float sol = smoothstep(0.05, -0.15, vD.y);
        vec3 c = mix(vec3(0.004, 0.005, 0.01), vec3(0.32, 0.31, 0.3), sol);
        c += vec3(30.0, 28.0, 25.0) * pow(max(dot(vD, uSoleil), 0.0), 600.0);
        gl_FragColor = vec4(c, 1.0);
      }`});M.add(new De(w,x));const y=p.fromScene(M,.02);s.environment=y.texture,s.environmentIntensity=.55,w.dispose(),x.dispose(),p.dispose();const S=new xo(new W(1,.97,.92),3.4);S.castShadow=!0,S.shadow.bias=-3e-4,S.shadow.normalBias=.06;const T=S.shadow.camera;T.near=1,T.far=420,s.add(S,S.target);const C=new go(new W(2766160),new W(4867648),.55);s.add(C);const L=new N().crossVectors(new N(0,1,0),ge).normalize(),F=new N().crossVectors(ge,L).normalize();let R=45,Z=1,q=2048;function Ee(h=Z){Z=h,q=ar(i.ombre,r.coteMax),R=(i.ombre>=4096?55:i.ombre>=2048?45:32)*h,T.left=-R,T.right=R,T.top=R,T.bottom=-R,T.far=R*9.5,T.updateProjectionMatrix(),S.shadow.radius=i.ombreRayon,S.shadow.normalBias=.06*Math.max(1,h*.75),S.shadow.mapSize.x!==q&&(S.shadow.mapSize.set(q,q),S.shadow.map?.dispose(),S.shadow.map=null)}Ee();const H=da(t,l);let K=ti(H,i.terrain);s.add(K.zone,K.anneau);let Je=i.terrain;H.setDetail(i.detail);function _e(){const h=Math.min(d,i.anisotropie);for(const g of m)g.anisotropy!==h&&(g.anisotropy=h,g.needsUpdate=!0)}_e();const Me=La(s,c),Y=u.base();Y.position.set(0,j(0,0),0),Te(Y),s.add(Y),Y.updateMatrixWorld(!0);const We=Y.getObjectByName("terminal")??null,je=Y.getObjectByName("rampe")??null,Ce=new N(4,0,9),k=new N(-10,0,-7);We?.getWorldPosition(Ce),je?.getWorldPosition(k);const Q=Y.userData,te=Array.isArray(Q.murs)&&Q.interieur&&Q.porte&&Array.isArray(Q.cercles)?Q:null,zi=typeof Q.animer=="function"?Q.animer.bind(Q):null,ms=h=>Y.getObjectByName(h)?.getWorldPosition(new N)??null,Ht=te?ms("terminal-interieur"):null,Gt=te?ms("vestiaire"):null,Pi={benne:Q.ecranBenne,boutique:Q.ecranBoutique,tableau:Q.ecranTableau};let Xt=0,ps=!1;const qt=[{x:0,z:0}],vs=te?te.cercles:mr(Y),Ve={x:0,z:0,r:0},Yt={x:k.x,z:k.z,r:1.6};let xs=[...vs,Yt,Ve];const kt=u.decor(t.seed,ee/2+12,ee/2+470);vr(kt),Te(kt),s.add(kt);let de=null;try{de=u.hologramme();const h=Y.getObjectByName("hologramme");h?h.add(de.group):(de.group.position.set(Ce.x-3,j(Ce.x-3,Ce.z),Ce.z+.5),s.add(de.group))}catch{de=null}const gs=new Array(nt*nt).fill(0);let Kt=0;const we=u.fusee();we.group.position.set(k.x,k.y+.3,k.z),Te(we.group),s.add(we.group),we.setDecollage(0);const gt=new bo(new W(1,.6,.3),0,90,1.6),bt=new mt;bt.name="ancre-tuyere",bt.position.set(0,-1.6,0),bt.add(gt),(we.group.getObjectByName("corps")??we.group).add(bt);let fe="sol",me=0;const pe=new ui(s,{max:3e3,gravite:1.62,freinage:0,taille:[.02,.06],croissance:.6,vie:[1.6,2.8],couleur:new W(.42,.405,.39),opacite:.8}),ve=new ui(s,{max:700,gravite:-.15,freinage:.55,taille:[1.2,2.6],croissance:2.5,vie:[3.5,6],couleur:new W(.5,.48,.46),opacite:.4});pe.densite=i.particules,ve.densite=i.particules;const A=new qa(u,s,a.couleur,o,t,pe);if(a.tenue&&A.avatar.setCosmetiques(a.tenue),te){const h=te.interieur,g=Y.position.y;A.batiment={murs:te.murs,contient:(v,b)=>h.contient(v,b),sol:g+h.sol,plafond:(v,b)=>g+h.plafond(v,b)}}const le=Q.arrivee;le&&Number.isFinite(le.x)&&Number.isFinite(le.z)&&Number.isFinite(le.yaw)&&(A.placer(le.x,le.z,le.yaw),A.garage={x:le.x-4,z:le.z-2.5,yaw:le.yaw});const Qt=new ma,$e=new va(u,s,pe,Qt),Zt=new Ai(s,Qt);let Jt="";const bs=Si(64,.55),Ms=new Qe({map:bs,color:new W(a.couleur),depthTest:!1,transparent:!0,sizeAttenuation:!1,opacity:0}),He=new Ke(Ms);He.scale.set(.035,.035,1),He.renderOrder=22,He.visible=!1,s.add(He);const Ge=document.createElement("div");Ge.setAttribute("aria-hidden","true"),Ge.className="monde-visiere";const Di=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;Ge.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;"+(Di?"":"transition:opacity .25s ease;")+"background:radial-gradient(ellipse 60% 64% at 50% 47%, rgba(0,0,0,0) 72%, rgba(10,16,26,.3) 86%, rgba(4,7,12,.88) 100%),radial-gradient(ellipse 90% 50% at 50% -18%, rgba(190,215,255,.08) 60%, rgba(0,0,0,0) 66%);box-shadow:inset 0 0 70px rgba(0,0,0,.5);",getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.appendChild(Ge);let _t=!1;const[Ei,Ci]=he(256,80);fs(Ci,256,80,"Sac plein !",{fond:"rgba(200,40,30,0.9)",couleur:"#fff",taille:30,bordure:"#ffd166"});const $t=new re(Ei);$t.colorSpace=Ie;const Se=new Ke(new Qe({map:$t,depthTest:!1,transparent:!0}));Se.scale.set(1.5,.47,1),Se.visible=!1,Se.renderOrder=21,s.add(Se);const se=new Map,ws=[];let es=0;const et=new Mo,xe=[],Mt=[],tt=new hs().setFromObject(Y),Ss=Math.max(Math.abs(tt.min.x),Math.abs(tt.max.x),Math.abs(tt.min.z),Math.abs(tt.max.z),4)+1,Li=tt.max.y+1,ys=h=>{const g=h;if(!g.isMesh||g.isInstancedMesh||g.userData.sansOcclusion)return!1;const v=g.material;return!(Array.isArray(v)?v.some(b=>b.transparent):v.transparent)};Y.traverse(h=>{ys(h)&&Mt.push(h)});for(const h of te?.occulteursCamera??[])Mt.includes(h)||Mt.push(h);let wt=[];const As=(h,g,v,b,z,O)=>{const U=z-v,G=O-b,at=U*U+G*G,Fs=at>1e-9?Math.max(0,Math.min(1,((h-v)*U+(g-b)*G)/at)):0,Is=v+U*Fs-h,Us=b+G*Fs-g;return Is*Is+Us*Us};A.obstacle=(h,g,v)=>{const b=h.x+g.x*v,z=h.z+g.z*v;let O=1/0;if(et.set(h,g),et.near=0,et.far=v+.4,h.y<Li&&As(0,0,h.x,h.z,b,z)<Ss*Ss&&(xe.length=0,et.intersectObjects(Mt,!1,xe),xe.length&&(O=xe[0].distance)),wt.length){let U=!1;for(const{d:G}of se.values())if(As(G.x,G.z,h.x,h.z,b,z)<16){U=!0;break}U&&(xe.length=0,et.intersectObjects(wt,!1,xe),xe.length&&xe[0].distance<O&&(O=xe[0].distance))}return O===1/0?1/0:Math.max(.3,O-.35)};const Ts=u.robot();Ts.updateMatrixWorld(!0);const St=[];Ts.traverse(h=>{const g=h;if(!g.isMesh)return;const v=new xi(g.geometry,g.material,fi);v.count=0,v.castShadow=!0,v.receiveShadow=!0,v.frustumCulled=!1,s.add(v),St.push({inst:v,local:g.matrixWorld.clone()})});const Le=[],zs=new Ft,Ps=new Ft,Ds=new jt,Es=new N,Oi=new N(1,1,1),Ni=new N(0,1,0),st={brosse:new Set,interagir:new Set,interactionPossible:new Set,touche:new Set,outil:new Set,pas:new Set,saut:new Set,atterrissage:new Set};function ye(h,...g){for(const v of st[h])try{v(...g)}catch(b){console.error(`[monde] écouteur « ${h} » :`,b)}}const Bi=h=>ye("brosse",h);A.surPas=()=>ye("pas"),A.surSaut=()=>ye("saut"),A.surAtterrissage=h=>ye("atterrissage",h);let ie=null;const oe=new Ua(n.domElement,h=>{switch(h.type){case"touche":ye("touche",h.t);break;case"outil":ye("outil",h.choix);break;case"sauter":A.sauter();break;case"vue":A.basculerVue();break;case"zoom":A.zoomer(h.sens);break;case"interagir":if(!ie)break;ie.type==="vehicule"&&(A.enVehicule?A.descendre():A.monter()),ye("interagir",ie);break}});function Ri(){const h=A.centre();let g=null;if(A.dedans&&!A.enVehicule)Gt&&Math.hypot(h.x-Gt.x,h.z-Gt.z)<cr?g={type:"vestiaire"}:Ht&&Math.hypot(h.x-Ht.x,h.z-Ht.z)<lr&&(g={type:"terminal"});else{let v=Co+(A.enVehicule?2:0),b=-1;for(const{d:z}of se.values()){const O=Math.hypot(h.x-z.x,h.z-z.z);O<v&&(v=O,b=z.id)}b>=0?g={type:"depot",depotId:b}:We&&!A.enVehicule&&Math.hypot(h.x-Ce.x,h.z-Ce.z)<nr?g={type:"terminal"}:je&&Math.hypot(h.x-k.x,h.z-k.z)<ur+(A.enVehicule?3:0)?g={type:"rampe"}:A.avatar.vehicule&&A.distanceVehicule()<hr&&(g={type:"vehicule"})}g?.type===ie?.type&&(g?.type!=="depot"||ie?.type==="depot"&&ie.depotId===g.depotId)||(ie=g,ye("interactionPossible",g))}function Fi(h,g){if(zi?.(g),!te)return;const v=A.centre(),b=te.porte;qt[0].x=v.x,qt[0].z=v.z;const z=Bo(b.x,b.z,b.rayon,qt)||$e.procheDe(b.x,b.z,b.rayon)?1:0,O=Ro(Xt,z,h);O!==Xt&&(Xt=O,b.setOuverture(O));const U=A.dedans&&!A.enVehicule;U!==ps&&(ps=U,te.setCameraInterieure(U))}function it(){const h=Math.max(1,e.clientWidth||window.innerWidth),g=Math.max(1,e.clientHeight||window.innerHeight);o.aspect=h/g,o.updateProjectionMatrix(),r.taille(h,g);const v=g*n.getPixelRatio();pe.setEchelle(v),ve.setEchelle(v)}it();const Cs=typeof ResizeObserver<"u"?new ResizeObserver(it):null;Cs?.observe(e),window.addEventListener("resize",it);const ts=new N;function Ii(){let h=1;for(const[U,G]of fr)if(A.camDist<U){h=G;break}h!==Z&&Ee(h);const g=A.centre(),v=R*2/q,b=Math.round(g.dot(L)/v)*v,z=Math.round(g.dot(F)/v)*v,O=g.dot(ge);ts.copy(L).multiplyScalar(b).addScaledVector(F,z).addScaledVector(ge,O),S.target.position.copy(ts),S.position.copy(ts).addScaledVector(ge,R*4.5),S.target.updateMatrixWorld()}function Ui(h){const g=1-Math.exp(-h*6);for(let v=0;v<Le.length;v++){const b=Le[v],z=b.cx-b.x,O=b.cz-b.z;if(Math.abs(z)+Math.abs(O)>20?(b.x=b.cx,b.z=b.cz):(b.x+=z*g,b.z+=O*g),z*z+O*O>1e-5){let G=Math.atan2(-z,-O)-b.yaw;for(;G>Math.PI;)G-=Math.PI*2;for(;G<-Math.PI;)G+=Math.PI*2;b.yaw+=G*Math.min(1,h*8)}Es.set(b.x,j(b.x,b.z),b.z),Ds.setFromAxisAngle(Ni,b.yaw),zs.compose(Es,Ds,Oi);for(const U of St)Ps.multiplyMatrices(zs,U.local),U.inst.setMatrixAt(v,Ps)}for(const v of St)v.inst.count=Le.length,v.inst.instanceMatrix.needsUpdate=!0}function Wi(h,g){if(fe==="sol")return;me+=h;let v=0,b=0;if(fe==="decollage"){const z=Math.min(1,me/6);v=z*z*z,b=z<.05?z/.05:1,z<.5&&ve.emettre(Math.round(18*h*60*ve.densite*(1-z))||1,k.x,k.y+.6,k.z,7,.6,2.5,k.y-50),me>=6&&(fe="attente",me=0)}else if(fe==="attente")v=1,me>=4&&(fe="atterrissage",me=0);else{const z=Math.min(1,me/6.5);v=(1-z)*(1-z)*(1-z),b=z>.97?(1-z)/.03:.75,z>.75&&ve.emettre(Math.round(8*h*60*ve.densite)||1,k.x,k.y+.6,k.z,5,.4,2,k.y-50),me>=6.5&&(fe="sol",v=0,b=0)}if(we.setDecollage(v),b>0&&v<.97){const z=.85+Math.sin(g*53)*.08+Math.sin(g*31)*.07;gt.intensity=1200*b*z}else gt.intensity=0}const Ae=new N;function ji(h,g){if(A.avatar.hautTete(Ae),A.sacPlein){Se.visible=!0;const b=1+Math.sin(g*6)*(A.veutBrosser?.12:.04);Se.scale.set(1.5*b,.47*b,1),Se.position.set(Ae.x,Ae.y+.25,Ae.z)}else Se.visible=!1;Zt.update(h,Ae);const v=Math.max(0,Math.min(1,(A.camDist-45)/60));if(He.visible=v>0,v>0&&(Ms.opacity=v*.95,He.position.set(Ae.x,Ae.y+.5,Ae.z)),A.dansCasque!==_t&&(_t=A.dansCasque,Ge.style.opacity=_t?"1":"0"),de&&(de.animer(g%dr),Kt-=h,Kt<=0)){Kt=2;for(let b=0;b<nt;b++)for(let z=0;z<nt;z++)gs[b*nt+z]=t.sectorClean(z,b);de.setProprete(gs)}A.avatar.vehicule&&!A.enVehicule?(Ve.x=A.vehPos.x,Ve.z=A.vehPos.z,Ve.r=A.outil?.id==="camion-aspirateur"?2.4:1.2):Ve.r=0,Yt.r=fe==="sol"?1.6:0}let yt=0,At=0,Xe=0,Ls=0,ss=0,ot=0,Os=!1,Tt=!1;function Ns(h){if(Tt)return;yt=requestAnimationFrame(Ns);const g=At?Math.min(.1,Math.max(0,(h-At)/1e3)):1/60;At=h,Xe+=g,oe.lire(g),A.update(g,Xe,oe,xs,Bi),Os||Ri(),is&&is(g),$e.update(g,Xe,o.position),Ui(g),Wi(g,Xe),ji(g,Xe),Fi(g,Xe),pe.update(g),ve.update(g),Ii(),Me.update(o,g),K.majLod(o.position.x,o.position.z,o.position.y-j(o.position.x,o.position.z)),H.majMasque(n),n.info.reset(),r.rendre(),ss++,ot?h-ot>=500&&(Ls=ss*1e3/(h-ot),ss=0,ot=h):ot=h}let is=null;const _={x:0,y:0,z:0,yaw:0,enVehicule:!1,enMouvement:!1,brosse:!1,vitesse:0,yawCamera:0,vue:"troisieme",interieur:!1};let Bs=null;const Rs={on(h,g){return st[h].add(g),()=>{st[h].delete(g)}},setOutil(h,g,v){A.setOutil(h,g,v)},setSacPlein(h){A.sacPlein=h},setCosmetiques(h){A.avatar.setCosmetiques(h)},setEcran(h,g){Pi[h]?.setTexte(g)},showStamps(h){if(!h.length)return;const g=Math.min(h.length,8),v=h.length/g,b=o.position;for(let z=0;z<g;z++){const O=h[Math.floor(z*v)],U=O.x-b.x,G=O.z-b.z;if(U*U+G*G>3600)continue;const at=j(O.x,O.z);pe.emettre(Math.max(1,Math.round(2*pe.densite)),O.x,at+.03,O.z,.35+O.r*.4,.6,O.r,at)}},setPlayers(h,g){Jt=g,$e.set(h,g)},setDepots(h){if(h.length===se.size&&h.every(v=>{const b=se.get(v.id);return b!==void 0&&b.d.x===v.x&&b.d.z===v.z}))return;const g=new Set;for(const v of h){g.add(v.id);const b=se.get(v.id);if(b){(b.d.x!==v.x||b.d.z!==v.z)&&(b.d={...v},b.g.position.set(v.x,j(v.x,v.z),v.z),b.c.x=v.x,b.c.z=v.z);continue}const z=u.depot();if(Te(z),!es){const O=new hs().setFromObject(z);es=Math.max(.8,Math.min(3,Math.max(O.max.x,-O.min.x,O.max.z,-O.min.z)*.92-.1))}z.position.set(v.x,j(v.x,v.z),v.z),s.add(z),z.updateMatrixWorld(!0),se.set(v.id,{d:{...v},g:z,c:{x:v.x,z:v.z,r:es}})}for(const[v,b]of se)g.has(v)||(b.g.removeFromParent(),ws.push(b.g),se.delete(v));xs=[...vs,Yt,Ve,...[...se.values()].map(v=>v.c)],wt=[];for(const v of se.values())v.g.updateMatrixWorld(!0),v.g.traverse(b=>{ys(b)&&wt.push(b)});ie=ie?.type==="depot"&&!se.has(ie.depotId)?null:ie},setRobots(h){const g=Math.min(fi,h.length);Le.length=Math.min(Le.length,g);for(let v=0;v<g;v++){const b=h[v],z=Le[v];z&&z.id===b.id?(z.cx=b.x,z.cz=b.z):Le[v]={id:b.id,x:b.x,z:b.z,cx:b.x,cz:b.z,yaw:b.angle+Math.PI}}},lancerFusee(){fe!=="decollage"&&(fe="decollage",me=0)},emote(h,g){if(h===Jt||Jt===""){Zt.montrer(g);return}$e.emote(h,g)},setPause(h){Os=h,oe.setPause(h),h||oe.verrouiller()},setQualite(h){i=di(h),r.appliquer(i),Ee(),_e(),H.setDetail(i.detail),pe.densite=i.particules,ve.densite=i.particules,i.terrain!==Je&&(Je=i.terrain,s.remove(K.zone,K.anneau),K.dispose(),K=ti(H,i.terrain),s.add(K.zone,K.anneau)),it()},setControles(h,g){oe.sensibilite=Math.max(.2,Math.min(3,h)),oe.inverserY=g},setLiaisons(h){oe.setLiaisons(h)},setManette(h){oe.setManette(h)},setCamera(h,g){const v=Number.isFinite(h)?Math.max(50,Math.min(100,h)):62;v!==o.fov&&(o.fov=v,o.updateProjectionMatrix()),g!==Bs&&(Bs=g,A.setVue(g))},manetteActive(){return oe.manetteActive},local(){const h=A.centre();return _.x=h.x,_.y=h.y,_.z=h.z,_.yaw=A.enVehicule?A.vehYaw:A.yaw,_.enVehicule=A.enVehicule,_.enMouvement=A.enMouvement,_.brosse=A.brosse,_.vitesse=A.vitesseSol,_.yawCamera=A.camYawVue,_.vue=A.vue,_.interieur=A.dedans&&!A.enVehicule,_},pointDevant(h){return A.pointDevant(h)},stats(){const h=n.info;return{fps:Math.round(Ls*10)/10,drawCalls:h.render.calls,triangles:h.render.triangles,geometries:h.memory.geometries,textures:h.memory.textures}},start(h){is=h,!(yt||Tt)&&(At=0,yt=requestAnimationFrame(Ns))},dispose(){if(!Tt){Tt=!0,cancelAnimationFrame(yt),window.removeEventListener("resize",it),Cs?.disconnect(),oe.dispose(),A.dispose(),$e.dispose(),Zt.dispose(),Qt.dispose(),pe.dispose(),ve.dispose(),Me.dispose(),de?.dispose(),we.dispose();for(const h of St)h.inst.dispose();for(const h of ws)s.add(h);if(typeof Q.dispose=="function"){try{Q.dispose()}catch(h){console.warn("[monde] libération de la base :",h)}s.add(Y)}xr(s),H.dispose(),$t.dispose(),bs.dispose(),Ge.remove(),gt.dispose(),y.dispose(),S.shadow.map?.dispose(),s.clear(),r.dispose();for(const h of Object.keys(st))st[h].clear()}}};Rs._debug={scene:s,camera:o,joueur:A,renderer:n,source:f.source,terrain:()=>K,entrees:oe};try{await Promise.race([n.compileAsync(s,o),new Promise(h=>setTimeout(h,5e3))])}catch(h){console.warn("[monde] précompilation des shaders impossible :",h)}return Rs};function mr(a){const e=[],t=new hs,i=(s,o)=>{for(const r of s.children){if(t.setFromObject(r),t.isEmpty())continue;const n=(t.max.x-t.min.x)/2,l=(t.max.z-t.min.z)/2,c=t.max.y-t.min.y,f=Math.max(n,l);if(f>7&&r.children.length&&o<4){i(r,o+1);continue}c<.9||f<.15||f>7||r.name==="rampe"||e.push({x:(t.min.x+t.max.x)/2,z:(t.min.z+t.max.z)/2,r:Math.min(n,l)*.5+f*.4})}};return i(a,0),e}const ht=new Ft,Ye=new N,pr=new jt,Nt=new N,Bt=ee/2+4;function vr(a){for(const e of[...a.children]){const t=e;if(t.isInstancedMesh){for(let o=0;o<t.count;o++){t.getMatrixAt(o,ht),ht.decompose(Ye,pr,Nt),Ye.applyMatrix4(e.matrix),Math.abs(Ye.x)<Bt&&Math.abs(Ye.z)<Bt&&Nt.set(0,0,0);const r=ht.elements;r[13]+=j(Ye.x,Ye.z)-.2*Nt.y,Nt.x===0&&ht.makeScale(0,0,0),t.setMatrixAt(o,ht)}t.instanceMatrix.needsUpdate=!0,t.computeBoundingSphere();continue}const i=e.position.x,s=e.position.z;if(Math.abs(i)<Bt&&Math.abs(s)<Bt){e.removeFromParent();continue}e.position.y+=j(i,s)}}function xr(a){const e=new Set,t=new Set;a.traverse(i=>{const s=i;s.geometry&&e.add(s.geometry);const o=s.material;Array.isArray(o)?o.forEach(r=>t.add(r)):o&&t.add(o)});for(const i of e)i.dispose();for(const i of t){for(const s of Object.values(i))s&&s.isTexture&&s.dispose();i.dispose()}}export{Mr as createWorld};
