import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VENUES, venueNameOn, type CrowdEvent } from '../data';
import { clockTime } from '../lib/dates';
import { eventPath } from '../lib/view';
import { RowBody, spokenRow } from './DayRow';

/**
 * Further out (Kylie, Oct 19–20, 2026; board docs/product/further-out-proposal.md): big events outside the city,
 * within about a 2-hour drive. The same rows as the lineup, with no friction ring or occasion tag (they never reach
 * the formula), and a second line of room · town · drive.
 */

/**
 * What "Further out" means, in one place (Kylie, Oct 20, 2026, the shorter line; Oct 21: the same definition behind the
 * (i) on the event page and in Settings). "2-hour" stays on one line.
 */
export function FurtherOutSentence() {
  return (
    <>
      Big events (5,000+) within about a <span style={{ whiteSpace: 'nowrap' }}>2-hour</span> drive. They never count toward a date's verdict.
    </>
  );
}

/**
 * The small (i) after a "Further out" label (Kylie, Oct 21, 2026: "literally an info icon circle, which would open to a
 * brief explanation"). It opens the same small card "About this verdict" uses, with the sentence above. The circle is
 * the app's info dot, drawn inside a 44 px button so the tap area is real on every side and the look stays small.
 */
export function FurtherOutInfo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="further-info" aria-label="About further out" onClick={() => setOpen(true)}>
        <span className="info-dot" aria-hidden="true">
          i
        </span>
      </button>
      {open && <FurtherOutCard onClose={() => setOpen(false)} />}
    </>
  );
}

function FurtherOutCard({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-labelledby="further-out-title" onClick={onClose}>
      {/* Its own text styling: in Settings the card sits inside an uppercase, letter-spaced heading. */}
      <div className="home-card about-read further-out-card" onClick={(event) => event.stopPropagation()}>
        <div className="about-read-head">
          <h2 id="further-out-title" className="home-title">
            Further Out
          </h2>
          <button type="button" className="about-read-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <p className="about-read-line">
          <FurtherOutSentence />
        </p>
      </div>
    </div>
  );
}

/** "45 min drive", "1 hr drive", "1 hr 25 min drive": the stored drive rounded to 5 minutes. Always an estimate. */
export function driveText(minutes: number): string {
  const m = Math.max(5, Math.round(minutes / 5) * 5);
  if (m < 60) return `${m} min drive`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  return rest ? `${h} hr ${rest} min drive` : `${h} hr drive`;
}

/** "Acrisure Arena · Palm Desert": the room and its town, no drive (build 7.1, M34; Kylie, Oct 23, 2026). */
export function furtherOutPlace(event: CrowdEvent): string | null {
  if (event.place.type !== 'venue') return event.place.name;
  const venue = VENUES[event.place.venueId];
  if (!venue) return null;
  const parts = [venueNameOn(venue, event.date)];
  if (venue.furtherOut?.town) parts.push(venue.furtherOut.town);
  return parts.join(' · ');
}

/**
 * The rows themselves, each opening its event page: the date page's lineup rows (`variant="date"`) or the Explore
 * List's (`variant="list"`), so each group matches the rows above it.
 */
export function FurtherOutList({ events, variant }: { events: readonly CrowdEvent[]; variant: 'date' | 'list' }) {
  const date = variant === 'date';
  return (
    <ul className={date ? 'date-list further-out-list' : 'day-list further-out-list'}>
      {events.map((e) => {
        const place = furtherOutPlace(e);
        return (
          <li key={e.id} className={date ? 'date-row' : undefined}>
            <Link to={eventPath(e.id, e.metroId)} className={date ? 'date-row-main' : 'day-row'} aria-label={`${spokenRow(e, place)}, further out`}>
              <RowBody event={e} day={events} time={e.start ? clockTime(e.start) : 'TBA'} venueText={place} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
