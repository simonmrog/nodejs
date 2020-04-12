"use strict";

// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const router = require("./routes");
const app = express();

// TEMPLATE ENGINE
app.engine(".hbs", hbs({
	defaultLayout: "default",
	extname: ".hbs"
}));
app.set("view engine", ".hbs");

// rendering views
app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/products", (req, res) => {
	res.render("product");
});

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

module.exports = app;
