import { scoreLabel } from '../config/scoreLabels';
import { CalendarIcon } from './Icons';

// The rating for a city's date, on one line: "FRI, OCT 25 · Cooked · 9/10".
// It rates the whole date (day games count too), so it's labeled with the
// date, not the word "night". Never a bare number; with no rating yet, it says so.
interface Props {
  dateLabel: string;
  rating: number | null;
  caption: string;
}

export function NightScore({ dateLabel, rating, caption }: Props) {
  const rated = rating !== null;
  return (
    <div className="nightscore">
      <div className="nightscore-main">
        <span className="nightscore-date">
          <CalendarIcon />
          {dateLabel.toUpperCase()} ·
        </span>
        {rated ? (
          <>
            <span className="score-word">{scoreLabel(rating)}</span>
            <span className="score-of">· {rating}/10</span>
          </>
        ) : (
          <span className="score-word unrated">Not rated yet</span>
        )}
      </div>
      <div className="nightscore-bars" aria-hidden>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={rated && i < rating ? 'on' : undefined} />
        ))}
      </div>
      <div className="nightscore-caption">{caption}</div>
    </div>
  );
}
