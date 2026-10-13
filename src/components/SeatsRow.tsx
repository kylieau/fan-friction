import { useEffect, useState } from 'react';
import { SEAT_LIMITS, normalizeSeats, seatsLine, type Seats } from '../data';

/** Quick fills for Area; the field stays free text (research: seat-fields-answer-claude). */
const AREA_CHIPS = ['Floor', 'Pit', 'Lawn', 'Standing room', 'Suite', 'Box'];

/**
 * Seats on an Attended stub (build notes 4; UX consulted with Opus, Oct 13; field set from the seat-fields
 * research, Oct 13). A quiet "+ Add seats" until there are some, then one line you tap to edit. The
 * editor is inline and every part is optional free text, all always visible: a "No assigned seat" toggle
 * (a lawn, standing room, GA), the Area (Floor, Pit, Lawn, Suite... or your own words), Section or
 * block, Row, Seat, and Anything else (a gate, an aisle, a table). Saves as you leave a field.
 */
export function SeatsRow({ seats, onChange }: { seats: Seats | undefined; onChange: (next: Seats | undefined) => void }) {
  const [open, setOpen] = useState(false);
  // A seat saved before the research ("GA" in Area) opens as the toggle.
  const [draft, setDraft] = useState<Seats>(normalizeSeats(seats) ?? {});
  useEffect(() => {
    if (!open) setDraft(normalizeSeats(seats) ?? {});
  }, [seats, open]);

  const save = (next: Seats) => onChange(normalizeSeats(next));
  const line = seatsLine(seats);

  if (!open) {
    return (
      <div className="stub-seats-row" role="group" aria-label="Seats">
        <span className="stub-tags-label">Seats</span>
        {line || seats?.details ? (
          <button type="button" className="stub-seats-line" onClick={() => setOpen(true)}>
            {line || seats?.details}
          </button>
        ) : (
          <button type="button" className="stub-tags-add" onClick={() => setOpen(true)}>
            + Add seats
          </button>
        )}
      </div>
    );
  }

  const text = (key: 'area' | 'section' | 'row' | 'seat' | 'details', label: string, opts: { caps?: boolean } = {}) => (
    <label className={`seat-field seat-field-${key}`}>
      <span className="seat-field-label">{label}</span>
      <input
        className="account-input"
        value={draft[key] ?? ''}
        maxLength={SEAT_LIMITS[key]}
        autoCapitalize={opts.caps ? 'characters' : 'sentences'}
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
      <div className="filter-row" role="group" aria-label="Seat type">
        <button
          type="button"
          className="filter-chip"
          aria-pressed={draft.noSeat === true}
          onClick={() => {
            const next = { ...draft, noSeat: draft.noSeat ? undefined : true };
            setDraft(next);
            save(next);
          }}
        >
          No assigned seat
        </button>
      </div>
      {text('area', 'Area')}
      <div className="filter-row" role="group" aria-label="Area suggestions">
        {AREA_CHIPS.map((chip) => (
          <button
            key={chip}
            type="button"
            className="filter-chip"
            aria-pressed={(draft.area ?? '').toLowerCase() === chip.toLowerCase()}
            onClick={() => {
              const next = { ...draft, area: (draft.area ?? '').toLowerCase() === chip.toLowerCase() ? undefined : chip };
              setDraft(next);
              save(next);
            }}
          >
            {chip}
          </button>
        ))}
      </div>
      <div className="seat-fields">
        {text('section', 'Section or block')}
        {text('row', 'Row', { caps: true })}
        {text('seat', 'Seat', { caps: true })}
      </div>
      {text('details', 'Anything else')}
    </div>
  );
}
