// Occasion from pre-event facts (formula v4, Oct 5, 2026). Points, then a word.
// The hand call on a seeded event is kept beside it for comparison only.

import type { Occasion } from '../../config/scoreLabels';
import type { CrowdEvent, OccasionFacts } from '../types';

/** Playoff rounds by name. A final is 4; a later round 3; a first round or play-in 2. */
function roundPoints(round: string | undefined): number {
  if (!round) return 0;
  const r = round.toLowerCase();
  if (/(world series|super bowl|nba finals|stanley cup final|mls cup$|final$|championship game|national championship)/.test(r)) return 4;
  if (/(play-in|wild card|wildcard|round one|first round|round of)/.test(r)) return 2;
  if (/(nlds|alds|nlcs|alcs|division|conference|semifinal|quarterfinal|playoff|round)/.test(r)) return 3;
  return 0;
}

/** The points each fact is worth. Kylie's Oct 5 rulings: new market 3, storyline 1. */
export function occasionPoints(facts: OccasionFacts | undefined, round: string | undefined): number {
  const f = facts ?? {};
  const base = Math.max(
    roundPoints(round),
    f.final ? 4 : 0,
    f.newMarket ? 3 : 0,
    f.farewell ? 3 : 0,
    f.opener ? 2 : 0,
    f.rivalry ? 2 : 0,
  );
  const bonus = (f.bothContending ? 1 : 0) + (f.selloutAnnounced ? 1 : 0) + (f.starReturn ? 1 : 0) + (f.storyline ? 1 : 0);
  return base + bonus;
}

export function occasionFromPoints(points: number): Occasion {
  if (points >= 4) return 'Marquee';
  if (points === 3) return 'Major';
  if (points === 2) return 'Notable';
  return 'Routine';
}

/** The occasion the formula uses: computed from facts. */
export function occasionFor(event: CrowdEvent): Occasion {
  return occasionFromPoints(occasionPoints(event.occasionFacts, event.stakes?.round));
}

/** The pull factor by occasion (asymmetric pull): a bigger occasion pulls harder and is pulled less. */
export const PULL: Record<Occasion, number> = { Routine: 1, Notable: 1.1, Major: 1.3, Marquee: 1.6 };
