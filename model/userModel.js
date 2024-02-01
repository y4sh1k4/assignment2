const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id:{type:Number,required:true,unique:true},
    name:{type:String, required:true},
    password:{type:String, required:true,min:8},
    email:{type:String,required:true,unique:true}
})

const user = mongoose.model('user',userSchema);

module.exports = user;