import "dotenv/config.js";

export default {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  DEFAULT_QUEUE_NAME: process.env.DEFAULT_QUEUE_NAME,
  DEFAULT_TOPIC_NAME: process.env.DEFAULT_TOPIC_NAME,
};
