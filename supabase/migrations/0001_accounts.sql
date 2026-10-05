-- Fan/Friction accounts: first setup. Paste into Supabase's SQL Editor and Run.
-- Safe to run more than once: anything that already exists is left alone.
--
-- What it makes:
--   profiles     one row per signed-in person: display name, avatar, visibility switch, home city
--   nights       nights marked "I was there" (the log). The stamp lives inside `data`.
--   night_notes  the private one-line note, kept apart so it can never be shown to anyone else
--   plans        upcoming nights saved with "Save this night". Always private.
--   settings     small per-account settings (You order, hidden pre-filled nights)
--   follows      who follows whom. A slot for Following; nothing reads it yet.
--
-- Privacy: every table has row level security on. You can read and change only your
-- own rows. Nights and profiles can be seen by others only when the owner's
-- visibility switch says "approved" (and the viewer is an approved follower) or "anyone".
-- Plans, notes and settings are never visible to anyone else.

-- ---------- profiles ----------
do $$ begin
  create type public.visibility as enum ('only_me', 'approved', 'anyone');
exception when duplicate_object then null; end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_url text,
  visibility public.visibility not null default 'only_me',
  home_metro_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Make a profile the moment someone signs up, named from Google when it offers one.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'),
    new.raw_user_meta_data ->> 'avatar_url'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- follows (slot for later) ----------
create table if not exists public.follows (
  follower_id uuid not null references auth.users (id) on delete cascade,
  followee_id uuid not null references auth.users (id) on delete cascade,
  status text not null default 'pending' check (status in ('pending', 'approved')),
  created_at timestamptz not null default now(),
  primary key (follower_id, followee_id),
  check (follower_id <> followee_id)
);

-- ---------- helpers ----------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

-- True when the signed-in viewer may see `owner`'s shared rows.
create or replace function public.can_view(owner uuid)
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select
    owner = auth.uid()
    or exists (
      select 1 from public.profiles p
      where p.id = owner
        and (
          p.visibility = 'anyone'
          or (
            p.visibility = 'approved'
            and auth.uid() is not null
            and exists (
              select 1 from public.follows f
              where f.follower_id = auth.uid()
                and f.followee_id = owner
                and f.status = 'approved'
            )
          )
        )
    );
$$;

-- ---------- nights (the log) ----------
create table if not exists public.nights (
  id text not null,
  user_id uuid not null references auth.users (id) on delete cascade,
  when_sort text not null,          -- YYYY-MM-DD, or the sortable stand-in for a rough date
  when_precision text not null,     -- day | month | year | span | unknown
  title text not null,
  kind text not null,               -- game | show | festival | live-broadcast | special
  metro_id text,
  event_id text,
  data jsonb not null,              -- the full night as the app stores it, minus the private note
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);
create index if not exists nights_user_when on public.nights (user_id, when_sort desc);

drop trigger if exists nights_updated_at on public.nights;
create trigger nights_updated_at before update on public.nights
  for each row execute function public.set_updated_at();

-- ---------- private notes ----------
create table if not exists public.night_notes (
  user_id uuid not null references auth.users (id) on delete cascade,
  night_id text not null,
  note text not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, night_id),
  foreign key (user_id, night_id) references public.nights (user_id, id) on delete cascade
);

-- ---------- plans (saved upcoming nights) ----------
create table if not exists public.plans (
  id text not null,
  user_id uuid not null references auth.users (id) on delete cascade,
  date text not null,
  metro_id text not null,
  event_id text,
  title text not null,
  venue text,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  primary key (user_id, id)
);

-- ---------- settings ----------
create table if not exists public.settings (
  user_id uuid primary key references auth.users (id) on delete cascade,
  you_order text not null default 'plans-first',
  hidden_seed_ids text[] not null default '{}',
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

drop trigger if exists settings_updated_at on public.settings;
create trigger settings_updated_at before update on public.settings
  for each row execute function public.set_updated_at();

-- ---------- row level security ----------
alter table public.profiles    enable row level security;
alter table public.nights      enable row level security;
alter table public.night_notes enable row level security;
alter table public.plans       enable row level security;
alter table public.settings    enable row level security;
alter table public.follows     enable row level security;

-- profiles: readable when the owner allows it; only the owner edits
drop policy if exists "profiles: view own or shared" on public.profiles;
create policy "profiles: view own or shared" on public.profiles
  for select using (public.can_view(id));
drop policy if exists "profiles: owner updates" on public.profiles;
create policy "profiles: owner updates" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- nights: readable when the owner allows it; only the owner writes
drop policy if exists "nights: view own or shared" on public.nights;
create policy "nights: view own or shared" on public.nights
  for select using (public.can_view(user_id));
drop policy if exists "nights: owner inserts" on public.nights;
create policy "nights: owner inserts" on public.nights
  for insert with check (auth.uid() = user_id);
drop policy if exists "nights: owner updates" on public.nights;
create policy "nights: owner updates" on public.nights
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "nights: owner deletes" on public.nights;
create policy "nights: owner deletes" on public.nights
  for delete using (auth.uid() = user_id);

-- notes, plans, settings: owner only, always
drop policy if exists "night_notes: owner only" on public.night_notes;
create policy "night_notes: owner only" on public.night_notes
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "plans: owner only" on public.plans;
create policy "plans: owner only" on public.plans
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "settings: owner only" on public.settings;
create policy "settings: owner only" on public.settings
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- follows: either side can see the row; the follower asks; the followee approves or removes
drop policy if exists "follows: both sides view" on public.follows;
create policy "follows: both sides view" on public.follows
  for select using (auth.uid() = follower_id or auth.uid() = followee_id);
drop policy if exists "follows: follower asks" on public.follows;
create policy "follows: follower asks" on public.follows
  for insert with check (auth.uid() = follower_id);
drop policy if exists "follows: followee approves" on public.follows;
create policy "follows: followee approves" on public.follows
  for update using (auth.uid() = followee_id) with check (auth.uid() = followee_id);
drop policy if exists "follows: either side removes" on public.follows;
create policy "follows: either side removes" on public.follows
  for delete using (auth.uid() = follower_id or auth.uid() = followee_id);

-- Signed-out visitors may read only what an owner has set to "anyone" (public pages later).
grant usage on schema public to anon, authenticated;
grant select on public.profiles, public.nights to anon;
grant select, insert, update, delete on all tables in schema public to authenticated;
