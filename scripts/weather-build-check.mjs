// The weather build's checks (build 7.2, Nov 7, 2026; Kylie's answers to docs/archive/proposals/weather-data-plan.md):
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

    // (4) A past date's day card reads what it was (Kylie's Nov 11 default decision; built Nov 19, 2026): on a date
    //     with observed rows on file (two days back; the nightly fetches the last two days the night after), the
    //     as-it-was readers answer observed rows and days while the forecast readers still answer forecasts; on a
    //     date from before the observed fetch began, the as-it-was readers answer nothing and the page keeps the
    //     frozen forecast; the sentence takes the past tense from synthetic rows. Runs before (1) plants fake rows.
    if (metroId === 'la') {
      const seen = addDays(today, -2);
      const wasRange = data.cityRangeAsItWas(metroId, seen);
      const willRange = data.cityForecastRange(metroId, seen);
      check(`${metroId} ${seen}: the city's day as it was is observed (${wasRange?.basis ?? 'none'}: ${wasRange?.feelsLikeHighF ?? '—'} / ${wasRange?.feelsLikeLowF ?? '—'}), the forecast reader still a forecast (${willRange?.basis ?? 'none'})`, wasRange?.basis === 'observed' && willRange?.basis === 'forecast');
      const wasHours = data.cityHourlyAsItWas(metroId, seen);
      const willHours = data.cityHourly(metroId, seen);
      check(`${metroId} ${seen}: ${wasHours.length} observed city hours as it was, ${willHours.length} forecast hours the other way, none mixed`, wasHours.length > 0 && wasHours.every((r) => r.basis === 'observed') && willHours.length > 0 && willHours.every((r) => r.basis === 'forecast'));
      const dayRead = await data.getCityDate(metroId, seen);
      const wasPeaks = data.outdoorPeaksAsItWas(dayRead.events);
      const willPeaks = data.outdoorPeaks(dayRead.events);
      check(`${metroId} ${seen}: ${wasPeaks.length} outdoor peaks as they were beside ${willPeaks.length} forecast peaks (${dayRead.events.length} events)`, (willPeaks.length === 0 || wasPeaks.length > 0) && wasPeaks.every((p) => ['observed', 'reanalysis'].includes(data.weatherAsItWas(metroId, p.venueId, seen, p.hour)?.basis)));
      const old = '2026-10-20';
      const oldRead = await data.getCityDate(metroId, old);
      check(`${metroId} ${old}: before the observed fetch began, nothing as it was (range ${data.cityRangeAsItWas(metroId, old)?.basis ?? 'none'}, ${data.cityHourlyAsItWas(metroId, old).length} hours, ${data.outdoorPeaksAsItWas(oldRead.events).length} peaks), so the page keeps the frozen forecast (${data.cityHourly(metroId, old).length} forecast hours)`, data.cityRangeAsItWas(metroId, old) === undefined && data.cityHourlyAsItWas(metroId, old).length === 0 && data.outdoorPeaksAsItWas(oldRead.events).length === 0 && data.cityHourly(metroId, old).length > 0);
      // Deterministic fixtures: a date with observed city hours only (the day-range call missed) answers hours and no
      // range; a date with forecast rows only answers nothing as it was (the morning after, before the observed fetch).
      const planted = (date, basis, hours) => hours.map((hour) => ({ metroId, venueId: 'city', date, hour, basis, capturedAt: '2026-01-20T00:00:00Z', feelsLikeF: 50 + hour, tempF: 50 + hour, code: 1 }));
      primeFromRows(metroId, { hours: [...planted('2026-01-15', 'observed', [15, 17, 19, 21]), ...planted('2026-01-16', 'forecast', [15, 17, 19, 21])], days: [{ metroId, venueId: 'city', date: '2026-01-16', basis: 'forecast', capturedAt: '2026-01-15T00:00:00Z', feelsLikeHighF: 60, feelsLikeLowF: 40 }] });
      check(`a day with observed city hours only: ${data.cityHourlyAsItWas(metroId, '2026-01-15').length} hours as it was, range ${data.cityRangeAsItWas(metroId, '2026-01-15')?.basis ?? 'none'} (the page still switches on the hours)`, data.cityHourlyAsItWas(metroId, '2026-01-15').length === 4 && data.cityRangeAsItWas(metroId, '2026-01-15') === undefined);
      check(`a day with forecast rows only: nothing as it was (${data.cityHourlyAsItWas(metroId, '2026-01-16').length} hours, range ${data.cityRangeAsItWas(metroId, '2026-01-16')?.basis ?? 'none'}), the forecast readers answer (${data.cityHourly(metroId, '2026-01-16').length} hours, ${data.cityForecastRange(metroId, '2026-01-16')?.basis ?? 'none'})`, data.cityHourlyAsItWas(metroId, '2026-01-16').length === 0 && data.cityRangeAsItWas(metroId, '2026-01-16') === undefined && data.cityHourly(metroId, '2026-01-16').length === 4 && data.cityForecastRange(metroId, '2026-01-16')?.basis === 'forecast');
      const row = (hour, feelsLikeF, extra = {}) => ({ metroId, venueId: 'city', date: seen, hour, basis: 'observed', capturedAt: '2026-11-19T00:00:00Z', feelsLikeF, tempF: feelsLikeF, code: 0, ...extra });
      const cooled = data.weatherSentence(metroId, seen, [row(19, 62), row(20, 58), row(21, 53), row(22, 51), row(23, 50)], 19, 'past');
      check(`past tense, a drop: "${cooled}"`, cooled === 'Clear. Cooled to the low 50s after 9 pm.');
      const warmed = data.weatherSentence(metroId, seen, [row(19, 50), row(21, 55), row(23, 60)], 19, 'past');
      check(`past tense, a rise: "${warmed}"`, warmed === 'Clear. Warmed to the low 60s by 11 pm.');
      const rained = data.weatherSentence(metroId, seen, [row(19, 60, { code: 3 }), row(20, 59, { code: 61, precipMm: 2.4 }), row(23, 58)], 19, 'past');
      check(`past tense, rain that fell: "${rained}"`, rained === 'Overcast. Rain around 8 pm.');
      const dry = data.weatherSentence(metroId, seen, [row(19, 60, { precipMm: 0.2 }), row(23, 58, { precipMm: 0 })], 19, 'past');
      check(`past tense, a trace of rain is not rain: "${dry}"`, dry === 'Clear. Around 60° all evening.');
      const present = data.weatherSentence(metroId, seen, [row(19, 62, { basis: 'forecast', precipProbability: 40, code: 61 }), row(23, 50, { basis: 'forecast' })], 19);
      check(`present tense unchanged: "${present}"`, present === 'Rain. A 40% chance around 7 pm.');
      // The same drop in a Celsius city reads in its own units (Codex, group 17 review: the wording is unit-aware).
      const cooledC = data.weatherSentence('toronto', seen, [{ ...row(19, 62), metroId: 'toronto' }, { ...row(21, 53), metroId: 'toronto' }, { ...row(23, 50), metroId: 'toronto' }], 19, 'past');
      check(`past tense in Celsius: "${cooledC}"`, cooledC === 'Clear. Cooled to the low 10s after 9 pm.');
    }

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
