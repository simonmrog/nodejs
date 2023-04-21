import fs from "fs";
import wkhtmltopdf from "wkhtmltopdf";

// Stream input and output
console.time("wkhtmltopdf");
const stream = wkhtmltopdf(fs.createReadStream("template.html"), {
  output: "out.pdf",
});
console.timeEnd("wkhtmltopdf");
