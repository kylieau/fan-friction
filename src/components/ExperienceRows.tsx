import { useState } from 'react';
import { updateEntry, type Entry } from '../data';

/**
 * Personal Experience (build 7.2, R2a follow-up; Kylie, Nov 5: "combine the Review and With into a single Personal
 * Experience umbrella"): the Stub it sheet's own rows for who you went with and your review, under one label, in the
 * Seat and Cost row shape, so "Edit stub" on the ticket is the one place to edit everything. Only on a stub
 * (attended or watched); a plan has neither yet. Both fields stay yours alone: With is never shared, and the review
 * follows the stub's level as before.
 */
export function ExperienceRows({ entry }: { entry: Entry }) {
  const [editing, setEditing] = useState<'with' | 'review' | null>(null);
  const [draft, setDraft] = useState('');
  const open = (field: 'with' | 'review') => {
    setDraft(entry[field] ?? '');
    setEditing(field);
  };
  const save = () => {
    if (editing) updateEntry(entry.id, { [editing]: draft });
    setEditing(null);
  };
  return (
    <div className="stub-experience" role="group" aria-label="Personal Experience">
      <span className="stub-experience-label">Personal Experience</span>
      <div className="stub-seats-row" role="group" aria-label="With">
        <span className="stub-tags-label">With</span>
        {editing === 'with' ? (
          <span className="stub-experience-editor">
            <input className="account-input" type="text" value={draft} placeholder="Who you went with" autoFocus maxLength={80} onChange={(ev) => setDraft(ev.target.value)} />
            <span className="entry-form-actions">
              <button type="button" className="link-button" onClick={() => setEditing(null)}>
                Cancel
              </button>
              <button type="button" className="link-button" onClick={save}>
                Save
              </button>
            </span>
          </span>
        ) : entry.with ? (
          <button type="button" className="stub-seats-line" onClick={() => open('with')}>
            {entry.with}
          </button>
        ) : (
          <button type="button" className="stub-tags-add" onClick={() => open('with')}>
            + Add who you went with
          </button>
        )}
      </div>
      <div className="stub-seats-row stub-review-row" role="group" aria-label="Review">
        <span className="stub-tags-label">Review</span>
        {editing === 'review' ? (
          <span className="stub-experience-editor">
            <textarea className="account-input entry-textarea" rows={3} value={draft} placeholder="A line or two about it" autoFocus onChange={(ev) => setDraft(ev.target.value)} />
            <span className="entry-form-actions">
              <button type="button" className="link-button" onClick={() => setEditing(null)}>
                Cancel
              </button>
              <button type="button" className="link-button" onClick={save}>
                Save
              </button>
            </span>
          </span>
        ) : entry.review ? (
          <button type="button" className="stub-seats-line stub-review-line" onClick={() => open('review')}>
            {entry.review}
          </button>
        ) : (
          <button type="button" className="stub-tags-add" onClick={() => open('review')}>
            + Add a review
          </button>
        )}
      </div>
    </div>
  );
}
