-- Profile handles and public profile cards. Paste into Supabase's SQL Editor and Run.
-- Safe to run more than once.
--
-- A handle is the short name in a profile link: fan-friction.vercel.app/p/kylie-au.
-- New accounts get one suggested from their name; it can be changed in Edit profile.
-- Anyone may read a profile's name, avatar, handle and visibility, so a Follow button
-- can exist. Nights stay guarded by the owner's visibility switch (unchanged).

alter table public.profiles add column if not exists handle text;
create unique index if not exists profiles_handle_key on public.profiles (lower(handle));
alter table public.profiles drop constraint if exists profiles_handle_shape;
alter table public.profiles add constraint profiles_handle_shape
  check (handle is null or handle ~ '^[a-z0-9]([a-z0-9-]{1,30}[a-z0-9])?$');

-- Turn "Kylie Au" into "kylie-au"; add -2, -3 ... if taken.
create or replace function public.suggest_handle(name text, fallback text)
returns text
language plpgsql
security definer set search_path = public
as $$
declare
  base text;
  candidate text;
  n int := 1;
begin
  base := lower(regexp_replace(coalesce(name, ''), '[^a-zA-Z0-9]+', '-', 'g'));
  base := trim(both '-' from base);
  if length(base) < 3 then base := fallback; end if;
  base := left(base, 28);
  candidate := base;
  while exists (select 1 from public.profiles where lower(handle) = candidate) loop
    n := n + 1;
    candidate := base || '-' || n;
  end loop;
  return candidate;
end;
$$;

-- New sign-ups get a handle straight away.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  nm text;
begin
  nm := coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name');
  insert into public.profiles (id, display_name, avatar_url, handle)
  values (
    new.id,
    nm,
    new.raw_user_meta_data ->> 'avatar_url',
    public.suggest_handle(nm, 'fan-' || left(replace(new.id::text, '-', ''), 8))
  );
  return new;
end;
$$;

-- Existing accounts without a handle get one now.
update public.profiles p
set handle = public.suggest_handle(p.display_name, 'fan-' || left(replace(p.id::text, '-', ''), 8))
where p.handle is null;

-- Profile cards are readable by anyone; nights are not (their policy is unchanged).
drop policy if exists "profiles: view own or shared" on public.profiles;
create policy "profiles: anyone reads the card" on public.profiles
  for select using (true);

-- Anyone may look up a profile by handle, signed in or not; a visitor may read
-- "anyone" nights (policy already allows it through can_view).
grant select on public.follows to anon;
