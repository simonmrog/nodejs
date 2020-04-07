const mongoose = require("mongoose");

const app = require("./app");
const config = require("./config");

mongoose.connect(config.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })  
  .then(() => {
    console.log("DB Connection Established");
    app.listen(config.port, console.log(`App Runing on Port ${config.port}`));
  })
  .catch(err => console.log(`Error Connecting to DB: ${err}`));
