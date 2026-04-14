
insert into timelines (user_id, title, is_default)
select u.id, 'My Timeline', true
from auth.users u
where not exists (
  select 1 from timelines t
  where t.user_id = u.id and t.is_default = true
);

update moments m
set timeline_id = t.id
from timelines t
where m.timeline_id is null
  and t.user_id = m.user_id
  and t.is_default = true;
