const express = require("express");

const bookRouter = express.Router();
const booksController = require("../controllers/books");

bookRouter.get("/", booksController.getBooks);
bookRouter.get("/:id", booksController.getBookById);

module.exports = bookRouter;
