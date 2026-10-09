import { formatScore, scoreBand, scoreLabel } from '../config/scoreLabels';

/**
 * The read as a box: the number with its word under it, in the band's color
 * (Kylie, Oct 5: use this everywhere a date's read shows). Quiet or unrated
 * dates show a dash so a box is never a bare number.
 */
/**
 * An empty date reads the same in every box (Kylie, Oct 9): "— Quiet" when the city was
 * checked and nothing big was on; a paler "— No data" when it was never or only partly
 * checked, so a run of them never reads as a calm week. A date with events but no read
 * keeps a plain dash.
 */
export type EmptyKind = 'quiet' | 'no-data';

export function ReadTile({ rating, size = 'row', quiet, empty }: { rating: number | null; size?: 'row' | 'big'; quiet?: boolean; empty?: EmptyKind }) {
  const cls = size === 'big' ? 'read-big' : 'log-score';
  const kind: EmptyKind | undefined = empty ?? (quiet ? 'quiet' : undefined);
  if (rating === null) {
    const word = kind === 'quiet' ? 'Quiet' : kind === 'no-data' ? 'No data' : null;
    return (
      <span className={`${cls} none${kind === 'no-data' ? ' nodata' : ''}`} aria-label={word ?? 'No read yet'}>
        <span className={size === 'big' ? 'read-num' : 'log-score-num'}>—</span>
        {word && <span className={size === 'big' ? 'read-word' : 'log-score-word'}>{word}</span>}
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
