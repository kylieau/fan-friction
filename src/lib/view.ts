import { useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, METROS, type Metro } from '../config/metros';
import { todayIn } from '../data';
import { isValidDate } from './dates';

/** How wide the map looks around its base date. A range has no rating of its own. */
export type WhenSpan = 'day' | 'week' | 'all';

/**
 * What the Map is looking at: one place and one date. The header owns the
 * place (the area switcher). The on-map When pill owns the date and how wide
 * to look. The sheet and the map just read them. `when` is null until
 * someone picks Today, a range, or a date. Los Angeles is the default.
 * Other cities are only the ones that show up in her log.
 */
export interface View {
  metro: Metro;
  date: string;
  today: string;
  isToday: boolean;
  when: WhenSpan | null;
}

export function useView(): View {
  const [params] = useSearchParams();
  const requested = params.get('metro');
  const metro = (requested && METROS[requested]) || DEFAULT_METRO;
  const today = todayIn(metro);
  const rawDate = params.get('date');
  const date = rawDate && isValidDate(rawDate) ? rawDate : today;
  const rawWhen = params.get('when');
  const when: WhenSpan | null = rawWhen === 'day' || rawWhen === 'week' || rawWhen === 'all' ? rawWhen : null;
  return { metro, date, today, isToday: date === today, when };
}

/** The map address for one place, one base date, and how wide to look. */
export function mapPath(opts: { metroId: string; date: string; today: string; when: WhenSpan }): string {
  const params = new URLSearchParams();
  if (opts.metroId !== DEFAULT_METRO.id) params.set('metro', opts.metroId);
  if (opts.date !== opts.today) params.set('date', opts.date);
  params.set('when', opts.when);
  return `/?${params.toString()}`;
}

/** The Nights tab, opened on the month of a date so "Pick a date" lands in the right place. */
export function nightsPath(opts: { metroId: string; date: string }): string {
  const params = new URLSearchParams();
  if (opts.metroId !== DEFAULT_METRO.id) params.set('metro', opts.metroId);
  params.set('date', opts.date);
  return `/nights?${params.toString()}`;
}
