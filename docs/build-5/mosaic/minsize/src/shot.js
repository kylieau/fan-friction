const {chromium}=require('/workspace/ff-gap-review/tools/node_modules/playwright-core');
const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--allow-file-access-from-files']});
const ctx=await b.newContext({viewport:{width:390,height:800},deviceScaleFactor:2});
for(const n of fs.readFileSync(__dirname+'/names.txt','utf8').trim().split(' ')){const p=await ctx.newPage();await p.goto('file://'+__dirname+'/'+n+'.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
const r=await p.evaluate(()=>{const s=[],o=[];document.querySelectorAll('body *').forEach(e=>{const cs=getComputedStyle(e);if(e.children.length==0&&e.textContent.trim()&&parseFloat(cs.fontSize)<11)s.push(e.className+':'+cs.fontSize);if(e.scrollWidth>e.clientWidth+1&&cs.overflow!='visible'&&e.clientWidth>0)o.push(e.className+':'+e.textContent.slice(0,25))});return {s,o}});
console.log(n,JSON.stringify(r));await p.screenshot({path:__dirname+'/'+n+'.png',fullPage:true});await p.close();}
await b.close();})();
