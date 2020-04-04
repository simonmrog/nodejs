"use-strict";

const express = require("express");
const router = express.Router();
const routerController = require("../controllers/user");

router.get("/", routerController.loginUser);
router.post("/", routerController.getUserHome);

module.exports = router;