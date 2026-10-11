import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, ShareIcon, TvIcon } from '../components/Icons';
import { RemoveConfirm } from '../components/EntryLayer';
import { ReadTile } from '../components/ReadTile';
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
  isPlanned,
  plannedKind,
  firmPlan,
  isStampLocked,
  isWasThere,
  isWatched,
  drawSize,
  sizeTier,
  savedNightRead,
  scheduleCoverage,
  stampLocksAt,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  togglePlan,
  toggleWasThere,
  yourEntries,
  type CityDate,
  type CrowdEvent,
  type FeedItem,
} from '../data';
import { VENUES, venueNameOn } from '../data';
import { clockTime, longLocalDate, shortLocalDate, weekdayLong } from '../lib/dates';
import { dayWord } from '../lib/dayWord';
import { listTitle } from '../lib/eventTitle';
import { getHomeId } from '../lib/homeCity';
import { quietStakes } from '../lib/stakes';
import { CrowdFigure, EventTags } from '../components/EventTags';
import { feedLine } from './YouScreen';
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
  const [choosing, setChoosing] = useState(false);
  // The event whose Attended is being un-tapped: one confirm before it leaves the log (C054).
  const [unmarking, setUnmarking] = useState<string | null>(null);
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
    // The same feed rules as Following (3.24): attended only once the date has passed, plans ahead.
    followingFeed(300).then((list) => {
      if (current) setFriends(list.filter((f) => !f.interested && f.date === date && (f.metroId ?? DEFAULT_METRO.id) === metro.id));
    });
    return () => {
      current = false;
    };
  }, [account?.id, date, metro.id]);

  const today = todayIn(metro);
  // Today counts as ahead: an Attend today is a plan, and becomes Attended once the date passes (C039).
  const ahead = date >= today;
  const events = useMemo(() => (day ? [...day.events].sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99')) : []), [day]);
  const word = dayWord(events);
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

  // The event the gold button acts on: the highlighted one, or the only one.
  const target = events.find((e) => e.id === highlight) ?? (events.length === 1 ? events[0] : undefined);
  const attended = (e: CrowdEvent) => isWasThere(e.id, log);
  const attending = (e: CrowdEvent) => isPlanned(e.id, log);
  // Before the event the row reads Watching or Attending by which question was answered (Kylie, Oct 11).
  const aheadWord = (e: CrowdEvent) => (plannedKind(e.id, log) === 'watch' ? 'Watching' : 'Attending');

  const mark = (e: CrowdEvent) => {
    if (ahead) togglePlan(e, plannedKind(e.id, log) === 'watch' ? 'watch' : 'attend');
    else if (attended(e)) {
      setUnmarking(e.id);
      return;
    } else toggleWasThere(e);
    setChoosing(false);
  };

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
          That {word} in {metro.name}
        </h2>
        {(
          <ul className="log-list timeline-list">
            {events.map((e) => {
              const yours = attended(e) || attending(e);
              return (
                <li key={e.id} className={`tl-row${yours || e.id === highlight ? ' yours' : ''}`}>
                  <Link to={eventPath(e.id, e.metroId)} className="tl-main">
                    <span className="log-main">
                      <span className="log-title">{listTitle(e)}</span>
                      <span className="event-tagline">
                        <EventTags event={e} />
                        <span className="event-venue">{[venueOf(e), yours ? (ahead ? aheadWord(e) : isWatched(e.id, log) ? 'Watched' : 'Attended') : null].filter(Boolean).join(' · ')}</span>
                      </span>
                      {quietStakes(e, events) && <span className="event-stakes">{quietStakes(e, events)}</span>}
                      <span className="log-facts">
                        <VenueWeather event={e} />
                      </span>
                    </span>
                    <span className="event-side">
                      <CrowdFigure event={e} />
                      <span className="event-meta">{e.start ? clockTime(e.start) : 'TBA'}</span>
                    </span>
                  </Link>
                  {choosing && unmarking === e.id ? (
                    <RemoveConfirm
                      compact
                      stamped={Boolean(log.added.find((entry) => entry.eventId === e.id)?.stamp)}
                      onKeep={() => setUnmarking(null)}
                      onRemove={() => {
                        setUnmarking(null);
                        toggleWasThere(e);
                        setChoosing(false);
                      }}
                    />
                  ) : choosing ? (
                    <button type="button" className={`fav-toggle${yours ? ' on' : ''}`} onClick={() => mark(e)}>
                      {ahead ? (attending(e) ? aheadWord(e) : 'Attending?') : attended(e) ? 'Attended' : 'Attended?'}
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </section>
      )}

      {events.length > 0 && rating && shownRating !== null && (
        <section className="card local-competition" aria-label="Local competition">
          {/* Local competition (Kylie, Oct 11, call 6; mock call6-overlap D on top, B/C timeline): the read, the summary line, the night's bars. No helper text. */}
          <h2 className="you-heading">Local competition</h2>
          <div className="local-head">
            <ReadTile rating={shownRating} />
            <span className="local-summary">{summaryLine(shownRating, events)}</span>
          </div>
          <DayTimeline events={events} />
        </section>
      )}

      {events.length > 0 && (
        <div className="action-row">
          {target ? (
            <>
              <button
                type="button"
                className={ahead ? (attending(target) ? `mark-button on${plannedKind(target.id, log) === 'watch' ? ' watched-on' : ''}` : 'gold-button') : attended(target) ? 'mark-button on' : 'gold-button'}
                onClick={() => mark(target)}
              >
                {ahead ? (attending(target) ? aheadWord(target) : 'Attending?') : 'Attended'}
              </button>
              {ahead && !attending(target) && (
                <button type="button" className="link-button watched-action" onClick={() => togglePlan(target, 'watch')}>
                  <TvIcon /> Watching?
                </button>
              )}
            </>
          ) : (
            <button type="button" className={choosing ? 'mark-button on' : 'gold-button'} onClick={() => setChoosing((c) => !c)}>
              {choosing ? 'Done' : ahead ? 'Attending?' : 'Attended'}
            </button>
          )}
          <button type="button" className="round-button share-button" aria-label={`Share this ${word}`} onClick={share}>
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
          <ul className="log-list">
            {friends.map((item) => (
              <li key={`${item.friend.id}-${item.kind}-${item.title}`} className="log-row">
                <span className="log-main">
                  <span className="log-friend">{feedLine(item)}</span>
                  <span className="log-title">{item.title}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {shareNote && (
        <p className="you-fine" role="status">
          {shareNote}
        </p>
      )}
    </div>
  );
}

/** The venue's feels-like, inline, open-air venues only. */
function VenueWeather({ event }: { event: CrowdEvent }) {
  if (!isOpenAir(event)) return null;
  const row = weatherForEvent(event);
  if (!row) return null;
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

/** "4.7 Spicy · 54k across 6 events · 4 start at 7:00 pm" (Kylie, Oct 11, call 6; the clock in the app's one form). */
function summaryLine(rating: number, events: readonly CrowdEvent[]): string {
  const big = events.filter((e) => sizeTier(e) === 'feeds-friction');
  const total = big.reduce((sum, e) => sum + (drawSize(e) ?? 0), 0);
  const starts = new Map<string, number>();
  for (const e of big) if (e.start) starts.set(e.start, (starts.get(e.start) ?? 0) + 1);
  const top = [...starts.entries()].sort((a, b) => b[1] - a[1])[0];
  return [
    `${formatScore(rating)} ${scoreLabel(rating)}`,
    `${total > 0 ? `${crowdThousands(total)} across ` : ''}${events.length} ${events.length === 1 ? 'event' : 'events'}`,
    top && top[1] > 1 ? `${top[1]} start at ${clockTime(top[0])}` : null,
  ]
    .filter(Boolean)
    .join(' · ');
}
