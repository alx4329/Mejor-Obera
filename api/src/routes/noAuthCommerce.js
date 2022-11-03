const express = require("express");
const router = express.Router();
const commerceController = require('../controllers/commerceController')

router.get('/category',commerceController.getAllByCategory)
router.get('/all',commerceController.getCommerces)
router.get('/:id',commerceController.getCommerce)

module.exports = router