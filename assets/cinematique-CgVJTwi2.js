import{G as me,k as q,V as w,v as re,m as H,aE as he,aF as ve,aG as de,Y as pe,e as B,P as ge,I as be,q as xe,D as oe,A as K,g as ye,h as ie,Q as we,F as Me}from"./three-CMir4GaU.js";import{j as Ee,s as D,k as I}from"./world-yPBeqnXX.js";import{r as Be}from"./world-yPBeqnXX.js";import"./index-CPbiRmFC.js";const Ae=.72,V=(o,t,f)=>{const l=Math.max(0,Math.min(1,(f-o)/(t-o)));return l*l*(3-2*l)},Te=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Fe=`
  uniform float uTemps;
  uniform float uSeuil;
  uniform float uIntensite;
  uniform float uAssombri;
  uniform float uEclair;
  uniform vec3 uDirEclair;
  uniform vec3 uFront;
  uniform vec3 uViolet;
  uniform vec3 uOrange;
  varying vec3 vDir;
  float h3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float n3(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
  float fbm(vec3 p) { float a = 0.5, r = 0.0; for (int i = 0; i < 4; i++) { r += a * n3(p); p = p * 2.03 + 3.1; a *= 0.5; } return r; }
  void main() {
    vec3 d = normalize(vDir);
    float el = d.y;
    // Torsion de domaine : volutes qui dérivent depuis le front.
    vec3 q = d * 2.4 + uFront * uTemps * 0.015;
    vec3 w = vec3(fbm(q + vec3(0.0, uTemps * 0.008, 0.0)), fbm(q + 5.2), fbm(q + 9.7));
    float dens = fbm(q * 1.3 + w * 1.6 - uFront * uTemps * 0.025);
    float volutes = smoothstep(0.3, 0.75, dens);
    float filaments = pow(1.0 - abs(fbm(q * 2.6 + w * 2.2) * 2.0 - 1.0), 8.0);
    // Couverture : le voile part de l'horizon côté front, puis remonte et gagne tout le ciel (uSeuil descend).
    float cote = dot(normalize(vec3(d.x, 0.0, d.z) + 1e-4), uFront) * 0.5 + 0.5;
    float horizon = 1.0 - smoothstep(0.0, 0.8, max(el, 0.0));
    float champ = cote * 0.55 + horizon * 0.45 + (dens - 0.5) * 0.35;
    float couvert = smoothstep(uSeuil, uSeuil + 0.16, champ);
    float lisiere = smoothstep(0.1, 0.0, abs(champ - uSeuil - 0.05)) * step(uSeuil, 0.95); // front de tempête, orangé
    float sous = smoothstep(-0.2, 0.03, el);
    float mixO = smoothstep(0.45, 0.8, fbm(q * 0.8 + w + 11.0)) * 0.7 + horizon * horizon * 0.45;
    vec3 coul = mix(uViolet, uOrange, clamp(mixO, 0.0, 1.0));
    vec3 glow = coul * (0.12 + volutes * 0.75 + filaments * 0.35) * (0.5 + horizon * 0.7) * couvert;
    glow += uOrange * lisiere * (0.35 + dens) * 0.8;
    // Éclair : lueur locale autour de sa direction, plus un léger flash diffus.
    float pres = pow(max(dot(d, uDirEclair), 0.0), 24.0);
    vec3 flash = (vec3(0.8, 0.7, 1.0) * pres * 0.9 + coul * 0.1) * uEclair * (0.3 + volutes) * couvert;
    vec3 rgb = (glow * uIntensite + flash) * sous;
    float couvertA = smoothstep(uSeuil - 0.14, uSeuil + 0.02, champ); // le voile masque les étoiles un peu avant de briller
    float a = uAssombri * couvertA * sous;
    gl_FragColor = vec4(rgb, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Se=`
  attribute vec4 aGraine;
  uniform vec3 uDecalage;   // décalage du volume (chute + vent + déplacement de la caméra), déjà réduit au volume
  uniform float uRayon;
  uniform float uHauteur;
  uniform vec3 uVitesse;    // vitesse de chute (repère local), pour l'étirement
  uniform float uTemps;
  uniform float uTaille;
  varying vec2 vUv;
  varying float vAlpha;
  varying float vTeinte;
  void main() {
    vUv = position.xy + 0.5;
    float R2 = uRayon * 2.0;
    vec3 p = vec3(aGraine.x * R2, aGraine.y * uHauteur, aGraine.z * R2) + uDecalage;
    p.x = mod(p.x, R2) - uRayon;
    p.z = mod(p.z, R2) - uRayon;
    p.y = mod(p.y, uHauteur) - uHauteur * 0.3;
    // Petites volutes propres à chaque grain.
    float ph = aGraine.w * 6.2832;
    p.x += sin(uTemps * 0.9 + ph) * 0.35;
    p.z += cos(uTemps * 0.7 + ph * 1.7) * 0.35;
    vec4 tete = modelViewMatrix * vec4(p, 1.0);
    vec4 queue = modelViewMatrix * vec4(p - uVitesse * (0.035 + 0.04 * aGraine.w), 1.0);
    vec2 dir = queue.xy - tete.xy;
    float l = length(dir);
    dir = l > 1e-5 ? dir / l : vec2(0.0, 1.0);
    vec2 perp = vec2(-dir.y, dir.x);
    float largeur = uTaille * (0.5 + fract(aGraine.y * 7.31) * 0.9);
    vec4 mv = mix(tete, queue, position.y + 0.5);
    mv.xy += perp * position.x * largeur;
    // Fondu aux bords du volume (aucun grain ne « saute » quand il est recyclé) et près de la caméra.
    float dist = length(p);
    float bordH = smoothstep(uRayon, uRayon * 0.7, max(abs(p.x), abs(p.z)));
    float bordV = smoothstep(-uHauteur * 0.3, -uHauteur * 0.22, p.y) * smoothstep(uHauteur * 0.7, uHauteur * 0.55, p.y);
    vAlpha = bordH * bordV * smoothstep(0.6, 2.5, dist);
    vTeinte = aGraine.w;
    gl_Position = projectionMatrix * mv;
  }
`,Ce=`
  uniform vec3 uViolet;
  uniform vec3 uOrange;
  uniform float uIntensite;
  uniform float uEclair;
  varying vec2 vUv;
  varying float vAlpha;
  varying float vTeinte;
  void main() {
    float travers = 1.0 - abs(vUv.x - 0.5) * 2.0;
    float le = vUv.y; // 0 = tête, 1 = queue
    float a = pow(travers, 1.5) * (pow(1.0 - le, 2.0) * 0.8 + smoothstep(0.25, 0.0, le) * 0.6) * vAlpha;
    if (a < 0.004) discard;
    vec3 c = vTeinte < 0.45 ? uViolet : vTeinte < 0.85 ? uOrange : vec3(1.0, 0.93, 0.85);
    float eclat = vTeinte > 0.95 ? 1.7 : 1.0;
    gl_FragColor = vec4(c * a * uIntensite * eclat * (1.0 + uEclair * 1.5), 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,Re="varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Ie=`
  uniform float uIntensite;
  varying vec2 vUv;
  void main() {
    float x = abs(vUv.x - 0.5) * 2.0;
    float coeur = smoothstep(0.28, 0.0, x);
    float halo = pow(1.0 - x, 2.5) * 0.55;
    float bout = smoothstep(0.0, 0.08, vUv.y);
    vec3 c = vec3(1.0, 0.96, 1.0) * coeur * 2.0 + vec3(0.68, 0.45, 1.0) * halo;
    gl_FragColor = vec4(c * uIntensite * bout, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function Ve(o){const t=[],f=[],l=[],x=(a,r)=>{const h=t.length/3;for(let s=0;s<a.length;s++){const[y,E]=a[s],[F,A]=a[Math.max(0,s-1)],[p,_]=a[Math.min(a.length-1,s+1)];let u=p-F,S=_-A;const P=Math.hypot(u,S)||1;u/=P,S/=P;const C=r*(1-s/a.length*.6);t.push(y-S*C,E+u*C,0,y+S*C,E-u*C,0);const R=1-s/(a.length-1);if(f.push(0,R,1,R),s<a.length-1){const g=h+s*2;l.push(g,g+2,g+1,g+1,g+2,g+3)}}},v=[];let n=0;const c=26;for(let a=0;a<=c;a++){const r=1-a/c;v.push([n,r]),n+=(o()-.5)*.09}x(v,.012);const M=2+Math.floor(o()*2);for(let a=0;a<M;a++){const r=4+Math.floor(o()*(c-10));let[h,s]=v[r];const y=o()<.5?-1:1,E=[[h,s]],F=6+Math.floor(o()*6);for(let A=0;A<F;A++)h+=y*(.02+o()*.04),s-=.02+o()*.035,E.push([h,s]);x(E,.007)}const d=new ye;return d.setAttribute("position",new ie(new Float32Array(t),3)),d.setAttribute("uv",new ie(new Float32Array(f),2)),d.setIndex(l),d}const ae=3,se=6,ne=.45;function qe(o,t){return o<0||o>ne?0:t?Math.sin(o/ne*Math.PI)*.45:o<.05?1:o<.09?.15:o<.15?.85:Math.exp(-(o-.15)*14)}function De(o={}){const t=new me;t.name="tempete-cosmique";const f=o.rayonCiel??800,l=Math.max(1,Math.floor(o.particules??6e3)),x=o.rayonPluie??45,v=o.hauteurPluie??40,n=Ee(o.graine??2026),c=o.azimut??.6,M=new q("#6b3fc4"),d=new q("#ff7a1a"),a={value:0},r={value:0},h=new w(0,.4,1).normalize(),s=new re(f,48,24),y={uTemps:a,uSeuil:{value:2},uIntensite:{value:0},uAssombri:{value:0},uEclair:r,uDirEclair:{value:h},uFront:{value:new w(Math.sin(c),0,Math.cos(c))},uViolet:{value:M},uOrange:{value:d}},E=new H({uniforms:y,vertexShader:Te,fragmentShader:Fe,side:pe,transparent:!0,depthWrite:!1,fog:!1,blending:de,blendSrc:ve,blendDst:he}),F=new B(s,E);F.frustumCulled=!1,F.renderOrder=-1;const A=new ge(1,1),p=new be;p.index=A.index,p.setAttribute("position",A.attributes.position);const _=new Float32Array(l*4);for(let e=0;e<_.length;e++)_[e]=n();p.setAttribute("aGraine",new xe(_,4)),p.instanceCount=0;const u=new w,S=new w(3.2,-5.5,1.4),P={uDecalage:{value:u},uRayon:{value:x},uHauteur:{value:v},uVitesse:{value:S},uTemps:a,uTaille:{value:.06},uViolet:{value:M},uOrange:{value:d},uIntensite:{value:0},uEclair:r},C=new H({uniforms:P,vertexShader:Se,fragmentShader:Ce,blending:K,transparent:!0,depthWrite:!1,side:oe,fog:!1}),R=new B(p,C);R.frustumCulled=!1,R.renderOrder=3;const g=Array.from({length:se},()=>Ve(n)),O=Array.from({length:ae},()=>{const e=new H({uniforms:{uIntensite:{value:0}},vertexShader:Re,fragmentShader:Ie,blending:K,transparent:!0,depthWrite:!1,side:oe,fog:!1}),i=new B(g[0],e);return i.frustumCulled=!1,i.renderOrder=2,i.visible=!1,{mesh:i,mat:e,debut:-1,dir:new w}});for(const e of[F,R,...O.map(i=>i.mesh)])e.castShadow=e.receiveShadow=!1,t.add(e);t.visible=!1;const G={assombrissement:0,eclair:0,directionEclair:h,teinte:new q("#3a2a55"),brouillard:0},le=new q("#3a2a55"),ue=new q("#5a3550");let Q=0,Y=.8,j=0,k=!1,z=Number.NaN,N=0,L=0,$=0;const ce=(e,i)=>{const b=f*(.45+n()*.3),T=b*(.55+n()*.35);e.mesh.geometry=g[Math.floor(n()*se)],e.mesh.position.set(Math.sin(i)*b,-T*.08,Math.cos(i)*b),e.mesh.rotation.set(0,i+Math.PI,0);const m=T*(n()<.5?1:-1);e.mesh.scale.set(m,T,1),e.dir.set(Math.sin(i),.35,Math.cos(i)).normalize()},J=e=>{const i=O[L];L=(L+1)%ae,ce(i,e),i.debut=$},X=()=>{const e=Q;t.visible=e>.001,y.uSeuil.value=e<=0?2:Math.max(-.3,1.05-2.2*Math.pow(e,1.3)),y.uIntensite.value=.25+V(0,.6,e)*.3,G.assombrissement=V(.1,.85,e)*Ae,y.uAssombri.value=e>0?.86+V(.1,.7,e)*.1:0;const i=V(.2,.7,e);p.instanceCount=Math.round(l*Y*i),R.visible=p.instanceCount>0,P.uIntensite.value=.55+i*.6,j=V(.35,.8,e),G.brouillard=V(.25,.9,e)*.6,G.teinte.copy(le).lerp(ue,V(.4,1,e))};X();const fe=new w(0,1,0),Z=new we,W=new w,ee=new w;let te=!1;return{group:t,etat:G,setProgression(e){const i=Math.max(0,Math.min(1,e));i!==Q&&(Q=i,X())},setQualite(e){Y=Math.max(0,Math.min(1,e)),X()},suivre(e,i){te&&(W.copy(e).sub(ee),Z.copy(t.quaternion).invert(),W.applyQuaternion(Z),u.sub(W)),ee.copy(e),te=!0,t.position.copy(e),i&&t.quaternion.setFromUnitVectors(fe,i)},setFlashsReduits(e){k=e},declencherEclair(e){J(e??n()*Math.PI*2)},animer(e){$=e;const i=Number.isNaN(z)?0:Math.max(0,Math.min(.1,e-z));if(!Number.isNaN(z)&&e<z){N=e;for(const m of O)m.debut=-1}z=e,a.value=e%1e3,u.addScaledVector(S,i);const b=x*2;if(u.x=(u.x%b+b)%b,u.z=(u.z%b+b)%b,u.y=(u.y%v+v)%v,j>.01&&t.visible){if(e>=N){N>0&&J(c+(n()-.5)*Math.PI*1.6);const m=(5.5-j*4.6)*(.35+n()*1.3);N=e+(k?Math.max(2,m):m)}}else N=e+1;let T=0;for(const m of O){const U=m.debut<0?0:qe(e-m.debut,k);m.mesh.visible=U>.01&&t.visible,m.mat.uniforms.uIntensite.value=U*1.8,U>T&&(T=U,h.copy(m.dir))}r.value=T,G.eclair=T},dispose(){s.dispose(),E.dispose(),p.dispose(),A.dispose(),C.dispose();for(const e of g)e.dispose();for(const e of O)e.mat.dispose();t.removeFromParent()}}}const _e=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Pe=`
  uniform vec3 uAxe;
  uniform float uCos;
  uniform float uAlpha;
  uniform float uTemps;
  uniform vec3 uViolet;
  uniform vec3 uOr;
  varying vec3 vDir;
  void main() {
    float d = dot(vDir, uAxe);
    float ondes = 0.5 + 0.5 * sin(d * 60.0 - uTemps * 7.0) * sin(vDir.y * 41.0 + uTemps * 3.0);
    float derriere = smoothstep(uCos - 0.015, uCos + 0.03, d);
    float bord = exp(-pow((d - uCos) / 0.035, 2.0));
    vec3 c = uViolet * derriere * (0.35 + 0.25 * ondes) + uOr * bord * (1.4 + 0.6 * ondes);
    gl_FragColor = vec4(c * uAlpha, 1.0);
  }
`;class Ne{constructor(t,f,l,x){this.scene=t,this.reduit=x,this.geo=new re(l+6,96,48),this.mat=new H({uniforms:{uAxe:{value:this.axe},uCos:{value:1.2},uAlpha:{value:0},uTemps:{value:0},uViolet:{value:new q("#7a44e0")},uOr:{value:new q("#ffc23a")}},vertexShader:_e,fragmentShader:Pe,transparent:!0,depthWrite:!1,blending:K,side:Me,fog:!1}),this.front=new B(this.geo,this.mat),this.front.name="front-tempete",this.front.frustumCulled=!1,this.front.renderOrder=4,this.front.visible=!1,this.front.position.set(0,-l,0),t.add(this.front),this.flash=document.createElement("div"),this.flash.setAttribute("aria-hidden","true"),this.flash.className="monde-flash",this.flash.style.cssText="position:absolute;inset:0;pointer-events:none;opacity:0;background:radial-gradient(circle at 50% 45%, #fff 0%, #fff6dc 45%, #e9d2ff 100%);",f.appendChild(this.flash)}tempete=null;geo;mat;front;flash;qualite=.8;flashs=!1;dernierFlash=-1;axe=new w(1,0,0);setQualite(t){this.qualite=t,this.tempete?.setQualite(t)}modele(){return this.tempete||(this.tempete=De({particules:6e3,graine:2027}),this.tempete.setQualite(this.qualite),this.tempete.setFlashsReduits(this.reduit),this.scene.add(this.tempete.group)),this.tempete}update(t,f,l,x,v,n){if(!t)return this.tempete&&this.tempete.setProgression(0),this.front.visible=!1,this.flashs&&(this.flash.style.opacity="0",this.flashs=!1),this.dernierFlash=-1,0;const c=this.modele();let M;if(t.phase==="preavis"?M=.08+.42*D(0,t.duree,t.t):M=(.5+.5*D(0,2.5,t.t))*(1-D(I.flash,I.flash+.8,t.t))*(1-n*.95),c.setProgression(M),c.suivre(l,x),c.animer(f),t.phase==="tempete"){const d=D(.25,.7,n)*(1-D(I.flash+.2,I.flash+1.2,t.t));this.front.visible=d>.005;const a=D(I.frontDebut,I.frontFin,t.t);this.axe.copy(v),this.mat.uniforms.uCos.value=1.02-2.06*a,this.mat.uniforms.uAlpha.value=d,this.mat.uniforms.uTemps.value=f%600;const r=t.t-I.flash,h=r<0?0:r<.12?r/.12:Math.max(0,1-(r-.12)/(this.reduit?1.6:.9)),s=(this.reduit?.35:.95)*h;this.flash.style.opacity=s.toFixed(3),this.flashs=s>0,r>=0&&this.dernierFlash<0&&!this.reduit&&(c.declencherEclair(),this.dernierFlash=t.t)}else this.front.visible=!1;return c.etat.assombrissement}dispose(){this.tempete?.dispose(),this.front.removeFromParent(),this.geo.dispose(),this.mat.dispose(),this.flash.remove()}}export{I as CINE,Ne as CinematiquePrestige,Be as reculCamera};
