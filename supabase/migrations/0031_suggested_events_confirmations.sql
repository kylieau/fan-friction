-- Step 2 of the Add a game / Add a show card (Kylie, Oct 21, 2026, late evening): how a fan-added event becomes
-- everyone's. `status` keeps Kylie's call and the automatic ones: pending → confirmed (a second person) or approved
-- (Kylie sets it by hand) → the nightly job writes it to the catalog as a 'fan' event and records that event's id in
-- catalog_event_id; declined stays out; seeded (a hand seed, as before) is left alone. A feed carrying the same game
-- later wins over the fan row at the nightly run, as a seller's listing does.
alter table public.suggested_events
  add column if not exists confirmed_by text,
  add column if not exists confirmed_at timestamptz;
