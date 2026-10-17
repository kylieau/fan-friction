// Build 5, item 11: runs the controlled type map over the latest schedule archive for every covered city and
// prints events per type, how many fall to "Event" (other), and those titles, so the keyword list can be checked.
// Also asserts every type has an icon entry. Usage: node scripts/event-types-check.mjs [metro] [--titles]

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const only = process.argv.slice(2).find((a) => !a.startsWith('--'));
const showTitles = process.argv.includes('--titles');
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let failed = false;
try {
  const { EVENT_TYPES, eventType } = await server.ssrLoadModule('/src/data/eventTypes.ts');
  for (const t of EVENT_TYPES) if (!t.icon) (failed = true), console.log(`FAIL ${t.key} has no icon`);
  // 37 since build 5 added "Live screening" (Kylie, Oct 14, 2026).
  if (EVENT_TYPES.length !== 37) (failed = true), console.log(`FAIL ${EVENT_TYPES.length} types, the table has 37`);
  const base = path.join(root, 'data', 'schedule-archive');
  const metros = only ? [only] : (await readdir(base, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name);
  const total = new Map();
  const others = [];
  for (const metro of metros) {
    const files = (await readdir(path.join(base, metro))).filter((f) => f.endsWith('.json')).sort();
    if (files.length === 0) continue;
    const day = JSON.parse(await readFile(path.join(base, metro, files.at(-1)), 'utf8'));
    for (const e of day.events ?? []) {
      const t = eventType(e);
      total.set(t.label, (total.get(t.label) ?? 0) + 1);
      if (t.key === 'other') others.push(`${metro}: ${e.title}${e.audience?.tag ? ` [${e.audience.tag}]` : ''}`);
    }
  }
  const rows = [...total.entries()].sort((a, b) => b[1] - a[1]);
  console.log(rows.map(([label, n]) => `${String(n).padStart(5)}  ${label}`).join('\n'));
  console.log(`\n${others.length} events read "Event" (type other).`);
  if (showTitles) console.log(others.join('\n'));
} finally {
  await server.close();
}
if (failed) process.exit(1);
