import type { Cost, CostKind, CostLine } from './types';

// A stub's cost (build 7, §3.5; Kylie, Oct 22, 2026): what you paid, in lines by category, or Free. Three states:
// not entered (no `cost`), Free ($0) and paid (lines). Blank never counts as $0, so nothing here ever writes 0 for a
// missing cost; a reader that wants a total asks `costTotal`, which is null when the cost was never entered.

/** The chips in the order they show (Kylie, Oct 22: parking first "especially for LA", then food, then merch). */
export const ATTENDED_COST_KINDS: readonly CostKind[] = ['ticket', 'parking', 'food', 'merch', 'other'];
/** Watched: no Ticket preset, no Merch, no Parking. */
export const WATCHED_COST_KINDS: readonly CostKind[] = ['stream', 'food', 'other'];

export const COST_LABELS: Record<CostKind, string> = {
  ticket: 'Ticket',
  parking: 'Parking & Transit',
  food: 'Food & Drink',
  merch: 'Merch',
  stream: 'Stream / PPV',
  other: 'Other',
};

export const COST_MAX = 100000;

/** The currency a typed amount is in: the device's region, USD when it says nothing (Lean; multi-currency is backlog). */
export function deviceCurrency(): string {
  const region = (typeof navigator === 'undefined' ? '' : navigator.language).split('-')[1]?.toUpperCase();
  const byRegion: Record<string, string> = { US: 'USD', CA: 'CAD', GB: 'GBP', AU: 'AUD', MX: 'MXN', JP: 'JPY', IE: 'EUR', DE: 'EUR', FR: 'EUR', ES: 'EUR', IT: 'EUR', NL: 'EUR' };
  return (region && byRegion[region]) || 'USD';
}

function cleanAmount(value: unknown): number | null {
  // A string is accepted only when it is a plain number ("68", "12.50"); blank or words are "not entered", never 0.
  const n = typeof value === 'number' ? value : typeof value === 'string' && /^\d+(\.\d+)?$/.test(value.trim()) ? Number(value.trim()) : NaN;
  if (!Number.isFinite(n) || n < 0) return null;
  return Math.min(COST_MAX, Math.round(n * 100) / 100);
}

const KINDS = new Set<string>(Object.keys(COST_LABELS));

/**
 * A cost as it is stored: Free keeps no lines; a paid cost keeps the lines with a real amount (0 allowed on a line,
 * so "parking was free" can sit beside a paid ticket); a quantity only when it is 2 or more. Undefined when there is
 * nothing to keep, which is "not entered".
 */
export function normalizeCost(raw: Cost | undefined): Cost | undefined {
  if (!raw) return undefined;
  if (raw.free) return { free: true, lines: [], ...(raw.currency ? { currency: raw.currency } : {}) };
  const lines: CostLine[] = [];
  // Saved data is not trusted on the way in (Codex, stage 1): the list must be a list and the kind one of ours.
  for (const line of Array.isArray(raw.lines) ? raw.lines : []) {
    if (!line || typeof line !== 'object' || !KINDS.has(String(line.kind))) continue;
    const amount = cleanAmount(line.amount);
    if (amount === null) continue;
    // A quantity belongs to the ticket line only (2 × $68); nothing else is bought by the seat.
    const qty = line.kind === 'ticket' && typeof line.qty === 'number' && Number.isInteger(line.qty) && line.qty >= 2 ? Math.min(99, line.qty) : undefined;
    lines.push({ kind: line.kind, amount, ...(qty ? { qty } : {}) });
  }
  if (lines.length === 0) return undefined;
  return { lines, ...(raw.currency ? { currency: raw.currency } : {}) };
}

/** What one line adds to the total: the amount times its quantity. */
export function lineTotal(line: CostLine): number {
  return Math.round(line.amount * (line.qty ?? 1) * 100) / 100;
}

/** The whole cost: 0 for Free, the lines' sum when paid, null when never entered. */
export function costTotal(cost: Cost | undefined): number | null {
  const c = normalizeCost(cost);
  if (!c) return null;
  if (c.free) return 0;
  return Math.round(c.lines.reduce((sum, line) => sum + lineTotal(line), 0) * 100) / 100;
}

/** "$68", "$1,240.50", in the cost's own currency. */
export function formatMoney(amount: number, currency = 'USD'): string {
  const whole = Number.isInteger(amount);
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency, minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 }).format(amount);
  } catch {
    return `$${whole ? amount : amount.toFixed(2)}`;
  }
}

/** "Free", "$68", or "$68 + 2 more" for the collapsed row. */
export function costLine(cost: Cost | undefined): string {
  const c = normalizeCost(cost);
  if (!c) return '';
  if (c.free) return 'Free';
  const total = costTotal(c) ?? 0;
  return c.lines.length === 1 ? formatMoney(total, c.currency) : `${formatMoney(total, c.currency)} · ${c.lines.length} lines`;
}

/** "Free" or the total alone ("$151"), for a status line; empty when never entered. */
export function costWords(cost: Cost | undefined): string {
  const c = normalizeCost(cost);
  if (!c) return '';
  return c.free ? 'Free' : formatMoney(costTotal(c) ?? 0, c.currency);
}

/** The currency's own sign ("$", "MX$", "£"), for the amount box, so the box and the total agree. */
export function currencySign(currency = 'USD'): string {
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency }).formatToParts(0).find((p) => p.type === 'currency')?.value ?? '$';
  } catch {
    return '$';
  }
}
