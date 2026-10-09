-- Fan/Friction: every follow needs the other person's approval (Kylie, Oct 9, 2026).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- Before this, the app approved a follow by itself when the person being followed
-- was set to "Anyone", and the database let a follower insert an "approved" row
-- directly. Now:
--   1. A follower can only insert a row as "pending". Only the person being followed
--      can approve it (the existing update policy).
--   2. Rows the app approved by itself are marked `auto_approved`. When that person
--      moves off "Anyone", those followers go back to "pending" and show up in their
--      request list. Rows they approved by hand are left as they are.
--      (Existing rows do not say how they were approved; approved rows whose owner is
--      on "Anyone" today are taken as auto-approved. A row approved by hand and then
--      set to "Anyone" cannot be told apart, so it is re-asked too.)

-- 1. The insert policy accepts only a pending request.
drop policy if exists "follows: follower asks" on public.follows;
create policy "follows: follower asks" on public.follows
  for insert with check (auth.uid() = follower_id and status = 'pending');

-- 2. Remember which approvals the app made on its own.
alter table public.follows add column if not exists auto_approved boolean not null default false;

update public.follows f
set auto_approved = true
from public.profiles p
where p.id = f.followee_id
  and f.status = 'approved'
  and p.visibility = 'anyone'
  and f.auto_approved = false;

-- When someone leaves "Anyone", their auto-approved followers are asked again.
create or replace function public.reask_auto_approved_follows()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  if old.visibility = 'anyone' and new.visibility <> 'anyone' then
    update public.follows
    set status = 'pending', auto_approved = false
    where followee_id = new.id
      and status = 'approved'
      and auto_approved = true;
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_reask_follows on public.profiles;
create trigger profiles_reask_follows after update of visibility on public.profiles
  for each row execute function public.reask_auto_approved_follows();
