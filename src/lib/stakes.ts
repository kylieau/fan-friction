import { TEAMS } from '../data/teams';
import type { CrowdEvent } from '../data/types';

const DOT = ' · ';

/** Concerts never get a stakes line. Regular season has no stakes to show. */
function showsStakes(event: CrowdEvent): boolean {
  if (!event.stakes?.round) return false;
  if (event.audience.domain !== 'sports') return false;
  if (event.kind === 'show' || event.kind === 'festival') return false;
  return true;
}

function teamName(event: CrowdEvent): string | null {
  const id = event.teams?.home;
  if (id && TEAMS[id]) return TEAMS[id].shortName;
  const bare = event.title.replace(/\s+\((?:FB|MBB|WBB|CFB)\)/g, '');
  const first = bare.split(/\s+vs\.?\s+/i)[0]?.trim();
  return first || null;
}

/** Two of the same round on one night: add the team, same idea as a shared short name. */
function collided(event: CrowdEvent, entry: readonly CrowdEvent[]): boolean {
  const round = event.stakes?.round;
  if (!round) return false;
  let count = 0;
  for (const other of entry) {
    if (other.date !== event.date || !showsStakes(other)) continue;
    if (other.stakes?.round === round) count += 1;
    if (count > 1) return true;
  }
  return false;
}

/** Sheet and event page. Round, then the game number when a feed has one. */
export function quietStakes(event: CrowdEvent, entry: readonly CrowdEvent[]): string | null {
  if (!showsStakes(event)) return null;
  const { round, game } = event.stakes!;
  const parts = [round];
  if (game && game > 0) parts.push(`Game ${game}`);
  if (event.stakes!.ifNecessary) parts.push('If necessary');
  if (collided(event, entry)) {
    const team = teamName(event);
    if (team) parts.push(team);
  }
  return parts.join(DOT);
}
