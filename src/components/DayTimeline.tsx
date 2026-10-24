import { Link } from 'react-router-dom';
import { CrowdMark } from './EventTags';
import { TypeIcon } from './TypeIcon';
import { atLeastMark, drawSize, eventType, sizeTier, type CrowdEvent } from '../data';
import { listTitle } from '../lib/eventTitle';
import { eventPath } from '../lib/view';
import { hoursOf, runningHours } from '../lib/windows';
import { crowdThousands } from '../map/crowdPoints';
import { TitleText } from './TitleText';

/**
 * The day's stacked timeline (Kylie, Oct 11, call 6; mock call6-overlap B/C): one bar per event over the
 * friction floor, from its start for its rough running time. Every bar is the gold crowd color, one color
 * for all (build 6, item 3; Kylie, Oct 16): the bars show start and running time and let the reader draw
 * the conclusion; no friction color, outline or ring. Gold here is identity, not size. No miles, no helper
 * text. Each row opens the event.
 * The hourly weather strip that sat over the axis (build 5, item 4) moved to the day page's own weather strip and
 * card in build 7.1 (M3, Kylie, Oct 23, 2026): weather is out of Local Competition.
 * With fewer than two big events the card says so in one line, so it never looks empty by mistake (Kylie,
 * Oct 16, Q9). Big events that are all untimed still get their "Time TBA" band, alone, with no axis (Q13 lean).
 */
export function DayTimeline({ events }: { events: readonly CrowdEvent[] }) {
  const big = events.filter((e) => sizeTier(e) === 'feeds-friction');
  const timed = big.filter((e) => e.start);
  // Big events with no start on file (research-loaded past dates, a game with no kickoff set) sit in a "Time TBA" band
  // under the timed bars, each across the whole axis, so a day's biggest crowd is never missing from its timeline
  // (Kylie, Oct 16: the band).
  const untimed = big.filter((e) => !e.start).sort((a, b) => (drawSize(b) ?? 0) - (drawSize(a) ?? 0));
  // The quiet-day line by count (Kylie, Oct 19, 2026, superseding her Oct 16 Q9 sentence "No other big events that
  // day.", whose "other" had no anchor on a date page; tester-readiness review R10).
  if (big.length < 2) return <p className="timeline-quiet">{big.length === 0 ? 'Nothing big that day.' : 'One big event that day.'}</p>;
  if (timed.length === 0) {
    return (
      <div className="day-timeline" aria-label="Timeline">
        <TbaBand events={untimed} />
      </div>
    );
  }
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
      <ul className="bars">{rows.map((e) => barRow(e, { left: pct(span(e)[0]), width: `calc(${pct(span(e)[1])} - ${pct(span(e)[0])})` }))}</ul>
      {untimed.length > 0 && <TbaBand events={untimed} />}
    </div>
  );
}

/** The "Time TBA" band: a rule, a small label, then rows whose blank bar runs the whole axis. */
function TbaBand({ events }: { events: readonly CrowdEvent[] }) {
  return (
    <div className="bars-tba" aria-label="Time TBA">
      <span className="bars-tba-label">Time TBA</span>
      <ul className="bars">{events.map((e) => barRow(e, null))}</ul>
    </div>
  );
}

/** One row: the event's name and crowd over its bar; a TBA row's bar runs the whole axis, blank and dashed (not a read). */
function barRow(e: CrowdEvent, at: { left: string; width: string } | null) {
  const size = drawSize(e);
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
                {crowdThousands(size)}
                {atLeastMark(e)}
              </span>
            ) : null}
          </span>
        </div>
        <div className="bar-track">{at ? <span className="bar" style={at} /> : <span className="bar bar-tba" />}</div>
      </Link>
    </li>
  );
}
