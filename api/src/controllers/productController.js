const categoryService = require("../services/categoryService")
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
        console.log(product)
        return res.json({status:"ok", data:product})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}
const getProductsByCommerce = async (req,res) => {
    try{
        const {id} = req.params
        const product = await productService.getProductsByCommerce(id)
        return res.json({status:"ok", data:product})
    }catch(e){
        res.json({status:error,error:e.message||e})
    }
}

const createProduct = async (req,res) => {
    try{
        const {nombre,descripcion,categoria,commerceId} = req.body
        const image = req?.files?.image;
        if(!nombre || !descripcion || !categoria || !commerceId) res.status(400).json({status:"error",error:"Enviar todos los campos"})
        const newProduct = await productService.createProduct(nombre,descripcion,commerceId,categoria,image)
        if(newProduct) res.json({status:"ok"})
    }catch(e){
        console.log("AT THE TOP",  e)
        res.status(500).json({status:"ok",error:e.message||e})
    }
}
const deleteProduct = async (req,res) => {
    const {id} = req.params
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
const getAllByCategory = async (req,res) => {
    try{
        const products = await productService.getProducts()
        const categories = await categoryService.getCategories()
        const categorizedProducts = {}
        categories.forEach(cat=>{
            const filtered = products.filter(product=>product.categorias.includes(cat.nombre))
            categorizedProducts[cat.shortening]={
                categoria:cat.nombre,
                products: filtered
            }
        })
        return res.json({status:"ok", data:categorizedProducts})
    }catch(e){
        console.log("e")
        res.status(500).json({status:"error",error:e.message||e})
    }
}
module.exports = {
    createProduct,
    getProduct,
    getProducts,
    getProductsByCategory,
    deleteProduct,
    editProduct,
    getProductsByCommerce,
    getAllByCategory
}