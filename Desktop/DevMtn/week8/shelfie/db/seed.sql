CREATE TABLE products(
    product_id SERIAL PRIMARY KEY NOT NULL,
    product_name varchar (155) NOT NULL,
    product_price INTEGER NOT NULL
);

INSERT INTO products (product_name, product_price)
VALUES ('Xbox One', 300), ('PS4', 300), ('Toothbrush', 4);