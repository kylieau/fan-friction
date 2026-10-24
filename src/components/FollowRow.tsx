import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DateBox } from './StubRows';
import { ReadTile } from './ReadTile';
import { TitleText, LabelLine } from './TitleText';
import { TypeIcon } from './TypeIcon';
import { splitTitleLabel } from '../lib/eventTitle';
import { shortLocalDate } from '../lib/dates';
import { datePath } from '../lib/view';

/**
 * The one row the Following tab's two timelines share (Kylie's redesign, Oct 19, 2026; mockups 01 and 06): a date
 * tile at the left; a text block of three lines, the lead in action blue (a Fave's icon and name, or the people
 * icon and what friends answered), the title, and the time and venue in grey; the read tile at the right, opening
 * the date's page, or a grey Away tag where the app does not cover the building. The words open the event. No
 * friction mark, no occasion tag, no own answer on these rows.
 */
export function FollowRow({
  date,
  lead,
  title,
  facts,
  to,
  state,
  rating,
  readTo,
  away,
  cityCode,
  spoken,
  noTile,
  mark,
  line,
}: {
  date: string;
  /** The blue first line: its icon, its words, and where it goes when it is a link (a Fave's page). */
  lead: { icon: ReactNode; text: string; to?: string; label?: string };
  title: string;
  facts: string;
  /** Where the words open: the event page, or the date page when the app holds no event; nothing when the row has no city to open. */
  to?: string;
  state?: unknown;
  rating: number | null;
  /** The date page behind the read tile; none when there is no read to open. */
  readTo?: string | null;
  /** The grey tag instead of a read: "Away" at another team's building, "No verdict" for a home game the app cannot place. */
  away?: 'Away' | 'No verdict';
  /** The city's code over the read tile when the date is not at home ("MSP"). */
  cityCode?: string | null;
  spoken: string;
  /** No verdict pill at all (build 7.1, M23: a row nobody attended): no number, no dash, no city code. */
  noTile?: boolean;
  /** A small mark after the title (build 7.1, item 16, option A: the plan's icon on a fave's row that is also a plan). */
  mark?: ReactNode;
  /** One quiet line under the facts ("Friends · Sam R. Attending"; build 7.1, M22). */
  line?: string | null;
}) {
  const split = splitTitleLabel(title);
  return (
    <div className="follow-row">
      {to && <Link to={to} state={state} className="follow-row-link" aria-label={spoken} />}
      <DateBox when={{ sort: date, label: '', precision: 'day' }} />
      <span className="follow-main">
        {lead.to ? (
          <Link to={lead.to} className="follow-lead" aria-label={lead.label ?? lead.text}>
            {lead.icon}
            <span className="follow-lead-text">{lead.text}</span>
          </Link>
        ) : (
          <span className="follow-lead">
            {lead.icon}
            <span className="follow-lead-text">{lead.text}</span>
          </span>
        )}
        <span className="follow-title">
          {/* The name ellipsizes on its own, so a long title never hides the mark (Codex, stage 3). */}
          <span className="follow-title-text">
            <TitleText text={split.name} />
          </span>
          {mark && <span className="follow-mark">{mark}</span>}
        </span>
        {split.label && <LabelLine label={split.label} />}
        {facts && <span className="follow-facts">{facts}</span>}
        {line && <span className="follow-line">{line}</span>}
      </span>
      {noTile ? null : away ? (
        <span className="follow-read">
          <span className="away-tag">{away}</span>
        </span>
      ) : readTo ? (
        <Link to={readTo} className="follow-read" aria-label={`The verdict for ${shortLocalDate(date)}${cityCode ? ` in ${cityCode}` : ''}`}>
          {cityCode && <span className="fav-sched-code">{cityCode}</span>}
          <ReadTile rating={rating} />
          <span className="follow-chevron" aria-hidden>
            ›
          </span>
        </Link>
      ) : (
        <span className="follow-read">
          <ReadTile rating={rating} />
        </span>
      )}
    </div>
  );
}

/** The date page a row's read tile opens, when the row has a city. */
export function readPath(date: string, metroId: string | undefined, eventId?: string): string | null {
  return metroId ? datePath(date, metroId, eventId) : null;
}

/** A lead line's icon: the type icon at the row's size. */
export function LeadIcon({ typeKey }: { typeKey: string | null | undefined }) {
  return <TypeIcon typeKey={typeKey} size={12} className="follow-lead-icon" />;
}
