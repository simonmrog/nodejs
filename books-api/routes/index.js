const bookRouter = require("./books");

module.exports = (app) => {
  app.use("/api/books", bookRouter);

  app.get("/", (req, res) => {
    res.send("Welcome to the API");
  });

  app.get("*", (req, res) => {
    res.send("404 Not Found");
  });
};
