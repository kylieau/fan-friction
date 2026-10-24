import { useMemo, useState, useSyncExternalStore } from 'react';
import { TypeIcon } from '../components/TypeIcon';
import { favoriteTypeKey } from '../map/typeIcons';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, SearchIcon } from '../components/Icons';
import { DEFAULT_METRO, METROS } from '../config/metros';
import {
  entryMatches,
  entryTeams,
  favoriteFor,
  favoriteForTeam,
  favoriteKey,
  favoriteLongName,
  favoriteOfficialName,
  favoritesOf,
  getPersonalLog,
  isCollegeLeague,
  subscribePersonalLog,
  suggestionsFor,
  toggleFavorite,
  yourEntries,
  type Favorite,
  type FavoriteKind,
  TEAMS,
  teamLongName,
} from '../data';
import { FavoriteBadge, favoriteName } from '../components/FavoriteBadge';
import { useArtistGenres } from '../components/useArtistGenres';
import { getHomeId, subscribeHome } from '../lib/homeCity';

/** The leagues a Suggested row draws from (Kylie, Oct 19: the home city's major-league teams). */
/** How many teams the sheet suggests (build 7.1, item 2: a short list). */
const SUGGESTED_MAX = 5;
const MAJOR_LEAGUES = new Set(['MLB', 'NBA', 'WNBA', 'NFL', 'NHL', 'MLS', 'NWSL', 'PWHL', 'CFL', 'Liga MX']);

/**
 * The order the browse list reads in (gap review, judgment call 5; Kylie, Oct 19, 2026: a fixed order, where team
 * counts had put college men's basketball above MLB and the NBA): the big-league sports first, the rest A–Z; within
 * a sport, the top pro leagues in this order, then other pro leagues by size, then the college leagues.
 */
const SPORT_ORDER = ['Football', 'Basketball', 'Baseball', 'Hockey', 'Soccer'];
const LEAGUE_ORDER = ['NFL', 'NBA', 'WNBA', 'MLB', 'NHL', 'PWHL', 'MLS', 'NWSL'];
const rankIn = (list: readonly string[], name: string) => {
  const i = list.indexOf(name);
  return i === -1 ? list.length : i;
};

/** Every team on file as sport → league → teams, for browsing the way a sports site lists them. */
function browseTree(): { sport: string; leagues: { league: string; teams: Favorite[] }[] }[] {
  const bySport = new Map<string, Map<string, Favorite[]>>();
  for (const team of Object.values(TEAMS)) {
    const sport = team.sport.charAt(0).toUpperCase() + team.sport.slice(1);
    const leagues = bySport.get(sport) ?? new Map<string, Favorite[]>();
    leagues.set(team.league, [...(leagues.get(team.league) ?? []), favoriteForTeam(team)]);
    bySport.set(sport, leagues);
  }
  return [...bySport.entries()]
    .sort((a, b) => rankIn(SPORT_ORDER, a[0]) - rankIn(SPORT_ORDER, b[0]) || a[0].localeCompare(b[0]))
    .map(([sport, leagues]) => ({
      sport,
      leagues: [...leagues.entries()]
        .sort(
          (a, b) =>
            Number(isCollegeLeague(a[0])) - Number(isCollegeLeague(b[0])) ||
            rankIn(LEAGUE_ORDER, a[0]) - rankIn(LEAGUE_ORDER, b[0]) ||
            b[1].length - a[1].length ||
            a[0].localeCompare(b[0]),
        )
        .map(([league, teams]) => ({ league, teams: teams.sort((a, b) => teamLongName(TEAMS[a.teamId!]).localeCompare(teamLongName(TEAMS[b.teamId!]))) })),
    }));
}

/** Every name a favorite is found by, lower-cased: its label and long name, and a team's short name, full name and aliases. */
function searchNames(fav: Favorite): string[] {
  const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
  return [fav.label, favoriteLongName(fav), ...(team ? [team.shortName, team.name, ...(team.aliases ?? [])] : [])].map((n) => n.toLowerCase());
}

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
  // The genre word under a followed artist (Kylie, Oct 19); an artist not yet followed, or with no listing, reads "Artist".
  const genres = useArtistGenres(favorites);
  const entries = useMemo(() => yourEntries(log), [log]);
  const [query, setQuery] = useState('');
  // The picker stays open until Done, even after the first follow.
  const [picking, setPicking] = useState(() => edit || pathname.endsWith('/edit') || favorites.length === 0);

  // Suggested (build 7.1, item 2): in the sheet, the teams she has seen and does not follow, most seen first, a short
  // list; with none seen yet, and on the first-run picker, the home city's major-league teams (Kylie, Oct 19).
  const seenTeams = useMemo(() => {
    const counts = new Map<string, { fav: Favorite; n: number }>();
    for (const entry of entries) {
      if (entry.kind !== 'game') continue;
      // Both sides of every game she logged (the same credit Your Stubs' team filter uses).
      for (const name of entryTeams(entry)) {
        // A credited tag can repeat its program code ("UCLA MBB MBB"); one copy finds the team (Codex, 11 (c) review).
        const fav = favoriteFor('team', name.replace(/\b(\S+)(\s+\1)+$/, '$1'));
        if (!fav.teamId || favorites.some((f) => favoriteKey(f) === favoriteKey(fav))) continue;
        const was = counts.get(fav.teamId);
        counts.set(fav.teamId, { fav, n: (was?.n ?? 0) + 1 });
      }
    }
    return [...counts.values()].sort((a, b) => b.n - a.n || favoriteOfficialName(a.fav).localeCompare(favoriteOfficialName(b.fav))).map((row) => row.fav).slice(0, SUGGESTED_MAX);
  }, [entries, favorites]);
  const homeSuggested = useMemo(() => suggestionsFor(home.id, favorites).filter((fav) => fav.teamId && MAJOR_LEAGUES.has(TEAMS[fav.teamId]?.league ?? '')).slice(0, edit ? SUGGESTED_MAX : undefined), [home.id, favorites, edit]);
  const suggested = edit && seenTeams.length > 0 ? seenTeams : homeSuggested;
  const [browsing, setBrowsing] = useState(!edit);
  // Every team on file by sport, then league, each league's teams A–Z by their written name.
  const browse = useMemo(() => browseTree(), []);
  const [openLeague, setOpenLeague] = useState<string | null>(null);
  const isOn = (fav: Favorite) => favorites.some((f) => favoriteKey(f) === favoriteKey(fav));
  const countFor = (fav: Favorite) => entries.filter((entry) => entryMatches(entry, fav)).length;

  // Search: favorites, every home-city record, and names from the log.
  const q = query.trim().toLowerCase();
  const found = useMemo(() => {
    if (!q) return [];
    const seen = new Set<string>();
    const out: Favorite[] = [];
    // A favorite matches on any name it is known by: the words on its row, the stored short and full names and
    // the aliases (found Oct 19, 2026: "UCLA Football", the words on screen, matched nothing and offered a ghost).
    const add = (fav: Favorite) => {
      const key = favoriteKey(fav);
      if (!seen.has(key) && searchNames(fav).some((name) => name.includes(q))) {
        seen.add(key);
        out.push(fav);
      }
    };
    favorites.forEach(add);
    suggestionsFor(home.id, []).forEach(add);
    Object.values(TEAMS).forEach((team) => add(favoriteForTeam(team)));
    for (const entry of entries) {
      if (entry.kind === 'show') entry.sides.forEach((side) => add(favoriteFor('artist', side)));
      else if (entry.kind === 'festival') add(favoriteFor('festival', entry.title));
      else entry.tags.forEach((tag) => tag !== 'Concerts' && add(favoriteFor('team', tag)));
      if (entry.venue) add(favoriteFor('venue', entry.venue));
    }
    return out;
  }, [q, favorites, entries, home.id]);

  const exactMatch = found.some((fav) => searchNames(fav).includes(q));

  const done = () => {
    setPicking(false);
    setQuery('');
    // The picker page returns to the Faves tab (Kylie, Oct 17: the tab keeps its sub-tabs).
    if (pathname.endsWith('/edit')) navigate('/upcoming', { replace: true });
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
          placeholder="Team, artist, or venue"
          aria-label="Find a team, artist, or venue"
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
          <FavRow key={favoriteKey(fav)} fav={fav} shown={found} sub={subFor(fav, countFor(fav), genres.get(favoriteKey(fav)), edit)} on={isOn(fav)} remove={edit && isOn(fav)} />
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
            {/* Your Faves first, by kind (Kylie, Oct 9, C076); in the sheet grouped "Teams · 4" with a minus each (build 7.1, item 2). */}
            {edit && favorites.length > 0 && <h2 className="settings-heading settings-group-label pick-faves-head">Your Faves</h2>}
            {KINDS.map(({ kind, label }) => {
              // Most seen first, then the official name (build 7, §3.11; the same order as the favorites section and You's row).
              const on = favorites.filter((fav) => fav.kind === kind).sort((a, b) => countFor(b) - countFor(a) || favoriteOfficialName(a).localeCompare(favoriteOfficialName(b)));
              if (on.length === 0) return null;
              return (
                <section key={kind} className="you-block" aria-labelledby={`pick-${kind}`}>
                  <h2 id={`pick-${kind}`} className={edit ? 'pick-group-head' : 'you-heading'}>
                    {edit ? `${label}s · ${on.length}` : `Your ${label}s`}
                  </h2>
                  <ul className={edit ? 'log-list card pick-list' : 'log-list'}>
                    {on.map((fav) => (
                      <FavRow key={favoriteKey(fav)} fav={fav} shown={on} sub={subFor(fav, countFor(fav), genres.get(favoriteKey(fav)), edit)} on remove={edit} />
                    ))}
                  </ul>
                </section>
              );
            })}
            {/* A short Suggested row: the home city's major-league teams (Kylie, Oct 19: not the whole city). */}
            {suggested.length > 0 && (
              <section className="you-block" aria-labelledby="pick-suggested">
                <h2 id="pick-suggested" className={edit ? 'settings-heading settings-group-label' : 'you-heading'}>
                  {edit && seenTeams.length > 0 ? 'Suggested' : `Suggested in ${home.name}`}
                </h2>
                <ul className={edit ? 'log-list card pick-list' : 'log-list'}>
                  {suggested.map((fav) => (
                    <FavRow key={favoriteKey(fav)} fav={fav} shown={suggested} sub={subFor(fav, countFor(fav), genres.get(favoriteKey(fav)), edit)} on={false} />
                  ))}
                </ul>
              </section>
            )}
            {/* Browse by sport, then league, the way a sports site lists them (Kylie, Oct 19); a league opens on a tap.
                Concerts will browse by genre once artists carry one (artist-genres research). */}
            <section className="you-block" aria-labelledby="pick-browse">
              {/* Collapsed under Suggested in the sheet (build 7.1, item 2); open on the first-run picker. */}
              {edit ? (
                <button type="button" id="pick-browse" className="settings-row settings-link settings-group-row pick-browse-toggle" aria-expanded={browsing} onClick={() => setBrowsing(!browsing)}>
                  <span className="settings-row-title">Browse by League</span>
                  <span className={`settings-section-chevron${browsing ? ' open' : ''}`} aria-hidden>
                    <ChevronDown />
                  </span>
                </button>
              ) : (
                <h2 id="pick-browse" className="you-heading">
                  Browse by League
                </h2>
              )}
              {browsing && browse.map(({ sport, leagues }) => (
                <div key={sport} className="browse-sport">
                  <h3 className="you-heading sheet-heading">{sport}</h3>
                  <ul className="log-list card browse-list">
                    {leagues.map(({ league, teams }) => {
                      const open = openLeague === league;
                      return (
                        <li key={league} className="browse-league">
                          <button type="button" className="browse-league-row" aria-expanded={open} onClick={() => setOpenLeague(open ? null : league)}>
                            <span className="log-title">{league}</span>
                            <span className="log-facts">
                              {teams.length} {teams.length === 1 ? 'team' : 'teams'}
                            </span>
                            <span className={`browse-chevron${open ? ' open' : ''}`} aria-hidden>
                              <ChevronDown />
                            </span>
                          </button>
                          {open && (
                            <ul className="log-list">
                              {teams.map((fav) => (
                                <FavRow key={favoriteKey(fav)} fav={fav} shown={teams} sub={subFor(fav, countFor(fav), genres.get(favoriteKey(fav)), edit)} on={isOn(fav)} remove={edit && isOn(fav)} />
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </section>
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
          <h1 className="page-title">{favorites.length === 0 ? 'Pick Your Favorites' : 'Favorites'}</h1>
          {picker}
        </>
      );
    }
    return (
      <div className="screen page">
        <h1 className="page-title">{favorites.length === 0 ? 'Pick Your Favorites' : 'Favorites'}</h1>
        {picker}
      </div>
    );
  }

  // Dates, in order; each row keeps its own read (Kylie's answer, build notes 3, 8.1, item 21: no heading read).
  // The schedule left this screen on Oct 19, 2026 (Kylie's Following redesign: the Faves timeline and its filter live
  // in FollowingScreen). What remains is the picker, reached from /favorites/edit and the Settings dropdown.
  return <Navigate to="/upcoming" replace />;
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

function subFor(fav: Favorite, count: number, genre?: string, sheet = false): string {
  // The sheet (build 7.1, item 2; Locked, Kylie, Oct 23): a team's league only ("MLB", "College"), no seen count.
  if (sheet) {
    const team = fav.teamId ? TEAMS[fav.teamId] : undefined;
    if (team) return isCollegeLeague(team.league) ? 'College' : team.league;
    return (fav.kind === 'artist' && genre) || KINDS.find((k) => k.kind === fav.kind)?.label || '';
  }
  const kind = (fav.kind === 'artist' && genre) || KINDS.find((k) => k.kind === fav.kind)?.label || '';
  // "Seen N" (build 7, mock 64), the same count as everywhere else.
  return count > 0 ? `${kind} · Seen ${count}` : kind;
}

export function favPath(fav: Pick<Favorite, 'kind' | 'id'>): string {
  return `/favorites/${fav.kind}/${encodeURIComponent(fav.id)}`;
}

/**
 * A favorite in a list, with a Follow / Following pill on the right. The badge carries the sport icon now, so a team's
 * name has none beside it (build 6, item 9a); an artist or festival keeps its type icon.
 */
function FavRow({ fav, shown, sub, on, remove = false }: { fav: Favorite; /** The favorites in this list, for the set-aware badge. */ shown: readonly Favorite[]; sub: string; on: boolean; /** The sheet's Your Faves: a minus that removes it (build 7.1, item 2), not a Following pill. */ remove?: boolean }) {
  return (
    <li className="fav-li">
      <Link to={favPath(fav)} className="log-row fav-row" aria-label={favoriteName(fav)}>
        <FavoriteBadge fav={fav} shown={shown} size="mark" />
        <span className="log-main">
          <span className="log-title">
            {fav.kind !== 'team' && <TypeIcon typeKey={favoriteTypeKey(fav)} size={18} />}
            {favoriteOfficialName(fav)}
          </span>
          <span className="log-facts">{sub}</span>
        </span>
      </Link>
      {remove ? (
        <button type="button" className="outline-remove" aria-label={`Remove ${favoriteOfficialName(fav)}`} onClick={() => toggleFavorite(fav)}>
          <span aria-hidden>−</span>
        </button>
      ) : (
        <button type="button" className={`fav-toggle${on ? ' on' : ''}`} aria-pressed={on} onClick={() => toggleFavorite(fav)}>
          {on ? 'Following' : 'Follow'}
        </button>
      )}
    </li>
  );
}

export { ReadTile as Read } from '../components/ReadTile';
