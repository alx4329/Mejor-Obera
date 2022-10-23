const Commerce = require("../schemas/Commerce")
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
const findCommerceByCuit = async(CUIT) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const found = await Commerce.find({CUIT})
            if(found.length ===0) resolve("not found")
            return found
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
                        resolve("Comercio agregado"+obj.nombre)
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
module.exports = {
    createCommerce,
    findCommerceById,
    findCommerceByCuit,
    getCommerces,
    getCommercesByCategory
}