// ********************** Question 4 ********************* \\
// Create a routes file to create routes for products, orders and customers module

const express = require('express');
const router = express.Router();

router.use('/products', (req, res) => {
  res.send('List of products');
});


router.use('/orders', (req, res) => {
  res.send('List of orders');
});


router.use('/customers', (req, res) => {
  res.send('List of customers');
});

module.exports = router;
