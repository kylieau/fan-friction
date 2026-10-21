import { useState, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from './Icons';
import { SearchSheet } from './SearchSheet';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { todayIn } from '../data';
import { getHomeId, subscribeHome } from '../lib/homeCity';
import { eventPath, mapPath } from '../lib/view';

/**
 * The search button, top right on every tab (build notes 2, global search): one spot,
 * one sheet. A date opens on the map; Pick a date opens the month there too. On Explore
 * the button is told which city is on screen, so the shortcuts open that city.
 */
export function SearchButton({ metroId, className = '' }: { metroId?: string; className?: string }) {
  const navigate = useNavigate();
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const cityId = metroId ?? homeId ?? DEFAULT_METRO.id;
  const metro = METROS[cityId] ?? DEFAULT_METRO;
  const today = todayIn(metro);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={`round-button search-button ${className}`.trim()} aria-label="Search" onClick={() => setOpen(true)}>
        <SearchIcon />
      </button>
      {open && (
        <SearchSheet
          homeId={cityId}
          today={today}
          onClose={() => setOpen(false)}
          onPick={(picked, pickedMetro, eventId, furtherOut) => {
            setOpen(false);
            // A further-out event opens its own page (found Oct 21, 2026): the Map's switch may hide it there.
            if (eventId && furtherOut) {
              navigate(eventPath(eventId, pickedMetro));
              return;
            }
            // A hit that names an event opens the Map, where that event's card can show, whichever view was last used.
            navigate(mapPath({ metroId: pickedMetro, date: picked, today, eventId, ...(eventId ? { view: 'map' as const } : {}) }));
          }}
          onPickDate={() => {
            setOpen(false);
            navigate(`${mapPath({ metroId: cityId, date: today, today })}${mapPath({ metroId: cityId, date: today, today }).includes('?') ? '&' : '?'}pick=1`);
          }}
        />
      )}
    </>
  );
}
