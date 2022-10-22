const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/',productController.getProduct)
router.get('/all',productController.getProducts)
router.get('/category',productController.getProductsByCategory)
router.post('/create',productController.createProduct)
router.post('/delete',productController.deleteProduct)
router.post('/edit',productController.editProduct)