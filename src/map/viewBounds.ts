import { useContext, useEffect, useRef } from 'react';
import { MapContext } from './BaseMap';
import { VENUES, type CrowdEvent, type LngLat } from '../data';

/** The map's edges after it has stopped moving. */
export interface ViewBounds {
  west: number;
  south: number;
  east: number;
  north: number;
}

/** Wait past the last moveend so a short flurry of zooms counts as one settle. */
const SETTLE_MS = 200;

function coordsOf(event: CrowdEvent): LngLat[] {
  if (event.place.type === 'venue') {
    const venue = VENUES[event.place.venueId];
    return venue ? [venue.location] : [];
  }
  if (event.place.type === 'point') return [event.place.location];
  return event.place.path;
}

/**
 * True when the event has a spot on the map and that spot is inside the
 * settled view. Before the first settle, any event with a spot counts.
 */
export function eventInBounds(event: CrowdEvent, bounds: ViewBounds | null): boolean {
  const coords = coordsOf(event);
  if (coords.length === 0) return false;
  if (!bounds) return true;
  return coords.some(
    ([lng, lat]) => lng >= bounds.west && lng <= bounds.east && lat >= bounds.south && lat <= bounds.north,
  );
}

/**
 * Reports the map bounds once movement has finished. Listens to moveend
 * (the end of a pan or zoom), then waits a short moment. It does not listen
 * to move, so the list does not change on every frame of a drag.
 */
export function MapSettle({ onSettle }: { onSettle: (bounds: ViewBounds) => void }) {
  const map = useContext(MapContext);
  const onSettleRef = useRef(onSettle);
  onSettleRef.current = onSettle;

  useEffect(() => {
    if (!map) return;
    let timer = 0;
    const publish = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const next = map.getBounds();
        onSettleRef.current({
          west: next.getWest(),
          south: next.getSouth(),
          east: next.getEast(),
          north: next.getNorth(),
        });
      }, SETTLE_MS);
    };
    map.on('moveend', publish);
    publish();
    return () => {
      window.clearTimeout(timer);
      map.off('moveend', publish);
    };
  }, [map]);

  return null;
}
