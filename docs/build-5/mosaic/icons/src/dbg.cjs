const {chromium}=require('/workspace/ff-gap-review/tools/node_modules/playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});const c=await b.newContext();await c.addInitScript(()=>localStorage.setItem('fan-friction:home-metro','"la"'));const p=await c.newPage();await p.goto('http://127.0.0.1:3101/date/2026-10-14');await p.waitForTimeout(3000);
console.log(await p.evaluate(()=>JSON.stringify([...document.querySelector('.local-summary').childNodes].map(n=>n.nodeType==3?n.textContent:'<'+n.nodeName+'>'))));await b.close();})();
