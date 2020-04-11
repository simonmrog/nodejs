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
		if (!token) throw ({
			code: 403,
			status: "access denied",
			message: "Token Required" });
		// user data is in the token
		const data = jwt.verify(token, process.env.JWT_SECRET);
		req.sessionData = { userId: data.userId, role: data.role };
		next();
	} catch(err) {
			res.status(err.code || 500).send({
				status: err.status || "error",
				message: err.message
			});
		}; 
};

const isAdmin = (req, res, next) => {
	const { role } = req.sessionData;
	if (role == "admin") next();
	else res.status(403).send({
		status: "error",
		message: "No Permissions for this Operation"
	});
};

module.exports = {
	isValidHost,
	isAuth,
	isAdmin
};