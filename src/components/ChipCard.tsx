import { Link } from 'react-router-dom';
import { ByLine, CrowdMark, EventFrictionPill, OccasionTag } from './EventTags';
import { atLeastMark, displayedCrowdCount, estimateMark, feelsLikeLabel, isOpenAir, VENUES, venueNameOn, weatherForEvent, type CrowdEvent } from '../data';
import { clockTime } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { crowdThousands } from '../map/crowdPoints';
import { cardSegments } from '../map/chipActivity';
import { ActivityIcon } from './ActivityLines';
import type { FeedItem } from '../data';
import { TitleText } from './TitleText';

/**
 * The compact card that rises when a chip is tapped (build notes 2, T1): occasion tag
 * and title, "Venue · time", the friction pill with its "by" line, the crowd figure and
 * a chevron. The whole card opens the event page. No read box: the read belongs to the
 * whole night, and the card is about this event.
 */
export function ChipCard({ event, friends, onOpen }: { event: CrowdEvent; /** Friends with a status here, when Activity is on; never you. */ friends?: FeedItem[]; onOpen?: () => void }) {
  const venue = event.place.type === 'venue' ? (VENUES[event.place.venueId] ? venueNameOn(VENUES[event.place.venueId], event.date) : null) : event.place.name;
  const size = displayedCrowdCount(event);
  // The start-hour feels-like, a raw number, on open-air venues only; only on this card and the event page (Kylie, Oct 4).
  const row = isOpenAir(event) ? weatherForEvent(event) : undefined;
  const degrees = row ? feelsLikeLabel(row, event.metroId) : null;
  const segments = friends ? cardSegments(friends) : [];
  return (
    <Link to={eventPath(event.id, event.metroId)} state={{ fromMap: true }} className="chip-card" onClick={onOpen}>
      <span className="chip-card-main">
        <span className="chip-card-title">
          {event.assessment && <OccasionTag occasion={event.assessment.occasion} />}
          <span className="log-title"><TitleText text={listTitle(event)} /></span>
        </span>
        <span className="log-facts">{[venue, event.start ? clockTime(event.start) : 'Time TBA', degrees].filter(Boolean).join(' · ')}</span>
        <span className="chip-card-tags">
          <EventFrictionPill event={event} />
          <ByLine event={event} />
        </span>
        {segments.length > 0 && (
          <span className="chip-card-activity">
            {segments.map((seg, i) => (
              <span key={seg.kind} className="chip-card-activity-item">
                {i > 0 && <span aria-hidden>·</span>}
                <ActivityIcon kind={seg.kind} />
                {seg.text}
              </span>
            ))}
          </span>
        )}
      </span>
      <span className="chip-card-side">
        {size ? (
          <span className="chip-card-crowd">
            <CrowdMark />
            {estimateMark(event)}
            {crowdThousands(size)}
            {atLeastMark(event)}
          </span>
        ) : null}
        <span className="chip-card-chevron" aria-hidden>
          ›
        </span>
      </span>
    </Link>
  );
}
