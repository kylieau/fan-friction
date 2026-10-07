-- Team schedules (Oct 7, 2026): one row per team the feeds carry, holding its whole
-- season, home and away, with scores once games are final. ESPN refuses calls made
-- from a phone's browser, so the nightly job reads the feeds and writes this table;
-- a team's page reads it. Everyone reads, only the job writes. Safe to run again.
-- Paste into Supabase's SQL Editor and Run.

create table if not exists public.team_schedules (
  team_id text primary key,
  metro_id text not null,
  captured_at timestamptz not null,
  data jsonb not null
);

alter table public.team_schedules enable row level security;
drop policy if exists "team_schedules: anyone reads" on public.team_schedules;
create policy "team_schedules: anyone reads" on public.team_schedules for select using (true);
grant select on public.team_schedules to anon, authenticated;
grant all on public.team_schedules to service_role;
