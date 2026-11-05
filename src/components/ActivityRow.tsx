import { useState } from 'react';
import { Link } from 'react-router-dom';
import { METROS } from '../config/metros';
import { competitionOf, entryType, entryTypeLabel, eventType, lengthLine, seatsLine, type CrowdEvent, type Entry, type FeedItem, type LabeledFact } from '../data';
import { ACTIVITY_WORDS, feedKind, type ActivityKind } from '../lib/activity';
import { sportLabelOf, splitTitleLabel } from '../lib/eventTitle';
import { DateBox } from './StubRows';
import { FactList } from './FactList';
import { ChevronDown, TicketIcon, TvIcon } from './Icons';
import { TitleText } from './TitleText';
import { TypeIcon } from './TypeIcon';

/** Your own lines carry this id; a friend can be called "You", so the id is the test, never the name. */
export const YOU_ID = 'you';

/** The Activity rows' people, merged on one event. */
export interface ActivityPeople {
  title: string;
  date: string;
  venue?: string;
  metroId?: string;
  people: FeedItem[];
}

/**
 * One Activity row (build 7.2, R1a, Kylie, Nov 4: option A, the fact list behind a chevron; FINAL frames
 * `docs/build-7-2/mockups/activity-rows/r2-final/`). A date tile; a header line per status in Your Stubs form (the
 * status icon, the word in action blue, a dot, the names in ink; H2), the title with its type icon, and a sport line
 * in full words (H10). At the right edge a 13pt chevron, the row's second tap target (H3's one-target rule, the
 * exception she accepted), opens up to three facts in the D1 list shape: Where, Your Seat, Notes, then Review (R1f).
 * No verdict tile (R1e) and no crowd count (H6). The words open the event.
 */
export function ActivityRow({
  item,
  event,
  ownEntry,
  to,
  state,
  cityCode,
}: {
  item: ActivityPeople;
  /** The catalog's event behind the row, once loaded; the sport line, the type icon and the notes read it. */
  event?: CrowdEvent;
  /** Your own stub on this event, for your seat, your notes and your review. */
  ownEntry?: Entry;
  to?: string;
  state?: unknown;
  /** The city's code when the date is not at home (H8), at the end of the sport line. */
  cityCode?: string | null;
}) {
  const [open, setOpen] = useState(false);
  const split = splitTitleLabel(item.title);
  const heads = headerLines(item.people);
  const sport = sportLine(split.label ? `${split.label.own}${split.label.ifNecessary ? ' (if necessary)' : ''}` : undefined, event, ownEntry);
  const facts = rowFacts(item, event, ownEntry);
  const typeKey = event ? eventType(event).key : ownEntry ? entryType(ownEntry).key : null;
  const spoken = [split.name, ...heads.map((h) => `${ACTIVITY_WORDS[h.kind]}, ${h.names}`)].join(', ');
  return (
    <div className={`activity-row${open ? ' is-open' : ''}${heads.length > 1 ? ' two-heads' : ''}`}>
      {to && <Link to={to} state={state} className="activity-row-link" aria-label={spoken} />}
      <DateBox when={{ sort: item.date, label: '', precision: 'day' }} />
      <span className="activity-main">
        {heads.map((h) => (
          <span key={h.kind} className="activity-head">
            {h.kind === 'watched' ? <TvIcon /> : <TicketIcon size={13} />}
            <span className="activity-head-word">{ACTIVITY_WORDS[h.kind]}</span>
            <span className="activity-head-dot" aria-hidden>
              ·
            </span>
            <span className="activity-head-names">{h.names}</span>
          </span>
        ))}
        <span className="activity-title">
          <TypeIcon typeKey={typeKey} size={18} />
          <span className="activity-title-text">
            <TitleText text={split.name} />
          </span>
        </span>
        {(sport || cityCode) && (
          <span className="activity-sport">
            {sport}
            {cityCode && <span className="activity-code">{cityCode}</span>}
          </span>
        )}
        {open && facts.length > 0 && (
          <div className="activity-facts">
            <FactList facts={facts} />
          </div>
        )}
        {open && facts.length === 0 && <p className="activity-facts activity-facts-none">Nothing more on this one yet.</p>}
      </span>
      {/* The 13pt glyph, an invisible 44 × 44 target around it (r2-final); it flips when open. */}
      <button type="button" className="activity-chevron" aria-expanded={open} aria-label={open ? 'Hide details' : 'Show details'} onClick={() => setOpen((v) => !v)}>
        <ChevronDown />
      </button>
    </div>
  );
}

/** One header line per status, Attended before Watched; the names in the round 2 rule, You first. */
export function headerLines(people: readonly FeedItem[]): { kind: ActivityKind; names: string }[] {
  const byKind = new Map<ActivityKind, FeedItem[]>();
  for (const p of people) byKind.set(feedKind(p), [...(byKind.get(feedKind(p)) ?? []), p]);
  return (['attended', 'watched'] as const).filter((k) => byKind.has(k)).map((kind) => ({ kind, names: namesLine(byKind.get(kind)!) }));
}

/** "Sam R.", "Sam R. and Priya K.", "Sam R., Priya K., and Jo L.", "Sam R., Priya K., and 2 more"; You first. */
export function namesLine(people: readonly FeedItem[]): string {
  const you = people.some((p) => p.friend.id === YOU_ID);
  const others = people.filter((p) => p.friend.id !== YOU_ID).map((p) => p.friend.displayName ?? p.friend.handle ?? 'Someone');
  const names = you ? ['You', ...others] : others;
  if (names.length <= 1) return names[0] ?? '';
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  if (names.length === 3) return `${names[0]}, ${names[1]}, and ${names[2]}`;
  return `${names[0]}, ${names[1]}, and ${names.length - 2} more`;
}

/**
 * "Football · Big Ten", "Men's Basketball · Preseason", "Baseball · Wild Card · Game 2", "Concert": the sport or type
 * in full words, the competition the feed names, then the title's own label. From the event when it is loaded, else
 * from your stub's type line, else the label alone.
 */
function sportLine(label: string | undefined, event?: CrowdEvent, ownEntry?: Entry): string {
  const parts: string[] = [];
  if (event) {
    parts.push(sportLabelOf(event)?.words ?? eventType(event).label);
    const competition = competitionOf(event);
    if (competition) parts.push(competition);
  } else if (ownEntry) parts.push(entryTypeLabel(ownEntry));
  if (label) parts.push(label);
  return [...new Set(parts.filter(Boolean))].join(' · ');
}

/**
 * Up to three facts in R1f's order: Where, Your Seat (yours only, R1g), Notes, then Review. A row nobody attended
 * (watched only) has no Where; it shows the game's Length instead, when a result is on file. Notes are the event's
 * sellout and your own notable and promo lines; the review is the first one in the row's order, You first.
 */
function rowFacts(item: ActivityPeople, event?: CrowdEvent, ownEntry?: Entry): LabeledFact[] {
  const facts: LabeledFact[] = [];
  const attended = item.people.some((p) => feedKind(p) === 'attended');
  if (attended && item.venue) facts.push({ label: 'Where', value: item.venue });
  if (!attended && event?.result) {
    const length = lengthLine(event.result);
    if (length) facts.push({ label: 'Length', value: length });
  }
  const seat = ownEntry && !ownEntry.watched ? seatsLine(ownEntry.seats) : '';
  if (seat) facts.push({ label: 'Your Seat', value: seat });
  const notes = [event?.crowd.some((c) => c.soldOut) ? 'Sold Out' : null, ownEntry?.notable, ownEntry?.promo].filter((n): n is string => Boolean(n));
  if (notes.length > 0) facts.push({ label: 'Notes', value: notes.join(' · ') });
  const reviewed = item.people.find((p) => (p.friend.id === YOU_ID ? ownEntry?.review : p.entry?.review));
  if (reviewed) {
    const text = reviewed.friend.id === YOU_ID ? ownEntry!.review! : reviewed.entry!.review!;
    const who = reviewed.friend.id === YOU_ID ? 'You' : (reviewed.friend.displayName ?? reviewed.friend.handle ?? 'Someone');
    facts.push({ label: 'Review', value: `“${text}” ${who}` });
  }
  return facts.slice(0, 3);
}

/** The city's code for a row away from home (H8). */
export function awayCode(metroId: string | undefined, home: string): string | null {
  return metroId && metroId !== home ? (METROS[metroId]?.code ?? null) : null;
}
