create table users(
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    auth_id text,
    picture text
    
);

create table products(
    id serial primary key,
    category varchar(80),
    title varchar(180),
    description varchar(250),
    image text,
    price integer
);

create table cart(
    id serial primary key,
    user_id integer references users(id),
    active boolean,
    total integer
);

create table orders(
    cart_id integer references cart(id),
    product_id integer references products(id),
    quantity integer
);