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
    return new Promise(async(resolve,reject)=>{
        try{
            const location = await imageLocation(image)
            await cloudinary.uploader.upload(
                location,
                {folder:"profilePictures"},
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
const createProduct = async(nombre,categoria,precio,descuento,idComercio,cuitComercio,image) => {
    return new Promise (async(resolve,reject)=>{
        try{
                const uploaded = await uploadProductImage(image)
                const newProduct = new Product({
                    nombre,
                    categoria,
                    precio,
                    descuento,
                    idComercio,
                    cuitComercio,
                    image:uploaded
                })
                newProduct.save(function(err,obj){
                    if(err) {
                        console.log(err)
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
    editProduct
}