// The two display settings as one view sees them (build 7.2, Section C): the crowd size range (build 5, item 6) and
// Event Types. Built once per screen and shared by every list on it, so an exception a person relies on (a stub, a
// friend's plan, a favorite) is judged the same way everywhere (the research's "evaluate protection once"). Neither
// setting reaches the read: verdicts and totals keep every event.
//
// The exceptions differ on purpose: Crowd Size keeps your stubs and plans and what friends are attending; Event
// Types keeps those and a favorite team's, artist's, venue's or festival's events too (C2). Kylie has not said
// whether Crowd Size should protect favorites, so it does not (notes §C2: "Do not change Crowd Size, ask her").

import { alwaysShownIds, passesCrowdRange, rangeOn } from './crowdRange';
import { hiddenByEventTypes, hiddenEventTypesOf, isFavoriteEvent } from './eventTypeFilter';
import { favoritesOf } from './personalLog';
import type { FeedItem } from './profiles';
import type { CrowdEvent, CrowdRange, Favorite, PersonalLog } from './types';

export interface DisplayFilter {
  /** The range as this surface sees it (its map or lists switch may turn it off). */
  range: CrowdRange;
  /** Ids that always show under both settings: your plans and stubs, and friends' attending or attended. */
  keep: ReadonlySet<string>;
  /** The Event Types keys switched off. */
  hidden: ReadonlySet<string>;
  /** Favorites, which Event Types never hides. */
  favorites: readonly Favorite[];
}

/** Which setting hid the rows of a list, for the hidden line's wording (C9a, C9b). */
export type HiddenReason = 'size' | 'types' | 'both';

/**
 * The filter for one surface: the map (and its sheet) or lists (date pages, the Explore List, search, the event page's
 * This Day card). Event Types has no per-surface switch (C12, C13); the range keeps its two.
 */
export function displayFilter(log: PersonalLog, surface: 'map' | 'lists', friends: readonly FeedItem[] = []): DisplayFilter {
  return { range: rangeOn(log.crowdRange ?? {}, surface), keep: alwaysShownIds(log, friends), hidden: hiddenEventTypesOf(log), favorites: favoritesOf(log) };
}

/** Hidden by the crowd size range (its own exceptions applied). */
export function hiddenBySize(event: CrowdEvent, filter: DisplayFilter): boolean {
  return !passesCrowdRange(event, filter.range, filter.keep);
}

/** Hidden by Event Types, after its exceptions (C2). Local Competition reads this alone (C11a). */
export function hiddenByTypes(event: CrowdEvent, filter: DisplayFilter): boolean {
  if (filter.hidden.size === 0 || filter.keep.has(event.id)) return false;
  if (!hiddenByEventTypes(event, filter.hidden)) return false;
  return !isFavoriteEvent(event, filter.favorites);
}

/** Whether an event shows under both settings. */
export function passesDisplay(event: CrowdEvent, filter: DisplayFilter): boolean {
  return !hiddenBySize(event, filter) && !hiddenByTypes(event, filter);
}

export interface DisplaySplit<T extends CrowdEvent> {
  shown: T[];
  /** Every hidden row once, in the list's order, whichever setting hid it (C9b). */
  hidden: T[];
  /** What hid them: both settings, or the one that did. Null when nothing is hidden. */
  reason: HiddenReason | null;
  /** The ids Event Types hid (alone or with the range), for the Local Competition bars. */
  byTypes: ReadonlySet<string>;
}

/** Split a list into what shows and what the settings hide, in the list's order. */
export function splitByDisplay<T extends CrowdEvent>(events: readonly T[], filter: DisplayFilter): DisplaySplit<T> {
  const shown: T[] = [];
  const hidden: T[] = [];
  const byTypes = new Set<string>();
  let anySize = false;
  for (const event of events) {
    const size = hiddenBySize(event, filter);
    const types = hiddenByTypes(event, filter);
    if (!size && !types) {
      shown.push(event);
      continue;
    }
    hidden.push(event);
    if (size) anySize = true;
    if (types) byTypes.add(event.id);
  }
  const reason: HiddenReason | null = hidden.length === 0 ? null : anySize && byTypes.size > 0 ? 'both' : byTypes.size > 0 ? 'types' : 'size';
  return { shown, hidden, reason, byTypes };
}

/** The reason for a set of hits judged one at a time (search): both when both settings hid something. */
export function reasonOf(anySize: boolean, anyTypes: boolean): HiddenReason | null {
  return anySize && anyTypes ? 'both' : anyTypes ? 'types' : anySize ? 'size' : null;
}
