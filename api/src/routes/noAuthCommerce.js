const express = require("express");
const router = express.Router();
const commerceController = require('../controllers/commerceController')

router.get('/category',commerceController.getCommercesByCategory)
router.get('/all',commerceController.getAllByCategory)
module.exports = router