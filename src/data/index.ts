// The one place screens ask for event data. It merges every plugged-in source,
// so adding a live feed means adding it to the lists below, nothing else.

import { areaMetros, type Metro } from '../config/metros';
import { matchingNames } from './matchNight';
import { espnEvents, espnMetroIds } from './sources/espnSource';
import { mlbEvents, mlbMetroIds } from './sources/mlbSource';
import { METRO_FEELS, seedEvents, seedMetroIds, seedRatings } from './sources/seedSource';
import type { EventSource, RatingSource } from './sources/types';
import type { CalendarDay, CityDate, CrowdEvent, DateRating, LocalDate, NightSearchHit } from './types';

const EVENT_SOURCES: EventSource[] = [seedEvents, mlbEvents, espnEvents];
const RATING_SOURCES: RatingSource[] = [seedRatings];

/**
 * A hand-checked date is the whole list for that day. Live games are left out,
 * so the night is not mixed with a second copy or a building that was checked empty.
 */
function preferSeed(events: CrowdEvent[]): CrowdEvent[] {
  const seeded = events.filter((event) => event.sourceId === 'seed');
  return seeded.length > 0 ? seeded : events;
}

/** Everything known about one date in one metro: its events, rating and status. */
export async function getCityDate(metroId: string, date: LocalDate): Promise<CityDate> {
  const lists = await Promise.all(EVENT_SOURCES.map((s) => s.eventsOn(metroId, date)));
  const events = preferSeed(lists.flat()).sort((a, b) => (a.start ?? '99').localeCompare(b.start ?? '99'));

  let rating: DateRating | null = null;
  for (const s of RATING_SOURCES) {
    rating = await s.ratingFor(metroId, date);
    if (rating) break;
  }

  const status = rating ? 'rated' : events.length ? 'unrated' : 'quiet';
  return { metroId, date, status, events, rating };
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

/** Every rated date in a metro, newest first. */
export async function getRatedDates(metroId: string): Promise<DateRating[]> {
  const lists = await Promise.all(RATING_SOURCES.map((s) => s.ratedDates(metroId)));
  return lists.flat().sort((a, b) => b.date.localeCompare(a.date));
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
  const [ratings, events] = await Promise.all([getRatedDates(metroId), catalog(metroId)]);
  const rated = new Map(ratings.filter((r) => r.date.startsWith(month)).map((r) => [r.date, r.rating]));
  const busy = new Set(events.filter((e) => e.date.startsWith(`${month}-`)).map((e) => e.date));
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
export async function searchNights(metroId: string, query: string): Promise<NightSearchHit[]> {
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
export {
  eventMatches,
  favoriteFor,
  favoriteKey,
  favoriteMark,
  kindLabel,
  nightMatches,
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
  EXAMPLE_FRIEND_NIGHTS,
  approveFollow,
  declineFollow,
  follow,
  friendsNights,
  followRequests,
  followStatus,
  getMyProfile,
  getProfileByHandle,
  isValidHandle,
  nightsOf,
  suggestHandle,
  unfollow,
  updateMyProfile,
  type FollowRequest,
  type FollowStatus,
  type FriendNight,
  type Profile,
  type Visibility,
} from './profiles';
export {
  PRELIST_ATTENDEES,
  FRICTION_ATTENDEES,
  STAMP_LOCK_HOURS,
  asMetroNight,
  coverageForNight,
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
} from './night';
export type { ScheduleCoverage, SizeTier } from './night';
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
  nightBackup,
  nightFacts,
  ratingForNight,
  removePlan,
  setYouOrder,
  subscribePersonalLog,
  togglePlan,
  toggleWasThere,
  upcomingPlans,
  yourNights,
} from './personalLog';
export type { LabeledFact, SyncStatus } from './personalLog';
export type * from './types';
