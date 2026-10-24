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

/** Supabase answers at most this many rows a call (the project's max-rows setting, checked Oct 15, 2026). */
const PAGE_ROWS = 1000;

/**
 * Every row a query matches, asked for a page at a time: one call stops at
 * PAGE_ROWS without saying so. `page` builds the query for one range and must
 * sort by a unique key, so pages don't overlap or skip.
 */
export async function allRows<T>(
  page: (from: number, to: number) => PromiseLike<{ data: T[] | null; error: unknown }>,
): Promise<{ data: T[]; error: unknown }> {
  const rows: T[] = [];
  for (let from = 0; ; from += PAGE_ROWS) {
    const { data, error } = await page(from, from + PAGE_ROWS - 1);
    if (error) return { data: rows, error };
    rows.push(...(data ?? []));
    if (!data || data.length < PAGE_ROWS) return { data: rows, error: null };
  }
}

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
    const windowed = (table: string, key: string) =>
      allRows<{ data: unknown }>((a, b) => client.from(table).select('data').eq('metro_id', metroId).gte('date', from).lte('date', through).order(key).range(a, b));
    const [hours, days, res, snaps, draws] = await Promise.all([
      allRows<{ data: unknown }>((a, b) =>
        client.from('weather_hours').select('data').eq('metro_id', metroId).gte('date', from).lte('date', through)
          .order('venue_id').order('date').order('hour').order('captured_at').range(a, b)),
      allRows<{ data: unknown }>((a, b) =>
        client.from('weather_days').select('data').eq('metro_id', metroId).gte('date', from).lte('date', through)
          .order('date').order('captured_at').range(a, b)),
      windowed('event_results', 'event_id'),
      allRows<{ data: unknown }>((a, b) =>
        client.from('schedule_snapshots').select('data').eq('metro_id', metroId).gte('date', from).lte('date', through)
          .order('captured_on').order('event_id').range(a, b)),
      expectedDraws.has(metroId)
        ? Promise.resolve(null)
        : allRows<{ data: unknown }>((a, b) =>
            client.from('expected_draws').select('data').eq('metro_id', metroId)
              .order('team_id').order('venue_id').order('day_class').order('month').range(a, b)),
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

/**
 * Every saved row for one date in a city, across captures: the saved event set a settled verdict was scored from,
 * whatever the catalog holds today (build 7.1, M6: a night saved with 11 events reads as 11, not today's 15).
 * Null when that date hasn't been loaded.
 */
export function cachedSnapshotsOn(metroId: string, date: LocalDate): ArchiveForecastRow[] | null {
  if (!isPrimed(metroId, date)) return null;
  // Overlapping date windows load the same row twice; one copy per capture and event (Codex, stage 2).
  const seen = new Set<string>();
  const out: ArchiveForecastRow[] = [];
  for (const [key, rows] of snapshots) {
    if (!key.startsWith(`${metroId}|`)) continue;
    for (const row of rows) {
      if (row.date !== date) continue;
      const id = `${row.capturedOn}|${row.eventId}`;
      if (seen.has(id)) continue;
      seen.add(id);
      out.push(row);
    }
  }
  return out;
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
