import { useState } from 'react';
import { APP } from '../config/app';
import { formatScore, scoreLabel } from '../config/scoreLabels';
import { Wordmark } from './Wordmark';

interface Props {
  /** "FRI, OCT 25, 2024": the card always carries the date. */
  dateLabel: string;
  title: string;
  /** One plain line: what this event was up against. */
  line: string;
  /** The date's rating, if it has one ("Cooked · 9.0/10"). */
  rating: number | null;
  /** The crowd line with its kind, such as "63,404 announced". */
  crowd: string | null;
}

// The event's share card (shown on screen; sharing sends text and the link for
// now, and an image version can come later).
export function ShareCard({ dateLabel, title, line, rating, crowd }: Props) {
  const [note, setNote] = useState('');

  const text = `${title}, ${dateLabel}${rating !== null ? ` · ${scoreLabel(rating)} · ${formatScore(rating)}/10` : ''}. ${line}${crowd ? ` ${crowd}.` : ''}`;

  const share = async () => {
    const data = { title: `${APP.name}: ${title}`, text, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(`${text} ${data.url}`);
      setNote('Copied. Paste it anywhere.');
    } catch {
      /* closed the share sheet, or the browser blocked it: nothing to do */
    }
  };

  return (
    <section className="share-block" aria-label="Share card">
      <div className="share-card">
        <div className="share-date">
          {dateLabel.toUpperCase()}
          {rating !== null && ` · ${scoreLabel(rating).toUpperCase()} · ${formatScore(rating)}/10`}
        </div>
        <div className="share-title">{title}</div>
        <div className="share-line">{line}</div>
        {crowd && <div className="share-crowd">{crowd}</div>}
        <div className="share-brand">
          <Wordmark onBlue />
        </div>
      </div>
      <button type="button" className="gold-button" onClick={share}>
        Share this event
      </button>
      {note && <div className="share-note" role="status">{note}</div>}
    </section>
  );
}
