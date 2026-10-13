import { useEffect, useState } from 'react';
import { SEAT_LIMITS, SEAT_SPOTS, normalizeSeats, seatsLine, type SeatSpot, type Seats } from '../data';

/**
 * Seats on an Attended stub (build notes 4; Kylie, Oct 13: "incredibly simple", then "GA should have its
 * own dropdown", mock approved). One "Where" dropdown first: Seat, or a place with no seat (GA, Floor, Pit,
 * Lawn, Standing room), which is one tap and done. Seat shows three optional free-text boxes; a reserved
 * lawn with a section, a GA ticket with rows or "Suite 42" go there. Saves as you change or leave a field.
 */
export function SeatsRow({ seats, onChange }: { seats: Seats | undefined; onChange: (next: Seats | undefined) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Seats>(normalizeSeats(seats) ?? {});
  useEffect(() => {
    if (!open) setDraft(normalizeSeats(seats) ?? {});
  }, [seats, open]);

  const line = seatsLine(seats);
  if (!open) {
    return (
      <div className="stub-seats-row" role="group" aria-label="Seats">
        <span className="stub-tags-label">Seat</span>
        {line ? (
          <button type="button" className="stub-seats-line" onClick={() => setOpen(true)}>
            {line}
          </button>
        ) : (
          <button type="button" className="stub-tags-add" onClick={() => setOpen(true)}>
            + Add seat
          </button>
        )}
      </div>
    );
  }

  const save = (next: Seats) => onChange(normalizeSeats(next));
  const box = (key: 'section' | 'row' | 'seat', label: string, placeholder: string, caps = false) => (
    <label className="seat-field">
      <span className="seat-field-label">{label}</span>
      <input
        className="account-input"
        value={draft[key] ?? ''}
        placeholder={placeholder}
        maxLength={SEAT_LIMITS[key]}
        autoCapitalize={caps ? 'characters' : 'sentences'}
        autoComplete="off"
        onChange={(ev) => setDraft((d) => ({ ...d, [key]: ev.target.value }))}
        onBlur={() => save(draft)}
        onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()}
      />
    </label>
  );

  return (
    <div className="stub-seats-editor" role="group" aria-label="Seat">
      <label className="seat-field">
        <span className="seat-field-label">Where</span>
        <select
          className="account-input seat-where"
          value={draft.spot ?? 'seat'}
          onChange={(ev) => {
            const value = ev.target.value;
            // A place with no seat keeps only the place: row and seat are cleared, so nothing hidden is stored.
            const next: Seats = value === 'seat' ? { section: draft.section, row: draft.row, seat: draft.seat } : { spot: value as SeatSpot };
            setDraft(next);
            save(next);
          }}
        >
          <option value="seat">Seat</option>
          {SEAT_SPOTS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
      </label>
      {!draft.spot && (
        <div className="seat-fields">
          {box('section', 'Section', '112 or Suite 42')}
          {box('row', 'Row', '8', true)}
          {box('seat', 'Seat', '4', true)}
        </div>
      )}
    </div>
  );
}
