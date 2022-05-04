"use strict";

import express from "express";
const { Router } = express;

import authController from "../controllers/auth.js";

const authRouter = Router();

const redirect = (req, res) => {
  res.redirect(req.user); //req.user has the redirection_url
}

authRouter.get("/google", authController.googleAuth);
authRouter.get("/google/redirect",
  authController.googleAuthRedirect, redirect);
authRouter.get("/microsoft", authController.microsoftAuth);
authRouter.get("/microsoft/redirect",
  authController.microsoftAuthRedirect,
  redirect
);
export default authRouter;
