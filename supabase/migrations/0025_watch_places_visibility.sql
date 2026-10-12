-- 0025: a shared place follows the owner's privacy (Kylie, Oct 12, 2026, mid-build fix).
-- Paste into Supabase's SQL Editor and Run, after 0023 and 0024. Safe to run more than once.
--
-- 0023 and 0024 checked follow approval and blocks only. A shared place must also stay hidden
-- when the owner's account is "Only me", or when the stub for that event is kept private. Both
-- now live in the database, in one helper the read rule and the per-event list both use:
--   * your own rows: always yours;
--   * another person's shared row: only when you are their approved follower, neither of you has
--     blocked the other, their visibility is not "Only me", and no entry of theirs for that event
--     is private. A plan ahead of the date has no private flag, so it follows the account switch.

create or replace function public.watch_place_visible(owner uuid, evt text)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select owner = auth.uid()
    or (
      auth.uid() is not null
      and public.is_approved_follower(auth.uid(), owner)
      and not public.is_blocked(auth.uid(), owner)
      and exists (select 1 from public.profiles p where p.id = owner and p.visibility <> 'only_me')
      and not exists (select 1 from public.entries e where e.user_id = owner and e.event_id = evt and e.private)
    );
$$;
grant execute on function public.watch_place_visible(uuid, text) to authenticated;

drop policy if exists "watch_places: shared with approved followers" on public.watch_places;
drop policy if exists "watch_places: shared, within the owner's privacy" on public.watch_places;
create policy "watch_places: shared, within the owner's privacy" on public.watch_places
  for select using (auth.uid() = user_id or (public and public.watch_place_visible(user_id, event_id)));

-- The per-event list (0024) applies the same rule.
create or replace function public.event_watch_places(evt text)
returns table (place text, people int)
language sql
stable
security definer set search_path = public
as $$
  select
    mode() within group (order by w.place) as place,
    count(*)::int as people
  from public.watch_places w
  where w.event_id = evt
    and w.public
    and w.user_id <> auth.uid()
    and public.watch_place_shared(evt)
    and public.watch_place_visible(w.user_id, evt)
    and lower(regexp_replace(w.place, '[^[:alnum:]]', '', 'g')) <> 'home'
  group by lower(regexp_replace(w.place, '[^[:alnum:]]', '', 'g'))
  order by people desc, place
  limit 12;
$$;
grant execute on function public.event_watch_places(text) to authenticated;
