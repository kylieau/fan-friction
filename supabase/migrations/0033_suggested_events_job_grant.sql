-- The nightly job's rights on the review rows (Oct 22, 2026). The Oct 22 run logged "permission denied for table
-- suggested_events" in every city: this project gives the job's role nothing by default (0008, 0010 and 0032 grant it
-- table by table), and the review rows never got theirs. The job reads pending, confirmed and approved rows, marks a
-- row confirmed when a second person submitted the same event, and records the catalog event a row became.
-- Paste into Supabase's SQL Editor and Run. Safe to run again.

grant usage on schema public to service_role;
grant select, update on public.suggested_events to service_role;
