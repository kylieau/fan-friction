import { eventColumns } from '../lib/eventColumns';
import type { CrowdEvent } from '../data';

/**
 * The friction pill for one listed event, when it has one: the word only. Events under
 * the friction floor, and calm ones, show nothing here. One place to draw it, so the
 * ladder of words and colors can change once (build notes 2: friction words).
 */
export function FrictionPill({ event, sameDate = [] }: { event: CrowdEvent; sameDate?: readonly CrowdEvent[] }) {
  const f = eventColumns(event, sameDate).friction;
  if (!f || !('pill' in f)) return null;
  return <span className={`chip chip-f ${f.level}`}>{f.pill}</span>;
}
