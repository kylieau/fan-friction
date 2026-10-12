import { Link } from 'react-router-dom';
import { EventFrictionPill, CrowdMark, OccasionTag } from './EventTags';
import { ReadTile, type EmptyKind } from './ReadTile';
import { formatScore, FRICTION_LEVELS } from '../config/scoreLabels';
import { drawSize, sizeTier, type CrowdEvent } from '../data';
import { clockTime } from '../lib/dates';
import { mapTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { crowdThousands } from '../map/crowdPoints';

/**
 * "Why 4.7 tonight" (build notes 2, P3 V2, mocks p3-final and p3-gold): the date's read,
 * then every event in order of crowd (ties: more friction, then the earlier start), each
 * with a gold crowd bar, its figure, the occasion tag and the friction pill. The whole row
 * opens the event. No "by" line here; no highlighted row.
 */
export function WhyCard({
  events,
  rating,
  empty,
  word,
  onClose,
}: {
  events: readonly CrowdEvent[];
  rating: number | null;
  empty?: EmptyKind;
  word: 'today' | 'tonight';
  onClose: () => void;
}) {
  const rank = (e: CrowdEvent) => FRICTION_LEVELS.indexOf(e.assessment?.friction ?? 'Low');
  const rows = [...events].sort((a, b) => (drawSize(b) ?? 0) - (drawSize(a) ?? 0) || rank(b) - rank(a) || (a.start ?? '99').localeCompare(b.start ?? '99'));
  const big = events.filter((e) => sizeTier(e) === 'feeds-friction');
  const total = big.reduce((sum, e) => sum + (drawSize(e) ?? 0), 0);
  const max = Math.max(1, ...rows.map((e) => drawSize(e) ?? 0));
  // The most common start among the big events: "4 start at 7:00 pm".
  const starts = new Map<string, number>();
  for (const e of big) if (e.start) starts.set(e.start, (starts.get(e.start) ?? 0) + 1);
  const top = [...starts.entries()].sort((a, b) => b[1] - a[1])[0];
  const count = `${events.length} ${events.length === 1 ? 'event' : 'events'}`;
  const starts_ = top && top[1] > 1 ? ` · ${top[1]} start at ${clockTime(top[0])}` : '';

  return (
    <div className="home-backdrop why-backdrop" role="dialog" aria-modal="true" aria-labelledby="why-title" onClick={onClose}>
      <div className="home-card why-card" onClick={(ev) => ev.stopPropagation()}>
        <div className="why-head">
          <ReadTile rating={rating} size="big" empty={empty} />
          <div className="why-head-text">
            <h2 id="why-title" className="why-title">
              {rating === null ? `Why nothing ${word}` : `Why ${formatScore(rating)} ${word}`}
            </h2>
            <span className="why-sub">
              {/* The crowd icon beside the crowd total (build notes 3, D09). */}
              {total > 0 ? (
                <>
                  <CrowdMark />
                  {crowdThousands(total)} across {count}
                </>
              ) : (
                count
              )}
              {starts_}
            </span>
          </div>
          <button type="button" className="about-read-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <ul className="why-list">
          {rows.map((e) => {
            const size = drawSize(e) ?? 0;
            const feeds = sizeTier(e) === 'feeds-friction';
            return (
              <li key={e.id}>
                <Link to={eventPath(e.id, e.metroId)} className="why-row" onClick={onClose}>
                  <span className="why-line1">
                    <span className="why-row-title">{mapTitle(e, events)}</span>
                    <span className="why-row-time">{e.start ? clockTime(e.start) : 'TBA'}</span>
                  </span>
                  <span className="why-line2">
                    <span className={`why-bar${feeds ? '' : ' quiet'}`} aria-hidden>
                      <span className="why-bar-fill" style={{ width: `${Math.max(4, Math.round((size / max) * 100))}%` }} />
                    </span>
                    <span className="why-row-crowd">
                      <CrowdMark />
                      {size > 0 ? crowdThousands(size) : '—'}
                    </span>
                    {e.assessment && <OccasionTag occasion={e.assessment.occasion} />}
                    <EventFrictionPill event={e} />
                  </span>
                  <span className="why-row-chevron" aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
