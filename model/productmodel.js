const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
    id:{type:Number,unique:true},
    name: String,
    price: Number
  });
  
const product = mongoose.model('product', productSchema);

module.exports=product;