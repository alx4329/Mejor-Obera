const userService = require('../services/userService')
const commerceService = require('../services/commerceService')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const registerUser = async (req, res) => {
    try{
        const {email, contraseña,telefono, cuitComercio} = req.body
        const alreadyExists = await userService.findUserByEmail(email)
        if(alreadyExists) return res.json({status:"Error", error:"Ya existe el usuario"})
        const newUser = await userService.createUser(email, contraseña,telefono,cuitComercio)
        console.log(newUser)
        newUser ? res.json({status:"ok"}) : res.status(500).json({status:"error", error:"No se pudo crear el usuario"})
    }catch(e){
        res.status(500).json({status:"error", error:e})
    }
}
const loginUser = async(req,res) => {
    try{
        const {email, contraseña} = req.body
        if(!email || !contraseña) return res.status(400).json({status:"error",error:"Debe enviar mail y contraseña"})
        const user = await userService.findUserByEmail(email)
        if(!user) return res.status(401).json({status:"error",error:"Usuario no encontrado"})
        const isValid = await bcrypt.compare(contraseña, user.contraseña);
        if(!isValid)  return res.status(401).json({status:"error",error:"Alguno de los datos no es válido"})
        const commerce = await commerceService.findCommerceByUser(user.id)
        const token = jwt.sign({id:user._id},process.env.TOKEN_SECRET,{expiresIn:'31104000'})
        return res.json({
            token,
            user:{
                id:user._id,
                email:user.email,
                commerceId:commerce._id
            }
        })
    }catch(e){
        res.status(500).json({status:"error",error:e.message||e})
    }
}
module.exports = {
    registerUser,
    loginUser
}