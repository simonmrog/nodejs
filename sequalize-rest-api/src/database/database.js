import Sequelize from "sequelize";
import pg from "pg";

const sequelize = new Sequelize("projectsdb", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  dialectModule: pg
});

export default sequelize;
