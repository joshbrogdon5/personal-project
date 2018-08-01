select p.category, p.title, p.description, p.image, p.price, o.quantity, c.total
from cart c join orders o on c.id = o.cart_id
join products p on p.id = o.product_id;