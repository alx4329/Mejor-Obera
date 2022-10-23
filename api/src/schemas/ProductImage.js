const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productImageSchema = new Schema({
    url:{type:String},
    productId:{type:String},
    commerceId:{String}
})

module.exports = mongoose.model("ProductImage", productImageSchema)