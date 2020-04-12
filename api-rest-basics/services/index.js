"use strict";

const jwt = require("jwt-simple");
const moment = require("moment");
const bcrypt = require("bcrypt-nodejs");

const config = require("../config.js");

const genSalt = saltRounds => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(saltRounds, (err, salt) => {
			if (err) reject(err);
			else resolve(salt);
		});
	});
};

const genHash = (password, salt) => {
	return new Promise((resolve, reject) => {
		bcrypt.hash(password, salt, null, (err, hash) => {
			if (err) reject(err);
			else resolve(hash);
		});
	});
};

const createToken = user => {
  const payload = {
    // BAD PRACTICE. NOT TO USE THE SAME ID OF MONGODB
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix()
  }
  return jwt.encode(payload, config.JWT_SECRET);
};

const decodeToken = token => {
	return new Promise((resolve, reject) => {
		try {
		const payload = jwt.decode(token, config.JWT_SECRET);
		console.log(payload)
		if (payload.exp <= moment.unix())
			throw ({
				code: 401,
				status: "access denied",
				message: "token expired"
			});	
		resolve(payload.sub);
		} catch(err) {
				reject({ code: err.code || 600,
					status: err.status || "error",
					message: err.message || ""
				});
		}
	});
};

module.exports = {
	genSalt,
	genHash,
	createToken,
	decodeToken
};
