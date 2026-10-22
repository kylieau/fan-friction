// Fan-added events (step 2 of the Add a game / Add a show card; Kylie, Oct 21, 2026, late evening). A review row
// (suggested_events) that a second person confirmed or Kylie approved becomes a catalog event with sourceId 'fan',
// sized like any event (the room, the team's past crowds), counting toward the date's verdict, and labeled
// "Added by a fan" on its page. Pure functions: the nightly job (scripts/catalog-write.mjs) reads the rows with its
// own key and writes the events; nothing here touches the network. A feed's copy of the same game or show wins
// over the fan row (the one-game rule ranks 'fan' last), so a fan row is a placeholder until a feed carries it.

import { TEAMS } from '../teams';
import type { CrowdEvent, LocalDate } from '../types';
import { VENUES, venueNameOn } from '../venues';

/** The review row, as the table holds it (migrations 0006, 0030, 0031). */
export interface SuggestedRow {
  id: string;
  user_id: string;
  entry_id: string;
  title: string;
  kind: string;
  when_sort: string;
  venue: string | null;
  metro_id: string | null;
  status: string;
  catalog_event_id: string | null;
  team_id?: string | null;
  artist?: string | null;
  venue_id?: string | null;
  start_time?: string | null;
  opponent?: string | null;
  sport?: string | null;
  level?: string | null;
  source?: string | null;
  confirmed_by?: string | null;
}

export interface FollowPair {
  follower_id: string;
  followee_id: string;
}

export const FAN_EVENT_PREFIX = 'fan';

/** The catalog event id a review row becomes. */
export function fanEventId(row: Pick<SuggestedRow, 'id' | 'when_sort'>): string {
  return `${row.when_sort}-${FAN_EVENT_PREFIX}-${row.id}`;
}

/** Rows that stand for the same event: the same team or artist, the same room, dates a day apart at most. */
function sameSubmission(a: SuggestedRow, b: SuggestedRow): boolean {
  if (!a.venue_id || a.venue_id !== b.venue_id) return false;
  const who = (r: SuggestedRow) => (r.team_id ?? r.artist ?? r.title).toLowerCase();
  if (who(a) !== who(b)) return false;
  const days = Math.abs((Date.parse(a.when_sort) - Date.parse(b.when_sort)) / 86_400_000);
  return days <= 1;
}

/**
 * The second-person rule: pending rows from two or more accounts that stand for the same event, where no two of
 * those accounts follow each other (any status), are confirmed together. Returns the ids to mark.
 */
export function secondPersonConfirmations(rows: readonly SuggestedRow[], follows: readonly FollowPair[]): string[] {
  const pending = rows.filter((r) => r.status === 'pending' && r.venue_id);
  const linked = new Set(follows.map((f) => `${f.follower_id}|${f.followee_id}`));
  const related = (u: string, v: string) => linked.has(`${u}|${v}`) || linked.has(`${v}|${u}`);
  const out = new Set<string>();
  for (const row of pending) {
    if (out.has(row.id)) continue;
    const group = pending.filter((r) => sameSubmission(row, r));
    const users = [...new Set(group.map((r) => r.user_id))];
    if (users.length < 2) continue;
    // Two accounts that don't follow each other is enough; a pair that does follow doesn't count as two.
    const independent = users.some((u) => users.some((v) => u !== v && !related(u, v)));
    if (!independent) continue;
    group.forEach((r) => out.add(r.id));
  }
  return [...out];
}

/** The catalog event a confirmed or approved row becomes; undefined when its room is not on file. */
export function fanEventFrom(row: SuggestedRow, today: LocalDate): CrowdEvent | undefined {
  if (!row.venue_id || !VENUES[row.venue_id]) return undefined;
  const venue = VENUES[row.venue_id];
  const metroId = row.metro_id ?? venue.metroId;
  const team = row.team_id ? TEAMS[row.team_id] : undefined;
  const game = row.kind === 'game';
  const sport = (row.sport ?? team?.sport ?? 'other').toLowerCase();
  const opponentSlug = row.opponent ? row.opponent.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined;
  void today;
  return {
    id: fanEventId(row),
    metroId,
    date: row.when_sort,
    start: row.start_time ?? null,
    kind: game ? 'game' : 'show',
    title: row.title,
    place: { type: 'venue', venueId: venue.id },
    audience: game ? { domain: 'sports', sport, ...(row.level ? { level: row.level as 'pro' | 'lower' | 'college' | 'school' | 'amateur' } : {}) } : { domain: 'music', genre: 'Other' },
    ...(game && team && row.opponent ? { teams: { home: team.id, away: row.opponent, awayOpponent: opponentSlug } } : {}),
    ...(!game && row.artist ? { performer: row.artist, act: true } : {}),
    crowd: [],
    sourceId: 'fan',
    // Kept for the label and for linking the submitter's plan: the review row, and the room's name that day.
    fan: { suggestionId: row.id, confirmedBy: row.confirmed_by ?? row.status, venue: venueNameOn(venue, row.when_sort) },
  };
}
