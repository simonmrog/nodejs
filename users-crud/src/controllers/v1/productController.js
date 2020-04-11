const ProductModel = require("../../mongo/models/product");

const createProduct = async (req, res) => {
	try {
		const { title, description, price, images, userId} = req.body;
		const product = new ProductModel({
			title,
			description,
			price,
			images,
			user: userId
		});
		const productCreated = await product.save();
		res.status(200).send({
			status: "ok",
			message: "Product Successfully Created",
			productCreated
		});
	} catch(err) {
		res.status(500).send({ status: "error", message: err.message });
	};
};

const deleteProduct = (req, res) => {

};

const getProducts = async (req, res) => {
	try {
		const products = await ProductModel.find().populate("user", "username email");
		res.status(200).send( { status: "ok", products });
	} catch(err) {
		res.status(500).send({ status: "error", message: err.message});
	}
};

const getProductsByUser = async (req, res) => {
	try {
		const userId = req.params.userId;
		const products = await ProductModel.find({ user: userId })
			.populate("user", "username email");
		res.status(200).send( { status: "ok", products });
	} catch(err) {
		res.status(500).send({ status: "error", message: err.message});
	}
};

module.exports = {
	createProduct,
	deleteProduct,
	getProducts,
	getProductsByUser
};