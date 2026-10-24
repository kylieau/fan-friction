import { Link } from 'react-router-dom';
import { CrowdMark, DayOccasionTag, FrictionVerdict, listedFriction } from './EventTags';
import { ReadTile, type EmptyKind } from './ReadTile';
import { formatScore, FRICTION_LEVELS } from '../config/scoreLabels';
import { atLeastMark, drawSize, sizeTier, type CrowdEvent } from '../data';
import { clockTime } from '../lib/dates';
import { mapTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { crowdThousands } from '../map/crowdPoints';

/**
 * "Why 4.7 today" (build notes 2, P3 V2, mocks p3-final and p3-gold; never "night", build notes 3, 3.1): the date's read,
 * then every event in order of crowd (ties: more friction, then the earlier start), each
 * with a gold crowd bar, its figure, the occasion tag and the friction pill. The whole row
 * opens the event. No "by" line here; no highlighted row.
 * Not rendered anywhere on main as of build 6 (Oct 17, 2026): kept current with items 1 and 2 so it is ready.
 */
export function WhyCard({
  events,
  rating,
  empty,
  dayHref,
  onClose,
}: {
  events: readonly CrowdEvent[];
  rating: number | null;
  empty?: EmptyKind;
  /** The date page, as "See the whole day ›" attached to the card's bottom (build notes 3, 4.3). */
  dayHref?: string;
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
              {rating === null ? 'Why Nothing Today' : `Why ${formatScore(rating)} Today`}
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
            const level = listedFriction(e);
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
                    {/* No size shows nothing (build 5, item 3); the event page says "Size unknown". */}
                    {size > 0 && (
                      <span className="why-row-crowd">
                        <CrowdMark />
                        {crowdThousands(size)}
                        {atLeastMark(e)}
                      </span>
                    )}
                    {/* Build 6: the tag only on the day's top event(s) (item 2); the pill with its ring, as on the event page
                        (item 1, Q14 lean), from Squeezed up as before. */}
                    <DayOccasionTag event={e} day={events} />
                    {level && <FrictionVerdict level={level} />}
                  </span>
                  <span className="why-row-chevron" aria-hidden>
                    ›
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        {dayHref && (
          <Link to={dayHref} className="why-day-link" onClick={onClose}>
            See the whole day ›
          </Link>
        )}
      </div>
    </div>
  );
}
