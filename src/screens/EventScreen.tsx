import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { frictionLabel, frictionVerdictTitle, showFriction } from '../config/scoreLabels';
import { feelsLikeLabel, isOpenAir, weatherForEvent, weatherGlyph, weatherRangeForEvent } from '../data';
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
  yourEntries,
  type CityDate,
  type CrowdEvent,
} from '../data';
import { crowdKind, crowdPoints, showsOnMap, type CrowdPoint } from '../map/crowdPoints';
import { FactList } from '../components/FactList';
import { ArrowRight, ChevronDown } from '../components/Icons';
import { ShareCard } from '../components/ShareCard';
import { clockTime, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, openedFromMap, readMapMemory } from '../lib/mapReturn';
import { openedMetroId } from '../lib/view';
import { quietStakes } from '../lib/stakes';
import { longLocalDate } from '../lib/dates';
import { hoursOf, milesBetween, runningHours } from '../lib/windows';

const fmt = (n: number) => n.toLocaleString('en-US');
const capital = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);

// One event: what it was, how much competition it faced (known beforehand),
// the crowd as labeled evidence, and what else was on at the same time.
export function EventScreen() {
  const { id = '' } = useParams();
  const [params] = useSearchParams();
  const date = id.slice(0, 10);
  const requestedMetro = params.get('metro');
  const [day, setDay] = useState<CityDate | null>(null);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);

  useEffect(() => {
    let current = true;
    setDay(null);
    const saved = getPersonalLog();
    const planMetro = saved.plans.find((plan) => plan.eventId === id)?.metroId;
    const loggedMetro = yourEntries(saved).find((entry) => entry.eventId === id)?.metroId;
    const metros = [requestedMetro, planMetro, loggedMetro, DEFAULT_METRO.id].filter(
      (metroId, index, all): metroId is string =>
        Boolean(metroId && METROS[metroId]) && all.indexOf(metroId) === index,
    );
    (async () => {
      let last: CityDate | null = null;
      for (const metroId of metros) {
        const next = await getCityDate(metroId, date);
        if (!current) return;
        last = next;
        if (next.events.some((event) => event.id === id)) {
          setDay(next);
          return;
        }
      }
      if (current) setDay(last);
    })();
    return () => {
      current = false;
    };
  }, [id, date, requestedMetro]);

  // A room under the floor can still open. It does not show up as competition on a bigger event.
  const points = day
    ? crowdPoints(
        day.events.filter((event) => event.id === id || showsOnMap(event)),
        date,
      )
    : [];
  const me = points.find((p) => p.event.id === id);

  if (!day) return <div className="screen page" />;
  if (!me) {
    return (
      <div className="screen page">
        <MapBack date={date} className="back-link">
          <ChevronDown /> {shortLocalDate(date)}
        </MapBack>
        <h1 className="page-title">Event not found</h1>
        <MapBack date={date} className="gold-button">
          See the map
          <ArrowRight />
        </MapBack>
      </div>
    );
  }

  const e = me.event;
  const a = e.assessment;
  const kind = crowdKind(e);
  const stakesLine = quietStakes(e, day.events);
  const logged = yourEntries(log).find((entry) => entry.eventId === e.id);

  return (
    <div className="screen page event-page">
      <MapBack date={date} metroId={e.metroId} className="back-link">
        <ChevronDown /> {shortLocalDate(date)}
      </MapBack>

      <header className="event-head">
        <h1 className="page-title">{listTitle(e)}</h1>
        {stakesLine && <p className="event-stakes">{stakesLine}</p>}
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
        {e.date >= todayIn(METROS[e.metroId] ?? DEFAULT_METRO) ? (
          <button
            type="button"
            className={`mark-button${isPlanned(e.id, log) ? ' on' : ''}`}
            aria-pressed={isPlanned(e.id, log)}
            onClick={() => togglePlan(e)}
          >
            {isPlanned(e.id, log) ? 'Attending' : 'Attend'}
          </button>
        ) : isWasThere(e.id, log) ? (
          <button type="button" className="mark-button on" aria-pressed onClick={() => toggleWasThere(e)}>
            Attended
          </button>
        ) : (
          <button type="button" className="mark-button" onClick={() => toggleWasThere(e)}>
            Attended
          </button>
        )}
      </div>

      {a && showFriction(a.friction) && (
        <section className="card verdict">
          <div className="verdict-word">{frictionVerdictTitle(a.friction)}</div>
          <div className="verdict-why">{a.why}</div>
          {a.status === 'draft' && <div className="draft-note">Draft. Still being checked.</div>}
          {a.status === 'formula' && <div className="draft-note">Formula v4 · placeholder numbers until tuned.</div>}
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

      <WeatherDetail event={e} />

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

      <MapBack date={date} metroId={e.metroId} className="text-link">
        Back to the map
      </MapBack>
    </div>
  );
}

/** Everything behind the feels-like number, open-air venues only. */
function WeatherDetail({ event }: { event: CrowdEvent }) {
  if (!isOpenAir(event)) return null;
  const row = weatherForEvent(event);
  if (!row) return null;
  const range = weatherRangeForEvent(event);
  const rows: [string, string][] = [
    ['Feels like', feelsLikeLabel(row, event.metroId)],
    ['Air', `${Math.round(row.tempF)}°`],
  ];
  if (range && range.high.feelsLikeF !== range.low.feelsLikeF) {
    rows.push(['During', `${feelsLikeLabel(range.low, event.metroId)}–${feelsLikeLabel(range.high, event.metroId)}`]);
  }
  if (row.humidity != null) rows.push(['Humidity', `${Math.round(row.humidity)}%`]);
  if (row.windMph != null) rows.push(['Wind', `${Math.round(row.windMph)} mph`]);
  if (row.uvIndex != null) rows.push(['UV', `${Math.round(row.uvIndex)}`]);
  if (row.precipProbability != null) rows.push(['Rain chance', `${Math.round(row.precipProbability)}%`]);
  else if (row.precipMm != null) rows.push(['Rain', row.precipMm >= 1 ? `${row.precipMm.toFixed(1)} mm` : 'none']);
  return (
    <section className="card weather-card" aria-label="Weather at the venue">
      <div className="weather-head">
        <span className="weather-glyph big" aria-hidden>
          {weatherGlyph(row)}
        </span>
        <span className="weather-title">
          {row.basis === 'forecast' ? 'Forecast' : 'Weather'} at {event.start ? clockTime(event.start) : 'start'}
        </span>
      </div>
      <dl className="weather-grid">
        {rows.map(([label, value]) => (
          <div key={label} className="weather-cell">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/**
 * Back to the map she left. From the map, that is the same city, zoom, and
 * selection. A refresh still has that memory. Any other visit keeps the date link.
 */
function MapBack({
  date,
  metroId,
  className,
  children,
}: {
  date: string;
  metroId?: string;
  className?: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const fromMap = Boolean((location.state as { fromMap?: boolean } | null)?.fromMap) || openedFromMap();
  const memoryHref = readMapMemory()?.href;
  const params = new URLSearchParams();
  if (metroId && metroId !== openedMetroId()) params.set('metro', metroId);
  params.set('date', date);
  const to = fromMap ? (memoryHref ?? '/explore') : `/explore?${params.toString()}`;
  return (
    <Link
      to={to}
      className={className}
      onClick={(event) => {
        if (!fromMap) return;
        clearOpenedFromMap();
        if (window.history.length > 1) {
          event.preventDefault();
          navigate(-1);
        }
      }}
    >
      {children}
    </Link>
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
