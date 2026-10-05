import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, ShareIcon } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { formatScore, scoreBand, scoreLabel, showFriction } from '../config/scoreLabels';
import {
  asMetroDate,
  cityWeather,
  feelsLikeLabel,
  isOpenAir,
  weatherForEvent,
  weatherGlyph,
  friendsEntries,
  getAccount,
  getCityDate,
  getPersonalLog,
  isPlanned,
  isWasThere,
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
import { listTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { APP } from '../config/app';

const fmt = (n: number) => n.toLocaleString('en-US');

/**
 * "day" when everything that date starts before 5 pm, otherwise "night"
 * (Kylie, Oct 5). The unit is still called a night everywhere else.
 */
export function dayWord(events: readonly CrowdEvent[]): 'day' | 'night' {
  const starts = events.map((e) => e.start).filter((s): s is string => Boolean(s));
  if (starts.length === 0) return 'night';
  return starts.every((s) => s < '17:00') ? 'day' : 'night';
}

/**
 * One page per night: a date in a city with one read. Your entry (or plan)
 * sits under the read; then every event that date as a timeline; then friends
 * who were there. The event page is one tap deeper for an event's own detail.
 */
export function DateScreen() {
  const { date = '' } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const metroId = params.get('metro') ?? DEFAULT_METRO.id;
  const metro = METROS[metroId] ?? DEFAULT_METRO;
  const highlight = params.get('event');
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [day, setDay] = useState<CityDate | null>(null);
  const [friends, setFriends] = useState<FriendEntry[]>([]);
  const [choosing, setChoosing] = useState(false);
  const [shareNote, setShareNote] = useState('');

  useEffect(() => {
    let current = true;
    setDay(null);
    getCityDate(metro.id, date).then((next) => current && setDay(next));
    return () => {
      current = false;
    };
  }, [metro.id, date]);

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
  const ahead = date > today;
  const events = useMemo(() => (day ? [...day.events].sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99')) : []), [day]);
  const word = dayWord(events);
  const mine = useMemo(
    () => yourEntries(log).filter((n) => n.when.sort === date && n.when.precision === 'day' && (n.metroId ?? DEFAULT_METRO.id) === metro.id),
    [log, date, metro.id],
  );
  const plans = useMemo(() => log.plans.filter((p) => p.date === date && p.metroId === metro.id), [log, date, metro.id]);
  const rating = day?.rating ?? null;
  const locksAt = useMemo(() => stampLocksAt(asMetroDate(metro.id, date, events), metro.timeZone), [metro, date, events]);
  const cityRow = cityWeather(metro.id, date, events);

  // The event the gold button acts on: the highlighted one, or the only one.
  const target = events.find((e) => e.id === highlight) ?? (events.length === 1 ? events[0] : undefined);
  const attended = (e: CrowdEvent) => isWasThere(e.id, log);
  const attending = (e: CrowdEvent) => isPlanned(e.id, log);

  const mark = (e: CrowdEvent) => {
    if (ahead) togglePlan(e);
    else toggleWasThere(e);
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

  if (!day) return <div className="screen page" />;

  const readKind = rating ? (ahead ? 'Forecast' : 'Stamped') : null;

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
              <span className="read-meta">
                {rating.method === 'hand' ? 'Hand-rated' : 'Formula'}
                {ahead && locksAt ? ` · locks ${locksAt.toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit', timeZone: metro.timeZone })}` : ''}
                {!ahead && rating.sources?.length ? ` · ${rating.sources.length} ${rating.sources.length === 1 ? 'source' : 'sources'}` : ''}
              </span>
            </span>
          </>
        ) : (
          <>
            <span className="read-big quiet">
              <span className="read-num">—</span>
            </span>
            <span className="read-why">
              <span className="read-lab">{ahead ? 'Forecast' : 'No read yet'}</span>
              <span className="read-txt">
                {events.length === 0 ? `Nothing big on file in ${metro.name}.` : ahead ? 'The forecast arrives with the formula.' : 'This date has no rating yet.'}
              </span>
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
                  {entry.note && <span className="entry-note">{entry.note}</span>}
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

      <section className="you-block" aria-labelledby="that-date">
        <h2 id="that-date" className="you-heading">
          That {word} in {metro.name}
        </h2>
        {events.length === 0 ? (
          <div className="card empty-card">
            <div className="card-title">Nothing big on file.</div>
          </div>
        ) : (
          <ul className="log-list timeline-list">
            {events.map((e) => {
              const yours = attended(e) || attending(e);
              const a = e.assessment;
              return (
                <li key={e.id} className={`tl-row${yours || e.id === highlight ? ' yours' : ''}`}>
                  <Link to={eventPath(e.id, e.metroId)} className="tl-main">
                    <span className="tl-time">{e.start ? clockTime(e.start) : '—'}</span>
                    <span className="log-main">
                      <span className="log-title">{listTitle(e)}</span>
                      <span className="log-facts">
                        {[venueOf(e), crowdLine(e)].filter(Boolean).join(' · ')}
                        <VenueWeather event={e} />
                      </span>
                    </span>
                  </Link>
                  {choosing ? (
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
  return null;
}
