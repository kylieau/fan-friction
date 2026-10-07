// What the app reads from the shared catalog besides events (docs/archive/proposals/catalog-proposal-oct6.md,
// slice 3): weather, results, the stamp snapshots and expected draws, loaded per
// window of dates from Supabase and kept in memory for the session. The readers in
// weather.ts, results.ts, read.ts and expectedDraw.ts ask here first and fall back
// to whatever is still compiled in. Without a Supabase connection nothing is loaded
// and the readers behave as before.

import type { WeatherDay, WeatherRow } from './formula/weather';
import type { ExpectedDrawRow } from './expectedDrawIndex';
import type { ArchiveForecastRow } from './startForecastIndex';
import { supabase } from './storage/supabaseClient';
import type { GameResult, LocalDate } from './types';

/** Days either side of a date fetched in one go, so the strip and the month need one or two reads, not forty. */
const WINDOW_DAYS = 21;

const weatherHours = new Map<string, WeatherRow[]>();
const weatherDays = new Map<string, WeatherDay[]>();
const results = new Map<string, GameResult[]>();
const snapshots = new Map<string, ArchiveForecastRow[]>();
const expectedDraws = new Map<string, ExpectedDrawRow[]>();
/** Date windows already loaded, per metro: [from, through]. */
const primed = new Map<string, [LocalDate, LocalDate][]>();
/** Windows being loaded right now, so forty dates in the strip share one read. */
const inFlight = new Map<string, { from: LocalDate; through: LocalDate; promise: Promise<void> }[]>();

function addDays(date: LocalDate, days: number): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

function isPrimed(metroId: string, date: LocalDate): boolean {
  return (primed.get(metroId) ?? []).some(([from, through]) => date >= from && date <= through);
}

function push<T>(map: Map<string, T[]>, key: string, row: T) {
  const list = map.get(key);
  if (list) list.push(row);
  else map.set(key, [row]);
}

/**
 * Load the window around a date for a metro, once. Resolves without loading
 * when there is no Supabase connection or the read fails; the readers then
 * fall back to the compiled indexes.
 */
export function primeDate(metroId: string, date: LocalDate): Promise<void> {
  if (isPrimed(metroId, date)) return Promise.resolve();
  const client = supabase();
  if (!client) return Promise.resolve();
  const pending = (inFlight.get(metroId) ?? []).find((w) => date >= w.from && date <= w.through);
  if (pending) return pending.promise;
  const from = addDays(date, -WINDOW_DAYS);
  const through = addDays(date, WINDOW_DAYS);
  const p = (async () => {
    const [hours, days, res, snaps, draws] = await Promise.all([
      client.from('weather_hours').select('data').eq('metro_id', metroId).gte('date', from).lte('date', through),
      client.from('weather_days').select('data').eq('metro_id', metroId).gte('date', from).lte('date', through),
      client.from('event_results').select('data').eq('metro_id', metroId).gte('date', from).lte('date', through),
      client.from('schedule_snapshots').select('data').eq('metro_id', metroId).gte('date', from).lte('date', through),
      expectedDraws.has(metroId) ? Promise.resolve(null) : client.from('expected_draws').select('data').eq('metro_id', metroId),
    ]);
    if (hours.error || days.error || res.error || snaps.error || (draws && draws.error)) return;
    for (const row of hours.data ?? []) {
      const r = row.data as WeatherRow;
      push(weatherHours, `${r.metroId}|${r.venueId}|${r.date}|${r.hour}`, r);
    }
    for (const row of days.data ?? []) {
      const d = row.data as WeatherDay;
      push(weatherDays, `${d.metroId}|${d.date}`, d);
    }
    for (const row of res.data ?? []) {
      const r = row.data as GameResult;
      push(results, `${r.metroId}|${r.date}`, r);
    }
    for (const row of snaps.data ?? []) {
      const s = row.data as ArchiveForecastRow;
      push(snapshots, `${s.metroId}|${s.eventId}`, s);
    }
    if (draws && draws.data) expectedDraws.set(metroId, draws.data.map((row) => row.data as ExpectedDrawRow));
    push(primed, metroId, [from, through] as [LocalDate, LocalDate]);
  })()
    .catch(() => undefined)
    .finally(() => inFlight.set(metroId, (inFlight.get(metroId) ?? []).filter((w) => w.promise !== p)));
  push(inFlight, metroId, { from, through, promise: p });
  return p;
}

/**
 * Which nightly captures cover a date, from the loaded snapshot rows: a capture
 * on day X covers X through X + horizon − 1. Null when the date isn't loaded.
 */
export function cachedCaptureDays(metroId: string, date: LocalDate): LocalDate[] | null {
  if (!isPrimed(metroId, date)) return null;
  const days = new Set<LocalDate>();
  for (const [key, rows] of snapshots) {
    if (!key.startsWith(`${metroId}|`)) continue;
    for (const row of rows) days.add(row.capturedOn);
  }
  return [...days].sort();
}

/** Rows for a venue hour, or null when that date hasn't been loaded (the reader then falls back). */
export function cachedWeatherHours(metroId: string, venueId: string, date: LocalDate, hour: number): WeatherRow[] | null {
  if (!isPrimed(metroId, date)) return null;
  return weatherHours.get(`${metroId}|${venueId}|${date}|${hour}`) ?? [];
}

export function cachedWeatherDays(metroId: string, date: LocalDate): WeatherDay[] | null {
  if (!isPrimed(metroId, date)) return null;
  return weatherDays.get(`${metroId}|${date}`) ?? [];
}

export function cachedResults(metroId: string, date: LocalDate): GameResult[] | null {
  if (!isPrimed(metroId, date)) return null;
  return results.get(`${metroId}|${date}`) ?? [];
}

export function cachedSnapshots(metroId: string, eventId: string, date: LocalDate): ArchiveForecastRow[] | null {
  if (!isPrimed(metroId, date)) return null;
  return snapshots.get(`${metroId}|${eventId}`) ?? [];
}

export function cachedExpectedDraws(metroId: string): ExpectedDrawRow[] | null {
  return expectedDraws.get(metroId) ?? null;
}

/** For scripts that run without Supabase: fill the cache from rows already on disk. */
export function primeFromRows(metroId: string, rows: { hours?: WeatherRow[]; days?: WeatherDay[]; results?: GameResult[]; snapshots?: ArchiveForecastRow[]; draws?: ExpectedDrawRow[] }) {
  for (const r of rows.hours ?? []) push(weatherHours, `${r.metroId}|${r.venueId}|${r.date}|${r.hour}`, r);
  for (const d of rows.days ?? []) push(weatherDays, `${d.metroId}|${d.date}`, d);
  for (const r of rows.results ?? []) push(results, `${r.metroId}|${r.date}`, r);
  for (const s of rows.snapshots ?? []) push(snapshots, `${s.metroId}|${s.eventId}`, s);
  if (rows.draws) expectedDraws.set(metroId, rows.draws);
  push(primed, metroId, ['0000-01-01', '9999-12-31'] as [LocalDate, LocalDate]);
}
