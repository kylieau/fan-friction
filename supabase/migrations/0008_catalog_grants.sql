-- The nightly job's role gets explicit rights on the catalog tables (Oct 6, 2026).
-- Supabase usually grants these by default; this makes sure, and is safe to run again.
-- Paste into Supabase's SQL Editor and Run.

grant usage on schema public to service_role;
grant all on public.events, public.event_results, public.weather_hours, public.weather_days,
  public.schedule_snapshots, public.attendance, public.expected_draws to service_role;
