const userService = require('../services/userService')

const registerUser = async (req, res) => {
    try{
        const {email, contraseña} = req.body
        const alreadyExists = await userService.findUserByEmail(email)
            if(alreadyExists) return res.json({status:"Error", error:"Ya existe el usuario"})
        const newUser = await userService.createUser(email, contraseña)
        newUser ? res.json({status:"ok"}) : res.status(500).json({status:"error", error:"No se pudo crear el usuario"})
    }catch(e){
        res.status({status:"error", error:e})
    }
}

module.exports = {
    registerUser
}