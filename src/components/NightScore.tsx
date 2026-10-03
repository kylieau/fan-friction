import { formatScore, scoreLabel } from '../config/scoreLabels';
import { CalendarIcon } from './Icons';

// The rating for a city's date, word first: "Cooked 9.0/10". It rates the
// whole date (day games count too), so it's never labeled "Night". Where the
// date isn't already on screen (share cards), pass dateLabel to show
// "FRI, OCT 25 · Cooked · 9.0/10". Never a bare number; a date with no big events says "Quiet", and one with events but no rating yet says "Unrated".
// The event count lives with the date, not under this rating.
interface Props {
  dateLabel?: string;
  rating: number | null;
  quiet?: boolean;
  showScore?: boolean;
}

export function NightScore({ dateLabel, rating, quiet, showScore = true }: Props) {
  if (!showScore) return null;
  const rated = rating !== null;
  const shown = rated ? Number(formatScore(rating)) : null;
  return (
    <div className="nightscore">
      <div className="nightscore-main">
        {dateLabel && (
          <span className="nightscore-date">
            <CalendarIcon />
            {dateLabel.toUpperCase()} ·
          </span>
        )}
        {shown !== null ? (
          <>
            <span className="score-word">{scoreLabel(shown)}</span>
            <span className="score-figure">
              <span className="score-num">{formatScore(shown)}</span>
              <span className="score-out-of">/10</span>
            </span>
          </>
        ) : (
          <span className="score-word unrated">{quiet ? 'Quiet' : 'Unrated'}</span>
        )}
      </div>
      <div className="nightscore-bars" aria-hidden>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={shown !== null && i < Math.round(shown) ? 'on' : undefined} />
        ))}
      </div>
    </div>
  );
}
