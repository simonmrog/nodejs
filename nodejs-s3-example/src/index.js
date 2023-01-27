import config from "./config.js";
import app from "./app.js";

console.log(config);

app.listen(3000, () => console.log("Server running on port", 3000));
