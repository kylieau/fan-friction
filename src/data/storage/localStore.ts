// The phone copy of her log. iPhone Safari can erase this, so Export is the backup.
// The seeded nights are not stored here; they ship with the app.

import { APP } from '../../config/app';
import { METROS } from '../../config/metros';
import { parseStamp } from '../read';
import type { CrowdRange, DatePrecision, Favorite, Entry, LoggedWhen, Plan, PersonalLog, YouOrder, SeasonTicket } from '../types';
import type { EntryStore } from './types';

const KEY = `${APP.slug}:your-nights`;

export const EMPTY_LOG: PersonalLog = {
  version: 1,
  hiddenSeedIds: [],
  added: [],
  plans: [],
  order: 'plans-first',
};

const PRECISIONS: DatePrecision[] = ['day', 'month', 'year', 'span', 'unknown'];

function isWhen(value: unknown): value is LoggedWhen {
  if (!value || typeof value !== 'object') return false;
  const when = value as LoggedWhen;
  return typeof when.sort === 'string' && typeof when.label === 'string' && PRECISIONS.includes(when.precision);
}

function isEntry(value: unknown): value is Entry {
  if (!value || typeof value !== 'object') return false;
  const entry = value as Entry;
  return (
    typeof entry.id === 'string' &&
    typeof entry.title === 'string' &&
    isWhen(entry.when) &&
    Array.isArray(entry.tags) &&
    typeof entry.sport === 'string' &&
    Array.isArray(entry.sides) &&
    typeof entry.kind === 'string'
  );
}

function cleanEntry(entry: Entry): Entry {
  const stamp = parseStamp(entry.stamp);
  const next: Entry = { ...entry };
  delete next.forecast;
  if (stamp) next.stamp = stamp;
  else delete next.stamp;
  return next;
}

function isPlan(value: unknown): value is Plan {
  if (!value || typeof value !== 'object') return false;
  const plan = value as Plan;
  return typeof plan.id === 'string' && typeof plan.date === 'string' && typeof plan.metroId === 'string' && typeof plan.title === 'string';
}

function cleanPlan(plan: Plan): Plan {
  const next: Plan = { ...plan };
  delete next.forecast;
  return next;
}

const KINDS = ['team', 'artist', 'venue', 'festival'];

function isFavorite(value: unknown): value is Favorite {
  if (!value || typeof value !== 'object') return false;
  const fav = value as Favorite;
  return KINDS.includes(fav.kind) && typeof fav.id === 'string' && typeof fav.label === 'string';
}

/** The removed-ids map as saved: id to ISO time. Anything else is dropped. */
export function readRemoved(value: unknown): Record<string, string> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  const out: Record<string, string> = {};
  for (const [id, at] of Object.entries(value as Record<string, unknown>)) if (typeof at === 'string') out[id] = at;
  return out;
}

/** Starred cities as saved: ids of cities the app knows, no repeats. Undefined when there are none. */
export function readFavoriteCities(value: unknown, stamped = false): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const ids = [...new Set(value.filter((id): id is string => typeof id === 'string' && Boolean(METROS[id])))];
  // An empty list means "none starred" only when it carries a stamp; older copies saved [] for "never set".
  return ids.length > 0 || stamped ? ids : undefined;
}

/** A saved crowd range, or undefined when it is missing or malformed (build 5, item 6). */
export function readCrowdRange(value: unknown): CrowdRange | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const v = value as Record<string, unknown>;
  const num = (x: unknown) => (typeof x === 'number' && Number.isFinite(x) && x > 0 ? Math.round(x / 1000) * 1000 : undefined);
  const min = num(v.min);
  const max = num(v.max);
  return {
    ...(min ? { min } : {}),
    ...(max ? { max } : {}),
    ...(v.showUnknown === false ? { showUnknown: false } : {}),
    ...(v.mapOff === true ? { mapOff: true } : {}),
    ...(v.listsOff === true ? { listsOff: true } : {}),
    ...(v.furtherMapOff === true ? { furtherMapOff: true } : {}),
    ...(v.furtherListsOff === true ? { furtherListsOff: true } : {}),
  };
}

/** The ISO time the starred list last changed, or undefined for a copy that never wrote one. */
/** The Temperature Units choice, when the saved value is one of the two (build 7.1, M40). */
export function readTemperatureUnit(value: unknown): 'F' | 'C' | undefined {
  return value === 'F' || value === 'C' ? value : undefined;
}

/** Season tickets as saved (build 7.1, item 15): one record per team, each checked piece by piece; anything else is dropped. */
export function readSeasonTickets(value: unknown): SeasonTicket[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const out: SeasonTicket[] = [];
  for (const raw of value) {
    if (!raw || typeof raw !== 'object') continue;
    const t = raw as Partial<SeasonTicket>;
    if (typeof t.teamId !== 'string' || (t.plan !== 'full' && t.plan !== 'partial') || typeof t.updatedAt !== 'string') continue;
    const removed: SeasonTicket['removed'] = {};
    if (t.removed && typeof t.removed === 'object') {
      for (const [gameId, r] of Object.entries(t.removed as Record<string, { reason?: unknown; soldFor?: unknown; at?: unknown }>)) {
        if (!r || typeof r !== 'object' || typeof r.at !== 'string') continue;
        const reason = r.reason === 'sold' || r.reason === 'gave' || r.reason === 'skipped' ? r.reason : undefined;
        const soldFor = reason === 'sold' && typeof r.soldFor === 'number' && Number.isFinite(r.soldFor) && r.soldFor >= 0 ? r.soldFor : undefined;
        removed[gameId] = { ...(reason ? { reason } : {}), ...(soldFor !== undefined ? { soldFor } : {}), at: r.at };
      }
    }
    const money = (n: unknown) => (typeof n === 'number' && Number.isFinite(n) && n >= 0 ? n : undefined);
    const ids = (list: unknown) => (Array.isArray(list) ? list.filter((x): x is string => typeof x === 'string') : undefined);
    out.push({
      teamId: t.teamId,
      on: t.on === true,
      plan: t.plan,
      ...(t.seats && typeof t.seats === 'object' ? { seats: t.seats } : {}),
      ...(money(t.ticket) !== undefined ? { ticket: money(t.ticket) } : {}),
      ...(money(t.parking) !== undefined ? { parking: money(t.parking) } : {}),
      ...(typeof t.currency === 'string' ? { currency: t.currency } : {}),
      preseason: t.preseason !== false,
      ...(ids(t.picked) ? { picked: ids(t.picked) } : {}),
      removed,
      ...(ids(t.declined) ? { declined: ids(t.declined) } : {}),
      updatedAt: t.updatedAt,
    });
  }
  return out.length > 0 ? out : undefined;
}

export function readStamp(value: unknown): string | undefined {
  return typeof value === 'string' && Number.isFinite(Date.parse(value)) ? value : undefined;
}

/** Favorites as saved, or undefined when this log has never had any (so they get derived once). */
export function readFavorites(value: unknown): Favorite[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.filter(isFavorite);
}

function asOrder(value: unknown): YouOrder {
  return value === 'nights-first' ? 'nights-first' : 'plans-first';
}

function firstById<T extends { id: string }>(rows: T[]): T[] {
  const seen = new Set<string>();
  return rows.filter((row) => !seen.has(row.id) && Boolean(seen.add(row.id)));
}

/** Read the phone copy. A bad or missing file becomes an empty log, not a crash. */
export function readLocalLog(): PersonalLog {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY_LOG;
    const parsed = JSON.parse(raw) as Partial<PersonalLog>;
    if (!parsed || parsed.version !== 1) return EMPTY_LOG;
    return {
      version: 1,
      hiddenSeedIds: Array.isArray(parsed.hiddenSeedIds) ? parsed.hiddenSeedIds.filter((id) => typeof id === 'string') : [],
      // One row per id: a phone that settled one plan twice (before the Oct 20, 2026 fix) keeps the first copy.
      added: Array.isArray(parsed.added) ? firstById(parsed.added.filter(isEntry).map(cleanEntry)) : [],
      plans: Array.isArray(parsed.plans) ? parsed.plans.filter(isPlan).map(cleanPlan) : [],
      order: asOrder(parsed.order),
      favorites: readFavorites(parsed.favorites),
      ...(readFavoriteCities(parsed.favoriteCities, Boolean(readStamp(parsed.favoriteCitiesAt))) ? { favoriteCities: readFavoriteCities(parsed.favoriteCities, Boolean(readStamp(parsed.favoriteCitiesAt))) } : {}),
      ...(readStamp(parsed.favoriteCitiesAt) ? { favoriteCitiesAt: readStamp(parsed.favoriteCitiesAt) } : {}),
      ...(readCrowdRange(parsed.crowdRange) ? { crowdRange: readCrowdRange(parsed.crowdRange) } : {}),
      ...(readStamp(parsed.crowdRangeAt) ? { crowdRangeAt: readStamp(parsed.crowdRangeAt) } : {}),
      ...(readTemperatureUnit(parsed.temperatureUnit) ? { temperatureUnit: readTemperatureUnit(parsed.temperatureUnit) } : {}),
      ...(readStamp(parsed.temperatureUnitAt) ? { temperatureUnitAt: readStamp(parsed.temperatureUnitAt) } : {}),
      ...(readSeasonTickets(parsed.seasonTickets) ? { seasonTickets: readSeasonTickets(parsed.seasonTickets) } : {}),
      ...(parsed.removed ? { removed: readRemoved(parsed.removed) } : {}),
    };
  } catch {
    return EMPTY_LOG;
  }
}

export function writeLocalLog(log: PersonalLog) {
  localStorage.setItem(KEY, JSON.stringify(log));
}

export const localEntryStore: EntryStore = {
  async load() {
    return readLocalLog();
  },
  async save(diff) {
    writeLocalLog(diff.log);
  },
};
