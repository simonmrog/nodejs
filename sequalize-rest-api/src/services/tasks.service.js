import { TaskModel } from "../models/Task.js";

export const getTasks = async () => {
  return await TaskModel.findAll();
}

export const getTaskById = async (id) => {
  return await TaskModel.findOne({ where: { id } });
}

export const createTask = async (name, projectId) => {
  return await TaskModel.create({
    name,
    projectId
  });
}

export const updateTask = async (id, name, done, projectId) => {
  return await TaskModel.update({
    name,
    done,
    projectId
  },{
    where: {
      id
    }
  });
}

export const deleteTask = async (id) => {
  return await TaskModel.destroy({
    where: { id }
  });
}

export const getTasksByProject = async (projectId) => {
  return await TaskModel.findAll({
    where: { projectId }
  });
}

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
  getTasksByProject,
}
