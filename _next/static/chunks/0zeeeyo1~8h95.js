(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94662,e=>{"use strict";var s=e.i(43476),r=e.i(71645);e.i(47167);var i=e.i(8037),a=e.i(74997),t=e.i(26616);function o(e,s){return s.trim()?"Email"!==e||/\S+@\S+\.\S+/.test(s)?void 0:"Please enter a valid email address":`${e} is required`}function n(){let[e,n]=(0,r.useState)("Homeowner"),[l,d]=(0,r.useState)(""),[c,m]=(0,r.useState)(""),[p,h]=(0,r.useState)(""),[x,g]=(0,r.useState)(""),[u,f]=(0,r.useState)(""),[b,y]=(0,r.useState)(""),[j,v]=(0,r.useState)(!1),[w,N]=(0,r.useState)(!1),[k,q]=(0,r.useState)(""),[z,S]=(0,r.useState)({});function C(e,s){let r=o(e.charAt(0).toUpperCase()+e.slice(1),s);S(s=>({...s,[e]:r}))}function _(e){z[e]&&S(s=>({...s,[e]:void 0}))}async function A(s){if(s.preventDefault(),j)return;q("");let r={},t=o("Name",l),n=o("Phone",c),d=o("Email",p);if(t&&(r.name=t),n&&(r.phone=n),d&&(r.email=d),Object.keys(r).length>0){S(r);let e=t?"name":n?"phone":"email";document.getElementById(e)?.focus();return}if(v(!0),b){N(!0),v(!1);return}try{if(!(await fetch("https://formspree.io/f/preview-disabled",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:"siding-landing",role:e,name:l.trim(),phone:c.trim(),email:p.trim(),address:x.trim(),details:u.trim()})})).ok)throw Error("Submission failed");(0,a.trackLeadConversion)(),N(!0)}catch{q(`Something went wrong. Please try again or call us at ${i.siteConfig.phone}.`)}finally{v(!1)}}return w?(0,s.jsxs)("div",{className:"ms-form-success",role:"status",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,s.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,s.jsx)("h3",{children:"Request received"}),(0,s.jsxs)("p",{children:["Thanks — we’ll be in touch shortly with your siding pricing. Or call us now at"," ",(0,s.jsx)(t.TelLink,{children:i.siteConfig.phone}),"."]})]}):(0,s.jsxs)("form",{className:"ms-form",onSubmit:A,noValidate:!0,children:[k&&(0,s.jsx)("div",{className:"ms-form-error",role:"alert",children:k}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"role",children:"I’m a…"}),(0,s.jsxs)("select",{id:"role",value:e,onChange:e=>n(e.target.value),children:[(0,s.jsx)("option",{children:"Homeowner"}),(0,s.jsx)("option",{children:"Contractor or builder"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{id:"name",value:l,"aria-required":"true","aria-invalid":z.name?"true":void 0,onChange:e=>{d(e.target.value),_("name")},onBlur:()=>C("name",l)}),z.name&&(0,s.jsx)("p",{className:"ms-field-error",children:z.name})]}),(0,s.jsxs)("div",{className:"ms-field-row",children:[(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,s.jsx)("input",{id:"phone",type:"tel",value:c,"aria-required":"true","aria-invalid":z.phone?"true":void 0,onChange:e=>{m(e.target.value),_("phone")},onBlur:()=>C("phone",c)}),z.phone&&(0,s.jsx)("p",{className:"ms-field-error",children:z.phone})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{id:"email",type:"email",value:p,"aria-required":"true","aria-invalid":z.email?"true":void 0,onChange:e=>{h(e.target.value),_("email")},onBlur:()=>C("email",p)}),z.email&&(0,s.jsx)("p",{className:"ms-field-error",children:z.email})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsxs)("label",{htmlFor:"address",children:["Project address ",(0,s.jsx)("span",{className:"ms-opt",children:"(optional)"})]}),(0,s.jsx)("input",{id:"address",value:x,onChange:e=>g(e.target.value)})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"details",children:"Tell us about your project"}),(0,s.jsx)("textarea",{id:"details",rows:4,placeholder:"Rough square footage, the look you're after, timeline…",value:u,onChange:e=>f(e.target.value)})]}),(0,s.jsx)("input",{className:"ms-honeypot",tabIndex:-1,autoComplete:"off","aria-hidden":"true",name:"_gotcha",value:b,onChange:e=>y(e.target.value)}),(0,s.jsx)("button",{className:"ms-btn ms-btn--primary ms-btn--lg ms-btn--block",type:"submit",disabled:j,children:j?"Sending…":"Send my request"}),(0,s.jsx)("p",{className:"ms-form-fine",children:"We’ll only use your details to prepare your quote."})]})}let l="(506) 854-2266",d=["https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1781886858/DSC01137_raso6i.jpg","https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1781886808/DSC05988_d0jtfl.jpg","https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1781886781/DJI_0241-Enhanced-NR_vf9tte.jpg"];function c(e,s){return e.replace("/upload/f_auto,q_auto/",`/upload/f_auto,q_auto,c_limit,w_${s}/`)}function m(e,s){return s.map(s=>`${c(e,s)} ${s}w`).join(", ")}let p="https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto",h=`${p}/v1781887396/DSC05997_gwbvfj.jpg`,x=`${p}/v1781887091/DSC05805_rc0vx2.jpg`,g=`${p}/v1781886808/DSC05988_d0jtfl.jpg`,u=`${p}/v1781887396/DSC05997_gwbvfj.jpg`,f=[{src:"/msd-fireplaces-preview/images/brands/kaycan.webp",alt:"Kaycan"},{src:"/msd-fireplaces-preview/images/brands/maibec.webp",alt:"Maibec"},{src:"https://res.cloudinary.com/dsqbqhqvf/image/upload/v1782416393/5a6f960fecb30600010ceb90_lp-smartside_gw688a.png",alt:"LP SmartSide"},{src:"/msd-fireplaces-preview/images/brands/newtechwood.webp",alt:"NewTechWood"},{src:"/msd-fireplaces-preview/images/brands/canyon-stone.png",alt:"Canyon Stone"}],b=[{q:"Do you install siding, or just sell it?",a:"We specialize in supplying quality siding and exterior building products, and we partner with trusted local contractors to provide installation services. If you're looking for an installer, we're happy to connect you with one of our Preferred Contractor partners."},{q:"What siding brands do you carry?",a:"We carry trusted brands including Kaycan, LP SmartSide, Maibec, NewTechWood, and more. Our team will help you compare your options and choose the products that best suit your home, style, and budget."},{q:"Are your prices competitive?",a:"Yes. We work hard to offer competitive pricing on quality products and trusted brands. We'd be happy to provide a quote for your project."},{q:"Do you deliver?",a:"Yes. We offer delivery throughout Atlantic Canada, or you can pick up your order at our Moncton showroom. Contact us to discuss delivery options for your project."},{q:"Do you sell to contractors and builders?",a:"Absolutely. We believe strong relationships are built on reliable service, knowledgeable support, and quality products. Whether you're managing one project or many, our team is here to help keep your jobs running smoothly."}];function y({after:e,afterAlt:i,before:a,beforeAlt:t,label:o}){let[n,l]=(0,r.useState)(50),d="(max-width:900px) 92vw, 33vw",p=[400,700,900];return(0,s.jsxs)("div",{className:"ms-ba",children:[(0,s.jsx)("img",{className:"ms-ba-img ms-ba-after",src:c(e,700),srcSet:m(e,p),sizes:d,alt:i,loading:"lazy",decoding:"async"}),(0,s.jsx)("img",{className:"ms-ba-img ms-ba-before",src:c(a,700),srcSet:m(a,p),sizes:d,alt:t,loading:"lazy",decoding:"async",style:{clipPath:`inset(0 ${100-n}% 0 0)`}}),(0,s.jsx)("input",{className:"ms-ba-range",type:"range",min:0,max:100,value:n,onChange:e=>l(Number(e.target.value)),"aria-label":o}),(0,s.jsx)("span",{className:"ms-ba-divider",style:{left:`${n}%`},"aria-hidden":"true"}),(0,s.jsx)("span",{className:"ms-ba-badge ms-ba-badge--before","aria-hidden":"true",children:"Before"}),(0,s.jsx)("span",{className:"ms-ba-badge ms-ba-badge--after","aria-hidden":"true",children:"After"})]})}let j={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},v={...j,strokeWidth:2.5},w=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...j,children:(0,s.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})}),N=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...v,children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})}),k=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...j,children:(0,s.jsx)("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),q=()=>(0,s.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...j,children:(0,s.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),z=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...j,children:[(0,s.jsx)("path",{d:"M1 3h15v13H1z"}),(0,s.jsx)("path",{d:"M16 8h4l3 3v5h-7z"}),(0,s.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),(0,s.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]}),S=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...j,children:[(0,s.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,s.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),C=()=>(0,s.jsxs)("svg",{className:"ms-problem-icon",width:"30",height:"30",viewBox:"0 0 24 24",...j,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,s.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),_=()=>(0,s.jsxs)("svg",{className:"ms-problem-icon",width:"30",height:"30",viewBox:"0 0 24 24",...j,children:[(0,s.jsx)("line",{x1:"8",y1:"19",x2:"8",y2:"21"}),(0,s.jsx)("line",{x1:"8",y1:"13",x2:"8",y2:"15"}),(0,s.jsx)("line",{x1:"16",y1:"19",x2:"16",y2:"21"}),(0,s.jsx)("line",{x1:"16",y1:"13",x2:"16",y2:"15"}),(0,s.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),(0,s.jsx)("line",{x1:"12",y1:"15",x2:"12",y2:"17"}),(0,s.jsx)("path",{d:"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"})]}),A=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...j,children:[(0,s.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,s.jsx)("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),B=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...j,children:[(0,s.jsx)("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),(0,s.jsx)("polyline",{points:"2 17 12 22 22 17"}),(0,s.jsx)("polyline",{points:"2 12 12 17 22 12"})]}),D=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...j,children:[(0,s.jsx)("line",{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}),(0,s.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,s.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,s.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),M="var(--font-plus-jakarta-sans),system-ui,sans-serif",W=`
.ms-root{
  --ink:#1B2730; --ink-soft:#2C3B45; --paper:#F6F4EF; --sand:#E7E0D2;
  --cedar:#C25E36; --cedar-dark:#A84E2B; --harbour:#3E5C6B; --sage:#6F7B5F;
  --line:rgba(27,39,48,.12); --muted:#5C6770;
  font-family:${M}; color:var(--ink);
  background:var(--paper); line-height:1.55; -webkit-font-smoothing:antialiased;
}
.ms-root *{box-sizing:border-box;}
.ms-root h1,.ms-root h2,.ms-root h3,.ms-root h4{font-family:${M};line-height:1.08;margin:0;}
.ms-root p{margin:0;}
.ms-accent{color:var(--cedar);}
.ms-eyebrow{font-family:${M};text-transform:uppercase;letter-spacing:.16em;
  font-size:.72rem;font-weight:700;color:var(--cedar);margin-bottom:14px;}
.ms-eyebrow--center{text-align:center;}
.ms-eyebrow--light{color:#E9A887;}

.ms-btn{display:inline-flex;align-items:center;gap:12px;justify-content:center;
  font-family:${M};font-weight:700;font-size:.95rem;text-decoration:none;
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
.ms-badge{display:inline-flex;align-items:center;gap:8px;background:var(--ink);color:#fff;
  font-family:${M};font-weight:600;font-size:.82rem;padding:8px 15px;border-radius:99px;margin-bottom:22px;}
.ms-badge svg{color:var(--cedar);}
.ms-lede{font-size:1.12rem;color:var(--muted);max-width:36ch;}
.ms-hero-cta{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:26px;}
.ms-trust-chips{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:9px;}
.ms-trust-chips li{display:flex;align-items:center;gap:9px;font-size:.92rem;color:var(--ink-soft);font-weight:500;}
.ms-trust-chips svg{color:var(--sage);flex:none;}

.ms-brands{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff;padding:28px;text-align:center;}
.ms-brands-label{font-family:${M};text-transform:uppercase;letter-spacing:.14em;
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

.ms-types{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:78px 28px;
  background-image:linear-gradient(rgba(20,29,36,.82),rgba(20,29,36,.9)),url('https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto,c_limit,w_1600/v1781887092/DSCF8191_lpqhaq.jpg');
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
.ms-type-tag{position:absolute;top:18px;right:18px;background:var(--cedar);color:#fff;font-family:${M};
  font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:5px 10px;border-radius:99px;}
.ms-mid-cta{text-align:center;margin-top:40px;}

.ms-why{background-image:linear-gradient(rgba(20,29,36,.9),rgba(20,29,36,.94)),url('https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto,c_limit,w_1600/v1781886858/DSC01137_raso6i.jpg');
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

.ms-steps-inner{display:grid;grid-template-columns:1.18fr .82fr;gap:50px;align-items:stretch;width:100%;}
.ms-steps-media{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:3/4;box-shadow:0 18px 50px rgba(27,39,48,.14);}
.ms-steps-media img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-step-grid{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:16px;}
.ms-step{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px 26px;overflow:hidden;}
.ms-step-icon{color:var(--cedar);margin-bottom:16px;display:block;}
.ms-step-num{position:absolute;top:16px;right:20px;font-family:${M};font-weight:800;font-size:2.6rem;color:var(--sand);line-height:1;}
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
.ms-testi-card::before{content:"\\201C";position:absolute;top:-14px;right:16px;font-family:${M};font-size:5.5rem;line-height:1;color:var(--sand);pointer-events:none;}
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
.ms-ba-badge{position:absolute;bottom:10px;font-family:${M};font-size:.6rem;font-weight:700;
  text-transform:uppercase;letter-spacing:.08em;padding:4px 9px;border-radius:99px;background:rgba(27,39,48,.82);color:#fff;pointer-events:none;}
.ms-ba-badge--before{left:10px;}
.ms-ba-badge--after{right:10px;}
.ms-proj-cap{margin-top:14px;}
.ms-proj-loc{display:block;font-family:${M};font-weight:700;font-size:1.02rem;color:var(--ink);}
.ms-proj-scope{display:block;font-size:.88rem;color:var(--muted);margin-top:3px;}

.ms-faq-list{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:12px;}
.ms-faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.ms-faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background:none;border:none;cursor:pointer;text-align:left;padding:20px 22px;
  font-family:${M};font-weight:600;font-size:1.04rem;color:var(--ink);}
.ms-faq-icon{font-size:1.5rem;color:var(--cedar);line-height:1;flex:none;}
.ms-faq-a{padding:0 22px 22px;color:var(--muted);font-size:.98rem;}
.ms-faq-item:not(.is-open) .ms-faq-a{display:none;}

.ms-photo-tag{position:absolute;left:12px;bottom:12px;font-family:${M};font-size:.62rem;font-weight:700;
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
  .ms-why-inner,.ms-pcp-inner,.ms-trade-inner,.ms-problem-inner,.ms-steps-inner,.ms-quote-inner{grid-template-columns:1fr;gap:32px;}
  .ms-problem-media,.ms-steps-media{aspect-ratio:16/11;}
  .ms-trade-photo{min-height:280px;}
  .ms-pcp-inner{padding:34px;}
  .ms-types,.ms-why{background-attachment:scroll;}
  .ms-pcp-photo{aspect-ratio:16/10;}
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
`;e.s(["SidingLandingPage",0,function(){let[e,i]=(0,r.useState)(0),[a,o]=(0,r.useState)([0]),[p,j]=(0,r.useState)(0),v=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=v.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=Array.from(e.querySelectorAll(".ms-section-head,.ms-problem-card,.ms-type-card,.ms-value-list li,.ms-step,.ms-proj-item,.ms-testi-card,.ms-faq-item,.ms-pcp-inner,.ms-quote-form-wrap")),r=new Map;s.forEach(e=>{e.classList.add("ms-reveal");let s=e.parentElement;if(!s)return;let i=r.get(s)??0;r.set(s,i+1),i&&(e.style.transitionDelay=`${Math.min(70*i,280)}ms`)});let i=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),i.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});return s.forEach(e=>i.observe(e)),e.classList.add("ms-reveal-armed"),()=>i.disconnect()},[]),(0,r.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||d.length<2)return;let e=setTimeout(()=>o(e=>e.includes(1)?e:[...e,1]),1500),s=setInterval(()=>{i(e=>{let s=(e+1)%d.length;return o(e=>e.includes(s)?e:[...e,s]),s})},5e3);return()=>{clearTimeout(e),clearInterval(s)}},[]),(0,s.jsxs)("div",{className:"ms-root",ref:v,children:[(0,s.jsx)("style",{children:W}),(0,s.jsxs)("section",{className:"ms-hero",children:[(0,s.jsx)("div",{className:"ms-hero-bg","aria-hidden":"true",children:d.map((r,i)=>a.includes(i)?(0,s.jsx)("img",{className:"ms-hero-slide"+(i===e?" is-active":""),src:c(r,1600),srcSet:m(r,[1280,1600,1920]),sizes:"100vw",alt:"",fetchPriority:0===i?"high":void 0,loading:0===i?"eager":"lazy",decoding:"async"},r):(0,s.jsx)("div",{className:"ms-hero-slide"},r))}),(0,s.jsx)("div",{className:"ms-hero-inner",children:(0,s.jsxs)("div",{className:"ms-hero-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Siding · Moncton, Riverview & Dieppe"}),(0,s.jsxs)("h1",{className:"ms-h1",children:["Brand-name siding at ",(0,s.jsx)("span",{className:"ms-accent",children:"rock-bottom prices."})]}),(0,s.jsx)("p",{className:"ms-lede",children:"Come for the selection and the pricing, stay for the one-on-one help that gets your siding right. Buy direct, or let us connect you with a vetted crew from our Preferred Contractor Program."}),(0,s.jsxs)("div",{className:"ms-hero-cta",children:[(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Get my free siding quote"}),(0,s.jsxs)(t.TelLink,{className:"ms-btn ms-btn--ghost-light ms-btn--lg",children:[(0,s.jsx)(w,{})," ",l]})]}),(0,s.jsxs)("ul",{className:"ms-trust-chips",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{}),"Vinyl, aluminum, steel & engineered wood"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Delivery throughout Atlantic Canada"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Vetted Preferred Contractor Program"]})]})]})})]}),(0,s.jsxs)("section",{className:"ms-brands","aria-label":"Siding brands we carry",children:[(0,s.jsx)("p",{className:"ms-brands-label",children:"Brand-name siding we carry"}),(0,s.jsx)("div",{className:"ms-brand-logos",children:f.map(e=>(0,s.jsx)("img",{src:e.src,alt:e.alt},e.alt))})]}),(0,s.jsx)("section",{className:"ms-section ms-problem",children:(0,s.jsxs)("div",{className:"ms-problem-inner",children:[(0,s.jsx)("div",{className:"ms-problem-media",children:(0,s.jsx)("img",{src:c(h,760),srcSet:m(h,[480,760,1e3]),sizes:"(max-width:900px) 92vw, 40vw",alt:"Completed siding and stone exterior by Maritime Stone & Decor",loading:"lazy",decoding:"async"})}),(0,s.jsxs)("div",{className:"ms-problem-content",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Choosing siding shouldn’t be confusing."}),(0,s.jsxs)("div",{className:"ms-problem-grid",children:[(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(C,{}),(0,s.jsx)("h3",{children:"Too many products, not enough guidance"}),(0,s.jsx)("p",{children:"Vinyl, aluminum, engineered wood, composite... there are a lot of options, and choosing the right one isn’t always easy."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(q,{}),(0,s.jsx)("h3",{children:"Advice you can trust"}),(0,s.jsx)("p",{children:"Our team takes the time to understand your project, explain the differences between products, and help you choose the right fit for your home, budget, and the Maritime climate."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(_,{}),(0,s.jsx)("h3",{children:"Products built to last"}),(0,s.jsx)("p",{children:"We carry quality siding from trusted manufacturers and can help you find products that perform well through our harsh winters, coastal conditions, and changing seasons."})]})]}),(0,s.jsx)("p",{className:"ms-problem-bridge",children:"At Maritime Stone & Decor, we’re here to make your project easier. Whether you’re building new, renovating, or replacing existing siding, we’ll help you choose products that look great, perform well, and fit your budget."})]})]})}),(0,s.jsx)("section",{className:"ms-types",children:(0,s.jsxs)("div",{className:"ms-types-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Choose your material"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Four ways to side your home"})]}),(0,s.jsxs)("div",{className:"ms-type-grid",children:[(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("span",{className:"ms-type-tag",children:"Most popular"}),(0,s.jsx)("h3",{children:"Vinyl"}),(0,s.jsx)("p",{children:"An affordable, low-maintenance option available in a wide range of colours and profiles. A popular choice for homeowners looking for lasting curb appeal without ongoing upkeep."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Budget-friendly renovations, new homes & rental properties"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Aluminum"}),(0,s.jsx)("p",{children:"Lightweight, durable, and resistant to rot, insects, and corrosion. An excellent choice for coastal environments where moisture and salt are concerns."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Coastal homes & commercial buildings"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Steel"}),(0,s.jsx)("p",{children:"Our most durable siding option. Built to withstand high winds, hail, and impact while providing exceptional fire resistance and a clean, modern appearance with minimal maintenance."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"}),"Maximum durability & contemporary designs"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Engineered Wood"}),(0,s.jsx)("p",{children:"The natural beauty of real wood with the added durability of modern engineering. Designed to stand up to the Maritime climate while requiring far less maintenance than traditional wood siding."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"})," Premium curb appeal with lower long-term maintenance"]})]})]}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Not sure which? Get a free recommendation"})})]})}),(0,s.jsx)("section",{className:"ms-why",children:(0,s.jsxs)("div",{className:"ms-why-inner",children:[(0,s.jsxs)("div",{className:"ms-why-head",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Why Choose Maritime Stone & Decor?"}),(0,s.jsx)("p",{className:"ms-why-sub",children:"Whether you’re building new, renovating, or replacing existing siding, we’re here to help you make the right choice. We take the time to understand your project, answer your questions, and recommend products that fit your home, style, and budget."})]}),(0,s.jsxs)("ul",{className:"ms-value-list",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(q,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Knowledge You Can Count On"}),(0,s.jsx)("p",{children:"Our team will walk you through the options, explain the differences between products, and help you choose with confidence."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(k,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Quality Products"}),(0,s.jsx)("p",{children:"We carry trusted brands and a wide selection of siding, trim, stone, and exterior building products to suit every style and budget."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Delivery Available"}),(0,s.jsx)("p",{children:"We can coordinate delivery to your home or job site throughout Atlantic Canada. Ask us about delivery options in your area."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(S,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"More Than Just Siding"}),(0,s.jsx)("p",{children:"Complete your project in one place with stone veneer, trim, decking, windows, doors, roofing, and other exterior building products."})]})]})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-pcp",children:(0,s.jsxs)("div",{className:"ms-pcp-inner",children:[(0,s.jsxs)("div",{className:"ms-pcp-photo",children:[(0,s.jsx)("img",{src:c(x,800),srcSet:m(x,[480,800,1e3]),sizes:"(max-width:900px) 92vw, 42vw",alt:"Siding replacement project in Dieppe",loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"Dieppe"})]}),(0,s.jsxs)("div",{className:"ms-pcp-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Need It Installed?"}),(0,s.jsx)("h2",{className:"ms-h2",children:"We’ve got you covered."}),(0,s.jsx)("p",{children:"We work with trusted local contractors and can connect you with an experienced installer for your project. You’ll receive the same quality products and helpful service from Maritime Stone & Decor, with the added convenience of working with a contractor we know and trust."}),(0,s.jsxs)("ul",{className:"ms-pcp-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Trusted local installers"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Quality products"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," One place to get started"]})]}),(0,s.jsx)("a",{className:"ms-btn ms-btn--primary",href:"#quote",children:"Ask about our Preferred Contractor Program"})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-steps",children:(0,s.jsxs)("div",{className:"ms-steps-inner",children:[(0,s.jsxs)("div",{className:"ms-steps-content",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"How It Works"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Getting started is simple."})]}),(0,s.jsxs)("ol",{className:"ms-step-grid",children:[(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"01"}),(0,s.jsx)(A,{}),(0,s.jsx)("h3",{children:"Tell Us About Your Project"}),(0,s.jsx)("p",{children:"Visit our showroom, give us a call, or send us a message. We’ll learn about your project, answer your questions, and help you get started."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"02"}),(0,s.jsx)(B,{}),(0,s.jsx)("h3",{children:"Find the Right Products"}),(0,s.jsx)("p",{children:"Compare styles, colours, and materials with guidance from our team. We’ll help you choose products that fit your home, your style, and your budget."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"03"}),(0,s.jsx)(D,{}),(0,s.jsx)("h3",{children:"Move Forward with Confidence"}),(0,s.jsx)("p",{children:"Once your order is confirmed and ready, you can pick up your materials or have them delivered to your home or job site. If you need installation, we’re happy to connect you with one of our trusted contractor partners."})]})]})]}),(0,s.jsx)("div",{className:"ms-steps-media",children:(0,s.jsx)("img",{src:c(g,760),srcSet:m(g,[480,760,1e3]),sizes:"(max-width:900px) 92vw, 40vw",alt:"Finished home with new siding by Maritime Stone & Decor",loading:"lazy",decoding:"async"})})]})}),(0,s.jsx)("section",{className:"ms-proj",children:(0,s.jsxs)("div",{className:"ms-proj-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,s.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Recent work"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Real siding projects in Moncton, Riverview & Dieppe"})]}),(0,s.jsxs)("div",{className:"ms-proj-grid",children:[(0,s.jsxs)("figure",{className:"ms-proj-item",children:[(0,s.jsx)(y,{after:"https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1781887402/DSC05988_docw8x.jpg",afterAlt:"Home in Riverview after new siding",before:"https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1781889387/DJI_0103-Enhanced-NR_l22uxe.jpg",beforeAlt:"Home in Riverview before new siding",label:"Reveal before and after, Riverview"}),(0,s.jsxs)("figcaption",{className:"ms-proj-cap",children:[(0,s.jsx)("span",{className:"ms-proj-loc",children:"Riverview"}),(0,s.jsx)("span",{className:"ms-proj-scope",children:"Residential re-side, drag to compare"})]})]}),(0,s.jsxs)("figure",{className:"ms-proj-item",children:[(0,s.jsx)(y,{after:"https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1781887078/DJI_0241-Enhanced-NR_id8sq0.jpg",afterAlt:"Home in Dieppe after new siding",before:"https://res.cloudinary.com/dsqbqhqvf/image/upload/f_auto,q_auto/v1781887092/DSC05454_hlh70q.jpg",beforeAlt:"Home in Dieppe before new siding",label:"Reveal before and after, Dieppe"}),(0,s.jsxs)("figcaption",{className:"ms-proj-cap",children:[(0,s.jsx)("span",{className:"ms-proj-loc",children:"Dieppe"}),(0,s.jsx)("span",{className:"ms-proj-scope",children:"Residential re-side, drag to compare"})]})]})]})]})}),(0,s.jsx)("section",{className:"ms-trade",children:(0,s.jsxs)("div",{className:"ms-trade-inner",children:[(0,s.jsxs)("div",{className:"ms-trade-main",children:[(0,s.jsx)("h2",{className:"ms-h2 ms-h2--light",children:"Contractors & Builders"}),(0,s.jsx)("p",{className:"ms-trade-body",children:"We know your reputation depends on getting the job done right. That’s why contractors count on us for reliable products, responsive service, and a team that’s easy to work with."}),(0,s.jsx)("p",{className:"ms-trade-body",children:"Whether you need help selecting products, checking product availability, coordinating delivery, or working with your customer on colours and selections, we’re here to help."}),(0,s.jsxs)("ul",{className:"ms-trade-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Responsive, knowledgeable team"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Quality exterior building products"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Job site delivery available"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Support for you and your customers"]})]}),(0,s.jsx)("p",{className:"ms-trade-body",children:"We’re here to help with your next project."}),(0,s.jsx)("div",{className:"ms-trade-cta",children:(0,s.jsxs)(t.TelLink,{className:"ms-btn ms-btn--ghost-light",children:[(0,s.jsx)(w,{})," Call the counter"]})})]}),(0,s.jsxs)("div",{className:"ms-trade-photo",children:[(0,s.jsx)("img",{src:c(u,900),srcSet:m(u,[520,900,1200]),sizes:"(max-width:900px) 92vw, 46vw",alt:"Siding project in Riverview by Maritime Stone & Decor",loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"Riverview"})]})]})}),(0,s.jsx)("section",{className:"ms-testi",children:(0,s.jsxs)("div",{className:"ms-testi-inner",children:[(0,s.jsx)("div",{className:"ms-section-head",children:(0,s.jsx)("h2",{className:"ms-h2",children:"What customers say"})}),(0,s.jsxs)("div",{className:"ms-testi-grid",children:[(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsxs)("blockquote",{children:["We re-did our whole home envelope, including siding, soffit, fascia, windows and doors. They came out fast, quoted quickly, and made sure our windows qualified for the Canada Greener Homes grant. They supplied the materials ",(0,s.jsx)("em",{children:"and"})," ","connected us with a great install crew, and stayed flexible on pricing when surprises came up. A positive experience all around, we’d 100% recommend them."]}),(0,s.jsx)("figcaption",{children:"Gary Marquis · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Our company buys a lot of our siding and brick at Maritime Stone & Decor. The staff are very knowledgeable and very quick to return quotes. We recommend them!"}),(0,s.jsx)("figcaption",{children:"Pierre LeBlanc · Contractor"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Always a great experience with Dave and Heather. Excellent, knowledgeable service with a smile, and they have everything. Highly recommend!"}),(0,s.jsx)("figcaption",{children:"Holly Jensen · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Top-quality service. The owner and his staff really know the products they sell. I bought a custom fireplace mantle and could not be happier, and I won’t hesitate to recommend them."}),(0,s.jsx)("figcaption",{children:"Pauline Gavin · Homeowner"})]})]})]})}),(0,s.jsx)("section",{className:"ms-faq",children:(0,s.jsxs)("div",{className:"ms-faq-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,s.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Before you ask"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Siding questions, answered"})]}),(0,s.jsx)("div",{className:"ms-faq-list",children:b.map((e,r)=>{let i=p===r;return(0,s.jsxs)("div",{className:"ms-faq-item"+(i?" is-open":""),children:[(0,s.jsxs)("button",{type:"button",className:"ms-faq-q","aria-expanded":i,onClick:()=>j(i?-1:r),children:[(0,s.jsx)("span",{children:e.q}),(0,s.jsx)("span",{className:"ms-faq-icon","aria-hidden":"true",children:i?"–":"+"})]}),(0,s.jsx)("div",{className:"ms-faq-a",children:(0,s.jsx)("p",{children:e.a})})]},e.q)})})]})}),(0,s.jsx)("section",{className:"ms-quote",id:"quote",children:(0,s.jsxs)("div",{className:"ms-quote-inner",children:[(0,s.jsxs)("div",{className:"ms-quote-copy",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Get Your Free Siding Quote"}),(0,s.jsx)("p",{children:"Tell us about your project, and we’ll provide a no-obligation quote along with expert guidance to help you choose the right products."}),(0,s.jsxs)("ul",{className:"ms-quote-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Free, no-obligation quote"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Product and colour recommendations"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(N,{})," Competitive pricing"]})]}),(0,s.jsxs)(t.TelLink,{className:"ms-quote-call",children:[(0,s.jsx)(w,{})," Prefer to talk? ",l]})]}),(0,s.jsx)("div",{className:"ms-quote-form-wrap",children:(0,s.jsx)(n,{})})]})}),(0,s.jsx)("div",{className:"ms-sticky-bar",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-sticky-btn",href:"#quote",children:"Get a free quote"})}),(0,s.jsx)(t.TelLink,{className:"ms-fab","aria-label":"Call Maritime Stone & Decor at (506) 854-2266",children:(0,s.jsx)(w,{})})]})}],94662)}]);