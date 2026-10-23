(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60487,e=>{"use strict";var s=e.i(43476),r=e.i(71645),i=e.i(8037),a=e.i(26616);e.i(47167);var o=e.i(74997);function n(e,s){return s.trim()?"Email"!==e||/\S+@\S+\.\S+/.test(s)?void 0:"Please enter a valid email address":`${e} is required`}function t(){let[e,t]=(0,r.useState)("Aluminum Brakes & Benders"),[l,m]=(0,r.useState)(""),[d,c]=(0,r.useState)(""),[p,h]=(0,r.useState)(""),[x,f]=(0,r.useState)(""),[g,u]=(0,r.useState)(""),[b,v]=(0,r.useState)(""),[j,y]=(0,r.useState)(!1),[k,w]=(0,r.useState)(!1),[N,S]=(0,r.useState)(""),[z,A]=(0,r.useState)({});function B(e,s){let r=n(e.charAt(0).toUpperCase()+e.slice(1),s);A(s=>({...s,[e]:r}))}function C(e){z[e]&&A(s=>({...s,[e]:void 0}))}async function q(s){if(s.preventDefault(),j)return;S("");let r={},a=n("Name",d),t=n("Phone",p),m=n("Email",x);if(a&&(r.name=a),t&&(r.phone=t),m&&(r.email=m),Object.keys(r).length>0){A(r);let e=a?"name":t?"phone":"email";document.getElementById(e)?.focus();return}if(y(!0),b){w(!0),y(!1);return}try{if(!(await fetch("https://formspree.io/f/preview-disabled",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:"tools-landing",interest:e,company:l.trim(),name:d.trim(),phone:p.trim(),email:x.trim(),details:g.trim()})})).ok)throw Error("Submission failed");(0,o.trackLeadConversion)(),w(!0)}catch{S(`Something went wrong. Please try again or call us at ${i.siteConfig.phone}.`)}finally{y(!1)}}return k?(0,s.jsxs)("div",{className:"ms-form-success",role:"status",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,s.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,s.jsx)("h3",{children:"Request received"}),(0,s.jsxs)("p",{children:["Thanks — we’ll be in touch shortly about the equipment you asked about. Or call us now at"," ",(0,s.jsx)(a.TelLink,{children:i.siteConfig.phone}),"."]})]}):(0,s.jsxs)("form",{className:"ms-form",onSubmit:q,noValidate:!0,children:[N&&(0,s.jsx)("div",{className:"ms-form-error",role:"alert",children:N}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{id:"name",value:d,"aria-required":"true","aria-invalid":z.name?"true":void 0,onChange:e=>{c(e.target.value),C("name")},onBlur:()=>B("name",d)}),z.name&&(0,s.jsx)("p",{className:"ms-field-error",children:z.name})]}),(0,s.jsxs)("div",{className:"ms-field-row",children:[(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,s.jsx)("input",{id:"phone",type:"tel",value:p,"aria-required":"true","aria-invalid":z.phone?"true":void 0,onChange:e=>{h(e.target.value),C("phone")},onBlur:()=>B("phone",p)}),z.phone&&(0,s.jsx)("p",{className:"ms-field-error",children:z.phone})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{id:"email",type:"email",value:x,"aria-required":"true","aria-invalid":z.email?"true":void 0,onChange:e=>{f(e.target.value),C("email")},onBlur:()=>B("email",x)}),z.email&&(0,s.jsx)("p",{className:"ms-field-error",children:z.email})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"interest",children:"Interested in"}),(0,s.jsxs)("select",{id:"interest",value:e,onChange:e=>t(e.target.value),children:[(0,s.jsx)("option",{children:"Aluminum Brakes & Benders"}),(0,s.jsx)("option",{children:"Pump Jacks & Accessories"}),(0,s.jsx)("option",{children:"Snips & Specialty Tools"}),(0,s.jsx)("option",{children:"Aluminum Flatstock"}),(0,s.jsx)("option",{children:"Several of These"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsxs)("label",{htmlFor:"company",children:["Company ",(0,s.jsx)("span",{className:"ms-opt",children:"(optional)"})]}),(0,s.jsx)("input",{id:"company",value:l,onChange:e=>m(e.target.value)})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"details",children:"What do you need?"}),(0,s.jsx)("textarea",{id:"details",rows:4,placeholder:"Model or size you're after, accessories, quantities, when you need it…",value:g,onChange:e=>u(e.target.value)})]}),(0,s.jsx)("input",{className:"ms-honeypot",tabIndex:-1,autoComplete:"off","aria-hidden":"true",name:"_gotcha",value:b,onChange:e=>v(e.target.value)}),(0,s.jsx)("button",{className:"ms-btn ms-btn--primary ms-btn--lg ms-btn--block",type:"submit",disabled:j,children:j?"Sending…":"Send My Inquiry"}),(0,s.jsx)("p",{className:"ms-form-fine",children:"We’ll only use your details to reply to your inquiry."})]})}let l=i.siteConfig.phone,m=i.siteConfig.address,d="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(m.full),c="/msd-fireplaces-preview/images/tools",p=["Metal cutting snips","Roofing and siding notchers","Vinyl siding snips","Specialty cutting and finishing tools"];function h({children:e}){return(0,s.jsxs)("aside",{className:"ms-showroom-note",children:[(0,s.jsx)(b,{}),(0,s.jsx)("p",{children:e})]})}let x={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},f={...x,strokeWidth:2.5},g=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...x,children:(0,s.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})}),u=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...f,children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})}),b=()=>(0,s.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",...x,children:[(0,s.jsx)("path",{d:"M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"}),(0,s.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),v="var(--font-plus-jakarta-sans),system-ui,sans-serif",j=`
.ms-root{
  --ink:#1B2730; --ink-soft:#2C3B45; --paper:#F6F4EF; --sand:#E7E0D2;
  --cedar:#C25E36; --cedar-dark:#A84E2B; --harbour:#3E5C6B; --sage:#6F7B5F;
  --line:rgba(27,39,48,.12); --muted:#5C6770;
  font-family:${v}; color:var(--ink);
  background:var(--paper); line-height:1.55; -webkit-font-smoothing:antialiased;
}
.ms-root *{box-sizing:border-box;}
.ms-root h1,.ms-root h2,.ms-root h3{font-family:${v};line-height:1.08;margin:0;}
.ms-root p{margin:0;}
.ms-accent{color:var(--cedar);}
.ms-root .ms-eyebrow{font-family:${v};text-transform:uppercase;letter-spacing:.16em;
  font-size:.72rem;font-weight:700;color:var(--cedar);margin-bottom:14px;}

.ms-btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;
  font-family:${v};font-weight:700;font-size:.95rem;text-decoration:none;
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

/* ── Hero: dark, copy left, product collage right ── */
.ms-hero{background:radial-gradient(120% 90% at 85% 10%,#2C3B45 0%,var(--ink) 60%);color:#fff;padding:96px 28px 88px;}
.ms-hero-inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center;}
.ms-hero-inner>*{min-width:0;}
.ms-hero .ms-eyebrow{color:#F2A878;}
.ms-hero .ms-accent{color:#F2A878;}
.ms-root .ms-h1{font-size:clamp(2rem,4.2vw,3.2rem);font-weight:800;letter-spacing:-.02em;margin-bottom:22px;}
.ms-lede{font-size:1.08rem;color:rgba(255,255,255,.88);max-width:52ch;}
.ms-root .ms-lede--sub{margin-top:14px;color:rgba(255,255,255,.75);font-size:1rem;}
.ms-lede a{color:#fff;font-weight:700;text-decoration:underline;text-underline-offset:3px;}
.ms-hero-cta{display:flex;flex-wrap:wrap;gap:16px;margin-top:32px;}
.ms-hero-products{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.ms-hero-prod{background:#fff;border-radius:16px;overflow:hidden;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;
  box-shadow:0 18px 40px rgba(0,0,0,.28);}
.ms-hero-prod img{width:100%;height:100%;object-fit:contain;padding:8%;display:block;}
.ms-hero-prod--main{grid-column:1 / -1;aspect-ratio:16/9;}
.ms-hero-prod--main img{padding:2% 6%;object-fit:contain;transform:scale(1.15);}

/* ── Brands ── */
.ms-brands{border-bottom:1px solid var(--line);background:#fff;padding:28px;text-align:center;}
.ms-brands-label{text-transform:uppercase;letter-spacing:.14em;font-size:.7rem;font-weight:700;color:var(--muted);margin-bottom:18px;}
.ms-brand-logos{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:28px 56px;max-width:900px;margin:0 auto;}
.ms-brand-logos img{height:48px;width:auto;object-fit:contain;}
.ms-wordmark{font-family:${v};font-weight:800;font-size:1.6rem;letter-spacing:.04em;text-transform:uppercase;
  color:#fff;background:#1F4E9A;padding:6px 16px;border-radius:6px;line-height:1.2;}

/* ── Product sections (alternating) ── */
.ms-prod{background:var(--paper);padding:88px 28px;}
.ms-prod--alt{background:#fff;}
.ms-prod-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center;}
.ms-prod-inner>*{min-width:0;}
.ms-prod-inner--flip .ms-prod-media{order:2;}
.ms-prod-media{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;aspect-ratio:1/1;
  box-shadow:0 18px 50px rgba(27,39,48,.08);}
.ms-prod--alt .ms-prod-media{background:var(--paper);}
.ms-prod-media img{width:100%;height:100%;object-fit:contain;padding:6%;display:block;mix-blend-mode:multiply;}
.ms-prod-media--large{aspect-ratio:auto;min-height:480px;}
.ms-prod-media--large img{position:absolute;inset:0;padding:2%;}
.ms-photo-tag{position:absolute;left:14px;top:14px;font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;
  padding:6px 12px;border-radius:99px;background:var(--ink);color:#fff;}
.ms-prod-copy{display:flex;flex-direction:column;gap:14px;}
.ms-h2{font-size:clamp(1.7rem,3.2vw,2.4rem);font-weight:800;letter-spacing:-.02em;margin-bottom:4px;}
.ms-h2--light{color:#fff;}
.ms-prod-copy>p{color:var(--ink-soft);font-size:1.02rem;}
.ms-root .ms-prod-lead{font-size:1.15rem;color:var(--ink);font-weight:600;}
.ms-tool-list{list-style:none;margin:2px 0 0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:10px 18px;}
.ms-tool-list li{display:flex;align-items:flex-start;gap:9px;font-weight:600;font-size:.95rem;color:var(--ink);}
.ms-tool-list svg{color:var(--sage);flex:none;margin-top:4px;}
.ms-showroom-note{display:flex;gap:12px;align-items:flex-start;margin-top:10px;padding:16px 18px;border-radius:12px;
  background:var(--sand);border-left:3px solid var(--cedar);color:var(--ink-soft);font-size:.95rem;}
.ms-prod--alt .ms-showroom-note{background:var(--paper);}
.ms-showroom-note svg{color:var(--cedar);flex:none;margin-top:2px;}
.ms-showroom-note strong{color:var(--ink);}

/* ── Flatstock band ── */
.ms-flat{background:var(--harbour);color:#fff;padding:84px 28px;}
.ms-flat-inner{max-width:820px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px;}
.ms-flat-inner p{color:rgba(255,255,255,.86);font-size:1.05rem;}
.ms-stock-pill{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--harbour);font-weight:800;font-size:.72rem;
  text-transform:uppercase;letter-spacing:.12em;padding:7px 14px;border-radius:99px;}
.ms-stock-pill::before{content:"";width:8px;height:8px;border-radius:50%;background:#3FA36B;}
.ms-root .ms-flat-tag{margin-top:8px;color:#fff;font-weight:700;font-size:1.1rem;}

/* ── Visit ── */
.ms-visit{background:var(--sand);padding:88px 28px;}
.ms-visit-inner{max-width:1120px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:start;}
.ms-visit-inner>*{min-width:0;}
.ms-visit-copy{display:flex;flex-direction:column;gap:14px;}
.ms-visit-copy>p{color:var(--ink-soft);font-size:1.06rem;}
.ms-visit-card{margin-top:10px;background:#fff;border-radius:18px;padding:30px;border:1px solid var(--line);box-shadow:0 18px 50px rgba(27,39,48,.08);
  display:flex;flex-direction:column;gap:12px;}
.ms-visit-card h3{font-size:1.3rem;margin-bottom:4px;}
.ms-visit-line{display:inline-flex;align-items:center;gap:10px;color:var(--ink);font-weight:600;text-decoration:none;}
.ms-visit-line:hover{color:var(--cedar);}
.ms-visit-line svg{color:var(--cedar);flex:none;}
.ms-visit-hours{color:var(--muted);font-size:.92rem;}
.ms-visit-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:8px;}
.ms-visit-base{font-size:.85rem;color:var(--muted);border-top:1px solid var(--line);padding-top:12px;margin-top:6px;}

/* ── Inquiry form (same field styles as the other product pages) ── */
.ms-quote-form-wrap{background:#fff;border-radius:18px;padding:32px;border:1px solid var(--line);box-shadow:0 18px 50px rgba(27,39,48,.08);scroll-margin-top:90px;}
.ms-form-title{font-size:1.3rem;margin-bottom:6px;}
.ms-root .ms-form-intro{color:var(--muted);font-size:.95rem;margin-bottom:20px;}
.ms-form{display:flex;flex-direction:column;gap:16px;}
.ms-field{display:flex;flex-direction:column;gap:6px;}
.ms-field-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.ms-field-row>*{min-width:0;}
.ms-field label{font-size:.82rem;font-weight:600;color:var(--ink-soft);}
.ms-opt{font-weight:400;color:var(--muted);}
.ms-field input,.ms-field textarea,.ms-field select{width:100%;min-width:0;font-family:inherit;font-size:.96rem;padding:11px 13px;
  border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--ink);resize:vertical;}
.ms-field input:focus,.ms-field textarea:focus,.ms-field select:focus{outline:2px solid var(--cedar);outline-offset:1px;border-color:transparent;}
.ms-field-error{font-size:.78rem;color:#B42318;margin:0;}
.ms-form-error{background:#FEF3F2;border:1px solid #FDA29B;color:#B42318;border-radius:8px;padding:12px 14px;font-size:.9rem;}
.ms-honeypot{position:absolute;left:-9999px;width:1px;height:1px;opacity:0;}
.ms-form-fine{font-size:.78rem;color:var(--muted);text-align:center;}
.ms-btn--block{width:100%;}
.ms-form-success{text-align:center;padding:30px 10px;}
.ms-form-success svg{color:var(--sage);margin-bottom:14px;}
.ms-form-success h3{font-size:1.4rem;margin-bottom:8px;}
.ms-form-success p{color:var(--muted);}
.ms-form-success a{color:var(--cedar);font-weight:600;text-decoration:none;}

.ms-sticky-bar{display:none;position:fixed;bottom:0;left:0;right:0;z-index:40;gap:10px;padding:12px 16px;
  background:rgba(246,244,239,.96);backdrop-filter:blur(8px);border-top:1px solid var(--line);}
.ms-sticky-btn{flex:1;}

@media (max-width:900px){
  .ms-hero{padding:72px 22px;}
  .ms-hero-inner,.ms-prod-inner,.ms-visit-inner{grid-template-columns:1fr;gap:32px;}
  .ms-prod-inner--flip .ms-prod-media{order:0;}
  .ms-prod-media--large{min-height:340px;}
}
@media (max-width:640px){
  .ms-prod,.ms-flat,.ms-visit{padding:56px 20px;}
  .ms-tool-list{grid-template-columns:1fr;}
  .ms-field-row{grid-template-columns:1fr;}
  .ms-quote-form-wrap{padding:24px 20px;}
  .ms-brand-logos img{height:38px;}
  .ms-sticky-bar{display:flex;padding-bottom:calc(12px + env(safe-area-inset-bottom));}
  .ms-root{padding-bottom:calc(76px + env(safe-area-inset-bottom));}
}
/* Subtle scroll-reveal — only applies once JS arms it, so no-JS shows everything. */
@media (prefers-reduced-motion:no-preference){
  .ms-reveal-armed .ms-reveal{opacity:0;transform:translateY(16px);
    transition:opacity .6s cubic-bezier(.22,.61,.36,1),transform .6s cubic-bezier(.22,.61,.36,1);}
  .ms-reveal-armed .ms-reveal.is-in{opacity:1;transform:none;}
}
@media (prefers-reduced-motion:reduce){ .ms-root *{transition:none!important;animation:none!important;} }
`;e.s(["ToolsLandingPage",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let s=e.current;if(!s||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let r=Array.from(s.querySelectorAll(".ms-prod-media,.ms-prod-copy,.ms-flat-inner,.ms-visit-card,.ms-quote-form-wrap"));r.forEach(e=>e.classList.add("ms-reveal"));let i=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),i.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});return r.forEach(e=>i.observe(e)),s.classList.add("ms-reveal-armed"),()=>i.disconnect()},[]),(0,s.jsxs)("div",{className:"ms-root",ref:e,children:[(0,s.jsx)("style",{children:j}),(0,s.jsx)("section",{className:"ms-hero",children:(0,s.jsxs)("div",{className:"ms-hero-inner",children:[(0,s.jsxs)("div",{className:"ms-hero-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Brakes, Benders, Pump Jacks & Professional Tools"}),(0,s.jsxs)("h1",{className:"ms-h1",children:["Professional Equipment & Tools for"," ",(0,s.jsx)("span",{className:"ms-accent",children:"Siding, Roofing and Exterior Contractors"})]}),(0,s.jsx)("p",{className:"ms-lede",children:"Quality tools make a difference on every job. At Maritime Stone & Decor, we stock professional-grade aluminum bending brakes, pump jack systems, aluminum flatstock and specialty hand tools from trusted brands including Alum-A-Brake, Sky-Hi and Midwest."}),(0,s.jsxs)("p",{className:"ms-lede ms-lede--sub",children:["Visit our showroom at"," ",(0,s.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:m.street})," ","in Moncton to see our equipment on display and explore the tools and materials available for your next project."]}),(0,s.jsxs)("div",{className:"ms-hero-cta",children:[(0,s.jsxs)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:d,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(b,{})," Visit Our Showroom"]}),(0,s.jsxs)(a.TelLink,{className:"ms-btn ms-btn--ghost-light ms-btn--lg",children:[(0,s.jsx)(g,{})," Call ",l]})]})]}),(0,s.jsxs)("div",{className:"ms-hero-products","aria-hidden":"true",children:[(0,s.jsx)("div",{className:"ms-hero-prod ms-hero-prod--main",children:(0,s.jsx)("img",{src:`${c}/alum-a-brake-bending-brake.webp`,alt:"",fetchPriority:"high"})}),(0,s.jsx)("div",{className:"ms-hero-prod",children:(0,s.jsx)("img",{src:`${c}/sky-hi-pump-jack.webp`,alt:""})}),(0,s.jsx)("div",{className:"ms-hero-prod",children:(0,s.jsx)("img",{src:`${c}/midwest-aviation-snips.webp`,alt:""})})]})]})}),(0,s.jsxs)("section",{className:"ms-brands","aria-label":"Equipment brands we stock",children:[(0,s.jsx)("p",{className:"ms-brands-label",children:"Trusted brands, stocked in Moncton"}),(0,s.jsxs)("div",{className:"ms-brand-logos",children:[(0,s.jsx)("img",{src:"/msd-fireplaces-preview/images/brands/alum-a-pole.webp",alt:"Alum-A-Pole, maker of Alum-A-Brake"}),(0,s.jsx)("img",{src:"/msd-fireplaces-preview/images/brands/sky-hi-industries.webp",alt:"Sky-Hi Industries"}),(0,s.jsx)("span",{className:"ms-wordmark",children:"Midwest"})]})]}),(0,s.jsx)("section",{className:"ms-prod",id:"brakes",children:(0,s.jsxs)("div",{className:"ms-prod-inner",children:[(0,s.jsxs)("div",{className:"ms-prod-media ms-prod-media--large",children:[(0,s.jsx)("img",{src:`${c}/alum-a-brake-bending-brake.webp`,alt:"Alum-A-Brake aluminum bending brake on its stand",loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"On display in Moncton"})]}),(0,s.jsxs)("div",{className:"ms-prod-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Alum-A-Brake"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Aluminum Brakes & Benders"}),(0,s.jsx)("p",{className:"ms-prod-lead",children:"Professional aluminum bending brakes designed for precision, durability and efficiency."}),(0,s.jsx)("p",{children:"Whether you’re bending aluminum trim, creating custom flashing or working on siding and exterior finishing, Alum-A-Brake equipment helps contractors achieve clean, consistent results."}),(0,s.jsxs)(h,{children:[(0,s.jsx)("strong",{children:"Alum-A-Brake equipment is stocked and on display at our Moncton showroom."})," ","Stop in to see the equipment firsthand and speak with our team about available models and accessories."]})]})]})}),(0,s.jsx)("section",{className:"ms-prod ms-prod--alt",id:"pump-jacks",children:(0,s.jsxs)("div",{className:"ms-prod-inner ms-prod-inner--flip",children:[(0,s.jsxs)("div",{className:"ms-prod-media",children:[(0,s.jsx)("img",{src:`${c}/sky-hi-pump-jack.webp`,alt:"Sky-Hi aluminum pump jack with crank handle",loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"On display in Moncton"})]}),(0,s.jsxs)("div",{className:"ms-prod-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Sky-Hi"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Pump Jacks & Accessories"}),(0,s.jsx)("p",{className:"ms-prod-lead",children:"Reliable pump jack equipment for siding, roofing and exterior construction projects."}),(0,s.jsx)("p",{children:"We carry Sky-Hi pump jack systems and related equipment designed to provide practical access solutions for contractors working at height."}),(0,s.jsxs)(h,{children:[(0,s.jsx)("strong",{children:"Sky-Hi equipment is available at Maritime Stone & Decor."})," ","Visit our showroom to see our display and inquire about available components and accessories."]})]})]})}),(0,s.jsx)("section",{className:"ms-prod",id:"snips",children:(0,s.jsxs)("div",{className:"ms-prod-inner",children:[(0,s.jsxs)("div",{className:"ms-prod-media",children:[(0,s.jsx)("img",{src:`${c}/midwest-aviation-snips.webp`,alt:"Midwest left, straight and right aviation snips",loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"In stock in Moncton"})]}),(0,s.jsxs)("div",{className:"ms-prod-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Midwest"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Professional Snips & Specialty Tools"}),(0,s.jsx)("p",{className:"ms-prod-lead",children:"The right tools make cutting, notching and finishing easier."}),(0,s.jsx)("p",{children:"We stock a selection of professional Midwest tools for siding, roofing, metalwork and exterior finishing, including:"}),(0,s.jsx)("ul",{className:"ms-tool-list",children:p.map(e=>(0,s.jsxs)("li",{children:[(0,s.jsx)(u,{})," ",e]},e))}),(0,s.jsxs)(h,{children:[(0,s.jsx)("strong",{children:"Midwest tools are stocked at our Moncton showroom,"})," making it convenient for contractors to pick up the tools they need."]})]})]})}),(0,s.jsx)("section",{className:"ms-flat",id:"flatstock",children:(0,s.jsxs)("div",{className:"ms-flat-inner",children:[(0,s.jsx)("span",{className:"ms-stock-pill",children:"In Stock"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--light",children:"Aluminum Flatstock"}),(0,s.jsx)("p",{children:"We also stock rolls of aluminum flatstock for custom bending, trim, flashing and exterior finishing applications."}),(0,s.jsx)("p",{children:"Whether you’re fabricating window and door trim, fascia, flashing or other custom metal components, we have the flatstock to complement your bending equipment."}),(0,s.jsx)("p",{className:"ms-flat-tag",children:"Aluminum flatstock and professional tools — all available at one convenient location."})]})}),(0,s.jsx)("section",{className:"ms-visit",id:"showroom",children:(0,s.jsxs)("div",{className:"ms-visit-inner",children:[(0,s.jsxs)("div",{className:"ms-visit-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Visit the showroom"}),(0,s.jsx)("h2",{className:"ms-h2",children:"See It in Person at Maritime Stone & Decor"}),(0,s.jsx)("p",{children:"Shopping for a new aluminum brake, pump jack system or specialty siding tools?"}),(0,s.jsx)("p",{children:"Stop by our showroom to see our equipment on display, browse our stocked products and speak with our team."}),(0,s.jsxs)("div",{className:"ms-visit-card",children:[(0,s.jsx)("h3",{children:"Maritime Stone & Decor"}),(0,s.jsxs)("a",{className:"ms-visit-line",href:d,target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(b,{})," ",m.street,", ",m.city,", ",m.province]}),(0,s.jsxs)(a.TelLink,{className:"ms-visit-line",children:[(0,s.jsx)(g,{})," ",l]}),(0,s.jsx)("p",{className:"ms-visit-hours",children:i.siteConfig.hours.weekdays}),(0,s.jsxs)("div",{className:"ms-visit-cta",children:[(0,s.jsx)("a",{className:"ms-btn ms-btn--primary",href:d,target:"_blank",rel:"noopener noreferrer",children:"Get Directions"}),(0,s.jsx)(a.TelLink,{className:"ms-btn ms-btn--ghost",children:"Call Us"})]}),(0,s.jsx)("p",{className:"ms-visit-base",children:"Based in Moncton, NB · Delivery throughout Atlantic Canada"})]})]}),(0,s.jsxs)("div",{className:"ms-quote-form-wrap",id:"quote",children:[(0,s.jsx)("h3",{className:"ms-form-title",children:"Can’t make it in? Send us an inquiry."}),(0,s.jsx)("p",{className:"ms-form-intro",children:"Ask about models, accessories, availability or pricing and our team will get back to you."}),(0,s.jsx)(t,{})]})]})}),(0,s.jsxs)("div",{className:"ms-sticky-bar",children:[(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-sticky-btn",href:d,target:"_blank",rel:"noopener noreferrer",children:"Directions"}),(0,s.jsx)("a",{className:"ms-btn ms-btn--ghost ms-sticky-btn",href:"#quote",children:"Inquire"}),(0,s.jsx)(a.TelLink,{className:"ms-btn ms-btn--ghost ms-sticky-btn",children:"Call"})]})]})}],60487)}]);