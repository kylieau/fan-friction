import type { CrowdEvent } from '../data/types';

/** Concerts never get a stakes line. Regular season has no stakes to show. */
function showsStakes(event: CrowdEvent): boolean {
  if (!event.stakes?.round) return false;
  if (event.audience.domain !== 'sports') return false;
  if (event.kind === 'show' || event.kind === 'festival') return false;
  return true;
}

/**
 * The quiet line under a title: no longer shown. Since labels round 3 (Kylie, Oct 15) the label carries
 * "(if necessary)" itself; kept for any caller that still asks.
 */
export function quietStakes(event: CrowdEvent, _entry: readonly CrowdEvent[] = []): string | null {
  if (!showsStakes(event)) return null;
  return event.stakes!.ifNecessary ? 'If necessary' : null;
}
