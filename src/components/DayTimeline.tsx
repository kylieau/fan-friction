import { Link } from 'react-router-dom';
import { CrowdMark } from './EventTags';
import { frictionClass } from '../config/scoreLabels';
import { drawSize, sizeTier, type CrowdEvent } from '../data';
import { mapTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { hoursOf, runningHours } from '../lib/windows';
import { crowdThousands } from '../map/crowdPoints';

/**
 * The night's stacked timeline (Kylie, Oct 11, call 6; mock call6-overlap B/C): one bar per
 * event over the friction floor, from its start for its rough running time, in the violet
 * of its friction (grey when it has none). No miles, no helper text. Each row opens the event.
 */
export function DayTimeline({ events }: { events: readonly CrowdEvent[] }) {
  const timed = events.filter((e) => e.start && sizeTier(e) === 'feeds-friction');
  if (timed.length < 2) return null;
  const span = (e: CrowdEvent) => {
    const s = hoursOf(e.start as string);
    return [s, s + runningHours(e)] as const;
  };
  const lo = Math.floor(Math.min(...timed.map((e) => span(e)[0])) - 0.5);
  const hi = Math.ceil(Math.max(...timed.map((e) => span(e)[1])) + 0.5);
  const pct = (h: number) => `${((h - lo) / (hi - lo)) * 100}%`;
  const ticks: number[] = [];
  for (let h = Math.ceil(lo); h <= hi; h += 1) ticks.push(h);
  const label = (h: number) => (h % 24 === 0 ? '12a' : h % 24 === 12 ? '12p' : h % 24 < 12 ? `${h % 24}a` : `${(h % 24) - 12}p`);
  const rows = [...timed].sort((a, b) => span(a)[0] - span(b)[0] || (drawSize(b) ?? 0) - (drawSize(a) ?? 0));

  return (
    <div className="day-timeline" aria-label="Timeline">
      <div className="axis">
        {ticks.map((h) => (
          <span key={h} style={{ left: pct(h) }}>
            {label(h)}
          </span>
        ))}
      </div>
      <ul className="bars">
        {rows.map((e) => {
          const [s, end] = span(e);
          const size = drawSize(e);
          const level = e.assessment?.friction;
          const cls = level && level !== 'Low' ? frictionClass(level) : 'none';
          return (
            <li key={e.id} className="bar-row">
              <Link to={eventPath(e.id, e.metroId)} className="bar-link">
                <div className="bar-label">
                  <span className="bar-name">
                    {mapTitle(e, events)}
                    {size ? (
                      <span className="bar-crowd">
                        <CrowdMark />
                        {crowdThousands(size)}
                      </span>
                    ) : null}
                  </span>
                </div>
                <div className="bar-track">
                  <span className={`bar bar-${cls}`} style={{ left: pct(s), width: `calc(${pct(end)} - ${pct(s)})` }} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
