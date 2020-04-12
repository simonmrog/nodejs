"use strict";

const services = require("../services");

const isAuth = async (req, res, next) => {
	try {
		// bearer authentication: Bearer <token>
		const auth = req.headers.authorization;
		if (!auth) throw ({ message: "Authorization required" });
		const token = auth.split(" ")[1];
		if (!token || token == "undefined") throw ({
			code: 403,
			status: "access denied",
			message: "Token required"
		});
		req.userId = await services.decodeToken(token);
		next();
	} catch(err) {
			res.status(err.code || 500).send({
				status: err.status || "error",
				message: err.message || err
			});
	};
};

module.exports = {
	isAuth
};
