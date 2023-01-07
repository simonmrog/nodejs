import { DataTypes } from "sequelize";

import sequelize from "../database/database.js";
import { TaskModel } from "./Task.js";

export const ProjectModel = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  }
});

ProjectModel.hasMany(TaskModel, {
  foreignKey: "projectId",
  sourceKey: "id",
});

TaskModel.belongsTo(ProjectModel, {
  foreignKey: "projectId",
  targetId: "id",
});
