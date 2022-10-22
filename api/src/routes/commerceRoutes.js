const express = require("express");
const router = express.Router();

router.get('/prueba',(req,res)=>{
    res.json({status:"ok"})
})

module.exports = router