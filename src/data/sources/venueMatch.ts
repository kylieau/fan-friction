// Matching a seller's listing to a venue we know, and telling when two sellers list the same show. Shared by
// Ticketmaster and the sources added in build 5, item 1 (so there is one rule, not one per seller).

import type { LocalDate } from '../types';
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
  const tries = [key, untagged, key.replace(/\s+at\s+(the\s+)?[^-]+$/, ''), city ? plain(key).replace(new RegExp(`\\s${city}$`), '') : key];
  const byName = tries.map(named).find(Boolean) ?? named(untagged.replace(/^the\s+/, ''));
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
