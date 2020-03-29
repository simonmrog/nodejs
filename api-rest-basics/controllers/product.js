"use strict";

const Product = require("../models/product");

const getProduct = (req, res) => {
  console.log("[INFO] GET /api/products");
  let productId = req.params.productId;
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: "Internal Server Error" });
    else if (!product) return res.status(404).send({ message: "Product Not Found" });
    res.status(200).send({ product });
  });
};

const getProducts = (req, res) => {
  console.log("[INFO] GET /api/product");
  Product.find({}, (err, products) => {
    if (err) return res.status(500).send({ message: "Internal Server Error" });
    if (!products) return res.status(404).send( { message: "No Products Found" });
    res.status(200).send({ products });
  });
};

const saveProduct = (req, res) => {
  console.log("[INFO] POST /api/product");
  let product = new Product({
    name: req.body.name,
    picture: req.body.picture,
    price: req.body.price,
    category: req.body.category,
    description: req.body.description
  });
  product.save((err, productStored) => {
    if (err) return req.status(500).send({ message: `Error saving the product to DB: ${err}` });
    res.status(200).send({ message: "Product Received", product: productStored })
  });
};

const updateProduct = (req, res) => {
  console.log("[INFO] PUT /api/product");
  let productId = req.params.productId;
  let update = req.body;
  Product.findByIdAndUpdate(productId, update, (err, updatedProduct) => {
    if (err) return res.status(500).send({ message: "Internal Server Error" });
    else if (!updatedProduct) return res.status(404).send({ message: "Product Not Found" });
    res.status(200).send({ product: updatedProduct });
  });
};

const deleteProduct = (req, res) => {
  console.log("[INFO] DELETE /api/product");
  let productId = req.params.productId;
  Product.findById(productId, (err, product) => {
    if (err) return res.status(500).send({ message: "Internal Server Error" });
    else if (!product) return res.status(404).send({ message: "Product Not Found" });
    product.remove(err => {
      if (err) return res.status(500).send({ message: "Error Deleting Product" });
    res.status(200).send({ message: "Product Deleted" });
    })
  });
};

module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
};