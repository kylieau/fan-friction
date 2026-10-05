import { useSyncExternalStore } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS, type Metro } from '../config/metros';
import { todayIn } from '../data';
import { isValidDate, shortLocalDate } from './dates';
import { getHomeId, subscribeHome } from './homeCity';
import { getPref, setPref } from './prefs';

/** How wide the map looks around its base date. A rated week shows the average to one decimal. */
export type WhenSpan = 'day' | 'week';

/** The When pill's words: "Today", "Next 7 days", or "Fri, Oct 25". */
export function whenLabel(span: WhenSpan, isToday: boolean, date: string): string {
  if (span === 'week') return 'Next 7 days';
  if (isToday) return 'Today';
  return shortLocalDate(date);
}

/** The city a bare map address means: home, once chosen, otherwise Los Angeles. */
export function openedMetroId(): string {
  return getHomeId() ?? DEFAULT_METRO.id;
}

/**
 * What the Map is looking at: one place and one date. The header owns the
 * place (the area switcher). The on-map When pill owns the date and how wide
 * to look. The sheet and the map just read them. `when` is null until
 * someone picks Today, a range, or a date. No city in the address means home.
 * Until they choose one, that is Los Angeles. Other places are real metros
 * from her log, not a row per venue. Naming a city here does not change home.
 */
export interface View {
  metro: Metro;
  date: string;
  today: string;
  isToday: boolean;
  when: WhenSpan | null;
}

export function useView(): View {
  const homeId = useSyncExternalStore(subscribeHome, getHomeId, getHomeId);
  const [params] = useSearchParams();
  const requested = params.get('metro');
  const metro = (requested && METROS[requested]) || (homeId && METROS[homeId]) || DEFAULT_METRO;
  const today = todayIn(metro);
  const rawDate = params.get('date');
  const date = rawDate && isValidDate(rawDate) ? rawDate : today;
  const rawWhen = params.get('when');
  const when: WhenSpan | null = rawWhen === 'day' || rawWhen === 'week' ? rawWhen : null;
  return { metro, date, today, isToday: date === today, when };
}

/** The map address for one place, one base date, and how wide to look. */
export function mapPath(opts: { metroId: string; date: string; today: string; when: WhenSpan }): string {
  const params = new URLSearchParams();
  if (opts.metroId !== openedMetroId()) params.set('metro', opts.metroId);
  if (opts.date !== opts.today) params.set('date', opts.date);
  params.set('when', opts.when);
  return `/explore?${params.toString()}`;
}

/**
 * The event page for one night. Los Angeles stays a plain path. Any other
 * city is named on the query so the page does not look the night up in Los Angeles.
 */
export function eventPath(eventId: string, metroId: string): string {
  if (!metroId || metroId === DEFAULT_METRO.id) return `/event/${eventId}`;
  return `/event/${eventId}?metro=${encodeURIComponent(metroId)}`;
}

/** The night page: a date in a city, with an event to highlight when one is meant. */
export function datePath(date: string, metroId: string, eventId?: string): string {
  const params = new URLSearchParams();
  if (metroId && metroId !== DEFAULT_METRO.id) params.set('metro', metroId);
  if (eventId) params.set('event', eventId);
  const q = params.toString();
  return `/date/${date}${q ? `?${q}` : ''}`;
}

/** The calendar view of Explore, opened on the month of a date. */
export function calendarPath(opts: { metroId: string; date: string }): string {
  const params = new URLSearchParams();
  if (opts.metroId !== openedMetroId()) params.set('metro', opts.metroId);
  params.set('date', opts.date);
  params.set('view', 'calendar');
  return `/explore?${params.toString()}`;
}

export type ExploreView = 'map' | 'calendar';

/** The view Explore last showed on this device (Kylie, Oct 5: a switch that remembers). */
export function getExploreView(): ExploreView {
  return getPref<ExploreView>('explore-view', 'map') === 'calendar' ? 'calendar' : 'map';
}

export function setExploreView(view: ExploreView) {
  setPref('explore-view', view);
}
