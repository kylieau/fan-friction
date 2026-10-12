// An artist's own homepage (build notes 3, 8.1, item 16: Kylie's pick, the homepage from
// Ticketmaster's attraction links). Runs on Vercel's Node runtime beside ticket-price.ts, so
// the key never reaches the phone. One of the artist's listed events in, the homepage of the
// attraction with that name out; nothing is written anywhere. The artist page hides its
// "Official site ›" slot when this answers with no link.

interface SiteAnswer {
  url: string | null;
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

const HOLD_MS = 60 * 60 * 1000;
const held = new Map<string, { at: number; answer: SiteAnswer }>();

function one(value: string | string[] | undefined): string {
  return String(Array.isArray(value) ? value[0] : (value ?? '')).trim();
}

export default async function handler(req: Req, res: Res) {
  const id = one(req.query.id);
  const name = one(req.query.name).toLowerCase().slice(0, 120);
  if (!/^[A-Za-z0-9_-]{4,40}$/.test(id)) {
    res.status(400).json({ error: 'Which event?' });
    return;
  }
  const key = process.env.TICKETMASTER_API_KEY;
  if (!key) {
    res.status(503).json({ error: 'No feed here.' });
    return;
  }
  const cacheKey = `${id}|${name}`;
  const hit = held.get(cacheKey);
  if (hit && Date.now() - hit.at < HOLD_MS) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
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
      _embedded?: { attractions?: { name?: string; externalLinks?: { homepage?: { url?: string }[] } }[] };
    };
    const acts = event._embedded?.attractions ?? [];
    // The attraction with the artist's name, else the headliner (listed first); only an http(s) homepage counts.
    const act = acts.find((a) => (a.name ?? '').toLowerCase() === name) ?? acts[0];
    const url = act?.externalLinks?.homepage?.map((h) => h.url ?? '').find((u) => /^https?:\/\//i.test(u)) ?? null;
    const answer: SiteAnswer = { url };
    held.set(cacheKey, { at: Date.now(), answer });
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).json(answer);
  } catch (err) {
    res.status(502).json({ error: err instanceof Error ? err.message : 'Could not reach Ticketmaster.' });
  }
}
