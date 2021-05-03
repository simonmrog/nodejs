const path = require("path");
const express = require("express");

const router = require("./routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
