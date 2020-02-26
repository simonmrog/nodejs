const fs = require("fs");

const filename = "./target.txt";
const errHandler = (err) => console.log(err);
const dataHandler = (data) => console.log(data.toString());

fs.watch (filename, () => {
  fs.readFile(filename, (err, data) => {
    if (err) errHandler();
    dataHandler(data);
  });
  console.log("another message");
});