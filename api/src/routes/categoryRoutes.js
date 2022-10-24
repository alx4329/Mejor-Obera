const express = require("express");
const router = express.Router();
const Category = require('../schemas/Category')

router.get('/',async(req,res)=>{
    try{
        const categories = await Category.find({})
        res.json({status:"ok",data:categories})
    }catch(e){
        res.status(500).json({status:"error",error:e.message||e})
    }

})

module.exports = router