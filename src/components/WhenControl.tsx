import { ChevronDown } from './Icons';
import { dateLabel } from '../lib/view';

/**
 * The date pill on the map: "Today" or "Fri, Oct 9". A tap opens the month
 * sheet. The old menu (Today / Next 7 days / Pick a date) is gone: the map
 * shows one day, and the strip is how you look around (Kylie, Oct 6).
 */
export function WhenControl({ date, isToday, onPickDate }: { date: string; isToday: boolean; onPickDate: () => void }) {
  return (
    <button type="button" className="date-button" aria-label="Pick a date" aria-haspopup="dialog" onClick={onPickDate}>
      {dateLabel(isToday, date)}
      <ChevronDown />
    </button>
  );
}
