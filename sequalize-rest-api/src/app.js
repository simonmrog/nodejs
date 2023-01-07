import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/projects", projectsRoutes);
app.use("/api/tasks", tasksRoutes);
app.use("*", (req, res) => res.status(404).json({
  message: "Route not found"
}));

// Error middleware
app.use(errorHandler);

export default app;
