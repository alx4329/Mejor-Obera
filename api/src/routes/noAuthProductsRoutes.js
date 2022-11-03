const express = require("express");
const router = express.Router();
const productController= require('../controllers/productController')
router.get('/',productController.getAllByCategory)
router.get('/all',productController.getProducts)
router.get('/commerce/:id',productController.getProductsByCommerce)
module.exports = router