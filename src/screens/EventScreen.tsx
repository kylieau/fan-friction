import { useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS, degreesFor } from '../config/metros';
import { frictionVerdictTitle } from '../config/scoreLabels';
import { CrowdMark, FormulaCrowd, FrictionVerdict, OccasionTag, pageFriction } from '../components/EventTags';
import { GettingThereRow } from '../components/GettingThere';
import { StubSheet } from '../components/StubSheet';
import { recordOpened } from '../lib/openedEvents';
import { TypeIcon } from '../components/TypeIcon';
import { FriendsCard, YourStubTicket } from '../components/ActivityCards';
import { yourActivity } from '../lib/activity';
import {
  drawSize,
  crowdFull,
  FRICTION_ATTENDEES,
  knownSize,
  SMALL_DRAW_SPORTS,
  eventType,
  popupExplainer,
  setStubVisibility,
  stubLevel,
  dateRoads,
  displayFilter,
  eventRoads,
  gettingThereOn,
  pastRoadsLine,
  splitByDisplay,
  feelsLikeLabel,
  isOpenAir,
  storyFor,
  sizeTier,
  venueNameOn,
  VENUES,
  cityTravelLine,
  weatherForEvent,
  weatherForEventAsItWas,
  weatherGlyph,
  weatherRangeForEvent,
} from '../data';
import {
  CONCERT_FILL,
  announcedSourceLabel,
  crowdFigures,
  crowdKindWord,
  eventFacts,
  highlightedCrowd,
  roundEstimate,
  getCityDate,
  getPersonalLog,
  subscribePersonalLog,
  todayIn,
  yourEntries,
  subscribeAccount,
  getAccount,
  followingFeed,
  type FeedItem,
  type CityDate,
  type CrowdEvent,
} from '../data';
import { crowdPoints, showsOnMap } from '../map/crowdPoints';
import { RemoveFromLog } from '../components/EntryLayer';
import { SameTour } from '../components/SameTour';
import { FactList } from '../components/FactList';
import { ArrowRight, ClockIcon, CompareIcon, MapIcon, PinIcon, ShareIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { ShareRow } from '../components/ShareCard';
import { clockTime, dateWithYear, shortLocalDate } from '../lib/dates';
import { fullTitle, headerTitle, isLabelText, mapTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, openedFromMap, readMapMemory } from '../lib/mapReturn';
import { comparePath, datePath, openedMetroId, eventPath } from '../lib/view';
import { longLocalDate } from '../lib/dates';
import { milesBetween } from '../lib/windows';
import { devFeed } from '../lib/devFeed';
import { TitleText } from '../components/TitleText';
import { eventFromGame, eventFromStub, gameRefFromId, getTeamSchedule, sameGame, stubShapeOf, TEAMS, type GameLink, type StubShape } from '../data';
import { BackLink } from '../components/BackLink';
import { FurtherOutInfo } from '../components/FurtherOut';

const fmt = (n: number) => n.toLocaleString('en-US');

// One event: what it was, how much competition it faced (known beforehand),
// the crowd as labeled evidence, and what else was on at the same time.
export function EventScreen() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const date = id.slice(0, 10);
  const requestedMetro = params.get('metro');
  const [day, setDay] = useState<CityDate | null>(null);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const [showHow, setShowHow] = useState(false);
  const [sheet, setSheet] = useState(false);
  // A team page's schedule row hands over its game (Kylie, Oct 15: every game can be stubbed, however you got here).
  const location = useLocation();
  // A cold link (pasted, opened fresh) carries nothing: the id names the team, so its schedule finds the game.
  const [coldLink, setColdLink] = useState<GameLink | null>(null);
  const [coldPending, setColdPending] = useState(false);
  const link = (location.state as { game?: GameLink } | null)?.game ?? coldLink ?? undefined;
  useEffect(() => {
    setColdLink(null);
    const ref = (location.state as { game?: GameLink } | null)?.game ? null : gameRefFromId(id);
    setColdPending(Boolean(ref));
    if (!ref) return;
    let current = true;
    getTeamSchedule(ref.teamId).then((games) => {
      if (!current) return;
      const game = games?.find((g) => g.id === ref.gameId);
      if (game) setColdLink({ teamId: ref.teamId, game });
      setColdPending(false);
    });
    return () => {
      current = false;
    };
  }, [id]);
  // A friend's line on such a game hands over what it knows (title, date, venue), since you hold no row for it.
  const friendStub = (location.state as { stub?: StubShape } | null)?.stub;

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
      const seen: CityDate[] = [];
      for (const metroId of metros) {
        const next = await getCityDate(metroId, date);
        if (!current) return;
        last = next;
        seen.push(next);
        if (next.events.some((event) => event.id === id)) {
          setDay(next);
          return;
        }
        // A further-out event (Kylie, Oct 19–20, 2026) opens on its own: no rivals, no verdict, since it never
        // counts toward the city's day.
        const further = next.furtherOut?.find((event) => event.id === id);
        if (further) {
          setDay({ ...next, events: [further], rating: null, status: 'unrated', furtherOut: undefined });
          return;
        }
      }
      // The same game under another id (a hand seed's "2026-10-03-dodgers" for the feed's MLB id): open that one.
      if (link) {
        const host = link.game.eventMetroId && !metros.includes(link.game.eventMetroId) ? await getCityDate(link.game.eventMetroId, date) : null;
        if (!current) return;
        const match = sameGame(link, [...seen, ...(host ? [host] : [])].flatMap((d) => d.events));
        if (match) {
          navigate(eventPath(match.id, match.metroId), { replace: true, state: location.state });
          return;
        }
      }
      if (current) setDay(last);
    })();
    return () => {
      current = false;
    };
  }, [id, date, requestedMetro, link?.game.id]);

  // A room under the floor can still open. It does not show up as competition on a bigger event.
  const points = day
    ? crowdPoints(
        day.events.filter((event) => event.id === id || showsOnMap(event)),
        date,
        true,
      )
    : [];
  const me = points.find((p) => p.event.id === id);
  // Hooks sit before the early returns. The ticket line and its live price lookup are off (Kylie, Oct 15, B6-01 option
  // C; build 6, item 12): "seems complicated and hasn't been helpful so far". `api/ticket-price.ts`, `src/data/tickets.ts`
  // and the stored `ticketmasterId` stay (the official-site link on Favorites reads the id), so it can come back.
  const liveEvent = me?.event ?? null;
  // The people you follow at this event (Kylie, Oct 11): their answers, Interested included, on the event page.
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [friends, setFriends] = useState<FeedItem[]>([]);
  // The same feed for the whole date: events friends are attending always count on the This day card (build 5, item 6).
  const [dayFriends, setDayFriends] = useState<FeedItem[]>([]);
  useEffect(() => {
    let current = true;
    const pasted = devFeed();
    if (pasted && liveEvent) {
      setFriends(pasted.filter((f) => f.eventId === liveEvent.id));
      setDayFriends(pasted.filter((f) => f.date === liveEvent.date));
      return;
    }
    if (!account || !liveEvent) {
      setFriends([]);
      setDayFriends([]);
      return;
    }
    followingFeed(300).then((list) => {
      if (!current) return;
      setFriends(list.filter((f) => f.eventId === liveEvent.id));
      setDayFriends(list.filter((f) => f.date === liveEvent.date));
    });
    return () => {
      current = false;
    };
  }, [account?.id, liveEvent?.id]);
  // Memoized: the roads read the weather per event, so it runs once per day's events, not per render (advisor, Nov 6).
  // Above the early returns: a hook after them ran only once the day had loaded, so a cold open of any event page
  // rendered more hooks than its first pass and crashed to a blank screen (found Nov 6, evening; see the 7.2 report).
  const roadsOn = gettingThereOn(log);
  const roadsMetro = me?.event.metroId ?? null;
  const dayEventsForRoads = day?.events ?? null;
  const roads = useMemo(() => (roadsOn && roadsMetro && dayEventsForRoads ? dateRoads(roadsMetro, date, dayEventsForRoads) : null), [roadsOn, roadsMetro, date, dayEventsForRoads]);
  if (!day) return <div className="screen page" />;
  if (!me) {
    // No catalog event: a schedule game, or a stub saved from one, still gets its page and its Stub it.
    const saved = log.added.find((entry) => entry.eventId === id) ?? log.plans.find((plan) => plan.eventId === id);
    const game = link ? eventFromGame(link) : saved ? eventFromStub(id, stubShapeOf(saved)) : friendStub ? eventFromStub(id, friendStub) : null;
    if (game && game.id === id) return <GameOnlyPage event={game} link={link} />;
    if (coldPending) return <div className="screen page" />;
    return (
      <div className="screen page">
        <BackLink to={datePath(date, requestedMetro ?? DEFAULT_METRO.id)} />
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
  // The friction verdict on this page (build 6, item 1): every level, Unopposed included, once the event feeds friction.
  const verdict = pageFriction(e);
  // The three crowd figures and the one to highlight (D04). A seeded estimate is a figure, never a ceiling.
  const figures = crowdFigures(e);
  const shown = highlightedCrowd(e);
  const sourceLabel = announcedSourceLabel(e);
  const logged = yourEntries(log).find((entry) => entry.eventId === e.id);
  // Your own answer, for the status line under the button.
  const you = yourActivity(e.id, log);
  const youRow = log.plans.find((p) => p.eventId === e.id) ?? logged;
  const ahead = e.date >= todayIn(METROS[e.metroId] ?? DEFAULT_METRO);
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
  // The day's events on the map and its biggest draw, for the This day card; inside the crowd size range and
  // Event Types only (build 5, item 6, answer A; build 7.2, C12). Up against above stays unfiltered (answer B).
  // A further-out event (outside the city, within about 2 hours) opens on its own; it has no This day card.
  const furtherRoom = e.place.type === 'venue' ? VENUES[e.place.venueId]?.furtherOut : undefined;
  const further = Boolean(furtherRoom);
  const furtherTown = furtherRoom?.town;
  const dayEvents = splitByDisplay(day.events.filter(showsOnMap), displayFilter(log, 'lists', dayFriends)).shown;
  const dayCount = dayEvents.length;
  const biggest = [...dayEvents].sort((x, y) => (drawSize(y) ?? 0) - (drawSize(x) ?? 0))[0];

  // Build 7.1, M33 (Lean: A's order plus the Your Stub line; mocks 501–529): header, action, the line, Crowd, Up
  // Against, Weather, the story, This Day, Following, Your Stub, More Dates, the footer card. A Watched page carries no
  // This Day verdict and no verdict in what it shares (M23).
  const today = todayIn(METROS[e.metroId] ?? DEFAULT_METRO);
  const roadsRow = roads && ahead ? eventRoads(roads, e.id) : null;
  const pastRoads = roads && !ahead ? pastRoadsLine(roads, e.id) : null;
  const watchedPage = you?.kind === 'watched';
  const level = account && youRow ? stubLevel(youRow) : null;
  // Only a friction call the page itself makes is shared: a small room's raw assessment stays out (Codex stage 4 re-run).
  const shareLine = a && verdict ? `${frictionVerdictTitle(a.friction, a.rival)}. ${a.why}` : '';
  // Mock 515: a room known to be under 5,000 says why there's no friction call. A special the floor rule holds back
  // in a bigger room, and a room of unknown size, say nothing.
  const tier = sizeTier(e);
  const tooSmall = !verdict && !e.belowFloor && (tier === 'prelist' || tier === 'under-prelist');
  const shareCrowd = shown ? `${shown.atLeast ? 'At least ' : ''}${fmt(shown.count)} ${crowdKindWord(shown.kind)}` : me.soldOut ? 'Sold Out' : null;

  return (
    <div className="screen page event-page">
      {/* Back to wherever you came from (Faves, a team page, the map, Stubs); a cold open falls back to the date. */}
      <BackLink to={datePath(date, e.metroId, e.id)} />

      <header className="event-head">
        <h1 className="page-title">
          <TypeIcon typeKey={eventType(e).key} size={18} className="title-type-icon" />
          <TitleText text={headerTitle(e)} />
        </h1>
        {/* The date and time line in every header (M33), the year when it isn't this year; the station after it. */}
        <div className="event-line">
          <ClockIcon />
          <span>{[dateWithYear(date, today), e.start ? clockTime(e.start) : null, tv ? `${ahead ? 'On' : 'Was on'} ${tv}` : null].filter(Boolean).join(' · ')}</span>
        </div>
        <div className="event-line">
          <PinIcon />
          <span>
            {me.venueName}
            {/* A neutral site names its city (build notes 2, event naming). */}
            {e.neutralSite ? ` · ${(METROS[e.metroId] ?? DEFAULT_METRO).name}` : ''}
            {/* A further-out event names its town (Kylie, Oct 20, 2026, afternoon); the drive stays on list rows. */}
            {furtherTown ? ` · ${furtherTown}` : ''}
          </span>
        </div>
        {/* The (i) opens the definition (Kylie, Oct 21, 2026). */}
        {further && (
          <div className="event-further">
            Further Out <FurtherOutInfo />
          </div>
        )}
        {/* A fan-added event (step 2 of the Add a game / Add a show card, Oct 21, 2026): the label stays once confirmed. */}
        {e.sourceId === 'fan' && <div className="event-further">Added by a fan</div>}
        {/* No ticket line (build 6, item 12): hidden, not deleted; the .ticket-line style stays for its return. */}
        {a && (a.occasion || a.facts.some((f) => !isLabelText(f))) && (
          <div className="chip-row">
            {/* The occasion tag, always the event's own (build 6, item 2). */}
            <OccasionTag occasion={a.occasion} />
            {/* The round already reads under the title (labels r3); a fact that repeats it is left out. */}
            {a.facts.filter((f) => !isLabelText(f)).map((f) => (
              <span key={f} className="chip chip-fact">
                {f}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Activity (build 7.2, R2a; Kylie, Nov 4: "Your Stub Is The Hero"): your stub as a ticket under an ACTIVITY
          label, then the Friends card. The status chip, the Your Stub line, the bottom Your Stub card and the
          Following section are merged into these two (H11a, H11e). */}
      <div className="activity-section">
        <span className="activity-section-label">Activity</span>
        <YourStubTicket
          event={e}
          you={you}
          entry={logged}
          row={youRow}
          level={level}
          ahead={ahead}
          venue={e.place.type === 'venue' ? (VENUES[e.place.venueId] ? venueNameOn(VENUES[e.place.venueId], e.date) : null) : e.place.name}
          onEdit={() => setSheet(true)}
          onLevel={(next) => void setStubVisibility(e.id, next)}
        />
        <FriendsCard friends={friends} />
      </div>
      {sheet && <StubSheet event={e} onClose={() => setSheet(false)} />}
      <RecordOpened event={e} />

      {/* The crowd block (build notes 3, D04; mock call11b-crowd-hybrid): the highlighted figure big, in a pale-gold row
          with a gold bar; small rows under it list Announced and Final once they exist. The estimate shows only until
          an announced count lands. Final > Announced > Estimated. The event's facts sit under it (M33). */}
      <section className="card crowd-block" aria-label="Crowd">
        <div className="crowd-block-label">
          <span className="crowd-block-dot" aria-hidden />
          Crowd
          {/* The verdict where the crowd is read (build 6, item 1, Kylie's Q2): the pill with a 16 px ring at its left. */}
          {verdict && <FrictionVerdict level={verdict} />}
        </div>
        {shown ? (
          <>
            <div className="crowd-hero">
              <span className="crowd-hero-num">
                <CrowdMark />
                {/* A floor's "At least" in the small text face, so the number keeps one line (Kylie, Oct 16). */}
                {shown.atLeast && <span className="crowd-hero-floor">At least</span>}
                {shown.atLeast ? fmt(shown.count) : crowdFull(shown, fmt)}
              </span>
              <span className="crowd-hero-kind">
                {crowdKindWord(shown.kind)}
                {(shown.kind === 'announced' || shown.kind === 'reported') && sourceLabel ? (
                  <span className="crowd-row-source"> · {sourceLabel}</span>
                ) : null}
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
                    <dt>
                      {crowdKindWord(figures.announcedKind ?? 'announced')}
                      {sourceLabel ? <span className="crowd-row-source"> · {sourceLabel}</span> : null}
                    </dt>
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
            {/* A pop-up's estimate says how it was made (build 5, item 10): "Sold out · 95% of 400 capacity". */}
            {shown.kind === 'estimated' && popupExplainer(e.expectedDraw) && <p className="crowd-note">{popupExplainer(e.expectedDraw)}</p>}
          </>
        ) : me.soldOut ? (
          <span className="crowd-number small">Sold Out</span>
        ) : me.capacity ? (
          <>
            {/* A ceiling, never a count (build 7.2, I3 and R3d: words here, "14k cap" on rows): the room's size,
                labeled as such. A small-draw college sport in a 5,000+ room (the formula already ignores the room,
                read.ts) says so in one plain sentence, so "Up to 13,800" never reads as a volleyball crowd. */}
            <span className="crowd-number small crowd-up-to">Up to {fmt(me.capacity)}</span>
            <span className="crowd-kind">Room size · no estimate yet</span>
            {e.audience.domain === 'sports' && SMALL_DRAW_SPORTS.has(e.audience.sport) && me.capacity >= FRICTION_ATTENDEES && (knownSize(e) ?? 0) < me.capacity && (
              <p className="crowd-note crowd-up-to-note">
                {e.audience.sport.charAt(0).toUpperCase() + e.audience.sport.slice(1)} here draws far fewer than the room holds.
              </p>
            )}
          </>
        ) : (
          // No count, estimate or room size (build 5, item 3). The word "unsized" never shows.
          <span className="crowd-kind">— Size unknown</span>
        )}
        {me.soldOut && shown && <span className="tag-soldout">SOLD OUT</span>}
        {tooSmall && <p className="crowd-small-note">Under 5,000: too small for a friction call.</p>}
        {eventFacts(e, logged).length > 0 && (
          <div className="crowd-facts">
            <FactList facts={eventFacts(e, logged)} />
          </div>
        )}
      </section>
      {showHow && <HowEstimatesWork onClose={() => setShowHow(false)} event={e} seats={me.capacity} />}

      {/* Room size is the fourth kind (build 7.2, I3): a ceiling, shown only when no count or estimate exists. */}
      <p className="source-note">Counts are labeled by kind: announced, reported, estimated, or room size. Distances are straight-line.</p>

      {/* Getting There (build 7.2, Section E; mock 07): one row under Crowd (R4e) while the switch is on and the date is
          ahead; on a past date, one quiet line only when the roads read Heavy (R4h). */}
      {roadsRow && <GettingThereRow roads={roadsRow} metroId={e.metroId} date={date} />}
      {pastRoads && <p className="source-note gt-past">{pastRoads}</p>}

      {a && (
        <section className="card up-against" aria-label="Up Against">
          {/* Up against (build notes 3, 3.3; mock call12-up-against, A): this event's rivals over the floor within an hour,
              each on two lines (M33): the name, then its venue, start and distance; the whole day is one tap away. */}
          <div className="up-against-label">Up Against</div>
          <div className="up-against-line">
            {/* The pill stays here as well as on Crowd (build 6, item 1, Kylie's Q2), though the M33 mock drops it. */}
            {verdict && <FrictionVerdict level={verdict} />}
            <span className="up-against-count">{rivals.length > 0 ? `${rivals.length} big ${rivals.length === 1 ? 'draw' : 'draws'} within an hour` : a.why}</span>
          </div>
          {rivals.length > 0 && (
            <ul className="rival-list">
              {rivals.map((r) => {
                const where = rivalVenue(r);
                const miles = rivalMiles(r);
                const away = miles === null ? null : miles < 0.5 ? 'Next door' : `${miles < 10 ? miles.toFixed(1) : Math.round(miles)} mi away`;
                return (
                  <li key={r.id}>
                    <Link to={eventPath(r.id, r.metroId)} className="rival-row">
                      <span className="rival-dot" aria-hidden />
                      <span className="rival-main">
                        <span className="rival-name">{mapTitle(r, day.events)}</span>
                        <span className="rival-dist">{[where, r.start ? clockTime(r.start) : null, away].filter(Boolean).join(' · ')}</span>
                      </span>
                      <FormulaCrowd event={r} className="rival-crowd" />
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
        </section>
      )}

      <WeatherDetail event={e} />

      <StorySlot event={e} />

      {/* This Day (build notes 3, 4.3): the date's read, how many events, and the biggest draw; opens the date page. Not on
          a further-out event (Kylie, Oct 19–20, 2026) and not on a Watched page (M23: Watched never counts). */}
      {!further && !watchedPage && (
        <Link to={datePath(date, e.metroId, e.id)} className="card this-day" aria-label="This Day">
          <ReadTile rating={day.rating?.rating ?? null} empty={day.empty} />
          <span className="this-day-main">
            <span className="this-day-label">This Day</span>
            <span className="this-day-title">
              {shortLocalDate(date)} · {dayCount} {dayCount === 1 ? 'event' : 'events'}
            </span>
            {biggest && <span className="this-day-sub">Biggest: {mapTitle(biggest, day.events)}</span>}
          </span>
          <span className="this-day-chevron" aria-hidden>
            ›
          </span>
        </Link>
      )}


      {ahead && <SameTour event={e} />}

      {/* The footer card (M33): Share this event (the same text the card shared), Compare with…, Back to the map; buttons in
          sentence case (AGENTS.md). */}
      <section className="card footer-card" aria-label="More">
        <ShareRow
          icon={<ShareIcon />}
          dateLabel={longLocalDate(date)}
          title={fullTitle(e)}
          line={shareLine}
          rating={!watchedPage && day.rating ? day.rating.rating : null}
          crowd={shareCrowd}
          sub={`Shares ${[shortLocalDate(date), fullTitle(e), shareCrowd ? shareCrowd.toLowerCase() : null].filter(Boolean).join(' · ')}`}
        />
        {logged && (
          <Link to={comparePath({ metroId: e.metroId, date, eventId: e.id })} className="footer-row compare-link">
            <CompareIcon />
            <span className="footer-row-words">
              <span className="footer-row-title">Compare with…</span>
            </span>
          </Link>
        )}
        <MapBack date={date} metroId={e.metroId} className="footer-row">
          <MapIcon />
          <span className="footer-row-words">
            <span className="footer-row-title">Back to the map</span>
          </span>
        </MapBack>
      </section>

      {logged && <RemoveFromLog entry={logged} />}
    </div>
  );
}

/**
 * The evening's story (build notes 4, P4): a short paragraph and its source links, under the crowd, in a
 * white card. The whole block is left out when there is no story. "The evening" for a start at 5 pm or later,
 * otherwise, or with no start, "The day": "night" stays out of app copy except run labels (build 6, item 11, a
 * lean; Kylie's wording to confirm). The CSS class keeps its old name.
 */
function StorySlot({ event }: { event: CrowdEvent }) {
  const story = storyFor(event.id);
  if (!story) return null;
  const evening = event.start ? event.start >= '17:00' : false;
  return (
    <section className="card night-story" aria-label={evening ? 'The evening' : 'The day'}>
      <h2 className="night-story-label">{evening ? 'The Evening' : 'The Day'}</h2>
      <p className="night-story-text">{story.text}</p>
      {story.links.length > 0 && (
        <p className="night-story-links">
          {story.links.map((link, i) => (
            <span key={link.url}>
              {i > 0 && ' · '}
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </span>
          ))}
        </p>
      )}
    </section>
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
  // A show's published fill or run average (Oct 26, 2026): its note already names the figure and the source.
  if (d?.basis === 'published') return d.note;
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
  const ownShare = event.place.type === 'venue' ? VENUES[event.place.venueId]?.carShare : undefined;
  const travel = ownShare === undefined ? cityTravelLine(event.metroId) : null;
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
          {about ? 'About This Estimate' : 'How Estimates Work'}
        </h1>
        {about && <p className="how-about">{about}</p>}
        {/* Short headed sections (Kylie, Oct 9, C071). */}
        {/* Build 5, item 10 (board estimated-crowds-lean-about-estimate): the pop-up rule, first. */}
        <h2 className="how-sub">Pop-ups</h2>
        <p className="home-helper">
          Events not on Ticketmaster: 80% of the stated capacity, or 95% if sold out or waitlisted. Labeled Estimated; an
          announced count replaces it.
        </p>
        <h2 className="how-sub">Games</h2>
        <p className="home-helper">
          This team's typical announced crowd here on this kind of date, over the last two or three seasons, nudged by how
          the team is drawing this season and how this visitor has drawn here.
        </p>
        <h2 className="how-sub">Playoff Games</h2>
        <p className="home-helper">
          How full this building got at past playoff games in this round, the team's or the league's. With none on file, the
          building itself. The range is a planning range; its low end counts toward friction.
        </p>
        <h2 className="how-sub">Shows</h2>
        <p className="home-helper">
          The room's own published average when it has one; otherwise the full room for a venue built for shows, or{' '}
          {Math.round(CONCERT_FILL * 100)}% of an arena or stadium.
        </p>
        {/* Gridlock (build 5, N1/B1; Kylie, Oct 14): the city's plain-words line, only when the venue has no arrival
            figure of its own (a city line would mislead at, say, Wrigley); the venue's own wording waits on Kylie. */}
        {travel && (
          <>
            <h2 className="how-sub">Gridlock</h2>
            <p className="home-helper">{travel}</p>
          </>
        )}
        <h2 className="how-sub">Counts</h2>
        <p className="home-helper">Teams announce tickets sold or handed out, not people through the gates. An announced or reported count replaces the estimate when it lands.</p>
        <button type="button" className="home-city" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}

/**
 * The event page's weather card. Before and on the day, the forecast at the start; from the day after, what it was
 * (the observed rows the nightly fetches the night after, else the reanalysis archive), while the verdict keeps the
 * forecast it was judged on (Kylie, Nov 7, 2026, the weather plan's question 4). A retractable room says so under
 * the title (M33): the forecast still applies, since no feed says whether the roof is closed on the day.
 */
function WeatherDetail({ event }: { event: CrowdEvent }) {
  if (!isOpenAir(event)) return null;
  const over = event.date < todayIn(METROS[event.metroId] ?? DEFAULT_METRO);
  const asItWas = over ? weatherForEventAsItWas(event) : undefined;
  const row = asItWas ?? weatherForEvent(event);
  if (!row) return null;
  const range = weatherRangeForEvent(event, undefined, Boolean(asItWas));
  const retractable = event.place.type === 'venue' && VENUES[event.place.venueId]?.roof === 'retractable';
  const rows: [string, string][] = [
    ['Feels Like', feelsLikeLabel(row, event.metroId)],
    ['Air', degreesFor(row.tempF, event.metroId)],
  ];
  if (range && range.high.feelsLikeF !== range.low.feelsLikeF) {
    rows.push(['During', `${feelsLikeLabel(range.low, event.metroId)}–${feelsLikeLabel(range.high, event.metroId)}`]);
  }
  if (row.humidity != null) rows.push(['Humidity', `${Math.round(row.humidity)}%`]);
  if (row.windMph != null) rows.push(['Wind', `${Math.round(row.windMph)} mph`]);
  if (row.uvIndex != null) rows.push(['UV', `${Math.round(row.uvIndex)}`]);
  if (row.precipProbability != null) rows.push(['Rain Chance', `${Math.round(row.precipProbability)}%`]);
  else if (row.precipMm != null) rows.push(['Rain', row.precipMm >= 1 ? `${row.precipMm.toFixed(1)} mm` : 'none']);
  return (
    <section className="card weather-card" aria-label="Weather at the venue">
      <div className="weather-head">
        <span className="weather-glyph big" aria-hidden>
          {weatherGlyph(row)}
        </span>
        <span className="weather-title">
          {row.basis === 'forecast' ? 'Forecast' : 'What it was'} at {event.start ? clockTime(event.start) : 'start'}
          {/* A past day's rows are the weather service's own archived model run or the reanalysis archive, not a station's
              reading, so they carry the label every estimate does (Codex, group 12; the Oct 5 rule's "labeled estimated"). */}
          {row.basis !== 'forecast' && <span className="weather-basis">estimated</span>}
          {retractable && <span className="weather-roof">Retractable roof</span>}
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

/**
 * A game the app holds no event for (an away game outside the covered cities, a day before the nightly
 * job began): the event page's header and its "+ Stub it", nothing that needs data the app doesn't have
 * (no read, no crowd, no day card).
 */
/** Notes the open on this device for the Log sheet's Recent (build 7); a child, so the page's hooks stay in order. */
function RecordOpened({ event }: { event: CrowdEvent }) {
  useEffect(() => {
    recordOpened(event);
  }, [event.id]);
  return null;
}

function GameOnlyPage({ event, link }: { event: CrowdEvent; link?: GameLink }) {
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [sheet, setSheet] = useState(false);
  const you = yourActivity(event.id, log);
  const logged = yourEntries(log).find((entry) => entry.eventId === event.id);
  const youRow = log.plans.find((p) => p.eventId === event.id) ?? logged;
  const ahead = event.date >= todayIn(METROS[event.metroId] ?? DEFAULT_METRO);
  const venue = event.place.type === 'venue' ? (VENUES[event.place.venueId] ? venueNameOn(VENUES[event.place.venueId], event.date) : null) : event.place.name || null;
  const team = link ? TEAMS[link.teamId] : undefined;
  const score = link?.game.score;
  // Winner first, as on any event page.
  const sidesScored = score && team ? [{ name: team.shortName, pts: score.us }, { name: link!.game.opponent, pts: score.them }].sort((x, y) => y.pts - x.pts) : [];
  const facts: { label: string; value: string }[] = sidesScored.length ? [{ label: 'Outcome', value: sidesScored.map((x) => `${x.name} ${x.pts}`).join(', ') }] : [];
  return (
    <div className="screen page event-page">
      {/* Back where you came from; on a cold open, the team's page or My Stubs (its date has no map to open). */}
      <BackLink to={link ? `/favorites/team/${link.teamId}` : '/you/stubs'} />
      <header className="event-head">
        <h1 className="page-title">
          <TypeIcon typeKey={eventType(event).key} size={18} className="title-type-icon" />
          {/* Built from a schedule game, the full name like any event page; rebuilt from a stub, the stub's own name. */}
          <TitleText text={link ? headerTitle(event) : event.title} />
        </h1>
        {/* The date line and the venue line, as on every event header (build 7.1, M33). */}
        <div className="event-line">
          <ClockIcon />
          <span>{[dateWithYear(event.date, todayIn(METROS[event.metroId] ?? DEFAULT_METRO)), event.start ? clockTime(event.start) : null].filter(Boolean).join(' · ')}</span>
        </div>
        {venue && (
          <div className="event-line">
            <PinIcon />
            <span>{venue}</span>
          </div>
        )}
        <FactList facts={facts} />
      </header>
      {/* The same ticket as the catalog page (build 7.2, R2a; M33 made the Your Stub card part of this page's minimum).
          No Friends card here: a page the catalog does not hold has no feed lines to show. */}
      <div className="activity-section">
        <span className="activity-section-label">Activity</span>
        <YourStubTicket
          event={event}
          you={you}
          entry={logged}
          row={youRow}
          level={account && youRow ? stubLevel(youRow) : null}
          ahead={ahead}
          venue={venue}
          onEdit={() => setSheet(true)}
          onLevel={(next) => void setStubVisibility(event.id, next)}
        />
      </div>
      {sheet && <StubSheet event={event} onClose={() => setSheet(false)} />}
      <RecordOpened event={event} />
    </div>
  );
}
