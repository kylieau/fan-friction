import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';
import { SearchButton } from '../components/SearchButton';
import { FrictionPill } from '../components/EventTags';
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
  getEventsBetween,
  getPersonalLog,
  getTeamSchedule,
  nextTeamGame,
  nightKey,
  recordLine,
  scoresForNights,
  metrosWithEvents,
  subscribePersonalLog,
  suggestionsFor,
  TEAMS,
  teamRecord,
  todayIn,
  toggleFavorite,
  VENUES,
  venueNameOn,
  yourEntries,
  type CrowdEvent,
  type Favorite,
  type FavoriteKind,
  type TeamGame,
  type TeamRecord,
} from '../data';
import { addDays, clockTime, shortLocalDate } from '../lib/dates';
import { mapTitle } from '../lib/eventTitle';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { datePath } from '../lib/view';

/** How far ahead the tab looks for a favorite's next date: the schedule archive's reach. */
const AHEAD_DAYS = 14;

const KINDS: { kind: FavoriteKind; label: string }[] = [
  { kind: 'team', label: 'Team' },
  { kind: 'artist', label: 'Artist' },
  { kind: 'venue', label: 'Venue' },
  { kind: 'festival', label: 'Festival' },
];

/** One favorite's next date, from its own schedule (a team) or the listings (everyone else). */
interface NextLine {
  date: string;
  start: string | null;
  /** "at Brewers", "vs. Oilers", a venue, or an event title. */
  text: string;
  /** The listed event behind it, when the building is covered. */
  event?: CrowdEvent;
  metroId?: string;
  /** An away game at a building the app does not cover (build notes 2: an "Away" tag, not a dash). */
  away: boolean;
}

interface CardData {
  fav: Favorite;
  record: TeamRecord | null;
  next: NextLine | null;
  /** How many of your events belong to it, and your W–L when results are on file. */
  yours: { count: number; wins: number; losses: number };
  espn: string | null;
}

/**
 * Favorites: the teams, artists, venues and festivals you follow, as one status card
 * each (build notes 2, section 2: name, record, last five, one next line), or the same
 * next dates in date order. With no favorites yet, or from Edit, the tab is a picker:
 * search, suggestions, Follow pills, Done. A favorite's own page has everything else.
 */
export function FavoritesScreen() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [query, setQuery] = useState('');
  const [view, setView] = useState<'favorite' | 'date'>('favorite');
  const [upcoming, setUpcoming] = useState<CrowdEvent[]>([]);
  const [schedules, setSchedules] = useState<Map<string, TeamGame[] | null>>(new Map());
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  // The picker stays open until Done, even after the first follow.
  const [picking, setPicking] = useState(() => pathname.endsWith('/edit') || favorites.length === 0);
  const today = todayIn(home);

  // Listings everywhere for the next two weeks: a favorite's next date can be in any covered city.
  useEffect(() => {
    let current = true;
    Promise.all(metrosWithEvents().map((metro) => getEventsBetween(metro.id, today, addDays(today, AHEAD_DAYS)))).then((lists) => {
      if (!current) return;
      setUpcoming(lists.flat().sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? ''))));
    });
    return () => {
      current = false;
    };
  }, [today]);

  // Each followed team's own schedule, home and away, for its record and next game.
  const teamIds = favorites.map((fav) => fav.teamId).filter((id): id is string => Boolean(id)).join(',');
  useEffect(() => {
    let current = true;
    const ids = teamIds ? teamIds.split(',') : [];
    Promise.all(ids.map(async (id) => [id, await getTeamSchedule(id)] as const)).then((pairs) => current && setSchedules(new Map(pairs)));
    return () => {
      current = false;
    };
  }, [teamIds]);

  const cards = useMemo<CardData[]>(() => {
    return favorites.map((fav) => {
      const games = fav.teamId ? (schedules.get(fav.teamId) ?? null) : null;
      let next: NextLine | null = null;
      const game = games ? nextTeamGame(games, today) : undefined;
      if (game) {
        const event = game.eventId ? upcoming.find((e) => e.id === game.eventId) : undefined;
        // A game at a building the app does not cover (away, or a neutral site) wears the Away tag and names the place.
        const uncovered = !game.eventId;
        next = {
          date: game.date,
          start: game.start,
          text: `${game.home || game.neutral ? 'vs.' : 'at'} ${game.opponent}${uncovered && game.venueName && (game.neutral || game.home) ? ` · ${game.venueName}` : ''}`,
          event,
          metroId: event?.metroId ?? game.eventMetroId,
          away: uncovered,
        };
      } else {
        const event = upcoming.find((e) => eventMatches(e, fav));
        if (event) {
          const sameDate = upcoming.filter((e) => e.metroId === event.metroId && e.date === event.date);
          next = { date: event.date, start: event.start ?? null, text: fav.kind === 'artist' ? venueOf(event) : mapTitle(event, sameDate), event, metroId: event.metroId, away: false };
        }
      }
      const mine = entries.filter((entry) => entryMatches(entry, fav));
      const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
      const names = team ? [team.shortName, team.name, ...(team.aliases ?? [])] : [fav.label];
      const outcomes = fav.kind === 'team' ? mine.map((entry) => entryOutcome(entry, names)) : [];
      return {
        fav,
        record: games ? teamRecord(games) : null,
        next,
        yours: { count: mine.length, wins: outcomes.filter((o) => o === 'W').length, losses: outcomes.filter((o) => o === 'L').length },
        espn: fav.teamId ? espnTeamUrl(fav.teamId) : null,
      };
    });
  }, [favorites, schedules, upcoming, entries, today]);

  // The read of each next date, keyed by city and date (C066 / 5.2).
  useEffect(() => {
    let current = true;
    const nights = cards.flatMap(({ next }) => (next?.metroId ? [{ metroId: next.metroId, date: next.date }] : []));
    scoresForNights(nights).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [cards]);

  const suggestions = useMemo(() => suggestionsFor(home.id, favorites), [home.id, favorites]);
  const isOn = (fav: Favorite) => favorites.some((f) => favoriteKey(f) === favoriteKey(fav));
  const countFor = (fav: Favorite) => entries.filter((entry) => entryMatches(entry, fav)).length;

  // Search: favorites, every home-city record, and names from the log.
  const q = query.trim().toLowerCase();
  const found = useMemo(() => {
    if (!q) return [];
    const seen = new Set<string>();
    const out: Favorite[] = [];
    const add = (fav: Favorite) => {
      const key = favoriteKey(fav);
      if (!seen.has(key) && fav.label.toLowerCase().includes(q)) {
        seen.add(key);
        out.push(fav);
      }
    };
    favorites.forEach(add);
    suggestionsFor(home.id, []).forEach(add);
    for (const entry of entries) {
      if (entry.kind === 'show') entry.sides.forEach((side) => add(favoriteFor('artist', side)));
      else if (entry.kind === 'festival') add(favoriteFor('festival', entry.title));
      else entry.tags.forEach((tag) => tag !== 'Concerts' && add(favoriteFor('team', tag)));
      if (entry.venue) add(favoriteFor('venue', entry.venue));
    }
    return out;
  }, [q, favorites, entries, home.id]);

  const exactMatch = found.some((fav) => fav.label.toLowerCase() === q);

  const done = () => {
    setPicking(false);
    setQuery('');
    if (pathname.endsWith('/edit')) navigate('/favorites', { replace: true });
  };

  const search = (
    <div className="search-box">
      <label className="search-field">
        <SearchIcon />
        <input
          id="favorites-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Team, artist or venue"
          aria-label="Find a team, artist or venue"
        />
      </label>
      {query && (
        <button type="button" className="search-clear" onClick={() => setQuery('')}>
          Clear
        </button>
      )}
    </div>
  );

  const results = q && (
    <section className="you-block" aria-label="Results">
      <ul className="log-list">
        {found.map((fav) => (
          <FavRow key={favoriteKey(fav)} fav={fav} sub={subFor(fav, countFor(fav))} on={isOn(fav)} />
        ))}
        {!exactMatch && (
          // Placeholder for things the app doesn't know yet: a favorite by name only.
          // It matches the log by that name and gets a page; no dates until a source knows it.
          <li className="fav-add">
            <span className="log-title">Add “{query.trim()}”</span>
            <span className="fav-add-kinds">
              {KINDS.map(({ kind, label }) => (
                <button
                  key={kind}
                  type="button"
                  className="fav-toggle"
                  onClick={() => {
                    toggleFavorite(favoriteFor(kind, query.trim()));
                    setQuery('');
                  }}
                >
                  {label}
                </button>
              ))}
            </span>
          </li>
        )}
      </ul>
    </section>
  );

  if (picking) {
    return (
      <div className="screen page">
        <h1 className="page-title">{favorites.length === 0 ? 'Pick your favorites' : 'Favorites'}</h1>
        {search}
        {results || (
          <>
            {/* Sections by kind (Kylie, Oct 9, C076): what you follow first, then the rest in your home city. */}
            {KINDS.map(({ kind, label }) => {
              const on = favorites.filter((fav) => fav.kind === kind);
              const more = suggestions.filter((fav) => fav.kind === kind);
              if (on.length === 0 && more.length === 0) return null;
              return (
                <section key={kind} className="you-block" aria-labelledby={`pick-${kind}`}>
                  <h2 id={`pick-${kind}`} className="you-heading">
                    {label}s
                  </h2>
                  <ul className="log-list">
                    {on.map((fav) => (
                      <FavRow key={favoriteKey(fav)} fav={fav} sub={subFor(fav, countFor(fav))} on />
                    ))}
                    {more.map((fav) => (
                      <FavRow key={favoriteKey(fav)} fav={fav} sub={subFor(fav, countFor(fav))} on={false} />
                    ))}
                  </ul>
                </section>
              );
            })}
          </>
        )}
        {/* Done stays in reach while the list scrolls (C077). */}
        <div className="picker-done">
          <button type="button" className="gold-button" onClick={done} disabled={favorites.length === 0}>
            Done
          </button>
        </div>
      </div>
    );
  }

  const readFor = (next: NextLine | null) => (next?.metroId ? (ratings.get(nightKey(next.metroId, next.date)) ?? null) : null);

  // By date: the same next dates, in date order, each date with its read.
  const byDate = useMemo(() => {
    const groups = new Map<string, CardData[]>();
    for (const card of cards) {
      if (!card.next) continue;
      groups.set(card.next.date, [...(groups.get(card.next.date) ?? []), card]);
    }
    return [...groups.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([date, rows]) => ({
      date,
      rows: [...rows].sort((a, b) => (a.next!.start ?? '99').localeCompare(b.next!.start ?? '99')),
    }));
  }, [cards]);

  return (
    <div className="screen page">
      <div className="you-header">
        <h1 className="page-title">Favorites</h1>
        <button type="button" className="link-button you-edit" onClick={() => setPicking(true)}>
          Edit
        </button>
        <SearchButton />
      </div>
      {
        <>
          <div className="segmented" role="tablist" aria-label="Favorites view">
            <button type="button" role="tab" aria-selected={view === 'favorite'} onClick={() => setView('favorite')}>
              By favorite
            </button>
            <button type="button" role="tab" aria-selected={view === 'date'} onClick={() => setView('date')}>
              By date
            </button>
          </div>

          {view === 'favorite' ? (
            KINDS.map(({ kind, label }) => {
              const group = cards.filter((card) => card.fav.kind === kind);
              if (group.length === 0) return null;
              return (
                <section key={kind} className="you-block" aria-labelledby={`fav-group-${kind}`}>
                  <h2 id={`fav-group-${kind}`} className="you-heading">
                    {label}s
                  </h2>
                  {group.map((card) => (
                    <FavCard key={favoriteKey(card.fav)} card={card} rating={readFor(card.next)} home={home.id} upcoming={upcoming} />
                  ))}
                </section>
              );
            })
          ) : byDate.length === 0 ? (
            <div className="card empty-card">
              <div className="card-title">Nothing in the next two weeks.</div>
            </div>
          ) : (
            byDate.map(({ date, rows }) => {
              const first = rows.find((row) => row.next?.metroId)?.next;
              return (
                <section key={date} className="you-block" aria-label={shortLocalDate(date)}>
                  <div className="you-heading-row fav-date-head">
                    <h2 className="you-heading">{shortLocalDate(date)}</h2>
                    <Read rating={readFor(first ?? null)} />
                  </div>
                  <ul className="log-list">
                    {rows.map((card) => (
                      <li key={favoriteKey(card.fav)}>
                        <NextRow card={card} home={home.id} upcoming={upcoming} />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })
          )}
        </>
      }
    </div>
  );
}

function venueOf(event: CrowdEvent): string {
  if (event.place.type !== 'venue') return event.place.name;
  const venue = VENUES[event.place.venueId];
  return venue ? venueNameOn(venue, event.date) : event.place.venueId;
}

/** "Sun, Oct 11 · 5:00 pm · at Brewers", with the city when it is not home. */
function nextFacts(next: NextLine, home: string): string {
  const city = next.metroId && next.metroId !== home ? METROS[next.metroId]?.name : undefined;
  return [shortLocalDate(next.date), next.start ? clockTime(next.start) : null, next.text, city].filter(Boolean).join(' · ');
}

/** One favorite as a status card: name, record and last five; one next line; your record; ESPN (teams). */
function FavCard({ card, rating, home, upcoming }: { card: CardData; rating: number | null; home: string; upcoming: readonly CrowdEvent[] }) {
  const { fav, record, next, yours, espn } = card;
  const sameDate = next?.event ? upcoming.filter((e) => e.metroId === next.event!.metroId && e.date === next.date) : [];
  const yoursText =
    yours.count === 0
      ? null
      : fav.kind === 'team'
        ? yours.wins + yours.losses > 0
          ? `You at games: ${yours.wins}–${yours.losses}`
          : `You at games: ${yours.count}`
        : fav.kind === 'artist'
          ? `You at shows: ${yours.count}`
          : `Your events here: ${yours.count}`;
  const filterKey = fav.kind === 'team' ? fav.label : fav.kind === 'artist' ? fav.label : null;
  return (
    <article className="card fav-card">
      <Link to={favPath(fav)} className="fav-card-head">
        <span className={`fav-mark fav-${fav.kind}`} aria-hidden>
          {favoriteMark(fav)}
        </span>
        <span className="fav-card-name">
          <span className="log-title">{fav.label}</span>
          {record && <span className="log-facts">{recordLine(record)}</span>}
        </span>
        {record && <LastFive marks={record.last5} />}
      </Link>
      {next ? (
        <NextLineRow next={next} rating={rating} home={home} sameDate={sameDate} />
      ) : (
        <div className="fav-next fav-next-none">
          <span className="log-facts">{fav.teamId ? 'No games to come.' : 'Nothing in the next two weeks.'}</span>
        </div>
      )}
      {(yoursText || espn) && (
        <div className="fav-card-foot">
          {yoursText &&
            (filterKey ? (
              <Link to={`/you?filter=${encodeURIComponent(filterKey)}`} className="fav-foot-link">
                {yoursText} ›
              </Link>
            ) : (
              <span className="fav-foot-text">{yoursText}</span>
            ))}
          {espn && (
            <a href={espn} target="_blank" rel="noreferrer" className="fav-foot-link fav-foot-out">
              ESPN ›
            </a>
          )}
        </div>
      )}
    </article>
  );
}

/** The one next line on a card: date, time, opponent or venue; the read; the friction pill, or Away. */
function NextLineRow({ next, rating, home, sameDate }: { next: NextLine; rating: number | null; home: string; sameDate: readonly CrowdEvent[] }) {
  const body = (
    <>
      {next.event ? <Read rating={rating} /> : next.away ? <span className="away-tag">Away</span> : <Read rating={rating} />}
      <span className="log-main">
        <span className="log-facts fav-next-facts">{nextFacts(next, home)}</span>
      </span>
      {next.event && <FrictionPill event={next.event} sameDate={sameDate} />}
    </>
  );
  if (next.event) {
    return (
      <Link to={datePath(next.date, next.event.metroId, next.event.id)} className="fav-next">
        {body}
      </Link>
    );
  }
  return <div className="fav-next">{body}</div>;
}

/** A row under a date heading: time, who, where; the friction pill. */
function NextRow({ card, home, upcoming }: { card: CardData; home: string; upcoming: readonly CrowdEvent[] }) {
  const { fav, next } = card;
  if (!next) return null;
  const title = fav.kind === 'team' ? `${fav.label} ${next.text}` : fav.kind === 'artist' ? fav.label : next.text;
  const where = [fav.kind === 'team' && next.event ? venueOf(next.event) : fav.kind === 'artist' ? next.text : fav.label, next.metroId && next.metroId !== home ? METROS[next.metroId]?.name : null]
    .filter(Boolean)
    .join(' · ');
  const sameDate = next.event ? upcoming.filter((e) => e.metroId === next.event!.metroId && e.date === next.date) : [];
  const body = (
    <>
      <span className="tl-time">{next.start ? clockTime(next.start) : 'TBA'}</span>
      <span className="log-main">
        <span className="log-title">{title}</span>
        <span className="log-facts">{where}</span>
      </span>
      {next.event ? <FrictionPill event={next.event} sameDate={sameDate} /> : next.away ? <span className="away-tag">Away</span> : null}
    </>
  );
  if (next.event) {
    return (
      <Link to={datePath(next.date, next.event.metroId, next.event.id)} className="log-row fav-row">
        {body}
      </Link>
    );
  }
  return <div className="log-row fav-row">{body}</div>;
}

/** The last five results as W/L marks, oldest first. */
export function LastFive({ marks }: { marks: readonly ('W' | 'L' | 'T')[] }) {
  if (marks.length === 0) return null;
  return (
    <span className="last5" aria-label={`Last ${marks.length}: ${marks.join(' ')}`}>
      {marks.map((mark, i) => (
        <span key={i} className={`last5-mark ${mark.toLowerCase()}`}>
          {mark}
        </span>
      ))}
    </span>
  );
}

function subFor(fav: Favorite, count: number): string {
  const kind = KINDS.find((k) => k.kind === fav.kind)?.label ?? '';
  return count > 0 ? `${kind} · ${count} ${count === 1 ? 'event' : 'events'}` : kind;
}

export function favPath(fav: Pick<Favorite, 'kind' | 'id'>): string {
  return `/favorites/${fav.kind}/${encodeURIComponent(fav.id)}`;
}

/** A favorite in a list, with a Follow / Following pill on the right. */
function FavRow({ fav, sub, on }: { fav: Favorite; sub: string; on: boolean }) {
  return (
    <li className="fav-li">
      <Link to={favPath(fav)} className="log-row fav-row">
        <span className={`fav-mark fav-${fav.kind}`} aria-hidden>
          {favoriteMark(fav)}
        </span>
        <span className="log-main">
          <span className="log-title">{fav.label}</span>
          <span className="log-facts">{sub}</span>
        </span>
      </Link>
      <button type="button" className={`fav-toggle${on ? ' on' : ''}`} aria-pressed={on} onClick={() => toggleFavorite(fav)}>
        {on ? 'Following' : 'Follow'}
      </button>
    </li>
  );
}

export { ReadTile as Read } from '../components/ReadTile';
