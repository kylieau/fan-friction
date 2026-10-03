// How long an event runs, so the "what was on at the same time" strip can draw
// a bar for it. These are rough defaults by type, not facts about one event.

import type { CrowdEvent } from '../data';

const HOURS_BY_SPORT: Record<string, number> = {
  baseball: 2.75,
  football: 3.25,
  basketball: 2.5,
  hockey: 2.5,
  soccer: 2,
};

/** Rough running time in hours: games by sport, everything else (shows) 3. */
export function runningHours(event: CrowdEvent): number {
  if (event.audience.domain === 'sports') return HOURS_BY_SPORT[event.audience.sport] ?? 3;
  return 3;
}

/** "17:08" -> 17.13 (hours since midnight). */
export function hoursOf(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h + m / 60;
}

/** Straight-line miles between two [lng, lat] points. */
export function milesBetween(a: [number, number], b: [number, number]): number {
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b[1] - a[1]);
  const dLng = rad(b[0] - a[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[1])) * Math.cos(rad(b[1])) * Math.sin(dLng / 2) ** 2;
  return 3958.8 * 2 * Math.asin(Math.sqrt(h));
}
