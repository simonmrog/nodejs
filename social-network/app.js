"use strict";

//dependencies
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//environment variables
dotenv.config();

//DB connection
//MONGO_URI=mongodb://localhost/nodeapi
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
  .then(() => console.log("DB connection successful"));
mongoose.connection.on("error", (err) => console.log ("[DB-CONN ERROR]: ", err));

//routes
const postRoutes = require("./routes/post");

//server
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server running on ${port}`));