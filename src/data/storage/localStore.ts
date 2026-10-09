// The phone copy of her log. iPhone Safari can erase this, so Export is the backup.
// The seeded nights are not stored here; they ship with the app.

import { APP } from '../../config/app';
import { parseStamp } from '../read';
import type { DatePrecision, Favorite, Entry, LoggedWhen, Plan, PersonalLog, YouOrder } from '../types';
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

/** Favorites as saved, or undefined when this log has never had any (so they get derived once). */
export function readFavorites(value: unknown): Favorite[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.filter(isFavorite);
}

function asOrder(value: unknown): YouOrder {
  return value === 'nights-first' ? 'nights-first' : 'plans-first';
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
      added: Array.isArray(parsed.added) ? parsed.added.filter(isEntry).map(cleanEntry) : [],
      plans: Array.isArray(parsed.plans) ? parsed.plans.filter(isPlan).map(cleanPlan) : [],
      order: asOrder(parsed.order),
      favorites: readFavorites(parsed.favorites),
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
