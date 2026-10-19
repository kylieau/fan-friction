import type { CrowdEvent } from './types';

/**
 * An artist record the app owns (Kylie, Oct 19, 2026, answer 3 to `docs/product/artist-genres-proposal.md`): the id a
 * favorite points at, so aliases ("The Weeknd" / "Weeknd") and sellers' ids attach to it later without renaming the
 * favorite. Shaped like a team or venue record: the registry is code, hand-reviewed, and starts empty by decision; a
 * favorite with no record keeps matching listings by its name, as before.
 */
export interface Artist {
  id: string;
  /** The public performing name, spelled the artist's way. */
  name: string;
  /** Other names listings and searches use; matched ignoring case. */
  aliases?: string[];
  /** Ticketmaster attraction ids (the feed's, never the website's numeric page id). */
  ticketmasterIds?: string[];
  /** SeatGeek performer ids, for when that feed turns on. */
  seatgeekIds?: string[];
}

/** Every artist record on file, by id. Empty until records are hand-added (Kylie, Oct 19, 2026). */
export const ARTISTS: Record<string, Artist> = {};

const norm = (s: string) => s.trim().toLowerCase();

/** The record whose name or alias is this, or undefined. */
export function artistByName(name: string): Artist | undefined {
  const n = norm(name);
  return Object.values(ARTISTS).find((artist) => norm(artist.name) === n || (artist.aliases ?? []).some((alias) => norm(alias) === n));
}

/** Does a listing belong to this artist? By a seller's id when the listing carries one, else by name or alias. */
export function artistMatches(event: CrowdEvent, artist: Artist): boolean {
  if (artist.ticketmasterIds?.length && event.performerIds?.some((id) => artist.ticketmasterIds?.includes(id))) return true;
  const names = [artist.name, ...(artist.aliases ?? [])].map(norm);
  return names.includes(norm(event.performer ?? '')) || names.includes(norm(event.title));
}
