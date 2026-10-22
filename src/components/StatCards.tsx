import { formatScore, scoreLabel } from '../config/scoreLabels';
import { ratingForEntry, type Entry } from '../data';

// The stat tiles You and the profile page share (moved out of YouScreen in build 7, so the You rebuild can drop its
// Stats block without taking the profile page's tiles with it).

/** The night with the highest friction read. Shown on Your year and on the page others see. */
export function heaviestEntry(entries: Entry[], ratings: ReadonlyMap<string, number>): number | null {
  return entries.reduce<number | null>((best, entry) => {
    const r = ratingForEntry(entry, ratings);
    return r !== null && (best === null || r > best) ? r : best;
  }, null);
}

export function HeaviestStat({ rating }: { rating: number | null }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{rating === null ? '—' : formatScore(rating)}</span>
      <span className="stat-label">{rating === null ? 'Heaviest' : `Heaviest · ${scoreLabel(rating)}`}</span>
    </div>
  );
}

export function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div className="stat-card">
      <span className="stat-num">{n}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
