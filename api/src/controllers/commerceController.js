const commerceService = require("../services/commerceService")


const getCommerces = async (req,res) => {
    try{
        const commerces = await commerceService.getCommerces()
        return res.json({status:"ok", data:commerces})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}
const getCommerce = async (req,res) => {
    try{
        const {id} = req.body
        const commerce = await commerceService.findCommerceById(id)
        return res.json({status:"ok", data:commerce})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}
const getCommercesByCategory = async (req,res) => {
    try{
        const {category} = req.body
        const commerce = await commerceService.getCommercesByCategory(category)
        return res.json({status:"ok", data:commerce})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}

const createCommerce = async (req,res) => {
    try{
        const commerce = req.body
        const newCommerce = commerceService.createCommerce(commerce)
        if(newCommerce) res.json({status:"ok"})
    }catch(e){
        res.status(500).json({status:"ok",error:"No se pudo crear el comercio"})
    }
}

module.exports = {
    createCommerce,
    getCommerce,
    getCommerces,
    getCommercesByCategory
}