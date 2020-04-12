"use strict";

// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const app = express();

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

module.exports = app;
