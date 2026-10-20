// The drive from a covered city's core to each further-out room (Kylie, Oct 19–20, 2026: "Further out", big events
// within about a 2-hour drive). Computed once per room and written into src/data/venues.ts as
// `furtherOut: { driveMinutes, how }`; always an estimate, never live traffic.
//   node scripts/further-out-drive.mjs          rooms whose drive is still 0
//   node scripts/further-out-drive.mjs --all    every further-out room again
// The core is the city's map center (src/config/metros.ts). Routing: the public OSRM demo server (OpenStreetMap
// data; light, non-commercial use, at most one request a second; no key). When it fails, a straight-line estimate:
// miles × 1.3 for roads, at 45 mph, labeled 'straight-line'.

import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const all = process.argv.includes('--all');
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');
const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
await server.close();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const miles = ([lng1, lat1], [lng2, lat2]) => {
  const rad = Math.PI / 180;
  const a = Math.sin(((lat2 - lat1) * rad) / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(((lng2 - lng1) * rad) / 2) ** 2;
  return 3958.8 * 2 * Math.asin(Math.sqrt(a));
};

async function routed(from, to) {
  const url = `https://router.project-osrm.org/route/v1/driving/${from[0]},${from[1]};${to[0]},${to[1]}?overview=false`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'FanFriction/1.0 (personal app; one-off drive times)' } });
    if (!r.ok) return null;
    const j = await r.json();
    const s = j.routes?.[0]?.duration;
    return typeof s === 'number' ? Math.round(s / 60) : null;
  } catch {
    return null;
  }
}

const file = path.join(root, 'src', 'data', 'venues.ts');
let src = await readFile(file, 'utf8');
let written = 0;
for (const venue of Object.values(VENUES)) {
  if (!venue.furtherOut || (!all && venue.furtherOut.driveMinutes > 0)) continue;
  const core = METROS[venue.metroId]?.center;
  if (!core) continue;
  const minutes = await routed(core, venue.location);
  await sleep(1100);
  const how = minutes ? 'routed' : 'straight-line';
  const drive = minutes ?? Math.round(((miles(core, venue.location) * 1.3) / 45) * 60);
  const block = new RegExp(`(id: '${venue.id}',[\\s\\S]*?furtherOut: \\{ driveMinutes: )\\d+(, how: ')[a-z-]+(')`);
  if (!block.test(src)) { console.log(`could not place the drive for ${venue.id}`); continue; }
  src = src.replace(block, `$1${drive}$2${how}$3`);
  written += 1;
  console.log(`${venue.id}: ${drive} min from ${venue.metroId}'s core (${how}; ${miles(core, venue.location).toFixed(0)} mi straight)`);
}
await writeFile(file, src);
console.log(`${written} drive times written.`);
