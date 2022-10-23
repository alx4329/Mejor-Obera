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
        res.json({status:"error",error:e.message||e})
    }
}
const getCommerceByCuit = async (req,res) => {
    try{
        const {cuitComercio} = req.body
        const commerce = await commerceService.findCommerceByCuit(cuitComercio)
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
        const newCommerce = await commerceService.createCommerce(commerce)
        if(newCommerce) res.json({status:"ok"})
    }catch(e){
        res.status(500).json({status:"ok",error:"No se pudo crear el comercio"})
    }
}
const imageUpload = async(req,res)=>{
    try{
        const {userId} = req
        const image = req?.files?.image;
        if(!image) return res.json(400).json({status:"error", error:"must send an image"})
        const commerce = await commerceService.findCommerceByUser(userId)
        if(!commerce) return res.json(404).json({status:"error", error:"Comercio no encontrado"})
        const uploaded = await commerceService.uploadLogo(commerce._id,image)
        res.json({status:"ok", message:"image added successfully",data:{imageUrl:uploaded}})
    }catch(e){
        res.status(500).json({status:"error", error:e.message||e});
    }
}
module.exports = {
    createCommerce,
    getCommerce,
    getCommerces,
    getCommercesByCategory,
    getCommerceByCuit,
    imageUpload
}