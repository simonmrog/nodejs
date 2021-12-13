"use strict";

import dotenv from "dotenv";

dotenv.config();


class Settings {
  PORT = process.env.PORT || 3000;
  MICROSOFT_CLIENT_ID = process.env.MICROSOFT_CLIENT_ID;
  MICROSOFT_CLIENT_SECRET = process.env.MICROSOFT_CLIENT_SECRET;
  JWT_SECRET = process.env.JWT_SECRET;
  // environment = process.env.ENVIRONMENT;
  // webAppTitle = process.env.WEB_APP_TITLE;
  // webAppDescription = process.env.WEB_APP_DESCRIPTION;
  // webAppVersion = process.env.WEB_APP_VERSION;
  // mongoUsername = process.env.MONGO_USERNAME || "";
  // mongoPassword = process.env.MONGO_PASSWORD || "";
  // mongoDatabase = process.env.MONGO_DATABASE_NAME;
  // mongoHost = process.env.MONGO_HOST;
  // mongoPort = process.env.MONGO_PORT;
};

export default new Settings();
