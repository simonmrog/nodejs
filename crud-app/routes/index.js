"use strict";

const express = require("express");
const api = express.Router();

// CONTROLLERS
const mainController = require("../controllers/index.js");
const bookController = require("../controllers/book");

// ENDPOINTS
api.get("/", mainController.welcomeMessage);
api.get("/books", bookController.getBook);
api.get("/books/:id", bookController.getBookById);
api.post("/books", bookController.addBook);
api.put("/books/:id", bookController.updateBook);
api.delete("/books/:id", bookController.deleteBook);

module.exports = api;