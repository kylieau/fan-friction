-- Rename the log tables to match the app's words (Oct 5, 2026): an entry is one
-- event in someone's log. Paste into Supabase's SQL Editor and Run. Safe to run again.
--
--   nights       -> entries
--   night_notes  -> entry_notes   (column night_id -> entry_id)
--
-- Policies and row level security move with the tables. The can_view function is unchanged.

do $$ begin
  if to_regclass('public.nights') is not null then
    alter table public.nights rename to entries;
  end if;
  if to_regclass('public.night_notes') is not null then
    alter table public.night_notes rename to entry_notes;
  end if;
end $$;

do $$ begin
  if exists (select 1 from information_schema.columns where table_schema = 'public' and table_name = 'entry_notes' and column_name = 'night_id') then
    alter table public.entry_notes rename column night_id to entry_id;
  end if;
end $$;

alter index if exists public.nights_user_when rename to entries_user_when;

-- Triggers keep working after a rename; give them matching names.
do $$ begin
  if exists (select 1 from pg_trigger where tgname = 'nights_updated_at') then
    alter trigger nights_updated_at on public.entries rename to entries_updated_at;
  end if;
end $$;

-- Policy names are only labels; rename them so the dashboard reads right.
do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname = 'public' and tablename = 'entries' and policyname like 'nights:%' loop
    execute format('alter policy %I on public.entries rename to %I', r.policyname, replace(r.policyname, 'nights:', 'entries:'));
  end loop;
  for r in select policyname from pg_policies where schemaname = 'public' and tablename = 'entry_notes' and policyname like 'night_notes:%' loop
    execute format('alter policy %I on public.entry_notes rename to %I', r.policyname, replace(r.policyname, 'night_notes:', 'entry_notes:'));
  end loop;
end $$;
