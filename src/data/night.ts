// A night is the record the log is about: the events on one local date, the
// forecast frozen at an event's scheduled start, and the stamp written after
// the night locks. Save does not copy a forecast. Date-keyed lookups stay.
// Nothing here changes the Map.

import { METROS } from '../config/metros';
import type { Friction } from '../config/scoreLabels';
import { isValidDate } from '../lib/dates';
import type {
  CrowdEvent,
  DateRating,
  ForecastBasisKind,
  FrictionRead,
  LocalDate,
  LocalTime,
  LoggedNight,
  MetroNight,
  NightStamp,
} from './types';
import { ARCHIVE_FORECASTS, START_FORECASTS } from './startForecastIndex';
import { SCHEDULE_SNAPSHOTS } from './scheduleArchiveIndex';
import { capacityOn, VENUES } from './venues';

/**
 * About 1,000 attendees. Direction says events this size can be logged. The
 * review says this only decides what is pre-listed, and anything smaller can
 * still be logged by hand. This number does not settle that wording.
 */
export const PRELIST_ATTENDEES = 1000;

/** About 5,000 attendees. Only events this large feed friction for everyone nearby. */
export const FRICTION_ATTENDEES = 5000;

/** The stamp locks this many hours after the last scheduled start that night. */
export const STAMP_LOCK_HOURS = 24;

const SETUP_BY_SPORT: Record<string, string> = {
  basketball: 'basketball',
  hockey: 'hockey',
  football: 'football',
  soccer: 'soccer',
  baseball: 'baseball',
};

/** Saved schedule, rebuilt afterwards, or not saved yet because the night has not passed. */
export type ScheduleCoverage = 'saved' | 'reconstructed' | 'not-yet';

/** How big one event is, for listing and for friction. One event at a time; rooms are not added together. */
export type SizeTier = 'feeds-friction' | 'prelist' | 'under-prelist' | 'unknown';

/** The largest crowd figure on the event, when one has a count. No number is guessed. */
export function knownCrowdCount(event: CrowdEvent): number | undefined {
  const counts = event.crowd.map((figure) => figure.count).filter((count): count is number => count != null);
  if (counts.length === 0) return undefined;
  return Math.max(...counts);
}

/**
 * Seats for this event's setup, when the venue table has them.
 * Same room-size choice the map uses: a sport's setup, otherwise a concert setup.
 */
export function listedCapacity(event: CrowdEvent): number | undefined {
  if (event.place.type !== 'venue') return undefined;
  const venue = VENUES[event.place.venueId];
  if (!venue) return undefined;
  const setup = event.audience.domain === 'sports' ? SETUP_BY_SPORT[event.audience.sport] : 'concert';
  return capacityOn(venue, event.date, setup);
}

function knownSize(event: CrowdEvent): number | undefined {
  return knownCrowdCount(event) ?? listedCapacity(event);
}

/**
 * One event's tier. A cluster of smaller rooms that add up to 5,000 is the
 * rating formula's job, and that formula is paused, so this does not sum rooms.
 * A `belowFloor` flag never feeds friction, even when a count is on the event.
 * Unknown size stays unknown: no crowd number is invented.
 */
export function sizeTier(event: CrowdEvent): SizeTier {
  const size = knownSize(event);
  if (!event.belowFloor && size != null && size >= FRICTION_ATTENDEES) return 'feeds-friction';
  if (size == null) return 'unknown';
  if (size >= PRELIST_ATTENDEES) return 'prelist';
  return 'under-prelist';
}

/** True only when this event itself is large enough to move the read. */
export function eventFeedsFriction(event: CrowdEvent): boolean {
  return sizeTier(event) === 'feeds-friction';
}

/** The events that share a local date, plus the latest start among them. */
export function asMetroNight(metroId: string, date: LocalDate, events: readonly CrowdEvent[]): MetroNight {
  const thatNight = events.filter((event) => event.metroId === metroId && event.date === date);
  return {
    metroId,
    date,
    events: thatNight,
    lastScheduledStart: lastScheduledStart(thatNight),
  };
}

/** Latest "HH:MM" on file. Missing starts are skipped, not guessed. */
export function lastScheduledStart(events: readonly CrowdEvent[]): LocalTime | null {
  const starts = events.map((event) => event.start).filter((start): start is string => Boolean(start));
  if (starts.length === 0) return null;
  return starts.reduce((latest, start) => (start > latest ? start : latest));
}

function zoneOffsetMinutes(instant: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(instant);
  const pick = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  let hour = pick('hour');
  if (hour === 24) hour = 0;
  const asUtc = Date.UTC(pick('year'), pick('month') - 1, pick('day'), hour, pick('minute'), pick('second'));
  return Math.round((asUtc - instant.getTime()) / 60_000);
}

/** The UTC instant for a wall-clock time in a metro's time zone. */
export function wallClockToUtc(date: LocalDate, time: LocalTime, timeZone: string): Date {
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = time.split(':').map(Number);
  const wallAsUtc = Date.UTC(year, month - 1, day, hour, minute, 0);
  const first = zoneOffsetMinutes(new Date(wallAsUtc), timeZone);
  const adjusted = wallAsUtc - first * 60_000;
  const second = zoneOffsetMinutes(new Date(adjusted), timeZone);
  return new Date(wallAsUtc - second * 60_000);
}

/**
 * When the stamp locks: 24 hours after the last scheduled start that night.
 * Null when no start time is on file, so a stamp is not written early.
 */
export function stampLocksAt(night: Pick<MetroNight, 'date' | 'lastScheduledStart'>, timeZone: string): Date | null {
  if (!night.lastScheduledStart) return null;
  const start = wallClockToUtc(night.date, night.lastScheduledStart, timeZone);
  return new Date(start.getTime() + STAMP_LOCK_HOURS * 60 * 60 * 1000);
}

export function isStampLocked(
  night: Pick<MetroNight, 'date' | 'lastScheduledStart'>,
  timeZone: string,
  now = new Date(),
): boolean {
  const locks = stampLocksAt(night, timeZone);
  if (!locks) return false;
  return now.getTime() >= locks.getTime();
}

/**
 * Whether a saved schedule covers this date.
 * "saved" — a snapshot window includes the date.
 * "reconstructed" — the night is already past and no window covers it, including every night before the archive began.
 * "not-yet" — the date is still today or later, and no snapshot covers it yet.
 */
export function scheduleCoverage(metroId: string, date: LocalDate, now = new Date()): ScheduleCoverage {
  const snaps = SCHEDULE_SNAPSHOTS.filter((span) => span.metroId === metroId).sort((a, b) =>
    a.capturedOn.localeCompare(b.capturedOn),
  );
  if (snaps.some((span) => date >= span.from && date <= span.through)) return 'saved';
  const zone = METROS[metroId]?.timeZone ?? 'America/Los_Angeles';
  const today = now.toLocaleDateString('en-CA', { timeZone: zone });
  if (snaps.length === 0) return date < today ? 'reconstructed' : 'not-yet';
  if (date < snaps[0].capturedOn) return 'reconstructed';
  if (date < today) return 'reconstructed';
  return 'not-yet';
}

/** Coverage for a logged night. A vague date before the archive is reconstructed; it is not treated as saved. */
export function coverageForNight(night: LoggedNight, now = new Date()): ScheduleCoverage {
  const metroId = night.metroId ?? 'la';
  if (night.when.precision === 'day' && isValidDate(night.when.sort)) {
    return scheduleCoverage(metroId, night.when.sort, now);
  }
  const snaps = SCHEDULE_SNAPSHOTS.filter((span) => span.metroId === metroId);
  const first = snaps.map((span) => span.capturedOn).sort()[0];
  if (!first || night.when.sort < first) return 'reconstructed';
  return 'not-yet';
}

function othersFeedFriction(event: CrowdEvent, sameNight: readonly CrowdEvent[]): boolean {
  return sameNight.some((other) => other.id !== event.id && eventFeedsFriction(other));
}

/**
 * The read to freeze or stamp for one event.
 * An event that feeds friction keeps its own assessment and the date score.
 * A smaller event keeps the date score only when some other event that night
 * feeds friction. No score and no word are filled in when that data is absent.
 */
export function frictionReadForEvent(
  event: CrowdEvent,
  sameNight: readonly CrowdEvent[],
  dateRating: DateRating | null,
): { role: 'own' | 'nearby'; read: FrictionRead } | null {
  const ownFriction = event.assessment?.friction;
  if (eventFeedsFriction(event)) {
    if (dateRating == null && !ownFriction) return null;
    return {
      role: 'own',
      read: {
        rating: dateRating?.rating,
        friction: ownFriction,
        why: ownFriction ? event.assessment?.why : undefined,
        method: dateRating?.method ?? 'hand',
      },
    };
  }
  if (!othersFeedFriction(event, sameNight) || dateRating == null) return null;
  return {
    role: 'nearby',
    read: { rating: dateRating.rating, method: 'nearby' },
  };
}

export interface StampForecast {
  read: FrictionRead;
  forecastBasis: ForecastBasisKind;
  forecastCapturedAt: string;
}

/**
 * The forecast a stamp lines up against.
 * Los Angeles only. A start-time capture wins. If that capture exists but
 * recorded no score and no friction word, nothing is filled in.
 * With no start-time capture, the nearest daily archive row is used, and
 * only when that row itself has a number. No number is invented.
 */
export function startTimeForecastFor(event: Pick<CrowdEvent, 'id' | 'metroId' | 'date' | 'start'>): StampForecast | null {
  if (event.metroId !== 'la') return null;
  const startRow = START_FORECASTS.find((row) => row.metroId === event.metroId && row.eventId === event.id);
  if (startRow) {
    const read = startRow.read ? readBody(startRow.read) : null;
    if (!read || !startRow.capturedAt) return null;
    return { read, forecastBasis: 'start-time', forecastCapturedAt: startRow.capturedAt };
  }

  const zone = METROS[event.metroId]?.timeZone ?? 'America/Los_Angeles';
  const target = wallClockToUtc(event.date, event.start ?? '12:00', zone).getTime();
  const rows = ARCHIVE_FORECASTS.filter((row) => row.metroId === event.metroId && row.eventId === event.id && row.capturedAt);
  if (rows.length === 0) return null;
  const nearest = rows.reduce((best, row) => closerArchive(best, row, target));
  const read = nearest.read ? readBody(nearest.read) : null;
  if (!read) return null;
  return { read, forecastBasis: 'nearest-archive', forecastCapturedAt: nearest.capturedAt };
}

function closerArchive<T extends { capturedAt: string }>(best: T, row: T, target: number): T {
  const bestAt = new Date(best.capturedAt).getTime();
  const rowAt = new Date(row.capturedAt).getTime();
  const bestDelta = Math.abs(bestAt - target);
  const rowDelta = Math.abs(rowAt - target);
  if (rowDelta < bestDelta) return row;
  if (rowDelta > bestDelta) return best;
  const rowBefore = rowAt <= target;
  const bestBefore = bestAt <= target;
  if (rowBefore && !bestBefore) return row;
  return best;
}

export function createStamp(
  read: FrictionRead,
  lastUpdated: string,
  reconstructed: boolean,
  basis?: Pick<StampForecast, 'forecastBasis' | 'forecastCapturedAt'>,
): NightStamp {
  return {
    kind: 'stamp',
    ...read,
    lastUpdated,
    reconstructed: reconstructed ? true : undefined,
    ...(basis ? { forecastBasis: basis.forecastBasis, forecastCapturedAt: basis.forecastCapturedAt } : {}),
  };
}

/**
 * A later formula pass replaces the score and the word, and moves `lastUpdated`.
 * The reconstructed flag stays unless a caller passes a new one.
 */
export function refreshStamp(
  saved: NightStamp,
  read: FrictionRead,
  lastUpdated: string,
  reconstructed?: boolean,
): NightStamp {
  return {
    kind: 'stamp',
    ...read,
    lastUpdated,
    reconstructed: reconstructed ?? saved.reconstructed,
    ...(saved.forecastBasis && saved.forecastCapturedAt
      ? { forecastBasis: saved.forecastBasis, forecastCapturedAt: saved.forecastCapturedAt }
      : {}),
  };
}

const METHODS = new Set(['hand', 'formula', 'nearby']);
const FRICTION_WORDS = new Set<Friction>(['Low', 'Moderate', 'Heavy', 'Extreme']);

function readBody(value: unknown): FrictionRead | null {
  if (!value || typeof value !== 'object') return null;
  const raw = value as Partial<FrictionRead>;
  if (typeof raw.method !== 'string' || !METHODS.has(raw.method)) return null;
  const rating = typeof raw.rating === 'number' && Number.isFinite(raw.rating) ? raw.rating : undefined;
  const friction = typeof raw.friction === 'string' && FRICTION_WORDS.has(raw.friction as Friction) ? (raw.friction as Friction) : undefined;
  if (rating == null && !friction) return null;
  const why = typeof raw.why === 'string' && raw.why.trim() ? raw.why : undefined;
  return { rating, friction, why, method: raw.method };
}

/** Drop a broken stamp. The night itself still loads. */
export function parseStamp(value: unknown): NightStamp | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const raw = value as Partial<NightStamp>;
  if (raw.kind !== 'stamp' || typeof raw.lastUpdated !== 'string' || !raw.lastUpdated) return undefined;
  const body = readBody(value);
  if (!body) return undefined;
  const forecastBasis = raw.forecastBasis === 'start-time' || raw.forecastBasis === 'nearest-archive' ? raw.forecastBasis : undefined;
  const forecastCapturedAt = typeof raw.forecastCapturedAt === 'string' && raw.forecastCapturedAt ? raw.forecastCapturedAt : undefined;
  return {
    kind: 'stamp',
    ...body,
    lastUpdated: raw.lastUpdated,
    reconstructed: raw.reconstructed === true ? true : undefined,
    ...(forecastBasis && forecastCapturedAt ? { forecastBasis, forecastCapturedAt } : {}),
  };
}

/**
 * The date score a logged night should show.
 * Exact day, in the metro. Away nights do not borrow the home city's score.
 * A below-floor night gets that score only as a nearby read: some other event
 * that night must feed friction, and the date must already have a score.
 */
export function ratingFromNight(
  night: LoggedNight,
  ratings: ReadonlyMap<string, number>,
  sameNight: readonly CrowdEvent[],
): number | null {
  if (night.when.precision !== 'day' || !isValidDate(night.when.sort)) return null;
  if (night.inMetro === false) return null;
  const score = ratings.get(night.when.sort);
  if (score == null) return null;
  if (!night.belowFloor) return score;
  const id = night.eventId ?? night.id;
  const nearby = sameNight.some((other) => other.id !== id && eventFeedsFriction(other));
  return nearby ? score : null;
}
