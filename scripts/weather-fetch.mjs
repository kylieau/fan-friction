// Fetches weather rows for the Conditions reason and stores them under data/weather/<metro>/.
// Nightly: every open-air event in the schedule archive's window, at its start hour, plus the
// city point each evening, plus the city point's daily feels-like high and low for every day in
// the 16-day forecast horizon (Kylie, Oct 5: show the high and low; quiet days too).
// --backfill: the seeded past nights from the reanalysis archive (once).
// The app never calls the weather service; it reads the index this writes.
// Source: Open-Meteo, free for non-commercial use (🚩 see docs/product/build-brief.md cost milestones).

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { fallbackLines, previousSnapshot } from './previous-snapshot.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Optional --metro=<id> for a city build; without it the nightly job covers every city.
const metroFilter = process.argv.find((arg) => arg.startsWith('--metro='))?.slice(8);
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
  const { hoursOf, runningHours } = await server.ssrLoadModule('/src/lib/windows.ts');
  const { METROS, COVERED_METRO_IDS } = await server.ssrLoadModule('/src/config/metros.ts');
  if (metroFilter !== undefined && !COVERED_METRO_IDS.includes(metroFilter)) throw new Error(`Unknown covered metro: ${metroFilter}`);
  const metroIds = COVERED_METRO_IDS.filter((id) => metroFilter === undefined || id === metroFilter);
  const failed = [];
  for (const METRO of metroIds) {
  try {
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
    // A team whose feed fails tonight keeps its rows from the last saved snapshot (Nov 13, 2026), so its dates still get weather.
    const previous = await previousSnapshot(root, METRO, today);
    const snapshot = await collectScheduleArchive(METRO, now, previous ? { previous } : {});
    for (const line of fallbackLines(METRO, snapshot)) console.error(line);
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
  // And every hour across the day's timed events, half an hour either side, through 11 pm: the date page's
  // hourly strip over the timeline (build 5, item 4). Still one call per date; only the stored hours grow.
  const windows = new Map();
  for (const event of events) {
    if (!event.start) continue;
    const start = hoursOf(event.start);
    const w = windows.get(event.date) ?? { lo: Infinity, hi: -Infinity };
    w.lo = Math.min(w.lo, Math.floor(start - 0.5));
    w.hi = Math.max(w.hi, Math.ceil(start + runningHours(event) + 0.5));
    windows.set(event.date, w);
  }
  for (const [date, w] of windows) {
    const ask = asks.get(`city|${date}`);
    if (!ask) continue;
    for (let h = Math.max(0, w.lo); h <= Math.min(23, w.hi); h += 1) ask.hours.add(h);
  }

  const byDate = new Map();
  let fetched = 0;
  // One point-date failing after its retries (Nov 4 to 7, 2026: a different city each night, "fetch failed") skips
  // that point-date and keeps yesterday's rows for it; the city still saves everything else. Only a city whose
  // every call failed is skipped whole.
  const missed = [];
  for (const ask of asks.values()) {
    try {
      const rows = await fetchWeather(METRO, ask.venueId, ask.location, ask.date, [...ask.hours], now);
      fetched += 1;
      byDate.set(ask.date, [...(byDate.get(ask.date) ?? []), ...rows]);
    } catch (err) {
      missed.push(`${ask.venueId} ${ask.date}`);
      console.error(`${METRO} weather: ${ask.venueId} ${ask.date} skipped (${err instanceof Error ? err.message : err}).`);
    }
    await new Promise((r) => setTimeout(r, 150)); // be gentle with a free service
  }
  if (asks.size > 0 && missed.length === asks.size) throw new Error(`every point-date failed (${missed.length})`);

  // The city point's daily high and low. Nightly: one call for today through 15 days
  // ahead, events or not. Backfill: one call per seeded past date.
  const daysByDate = new Map();
  let dayCalls = 0;
  if (backfill) {
    for (const date of [...new Set(events.map((e) => e.date))].sort()) {
      // One failed day never discards the rows already fetched (Codex, group 10).
      try {
        for (const day of await fetchWeatherDays(METRO, metro.center, date, date, now)) daysByDate.set(day.date, [...(daysByDate.get(day.date) ?? []), day]);
        dayCalls += 1;
      } catch (err) {
        missed.push(`city days ${date}`);
        console.error(`${METRO} weather: the ${date} day-range call skipped (${err instanceof Error ? err.message : err}).`);
      }
      await new Promise((r) => setTimeout(r, 150));
    }
  } else {
    try {
      for (const day of await fetchWeatherDays(METRO, metro.center, today, addDays(today, DAYS_AHEAD), now)) daysByDate.set(day.date, [...(daysByDate.get(day.date) ?? []), day]);
      dayCalls = 1;
    } catch (err) {
      // Yesterday's highs and lows stay in place for the window; the hourly rows above still save.
      missed.push('city days');
      console.error(`${METRO} weather: the day-range call skipped (${err instanceof Error ? err.message : err}).`);
      // A city with no events ahead makes this its only call: nothing fetched is a failed city (Codex, group 10).
      if (fetched === 0) throw new Error('nothing fetched: the day-range call failed and there were no point-dates');
    }
  }

  // What it was (Nov 7, 2026; Kylie's answer to the weather plan's question 4): the last two days' point-dates are
  // asked again as observed rows (the forecast service's own analysis of a day gone by), once each, so a past
  // date's weather card can show what happened while the verdict keeps its frozen forecast. The point-dates come
  // from the day file itself (the venues and hours the forecasts covered), so nothing new is asked for; about one
  // extra day's worth of calls a night per city, well inside the free tier's 10,000 a day.
  let observedCalls = 0;
  if (!backfill) {
    for (const date of [addDays(today, -1), addDays(today, -2)]) {
      const existing = await readDay(path.join(root, 'data', 'weather', METRO, `${date}.json`));
      const wanted = new Map();
      for (const row of existing.rows) {
        if (row.basis !== 'forecast') continue;
        const key = `${row.venueId}`;
        const ask = wanted.get(key) ?? { venueId: row.venueId, location: row.venueId === 'city' ? metro.center : VENUES[row.venueId]?.location, hours: new Set(), have: new Set() };
        ask.hours.add(row.hour);
        wanted.set(key, ask);
      }
      for (const row of existing.rows) if (row.basis === 'observed') wanted.get(row.venueId)?.have.add(row.hour);
      for (const ask of wanted.values()) {
        const hours = [...ask.hours].filter((h) => !ask.have.has(h));
        if (hours.length === 0 || !ask.location) continue;
        try {
          const rows = await fetchWeather(METRO, ask.venueId, ask.location, date, hours, now, 'observed');
          observedCalls += 1;
          byDate.set(date, [...(byDate.get(date) ?? []), ...rows]);
        } catch (err) {
          missed.push(`${ask.venueId} ${date} observed`);
          console.error(`${METRO} weather: ${ask.venueId} ${date} observed skipped (${err instanceof Error ? err.message : err}).`);
        }
        await new Promise((r) => setTimeout(r, 150));
      }
      if (existing.days.some((d) => d.basis === 'forecast') && !existing.days.some((d) => d.basis === 'observed')) {
        try {
          for (const day of await fetchWeatherDays(METRO, metro.center, date, date, now, 'observed')) daysByDate.set(day.date, [...(daysByDate.get(day.date) ?? []), day]);
          observedCalls += 1;
        } catch (err) {
          missed.push(`city days ${date} observed`);
          console.error(`${METRO} weather: the ${date} observed day-range call skipped (${err instanceof Error ? err.message : err}).`);
        }
      }
    }
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
      // Reanalysis and observed rows never change; a forecast is appended only when its numbers moved.
      if (last && (row.basis === 'reanalysis' || row.basis === 'observed' || sameValues(last, row))) continue;
      merged.push(row);
    }
    const mergedDays = [...existing.days];
    for (const day of daysByDate.get(date) ?? []) {
      const prior = mergedDays.filter((d) => sameDayKey(d, day));
      const last = prior[prior.length - 1];
      if (last && (day.basis === 'reanalysis' || day.basis === 'observed' || sameDayValues(last, day))) continue;
      mergedDays.push(day);
    }
    if (merged.length !== existing.rows.length || mergedDays.length !== existing.days.length) {
      await writeFile(file, `${JSON.stringify({ schema: 1, metroId: METRO, date, rows: merged, days: mergedDays }, null, 2)}\n`);
      written += 1;
    }
  }
  console.log(`${METRO} weather: ${fetched} point-dates and ${dayCalls} day-range call${dayCalls === 1 ? '' : 's'} fetched${observedCalls > 0 ? `, ${observedCalls} observed` : ''}, ${written} day file${written === 1 ? '' : 's'} changed${missed.length > 0 ? `, ${missed.length} skipped` : ''}${backfill ? ' (backfill)' : ''}.`);
  } catch (err) {
    // One city's weather failing (Oct 10, 2026) must not cost every city its night: skip it, say so, carry on.
    failed.push(METRO);
    console.error(`${METRO} weather: skipped (${err instanceof Error ? err.message : err}). Yesterday's rows stay in place.`);
  }
  }
  // The 50 MB src/data/weatherIndex.ts is retired (Nov 4, 2026): the app reads weather from the catalog, and scripts
  // read the day files directly (prime-from-files.mjs).
  if (failed.length > 0) {
    console.error(`Weather skipped for ${failed.join(', ')}.`);
    exitCode = 1;
  }
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  exitCode = 1;
} finally {
  await server.close();
}
process.exit(exitCode);
