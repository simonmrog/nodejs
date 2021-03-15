import express from "express";

const app = express();

app.get("/", function (req, res) {
  return res.status(200).json({ status: 'ok' });
});

app.listen(3000, function () {
  console.log("Server running on port", 3000);
});

export default app;
