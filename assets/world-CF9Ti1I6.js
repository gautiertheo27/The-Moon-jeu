const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./models-CVnqyaJQ.js","./three-CDsJI88d.js","./index-BtgavAww.js","./index-CA2OzE62.css"])))=>i.map(i=>d[i]);
import{Q as ne,M as si,C as me,S as Je,T as Qo,R as wo,N as So,L as Jo,a as _o,b as ye,V as T,c as ht,d as ut,G as H,D as Ao,I as $o,e as ds,f as Y,g as Ie,B as ea,O as Ft,h as U,i as ta,j as sa,k as zo,l as cs,m as ia,E as oa,n as Qe,o as se,p as ie,A as De,P as ii,q as To,r as aa,s as ra,t as na,u as la,v as ca,w as ha,F as Bi,U as ke,x as G,W as Ke,H as Ze,y as ua,z as da,J as Ui,K as Et,X as lt,Y as ma,Z as fa,_ as pa,$ as va,a0 as xa,a1 as ga,a2 as Po,a3 as ba,a4 as Ma,a5 as ya,a6 as wa,a7 as Sa,a8 as Jt,a9 as Fs,aa as Aa,ab as Bs,ac as za,ad as Ta,ae as Pa,af as Ca,ag as Ii,ah as ji,ai as Wi,aj as Da,ak as Ea,al as La,am as Oa,an as Na,ao as Qs,ap as Ra}from"./three-CDsJI88d.js";import{f as Fa,l as Ba,m as Ua,n as Ia,v as Js,t as ja,L as Vi,d as Hi,_ as Wa,a as Va,b as Ha,c as qa,e as Ga,g as Xa,h as Ya,i as ka,j as qi,k as Ka,o as Za,C as _t,P as Qa,p as Ja,q as _a,r as Gi,s as $a,u as Xi,w as er,x as tr,D as sr}from"./index-BtgavAww.js";const oi=1.6,ir=.35,Yi=new WeakMap;function ki(a,e,t,o){const s=oi*t/a.rayonM;return{x:e.x,y:e.y,z:e.z,rayonM:t,profondeurM:o,cosLimite:1-s*s/2}}function or(a){const e=Yi.get(a);if(e)return e;const t=a.relief.grands.map(n=>ki(a,n.centre,n.rayonM,n.profondeurM)),o=Ua(a.relief.graine>>>0),s=a.relief.crateres,i=a.base.direction;let r=0;for(;t.length<a.relief.grands.length+s.nombre&&r++<s.nombre*50;){const n=o()*2-1,h=o()*2-1,m=o()*2-1,u=o(),c=n*n+h*h+m*m;if(c>1||c<.01)continue;const d=Ia(Js(n,h,m)),p=s.rayonMinM+(s.rayonMaxM-s.rayonMinM)*u*u*u,f=d.x-i.x,b=d.y-i.y,M=d.z-i.z;Math.sqrt(f*f+b*b+M*M)*a.rayonM<a.base.plat[1]+p*oi||t.push(ki(a,d,p,p*s.creux))}return Yi.set(a,t),t}function hs(a,e){const t=a.rayonM,o=a.relief.graine;let s=0;const i=a.relief.couches;for(let d=0;d<i.length;d++){const p=i[d],f=t/p.echelleM;s+=(Fa(e.x*f+31.7*(d+1),e.y*f+17.3*(d+1),e.z*f+53.1*(d+1),o+d*7,p.octaves)-.5)*p.amplitudeM}const r=or(a);for(let d=0;d<r.length;d++){const p=r[d];if(e.x*p.x+e.y*p.y+e.z*p.z<p.cosLimite)continue;const f=e.x-p.x,b=e.y-p.y,M=e.z-p.z,y=Math.sqrt(f*f+b*b+M*M)*t/p.rayonM;y<1&&(s-=p.profondeurM*(1-y*y));const S=(y-1)/(oi-1);if(S>-1&&S<1){const N=1-S*S;s+=p.profondeurM*ir*N*N}}const n=a.base.direction,h=e.x-n.x,m=e.y-n.y,u=e.z-n.z,c=Math.sqrt(h*h+m*m+u*u)*t;return c<a.base.plat[1]&&(s*=Ba(a.base.plat[0],a.base.plat[1],c)),s}const Ki=.3,ar=16;function rr(a){return!Number.isFinite(a)||a<=Ki?1:Math.min(ar,Math.ceil(a/Ki))}function nr(a,e,t,o=3){let s=!1;for(let i=0;i<o;i++){let r=!1;for(let n=0;n<t.length;n++){const h=t[n],m=h.bx-h.ax,u=h.bz-h.az,c=m*m+u*u,d=c>1e-12?Math.max(0,Math.min(1,((a.x-h.ax)*m+(a.z-h.az)*u)/c)):0,p=a.x-(h.ax+m*d),f=a.z-(h.az+u*d),b=p*p+f*f;if(!(b>=e*e)){if(b>1e-12){const M=Math.sqrt(b);a.x+=p/M*(e-M),a.z+=f/M*(e-M)}else if(c>1e-12){const M=Math.sqrt(c);a.x+=-u/M*e,a.z+=m/M*e}else continue;r=!0}}if(!r)break;s=!0}return s}function lr(a,e,t,o){const s=t*t;for(let i=0;i<o.length;i++){const r=o[i].x-a,n=o[i].z-e;if(r*r+n*n<s)return 1}return 0}function cr(a,e,t){const o=Number.isFinite(a)?a:0,s=1-Math.exp(-4*Math.max(0,Number.isFinite(t)?t:0)),i=o+(e-o)*s;return Math.abs(e-i)<.002?Math.max(0,Math.min(1,e)):Math.max(0,Math.min(1,i))}function us(a){return ja(a)?.vehicule??!1}const hr=.4,ur=.15,Zi=.2,dr=.2;function mr(a,e,t,o,s=null){if(o)return"conduite";const i=t>(s==="marche"?ur:hr);switch(a){case"brosse-a-dents":case"brosse-a-recurer":return e?"brosse":i?"marche":"repos";case"balai":case"aspirateur-dorsal":return e?"brosse-debout":i?"marche":"repos";case"balayeuse-poussee":return"pousse";default:return i?"marche":"repos"}}function fr(a,e){const t=Math.min(Math.max(0,e),6);return a==="marche"?.55+t*.13:a==="pousse"?.55+t*.12:0}const pr={"brosse-a-dents":.55,"brosse-a-recurer":.6,balai:.95,"aspirateur-dorsal":.95,"balayeuse-poussee":1.1,"balayeuse-autoportee":1.6,"camion-aspirateur":3};class Co{constructor(e,t,o){this.modeles=e,this.scene=t,this.astro=e.astronaute(o),Ge(this.astro.group),t.add(this.astro.group);const s=this.astro.main,i=r=>{for(const n of r.children)n.isMesh||(this.articulations.push(n),n!==s&&i(n))};i(this.astro.group),this.poseDepart=new Float32Array(this.articulations.length*7),this.objTete=this.astro.group.getObjectByName("tete")??null}astro;outilId=null;tenu=null;vehicule=null;assis=!1;affiche=!0;ombre=!0;anim=null;fondu=0;articulations=[];poseDepart;cycles=0;pasFaits=0;vLisse=0;tPrec=-1;depuisBrosse=99;brosseStable=!1;premiere=!1;matInvisible=null;caches=[];objTete;setCosmetiques(e){const t=this.astro;if(!t.setCosmetiques)return;const o=this.premiere;o&&this.setPremierePersonne(!1),t.setCosmetiques(e),Ge(t.group),this.ombre||Tt(t.group,!1),o&&this.setPremierePersonne(!0)}setOutil(e){e!==this.outilId&&(this.outilId=e,this.retirerOutil(),us(e)?(this.vehicule=this.modeles.vehicule(e),Ge(this.vehicule.group),this.ombre||Tt(this.vehicule.group,!1),this.vehicule.group.visible=this.affiche,this.scene.add(this.vehicule.group)):(this.tenu=this.modeles.outil(e),Ge(this.tenu.group),this.ombre||Tt(this.tenu.group,!1),this.astro.main.add(this.tenu.group)))}setDistance(e,t){e!==this.affiche&&(this.affiche=e,this.setVisible(e)),t!==this.ombre&&(this.ombre=t,Tt(this.astro.group,t),this.vehicule&&Tt(this.vehicule.group,t))}retirerOutil(){this.assis&&this.setAssis(!1),this.tenu&&(this.tenu.group.removeFromParent(),this.tenu.dispose(),this.tenu=null),this.vehicule&&(this.vehicule.group.removeFromParent(),this.vehicule.dispose(),this.vehicule=null)}setAssis(e){if(e===this.assis||e&&!this.vehicule)return;this.assis=e;const t=this.astro.group;e&&this.vehicule?(this.vehicule.siege.add(t),t.position.set(0,0,0),t.rotation.set(0,0,0)):this.scene.add(t)}tete(){return this.assis&&this.vehicule?this.vehicule.tete:this.tenu?this.tenu.tete:null}positionTete(e){const t=this.tete();return t?(t.getWorldPosition(e),Number.isFinite(e.x)&&Number.isFinite(e.z)):!1}animer(e,t,o){const s=this.tPrec<0?0:Math.min(.1,Math.max(0,e-this.tPrec));this.tPrec=e;const i=this.outilId??"brosse-a-dents";this.depuisBrosse=o?0:this.depuisBrosse+s,this.brosseStable=this.depuisBrosse<dr;const r=Math.max(0,t);this.vLisse+=(r-this.vLisse)*(s>0?1-Math.exp(-s*10):1);const n=mr(i,this.brosseStable,this.vLisse,this.assis,this.anim);n!==this.anim&&(this.anim!==null&&(this.capturerPose(),this.fondu=Zi),this.anim=n);let h=e;const m=fr(n,this.vLisse);if(m>0){const u=Math.floor(this.cycles*2);this.cycles+=m*s,this.cycles>1e6?this.cycles-=1e6:Math.floor(this.cycles*2)!==u&&this.vLisse>.5&&this.pasFaits++,h=this.cycles/m}this.astro.animer(n,h,this.vLisse),this.fondu>0&&(this.fondu-=s,this.fondu>0&&this.melangerPose(1-this.fondu/Zi)),this.tenu&&this.tenu.animer(e,this.brosseStable),this.vehicule&&this.vehicule.animer(e,this.brosseStable&&this.assis)}capturerPose(){const e=this.poseDepart;for(let t=0;t<this.articulations.length;t++){const o=this.articulations[t],s=t*7;e[s]=o.quaternion.x,e[s+1]=o.quaternion.y,e[s+2]=o.quaternion.z,e[s+3]=o.quaternion.w,e[s+4]=o.position.x,e[s+5]=o.position.y,e[s+6]=o.position.z}}melangerPose(e){const t=e*e*(3-2*e),o=this.poseDepart;for(let s=0;s<this.articulations.length;s++){const i=this.articulations[s],r=s*7;Qi.set(o[r],o[r+1],o[r+2],o[r+3]).slerp(i.quaternion,t),i.quaternion.copy(Qi),i.position.set(o[r+4]+(i.position.x-o[r+4])*t,o[r+5]+(i.position.y-o[r+5])*t,o[r+6]+(i.position.z-o[r+6])*t)}}setPremierePersonne(e){if(e===this.premiere)return;if(this.premiere=e,!e){for(const i of this.caches)i.mesh.material=i.mat;this.caches.length=0;return}const t=this.matInvisible??=new si({colorWrite:!1,depthWrite:!1}),o=this.astro.main,s=(i,r)=>{for(const n of i.children){if(n===o)continue;const h=r||n.name.startsWith("epaule"),m=n;m.isMesh?h||(this.caches.push({mesh:m,mat:m.material}),m.material=t):s(n,h)}};s(this.astro.group,!1)}positionYeux(e){return this.objTete?this.objTete.localToWorld(e.set(0,.2,0)):(this.astro.group.getWorldPosition(e),e.y+=this.assis?1.25:1.6,e)}setVisible(e){this.astro.group.visible=e,this.vehicule&&(this.vehicule.group.visible=e)}hautTete(e){return this.astro.group.getWorldPosition(e),e.y+=this.assis?1.9:2.25,e}dispose(){this.setPremierePersonne(!1),this.matInvisible?.dispose(),this.matInvisible=null,this.retirerOutil(),this.astro.group.removeFromParent(),this.astro.dispose()}}const Qi=new ne;function Ge(a){a.traverse(e=>{e.isMesh&&!e.userData.ombreFixee&&(e.castShadow=!0,e.receiveShadow=!0)})}function Tt(a,e){a.traverse(t=>{if(!t.isMesh)return;const s=t.userData;e?t.castShadow=s.ombreFixee?s.ombreOrigine??t.castShadow:!0:(s.ombreFixee&&s.ombreOrigine===void 0&&(s.ombreOrigine=t.castShadow),t.castShadow=!1)})}const vr=new Qo;async function Xe(a){try{const e=await vr.loadAsync(`./textures/${a}`),t=e.image;return!t||!t.width?(e.dispose(),null):e}catch{return null}}function Me(a,e,t){let o=a*374761393+e*668265263+t*2147483647|0;return o=Math.imul(o^o>>>13,1274126177),o^=o>>>16,(o>>>0)/4294967296}function xr(a,e,t,o){const s=Math.floor(a),i=Math.floor(e),r=a-s,n=e-i,h=r*r*(3-2*r),m=n*n*(3-2*n),u=(s%t+t)%t,c=(i%t+t)%t,d=(u+1)%t,p=(c+1)%t,f=Me(u,c,o),b=Me(d,c,o),M=Me(u,p,o),y=Me(d,p,o);return f+(b-f)*h+(M-f)*m+(f-b-M+y)*h*m}function Ue(a,e,t,o,s){let i=0,r=.5,n=0,h=t;for(let m=0;m<o;m++)i+=xr(a*h,e*h,h,s+m*31)*r,n+=r,r*=.5,h*=2;return i/n}function we(a,e){const t=document.createElement("canvas");t.width=a,t.height=e;const o=t.getContext("2d",{willReadFrequently:!0});if(!o)throw new Error("canvas 2D indisponible");return[t,o]}function $t(a,e){return a.wrapS=a.wrapT=wo,a.colorSpace=e?Je:So,a.minFilter=Jo,a.generateMipmaps=!0,a.needsUpdate=!0,a}function Ji(a,e,t){const[o,s]=we(e,e),i=s.createImageData(e,e);for(let r=0;r<e;r++)for(let n=0;n<e;n++){const h=(n-1+e)%e,m=(n+1)%e,u=(r-1+e)%e,c=(r+1)%e,d=(a[r*e+m]-a[r*e+h])*t,p=(a[c*e+n]-a[u*e+n])*t,f=Math.hypot(d,p,1),b=(r*e+n)*4;i.data[b]=(-d/f*.5+.5)*255,i.data[b+1]=(-p/f*.5+.5)*255,i.data[b+2]=(1/f*.5+.5)*255,i.data[b+3]=255}return s.putImageData(i,0,0),o}function gr(a){const e=new Float32Array(a*a),[t,o]=we(a,a),s=o.createImageData(a,a);for(let i=0;i<a;i++)for(let r=0;r<a;r++){const n=r/a,h=i/a,m=Ue(n,h,4,4,11),u=Ue(n,h,64,2,23),c=Me(r,i,5);let d=0;const p=10,f=Math.floor(n*p),b=Math.floor(h*p);for(let N=-1;N<=1;N++)for(let W=-1;W<=1;W++){const w=((f+W)%p+p)%p,L=((b+N)%p+p)%p;if(Me(w,L,77)>.55)continue;const O=(f+W+Me(w,L,78))/p,I=(b+N+Me(w,L,79))/p,J=(.12+.22*Me(w,L,80))/p,F=Math.hypot(n-O,h-I)/J;F<1&&(d=Math.max(d,Math.sqrt(1-F*F)))}const M=m*.5+u*.35+c*.15+d*.8;e[i*a+r]=M;const y=.5+(m-.5)*.35+(u-.5)*.25+(c-.5)*.18-d*.18,S=(i*a+r)*4;s.data[S]=Math.max(0,Math.min(255,y*255*1.02)),s.data[S+1]=Math.max(0,Math.min(255,y*255*1)),s.data[S+2]=Math.max(0,Math.min(255,y*255*.96)),s.data[S+3]=255}return o.putImageData(s,0,0),{c:t,h:e}}function br(a){const e=new Float32Array(a*a),[t,o]=we(a,a),s=o.createImageData(a,a);for(let i=0;i<a;i++)for(let r=0;r<a;r++){const n=r/a,h=i/a,m=Ue(n,h,3,4,41),u=Ue(n,h,32,3,43),c=Me(r,i,9),d=Math.abs(Ue(n,h,6,3,47)-.5)<.012?1:0;e[i*a+r]=m*.4+u*.2+c*.04-d*.3;const p=.5+(m-.5)*.3+(u-.5)*.15+(c-.5)*.05-d*.15,f=(i*a+r)*4;s.data[f]=Math.max(0,Math.min(255,p*255*.97)),s.data[f+1]=Math.max(0,Math.min(255,p*255*1)),s.data[f+2]=Math.max(0,Math.min(255,p*255*1.05)),s.data[f+3]=255}return o.putImageData(s,0,0),{c:t,h:e}}async function Mr(){const[a,e,t,o]=await Promise.all([Xe("regolithe-couleur.webp"),Xe("regolithe-normale.webp"),Xe("sol-propre-couleur.webp"),Xe("sol-propre-normale.webp")]);let s=a,i=e,r=t,n=o;if(!s||!i){const h=gr(512);s??=new me(h.c),i??=new me(Ji(h.h,512,6))}if(!r||!n){const h=br(512);r??=new me(h.c),n??=new me(Ji(h.h,512,3))}return{saleC:$t(s,!0),saleN:$t(i,!1),propreC:$t(r,!0),propreN:$t(n,!1)}}function Us(a,e){return a.wrapS=wo,a.wrapT=_o,a.colorSpace=e?Je:So,a.needsUpdate=!0,a}function yr(a,e){const[t,o]=we(a,e),s=o.createImageData(a,e);for(let i=0;i<e;i++){const r=(i/e-.5)*Math.PI;for(let n=0;n<a;n++){const h=n/a,m=i/e,u=Ue(h,m*.5,5,5,101),c=Ue(h,m*.5,12,3,103),d=u>.53,p=Math.abs(r)>1.25-(c-.5)*.2;let f,b,M;if(p)f=235,b=240,M=245;else if(d)Math.abs(r)<.55&&c>.5?(f=190+c*30,b=160+c*20,M=110):(f=60+c*50,b=100+c*50,M=50+c*20);else{const S=Math.min(1,(.53-u)*6);f=15+20*(1-S),b=45+50*(1-S),M=110+50*(1-S)}const y=(i*a+n)*4;s.data[y]=f,s.data[y+1]=b,s.data[y+2]=M,s.data[y+3]=255}}return o.putImageData(s,0,0),t}function wr(a,e){const[t,o]=we(a,e),s=o.createImageData(a,e);for(let i=0;i<e;i++)for(let r=0;r<a;r++){const n=Ue(r/a,i/e*.5,6,5,211),h=Math.max(0,Math.min(1,(n-.5)*3.2)),m=(i*a+r)*4,u=h*255;s.data[m]=u,s.data[m+1]=u,s.data[m+2]=u,s.data[m+3]=255}return o.putImageData(s,0,0),t}function Sr(a){const e=a.image,t=Math.min(2048,e.width),o=Math.max(1,Math.round(e.height*t/e.width)),[s,i]=we(t,o);i.drawImage(e,0,0,t,o);const r=i.getImageData(0,0,t,o);for(let n=0;n<r.data.length;n+=4){const h=(r.data[n]*.3+r.data[n+1]*.59+r.data[n+2]*.11)*(r.data[n+3]/255);r.data[n]=r.data[n+1]=r.data[n+2]=h,r.data[n+3]=255}return i.putImageData(r,0,0),a.dispose(),new me(s)}async function Ar(){const[a,e,t]=await Promise.all([Xe("terre.webp"),Xe("terre-nuages.webp"),Xe("etoiles.webp")]),o=Us(a??new me(yr(1024,512)),!0);o.anisotropy=4;const s=Us(e?Sr(e):new me(wr(1024,512)),!1);return{terre:o,nuages:s,etoiles:t?Us(t,!0):null}}function Do(a=128,e=0){const[t,o]=we(a,a),s=o.createRadialGradient(a/2,a/2,0,a/2,a/2,a/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(Math.max(.01,e),"rgba(255,255,255,0.9)"),s.addColorStop(Math.min(.99,e+.25),"rgba(255,255,255,0.25)"),s.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=s,o.fillRect(0,0,a,a);const i=new me(t);return i.colorSpace=Je,i}function ai(a,e,t,o,s){a.clearRect(0,0,e,t);const i=s.taille??30;a.font=`600 ${i}px "Segoe UI", system-ui, sans-serif`,a.textAlign="center",a.textBaseline="middle";const r=Math.min(e-8,a.measureText(o).width+28),n=i+18,h=(e-r)/2,m=s.barre!==void 0?4:(t-n)/2;if(s.fond&&(a.fillStyle=s.fond,Is(a,h,m,r,n,n/2),a.fill(),s.bordure&&(a.strokeStyle=s.bordure,a.lineWidth=3,a.stroke())),a.fillStyle=s.couleur??"#fff",a.fillText(o,e/2,m+n/2+1,e-20),s.barre!==void 0){const u=Math.min(140,r-20),c=m+n+6;a.fillStyle="rgba(10,14,24,0.7)",Is(a,(e-u)/2,c,u,10,5),a.fill();const d=Math.max(0,Math.min(1,s.barre));a.fillStyle=d>.95?"#ff5a4a":d>.7?"#ffc04a":"#7fd6ff",d>0&&(Is(a,(e-u)/2+1,c+1,Math.max(8,(u-2)*d),8,4),a.fill())}}function Is(a,e,t,o,s,i){a.beginPath(),a.moveTo(e+i,t),a.arcTo(e+o,t,e+o,t+s,i),a.arcTo(e+o,t+s,e,t+s,i),a.arcTo(e,t+s,e,t,i),a.arcTo(e,t,e+o,t,i),a.closePath()}const _i=24,E={astre:Vi,R:Vi.rayonM,o:{x:0,y:1,z:0},ex:{x:1,y:0,z:0},ez:{x:0,y:0,z:1},version:0},dt=new ye,ct=new ye,_s=new T,$i=new ye,zr=new ye,$s={x:0,y:0,z:1};function Eo(){const{o:a,ex:e,ez:t,R:o}=E;ct.set(e.x,e.y,e.z,0,a.x,a.y,a.z,0,t.x,t.y,t.z,0,0,0,0,1),dt.copy(ct),dt.elements[13]=-o,_s.set(a.x*o,a.y*o,a.z*o)}function rs(a){const e=Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z)||1;a.x/=e,a.y/=e,a.z/=e}function ns(a,e,t){$i.copy(dt).invert(),E.astre=a,E.R=a.rayonM,E.o.x=e.x,E.o.y=e.y,E.o.z=e.z,rs(E.o);const o=t.x*E.o.x+t.y*E.o.y+t.z*E.o.z;return E.ex.x=t.x-E.o.x*o,E.ex.y=t.y-E.o.y*o,E.ex.z=t.z-E.o.z*o,rs(E.ex),E.ez.x=E.ex.y*E.o.z-E.ex.z*E.o.y,E.ez.y=E.ex.z*E.o.x-E.ex.x*E.o.z,E.ez.z=E.ex.x*E.o.y-E.ex.y*E.o.x,rs(E.ez),E.version++,ti=-1,Eo(),zr.multiplyMatrices(dt,$i)}function eo(a,e){return be(a,0,e,$s),ns(E.astre,$s,E.ex)}function Tr(){return E}function be(a,e,t,o){const{o:s,ex:i,ez:r,R:n}=E,h=n+e;return o.x=i.x*a+s.x*h+r.x*t,o.y=i.y*a+s.y*h+r.y*t,o.z=i.z*a+s.z*h+r.z*t,rs(o),o}function to(a,e,t){const o=E.R+e;return Math.sqrt(a*a+o*o+t*t)-E.R}function Ye(a,e,t){const{o,ex:s,ez:i,R:r}=E,n=r+e;return t.set((a.x*s.x+a.y*s.y+a.z*s.z)*n,(a.x*o.x+a.y*o.y+a.z*o.z)*n-r,(a.x*i.x+a.y*i.y+a.z*i.z)*n)}function Bt(a,e){return Ye(a,hs(E.astre,a),e)}function ei(a,e){const{o:t,ex:o,ez:s}=E;return e.set(a.x*o.x+a.y*o.y+a.z*o.z,a.x*t.x+a.y*t.y+a.z*t.z,a.x*s.x+a.y*s.y+a.z*s.z)}function js(a,e,t,o){const{o:s,ex:i,ez:r}=E;return o.x=i.x*a+s.x*e+r.x*t,o.y=i.y*a+s.y*e+r.y*t,o.z=i.z*a+s.z*e+r.z*t,o}function mt(a,e,t,o){return o.set(a,E.R+e,t).normalize()}let so=NaN,io=NaN,oo=0,ti=-1;function k(a,e){if(a===so&&e===io&&ti===E.version)return oo;const{R:t,astre:o}=E,s=a*a+e*e;let i;if(!(s<t*t*.9))i=-2*t;else{i=Math.sqrt(t*t-s)-t;for(let r=0;r<2;r++){const n=t+hs(o,be(a,i,e,$s));i=Math.sqrt(Math.max(0,n*n-s))-t}}return so=a,io=e,oo=i,ti=E.version,i}Eo();const ao=new T(0,1,0),Pr={salut:"Salut !",pouce:"Bien joué !",danse:"♪ Danse ! ♫",flemme:"Flemme…",bravo:"Bravo !",aide:"À l’aide !"};class Cr{mats=new Map;materiau(e){let t=this.mats.get(e);if(!t){const[o,s]=we(256,80);ai(s,256,80,Pr[e],{fond:"rgba(255,255,255,0.94)",couleur:"#14213d",taille:32,bordure:"#d4a017"});const i=new me(o);i.colorSpace=Je,t=new ut({map:i,depthTest:!1,transparent:!0}),this.mats.set(e,t)}return t}dispose(){for(const e of this.mats.values())e.map?.dispose(),e.dispose();this.mats.clear()}}class Lo{constructor(e,t){this.bulles=t,this.sprite=new ht(t.materiau("salut")),this.sprite.scale.set(1.6,.5,1),this.sprite.visible=!1,this.sprite.renderOrder=20,e.add(this.sprite)}sprite;reste=0;montrer(e){this.sprite.material=this.bulles.materiau(e),this.reste=3.2,this.sprite.visible=!0}update(e,t){if(this.reste<=0)return;this.reste-=e;const o=Math.min(1,(3.2-this.reste)*6),s=Math.min(1,this.reste*3),i=Math.max(.001,o*s);this.sprite.scale.set(1.6*i,.5*i,1),this.sprite.position.set(t.x,t.y+.55+(1-s)*.3,t.z),this.reste<=0&&(this.sprite.visible=!1)}dispose(){this.sprite.removeFromParent()}}const ro=50,no=200,Ws="0000";function Dr(a,e,t){let o=e-a;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return a+o*t}class Er{constructor(e,t,o,s){this.modeles=e,this.scene=t,this.particules=o,this.bulles=s}joueurs=new Map;tmp=new T;cap={x:0,y:0,z:1};tmp2=new T;haut=new T;qHaut=new ne;qYaw=new ne;set(e,t){for(const o of this.joueurs.values())o.vu=!1;for(const o of e){if(o.id===t||!o.pose)continue;let s=this.joueurs.get(o.id);s||(s=this.creer(o),this.joueurs.set(o.id,s)),s.vu=!0;const i=o.pose;if(!Number.isFinite(i.x+i.y+i.z+i.alt))continue;s.pose=i,s.brosse=!!i.brosse,s.sac=Math.max(0,Math.min(1,i.sac||0)),i.outil!==s.outil&&(s.outil=i.outil,s.avatar.setOutil(i.outil),s.avatar.setAssis(us(i.outil))),(o.nom!==s.nom||o.couleur!==s.couleur)&&(s.nom=o.nom,o.couleur!==s.couleur&&(s.couleur=o.couleur,s.avatar.astro.setCouleur(o.couleur)),this.dessiner(s));const r=o.tenue??Ws;r!==s.tenue&&(s.tenue=r,s.avatar.setCosmetiques(Hi(r)))}for(const[o,s]of this.joueurs)s.vu||(this.retirer(s),this.joueurs.delete(o))}creer(e){const t=e.pose,o=Ye(t,t.alt,this.tmp),s=ei({x:t.cx,y:t.cy,z:t.cz},this.tmp2),i=Math.atan2(-s.x,-s.z),r=new Co(this.modeles,this.scene,e.couleur);r.setOutil(t.outil),r.setAssis(us(t.outil));const n=e.tenue??Ws;n!==Ws&&r.setCosmetiques(Hi(n));const[h,m]=we(256,80),u=new me(h);u.colorSpace=Je;const c=new ht(new ut({map:u,depthTest:!0,depthWrite:!1,transparent:!0}));c.scale.set(1.7,.53,1),c.renderOrder=19,this.scene.add(c);const d={id:e.id,avatar:r,nom:e.nom,couleur:e.couleur,tenue:n,pose:t,cx:o.x,cy:o.y,cz:o.z,cyaw:i,x:o.x,y:o.y,z:o.z,yaw:i,vitesse:0,brosse:t.brosse,sac:t.sac,sacAffiche:-1,outil:t.outil,roule:0,etiquette:c,ctx:m,tex:u,bulle:new Lo(this.scene,this.bulles),accPart:0,vu:!0};return this.dessiner(d),d}dessiner(e){e.sacAffiche=e.sac,ai(e.ctx,256,80,e.nom.slice(0,20),{fond:"rgba(8,12,24,0.62)",couleur:e.couleur,taille:26,barre:e.sac}),e.tex.needsUpdate=!0}emote(e,t){const o=this.joueurs.get(e);return o?(o.bulle.montrer(t),!0):!1}update(e,t,o){const s=1-Math.exp(-e*9);for(const i of this.joueurs.values()){const r=i.pose;Ye(r,r.alt,this.tmp),i.cx=this.tmp.x,i.cy=this.tmp.y,i.cz=this.tmp.z,this.cap.x=r.cx,this.cap.y=r.cy,this.cap.z=r.cz,ei(this.cap,this.tmp),this.tmp.x*this.tmp.x+this.tmp.z*this.tmp.z>1e-6&&(i.cyaw=Math.atan2(-this.tmp.x,-this.tmp.z));const n=i.x,h=i.z;Math.abs(i.cx-i.x)+Math.abs(i.cz-i.z)>25&&(i.x=i.cx,i.z=i.cz),i.x+=(i.cx-i.x)*s,i.y+=(i.cy-i.y)*s,i.z+=(i.cz-i.z)*s,i.yaw=Dr(i.yaw,i.cyaw,s);const m=Math.hypot(i.x-n,i.z-h)/Math.max(e,.001);i.vitesse+=(m-i.vitesse)*Math.min(1,e*6),i.roule+=m*e;const u=i.avatar,c=k(i.x,i.z),d=Math.max(i.y,c);this.qHaut.setFromUnitVectors(ao,mt(i.x,d,i.z,this.haut)).multiply(this.qYaw.setFromAxisAngle(ao,i.yaw)),u.assis&&u.vehicule?(u.vehicule.group.position.set(i.x,d,i.z),u.vehicule.group.quaternion.copy(this.qHaut),u.vehicule.rouler(i.roule)):(u.astro.group.position.set(i.x,d,i.z),u.astro.group.quaternion.copy(this.qHaut));const p=i.x-o.x,f=i.z-o.z,b=p*p+f*f,M=b<no*no;if(u.setDistance(M,b<ro*ro),i.etiquette.visible=M,!M){i.bulle.reste>0&&(i.bulle.reste=0,i.bulle.sprite.visible=!1);continue}if(u.animer(t,i.vitesse,i.brosse),u.hautTete(this.tmp),i.etiquette.position.set(this.tmp.x,this.tmp.y+.15,this.tmp.z),i.bulle.update(e,this.tmp),Math.abs(i.sac-i.sacAffiche)>.04&&this.dessiner(i),i.brosse&&this.tmp.distanceToSquared(o)<4900){i.accPart+=28*e*this.particules.densite;const S=Math.floor(i.accPart);if(S>0){i.accPart-=S,(u.assis&&u.vehicule?u.vehicule.group:u.astro.group).updateMatrixWorld(!0),u.positionTete(this.tmp2)||this.tmp2.set(i.x-Math.sin(i.yaw)*.6,0,i.z-Math.cos(i.yaw)*.6);const N=k(this.tmp2.x,this.tmp2.z);this.particules.emettre(Math.min(S,12),this.tmp2.x,N+.03,this.tmp2.z,.4+.4*.5,.75,.5,N)}}}}procheDe(e,t,o){const s=o*o;for(const i of this.joueurs.values()){const r=i.x-e,n=i.z-t;if(r*r+n*n<s)return!0}return!1}transformer(e){for(const t of this.joueurs.values())this.tmp.set(t.x,t.y,t.z).applyMatrix4(e),this.tmp2.set(-Math.sin(t.yaw),0,-Math.cos(t.yaw)).transformDirection(e),t.x=this.tmp.x,t.y=this.tmp.y,t.z=this.tmp.z,t.yaw=Math.atan2(-this.tmp2.x,-this.tmp2.z)}nombre(){return this.joueurs.size}retirer(e){e.avatar.dispose(),e.etiquette.removeFromParent(),e.etiquette.material.dispose(),e.tex.dispose(),e.bulle.dispose()}dispose(){for(const e of this.joueurs.values())this.retirer(e);this.joueurs.clear()}}const C={combinaison:new Y({color:15329250,roughness:.78}),gris:new Y({color:9080211,roughness:.55,metalness:.4}),sombre:new Y({color:2829877,roughness:.6,metalness:.3}),visiere:new Y({color:14263361,roughness:.12,metalness:1}),metal:new Y({color:13225170,roughness:.3,metalness:.9}),bois:new Y({color:10119996,roughness:.7}),poils:new Y({color:15921906,roughness:.9}),jaune:new Y({color:15774499,roughness:.5,metalness:.2}),orange:new Y({color:15229996,roughness:.55,metalness:.1}),bleu:new Y({color:3104680,roughness:.5,metalness:.2}),ecran:new Y({color:727594,emissive:new U(4179711),emissiveIntensity:2.2,roughness:.3}),lumiere:new Y({color:1118481,emissive:new U(16757575),emissiveIntensity:3}),panneau:new Y({color:1780298,roughness:.25,metalness:.7}),roche:new Y({color:7828333,roughness:.95,flatShading:!0}),holo:new Y({color:663600,emissive:new U(4772351),emissiveIntensity:2,transparent:!0,opacity:.75,depthWrite:!1})},P={capsule:new ia(1,1,6,12),sphere:new cs(1,24,16),boite:new ea(1,1,1),cyl:new zo(1,1,1,20),cone:new sa(1,1,20),tore:new ta(1,.12,8,24)};function D(a,e,t=0,o=0,s=0,i=1,r=1,n=1){const h=new Ie(a,e);return h.position.set(t,o,s),h.scale.set(i,r,n),h.castShadow=!0,h.receiveShadow=!0,h}function Lr(a){const e=new H,t=new Y({color:new U(a),roughness:.6}),o=new H;o.position.y=.95,e.add(o);const s=new H;o.add(s),s.add(D(P.capsule,C.combinaison,0,.32,0,.27,.22,.22)),s.add(D(P.tore,t,0,.22,0,.27,.27,.5).rotateX(Math.PI/2)),s.add(D(P.boite,C.gris,0,.42,.25,.42,.55,.2)),s.add(D(P.boite,t,0,.42,.36,.3,.08,.02));const i=new H;i.position.y=.72,s.add(i),i.add(D(P.sphere,C.combinaison,0,0,0,.23,.23,.23)),i.add(D(P.sphere,C.visiere,0,.01,-.07,.19,.16,.18));const r=p=>{const f=new H;return f.position.set(.33*p,.55,0),s.add(f),f.add(D(P.capsule,C.combinaison,0,-.28,0,.085,.22,.085)),f.add(D(P.tore,t,0,-.12,0,.09,.09,.2).rotateX(Math.PI/2)),f.add(D(P.sphere,C.gris,0,-.58,0,.08,.08,.08)),f},n=r(1),h=r(-1),m=new Ft;m.position.y=-.6,n.add(m);const u=p=>{const f=new H;return f.position.set(.13*p,0,0),o.add(f),f.add(D(P.capsule,C.combinaison,0,-.42,0,.11,.3,.11)),f.add(D(P.boite,C.sombre,0,-.88,-.05,.17,.12,.3)),f},c=u(1),d=u(-1);return{group:e,main:m,setCouleur(p){t.color.set(p)},animer(p,f,b){const M=Math.max(1.5,b*2.2),y=Math.sin(f*M*2);switch(o.position.y=.95,o.rotation.set(0,0,0),s.rotation.set(0,0,0),n.rotation.set(0,0,.12),h.rotation.set(0,0,-.12),c.rotation.set(0,0,0),d.rotation.set(0,0,0),p){case"repos":s.rotation.x=Math.sin(f*1.6)*.02;break;case"marche":c.rotation.x=y*.5,d.rotation.x=-y*.5,n.rotation.x=-y*.4,h.rotation.x=y*.4,o.position.y=.95+Math.abs(y)*.04;break;case"brosse":o.position.y=.5,s.rotation.x=-.75,c.rotation.x=1.35,d.rotation.x=1.35,n.rotation.x=-.75+Math.sin(f*13)*.18,n.rotation.z=.05+Math.sin(f*13+1)*.12,h.rotation.x=-.4;break;case"brosse-debout":s.rotation.x=-.25,n.rotation.x=-.55+Math.sin(f*4)*.12,n.rotation.z=Math.sin(f*4)*.35,h.rotation.x=-.9+Math.sin(f*4)*.12,h.rotation.z=.3+Math.sin(f*4)*.35,c.rotation.x=y*.25,d.rotation.x=-y*.25;break;case"pousse":s.rotation.x=-.2,n.rotation.x=-1.1,h.rotation.x=-1.1,c.rotation.x=y*.45,d.rotation.x=-y*.45;break;case"conduite":o.position.y=0,c.rotation.x=-1.45,d.rotation.x=-1.45,n.rotation.x=-1,h.rotation.x=-1;break}},dispose(){t.dispose()}}}function Or(a){const e=new H,t=new Ft,o=[];switch(a){case"brosse-a-dents":e.add(D(P.cyl,C.bleu,0,-.09,0,.012,.19,.012)),e.add(D(P.boite,C.poils,0,-.18,-.015,.02,.03,.03)),t.position.set(0,-.19,0);break;case"brosse-a-recurer":e.add(D(P.boite,C.bois,0,-.08,0,.09,.05,.2)),e.add(D(P.boite,C.jaune,0,-.12,0,.09,.04,.2)),t.position.set(0,-.14,0);break;case"balai":e.add(D(P.cyl,C.bois,0,-.65,0,.018,1.3,.018)),e.add(D(P.boite,C.jaune,0,-1.3,0,.45,.08,.08)),e.add(D(P.boite,C.poils,0,-1.37,0,.44,.08,.05)),t.position.set(0,-1.38,0);break;case"aspirateur-dorsal":e.add(D(P.cyl,C.gris,0,-.6,0,.03,1.2,.03)),e.add(D(P.boite,C.orange,0,-1.22,0,.6,.06,.14)),t.position.set(0,-1.25,0);break;default:{e.add(D(P.cyl,C.gris,0,-.5,0,.025,1,.025));const s=D(P.boite,C.jaune,0,-1.05,0,1.1,.35,.5);e.add(s);const i=D(P.cyl,C.poils,0,-1.2,-.25,.14,1,.14);i.rotation.z=Math.PI/2,e.add(i),o.push(i),t.position.set(0,-1.25,-.25)}}return e.add(t),{group:e,tete:t,animer(s,i){for(const r of o)r.rotation.x=i?s*20:0},dispose(){}}}function Nr(a){const e=a==="camion-aspirateur",t=e?5.2:2.4,o=e?2.4:1.4,s=new H;s.add(D(P.boite,e?C.orange:C.jaune,0,e?1.2:.65,.2,o,e?1.6:.6,t*.8)),e&&s.add(D(P.cyl,C.metal,0,2.3,.9,.9,2.6,.9).rotateX(Math.PI/2)),s.add(D(P.boite,C.sombre,0,e?2.25:1.15,e?-1.6:-.15,o*.7,.06,.6));const i=[],r=e?[-1.8,.2,1.9]:[-.75,.8];for(const c of r)for(const d of[-1,1]){const p=D(P.cyl,C.sombre,d*(o/2+.05),e?.5:.32,c,e?.5:.32,.25,e?.5:.32);p.rotation.z=Math.PI/2,i.push(p),s.add(p)}const n=[],h=e?3:2;for(let c=0;c<h;c++){const d=D(P.cyl,C.poils,(c-(h-1)/2)*o/h,.12,-t/2-.2,.32,.08,.32);n.push(d),s.add(d)}const m=new Ft;m.position.set(0,0,-t/2-.2),s.add(m);const u=new Ft;return u.position.set(0,e?1.95:.95,e?-1.4:.1),s.add(u),{group:s,tete:m,siege:u,animer(c,d){for(const p of n)p.rotation.y=d?c*9:0},rouler(c){for(const d of i)d.rotation.x=-c/(e?.5:.32)},dispose(){}}}function Rr(){const a=new H;a.add(D(P.sphere,C.combinaison,0,0,0,5,3.6,5)),a.add(D(P.tore,C.gris,0,.3,0,5,5,3).rotateX(Math.PI/2));for(let o=0;o<3;o++){const s=o/3*Math.PI*2+.6,i=D(P.cyl,C.combinaison,Math.cos(s)*8,1.3,Math.sin(s)*8,1.6,4.2,1.6);i.rotation.z=Math.PI/2,i.rotation.y=-s,a.add(i)}const e=new H;e.name="terminal",e.position.set(3.5,0,9),e.add(D(P.boite,C.gris,0,.6,0,.8,1.2,.5)),e.add(D(P.boite,C.ecran,0,1.05,-.26,.65,.4,.02)),a.add(e);const t=new H;t.name="rampe",t.position.set(-10,0,-7),t.add(D(P.cyl,C.sombre,0,.15,0,4.2,.3,4.2)),t.add(D(P.tore,C.jaune,0,.31,0,3.6,3.6,.3).rotateX(Math.PI/2)),a.add(t);for(let o=0;o<4;o++){const s=D(P.boite,C.panneau,8+o*.1,2.2,-9+o*2.6,2.2,.05,1.4);s.rotation.z=.6,a.add(s),a.add(D(P.cyl,C.gris,8+o*.1,1.1,-9+o*2.6,.06,2.2,.06))}return a.add(D(P.cyl,C.metal,-3,4.5,3,.05,6,.05)),a.add(D(P.sphere,C.lumiere,-3,7.5,3,.15,.15,.15)),a}function Fr(){const a=new H;return a.add(D(P.cyl,C.gris,0,1,0,1,2,1)),a.add(D(P.cone,C.orange,0,2.4,0,1.15,.8,1.15)),a.add(D(P.tore,C.lumiere,0,.12,0,1.25,1.25,.6).rotateX(Math.PI/2)),a}function Br(){const a=new H,e=new H;a.add(e),e.add(D(P.cyl,C.combinaison,0,4.3,0,1.1,7,1.1)),e.add(D(P.cone,C.orange,0,8.8,0,1.1,2,1.1));for(let t=0;t<4;t++){const o=t/4*Math.PI*2,s=D(P.boite,C.orange,Math.cos(o)*1.3,1.3,Math.sin(o)*1.3,.12,2.2,1);s.rotation.y=-o,e.add(s)}return e.add(D(P.cone,C.sombre,0,.5,0,.8,1,.8)),{group:a,setDecollage(t){e.position.y=t*t*900,e.visible=t<.999},dispose(){}}}function Ur(){const a=new H;return a.add(D(P.cyl,C.jaune,0,.18,0,.45,.22,.45)),a.add(D(P.sphere,C.sombre,0,.3,0,.25,.15,.25)),a.add(D(P.cyl,C.poils,0,.04,-.1,.4,.06,.4)),a.add(D(P.sphere,C.lumiere,0,.42,-.1,.05,.05,.05)),a}function Ir(){const a=new H;a.add(D(P.cyl,C.gris,0,.4,0,1,.8,1));const e=new H;e.position.y=1.2,a.add(e);const t=[];for(let o=0;o<8;o++)for(let s=0;s<8;s++){const i=new Ie(P.boite,C.holo);i.position.set((s-3.5)*.2,0,(o-3.5)*.2),i.scale.set(.16,.02,.16),e.add(i),t.push(i)}return{group:a,animer(o){e.rotation.y=o*.3},setProprete(o){for(let s=0;s<64;s++){const i=o[s]??0;t[s].scale.y=.02+i*.8,t[s].position.y=t[s].scale.y/2}},dispose(){}}}function jr(a,e,t){const o=new H;let s=a>>>0||1;const i=()=>(s=s*1664525+1013904223>>>0,s/4294967296),r=[new Ao(1,0),new $o(1,0)],n=260,h=new ye,m=new ne,u=new T,c=new T;for(let d=0;d<r.length;d++){const p=new ds(r[d],C.roche,n/2);p.castShadow=!0,p.receiveShadow=!0;for(let f=0;f<n/2;f++){const b=i()*Math.PI*2,M=e+(t-e)*Math.pow(i(),1.6);u.set(Math.cos(b)*M,0,Math.sin(b)*M);const y=.4+Math.pow(i(),3)*(M<e+40?3:9);c.set(y*(.8+i()*.6),y*(.5+i()*.5),y*(.8+i()*.6)),m.setFromAxisAngle(u.clone().set(i()-.5,1,i()-.5).normalize(),i()*6.28),h.compose(u,m,c),p.setMatrixAt(f,h)}o.add(p)}return o}const Rt={astronaute:Lr,outil:Or,vehicule:Nr,base:Rr,depot:Fr,fusee:Br,robot:Ur,hologramme:Ir,decor:jr},Wr=Object.assign({"./models/index.ts":()=>Wa(()=>import("./models-CVnqyaJQ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url)});let Vr=!1;async function Hr(){const a=Wr["./models/index.ts"];if(!a||Vr)return{modeles:Rt,source:"provisoire"};try{const t=(await a()).modeles;return!t||typeof t.astronaute!="function"?{modeles:Rt,source:"provisoire"}:{modeles:qr(t),source:"graphiste"}}catch(e){return console.warn("[monde] modèles du graphiste indisponibles, repli provisoire :",e),{modeles:Rt,source:"provisoire"}}}function qr(a){const e={};for(const t of Object.keys(Rt)){const o=a[t],s=Rt[t];e[t]=typeof o=="function"?(...i)=>{try{const r=o.apply(a,i);if(r==null)throw new Error("modèle vide");return r}catch(r){return console.warn(`[monde] modeles.${t} a échoué, repli provisoire :`,r),s(...i)}}:s}return e}const Lt=new T(-.82,.25,-.52).normalize(),he=Lt.clone(),Vs=4200;function Gr(a,e,t,o){const s=new H;s.name="ciel";const i=[];let r=null;if(e.etoiles)r=e.etoiles,r.mapping=oa,a.background=r,a.backgroundIntensity=.55,i.push(r);else{a.background=new U(4);const O=7e3,I=new Float32Array(O*3),J=new Float32Array(O*3),F=new Float32Array(O);let K=12345;const oe=()=>(K=K*1664525+1013904223>>>0,K/4294967296);for(let X=0;X<O;X++){let Ee=oe()*2-1;const Le=oe()*Math.PI*2;X%3===0&&(Ee=(oe()-.5)*.35);const et=Math.sqrt(1-Ee*Ee),ue=new T(et*Math.cos(Le),Ee,et*Math.sin(Le));X%3===0&&ue.applyAxisAngle(new T(1,0,.3).normalize(),1.1),ue.multiplyScalar(Vs*.95),I[X*3]=ue.x,I[X*3+1]=ue.y,I[X*3+2]=ue.z;const pt=oe(),tt=pt<.15?[1,.82,.65]:pt<.35?[.75,.85,1]:[1,1,1],Oe=.35+Math.pow(oe(),6)*2.2;J[X*3]=tt[0]*Oe,J[X*3+1]=tt[1]*Oe,J[X*3+2]=tt[2]*Oe,F[X]=1+Math.pow(oe(),8)*2.6}const fe=new Qe;fe.setAttribute("position",new se(I,3)),fe.setAttribute("color",new se(J,3)),fe.setAttribute("taille",new se(F,1));const $e=new ie({vertexShader:`
        attribute float taille; attribute vec3 color; varying vec3 vC;
        void main() { vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = taille * 1.6; }`,fragmentShader:`
        varying vec3 vC;
        void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vC * a, a); }`,transparent:!0,depthWrite:!1,blending:De}),je=new ii(fe,$e);je.frustumCulled=!1,je.renderOrder=-10,s.add(je),i.push(fe,$e)}const n=Do(256,.08),h=new ut({map:n,color:new U(6,5.6,5),blending:De,depthWrite:!1,fog:!1}),m=new ht(h);m.position.copy(t).multiplyScalar(Vs*.9),m.scale.setScalar(260),m.renderOrder=-9,s.add(m);const u=new ut({map:n,color:new U(.5,.45,.38),blending:De,depthWrite:!1,opacity:.6}),c=new ht(u);c.position.copy(m.position),c.scale.setScalar(1300),c.renderOrder=-9,s.add(c),i.push(n,h,u);const d=140,p=new H;p.position.copy(o).multiplyScalar(Vs*.62),p.rotation.set(.35,2.2,.41);const f=new cs(d,48,32),b=new Y({map:e.terre,roughness:.62,metalness:0,emissive:new U(132106),envMapIntensity:0}),M=new Ie(f,b);p.add(M);const y={uNuages:{value:e.nuages},uDecalNuages:{value:0},uSoleilTerre:{value:he}};b.onBeforeCompile=O=>{Object.assign(O.uniforms,y),O.fragmentShader=O.fragmentShader.replace("#include <common>",`#include <common>
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
        }`)},b.customProgramCacheKey=()=>"terre-nuages-v1";const S=new cs(d*1.08,32,24),N=new ie({uniforms:{uSoleil:{value:he}},vertexShader:`
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
      }`,blending:De,transparent:!0,depthWrite:!1,side:To}),W=new Ie(S,N);p.add(W),s.add(p),i.push(f,b,S,N,e.terre,e.nuages);for(const O of[M,W])O.castShadow=!1,O.receiveShadow=!1;a.add(s);const w=new aa,L=new ye;return{group:s,update(O,I){s.position.copy(O.position),M.rotation.y=(M.rotation.y+I*.0015)%(Math.PI*2),y.uDecalNuages.value=(y.uDecalNuages.value+1-I*.0025/(Math.PI*2))%1},rebaser(O){s.quaternion.setFromRotationMatrix(O),he.copy(t).transformDirection(O),r&&(w.setFromRotationMatrix(L.copy(O).invert(),"XYZ"),a.backgroundRotation.set(-w.x,-w.y,-w.z,"XYZ"))},dispose(){a.remove(s),a.background===r&&(a.background=null);for(const O of i)O.dispose()}}}const Xr={carte:"carte",boutique:"boutique",chat:"chat",emotes:"emotes","poser-depot":"poser-depot",menu:"menu",ping:"ping",aide:"aide",stats:"stats"},Ot=["avancer","reculer","gauche","droite","courir","brosser"],lo=new Map(Ot.map((a,e)=>[a,e])),Yr=.5,kr=.09,Kr=2.6,Zr=2;function Hs(a){return a==="zoom-avant"||a==="zoom-arriere"}class Qr{constructor(e){this.emettre=e,this.setLiaisons(Ha())}avance=0;lateral=0;courir=!1;brosser=!1;dYaw=0;dPitch=0;pause=!1;manetteActive=!1;table=new Map;pad=[];padAvant=[];clesMaintenues=Ot.map(()=>[]);valeurs=new Float32Array(Ot.length);tenues=new Set;reglagesManette=qa();tZoom=0;setLiaisons(e){this.table=Ga(e),this.pad=Xa(e),this.padAvant=this.pad.map(()=>!0),this.clesMaintenues=Ot.map(t=>{const o=e[t],s=[];for(const i of o.clavier)i&&s.push(Ya(i));return s}),this.tenues.clear()}setManette(e){this.reglagesManette={...e}}actionDe(e){return this.table.get(e)??null}appui(e,t=!1){const o=this.table.get(e);return!o||this.pause?o??null:lo.has(o)?(this.tenues.add(e),o):((!t||Hs(o))&&this.declencher(o),o)}relache(e){this.tenues.delete(e)}vider(){this.tenues.clear(),this.dYaw=this.dPitch=0}declencher(e){const t=Xr[e];if(t)this.emettre({type:"touche",t});else if(e==="sauter")this.emettre({type:"sauter"});else if(e==="interagir")this.emettre({type:"interagir"});else if(e==="vue")this.emettre({type:"vue"});else if(e==="zoom-avant")this.emettre({type:"zoom",sens:-1});else if(e==="zoom-arriere")this.emettre({type:"zoom",sens:1});else if(e==="outil-suivant")this.emettre({type:"outil",choix:"suivant"});else if(e==="outil-precedent")this.emettre({type:"outil",choix:"precedent"});else if(e.startsWith("outil-")){const o=Number(e.slice(6));o>=1&&o<=7&&this.emettre({type:"outil",choix:o-1})}}lire(e,t=null){const o=this.valeurs;for(let s=0;s<Ot.length;s++){o[s]=0;const i=this.clesMaintenues[s];for(let r=0;r<i.length;r++)this.tenues.has(i[r])&&(o[s]=1)}if(t&&this.lireManette(e,t),this.pause){this.avance=this.lateral=0,this.courir=this.brosser=!1;return}this.avance=Math.max(-1,Math.min(1,o[0]-o[1])),this.lateral=Math.max(-1,Math.min(1,o[3]-o[2])),this.courir=o[4]>.5,this.brosser=o[5]>.3}lireManette(e,t){const o=this.reglagesManette,s=this.pad;let i=null,r=!1;for(let m=0;m<s.length;m++){const u=s[m],c=ka(t,u.entree,o.zoneMorte);c>0&&(r=!0);const d=lo.get(u.action);if(d!==void 0){!this.pause&&c>this.valeurs[d]&&(this.valeurs[d]=c);continue}const p=c>Yr,f=this.padAvant[m];this.padAvant[m]=p,!(this.pause||!p)&&(f?Hs(u.action)&&(i=u.action):(this.declencher(u.action),Hs(u.action)&&(this.tZoom=-.25)))}i&&(this.tZoom+=e,this.tZoom>=kr&&(this.tZoom=0,this.declencher(i)));const n=qi(t.axes[2]??0,o.zoneMorte),h=qi(t.axes[3]??0,o.zoneMorte);(n!==0||h!==0)&&(r=!0),r&&(this.manetteActive=!0),!this.pause&&(this.dYaw-=n*Kr*e*o.sensibilite,this.dPitch+=h*Zr*e*o.sensibilite*(o.inverserY?-1:1))}}function co(a){const e=a;if(!e||!e.tagName)return!1;const t=e.tagName;return t==="INPUT"||t==="TEXTAREA"||t==="SELECT"||e.isContentEditable}class Jr extends Qr{constructor(e,t){super(s=>{s.type==="touche"&&s.t==="menu"?this.menu():t(s)}),this.canvas=e,this.action=t;const o=(s,i,r,n)=>{s.addEventListener(i,r,n),this.enleve.push(()=>s.removeEventListener(i,r,n))};o(window,"keydown",s=>this.bas(s)),o(window,"keyup",s=>this.relache(`k:${s.code}`)),o(window,"blur",()=>this.vider()),o(e,"mousedown",s=>{this.pause||(e.focus(),document.pointerLockElement!==e&&this.verrouiller(),s.button===1&&s.preventDefault(),this.manetteActive=!1,this.appui(`m:${s.button}`))}),o(window,"mouseup",s=>this.relache(`m:${s.button}`)),o(window,"mousemove",s=>{if(this.pause||document.pointerLockElement!==e)return;const i=Math.max(-150,Math.min(150,s.movementX)),r=Math.max(-150,Math.min(150,s.movementY));this.dYaw-=i*.0024*this.sensibilite,this.dPitch+=r*.0024*this.sensibilite*(this.inverserY?-1:1)}),o(e,"wheel",s=>{if(s.preventDefault(),this.pause||Math.abs(s.deltaY)<1)return;const i=`w:${s.deltaY>0?1:-1}`,r=this.actionDe(i);if(!r)return;const n=performance.now();n-this.derniereMolette<(r==="zoom-avant"||r==="zoom-arriere"?25:110)||(this.derniereMolette=n,this.appui(i),this.relache(i))},{passive:!1}),o(e,"contextmenu",s=>s.preventDefault()),o(document,"pointerlockchange",()=>{document.pointerLockElement!==e&&(this.vider(),!this.liberationVoulue&&!this.pause&&this.menu(),this.liberationVoulue=!1)})}sensibilite=1;inverserY=!1;derniereMolette=0;liberationVoulue=!1;dernierMenu=0;enleve=[];menu(){const e=performance.now();e-this.dernierMenu<300||(this.dernierMenu=e,this.action({type:"touche",t:"menu"}))}verrouiller(){try{const e=this.canvas.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}liberer(){document.pointerLockElement===this.canvas&&(this.liberationVoulue=!0,document.exitPointerLock())}setPause(e){this.pause=e,this.vider(),e&&this.liberer()}bas(e){if(co(e.target)||this.pause){e.code==="Tab"&&!co(e.target)&&e.preventDefault();return}if(this.manetteActive=!1,e.code==="Escape"){e.repeat||this.menu();return}const t=this.appui(`k:${e.code}`,e.repeat);(e.code==="Tab"||t&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.preventDefault()}lire(e){super.lire(e,Va())}dispose(){this.liberer();for(const e of this.enleve)e()}}const _r=1.62,ho=.4,$r=2.2,en=[],Pt=.5,uo=1.3,mo=3400,tn=.9;function sn(a,e,t,o){return t<0?a==="premiere"?{vue:a,zoom:e}:e<=Pt*1.001?{vue:"premiere",zoom:Pt}:{vue:a,zoom:Math.max(Pt,e/uo)}:a==="premiere"?{vue:"troisieme",zoom:Pt}:{vue:a,zoom:Math.min(Math.max(o,Pt),e*uo)}}function qs(a,e,t){const o=Math.max(0,Math.min(1,(t-a)/(e-a)));return o*o*(3-2*o)}function on(a){return a==="brosse-a-dents"||a==="brosse-a-recurer"}const fo=new T(0,1,0);function es(a,e,t){let o=e-a;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return a+o*t}class an{constructor(e,t,o,s,i,r){this.camera=s,this.field=i,this.particules=r,this.avatar=new Co(e,t,o),this.pos.y=k(this.pos.x,this.pos.z)}avatar;pos=new T(0,0,19);batiment=null;garage=null;dedans=!1;vx=0;vz=0;vy=0;auSol=!0;yaw=0;camYaw=0;camPitch=.12;camDist=4.6;vue="troisieme";zoom=1;camYawVue=0;obstacle=null;surPas=null;surSaut=null;surAtterrissage=null;pasVus=0;distLibre=1e9;decalage=0;distBase=4.6;yeux=new T(0,1.6,0);yeuxValides=!1;cible=new T;dir=new T;enVehicule=!1;vehPos=new T;vehYaw=Math.PI;vehVitesse=0;vehDistance=0;outil=null;rayon=.14;vitesse=1.4;sacPlein=!1;brosse=!1;veutBrosser=!1;enMouvement=!1;vitesseSol=0;tete=new T;tetePrec=new T;teteValide=!1;accPart=0;tmp=new T;haut=new T(0,1,0);qHaut=new ne;qTmp=new ne;dTete={x:0,y:0,z:1};dTetePrec={x:0,y:0,z:1};placer(e,t,o){this.pos.set(e,this.solEn(e,t),t),this.yaw=o,this.camYaw=o,this.vx=this.vz=this.vy=0,this.auSol=!0,this.teteValide=!1}setOutil(e,t,o){const s=!this.outil||this.outil.id!==e.id;if(this.outil=e,this.rayon=t,this.vitesse=o,!s)return;const i=this.enVehicule;if(i&&this.descendre(),this.avatar.setOutil(e.id),this.teteValide=!1,us(e.id)){const r=i?this.vehPos:this.pos;if(this.vehVitesse=0,!i&&this.garage&&this.batiment?.contient(r.x,r.z)){this.vehPos.set(this.garage.x,k(this.garage.x,this.garage.z),this.garage.z),this.vehYaw=this.garage.yaw;return}this.vehPos.set(r.x,k(r.x,r.z),r.z),this.vehYaw=i?this.vehYaw:this.yaw,this.monter()}}monter(){this.avatar.vehicule&&(this.enVehicule=!0,this.avatar.setAssis(!0),this.teteValide=!1)}descendre(){if(!this.enVehicule)return;this.enVehicule=!1,this.avatar.setAssis(!1);const e=this.outil?.id==="camion-aspirateur"?2.2:1.4;this.pos.copy(this.vehPos),this.deplacer(this.pos,-Math.cos(this.vehYaw)*e,Math.sin(this.vehYaw)*e,ho,en),this.pos.y=this.solEn(this.pos.x,this.pos.z),this.yaw=this.vehYaw,this.vehVitesse=0,this.teteValide=!1}distanceVehicule(){return this.avatar.vehicule?this.enVehicule?0:Math.hypot(this.pos.x-this.vehPos.x,this.pos.z-this.vehPos.z):1/0}sauter(){this.enVehicule||!this.auSol||(this.vy=2.7,this.auSol=!1,this.surSaut?.())}setVue(e){this.vue=e}basculerVue(){this.vue=this.vue==="premiere"?"troisieme":"premiere"}zoomer(e){const t=sn(this.vue,this.zoom,e,mo/Math.max(1,this.distBase));this.vue=t.vue,this.zoom=t.zoom}get dansCasque(){return this.camDist<tn}centre(){return this.enVehicule?this.vehPos:this.pos}update(e,t,o,s,i){this.camYaw+=o.dYaw;const r=this.vue==="premiere"?-1.3:-.35,n=this.vue==="premiere"?1.35:this.camDist>60?1.55:1.25;let h=this.camPitch+o.dPitch;const m=1-Math.exp(-e*10);h<r?h=this.camPitch<r?Math.min(r,this.camPitch+(r-this.camPitch)*m):r:h>n&&(h=this.camPitch>n?Math.max(n,this.camPitch+(n-this.camPitch)*m):n),this.camPitch=h,o.dYaw=o.dPitch=0;const u=this.outil,c=!!u&&(this.enVehicule?u.vehicule:!u.vehicule&&!!this.avatar.tenu);this.veutBrosser=o.brosser&&c,this.enVehicule?this.conduire(e,o,s):this.marcher(e,o,s),this.brosse=this.veutBrosser&&this.auSol&&!this.sacPlein,this.majHaut();const d=this.avatar;if(this.enVehicule&&d.vehicule?(d.vehicule.group.position.copy(this.vehPos),this.orienter(d.vehicule.group.quaternion,this.vehYaw),d.vehicule.rouler(this.vehDistance)):(d.astro.group.position.copy(this.pos),this.orienter(d.astro.group.quaternion,this.yaw),d.vehicule&&(d.vehicule.group.position.copy(this.vehPos),this.orienter(d.vehicule.group.quaternion,this.vehYaw))),d.animer(t,this.vitesseSol,this.veutBrosser&&this.auSol),(this.enVehicule&&d.vehicule?d.vehicule.group:d.astro.group).updateMatrixWorld(!0),d.pasFaits!==this.pasVus&&(this.pasVus=d.pasFaits,this.auSol&&!this.enVehicule&&this.surPas?.()),this.brosse){const p=this.centre(),f=this.enVehicule?this.vehYaw:this.yaw;let b=d.positionTete(this.tete);if(b&&Math.hypot(this.tete.x-p.x,this.tete.z-p.z)>7&&(b=!1),!b&&u){const y=pr[u.id];this.tete.set(p.x-Math.sin(f)*y,p.y,p.z-Math.cos(f)*y)}this.teteValide||(this.tetePrec.copy(this.tete),this.teteValide=!0),be(this.tete.x,k(this.tete.x,this.tete.z),this.tete.z,this.dTete),be(this.tetePrec.x,k(this.tetePrec.x,this.tetePrec.z),this.tetePrec.z,this.dTetePrec);const M=this.field.valeurEn(this.dTete)>0||this.field.valeurEn(this.dTetePrec)>0;i([{a:{...this.dTetePrec},b:{...this.dTete},r:this.rayon}]),this.tetePrec.copy(this.tete),M&&this.emettrePoussiere(e)}else this.teteValide=!1;this.placerCamera(e)}emettrePoussiere(e){const t=this.rayon;this.accPart+=(30+t*140)*e*this.particules.densite;const o=Math.floor(this.accPart);if(o<=0)return;this.accPart-=o;const s=k(this.tete.x,this.tete.z);this.particules.emettre(Math.min(o,40),this.tete.x,s+.03,this.tete.z,.35+t*.7,.7+t*.45,Math.min(1.2,t*1.6),s)}marcher(e,t,o){const s=this.camYaw,i=-Math.sin(s),r=-Math.cos(s),n=Math.cos(s),h=-Math.sin(s);let m=i*t.avance+n*t.lateral,u=r*t.avance+h*t.lateral;const c=Math.hypot(m,u);c>1&&(m/=c,u/=c);const d=this.veutBrosser,p=d?this.vitesse:t.courir?5.6:3.1,f=this.auSol?1-Math.exp(-e*9):1-Math.exp(-e*1.2);this.vx+=(m*p-this.vx)*f,this.vz+=(u*p-this.vz)*f,this.deplacer(this.pos,this.vx*e,this.vz*e,ho,o),this.vitesseSol=Math.hypot(this.vx,this.vz),this.enMouvement=this.vitesseSol>.2;const b=this.outil?.id==="balayeuse-poussee";this.vue==="premiere"?this.yaw=es(this.yaw,this.camYaw,1-Math.exp(-e*18)):d&&!b?this.yaw=es(this.yaw,this.camYaw,1-Math.exp(-e*8)):this.vitesseSol>.3&&(this.yaw=es(this.yaw,Math.atan2(-this.vx,-this.vz),1-Math.exp(-e*(b?3:10))));const M=this.batiment;this.dedans=!!M&&M.contient(this.pos.x,this.pos.z);const y=this.dedans&&M?M.sol:k(this.pos.x,this.pos.z);if(this.auSol)this.pos.y=y;else{if(this.vy-=_r*e,this.pos.y+=this.vy*e,this.dedans&&M&&this.vy>0){const S=M.plafond(this.pos.x,this.pos.z)-$r;this.pos.y>S&&(this.pos.y=Math.max(y,S),this.vy=0)}this.pos.y<=y&&(this.pos.y=y,this.surAtterrissage?.(Math.min(1.5,Math.abs(this.vy)/2.7)),this.vy=0,this.auSol=!0,this.dedans||this.particules.emettre(Math.round(10*this.particules.densite),this.pos.x,y+.05,this.pos.z,.9,.5,.5,y))}}conduire(e,t,o){const s=this.veutBrosser?this.vitesse:this.vitesse*1.5,i=t.avance>=0?t.avance*s:t.avance*s*.45;this.vehVitesse+=(i-this.vehVitesse)*(1-Math.exp(-e*(t.avance===0?1.6:1.1)));const r=this.outil?.id==="camion-aspirateur",n=Math.min(1,Math.abs(this.vehVitesse)/2.5)*Math.sign(this.vehVitesse);this.vehYaw-=t.lateral*(r?.75:1.25)*n*e;const h=this.vehVitesse*e;this.deplacer(this.vehPos,-Math.sin(this.vehYaw)*h,-Math.cos(this.vehYaw)*h,r?2.4:1.3,o),this.vehDistance+=h,this.dedans=!1,this.vehPos.y=k(this.vehPos.x,this.vehPos.z),this.pos.copy(this.vehPos),this.vitesseSol=Math.abs(this.vehVitesse),this.enMouvement=this.vitesseSol>.2,this.auSol=!0,this.camYaw=es(this.camYaw,this.vehYaw,1-Math.exp(-e*1.4*Math.min(1,this.vitesseSol/3)))}solEn(e,t){const o=this.batiment;return o&&o.contient(e,t)?o.sol:k(e,t)}deplacer(e,t,o,s,i){const r=this.batiment?rr(Math.hypot(t,o)):1;for(let n=0;n<r;n++)e.x+=t/r,e.z+=o/r,this.collisions(e,s,i)}collisions(e,t,o){for(let s=0;s<o.length;s++){const i=o[s],r=e.x-i.x,n=e.z-i.z,h=i.r+t,m=r*r+n*n;if(m<h*h&&m>1e-8){const u=Math.sqrt(m);e.x=i.x+r/u*h,e.z=i.z+n/u*h}}this.batiment&&nr(e,t,this.batiment.murs,3)}majHaut(){const e=this.centre();mt(e.x,e.y,e.z,this.haut),this.qHaut.setFromUnitVectors(fo,this.haut)}orienter(e,t){e.copy(this.qHaut).multiply(this.qTmp.setFromAxisAngle(fo,t))}transformer(e){const t=this.qTmp2.copy(this.qHaut),o=Math.cos(this.camPitch),s=this.vTmp.set(Math.sin(this.camYaw)*o,Math.sin(this.camPitch),Math.cos(this.camYaw)*o).applyQuaternion(t).transformDirection(e),i=(m,u)=>u.set(-Math.sin(m),0,-Math.cos(m)).applyQuaternion(t).transformDirection(e),r=i(this.yaw,this.vTmp2),n=i(this.vehYaw,this.vTmp3);this.pos.applyMatrix4(e),this.vehPos.applyMatrix4(e),this.tete.applyMatrix4(e),this.tetePrec.applyMatrix4(e),this.tmp.set(this.vx,0,this.vz).transformDirection(e).multiplyScalar(Math.hypot(this.vx,this.vz)),this.vx=this.tmp.x,this.vz=this.tmp.z,this.majHaut();const h=this.qTmp.copy(this.qHaut).invert();s.applyQuaternion(h),this.camPitch=Math.asin(Math.max(-1,Math.min(1,s.y))),this.camYaw=Math.atan2(s.x,s.z),r.applyQuaternion(h),this.yaw=Math.atan2(-r.x,-r.z),n.applyQuaternion(h),this.vehYaw=Math.atan2(-n.x,-n.z),this.camera.position.applyMatrix4(e)}qTmp2=new ne;vTmp=new T;vTmp2=new T;vTmp3=new T;placerCamera(e){const t=this.avatar,o=this.outil?.id,s=this.vue==="premiere";let i=1.55,r=4.6,n=0;this.enVehicule?(i=o==="camion-aspirateur"?3.6:2.2,r=o==="camion-aspirateur"?13:8):this.veutBrosser&&on(o)&&(i=.85,r=3.4,n=.55),this.distBase=r;const h=s?0:Math.min(mo,r*this.zoom);this.camDist+=(h-this.camDist)*(1-Math.exp(-e*6)),s&&this.camDist<.02&&(this.camDist=0);const m=1-qs(.3,1.8,this.camDist);(s||this.zoom>3)&&(n=0),this.decalage+=(n-this.decalage)*(1-Math.exp(-e*3)),t.setPremierePersonne(this.dansCasque);const u=this.enVehicule?this.vehPos:t.astro.group.position;t.positionYeux(this.tmp),this.tmp.sub(u),this.tmp.x*=.3,this.tmp.z*=.3,this.yeuxValides?this.yeux.lerp(this.tmp,1-Math.exp(-e*12)):(this.yeux.copy(this.tmp),this.yeuxValides=!0);const c=this.cible.set(u.x+this.yeux.x*m,u.y+i+(this.yeux.y-i)*m,u.z+this.yeux.z*m),d=-.35+1.3*qs(30,320,this.camDist)+.6*qs(320,1500,this.camDist),p=Math.max(this.camPitch,d),f=this.camYaw+this.decalage;this.camYawVue=f;const b=Math.cos(p),M=this.dir.set(Math.sin(f)*b,Math.sin(p),Math.cos(f)*b).applyQuaternion(this.qHaut);let y=this.camDist;if(this.obstacle&&y>.3){const w=Math.min(y,this.obstacle(c,M,y));w<this.distLibre?this.distLibre=w:this.distLibre+=(w-this.distLibre)*(1-Math.exp(-e*4)),y=Math.min(y,Math.max(.3,this.distLibre))}else this.distLibre=y;const S=this.camera.position;S.set(c.x+M.x*y,c.y+M.y*y,c.z+M.z*y);let N=!1;if(y>.3)for(let w=0;w<6;w++){const L=this.solEn(S.x,S.z)+.35;if(S.y>=L)break;N=!0,y*=.8,S.set(c.x+M.x*y,Math.max(c.y+M.y*y,L),c.z+M.z*y)}N?this.tmp.copy(c):this.tmp.set(S.x-M.x,S.y-M.y,S.z-M.z),this.camera.up.copy(this.haut),this.camera.lookAt(this.tmp);const W=this.dansCasque?.05:Math.max(.12,Math.min(200,y*.02));Math.abs(W-this.camera.near)>this.camera.near*.05&&(this.camera.near=W,this.camera.updateProjectionMatrix())}pointDevant(e){const t=this.centre(),o=this.enVehicule?this.vehYaw:this.yaw;return{x:t.x-Math.sin(o)*e,z:t.z-Math.cos(o)*e}}capLocal(e){const t=this.enVehicule?this.vehYaw:this.yaw;return e.set(-Math.sin(t),0,-Math.cos(t)).applyQuaternion(this.qHaut)}dispose(){this.avatar.dispose()}}const Gs=256,rn=320,nn=2.2;class ln{constructor(e,t,o){this.astre=t,this.liste=Ka(t,o),this.ramasse=new Uint8Array(this.liste.length),this.geo=new Ao(1,0);const s=this.geo.attributes.position;for(let i=0;i<s.count;i++){const r=s.getY(i),n=.85+.3*Math.abs(Math.sin(i*12.9898)*.5);s.setXYZ(i,s.getX(i)*n,r*.62,s.getZ(i)*(1.7-n))}this.geo.computeVertexNormals(),this.mat=new Y({color:new U(.62,.58,.54),roughness:.55,metalness:.05,emissive:new U(.05,.035,.015)}),this.mesh=new ds(this.geo,this.mat,Gs);for(let i=0;i<Gs;i++)this.proches.push({id:-1,x:0,z:0});this.mesh.name="cailloux",this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,e.add(this.mesh),this.reconstruire()}mesh;liste;ramasse;cle="";proches=[];nbProches=0;geo;mat;setRamasses(e){if(e!==this.cle){this.cle=e;for(let t=0;t<this.liste.length;t++)this.ramasse[t]=Za(e,t)?1:0;this.reconstruire()}}rebaser(){this.reconstruire()}reconstruire(){const e=new ye,t=new ne,o=new ne,s=new T,i=new T,r=new T,n=new T(0,1,0),h=Tr().o,m=rn/this.astre.rayonM,u=1-m*m/2;let c=0;for(const d of this.liste){if(this.ramasse[d.id]||c>=Gs||d.x*h.x+d.y*h.y+d.z*h.z<u)continue;Bt(d,s),mt(s.x,s.y,s.z,r);const p=this.proches[c];p.id=d.id,p.x=s.x,p.z=s.z,s.addScaledVector(r,d.taille*.25),t.setFromUnitVectors(n,r).multiply(o.setFromAxisAngle(n,d.yaw)),i.set(d.taille,d.taille,d.taille),this.mesh.setMatrixAt(c++,e.compose(s,t,i))}this.nbProches=c,this.mesh.count=c,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.computeBoundingSphere()}proche(e,t,o=nn){let s=-1,i=o*o;for(let r=0;r<this.nbProches;r++){const n=this.proches[r],h=n.x-e,m=n.z-t,u=h*h+m*m;u<i&&(i=u,s=n.id)}return s}dispose(){this.mesh.removeFromParent(),this.mesh.dispose(),this.geo.dispose(),this.mat.dispose()}}class po{constructor(e,t){this.o=t;const o=t.max;this.pos=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.sol=new Float32Array(o),this.etat=new Float32Array(o*2),this.vie=new Float32Array(o),this.age=new Float32Array(o);for(let s=0;s<o;s++)this.etat[s*2]=2,this.pos[s*3+1]=-1e3;this.geo=new Qe,this.geo.setAttribute("position",new se(this.pos,3)),this.geo.setAttribute("etat",new se(this.etat,2)),this.mat=new ie({uniforms:{uCouleur:{value:t.couleur},uOpacite:{value:t.opacite},uCroissance:{value:t.croissance},uEchelle:{value:600}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:t.additif?De:ra}),this.points=new ii(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points)}points;pos;vel;sol;etat;vie;age;geo;mat;prochain=0;vivants=0;graine=1;densite=1;setEchelle(e){this.mat.uniforms.uEchelle.value=e*.9}rnd(){return this.graine=this.graine*1664525+1013904223>>>0,this.graine/4294967296}emettre(e,t,o,s,i,r,n,h){const m=this.o;for(let u=0;u<e;u++){const c=this.prochain;this.prochain=(this.prochain+1)%m.max;const d=this.rnd()*Math.PI*2,p=i*(.3+.7*this.rnd());this.pos[c*3]=t+(this.rnd()-.5)*n,this.pos[c*3+1]=o+this.rnd()*n*.3,this.pos[c*3+2]=s+(this.rnd()-.5)*n,this.vel[c*3]=Math.cos(d)*p,this.vel[c*3+1]=r*(.6+.8*this.rnd()),this.vel[c*3+2]=Math.sin(d)*p,this.sol[c]=h,this.vie[c]=m.vie[0]+(m.vie[1]-m.vie[0])*this.rnd(),this.age[c]=0,this.etat[c*2]=0,this.etat[c*2+1]=m.taille[0]+(m.taille[1]-m.taille[0])*this.rnd()}this.vivants=m.max}emettreDir(e,t,o,s,i,r,n,h,m,u){const c=this.prochain;this.emettre(e,t,o,s,n,h,m,u);for(let d=0;d<e;d++){const p=(c+d)%this.o.max;this.vel[p*3]+=i,this.vel[p*3+2]+=r}}update(e){if(this.vivants===0)return;const t=this.o,o=t.freinage>0?Math.exp(-t.freinage*e):1;let s=0;for(let i=0;i<t.max;i++){if(this.etat[i*2]>1)continue;s++;const r=this.age[i]+=e,n=i*3;this.vel[n+1]-=t.gravite*e,o!==1&&(this.vel[n]*=o,this.vel[n+1]*=o,this.vel[n+2]*=o),this.pos[n]+=this.vel[n]*e,this.pos[n+1]+=this.vel[n+1]*e,this.pos[n+2]+=this.vel[n+2]*e;let h=r/this.vie[i];this.pos[n+1]<this.sol[i]&&(this.pos[n+1]=this.sol[i],this.vel[n]=this.vel[n+1]=this.vel[n+2]=0,h=Math.max(h,.8),this.age[i]=h*this.vie[i]),this.etat[i*2]=h}this.vivants=s,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.etat.needsUpdate=!0}transformer(e){if(this.vivants===0)return;const t=e.elements;for(let o=0;o<this.o.max;o++){if(this.etat[o*2]>1)continue;const s=o*3,i=this.pos[s],r=this.pos[s+1],n=this.pos[s+2],h=t[1]*i+t[5]*r+t[9]*n+t[13];this.pos[s]=t[0]*i+t[4]*r+t[8]*n+t[12],this.pos[s+1]=h,this.pos[s+2]=t[2]*i+t[6]*r+t[10]*n+t[14],this.sol[o]+=h-r;const m=this.vel[s],u=this.vel[s+1],c=this.vel[s+2];this.vel[s]=t[0]*m+t[4]*u+t[8]*c,this.vel[s+1]=t[1]*m+t[5]*u+t[9]*c,this.vel[s+2]=t[2]*m+t[6]*u+t[10]*c}this.geo.attributes.position.needsUpdate=!0}dispose(){this.points.removeFromParent(),this.geo.dispose(),this.mat.dispose()}}const Xs=1400,qe=56,Ct=18,Ys=5,nt=9;class cn{constructor(e,t,o=!1){this.calque=t,this.mouvementReduit=o;for(let s=0;s<Xs;s++)this.pos[s*3]=(this.rnd()-.5)*qe,this.pos[s*3+1]=this.rnd()*Ct,this.pos[s*3+2]=(this.rnd()-.5)*qe;this.geo.setAttribute("position",new se(this.pos,3)),this.mat=new ie({uniforms:{uOpacite:{value:0},uEchelle:{value:600},uCouleur:{value:new U(.75,.82,1)}},vertexShader:`
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
        }`,transparent:!0,depthWrite:!1,blending:De}),this.points=new ii(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=6,this.points.visible=!1,this.geoArcs.setAttribute("position",new se(this.posArcs,3)),this.arcs=new na(this.geoArcs,this.matArcs),this.arcs.frustumCulled=!1,this.arcs.renderOrder=7,this.arcs.visible=!1,e.add(this.points,this.arcs)}pos=new Float32Array(Xs*3);geo=new Qe;mat;points;posArcs=new Float32Array(Ys*nt*2*3);geoArcs=new Qe;matArcs=new la({color:new U(.7,.85,1.6),transparent:!0,opacity:0,blending:De,depthWrite:!1,toneMapped:!1});arcs;vieArcs=new Float32Array(Ys);cible=0;courant=0;opaciteCalque=0;graine=7;t=0;rnd(){return this.graine=this.graine*1664525+1013904223>>>0,this.graine/4294967296}setEchelle(e){this.mat.uniforms.uEchelle.value=e*.9}set(e){this.cible=Math.max(0,Math.min(1,Number.isFinite(e)?e:0))}nouvelArc(e,t,o){const s=this.rnd()*Math.PI*2,i=8+this.rnd()*22;let r=t.x+Math.cos(s)*i,n=t.z+Math.sin(s)*i,h=o(r,n);const m=.5+this.rnd()*.7;let u=e*nt*6;for(let c=0;c<nt;c++)this.posArcs[u++]=r,this.posArcs[u++]=h,this.posArcs[u++]=n,r+=(this.rnd()-.5)*.9,n+=(this.rnd()-.5)*.9,h+=m*(.6+this.rnd()*.8),this.posArcs[u++]=r,this.posArcs[u++]=h,this.posArcs[u++]=n;this.vieArcs[e]=.08+this.rnd()*.18}update(e,t,o){const s=1-Math.exp(-e*1.5);this.courant+=(this.cible-this.courant)*s,this.cible===0&&this.courant<.01&&(this.courant=0);const i=this.courant,r=Math.round(i*240)/1e3;if(this.calque&&r!==this.opaciteCalque&&(this.opaciteCalque=r,this.calque.style.opacity=String(r)),this.points.visible=i>0,this.arcs.visible=i>.3&&!this.mouvementReduit,i<=0)return;this.t+=e,this.mat.uniforms.uOpacite.value=.75*i;const n=(9+Math.sin(this.t*.7)*4)*e,h=(2.5+Math.cos(this.t*.45)*2)*e,m=-.6*e,u=qe/2;for(let d=0;d<Xs;d++){const p=d*3;let f=this.pos[p]+n,b=this.pos[p+1]+m,M=this.pos[p+2]+h;const y=f-t.x,S=M-t.z;y>u?f-=qe:y<-u&&(f+=qe),S>u?M-=qe:S<-u&&(M+=qe);const N=t.y-Ct*.4;b<N?b+=Ct:b>N+Ct&&(b-=Ct),this.pos[p]=f,this.pos[p+1]=b,this.pos[p+2]=M}if(this.geo.attributes.position.needsUpdate=!0,!this.arcs.visible)return;let c=!1;for(let d=0;d<Ys;d++)if(this.vieArcs[d]-=e,!(this.vieArcs[d]>0)){if(this.rnd()<.35){this.vieArcs[d]=.3+this.rnd()*.6;const p=d*nt*6;this.posArcs.fill(0,p,p+nt*6);for(let f=p+1;f<p+nt*6;f+=3)this.posArcs[f]=-1e3}else this.nouvelArc(d,t,o);c=!0}c&&(this.geoArcs.attributes.position.needsUpdate=!0),this.matArcs.opacity=i*(.55+.45*Math.abs(Math.sin(this.t*37)))}dispose(){this.points.removeFromParent(),this.arcs.removeFromParent(),this.geo.dispose(),this.mat.dispose(),this.geoArcs.dispose(),this.matArcs.dispose(),this.calque&&(this.calque.style.opacity="0")}}const ks=16*Ja,ts=14;function hn(){const a=new zo(.22,.32,ts,10,1,!0).toNonIndexed();a.translate(0,ts/2,0);const e=new ca(.75,0);e.scale(1,1.4,1),e.translate(0,ts+1.4,0);const t=a.attributes.position.array,o=e.attributes.position.array,s=new Float32Array(t.length+o.length);s.set(t,0),s.set(o,t.length);const i=new Float32Array(s.length);for(let n=0;n<s.length;n+=3){const h=s[n+1],m=n<t.length?.9*(1-h/ts)+.1:1.4;i[n]=m,i[n+1]=m,i[n+2]=m}a.dispose(),e.dispose();const r=new Qe;return r.setAttribute("position",new se(s,3)),r.setAttribute("color",new se(i,3)),r.computeBoundingSphere(),r}class un{mesh;geo;mat;liste=[];haut=new T;qHaut=new ne;couleurs;m=new ye;q=new ne;p=new T;s=new T(1,1,1);axe=new T(0,1,0);c=new U;cle="";constructor(e){this.geo=hn(),this.mat=new si({vertexColors:!0,transparent:!0,blending:De,depthWrite:!1,toneMapped:!1}),this.mesh=new ds(this.geo,this.mat,ks),this.mesh.name="pings",this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,this.mesh.setColorAt(0,new U(1,1,1)),this.couleurs={nettoyer:new U(_t.nettoyer),ici:new U(_t.ici),danger:new U(_t.danger),aide:new U(_t.aide)};for(let t=0;t<ks;t++)this.liste.push({d:{x:0,y:0,z:1},x:0,y:0,z:0,a:0,couleur:this.couleurs.ici});e.add(this.mesh)}set(e){let t="";for(const s of e)t+=`${s.de}${s.a}|`;if(t===this.cle)return;this.cle=t;const o=Math.min(ks,e.length);for(let s=0;s<o;s++){const i=e[e.length-o+s],r=this.liste[s];r.d.x=i.x,r.d.y=i.y,r.d.z=i.z,Bt(r.d,this.p),r.x=this.p.x,r.y=this.p.y,r.z=this.p.z,r.a=i.a,r.couleur=this.couleurs[i.genre]??this.couleurs.ici}this.mesh.count=o}rebaser(){for(let e=0;e<this.mesh.count;e++){const t=this.liste[e];Bt(t.d,this.p),t.x=this.p.x,t.y=this.p.y,t.z=this.p.z}}update(e,t){const o=this.mesh.count;if(o){for(let s=0;s<o;s++){const i=this.liste[s],r=(t-i.a)/1e3,n=Math.max(0,Math.min(1,r/.4))*Math.max(0,Math.min(1,(Qa-r)/5));this.qHaut.setFromUnitVectors(this.axe,mt(i.x,i.y,i.z,this.haut)),this.q.setFromAxisAngle(this.axe,e*1.6+s).premultiply(this.qHaut),this.s.set(1,.6+.4*n,1),this.p.set(i.x,i.y,i.z),this.mesh.setMatrixAt(s,this.m.compose(this.p,this.q,this.s)),this.c.copy(i.couleur).multiplyScalar(n),this.mesh.setColorAt(s,this.c)}this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}}dispose(){this.mesh.removeFromParent(),this.mesh.dispose(),this.geo.dispose(),this.mat.dispose()}}const ls={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _e{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dn=new ha(-1,1,1,-1,0,1);class mn extends Qe{constructor(){super(),this.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bi([0,2,0,0,2,0],2))}}const fn=new mn;class ms{constructor(e){this._mesh=new Ie(fn,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dn)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Oo extends _e{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ie?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ke.clone(e.uniforms),this.material=new ie({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ms(this.material)}render(e,t,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vo extends _e{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,o){const s=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let r,n;this.inverse?(r=0,n=1):(r=1,n=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),i.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),i.buffers.stencil.setClear(n),i.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(s.EQUAL,1,4294967295),i.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),i.buffers.stencil.setLocked(!0)}}class pn extends _e{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vn{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const o=e.getSize(new G);this._width=o.width,this._height=o.height,t=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ze}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Oo(ls),this.copyPass.material.blending=ua,this.timer=new da}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let o=!1;for(let s=0,i=this.passes.length;s<i;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),r.needsSwap){if(o){const n=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}vo!==void 0&&(r instanceof vo?o=!0:r instanceof pn&&(o=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const o=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(o,s),this.renderTarget2.setSize(o,s);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(o,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xn extends _e{constructor(e,t,o=null,s=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=o,this.clearColor=s,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new U}render(e,t,o){const s=e.autoClear;e.autoClear=!1;let i,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const gn={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ft extends _e{constructor(e,t=1,o,s){super(),this.strength=t,this.radius=o,this.threshold=s,this.resolution=e!==void 0?new G(e.x,e.y):new G(256,256),this.clearColor=new U(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(i,r,{type:Ze,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const c=new Ke(i,r,{type:Ze,depthBuffer:!1});c.texture.name="UnrealBloomPass.h"+u,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);const d=new Ke(i,r,{type:Ze,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),i=Math.round(i/2),r=Math.round(r/2)}const n=gn;this.highPassUniforms=ke.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ie({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];i=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new G(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ke.clone(ls.uniforms),this.blendMaterial=new ie({uniforms:this.copyUniforms,vertexShader:ls.vertexShader,fragmentShader:ls.fragmentShader,premultipliedAlpha:!0,blending:De,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new U,this._oldClearAlpha=1,this._basic=new si,this._fsQuad=new ms(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let o=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(o,s);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(o,s),this.renderTargetsVertical[i].setSize(o,s),this.separableBlurMaterials[i].uniforms.invSize.value=new G(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2)}render(e,t,o,s,i){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=o.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=o.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let n=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[h].uniforms.direction.value=ft.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=ft.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),n=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(o),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[],o=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(o*o))/o);const s=[],i=[];for(let r=1;r<e;r+=2){const n=t[r],h=r+1<e?t[r+1]:0,m=n+h;s.push((r*n+(r+1)*h)/m),i.push(m)}return new ie({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new G(.5,.5)},direction:{value:new G(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:i}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ie({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ft.BlurDirectionX=new G(1,0);ft.BlurDirectionY=new G(0,1);const ss={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`},is={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`},Ks={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`};class bn extends _e{constructor(){super(),this._edgesRT=new Ke(1,1,{depthBuffer:!1,type:Ze}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Ke(1,1,{depthBuffer:!1,type:Ze}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Ui,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Et,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const o=new Image;o.src=this._getSearchTexture(),o.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Ui,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=o,this._searchTexture.magFilter=lt,this._searchTexture.minFilter=lt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=ke.clone(ss.uniforms),this._materialEdges=new ie({defines:Object.assign({},ss.defines),uniforms:this._uniformsEdges,vertexShader:ss.vertexShader,fragmentShader:ss.fragmentShader}),this._uniformsWeights=ke.clone(is.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new ie({defines:Object.assign({},is.defines),uniforms:this._uniformsWeights,vertexShader:is.vertexShader,fragmentShader:is.fragmentShader}),this._uniformsBlend=ke.clone(Ks.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new ie({uniforms:this._uniformsBlend,vertexShader:Ks.vertexShader,fragmentShader:Ks.fragmentShader}),this._fsQuad=new ms(null)}render(e,t,o){this._uniformsEdges.tDiffuse.value=o.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=o.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Mn={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new G(1/1024,1/512)}},vertexShader:`

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

		}`};class yn extends Oo{constructor(){super(Mn)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}}const os={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class wn extends _e{constructor(){super(),this.isOutputPass=!0,this.uniforms=ke.clone(os.uniforms),this.material=new ma({name:os.name,uniforms:this.uniforms,vertexShader:os.vertexShader,fragmentShader:os.fragmentShader}),this._fsQuad=new ms(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,o){this.uniforms.tDiffuse.value=o.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},fa.getTransfer(this._outputColorSpace)===pa&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===va?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Po?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ya&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function xo(a){switch(a){case"basse":return{pixelRatioMax:1,echelle:.75,ombre:1024,ombreRayon:1,bloom:!1,aa:"aucun",terrain:7,terrainFacteur:1.35,terrainMailles:320,atlas:8,particules:.4,anisotropie:1,detail:0};case"moyenne":return{pixelRatioMax:1,echelle:1,ombre:2048,ombreRayon:2,bloom:!0,aa:"fxaa",terrain:8,terrainFacteur:1.5,terrainMailles:448,atlas:8,particules:.7,anisotropie:4,detail:1};case"haute":return{pixelRatioMax:1.5,echelle:1,ombre:2048,ombreRayon:3,bloom:!0,aa:"smaa",terrain:8,terrainFacteur:1.75,terrainMailles:512,atlas:16,particules:1,anisotropie:8,detail:1};case"ultra":return{pixelRatioMax:2,echelle:1,ombre:4096,ombreRayon:3,bloom:!0,aa:"smaa",terrain:9,terrainFacteur:1.9,terrainMailles:768,atlas:16,particules:1.25,anisotropie:16,detail:1}}}const Sn=3840*2160;function An(a,e,t,o,s=Sn){const i=Math.max(1,e),r=Math.max(1,t);let n=Number.isFinite(a)&&a>0?a:1;return Number.isFinite(o)&&o>0&&(n=Math.min(n,o/Math.max(i,r))),n=Math.min(n,Math.sqrt(s/(i*r))),Math.max(.25,n)}function zn(a,e){return Number.isFinite(e)&&e>0?Math.min(a,e):a}function Tn(a,e,t,o){const s=new wa({antialias:!1,powerPreference:"high-performance",stencil:!1});s.outputColorSpace=Je,s.toneMapping=Po,s.toneMappingExposure=1,s.shadowMap.enabled=!0,s.shadowMap.type=Sa,s.info.autoReset=!1;const i=s.domElement;i.style.display="block",i.style.width="100%",i.style.height="100%",i.style.outline="none",i.tabIndex=0,a.appendChild(i);const r=s.getContext(),n=Number(r.getParameter(r.MAX_RENDERBUFFER_SIZE))||0,h=s.capabilities.maxTextureSize||0,m=Math.max(256,Math.min(h||4096,n||h||4096));let u=o,c=Math.max(1,a.clientWidth||window.innerWidth),d=Math.max(1,a.clientHeight||window.innerHeight),p=0;const f=new Ke(1,1,{type:Ze,samples:0}),b=new vn(s,f),M=new xn(e,t),y=new ft(new G(c,d),.32,.55,.92),S=new bn,N=new yn,W=new wn;b.addPass(M),b.addPass(y),b.addPass(W),b.addPass(S),b.addPass(N);function w(O){u=O,y.enabled=O.bloom,S.enabled=O.aa==="smaa",N.enabled=O.aa==="fxaa",p=0,L(c,d)}function L(O,I){const J=window.devicePixelRatio||1,F=An(Math.min(J,u.pixelRatioMax)*u.echelle,O,I,m);O=Math.max(1,O),I=Math.max(1,I),!(O===c&&I===d&&F===p)&&(c=O,d=I,p=F,s.setPixelRatio(F),s.setSize(c,d,!1),b.setPixelRatio(F),b.setSize(c,d))}return w(o),{renderer:s,coteMax:m,appliquer:w,taille:L,rendre(){s.setRenderTarget(null),s.setScissorTest(!1),s.setViewport(0,0,c,d),b.render()},dispose(){y.dispose(),S.dispose(),N.dispose(),W.dispose(),b.dispose(),f.dispose(),s.dispose(),s.forceContextLoss(),i.remove()}}}const Nt=16,j=Nt+3,Q=j*j,Dt=(j-1)*(j-1)*6,Pn=2,Cn=75,go=80,Dn=60,En=`
attribute float aMaille;
attribute vec2 aUv;
uniform sampler2D uCentres;
varying vec3 vPosM;
varying vec3 vNorM;
varying vec3 vFaceUv;
`,bo=`
vec4 lmCentre = texelFetch(uCentres, ivec2(int(aMaille + 0.5), 0), 0);
vec3 transformed = vec3(position) + lmCentre.xyz;
`,Ln=`
uniform sampler2D uAtlas;
uniform sampler2D uNatureA;
uniform sampler2D uIndex;
uniform sampler2D uCarte;
uniform float uTpf;
uniform float uT;
uniform float uAtlasCote;
uniform sampler2D uSaleC;
uniform sampler2D uSaleN;
uniform sampler2D uPropreC;
uniform sampler2D uPropreN;
uniform float uDetail;
uniform vec2 uAntiSoleil;
uniform vec4 uSolA;
uniform vec2 uSolO;
uniform vec3 uTeinteRef;
varying vec3 vPosM;
varying vec3 vNorM;
varying vec3 vFaceUv;

float lmH12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 lmH22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float lmBruit(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(lmH12(i), lmH12(i + vec2(1.0, 0.0)), f.x), mix(lmH12(i + vec2(0.0, 1.0)), lmH12(i + vec2(1.0)), f.x), f.y);
}
// Case de l'atlas de la tuile courante (en cases).
vec2 lmCase;
// Masque brut de la tuile en « c » (cellules, 0..T) : les lectures sont bornées à la tuile (pas de bavure de la case voisine).
float lmTex(vec2 c) {
  c = clamp(c, vec2(0.5), vec2(uT - 0.5));
  return textureLod(uAtlas, (lmCase * uT + c) / (uAtlasCote * uT), 0.0).r;
}
// Masque lissé (B-spline cubique en 4 lectures bilinéaires) : contours ronds au lieu de marches.
float lmMasqueLisse(vec2 c) {
  vec2 t = c - 0.5;
  vec2 i = floor(t);
  vec2 f = t - i;
  vec2 f2 = f * f; vec2 f3 = f2 * f;
  vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0;
  vec2 w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0;
  vec2 w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0;
  vec2 w3 = f3 / 6.0;
  vec2 g0 = w0 + w1; vec2 g1 = w2 + w3;
  vec2 h0 = i - 1.0 + w1 / g0 + 0.5;
  vec2 h1 = i + 1.0 + w3 / g1 + 0.5;
  return g0.y * (g0.x * lmTex(vec2(h0.x, h0.y)) + g1.x * lmTex(vec2(h1.x, h0.y)))
       + g1.y * (g0.x * lmTex(vec2(h0.x, h1.y)) + g1.x * lmTex(vec2(h1.x, h1.y)));
}
// Sale (0..1) en UNE lecture bilinéaire : sert au gradient.
float lmSale(vec2 c) { return smoothstep(0.3, 0.6, lmTex(c)); }
`,On=`
// Coordonnées des motifs : le plan local, ancré au sol par une similitude (continue d'un rebasage à l'autre).
vec2 pw = mat2(uSolA.xy, uSolA.zw) * vPosM.xz + uSolO;
float distCam = length(vPosM - cameraPosition);
float detailProche = uDetail * (1.0 - smoothstep(18.0, 45.0, distCam));
float fwP = length(fwidth(pw));
vec2 gradM = vec2(0.0);
vec2 pertStries = vec2(0.0);
float bord = 0.0;
float stries = 0.0;
// Tuile de poussière sous le fragment, et sa case dans l'atlas (0 : pas chargée, on lit la carte orbitale).
float faceF = floor(vFaceUv.x + 0.5);
vec2 tuv = clamp(vFaceUv.yz, 0.0, 1.0) * uTpf;
// Dérivées à l'écran des cellules et des motifs (hors de toute branche), pour ramener le gradient du masque dans le plan des motifs.
vec2 jx = dFdx(tuv) * uT; vec2 jy = dFdy(tuv) * uT;
vec2 px = dFdx(pw); vec2 py = dFdy(pw);
vec2 tuileF = min(floor(tuv), vec2(uTpf - 1.0));
vec4 idx = texelFetch(uIndex, ivec2(int(faceF * uTpf + tuileF.x), int(tuileF.y)), 0);
float bordFace = 0.5 / uTpf;
vec4 carte = texture2D(uCarte, vec2((faceF + clamp(vFaceUv.y, bordFace, 1.0 - bordFace)) / 6.0, clamp(vFaceUv.z, bordFace, 1.0 - bordFace)));
float sale = 1.0 - carte.a;
float epaisseur = 0.6;
vec2 cel = (tuv - tuileF) * uT;
vec2 celNature = vec2(0.0);
float chargee = step(0.002, idx.r);
if (chargee > 0.5) {
  lmCase = vec2(idx.r * 255.0 - 1.0, idx.g * 255.0);
  float nA = lmBruit(pw * 3.3);
  float nB = lmBruit(pw * 3.3 + 17.0);
  vec2 warp = (vec2(nA, nB) - 0.5) * 1.1;
  float mBrut = lmMasqueLisse(cel + warp);
  sale = smoothstep(0.34, 0.56, mBrut + (lmBruit(pw * 11.0) - 0.5) * 0.08);
  epaisseur = clamp((mBrut - 0.67) / 0.33, 0.0, 1.0);
  // Bourrelet et stries : seulement près de la caméra (au loin ils sont sous le pixel).
  float procheM = 1.0 - smoothstep(45.0, 70.0, distCam);
  if (procheM > 0.0) {
    // Gradient du masque en 4 lectures bilinéaires (bourrelet et sens des stries), ramené dans le plan des motifs.
    float sXp = lmSale(cel + vec2(1.0, 0.0));
    float sXm = lmSale(cel - vec2(1.0, 0.0));
    float sZp = lmSale(cel + vec2(0.0, 1.0));
    float sZm = lmSale(cel - vec2(0.0, 1.0));
    vec2 gCel = vec2(sXp - sXm, sZp - sZm);
    float det = px.x * py.y - px.y * py.x;
    if (abs(det) > 1e-12) {
      // d(cel)/d(pw) : les cellules ne sont pas alignées sur le plan des motifs.
      vec2 dcx = (jx * py.y - jy * px.y) / det;
      vec2 dcy = (jy * px.x - jx * py.x) / det;
      gradM = normalize(vec2(dot(gCel, dcx), dot(gCel, dcy)) + 1e-6) * length(gCel) * procheM;
    }
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
}
// Couleurs : détail proche estompé au loin (évite la répétition et le moiré sur les reliefs).
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
// Teinte de la zone (lissée d'une tuile à l'autre par la carte orbitale).
cSale *= mix(vec3(1.0), carte.rgb / uTeinteRef, 0.7);
vec3 cPropre = texture2D(uPropreC, pw / 2.6).rgb * mix(0.85, 1.08, texture2D(uPropreC, pw / 33.0).g);
cPropre *= vec3(1.22, 1.28, 1.42);
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
// Poussières spéciales : or (paillettes dans la poussière, disparaît au brossage) et glace (bleutée, brillante).
float orSol = 0.0;
float glaceSol = 0.0;
float paillette = 0.0;
if (chargee > 0.5) {
  float demi = uT * 0.5;
  vec2 cn = clamp(cel * 0.5, vec2(0.5), vec2(demi - 0.5));
  vec2 nature = textureLod(uNatureA, (lmCase * demi + cn) / (uAtlasCote * demi), 0.0).rg;
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
}
// Zone verrouillée : hachures de chantier discrètes de près, voile rougeâtre de loin.
if (idx.b > 0.5) {
  float bande = smoothstep(0.3, 0.36, abs(fract((pw.x + pw.y) / 7.0) - 0.5));
  float pres = 1.0 - smoothstep(40.0, 160.0, distCam);
  couleurSol = mix(couleurSol, couleurSol * vec3(1.08, 0.7, 0.6), 0.12 + 0.34 * bande * pres);
}
diffuseColor.rgb *= couleurSol;
`,Nn=`
float roughnessFactor = mix(0.93 - stries * 0.03, 0.98, sale);
roughnessFactor = mix(roughnessFactor, 0.8, step(0.05, caillou));
// Or un peu plus brillant, glace lisse (surtout une fois brossée).
roughnessFactor = mix(roughnessFactor, 0.45, orSol * 0.6 + paillette * 0.4);
roughnessFactor = mix(roughnessFactor, mix(0.18, 0.5, sale), glaceSol);
`,Rn=`
{
  vec3 nG = normalize(vNorM);
  // Axe x des motifs dans le monde (la similitude est une rotation).
  vec3 tG = normalize(vec3(uSolA.x, 0.0, uSolA.z) - nG * dot(nG, vec3(uSolA.x, 0.0, uSolA.z)));
  vec3 bG = cross(tG, nG);
  vec3 nSale = texture2D(uSaleN, pw / 3.1).xyz * 2.0 - 1.0;
  vec3 nSaleF = texture2D(uSaleN, pw / 0.9).xyz * 2.0 - 1.0;
  nSale.xy += nSaleF.xy * 0.6 * detailProche;
  vec3 nPropre = texture2D(uPropreN, pw / 2.6).xyz * 2.0 - 1.0;
  nPropre.xy *= 0.55;
  vec2 pert = mix(nPropre.xy, nSale.xy * 0.9, sale) * (1.0 - 0.75 * loin);
  // Stries, puis bourrelet : le gradient du masque relève la normale au bord de la poussière.
  pert += pertStries;
  pert -= gradM * (0.07 + 0.08 * bord);
  // Cailloux : hémisphères.
  pert += cailN * caillou * 1.6;
  vec3 nW = normalize(nG + tG * pert.x + bG * pert.y);
  normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
}
`,Fn=3,Bn=48,as=512;class Un{constructor(e,t,o,s){this.astre=e,this.lune=t,this.o=s,this.tpf=_a(e),this.T=e.cellulesParTuile,this.niveauTuile=Math.round(Math.log2(this.tpf)),this.R=e.rayonM;const i=s.mailles;this.pos=new Float32Array(i*Q*3),this.nor=new Int16Array(i*Q*3),this.uv=new Float32Array(i*Q*2);const r=new Uint16Array(i*Q);for(let w=0;w<i;w++)r.fill(w,w*Q,(w+1)*Q);this.aPos=new se(this.pos,3),this.aNor=new se(this.nor,3,!0),this.aUv=new se(this.uv,2);const n=new se(r,1);this.motif=In();const h=Math.min(i,192);this.idxProche=new Uint32Array(h*Dt),this.idxLoin=new Uint32Array(i*Dt);const m=w=>{const L=new Qe;return L.setAttribute("position",this.aPos),L.setAttribute("normal",this.aNor),L.setAttribute("aUv",this.aUv),L.setAttribute("aMaille",n),L.setIndex(new se(w,1)),L.setDrawRange(0,0),L};this.geoProche=m(this.idxProche),this.geoLoin=m(this.idxLoin);for(let w=i-1;w>=0;w--)this.libres.push(w);this.centres=new Float64Array(i*3),this.facesMaille=new Uint8Array(i),this.texCentres=new Jt(new Float32Array(i*4),i,1,Fs,Aa),this.texCentres.minFilter=lt,this.texCentres.magFilter=lt,this.texCentres.generateMipmaps=!1,this.texCentres.needsUpdate=!0;const u=this.tpf,c=new Uint8Array(6*u*u*4);this.carte=new Jt(c,6*u,u,Fs,Bs),this.carte.magFilter=Et,this.carte.minFilter=Et,this.carte.generateMipmaps=!1,this.dirTuiles=new Float32Array(t.nbTuiles*3),this.verrou=new Uint8Array(t.nbTuiles);const d=new U,p=Js();for(let w=0;w<t.nbTuiles;w++){d.setHex(e.zones[t.zoneDeTuile(w)].teinte);const L=this.texelTuile(w)*4;c[L]=Math.round(d.r*255),c[L+1]=Math.round(d.g*255),c[L+2]=Math.round(d.b*255),c[L+3]=Math.round(t.propreteTuile(w)*255),t.directionTuile(w,p),this.dirTuiles[w*3]=p.x,this.dirTuiles[w*3+1]=p.y,this.dirTuiles[w*3+2]=p.z}this.carte.needsUpdate=!0,this.index=new Jt(new Uint8Array(6*u*u*4),6*u,u,Fs,Bs),this.index.magFilter=lt,this.index.minFilter=lt,this.index.generateMipmaps=!1,this.index.needsUpdate=!0;const f=s.atlas,b=this.T,M=(w,L,O)=>{const I=new Jt(w,L,L,O,Bs);return I.minFilter=Et,I.magFilter=Et,I.generateMipmaps=!1,I.unpackAlignment=1,I},y=new Uint8Array(f*b*f*b);this.atlas=M(y,f*b,Ii),this.atlas.needsUpdate=!0,this.atlasSource=M(y,f*b,Ii);const S=new Uint8Array(f*(b/2)*f*(b/2)*2);this.nature=M(S,f*(b/2),ji),this.nature.needsUpdate=!0,this.natureSource=M(S,f*(b/2),ji),this.tuileDeCase=new Int32Array(f*f).fill(-1),this.vueCase=new Float64Array(f*f),this.tampon=new Uint8Array(b*b),this.tamponNature=new Uint8Array(b/2*(b/2)*2);const N=new U(e.zones[0].teinte);this.uniforms={uCentres:{value:this.texCentres},uAtlas:{value:this.atlas},uNatureA:{value:this.nature},uIndex:{value:this.index},uCarte:{value:this.carte},uTpf:{value:u},uT:{value:b},uAtlasCote:{value:f},uSaleC:{value:o.saleC},uSaleN:{value:o.saleN},uPropreC:{value:o.propreC},uPropreN:{value:o.propreN},uDetail:{value:1},uAntiSoleil:{value:this.antiSoleil},uSolA:{value:new za(1,0,0,1)},uSolO:{value:this.motifDecal},uTeinteRef:{value:new T(N.r,N.g,N.b)}};const W=this.uniforms;this.materiau=new Y({color:16777215,roughness:1,metalness:0}),this.materiau.onBeforeCompile=w=>{Object.assign(w.uniforms,W),w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
${En}`).replace("#include <begin_vertex>",bo).replace("#include <project_vertex>",`#include <project_vertex>
vPosM = (modelMatrix * vec4(transformed, 1.0)).xyz;
vNorM = normalize(mat3(modelMatrix) * objectNormal);
vFaceUv = vec3(lmCentre.w, aUv);`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
${Ln}`).replace("#include <map_fragment>",On).replace("#include <roughnessmap_fragment>",Nn).replace("#include <normal_fragment_maps>",Rn)},this.materiau.customProgramCacheKey=()=>"sol-astre-v1",this.profondeur=new Ta({depthPacking:Pa}),this.profondeur.onBeforeCompile=w=>{w.uniforms.uCentres=W.uCentres,w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
attribute float aMaille;
uniform sampler2D uCentres;`).replace("#include <begin_vertex>",bo)},this.profondeur.customProgramCacheKey=()=>"sol-astre-ombre-v1",this.meshProche=new Ie(this.geoProche,this.materiau),this.meshProche.name="terrain-proche",this.meshProche.castShadow=!0,this.meshProche.customDepthMaterial=this.profondeur,this.meshLoin=new Ie(this.geoLoin,this.materiau),this.meshLoin.name="terrain-loin",this.meshLoin.castShadow=!1;for(const w of[this.meshProche,this.meshLoin])w.receiveShadow=!0,w.frustumCulled=!1,w.matrixAutoUpdate=!1,this.groupe.add(w);this.groupe.name="terrain",this.groupe.matrixAutoUpdate=!1;for(let w=0;w<6;w++)this.racines.push(this.noeud(w,0,0,0))}groupe=new H;stats={mailles:0,maillesProches:0,construites:0,tuilesChargees:0,niveauMax:0,triangles:0};materiau;profondeur;racines=[];tpf;T;niveauTuile;R;pos;nor;uv;aPos;aNor;aUv;geoProche;geoLoin;idxProche;idxLoin;motif;meshProche;meshLoin;libres=[];centres;facesMaille;texCentres;origine=new T;proches=[];loin=[];prochesAvant=[];loinAvant=[];carte;index;atlas;atlasSource;nature;natureSource;caseDe=new Map;tuileDeCase;vueCase;tampon;tamponNature;modifiees=[];voulues=[];distVoulues=[];dirTuiles;verrou;joueurScan=new T(1e9,0,0);region=new Ca(new G,new G);dest=new G;image=0;budget=0;atlasPret=!1;px=new Float64Array(Q);py=new Float64Array(Q);pz=new Float64Array(Q);nx=new Float32Array(Q*3);dir=Js();cam=new T;camDir=new T;joueur=new T;horizon=Math.PI;uniforms;motifAngle=0;motifDecal=new G;antiSoleil=new G(.84,.53).normalize();soleilLocal=new G(-.84,-.53);texelTuile(e){const t=this.tpf,o=e%t,s=Math.floor(e/t)%t,i=Math.floor(e/(t*t));return s*6*t+i*t+o}noeud(e,t,o,s){const i=1<<t,r=Gi(e,(o+.5)*2/i-1,(s+.5)*2/i-1,this.dir),n=this.R+hs(this.astre,r),h=this.R*1.7/i;return{face:e,niveau:t,ix:o,iy:s,cx:r.x*n,cy:r.y*n,cz:r.z*n,dx:r.x,dy:r.y,dz:r.z,angle:Math.min(Math.PI,h/this.R),taille:h,enfants:null,maille:-1}}setDetail(e){this.uniforms.uDetail.value=e}setZonesOuvertes(e){const t=this.index.image.data;let o=!1;for(let s=0;s<this.lune.nbTuiles;s++){const i=e.includes(this.astre.zones[this.lune.zoneDeTuile(s)].id)?0:255;this.verrou[s]!==i&&(this.verrou[s]=i,t[this.texelTuile(s)*4+2]=i,o=!0)}o&&(this.index.needsUpdate=!0)}rebaser(e,t,o,s){this.origine.copy(e),this.groupe.matrix.fromArray(t.elements),this.groupe.matrixWorldNeedsUpdate=!0,this.groupe.updateMatrixWorld(!0);const i=this.texCentres.image.data;for(let c=0;c<this.o.mailles;c++)this.ecrireCentre(c,i);if(this.texCentres.needsUpdate=!0,o){const c=o.elements,d=Math.atan2(c[8]-c[2],c[0]+c[10]),p=-(c[0]*c[12]+c[1]*c[13]+c[2]*c[14]),f=-(c[8]*c[12]+c[9]*c[13]+c[10]*c[14]),b=Math.cos(this.motifAngle),M=Math.sin(this.motifAngle);this.motifDecal.set(this.motifDecal.x+b*p-M*f,this.motifDecal.y+M*p+b*f),this.motifAngle=(this.motifAngle+d)%(Math.PI*2),Math.abs(this.motifDecal.x)>as&&(this.motifDecal.x-=Math.sign(this.motifDecal.x)*as*2),Math.abs(this.motifDecal.y)>as&&(this.motifDecal.y-=Math.sign(this.motifDecal.y)*as*2)}const r=Math.cos(this.motifAngle),n=Math.sin(this.motifAngle);this.uniforms.uSolA.value.set(r,n,-n,r),this.soleilLocal.set(s.x,s.z);const h=-(r*s.x-n*s.z),m=-(n*s.x+r*s.z),u=Math.hypot(h,m)||1;this.antiSoleil.set(h/u,m/u)}ecrireCentre(e,t){t[e*4]=this.centres[e*3]-this.origine.x,t[e*4+1]=this.centres[e*3+1]-this.origine.y,t[e*4+2]=this.centres[e*3+2]-this.origine.z,t[e*4+3]=this.facesMaille[e]}mettreAJour(e,t,o,s=4){this.image++,this.budget=s,this.stats.construites=0,this.stats.niveauMax=0,this.cam.set(e.x,e.y,e.z),this.joueur.set(t.x,t.y,t.z);const i=Math.max(this.cam.length(),this.R-go+1);this.camDir.copy(this.cam).divideScalar(this.cam.length()||1);const r=this.R-go;this.horizon=Math.acos(Math.min(1,r/i))+Math.acos(r/(this.R+Dn));const n=this.proches,h=this.loin;this.proches=this.prochesAvant,this.loin=this.loinAvant,this.prochesAvant=n,this.loinAvant=h,this.proches.length=0,this.loin.length=0;for(let m=0;m<6;m++)this.visiter(this.racines[m]);this.majIndices(),this.chargerPoussiere(o)}get stable(){return this.budget>0}visible(e){const t=e.dx*this.camDir.x+e.dy*this.camDir.y+e.dz*this.camDir.z,o=this.horizon+e.angle;return o>=Math.PI||t>Math.cos(o)}visiter(e){if(!this.visible(e)){this.elaguer(e),e.maille>=0&&this.rendre(e);return}const t=e.cx-this.cam.x,o=e.cy-this.cam.y,s=e.cz-this.cam.z,i=Math.sqrt(t*t+o*o+s*s);if((e.niveau<Pn||e.niveau<this.o.niveauMax&&i<e.taille*this.o.facteur)&&(e.enfants||this.budget>=4&&this.libres.length>=4)){if(!e.enfants){e.enfants=[];for(let c=0;c<4;c++){const d=this.noeud(e.face,e.niveau+1,e.ix*2+(c&1),e.iy*2+(c>>1));this.construire(d),e.enfants.push(d)}}e.maille>=0&&this.rendre(e);for(let c=0;c<4;c++)this.visiter(e.enfants[c]);return}if(e.enfants){if(e.maille<0&&(this.budget<1||!this.libres.length)){for(let c=0;c<4;c++)this.visiter(e.enfants[c]);return}e.maille<0&&this.construire(e),this.elaguer(e)}if(e.maille<0){if(!this.libres.length)return;this.construire(e)}e.niveau>this.stats.niveauMax&&(this.stats.niveauMax=e.niveau);const n=e.cx-this.joueur.x,h=e.cy-this.joueur.y,m=e.cz-this.joueur.z,u=Math.sqrt(n*n+h*h+m*m);e.niveau>=this.niveauTuile&&u<Cn+e.taille&&(this.proches.length+1)*Dt<=this.idxProche.length?this.proches.push(e.maille):this.loin.push(e.maille)}elaguer(e){if(e.enfants){for(const t of e.enfants)this.elaguer(t),t.maille>=0&&this.rendre(t);e.enfants=null}}rendre(e){this.libres.push(e.maille),e.maille=-1}construire(e){const t=this.libres.pop();if(t===void 0)return;this.budget--,this.stats.construites++,e.maille=t;const{px:o,py:s,pz:i,dir:r,nx:n}=this,h=this.R,m=1<<e.niveau,u=t*Q*3,c=t*Q*2,d=this.pos,p=this.nor,f=this.uv;for(let M=0;M<j;M++){const S=(e.iy+(M-1)/Nt)*2/m-1;for(let N=0;N<j;N++){const W=e.ix+(N-1)/Nt;Gi(e.face,W*2/m-1,S,r);const w=h+hs(this.astre,r),L=M*j+N;o[L]=r.x*w-e.cx,s[L]=r.y*w-e.cy,i[L]=r.z*w-e.cz}}for(let M=1;M<j-1;M++)for(let y=1;y<j-1;y++){const S=M*j+y,N=o[S+1]-o[S-1],W=s[S+1]-s[S-1],w=i[S+1]-i[S-1],L=o[S+j]-o[S-j],O=s[S+j]-s[S-j],I=i[S+j]-i[S-j],J=W*I-w*O,F=w*L-N*I,K=N*O-W*L,oe=Math.sqrt(J*J+F*F+K*K)||1;n[S*3]=J/oe,n[S*3+1]=F/oe,n[S*3+2]=K/oe}const b=e.taille*.06+.2;for(let M=0;M<j;M++){const y=Math.min(j-2,Math.max(1,M)),S=Math.min(1,Math.max(0,(e.iy+(y-1)/Nt)/m));for(let N=0;N<j;N++){const W=Math.min(j-2,Math.max(1,N)),w=M*j+N,L=y*j+W,O=L!==w?b:0;d[u+w*3]=o[L]-e.dx*O,d[u+w*3+1]=s[L]-e.dy*O,d[u+w*3+2]=i[L]-e.dz*O,p[u+w*3]=Math.round(n[L*3]*32767),p[u+w*3+1]=Math.round(n[L*3+1]*32767),p[u+w*3+2]=Math.round(n[L*3+2]*32767),f[c+w*2]=Math.min(1,Math.max(0,(e.ix+(W-1)/Nt)/m)),f[c+w*2+1]=S}}this.aPos.addUpdateRange(u,Q*3),this.aNor.addUpdateRange(u,Q*3),this.aUv.addUpdateRange(c,Q*2),this.aPos.needsUpdate=!0,this.aNor.needsUpdate=!0,this.aUv.needsUpdate=!0,this.centres[t*3]=e.cx,this.centres[t*3+1]=e.cy,this.centres[t*3+2]=e.cz,this.facesMaille[t]=e.face,this.ecrireCentre(t,this.texCentres.image.data),this.texCentres.needsUpdate=!0}majIndices(){this.ecrireIndices(this.proches,this.prochesAvant,this.idxProche,this.geoProche),this.ecrireIndices(this.loin,this.loinAvant,this.idxLoin,this.geoLoin),this.stats.mailles=this.proches.length+this.loin.length,this.stats.maillesProches=this.proches.length,this.stats.triangles=this.stats.mailles*Dt/3}ecrireIndices(e,t,o,s){let i=e.length===t.length&&this.image>1;for(let m=0;i&&m<e.length;m++)e[m]!==t[m]&&(i=!1);if(i)return;const r=this.motif;let n=0;for(let m=0;m<e.length;m++){const u=e[m]*Q;for(let c=0;c<Dt;c++)o[n++]=r[c]+u}const h=s.index;h.clearUpdateRanges(),n>0&&h.addUpdateRange(0,n),h.needsUpdate=!0,s.setDrawRange(0,n)}chargerPoussiere(e){this.atlasPret||(e.initTexture(this.atlas),e.initTexture(this.nature),this.atlasPret=!0);let t=!1,o=!1;const s=this.carte.image.data;this.lune.prendreTuilesModifiees(Bn,this.modifiees);for(let n=0;n<this.modifiees.length;n++){const h=this.modifiees[n];s[this.texelTuile(h)*4+3]=Math.round(this.lune.propreteTuile(h)*255),t=!0;const m=this.caseDe.get(h);m!==void 0&&this.remplirCase(e,m,h,!1)}this.chercherTuiles();let i=0;const r=this.image<=2?this.voulues.length:Fn;for(let n=0;n<this.voulues.length;n++){const h=this.voulues[n],m=this.caseDe.get(h);if(m!==void 0){this.vueCase[m]=this.image;continue}if(i>=r)continue;let u=0;for(let f=1;f<this.vueCase.length;f++)this.vueCase[f]<this.vueCase[u]&&(u=f);if(this.vueCase[u]===this.image)continue;const c=this.index.image.data,d=this.tuileDeCase[u];d>=0&&(this.caseDe.delete(d),c[this.texelTuile(d)*4]=0),this.caseDe.set(h,u),this.tuileDeCase[u]=h,this.vueCase[u]=this.image,this.remplirCase(e,u,h,!0);const p=this.texelTuile(h)*4;c[p]=u%this.o.atlas+1,c[p+1]=Math.floor(u/this.o.atlas),o=!0,i++}t&&(this.carte.needsUpdate=!0),o&&(this.index.needsUpdate=!0),this.stats.tuilesChargees=this.caseDe.size}chercherTuiles(){if(this.joueurScan.distanceToSquared(this.joueur)<9&&this.image>2)return;this.joueurScan.copy(this.joueur);const e=this.o.atlas*this.o.atlas,t=Math.sqrt(e*520/Math.PI)*.86,o=this.joueur.length()||1,s=this.joueur.x/o,i=this.joueur.y/o,r=this.joueur.z/o,n=1-t/this.R*(t/this.R)/2,h=this.dirTuiles,m=this.voulues,u=this.distVoulues;m.length=0,u.length=0;for(let c=0,d=this.lune.nbTuiles;c<d;c++){const p=h[c*3]*s+h[c*3+1]*i+h[c*3+2]*r;if(p<n)continue;let f=m.length;for(m.push(c),u.push(p);f>0&&u[f-1]<p;)m[f]=m[f-1],u[f]=u[f-1],f--;m[f]=c,u[f]=p}m.length>e&&(m.length=e)}remplirCase(e,t,o,s){const i=this.T,r=this.o.atlas,n=t%r,h=Math.floor(t/r);this.lune.remplirTexture(o,this.tampon);const m=this.atlas.image.data,u=r*i;for(let f=0;f<i;f++){let b=(h*i+f)*u+n*i;for(let M=f*i,y=M+i;M<y;M++,b++){const S=this.tampon[M];m[b]=S===0?0:170+(S*85/255|0)}}if(this.region.min.set(n*i,h*i),this.region.max.set(n*i+i,h*i+i),this.dest.set(n*i,h*i),e.copyTextureToTexture(this.atlasSource,this.atlas,this.region,this.dest),!s)return;const c=i/2;this.lune.remplirNature(o,this.tamponNature);const d=this.nature.image.data,p=r*c;for(let f=0;f<c;f++)d.set(this.tamponNature.subarray(f*c*2,(f+1)*c*2),((h*c+f)*p+n*c)*2);this.region.min.set(n*c,h*c),this.region.max.set(n*c+c,h*c+c),this.dest.set(n*c,h*c),e.copyTextureToTexture(this.natureSource,this.nature,this.region,this.dest)}memoire(){return this.pos.byteLength+this.nor.byteLength+this.uv.byteLength+this.idxProche.byteLength+this.idxLoin.byteLength+this.atlas.image.data.byteLength+this.nature.image.data.byteLength+this.carte.image.data.byteLength+this.index.image.data.byteLength}dispose(){this.geoProche.dispose(),this.geoLoin.dispose(),this.materiau.dispose(),this.profondeur.dispose();for(const e of[this.texCentres,this.carte,this.index,this.atlas,this.atlasSource,this.nature,this.natureSource])e.dispose();this.groupe.removeFromParent(),this.groupe.clear()}}function In(){const a=j-1,e=new Uint16Array(a*a*6);let t=0;for(let o=0;o<a;o++)for(let s=0;s<a;s++){const i=o*j+s;e[t++]=i,e[t++]=i+1,e[t++]=i+j,e[t++]=i+1,e[t++]=i+j+1,e[t++]=i+j}return e}const jn=3.5,Wn=2.6,Vn=2,Hn=8,qn=3.5,Mo=64,Gn=600,Xn=55,Yn=75,Zs=6500,kn=[[40,1],[110,2],[260,4],[1/0,6.5]];function yo(a){return{niveauMax:a.terrain,facteur:a.terrainFacteur,atlas:a.atlas,mailles:a.terrainMailles}}const _n=async a=>{const{container:e,field:t}=a,o=t.astre;let s=xo(a.qualite);const i=$a(o);ns(o,i.o,i.x);const n=dt.clone().clone().invert();let h=!0;const m=new T().copy(js(Lt.x,Lt.y,Lt.z,{x:0,y:0,z:0})),u=new T(o.compagnon.x,o.compagnon.y,o.compagnon.z),c=new Wi,d=new Da(62,1,.12,Zs),p=Tn(e,c,d,s),f=p.renderer,[b,M,y]=await Promise.all([Mr(),Ar(),Hr()]),S=y.modeles,N=f.capabilities.getMaxAnisotropy(),W=[b.saleC,b.saleN,b.propreC,b.propreN],w=new Ea(f),L=new Wi,O=new cs(50,32,16),I=new ie({side:To,uniforms:{uSoleil:{value:Lt}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uSoleil; varying vec3 vD;
      void main(){
        float sol = smoothstep(0.05, -0.15, vD.y);
        vec3 c = mix(vec3(0.004, 0.005, 0.01), vec3(0.32, 0.31, 0.3), sol);
        c += vec3(30.0, 28.0, 25.0) * pow(max(dot(vD, uSoleil), 0.0), 600.0);
        gl_FragColor = vec4(c, 1.0);
      }`});L.add(new Ie(O,I));const J=w.fromScene(L,.02);c.environment=J.texture,c.environmentIntensity=.55,O.dispose(),I.dispose(),w.dispose();const F=new La(new U(1,.97,.92),3.4);F.castShadow=!0,F.shadow.bias=-3e-4,F.shadow.normalBias=.06;const K=F.shadow.camera;K.near=1,K.far=420,c.add(F,F.target);const oe=new Oa(new U(2766160),new U(4867648),.55);c.add(oe);const fe=new T,$e=new T;function je(){fe.crossVectors(Math.abs(he.y)>.98?new T(1,0,0):new T(0,1,0),he).normalize(),$e.crossVectors(he,fe).normalize();const l=Math.max(0,Math.min(1,(he.y+.12)/.18)),v=l*l*(3-2*l);F.intensity=3.4*v,oe.intensity=.55+.55*(1-v)}je();let X=45,Ee=1,Le=2048;function et(l=Ee){Ee=l,Le=zn(s.ombre,p.coteMax),X=(s.ombre>=4096?55:s.ombre>=2048?45:32)*l,K.left=-X,K.right=X,K.top=X,K.bottom=-X,K.far=X*9.5,K.updateProjectionMatrix(),F.shadow.radius=s.ombreRayon,F.shadow.normalBias=.06*Math.max(1,l*.75),F.shadow.mapSize.x!==Le&&(F.shadow.mapSize.set(Le,Le),F.shadow.map?.dispose(),F.shadow.map=null)}et();const ue=Gr(c,M,m,u);ue.rebaser(ct),je();const pt={x:0,y:0,z:0},tt={x:0,y:0,z:0},Oe=(l,v)=>js(l.x,l.y+o.rayonM,l.z,v);let st=yo(s),vt=o.zones.map(l=>l.id);function ri(){const l=new Un(o,t,b,st);return l.setDetail(s.detail),l.setZonesOuvertes(vt),l.rebaser(_s,ct,null,he),c.add(l.groupe),l}let $=ri();function ni(){const l=Math.min(N,s.anisotropie);for(const v of W)v.anisotropy!==l&&(v.anisotropy=l,v.needsUpdate=!0)}ni();const ae=new H;ae.name="repere-base",ae.matrixAutoUpdate=!1,c.add(ae);const ee=S.base();ee.position.set(0,k(0,0),0),Ge(ee),ae.add(ee),ae.updateMatrixWorld(!0);const li=ee.getObjectByName("terminal")??null,ci=ee.getObjectByName("rampe")??null,We=new T(4,0,9),pe=new T(-10,0,-7);li?.getWorldPosition(We),ci?.getWorldPosition(pe);const te=ee.userData,de=Array.isArray(te.murs)&&te.interieur&&te.porte&&Array.isArray(te.cercles)?te:null,No=typeof te.animer=="function"?te.animer.bind(te):null,hi=l=>ee.getObjectByName(l)?.getWorldPosition(new T)??null,fs=de?hi("terminal-interieur"):null,ps=de?hi("vestiaire"):null,Ro={benne:te.ecranBenne,boutique:te.ecranBoutique,tableau:te.ecranTableau};let vs=0,ui=!1;const xs=[{x:0,z:0}],di=de?de.cercles:Kn(ee),Ve={x:0,z:0,r:0},gs={x:pe.x,z:pe.z,r:1.6};let Ut=[...di,gs,Ve];const bs=ee.position.clone(),It=bs.clone(),Se=pe.clone();let Ae=null;try{Ae=S.hologramme();const l=ee.getObjectByName("hologramme");l?l.add(Ae.group):(Ae.group.position.set(We.x-3,k(We.x-3,We.z),We.z+.5),ae.add(Ae.group))}catch{Ae=null}const mi=new Array(64).fill(0),fi=[];{const l={x:0,y:0,z:1};for(let v=0;v<8;v++)for(let x=0;x<8;x++)fi.push(t.tuileDe(Xi(o,(x-3.5)*64,(v-3.5)*64,l)))}let Ms=0;const Ne=S.fusee();Ne.group.position.set(pe.x,pe.y+.3,pe.z),Ge(Ne.group),ae.add(Ne.group),Ne.setDecollage(0);const jt=new Na(new U(1,.6,.3),0,90,1.6),Wt=new Ft;Wt.name="ancre-tuyere",Wt.position.set(0,-1.6,0),Wt.add(jt),(Ne.group.getObjectByName("corps")??Ne.group).add(Wt);let ze="sol",Te=0;const ve=new po(c,{max:3e3,gravite:1.62,freinage:0,taille:[.02,.06],croissance:.6,vie:[1.6,2.8],couleur:new U(.42,.405,.39),opacite:.8}),xe=new po(c,{max:700,gravite:-.15,freinage:.55,taille:[1.2,2.6],croissance:2.5,vie:[3.5,6],couleur:new U(.5,.48,.46),opacite:.4});ve.densite=s.particules,xe.densite=s.particules;const xt=new ln(c,o,t.graine),Vt=new un(c),it=document.createElement("div");it.setAttribute("aria-hidden","true"),it.className="monde-tempete",it.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;mix-blend-mode:screen;background:radial-gradient(ellipse 120% 90% at 50% 40%, rgba(120,150,255,.55), rgba(70,60,200,.9));",e.appendChild(it);const Fo=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Ht=new cn(c,it,Fo),A=new an(S,c,a.couleur,d,t,ve);let ys=null;if(a.tenue&&A.avatar.setCosmetiques(a.tenue),de){const l=de.interieur,v=ee.position.y;ys={murs:de.murs,contient:(x,g)=>l.contient(x,g),sol:v+l.sol,plafond:(x,g)=>v+l.plafond(x,g)},A.batiment=ys}const ge=te.arrivee;ge&&Number.isFinite(ge.x)&&Number.isFinite(ge.z)&&Number.isFinite(ge.yaw)&&(A.placer(ge.x,ge.z,ge.yaw),A.garage={x:ge.x-4,z:ge.z-2.5,yaw:ge.yaw});const ws=new Cr,ot=new Er(S,c,ve,ws),Ss=new Lo(c,ws);let As="";const pi=Do(64,.55),vi=new ut({map:pi,color:new U(a.couleur),depthTest:!1,transparent:!0,sizeAttenuation:!1,opacity:0}),at=new ht(vi);at.scale.set(.035,.035,1),at.renderOrder=22,at.visible=!1,c.add(at);const rt=document.createElement("div");rt.setAttribute("aria-hidden","true"),rt.className="monde-visiere";const Bo=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches;rt.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;"+(Bo?"":"transition:opacity .25s ease;")+"background:radial-gradient(ellipse 60% 64% at 50% 47%, rgba(0,0,0,0) 72%, rgba(10,16,26,.3) 86%, rgba(4,7,12,.88) 100%),radial-gradient(ellipse 90% 50% at 50% -18%, rgba(190,215,255,.08) 60%, rgba(0,0,0,0) 66%);box-shadow:inset 0 0 70px rgba(0,0,0,.5);",getComputedStyle(e).position==="static"&&(e.style.position="relative"),e.appendChild(rt);let zs=!1;const[Uo,Io]=we(256,80);ai(Io,256,80,"Sac plein !",{fond:"rgba(200,40,30,0.9)",couleur:"#fff",taille:30,bordure:"#ffd166"});const Ts=new me(Uo);Ts.colorSpace=Je;const Re=new ht(new ut({map:Ts,depthTest:!1,transparent:!0}));Re.scale.set(1.5,.47,1),Re.visible=!1,Re.renderOrder=21,c.add(Re);const le=new Map,xi=[];let Ps=0;const gt=new Ra,Pe=[],qt=[],bt=new Qs().setFromObject(ee),gi=Math.max(Math.abs(bt.min.x),Math.abs(bt.max.x),Math.abs(bt.min.z),Math.abs(bt.max.z),4)+1,jo=bt.max.y+1-bs.y,bi=l=>{const v=l;if(!v.isMesh||v.isInstancedMesh||v.userData.sansOcclusion)return!1;const x=v.material;return!(Array.isArray(x)?x.some(g=>g.transparent):x.transparent)};ee.traverse(l=>{bi(l)&&qt.push(l)});for(const l of de?.occulteursCamera??[])qt.includes(l)||qt.push(l);let Gt=[];const Mi=(l,v,x,g,z,B)=>{const R=z-x,q=B-g,At=R*R+q*q,zt=At>1e-9?Math.max(0,Math.min(1,((l-x)*R+(v-g)*q)/At)):0,Ri=x+R*zt-l,Fi=g+q*zt-v;return Ri*Ri+Fi*Fi};A.obstacle=(l,v,x)=>{const g=l.x+v.x*x,z=l.z+v.z*x;let B=1/0;if(gt.set(l,v),gt.near=0,gt.far=x+.4,l.y<It.y+jo&&Mi(It.x,It.z,l.x,l.z,g,z)<gi*gi&&(Pe.length=0,gt.intersectObjects(qt,!1,Pe),Pe.length&&(B=Pe[0].distance)),Gt.length){let R=!1;for(const{c:q}of le.values())if(Mi(q.x,q.z,l.x,l.z,g,z)<16){R=!0;break}R&&(Pe.length=0,gt.intersectObjects(Gt,!1,Pe),Pe.length&&Pe[0].distance<B&&(B=Pe[0].distance))}return B===1/0?1/0:Math.max(.3,B-.35)};const yi=S.robot();yi.updateMatrixWorld(!0);const Xt=[];yi.traverse(l=>{const v=l;if(!v.isMesh)return;const x=new ds(v.geometry,v.material,Mo);x.count=0,x.castShadow=!0,x.receiveShadow=!0,x.frustumCulled=!1,c.add(x),Xt.push({inst:x,local:v.matrixWorld.clone()})});const Fe=[],Wo=new ne,Vo=new T,wi=new ye,Si=new ye,Ai=new ne,Mt=new T,Ho=new T(1,1,1),Cs=new T(0,1,0),yt={brosse:new Set,interagir:new Set,interactionPossible:new Set,touche:new Set,outil:new Set,pas:new Set,saut:new Set,atterrissage:new Set};function Ce(l,...v){for(const x of yt[l])try{x(...v)}catch(g){console.error(`[monde] écouteur « ${l} » :`,g)}}const zi=l=>Ce("brosse",l);A.surPas=()=>Ce("pas"),A.surSaut=()=>Ce("saut"),A.surAtterrissage=l=>Ce("atterrissage",l);let Z=null;const ce=new Jr(f.domElement,l=>{switch(l.type){case"touche":Ce("touche",l.t);break;case"outil":Ce("outil",l.choix);break;case"sauter":A.sauter();break;case"vue":A.basculerVue();break;case"zoom":A.zoomer(l.sens);break;case"interagir":if(!Z)break;Z.type==="vehicule"&&(A.enVehicule?A.descendre():A.monter()),Ce("interagir",Z);break}});function qo(){const l=A.centre();let v=null;if(h&&A.dedans&&!A.enVehicule)ps&&Math.hypot(l.x-ps.x,l.z-ps.z)<Vn?v={type:"vestiaire"}:fs&&Math.hypot(l.x-fs.x,l.z-fs.z)<Wn&&(v={type:"terminal"});else{let x=sr+(A.enVehicule?2:0),g=-1;for(const{d:z,c:B}of le.values()){const R=Math.hypot(l.x-B.x,l.z-B.z);R<x&&(x=R,g=z.id)}if(g>=0)v={type:"depot",depotId:g};else if(h&&li&&!A.enVehicule&&Math.hypot(l.x-We.x,l.z-We.z)<jn)v={type:"terminal"};else if(h&&ci&&Math.hypot(l.x-pe.x,l.z-pe.z)<Hn+(A.enVehicule?3:0))v={type:"rampe"};else if(A.avatar.vehicule&&A.distanceVehicule()<qn)v={type:"vehicule"};else if(!A.enVehicule){const z=xt.proche(l.x,l.z);z>=0&&(v={type:"caillou",id:z})}}v?.type===Z?.type&&(v?.type!=="depot"||Z?.type==="depot"&&Z.depotId===v.depotId)&&(v?.type!=="caillou"||Z?.type==="caillou"&&Z.id===v.id)||(Z=v,Ce("interactionPossible",v))}function Go(l,v){if(No?.(v),!de)return;const x=A.centre(),g=de.porte;xs[0].x=x.x,xs[0].z=x.z;const z=h&&(lr(g.x,g.z,g.rayon,xs)||ot.procheDe(g.x,g.z,g.rayon))?1:0,B=cr(vs,z,l);B!==vs&&(vs=B,g.setOuverture(B));const R=h&&A.dedans&&!A.enVehicule;R!==ui&&(ui=R,de.setCameraInterieure(R))}function wt(){const l=Math.max(1,e.clientWidth||window.innerWidth),v=Math.max(1,e.clientHeight||window.innerHeight);d.aspect=l/v,d.updateProjectionMatrix(),p.taille(l,v);const x=v*f.getPixelRatio();ve.setEchelle(x),xe.setEchelle(x),Ht.setEchelle(x)}wt();const Ti=typeof ResizeObserver<"u"?new ResizeObserver(wt):null;Ti?.observe(e),window.addEventListener("resize",wt);const Ds=new T;function Xo(){let l=1;for(const[R,q]of kn)if(A.camDist<R){l=q;break}l!==Ee&&et(l);const v=A.centre(),x=X*2/Le,g=Math.round(v.dot(fe)/x)*x,z=Math.round(v.dot($e)/x)*x,B=v.dot(he);Ds.copy(fe).multiplyScalar(g).addScaledVector($e,z).addScaledVector(he,B),F.target.position.copy(Ds),F.position.copy(Ds).addScaledVector(he,X*4.5),F.target.updateMatrixWorld()}function Yo(l){const v=1-Math.exp(-l*6);for(let x=0;x<Fe.length;x++){const g=Fe[x],z=g.cx-g.x,B=g.cz-g.z;if(g.saut||Math.abs(z)+Math.abs(B)>20?(g.saut=!1,g.x=g.cx,g.z=g.cz):(g.x+=z*v,g.z+=B*v),z*z+B*B>1e-5){let q=Math.atan2(-z,-B)-g.yaw;for(;q>Math.PI;)q-=Math.PI*2;for(;q<-Math.PI;)q+=Math.PI*2;g.yaw+=q*Math.min(1,l*8)}Mt.set(g.x,k(g.x,g.z),g.z),Ai.setFromAxisAngle(Cs,g.yaw).premultiply(Wo.setFromUnitVectors(Cs,mt(Mt.x,Mt.y,Mt.z,Vo))),wi.compose(Mt,Ai,Ho);for(const R of Xt)Si.multiplyMatrices(wi,R.local),R.inst.setMatrixAt(x,Si)}for(const x of Xt)x.inst.count=Fe.length,x.inst.instanceMatrix.needsUpdate=!0}function ko(l,v){if(ze==="sol")return;Te+=l;let x=0,g=0;if(ze==="decollage"){const z=Math.min(1,Te/6);x=z*z*z,g=z<.05?z/.05:1,z<.5&&xe.emettre(Math.round(18*l*60*xe.densite*(1-z))||1,Se.x,Se.y+.6,Se.z,7,.6,2.5,Se.y-50),Te>=6&&(ze="attente",Te=0)}else if(ze==="attente")x=1,Te>=4&&(ze="atterrissage",Te=0);else{const z=Math.min(1,Te/6.5);x=(1-z)*(1-z)*(1-z),g=z>.97?(1-z)/.03:.75,z>.75&&xe.emettre(Math.round(8*l*60*xe.densite)||1,Se.x,Se.y+.6,Se.z,5,.4,2,Se.y-50),Te>=6.5&&(ze="sol",x=0,g=0)}if(Ne.setDecollage(x),g>0&&x<.97){const z=.85+Math.sin(v*53)*.08+Math.sin(v*31)*.07;jt.intensity=1200*g*z}else jt.intensity=0}const Be=new T;function Ko(l,v){if(A.avatar.hautTete(Be),A.sacPlein){Re.visible=!0;const g=1+Math.sin(v*6)*(A.veutBrosser?.12:.04);Re.scale.set(1.5*g,.47*g,1),Re.position.set(Be.x,Be.y+.25,Be.z)}else Re.visible=!1;Ss.update(l,Be);const x=Math.max(0,Math.min(1,(A.camDist-45)/60));if(at.visible=x>0,x>0&&(vi.opacity=x*.95,at.position.set(Be.x,Be.y+.5,Be.z)),A.dansCasque!==zs&&(zs=A.dansCasque,rt.style.opacity=zs?"1":"0"),Ae&&(Ae.animer(v%Gn),Ms-=l,Ms<=0)){Ms=2;for(let g=0;g<64;g++)mi[g]=t.propreteTuile(fi[g]);Ae.setProprete(mi)}A.avatar.vehicule&&!A.enVehicule?(Ve.x=A.vehPos.x,Ve.z=A.vehPos.z,Ve.r=A.outil?.id==="camion-aspirateur"?2.4:1.2):Ve.r=0,gs.r=ze==="sol"?1.6:0}const re={x:0,y:0,z:1},V=new T;function Es(l){Bt(l.d,l.g.position),l.g.quaternion.setFromUnitVectors(Cs,mt(l.g.position.x,l.g.position.y,l.g.position.z,V)),l.c.x=l.g.position.x,l.c.z=l.g.position.z,l.g.updateMatrixWorld(!0)}function Pi(){Ut=h?[...di,gs,Ve]:[Ve];for(const l of le.values())Ut.push(l.c)}function Yt(l,v){h=v,ue.rebaser(ct),je(),A.transformer(l),A.batiment=h?ys:null,ot.transformer(l),ve.transformer(l),xe.transformer(l),$.rebaser(_s,ct,l,he),h?ae.matrix.identity():ae.matrix.multiplyMatrices(dt,n),ae.matrixWorldNeedsUpdate=!0,ae.updateMatrixWorld(!0),It.copy(bs).applyMatrix4(ae.matrix),Se.copy(pe).applyMatrix4(ae.matrix);for(const x of le.values())Es(x);Pi(),xt.rebaser(),Vt.rebaser();for(const x of Fe)x.saut=!0}function Ci(){const l=A.centre();be(l.x,l.y,l.z,re);const v=Math.hypot(re.x-i.o.x,re.y-i.o.y,re.z-i.o.z)*o.rayonM;h?v>Yn&&Yt(eo(l.x,l.z),!1):v<Xn?Yt(ns(o,i.o,i.x),!0):l.x*l.x+l.z*l.z>_i*_i&&Yt(eo(l.x,l.z),!1)}let kt=0,Kt=0,He=0,Di=0,Ls=0,St=0,Ei=!1,Zt=!1;function Li(l){if(Zt)return;kt=requestAnimationFrame(Li);const v=Kt?Math.min(.1,Math.max(0,(l-Kt)/1e3)):1/60;Kt=l,He+=v,ce.lire(v),Ci(),A.update(v,He,ce,Ut,zi),Ei||qo(),Os&&Os(v),ot.update(v,He,d.position),Yo(v),ko(v,He),Ko(v,He),Go(v,He),ve.update(v),xe.update(v),Vt.update(He,Date.now()),Ht.update(v,d.position,k),Xo(),ue.update(d,v);const x=to(d.position.x,d.position.y,d.position.z),g=1+Math.max(0,x-300)/1200;ue.group.scale.setScalar(g),Math.abs(d.far-Zs*g)>d.far*.01&&(d.far=Zs*g,d.updateProjectionMatrix()),$.mettreAJour(Oe(d.position,pt),Oe(A.centre(),tt),f),f.info.reset(),p.rendre(),Ls++,St?l-St>=500&&(Di=Ls*1e3/(l-St),Ls=0,St=l):St=l}let Os=null;const _={x:0,y:0,z:0,yaw:0,d:{x:i.o.x,y:i.o.y,z:i.o.z},alt:0,cap:{x:i.x.x,y:i.x.y,z:i.x.z},enVehicule:!1,enMouvement:!1,brosse:!1,vitesse:0,yawCamera:0,vue:"troisieme",interieur:!1},Ns={angle:0,distance:0},Rs={x:0,z:0};let Oi=null;const Qt=new T,Ni={on(l,v){return yt[l].add(v),()=>{yt[l].delete(v)}},setOutil(l,v,x){A.setOutil(l,v,x)},setSacPlein(l){A.sacPlein=l},setCosmetiques(l){A.avatar.setCosmetiques(l)},setEcran(l,v){Ro[l]?.setTexte(v)},showStamps(l){if(!l.length)return;const v=Math.min(l.length,8),x=l.length/v,g=d.position;for(let z=0;z<v;z++){const B=l[Math.floor(z*x)],R=Bt(tr(o,B,re),V),q=B.r/1e3,At=R.x-g.x,zt=R.z-g.z;At*At+zt*zt>3600||ve.emettre(Math.max(1,Math.round(2*ve.densite)),R.x,R.y+.03,R.z,.35+q*.4,.6,q,R.y)}},setPlayers(l,v){As=v,ot.set(l,v)},setDepots(l){if(l.length===le.size&&l.every(x=>{const g=le.get(x.id);return g!==void 0&&g.d.x===x.x&&g.d.y===x.y&&g.d.z===x.z}))return;const v=new Set;for(const x of l){v.add(x.id);const g=le.get(x.id);if(g){(g.d.x!==x.x||g.d.y!==x.y||g.d.z!==x.z)&&(g.d={...x},Es(g));continue}const z=S.depot();if(Ge(z),!Ps){const R=new Qs().setFromObject(z);Ps=Math.max(.8,Math.min(3,Math.max(R.max.x,-R.min.x,R.max.z,-R.min.z)*.92-.1))}c.add(z);const B={d:{...x},g:z,c:{x:0,z:0,r:Ps}};Es(B),le.set(x.id,B)}for(const[x,g]of le)v.has(x)||(g.g.removeFromParent(),xi.push(g.g),le.delete(x));Pi(),Gt=[];for(const x of le.values())x.g.updateMatrixWorld(!0),x.g.traverse(g=>{bi(g)&&Gt.push(g)});Z=Z?.type==="depot"&&!le.has(Z.depotId)?null:Z},setRobots(l){const v=Math.min(Mo,l.length);Fe.length=Math.min(Fe.length,v);for(let x=0;x<v;x++){const g=l[x],z=Fe[x];Ye(g,0,V),z&&z.id===g.id?(z.cx=V.x,z.cz=V.z):Fe[x]={id:g.id,x:V.x,z:V.z,cx:V.x,cz:V.z,yaw:g.angle+Math.PI,saut:!1}}},lancerFusee(){ze!=="decollage"&&(ze="decollage",Te=0)},emote(l,v){if(l===As||As===""){Ss.montrer(v);return}ot.emote(l,v)},setPause(l){Ei=l,ce.setPause(l),l||ce.verrouiller()},setQualite(l){s=xo(l),p.appliquer(s),et(),ni(),$.setDetail(s.detail),ve.densite=s.particules,xe.densite=s.particules;const v=yo(s);(v.niveauMax!==st.niveauMax||v.facteur!==st.facteur||v.atlas!==st.atlas||v.mailles!==st.mailles)&&(st=v,$.dispose(),$=ri()),wt()},setControles(l,v){ce.sensibilite=Math.max(.2,Math.min(3,l)),ce.inverserY=v},setLiaisons(l){ce.setLiaisons(l)},setManette(l){ce.setManette(l)},setCamera(l,v){const x=Number.isFinite(l)?Math.max(50,Math.min(100,l)):62;x!==d.fov&&(d.fov=x,d.updateProjectionMatrix()),v!==Oi&&(Oi=v,A.setVue(v))},manetteActive(){return ce.manetteActive},local(){const l=A.centre();return _.x=l.x,_.y=l.y,_.z=l.z,_.yaw=A.enVehicule?A.vehYaw:A.yaw,be(l.x,l.y,l.z,_.d),_.alt=to(l.x,l.y,l.z),A.capLocal(V),js(V.x,V.y,V.z,_.cap),_.enVehicule=A.enVehicule,_.enMouvement=A.enMouvement,_.brosse=A.brosse,_.vitesse=A.vitesseSol,_.yawCamera=A.camYawVue,_.vue=A.vue,_.interieur=A.dedans&&!A.enVehicule,_},pointDevant(l){const v=A.pointDevant(l);return be(v.x,k(v.x,v.z),v.z,{x:0,y:0,z:1})},pointVise(l){d.getWorldDirection(Qt);const v=d.position,x=Math.max(1,Math.min(400,l));for(let z=.5;z<=x;z+=.5){const B=v.x+Qt.x*z,R=v.z+Qt.z*z,q=k(B,R);if(v.y+Qt.y*z<=q)return be(B,q,R,{x:0,y:0,z:1})}const g=A.pointDevant(8);return be(g.x,k(g.x,g.z),g.z,{x:0,y:0,z:1})},setZones(l){l.length===vt.length&&l.every((v,x)=>v===vt[x])||(vt=[...l],$.setZonesOuvertes(vt))},relevement(l){const v=A.centre();be(v.x,v.y,v.z,re);const x=l.x*re.x+l.y*re.y+l.z*re.z;ei({x:l.x-re.x*x,y:l.y-re.y*x,z:l.z-re.z*x},V);const g=Math.atan2(-V.x,-V.z);let z=A.camYawVue-g;for(;z>Math.PI;)z-=Math.PI*2;for(;z<-Math.PI;)z+=Math.PI*2;return Ns.angle=V.lengthSq()<1e-12?0:z,Ns.distance=er(re,l,o.rayonM),Ns},positionLocale(l){return Ye(l,0,V),Rs.x=V.x,Rs.z=V.z,Rs},setPings(l){Vt.set(l)},setCailloux(l){xt.setRamasses(l),Z?.type==="caillou"&&xt.proche(A.centre().x,A.centre().z)!==Z.id&&(Z=null,Ce("interactionPossible",null))},setTempete(l){Ht.set(l)},stats(){const l=f.info;return{fps:Math.round(Di*10)/10,drawCalls:l.render.calls,triangles:l.render.triangles,geometries:l.memory.geometries,textures:l.memory.textures,terrain:{appels:3,mailles:$.stats.mailles,triangles:$.stats.triangles,tuiles:$.stats.tuilesChargees,memoireMo:Math.round($.memoire()/1048576*10)/10}}},start(l){Os=l,!(kt||Zt)&&(Kt=0,kt=requestAnimationFrame(Li))},dispose(){if(!Zt){Zt=!0,cancelAnimationFrame(kt),window.removeEventListener("resize",wt),Ti?.disconnect(),ce.dispose(),A.dispose(),ot.dispose(),Ss.dispose(),ws.dispose(),ve.dispose(),xe.dispose(),xt.dispose(),Vt.dispose(),Ht.dispose(),it.remove(),ue.dispose(),Ae?.dispose(),Ne.dispose();for(const l of Xt)l.inst.dispose();for(const l of xi)c.add(l);if(typeof te.dispose=="function"){try{te.dispose()}catch(l){console.warn("[monde] libération de la base :",l)}c.add(ee)}Zn(c),$.dispose();for(const l of[b.saleC,b.saleN,b.propreC,b.propreN])l.dispose();Ts.dispose(),pi.dispose(),rt.remove(),jt.dispose(),J.dispose(),F.shadow.map?.dispose(),c.clear(),p.dispose();for(const l of Object.keys(yt))yt[l].clear()}}};function Zo(l,v=0){Ye(l,0,V),V.y<-o.rayonM*.3&&(Yt(ns(o,l,i.x),!1),Ye(l,0,V)),A.placer(V.x,V.z,v),Ci()}Ni._debug={scene:c,camera:d,joueur:A,renderer:f,source:y.source,terrain:()=>$,entrees:ce,teleporter:Zo,enBase:()=>h,depuisBase:(l,v)=>Xi(o,l,v)},A.update(0,0,ce,Ut,zi);for(let l=0;l<40&&($.mettreAJour(Oe(d.position,pt),Oe(A.centre(),tt),f,64),!$.stable);l++);try{await Promise.race([f.compileAsync(c,d),new Promise(l=>setTimeout(l,5e3))])}catch(l){console.warn("[monde] précompilation des shaders impossible :",l)}return Ni};function Kn(a){const e=[],t=new Qs,o=(s,i)=>{for(const r of s.children){if(t.setFromObject(r),t.isEmpty())continue;const n=(t.max.x-t.min.x)/2,h=(t.max.z-t.min.z)/2,m=t.max.y-t.min.y,u=Math.max(n,h);if(u>7&&r.children.length&&i<4){o(r,i+1);continue}m<.9||u<.15||u>7||r.name==="rampe"||e.push({x:(t.min.x+t.max.x)/2,z:(t.min.z+t.max.z)/2,r:Math.min(n,h)*.5+u*.4})}};return o(a,0),e}function Zn(a){const e=new Set,t=new Set;a.traverse(o=>{const s=o;s.geometry&&e.add(s.geometry);const i=s.material;Array.isArray(i)?i.forEach(r=>t.add(r)):i&&t.add(i)});for(const o of e)o.dispose();for(const o of t){for(const s of Object.values(o))s&&s.isTexture&&s.dispose();o.dispose()}}export{_n as createWorld};
