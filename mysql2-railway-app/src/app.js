import express from "express";

import { pool } from "./database.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();

// Routes
app.get("/ping", async(req, res, err) => {
  try {
    const [result] = await pool.query(`SELECT "Successfully connected to database" as RESULT`);
    res.json(result[0]);
  } catch(err) {
    next(err);
  }
});

app.get("/api/users", async(req, res) => {
  const [rows] = await pool.query("SELECT * FROM users");
  res.status(200).json(rows);
});

app.post("/api/users", async(req, res, err) => {
  try {
    const result = await pool.query(`INSERT INTO users(name) VALUES ("John")`);
    res.status(201).json(result[0]);
  } catch(err) {
    next(err);
  }
});

// Error middleware
app.use(errorHandler);

export default app;
