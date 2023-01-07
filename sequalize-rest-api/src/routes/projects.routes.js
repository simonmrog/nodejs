import { Router } from "express";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
  getProjectTasks,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("", getProjects);
router.post("", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/:id", getProjectById);
router.get("/:id/tasks", getProjectTasks);

export default router;
