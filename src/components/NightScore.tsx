import { scoreLabel } from '../config/scoreLabels';

// A night's rating, word first: "Cooked · 9/10" under a NIGHT label.
// Never a bare number. With no rating yet, it says so instead of guessing.
interface Props {
  rating: number | null;
  caption: string;
}

export function NightScore({ rating, caption }: Props) {
  const rated = rating !== null;
  return (
    <div className="nightscore">
      <div className="nightscore-label">NIGHT</div>
      {rated ? (
        <div className="nightscore-main">
          <span className="score-word">{scoreLabel(rating)}</span>
          <span className="score-of">· {rating}/10</span>
        </div>
      ) : (
        <div className="nightscore-main">
          <span className="score-word unrated">Not rated yet</span>
        </div>
      )}
      <div className="nightscore-bars" aria-hidden>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={rated && i < rating ? 'on' : undefined} />
        ))}
      </div>
      <div className="nightscore-caption">{caption}</div>
    </div>
  );
}
