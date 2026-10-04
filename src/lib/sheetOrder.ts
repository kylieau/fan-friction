import { VENUES } from '../data/venues';
import type { CrowdEvent, LngLat } from '../data/types';
import { milesBetween } from './windows';

function locationOf(event: CrowdEvent): LngLat | null {
  if (event.place.type === 'venue') return VENUES[event.place.venueId]?.location ?? null;
  if (event.place.type === 'point') return event.place.location;
  if (event.place.type === 'route') return event.place.path[0] ?? null;
  return null;
}

/** Earlier start first. A missing time sorts after a known one. */
function byStart(a: CrowdEvent, b: CrowdEvent): number {
  const start = (a.start ?? '99:99').localeCompare(b.start ?? '99:99');
  if (start !== 0) return start;
  return a.id.localeCompare(b.id);
}

/**
 * The sheet list under the elevated card. The selected event is left out.
 * With a selection, nearest venue first, then earlier start. With none, start time.
 * Rating is not a sort key.
 */
export function orderSheetEvents(events: CrowdEvent[], selected: CrowdEvent | null): CrowdEvent[] {
  const rest = selected ? events.filter((event) => event.id !== selected.id) : [...events];
  if (!selected) return rest.sort(byStart);
  const origin = locationOf(selected);
  return rest.sort((a, b) => {
    if (origin) {
      const da = locationOf(a);
      const db = locationOf(b);
      const milesA = da ? milesBetween(origin, da) : Number.POSITIVE_INFINITY;
      const milesB = db ? milesBetween(origin, db) : Number.POSITIVE_INFINITY;
      if (milesA !== milesB) return milesA - milesB;
    }
    return byStart(a, b);
  });
}
