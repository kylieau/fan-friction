// The one place screens ask for event data. It merges every plugged-in source,
// so adding a live feed means adding it to the lists below, nothing else.

import { areaMetros, type Metro } from '../config/metros';
import { matchingNames } from './matchDate';
import { catalogEvents } from './sources/catalogSource';
import { espnMetroIds } from './sources/espnSource';
import { mlbMetroIds } from './sources/mlbSource';
import { METRO_FEELS, seedEvents, seedMetroIds, seedRatings } from './sources/seedSource';
import type { EventSource, RatingSource } from './sources/types';
import type { CalendarDay, CityDate, CrowdEvent, DateRating, Entry, LocalDate, DateSearchHit } from './types';
import { applyFormula } from './formulaRead';
import { rateDate } from './formula';
import { withResults } from './results';
import { withExpectedDraws } from './expectedDraw';
import './homeSync';
import { primeDate } from './catalogCache';
import { entryMetroId, nightKey } from './read';

// The shared catalog answers for the live feeds (and falls back to them). Seeds stay in code.
const EVENT_SOURCES: EventSource[] = [seedEvents, catalogEvents];
const RATING_SOURCES: RatingSource[] = [seedRatings];

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
  const [lists] = await Promise.all([Promise.all(EVENT_SOURCES.map((s) => s.eventsOn(metroId, date))), primeDate(metroId, date)]);
  const listed = withExpectedDraws(withResults(preferSeed(lists.flat()))).sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99'));
  const { events, rating } = applyFormula(metroId, date, listed);
  const status = rating ? 'rated' : events.length ? 'unrated' : 'quiet';
  return { metroId, date, status, events, rating };
}

/** The three parts behind a date's read, for a side-by-side (docs/compare-proposal-oct6.md). */
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
  return lists
    .flat()
    .filter((e) => e.date > afterDate)
    .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')))
    .slice(0, limit);
}

/** Events after one date and up to another (both local dates, the end included), soonest first. */
export async function getEventsBetween(metroId: string, afterDate: LocalDate, throughDate: LocalDate): Promise<CrowdEvent[]> {
  const lists = await Promise.all(
    EVENT_SOURCES.map((s) => (s.upcoming ? s.upcoming(metroId, afterDate) : Promise.resolve([]))),
  );
  return lists
    .flat()
    .filter((e) => e.date > afterDate && e.date <= throughDate)
    .sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')));
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
  const ids = new Set<string>([...seedMetroIds(), ...mlbMetroIds(), ...espnMetroIds()]);
  return areaMetros().filter((metro) => ids.has(metro.id));
}

/** Today's date in the metro's own time zone, "2026-10-01". */
export function todayIn(metro: Metro): LocalDate {
  return new Date().toLocaleDateString('en-CA', { timeZone: metro.timeZone });
}

/** Every event the calendar and search can see: seeded nights plus today onward. */
async function catalog(metroId: string): Promise<CrowdEvent[]> {
  const lists = await Promise.all(EVENT_SOURCES.map((s) => (s.catalog ? s.catalog(metroId) : Promise.resolve([]))));
  const seen = new Set<string>();
  const events = lists.flat().filter((event) => {
    if (event.metroId !== metroId || seen.has(event.id)) return false;
    seen.add(event.id);
    return true;
  });
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
export async function searchDates(metroId: string, query: string): Promise<DateSearchHit[]> {
  const q = query.trim();
  if (q.length < 2) return [];
  const [ratings, events] = await Promise.all([getRatedDates(metroId), catalog(metroId)]);
  const ratingByDate = new Map(ratings.map((r) => [r.date, r]));
  const hits = new Map<string, { titles: string[]; matched: string[] }>();

  for (const event of events) {
    const names = matchingNames(event, q);
    if (!names) continue;
    const row = hits.get(event.date) ?? { titles: [], matched: [] };
    if (!row.titles.includes(event.title)) row.titles.push(event.title);
    for (const name of names) {
      if (!row.matched.some((m) => m.toLowerCase() === name.toLowerCase())) row.matched.push(name);
    }
    hits.set(event.date, row);
  }

  return [...hits.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([date, row]) => {
      const rating = ratingByDate.get(date);
      return {
        date,
        rating: rating?.rating ?? null,
        headline: rating?.headline ?? row.titles.slice(0, 2).join(' · '),
        matched: row.matched.slice(0, 3).join(' · '),
      };
    });
}

export { VENUES, venueNameOn, capacityOn } from './venues';
export { TEAMS } from './teams';
export { weatherAt, weatherForEvent, weatherRangeForEvent, cityWeather, cityDayRange } from './weather';
export { weatherGlyph, feelsLikeLabel, rangeLabel, rangeSpoken, isOpenAir, type WeatherRow, type WeatherDay } from './formula/weather';
export {
  eventMatches,
  favoriteFor,
  favoriteKey,
  favoriteMark,
  kindLabel,
  entryMatches,
  suggestionsFor,
} from './favorites';
export { audienceOverlap } from './audience';
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
  EXAMPLE_FRIEND_ENTRIES,
  approveFollow,
  declineFollow,
  follow,
  friendsEntries,
  followRequests,
  followStatus,
  getMyProfile,
  getProfileByHandle,
  isValidHandle,
  entriesOf,
  suggestHandle,
  unfollow,
  updateMyProfile,
  type FollowRequest,
  type FollowStatus,
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
  knownCrowdCount,
  listedCapacity,
  refreshStamp,
  scheduleCoverage,
  sizeTier,
  stampLocksAt,
  forecastBeforeStart,
} from './read';
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
  isWasThere,
  logStats,
  nextSavedPlan,
  logBackup,
  addManualEntry,
  entryFacts,
  entryFieldsFor,
  eventTypeLabel,
  venueNamesIn,
  markSuggested,
  ownEntryFacts,
  ratingForEntry,
  removeEntry,
  removePlan,
  updateEntry,
  settlePassedPlans,
  setYouOrder,
  subscribePersonalLog,
  togglePlan,
  toggleWasThere,
  upcomingPlans,
  yourEntries,
} from './personalLog';
export type { EntryEdit, LabeledFact, ManualNight, SyncStatus } from './personalLog';
export { suggestEvent } from './suggestions';
export { hoursAtGames, lengthLine, resultFor, scoreLine } from './results';
export { COMPETITIONS, LEVELS, SPORTS_MORE, SPORTS_SHOWN, competitionNamed, competitionsFor, divisionChoices, levelPhrase } from './competitions';
export type { Competition } from './competitions';
export type * from './types';
