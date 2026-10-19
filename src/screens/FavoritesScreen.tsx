import { useMemo, useState, useSyncExternalStore } from 'react';
import { TypeIcon } from '../components/TypeIcon';
import { favoriteTypeKey } from '../map/typeIcons';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  entryMatches,
  favoriteFor,
  favoriteKey,
  favoritesOf,
  getPersonalLog,
  subscribePersonalLog,
  suggestionsFor,
  toggleFavorite,
  yourEntries,
  type Favorite,
  type FavoriteKind,
} from '../data';
import { FavoriteBadge, favoriteName } from '../components/FavoriteBadge';
import { getHomeId, subscribeHome } from '../lib/homeCity';

const KINDS: { kind: FavoriteKind; label: string }[] = [
  { kind: 'team', label: 'Team' },
  { kind: 'artist', label: 'Artist' },
  { kind: 'venue', label: 'Venue' },
  { kind: 'festival', label: 'Festival' },
];

/**
 * The Faves picker (build notes 3, 4.5; Kylie, Oct 9, C076): search, your Faves first, then suggestions in the home
 * city, Follow pills, Done. Reached from /favorites/edit (the Following sheet's Add row, the empty state's Add a
 * Fave) and the Settings "Edit favorites" dropdown. The schedule itself is the Following tab's Faves timeline
 * (Kylie's redesign, Oct 19, 2026).
 */
export function FavoritesScreen({ embedded = false, edit = false }: { embedded?: boolean; /** The picker only (the Settings "Edit favorites" dropdown; Kylie, Oct 17): never the schedule. */ edit?: boolean }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [query, setQuery] = useState('');
  // The picker stays open until Done, even after the first follow.
  const [picking, setPicking] = useState(() => edit || pathname.endsWith('/edit') || favorites.length === 0);

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
    // The picker page returns to the Faves tab (Kylie, Oct 17: the tab keeps its sub-tabs).
    if (pathname.endsWith('/edit')) navigate('/following', { replace: true });
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
          <FavRow key={favoriteKey(fav)} fav={fav} shown={found} sub={subFor(fav, countFor(fav))} on={isOn(fav)} />
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
    const picker = (
      <>
        {search}
        {results || (
          <>
            {/* Sections by kind (Kylie, Oct 9, C076): what you follow first, then the rest in your home city. */}
            {KINDS.map(({ kind, label }) => {
              const on = favorites.filter((fav) => fav.kind === kind);
              const more = suggestions.filter((fav) => fav.kind === kind);
              if (on.length === 0 && more.length === 0) return null;
              const listed = [...on, ...more];
              return (
                <section key={kind} className="you-block" aria-labelledby={`pick-${kind}`}>
                  <h2 id={`pick-${kind}`} className="you-heading">
                    {label}s
                  </h2>
                  <ul className="log-list">
                    {on.map((fav) => (
                      <FavRow key={favoriteKey(fav)} fav={fav} shown={listed} sub={subFor(fav, countFor(fav))} on />
                    ))}
                    {more.map((fav) => (
                      <FavRow key={favoriteKey(fav)} fav={fav} shown={listed} sub={subFor(fav, countFor(fav))} on={false} />
                    ))}
                  </ul>
                </section>
              );
            })}
          </>
        )}
        {/* Done stays in reach while the list scrolls (C077). Inside the Settings dropdown there is nothing to return to. */}
        {!edit && (
          <div className="picker-done">
            <button type="button" className="gold-button" onClick={done} disabled={favorites.length === 0}>
              Done
            </button>
          </div>
        )}
      </>
    );
    if (edit) return picker;
    if (embedded) {
      return (
        <>
          <h1 className="page-title">{favorites.length === 0 ? 'Pick your favorites' : 'Favorites'}</h1>
          {picker}
        </>
      );
    }
    return (
      <div className="screen page">
        <h1 className="page-title">{favorites.length === 0 ? 'Pick your favorites' : 'Favorites'}</h1>
        {picker}
      </div>
    );
  }

  // Dates, in order; each row keeps its own read (Kylie's answer, build notes 3, 8.1, item 21: no heading read).
  // The schedule left this screen on Oct 19, 2026 (Kylie's Following redesign: the Faves timeline and its filter live
  // in FollowingScreen). What remains is the picker, reached from /favorites/edit and the Settings dropdown.
  return <Navigate to="/following" replace />;
}

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

/**
 * A favorite in a list, with a Follow / Following pill on the right. The badge carries the sport icon now, so a team's
 * name has none beside it (build 6, item 9a); an artist or festival keeps its type icon.
 */
function FavRow({ fav, shown, sub, on }: { fav: Favorite; /** The favorites in this list, for the set-aware badge. */ shown: readonly Favorite[]; sub: string; on: boolean }) {
  return (
    <li className="fav-li">
      <Link to={favPath(fav)} className="log-row fav-row" aria-label={favoriteName(fav)}>
        <FavoriteBadge fav={fav} shown={shown} size="mark" />
        <span className="log-main">
          <span className="log-title">
            {fav.kind !== 'team' && <TypeIcon typeKey={favoriteTypeKey(fav)} size={18} />}
            {fav.label}
          </span>
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
