// The day page's weather (build 7.1, M3, Flow X; Kylie, Oct 23, 2026, Locked): the city's high and low, the city by
// the hour, and each outdoor event's peak feels-like at its own venue during its own window (the Rose Bowl can run
// twenty degrees hotter than Inglewood). Reads through the Oct 5 rules in ./weather.ts: before a night the latest
// forecast counts, after the lock the last forecast saved before it, never observed weather. Days with only the
// reanalysis archive (before the app had forecasts) show nothing here (the builder's call, recorded in the gap report).

import { hoursOf, runningHours } from '../lib/windows';
import { isOpenAir, weatherHourFor, type WeatherDay, type WeatherRow } from './formula/weather';
import { sunHours } from './formula/sun';
import { cityDayRange, weatherAt } from './weather';
import type { CrowdEvent, LocalDate } from './types';

/** The three row marks the day page draws: a plain sun, cloud or rain, no temperature color (M3). */
export type SkyKind = 'sun' | 'cloud' | 'rain';

/** Which of the three an hour's row is. Rain wins, then cloud; a clear or lightly clouded sky is the sun. */
export function skyOf(row: Pick<WeatherRow, 'code' | 'precipMm' | 'precipProbability' | 'cloudCover'>): SkyKind {
  const code = row.code ?? -1;
  if (code >= 51 || (row.precipMm ?? 0) >= 1 || (row.precipProbability ?? 0) >= 50) return 'rain';
  if ((row.cloudCover ?? 0) >= 70 || code === 3) return 'cloud';
  return 'sun';
}

export interface OutdoorPeak {
  event: CrowdEvent;
  venueId: string;
  /** The highest feels-like during the event's own window at its venue, in °F (the app's unit rule shows it). */
  peakF: number;
  sky: SkyKind;
  /** The hour the peak was read at. */
  hour: number;
  capturedAt: string;
}

/** The hours an event's own window covers: its start through its rough end (the formula's running time, 3 hours for a show). */
function windowHours(event: CrowdEvent): number[] {
  const start = event.start ? Math.floor(hoursOf(event.start)) : weatherHourFor(event);
  const end = Math.min(23, Math.ceil((event.start ? hoursOf(event.start) : start) + runningHours(event)));
  const hours: number[] = [];
  for (let h = start; h <= end; h += 1) hours.push(h);
  return hours;
}

/**
 * Each outdoor event's peak at its venue, in the day's order. An indoor room, a place with no room on file, and a
 * venue with no forecast rows give nothing (no marker, no list row).
 */
export function outdoorPeaks(events: readonly CrowdEvent[], before?: Date): OutdoorPeak[] {
  const out: OutdoorPeak[] = [];
  for (const event of events) {
    if (event.place.type !== 'venue' || !isOpenAir(event)) continue;
    const venueId = event.place.venueId;
    const rows = windowHours(event)
      .map((hour) => [hour, weatherAt(event.metroId, venueId, event.date, hour, before)] as const)
      .filter((pair): pair is readonly [number, WeatherRow] => pair[1] !== undefined && pair[1].basis === 'forecast');
    if (rows.length === 0) continue;
    const [hour, peak] = rows.reduce((best, pair) => (pair[1].feelsLikeF > best[1].feelsLikeF ? pair : best));
    out.push({ event, venueId, peakF: peak.feelsLikeF, sky: skyOf(peak), hour, capturedAt: peak.capturedAt });
  }
  return out;
}

/** The city's forecast high and low for the day, or undefined when only the reanalysis archive has it. */
export function cityForecastRange(metroId: string, date: LocalDate, before?: Date): WeatherDay | undefined {
  const day = cityDayRange(metroId, date, before);
  return day && day.basis === 'forecast' ? day : undefined;
}

/** The city point's forecast rows for the day, one per stored hour, in hour order. */
export function cityHourly(metroId: string, date: LocalDate, before?: Date): WeatherRow[] {
  const rows: WeatherRow[] = [];
  for (let hour = 0; hour <= 23; hour += 1) {
    const row = weatherAt(metroId, 'city', date, hour, before);
    if (row && row.basis === 'forecast') rows.push(row);
  }
  return rows;
}

/** Local sunset as "6:11 pm", from the city's point; null for polar day or night or an unknown city. */
export function sunsetLabel(metroId: string, date: LocalDate): string | null {
  const sun = sunHours(metroId, date);
  if (!sun) return null;
  const minutes = Math.round(sun.set * 60);
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return `${twelve}:${String(m).padStart(2, '0')} ${h < 12 ? 'am' : 'pm'}`;
}
