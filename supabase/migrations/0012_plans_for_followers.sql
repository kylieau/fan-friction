-- Fan/Friction: approved followers can see your plans (Kylie, Oct 9, 2026, 3.24: "could plan meeting up").
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- Plans were owner-only. Now a plan is also readable by someone you approved, as long as your
-- visibility is not "Only me". Nobody else: not "Anyone" readers without a follow, not signed-out visitors.
-- Writes stay owner-only.

drop policy if exists "plans: owner only" on public.plans;
create policy "plans: owner writes" on public.plans
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "plans: approved followers read" on public.plans;
create policy "plans: approved followers read" on public.plans
  for select using (
    auth.uid() = user_id
    or (
      auth.uid() is not null
      and exists (
        select 1 from public.profiles p
        where p.id = user_id and p.visibility <> 'only_me'
      )
      and exists (
        select 1 from public.follows f
        where f.follower_id = auth.uid() and f.followee_id = user_id and f.status = 'approved'
      )
    )
  );
