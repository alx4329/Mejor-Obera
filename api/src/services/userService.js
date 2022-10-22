const User = require('../schemas/User')
const bcrypt = require('bcrypt')
const findUserByEmail =async  (email)=>{
    try{
        const user = await User.findOne({email})
        return user
    }catch(e){
        return e
    }
}

const createUser  =async (email,contraseña,nombre,cuitComercio) => {
    return new Promise(async(resolve,reject)=>{
        try{   
            const encryptedPassword = await bcrypt.hash(contraseña,10)
            const mongoUser = new User({
                email,
                contraseña: encryptedPassword,
                nombre,
                cuitComercio
            })
            mongoUser.save(function (error, user) {
                if (error ) {
                    if(error.code===11000) reject(`Duplicate key ${error.keyValue}`)
                    else reject(error.message||error)
                }
                else{
                    console.log(user.email+ " saved to collection.");
                    resolve({status:"ok", userId:user._id})
                }
            });
        }catch(e){
            reject(e.message||e)
        }
    })
}


module.exports = {
    findUserByEmail,
    createUser
}