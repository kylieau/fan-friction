import { useId } from 'react';
import { useSearchParams } from 'react-router-dom';
import { type Metro } from '../config/metros';
import { metrosWithEvents } from '../data';
import { getHomeId, setHomeId } from '../lib/homeCity';
import { openedMetroId } from '../lib/view';
import { ChevronDown, HomeIcon } from './Icons';

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
}: {
  metro: Metro;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [params, setParams] = useSearchParams();
  const menuId = useId();
  // Only cities the app covers (Kylie, Oct 6): a city with nothing in it is a dead end here.
  // Logged nights elsewhere still open from You. A city reached by link stays listed while it is on screen.
  const covered = metrosWithEvents();
  const metros = covered.some((city) => city.id === metro.id) ? covered : [...covered, metro];
  const withEvents = new Set(covered.map((city) => city.id));
  const homeId = openedMetroId();
  const viewingHome = metro.id === getHomeId();
  const pick = (id: string) => {
    const next = new URLSearchParams(params);
    if (id === homeId) next.delete('metro');
    else next.set('metro', id);
    setParams(next);
    onOpenChange(false);
  };
  const makeHome = (id: string) => {
    const viewing = metro.id;
    const next = new URLSearchParams(params);
    if (viewing === id) {
      setHomeId(id);
      next.delete('metro');
      setParams(next, { replace: true });
      return;
    }
    // Keep the city on screen. A bare address means home, so name this city
    // before home changes, or the map would jump.
    if (!params.has('metro')) next.set('metro', viewing);
    setParams(next, { replace: true });
    setHomeId(id);
  };
  return (
    <div className="area-switcher">
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
        {metro.name}
        <ChevronDown />
      </button>
      {open && (
        <div className="area-menu" id={menuId} role="listbox" aria-label="Area">
          {metros.map((item) => {
            const isHome = item.id === getHomeId();
            return (
              <div className="area-row" key={item.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={item.id === metro.id}
                  onClick={() => pick(item.id)}
                >
                  {isHome && <HomeMark />}
                  <span>{item.name}</span>
                </button>
                {!isHome && withEvents.has(item.id) && (
                  <button type="button" className="set-home" onClick={() => makeHome(item.id)}>
                    Set as home
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
