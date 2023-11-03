const express = require('express');
const router = express.Router();
const orderRoute = require('./Order.service');

router.get('/products', orderRoute.getOrders)
router.post('/products', orderRoute.addOrders)
router.put('/products/:id', orderRoute.updateOrders)
router.delete('/products/:id', orderRoute.deleteOrders)

module.exports = router;