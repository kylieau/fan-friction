// Fetches weather rows for the Conditions reason and stores them under data/weather/<metro>/.
// Nightly: every open-air event in the schedule archive's window, at its start hour, plus the
// city point each evening, plus the city point's daily feels-like high and low for every day in
// the 16-day forecast horizon (Kylie, Oct 5: show the high and low; quiet days too).
// --backfill: the seeded past nights from the reanalysis archive (once).
// The app never calls the weather service; it reads the index this writes.
// Source: Open-Meteo, free for non-commercial use (🚩 see docs/build-brief.md cost milestones).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { refreshWeatherIndex } from './weather-index.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const backfill = process.argv.includes('--backfill');

const server = await createServer({
  root,
  configFile: path.join(root, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

async function readDay(file) {
  try {
    const parsed = JSON.parse(await readFile(file, 'utf8'));
    return { rows: Array.isArray(parsed.rows) ? parsed.rows : [], days: Array.isArray(parsed.days) ? parsed.days : [] };
  } catch {
    return { rows: [], days: [] };
  }
}

function sameDayKey(a, b) {
  return a.venueId === b.venueId && a.date === b.date && a.basis === b.basis;
}

function sameDayValues(a, b) {
  return ['feelsLikeHighF', 'feelsLikeLowF', 'code', 'precipProbability', 'precipMm'].every((k) => a[k] === b[k]);
}

/** The forecast horizon for the daily range: Open-Meteo serves 16 days. */
const DAYS_AHEAD = 15;

function addDays(date, n) {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
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
  const { fetchWeather, fetchWeatherDays, isOpenAir, weatherHourFor, weatherHoursFor } = await server.ssrLoadModule('/src/data/formula/weather.ts');
  const { VENUES } = await server.ssrLoadModule('/src/data/venues.ts');
  const { METROS, COVERED_METRO_IDS } = await server.ssrLoadModule('/src/config/metros.ts');
  for (const METRO of COVERED_METRO_IDS) {
  const metro = METROS[METRO];
  const now = new Date();
  const today = now.toLocaleDateString('en-CA', { timeZone: metro.timeZone });

  // Which events to fetch for.
  let events = [];
  if (backfill) {
    const { seedEvents } = await server.ssrLoadModule('/src/data/sources/seedSource.ts');
    events = (await seedEvents.catalog(METRO)).filter((e) => e.date < today);
  } else {
    const { collectScheduleArchive } = await server.ssrLoadModule('/src/data/scheduleArchive.ts');
    const snapshot = await collectScheduleArchive(METRO, now);
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
    for (const h of weatherHoursFor(event)) ask.hours.add(h);
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

  // The city point's daily high and low. Nightly: one call for today through 15 days
  // ahead, events or not. Backfill: one call per seeded past date.
  const daysByDate = new Map();
  let dayCalls = 0;
  if (backfill) {
    for (const date of [...new Set(events.map((e) => e.date))].sort()) {
      for (const day of await fetchWeatherDays(METRO, metro.center, date, date, now)) daysByDate.set(day.date, [...(daysByDate.get(day.date) ?? []), day]);
      dayCalls += 1;
      await new Promise((r) => setTimeout(r, 150));
    }
  } else {
    for (const day of await fetchWeatherDays(METRO, metro.center, today, addDays(today, DAYS_AHEAD), now)) daysByDate.set(day.date, [...(daysByDate.get(day.date) ?? []), day]);
    dayCalls = 1;
  }

  const outDir = path.join(root, 'data', 'weather', METRO);
  await mkdir(outDir, { recursive: true });
  let written = 0;
  for (const date of new Set([...byDate.keys(), ...daysByDate.keys()])) {
    const file = path.join(outDir, `${date}.json`);
    const existing = await readDay(file);
    const merged = [...existing.rows];
    for (const row of byDate.get(date) ?? []) {
      const prior = merged.filter((r) => sameKey(r, row));
      const last = prior[prior.length - 1];
      // Reanalysis never changes; a forecast is appended only when its numbers moved.
      if (last && (row.basis === 'reanalysis' || sameValues(last, row))) continue;
      merged.push(row);
    }
    const mergedDays = [...existing.days];
    for (const day of daysByDate.get(date) ?? []) {
      const prior = mergedDays.filter((d) => sameDayKey(d, day));
      const last = prior[prior.length - 1];
      if (last && (day.basis === 'reanalysis' || sameDayValues(last, day))) continue;
      mergedDays.push(day);
    }
    if (merged.length !== existing.rows.length || mergedDays.length !== existing.days.length) {
      await writeFile(file, `${JSON.stringify({ schema: 1, metroId: METRO, date, rows: merged, days: mergedDays }, null, 2)}\n`);
      written += 1;
    }
  }
  console.log(`${METRO} weather: ${fetched} point-dates and ${dayCalls} day-range call${dayCalls === 1 ? '' : 's'} fetched, ${written} day file${written === 1 ? '' : 's'} changed${backfill ? ' (backfill)' : ''}.`);
  }
  const index = await refreshWeatherIndex(root);
  console.log(index.changed ? `Updated ${index.relative} (${index.count} rows, ${index.days} days).` : `No change in ${index.relative}.`);
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  exitCode = 1;
} finally {
  await server.close();
}
process.exit(exitCode);
