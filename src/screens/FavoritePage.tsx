import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  entryMatches,
  eventMatches,
  favoriteFor,
  favoriteKey,
  favoriteMark,
  favoritesOf,
  friendsEntries,
  getAccount,
  getPersonalLog,
  getTeamSchedule,
  getUpcoming,
  isPlanned,
  kindLabel,
  nightsOf,
  ratingForEntry,
  scoreMark,
  nightKey,
  scoresForNights,
  TEAMS,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  toggleFavorite,
  togglePlan,
  type CrowdEvent,
  type Entry,
  type Favorite,
  type FriendEntry,
  type TeamGame,
  yourEntries,
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
  // A team's own schedule, home and away; null when no feed carries the team.
  const [schedule, setSchedule] = useState<TeamGame[] | null>(null);

  // The favorite: the saved one, or one built from the address (a page you haven't followed yet).
  const fav: Favorite = useMemo(() => {
    const saved = favorites.find((f) => f.kind === kind && f.id === decodeURIComponent(id));
    if (saved) return saved;
    const label = decodeURIComponent(id).replace(/-/g, ' ');
    const built = favoriteFor(kind as Favorite['kind'], label);
    return built.id === decodeURIComponent(id) ? built : { ...built, id: decodeURIComponent(id) };
  }, [favorites, kind, id]);
  const following = favorites.some((f) => favoriteKey(f) === favoriteKey(fav));
  const teamMetroId = fav.teamId ? TEAMS[fav.teamId]?.metroId : undefined;

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
    // Your entries' nights plus the dates ahead on this page, so an upcoming game shows its forecast (C066 / 5.2).
    const ahead = [
      ...upcoming.map((e) => ({ metroId: e.metroId, date: e.date })),
      ...(schedule ?? []).filter((g) => g.home && g.eventId).map((g) => ({ metroId: teamMetroId ?? metro.id, date: g.date })),
    ];
    scoresForNights([...nightsOf(entries), ...ahead]).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries, upcoming, schedule, teamMetroId, metro.id]);

  useEffect(() => {
    let current = true;
    setSchedule(null);
    if (!fav.teamId) return;
    getTeamSchedule(fav.teamId).then((rows) => current && setSchedule(rows));
    return () => {
      current = false;
    };
  }, [fav.teamId]);

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
  const today = todayIn(metro);
  const toCome = schedule?.filter((g) => g.date >= today && !g.score) ?? [];
  const played = schedule?.filter((g) => g.score).reverse() ?? [];
  const plannable = new Map(upcoming.map((e) => [e.id, e]));

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

      {fav.kind === 'team' ? (
        <>
          <section className="you-block" aria-labelledby="fav-schedule">
            <h2 id="fav-schedule" className="you-heading">
              Schedule
            </h2>
            {toCome.length === 0 ? (
              <div className="card empty-card">
                <div className="card-title">{schedule ? 'No games to come.' : 'No schedule yet.'}</div>
              </div>
            ) : (
              <ul className="log-list">
                {toCome.slice(0, UPCOMING).map((game) => (
                  <li key={game.id} className="fav-li">
                    <GameRow game={game} rating={game.eventId ? (ratings.get(nightKey(teamMetroId ?? metro.id, game.date)) ?? null) : null} />
                    {game.eventId && plannable.has(game.eventId) && (
                      <button
                        type="button"
                        className={`fav-toggle${isPlanned(game.eventId, log) ? ' on' : ''}`}
                        aria-pressed={isPlanned(game.eventId, log)}
                        onClick={() => togglePlan(plannable.get(game.eventId!)!)}
                      >
                        {isPlanned(game.eventId, log) ? 'Saved' : 'Save'}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {played.length > 0 && (
            <section className="you-block" aria-labelledby="fav-results">
              <h2 id="fav-results" className="you-heading">
                Results
              </h2>
              <ul className="log-list">
                {played.slice(0, UPCOMING).map((game) => (
                  <li key={game.id}>
                    <GameRow game={game} rating={null} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      ) : (
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
                    <Read rating={ratings.get(nightKey(event.metroId, event.date)) ?? null} />
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
      )}

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

/** "vs. Dodgers" at home, "at Dodgers" away; the score once it is final. Home games in a covered city open that night. */
function GameRow({ game, rating }: { game: TeamGame; rating: number | null }) {
  const title = `${game.home || game.neutral ? 'vs.' : 'at'} ${game.opponent}`;
  const mark = scoreMark(game);
  const facts = [
    shortLocalDate(game.date) + (game.start && !mark ? ` · ${clockTime(game.start)}` : ''),
    game.neutral ? game.venueName : !game.home ? game.venueName : undefined,
    game.preseason ? 'Preseason' : game.stakes ? `${game.stakes.round}${game.stakes.game ? ` game ${game.stakes.game}` : ''}` : undefined,
  ]
    .filter(Boolean)
    .join(' · ');
  const body = (
    <>
      <Read rating={rating} />
      <span className="log-main">
        <span className="log-title">
          {title}
          {mark ? ` · ${mark}` : ''}
        </span>
        <span className="log-facts">{facts}</span>
      </span>
    </>
  );
  if (game.eventId && game.eventMetroId) {
    return (
      <Link to={datePath(game.date, game.eventMetroId, game.eventId)} className="log-row fav-row">
        {body}
      </Link>
    );
  }
  return <div className="log-row fav-row">{body}</div>;
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
