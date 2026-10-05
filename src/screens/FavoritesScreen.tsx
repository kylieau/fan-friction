import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
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
  nightMatches,
  subscribePersonalLog,
  suggestionsFor,
  todayIn,
  toggleFavorite,
  yourNights,
  type CrowdEvent,
  type Favorite,
} from '../data';
import { addDays, clockTime, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { getHomeId, subscribeHome } from '../lib/homeCity';

/** How far ahead the tab looks for a favorite's next date: the schedule archive's reach. */
const AHEAD_DAYS = 14;

/**
 * Favorites: the teams, artists, venues and festivals you follow, each with its
 * next date in your home city and that date's read. Below, suggestions from your
 * home city. A favorite's own page lists everything, home and away.
 */
export function FavoritesScreen() {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const metro = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const nights = useMemo(() => yourNights(log), [log]);
  const [query, setQuery] = useState('');
  const [upcoming, setUpcoming] = useState<CrowdEvent[]>([]);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    let current = true;
    const today = todayIn(metro);
    getEventsBetween(metro.id, today, addDays(today, AHEAD_DAYS)).then((list) => current && setUpcoming(list));
    getRatedDates(metro.id).then((rows) => {
      if (current) setRatings(new Map(rows.map((row) => [row.date, row.rating])));
    });
    return () => {
      current = false;
    };
  }, [metro.id]);

  const nextFor = (fav: Favorite): CrowdEvent | undefined => upcoming.find((event) => eventMatches(event, fav));

  const rows = useMemo(() => {
    const list = favorites.map((fav) => ({ fav, next: nextFor(fav) }));
    // Soonest date first; favorites with nothing coming up go after, by name.
    return list.sort((a, b) => {
      if (a.next && b.next) return (a.next.date + (a.next.start ?? '')).localeCompare(b.next.date + (b.next.start ?? ''));
      if (a.next) return -1;
      if (b.next) return 1;
      return a.fav.label.localeCompare(b.fav.label);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites, upcoming]);

  const suggestions = useMemo(() => suggestionsFor(metro.id, favorites), [metro.id, favorites]);

  // Search: favorites, suggestions, and anything in the log by name.
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
    suggestionsFor(metro.id, []).forEach(add);
    for (const night of nights) {
      if (night.kind === 'show') night.sides.forEach((side) => add(favoriteFor('artist', side)));
      else if (night.kind === 'festival') add(favoriteFor('festival', night.title));
      else night.tags.forEach((tag) => tag !== 'Concerts' && add(favoriteFor('team', tag)));
      if (night.venue) add(favoriteFor('venue', night.venue));
    }
    return out;
  }, [q, favorites, nights, metro.id]);

  const countFor = (fav: Favorite) => nights.filter((night) => nightMatches(night, fav)).length;

  return (
    <div className="screen page">
      <h1 className="page-title">Favorites</h1>
      <div className="search-box">
        <label className="search-field">
          <SearchIcon />
          <input
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

      {q ? (
        <section className="you-block" aria-label="Results">
          {found.length === 0 ? (
            <div className="card empty-card">
              <div className="card-title">Nothing matches “{query}”.</div>
            </div>
          ) : (
            <ul className="log-list">
              {found.map((fav) => (
                <FavRow key={favoriteKey(fav)} fav={fav} sub={subFor(fav, countFor(fav))} on={favorites.some((f) => favoriteKey(f) === favoriteKey(fav))} />
              ))}
            </ul>
          )}
        </section>
      ) : (
        <>
          <section className="you-block" aria-labelledby="next-up-heading">
            <h2 id="next-up-heading" className="you-heading">
              Next up
            </h2>
            {rows.length === 0 ? (
              <div className="card empty-card">
                <div className="card-title">Nothing followed yet.</div>
              </div>
            ) : (
              <ul className="log-list">
                {rows.map(({ fav, next }) => (
                  <li key={favoriteKey(fav)}>
                    <Link to={favPath(fav)} className="log-row fav-row">
                      <span className={`fav-mark fav-${fav.kind}`} aria-hidden>
                        {favoriteMark(fav)}
                      </span>
                      <span className="log-main">
                        <span className="log-title">{fav.label}</span>
                        <span className="log-facts">
                          {next
                            ? `${listTitle(next)} · ${shortLocalDate(next.date)}${next.start ? ` · ${clockTime(next.start)}` : ''}`
                            : `Nothing in ${metro.name} in the next two weeks`}
                        </span>
                      </span>
                      {next && <Read rating={ratings.get(next.date) ?? null} />}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {suggestions.length > 0 && (
            <section className="you-block" aria-labelledby="suggest-heading">
              <h2 id="suggest-heading" className="you-heading">
                In {metro.name}
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
    </div>
  );
}

function subFor(fav: Favorite, count: number): string {
  const kind = { team: 'Team', artist: 'Artist', venue: 'Venue', festival: 'Festival' }[fav.kind];
  return count > 0 ? `${kind} · ${count} ${count === 1 ? 'night' : 'nights'}` : kind;
}

export function favPath(fav: Pick<Favorite, 'kind' | 'id'>): string {
  return `/favorites/${fav.kind}/${encodeURIComponent(fav.id)}`;
}

/** A favorite in a list, with a Follow / Following toggle on the right. */
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
      <button
        type="button"
        className={`fav-toggle${on ? ' on' : ''}`}
        aria-pressed={on}
        onClick={() => toggleFavorite(fav)}
      >
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
