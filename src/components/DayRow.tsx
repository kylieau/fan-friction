import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { drawSize, eventType, VENUES, venueNameOn, type CrowdEvent, type SkyKind } from '../data';
import { degreesFor } from '../config/metros';
import { WeatherIcon } from './WeatherIcon';
import { TypeIcon } from './TypeIcon';
import { clockTime } from '../lib/dates';
import { listTitle, spokenTitle, splitTitleLabel } from '../lib/eventTitle';
import { markOpenedFromMap } from '../lib/mapReturn';
import { eventPath } from '../lib/view';
import { CrowdFigure, DayOccasionTag, FrictionMark, frictionSentence } from './EventTags';
import { ActivityIcon } from './ActivityLines';
import { ACTIVITY_WORDS, type ActivityKind } from '../lib/activity';
import { LabelLine } from './TitleText';

/**
 * The one row body every event list shares (Kylie, Oct 14: badges right-justified, "across the board").
 * The time at the left; line 1 the title and, at the right edge, the crowd figure with the friction ring
 * after it (build 6, item 1); line 2 the venue and, at the same right edge, the occasion tag, shown only on
 * the day's top event(s) (build 6, item 2). A long title never meets the figure, and a long venue gives way
 * to the tag. Your own answer is its own right-aligned line under the tag: its icon and word in link blue,
 * no fill (build 5, item 4; board datepage-r3-lean). Friends stay in the activity line.
 */
export function RowBody({
  event: e,
  day,
  title,
  time,
  venueText,
  line,
  you,
  extra,
  weather,
}: {
  event: CrowdEvent;
  /** Every event in this city on this date (not the visible slice): the occasion tag shows only on the day's top level. */
  day: readonly CrowdEvent[];
  title?: string;
  time: string;
  venueText?: string | null;
  line?: string | null;
  /** Your own answer on this event, shown as "Attending" with its icon. */
  you?: ActivityKind | null;
  extra?: ReactNode;
  /**
   * The day page's outdoor row marker (build 7.1, M3): a plain grey sun, cloud or rain and the peak feels-like at the
   * venue during the event, right-aligned on the venue line, the same right edge as the friction ring. Indoor rows
   * and every other list pass nothing.
   */
  weather?: { sky: SkyKind; tempF: number } | null;
}) {
  // The label sits on its own line, a sibling of the title (the title's two-line clamp would hide it), between
  // the title and the venue (labels r3).
  const { name, label } = splitTitleLabel(title ?? listTitle(e));
  return (
    <>
      <span className="day-row-time">{time}</span>
      <span className="day-row-body">
        <span className="day-row-line1">
          <span className="day-row-title">
            <TypeIcon typeKey={eventType(e).key} size={18} />
            {name}
          </span>
          <span className="day-row-right">
            <CrowdFigure event={e} />
            <FrictionMark event={e} />
          </span>
        </span>
        {label && <LabelLine label={label} className="day-row-label" />}
        <span className="day-row-line2">
          {venueText && <span className="day-row-venue">{venueText}</span>}
          <DayOccasionTag event={e} day={day} />
          {weather && (
            <span className="day-row-weather" aria-label={`Peak ${degreesFor(weather.tempF, e.metroId)} at the venue`}>
              <WeatherIcon kind={weather.sky} />
              <span aria-hidden>{degreesFor(weather.tempF, e.metroId)}</span>
            </span>
          )}
        </span>
        {you && (
          <span className="day-row-you">
            <ActivityIcon kind={you} />
            {ACTIVITY_WORDS[you]}
          </span>
        )}
        {extra}
        {line && <span className="day-row-activity">{line}</span>}
      </span>
    </>
  );
}

/**
 * One of the day's rows (build notes 3, 4.2; mock 2b). Opens the event page.
 */
export function DayRow({ event: e, day, line, you }: { event: CrowdEvent; day: readonly CrowdEvent[]; line: string | null; you?: ActivityKind | null }) {
  return (
    <Link to={eventPath(e.id, e.metroId)} state={{ fromMap: true }} className="day-row" aria-label={spokenRow(e, sheetVenue(e))} onClick={() => markOpenedFromMap()}>
      <RowBody event={e} day={day} time={e.start ? clockTime(e.start) : 'TBA'} venueText={sheetVenue(e)} line={line} you={you} />
    </Link>
  );
}

/**
 * The row read as one sentence (labels r3): "Brewers at Dodgers, NLCS Game 3, 7:00 pm, Dodger Stadium, about 55,000,
 * Swamped: other events split this crowd". The friction ring has no tap target, so its words ride here (build 6, item 1).
 */
export function spokenRow(e: CrowdEvent, venue: string | null): string {
  const size = drawSize(e);
  return [spokenTitle(e), e.start ? clockTime(e.start) : null, venue, size ? `about ${size.toLocaleString('en-US')}` : null, frictionSentence(e)].filter(Boolean).join(', ');
}

/** Same venue name the event page uses. Every On-the-map row shows it. */
export function sheetVenue(event: CrowdEvent): string | null {
  if (event.place.type === 'venue') {
    const venue = VENUES[event.place.venueId];
    return venue ? venueNameOn(venue, event.date) : null;
  }
  return event.place.name;
}
