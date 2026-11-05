import { useState, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { costWords, drawSize, eventType, seatsLine, stubDefault, type CrowdEvent, type Entry, type FeedItem, type Plan, type StubVisibility } from '../data';
import { ACTIVITY_WORDS, activityGroups, activityOrder, groupNames, type ActivityKind, type ActivityPerson } from '../lib/activity';
import { clockTime } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { entryPath, eventPath, tagPath } from '../lib/view';
import { ActivityIcon } from './ActivityLines';
import { AddToCalendar } from './AddToCalendar';
import { EntryLayer } from './EntryLayer';
import { CrowdFigure } from './EventTags';
import { LockMark, PencilIcon, PlusIcon } from './Icons';
import { LevelPill } from './LevelPill';
import { TagChip } from './TagChip';
import { TitleText } from './TitleText';
import { TypeIcon } from './TypeIcon';

/**
 * The Your Stub ticket (build 7.2, R2a; Kylie, Nov 4: "Your Stub Is The Hero", built as the FINAL frames
 * `docs/build-7-2/mockups/activity-card/round2/eA-*.png` draw it). Under an ACTIVITY label: a white card with a blue
 * top edge; your status as its biggest line (the icon and the word at 21pt in action blue) with the privacy pill at
 * the right ("Visible to Friends", "Private"; R2d); a Seat, You Paid, With grid; the review note (H11f, the gold-family
 * exception) and your tags; a perforation; then one full-width "Edit stub" button that opens the Stub it sheet. A
 * plan gets "Edit" and "Add to calendar". With nothing logged, a dashed outline with "+ Stub it". Your stub lives
 * here and nowhere else on the page: the status chip, the Your Stub line and the bottom card are gone.
 */
export function YourStubTicket({
  event,
  you,
  entry,
  row,
  level,
  ahead,
  venue,
  onEdit,
  onLevel,
}: {
  event: CrowdEvent;
  /** Your answer on this event, or null when nothing is logged. */
  you: (ActivityPerson & { kind: ActivityKind }) | null;
  /** Your stub, once the event is logged as attended or watched. */
  entry?: Entry;
  /** The plan or stub behind your answer, for its tags. */
  row?: Entry | Plan;
  /** Who sees it, when signed in; null signed out. */
  level: StubVisibility | null;
  ahead: boolean;
  venue: string | null;
  /** Opens the Stub it sheet. */
  onEdit: () => void;
  onLevel: (next: StubVisibility) => void;
}) {
  const navigate = useNavigate();
  const tags = row?.userTags ?? [];
  if (!you) {
    return (
      <section className="your-ticket is-empty" aria-label="Your Stub">
        <div className="your-ticket-empty-head">
          <span className="your-ticket-label">Your Stub</span>
          {ahead && <AddToCalendar event={event} venue={venue} />}
        </div>
        <p className="your-ticket-empty-words">{ahead ? 'Nothing logged yet. Mark it Attending, Watching, or Interested.' : 'Nothing logged yet. Log that you attended or watched.'}</p>
        <button type="button" className="gold-button your-ticket-stub-it" onClick={onEdit}>
          <PlusIcon /> Stub it
        </button>
      </section>
    );
  }
  const watched = you.kind === 'watched' || you.kind === 'watching';
  const grid: { label: string; value: string }[] = entry
    ? [
        ...(!entry.watched && seatsLine(entry.seats) ? [{ label: 'Seat', value: seatsLine(entry.seats) }] : []),
        ...(entry.cost && costWords(entry.cost) ? [{ label: 'You Paid', value: costWords(entry.cost) }] : []),
        ...(entry.with ? [{ label: 'With', value: entry.with }] : []),
      ]
    : [];
  return (
    <section className="your-ticket" aria-label="Your Stub">
      <div className="your-ticket-top">
        <span className={`your-ticket-status status-${you.kind}`}>
          <ActivityIcon kind={you.kind} />
          {ACTIVITY_WORDS[you.kind]}
          {watched && you.place ? <span className="your-ticket-place"> · {you.place}</span> : null}
        </span>
        {level && <LevelPill down labels="visible" value={level} defaultLevel={stubDefault()} onChange={onLevel} />}
      </div>
      {grid.length > 0 && (
        <dl className="your-ticket-grid">
          {grid.map((cell) => (
            <div key={cell.label} className="your-ticket-cell">
              <dt>{cell.label}</dt>
              <dd>{cell.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {/* The review note and who you went with keep their own editor (the sheet edits the answer, tags, seat and
          cost); With shows in the grid above, so the layer's own line is off. */}
      {entry && <EntryLayer entry={entry} showLevel={false} showFacts={false} />}
      {tags.length > 0 && (
        <div className="your-stub-tags">
          {tags.map((tag) => (
            <TagChip key={tag} tag={tag} size="row" onClick={() => navigate(tagPath(tag))} />
          ))}
        </div>
      )}
      <div className="your-ticket-tear" aria-hidden />
      <div className="your-ticket-buttons">
        <button type="button" className="ticket-button" onClick={onEdit}>
          <PencilIcon />
          {entry ? 'Edit stub' : 'Edit'}
        </button>
        {ahead && <AddToCalendar event={event} venue={venue} variant="button" />}
      </div>
    </section>
  );
}

/**
 * The Friends card (R2a): under the ticket, one row per answer in the ladder's order, the icon and the word in ink
 * (nothing here is a button; R2e) and the names by name, You never among them. Every kind shows (R2f); a shared watch
 * keeps its place (R2g). Nothing when nobody you follow answered.
 */
export function FriendsCard({ friends }: { friends: readonly FeedItem[] }) {
  const groups = activityGroups(friends, null);
  const kinds = activityOrder(groups);
  if (kinds.length === 0) return null;
  return (
    <section className="friends-card" aria-label="Friends">
      <span className="your-ticket-label">Friends</span>
      <ul className="friends-rows">
        {kinds.map((kind) => (
          <li key={kind} className="friends-row">
            <ActivityIcon kind={kind} />
            <span className="friends-row-word">{ACTIVITY_WORDS[kind]}</span>
            <span className="friends-row-dot" aria-hidden>
              ·
            </span>
            <span className="friends-row-names">{groupNames(kind, groups[kind]!)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** One event's activity on a date: yours, a friend's, or both. */
interface DateItem {
  key: string;
  event?: CrowdEvent;
  title: string;
  venue?: string;
  start?: string;
  entry?: Entry;
  plan?: Plan;
  friends: FeedItem[];
}

/** The cap on a big day (H11d): three events, then "See all". */
const CAP = 3;

/**
 * The date page's Activity card (build 7.2, R2b; Kylie, Nov 4: by event, capped at 3; FINAL frames `dA-*.png`). It
 * replaces the Attended card and the Following block (H11e). Each event: a 44pt header that opens its page, with the
 * crowd pinned right; your strip (pale blue, a blue edge) with the status word and your facts; the review note; then
 * friends' rows. The cap (R2c): yours first, the rest by time (a tie to the bigger crowd), the three shown in time
 * order, a rule line saying so and a "See all" row that opens the rest in place. Three or fewer: no line, no row.
 */
export function DateActivityCard({ events, entries, plans, friends, level }: { events: readonly CrowdEvent[]; entries: readonly Entry[]; plans: readonly Plan[]; friends: readonly FeedItem[]; /** Who sees a stub, for the Private mark on your strip. */ level: (row: Entry | Plan) => StubVisibility | null }) {
  const [all, setAll] = useState(false);
  const byId = new Map(events.map((e) => [e.id, e]));
  const items = new Map<string, DateItem>();
  const itemFor = (eventId: string | undefined, title: string, venue?: string): DateItem => {
    const key = eventId ?? `title:${title.toLowerCase()}`;
    const event = eventId ? byId.get(eventId) : undefined;
    const item: DateItem = items.get(key) ?? { key, event, title: event ? listTitle(event) : title, venue, start: event?.start ?? undefined, friends: [] };
    items.set(key, item);
    return item;
  };
  for (const entry of entries) itemFor(entry.eventId, entry.title, entry.venue).entry = entry;
  for (const plan of plans) itemFor(plan.eventId, plan.title, plan.venue).plan = plan;
  for (const line of friends) itemFor(line.eventId, line.title, line.venue).friends.push(line);
  const byTime = (a: DateItem, b: DateItem) => (a.start ?? '99').localeCompare(b.start ?? '99') || (a.event ? (drawSize(b.event!) ?? 0) : 0) - (b.event ? (drawSize(a.event!) ?? 0) : 0);
  const everything = [...items.values()].sort(byTime);
  if (everything.length === 0) return null;
  const capped = everything.length > CAP && !all;
  let shown = everything;
  if (capped) {
    const yours = everything.filter((it) => it.entry || it.plan);
    const picked = [...yours, ...everything.filter((it) => !yours.includes(it))].slice(0, CAP);
    shown = everything.filter((it) => picked.includes(it));
  }
  return (
    <section className="date-activity" aria-labelledby="date-activity-title">
      <h2 id="date-activity-title" className="you-heading in-card-title">
        Activity
      </h2>
      {everything.length > CAP && (
        <p className="date-activity-rule">
          {all ? (
            <strong>All {everything.length} events.</strong>
          ) : (
            <>
              <strong>
                {CAP} of {everything.length} events.
              </strong>{' '}
              Yours first, then by time; shown in time order.
            </>
          )}
        </p>
      )}
      <ul className="date-activity-list">
        {shown.map((item) => (
          <li key={item.key} className="date-activity-item">
            <DateItemHead item={item} />
            {(item.entry || item.plan) && <YourStrip entry={item.entry} plan={item.plan} level={level(item.entry ?? item.plan!)} />}
            {item.entry?.review && <p className="entry-note date-activity-note">{item.entry.review}</p>}
            <FriendsRows friends={item.friends} />
          </li>
        ))}
      </ul>
      {capped && (
        <button type="button" className="date-activity-all" onClick={() => setAll(true)}>
          See all {everything.length} events <span aria-hidden>›</span>
        </button>
      )}
    </section>
  );
}

/** The event's header on the date card: type icon and title, venue and time, the crowd pinned right. Opens the event. */
function DateItemHead({ item }: { item: DateItem }) {
  const to = item.event ? eventPath(item.event.id, item.event.metroId) : item.entry ? entryPath(item.entry.id) : null;
  const body: ReactNode = (
    <>
      <span className="date-activity-title">
        <TypeIcon typeKey={item.event ? eventType(item.event).key : null} size={17} />
        <span className="date-activity-title-text">
          <TitleText text={item.title} />
        </span>
      </span>
      <span className="date-activity-sub">
        <span className="date-activity-where">{[item.venue, item.start ? clockTime(item.start) : null].filter(Boolean).join(' · ')}</span>
        {item.event && <CrowdFigure event={item.event} />}
      </span>
    </>
  );
  return to ? (
    <Link to={to} className="date-activity-head">
      {body}
    </Link>
  ) : (
    <div className="date-activity-head">{body}</div>
  );
}

/** Your strip: the status word in action blue, a Private mark when the stub is private, your facts under it. */
function YourStrip({ entry, plan, level }: { entry?: Entry; plan?: Plan; level: StubVisibility | null }) {
  const kind: ActivityKind = entry ? (entry.watched ? 'watched' : 'attended') : plan!.interested ? 'interested' : plan!.watch ? 'watching' : 'attending';
  const facts = entry ? [!entry.watched ? seatsLine(entry.seats) : '', entry.cost ? costWords(entry.cost) : '', entry.with ? `With ${entry.with}` : ''].filter(Boolean) : [];
  return (
    <div className="your-strip">
      <span className="your-strip-top">
        <span className={`your-strip-status status-${kind}`}>
          <ActivityIcon kind={kind} />
          {ACTIVITY_WORDS[kind]}
        </span>
        {level === 'private' && (
          <span className="your-strip-private">
            <LockMark size={13} /> Private
          </span>
        )}
      </span>
      {facts.length > 0 && <span className="your-strip-facts">{facts.join(' · ')}</span>}
    </div>
  );
}

/** Friends' rows under an event on the date card: the same ink rows as the Friends card. */
function FriendsRows({ friends }: { friends: readonly FeedItem[] }) {
  const groups = activityGroups(friends, null);
  const kinds = activityOrder(groups);
  if (kinds.length === 0) return null;
  return (
    <ul className="friends-rows">
      {kinds.map((kind) => (
        <li key={kind} className="friends-row">
          <ActivityIcon kind={kind} />
          <span className="friends-row-word">{ACTIVITY_WORDS[kind]}</span>
          <span className="friends-row-dot" aria-hidden>
            ·
          </span>
          <span className="friends-row-names">{groupNames(kind, groups[kind]!)}</span>
        </li>
      ))}
    </ul>
  );
}

