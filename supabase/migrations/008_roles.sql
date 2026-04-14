
create table if not exists user_roles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade,
  role text check (role in ('admin','moderator','user')) default 'user',
  created_at timestamptz default now()
);

alter table user_roles enable row level security;

drop policy if exists "Admins manage roles" on user_roles;

create policy "Admins manage roles"
  on user_roles for all
  using (exists (
    select 1 from user_roles ur
    where ur.user_id = auth.uid() and ur.role = 'admin'
  ));
