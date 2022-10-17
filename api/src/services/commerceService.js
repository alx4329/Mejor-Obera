const Commerce = require("../schemas/Comerce")

const findCommerceById = async(id) =>{
    try{
        const found = await Commerce.findById(id)
        return found
    }catch(e){
        return e
    }
}
const findCommerceByCuit = async(CUIT) =>{
    try{
        const found = await Commerce.find({CUIT})
        if(found.length ===0) return "not found"
        return found
    }catch(e){
        return e
    }
}
const createCommerce = async(commerce,userId) => {
    try{
        const alreadyExists = await findCommerceByCuit(commerce.CUIT)
        if (alreadyExists ==="not found") {
            const newCommerce = new Commerce({...commerce, userId})
            newCommerce.save(function(err,obj){
                if(err) {
                    console.log(err)
                    return err
                } else{
                    console.log("Comercio agregado"+obj.nombre)
                }
            })
        }
    }catch(e){
        return e
    }
}

module.exports = {
    createCommerce
}