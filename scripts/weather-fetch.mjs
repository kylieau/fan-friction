// Fetches weather rows for the Conditions reason and stores them under data/weather/<metro>/.
// Nightly: every open-air event in the schedule archive's window, at its start hour, plus the
// city point each evening. --backfill: the seeded past nights from the reanalysis archive (once).
// The app never calls the weather service; it reads the index this writes.
// Source: Open-Meteo, free for non-commercial use (🚩 see docs/build-brief.md cost milestones).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { refreshWeatherIndex } from './weather-index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const backfill = process.argv.includes('--backfill');
const METRO = 'la';

const server = await createServer({
  root,
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

async function readRows(file) {
  try {
    const parsed = JSON.parse(await readFile(file, 'utf8'));
    return Array.isArray(parsed.rows) ? parsed.rows : [];
  } catch {
    return [];
  }
}

function sameKey(a, b) {
  return a.venueId === b.venueId && a.date === b.date && a.hour === b.hour && a.basis === b.basis;
}

function sameValues(a, b) {
  const keys = ['feelsLikeF', 'tempF', 'humidity', 'windMph', 'uvIndex', 'precipProbability', 'precipMm', 'shortwave', 'cloudCover', 'code'];
  return keys.every((k) => a[k] === b[k]);
}

let exitCode = 0;
try {
  const { fetchWeather, isOpenAir, weatherHourFor } = await server.ssrLoadModule('/src/data/formula/weather.ts');
  const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');
  const { METROS } = await server.ssrLoadModule('/src/config/metros.ts');
  const metro = METROS[METRO];
  const now = new Date();
  const today = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });

  // Which events to fetch for.
  let events = [];
  if (backfill) {
    const { seedEvents } = await server.ssrLoadModule('/src/data/sources/seedSource.ts');
    events = (await seedEvents.catalog(METRO)).filter((e) => e.date < today);
  } else {
    const dir = path.join(root, 'data', 'schedule-archive', METRO);
    const { readdir } = await import('node:fs/promises');
    const files = (await readdir(dir)).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
    const latest = files[files.length - 1];
    if (!latest) throw new Error('No schedule snapshot to read events from.');
    const snapshot = JSON.parse(await readFile(path.join(dir, latest), 'utf8'));
    events = snapshot.events.filter((e) => e.date >= today);
  }

  // Group the asks: one call per venue per date, with the hours needed.
  const asks = new Map();
  for (const event of events) {
    if (!isOpenAir(event) || event.place.type !== 'venue') continue;
    const venue = VENUES[event.place.venueId];
    if (!venue) continue;
    const key = `${venue.id}|${event.date}`;
    const ask = asks.get(key) ?? { venueId: venue.id, location: venue.location, date: event.date, hours: new Set() };
    ask.hours.add(weatherHourFor(event));
    asks.set(key, ask);
  }
  // The city point, each date in play, at every start hour that day plus 7 pm: the Map
  // header's number, read at the day's typical start. Orientation only.
  for (const event of events) {
    const key = `city|${event.date}`;
    const ask = asks.get(key) ?? { venueId: 'city', location: metro.center, date: event.date, hours: new Set([19]) };
    ask.hours.add(weatherHourFor(event));
    asks.set(key, ask);
  }

  const byDate = new Map();
  let fetched = 0;
  for (const ask of asks.values()) {
    const rows = await fetchWeather(METRO, ask.venueId, ask.location, ask.date, [...ask.hours], now);
    fetched += 1;
    byDate.set(ask.date, [...(byDate.get(ask.date) ?? []), ...rows]);
    await new Promise((r) => setTimeout(r, 150)); // be gentle with a free service
  }

  const outDir = path.join(root, 'data', 'weather', METRO);
  await mkdir(outDir, { recursive: true });
  let written = 0;
  for (const [date, rows] of byDate) {
    const file = path.join(outDir, `${date}.json`);
    const existing = await readRows(file);
    const merged = [...existing];
    for (const row of rows) {
      const prior = merged.filter((r) => sameKey(r, row));
      const last = prior[prior.length - 1];
      // Reanalysis never changes; a forecast is appended only when its numbers moved.
      if (last && (row.basis === 'reanalysis' || sameValues(last, row))) continue;
      merged.push(row);
    }
    if (merged.length !== existing.length) {
      await writeFile(file, `${JSON.stringify({ schema: 1, metroId: METRO, date, rows: merged }, null, 2)}\n`);
      written += 1;
    }
  }
  console.log(`Weather: ${fetched} point-dates fetched, ${written} day file${written === 1 ? '' : 's'} changed${backfill ? ' (backfill)' : ''}.`);
  const index = await refreshWeatherIndex(root);
  console.log(index.changed ? `Updated ${index.relative} (${index.count} rows).` : `No change in ${index.relative}.`);
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  exitCode = 1;
} finally {
  await server.close();
}
process.exit(exitCode);
