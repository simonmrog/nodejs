"use strict";

const config = require("../config");
const services = require("../services");
const UserModel = require("../models/user");

const signUp = async (req, res) => {
	try {
		const { email, displayName, password } = req.body;
		// password hashing
		const salt = await services.genSalt(10);
    let hash = await services.genHash(password, salt);
    // creating user
    const usersFound = await UserModel.find({ $or: [{ email }, { displayName }]});
    if (usersFound.length > 0) throw ({ code: 404, message: "User Exists" });
    const user = new UserModel({ email, displayName, password });
		await user.save(err => err);
	  res.status(200).send({
			status: "ok",
			message: "User Successfully Created",
			userCreated: user
		});
	} catch(err) {
	  	res.status(err.code || 500).send({
	  		status: err.status || "error",
	  		message: err.message || err
	  	});
	};
}

const signIn = async (req, res) => {
	try {
		const user = await UserModel.findOne({ email: req.body.email });
		if (!user) throw ({ code: 404, message: "User Not Found" });
		res.status(200).send({ status: "ok", token: services.createToken(user) });
	} catch(err) {
		res.status(err.code || 500).send({
	  	status: err.status || "error",
	  	message: err.message
	  });
	}
};

const updateUser = (req, res) => {
	const { userId } = req;
	console.log(userId);
	res.status(200).send({ status: "ok", message: `user ${userId} modified` });
};

module.exports = {
	signUp,
	signIn,
	updateUser
};
