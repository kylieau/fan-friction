import { useSyncExternalStore } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS, type Metro } from '../config/metros';
import { isFurtherOut, isFurtherOutRoom, todayIn, type CrowdEvent } from '../data';
import { isValidDate, shortLocalDate } from './dates';
import { getHomeId, subscribeHome } from './homeCity';
import { getPref, setPref } from './prefs';

/** The date pill's words: "Today" or "Fri, Oct 25". The map shows one day (Kylie, Oct 6: no Next 7 days). */
export function dateLabel(isToday: boolean, date: string): string {
  if (isToday) return 'Today';
  return shortLocalDate(date);
}

/** The city a bare map address means: home, once chosen, otherwise Los Angeles. */
export function openedMetroId(): string {
  return getHomeId() ?? DEFAULT_METRO.id;
}

/**
 * What the Map is looking at: one place and one date. The header owns the
 * place (the area switcher). The strip and the date pill own the date. The
 * sheet and the map just read them. No city in the address means home.
 * Until they choose one, that is Los Angeles. Other places are real metros
 * from her log, not a row per venue. Naming a city here does not change home.
 * An old `when=week` address opens the day; the map no longer widens.
 */
export interface View {
  metro: Metro;
  date: string;
  today: string;
  isToday: boolean;
}

export function useView(): View {
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const [params] = useSearchParams();
  const requested = params.get('metro');
  const metro = (requested && METROS[requested]) || (homeId && METROS[homeId]) || DEFAULT_METRO;
  const today = todayIn(metro);
  const rawDate = params.get('date');
  const date = rawDate && isValidDate(rawDate) ? rawDate : today;
  return { metro, date, today, isToday: date === today };
}

/** The Explore address for one place and one date. `view` forces Map or List; without it the remembered view opens. */
export function mapPath(opts: { metroId: string; date: string; today: string; view?: 'map' | 'list'; /** The event to open selected (a search hit). */ eventId?: string }): string {
  const params = new URLSearchParams();
  if (opts.metroId !== openedMetroId()) params.set('metro', opts.metroId);
  if (opts.date !== opts.today) params.set('date', opts.date);
  if (opts.view) params.set('view', opts.view);
  if (opts.eventId) params.set('event', opts.eventId);
  const q = params.toString();
  return `/explore${q ? `?${q}` : ''}`;
}

/**
 * The event page for one night. Los Angeles stays a plain path. Any other
 * city is named on the query so the page does not look the night up in Los Angeles.
 */
/** Always carries the city: a page with no city in its address falls back to home, which may not be the city you
 * were looking at (Kylie, Oct 17: a Los Angeles day opened as the Bay Area). */
export function eventPath(eventId: string, metroId: string): string {
  if (!metroId) return `/event/${eventId}`;
  return `/event/${eventId}?metro=${encodeURIComponent(metroId)}`;
}

/** One night for a side-by-side: a city, a date and, when it matters, the event. */
export interface NightKey {
  metroId: string;
  date: string;
  eventId?: string;
}

function nightKeyText(key: NightKey): string {
  return [key.metroId, key.date, key.eventId ?? ''].join('|');
}

export function parseNightKey(text: string | null): NightKey | null {
  if (!text) return null;
  const [metroId, date, eventId] = text.split('|');
  if (!metroId || !isValidDate(date ?? '')) return null;
  return { metroId, date, ...(eventId ? { eventId } : {}) };
}

/** The picker with one night, the side-by-side with two (docs/product/compare-proposal-oct6.md). */
export function comparePath(a: NightKey, b?: NightKey): string {
  const params = new URLSearchParams({ a: nightKeyText(a) });
  if (b) params.set('b', nightKeyText(b));
  return `/compare?${params.toString()}`;
}

/** Your tag's page under Stubs. Tags hold spaces, ' and &, so the word is encoded. */
export function tagPath(tag: string): string {
  return `/stubs/tag/${encodeURIComponent(tag)}`;
}

/** A night typed in by hand, with no catalog event behind it. */
export function entryPath(entryId: string): string {
  return `/entry/${encodeURIComponent(entryId)}`;
}

/** The night page: a date in a city, with an event to highlight when one is meant. */
export function datePath(date: string, metroId: string, eventId?: string): string {
  const params = new URLSearchParams();
  if (metroId) params.set('metro', metroId);
  if (eventId) params.set('event', eventId);
  const q = params.toString();
  return `/date/${date}${q ? `?${q}` : ''}`;
}

/**
 * Where a row that names an event opens (Kylie, Oct 21, 2026, option A in docs/product/further-out-proposal.md):
 * its date page, unless the event is further out, when it opens the event page. The city's date page never counted
 * a further-out event and buries it under the lineup; the event page names the town and says "Further out".
 * Every row on Home, a favorite's page and More dates goes through this, so the rule holds in every city.
 */
export function eventRowPath(event: CrowdEvent): string {
  return isFurtherOut(event) ? eventPath(event.id, event.metroId) : datePath(event.date, event.metroId, event.id);
}

/** The same rule for a stub, plan or game row, which keeps only its city and the room's name. */
export function loggedRowPath(row: { date: string; metroId: string; eventId?: string; venue?: string }): string {
  return row.eventId && isFurtherOutRoom(row.metroId, row.venue) ? eventPath(row.eventId, row.metroId) : datePath(row.date, row.metroId, row.eventId);
}

/** The calendar view of Explore, opened on the month of a date. */
export function calendarPath(opts: { metroId: string; date: string }): string {
  const params = new URLSearchParams();
  if (opts.metroId !== openedMetroId()) params.set('metro', opts.metroId);
  params.set('date', opts.date);
  params.set('view', 'calendar');
  return `/explore?${params.toString()}`;
}

/** Explore's two views (build notes 4, 1.1). The old stand-alone calendar page is `?view=calendar`, unlinked. */
export type ExploreView = 'map' | 'list';

/**
 * The view Explore last showed on this device (Kylie, Oct 5: a switch that remembers).
 * Before the List existed the switch wrote "calendar"; that answer lands on the List now,
 * the date view that replaced it.
 */
export function getExploreView(): ExploreView {
  const saved = getPref<string>('explore-view', 'map');
  return saved === 'list' || saved === 'calendar' ? 'list' : 'map';
}

export function setExploreView(view: ExploreView) {
  setPref('explore-view', view);
}

/** Where a profile page's back link returns to, from the page it was opened on (R08). */
export interface BackTo {
  to: string;
  label: string;
}

export function backFrom(pathname: string, search = ''): BackTo {
  const to = `${pathname}${search}`;
  if (pathname.startsWith('/you/people')) return { to, label: 'People' };
  if (pathname.startsWith('/you')) return { to, label: 'You' };
  if (pathname.startsWith('/stubs')) return { to, label: 'Stubs' };
  if (pathname.startsWith('/following')) return { to, label: 'Following' };
  if (pathname === '/' || pathname.startsWith('/home')) return { to, label: 'Home' };
  if (pathname.startsWith('/p/')) return { to, label: 'Back' };
  return { to, label: 'Back' };
}
