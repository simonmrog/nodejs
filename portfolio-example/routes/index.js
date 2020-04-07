const express = require('express');
const router = express.Router();

const controller = require("../controllers");

router.get("/", controller.renderHome);
router.get("/api/projects", controller.getProjects);
router.put("/api/projects", controller.updateProjectById);
router.get("*", controller.notFound);

module.exports = router;
