const sleep=ms=>page.waitForTimeout(ms);
const snip=async()=>(await page.innerText('body')).replace(/\n+/g,' | ').slice(0,300);
const shot=async(n,o={})=>{await page.screenshot({path:`${O}/${n}.png`,...o});console.log('SHOT',n,'|',await snip());};
const scroller=async(sel)=>{const els=await page.$$(sel);return els[0];};
async function scrollShots(prefix,sel){
  const h=await page.evaluate(s=>{const e=document.querySelector(s);return e?[e.scrollHeight,e.clientHeight]:null},sel);
  console.log('SCROLL',prefix,h); if(!h)return;
  let i=1; for(let y=0;y<h[0];y+=Math.round(h[1]*0.85)){await page.evaluate(([s,y])=>document.querySelector(s).scrollTo(0,y),[sel,y]);await sleep(600);await shot(`${prefix}-${String(i).padStart(2,'0')}`);i++; if(y+h[1]>=h[0])break;}
  await page.evaluate(s=>document.querySelector(s).scrollTo(0,0),sel);
}
// Home
await page.goto(B+'/',{waitUntil:'networkidle'}); await sleep(3500);
await shot('01-home-top');
await scrollShots('02-home-scroll','.home-page');
// tab bar
const nav=page.locator('nav').last(); console.log('NAVCOUNT',await page.locator('nav').count());
await nav.screenshot({path:`${O}/90-tabbar-closeup.png`}).catch(e=>console.log('NAVERR',e.message));
await page.screenshot({path:`${O}/91-tabbar-bottom-crop.png`,clip:{x:0,y:744,width:390,height:100}});
// Explore
await page.goto(B+'/explore',{waitUntil:'networkidle'}); await sleep(5000);
await shot('10-explore-map-default');
console.log('SHEETCLS',await page.$$eval('[class*=sheet]',a=>a.map(x=>x.className.toString()).slice(0,10)));
const handle=page.locator('[class*=sheet-handle],[class*=grabber],[class*=handle]').first();
if(await handle.count()){await handle.click().catch(()=>{});await sleep(1200);await shot('11-explore-sheet-toggled');}
await page.goto(B+'/explore',{waitUntil:'networkidle'}); await sleep(5000);
const chip=page.getByText('Jack Johnson',{exact:true}).first();
if(await chip.count()){await chip.click().catch(e=>console.log('CHIPERR',e.message));await sleep(1500);await shot('12-explore-chip-card-tapped');}
await page.goto(B+'/explore',{waitUntil:'networkidle'}); await sleep(5000);
await page.getByRole('button',{name:'Why this read'}).click().catch(e=>console.log('WHYERR',e.message)); await sleep(1500);
await shot('13-explore-why-read-box');
// Event: find one with ticket line
const cands=['/date/2026-10-16?event=2026-10-16-espn-lakers-401898719','/date/2026-10-13?event=2026-10-13-espn-kings-401892502','/date/2026-10-17?event=2026-10-17-tm-vv170Z_FGkM0q1JB','/date/2026-10-16?event=2026-10-16-tm-vv170Z_7Gkz5H4zw','/date/2026-10-14?event=2026-10-14-mlb-849811'];
let best=null;
for(const c of cands){await page.goto(B+c,{waitUntil:'networkidle'});await sleep(2500);const t=await page.innerText('body');const s=(/Prices from/.test(t)?2:0)+(/Local competition|Up against/.test(t)?1:0);console.log('CAND',c,s);if(!best||s>best[1])best=[c,s];if(s==3)break;}
await page.goto(B+best[0],{waitUntil:'networkidle'}); await sleep(3000);
await shot('20-event-top');
const esel=await page.evaluate(()=>{const e=[...document.querySelectorAll('*')].find(e=>/auto|scroll/.test(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+20);return e?'.'+[...e.classList].join('.'):null});
console.log('ESEL',esel); if(esel) await scrollShots('21-event-scroll',esel);
const tk=page.getByText(/Prices from/).first(); if(await tk.count()){await tk.scrollIntoViewIfNeeded();await sleep(500);await shot('22-event-ticket-line');}
const lc=page.getByText(/^Local competition/).first(); if(await lc.count()){await lc.evaluate(e=>e.scrollIntoView({block:'start'}));await sleep(500);await shot('23-event-local-competition');}
// Favorites
await page.goto(B+'/favorites',{waitUntil:'networkidle'}); await sleep(3000); await shot('30-favorites');
const fsel=await page.evaluate(()=>{const e=[...document.querySelectorAll('*')].find(e=>/auto|scroll/.test(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+20);return e?'.'+[...e.classList].join('.'):null});
if(fsel) await scrollShots('31-favorites-scroll',fsel);
// You
await page.goto(B+'/you',{waitUntil:'networkidle'}); await sleep(3000);
await shot('40-you-my-stubs');
const ysel=async()=>page.evaluate(()=>{const e=[...document.querySelectorAll('*')].find(e=>/auto|scroll/.test(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+20);return e?'.'+[...e.classList].join('.'):null});
let s1=await ysel(); if(s1) await scrollShots('41-you-my-stubs-scroll',s1);
await page.getByRole('button',{name:'Watched',exact:true}).first().click().catch(()=>{}); await sleep(1000); await shot('42-you-my-stubs-filter-watched');
await page.getByText('Following',{exact:true}).first().click(); await sleep(2000); await shot('50-you-following');
await page.getByText('Stats',{exact:true}).first().click(); await sleep(2500); await shot('60-you-stats-top');
s1=await ysel(); if(s1) await scrollShots('61-you-stats-scroll',s1);
console.log('BLOCKED_NONGET',blocked.length?blocked:'none');
await ctx.close(); await browser.close();
