// Two rooms with the same name in one city (Oct 26, 2026: NC A&T's and the Winston-Salem Dash's "Truist Stadium" both
// file under Raleigh–Durham): a seller listing by name goes to the nearer room when it carries a point, and the dated
// rule still picks a renamed or rebuilt room. Usage: node scripts/venue-match-check.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'silent' });
const { venueByNameOrPlace } = await server.ssrLoadModule('/src/data/sources/venueMatch.ts');

const CASES = [
  ['raleigh-durham', 'Truist Stadium', 36.0919, -80.2551, '2026-11-01', 'truist-stadium-winston-salem'],
  ['raleigh-durham', 'Truist Stadium', 36.0817, -79.7701, '2026-11-01', 'truist-stadium-greensboro'],
  // No point: the dated rule (the latest name in use), as before.
  ['raleigh-durham', 'Truist Stadium', undefined, undefined, '2026-11-01', 'truist-stadium-greensboro'],
  // A former name, before the rename.
  ['raleigh-durham', 'Aggie Stadium', 36.0817, -79.7701, '2017-09-01', 'truist-stadium-greensboro'],
  // Pittsburgh's Highmark Stadium (F.N.B. Stadium since 2026) and Buffalo's file under different cities.
  ['pittsburgh', 'Highmark Stadium', 40.4366, -80.0094, '2025-06-01', 'fnb-stadium'],
  ['toronto', 'Highmark Stadium', 42.7738, -78.787, '2026-11-01', 'highmark-stadium'],
  ['new-york', 'Majestic Theatre', 40.7584, -73.988, '2026-11-01', 'majestic-theatre-broadway'],
];

let failed = 0;
for (const [metro, name, lat, lng, date, want] of CASES) {
  const got = venueByNameOrPlace(metro, name, lat, lng, date)?.id;
  const ok = got === want;
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${metro} "${name}" ${lat == null ? '(no point)' : `${lat},${lng}`} ${date} → ${got ?? 'none'}${ok ? '' : ` (want ${want})`}`);
}
await server.close();
console.log(failed ? `${failed} failed` : 'all passed');
process.exit(failed ? 1 : 0);
