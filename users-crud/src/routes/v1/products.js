const express = require("express");
const router = express.Router();

const productController = require("../../controllers/v1/productController");

router.get("/get", productController.getProducts);
router.get("/get/:userId", productController.getProductsByUser);
router.post("/create", productController.createProduct);
router.delete("/delete", productController.deleteProduct);

module.exports = router;