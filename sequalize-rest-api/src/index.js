import app from "./app.js";
import sequelize from "./database/database.js";

async function main() {
  // Init db connection
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully");
  } catch(err) {
    console.error("Unable to connect to the database: ", err);
  }

  // Start server
  app.listen(3000, function() {
    console.log("Server running on port", 3000);
  });
}

main();
