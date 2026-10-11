// A team's full schedule, home and away (Kylie, Oct 7, 2026: a team page shows the
// whole schedule, results for past games and the games to come). The nightly job
// reads each team's feed and writes the shared `team_schedules` table, because
// ESPN refuses calls made from a phone's browser; a team's page reads that table.
// When the table has nothing (a new team, no cloud settings), an MLB club is read
// live, which works from a browser. A team no feed carries gets null, and the
// page says "No schedule yet."

import { supabase } from './storage/supabaseClient';
import { espnTeamSchedule } from './sources/espnSource';
import { hockeytechTeamSchedule } from './sources/hockeytechSource';
import { mlbTeamSchedule } from './sources/mlbSource';
import type { TeamGame } from './types';

const cache = new Map<string, Promise<TeamGame[] | null>>();

/** Straight from the feeds. The job calls this; a browser can only reach the MLB half. */
export async function teamScheduleFromFeeds(teamId: string): Promise<TeamGame[] | null> {
  return (await mlbTeamSchedule(teamId)) ?? (await espnTeamSchedule(teamId)) ?? (await hockeytechTeamSchedule(teamId));
}

async function fromTable(teamId: string): Promise<TeamGame[] | null> {
  const client = supabase();
  if (!client) return null;
  const { data, error } = await client.from('team_schedules').select('data').eq('team_id', teamId).maybeSingle();
  if (error || !data) return null;
  const games = (data.data as { games?: TeamGame[] }).games;
  return Array.isArray(games) && games.length > 0 ? games : null;
}

export function getTeamSchedule(teamId: string): Promise<TeamGame[] | null> {
  const hit = cache.get(teamId);
  if (hit) return hit;
  const p = (async () => (await fromTable(teamId)) ?? (await mlbTeamSchedule(teamId)))().catch(() => null);
  cache.set(teamId, p);
  p.then((rows) => rows === null && cache.delete(teamId));
  return p;
}

/** "W 5–3", "L 1–3", or "T 2–2". */
export function scoreMark(game: TeamGame): string | undefined {
  if (!game.score) return undefined;
  const { us, them } = game.score;
  const mark = us > them ? 'W' : us < them ? 'L' : 'T';
  return `${mark} ${us}–${them}`;
}

export interface TeamRecord {
  wins: number;
  losses: number;
  ties: number;
  /** Oldest first, up to five: 'W' | 'L' | 'T'. */
  last5: ('W' | 'L' | 'T')[];
}

/** Wins and losses from the games played, preseason left out. Null when nothing has been played. */
export function teamRecord(games: readonly TeamGame[]): TeamRecord | null {
  const played = games.filter((g) => g.score && !g.preseason).sort((a, b) => a.date.localeCompare(b.date));
  if (played.length === 0) return null;
  const marks = played.map((g) => (g.score!.us > g.score!.them ? 'W' : g.score!.us < g.score!.them ? 'L' : 'T') as 'W' | 'L' | 'T');
  return {
    wins: marks.filter((m) => m === 'W').length,
    losses: marks.filter((m) => m === 'L').length,
    ties: marks.filter((m) => m === 'T').length,
    last5: marks.slice(-5),
  };
}

/** "93–69", or "9–5–2" when there were ties. */
export function recordLine(record: TeamRecord): string {
  return record.ties > 0 ? `${record.wins}–${record.losses}–${record.ties}` : `${record.wins}–${record.losses}`;
}

/** The next game not yet played, from today. */
export function nextTeamGame(games: readonly TeamGame[], today: string): TeamGame | undefined {
  return games.filter((g) => g.date >= today && !g.score).sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')))[0];
}

/**
 * Where a series stands, for a postseason game: "NLCS vs. Brewers · 1–0", from the games
 * already played in the same round against the same opponent. Null outside a series.
 */
export function seriesLine(games: readonly TeamGame[], next: TeamGame): string | null {
  const round = next.stakes?.round;
  if (!round) return null;
  const played = games.filter((g) => g.score && g.stakes?.round === round && g.opponent === next.opponent);
  const w = played.filter((g) => g.score!.us > g.score!.them).length;
  const l = played.filter((g) => g.score!.us < g.score!.them).length;
  return `${round} vs. ${next.opponent} · ${w}–${l}`;
}
