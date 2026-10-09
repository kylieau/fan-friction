import { metrosWithEvents } from '../data';
import { setHomeId } from '../lib/homeCity';

/**
 * The first time the app opens, they pick a home city.
 * The app never asks for location (Kylie, Oct 5, 2026). They pick from the list.
 */
export function HomePicker({ onDone }: { onDone?: () => void } = {}) {
  const cities = metrosWithEvents();

  const choose = (id: string) => {
    setHomeId(id);
    onDone?.();
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
      </div>
    </div>
  );
}
