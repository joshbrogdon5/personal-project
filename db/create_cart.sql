insert into cart(user_id, active) values($1, true) returning *;