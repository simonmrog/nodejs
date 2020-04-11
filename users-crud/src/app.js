const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const router = require("./routes/v1");

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false }));
router(app);

module.exports = app;
