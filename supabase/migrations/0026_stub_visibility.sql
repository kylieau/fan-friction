-- Fan/Friction: every stub gets its own level, Anyone / Friends / Private, Venmo-style
-- (build 5, stub privacy; Kylie, Oct 13–14, answer E: "the default should definitely be private though").
-- Paste into Supabase's SQL Editor and Run, after 0025. Safe to run more than once.
--
-- What changes
--   * entries and plans get a `visibility` column. The app writes `visibility` inside each row's data; a trigger
--     copies it into the column. A row written without one (an older copy of the app) keeps the level it has.
--   * The profile's switch (`only_me` / `approved` / `anyone`) is now the default for new stubs. The stub's own
--     level decides who reads it: Anyone = everyone not blocked, signed out included; Friends = approved
--     followers; Private = the owner only. Blocks override every level. The existing per-entry `private` flag
--     (0019) still hides a row whatever its level.
--   * Plans get a card view, `plan_cards`, the way entries got `entry_cards` in 0017: others read the date,
--     place-free facts and the Watching / Interested flags, never the row's data (which holds a watch place).
--     The plans table becomes owner-only.
--   * A shared watch place (0021–0025) still reaches approved followers only, never Anyone, and never when the
--     stub for that event is Private.
--
-- The backfill never widens anyone's exposure: each existing row gets the level that matches who can
-- read it today, or a narrower one where the build notes map an old choice ("Private" on a watch) to Private.
--   entries: kept private → Private; account "Only me" → Private; watch "Private" → Private; watch "Friends" →
--            Friends; account "People I approve" → Friends; account "Anyone" → Anyone.
--   plans:   kept private does not exist; account "Only me" → Private; watch "Private" → Private; else Friends
--            (today only approved followers read plans, even on "Anyone").
-- The notes' literal order puts the watch choice before the account default; here "Only me" comes first, so an
-- "Only me" account's Friends watch stays Private, as it is read today.
--
-- PREVIEW (read-only; run this first if you want the counts, then run the whole file):
--   select p.visibility as account, count(*) filter (where e.private) as kept_private,
--          count(*) filter (where not e.private and e.data->>'watchShare' = 'friends') as friends_watch,
--          count(*) as entries
--   from public.entries e join public.profiles p on p.id = e.user_id
--   where e.visibility is null group by p.visibility;

-- ---------- columns ----------
alter table public.entries add column if not exists visibility text;
alter table public.plans add column if not exists visibility text;

do $$
begin
  alter table public.entries add constraint entries_visibility_level check (visibility in ('anyone', 'friends', 'private'));
exception when duplicate_object then null;
end $$;

do $$
begin
  alter table public.plans add constraint plans_visibility_level check (visibility in ('anyone', 'friends', 'private'));
exception when duplicate_object then null;
end $$;

-- data.visibility → the column. A write without one leaves the column as it is (an upsert that does not name
-- the column keeps the old value; a new row stays null and is read by the old rule).
create or replace function public.stub_visibility_from_data()
returns trigger
language plpgsql
as $$
begin
  if (new.data ->> 'visibility') in ('anyone', 'friends', 'private') then
    new.visibility := new.data ->> 'visibility';
  end if;
  return new;
end;
$$;

drop trigger if exists entries_visibility on public.entries;
create trigger entries_visibility before insert or update on public.entries
  for each row execute function public.stub_visibility_from_data();

drop trigger if exists plans_visibility on public.plans;
create trigger plans_visibility before insert or update on public.plans
  for each row execute function public.stub_visibility_from_data();

-- ---------- backfill (the column only; data is untouched, so 0020's keep-newest trigger lets it through) ----------
update public.entries e
set visibility = case
  when e.private then 'private'
  when p.visibility = 'only_me' then 'private'
  when e.data ->> 'watchShare' = 'private' then 'private'
  when e.data ->> 'watchShare' = 'friends' then 'friends'
  when p.visibility = 'anyone' then 'anyone'
  else 'friends'
end
from public.profiles p
where p.id = e.user_id and e.visibility is null;

update public.plans pl
set visibility = case
  when p.visibility = 'only_me' then 'private'
  when pl.data ->> 'watchShare' = 'private' then 'private'
  else 'friends'
end
from public.profiles p
where p.id = pl.user_id and pl.visibility is null;

-- ---------- the read rule for one stub ----------
-- `can_view(owner)` (0001/0018) stays for everything that is not a stub (nights) and for rows with no level yet.
create or replace function public.can_view_stub(owner uuid, level text)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select owner = auth.uid()
    or (
      not public.is_blocked(auth.uid(), owner)
      and (
        level = 'anyone'
        or (level = 'friends' and public.is_approved_follower(auth.uid(), owner))
      )
    );
$$;
grant execute on function public.can_view_stub(uuid, text) to anon, authenticated;

-- ---------- entries: the card view reads the stub's level ----------
create or replace view public.entry_cards as
  select
    e.user_id,
    e.id,
    e.when_sort,
    e.when_precision,
    e.title,
    e.kind,
    e.metro_id,
    e.event_id,
    e.data -> 'when' as "when",
    e.data ->> 'venue' as venue,
    e.data -> 'stamp' as stamp,
    e.data ->> 'review' as review,
    (e.data ->> 'away')::boolean as away,
    (e.data ->> 'neutralSite')::boolean as neutral_site,
    (e.data ->> 'belowFloor')::boolean as below_floor,
    (e.data ->> 'inMetro')::boolean as in_metro,
    coalesce((e.data ->> 'watched')::boolean, false) as watched
  from public.entries e
  where not e.private
    and case when e.visibility is null then public.can_view(e.user_id) else public.can_view_stub(e.user_id, e.visibility) end;
grant select on public.entry_cards to anon, authenticated;

-- ---------- plans: owner-only table, a card view for everyone else ----------
drop policy if exists "plans: approved followers read" on public.plans;

create or replace view public.plan_cards as
  select
    p.user_id,
    p.id,
    p.date,
    p.metro_id,
    p.event_id,
    p.title,
    p.venue,
    coalesce((p.data ->> 'watch')::boolean, false) as watch,
    coalesce((p.data ->> 'interested')::boolean, false) as interested
  from public.plans p
  where case when p.visibility is null then public.can_view_plans(p.user_id) else public.can_view_stub(p.user_id, p.visibility) end;
grant select on public.plan_cards to anon, authenticated;

-- ---------- a shared watch place follows the stub's level, approved followers only ----------
-- The stub for that event is the entry when there is one, else the plan. A place is never shown to Anyone:
-- it still needs an approved follow, whatever the stub's level.
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
      and case
        when exists (select 1 from public.entries e where e.user_id = owner and e.event_id = evt) then
          exists (
            select 1 from public.entries e
            where e.user_id = owner and e.event_id = evt and not e.private
              and coalesce(e.visibility, case when exists (select 1 from public.profiles p where p.id = owner and p.visibility = 'only_me') then 'private' else 'friends' end) <> 'private'
          )
        when exists (select 1 from public.plans pl where pl.user_id = owner and pl.event_id = evt) then
          exists (
            select 1 from public.plans pl
            where pl.user_id = owner and pl.event_id = evt
              and coalesce(pl.visibility, case when exists (select 1 from public.profiles p where p.id = owner and p.visibility = 'only_me') then 'private' else 'friends' end) <> 'private'
          )
        else exists (select 1 from public.profiles p where p.id = owner and p.visibility <> 'only_me')
      end
    );
$$;
grant execute on function public.watch_place_visible(uuid, text) to authenticated;
