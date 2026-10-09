// The two columns beside an event in a list (Kylie, Oct 9, C022 / 3.5; mockup 03,
// option 2): Occasion (how big a deal the event is) and Friction (what it is up
// against). Two columns, two scales, so a "Major" show no longer looks calmer than a
// "Heavy" one. A calm event says why instead of a "Low" pill.

import { showFriction } from '../config/scoreLabels';
import { drawSize, sizeTier } from '../data';
import type { CrowdEvent } from '../data';

export interface EventColumns {
  occasion: string | null;
  /** A pill ("Heavy") when friction shows; otherwise a plain reason. */
  friction: { pill: string; level: string } | { reason: string } | null;
}

export function eventColumns(event: CrowdEvent, sameDate: readonly CrowdEvent[]): EventColumns {
  const a = event.assessment;
  if (sizeTier(event) !== 'feeds-friction') return { occasion: a?.occasion ?? null, friction: { reason: 'Under 5,000' } };
  if (!a) return { occasion: null, friction: null };
  // The bare word in the column; the heading says it is friction.
  if (showFriction(a.friction)) return { occasion: a.occasion, friction: { pill: a.friction, level: a.friction.toLowerCase() } };
  const mine = drawSize(event) ?? 0;
  const biggest = sameDate.every((e) => e.id === event.id || (drawSize(e) ?? 0) <= mine);
  return { occasion: a.occasion, friction: { reason: biggest ? 'Biggest crowd' : 'Little overlap' } };
}
