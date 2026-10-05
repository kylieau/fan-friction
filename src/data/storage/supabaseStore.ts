// The account copy of the log, in Supabase. Selected from storage/index.ts
// only while someone is signed in. The database's own rules keep each
// person's rows private (see supabase/migrations/0001_accounts.sql).
//
// Shape on the server: `nights` holds each night as the app stores it, minus
// the private note, which lives in `night_notes` so it can never ride along
// onto a shared page. `plans` and `settings` are always owner-only.

import type { SupabaseClient } from '@supabase/supabase-js';
import type { LoggedNight, NightPlan, PersonalLog, YouOrder } from '../types';
import { EMPTY_LOG, readFavorites } from './localStore';
import type { NightStore } from './types';

interface NightRow {
  id: string;
  user_id: string;
  when_sort: string;
  when_precision: string;
  title: string;
  kind: string;
  metro_id: string | null;
  event_id: string | null;
  data: Omit<LoggedNight, 'note'>;
}

interface NoteRow {
  night_id: string;
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

function nightRow(userId: string, night: LoggedNight): NightRow {
  const { note: _note, ...data } = night;
  void _note;
  return {
    id: night.id,
    user_id: userId,
    when_sort: night.when.sort,
    when_precision: night.when.precision,
    title: night.title,
    kind: night.kind,
    metro_id: night.metroId ?? null,
    event_id: night.eventId ?? null,
    data,
  };
}

function planRow(userId: string, plan: NightPlan): PlanRow {
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

export function createSupabaseNightStore(client: SupabaseClient, userId: () => string | null): NightStore {
  const who = () => {
    const id = userId();
    if (!id) throw new Error('Not signed in.');
    return id;
  };

  return {
    async load(): Promise<PersonalLog> {
      const id = who();
      const [nights, notes, plans, settings] = await Promise.all([
        must<NightRow[]>(client.from('nights').select('*').eq('user_id', id)),
        must<NoteRow[]>(client.from('night_notes').select('night_id, note').eq('user_id', id)),
        must<PlanRow[]>(client.from('plans').select('*').eq('user_id', id)),
        must<SettingsRow>(client.from('settings').select('*').eq('user_id', id).maybeSingle()),
      ]);
      const noteFor = new Map((notes ?? []).map((row) => [row.night_id, row.note]));
      return {
        version: 1,
        hiddenSeedIds: settings?.hidden_seed_ids ?? EMPTY_LOG.hiddenSeedIds,
        added: (nights ?? []).map((row) => {
          const night: LoggedNight = { ...row.data, id: row.id };
          const note = noteFor.get(row.id);
          if (note) night.note = note;
          return night;
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
        await must(client.from('nights').upsert(log.added.map((night) => nightRow(id, night))));
      }
      const keepNights = log.added.map((night) => night.id);
      const existing = (await must<{ id: string }[]>(client.from('nights').select('id').eq('user_id', id))) ?? [];
      const goneNights = existing.map((row) => row.id).filter((nightId) => !keepNights.includes(nightId));
      if (goneNights.length > 0) {
        await must(client.from('nights').delete().eq('user_id', id).in('id', goneNights));
      }

      // Private notes: one row per night that has one; remove the rest.
      const noted = log.added.filter((night) => night.note);
      if (noted.length > 0) {
        await must(
          client.from('night_notes').upsert(noted.map((night) => ({ user_id: id, night_id: night.id, note: night.note! }))),
        );
      }
      const noteless = log.added.filter((night) => !night.note).map((night) => night.id);
      if (noteless.length > 0) {
        await must(client.from('night_notes').delete().eq('user_id', id).in('night_id', noteless));
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
