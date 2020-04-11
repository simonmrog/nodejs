const express = require("express");
const router = express.Router();

const { isValidHost, isAuth } = require("../../middlewares/auth");

const userController = require("../../controllers/v1/userController");

router.post("/login", userController.login);
router.get("/get", userController.getUsers);
router.post("/create", userController.createUser);
router.put("/update", isValidHost, isAuth, userController.updateUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;