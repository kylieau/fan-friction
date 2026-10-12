import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { frictionVerdictTitle } from '../config/scoreLabels';
import { CrowdMark, EventTags, FrictionPill } from '../components/EventTags';
import { StubSheet } from '../components/StubSheet';
import { ActivityLines, StatusLine } from '../components/ActivityLines';
import { activityGroups, yourActivity } from '../lib/activity';
import { crowdThousands } from '../map/crowdPoints';
import {
  drawSize,
  feelsLikeLabel,
  isOpenAir,
  priceLine,
  sizeTier,
  ticketPrice,
  type TicketPrice,
  venueNameOn,
  VENUES,
  weatherForEvent,
  weatherGlyph,
  weatherRangeForEvent,
} from '../data';
import {
  CONCERT_FILL,
  crowdFigures,
  crowdKindWord,
  eventFacts,
  highlightedCrowd,
  roundEstimate,
  getCityDate,
  getPersonalLog,
  isStampLocked,
  asMetroDate,
  subscribePersonalLog,
  todayIn,
  watchShareOf,
  yourEntries,
  subscribeAccount,
  getAccount,
  followingFeed,
  type FeedItem,
  type CityDate,
  type CrowdEvent,
} from '../data';
import { crowdPoints, showsOnMap } from '../map/crowdPoints';
import { EntryLayer, RemoveFromLog } from '../components/EntryLayer';
import { SameTour } from '../components/SameTour';
import { FactList } from '../components/FactList';
import { ArrowRight, ChevronDown } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { ShareCard } from '../components/ShareCard';
import { clockTime, shortLocalDate } from '../lib/dates';
import { listTitle, mapTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, openedFromMap, readMapMemory } from '../lib/mapReturn';
import { comparePath, datePath, openedMetroId, eventPath } from '../lib/view';
import { quietStakes } from '../lib/stakes';
import { longLocalDate } from '../lib/dates';
import { milesBetween } from '../lib/windows';

const fmt = (n: number) => n.toLocaleString('en-US');

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
  const [sheet, setSheet] = useState(false);

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
  // The ticket line's lookup (8.1): hooks sit before the early returns. Upcoming, unlogged, with a Ticketmaster listing.
  const liveEvent = me?.event ?? null;
  const tmId = liveEvent?.ticketmasterId;
  const wantsPrice = Boolean(liveEvent && tmId && liveEvent.date >= todayIn(METROS[liveEvent.metroId] ?? DEFAULT_METRO) && !yourEntries(log).some((entry) => entry.eventId === liveEvent.id));
  const [price, setPrice] = useState<TicketPrice | null>(null);
  // The people you follow at this event (Kylie, Oct 11): their answers, Interested included, on the event page.
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [friends, setFriends] = useState<FeedItem[]>([]);
  useEffect(() => {
    let current = true;
    if (!account || !liveEvent) {
      setFriends([]);
      return;
    }
    followingFeed(300).then((list) => current && setFriends(list.filter((f) => f.eventId === liveEvent.id)));
    return () => {
      current = false;
    };
  }, [account?.id, liveEvent?.id]);
  useEffect(() => {
    if (!wantsPrice || !tmId) {
      setPrice(null);
      return;
    }
    let current = true;
    ticketPrice(tmId).then((answer) => current && setPrice(answer));
    return () => {
      current = false;
    };
  }, [wantsPrice, tmId]);

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
  // The three crowd figures and the one to highlight (D04). A seeded estimate is a figure, never a ceiling.
  const figures = { ...crowdFigures(e), estimatedSeeded: e.crowd.some((f) => f.kind === 'estimated' && f.count != null) };
  const shown = highlightedCrowd(e);
  const stakesLine = quietStakes(e, day.events);
  const logged = yourEntries(log).find((entry) => entry.eventId === e.id);
  // Your own answer, for the status line under the button.
  const you = yourActivity(e.id, log);
  const youRow = log.plans.find((p) => p.eventId === e.id) ?? logged;
  const youShare = youRow && (you?.kind === 'watching' || you?.kind === 'watched') ? watchShareOf(youRow) : undefined;
  const ahead = e.date >= todayIn(METROS[e.metroId] ?? DEFAULT_METRO);
  // "Stamped" only once the stamp has locked, 24 hours after the night's last start (C041).
  const stampLocked = !ahead && isStampLocked(asMetroDate(e.metroId, date, day.events), (METROS[e.metroId] ?? DEFAULT_METRO).timeZone);
  // The station: the schedule's when it names one, else what you wrote down.
  const tv = e.broadcast ?? logged?.tv;
  // The rivals: other events over the floor starting within an hour, biggest first (build notes 2).
  const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));
  const rivals = day.events
    .filter((r) => r.id !== e.id && sizeTier(r) === 'feeds-friction' && (!e.start || !r.start || Math.abs(toMin(r.start) - toMin(e.start)) <= 60))
    .sort((x, y) => (drawSize(y) ?? 0) - (drawSize(x) ?? 0))
    .slice(0, 5);
  const rivalVenue = (r: CrowdEvent) => (r.place.type === 'venue' ? (VENUES[r.place.venueId] ? venueNameOn(VENUES[r.place.venueId], r.date) : null) : r.place.name);
  // Straight-line miles from this venue to a rival's (build notes 3, 3.3: distance helps explain the pull).
  const rivalMiles = (r: CrowdEvent) => (r.place.type === 'venue' && VENUES[r.place.venueId] ? milesBetween(me.location, VENUES[r.place.venueId].location) : null);
  // The day's events on the map and its biggest draw, for the This day card.
  const dayEvents = day.events.filter(showsOnMap);
  const dayCount = dayEvents.length;
  const biggest = [...dayEvents].sort((x, y) => (drawSize(y) ?? 0) - (drawSize(x) ?? 0))[0];

  return (
    <div className="screen page event-page">
      <MapBack date={date} metroId={e.metroId} eventId={e.id} className="back-link">
        <ChevronDown /> {shortLocalDate(date)}
      </MapBack>

      <header className="event-head">
        <h1 className="page-title">{listTitle(e)}</h1>
        {stakesLine && <p className="event-stakes">{stakesLine}</p>}
        <div className="event-sub">
          {me.venueName}
          {/* A neutral site names its city (build notes 2, event naming). */}
          {e.neutralSite ? ` · ${(METROS[e.metroId] ?? DEFAULT_METRO).name}` : ''}
          {e.start ? ` · ${clockTime(e.start)}` : ''}
          {tv ? ` · ${ahead ? 'On' : 'Was on'} ${tv}` : ''}
        </div>
        <FactList facts={eventFacts(e, logged)} />
        {/* The ticket line (8.1): upcoming, unlogged events with a Ticketmaster listing; the price is looked up live and never stored. */}
        {price && price.url && !price.offsale && (
          <a className="ticket-line" href={price.url} target="_blank" rel="noreferrer">
            {/* With no price the line is just "Tickets ›" (build notes 3, 8.1, item 24): the link may not always be Ticketmaster. */}
            {priceLine(price) ?? 'Tickets'} ›
          </a>
        )}
        {a && (
          <div className="chip-row">
            {/* The two tags (build notes 2): the occasion outline tag, then the friction pill, Unopposed included here. */}
            <EventTags event={e} withUnopposed />
            {a.facts.map((f) => (
              <span key={f} className="chip chip-fact">
                {f}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* One "+ Stub it" opens one sheet (build notes 3, 4.7); your answer sits under it as a status line. */}
      <div className="event-marks">
        <button type="button" className={`gold-button${you ? ' small stub-it-small' : ''}`} onClick={() => setSheet(true)}>
          + Stub it
        </button>
        {you && <StatusLine kind={you.kind} share={youShare} place={you.place} />}
        {logged && <EntryLayer entry={logged} />}
      </div>
      {sheet && <StubSheet event={e} onClose={() => setSheet(false)} />}

      {/* This day (build notes 3, 4.3): the date's read, how many events, and the biggest draw; opens the date page. */}
      <Link to={datePath(date, e.metroId, e.id)} className="card this-day" aria-label="This day">
        <ReadTile rating={day.rating?.rating ?? null} empty={day.empty} />
        <span className="this-day-main">
          <span className="this-day-label">This day</span>
          <span className="this-day-title">
            {shortLocalDate(date)} · {dayCount} {dayCount === 1 ? 'event' : 'events'}
          </span>
          {biggest && <span className="this-day-sub">Biggest: {mapTitle(biggest, day.events)}</span>}
        </span>
        <span className="this-day-chevron" aria-hidden>
          ›
        </span>
      </Link>

      {friends.length > 0 && (
        <section className="you-block" aria-labelledby="friends-event">
          <h2 id="friends-event" className="you-heading">
            Following
          </h2>
          {/* Grouped like the Friends cards (Kylie, Oct 11): "Attending · Sam, Priya", "Watching · Jo at Tom's Bar", "Interested · Lee". */}
          <ActivityLines groups={activityGroups(friends, null)} />
        </section>
      )}

      {a && (
        <section className="card up-against" aria-label="Up against">
          {/* Up against (build notes 3, 3.3; mock call12-up-against, A): this event's rivals over the floor within an hour,
              each with its venue, start and distance; the whole day is one tap away. The old timeline is gone. */}
          <div className="up-against-label">Up against</div>
          <div className="up-against-line">
            {/* A room under the floor gets no pill (build notes 2); Unopposed shows here, and only here. */}
            {sizeTier(e) === 'feeds-friction' ? <FrictionPill level={a.friction} /> : null}
            <span className="up-against-count">{rivals.length > 0 ? `${rivals.length} big ${rivals.length === 1 ? 'draw' : 'draws'} within an hour` : a.why}</span>
          </div>
          {rivals.length > 0 && (
            <ul className="rival-list">
              {rivals.map((r) => {
                const where = rivalVenue(r);
                const miles = rivalMiles(r);
                return (
                  <li key={r.id}>
                    <Link to={eventPath(r.id, r.metroId)} className="rival-row">
                      <span className="rival-dot" aria-hidden />
                      <span className="rival-main">
                        <span className="rival-name">
                          {mapTitle(r, day.events)}
                          {where ? ` · ${where}` : ''}
                          {r.start ? ` · ${clockTime(r.start)}` : ''}
                        </span>
                        {miles !== null && <span className="rival-dist">{miles < 0.5 ? 'Next door' : `${miles < 10 ? miles.toFixed(1) : Math.round(miles)} mi away`}</span>}
                      </span>
                      {drawSize(r) ? (
                        <span className="rival-crowd">
                          <CrowdMark />
                          {crowdThousands(drawSize(r)!)}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
          <Link to={datePath(date, e.metroId, e.id)} className="text-link up-against-link">
            See the whole day ›
          </Link>
          {a.status === 'draft' && <div className="draft-note">Draft. Still being checked.</div>}
          {a.status === 'formula' && !stampLocked && <div className="draft-note">Forecast</div>}
        </section>
      )}

      {ahead && <SameTour event={e} />}

      {/* The crowd block (build notes 3, D04; mock call11b-crowd-hybrid): the highlighted figure big, in a pale-gold row
          with a gold bar; small rows under it list Announced and Final once they exist. The estimate shows only until
          an announced count lands. Final > Announced > Estimated. */}
      <section className="card crowd-block" aria-label="Crowd">
        <div className="crowd-block-label">
          <span className="crowd-block-dot" aria-hidden />
          Crowd
        </div>
        {shown ? (
          <>
            <div className="crowd-hero">
              <span className="crowd-hero-num">
                <CrowdMark />
                {shown.kind === 'estimated' ? (e.expectedDraw?.basis === 'building' && !figures.estimatedSeeded ? `Up to ${fmt(shown.count)}` : `~${fmt(shown.count)}`) : fmt(shown.count)}
              </span>
              <span className="crowd-hero-kind">
                {crowdKindWord(shown.kind)}
                {shown.kind === 'estimated' && <HowButton onOpen={() => setShowHow(true)} />}
              </span>
            </div>
            {(figures.final || (figures.announced && shown.kind === 'final')) && (
              <dl className="crowd-rows">
                {figures.final && (
                  <div className="crowd-row">
                    <dt>Final</dt>
                    <dd>{fmt(figures.final)}</dd>
                  </div>
                )}
                {figures.announced && (
                  <div className="crowd-row">
                    <dt>{crowdKindWord(figures.announcedKind ?? 'announced')}</dt>
                    <dd>{fmt(figures.announced)}</dd>
                  </div>
                )}
              </dl>
            )}
            {shown.kind === 'estimated' && e.expectedDraw?.fromCrowds && me.capacity && (
              <>
                <span className="crowd-fill-word">{fullnessWord(e.expectedDraw.count, me.capacity)}</span>
                <FillBar count={e.expectedDraw.count} capacity={me.capacity} />
              </>
            )}
            {shown.kind === 'estimated' && <DrawNote event={e} />}
          </>
        ) : me.soldOut ? (
          <span className="crowd-number small">Sold Out</span>
        ) : me.capacity ? (
          <>
            <span className="crowd-number small">{fmt(me.capacity)}</span>
            <span className="crowd-kind">Seats · no estimate yet</span>
          </>
        ) : (
          <span className="crowd-kind">No count found yet</span>
        )}
        {me.soldOut && shown && <span className="tag-soldout">SOLD OUT</span>}
      </section>
      {showHow && <HowEstimatesWork onClose={() => setShowHow(false)} event={e} seats={me.capacity} />}

      <WeatherDetail event={e} />

      <p className="source-note">Counts are labeled by kind: announced, reported or estimated. Distances are straight-line.</p>

      <ShareCard
        dateLabel={longLocalDate(date)}
        title={listTitle(e)}
        line={a ? `${frictionVerdictTitle(a.friction, a.rival)}. ${a.why}` : ''}
        friction={a?.friction ?? null}
        rating={day.rating ? day.rating.rating : null}
        crowd={shown ? `${fmt(shown.count)} ${crowdKindWord(shown.kind)}` : me.soldOut ? 'Sold Out' : null}
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

function DrawNote({ event }: { event: CrowdEvent }) {
  const d = event.expectedDraw;
  // The middle half lives in the (i) card (Kylie, Oct 8: "half of games land between"); a playoff planning range stays here.
  if (!d || !d.planning || d.low == null || d.high == null || roundEstimate(d.low) === roundEstimate(d.high)) return null;
  return <p className="crowd-note">Likely {fmt(roundEstimate(d.low))}–{fmt(roundEstimate(d.high))}.</p>;
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
  const n = d.games ? `${d.games} announced` : 'announced';
  // Name the real basis (C031): this team here, this team's and the league's playoff games, or the league's.
  const basis =
    d.basis === 'league' ? `${n} playoff crowds across the league` : d.basis === 'blend' ? `${n} playoff crowds, this team's and the league's` : `${n} crowds for this team at ${where}`;
  const parts = [`Based on ${basis}${span ? `, ${span}` : ''}.`];
  if (d.low != null && d.high != null && roundEstimate(d.low) !== roundEstimate(d.high)) {
    parts.push(d.planning ? `A planning range: ${fmt(roundEstimate(d.low))} to ${fmt(roundEstimate(d.high))}.` : `Half of games land between ${fmt(roundEstimate(d.low))} and ${fmt(roundEstimate(d.high))}.`);
  }
  // Over the listed seats (3.2): name standing room only where a standing figure is on file.
  if (seats && d.count > seats) {
    const standing = event.place.type === 'venue' ? VENUES[event.place.venueId]?.capacity.find((c) => c.standing)?.standing : undefined;
    parts.push(standing ? `${where} sells standing room, so crowds can top its ${fmt(seats)} seats.` : 'Announced crowds here have topped the listed seats.');
  }
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
        {/* Short headed sections (Kylie, Oct 9, C071). */}
        <h2 className="how-sub">Games</h2>
        <p className="home-helper">
          This team's typical announced crowd here on this kind of date, over the last two or three seasons, nudged by how
          the team is drawing this season and how this visitor has drawn here.
        </p>
        <h2 className="how-sub">Playoff games</h2>
        <p className="home-helper">
          How full this building got at past playoff games in this round, the team's or the league's. With none on file, the
          building itself, as "Up to". The range is a planning range; its low end counts toward friction.
        </p>
        <h2 className="how-sub">Shows</h2>
        <p className="home-helper">
          The room's own published average when it has one; otherwise the full room for a venue built for shows, or{' '}
          {Math.round(CONCERT_FILL * 100)}% of an arena or stadium.
        </p>
        <h2 className="how-sub">Counts</h2>
        <p className="home-helper">Teams announce tickets sold or handed out, not people through the gates. An announced or reported count replaces the estimate when it lands.</p>
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
  eventId,
  className,
  children,
}: {
  date: string;
  metroId?: string;
  /** Given, the date line opens this event's date page unless the map sent you here (Kylie, Oct 11, call 6). */
  eventId?: string;
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
  const to = fromMap ? (memoryHref ?? '/explore') : eventId ? datePath(date, metroId ?? DEFAULT_METRO.id, eventId) : `/explore?${params.toString()}`;
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
