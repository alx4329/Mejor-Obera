const express = require("express");
const router = express.Router();
const categoryService = require('../services/categoryService')

router.get('/',async(req,res)=>{
    try{
        const categories = await categoryService.getCategories()
        res.json({status:"ok",data:categories})
    }catch(e){
        res.status(500).json({status:"error",error:e.message||e})
    }

})

module.exports = router