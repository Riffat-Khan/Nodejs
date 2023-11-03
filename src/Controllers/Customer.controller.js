const express = require('express');
const router = express.Router();
const customerRoute = require('./Customer.service');

router.get('/products', customerRoute.getCustomers)
router.post('/products', customerRoute.addCustomers)
router.put('/products/:id', customerRoute.updateCustomers)
router.delete('/products/:id', customerRoute.deleteCustomers)

module.exports = router;