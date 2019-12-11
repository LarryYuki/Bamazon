DROP DATABASE IF EXISTS Bamazon_db;
CREATE DATABASE Bamazon_db;
USE Bamazon_db;
CREATE TABLE products
(
    item_id INTEGER
    AUTO_INCREMENT NOT NULL,
 product_name VARCHAR
    (30) NOT NULL,
 department_name VARCHAR
    (30) NOT NULL,
 price numeric
    (3,2) NOT NULL,
 stock_quantity INTEGER
    (10) ,
  PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('chocolate', 'gocery', 5.00, 100);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('cookie', 'gocery', 8.00, 100);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('yummy cat treat', 'pet', 5.99, 100);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('apple juice', 'gocery', 1.20, 123);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('sugar', 'gocery', 4.99, 111);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('fish', 'seafood', 9.00, 50);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('candy', 'food', 2.00, 232);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('banana', 'gocery', .29, 222);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('cup', 'home', 6.00, 32);
    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES('hand wash', 'home', 5.99, 89);

    SELECT *
    FROM products;