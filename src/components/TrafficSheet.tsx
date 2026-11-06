import { Link } from 'react-router-dom';
import { cueWord, roadClock, type AreaRoads, type DateRoads, type RoadCue } from '../data';
import { listTitle, splitTitleLabel } from '../lib/eventTitle';
import { shortLocalDate } from '../lib/dates';
import { datePath } from '../lib/view';
import type { CrowdEvent } from '../data';

/**
 * The Map's sheet in Traffic mode (build 7.2, Section E; mocks getting-there/01 and 03): the date and the slider's
 * hour with "Estimate · not live", one row per area (name, who is on the road that hour, the cue), the leave-time
 * slider in whole hours (R4f), "Drag to your leave time." and "See the whole day", which opens the date page at its
 * Getting There card. A quiet date gets E7's one sentence and a plain map. A past date gets one line (R4h: no
 * estimate on past dates).
 */

function plain(e: CrowdEvent): string {
  return splitTitleLabel(listTitle(e)).name.split(' · ')[0];
}

function list(events: readonly CrowdEvent[]): string {
  const names = [...new Set(events.map(plain))];
  if (names.length <= 2) return names.join(' and ');
  return `${names.slice(0, -1).join(', ')}, and ${names[names.length - 1]}`;
}

/** "Texans at Chargers out, Pelicans at Clippers in", "Ducks fans arriving", "nothing on the road". */
export function onTheRoad(area: AreaRoads, hour: number): string {
  const halves = area.hours.halves.filter((h) => h.hour >= hour && h.hour < hour + 1);
  const leaving = [...new Set(halves.flatMap((h) => h.leaving))];
  const arriving = [...new Set(halves.flatMap((h) => h.arriving))];
  if (leaving.length > 0 && arriving.length > 0) return `${list(leaving)} out, ${list(arriving)} in`;
  if (arriving.length > 0) return `${list(arriving)} fans arriving`;
  if (leaving.length > 0) return `${list(leaving)} letting out`;
  return 'nothing on the road';
}

export function cueAt(area: AreaRoads, hour: number): RoadCue {
  return area.cells.find((c) => c.hour === hour)?.cue ?? 'light';
}

export function TrafficBar({ roads, hour, date, isToday }: { roads: DateRoads | null; hour: number | null; date: string; isToday: boolean }) {
  const when = isToday ? 'Today' : shortLocalDate(date);
  return (
    <div className="traffic-bar">
      <span className="traffic-bar-when">{hour !== null && roads && !roads.quiet ? `${when} at ${roadClock(hour)}` : when}</span>
      <span className="gt-tag">
        <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
          <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4.5V8l2.5 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        Estimate · not live
      </span>
    </div>
  );
}

export function TrafficBody({ roads, hour, onHour, past, city, date, metroId }: { roads: DateRoads | null; hour: number | null; onHour: (h: number) => void; past: boolean; city: string; date: string; metroId: string }) {
  if (past) return <p className="traffic-quiet">No road estimate for a past date.</p>;
  if (!roads || roads.quiet || hour === null) {
    return (
      <div className="traffic-quiet-card">
        <p className="traffic-quiet-lead">{roads?.summary ?? `Nothing big enough to strain the roads in ${city}.`}</p>
        <p className="traffic-quiet-sub">No areas are shaded, so the map stays plain on purpose.</p>
      </div>
    );
  }
  const { lo, hi } = roads.axis;
  const hours: number[] = [];
  for (let h = lo; h < hi; h += 1) hours.push(h);
  // The track under the thumb shows the busiest area's cue each hour.
  const worst = roads.areas[0];
  return (
    <div className="traffic-body">
      <ul className="traffic-rows">
        {roads.areas.map((area) => {
          const cue = cueAt(area, hour);
          return (
            <li key={area.id} className="traffic-row">
              <span className="traffic-row-words">
                <span className="traffic-row-name">{area.name}</span> <span className="traffic-row-who">{onTheRoad(area, hour)}</span>
              </span>
              <span className="traffic-row-cue">
                <span className={`road-swatch ${cue}`} aria-hidden />
                {cueWord(cue)}
              </span>
            </li>
          );
        })}
      </ul>
      {roads.areas.some((a) => a.notes.length > 0) && <p className="traffic-note">{[...new Set(roads.areas.flatMap((a) => a.notes))].join(' ')}</p>}
      <div className="traffic-slider">
        <div className="road-strip traffic-track" aria-hidden>
          {hours.map((h) => (
            <span key={h} className={`road-cell ${cueAt(worst, h)}`} />
          ))}
        </div>
        <input
          type="range"
          min={lo}
          max={hi - 1}
          step={1}
          value={hour}
          aria-label="Leave time"
          aria-valuetext={roadClock(hour)}
          onChange={(e) => onHour(Number(e.target.value))}
        />
        <div className="road-axis traffic-axis" aria-hidden>
          {hours.map((h) => (
            <span key={h} style={{ left: `${((h - lo + 0.5) / (hi - lo)) * 100}%` }}>
              {h % 24 === 0 ? '12a' : h % 24 === 12 ? '12p' : h % 24 < 12 ? `${h % 24}a` : `${(h % 24) - 12}p`}
            </span>
          ))}
        </div>
      </div>
      <div className="traffic-foot">
        <span className="traffic-foot-hint">Drag to your leave time.</span>
        <Link to={`${datePath(date, metroId)}#getting-there`} className="traffic-foot-link">
          See the whole day <span aria-hidden>›</span>
        </Link>
      </div>
    </div>
  );
}
