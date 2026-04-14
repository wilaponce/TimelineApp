
create table if not exists moments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  timeline_id uuid,
  title text not null,
  content text,
  verification_score int default 0,
  is_verified boolean default false,
  created_at timestamptz default now()
);
