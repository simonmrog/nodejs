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

app.get("/files", async (req, res) => {
  const files = await s3Service.getFiles();
  res.json({ status: "ok", files: files.Contents });
});

app.post("/files", async (req, res) => {
  const result = await s3Service.uploadFile(req.files.file);
  res
    .status(201)
    .json({ status: "ok", message: "File(s) uploaded successfully", result });
});

export default app;
