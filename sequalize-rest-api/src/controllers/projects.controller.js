import projectsService from "../services/projects.service.js";
import tasksService from "../services/tasks.service.js";

export const getProjects = async (req, res, next) => {
  try {
  const projects = await projectsService.getProjects();
  return res.json(projects);
  } catch(err) {
    next(err);
  }
}

export const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await projectsService.getProjectById(id);
    if (!project)
      return res.status(404).json({ message: "Project not found"})
    return res.json(project);
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
    return res.json(newProject);
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
    return res.status(404).json({
      message: `${updated} record(s) where updated`
    });
  } catch(err) {
    next(err);
  }
}

export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await projectsService.deleteProject(id);
    if (!deleted)
      return res.status(404).json({ message: "Project not found" });
    return res.sendStatus(204);
  } catch(err) {
    next(err);
  }
}

export const getProjectTasks = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projects = await tasksService.getTasksByProject(id);
    return res.json(projects);
  } catch(err) {
    next(err);
  }
}