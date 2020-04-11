const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const UserSchema = require("../../mongo/models/user");

const expiresIn = "5m";

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserSchema.findOne({ email });
		if (user) {
			const token = jwt.sign({
				userId: user._id,
				role: user.role
			}, process.env.JWT_SECRET, { expiresIn });
			bcrypt.compare(password, user.password, (err, resp) => {
				if (err) res.status(500).send( {
					status: "errorsito",
					message: err
				});
				else if (resp) res.status(200).send({
					status: "ok",
					data: {
						user,
						token
					},
					expiresIn
				});
				else res.status(403).send({
					status: "error",
					message: "Wrong Password"
				});
			});
		}
		else res.status(401).send({
			status: "error",
			message: "User Doesn't Exists"
		});
	} catch(err) {
		res.status(500).send( { status: "error", message: err.message });
	};
};

const createUser = async (req, res) => {
	const { username, email, password } = req.body;

	bcrypt.genSalt(15, (err, salt) => {
		if (err) {
	    	res.status(500).send({
	    		status: "error",
	    		message: err.message
	    	});
	   }
		else bcrypt.hash(password, salt, null, (err, hash) => {
	    if (err) {
	    	res.status(500).send({
	    		status: "error",
	    		message: err.message
	    	});
	    }
	    else {
	    	// replacing password with hash
	    	const User = new UserSchema({ username, email, password: hash });
	    	User.save()
	    		.then(user => {
	    			res.status(200).send({
							status: "ok",
							message: "User Successfully Created",
							userCreated: user
						});
	    		})
	    		.catch(err => {
	    			if (err.code = 1100)
	    				message = `Duplicated Values: ${Object.keys(err.keyValue)}`;
	    			else message = "Error Creating User"; 

	    			res.status(404).send({
	    				status: "error",
	    				message 
	    			})
	    		});
	    }
  	});
	});
};

const deleteUser = (req, res) => {
	res.status(200).send({
		status: "ok",
		message: "User Successfully Deleted"
	});
};

const getUsers = (req, res) => {
	res.status(200).send({ status: "ok", message: "Users" });
};

const updateUser = async (req, res) => {
		try {
		const { username, email, userId} = req.body;
		userUpdated = await UserSchema.findByIdAndUpdate(userId, {
			username,
			email
		}, 
		{
			forceNew: true
		});
		if (userUpdated) res.status(200).send({
			status: "ok",
			message: "User Successfully Updated",
			userUpdated
		});
		else throw {
			code: 404,
			status: "error",
			message: "User Not Found"
		};
	} catch(err) {
		res.status(err.code || 500).send({
			status: err.status || "error",
			message: err.message
		});
	};
};

module.exports = {
	login,
	createUser,
	deleteUser,
	getUsers,
	updateUser
};