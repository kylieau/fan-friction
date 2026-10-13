import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { TagChip } from './TagChip';
import type { ReactNode } from 'react';
import { ACTIVITY_WORDS, activityOrder, placeClause, type ActivityGroups, type ActivityKind } from '../lib/activity';
import { BookmarkIcon, LockMark, PeopleIcon, TicketIcon, TvIcon } from './Icons';

/** The icon for a kind (build notes 3, 4.4): a ticket for attending, a TV for watching, a bookmark for interested. */
export function ActivityIcon({ kind }: { kind: ActivityKind }) {
  if (kind === 'watching' || kind === 'watched') return <TvIcon />;
  if (kind === 'interested') return <BookmarkIcon size={15} />;
  return <TicketIcon size={16} />;
}

/**
 * Grouped lists (Kylie, Oct 11; build notes 3, 8.1 items 11, 12 and 25): "Attending · Sam, Priya",
 * "Watching · Jo at Tom's Bar", "Interested · Lee"; after the date "Attended · Sam", "Watched · Jo".
 * A place shows only on a Friends watch. Nothing when nobody answered.
 */
export function ActivityLines({ groups }: { groups: ActivityGroups }) {
  const kinds = activityOrder(groups);
  if (kinds.length === 0) return null;
  return (
    <ul className="activity-lines">
      {kinds.map((kind) => (
        <li key={kind} className="activity-line">
          <span className="activity-word">
            <ActivityIcon kind={kind} />
            {ACTIVITY_WORDS[kind]}
          </span>
          <span className="activity-names">{groups[kind]!.map((p) => `${p.name}${kind === 'watching' || kind === 'watched' ? placeClause(p.place) : ''}`).join(', ')}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Your own answer as one line (build notes 3, 4.4 and 4.7): "[ticket] Attending", "[TV] Watching · [lock] Private",
 * "[TV] Watched · [people] Friends · Home". A private watch never names its place (8.1, item 14).
 */
export function StatusLine({
  kind,
  share,
  place,
  crowd,
  tags,
  tagsShown = 2,
  onTag,
}: {
  kind: ActivityKind;
  share?: 'private' | 'friends';
  place?: string;
  crowd?: ReactNode;
  /** Your own tags (build notes 4, T05): the first few as luggage chips, then "+N". Not on Interested. */
  tags?: string[];
  tagsShown?: number;
  /** Tapping a tag opens its page. */
  onTag?: (tag: string) => void;
}) {
  const watch = kind === 'watching' || kind === 'watched';
  return (
    <span className={`status-line status-${kind}`}>
      <ActivityIcon kind={kind} />
      {ACTIVITY_WORDS[kind]}
      {watch && share === 'private' && (
        <>
          {' · '}
          <LockMark size={13} /> Private
        </>
      )}
      {watch && share === 'friends' && (
        <>
          {' · '}
          <PeopleIcon size={14} /> Friends
          {place ? ` · ${place}` : ''}
        </>
      )}
      {crowd && !watch && <> · {crowd}</>}
      {tags && tags.length > 0 && kind !== 'interested' && (
        <>
          {tagsShown >= 99 ? (
            <span className="status-tags">
              {tags.map((tag) => (
                <TagChip key={tag} tag={tag} size="row" onClick={onTag ? () => onTag(tag) : undefined} />
              ))}
            </span>
          ) : (
            <RowTags tags={tags} max={tagsShown} onTag={onTag} />
          )}
        </>
      )}
    </span>
  );
}

/**
 * A row's tags (build notes 4, T05): the first two as luggage chips and "+N" for the rest, one line, never
 * growing the row. The chips are measured at their natural width; those that do not fit in what the words
 * leave are counted into the "+N" instead of being squeezed or cut.
 */
function RowTags({ tags, max, onTag }: { tags: string[]; max: number; onTag?: (tag: string) => void }) {
  const box = useRef<HTMLSpanElement>(null);
  const probe = useRef<HTMLSpanElement>(null);
  const [fit, setFit] = useState(Math.min(tags.length, max));
  /** When not even one whole tag fits, the first is shortened to this many px with an ellipsis. */
  const [cap, setCap] = useState<number | null>(null);
  const key = tags.join('|');
  useLayoutEffect(() => {
    const el = box.current;
    const ruler = probe.current;
    if (!el || !ruler) return;
    const measure = () => {
      const room = el.clientWidth;
      const widths = [...ruler.querySelectorAll<HTMLElement>('.tag-chip')].map((chip) => chip.offsetWidth);
      const MORE = 30;
      const GAP = 4;
      let used = 0;
      let n = 0;
      for (let i = 0; i < Math.min(widths.length, max); i++) {
        const next = used + widths[i] + (i > 0 ? GAP : 0);
        const reserve = i < widths.length - 1 ? MORE + GAP : 0;
        if (next + reserve > room) break;
        used = next;
        n += 1;
      }
      if (n === 0 && widths.length > 0 && room - MORE - GAP >= 44) {
        setFit(1);
        setCap(room - MORE - GAP);
      } else {
        setFit(n);
        setCap(null);
      }
    };
    measure();
    const watch = new ResizeObserver(measure);
    watch.observe(el);
    return () => watch.disconnect();
  }, [key, max]);
  const hidden = tags.length - fit;
  return (
    <span className={`status-tags${cap !== null ? ' is-capped' : ''}`} ref={box} style={cap !== null ? ({ '--cap': `${cap}px` } as CSSProperties) : undefined}>
      <span className="status-tags-ruler" ref={probe} aria-hidden>
        {tags.slice(0, max).map((tag) => (
          <TagChip key={tag} tag={tag} size="row" />
        ))}
      </span>
      {tags.slice(0, fit).map((tag) => (
        <TagChip key={tag} tag={tag} size="row" onClick={onTag ? () => onTag(tag) : undefined} />
      ))}
      {hidden > 0 && <span className="status-tags-more">+{hidden}</span>}
    </span>
  );
}
