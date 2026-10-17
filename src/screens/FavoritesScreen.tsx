import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
// The schedule's reach and its row shape live in useFavoriteRows (build 6, item 7).
import { TypeIcon } from '../components/TypeIcon';
import { favoriteTypeKey } from '../map/typeIcons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SearchIcon } from '../components/Icons';
import { SearchButton } from '../components/SearchButton';
import { ReadTile as Read } from '../components/ReadTile';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  entryMatches,
  favoriteFor,
  favoriteKey,
  favoriteMark,
  favoritesOf,
  getPersonalLog,
  nightKey,
  scoresForNights,
  subscribePersonalLog,
  suggestionsFor,
  toggleFavorite,
  yourEntries,
  type Favorite,
  type FavoriteKind,
  gameEventId,
} from '../data';
import { dayBandLabel, shortLocalDate } from '../lib/dates';
import { splitTitleLabel } from '../lib/eventTitle';
import { useFavoriteRows, type ScheduleRow } from '../components/useFavoriteRows';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { datePath, eventPath } from '../lib/view';
import { LabelLine } from '../components/TitleText';
import { ListBand } from '../components/ListBand';

/** How far ahead the schedule looks: the schedule archive's reach. */
const AHEAD_DAYS = 14;

const KINDS: { kind: FavoriteKind; label: string }[] = [
  { kind: 'team', label: 'Team' },
  { kind: 'artist', label: 'Artist' },
  { kind: 'venue', label: 'Venue' },
  { kind: 'festival', label: 'Festival' },
];

/**
 * Faves (build notes 3, 4.5; docs/design/build3/5-favorites.png): the teams, artists, venues and
 * festivals you follow as one schedule by date. A team tag on the left, the title over the venue
 * and time, and the small read box with its word at the end. Two tap zones: the row opens the
 * event page, the read box the date page; a date outside home wears its city's code over the box.
 * Favorites with nothing coming are named in one line. With no favorites yet, or from Edit, the
 * tab is a picker: search, suggestions, Follow pills, Done. A favorite's own page has the rest.
 */
export function FavoritesScreen({ embedded = false }: { embedded?: boolean }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const home = METROS[homeId ?? DEFAULT_METRO.id] ?? DEFAULT_METRO;
  const favorites = useMemo(() => favoritesOf(log), [log]);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [query, setQuery] = useState('');
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());
  // The picker stays open until Done, even after the first follow.
  const [picking, setPicking] = useState(() => pathname.endsWith('/edit') || favorites.length === 0);
  // The schedule rows (shared with the Following timeline since build 6, item 7).
  const { rows, today } = useFavoriteRows(favorites, home, AHEAD_DAYS);

  // The read of each date, keyed by city and date (C066 / 5.2).
  useEffect(() => {
    let current = true;
    scoresForNights(rows.flatMap((row) => (row.metroId ? [{ metroId: row.metroId, date: row.date }] : []))).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [rows]);

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
      </>
    );
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
  const byDate = new Map<string, ScheduleRow[]>();
  for (const row of rows) byDate.set(row.date, [...(byDate.get(row.date) ?? []), row]);
  const quiet = favorites.filter((fav) => !rows.some((row) => favoriteKey(row.fav) === favoriteKey(fav)));

  const body = (
    <>
      {/* Your favorites as their badges, each opening its page, then Edit (Kylie, Oct 15: "Edit" alone hid the way
          to each favorite and left a gap under the switch). */}
      <div className="fav-strip">
        <div className="fav-strip-marks">
          {favorites.map((fav) => (
            <Link key={favoriteKey(fav)} to={favPath(fav)} className={`fav-tag fav-tag-${fav.kind}`} aria-label={fav.label}>
              {favoriteMark(fav)}
            </Link>
          ))}
        </div>
        <button type="button" className="link-button you-edit" onClick={() => setPicking(true)}>
          Edit
        </button>
      </div>
      {byDate.size === 0 ? (
        <div className="card empty-card">
          <div className="card-title">Nothing in the next two weeks.</div>
        </div>
      ) : (
        [...byDate.entries()].map(([date, list]) => (
          <section key={date} className="you-block fav-day" aria-label={shortLocalDate(date)}>
            <ListBand as="h2" label={dayBandLabel(date, today)} />
            <ul className="log-list">
              {list.map((row) => (
                <li key={row.key}>
                  <ScheduleRowView row={row} rating={row.metroId ? (ratings.get(nightKey(row.metroId, row.date)) ?? null) : null} home={home.id} />
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
      {quiet.length > 0 && (
        <Link to="/favorites/edit" className="text-link fav-quiet">
          Nothing coming: {quiet.map((fav) => fav.label).join(', ')} ›
        </Link>
      )}
    </>
  );
  if (embedded) return body;
  return (
    <div className="screen page">
      <div className="you-header">
        <h1 className="page-title">Favorites</h1>
        <SearchButton />
      </div>
      {body}
    </div>
  );
}

/**
 * One row, two tap zones (build notes 3, 4.5): the tag and the words open the event page; the read box,
 * with its city's code over it when the date is not at home, opens the date page. An uncovered away
 * game wears the Away tag; its words open a page built from the game, so it can be stubbed (Kylie, Oct 15).
 */
function ScheduleRowView({ row, rating, home }: { row: ScheduleRow; rating: number | null; home: string }) {
  const split = splitTitleLabel(row.title);
  const code = row.metroId && row.metroId !== home ? METROS[row.metroId]?.code : null;
  const main = (
    <>
      <span className={`fav-tag fav-tag-${row.fav.kind}`} aria-hidden>
        {favoriteMark(row.fav)}
      </span>
      <span className="log-main">
        {/* The title on one line; the label on its own line under it (labels r3), never after a dot. */}
        <span className="log-title fav-one-line">
          <span className="fav-title-name">{split.name}</span>
        </span>
        {split.label && <LabelLine label={split.label} />}
        <span className="log-facts">{row.facts}</span>
      </span>
    </>
  );
  return (
    <div className="fav-sched-row">
      {row.event ? (
        <Link to={eventPath(row.event.id, row.event.metroId)} className="fav-sched-main">
          {main}
        </Link>
      ) : row.link ? (
        <Link to={eventPath(row.link.game.eventId ?? gameEventId(row.link.game), row.metroId ?? home)} state={{ game: row.link }} className="fav-sched-main">
          {main}
        </Link>
      ) : (
        <span className="fav-sched-main">{main}</span>
      )}
      {row.event && row.metroId ? (
        <Link to={datePath(row.date, row.metroId, row.event.id)} className="fav-sched-read" aria-label={`The read for ${shortLocalDate(row.date)}${code ? ` in ${METROS[row.metroId]?.name}` : ''}`}>
          {code && <span className="fav-sched-code">{code}</span>}
          <Read rating={rating} />
          <span className="fav-sched-chevron" aria-hidden>
            ›
          </span>
        </Link>
      ) : (
        <span className="fav-sched-read">{row.away ? <span className="away-tag">Away</span> : <Read rating={rating} />}</span>
      )}
    </div>
  );
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
          <span className="log-title">
            <TypeIcon typeKey={favoriteTypeKey(fav)} size={18} />
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
