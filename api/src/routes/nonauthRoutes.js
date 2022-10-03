const express = require("express");
const router = express.Router();
const Comerce = require('./')
router.get("/comerces",(req,res)=>{
    res.json("Conected")
})

module.exports = router