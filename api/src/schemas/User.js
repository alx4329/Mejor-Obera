const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: {
        type: String, 
        required: true
    },
    telefono:{
        type: String, 
    },
    email:{
        type: String, 
    },
    contraseña:{
        type: String, 
    },
    whatsapp:{
        type: String, 
    },
    cuitComercio:{
        type: String, 
    }
})

module.exports = mongoose.model("User", userSchema)