import { useEffect, useRef, type MouseEvent, type PointerEvent } from 'react';

const HOLD_MS = 450;
const SLOP_PX = 8;
/** The click that follows a long release lands within this; after it the row's clicks are its own again. */
const SWALLOW_MS = 700;

/**
 * Press and hold on a row (build 7.2, Stub From Your Faves, mock C; Kylie, Nov 4, 2026: long-press if buildable).
 * Pointer events only: a primary press starts the clock; lifting, a scroll (the browser cancels the pointer), a
 * second finger or a finger drifting past the slop stops it. When it fires, the click that follows the release is
 * swallowed at the row, so neither the row's event link nor the lead's page opens. A right-click or the keyboard's
 * menu key (`contextmenu`) opens the same thing: the desktop and keyboard path a long-press cannot give.
 *
 * Spread the result on the element; `rect` is where it sat on screen when the press fired.
 */
export function useLongPress(onLongPress: (rect: DOMRect) => void, enabled = true) {
  const timer = useRef<number | null>(null);
  const start = useRef<{ id: number; x: number; y: number; at: number; el: HTMLElement } | null>(null);
  const firedAt = useRef(0);
  const latest = useRef(onLongPress);
  latest.current = onLongPress;

  const clear = () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
    start.current = null;
  };

  // A row that leaves the list mid-hold (a filter, a removal) never opens a menu for itself.
  useEffect(() => clear, []);
  useEffect(() => {
    if (!enabled) clear();
  }, [enabled]);

  const fire = (el: HTMLElement) => {
    clear();
    firedAt.current = Date.now();
    navigator.vibrate?.(10);
    latest.current(el.getBoundingClientRect());
  };

  const mine = (e: PointerEvent<HTMLElement>) => start.current !== null && e.pointerId === start.current.id;

  // A release after a hold whose clock ran late (the page was busy loading) still counts as the hold, not a tap.
  const release = (e: PointerEvent<HTMLElement>) => {
    if (!mine(e)) return;
    const s = start.current!;
    if (timer.current !== null && Date.now() - s.at >= HOLD_MS) fire(s.el);
    else clear();
  };

  const cancel = (e: PointerEvent<HTMLElement>) => {
    if (mine(e)) clear();
  };

  if (!enabled) return {};

  return {
    onPointerDown: (e: PointerEvent<HTMLElement>) => {
      // A second finger ends the hold rather than joining it.
      if (start.current !== null) {
        clear();
        return;
      }
      if (!e.isPrimary || e.button !== 0) return;
      firedAt.current = 0;
      const el = e.currentTarget;
      start.current = { id: e.pointerId, x: e.clientX, y: e.clientY, at: Date.now(), el };
      timer.current = window.setTimeout(() => fire(el), HOLD_MS);
    },
    onPointerMove: (e: PointerEvent<HTMLElement>) => {
      const s = start.current;
      if (s && e.pointerId === s.id && Math.hypot(e.clientX - s.x, e.clientY - s.y) > SLOP_PX) clear();
    },
    onPointerUp: release,
    onPointerCancel: cancel,
    onPointerLeave: cancel,
    // The click right after a long release goes nowhere; a short tap, or a later keyboard click, still opens the row's links.
    onClickCapture: (e: MouseEvent<HTMLElement>) => {
      if (!firedAt.current || Date.now() - firedAt.current > SWALLOW_MS) return;
      firedAt.current = 0;
      e.preventDefault();
      e.stopPropagation();
    },
    onContextMenu: (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      clear();
      latest.current(e.currentTarget.getBoundingClientRect());
    },
  };
}
