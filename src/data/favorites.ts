// Favorites: the teams, artists, venues and festivals a person follows (Kylie's
// word for all of them is "team"; the app word is Favorites, like ESPN and
// Ticketmaster). A favorite is saved on the log, so it lives on the phone and,
// signed in, in the account. Leagues are not followable (too big).
//
// A favorite points at a catalog record when one exists (a Team or Venue id), so
// upcoming events can be matched. Names that have no catalog record yet (UCLA WBB,
// The Weeknd) still work: they match the log by name and get a page from it.

import { METROS } from '../config/metros';
import { ARTISTS, artistByName, artistMatches } from './artists';
import { TEAMS, isCollegeTeam, leagueMark, teamBadge, teamDisplayName, teamLongName } from './teams';
import { VENUES, venueByName, venueNameOn } from './venues';
import type { CrowdEvent, Favorite, FavoriteKind, Entry, Team } from './types';

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

// Nineteen short names are shared ("Clippers" is LA's and Columbus's), so a team's own id wins
// first; a bare name then takes the team whose id is that name (the LA Clippers, the SF Giants).
function teamByShortName(name: string) {
  const lower = name.toLowerCase();
  const own = TEAMS[lower] ?? TEAMS[slug(name)];
  if (own) return own;
  return Object.values(TEAMS).find(
    (team) =>
      team.shortName.toLowerCase() === lower ||
      team.name.toLowerCase() === lower ||
      (team.aliases ?? []).some((alias) => alias.toLowerCase() === lower),
  );
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
  if (kind === 'artist') {
    const artist = artistByName(clean);
    if (artist) return { kind, id: artist.id, label: artist.name, artistId: artist.id };
  }
  return { kind, id: slug(clean), label: clean };
}

/** A favorite for a team record already in hand, never looked up again by its shared short name. */
export function favoriteForTeam(team: Team): Favorite {
  return { kind: 'team', id: team.id, label: team.shortName, teamId: team.id };
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * The favorites a log implies: every team tag, every artist, every venue she
 * has been to. Used once, to pre-fill Kylie's tab. A new person's log is empty,
 * so this gives them nothing and suggestions take over.
 */
export function favoritesFromLog(entries: readonly Entry[]): Favorite[] {
  const seen = new Map<string, Favorite>();
  const add = (fav: Favorite) => {
    const key = favoriteKey(fav);
    if (!seen.has(key)) seen.set(key, fav);
  };
  for (const entry of entries) {
    if (entry.kind === 'show') {
      for (const side of entry.sides) add(favoriteFor('artist', side));
    } else if (entry.kind === 'festival') {
      add(favoriteFor('festival', entry.title));
    } else {
      // Sports: the tag is the specific program (UCLA WBB), the side is the school or club.
      for (const tag of entry.tags) if (tag !== 'Concerts') add(favoriteFor('team', tag));
    }
    if (entry.venue) add(favoriteFor('venue', entry.venue));
  }
  return [...seen.values()];
}

/** Home-city teams and venues worth suggesting to someone with an empty log. */
export function suggestionsFor(homeMetroId: string | null, have: readonly Favorite[]): Favorite[] {
  if (!homeMetroId || !METROS[homeMetroId]) return [];
  const haveKeys = new Set(have.map(favoriteKey));
  const teams = Object.values(TEAMS)
    .filter((team) => team.metroId === homeMetroId)
    .map(favoriteForTeam);
  // A room closed for good is not suggested, and two rooms with one name (the closed Downtown Disney House of Blues
  // and its GardenWalk successor) make one favorite, not two children with one key (found Oct 17, 2026, build 6).
  const venues = Object.values(VENUES)
    .filter((venue) => venue.metroId === homeMetroId && !(venue.closed && !venue.closed.until))
    .sort((a, b) => Math.max(...b.capacity.map((c) => c.seats)) - Math.max(...a.capacity.map((c) => c.seats)))
    .map((venue) => favoriteFor('venue', venueNameOn(venue, today())));
  const seen = new Set<string>();
  return [...teams, ...venues].filter((fav) => {
    const key = favoriteKey(fav);
    if (haveKeys.has(key) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Does a logged night belong to this favorite? Matched by name, since logs are names. */
export function entryMatches(entry: Entry, fav: Favorite): boolean {
  const label = fav.label.toLowerCase();
  switch (fav.kind) {
    case 'team': {
      const names = new Set([label]);
      const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
      if (team) {
        names.add(team.shortName.toLowerCase());
        (team.aliases ?? []).forEach((alias) => names.add(alias.toLowerCase()));
      }
      // Both teams of a game count (build 7, Locked, Kylie, Oct 22, 2026): the opponent on the stub too.
      if ([...entry.tags, ...(entry.opponents ?? [])].some((tag) => names.has(tag.toLowerCase()))) return true;
      // A bare side ("UCLA") only counts for a school's football program, the log's default.
      return entry.kind !== 'show' && entry.kind !== 'festival' && !team && entry.sides.some((side) => side.toLowerCase() === label);
    }
    case 'artist':
      return entry.kind === 'show' && entry.sides.some((side) => side.toLowerCase() === label);
    case 'festival':
      return entry.kind === 'festival' && entry.title.toLowerCase() === label;
    case 'venue':
      return (entry.venue ?? '').toLowerCase() === label;
  }
}

/** Does a catalog event belong to this favorite? Matched by id when there is one. */
export function eventMatches(event: CrowdEvent, fav: Favorite): boolean {
  const label = fav.label.toLowerCase();
  switch (fav.kind) {
    case 'team':
      if (fav.teamId && event.teams) return event.teams.home === fav.teamId || event.teams.away === fav.teamId;
      return teamNameMatches(event, fav, label);
    case 'artist': {
      const artist = fav.artistId ? ARTISTS[fav.artistId] : undefined;
      if (artist) return artistMatches(event, artist);
      return (event.performer ?? '').toLowerCase() === label || event.title.toLowerCase() === label;
    }
    case 'festival':
      return event.kind === 'festival' && event.title.toLowerCase().includes(label);
    case 'venue':
      if (fav.venueId) return event.place.type === 'venue' && event.place.venueId === fav.venueId;
      return event.place.type !== 'venue' && event.place.name.toLowerCase() === label;
  }
}

/**
 * A team favorite against an event with no team ids (a school feed's visitor, a hand seed): one side of the matchup
 * must be the team itself, by its label, short name, full name or an alias, never a word inside another team's name;
 * never a pro team on a school game; the sport when both are known. "Mercyhurst Lakers Mens Basketball" is not the
 * LA Lakers (recurring; Codex, build 7.1 steps 9–10 review).
 */
function teamNameMatches(event: CrowdEvent, fav: Favorite, label: string): boolean {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  const audience = event.audience as { domain?: string; sport?: string; level?: string } | undefined;
  if (team) {
    if (audience?.level === 'college' && !isCollegeTeam(team)) return false;
    if (audience?.sport && audience.sport.toLowerCase() !== team.sport.toLowerCase()) return false;
  }
  const names = new Set([label, ...(team ? [team.name, team.shortName, ...(team.aliases ?? [])] : [])].map((n) => n.toLowerCase().trim()));
  const title = event.title.toLowerCase().replace(/\s*\([^)]*\)\s*$/, '').trim();
  const sides = title.split(/\s+(?:at|vs\.?|v\.?|@)\s+/);
  return sides.some((side) => names.has(side.trim()));
}

const teamsOf = (favs: readonly Favorite[]) => favs.flatMap((f) => (f.teamId && TEAMS[f.teamId] ? [TEAMS[f.teamId]] : []));

/** The league caption under a pro team's badge when another pro badge in the set clashes with it (Kylie, Oct 17: option A). */
export function favoriteLeagueMark(fav: Favorite, shown: readonly Favorite[]): string | null {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  return team ? leagueMark(team, teamsOf(shown)) : null;
}

/**
 * The mark for a favorite without a logo: a team's badge code, given the other favorites shown beside it (build 6,
 * item 9a: "UCLA MBB" only when another program of the same code and sport is in the set); two letters for an
 * artist, venue or festival.
 */
export function favoriteMark(fav: Favorite, shown: readonly Favorite[] = []): string {
  if (fav.teamId) {
    const team = TEAMS[fav.teamId];
    if (team) return teamBadge(team, teamsOf(shown));
  }
  const words = fav.label.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return fav.label.slice(0, 2).toUpperCase();
}

/** What a favorite is called in words where a row names it (Kylie, Oct 19): a team's display name ("LA Dodgers", "UCLA FB"), else its label. */
export function favoriteDisplayName(fav: Favorite): string {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  return team ? teamDisplayName(team) : fav.label;
}

/** The name written out in a list beside a favorite's badge (the Following sheet): "UCLA Football", else the label. */
export function favoriteLongName(fav: Favorite): string {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  return team ? teamLongName(team) : fav.label;
}

/**
 * The full official name, where build 7's naming rule allows it (Kylie, Oct 22, 2026: the favorites section and
 * sheet, the team page header, search results): "Los Angeles Dodgers" for a pro team, the school's words for a
 * college program ("UCLA Football": no one spells out the university), else the label. The same expression the
 * team page header renders. Everywhere else keeps city shortcuts (`favoriteDisplayName`, `favoriteLongName`).
 */
export function favoriteOfficialName(fav: Favorite): string {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  if (!team) return fav.label;
  return isCollegeTeam(team) ? teamLongName(team) : team.name;
}

/** Every name a favorite is found by, lower-cased: its label and long name, and a team's short name, full name and aliases. */
export function favoriteSearchNames(fav: Favorite): string[] {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  return [fav.label, favoriteLongName(fav), ...(team ? [team.shortName, team.name, ...(team.aliases ?? [])] : [])].map((n) => n.toLowerCase());
}

/**
 * The records a query finds (the Faves picker's search, shared with New stub's "Which team?" since Oct 21, 2026):
 * your favorites, the home city's suggestions, every team on file, and names from the log. Optionally one kind.
 */
export function searchFavoriteRecords(query: string, favorites: readonly Favorite[], entries: readonly Entry[], homeMetroId: string | null, kind?: FavoriteKind): Favorite[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const seen = new Set<string>();
  const out: Favorite[] = [];
  const add = (fav: Favorite) => {
    if (kind && fav.kind !== kind) return;
    const key = favoriteKey(fav);
    if (!seen.has(key) && favoriteSearchNames(fav).some((name) => name.includes(q))) {
      seen.add(key);
      out.push(fav);
    }
  };
  favorites.forEach(add);
  suggestionsFor(homeMetroId, []).forEach(add);
  Object.values(TEAMS).forEach((team) => add(favoriteForTeam(team)));
  for (const entry of entries) {
    if (entry.kind === 'show') entry.sides.forEach((side) => add(favoriteFor('artist', side)));
    else if (entry.kind === 'festival') add(favoriteFor('festival', entry.title));
    else entry.tags.forEach((tag) => tag !== 'Concerts' && add(favoriteFor('team', tag)));
    if (entry.venue) add(favoriteFor('venue', entry.venue));
  }
  return out;
}
