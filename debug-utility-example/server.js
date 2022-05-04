const http = require("http");
const debug = require("debug");
require("./worker");

const log = debug("http");

http
  .createServer(function (req, res) {
    log(req.method + " " + req.url);
    res.end("Hello World");
  })
  .listen(3000, function () {
    log("Listening on port 3000...");
  });
