// The account copy of the log, in Supabase. Selected from storage/index.ts
// only while someone is signed in. The database's own rules keep each
// person's rows private (see supabase/migrations/0001_accounts.sql).
//
// Shape on the server: `nights` holds each night as the app stores it, minus
// the private note, which lives in `entry_notes` so it can never ride along
// onto a shared page. `plans` and `settings` are always owner-only.

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Entry, Plan, PersonalLog, YouOrder } from '../types';
import { EMPTY_LOG, readFavorites } from './localStore';
import type { EntryStore } from './types';

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
  note: string;
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
  data?: { favorites?: unknown };
}

function entryRow(userId: string, entry: Entry): EntryRow {
  const { note: _note, ...data } = entry;
  void _note;
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
        must<NoteRow[]>(client.from('entry_notes').select('entry_id, note').eq('user_id', id)),
        must<PlanRow[]>(client.from('plans').select('*').eq('user_id', id)),
        must<SettingsRow>(client.from('settings').select('*').eq('user_id', id).maybeSingle()),
      ]);
      const noteFor = new Map((notes ?? []).map((row) => [row.entry_id, row.note]));
      return {
        version: 1,
        hiddenSeedIds: settings?.hidden_seed_ids ?? EMPTY_LOG.hiddenSeedIds,
        added: (entries ?? []).map((row) => {
          const entry: Entry = { ...row.data, id: row.id };
          const note = noteFor.get(row.id);
          if (note) entry.note = note;
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
      };
    },

    async save(log: PersonalLog): Promise<void> {
      const id = who();

      // Nights: write every one, then drop any the log no longer has.
      if (log.added.length > 0) {
        await must(client.from('entries').upsert(log.added.map((entry) => entryRow(id, entry))));
      }
      const keepEntries = log.added.map((entry) => entry.id);
      const existing = (await must<{ id: string }[]>(client.from('entries').select('id').eq('user_id', id))) ?? [];
      const goneEntries = existing.map((row) => row.id).filter((entryId) => !keepEntries.includes(entryId));
      if (goneEntries.length > 0) {
        await must(client.from('entries').delete().eq('user_id', id).in('id', goneEntries));
      }

      // Private notes: one row per night that has one; remove the rest.
      const noted = log.added.filter((entry) => entry.note);
      if (noted.length > 0) {
        await must(
          client.from('entry_notes').upsert(noted.map((entry) => ({ user_id: id, entry_id: entry.id, note: entry.note! }))),
        );
      }
      const noteless = log.added.filter((entry) => !entry.note).map((entry) => entry.id);
      if (noteless.length > 0) {
        await must(client.from('entry_notes').delete().eq('user_id', id).in('entry_id', noteless));
      }

      // Plans: same approach.
      if (log.plans.length > 0) {
        await must(client.from('plans').upsert(log.plans.map((plan) => planRow(id, plan))));
      }
      const keepPlans = log.plans.map((plan) => plan.id);
      const existingPlans = (await must<{ id: string }[]>(client.from('plans').select('id').eq('user_id', id))) ?? [];
      const gonePlans = existingPlans.map((row) => row.id).filter((planId) => !keepPlans.includes(planId));
      if (gonePlans.length > 0) {
        await must(client.from('plans').delete().eq('user_id', id).in('id', gonePlans));
      }

      await must(
        client.from('settings').upsert({
          user_id: id,
          you_order: log.order,
          hidden_seed_ids: log.hiddenSeedIds,
          data: { favorites: log.favorites ?? [] },
        }),
      );
    },
  };
}
