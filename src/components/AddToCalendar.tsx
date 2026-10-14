import { useEffect, useState } from 'react';
import type { CrowdEvent } from '../data';
import { deviceCalendarName, downloadIcs, googleCalendarUrl } from '../lib/calendarExport';
import { clockTime, shortLocalDate } from '../lib/dates';
import { fullTitle } from '../lib/eventTitle';
import { CalendarIcon } from './Icons';

/**
 * Add to calendar, option B (build 5, item 3; board b5/v2/add-to-calendar.png): a calendar icon button beside
 * "+ Stub it" that opens a chooser: the device calendar (an .ics file) or Google Calendar (a prefilled link).
 * Written once, no sync. Shown while the event is ahead.
 */
export function AddToCalendar({ event, venue }: { event: CrowdEvent; venue: string | null }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const key = (ev: KeyboardEvent) => ev.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [open]);
  return (
    <>
      <button type="button" className="calendar-button" aria-label="Add to calendar" onClick={() => setOpen(true)}>
        <CalendarIcon />
      </button>
      {open && (
        <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-labelledby="calendar-title" onClick={() => setOpen(false)}>
          <div className="action-sheet bulk-sheet" onClick={(ev) => ev.stopPropagation()}>
            <span className="sheet-handle" aria-hidden />
            <h2 id="calendar-title" className="stub-sheet-title">
              Add to calendar
            </h2>
            <p className="stub-sheet-sub">{[fullTitle(event), shortLocalDate(event.date), event.start ? clockTime(event.start) : 'Time TBA', venue].filter(Boolean).join(' · ')}</p>
            <button
              type="button"
              className="bulk-row"
              onClick={() => {
                downloadIcs(event);
                setOpen(false);
              }}
            >
              <span className="bulk-icon">
                <CalendarIcon />
              </span>
              <span className="bulk-text">
                <span className="bulk-word">{deviceCalendarName()}</span>
                <span className="bulk-sub">Your device calendar (.ics file)</span>
              </span>
            </button>
            <a className="bulk-row" href={googleCalendarUrl(event)} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              <span className="bulk-icon calendar-g" aria-hidden>
                G
              </span>
              <span className="bulk-text">
                <span className="bulk-word">Google Calendar</span>
                <span className="bulk-sub">Opens Google Calendar with the event filled in</span>
              </span>
            </a>
            <button type="button" className="link-button bulk-cancel" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
