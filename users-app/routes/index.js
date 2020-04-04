"use-strict";

const express = require("express");
const router = express.Router();
const routerController = require("../controllers/user");

router.get("/", routerController.loginUser);
router.post("/", routerController.getUserHome);
router.get("/profile/:username", routerController.getUserProfile);
router.post("/add", routerController.addNewUser);
router.get("/users", routerController.getUsers);

module.exports = router;