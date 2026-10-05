import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  eventMatches,
  favoriteFor,
  favoriteKey,
  favoriteMark,
  favoritesOf,
  friendsEntries,
  getAccount,
  getPersonalLog,
  getRatedDates,
  getUpcoming,
  isPlanned,
  kindLabel,
  entryMatches,
  ratingForEntry,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  toggleFavorite,
  togglePlan,
  yourEntries,
  type CrowdEvent,
  type Favorite,
  type FriendEntry,
  type Entry,
} from '../data';
import { clockTime, loggedDateLabel, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { datePath } from '../lib/view';
import { ReadTile as Read } from '../components/ReadTile';
import { HeaviestStat, Stat } from './YouScreen';

/** How many upcoming dates to list on a favorite's page. */
const UPCOMING = 10;

/**
 * One team, artist, venue or festival: your history with it, its upcoming dates
 * read for friction (the old "same homestand" idea), and friends' nights with it.
 * Kylie calls all of these "team pages".
 */
export function FavoritePage() {
  const { kind = 'team', id = '' } = useParams();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const metro = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [upcoming, setUpcoming] = useState<CrowdEvent[]>([]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [friends, setFriends] = useState<FriendEntry[]>([]);

  // The favorite: the saved one, or one built from the address (a page you haven't followed yet).
  const fav: Favorite = useMemo(() => {
    const saved = favorites.find((f) => f.kind === kind && f.id === decodeURIComponent(id));
    if (saved) return saved;
    const label = decodeURIComponent(id).replace(/-/g, ' ');
    const built = favoriteFor(kind as Favorite['kind'], label);
    return built.id === decodeURIComponent(id) ? built : { ...built, id: decodeURIComponent(id) };
  }, [favorites, kind, id]);
  const following = favorites.some((f) => favoriteKey(f) === favoriteKey(fav));

  // A page for a name we only know from the log keeps that name's capitalization.
  const label = useMemo(() => {
    if (fav.teamId || fav.venueId) return fav.label;
    const fromLog = entries.find((entry) => entryMatches(entry, fav));
    if (!fromLog) return fav.label;
    if (fav.kind === 'venue') return fromLog.venue ?? fav.label;
    if (fav.kind === 'festival') return fromLog.title;
    const name = [...fromLog.tags, ...fromLog.sides].find((n) => n.toLowerCase() === fav.label.toLowerCase());
    return name ?? fav.label;
  }, [fav, entries]);

  useEffect(() => {
    let current = true;
    getUpcoming(metro.id, todayIn(metro), 60).then((list) => current && setUpcoming(list.filter((e) => eventMatches(e, fav)).slice(0, UPCOMING)));
    getRatedDates(metro.id).then((rows) => {
      if (current) setRatings(new Map(rows.map((row) => [row.date, row.rating])));
    });
    return () => {
      current = false;
    };
  }, [metro, fav]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setFriends([]);
      return;
    }
    friendsEntries(200).then((list) => current && setFriends(list.filter((item) => entryMatches(item.entry, fav))));
    return () => {
      current = false;
    };
  }, [account?.id, fav]);

  const mine = useMemo(() => entries.filter((entry) => entryMatches(entry, fav)), [entries, fav]);
  const heaviest = mine.reduce<number | null>((best, entry) => {
    const r = ratingForEntry(entry, ratings);
    return r !== null && (best === null || r > best) ? r : best;
  }, null);
  const friendCount = new Set(friends.map((f) => f.friend.id)).size;

  return (
    <div className="screen page">
      <Link to="/favorites" className="back-link">
        <ChevronDown /> Favorites
      </Link>

      <div className="profile-head">
        <span className={`fav-mark fav-big fav-${fav.kind}`} aria-hidden>
          {favoriteMark({ ...fav, label })}
        </span>
        <div className="you-who">
          <h1 className="page-title">{label}</h1>
          <span className="you-handle">{kindLabel(fav.kind)}</span>
        </div>
      </div>

      <div className="stat-grid">
        <Stat n={mine.length} label="Your events" />
        <HeaviestStat rating={heaviest} />
        <Stat n={friendCount} label="Friends went" />
      </div>

      <button
        type="button"
        className={following ? 'mark-button on' : 'gold-button'}
        aria-pressed={following}
        onClick={() => toggleFavorite({ ...fav, label })}
      >
        {following ? 'Following' : 'Follow'}
      </button>

      <section className="you-block" aria-labelledby="fav-upcoming">
        <h2 id="fav-upcoming" className="you-heading">
          Upcoming
        </h2>
        {upcoming.length === 0 ? (
          <div className="card empty-card">
            <div className="card-title">Nothing listed in {metro.name} yet.</div>
          </div>
        ) : (
          <ul className="log-list">
            {upcoming.map((event) => (
              <li key={event.id} className="fav-li">
                <Link to={datePath(event.date, event.metroId, event.id)} className="log-row fav-row">
                  <Read rating={ratings.get(event.date) ?? null} />
                  <span className="log-main">
                    <span className="log-title">{listTitle(event)}</span>
                    <span className="log-facts">
                      {shortLocalDate(event.date)}
                      {event.start ? ` · ${clockTime(event.start)}` : ''}
                    </span>
                  </span>
                </Link>
                <button
                  type="button"
                  className={`fav-toggle${isPlanned(event.id, log) ? ' on' : ''}`}
                  aria-pressed={isPlanned(event.id, log)}
                  onClick={() => togglePlan(event)}
                >
                  {isPlanned(event.id, log) ? 'Saved' : 'Save'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="you-block" aria-labelledby="fav-mine">
        <h2 id="fav-mine" className="you-heading">
          Your events
        </h2>
        {mine.length === 0 ? (
          <div className="card empty-card">
            <div className="card-title">None yet.</div>
          </div>
        ) : (
          <ul className="log-list">
            {mine.map((entry) => (
              <li key={entry.id}>
                <EntryRow entry={entry} rating={ratingForEntry(entry, ratings)} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {friends.length > 0 && (
        <section className="you-block" aria-labelledby="fav-friends">
          <h2 id="fav-friends" className="you-heading">
            Friends went
          </h2>
          <ul className="log-list">
            {friends.map(({ entry, friend }) => (
              <li key={`${friend.id}-${entry.id}`}>
                <div className="log-row">
                  <Read rating={ratingForEntry(entry, ratings)} />
                  <span className="log-main">
                    <span className="log-friend">{friend.displayName ?? friend.handle ?? 'Someone'}</span>
                    <span className="log-title">{entry.title}</span>
                    <span className="log-facts">{loggedDateLabel(entry.when)}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function EntryRow({ entry, rating }: { entry: Entry; rating: number | null }) {
  const facts = [loggedDateLabel(entry.when), entry.venue].filter(Boolean).join(' · ');
  const body = (
    <>
      <Read rating={rating} />
      <span className="log-main">
        <span className="log-title">{entry.title}</span>
        <span className="log-facts">{facts}</span>
      </span>
    </>
  );
  if (entry.eventId) {
    return (
      <Link to={datePath(entry.when.sort, entry.metroId ?? DEFAULT_METRO.id, entry.eventId)} className="log-row">
        {body}
      </Link>
    );
  }
  return <div className="log-row">{body}</div>;
}
