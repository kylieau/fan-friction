import { FurtherOutList } from '../components/FurtherOut';
import { RowBody, spokenRow } from '../components/DayRow';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, ShareIcon } from '../components/Icons';
import { ReadTile } from '../components/ReadTile';
import { ActivityLines } from '../components/ActivityLines';
import { activityGroups, friendsLine, yourActivity } from '../lib/activity';
import { DayTimeline } from '../components/DayTimeline';
import { DayWeather } from '../components/DayWeather';
import { HiddenLine } from '../components/HiddenLine';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { formatScore, scoreBand, scoreLabel } from '../config/scoreLabels';
import {
  asMetroDate,
  cityWeather,
  cityDayRange,
  rangeLabel,
  rangeSpoken,
  feelsLikeLabel,
  weatherGlyph,
  followingFeed,
  getAccount,
  getCityDate,
  getPersonalLog,
  firmPlan,
  isStampLocked,
  drawSize,
  savedNightRead,
  subscribeAccount,
  subscribePersonalLog,
  todayIn,
  alwaysShownIds,
  crowdRangeOf,
  rangeOn,
  splitByRange,
  yourEntries,
  verdictLines,
  liveItems,
  savedItems,
  outdoorPeaks,
  stampLocksAt,
  type CityDate,
  type CrowdEvent,
  type FeedItem,
  type SavedNightRead,
} from '../data';
import { VENUES, venueNameOn } from '../data';
import { clockTime, longLocalDate, shortLocalDate, weekdayLong } from '../lib/dates';
import { getHomeId } from '../lib/homeCity';
import { CrowdFigure } from '../components/EventTags';
import { comparePath, eventPath } from '../lib/view';
import { APP } from '../config/app';



/**
 * One page per night: a date in a city with one read. Your entry (or plan)
 * sits under the read; then every event that date as a timeline; then friends
 * who were there. The event page is one tap deeper for an event's own detail.
 */
export function DateScreen() {
  const { date = '' } = useParams();
  const [about, setAbout] = useState(false);
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const highlight = params.get('event');
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  // The city: the link's, else the city of a plan or entry on this date, else home, else the default (C045).
  const metroId =
    params.get('metro') ??
    log.plans.find((p) => p.date === date)?.metroId ??
    log.added.find((n) => n.when.sort === date && n.when.precision === 'day')?.metroId ??
    getHomeId() ??
    DEFAULT_METRO.id;
  const metro = METROS[metroId] ?? DEFAULT_METRO;
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [day, setDay] = useState<CityDate | null>(null);
  const [friends, setFriends] = useState<FeedItem[]>([]);
  const [shareNote, setShareNote] = useState('');

  const [tries, setTries] = useState(0);
  const [loadFailed, setLoadFailed] = useState(false);
  useEffect(() => {
    let current = true;
    setDay(null);
    setLoadFailed(false);
    getCityDate(metro.id, date)
      .then((next) => current && setDay(next))
      .catch(() => current && setLoadFailed(true));
    return () => {
      current = false;
    };
  }, [metro.id, date, tries]);

  useEffect(() => {
    let current = true;
    if (!account) {
      setFriends([]);
      return;
    }
    // The same feed rules as Following (3.24): attended only once the date has passed, plans ahead. Interested too (8.1, item 11).
    followingFeed(300).then((list) => {
      if (current) setFriends(list.filter((f) => f.date === date && (f.metroId ?? DEFAULT_METRO.id) === metro.id));
    });
    return () => {
      current = false;
    };
  }, [account?.id, date, metro.id]);

  const today = todayIn(metro);
  // Today counts as ahead: an Attend today is a plan, and becomes Attended once the date passes (C039).
  const ahead = date >= today;
  // By start time (build 5, item 4): the lineup reads like the evening. An event with no time goes last.
  const events = useMemo(() => (day ? [...day.events].sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99') || (drawSize(b) ?? 0) - (drawSize(a) ?? 0)) : []), [day]);
  // The crowd size range (build 5, item 6): the lineup shows what's in range, with one hidden-events line under it;
  // Local Competition is not filtered (answer B). Show reveals the rest for this visit.
  const [showAll, setShowAll] = useState(false);
  useEffect(() => setShowAll(false), [metro.id, date]);
  const keep = useMemo(() => alwaysShownIds(log, friends), [log, friends]);
  // The split is always known, so the line keeps its count and reads Hide while everything shows (Kylie, Oct 17).
  const split = useMemo(() => splitByRange(events, rangeOn(crowdRangeOf(log), 'lists'), keep), [events, log, keep]);
  const lineup = useMemo(() => (showAll ? { shown: events, hidden: split.hidden } : split), [events, showAll, split]);
  const further = useMemo(() => {
    const all = day?.furtherOut ?? [];
    return crowdRangeOf(log).furtherListsOff ? all.filter((e) => keep.has(e.id)) : all;
  }, [day, log, keep]);
  // The biggest event, for the share line's fallback title (it was events[0] while the list sorted by crowd).
  const biggest = useMemo(() => [...events].sort((a, b) => (drawSize(b) ?? 0) - (drawSize(a) ?? 0))[0], [events]);
  const mine = useMemo(
    () => yourEntries(log).filter((n) => n.when.sort === date && n.when.precision === 'day' && (n.metroId ?? DEFAULT_METRO.id) === metro.id),
    [log, date, metro.id],
  );
  const plans = useMemo(() => log.plans.filter((p) => firmPlan(p) && p.date === date && p.metroId === metro.id), [log, date, metro.id]);
  const rating = day?.rating ?? null;
  // The day's feels-like low and high at the city point (Kylie, Oct 6); the hourly number is the fallback for old data.
  const dayRange = cityDayRange(metro.id, date);
  const cityRow = dayRange ? undefined : cityWeather(metro.id, date, events);

  // The event the share line names: the highlighted one, or the only one.
  const target = events.find((e) => e.id === highlight) ?? (events.length === 1 ? events[0] : undefined);
  // The people you follow, per event, for the row's activity line; your own answer is its own line (build 5, item 4).
  const lineFor = (e: CrowdEvent) => friendsLine(friends.filter((f) => f.eventId === e.id));

  const share = async () => {
    const line = shownRating !== null ? `${scoreLabel(shownRating)} · ${formatScore(shownRating)}/10` : '';
    const title = mine[0]?.title ?? biggest?.title ?? metro.name;
    const text = `${title}, ${longLocalDate(date)}${line ? ` · ${line}` : ''}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: `${APP.name}: ${title}`, text, url: window.location.href });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${window.location.href}`);
      setShareNote('Copied.');
    } catch {
      /* dismissed */
    }
  };

  const back = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/calendar');
  };

  if (loadFailed) {
    return (
      <div className="screen page">
        <button type="button" className="back-link" onClick={back}>
          <ChevronDown /> Back
        </button>
        <div className="card empty-card">
          <div className="card-title">Couldn't load this date.</div>
          <button type="button" className="link-button" onClick={() => setTries((n) => n + 1)}>
            Try again
          </button>
        </div>
      </div>
    );
  }
  if (!day) {
    return (
      <div className="screen page">
        <button type="button" className="back-link" onClick={back}>
          <ChevronDown /> Back
        </button>
        <p className="you-fine" role="status">
          Loading…
        </p>
      </div>
    );
  }

  // The card's heading is "Verdict", the name of the date's number and word (Kylie, Oct 19, 2026), on every date with
  // one: settled dates too, which carried no label from Oct 14 to Oct 19 (when "Verdict" only replaced "Forecast" on
  // upcoming dates). How a settled verdict settled, and any revision, sits behind the (i).
  const locked = !ahead && isStampLocked(asMetroDate(metro.id, date, events), metro.timeZone);
  const readKind = rating ? 'Verdict' : null;
  // A settled night shows the read as it was saved, never today's recomputation (3.15).
  const saved = locked ? savedNightRead(metro.id, date, events) : null;
  const shownRating = saved?.rating ?? rating?.rating ?? null;
  // The lines under the number come from the same set the number came from (M6): the saved night's rows when the
  // saved verdict shows, else today's events. The sources count is the feeds that listed events in that set.
  const lines = saved ? verdictLines(savedItems(saved.rows, events), metro.name) : verdictLines(liveItems(events), metro.name);
  // Weather on a settled day is the last forecast saved before the lock (Kylie, Oct 5); ahead of it, the latest.
  const weatherBefore = locked ? (stampLocksAt(asMetroDate(metro.id, date, events), metro.timeZone) ?? undefined) : undefined;
  const peaks = outdoorPeaks(events, weatherBefore);
  const peakFor = new Map(peaks.map((p) => [p.event.id, p]));

  return (
    <div className="screen page date-page">
      <button type="button" className="back-link" onClick={back}>
        <ChevronDown /> Back
      </button>

      <header className="date-head">
        <span className="date-kicker">{weekdayLong(date)}</span>
        <h1 className="date-title">{longLocalDate(date).replace(/^[A-Za-z]+, /, '')}</h1>
        <span className="date-city">
          {metro.name}
          {dayRange && (
            <>
              {' · '}
              <span className="weather-glyph" aria-hidden>
                {weatherGlyph(dayRange)}
              </span>{' '}
              <span aria-label={rangeSpoken(dayRange, metro.id)} title="Feels-like, not air temp">{rangeLabel(dayRange, metro.id)}</span>
            </>
          )}
          {cityRow && (
            <>
              {' · '}
              <span className="weather-glyph" aria-hidden>
                {weatherGlyph(cityRow)}
              </span>{' '}
              {feelsLikeLabel(cityRow, metro.id)}
            </>
          )}
        </span>
      </header>

      <section className={`read-tile${rating ? '' : ' none'}`} aria-label="The verdict">
        {rating && shownRating !== null ? (
          <>
            <span className={`read-big ${scoreBand(shownRating)}`}>
              <span className="read-num">{formatScore(shownRating)}</span>
              <span className="read-word">{scoreLabel(shownRating)}</span>
            </span>
            <span className="read-why">
              {readKind && <span className="read-lab">{readKind}</span>}
              <span className="read-txt">{lines.headline}</span>
              {lines.detail ? <span className="read-detail">{lines.detail}</span> : null}
              {/* No internal terms here (C069); no lock time ahead (Kylie, Oct 14). A verdict never says "Estimated"
                  (Kylie, Oct 23, 2026, build 7.1 M16): a day from before the archive reads like any other settled day. */}
              <span className="read-meta">{lines.meta}</span>
            </span>
            {locked && (
              <button type="button" className="read-info" aria-label="About This Verdict" onClick={() => setAbout(true)}>
                i
              </button>
            )}
          </>
        ) : (
          <>
            <ReadTile rating={null} size="big" empty={day.empty} />
            <span className="read-why">
              {day.empty ? (
                <span className="read-txt">
                  {day.empty === 'quiet'
                    ? `Nothing big in ${metro.name}.`
                    : day.emptyWhy === 'partial'
                      ? 'Events have not all been collected for this date.'
                      : day.emptyWhy === 'failed'
                        ? "Couldn't load this date."
                        : 'Events have not been collected for this date.'}
                </span>
              ) : (
                <>
                  <span className="read-lab">{ahead ? 'Verdict' : 'No verdict yet'}</span>
                  <span className="read-txt">{ahead ? 'The verdict arrives with the formula.' : 'This date has no rating yet.'}</span>
                </>
              )}
              {day.emptyWhy === 'failed' && (
                <button type="button" className="link-button" onClick={() => setTries((n) => n + 1)}>
                  Try again
                </button>
              )}
            </span>
          </>
        )}
      </section>
      {about && <AboutRead saved={saved} sources={lines.sources} onClose={() => setAbout(false)} />}

      {/* The day's weather (M3, Flow X): a slim strip that opens into the card, between the verdict and the lineup.
          Keyed by the date so it is collapsed on every visit. */}
      <DayWeather key={`${metro.id}|${date}`} metroId={metro.id} date={date} peaks={peaks} before={weatherBefore} isToday={date === today} />

      {/* Order since build 7.1 (M1, Kylie, Oct 23, 2026): the verdict, then the lineup (people open a day to see what's
          on), then Local Competition, then Further Out; the Attended card sits at the bottom (M7). */}
      {events.length > 0 && (
        <section className="you-block" aria-labelledby="that-date">
          {/* The shared Explore row (build 5, item 4), by start time. No per-row "+ Stub it": the event page has it.
              Your own answer shows in the row as its icon and word; the deep-linked event keeps its tint.
              The title sits inside the card, like Local Competition (Kylie, Oct 15). */}
          <div className="date-lineup-card">
            <h2 id="that-date" className="you-heading in-card-title">
              {weekdayLong(date)}'s Lineup
            </h2>
            <ul className="date-list">
            {lineup.shown.map((e) => (
              <li key={e.id} className={`date-row${e.id === highlight ? ' yours' : ''}`}>
                <Link to={eventPath(e.id, e.metroId)} className="date-row-main" aria-label={spokenRow(e, venueOf(e) ?? null)}>
                  <RowBody
                    event={e}
                    day={events}
                    time={e.start ? clockTime(e.start) : 'TBA'}
                    venueText={venueOf(e) ?? null}
                    line={lineFor(e)}
                    you={yourActivity(e.id, log)?.kind ?? null}
                    weather={peakFor.has(e.id) ? { sky: peakFor.get(e.id)!.sky, tempF: peakFor.get(e.id)!.peakF } : null}
                  />
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <HiddenLine count={lineup.hidden.length} shown={showAll} onToggle={() => setShowAll((v) => !v)} />
        </section>
      )}

      {events.length > 0 && rating && shownRating !== null && (
        <section className="card local-competition" aria-label="Local Competition">
          {/* Build 5, item 4 (board datepage-r3-lean): the timeline of the day's big crowds. No summary line and no
              read tile: the read is in the card above. The hourly weather left for its own strip (M3, Oct 23, 2026). */}
          <h2 className="you-heading">Local Competition</h2>
          <DayTimeline events={events} />
        </section>
      )}

      {/* Further out (Kylie, Oct 19–20, 2026): big events within about a 2-hour drive, after the lineup, never in the
          verdict. The lists switch hides them; ones you stubbed or friends are attending always show. */}
      {further.length > 0 && (
        <section className="you-block" aria-labelledby="further-out">
          <div className="date-lineup-card">
            <h2 id="further-out" className="you-heading in-card-title">
              Further Out
            </h2>
            <FurtherOutList events={further} variant="date" />
          </div>
        </section>
      )}

      {(mine.length > 0 || plans.length > 0) && (
        <section className="you-block" aria-labelledby="your-entry">
          {/* At the bottom, above Share and Compare, with no gold edge (M7, Kylie, Oct 23, 2026: gold is for crowd
              figures and the Cooked verdict). Section titles sit inside their card, like Local Competition (Oct 15). */}
          <div className="entry-card">
            <h2 id="your-entry" className="you-heading in-card-title">
              {ahead ? (plans.length > 0 && plans.every((p) => p.watch) ? 'Watching' : 'Attending') : 'Attended'}
            </h2>
            {mine.map((entry) => {
              const event = events.find((e) => e.id === entry.eventId);
              return (
                <div key={entry.id} className="entry">
                  <span className="entry-title">{entry.title}</span>
                  <span className="entry-facts">
                    {[entry.venue, event?.start ? clockTime(event.start) : null].filter(Boolean).join(' · ')}
                    {event && (
                      <>
                        {' · '}
                        <CrowdFigure event={event} />
                      </>
                    )}
                  </span>
                  {entry.review && <span className="entry-note">{entry.review}</span>}
                </div>
              );
            })}
            {plans.map((plan) => (
              <div key={plan.id} className="entry">
                <span className="entry-title">{plan.title}</span>
                <span className="entry-facts">{plan.venue ?? ''}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {events.length > 0 && (
        <div className="action-row">
          <button type="button" className="round-button share-button" aria-label="Share this date" onClick={share}>
            <ShareIcon />
          </button>
        </div>
      )}
      {!ahead && rating && (
        <Link to={comparePath({ metroId: metro.id, date, eventId: target?.id })} className="text-link compare-link">
          Compare with…
        </Link>
      )}

      {friends.length > 0 && (
        <section className="you-block" aria-labelledby="friends-date">
          <h2 id="friends-date" className="you-heading">
            Following
          </h2>
          {/* Grouped per event like the event page (Kylie, Oct 11; 8.1, items 11 and 12), Interested included. */}
          {groupByEvent(friends).map((group) => (
            <div key={group.key} className="date-friends-group">
              <span className="log-facts date-friends-title">{group.title}</span>
              <ActivityLines groups={activityGroups(group.items, null)} />
            </div>
          ))}
        </section>
      )}

      {shareNote && (
        <p className="you-fine" role="status">
          {shareNote}
        </p>
      )}
    </div>
  );
}

/** Friends' answers by event, in the day's order. */
function groupByEvent(items: FeedItem[]): { key: string; title: string; items: FeedItem[] }[] {
  const groups = new Map<string, { key: string; title: string; items: FeedItem[] }>();
  for (const item of items) {
    const key = item.eventId ?? item.title;
    const group = groups.get(key) ?? { key, title: item.title, items: [] };
    group.items.push(item);
    groups.set(key, group);
  }
  return [...groups.values()];
}

function venueOf(e: CrowdEvent): string | null {
  if (e.place.type === 'venue') {
    const venue = VENUES[e.place.venueId];
    return venue ? venueNameOn(venue, e.date) : null;
  }
  return e.place.name;
}

/** "52,394 announced · sold out", "sold out", or nothing. Every count keeps its kind. */

/**
 * How a settled verdict came to be (build 7.1, M5; Kylie, Oct 23, 2026; the 05-b board): two short paragraphs, no
 * icons, the counts from the saved verdict. A settled night with nothing saved (from before the archive) gets the one
 * sentence that is true of it, never "frozen", "saved" or "Estimated" (M16). Only a redone verdict adds its last line.
 */
function AboutRead({ saved, sources, onClose }: { saved: SavedNightRead | null; sources: number; onClose: () => void }) {
  const n = saved?.rows.length ?? 0;
  const s = saved ? sources : 0;
  const counts = n > 0 ? `: ${n} ${n === 1 ? 'event' : 'events'}${s > 0 ? ` from ${s} ${s === 1 ? 'source' : 'sources'}` : ''}` : '';
  return (
    <div className="home-backdrop" role="dialog" aria-modal="true" aria-labelledby="about-read-title" onClick={onClose}>
      <div className="home-card about-read" onClick={(event) => event.stopPropagation()}>
        <div className="about-read-head">
          <h2 id="about-read-title" className="home-title">
            About This Verdict
          </h2>
          <button type="button" className="about-read-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        {saved && <p className="about-read-line">Settled the morning after. This verdict is frozen from the last schedule we saved before the day{counts}.</p>}
        <p className="about-read-line">It weighs each event's expected crowd against the others that overlap it, plus outdoor weather.</p>
        {saved?.rescoredOn && (
          <p className="about-read-line about-read-revised">
            Revised {shortLocalDate(saved.rescoredOn)} when we improved the method.{typeof saved.previousRating === 'number' ? ` It was ${formatScore(saved.previousRating)}.` : ''}
          </p>
        )}
      </div>
    </div>
  );
}
