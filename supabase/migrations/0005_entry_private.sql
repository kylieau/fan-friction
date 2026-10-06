-- Who you went with joins the private note (Oct 6, 2026). Both live in entry_notes,
-- which only the owner can read, so neither ever rides along with an entry that an
-- approved follower can see. Paste into Supabase's SQL Editor and Run. Safe to run again.

alter table public.entry_notes add column if not exists with_whom text;
alter table public.entry_notes alter column note drop not null;
