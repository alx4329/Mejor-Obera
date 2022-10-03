const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comerceSchema = new Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Comerce", comerceSchema)