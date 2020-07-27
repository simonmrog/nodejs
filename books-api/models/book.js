const mongoose = require("mongoose");

const { Schema } = mongoose;

const BookSchema = new Schema({
  name: String,
  author: String,
  genre: String,
  description: String
});

module.exports = mongoose.model("Book", BookSchema);
