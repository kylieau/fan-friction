// Which city an event belongs to: the city of the room it is in, not the city of the team's home.
// A home game played elsewhere (the Lakers in Las Vegas, the Spurs at Moody Center in Austin) is part
// of that city's day, not the team's. City-neutral: it follows each venue's own metro.

import { METROS } from '../../config/metros';
import type { CrowdEvent } from '../types';
import { VENUES, venueGoesBy } from '../venues';

/** The metro of a known venue, when the app covers it; otherwise the fallback (the team's metro). */
export function metroForVenue(venueId: string, fallback: string): string {
  const metro = VENUES[venueId]?.metroId;
  return metro && METROS[metro] ? metro : fallback;
}

/**
 * Is this event at a further-out room (outside every covered city, within about 2 hours of one)? Such an event is
 * listed in its own group and never counts toward a verdict, a stamp or the day's count (Kylie, Oct 19–20, 2026).
 */
export function isFurtherOut(event: CrowdEvent): boolean {
  return event.place.type === 'venue' && Boolean(VENUES[event.place.venueId]?.furtherOut);
}

/**
 * The same, for a stub, plan or friend's row, which keeps only its city and the room's name. Such a row's tile is
 * plain, with no tap: the city's verdict is about a day the event never counted toward (Kylie, Oct 20, 2026).
 */
export function isFurtherOutRoom(metroId: string | undefined, venue: string | undefined): boolean {
  const key = venue?.trim().toLowerCase();
  if (!metroId || !key) return false;
  return Object.values(VENUES).some((v) => v.furtherOut && v.metroId === metroId && venueGoesBy(v, key));
}

/**
 * Does this event belong in this city's day? An event at a venue that belongs to another covered city
 * does not. An event with no known venue, or at a venue in no covered city, stays where it was filed.
 * A further-out room's events never do: they are read only through `furtherOutOn`.
 */
export function belongsToCity(event: CrowdEvent, metroId: string): boolean {
  if (event.place.type !== 'venue') return true;
  if (VENUES[event.place.venueId]?.furtherOut) return false;
  const metro = VENUES[event.place.venueId]?.metroId;
  if (!metro || !METROS[metro]) return true;
  return metro === metroId;
}
