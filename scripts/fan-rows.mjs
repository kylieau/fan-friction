// Fan-added events for the nightly job (step 2 of the Add a game / Add a show card, Oct 21, 2026; shared by the
// archive and catalog steps since Oct 22, 2026, so the 14-day archive the stamps read carries them too).
// Reads a city's review rows (suggested_events) with the job's service key, runs the second-person rule, and returns
// the catalog events the confirmed and approved rows become. Only the catalog step writes (the confirmations and each
// row's event id); the archive step reads and computes, so a row confirmed tonight is in tonight's snapshot either way.
// Nothing here throws past its own call: a failure never costs a city its night.

import { createClient } from '@supabase/supabase-js';

// The key must be one that can read every row: Supabase's newer "secret" key (sb_secret_…) or the older service_role
// JWT. The public key (sb_publishable_… or an anon JWT) only sees the rows its own account owns.
export function serviceKeyKind(k) {
  if (k.startsWith('sb_secret_')) return 'secret';
  if (k.startsWith('sb_publishable_')) return 'publishable (read-only)';
  try {
    return JSON.parse(Buffer.from(k.split('.')[1], 'base64url').toString()).role ?? 'unknown';
  } catch {
    return 'unknown';
  }
}

/** The job's Supabase client from the environment, or null (with a reason) when it cannot write. */
export function serviceDb(env = process.env) {
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { db: null, reason: 'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are not set' };
  const kind = serviceKeyKind(key);
  if (kind !== 'secret' && kind !== 'service_role') {
    return { db: null, reason: `SUPABASE_SERVICE_ROLE_KEY holds a "${kind}" key, which cannot write. In Supabase: Project Settings → API Keys → a Secret key (sb_secret_…), or the legacy service_role key.` };
  }
  return { db: createClient(url, key, { auth: { persistSession: false } }), reason: null };
}

/**
 * One city's fan-added events. `fns` are the pure rules from src/data/sources/fanSource.ts (loaded through vite by the
 * caller). With `write`, the rows the second-person rule confirms tonight are marked, and each live row records the
 * event it became. Returns the events, the rows read, the ids confirmed tonight and a log line (or the failure).
 */
export async function fanEventsFor({ db, fns, metroId, floorLocal, todayLocal, now = new Date().toISOString(), write = false }) {
  const { fanEventFrom, fanEventId, secondPersonConfirmations } = fns;
  try {
    const { data: rows, error } = await db.from('suggested_events').select('*').eq('metro_id', metroId).in('status', ['pending', 'confirmed', 'approved']).gte('when_sort', floorLocal);
    if (error) throw new Error(error.message);
    const users = [...new Set((rows ?? []).map((r) => r.user_id))];
    let follows = [];
    if (users.length > 1) {
      const f = await db.from('follows').select('follower_id, followee_id').in('follower_id', users).in('followee_id', users);
      if (f.error) throw new Error(f.error.message);
      follows = f.data ?? [];
    }
    const confirmIds = secondPersonConfirmations(rows ?? [], follows);
    if (confirmIds.length && write) {
      const u = await db.from('suggested_events').update({ status: 'confirmed', confirmed_by: 'second-person', confirmed_at: now }).in('id', confirmIds);
      if (u.error) throw new Error(u.error.message);
    }
    const live = (rows ?? []).map((r) => (confirmIds.includes(r.id) ? { ...r, status: 'confirmed', confirmed_by: 'second-person' } : r)).filter((r) => r.status === 'confirmed' || r.status === 'approved');
    const events = live.map((r) => fanEventFrom(r, todayLocal)).filter(Boolean);
    const unplaced = live.length - events.length;
    if (write) {
      for (const r of live) {
        const id = fanEventId(r);
        if (r.catalog_event_id !== id && events.some((e) => e.id === id)) await db.from('suggested_events').update({ catalog_event_id: id }).eq('id', r.id);
      }
    }
    const log = rows?.length ? `${metroId}: fan-added rows ${rows.length} (${confirmIds.length} confirmed tonight by a second person); ${events.length} ${write ? 'written as events' : 'in the snapshot'}${unplaced ? `, ${unplaced} with no room on file` : ''}.` : null;
    return { events, rows: rows ?? [], confirmIds, log, failed: null };
  } catch (error) {
    return { events: [], rows: [], confirmIds: [], log: `${metroId}: fan-added rows skipped (${error.message}).`, failed: error };
  }
}
