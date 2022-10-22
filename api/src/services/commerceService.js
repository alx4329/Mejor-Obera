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
            if(found.length ===0) reject("not found")
            return found
        }catch(e){
            reject(e.message||e)
        }
    })
}
const createCommerce = async(commerce,userId) => {
    return new Promise (async(resolve,reject)=>{
        try{
            const alreadyExists = await findCommerceByCuit(commerce.CUIT)
            if (alreadyExists ==="not found") {
                const newCommerce = new Commerce({...commerce, userId})
                newCommerce.save(function(err,obj){
                    if(err) {
                        console.log(err)
                        reject(err)
                    } else{
                        resolve("Comercio agregado"+obj.nombre)
                    }
                })
            }
        }catch(e){
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