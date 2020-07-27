const BookModel = require("../models/book");

async function getBooks(req, res) {
  const { query } = req;
  console.log(query)
  try {
    const books = await BookModel.find(query).exec();
    return res.json({ books });
  } catch (err) {
    return res.json({ status: "error", message: err.message });
  }
}

async function getBookById(req, res) {
  const { id } = req.params;
  try {
    const books = await BookModel.findById(id).exec();
    return res.json({ books });
  } catch (err) {
    return res.json({ status: "error", message: err.message });
  }
}

module.exports = {
  getBooks,
  getBookById
};
