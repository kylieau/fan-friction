import { useCallback, useRef } from 'react';

/**
 * Marks a row that scrolls with the edge it clips at, so the stylesheet can fade that edge: a sign there is
 * more, where a chip row otherwise ends flush with no cue (tester-readiness review R15, Oct 19, 2026). A row
 * that fits carries no mark and no fade. Attach the returned ref to the scrolling element; the mark follows
 * scrolling, resizing and chips coming and going. Sideways rows get `data-fade` (`end`, `start`, `both`);
 * a box that scrolls up and down (`axis: 'y'`) gets `data-fade-y` the same way.
 */
export function useEdgeFade<T extends HTMLElement = HTMLDivElement>(axis: 'x' | 'y' = 'x') {
  const cleanup = useRef<(() => void) | null>(null);
  return useCallback(
    (el: T | null) => {
      cleanup.current?.();
      cleanup.current = null;
      if (!el) return;
      const key = axis === 'y' ? 'fadeY' : 'fade';
      const mark = () => {
        const more = axis === 'y' ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
        if (more <= 1) {
          delete el.dataset[key];
          return;
        }
        const at = axis === 'y' ? el.scrollTop : el.scrollLeft;
        const start = at > 1;
        const end = at < more - 1;
        el.dataset[key] = start && end ? 'both' : start ? 'start' : end ? 'end' : '';
      };
      mark();
      el.addEventListener('scroll', mark, { passive: true });
      // The box and each child: a chip changes width as the font loads or its words change, while the box's own
      // size stays the same, so the box alone is not enough to watch.
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
    },
    [axis],
  );
}
