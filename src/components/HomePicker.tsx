import { useState, useSyncExternalStore } from 'react';
import { cityOrder, favoriteCitiesOf, getPersonalLog, metrosWithEvents, subscribePersonalLog, toggleFavoriteCity } from '../data';
import { getHomeId, setHomeId, subscribeHome } from '../lib/homeCity';
import { HomeMark } from './AreaSwitcher';
import { SearchIcon, StarIcon } from './Icons';

/** The helper over the list (board favorite-cities, a and b). */
export const HOME_HELPER = "Tap a city to make it home. Star any others you follow; they're pinned under Home.";

/**
 * One city list for the first-open picker and Settings › Home & cities (build 5, item 8; board favorite-cities):
 * a search box, then Home (house and "Home"), the starred cities, a divider and the rest, in the switcher's
 * order. Tapping a row sets home; the star (44pt) stars or unstars it and never sets home. The app never
 * asks for location (Kylie, Oct 5). `page` draws white rows for the Settings page's blue background.
 */
export function CityList({ variant = 'dialog' }: { variant?: 'dialog' | 'page' }) {
  const [query, setQuery] = useState('');
  const home = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const starred = favoriteCitiesOf(log);
  const typed = query.trim().toLowerCase();
  const cities = metrosWithEvents().filter((city) => !typed || city.name.toLowerCase().includes(typed));
  const { top, pinned, rest } = cityOrder(cities, home, starred);
  const ordered = [...top, ...pinned];

  return (
    <div className={`city-list${variant === 'page' ? ' on-page' : ''}`}>
      <div className="search-box">
        <label className="search-field">
          <SearchIcon />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search cities" aria-label="Search cities" />
        </label>
      </div>
      {cities.length > 0 ? (
        <ul className="home-list">
          {[...ordered, ...rest].map((city, index) => {
            const isHome = city.id === home;
            const isStar = starred.includes(city.id);
            return (
              <li key={city.id} className="city-row">
                {index === ordered.length && pinned.length > 0 && rest.length > 0 && <div className="city-divider" role="separator" />}
                <button type="button" className={`home-city${isHome ? ' is-home' : ''}`} aria-pressed={isHome} onClick={() => setHomeId(city.id)}>
                  {isHome && <HomeMark />}
                  <span className="city-row-name">{city.name}</span>
                  {isHome && <span className="city-row-tag">Home</span>}
                </button>
                {!isHome && (
                  <button
                    type="button"
                    className={`area-star city-star${isStar ? ' on' : ''}`}
                    aria-pressed={isStar}
                    aria-label={`Star ${city.name}`}
                    onClick={() => toggleFavoriteCity(city.id)}
                  >
                    <StarIcon />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="home-note">{typed ? 'No city by that name.' : 'No cities with events yet.'}</p>
      )}
    </div>
  );
}

/**
 * The first time the app opens: "Where's home?" over the city list. Picking home leaves it open so cities can
 * be starred in the same place (board favorite-cities b); Done appears once home is set and closes it.
 */
export function HomePicker({ onDone }: { onDone?: () => void } = {}) {
  const home = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-labelledby="home-title">
      <div className="home-card">
        <h1 id="home-title" className="home-title">
          Where's home?
        </h1>
        <p className="home-helper">{HOME_HELPER}</p>
        <CityList />
        {home && (
          <button type="button" className="gold-button home-done" onClick={onDone}>
            Done
          </button>
        )}
      </div>
    </div>
  );
}
