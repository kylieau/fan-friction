// The audience-overlap rule Kylie adopted Oct 1, 2026 (product-decisions.md).
// Overlap only ever feeds an event's friction, never the date's rating directly.

import type { Audience } from './types';

export type Overlap = 'High' | 'Medium' | 'Low';

export function audienceOverlap(a: Audience, b: Audience): Overlap {
  // Same sport (Lakers vs. World Series counts as LA sports fans' must-see,
  // which the rule also rates High; that call is judged by hand for now).
  if (a.domain === 'sports' && b.domain === 'sports') return a.sport === b.sport ? 'High' : 'Medium';
  // Concerts of the same genre or era share a crowd; different genres barely do.
  if (a.domain === 'music' && b.domain === 'music') return a.genre === b.genre ? 'Medium' : 'Low';
  // Sports vs. concerts: the crowds can overlap, just less.
  return 'Low';
}
