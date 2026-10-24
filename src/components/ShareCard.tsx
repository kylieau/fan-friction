import { useState, type ReactNode } from 'react';
import { APP } from '../config/app';
import { formatScore, scoreLabel, type Friction } from '../config/scoreLabels';
import { CrowdMark, FrictionPill } from './EventTags';
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
  /** The button's verb. Compare passes "Share these events" (C080). */
  buttonLabel?: string;
  /** The event's friction, for the pill on the card. */
  friction?: Friction | null;
}

// The event's share card (shown on screen; sharing sends text and the link for
// now, and an image version can come later).
/** The text a share sends: the same words from the card and from the event page's Share row (build 7.1, M33). */
export function shareText({ dateLabel, title, line, rating, crowd }: Pick<Props, 'dateLabel' | 'title' | 'line' | 'rating' | 'crowd'>): string {
  // One period per sentence, whether or not the reason already ends with one (C029).
  const sentence = (s: string) => (s && !/[.!?]$/.test(s) ? `${s}.` : s);
  // Reads are tenths, never "x/10" (build notes 2, house rules).
  return [`${title}, ${dateLabel}${rating !== null ? ` · ${scoreLabel(rating)} · ${formatScore(rating)}` : ''}.`, sentence(line), sentence(crowd ?? '')].filter(Boolean).join(' ');
}

async function sendShare(title: string, text: string): Promise<string> {
  const data = { title: `${APP.name}: ${title}`, text, url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(data);
      return '';
    }
    await navigator.clipboard.writeText(`${text} ${data.url}`);
    return 'Copied. Paste it anywhere.';
  } catch {
    /* closed the share sheet, or the browser blocked it: nothing to do */
    return '';
  }
}

/**
 * The event page's Share row (build 7.1, M33, Lean; mock 501's footer): "Share this event" with what it shares under it,
 * sending exactly the card's text. The card itself stays for Compare.
 */
export function ShareRow({ dateLabel, title, line, rating, crowd, sub, icon }: Pick<Props, 'dateLabel' | 'title' | 'line' | 'rating' | 'crowd'> & { sub: string; icon: ReactNode }) {
  const [note, setNote] = useState('');
  return (
    <button type="button" className="footer-row" onClick={async () => setNote(await sendShare(title, shareText({ dateLabel, title, line, rating, crowd })))}>
      {icon}
      <span className="footer-row-words">
        <span className="footer-row-title">Share this event</span>
        <span className="footer-row-sub" role="status" aria-live="polite">
          {note || sub}
        </span>
      </span>
    </button>
  );
}

export function ShareCard({ dateLabel, title, line, rating, crowd, buttonLabel = 'Share this event', friction = null }: Props) {
  const [note, setNote] = useState('');

  const text = shareText({ dateLabel, title, line, rating, crowd });
  const share = async () => setNote(await sendShare(title, text));

  return (
    <section className="share-block" aria-label="Share card">
      <div className="share-card">
        <div className="share-date">
          {dateLabel.toUpperCase()}
          {rating !== null && ` · ${scoreLabel(rating).toUpperCase()} · ${formatScore(rating)}`}
        </div>
        <div className="share-title">{title}</div>
        {friction && friction !== 'Low' && (
          <div className="share-pill">
            <FrictionPill level={friction} />
          </div>
        )}
        <div className="share-line">{line}</div>
        {crowd && (
          <div className="share-crowd">
            <CrowdMark /> {crowd}
          </div>
        )}
        <div className="share-brand">
          <Wordmark onBlue />
        </div>
      </div>
      <button type="button" className="gold-button" onClick={share}>
        {buttonLabel}
      </button>
      {note && <div className="share-note" role="status">{note}</div>}
    </section>
  );
}
