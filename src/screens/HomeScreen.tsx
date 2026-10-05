import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { AccountBlock } from '../components/AccountBlock';
import { SearchIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { showFriction } from '../config/scoreLabels';
import {
  eventMatches,
  favoritesOf,
  friendsEntries,
  getAccount,
  getCityDate,
  getEventsBetween,
  getPersonalLog,
  getRatedDates,
  metrosWithEvents,
  ratingForEntry,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  yourEntries,
  type CityDate,
  type CrowdEvent,
  type FriendEntry,
} from '../data';
import { VENUES, venueNameOn } from '../data';
import { useContext } from 'react';
import { LngLatBounds } from 'maplibre-gl';
import { BaseMap, MapContext } from '../map/BaseMap';
import type { CrowdPoint } from '../map/crowdPoints';
import { CrowdLayer } from '../map/CrowdLayer';
import { crowdKind, crowdPoints, showsOnMap } from '../map/crowdPoints';
import { addDays, clockTime, loggedDateLabel, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { calendarPath, datePath, mapPath } from '../lib/view';
import { dayWord } from './DateScreen';

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
  const [friends, setFriends] = useState<FriendEntry[]>([]);

  useEffect(() => {
    let current = true;
    getCityDate(home.id, today).then((next) => current && setDay(next));
    getEventsBetween(home.id, today, addDays(today, 7)).then((list) => current && setWeek(list));
    Promise.all(metrosWithEvents().map((metro) => getEventsBetween(metro.id, today, addDays(today, 30)))).then((lists) => {
      if (current) setEverywhere(lists.flat());
    });
    getRatedDates(home.id).then((rows) => {
      if (current) setRatings(new Map(rows.map((row) => [row.date, row.rating])));
    });
    return () => {
      current = false;
    };
  }, [home.id, today]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setFriends([]);
      return;
    }
    friendsEntries(30).then((list) => current && setFriends(list));
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

  // Friends, grouped by event: "Sam R. and Priya · Slayer".
  const friendGroups = useMemo(() => {
    const groups = new Map<string, { title: string; date: string; venue?: string; metroId?: string; eventId?: string; names: string[] }>();
    for (const { friend, entry } of friends) {
      const key = entry.eventId ?? `${entry.when.sort}-${entry.title}`;
      const name = friend.displayName ?? friend.handle ?? 'Someone';
      const group = groups.get(key);
      if (group) {
        if (!group.names.includes(name)) group.names.push(name);
      } else {
        groups.set(key, { title: entry.title, date: entry.when.sort, venue: entry.venue, metroId: entry.metroId, eventId: entry.eventId, names: [name] });
      }
    }
    return [...groups.values()].sort((a, b) => b.date.localeCompare(a.date)).slice(0, ROWS);
  }, [friends]);

  const thisWeek = useMemo(() => {
    const later = week.filter((e) => e.date > today && showsOnMap(e));
    return later.slice(0, ROWS);
  }, [week, today]);

  const word = dayWord(day?.events ?? []);
  const rating = day?.rating?.rating ?? null;

  return (
    <div className="screen page home-page">
      <div className="home-top">
        <h1 className="page-title">{home.name}</h1>
        <Link to={calendarPath({ metroId: home.id, date: today })} className="round-button" aria-label="Search">
          <SearchIcon />
        </Link>
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
            <Link to={mapPath({ metroId: home.id, date: today, today, when: 'day' })} className="link-more">
              Map ›
            </Link>
          </div>
          <Link to={mapPath({ metroId: home.id, date: today, today, when: 'day' })} className="mini-map" aria-label="Open the map">
            <BaseMap metro={home} interactive={false}>
              <CrowdLayer points={points} selectedId={null} onSelect={() => {}} />
              <MiniCamera points={points} />
            </BaseMap>
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
            <Link to={mapPath({ metroId: home.id, date: today, today, when: 'week' })} className="mini-map" aria-label="Open the map for the next 7 days">
              <BaseMap metro={home} interactive={false}>
                <CrowdLayer points={weekPoints} selectedId={null} onSelect={() => {}} />
                <MiniCamera points={weekPoints} />
              </BaseMap>
              <span className="mini-map-overlay">
                <span className="mini-map-text">
                  <span className="mini-map-title">Next 7 days · {weekPoints.length} {weekPoints.length === 1 ? 'event' : 'events'}</span>
                  <span className="mini-map-sub">{home.name}</span>
                </span>
              </span>
            </Link>
          )}
          <ul className="log-list">
            {comingUp.map((row) => (
              <li key={row.key}>
                <Link to={datePath(row.date, row.metroId, row.eventId)} className="log-row">
                  <ReadTile rating={ratings.get(row.date) ?? null} />
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
            <Link to={mapPath({ metroId: home.id, date: today, today, when: 'week' })} className="link-more">
              Map ›
            </Link>
          </div>
          <ul className="log-list">
            {thisWeek.map((e) => (
              <li key={e.id}>
                <Link to={datePath(e.date, e.metroId, e.id)} className="log-row">
                  <ReadTile rating={ratings.get(e.date) ?? null} />
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

      {friendGroups.length > 0 && (
        <section className="you-block" aria-labelledby="friends-heading">
          <div className="you-heading-row">
            <h2 id="friends-heading" className="you-heading">
              Friends
            </h2>
            <Link to="/you" className="link-more">
              All ›
            </Link>
          </div>
          <ul className="log-list">
            {friendGroups.map((group) => (
              <li key={`${group.date}-${group.title}`}>
                <Link to={datePath(group.date, group.metroId ?? DEFAULT_METRO.id, group.eventId)} className="log-row">
                  <ReadTile rating={ratings.get(group.date) ?? null} />
                  <span className="log-main">
                    <span className="log-friend">{joinNames(group.names)}</span>
                    <span className="log-title">{group.title}</span>
                    <span className="log-facts">{[shortLocalDate(group.date), group.venue].filter(Boolean).join(' · ')}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

/** Frames tonight's venues in the small map. No sheet or header to keep clear of. */
function MiniCamera({ points }: { points: CrowdPoint[] }) {
  const map = useContext(MapContext);
  const key = points.map((p) => p.event.id).join('|');
  useEffect(() => {
    if (!map || points.length === 0) return;
    const bounds = new LngLatBounds();
    for (const p of points) bounds.extend(p.location);
    map.fitBounds(bounds, { padding: { top: 28, bottom: 56, left: 36, right: 36 }, maxZoom: 11, duration: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, key]);
  return null;
}

function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? '';
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
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
  return null;
}
