const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.header('Content-type', 'text/html');
  return res.send('<h1>Chat with Socket.io!</h1>');
});

server.listen(6677, console.log("Server Listening on Port 6677"));
