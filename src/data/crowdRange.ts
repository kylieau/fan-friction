// The crowd size range (build 5, item 6; Kylie, Oct 14): one display filter for every list, applied after
// scoring. It never reaches the read: rateDate, the crowd fight, the day strip and the 5,000 friction floor
// never see it, and a min under 5,000 never makes a small room count. Muting stays as it is; this hides.

import { highlightedCrowd } from './crowdFigures';
import type { FeedItem } from './profiles';
import { drawSize } from './read';
import type { CrowdEvent, CrowdRange, PersonalLog } from './types';

/** The slider's ends: 0 is no minimum, 80,000 is no maximum ("80,000+"). */
export const CROWD_RANGE_TOP = 80000;

/** The number a row shows, the one the range compares (notes: highlighted crowd, else drawSize). Undefined is unknown size. */
export function rangeNumber(event: CrowdEvent): number | undefined {
  return highlightedCrowd(event)?.count ?? drawSize(event);
}

/**
 * The range as one surface sees it (Kylie, Oct 19, 2026): the map (and its sheet), or lists (date pages, the Explore
 * List, search, the event page's This day card). A surface whose switch is off sees no range at all.
 */
export function rangeOn(range: CrowdRange, surface: 'map' | 'lists'): CrowdRange {
  return (surface === 'map' ? range.mapOff : range.listsOff) ? {} : range;
}

/** True when the range filters nothing: no min, no max, unknown sizes shown. New users start here. */
export function rangeIsOpen(range: CrowdRange): boolean {
  return !range.min && !range.max && range.showUnknown !== false;
}

/**
 * Events that always show, whatever the range: ones you stubbed (any plan or entry), and ones the people you
 * follow are attending or attended (Watching and Interested don't count: the notes say "attending").
 */
export function alwaysShownIds(log: PersonalLog, friends: readonly FeedItem[] = []): Set<string> {
  const ids = new Set<string>();
  for (const plan of log.plans) if (plan.eventId) ids.add(plan.eventId);
  for (const entry of log.added) if (entry.eventId) ids.add(entry.eventId);
  for (const item of friends) {
    if (!item.eventId || item.watched || item.interested) continue;
    ids.add(item.eventId);
  }
  return ids;
}

/** Whether an event shows under the range. */
export function passesCrowdRange(event: CrowdEvent, range: CrowdRange, keep: ReadonlySet<string>): boolean {
  if (rangeIsOpen(range) || keep.has(event.id)) return true;
  const n = rangeNumber(event);
  if (n == null) return range.showUnknown !== false;
  if (range.min && n < range.min) return false;
  if (range.max && n > range.max) return false;
  return true;
}

/** Split a list into what shows and what the range hides, in the list's order. */
export function splitByRange<T extends CrowdEvent>(events: readonly T[], range: CrowdRange, keep: ReadonlySet<string>): { shown: T[]; hidden: T[] } {
  const shown: T[] = [];
  const hidden: T[] = [];
  for (const event of events) (passesCrowdRange(event, range, keep) ? shown : hidden).push(event);
  return { shown, hidden };
}

/** "3,000 – No max", "No min – No max": the Settings row's value. */
export function crowdRangeLabel(range: CrowdRange): string {
  const fmt = (n: number) => n.toLocaleString('en-US');
  return `${range.min ? fmt(range.min) : 'No min'} – ${range.max ? fmt(range.max) : 'No max'}`;
}
