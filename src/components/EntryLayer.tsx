import { useState } from 'react';
import { entryFieldsFor, isManualEntry, ownEntryFacts, removeEntry, updateEntry, updateManualEntry, type Entry, type EntryEdit } from '../data';
import { METROS } from '../config/metros';
import { getHomeId } from '../lib/homeCity';
import { FactList } from './FactList';

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
export function EntryLayer({ entry }: { entry: Entry }) {
  const [editing, setEditing] = useState(false);
  if (editing) return <EntryForm entry={entry} onDone={() => setEditing(false)} />;

  const facts = ownEntryFacts(entry);
  const empty = !entry.review && facts.length === 0;
  return (
    <section className="card entry-layer" aria-label="Your entry">
      {entry.review && <p className="entry-review">{entry.review}</p>}
      <FactList facts={facts} />
      <button type="button" className="link-button entry-edit" onClick={() => setEditing(true)}>
        {empty ? 'Add a review, who you went with…' : 'Edit'}
      </button>
    </section>
  );
}

function EntryForm({ entry, onDone }: { entry: Entry; onDone: () => void }) {
  const fields = entryFieldsFor(entry.kind);
  const [draft, setDraft] = useState<EntryEdit>(() =>
    Object.fromEntries(fields.map((key) => [key, entry[key] ?? ''])) as EntryEdit,
  );
  const set = (key: keyof EntryEdit, value: string) => setDraft((d) => ({ ...d, [key]: value }));
  // A hand-typed entry's facts open too (3.14); a catalog entry's stay locked.
  const manual = isManualEntry(entry);
  const [facts, setFacts] = useState({ title: entry.title, date: entry.when.sort, venue: entry.venue ?? '', metroId: entry.metroId ?? '' });

  return (
    <form
      className="card entry-layer profile-form"
      aria-label="Edit your entry"
      onSubmit={(event) => {
        event.preventDefault();
        if (manual) updateManualEntry(entry.id, facts, getHomeId());
        updateEntry(entry.id, draft);
        onDone();
      }}
    >
      {manual && (
        <>
          <label className="field">
            <span className="field-label">What</span>
            <input className="account-input" value={facts.title} onChange={(e) => setFacts((f) => ({ ...f, title: e.target.value }))} maxLength={120} required />
          </label>
          <label className="field">
            <span className="field-label">When</span>
            <input className="account-input" type="date" value={facts.date} onChange={(e) => setFacts((f) => ({ ...f, date: e.target.value }))} required />
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
        <button type="submit" className="gold-button small">
          Save
        </button>
      </div>
    </form>
  );
}

/** "Remove from log?" with Keep and Remove. The one confirm before an entry leaves the log (C054). */
export function RemoveConfirm({ onKeep, onRemove, compact = false }: { onKeep: () => void; onRemove: () => void; compact?: boolean }) {
  return (
    <div className={`remove-confirm${compact ? ' compact' : ''}`} role="group" aria-label="Remove from log?">
      <span>{compact ? 'Remove?' : 'Remove from log?'}</span>
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
      onKeep={() => setAsking(false)}
      onRemove={() => {
        removeEntry(entry.id);
        onRemoved?.();
      }}
    />
  );
}
