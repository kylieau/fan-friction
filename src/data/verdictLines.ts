// The date page's verdict lines (build 7.1, M6; Kylie, Oct 23, 2026; wording from the 06-c board, Mosaic's copy 2):
//   headline  "Biggest draw: Warriors at Lakers, 19k"
//   detail    "4 other big crowds overlap it, 7 to 10 pm."
//   meta      "11 events in Los Angeles · 3 sources"
// One function for a live day (today's events) and a settled night (the saved event set the verdict was scored
// from), so the number shown and the words under it always come from the same set. "Big" is the app's own
// eligibility rule (`eventFeedsFriction`: the friction floor after the small-room and small-draw caps); "overlap"
// is the formula's own windows (a start and its running time by type, `durationOf`, a festival's eight hours).

import { hoursOf } from '../lib/windows';
import { listTitle, splitTitleLabel } from '../lib/eventTitle';
import { crowdThousands } from '../map/crowdPoints';
import { METROS } from '../config/metros';
import { durationOf } from './formula/crowdFight';
import { asMetroDate, drawSize, eventFeedsFriction, FRICTION_ATTENDEES, isStampLocked, savedNightRead, type SavedNightRead } from './read';
import type { CityDate, CrowdEvent, LocalTime } from './types';
import type { ArchiveForecastRow } from './startForecastIndex';

export interface VerdictItem {
  /** The catalog's event, when it still holds one; a saved row whose event has since left the catalog has none. */
  event?: CrowdEvent;
  start: LocalTime | null;
  /** The expected crowd, or null when unknown. */
  draw: number | null;
  /** Big enough to count as a rival: the app's eligibility rule when the event is known, else the raw floor. */
  big: boolean;
  /** The feed that listed it ("espn", "ticketmaster"); seeds and fan rows are not sources. */
  source: string | null;
}

export interface VerdictLines {
  headline: string;
  detail: string | null;
  meta: string;
  /** How many feeds listed events in the set. */
  sources: number;
}

const NOT_A_SOURCE = new Set(['seed', 'fan', '']);

/** Today's events as verdict items (the day's own events; Further Out ones never come here). */
export function liveItems(events: readonly CrowdEvent[]): VerdictItem[] {
  return events.map((event) => ({ event, start: event.start, draw: drawSize(event) ?? null, big: eventFeedsFriction(event), source: event.sourceId ?? null }));
}

/** The feed an event id names ("2026-10-21-espn-lakers-4019…" → espn), in the catalog's own source names. */
const ID_TAGS: Record<string, string> = { espn: 'espn', tm: 'ticketmaster', mlb: 'mlb', sa: 'sidearm', ht: 'hockeytech', jb: 'jambase', sg: 'seatgeek' };

/**
 * A saved night's rows as verdict items. The saved facts stay frozen (a row saved with no start or no draw keeps
 * them unknown; Codex, stage 2); the catalog's event supplies only its name and its eligibility. Rows for events
 * the day scored as Further Out are left out (`exclude`, their ids), as they never counted toward the verdict.
 */
export function savedItems(rows: readonly ArchiveForecastRow[], events: readonly CrowdEvent[], exclude: ReadonlySet<string> = new Set()): VerdictItem[] {
  const byId = new Map(events.map((e) => [e.id, e]));
  const out: VerdictItem[] = [];
  for (const row of rows) {
    if (exclude.has(row.eventId)) continue;
    const event = byId.get(row.eventId);
    const draw = row.draw?.count ?? null;
    // The feed survives even when the event has gone, read from the id; a seed's own words there name no feed.
    const tag = /^\d{4}-\d{2}-\d{2}-/.test(row.eventId) ? row.eventId.slice(11).split('-')[0] : '';
    const source = event?.sourceId ?? ID_TAGS[tag] ?? null;
    out.push({ event, start: row.start ?? null, draw, big: event ? eventFeedsFriction(event) : (draw ?? 0) >= FRICTION_ATTENDEES, source });
  }
  return out;
}

/** The saved set when the day is settled and a verdict was saved, else today's events: what the date page shows. */
export function verdictLinesForDay(day: CityDate, saved?: SavedNightRead | null): VerdictLines {
  const city = METROS[day.metroId]?.name ?? day.metroId;
  const metro = METROS[day.metroId];
  const chosen = saved === undefined && metro && isStampLocked(asMetroDate(day.metroId, day.date, day.events), metro.timeZone) ? savedNightRead(day.metroId, day.date, day.events) : saved;
  if (chosen) return verdictLines(savedItems(chosen.rows, day.events, new Set((day.furtherOut ?? []).map((e) => e.id))), city);
  return verdictLines(liveItems(day.events), city);
}

/** [start, end) in hours since midnight; null with no start. A row without its event runs the show's three hours. */
function windowOf(item: VerdictItem): [number, number] | null {
  if (!item.start) return null;
  const from = hoursOf(item.start);
  return [from, from + (item.event ? durationOf(item.event) : 3)];
}

/** "7 to 10 pm", "11 am to 2 pm", on the hour. */
function spanWords(from: number, to: number): string {
  const word = (h: number, withMeridiem: boolean) => {
    const hh = Math.round(h) % 24;
    const twelve = hh % 12 === 0 ? 12 : hh % 12;
    return withMeridiem ? `${twelve} ${hh < 12 ? 'am' : 'pm'}` : `${twelve}`;
  };
  const sameHalf = Math.round(from) % 24 < 12 === Math.round(to) % 24 < 12;
  return `${word(from, !sameHalf)} to ${word(to, true)}`;
}

/**
 * The three lines for a set of items. The biggest draw leads; the rivals are the other big items whose window
 * overlaps its own; the span runs from the earliest start to the latest end among them.
 */
export function verdictLines(items: readonly VerdictItem[], cityName: string): VerdictLines {
  const count = items.length;
  const sources = new Set(items.map((it) => it.source ?? '').filter((s) => !NOT_A_SOURCE.has(s))).size;
  const meta = `${count} ${count === 1 ? 'event' : 'events'} in ${cityName}${sources > 0 ? ` · ${sources} ${sources === 1 ? 'source' : 'sources'}` : ''}`;
  const sized = items.filter((it) => it.draw != null && it.draw > 0);
  const biggest = [...sized].sort((a, b) => (b.draw ?? 0) - (a.draw ?? 0))[0];
  if (!biggest) return { headline: count === 0 ? `Nothing on in ${cityName}.` : `${count} ${count === 1 ? 'event' : 'events'}, no crowd figures yet.`, detail: null, meta, sources };
  // The name alone: the row under it carries the label ("Home Opener"), the headline does not (the 06-c board).
  const name = biggest.event ? splitTitleLabel(listTitle(biggest.event)).name : 'An event no longer listed';
  const headline = `Biggest draw: ${name}, ${crowdThousands(biggest.draw as number)}`;
  const window = windowOf(biggest);
  if (!window) return { headline, detail: null, meta, sources };
  const rivals = items.filter((it) => it !== biggest && it.big && overlaps(windowOf(it), window));
  if (rivals.length === 0) return { headline, detail: 'No other big crowd overlaps it.', meta, sources };
  const all = [biggest, ...rivals].map(windowOf).filter((w): w is [number, number] => w !== null);
  const from = Math.min(...all.map((w) => w[0]));
  const to = Math.max(...all.map((w) => w[1]));
  const n = rivals.length;
  return { headline, detail: `${n} other big ${n === 1 ? 'crowd overlaps' : 'crowds overlap'} it, ${spanWords(from, to)}.`, meta, sources };
}

function overlaps(a: [number, number] | null, b: [number, number]): boolean {
  return a !== null && a[0] < b[1] && b[0] < a[1];
}
