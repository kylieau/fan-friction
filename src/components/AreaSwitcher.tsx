import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { type Metro } from '../config/metros';
import { favoriteCitiesOf, getPersonalLog, metrosWithEvents, subscribePersonalLog } from '../data';
import { metroMatchesSearch } from '../config/metros';
import { getHomeId } from '../lib/homeCity';
import { openedMetroId } from '../lib/view';
import { ChevronDown, HomeIcon, SearchIcon } from './Icons';

/**
 * Closed chip for the current metro. The list floats under the chip and does not move the score. Since build 7
 * (Kylie, Oct 21, 2026: "I actually just want the home and favorited lists to show up"; mocks 56–58) it lists only
 * Home and your favorite cities, with no stars; a search at the top finds any other covered city (a city with
 * nothing in it is a dead end, Kylie, Oct 6); "Edit favorite cities ›" at the bottom opens that section of Profile &
 * Settings. Home is a mark on one row; looking at another city does not change it. Its own file so the Calendar
 * screen can use it without loading the map.
 */
export function AreaSwitcher({
  metro,
  open,
  onOpenChange,
  variant = 'chip',
  onPick,
}: {
  metro: Metro;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /**
   * "title" is Explore's left-aligned page title (build notes 4, 1.2); "chip" is the centered chip; "link" is the
   * Log sheet's "Change city" (build 7.1, item 13): a text link, the same list and search opening in the flow under
   * its line, without the Edit favorite cities link.
   */
  variant?: 'chip' | 'title' | 'link';
  /** Told the picked city instead of writing it into the address (the Log sheet's own city). */
  onPick?: (metroId: string) => void;
}) {
  const [params, setParams] = useSearchParams();
  const menuId = useId();
  const [query, setQuery] = useState('');
  const covered = metrosWithEvents();
  const homeId = openedMetroId();
  const home = getHomeId();
  const viewingHome = metro.id === home;
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const favorites = favoriteCitiesOf(log).filter((id) => id !== home);
  const byId = new Map(covered.map((c) => [c.id, c]));
  // Home, then the favorites in their saved order.
  const shown: Metro[] = [...(home && byId.get(home) ? [byId.get(home)!] : []), ...favorites.flatMap((id) => (byId.get(id) ? [byId.get(id)!] : []))];
  // Home and the favorites only (M13, closed; Kylie, Oct 21, 2026); any other city is a search away (Codex, 11 (b) review).
  const typed = query.trim().toLowerCase();
  const found = typed ? covered.filter((c) => metroMatchesSearch(c, typed)) : [];
  // The list closes on a tap outside it or Escape, wherever the switcher sits (Map, List, calendar page).
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (root.current && !root.current.contains(event.target as Node)) onOpenChange(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onOpenChange(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onOpenChange]);
  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);
  const pick = (id: string) => {
    if (onPick) onPick(id);
    else {
      const next = new URLSearchParams(params);
      if (id === homeId) next.delete('metro');
      else next.set('metro', id);
      setParams(next);
    }
    onOpenChange(false);
  };
  const row = (item: Metro) => (
    <div className="area-row" key={item.id}>
      <button type="button" role="option" aria-selected={item.id === metro.id} onClick={() => pick(item.id)}>
        {item.id === home && <HomeMark />}
        <span>{item.name}</span>
      </button>
    </div>
  );
  return (
    <div ref={root} className={`area-switcher${variant === 'title' ? ' is-title' : variant === 'link' ? ' is-link' : ''}`}>
      {variant === 'link' ? (
        <button type="button" className="link-button area-link" aria-haspopup="listbox" aria-expanded={open} aria-controls={menuId} aria-label={`Change city, now ${metro.name}`} onClick={() => onOpenChange(!open)}>
          Change city
        </button>
      ) : (
        <button
          type="button"
          className="area-chip"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={viewingHome ? `Area, ${metro.name}, Home` : 'Area'}
          onClick={() => onOpenChange(!open)}
        >
          {viewingHome && <HomeMark />}
          <span className="area-chip-name">{metro.name}</span>
          <ChevronDown />
        </button>
      )}
      {open && (
        <div className="area-menu" id={menuId} role="listbox" aria-label="Area">
          <div className="search-box area-search">
            <label className="search-field">
              <SearchIcon />
              <input type="search" value={query} placeholder="Search cities" aria-label="Search cities" onChange={(ev) => setQuery(ev.target.value)} />
            </label>
          </div>
          {typed ? (found.length > 0 ? found.map(row) : <p className="home-note">No city by that name.</p>) : shown.map(row)}
          {variant !== 'link' && (
            <>
              <div className="area-divider" role="separator" />
              <Link to="/you/settings#cities" className="area-edit-link" onClick={() => onOpenChange(false)}>
                Edit favorite cities <span aria-hidden>›</span>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/** The house before the home city's name (Kylie, Oct 5). The name for screen readers is Home. */
export function HomeMark() {
  return (
    <span className="home-mark" role="img" aria-label="Home">
      <HomeIcon />
    </span>
  );
}
