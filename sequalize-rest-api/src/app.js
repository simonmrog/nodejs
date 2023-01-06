import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

app.use("/api/projects", projectsRoutes);
app.use("/api/tasks", tasksRoutes);
export default app;
