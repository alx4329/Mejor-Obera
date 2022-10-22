const Product = require("../schemas/Products")
const getProducts = async()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const products = await Product.find({})
            resolve(products)
        }catch(e){
            reject(e.message||e)
        }
    })
}
const findProductById = async(id) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const found = await Product.findById(id)
            resolve(found)
        }catch(e){
            reject(e)
        }
    })
}

const createProduct = async(product) => {
    return new Promise (async(resolve,reject)=>{
        try{
            if (alreadyExists ==="not found") {
                const newProduct = new Product(product)
                newProduct.save(function(err,obj){
                    if(err) {
                        console.log(err)
                        reject(err)
                    } else{
                        resolve("Producto agregado"+obj.nombre)
                    }
                })
            }
        }catch(e){
            reject(e.message||e)
        }
    })
}
const getProductsByCategory = async(categoria) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const products = await Product.find({categoria})
            resolve(products)
        }catch(e){
            reject(e.message||e)
        }
    })
}
const deleteProduct = async(id)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const deleted = await Product.deleteOne({_id:id})
            resolve(`Product deleted: ${id}`)
        }catch(e){
            reject(e.message || e)
        }
    })
}
const editProduct = async(id,nombre,categoria,precio,descuento)=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const edited = await Product.findOneAndUpdate({_id:id},{
                nombre,
                categoria,
                precio,
                descuento
            },{new:true})
            resolve(edited)
        }catch(e){
            reject(e.message || e)
        }
    })
}
module.exports = {
    createProduct,
    findProductById,
    getProducts,
    getProductsByCategory,
    deleteProduct,
    editProduct
}