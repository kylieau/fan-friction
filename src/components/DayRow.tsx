import { Link } from 'react-router-dom';
import { VENUES, venueNameOn, type CrowdEvent } from '../data';
import { clockTime } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { markOpenedFromMap } from '../lib/mapReturn';
import { eventPath } from '../lib/view';
import { CrowdFigure, EventTags } from './EventTags';

/**
 * One of the day's rows (build notes 3, 4.2; mock 2b): the time on the left, the title over the venue,
 * the crowd with its tags on the right, and one small activity line under it. Opens the event page.
 */
export function DayRow({ event: e, line }: { event: CrowdEvent; line: string | null }) {
  const venue = sheetVenue(e);
  return (
    <Link to={eventPath(e.id, e.metroId)} state={{ fromMap: true }} className="day-row" onClick={() => markOpenedFromMap()}>
      <span className="day-row-time">{e.start ? clockTime(e.start) : 'TBA'}</span>
      <span className="day-row-main">
        <span className="day-row-title">{listTitle(e)}</span>
        {venue && <span className="day-row-venue">{venue}</span>}
        {line && <span className="day-row-activity">{line}</span>}
      </span>
      <span className="day-row-side">
        <CrowdFigure event={e} />
        <EventTags event={e} />
      </span>
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

