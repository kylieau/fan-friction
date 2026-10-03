import { useId } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Metro } from '../config/metros';
import { ChevronDown } from './Icons';
import { shortDate, shortLocalDate } from '../lib/dates';
import { mapPath, nightsPath, type WhenSpan } from '../lib/view';

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
 * or Pick a date. A range keeps the base date, and the header
 * rating still describes that date.
 */
export function WhenControl({ metro, date, today, isToday, span, open, onOpenChange }: Props) {
  const navigate = useNavigate();
  const menuId = useId();

  const dayLabel = isToday ? 'Today' : shortLocalDate(date);
  const label =
    span === 'week'
      ? `${dayLabel} · Next 7 days`
      : isToday
        ? `Today · ${shortDate(new Date(), metro)}`
        : shortLocalDate(date);

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
            to={nightsPath({ metroId: metro.id, date })}
            onClick={() => onOpenChange(false)}
          >
            Pick a date
          </Link>
        </div>
      )}
    </div>
  );
}
