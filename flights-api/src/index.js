const dotenv = require("dotenv");
dotenv.config();

const config = require("./config");

require("./database");
const app = require("./app");

app.listen(config.PORT, () =>
  console.log("Server listening on port " + config.PORT)
);
