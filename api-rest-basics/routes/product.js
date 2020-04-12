"use strict";

const express = require("express");
const productRouter = express.Router();

// CONTROLLERS
const productController = require("../controllers/product");

// ENDPOINTS
productRouter.get("/", productController.getProducts);
productRouter.get("/:productId", productController.getProduct);
productRouter.post("/save", productController.saveProduct);
productRouter.put("/update/:productId", productController.updateProduct);
productRouter.delete("/delete/:productId", productController.deleteProduct);

module.exports = productRouter;