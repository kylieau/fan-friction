import { Link } from 'react-router-dom';
import { CrowdMark } from './EventTags';
import { TypeIcon } from './TypeIcon';
import { frictionClass } from '../config/scoreLabels';
import { drawSize, estimateMark, eventType, feelsLikeLabel, sizeTier, weatherAt, weatherGlyph, type CrowdEvent, type WeatherRow } from '../data';
import { mapTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { hoursOf, runningHours } from '../lib/windows';
import { crowdThousands } from '../map/crowdPoints';

/**
 * The night's stacked timeline (Kylie, Oct 11, call 6; mock call6-overlap B/C): one bar per
 * event over the friction floor, from its start for its rough running time, in the violet
 * of its friction (grey when it has none). No miles, no helper text. Each row opens the event.
 * With `weather`, an hourly strip sits over the axis (build 5, item 4; board datepage-r3-lean): the city point's
 * glyph and feels-like at each hour tick, read the way the date header reads it. Hidden under two stored hours.
 */
export function DayTimeline({ events, weather }: { events: readonly CrowdEvent[]; weather?: { metroId: string; date: string } }) {
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
  // Hours past midnight belong to the next day's weather; the strip stops at 11 pm.
  const hourly = weather
    ? ticks.filter((h) => h >= 0 && h <= 23).map((h) => [h, weatherAt(weather.metroId, 'city', weather.date, h)] as const).filter((p): p is readonly [number, WeatherRow] => p[1] !== undefined)
    : [];

  return (
    <div className="day-timeline" aria-label="Timeline">
      {hourly.length >= 2 && (
        <div className="hourly-strip" aria-label="Weather by hour">
          {hourly.map(([h, row]) => (
            <span key={h} style={{ left: pct(h) }} aria-label={`${label(h)} ${feelsLikeLabel(row, weather!.metroId)}`}>
              <span className="weather-glyph" aria-hidden>
                {weatherGlyph(row)}
              </span>
              <span aria-hidden>{feelsLikeLabel(row, weather!.metroId)}</span>
            </span>
          ))}
        </div>
      )}
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
                    <span className="bar-title">
                      <TypeIcon typeKey={eventType(e).key} size={17} />
                      {mapTitle(e, events)}
                    </span>
                    {size ? (
                      <span className="bar-crowd">
                        <CrowdMark />
                        {estimateMark(e)}
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
