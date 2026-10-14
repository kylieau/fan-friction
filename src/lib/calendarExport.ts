// Add to calendar (build 5, item 3, option B): one event written once to the person's own calendar, no sync.
// An .ics file for Apple Calendar and most others, and a prefilled Google Calendar link. No library.

import { METROS } from '../config/metros';
import { VENUES, venueNameOn, wallClockToUtc, type CrowdEvent } from '../data';
import { fullTitle } from './eventTitle';
import { eventPath } from './view';
import { runningHours } from './windows';

interface CalendarFacts {
  title: string;
  location: string;
  details: string;
  /** UTC start and end, or null for an event with no time yet (then it is all-day). */
  start: Date | null;
  end: Date | null;
  date: string;
}

function factsOf(event: CrowdEvent): CalendarFacts {
  const metro = METROS[event.metroId];
  const venue = event.place.type === 'venue' ? (VENUES[event.place.venueId] ? venueNameOn(VENUES[event.place.venueId], event.date) : null) : event.place.name;
  const start = event.start && metro ? wallClockToUtc(event.date, event.start, metro.timeZone) : null;
  // The rough running time the timeline uses (by sport, 3 hours for shows).
  const end = start ? new Date(start.getTime() + runningHours(event) * 3600_000) : null;
  return {
    title: fullTitle(event),
    location: [venue, metro?.name].filter(Boolean).join(', '),
    details: `${window.location.origin}${eventPath(event.id, event.metroId)}`,
    start,
    end,
    date: event.date,
  };
}

const utc = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
const day = (date: string) => date.replace(/-/g, '');
const nextDay = (date: string) => {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + 1)).toISOString().slice(0, 10).replace(/-/g, '');
};

/** RFC 5545 text: backslash, semicolon, comma and newlines escaped. */
const esc = (text: string) => text.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n');

/** The .ics file's text (CRLF lines). */
export function icsFor(event: CrowdEvent, now = new Date()): string {
  const f = factsOf(event);
  const when = f.start && f.end ? [`DTSTART:${utc(f.start)}`, `DTEND:${utc(f.end)}`] : [`DTSTART;VALUE=DATE:${day(f.date)}`, `DTEND;VALUE=DATE:${nextDay(f.date)}`];
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fan/Friction//Add to calendar//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${event.id}@fan-friction.app`,
    `DTSTAMP:${utc(now)}`,
    ...when,
    `SUMMARY:${esc(f.title)}`,
    ...(f.location ? [`LOCATION:${esc(f.location)}`] : []),
    `DESCRIPTION:${esc(f.details)}`,
    `URL:${f.details}`,
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ].join('\r\n');
}

/** A Google Calendar link with the event filled in. */
export function googleCalendarUrl(event: CrowdEvent): string {
  const f = factsOf(event);
  const dates = f.start && f.end ? `${utc(f.start)}/${utc(f.end)}` : `${day(f.date)}/${nextDay(f.date)}`;
  const params = new URLSearchParams({ action: 'TEMPLATE', text: f.title, dates, details: f.details, location: f.location });
  return `https://calendar.google.com/calendar/render?${params}`;
}

/** Download the .ics the same way Export my events downloads its file (one download path for the app). */
export function downloadIcs(event: CrowdEvent) {
  const blob = new Blob([icsFor(event)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.id}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

/** Apple platforms say "Apple Calendar"; everything else "Device calendar" (the notes name Android; Windows isn't Apple either). */
export function deviceCalendarName(): string {
  return /iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(navigator.userAgent) ? 'Apple Calendar' : 'Device calendar';
}
