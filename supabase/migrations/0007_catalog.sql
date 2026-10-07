-- The catalog as shared truth (Oct 6, 2026; docs/archive/proposals/catalog-proposal-oct6.md).
-- Public data, public read: anyone can select; only the nightly job writes,
-- with the service-role key kept in GitHub's secrets (never in the app).
-- Each table keeps its full record in `data` (jsonb) beside a few indexed
-- columns, so the app's shapes can grow without a migration.
-- Paste into Supabase's SQL Editor and Run. Safe to run again.

-- ---------- events: the catalog (upcoming games from the feeds, plus the hand-seeded nights) ----------
create table if not exists public.events (
  id text primary key,
  metro_id text not null,
  date date not null,
  start text,
  kind text not null,
  title text not null,
  source_id text not null,
  captured_at timestamptz not null,
  data jsonb not null
);
create index if not exists events_metro_date on public.events (metro_id, date);

-- ---------- event_results: final score, announced crowd, game length ----------
create table if not exists public.event_results (
  event_id text primary key,
  metro_id text not null,
  date date not null,
  captured_at timestamptz not null,
  data jsonb not null
);
create index if not exists event_results_metro_date on public.event_results (metro_id, date);

-- ---------- weather_hours / weather_days: what the nightly job fetched ----------
create table if not exists public.weather_hours (
  metro_id text not null,
  venue_id text not null,
  date date not null,
  hour smallint not null,
  captured_at timestamptz not null,
  data jsonb not null,
  primary key (metro_id, venue_id, date, hour, captured_at)
);
create index if not exists weather_hours_metro_date on public.weather_hours (metro_id, date);

create table if not exists public.weather_days (
  metro_id text not null,
  date date not null,
  captured_at timestamptz not null,
  data jsonb not null,
  primary key (metro_id, date, captured_at)
);

-- ---------- schedule_snapshots: the read on file for each event at each nightly capture (stamps) ----------
create table if not exists public.schedule_snapshots (
  metro_id text not null,
  captured_on date not null,
  captured_at timestamptz not null,
  event_id text not null,
  date date not null,
  start text,
  data jsonb not null,
  primary key (metro_id, captured_on, event_id)
);
create index if not exists schedule_snapshots_event on public.schedule_snapshots (event_id);

-- ---------- attendance / expected_draws: past crowds and the medians the read sizes events by ----------
create table if not exists public.attendance (
  metro_id text not null,
  team_id text not null,
  date date not null,
  data jsonb not null,
  primary key (metro_id, team_id, date)
);

create table if not exists public.expected_draws (
  metro_id text not null,
  team_id text not null,
  day_class text not null,
  month smallint not null default 0,
  data jsonb not null,
  primary key (metro_id, team_id, day_class, month)
);

-- ---------- access: everyone reads, nobody but the job writes ----------
alter table public.events             enable row level security;
alter table public.event_results      enable row level security;
alter table public.weather_hours      enable row level security;
alter table public.weather_days       enable row level security;
alter table public.schedule_snapshots enable row level security;
alter table public.attendance         enable row level security;
alter table public.expected_draws     enable row level security;

do $$
declare t text;
begin
  foreach t in array array['events','event_results','weather_hours','weather_days','schedule_snapshots','attendance','expected_draws'] loop
    execute format('drop policy if exists "%1$s: anyone reads" on public.%1$s', t);
    execute format('create policy "%1$s: anyone reads" on public.%1$s for select using (true)', t);
  end loop;
end $$;

grant select on public.events, public.event_results, public.weather_hours, public.weather_days,
  public.schedule_snapshots, public.attendance, public.expected_draws to anon, authenticated;
