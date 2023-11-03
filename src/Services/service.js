// ********************** Question 6 ********************* \\
// Create services for products, orders and customers

const db = require('../../database');

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
