const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

// middlewares
app.use(express.static(path.join(__dirname, "../client")));

let messages = [
  {
    text: "Welcome to the chat with Socket.io",
    nickname: "BOT - Simón Murillo"
  }
];

// socket
io.on("connect", (socket) => {
  console.log(`IP address ${socket.handshake.address} has connected.`);

  socket.emit("messages", messages);
  socket.on("add-message", (message) => {
  	// this could be a request to fill db of messages
		messages.push(message);
		socket.emit("messages", messages);
	});
});

// listen on port
server.listen(6677, console.log("Server Listening on Port 6677"));
