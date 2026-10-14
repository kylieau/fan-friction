const fs=require('fs');const {chromium}=require('/workspace/ff-gap-review/tools/node_modules/playwright-core');
const {svg}=require('./icons.cjs');
const T=[['Sports',[['Baseball','baseball'],['Softball','baseball'],['Basketball','basketball'],['Football','football'],['Soccer','soccer-ball'],['Hockey','hockey'],['Lacrosse ✱','x-lacrosse'],['Volleyball','volleyball'],['Tennis','tennis-ball'],['Golf','golf'],['Combat sports','boxing-glove'],['Motorsports','flag-checkered'],['Rodeo','cowboy-hat'],['Horse racing','horse'],['Rugby ✱','x-rugby'],['Cricket','cricket'],['Track & field','person-simple-run'],['Other sport','trophy']]],
['Music',[['Concert','music-note'],['Festival','flag-banner'],['Classical & opera','piano-keys']]],
['Arts',[['Theatre','mask-happy'],['Comedy ✱','x-laugh'],['Dance','sneaker-move'],['Film ✱','x-movie-camera'],['Talk & lecture','presentation'],['Spectacle & magic','magic-wand']]],
['Family',[['Circus ✱','x-big-top'],['Ice show','snowflake'],['Kids & family','balloon']]],
['Fairs & Markets',[['Fair ✱','x-ferris-wheel'],['Expo & convention','users-three'],['Market','storefront']]],
['Pop-up',[['Pop-up','lightning']]],['Watch party',[['Live broadcast','television']]],['Other',[['Other event','ticket']]]];
const ic=(n,s)=>svg(n,s,'');
let h=`<html><head><style>body{margin:0;background:#DAEBFE;font-family:Manrope,system-ui;color:#0F1B2D;padding:28px;width:1544px}
h1{font-size:30px;margin:0 0 4px}p{margin:0 0 16px;color:#4A5568;font-size:17px}.cat{font-size:15px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#4A5568;margin:14px 0 6px}
.g{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}.c{background:#fff;border-radius:12px;padding:12px;display:flex;align-items:center;gap:14px;box-shadow:0 1px 3px rgba(15,27,45,.08)}
.c .n{font-size:16px;font-weight:800}.c .k{font-size:13px;color:#4A5568}.s{display:flex;gap:10px;align-items:center}.lean{font-size:12px;font-weight:800;color:#5C4300;background:#FFD65A;border-radius:5px;padding:1px 6px}</style></head><body>
<h1>1 · Icon sheet <span class="lean">Lean</span> &nbsp;<span style="font-size:16px;color:#4A5568;font-weight:600">Phosphor Icons 2.1.1, regular, MIT, link blue #005A9C. Each shown at 20pt and 40pt (detail).</span></h1><p>36 types in 8 categories. ✱ = custom drawing on Phosphor's 256 grid, 16-unit round stroke (6 icons). Taxonomy still a proposal; icon set and leans approved Oct 14.</p>`;
for(const [c,ts] of T){h+=`<div class="cat">${c}</div><div class="g">`+ts.map(([n,k])=>`<div class="c"><div class="s">${ic(k,20)}${ic(k,40)}</div><div><div class="n">${n}</div><div class="k">${k}</div></div></div>`).join('')+'</div>';}
h+='</body></html>';fs.writeFileSync(__dirname+'/sheet-r2.html',h);
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});const p=await b.newPage({viewport:{width:1600,height:600},deviceScaleFactor:2});await p.goto('file://'+__dirname+'/sheet-r2.html');await p.screenshot({path:__dirname+'/../sheet-r2.png',fullPage:true});await b.close();})();
