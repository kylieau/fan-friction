// Matching a seller's listing to a venue we know, and telling when two sellers list the same show. Shared by
// Ticketmaster and the sources added in build 5, item 1 (so there is one rule, not one per seller).

import type { LocalDate } from '../types';
import { VENUES } from '../venues';

function metersBetween([lng1, lat1]: readonly [number, number] | number[], [lng2, lat2]: readonly [number, number] | number[]): number {
  const r = Math.PI / 180;
  const x = (lng2 - lng1) * r * Math.cos(((lat1 + lat2) / 2) * r);
  const y = (lat2 - lat1) * r;
  return Math.sqrt(x * x + y * y) * 6_371_000;
}

/**
 * The venue a listing names, by any name we store, else the one room within 300 m of its point (C016). Several
 * rooms on one campus make proximity ambiguous, so then nothing matches.
 */
export function venueByNameOrPlace(metroId: string, name: string, lat?: number, lng?: number) {
  const ours = Object.values(VENUES).filter((venue) => venue.metroId === metroId);
  const key = name.trim().toLowerCase();
  const byName = ours.find((venue) => venue.names.some((n) => n.name.toLowerCase() === key));
  if (byName || lat == null || lng == null || !Number.isFinite(lat) || !Number.isFinite(lng)) return byName;
  const nearby = ours.filter((venue) => metersBetween(venue.location, [lng, lat]) <= 300);
  return nearby.length === 1 ? nearby[0] : undefined;
}

/**
 * Ticketmaster's one-show key (C014), shared: one performer in one building on one date is one show, whatever time
 * each listing carries; and the same listing name in the same building on the same date is one too.
 */
export function showKeys(date: LocalDate, venueId: string, performer: string, name: string): [string, string] {
  return [[date, venueId, performer.toLowerCase().trim()].join('|'), [date, venueId, name.toLowerCase().replace(/\s+/g, ' ').trim()].join('|')];
}
