import { useState } from 'react';
import { metrosWithEvents } from '../data';
import { nearestListedCity, setHomeId } from '../lib/homeCity';

/**
 * The first time the app opens, they pick a home city.
 * Location is only used if they tap the button. The app never guesses.
 */
export function HomePicker() {
  const cities = metrosWithEvents();
  const [note, setNote] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const choose = (id: string) => {
    setHomeId(id);
  };

  const useMyLocation = () => {
    if (busy) return;
    if (!navigator.geolocation) {
      setNote("Location isn't available. Pick a city from the list.");
      return;
    }
    setBusy(true);
    setNote(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setBusy(false);
        const match = nearestListedCity(position.coords.latitude, position.coords.longitude, cities);
        if (!match) {
          setNote('No city with events is near you. Pick one from the list.');
          return;
        }
        choose(match.id);
      },
      () => {
        setBusy(false);
        setNote("Location isn't available. Pick a city from the list.");
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60_000 },
    );
  };

  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-labelledby="home-title">
      <div className="home-card">
        <h1 id="home-title" className="home-title">
          Where's home?
        </h1>
        <p className="home-helper">Your map opens here. Change it anytime.</p>
        {cities.length > 0 ? (
          <ul className="home-list">
            {cities.map((city) => (
              <li key={city.id}>
                <button type="button" className="home-city" onClick={() => choose(city.id)}>
                  {city.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="home-note">No cities with events yet.</p>
        )}
        <button type="button" className="link-button home-locate" onClick={useMyLocation} disabled={busy}>
          {busy ? 'Checking location…' : 'Use my location'}
        </button>
        {note && (
          <p className="home-note" role="status">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
