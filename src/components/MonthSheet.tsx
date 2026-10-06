import { useEffect, useRef } from 'react';
import type { Metro } from '../config/metros';
import { CalendarPanel } from '../screens/CalendarScreen';

/**
 * The month grid, search and Famous nights, dropped from the header over
 * whatever page opened it (Explore's map, or Home). Picking a day hands the
 * date back to the page. It goes away when the grab bar on its bottom edge is
 * dragged or flicked up, on Escape, or when the page closes it (Kylie, Oct 6:
 * no Done button).
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
  const sheetRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startY: number; startedAt: number; dy: number } | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const onTouchStart = (event: React.TouchEvent) => {
    const el = sheetRef.current;
    if (!el) return;
    drag.current = { startY: event.touches[0].clientY, startedAt: Date.now(), dy: 0 };
    el.style.transition = 'none';
  };
  const onTouchMove = (event: React.TouchEvent) => {
    const el = sheetRef.current;
    const d = drag.current;
    if (!el || !d) return;
    d.dy = Math.min(0, event.touches[0].clientY - d.startY);
    el.style.transform = `translateY(${d.dy}px)`;
  };
  const onTouchEnd = () => {
    const el = sheetRef.current;
    const d = drag.current;
    drag.current = null;
    if (!el || !d) return;
    const flick = d.dy < -24 && Date.now() - d.startedAt < 300;
    if (d.dy < -80 || flick) {
      el.style.transition = 'transform 160ms ease-in, opacity 160ms ease-in';
      el.style.transform = 'translateY(-100%)';
      el.style.opacity = '0';
      window.setTimeout(onClose, 160);
      return;
    }
    el.style.transition = 'transform 180ms ease-out';
    el.style.transform = '';
  };

  return (
    <div className="month-sheet" ref={sheetRef} role="dialog" aria-modal="true" aria-label="Find a date">
      <div className="month-sheet-body">
        <CalendarPanel metro={metro} today={today} focus={focus} onPick={onPick} />
      </div>
      <div
        className="month-sheet-grab"
        role="button"
        tabIndex={0}
        aria-label="Close"
        onClick={onClose}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClose()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <span className="month-sheet-handle" aria-hidden />
      </div>
    </div>
  );
}
