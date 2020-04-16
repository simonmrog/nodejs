const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // fs.readFile('./data.txt', (err, data) => {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   res.end();
  // });
  const data = fs.readFileSync("./data.txt");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
  
  fs.writeFile("new.txt", "Hello World", err => {
    if (err) console.log(err);
    else console.log("Writting operation complete");
  });

  fs.appendFile('data.txt', 'Hello World!', err => {  
    if (err) console.log(err);
    else console.log('Append operation complete');
  });

}).listen(5000, console.log("Running On Port 5000"));
