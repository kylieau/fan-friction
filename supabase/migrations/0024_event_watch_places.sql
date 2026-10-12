-- 0024: the places named for one event, only from the people you follow (build notes 3, D02; Oct 12, 2026).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once. Requires 0023.
--
-- The 0021 view ran with its owner's rights and grouped every shared row for every event, so
-- anyone signed in could list every place anyone had named. It is dropped. In its place, one
-- server function answers for one event with place names and how many people named each
-- ("3 people here"), and only:
--   * from people you follow who have approved you (Kylie, Oct 11: the count covers the people
--     you follow), leaving out anyone blocked either way;
--   * when you are sharing a place for that event yourself; otherwise the list is empty;
--   * never who named it, and never your own row.
-- Names are matched ignoring case, spaces and punctuation (Kylie's answer, build notes 3, 8.1,
-- item 14): "Tom's Bar" and "toms bar" are one row, shown with the spelling most people used.
-- "Home" is a preset, not a place anyone picks from a list, so it is left out.

drop view if exists public.event_watch_places;

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
    and public.is_approved_follower(auth.uid(), w.user_id)
    and not public.is_blocked(auth.uid(), w.user_id)
    and lower(regexp_replace(w.place, '[^[:alnum:]]', '', 'g')) <> 'home'
  group by lower(regexp_replace(w.place, '[^[:alnum:]]', '', 'g'))
  order by people desc, place
  limit 12;
$$;
grant execute on function public.event_watch_places(text) to authenticated;
