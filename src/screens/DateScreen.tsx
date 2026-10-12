import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, ShareIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { StubSheet } from '../components/StubSheet';
import { ActivityLines } from '../components/ActivityLines';
import { activityGroups, activityLine, yourActivity, ACTIVITY_WORDS } from '../lib/activity';
import { DayTimeline } from '../components/DayTimeline';
import { crowdThousands } from '../map/crowdPoints';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { formatScore, scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  asMetroDate,
  cityWeather,
  cityDayRange,
  rangeLabel,
  rangeSpoken,
  feelsLikeLabel,
  isOpenAir,
  weatherForEvent,
  weatherGlyph,
  followingFeed,
  getAccount,
  getCityDate,
  getPersonalLog,
  firmPlan,
  isStampLocked,
  drawSize,
  sizeTier,
  savedNightRead,
  scheduleCoverage,
  stampLocksAt,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  yourEntries,
  type CityDate,
  type CrowdEvent,
  type FeedItem,
} from '../data';
import { VENUES, venueNameOn } from '../data';
import { clockTime, longLocalDate, shortLocalDate, weekdayLong } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { getHomeId } from '../lib/homeCity';
import { quietStakes } from '../lib/stakes';
import { CrowdFigure, CrowdMark, EventTags } from '../components/EventTags';
import { comparePath, eventPath } from '../lib/view';
import { APP } from '../config/app';



/**
 * One page per night: a date in a city with one read. Your entry (or plan)
 * sits under the read; then every event that date as a timeline; then friends
 * who were there. The event page is one tap deeper for an event's own detail.
 */
export function DateScreen() {
  const { date = '' } = useParams();
  const [about, setAbout] = useState(false);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const highlight = params.get('event');
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  // The city: the link's, else the city of a plan or entry on this date, else home, else the default (C045).
  const metroId =
    params.get('metro') ??
    log.plans.find((p) => p.date === date)?.metroId ??
    log.added.find((n) => n.when.sort === date && n.when.precision === 'day')?.metroId ??
    getHomeId() ??
    DEFAULT_METRO.id;
  const metro = METROS[metroId] ?? DEFAULT_METRO;
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [day, setDay] = useState<CityDate | null>(null);
  const [friends, setFriends] = useState<FeedItem[]>([]);
  // The event whose "+ Stub it" sheet is open (Kylie's answer, build notes 3, 8.1, item 13).
  const [stubbing, setStubbing] = useState<CrowdEvent | null>(null);
  const [shareNote, setShareNote] = useState('');

  const [tries, setTries] = useState(0);
  const [loadFailed, setLoadFailed] = useState(false);
  useEffect(() => {
    let current = true;
    setDay(null);
    setLoadFailed(false);
    getCityDate(metro.id, date)
      .then((next) => current && setDay(next))
      .catch(() => current && setLoadFailed(true));
    return () => {
      current = false;
    };
  }, [metro.id, date, tries]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setFriends([]);
      return;
    }
    // The same feed rules as Following (3.24): attended only once the date has passed, plans ahead. Interested too (8.1, item 11).
    followingFeed(300).then((list) => {
      if (current) setFriends(list.filter((f) => f.date === date && (f.metroId ?? DEFAULT_METRO.id) === metro.id));
    });
    return () => {
      current = false;
    };
  }, [account?.id, date, metro.id]);

  const today = todayIn(metro);
  // Today counts as ahead: an Attend today is a plan, and becomes Attended once the date passes (C039).
  const ahead = date >= today;
  // By crowd (build notes 3, 4.3): the rows explain the score; Explore is the one by time.
  const events = useMemo(() => (day ? [...day.events].sort((a, b) => (drawSize(b) ?? 0) - (drawSize(a) ?? 0) || (a.start ?? '99').localeCompare(b.start ?? '99')) : []), [day]);
  const mine = useMemo(
    () => yourEntries(log).filter((n) => n.when.sort === date && n.when.precision === 'day' && (n.metroId ?? DEFAULT_METRO.id) === metro.id),
    [log, date, metro.id],
  );
  const plans = useMemo(() => log.plans.filter((p) => firmPlan(p) && p.date === date && p.metroId === metro.id), [log, date, metro.id]);
  const rating = day?.rating ?? null;
  const locksAt = useMemo(() => stampLocksAt(asMetroDate(metro.id, date, events), metro.timeZone), [metro, date, events]);
  // The day's feels-like low and high at the city point (Kylie, Oct 6); the hourly number is the fallback for old data.
  const dayRange = cityDayRange(metro.id, date);
  const cityRow = dayRange ? undefined : cityWeather(metro.id, date, events);

  // The event the share line names: the highlighted one, or the only one.
  const target = events.find((e) => e.id === highlight) ?? (events.length === 1 ? events[0] : undefined);
  // Your answer and the people you follow, per event, for the row's one activity line (build notes 3, 4.2).
  const lineFor = (e: CrowdEvent) => activityLine(activityGroups(friends.filter((f) => f.eventId === e.id), yourActivity(e.id, log)));

  const share = async () => {
    const line = shownRating !== null ? `${scoreLabel(shownRating)} · ${formatScore(shownRating)}/10` : '';
    const title = mine[0]?.title ?? events[0]?.title ?? metro.name;
    const text = `${title}, ${longLocalDate(date)}${line ? ` · ${line}` : ''}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${APP.name}: ${title}`, text, url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      setShareNote('Copied.');
    } catch {
      /* dismissed */
    }
  };

  const back = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/calendar');
  };

  if (loadFailed) {
    return (
      <div className="screen page">
        <button type="button" className="back-link" onClick={back}>
          <ChevronDown /> Back
        </button>
        <div className="card empty-card">
          <div className="card-title">Couldn't load this date.</div>
          <button type="button" className="link-button" onClick={() => setTries((n) => n + 1)}>
            Try again
          </button>
        </div>
      </div>
    );
  }
  if (!day) {
    return (
      <div className="screen page">
        <button type="button" className="back-link" onClick={back}>
          <ChevronDown /> Back
        </button>
        <p className="you-fine" role="status">
          Loading…
        </p>
      </div>
    );
  }

  // "Forecast" until the stamp locks, 24 hours after the last start. A settled read carries no label
  // (build notes 2, section 1): how it settled, and any revision, sits behind the (i).
  const locked = !ahead && isStampLocked(asMetroDate(metro.id, date, events), metro.timeZone);
  const readKind = rating && !locked ? 'Forecast' : null;
  // A settled night shows the read as it was saved, never today's recomputation (3.15).
  const saved = locked ? savedNightRead(metro.id, date, events) : null;
  const shownRating = saved?.rating ?? rating?.rating ?? null;
  // A night from before the schedule archive began keeps one quiet line.
  const rebuilt = locked && scheduleCoverage(metro.id, date) === 'reconstructed';

  return (
    <div className="screen page date-page">
      <button type="button" className="back-link" onClick={back}>
        <ChevronDown /> Back
      </button>

      <header className="date-head">
        <span className="date-kicker">{weekdayLong(date)}</span>
        <h1 className="date-title">{longLocalDate(date).replace(/^[A-Za-z]+, /, '')}</h1>
        <span className="date-city">
          {metro.name}
          {dayRange && (
            <>
              {' · '}
              <span className="weather-glyph" aria-hidden>
                {weatherGlyph(dayRange)}
              </span>{' '}
              <span aria-label={rangeSpoken(dayRange, metro.id)} title="Feels-like, not air temp">{rangeLabel(dayRange, metro.id)}</span>
            </>
          )}
          {cityRow && (
            <>
              {' · '}
              <span className="weather-glyph" aria-hidden>
                {weatherGlyph(cityRow)}
              </span>{' '}
              {feelsLikeLabel(cityRow, metro.id)}
            </>
          )}
        </span>
      </header>

      <section className={`read-tile${rating ? '' : ' none'}`} aria-label="The read">
        {rating && shownRating !== null ? (
          <>
            <span className={`read-big ${scoreBand(shownRating)}`}>
              <span className="read-num">{formatScore(shownRating)}</span>
              <span className="read-word">{scoreLabel(shownRating)}</span>
            </span>
            <span className="read-why">
              {readKind && <span className="read-lab">{readKind}</span>}
              <span className="read-txt">{rating.headline}</span>
              {rating.detail ? <span className="read-detail">{rating.detail}</span> : null}
              <span className="read-meta">
                {/* No internal terms here (C069): the lock time ahead, the sources count after. */}
                {ahead && locksAt ? `Locks ${locksAt.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', timeZone: metro.timeZone })}` : ''}
                {rebuilt ? 'Rebuilt from past schedules.' : !ahead && rating.sources?.length ? `${rating.sources.length} ${rating.sources.length === 1 ? 'source' : 'sources'}` : ''}
              </span>
            </span>
            {locked && (
              <button type="button" className="read-info" aria-label="About this read" onClick={() => setAbout(true)}>
                i
              </button>
            )}
          </>
        ) : (
          <>
            <ReadTile rating={null} size="big" empty={day.empty} />
            <span className="read-why">
              {day.empty ? (
                <span className="read-txt">
                  {day.empty === 'quiet'
                    ? `Nothing big in ${metro.name}.`
                    : day.emptyWhy === 'partial'
                      ? 'Events have not all been collected for this date.'
                      : day.emptyWhy === 'failed'
                        ? "Couldn't load this date."
                        : 'Events have not been collected for this date.'}
                </span>
              ) : (
                <>
                  <span className="read-lab">{ahead ? 'Forecast' : 'No read yet'}</span>
                  <span className="read-txt">{ahead ? 'The forecast arrives with the formula.' : 'This date has no rating yet.'}</span>
                </>
              )}
              {day.emptyWhy === 'failed' && (
                <button type="button" className="link-button" onClick={() => setTries((n) => n + 1)}>
                  Try again
                </button>
              )}
            </span>
          </>
        )}
      </section>
      {about && <AboutRead saved={saved ?? {}} onClose={() => setAbout(false)} />}

      {(mine.length > 0 || plans.length > 0) && (
        <section className="you-block" aria-labelledby="your-entry">
          <h2 id="your-entry" className="you-heading">
            {ahead ? (plans.length > 0 && plans.every((p) => p.watch) ? 'Watching' : 'Attending') : 'Attended'}
          </h2>
          <div className="entry-card">
            {mine.map((entry) => {
              const event = events.find((e) => e.id === entry.eventId);
              return (
                <div key={entry.id} className="entry">
                  <span className="entry-title">{entry.title}</span>
                  <span className="entry-facts">
                    {[entry.venue, event?.start ? clockTime(event.start) : null].filter(Boolean).join(' · ')}
                    {event && (
                      <>
                        {' · '}
                        <CrowdFigure event={event} />
                      </>
                    )}
                  </span>
                  {entry.review && <span className="entry-note">{entry.review}</span>}
                </div>
              );
            })}
            {plans.map((plan) => (
              <div key={plan.id} className="entry">
                <span className="entry-title">{plan.title}</span>
                <span className="entry-facts">{plan.venue ?? ''}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {events.length > 0 && (
      <section className="you-block" aria-labelledby="that-date">
        <h2 id="that-date" className="you-heading">
          This day in {metro.name}
        </h2>
        {/* Rows (build notes 3, 4.3; mock 3-date-page): title, crowd and tags, one activity line; the time over the venue
            on the right; a small "+ Stub it" on each row opens the one sheet (8.1, item 13). */}
        <ul className="date-list">
          {events.map((e) => {
            const you = yourActivity(e.id, log);
            const line = lineFor(e);
            return (
              <li key={e.id} className={`date-row${you || e.id === highlight ? ' yours' : ''}`}>
                <Link to={eventPath(e.id, e.metroId)} className="date-row-main">
                  <span className="date-row-title">{listTitle(e)}</span>
                  <span className="date-row-line">
                    <CrowdFigure event={e} />
                    <EventTags event={e} />
                  </span>
                  {quietStakes(e, events) && <span className="event-stakes">{quietStakes(e, events)}</span>}
                  {line && <span className="day-row-activity">{line}</span>}
                  <VenueWeather event={e} bare />
                </Link>
                <span className="date-row-side">
                  <span className="date-row-time">{e.start ? clockTime(e.start) : 'TBA'}</span>
                  {venueOf(e) && <span className="date-row-venue">{venueOf(e)}</span>}
                  <button type="button" className={`stub-mini${you ? ' on' : ''}`} onClick={() => setStubbing(e)}>
                    {you ? ACTIVITY_WORDS[you.kind] : '+ Stub it'}
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </section>
      )}

      {events.length > 0 && rating && shownRating !== null && (
        <section className="card local-competition" aria-label="Local competition">
          {/* Local competition (Kylie, Oct 11, call 6; mock call6-overlap D on top, B/C timeline): the read, the summary line, the night's bars. No helper text. */}
          <h2 className="you-heading">Local competition</h2>
          <div className="local-head">
            <ReadTile rating={shownRating} />
            <span className="local-summary">
              {/* The crowd icon sits beside the crowd total (build notes 3, D09). */}
              {formatScore(shownRating)} {scoreLabel(shownRating)}
              {summaryTotal(events) > 0 && (
                <>
                  {' · '}
                  <CrowdMark />
                  {crowdThousands(summaryTotal(events))} across
                </>
              )}
              {summaryTotal(events) > 0 ? ' ' : ' · '}
              {events.length} {events.length === 1 ? 'event' : 'events'}
              {summaryStart(events) ? ` · ${summaryStart(events)}` : ''}
            </span>
          </div>
          <DayTimeline events={events} />
        </section>
      )}

      {events.length > 0 && (
        <div className="action-row">
          <button type="button" className="round-button share-button" aria-label="Share this date" onClick={share}>
            <ShareIcon />
          </button>
        </div>
      )}
      {!ahead && rating && (
        <Link to={comparePath({ metroId: metro.id, date, eventId: target?.id })} className="text-link compare-link">
          Compare with…
        </Link>
      )}

      {friends.length > 0 && (
        <section className="you-block" aria-labelledby="friends-date">
          <h2 id="friends-date" className="you-heading">
            Following
          </h2>
          {/* Grouped per event like the event page (Kylie, Oct 11; 8.1, items 11 and 12), Interested included. */}
          {groupByEvent(friends).map((group) => (
            <div key={group.key} className="date-friends-group">
              <span className="log-facts date-friends-title">{group.title}</span>
              <ActivityLines groups={activityGroups(group.items, null)} />
            </div>
          ))}
        </section>
      )}
      {stubbing && <StubSheet event={stubbing} onClose={() => setStubbing(null)} />}

      {shareNote && (
        <p className="you-fine" role="status">
          {shareNote}
        </p>
      )}
    </div>
  );
}

/** Friends' answers by event, in the day's order. */
function groupByEvent(items: FeedItem[]): { key: string; title: string; items: FeedItem[] }[] {
  const groups = new Map<string, { key: string; title: string; items: FeedItem[] }>();
  for (const item of items) {
    const key = item.eventId ?? item.title;
    const group = groups.get(key) ?? { key, title: item.title, items: [] };
    group.items.push(item);
    groups.set(key, group);
  }
  return [...groups.values()];
}

/** The venue's feels-like, inline, open-air venues only; `bare` makes it its own small line. */
function VenueWeather({ event, bare = false }: { event: CrowdEvent; bare?: boolean }) {
  if (!isOpenAir(event)) return null;
  const row = weatherForEvent(event);
  if (!row) return null;
  if (bare) {
    return (
      <span className="log-facts">
        <span className="weather-glyph" aria-hidden>
          {weatherGlyph(row)}
        </span>{' '}
        {feelsLikeLabel(row, event.metroId)}
      </span>
    );
  }
  return (
    <>
      {' · '}
      <span className="weather-glyph" aria-hidden>
        {weatherGlyph(row)}
      </span>{' '}
      {feelsLikeLabel(row, event.metroId)}
    </>
  );
}

function venueOf(e: CrowdEvent): string | null {
  if (e.place.type === 'venue') {
    const venue = VENUES[e.place.venueId];
    return venue ? venueNameOn(venue, e.date) : null;
  }
  return e.place.name;
}

/** "52,394 announced · sold out", "sold out", or nothing. Every count keeps its kind. */

/** How a settled read came to be (build notes 2, section 1). Only a redone read adds its second line. */
function AboutRead({ saved, onClose }: { saved: { rescoredOn?: string; previousRating?: number }; onClose: () => void }) {
  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-labelledby="about-read-title" onClick={onClose}>
      <div className="home-card about-read" onClick={(event) => event.stopPropagation()}>
        <div className="about-read-head">
          <h2 id="about-read-title" className="home-title">
            About this read
          </h2>
          <button type="button" className="about-read-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <p className="about-read-line">Settled the day after the games.</p>
        {saved.rescoredOn && (
          <p className="about-read-line">
            Revised {shortLocalDate(saved.rescoredOn)} when we improved the method.{typeof saved.previousRating === 'number' ? ` It was ${formatScore(saved.previousRating)}.` : ''}
          </p>
        )}
      </div>
    </div>
  );
}

/** The crowd over the floor that date, for "54k across 6 events" (Kylie, Oct 11, call 6). */
function summaryTotal(events: readonly CrowdEvent[]): number {
  return events.filter((e) => sizeTier(e) === 'feeds-friction').reduce((sum, e) => sum + (drawSize(e) ?? 0), 0);
}

/** "4 start at 7:00 pm" when several big events share a start (the clock in the app's one form), else null. */
function summaryStart(events: readonly CrowdEvent[]): string | null {
  const starts = new Map<string, number>();
  for (const e of events) if (e.start && sizeTier(e) === 'feeds-friction') starts.set(e.start, (starts.get(e.start) ?? 0) + 1);
  const top = [...starts.entries()].sort((a, b) => b[1] - a[1])[0];
  return top && top[1] > 1 ? `${top[1]} start at ${clockTime(top[0])}` : null;
}
