import { Router } from "express";

import indexRouter from "./";

export default function(app: any) {
  app.use("/api", indexRouter);
};
