-- The Add a game / Add a show card (Kylie, Oct 21, 2026, late evening): a hand-added event that meets the inclusion
-- standard (a team or artist on file, a room on file, a date and a time, signed in) is sent for review with its
-- structured facts, so a row can be checked and seeded without re-typing. Existing rows keep nulls. Kylie's call
-- stays in `status` (pending, seeded, declined), as before.
alter table public.suggested_events
  add column if not exists team_id text,
  add column if not exists artist text,
  add column if not exists venue_id text,
  add column if not exists start_time text,
  add column if not exists opponent text,
  add column if not exists sport text,
  add column if not exists level text,
  -- 'form' for Add it yourself, 'quick-add' for the card.
  add column if not exists source text not null default 'form';
