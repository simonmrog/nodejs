import { ProjectModel } from "../models/Project.js";

export const getProjects = async () => {
  return await ProjectModel.findAll();
}

export const getProjectById = async (id) => {
  return await ProjectModel.findOne({ where: { id } });
}

export const createProject = async (name, priority, description) => {
  return await ProjectModel.create({
    name,
    priority,
    description
  });
}

export const updateProject = async (id, name, priority, description) => {
  return await ProjectModel.update({
    name: name,
    priority: priority,
    description: description
  },{
    where: {
      id
    }
  });
}

export const deleteProject = async (id) => {
  return await ProjectModel.destroy({
    where: { id }
  });
}

export default {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectById,
}
