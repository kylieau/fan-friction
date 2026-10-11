-- Fan/Friction: where you watched (Kylie, Oct 11, 2026, call 3). Paste into Supabase's SQL Editor and Run.
-- Safe to run more than once. Requires 0018 (blocks).
--
-- A watched entry can say where: at home, or a public place typed in (a bar). Public places are
-- shared per event only: someone who also set themselves Public for the same event can pick from
-- the names already added for it. The rule lives here, not in the screen:
--   * your own rows: yours to read and write;
--   * another person's row: readable only when it is public, you have a public row for the same
--     event, and neither of you has blocked the other. The name only; who added it never leaves
--     the table (the app reads a view that drops the user id).
-- Kept private (public = false) means nobody else ever reads it.

create table if not exists public.watch_places (
  user_id uuid not null references auth.users (id) on delete cascade,
  event_id text not null,
  place text not null,
  public boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, event_id),
  check (length(trim(place)) between 1 and 80)
);

drop trigger if exists watch_places_updated_at on public.watch_places;
create trigger watch_places_updated_at before update on public.watch_places
  for each row execute function public.set_updated_at();

alter table public.watch_places enable row level security;

drop policy if exists "watch_places: owner writes" on public.watch_places;
create policy "watch_places: owner writes" on public.watch_places
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "watch_places: public, same event, both public" on public.watch_places;
create policy "watch_places: public, same event, both public" on public.watch_places
  for select using (
    auth.uid() = user_id
    or (
      public
      and auth.uid() is not null
      and not public.is_blocked(auth.uid(), user_id)
      and exists (
        select 1 from public.watch_places mine
        where mine.user_id = auth.uid() and mine.event_id = watch_places.event_id and mine.public
      )
    )
  );
grant select, insert, update, delete on public.watch_places to authenticated;

-- The names for one event, without who added them.
create or replace view public.event_watch_places as
  select w.event_id, w.place, count(*)::int as people
  from public.watch_places w
  where w.public
  group by w.event_id, w.place;
grant select on public.event_watch_places to authenticated;
