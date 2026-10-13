import { useEffect, useState } from 'react';
import { SEAT_LIMITS, normalizeSeats, seatsLine, type Seats } from '../data';

/**
 * Seats on an Attended stub (build notes 4; Kylie, Oct 13: "it has to be incredibly simple"): one row of
 * three optional boxes, Section, Row and Seat, free text as typed. Section takes whatever names the place:
 * "112", "Lawn", "Floor", "GA", "Suite 42". Saves as you leave a box; no Done of its own.
 */
export function SeatsRow({ seats, onChange }: { seats: Seats | undefined; onChange: (next: Seats | undefined) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Seats>(normalizeSeats(seats) ?? {});
  useEffect(() => {
    if (!open) setDraft(normalizeSeats(seats) ?? {});
  }, [seats, open]);

  const line = seatsLine(seats);
  if (!open && !line) {
    return (
      <div className="stub-seats-row" role="group" aria-label="Seats">
        <span className="stub-tags-label">Seat</span>
        <button type="button" className="stub-tags-add" onClick={() => setOpen(true)}>
          + Add seat
        </button>
      </div>
    );
  }
  if (!open) {
    return (
      <div className="stub-seats-row" role="group" aria-label="Seats">
        <span className="stub-tags-label">Seat</span>
        <button type="button" className="stub-seats-line" onClick={() => setOpen(true)}>
          {line}
        </button>
      </div>
    );
  }

  const box = (key: keyof Seats, label: string, placeholder: string, caps = false) => (
    <label className="seat-field">
      <span className="seat-field-label">{label}</span>
      <input
        className="account-input"
        value={draft[key] ?? ''}
        placeholder={placeholder}
        maxLength={SEAT_LIMITS[key]}
        autoCapitalize={caps ? 'characters' : 'sentences'}
        autoComplete="off"
        autoFocus={key === 'section'}
        onChange={(ev) => setDraft((d) => ({ ...d, [key]: ev.target.value }))}
        onBlur={() => onChange(normalizeSeats(draft))}
        onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()}
      />
    </label>
  );

  return (
    <div className="stub-seats-editor" role="group" aria-label="Seat">
      <div className="seat-fields">
        {box('section', 'Section', '112 or Lawn')}
        {box('row', 'Row', '8', true)}
        {box('seat', 'Seat', '4', true)}
      </div>
    </div>
  );
}
