const product=require("../model/productModel")
const getController=async(req,res)=>{
    const findProduct= await product.find({})
    res.json(findProduct)
}
const specificGetController=async(req,res)=>{
    const id=req.params.id;
    try{
        const findProductone=await product.findOne({id:id});
        res.json(findProductone)
    }
    catch(e){
        res.send(e);
    }
}
const postController=async(req,res)=>{
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
}
const putController=async(req,res)=>{
    const id=req.params.id
    const price=req.body.price
    await product.updateOne({id:id},{price:price})
    try{
        res.send("product updated succesfully")
    }
    catch(e){
        res.send(e)
    }
}
const deleteController=async(req,res)=>{
    const id=req.params.id
    await product.deleteOne({id:id})
    try{
        res.send("product deleted succesfully")
    }
    catch(e){
        res.send(e)
    }
}
module.exports={getController,specificGetController,postController,putController,deleteController}