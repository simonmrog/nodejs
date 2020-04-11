const jwt = require("jsonwebtoken");

const validHosts = ["localhost"];

const isValidHost = (req, res, next) => {
	if (validHosts.includes(req.hostname)) next();
	else res.status(403).send({
		status: "Access Denied",
		message: "Invalid Hostname"
	});
};

const isAuth = (req, res, next) => {
	try {
		const { token } = req.headers;
		if (token) {
			jwt.verify(token, process.env.JWT_SECRET);
			next();
		}
		else res.status(403).send({
			status: "Access Denied",
			message: "Token Required"
		});
	} catch(err) {
			res.status(500).send({
				status: "error",
				message: err.message
			});
		}; 
};

module.exports = {
	isValidHost,
	isAuth
};