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
}: {
  kind: ActivityKind;
  share?: 'private' | 'friends';
  place?: string;
  crowd?: ReactNode;
  /** Your own tags (build notes 4, T05): the first few as luggage chips, then "+N". Not on Interested. */
  tags?: string[];
  tagsShown?: number;
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
        <span className="status-tags">
          {tags.slice(0, tagsShown).map((tag) => (
            <TagChip key={tag} tag={tag} size="row" />
          ))}
          {tags.length > tagsShown && <span className="status-tags-more">+{tags.length - tagsShown}</span>}
        </span>
      )}
    </span>
  );
}
