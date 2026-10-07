-- Expected draws are kept per team AND building (Oct 7, 2026): NYCFC splits its
-- home games between Yankee Stadium and Citi Field, St. John's between its own
-- arena and Madison Square Garden. Adds the building to the key and clears the
-- old team-only rows; the nightly job writes the new ones. Safe to run again.
-- Paste into Supabase's SQL Editor and Run.

alter table public.expected_draws add column if not exists venue_id text not null default '';
alter table public.expected_draws drop constraint if exists expected_draws_pkey;
delete from public.expected_draws where venue_id = '';
alter table public.expected_draws add primary key (metro_id, team_id, venue_id, day_class, month);
