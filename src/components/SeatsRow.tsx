import { useEffect, useState } from 'react';
import { SEAT_LIMITS, normalizeSeats, seatsLine, type Seats } from '../data';

const AREAS = ['GA', 'Floor', 'Pit'] as const;

/**
 * Seats on an Attended stub (build notes 4, "Stub tags: suggestions" 7; UX consulted with Opus, Oct 13).
 * A quiet "+ Add seats" until there are some; then one line you tap to edit. The editor is inline: one
 * of GA · Floor · Pit (tap again to clear) and three labelled fields, all optional, all always visible.
 * Saves as you leave a field; Done is never blocked.
 */
export function SeatsRow({ seats, onChange }: { seats: Seats | undefined; onChange: (next: Seats | undefined) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Seats>(seats ?? {});
  useEffect(() => {
    if (!open) setDraft(seats ?? {});
  }, [seats, open]);

  const save = (next: Seats) => onChange(normalizeSeats(next));
  const line = seatsLine(seats);

  if (!open) {
    return (
      <div className="stub-seats-row" role="group" aria-label="Seats">
        <span className="stub-tags-label">Seats</span>
        {line ? (
          <button type="button" className="stub-seats-line" onClick={() => setOpen(true)}>
            {line}
          </button>
        ) : (
          <button type="button" className="stub-tags-add" onClick={() => setOpen(true)}>
            + Add seats
          </button>
        )}
      </div>
    );
  }

  const field = (key: 'section' | 'row' | 'seat', label: string) => (
    <label className="seat-field">
      <span className="seat-field-label">{label}</span>
      <input
        className="account-input"
        value={draft[key] ?? ''}
        maxLength={SEAT_LIMITS[key]}
        autoCapitalize="characters"
        autoComplete="off"
        onChange={(ev) => setDraft((d) => ({ ...d, [key]: ev.target.value }))}
        onBlur={() => save(draft)}
        onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()}
      />
    </label>
  );

  return (
    <div className="stub-seats-editor" role="group" aria-label="Seats">
      <div className="stub-seats-head">
        <span className="stub-tags-label">Seats</span>
        <button type="button" className="link-button" onClick={() => setOpen(false)}>
          Done
        </button>
      </div>
      <div className="filter-row" role="group" aria-label="Area">
        {AREAS.map((area) => (
          <button
            key={area}
            type="button"
            className="filter-chip"
            aria-pressed={draft.area === area}
            onClick={() => {
              const next = { ...draft, area: draft.area === area ? undefined : area };
              setDraft(next);
              save(next);
            }}
          >
            {area}
          </button>
        ))}
      </div>
      <div className="seat-fields">
        {field('section', 'Section')}
        {field('row', 'Row')}
        {field('seat', 'Seat')}
      </div>
    </div>
  );
}
