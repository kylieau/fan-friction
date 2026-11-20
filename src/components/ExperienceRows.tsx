import { useState } from 'react';
import { setPlanReview, updateEntry, type Entry, type Plan } from '../data';

/**
 * Your Notes (build 7.2, R2a follow-up; Kylie, Nov 5: "combine the Review and With into a single ... umbrella", the name
 * left to the builder): the Stub it sheet's own rows for who you went with and your review, under one label, in the
 * Seat and Cost row shape, so "Edit stub" on the ticket is the one place to edit everything. On a stub (attended or
 * watched) both rows; on an Attending or Watching plan the Review row alone (Kylie, Nov 19, 2026: a review as soon as
 * she stubs it, or once the night has started), which carries into the stub when the date passes. With stays on the
 * stub: its private row is keyed to entries only, and a plan's data reaches approved followers. The review follows
 * the stub's (or plan's) level as before.
 */
export function ExperienceRows({ entry }: { entry: Entry }) {
  return <NotesRows fields={['with', 'review']} values={{ with: entry.with, review: entry.review }} onSave={(field, text) => updateEntry(entry.id, { [field]: text })} />;
}

/** The plan's Review row under Your Notes (mock `notes-and-record/01`, approved Nov 19, 2026). */
export function PlanNotesRows({ plan }: { plan: Plan }) {
  return <NotesRows fields={['review']} values={{ review: plan.review }} onSave={(_field, text) => setPlanReview(plan.id, text)} />;
}

type Field = 'with' | 'review';

function NotesRows({ fields, values, onSave }: { fields: readonly Field[]; values: Partial<Record<Field, string | undefined>>; onSave: (field: Field, text: string) => void }) {
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
              <input className="account-input" type="text" value={draft} placeholder="Who you went with" autoFocus maxLength={80} onChange={(ev) => setDraft(ev.target.value)} />
              {actions}
            </span>
          ) : values.with ? (
            <button type="button" className="stub-seats-line" onClick={() => open('with')}>
              {values.with}
            </button>
          ) : (
            <button type="button" className="stub-tags-add" onClick={() => open('with')}>
              + Add who you went with
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
