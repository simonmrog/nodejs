const BookModel = require("../models/book");

async function findBookById(req, res, next) {
  try {
    const book = await BookModel.findById(req.params.id).exec();
    if (book) {
      req.book = book;
      return next();
    }
    throw { statusCode: 404, message: "Book not found" };
  } catch (err) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ status: "error", message });
  }
}

module.exports = {
  findBookById
};
