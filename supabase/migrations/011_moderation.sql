
create table if not exists moderation_logs (
  id uuid primary key default uuid_generate_v4(),
  moment_id uuid references moments(id) on delete cascade,
  moderator_id uuid references auth.users(id),
  action text,
  reason text,
  created_at timestamptz default now()
);

alter table moderation_logs enable row level security;

drop policy if exists "Admins and moderators read logs" on moderation_logs;

create policy "Admins and moderators read logs"
  on moderation_logs for select
  using (exists (
    select 1 from user_roles ur
    where ur.user_id = auth.uid() and ur.role in ('admin','moderator')
  ));
