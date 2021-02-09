const http = require("http");

function root(req, res) {
  res.writeHead(404)
  res.write("Hello World!");
  res.end();
}

function setRoutes(req, res) {
  const { url, method } = req;
  if (url === "/node" && method === "GET")
    return root(req, res);
}

async function initApp() {
  const server = http.createServer();
  server.on("request", setRoutes);
  server.listen(3000, function () {
    console.log("Server running on port", 3000);
  });
}

initApp();