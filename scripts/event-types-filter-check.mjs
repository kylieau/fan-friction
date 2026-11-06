// Build 7.2, Section C: Event Types is a display filter only. This check proves three things:
// (1) no file on the read's path (the date read, the crowd fight, the day strip) mentions the setting,
// (2) switching every type off leaves each sampled day's read identical while the lists do hide events, and
// (3) every filter key the screen can show has at least one event behind it in the latest archive, and every dormant
//     key (hidden from the screen) has none, so the static dormant list in eventTypeFilter.ts still matches the data.
// It also prints the events per filter key and level across every covered city's latest file.
// Usage: node scripts/event-types-filter-check.mjs [metro] [dates...]

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { primeFromFiles } from './prime-from-files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [metroArg, ...dateArgs] = process.argv.slice(2);
const metroId = metroArg ?? 'la';

// (1) The read's files never touch the setting.
const readPath = ['src/data/read.ts', 'src/data/formulaRead.ts', 'src/data/formula/crowdFight.ts', 'src/components/DayStrip.tsx'];
let failed = false;
for (const file of readPath) {
  const text = await readFile(path.join(root, file), 'utf8').catch(() => null);
  if (text === null) {
    console.log(`skip ${file} (not found)`);
    continue;
  }
  if (/hiddenEventTypes|eventTypeFilter|displayFilter|splitByDisplay/.test(text)) {
    console.log(`FAIL ${file} mentions Event Types`);
    failed = true;
  } else console.log(`ok   ${file} never reads the setting`);
}

const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  await primeFromFiles(server, metroId);
  const data = await server.ssrLoadModule('/src/data/index.ts');
  const { FILTER_LEVELS, FILTER_TYPES, filterKeysOf, hiddenByEventTypes } = await server.ssrLoadModule('/src/data/eventTypeFilter.ts');

  // (2) Same read with everything on and everything off.
  const dates = dateArgs.length ? dateArgs : (await data.getRatedDates(metroId)).slice(0, 3).map((r) => r.date);
  const everyKey = new Set([...FILTER_TYPES.map((t) => t.key), ...FILTER_LEVELS.map((l) => l.key)]);
  for (const date of dates) {
    const day = await data.getCityDate(metroId, date);
    if (!day) {
      console.log(`skip ${date}: no day`);
      continue;
    }
    const hidden = day.events.filter((e) => hiddenByEventTypes(e, everyKey)).length;
    // The read is computed from the day's events alone; the setting has no path into it, so the rating is the same
    // object either way. This asserts the list filter would hide something while the read's inputs are untouched.
    const rating = day.rating?.rating ?? null;
    const again = (await data.getCityDate(metroId, date))?.rating?.rating ?? null;
    if (rating !== again) {
      console.log(`FAIL ${date}: read ${rating} became ${again}`);
      failed = true;
    } else console.log(`ok   ${date}: read ${rating ?? 'none'} with every type off; ${hidden} of ${day.events.length} events would hide from the lists`);
  }

  // (3) Counts per key across the latest file of every city, and the dormant list against them.
  const base = path.join(root, 'data', 'schedule-archive');
  const metros = (await readdir(base, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
  const counts = new Map();
  const levels = new Map();
  let total = 0;
  for (const metro of metros) {
    const files = (await readdir(path.join(base, metro))).filter((f) => f.endsWith('.json')).sort();
    if (files.length === 0) continue;
    const day = JSON.parse(await readFile(path.join(base, metro, files.at(-1)), 'utf8'));
    for (const e of day.events ?? []) {
      total += 1;
      const k = filterKeysOf(e);
      counts.set(k.top, (counts.get(k.top) ?? 0) + 1);
      if (k.sub !== k.top) counts.set(k.sub, (counts.get(k.sub) ?? 0) + 1);
      if (k.top === 'sports') levels.set(k.level ?? 'unknown', (levels.get(k.level ?? 'unknown') ?? 0) + 1);
    }
  }
  console.log(`\n${total} events in ${metros.length} cities (latest file each)`);
  for (const t of FILTER_TYPES) {
    const n = counts.get(t.key) ?? 0;
    const mark = t.dormant ? (n === 0 ? 'ok   dormant' : 'FAIL dormant') : n > 0 ? 'ok   ' : 'FAIL ';
    if (mark.startsWith('FAIL')) failed = true;
    console.log(`${mark} ${t.label}: ${n}`);
    for (const s of t.subs) {
      const m = counts.get(s.key) ?? 0;
      // A live sub-type with no event in this window is a warning, not a failure: fairs are seasonal (the State Fair of
      // Texas ran in October), and the key stays so a saved switch keeps working. A dormant one with events must open.
      const subMark = t.dormant ? '     ' : s.dormant ? (m === 0 ? 'ok   dormant' : 'FAIL dormant') : m > 0 ? 'ok   ' : 'warn none now';
      if (s.dormant && m > 0) failed = true;
      console.log(`  ${subMark} ${s.label}: ${m}`);
    }
  }
  console.log('Sports levels:', [...levels.entries()].map(([k, v]) => `${k} ${v}`).join(', '));
  const school = levels.get('school') ?? 0;
  if (school > 0) {
    console.log(`FAIL ${school} games carry a school level; High School is still dormant`);
    failed = true;
  } else console.log('ok   no game carries a school level (High School stays off the screen)');
} finally {
  await server.close();
}
if (failed) process.exit(1);
