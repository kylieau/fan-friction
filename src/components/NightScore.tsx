// A night's difficulty score. Never a bare number: always with its label.
// With no rating yet, it says so instead of guessing.
interface Props {
  rating: number | null;
  label?: string;
  caption: string;
}

export function NightScore({ rating, label, caption }: Props) {
  const rated = rating !== null;
  return (
    <div className="nightscore">
      {rated && (
        <div className="nightscore-number">
          <span className="score-big">{rating}</span>
          <span className="score-of">/10</span>
        </div>
      )}
      <div className="nightscore-text">
        <div className="nightscore-label">
          NIGHT · {rated ? label : 'NOT RATED YET'}
        </div>
        <div className="nightscore-bars" aria-hidden>
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className={rated && i < rating ? 'on' : undefined} />
          ))}
        </div>
        <div className="nightscore-caption">{caption}</div>
      </div>
    </div>
  );
}
