-- Fan/Friction: "keep this one private" on a single entry (Kylie's build notes 2, Oct 10, 2026, section 4).
-- Paste into Supabase's SQL Editor and Run. Safe to run more than once.
--
-- The app writes `private: true` inside the entry's data. A trigger copies it into a real
-- column, and the card view everyone else reads leaves those entries out. The owner's own
-- reads (the entries table) are untouched. Requires 0017 (entry_cards).

alter table public.entries add column if not exists private boolean not null default false;

create or replace function public.entries_private_from_data()
returns trigger
language plpgsql
as $$
begin
  new.private := coalesce((new.data ->> 'private')::boolean, false);
  return new;
end;
$$;

drop trigger if exists entries_private on public.entries;
create trigger entries_private before insert or update on public.entries
  for each row execute function public.entries_private_from_data();

-- Rows written before the trigger existed.
update public.entries
set private = coalesce((data ->> 'private')::boolean, false)
where private is distinct from coalesce((data ->> 'private')::boolean, false);

create or replace view public.entry_cards as
  select
    e.user_id,
    e.id,
    e.when_sort,
    e.when_precision,
    e.title,
    e.kind,
    e.metro_id,
    e.event_id,
    e.data -> 'when' as "when",
    e.data ->> 'venue' as venue,
    e.data -> 'stamp' as stamp,
    e.data ->> 'review' as review,
    (e.data ->> 'away')::boolean as away,
    (e.data ->> 'neutralSite')::boolean as neutral_site,
    (e.data ->> 'belowFloor')::boolean as below_floor,
    (e.data ->> 'inMetro')::boolean as in_metro
  from public.entries e
  where public.can_view(e.user_id) and not e.private;
grant select on public.entry_cards to anon, authenticated;
