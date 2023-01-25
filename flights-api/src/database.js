const mongoose = require("mongoose");

const {
  MONGODB_CONN,
  MONGODB_HOST,
  MONGODB_PORT,
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_NAME,
} = require("./config");

const url = `${MONGODB_CONN}://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
console.log(`Trying to connect to ${url}...`);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`MongoDB successfully connected to ${url}`))
  .catch((err) => console.log(err));
