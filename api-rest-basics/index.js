"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

// MONGO DB
mongoose.connect(config.db, {useUnifiedTopology: true, useNewUrlParser: true }, (err, res) => {
  if (err) return console.log(err);
  console.log("[INFO] DB connection established");
  app.listen(config.port, () => console.log(`[INFO] Running on http://localhost:${config.port}`));
});