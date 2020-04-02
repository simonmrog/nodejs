"use strict";

const welcomeMessage = (req, res) => {
  console.log("[INFO] GET /api/");
  res.send("Welcome to the API");
};

module.exports = { welcomeMessage };