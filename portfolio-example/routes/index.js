const express = require('express');
const router = express.Router();

const controller = require("../controllers");

router.get("/api/projects", controller.getProjects);
router.post("/api/projects", controller.createProject);
router.put("/api/projects", controller.updateProject);
router.delete("/api/projects", controller.deleteProject);

router.get("/", controller.renderHome);
router.get("/projects/:slug", controller.renderProject);
router.get("*", controller.notFound);

module.exports = router;
