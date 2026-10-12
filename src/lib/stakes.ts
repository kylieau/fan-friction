import type { CrowdEvent } from '../data/types';

/** Concerts never get a stakes line. Regular season has no stakes to show. */
function showsStakes(event: CrowdEvent): boolean {
  if (!event.stakes?.round) return false;
  if (event.audience.domain !== 'sports') return false;
  if (event.kind === 'show' || event.kind === 'festival') return false;
  return true;
}

/**
 * The quiet line under a title. The round and game now lead the title itself ("NLCS G2 · Dodgers at
 * Brewers", Kylie, Oct 11, 2026), so only "If necessary" is left for this line (Kylie, Oct 9, C024).
 */
export function quietStakes(event: CrowdEvent, _entry: readonly CrowdEvent[] = []): string | null {
  if (!showsStakes(event)) return null;
  return event.stakes!.ifNecessary ? 'If necessary' : null;
}
