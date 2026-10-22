// The one place screens ask for event data. It merges every plugged-in source,
// so adding a live feed means adding it to the lists below, nothing else.

import { COVERED_METRO_IDS, DEFAULT_METRO, METROS, areaMetros, type Metro } from '../config/metros';
import { matchingNames } from './matchDate';
import { catalogEvents } from './sources/catalogSource';
import { espnMetroIds } from './sources/espnSource';
import { hockeytechMetroIds } from './sources/hockeytechSource';
import { mlbMetroIds } from './sources/mlbSource';
import { METRO_FEELS, seedEvents, seedMetroIds, seedRatings } from './sources/seedSource';
import type { EventSource, RatingSource } from './sources/types';
import { listTitle } from '../lib/eventTitle';
import { mergeDuplicates } from './dedupe';
import type { CalendarDay, CityDate, CrowdEvent, DateRating, Entry, LocalDate, DateSearchHit } from './types';
import { applyFormula } from './formulaRead';
import { rateDate } from './formula';
import { withResults } from './results';
import { withExpectedDraws } from './expectedDraw';
import './homeSync';
import { primeDate } from './catalogCache';
import { checkedFor, entryMetroId, nightKey, rememberNearby, sizeTier } from './read';
import { listRange, weekOf } from './cityList';
import { belongsToCity, isFurtherOut } from './sources/venueMetro';
export { isFurtherOut, isFurtherOutRoom } from './sources/venueMetro';
import { addDays } from '../lib/dates';

// The shared catalog answers for the live feeds (and falls back to them). Seeds stay in code.
const EVENT_SOURCES: EventSource[] = [seedEvents, catalogEvents];
const RATING_SOURCES: RatingSource[] = [seedRatings];

/**
 * One copy of each event. A hand-entered listing lives in the repo and is also
 * copied into the shared catalog by the nightly job, so both sources can return
 * it; the first source wins (the repo's, which is listed first).
 */
function uniqueById(events: CrowdEvent[]): CrowdEvent[] {
  const seen = new Set<string>();
  // Then one record per occurrence across feeds, before any title or read (build 5, item 13, step 0).
  return mergeDuplicates(events.filter((event) => !seen.has(event.id) && Boolean(seen.add(event.id))));
}

/**
 * A hand-checked date is the whole list for that day. Live games are left out,
 * so the night is not mixed with a second copy or a building that was checked empty.
 */
function preferSeed(events: CrowdEvent[]): CrowdEvent[] {
  const seeded = events.filter((event) => event.sourceId === 'seed');
  return seeded.length > 0 ? seeded : events;
}

/**
 * Everything known about one date in one metro: its events, rating and status.
 * The rating and each event's verdict come from the formula (v4). The hand
 * ratings in the seed are comparison data and never shown.
 */
export async function getCityDate(metroId: string, date: LocalDate): Promise<CityDate> {
  // Weather, results and snapshots for the window around this date come from the shared catalog.
  const [answers] = await Promise.all([Promise.allSettled(EVENT_SOURCES.map((s) => s.eventsOn(metroId, date))), primeDate(metroId, date)]);
  const lists = answers.map((a) => (a.status === 'fulfilled' ? a.value : []));
  const failed = EVENT_SOURCES.filter((_, i) => answers[i].status === 'rejected').map((s) => s.id);
  const all = uniqueById(lists.flat());
  const byStart = (a: CrowdEvent, b: CrowdEvent) => (a.start ?? '99').localeCompare(b.start ?? '99');
  const listed = withExpectedDraws(withResults(preferSeed(all.filter((e) => belongsToCity(e, metroId))))).sort(byStart);
  const { events, rating } = applyFormula(metroId, date, listed);
  const status = rating ? 'rated' : events.length ? 'unrated' : 'quiet';
  // Further out (Kylie, Oct 19–20, 2026): big events at this city's further-out rooms, sized like any event, kept
  // apart from the day. They never reach applyFormula, the status or the empty-day test.
  const further = withExpectedDraws(all.filter((e) => e.metroId === metroId && isFurtherOut(e)))
    .filter((e) => sizeTier(e) === 'feeds-friction')
    .sort(byStart);
  const day: CityDate = { metroId, date, status, events, rating, ...(failed.length ? { failed } : {}), ...(further.length ? { furtherOut: further } : {}) };
  if (events.length === 0) {
    // Quiet only when the city was really checked that date (Kylie, Oct 9, C030): a past date by the
    // saved captures; today and ahead by the live load, and never when a source failed.
    // A past date with a failed source is "no data" too (R13): the captures may be fine, but today's read of them was not.
    const past = date < todayIn(METROS[metroId] ?? DEFAULT_METRO);
    const checked = failed.length ? 'failed' : past ? checkedFor(metroId, date) : 'checked';
    day.empty = checked === 'checked' ? 'quiet' : 'no-data';
    if (checked !== 'checked') day.emptyWhy = checked;
  }
  return day;
}

/** The three parts behind a date's read, for a side-by-side (docs/product/compare-proposal-oct6.md). */
export function readParts(day: CityDate): { crowdFight: number; conditions: number | null; gridlock: number } | null {
  if (!day.rating) return null;
  const read = rateDate(day.metroId, day.events);
  const cond = read.reasons.find((r) => r.name === 'Conditions');
  return { crowdFight: read.crowdFight.score, conditions: cond ? cond.score : null, gridlock: read.gridlock.score };
}

/** The hand rating on file for a date, for comparison tables only. */
export async function handRatingFor(metroId: string, date: LocalDate): Promise<DateRating | null> {
  for (const s of RATING_SOURCES) {
    const rating = await s.ratingFor(metroId, date);
    if (rating) return rating;
  }
  return null;
}

/** The next few events after a date, from every live source, soonest first. */
export async function getUpcoming(metroId: string, afterDate: LocalDate, limit = 5): Promise<CrowdEvent[]> {
  const lists = await Promise.all(
    EVENT_SOURCES.map((s) => (s.upcoming ? s.upcoming(metroId, afterDate) : Promise.resolve([]))),
  );
  return uniqueById(lists.flat())
    .filter((e) => e.date > afterDate && belongsToCity(e, metroId))
    .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')))
    .slice(0, limit);
}

/**
 * Events after one date and up to another (both local dates, the end included), soonest first. `withFurtherOut` adds
 * the city's further-out events (Kylie, Oct 20, 2026: a favorite's always show, on its page and Following).
 */
export async function getEventsBetween(metroId: string, afterDate: LocalDate, throughDate: LocalDate, opts: { withFurtherOut?: boolean } = {}): Promise<CrowdEvent[]> {
  const lists = await Promise.all(
    EVENT_SOURCES.map((s) => (s.upcoming ? s.upcoming(metroId, afterDate) : Promise.resolve([]))),
  );
  return uniqueById(lists.flat())
    .filter((e) => e.date > afterDate && e.date <= throughDate && (belongsToCity(e, metroId) || (opts.withFurtherOut === true && e.metroId === metroId && isFurtherOut(e))))
    .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')));
}

/**
 * The days the Explore List can show for a city (build notes 4, V09): back to the first day the
 * nightly catalog saved, forward to the last event it has. A city with no capture starts today.
 */
export async function getListRange(metroId: string, today: LocalDate): Promise<{ from: LocalDate; through: LocalDate }> {
  // Further-out events count toward the reach (found Oct 21, 2026): a day with only a further-out show is a day the
  // List and the day strip can show, under its own heading.
  const ahead = await getEventsBetween(metroId, addDays(today, -1), addDays(today, 500), { withFurtherOut: true });
  const last = ahead.reduce<LocalDate | null>((max, e) => (max === null || e.date > max ? e.date : max), null);
  const range = listRange(metroId, today, last);
  // Back to the earliest day with an event on file within the last year, when that is before the first capture
  // (Kylie, Oct 19, 2026: Los Angeles holds past seasons the List could not reach). A year bounds the walk back
  // through empty weeks; older days stay reachable from the date page and the Map's day arrows.
  const earliest = await earliestEventDay(metroId, addDays(today, -LIST_BACK_DAYS), today);
  return earliest && earliest < range.from ? { ...range, from: earliest } : range;
}

/** How far back the List and the Map's day strip reach for past days with events on file: a year. */
export const LIST_BACK_DAYS = 365;

/** The earliest day in [floor, before) with an event on file for the city, or null. */
async function earliestEventDay(metroId: string, floor: LocalDate, before: LocalDate): Promise<LocalDate | null> {
  const lists = await Promise.all(EVENT_SOURCES.map((s) => (s.catalog ? s.catalog(metroId).catch(() => []) : Promise.resolve([]))));
  return lists
    .flat()
    .filter((e) => e.date >= floor && e.date < before && (belongsToCity(e, metroId) || (e.metroId === metroId && isFurtherOut(e))))
    .reduce<LocalDate | null>((min, e) => (min === null || e.date < min ? e.date : min), null);
}

/** One Monday-to-Sunday week of a city's days, each with its events and read, for the List and its calendar. */
export async function getListWeek(metroId: string, monday: LocalDate): Promise<CityDate[]> {
  return Promise.all(weekOf(monday).map((date) => getCityDate(metroId, date)));
}

/**
 * The famous dates in a metro (the hand-checked list), each rated by the
 * formula, newest first. The list is curated; the numbers are computed.
 */
export async function getRatedDates(metroId: string): Promise<DateRating[]> {
  const lists = await Promise.all(RATING_SOURCES.map((s) => s.ratedDates(metroId)));
  const dates = [...new Set(lists.flat().map((r) => r.date))].sort((a, b) => b.localeCompare(a));
  const hand = new Map(lists.flat().map((r) => [r.date, r]));
  const rated = await Promise.all(dates.map((date) => getCityDate(metroId, date)));
  // The list is curated, so its one-line headline is the curated one; the number is the formula's.
  return rated
    .map((day) => {
      if (!day.rating) return null;
      const curated = hand.get(day.date);
      return curated ? { ...day.rating, headline: curated.headline, sources: curated.sources } : day.rating;
    })
    .filter((r): r is DateRating => r !== null);
}

/**
 * The formula's score for a given set of nights, keyed by city and date.
 *
 * Separate from getRatedDates on purpose. That list is curated: the famous
 * nights someone chose and hand-checked. This answers for any night at all,
 * including one typed in by hand on an ordinary Tuesday, which is what a log
 * is mostly made of. A night with nothing on it comes back absent, not zero.
 */
export async function scoresForNights(
  nights: Iterable<{ metroId: string; date: LocalDate }>,
): Promise<Map<string, number>> {
  const wanted = new Map<string, { metroId: string; date: LocalDate }>();
  for (const night of nights) {
    if (!night.metroId || !night.date) continue;
    wanted.set(nightKey(night.metroId, night.date), night);
  }
  const days = await Promise.all([...wanted.values()].map((n) => getCityDate(n.metroId, n.date)));
  const scores = new Map<string, number>();
  for (const day of days) {
    rememberNearby(day.metroId, day.date, day.events);
    if (day.rating) scores.set(nightKey(day.metroId, day.date), day.rating.rating);
  }
  return scores;
}

/** The nights a log covers, as addresses to score. Vague dates are skipped; they cannot be rated. */
export function nightsOf(entries: readonly Entry[]): { metroId: string; date: LocalDate }[] {
  return entries
    .filter((entry) => entry.when.precision === 'day')
    .map((entry) => ({ metroId: entryMetroId(entry), date: entry.when.sort }));
}

/** The metro's feels-like temperature for a date, if one was seeded. One number, not a reading per pin. */
export function feelsLikeF(metroId: string, date: LocalDate): number | undefined {
  return METRO_FEELS.find((row) => row.metroId === metroId && row.date === date)?.feelsLikeF;
}

/**
 * Cities the map can list events for. A place that only appears in a personal
 * log is not included. Los Angeles is first. Today that is the only one.
 */
export function metrosWithEvents(): Metro[] {
  const ids = new Set<string>([...seedMetroIds(), ...mlbMetroIds(), ...espnMetroIds(), ...hockeytechMetroIds()]);
  return areaMetros().filter((metro) => ids.has(metro.id));
}

/** Today's date in the metro's own time zone, "2026-10-01". */
export function todayIn(metro: Metro): LocalDate {
  return new Date().toLocaleDateString('en-CA', { timeZone: metro.timeZone });
}

/**
 * Every event the calendar and search can see: seeded nights plus today onward. A further-out room's events are never
 * in the city's calendar; search adds them (5,000+ only) when asked (`withFurtherOut`, Kylie, Oct 20, 2026).
 */
async function catalog(metroId: string, withFurtherOut = false): Promise<CrowdEvent[]> {
  const lists = await Promise.all(EVENT_SOURCES.map((s) => (s.catalog ? s.catalog(metroId) : Promise.resolve([]))));
  const events = uniqueById(
    lists.flat().filter((event) => event.metroId === metroId && (!isFurtherOut(event) || (withFurtherOut && sizeTier(event) === 'feeds-friction'))),
  );
  const seededDates = new Set(events.filter((event) => event.sourceId === 'seed').map((event) => event.date));
  return events.filter((event) => event.sourceId === 'seed' || !seededDates.has(event.date));
}

/**
 * Every day in a month ("2024-10"). Rated days carry their number. Days with
 * events but no rating are unrated. The rest are quiet: nothing big is on file,
 * which is not a claim that the city was empty.
 */
export async function getCalendarMonth(metroId: string, month: string): Promise<CalendarDay[]> {
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) return [];
  const events = await catalog(metroId);
  const busy = new Set(events.filter((e) => e.date.startsWith(`${month}-`)).map((e) => e.date));
  // Every date with events gets the formula's read, so upcoming dates shade too.
  const days_ = await Promise.all([...busy].map((date) => getCityDate(metroId, date)));
  const rated = new Map(days_.filter((d) => d.rating).map((d) => [d.date, d.rating!.rating]));
  const count = new Date(Date.UTC(Number(month.slice(0, 4)), Number(month.slice(5, 7)), 0)).getUTCDate();
  const days: CalendarDay[] = [];
  for (let day = 1; day <= count; day++) {
    const date = `${month}-${String(day).padStart(2, '0')}`;
    const rating = rated.get(date);
    if (rating !== undefined) days.push({ date, status: 'rated', rating });
    else if (busy.has(date)) days.push({ date, status: 'unrated', rating: null });
    else days.push({ date, status: 'quiet', rating: null });
  }
  return days;
}

/**
 * Nights whose team, artist, or venue matches the query, newest first.
 * Fewer than two letters matches nothing, so an empty box can show Famous nights.
 */
export async function searchDates(metroId: string, query: string, visible?: (event: CrowdEvent) => boolean, opts: { withFurtherOut?: boolean } = {}): Promise<DateSearchHit[]> {
  const q = query.trim();
  if (q.length < 2) return [];
  const [ratings, events] = await Promise.all([getRatedDates(metroId), catalog(metroId, opts.withFurtherOut === true)]);
  const ratingByDate = new Map(ratings.map((r) => [r.date, r]));
  const hits = new Map<string, { titles: string[]; matched: string[]; artists: string[]; festivals: string[]; anyVisible: boolean; inCity?: boolean; eventId?: string; hiddenEventId?: string }>();
  const furtherIds = new Set<string>();
  const addName = (list: string[], name: string) => {
    if (!list.some((m) => m.toLowerCase() === name.toLowerCase())) list.push(name);
  };

  for (const event of events) {
    const names = matchingNames(event, q);
    if (!names) continue;
    const row = hits.get(event.date) ?? { titles: [], matched: [], artists: [], festivals: [], anyVisible: false };
    // What a person can follow from this match (R16, Oct 19, 2026): an act's name from a show or a special, when the
    // seller lists it as an act (or no source says otherwise), and a festival by its title. A game offers its teams
    // through the team records; its title, and a listing's own name standing in for a performer, are never artists.
    const performer = event.performer?.trim();
    if (performer && (event.kind === 'show' || event.kind === 'special') && event.act !== false && names.some((n) => n.toLowerCase() === performer.toLowerCase())) {
      addName(row.artists, performer);
    }
    if (event.kind === 'festival' && names.some((n) => n.toLowerCase() === event.title.toLowerCase())) addName(row.festivals, event.title);
    const shown = !visible || visible(event);
    if (shown) row.anyVisible = true;
    if (!isFurtherOut(event)) row.inCity = true;
    else furtherIds.add(event.id);
    // The first visible match is the one a tap selects on the day; the first match at all when every one is hidden.
    if (shown) row.eventId ??= event.id;
    else row.hiddenEventId ??= event.id;
    // The short name, as every row shows it (build 5, item 13).
    const name = listTitle(event);
    if (!row.titles.includes(name)) row.titles.push(name);
    for (const name of names) addName(row.matched, name);
    hits.set(event.date, row);
  }

  return [...hits.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([date, row]) => {
      // A date found only through further-out events shows no verdict (Kylie, Oct 20, 2026): they never counted toward it.
      const rating = row.inCity ? ratingByDate.get(date) : undefined;
      return {
        date,
        metroId,
        rating: rating?.rating ?? null,
        headline: rating?.headline ?? row.titles.slice(0, 2).join(' · '),
        matched: row.matched.slice(0, 3).join(' · '),
        ...(row.artists.length ? { artists: row.artists } : {}),
        ...(row.festivals.length ? { festivals: row.festivals } : {}),
        ...(row.eventId ?? row.hiddenEventId ? { eventId: row.eventId ?? row.hiddenEventId } : {}),
        ...(furtherIds.has(row.eventId ?? row.hiddenEventId ?? '') ? { furtherOut: true as const } : {}),
        ...(row.anyVisible ? {} : { hidden: true }),
      };
    });
}

/** The same search over every covered city at once, the home city's hits first (Kylie, Oct 9, C058). */
export async function searchAllDates(homeId: string | null, query: string, visible?: (event: CrowdEvent) => boolean, opts: { withFurtherOut?: boolean } = {}): Promise<DateSearchHit[]> {
  const ids = [...COVERED_METRO_IDS].sort((a, b) => (a === homeId ? -1 : b === homeId ? 1 : 0));
  const lists = await Promise.all(ids.map((id) => searchDates(id, query, visible, opts)));
  return lists.flat();
}

export { VENUES, venueNameOn, capacityOn } from './venues';
export { TEAMS, isCollegeLeague, isCollegeTeam, teamDisplayName, teamLongName } from './teams';
export { storyFor, type NightStory } from './seed/stories';
export { weatherAt, weatherForEvent, weatherRangeForEvent, cityWeather, cityDayRange } from './weather';
export { weatherGlyph, feelsLikeLabel, rangeLabel, rangeSpoken, isOpenAir, type WeatherRow, type WeatherDay } from './formula/weather';
export {
  eventMatches,
  favoriteFor,
  favoriteForTeam,
  favoriteKey,
  favoriteMark,
  favoriteLeagueMark,
  favoriteDisplayName,
  favoriteLongName,
  kindLabel,
  entryMatches,
  suggestionsFor,
} from './favorites';
export { audienceOverlap } from './audience';
export { cityTravelLine } from './cityTravel';
export {
  canSignIn,
  getAccount,
  isAccountSettling,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  subscribeAccount,
  type Account,
} from './account';
export {
  EXAMPLE_FEED,
  EXAMPLE_FRIEND_ENTRIES,
  followingFeed,
  followingFeedWithStatus,
  type FollowingFeedResult,
  followers,
  following,
  removeFollower,
  approveFollow,
  declineFollow,
  declinedRequests,
  follow,
  friendsEntries,
  followRequests,
  followStatus,
  peopleList,
  plansOf,
  followsMe,
  searchPeople,
  PEOPLE_SEARCH_MIN,
  blockUser,
  unblockUser,
  blockedPeople,
  getMyProfile,
  getProfileByHandle,
  isValidHandle,
  entriesOf,
  suggestHandle,
  unfollow,
  updateMyProfile,
  type FollowRequest,
  type FollowStatus,
  type FeedItem,
  type Person,
  type PersonRow,
  type PlanCard,
  type FriendEntry,
  type Profile,
  type Visibility,
} from './profiles';
export {
  PRELIST_ATTENDEES,
  FRICTION_ATTENDEES,
  STAMP_LOCK_HOURS,
  asMetroDate,
  coverageForEntry,
  createStamp,
  eventFeedsFriction,
  frictionReadForEvent,
  isStampLocked,
  nightKey,
  savedNightRead,
  knownCrowdCount,
  listedCapacity,
  refreshStamp,
  scheduleCoverage,
  sizeTier,
  drawSize,
  stampLocksAt,
  forecastBeforeStart,
  drawSavedAhead,
} from './read';
export { CONCERT_FILL, roundEstimate } from './expectedDrawBuild';
export {
  crowdFigures,
  highlightedCrowd,
  atLeastMark,
  entryAtLeastMark,
  crowdFull,
  displayedCrowdCount,
  announcedSourceLabel,
  backfillEntryCrowd,
  entryCrowd,
  crowdKindWord,
  type CrowdFigures,
  type CrowdFigureShown,
} from './crowdFigures';
export type { ScheduleCoverage, SizeTier } from './read';
export {
  eventFacts,
  filterChoices,
  getPersonalLog,
  getSaveWarning,
  getSyncStatus,
  favoritesOf,
  isFavorite,
  toggleFavorite,
  isPlanned,
  plannedKind,
  firmPlan,
  type PlanAnswer,
  isWasThere,
  logStats,
  nextSavedPlan,
  logBackup,
  addManualEntry,
  addManualPlan,
  updateManualEntry,
  similarTitles,
  entryFacts,
  entryFieldsFor,
  eventTypeLabel,
  entryTags,
  venueNamesIn,
  markSuggested,
  ownEntryFacts,
  ratingForEntry,
  removeEntry,
  removePlan,
  updateEntry,
  setEntryPrivate,
  markWasThere,
  markWatched,
  isWatched,
  biggestCrowd,
  toughestFights,
  backfillLegacyCrowds,
  lockCrowds,
  retitleStubs,
  setWatchDetails,
  watchShareOf,
  watchPlaceOf,
  recentWatchPlaces,
  settlePassedPlans,
  setYouOrder,
  subscribeLogLoaded,
  subscribePersonalLog,
  togglePlan,
  toggleWasThere,
  upcomingPlans,
  yourEntries,
} from './personalLog';
export type { EntryEdit, LabeledFact, ManualEntryEdit, ManualNight, SyncStatus } from './personalLog';
export { stubDefault, setStubDefault, stubLevel, setStubVisibility, setEntryVisibility, setPastStubsVisibility } from './personalLog';
export { favoriteCitiesOf, cityOrder, crowdRangeOf, setCrowdRange, toggleFavoriteCity, setEntrySeats, setPlanSeats, setEntryCost, setPlanCost, entryTeams, isManualEntry, setStubTags, setRowTags, renameTag, deleteTag } from './personalLog';
export { normalizeTag, normalizeTags, tagSummaries, userTagsOf, normalizeSeats, seatsLine, SEAT_LIMITS, SEAT_SPOTS, TAG_MAX, type TagSummary } from './stubTags';
export type { Cost, CostKind, CostLine } from './types';
export { hasUnsyncedChanges } from './storage';
export { suggestEvent, linkConfirmedSuggestions, isReviewAdmin, reviewQueue, setReviewStatus, REVIEW_WINDOW, type ReviewRow } from './suggestions';
export { quickAddDefaults, saveQuickAdd, roomsIn, type QuickAddDefaults, type QuickAddInput, type QuickAddResult } from './quickAdd';
export { markPlanSuggested } from './personalLog';
export { favoriteSearchNames, searchFavoriteRecords, favoriteOfficialName } from './favorites';
export { ATTENDED_COST_KINDS, WATCHED_COST_KINDS, COST_LABELS, COST_MAX, deviceCurrency, normalizeCost, costTotal, lineTotal, formatMoney, costLine, costWords, currencySign } from './costs';
export { getTeamSchedule, nextTeamGame, recordLine, scoreMark, seriesLine, teamRecord, type TeamRecord } from './teamSchedule';
export { espnTeamUrl } from './sources/espnSource';
export { entryOutcome, hoursAtGames, lengthLine, resultFor, scoreLine } from './results';
export { COMPETITIONS, LEVELS, SPORTS_MORE, SPORTS_SHOWN, competitionNamed, competitionsFor, divisionChoices, levelPhrase } from './competitions';
export type { Competition } from './competitions';
export type * from './types';
export { ticketPrice, priceLine, type TicketPrice } from './tickets';
export { artistSite } from './artistSite';
export { saveWatchPlace, clearWatchPlace, placesForEvent, placeKey, SAVE_FAILED, type EventPlace } from './watchPlaces';
export { CROWD_RANGE_TOP, alwaysShownIds, crowdRangeLabel, passesCrowdRange, rangeIsOpen, rangeNumber, rangeOn, splitByRange } from './crowdRange';
export { EVENT_TYPES, competitionOf, entryType, eventType, genreCasing, typeDef, type EventType, type TypeDef } from './eventTypes';
export { wallClockToUtc } from './read';
export { popupDraw, popupExplainer, type PopupFacts } from './sources/popupSizing';
export { eventFromGame, eventFromStub, gameEventId, gameRefFromId, isGameEventId, isOutsideGamePlan, sameGame, stubShapeOf, type GameLink, type StubShape } from './gameStub';
export { ARTISTS, artistByName, artistMatches, type Artist } from './artists';
export { genreCategory, artistGenreWord, UNKNOWN_GENRE_WORD } from './genres';
