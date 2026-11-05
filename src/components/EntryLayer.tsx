import { useState, useSyncExternalStore } from 'react';
import {
  entryFieldsFor,
  getPersonalLog,
  isManualEntry,
  ownEntryFacts,
  removeEntry,
  setEntryVisibility,
  stubDefault,
  stubLevel,
  getAccount,
  subscribeAccount,
  setRowTags,
  setEntryCost,
  setEntrySeats,
  subscribePersonalLog,
  tagSummaries,
  todayIn,
  updateEntry,
  updateManualEntry,
  type Entry,
  type EntryEdit,
} from '../data';
import { DEFAULT_METRO, METROS } from '../config/metros';
import { getHomeId } from '../lib/homeCity';
import { FactList } from './FactList';
import { TagChip } from './TagChip';
import { TagsPanel } from './TagsPanel';
import { SeatsRow } from './SeatsRow';
import { CostRow } from './CostRow';
import { LevelPill } from './LevelPill';

const LABELS: Record<keyof EntryEdit, string> = {
  review: 'Review',
  with: 'With',
};

/** Fields only the owner ever sees. Marked so in the form, the same way the fact list marks them. */
const PRIVATE: (keyof EntryEdit)[] = ['with'];

/**
 * Your layer on a night you attended: the review, who you went with, and a
 * quiet Edit. Nothing here touches the read; the no-results rule holds
 * because the formula never looks at these fields.
 */
export function EntryLayer({ entry, showLevel = true }: { entry: Entry; /** Off on the event page, whose status line carries the pill. */ showLevel?: boolean }) {
  const account = useSyncExternalStore(subscribeAccount, getAccount, getAccount);
  const [editing, setEditing] = useState(false);
  const [tagging, setTagging] = useState(false);
  const log = useSyncExternalStore(subscribePersonalLog, getPersonalLog, getPersonalLog);
  if (editing) return <EntryForm entry={entry} onDone={() => setEditing(false)} />;
  if (tagging) {
    return (
      <section className="card entry-layer" aria-label="Your tags">
        <TagsPanel
          tags={entry.userTags ?? []}
          onChange={(next) => setRowTags('entry', entry.id, next)}
          onDone={() => setTagging(false)}
          context={{
            domain: entry.kind === 'game' ? 'sports' : entry.kind === 'show' || entry.kind === 'festival' ? 'concert' : 'other',
            sport: entry.kind === 'game' ? entry.sport.toLowerCase() : undefined,
            ahead: false,
          }}
          known={tagSummaries(log.added, log.plans)}
        />
      </section>
    );
  }

  const facts = ownEntryFacts(entry);
  const empty = !entry.review && facts.length === 0;
  return (
    <section className="card entry-layer" aria-label="Your entry">
      {entry.review && <p className="entry-review">{entry.review}</p>}
      <FactList facts={facts} />
      {/* A listed event edits its tags in the + Stub it sheet; a hand-added entry has no sheet, so its page carries the row. */}
      {isManualEntry(entry) && (
        <div className="stub-tags-row" role="group" aria-label="Tags">
          <span className="stub-tags-label">Tags</span>
          {(entry.userTags ?? []).map((tag) => (
            <TagChip
              key={tag}
              tag={tag}
              onRemove={() =>
                setRowTags(
                  'entry',
                  entry.id,
                  (entry.userTags ?? []).filter((t) => t !== tag),
                )
              }
            />
          ))}
          <button type="button" className="stub-tags-add" onClick={() => setTagging(true)}>
            + Add tag
          </button>
        </div>
      )}
      {isManualEntry(entry) && !entry.watched && entry.kind !== 'live-broadcast' && <SeatsRow seats={entry.seats} onChange={(next) => setEntrySeats(entry.id, next)} />}
      {/* A hand-typed stub's cost, so a cost carried over from its plan stays in view (build 7.1, item 6). */}
      {isManualEntry(entry) && <CostRow cost={entry.cost} watched={Boolean(entry.watched)} onChange={(next) => setEntryCost(entry.id, next)} />}
      <span className="entry-layer-actions">
        <button type="button" className="link-button entry-edit" onClick={() => setEditing(true)}>
          {empty ? 'Add a review, who you went with…' : 'Edit'}
        </button>
        {/* "Keep this one private" grew into the stub's level (build 5, stub privacy): Anyone / Friends / Private. */}
        {showLevel && account && <LevelPill down value={stubLevel(entry)} defaultLevel={stubDefault()} onChange={(next) => setEntryVisibility(entry.id, next)} />}
      </span>
    </section>
  );
}

function EntryForm({ entry, onDone }: { entry: Entry; onDone: () => void }) {
  const fields = entryFieldsFor(entry.kind);
  const [draft, setDraft] = useState<EntryEdit>(() => Object.fromEntries(fields.map((key) => [key, entry[key] ?? ''])) as EntryEdit);
  const set = (key: keyof EntryEdit, value: string) => setDraft((d) => ({ ...d, [key]: value }));
  // A hand-typed entry's facts open too (3.14); a catalog entry's stay locked.
  const manual = isManualEntry(entry);
  const [facts, setFacts] = useState({ title: entry.title, date: entry.when.sort, venue: entry.venue ?? '', metroId: entry.metroId ?? '' });
  // An entry is something that happened: a date ahead cannot be saved on it (R17). Plans are the other thing.
  const latest = todayIn(METROS[facts.metroId] ?? DEFAULT_METRO);
  const dateAhead = manual && facts.date > latest;

  return (
    <form
      className="card entry-layer profile-form"
      aria-label="Edit Stub"
      onSubmit={(event) => {
        event.preventDefault();
        if (dateAhead) return;
        if (manual) updateManualEntry(entry.id, facts, getHomeId());
        updateEntry(entry.id, draft);
        onDone();
      }}
    >
      <h2 className="entry-form-title">Edit Stub</h2>
      {manual && (
        <>
          <label className="field">
            <span className="field-label">What</span>
            <input
              className="account-input"
              value={facts.title}
              onChange={(e) => setFacts((f) => ({ ...f, title: e.target.value }))}
              maxLength={120}
              required
            />
          </label>
          <label className="field">
            <span className="field-label">When</span>
            <input
              className="account-input"
              type="date"
              value={facts.date}
              max={latest}
              onChange={(e) => setFacts((f) => ({ ...f, date: e.target.value }))}
              required
            />
            {dateAhead && <span className="field-error">A date ahead is a plan, not an entry.</span>}
          </label>
          <label className="field">
            <span className="field-label">City</span>
            <select className="account-input" value={facts.metroId} onChange={(e) => setFacts((f) => ({ ...f, metroId: e.target.value }))}>
              {Object.values(METROS).map((metro) => (
                <option key={metro.id} value={metro.id}>
                  {metro.name}
                </option>
              ))}
              <option value="">Somewhere else</option>
            </select>
          </label>
          <label className="field">
            <span className="field-label">Where</span>
            <input className="account-input" value={facts.venue} onChange={(e) => setFacts((f) => ({ ...f, venue: e.target.value }))} maxLength={80} />
          </label>
        </>
      )}
      {fields.map((key) => (
        <label className="field" key={key}>
          <span className="field-label">
            {LABELS[key]}
            {PRIVATE.includes(key) && <span className="field-private"> · only you</span>}
          </span>
          {key === 'with' ? (
            <input className="account-input" value={draft[key] ?? ''} onChange={(e) => set(key, e.target.value)} maxLength={200} autoComplete="off" />
          ) : (
            <textarea className="account-input entry-textarea" value={draft[key] ?? ''} onChange={(e) => set(key, e.target.value)} rows={4} maxLength={2000} />
          )}
        </label>
      ))}
      <div className="entry-form-actions">
        <button type="button" className="link-button" onClick={onDone}>
          Cancel
        </button>
        <button type="submit" className="gold-button small" disabled={dateAhead}>
          Save
        </button>
      </div>
    </form>
  );
}

/** "Remove from log?" with Keep and Remove. The one confirm before an entry leaves the log (C054). */
export function RemoveConfirm({
  onKeep,
  onRemove,
  compact = false,
  stamped = false,
}: {
  onKeep: () => void;
  onRemove: () => void;
  compact?: boolean;
  stamped?: boolean;
}) {
  // One line says the stamped read leaves with the entry (R16); a new mark later gets whatever reads then.
  return (
    <div className={`remove-confirm${compact ? ' compact' : ''}`} role="group" aria-label="Remove from log?">
      <span>{compact ? (stamped ? 'Remove, stamp too?' : 'Remove?') : stamped ? 'Remove from log? Its stamp goes too.' : 'Remove from log?'}</span>
      <button type="button" className="link-button" onClick={onKeep}>
        Keep
      </button>
      <button type="button" className="link-button remove-entry" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}

/** Small and plain, at the very bottom of the page. One confirm, inline. */
export function RemoveFromLog({ entry, onRemoved }: { entry: Entry; onRemoved?: () => void }) {
  const [asking, setAsking] = useState(false);
  if (!asking) {
    return (
      <button type="button" className="link-button remove-entry" onClick={() => setAsking(true)}>
        Remove from log
      </button>
    );
  }
  return (
    <RemoveConfirm
      stamped={Boolean(entry.stamp)}
      onKeep={() => setAsking(false)}
      onRemove={() => {
        removeEntry(entry.id);
        onRemoved?.();
      }}
    />
  );
}
