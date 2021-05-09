const fs = require("fs");
const http = require("http");

function fromRequestUsingChunks(request, response) {
  response.writeHead(200);
  request.on("readable", function () {
    let chunk = request.read();
    while (chunk) {
      response.write(chunk);
      chunk = request.read();
    }
  });
  request.on("end", function () {
    response.end();
  });
}

function uploadFile(request, response) {
  const newFile = fs.createWriteStream("uploaded_data");
  const fileBytes = request.headers["content-length"];
  let uploadedBytes = 0;
  request.on("readable", function () {
    let chunk = request.read();
    while (chunk) {
      newFile.write(chunk.toString());
      uploadedBytes += chunk.length;
      const progress = (uploadedBytes / fileBytes) * 100;
      response.write(`Progress: ${Number.parseInt(progress)}%\n`);
      chunk = request.read();
    }
  });
  // request.pipe(newFile);
  request.on("end", function () {
    response.end("Uploaded!");
  });
}

const server = http.createServer(function (request, response) {
  // fromRequestUsingChunks(request, response);
  // Another form
  // request.pipe(response);
  uploadFile(request, response);
});

server.listen(3000);
