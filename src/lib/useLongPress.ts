import { useRef, type MouseEvent, type PointerEvent } from 'react';

const HOLD_MS = 450;
const SLOP_PX = 8;

/**
 * Press and hold on a row (build 7.2, Stub From Your Faves, mock C; Kylie, Nov 4, 2026: long-press if buildable).
 * Pointer events only: a primary press starts the clock; lifting, a scroll (the browser cancels the pointer) or a
 * finger drifting past the slop stops it. When it fires, the click that follows the release is swallowed at the
 * row, so neither the row's event link nor the lead's page opens. A right-click or the keyboard's menu key
 * (`contextmenu`) opens the same thing: the desktop and keyboard path a long-press cannot give.
 *
 * Spread `handlers` on the element; `rect` is where it sat on screen when the press fired.
 */
export function useLongPress(onLongPress: (rect: DOMRect) => void, enabled = true) {
  const timer = useRef<number | null>(null);
  const start = useRef<{ x: number; y: number; at: number; el: HTMLElement } | null>(null);
  const fired = useRef(false);

  const clear = () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
    start.current = null;
  };

  const fire = (el: HTMLElement) => {
    clear();
    fired.current = true;
    navigator.vibrate?.(10);
    onLongPress(el.getBoundingClientRect());
  };

  // A release after a hold whose clock ran late (the page was busy loading) still counts as the hold, not a tap.
  const release = () => {
    const s = start.current;
    if (s && timer.current !== null && Date.now() - s.at >= HOLD_MS) fire(s.el);
    else clear();
  };

  if (!enabled) return {};

  return {
    onPointerDown: (e: PointerEvent<HTMLElement>) => {
      if (!e.isPrimary || e.button !== 0) return;
      clear();
      fired.current = false;
      const el = e.currentTarget;
      start.current = { x: e.clientX, y: e.clientY, at: Date.now(), el };
      timer.current = window.setTimeout(() => fire(el), HOLD_MS);
    },
    onPointerMove: (e: PointerEvent<HTMLElement>) => {
      const s = start.current;
      if (s && Math.hypot(e.clientX - s.x, e.clientY - s.y) > SLOP_PX) clear();
    },
    onPointerUp: release,
    onPointerCancel: clear,
    onPointerLeave: clear,
    // The click after a long release goes nowhere; a short tap still opens the row's links.
    onClickCapture: (e: MouseEvent<HTMLElement>) => {
      if (!fired.current) return;
      fired.current = false;
      e.preventDefault();
      e.stopPropagation();
    },
    onContextMenu: (e: MouseEvent<HTMLElement>) => {
      e.preventDefault();
      clear();
      onLongPress(e.currentTarget.getBoundingClientRect());
    },
  };
}
