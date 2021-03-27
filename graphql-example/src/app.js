"use strict";

import express from "express";

import gqlMiddleware from "./graphql.js";

const app = express();
app.use("/api", gqlMiddleware);

export default app;