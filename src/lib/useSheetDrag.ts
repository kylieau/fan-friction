import { useEffect, useRef, type RefObject } from 'react';

const SNAP_MS = 260;

/**
 * Makes the bottom sheet follow a finger. The sheet is as tall as its title and
 * rows, up to a max, and slides up and down: closed shows only its top block
 * (grabber, night line, selected event); open shows the list. Dragging moves it
 * live; letting go settles it to whichever height is nearer, or in the direction
 * of a quick flick.
 *
 * Returns `wasDragged()`, so a tap on the grabber can tell a drag from a click.
 */
export function useSheetDrag(
  sheet: RefObject<HTMLElement | null>,
  top: RefObject<HTMLElement | null>,
  body: RefObject<HTMLElement | null>,
  open: boolean,
  setOpen: (open: boolean) => void,
) {
  const openRef = useRef(open);
  openRef.current = open;
  const dragged = useRef(false);

  // How far down the sheet slides when closed.
  const closedY = () => Math.max(0, (sheet.current?.offsetHeight ?? 0) - (top.current?.offsetHeight ?? 0) - 12);

  const place = (y: number, animate: boolean) => {
    const el = sheet.current;
    if (!el) return;
    el.style.transition = animate ? `transform ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)` : 'none';
    el.style.transform = `translateY(${y}px)`;
    el.parentElement?.style.setProperty('--sheet-h', `${el.offsetHeight}px`);
  };

  // Rest at the right height whenever it opens, closes, or its top block changes size.
  useEffect(() => {
    place(open ? 0 : closedY(), true);
    const watch = new ResizeObserver(() => place(openRef.current ? 0 : closedY(), false));
    if (top.current) watch.observe(top.current);
    if (sheet.current) watch.observe(sheet.current);
    return () => watch.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const el = sheet.current;
    if (!el) return;
    let startY = 0;
    let startTime = 0;
    let base = 0;
    let lastY = 0;
    let lastTime = 0;
    let velocity = 0; // px per ms, negative = up
    let mode: 'idle' | 'pending' | 'drag' | 'scroll' = 'idle';

    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      startY = lastY = t.clientY;
      startTime = lastTime = e.timeStamp;
      velocity = 0;
      base = openRef.current ? 0 : closedY();
      mode = 'pending';
      dragged.current = false;
    };

    const onMove = (e: TouchEvent) => {
      if (mode === 'idle' || mode === 'scroll') return;
      const t = e.touches[0];
      const dy = t.clientY - startY;
      const inBody = body.current?.contains(e.target as Node) ?? false;
      const scrolledDown = (body.current?.scrollTop ?? 0) > 0;

      if (mode === 'pending') {
        if (Math.abs(dy) < 6) return;
        // A list that's scrolled, or being scrolled up while open, belongs to the list.
        if (inBody && openRef.current && (scrolledDown || dy < 0)) {
          mode = 'scroll';
          return;
        }
        mode = 'drag';
      }

      e.preventDefault(); // we own this gesture: don't let the page or the list scroll
      dragged.current = true;
      const y = Math.min(closedY(), Math.max(0, base + dy));
      const dt = e.timeStamp - lastTime;
      if (dt > 0) velocity = (t.clientY - lastY) / dt;
      lastY = t.clientY;
      lastTime = e.timeStamp;
      place(y, false);
    };

    const onEnd = (e: TouchEvent) => {
      const was = mode;
      mode = 'idle';
      if (was !== 'drag') return;
      const y = Math.min(closedY(), Math.max(0, base + (lastY - startY)));
      const flick = Math.abs(velocity) > 0.35 && e.timeStamp - lastTime < 120;
      const next = flick ? velocity < 0 : y < closedY() / 2;
      setOpen(next);
      place(next ? 0 : closedY(), true); // also settles when the state didn't change
      void startTime;
    };

    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: false });
    el.addEventListener('touchend', onEnd, { passive: true });
    el.addEventListener('touchcancel', onEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onEnd);
      el.removeEventListener('touchcancel', onEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { wasDragged: () => dragged.current };
}
