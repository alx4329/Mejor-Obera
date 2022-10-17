const commerceService = require("../services/commerceService")

const createCommerce = async (req,res) => {
    try{
        const commerce = req.body
        const newCommerce = commerceService.createCommerce(commerce)
        if(newCommerce) res.json({status:"ok"})
    }catch(e){
        res.status(500).json({status:"ok",error:"No se pudo crear el comercio"})
    }
}

module.exports = {
    createCommerce
}