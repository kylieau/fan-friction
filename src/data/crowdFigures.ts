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

/** A count with what kind of count it is. A reported figure sits in the Announced slot, labeled as reported. */
export interface CrowdFigureShown {
  count: number;
  kind: 'final' | 'announced' | 'reported' | 'estimated';
}

export interface CrowdFigures {
  estimated?: number;
  announced?: number;
  /** The announced slot's own word: a press-reported count stays "reported". */
  announcedKind?: 'announced' | 'reported';
  final?: number;
}

/** The figures on a listed event. A building-only estimate is a ceiling ("Up to"); the caller says so. */
export function crowdFigures(event: CrowdEvent): CrowdFigures {
  const firm = event.crowd.find((f) => f.count != null && f.kind !== 'estimated');
  const announced = event.result?.attendance ?? firm?.count;
  const seededEstimate = event.crowd.find((f) => f.count != null && f.kind === 'estimated')?.count;
  const estimated = seededEstimate ?? (event.expectedDraw ? roundEstimate(event.expectedDraw.count) : undefined);
  return {
    ...(estimated ? { estimated } : {}),
    ...(announced ? { announced, announcedKind: event.result?.attendance || firm?.kind !== 'reported' ? 'announced' : 'reported' } : {}),
  };
}

/** The one figure to highlight for a listed event, or null when none is known. */
export function highlightedCrowd(event: CrowdEvent): CrowdFigureShown | null {
  const f = crowdFigures(event);
  if (f.final) return { count: f.final, kind: 'final' };
  if (f.announced) return { count: f.announced, kind: f.announcedKind ?? 'announced' };
  if (f.estimated) return { count: f.estimated, kind: 'estimated' };
  return null;
}

/**
 * The one figure to show for a stub. An older stub's single `crowd` (locked before Oct 12,
 * 2026) is shown as it was, without a kind, until Kylie says how to tag it (build notes 3, ⚑3).
 */
export function entryCrowd(entry: Entry): { count: number; kind?: CrowdFigureShown['kind'] } | null {
  if (entry.crowdFinal) return { count: entry.crowdFinal, kind: 'final' };
  if (entry.crowdAnnounced) return { count: entry.crowdAnnounced, kind: 'announced' };
  if (entry.crowdEstimated) return { count: entry.crowdEstimated, kind: 'estimated' };
  if (entry.crowd) return { count: entry.crowd };
  return null;
}

/** The word beside a figure: "Final", "Announced", "Reported", "Estimated". */
export function crowdKindWord(kind: CrowdFigureShown['kind']): string {
  return kind.charAt(0).toUpperCase() + kind.slice(1);
}
