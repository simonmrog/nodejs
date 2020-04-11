const usersRouter = require("./users");
const productsRouter = require("./products");

module.exports = app => {
	app.use("/api/v1/users", usersRouter);
	app.use("/api/v1/products", productsRouter);
};