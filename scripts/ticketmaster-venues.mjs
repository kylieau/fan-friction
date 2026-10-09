// Looks every venue in src/data/venues.ts up on Ticketmaster (by name, near its
// coordinates) and writes the matching Ticketmaster venue ids into the file as
// `ticketmasterIds`, so listings match by id rather than by an exact name (C016).
// Needs TICKETMASTER_API_KEY in .env.local or the environment.
//   node scripts/ticketmaster-venues.mjs            (every venue without ids)
//   node scripts/ticketmaster-venues.mjs --all      (every venue, re-checked)

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = Object.fromEntries((await readFile(path.join(root, '.env.local'), 'utf8').catch(() => '')).split('\n').filter((l) => l.includes('=')).map((l) => l.split('=').map((x) => x.trim())));
const KEY = process.env.TICKETMASTER_API_KEY ?? env.TICKETMASTER_API_KEY;
if (!KEY) throw new Error('TICKETMASTER_API_KEY is not set.');
const all = process.argv.includes('--all');

const server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' });
const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');
await server.close();

const km = (a, b) => {
  const r = Math.PI / 180;
  const x = (b[0] - a[0]) * r * Math.cos(((a[1] + b[1]) / 2) * r);
  const y = (b[1] - a[1]) * r;
  return Math.sqrt(x * x + y * y) * 6371;
};
const norm = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function search(name, [lng, lat]) {
  const url = `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${encodeURIComponent(name)}&latlong=${lat},${lng}&radius=5&unit=km&size=20&apikey=${KEY}`;
  for (let tries = 0; tries < 4; tries++) {
    const r = await fetch(url);
    if (r.status === 429) { await sleep(1500 * (tries + 1)); continue; }
    if (!r.ok) throw new Error(`Ticketmaster answered ${r.status} for ${name}`);
    const j = await r.json();
    return j._embedded?.venues ?? [];
  }
  return [];
}

const found = new Map();
const report = [];
for (const venue of Object.values(VENUES)) {
  if (!all && venue.ticketmasterIds?.length) continue;
  const names = venue.names.map((n) => n.name);
  const ids = new Set(venue.ticketmasterIds ?? []);
  const notes = [];
  for (const name of names) {
    let hits = [];
    try { hits = await search(name, venue.location); } catch (e) { notes.push(e.message); continue; }
    await sleep(700); // well under the 5-a-second limit; a burst gets throttled
    for (const h of hits) {
      if (!h.location) continue;
      const d = km(venue.location, [Number(h.location.longitude), Number(h.location.latitude)]);
      const exact = norm(h.name) === norm(name);
      const same = exact || norm(h.name).includes(norm(name)) || norm(name).includes(norm(h.name));
      // A lot, a tour, a suite, a tent or a club on the grounds is not the room; its own listings are add-ons.
      const addOn = /\b(parking|lot|tours?|suites?|club|chapiteau|big top|grounds|warehouse|plaza|pavilion at|theater at|lounge)\b/i.test(h.name) && !exact;
      if (!addOn && (d <= 0.3 || (same && d <= 1.5))) { ids.add(h.id); notes.push(`${h.name} (${h.id}, ${d.toFixed(2)} km)`); }
    }
  }
  if (ids.size) found.set(venue.id, [...ids]);
  report.push(`${venue.id}: ${ids.size ? [...ids].join(', ') : 'no match'}${notes.length ? ' — ' + notes.join('; ') : ''}`);
}
console.log(report.join('\n'));

// Write the ids into venues.ts, after each venue's `location` line.
const file = path.join(root, 'src', 'data', 'venues.ts');
let src = await readFile(file, 'utf8');
let written = 0;
for (const [id, ids] of found) {
  const block = new RegExp(`(id: '${id}',[\\s\\S]*?location: \\[[^\\]]*\\],)(\\n\\s*ticketmasterIds: \\[[^\\]]*\\],)?`);
  const m = src.match(block);
  if (!m) { console.log(`could not place ids for ${id}`); continue; }
  const indent = src.slice(0, m.index).match(/\n([ \t]*)[^\n]*$/)?.[1] ?? '    ';
  src = src.replace(block, `$1\n${indent}ticketmasterIds: [${ids.map((x) => `'${x}'`).join(', ')}],`);
  written++;
}
await writeFile(file, src);
console.log(`\n${found.size} venues matched; ${written} written to src/data/venues.ts.`);
