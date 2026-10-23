import { useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { eventMatches, eventType, favoriteDisplayName, favoritesOf, getPersonalLog, subscribePersonalLog, VENUES, venueNameOn, todayIn, type CrowdEvent } from '../data';
import { yourActivity, ACTIVITY_WORDS } from '../lib/activity';
import { clockTime, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { BookmarkIcon, TicketIcon, TvIcon } from './Icons';
import { TypeIcon } from './TypeIcon';
import { TitleText } from './TitleText';
import { StubSheet } from './StubSheet';

/**
 * The one event row the Log an event sheet and global search share (build 7, §3.2 and §6, Locked; mock 06, "the calmer
 * alternative", Kylie, Oct 21, 2026): the type icon and a lead (the Fave it belongs to, else "Near you" or the city),
 * the title, a meta line with your status word first when you have one, and at the right one outlined "+" that opens
 * the Stub it sheet, or, once logged or planned, a filled ticket / TV / bookmark mark with no add action. The words
 * open the event page.
 */
export function LogRow({ event, lead: leadText, onOpen }: { event: CrowdEvent; /** The lead line's words when the caller knows them ("Yesterday · You opened it"). */ lead?: string; onOpen?: () => void }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [sheet, setSheet] = useState(false);
  const you = yourActivity(event.id, log);
  const metro = METROS[event.metroId] ?? DEFAULT_METRO;
  const today = todayIn(metro);
  const fave = favoritesOf(log).find((fav) => eventMatches(event, fav));
  const lead = leadText ?? (fave ? `${favoriteDisplayName(fave)} · Fave` : metro.name);
  const venue = event.place.type === 'venue' ? (VENUES[event.place.venueId] ? venueNameOn(VENUES[event.place.venueId], event.date) : null) : event.place.name;
  const when = event.date === today ? (event.start ? clockTime(event.start) : 'Today') : `${shortLocalDate(event.date)}${event.start ? ` · ${clockTime(event.start)}` : ''}`;
  const meta = [you ? ACTIVITY_WORDS[you.kind] : null, when, venue].filter(Boolean);
  let mark: ReactNode = null;
  if (you) mark = you.kind === 'interested' ? <BookmarkIcon size={20} /> : you.kind === 'watching' || you.kind === 'watched' ? <TvIcon /> : <TicketIcon size={22} />;
  return (
    <div className={`log-event-row${you ? ' is-logged' : ''}`}>
      <Link to={eventPath(event.id, event.metroId)} className="log-event-words" onClick={onOpen}>
        <span className="follow-lead">
          <TypeIcon typeKey={eventType(event).key} size={12} className="follow-lead-icon" />
          <span className="follow-lead-text">{lead}</span>
        </span>
        <span className="log-event-title">
          <TitleText text={listTitle(event)} />
        </span>
        <span className="log-event-meta">
          {you && <strong>{meta[0]}</strong>}
          {you ? ` · ${meta.slice(1).join(' · ')}` : meta.join(' · ')}
        </span>
      </Link>
      {you ? (
        <span className="log-event-mark" aria-label={ACTIVITY_WORDS[you.kind]} role="img">
          {mark}
        </span>
      ) : (
        <button type="button" className="log-event-add" aria-label={`Stub it: ${listTitle(event)}`} onClick={() => setSheet(true)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            <circle cx="12" cy="12" r="9.5" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </button>
      )}
      {sheet && <StubSheet event={event} onClose={() => setSheet(false)} />}
    </div>
  );
}
