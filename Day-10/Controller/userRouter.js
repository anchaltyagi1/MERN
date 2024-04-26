const express = require("express");

const userController=require('../Controller/userController.js');

const userRouter=express.Router();

userRouter.route('/')
.get(userController.getUser)
 .post(userController.addUser) .put(userController.replaceUser)
  .delete(userController.deleteUser)
  module.exports=userRouter;