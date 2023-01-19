import { createPool } from "mysql2/promise";

import config from "./config.js";

export const pool = createPool({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB_NAME,
});
