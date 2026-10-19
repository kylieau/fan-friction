import { useCallback, useRef } from 'react';

/**
 * Marks a row that scrolls sideways with the edge it clips at, so the stylesheet can fade that edge
 * (`[data-fade="end"]`, `"start"`, `"both"`): a sign there is more, where a chip row otherwise ends flush with
 * no cue (tester-readiness review R15, Oct 19, 2026). A row that fits carries no mark and no fade. Attach the
 * returned ref to the scrolling element; the mark follows scrolling, resizing and chips coming and going.
 */
export function useEdgeFade<T extends HTMLElement = HTMLDivElement>() {
  const cleanup = useRef<(() => void) | null>(null);
  return useCallback((el: T | null) => {
    cleanup.current?.();
    cleanup.current = null;
    if (!el) return;
    const mark = () => {
      const more = el.scrollWidth - el.clientWidth;
      if (more <= 1) {
        delete el.dataset.fade;
        return;
      }
      const start = el.scrollLeft > 1;
      const end = el.scrollLeft < more - 1;
      el.dataset.fade = start && end ? 'both' : start ? 'start' : end ? 'end' : '';
    };
    mark();
    el.addEventListener('scroll', mark, { passive: true });
    // The row and each chip: a chip changes width as the font loads or its words change, while the row's own box
    // stays the same, so the row alone is not enough to watch.
    const sizes = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(mark);
    const watchSizes = () => {
      if (!sizes) return;
      sizes.disconnect();
      sizes.observe(el);
      for (const child of el.children) sizes.observe(child);
    };
    watchSizes();
    const children =
      typeof MutationObserver === 'undefined'
        ? null
        : new MutationObserver(() => {
            watchSizes();
            mark();
          });
    children?.observe(el, { childList: true, subtree: true, characterData: true });
    window.addEventListener('resize', mark);
    cleanup.current = () => {
      el.removeEventListener('scroll', mark);
      sizes?.disconnect();
      children?.disconnect();
      window.removeEventListener('resize', mark);
    };
  }, []);
}
