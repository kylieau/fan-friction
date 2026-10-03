import { useEffect, useId, useRef, useState } from 'react';
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
}

/**
 * The one When control, drawn as the on-map pill: Today, Next 7 days,
 * All upcoming, or Pick a date. A range keeps the base date, and the header
 * rating still describes that date.
 */
export function WhenControl({ metro, date, today, isToday, span }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const dayLabel = isToday ? 'Today' : shortLocalDate(date);
  const label =
    span === 'week'
      ? `${dayLabel} · Next 7 days`
      : span === 'all'
        ? `${dayLabel} · All upcoming`
        : isToday
          ? `Today · ${shortDate(new Date(), metro)}`
          : shortLocalDate(date);

  const go = (nextDate: string, when: WhenSpan) => {
    navigate(mapPath({ metroId: metro.id, date: nextDate, today, when }));
    setOpen(false);
  };

  // Next 7 days and All upcoming start at today when the base date is in the past.
  const base = date < today ? today : date;
  const pickedDate = span === 'day' && !isToday;

  return (
    <div className="when" ref={rootRef}>
      <button
        type="button"
        className="date-button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
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
          <button type="button" role="menuitemradio" aria-checked={span === 'all'} onClick={() => go(base, 'all')}>
            All upcoming
          </button>
          <Link
            role="menuitem"
            aria-current={pickedDate ? 'date' : undefined}
            to={nightsPath({ metroId: metro.id, date })}
            onClick={() => setOpen(false)}
          >
            Pick a date
          </Link>
        </div>
      )}
    </div>
  );
}
