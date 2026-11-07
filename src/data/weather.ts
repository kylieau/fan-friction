// Reads stored weather for the app. Screens reach this through src/data/index.ts.
// Rules (Kylie, Oct 5): the headline number is feels-like; venues get their own
// figure, the city point is orientation only; before a night the latest forecast
// counts, after the lock the last forecast saved before it (the verdict and the
// stamp never read observed weather); pre-app dates use the reanalysis archive,
// labeled estimated. Since Nov 7, 2026 (Kylie's Oct 5 clarification, her Nov 7
// answer to the weather plan) a past date's weather card may show what happened:
// `weatherAsItWas` reads the observed rows, and only the card calls it.

import { cachedWeatherDays, cachedWeatherHours } from './catalogCache';
import { weatherHourFor, weatherHoursFor, type WeatherDay, type WeatherRow } from './formula/weather';
import type { CrowdEvent, LocalDate } from './types';

/** The shared catalog's rows for that date (loaded by getCityDate, or by a script from the files). */
function rowsFor(metroId: string, venueId: string, date: LocalDate, hour: number): WeatherRow[] {
  return cachedWeatherHours(metroId, venueId, date, hour) ?? [];
}

/**
 * The row to use: the latest forecast captured before `before` (the lock, or now),
 * else the reanalysis row. Undefined when nothing is stored.
 */
export function weatherAt(metroId: string, venueId: string, date: LocalDate, hour: number, before?: Date): WeatherRow | undefined {
  const rows = rowsFor(metroId, venueId, date, hour);
  const cutoff = before?.getTime();
  const forecasts = rows
    .filter((r) => r.basis === 'forecast' && (cutoff == null || new Date(r.capturedAt).getTime() <= cutoff))
    .sort((a, b) => a.capturedAt.localeCompare(b.capturedAt));
  if (forecasts.length > 0) return forecasts[forecasts.length - 1];
  return rows.find((r) => r.basis === 'reanalysis');
}

/** Weather at an event's venue at its start hour. Indoor venues still return a row; callers decide what to show. */
export function weatherForEvent(event: CrowdEvent, before?: Date): WeatherRow | undefined {
  if (event.place.type !== 'venue') return undefined;
  return weatherAt(event.metroId, event.place.venueId, event.date, weatherHourFor(event), before);
}

/**
 * What the weather was: the observed row (Open-Meteo's analysis fetched the night after), else the reanalysis
 * archive. Never a forecast. For a past date's weather card only; the verdict reads `weatherAt`.
 */
export function weatherAsItWas(metroId: string, venueId: string, date: LocalDate, hour: number): WeatherRow | undefined {
  const rows = rowsFor(metroId, venueId, date, hour);
  const observed = rows.filter((r) => r.basis === 'observed').sort((a, b) => a.capturedAt.localeCompare(b.capturedAt));
  if (observed.length > 0) return observed[observed.length - 1];
  return rows.find((r) => r.basis === 'reanalysis');
}

/** What it was at an event's venue at its start hour; undefined until the night after the day. */
export function weatherForEventAsItWas(event: CrowdEvent): WeatherRow | undefined {
  if (event.place.type !== 'venue') return undefined;
  return weatherAsItWas(event.metroId, event.place.venueId, event.date, weatherHourFor(event));
}

/**
 * The city point's figure for the Map header, read at the day's typical start
 * hour (the median of that day's events, 7 pm when there are none). Orientation only.
 */
export function cityWeather(metroId: string, date: LocalDate, events: readonly CrowdEvent[] = []): WeatherRow | undefined {
  const hours = events.map(weatherHourFor).sort((a, b) => a - b);
  const hour = hours.length > 0 ? hours[Math.floor(hours.length / 2)] : 19;
  return weatherAt(metroId, 'city', date, hour) ?? weatherAt(metroId, 'city', date, 19);
}

/**
 * The city point's feels-like high and low for a date: the latest forecast captured
 * before `before` (the lock, or now), else the reanalysis day. Undefined when nothing is stored.
 */
export function cityDayRange(metroId: string, date: LocalDate, before?: Date): WeatherDay | undefined {
  const days = cachedWeatherDays(metroId, date) ?? [];
  const cutoff = before?.getTime();
  const forecasts = days
    .filter((d) => d.basis === 'forecast' && (cutoff == null || new Date(d.capturedAt).getTime() <= cutoff))
    .sort((a, b) => a.capturedAt.localeCompare(b.capturedAt));
  if (forecasts.length > 0) return forecasts[forecasts.length - 1];
  return days.find((d) => d.basis === 'reanalysis');
}

/** The feels-like high and low across the event's hours, for the event page only; `asItWas` reads the observed rows. */
export function weatherRangeForEvent(event: CrowdEvent, before?: Date, asItWas = false): { high: WeatherRow; low: WeatherRow } | undefined {
  if (event.place.type !== 'venue') return undefined;
  const venueId = event.place.venueId;
  const rows = weatherHoursFor(event)
    .map((hour) => (asItWas ? weatherAsItWas(event.metroId, venueId, event.date, hour) : weatherAt(event.metroId, venueId, event.date, hour, before)))
    .filter((r): r is WeatherRow => r !== undefined);
  if (rows.length < 2) return undefined;
  const sorted = [...rows].sort((a, b) => a.feelsLikeF - b.feelsLikeF);
  return { high: sorted[sorted.length - 1], low: sorted[0] };
}
