"use strict";

const BookModel = require("../models/book");

const getBook = (req, res) => {
  console.log("[INFO] GET /api/books");
  BookModel.find({})
    .exec((err, books) => {
      if (err) return res.status(500).send({ message: `Internal Server Error: ${err.message}` });
      else return res.status(200).send({ data: books });
    });
};

const getBookById = (req, res) => {
  console.log("[INFO] GET /api/books:id");
  BookModel.findOne({
    _id: req.params.id
  })
  .exec((err, book) => {
    if (err) return res.status(500).send({ message: `Internal Server Error: ${err.message}` });
    else return res.status(200).send({ data: book });
  });

};

const addBook = (req, res) => {
  console.log("[INFO] POST /api/books");
  let newBook = new BookModel({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category
  });
  newBook.save((err, book) => {
    if (err) res.status(500).send({ message:  `Error Saving the Book: ${err.message}`});
    else res.status(200).send({ message: "Book Saved Successfully", data: book });
  });
};

const updateBook = (req, res) => {
  console.log("[INFO] PUT /api/books");
  BookModel.findByIdAndUpdate(req.params.id, { $set: { title: req.body.title } }, { $upsert: true })
  .exec((err, book) => {
    if (err) res.status(500).send({ message: `Internal Server Error: ${err.message}` });
    else res.status(200).send({ message: "Book Successfully Updated", data: book });
  });
};

const deleteBook = (req, res) => {
  console.log("[INFO] DELETE /api/books");
  BookModel.findByIdAndDelete(req.params.id, (err, book) => {
    if (err) return res.status(500).send({ message: `Internal Server Error: ${err.message}` });
    else return res.status(200).send({ message: "Book Deleted Successfully", data: book })
  });
}

module.exports = { getBook, getBookById, addBook, updateBook, deleteBook };