-- Fan/Friction: two follow fixes (Kylie's build notes 2, Oct 10, 2026: R01, R02).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- R01. The insert rule from 0011 let a follower write their own request with
-- `auto_approved = true`. Then, if the person followed ever left "Anyone", the row was
-- re-asked like an app-made approval, but until then it read as app-approved. Now a
-- request can only be inserted as pending and not auto-approved.
--
-- R02. Followers the app approved on its own (before every follow needed approval) kept
-- their access as long as the owner stayed on "Anyone". Kylie's choice: ask them again
-- now. Every row still marked `auto_approved` goes back to pending and shows up in the
-- owner's request list. Rows approved by hand after 0011 are not touched.
-- (0011 could not tell a hand approval made while on "Anyone" from an app one, so a
-- follower approved by hand before Oct 10 may be re-asked once. Approve them again.)

-- R01
drop policy if exists "follows: follower asks" on public.follows;
create policy "follows: follower asks" on public.follows
  for insert with check (auth.uid() = follower_id and status = 'pending' and auto_approved = false);

-- R02, once: a second run finds nothing to change.
update public.follows
set status = 'pending', auto_approved = false
where status = 'approved' and auto_approved = true;
