const logger = require("./logger.js");

logger.warn("Warning logging");

logger.error("Error logging");

logger.info("server.endpoint.get.users", {
  timestamp: new Date().toISOString(),
  pid: process.pid,
});

logger.error("server.endpoint.get.users", {
  timestamp: new Date().toISOString(),
  pid: process.pid,
});
