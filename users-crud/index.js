"use strict";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGO;

mongoose.connect(MONGO, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
 })
	.then(() => {
		console.log("[INFO]: Connected to DB Successfully");
		app.listen(PORT, console.log(`App running on http://localhost:${PORT}`));		
	})
	.catch(err => console.log("[Error] DB Connection Failed:", err.message));
