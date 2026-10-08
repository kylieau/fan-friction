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
