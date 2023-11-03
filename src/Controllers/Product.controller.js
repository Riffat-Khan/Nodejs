const express = require('express');
const router = express.Router();
const productRoute = require('./Product.service');

router.get('/products', productRoute.getProducts)
router.post('/products', productRoute.addProducts)
router.put('/products/:id', productRoute.updateProducts)
router.delete('/products/:id', productRoute.deleteProducts)

module.exports = router;