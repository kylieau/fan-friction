export async function plans(p){
 await p.evaluate(async()=>{
  const pl=await import('/src/data/personalLog.ts'); const d=await import('/src/data/index.ts');
  const evs=await d.getEventsBetween('la','2026-10-25','2026-11-10'); const by=Object.fromEntries(evs.map(e=>[e.id,e]));
  pl.togglePlan(by['2026-10-31-espn-usc-football-401858509'],'attend');
  pl.togglePlan(by['2026-11-01-espn-rams-401873032'],'attend');
  pl.togglePlan(by['2026-11-01-espn-lafc-761921'],'watch');
  pl.togglePlan(by['2026-11-01-espn-angel-city-401854095'],'interested');
  pl.togglePlan(by['2026-10-31-espn-ucla-football-401858508'],'interested');
  pl.togglePlan(by['2026-11-06-espn-lakers-401909294'],'attend');
 });
}
