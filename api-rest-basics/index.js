"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config");

// MONGODB
mongoose.connect(config.db, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true
	}, (err, res) => {
  if (err) return console.log(err);
  console.log("[INFO] DB Connection Established");
  app.listen(config.port, () => console.log(`[INFO] Running on http://localhost:${config.port}`));
});