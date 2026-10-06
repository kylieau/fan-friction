// Prints the formula's read for the hand-rated nights next to the hand ratings.
// Hand ratings are comparison only (Kylie, Oct 5), never the target.
// Run: node scripts/formula-table.mts
import { SEED_EVENTS, SEED_RATINGS } from '../src/data/seed/testNights.ts';
import { rateDate, occasionFor } from '../src/data/formula/index.ts';
import { withExpectedDraws } from '../src/data/expectedDraw.ts';

const byDate = new Map<string, typeof SEED_EVENTS>();
// Sized the way the app sizes them: a seeded expected draw, else the calibrated one from past seasons.
for (const e of withExpectedDraws(SEED_EVENTS)) byDate.set(e.date, [...(byDate.get(e.date) ?? []), e]);
console.log('| Night | Hand | Crowd fight | Conditions | Gridlock | Rating | Confidence | Why |');
console.log('|---|---|---|---|---|---|---|---|');
const errors: number[] = [];
for (const r of [...SEED_RATINGS].sort((a, b) => a.date.localeCompare(b.date))) {
  const read = rateDate('la', byDate.get(r.date) ?? []);
  errors.push(Math.abs(read.rating - r.rating));
  const cond = read.reasons.find((x) => x.name === 'Conditions');
  console.log(`| ${r.date} | ${r.rating} | ${read.crowdFight.score.toFixed(1)} | ${cond ? cond.score.toFixed(1) : '—'} | ${read.gridlock.score.toFixed(1)} | ${read.rating} | ${read.confidence} | ${read.why} |`);
}
console.log(`\nMean gap from the hand ratings (comparison only): ${(errors.reduce((a, b) => a + b, 0) / errors.length).toFixed(2)}\n`);
console.log('| Night | Event | Occasion (rule) | Hand | Verdict (rule) | Hand | Top competitor |');
console.log('|---|---|---|---|---|---|---|');
for (const r of [...SEED_RATINGS].sort((a, b) => a.date.localeCompare(b.date))) {
  const read = rateDate('la', byDate.get(r.date) ?? []);
  for (const row of read.crowdFight.events) {
    const top = row.competitors[0];
    console.log(`| ${r.date} | ${row.event.title} | ${occasionFor(row.event)} | ${row.event.assessment?.occasion ?? ''} | ${row.verdict} (${row.score.toFixed(1)}) | ${row.event.assessment?.friction ?? ''} | ${top ? `${top.event.title} · ${top.tier} · t ${top.t.toFixed(2)} · d ${top.d.toFixed(2)}` : ''} |`);
  }
}
