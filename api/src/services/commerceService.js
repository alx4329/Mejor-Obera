const sharp = require('sharp')
const cloudinary = require("cloudinary").v2;
const Commerce = require("../schemas/Commerce")
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const getCommerces = async()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const commerces = await Commerce.find({})
            resolve(commerces)
        }catch(e){
            reject(e.message||e)
        }
    })
}
const findCommerceById = async(id) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const found = await Commerce.findById(id)
            resolve(found)
        }catch(e){
            reject(e)
        }
    })
}
const findCommerceByUser = async(userId )=>{
    return new Promise(async(resolve,reject)=>{
        try{
            const found = await Commerce.findOne({userId})
            resolve(found)
        }catch(e){
            reject(e)
        }
    })

}
const getUserCommerce = async(userId) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const found = await Commerce.find({userId})
            resolve(found)
        }catch(e){
            reject(e)
        }
    })
}
const findCommerceByCuit = async(CUIT) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const found = await Commerce.find({CUIT})
            console.log(found)
            if(found.length ===0) resolve("not found")
            resolve( found)
        }catch(e){
            reject(e.message||e)
        }
    })
}
const createCommerce = async(commerce) => {
    return new Promise (async(resolve,reject)=>{
        try{
            // const alreadyExists = await findCommerceByCuit(commerce.CUIT)
            // if (alreadyExists ==="not found") {
                const newCommerce = new Commerce(commerce)
                newCommerce.save(function(err,obj){
                    if(err) {
                        console.log("ERROR CREATING",err)
                        reject(err)
                    } else{
                        console.log("Comercio agregado"+obj.nombre)
                        resolve({id:newCommerce._id})
                    }
                })
            // }else console.log("alreadyExists",alreadyExists)
        }catch(e){
            console.log("ERROR CREATING COMMERCE",e.message||e)
            reject(e.message||e)
        }

    })
}
const getCommercesByCategory = async(categoria) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const commerces = await Commerce.find({categorias:categoria})
            resolve(commerces)
        }catch(e){
            reject(e.message||e)
        }
    })
}
const editCommerce = async(id,update) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const updatedCommerce = await Commerce.findOneAndUpdate({_id:id},update)
            resolve(updatedCommerce)
        }catch(e){
            reject(e.message||e)
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
const uploadLogo = async(commerceId,image) =>{
    console.log(image)
    return new Promise(async(resolve,reject)=>{
        try{
            const location = await imageLocation(image)
            console.log(location)
            await cloudinary.uploader.upload(
                location,
                {folder:"profilePictures"},
                async (err,result) => {
                    if (err) {
                        reject("Error occurred while uploading file");
                    } else {
                        //get saved image url
                        imageUrl = result.secure_url;
                        const editPicture = await editCommerce(commerceId,{imageUrl})
                        resolve(imageUrl)
                        }
                    }
            )
        }catch(e){
            reject(e.message||e)
        }
    })
}
const uploadFromLocal = async(commerceId,path) =>{
    // console.log(image)
    return new Promise(async(resolve,reject)=>{
        try{
            // const location = await imageLocation(image)
            // console.log(location)
            await cloudinary.uploader.upload(
                path,
                {folder:"profilePictures"},
                async (err,result) => {
                    if (err) {
                        reject("Error occurred while uploading file");
                    } else {
                        //get saved image url
                        imageUrl = result.secure_url;
                        const editPicture = await editCommerce(commerceId,{imageUrl})
                        resolve(imageUrl)
                        }
                    }
            )
        }catch(e){
            reject(e.message||e)
        }
    })
}
module.exports = {
    createCommerce,
    findCommerceById,
    findCommerceByCuit,
    getUserCommerce,
    getCommerces,
    getCommercesByCategory,
    editCommerce,
    uploadLogo,
    findCommerceByUser,
    uploadFromLocal
}