"use strict";

const userRouter = require("./user");
const productRouter = require("./product");

module.exports = app => {
	app.use("/api/users", userRouter);
	app.use("/api/products", productRouter);
};
