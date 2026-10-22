import { useEffect, useState } from 'react';
import {
  ATTENDED_COST_KINDS,
  COST_LABELS,
  COST_MAX,
  WATCHED_COST_KINDS,
  costLine,
  costTotal,
  currencySign,
  deviceCurrency,
  formatMoney,
  lineTotal,
  normalizeCost,
  type Cost,
  type CostKind,
} from '../data';

interface DraftLine {
  kind: CostKind;
  amount: string;
  qty: string;
}

interface Draft {
  free: boolean;
  lines: DraftLine[];
}

/**
 * Cost on a stub (build 7, §3.5; mocks 21–26; Kylie, Oct 22, 2026): a third optional row under Tags and Seat,
 * "+ Add cost", collapsed. Opened on an Attended stub it starts with one Ticket line and the cursor in its amount, so
 * a person who only logs a ticket price makes no extra taps; Watched opens with chips only. Chips add a line each
 * (Parking & Transit, Food & Drink, Merch, Other; Watched: Stream / PPV, Food & Drink, Other). The amount is "You
 * paid": what you typed, never divided and never taken from a live price. A quantity only when you bought more than
 * one. A plain Free chip, no reason (reasons are tags). Saves as you change or leave a field; a blank cost is "not
 * entered", never $0.
 */
export function CostRow({ cost, watched, onChange }: { cost: Cost | undefined; watched: boolean; onChange: (next: Cost | undefined) => void }) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<Draft>(() => toDraft(cost, watched, false));
  useEffect(() => {
    if (!open) setDraft(toDraft(cost, watched, false));
  }, [cost, watched, open]);

  const kinds = watched ? WATCHED_COST_KINDS : ATTENDED_COST_KINDS;
  const currency = cost?.currency ?? deviceCurrency();
  const line = costLine(cost);

  if (!open) {
    return (
      <div className="stub-seats-row stub-cost-row" role="group" aria-label="Cost">
        <span className="stub-tags-label">Cost</span>
        {line ? (
          <button type="button" className="stub-seats-line" onClick={() => setOpen(true)}>
            {line}
          </button>
        ) : (
          <button
            type="button"
            className="stub-tags-add"
            onClick={() => {
              setDraft(toDraft(cost, watched, true));
              setOpen(true);
            }}
          >
            + Add cost
          </button>
        )}
      </div>
    );
  }

  const save = (next: Draft) => {
    setDraft(next);
    onChange(fromDraft(next, currency));
  };
  const setLine = (i: number, patch: Partial<DraftLine>) => save({ free: false, lines: draft.lines.map((l, j) => (j === i ? { ...l, ...patch } : l)) });
  const removeLine = (i: number) => save({ ...draft, lines: draft.lines.filter((_, j) => j !== i) });
  const addLine = (kind: CostKind) => save({ free: false, lines: [...draft.lines, { kind, amount: '', qty: '' }] });
  const toggleFree = () => (draft.free ? save({ free: false, lines: [] }) : save({ free: true, lines: [] }));

  const saved = fromDraft(draft, currency);
  const total = costTotal(saved);
  const unused = kinds.filter((kind) => !draft.lines.some((l) => l.kind === kind));
  const showTotal = !draft.free && (draft.lines.length > 1 || draft.lines.some((l) => Number(l.qty) >= 2)) && total !== null && total > 0;

  return (
    <div className="stub-cost-editor" role="group" aria-label="Cost">
      <div className="cost-head">
        <span className="stub-tags-label">You paid</span>
        <span className="stub-where-optional">optional</span>
      </div>
      {draft.lines.map((l, i) => {
        const amount = Number(l.amount);
        const qty = Number(l.qty);
        return (
          <div key={`${l.kind}-${i}`} className="cost-line">
            <span className="cost-line-label">{COST_LABELS[l.kind]}</span>
            <label className="cost-amount">
              <span aria-hidden>{currencySign(currency)}</span>
              <input
                className="account-input"
                inputMode="decimal"
                value={l.amount}
                placeholder="0"
                autoFocus={i === draft.lines.length - 1 && l.amount === ''}
                aria-label={`${COST_LABELS[l.kind]} amount`}
                onChange={(ev) => setLine(i, { amount: ev.target.value.replace(/[^0-9.]/g, '').slice(0, 8) })}
                onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()}
              />
            </label>
            {l.kind === 'ticket' && (
              <label className="cost-qty">
                <span aria-hidden>×</span>
                <input
                  className="account-input"
                  inputMode="numeric"
                  value={l.qty}
                  placeholder="qty"
                  aria-label="How many tickets"
                  onChange={(ev) => setLine(i, { qty: ev.target.value.replace(/[^0-9]/g, '').slice(0, 2) })}
                  onKeyDown={(ev) => ev.key === 'Enter' && (ev.target as HTMLInputElement).blur()}
                />
              </label>
            )}
            {l.kind === 'ticket' && !watched && (
              <button type="button" className="filter-chip cost-free" aria-pressed={false} onClick={toggleFree}>
                Free
              </button>
            )}
            <button type="button" className="cost-line-remove" aria-label={`Remove ${COST_LABELS[l.kind]}`} onClick={() => removeLine(i)}>
              ×
            </button>
            {l.kind === 'ticket' && qty >= 2 && Number.isFinite(amount) && amount > 0 && (
              <span className="cost-line-sub">
                {qty} tickets · {formatMoney(lineTotal({ kind: 'ticket', amount, qty }), currency)}
              </span>
            )}
          </div>
        );
      })}
      <div className="filter-row cost-chips" role="group" aria-label="Add a cost line">
        {unused.map((kind) => (
          <button key={kind} type="button" className="filter-chip" onClick={() => addLine(kind)}>
            + {COST_LABELS[kind]}
          </button>
        ))}
        {(draft.free || draft.lines.length === 0) && (
          <button type="button" className="filter-chip cost-free" aria-pressed={draft.free} onClick={toggleFree}>
            Free
          </button>
        )}
      </div>
      {showTotal && (
        <div className="cost-total">
          <span>Total</span>
          <strong>{formatMoney(total, currency)}</strong>
        </div>
      )}
    </div>
  );
}

/** The editor's lines from a saved cost; opened fresh on Attended, one Ticket line is preset. */
function toDraft(cost: Cost | undefined, watched: boolean, opening: boolean): Draft {
  const clean = normalizeCost(cost);
  if (clean?.free) return { free: true, lines: [] };
  if (clean) return { free: false, lines: clean.lines.map((l) => ({ kind: l.kind, amount: String(l.amount), qty: l.qty ? String(l.qty) : '' })) };
  return { free: false, lines: opening && !watched ? [{ kind: 'ticket', amount: '', qty: '' }] : [] };
}

function fromDraft(draft: Draft, currency: string): Cost | undefined {
  if (draft.free) return { free: true, lines: [], currency };
  // A ticket typed as 0 with nothing else is Free (the chip's meaning), not a paid stub of $0.
  const typed = draft.lines.filter((l) => l.amount.trim() !== '');
  if (typed.length === 1 && typed[0].kind === 'ticket' && Number(typed[0].amount) === 0) return { free: true, lines: [], currency };
  return normalizeCost({
    currency,
    lines: draft.lines
      .filter((l) => l.amount.trim() !== '')
      .map((l) => ({ kind: l.kind, amount: Math.min(COST_MAX, Number(l.amount)), ...(Number(l.qty) >= 2 ? { qty: Number(l.qty) } : {}) })),
  });
}
