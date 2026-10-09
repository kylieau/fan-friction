-- Fan/Friction: a declined follow request does not read as a decline (Kylie's build notes, Oct 9, 2026, privacy 2 and 7).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- Before this, declining deleted the row, so the requester's button went back to "Follow" and they could
-- tell. Now the row stays with status "declined": the requester still sees "Requested", nothing opens,
-- and the person asked can approve it later from their Followers list if they change their mind.

alter table public.follows drop constraint if exists follows_status_check;
alter table public.follows add constraint follows_status_check check (status in ('pending', 'approved', 'declined'));

-- The followee may move a row between pending, approved and declined (the existing update policy allows
-- any status change by the followee). The follower may only ever insert "pending" (0011) or delete.
