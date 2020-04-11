const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const UserModel = require("../../mongo/models/user");
const ProductModel = require("../../mongo/models/product");

const expiresIn = "30m";

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await UserModel.findOne({ email });
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
	    	const User = new UserModel({ username, email, password: hash });
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

const deleteUser = async (req, res) => {
	try {
		const userId = req.body.userId;
		if (!userId) throw { code: 404, message: "UserId Required" };
		const user = await UserModel.findById(userId);
		if (!user) throw { code: 404, message: "User Not Found" };
		await user.remove();
		result = await ProductModel.deleteMany({ user: userId });
		res.status(200).send({
			status: "ok",
			message: "User Successfully Deleted",
			result
		});
	} catch(err) {
		res.status(err.code || 500).send({
			status: err.status || "error",
			message: err.message
		});
	};
};

const getUsers = async (req, res) => {
	try {
		// const users = await UserModel.find().select("_id username email");
		const users = await UserModel.find().select({ password: 0, __v: 0 });
		if (!users) throw { status: "error", message: "Users Not Found" };
		res.status(200).send({ status: "ok", data: users });
	} catch(err) {
		res.status(err.code || 500).send({
			status: err.status || "error",
			message: err.message
		});
	}
};

const updateUser = async (req, res) => {
	try {
		const userId = req.sessionData.userId;
		const { username, email } = req.body;
		const userUpdated = await UserModel.findByIdAndUpdate(userId, {
			username,
			email
		});
		if (!userUpdated) throw { code: 404, message: "User Not Found" };
		res.status(200).send({
			status: "ok",
			message: "User Successfully Updated",
			userUpdated
		});
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