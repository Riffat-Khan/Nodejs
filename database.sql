CREATE DATABASE e_commerce;
USE e_commerce;

CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customerName varchar(255),
    email varchar(255) NOT NULL,
    phone INT NOT NULL ,
    password varchar(255) NOT NULL,
    address varchar(255),
    country varchar(255)
);


INSERT INTO customers ( customerName, email , phone, password , address, country) 
VALUES ('riffat' , 'riffat@gmail.com' , 1234567 , '123riffat' , 'lahore cantt' , 'pakistan' ),
('ishmal' , 'ishmal@gmail.com' , 12532567 , 'ishmal1234' , 'askari' , 'india' ),
('iqra' , 'iqra@gmail.com' , 232334567 , 'iqra@123' , 'dha', 'pakistan' ),
('aqsa' , 'aqsa@gmail.com' , 35674567 , 'aqsa@678' , 'johar town', 'turkey' ),
('anam' , 'anam@gmail.com' , 146767 , 'anam456' , 'qenchi' , 'pakistan' ),
('dawood' , 'dawood@gmail.com' , '12346' , 1234 , ' wapda town', 'turkey' ),
('daniyal' , 'daniyal@gmail.com' , 1234, '12344O595' , ' township', 'pakistan' ),
('ali' , 'ali@gmail.com' , 12345567 , 'ali@1233' , 'quenchi' ,'turkey' ),
('aliyan' , 'aliyan@gmail.com' , 1234535667 , '12345' , 'lahore cantt' , 'india' ),
('rohan' , 'rohan@gmail.com' , 1234537 , 'rohan@12345' , 'lahore cantt' , 'pakistan' );

CREATE TABLE products(
    id INT AUTO_INCREMENT PRIMARY KEY,
    productName varchar(255) NOT NULL,
    price FLOAT NOT NULL
);

INSERT INTO products(productName, price)
VALUES ( 'watch' , 5000 ),
( 'watch' , 5000 ),
( 'shirt' , 3000 ),
( 'kurta' , 2500 ),
( 'sunglasses' , 1000 ),
( 'trouser' , 800 ),
( 'shawl' , 6000 ),
( 'earpods' , 3000 ),
( 'perfume' , 8000 ),
( 'ring' , 500 );

CREATE TABLE orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderAmount INT NOT NULL,
    customerID INT NOT NULL,
    FOREIGN KEY (customerID) REFERENCES customers(id)
);

INSERT INTO orders ( orderAmount , customerID)
VALUES ( 10000 , 4), ( 5000 , 1), ( 800 , 3), ( 1000 , 6),
( 3000 , 5), ( 3500 , 2), ( 6200 , 7), ( 15000 , 9), ( 7000 , 8), ( 10000 , 10);
