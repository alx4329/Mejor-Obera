const sharp = require('sharp')
const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const Product = require("../schemas/Products")
const getProducts = async()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const products = await Product.find({})
            const shuffledArray = products.sort((a, b) => 0.5 - Math.random());
            resolve(shuffledArray)
        }catch(e){
            reject(e.message||e)
        }
    })
}
const getProductsByCommerce = async(id)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const products = await Product.find({idComercio:id})
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
const imageLocation = async (image) => {
    //resize image and return location
    if(image.size>2000000){
        const newLocation = `${image.tempFilePath}NEW`
        const resized = await sharp(image.tempFilePath)
            .resize(200,200)
            .toFormat("jpeg", { mozjpeg: true })
            .toFile(newLocation)
        return newLocation
    } else return image.tempFilePath
}
const uploadProductImage = async(image) =>{
    console.log("IMAGEN",image)
    return new Promise(async(resolve,reject)=>{
        try{
            const location = await imageLocation(image)
            await cloudinary.uploader.upload(
                location,
                {folder:"products"},
                async (err,result) => {
                    if (err) {
                        reject("Error occurred while uploading file");
                    } else {
                        //get saved image url
                        imageUrl = result.secure_url;
                        resolve(imageUrl)
                        }
                    }
            )
        }catch(e){
            reject(e.message||e)
        }
    })
}
const uploadFromLocal = async(path) =>{
    // console.log(image)
    return new Promise(async(resolve,reject)=>{
        try{
            // const location = await imageLocation(image)
            // console.log(location)
            await cloudinary.uploader.upload(
                path,
                {folder:"products"},
                async (err,result) => {
                    if (err) {
                        reject("Error occurred while uploading file");
                    } else {
                        //get saved image url
                        imageUrl = result.secure_url;
                        resolve(imageUrl)
                        }
                    }
            )
        }catch(e){
            reject(e.message||e)
        }
    })
}
const createProduct = async(nombre,descripcion,idComercio,categoria,image,link) => {
    return new Promise (async(resolve,reject)=>{
        console.log("on the service",image)
        try{
                const uploaded = await uploadProductImage(image)
                console.log(uploaded)
                const newProduct = new Product({
                    nombre,
                    descripcion,
                    categorias:[categoria],
                    idComercio,
                    image:uploaded
                })
                newProduct.save(function(err,obj){
                    if(err) {
                        console.log("ERROR CREATING ON DB",err)
                        reject(err)
                    } else{
                        resolve("Producto agregado"+obj.nombre)
                    }
                })
            
        }catch(e){
            reject(e.message||e)
        }
    })
}
const createCategoriesProduct = async(nombre,descripcion,idComercio,categorias,image,link) => {
    console.log(nombre,descripcion,idComercio,categorias,image)
    return new Promise (async(resolve,reject)=>{
        try{
                const uploaded = await uploadFromLocal(image)
                console.log(uploaded)
                const newProduct = new Product({
                    nombre,
                    descripcion,
                    categorias,
                    idComercio,
                    image:uploaded,
                    redirectsTo:link
                })
                newProduct.save(function(err,obj){
                    if(err) {
                        console.log("ERROR CREATING ON DB",err)
                        reject(err)
                    } else{
                        resolve("Producto agregado"+obj.nombre)
                    }
                })
            
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
    editProduct,
    getProductsByCommerce,
    createCategoriesProduct
}