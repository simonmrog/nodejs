const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

function initApplication() {
  app.listen(3000, () => {
    console.log("Server running on port", 3000);
  });
}

initApplication();
