import { Link } from 'react-router-dom';
import { ByLine, CrowdMark, EventFrictionPill, OccasionTag } from './EventTags';
import { drawSize, VENUES, venueNameOn, type CrowdEvent } from '../data';
import { clockTime } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { crowdThousands } from '../map/crowdPoints';

/**
 * The compact card that rises when a chip is tapped (build notes 2, T1): occasion tag
 * and title, "Venue · time", the friction pill with its "by" line, the crowd figure and
 * a chevron. The whole card opens the event page. No read box: the read belongs to the
 * whole night, and the card is about this event.
 */
export function ChipCard({ event, onOpen }: { event: CrowdEvent; onOpen?: () => void }) {
  const venue = event.place.type === 'venue' ? (VENUES[event.place.venueId] ? venueNameOn(VENUES[event.place.venueId], event.date) : null) : event.place.name;
  const size = drawSize(event);
  return (
    <Link to={eventPath(event.id, event.metroId)} state={{ fromMap: true }} className="chip-card" onClick={onOpen}>
      <span className="chip-card-main">
        <span className="chip-card-title">
          {event.assessment && <OccasionTag occasion={event.assessment.occasion} />}
          <span className="log-title">{listTitle(event)}</span>
        </span>
        <span className="log-facts">{[venue, event.start ? clockTime(event.start) : 'Time TBA'].filter(Boolean).join(' · ')}</span>
        <span className="chip-card-tags">
          <EventFrictionPill event={event} />
          <ByLine event={event} />
        </span>
      </span>
      <span className="chip-card-side">
        {size ? (
          <span className="chip-card-crowd">
            <CrowdMark />
            {crowdThousands(size)}
          </span>
        ) : null}
        <span className="chip-card-chevron" aria-hidden>
          ›
        </span>
      </span>
    </Link>
  );
}
