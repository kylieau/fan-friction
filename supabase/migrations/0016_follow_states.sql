-- Fan/Friction: a decline and a removal stay quiet (Kylie's build notes 2, Oct 10, 2026: R03, R04).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- R03. A declined request kept its true status in a row the requester could read, and the
-- requester could delete it and ask again. Now:
--   1. The requester never reads the `follows` table directly. Their side comes through the
--      `my_follows` view, which says "pending" for a declined row and "approved" for a removed one.
--   2. The requester cannot delete a declined row, so there is no way to clear it and re-ask.
--   3. The person asked can still find declined requests (their own rows) and approve one later.
-- R04. Removing a follower keeps the row as `removed`: their side still reads "approved", so
-- nothing changes on their screen, while every read rule (`can_view`, plans) sees no approval.
--
-- Policies on other tables used to look into `follows` directly; with the follower's rows now
-- hidden, they go through security-definer helpers instead.

alter table public.follows drop constraint if exists follows_status_check;
alter table public.follows add constraint follows_status_check
  check (status in ('pending', 'approved', 'declined', 'removed'));

-- ---------- helpers the policies and views use ----------
create or replace function public.is_approved_follower(viewer uuid, owner uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select viewer is not null and exists (
    select 1 from public.follows f
    where f.follower_id = viewer and f.followee_id = owner and f.status = 'approved'
  );
$$;

-- True when the signed-in viewer may read `owner`'s plans: an approved follower, and the owner is not on "Only me".
create or replace function public.can_view_plans(owner uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select owner = auth.uid()
    or (
      exists (select 1 from public.profiles p where p.id = owner and p.visibility <> 'only_me')
      and public.is_approved_follower(auth.uid(), owner)
    );
$$;

drop policy if exists "plans: approved followers read" on public.plans;
create policy "plans: approved followers read" on public.plans
  for select using (public.can_view_plans(user_id));

-- ---------- who reads which rows ----------
-- The person followed reads their own rows (every status). The follower reads nothing here.
drop policy if exists "follows: both sides view" on public.follows;
drop policy if exists "follows: followee views" on public.follows;
create policy "follows: followee views" on public.follows
  for select using (auth.uid() = followee_id);

-- The follower's side: the same rows, with declined read as pending and removed read as approved.
-- The view runs as its owner, so the where clause is what keeps it to the signed-in person's rows.
create or replace view public.my_follows as
  select
    f.follower_id,
    f.followee_id,
    case f.status when 'declined' then 'pending' when 'removed' then 'approved' else f.status end as status,
    f.created_at
  from public.follows f
  where f.follower_id = auth.uid();
grant select on public.my_follows to authenticated;

-- The follower may cancel a pending request or unfollow, never clear a declined one.
drop policy if exists "follows: either side removes" on public.follows;
create policy "follows: either side removes" on public.follows
  for delete using (auth.uid() = followee_id or (auth.uid() = follower_id and status <> 'declined'));
