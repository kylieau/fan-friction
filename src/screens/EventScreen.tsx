import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { frictionLabel, frictionVerdictTitle, showFriction } from '../config/scoreLabels';
import { VENUES, feelsLikeLabel, isOpenAir, venueNameOn, weatherForEvent, weatherGlyph, weatherRangeForEvent } from '../data';
import {
  CONCERT_FILL,
  drawSavedAhead,
  eventFacts,
  roundEstimate,
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
import { EntryLayer, RemoveFromLog } from '../components/EntryLayer';
import { SameTour } from '../components/SameTour';
import { FactList } from '../components/FactList';
import { ArrowRight, ChevronDown } from '../components/Icons';
import { ShareCard } from '../components/ShareCard';
import { clockTime, shortLocalDate } from '../lib/dates';
import { listTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, openedFromMap, readMapMemory } from '../lib/mapReturn';
import { comparePath, openedMetroId } from '../lib/view';
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
  const [showHow, setShowHow] = useState(false);

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
  const ahead = e.date >= todayIn(METROS[e.metroId] ?? DEFAULT_METRO);
  // The station: the schedule's when it names one, else what you wrote down.
  const tv = e.broadcast ?? logged?.tv;

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
          {tv ? ` · ${ahead ? 'On' : 'Was on'} ${tv}` : ''}
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
        {ahead ? (
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
        {logged && <EntryLayer entry={logged} />}
      </div>

      {a && showFriction(a.friction) && (
        <section className="card verdict">
          <div className="verdict-word">{frictionVerdictTitle(a.friction)}</div>
          <div className="verdict-why">{a.why}</div>
          {a.status === 'draft' && <div className="draft-note">Draft. Still being checked.</div>}
          {a.status === 'formula' && (
            <div className="draft-note">{ahead ? 'Forecast' : 'Stamped'} · Formula v4 · placeholder numbers until tuned.</div>
          )}
        </section>
      )}

      {ahead && <SameTour event={e} />}

      <section className="card crowd-card">
        <div className="crowd-figure">
          {me.count !== undefined ? (
            <>
              <span className="crowd-number">{fmt(me.count)}</span>
              <span className="crowd-kind">
                People ({kind ? capital(kind) : kind})
                {kind === 'estimated' && <HowButton onOpen={() => setShowHow(true)} />}
              </span>
            </>
          ) : me.soldOut ? (
            <span className="crowd-number small">Sold Out</span>
          ) : e.expectedDraw ? (
            <>
              <span className="crowd-number">~{fmt(roundEstimate(e.expectedDraw.count))}</span>
              <span className="crowd-kind">
                People (Estimated)
                <HowButton onOpen={() => setShowHow(true)} />
              </span>
              {e.expectedDraw.fromCrowds && me.capacity && (
                <>
                  <span className="crowd-fill-word">{fullnessWord(e.expectedDraw.count, me.capacity)}</span>
                  <FillBar count={e.expectedDraw.count} capacity={me.capacity} />
                </>
              )}
            </>
          ) : me.capacity ? (
            <>
              <span className="crowd-number small">{fmt(me.capacity)}</span>
              <span className="crowd-kind">Seats · no estimate yet</span>
            </>
          ) : (
            <span className="crowd-kind">No count found yet</span>
          )}
        </div>
        {me.soldOut && me.count !== undefined && <span className="tag-soldout">SOLD OUT</span>}
        <DrawNote event={e} counted={me.count !== undefined || me.soldOut} />
      </section>
      {showHow && <HowEstimatesWork onClose={() => setShowHow(false)} event={e} seats={me.capacity} />}

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

      {logged && (
        <Link to={comparePath({ metroId: e.metroId, date, eventId: e.id })} className="text-link compare-link">
          Compare with…
        </Link>
      )}
      {logged && <RemoveFromLog entry={logged} />}
    </div>
  );
}

/** Everything behind the feels-like number, open-air venues only. */
/**
 * The estimate's middle half (Kylie, Oct 7, S4); after the game, what was estimated
 * ahead (S5). No per-event basis sentence: how estimates are made is behind the (i),
 * once, for all of them (Kylie, Oct 7).
 */
/** How full the building reads, in a word (Kylie, Oct 8): the cutoffs are 40, 70 and 95% of the seats. */
function fullnessWord(count: number, capacity: number): string {
  const share = count / capacity;
  return share < 0.4 ? 'Light' : share < 0.7 ? 'Partly full' : share < 0.95 ? 'Mostly full' : 'Packed';
}

/**
 * How full the building reads, as a word and a bar (Kylie, Oct 8). Only under an estimate that
 * rests on announced crowds; a show sized by a rule of thumb or a playoff game sized by the building
 * would just draw the rule. Fill is the estimate over the seats; past full it stays full, since the
 * building has held that many. The bar is decorative once the word is on the page.
 */
function FillBar({ count, capacity }: { count: number; capacity: number }) {
  const share = Math.min(1, count / capacity);
  return (
    <span className="fill-bar" aria-hidden>
      <span className="fill-bar-fill" style={{ width: `${Math.round(share * 100)}%` }} />
    </span>
  );
}

function DrawNote({ event, counted }: { event: CrowdEvent; counted: boolean }) {
  if (!counted) {
    const d = event.expectedDraw;
    // The middle half lives in the (i) card (Kylie, Oct 8: "half of games land between"); a playoff planning range stays here.
    if (!d || !d.planning || d.low == null || d.high == null || roundEstimate(d.low) === roundEstimate(d.high)) return null;
    return <p className="crowd-note">Likely {fmt(roundEstimate(d.low))}–{fmt(roundEstimate(d.high))}.</p>;
  }
  const saved = drawSavedAhead(event);
  if (!saved) return null;
  return <p className="crowd-note">Estimated ahead: ~{fmt(roundEstimate(saved.count))}.</p>;
}

/** The small (i) beside an estimated figure. */
function HowButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button type="button" className="info-dot" aria-label="How estimates work" onClick={onOpen}>
      i
    </button>
  );
}

/** One explanation for every estimate in the app, games and shows alike (Kylie, Oct 7). */
/**
 * The per-event opening of the (i) card (Kylie, Oct 8, from the mockup): where the figure comes from, "half of
 * games land between" for the middle half, and the standing-room sentence when the crowd tops the seats.
 */
function aboutThisEstimate(event: CrowdEvent, seats: number | undefined): string | null {
  const d = event.expectedDraw;
  if (!d?.fromCrowds) return null;
  const where = event.place.type === 'venue' ? venueNameOn(VENUES[event.place.venueId], event.date) : event.place.name;
  const span = seasonSpan(d.seasons);
  const parts = [`Based on ${d.games ? `${d.games} announced crowds` : 'announced crowds'} at ${where}${span ? `, ${span}` : ''}.`];
  if (d.low != null && d.high != null && roundEstimate(d.low) !== roundEstimate(d.high)) {
    parts.push(d.planning ? `A planning range: ${fmt(roundEstimate(d.low))} to ${fmt(roundEstimate(d.high))}.` : `Half of games land between ${fmt(roundEstimate(d.low))} and ${fmt(roundEstimate(d.high))}.`);
  }
  if (seats && d.count > seats) parts.push(`${where} sells standing room, so crowds can top its ${fmt(seats)} seats.`);
  return parts.join(' ');
}

/** "2023, 2024, 2025" → "2023–2025"; anything else as written. */
function seasonSpan(seasons: string | undefined): string | undefined {
  if (!seasons) return undefined;
  const years = seasons.match(/\b20\d\d\b/g)?.map(Number) ?? [];
  if (years.length >= 2 && /^[\d,\s]+$/.test(seasons) && years[years.length - 1] - years[0] === years.length - 1) return `${years[0]}–${years[years.length - 1]}`;
  return seasons;
}

function HowEstimatesWork({ onClose, event, seats }: { onClose: () => void; event: CrowdEvent; seats: number | undefined }) {
  const about = aboutThisEstimate(event, seats);
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-labelledby="how-title" onClick={onClose}>
      <div className="home-card" onClick={(ev) => ev.stopPropagation()}>
        <h1 id="how-title" className="home-title">
          {about ? 'About this estimate' : 'How estimates work'}
        </h1>
        {about && <p className="how-about">{about}</p>}
        <h2 className="how-sub">How estimates work</h2>
        <p className="home-helper">
          <strong>A game:</strong> the crowd this team typically announced in this building on this kind of night, over the last
          two or three seasons, nudged by how the team is drawing this season and how this visitor has drawn here. Never above
          the building.
        </p>
        <p>
          <strong>A playoff game:</strong> how full this building got at the team's past playoff games in this round, or the
          league's when the team has too few; the building itself when neither is on file. The range shown is a planning
          range, wider than a middle half; its low end is what counts toward friction. The bar under an estimate is the
          crowd against the building's seats; it shows only when past crowds are behind the figure, and a building that
          sells standing room can read full.
        </p>
        <p className="home-helper">
          <strong>A show:</strong> a venue's own published average when it has one; otherwise the full room for a venue built
          for shows, or {Math.round(CONCERT_FILL * 100)}% of an arena or stadium, the average fill of the ones that publish
          their numbers.
        </p>
        <p className="home-helper">Teams announce tickets sold or handed out, not people through the gates.</p>
        <p className="home-helper">An announced or reported count replaces the estimate when it lands.</p>
        <button type="button" className="home-city" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}

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
