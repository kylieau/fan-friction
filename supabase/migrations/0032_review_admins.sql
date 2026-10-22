-- The review queue in the app (Kylie, Oct 21, 2026, late evening: "i don't want this avenue [the dashboard] for
-- approving or declining... i'm fine with an admin marker and access rule"). An admin account reads every review row
-- and sets its status; everyone else keeps their own rows only. Only the service role (or SQL here) names an admin.
--
-- >>> Before running: replace YOUR_EMAIL below with the email of the account that signs in to Fan/Friction. <<<

create table if not exists public.review_admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.review_admins enable row level security;
-- No app policy at all: the app never reads or writes this table directly; the function below checks it.
grant select on public.review_admins to authenticated;
grant all on public.review_admins to service_role;

create or replace function public.is_review_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.review_admins where user_id = auth.uid());
$$;
grant execute on function public.is_review_admin() to authenticated;

drop policy if exists "suggested_events: admin reads all" on public.suggested_events;
create policy "suggested_events: admin reads all" on public.suggested_events
  for select using (public.is_review_admin());
drop policy if exists "suggested_events: admin sets status" on public.suggested_events;
create policy "suggested_events: admin sets status" on public.suggested_events
  for update using (public.is_review_admin()) with check (public.is_review_admin());

-- The one admin: Kylie's account, by its sign-in email.
insert into public.review_admins (user_id)
select id from auth.users where email = 'YOUR_EMAIL'
on conflict (user_id) do nothing;
