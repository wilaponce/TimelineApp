
create table if not exists endorsements (
  id uuid primary key default uuid_generate_v4(),
  moment_id uuid references moments(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  unique (moment_id, user_id)
);

alter table endorsements enable row level security;
-- Enable RLS enable row level security;

-- Users can insert their own endorsements
drop policy if exists "Users endorse moments" on endorsements;
create policy "Users endorse moments"
  on endorsements
  for insert
  with check (auth.uid() = user_id);

-- Public can read endorsements
drop policy if exists "Public read endorsements" on endorsements;
create policy "Public read endorsements"
  on endorsements
  for select
  using (true);
