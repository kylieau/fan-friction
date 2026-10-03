import { useSearchParams } from 'react-router-dom';
import { DEFAULT_METRO, type Metro } from '../config/metros';
import { todayIn } from '../data';

/**
 * What the Map is looking at: one place and one date. The header owns both;
 * the sheet, the map and everything else just read them. The place is LA for
 * now; an area switcher later only has to change it here.
 */
export interface View {
  metro: Metro;
  date: string;
  today: string;
  isToday: boolean;
}

export function useView(): View {
  const [params] = useSearchParams();
  const metro = DEFAULT_METRO;
  const today = todayIn(metro);
  const date = params.get('date') ?? today;
  return { metro, date, today, isToday: date === today };
}
