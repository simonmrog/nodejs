const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
router(app);

module.exports = app;
