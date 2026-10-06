import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { METROS } from '../config/metros';
import { entryFacts, getPersonalLog, getRatedDates, ratingForEntry, subscribePersonalLog, yourEntries } from '../data';
import { EntryLayer, RemoveFromLog } from '../components/EntryLayer';
import { FactList } from '../components/FactList';
import { ChevronDown } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { loggedDateLabel } from '../lib/dates';

/**
 * A night typed in by hand: no catalog event behind it, so no crowd, weather
 * or competition cards. What is known, the nearby read when the city has one,
 * and your layer.
 */
export function ManualEntryScreen() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const entry = yourEntries(log).find((e) => e.id === id);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    const metroId = entry?.metroId;
    if (!metroId) return;
    let current = true;
    getRatedDates(metroId).then((rows) => current && setRatings(new Map(rows.map((row) => [row.date, row.rating]))));
    return () => {
      current = false;
    };
  }, [entry?.metroId]);

  if (!entry) {
    return (
      <div className="screen page">
        <Link to="/you" className="back-link">
          <ChevronDown /> You
        </Link>
        <h1 className="page-title">Not in your log</h1>
      </div>
    );
  }

  const rating = ratingForEntry(entry, ratings);
  const city = entry.metroId ? METROS[entry.metroId]?.name : undefined;
  const sub = [loggedDateLabel(entry.when), entry.venue, city, entry.away ? 'Away' : ''].filter(Boolean).join(' · ');

  return (
    <div className="screen page event-page">
      <Link to="/you" className="back-link">
        <ChevronDown /> You
      </Link>

      <header className="event-head">
        <h1 className="page-title">{entry.title}</h1>
        <div className="event-sub">{sub}</div>
        <FactList facts={entryFacts(entry)} />
      </header>

      {rating !== null && (
        <section className="card verdict manual-read">
          <ReadTile rating={rating} size="big" />
          <div className="verdict-why">Nearby read: the big events in {city} that night.</div>
        </section>
      )}

      <div className="event-marks">
        <EntryLayer entry={entry} />
      </div>

      <RemoveFromLog entry={entry} onRemoved={() => navigate('/you', { replace: true })} />
    </div>
  );
}
