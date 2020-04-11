const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		images: {
			type: [{ type: String, required: true }],
			default: []
		},
		user: { type: mongoose.Types.ObjectId, ref: "User", required: true }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Product", productSchema);
	