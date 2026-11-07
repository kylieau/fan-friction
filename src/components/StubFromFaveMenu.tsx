import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookmarkIcon, ChevronRight, TicketIcon, TvIcon } from './Icons';
import { StubSheet } from './StubSheet';
import { eventFromGame, getPersonalLog, plannedKind, subscribePersonalLog, togglePlan, type CrowdEvent, type PlanAnswer } from '../data';
import type { ScheduleRow } from './useFavoriteRows';

/** The event a faves row can stub: its listed event, else the page built from the team's schedule game. */
export function rowEvent(row: ScheduleRow): CrowdEvent | null {
  return row.event ?? (row.link ? eventFromGame(row.link) : null);
}

const ANSWERS: { answer: PlanAnswer; word: string; sub?: string; icon: ReactNode }[] = [
  { answer: 'attend', word: 'Attending', sub: 'I have tickets', icon: <TicketIcon size={20} /> },
  { answer: 'watch', word: 'Watching', sub: 'Pick a place next', icon: <TvIcon /> },
  { answer: 'interested', word: 'Interested', icon: <BookmarkIcon size={20} /> },
];

/**
 * Stub From Your Faves (build 7.2; Kylie, Nov 4, 2026: long-press, mock C): the held row lifts above a pale blue
 * blur, no dark scrim, and a quick menu under it offers Attending, Watching (then the Stub it sheet, to pick a
 * place), Interested and Open Event, 50pt rows. The answer you already gave is marked; tapping it opens the Stub
 * it sheet, where it can be changed or taken back, so the menu itself never removes a plan. The menu flips above
 * the row when there is no room under it. Escape, a tap outside, or any pick closes it; focus goes back where
 * it was.
 */
export function StubFromFaveMenu({ row, event, rect, to, lifted, onClose }: { row: ScheduleRow; event: CrowdEvent; rect: DOMRect; /** Where the row's words open. */ to: string; /** The row drawn again, lifted. */ lifted: ReactNode; onClose: () => void }) {
  const navigate = useNavigate();
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  const current = plannedKind(event.id, log);
  const [sheet, setSheet] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number | null>(null);
  const returnTo = useRef<Element | null>(null);

  // Under the row, or above it when the tab bar is in the way; the first item takes focus.
  useLayoutEffect(() => {
    returnTo.current = document.activeElement;
    const el = menu.current;
    if (!el) return;
    const h = el.offsetHeight;
    const bar = document.querySelector('.tabbar')?.getBoundingClientRect().top ?? window.innerHeight;
    const below = rect.bottom + 12;
    setTop(below + h <= bar - 8 ? below : Math.max(8, rect.top - 12 - h));
  }, [rect]);

  // The first item takes focus once the menu is placed (hidden until then, and a hidden element cannot take it).
  useEffect(() => {
    if (top !== null) (menu.current?.querySelector('[role="menuitem"]') as HTMLElement | null)?.focus();
  }, [top]);

  // Focus goes back where it was once, when the menu leaves (not each time the parent re-renders its onClose).
  useEffect(() => () => (returnTo.current as HTMLElement | null)?.focus?.(), []);

  const close = useRef(onClose);
  close.current = onClose;
  const sheetOpen = useRef(false);
  sheetOpen.current = sheet;
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      // The Stub it sheet, once open, handles its own keys.
      if (sheetOpen.current) return;
      if (ev.key === 'Escape') {
        ev.stopPropagation();
        close.current();
        return;
      }
      const items = Array.from(menu.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);
      const i = items.indexOf(document.activeElement as HTMLElement);
      if (items.length === 0) return;
      // Tab and the arrows stay inside the menu (the page behind it is not inert; BACKLOG, the shared focus rule).
      if (ev.key === 'Tab') {
        ev.preventDefault();
        items[i < 0 ? 0 : (i + (ev.shiftKey ? items.length - 1 : 1)) % items.length].focus();
        return;
      }
      if ((ev.key !== 'ArrowDown' && ev.key !== 'ArrowUp') || i < 0) return;
      ev.preventDefault();
      items[(i + (ev.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length].focus();
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, []);

  // The sheet opened from here takes focus on its first answer, so Tab does not fall back to the page behind.
  useEffect(() => {
    if (sheet) (document.querySelector('[aria-label="Stub it"] .stub-choice') as HTMLElement | null)?.focus();
  }, [sheet]);

  const pick = (answer: PlanAnswer) => {
    if (current === answer) {
      setSheet(true);
      return;
    }
    togglePlan(event, answer);
    if (answer === 'watch') setSheet(true);
    else onClose();
  };

  if (sheet) return <StubSheet event={event} onClose={onClose} />;

  return (
    <div className="press-scrim" onClick={onClose}>
      <div className="press-lift" style={{ top: rect.top, left: rect.left + 12, width: rect.width - 24 }} aria-hidden inert>
        {lifted}
      </div>
      <div ref={menu} className="press-menu" role="menu" aria-label={`Stub ${row.title}`} style={{ top: top ?? rect.bottom + 12, left: rect.left + 44, width: Math.min(290, rect.width - 56), visibility: top === null ? 'hidden' : undefined }} onClick={(e) => e.stopPropagation()}>
        {ANSWERS.map((a) => (
          <button key={a.answer} type="button" role="menuitem" className="press-menu-row" aria-current={current === a.answer ? 'true' : undefined} onClick={() => pick(a.answer)}>
            <span className="press-menu-icon">{a.icon}</span>
            <span className="press-menu-word">{a.word}</span>
            {current === a.answer ? (
              <span className="press-menu-check" aria-label="your answer">
                ✓
              </span>
            ) : (
              a.sub && <span className="press-menu-sub">{a.sub}</span>
            )}
          </button>
        ))}
        <button
          type="button"
          role="menuitem"
          className="press-menu-row press-menu-open"
          onClick={() => {
            onClose();
            navigate(to, { state: row.link ? { game: row.link } : undefined });
          }}
        >
          <span className="press-menu-icon">
            <ChevronRight />
          </span>
          <span className="press-menu-word">Open Event</span>
        </button>
      </div>
    </div>
  );
}
