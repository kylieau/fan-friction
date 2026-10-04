import { useEffect, useState, useSyncExternalStore } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DEFAULT_METRO } from '../config/metros';
import { frictionLabel, showFriction } from '../config/scoreLabels';
import {
  eventFacts,
  getCityDate,
  getPersonalLog,
  isPlanned,
  isWasThere,
  subscribePersonalLog,
  todayIn,
  togglePlan,
  toggleWasThere,
  yourNights,
  type CityDate,
} from '../data';
import { crowdKind, crowdPoints, type CrowdPoint } from '../map/crowdPoints';
import { FactList } from '../components/FactList';
import { ArrowRight, ChevronDown } from '../components/Icons';
import { ShareCard } from '../components/ShareCard';
import { clockTime, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { longLocalDate } from '../lib/dates';
import { hoursOf, milesBetween, runningHours } from '../lib/windows';

const fmt = (n: number) => n.toLocaleString('en-US');
const capital = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

// One event: what it was, how much competition it faced (known beforehand),
// the crowd as labeled evidence, and what else was on at the same time.
export function EventScreen() {
  const { id = '' } = useParams();
  const date = id.slice(0, 10);
  const [day, setDay] = useState<CityDate | null>(null);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);

  useEffect(() => {
    let current = true;
    getCityDate(DEFAULT_METRO.id, date).then((d) => current && setDay(d));
    return () => {
      current = false;
    };
  }, [date]);

  const points = day ? crowdPoints(day.events, date) : [];
  const me = points.find((p) => p.event.id === id);

  if (!day) return <div className="screen page" />;
  if (!me) {
    return (
      <div className="screen page">
        <Link to={`/?date=${date}`} className="back-link">
          <ChevronDown /> {shortLocalDate(date)}
        </Link>
        <h1 className="page-title">Event not found</h1>
        <Link to="/" className="gold-button">
          See the map
          <ArrowRight />
        </Link>
      </div>
    );
  }

  const e = me.event;
  const a = e.assessment;
  const kind = crowdKind(e);
  const logged = yourNights(log).find((night) => night.eventId === e.id);

  return (
    <div className="screen page event-page">
      <Link to={`/?date=${date}`} className="back-link">
        <ChevronDown /> {shortLocalDate(date)}
      </Link>

      <header className="event-head">
        <h1 className="page-title">{listTitle(e)}</h1>
        <div className="event-sub">
          {me.venueName}
          {e.start ? ` · ${clockTime(e.start)}` : ''}
        </div>
        <FactList facts={eventFacts(e, logged)} />
        {a && (
          <div className="chip-row">
            <span className="chip chip-occasion">{a.occasion}</span>
            {a.facts.map((f) => (
              <span key={f} className="chip chip-fact">
                {f}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="event-marks">
        {e.date >= todayIn(DEFAULT_METRO) ? (
          <button
            type="button"
            className={`mark-button${isPlanned(e.id, log) ? ' on' : ''}`}
            aria-pressed={isPlanned(e.id, log)}
            onClick={() => togglePlan(e)}
          >
            {isPlanned(e.id, log) ? 'Saved' : 'Save this night'}
          </button>
        ) : isWasThere(e.id, log) ? (
          <p className="mark-hint">You were there</p>
        ) : (
          <button type="button" className="mark-button" onClick={() => toggleWasThere(e)}>
            I was there
          </button>
        )}
      </div>

      {a && showFriction(a.friction) && (
        <section className="card verdict">
          <div className="verdict-word">{frictionLabel(a.friction)}</div>
          <div className="verdict-why">{a.why}</div>
          {a.status === 'draft' && <div className="draft-note">Draft. Still being checked.</div>}
        </section>
      )}

      <section className="card crowd-card">
        <div className="crowd-figure">
          {me.count !== undefined ? (
            <>
              <span className="crowd-number">{fmt(me.count)}</span>
              <span className="crowd-kind">People ({kind ? capital(kind) : kind})</span>
            </>
          ) : me.soldOut ? (
            <span className="crowd-number small">Sold Out</span>
          ) : (
            <span className="crowd-kind">No count found yet</span>
          )}
        </div>
        {me.capacity && (
          <div className="crowd-cap">
            <span className="crowd-number small">{fmt(me.capacity)}</span>
            <span className="crowd-kind">Seats</span>
          </div>
        )}
        {me.soldOut && me.count !== undefined && <span className="tag-soldout">SOLD OUT</span>}
      </section>

      <Beaten me={me} all={points} date={date} />

      <p className="source-note">
        Counts are labeled by kind: announced, reported or estimated. Run times are rough defaults and distances are
        straight-line.
      </p>

      <ShareCard
        dateLabel={longLocalDate(date)}
        title={listTitle(e)}
        line={a ? (showFriction(a.friction) ? `${frictionLabel(a.friction)}: ${a.why}.` : a.why) : ''}
        rating={day.rating ? day.rating.rating : null}
        crowd={me.count !== undefined ? `${fmt(me.count)} ${kind ? capital(kind) : ''}` : me.soldOut ? 'Sold Out' : null}
      />

      <Link to={`/?date=${date}`} className="text-link">
        Back to the map
      </Link>
    </div>
  );
}

/** "Local competition": every event that day as a bar on a shared clock. */
function Beaten({ me, all, date }: { me: CrowdPoint; all: CrowdPoint[]; date: string }) {
  const timed = all.filter((p) => p.event.start);
  const untimed = all.filter((p) => !p.event.start);
  if (!me.event.start || all.length < 2) return null;

  const span = (p: CrowdPoint) => {
    const s = hoursOf(p.event.start as string);
    return [s, s + runningHours(p.event)] as const;
  };
  const lo = Math.floor(Math.min(...timed.map((p) => span(p)[0])) - 0.5);
  const hi = Math.ceil(Math.max(...timed.map((p) => span(p)[1])) + 0.5);
  const pct = (h: number) => `${((h - lo) / (hi - lo)) * 100}%`;
  const [ms, me2] = span(me);
  const overlaps = (p: CrowdPoint) => {
    const [s, e] = span(p);
    return s < me2 && e > ms;
  };
  const ticks: number[] = [];
  for (let h = Math.ceil(lo / 2) * 2; h <= hi; h += 2) ticks.push(h);
  const label = (h: number) => (h % 24 === 0 ? '12a' : h % 24 === 12 ? '12p' : h % 24 < 12 ? `${h % 24}a` : `${(h % 24) - 12}p`);

  const rows = [...timed].sort((x, y) => (x === me ? -1 : y === me ? 1 : span(x)[0] - span(y)[0]));

  return (
    <section className="card beaten">
      <h2 className="section-title">Local competition</h2>
      <div className="axis">
        {ticks.map((h) => (
          <span key={h} style={{ left: pct(h) }}>
            {label(h)}
          </span>
        ))}
      </div>
      <ul className="bars">
        {rows.map((p) => {
          const [s, e] = span(p);
          const self = p === me;
          const miles = milesBetween(me.location, p.location);
          return (
            <li key={p.event.id} className="bar-row">
              <div className="bar-label">
                <span>
                  {self ? '★ ' : ''}
                  {listTitle(p.event)}
                  {p.count !== undefined ? ` · ${fmt(p.count)} ${crowdKind(p.event)}` : p.soldOut ? ' · sold out' : ''}
                </span>
                <span className="bar-dist">{self ? 'This event' : `${miles < 0.3 ? '<0.3' : miles.toFixed(1)} mi`}</span>
              </div>
              <div className="bar-track">
                <span
                  className={`bar ${self ? 'bar-self' : overlaps(p) ? 'bar-overlap' : 'bar-other'}`}
                  style={{ left: pct(s), width: `calc(${pct(e)} - ${pct(s)})` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div className="bar-legend">Blue band = on at the same time as this event · {shortLocalDate(date)}</div>
      {untimed.length > 0 && (
        <div className="bar-legend">Start time not found: {untimed.map((p) => p.event.title).join(', ')}</div>
      )}
    </section>
  );
}
