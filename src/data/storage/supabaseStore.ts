// The account copy of the log, in Supabase. Selected from storage/index.ts
// only while someone is signed in. The database's own rules keep each
// person's rows private (see supabase/migrations/0001_accounts.sql).
//
// Shape on the server: `entries` holds each entry as the app stores it, minus
// the private pair (note, With), which lives in `entry_notes` so it can never
// ride along onto a shared page. `plans` and `settings` are owner-only; the
// removed-ids map rides in `settings.data` so a deletion reaches every device.
//
// A save writes only the rows one change touched (Kylie's build notes, Oct 9,
// C112). It never lists the server's rows to delete the rest, so an older tab
// cannot wipe what a newer device saved.

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Entry, Plan, PersonalLog, YouOrder } from '../types';
import { EMPTY_LOG, readFavorites, readRemoved } from './localStore';
import type { EntryStore, LogDiff } from './types';

interface EntryRow {
  id: string;
  user_id: string;
  when_sort: string;
  when_precision: string;
  title: string;
  kind: string;
  metro_id: string | null;
  event_id: string | null;
  data: Omit<Entry, 'note'>;
}

interface NoteRow {
  entry_id: string;
  note: string | null;
  with_whom?: string | null;
}

interface PlanRow {
  id: string;
  user_id: string;
  date: string;
  metro_id: string;
  event_id: string | null;
  title: string;
  venue: string | null;
  data: Record<string, unknown>;
}

interface SettingsRow {
  user_id: string;
  you_order: string;
  hidden_seed_ids: string[];
  data?: { favorites?: unknown; removed?: unknown };
}

function entryRow(userId: string, entry: Entry): EntryRow {
  // The private pair never rides along in `data`, which approved followers can read.
  const { note: _note, with: _with, ...data } = entry;
  void _note;
  void _with;
  return {
    id: entry.id,
    user_id: userId,
    when_sort: entry.when.sort,
    when_precision: entry.when.precision,
    title: entry.title,
    kind: entry.kind,
    metro_id: entry.metroId ?? null,
    event_id: entry.eventId ?? null,
    data,
  };
}

function planRow(userId: string, plan: Plan): PlanRow {
  const { id, date, metroId, eventId, title, venue, ...rest } = plan;
  return {
    id,
    user_id: userId,
    date,
    metro_id: metroId,
    event_id: eventId ?? null,
    title,
    venue: venue ?? null,
    data: rest as Record<string, unknown>,
  };
}

function asOrder(value: string): YouOrder {
  return value === 'nights-first' ? 'nights-first' : 'plans-first';
}

async function must<T>(promise: PromiseLike<{ data: T | null; error: { message: string } | null }>): Promise<T | null> {
  const { data, error } = await promise;
  if (error) throw new Error(error.message);
  return data;
}

export function createSupabaseEntryStore(client: SupabaseClient, userId: () => string | null): EntryStore {
  const who = () => {
    const id = userId();
    if (!id) throw new Error('Not signed in.');
    return id;
  };

  return {
    async load(): Promise<PersonalLog> {
      const id = who();
      const [entries, notes, plans, settings] = await Promise.all([
        must<EntryRow[]>(client.from('entries').select('*').eq('user_id', id)),
        must<NoteRow[]>(client.from('entry_notes').select('entry_id, note, with_whom').eq('user_id', id)),
        must<PlanRow[]>(client.from('plans').select('*').eq('user_id', id)),
        must<SettingsRow>(client.from('settings').select('*').eq('user_id', id).maybeSingle()),
      ]);
      const privateFor = new Map((notes ?? []).map((row) => [row.entry_id, row]));
      return {
        version: 1,
        hiddenSeedIds: settings?.hidden_seed_ids ?? EMPTY_LOG.hiddenSeedIds,
        added: (entries ?? []).map((row) => {
          const entry: Entry = { ...row.data, id: row.id };
          const priv = privateFor.get(row.id);
          if (priv?.note) entry.note = priv.note;
          if (priv?.with_whom) entry.with = priv.with_whom;
          return entry;
        }),
        plans: (plans ?? []).map((row) => ({
          id: row.id,
          date: row.date,
          metroId: row.metro_id,
          eventId: row.event_id ?? undefined,
          title: row.title,
          venue: row.venue ?? undefined,
          ...row.data,
        })),
        order: asOrder(settings?.you_order ?? EMPTY_LOG.order),
        favorites: readFavorites(settings?.data?.favorites),
        removed: readRemoved(settings?.data?.removed),
      };
    },

    async save(diff: LogDiff): Promise<void> {
      const id = who();
      const { entries, plans, log } = diff;

      if (entries.upsert.length > 0) {
        await must(client.from('entries').upsert(entries.upsert.map((entry) => entryRow(id, entry))));
        // The private pair: one row per entry that has either; none for the rest.
        const noted = entries.upsert.filter((entry) => entry.note || entry.with);
        if (noted.length > 0) {
          await must(
            client.from('entry_notes').upsert(
              noted.map((entry) => ({ user_id: id, entry_id: entry.id, note: entry.note ?? null, with_whom: entry.with ?? null })),
            ),
          );
        }
        const noteless = entries.upsert.filter((entry) => !entry.note && !entry.with).map((entry) => entry.id);
        if (noteless.length > 0) await must(client.from('entry_notes').delete().eq('user_id', id).in('entry_id', noteless));
      }
      // Notes go with their entry (the database cascades).
      if (entries.remove.length > 0) await must(client.from('entries').delete().eq('user_id', id).in('id', entries.remove));

      if (plans.upsert.length > 0) await must(client.from('plans').upsert(plans.upsert.map((plan) => planRow(id, plan))));
      if (plans.remove.length > 0) await must(client.from('plans').delete().eq('user_id', id).in('id', plans.remove));

      if (diff.settings) {
        await must(
          client.from('settings').upsert({
            user_id: id,
            you_order: log.order,
            hidden_seed_ids: log.hiddenSeedIds,
            data: { favorites: log.favorites ?? [], removed: log.removed ?? {} },
          }),
        );
      }
    },
  };
}
