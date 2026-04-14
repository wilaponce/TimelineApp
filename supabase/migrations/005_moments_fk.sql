
alter table moments drop constraint if exists fk_moments_timeline;

alter table moments
  add constraint fk_moments_timeline
  foreign key (timeline_id)
  references timelines(id)
  on delete cascade;

create index if not exists idx_moments_timeline on moments(timeline_id);

alter table moments enable row level security;

drop policy if exists "Public read verified moments" on moments;
drop policy if exists "Users manage own moments" on moments;

create policy "Public read verified moments"
  on moments for select
  using (is_verified = true);

create policy "Users manage own moments"
  on moments for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
