const express = require("express");
const router = express.Router();
const commerceController = require('../controllers/commerceController')

router.get('/:id',commerceController.getCommerce)
router.get('/all',commerceController.getCommerces)
router.get('/cuit',commerceController.getCommerceByCuit)
router.post('/create',commerceController.createCommerce)
router.post('/uploadImage',commerceController.imageUpload)
router.post('/edit/:id',commerceController.editCommerce)



module.exports = router