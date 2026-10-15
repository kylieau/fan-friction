-- Fan/Friction: drop the database copy of past games' crowds (Kylie, Oct 15, 2026: "get rid of the game copy
-- since the app never reads it"). Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- The nightly job wrote every team's past home games into `attendance`; nothing ever read them. The games
-- stay in the repo under data/attendance/, where scripts/attendance-calibrate.mjs turns them into the
-- expected draws (still saved in `expected_draws`). The nightly job no longer writes this table.

drop table if exists public.attendance;
