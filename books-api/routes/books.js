const express = require("express");

const bookRouter = express.Router();
const booksController = require("../controllers/books");

const { findBookById } = require("../middlewares/books");

bookRouter.get("/", booksController.getBooks);
bookRouter.post("/", booksController.createBook);
bookRouter.get("/:id", findBookById, booksController.getBookById);
bookRouter.put("/:id", findBookById, booksController.updateBook);
bookRouter.patch("/:id", findBookById, booksController.modifyBook);
bookRouter.delete("/:id", findBookById, booksController.deleteBook);

module.exports = bookRouter;
