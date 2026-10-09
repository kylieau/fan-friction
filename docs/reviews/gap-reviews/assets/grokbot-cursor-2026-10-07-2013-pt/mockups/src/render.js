const puppeteer=require('/workspace/ff-gap-review/tools/node_modules/puppeteer-core');
(async()=>{const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--allow-file-access-from-files'],headless:'new'});
for(const f of process.argv.slice(2)){const p=await b.newPage();await p.setViewport({width:1306,height:900,deviceScaleFactor:2});
await p.goto('file://'+f,{waitUntil:'networkidle0'});await p.evaluate(()=>document.fonts.ready);await new Promise(r=>setTimeout(r,400));
const out=f.replace('/src/','/').replace('.built.html','.png');await p.screenshot({path:out,fullPage:true});
const ov=await p.evaluate(()=>{const bad=[];document.querySelectorAll('.phone *').forEach(e=>{if(e.scrollWidth>e.clientWidth+1&&getComputedStyle(e).overflow!='visible'&&e.clientWidth>0&&!e.classList.contains('cn'))bad.push(e.className+':'+e.textContent.slice(0,30))});return bad});
console.log(out,'overflow:',JSON.stringify(ov));await p.close();}
await b.close();})();
