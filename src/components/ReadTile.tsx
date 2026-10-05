import { formatScore, scoreBand, scoreLabel } from '../config/scoreLabels';

/**
 * The read as a box: the number with its word under it, in the band's color
 * (Kylie, Oct 5: use this everywhere a date's read shows). Quiet or unrated
 * dates show a dash so a box is never a bare number.
 */
export function ReadTile({ rating, size = 'row', quiet }: { rating: number | null; size?: 'row' | 'big'; quiet?: boolean }) {
  const cls = size === 'big' ? 'read-big' : 'log-score';
  if (rating === null) {
    return (
      <span className={`${cls} none`} aria-label={quiet ? 'Quiet' : 'No read yet'}>
        <span className={size === 'big' ? 'read-num' : 'log-score-num'}>—</span>
        {quiet && <span className={size === 'big' ? 'read-word' : 'log-score-word'}>Quiet</span>}
      </span>
    );
  }
  const shown = Number(formatScore(rating));
  return (
    <span className={`${cls} ${scoreBand(shown)}`} aria-label={`${scoreLabel(shown)}, ${formatScore(shown)} out of 10`}>
      <span className={size === 'big' ? 'read-num' : 'log-score-num'}>{formatScore(shown)}</span>
      <span className={size === 'big' ? 'read-word' : 'log-score-word'}>{scoreLabel(shown)}</span>
    </span>
  );
}
