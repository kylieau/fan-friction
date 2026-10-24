// The date page's verdict lines (build 7.1, M6; Kylie, Oct 23, 2026; wording from the 06-c board, Mosaic's copy 2):
//   headline  "Biggest draw: Warriors at Lakers, 19k"
//   detail    "4 other big crowds overlap it, 7 to 10 pm."
//   meta      "11 events in Los Angeles · 3 sources"
// One function for a live day (today's events) and a settled night (the saved event set the verdict was scored
// from), so the number shown and the words under it always come from the same set. "Big" is the friction floor
// (FRICTION_ATTENDEES); "overlap" is the formula's own windows (a start and its rough running time, lib/windows.ts).

import { hoursOf, runningHours } from '../lib/windows';
import { listTitle, splitTitleLabel } from '../lib/eventTitle';
import { crowdThousands } from '../map/crowdPoints';
import { drawSize, FRICTION_ATTENDEES } from './read';
import type { CrowdEvent, LocalTime } from './types';
import type { ArchiveForecastRow } from './startForecastIndex';

export interface VerdictItem {
  /** The catalog's event, when it still holds one; a saved row whose event has since left the catalog has none. */
  event?: CrowdEvent;
  start: LocalTime | null;
  /** The expected crowd, or null when unknown. */
  draw: number | null;
  /** The feed that listed it ("espn", "tm"); seeds and fan rows are not sources. */
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

/** Today's events as verdict items. */
export function liveItems(events: readonly CrowdEvent[]): VerdictItem[] {
  return events.map((event) => ({ event, start: event.start, draw: drawSize(event) ?? null, source: event.sourceId ?? null }));
}

/** A saved night's rows as verdict items, each matched to the catalog's event by id when it still exists. */
export function savedItems(rows: readonly ArchiveForecastRow[], events: readonly CrowdEvent[]): VerdictItem[] {
  const byId = new Map(events.map((e) => [e.id, e]));
  return rows.map((row) => {
    const event = byId.get(row.eventId);
    // An id reads "{date}-{feed}-…" ("2026-10-21-espn-lakers-4019…"), so the feed survives even when the event has gone.
    const source = event?.sourceId ?? row.eventId.slice(11).split('-')[0] ?? null;
    return { event, start: row.start ?? event?.start ?? null, draw: row.draw?.count ?? (event ? (drawSize(event) ?? null) : null), source };
  });
}

/** [start, end) in hours since midnight; null with no start. A row without its event runs the show default. */
function windowOf(item: VerdictItem): [number, number] | null {
  if (!item.start) return null;
  const from = hoursOf(item.start);
  return [from, from + (item.event ? runningHours(item.event) : 3)];
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
 * The three lines for a set of items. The biggest draw leads; the rivals are the other items at or over the friction
 * floor whose window overlaps its own; the span runs from the earliest start to the latest end among them.
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
  const rivals = sized.filter((it) => it !== biggest && (it.draw as number) >= FRICTION_ATTENDEES && overlaps(windowOf(it), window));
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
