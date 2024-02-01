const user = require("../model/userModel");

const userGetController = async(req,res)=>{
    const foundUsers = await user.find({})
    res.json(foundUsers);
}

const userSpecificGetController = async (req,res)=>{
    
    const idval=req.params.id;
    try{
        const foundUser = await user.findOne({id:idval});
        res.json(foundUser)
    }catch(e){
        res.json({
            "Error":"Some error occured"
        })
    }

}

const userPostController = async (req,res)=>{
    const {id,name,email,password} = req.body;
    const newUser = new user({
        id,
        name,
        password,
        email
    })
    try{
        newUser.save();
        res.json(newUser);
    }
    catch(e){
        res.json({
            "Error":"Some Error Occured"
        })
    }
}

const userPutController = async(req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    try{
        await user.updateOne({id:id},{name:name})
        res.json({"success":"Updated successfully"})
    }catch(e){
        res.json({"Error":e})
    }
}
const userDeleteController=async(req,res)=>{
    const id=req.params.id;
    try{
        await user.deleteOne({id:id})
        res.send("Deleted Successfully")
    }
    catch(e){
        res.send(e)
    }
}
module.exports = {userGetController,userSpecificGetController,userPostController,userPutController,userDeleteController}