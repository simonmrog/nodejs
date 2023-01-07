import projectsService from "../services/projects.service.js";

export const getProjects = async (req, res, next) => {
  try {
  const projects = await projectsService.getProjects();
  res.json(projects);
  } catch(err) {
    next(err);
  }
}

export const createProject = async (req, res, next) => {
  try {
    const { name, priority, description } = req.body;
    const newProject = await projectsService.createProject(
      name,
      priority,
      description
    );
    res.json(newProject);
  } catch(err) {
    next(err);
  }
}

export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    const updated = await projectsService.updateProject(
      id, name, priority, description
    );
    res.status(404).json({ message: `${updated} record(s) where updated` });
  } catch(err) {
    next(err);
  }
}

export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await projectsService.deleteProject(id);
    if (deleted > 0)
      res.sendStatus(204);
    else
      res.status(404).json({ message: "Project not found" });
  } catch(err) {
    next(err);
  }
}
