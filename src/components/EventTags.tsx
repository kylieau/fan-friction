import { FRICTION_LEVELS, frictionWord, showFriction, type Friction, type Occasion } from '../config/scoreLabels';
import { isOpenAir, sizeTier, type CrowdEvent } from '../data';
import { crowdShort } from '../map/crowdPoints';

/**
 * Friction and occasion on screen (build 6, items 1 and 2). Conclusion marks live on list rows and the
 * event page only; chips, bars, Stubs rows, Following cards show information, not conclusions.
 *
 * Friction is one violet. On rows it is a "ghost ring": a dot inside a ring, the dot shrinking as the
 * level climbs (Squeezed nearly fills it, Swamped about half, Steamrolled a pinpoint). The word pill
 * keeps one tint for every level; only the word and the ring change. Unopposed shows no ring on lists
 * and the pill only where `withUnopposed` is asked for (the event page's two cards).
 */

/** The level a list row shows: the event feeds friction (5,000 or more) and is Squeezed or above. */
export function listedFriction(event: CrowdEvent): Friction | null {
  const a = event.assessment;
  if (!a || sizeTier(event) !== 'feeds-friction' || !showFriction(a.friction)) return null;
  return a.friction;
}

/** The level the event page shows: every level, Unopposed included, once the event feeds friction. */
export function pageFriction(event: CrowdEvent): Friction | null {
  const a = event.assessment;
  if (!a || sizeTier(event) !== 'feeds-friction') return null;
  return a.friction;
}

/** The dot's radius inside a ring of radius 4.6 on a 12-unit canvas (build 6, item 1; Kylie, M5-06: a thin outer ring). */
const RING_DOT: Record<Friction, number> = { Low: 0, Moderate: 3.2, Heavy: 2.0, Extreme: 0.9 };

/** The ghost ring, decorative: the row or pill beside it carries the words. */
export function FrictionRing({ level, size = 14 }: { level: Friction; size?: number }) {
  return (
    <svg className={`friction-ring ring-${level.toLowerCase()}`} viewBox="0 0 12 12" width={size} height={size} aria-hidden="true">
      <circle cx="6" cy="6" r="4.6" fill="none" stroke="currentColor" strokeWidth="1" />
      {RING_DOT[level] > 0 && <circle cx="6" cy="6" r={RING_DOT[level]} fill="currentColor" />}
    </svg>
  );
}

/** The ring on a list row, after the crowd figure (Squeezed up; a room under the floor gets none). */
export function FrictionMark({ event }: { event: CrowdEvent }) {
  const level = listedFriction(event);
  return level ? <FrictionRing level={level} /> : null;
}

/** The friction word as a pill, one violet tint for every level: Unopposed · Squeezed · Swamped · Steamrolled. */
export function FrictionPill({ level }: { level: Friction }) {
  return <span className={`chip chip-f ${level.toLowerCase()}`}>{frictionWord(level)}</span>;
}

/** The event page's mark: a 16 px ring at the left of the word pill, no tap target of its own. */
export function FrictionVerdict({ level }: { level: Friction }) {
  return (
    <span className="friction-verdict">
      <FrictionRing level={level} size={16} />
      <FrictionPill level={level} />
    </span>
  );
}

/**
 * The row's spoken friction, part of its accessible name (build 6, item 1): "Swamped: other events split this
 * crowd"; an open-air event's verdict can be the weather with no rival, so it says "rival events or weather".
 */
export function frictionSentence(event: CrowdEvent): string | null {
  const level = listedFriction(event);
  if (!level) return null;
  return `${frictionWord(level)}: ${isOpenAir(event) ? 'rival events or weather' : 'other events split this crowd'}`;
}

/** The four words in ladder order, for the map key's one-line introduction. */
export const FRICTION_LADDER: readonly Friction[] = FRICTION_LEVELS;

/** NOTABLE · MAJOR · MARQUEE as a 1 px outline tag in small caps. Routine is nothing. Marquee has no special style. */
export function OccasionTag({ occasion }: { occasion: Occasion }) {
  if (occasion === 'Routine') return null;
  return <span className="tag-occasion">{occasion}</span>;
}

const OCCASION_RANK: Record<Occasion, number> = { Routine: 0, Notable: 1, Major: 2, Marquee: 3 };

/** The highest occasion level among a day's events (the city's whole day, never the visible slice). */
export function topOccasion(day: readonly CrowdEvent[]): Occasion {
  let top: Occasion = 'Routine';
  for (const e of day) {
    const o = e.assessment?.occasion;
    if (o && OCCASION_RANK[o] > OCCASION_RANK[top]) top = o;
  }
  return top;
}

/**
 * Whether a listed event shows its occasion tag (build 6, item 2): only the day's top level, ties included,
 * and nothing when the day's top is Routine. `day` is every event in that city on that date; a list that spans
 * days passes the events of this event's date. The event page and the chip card always show their own tag.
 */
export function showsOccasionTag(event: CrowdEvent, day: readonly CrowdEvent[]): boolean {
  const o = event.assessment?.occasion;
  if (!o || o === 'Routine') return false;
  return o === topOccasion(day.filter((e) => e.date === event.date));
}

/** The tag on a list row, under the day's-top rule, in the right-justified slot at the end of the venue line. */
export function DayOccasionTag({ event, day }: { event: CrowdEvent; day: readonly CrowdEvent[] }) {
  if (!showsOccasionTag(event, day)) return null;
  return (
    <span className="event-tags">
      <OccasionTag occasion={event.assessment!.occasion} />
    </span>
  );
}

/** "by Mac DeMarco +2": the top rival starting within the hour and how many more. Shown only beside a friction pill (item 5). */
export function ByLine({ event }: { event: CrowdEvent }) {
  const rival = event.assessment?.rival;
  if (!rival) return null;
  return (
    <span className="by-line">
      by <strong>{rival.name}</strong>
      {rival.more > 0 ? ` +${rival.more}` : ''}
    </span>
  );
}

/** The filled two-person crowd mark in dark gold (7.1), before a crowd number in text. */
export function CrowdMark() {
  return (
    <svg className="crowd-mark" viewBox="0 0 24 24" width="12" height="12" aria-hidden="true" fill="currentColor">
      <circle cx="9" cy="7.5" r="3.5" />
      <path d="M2.5 19c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6v1h-13Z" />
      <circle cx="17" cy="8.5" r="2.8" />
      <path d="M15.3 13.4c.6-.3 1.1-.4 1.7-.4 2.9 0 4.5 2 4.5 5v2h-4v-1c0-2.2-.8-4.1-2.2-5.6Z" />
    </svg>
  );
}

/** "11k" with the crowd mark, the way the chips say it; nothing when there is no figure. */
export function CrowdFigure({ event, className = '' }: { event: CrowdEvent; className?: string }) {
  const text = crowdShort(event, undefined, false);
  if (text === 'No count yet') return null;
  return (
    <span className={`crowd-figure ${className}`.trim()}>
      <CrowdMark />
      {text}
    </span>
  );
}
