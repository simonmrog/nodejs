"use strict";

const express = require("express");
const { isAuth } = require("../middlewares/auth");
const userRouter = express.Router();

// CONTROLLERS
const userController = require("../controllers/user");

// ENDPOINTS
userRouter.post("/signUp", userController.signUp);
userRouter.post("/signIn", userController.signIn);
userRouter.put("/update", isAuth, userController.updateUser);

module.exports = userRouter;
