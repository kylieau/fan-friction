// Matching a seller's listing to a venue we know, and telling when two sellers list the same show. Shared by
// Ticketmaster and the sources added in build 5, item 1 (so there is one rule, not one per seller).

import type { LocalDate, Venue } from '../types';
import { VENUES } from '../venues';
import { METROS } from '../../config/metros';

function metersBetween([lng1, lat1]: readonly [number, number] | number[], [lng2, lat2]: readonly [number, number] | number[]): number {
  const r = Math.PI / 180;
  const x = (lng2 - lng1) * r * Math.cos(((lat1 + lat2) / 2) * r);
  const y = (lat2 - lat1) * r;
  return Math.sqrt(x * x + y * y) * 6_371_000;
}

/** A name with the differences sellers don't mean dropped: case, dashes, curly quotes, "Theatre" for "Theater". */
function plain(name: string): string {
  return name
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[-–—]/g, ' ')
    .replace(/\b(amphi)?theatre\b/g, '$1theater')
    .replace(/\bcentre\b/g, 'center')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Listings placed by anything but their exact name (a dropped tag, a dropped building or city, proximity), for the
 * nightly log: a room placed wrongly shows up here, where the unplaced list only shows misses (Oct 16).
 */
export const looseVenueMatches = new Map<string, { venueId: string; how: string; count: number }>();

function noteLoose(name: string, venueId: string, how: string) {
  const row = looseVenueMatches.get(name) ?? { venueId, how, count: 0 };
  row.count += 1;
  looseVenueMatches.set(name, row);
}

/**
 * The venue a listing names, by any name we store, else the one room within 300 m of its point (C016). Several
 * rooms on one campus make proximity ambiguous, so then nothing matches.
 */
export function venueByNameOrPlace(metroId: string, name: string, lat?: number, lng?: number, date?: LocalDate) {
  const ours = Object.values(VENUES).filter((venue) => venue.metroId === metroId);
  const key = name.trim().toLowerCase();
  // When two rooms share a name (a venue rebuilt on a new site), the show's date picks the one using it then: the
  // latest name already in use by that date, else the first on file.
  const named = (k: string) => {
    const hits = ours.flatMap((venue) => venue.names.filter((n) => plain(n.name) === plain(k)).map((n) => ({ venue, from: n.from ?? '' })));
    const inUse = date ? hits.filter((h) => h.from <= date).sort((x, y) => y.from.localeCompare(x.from)) : [];
    return (inUse[0] ?? hits[0])?.venue;
  };
  // Sellers tag a room with its city, state or parent building ("Peacock Theater - LA", "Greek Theatre-Los Angeles",
  // "Knight Concert Hall-Adrienne Arsht PAC", "Amaturo Theater at Broward Center", "Royale Boston"): retry without a
  // short trailing tag, without "at <building>", without the city's name, then without a leading "The". Each retry
  // must still equal a name we store in this city, and the exact name always wins.
  const untagged = key.replace(/\s*-\s*[a-z.]+(?:\s[a-z.]+){0,2}$/, '');
  const city = plain(METROS[metroId]?.name ?? '');
  const tries: [string, string][] = [
    ['exact', key],
    ['tag dropped', untagged],
    ['building dropped', key.replace(/\s+at\s+(the\s+)?[^-]+$/, '')],
    ['city dropped', city ? plain(key).replace(new RegExp(`\\s${city}$`), '') : key],
    ['"the" dropped', untagged.replace(/^the\s+/, '')],
  ];
  for (const [how, k] of tries) {
    const venue = named(k);
    if (!venue) continue;
    if (how !== 'exact') noteLoose(name, venue.id, how);
    return venue;
  }
  if (lat == null || lng == null || !Number.isFinite(lat) || !Number.isFinite(lng)) return undefined;
  const nearby = ours.filter((venue) => metersBetween(venue.location, [lng, lat]) <= 300);
  if (nearby.length === 1) noteLoose(name, nearby[0].id, 'within 300 m');
  return nearby.length === 1 ? nearby[0] : undefined;
}

/** Whether a room is closed on a date (its `closed` window; see the Venue type). Sellers drop listings for closed rooms. */
export function venueClosedOn(venue: Pick<Venue, 'closed'>, date: LocalDate): boolean {
  const c = venue.closed;
  if (!c) return false;
  return (c.from === undefined || date >= c.from) && (c.until === undefined || date < c.until);
}

/**
 * Ticketmaster's one-show key (C014), shared: one performer in one building on one date is one show, whatever time
 * each listing carries; and the same listing name in the same building on the same date is one too.
 */
export function showKeys(date: LocalDate, venueId: string, performer: string, name: string): [string, string] {
  return [[date, venueId, performer.toLowerCase().trim()].join('|'), [date, venueId, name.toLowerCase().replace(/\s+/g, ' ').trim()].join('|')];
}
