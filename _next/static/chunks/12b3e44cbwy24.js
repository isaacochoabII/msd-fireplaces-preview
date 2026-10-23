(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,59881,e=>{"use strict";var i=e.i(43476),a=e.i(71645);e.i(47167);var s=e.i(8037),t=e.i(74997),o=e.i(26616);function r(e,i){return i.trim()?"Email"!==e||/\S+@\S+\.\S+/.test(i)?void 0:"Please enter a valid email address":`${e} is required`}function n(){let[e,n]=(0,a.useState)("Fireplace"),[l,c]=(0,a.useState)(""),[d,m]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),[f,u]=(0,a.useState)(""),[x,g]=(0,a.useState)(""),[b,y]=(0,a.useState)(""),[v,w]=(0,a.useState)(!1),[j,k]=(0,a.useState)(!1),[N,q]=(0,a.useState)(""),[z,S]=(0,a.useState)({});function C(e,i){let a=r(e.charAt(0).toUpperCase()+e.slice(1),i);S(i=>({...i,[e]:a}))}function F(e){z[e]&&S(i=>({...i,[e]:void 0}))}async function B(i){if(i.preventDefault(),v)return;q("");let a={},o=r("Name",d),n=r("Phone",p),c=r("Email",f);if(o&&(a.name=o),n&&(a.phone=n),c&&(a.email=c),Object.keys(a).length>0){S(a);let e=o?"name":n?"phone":"email";document.getElementById(e)?.focus();return}if(w(!0),b){k(!0),w(!1);return}try{if(!(await fetch("https://formspree.io/f/preview-disabled",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:"fireplaces-landing",interest:e,fireplaceType:l||"Not specified",name:d.trim(),phone:p.trim(),email:f.trim(),details:x.trim()})})).ok)throw Error("Submission failed");(0,t.trackLeadConversion)(),k(!0)}catch{q(`Something went wrong. Please try again or call us at ${s.siteConfig.phone}.`)}finally{w(!1)}}return j?(0,i.jsxs)("div",{className:"ms-form-success",role:"status",children:[(0,i.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,i.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,i.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,i.jsx)("h3",{children:"Request received"}),(0,i.jsxs)("p",{children:["Thanks — we’ll be in touch shortly about your project. Or call us now at"," ",(0,i.jsx)(o.TelLink,{children:s.siteConfig.phone}),"."]})]}):(0,i.jsxs)("form",{className:"ms-form",onSubmit:B,noValidate:!0,children:[N&&(0,i.jsx)("div",{className:"ms-form-error",role:"alert",children:N}),(0,i.jsxs)("div",{className:"ms-field",children:[(0,i.jsx)("label",{htmlFor:"name",children:"Name"}),(0,i.jsx)("input",{id:"name",value:d,"aria-required":"true","aria-invalid":z.name?"true":void 0,onChange:e=>{m(e.target.value),F("name")},onBlur:()=>C("name",d)}),z.name&&(0,i.jsx)("p",{className:"ms-field-error",children:z.name})]}),(0,i.jsxs)("div",{className:"ms-field-row",children:[(0,i.jsxs)("div",{className:"ms-field",children:[(0,i.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,i.jsx)("input",{id:"phone",type:"tel",value:p,"aria-required":"true","aria-invalid":z.phone?"true":void 0,onChange:e=>{h(e.target.value),F("phone")},onBlur:()=>C("phone",p)}),z.phone&&(0,i.jsx)("p",{className:"ms-field-error",children:z.phone})]}),(0,i.jsxs)("div",{className:"ms-field",children:[(0,i.jsx)("label",{htmlFor:"email",children:"Email"}),(0,i.jsx)("input",{id:"email",type:"email",value:f,"aria-required":"true","aria-invalid":z.email?"true":void 0,onChange:e=>{u(e.target.value),F("email")},onBlur:()=>C("email",f)}),z.email&&(0,i.jsx)("p",{className:"ms-field-error",children:z.email})]})]}),(0,i.jsxs)("div",{className:"ms-field",children:[(0,i.jsx)("label",{htmlFor:"interest",children:"Interested in"}),(0,i.jsxs)("select",{id:"interest",value:e,onChange:e=>n(e.target.value),children:[(0,i.jsx)("option",{children:"Fireplace"}),(0,i.jsx)("option",{children:"Stone"}),(0,i.jsx)("option",{children:"Both"}),(0,i.jsx)("option",{children:"Exploring Options"})]})]}),(0,i.jsxs)("div",{className:"ms-field",children:[(0,i.jsxs)("label",{htmlFor:"fireplaceType",children:["Fireplace type ",(0,i.jsx)("span",{className:"ms-opt",children:"(optional)"})]}),(0,i.jsxs)("select",{id:"fireplaceType",value:l,onChange:e=>c(e.target.value),children:[(0,i.jsx)("option",{value:"",children:"Select a type"}),(0,i.jsx)("option",{children:"Electric"}),(0,i.jsx)("option",{children:"Propane"}),(0,i.jsx)("option",{children:"Wood"}),(0,i.jsx)("option",{children:"Not Sure"})]})]}),(0,i.jsxs)("div",{className:"ms-field",children:[(0,i.jsx)("label",{htmlFor:"details",children:"Tell us about your project"}),(0,i.jsx)("textarea",{id:"details",rows:4,placeholder:"Where the fireplace or stone will go, indoor or outdoor, the look you're after, timeline…",value:x,onChange:e=>g(e.target.value)})]}),(0,i.jsx)("input",{className:"ms-honeypot",tabIndex:-1,autoComplete:"off","aria-hidden":"true",name:"_gotcha",value:b,onChange:e=>y(e.target.value)}),(0,i.jsx)("button",{className:"ms-btn ms-btn--primary ms-btn--lg ms-btn--block",type:"submit",disabled:v,children:v?"Sending…":"Request a Free Quote"}),(0,i.jsx)("p",{className:"ms-form-fine",children:"We’ll only use your details to prepare your quote."})]})}let l="/msd-fireplaces-preview/images/fireplaces",c="/msd-fireplaces-preview/images/stone",d=[`${c}/eldorado/eldorado-cut-coarse-stone-cannonade-int-fireplace.webp`,`${c}/canyon/canyon-versetta-stone-siding-ledgestone-sand-double-sided-fireplace.webp`,`${l}/outdoor-patio-stone-wall.webp`],m=[{title:"Electric Fireplaces",text:"Enjoy the ambiance of a fireplace with flexible design possibilities. Electric fireplaces are an excellent option for living rooms, bedrooms, basements and feature walls.",src:`${l}/napoleon-electric-fireplace.webp`,alt:"Napoleon electric fireplace set into a tiled feature wall"},{title:"Propane Fireplaces",text:"Experience the beauty of real flames and comfortable warmth with the convenience of propane. A great choice for living areas, cottages and other gathering spaces.",src:`${c}/owned/msd-sierra-black-fireplace-big-min.webp`,alt:"Contemporary fireplace in a dark natural stone surround"},{title:"Wood-Burning Fireplaces",text:"For those who love the traditional warmth, atmosphere and character of a real wood fire, explore Napoleon's wood-burning fireplace options.",src:`${l}/napoleon-high-country-nz8000.webp`,alt:"Napoleon wood-burning fireplace in a stone-walled living room"}],p=[{title:"Living Rooms & Feature Walls",text:"Create a stunning focal point with a fireplace surrounded by natural or manufactured stone. From sleek contemporary designs to traditional stone fireplaces, the possibilities are endless.",src:`${c}/eldorado/eldorado-white-brick-int-fireplace-living.webp`,alt:"Bright living room with a white brick fireplace and built-in shelving",tag:"Indoor"},{title:"Kitchens & Open-Concept Spaces",text:"Incorporate a fireplace into your kitchen, dining or open-concept living area to add warmth, character and architectural interest.",src:`${c}/eldorado/eldorado-tundrabrick-chalk-dust-int-kitchen-fireplace.webp`,alt:"Open kitchen and dining room with a brick fireplace",tag:"Indoor"},{title:"Basements & Family Rooms",text:"Transform your basement or family room into a comfortable, inviting space with a fireplace and stone feature wall.",src:`${c}/colonial/colonial-blog-670.webp`,alt:"Lower-level lounge with full stone walls and a coffered ceiling",tag:"Indoor"},{title:"Bedrooms, Cottages & Retreats",text:"Create a relaxing atmosphere with a fireplace that adds warmth and ambiance to your personal space, or bring comfort and character to your cottage with fireplace and stone options that complement the setting.",src:`${l}/msd-arcadian-fireplace.webp`,alt:"Rustic fieldstone fireplace in a cottage with snowy views",tag:"Indoor"},{title:"Outdoor Living Areas",text:"Extend your enjoyment of the outdoors with beautiful stone fireplace features that create a welcoming setting for relaxing and entertaining.",src:`${c}/colonial/colonial-blog-636.webp`,alt:"Patio with a tall stone outdoor fireplace and seating",tag:"Outdoor"},{title:"Outdoor Kitchens & Entertaining",text:"Combine fireplaces, stonework and outdoor kitchen features to create a beautiful and functional space for cooking, dining and gathering with family and friends.",src:`${c}/canyon/canyon-fusion-stone-great-lakes-raven-outdoor-kitchen.webp`,alt:"Covered outdoor kitchen and bar faced in stone, by the water",tag:"Outdoor"}],h=[{label:"Stacked ledgestone",src:`${l}/stone-texture-stacked-ledgestone.webp`,alt:"Close-up of a warm stacked ledgestone wall"},{label:"Light & clean-lined",src:`${l}/stone-texture-light-limestone.webp`,alt:"Light cream stone feature wall behind a sofa"},{label:"Classic brick",src:`${c}/owned/msd-masterbrick-dark-red-wien-1000x667.webp`,alt:"Interior wall in dark red thin brick"},{label:"Rustic fieldstone",src:`${c}/canyon/canyon-cs-fieldstone-driftwood-exterior-stone-veneer.webp`,alt:"Rustic fieldstone set in mortar"}],f=`${c}/colonial/colonial-blog-633.webp`,u=[{q:"What fireplace brands do you carry?",a:"We are an authorized Napoleon dealer, offering quality electric, propane and wood-burning fireplace options at competitive prices."},{q:"Can you help me choose the right fireplace and stone?",a:"Absolutely. Our team can help you explore different fireplace styles, stone colours and textures to find combinations that complement your space."},{q:"Can I update the stone around my existing fireplace?",a:"Yes. Updating the stone surround can give an existing fireplace an entirely new look. Bring us a photo of your current fireplace and we'll help you explore suitable options."},{q:"Do you offer fireplace design assistance?",a:"We can help with product selections, stone combinations and general design ideas. Bring us your inspiration photos or project details and we'll help you get started."},{q:"Do you install fireplaces or stone?",a:"We supply fireplaces and stone rather than providing installation directly. We can connect you with experienced local masons for stone installation. Fireplace installation should be completed by appropriately qualified professionals."},{q:"Do you deliver?",a:"Yes, delivery is available throughout Atlantic Canada."}],x={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},g={...x,strokeWidth:2.5},b=()=>(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...x,children:(0,i.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})}),y=()=>(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...g,children:(0,i.jsx)("polyline",{points:"20 6 9 17 4 12"})}),v=()=>(0,i.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...x,children:(0,i.jsx)("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),w=()=>(0,i.jsx)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...x,children:(0,i.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),j=()=>(0,i.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...x,children:[(0,i.jsx)("path",{d:"M1 3h15v13H1z"}),(0,i.jsx)("path",{d:"M16 8h4l3 3v5h-7z"}),(0,i.jsx)("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),(0,i.jsx)("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]}),k=()=>(0,i.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...x,children:[(0,i.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,i.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),N=()=>(0,i.jsxs)("svg",{className:"ms-step-icon",width:"30",height:"30",viewBox:"0 0 24 24",...x,children:[(0,i.jsx)("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),(0,i.jsx)("polyline",{points:"2 17 12 22 22 17"}),(0,i.jsx)("polyline",{points:"2 12 12 17 22 12"})]}),q="var(--font-plus-jakarta-sans),system-ui,sans-serif",z=`
.ms-root{
  --ink:#1B2730; --ink-soft:#2C3B45; --paper:#F6F4EF; --sand:#E7E0D2;
  --cedar:#C25E36; --cedar-dark:#A84E2B; --harbour:#3E5C6B; --sage:#6F7B5F;
  --line:rgba(27,39,48,.12); --muted:#5C6770;
  font-family:${q}; color:var(--ink);
  background:var(--paper); line-height:1.55; -webkit-font-smoothing:antialiased;
}
.ms-root *{box-sizing:border-box;}
.ms-root h1,.ms-root h2,.ms-root h3,.ms-root h4{font-family:${q};line-height:1.08;margin:0;}
.ms-root p{margin:0;}
.ms-accent{color:var(--cedar);}
.ms-eyebrow{font-family:${q};text-transform:uppercase;letter-spacing:.16em;
  font-size:.72rem;font-weight:700;color:var(--cedar);margin-bottom:14px;}
.ms-eyebrow--center{text-align:center;}
.ms-eyebrow--light{color:#E9A887;}

.ms-btn{display:inline-flex;align-items:center;gap:12px;justify-content:center;
  font-family:${q};font-weight:700;font-size:.95rem;text-decoration:none;
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
.ms-lede{font-size:1.12rem;color:var(--muted);max-width:36ch;}
.ms-hero-cta{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:26px;}
.ms-trust-chips{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:9px;}
.ms-trust-chips li{display:flex;align-items:center;gap:9px;font-size:.92rem;color:var(--ink-soft);font-weight:500;}
.ms-trust-chips svg{color:var(--sage);flex:none;}

.ms-brands{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff;padding:28px;text-align:center;}
.ms-brands-label{font-family:${q};text-transform:uppercase;letter-spacing:.14em;
  font-size:.7rem;font-weight:700;color:var(--muted);margin-bottom:18px;}
.ms-brand-logos{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:40px;max-width:900px;margin:0 auto;}
.ms-brand-logos img{height:34px;width:auto;object-fit:contain;opacity:.8;filter:grayscale(.2);}

.ms-section{max-width:1100px;margin:0 auto;padding:78px 28px;min-height:100vh;display:flex;flex-direction:column;justify-content:center;}
.ms-h2{font-size:clamp(1.7rem,3.4vw,2.5rem);font-weight:800;letter-spacing:-.02em;}
.ms-root .ms-h2--center{text-align:center;max-width:20ch;margin-inline:auto;}
.ms-h2--light{color:#fff;}
.ms-section-head{margin-bottom:42px;}


/* ── Layout helper shared by the new sections ── */
.ms-wrap{max-width:1140px;margin:0 auto;width:100%;}
.ms-root .ms-head-sub{color:var(--muted);font-size:1.05rem;max-width:56ch;margin:14px auto 0;}

/* ── Intro band: Napoleon dealer + the two welcome paragraphs ── */
.ms-intro{background:#fff;border-bottom:1px solid var(--line);padding:56px 28px;}
.ms-intro-inner{max-width:820px;margin:0 auto;text-align:center;display:flex;flex-direction:column;gap:16px;}
.ms-intro-inner p{color:var(--ink-soft);font-size:1.06rem;}
.ms-dealer{display:inline-flex;align-items:center;justify-content:center;gap:14px;margin:0 auto 8px;
  padding:10px 18px;border:1px solid var(--line);border-radius:99px;background:var(--paper);}
.ms-dealer img{height:30px;width:auto;}
.ms-dealer span{font-family:${q};text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:700;color:var(--ink);}

/* ── Napoleon fireplaces: three photo cards ── */
.ms-fire{background:var(--paper);padding:84px 28px;}
.ms-head-split{display:grid;grid-template-columns:.9fr 1.1fr;gap:40px;align-items:end;}
.ms-head-copy{display:flex;flex-direction:column;gap:12px;color:var(--muted);font-size:1rem;}
.ms-fire-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.ms-fire-card{background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;min-width:0;}
.ms-fire-media{aspect-ratio:8/5;overflow:hidden;background:var(--sand);}
.ms-fire-media img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease;}
.ms-fire-card:hover .ms-fire-media img{transform:scale(1.04);}
.ms-fire-body{padding:22px 22px 24px;}
.ms-fire-body h3{font-size:1.2rem;margin-bottom:8px;}
.ms-fire-body p{color:var(--muted);font-size:.94rem;}
.ms-fire-foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px 24px;margin-top:34px;text-align:center;}
.ms-fire-foot p{color:var(--ink-soft);font-weight:600;}

/* ── Inspiration gallery ── */
.ms-insp{background:#fff;border-top:1px solid var(--line);padding:84px 28px;}
.ms-insp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px 24px;}
.ms-insp-item{margin:0;min-width:0;}
.ms-insp-shot{position:relative;aspect-ratio:4/3;border-radius:14px;overflow:hidden;background:var(--sand);}
.ms-insp-shot img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease;}
.ms-insp-item:hover .ms-insp-shot img{transform:scale(1.05);}
.ms-insp-shot .ms-photo-tag{left:auto;right:12px;top:12px;bottom:auto;}
.ms-insp-item figcaption{padding-top:14px;}
.ms-insp-item h3{font-size:1.1rem;margin-bottom:6px;}
.ms-insp-item p{color:var(--muted);font-size:.92rem;}
.ms-root .ms-insp-note{margin:36px auto 0;text-align:center;font-size:.84rem;color:var(--muted);font-style:italic;max-width:60ch;}

/* ── Stone section: copy + 2x2 texture tiles ── */
.ms-stone{background:var(--sand);padding:84px 28px;}
.ms-stone-inner{display:grid;grid-template-columns:1fr 1.1fr;gap:52px;align-items:center;}
.ms-stone-copy{display:flex;flex-direction:column;gap:16px;align-items:flex-start;}
.ms-stone-copy .ms-h2{margin-bottom:4px;}
.ms-stone-copy p{color:var(--ink-soft);font-size:1rem;}
.ms-stone-copy .ms-stone-lead{font-size:1.15rem;color:var(--ink);font-weight:600;}
.ms-stone-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;}
.ms-stone-tile{position:relative;margin:0;aspect-ratio:1/1;border-radius:14px;overflow:hidden;box-shadow:0 12px 30px rgba(27,39,48,.12);}
.ms-stone-tile img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-stone-tile figcaption{position:absolute;left:0;right:0;bottom:0;padding:26px 14px 12px;color:#fff;font-weight:700;font-size:.9rem;
  background:linear-gradient(transparent,rgba(20,29,36,.78));}

/* ── Guidance + mason connections ── */
.ms-idea{background:var(--paper);padding:84px 28px;}
.ms-idea-inner{display:grid;grid-template-columns:.95fr 1.05fr;gap:52px;align-items:center;}
.ms-idea-photo{border-radius:18px;overflow:hidden;aspect-ratio:4/5;box-shadow:0 18px 50px rgba(27,39,48,.14);}
.ms-idea-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-idea-copy{display:flex;flex-direction:column;gap:14px;}
.ms-idea-copy .ms-h2{margin-bottom:6px;}
.ms-idea-copy>p{color:var(--ink-soft);font-size:1.03rem;}
.ms-idea-note{margin-top:12px;padding:20px 22px;background:#fff;border:1px solid var(--line);
  border-left:3px solid var(--cedar);border-radius:0 12px 12px 0;display:flex;flex-direction:column;gap:6px;
  color:var(--ink-soft);font-size:.96rem;}
.ms-idea-note strong{color:var(--ink);font-size:1.04rem;}

.ms-quote-copy>p{margin-bottom:14px;}
.ms-quote-base{font-size:.88rem!important;color:var(--muted)!important;margin-top:18px;}

.ms-why{background-color:#141D24;background-image:linear-gradient(rgba(20,29,36,.9),rgba(20,29,36,.94)),url('/msd-fireplaces-preview/images/stone/eldorado/eldorado-hillstone-lucera-kitchen.webp');
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


.ms-faq{background:var(--sand);display:flex;flex-direction:column;justify-content:center;padding:78px 28px;}
.ms-faq-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-faq-list{max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:12px;}
.ms-faq-item{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;}
.ms-faq-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
  background:none;border:none;cursor:pointer;text-align:left;padding:20px 22px;
  font-family:${q};font-weight:600;font-size:1.04rem;color:var(--ink);}
.ms-faq-icon{font-size:1.5rem;color:var(--cedar);line-height:1;flex:none;}
.ms-faq-a{padding:0 22px 22px;color:var(--muted);font-size:.98rem;}
.ms-faq-item:not(.is-open) .ms-faq-a{display:none;}

.ms-photo-tag{position:absolute;left:12px;bottom:12px;font-family:${q};font-size:.62rem;font-weight:700;
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
  .ms-why{min-height:auto;}
  .ms-lede{max-width:none;}
  .ms-why-inner,.ms-quote-inner,.ms-head-split,.ms-stone-inner,.ms-idea-inner{grid-template-columns:1fr;gap:32px;}
  .ms-fire-grid,.ms-insp-grid{grid-template-columns:repeat(2,1fr);}
  .ms-idea-photo{aspect-ratio:16/10;}
  .ms-why{background-attachment:scroll;}
}
@media (max-width:640px){
  .ms-sticky-bar{display:flex;padding-bottom:calc(12px + env(safe-area-inset-bottom));}
  .ms-fire,.ms-insp,.ms-stone,.ms-idea,.ms-faq{padding:56px 20px;}
  .ms-intro{padding:44px 20px;}
  .ms-fire-grid,.ms-insp-grid{grid-template-columns:1fr;}
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
`;e.s(["FireplacesLandingPage",0,function(){let[e,s]=(0,a.useState)(0),[t,r]=(0,a.useState)([0]),[l,c]=(0,a.useState)(0),x=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=x.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let i=Array.from(e.querySelectorAll(".ms-section-head,.ms-fire-card,.ms-insp-item,.ms-stone-tile,.ms-value-list li,.ms-faq-item,.ms-idea-note,.ms-quote-form-wrap")),a=new Map;i.forEach(e=>{e.classList.add("ms-reveal");let i=e.parentElement;if(!i)return;let s=a.get(i)??0;a.set(i,s+1),s&&(e.style.transitionDelay=`${Math.min(70*s,280)}ms`)});let s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),s.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});return i.forEach(e=>s.observe(e)),e.classList.add("ms-reveal-armed"),()=>s.disconnect()},[]),(0,a.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||d.length<2)return;let e=setTimeout(()=>r(e=>e.includes(1)?e:[...e,1]),1500),i=setInterval(()=>{s(e=>{let i=(e+1)%d.length;return r(e=>e.includes(i)?e:[...e,i]),i})},5e3);return()=>{clearTimeout(e),clearInterval(i)}},[]),(0,i.jsxs)("div",{className:"ms-root",ref:x,children:[(0,i.jsx)("style",{children:z}),(0,i.jsxs)("section",{className:"ms-hero",children:[(0,i.jsx)("div",{className:"ms-hero-bg","aria-hidden":"true",children:d.map((a,s)=>t.includes(s)?(0,i.jsx)("img",{className:"ms-hero-slide"+(s===e?" is-active":""),src:a,alt:"",fetchPriority:0===s?"high":void 0,loading:0===s?"eager":"lazy",decoding:"async"},a):(0,i.jsx)("div",{className:"ms-hero-slide"},a))}),(0,i.jsx)("div",{className:"ms-hero-inner",children:(0,i.jsxs)("div",{className:"ms-hero-copy",children:[(0,i.jsx)("p",{className:"ms-eyebrow",children:"Napoleon Fireplaces & Stone"}),(0,i.jsxs)("h1",{className:"ms-h1",children:["Beautiful Spaces, ",(0,i.jsx)("span",{className:"ms-accent",children:"Indoors & Out"})]}),(0,i.jsx)("p",{className:"ms-lede",children:"A fireplace is more than a source of warmth. It can become a beautiful focal point that adds comfort, character and style to your space."}),(0,i.jsxs)("div",{className:"ms-hero-cta",children:[(0,i.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#options",children:"Explore Your Options"}),(0,i.jsx)("a",{className:"ms-btn ms-btn--ghost-light ms-btn--lg",href:"#quote",children:"Request a Quote"})]}),(0,i.jsxs)("ul",{className:"ms-trust-chips",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(y,{})," Authorized Napoleon dealer"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(y,{}),"Natural & manufactured stone"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(y,{})," Delivery throughout Atlantic Canada"]})]})]})})]}),(0,i.jsx)("section",{className:"ms-intro","aria-label":"About our fireplaces and stone",children:(0,i.jsxs)("div",{className:"ms-intro-inner",children:[(0,i.jsxs)("div",{className:"ms-dealer",children:[(0,i.jsx)("img",{src:"/msd-fireplaces-preview/images/brands/napoleon.webp",alt:"Napoleon"}),(0,i.jsx)("span",{children:"Authorized Napoleon Dealer"})]}),(0,i.jsx)("p",{children:"At Maritime Stone & Decor, we’re proud to offer Napoleon fireplaces, a leading name in quality and innovation, at highly competitive prices. From electric and propane to traditional wood-burning options, we’ll help you explore the styles and features that suit your home and budget."}),(0,i.jsx)("p",{children:"Pair your fireplace with our selection of natural and manufactured stone to create a look that’s uniquely yours. Whether you’re planning a cozy living room, a stunning feature wall, a cottage retreat or an outdoor kitchen and entertaining area, we’re here to help bring your ideas together."})]})}),(0,i.jsx)("section",{className:"ms-fire",id:"options",children:(0,i.jsxs)("div",{className:"ms-wrap",children:[(0,i.jsxs)("div",{className:"ms-section-head ms-head-split",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"ms-eyebrow",children:"Find the Right Fireplace for Your Space"}),(0,i.jsx)("h2",{className:"ms-h2",children:"Napoleon Fireplaces"})]}),(0,i.jsxs)("div",{className:"ms-head-copy",children:[(0,i.jsx)("p",{children:"Quality, performance and beautiful design come together with Napoleon fireplaces. Whether you’re looking for the convenience of electric, the comfort of propane or the traditional appeal of a wood-burning fireplace, Napoleon offers options to complement a variety of spaces and styles."}),(0,i.jsx)("p",{children:"As an authorized Napoleon dealer, we offer competitive pricing and knowledgeable assistance to help you explore your options."})]})]}),(0,i.jsx)("div",{className:"ms-fire-grid",children:m.map(e=>(0,i.jsxs)("article",{className:"ms-fire-card",children:[(0,i.jsx)("div",{className:"ms-fire-media",children:(0,i.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"})}),(0,i.jsxs)("div",{className:"ms-fire-body",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.text})]})]},e.title))}),(0,i.jsxs)("div",{className:"ms-fire-foot",children:[(0,i.jsx)("p",{children:"Contact us to discuss available models, specifications and pricing."}),(0,i.jsx)("a",{className:"ms-btn ms-btn--primary",href:"#quote",children:"Request a Quote"})]})]})}),(0,i.jsx)("section",{className:"ms-insp",children:(0,i.jsxs)("div",{className:"ms-wrap",children:[(0,i.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,i.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Indoors & Out"}),(0,i.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Inspiration for Every Space"}),(0,i.jsx)("p",{className:"ms-head-sub",children:"Fireplaces and stone features can transform spaces throughout your home, indoors and out."})]}),(0,i.jsx)("div",{className:"ms-insp-grid",children:p.map(e=>(0,i.jsxs)("figure",{className:"ms-insp-item",children:[(0,i.jsxs)("div",{className:"ms-insp-shot",children:[(0,i.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"}),(0,i.jsx)("span",{className:"ms-photo-tag",children:e.tag})]}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.text})]})]},e.title))}),(0,i.jsx)("p",{className:"ms-insp-note",children:"Fireplace selections and installations must be appropriate for the intended indoor or outdoor location."})]})}),(0,i.jsx)("section",{className:"ms-stone",children:(0,i.jsxs)("div",{className:"ms-wrap ms-stone-inner",children:[(0,i.jsxs)("div",{className:"ms-stone-copy",children:[(0,i.jsx)("p",{className:"ms-eyebrow",children:"Natural & Manufactured Stone"}),(0,i.jsx)("h2",{className:"ms-h2",children:"Beautiful Stone Makes All the Difference"}),(0,i.jsx)("p",{className:"ms-stone-lead",children:"The right stone can transform an ordinary fireplace into an extraordinary feature."}),(0,i.jsx)("p",{children:"At Maritime Stone & Decor, we offer a variety of natural and manufactured stone in colours, textures and profiles to complement both traditional and contemporary designs. Whether you envision a floor-to-ceiling stone fireplace, a rustic surround or a clean, modern feature wall, we’ll help you explore the possibilities."}),(0,i.jsx)("p",{children:"Visit our Moncton showroom to see the colours and textures in person and find the right stone for your project."}),(0,i.jsx)("a",{className:"ms-btn ms-btn--primary",href:"#quote",children:"Request a Quote"})]}),(0,i.jsx)("div",{className:"ms-stone-grid",children:h.map(e=>(0,i.jsxs)("figure",{className:"ms-stone-tile",children:[(0,i.jsx)("img",{src:e.src,alt:e.alt,loading:"lazy",decoding:"async"}),(0,i.jsx)("figcaption",{children:e.label})]},e.label))})]})}),(0,i.jsx)("section",{className:"ms-idea",children:(0,i.jsxs)("div",{className:"ms-wrap ms-idea-inner",children:[(0,i.jsx)("div",{className:"ms-idea-photo",children:(0,i.jsx)("img",{src:f,alt:"Uplit natural stone feature wall in an open living space",loading:"lazy",decoding:"async"})}),(0,i.jsxs)("div",{className:"ms-idea-copy",children:[(0,i.jsx)("p",{className:"ms-eyebrow",children:"Have an Idea?"}),(0,i.jsx)("h2",{className:"ms-h2",children:"Let’s Bring It Together."}),(0,i.jsx)("p",{children:"You don’t need to have every detail figured out before visiting us."}),(0,i.jsx)("p",{children:"Bring us photos of your space, inspiration pictures or even a rough idea of what you’re looking for. Our knowledgeable team can help you explore fireplace styles, stone colours, textures and design combinations that work with your space."}),(0,i.jsxs)("aside",{className:"ms-idea-note",children:[(0,i.jsx)("strong",{children:"Need help with the stone installation?"}),(0,i.jsx)("span",{children:"We work with experienced local masons who take pride in their craftsmanship and can connect you with skilled professionals familiar with the stone products we carry. From selecting the right materials to helping you find the right people for the job, we’re happy to point you in the right direction."})]})]})]})}),(0,i.jsx)("section",{className:"ms-why",children:(0,i.jsxs)("div",{className:"ms-why-inner",children:[(0,i.jsxs)("div",{className:"ms-why-head",children:[(0,i.jsx)("h2",{className:"ms-h2",children:"Why Choose Maritime Stone & Decor?"}),(0,i.jsx)("p",{className:"ms-why-sub",children:"Quality Napoleon fireplaces and beautiful stone at competitive prices, helpful advice on your project, and connections to experienced local masons when you need them."})]}),(0,i.jsxs)("ul",{className:"ms-value-list",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(v,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Quality Brands, Competitive Pricing"}),(0,i.jsx)("p",{children:"Napoleon fireplaces and quality stone products at prices that make sense."})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(w,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Knowledgeable, Helpful Advice"}),(0,i.jsx)("p",{children:"Our team can help you explore fireplace and stone options to complement your home, style and budget."})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(N,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Experienced Mason Connections"}),(0,i.jsx)("p",{children:"We work with skilled local masons and can help connect you with professionals for your stone installation."})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(k,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"A Showroom You Can Visit"}),(0,i.jsx)("p",{children:"See stone colours, textures and profiles in person at our Moncton showroom."})]})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)(j,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Delivery Available"}),(0,i.jsx)("p",{children:"Delivery options throughout Atlantic Canada."})]})]})]})]})}),(0,i.jsx)("section",{className:"ms-faq",children:(0,i.jsxs)("div",{className:"ms-faq-inner",children:[(0,i.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,i.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Before you ask"}),(0,i.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Frequently Asked Questions"})]}),(0,i.jsx)("div",{className:"ms-faq-list",children:u.map((e,a)=>{let s=l===a;return(0,i.jsxs)("div",{className:"ms-faq-item"+(s?" is-open":""),children:[(0,i.jsxs)("button",{type:"button",className:"ms-faq-q","aria-expanded":s,onClick:()=>c(s?-1:a),children:[(0,i.jsx)("span",{children:e.q}),(0,i.jsx)("span",{className:"ms-faq-icon","aria-hidden":"true",children:s?"–":"+"})]}),(0,i.jsx)("div",{className:"ms-faq-a",children:(0,i.jsx)("p",{children:e.a})})]},e.q)})})]})}),(0,i.jsx)("section",{className:"ms-quote",id:"quote",children:(0,i.jsxs)("div",{className:"ms-quote-inner",children:[(0,i.jsxs)("div",{className:"ms-quote-copy",children:[(0,i.jsx)("h2",{className:"ms-h2",children:"Let’s Bring Your Fireplace Project to Life"}),(0,i.jsx)("p",{children:"Whether you’re looking for a new Napoleon fireplace, updating an existing fireplace surround or planning a beautiful new feature wall, we’re here to help."}),(0,i.jsx)("p",{children:"Explore quality products, competitive pricing and stone options that complement your style. Visit our Moncton showroom or contact us to discuss your project."}),(0,i.jsxs)(o.TelLink,{className:"ms-quote-call",children:[(0,i.jsx)(b,{})," ","(506) 854-2266"]}),(0,i.jsx)("p",{className:"ms-quote-base",children:"Maritime Stone & Decor — Based in Moncton, NB · Delivery throughout Atlantic Canada."})]}),(0,i.jsx)("div",{className:"ms-quote-form-wrap",children:(0,i.jsx)(n,{})})]})}),(0,i.jsx)("div",{className:"ms-sticky-bar",children:(0,i.jsx)("a",{className:"ms-btn ms-btn--primary ms-sticky-btn",href:"#quote",children:"Request a Free Quote"})}),(0,i.jsx)(o.TelLink,{className:"ms-fab","aria-label":"Call Maritime Stone & Decor at (506) 854-2266",children:(0,i.jsx)(b,{})})]})}],59881)}]);