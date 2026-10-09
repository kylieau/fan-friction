// Turns a date's events into the dots the Crowds map draws. Kept apart from
// the drawing so the Event screen and share cards can reuse it.

import { VENUES, capacityOn, roundEstimate, sizeTier, todayIn, venueNameOn } from '../data';
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
  /** Under the friction floor: a muted dot, no glow, placed after the big crowds. */
  muted: boolean;
}

/** Every event at a known venue is on the map; a small one is drawn muted (Kylie, Oct 9, 3.4). */
export function showsOnMap(event: CrowdEvent): boolean {
  return event.place.type === 'venue';
}

/** Under the ~5,000 floor: on the map but muted, with no friction label. */
export function isMuted(event: CrowdEvent): boolean {
  return sizeTier(event) !== 'feeds-friction';
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
      muted: isMuted(event),
    });
  }
  return points;
}

/**
 * The short crowd format, wherever a crowd is shortened (Kylie, Oct 9, 6.3): always
 * thousands with "k". 10,000 and up as whole thousands ("60k", never "16.0k"); under
 * 10,000 with one decimal ("9.5k"); under 1,000 with no leading zero (".6k"). Rounding
 * that reaches 10.0k reads "10k". Full numbers stay where there is room (C073).
 */
export function crowdThousands(count: number): string {
  if (count >= 9950) return `${Math.round(count / 1000)}k`;
  const k = (count / 1000).toFixed(1);
  if (count < 1000) return k === '1.0' ? '1.0k' : `${k.slice(1)}k`;
  return `${k}k`;
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
  withDraw = true,
): string {
  const figure = event.crowd.find((c) => c.count !== undefined);
  const sold = withSold && event.crowd.some((c) => c.soldOut);
  if (figure?.count !== undefined) {
    const est = withEst && figure.kind === 'estimated' ? ' est' : '';
    return `${crowdThousands(figure.count)}${est}${sold ? ' (sold out)' : ''}`;
  }
  if (sold && capacity) return `${crowdThousands(capacity)} (sold out)`;
  if (!withSold && capacity && event.crowd.some((c) => c.soldOut)) return crowdThousands(capacity);
  // A playoff estimate shows its low end (Kylie, Oct 7): that is what counts toward friction.
  if (!sold && withDraw && event.expectedDraw) {
    const d = event.expectedDraw;
    const shown = d.planning && d.low != null ? d.low : d.count;
    return `${crowdThousands(roundEstimate(shown))}${withEst ? (d.planning ? '+ est' : ' est') : ''}`;
  }
  return sold ? 'Sold out' : 'No count yet';
}

/** The kind of a crowd figure, for labels: "announced", "reported" or "estimated". */
export function crowdKind(event: CrowdEvent): string | undefined {
  return (event.crowd.find((c) => c.count !== undefined) ?? event.crowd[0])?.kind;
}
