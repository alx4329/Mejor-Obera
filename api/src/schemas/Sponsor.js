const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sponsorSchema = new Schema({
    nombre: {
        type: String, 
        required: true
    },
    descripcion:{
        type: String, 
    },
    direccion:{
        type: String, 
    },
    telefono:{
        type: String, 
    },
    whatsapp:{
        type: String, 
    },
    whatsapp:{
        type: String, 
    },
})

module.exports = mongoose.model("Sponsor", sponsorSchema)