"use strict";

import ErrorHandler from "../services/error.js";
import authRouter from "./auth.js";


export default function(app) {
  app.use("/auth", authRouter);

  // Not found response for non-matching routes
  app.use('*', function(req, res){
    res.status(404).json({ detail: "Not Found" });
  });

  // Error handler
  app.use((err, req, res, next) => {
    ErrorHandler.handleError(err, res);
  });
};