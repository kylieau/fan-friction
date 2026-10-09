import { useEffect, useState } from 'react';
import { SearchIcon } from './Icons';
import { ReadTile } from './ReadTile';
import { METROS } from '../config/metros';
import { searchAllDates, type DateSearchHit } from '../data';
import { longLocalDate } from '../lib/dates';
import { parseTypedDate } from '../lib/searchDate';

/**
 * Search on Explore (Kylie's build notes, Oct 9, 6.1): a team, artist, venue or a typed
 * date, over every covered city with home first. Three shortcuts under the field: Tonight
 * (or Today, by the 5 pm rule), This weekend, Pick a date.
 */
export function SearchSheet({
  homeId,
  today,
  tonightWord,
  onPick,
  onPickDate,
  onClose,
}: {
  homeId: string;
  today: string;
  tonightWord: 'Tonight' | 'Today';
  onPick: (date: string, metroId: string) => void;
  onPickDate: () => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<DateSearchHit[] | null>(null);
  const trimmed = query.trim();
  const typedDate = parseTypedDate(trimmed, today);

  useEffect(() => {
    if (trimmed.length < 2) {
      setHits(null);
      return;
    }
    let current = true;
    setHits(null);
    searchAllDates(homeId, trimmed).then((list) => current && setHits(list));
    return () => {
      current = false;
    };
  }, [homeId, trimmed]);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const weekend = parseTypedDate('this weekend', today) ?? today;

  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-label="Search" onClick={onClose}>
      <div className="home-card search-card" onClick={(ev) => ev.stopPropagation()}>
        <div className="search-box">
          <label className="search-field">
            <SearchIcon />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Team, artist, venue, or date"
              aria-label="Team, artist, venue, or date"
              autoFocus
            />
          </label>
        </div>
        <div className="pill-row search-shortcuts" role="group" aria-label="Shortcuts">
          <button type="button" className="filter-chip" onClick={() => onPick(today, homeId)}>
            {tonightWord}
          </button>
          <button type="button" className="filter-chip" onClick={() => onPick(weekend, homeId)}>
            This weekend
          </button>
          <button type="button" className="filter-chip" onClick={onPickDate}>
            Pick a date
          </button>
        </div>
        {typedDate && (
          <button type="button" className="famous-row search-date-hit" onClick={() => onPick(typedDate, homeId)}>
            <span className="famous-text">
              <span className="famous-headline">{longLocalDate(typedDate)}</span>
              <span className="famous-meta">Open this date in {METROS[homeId]?.name ?? 'your city'}</span>
            </span>
          </button>
        )}
        {trimmed.length >= 2 && hits && hits.length > 0 && (
          <ul className="famous-list search-results">
            {hits.slice(0, 20).map((hit) => (
              <li key={`${hit.metroId}-${hit.date}`}>
                <button type="button" className="famous-row" onClick={() => onPick(hit.date, hit.metroId)}>
                  <ReadTile rating={hit.rating} />
                  <span className="famous-text">
                    <span className="famous-headline">{hit.headline}</span>
                    <span className="famous-meta">
                      {[longLocalDate(hit.date), hit.metroId !== homeId ? METROS[hit.metroId]?.name : null, hit.matched].filter(Boolean).join(' · ')}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {trimmed.length >= 2 && hits && hits.length === 0 && !typedDate && <p className="card-body search-note">Nothing listed matches that.</p>}
        {trimmed.length >= 2 && !hits && <p className="card-body search-note">Searching…</p>}
      </div>
    </div>
  );
}
