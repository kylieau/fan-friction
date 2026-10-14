const {chromium}=require('/workspace/ff-gap-review/tools/node_modules/playwright-core');const {svg}=require('./icons.cjs');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
const ctx=await b.newContext({viewport:{width:390,height:844}});await ctx.addInitScript(()=>localStorage.setItem('fan-friction:home-metro','"la"'));
const p=await ctx.newPage();await p.goto('http://127.0.0.1:3101/explore');await p.waitForTimeout(8000);
for(const s of [10,12,13,14,15,16,18,20]){const r=await p.evaluate(([h])=>{const c=document.querySelector('.crowd-label');c.querySelector('.crowd-type').outerHTML=h;const n=c.querySelector('.crowd-name').getBoundingClientRect();const r=c.getBoundingClientRect();return [r.width,r.height,n.height].map(x=>x.toFixed(1)).join(',')},[svg('baseball',s,'crowd-type')]);console.log(s,r);}
await b.close();})();
