import { chromium } from 'playwright';
const B='https://fan-friction.vercel.app', O='/workspace/ff-gap-review/live/current';
const d=(s)=>({sort:s,label:'',precision:'day'});
const E=(id,date,title,sport,sides,venue,kind,eventId,x={})=>({id:'ex-'+id,eventId,when:d(date),title,tags:[sides[0]],sport,sides,venue,kind,inMetro:x.metroId?false:true,metroId:x.metroId||'la',...x});
const entries=[
 E('kings',"2026-02-25",'Kings vs Golden Knights','Hockey',['Kings'],'Crypto.com Arena','game','2026-02-25-kings'),
 E('ucla',"2026-03-03",'UCLA vs Nebraska',"Men's basketball",['UCLA'],'Pauley Pavilion','game','2026-03-03-ucla',{level:'college'}),
 E('lakers',"2026-03-08",'Lakers vs Knicks','Basketball',['Lakers'],'Crypto.com Arena','game','2026-03-08-lakers',{watched:true}),
 E('dodgers1',"2026-03-30",'Dodgers vs Guardians','Baseball',['Dodgers'],'Dodger Stadium','game','2026-03-30-dodgers'),
 E('angels',"2026-04-04",'Angels vs Mariners','Baseball',['Angels'],'Angel Stadium','game','2026-04-04-angels'),
 E('springsteen',"2026-04-09",'Bruce Springsteen & The E Street Band','Concerts',['Bruce Springsteen & The E Street Band'],'Kia Forum','show','2026-04-09-springsteen'),
 E('habs',"2026-05-25",'Canadiens vs Hurricanes','Hockey',['Canadiens'],'Bell Centre','game','2026-05-25-canadiens',{watched:true,metroId:'montreal'}),
 E('cudi',"2026-06-26",'Kid Cudi','Concerts',['Kid Cudi'],'Crypto.com Arena','show','2026-06-26-kid-cudi'),
 E('dodgers2',"2026-09-20",'Dodgers vs Giants','Baseball',['Dodgers'],'Dodger Stadium','game','2026-09-20-dodgers'),
 E('chargers',"2026-09-20",'Chargers vs Raiders','Football',['Chargers'],'SoFi Stadium','game','2026-09-20-chargers',{watched:true}),
 E('isakov',"2026-09-20",'Gregory Alan Isakov with the Hollywood Bowl Orchestra','Concerts',['Gregory Alan Isakov'],'Hollywood Bowl','show','2026-09-20-isakov'),
 E('hosono',"2026-09-20",'Haruomi Hosono','Concerts',['Haruomi Hosono'],'Greek Theatre','show','2026-09-20-hosono'),
];
const log={version:1,hiddenSeedIds:[],added:entries,plans:[],order:'nights-first'};
const browser=await chromium.launch();
const ctx=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});
const blocked=[];
await ctx.route('**/*',r=>{const m=r.request().method(); if(!['GET','HEAD','OPTIONS'].includes(m)){blocked.push(m+' '+r.request().url());return r.abort();} return r.continue();});
await ctx.addInitScript((l)=>{localStorage.setItem('fan-friction:home-metro',JSON.stringify('la'));localStorage.setItem('fan-friction:tipsDone','true'); if(!sessionStorage.getItem('seeded')){localStorage.setItem('fan-friction:your-nights',JSON.stringify(l));sessionStorage.setItem('seeded','1');}},log);
const page=await ctx.newPage();
