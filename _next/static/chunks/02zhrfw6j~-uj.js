(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69979,e=>{"use strict";var s=e.i(43476),a=e.i(71645);e.i(47167);var t=e.i(8037),o=e.i(74997),n=e.i(26616);function i(e,s){return s.trim()?"Email"!==e||/\S+@\S+\.\S+/.test(s)?void 0:"Please enter a valid email address":`${e} is required`}function r(){let[e,r]=(0,a.useState)("Homeowner"),[l,c]=(0,a.useState)("Exterior — full or partial elevation"),[d,m]=(0,a.useState)(""),[h,p]=(0,a.useState)(""),[u,g]=(0,a.useState)(""),[x,f]=(0,a.useState)(""),[b,y]=(0,a.useState)(""),[w,v]=(0,a.useState)(""),[j,k]=(0,a.useState)(!1),[N,C]=(0,a.useState)(!1),[S,q]=(0,a.useState)(""),[z,A]=(0,a.useState)({});function M(e,s){let a=i(e.charAt(0).toUpperCase()+e.slice(1),s);A(s=>({...s,[e]:a}))}function B(e){z[e]&&A(s=>({...s,[e]:void 0}))}async function T(s){if(s.preventDefault(),j)return;q("");let a={},n=i("Name",d),r=i("Phone",h),c=i("Email",u);if(n&&(a.name=n),r&&(a.phone=r),c&&(a.email=c),Object.keys(a).length>0){A(a);let e=n?"name":r?"phone":"email";document.getElementById(e)?.focus();return}if(k(!0),w){C(!0),k(!1);return}try{if(!(await fetch("https://formspree.io/f/preview-disabled",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({source:"stone-landing",role:e,application:l,name:d.trim(),phone:h.trim(),email:u.trim(),address:x.trim(),details:b.trim()})})).ok)throw Error("Submission failed");(0,o.trackLeadConversion)(),C(!0)}catch{q(`Something went wrong. Please try again or call us at ${t.siteConfig.phone}.`)}finally{k(!1)}}return N?(0,s.jsxs)("div",{className:"ms-form-success",role:"status",children:[(0,s.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,s.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),(0,s.jsx)("h3",{children:"Request received"}),(0,s.jsxs)("p",{children:["Thanks — we’ll be in touch shortly with your stone pricing. Or call us now at"," ",(0,s.jsx)(n.TelLink,{children:t.siteConfig.phone}),"."]})]}):(0,s.jsxs)("form",{className:"ms-form",onSubmit:T,noValidate:!0,children:[S&&(0,s.jsx)("div",{className:"ms-form-error",role:"alert",children:S}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"role",children:"I’m a…"}),(0,s.jsxs)("select",{id:"role",value:e,onChange:e=>r(e.target.value),children:[(0,s.jsx)("option",{children:"Homeowner"}),(0,s.jsx)("option",{children:"Contractor or builder"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"application",children:"What are you covering?"}),(0,s.jsxs)("select",{id:"application",value:l,onChange:e=>c(e.target.value),children:[(0,s.jsx)("option",{children:"Exterior — full or partial elevation"}),(0,s.jsx)("option",{children:"Fireplace or chimney"}),(0,s.jsx)("option",{children:"Interior feature wall"}),(0,s.jsx)("option",{children:"Columns, skirting or outdoor kitchen"}),(0,s.jsx)("option",{children:"Not sure yet"})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{id:"name",value:d,"aria-required":"true","aria-invalid":z.name?"true":void 0,onChange:e=>{m(e.target.value),B("name")},onBlur:()=>M("name",d)}),z.name&&(0,s.jsx)("p",{className:"ms-field-error",children:z.name})]}),(0,s.jsxs)("div",{className:"ms-field-row",children:[(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,s.jsx)("input",{id:"phone",type:"tel",value:h,"aria-required":"true","aria-invalid":z.phone?"true":void 0,onChange:e=>{p(e.target.value),B("phone")},onBlur:()=>M("phone",h)}),z.phone&&(0,s.jsx)("p",{className:"ms-field-error",children:z.phone})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{id:"email",type:"email",value:u,"aria-required":"true","aria-invalid":z.email?"true":void 0,onChange:e=>{g(e.target.value),B("email")},onBlur:()=>M("email",u)}),z.email&&(0,s.jsx)("p",{className:"ms-field-error",children:z.email})]})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsxs)("label",{htmlFor:"address",children:["Project address ",(0,s.jsx)("span",{className:"ms-opt",children:"(optional)"})]}),(0,s.jsx)("input",{id:"address",value:x,onChange:e=>f(e.target.value)})]}),(0,s.jsxs)("div",{className:"ms-field",children:[(0,s.jsx)("label",{htmlFor:"details",children:"Tell us about your project"}),(0,s.jsx)("textarea",{id:"details",rows:4,placeholder:"Rough square footage, how many linear feet of corners, the look you're after, timeline…",value:b,onChange:e=>y(e.target.value)})]}),(0,s.jsx)("input",{className:"ms-honeypot",tabIndex:-1,autoComplete:"off","aria-hidden":"true",name:"_gotcha",value:w,onChange:e=>v(e.target.value)}),(0,s.jsx)("button",{className:"ms-btn ms-btn--primary ms-btn--lg ms-btn--block",type:"submit",disabled:j,children:j?"Sending…":"Send my request"}),(0,s.jsx)("p",{className:"ms-form-fine",children:"We’ll only use your details to prepare your quote."})]})}var l=e.i(43371);function c(e,s){return`/msd-fireplaces-preview/images/stone/${e}/${s}.webp`}function d(e,s){return e.startsWith("/")?e:(0,l.cld)(e,s)}function m(e,s){return e.startsWith("/")?void 0:(0,l.cldSet)(e,s)}let h=`${l.CLOUDINARY_BASE}/v1781887396/DSC05997_gwbvfj.jpg`,p=[h,c("canyon","canyon-stone-canada-castle-morning-mist"),c("canyon","canyon-cs-thin-brick-indian-brown-interior"),c("canyon","canyon-article")],u=c("colonial","colonial-blog-641"),g=c("canyon","canyon-rocky-ledge-golden-grey-image-6"),x=c("owned","msd-kitchen-sierra-white-lightbox"),f={src:c("canyon","canyon-cs-canyon-ledge-santa-fe-exterior-stone-veneer-facade"),alt:"House facade clad in Canyon Ledge stone veneer in Santa Fe"},b={src:c("canyon","canyon-cs-classic-cut-prairie-sun-exterior-stone-veneer-project"),alt:"Two-storey home fully clad in Classic Cut stone veneer, with stone columns and steps"},y={src:c("canyon","canyon-cs-castle-driftwood-exterior-stone-veneer-house"),alt:"Home exterior clad in Castle stone veneer in Driftwood"},w={src:c("canyon","canyon-cs-classic-cut-morning-mist-exterior-stone-veneer-towns"),alt:"Row of townhouses clad in Classic Cut stone veneer in Morning Mist",tag:"Multi-unit"},v={src:c("canyon","canyon-cs-fieldstone-driftwood-exterior-stone-veneer"),alt:"Fieldstone veneer set in mortar on a house exterior"},j={src:c("canyon","canyon-csc-quick-fit-winter-grey-exterior-stone-veneer"),alt:"Quick-Fit panel stone veneer on an exterior wall"},k=[{src:c("owned","msd-cordillera-lava-fireplace-1"),alt:"Interior fireplace clad in Cordillera natural stone in Lava",caption:"Fireplace · Cordillera Lava",brand:"Mathios Stone",tall:!0},{src:c("canyon","canyon-cs-castle-ozark-mountain-exterior-stone-veneer-stucco"),alt:"Home exterior combining Castle stone veneer in Ozark Mountain with stucco",caption:"Elevation · Castle, Ozark Mountain",brand:"Canyon Stone Canada"},{src:c("owned","msd-masterbrick-dark-red-wien-1000x667"),alt:"Interior wall in Masterbrick thin brick, Dark Red",caption:"Feature wall · Masterbrick Dark Red",brand:"Mathios Stone"},{src:c("canyon","canyon-cs-canyon-ledge-ozark-mountain-exterior-stone-veneer-columns"),alt:"Porch columns clad in Canyon Ledge stone veneer, Ozark Mountain",caption:"Columns · Canyon Ledge Ozark Mountain",brand:"Canyon Stone Canada",tall:!0},{src:c("canyon","canyon-fusion-stone-great-lakes-raven-outdoor-kitchen"),alt:"Outdoor kitchen island faced in Great Lakes stone veneer, Raven",caption:"Outdoor kitchen · Great Lakes Raven",brand:"Canyon Stone Canada"},{src:c("owned","msd-sierra-black-fireplace-big-min"),alt:"Fireplace surround in Sierra natural stone, Black",caption:"Fireplace · Sierra Black",brand:"Mathios Stone"},{src:c("canyon","canyon-1-nextstone-slatestone-midnight-ash-exterior-skirting"),alt:"Exterior foundation skirting in SlateStone panels, Midnight Ash",caption:"Skirting · SlateStone Midnight Ash",brand:"Canyon Stone Canada"},{src:c("canyon","canyon-cs-tuscany-fieldstone-sienna-exterior-stone-veneer-facade"),alt:"House facade in Tuscany Fieldstone veneer, Sienna colour",caption:"Elevation · Tuscany Fieldstone Sienna",brand:"Canyon Stone Canada"},{src:c("canyon","canyon-versetta-stone-siding-ledgestone-sand-double-sided-fireplace"),alt:"Double-sided fireplace in Ledgestone panel siding, Sand",caption:"Double-sided fireplace · Ledgestone Sand",brand:"Canyon Stone Canada"},{src:c("canyon","canyon-arcadia-ledge-coffee-accent-wall"),alt:"Interior accent wall in Arcadia Ledge stone veneer, Coffee",caption:"Accent wall · Arcadia Ledge Coffee",brand:"Canyon Stone Canada"},{src:h,alt:"Garage and front-door elevation with stone cladding, Moncton",caption:"Garage & entry · one of ours, Moncton",brand:"Maritime Stone & Decor"},{src:c("eldorado","eldorado-tundrabrick-chalk-dust-int-kitchen-fireplace"),alt:"Open kitchen and dining room with a brick fireplace and log store",caption:"Kitchen & fireplace · TundraBrick Chalk Dust",brand:"Eldorado Stone"},{src:c("colonial","colonial-blog-636"),alt:"Patio with an outdoor kitchen and a stone outdoor fireplace",caption:"Outdoor kitchen & fireplace",brand:"Colonial Brick & Stone"},{src:c("colonial","colonial-blog-633"),alt:"Interior stone feature wall lit from below",caption:"Feature wall · uplit stone",brand:"Colonial Brick & Stone"},{src:c("colonial","colonial-blog-673"),alt:"Stone retaining wall planted with flowers",caption:"Garden wall · armour stone",brand:"Colonial Brick & Stone"},{src:c("colonial","colonial-blog-670"),alt:"Stone-walled lounge with a coffered timber ceiling",caption:"Lounge · full stone walls",brand:"Colonial Brick & Stone"},{src:c("colonial","colonial-blog-663"),alt:"Grey stone entrance portico with white columns",caption:"Portico · grey squared stone",brand:"Colonial Brick & Stone"},{src:c("eldorado","eldorado-white-brick-int-fireplace-living"),alt:"Living room with a white brick fireplace and built-in shelving",caption:"Living room · white brick",brand:"Eldorado Stone"},{src:c("eldorado","eldorado-cut-coarse-stone-cannonade-int-fireplace"),alt:"Floor-to-ceiling fireplace in Cut Coarse Stone, Cannonade",caption:"Fireplace · Cut Coarse Stone Cannonade",brand:"Eldorado Stone",tall:!0},{src:c("eldorado","eldorado-hillstone-lucera-kitchen"),alt:"Kitchen with a Hillstone Lucera stone backsplash wall",caption:"Kitchen · Hillstone Lucera",brand:"Eldorado Stone"},{src:c("owned","msd-alverstone-lava-exterior-facade"),alt:"House exterior clad in Alverstone natural stone in Lava",caption:"Elevation · Alverstone Lava",brand:"Mathios Stone"},{src:c("owned","msd-highland-cream-residence-1000x667"),alt:"Residence faced in Highland natural stone in Cream",caption:"Elevation · Highland Cream",brand:"Mathios Stone"},{src:c("owned","msd-alverstone-champagne-facade-1"),alt:"House facade in Alverstone natural stone, Champagne",caption:"Elevation · Alverstone Champagne",brand:"Mathios Stone"},{src:c("colonial","colonial-img-0680"),alt:"Manor-style home faced in coursed limestone",caption:"Elevation · coursed limestone",brand:"Colonial Brick & Stone",tall:!0},{src:c("colonial","colonial-blog-667"),alt:"Colonial-style house in grey squared stone with white trim",caption:"Elevation · squared stone",brand:"Colonial Brick & Stone"},{src:c("colonial","colonial-blog-628"),alt:"Front entrance with stone steps, columns and landscaping",caption:"Entrance · steps & columns",brand:"Colonial Brick & Stone"}],N=t.siteConfig.phone,C=[{q:"What's the difference between natural and manufactured stone veneer?",a:"Natural stone veneer is quarried stone cut thin. Manufactured stone veneer is cast from moulds taken off real stone and coloured through the mix. Natural gives you genuine variation and weight; manufactured is lighter, easier on a budget, faster to install, and comes in far more colours. We carry both, and the honest answer for most projects is that once it's on the wall, very few people can tell — so it usually comes down to budget and the look you're after."},{q:"What's the difference between mortar-set and screw-on stone?",a:"Mortar-set is the traditional method: each piece is installed individually with mortar over a properly prepared surface, which lets the installer cut and fit around arches, columns and openings and adjust the layout as they go. Screw-on comes as panels that fasten straight to the wall, much like siding — no mortar joints to finish, and straightforward enough for contractors and DIYers alike. We carry options for both methods and can help you choose the right one for your project."},{q:"Can stone go on in the winter here?",a:"Yes — both methods can be installed year-round. Mortar-set installations need to be enclosed and heated during cold weather, which adds to the setup on a winter job. Screw-on panels have no mortar to cure, so they are the simpler option once the temperature drops. Talk to us about timing and we will tell you what your project needs."},{q:"Does stone veneer hold up to New Brunswick winters?",a:"Yes, when it's installed properly. The stone itself is freeze-thaw rated; what fails is almost always the wall behind it — missing drainage plane, no weep screed, or mortar work done in the cold. That's why we're picky about who we recommend for installation and why we'll walk you through the assembly before you buy."},{q:"How much does stone veneer cost?",a:"It depends on the brand, the profile and how much corner you have, so we quote per project rather than quoting a number that turns out to be wrong. Bring us your square footage and your linear feet of outside corners and we'll give you a real number the same way we'd quote it for a contractor."},{q:"Why are corners priced separately?",a:"Corner pieces are moulded or cut differently and cost more per piece than flats, so they're sold by the linear foot rather than the square foot. A house with a lot of returns, columns and window surrounds can carry a surprising amount of corner. It's the single biggest reason a stone quote comes in above what someone expected, so we'd rather show you the split up front."},{q:"Do you install stone, or just sell it?",a:"We specialize in supplying the stone, and we partner with trusted local masons for installation. If you need an installer, we're happy to connect you with one of the local masons we work with."},{q:"Can I take samples home?",a:"Yes, and we'd rather you did. Stone changes character completely depending on the light it sits in and how much of it you're looking at. Take a few pieces home, put them against your siding and your trim, and look at them in the morning and at dusk before you commit."},{q:"Do you deliver?",a:"Yes. We're based in Moncton, NB and offer delivery throughout Atlantic Canada, or you can pick up your order at our Moncton showroom. Contact us to discuss delivery options for your project."},{q:"Do you sell to contractors and builders?",a:"Absolutely. Whether you're managing one project or many, our team is here to help with product selection, availability, quantities, and delivery to keep your jobs running smoothly."}],S={fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0},q={...S,strokeWidth:2.5},z=()=>(0,s.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",...S,children:(0,s.jsx)("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"})}),A=()=>(0,s.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",...q,children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})}),M=()=>(0,s.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",...S,children:[(0,s.jsx)("rect",{x:"1",y:"6",width:"13",height:"11",rx:"1"}),(0,s.jsx)("path",{d:"M14 10h4l3 3v4h-7z"}),(0,s.jsx)("circle",{cx:"6",cy:"19",r:"2"}),(0,s.jsx)("circle",{cx:"18",cy:"19",r:"2"})]}),B=()=>(0,s.jsxs)("svg",{className:"ms-problem-icon",width:"24",height:"24",viewBox:"0 0 24 24",...S,children:[(0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,s.jsx)("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),(0,s.jsx)("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),T=()=>(0,s.jsxs)("svg",{className:"ms-problem-icon",width:"24",height:"24",viewBox:"0 0 24 24",...S,children:[(0,s.jsx)("path",{d:"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"}),(0,s.jsx)("line",{x1:"8",y1:"19",x2:"8",y2:"21"}),(0,s.jsx)("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),(0,s.jsx)("line",{x1:"16",y1:"19",x2:"16",y2:"21"})]}),F=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"24",height:"24",viewBox:"0 0 24 24",...S,children:[(0,s.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,s.jsx)("path",{d:"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"})]}),E=()=>(0,s.jsxs)("svg",{className:"ms-step-icon ms-problem-icon",width:"24",height:"24",viewBox:"0 0 24 24",...S,children:[(0,s.jsx)("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),(0,s.jsx)("polyline",{points:"2 17 12 22 22 17"}),(0,s.jsx)("polyline",{points:"2 12 12 17 22 12"})]}),L=()=>(0,s.jsxs)("svg",{className:"ms-step-icon",width:"24",height:"24",viewBox:"0 0 24 24",...S,children:[(0,s.jsx)("path",{d:"M16.5 9.4 7.5 4.21"}),(0,s.jsx)("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),(0,s.jsx)("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),(0,s.jsx)("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),W="var(--font-plus-jakarta-sans),system-ui,sans-serif",D=`
.ms-root{
  --ink:#1B2730; --ink-soft:#2C3B45; --paper:#F6F4EF; --sand:#E7E0D2;
  --cedar:#C25E36; --cedar-dark:#A84E2B; --harbour:#3E5C6B; --sage:#6F7B5F;
  --line:rgba(27,39,48,.12); --muted:#5C6770;
  /* Full-bleed section backdrops. Declared once here rather than inline in each
     rule so every Cloudinary URL on this page lives in lib/stone-photos.ts. */
  --types-bg:url('${u}');
  --why-bg:url('${g}');
  --quote-bg:url('${x}');
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

.ms-btn{display:inline-flex;align-items:center;gap:12px;justify-content:center;
  font-family:${W};font-weight:700;font-size:.95rem;text-decoration:none;
  padding:12px 20px;border-radius:8px;cursor:pointer;border:2px solid transparent;
  transition:transform .12s ease, background .15s ease, box-shadow .15s ease;}
.ms-btn:active{transform:translateY(1px);}
.ms-btn--primary{background:var(--cedar);color:#fff;}
.ms-btn--primary:hover{background:var(--cedar-dark);box-shadow:0 6px 18px rgba(194,94,54,.28);}
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
.ms-hero-inner{position:relative;z-index:1;max-width:1100px;margin:0 auto;width:100%;}
.ms-hero-copy{max-width:620px;}
.ms-hero .ms-h1{color:#fff;text-shadow:0 1px 24px rgba(0,0,0,.28);}
.ms-hero .ms-lede{color:rgba(255,255,255,.9);max-width:48ch;margin-top:22px;margin-bottom:32px;}
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

/* 1156 = 1100 of content + 28px padding each side. Every section on the page
   now lands its content on the same 1100px column, so headings, photos and cards
   share one left edge as you scroll instead of jogging between 123, 163 and 191. */
.ms-section{max-width:1156px;margin:0 auto;padding:78px 28px;min-height:100vh;display:flex;flex-direction:column;justify-content:center;}
.ms-h2{font-size:clamp(1.7rem,3.4vw,2.5rem);font-weight:800;letter-spacing:-.02em;}
.ms-root .ms-h2--center{text-align:center;max-width:22ch;margin-inline:auto;}
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

.ms-types{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:78px 28px;
  background-image:linear-gradient(rgba(20,29,36,.82),rgba(20,29,36,.9)),var(--types-bg);
  background-size:cover;background-position:center;background-attachment:fixed;}
.ms-types-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-types .ms-eyebrow{color:#F2A878;}
.ms-types .ms-h2{color:#fff;}
.ms-type-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.ms-type-card{position:relative;background:rgba(20,29,36,.55);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,.14);color:#fff;border-radius:16px;padding:30px 26px;overflow:hidden;}
.ms-type-card h3{font-size:1.4rem;margin-bottom:12px;}
.ms-type-card p{color:rgba(255,255,255,.74);font-size:.96rem;margin-bottom:12px;}
.ms-type-best{font-size:.86rem;color:rgba(255,255,255,.92)!important;border-top:1px solid rgba(255,255,255,.16);padding-top:12px;margin-bottom:0!important;}
.ms-type-best strong{color:#fff;}
.ms-mid-cta{text-align:center;margin-top:40px;}

/* ── Install methods: identical treatment to the profile grid above — flat white
   ground, no card, no border, no shadow. Two decisions in a row should look like
   two decisions in a row; putting this one in boxes on beige made it read as a
   different kind of thing. A hairline rule is the only separator. */
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

/* ── Project gallery + lightbox ──────────────────────────────────────────── */
.ms-gallery{background:#fff;border-top:1px solid var(--line);padding:88px 28px;}
.ms-gallery-inner{max-width:1100px;margin:0 auto;}
/* Dense flow lets a later short tile backfill any cell a tall one skipped, so the
   mosaic has no holes at any column count. Tile + tall counts are kept to a
   multiple of the column count in lib/stone-photos.ts for the same reason. */
.ms-gallery-grid{list-style:none;margin:0;padding:0;display:grid;grid-auto-flow:dense;
  grid-template-columns:repeat(3,1fr);grid-auto-rows:210px;gap:16px;}
.ms-gallery-item{margin:0;}
.ms-gallery-item.is-tall{grid-row:span 2;}
.ms-gallery-btn{position:relative;display:block;width:100%;height:100%;padding:0;margin:0;border:0;
  border-radius:14px;overflow:hidden;cursor:zoom-in;background:var(--sand);}
.ms-gallery-btn img{width:100%;height:100%;object-fit:cover;display:block;
  transition:transform .5s cubic-bezier(.22,.61,.36,1);}
.ms-gallery-btn:hover img{transform:scale(1.05);}
.ms-gallery-btn:focus-visible{outline:3px solid var(--cedar);outline-offset:3px;}
.ms-gallery-cap{position:absolute;left:0;right:0;bottom:0;padding:26px 14px 12px;
  font-family:${W};font-size:.82rem;font-weight:600;color:#fff;text-align:left;
  background:linear-gradient(0deg,rgba(18,26,32,.86),rgba(18,26,32,0));}

.ms-lightbox{position:fixed;inset:0;z-index:120;display:flex;align-items:center;justify-content:center;
  gap:10px;padding:24px;background:rgba(12,17,21,.94);backdrop-filter:blur(6px);}
.ms-lightbox-figure{margin:0;max-width:min(1100px,92vw);max-height:86vh;display:flex;flex-direction:column;gap:12px;}
.ms-lightbox-figure img{max-width:100%;max-height:76vh;width:auto;height:auto;object-fit:contain;
  border-radius:10px;display:block;margin:0 auto;}
.ms-lightbox-figure figcaption{color:#fff;text-align:center;display:flex;flex-direction:column;gap:3px;font-size:.9rem;}
.ms-lightbox-figure figcaption span{color:rgba(255,255,255,.6);font-size:.8rem;}
.ms-lightbox-close,.ms-lightbox-nav{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);
  color:#fff;cursor:pointer;border-radius:99px;line-height:1;font-family:${W};}
.ms-lightbox-close{position:absolute;top:18px;right:18px;width:44px;height:44px;font-size:1.6rem;}
.ms-lightbox-nav{width:48px;height:48px;font-size:2rem;flex:none;}
.ms-lightbox-close:hover,.ms-lightbox-nav:hover{background:rgba(255,255,255,.2);}
.ms-lightbox-close:focus-visible,.ms-lightbox-nav:focus-visible{outline:3px solid var(--cedar);outline-offset:2px;}

.ms-why{background-image:linear-gradient(rgba(20,29,36,.9),rgba(20,29,36,.94)),var(--why-bg);
  background-size:cover;background-position:center;background-attachment:fixed;
  color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;}
/* width:100% matters: these two sit inside a flex column, where margin:0 auto
   on its own makes the item shrink to its content instead of filling the row —
   at tablet widths the whole trade band was floating centred at 590px wide. */
.ms-why-inner{max-width:1156px;width:100%;margin:0 auto;padding:78px 28px;display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:start;}
.ms-why .ms-h2{color:#fff;margin-bottom:18px;}
.ms-why-sub{color:rgba(255,255,255,.72);font-size:1.05rem;}
.ms-value-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:24px;}
.ms-value-list li{display:flex;gap:16px;align-items:flex-start;}
.ms-value-list svg{color:var(--cedar);flex:none;margin-top:3px;}
.ms-value-list h3{font-size:1.12rem;margin-bottom:5px;}
.ms-value-list p{color:rgba(255,255,255,.68);font-size:.95rem;}

.ms-pcp-inner{background:var(--sand);border:1px solid var(--line);border-radius:20px;padding:46px;
  display:grid;grid-template-columns:1fr 1.2fr;gap:44px;align-items:center;}
.ms-pcp-photo{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:4/5;box-shadow:0 14px 40px rgba(27,39,48,.12);}
.ms-pcp-photo img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-pcp-copy .ms-h2{margin-bottom:16px;}
.ms-pcp-copy p{color:var(--ink-soft);font-size:1.05rem;margin-bottom:24px;}
.ms-pcp-points{list-style:none;margin:0 0 22px;padding:0;display:flex;flex-direction:column;gap:14px;}
.ms-pcp-copy .ms-pcp-close{font-size:.98rem;margin-bottom:24px;}
.ms-pcp-points li{display:flex;align-items:center;gap:11px;font-weight:600;color:var(--ink);}
.ms-pcp-points svg{color:var(--sage);flex:none;}

.ms-steps-inner{display:grid;grid-template-columns:1.18fr .82fr;gap:50px;align-items:stretch;width:100%;}
.ms-steps-media{position:relative;border-radius:18px;overflow:hidden;aspect-ratio:3/4;box-shadow:0 18px 50px rgba(27,39,48,.14);
  /* The grid stretches items by default; combined with aspect-ratio that makes
     the box derive its WIDTH from the stretched height, which overflows the
     column once the step cards get tall. Centre it instead — same treatment as
     the problem and PCP panels, so all three portraits sit mid-row. */
  align-self:center;width:100%;}
.ms-steps-media img{width:100%;height:100%;object-fit:cover;display:block;}
.ms-step-grid{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:16px;}
.ms-step{position:relative;background:#fff;border:1px solid var(--line);border-radius:16px;padding:30px 26px;overflow:hidden;}
.ms-step-icon{color:var(--cedar);margin-bottom:16px;display:block;}
.ms-step-num{position:absolute;top:16px;right:20px;font-family:${W};font-weight:800;font-size:2.6rem;color:var(--sand);line-height:1;}
.ms-step h3{font-size:1.2rem;margin-bottom:10px;padding-right:60px;}
.ms-step p{color:var(--muted);font-size:.96rem;}

.ms-trade{background:var(--harbour);color:#fff;min-height:100vh;display:flex;flex-direction:column;justify-content:center;}
.ms-trade-inner{max-width:1156px;width:100%;margin:0 auto;padding:72px 28px;display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:stretch;}
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
.ms-testi{background:var(--paper);min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:78px 28px;}
.ms-testi-inner{max-width:1100px;margin:0 auto;width:100%;}
.ms-faq{background:var(--sand);display:flex;flex-direction:column;justify-content:center;padding:78px 28px;}
.ms-faq-inner{max-width:1100px;margin:0 auto;width:100%;}
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
.ms-quote-inner{max-width:1156px;margin:0 auto;padding:78px 28px;display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:stretch;}
.ms-quote-copy{position:relative;display:flex;flex-direction:column;justify-content:center;
  overflow:hidden;border-radius:20px;padding:44px;
  background-image:linear-gradient(rgba(18,26,32,.58),rgba(18,26,32,.74)),var(--quote-bg);
  background-size:cover;background-position:center;box-shadow:0 18px 50px rgba(27,39,48,.16);}
.ms-quote-copy .ms-h2{margin-bottom:14px;color:#fff;}
.ms-quote-copy>p{color:rgba(255,255,255,.82);font-size:1.08rem;margin-bottom:22px;}
.ms-quote-points{list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:11px;}
.ms-quote-points li{display:flex;align-items:center;gap:10px;font-weight:500;color:rgba(255,255,255,.9);}
/* Grid children default to min-width:auto, so one unwrappable flex row — a long
   bullet, a phone number beside a label — can force its column wider than the
   viewport and give the whole page a horizontal scrollbar on mobile. */
.ms-quote-inner>*,.ms-problem-inner>*,.ms-steps-inner>*,
.ms-trade-inner>*,.ms-why-inner>*,.ms-pcp-inner>*,.ms-energy-inner>*{min-width:0;}
/* The icon stays on the text's first line and the text wraps beside it, so these
   rows must NOT flex-wrap — wrapping puts the checkmark on a line of its own. */
.ms-quote-points li,.ms-trust-chips li,.ms-pcp-points li,.ms-trade-points li{align-items:flex-start;}
.ms-quote-points svg,.ms-trust-chips svg,.ms-pcp-points svg,.ms-trade-points svg{margin-top:3px;}
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
  .ms-hero{min-height:auto;padding:84px 28px;}
  .ms-section,.ms-why,.ms-trade,.ms-testi{min-height:auto;}
  .ms-lede{max-width:none;}
  .ms-why-inner,.ms-pcp-inner,.ms-trade-inner,.ms-problem-inner,.ms-steps-inner,.ms-quote-inner,
  .ms-install-grid{grid-template-columns:1fr;gap:32px;}
  /* Once the two-column panels stack, a portrait photo becomes a full-width slab
     — the steps photo was reaching 1000px tall on a tablet. One landscape ratio
     for all three keeps them the same shape down the page. */
  .ms-problem-media,.ms-pcp-photo,.ms-steps-media{aspect-ratio:16/11;}
  .ms-trade-photo{min-height:280px;}
  .ms-pcp-inner{padding:34px;}
  .ms-types,.ms-why{background-attachment:scroll;}
  .ms-problem-grid,.ms-type-grid,.ms-step-grid,.ms-testi-grid{grid-template-columns:1fr;}
  .ms-gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:180px;}
}
@media (max-width:640px){
  .ms-sticky-bar{display:flex;padding-bottom:calc(12px + env(safe-area-inset-bottom));}
  /* One gutter for every section on a phone. The why, trade and quote wrappers
     carry their own padding and were staying at 28px while everything else
     went to 22, so the text edge jogged 6px between sections. */
  .ms-section{padding:54px 22px;}
  .ms-types,.ms-testi,.ms-faq,.ms-gallery{padding:54px 22px;}
  .ms-hero{padding-inline:22px;}
  .ms-why-inner,.ms-quote-inner{padding:54px 22px;}
  .ms-trade-inner{padding:54px 22px;}
  /* Full-width CTAs on a phone: seven buttons at seven different widths read as
     untidy, and a full-width target is easier to hit with a thumb. */
  .ms-hero-cta .ms-btn,.ms-mid-cta .ms-btn,.ms-pcp-copy .ms-btn,.ms-trade-cta .ms-btn{width:100%;}
  .ms-field-row{grid-template-columns:1fr;}
  /* Two-up rather than one-up: 26 tiles in a single column was a 6,400px scroll
     on a phone. The mosaic still works at two columns. */
  .ms-gallery-grid{grid-template-columns:repeat(2,1fr);grid-auto-rows:170px;gap:10px;}
  .ms-gallery-cap{font-size:.72rem;padding:20px 10px 9px;}
  .ms-lightbox{padding:12px;}
  .ms-lightbox-nav{width:38px;height:38px;font-size:1.5rem;}
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
`;e.s(["StoneLandingPage",0,function(){let[e,t]=(0,a.useState)(0),[o,i]=(0,a.useState)([0]),[l,c]=(0,a.useState)(0),[h,u]=(0,a.useState)(null),g=(0,a.useRef)(null),x=(0,a.useRef)(null),S=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=g.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let s=Array.from(e.querySelectorAll(".ms-section-head,.ms-problem-card,.ms-type-card,.ms-install-card,.ms-gallery-item,.ms-value-list li,.ms-step,.ms-testi-card,.ms-faq-item,.ms-pcp-inner,.ms-quote-form-wrap")),a=new Map;s.forEach(e=>{e.classList.add("ms-reveal");let s=e.parentElement;if(!s)return;let t=a.get(s)??0;a.set(s,t+1),t&&(e.style.transitionDelay=`${Math.min(70*t,280)}ms`)});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("is-in"),t.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});return s.forEach(e=>t.observe(e)),e.classList.add("ms-reveal-armed"),()=>t.disconnect()},[]),(0,a.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||p.length<2)return;let e=setTimeout(()=>i(e=>e.includes(1)?e:[...e,1]),1500),s=setInterval(()=>{t(e=>{let s=(e+1)%p.length;return i(e=>e.includes(s)?e:[...e,s]),s})},5e3);return()=>{clearTimeout(e),clearInterval(s)}},[]);let q=(0,a.useCallback)(()=>{u(null),S.current?.focus(),S.current=null},[]);(0,a.useEffect)(()=>{if(null===h)return;x.current?.focus();let e=e=>{"Escape"===e.key?(e.preventDefault(),q()):"ArrowRight"===e.key?u(e=>((e??0)+1)%k.length):"ArrowLeft"===e.key&&u(e=>((e??0)-1+k.length)%k.length)};document.addEventListener("keydown",e);let s=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",e),document.body.style.overflow=s}},[h,q]);let W=null===h?null:k[h];return(0,s.jsxs)("div",{className:"ms-root",ref:g,children:[(0,s.jsx)("style",{children:D}),(0,s.jsxs)("section",{className:"ms-hero",children:[(0,s.jsx)("div",{className:"ms-hero-bg","aria-hidden":"true",children:p.map((a,t)=>o.includes(t)?(0,s.jsx)("img",{className:"ms-hero-slide"+(t===e?" is-active":""),src:d(a,1600),srcSet:m(a,[1280,1600,1920,2560]),sizes:"100vw",alt:"",fetchPriority:0===t?"high":void 0,loading:0===t?"eager":"lazy",decoding:"async"},a):(0,s.jsx)("div",{className:"ms-hero-slide"},a))}),(0,s.jsx)("div",{className:"ms-hero-inner",children:(0,s.jsxs)("div",{className:"ms-hero-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Stone Veneer · Moncton, NB"}),(0,s.jsxs)("h1",{className:"ms-h1",children:["Natural & manufactured stone at"," ",(0,s.jsx)("span",{className:"ms-accent",children:"rock-bottom prices."})]}),(0,s.jsx)("p",{className:"ms-lede",children:"Compare stone from multiple brands in our Moncton showroom, including traditional mortar-based and screw-on options. Take samples home to see how they look in your space and lighting, with guidance from a knowledgeable team that will help you choose the right stone for your project."}),(0,s.jsxs)("div",{className:"ms-hero-cta",children:[(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Get my free stone quote"}),(0,s.jsxs)(n.TelLink,{className:"ms-btn ms-btn--ghost-light ms-btn--lg",children:[(0,s.jsx)(z,{})," ",N]})]}),(0,s.jsxs)("ul",{className:"ms-trust-chips",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Multiple stone brands in stock"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Samples you can take home"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Based in Moncton, NB · Delivery throughout Atlantic Canada"]})]})]})})]}),(0,s.jsx)("section",{className:"ms-section ms-problem",children:(0,s.jsxs)("div",{className:"ms-problem-inner",children:[(0,s.jsx)("div",{className:"ms-problem-media",children:(0,s.jsx)("img",{src:d(f.src,760),srcSet:m(f.src,[480,760,1e3]),sizes:"(max-width:900px) 92vw, 40vw",alt:f.alt,loading:"lazy",decoding:"async"})}),(0,s.jsxs)("div",{className:"ms-problem-content",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Helping you choose the right stone for your project"}),(0,s.jsxs)("div",{className:"ms-problem-grid",children:[(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(B,{}),(0,s.jsx)("h3",{children:"See the colour in your own light"}),(0,s.jsx)("p",{children:"Stone can look very different in person than it does in a photo. We provide samples you can take home to see how the colour, texture and variation work with the surrounding finishes and lighting in the room or exterior area where it will be installed."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(E,{}),(0,s.jsx)("h3",{children:"The profile should suit the space"}),(0,s.jsx)("p",{children:"Larger stone can overwhelm a smaller area, while the detail and definition of a smaller profile may be lost when viewed from the road. We’ll help you choose a size and style that works with your home, the area being covered and the distance from which it will be viewed."})]}),(0,s.jsxs)("div",{className:"ms-problem-card",children:[(0,s.jsx)(T,{}),(0,s.jsx)("h3",{children:"Installation changes the finished look"}),(0,s.jsx)("p",{children:"Stone installed tightly together for a dry-stack look will have a very different appearance than stone installed with visible mortar joints. The colour and width of the mortar can also change the overall look. We’ll help you compare the options and account for openings, columns, returns and other finishing details when planning and quoting your project."})]})]})]})]})}),(0,s.jsx)("section",{className:"ms-types",children:(0,s.jsxs)("div",{className:"ms-types-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Ideas for your project"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Ways to use stone, inside and out"})]}),(0,s.jsxs)("div",{className:"ms-type-grid",children:[(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Exterior Walls & Accents"}),(0,s.jsx)("p",{children:"Use stone across a full exterior or as an accent on entryways, lower walls, gables and other architectural features. It adds depth, texture and character to both new builds and renovations."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Popular for:"})," Front elevations, entrances, wainscoting and gables"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Fireplaces & Chimneys"}),(0,s.jsx)("p",{children:"Stone can create a focal point around an indoor fireplace or bring warmth and character to an outdoor fireplace or chimney. Options range from a simple surround to a full floor-to-ceiling installation."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Popular for:"})," Fireplace surrounds, hearths, mantels and chimney chases"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Interior Feature Walls"}),(0,s.jsx)("p",{children:"Add texture to entryways, stairwells, basements, bars and living areas without building a full masonry wall. The right profile can give a room anything from a clean, modern look to a more rustic feel."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Popular for:"})," Entryways, stairwells, bars, basements and living rooms"]})]}),(0,s.jsxs)("article",{className:"ms-type-card",children:[(0,s.jsx)("h3",{children:"Outdoor Features & Finishing Details"}),(0,s.jsx)("p",{children:"Use stone to finish porch columns, foundation skirting, garden walls, outdoor kitchens, BBQ islands and pillars. These details can connect the exterior of the home with the surrounding outdoor space."}),(0,s.jsxs)("p",{className:"ms-type-best",children:[(0,s.jsx)("strong",{children:"Popular for:"})," Columns, skirting, outdoor kitchens and landscape features"]})]})]}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Need help choosing? Get a free recommendation"})})]})}),(0,s.jsxs)("section",{className:"ms-section ms-install","aria-labelledby":"ms-install-head",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"How it goes on"}),(0,s.jsx)("h2",{className:"ms-h2",id:"ms-install-head",children:"Mortar-set or screw-on?"}),(0,s.jsx)("p",{className:"ms-install-sub",children:"Stone can be installed one piece at a time with mortar or in panels that screw onto the wall. We carry options for both methods and can help you choose the right one for your project. Both can be installed year-round, although mortar-set installations need to be enclosed and heated during cold weather."})]}),(0,s.jsxs)("div",{className:"ms-install-grid",children:[(0,s.jsxs)("article",{className:"ms-install-card",children:[(0,s.jsxs)("div",{className:"ms-install-media",children:[(0,s.jsx)("img",{src:d(v.src,900),srcSet:m(v.src,[520,900,1200]),sizes:"(max-width:900px) 92vw, 520px",alt:v.alt,loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"Mortar-set"})]}),(0,s.jsx)("h3",{children:"Mortar-set — the traditional method"}),(0,s.jsx)("p",{className:"ms-install-lead",children:"Each piece is installed individually with mortar over a properly prepared surface."}),(0,s.jsxs)("ul",{className:"ms-install-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Available in natural and manufactured stone"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Can have visible mortar joints or a tighter dry-stack look"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Pieces can be cut and fitted around arches, columns, openings and other details"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Allows the installer to adjust the layout piece by piece"]})]}),(0,s.jsxs)("p",{className:"ms-install-best",children:[(0,s.jsx)("strong",{children:"A good option for:"})," Traditional installation and projects with custom details"]})]}),(0,s.jsxs)("article",{className:"ms-install-card",children:[(0,s.jsxs)("div",{className:"ms-install-media",children:[(0,s.jsx)("img",{src:d(j.src,900),srcSet:m(j.src,[520,900,1200]),sizes:"(max-width:900px) 92vw, 520px",alt:j.alt,loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:"Screw-on"})]}),(0,s.jsx)("h3",{children:"Screw-on — a DIY-friendly option"}),(0,s.jsx)("p",{className:"ms-install-lead",children:"The stone comes in panels that screw onto the wall, much like siding."}),(0,s.jsxs)("ul",{className:"ms-install-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Straightforward for contractors and DIYers"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," No mortar joints to finish"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Designed to create the look of individually laid stone"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Available in several colours and stone styles"]})]}),(0,s.jsxs)("p",{className:"ms-install-best",children:[(0,s.jsx)("strong",{children:"A good option for:"})," DIY projects and straightforward installations"]})]})]}),(0,s.jsxs)("aside",{className:"ms-install-note",children:[(0,s.jsx)("strong",{children:"Planning to install it yourself?"}),(0,s.jsx)("span",{children:"Skip the traditional mortar for many stone applications with our easy-to-use stone adhesive. Ask us about the right adhesive and installation method for your project."})]}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Ask which one suits my project"})})]}),(0,s.jsx)("section",{className:"ms-gallery",children:(0,s.jsxs)("div",{className:"ms-gallery-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,s.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"See it on a real building"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Stone, on actual walls"})]}),(0,s.jsx)("ul",{className:"ms-gallery-grid",children:k.map((e,a)=>(0,s.jsx)("li",{className:"ms-gallery-item"+(e.tall?" is-tall":""),children:(0,s.jsxs)("button",{type:"button",className:"ms-gallery-btn",onClick:e=>{S.current=e.currentTarget,u(a)},"aria-label":`View larger: ${e.caption}`,children:[(0,s.jsx)("img",{src:d(e.src,700),srcSet:m(e.src,[400,700,900]),sizes:"(max-width:640px) 92vw, (max-width:900px) 46vw, 32vw",alt:e.alt,loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-gallery-cap",children:e.caption})]})},e.caption))}),(0,s.jsx)("div",{className:"ms-mid-cta",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-btn--lg",href:"#quote",children:"Price my project"})})]})}),W&&(0,s.jsxs)("div",{className:"ms-lightbox",role:"dialog","aria-modal":"true","aria-label":W.caption,onClick:e=>{e.target===e.currentTarget&&q()},children:[(0,s.jsx)("button",{type:"button",className:"ms-lightbox-close",onClick:q,ref:x,"aria-label":"Close",children:"×"}),(0,s.jsx)("button",{type:"button",className:"ms-lightbox-nav ms-lightbox-nav--prev","aria-label":"Previous photo",onClick:()=>u(e=>((e??0)-1+k.length)%k.length),children:"‹"}),(0,s.jsxs)("figure",{className:"ms-lightbox-figure",children:[(0,s.jsx)("img",{src:d(W.src,1400),srcSet:m(W.src,[900,1400,1800]),sizes:"92vw",alt:W.alt,decoding:"async"}),(0,s.jsxs)("figcaption",{children:[(0,s.jsx)("strong",{children:W.caption}),(0,s.jsx)("span",{children:W.brand})]})]}),(0,s.jsx)("button",{type:"button",className:"ms-lightbox-nav ms-lightbox-nav--next","aria-label":"Next photo",onClick:()=>u(e=>((e??0)+1)%k.length),children:"›"})]}),(0,s.jsx)("section",{className:"ms-why",children:(0,s.jsxs)("div",{className:"ms-why-inner",children:[(0,s.jsxs)("div",{className:"ms-why-head",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Why Choose Maritime Stone & Decor?"}),(0,s.jsx)("p",{className:"ms-why-sub",children:"Choosing the right stone is about more than finding a style you like. We’re here to help you compare options, figure out what you need, and make the process as straightforward as possible."})]}),(0,s.jsxs)("ul",{className:"ms-value-list",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(L,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Samples You Can Take Home"}),(0,s.jsx)("p",{children:"See and feel the stone in person, then take samples home to see how they look with your siding, trim, roof, and surroundings."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(E,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Help Choosing the Right Stone"}),(0,s.jsx)("p",{children:"Not sure which style, colour, or finish is right for your project? Our team is here to help you find an option that works for your home."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(F,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Clear, Itemized Quotes"}),(0,s.jsx)("p",{children:"We’ll help you figure out how much stone you need and provide a clear quote so you know what you’re paying for."})]})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(M,{}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Delivery Available"}),(0,s.jsx)("p",{children:"Based in Moncton, NB, we coordinate delivery to your home or job site throughout Atlantic Canada. Stone is heavy — let us move it."})]})]})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-pcp",children:(0,s.jsxs)("div",{className:"ms-pcp-inner",children:[(0,s.jsx)("div",{className:"ms-pcp-photo",children:(0,s.jsx)("img",{src:d(b.src,800),srcSet:m(b.src,[480,800,1e3]),sizes:"(max-width:900px) 92vw, 42vw",alt:b.alt,loading:"lazy",decoding:"async"})}),(0,s.jsxs)("div",{className:"ms-pcp-copy",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"Need It Installed?"}),(0,s.jsx)("h2",{className:"ms-h2",children:"We can help with that, too."}),(0,s.jsx)("p",{children:"The right installation makes all the difference. We work with trusted local masons and can connect you with someone who can help bring your project to life."}),(0,s.jsxs)("ul",{className:"ms-pcp-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Trusted local masons"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Experienced stone installers"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Quality workmanship"]})]}),(0,s.jsx)("p",{className:"ms-pcp-close",children:"Not sure where to start? Ask us and we’ll point you in the right direction."}),(0,s.jsx)("a",{className:"ms-btn ms-btn--primary",href:"#quote",children:"Ask about installation"})]})]})}),(0,s.jsx)("section",{className:"ms-section ms-steps",children:(0,s.jsxs)("div",{className:"ms-steps-inner",children:[(0,s.jsxs)("div",{className:"ms-steps-content",children:[(0,s.jsxs)("div",{className:"ms-section-head",children:[(0,s.jsx)("p",{className:"ms-eyebrow",children:"How It Works"}),(0,s.jsx)("h2",{className:"ms-h2",children:"Getting started is simple."})]}),(0,s.jsxs)("ol",{className:"ms-step-grid",children:[(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"01"}),(0,s.jsx)(L,{}),(0,s.jsx)("h3",{children:"Take Samples Home"}),(0,s.jsx)("p",{children:"Come by the showroom, choose the styles you like, and take samples home to see how they look in your space. Morning light and evening light can make a big difference."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"02"}),(0,s.jsx)(F,{}),(0,s.jsx)("h3",{children:"We’ll Help You Figure It Out"}),(0,s.jsx)("p",{children:"Not sure how much stone you need? Bring us your measurements or plans, and we’ll help you figure out what you need and provide a clear, itemized quote."})]}),(0,s.jsxs)("li",{className:"ms-step",children:[(0,s.jsx)("span",{className:"ms-step-num",children:"03"}),(0,s.jsx)(M,{}),(0,s.jsx)("h3",{children:"Pick Up or We Deliver"}),(0,s.jsx)("p",{children:"Once your order is confirmed, you can pick it up at our Moncton showroom or have it delivered throughout Atlantic Canada. Need a mason? We can connect you with one."})]})]})]}),(0,s.jsx)("div",{className:"ms-steps-media",children:(0,s.jsx)("img",{src:d(y.src,760),srcSet:m(y.src,[480,760,1e3]),sizes:"(max-width:900px) 92vw, 40vw",alt:y.alt,loading:"lazy",decoding:"async"})})]})}),(0,s.jsx)("section",{className:"ms-trade",children:(0,s.jsxs)("div",{className:"ms-trade-inner",children:[(0,s.jsxs)("div",{className:"ms-trade-main",children:[(0,s.jsx)("h2",{className:"ms-h2 ms-h2--light",children:"Masons, Contractors & Builders"}),(0,s.jsx)("p",{className:"ms-trade-body",children:"You already know what you need. What you want from a supplier is accurate quantities, clear pricing, and a quote when you need it."}),(0,s.jsx)("p",{className:"ms-trade-body",children:"Whether you need help choosing the right product, working through quantities, or coordinating delivery to site, we’re here to make the process easier."}),(0,s.jsxs)("ul",{className:"ms-trade-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Responsive, knowledgeable team"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Accurate quantities and estimates"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Competitive pricing"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Job site delivery throughout Atlantic Canada"]})]}),(0,s.jsx)("p",{className:"ms-trade-body",children:"We’re here to help with your next project."}),(0,s.jsx)("div",{className:"ms-trade-cta",children:(0,s.jsxs)(n.TelLink,{className:"ms-btn ms-btn--ghost-light",children:[(0,s.jsx)(z,{})," Call the counter"]})})]}),(0,s.jsxs)("div",{className:"ms-trade-photo",children:[(0,s.jsx)("img",{src:d(w.src,900),srcSet:m(w.src,[520,900,1200]),sizes:"(max-width:900px) 92vw, 46vw",alt:w.alt,loading:"lazy",decoding:"async"}),(0,s.jsx)("span",{className:"ms-photo-tag",children:w.tag})]})]})}),(0,s.jsx)("section",{className:"ms-testi",children:(0,s.jsxs)("div",{className:"ms-testi-inner",children:[(0,s.jsx)("div",{className:"ms-section-head",children:(0,s.jsx)("h2",{className:"ms-h2",children:"What customers say"})}),(0,s.jsxs)("div",{className:"ms-testi-grid",children:[(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Top-quality service. The owner and his staff really know the products they sell. I bought a custom fireplace mantle and could not be happier, and I won’t hesitate to recommend them."}),(0,s.jsx)("figcaption",{children:"Pauline Gavin · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Our company buys a lot of our materials at Maritime Stone & Decor. The staff are very knowledgeable and very quick to return quotes. We recommend them!"}),(0,s.jsx)("figcaption",{children:"Pierre LeBlanc · Contractor"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsx)("blockquote",{children:"Always a great experience with Dave and Heather. Excellent, knowledgeable service with a smile, and they have everything. Highly recommend!"}),(0,s.jsx)("figcaption",{children:"Holly Jensen · Homeowner"})]}),(0,s.jsxs)("figure",{className:"ms-testi-card",children:[(0,s.jsx)("div",{className:"ms-stars","aria-label":"5 out of 5 stars",children:"★★★★★"}),(0,s.jsxs)("blockquote",{children:["We re-did our whole home envelope, including siding, soffit, fascia, windows and doors. They came out fast, quoted quickly, supplied the materials"," ",(0,s.jsx)("em",{children:"and"}),"connected us with a great install crew, and stayed flexible on pricing when surprises came up. A positive experience all around, we’d 100% recommend them."]}),(0,s.jsx)("figcaption",{children:"Gary Marquis · Homeowner"})]})]})]})}),(0,s.jsx)("section",{className:"ms-faq",children:(0,s.jsxs)("div",{className:"ms-faq-inner",children:[(0,s.jsxs)("div",{className:"ms-section-head",style:{textAlign:"center"},children:[(0,s.jsx)("p",{className:"ms-eyebrow ms-eyebrow--center",children:"Before you ask"}),(0,s.jsx)("h2",{className:"ms-h2 ms-h2--center",children:"Stone questions, answered"})]}),(0,s.jsx)("div",{className:"ms-faq-list",children:C.map((e,a)=>{let t=l===a;return(0,s.jsxs)("div",{className:"ms-faq-item"+(t?" is-open":""),children:[(0,s.jsxs)("button",{type:"button",className:"ms-faq-q","aria-expanded":t,onClick:()=>c(t?-1:a),children:[(0,s.jsx)("span",{children:e.q}),(0,s.jsx)("span",{className:"ms-faq-icon","aria-hidden":"true",children:t?"–":"+"})]}),(0,s.jsx)("div",{className:"ms-faq-a",children:(0,s.jsx)("p",{children:e.a})})]},e.q)})})]})}),(0,s.jsx)("section",{className:"ms-quote",id:"quote",children:(0,s.jsxs)("div",{className:"ms-quote-inner",children:[(0,s.jsxs)("div",{className:"ms-quote-copy",children:[(0,s.jsx)("h2",{className:"ms-h2",children:"Get Your Free Stone Quote"}),(0,s.jsx)("p",{children:"Tell us what you’re covering and roughly how big it is. We’ll come back with an itemised, no-obligation number — flats, corners and accessories — plus a couple of profiles worth looking at."}),(0,s.jsxs)("ul",{className:"ms-quote-points",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Free, no-obligation quote"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{}),"Flats & corners itemised separately"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(A,{})," Competitive pricing"]})]}),(0,s.jsxs)(n.TelLink,{className:"ms-quote-call",children:[(0,s.jsx)(z,{})," Prefer to talk? ",N]})]}),(0,s.jsx)("div",{className:"ms-quote-form-wrap",children:(0,s.jsx)(r,{})})]})}),(0,s.jsx)("div",{className:"ms-sticky-bar",children:(0,s.jsx)("a",{className:"ms-btn ms-btn--primary ms-sticky-btn",href:"#quote",children:"Get a free quote"})}),(0,s.jsx)(n.TelLink,{className:"ms-fab","aria-label":`Call Maritime Stone & Decor at ${N}`,children:(0,s.jsx)(z,{})})]})}],69979)}]);