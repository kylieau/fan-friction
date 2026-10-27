// A Ticketmaster venue id on two rooms in one city places every listing on the first room it meets (Oct 26, 2026:
// Brookside at the Rose Bowl's id sat on the stadium, so its festivals would have read 60,000). Fails on any shared id
// in one city that is not on the list below. Usage: node scripts/shared-ids-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');

/** Deliberate pairs (a room rebuilt or replaced on its site), and pairs still to review (one id is likely wrong). */
const ALLOWED = new Set([
  'red-hat-amphitheater-raleigh|red-hat-amphitheater-raleigh-new', // the replacement room, one block south (2027)
  'san-diego-stadium|snapdragon-stadium', // the same site rebuilt
  'climate-pledge-arena|seattle-center', // to review (BACKLOG)
  'njpac-prudential-hall|prudential-center', // to review (BACKLOG)
]);

const byKey = new Map();
for (const v of Object.values(VENUES)) for (const id of v.ticketmasterIds ?? []) {
  const key = `${v.metroId} ${id}`;
  byKey.set(key, [...(byKey.get(key) ?? []), v.id]);
}
let failed = 0;
for (const [key, rooms] of byKey) {
  if (rooms.length < 2) continue;
  const pair = [...rooms].sort().join('|');
  const ok = ALLOWED.has(pair);
  if (!ok) failed++;
  console.log(`${ok ? 'allowed' : 'FAIL   '} ${key}: ${rooms.join(', ')}`);
}
await server.close();
console.log(failed ? `${failed} failed` : 'all passed');
process.exit(failed ? 1 : 0);
