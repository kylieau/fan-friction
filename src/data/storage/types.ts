// The swappable save layer. Screens never talk to this file.
// The phone's local storage writes the whole log each time. A cloud store
// writes only what changed, so an older tab can never wipe a newer copy.

import type { Entry, PersonalLog, Plan } from '../types';

/** What one change to the log touched. Ids in `remove` are also in `log.removed`. */
export interface LogDiff {
  entries: { upsert: Entry[]; remove: string[] };
  plans: { upsert: Plan[]; remove: string[] };
  /** The You order, hidden seed ids, favorites or the removed-ids map changed. */
  settings: boolean;
  /** The log after the change, for a store that writes the whole thing. */
  log: PersonalLog;
}

export interface EntryStore {
  /** Read the saved log. The phone copy resolves immediately. A cloud store may wait. */
  load(): Promise<PersonalLog>;
  save(diff: LogDiff): Promise<void>;
}

export function emptyDiff(log: PersonalLog): LogDiff {
  return { entries: { upsert: [], remove: [] }, plans: { upsert: [], remove: [] }, settings: false, log };
}

/** True when the diff would write nothing. */
export function isEmptyDiff(diff: LogDiff): boolean {
  return (
    !diff.settings &&
    diff.entries.upsert.length === 0 &&
    diff.entries.remove.length === 0 &&
    diff.plans.upsert.length === 0 &&
    diff.plans.remove.length === 0
  );
}

/** Two diffs in order: a later copy of a row replaces an earlier one; a later remove wins over an earlier upsert. */
export function mergeDiffs(first: LogDiff, second: LogDiff): LogDiff {
  const rows = <T extends { id: string }>(a: { upsert: T[]; remove: string[] }, b: { upsert: T[]; remove: string[] }) => {
    const upsert = new Map(a.upsert.map((row) => [row.id, row]));
    for (const id of b.remove) upsert.delete(id);
    for (const row of b.upsert) upsert.set(row.id, row);
    const remove = new Set([...a.remove.filter((id) => !upsert.has(id)), ...b.remove]);
    for (const id of upsert.keys()) remove.delete(id);
    return { upsert: [...upsert.values()], remove: [...remove] };
  };
  return {
    entries: rows(first.entries, second.entries),
    plans: rows(first.plans, second.plans),
    settings: first.settings || second.settings,
    log: second.log,
  };
}
