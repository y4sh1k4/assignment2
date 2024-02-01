const express=require("express")
const router=express.Router()
const product=require("../model/productModel")
const {getController,specificGetController,postController,putController,deleteController}=require("../controller/productController")

router 
.get("/",getController)
.get("/:id",specificGetController)
.post("/",postController)
.put("/:id",putController)
.delete("/:id",deleteController)

module.exports=router;
