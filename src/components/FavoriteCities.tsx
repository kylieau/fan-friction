import { useState, useSyncExternalStore } from 'react';
import { favoriteCitiesOf, getPersonalLog, metrosWithEvents, subscribePersonalLog, toggleFavoriteCity } from '../data';
import { METROS, metroMatchesSearch } from '../config/metros';
import { getHomeId, setHomeId, subscribeHome } from '../lib/homeCity';
import { HomeMark } from './AreaSwitcher';
import { SearchIcon } from './Icons';

/**
 * Favorite cities in Profile & Settings (build 7, §3.11; mock 60): a restyle of the old "Home & cities" list on the
 * same data (`favoriteCities`, synced). Home with Change (a list of the cities with events; the app never asks for
 * location, Kylie, Oct 5), each favorite with a minus, and "+ Add city" with a search. These are what the city
 * switcher shows under Home.
 */
export function FavoriteCitiesSection({ openHome = false }: { openHome?: boolean } = {}) {
  const home = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const favorites = favoriteCitiesOf(log).filter((id) => id !== home && METROS[id]);
  // The profile card's Change opens straight onto the home picker (M11).
  const [mode, setMode] = useState<'closed' | 'home' | 'add'>(openHome ? 'home' : 'closed');
  const [query, setQuery] = useState('');
  const typed = query.trim().toLowerCase();
  const choices = metrosWithEvents().filter((city) => (mode === 'home' ? city.id !== home : city.id !== home && !favorites.includes(city.id)) && metroMatchesSearch(city, typed));

  return (
    <div className="settings fav-cities">
      <div className="settings-row settings-static fav-city-row">
        <span className="fav-city-main">
          <span className="fav-city-name">
            {home && <HomeMark />} {home ? (METROS[home]?.name ?? home) : 'Choose home'}
          </span>
          <span className="you-fine">Your home city · always first in the switcher</span>
        </span>
        <button type="button" className="link-button" onClick={() => setMode(mode === 'home' ? 'closed' : 'home')}>
          Change
        </button>
      </div>
      {favorites.map((id) => (
        <div key={id} className="settings-row settings-static fav-city-row">
          <span className="fav-city-name">{METROS[id].name}</span>
          <button type="button" className="sheet-remove" aria-label={`Remove ${METROS[id].name}`} onClick={() => toggleFavoriteCity(id)}>
            −
          </button>
        </div>
      ))}
      {mode === 'closed' ? (
        <button type="button" className="settings-row settings-link fav-city-add" onClick={() => setMode('add')}>
          <span>+ Add city</span>
        </button>
      ) : (
        <div className="fav-city-picker">
          <div className="search-box">
            <label className="search-field">
              <SearchIcon />
              <input type="search" value={query} autoFocus placeholder={mode === 'home' ? 'Search cities for home' : 'Search cities'} aria-label="Search cities" onChange={(ev) => setQuery(ev.target.value)} />
            </label>
          </div>
          <ul className="home-list">
            {choices.map((city) => (
              <li key={city.id} className="city-row">
                <button
                  type="button"
                  className="home-city"
                  onClick={() => {
                    if (mode === 'home') setHomeId(city.id);
                    else toggleFavoriteCity(city.id);
                    setMode('closed');
                    setQuery('');
                  }}
                >
                  <span className="city-row-name">{city.name}</span>
                </button>
              </li>
            ))}
            {choices.length === 0 && <li className="home-note">{typed ? 'No city by that name.' : 'No more cities with events.'}</li>}
          </ul>
          <button type="button" className="link-button" onClick={() => setMode('closed')}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
