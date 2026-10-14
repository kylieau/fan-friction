const fs=require('fs');const {chromium}=require('/workspace/ff-gap-review/tools/node_modules/playwright-core');
const {svg}=require('./icons.cjs');
const O=__dirname+'/../';
function I(n,s=20,cls='mk-ti'){return svg(n,s,cls);}
const EXTRA=`<style id="mkx">.mk-ti{flex:none;vertical-align:-4px;margin-right:5px}.bar-name .mk-ti,.crowd-name .mk-ti{margin-right:0}
.mk-ex{position:fixed;top:6px;right:8px;z-index:9999;font:800 11px Manrope,system-ui;color:#5C4300;background:#FFF4C2;border:1px dashed #E3A600;border-radius:5px;padding:1px 6px}
.mk-tcol{display:flex;flex-direction:column;align-items:flex-start;gap:4px}</style><span class="mk-ex">EXAMPLE data</span>`;
const pre=`document.body.insertAdjacentHTML('beforeend',${JSON.stringify(EXTRA)});`;
const ROWS=[ // time,title,venue,size,icon
 ['7:00 pm','Golden Knights at Kings','Crypto.com Arena','18k','hockey'],
 ['7:30 pm','Hamilton','Hollywood Pantages','2.7k','mask-happy'],
 ['8:00 pm','Phoebe Bridgers','Hollywood Bowl','17k','music-note'],
 ['8:00 pm','Cedric The Entertainer','Peacock Theater','7k','x-laugh'],
 ['10:00 pm','Warehouse Pop-up','Arts District','','lightning']];
const ICONS=Object.fromEntries(['baseball','hockey','mask-happy','music-note','x-laugh','lightning','snowflake','soccer-ball','basketball','football','x-big-top','flag-banner','x-movie-camera','x-ferris-wheel','television','ticket'].map(n=>[n,I(n,18)]));
const I14=Object.fromEntries(Object.keys(ICONS).map(n=>[n,I(n,12,'crowd-type')]));
const I16h=Object.fromEntries(Object.keys(ICONS).map(n=>[n,I(n,18)]));
const J=x=>JSON.stringify(x);
// rows in Explore list / day list
const listJS=(alt)=>`const IC=${J(ICONS)};const R=${J(ROWS)};
/*x*/const day=document.querySelector('.day-list');const base=day.querySelector('.day-row');
R.forEach(r=>{const n=base.cloneNode(true);n.querySelector('.day-row-time').textContent=r[0];n.querySelector('.day-row-title').textContent=r[1];n.querySelector('.day-row-venue').textContent=r[2];n.querySelector('.event-tags').innerHTML='';const c=n.querySelector('.crowd-figure');if(r[3])c.lastChild.textContent=r[3];else c.remove();n.dataset.ic=r[4];day.appendChild(n)});
base.dataset.ic='baseball';
document.querySelectorAll('.day-row').forEach(n=>{const ic=IC[n.dataset.ic||'baseball'];${alt?
`const t=n.querySelector('.day-row-time');t.classList.add('mk-tcol');t.insertAdjacentHTML('beforeend',ic.replace('mk-ti','mk-ti mk-nomargin'))`:
`n.querySelector('.day-row-title').insertAdjacentHTML('afterbegin',ic)`}});`;
const FX=(sel,sz,va)=>`document.querySelectorAll('${sel} .mk-ti').forEach(e=>{e.setAttribute('width',${sz});e.setAttribute('height',${sz});e.style.verticalAlign='${va}'});`;
const shots=[];const S=(name,url,js,o={})=>shots.push({name,url,js,...o});
S('explore-list-lean','/explore?view=list',pre+listJS(false));
// map chip
S('map-chip-lean','/explore',pre+`const IC=${J(I14)};const c=document.querySelector('.crowd-label');c.querySelector('.crowd-type').outerHTML=IC['baseball'];
const add=(name,meta,ic,x,y)=>{const n=c.cloneNode(true);n.classList.remove('selected');n.querySelector('.crowd-name-text').textContent=name;n.querySelector('.crowd-type').outerHTML=IC[ic];n.querySelector('.crowd-meta span').textContent=meta;n.style.transform='translate(-50%, -50%) translate('+x+'px, '+y+'px)';c.parentElement.appendChild(n)};
add('Kings','7:00 pm · 18k','hockey',110,330);add('Phoebe Bridgers','8:00 pm · 17k','music-note',250,250);add('Hamilton','7:30 pm · 2.7k','mask-happy',120,470);add('Warehouse Pop-up','10:00 pm','lightning',270,560);`,{map:true});
// date page: lineup + timeline
const TL=[['Dodgers NLCS G3','55k','baseball',30,62],['Kings','18k','hockey',40,70],['Hamilton','2.7k','mask-happy',45,72],['Phoebe Bridgers','17k','music-note',50,80],['Warehouse Pop-up','','lightning',75,95]];
S('date-page-lean','/date/2026-10-14',pre+`const IC=${J(ICONS)};const R=${J(ROWS)};const TL=${J(TL)};
const list=document.querySelector('.date-list');const base=list.querySelector('.date-row');base.querySelector('.stub-mini')?.remove();
R.slice(0,4).forEach(r=>{const n=base.cloneNode(true);n.querySelector('.day-row-time').textContent=r[0];n.querySelector('.day-row-title').textContent=r[1];n.querySelector('.day-row-venue').textContent=r[2];n.querySelector('.event-tags').innerHTML='';const c=n.querySelector('.crowd-figure');c.lastChild.textContent=r[3];n.dataset.ic=r[4];list.appendChild(n)});
base.dataset.ic='baseball';list.querySelectorAll('.date-row').forEach(n=>n.querySelector('.day-row-title').insertAdjacentHTML('afterbegin',IC[n.dataset.ic]));
document.querySelector('.read-tile')?.remove();
const lc=document.querySelector('.local-competition');const cm=document.querySelector('.crowd-figure svg').outerHTML;
{const ls=lc.querySelector('.local-summary');[...ls.childNodes].forEach(n=>{const t=n.textContent.trim();if(n.nodeType==3&&(t==='1'||t==='event'))n.textContent=''});ls.lastChild.textContent=' 5 events · from 5:00 pm';}
const ax=['4p','5p','6p','7p','8p','9p','10p','11p','12a'].map((t,i)=>'<span style="left:'+(i*12.5)+'%">'+t+'</span>').join('');
lc.insertAdjacentHTML('beforeend','<div class="day-timeline"><div class="axis">'+ax+'</div><ul class="bars">'+TL.map(t=>'<li class="bar-row"><a class="bar-link"><div class="bar-label"><span class="bar-name">'+IC[t[2]]+t[0]+(t[1]?'<span class="bar-crowd">'+cm.replace(/class="[^"]*"/,'class="crowd-mark"')+t[1]+'</span>':'')+'</span></div><div class="bar-track"><span class="bar bar-none" style="left:'+t[3]+'%;width:'+(t[4]-t[3])+'%"></span></div></a></li>').join('')+'</ul></div>');
document.querySelector('.date-list').closest('section,div').scrollIntoView();`,{h:1300});
// event page title
S('event-title-lean','/event/2026-10-14-mlb-849811',pre+`const h=document.querySelector('h1');h.insertAdjacentHTML('afterbegin',${J(I16h['baseball'])});`);
S('event-title-pop','/event/2026-10-14-mlb-849811',pre+`const h=document.querySelector('h1');h.textContent='Phoebe Bridgers: The Lost Tour';h.insertAdjacentHTML('afterbegin',${J(I16h['music-note'])});[...document.querySelectorAll('*')].forEach(e=>{if(e.children.length==0&&/Dodger Stadium · 5:00 pm/.test(e.textContent))e.textContent='Hollywood Bowl · 8:00 pm'});`);
// stubs
const ST=[['Sat','11','Dodgers at Padres','Petco Park · Away','baseball'],['Fri','3','Phoebe Bridgers: The Lost Tour','Hollywood Bowl','music-note'],['Sun','28','Disney On Ice','Crypto.com Arena','snowflake'],['Thu','18','Cedric The Entertainer','Peacock Theater','x-laugh'],['Sat','6','LAFC at Galaxy','Dignity Health Sports Park','soccer-ball'],['Sun','31','ComplexCon','Long Beach Convention Center','flag-banner'],['Sat','23','Circus Vargas','Westfield Topanga','x-big-top']];
S('stubs-lean','/stubs',pre+`/*s*/const IC=${J(ICONS)};const ST=${J(ST)};const tile=document.querySelector('.log-score')?.outerHTML||'';
const list=document.querySelector('.stubs-list');list.innerHTML='<div class="timeline"><section class="timeline-group"><h3 class="timeline-heading month-band">October</h3><ul class="log-list">'+ST.map(s=>'<li><div class="stub-row"><a class="stub-row-link"></a><span class="stub-date"><span class="stub-date-wd">'+s[0]+'</span><span class="stub-date-num">'+s[1]+'</span></span><span class="stub-main"><span class="stub-title">'+IC[s[4]]+s[2]+'</span><span class="stub-venue">'+s[3]+'</span><span class="status-line status-attended">Attended</span></span></div></li>').join('')+'</ul></section></div>';`);
// following rows + search
const FIC={Dodgers:'baseball',Angels:'baseball',Lakers:'basketball',Clippers:'basketball',Kings:'hockey',Ducks:'hockey',Galaxy:'soccer-ball',LAFC:'soccer-ball','Angel City':'soccer-ball',Rams:'football',Chargers:'football',Sparks:'basketball'};
S('following-lean','/following',pre+`const IC=${J(ICONS)};const F=${J(FIC)};document.querySelectorAll('.fav-row').forEach(r=>{const t=r.querySelector('.log-title');const k=F[t.textContent.trim()];if(k)t.insertAdjacentHTML('afterbegin',IC[k])});`);
S('search-lean','/following',pre+`const IC=${J(ICONS)};const F=${J(FIC)};const i=document.querySelector('.search-field input');i.value='La';
const rows=[...document.querySelectorAll('.fav-li')];rows.forEach(li=>{const t=li.querySelector('.log-title').textContent.trim();if(!/^La/i.test(t))li.style.display='none'});
const base=rows.find(li=>/Lakers/.test(li.textContent));const add=(name,sub,ic,mark)=>{const n=base.cloneNode(true);n.style.display='';n.querySelector('.log-title').textContent=name;n.querySelector('.log-facts').textContent=sub;n.querySelector('.fav-mark').textContent=mark;n.dataset.ic=ic;base.parentElement.appendChild(n)};
add('Lana Del Rey','Artist','music-note','LDR');add('Laugh Factory','Venue · Comedy','x-laugh','LF');add('LA County Fair','Festival · Fair','x-ferris-wheel','LACF');
document.querySelectorAll('.fav-li').forEach(li=>{if(li.style.display==='none')return;const t=li.querySelector('.log-title');const k=li.dataset.ic||F[t.textContent.trim()];if(k)t.insertAdjacentHTML('afterbegin',IC[k])});`);
shots.forEach(x=>{if(x.name=='stubs-lean')x.js+=FX('.stub-row',16,'-3px');if(x.name=='date-page-lean')x.js+=FX('.bar-row',17,'-4px');});
S('live-list','/explore?view=list','');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});const only=process.argv[2];
for(const s of shots){if(only&&!s.name.startsWith(only))continue;
 const ctx=await b.newContext({viewport:{width:390,height:s.h||844},deviceScaleFactor:2});
 await ctx.addInitScript(()=>{localStorage.setItem('fan-friction:home-metro',JSON.stringify('la'));});
 const p=await ctx.newPage();await p.goto('http://127.0.0.1:3101'+s.url);await p.waitForTimeout(s.map?8000:3500);
 try{if(s.js)await p.evaluate(s.js);}catch(e){console.log('ERR',s.name,e.message)}
 await p.waitForTimeout(400);await p.screenshot({path:O+'phones-r3/'+s.name+'.png'});console.log('ok',s.name);await ctx.close();}
await b.close();})();
