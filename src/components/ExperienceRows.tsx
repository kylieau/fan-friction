import { useState } from 'react';
import { setEntryAgain, setPlanNote, updateEntry, type Entry, type Plan } from '../data';

/**
 * Your Notes (build 7.2, R2a follow-up; Kylie, Nov 5: "combine the Review and With into a single ... umbrella", the name
 * left to the builder): the Stub it sheet's own rows for who you went with and your review, under one label, in the
 * Seat and Cost row shape, so "Edit stub" on the ticket is the one place to edit everything. On a stub (attended or
 * watched) and, since Nov 19, 2026 (Kylie: a review as soon as she stubs it, or once the night has started; mock
 * notes-and-record/01), on an Attending or Watching plan too, both rows carrying into the stub when the date passes.
 * A plan is hers alone (the table is owner-only; the cards followers see carry neither); on the stub, With stays in
 * the private pair and the review follows the stub's level as before.
 */
export function ExperienceRows({ entry }: { entry: Entry }) {
  return (
    <>
      <NotesRows fields={['with', 'review']} values={{ with: entry.with, review: entry.review }} onSave={(field, text) => updateEntry(entry.id, { [field]: text })} />
      <AgainRow entry={entry} />
    </>
  );
}

/**
 * "Again?" (build 7.3, D10; board `docs/build-7-3/mockups/round1/02`, approved Nov 23, 2026): one row under Your Notes on
 * a stub, Yes and No, nothing picked until she taps; tapping the picked one again clears it.
 */
function AgainRow({ entry }: { entry: Entry }) {
  const pick = (value: 'yes' | 'no') => setEntryAgain(entry.id, entry.again === value ? undefined : value);
  return (
    <div className="stub-seats-row stub-again-row" role="group" aria-label="Would go again">
      <span className="stub-tags-label">Again?</span>
      <span className="stub-again-choices">
        <button type="button" className="filter-chip" aria-pressed={entry.again === 'yes'} onClick={() => pick('yes')}>
          Yes
        </button>
        <button type="button" className="filter-chip" aria-pressed={entry.again === 'no'} onClick={() => pick('no')}>
          No
        </button>
      </span>
    </div>
  );
}

/** The plan's rows under Your Notes (mock `notes-and-record/01`, approved Nov 19, 2026). */
export function PlanNotesRows({ plan }: { plan: Plan }) {
  return <NotesRows fields={['with', 'review']} values={{ with: plan.with, review: plan.review }} onSave={(field, text) => setPlanNote(plan.id, field, text)} ahead />;
}

type Field = 'with' | 'review';

function NotesRows({ fields, values, onSave, ahead = false }: { fields: readonly Field[]; values: Partial<Record<Field, string | undefined>>; onSave: (field: Field, text: string) => void; /** A plan: the night is ahead, so "going with", not "went with" (Codex, group 19 review). */ ahead?: boolean }) {
  const withWords = ahead ? "who you're going with" : 'who you went with';
  const [editing, setEditing] = useState<Field | null>(null);
  const [draft, setDraft] = useState('');
  const open = (field: Field) => {
    setDraft(values[field] ?? '');
    setEditing(field);
  };
  const save = () => {
    if (editing) onSave(editing, draft);
    setEditing(null);
  };
  const actions = (
    <span className="entry-form-actions">
      <button type="button" className="link-button" onClick={() => setEditing(null)}>
        Cancel
      </button>
      <button type="button" className="link-button" onClick={save}>
        Save
      </button>
    </span>
  );
  return (
    <div className="stub-experience" role="group" aria-label="Your Notes">
      <span className="stub-experience-label">Your Notes</span>
      {fields.includes('with') && (
        <div className="stub-seats-row" role="group" aria-label="With">
          <span className="stub-tags-label">With</span>
          {editing === 'with' ? (
            <span className="stub-experience-editor">
              <input className="account-input" type="text" value={draft} placeholder={`${withWords[0].toUpperCase()}${withWords.slice(1)}`} autoFocus maxLength={80} onChange={(ev) => setDraft(ev.target.value)} />
              {actions}
            </span>
          ) : values.with ? (
            <button type="button" className="stub-seats-line" onClick={() => open('with')}>
              {values.with}
            </button>
          ) : (
            <button type="button" className="stub-tags-add" onClick={() => open('with')}>
              + Add {withWords}
            </button>
          )}
        </div>
      )}
      {fields.includes('review') && (
        <div className="stub-seats-row stub-review-row" role="group" aria-label="Review">
          <span className="stub-tags-label">Review</span>
          {editing === 'review' ? (
            <span className="stub-experience-editor">
              <textarea className="account-input entry-textarea" rows={3} value={draft} placeholder="A line or two about it" autoFocus onChange={(ev) => setDraft(ev.target.value)} />
              {actions}
            </span>
          ) : values.review ? (
            <button type="button" className="stub-seats-line stub-review-line" onClick={() => open('review')}>
              {values.review}
            </button>
          ) : (
            <button type="button" className="stub-tags-add" onClick={() => open('review')}>
              + Add a review
            </button>
          )}
        </div>
      )}
    </div>
  );
}
