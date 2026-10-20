import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS, degreesFor } from '../config/metros';
import { frictionVerdictTitle } from '../config/scoreLabels';
import { CrowdMark, FrictionVerdict, OccasionTag, pageFriction } from '../components/EventTags';
import { StubSheet } from '../components/StubSheet';
import { TypeIcon } from '../components/TypeIcon';
import { LevelPill } from '../components/LevelPill';
import { AddToCalendar } from '../components/AddToCalendar';
import { ActivityLines, StatusLine } from '../components/ActivityLines';
import { activityGroups, yourActivity } from '../lib/activity';
import { crowdThousands } from '../map/crowdPoints';
import {
  drawSize,
  atLeastMark,
  crowdFull,
  eventType,
  popupExplainer,
  setStubVisibility,
  stubDefault,
  stubLevel,
  alwaysShownIds,
  crowdRangeOf,
  rangeOn,
  splitByRange,
  feelsLikeLabel,
  isOpenAir,
  seatsLine,
  storyFor,
  sizeTier,
  venueNameOn,
  VENUES,
  cityTravelLine,
  weatherForEvent,
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
import { ArrowRight } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { ShareCard } from '../components/ShareCard';
import { clockTime, shortLocalDate } from '../lib/dates';
import { fullTitle, isLabelText, mapTitle } from '../lib/eventTitle';
import { clearOpenedFromMap, openedFromMap, readMapMemory } from '../lib/mapReturn';
import { comparePath, datePath, openedMetroId, eventPath, tagPath } from '../lib/view';
import { longLocalDate } from '../lib/dates';
import { milesBetween } from '../lib/windows';
import { TitleText } from '../components/TitleText';
import { eventFromGame, eventFromStub, gameRefFromId, getTeamSchedule, sameGame, stubShapeOf, TEAMS, type GameLink, type StubShape } from '../data';
import { BackLink } from '../components/BackLink';

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
  const youShare = youRow && (you?.kind === 'watching' || you?.kind === 'watched') ? watchShareOf(youRow) : undefined;
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
  // The day's events on the map and its biggest draw, for the This day card; inside the crowd size range only
  // (build 5, item 6, answer A). Up against above stays unfiltered (answer B).
  // A further-out event (outside the city, within about 2 hours) opens on its own; it has no This day card.
  const furtherRoom = e.place.type === 'venue' ? VENUES[e.place.venueId]?.furtherOut : undefined;
  const further = Boolean(furtherRoom);
  const furtherTown = furtherRoom?.town;
  const dayEvents = splitByRange(day.events.filter(showsOnMap), rangeOn(crowdRangeOf(log), 'lists'), alwaysShownIds(log, dayFriends)).shown;
  const dayCount = dayEvents.length;
  const biggest = [...dayEvents].sort((x, y) => (drawSize(y) ?? 0) - (drawSize(x) ?? 0))[0];

  return (
    <div className="screen page event-page">
      {/* Back to wherever you came from (Faves, a team page, the map, Stubs); a cold open falls back to the date. */}
      <BackLink to={datePath(date, e.metroId, e.id)} />

      <header className="event-head">
        <h1 className="page-title">
          <TypeIcon typeKey={eventType(e).key} size={18} className="title-type-icon" />
          <TitleText text={fullTitle(e)} />
        </h1>
        <div className="event-sub">
          {me.venueName}
          {/* A neutral site names its city (build notes 2, event naming). */}
          {e.neutralSite ? ` · ${(METROS[e.metroId] ?? DEFAULT_METRO).name}` : ''}
          {/* A further-out event names its town (Kylie, Oct 20, 2026, afternoon); the drive stays on list rows. */}
          {furtherTown ? ` · ${furtherTown}` : ''}
          {e.start ? ` · ${clockTime(e.start)}` : ''}
          {tv ? ` · ${ahead ? 'On' : 'Was on'} ${tv}` : ''}
        </div>
        {further && <div className="event-further">Further out</div>}
        <FactList facts={eventFacts(e, logged)} />
        {/* No ticket line (build 6, item 12): hidden, not deleted; the .ticket-line style stays for its return. */}
        {a && (
          <div className="chip-row">
            {/* The occasion tag, always the event's own (build 6, item 2); the friction pill moved to the Crowd and
                Up against cards (build 6, item 1, Kylie's Q2). */}
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

      {/* One "+ Stub it" opens one sheet (build notes 3, 4.7); your answer sits under it as a status line. */}
      <div className="event-marks">
        {/* Add to calendar beside "+ Stub it" while the event is ahead (build 5, item 3, option B): no new row. */}
        <span className="stub-actions">
          <button type="button" className={`gold-button${you ? ' small stub-it-small' : ''}`} onClick={() => setSheet(true)}>
            + Stub it
          </button>
          {ahead && <AddToCalendar event={e} venue={e.place.type === 'venue' ? (VENUES[e.place.venueId] ? venueNameOn(VENUES[e.place.venueId], e.date) : null) : e.place.name} />}
        </span>
        {you && (
          <span className="event-status">
            {/* Signed in, the line carries the stub's level as a pill, before and after the event (build 5, stub privacy;
                board privacy-r2 4a–4b): "Watching · Anyone ⌄". Signed out it keeps the old Private / Friends word. */}
            <StatusLine kind={you.kind} share={account && youRow ? undefined : youShare} place={you.place} tags={youRow?.userTags} tagsShown={99} onTag={(tag) => navigate(tagPath(tag))} />
            {account && youRow && (
              <>
                <span aria-hidden>·</span>
                <LevelPill down value={stubLevel(youRow)} defaultLevel={stubDefault()} onChange={(next) => void setStubVisibility(e.id, next)} />
              </>
            )}
            {you.kind !== 'interested' && (youRow?.userTags?.length ?? 0) > 0 && (
              <button type="button" className="link-button" onClick={() => setSheet(true)}>
                Edit
              </button>
            )}
          </span>
        )}
        {logged?.seats && !logged.watched && seatsLine(logged.seats) && <span className="event-seats">{seatsLine(logged.seats)}</span>}
        {logged && <EntryLayer entry={logged} showLevel={false} />}
      </div>
      {sheet && <StubSheet event={e} onClose={() => setSheet(false)} />}

      {/* This day (build notes 3, 4.3): the date's read, how many events, and the biggest draw; opens the date page.
          Not on a further-out event (Kylie, Oct 19–20, 2026): it is outside the city's day, so the card would count it
          as a day of one. */}
      {!further && (
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
      )}

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
            {/* A room under the floor gets no pill (build notes 2); Unopposed shows here and in the Crowd card, with the
                ring beside the pill (build 6, item 1). */}
            {verdict && <FrictionVerdict level={verdict} />}
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
                          {atLeastMark(r)}
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
            <span className="crowd-number small">{fmt(me.capacity)}</span>
            <span className="crowd-kind">Seats · no estimate yet</span>
          </>
        ) : (
          // No count, estimate or room size (build 5, item 3). The word "unsized" never shows.
          <span className="crowd-kind">— Size unknown</span>
        )}
        {me.soldOut && shown && <span className="tag-soldout">SOLD OUT</span>}
      </section>
      {showHow && <HowEstimatesWork onClose={() => setShowHow(false)} event={e} seats={me.capacity} />}

      <StorySlot event={e} />

      <WeatherDetail event={e} />

      <p className="source-note">Counts are labeled by kind: announced, reported or estimated. Distances are straight-line.</p>

      <ShareCard
        dateLabel={longLocalDate(date)}
        title={fullTitle(e)}
        line={a ? `${frictionVerdictTitle(a.friction, a.rival)}. ${a.why}` : ''}
        friction={a?.friction ?? null}
        rating={day.rating ? day.rating.rating : null}
        crowd={shown ? `${shown.atLeast ? 'At least ' : ''}${fmt(shown.count)} ${crowdKindWord(shown.kind)}` : me.soldOut ? 'Sold Out' : null}
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
      <h2 className="night-story-label">{evening ? 'The evening' : 'The day'}</h2>
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
          {about ? 'About this estimate' : 'How estimates work'}
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
        <h2 className="how-sub">Playoff games</h2>
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

function WeatherDetail({ event }: { event: CrowdEvent }) {
  if (!isOpenAir(event)) return null;
  const row = weatherForEvent(event);
  if (!row) return null;
  const range = weatherRangeForEvent(event);
  const rows: [string, string][] = [
    ['Feels like', feelsLikeLabel(row, event.metroId)],
    ['Air', degreesFor(row.tempF, event.metroId)],
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

/**
 * A game the app holds no event for (an away game outside the covered cities, a day before the nightly
 * job began): the event page's header and its "+ Stub it", nothing that needs data the app doesn't have
 * (no read, no crowd, no day card).
 */
function GameOnlyPage({ event, link }: { event: CrowdEvent; link?: GameLink }) {
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [sheet, setSheet] = useState(false);
  const you = yourActivity(event.id, log);
  const logged = yourEntries(log).find((entry) => entry.eventId === event.id);
  const youRow = log.plans.find((p) => p.eventId === event.id) ?? logged;
  const youShare = youRow && (you?.kind === 'watching' || you?.kind === 'watched') ? watchShareOf(youRow) : undefined;
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
      <BackLink to={link ? `/favorites/team/${link.teamId}` : '/stubs'} />
      <header className="event-head">
        <h1 className="page-title">
          <TypeIcon typeKey={eventType(event).key} size={18} className="title-type-icon" />
          {/* Built from a schedule game, the full name like any event page; rebuilt from a stub, the stub's own name. */}
          <TitleText text={link ? fullTitle(event) : event.title} />
        </h1>
        <div className="event-sub">{[venue, event.start ? clockTime(event.start) : null].filter(Boolean).join(' · ')}</div>
        <FactList facts={facts} />
      </header>
      <div className="event-marks">
        <span className="stub-actions">
          <button type="button" className={`gold-button${you ? ' small stub-it-small' : ''}`} onClick={() => setSheet(true)}>
            + Stub it
          </button>
          {ahead && <AddToCalendar event={event} venue={venue} />}
        </span>
        {you && (
          <span className="event-status">
            <StatusLine kind={you.kind} share={account && youRow ? undefined : youShare} place={you.place} tags={youRow?.userTags} tagsShown={99} onTag={(tag) => navigate(tagPath(tag))} />
            {account && youRow && (
              <>
                <span aria-hidden>·</span>
                <LevelPill down value={stubLevel(youRow)} defaultLevel={stubDefault()} onChange={(next) => void setStubVisibility(event.id, next)} />
              </>
            )}
          </span>
        )}
        {logged && <EntryLayer entry={logged} showLevel={false} />}
      </div>
      {sheet && <StubSheet event={event} onClose={() => setSheet(false)} />}
    </div>
  );
}
