(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49219,e=>{"use strict";var s=e.i(43476),r=e.i(71645);e.i(47167);var i=e.i(8037),a=e.i(74997),o=e.i(26616);function t(e,s){return s.trim()?"Email"!==e||/\S+@\S+\.\S+/.test(s)?void 0:"Please enter a valid email address":`${e} is required`}function n(){let[e,n]=(0,r.useState)("Homeowner"),[l,d]=(0,r.useState)(""),[c,m]=(0,r.useState)(""),[p,h]=(0,r.useState)(""),[x,g]=(0,r.useState)(""),[u,f]=(0,r.useState)(""),[b,y]=(0,r.useState)(""),[v,w]=(0,r.useState)(!1),[j,k]=(0,r.useState)(!1),[N,q]=(0,r.useState)(""),[z,C]=(0,r.useState)({});function S(e,s){let r=t(e.charAt(0).toUpperCase()+e.slice(1),s);C(s=>({...s,[e]:r}))}function E(e){z[e]&&C(s=>({...s,[e]:void 0}))}async function A(s){if(s.preventDefault(),v)return;q("");let r={},o=t("Name",l),n=t("Phone",c),d=t("Email",p);if(o&&(r.name=o),n&&(r.phone=n),d&&(r.email=d),Object.keys(r).length>0){C(r);let e=o?"name":n?"phone":"email";document.getElementById(e)?.focus();return}if(w(!0),b){k(!0),w(!1);return}try{if(!(await fetch("https://formspree.io/f/preview-disabled",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:"windows-doors-landing",role:e,name:l.trim(),phone:c.trim(),email:p.trim(),address:x.trim(),details:u.trim()})})).ok)throw Error("Submission failed");(0,a.trackLeadConversion)(),k(!0)}catch{q(`Something went wrong. Please try again or call us at ${i.siteConfig.phone}.`)}finally{w(!1)}}return j?(0,s.jsxs)("div",{className:"ms-form-success",role:"status",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,s.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,s.jsx)("h3",{children:"Request received"}),(0,s.jsxs)("p",{children:["Thanks — we’ll be in touch shortly with your windows & doors pricing. Or call us now at"," ",(0,s.jsx)(o.TelLink,{children:i.siteConfig.phone}),"."]})]}):(0,s.jsxs)("form",{className:"ms-form",onSubmit:A,noValidate:!0,children:[N&&(0,s.jsx)("div",{className:"ms-form-error",role:"alert",children:N}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"role",children:"I’m a…"}),(0,s.jsxs)("select",{id:"role",value:e,onChange:e=>n(e.target.value),children:[(0,s.jsx)("option",{children:"Homeowner"}),(0,s.jsx)("option",{children:"Contractor or builder"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{id:"name",value:l,"aria-required":"true","aria-invalid":z.name?"true":void 0,onChange:e=>{d(e.target.value),E("name")},onBlur:()=>S("name",l)}),z.name&&(0,s.jsx)("p",{className:"ms-field-error",children:z.name})]}),(0,s.jsxs)("div",{className:"ms-field-row",children:[(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,s.jsx)("input",{id:"phone",type:"tel",value:c,"aria-required":"true","aria-invalid":z.phone?"true":void 0,onChange:e=>{m(e.target.value),E("phone")},onBlur:()=>S("phone",c)}),z.phone&&(0,s.jsx)("p",{className:"ms-field-error",children:z.phone})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{id:"email",type:"email",value:p,"aria-required":"true","aria-invalid":z.email?"true":void 0,onChange:e=>{h(e.target.value),E("email")},onBlur:()=>S("email",p)}),z.email&&(0,s.jsx)("p",{className:"ms-field-error",children:z.email})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsxs)("label",{htmlFor:"address",children:["Project address ",(0,s.jsx)("span",{className:"ms-opt",children:"(optional)"})]}),(0,s.jsx)("input",{id:"address",value:x,onChange:e=>g(e.target.value)})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"details",children:"Tell us about your project"}),(0,s.jsx)("textarea",{id:"details",rows:4,placeholder:"How many windows or doors, the styles you're after, timeline…",value:u,onChange:e=>f(e.target.value)})]}),(0,s.jsx)("input",{className:"ms-honeypot",tabIndex:-1,autoComplete:"off","aria-hidden":"true",name:"_gotcha",value:b,onChange:e=>y(e.target.value)}),(0,s.jsx)("button",{className:"ms-btn ms-btn--primary ms-btn--lg ms-btn--block",type:"submit",disabled:v,children:v?"Sending…":"Send my request"}),(0,s.jsx)("p",{className:"ms-form-fine",children:"We’ll only use your details to prepare your quote."})]})}let l=i.siteConfig.phone,d=["https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1785173314/long-exposure-photo-of-elegant-colleagues-posing-i-2026-03-11-04-18-59-utc_itp0hh.jpg","https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1784765822/Replacing-Exterior-Doors---Hero-Banner_llkgjm.avif","https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1785173313/comfortable-living-room-with-garden-view-2026-03-18-09-36-10-utc_uyxfk0.jpg","https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1785173309/dining-zone-with-pendant-lamp-in-living-room-2026-01-07-23-22-55-utc_cbq6uc.jpg","https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1784673150/DSC01147_bjkozo.jpg"];function c(e,s){return e.replace("/upload/f_auto,q_auto/",`/upload/f_auto,q_auto,c_limit,w_${s}/`)}function m(e,s){return s.map(s=>`${c(e,s)} ${s}w`).join(", ")}let p="https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto",h=`${p}/v1785173313/bright-and-airy-dining-room-interior-with-skylight-2026-03-10-03-09-44-utc_tlaqko.jpg`,x=`${p}/v1785173308/decor-Cachet_22x36_8x36-web_lsqpmm.webp`,g=`${p}/v1785173308/decor-Alys_22x48_8x48-web_enqh8g.webp`,u=`${p}/v1784673095/DSC05994_rxqzmg.jpg`,f=[{src:"/msd-fireplaces-preview/images/brands/jeld-wen.webp",alt:"JELD-WEN"},{src:"https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1784674613/Kento_Logo_u3efpe.jpg",alt:"Kento"},{src:"/msd-fireplaces-preview/images/brands/greenview.png",alt:"Greenview Windows & Doors"}],b=[{q:"Do you install windows and doors, or just sell them?",a:"We specialize in supplying quality windows and exterior doors, and we partner with trusted local contractors for installation. If you need an installer, we're happy to connect you with one of our Preferred Contractor partners."},{q:"Are your windows ENERGY STAR certified?",a:"Yes. We carry ENERGY STAR certified windows and doors built for the Maritime climate. Energy-efficient windows help lower your heating and cooling costs and can qualify for available rebate and grant programs."},{q:"Can I get a rebate on energy-efficient windows in New Brunswick?",a:"Yes. Many ENERGY STAR windows and doors qualify for rebates through NB Power's Total Home Energy Savings Program (delivered by SaveEnergyNB), which requires a home energy evaluation. Program details and amounts change over time — you can check current eligibility and rebate amounts directly at saveenergynb.ca."},{q:"What window and door brands do you carry?",a:"We carry trusted brands including JELD-WEN, Kento and Greenview, and more. Our team will help you compare your options and choose the products that best suit your home, style, and budget."},{q:"Do you deliver?",a:"Yes. We're based in Moncton, NB and offer delivery throughout Atlantic Canada, or you can pick up your order at our Moncton showroom. Contact us to discuss delivery options for your project."},{q:"Do you sell to contractors and builders?",a:"Absolutely. Whether you're managing one project or many, our team is here to help with product selection, availability, and delivery to keep your jobs running smoothly."}],y={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},v={...y,strokeWidth:2.5},w=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...y,children:(0,s.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})}),j=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...v,children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})}),k=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...y,children:(0,s.jsx)("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),N=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...y,children:(0,s.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),q=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("path",{d:"M1 3h15v13H1z"}),(0,s.jsx)("path",{d:"M16 8h4l3 3v5h-7z"}),(0,s.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),(0,s.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]}),z=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,s.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),C=()=>(0,s.jsxs)("svg",{className:"ms-problem-icon",width:"30",height:"30",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,s.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),S=()=>(0,s.jsxs)("svg",{className:"ms-problem-icon",width:"30",height:"30",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("line",{x1:"8",y1:"19",x2:"8",y2:"21"}),(0,s.jsx)("line",{x1:"8",y1:"13",x2:"8",y2:"15"}),(0,s.jsx)("line",{x1:"16",y1:"19",x2:"16",y2:"21"}),(0,s.jsx)("line",{x1:"16",y1:"13",x2:"16",y2:"15"}),(0,s.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,s.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"17"}),(0,s.jsx)("path",{d:"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"})]}),E=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,s.jsx)("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),A=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),(0,s.jsx)("polyline",{points:"2 17 12 22 22 17"}),(0,s.jsx)("polyline",{points:"2 12 12 17 22 12"})]}),B=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("line",{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}),(0,s.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,s.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,s.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),_=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"}),(0,s.jsx)("path",{d:"M2 21c0-3 1.85-5.36 5.08-6"})]}),T=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...y,children:[(0,s.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,s.jsx)("polyline",{points:"9 12 11 14 15 10"})]}),W="var(--font-plus-jakarta-sans),system-ui,sans-serif",M=`
.ms-root{
  --ink:#1B2730; --ink-soft:#2C3B45; --paper:#F6F4EF; --sand:#E7E0D2;
  --cedar:#C25E36; --cedar-dark:#A84E2B; --harbour:#3E5C6B; --sage:#6F7B5F;
  --line:rgba(27,39,48,.12); --muted:#5C6770;
  font-family:${W}; color:var(--ink);
  background:var(--paper); line-height:1.55; -webkit-font-smoothing:antialiased;
}
.ms-root *{box-sizing:border-box;}
.ms-root h1,.ms-root h2,.ms-root h3,.ms-root h4{font-family:${W};line-height:1.08;margin:0;}
.ms-root p{margin:0;}
.ms-accent{color:var(--cedar);}
.ms-eyebrow{font-family:${W};text-transform:uppercase;letter-spacing:.16em;
  font-size:.72rem;font-weight:700;color:var(--cedar);margin-bottom:14px;}
.ms-eyebrow--center{text-align:center;}
.ms-eyebrow--light{color:#E9A887;}

.ms-btn{display:inline-flex;align-items:center;gap:12px;justify-content:center;
  font-family:${W};font-weight:700;font-size:.95rem;text-decoration:none;
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
  display:flex;align-items:center;
  /* Full screen minus the site header (≈113px) so the whole hero fits one screen. */
  min-height:calc(100vh - 113px);min-height:calc(100svh - 113px);padding:88px 28px;}
.ms-hero-bg{position:absolute;inset:0;z-index:0;}
.ms-hero-slide{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background-size:cover;background-position:center;
  opacity:0;transition:opacity 1.4s ease;animation:ms-kenburns 20s ease-in-out infinite;will-change:transform,opacity;}
.ms-hero-slide.is-active{opacity:1;}
@keyframes ms-kenburns{0%{transform:scale(1)}50%{transform:scale(1.08)}100%{transform:scale(1)}}
.ms-hero::after{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:linear-gradient(90deg,rgba(18,26,32,.9) 0%,rgba(18,26,32,.72) 42%,rgba(18,26,32,.34) 78%,rgba(18,26,32,.12) 100%),
    linear-gradient(0deg,rgba(18,26,32,.6) 0%,rgba(18,26,32,0) 42%);}
.ms-hero-inner{position:relative;z-index:1;max-width:1180px;margin:0 auto;width:100%;}
.ms-hero-copy{max-width:620px;}
.ms-hero .ms-h1{color:#fff;text-shadow:0 1px 24px rgba(0,0,0,.28);}
.ms-hero .ms-lede{color:rgba(255,255,255,.9);max-width:46ch;margin-top:22px;margin-bottom:32px;}
.ms-hero .ms-trust-chips li{color:#fff;}
.ms-hero .ms-trust-chips svg{color:#A7B98C;}
.ms-hero .ms-eyebrow{color:#F2A878;}
.ms-hero .ms-accent{color:#F2A878;}
.ms-h1{font-size:clamp(2.3rem,5vw,3.7rem);font-weight:800;letter-spacing:-.02em;margin-bottom:16px;}
.ms-badge{display:inline-flex;align-items:center;gap:8px;background:var(--ink);color:#fff;
  font-family:${W};font-weight:600;font-size:.82rem;padding:8px 15px;border-radius:99px;margin-bottom:22px;}
.ms-badge svg{color:var(--cedar);}
.ms-lede{font-size:1.12rem;color:var(--muted);max-width:36ch;}
.ms-hero-cta{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:26px;}
.ms-trust-chips{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:9px;}
.ms-trust-chips li{display:flex;align-items:center;gap:9px;font-size:.92rem;color:var(--ink-soft);font-weight:500;}
.ms-trust-chips svg{color:var(--sage);flex:none;}

.ms-brands{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--paper);padding:36px 28px;text-align:center;}
.ms-brands-label{font-family:${W};text-transform:uppercase;letter-spacing:.14em;
  font-size:.7rem;font-weight:700;color:var(--muted);margin-bottom:22px;}
.ms-brand-logos{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:20px;max-width:760px;margin:0 auto;}
.ms-brand-chip{display:inline-flex;align-items:center;justify-content:center;background:#fff;
  border:1px solid var(--line);border-radius:14px;padding:16px 30px;min-width:180px;height:88px;
  box-shadow:0 4px 16px rgba(27,39,48,.06);}
.ms-brand-chip img{max-height:52px;max-width:200px;width:auto;height:auto;object-fit:contain;display:block;}

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

.ms-types{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:78px 28px;
  background-image:linear-gradient(rgba(20,29,36,.82),rgba(20,29,36,.9)),url('https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto,c_limit,w_1600/v1785173314/grass-in-pot-and-wooden-path-in-front-of-front-doo-2026-03-10-03-55-23-utc_xkqfrl.jpg');
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
.ms-type-tag{position:absolute;top:18px;right:18px;background:var(--cedar);color:#fff;font-family:${W};
  font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:5px 10px;border-radius:99px;}
.ms-mid-cta{text-align:center;margin-top:40px;}

.ms-energy{background:#fff;}
.ms-energy-inner{display:grid;grid-template-columns:1.25fr .75fr;gap:48px;align-items:center;width:100%;}
.ms-energy-copy .ms-h2{margin-bottom:16px;}
.ms-energy-lead{color:var(--ink-soft);font-size:1.08rem;margin-bottom:26px;max-width:52ch;}
.ms-energy-points{list-style:none;margin:0 0 30px;padding:0;display:flex;flex-direction:column;gap:20px;}
.ms-energy-points li{display:flex;gap:15px;align-items:flex-start;}
.ms-energy-points svg{color:var(--sage);flex:none;margin-top:3px;}
.ms-energy-points h3{font-size:1.1rem;margin-bottom:4px;}
.ms-energy-points p{color:var(--muted);font-size:.95rem;}
.ms-energy-card{background:var(--harbour);color:#fff;border-radius:20px;padding:34px;box-shadow:0 18px 50px rgba(27,39,48,.18);}
.ms-energy-card-badge{font-family:${W};text-transform:uppercase;letter-spacing:.14em;font-size:.7rem;font-weight:700;color:#E9A887;margin-bottom:10px;}
.ms-energy-card-amount{font-family:${W};font-size:1.7rem;font-weight:800;letter-spacing:-.01em;margin-bottom:14px;}
.ms-energy-card-body{color:rgba(255,255,255,.82);font-size:.98rem;margin-bottom:22px;}
.ms-energy-card-call{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:700;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.4);padding-bottom:2px;}
.ms-energy-card-call:hover{border-color:#fff;}
.ms-inline-link{color:var(--cedar);font-weight:600;text-decoration:underline;text-underline-offset:2px;}
.ms-inline-link:hover{color:var(--cedar-dark);}
.ms-energy-card .ms-inline-link{color:#fff;}
.ms-energy-card .ms-inline-link:hover{color:#fff;opacity:.85;}

.ms-why{background-image:linear-gradient(rgba(20,29,36,.9),rgba(20,29,36,.94)),url('https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto,c_limit,w_1600/v1784673144/DSC01144_eopk1e.jpg');
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
.ms-pcp-photo{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:4/5;background:#fff;padding:22px;box-shadow:0 14px 40px rgba(27,39,48,.12);}
.ms-pcp-photo img{width:100%;height:100%;object-fit:contain;display:block;}
.ms-pcp-copy .ms-h2{margin-bottom:16px;}
.ms-pcp-copy p{color:var(--ink-soft);font-size:1.05rem;margin-bottom:24px;}
.ms-pcp-points{list-style:none;margin:0 0 26px;padding:0;display:flex;flex-direction:column;gap:14px;}
.ms-pcp-points li{display:flex;align-items:center;gap:11px;font-weight:600;color:var(--ink);}
.ms-pcp-points svg{color:var(--sage);flex:none;}

.ms-steps-inner{display:grid;grid-template-columns:1.18fr .82fr;gap:50px;align-items:stretch;width:100%;}
.ms-steps-media{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:3/4;background:#fff;padding:22px;box-shadow:0 18px 50px rgba(27,39,48,.14);}
.ms-steps-media img{width:100%;height:100%;object-fit:contain;display:block;}
.ms-step-grid{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:16px;}
.ms-step{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px 26px;overflow:hidden;}
.ms-step-icon{color:var(--cedar);margin-bottom:16px;display:block;}
.ms-step-num{position:absolute;top:16px;right:20px;font-family:${W};font-weight:800;font-size:2.6rem;color:var(--sand);line-height:1;}
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
.ms-testi-card::before{content:"\\201C";position:absolute;top:-14px;right:16px;font-family:${W};font-size:5.5rem;line-height:1;color:var(--sand);pointer-events:none;}
.ms-stars{color:var(--cedar);letter-spacing:2px;margin-bottom:14px;}
.ms-testi-card blockquote{margin:0 0 16px;font-size:1rem;color:var(--ink-soft);}
.ms-testi-card figcaption{font-weight:600;font-size:.9rem;color:var(--muted);}
.ms-testi{background:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:78px 28px;}
.ms-testi-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-faq{background:var(--sand);display:flex;flex-direction:column;justify-content:center;padding:78px 28px;}
.ms-faq-inner{max-width:1100px;margin:0 auto;width:100%;}

.ms-proj{min-height:100vh;display:flex;flex-direction:column;justify-content:center;background:#fff;
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:78px 28px;}
.ms-proj-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-proj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:760px;margin:0 auto;}
.ms-proj-item{margin:0;}
.ms-ba,.ms-proj-shot{position:relative;aspect-ratio:4/3;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:var(--sand);}
.ms-proj-shot img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-ba-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
.ms-ba-before{clip-path:inset(0 50% 0 0);}
.ms-ba-range{position:absolute;inset:0;width:100%;height:100%;margin:0;-webkit-appearance:none;appearance:none;background:transparent;cursor:ew-resize;}
.ms-ba-range:focus-visible{outline:2px solid var(--cedar);outline-offset:2px;}
.ms-ba-range::-webkit-slider-thumb{-webkit-appearance:none;width:42px;height:260px;background:transparent;cursor:ew-resize;}
.ms-ba-range::-moz-range-thumb{width:42px;height:260px;border:0;background:transparent;cursor:ew-resize;}
.ms-ba-divider{position:absolute;top:0;bottom:0;left:50%;width:2px;margin-left:-1px;background:#fff;box-shadow:0 0 6px rgba(0,0,0,.45);pointer-events:none;}
.ms-ba-divider::after{content:"";position:absolute;top:50%;left:50%;width:34px;height:34px;border-radius:50%;
  background:#fff;transform:translate(-50%,-50%);box-shadow:0 2px 10px rgba(0,0,0,.35);}
.ms-ba-badge{position:absolute;bottom:10px;font-family:${W};font-size:.6rem;font-weight:700;
  text-transform:uppercase;letter-spacing:.08em;padding:4px 9px;border-radius:99px;background:rgba(27,39,48,.82);color:#fff;pointer-events:none;}
.ms-ba-badge--before{left:10px;}
.ms-ba-badge--after{right:10px;}
.ms-proj-cap{margin-top:14px;}
.ms-proj-loc{display:block;font-family:${W};font-weight:700;font-size:1.02rem;color:var(--ink);}
.ms-proj-scope{display:block;font-size:.88rem;color:var(--muted);margin-top:3px;}

.ms-faq-list{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:12px;}
.ms-faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.ms-faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background:none;border:none;cursor:pointer;text-align:left;padding:20px 22px;
  font-family:${W};font-weight:600;font-size:1.04rem;color:var(--ink);}
.ms-faq-icon{font-size:1.5rem;color:var(--cedar);line-height:1;flex:none;}
.ms-faq-a{padding:0 22px 22px;color:var(--muted);font-size:.98rem;}
.ms-faq-item:not(.is-open) .ms-faq-a{display:none;}

.ms-photo-tag{position:absolute;left:12px;bottom:12px;font-family:${W};font-size:.62rem;font-weight:700;
  text-transform:uppercase;letter-spacing:.08em;padding:5px 11px;border-radius:99px;background:rgba(27,39,48,.82);color:#fff;}

.ms-quote{background:var(--sand);}
.ms-quote-inner{max-width:1080px;margin:0 auto;padding:78px 28px;display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:stretch;}
/* Copy column is an aspirational photo panel (woman on the phone → "prefer to talk?"). */
.ms-quote-copy{position:relative;display:flex;flex-direction:column;justify-content:center;
  overflow:hidden;border-radius:20px;padding:44px;
  background-image:linear-gradient(rgba(18,26,32,.58),rgba(18,26,32,.72)),url('https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto,c_limit,w_1200/v1785173308/woman-leans-in-doorway-chatting-on-phone-2026-01-07-05-29-38-utc_zgrtkj.jpg');
  background-size:cover;background-position:center;box-shadow:0 18px 50px rgba(27,39,48,.16);}
.ms-quote-copy .ms-h2{margin-bottom:14px;color:#fff;}
.ms-quote-copy>p{color:rgba(255,255,255,.82);font-size:1.08rem;margin-bottom:22px;}
.ms-quote-points{list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:11px;}
.ms-quote-points li{display:flex;align-items:center;gap:10px;font-weight:500;color:rgba(255,255,255,.9);}
.ms-quote-points svg{color:#A7B98C;flex:none;}
.ms-quote-call{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:600;text-decoration:none;}
.ms-quote-call:hover{color:#F2A878;}
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
  .ms-section,.ms-why,.ms-trade,.ms-proj,.ms-testi{min-height:auto;}
  .ms-lede{max-width:none;}
  .ms-why-inner,.ms-pcp-inner,.ms-trade-inner,.ms-problem-inner,.ms-steps-inner,.ms-quote-inner,.ms-energy-inner{grid-template-columns:1fr;gap:32px;}
  .ms-problem-media{aspect-ratio:16/11;}
  .ms-trade-photo{min-height:280px;}
  .ms-pcp-inner{padding:34px;}
  .ms-types,.ms-why{background-attachment:scroll;}
  .ms-problem-grid,.ms-type-grid,.ms-step-grid,.ms-testi-grid,.ms-proj-grid{grid-template-columns:1fr;}
}
@media (max-width:640px){
  .ms-sticky-bar{display:flex;padding-bottom:calc(12px + env(safe-area-inset-bottom));}
  .ms-section{padding:54px 22px;}
  .ms-types,.ms-proj,.ms-testi,.ms-faq{padding:54px 22px;}
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
`;e.s(["WindowsDoorsLandingPage",0,function(){let[e,i]=(0,r.useState)(0),[a,t]=(0,r.useState)([0]),[p,y]=(0,r.useState)(0),v=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=v.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=Array.from(e.querySelectorAll(".ms-brand-chip,.ms-section-head,.ms-problem-card,.ms-type-card,.ms-energy-points li,.ms-energy-card,.ms-value-list li,.ms-step,.ms-testi-card,.ms-faq-item,.ms-pcp-inner,.ms-quote-form-wrap")),r=new Map;s.forEach(e=>{e.classList.add("ms-reveal");let s=e.parentElement;if(!s)return;let i=r.get(s)??0;r.set(s,i+1),i&&(e.style.transitionDelay=`${Math.min(70*i,280)}ms`)});let i=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),i.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});return s.forEach(e=>i.observe(e)),e.classList.add("ms-reveal-armed"),()=>i.disconnect()},[]),(0,r.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||d.length<2)return;let e=setTimeout(()=>t(e=>e.includes(1)?e:[...e,1]),1500),s=setInterval(()=>{i(e=>{let s=(e+1)%d.length;return t(e=>e.includes(s)?e:[...e,s]),s})},5e3);return()=>{clearTimeout(e),clearInterval(s)}},[]),(0,s.jsxs)("div",{className:"ms-root",ref:v,children:[(0,s.jsx)("style",{children:M}),(0,s.jsxs)("section",{className:"ms-hero",children:[(0,s.jsx)("div",{className:"ms-hero-bg","aria-hidden":"true",children:d.map((r,i)=>a.includes(i)?(0,s.jsx)("img",{className:"ms-hero-slide"+(i===e?" is-active":""),src:c(r,1600),srcSet:m(r,[1280,1600,1920]),sizes:"100vw",alt:"",fetchPriority:0===i?"high":void 0,loading:0===i?"eager":"lazy",decoding:"async"},r):(0,s.jsx)("div",{className:"ms-hero-slide"},r))}),(0,s.jsx)("div",{className:"ms-hero-inner",children:(0,s.jsxs)("div",{className:"ms-hero-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Windows & Doors · Moncton, NB"}),(0,s.jsxs)("h1",{className:"ms-h1",children:["Energy-efficient windows & doors at"," ",(0,s.jsx)("span",{className:"ms-accent",children:"rock-bottom prices."})]}),(0,s.jsx)("p",{className:"ms-lede",children:"ENERGY STAR windows and exterior doors built for the Maritime climate. Buy direct and save, get help qualifying for energy rebates, or let us connect you with a vetted crew from our Preferred Contractor Program."}),(0,s.jsxs)("div",{className:"ms-hero-cta",children:[(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Get my free windows & doors quote"}),(0,s.jsxs)(o.TelLink,{className:"ms-btn ms-btn--ghost-light ms-btn--lg",children:[(0,s.jsx)(w,{})," ",l]})]}),(0,s.jsxs)("ul",{className:"ms-trust-chips",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{}),"ENERGY STAR windows & doors"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Based in Moncton, NB · delivery throughout Atlantic Canada"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Vetted Preferred Contractor Program"]})]})]})})]}),(0,s.jsxs)("section",{className:"ms-brands","aria-label":"Window and door brands we carry",children:[(0,s.jsx)("p",{className:"ms-brands-label",children:"Brand-name windows & doors we carry"}),(0,s.jsx)("div",{className:"ms-brand-logos",children:f.map(e=>(0,s.jsx)("span",{className:"ms-brand-chip",children:(0,s.jsx)("img",{src:e.src,alt:e.alt})},e.alt))})]}),(0,s.jsx)("section",{className:"ms-section ms-problem",children:(0,s.jsxs)("div",{className:"ms-problem-inner",children:[(0,s.jsx)("div",{className:"ms-problem-media",children:(0,s.jsx)("img",{src:c(h,760),srcSet:m(h,[480,760,1e3]),sizes:"(max-width:900px) 92vw, 40vw",alt:"Bright conservatory dining room with skylights and full-height windows",loading:"lazy",decoding:"async"})}),(0,s.jsxs)("div",{className:"ms-problem-content",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Choosing windows & doors shouldn’t be confusing."}),(0,s.jsxs)("div",{className:"ms-problem-grid",children:[(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(C,{}),(0,s.jsx)("h3",{children:"Too many styles and ratings"}),(0,s.jsx)("p",{children:"Casement, double-hung, awning, entry, patio... plus energy ratings, glass options and rebate rules. It’s a lot to sort through on your own."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(N,{}),(0,s.jsx)("h3",{children:"Advice you can trust"}),(0,s.jsx)("p",{children:"Our team takes the time to understand your project, explain the differences between products, and help you choose the right fit for your home, budget, and energy goals."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(S,{}),(0,s.jsx)("h3",{children:"Built for the Maritime climate"}),(0,s.jsx)("p",{children:"We carry ENERGY STAR windows and doors from trusted manufacturers that perform through our harsh winters, coastal conditions, and changing seasons."})]})]}),(0,s.jsx)("p",{className:"ms-problem-bridge",children:"At Maritime Stone & Decor, we’re here to make your project easier. Whether you’re building new, renovating, or replacing old drafty windows, we’ll help you choose products that look great, cut energy costs, and fit your budget."})]})]})}),(0,s.jsx)("section",{className:"ms-types",children:(0,s.jsxs)("div",{className:"ms-types-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Choose your style"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Windows & doors for every home"})]}),(0,s.jsxs)("div",{className:"ms-type-grid",children:[(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Casement & Awning Windows"}),(0,s.jsx)("p",{children:"Crank-operated windows that seal tight for excellent energy efficiency and unobstructed views. A popular choice for a clean, modern look."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Energy savings & contemporary designs"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Double-Hung & Slider Windows"}),(0,s.jsx)("p",{children:"Classic, versatile windows that are easy to operate and clean. A timeless fit for traditional homes and easy everyday ventilation."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Traditional homes & easy maintenance"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Entry Doors"}),(0,s.jsx)("p",{children:"Insulated steel and fibreglass entry doors that boost curb appeal, security, and energy efficiency, in a wide range of styles and finishes."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Curb appeal, security & insulation"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Patio & Garden Doors"}),(0,s.jsx)("p",{children:"Sliding and swing patio doors that bring in natural light and connect your living space to the outdoors, with energy-efficient glass."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Natural light & indoor-outdoor living"]})]})]}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Not sure which? Get a free recommendation"})})]})}),(0,s.jsx)("section",{className:"ms-section ms-energy",children:(0,s.jsxs)("div",{className:"ms-energy-inner",children:[(0,s.jsxs)("div",{className:"ms-energy-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Save energy, save money"}),(0,s.jsx)("h2",{className:"ms-h2",children:"ENERGY STAR windows that can pay you back."}),(0,s.jsx)("p",{className:"ms-energy-lead",children:"Old, drafty windows leak heat and money all winter. New ENERGY STAR windows and doors cut your energy bills and keep your home comfortable year-round."}),(0,s.jsxs)("ul",{className:"ms-energy-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(_,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Lower heating & cooling costs"}),(0,s.jsx)("p",{children:"Tight-sealing, high-performance glass keeps the heat in during Maritime winters and out during summer."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(T,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"ENERGY STAR certified"}),(0,s.jsx)("p",{children:"We carry ENERGY STAR products built and rated for our climate zone, so you know they perform."})]})]})]}),(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Get my free quote"})]}),(0,s.jsxs)("aside",{className:"ms-energy-card","aria-label":"Energy rebate highlight",children:[(0,s.jsx)("p",{className:"ms-energy-card-badge",children:"Good to know"}),(0,s.jsx)("p",{className:"ms-energy-card-amount",children:"NB Power rebates"}),(0,s.jsxs)("p",{className:"ms-energy-card-body",children:["Upgrading to ENERGY STAR windows and doors may qualify you for rebates through NB Power’s Total Home Energy Savings Program. Check your eligibility at"," ",(0,s.jsx)("a",{className:"ms-inline-link",href:"https://www.saveenergynb.ca/en/save-energy/residential/total-home-energy-savings-program/",target:"_blank",rel:"noopener noreferrer",children:"SaveEnergyNB"}),"."]}),(0,s.jsxs)(o.TelLink,{className:"ms-energy-card-call",children:[(0,s.jsx)(w,{})," Talk to us: ",l]})]})]})}),(0,s.jsx)("section",{className:"ms-why",children:(0,s.jsxs)("div",{className:"ms-why-inner",children:[(0,s.jsxs)("div",{className:"ms-why-head",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Why Choose Maritime Stone & Decor?"}),(0,s.jsx)("p",{className:"ms-why-sub",children:"Whether you’re building new, renovating, or replacing old windows and doors, we’re here to help you make the right choice. We take the time to understand your project, answer your questions, and recommend products that fit your home, style, and budget."})]}),(0,s.jsxs)("ul",{className:"ms-value-list",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Knowledge You Can Count On"}),(0,s.jsx)("p",{children:"Our team will walk you through the options, explain energy ratings, and help you choose with confidence."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Quality Products"}),(0,s.jsx)("p",{children:"We carry trusted brands and a wide selection of ENERGY STAR windows and exterior doors to suit every style and budget."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(q,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Delivery Available"}),(0,s.jsx)("p",{children:"Based in Moncton, NB, we coordinate delivery to your home or job site throughout Atlantic Canada. Ask us about delivery options in your area."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"More Than Just Windows"}),(0,s.jsx)("p",{children:"Complete your project in one place with siding, stone veneer, trim, decking, roofing, and other exterior building products."})]})]})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-pcp",children:(0,s.jsxs)("div",{className:"ms-pcp-inner",children:[(0,s.jsx)("div",{className:"ms-pcp-photo",children:(0,s.jsx)("img",{src:c(x,800),srcSet:m(x,[480,800,1e3]),sizes:"(max-width:900px) 92vw, 42vw",alt:"Cachet decorative-glass entry door with sidelight",loading:"lazy",decoding:"async"})}),(0,s.jsxs)("div",{className:"ms-pcp-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Need It Installed?"}),(0,s.jsx)("h2",{className:"ms-h2",children:"We’ve got you covered."}),(0,s.jsx)("p",{children:"We work with trusted local contractors and can connect you with an experienced installer for your windows and doors. You’ll receive the same quality products and helpful service from Maritime Stone & Decor, with the added convenience of working with a contractor we know and trust."}),(0,s.jsxs)("ul",{className:"ms-pcp-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Trusted local installers"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Quality products"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," One place to get started"]})]}),(0,s.jsx)("a",{className:"ms-btn ms-btn--primary",href:"#quote",children:"Ask about our Preferred Contractor Program"})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-steps",children:(0,s.jsxs)("div",{className:"ms-steps-inner",children:[(0,s.jsxs)("div",{className:"ms-steps-content",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"How It Works"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Getting started is simple."})]}),(0,s.jsxs)("ol",{className:"ms-step-grid",children:[(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"01"}),(0,s.jsx)(E,{}),(0,s.jsx)("h3",{children:"Tell Us About Your Project"}),(0,s.jsx)("p",{children:"Visit our showroom, give us a call, or send us a message. We’ll learn about your project, answer your questions, and help you get started."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"02"}),(0,s.jsx)(A,{}),(0,s.jsx)("h3",{children:"Find the Right Products"}),(0,s.jsx)("p",{children:"Compare styles, energy ratings, and finishes with guidance from our team. We’ll help you choose products that fit your home, your style, and your budget."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"03"}),(0,s.jsx)(B,{}),(0,s.jsx)("h3",{children:"Move Forward with Confidence"}),(0,s.jsx)("p",{children:"Once your order is confirmed and ready, pick up your materials or have them delivered throughout Atlantic Canada. Need installation? We’ll connect you with one of our trusted contractor partners."})]})]})]}),(0,s.jsx)("div",{className:"ms-steps-media",children:(0,s.jsx)("img",{src:c(g,760),srcSet:m(g,[480,760,1e3]),sizes:"(max-width:900px) 92vw, 40vw",alt:"Alys decorative-glass entry door",loading:"lazy",decoding:"async"})})]})}),(0,s.jsx)("section",{className:"ms-trade",children:(0,s.jsxs)("div",{className:"ms-trade-inner",children:[(0,s.jsxs)("div",{className:"ms-trade-main",children:[(0,s.jsx)("h2",{className:"ms-h2 ms-h2--light",children:"Contractors & Builders"}),(0,s.jsx)("p",{className:"ms-trade-body",children:"We know your reputation depends on getting the job done right. That’s why contractors across Atlantic Canada count on us for reliable products, responsive service, and a team that’s easy to work with."}),(0,s.jsx)("p",{className:"ms-trade-body",children:"Whether you need help selecting products, checking availability, coordinating delivery, or working with your customer on styles and energy ratings, we’re here to help."}),(0,s.jsxs)("ul",{className:"ms-trade-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Responsive, knowledgeable team"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Quality ENERGY STAR products"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Job site delivery throughout Atlantic Canada"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Support for you and your customers"]})]}),(0,s.jsx)("p",{className:"ms-trade-body",children:"We’re here to help with your next project."}),(0,s.jsx)("div",{className:"ms-trade-cta",children:(0,s.jsxs)(o.TelLink,{className:"ms-btn ms-btn--ghost-light",children:[(0,s.jsx)(w,{})," Call the counter"]})})]}),(0,s.jsxs)("div",{className:"ms-trade-photo",children:[(0,s.jsx)("img",{src:c(u,900),srcSet:m(u,[520,900,1200]),sizes:"(max-width:900px) 92vw, 46vw",alt:"Windows and doors project by Maritime Stone & Decor",loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"Riverview"})]})]})}),(0,s.jsx)("section",{className:"ms-testi",children:(0,s.jsxs)("div",{className:"ms-testi-inner",children:[(0,s.jsx)("div",{className:"ms-section-head",children:(0,s.jsx)("h2",{className:"ms-h2",children:"What customers say"})}),(0,s.jsxs)("div",{className:"ms-testi-grid",children:[(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsxs)("blockquote",{children:["We re-did our whole home envelope, including siding, soffit, fascia, windows and doors. They came out fast, quoted quickly, and made sure our windows qualified for the energy-rebate programs available at the time. They supplied the materials ",(0,s.jsx)("em",{children:"and"}),"connected us with a great install crew, and stayed flexible on pricing when surprises came up. A positive experience all around, we’d 100% recommend them."]}),(0,s.jsx)("figcaption",{children:"Gary Marquis · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Our company buys a lot of our materials at Maritime Stone & Decor. The staff are very knowledgeable and very quick to return quotes. We recommend them!"}),(0,s.jsx)("figcaption",{children:"Pierre LeBlanc · Contractor"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Always a great experience with Dave and Heather. Excellent, knowledgeable service with a smile, and they have everything. Highly recommend!"}),(0,s.jsx)("figcaption",{children:"Holly Jensen · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Top-quality service. The owner and his staff really know the products they sell. I bought a custom fireplace mantle and could not be happier, and I won’t hesitate to recommend them."}),(0,s.jsx)("figcaption",{children:"Pauline Gavin · Homeowner"})]})]})]})}),(0,s.jsx)("section",{className:"ms-faq",children:(0,s.jsxs)("div",{className:"ms-faq-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,s.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Before you ask"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Windows & doors questions, answered"})]}),(0,s.jsx)("div",{className:"ms-faq-list",children:b.map((e,r)=>{let i=p===r;return(0,s.jsxs)("div",{className:"ms-faq-item"+(i?" is-open":""),children:[(0,s.jsxs)("button",{type:"button",className:"ms-faq-q","aria-expanded":i,onClick:()=>y(i?-1:r),children:[(0,s.jsx)("span",{children:e.q}),(0,s.jsx)("span",{className:"ms-faq-icon","aria-hidden":"true",children:i?"–":"+"})]}),(0,s.jsx)("div",{className:"ms-faq-a",children:(0,s.jsx)("p",{children:e.a})})]},e.q)})})]})}),(0,s.jsx)("section",{className:"ms-quote",id:"quote",children:(0,s.jsxs)("div",{className:"ms-quote-inner",children:[(0,s.jsxs)("div",{className:"ms-quote-copy",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Get Your Free Windows & Doors Quote"}),(0,s.jsx)("p",{children:"Tell us about your project, and we’ll provide a no-obligation quote along with expert guidance to help you choose the right products."}),(0,s.jsxs)("ul",{className:"ms-quote-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Free, no-obligation quote"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," ENERGY STAR product guidance"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(j,{})," Competitive pricing"]})]}),(0,s.jsxs)(o.TelLink,{className:"ms-quote-call",children:[(0,s.jsx)(w,{})," Prefer to talk? ",l]})]}),(0,s.jsx)("div",{className:"ms-quote-form-wrap",children:(0,s.jsx)(n,{})})]})}),(0,s.jsx)("div",{className:"ms-sticky-bar",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-sticky-btn",href:"#quote",children:"Get a free quote"})}),(0,s.jsx)(o.TelLink,{className:"ms-fab","aria-label":`Call Maritime Stone & Decor at ${l}`,children:(0,s.jsx)(w,{})})]})}],49219)}]);