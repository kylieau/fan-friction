// Pop-up sizing (build 5, item 1; Oct 13 research, settled): how many people a one-off site (a lot, a field, a
// temporary stage) is expected to draw, for the sources that list such shows. Hand seeds with nothing to go on keep
// using `unsized` (src/data/seed/past2026.ts). Not wired to a source yet: AXS, DICE and the promoter pages are not
// built (terms; see docs/build-5/handoff-5.md), so no event is sized by this today.

import type { CrowdEvent } from '../types';

export interface PopupFacts {
  /** The stated capacity of the site for this show, when the organizer or a permit gives one. */
  capacity?: number;
  /** Sold out, or a waitlist is open. */
  soldOut?: boolean;
  /** The best past edition's attendance, for a show with no stated capacity (one day of it, for a festival). */
  bestPastEdition?: number;
  /** Where the figure came from and what it measures (daily gate, capacity, …), with its year. */
  source: string;
}

/**
 * The expected draw for a pop-up, or undefined when there is nothing to go on (then the show is "unsized": shown,
 * not counted; blank on rows, "— Size unknown" on the event page).
 *   80% of stated capacity by default; 95% when sold out or waitlisted.
 *   No stated capacity: the best past edition's attendance.
 * Festivals are sized per day: the caller passes one day's capacity or gate count. Never divide passes or unique
 * visitors by the number of days, and never add a show inside a fair to the fair's gate.
 */
export function popupDraw(facts: PopupFacts): CrowdEvent['expectedDraw'] | undefined {
  if (facts.capacity && facts.capacity > 0) {
    const share = facts.soldOut ? 0.95 : 0.8;
    return {
      count: Math.round(facts.capacity * share),
      note: `${facts.soldOut ? 'Sold out' : 'Not sold out'}: ${Math.round(share * 100)}% of the stated ${facts.capacity.toLocaleString('en-US')} capacity. ${facts.source}`,
      basis: 'popup',
      popup: { share, capacity: facts.capacity, soldOut: Boolean(facts.soldOut) },
    };
  }
  if (facts.bestPastEdition && facts.bestPastEdition > 0) {
    return { count: facts.bestPastEdition, note: `The best past edition's attendance. ${facts.source}`, basis: 'popup' };
  }
  return undefined;
}

/** The event page's line under a pop-up's estimate (item 10): "Sold out · 95% of 400 capacity". */
export function popupExplainer(draw: CrowdEvent['expectedDraw']): string | null {
  if (draw?.basis !== 'popup') return null;
  if (!draw.popup) return 'Best past edition';
  const { share, capacity, soldOut } = draw.popup;
  return `${soldOut ? 'Sold out · ' : ''}${Math.round(share * 100)}% of ${capacity.toLocaleString('en-US')} capacity`;
}
