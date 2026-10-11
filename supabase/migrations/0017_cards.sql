-- Fan/Friction: others see cards, not whole rows (Kylie's build notes 2, Oct 10, 2026: R05, R06, Section 4).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- R05. An approved follower (or, on "Anyone", any visitor) could read an entry's whole `data`
-- over the API: outcome, starter, promo, notable, setlist, TV, everything but the private
-- pair. Now the `entries` table is readable by its owner only, and everyone else reads
-- `entry_cards`: title, date, venue, city, kind, the stamp (the read) and the review. The
-- review is the field a person writes for their followers (Kylie, Oct 10); who they went with
-- and the private note never leave `entry_notes`.
--
-- Section 4. A profile card is likewise a view, `profile_cards`: id, handle and name only.
-- No avatar, home city or visibility setting for anyone but the owner.
--
-- R06. `link_off`: a switch in Settings. When on, the profile link shows "No one here" to
-- everyone except the owner and people already linked by a follow in either direction (who
-- would otherwise lose the names in their lists and feed).

-- ---------- profiles ----------
alter table public.profiles add column if not exists link_off boolean not null default false;

create or replace function public.follow_linked(a uuid, b uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select a is not null and exists (
    select 1 from public.follows f
    where (f.follower_id = a and f.followee_id = b) or (f.follower_id = b and f.followee_id = a)
  );
$$;

drop policy if exists "profiles: anyone reads the card" on public.profiles;
drop policy if exists "profiles: view own or shared" on public.profiles;
drop policy if exists "profiles: owner reads" on public.profiles;
create policy "profiles: owner reads" on public.profiles
  for select using (auth.uid() = id);

create or replace view public.profile_cards as
  select p.id, p.handle, p.display_name
  from public.profiles p
  where p.handle is not null
    and (auth.uid() = p.id or not p.link_off or public.follow_linked(auth.uid(), p.id));
grant select on public.profile_cards to anon, authenticated;

-- ---------- entries ----------
drop policy if exists "entries: view own or shared" on public.entries;
drop policy if exists "entries: owner reads" on public.entries;
create policy "entries: owner reads" on public.entries
  for select using (auth.uid() = user_id);

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
    (e.data ->> 'inMetro')::boolean as in_metro
  from public.entries e
  where public.can_view(e.user_id);
grant select on public.entry_cards to anon, authenticated;
