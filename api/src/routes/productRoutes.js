const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/',productController.getProduct)
router.get('/all',productController.getProducts)
router.get('/all/:id', productController.getProductsByCommerce)
router.get('/category',productController.getProductsByCategory)
router.post('/create',productController.createProduct)
router.post('/delete/:id',productController.deleteProduct)
router.post('/edit',productController.editProduct)

module.exports = router