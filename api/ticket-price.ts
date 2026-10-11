// The ticket line's price lookup (Kylie's build notes 2, Oct 10, 2026, 8.1). Runs on
// Vercel's Node runtime, so the Ticketmaster key never reaches the phone. One event id
// in, the event's Ticketmaster page and its lowest standard price out. Held in memory
// for a few minutes only; never written anywhere. Resale ranges are left out.
//
// The key: set TICKETMASTER_API_KEY in the Vercel project's environment variables
// (Settings → Environment Variables). Without it, the function answers 503 and the
// app shows no ticket line.

interface PriceAnswer {
  url: string | null;
  /** The lowest standard price, when the listing carries one. */
  min: number | null;
  currency: string | null;
  /** True when the lowest price already includes fees. Kept as a fact; the line still says "+fees" (Kylie, Oct 11, call 5). */
  feesIncluded: boolean;
  /** Not on sale here any more (offsale), cancelled or postponed: the app shows no line (R18). Not "sold out". */
  offsale: boolean;
  /** Reserved for a feed that says the tickets are gone. No feed says so today, so it is never true. */
  soldOut: boolean;
}

interface Req {
  method?: string;
  query: Record<string, string | string[] | undefined>;
}

interface Res {
  status(code: number): Res;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
  end(body?: string): void;
}

const HOLD_MS = 5 * 60 * 1000;
const held = new Map<string, { at: number; answer: PriceAnswer }>();

export default async function handler(req: Req, res: Res) {
  const id = String(Array.isArray(req.query.id) ? req.query.id[0] : (req.query.id ?? '')).trim();
  if (!/^[A-Za-z0-9_-]{4,40}$/.test(id)) {
    res.status(400).json({ error: 'Which event?' });
    return;
  }
  const key = process.env.TICKETMASTER_API_KEY;
  if (!key) {
    res.status(503).json({ error: 'No ticket feed here.' });
    return;
  }
  const hit = held.get(id);
  if (hit && Date.now() - hit.at < HOLD_MS) {
    res.setHeader('Cache-Control', 'public, max-age=120');
    res.status(200).json(hit.answer);
    return;
  }
  try {
    const r = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${encodeURIComponent(id)}.json?apikey=${encodeURIComponent(key)}`);
    if (!r.ok) {
      res.status(r.status === 404 ? 404 : 502).json({ error: `Ticketmaster answered ${r.status}` });
      return;
    }
    const event = (await r.json()) as {
      url?: string;
      dates?: { status?: { code?: string } };
      priceRanges?: { type?: string; currency?: string; min?: number; max?: number }[];
    };
    // Standard ranges only: platinum and resale stay out (Kylie: no resale prices).
    const standard = (event.priceRanges ?? []).filter((p) => typeof p.min === 'number' && /^standard/i.test(p.type ?? ''));
    const withFees = standard.filter((p) => /fee/i.test(p.type ?? ''));
    const pick = (withFees.length ? withFees : standard).sort((a, b) => (a.min ?? 0) - (b.min ?? 0))[0];
    const answer: PriceAnswer = {
      url: event.url ?? null,
      min: pick?.min ?? null,
      currency: pick?.currency ?? null,
      feesIncluded: Boolean(pick && /fee/i.test(pick.type ?? '')),
      offsale: /offsale|cancel|postpon/i.test(event.dates?.status?.code ?? ''),
      soldOut: false,
    };
    held.set(id, { at: Date.now(), answer });
    res.setHeader('Cache-Control', 'public, max-age=120');
    res.status(200).json(answer);
  } catch (err) {
    res.status(502).json({ error: err instanceof Error ? err.message : 'Could not reach Ticketmaster.' });
  }
}
