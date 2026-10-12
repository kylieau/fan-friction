-- 0023: where you watched can be saved and read again (build notes 3, D01; Oct 12, 2026).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once. Requires 0021 and 0018.
--
-- The 0021 select rule read watch_places inside its own rule ("is the viewer public for the
-- same event?"), so Postgres refused every read and write of the table with a recursion
-- error, and the app swallowed it: nobody's place was ever saved. The rule is rewritten so
-- it never reads its own table:
--   * your own rows: yours to read and write;
--   * another person's row: readable only when it is shared (public), you are their approved
--     follower, and neither of you has blocked the other. Those checks run through the
--     security-definer helpers from 0016 and 0018, which read follows and blocks, not this table.
-- That is the sharing rule the build 3 sheet promises ("Approved friends will see where you're
-- watching"); the "am I sharing for this event too" check lives in watch_place_shared(), for
-- the per-event list in 0024.

create or replace function public.watch_place_shared(evt text)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select auth.uid() is not null and exists (
    select 1 from public.watch_places w
    where w.user_id = auth.uid() and w.event_id = evt and w.public
  );
$$;
grant execute on function public.watch_place_shared(text) to authenticated;

drop policy if exists "watch_places: public, same event, both public" on public.watch_places;
drop policy if exists "watch_places: shared with approved followers" on public.watch_places;
create policy "watch_places: shared with approved followers" on public.watch_places
  for select using (
    auth.uid() = user_id
    or (
      public
      and auth.uid() is not null
      and public.is_approved_follower(auth.uid(), user_id)
      and not public.is_blocked(auth.uid(), user_id)
    )
  );
