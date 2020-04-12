"use strict";

const services = require("../services");

const isAuth = async (req, res, next) => {
	try {
		// bearer authentication: Bearer <token>
		let token = req.headers.authorization.split(" ")[1];
		console.log(token);
		if (!token) throw ({
			code: 403,
			status: "access denied",
			message: "Token required"
		});	
		req.userId = await services.decodeToken(token);
		next();
	} catch(err) {
			res.status(err.code || 500).send({
				status: err.status || "error",
				message: err.message || ""
			});
	};
};

module.exports = {
	isAuth
};
