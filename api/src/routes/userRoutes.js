const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const User = require("../schemas/User");
const bcrypt = require('bcrypt')

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.post('/changePassword',async(req,res)=>{
    const {email, oldPassword,newPassword} = req.body
    const user = await User.findOne({email})
    console.log(user)
    const isValid = await bcrypt.compare(oldPassword, user.contraseña);
    if(!isValid)  return res.status(401).json({status:"error",error:"Contraseña inválida"})
    const encryptedPassword = await bcrypt.hash(newPassword,10)
    const filter = {email}
    const update={contraseña:encryptedPassword}
    const editedPassword = await User.findOneAndUpdate(filter,update,{returnOriginal:false})
    res.json({status:"ok",data:editedPassword})
})
module.exports = router;