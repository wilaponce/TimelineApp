
insert into storage.buckets (id, name, public)
values ('moment-media', 'moment-media', true)
on conflict do nothing;

drop policy if exists "Public read media" on storage.objects;

create policy "Public read media"
  on storage.objects for select
  using (bucket_id = 'moment-media');
