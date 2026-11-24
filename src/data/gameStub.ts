// A game you can stub even when the app holds no event for it (Kylie, Oct 15: "I should be able to stub an
// event no matter how I get to the event page"). A team's schedule lists every game, but the catalog only
// has the ones in a covered building on a day the nightly job saved (or a hand seed with its own id). When
// a schedule row has no catalog event behind it, the event page builds one from the row: a game event with
// a "-game-" id, the date first, so a stub made from it opens the same page again from the saved entry.
// It carries no crowd and no read; an away game outside the covered cities is marked out of the metro.

import { METROS } from '../config/metros';
import { TEAMS } from './teams';
import { VENUES, venueByName, venueGoesBy, venueNameOn } from './venues';
import { venueByNameOrPlace } from './sources/venueMatch';
import type { CrowdEvent, Entry, Plan, Team, TeamGame } from './types';

const MARK = '-game-';

/** What a schedule row hands the event page: the team whose page it came from, and the game. */
export interface GameLink {
  teamId: string;
  game: TeamGame;
}

/** The event page's id for a schedule game with no catalog event: "2026-10-04-game-espn-clippers-401…". */
export function gameEventId(game: TeamGame): string {
  return `${game.date}${MARK}${game.id}`;
}

export function isGameEventId(id: string | undefined): boolean {
  return Boolean(id && id.slice(10).startsWith(MARK));
}

/** The team and schedule game an id names ("…-game-espn-ny-giants-401…"), so a cold link can find its game again. */
export function gameRefFromId(id: string): { teamId: string; gameId: string } | null {
  if (!isGameEventId(id)) return null;
  const gameId = id.slice(10 + MARK.length);
  const m = gameId.match(/^(?:espn|mlb|ht)-(.+)-[^-]+$/);
  return m && TEAMS[m[1]] ? { teamId: m[1], gameId } : null;
}

/** The opponent's record by name, same sport first ("Giants" is three teams). */
/** "Thunder" → "thunder", "Sac Kings" → "sac-kings": a stand-in id for an opponent with no team record. */
function slugOf(name: string): string {
  return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'opponent';
}

function opponentOf(team: Team, name: string): Team | undefined {
  const key = name.trim().toLowerCase();
  const hits = Object.values(TEAMS).filter(
    (t) => t.shortName.toLowerCase() === key || t.name.toLowerCase() === key || (t.aliases ?? []).some((a) => a.toLowerCase() === key),
  );
  return hits.find((t) => t.sport === team.sport && t.league === team.league) ?? hits.find((t) => t.sport === team.sport) ?? hits[0];
}

/** The building by name: in the game's covered city first, then anywhere the catalog knows it. */
function venueOf(game: TeamGame, metroId: string | undefined) {
  if (!game.venueName) return undefined;
  if (metroId) {
    const here = venueByNameOrPlace(metroId, game.venueName);
    if (here) return here;
  }
  return venueByName(game.venueName);
}

/**
 * The room a schedule row names, as the app names it ("Dodger Stadium" for the feed's "UNIQLO Field at Dodger
 * Stadium"; Kylie, Oct 23, 2026, build 7.1 M21: one name per building, every feed), else the feed's own string.
 * A naming-rights spelling the matcher can't place goes in that room's `aliases`.
 */
export function gameVenueName(game: TeamGame, metroId?: string): string | undefined {
  const name = game.venueName;
  if (!name) return undefined;
  // The game's own city first; a room elsewhere only when exactly one room in the catalog goes by the name, so
  // "The Pavilion" (Villanova, UC Davis, Las Vegas) stays the feed's words rather than becoming a namesake's name.
  const here = game.eventMetroId ?? metroId;
  const venue = here ? venueByNameOrPlace(here, name) : undefined;
  if (venue) return venueNameOn(venue, game.date);
  const anywhere = Object.values(VENUES).filter((v) => venueGoesBy(v, name));
  return anywhere.length === 1 ? venueNameOn(anywhere[0], game.date) : name;
}

/** The home and away team ids, when both are known. */
function sides(team: Team, game: TeamGame): { home: string; away: string } | undefined {
  const them = opponentOf(team, game.opponent);
  if (!them) return undefined;
  return game.home ? { home: team.id, away: them.id } : { home: them.id, away: team.id };
}

/**
 * Same date, same home side (and visitor, when known): the catalog's copy of a schedule game under another id. The
 * feed's own game number decides first (a catalog id ends with it: "2026-11-17-espn-lakers-401910005"); when two games
 * that day share both teams and no number tells them apart (a doubleheader, one game missing from the catalog), it
 * declines rather than guess, so an answer never lands on the wrong game (build 7.3, A2; Codex, group 15 review).
 */
export function sameGame(link: GameLink, events: readonly CrowdEvent[]): CrowdEvent | undefined {
  const team = TEAMS[link.teamId];
  if (!team) return undefined;
  const pair = sides(team, link.game);
  const homeId = pair?.home ?? (link.game.home ? team.id : undefined);
  if (!homeId) return undefined;
  const candidates = events.filter(
    (e) => e.date === link.game.date && e.kind === 'game' && e.teams?.home === homeId && (!pair || !e.teams.away || e.teams.away === pair.away),
  );
  const feedNumber = /(\d{4,})$/.exec(link.game.id)?.[1];
  const exact = feedNumber ? candidates.find((e) => e.id.endsWith(`-${feedNumber}`)) : undefined;
  if (exact) return exact;
  // A candidate from the same feed carrying a different number is a different game (game 1, when game 2 is not in
  // the catalog); a hand seed's id ("2026-10-03-dodgers") or another feed's copy (a school calendar's own number)
  // still matches.
  const feed = /^([a-z]+)-/.exec(link.game.id)?.[1];
  const open = feedNumber && feed ? candidates.filter((e) => !(e.sourceId === feed && /-\d{4,}$/.test(e.id))) : candidates;
  return open.length === 1 ? open[0] : undefined;
}

/**
 * The games of a doubleheader the event belongs to: that day's games with the same two teams, by start; the event alone
 * when it has no twin (build 7.3, A2, the "Which Game?" row on the Stub it sheet).
 */
export function doubleheaderOf(event: CrowdEvent, day: readonly CrowdEvent[]): CrowdEvent[] {
  if (event.kind !== 'game' || !event.teams) return [event];
  const { home, away } = event.teams;
  const games = day.filter((e) => e.kind === 'game' && e.date === event.date && e.teams?.home === home && e.teams?.away === away);
  if (!games.some((e) => e.id === event.id)) games.push(event);
  return games.length > 1 ? [...games].sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99') || a.id.localeCompare(b.id)) : [event];
}

/** A game event built from a team's schedule row, for the event page and the Stub it sheet. */
export function eventFromGame(link: GameLink): CrowdEvent | null {
  const team = TEAMS[link.teamId];
  if (!team || !team.metroId) return null;
  const { game } = link;
  const venue = venueOf(game, game.eventMetroId);
  const metroId = venue?.metroId ?? game.eventMetroId ?? team.metroId;
  // The sides by team id; an opponent with no record of its own (a club from a city the app does not cover) still
  // names the pair, as a slug with the listing word beside it, so a plan row finds its fave and reads "vs Thunder"
  // (build 7.3, A1). `sameGame` keeps its stricter pair: a slug never has to match the catalog's own id.
  const pair = sides(team, game) ?? (game.home ? { home: team.id, away: slugOf(game.opponent), awayOpponent: slugOf(game.opponent) } : { home: slugOf(game.opponent), away: team.id });
  const center = METROS[metroId]?.center ?? METROS[team.metroId]?.center ?? [0, 0];
  return {
    id: game.eventId ?? gameEventId(game),
    metroId,
    date: game.date,
    start: game.start,
    kind: 'game',
    // The feed's raw form ("Clippers vs. Warriors", home first): the title rules build the names from it.
    title: game.home ? `${team.shortName} vs. ${game.opponent}` : `${game.opponent} vs. ${team.shortName}`,
    place: venue ? { type: 'venue', venueId: venue.id } : { type: 'point', location: center, name: game.venueName ?? 'Away' },
    audience: { domain: 'sports', sport: team.sport },
    ...(pair ? { teams: pair } : {}),
    ...(game.neutral ? { neutralSite: true } : {}),
    ...(game.preseason ? { preseason: true } : {}),
    ...(game.stakes ? { stakes: game.stakes } : {}),
    crowd: [],
    sourceId: 'team-schedule',
    // Outside every covered city: the stub keeps no read of the team's home city.
    ...(venue ? {} : { outsideMetro: true }),
  };
}

/** What a stub's page needs when the catalog never had the game: your own saved row, or a friend's line. */
export interface StubShape {
  title: string;
  date: string;
  venue?: string;
  metroId?: string;
  sport?: string;
  inMetro?: boolean;
}

export function stubShapeOf(row: Entry | Plan): StubShape {
  if ('when' in row) return { title: row.title, date: row.when.sort, venue: row.venue, metroId: row.metroId, sport: row.sport, inMetro: row.inMetro };
  return { title: row.title, date: row.date, venue: row.venue, metroId: row.metroId };
}

/** The same page rebuilt from a stub or a friend's line (its name kept as saved), when the catalog never had the game. */
export function eventFromStub(id: string, row: StubShape): CrowdEvent {
  const metroId = row.metroId ?? 'la';
  const venue = row.venue ? venueByName(row.venue, metroId) : undefined;
  return {
    id,
    metroId,
    date: row.date,
    start: null,
    kind: 'game',
    title: row.title,
    place: venue ? { type: 'venue', venueId: venue.id } : { type: 'point', location: METROS[metroId]?.center ?? [0, 0], name: row.venue ?? '' },
    audience: { domain: 'sports', sport: (row.sport ?? '').toLowerCase() || 'sports' },
    crowd: [],
    sourceId: 'team-schedule',
    titleFixed: true,
    ...(row.inMetro === false ? { outsideMetro: true } : {}),
  };
}

/** A plan made from a schedule game in a building outside its city's catalog: no read belongs to it. */
export function isOutsideGamePlan(plan: Plan): boolean {
  return isOutsideGame(plan.eventId, plan.metroId, plan.venue);
}

/** The same test for any line that names a schedule game (a friend's plan on Upcoming; Codex, build 7.1 stage 3). */
export function isOutsideGame(eventId: string | undefined, metroId: string | undefined, venue: string | undefined): boolean {
  if (!isGameEventId(eventId)) return false;
  return !Object.values(VENUES).some((v) => v.metroId === metroId && venueGoesBy(v, venue ?? ''));
}
