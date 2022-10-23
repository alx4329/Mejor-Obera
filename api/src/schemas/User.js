const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    telefono:{
        type: String, 
    },
    email:{
        type: String, 
    },
    contraseña:{
        type: String, 
    },
    cuitComercio:{
        type: String, 
    }
})

module.exports = mongoose.model("User", userSchema)