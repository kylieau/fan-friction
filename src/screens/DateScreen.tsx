import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, ShareIcon } from '../components/Icons';
import { RemoveConfirm } from '../components/EntryLayer';
import { ReadTile } from '../components/ReadTile';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { formatScore, scoreBand, scoreLabel, showFriction } from '../config/scoreLabels';
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
  friendsEntries,
  getAccount,
  getCityDate,
  getPersonalLog,
  isPlanned,
  isStampLocked,
  isWasThere,
  roundEstimate,
  stampLocksAt,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  togglePlan,
  toggleWasThere,
  yourEntries,
  type CityDate,
  type CrowdEvent,
  type FriendEntry,
} from '../data';
import { crowdKind } from '../map/crowdPoints';
import { VENUES, venueNameOn } from '../data';
import { clockTime, longLocalDate, weekdayLong } from '../lib/dates';
import { dayWord } from '../lib/dayWord';
import { listTitle } from '../lib/eventTitle';
import { getHomeId } from '../lib/homeCity';
import { quietStakes } from '../lib/stakes';
import { comparePath, eventPath } from '../lib/view';
import { APP } from '../config/app';

const fmt = (n: number) => n.toLocaleString('en-US');


/**
 * One page per night: a date in a city with one read. Your entry (or plan)
 * sits under the read; then every event that date as a timeline; then friends
 * who were there. The event page is one tap deeper for an event's own detail.
 */
export function DateScreen() {
  const { date = '' } = useParams();
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
  const [friends, setFriends] = useState<FriendEntry[]>([]);
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
    friendsEntries(300).then((list) => {
      if (current) setFriends(list.filter((f) => f.entry.when.sort === date && (f.entry.metroId ?? DEFAULT_METRO.id) === metro.id));
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
  const plans = useMemo(() => log.plans.filter((p) => p.date === date && p.metroId === metro.id), [log, date, metro.id]);
  const rating = day?.rating ?? null;
  const locksAt = useMemo(() => stampLocksAt(asMetroDate(metro.id, date, events), metro.timeZone), [metro, date, events]);
  // The day's feels-like low and high at the city point (Kylie, Oct 6); the hourly number is the fallback for old data.
  const dayRange = cityDayRange(metro.id, date);
  const cityRow = dayRange ? undefined : cityWeather(metro.id, date, events);

  // The event the gold button acts on: the highlighted one, or the only one.
  const target = events.find((e) => e.id === highlight) ?? (events.length === 1 ? events[0] : undefined);
  const attended = (e: CrowdEvent) => isWasThere(e.id, log);
  const attending = (e: CrowdEvent) => isPlanned(e.id, log);

  const mark = (e: CrowdEvent) => {
    if (ahead) togglePlan(e);
    else if (attended(e)) {
      setUnmarking(e.id);
      return;
    } else toggleWasThere(e);
    setChoosing(false);
  };

  const share = async () => {
    const line = rating ? `${scoreLabel(rating.rating)} · ${formatScore(rating.rating)}/10` : '';
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

  // "Forecast" until the stamp locks, 24 hours after the last start; "Stamped" only after (C041).
  const locked = !ahead && isStampLocked(asMetroDate(metro.id, date, events), metro.timeZone);
  const readKind = rating ? (locked ? 'Stamped' : 'Forecast') : null;

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
        {rating ? (
          <>
            <span className={`read-big ${scoreBand(rating.rating)}`}>
              <span className="read-num">{formatScore(rating.rating)}</span>
              <span className="read-word">{scoreLabel(rating.rating)}</span>
            </span>
            <span className="read-why">
              <span className="read-lab">{readKind}</span>
              <span className="read-txt">{rating.headline}</span>
              {rating.detail ? <span className="read-detail">{rating.detail}</span> : null}
              <span className="read-meta">
                {/* No internal terms here (C069): the lock time ahead, the sources count after. */}
                {ahead && locksAt ? `Locks ${locksAt.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', timeZone: metro.timeZone })}` : ''}
                {!ahead && rating.sources?.length ? `${rating.sources.length} ${rating.sources.length === 1 ? 'source' : 'sources'}` : ''}
              </span>
            </span>
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

      {(mine.length > 0 || plans.length > 0) && (
        <section className="you-block" aria-labelledby="your-entry">
          <h2 id="your-entry" className="you-heading">
            {ahead ? 'Attending' : 'Attended'}
          </h2>
          <div className="entry-card">
            {mine.map((entry) => {
              const event = events.find((e) => e.id === entry.eventId);
              return (
                <div key={entry.id} className="entry">
                  <span className="entry-title">{entry.title}</span>
                  <span className="entry-facts">
                    {[entry.venue, event?.start ? clockTime(event.start) : null, event ? crowdLine(event) : null].filter(Boolean).join(' · ')}
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
              const a = e.assessment;
              return (
                <li key={e.id} className={`tl-row${yours || e.id === highlight ? ' yours' : ''}`}>
                  <Link to={eventPath(e.id, e.metroId)} className="tl-main">
                    <span className="tl-time">{e.start ? clockTime(e.start) : 'TBA'}</span>
                    <span className="log-main">
                      <span className="log-title">{listTitle(e)}</span>
                      {quietStakes(e, events) && <span className="event-stakes">{quietStakes(e, events)}</span>}
                      <span className="log-facts">
                        {[venueOf(e), crowdLine(e)].filter(Boolean).join(' · ')}
                        <VenueWeather event={e} />
                      </span>
                    </span>
                  </Link>
                  {choosing && unmarking === e.id ? (
                    <RemoveConfirm
                      compact
                      onKeep={() => setUnmarking(null)}
                      onRemove={() => {
                        setUnmarking(null);
                        toggleWasThere(e);
                        setChoosing(false);
                      }}
                    />
                  ) : choosing ? (
                    <button type="button" className={`fav-toggle${yours ? ' on' : ''}`} onClick={() => mark(e)}>
                      {ahead ? (attending(e) ? 'Attending' : 'Attend') : attended(e) ? 'Attended' : 'Attended?'}
                    </button>
                  ) : yours ? (
                    <span className="chip chip-you">{ahead ? 'Attending' : 'Attended'}</span>
                  ) : a && showFriction(a.friction) ? (
                    <span className={`chip chip-f ${a.friction.toLowerCase()}`}>{a.friction}</span>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}
      </section>
      )}

      {events.length > 0 && (
        <div className="action-row">
          {target ? (
            <button
              type="button"
              className={ahead ? (attending(target) ? 'mark-button on' : 'gold-button') : attended(target) ? 'mark-button on' : 'gold-button'}
              onClick={() => mark(target)}
            >
              {ahead ? (attending(target) ? 'Attending' : 'Attend') : 'Attended'}
            </button>
          ) : (
            <button type="button" className={choosing ? 'mark-button on' : 'gold-button'} onClick={() => setChoosing((c) => !c)}>
              {choosing ? 'Done' : ahead ? 'Attend' : 'Attended'}
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
            Friends there
          </h2>
          <ul className="log-list">
            {friends.map(({ friend, entry }) => (
              <li key={`${friend.id}-${entry.id}`} className="log-row">
                <span className="log-main">
                  <span className="log-friend">{friend.displayName ?? friend.handle ?? 'Someone'}</span>
                  <span className="log-title">{entry.title}</span>
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
function crowdLine(e: CrowdEvent): string | null {
  const counted = e.crowd.find((c) => c.count !== undefined);
  const sold = e.crowd.some((c) => c.soldOut);
  if (counted?.count !== undefined) return `${fmt(counted.count)} ${crowdKind(e) ?? ''}`.trim() + (sold ? ' · sold out' : '');
  if (sold) return 'sold out';
  // An upcoming row shows the estimate the map's rows show (C065); full numbers here, there is room (C073).
  if (e.expectedDraw) return `~${fmt(roundEstimate(e.expectedDraw.count))} estimated`;
  return null;
}
