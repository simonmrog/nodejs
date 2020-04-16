const http = require('http');

const server = http.createServer((req, res) => {

	if (req.url == "/") {
		res.writeHead(200, { 'Content-Type': 'text/html'});
		res.write("<html><body><p>This is home Page.</p></body></html>");
		res.end();
	}
  else if (req.url == "/data") {        
  	res.writeHead(200, { "Content-Type": "application/json" });
   	res.write(JSON.stringify({ message: "Hello World" }));
   	res.end();
  }
	else res.end("(404) Page not found");

});

server.listen(5000, console.log("Server running on port 5000"));
