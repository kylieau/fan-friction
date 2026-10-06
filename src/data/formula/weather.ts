// Weather for the Conditions reason (formula v4, Oct 5, 2026).
// One source, Open-Meteo: a 16-day hourly forecast and a reanalysis archive back
// to 1940. Free for non-commercial use (🚩 a public launch needs their paid plan).
// The nightly job fetches and stores rows; the app only reads stored rows.
// The headline number everywhere is feels-like (apparent temperature).

import { METROS } from '../../config/metros';
import { VENUES } from '../venues';
import type { CrowdEvent, LocalDate } from '../types';

export type WeatherBasis = 'forecast' | 'reanalysis';

/** One venue (or the city point) at one hour on one date. Every component the source returns is kept. */
export interface WeatherRow {
  metroId: string;
  /** A venue id, or "city" for the metro's own point (orientation only, never an input). */
  venueId: string;
  date: LocalDate;
  /** Local hour, 0–23. */
  hour: number;
  basis: WeatherBasis;
  capturedAt: string;
  feelsLikeF: number;
  tempF: number;
  humidity?: number;
  windMph?: number;
  uvIndex?: number;
  precipProbability?: number;
  precipMm?: number;
  shortwave?: number;
  cloudCover?: number;
  /** WMO weather code. */
  code?: number;
}

/**
 * One day's feels-like range at the city point (Kylie, Oct 5: show the high and
 * low). Fetched for every day in the forecast horizon, quiet days included, so
 * the Map header has a number even when nothing is on. Orientation only, never an input.
 */
export interface WeatherDay {
  metroId: string;
  venueId: 'city';
  date: LocalDate;
  basis: WeatherBasis;
  capturedAt: string;
  feelsLikeHighF: number;
  feelsLikeLowF: number;
  /** Daily WMO code and rain, for the glyph. */
  code?: number;
  precipProbability?: number;
  precipMm?: number;
}

/** "H:88° L:62°", the way Apple Weather writes a day (Kylie, Oct 6: a bare range read like a loose estimate). */
export function rangeLabel(day: Pick<WeatherDay, 'feelsLikeLowF' | 'feelsLikeHighF'>, metroId: string): string {
  const metro = METROS[metroId];
  const celsius = metro && !metro.timeZone.startsWith('America/');
  const convert = (f: number) => Math.round(celsius ? ((f - 32) * 5) / 9 : f);
  return `H:${convert(day.feelsLikeHighF)}° L:${convert(day.feelsLikeLowF)}°`;
}

/** The same range for a screen reader: "feels like a high of 88 and a low of 62". */
export function rangeSpoken(day: Pick<WeatherDay, 'feelsLikeLowF' | 'feelsLikeHighF'>, metroId: string): string {
  const metro = METROS[metroId];
  const celsius = metro && !metro.timeZone.startsWith('America/');
  const convert = (f: number) => Math.round(celsius ? ((f - 32) * 5) / 9 : f);
  return `feels like a high of ${convert(day.feelsLikeHighF)} and a low of ${convert(day.feelsLikeLowF)} degrees`;
}

/** The glyph beside the headline number. */
export function weatherGlyph(row: Pick<WeatherRow, 'code' | 'precipMm' | 'precipProbability' | 'cloudCover'>): string {
  const code = row.code ?? -1;
  if (code >= 95) return '⛈';
  if (code >= 71 && code <= 77) return '🌨';
  if (code >= 51 || (row.precipMm ?? 0) >= 1 || (row.precipProbability ?? 0) >= 50) return '🌧';
  if (code === 45 || code === 48) return '🌫';
  if ((row.cloudCover ?? 0) >= 70 || code === 3) return '☁️';
  if ((row.cloudCover ?? 0) >= 30 || code === 2) return '🌤';
  return '☀️';
}

/** Rounded degrees for display: "84°". Units follow the metro (°F in the US). */
export function feelsLikeLabel(row: Pick<WeatherRow, 'feelsLikeF'>, metroId: string): string {
  const metro = METROS[metroId];
  const celsius = metro && !metro.timeZone.startsWith('America/');
  const value = celsius ? ((row.feelsLikeF - 32) * 5) / 9 : row.feelsLikeF;
  return `${Math.round(value)}°`;
}

// ---------- The Conditions reason ----------

/** Heat starts to count above this feels-like, or above the city's monthly normal plus a margin, whichever is higher. */
const HEAT_FLOOR_F = 85;
const HEAT_MARGIN_F = 8;
/** Feels-like at which heat is maximal: floor + this. */
const HEAT_SPAN_F = 20;
/** Midday starts in strong sun: a concrete bowl feels hotter than the air. */
const SUN_LOAD_F = 8;
const SUN_LOAD_RADIATION = 500;

/**
 * The city's normal feels-like for a month, for the heat baseline (Kylie, Oct 5:
 * Phoenix in August must not read hot every night). Filled per city from the
 * archive as cities arrive. Empty means the floor applies.
 */
const MONTHLY_NORMAL_F: Record<string, Partial<Record<number, number>>> = {};

export function heatThresholdF(metroId: string, date: LocalDate): number {
  const month = Number(date.slice(5, 7));
  const normal = MONTHLY_NORMAL_F[metroId]?.[month];
  return Math.max(HEAT_FLOOR_F, normal != null ? normal + HEAT_MARGIN_F : 0);
}

/**
 * Weather counts unless the building is fully indoor. A covered, open-sided
 * stadium (SoFi) still feels the day (Kylie, Oct 5). A retractable roof is a
 * game-time note, not a third category.
 */
export function isOpenAir(event: CrowdEvent): boolean {
  if (event.place.type !== 'venue') return true;
  const venue = VENUES[event.place.venueId];
  return venue ? venue.roof !== 'indoor' : true;
}

/** The hours an event runs, for the event page's high and low: start through end plus the exit hour. */
export function weatherHoursFor(event: CrowdEvent): number[] {
  const start = weatherHourFor(event);
  const length = event.audience.domain === 'sports' ? ({ football: 3.25, baseball: 2.75, basketball: 2.5, hockey: 2.5, soccer: 2 } as Record<string, number>)[event.audience.sport] ?? 2.5 : 3;
  const end = Math.min(23, Math.ceil(start + length));
  const hours: number[] = [];
  for (let h = start; h <= end; h += 1) hours.push(h);
  return hours;
}

export interface EventConditions {
  /** 0–1: how much the weather weighed on this event. */
  w: number;
  /** 1–10. */
  score: number;
  /** Heat, rain, cold, or none. */
  cause: 'heat' | 'rain' | 'cold' | 'none';
  /** Feels-like used, after the sun-load bump. */
  effectiveF: number;
  row: WeatherRow;
}

/** One open-air event's conditions. Indoor venues return null (nothing to show, nothing to score). */
export function eventConditions(event: CrowdEvent, row: WeatherRow | undefined): EventConditions | null {
  if (!row || !isOpenAir(event)) return null;
  const hour = row.hour;
  const sunLoad = hour >= 10 && hour <= 17 && (row.shortwave ?? 0) > SUN_LOAD_RADIATION ? SUN_LOAD_F : 0;
  const effectiveF = row.feelsLikeF + sunLoad;
  const threshold = heatThresholdF(event.metroId, event.date);
  const h = clamp((effectiveF - threshold) / HEAT_SPAN_F);
  const storm = (row.code ?? 0) >= 95;
  const wet = (row.precipProbability ?? 0) >= 50 && (row.precipMm ?? 0) >= 1;
  const r = storm || (row.precipMm ?? 0) >= 5 ? 0.5 : wet || (row.precipMm ?? 0) >= 1 ? 0.25 : 0;
  const k = clamp((20 - windChillF(row)) / 20);
  const w = Math.max(h, r, k);
  const cause = w === 0 ? 'none' : w === h ? 'heat' : w === r ? 'rain' : 'cold';
  return { w, score: 1 + 9 * w, cause, effectiveF, row };
}

function clamp(x: number): number {
  return Math.max(0, Math.min(1, x));
}

function windChillF(row: WeatherRow): number {
  const t = row.tempF;
  const v = row.windMph ?? 0;
  if (t > 50 || v < 3) return row.feelsLikeF;
  return 35.74 + 0.6215 * t - 35.75 * v ** 0.16 + 0.4275 * t * v ** 0.16;
}

/** The date's conditions: seat-weighted across open-air events that have weather. */
export function dateConditions(rows: { capacity: number; conditions: EventConditions | null }[]): number | null {
  const withWeather = rows.filter((r) => r.conditions);
  if (withWeather.length === 0) return null;
  const seats = withWeather.reduce((s, r) => s + r.capacity, 0);
  if (seats === 0) return null;
  const w = withWeather.reduce((s, r) => s + r.capacity * r.conditions!.w, 0) / seats;
  return 1 + 9 * w;
}

// ---------- Fetching (scripts only; the app never calls the network for weather) ----------

const HOURLY = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'wind_speed_10m',
  'uv_index',
  'precipitation_probability',
  'precipitation',
  'shortwave_radiation',
  'cloud_cover',
  'weather_code',
];

interface Hourly {
  time: string[];
  temperature_2m?: (number | null)[];
  apparent_temperature?: (number | null)[];
  relative_humidity_2m?: (number | null)[];
  wind_speed_10m?: (number | null)[];
  uv_index?: (number | null)[];
  precipitation_probability?: (number | null)[];
  precipitation?: (number | null)[];
  shortwave_radiation?: (number | null)[];
  cloud_cover?: (number | null)[];
  weather_code?: (number | null)[];
}

function rowAt(hourly: Hourly, index: number, base: Omit<WeatherRow, 'feelsLikeF' | 'tempF'>): WeatherRow | null {
  const pick = (key: keyof Hourly) => {
    const list = hourly[key] as (number | null)[] | undefined;
    const value = list?.[index];
    return typeof value === 'number' ? value : undefined;
  };
  const feels = pick('apparent_temperature');
  const temp = pick('temperature_2m');
  if (feels == null || temp == null) return null;
  return {
    ...base,
    feelsLikeF: feels,
    tempF: temp,
    humidity: pick('relative_humidity_2m'),
    windMph: pick('wind_speed_10m'),
    uvIndex: pick('uv_index'),
    precipProbability: pick('precipitation_probability'),
    precipMm: pick('precipitation'),
    shortwave: pick('shortwave_radiation'),
    cloudCover: pick('cloud_cover'),
    code: pick('weather_code'),
  };
}

/** Open-Meteo drops a connection now and then; one dropped call must not end the nightly run. Three tries, backing off. */
async function fetchSteady(url: string): Promise<Response> {
  let last: unknown;
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt) await new Promise((resolve) => setTimeout(resolve, attempt * 4000));
    try {
      const res = await fetch(url);
      if (res.ok || (res.status < 500 && res.status !== 429)) return res;
      last = new Error(`Open-Meteo ${res.status}`);
    } catch (err) {
      last = err;
    }
  }
  throw last instanceof Error ? last : new Error(String(last));
}

/**
 * Fetch one point for one date and return the rows for the hours asked.
 * Past dates use the reanalysis archive; today and later use the forecast.
 */
export async function fetchWeather(
  metroId: string,
  venueId: string,
  location: [number, number],
  date: LocalDate,
  hours: number[],
  now = new Date(),
): Promise<WeatherRow[]> {
  const metro = METROS[metroId];
  const tz = metro?.timeZone ?? 'America/Los_Angeles';
  const today = now.toLocaleDateString('en-CA', { timeZone: tz });
  const basis: WeatherBasis = date < today ? 'reanalysis' : 'forecast';
  const [lng, lat] = location;
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    hourly: basis === 'reanalysis' ? HOURLY.filter((h) => h !== 'uv_index' && h !== 'precipitation_probability').join(',') : HOURLY.join(','),
    temperature_unit: 'fahrenheit',
    wind_speed_unit: 'mph',
    timezone: tz,
  });
  let url: string;
  if (basis === 'reanalysis') {
    params.set('start_date', date);
    params.set('end_date', date);
    url = `https://archive-api.open-meteo.com/v1/archive?${params}`;
  } else {
    params.set('start_date', date);
    params.set('end_date', date);
    url = `https://api.open-meteo.com/v1/forecast?${params}`;
  }
  const res = await fetchSteady(url);
  if (!res.ok) throw new Error(`Open-Meteo ${res.status} for ${venueId} ${date}`);
  const body = (await res.json()) as { hourly?: Hourly };
  const hourly = body.hourly;
  if (!hourly?.time) return [];
  const capturedAt = now.toISOString();
  const rows: WeatherRow[] = [];
  for (const hour of hours) {
    const stamp = `${date}T${String(hour).padStart(2, '0')}:00`;
    const index = hourly.time.indexOf(stamp);
    if (index < 0) continue;
    const row = rowAt(hourly, index, { metroId, venueId, date, hour, basis, capturedAt });
    if (row) rows.push(row);
  }
  return rows;
}

interface Daily {
  time: string[];
  apparent_temperature_max?: (number | null)[];
  apparent_temperature_min?: (number | null)[];
  weather_code?: (number | null)[];
  precipitation_probability_max?: (number | null)[];
  precipitation_sum?: (number | null)[];
}

/**
 * Fetch the city point's daily feels-like high and low for a run of dates, one
 * call. Past runs use the reanalysis archive; today and later use the forecast.
 * A run must not straddle today.
 */
export async function fetchWeatherDays(
  metroId: string,
  location: [number, number],
  startDate: LocalDate,
  endDate: LocalDate,
  now = new Date(),
): Promise<WeatherDay[]> {
  const metro = METROS[metroId];
  const tz = metro?.timeZone ?? 'America/Los_Angeles';
  const today = now.toLocaleDateString('en-CA', { timeZone: tz });
  const basis: WeatherBasis = endDate < today ? 'reanalysis' : 'forecast';
  const [lng, lat] = location;
  const daily = ['apparent_temperature_max', 'apparent_temperature_min', 'weather_code', 'precipitation_sum'];
  if (basis === 'forecast') daily.push('precipitation_probability_max');
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    daily: daily.join(','),
    temperature_unit: 'fahrenheit',
    timezone: tz,
    start_date: startDate,
    end_date: endDate,
  });
  const url = basis === 'reanalysis' ? `https://archive-api.open-meteo.com/v1/archive?${params}` : `https://api.open-meteo.com/v1/forecast?${params}`;
  const res = await fetchSteady(url);
  if (!res.ok) throw new Error(`Open-Meteo ${res.status} for city days ${startDate}..${endDate}`);
  const body = (await res.json()) as { daily?: Daily };
  const d = body.daily;
  if (!d?.time) return [];
  const capturedAt = now.toISOString();
  const pick = (key: keyof Daily, i: number) => {
    const v = (d[key] as (number | null)[] | undefined)?.[i];
    return typeof v === 'number' ? v : undefined;
  };
  const days: WeatherDay[] = [];
  d.time.forEach((date, i) => {
    const high = pick('apparent_temperature_max', i);
    const low = pick('apparent_temperature_min', i);
    if (high == null || low == null) return;
    days.push({
      metroId,
      venueId: 'city',
      date,
      basis,
      capturedAt,
      feelsLikeHighF: high,
      feelsLikeLowF: low,
      code: pick('weather_code', i),
      precipProbability: pick('precipitation_probability_max', i),
      precipMm: pick('precipitation_sum', i),
    });
  });
  return days;
}

/** The hour a conditions read is taken at: the scheduled start, or a type's usual start. */
export function weatherHourFor(event: CrowdEvent): number {
  if (event.start) return Number(event.start.slice(0, 2));
  return event.audience.domain === 'sports' && event.audience.sport === 'football' ? 13 : 19;
}
