// Occasion from pre-event facts (formula v4, Oct 5, 2026). Points, then a word.
// The hand call on a seeded event is kept beside it for comparison only.

import type { Occasion } from '../../config/scoreLabels';
import type { CrowdEvent, OccasionFacts } from '../types';
import { listedCapacity } from '../read';
import { seedEventsOn } from '../sources/seedSource';

/** Playoff rounds by name. A final is 4; a later round 3; a first round or play-in 2. */
function roundPoints(round: string | undefined): number {
  if (!round) return 0;
  const r = round.toLowerCase();
  if (/(world series|super bowl|nba finals|stanley cup final|mls cup$|final$|championship game|national championship)/.test(r)) return 4;
  if (/(play-in|wild card|wildcard|round one|first round|round of)/.test(r)) return 2;
  if (/(nlds|alds|nlcs|alcs|division|conference|semifinal|quarterfinal|playoff|round)/.test(r)) return 3;
  return 0;
}

/**
 * A concert's base comes from the booking, since a tour visits a city once
 * (Kylie, Oct 5): a stadium headliner 3, an arena headliner 2, a theater 1.
 */
function bookingPoints(event: CrowdEvent): number {
  if (event.kind !== 'show' && event.kind !== 'festival') return 0;
  const cap = listedCapacity(event) ?? 0;
  if (cap >= 40000) return 3;
  if (cap >= 12000) return 2;
  return 1;
}

/** True when the same performer plays the same metro three or more times within a week (a two-night stand is ordinary; Kylie, Oct 5). */
function multiNightRun(event: CrowdEvent): boolean {
  if (!event.performer) return false;
  // The listings say so directly (Ticketmaster events carry their run); the seed is the fallback.
  if (event.occasionFacts?.run !== undefined) return event.occasionFacts.run >= 3;
  const [y, m, d] = event.date.split('-').map(Number);
  let count = 0;
  for (let offset = -7; offset <= 7; offset += 1) {
    const date = new Date(Date.UTC(y, m - 1, d + offset)).toISOString().slice(0, 10);
    count += seedEventsOn(event.metroId, date).filter((e) => e.performer === event.performer).length;
  }
  return count >= 3;
}

/** The points each fact is worth. Kylie's Oct 5 rulings: new market 3, storyline 1, concerts from the booking. */
export function occasionPoints(facts: OccasionFacts | undefined, round: string | undefined, event?: CrowdEvent): number {
  const f = facts ?? {};
  const base = Math.max(
    roundPoints(round),
    f.final ? 4 : 0,
    f.newMarket ? 3 : 0,
    f.farewell ? 3 : 0,
    f.opener ? 2 : 0,
    f.rivalry ? 2 : 0,
    event ? bookingPoints(event) : 0,
  );
  const run = event && multiNightRun(event) ? 1 : 0;
  const bonus = (f.bothContending ? 1 : 0) + (f.selloutAnnounced ? 1 : 0) + (f.starReturn ? 1 : 0) + (f.storyline ? 1 : 0) + run;
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
  return occasionFromPoints(occasionPoints(event.occasionFacts, event.stakes?.round, event));
}

/**
 * The pull factor by occasion (asymmetric pull): a bigger occasion pulls harder
 * and is pulled less. Steepened Oct 6 (Kylie): at 1.6, three routine games could
 * still drag a World Series opener to Heavy.
 */
export const PULL: Record<Occasion, number> = { Routine: 1, Notable: 1.2, Major: 1.6, Marquee: 2.5 };
