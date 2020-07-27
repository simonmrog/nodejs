const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config();

const db = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(port, console.log(`App running on port ${port}`));
