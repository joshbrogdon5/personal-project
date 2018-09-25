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

create table posts (
    id serial primary key,
    user_id integer references users(id),
    post_title varchar(100),
    post_content varchar(500),
    post_likes integer default 0,
    comment varchar(250),
    post_comment_count int default 0,
    image text
);

-- data info (products): 

insert into products(category, title, description, image, price) values('Protein', 'Gold Standard 100% Whey', 'This is an award winning protein which has won supplement of the year for the past 10 years. This protein contains 24 grams of protein, 5.5 grams of BCAAs, 4 grams of glutamine and glutamic acid.', 'https://store.bbcomcdn.com/images/store/skuimage/sku_OPT2620008/image_skuOPT2620008_largeImage_X_450_white.jpg', 29.98);
insert into products(category, title, description, image, price) values('Protein', 'Syntha-6', 'This popular protein contains 22 grams of an Ultra-Premium Blended Protein Formula for Use anytime, day or night', 'https://store.bbcomcdn.com/images/store/skuimage/sku_BSN5330074/image_skuBSN5330074_largeImage_X_450_white.jpg', 29.58);
insert into products(category, title, description, image, price) values('Protein', 'Signature 100% Whey Protein', 'This protein contains 25g of Muscle-Building Whey Protein, made up of a blend of 3 types of Whey for ultimate muscle growth and recovery.', 'https://store.bbcomcdn.com/images/store/skuimage/sku_BBCOM5100065/image_skuBBCOM5100065_largeImage_X_450_white.jpg', 27);
insert into products(category, title, description, image, price) values('Protein', 'Pro JYM', 'This pure high-quality protein delivers 24g of protein in every scoop, with no added amino acids or filler nutrients. It contains a pure blend of High-Quality Proteins in exact amounts to maximize growth, recovery, and repair.', 'https://store.bbcomcdn.com/images/store/skuimage/sku_JYM4910056/image_skuJYM4910056_largeImage_X_450_white.jpg', 35);
insert into products(category, title, description, image, price) values('Protein', 'ISO100', 'This protein contains Hydrolyzed 100% Whey Protein Isolate, with a delicious, ultra-pure, fast-absorbing whey protein isolate to support to support muscle growth.', 'https://store.bbcomcdn.com/images/store/skuimage/sku_DYM2230006/image_skuDYM2230006_largeImage_X_450_white.jpg', 30);
insert into products(category, title, description, image, price) values('Protein', 'NITRO-TECH 100% Whey Gold', 'This incredible pure protein powder featuring whey protein peptides and whey protein isolate serves up to 24g of ultra-premium micro-filtered protein per scoop.', 'https://store.bbcomcdn.com/images/store/skuimage/sku_MT4630077/image_skuMT4630077_largeImage_X_450_white.jpg', 29);
insert into products(category, title, description, image, price) values('Protein', 'Stacked Protein', 'Contains 25g of protein complex with milkshake taste, with 5g of BCAAs and 5g of glutamine to fuel your results!', 'https://store.bbcomcdn.com/images/store/skuimage/sku_EVL4320451/image_skuEVL4320451_largeImage_X_450_white.jpg', 16);
insert into products(category, title, description, image, price) values('Protein', 'Gold Standard 100% Casein', 'A night-time use protein powder for building muscle. Ideal for between meals and before bed to feed muscles and fuel recovery.', 'https://store.bbcomcdn.com/images/store/skuimage/sku_OPT239/image_skuOPT239_largeImage_X_450_white.jpg', 33);