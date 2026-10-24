import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { favoriteCitiesOf, getPersonalLog, metrosWithEvents, reorderFavoriteCities, subscribePersonalLog, toggleFavoriteCity } from '../data';
import { METROS, metroMatchesSearch } from '../config/metros';
import { getHomeId, setHomeId, subscribeHome } from '../lib/homeCity';
import { HomeMark } from './AreaSwitcher';
import { SearchIcon } from './Icons';

/**
 * The Favorite Cities page in Profile & Settings (build 7.1, M31 and M11; Kylie, Oct 23, 2026; mocks 20-B, 20b-B,
 * 21-B, board 23): "Favorites · N", one card with Home pinned first (no handle; Change opens the home picker in place)
 * and each favorite with a ≡ handle on the left (drag to reorder; Move Up and Move Down for VoiceOver and the
 * keyboard) and a grey outline − on the right; "Drag to reorder · sets the order in Explore"; Search cities; then
 * "Add a City", compact rows with a blue + (cities with events only; the app never asks for location, Kylie, Oct 5).
 * The saved order is the city switcher's under Home. Never a Change home in the switcher (Oct 9).
 */
export function FavoriteCitiesSection({ openHome = false }: { openHome?: boolean } = {}) {
  const home = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const saved = favoriteCitiesOf(log).filter((id) => id !== home && METROS[id]);
  // The profile card's Change opens straight onto the home picker (M11).
  const [choosingHome, setChoosingHome] = useState(openHome);
  const [query, setQuery] = useState('');
  const typed = query.trim().toLowerCase();

  // The order on screen: the saved one, or the one being dragged until the finger lifts.
  const [order, setOrder] = useState<string[]>(saved);
  const [dragging, setDragging] = useState<string | null>(null);
  const rows = useRef(new Map<string, HTMLLIElement>());
  useEffect(() => {
    if (!dragging) setOrder(saved);
  }, [saved.join(','), dragging]);

  const move = (id: string, to: number) => {
    const list = orderRef.current;
    const from = list.indexOf(id);
    if (from < 0 || to < 0 || to >= list.length || from === to) return;
    const next = [...list];
    next.splice(from, 1);
    next.splice(to, 0, id);
    orderRef.current = next;
    setOrder(next);
    return next;
  };
  const moveAndSave = (id: string, to: number) => {
    const next = move(id, to);
    if (next) reorderFavoriteCities(next);
  };

  // Drag by the handle: the row follows the finger by swapping places as it crosses a neighbour's middle. The moves
  // are heard on the window while a row is held, since React re-inserting the row drops a pointer capture.
  const orderRef = useRef(order);
  orderRef.current = order;
  const savedRef = useRef(saved);
  savedRef.current = saved;
  // One pointer drives a drag: its moves place the row by every row's middle (a fast flick lands where the finger is),
  // the page scrolls near the screen's edges, and only a drag that moved saves, onto the latest saved order (Codex,
  // 11 (b) review). A lost pointer, a released button or the window losing focus ends it.
  const dragPointer = useRef<number | null>(null);
  useEffect(() => {
    if (!dragging) return;
    const id = dragging;
    const startOrder = orderRef.current.join(',');
    const scroller = rows.current.get(id)?.closest('.page') as HTMLElement | null;
    const place = (y: number) => {
      const list = orderRef.current;
      const others = list.filter((other) => other !== id);
      let to = others.length;
      for (let k = 0; k < others.length; k++) {
        const r = rows.current.get(others[k])?.getBoundingClientRect();
        if (r && y < r.top + r.height / 2) {
          to = k;
          break;
        }
      }
      move(id, to);
    };
    const end = () => {
      dragPointer.current = null;
      setDragging(null);
      const now = orderRef.current;
      if (now.join(',') === startOrder) return;
      // Cities saved meanwhile on another device keep their place: only this city's new spot is applied to them.
      const latest = savedRef.current.filter((c) => c !== id);
      const after = now[now.indexOf(id) - 1];
      const at = after ? latest.indexOf(after) + 1 : 0;
      latest.splice(at < 0 ? latest.length : at, 0, id);
      reorderFavoriteCities(latest);
    };
    const onMoveWin = (ev: PointerEvent) => {
      if (dragPointer.current !== null && ev.pointerId !== dragPointer.current) return;
      if (ev.pointerType === 'mouse' && ev.buttons === 0) return end();
      place(ev.clientY);
      if (scroller) {
        const view = scroller.getBoundingClientRect();
        if (ev.clientY < view.top + 60) scroller.scrollTop -= 12;
        else if (ev.clientY > view.bottom - 60) scroller.scrollTop += 12;
      }
    };
    const onUpWin = (ev: PointerEvent) => {
      if (dragPointer.current !== null && ev.pointerId !== dragPointer.current) return;
      place(ev.clientY);
      end();
    };
    window.addEventListener('pointermove', onMoveWin);
    window.addEventListener('pointerup', onUpWin);
    window.addEventListener('pointercancel', end);
    window.addEventListener('blur', end);
    return () => {
      window.removeEventListener('pointermove', onMoveWin);
      window.removeEventListener('pointerup', onUpWin);
      window.removeEventListener('pointercancel', end);
      window.removeEventListener('blur', end);
    };
  }, [dragging]);

  const choices = metrosWithEvents().filter((city) => (choosingHome ? city.id !== home : city.id !== home && !saved.includes(city.id)) && metroMatchesSearch(city, typed));

  return (
    <div className="fav-cities-page">
      <h2 className="settings-heading settings-group-label">Favorites · {saved.length + (home ? 1 : 0)}</h2>
      <ul className="card settings-group fav-city-list">
        <li className="settings-row settings-static settings-group-row fav-city-home">
          <HomeMark />
          <span className="settings-row-words">
            <span className="fav-city-name">{home ? (METROS[home]?.name ?? home) : 'Choose home'}</span>
            <span className="settings-row-sub">Home · always first</span>
          </span>
          <button type="button" className="link-button profile-change" aria-expanded={choosingHome} onClick={() => setChoosingHome(!choosingHome)}>
            {choosingHome ? 'Cancel' : 'Change'}
          </button>
        </li>
        {order.map((id, i) => (
          <li
            key={id}
            ref={(el) => {
              if (el) rows.current.set(id, el);
              else rows.current.delete(id);
            }}
            className={`settings-row settings-static settings-group-row fav-city-row${dragging === id ? ' is-dragging' : ''}`}
          >
            <button
              type="button"
              className="fav-city-handle"
              aria-label={`Reorder ${METROS[id].name}`}
              aria-describedby="fav-cities-help"
              onPointerDown={(ev) => {
                ev.preventDefault();
                dragPointer.current = ev.pointerId;
                setDragging(id);
              }}
              onKeyDown={(ev) => {
                if (ev.key === 'ArrowUp') {
                  ev.preventDefault();
                  moveAndSave(id, i - 1);
                } else if (ev.key === 'ArrowDown') {
                  ev.preventDefault();
                  moveAndSave(id, i + 1);
                }
              }}
            >
              <span className="fav-city-grip" aria-hidden />
            </button>
            <span className="fav-city-name">{METROS[id].name}</span>
            {i > 0 && (
              <button type="button" className="sr-only" tabIndex={-1} onClick={() => moveAndSave(id, i - 1)}>
                Move {METROS[id].name} up
              </button>
            )}
            {i < order.length - 1 && (
              <button type="button" className="sr-only" tabIndex={-1} onClick={() => moveAndSave(id, i + 1)}>
                Move {METROS[id].name} down
              </button>
            )}
            <button type="button" className="outline-remove" aria-label={`Remove ${METROS[id].name}`} onClick={() => toggleFavoriteCity(id)}>
              <span aria-hidden>−</span>
            </button>
          </li>
        ))}
      </ul>
      {order.length > 1 && (
        <p id="fav-cities-help" className="you-fine fav-cities-help">
          Drag to reorder · sets the order in Explore
        </p>
      )}
      <div className="search-box">
        <label className="search-field">
          <SearchIcon />
          <input type="search" value={query} placeholder={choosingHome ? 'Search cities for home' : 'Search cities'} aria-label="Search cities" onChange={(ev) => setQuery(ev.target.value)} />
        </label>
      </div>
      <h2 className="settings-heading settings-group-label">{choosingHome ? 'Choose Home' : 'Add a City'}</h2>
      {choices.length > 0 ? (
        <ul className="card settings-group fav-city-add-list">
          {choices.map((city) => (
            <li key={city.id}>
              <button
                type="button"
                className="settings-row settings-link settings-group-row fav-city-add-row"
                aria-label={choosingHome ? `Make ${city.name} home` : `Add ${city.name}`}
                onClick={() => {
                  if (choosingHome) {
                    setHomeId(city.id);
                    setChoosingHome(false);
                  } else toggleFavoriteCity(city.id);
                  setQuery('');
                }}
              >
                <span className="fav-city-name">{city.name}</span>
                {!choosingHome && (
                  <span className="fav-city-plus" aria-hidden>
                    +
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="home-note">{typed ? 'No city by that name.' : 'No more cities with events.'}</p>
      )}
    </div>
  );
}
