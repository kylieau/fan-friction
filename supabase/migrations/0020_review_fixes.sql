-- Fan/Friction: build 2 review fixes (Kylie, Oct 11, 2026: R01, R02, R04, R05, R06) and the feed's watched flag.
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once. Requires 0014–0019.
--
-- R01. A request from someone you blocked (or who blocked you) is refused at the door.
-- R02. A removed follower's row stays. Their Unfollow only hides the row from their side,
--      so they cannot clear it and ask again; an approval later shows it again.
-- R04. Searching people runs on the server: three characters at least, commas and brackets
--      stripped, twenty results at most. A signed-out visitor can no longer list the cards;
--      a profile link resolves one exact handle through `profile_card`.
-- R05. "Linked by a follow" (who may still open a switched-off profile link) counts
--      approved follows only, not requests or declines.
-- R06. The newest edit wins by when you made it, not by when it reached the server: an
--      older offline edit arriving later is dropped by the database.
-- Feed: `entry_cards` carries `watched`, so a friend's line can say "watched".

-- ---------- R01 ----------
drop policy if exists "follows: follower asks" on public.follows;
create policy "follows: follower asks" on public.follows
  for insert with check (
    auth.uid() = follower_id
    and status = 'pending'
    and auto_approved = false
    and not public.is_blocked(auth.uid(), followee_id)
  );

-- ---------- R02 ----------
alter table public.follows add column if not exists follower_hidden boolean not null default false;

-- The follower's Unfollow on a removed row: hide it for them, keep it.
create or replace function public.hide_follow(target uuid)
returns void
language sql
security definer set search_path = public
as $$
  update public.follows
  set follower_hidden = true
  where follower_id = auth.uid() and followee_id = target and status = 'removed';
$$;
grant execute on function public.hide_follow(uuid) to authenticated;

-- A row that leaves "removed" (approved again later) shows again on their side.
create or replace function public.follows_unhide()
returns trigger
language plpgsql
as $$
begin
  if new.status <> 'removed' then
    new.follower_hidden := false;
  end if;
  return new;
end;
$$;
drop trigger if exists follows_unhide on public.follows;
create trigger follows_unhide before update of status on public.follows
  for each row execute function public.follows_unhide();

-- The follower may cancel a pending request or unfollow an approved one; never clear a declined or removed row.
drop policy if exists "follows: either side removes" on public.follows;
create policy "follows: either side removes" on public.follows
  for delete using (auth.uid() = followee_id or (auth.uid() = follower_id and status in ('pending', 'approved')));

create or replace view public.my_follows as
  select
    f.follower_id,
    f.followee_id,
    case f.status when 'declined' then 'pending' when 'removed' then 'approved' else f.status end as status,
    f.created_at
  from public.follows f
  where f.follower_id = auth.uid() and not f.follower_hidden;
grant select on public.my_follows to authenticated;

-- ---------- R05 ----------
create or replace function public.follow_linked(a uuid, b uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select a is not null and exists (
    select 1 from public.follows f
    where f.status = 'approved'
      and ((f.follower_id = a and f.followee_id = b) or (f.follower_id = b and f.followee_id = a))
  );
$$;

-- ---------- R04 ----------
-- One card by exact handle (a profile link), for anyone. The same rules as the view.
create or replace function public.profile_card(h text)
returns table (id uuid, handle text, display_name text)
language sql
stable
security definer set search_path = public
as $$
  select p.id, p.handle, p.display_name
  from public.profiles p
  where lower(p.handle) = lower(h)
    and not exists (select 1 from public.blocks b where b.blocker_id = p.id and b.blocked_id = auth.uid())
    and (auth.uid() = p.id or not p.link_off or public.follow_linked(auth.uid(), p.id))
  limit 1;
$$;
grant execute on function public.profile_card(text) to anon, authenticated;

-- Search, signed in only: part of a name or handle, three characters at least, twenty at most.
create or replace function public.search_people(q text)
returns table (id uuid, handle text, display_name text)
language sql
stable
security definer set search_path = public
as $$
  with cleaned as (
    select trim(regexp_replace(coalesce(q, ''), '[,\[\]\(\)\{\}%_<>]', '', 'g')) as term
  )
  select p.id, p.handle, p.display_name
  from public.profiles p, cleaned c
  where auth.uid() is not null
    and length(c.term) >= 3
    and p.handle is not null
    and p.id <> auth.uid()
    and (p.handle ilike '%' || c.term || '%' or p.display_name ilike '%' || c.term || '%')
    and not exists (select 1 from public.blocks b where b.blocker_id = p.id and b.blocked_id = auth.uid())
    and (not p.link_off or public.follow_linked(auth.uid(), p.id))
  order by p.display_name nulls last, p.handle
  limit 20;
$$;
grant execute on function public.search_people(text) to authenticated;

-- Signed-out visitors no longer list the cards; signed-in people still read cards by id for their lists and feed.
revoke select on public.profile_cards from anon;

-- ---------- R06 ----------
-- The app writes its edit time inside the row (`data.updatedAt`, on the server's clock since 0014).
-- An update carrying an older edit time than the row already has is skipped.
create or replace function public.keep_newest_edit()
returns trigger
language plpgsql
as $$
begin
  if (old.data ->> 'updatedAt') is not null
     and (new.data ->> 'updatedAt') is not null
     and (new.data ->> 'updatedAt') < (old.data ->> 'updatedAt') then
    return null;
  end if;
  return new;
end;
$$;
drop trigger if exists entries_keep_newest on public.entries;
create trigger entries_keep_newest before update on public.entries
  for each row execute function public.keep_newest_edit();
drop trigger if exists plans_keep_newest on public.plans;
create trigger plans_keep_newest before update on public.plans
  for each row execute function public.keep_newest_edit();

-- ---------- the feed's watched flag ----------
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
  where public.can_view(e.user_id) and not e.private;
grant select on public.entry_cards to anon, authenticated;
