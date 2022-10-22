const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    precio:{
        type:String,
    },
    descuento:{
        type:Number,
    },
    comerciante:{
        type: {
            id:{type:String},
            nomebre:{type:String},
        }
    }
})

module.exports = mongoose.model("Product", productSchema)