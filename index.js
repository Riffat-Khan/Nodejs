console.log('Assignment_2');

// ********************** Question 1 ********************* \\
// Create a nodejs app and import express

var express = require('express');
const app = express();


// ********************** Question 2 ********************* \\
// Create middleware to verify the request contains Authorization key in headers

app.use( '/' ,(req, res, next)=> {
    const headers = req.headers;

    if (headers.authorization) next();
    else return res.json({
        message :'Key in authorization header is missing'
    });
});


// ********************** Question 3 ********************* \\
// Create middleware to verify that the Authorization key in headers contains only numbers with 4 even and 4 odd digits


app.use( '/' ,(req, res, next)=> {
    const headers = req.headers;
    const authorizedValue = headers.authorization;

    if (/^\d{8}$/.test(authorizedValue)) {
        const digitArray = authorizedValue.split('').map(Number); // Convert the key to an array of digits
        const evenCount = digitArray.filter(digit => digit % 2 === 0).length;
        const oddCount = digitArray.length - evenCount;
        if (evenCount === 4 && oddCount === 4) next();
    }

    else return res.json({
        message :'Key in authorization header is missing'
    });

});



// ********************** Question 4 ********************* \\
// Create a routes file to create routes for products, orders and customers module

// ====> It's in the 'controllers.js' file  <==== \\



// ********************** Question 5 ********************* \\
// Create get, post, put, delete requests for products, orders and customers

const db = require('/database');

// *************** requests for "products" table ***************\\

app.get('/products', (req, res) => {
    res.json(products);
}); 

app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
}); 

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const updatedProduct = req.body;
    res.json(updatedProduct);
});

app.delete('/products:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: "Product data deleted"});
}); 


// **************** requests for "orders" table ****************\\

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.post('/orders', (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.json(newOrder);
});

app.put('/orders:id', (req, res) => {
    const { id } = req.params;
    const updatedOrders = req.body;
    res.json(updatedOrders);
});

app.delete('/orders:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: "order data deleted"});
}); 


// ************** requests for "customers" table **************\\

app.get('/customers', (req, res) => {
    res.json(customers);
});

app.post('/customers', (req, res) => {
    const newCustomer = req.body;
    customers.push(newCustomer);
    res.json(newCustomer);
});

app.put('/customers:id', (req, res) => {
    const { id } = req.params;
    const updatedCustomer = req.body;
    res.json(updatedCustomer);
});

app.delete('/customers:id', (req, res) => {
    const { id } = req.params;
    res.send({ message: "customer data deleted"});
}); 


// ********************** Question 6 ********************* \\
// Create services for products, orders and customers
// ====> It's in the 'services.js' file  <==== \\



// ********************** Question 7 ********************* \\
// Create respective functions for create, read, update and delete in services and call them in the respective routes

// ====> It's in the 'Controllers' folder  <==== \\
