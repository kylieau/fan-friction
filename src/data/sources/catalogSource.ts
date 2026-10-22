// The catalog as shared truth (docs/archive/proposals/catalog-proposal-oct6.md, slice 2): upcoming
// games read from Supabase's `events` table, written once a night by the job,
// instead of every phone calling MLB and ESPN itself. The hand-seeded nights
// stay in code (seedSource) for now. When the table can't be reached, or has
// nothing for a metro yet, the live feeds answer as before.

import { allRows } from '../catalogCache';
import { MERGED_VENUE_IDS } from '../venues';
import type { CrowdEvent, LocalDate } from '../types';
import { supabase } from '../storage/supabaseClient';
import { espnEvents } from './espnSource';
import { hockeytechEvents } from './hockeytechSource';
import { mlbEvents } from './mlbSource';
import type { EventSource } from './types';

const FEEDS: EventSource[] = [mlbEvents, espnEvents, hockeytechEvents];
const cache = new Map<string, Promise<CrowdEvent[] | null>>();

/** Every feed-sourced event in the table for a metro, or null when the table can't answer. */
function catalogFor(metroId: string): Promise<CrowdEvent[] | null> {
  const hit = cache.get(metroId);
  if (hit) return hit;
  const p = (async (): Promise<CrowdEvent[] | null> => {
    const client = supabase();
    if (!client) return null;
    // Rows filed under this city's pass, plus games another city's feed filed here because the room is here
    // (the Lakers' home game in Las Vegas is the Las Vegas day; the row stays under the team's pass so the nightly
    // cleanup of one city never deletes another's).
    const { data, error } = await allRows<{ data: unknown }>((a, b) =>
      client
        .from('events')
        .select('data')
        .or(`metro_id.eq.${metroId},data->>metroId.eq.${metroId}`)
        .neq('source_id', 'seed')
        .order('id')
        .range(a, b),
    );
    if (error || !data || data.length === 0) return null;
    return data.map((row) => withMergedRoom(row.data as CrowdEvent));
  })().catch(() => null);
  cache.set(metroId, p);
  // A failed read is not kept, so the next look tries the table again.
  p.then((rows) => {
    if (rows === null) cache.delete(metroId);
  });
  return p;
}

/** A row written under a merged duplicate's id points at the room kept. */
function withMergedRoom(event: CrowdEvent): CrowdEvent {
  const kept = event.place.type === 'venue' ? MERGED_VENUE_IDS[event.place.venueId] : undefined;
  return kept ? { ...event, place: { type: 'venue', venueId: kept } } : event;
}

async function fromFeeds<T>(pick: (source: EventSource) => Promise<T[]> | undefined): Promise<T[]> {
  const lists = await Promise.all(FEEDS.map((s) => pick(s) ?? Promise.resolve([] as T[])));
  return lists.flat();
}

export const catalogEvents: EventSource = {
  id: 'catalog',
  name: 'Shared catalog',
  eventsOn: async (metroId, date) => {
    const rows = await catalogFor(metroId);
    if (rows === null) return fromFeeds((s) => s.eventsOn(metroId, date));
    return rows.filter((e) => e.date === date);
  },
  upcoming: async (metroId, fromDate: LocalDate) => {
    const rows = await catalogFor(metroId);
    if (rows === null) return fromFeeds((s) => s.upcoming?.(metroId, fromDate));
    return rows.filter((e) => e.date >= fromDate).sort((a, b) => (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')));
  },
  catalog: async (metroId) => {
    const rows = await catalogFor(metroId);
    if (rows === null) return fromFeeds((s) => s.catalog?.(metroId));
    return rows;
  },
};

/** Cities the shared catalog or its feeds can list games for. */
export function catalogMetroIds(feedMetroIds: string[]): string[] {
  return feedMetroIds;
}
