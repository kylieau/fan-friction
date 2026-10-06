import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { METROS } from '../config/metros';
import {
  addManualEntry,
  knownVenueNames,
  markSuggested,
  searchDates,
  suggestEvent,
  type DateSearchHit,
  type EventKind,
  type ManualNight,
} from '../data';
import { ChevronDown, SearchIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { getHomeId } from '../lib/homeCity';
import { longLocalDate } from '../lib/dates';
import { datePath, entryPath } from '../lib/view';

const KINDS: { kind: EventKind; label: string }[] = [
  { kind: 'game', label: 'Game' },
  { kind: 'show', label: 'Show' },
  { kind: 'festival', label: 'Festival' },
  { kind: 'live-broadcast', label: 'Live broadcast' },
  { kind: 'special', label: 'Special event' },
];

const SPORTS = ['Baseball', 'Basketball', 'Football', 'Hockey', 'Soccer', "Women's basketball", 'Other'];

type Precision = 'day' | 'month' | 'year';

/**
 * Add an event to your log. Search first: a listed night is one tap away.
 * When nothing fits, type it in yourself (Kylie, Oct 6: anything can be logged).
 */
export function AddEntryScreen() {
  const homeId = getHomeId() ?? 'la';
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<DateSearchHit[] | null>(null);
  const [typing, setTyping] = useState(false);
  const trimmed = query.trim();

  useEffect(() => {
    if (trimmed.length < 2) {
      setHits(null);
      return;
    }
    let current = true;
    setHits(null);
    searchDates(homeId, trimmed).then((list) => current && setHits(list));
    return () => {
      current = false;
    };
  }, [homeId, trimmed]);

  return (
    <div className="screen page add-page">
      <Link to="/you" className="back-link">
        <ChevronDown /> You
      </Link>
      <h1 className="page-title">Add an event</h1>

      {!typing && (
        <>
          <div className="search-box">
            <label className="search-field">
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a team, artist or venue"
                aria-label="Search a team, artist or venue"
                autoFocus
              />
            </label>
            {query && (
              <button type="button" className="search-clear" onClick={() => setQuery('')}>
                Clear
              </button>
            )}
          </div>

          {trimmed.length >= 2 && hits && hits.length > 0 && (
            <section className="famous" aria-live="polite">
              <h2 className="section-title">{hits.length === 1 ? '1 night' : `${hits.length} nights`}</h2>
              <ul className="famous-list">
                {hits.map((hit) => (
                  <li key={hit.date}>
                    <Link to={datePath(hit.date, homeId)} className="famous-row">
                      <ReadTile rating={hit.rating} />
                      <span className="famous-text">
                        <span className="famous-headline">{hit.headline}</span>
                        <span className="famous-meta">{[longLocalDate(hit.date), hit.matched].filter(Boolean).join(' · ')}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {trimmed.length >= 2 && hits && hits.length === 0 && <p className="card-body search-note">Nothing listed matches that.</p>}
          {trimmed.length >= 2 && !hits && <p className="card-body search-note">Searching…</p>}

          <button type="button" className="mark-button" onClick={() => setTyping(true)}>
            Add it yourself
          </button>
        </>
      )}

      {typing && <ManualForm homeId={homeId} firstTitle={trimmed} onCancel={() => setTyping(false)} />}
    </div>
  );
}

function ManualForm({ homeId, firstTitle, onCancel }: { homeId: string; firstTitle: string; onCancel: () => void }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(firstTitle);
  const [kind, setKind] = useState<EventKind>('game');
  const [sport, setSport] = useState('Baseball');
  const [precision, setPrecision] = useState<Precision>('day');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [venue, setVenue] = useState('');
  const [city, setCity] = useState<string>(homeId);
  const [big, setBig] = useState(false);
  const [busy, setBusy] = useState(false);
  const venues = useMemo(() => knownVenueNames(), []);

  const when = whenFrom(precision, day, month, year);
  const ready = title.trim().length > 0 && when !== null;

  const save = async () => {
    if (!ready || busy || !when) return;
    setBusy(true);
    const night: ManualNight = {
      title,
      kind,
      sport: kind === 'game' ? sport : undefined,
      when,
      venue,
      metroId: city === 'elsewhere' ? undefined : city,
    };
    const entry = addManualEntry(night, homeId);
    if (big) {
      const id = await suggestEvent(entry);
      if (id) markSuggested(entry.id, id);
    }
    navigate(entryPath(entry.id), { replace: true });
  };

  return (
    <form
      className="profile-form"
      aria-label="Add it yourself"
      onSubmit={(event) => {
        event.preventDefault();
        void save();
      }}
    >
      <label className="field">
        <span className="field-label">What</span>
        <input className="account-input" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} autoFocus autoComplete="off" />
      </label>

      <div className="field">
        <span className="field-label">Type</span>
        <div className="pill-row" role="group" aria-label="Type">
          {KINDS.map((k) => (
            <button
              type="button"
              key={k.kind}
              aria-pressed={kind === k.kind}
              className="filter-chip"
              onClick={() => setKind(k.kind)}
            >
              {k.label}
            </button>
          ))}
        </div>
      </div>

      {kind === 'game' && (
        <label className="field">
          <span className="field-label">Sport</span>
          <select className="account-input" value={sport} onChange={(e) => setSport(e.target.value)}>
            {SPORTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      )}

      <div className="field">
        <span className="field-label">When</span>
        <div className="pill-row" role="group" aria-label="How exact">
          {(['day', 'month', 'year'] as Precision[]).map((p) => (
            <button
              type="button"
              key={p}
              aria-pressed={precision === p}
              className="filter-chip"
              onClick={() => setPrecision(p)}
            >
              {p === 'day' ? 'Day' : p === 'month' ? 'Just the month' : 'Just the year'}
            </button>
          ))}
        </div>
        {precision === 'day' && <input className="account-input" type="date" value={day} onChange={(e) => setDay(e.target.value)} aria-label="Date" />}
        {precision === 'month' && <input className="account-input" type="month" value={month} onChange={(e) => setMonth(e.target.value)} aria-label="Month" />}
        {precision === 'year' && (
          <input
            className="account-input"
            type="number"
            inputMode="numeric"
            min={1950}
            max={2100}
            placeholder="2014"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            aria-label="Year"
          />
        )}
      </div>

      <label className="field">
        <span className="field-label">Where</span>
        <input className="account-input" list="known-venues" value={venue} onChange={(e) => setVenue(e.target.value)} maxLength={80} autoComplete="off" />
        <datalist id="known-venues">
          {venues.map((name) => (
            <option key={name} value={name} />
          ))}
        </datalist>
      </label>

      <label className="field">
        <span className="field-label">City</span>
        <select className="account-input" value={city} onChange={(e) => setCity(e.target.value)}>
          {Object.values(METROS).map((metro) => (
            <option key={metro.id} value={metro.id}>
              {metro.name}
            </option>
          ))}
          <option value="elsewhere">Somewhere else</option>
        </select>
      </label>

      <label className="choice-line">
        <input type="checkbox" checked={big} onChange={(e) => setBig(e.target.checked)} />
        <span>Big event (5,000 or more)</span>
      </label>

      <div className="entry-form-actions">
        <button type="button" className="link-button" onClick={onCancel}>
          Back
        </button>
        <button type="submit" className="gold-button small" disabled={!ready || busy}>
          Save
        </button>
      </div>
    </form>
  );
}

/** The rough or exact date as the log stores it. Null until something valid is typed. */
function whenFrom(precision: Precision, day: string, month: string, year: string): ManualNight['when'] | null {
  if (precision === 'day') {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return null;
    return { sort: day, label: '', precision: 'day' };
  }
  if (precision === 'month') {
    if (!/^\d{4}-\d{2}$/.test(month)) return null;
    const [y, m] = month.split('-').map(Number);
    const label = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    return { sort: `${month}-01`, label, precision: 'month' };
  }
  if (!/^\d{4}$/.test(year)) return null;
  return { sort: `${year}-01-01`, label: year, precision: 'year' };
}
