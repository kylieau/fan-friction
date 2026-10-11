-- 0022: the follower's Unfollow and Cancel (found Oct 11, 2026, after 0020 was run).
-- Since 0016 the follower reads follows rows only through my_follows, and Postgres
-- also applies the select rule to a delete with a where clause, so a plain delete
-- from the follower's side matched nothing: unfollowing an approved follow and
-- cancelling a pending request silently did nothing. This function does both:
-- it clears the signed-in person's pending or approved row and hides a removed one
-- (a removed row is kept, R02). Safe to rerun.

create or replace function public.unfollow(target uuid)
returns void
language sql
security definer set search_path = public
as $$
  delete from public.follows
  where follower_id = auth.uid() and followee_id = target and status in ('pending', 'approved');
  update public.follows
  set follower_hidden = true
  where follower_id = auth.uid() and followee_id = target and status = 'removed';
$$;
grant execute on function public.unfollow(uuid) to authenticated;
