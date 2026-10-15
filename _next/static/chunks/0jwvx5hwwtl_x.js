(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59881,e=>{"use strict";var s=e.i(43476),a=e.i(71645);e.i(47167);var i=e.i(8037),t=e.i(74997),r=e.i(26616);function o(e,s){return s.trim()?"Email"!==e||/\S+@\S+\.\S+/.test(s)?void 0:"Please enter a valid email address":`${e} is required`}function n(){let[e,n]=(0,a.useState)("Homeowner"),[l,c]=(0,a.useState)("Complete package (fireplace, stone & mantel)"),[d,m]=(0,a.useState)("Electric"),[p,h]=(0,a.useState)(""),[x,g]=(0,a.useState)(""),[u,f]=(0,a.useState)(""),[b,y]=(0,a.useState)(""),[v,j]=(0,a.useState)(""),[w,k]=(0,a.useState)(""),[N,z]=(0,a.useState)(!1),[q,C]=(0,a.useState)(!1),[S,F]=(0,a.useState)(""),[B,A]=(0,a.useState)({});function P(e,s){let a=o(e.charAt(0).toUpperCase()+e.slice(1),s);A(s=>({...s,[e]:a}))}function T(e){B[e]&&A(s=>({...s,[e]:void 0}))}async function E(s){if(s.preventDefault(),N)return;F("");let a={},r=o("Name",p),n=o("Phone",x),c=o("Email",u);if(r&&(a.name=r),n&&(a.phone=n),c&&(a.email=c),Object.keys(a).length>0){A(a);let e=r?"name":n?"phone":"email";document.getElementById(e)?.focus();return}if(z(!0),w){C(!0),z(!1);return}try{if(!(await fetch("https://formspree.io/f/preview-disabled",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:"fireplaces-landing",role:e,scope:l,fuel:d,name:p.trim(),phone:x.trim(),email:u.trim(),address:b.trim(),details:v.trim()})})).ok)throw Error("Submission failed");(0,t.trackLeadConversion)(),C(!0)}catch{F(`Something went wrong. Please try again or call us at ${i.siteConfig.phone}.`)}finally{z(!1)}}return q?(0,s.jsxs)("div",{className:"ms-form-success",role:"status",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,s.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,s.jsx)("h3",{children:"Request received"}),(0,s.jsxs)("p",{children:["Thanks — we’ll be in touch shortly with your fireplace pricing. Or call us now at"," ",(0,s.jsx)(r.TelLink,{children:i.siteConfig.phone}),"."]})]}):(0,s.jsxs)("form",{className:"ms-form",onSubmit:E,noValidate:!0,children:[S&&(0,s.jsx)("div",{className:"ms-form-error",role:"alert",children:S}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"role",children:"I’m a…"}),(0,s.jsxs)("select",{id:"role",value:e,onChange:e=>n(e.target.value),children:[(0,s.jsx)("option",{children:"Homeowner"}),(0,s.jsx)("option",{children:"Contractor or builder"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"scope",children:"What are you looking for?"}),(0,s.jsxs)("select",{id:"scope",value:l,onChange:e=>c(e.target.value),children:[(0,s.jsx)("option",{children:"Complete package (fireplace, stone & mantel)"}),(0,s.jsx)("option",{children:"Fireplace unit only"}),(0,s.jsx)("option",{children:"Stone surround or mantel for an existing fireplace"}),(0,s.jsx)("option",{children:"Not sure yet"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"fuel",children:"Fuel type"}),(0,s.jsxs)("select",{id:"fuel",value:d,onChange:e=>m(e.target.value),children:[(0,s.jsx)("option",{children:"Electric"}),(0,s.jsx)("option",{children:"Propane"}),(0,s.jsx)("option",{children:"Not sure yet"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{id:"name",value:p,"aria-required":"true","aria-invalid":B.name?"true":void 0,onChange:e=>{h(e.target.value),T("name")},onBlur:()=>P("name",p)}),B.name&&(0,s.jsx)("p",{className:"ms-field-error",children:B.name})]}),(0,s.jsxs)("div",{className:"ms-field-row",children:[(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,s.jsx)("input",{id:"phone",type:"tel",value:x,"aria-required":"true","aria-invalid":B.phone?"true":void 0,onChange:e=>{g(e.target.value),T("phone")},onBlur:()=>P("phone",x)}),B.phone&&(0,s.jsx)("p",{className:"ms-field-error",children:B.phone})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{id:"email",type:"email",value:u,"aria-required":"true","aria-invalid":B.email?"true":void 0,onChange:e=>{f(e.target.value),T("email")},onBlur:()=>P("email",u)}),B.email&&(0,s.jsx)("p",{className:"ms-field-error",children:B.email})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsxs)("label",{htmlFor:"address",children:["Project address ",(0,s.jsx)("span",{className:"ms-opt",children:"(optional)"})]}),(0,s.jsx)("input",{id:"address",value:b,onChange:e=>y(e.target.value)})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"details",children:"Tell us about your project"}),(0,s.jsx)("textarea",{id:"details",rows:4,placeholder:"New build or remodel, the wall size, the look you're after (live edge, modern or barn beam mantel), timeline…",value:v,onChange:e=>j(e.target.value)})]}),(0,s.jsx)("input",{className:"ms-honeypot",tabIndex:-1,autoComplete:"off","aria-hidden":"true",name:"_gotcha",value:w,onChange:e=>k(e.target.value)}),(0,s.jsx)("button",{className:"ms-btn ms-btn--primary ms-btn--lg ms-btn--block",type:"submit",disabled:N,children:N?"Sending…":"Send my request"}),(0,s.jsx)("p",{className:"ms-form-fine",children:"We’ll only use your details to prepare your quote."})]})}let l="(506) 854-2266",c="/msd-fireplaces-preview/images/fireplaces",d="/msd-fireplaces-preview/images/stone",m=[`${d}/eldorado/eldorado-cut-coarse-stone-cannonade-int-fireplace.webp`,`${d}/owned/msd-sierra-black-fireplace-big-min.webp`,`${d}/canyon/canyon-versetta-stone-siding-ledgestone-sand-double-sided-fireplace.webp`],p=`${c}/msd-cordillera-champagne-fireplace.webp`,h=`${c}/msd-arcadian-fireplace.webp`,x=`${d}/owned/msd-cordillera-lava-fireplace-1.webp`,g=`${d}/eldorado/eldorado-tundrabrick-chalk-dust-int-kitchen-fireplace.webp`,u=[{src:"/msd-fireplaces-preview/images/brands/napoleon.webp",alt:"Napoleon"},{src:"/msd-fireplaces-preview/images/brands/eldorado-stone.webp",alt:"Eldorado Stone"},{src:"/msd-fireplaces-preview/images/brands/mathios-stone.webp",alt:"Mathios Stone"},{src:"/msd-fireplaces-preview/images/brands/canyon-stone.png",alt:"Canyon Stone Canada"},{src:"/msd-fireplaces-preview/images/brands/colonial-brick-stone-horizontal.webp",alt:"Colonial Brick & Stone"}],f=[{src:`${c}/msd-fireplace-package-001.webp`,alt:"Fireplace package with a grey ledgestone surround, raised hearth and rustic beam mantel",title:"Fireplace Package 001",caption:"Ledgestone surround, raised hearth, barn beam mantel"},{src:`${c}/msd-fireplace-package-002.webp`,alt:"Floor-to-ceiling stone fireplace wall with a TV above and built-in log storage on both sides",title:"Fireplace Package 002",caption:"Full-height stone wall, TV above, log storage"},{src:`${c}/msd-fireplace-package-003.webp`,alt:"Dark stacked-stone fireplace wall with a wood mantel between built-in shelves",title:"Fireplace Package 003",caption:"Dark stacked stone between built-ins, wood mantel"},{src:`${c}/msd-fireplace-stacked-stone-barn-beam.webp`,alt:"Grey stacked-stone fireplace with a rough-sawn barn beam mantel",title:"Stacked stone & barn beam",caption:"Grey stacked stone, rough-sawn barn beam mantel"},{src:`${c}/napoleon-electric-fireplace.webp`,alt:"Napoleon electric fireplace insert with blue and orange flames in a tiled wall",title:"Napoleon electric",caption:"Electric insert, framed in tile"},{src:`${c}/napoleon-high-country-nz8000.webp`,alt:"Napoleon High Country fireplace burning in a stone-walled living room",title:"Napoleon High Country",caption:"Real-flame fireplace in a full stone wall"}],b=[{tag:"1 · Fireplace",src:`${c}/napoleon-high-country-nz8000.webp`,alt:"Napoleon fireplace burning in a stone-walled living room",title:"Fall in love with a fireplace",lead:"Start with the Napoleon unit, sized for your room and your budget.",points:["Electric or propane","Inserts and built-in units","Help choosing the right size and heat output"],options:"Napoleon electric & propane"},{tag:"2 · Stone",src:`${c}/msd-fireplace-stacked-stone-barn-beam.webp`,alt:"Grey stacked-stone fireplace surround",title:"Choose your stone",lead:"Pick the stone that best matches your decor, from rustic to modern.",points:["Natural and manufactured stone","Ledgestone, fieldstone, brick and more","Take samples home before you decide"],options:"Eldorado, Mathios, Canyon Stone & Colonial"},{tag:"3 · Mantel",src:`${c}/msd-fireplace-package-001.webp`,alt:"Fireplace with a ledgestone surround and a rustic beam mantel",title:"Add a mantel",lead:"Finish the wall with a mantel that suits your style.",points:["Sized to your fireplace and wall","A natural focal point for decor","Pairs with any stone we carry"],options:"Live edge, modern or rustic barn beam"}],y=[{q:"What's included in a Fireplace Package?",a:"A package brings together the three things a fireplace wall needs: the fireplace unit, the stone that surrounds it, and a mantel. You pick each one with our help, and we quote it as one package so you're not pricing three separate jobs."},{q:"What fireplace brand do you carry?",a:"We're an authorized Napoleon dealer. Napoleon is a Canadian manufacturer with a long track record and solid warranties. For the surround, you can choose from the stone lines we stock, including Eldorado Stone, Mathios Stone, Canyon Stone Canada and Colonial Brick & Stone."},{q:"Should I choose electric or propane?",a:"Electric fireplaces need no venting or gas line, so they can go almost anywhere, including a blank wall in a basement or condo. Propane gives you a real flame and real heat, and keeps working during a power outage, but needs venting and a gas line. We'll walk you through which one suits your space."},{q:"Can you redo the stone around my existing fireplace?",a:"Yes. If your fireplace is in good shape and you only want to update the look, we can supply new stone and a new mantel for the surround. Bring us a photo and rough measurements and we'll help you plan it."},{q:"Do you install fireplaces?",a:"We supply the fireplace, stone and mantel, and we partner with trusted local contractors for installation. If you need an installer, we're happy to connect you with one of our Preferred Contractor partners."},{q:"Do you deliver?",a:"Yes. We offer delivery throughout Atlantic Canada, or you can pick up your order at our Moncton showroom."}],v={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},j={...v,strokeWidth:2.5},w=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...v,children:(0,s.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})}),k=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...j,children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})}),N=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...v,children:(0,s.jsx)("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),z=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...v,children:(0,s.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),q=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...v,children:[(0,s.jsx)("path",{d:"M1 3h15v13H1z"}),(0,s.jsx)("path",{d:"M16 8h4l3 3v5h-7z"}),(0,s.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),(0,s.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]}),C=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...v,children:[(0,s.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,s.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),S=()=>(0,s.jsxs)("svg",{className:"ms-problem-icon",width:"30",height:"30",viewBox:"0 0 24 24",...v,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,s.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),F=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...v,children:[(0,s.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,s.jsx)("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),B=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...v,children:[(0,s.jsx)("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),(0,s.jsx)("polyline",{points:"2 17 12 22 22 17"}),(0,s.jsx)("polyline",{points:"2 12 12 17 22 12"})]}),A=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...v,children:[(0,s.jsx)("line",{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}),(0,s.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,s.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,s.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),P=({className:e,size:a=30})=>(0,s.jsx)("svg",{className:e,width:a,height:a,viewBox:"0 0 24 24",...v,children:(0,s.jsx)("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),T="var(--font-plus-jakarta-sans),system-ui,sans-serif",E=`
.ms-root{
  --ink:#1B2730; --ink-soft:#2C3B45; --paper:#F6F4EF; --sand:#E7E0D2;
  --cedar:#C25E36; --cedar-dark:#A84E2B; --harbour:#3E5C6B; --sage:#6F7B5F;
  --line:rgba(27,39,48,.12); --muted:#5C6770;
  font-family:${T}; color:var(--ink);
  background:var(--paper); line-height:1.55; -webkit-font-smoothing:antialiased;
}
.ms-root *{box-sizing:border-box;}
.ms-root h1,.ms-root h2,.ms-root h3,.ms-root h4{font-family:${T};line-height:1.08;margin:0;}
.ms-root p{margin:0;}
.ms-accent{color:var(--cedar);}
.ms-eyebrow{font-family:${T};text-transform:uppercase;letter-spacing:.16em;
  font-size:.72rem;font-weight:700;color:var(--cedar);margin-bottom:14px;}
.ms-eyebrow--center{text-align:center;}
.ms-eyebrow--light{color:#E9A887;}

.ms-btn{display:inline-flex;align-items:center;gap:12px;justify-content:center;
  font-family:${T};font-weight:700;font-size:.95rem;text-decoration:none;
  padding:12px 20px;border-radius:8px;cursor:pointer;border:2px solid transparent;
  transition:transform .12s ease, background .15s ease, box-shadow .15s ease;}
.ms-btn:active{transform:translateY(1px);}
.ms-btn--primary{background:var(--cedar);color:#fff;}
.ms-btn--primary:hover{background:var(--cedar-dark);box-shadow:0 6px 18px rgba(194,94,54,.28);}
.ms-btn--ghost{background:transparent;color:var(--ink);border-color:var(--line);}
.ms-btn--ghost:hover{border-color:var(--ink);}
.ms-btn--ghost-light{background:transparent;color:#fff;border-color:rgba(255,255,255,.4);}
.ms-btn--ghost-light:hover{border-color:#fff;}
.ms-btn--lg{padding:15px 26px;font-size:1rem;}
.ms-btn--block{width:100%;}

.ms-hero{position:relative;overflow:hidden;background:var(--ink);
  display:flex;align-items:center;min-height:100vh;padding:104px 28px;}
.ms-hero-bg{position:absolute;inset:0;z-index:0;}
.ms-hero-slide{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background-size:cover;background-position:center;
  opacity:0;transition:opacity 1.4s ease;animation:ms-kenburns 20s ease-in-out infinite;will-change:transform,opacity;}
.ms-hero-slide.is-active{opacity:.5;}
@keyframes ms-kenburns{0%{transform:scale(1)}50%{transform:scale(1.08)}100%{transform:scale(1)}}
.ms-hero::after{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:linear-gradient(90deg,rgba(27,39,48,.62) 0%,rgba(27,39,48,.22) 56%,rgba(27,39,48,0) 100%);}
.ms-hero-inner{position:relative;z-index:1;max-width:1180px;margin:0 auto;width:100%;}
.ms-hero-copy{max-width:620px;}
.ms-hero .ms-h1{color:#fff;text-shadow:0 1px 24px rgba(0,0,0,.28);}
.ms-hero .ms-lede{color:rgba(255,255,255,.9);max-width:46ch;margin-top:22px;margin-bottom:32px;}
.ms-hero .ms-trust-chips li{color:#fff;}
.ms-hero .ms-trust-chips svg{color:#A7B98C;}
.ms-hero .ms-eyebrow{color:#F2A878;}
.ms-hero .ms-accent{color:#F2A878;}
.ms-h1{font-size:clamp(2.3rem,5vw,3.7rem);font-weight:800;letter-spacing:-.02em;margin-bottom:16px;}
  font-family:${T};font-weight:600;font-size:.82rem;padding:8px 15px;border-radius:99px;margin-bottom:22px;}
.ms-lede{font-size:1.12rem;color:var(--muted);max-width:36ch;}
.ms-hero-cta{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:26px;}
.ms-trust-chips{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:9px;}
.ms-trust-chips li{display:flex;align-items:center;gap:9px;font-size:.92rem;color:var(--ink-soft);font-weight:500;}
.ms-trust-chips svg{color:var(--sage);flex:none;}

.ms-brands{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff;padding:28px;text-align:center;}
.ms-brands-label{font-family:${T};text-transform:uppercase;letter-spacing:.14em;
  font-size:.7rem;font-weight:700;color:var(--muted);margin-bottom:18px;}
.ms-brand-logos{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:40px;max-width:900px;margin:0 auto;}
.ms-brand-logos img{height:34px;width:auto;object-fit:contain;opacity:.8;filter:grayscale(.2);}

.ms-section{max-width:1100px;margin:0 auto;padding:78px 28px;min-height:100vh;display:flex;flex-direction:column;justify-content:center;}
.ms-h2{font-size:clamp(1.7rem,3.4vw,2.5rem);font-weight:800;letter-spacing:-.02em;}
.ms-root .ms-h2--center{text-align:center;max-width:20ch;margin-inline:auto;}
.ms-h2--light{color:#fff;}
.ms-section-head{margin-bottom:42px;}

.ms-problem{text-align:left;}
.ms-problem-inner{display:grid;grid-template-columns:.82fr 1.18fr;gap:50px;align-items:center;width:100%;}
.ms-problem-media{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:3/4;box-shadow:0 18px 50px rgba(27,39,48,.12);}
.ms-problem-media img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-problem-grid{display:flex;flex-direction:column;gap:14px;margin:22px 0;}
.ms-problem-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:20px 22px;}
.ms-problem-card h3{font-size:1.06rem;margin-bottom:6px;}
.ms-problem-card p{color:var(--muted);font-size:.93rem;}
.ms-problem-icon{color:var(--cedar);margin-bottom:10px;display:block;}
.ms-problem-bridge{font-size:1.05rem;max-width:none;margin:0;color:var(--ink-soft);}
.ms-problem-bridge strong{color:var(--ink);}

.ms-types{background-color:#141D24;position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:78px 28px;
  background-image:linear-gradient(rgba(20,29,36,.82),rgba(20,29,36,.9)),url('/msd-fireplaces-preview/images/stone/eldorado/eldorado-white-brick-int-fireplace-living.webp');
  background-size:cover;background-position:center;background-attachment:fixed;}
.ms-types-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-types .ms-eyebrow{color:#F2A878;}
.ms-types .ms-h2{color:#fff;}
.ms-type-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.ms-type-card{position:relative;background:rgba(20,29,36,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,.14);color:#fff;border-radius:16px;padding:30px 26px;overflow:hidden;}
.ms-type-card h3{font-size:1.5rem;margin-bottom:12px;}
.ms-type-card p{color:rgba(255,255,255,.74);font-size:.96rem;margin-bottom:12px;}
.ms-type-best{font-size:.86rem;color:rgba(255,255,255,.92)!important;border-top:1px solid rgba(255,255,255,.16);padding-top:12px;margin-bottom:0!important;}
.ms-type-best strong{color:#fff;}
.ms-type-tag{position:absolute;top:18px;right:18px;background:var(--cedar);color:#fff;font-family:${T};
  font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:5px 10px;border-radius:99px;}
.ms-mid-cta{text-align:center;margin-top:40px;}

.ms-why{background-color:#141D24;background-image:linear-gradient(rgba(20,29,36,.9),rgba(20,29,36,.94)),url('/msd-fireplaces-preview/images/stone/owned/msd-sierra-black-fireplace-big-min.webp');
  background-size:cover;background-position:center;background-attachment:fixed;
  color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;}
.ms-why-inner{max-width:1100px;margin:0 auto;padding:78px 28px;display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:start;}
.ms-why .ms-eyebrow{color:var(--cedar);}
.ms-why .ms-h2{color:#fff;margin-bottom:18px;}
.ms-why-sub{color:rgba(255,255,255,.72);font-size:1.05rem;}
.ms-value-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:24px;}
.ms-value-list li{display:flex;gap:16px;align-items:flex-start;}
.ms-value-list svg{color:var(--cedar);flex:none;margin-top:3px;}
.ms-value-list h3{font-size:1.12rem;margin-bottom:5px;}
.ms-value-list p{color:rgba(255,255,255,.68);font-size:.95rem;}

.ms-pcp-inner{background:var(--sand);border:1px solid var(--line);border-radius:20px;padding:46px;
  display:grid;grid-template-columns:1fr 1.2fr;gap:44px;align-items:center;}
.ms-pcp-photo{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:4/5;background:#fff;box-shadow:0 14px 40px rgba(27,39,48,.12);}
.ms-pcp-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-pcp-copy .ms-h2{margin-bottom:16px;}
.ms-pcp-copy p{color:var(--ink-soft);font-size:1.05rem;margin-bottom:24px;}
.ms-pcp-points{list-style:none;margin:0 0 26px;padding:0;display:flex;flex-direction:column;gap:14px;}
.ms-pcp-points li{display:flex;align-items:center;gap:11px;font-weight:600;color:var(--ink);}
.ms-pcp-points svg{color:var(--sage);flex:none;}

/* The photo fills the column height next to the steps rather than holding 3:4 —
   with longer step copy a fixed ratio grows wider than its column. */
.ms-steps-inner{display:grid;grid-template-columns:minmax(0,1.18fr) minmax(0,.82fr);gap:50px;align-items:stretch;width:100%;}
.ms-steps-media{position:relative;border-radius:18px;overflow:hidden;min-height:420px;box-shadow:0 18px 50px rgba(27,39,48,.14);}
.ms-steps-media img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-step-grid{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:16px;}
.ms-step{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px 26px;overflow:hidden;}
.ms-step-icon{color:var(--cedar);margin-bottom:16px;display:block;}
.ms-step-num{position:absolute;top:16px;right:20px;font-family:${T};font-weight:800;font-size:2.6rem;color:var(--sand);line-height:1;}
.ms-step h3{font-size:1.2rem;margin-bottom:10px;}
.ms-step p{color:var(--muted);font-size:.96rem;}

.ms-trade{background:var(--harbour);color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;}
.ms-trade-inner{max-width:1100px;margin:0 auto;padding:72px 28px;display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:stretch;}
.ms-trade-body{color:rgba(255,255,255,.84);font-size:1.05rem;margin:16px 0 26px;max-width:48ch;}
.ms-trade-cta{display:flex;flex-wrap:wrap;gap:20px;margin-top:30px;}
.ms-trade-photo{position:relative;border-radius:16px;overflow:hidden;min-height:460px;align-self:stretch;background:rgba(255,255,255,.1);box-shadow:0 14px 40px rgba(0,0,0,.22);}
.ms-trade-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-trade-points{list-style:none;margin:22px 0 0;padding:0;display:flex;flex-direction:column;gap:15px;}
.ms-trade-points li{display:flex;align-items:center;gap:12px;font-weight:600;font-size:1rem;}
.ms-trade-points svg{color:#fff;flex:none;}

.ms-testi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;}
.ms-testi-card{position:relative;background:#fff;border:1px solid var(--line);border-radius:14px;padding:26px;margin:0;overflow:hidden;}
.ms-testi-card::before{content:"\\201C";position:absolute;top:-14px;right:16px;font-family:${T};font-size:5.5rem;line-height:1;color:var(--sand);pointer-events:none;}
.ms-stars{color:var(--cedar);letter-spacing:2px;margin-bottom:14px;}
.ms-testi-card blockquote{margin:0 0 16px;font-size:1rem;color:var(--ink-soft);}
.ms-testi-card figcaption{font-weight:600;font-size:.9rem;color:var(--muted);}
.ms-testi{background:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:78px 28px;}
.ms-testi-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-faq{background:var(--sand);display:flex;flex-direction:column;justify-content:center;padding:78px 28px;}
.ms-faq-inner{max-width:1100px;margin:0 auto;width:100%;}

.ms-proj-cap{margin-top:14px;}
.ms-proj-loc{display:block;font-family:${T};font-weight:700;font-size:1.02rem;color:var(--ink);}
.ms-proj-scope{display:block;font-size:.88rem;color:var(--muted);margin-top:3px;}

.ms-install{background:#fff;border-top:1px solid var(--line);max-width:none;}
.ms-install>*{max-width:1100px;margin-inline:auto;width:100%;}
.ms-install-sub{color:var(--muted);font-size:1.05rem;max-width:60ch;margin-top:14px;}
.ms-install-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:44px 40px;}
.ms-install-card{display:flex;flex-direction:column;min-width:0;}
.ms-install-media{position:relative;border-radius:14px;overflow:hidden;aspect-ratio:16/9;
  background:#fff;margin-bottom:18px;}
.ms-install-media img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-install-card h3{font-size:1.5rem;margin-bottom:8px;}
.ms-install-lead{color:var(--muted);font-size:1rem;margin-bottom:18px;}
.ms-install-points{list-style:none;margin:0 0 18px;padding:0;display:flex;flex-direction:column;gap:13px;}
.ms-install-points li{display:flex;align-items:flex-start;gap:11px;font-size:.95rem;color:var(--muted);}
.ms-install-points svg{color:var(--sage);flex:none;margin-top:3px;}
.ms-install-best{margin-top:auto;padding-top:14px;border-top:1px solid var(--line);
  font-size:.9rem;color:var(--ink-soft);}
.ms-install-best strong{color:var(--ink);}
/* Closing note. Kept visually distinct from body copy so it reads as an aside a
   counter person would add, not another paragraph to wade through. The lead sits
   on its own line and the whole block is pushed well clear of the cards above. */
.ms-install-note{margin-top:64px;padding:20px 24px;background:var(--sand);
  border-left:3px solid var(--cedar);border-radius:0 12px 12px 0;
  font-size:.96rem;color:var(--ink-soft);max-width:72ch;
  display:flex;flex-direction:column;gap:6px;}
.ms-install-note strong{color:var(--ink);font-size:1.02rem;}
.ms-install-grid--3{grid-template-columns:repeat(3,1fr);gap:36px 28px;}
.ms-install-grid--3 .ms-install-media{aspect-ratio:8/5;}
.ms-install-grid--3 .ms-install-card h3{font-size:1.3rem;}
.ms-type-grid--3{grid-template-columns:repeat(3,1fr);}
.ms-type-tag+h3{padding-right:104px;}
.ms-fp{min-height:100vh;display:flex;flex-direction:column;justify-content:center;background:#fff;
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:78px 28px;}
.ms-fp-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-fp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.ms-fp-item{margin:0;}
.ms-fp-shot{position:relative;aspect-ratio:8/5;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:var(--sand);}
.ms-fp-shot img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease;}
.ms-fp-item:hover .ms-fp-shot img{transform:scale(1.04);}

.ms-faq-list{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:12px;}
.ms-faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.ms-faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background:none;border:none;cursor:pointer;text-align:left;padding:20px 22px;
  font-family:${T};font-weight:600;font-size:1.04rem;color:var(--ink);}
.ms-faq-icon{font-size:1.5rem;color:var(--cedar);line-height:1;flex:none;}
.ms-faq-a{padding:0 22px 22px;color:var(--muted);font-size:.98rem;}
.ms-faq-item:not(.is-open) .ms-faq-a{display:none;}

.ms-photo-tag{position:absolute;left:12px;bottom:12px;font-family:${T};font-size:.62rem;font-weight:700;
  text-transform:uppercase;letter-spacing:.08em;padding:5px 11px;border-radius:99px;background:rgba(27,39,48,.82);color:#fff;}

.ms-quote{background:var(--sand);}
.ms-quote-inner{max-width:1080px;margin:0 auto;padding:78px 28px;display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center;}
.ms-quote-copy .ms-h2{margin-bottom:14px;}
.ms-quote-copy>p{color:var(--ink-soft);font-size:1.08rem;margin-bottom:22px;}
.ms-quote-points{list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:11px;}
.ms-quote-points li{display:flex;align-items:center;gap:10px;font-weight:500;color:var(--ink-soft);}
.ms-quote-points svg{color:var(--sage);flex:none;}
.ms-quote-call{display:inline-flex;align-items:center;gap:9px;color:var(--ink);font-weight:600;text-decoration:none;}
.ms-quote-call:hover{color:var(--cedar);}
/* The scope select has long options; without min-width:0 its intrinsic width
   pushes the one-column mobile grid past the viewport. */
.ms-quote-inner>*,.ms-field-row>*{min-width:0;}
.ms-field input{width:100%;min-width:0;}
.ms-field select{width:100%;max-width:100%;text-overflow:ellipsis;}
.ms-quote-form-wrap{background:#fff;border-radius:18px;padding:32px;border:1px solid var(--line);box-shadow:0 18px 50px rgba(27,39,48,.08);}
.ms-form{display:flex;flex-direction:column;gap:16px;}
.ms-field{display:flex;flex-direction:column;gap:6px;}
.ms-field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.ms-field label{font-size:.82rem;font-weight:600;color:var(--ink-soft);}
.ms-opt{font-weight:400;color:var(--muted);}
.ms-field input,.ms-field textarea,.ms-field select{font-family:inherit;font-size:.96rem;padding:11px 13px;
  border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--ink);resize:vertical;}
.ms-field input:focus,.ms-field textarea:focus,.ms-field select:focus{outline:2px solid var(--cedar);outline-offset:1px;border-color:transparent;}
.ms-field-error{font-size:.78rem;color:#B42318;margin:0;}
.ms-form-error{background:#FEF3F2;border:1px solid #FDA29B;color:#B42318;border-radius:8px;padding:12px 14px;font-size:.9rem;}
.ms-honeypot{position:absolute;left:-9999px;width:1px;height:1px;opacity:0;}
.ms-form-fine{font-size:.78rem;color:var(--muted);text-align:center;}
.ms-form-success{text-align:center;padding:30px 10px;}
.ms-form-success svg{color:var(--sage);margin-bottom:14px;}
.ms-form-success h3{font-size:1.4rem;margin-bottom:8px;}
.ms-form-success p{color:var(--muted);}
.ms-form-success a{color:var(--cedar);font-weight:600;text-decoration:none;}
.ms-form-success a:hover{text-decoration:underline;}

.ms-fab{position:fixed;right:20px;bottom:20px;z-index:50;width:60px;height:60px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;background:var(--cedar);color:#fff;text-decoration:none;
  box-shadow:0 8px 24px rgba(194,94,54,.45);transition:transform .15s ease,background .15s ease;}
.ms-fab:hover{background:var(--cedar-dark);transform:translateY(-2px);}
.ms-fab:active{transform:translateY(0);}
.ms-fab svg{width:26px;height:26px;}
.ms-fab::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--cedar);
  animation:ms-fab-pulse 2.4s ease-out infinite;}
@keyframes ms-fab-pulse{0%{transform:scale(1);opacity:.55}100%{transform:scale(1.7);opacity:0}}

.ms-sticky-bar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:40;gap:10px;padding:12px 16px;
  background:rgba(246,244,239,.96);backdrop-filter:blur(8px);border-top:1px solid var(--line);}
.ms-sticky-btn{flex:1;}

@media (max-width:900px){
  .ms-hero{min-height:auto;padding:84px 22px;}
  .ms-section,.ms-why,.ms-trade,.ms-fp,.ms-testi{min-height:auto;}
  .ms-lede{max-width:none;}
  .ms-why-inner,.ms-pcp-inner,.ms-trade-inner,.ms-problem-inner,.ms-steps-inner,.ms-quote-inner{grid-template-columns:1fr;gap:32px;}
  .ms-problem-media,.ms-steps-media{aspect-ratio:16/11;min-height:0;}
  .ms-trade-photo{min-height:280px;}
  .ms-pcp-inner{padding:34px;}
  .ms-types,.ms-why{background-attachment:scroll;}
  .ms-pcp-photo{aspect-ratio:16/10;}
  .ms-install-grid,.ms-install-grid--3,.ms-type-grid--3,.ms-problem-grid,.ms-type-grid,.ms-step-grid,.ms-testi-grid,.ms-fp-grid{grid-template-columns:1fr;}
}
@media (min-width:641px) and (max-width:900px){
  .ms-fp-grid{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:640px){
  .ms-sticky-bar{display:flex;padding-bottom:calc(12px + env(safe-area-inset-bottom));}
  .ms-section{padding:54px 22px;}
  .ms-types,.ms-fp,.ms-testi,.ms-faq{padding:54px 22px;}
  .ms-field-row{grid-template-columns:1fr;}
  .ms-fab{bottom:calc(84px + env(safe-area-inset-bottom));}
  .ms-root{padding-bottom:calc(76px + env(safe-area-inset-bottom));}
}
/* Subtle scroll-reveal — only applies once JS arms it, so no-JS shows everything. */
@media (prefers-reduced-motion:no-preference){
  .ms-reveal-armed .ms-reveal{opacity:0;transform:translateY(16px);
    transition:opacity .6s cubic-bezier(.22,.61,.36,1),transform .6s cubic-bezier(.22,.61,.36,1);}
  .ms-reveal-armed .ms-reveal.is-in{opacity:1;transform:none;}
}
@media (prefers-reduced-motion:reduce){ .ms-root *{transition:none!important;animation:none!important;} }
`;e.s(["FireplacesLandingPage",0,function(){let[e,i]=(0,a.useState)(0),[t,o]=(0,a.useState)([0]),[c,d]=(0,a.useState)(0),v=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=v.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=Array.from(e.querySelectorAll(".ms-section-head,.ms-problem-card,.ms-type-card,.ms-value-list li,.ms-step,.ms-install-card,.ms-fp-item,.ms-testi-card,.ms-faq-item,.ms-pcp-inner,.ms-quote-form-wrap")),a=new Map;s.forEach(e=>{e.classList.add("ms-reveal");let s=e.parentElement;if(!s)return;let i=a.get(s)??0;a.set(s,i+1),i&&(e.style.transitionDelay=`${Math.min(70*i,280)}ms`)});let i=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),i.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});return s.forEach(e=>i.observe(e)),e.classList.add("ms-reveal-armed"),()=>i.disconnect()},[]),(0,a.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||m.length<2)return;let e=setTimeout(()=>o(e=>e.includes(1)?e:[...e,1]),1500),s=setInterval(()=>{i(e=>{let s=(e+1)%m.length;return o(e=>e.includes(s)?e:[...e,s]),s})},5e3);return()=>{clearTimeout(e),clearInterval(s)}},[]),(0,s.jsxs)("div",{className:"ms-root",ref:v,children:[(0,s.jsx)("style",{children:E}),(0,s.jsxs)("section",{className:"ms-hero",children:[(0,s.jsx)("div",{className:"ms-hero-bg","aria-hidden":"true",children:m.map((a,i)=>t.includes(i)?(0,s.jsx)("img",{className:"ms-hero-slide"+(i===e?" is-active":""),src:a,alt:"",fetchPriority:0===i?"high":void 0,loading:0===i?"eager":"lazy",decoding:"async"},a):(0,s.jsx)("div",{className:"ms-hero-slide"},a))}),(0,s.jsx)("div",{className:"ms-hero-inner",children:(0,s.jsxs)("div",{className:"ms-hero-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Fireplaces · Moncton, Riverview & Dieppe"}),(0,s.jsxs)("h1",{className:"ms-h1",children:["Fireplace packages at ",(0,s.jsx)("span",{className:"ms-accent",children:"rock-bottom prices."})]}),(0,s.jsx)("p",{className:"ms-lede",children:"Pick a Napoleon fireplace, choose the stone that matches your decor, then add a mantel that suits your style. We’ll take it from there."}),(0,s.jsxs)("div",{className:"ms-hero-cta",children:[(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Get my free fireplace quote"}),(0,s.jsxs)(r.TelLink,{className:"ms-btn ms-btn--ghost-light ms-btn--lg",children:[(0,s.jsx)(w,{})," ",l]})]}),(0,s.jsxs)("ul",{className:"ms-trust-chips",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Authorized Napoleon dealer"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{}),"Fireplace, stone & mantel in one package"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Delivery throughout Atlantic Canada"]})]})]})})]}),(0,s.jsxs)("section",{className:"ms-brands","aria-label":"Fireplace and stone brands we carry",children:[(0,s.jsx)("p",{className:"ms-brands-label",children:"Fireplaces & stone we carry"}),(0,s.jsx)("div",{className:"ms-brand-logos",children:u.map(e=>(0,s.jsx)("img",{src:e.src,alt:e.alt},e.alt))})]}),(0,s.jsx)("section",{className:"ms-section ms-problem",children:(0,s.jsxs)("div",{className:"ms-problem-inner",children:[(0,s.jsx)("div",{className:"ms-problem-media",children:(0,s.jsx)("img",{src:p,alt:"Floor-to-ceiling stone fireplace in Cordillera Champagne with a modern insert",loading:"lazy",decoding:"async"})}),(0,s.jsxs)("div",{className:"ms-problem-content",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"A new fireplace wall shouldn’t take three stores."}),(0,s.jsxs)("div",{className:"ms-problem-grid",children:[(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(S,{}),(0,s.jsx)("h3",{children:"Three decisions that have to match"}),(0,s.jsx)("p",{children:"The fireplace, the stone around it and the mantel are usually bought in different places, and nobody checks that they work together until it’s on the wall."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(z,{}),(0,s.jsx)("h3",{children:"Advice from people who see it every day"}),(0,s.jsx)("p",{children:"Our team helps you choose a unit that fits your space and your heating needs, then pairs it with stone and a mantel you’ll love looking at for years."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(P,{className:"ms-problem-icon"}),(0,s.jsx)("h3",{children:"One package, one quote"}),(0,s.jsx)("p",{children:"Our Fireplace Packages bring it all together, so you get one price for the whole wall instead of three quotes that never quite line up."})]})]}),(0,s.jsx)("p",{className:"ms-problem-bridge",children:"Whether your project is a new build, a blank canvas wall, or remodelling an existing fireplace, we can help you turn it into a cozy, timeless space you’ll enjoy for years."})]})]})}),(0,s.jsx)("section",{className:"ms-types",children:(0,s.jsxs)("div",{className:"ms-types-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Choose your fireplace"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Electric or propane, from Napoleon"})]}),(0,s.jsxs)("div",{className:"ms-type-grid ms-type-grid--3",children:[(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Electric"}),(0,s.jsx)("p",{children:"No venting, no gas line and no chimney, so an electric fireplace can go on almost any wall. Realistic flames with or without heat, all year round."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Basements, condos, bedrooms & blank walls"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Propane"}),(0,s.jsx)("p",{children:"A real flame and real heat at the push of a button, with none of the work of wood. Keeps you warm when the power goes out in a Maritime storm."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Living rooms, heating a space & cottages"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("span",{className:"ms-type-tag",children:"Most popular"}),(0,s.jsx)("h3",{children:"Fireplace Package"}),(0,s.jsx)("p",{children:"Your Napoleon unit, the stone surround and the mantel, chosen together and quoted together. Simple, convenient and surprisingly affordable."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"New builds, full remodels & feature walls"]})]})]}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Not sure which? Get a free recommendation"})})]})}),(0,s.jsxs)("section",{className:"ms-section ms-install","aria-labelledby":"ms-install-head",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Fireplace Packages"}),(0,s.jsx)("h2",{className:"ms-h2",id:"ms-install-head",children:"Build your package in three choices."}),(0,s.jsx)("p",{className:"ms-install-sub",children:"Our Fireplace Packages are simple, convenient and surprisingly affordable. Start with falling in love with a fireplace, then choose the stone that best matches your decor, then add a mantel that suits your style. We’ll take it from there."})]}),(0,s.jsx)("div",{className:"ms-install-grid ms-install-grid--3",children:b.map(e=>(0,s.jsxs)("article",{className:"ms-install-card",children:[(0,s.jsxs)("div",{className:"ms-install-media",children:[(0,s.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:e.tag})]}),(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{className:"ms-install-lead",children:e.lead}),(0,s.jsx)("ul",{className:"ms-install-points",children:e.points.map(e=>(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," ",e]},e))}),(0,s.jsxs)("p",{className:"ms-install-best",children:[(0,s.jsx)("strong",{children:"Options:"})," ",e.options]})]},e.tag))}),(0,s.jsxs)("aside",{className:"ms-install-note",children:[(0,s.jsx)("strong",{children:"Already have a fireplace?"}),(0,s.jsx)("span",{children:"If your unit is in good shape and you only want a new look, we can supply new stone and a new mantel for the surround. Bring us a photo and rough measurements."})]}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Price my fireplace package"})})]}),(0,s.jsx)("section",{className:"ms-fp",children:(0,s.jsxs)("div",{className:"ms-fp-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,s.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Get inspired"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Fireplace packages & ideas"})]}),(0,s.jsx)("div",{className:"ms-fp-grid",children:f.map(e=>(0,s.jsxs)("figure",{className:"ms-fp-item",children:[(0,s.jsx)("div",{className:"ms-fp-shot",children:(0,s.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})}),(0,s.jsxs)("figcaption",{className:"ms-proj-cap",children:[(0,s.jsx)("span",{className:"ms-proj-loc",children:e.title}),(0,s.jsx)("span",{className:"ms-proj-scope",children:e.caption})]})]},e.src))}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Price a package like these"})})]})}),(0,s.jsx)("section",{className:"ms-why",children:(0,s.jsxs)("div",{className:"ms-why-inner",children:[(0,s.jsxs)("div",{className:"ms-why-head",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Why Choose Maritime Stone & Decor?"}),(0,s.jsxs)("p",{className:"ms-why-sub",children:["We sell the fireplace ",(0,s.jsx)("em",{children:"and"})," the stone that goes around it, so we can help you get the whole wall right, not just one piece of it, at prices that beat the big box stores."]})]}),(0,s.jsxs)("ul",{className:"ms-value-list",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Knowledge You Can Count On"}),(0,s.jsx)("p",{children:"We’ll walk you through electric vs propane, sizing and stone options, and help you choose with confidence."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Brands You Trust"}),(0,s.jsx)("p",{children:"An authorized Napoleon dealer, with stone from Eldorado, Mathios, Canyon Stone and Colonial Brick & Stone, at rock-bottom prices."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(q,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Delivery Available"}),(0,s.jsx)("p",{children:"We can coordinate delivery to your home or job site throughout Atlantic Canada."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(C,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"A Showroom You Can Visit"}),(0,s.jsx)("p",{children:"See the stone and mantel options in person at our Moncton showroom, and take samples home before you decide."})]})]})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-pcp",children:(0,s.jsxs)("div",{className:"ms-pcp-inner",children:[(0,s.jsx)("div",{className:"ms-pcp-photo",children:(0,s.jsx)("img",{src:x,alt:"Stone fireplace surround in Cordillera Lava",loading:"lazy",decoding:"async"})}),(0,s.jsxs)("div",{className:"ms-pcp-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Need It Installed?"}),(0,s.jsx)("h2",{className:"ms-h2",children:"We’ve got you covered."}),(0,s.jsx)("p",{children:"Fireplaces need the right installer: framing, venting, gas and stone all have to come together. We work with trusted local contractors and can connect you with one who knows the products we sell."}),(0,s.jsxs)("ul",{className:"ms-pcp-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Trusted local installers"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{}),"Fireplace, stone & mantel from one supplier"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," One place to get started"]})]}),(0,s.jsx)("a",{className:"ms-btn ms-btn--primary",href:"#quote",children:"Ask about our Preferred Contractor Program"})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-steps",children:(0,s.jsxs)("div",{className:"ms-steps-inner",children:[(0,s.jsxs)("div",{className:"ms-steps-content",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"How It Works"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Getting started is simple."})]}),(0,s.jsxs)("ol",{className:"ms-step-grid",children:[(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"01"}),(0,s.jsx)(F,{}),(0,s.jsx)("h3",{children:"Tell Us About Your Space"}),(0,s.jsx)("p",{children:"Visit our showroom, give us a call, or send us a message with a photo and rough measurements of the wall. We’ll answer your questions and help you get started."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"02"}),(0,s.jsx)(B,{}),(0,s.jsx)("h3",{children:"Choose Your Package"}),(0,s.jsx)("p",{children:"Pick the fireplace, stone and mantel with guidance from our team, and take stone samples home to see them in your own light. You get one clear quote for the whole package."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"03"}),(0,s.jsx)(A,{}),(0,s.jsx)("h3",{children:"Pick Up or We Deliver"}),(0,s.jsx)("p",{children:"Once your order is confirmed, pick it up at our Moncton showroom or have it delivered throughout Atlantic Canada. Need an installer? We’ll connect you with one of our trusted contractor partners."})]})]})]}),(0,s.jsx)("div",{className:"ms-steps-media",children:(0,s.jsx)("img",{src:h,alt:"Stone fireplace with a linear insert, raised hearth and wood mantel",loading:"lazy",decoding:"async"})})]})}),(0,s.jsx)("section",{className:"ms-trade",children:(0,s.jsxs)("div",{className:"ms-trade-inner",children:[(0,s.jsxs)("div",{className:"ms-trade-main",children:[(0,s.jsx)("h2",{className:"ms-h2 ms-h2--light",children:"Contractors & Builders"}),(0,s.jsx)("p",{className:"ms-trade-body",children:"Spec a fireplace wall for your client in one stop. We’ll help you select the unit, stone and mantel, check availability and coordinate delivery to the job site, and we’re happy to work with your customer on the selections."}),(0,s.jsxs)("ul",{className:"ms-trade-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Responsive, knowledgeable team"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{}),"Napoleon fireplaces & stone in one order"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Job site delivery available"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Support for you and your customers"]})]}),(0,s.jsx)("div",{className:"ms-trade-cta",children:(0,s.jsxs)(r.TelLink,{className:"ms-btn ms-btn--ghost-light",children:[(0,s.jsx)(w,{})," Call the counter"]})})]}),(0,s.jsx)("div",{className:"ms-trade-photo",children:(0,s.jsx)("img",{src:g,alt:"Open kitchen and dining room with a brick fireplace and log store",loading:"lazy",decoding:"async"})})]})}),(0,s.jsx)("section",{className:"ms-testi",children:(0,s.jsxs)("div",{className:"ms-testi-inner",children:[(0,s.jsx)("div",{className:"ms-section-head",children:(0,s.jsx)("h2",{className:"ms-h2",children:"What customers say"})}),(0,s.jsxs)("div",{className:"ms-testi-grid",children:[(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Top-quality service. The owner and his staff really know the products they sell. I bought a custom fireplace mantle and could not be happier, and I won’t hesitate to recommend them."}),(0,s.jsx)("figcaption",{children:"Pauline Gavin · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Always a great experience with Dave and Heather. Excellent, knowledgeable service with a smile, and they have everything. Highly recommend!"}),(0,s.jsx)("figcaption",{children:"Holly Jensen · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Our company buys a lot of our siding and brick at Maritime Stone & Decor. The staff are very knowledgeable and very quick to return quotes. We recommend them!"}),(0,s.jsx)("figcaption",{children:"Pierre LeBlanc · Contractor"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsxs)("blockquote",{children:["We re-did our whole home envelope, including siding, soffit, fascia, windows and doors. They came out fast, quoted quickly, and made sure our windows qualified for the Canada Greener Homes grant. They supplied the materials ",(0,s.jsx)("em",{children:"and"})," ","connected us with a great install crew, and stayed flexible on pricing when surprises came up. A positive experience all around, we’d 100% recommend them."]}),(0,s.jsx)("figcaption",{children:"Gary Marquis · Homeowner"})]})]})]})}),(0,s.jsx)("section",{className:"ms-faq",children:(0,s.jsxs)("div",{className:"ms-faq-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,s.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Before you ask"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Fireplace questions, answered"})]}),(0,s.jsx)("div",{className:"ms-faq-list",children:y.map((e,a)=>{let i=c===a;return(0,s.jsxs)("div",{className:"ms-faq-item"+(i?" is-open":""),children:[(0,s.jsxs)("button",{type:"button",className:"ms-faq-q","aria-expanded":i,onClick:()=>d(i?-1:a),children:[(0,s.jsx)("span",{children:e.q}),(0,s.jsx)("span",{className:"ms-faq-icon","aria-hidden":"true",children:i?"–":"+"})]}),(0,s.jsx)("div",{className:"ms-faq-a",children:(0,s.jsx)("p",{children:e.a})})]},e.q)})})]})}),(0,s.jsx)("section",{className:"ms-quote",id:"quote",children:(0,s.jsxs)("div",{className:"ms-quote-inner",children:[(0,s.jsxs)("div",{className:"ms-quote-copy",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Get Your Free Fireplace Quote"}),(0,s.jsx)("p",{children:"Tell us about your space and the look you’re after, and we’ll put together a no-obligation quote for the fireplace, stone and mantel."}),(0,s.jsxs)("ul",{className:"ms-quote-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Free, no-obligation quote"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{}),"Fireplace, stone & mantel recommendations"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{})," Competitive pricing"]})]}),(0,s.jsxs)(r.TelLink,{className:"ms-quote-call",children:[(0,s.jsx)(w,{})," Prefer to talk? ",l]})]}),(0,s.jsx)("div",{className:"ms-quote-form-wrap",children:(0,s.jsx)(n,{})})]})}),(0,s.jsx)("div",{className:"ms-sticky-bar",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-sticky-btn",href:"#quote",children:"Get a free quote"})}),(0,s.jsx)(r.TelLink,{className:"ms-fab","aria-label":"Call Maritime Stone & Decor at (506) 854-2266",children:(0,s.jsx)(w,{})})]})}],59881)}]);