const express = require("express");
const hoganMiddleware = require("hogan-middleware");
const bodyParser = require("body-parser");
const app = express();

const router = require("./routes");

// TEMPLATE ENGINE CONFIG
app.engine("mustache", hoganMiddleware.__express);
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

// OTHER MIDDLEWARES
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

module.exports = app;
