// The phone copy of her log. iPhone Safari can erase this, so Export is the backup.
// The seeded nights are not stored here; they ship with the app.

import { APP } from '../../config/app';
import { parseStamp } from '../night';
import type { DatePrecision, Favorite, LoggedNight, LoggedWhen, NightPlan, PersonalLog, YouOrder } from '../types';
import type { NightStore } from './types';

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

function isNight(value: unknown): value is LoggedNight {
  if (!value || typeof value !== 'object') return false;
  const night = value as LoggedNight;
  return (
    typeof night.id === 'string' &&
    typeof night.title === 'string' &&
    isWhen(night.when) &&
    Array.isArray(night.tags) &&
    typeof night.sport === 'string' &&
    Array.isArray(night.sides) &&
    typeof night.kind === 'string'
  );
}

function cleanNight(night: LoggedNight): LoggedNight {
  const stamp = parseStamp(night.stamp);
  const next: LoggedNight = { ...night };
  delete next.forecast;
  if (stamp) next.stamp = stamp;
  else delete next.stamp;
  return next;
}

function isPlan(value: unknown): value is NightPlan {
  if (!value || typeof value !== 'object') return false;
  const plan = value as NightPlan;
  return typeof plan.id === 'string' && typeof plan.date === 'string' && typeof plan.metroId === 'string' && typeof plan.title === 'string';
}

function cleanPlan(plan: NightPlan): NightPlan {
  const next: NightPlan = { ...plan };
  delete next.forecast;
  return next;
}

const KINDS = ['team', 'artist', 'venue', 'festival'];

function isFavorite(value: unknown): value is Favorite {
  if (!value || typeof value !== 'object') return false;
  const fav = value as Favorite;
  return KINDS.includes(fav.kind) && typeof fav.id === 'string' && typeof fav.label === 'string';
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
      added: Array.isArray(parsed.added) ? parsed.added.filter(isNight).map(cleanNight) : [],
      plans: Array.isArray(parsed.plans) ? parsed.plans.filter(isPlan).map(cleanPlan) : [],
      order: asOrder(parsed.order),
      favorites: readFavorites(parsed.favorites),
    };
  } catch {
    return EMPTY_LOG;
  }
}

export function writeLocalLog(log: PersonalLog) {
  localStorage.setItem(KEY, JSON.stringify(log));
}

export const localNightStore: NightStore = {
  async load() {
    return readLocalLog();
  },
  async save(log) {
    writeLocalLog(log);
  },
};
