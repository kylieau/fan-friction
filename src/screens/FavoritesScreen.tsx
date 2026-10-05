import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  eventMatches,
  favoriteFor,
  favoriteKey,
  favoriteMark,
  favoritesOf,
  getEventsBetween,
  getPersonalLog,
  getRatedDates,
  metrosWithEvents,
  nightMatches,
  subscribePersonalLog,
  suggestionsFor,
  todayIn,
  toggleFavorite,
  yourNights,
  type CrowdEvent,
  type Favorite,
  type FavoriteKind,
} from '../data';
import { addDays, clockTime, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { getHomeId, subscribeHome } from '../lib/homeCity';

/** How far ahead the tab looks for a favorite's next date: the schedule archive's reach. */
const AHEAD_DAYS = 14;

const KINDS: { kind: FavoriteKind; label: string }[] = [
  { kind: 'team', label: 'Team' },
  { kind: 'artist', label: 'Artist' },
  { kind: 'venue', label: 'Venue' },
  { kind: 'festival', label: 'Festival' },
];

/**
 * Favorites: the teams, artists, venues and festivals you follow. Next up shows
 * each one's next date (at home, or everywhere) with that date's read. With no
 * favorites yet, or from Settings, the tab is a picker: search, suggestions,
 * Follow pills, Done. A favorite's own page lists everything about it.
 */
export function FavoritesScreen() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const nights = useMemo(() => yourNights(log), [log]);
  const [query, setQuery] = useState('');
  const [where, setWhere] = useState<'home' | 'everywhere'>('home');
  const [upcoming, setUpcoming] = useState<CrowdEvent[]>([]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  // The picker stays open until Done, even after the first follow.
  const [picking, setPicking] = useState(() => pathname.endsWith('/edit') || favorites.length === 0);

  useEffect(() => {
    let current = true;
    const metros = where === 'home' ? [home] : metrosWithEvents();
    const today = todayIn(home);
    Promise.all(metros.map((metro) => getEventsBetween(metro.id, today, addDays(today, AHEAD_DAYS)))).then((lists) => {
      if (!current) return;
      setUpcoming(lists.flat().sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? ''))));
    });
    getRatedDates(home.id).then((rows) => {
      if (current) setRatings(new Map(rows.map((row) => [row.date, row.rating])));
    });
    return () => {
      current = false;
    };
  }, [home, where]);

  // Next up: only favorites with a date coming, soonest first.
  const nextUp = useMemo(() => {
    const rows = favorites
      .map((fav) => ({ fav, next: upcoming.find((event) => eventMatches(event, fav)) }))
      .filter((row): row is { fav: Favorite; next: CrowdEvent } => Boolean(row.next));
    return rows.sort((a, b) => (a.next.date + (a.next.start ?? '')).localeCompare(b.next.date + (b.next.start ?? '')));
  }, [favorites, upcoming]);

  const suggestions = useMemo(() => suggestionsFor(home.id, favorites), [home.id, favorites]);
  const isOn = (fav: Favorite) => favorites.some((f) => favoriteKey(f) === favoriteKey(fav));
  const countFor = (fav: Favorite) => nights.filter((night) => nightMatches(night, fav)).length;

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
    for (const night of nights) {
      if (night.kind === 'show') night.sides.forEach((side) => add(favoriteFor('artist', side)));
      else if (night.kind === 'festival') add(favoriteFor('festival', night.title));
      else night.tags.forEach((tag) => tag !== 'Concerts' && add(favoriteFor('team', tag)));
      if (night.venue) add(favoriteFor('venue', night.venue));
    }
    return out;
  }, [q, favorites, nights, home.id]);

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
            {favorites.length > 0 && (
              <section className="you-block" aria-labelledby="following-heading">
                <h2 id="following-heading" className="you-heading">
                  Following
                </h2>
                <ul className="log-list">
                  {favorites.map((fav) => (
                    <FavRow key={favoriteKey(fav)} fav={fav} sub={subFor(fav, countFor(fav))} on />
                  ))}
                </ul>
              </section>
            )}
            {suggestions.length > 0 && (
              <section className="you-block" aria-labelledby="suggest-heading">
                <h2 id="suggest-heading" className="you-heading">
                  In {home.name}
                </h2>
                <ul className="log-list">
                  {suggestions.map((fav) => (
                    <FavRow key={favoriteKey(fav)} fav={fav} sub={subFor(fav, countFor(fav))} on={false} />
                  ))}
                </ul>
              </section>
            )}
          </>
        )}
        <button type="button" className="gold-button" onClick={done} disabled={favorites.length === 0}>
          Done
        </button>
      </div>
    );
  }

  return (
    <div className="screen page">
      <div className="you-header">
        <h1 className="page-title">Favorites</h1>
        <button type="button" className="link-button you-edit" onClick={() => setPicking(true)}>
          Edit
        </button>
      </div>
      {search}
      {results || (
        <section className="you-block" aria-labelledby="next-up-heading">
          <div className="you-heading-row">
            <h2 id="next-up-heading" className="you-heading">
              Next up
            </h2>
            <div className="segmented small" role="tablist" aria-label="Where">
              <button type="button" role="tab" aria-selected={where === 'home'} onClick={() => setWhere('home')}>
                Home
              </button>
              <button type="button" role="tab" aria-selected={where === 'everywhere'} onClick={() => setWhere('everywhere')}>
                Everywhere
              </button>
            </div>
          </div>
          {nextUp.length === 0 ? (
            <div className="card empty-card">
              <div className="card-title">Nothing in the next two weeks.</div>
            </div>
          ) : (
            <ul className="log-list">
              {nextUp.map(({ fav, next }) => (
                <li key={favoriteKey(fav)}>
                  <Link to={favPath(fav)} className="log-row fav-row">
                    <span className={`fav-mark fav-${fav.kind}`} aria-hidden>
                      {favoriteMark(fav)}
                    </span>
                    <span className="log-main">
                      <span className="log-title">{fav.label}</span>
                      <span className="log-facts">
                        {listTitle(next)} · {shortLocalDate(next.date)}
                        {next.start ? ` · ${clockTime(next.start)}` : ''}
                        {where === 'everywhere' && next.metroId !== home.id ? ` · ${METROS[next.metroId]?.name ?? ''}` : ''}
                      </span>
                    </span>
                    <Read rating={ratings.get(next.date) ?? null} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
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

/** The date's read, when there is one. Upcoming dates show "—" until the formula lands. */
export function Read({ rating }: { rating: number | null }) {
  if (rating === null) {
    return (
      <span className="log-score none" aria-label="No read yet">
        <span className="log-score-num">—</span>
      </span>
    );
  }
  return (
    <span className={`log-score ${scoreBand(rating)}`} aria-label={`${scoreLabel(rating)}, ${rating} out of 10`}>
      <span className="log-score-num">{rating}</span>
      <span className="log-score-word">{scoreLabel(rating)}</span>
    </span>
  );
}
