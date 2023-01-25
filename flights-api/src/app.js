const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { errorHandler } = require("./middlewares/error.middleware");
const flightRouter = require("./routes/flight.route");

const app = express();

app.use(bodyParser.json({ strict: false }));
app.use(cors());
app.use("/api/flights", flightRouter);

// Default route
app.get("*", function (req, res) {
  throw new Error("Route Not Found");
});

// Error middleware
app.use(errorHandler);

module.exports = app;
