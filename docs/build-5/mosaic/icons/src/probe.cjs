const {chromium}=require('/workspace/ff-gap-review/tools/node_modules/playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--use-gl=swiftshader','--enable-unsafe-swiftshader']});
for(const u of ['/date/2026-10-14','/stubs','/following','/explore?view=list']){
 const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:1});
 await ctx.addInitScript(()=>{localStorage.setItem('fan-friction:home-metro',JSON.stringify('la'));});
 const p=await ctx.newPage();await p.goto('http://127.0.0.1:3101'+u);await p.waitForTimeout(3500);
 const n=u.replace(/[^a-z0-9]/g,'_');await p.screenshot({path:'../probe/'+n+'.png',fullPage:true});
 const cls=await p.evaluate(()=>{const m={};document.querySelectorAll('[class]').forEach(e=>String(e.className).split(/\s+/).forEach(c=>{if(c)m[c]=(m[c]||0)+1}));return Object.entries(m).map(x=>x.join(':')).join(' ')});
 console.log(u,'\n',cls,'\n');await ctx.close();}
await b.close();})();
