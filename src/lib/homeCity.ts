import { METROS, type Metro } from '../config/metros';
import { milesBetween } from './windows';
import { getPref, setPref } from './prefs';

// Home is one city on this phone. It is not the log, and it does not sync.
// 🚩 Copying it to another phone needs accounts. Leave that out until then.

const PREF = 'home-metro';

/**
 * Wide enough for the Los Angeles basin, including Ventura.
 * A person farther away is not assigned a city.
 */
const NEAR_MILES = 80;

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

/** The saved home city, or null when they have not chosen one. */
export function getHomeId(): string | null {
  const id = getPref<unknown>(PREF, null);
  return typeof id === 'string' && METROS[id] ? id : null;
}

export function getHomeMetro(): Metro | null {
  const id = getHomeId();
  return id ? METROS[id] : null;
}

/** Remember a city as home. Does not look at location, and does not change the map address. */
export function setHomeId(id: string) {
  if (!METROS[id] || getHomeId() === id) return;
  setPref(PREF, id);
  notify();
}

export function subscribeHome(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * The listed city they are standing in, if one is close.
 * Returns null when none is. Never picks a far city.
 */
export function nearestListedCity(latitude: number, longitude: number, cities: readonly Metro[]): Metro | null {
  let best: Metro | null = null;
  let bestMiles = NEAR_MILES;
  for (const city of cities) {
    const miles = milesBetween([longitude, latitude], city.center);
    if (miles <= bestMiles) {
      best = city;
      bestMiles = miles;
    }
  }
  return best;
}
