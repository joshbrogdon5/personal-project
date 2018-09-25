select p.id, p.post_title, p.post_content, p.post_likes, p.comment, p.post_comment_count, p.image, u.user_name, u.picture
from posts p join users u on p.user_id = u.id
order by p.id