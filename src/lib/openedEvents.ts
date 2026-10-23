import { getPref, setPref } from './prefs';
import type { CrowdEvent } from '../data/types';

/**
 * The events you opened lately, on this device (build 7, §3.2: the Log sheet's "Recent" and the "previously opened"
 * rank). A small list in local storage, newest first, capped; never synced, never shown to anyone else.
 */
export interface OpenedEvent {
  eventId: string;
  metroId: string;
  date: string;
  /** ISO time of the last open. */
  at: string;
}

const KEY = 'opened-events';
const CAP = 20;

export function recordOpened(event: Pick<CrowdEvent, 'id' | 'metroId' | 'date'>) {
  const rest = getPref<OpenedEvent[]>(KEY, []).filter((row) => row.eventId !== event.id);
  setPref(KEY, [{ eventId: event.id, metroId: event.metroId, date: event.date, at: new Date().toISOString() }, ...rest].slice(0, CAP));
}

export function recentOpened(): OpenedEvent[] {
  return getPref<OpenedEvent[]>(KEY, []);
}
