const sleep=ms=>page.waitForTimeout(ms);
await page.goto(B+'/event/2026-10-17-tm-vvG10Z_G9R7nPH',{waitUntil:'networkidle'}); await sleep(3500);
await page.screenshot({path:`${O}/22-event-detail-top.png`});
const sel=await page.evaluate(()=>{const e=[...document.querySelectorAll('*')].find(e=>/auto|scroll/.test(getComputedStyle(e).overflowY)&&e.scrollHeight>e.clientHeight+20);return e?'.'+[...e.classList].join('.'):null});console.log('SEL',sel);
for(const [re,n] of [[/^See tickets/,'24-event-ticket-line'],[/^UP AGAINST$|^Up against$/i,'25-event-up-against'],[/^Local competition$/,'26-event-local-competition-timeline']]){const l=page.getByText(re).first();console.log(n,await l.count());if(await l.count()){await l.evaluate(e=>e.scrollIntoView({block:'start'}));await sleep(600);await page.screenshot({path:`${O}/${n}.png`});}}
if(sel){const h=await page.evaluate(s=>[document.querySelector(s).scrollHeight,document.querySelector(s).clientHeight],sel);let i=1;for(let y=0;;y+=Math.round(h[1]*.85)){await page.evaluate(([s,y])=>document.querySelector(s).scrollTo(0,y),[sel,y]);await sleep(500);await page.screenshot({path:`${O}/27-event-detail-scroll-0${i++}.png`});if(y+h[1]>=h[0])break;}}
console.log('BLOCKED',blocked);
await ctx.close(); await browser.close();
