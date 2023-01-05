import { DataTypes } from "sequelize";

import sequelize from "../database/database.js";
import { TaskSchema } from "./Task.js";

export const ProjectSchema = sequelize.define("projects", {
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

ProjectSchema.hasMany(TaskSchema, {
  foreignKey: "projectId",
  sourceKey: "id",
});

TaskSchema.belongsTo(ProjectSchema, {
  foreignKey: "projectId",
  targetId: "id",
});
