import { useState } from 'react';
import { entryFieldsFor, ownEntryFacts, removeEntry, updateEntry, type Entry, type EntryEdit } from '../data';
import { FactList } from './FactList';

const LABELS: Record<keyof EntryEdit, string> = {
  review: 'Review',
  result: 'Outcome',
  starter: 'Starter',
  promo: 'Promo',
  notable: 'Notable',
  setlistUrl: 'Setlist',
  tv: 'TV',
  with: 'With',
  note: 'Note',
};

/** Fields only the owner ever sees. Marked so in the form, the same way the fact list marks them. */
const PRIVATE: (keyof EntryEdit)[] = ['with', 'note'];

/**
 * Your layer on a night you attended: the review, your facts, the private pair,
 * and a quiet Edit. Nothing here touches the read; the no-results rule holds
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
        {empty ? 'Add a review, the score, who you went with…' : 'Edit'}
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

  return (
    <form
      className="card entry-layer profile-form"
      aria-label="Edit your entry"
      onSubmit={(event) => {
        event.preventDefault();
        updateEntry(entry.id, draft);
        onDone();
      }}
    >
      {fields.map((key) => (
        <label className="field" key={key}>
          <span className="field-label">
            {LABELS[key]}
            {PRIVATE.includes(key) && <span className="field-private"> · only you</span>}
          </span>
          {key === 'review' || key === 'note' ? (
            <textarea
              className="account-input entry-textarea"
              value={draft[key] ?? ''}
              onChange={(e) => set(key, e.target.value)}
              rows={key === 'review' ? 4 : 2}
              maxLength={2000}
            />
          ) : (
            <input
              className="account-input"
              type={key === 'setlistUrl' ? 'url' : 'text'}
              inputMode={key === 'setlistUrl' ? 'url' : 'text'}
              value={draft[key] ?? ''}
              onChange={(e) => set(key, e.target.value)}
              maxLength={200}
              autoComplete="off"
            />
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
    <div className="remove-confirm" role="group" aria-label="Remove from log?">
      <span>Remove from log?</span>
      <button type="button" className="link-button" onClick={() => setAsking(false)}>
        Keep
      </button>
      <button
        type="button"
        className="link-button remove-entry"
        onClick={() => {
          removeEntry(entry.id);
          onRemoved?.();
        }}
      >
        Remove
      </button>
    </div>
  );
}
