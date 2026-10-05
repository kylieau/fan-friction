// Favorites: the teams, artists, venues and festivals a person follows (Kylie's
// word for all of them is "team"; the app word is Favorites, like ESPN and
// Ticketmaster). A favorite is saved on the log, so it lives on the phone and,
// signed in, in the account. Leagues are not followable (too big).
//
// A favorite points at a catalog record when one exists (a Team or Venue id), so
// upcoming events can be matched. Names that have no catalog record yet (UCLA WBB,
// The Weeknd) still work: they match the log by name and get a page from it.

import { METROS } from '../config/metros';
import { TEAMS } from './teams';
import { VENUES, venueNameOn } from './venues';
import type { CrowdEvent, Favorite, FavoriteKind, LoggedNight } from './types';

export type { Favorite, FavoriteKind } from './types';

export function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function favoriteKey(fav: Pick<Favorite, 'kind' | 'id'>): string {
  return `${fav.kind}:${fav.id}`;
}

/** The word on a page header: "Team", "Artist", "Venue", "Festival". */
export function kindLabel(kind: FavoriteKind): string {
  return { team: 'Team', artist: 'Artist', venue: 'Venue', festival: 'Festival' }[kind];
}

function teamByShortName(name: string) {
  const lower = name.toLowerCase();
  return Object.values(TEAMS).find(
    (team) =>
      team.shortName.toLowerCase() === lower ||
      team.name.toLowerCase() === lower ||
      (team.aliases ?? []).some((alias) => alias.toLowerCase() === lower),
  );
}

function venueByName(name: string) {
  const lower = name.toLowerCase();
  return Object.values(VENUES).find((venue) => venue.names.some((n) => n.name.toLowerCase() === lower));
}

/** Build a favorite from a name, linking it to the catalog when the name matches. */
export function favoriteFor(kind: FavoriteKind, label: string): Favorite {
  const clean = label.trim();
  if (kind === 'team') {
    const team = teamByShortName(clean);
    if (team) return { kind, id: team.id, label: team.shortName, teamId: team.id };
  }
  if (kind === 'venue') {
    const venue = venueByName(clean);
    if (venue) return { kind, id: venue.id, label: venueNameOn(venue, today()), venueId: venue.id };
  }
  return { kind, id: slug(clean), label: clean };
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * The favorites a log implies: every team tag, every artist, every venue she
 * has been to. Used once, to pre-fill Kylie's tab. A new person's log is empty,
 * so this gives them nothing and suggestions take over.
 */
export function favoritesFromLog(nights: readonly LoggedNight[]): Favorite[] {
  const seen = new Map<string, Favorite>();
  const add = (fav: Favorite) => {
    const key = favoriteKey(fav);
    if (!seen.has(key)) seen.set(key, fav);
  };
  for (const night of nights) {
    if (night.kind === 'show') {
      for (const side of night.sides) add(favoriteFor('artist', side));
    } else if (night.kind === 'festival') {
      add(favoriteFor('festival', night.title));
    } else {
      // Sports: the tag is the specific program (UCLA WBB), the side is the school or club.
      for (const tag of night.tags) if (tag !== 'Concerts') add(favoriteFor('team', tag));
    }
    if (night.venue) add(favoriteFor('venue', night.venue));
  }
  return [...seen.values()];
}

/** Home-city teams and venues worth suggesting to someone with an empty log. */
export function suggestionsFor(homeMetroId: string | null, have: readonly Favorite[]): Favorite[] {
  if (!homeMetroId || !METROS[homeMetroId]) return [];
  const haveKeys = new Set(have.map(favoriteKey));
  const teams = Object.values(TEAMS)
    .filter((team) => team.metroId === homeMetroId)
    .map((team) => favoriteFor('team', team.shortName));
  const venues = Object.values(VENUES)
    .filter((venue) => venue.metroId === homeMetroId)
    .map((venue) => favoriteFor('venue', venueNameOn(venue, today())));
  return [...teams, ...venues].filter((fav) => !haveKeys.has(favoriteKey(fav)));
}

/** Does a logged night belong to this favorite? Matched by name, since logs are names. */
export function nightMatches(night: LoggedNight, fav: Favorite): boolean {
  const label = fav.label.toLowerCase();
  switch (fav.kind) {
    case 'team': {
      const names = new Set([label]);
      const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
      if (team) {
        names.add(team.shortName.toLowerCase());
        (team.aliases ?? []).forEach((alias) => names.add(alias.toLowerCase()));
      }
      if (night.tags.some((tag) => names.has(tag.toLowerCase()))) return true;
      // A bare side ("UCLA") only counts for a school's football program, the log's default.
      return night.kind !== 'show' && night.kind !== 'festival' && !team && night.sides.some((side) => side.toLowerCase() === label);
    }
    case 'artist':
      return night.kind === 'show' && night.sides.some((side) => side.toLowerCase() === label);
    case 'festival':
      return night.kind === 'festival' && night.title.toLowerCase() === label;
    case 'venue':
      return (night.venue ?? '').toLowerCase() === label;
  }
}

/** Does a catalog event belong to this favorite? Matched by id when there is one. */
export function eventMatches(event: CrowdEvent, fav: Favorite): boolean {
  const label = fav.label.toLowerCase();
  switch (fav.kind) {
    case 'team':
      if (fav.teamId && event.teams) return event.teams.home === fav.teamId || event.teams.away === fav.teamId;
      return event.title.toLowerCase().includes(label);
    case 'artist':
      return (event.performer ?? '').toLowerCase() === label || event.title.toLowerCase() === label;
    case 'festival':
      return event.kind === 'festival' && event.title.toLowerCase().includes(label);
    case 'venue':
      if (fav.venueId) return event.place.type === 'venue' && event.place.venueId === fav.venueId;
      return event.place.type !== 'venue' && event.place.name.toLowerCase() === label;
  }
}

/** A two-letter mark for a favorite without a logo: "LAD", "UCLA", "W". */
export function favoriteMark(fav: Favorite): string {
  if (fav.teamId) {
    const team = TEAMS[fav.teamId];
    if (team) return team.abbr ?? team.shortName.slice(0, 3).toUpperCase();
  }
  const words = fav.label.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return fav.label.slice(0, 2).toUpperCase();
}
