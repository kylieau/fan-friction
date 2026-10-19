import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from './Icons';
import { ReadTile } from './ReadTile';
import { HiddenLine } from './HiddenLine';
import { TypeIcon } from './TypeIcon';
import { favoriteTypeKey } from '../map/typeIcons';
import { METROS } from '../config/metros';
import {
  favoriteFor,
  favoriteForTeam,
  favoriteKey,
  favoritesOf,
  follow,
  getAccount,
  getPersonalLog,
  PEOPLE_SEARCH_MIN,
  peopleList,
  searchAllDates,
  searchPeople,
  TEAMS,
  toggleFavorite,
  VENUES,
  venueNameOn,
  type DateSearchHit,
  type Favorite,
  type FollowStatus,
  type Profile,
  alwaysShownIds,
  crowdRangeOf,
  followingFeed,
  passesCrowdRange,
  type FeedItem,
} from '../data';
import { longLocalDate } from '../lib/dates';
import { parseTypedDate } from '../lib/searchDate';
import { favPath } from '../screens/FavoritesScreen';
import { FavoriteBadge, favoriteName } from './FavoriteBadge';
import { favoriteLongName } from '../data';

/**
 * The one search, the same from every tab (build notes 2, global search): a team,
 * artist, venue, typed date or person, over every covered city with home first.
 * Three shortcuts under the field. Results grouped Events, Teams, Artists, Venues,
 * People; a team, artist or venue result carries its Follow pill, and a person a
 * Follow button (name and handle only, from three characters).
 */
export function SearchSheet({
  homeId,
  today,
  onPick,
  onPickDate,
  onClose,
}: {
  homeId: string;
  today: string;
  /** A day to open, with the event to select on it when the hit names one. */
  onPick: (date: string, metroId: string, eventId?: string) => void;
  onPickDate: () => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<DateSearchHit[] | null>(null);
  const [people, setPeople] = useState<Profile[] | null>(null);
  const [statuses, setStatuses] = useState<Map<string, FollowStatus>>(new Map());
  const [favorites, setFavorites] = useState<Favorite[]>(() => favoritesOf(getPersonalLog()));
  const trimmed = query.trim();
  const typedDate = parseTypedDate(trimmed, today);
  const signedIn = Boolean(getAccount());

  // The crowd size range applies here too (build 5, item 6, "everywhere"): a date whose matching events are all
  // outside it sits under the Show line. Your stubs and events friends are attending always count.
  const [friends, setFriends] = useState<FeedItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    let current = true;
    if (signedIn) followingFeed(300).then((list) => current && setFriends(list));
    return () => {
      current = false;
    };
  }, [signedIn]);

  useEffect(() => {
    if (trimmed.length < 2) {
      setHits(null);
      return;
    }
    let current = true;
    setHits(null);
    setShowAll(false);
    const log = getPersonalLog();
    const range = crowdRangeOf(log);
    const keep = alwaysShownIds(log, friends);
    searchAllDates(homeId, trimmed, (event) => passesCrowdRange(event, range, keep)).then((list) => current && setHits(list));
    return () => {
      current = false;
    };
  }, [homeId, trimmed, friends]);
  const shownHits = (hits ?? []).filter((hit) => showAll || !hit.hidden);
  const hiddenHits = (hits ?? []).filter((hit) => hit.hidden).length;

  useEffect(() => {
    if (!signedIn || trimmed.length < PEOPLE_SEARCH_MIN) {
      setPeople(null);
      return;
    }
    let current = true;
    searchPeople(trimmed).then((list) => current && setPeople(list));
    return () => {
      current = false;
    };
  }, [signedIn, trimmed]);

  useEffect(() => {
    if (!signedIn) return;
    let current = true;
    peopleList().then((rows) => current && setStatuses(new Map(rows.map((row) => [row.profile.id, row.youFollow]))));
    return () => {
      current = false;
    };
  }, [signedIn]);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const weekend = parseTypedDate('this weekend', today) ?? today;
  const q = trimmed.toLowerCase();

  // Teams, artists and venues: the names the listings matched, plus catalog teams and venues by name.
  const entities = useMemo(() => {
    const out = new Map<string, Favorite>();
    const add = (fav: Favorite) => {
      const key = favoriteKey(fav);
      if (!out.has(key)) out.set(key, fav);
    };
    if (q.length < 2) return [];
    for (const team of Object.values(TEAMS)) {
      if (!team.metroId) continue;
      const names = [team.shortName, team.name, ...(team.aliases ?? [])];
      if (names.some((n) => n.toLowerCase().includes(q))) add(favoriteForTeam(team));
    }
    for (const venue of Object.values(VENUES)) {
      const name = venueNameOn(venue, today);
      if (venue.names.some((n) => n.name.toLowerCase().includes(q))) add(favoriteFor('venue', name));
    }
    for (const hit of hits ?? []) {
      for (const name of hit.matched.split(' · ')) {
        if (!name || !name.toLowerCase().includes(q)) continue;
        const team = favoriteFor('team', name);
        if (team.teamId) {
          add(team);
          continue;
        }
        const venue = favoriteFor('venue', name);
        if (venue.venueId) {
          add(venue);
          continue;
        }
        add(favoriteFor('artist', name));
      }
    }
    return [...out.values()];
  }, [q, hits, today]);

  const byKind = (kind: Favorite['kind']) => entities.filter((fav) => fav.kind === kind);
  const isOn = (fav: Favorite) => favorites.some((f) => favoriteKey(f) === favoriteKey(fav));
  const toggle = (fav: Favorite) => {
    toggleFavorite(fav);
    setFavorites(favoritesOf(getPersonalLog()));
  };

  const group = (title: string, kind: Favorite['kind']) => {
    const rows = byKind(kind);
    if (rows.length === 0) return null;
    return (
      <section className="search-group" aria-label={title}>
        <h3 className="search-group-title">{title}</h3>
        <ul className="log-list">
          {rows.slice(0, 6).map((fav) => (
            <li key={favoriteKey(fav)} className="fav-li">
              <Link to={favPath(fav)} className="log-row fav-row" aria-label={favoriteName(fav)} onClick={onClose}>
                {/* The set is your favorites plus this group's rows (builder's call), so a program reads "UCLA MBB" beside its sibling. */}
                <FavoriteBadge fav={fav} shown={[...favorites, ...rows]} size="mark" />
                <span className="log-main">
                  <span className="log-title">
                    {fav.kind !== 'team' && <TypeIcon typeKey={favoriteTypeKey(fav)} size={18} />}
                    {favoriteLongName(fav)}
                  </span>
                </span>
              </Link>
              <button type="button" className={`fav-toggle${isOn(fav) ? ' on' : ''}`} aria-pressed={isOn(fav)} onClick={() => toggle(fav)}>
                {isOn(fav) ? 'Following' : 'Follow'}
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  };

  const nothing = trimmed.length >= 2 && hits && hits.length === 0 && entities.length === 0 && (people?.length ?? 0) === 0 && !typedDate;

  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-label="Search" onClick={onClose}>
      <div className="home-card search-card" onClick={(ev) => ev.stopPropagation()}>
        <div className="search-box">
          <label className="search-field">
            <SearchIcon />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Teams, artists, venues, dates, people"
              aria-label="Teams, artists, venues, dates, people"
              autoFocus
            />
          </label>
        </div>
        <div className="pill-row search-shortcuts" role="group" aria-label="Shortcuts">
          <button type="button" className="filter-chip" onClick={() => onPick(today, homeId)}>
            Today
          </button>
          <button type="button" className="filter-chip" onClick={() => onPick(weekend, homeId)}>
            This weekend
          </button>
          <button type="button" className="filter-chip" onClick={onPickDate}>
            Pick a date
          </button>
        </div>
        {typedDate && (
          <button type="button" className="famous-row search-date-hit" onClick={() => onPick(typedDate, homeId)}>
            <span className="famous-text">
              <span className="famous-headline">{longLocalDate(typedDate)}</span>
              <span className="famous-meta">Open this date in {METROS[homeId]?.name ?? 'your city'}</span>
            </span>
          </button>
        )}
        {trimmed.length >= 2 && hits && hits.length > 0 && (
          <section className="search-group" aria-label="Events">
            <h3 className="search-group-title">Events</h3>
            <ul className="famous-list search-results">
              {shownHits.slice(0, 12).map((hit) => (
                <li key={`${hit.metroId}-${hit.date}`}>
                  <button type="button" className="famous-row" onClick={() => onPick(hit.date, hit.metroId, hit.eventId)}>
                    <ReadTile rating={hit.rating} />
                    <span className="famous-text">
                      <span className="famous-headline">{hit.headline}</span>
                      <span className="famous-meta">
                        {[longLocalDate(hit.date), hit.metroId !== homeId ? METROS[hit.metroId]?.name : null, hit.matched].filter(Boolean).join(' · ')}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <HiddenLine count={hiddenHits} noun="date" shown={showAll} onToggle={() => setShowAll((v) => !v)} />
          </section>
        )}
        {group('Teams', 'team')}
        {group('Artists', 'artist')}
        {group('Venues', 'venue')}
        {people && people.length > 0 && (
          <section className="search-group" aria-label="People">
            <h3 className="search-group-title">People</h3>
            <ul className="log-list">
              {people.map((profile) => {
                const status = statuses.get(profile.id) ?? 'none';
                return (
                  <li key={profile.id} className="request-row people-row">
                    <span className="avatar avatar-small" aria-hidden>
                      {(profile.displayName ?? profile.handle ?? '?').slice(0, 1).toUpperCase()}
                    </span>
                    <Link to={profile.handle ? `/p/${profile.handle}` : '#'} className="log-main" onClick={onClose}>
                      <span className="log-title">{profile.displayName ?? profile.handle}</span>
                      {profile.handle && <span className="log-facts">@{profile.handle}</span>}
                    </Link>
                    {status === 'none' ? (
                      <button
                        type="button"
                        className="fav-toggle people-pill"
                        onClick={async () => {
                          const result = await follow(profile);
                          if (result === 'pending' || result === 'approved') setStatuses((map) => new Map(map).set(profile.id, result));
                        }}
                      >
                        Follow
                      </button>
                    ) : (
                      <span className="fav-toggle on people-pill">{status === 'pending' ? 'Requested' : 'Following'}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        {nothing && <p className="card-body search-note">Nothing listed matches that.</p>}
        {trimmed.length >= 2 && !hits && <p className="card-body search-note">Searching…</p>}
      </div>
    </div>
  );
}
