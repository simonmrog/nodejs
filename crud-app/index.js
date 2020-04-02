"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if (err) return console.log(err);
  console.log("[INFO]: Database connection established");
  app.listen(config.port, console.log(`[INFO]: Server Running on http://localhost:${config.port}`));
});