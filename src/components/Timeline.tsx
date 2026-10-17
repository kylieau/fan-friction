import { useEffect, useRef, type ReactNode } from 'react';
import { ListBand } from './ListBand';

/** One row on a timeline: its sort date, the month (or year) band it falls under, and what to draw. */
export interface TimelineItem {
  key: string;
  group: string;
  node: ReactNode;
}

/**
 * One line of time (build 6, items 6 and 7; Kylie, Oct 15: the Explore List's method). The past runs down to a
 * "today" line, then what's coming; month bands only, no day bands. It opens scrolled to the today line, and the
 * line always shows, with a one-line note on a side that has nothing. Items come in order, oldest first.
 */
export function Timeline({
  past,
  future,
  todayLabel,
  emptyPast,
  emptyFuture,
  label,
}: {
  past: readonly TimelineItem[];
  future: readonly TimelineItem[];
  /** The today line's words, "Today · Fri, Oct 16". */
  todayLabel: string;
  emptyPast: ReactNode;
  emptyFuture: ReactNode;
  label: string;
}) {
  const todayLine = useRef<HTMLDivElement>(null);
  const scrolled = useRef(false);
  // Open on today (once): the page scrolls so the line sits at the top, like the List's Today band.
  useEffect(() => {
    if (scrolled.current || past.length === 0) return;
    scrolled.current = true;
    todayLine.current?.scrollIntoView({ block: 'start' });
  }, [past.length]);

  const pastGroups = groupItems(past);
  const futureGroups = groupItems(future);
  // The month the today line sits in gets one band, above the line, never a second one under it.
  const lastPast = pastGroups[pastGroups.length - 1]?.[0];
  return (
    <div className="timeline" aria-label={label}>
      {pastGroups.length === 0 ? (
        emptyPast
      ) : (
        pastGroups.map(([group, items]) => (
          <section key={`past-${group}`} className="timeline-group" aria-label={group}>
            <ListBand label={group} />
            <ul className="log-list">
              {items.map((item) => (
                <li key={item.key}>{item.node}</li>
              ))}
            </ul>
          </section>
        ))
      )}
      <div ref={todayLine} className="today-line">
        <ListBand label={todayLabel} />
      </div>
      {futureGroups.length === 0 ? (
        emptyFuture
      ) : (
        futureGroups.map(([group, items], i) => (
          <section key={`future-${group}`} className="timeline-group" aria-label={group}>
            {!(i === 0 && group === lastPast) && <ListBand label={group} />}
            <ul className="log-list">
              {items.map((item) => (
                <li key={item.key}>{item.node}</li>
              ))}
            </ul>
          </section>
        ))
      )}
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
