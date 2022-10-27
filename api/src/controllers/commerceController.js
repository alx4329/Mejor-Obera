const commerceService = require("../services/commerceService")
const categoryService  = require('../services/categoryService')

const getCommerces = async (req,res) => {
    try{
        const commerces = await commerceService.getCommerces()
        return res.json({status:"ok", data:commerces})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}
const getAllByCategory = async (req,res) => {
    try{
        const commerces = await commerceService.getCommerces()
        const categories = await categoryService.getCategories()
        const categorizedCommerces = {}
        categories.forEach(cat=>{
            const filtered = commerces.filter(commerce=>commerce.categorias.includes(cat.nombre))
            categorizedCommerces[cat._id]={
                categoria:cat.nombre,
                commerces: filtered
            }
        })
        return res.json({status:"ok", data:categorizedCommerces})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}
const getCommerce = async (req,res) => {
    try{
        const {id} = req.params
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
        console.log(req)
        const {commerceId} = req.body
        const image = req?.files?.image;
        console.log(image)
        if(!image) return res.status(400).json({status:"error", error:"must send an image"})
        console.log("aca pasé")
        const commerce = await commerceService.findCommerceById(commerceId)
        if(!commerce) return res.json(404).json({status:"error", error:"Comercio no encontrado"})
        const uploaded = await commerceService.uploadLogo(commerce._id,image)
        res.json({status:"ok", message:"image added successfully",data:{imageUrl:uploaded}})
    }catch(e){
        console.log("error===",e)
        res.status(500).json({status:"error", error:e.message||e});
    }
}
const editCommerce = async(req,res)=>{
    try{
        const {id} = req.params
        const {update} = req.body
        const updated = await commerceService.editCommerce(id,update)
        res.json({status:"ok"})
    }catch(e){
        res.status(500).json({status:"error",error:e.message||e})
    }   
}
module.exports = {
    createCommerce,
    getCommerce,
    getCommerces,
    getCommercesByCategory,
    getCommerceByCuit,
    imageUpload,
    editCommerce,
    getAllByCategory
}