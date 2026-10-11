import { useEffect, useState } from 'react';
import { clearWatchPlace, getAccount, placesForEvent, saveWatchPlace, setWatchedWhere, type Entry, type EventPlace } from '../data';

/**
 * Where you watched (Kylie, Oct 11, 2026, call 3): Home, or a Public place typed in.
 * A public place is shared, by name only, with people who also went public for this
 * event, and they can pick from the names already added. "Only you" keeps it off that
 * list. The database holds the sharing rule; this only writes your own row.
 */
export function WatchedWhere({ entry }: { entry: Entry }) {
  const where = entry.watchedWhere ?? null;
  const [place, setPlace] = useState(entry.watchedPlace ?? '');
  const [others, setOthers] = useState<EventPlace[]>([]);
  const signedIn = Boolean(getAccount());
  const shared = where === 'public' && !entry.watchedPlacePrivate && signedIn;

  useEffect(() => {
    setPlace(entry.watchedPlace ?? '');
  }, [entry.id, entry.watchedPlace]);

  // The names others added for this event: the database answers only once you are public for it too.
  useEffect(() => {
    if (!shared || !entry.eventId) {
      setOthers([]);
      return;
    }
    let current = true;
    placesForEvent(entry.eventId, entry.watchedPlace).then((list) => current && setOthers(list));
    return () => {
      current = false;
    };
  }, [shared, entry.eventId, entry.watchedPlace]);

  const save = async (next: string, keepPrivate = Boolean(entry.watchedPlacePrivate)) => {
    setWatchedWhere(entry.id, 'public', next, keepPrivate);
    if (!entry.eventId || !signedIn) return;
    if (next.trim() && !keepPrivate) await saveWatchPlace(entry.eventId, next, true);
    else if (next.trim()) await saveWatchPlace(entry.eventId, next, false);
    else await clearWatchPlace(entry.eventId);
  };

  const pickHome = async () => {
    setWatchedWhere(entry.id, 'home');
    setPlace('');
    if (entry.eventId && signedIn) await clearWatchPlace(entry.eventId);
  };

  return (
    <div className="watched-where" aria-label="Where you watched">
      <div className="filter-row">
        <button type="button" className="filter-chip" aria-pressed={where === 'home'} onClick={pickHome}>
          Home
        </button>
        <button type="button" className="filter-chip" aria-pressed={where === 'public'} onClick={() => setWatchedWhere(entry.id, 'public', place, Boolean(entry.watchedPlacePrivate))}>
          Public
        </button>
      </div>
      {where === 'public' && (
        <>
          <input
            className="account-input"
            value={place}
            placeholder="Where"
            maxLength={80}
            onChange={(event) => setPlace(event.target.value)}
            onBlur={() => place.trim() !== (entry.watchedPlace ?? '') && void save(place)}
            onKeyDown={(event) => event.key === 'Enter' && (event.target as HTMLInputElement).blur()}
            aria-label="Where you watched"
          />
          {others.length > 0 && (
            <div className="filter-row" aria-label="Places others named">
              {others.map((row) => (
                <button key={row.place} type="button" className="filter-chip" onClick={() => { setPlace(row.place); void save(row.place); }}>
                  {row.place}
                </button>
              ))}
            </div>
          )}
          {signedIn && (
            <button type="button" className="link-button entry-private" role="switch" aria-checked={Boolean(entry.watchedPlacePrivate)} onClick={() => void save(place, !entry.watchedPlacePrivate)}>
              {entry.watchedPlacePrivate ? 'Only you' : 'Shared with others who watched here'}
            </button>
          )}
        </>
      )}
    </div>
  );
}
