const finalhandler = require("finalhandler");
const http = require('http');
const morgan = require('morgan');

const logger = morgan("dev");

const server = http.createServer();
server.on("request", function(req, res) {

  const done = finalhandler(req, res);
  logger(req, res, function(err) {
    if (err) return done(err);

    const { method, url } = req;
    
    // ENDPOINTS
    if (url === "/") res.end(JSON.stringify({ status: "ok", message: "Welcome to the API" }));

    if (method === "GET" && url === "/api/books") {
      res.end(JSON.stringify({ status: "ok", message: "GET Request Done Successfully" }));
    }

    if (method === "POST" && url === "/api/books") {

      // getting body of the request
      let body = [];
      req.on("error", function(err) {
        console.log(err)
        res.statusCode = 400;
        res.end(JSON.stringify({ status: "error", message: err.message || "Bad Request" }));
      })
        .on("data", chunk => body.push(chunk))
        .on("end", function() {
          body = Buffer.concat(body).toString();
          console.log(body)
          res.end(JSON.stringify({ status: "ok", data: body }));
        });
    }

    else {
      res.statusCode = 404;
      res.end(JSON.stringify({ status: "error", message: "404 Not Found" }));
    }
  });
});

module.exports = server;
