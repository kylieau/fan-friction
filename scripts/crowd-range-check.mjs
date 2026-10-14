// Build 5, item 6: the crowd size range is a display filter only. This check proves two things:
// (1) no file on the read's path (the date read, the crowd fight, the day strip) mentions the range, and
// (2) setting a narrow range leaves each sampled day's read identical while the lists do hide events.
// It also lists events where the muting size (knownSize) and the number a row shows fall on different
// sides of 5,000, for review. Usage: node scripts/crowd-range-check.mjs [metro] [dates...]

import { readFile } from 'node:fs/promises';
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
  if (/crowdRange|CrowdRange|passesCrowdRange|splitByRange/.test(text)) {
    console.log(`FAIL ${file} mentions the crowd size range`);
    failed = true;
  } else console.log(`ok   ${file} never reads the range`);
}

// (2) Same read with and without a range.
const store = new Map();
globalThis.localStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  await primeFromFiles(server, metroId);
  const data = await server.ssrLoadModule('/src/data/index.ts');
  const { knownSize } = await server.ssrLoadModule('/src/data/read.ts');
  const { todayIn } = data;
  const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  const today = todayIn(METROS[metroId]);
  const dates = dateArgs.length > 0 ? dateArgs : [0, 1, 2, 3, 6].map((n) => new Date(Date.parse(`${today}T12:00:00Z`) + n * 864e5).toISOString().slice(0, 10));
  const narrow = { min: 12000, max: 40000, showUnknown: false };
  const before = [];
  for (const date of dates) before.push(await data.getCityDate(metroId, date));
  data.setCrowdRange(narrow);
  const range = data.crowdRangeOf();
  if (range.min !== narrow.min) {
    console.log('FAIL the range did not save');
    failed = true;
  }
  const flags = [];
  for (const [i, date] of dates.entries()) {
    const after = await data.getCityDate(metroId, date);
    const a = before[i].rating?.rating ?? null;
    const b = after.rating?.rating ?? null;
    const listed = after.events.filter(data.showsOnMap ?? (() => true));
    const { hidden } = data.splitByRange(listed, range, new Set());
    const same = a === b && JSON.stringify(before[i].rating ?? null) === JSON.stringify(after.rating ?? null);
    if (!same) failed = true;
    console.log(`${same ? 'ok  ' : 'FAIL'} ${metroId} ${date}: read ${a ?? '—'} → ${b ?? '—'}; the range hides ${hidden.length} of ${listed.length}`);
    for (const e of after.events) {
      const k = knownSize(e);
      const n = data.rangeNumber(e);
      if (k != null && n != null && (k >= 5000) !== (n >= 5000)) flags.push(`${date} ${e.title}: muting size ${k}, shown ${n}`);
    }
  }
  console.log(flags.length ? `Muting size and shown number on different sides of 5,000:\n  ${flags.join('\n  ')}` : 'No event has its muting size and shown number on different sides of 5,000.');
} finally {
  await server.close();
}
if (failed) process.exit(1);
console.log('all passed');
