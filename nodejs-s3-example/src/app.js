import express from "express";
import fileUpload from "express-fileupload";

import * as s3Service from "./services/s3.js";

const app = express();

// Middlewares
app.use(fileUpload());

// Routes
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Welcome to the API" });
});

app.post("/files", async (req, res) => {
  console.log(req.files);
  await s3Service.uploadFile(req.files.file);
  res.json({ status: "ok", message: "File(s) uploaded successfully" });
});

export default app;
