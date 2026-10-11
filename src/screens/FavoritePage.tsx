import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronDown } from '../components/Icons';
import { EventFrictionPill } from '../components/EventTags';
import { ReadTile as Read } from '../components/ReadTile';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  entryMatches,
  entryOutcome,
  espnTeamUrl,
  eventMatches,
  favoriteFor,
  favoriteKey,
  favoriteMark,
  favoritesOf,
  friendsEntries,
  getAccount,
  getEventsBetween,
  getPersonalLog,
  getTeamSchedule,
  isPlanned,
  kindLabel,
  metrosWithEvents,
  nextTeamGame,
  nightKey,
  nightsOf,
  ratingForEntry,
  recordLine,
  scoreMark,
  scoresForNights,
  seriesLine,
  subscribeAccount,
  subscribePersonalLog,
  TEAMS,
  teamRecord,
  todayIn,
  toggleFavorite,
  togglePlan,
  VENUES,
  venueNameOn,
  yourEntries,
  type CrowdEvent,
  type Entry,
  type Favorite,
  type FriendEntry,
  type TeamGame,
} from '../data';
import { addDays, clockTime, loggedDateLabel, shortLocalDate } from '../lib/dates';
import { mapTitle } from '../lib/eventTitle';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { datePath } from '../lib/view';
import { crowdShort } from '../map/crowdPoints';
import { LastFive } from './FavoritesScreen';

/** How many schedule rows show before "See all". */
const ROWS = 5;
/** How far ahead an artist's or venue's dates are listed, in days. */
const AHEAD_DAYS = 60;

/**
 * One team, artist, venue or festival (build notes 2, section 2; mock fav-page.png):
 * record and last five, the next date at home with its read, the schedule and results
 * (teams) or dates near home and elsewhere (artists), your record with it, friends' nights.
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
  const [everywhere, setEverywhere] = useState<CrowdEvent[]>([]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  const [friends, setFriends] = useState<FriendEntry[]>([]);
  const [schedule, setSchedule] = useState<TeamGame[] | null>(null);
  const [list, setList] = useState<'schedule' | 'results'>('schedule');
  const [allRows, setAllRows] = useState(false);
  const today = todayIn(metro);

  // The favorite: the saved one, or one built from the address (a page you haven't followed yet).
  const fav: Favorite = useMemo(() => {
    const saved = favorites.find((f) => f.kind === kind && f.id === decodeURIComponent(id));
    if (saved) return saved;
    const label = decodeURIComponent(id).replace(/-/g, ' ');
    const built = favoriteFor(kind as Favorite['kind'], label);
    return built.id === decodeURIComponent(id) ? built : { ...built, id: decodeURIComponent(id) };
  }, [favorites, kind, id]);
  const following = favorites.some((f) => favoriteKey(f) === favoriteKey(fav));
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  const teamMetroId = team?.metroId;

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

  // Listings in every covered city for the next two months: dates near home, and the tour elsewhere.
  useEffect(() => {
    let current = true;
    Promise.all(metrosWithEvents().map((m) => getEventsBetween(m.id, today, addDays(today, AHEAD_DAYS)))).then((lists) => {
      if (!current) return;
      setEverywhere(lists.flat().sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? ''))));
    });
    return () => {
      current = false;
    };
  }, [today]);

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

  const matching = useMemo(() => everywhere.filter((e) => eventMatches(e, fav)), [everywhere, fav]);
  const nearHome = matching.filter((e) => e.metroId === metro.id);
  const elsewhere = matching.filter((e) => e.metroId !== metro.id);
  const byId = useMemo(() => new Map(everywhere.map((e) => [e.id, e])), [everywhere]);
  const sameDate = (event: CrowdEvent) => everywhere.filter((e) => e.metroId === event.metroId && e.date === event.date);

  const toCome = useMemo(() => (schedule ?? []).filter((g) => g.date >= today && !g.score).sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? ''))), [schedule, today]);
  const played = useMemo(() => (schedule ?? []).filter((g) => g.score).sort((a, b) => b.date.localeCompare(a.date)), [schedule]);
  const record = schedule ? teamRecord(schedule) : null;
  const next = schedule ? nextTeamGame(schedule, today) : undefined;
  const series = schedule && next ? seriesLine(schedule, next) : null;
  const nextHome = toCome.find((g) => (g.home || g.neutral) && g.eventId && byId.has(g.eventId!));
  const nextHomeEvent = nextHome?.eventId ? byId.get(nextHome.eventId) : undefined;
  const homeVenue = nextHomeEvent ? venueOf(nextHomeEvent) : null;

  // Reads: your entries' nights, the dates ahead on this page, and every covered game to come (C066 / 5.2).
  useEffect(() => {
    let current = true;
    const ahead = [
      ...matching.map((e) => ({ metroId: e.metroId, date: e.date })),
      ...toCome.filter((g) => g.eventId && g.eventMetroId).map((g) => ({ metroId: g.eventMetroId!, date: g.date })),
    ];
    scoresForNights([...nightsOf(entries), ...ahead]).then((map) => {
      if (current) setRatings(map);
    });
    return () => {
      current = false;
    };
  }, [entries, matching, toCome]);

  const mine = useMemo(() => entries.filter((entry) => entryMatches(entry, fav)), [entries, fav]);
  const names = team ? [team.shortName, team.name, ...(team.aliases ?? [])] : [label];
  const outcomes = fav.kind === 'team' ? mine.map((entry) => entryOutcome(entry, names)) : [];
  const wins = outcomes.filter((o) => o === 'W').length;
  const losses = outcomes.filter((o) => o === 'L').length;
  const lastMine = [...mine].sort((a, b) => b.when.sort.localeCompare(a.when.sort))[0];
  const espn = fav.teamId ? espnTeamUrl(fav.teamId) : null;
  const readAt = (metroId: string | undefined, date: string) => (metroId ? (ratings.get(nightKey(metroId, date)) ?? null) : null);
  const filterKey = fav.kind === 'team' || fav.kind === 'artist' ? label : null;

  const yoursLine =
    mine.length === 0
      ? null
      : fav.kind === 'team'
        ? wins + losses > 0
          ? `You at ${label} games: ${wins}–${losses}`
          : `You at ${label} games: ${mine.length}`
        : fav.kind === 'artist'
          ? `You at ${label} shows: ${mine.length}`
          : `Your events here: ${mine.length}`;

  const rows = list === 'schedule' ? toCome : played;
  const shownRows = allRows ? rows : rows.slice(0, ROWS);

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
          <h1 className="page-title">{team?.name ?? label}</h1>
          <span className="you-handle">{[record ? recordLine(record) : null, series].filter(Boolean).join(' · ') || kindLabel(fav.kind)}</span>
        </div>
      </div>

      <div className="fav-page-row">
        {record ? (
          <span className="fav-last5">
            <span className="log-facts">Last {record.last5.length}</span> <LastFive marks={record.last5} />
          </span>
        ) : (
          <span />
        )}
        <button
          type="button"
          className={following ? 'fav-toggle on' : 'fav-toggle'}
          aria-pressed={following}
          onClick={() => toggleFavorite({ ...fav, label })}
        >
          {following ? '★ Following' : 'Follow'}
        </button>
      </div>
      {espn && (
        <a href={espn} target="_blank" rel="noreferrer" className="fav-foot-link fav-foot-out fav-page-espn">
          ESPN ›
        </a>
      )}

      {fav.kind === 'team' ? (
        <>
          <section className="you-block" aria-labelledby="fav-next-home">
            <h2 id="fav-next-home" className="you-heading">
              {homeVenue ? `Next at ${homeVenue}` : 'Next at home'}
            </h2>
            {nextHome && nextHomeEvent ? (
              <div className="card fav-next-card">
                <Link to={datePath(nextHome.date, nextHomeEvent.metroId, nextHomeEvent.id)} className="fav-next-main">
                  <Read rating={readAt(nextHomeEvent.metroId, nextHome.date)} size="big" />
                  <span className="log-main">
                    <span className="log-title">{gameTitle(nextHome)}</span>
                    <span className="log-facts">
                      {shortLocalDate(nextHome.date)}
                      {nextHome.start ? ` · ${clockTime(nextHome.start)}` : ''}
                    </span>
                    <span className="fav-next-tags">
                      <EventFrictionPill event={nextHomeEvent} />
                      {crowdOf(nextHomeEvent) && <span className="log-facts">{crowdOf(nextHomeEvent)}</span>}
                    </span>
                  </span>
                </Link>
                <button
                  type="button"
                  className={`fav-toggle${isPlanned(nextHomeEvent.id, log) ? ' on' : ''}`}
                  aria-pressed={isPlanned(nextHomeEvent.id, log)}
                  onClick={() => togglePlan(nextHomeEvent)}
                >
                  {isPlanned(nextHomeEvent.id, log) ? 'Saved' : 'Save'}
                </button>
              </div>
            ) : (
              <div className="card empty-card">
                <div className="card-title">{schedule ? 'No home game listed yet.' : 'No schedule yet.'}</div>
              </div>
            )}
          </section>

          {schedule && (
            <section className="you-block" aria-label="Schedule and results">
              <div className="segmented" role="tablist" aria-label="Schedule or results">
                <button type="button" role="tab" aria-selected={list === 'schedule'} onClick={() => { setList('schedule'); setAllRows(false); }}>
                  Schedule
                </button>
                <button type="button" role="tab" aria-selected={list === 'results'} onClick={() => { setList('results'); setAllRows(false); }}>
                  Results
                </button>
              </div>
              {rows.length === 0 ? (
                <div className="card empty-card">
                  <div className="card-title">{list === 'schedule' ? 'No games to come.' : 'No results yet.'}</div>
                </div>
              ) : (
                <ul className="log-list">
                  {shownRows.map((game) => (
                    <li key={game.id}>
                      <GameRow game={game} rating={game.eventId && game.eventMetroId ? readAt(game.eventMetroId, game.date) : null} covered={Boolean(game.eventId)} teamMetroId={teamMetroId} />
                    </li>
                  ))}
                  {rows.length > ROWS && (
                    <li className="see-all-row">
                      <button type="button" className="link-button see-all" onClick={() => setAllRows((v) => !v)}>
                        {allRows ? 'Fewer ‹' : 'See all ›'}
                      </button>
                    </li>
                  )}
                </ul>
              )}
            </section>
          )}
        </>
      ) : fav.kind === 'artist' ? (
        <>
          <section className="you-block" aria-labelledby="fav-near">
            <h2 id="fav-near" className="you-heading">
              Near home
            </h2>
            {nearHome.length === 0 ? (
              <div className="card empty-card">
                <div className="card-title">No dates near home.</div>
              </div>
            ) : (
              <ul className="log-list">
                {nearHome.map((event) => (
                  <li key={event.id} className="fav-li">
                    <Link to={datePath(event.date, event.metroId, event.id)} className="log-row fav-row">
                      <Read rating={readAt(event.metroId, event.date)} />
                      <span className="log-main">
                        <span className="log-title">
                          {venueOf(event)}
                          {event.date === today ? ' · tonight' : ''}
                        </span>
                        <span className="log-facts">
                          {shortLocalDate(event.date)}
                          {event.start ? ` · ${clockTime(event.start)}` : ''}
                        </span>
                        <span className="fav-next-tags">
                          <EventFrictionPill event={event} />
                          {crowdOf(event) && <span className="log-facts">{crowdOf(event)}</span>}
                        </span>
                      </span>
                    </Link>
                    <button type="button" className={`fav-toggle${isPlanned(event.id, log) ? ' on' : ''}`} aria-pressed={isPlanned(event.id, log)} onClick={() => togglePlan(event)}>
                      {isPlanned(event.id, log) ? 'Saved' : 'Save'}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section className="you-block" aria-labelledby="fav-tour">
            <h2 id="fav-tour" className="you-heading">
              Tour dates · elsewhere
            </h2>
            {elsewhere.length === 0 ? (
              <div className="card empty-card">
                {/* Only covered cities are listed; the rest of a tour needs a feed the app does not have. */}
                <div className="card-title">No dates in the cities the app covers.</div>
              </div>
            ) : (
              <ul className="log-list">
                {elsewhere.map((event) => (
                  <li key={event.id}>
                    <Link to={datePath(event.date, event.metroId, event.id)} className="log-row fav-row">
                      <span className="log-main">
                        <span className="log-title">{venueOf(event)}</span>
                        <span className="log-facts">
                          {shortLocalDate(event.date)} · {METROS[event.metroId]?.name ?? ''}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      ) : (
        <section className="you-block" aria-labelledby="fav-upcoming">
          <h2 id="fav-upcoming" className="you-heading">
            Upcoming
          </h2>
          {matching.length === 0 ? (
            <div className="card empty-card">
              <div className="card-title">Nothing listed yet.</div>
            </div>
          ) : (
            <ul className="log-list">
              {matching.map((event) => (
                <li key={event.id} className="fav-li">
                  <Link to={datePath(event.date, event.metroId, event.id)} className="log-row fav-row">
                    <Read rating={readAt(event.metroId, event.date)} />
                    <span className="log-main">
                      <span className="log-title">{mapTitle(event, sameDate(event))}</span>
                      <span className="log-facts">
                        {shortLocalDate(event.date)}
                        {event.start ? ` · ${clockTime(event.start)}` : ''}
                        {event.metroId !== metro.id ? ` · ${METROS[event.metroId]?.name ?? ''}` : ''}
                      </span>
                      <span className="fav-next-tags">
                        <EventFrictionPill event={event} />
                      </span>
                    </span>
                  </Link>
                  <button type="button" className={`fav-toggle${isPlanned(event.id, log) ? ' on' : ''}`} aria-pressed={isPlanned(event.id, log)} onClick={() => togglePlan(event)}>
                    {isPlanned(event.id, log) ? 'Saved' : 'Save'}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {yoursLine && (
        <div className="card fav-yours">
          <div className="fav-yours-main">
            <span className="card-title">{yoursLine}</span>
            <span className="log-facts">
              {fav.kind === 'team' && wins + losses > 0 ? `${mine.length} ${mine.length === 1 ? 'game' : 'games'} in My Stubs` : lastMine ? `Last: ${[lastMine.venue, lastMine.when.sort.slice(0, 4)].filter(Boolean).join(', ')}` : ''}
            </span>
          </div>
          <Link to={filterKey ? `/you?filter=${encodeURIComponent(filterKey)}` : '/you'} className="fav-foot-link">
            My Stubs ›
          </Link>
        </div>
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
                <EntryRow entry={entry} rating={ratingForEntry(entry, ratings)} outcome={fav.kind === 'team' ? entryOutcome(entry, names) : null} />
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

function venueOf(event: CrowdEvent): string {
  if (event.place.type !== 'venue') return event.place.name;
  const venue = VENUES[event.place.venueId];
  return venue ? venueNameOn(venue, event.date) : event.place.venueId;
}

/** "52k", the way the map chip says it; nothing when there is no figure yet. */
function crowdOf(event: CrowdEvent): string | null {
  const text = crowdShort(event, undefined, false, true);
  return text === 'No count yet' ? null : text;
}

/** "vs. Brewers · NLCS G3", "at Brewers · G1", "vs. Oilers". */
function gameTitle(game: TeamGame): string {
  const side = `${game.home || game.neutral ? 'vs.' : 'at'} ${game.opponent}`;
  const round = game.stakes ? `${game.stakes.round}${game.stakes.game ? ` G${game.stakes.game}` : ''}` : game.preseason ? 'Preseason' : null;
  return round ? `${side} · ${round}` : side;
}

/** A schedule or results row: the game, its date and place; the read when the building is covered, else a dash. */
function GameRow({ game, rating, covered, teamMetroId }: { game: TeamGame; rating: number | null; covered: boolean; teamMetroId?: string }) {
  const mark = scoreMark(game);
  const city = game.eventMetroId && game.eventMetroId !== teamMetroId ? METROS[game.eventMetroId]?.name : !game.home || game.neutral ? game.venueName : undefined;
  const facts = [shortLocalDate(game.date) + (game.start && !mark ? ` · ${clockTime(game.start)}` : ''), city, game.stakes?.game && mark ? null : null]
    .filter(Boolean)
    .join(' · ');
  const body = (
    <>
      <span className="log-main">
        <span className="log-title">{mark ? `${mark} ${game.home || game.neutral ? 'vs.' : 'at'} ${game.opponent}` : gameTitle(game)}</span>
        <span className="log-facts">{facts}</span>
      </span>
      {!mark && (covered ? <Read rating={rating} /> : <span className="log-score none" aria-label="No read: not a covered building">—</span>)}
    </>
  );
  if (game.eventId && game.eventMetroId) {
    return (
      <Link to={datePath(game.date, game.eventMetroId, game.eventId)} className="log-row fav-row fav-game-row">
        {body}
      </Link>
    );
  }
  return <div className="log-row fav-row fav-game-row">{body}</div>;
}

function EntryRow({ entry, rating, outcome }: { entry: Entry; rating: number | null; outcome: 'W' | 'L' | 'T' | null }) {
  const facts = [loggedDateLabel(entry.when), entry.venue, outcome ? `You saw a ${outcome === 'W' ? 'win' : outcome === 'L' ? 'loss' : 'tie'}` : null].filter(Boolean).join(' · ');
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
