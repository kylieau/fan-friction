import { frictionClass, frictionWord, showFriction, type Friction, type Occasion } from '../config/scoreLabels';
import { sizeTier, type CrowdEvent } from '../data';
import { crowdShort } from '../map/crowdPoints';

/**
 * The two tags under an event's title, wherever events are listed (build notes 2, two tags):
 * the occasion as a quiet outline tag (Routine shows nothing), then friction as a small
 * filled pill, the word only. Events under the friction floor get no pill. "Unopposed"
 * shows only where `withUnopposed` is passed (the event page).
 */
export function EventTags({ event, withUnopposed = false }: { event: CrowdEvent; withUnopposed?: boolean }) {
  const a = event.assessment;
  const occasion = a?.occasion ?? null;
  const feeds = sizeTier(event) === 'feeds-friction';
  const pill = a && feeds && (withUnopposed || showFriction(a.friction));
  if (!occasion && !pill) return null;
  return (
    <span className="event-tags">
      {occasion && <OccasionTag occasion={occasion} />}
      {pill && <FrictionPill level={a.friction} />}
    </span>
  );
}

/** NOTABLE · MAJOR · MARQUEE as a 1 px outline tag in small caps. Routine is nothing. */
export function OccasionTag({ occasion }: { occasion: Occasion }) {
  if (occasion === 'Routine') return null;
  return <span className="tag-occasion">{occasion}</span>;
}

/** The friction word as a filled pill on the violet ladder: Squeezed · Swamped · Steamrolled (Unopposed is pale). */
export function FrictionPill({ level }: { level: Friction }) {
  return <span className={`chip chip-f ${frictionClass(level)}`}>{frictionWord(level)}</span>;
}

/** The pill for a listed event, when it has one (the floor and Low leave it out). */
export function EventFrictionPill({ event }: { event: CrowdEvent }) {
  const a = event.assessment;
  if (!a || sizeTier(event) !== 'feeds-friction' || !showFriction(a.friction)) return null;
  return <FrictionPill level={a.friction} />;
}

/** "by Mac DeMarco +2": the top rival starting within the hour and how many more (chip card, event page, share card only). */
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
  const text = crowdShort(event, undefined, false, false);
  if (text === 'No count yet') return null;
  return (
    <span className={`crowd-figure ${className}`.trim()}>
      <CrowdMark />
      {text}
    </span>
  );
}
