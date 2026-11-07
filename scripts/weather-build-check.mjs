// The weather build's checks (build 7.2, Nov 7, 2026; Kylie's answers to docs/product/weather-data-plan.md):
// (1) observed rows never reach the verdict: with an observed row planted on every forecast key of a city's past
//     dates (absurd numbers, so any leak would move the read), every past date's verdict is byte-identical and
//     `weatherAt` never answers with an observed row, while `weatherAsItWas` does;
// (2) the M3 sentence on real dates in three cities, printed for the report, each a dozen words or fewer and never
//     empty where the city has hourly rows;
// (3) the retractable rooms: every one keeps its weather rows (`isOpenAir`), and the type's four values are the
//     only ones on file.
// Usage: node scripts/weather-build-check.mjs [metro ...]   (default: la boston toronto)

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { primeFromFiles, weatherFromFiles } from './prime-from-files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const metros = process.argv.slice(2).length > 0 ? process.argv.slice(2) : ['la', 'boston', 'toronto'];
let failed = false;
const check = (label, ok) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label}`);
  if (!ok) failed = true;
};

const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const data = await server.ssrLoadModule('/src/data/index.ts');
  const { primeFromRows } = await server.ssrLoadModule('/src/data/catalogCache.ts');
  const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');
  const { isOpenAir } = await server.ssrLoadModule('/src/data/formula/weather.ts');

  // (3) The roofs.
  const values = new Set(Object.values(VENUES).map((v) => v.roof));
  check(`roof values on file: ${[...values].sort().join(', ')}`, [...values].every((v) => ['open', 'covered', 'indoor', 'retractable'].includes(v)));
  const retractable = Object.values(VENUES).filter((v) => v.roof === 'retractable');
  check(`${retractable.length} retractable rooms, every one keeps its weather rows`, retractable.length >= 15 && retractable.every((v) => isOpenAir({ place: { type: 'venue', venueId: v.id }, metroId: v.metroId })));

  for (const metroId of metros) {
    await primeFromFiles(server, metroId);
    const today = data.todayIn(METROS[metroId]);
    const addDays = (d, n) => new Date(Date.parse(`${d}T12:00:00Z`) + n * 864e5).toISOString().slice(0, 10);
    const past = [1, 2, 3, 5, 8].map((n) => addDays(today, -n));

    // (1) The verdict before and after observed rows land.
    const before = [];
    for (const date of past) before.push(await data.getCityDate(metroId, date));
    const { hours, days } = await weatherFromFiles(metroId);
    const planted = hours
      .filter((r) => past.includes(r.date) && r.basis === 'forecast')
      .map((r) => ({ ...r, basis: 'observed', capturedAt: new Date().toISOString(), feelsLikeF: 150, tempF: 150, precipProbability: 100, precipMm: 50, code: 95 }));
    primeFromRows(metroId, { hours: planted, days: days.filter((d) => past.includes(d.date) && d.basis === 'forecast').map((d) => ({ ...d, basis: 'observed', capturedAt: new Date().toISOString(), feelsLikeHighF: 150, feelsLikeLowF: 140 })) });
    let leaked = 0;
    let served = 0;
    for (const r of planted) {
      if (data.weatherAt(metroId, r.venueId, r.date, r.hour)?.basis === 'observed') leaked++;
      if (data.weatherAsItWas(metroId, r.venueId, r.date, r.hour)?.basis === 'observed') served++;
    }
    check(`${metroId}: ${planted.length} observed rows planted; weatherAt answered with none, weatherAsItWas with ${served}`, planted.length > 0 && leaked === 0 && served === planted.length);
    for (const [i, date] of past.entries()) {
      const after = await data.getCityDate(metroId, date);
      const a = JSON.stringify(before[i].rating ?? null);
      const b = JSON.stringify(after.rating ?? null);
      check(`${metroId} ${date}: verdict ${before[i].rating?.rating ?? '—'} identical with observed rows in the cache`, a === b);
    }

    // (2) The sentence on real dates.
    const dates = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12].map((n) => addDays(today, n));
    let written = 0;
    for (const date of dates) {
      const hourly = data.cityHourly(metroId, date);
      const s = data.weatherSentence(metroId, date, hourly, 19);
      if (hourly.length > 0) {
        written++;
        const words = s ? s.split(/\s+/).length : 0;
        check(`${metroId} ${date}: "${s}" (${words} words)`, Boolean(s) && words <= 16);
      } else console.log(`     ${metroId} ${date}: no hourly rows, no sentence`);
    }
    check(`${metroId}: sentences on ${written} of ${dates.length} dates`, written > 0);
  }
} finally {
  await server.close();
}
if (failed) process.exit(1);
console.log('all passed');
