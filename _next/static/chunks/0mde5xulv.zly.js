(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,4624,e=>{"use strict";var s=e.i(43476),r=e.i(71645);e.i(47167);var a=e.i(8037),o=e.i(74997),i=e.i(26616);function t(e,s){if(!s.trim())return`${e} is required`}function n({idPrefix:e=""}){let l=s=>`${e}${s}`,[d,c]=(0,r.useState)(""),[m,p]=(0,r.useState)(""),[h,g]=(0,r.useState)(""),[x,u]=(0,r.useState)(""),[f,b]=(0,r.useState)(!1),[q,y]=(0,r.useState)(!1),[v,j]=(0,r.useState)(""),[w,k]=(0,r.useState)({});function N(e,s,r){k(a=>({...a,[e]:t(s,r)}))}function z(e){w[e]&&k(s=>({...s,[e]:void 0}))}async function S(e){if(e.preventDefault(),f)return;j("");let s={},r=t("Name",d),i=t("Phone",m),n=t("Project details",h);if(r&&(s.name=r),i&&(s.phone=i),n&&(s.project=n),Object.keys(s).length>0){k(s);let e=r?"name":i?"phone":"project";document.getElementById(l(e))?.focus();return}if(b(!0),x){y(!0),b(!1);return}try{if(!(await fetch("https://formspree.io/f/preview-disabled",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:"siding-quote-ads",name:d.trim(),phone:m.trim(),project:h.trim()})})).ok)throw Error("Submission failed");(0,o.trackLeadConversion)(),y(!0)}catch{j(`Something went wrong. Please try again or call us at ${a.siteConfig.phone}.`)}finally{b(!1)}}return q?(0,s.jsxs)("div",{className:"ms-form-success",role:"status",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,s.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,s.jsx)("h3",{children:"Request received"}),(0,s.jsxs)("p",{children:["We’ll be in touch shortly. Or call now at"," ",(0,s.jsx)(i.TelLink,{children:a.siteConfig.phone}),"."]})]}):(0,s.jsxs)("form",{className:"ms-form",onSubmit:S,noValidate:!0,children:[v&&(0,s.jsx)("div",{className:"ms-form-error",role:"alert",children:v}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:l("name"),children:"Name"}),(0,s.jsx)("input",{id:l("name"),autoComplete:"name",value:d,"aria-required":"true","aria-invalid":w.name?"true":void 0,"aria-describedby":w.name?l("name-error"):void 0,onChange:e=>{c(e.target.value),z("name")},onBlur:()=>N("name","Name",d)}),w.name&&(0,s.jsx)("p",{className:"ms-field-error",id:l("name-error"),children:w.name})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:l("phone"),children:"Phone"}),(0,s.jsx)("input",{id:l("phone"),type:"tel",inputMode:"tel",autoComplete:"tel",value:m,"aria-required":"true","aria-invalid":w.phone?"true":void 0,"aria-describedby":w.phone?l("phone-error"):void 0,onChange:e=>{p(e.target.value),z("phone")},onBlur:()=>N("phone","Phone",m)}),w.phone&&(0,s.jsx)("p",{className:"ms-field-error",id:l("phone-error"),children:w.phone})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:l("project"),children:"What’s your project?"}),(0,s.jsx)("input",{id:l("project"),value:h,placeholder:"e.g. Vinyl siding for a two-storey in Riverview","aria-required":"true","aria-invalid":w.project?"true":void 0,"aria-describedby":w.project?l("project-error"):void 0,onChange:e=>{g(e.target.value),z("project")},onBlur:()=>N("project","Project details",h)}),w.project&&(0,s.jsx)("p",{className:"ms-field-error",id:l("project-error"),children:w.project})]}),(0,s.jsx)("input",{className:"ms-honeypot",tabIndex:-1,autoComplete:"off","aria-hidden":"true",name:"_gotcha",value:x,onChange:e=>u(e.target.value)}),(0,s.jsx)("button",{className:"ms-btn ms-btn--primary ms-btn--lg ms-btn--block",type:"submit",disabled:f,children:f?"Sending…":"Get My Free Siding Quote"}),(0,s.jsx)("p",{className:"ms-form-fine",children:"We’ll only use your details to prepare your quote."})]})}var l=e.i(43371);let d="(506) 854-2266",c=`${l.CLOUDINARY_BASE}/v1781887091/DSC05805_rc0vx2.jpg`,m=`${l.CLOUDINARY_BASE}/v1781886808/DSC05988_d0jtfl.jpg`,p=`${l.CLOUDINARY_BASE}/v1781887092/DSCF8191_lpqhaq.jpg`,h=`${l.CLOUDINARY_BASE}/v1781886781/DJI_0241-Enhanced-NR_vf9tte.jpg`,g=[{location:"Riverview",scope:"Residential re-side · drag to compare",after:`${l.CLOUDINARY_BASE}/v1781887402/DSC05988_docw8x.jpg`,afterAlt:"Home in Riverview after new siding",before:`${l.CLOUDINARY_BASE}/v1781889387/DJI_0103-Enhanced-NR_l22uxe.jpg`,beforeAlt:"Home in Riverview before new siding"},{location:"Dieppe",scope:"Residential re-side · drag to compare",after:`${l.CLOUDINARY_BASE}/v1781887078/DJI_0241-Enhanced-NR_id8sq0.jpg`,afterAlt:"Home in Dieppe after new siding",before:`${l.CLOUDINARY_BASE}/v1781887092/DSC05454_hlh70q.jpg`,beforeAlt:"Home in Dieppe before new siding"}],x=[{src:"/msd-fireplaces-preview/images/brands/kaycan.webp",alt:"Kaycan",name:"Kaycan",body:"Canadian-made vinyl and aluminum siding, soffit, fascia and trim. One of the widest colour ranges we stock, and the go-to for most Moncton-area re-sides."},{src:"/msd-fireplaces-preview/images/brands/maibec.webp",alt:"Maibec",name:"Maibec",body:"Prefinished wood and engineered wood siding with factory-applied finishes built for Canadian weather. A premium look with a warranty behind the coating."},{src:"https://res.cloudinary.com/dsqbqhqvf/image/upload/v1782416393/5a6f960fecb30600010ceb90_lp-smartside_gw688a.png",alt:"LP SmartSide",name:"LP SmartSide",body:"Engineered wood lap, panel and trim. The real-wood look with far better impact and moisture performance than traditional wood siding."},{src:"/msd-fireplaces-preview/images/brands/newtechwood.webp",alt:"NewTechWood",name:"NewTechWood",body:"Composite cladding and decking in a capped, colour-stable finish — a modern option for feature walls and full exteriors."},{src:"/msd-fireplaces-preview/images/brands/canyon-stone.png",alt:"Canyon Stone",name:"Canyon Stone",body:"Manufactured stone veneer to pair with your siding — skirting, columns, feature walls and full facades."}],u=[{icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),(0,s.jsx)("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})},{}),title:"Buy direct",body:"Skip the contractor markup and get your siding at supplier pricing, straight from our Moncton counter."},{icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,s.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})},{}),title:"Expert guidance",body:"We walk you through vinyl, steel, aluminum and engineered wood, and what actually holds up in the Maritime climate."},{icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),(0,s.jsx)("circle",{cx:"9",cy:"7",r:"4"}),(0,s.jsx)("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),(0,s.jsx)("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]})},{}),title:"Need it installed?",body:"We connect you with a vetted crew from our Preferred Contractor Program — no chasing quotes on your own."}],f=[{name:"Vinyl",tag:"Most popular",body:"An affordable, low-maintenance option available in a wide range of colours and profiles. A popular choice for lasting curb appeal without ongoing upkeep.",best:"Budget-friendly renovations, new homes & rental properties"},{name:"Aluminum",body:"Lightweight, durable, and resistant to rot, insects, and corrosion. An excellent choice for coastal environments where moisture and salt are concerns.",best:"Coastal homes & commercial buildings"},{name:"Steel",body:"Our most durable siding option. Built to withstand high winds, hail, and impact while providing exceptional fire resistance and a clean, modern look.",best:"Maximum durability & contemporary designs"},{name:"Engineered Wood",body:"The natural beauty of real wood with the added durability of modern engineering. Stands up to the Maritime climate with far less maintenance than traditional wood.",best:"Premium curb appeal with lower long-term maintenance"}],b=[{icon:(0,s.jsx)(function(){return(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",...w,children:(0,s.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})},{}),title:"Knowledge you can count on",body:"Our team walks you through the options, explains the differences between products, and helps you choose with confidence."},{icon:(0,s.jsx)(function(){return(0,s.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",...w,children:(0,s.jsx)("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})},{}),title:"Quality products",body:"Trusted brands and a wide selection of siding, trim, stone, and exterior building products to suit every style and budget."},{icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("line",{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"}),(0,s.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,s.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"})]})},{}),title:"Delivery available",body:"We coordinate delivery to your home or job site throughout Atlantic Canada. Ask us about options in your area."},{icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,s.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]})},{}),title:"More than just siding",body:"Finish the whole exterior in one place — stone veneer, trim, decking, windows, doors, roofing and more."}],q=[{icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,s.jsx)("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})},{}),title:"Tell us about your project",body:"Send the form or give us a call. We'll learn about your project, answer your questions, and get you a price."},{icon:(0,s.jsx)(function(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),(0,s.jsx)("polyline",{points:"2 17 12 22 22 17"}),(0,s.jsx)("polyline",{points:"2 12 12 17 22 12"})]})},{}),title:"Find the right products",body:"Compare styles, colours and materials with guidance from our team — products that fit your home, your style and your budget."},{icon:(0,s.jsx)(S,{}),title:"Pick up, or we deliver",body:"Once your order is ready, pick it up at the counter or have it delivered. Need it installed? We'll connect you with a trusted contractor partner."}],y=[{quote:"We re-did our whole home envelope, including siding, soffit, fascia, windows and doors. They came out fast, quoted quickly, and made sure our windows qualified for the Canada Greener Homes grant. They supplied the materials and connected us with a great install crew, and stayed flexible on pricing when surprises came up. A positive experience all around — we'd 100% recommend them.",who:"Gary Marquis · Homeowner"},{quote:"Our company buys a lot of our siding and brick at Maritime Stone & Decor. The staff are very knowledgeable and very quick to return quotes. We recommend them!",who:"Pierre LeBlanc · Contractor"},{quote:"Always a great experience with Dave and Heather. Excellent, knowledgeable service with a smile, and they have everything. Highly recommend!",who:"Holly Jensen · Homeowner"},{quote:"Top-quality service. The owner and his staff really know the products they sell. I bought a custom fireplace mantle and could not be happier, and I won't hesitate to recommend them.",who:"Pauline Gavin · Homeowner"}],v=[{q:"Do you install siding, or just sell it?",a:"We specialize in supplying quality siding and exterior building products, and we partner with trusted local contractors to provide installation services. If you're looking for an installer, we're happy to connect you with one of our Preferred Contractor partners."},{q:"What siding brands do you carry?",a:"We carry trusted brands including Kaycan, LP SmartSide, Maibec, NewTechWood, and more. Our team will help you compare your options and choose the products that best suit your home, style, and budget."},{q:"Are your prices competitive?",a:"Yes. Because you're buying direct from us rather than through a contractor's markup, you get supplier pricing on quality products and trusted brands. We'd be happy to provide a quote for your project."},{q:"Do you deliver?",a:"Yes. We offer delivery throughout Atlantic Canada, or you can pick up your order at our Moncton showroom. Contact us to discuss delivery options for your project."},{q:"Do you sell to contractors and builders?",a:"Absolutely. We believe strong relationships are built on reliable service, knowledgeable support, and quality products. Whether you're managing one project or many, our team is here to help keep your jobs running smoothly."}];function j({after:e,afterAlt:a,before:o,beforeAlt:i,label:t}){let[n,d]=(0,r.useState)(50),c="(max-width:900px) 92vw, 46vw",m=[400,700,900];return(0,s.jsxs)("div",{className:"msq-ba",children:[(0,s.jsx)("img",{className:"msq-ba-img",src:(0,l.cld)(e,700),srcSet:(0,l.cldSet)(e,m),sizes:c,alt:a,loading:"lazy",decoding:"async"}),(0,s.jsx)("img",{className:"msq-ba-img",src:(0,l.cld)(o,700),srcSet:(0,l.cldSet)(o,m),sizes:c,alt:i,loading:"lazy",decoding:"async",style:{clipPath:`inset(0 ${100-n}% 0 0)`}}),(0,s.jsx)("input",{className:"msq-ba-range",type:"range",min:0,max:100,value:n,onChange:e=>d(Number(e.target.value)),"aria-label":t}),(0,s.jsx)("span",{className:"msq-ba-divider",style:{left:`${n}%`},"aria-hidden":"true"}),(0,s.jsx)("span",{className:"msq-ba-badge msq-ba-badge--before","aria-hidden":"true",children:"Before"}),(0,s.jsx)("span",{className:"msq-ba-badge msq-ba-badge--after","aria-hidden":"true",children:"After"})]})}let w={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},k={...w,strokeWidth:2.5};function N(){return(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...w,children:(0,s.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})})}function z(){return(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...k,children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})})}function S(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("path",{d:"M1 3h15v13H1z"}),(0,s.jsx)("path",{d:"M16 8h4l3 3v5h-7z"}),(0,s.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),(0,s.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]})}function A(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,s.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}function C(){return(0,s.jsxs)("svg",{width:"26",height:"26",viewBox:"0 0 24 24",...w,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("polyline",{points:"12 6 12 12 16 14"})]})}let B="var(--font-plus-jakarta-sans),system-ui,sans-serif",M=`
.msq-root{
  --ink:#1B2730; --ink-soft:#2C3B45; --paper:#F6F4EF; --sand:#E7E0D2;
  --cedar:#C25E36; --cedar-dark:#A84E2B; --harbour:#3E5C6B; --sage:#6F7B5F;
  --line:rgba(27,39,48,.12); --muted:#5C6770;
  font-family:${B}; color:var(--ink); background:var(--paper);
  line-height:1.55; -webkit-font-smoothing:antialiased;
  padding-bottom:calc(74px + env(safe-area-inset-bottom));
  scroll-behavior:smooth;
}
.msq-root *{box-sizing:border-box;}
.msq-root h1,.msq-root h2,.msq-root h3{font-family:${B};line-height:1.12;margin:0;}
.msq-root p{margin:0;}

/* Buttons — shared with the quote form markup (.ms-btn), same as /siding. */
.msq-root .ms-btn{display:inline-flex;align-items:center;gap:10px;justify-content:center;
  font-family:${B};font-weight:700;font-size:.95rem;text-decoration:none;
  padding:13px 20px;border-radius:8px;cursor:pointer;border:2px solid transparent;
  transition:transform .12s ease, background .15s ease, box-shadow .15s ease;}
.msq-root .ms-btn:active{transform:translateY(1px);}
.msq-root .ms-btn--primary{background:var(--cedar);color:#fff;}
.msq-root .ms-btn--primary:hover{background:var(--cedar-dark);box-shadow:0 6px 18px rgba(194,94,54,.28);}
.msq-root .ms-btn--primary:disabled{opacity:.7;cursor:progress;}
.msq-root .ms-btn--dark{background:var(--ink);color:#fff;}
.msq-root .ms-btn--dark:hover{background:var(--ink-soft);}
.msq-root .ms-btn--ghost-light{background:transparent;color:#fff;border-color:rgba(255,255,255,.4);}
.msq-root .ms-btn--ghost-light:hover{border-color:#fff;}
.msq-root .ms-btn--lg{padding:15px 24px;font-size:1rem;}
.msq-root .ms-btn--block{width:100%;}

/* Section scaffolding */
.msq-inner{max-width:1140px;margin:0 auto;width:100%;}
.msq-sec{padding:52px 22px;}
.msq-head{margin-bottom:26px;}
.msq-head--center{text-align:center;}
.msq-head-sub{color:var(--muted);font-size:.98rem;margin-top:12px;max-width:62ch;
  margin-inline:auto;}
.msq-h2{font-size:clamp(1.45rem,3.2vw,2.2rem);font-weight:800;letter-spacing:-.02em;}
.msq-h2--light{color:#fff;}
.msq-eyebrow{text-transform:uppercase;letter-spacing:.14em;font-size:.66rem;font-weight:700;
  color:var(--cedar);margin-bottom:8px;}
.msq-eyebrow--light{color:#F2A878;}
.msq-midcta{text-align:center;margin-top:30px;}
.msq-points{list-style:none;padding:0;margin:0 0 22px;display:flex;flex-direction:column;gap:10px;}
.msq-points li{display:flex;align-items:center;gap:10px;font-weight:600;color:var(--ink-soft);}
.msq-points svg{color:var(--sage);flex:none;}
.msq-photo-tag{position:absolute;left:12px;bottom:12px;font-family:${B};font-size:.62rem;
  font-weight:700;text-transform:uppercase;letter-spacing:.08em;padding:5px 11px;
  border-radius:99px;background:rgba(27,39,48,.82);color:#fff;}

/* Identity strip — no nav links on this page by design. */
.msq-bar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;
  gap:16px;padding:10px 22px;background:var(--ink);}
.msq-bar-logo{height:30px;width:auto;display:block;}
.msq-bar-call{display:none;align-items:center;gap:8px;color:#fff;font-weight:700;
  font-size:.95rem;text-decoration:none;}
.msq-bar-call:hover{color:#F2A878;}

/* HERO — the form has to be reachable without scrolling on a small phone,
   so the copy above it is kept deliberately tight. */
.msq-hero{position:relative;overflow:hidden;background:var(--ink);padding:16px 20px 32px;}
.msq-hero-bg{position:absolute;inset:0;z-index:0;}
.msq-hero-bg img{width:100%;height:100%;object-fit:cover;opacity:.42;}
.msq-hero::after{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:linear-gradient(180deg,rgba(27,39,48,.72) 0%,rgba(27,39,48,.55) 45%,rgba(27,39,48,.8) 100%);}
.msq-hero-inner{position:relative;z-index:1;max-width:1140px;margin:0 auto;width:100%;
  display:grid;gap:14px;grid-template-areas:"copy" "form" "chips";}
.msq-copy{grid-area:copy;}
.msq-form-card{grid-area:form;}
.msq-chips{grid-area:chips;}

.msq-hero .msq-eyebrow{color:#F2A878;margin-bottom:6px;}
.msq-h1{font-size:clamp(1.3rem,5.2vw,3.1rem);font-weight:800;letter-spacing:-.02em;color:#fff;
  line-height:1.14;text-shadow:0 1px 20px rgba(0,0,0,.3);}
.msq-accent{color:#F2A878;}
.msq-lede{color:rgba(255,255,255,.9);font-size:.9rem;line-height:1.45;margin-top:8px;max-width:46ch;}

.msq-chips{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;}
.msq-chips li{display:flex;align-items:center;gap:9px;font-size:.9rem;font-weight:600;color:#fff;}
.msq-chips svg{color:#A7B98C;flex:none;}

.msq-form-card{background:#fff;border-radius:16px;padding:18px;
  box-shadow:0 18px 50px rgba(0,0,0,.28);}
.msq-form-title{font-size:1.16rem;font-weight:800;letter-spacing:-.01em;}
.msq-form-sub{color:var(--muted);font-size:.84rem;margin-top:4px;margin-bottom:12px;}
.msq-form-call{display:none;align-items:center;justify-content:center;gap:8px;margin-top:12px;
  color:var(--ink);font-weight:600;font-size:.9rem;text-decoration:none;}
.msq-form-call:hover{color:var(--cedar);}

/* Quote form — same field styling as the /siding form. */
.msq-root .ms-form{display:flex;flex-direction:column;gap:10px;}
.msq-root .ms-field{display:flex;flex-direction:column;gap:4px;}
.msq-root .ms-field label{font-size:.8rem;font-weight:600;color:var(--ink-soft);}
/* 1rem keeps iOS Safari from zooming the viewport when a field is focused. */
.msq-root .ms-field input{font-family:inherit;font-size:1rem;padding:10px 12px;
  border:1px solid var(--line);border-radius:8px;background:var(--paper);color:var(--ink);}
.msq-root .ms-field input:focus{outline:2px solid var(--cedar);outline-offset:1px;border-color:transparent;}
.msq-root .ms-field-error{font-size:.78rem;color:#B42318;margin:0;}
.msq-root .ms-form-error{background:#FEF3F2;border:1px solid #FDA29B;color:#B42318;
  border-radius:8px;padding:12px 14px;font-size:.9rem;}
.msq-root .ms-honeypot{position:absolute;left:-9999px;width:1px;height:1px;opacity:0;}
.msq-root .ms-form-fine{font-size:.76rem;color:var(--muted);text-align:center;}
.msq-root .ms-form-success{text-align:center;padding:26px 6px;}
.msq-root .ms-form-success svg{color:var(--sage);margin-bottom:12px;}
.msq-root .ms-form-success h3{font-size:1.3rem;margin-bottom:8px;}
.msq-root .ms-form-success p{color:var(--muted);}
.msq-root .ms-form-success a{color:var(--cedar);font-weight:700;text-decoration:none;}
.msq-root .ms-form-success a:hover{text-decoration:underline;}

/* BRAND STRIP */
.msq-brands{background:#fff;border-bottom:1px solid var(--line);padding:26px 22px;text-align:center;}
.msq-brands-label{text-transform:uppercase;letter-spacing:.14em;font-size:.68rem;font-weight:700;
  color:var(--muted);margin-bottom:16px;}
/* The five logo assets have wildly different aspect ratios, so they're capped in
   a grid rather than laid out by height alone. */
.msq-brand-logos{display:grid;grid-template-columns:repeat(3,1fr);gap:20px 14px;
  place-items:center;max-width:900px;margin:0 auto;}
.msq-brand-logos img{max-height:24px;max-width:100%;width:auto;height:auto;
  object-fit:contain;opacity:.82;filter:grayscale(.2);}

/* WHY BUY FROM US */
.msq-why{background:var(--paper);}
.msq-why-grid{display:grid;grid-template-columns:1fr;gap:14px;}
.msq-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px;}
.msq-card-icon{display:block;color:var(--cedar);margin-bottom:10px;}
.msq-card h3{font-size:1.08rem;margin-bottom:6px;}
.msq-card p{color:var(--muted);font-size:.93rem;}

/* PROJECTS — before/after */
.msq-proj{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
.msq-proj-grid{display:grid;grid-template-columns:1fr;gap:22px;max-width:900px;margin:0 auto;}
.msq-proj-item{margin:0;}
.msq-ba{position:relative;aspect-ratio:4/3;border-radius:14px;overflow:hidden;
  border:1px solid var(--line);background:var(--sand);}
.msq-ba-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;}
.msq-ba-range{position:absolute;inset:0;width:100%;height:100%;margin:0;
  -webkit-appearance:none;appearance:none;background:transparent;cursor:ew-resize;}
.msq-ba-range:focus-visible{outline:2px solid var(--cedar);outline-offset:2px;}
.msq-ba-range::-webkit-slider-thumb{-webkit-appearance:none;width:42px;height:260px;
  background:transparent;cursor:ew-resize;}
.msq-ba-range::-moz-range-thumb{width:42px;height:260px;border:0;background:transparent;cursor:ew-resize;}
.msq-ba-divider{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:#fff;
  box-shadow:0 0 6px rgba(0,0,0,.45);pointer-events:none;}
.msq-ba-divider::after{content:"";position:absolute;top:50%;left:50%;width:34px;height:34px;
  border-radius:50%;background:#fff;transform:translate(-50%,-50%);box-shadow:0 2px 10px rgba(0,0,0,.35);}
.msq-ba-badge{position:absolute;bottom:10px;font-family:${B};font-size:.6rem;font-weight:700;
  text-transform:uppercase;letter-spacing:.08em;padding:4px 9px;border-radius:99px;
  background:rgba(27,39,48,.82);color:#fff;pointer-events:none;}
.msq-ba-badge--before{left:10px;}
.msq-ba-badge--after{right:10px;}
.msq-proj-cap{margin-top:12px;}
.msq-proj-loc{display:block;font-weight:700;font-size:1.02rem;color:var(--ink);}
.msq-proj-scope{display:block;font-size:.86rem;color:var(--muted);margin-top:3px;}

/* MATERIALS — dark photo band */
.msq-types{padding:52px 22px;
  background-image:linear-gradient(rgba(20,29,36,.84),rgba(20,29,36,.92)),url('${(0,l.cld)(p,1600)}');
  background-size:cover;background-position:center;}
.msq-type-grid{display:grid;grid-template-columns:1fr;gap:14px;}
.msq-type-card{position:relative;background:rgba(20,29,36,.55);backdrop-filter:blur(8px);
  -webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.14);color:#fff;
  border-radius:16px;padding:26px 22px;overflow:hidden;}
.msq-type-card h3{font-size:1.3rem;margin-bottom:10px;}
.msq-type-card p{color:rgba(255,255,255,.74);font-size:.94rem;margin-bottom:12px;}
.msq-type-best{font-size:.85rem;color:rgba(255,255,255,.92)!important;
  border-top:1px solid rgba(255,255,255,.16);padding-top:12px;margin-bottom:0!important;}
.msq-type-best strong{color:#fff;}
.msq-type-tag{position:absolute;top:16px;right:16px;background:var(--cedar);color:#fff;
  font-family:${B};font-size:.62rem;font-weight:700;text-transform:uppercase;
  letter-spacing:.08em;padding:5px 10px;border-radius:99px;}

/* WHY CHOOSE US — dark photo band */
.msq-values{padding:52px 22px;color:#fff;
  background-image:linear-gradient(rgba(20,29,36,.9),rgba(20,29,36,.94)),url('${(0,l.cld)(h,1600)}');
  background-size:cover;background-position:center;}
.msq-values-inner{display:grid;grid-template-columns:1fr;gap:30px;align-items:start;}
.msq-values-sub{color:rgba(255,255,255,.74);font-size:1rem;margin-top:14px;}
.msq-values-call{margin-top:20px;}
.msq-value-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:20px;}
.msq-value-list li{display:flex;gap:14px;align-items:flex-start;}
.msq-value-list svg{color:var(--cedar);flex:none;margin-top:3px;}
.msq-value-list h3{font-size:1.08rem;margin-bottom:5px;}
.msq-value-list p{color:rgba(255,255,255,.7);font-size:.93rem;}

/* PREFERRED CONTRACTOR PROGRAM */
.msq-pcp{background:var(--paper);}
.msq-pcp-inner{background:var(--sand);border:1px solid var(--line);border-radius:20px;
  padding:26px;display:grid;grid-template-columns:1fr;gap:26px;align-items:center;}
.msq-pcp-photo{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:16/10;
  background:#fff;box-shadow:0 14px 40px rgba(27,39,48,.12);}
.msq-pcp-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.msq-pcp-copy .msq-h2{margin-bottom:14px;}
.msq-pcp-copy>p{color:var(--ink-soft);font-size:1rem;margin-bottom:20px;}

/* HOW IT WORKS */
.msq-steps{background:#fff;border-top:1px solid var(--line);}
.msq-steps-inner{display:grid;grid-template-columns:1fr;gap:28px;align-items:start;}
.msq-steps-media{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:16/11;
  box-shadow:0 18px 50px rgba(27,39,48,.14);}
.msq-steps-media img{width:100%;height:100%;object-fit:cover;display:block;}
.msq-step-grid{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px;}
.msq-step{position:relative;background:var(--paper);border:1px solid var(--line);
  border-radius:16px;padding:24px 22px;overflow:hidden;}
.msq-step-icon{display:block;color:var(--cedar);margin-bottom:12px;}
.msq-step-num{position:absolute;top:14px;right:18px;font-family:${B};font-weight:800;
  font-size:2.4rem;color:var(--sand);line-height:1;}
.msq-step h3{font-size:1.12rem;margin-bottom:8px;}
.msq-step p{color:var(--muted);font-size:.93rem;}

/* BRANDS WE STOCK — named in text for the Brand Dealer ad group */
.msq-branddetail{background:#fff;border-top:1px solid var(--line);}
.msq-branddetail-grid{display:grid;grid-template-columns:1fr;gap:14px;}
.msq-brandcard{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:22px;}
.msq-brandcard img{max-height:30px;max-width:150px;width:auto;height:auto;
  object-fit:contain;display:block;margin-bottom:14px;}
.msq-brandcard h3{font-size:1.05rem;margin-bottom:6px;}
.msq-brandcard p{color:var(--muted);font-size:.92rem;}

/* WHERE TO BUY — store, hours, pickup vs delivery */
.msq-store{background:var(--sand);}
.msq-store-grid{display:grid;grid-template-columns:1fr;gap:14px;}
.msq-store-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px;}
.msq-store-card h3{font-size:1.06rem;margin-bottom:8px;}
.msq-store-card p,.msq-store-card address{color:var(--muted);font-size:.95rem;
  font-style:normal;margin:0;}
.msq-store-link{display:inline-block;margin-top:12px;color:var(--cedar);font-weight:700;
  font-size:.93rem;text-decoration:none;}
.msq-store-link:hover{text-decoration:underline;}

/* TESTIMONIALS */
.msq-testi{background:var(--paper);}
.msq-testi-grid{display:grid;grid-template-columns:1fr;gap:16px;}
.msq-testi-card{position:relative;background:#fff;border:1px solid var(--line);
  border-radius:14px;padding:24px;margin:0;overflow:hidden;}
.msq-testi-card::before{content:"\\201C";position:absolute;top:-14px;right:16px;
  font-family:${B};font-size:5.5rem;line-height:1;color:var(--sand);pointer-events:none;}
.msq-stars{color:var(--cedar);letter-spacing:2px;margin-bottom:12px;}
.msq-testi-card blockquote{margin:0 0 14px;font-size:.96rem;color:var(--ink-soft);}
.msq-testi-card figcaption{font-weight:600;font-size:.88rem;color:var(--muted);}

/* FAQ */
.msq-faq{background:var(--sand);}
.msq-faq-list{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:10px;}
.msq-faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.msq-faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background:none;border:none;cursor:pointer;text-align:left;padding:18px 20px;
  font-family:${B};font-weight:600;font-size:1rem;color:var(--ink);}
.msq-faq-icon{font-size:1.5rem;color:var(--cedar);line-height:1;flex:none;}
.msq-faq-a{padding:0 20px 20px;color:var(--muted);font-size:.95rem;}
.msq-faq-item:not(.is-open) .msq-faq-a{display:none;}

/* FINAL CTA + SECOND FORM */
.msq-quote{background:var(--ink);color:#fff;padding:52px 22px;scroll-margin-top:12px;}
.msq-quote-inner{display:grid;grid-template-columns:1fr;gap:28px;align-items:center;}
.msq-quote-copy .msq-h2{color:#fff;margin-bottom:12px;}
.msq-quote-copy>p{color:rgba(255,255,255,.78);font-size:1rem;margin-bottom:20px;}
.msq-quote-copy .msq-points li{color:#fff;}
.msq-quote-copy .msq-points svg{color:#A7B98C;}
.msq-quote-call{display:inline-flex;align-items:center;gap:9px;color:#fff;font-weight:700;
  text-decoration:none;}
.msq-quote-call:hover{color:#F2A878;}
.msq-quote-form-wrap{background:#fff;border-radius:18px;padding:22px;color:var(--ink);
  box-shadow:0 18px 50px rgba(0,0,0,.28);}

/* FOOTER — identity only, no outbound links. */
.msq-foot{background:var(--ink-soft);color:rgba(255,255,255,.72);text-align:center;
  padding:24px 22px;font-size:.84rem;border-top:1px solid rgba(255,255,255,.1);}
.msq-foot a{color:#fff;font-weight:700;text-decoration:none;}
.msq-foot a:hover{color:#F2A878;}
.msq-foot-fine{margin-top:6px!important;font-size:.78rem;color:rgba(255,255,255,.5);}

/* STICKY ACTION BAR */
/* Kept compact on purpose: the hero form's submit button has to clear it on a
   375x667 phone without scrolling. */
.msq-sticky{position:fixed;bottom:0;left:0;right:0;z-index:40;display:flex;gap:9px;
  padding:8px 12px;padding-bottom:calc(8px + env(safe-area-inset-bottom));
  background:rgba(246,244,239,.96);backdrop-filter:blur(8px);border-top:1px solid var(--line);}
.msq-root .msq-sticky-btn{flex:1;font-size:.92rem;padding:12px 12px;}

/* FLOATING CLICK-TO-CALL — same treatment as /siding.
   Hidden below 900px on purpose: unlike /siding (whose form sits at the bottom
   of the page) this form is in the hero, so on a phone a bottom-right FAB lands
   on top of the submit button — and the sticky bar already carries a larger,
   labelled "Call now" doing the same job. Set display:flex here to show it. */
.msq-fab{display:none;position:fixed;right:20px;
  bottom:calc(72px + env(safe-area-inset-bottom));
  z-index:50;width:60px;height:60px;border-radius:50%;align-items:center;
  justify-content:center;background:var(--cedar);color:#fff;text-decoration:none;
  box-shadow:0 8px 24px rgba(194,94,54,.45);
  transition:transform .15s ease, background .15s ease;}
.msq-fab:hover{background:var(--cedar-dark);transform:translateY(-2px);}
.msq-fab:active{transform:translateY(0);}
.msq-fab svg{width:26px;height:26px;}
.msq-fab::after{content:"";position:absolute;inset:0;border-radius:50%;
  border:2px solid var(--cedar);animation:msq-fab-pulse 2.4s ease-out infinite;}
@keyframes msq-fab-pulse{0%{transform:scale(1);opacity:.55}100%{transform:scale(1.7);opacity:0}}

@media (min-width:760px){
  .msq-why-grid{grid-template-columns:repeat(3,1fr);gap:18px;}
  .msq-proj-grid{grid-template-columns:repeat(2,1fr);}
  .msq-type-grid{grid-template-columns:repeat(2,1fr);gap:18px;}
  .msq-testi-grid{grid-template-columns:repeat(2,1fr);gap:20px;}
  .msq-brand-logos{grid-template-columns:repeat(5,1fr);gap:28px;}
  .msq-branddetail-grid{grid-template-columns:repeat(2,1fr);gap:18px;}
  .msq-store-grid{grid-template-columns:repeat(3,1fr);gap:18px;}
}
@media (min-width:900px){
  .msq-root{padding-bottom:0;}
  .msq-bar{padding:14px 32px;}
  .msq-bar-logo{height:40px;}
  .msq-bar-call{display:inline-flex;}
  .msq-hero{padding:52px 32px 60px;}
  .msq-hero-inner{grid-template-columns:1.02fr .98fr;gap:28px 52px;align-items:start;
    grid-template-areas:"copy form" "chips form";}
  .msq-lede{font-size:1.1rem;margin-top:18px;}
  .msq-chips li{font-size:.98rem;}
  .msq-form-card{padding:28px;align-self:start;}
  .msq-form-title{font-size:1.5rem;}
  .msq-form-sub{font-size:.92rem;}
  .msq-form-call{display:inline-flex;}
  .msq-root .ms-form{gap:14px;}
  .msq-brands{padding:30px 32px;}
  .msq-brand-logos img{max-height:32px;}
  .msq-sec,.msq-types,.msq-values,.msq-quote{padding:76px 32px;}
  .msq-head{margin-bottom:36px;}
  .msq-card{padding:28px;}
  .msq-type-grid{grid-template-columns:repeat(4,1fr);}
  .msq-type-card{padding:28px 24px;}
  .msq-branddetail-grid{grid-template-columns:repeat(5,1fr);gap:16px;}
  .msq-brandcard{padding:24px 20px;}
  .msq-values-inner{grid-template-columns:.95fr 1.05fr;gap:54px;}
  .msq-pcp-inner{grid-template-columns:1fr 1.15fr;gap:44px;padding:44px;}
  .msq-pcp-photo{aspect-ratio:4/5;}
  .msq-steps-inner{grid-template-columns:1.15fr .85fr;gap:48px;}
  .msq-steps-media{aspect-ratio:3/4;position:sticky;top:24px;}
  .msq-quote-inner{grid-template-columns:1fr 1fr;gap:52px;}
  .msq-quote-form-wrap{padding:30px;}
  /* No sticky bar on desktop, so the FAB drops back to the corner and becomes
     the only persistent call affordance once the top bar scrolls away. */
  .msq-sticky{display:none;}
  .msq-fab{display:flex;bottom:28px;right:28px;}
}
@media (prefers-reduced-motion:reduce){
  .msq-root{scroll-behavior:auto;}
  .msq-root *{transition:none!important;animation:none!important;}
}
`;e.s(["SidingQuoteLandingPage",0,function(){let[e,a]=(0,r.useState)(0);return(0,s.jsxs)("div",{className:"msq-root",children:[(0,s.jsx)("style",{children:M}),(0,s.jsxs)("div",{className:"msq-bar",children:[(0,s.jsx)("img",{className:"msq-bar-logo",src:"/msd-fireplaces-preview/images/logo.png",alt:"Maritime Stone & Decor",width:2758,height:1592}),(0,s.jsxs)(i.TelLink,{className:"msq-bar-call",children:[(0,s.jsx)(N,{})," ",d]})]}),(0,s.jsxs)("section",{className:"msq-hero",children:[(0,s.jsx)("div",{className:"msq-hero-bg","aria-hidden":"true",children:(0,s.jsx)("img",{src:(0,l.cld)(l.SIDING_QUOTE_HERO,1600),srcSet:(0,l.cldSet)(l.SIDING_QUOTE_HERO,l.SIDING_QUOTE_HERO_WIDTHS),sizes:"100vw",alt:"",fetchPriority:"high",decoding:"async"})}),(0,s.jsxs)("div",{className:"msq-hero-inner",children:[(0,s.jsxs)("div",{className:"msq-copy",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"Siding · Moncton, Riverview & Dieppe"}),(0,s.jsxs)("h1",{className:"msq-h1",children:["Siding in Moncton, Riverview & Dieppe —"," ",(0,s.jsx)("span",{className:"msq-accent",children:"Buy Direct, Skip the Contractor Markup"})]}),(0,s.jsx)("p",{className:"msq-lede",children:"Brand-name siding at direct pricing. We help you choose the right material, then connect you with a vetted install crew."})]}),(0,s.jsxs)("div",{className:"msq-form-card",children:[(0,s.jsx)("h2",{className:"msq-form-title",children:"Get your free siding quote"}),(0,s.jsx)("p",{className:"msq-form-sub",children:"Takes 30 seconds. No obligation."}),(0,s.jsx)(n,{}),(0,s.jsxs)(i.TelLink,{className:"msq-form-call",children:[(0,s.jsx)(N,{})," Prefer to talk? Call ",d]})]}),(0,s.jsxs)("ul",{className:"msq-chips",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{}),"Vinyl, steel, aluminum & engineered wood"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," Delivery across Atlantic Canada"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," Free, no-obligation quote"]})]})]})]}),(0,s.jsxs)("section",{className:"msq-brands","aria-label":"Brand-name siding we carry",children:[(0,s.jsx)("p",{className:"msq-brands-label",children:"Brand-Name Siding We Carry"}),(0,s.jsx)("div",{className:"msq-brand-logos",children:x.map(e=>(0,s.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"},e.alt))})]}),(0,s.jsx)("section",{className:"msq-sec msq-why",children:(0,s.jsxs)("div",{className:"msq-inner",children:[(0,s.jsxs)("div",{className:"msq-head",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"Why buy direct"}),(0,s.jsx)("h2",{className:"msq-h2",children:"Why buy from Maritime Stone & Decor"})]}),(0,s.jsx)("div",{className:"msq-why-grid",children:u.map(e=>(0,s.jsxs)("div",{className:"msq-card",children:[(0,s.jsx)("span",{className:"msq-card-icon",children:e.icon}),(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{children:e.body})]},e.title))})]})}),(0,s.jsx)("section",{className:"msq-sec msq-proj",children:(0,s.jsxs)("div",{className:"msq-inner",children:[(0,s.jsxs)("div",{className:"msq-head msq-head--center",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"Recent work"}),(0,s.jsx)("h2",{className:"msq-h2",children:"Real siding projects in Moncton, Riverview & Dieppe"})]}),(0,s.jsx)("div",{className:"msq-proj-grid",children:g.map(e=>(0,s.jsxs)("figure",{className:"msq-proj-item",children:[(0,s.jsx)(j,{after:e.after,afterAlt:e.afterAlt,before:e.before,beforeAlt:e.beforeAlt,label:`Reveal before and after, ${e.location}`}),(0,s.jsxs)("figcaption",{className:"msq-proj-cap",children:[(0,s.jsx)("span",{className:"msq-proj-loc",children:e.location}),(0,s.jsx)("span",{className:"msq-proj-scope",children:e.scope})]})]},e.location))}),(0,s.jsx)("div",{className:"msq-midcta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Get my free siding quote"})})]})}),(0,s.jsx)("section",{className:"msq-types",children:(0,s.jsxs)("div",{className:"msq-inner",children:[(0,s.jsxs)("div",{className:"msq-head",children:[(0,s.jsx)("p",{className:"msq-eyebrow msq-eyebrow--light",children:"Choose your material"}),(0,s.jsx)("h2",{className:"msq-h2 msq-h2--light",children:"Four ways to side your home"})]}),(0,s.jsx)("div",{className:"msq-type-grid",children:f.map(e=>(0,s.jsxs)("article",{className:"msq-type-card",children:[e.tag&&(0,s.jsx)("span",{className:"msq-type-tag",children:e.tag}),(0,s.jsx)("h3",{children:e.name}),(0,s.jsx)("p",{children:e.body}),(0,s.jsxs)("p",{className:"msq-type-best",children:[(0,s.jsx)("strong",{children:"Best for:"})," ",e.best]})]},e.name))}),(0,s.jsx)("div",{className:"msq-midcta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Not sure which? Get a free recommendation"})})]})}),(0,s.jsx)("section",{className:"msq-sec msq-branddetail",children:(0,s.jsxs)("div",{className:"msq-inner",children:[(0,s.jsxs)("div",{className:"msq-head msq-head--center",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"Authorized dealer"}),(0,s.jsx)("h2",{className:"msq-h2",children:"The siding brands we stock"}),(0,s.jsx)("p",{className:"msq-head-sub",children:"We’re a dealer for the brands below, and we sell them direct at supplier pricing. Ask us to price any product from any of these lines."})]}),(0,s.jsx)("div",{className:"msq-branddetail-grid",children:x.map(e=>(0,s.jsxs)("div",{className:"msq-brandcard",children:[(0,s.jsx)("img",{src:e.src,alt:`${e.name} siding`,loading:"lazy",decoding:"async"}),(0,s.jsx)("h3",{children:e.name}),(0,s.jsx)("p",{children:e.body})]},e.name))}),(0,s.jsx)("div",{className:"msq-midcta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Price my siding"})})]})}),(0,s.jsx)("section",{className:"msq-values",children:(0,s.jsxs)("div",{className:"msq-inner msq-values-inner",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"msq-h2 msq-h2--light",children:"Why customers choose us"}),(0,s.jsx)("p",{className:"msq-values-sub",children:"Building new, renovating, or replacing existing siding — we take the time to understand your project, answer your questions, and recommend products that fit your home, style and budget."}),(0,s.jsxs)(i.TelLink,{className:"ms-btn ms-btn--ghost-light msq-values-call",children:[(0,s.jsx)(N,{})," Call the counter: ",d]})]}),(0,s.jsx)("ul",{className:"msq-value-list",children:b.map(e=>(0,s.jsxs)("li",{children:[e.icon,(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{children:e.body})]})]},e.title))})]})}),(0,s.jsx)("section",{className:"msq-sec msq-pcp",children:(0,s.jsxs)("div",{className:"msq-inner msq-pcp-inner",children:[(0,s.jsxs)("div",{className:"msq-pcp-photo",children:[(0,s.jsx)("img",{src:(0,l.cld)(c,800),srcSet:(0,l.cldSet)(c,[480,800,1e3]),sizes:"(max-width:900px) 92vw, 42vw",alt:"Siding replacement project in Dieppe",loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"msq-photo-tag",children:"Dieppe"})]}),(0,s.jsxs)("div",{className:"msq-pcp-copy",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"Need it installed?"}),(0,s.jsx)("h2",{className:"msq-h2",children:"We’ve got you covered."}),(0,s.jsx)("p",{children:"We work with trusted local contractors and can connect you with an experienced installer for your project. Same quality products, same helpful service, with the added convenience of a contractor we know and trust."}),(0,s.jsxs)("ul",{className:"msq-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," Trusted local installers"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," Quality products at direct pricing"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," One place to get started"]})]}),(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Ask about the Preferred Contractor Program"})]})]})}),(0,s.jsx)("section",{className:"msq-sec msq-steps",children:(0,s.jsxs)("div",{className:"msq-inner msq-steps-inner",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"msq-head",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"How it works"}),(0,s.jsx)("h2",{className:"msq-h2",children:"Getting started is simple."})]}),(0,s.jsx)("ol",{className:"msq-step-grid",children:q.map((e,r)=>(0,s.jsxs)("li",{className:"msq-step",children:[(0,s.jsx)("span",{className:"msq-step-num",children:`0${r+1}`}),(0,s.jsx)("span",{className:"msq-step-icon",children:e.icon}),(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{children:e.body})]},e.title))})]}),(0,s.jsx)("div",{className:"msq-steps-media",children:(0,s.jsx)("img",{src:(0,l.cld)(m,760),srcSet:(0,l.cldSet)(m,[480,760,1e3]),sizes:"(max-width:900px) 92vw, 40vw",alt:"Finished home with new siding by Maritime Stone & Decor",loading:"lazy",decoding:"async"})})]})}),(0,s.jsx)("section",{className:"msq-sec msq-store",children:(0,s.jsxs)("div",{className:"msq-inner",children:[(0,s.jsxs)("div",{className:"msq-head msq-head--center",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"Where to buy"}),(0,s.jsx)("h2",{className:"msq-h2",children:"Buy siding at our Moncton counter"}),(0,s.jsx)("p",{className:"msq-head-sub",children:"We’re a building supply counter, not a call centre. Come see the product in person, or order it and we’ll get it to you."})]}),(0,s.jsxs)("div",{className:"msq-store-grid",children:[(0,s.jsxs)("div",{className:"msq-store-card",children:[(0,s.jsx)("span",{className:"msq-card-icon",children:(0,s.jsx)(A,{})}),(0,s.jsx)("h3",{children:"Our showroom & counter"}),(0,s.jsxs)("address",{children:["535 Edinburgh Drive",(0,s.jsx)("br",{}),"Moncton, NB E1E 4E3"]}),(0,s.jsx)("a",{className:"msq-store-link",href:"https://maps.google.com/?q=535+Edinburgh+Drive,+Moncton,+NB+E1E+4E3",target:"_blank",rel:"noopener noreferrer",children:"Get directions"})]}),(0,s.jsxs)("div",{className:"msq-store-card",children:[(0,s.jsx)("span",{className:"msq-card-icon",children:(0,s.jsx)(C,{})}),(0,s.jsx)("h3",{children:"Hours"}),(0,s.jsxs)("p",{children:["Monday – Friday",(0,s.jsx)("br",{}),"8:00 AM – 5:00 PM"]}),(0,s.jsxs)(i.TelLink,{className:"msq-store-link",children:["Call ",d]})]}),(0,s.jsxs)("div",{className:"msq-store-card",children:[(0,s.jsx)("span",{className:"msq-card-icon",children:(0,s.jsx)(S,{})}),(0,s.jsx)("h3",{children:"Pick up or delivery"}),(0,s.jsx)("p",{children:"Pick your order up at the counter, or we’ll deliver to your home or job site — Moncton, Riverview, Dieppe and throughout Atlantic Canada."})]})]})]})}),(0,s.jsx)("section",{className:"msq-sec msq-testi",children:(0,s.jsxs)("div",{className:"msq-inner",children:[(0,s.jsxs)("div",{className:"msq-head msq-head--center",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"5.0 on Google"}),(0,s.jsx)("h2",{className:"msq-h2",children:"What customers say"})]}),(0,s.jsx)("div",{className:"msq-testi-grid",children:y.map(e=>(0,s.jsxs)("figure",{className:"msq-testi-card",children:[(0,s.jsx)("div",{className:"msq-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:e.quote}),(0,s.jsx)("figcaption",{children:e.who})]},e.who))})]})}),(0,s.jsx)("section",{className:"msq-sec msq-faq",children:(0,s.jsxs)("div",{className:"msq-inner",children:[(0,s.jsxs)("div",{className:"msq-head msq-head--center",children:[(0,s.jsx)("p",{className:"msq-eyebrow",children:"Before you ask"}),(0,s.jsx)("h2",{className:"msq-h2",children:"Siding questions, answered"})]}),(0,s.jsx)("div",{className:"msq-faq-list",children:v.map((r,o)=>{let i=e===o;return(0,s.jsxs)("div",{className:"msq-faq-item"+(i?" is-open":""),children:[(0,s.jsxs)("button",{type:"button",className:"msq-faq-q","aria-expanded":i,onClick:()=>a(i?-1:o),children:[(0,s.jsx)("span",{children:r.q}),(0,s.jsx)("span",{className:"msq-faq-icon","aria-hidden":"true",children:i?"–":"+"})]}),(0,s.jsx)("div",{className:"msq-faq-a",children:(0,s.jsx)("p",{children:r.a})})]},r.q)})})]})}),(0,s.jsx)("section",{className:"msq-quote",id:"quote",children:(0,s.jsxs)("div",{className:"msq-inner msq-quote-inner",children:[(0,s.jsxs)("div",{className:"msq-quote-copy",children:[(0,s.jsx)("h2",{className:"msq-h2",children:"Get your free siding quote"}),(0,s.jsx)("p",{children:"Tell us about your project and we’ll come back with a no-obligation price, plus guidance on the right product for your home."}),(0,s.jsxs)("ul",{className:"msq-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," Free, no-obligation quote"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," Product and colour recommendations"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(z,{})," Direct pricing, no contractor markup"]})]}),(0,s.jsxs)(i.TelLink,{className:"msq-quote-call",children:[(0,s.jsx)(N,{})," Prefer to talk? ",d]})]}),(0,s.jsx)("div",{className:"msq-quote-form-wrap",children:(0,s.jsx)(n,{idPrefix:"q-"})})]})}),(0,s.jsxs)("footer",{className:"msq-foot",children:[(0,s.jsxs)("p",{children:["Maritime Stone & Decor · 535 Edinburgh Drive, Moncton, NB E1E 4E3 ·"," ",(0,s.jsx)(i.TelLink,{children:d})]}),(0,s.jsxs)("p",{className:"msq-foot-fine",children:["Mon–Fri 8:00 AM – 5:00 PM ·"," ",(0,s.jsx)("a",{href:"/privacy",target:"_blank",rel:"noopener noreferrer",children:"Privacy Policy"})]})]}),(0,s.jsxs)("div",{className:"msq-sticky",children:[(0,s.jsxs)(i.TelLink,{className:"ms-btn ms-btn--primary msq-sticky-btn",children:[(0,s.jsx)(N,{})," Call now"]}),(0,s.jsx)("a",{className:"ms-btn ms-btn--dark msq-sticky-btn",href:"#quote",children:"Free quote"})]}),(0,s.jsx)(i.TelLink,{className:"msq-fab","aria-label":"Call Maritime Stone & Decor at (506) 854-2266",children:(0,s.jsx)(N,{})})]})}],4624)}]);