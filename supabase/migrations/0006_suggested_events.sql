-- Suggested events (Oct 6, 2026). When someone types in a night at a big room,
-- the app also files it here so Kylie can check it against a public source and
-- seed it as a catalog event. Nothing on the map or in anyone's read changes
-- until she does. Owners can insert and read only their own rows; Kylie reads
-- the table in the Supabase dashboard. Paste into the SQL Editor and Run.
-- Safe to run again.

create table if not exists public.suggested_events (
  id uuid primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  entry_id text not null,
  title text not null,
  kind text not null,
  when_sort date not null,
  when_precision text not null,
  venue text,
  metro_id text,
  -- Kylie's call: pending, seeded (with the catalog event id), or declined.
  status text not null default 'pending',
  catalog_event_id text,
  created_at timestamptz not null default now()
);

create index if not exists suggested_events_status on public.suggested_events (status, created_at);

alter table public.suggested_events enable row level security;

drop policy if exists "suggested_events: owner inserts" on public.suggested_events;
create policy "suggested_events: owner inserts" on public.suggested_events
  for insert with check (auth.uid() = user_id);
drop policy if exists "suggested_events: owner reads" on public.suggested_events;
create policy "suggested_events: owner reads" on public.suggested_events
  for select using (auth.uid() = user_id);
