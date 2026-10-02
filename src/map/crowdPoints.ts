// Turns a date's events into the dots the Crowds map draws. Kept apart from
// the drawing so the Event screen and share cards can reuse it.

import { VENUES, capacityOn, venueNameOn } from '../data';
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
  /** True for the largest known crowd of the date (the ★). */
  biggest: boolean;
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
  for (const event of events) {
    if (event.place.type !== 'venue') continue;
    const venue = VENUES[event.place.venueId];
    if (!venue) continue;
    const setup = event.audience.domain === 'sports' ? SETUP_BY_SPORT[event.audience.sport] : 'concert';
    const capacity = capacityOn(venue, date, setup);
    const figure = event.crowd.find((c) => c.count !== undefined) ?? event.crowd[0];
    const count = figure?.count;
    const soldOut = event.crowd.some((c) => c.soldOut);
    const fill = soldOut ? 1 : count !== undefined && capacity ? Math.min(1, count / capacity) : null;
    points.push({
      event,
      venueName: venueNameOn(venue, date),
      location: venue.location,
      capacity,
      count,
      soldOut,
      fill,
      biggest: false,
    });
  }
  const top = points.reduce<CrowdPoint | null>(
    (best, p) => (p.count !== undefined && (!best || p.count > (best.count ?? 0)) ? p : best),
    null,
  );
  if (top) top.biggest = true;
  return points;
}

/** The kind of a crowd figure, for labels: "announced", "reported" or "estimated". */
export function crowdKind(event: CrowdEvent): string | undefined {
  return (event.crowd.find((c) => c.count !== undefined) ?? event.crowd[0])?.kind;
}
