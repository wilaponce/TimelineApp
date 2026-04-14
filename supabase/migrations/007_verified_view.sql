
create or replace view verified_moments as
select
  m.id,
  m.title,
  m.content,
  m.verification_score,
  m.created_at,
  m.user_id,
  t.id as timeline_id,
  t.title as timeline_title
from moments m
join timelines t on t.id = m.timeline_id
where m.is_verified = true;
