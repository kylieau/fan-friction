-- Fan/Friction: Block (Kylie's build notes 2, Oct 10, 2026, section 4).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- Blocking someone removes the follow in both directions, hides you from their search and
-- their links, and keeps them out of your entries and plans. Nothing tells them. You still
-- see their card (so you can unblock from Settings); they never see yours.
-- Requires 0016 (is_approved_follower, can_view_plans) and 0017 (profile_cards).

create table if not exists public.blocks (
  blocker_id uuid not null references auth.users (id) on delete cascade,
  blocked_id uuid not null references auth.users (id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  check (blocker_id <> blocked_id)
);

alter table public.blocks enable row level security;
drop policy if exists "blocks: owner only" on public.blocks;
create policy "blocks: owner only" on public.blocks
  for all using (auth.uid() = blocker_id) with check (auth.uid() = blocker_id);
grant select, insert, delete on public.blocks to authenticated;

-- True when either side has blocked the other.
create or replace function public.is_blocked(viewer uuid, owner uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select viewer is not null and exists (
    select 1 from public.blocks b
    where (b.blocker_id = owner and b.blocked_id = viewer) or (b.blocker_id = viewer and b.blocked_id = owner)
  );
$$;

-- Block: the row, then both follow rows go, whatever their status.
create or replace function public.block_user(target uuid)
returns void
language plpgsql
security definer set search_path = public
as $$
begin
  if auth.uid() is null or target = auth.uid() then
    raise exception 'Sign in first.';
  end if;
  insert into public.blocks (blocker_id, blocked_id) values (auth.uid(), target) on conflict do nothing;
  delete from public.follows where (follower_id = auth.uid() and followee_id = target) or (follower_id = target and followee_id = auth.uid());
end;
$$;

create or replace function public.unblock_user(target uuid)
returns void
language sql
security definer set search_path = public
as $$
  delete from public.blocks where blocker_id = auth.uid() and blocked_id = target;
$$;

grant execute on function public.block_user(uuid), public.unblock_user(uuid) to authenticated;

-- The read rules refuse a blocked viewer in either direction.
create or replace function public.can_view(owner uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select
    owner = auth.uid()
    or (
      not public.is_blocked(auth.uid(), owner)
      and exists (
        select 1 from public.profiles p
        where p.id = owner
          and (
            p.visibility = 'anyone'
            or (p.visibility = 'approved' and public.is_approved_follower(auth.uid(), owner))
          )
      )
    );
$$;

create or replace function public.can_view_plans(owner uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select owner = auth.uid()
    or (
      not public.is_blocked(auth.uid(), owner)
      and exists (select 1 from public.profiles p where p.id = owner and p.visibility <> 'only_me')
      and public.is_approved_follower(auth.uid(), owner)
    );
$$;

-- Someone who blocked you is not in your search or behind a link; someone you blocked still shows to you.
create or replace view public.profile_cards as
  select p.id, p.handle, p.display_name
  from public.profiles p
  where p.handle is not null
    and not exists (select 1 from public.blocks b where b.blocker_id = p.id and b.blocked_id = auth.uid())
    and (auth.uid() = p.id or not p.link_off or public.follow_linked(auth.uid(), p.id));
grant select on public.profile_cards to anon, authenticated;
