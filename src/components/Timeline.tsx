import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { ListBand } from './ListBand';

/** One row on a timeline: the month (or year) band it falls under, and what to draw. */
export interface TimelineItem {
  key: string;
  group: string;
  node: ReactNode;
}

/**
 * One line of time, the Explore List's way (Kylie, Oct 15 and Oct 17): the tab opens with its own header at the
 * top and today's band first in the list; the past sits above and is reached only by scrolling up, the future runs
 * down from the band. Month bands only. The list is its own scroller under the page header, so the header never
 * scrolls away on open; a Today pill brings you back when today is off screen (↓ from the past, ↑ from the future).
 * Items come in order, oldest first.
 */
export function Timeline({
  past,
  future,
  todayLabel,
  todayGroup,
  emptyFuture,
  emptyAll,
  label,
  onScrolled,
}: {
  past: readonly TimelineItem[];
  future: readonly TimelineItem[];
  /** The today band's words, "Today · Fri, Oct 16". */
  todayLabel: string;
  /** The band today falls in ("October 2026"): it is never repeated right under the today band. */
  todayGroup: string;
  /** One line under the today band when nothing is ahead. */
  emptyFuture: ReactNode;
  /** What shows under the band when there is nothing on either side. */
  emptyAll: ReactNode;
  label: string;
  /** Told when the list has scrolled away from its top (the floating button shrinks). */
  onScrolled?: (scrolled: boolean) => void;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const todayLine = useRef<HTMLDivElement>(null);
  const placed = useRef(false);
  const [pill, setPill] = useState<'down' | 'up' | null>(null);
  // Room under the future so the today band can always reach the top of the list, however little is ahead.
  const [pad, setPad] = useState(0);

  // Open on today, once the rows are there: the band sits at the top of the list (the Explore List's opening).
  useLayoutEffect(() => {
    const el = scroller.current;
    const line = todayLine.current;
    if (placed.current || !el || !line) return;
    if (past.length === 0 && future.length === 0) return;
    const need = el.clientHeight - (el.scrollHeight - pad - line.offsetTop);
    if (need > pad) {
      setPad(need);
      return;
    }
    placed.current = true;
    el.scrollTop = line.offsetTop;
  }, [past.length, future.length, pad]);

  const update = () => {
    const el = scroller.current;
    const line = todayLine.current;
    if (!el || !line) return;
    onScrolled?.(el.scrollTop > 40);
    const view = el.getBoundingClientRect();
    const r = line.getBoundingClientRect();
    setPill(r.bottom < view.top + 4 ? 'up' : r.top > view.bottom - 4 ? 'down' : null);
  };

  const toToday = () => {
    const el = scroller.current;
    const line = todayLine.current;
    if (!el || !line) return;
    el.scrollTo({ top: line.offsetTop, behavior: 'smooth' });
  };

  const pastGroups = groupItems(past);
  const futureGroups = groupItems(future);
  const lastPast = pastGroups[pastGroups.length - 1]?.[0];
  const nothing = past.length === 0 && future.length === 0;
  return (
    <div className="timeline-body">
      {pill && (
        <button type="button" className={`today-pill is-${pill}`} onClick={toToday}>
          {pill === 'down' ? '↓' : '↑'} Today
        </button>
      )}
      <div ref={scroller} className="timeline-scroll" aria-label={label} onScroll={update}>
        {pastGroups.length > 0 && <div className="timeline-earlier">Earlier</div>}
        {pastGroups.map(([group, items]) => (
          <section key={`past-${group}`} className="timeline-group" aria-label={group}>
            <ListBand label={group} />
            <ul className="log-list">
              {items.map((item) => (
                <li key={item.key}>{item.node}</li>
              ))}
            </ul>
          </section>
        ))}
        <div ref={todayLine} className="today-line">
          <ListBand label={todayLabel} />
        </div>
        {nothing ? (
          emptyAll
        ) : futureGroups.length === 0 ? (
          emptyFuture
        ) : (
          futureGroups.map(([group, items], i) => (
            <section key={`future-${group}`} className="timeline-group" aria-label={group}>
              {!(i === 0 && (group === lastPast || group === todayGroup)) && <ListBand label={group} />}
              <ul className="log-list">
                {items.map((item) => (
                  <li key={item.key}>{item.node}</li>
                ))}
              </ul>
            </section>
          ))
        )}
        {pad > 0 && <div className="timeline-pad" style={{ minHeight: pad }} aria-hidden />}
      </div>
    </div>
  );
}

/** Items in the order given, split into their bands. */
function groupItems(items: readonly TimelineItem[]): [string, TimelineItem[]][] {
  const groups: [string, TimelineItem[]][] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last[0] === item.group) last[1].push(item);
    else groups.push([item.group, [item]]);
  }
  return groups;
}
