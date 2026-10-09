import { lazy, Suspense, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MonthSheet } from '../components/MonthSheet';
import { AccountBlock } from '../components/AccountBlock';
import { SearchIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { showFriction } from '../config/scoreLabels';
import {
  eventMatches,
  favoritesOf,
  followingFeed,
  getAccount,
  getCityDate,
  getEventsBetween,
  getPersonalLog,
  metrosWithEvents,
  nightsOf,
  ratingForEntry,
  nightKey,
  roundEstimate,
  scoresForNights,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  type CityDate,
  type CrowdEvent,
  type FeedItem,
  yourEntries,
} from '../data';
import { VENUES, venueNameOn } from '../data';
import { crowdKind, crowdPoints, showsOnMap } from '../map/crowdPoints';
import { addDays, clockTime, loggedDateLabel, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { datePath, mapPath } from '../lib/view';
import { dayWord } from '../lib/dayWord';
import { FeedRow } from './YouScreen';

// The map library loads only when a map is on screen (Home and Explore), not on every tab.
const MiniMap = lazy(() => import('../map/MiniMap'));

const fmt = (n: number) => n.toLocaleString('en-US');
const ROWS = 3;

/**
 * Home: the digest. Tonight in your city (only when there is one), what's
 * coming, your recent entries, friends' recent entries. Each section shows a
 * few rows and links to its tab. No feed of strangers; nothing ranked by friction.
 */
export function HomeScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const today = todayIn(home);
  const [day, setDay] = useState<CityDate | null>(null);
  const [week, setWeek] = useState<CrowdEvent[]>([]);
  const [everywhere, setEverywhere] = useState<CrowdEvent[]>([]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [monthOpen, setMonthOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let current = true;
    getCityDate(home.id, today).then((next) => current && setDay(next));
    getEventsBetween(home.id, today, addDays(today, 7)).then((list) => current && setWeek(list));
    Promise.all(metrosWithEvents().map((metro) => getEventsBetween(metro.id, today, addDays(today, 30)))).then((lists) => {
      if (current) setEverywhere(lists.flat());
    });
    return () => {
      current = false;
    };
  }, [home.id, today]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setFeed([]);
      return;
    }
    followingFeed(12).then((list) => current && setFeed(list));
    return () => {
      current = false;
    };
  }, [account?.id]);

  // Tonight: the biggest three first (by crowd or seats), then the rest by start time.
  const tonight = useMemo(() => {
    const events = day?.events.filter(showsOnMap) ?? [];
    const size = (e: CrowdEvent) => crowdPoints([e], today)[0]?.count ?? crowdPoints([e], today)[0]?.capacity ?? 0;
    const bySize = [...events].sort((a, b) => size(b) - size(a));
    const top = bySize.slice(0, ROWS).sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99'));
    const rest = events.filter((e) => !top.includes(e)).sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99'));
    return [...top, ...rest];
  }, [day, today]);
  const points = useMemo(() => (day ? crowdPoints(day.events.filter(showsOnMap), today) : []), [day, today]);
  const weekPoints = useMemo(() => crowdPoints(week.filter((e) => e.date > today && showsOnMap(e)), today), [week, today]);

  // Coming up: dates you're attending, then your favorites' next dates, anywhere.
  const comingUp = useMemo(() => {
    const favorites = favoritesOf(log);
    const sorted = [...everywhere].sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')));
    const attending = log.plans
      .filter((plan) => plan.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((plan) => ({ key: plan.id, title: plan.title, date: plan.date, metroId: plan.metroId, eventId: plan.eventId, venue: plan.venue, start: undefined as string | undefined, attending: true }));
    const seen = new Set(attending.map((row) => row.eventId));
    const theirs = sorted
      .filter((e) => !seen.has(e.id) && favorites.some((fav) => eventMatches(e, fav)))
      .map((e) => ({ key: e.id, title: listTitle(e), date: e.date, metroId: e.metroId, eventId: e.id, venue: venueOf(e), start: e.start ?? undefined, attending: false }));
    return [...attending, ...theirs].slice(0, ROWS);
  }, [log, everywhere, today]);

  const recent = useMemo(() => yourEntries(log).filter((entry) => entry.when.precision === 'day' && entry.when.sort <= today).slice(0, ROWS), [log, today]);


  const feedShown = useMemo(() => feed.slice(0, ROWS), [feed]);

  const thisWeek = useMemo(() => {
    const later = week.filter((e) => e.date > today && showsOnMap(e));
    return later.slice(0, ROWS);
  }, [week, today]);

  // One scores map for every night Home shows, keyed by city and date (nightKey), so no row
  // asks by date alone (the Coming up, This week and Friends rows always showed a dash; C066/5.2).
  const nightsShown = useMemo(() => {
    const nights = [...nightsOf(recent), ...comingUp.map((row) => ({ metroId: row.metroId, date: row.date }))];
    for (const e of thisWeek) nights.push({ metroId: e.metroId, date: e.date });
    for (const g of feedShown) if (g.kind === 'attended') nights.push({ metroId: g.metroId ?? DEFAULT_METRO.id, date: g.date });
    return nights;
  }, [recent, comingUp, thisWeek, feedShown]);
  useEffect(() => {
    let current = true;
    scoresForNights(nightsShown).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [nightsShown]);

  const word = dayWord(day?.events ?? []);
  const rating = day?.rating?.rating ?? null;

  return (
    <div className="screen page home-page">
      <div className="home-top">
        <h1 className="page-title">{home.name}</h1>
        <button type="button" className="round-button" aria-label="Find a date" onClick={() => setMonthOpen(true)}>
          <SearchIcon />
        </button>
      </div>

      {day && tonight.length === 0 && (
        <p className="home-quiet">Nothing big in {home.name} {word === 'day' ? 'today' : 'tonight'}.</p>
      )}

      {day && tonight.length > 0 && (
        <section className="you-block" aria-labelledby="tonight-heading">
          <div className="you-heading-row">
            <h2 id="tonight-heading" className="you-heading">
              {word === 'day' ? 'Today' : 'Tonight'}
            </h2>
            <Link to={mapPath({ metroId: home.id, date: today, today })} className="link-more">
              Map ›
            </Link>
          </div>
          <Link to={mapPath({ metroId: home.id, date: today, today })} className="mini-map" aria-label="Open the map">
            <Suspense fallback={<div className="mini-map-loading" aria-hidden />}>
              <MiniMap metro={home} points={points} />
            </Suspense>
            <span className="mini-map-overlay">
              <ReadTile rating={rating} quiet={day.status === 'quiet'} />
              <span className="mini-map-text">
                <span className="mini-map-title">
                  {shortLocalDate(today)} · {tonight.length} {tonight.length === 1 ? 'event' : 'events'}
                </span>
                {day.rating?.headline && <span className="mini-map-sub">{day.rating.headline}</span>}
              </span>
            </span>
          </Link>
          <ul className="log-list tonight-list">
            {tonight.map((e) => (
              <li key={e.id}>
                <Link to={datePath(e.date, e.metroId, e.id)} className="log-row tl-row-link">
                  <span className="tl-time">{e.start ? clockTime(e.start) : '—'}</span>
                  <span className="log-main">
                    <span className="log-title">{listTitle(e)}</span>
                    <span className="log-facts">{[venueOf(e), crowdLine(e)].filter(Boolean).join(' · ')}</span>
                  </span>
                  {e.assessment && showFriction(e.assessment.friction) && (
                    <span className={`chip chip-f ${e.assessment.friction.toLowerCase()}`}>{e.assessment.friction}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AccountBlock />

      {comingUp.length > 0 && (
        <section className="you-block" aria-labelledby="coming-heading">
          <div className="you-heading-row">
            <h2 id="coming-heading" className="you-heading">
              Coming up
            </h2>
            <Link to="/favorites" className="link-more">
              Favorites ›
            </Link>
          </div>
          {weekPoints.length > 0 && (
            <Link to={mapPath({ metroId: home.id, date: today, today })} className="mini-map" aria-label="Open the map">
              <Suspense fallback={<div className="mini-map-loading" aria-hidden />}>
                <MiniMap metro={home} points={weekPoints} />
              </Suspense>
              <span className="mini-map-overlay">
                <span className="mini-map-text">
                  <span className="mini-map-title">This week · {weekPoints.length} {weekPoints.length === 1 ? 'event' : 'events'}</span>
                  <span className="mini-map-sub">{home.name}</span>
                </span>
              </span>
            </Link>
          )}
          <ul className="log-list">
            {comingUp.map((row) => (
              <li key={row.key}>
                <Link to={datePath(row.date, row.metroId, row.eventId)} className="log-row">
                  <ReadTile rating={ratings.get(nightKey(row.metroId, row.date)) ?? null} />
                  <span className="log-main">
                    <span className="log-title">{row.title}</span>
                    <span className="log-facts">
                      {[shortLocalDate(row.date), row.start ? clockTime(row.start) : null, row.venue, row.metroId !== home.id ? METROS[row.metroId]?.name : null]
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  </span>
                  {row.attending && <span className="chip chip-you">Attending</span>}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!account && thisWeek.length > 0 && (
        <section className="you-block" aria-labelledby="week-heading">
          <div className="you-heading-row">
            <h2 id="week-heading" className="you-heading">
              This week
            </h2>
            <Link to={mapPath({ metroId: home.id, date: today, today })} className="link-more">
              Map ›
            </Link>
          </div>
          <ul className="log-list">
            {thisWeek.map((e) => (
              <li key={e.id}>
                <Link to={datePath(e.date, e.metroId, e.id)} className="log-row">
                  <ReadTile rating={ratings.get(nightKey(e.metroId, e.date)) ?? null} />
                  <span className="log-main">
                    <span className="log-title">{listTitle(e)}</span>
                    <span className="log-facts">{[shortLocalDate(e.date), e.start ? clockTime(e.start) : null, venueOf(e)].filter(Boolean).join(' · ')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {recent.length > 0 && (
        <section className="you-block" aria-labelledby="recent-heading">
          <div className="you-heading-row">
            <h2 id="recent-heading" className="you-heading">
              Recent
            </h2>
            <Link to="/you" className="link-more">
              You ›
            </Link>
          </div>
          <ul className="log-list">
            {recent.map((entry) => (
              <li key={entry.id}>
                <Link to={datePath(entry.when.sort, entry.metroId ?? DEFAULT_METRO.id, entry.eventId)} className="log-row">
                  <ReadTile rating={ratingForEntry(entry, ratings)} />
                  <span className="log-main">
                    <span className="log-title">{entry.title}</span>
                    <span className="log-facts">{[loggedDateLabel(entry.when), entry.venue].filter(Boolean).join(' · ')}</span>
                    {entry.result && <span className="log-facts">{entry.result}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {feedShown.length > 0 && (
        <section className="you-block" aria-labelledby="following-heading">
          <div className="you-heading-row">
            <h2 id="following-heading" className="you-heading">
              Following
            </h2>
            <Link to="/you?tab=following" className="link-more">
              All ›
            </Link>
          </div>
          <ul className="log-list">
            {feedShown.map((item) => (
              <FeedRow key={`${item.friend.id}-${item.kind}-${item.date}-${item.title}`} item={item} ratings={ratings} />
            ))}
          </ul>
        </section>
      )}
      {monthOpen && (
        <MonthSheet
          metro={home}
          today={today}
          focus={null}
          onClose={() => setMonthOpen(false)}
          onPick={(picked) => {
            setMonthOpen(false);
            navigate(datePath(picked, home.id));
          }}
        />
      )}
    </div>
  );
}


function venueOf(e: CrowdEvent): string | undefined {
  if (e.place.type === 'venue') {
    const venue = VENUES[e.place.venueId];
    return venue ? venueNameOn(venue, e.date) : undefined;
  }
  return e.place.name;
}

function crowdLine(e: CrowdEvent): string | null {
  const counted = e.crowd.find((c) => c.count !== undefined);
  const sold = e.crowd.some((c) => c.soldOut);
  if (counted?.count !== undefined) return `${fmt(counted.count)} ${crowdKind(e) ?? ''}`.trim() + (sold ? ' · sold out' : '');
  if (sold) return 'sold out';
  if (e.expectedDraw) return `~${fmt(roundEstimate(e.expectedDraw.count))} estimated`;
  return null;
}
