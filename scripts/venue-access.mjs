// Hard-access measures for every 5,000+ venue, from the map tiles the app
// already draws (OpenFreeMap, z14) and Open-Elevation. The same two numbers
// in every city, so the "strained" flag is a rule, not a hand call
// (docs/hard-access-oct6.md): relief within 500 m, and named public roads
// within 250 m of the building. Also counts roads within 500 m and the
// distance to the nearest freeway, for the table. Part of the new-city
// checklist: node scripts/venue-access.mjs
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { VectorTile } from '@mapbox/vector-tile';
import { PbfReader } from 'pbf';
const Pbf = PbfReader;

const TILES = 'https://tiles.openfreemap.org/planet/20260927_080001_pt/{z}/{x}/{y}.pbf';
const Z = 14;
const ROAD = new Set(['motorway', 'trunk', 'primary', 'secondary', 'tertiary', 'minor', 'service_other']);
const PUBLIC = new Set(['primary', 'secondary', 'tertiary', 'minor']);
const FREEWAY = new Set(['motorway', 'trunk']);

const toTile = (lat, lng, z) => {
  const n = 2 ** z;
  const x = ((lng + 180) / 360) * n;
  const latR = (lat * Math.PI) / 180;
  const y = ((1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2) * n;
  return { x, y };
};
const fromTile = (x, y, z) => {
  const n = 2 ** z;
  const lng = (x / n) * 360 - 180;
  const lat = (Math.atan(Math.sinh(Math.PI * (1 - (2 * y) / n))) * 180) / Math.PI;
  return { lat, lng };
};
const meters = (a, b) => {
  const R = 6371000, dLat = ((b.lat - a.lat) * Math.PI) / 180, dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const s = Math.sin(dLat / 2) ** 2 + Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
};

const cache = new Map();
async function tile(tx, ty) {
  const key = `${tx}/${ty}`;
  if (!cache.has(key)) {
    const url = TILES.replace('{z}', Z).replace('{x}', tx).replace('{y}', ty);
    const r = await fetch(url, { headers: { 'User-Agent': 'fan-friction venue research' } });
    if (!r.ok) throw new Error(`${r.status} ${url}`);
    cache.set(key, new VectorTile(new Pbf(new Uint8Array(await r.arrayBuffer()))));
  }
  return cache.get(key);
}

/** Road features (class, name, points as lat/lng) from the tiles around a point. */
async function roadsNear(lat, lng) {
  const c = toTile(lat, lng, Z);
  const out = [];
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      const tx = Math.floor(c.x) + dx, ty = Math.floor(c.y) + dy;
      const t = await tile(tx, ty);
      for (const layerName of ['transportation', 'transportation_name']) {
        const layer = t.layers[layerName];
        if (!layer) continue;
        for (let i = 0; i < layer.length; i++) {
          const f = layer.feature(i);
          const cls = f.properties.class;
          if (!ROAD.has(cls)) continue;
          const extent = f.extent;
          const pts = f.loadGeometry().flat().map((p) => fromTile(tx + p.x / extent, ty + p.y / extent, Z));
          out.push({ layer: layerName, cls, name: f.properties.name ?? f.properties['name:en'] ?? null, pts });
        }
      }
    }
  }
  return out;
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const server = await createServer({ root, configFile: path.join(root, 'vite.config.ts'), server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');
await server.close();
const venues = Object.values(VENUES)
  .filter((v) => Math.max(...v.capacity.map((c) => c.seats)) >= 5000)
  .map((v) => [v.id, v.metroId, v.location[1], v.location[0], Math.max(...v.capacity.map((c) => c.seats)), v.strained ? 1 : 0, v.names[v.names.length - 1].name]);

/** Ground relief within 500 m: the venue's elevation against eight points around it (Open-Elevation, one request). */
async function reliefFor(list) {
  const locs = [];
  for (const [vid, , lat, lng] of list) {
    for (let k = 0; k < 8; k++) {
      const a = (k * Math.PI) / 4;
      locs.push({ vid, latitude: lat + 0.0045 * Math.cos(a), longitude: lng + (0.0045 * Math.sin(a)) / Math.cos((lat * Math.PI) / 180) });
    }
  }
  let results;
  for (let attempt = 1; ; attempt++) {
    const r = await fetch('https://api.open-elevation.com/api/v1/lookup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'fan-friction venue research' },
      body: JSON.stringify({ locations: locs.map(({ latitude, longitude }) => ({ latitude, longitude })) }),
    });
    if (r.ok) {
      ({ results } = await r.json());
      break;
    }
    // The public service rate-limits repeat calls; wait and try again, three times.
    if (attempt >= 3) throw new Error(`Open-Elevation answered ${r.status}; try again in a few minutes`);
    console.log(`Open-Elevation answered ${r.status}; waiting 30 s…`);
    await new Promise((resolve) => setTimeout(resolve, 30_000));
  }
  const byVenue = new Map();
  results.forEach((row, i) => {
    const vid = locs[i].vid;
    byVenue.set(vid, [...(byVenue.get(vid) ?? []), row.elevation]);
  });
  return new Map([...byVenue].map(([vid, els]) => [vid, Math.round(Math.max(...els) - Math.min(...els))]));
}

const relief = await reliefFor(venues);
const lines = ['venueId\tmetro\tcapacity\tflagToday\troads500\troads250\tfreewayM\treliefM\truleSays\tname'];
console.log('venue'.padEnd(28), 'r500 r250  fwy relief rule');
for (const [vid, metro, lat, lng, cap, strained, name] of venues) {
  const here = { lat: Number(lat), lng: Number(lng) };
  const roads = await roadsNear(here.lat, here.lng);
  const within = (r, m) => r.pts.some((p) => meters(here, p) <= m);
  const named = roads.filter((r) => r.layer === 'transportation_name' && r.name && PUBLIC.has(r.cls));
  const n500 = new Set(named.filter((r) => within(r, 500)).map((r) => r.name)).size;
  const n250 = new Set(named.filter((r) => within(r, 250)).map((r) => r.name)).size;
  const fw = roads.filter((r) => FREEWAY.has(r.cls));
  let fwDist = Infinity;
  for (const r of fw) for (const p of r.pts) fwDist = Math.min(fwDist, meters(here, p));
  const fwText = fwDist === Infinity ? '>1500' : String(Math.round(fwDist / 50) * 50);
  const rel = relief.get(vid) ?? -1;
  // The rule (docs/hard-access-oct6.md): a hillside or canyon site with few streets at the gate.
  const rule = rel >= 40 && n250 <= 4;
  lines.push([vid, metro, cap, strained, n500, n250, fwText, rel, rule ? 1 : 0, name].join('\t'));
  console.log(vid.padEnd(28), String(n500).padStart(4), String(n250).padStart(4), fwText.padStart(5), String(rel).padStart(6), rule ? '  yes' : '    —');
}
const out = path.join(root, 'data', 'venue-access.tsv');
writeFileSync(out, lines.join('\n') + '\n');
console.log(`Saved ${path.relative(root, out)}.`);

// The index the app reads (venues.ts turns it into the strained flag by the rule).
const rows = lines.slice(1).map((l) => l.split('\t'));
const index = `// Hard-access measures per venue, from scripts/venue-access.mjs (the map
// tiles and a public elevation service). Do not edit by hand; rerun the
// script when venues are added. The rule that turns these into the
// "strained" flag lives in venues.ts (docs/hard-access-oct6.md).

export interface VenueAccessRow {
  venueId: string;
  /** Highest minus lowest ground, metres, among eight points 500 m out. */
  reliefM: number;
  /** Distinct named public streets within 250 m of the building's center. */
  streets250: number;
}

export const VENUE_ACCESS: VenueAccessRow[] = [
${rows.map(([vid, , , , , n250, , rel]) => `  { venueId: '${vid}', reliefM: ${rel}, streets250: ${n250} },`).join('\n')}
];
`;
const indexOut = path.join(root, 'src', 'data', 'venueAccessIndex.ts');
writeFileSync(indexOut, index);
console.log(`Saved ${path.relative(root, indexOut)}.`);
