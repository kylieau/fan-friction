// Audience overlap between two events (formula v4). Tiers by event traits, never by city.
// Weights are placeholders to tune: High 0.7, Medium 0.35, Low 0.15.

import { TEAMS } from '../teams';
import type { CrowdEvent } from '../types';

export type Tier = 'High' | 'Medium' | 'Low';
export const TIER_WEIGHT: Record<Tier, number> = { High: 0.7, Medium: 0.35, Low: 0.15 };

/**
 * Broad teams by metro and year: named as "their team" by about 20% of residents
 * in the most recent poll before the date (LMU for LA). Stamped by year because a
 * night is judged on what was known then. Other cities: fill in when they arrive.
 */
const BROAD: Record<string, { fromYear: number; teams: string[] }[]> = {
  la: [{ fromYear: 2014, teams: ['lakers', 'dodgers'] }],
  // The Padres are the city's team; the Chargers were too until they left for LA after 2016.
  'san-diego': [{ fromYear: 2017, teams: ['padres'] }],
  // Placeholder until a Seattle poll is found: the Seahawks are the region's team; the Mariners since the 2022 run.
  seattle: [{ fromYear: 2016, teams: ['seahawks'] }, { fromYear: 2022, teams: ['seahawks', 'mariners'] }],
  // Placeholder until a New York poll is found: the Yankees, Giants and Knicks are the region's teams.
  'new-york': [{ fromYear: 2016, teams: ['yankees', 'ny-giants', 'knicks'] }],
  // Placeholder until an Atlanta poll is found: the Braves and Falcons are the region's teams.
  atlanta: [{ fromYear: 2016, teams: ['braves', 'falcons'] }],
  // Placeholder until a Bay Area poll is found: the Giants, 49ers and Warriors are the region's teams.
  'bay-area': [{ fromYear: 2016, teams: ['giants', 'sf-49ers', 'warriors'] }],
  // Placeholder until a Chicago poll is found: the Cubs, Bears and Bulls are the region's teams.
  chicago: [{ fromYear: 2016, teams: ['cubs', 'bears', 'bulls'] }],
};

export function isBroad(metroId: string, teamId: string | undefined, date: string): boolean {
  if (!teamId) return false;
  const year = Number(date.slice(0, 4));
  const rows = (BROAD[metroId] ?? []).filter((row) => row.fromYear <= year);
  const row = rows[rows.length - 1];
  return Boolean(row && row.teams.includes(teamId));
}

/** The school or club behind a team id: "ucla-football" and "ucla-wbb" share an identity. */
function identity(teamId: string | undefined): string | undefined {
  if (!teamId) return undefined;
  const team = TEAMS[teamId];
  if (team?.league.startsWith('College')) return teamId.split('-')[0];
  return teamId;
}

/** The tier for a pair. Invited events never pair (handled by the caller). */
export function overlapTier(a: CrowdEvent, b: CrowdEvent): Tier {
  const A = a.audience;
  const B = b.audience;
  if (A.domain === 'sports' && B.domain === 'sports') {
    const ha = a.teams?.home;
    const hb = b.teams?.home;
    if (identity(ha) && identity(ha) === identity(hb) && ha !== hb) return 'High';
    const broadA = isBroad(a.metroId, ha, a.date);
    const broadB = isBroad(b.metroId, hb, b.date);
    if (broadA && broadB && A.sport !== B.sport) return 'High';
    if (A.sport === B.sport) return 'Medium'; // rivals, different levels, or same level not rivals: all Medium
    if (broadA || broadB) return 'Medium';
    return 'Low';
  }
  if (A.domain === 'music' && B.domain === 'music') return A.genre === B.genre ? 'Medium' : 'Low';
  return 'Low';
}
