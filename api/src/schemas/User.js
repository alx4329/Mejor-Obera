const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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