// Which side of a city's line each room sits on, by drive time (Kylie, Oct 23, 2026, the drive-time rule from
// docs/research/topics/city-boundary-answer.md): inside when the normal drive from the nearest of the city's downtowns
// (src/config/metros.ts, `downtowns`) is about an hour or less; Further out beyond that and up to three hours (listed
// for reference, never in a verdict; Oct 19–20); past three hours, neither (reported here, never written: the room stays
// on file and loggable). Every room in every city, any size. Always an estimate, never live traffic.
//   node scripts/further-out-drive.mjs           report the rooms whose side differs from the rule
//   node scripts/further-out-drive.mjs --write   write it: set or refresh `furtherOut` in src/data/venues.ts, clear it
//                                                from rooms the rule puts inside
//   node scripts/further-out-drive.mjs <metro>   one city
// It also writes `alsoIn`: the other covered cities a room is within about an hour of (it counts in their days too).
// Routing: the public OSRM demo server (OpenStreetMap data, no traffic; light non-commercial use, about one request a
// second, no key), one table request per downtown and 90 rooms. A Further out row's town comes from OpenStreetMap's
// reverse lookup (Nominatim, one request a second) the first time; after that the stored town is kept.

import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

/** "About an hour": 60 minutes plus the router's margin (no traffic, a reference point rather than a gate). */
const INSIDE_MINUTES = 64;
/** The Further out ceiling (three hours, so The Gorge and the Coachella Valley stay listed). */
const FURTHER_OUT_MINUTES = 180;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const write = process.argv.includes('--write');
const only = process.argv.slice(2).find((a) => !a.startsWith('--'));
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { VENUES, venueNameOn } = await server.ssrLoadModule('/src/data/venues.ts');
const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
await server.close();

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const UA = { 'User-Agent': 'FanFriction/1.0 (personal app; drive times for city lines)' };
const today = new Date().toISOString().slice(0, 10);

/** Minutes from one point to each room, null where the router found no road. */
async function table(from, rooms) {
  const out = [];
  for (let k = 0; k < rooms.length; k += 90) {
    const chunk = rooms.slice(k, k + 90);
    const coords = [from, ...chunk.map((v) => v.location)].map(([x, y]) => `${x},${y}`).join(';');
    let j = {};
    for (let tries = 0; tries < 3 && j.code !== 'Ok'; tries += 1) {
      if (tries) await sleep(3000);
      const r = await fetch(`https://router.project-osrm.org/table/v1/driving/${coords}?sources=0&annotations=duration`, { headers: UA }).catch(() => null);
      j = r?.ok ? await r.json() : {};
    }
    if (j.code !== 'Ok') throw new Error('the router did not answer');
    out.push(...j.durations[0].slice(1).map((s) => (s == null ? null : Math.round(s / 60))));
    await sleep(1200);
  }
  return out;
}

async function townOf([lng, lat]) {
  const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&zoom=14&lat=${lat}&lon=${lng}`, { headers: UA });
  await sleep(1100);
  const a = (await r.json()).address ?? {};
  // "Town of Brookhaven", "Slippery Rock Township" read as the place people say; check new rows by eye all the same.
  const name = a.village ?? a.town ?? a.city ?? a.hamlet ?? a.municipality ?? a.county ?? '';
  return name.replace(/^(?:Town|City|Village|Borough) of /, '').replace(/ Township$/, '');
}

const file = path.join(root, 'src', 'data', 'venues.ts');
let src = await readFile(file, 'utf8');
const changes = [];
for (const metro of Object.values(METROS)) {
  if (only && metro.id !== only) continue;
  const rooms = Object.values(VENUES).filter((v) => v.metroId === metro.id);
  if (!rooms.length) continue;
  const best = new Array(rooms.length).fill(null);
  for (const point of metro.downtowns) {
    (await table(point, rooms)).forEach((m, i) => { if (m != null && (best[i] == null || m < best[i])) best[i] = m; });
  }
  for (const [i, venue] of rooms.entries()) {
    const minutes = best[i];
    if (minutes == null) { console.log(`${venue.id}: no road route; left as it is`); continue; }
    const side = minutes <= INSIDE_MINUTES ? 'inside' : minutes <= FURTHER_OUT_MINUTES ? 'further out' : 'neither';
    const now = venue.furtherOut ? 'further out' : 'inside';
    const label = `${metro.id} ${venueNameOn(venue, today)} (${venue.id}): ${minutes} min`;
    if (side === 'neither') { console.log(`${label}, past the Further out ceiling; ${now} today, not written`); continue; }
    const opened = [`\n  '${venue.id}': {\n`, `\n  ${venue.id}: {\n`].map((k) => src.indexOf(k)).filter((x) => x >= 0);
    const blockStart = opened.length ? opened[0] : -1;
    const blockEnd = src.indexOf('\n  },\n', blockStart);
    if (blockStart < 0 || blockEnd < 0) { console.log(`could not find ${venue.id} in venues.ts`); continue; }
    const block = src.slice(blockStart, blockEnd);
    const line = /\n    furtherOut: \{ driveMinutes: \d+, how: '[a-z-]+', town: '((?:[^'\\]|\\.)*)' \},/;
    if (side === 'inside') {
      if (now === 'inside') continue;
      changes.push(`${label}: further out → inside`);
      if (write) src = src.slice(0, blockStart) + block.replace(line, '') + src.slice(blockEnd);
      continue;
    }
    const stored = block.match(line);
    if (now === 'inside') changes.push(`${label}: inside → further out`);
    else if (venue.furtherOut.driveMinutes !== minutes) changes.push(`${label}: further out, drive ${venue.furtherOut.driveMinutes} → ${minutes}`);
    else continue;
    if (!write) continue;
    const town = stored ? stored[1] : (await townOf(venue.location)).replace(/'/g, "\\'");
    const next = `\n    furtherOut: { driveMinutes: ${minutes}, how: 'routed', town: '${town}' },`;
    src = src.slice(0, blockStart) + (stored ? block.replace(line, next) : block + next) + src.slice(blockEnd);
  }
}
// A room within an hour of another covered city's downtown also counts there (`alsoIn`; Kylie, Oct 23, 2026: "fine with
// one room counting for two nearby cities assuming the research backs it up"). Only rooms within 110 km in a straight
// line are routed; a Further out room at home never counts elsewhere by this pass alone.
const km = ([a, b], [c, d]) => { const r = Math.PI / 180, x = Math.sin(((d - b) * r) / 2) ** 2 + Math.cos(b * r) * Math.cos(d * r) * Math.sin(((c - a) * r) / 2) ** 2; return 12742 * Math.asin(Math.sqrt(x)); };
const wanted = new Map(Object.values(VENUES).map((v) => [v.id, new Set()]));
for (const host of Object.values(METROS)) {
  if (only && host.id !== only) continue;
  const near = Object.values(VENUES).filter((v) => v.metroId !== host.id && METROS[v.metroId] && host.downtowns.some((p) => km(p, v.location) < 110));
  if (!near.length) continue;
  const best = new Array(near.length).fill(null);
  for (const point of host.downtowns) (await table(point, near)).forEach((m, i) => { if (m != null && (best[i] == null || m < best[i])) best[i] = m; });
  near.forEach((v, i) => { if (best[i] != null && best[i] <= INSIDE_MINUTES) wanted.get(v.id).add(host.id); });
}
for (const venue of Object.values(VENUES)) {
  const had = venue.alsoIn ?? [];
  const keep = only ? had.filter((m) => m !== only) : [];
  const next = [...new Set([...keep, ...wanted.get(venue.id)])].sort();
  if (next.join() === [...had].sort().join()) continue;
  changes.push(`${venue.metroId} ${venueNameOn(venue, today)} (${venue.id}): also counts in ${next.length ? next.join(', ') : 'no other city'} (was ${had.length ? had.join(', ') : 'none'})`);
  if (!write) continue;
  const opened = [`\n  '${venue.id}': {\n`, `\n  ${venue.id}: {\n`].map((k) => src.indexOf(k)).filter((x) => x >= 0);
  if (!opened.length) { console.log(`could not find ${venue.id} in venues.ts`); continue; }
  const blockStart = opened[0];
  const blockEnd = src.indexOf('\n  },\n', blockStart);
  const line = /\n    alsoIn: \[[^\]]*\],/;
  let block = src.slice(blockStart, blockEnd).replace(line, '');
  if (next.length) block += `\n    alsoIn: [${next.map((m) => `'${m}'`).join(', ')}],`;
  src = src.slice(0, blockStart) + block + src.slice(blockEnd);
}

if (write) await writeFile(file, src);
console.log(changes.join('\n'));
console.log(`${changes.length} rooms ${write ? 'written' : 'differ (run with --write to apply)'}.`);
