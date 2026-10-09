import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { METROS } from '../config/metros';
import {
  cityDayRange,
  entryFacts,
  getPersonalLog,
  nightsOf,
  rangeLabel,
  ratingForEntry,
  scoresForNights,
  subscribePersonalLog,
  weatherGlyph,
  yourEntries,
} from '../data';
import { comparePath, datePath } from '../lib/view';
import { EntryLayer, RemoveFromLog } from '../components/EntryLayer';
import { FactList } from '../components/FactList';
import { ChevronDown } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { loggedDateLabel } from '../lib/dates';

/**
 * An event typed in by hand: no catalog event behind it, so no crowd or
 * competition cards. Everything a listed event's page shows where the data
 * exists (Kylie, Oct 9, C053): the date, the day's weather, the nearby read,
 * Compare with…, and your layer.
 */
export function ManualEntryScreen() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const entry = yourEntries(log).find((e) => e.id === id);
  const [ratings, setRatings] = useState<Map<string, number>>(new Map());

  useEffect(() => {
    if (!entry) return;
    let current = true;
    scoresForNights(nightsOf([entry])).then((map) => current && setRatings(map));
    return () => {
      current = false;
    };
  }, [entry]);

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
  const exact = entry.when.precision === 'day' && entry.metroId ? { metroId: entry.metroId, date: entry.when.sort } : null;
  const weather = exact ? cityDayRange(exact.metroId, exact.date) : undefined;
  const sub = [loggedDateLabel(entry.when), entry.venue, city, entry.away ? 'Away' : ''].filter(Boolean).join(' · ');

  return (
    <div className="screen page event-page">
      <Link to="/you" className="back-link">
        <ChevronDown /> You
      </Link>

      <header className="event-head">
        <h1 className="page-title">{entry.title}</h1>
        <div className="event-sub">
          {sub}
          {weather && (
            <>
              {' · '}
              <span className="weather-glyph" aria-hidden>
                {weatherGlyph(weather)}
              </span>{' '}
              {rangeLabel(weather, exact!.metroId)}
            </>
          )}
        </div>
        <FactList facts={entryFacts(entry)} />
      </header>

      {rating !== null && (
        <section className="card verdict manual-read">
          <ReadTile rating={rating} size="big" />
          <div className="verdict-why">Nearby read: the big events in {city} that date.</div>
        </section>
      )}

      <div className="event-marks">
        <EntryLayer entry={entry} />
      </div>

      {exact && (
        <Link to={datePath(exact.date, exact.metroId)} className="text-link">
          That date in {city}
        </Link>
      )}
      {exact && (
        <Link to={comparePath(exact)} className="text-link compare-link">
          Compare with…
        </Link>
      )}
      <RemoveFromLog entry={entry} onRemoved={() => navigate('/you', { replace: true })} />
    </div>
  );
}
