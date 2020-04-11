const express = require("express");
const router = express.Router();

const { isValidHost, isAuth, isAdmin } = require("../../middlewares/auth");

const userController = require("../../controllers/v1/userController");

router.post("/login", userController.login);
router.get("/get", isAuth, userController.getUsers);
router.post("/create", userController.createUser);
router.put("/update", isValidHost, isAuth, userController.updateUser);
router.delete("/delete", isAuth, isAdmin, userController.deleteUser);

module.exports = router;