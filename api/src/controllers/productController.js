const productService = require("../services/productService")


const getProducts = async (req,res) => {
    try{
        const products = await productService.getProducts()
        return res.json({status:"ok", data:products})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}
const getProduct = async (req,res) => {
    try{
        const {id} = req.body
        const product = await productService.findProductById(id)
        return res.json({status:"ok", data:product})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}
const getProductsByCategory = async (req,res) => {
    try{
        const {category} = req.body
        const product = await productService.getProductsByCategory(category)
        return res.json({status:"ok", data:product})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}

const createProduct = async (req,res) => {
    try{
        const product = req.body
        const newProduct = productService.createProduct(product)
        if(newProduct) res.json({status:"ok"})
    }catch(e){
        res.status(500).json({status:"ok",error:"No se pudo crear el comercio"})
    }
}
const deleteProduct = async (req,res) => {
    const {id} = req.body
    try{
        const deleted = await productService.deleteProduct(id)
        res.json({status:"ok"})
    }catch(e){
        res.status(500).json({status:"error",error:e.message||e})
    }
}
const editProduct = async(req,res) =>{
    const {id,nombre,categoria,precio,descuento} = req.body
    try{
        const edited = await productService.editProduct(id,nombre,categoria,precio,descuento)
        res.json({status:"ok",data:edited})
    }catch(e){
        res.status(500).json({status:"error",error:e.message|| e})
    }
}
module.exports = {
    createProduct,
    getProduct,
    getProducts,
    getProductsByCategory,
    deleteProduct,
    editProduct
}