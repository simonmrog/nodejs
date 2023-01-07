import tasksService from "../services/tasks.service.js";

export const getTasks = async (req, res, next) => {
  try {
  const Tasks = await tasksService.getTasks();
  return res.json(Tasks);
  } catch(err) {
    next(err);
  }
}

export const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Task = await tasksService.getTaskById(id);
    if (!Task)
      return res.status(404).json({ message: "Task not found"})
    return res.json(Task);
  } catch(err) {
    next(err);
  }
}

export const createTask = async (req, res, next) => {
  try {
    const { name, projectId } = req.body;
    const newTask = await tasksService.createTask(
      name,
      projectId
    );
    return res.json(newTask);
  } catch(err) {
    next(err);
  }
}

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, done } = req.body;
    const updated = await tasksService.updateTask(
      id, name, done
    );
    return res.status(404).json({
      message: `${updated} record(s) where updated`
    });
  } catch(err) {
    next(err);
  }
}

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await tasksService.deleteTask(id);
    if (!deleted)
      return res.status(404).json({ message: "Task not found" });
    return res.sendStatus(204);
  } catch(err) {
    next(err);
  }
}
