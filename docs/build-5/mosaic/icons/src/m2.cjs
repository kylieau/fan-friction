const {chromium}=require('/workspace/ff-gap-review/tools/node_modules/playwright-core');const {svg}=require('./icons.cjs');
const SURF=[['date','/date/2026-10-14','.date-row','.day-row-title'],
];
const SETUP={date:`document.querySelector('.date-row .day-row-title').textContent='Hamilton';document.querySelector('.stub-mini')?.remove()`,stubs:`document.querySelector('.stubs-list').innerHTML='<ul class="log-list"><li><div class="stub-row"><span class="stub-date"><span class="stub-date-wd">Sat</span><span class="stub-date-num">11</span></span><span class="stub-main"><span class="stub-title">Dodgers at Padres</span><span class="stub-venue">Petco Park</span><span class="status-line status-attended">Attended</span></span></div></li></ul>'`,
timeline:`document.querySelector('.local-competition').insertAdjacentHTML('beforeend','<div class="day-timeline"><ul class="bars"><li class="bar-row"><a class="bar-link"><div class="bar-label"><span class="bar-name">Kings<span class="bar-crowd">18k</span></span></div><div class="bar-track"></div></a></li></ul></div>')`};
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});
for(const [n,u,row,ti] of SURF){const ctx=await b.newContext({viewport:{width:390,height:844}});await ctx.addInitScript(()=>localStorage.setItem('fan-friction:home-metro','"la"'));
const p=await ctx.newPage();await p.goto('http://127.0.0.1:3101'+u);await p.waitForTimeout(3000);if(SETUP[n])await p.evaluate(SETUP[n]);
const out=[];for(const va of ['-4px','-3px','-2px','middle','text-bottom']){const r=[];for(const s of [0,14,15,16,17,18,20]){r.push(await p.evaluate(([row,ti,h,va])=>{const R=document.querySelector(row);const T=R.matches(ti)?R:R.querySelector(ti);T.querySelector('.mk')?.remove();if(h){T.insertAdjacentHTML('afterbegin',h);const e=T.querySelector('.mk');e.style.cssText='flex:none;margin-right:5px;vertical-align:'+va}return R.getBoundingClientRect().height.toFixed(2)},[row,ti,s?svg('baseball',s,'mk'):'',va]));}out.push(va+': '+r.join(' '));}
console.log(n,'(none,14,15,16,17,18,20)\n  '+out.join('\n  '));await ctx.close();}
await b.close();})();
