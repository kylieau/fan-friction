import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { scoreLabel } from '../config/scoreLabels';
import { biggestCrowd, entryAtLeastMark, entryCrowd, ratingForEntry, toughestFights, type Entry } from '../data';
import { crowdThousands } from '../map/crowdPoints';
import { loggedDateLabel } from '../lib/dates';
import { entryPath, eventPath } from '../lib/view';
import { ReadTile } from './ReadTile';
import { CrowdMark } from './EventTags';
import { TitleText } from './TitleText';

/** The read's words, quietest first (src/config/scoreLabels.ts). */
const LADDER = ['Chill', 'Mild', 'Spicy', 'Brutal', 'Cooked'];

/**
 * The friction ladder (docs/product/compare-proposal-oct6.md, section 1; the component was called YourYear until
 * build 7 gave that name to a page): your nights by friction word, the heaviest and the quietest, and "your usual",
 * the median read, which is the yardstick a side-by-side compares against. This calendar year, or all time.
 * Counts and milestones only; nothing is ranked against anyone. Since build 7 it sits on the Your year page, under
 * the stats (Kylie, 2026-10-22).
 */
export function FrictionLadder({ entries, ratings, year }: { entries: Entry[]; ratings: ReadonlyMap<string, number>; /** The Your year page's year (or "All time"): the ladder follows it and hides its own switch. */ year?: string }) {
  const thisYear = year && year !== 'All time' ? year : String(new Date().getFullYear());
  const [ownScope, setScope] = useState<'year' | 'all'>('year');
  const scope: 'year' | 'all' = year ? (year === 'All time' ? 'all' : 'year') : ownScope;
  // Watched entries stay out of the reads here (Kylie, Oct 11, call 3): a watched game is never Heaviest or Quietest.
  const scoped = useMemo(() => (scope === 'year' ? entries.filter((e) => e.when.sort.startsWith(thisYear)) : entries), [entries, scope, thisYear]);
  const inScope = useMemo(() => scoped.filter((e) => !e.watched), [scoped]);
  const watchedCount = scoped.length - inScope.length;
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
  // The two badges (build notes 2, 7.4): gold for the biggest crowd you were in, pale violet for the toughest fights.
  const biggest = biggestCrowd(inScope);
  const fights = toughestFights(inScope);
  const fightText = [fights.steamrolled > 0 ? `Steamrolled ×${fights.steamrolled}` : null, fights.swamped > 0 ? `Swamped ×${fights.swamped}` : null].filter(Boolean).join(', ');

  return (
    <section className="your-year" aria-label="Your Year">
      <div className="your-year-head">
        <h2 className="you-heading">{year ? 'Your Reads' : scope === 'year' ? thisYear : 'All Time'}</h2>
        {!year && (
        <div className="segmented small" role="tablist" aria-label="Span">
          <button type="button" role="tab" aria-selected={scope === 'year'} onClick={() => setScope('year')}>
            This year
          </button>
          <button type="button" role="tab" aria-selected={scope === 'all'} onClick={() => setScope('all')}>
            All time
          </button>
        </div>
        )}
      </div>
      {rated.length === 0 ? (
        <p className="you-fine">{inScope.length === 0 ? 'No events yet.' : 'No reads on these events yet.'}</p>
      ) : (
        <>
          {/* One plain line (build notes 3, D10): attended and watched counts; the watched pill is gone. */}
          <p className="your-usual your-counts">
            {inScope.length} attended{watchedCount > 0 ? ` · ${watchedCount} watched` : ''}
          </p>
          <div className="word-row" aria-label="Events by Verdict">
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
          {(biggest || fightText) && (
            <div className="badge-row">
              {biggest && (
                <span className="badge badge-crowd">
                  Biggest crowd · {biggest.title} · <CrowdMark /> {crowdThousands(entryCrowd(biggest)?.count ?? 0)}{entryAtLeastMark(biggest)}
                </span>
              )}
              {fightText && <span className="badge badge-fight">Toughest fight · {fightText}</span>}
            </div>
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
          <span className="log-title"><TitleText text={row.entry.title} /></span>
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
