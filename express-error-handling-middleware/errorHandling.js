const express = require("express");

const app = express();

app.get("", async function (req, res, next) {
  try {
    if (!req.query.id) throw new Error("Missing Id");
    res.send(`ok: ${req.query.id}`);
  } catch (err) {
    next(err);
  }
});

//
app.use(function (err, req, res, next) {
  console.log(err.message);
  res.status(500).send("error");
});

app.listen(3000, () => {
  console.log("App running on port", 3000);
});
