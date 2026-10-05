import type { Metro } from '../config/metros';
import { CalendarPanel } from '../screens/CalendarScreen';

/**
 * The month grid, search and Famous nights as a sheet over whatever page opened
 * it (Explore's map, or Home). Picking a day hands the date back to the page.
 */
export function MonthSheet({
  metro,
  today,
  focus,
  onPick,
  onClose,
}: {
  metro: Metro;
  today: string;
  focus: string | null;
  onPick: (date: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="month-sheet" role="dialog" aria-modal="true" aria-label="Find a date">
      <div className="month-sheet-top">
        <span className="month-sheet-handle" aria-hidden />
        <button type="button" className="link-button month-sheet-done" onClick={onClose}>
          Done
        </button>
      </div>
      <div className="month-sheet-body">
        <CalendarPanel metro={metro} today={today} focus={focus} onPick={onPick} />
      </div>
    </div>
  );
}
