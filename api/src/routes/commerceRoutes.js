const express = require("express");
const router = express.Router();
const commerceController = require('../controllers/commerceController')

router.get('/',commerceController.getCommerce)
router.get('/all',commerceController.getCommerces)
router.get('/category',commerceController.getCommercesByCategory)
router.post('/create',commerceController.createCommerce)

router.get('/prueba',(req,res)=>{
    res.json({status:"ok"})
})

module.exports = router