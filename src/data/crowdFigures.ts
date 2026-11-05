// The three crowd figures (build notes 3, D04; mock docs/design/build3/call11b-crowd-hybrid.png):
// Estimated, Announced and Final mean different things, so none ever replaces another. What
// changes is which one is highlighted: Final > Announced > Estimated. Everywhere but the event
// page shows the highlighted one only. Crowd is evidence, never an input to a read.
//
// Where each comes from today: Estimated is the expected draw (or a seeded estimate);
// Announced is the box-score attendance, or a seeded announced or reported count. Final has no
// source yet (build notes 3, ⚑4): the field exists, nothing writes it.

import { DEFAULT_METRO, METROS } from '../config/metros';
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

/** The figures on a listed event. No estimate carries a "~" (build 6, item 4; the event page's too since build 7.1, M33). */
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

// No "~" on compact surfaces (build 6, item 4; Kylie, Oct 15: it "isn't visually appealing"). The one place an estimate
// says so is the event page's full number beside the word "Estimated" (`crowdFull`), plus one line in the map key:
// "Numbers on upcoming events may be estimates." This reverses build 5, item 10, which marked every estimate "~".

/** After the number, for a floor: "6.7k+" (Kylie, Oct 16, 2026). */
export function atLeastMark(event: CrowdEvent): string {
  return highlightedCrowd(event)?.atLeast ? '+' : '';
}

/** The same "+" for a stub's own floor. */
export function entryAtLeastMark(entry: Entry): string {
  return entryCrowd(entry)?.atLeast ? '+' : '';
}

/** The full figure on the event page: "52,667", "18,000", "At least 6,667". */
export function crowdFull(shown: CrowdFigureShown, fmt: (n: number) => string): string {
  if (shown.atLeast) return `At least ${fmt(shown.count)}`;
  // No "~" in app copy (build 7.1, M33 and §4): the kind word beside the figure says Estimated.
  return fmt(shown.count);
}

/**
 * The crowd ceiling (build 7.2, Section I): the room's size on file for an event with no count, no sellout and no
 * estimate. It is a cap, never a crowd: rows say "14k cap", the event page "Up to 14,000", and nothing else reads it
 * (the verdict, Up Against, Local Competition and the map's totals never count a ceiling; the crowd size range never
 * compares one, I5). Undefined when any figure exists or the room has no size on file.
 */
export function crowdCeiling(event: CrowdEvent): number | undefined {
  if (highlightedCrowd(event) || event.crowd.some((f) => f.soldOut)) return undefined;
  return listedCapacity(event);
}

/**
 * The ceiling a row shows or speaks: only while the event is still to come (today included). A past event with no
 * count shows nothing (R3c, widened to every row): its crowd is known or lost, and a room says nothing about it now.
 * The one rule for the figure and the spoken row alike.
 */
export function shownCeiling(event: CrowdEvent): number | undefined {
  const metro = METROS[event.metroId] ?? DEFAULT_METRO;
  const today = new Date().toLocaleDateString('en-CA', { timeZone: metro.timeZone });
  return event.date < today ? undefined : crowdCeiling(event);
}

/** "14k cap"'s number: thousands like every row figure, the plain number under 1,000 (".8k" would be odd for a pool). */
export function ceilingShort(count: number): string {
  if (count < 1000) return count.toLocaleString('en-US');
  if (count >= 9950) return `${Math.round(count / 1000)}k`;
  return `${(count / 1000).toFixed(1)}k`;
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
