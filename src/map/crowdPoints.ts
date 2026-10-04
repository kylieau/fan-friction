// Turns a date's events into the dots the Crowds map draws. Kept apart from
// the drawing so the Event screen and share cards can reuse it.

import { VENUES, capacityOn, todayIn, venueNameOn } from '../data';
import { DEFAULT_METRO } from '../config/metros';
import { shortLocalDate } from '../lib/dates';
import type { CrowdEvent, LngLat } from '../data';

export interface CrowdPoint {
  event: CrowdEvent;
  venueName: string;
  location: LngLat;
  capacity: number | undefined;
  /** Announced, reported or estimated head count, if the research found one. */
  count: number | undefined;
  soldOut: boolean;
  /** Crowd over capacity when both are known, else null. Never above 1. */
  fill: number | null;
  /** Hasn't happened yet: drawn as a hollow dot with no crowd glow. */
  upcoming: boolean;
  /** "Sat, Oct 4" when the event is on a different date than the one being viewed. */
  dayTag: string | null;
}

/** Under the ~5k floor stays in the catalog. The map and the On-the-map sheet skip it. */
export function showsOnMap(event: CrowdEvent): boolean {
  return event.belowFloor !== true;
}

const SETUP_BY_SPORT: Record<string, string> = {
  basketball: 'basketball',
  hockey: 'hockey',
  football: 'football',
  soccer: 'soccer',
  baseball: 'baseball',
};

/** One point per event that happens at a known venue. Events with no venue yet are left off. */
export function crowdPoints(events: CrowdEvent[], date: string): CrowdPoint[] {
  const points: CrowdPoint[] = [];
  const today = todayIn(DEFAULT_METRO);
  for (const event of events) {
    if (event.place.type !== 'venue') continue;
    const venue = VENUES[event.place.venueId];
    if (!venue) continue;
    const setup = event.audience.domain === 'sports' ? SETUP_BY_SPORT[event.audience.sport] : 'concert';
    const capacity = capacityOn(venue, event.date, setup);
    const figure = event.crowd.find((c) => c.count !== undefined) ?? event.crowd[0];
    const count = figure?.count;
    const soldOut = event.crowd.some((c) => c.soldOut);
    const fill = soldOut ? 1 : count !== undefined && capacity ? Math.min(1, count / capacity) : null;
    points.push({
      event,
      venueName: venueNameOn(venue, event.date),
      location: venue.location,
      capacity,
      count,
      soldOut,
      fill,
      upcoming: event.date >= today,
      dayTag: event.date === date ? null : shortLocalDate(event.date),
    });
  }
  return points;
}

/**
 * Thousands with one decimal: 40000 → "40.0k", 17500 → "17.5k".
 * Used on the map and in the sheet. The event screen still spells the full count.
 */
export function crowdThousands(count: number): string {
  return `${(count / 1000).toFixed(1)}k`;
}

/** The room size used when a sold-out show has no separate count. */
export function eventCapacity(event: CrowdEvent): number | undefined {
  if (event.place.type !== 'venue') return undefined;
  const venue = VENUES[event.place.venueId];
  if (!venue) return undefined;
  const setup = event.audience.domain === 'sports' ? SETUP_BY_SPORT[event.audience.sport] : 'concert';
  return capacityOn(venue, event.date, setup);
}

/**
 * Short crowd wording. The sheet says "est" for an estimate; the map chip does not.
 * Sold out stays on the sheet. The map chip is the number only.
 * A sold-out show with no count of its own uses the room size, and that number is not "est".
 */
export function crowdShort(
  event: CrowdEvent,
  capacity = eventCapacity(event),
  withEst = true,
  withSold = true,
): string {
  const figure = event.crowd.find((c) => c.count !== undefined);
  const sold = withSold && event.crowd.some((c) => c.soldOut);
  if (figure?.count !== undefined) {
    const est = withEst && figure.kind === 'estimated' ? ' est' : '';
    return `${crowdThousands(figure.count)}${est}${sold ? ' (sold out)' : ''}`;
  }
  if (sold && capacity) return `${crowdThousands(capacity)} (sold out)`;
  if (!withSold && capacity && event.crowd.some((c) => c.soldOut)) return crowdThousands(capacity);
  return sold ? 'Sold out' : 'No count yet';
}

/** The kind of a crowd figure, for labels: "announced", "reported" or "estimated". */
export function crowdKind(event: CrowdEvent): string | undefined {
  return (event.crowd.find((c) => c.count !== undefined) ?? event.crowd[0])?.kind;
}
