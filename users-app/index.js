"use strict";

const express = require("express");
const path = require("path");
const hoganMiddleware = require("hogan-middleware");
const bodyParser = require("body-parser");
const app = express();
const indexRouter = require("./routes/index");

// SETTING VIEW TEMPLATE
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.engine("mustache", hoganMiddleware.__express);

// MIDDLEWARES
app.use(express.static(path.join(__dirname, "public"))); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(3000, console.log("Server listening on port 3000"));