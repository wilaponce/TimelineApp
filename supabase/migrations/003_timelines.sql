
create table if not exists timelines (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'My Timeline',
  description text,
  is_default boolean default false,
  is_public boolean default true,
  created_at timestamptz default now()
);

create index if not exists idx_timelines_user on timelines(user_id);

alter table timelines enable row level security;

drop policy if exists "Users manage own timelines" on timelines;
drop policy if exists "Public read public timelines" on timelines;

create policy "Users manage own timelines"
  on timelines for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Public read public timelines"
  on timelines for select
  using (is_public = true);
