// An artist's homepage for the "Official site ›" slot (build notes 3, 8.1, item 16): looked up
// live through the app's own server function (api/artist-site.ts) from one of the artist's
// listed events, held in memory for the session, never stored. Null means no link: the slot hides.

const held = new Map<string, Promise<string | null>>();

export function artistSite(ticketmasterId: string, name: string): Promise<string | null> {
  const key = `${ticketmasterId}|${name.toLowerCase()}`;
  const hit = held.get(key);
  if (hit) return hit;
  const ask = (async () => {
    try {
      const r = await fetch(`/api/artist-site?id=${encodeURIComponent(ticketmasterId)}&name=${encodeURIComponent(name)}`, { headers: { accept: 'application/json' } });
      if (!r.ok || !/json/i.test(r.headers.get('content-type') ?? '')) return null;
      const body = (await r.json()) as { url?: string | null };
      return typeof body.url === 'string' && /^https?:\/\//i.test(body.url) ? body.url : null;
    } catch {
      return null;
    }
  })();
  held.set(key, ask);
  return ask;
}
