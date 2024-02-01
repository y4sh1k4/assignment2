const express=require("express");
const app=express();
const dotenv=require("dotenv")
const productRouter=require("./Router/productRouter")
const mongoose=require('mongoose')
const product=require("./model/productModel")
dotenv.config();
main()
.then("db connected")
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Yashika:sky@cluster0.e0qj0bd.mongodb.net/skystore?retryWrites=true&w=majority');
}



app.use(express.urlencoded({extended:true}))
app.use("/product",productRouter)
app.use("/user",userRouter)
app.post("/",async(req,res)=>{
  const {id,name,price}=req.body;
  const pdata=new product({
      id,
      name,
      price
  })
  try{
      await pdata.save();
      res.send("data added succesfully");
  }
  catch(e){
      res.send(e);
  }
})
app.listen(process.env.PORT,()=>{
    console.log("Server have been started")
})






