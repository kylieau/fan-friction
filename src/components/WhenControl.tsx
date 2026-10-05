import { useId } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Metro } from '../config/metros';
import { ChevronDown } from './Icons';
import { mapPath, calendarPath, whenLabel, type WhenSpan } from '../lib/view';

interface Props {
  metro: Metro;
  date: string;
  today: string;
  isToday: boolean;
  /** The span the map is actually showing: an explicit pick, or the automatic widen. */
  span: WhenSpan;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * The one When control, drawn as the on-map pill: Today, Next 7 days,
 * or Pick a date. Each label is only those words: "Today", "Next 7 days",
 * or the picked date.
 */
export function WhenControl({ metro, date, today, isToday, span, open, onOpenChange }: Props) {
  const navigate = useNavigate();
  const menuId = useId();

  const label = whenLabel(span, isToday, date);

  const go = (nextDate: string, when: WhenSpan) => {
    navigate(mapPath({ metroId: metro.id, date: nextDate, today, when }));
    onOpenChange(false);
  };

  // Next 7 days starts at today when the base date is in the past.
  const base = date < today ? today : date;
  const pickedDate = span === 'day' && !isToday;

  return (
    <div className="when">
      <button
        type="button"
        className="date-button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => onOpenChange(!open)}
      >
        {label}
        <ChevronDown />
      </button>
      {open && (
        <div className="when-menu" id={menuId} role="menu" aria-label="When">
          <button type="button" role="menuitemradio" aria-checked={span === 'day' && isToday} onClick={() => go(today, 'day')}>
            Today
          </button>
          <button type="button" role="menuitemradio" aria-checked={span === 'week'} onClick={() => go(base, 'week')}>
            Next 7 days
          </button>
          <Link
            role="menuitem"
            aria-current={pickedDate ? 'date' : undefined}
            to={calendarPath({ metroId: metro.id, date })}
            onClick={() => onOpenChange(false)}
          >
            Pick a date
          </Link>
        </div>
      )}
    </div>
  );
}
