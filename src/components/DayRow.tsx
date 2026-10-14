import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { VENUES, venueNameOn, type CrowdEvent } from '../data';
import { clockTime } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { markOpenedFromMap } from '../lib/mapReturn';
import { eventPath } from '../lib/view';
import { CrowdFigure, EventTags } from './EventTags';

/**
 * The one row body every event list shares (Kylie, Oct 14: badges right-justified, "across the board").
 * The time at the left; line 1 the title and, at the right edge, the crowd; line 2 the venue and, at the
 * same right edge, the badges, so the badges line up with the crowd figure; then anything extra and the
 * activity line. A long title never meets the badges, and a long venue gives way to them.
 */
export function RowBody({
  event: e,
  title,
  time,
  venueText,
  line,
  extra,
}: {
  event: CrowdEvent;
  title?: string;
  time: string;
  venueText?: string | null;
  line?: string | null;
  extra?: ReactNode;
}) {
  return (
    <>
      <span className="day-row-time">{time}</span>
      <span className="day-row-body">
        <span className="day-row-line1">
          <span className="day-row-title">{title ?? listTitle(e)}</span>
          <CrowdFigure event={e} />
        </span>
        <span className="day-row-line2">
          {venueText && <span className="day-row-venue">{venueText}</span>}
          <EventTags event={e} />
        </span>
        {extra}
        {line && <span className="day-row-activity">{line}</span>}
      </span>
    </>
  );
}

/**
 * One of the day's rows (build notes 3, 4.2; mock 2b). Opens the event page.
 */
export function DayRow({ event: e, line }: { event: CrowdEvent; line: string | null }) {
  return (
    <Link to={eventPath(e.id, e.metroId)} state={{ fromMap: true }} className="day-row" onClick={() => markOpenedFromMap()}>
      <RowBody event={e} time={e.start ? clockTime(e.start) : 'TBA'} venueText={sheetVenue(e)} line={line} />
    </Link>
  );
}

/** Same venue name the event page uses. Every On-the-map row shows it. */
export function sheetVenue(event: CrowdEvent): string | null {
  if (event.place.type === 'venue') {
    const venue = VENUES[event.place.venueId];
    return venue ? venueNameOn(venue, event.date) : null;
  }
  return event.place.name;
}

