"use strict";


class Settings {
  PORTAL = process.env.WEB_APP_PORT || 3600;
  ENVIRONMENT = process.env.ENVIRONMENT;
  MONGO_USERNAME = process.env.MONGO_USERNAME || "";
  MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
  MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME;
  MONGO_HOST = process.env.MONGO_HOST;
  MONGO_PORT = process.env.MONGO_PORT;
};

export default new Settings();