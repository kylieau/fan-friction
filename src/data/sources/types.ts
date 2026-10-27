// The plug-in shape every data source fills. The hand-seeded nights are one
// source; live feeds (MLB first, then NHL, Ticketmaster...) are added as more
// sources without changing the screens. Everything is async because live
// sources will be.

import { TEAMS } from '../teams';
import type { CrowdEvent, DateRating, LocalDate } from '../types';

/** Who to believe about a game, lowest first: a league or the school itself, then a seller. */
const GAME_RANK: Record<string, number> = { seed: 0, mlb: 0, espn: 0, hockeytech: 0, sidearm: 1, 'school-site': 1, ticketmaster: 2, seatgeek: 2, jambase: 2, fan: 3 };

type GameLike = {
  sourceId: string;
  kind: string;
  date: string;
  start?: string | null;
  place: { type: string; venueId?: string };
  audience?: object;
  title?: string;
  teams?: { home: string; away: string; awayOpponent?: string };
};

const sportOf = (e: GameLike) => (e.audience as { sport?: string } | undefined)?.sport;

const minutes = (t: string | null | undefined) => (t ? Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5)) : null);

/** The same game sold or listed twice: one building, one date, the same sport when both say one, starts within two hours when both have one. */
function sameGame(a: GameLike, b: GameLike): boolean {
  if (a.place.venueId !== b.place.venueId || a.date !== b.date) return false;
  const sa = sportOf(a);
  const sb = sportOf(b);
  if (sa && sb && sa !== 'other' && sb !== 'other' && sa !== sb) return false;
  const ma = minutes(a.start);
  const mb = minutes(b.start);
  return ma == null || mb == null || Math.abs(ma - mb) <= 120 || sameOpponent(a, b) || sameOpponent(b, a);
}

const plainWords = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter((w) => w.length > 2);

/** "women", "men" or undefined, from a title or a team's name ("Women's", "Womens", "Men's"). */
function sideOf(text: string | undefined): 'women' | 'men' | undefined {
  if (!text) return undefined;
  if (/\bwomen'?s\b|\bwomens\b|\bwomen\b/i.test(text)) return 'women';
  if (/\bmen'?s\b|\bmens\b/i.test(text)) return 'men';
  return undefined;
}

/**
 * A seller's game whose start is farther than two hours from a feed's game is still that game when the seller's title
 * names the feed game's opponent and does not say a different side (men's or women's) from the feed's team (Kylie,
 * Oct 22, 2026: "this is probably a scheduling issue, for games i would probably defer to ESPN"; found at the Galen
 * Center, USC vs. Arkansas–Pine Bluff, 16:00 on ESPN and 19:00 on Ticketmaster). The feed's start stands, since the
 * feed's copy wins.
 */
function sameOpponent(feed: GameLike, seller: GameLike): boolean {
  if (!feed.teams || seller.teams || !seller.title) return false;
  const away = feed.teams.awayOpponent ?? feed.teams.away;
  const opponent = TEAMS[feed.teams.away]?.name;
  const title = new Set(plainWords(seller.title));
  const words = plainWords(away.replace(/-/g, ' '));
  const named = (ws: string[]) => ws.length > 0 && ws.every((w) => title.has(w));
  if (!named(words) && !(opponent && named(plainWords(opponent).slice(-2)))) return false;
  const ours = sideOf(TEAMS[feed.teams.home]?.name ?? '');
  const theirs = sideOf(seller.title);
  return !ours || !theirs || ours === theirs;
}

/**
 * A game a league feed or the school's own feed lists wins over a seller's listing of it, and the league's over the
 * school's (docs/product/no-feed-teams-proposal.md; widened Oct 21, 2026 to every room, and from "same building and
 * date" to "same building, date, sport and start", so a volleyball match the feeds lack stays on a day the
 * basketball team plays at home).
 */
export function dropGamesCoveredByFeeds<T extends GameLike>(input: T[]): T[] {
  const events = schoolRoomsWin(input);
  const games = events.filter((e) => e.kind === 'game' && e.place.type === 'venue');
  return events.filter((e) => {
    if (e.kind !== 'game' || e.place.type !== 'venue') return true;
    const rank = GAME_RANK[e.sourceId] ?? 4;
    return !games.some((g) => (GAME_RANK[g.sourceId] ?? 4) < rank && sameGame(g, e));
  });
}

/**
 * Where a school's game is played, the school's own feed wins (Kylie, Oct 23, 2026: "yes", to "should a school's own
 * site win on where its game is played?"). ESPN files some home games under the school's main arena when the school
 * plays them on campus (Georgetown's Nov 10 and Nov 21 games at McDonough Arena, listed at Capital One Arena on nights
 * Sombr and Doja Cat play there; about 15 games across the cities, Oct 23). When a league feed's game and the school
 * feed's game share the home team, the date and a start within two hours but sit in two rooms, the league's copy
 * moves to the school's room; the one-game rule then keeps the league's copy there, as before (her Oct 22 "defer to
 * ESPN" still holds for everything else).
 */
function schoolRoomsWin<T extends GameLike>(events: T[]): T[] {
  const school = events.filter((e) => (e.sourceId === 'sidearm' || e.sourceId === 'school-site') && e.kind === 'game' && e.place.type === 'venue' && e.teams?.home);
  if (school.length === 0) return events;
  return events.map((e) => {
    if (e.kind !== 'game' || e.place.type !== 'venue' || !e.teams?.home || (GAME_RANK[e.sourceId] ?? 4) >= GAME_RANK.sidearm) return e;
    const own = school.find((s) => {
      if (s.teams?.home !== e.teams?.home || s.date !== e.date || s.place.venueId === e.place.venueId) return false;
      const a = minutes(s.start);
      const b = minutes(e.start);
      return a == null || b == null || Math.abs(a - b) <= 120;
    });
    return own ? { ...e, place: { ...e.place, venueId: own.place.venueId } } : e;
  });
}

/** The old name, kept for the scripts. */
export const dropTicketmasterGamesCoveredByFeeds = dropGamesCoveredByFeeds;

export interface EventSource {
  id: string;
  /** Shown in credits, e.g. "Hand-seeded test nights", "MLB". */
  name: string;
  eventsOn(metroId: string, date: LocalDate): Promise<CrowdEvent[]>;
  /** Events on or after a date, soonest first. Only live feeds have this. */
  upcoming?(metroId: string, fromDate: LocalDate): Promise<CrowdEvent[]>;
  /**
   * Every event this source can put on the calendar or in search.
   * The seed returns its nights; live feeds return today onward.
   */
  catalog?(metroId: string): Promise<CrowdEvent[]>;
}

export interface RatingSource {
  id: string;
  ratingFor(metroId: string, date: LocalDate): Promise<DateRating | null>;
  /** Every rated date this source knows, newest first. */
  ratedDates(metroId: string): Promise<DateRating[]>;
}
