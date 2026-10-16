// The three crowd figures (build notes 3, D04; mock docs/design/build3/call11b-crowd-hybrid.png):
// Estimated, Announced and Final mean different things, so none ever replaces another. What
// changes is which one is highlighted: Final > Announced > Estimated. Everywhere but the event
// page shows the highlighted one only. Crowd is evidence, never an input to a read.
//
// Where each comes from today: Estimated is the expected draw (or a seeded estimate);
// Announced is the box-score attendance, or a seeded announced or reported count. Final has no
// source yet (build notes 3, ⚑4): the field exists, nothing writes it.

import type { CrowdEvent, Entry } from './types';
import { roundEstimate } from './expectedDrawBuild';
import { listedCapacity } from './read';

/** A count with what kind of count it is. A reported figure sits in the Announced slot, labeled as reported. */
export interface CrowdFigureShown {
  count: number;
  kind: 'final' | 'announced' | 'reported' | 'estimated';
  /** The estimate is a floor: "at least" this many (a multi-day figure of unclear kind; Kylie, Oct 16, 2026). */
  atLeast?: boolean;
}

export interface CrowdFigures {
  estimated?: number;
  /** The estimate is a floor, shown "at least" (Kylie, Oct 16, 2026). */
  estimatedAtLeast?: boolean;
  announced?: number;
  /** The announced slot's own word: a press-reported count stays "reported". */
  announcedKind?: 'announced' | 'reported';
  final?: number;
}

/** The figures on a listed event. Every estimate, a building-only one included, reads "~" (build 5, item 10). */
export function crowdFigures(event: CrowdEvent): CrowdFigures {
  const firm = event.crowd.find((f) => f.count != null && f.kind !== 'estimated');
  const announced = event.result?.attendance ?? firm?.count;
  const seeded = event.crowd.find((f) => f.count != null && f.kind === 'estimated');
  const estimated = seeded?.count ?? (event.expectedDraw ? roundEstimate(event.expectedDraw.count) : undefined);
  return {
    ...(estimated ? { estimated } : {}),
    ...(seeded?.atLeast ? { estimatedAtLeast: true } : {}),
    ...(announced ? { announced, announcedKind: event.result?.attendance || firm?.kind !== 'reported' ? 'announced' : 'reported' } : {}),
  };
}

/** The one figure to highlight for a listed event, or null when none is known. */
export function highlightedCrowd(event: CrowdEvent): CrowdFigureShown | null {
  const f = crowdFigures(event);
  if (f.final) return { count: f.final, kind: 'final' };
  if (f.announced) return { count: f.announced, kind: f.announcedKind ?? 'announced' };
  if (f.estimated) return { count: f.estimated, kind: 'estimated', ...(f.estimatedAtLeast ? { atLeast: true } : {}) };
  return null;
}

/**
 * The mark in front of an estimated crowd on compact surfaces: "~55k" (build 5, item 10). One rule for every surface:
 * "~" when the event's highlighted crowd is an estimate, nothing for Announced, Reported or Final, and nothing for a
 * sold-out room size with no count of its own (that is the room, not an estimate).
 */
export function estimateMark(event: CrowdEvent): string {
  const shown = highlightedCrowd(event);
  return shown?.kind === 'estimated' && !shown.atLeast ? '~' : '';
}

/** After the number, for a floor: "6.7k+" (Kylie, Oct 16, 2026). A floor takes no "~". */
export function atLeastMark(event: CrowdEvent): string {
  return highlightedCrowd(event)?.atLeast ? '+' : '';
}

/** The same mark for a stub's own figure. */
export function entryEstimateMark(entry: Entry): string {
  const shown = entryCrowd(entry);
  return shown?.kind === 'estimated' && !shown.atLeast ? '~' : '';
}

/** The same "+" for a stub's own floor. */
export function entryAtLeastMark(entry: Entry): string {
  return entryCrowd(entry)?.atLeast ? '+' : '';
}

/** The full figure on the event page: "52,667", "~18,000", "At least 6,667". */
export function crowdFull(shown: CrowdFigureShown, fmt: (n: number) => string): string {
  if (shown.atLeast) return `At least ${fmt(shown.count)}`;
  return shown.kind === 'estimated' ? `~${fmt(shown.count)}` : fmt(shown.count);
}

/** The crowd count shown on the map, chip card and sheet total (build 4 §0: Final > Announced > Estimated). */
export function displayedCrowdCount(event: CrowdEvent): number | undefined {
  const count = highlightedCrowd(event)?.count;
  if (count != null) return count;
  // A sold-out listing with no published count already shows the room size on its chip.
  // Keep the card and totals consistent with that display fallback; do not change read math.
  return event.crowd.some((figure) => figure.soldOut) ? listedCapacity(event) : undefined;
}

/** Source line for the event page's Announced row only (Kylie, Oct 12, build 4 R05). */
export function announcedSourceLabel(event: CrowdEvent): string | undefined {
  const figures = crowdFigures(event);
  if (!figures.announced || figures.announcedKind === 'reported') return undefined;
  return event.audience.domain === 'sports' ? 'from the team' : 'per organizers';
}

/**
 * Moves a pre-build-4 single `crowd` into Announced or Estimated (R04, ⚑3). Never overwrites
 * a filled figure field. Safe to rerun; clears `crowd` once migrated.
 */
export function backfillEntryCrowd(entry: Entry, event?: CrowdEvent): Partial<Entry> | null {
  if (entry.crowd == null) return null;
  if (entry.crowdAnnounced != null || entry.crowdEstimated != null || entry.crowdFinal != null) return null;
  const hasBoxScore = Boolean(event?.result?.attendance != null && event.result.attendance > 0);
  const figures = event ? crowdFigures(event) : undefined;
  const hasAnnouncedOnEvent = figures?.announced != null && figures.announcedKind === 'announced';
  if (hasBoxScore || hasAnnouncedOnEvent) {
    return { crowdAnnounced: entry.crowd, crowd: undefined };
  }
  return { crowdEstimated: entry.crowd, crowd: undefined };
}

/** The one figure to show for a stub (R04: legacy `crowd` is migrated on open). */
export function entryCrowd(entry: Entry): { count: number; kind?: CrowdFigureShown['kind']; atLeast?: boolean } | null {
  if (entry.crowdFinal) return { count: entry.crowdFinal, kind: 'final' };
  if (entry.crowdAnnounced) return { count: entry.crowdAnnounced, kind: 'announced' };
  if (entry.crowdEstimated) return { count: entry.crowdEstimated, kind: 'estimated', ...(entry.crowdAtLeast ? { atLeast: true } : {}) };
  if (entry.crowd) return { count: entry.crowd };
  return null;
}

/** The word beside a figure: "Final", "Announced", "Reported", "Estimated". */
export function crowdKindWord(kind: CrowdFigureShown['kind']): string {
  return kind.charAt(0).toUpperCase() + kind.slice(1);
}
