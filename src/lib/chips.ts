import { frictionLabel, showFriction } from '../config/scoreLabels';
import type { CrowdEvent } from '../data';

export interface EventChip {
  text: string;
  /** "friction" is the verdict chip; "why" stands in when the verdict is hidden (Low). */
  kind: 'friction' | 'why';
}

/**
 * The one chip an event row wears. Friction shows from Moderate up. Where it's
 * hidden (Low), the row says what makes the event notable instead: sold out,
 * then its occasion (Marquee, Major, Notable), then its first fact chip.
 * Events with nothing to say get no chip. Only facts known beforehand count,
 * except "sold out", which is itself a pre-event fact about demand.
 */
export function eventChip(event: CrowdEvent): EventChip | null {
  const a = event.assessment;
  if (a && showFriction(a.friction)) return { text: frictionLabel(a.friction), kind: 'friction' };
  if (event.crowd.some((c) => c.soldOut)) return { text: 'Sold out', kind: 'why' };
  if (a && a.occasion !== 'Routine') return { text: a.occasion, kind: 'why' };
  if (a?.facts[0]) return { text: a.facts[0], kind: 'why' };
  return null;
}
