// The ticket line (build notes 2, 8.1): a live price lookup through the app's own
// server function (api/ticket-price.ts), so the Ticketmaster key stays off the phone.
// Held for a few minutes in memory; never written to a log entry. Nothing here runs
// for a past or logged event: the screen asks only for an upcoming one.

export interface TicketPrice {
  url: string | null;
  min: number | null;
  currency: string | null;
  feesIncluded: boolean;
  /** Not on sale (offsale, cancelled, postponed): no line. */
  offsale: boolean;
  soldOut: boolean;
}

const HOLD_MS = 5 * 60 * 1000;
const held = new Map<string, { at: number; answer: TicketPrice | null }>();

/** The event's Ticketmaster page and lowest standard price, or null when there is no feed (a local build, no key, a bad answer). */
export async function ticketPrice(ticketmasterId: string): Promise<TicketPrice | null> {
  const hit = held.get(ticketmasterId);
  if (hit && Date.now() - hit.at < HOLD_MS) return hit.answer;
  let answer: TicketPrice | null = null;
  try {
    const r = await fetch(`/api/ticket-price?id=${encodeURIComponent(ticketmasterId)}`, { headers: { accept: 'application/json' } });
    if (r.ok && /json/i.test(r.headers.get('content-type') ?? '')) {
      const body = (await r.json()) as Partial<TicketPrice>;
      answer = {
        url: body.url ?? null,
        min: typeof body.min === 'number' ? body.min : null,
        currency: body.currency ?? null,
        feesIncluded: Boolean(body.feesIncluded),
        offsale: Boolean(body.offsale),
        soldOut: Boolean(body.soldOut),
      };
    }
  } catch {
    answer = null;
  }
  held.set(ticketmasterId, { at: Date.now(), answer });
  return answer;
}

/** "Prices from $48+fees", always with "+fees" beside a number (Kylie, Oct 11, call 5). */
export function priceLine(price: TicketPrice): string | null {
  if (price.min === null) return null;
  const symbol = price.currency === 'USD' || price.currency === 'CAD' || !price.currency ? '$' : `${price.currency} `;
  const amount = Number.isInteger(price.min) ? String(price.min) : price.min.toFixed(2);
  return `Prices from ${symbol}${amount}+fees`;
}
