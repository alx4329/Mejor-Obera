const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commerceSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    razonSocial:{
        type:String
    },
    CUIT:{
        type:String
    },
    categorias:{
        type: [{type:String}]
    },
    direccion:{
        type:String
    },
    descripcion:{
        type:String
    },
    telefono:{
        type: String
    },
    whatsapp:{
        type: String
    },
    email:{
        type: String
    },
    web_url:{
        type: String
    },
    fb_url:{
        type: String
    },
    ig_url:{
        type: String
    },
    otro_url:{
        type: String
    },
    userId:{
        type:String
    },
    imageUrl:{
        type:String
    },
    auspicia:{
        type:Boolean
    }
},
{timestamps:true}
)

module.exports = mongoose.model("Commerce", commerceSchema)