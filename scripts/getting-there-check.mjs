// Build 7.2, Section E: Getting There is a view over the verdict's own Gridlock hours and a display setting. This
// check proves four things: (1) no file on the read's path names the feature; (2) a day's verdict is identical with
// the setting on and off; (3) each area's worst strip cell is the zone's Gridlock score, so the card can never
// disagree with the verdict; (4) how many of a city's areas carry a name on file (ZONE_NAMES) versus a venue's name.
// Usage: node scripts/getting-there-check.mjs [metro] [dates...]

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { primeFromFiles } from './prime-from-files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [metroArg, ...dateArgs] = process.argv.slice(2);
const metroId = metroArg ?? 'la';
let failed = false;

// (1) The read's files never touch the feature.
for (const file of ['src/data/read.ts', 'src/data/formulaRead.ts', 'src/data/formula/crowdFight.ts', 'src/components/DayStrip.tsx']) {
  const text = await readFile(path.join(root, file), 'utf8').catch(() => null);
  if (text === null) continue;
  if (/gettingThere|dateRoads|roadHours|GettingThere/.test(text)) {
    console.log(`FAIL ${file} mentions Getting There`);
    failed = true;
  } else console.log(`ok   ${file} never reads the feature`);
}

const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  await primeFromFiles(server, metroId);
  const data = await server.ssrLoadModule('/src/data/index.ts');
  const { dateGridlock, rainyFor } = await server.ssrLoadModule('/src/data/formula/index.ts');
  const { zonesFor } = await server.ssrLoadModule('/src/data/formula/gridlock.ts');
  const dates = dateArgs.length ? dateArgs : (await data.getRatedDates(metroId)).slice(0, 3).map((r) => r.date);

  // (2) Same verdict with the switch off and on.
  const before = [];
  for (const date of dates) before.push(await data.getCityDate(metroId, date));
  data.setGettingThere(true);
  if (!data.gettingThereOn(data.getPersonalLog())) {
    console.log('FAIL the switch did not save');
    failed = true;
  }
  for (const [i, date] of dates.entries()) {
    const after = await data.getCityDate(metroId, date);
    if (!before[i] || !after) continue;
    const same = JSON.stringify(before[i].rating ?? null) === JSON.stringify(after.rating ?? null);
    if (!same) failed = true;
    console.log(`${same ? 'ok  ' : 'FAIL'} ${metroId} ${date}: verdict ${after.rating?.rating ?? 'none'} with Getting There off and on`);

    // (3) The worst cell equals the zone's score; the areas match the formula's zones with events.
    const roads = data.dateRoads(metroId, date, after.events);
    const g = dateGridlock(metroId, date, after.events, rainyFor(after.events));
    if (roads.areas.length !== g.zones.length) {
      console.log(`FAIL ${date}: ${roads.areas.length} areas but ${g.zones.length} scored zones`);
      failed = true;
    }
    for (const area of roads.areas) {
      const worst = Math.max(...area.cells.map((c) => c.value));
      const zone = g.zones.find((z) => z.zone.id === area.id);
      const ok = zone && Math.abs(worst - zone.score) < 1e-9;
      if (!ok) failed = true;
      console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${area.name}: worst cell ${worst.toFixed(2)}, zone score ${zone?.score.toFixed(2) ?? 'none'}, ${area.cue}${area.window ? ` ${data.roadSpan(area.window.from, area.window.to)}` : ''}${area.notes.length ? ` (${area.notes.length} note${area.notes.length === 1 ? '' : 's'})` : ''}`);
    }
    console.log(`     summary: ${roads.summary}`);
  }

  // (4) Named areas versus venue-named ones, this city and every covered city.
  const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  const { COVERED_METRO_IDS } = data;
  let named = 0;
  let total = 0;
  const thin = [];
  for (const id of COVERED_METRO_IDS ?? Object.keys(METROS)) {
    const zones = zonesFor(id, dates[0] ?? '2026-11-06');
    const { VENUES } = data;
    const withName = zones.filter((z) => !Object.values(VENUES).some((v) => v.id === z.id && v.names.some((n) => n.name === z.name))).length;
    named += withName;
    total += zones.length;
    if (zones.length > 0 && withName / zones.length < 0.5) thin.push(`${id} ${withName}/${zones.length}`);
  }
  console.log(`\nAreas with a name on file: ${named} of ${total} across ${(COVERED_METRO_IDS ?? Object.keys(METROS)).length} cities; cities under half: ${thin.length ? thin.join(', ') : 'none'}`);
} finally {
  await server.close();
}
if (failed) process.exit(1);
console.log('all passed');
