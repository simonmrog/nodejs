const BookModel = require("../models/book");

async function getBooks(req, res) {
  const { query } = req;
  try {
    const books = await BookModel.find(query).exec();
    return res.json({ books });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
}

async function getBookById(req, res) {
  try {
    return res.json({ book: req.book });
  } catch (err) {
    return res.status(500).json({ status: "error", message: err.message });
  }
}

async function createBook(req, res) {
  try {
    const { name, author } = req.body;
    const books = await BookModel.find({ name, author });
    if (books.length !== 0) throw { statusCode: 409, message: "Book Already Exists" };
    const book = new BookModel(req.body);
    const createdBook = await book.save();
    return res.status(201).json({
      status: "ok",
      message: "Book Created Successfully",
      created: createdBook
    });
  } catch (err) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ status: "error", message });
  }
}

async function updateBook(req, res) {
  const { book } = req;
  const {
    name,
    author,
    genre,
    description
  } = req.body;
  try {
    book.name = name;
    book.author = author;
    book.genre = genre;
    book.description = description;
    const updatedBook = await book.save();
    return res.status(201).json({
      status: "ok",
      message: "Book Updated Successfully",
      updated: updatedBook
    });
  } catch (err) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ status: "error", message });
  }
}

async function modifyBook(req, res) {
  const { book } = req;
  if (req.body._id) delete req.body._id;
  Object.entries(req.body).forEach((item) => {
    const [key, value] = item;
    book[key] = value;
  });
  try {
    const updatedBook = await book.save();
    return res.status(201).json({
      status: "ok",
      message: "Book Modified Successfully",
      updated: updatedBook
    });
  } catch (err) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ status: "error", message });
  }
}

async function deleteBook(req, res) {
  const { book } = req;
  try {
    await book.remove();
    res.status(200).json({
      status: "ok",
      message: "Book Deleted Successfully"
    });
  } catch (err) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ status: "error", message });
  }
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  modifyBook,
  deleteBook
};
