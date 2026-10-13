import { useEffect, useId, useRef, useSyncExternalStore } from 'react';
import { useSearchParams } from 'react-router-dom';
import { type Metro } from '../config/metros';
import { favoriteCitiesOf, getPersonalLog, metrosWithEvents, subscribePersonalLog, toggleFavoriteCity } from '../data';
import { getHomeId } from '../lib/homeCity';
import { openedMetroId } from '../lib/view';
import { ChevronDown, HomeIcon, StarIcon } from './Icons';

/**
 * Closed chip for the current metro. The list floats under the chip and does
 * not move the score. Only covered cities are listed, Los Angeles first.
 * Home is a mark on one row. Looking at another city does not change it.
 * Its own file so the Calendar screen can use it without loading the map.
 */
export function AreaSwitcher({
  metro,
  open,
  onOpenChange,
  variant = 'chip',
}: {
  metro: Metro;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** "title" is Explore's left-aligned page title (build notes 4, 1.2); "chip" is the centered chip. */
  variant?: 'chip' | 'title';
}) {
  const [params, setParams] = useSearchParams();
  const menuId = useId();
  // Only cities the app covers (Kylie, Oct 6): a city with nothing in it is a dead end here.
  // Logged nights elsewhere still open from You. A city reached by link stays listed while it is on screen.
  const covered = metrosWithEvents();
  const metros = covered.some((city) => city.id === metro.id) ? covered : [...covered, metro];
  const homeId = openedMetroId();
  const viewingHome = metro.id === getHomeId();
  // Home first, then the cities you starred, a divider, then the rest (build notes 4, P1; Kylie Oct 13).
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const starred = favoriteCitiesOf(log);
  const home = getHomeId();
  const top = metros.filter((city) => city.id === home);
  const pinned = metros.filter((city) => city.id !== home && starred.includes(city.id));
  const rest = metros.filter((city) => city.id !== home && !starred.includes(city.id));
  const ordered = [...top, ...pinned];
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
  const pick = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === homeId) next.delete('metro');
    else next.set('metro', id);
    setParams(next);
    onOpenChange(false);
  };
  return (
    <div ref={root} className={`area-switcher${variant === 'title' ? ' is-title' : ''}`}>
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
      {open && (
        <div className="area-menu" id={menuId} role="listbox" aria-label="Area">
          {[...ordered, ...rest].map((item, index) => {
            const isHome = item.id === home;
            const isStar = starred.includes(item.id);
            return (
              <div className="area-row" key={item.id}>
                {index === ordered.length && pinned.length > 0 && rest.length > 0 && <div className="area-divider" role="separator" />}
                <button type="button" role="option" aria-selected={item.id === metro.id} onClick={() => pick(item.id)}>
                  {isHome && <HomeMark />}
                  <span>{item.name}</span>
                </button>
                {/* Changing home lives in Settings (Kylie, Oct 9); the house marks it here. A star pins any other city. */}
                {!isHome && (
                  <button
                    type="button"
                    className={`area-star${isStar ? ' on' : ''}`}
                    aria-pressed={isStar}
                    aria-label={`Star ${item.name}`}
                    onClick={() => toggleFavoriteCity(item.id)}
                  >
                    <StarIcon />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/** The house before the home city's name (Kylie, Oct 5). The name for screen readers is Home. */
function HomeMark() {
  return (
    <span className="home-mark" role="img" aria-label="Home">
      <HomeIcon />
    </span>
  );
}
