const User = require('../schemas/User')

const findUserByEmail =async  (email)=>{
    try{
        const user = await User.findOne({email})
        return user
    }catch(e){
        return e
    }
}

const createUser  =async (email,contraseña) => {
    try{   
        const mongoUser = new User({
            email,
            contraseña
        })
        mongoUser.save(function (error, user) {
            if (error ) {
                if(error.code===11000) throw Error(`Duplicate key ${error.keyValue}`)
                else throw Error(e)
            }
            else{
                console.log(user.email+ " saved to collection.");
                return {status:"ok", userId:user._id}
            }
        });
    }catch(e){
        return e
    }
}

module.exports = {
    findUserByEmail,
    createUser
}