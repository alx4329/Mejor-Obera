const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String
    },
    categorias:[{
        type:String,
        required:true
    }],
    idComercio:{
        type: String,
    },
    image:{type:String},
    redirectsTo:{type:String}
})

module.exports = mongoose.model("Product", productSchema)