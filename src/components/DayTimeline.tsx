import { Link } from 'react-router-dom';
import { CrowdMark } from './EventTags';
import { TypeIcon } from './TypeIcon';
import { frictionClass } from '../config/scoreLabels';
import { atLeastMark, drawSize, estimateMark, eventType, feelsLikeLabel, sizeTier, weatherAt, weatherGlyph, type CrowdEvent, type WeatherRow } from '../data';
import { listTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { hoursOf, runningHours } from '../lib/windows';
import { crowdThousands } from '../map/crowdPoints';
import { TitleText } from './TitleText';

/**
 * The night's stacked timeline (Kylie, Oct 11, call 6; mock call6-overlap B/C): one bar per
 * event over the friction floor, from its start for its rough running time, in the violet
 * of its friction (grey when it has none). No miles, no helper text. Each row opens the event.
 * With `weather`, an hourly strip sits over the axis (build 5, item 4; board datepage-r3-lean): the city point's
 * glyph and feels-like at each hour tick, read the way the date header reads it. Hidden under two stored hours.
 */
export function DayTimeline({ events, weather }: { events: readonly CrowdEvent[]; weather?: { metroId: string; date: string } }) {
  const big = events.filter((e) => sizeTier(e) === 'feeds-friction');
  const timed = big.filter((e) => e.start);
  // Big events with no start on file (research-loaded past dates) sit in a "Time TBA" band under the timed bars, each
  // across the whole axis, so a day's biggest crowd is never missing from its timeline (Kylie, Oct 16: the band).
  const untimed = big.filter((e) => !e.start).sort((a, b) => (drawSize(b) ?? 0) - (drawSize(a) ?? 0));
  if (timed.length < 1 || big.length < 2) return null;
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
      <ul className="bars">{rows.map((e) => barRow(e, span(e)))}</ul>
      {untimed.length > 0 && (
        <div className="bars-tba" aria-label="Time TBA">
          <span className="bars-tba-label">Time TBA</span>
          <ul className="bars">{untimed.map((e) => barRow(e, null))}</ul>
        </div>
      )}
    </div>
  );

  /** One row: the event's name and crowd over its bar; a TBA row's bar runs the whole axis, hatched. */
  function barRow(e: CrowdEvent, at: readonly [number, number] | null) {
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
                <TitleText layout="inline" text={listTitle(e)} />
              </span>
              {size ? (
                <span className="bar-crowd">
                  <CrowdMark />
                  {estimateMark(e)}
                  {crowdThousands(size)}
                  {atLeastMark(e)}
                </span>
              ) : null}
            </span>
          </div>
          <div className="bar-track">
            {at ? (
              <span className={`bar bar-${cls}`} style={{ left: pct(at[0]), width: `calc(${pct(at[1])} - ${pct(at[0])})` }} />
            ) : (
              <span className="bar bar-tba" />
            )}
          </div>
        </Link>
      </li>
    );
  }
}
