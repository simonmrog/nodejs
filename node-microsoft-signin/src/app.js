"use strict";

import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";

import router from "./routes/index.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
router(app);

export default app;