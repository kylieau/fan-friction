// The day page's weather (build 7.1, M3, Flow X; Kylie, Oct 23, 2026, Locked): the city's high and low, the city by
// the hour, and each outdoor event's peak feels-like at its own venue during its own window (the Rose Bowl can run
// twenty degrees hotter than Inglewood). Reads through the Oct 5 rules in ./weather.ts: before a night the latest
// forecast counts, after the lock the last forecast saved before it, never observed weather. Days with only the
// reanalysis archive (before the app had forecasts) show nothing here (the builder's call, recorded in the gap report).
// An event's window is its start plus three hours, the notes' rule for an unknown end (no listing carries an end).

import { degreesFor } from '../config/metros';
import { hoursOf } from '../lib/windows';
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

/** No listing carries an end time, so every window is the start plus three hours (M3, Locked: "use the start time plus 3 hours"). */
const WINDOW_HOURS = 3;

/**
 * The hours an event's own window covers, as [date, hour] pairs: every stored hour that falls inside [start, end),
 * a 6:30 pm show through its 9 pm hour and not its 10 pm one, an 11:30 pm show into the next date's first hours
 * (Codex, stage 2). No start on file uses the type's usual start hour.
 */
function windowHours(event: CrowdEvent): [LocalDate, number][] {
  const start = event.start ? hoursOf(event.start) : weatherHourFor(event);
  const end = start + WINDOW_HOURS;
  const out: [LocalDate, number][] = [];
  for (let h = Math.floor(start); h < end; h += 1) out.push(h < 24 ? [event.date, h] : [nextDate(event.date), h - 24]);
  return out;
}

function nextDate(date: LocalDate): LocalDate {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10);
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
      .map(([date, hour]) => [hour, weatherAt(event.metroId, venueId, date, hour, before)] as const)
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

/** "7 pm", "12 pm": a whole hour's word. */
function hourWord(h: number): string {
  const x = h % 24;
  return `${x % 12 === 0 ? 12 : x % 12} ${x < 12 ? 'am' : 'pm'}`;
}

/** The sky from a WMO code, in the app's words; sunny words only while the sun is up. */
function skyWords(code: number | undefined, daylight: boolean): string | null {
  if (code == null) return null;
  if (code === 0) return daylight ? 'Sunny' : 'Clear';
  if (code === 1) return daylight ? 'Mostly sunny' : 'Mostly clear';
  if (code === 2) return 'Partly cloudy';
  if (code === 3) return 'Overcast';
  if (code === 45 || code === 48) return 'Foggy';
  if (code >= 51 && code <= 57) return 'Drizzle';
  if (code >= 61 && code <= 67) return 'Rain';
  if (code >= 71 && code <= 77) return 'Snow';
  if (code >= 80 && code <= 82) return 'Showers';
  if (code === 85 || code === 86) return 'Snow showers';
  if (code >= 95) return 'Thunderstorms';
  return null;
}

const WET = new Set(['Drizzle', 'Rain', 'Snow', 'Showers', 'Snow showers', 'Thunderstorms']);

/** "low 60s", "mid 60s", "upper 60s", in the city's own units. */
function band(f: number, metroId: string): string {
  const n = parseInt(degreesFor(f, metroId), 10);
  const tens = Math.floor(n / 10) * 10;
  const ones = n - tens;
  return `${ones < 4 ? 'low' : ones < 7 ? 'mid' : 'upper'} ${tens}s`;
}

/**
 * The M3 weather sentence (build 7.2, Nov 7, 2026; Kylie's answer to the weather plan: built from the numbers the
 * app already stores, no text feed, the same words in every city). One or two short clauses, about a dozen words:
 * the sky at the start hour (with "breezy" and the wind when it is 15 mph or more), then the rain when its chance is
 * 30% or more (with its hour), else the evening's temperature: the drop when feels-like falls 8° or more after the
 * start, the rise when it climbs as much, else the start and the last stored hour when they differ by 4° or more,
 * else "around N° all evening". Null with no hourly rows. Sentence case; degrees follow the Temperature Units rule.
 */
export function weatherSentence(metroId: string, date: LocalDate, hourly: readonly WeatherRow[], startHour: number): string | null {
  const rows = [...hourly].sort((a, b) => a.hour - b.hour);
  if (rows.length === 0) return null;
  const at = rows.find((r) => r.hour >= startHour) ?? rows[rows.length - 1];
  const after = rows.filter((r) => r.hour >= at.hour);
  const sun = sunHours(metroId, date);
  const daylight = sun ? at.hour + 0.5 < sun.set : true;
  const sky = skyWords(at.code, daylight);
  const wind = Math.max(...after.map((r) => r.windMph ?? 0));
  const windy = wind >= 15 ? `${sky ? ' and breezy' : 'Breezy'}, ${Math.round(wind)} mph` : '';
  const first = sky || windy ? `${sky ?? ''}${windy}.` : null;
  const wettest = after.reduce<WeatherRow | null>((best, r) => ((r.precipProbability ?? 0) > (best?.precipProbability ?? 0) ? r : best), null);
  const chance = wettest?.precipProbability ?? 0;
  let second: string;
  if (chance >= 30 && wettest) {
    second = sky && WET.has(sky) ? `A ${Math.round(chance)}% chance around ${hourWord(wettest.hour)}.` : `A ${Math.round(chance)}% chance of rain around ${hourWord(wettest.hour)}.`;
  } else {
    const last = after[after.length - 1];
    const drop = at.feelsLikeF - last.feelsLikeF;
    const deg = (f: number) => degreesFor(f, metroId);
    if (drop >= 8) {
      const when = after.find((r) => at.feelsLikeF - r.feelsLikeF >= 8) ?? last;
      second = `Cools to the ${band(last.feelsLikeF, metroId)} after ${hourWord(when.hour)}.`;
    } else if (drop <= -8) {
      second = `Warms to the ${band(last.feelsLikeF, metroId)} by ${hourWord(last.hour)}.`;
    } else if (Math.abs(drop) >= 4 && last !== at) {
      second = `${deg(at.feelsLikeF)} at ${hourWord(at.hour)}, ${deg(last.feelsLikeF)} by ${hourWord(last.hour)}.`;
    } else second = `Around ${deg(at.feelsLikeF)} all evening.`;
  }
  return [first, second].filter(Boolean).join(' ');
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
