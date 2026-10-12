import { TEAMS } from '../data/teams';
import { VENUES, venueNameOn } from '../data/venues';
import type { CrowdEvent } from '../data/types';
import { displayName } from '../config/names';

/** Tags that belong after the first name. CFB is stripped from old titles and never written back. */
const SQUAD_TAG = 'FB|MBB|WBB|CFB';

/** College football is (FB). College basketball is (MBB), or (WBB) when the team says so. */
function collegeAbbrev(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'sports' || !event.teams) return null;
  const sides = [TEAMS[event.teams.home], TEAMS[event.teams.away]].filter((t) => t !== undefined);
  if (!sides.some((t) => /college/i.test(t.league))) return null;
  if (event.audience.sport === 'football') return 'FB';
  if (event.audience.sport === 'basketball') {
    const women = sides.some((t) => /women|wbb/i.test(t.league) || t.id.endsWith('-wbb'));
    return women ? 'WBB' : 'MBB';
  }
  return null;
}

/** A stored (CFB) is the old matchup tag. The name slot is (FB). */
function squadTag(raw: string): string {
  return raw === 'CFB' ? 'FB' : raw;
}

/** The two sides of a game as the source wrote them (home first), the squad tag, and a trailing event name ("Red River Showdown"). */
function sidesOf(title: string, tag: string | null): { home: string; away: string; tag: string | null; eventName: string | null } | null {
  let rest = title.trim();
  let found = tag;
  const trailing = rest.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (trailing) {
    rest = trailing[1].trim();
    found = found ?? squadTag(trailing[2]);
  }
  const vs = rest.match(/^(.*?)\s+(vs\.?)\s+(.*)$/i);
  if (!vs) return null;
  let home = vs[1].trim();
  const onFirst = home.match(new RegExp(`^(.*?)\\s+\\((${SQUAD_TAG})\\)\\s*$`));
  if (onFirst) {
    home = onFirst[1].trim();
    found = found ?? squadTag(onFirst[2]);
  }
  let away = vs[3].trim();
  // A parenthetical that is not a squad tag names the event: "Oklahoma (Red River Showdown)".
  let eventName: string | null = null;
  const named = away.match(/^(.*?)\s+\(([^()]+)\)\s*$/);
  if (named && !new RegExp(`^(${SQUAD_TAG})$`).test(named[2])) {
    away = named[1].trim();
    eventName = named[2].trim();
  }
  return { home, away, tag: found, eventName };
}

/** "NLCS G2", "World Series G7", "Wild Card": the round and game as a short label, or null in the regular season. */
export function stakesLabel(event: Pick<CrowdEvent, 'stakes' | 'audience' | 'kind'>): string | null {
  const round = event.stakes?.round;
  if (!round || event.audience.domain !== 'sports' || event.kind === 'show' || event.kind === 'festival') return null;
  const game = event.stakes?.game;
  return game && game > 0 ? `${round} G${game}` : round;
}

/**
 * A game's name (Kylie, Oct 11, 2026; docs/research/topics/event-naming-at-vs.md): "{Away} at {Home}"
 * in every sport, the way the source names the sides; college keeps the squad tag after the school,
 * "Washington at USC (FB)". A neutral site is the one place "vs." appears, designated visitor first,
 * with the event's own name ahead of it: "Red River Showdown · Texas vs. Oklahoma". A title with
 * no "vs" is left as written.
 */
function gameName(title: string, tag: string | null, neutral: boolean): string {
  const sides = sidesOf(title, tag);
  if (!sides) return title.trim();
  const home = sides.tag ? `${sides.home} (${sides.tag})` : sides.home;
  if (neutral) {
    const name = `${sides.home} vs. ${sides.away}${sides.tag ? ` (${sides.tag})` : ''}`;
    return sides.eventName ? `${sides.eventName} · ${name}` : name;
  }
  return `${sides.away} at ${home}`;
}

/**
 * Concerts and music festivals: the headliner only. Tour and anniversary
 * stay on the full title. No made-up short name when a headliner is missing.
 */
function headliner(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'music') return null;
  if (event.kind !== 'show' && event.kind !== 'festival') return null;
  // A festival's chip is the festival, not a performer (build notes 2, event naming).
  if (event.kind === 'festival') return displayName(event.title) || null;
  const name = event.performer?.trim();
  return name ? displayName(name) : null;
}

function venueLabel(event: CrowdEvent): string | null {
  if (event.place.type !== 'venue') return null;
  const venue = VENUES[event.place.venueId];
  return venue ? venueNameOn(venue, event.date) : null;
}

/** True when another chip that night would show the same headliner. */
function sharesHeadliner(event: CrowdEvent, name: string, entry: readonly CrowdEvent[]): boolean {
  const key = name.toLowerCase();
  return entry.some(
    (other) =>
      other.id !== event.id &&
      other.date === event.date &&
      headliner(other)?.toLowerCase() === key,
  );
}

/** Home club as people say it: Dodgers, Ducks, Galaxy. Not the visitor, not ATL @ LAD. */
function spokenHome(event: CrowdEvent): string | null {
  if (event.audience.domain !== 'sports') return null;
  if (event.kind === 'show' || event.kind === 'festival') return null;
  const id = event.teams?.home;
  if (id && TEAMS[id]) return TEAMS[id].shortName;
  const bare = event.title.replace(new RegExp(`\\s+\\((${SQUAD_TAG})\\)`, 'g'), '');
  const first = bare.split(/\s+vs\.?\s+/i)[0]?.trim();
  return first || null;
}

function spokenAway(event: CrowdEvent): string | null {
  const id = event.teams?.away;
  if (id && TEAMS[id]) return TEAMS[id].shortName;
  return null;
}

/**
 * Postseason chip. Parentheses are the locked punctuation (Oct 4, 2026):
 * "Dodgers (NLDS G2)". Change this function to swap the delimiter.
 * Regular season and friendlies have no stakes, so they stay the home name.
 */
function postseasonChip(home: string, event: CrowdEvent): string {
  const round = event.stakes?.round;
  if (!round) return home;
  const game = event.stakes?.game;
  const series = game && game > 0 ? `${round} G${game}` : round;
  return `${home} (${series})`;
}

/** Squad tag and visitor only when two chips that night would otherwise match. */
function sportsChip(event: CrowdEvent, squad: boolean, visitor: boolean): string | null {
  const home = spokenHome(event);
  if (!home) return null;
  let name = home;
  if (squad) {
    const tag = collegeAbbrev(event);
    if (tag) name = `${name} (${tag})`;
  }
  if (visitor) {
    const away = spokenAway(event);
    if (away) name = `${name} · ${away}`;
  }
  return postseasonChip(name, event);
}

function sportsCollide(event: CrowdEvent, entry: readonly CrowdEvent[], squad: boolean, visitor: boolean): boolean {
  const mine = sportsChip(event, squad, visitor);
  if (!mine) return false;
  return entry.some(
    (other) =>
      other.id !== event.id && other.date === event.date && sportsChip(other, squad, visitor) === mine,
  );
}

/**
 * Map chip line 1. A concert is the headliner. A game is the home short name.
 * Postseason adds the round and game number in parentheses. The venue, a squad
 * tag, or the visitor is added only when two chips that night would otherwise
 * match. The sheet and the event page keep the full title.
 */
export function mapTitle(event: CrowdEvent, entry: readonly CrowdEvent[] = []): string {
  const name = headliner(event);
  if (name) {
    if (!sharesHeadliner(event, name, entry)) return name;
    const venue = venueLabel(event);
    return venue ? `${name} · ${venue}` : name;
  }
  if (spokenHome(event)) {
    if (!sportsCollide(event, entry, false, false)) return sportsChip(event, false, false)!;
    if (!sportsCollide(event, entry, true, false)) return sportsChip(event, true, false)!;
    return sportsChip(event, true, true)!;
  }
  return gameName(event.title, collegeAbbrev(event), Boolean(event.neutralSite));
}

/**
 * Full name on the sheet, the event page, the feed and the log: the label first, then the game
 * (Kylie, Oct 11, 2026): "NLCS G2 · Dodgers at Brewers". Identity is the event id and date, not this
 * string. A show reads as the feed's full name when it says more than the act ("Bruno Mars: The
 * Romantic Tour"), in the casing the act uses (src/config/names.ts).
 */
export function listTitle(event: CrowdEvent): string {
  if (event.kind === 'show' || event.kind === 'festival') return displayName(event.officialTitle ?? event.title);
  const name = gameName(event.title, collegeAbbrev(event), Boolean(event.neutralSite));
  const label = stakesLabel(event);
  return label ? `${label} · ${name}` : name;
}

/** A game on a team's own schedule, from that team's side (TeamGame). */
export interface SchedulePick {
  home: boolean;
  neutral?: boolean;
  opponent: string;
  venueName?: string;
  preseason?: boolean;
  stakes?: { round: string; game?: number };
}

function scheduleLabel(game: SchedulePick): string | null {
  if (game.stakes) return game.stakes.game ? `${game.stakes.round} G${game.stakes.game}` : game.stakes.round;
  return game.preseason ? 'Preseason' : null;
}

/**
 * The team-relative form, only on a favorite team's own page (Kylie, Oct 11, 2026): "vs Padres" at
 * home, "@ Brewers" away, "vs 49ers · Melbourne" at a neutral site; the label first. Never on share
 * cards, the feed, search or the log: those use listTitle.
 */
export function teamRelativeTitle(game: SchedulePick): string {
  const side = game.neutral ? `vs ${game.opponent}${game.venueName ? ` · ${game.venueName}` : ''}` : game.home ? `vs ${game.opponent}` : `@ ${game.opponent}`;
  const label = scheduleLabel(game);
  return label ? `${label} · ${side}` : side;
}

/** The same game in its canonical form for a list that is not the team's own page: "Dodgers at Brewers". */
export function scheduleGameTitle(us: string, game: SchedulePick): string {
  const name = game.neutral ? (game.home ? `${game.opponent} vs. ${us}` : `${us} vs. ${game.opponent}`) : game.home ? `${game.opponent} at ${us}` : `${us} at ${game.opponent}`;
  const label = scheduleLabel(game);
  return label ? `${label} · ${name}` : name;
}
