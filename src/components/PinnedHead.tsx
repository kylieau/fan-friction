import { useEffect, useRef, useState, type ReactNode } from 'react';
import { BackLink } from './BackLink';

/**
 * The pinned head of every sub-page (build 7.1, M30; Kylie, Oct 23, 2026; mocks 18, 19): "‹ Back" and the title on one
 * 44pt row that stays at the top while the page scrolls. The page's own colour, no divider at rest; once scrolled, a
 * thin divider and a soft shadow. Left-aligned. On a page that scrolls itself (`.page`) the head watches that scroll;
 * a page with its own inner scroller (Your Stubs) tells it with `scrolled`.
 */
export function PinnedHead({ back, title, actions, scrolled, sub }: { back: { to: string; label: string }; title: ReactNode; /** Buttons at the right of the row (filter, search). */ actions?: ReactNode; scrolled?: boolean; /** One quiet line under the row, scrolling away with the page. */ sub?: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [auto, setAuto] = useState(false);
  useEffect(() => {
    if (scrolled !== undefined) return;
    const page = root.current?.closest('.page');
    if (!page) return;
    const update = () => setAuto(page.scrollTop > 2);
    update();
    page.addEventListener('scroll', update, { passive: true });
    return () => page.removeEventListener('scroll', update);
  }, [scrolled]);
  const on = scrolled ?? auto;
  return (
    <>
      <div ref={root} className={`pinned-head${on ? ' is-scrolled' : ''}`}>
        <BackLink to={back.to} label={back.label} className="back-link pinned-back" />
        <h1 className="page-title pinned-title">{title}</h1>
        {actions && <span className="header-actions">{actions}</span>}
      </div>
      {sub}
    </>
  );
}
