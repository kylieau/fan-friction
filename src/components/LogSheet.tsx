import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { AddEntryScreen } from '../screens/AddEntryScreen';
import { favPath } from '../screens/FavoritesScreen';
import { LogRow } from './LogRow';
import { FavoriteBadge, favoriteName } from './FavoriteBadge';
import { SearchIcon } from './Icons';
import {
  eventMatches,
  favoriteKey,
  favoriteOfficialName,
  favoritesOf,
  getCityDate,
  getPersonalLog,
  searchEvents,
  searchFavoriteRecords,
  subscribePersonalLog,
  todayIn,
  yourEntries,
  type CrowdEvent,
  type Favorite,
} from '../data';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { recentOpened } from '../lib/openedEvents';
import { addDays, longLocalDate, shortLocalDate } from '../lib/dates';
import { openedMetroId } from '../lib/view';

/**
 * The Log an event sheet (build 7, §3.2; mock 04; Kylie, Oct 21, 2026), opened by the tab bar's "+". Top to bottom: a
 * compact search (typing turns the sheet into results, mock 05), the context line (today, the city), "Happening
 * now · Today" (your own plan pinned first, then today's events from your Faves, then the rest of the city's day,
 * a lean from the research), "Recent" (events you opened or logged in the last few days, for back-filling), and
 * "Not here? Add it yourself", the existing hand-typed path. Each row carries one "+" (`LogRow`); opening the sheet
 * never logs anything. Low signal: today's list is the catalog cache the app already keeps.
 */
export function LogSheet({ onClose }: { onClose: () => void }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  // The city on screen when it is not home (Explore's switcher), else home (Lean: no new picker).
  const cityId = openedMetroId() ?? homeId ?? DEFAULT_METRO.id;
  const metro = METROS[cityId] ?? DEFAULT_METRO;
  const today = todayIn(metro);
  const [query, setQuery] = useState('');
  const trimmed = query.trim();
  const [adding, setAdding] = useState(false);
  const [todayEvents, setTodayEvents] = useState<CrowdEvent[] | null>(null);
  const [recent, setRecent] = useState<{ event: CrowdEvent; lead: string }[]>([]);
  const [hits, setHits] = useState<CrowdEvent[] | null>(null);
  const favorites = useMemo(() => favoritesOf(log), [log]);

  // Escape closes the sheet, unless a sheet above it (Stub it, the Add card) is open: that one takes the key.
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key !== 'Escape') return;
      if (document.querySelectorAll('.sheet-backdrop, .home-backdrop').length > 1) return;
      onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Today in this city, from the cache the app already keeps (warmed at open; Workbox serves it offline).
  useEffect(() => {
    let current = true;
    getCityDate(cityId, today)
      .then((day) => current && setTodayEvents([...day.events, ...(day.furtherOut ?? [])]))
      .catch(() => current && setTodayEvents([]));
    return () => {
      current = false;
    };
  }, [cityId, today]);

  // Recent: the events you opened on this device in the last week, newest first, plus stubs you logged this week.
  useEffect(() => {
    let current = true;
    const floor = addDays(today, -7);
    // Opened on this device, plus stubs logged this week (a row's "+" never opens the page), newest first.
    const loggedRows = yourEntries(log)
      .filter((entry) => entry.eventId && entry.metroId && entry.when.precision === 'day' && entry.when.sort >= floor && entry.when.sort <= today)
      .map((entry) => ({ eventId: entry.eventId!, metroId: entry.metroId!, date: entry.when.sort, at: entry.updatedAt ?? '' }));
    const merged = [...recentOpened(), ...loggedRows].filter((row, i, all) => all.findIndex((r) => r.eventId === row.eventId) === i);
    const opened = merged.filter((row) => row.date >= floor && row.date <= today && row.eventId && !(todayEvents ?? []).some((e) => e.id === row.eventId));
    const dates = [...new Map(opened.map((row) => [`${row.metroId}|${row.date}`, row])).values()];
    Promise.all(dates.map((row) => getCityDate(row.metroId, row.date).catch(() => null))).then((days) => {
      if (!current) return;
      const byId = new Map<string, CrowdEvent>();
      for (const day of days) for (const event of [...(day?.events ?? []), ...(day?.furtherOut ?? [])]) byId.set(event.id, event);
      const rows = opened.flatMap((row) => {
        const event = byId.get(row.eventId);
        if (!event) return [];
        const dayWord = row.date === addDays(today, -1) ? 'Yesterday' : shortLocalDate(row.date);
        const logged = yourEntries(log).some((entry) => entry.eventId === event.id);
        return [{ event, lead: `${dayWord} · ${logged ? 'You logged it' : 'You opened it'}` }];
      });
      setRecent(rows.slice(0, 6));
    });
    return () => {
      current = false;
    };
  }, [today, todayEvents, log]);

  // Typing: event results across every city, nearest dates first, and the teams, artists and venues the words name.
  useEffect(() => {
    if (trimmed.length < 2) {
      setHits(null);
      return;
    }
    let current = true;
    setHits(null);
    searchEvents(homeId, trimmed).then((list) => current && setHits(list));
    return () => {
      current = false;
    };
  }, [homeId, trimmed]);
  const records: Favorite[] = useMemo(() => (trimmed.length < 2 ? [] : searchFavoriteRecords(trimmed, favorites, yourEntries(log), homeId).slice(0, 5)), [trimmed, favorites, log, homeId]);

  // Happening now: your own plan first, then your Faves' events, then the rest of the day, each in start order.
  const happening = useMemo(() => {
    const list = todayEvents ?? [];
    const rank = (event: CrowdEvent) => (log.plans.some((p) => p.eventId === event.id) ? 0 : favorites.some((fav) => eventMatches(event, fav)) ? 1 : 2);
    return [...list].sort((a, b) => rank(a) - rank(b) || (a.start ?? '').localeCompare(b.start ?? '')).slice(0, 8);
  }, [todayEvents, log, favorites]);

  const close = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    onClose();
  };

  return (
    <div className="home-backdrop sheet-backdrop" role="dialog" aria-modal="true" aria-label="Log an event" onClick={onClose}>
      <div className="action-sheet log-sheet" onClick={(ev) => ev.stopPropagation()}>
        <span className="sheet-handle" aria-hidden />
        <div className="log-sheet-head">
          <h2 className="stub-sheet-title">Log an event</h2>
          <button type="button" className="round-button" aria-label="Close" onClick={close}>
            <span aria-hidden>✕</span>
          </button>
        </div>
        {adding ? (
          <AddEntryScreen embedded />
        ) : (
          <div className="log-sheet-body">
            <div className="search-box">
              <label className="search-field">
                <SearchIcon />
                <input type="search" value={query} onChange={(ev) => setQuery(ev.target.value)} placeholder="Search a team, artist or venue" aria-label="Search a team, artist or venue" autoFocus />
              </label>
            </div>
            {trimmed.length >= 2 ? (
              <>
                <h3 className="log-sheet-band">Results</h3>
                {hits === null ? (
                  <p className="you-fine">Searching…</p>
                ) : hits.length === 0 && records.length === 0 ? (
                  <p className="you-fine">Nothing listed matches that.</p>
                ) : (
                  <ul className="log-list card log-event-list">
                    {hits.map((event) => (
                      <li key={event.id}>
                        <LogRow event={event} onOpen={onClose} />
                      </li>
                    ))}
                    {records.map((fav) => (
                      <li key={favoriteKey(fav)}>
                        <Link to={favPath(fav)} className="log-event-row log-event-record" aria-label={favoriteName(fav)} onClick={onClose}>
                          <FavoriteBadge fav={fav} shown={records} size="mark" />
                          <span className="log-event-words">
                            <span className="follow-lead">
                              <span className="follow-lead-text">{fav.kind === 'team' ? 'Team' : fav.kind === 'artist' ? 'Artist' : fav.kind === 'venue' ? 'Venue' : 'Festival'}</span>
                            </span>
                            <span className="log-event-title">{favoriteOfficialName(fav)}</span>
                          </span>
                          <span className="add-record-chev" aria-hidden>
                            ›
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <>
                <p className="log-sheet-context">
                  Today · {longLocalDate(today)} · {metro.name}
                </p>
                {happening.length > 0 && (
                  <>
                    <h3 className="log-sheet-band">Happening now · Today</h3>
                    <ul className="log-list card log-event-list">
                      {happening.map((event) => (
                        <li key={event.id}>
                          <LogRow event={event} onOpen={onClose} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {recent.length > 0 && (
                  <>
                    <h3 className="log-sheet-band">Recent</h3>
                    <ul className="log-list card log-event-list">
                      {recent.map((row) => (
                        <li key={row.event.id}>
                          <LogRow event={row.event} lead={row.lead} onOpen={onClose} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {todayEvents !== null && happening.length === 0 && recent.length === 0 && <p className="you-fine">Nothing listed today in {metro.name}.</p>}
              </>
            )}
            <button type="button" className="link-button log-sheet-add" onClick={() => setAdding(true)}>
              Not here? Add it yourself
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
