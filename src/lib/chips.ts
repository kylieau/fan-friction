import { frictionLabel, showFriction } from '../config/scoreLabels';
import type { CrowdEvent } from '../data';

export interface EventChip {
  text: string;
  /** Friction is Dodger blue. A mark is the green occasion or Sold Out pill. */
  kind: 'friction' | 'mark';
}

/**
 * Sheet badges. Friction shows from Moderate up. A green mark is Sold Out,
 * or otherwise Marquee, Major, or Notable. Fact chips stay off the sheet.
 * When both apply, friction comes first. Low friction is stored but not shown.
 * Sold out is a pre-event fact about demand, so it can show.
 */
export function sheetBadges(event: CrowdEvent): EventChip[] {
  const badges: EventChip[] = [];
  const a = event.assessment;
  if (a && showFriction(a.friction)) badges.push({ text: frictionLabel(a.friction), kind: 'friction' });
  if (event.crowd.some((c) => c.soldOut)) badges.push({ text: 'Sold Out', kind: 'mark' });
  else if (a && a.occasion !== 'Routine') badges.push({ text: a.occasion, kind: 'mark' });
  return badges;
}
