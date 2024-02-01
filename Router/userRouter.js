const express = require("express");
const router = express.Router();
const {userGetController,userSpecificGetController,userPostController,userPutController,userDeleteController} = require("../controller/userController")

router
    .get("/",userGetController)
    .get("/:id",userSpecificGetController)
    .post("/",userPostController)
    .put("/:id",userPutController)
    .delete("/:id",userDeleteController)
    

module.exports = router;