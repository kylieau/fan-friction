-- Fan/Friction: deletions as their own rows, and the server's clock for sync (Kylie's build notes 2, Oct 10, 2026: R09, R10).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- R09. Removed ids used to ride in one JSON map inside `settings.data.removed`, written whole on
-- every settings save. A tab that had not seen a deletion could write its older map back and the
-- deleted entry returned on the next merge. Now each deletion is one row in `removed_rows`, and a
-- save only ever adds or deletes the rows it touched. The old map is copied over once, below.
--
-- R10. The newer copy of a row wins when two devices disagree, and "newer" was judged by each
-- device's own clock. Now entries and plans carry `updated_at` set by the database on every write,
-- deletions carry `removed_at` the same way, and the app asks `server_time()` once per load so the
-- stamps it makes while offline follow the server's clock, not the phone's.

-- ---------- removed_rows ----------
create table if not exists public.removed_rows (
  user_id uuid not null references auth.users (id) on delete cascade,
  id text not null,                               -- an entry or plan id
  removed_at timestamptz not null default now(),
  primary key (user_id, id)
);

alter table public.removed_rows enable row level security;
drop policy if exists "removed_rows: owner only" on public.removed_rows;
create policy "removed_rows: owner only" on public.removed_rows
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
grant select, insert, update, delete on public.removed_rows to authenticated;

-- Copy the old map over once. A row that already exists is left alone.
insert into public.removed_rows (user_id, id, removed_at)
select s.user_id, r.key, coalesce((r.value #>> '{}')::timestamptz, now())
from public.settings s, jsonb_each(coalesce(s.data -> 'removed', '{}'::jsonb)) r
where jsonb_typeof(r.value) = 'string'
on conflict (user_id, id) do nothing;

-- ---------- server-kept edit times ----------
alter table public.plans add column if not exists updated_at timestamptz not null default now();
drop trigger if exists plans_updated_at on public.plans;
create trigger plans_updated_at before update on public.plans
  for each row execute function public.set_updated_at();

-- entries already has updated_at and its trigger (0001, renamed in 0004); make sure of it.
alter table public.entries add column if not exists updated_at timestamptz not null default now();
drop trigger if exists entries_updated_at on public.entries;
create trigger entries_updated_at before update on public.entries
  for each row execute function public.set_updated_at();

-- ---------- the server's clock ----------
create or replace function public.server_time()
returns timestamptz
language sql
stable
as $$ select now() $$;
grant execute on function public.server_time() to authenticated, anon;
