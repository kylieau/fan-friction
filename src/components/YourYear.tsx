import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { scoreLabel } from '../config/scoreLabels';
import { ratingForEntry, type Entry } from '../data';
import { loggedDateLabel } from '../lib/dates';
import { entryPath, eventPath } from '../lib/view';
import { ReadTile } from './ReadTile';

/** The read's words, quietest first (src/config/scoreLabels.ts). */
const LADDER = ['Chill', 'Mild', 'Spicy', 'Brutal', 'Cooked'];

/**
 * Your year (docs/compare-proposal-oct6.md, section 1): your nights by friction
 * word, the heaviest and the quietest, and "your usual", the median read, which
 * is the yardstick a side-by-side compares against. This calendar year, or all
 * time. Counts and milestones only; nothing is ranked against anyone.
 */
export function YourYear({ entries, ratings }: { entries: Entry[]; ratings: ReadonlyMap<string, number> }) {
  const thisYear = String(new Date().getFullYear());
  const [scope, setScope] = useState<'year' | 'all'>('year');
  const inScope = useMemo(
    () => (scope === 'year' ? entries.filter((e) => e.when.sort.startsWith(thisYear)) : entries),
    [entries, scope, thisYear],
  );
  const rated = useMemo(
    () =>
      inScope
        .map((entry) => ({ entry, rating: ratingForEntry(entry, ratings) }))
        .filter((row): row is { entry: Entry; rating: number } => row.rating !== null),
    [inScope, ratings],
  );
  if (entries.length === 0) return null;

  const byWord = LADDER.map((word) => ({ word, count: rated.filter((r) => scoreLabel(r.rating) === word).length })).filter((w) => w.count > 0);
  const sorted = [...rated].sort((a, b) => b.rating - a.rating);
  const first = [...rated].sort((a, b) => a.entry.when.sort.localeCompare(b.entry.when.sort))[0];
  const heaviest = sorted[0];
  const quietest = sorted.length > 1 ? sorted[sorted.length - 1] : undefined;
  const usual = median(rated.map((r) => r.rating));

  return (
    <section className="your-year" aria-label="Your year">
      <div className="your-year-head">
        <h2 className="you-heading">{scope === 'year' ? thisYear : 'All time'}</h2>
        <div className="segmented small" role="tablist" aria-label="Span">
          <button type="button" role="tab" aria-selected={scope === 'year'} onClick={() => setScope('year')}>
            This year
          </button>
          <button type="button" role="tab" aria-selected={scope === 'all'} onClick={() => setScope('all')}>
            All time
          </button>
        </div>
      </div>
      {rated.length === 0 ? (
        <p className="you-fine">{inScope.length === 0 ? 'No events yet.' : 'No reads on these events yet.'}</p>
      ) : (
        <>
          <div className="word-row" aria-label="Events by read">
            {byWord.map(({ word, count }) => (
              <span key={word} className={`word-pill ${word.toLowerCase()}`}>
                <strong>{count}</strong> {word}
              </span>
            ))}
          </div>
          {/* "Your usual" means something after about three reads; before that, the first one (3.22). */}
          {usual !== null && rated.length >= 3 ? (
            <p className="your-usual">
              Your usual read is <strong>{scoreLabel(usual)}</strong>, {usual.toFixed(1)}.
            </p>
          ) : (
            <p className="your-usual">
              Your first event was <strong>{scoreLabel(first.rating)}</strong>, {first.rating.toFixed(1)}.
            </p>
          )}
          <ul className="log-list">
            <NightRow label="Heaviest" row={heaviest} />
            {quietest && <NightRow label="Quietest" row={quietest} />}
          </ul>
        </>
      )}
    </section>
  );
}

function NightRow({ label, row }: { label: string; row: { entry: Entry; rating: number } }) {
  const to = row.entry.eventId ? eventPath(row.entry.eventId, row.entry.metroId ?? DEFAULT_METRO.id) : entryPath(row.entry.id);
  return (
    <li>
      <Link to={to} className="log-row">
        <ReadTile rating={row.rating} />
        <span className="log-main">
          <span className="log-facts">{label}</span>
          <span className="log-title">{row.entry.title}</span>
          <span className="log-facts">{[loggedDateLabel(row.entry.when), row.entry.venue].filter(Boolean).join(' · ')}</span>
        </span>
      </Link>
    </li>
  );
}

function median(values: number[]): number | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : Math.round(((sorted[mid - 1] + sorted[mid]) / 2) * 10) / 10;
}
