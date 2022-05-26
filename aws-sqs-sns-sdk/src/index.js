import config from "./config.js";
import sqsService from "./services/sqs.js";
import snsService from "./services/sns.js";

import log from "./logger.js";

async function start() {
  try {
    let queueName = null;
    let topicName = null;
    const argv = process.argv;
    if (argv.length <= 2) throw new Error("Invalid operation parameters");
    const args = argv.slice(2);
    const operation = args[0];

    switch (operation) {
      case "create-queue":
        log.info("Creating Queue...");
        const createParams = {
          QueueName: args[1] || config.DEFAULT_QUEUE_NAME,
        };
        await sqsService.createQueue(createParams);
        log.info(`Queue ${createParams.QueueName} Created Successfully`);
        break;
      case "delete-queue":
        log.info("Deleting queue...");
        queueName = args[1] || config.DEFAULT_QUEUE_NAME;
        await sqsService.deleteQueue(queueName);
        log.info(`Queue ${queueName} Deleted Successfully`);
        break;
      case "receive-message":
        log.info("Receiving message...");
        if (argv.length <= 2) throw new Error("Invalid operation parameters");
        queueName = args[1] || config.DEFAULT_QUEUE_NAME;
        const messageReceived = await sqsService.receiveMessage(queueName);
        console.log(messageReceived.Body);
        break;
      case "send-message":
        log.info("Sending message...");
        if (argv.length <= 4) throw new Error("Invalid operation parameters");
        const messageBody = args[1] || "";
        queueName = args[2] || config.DEFAULT_QUEUE_NAME;
        await sqsService.sendMessage(queueName, messageBody);
        log.info(`Message Sent to ${queueName} Successfully`);
        break;
      case "poll-message":
        log.info("Polling message...");
        if (argv.length <= 2) throw new Error("Invalid operation parameters");
        queueName = args[1] || config.DEFAULT_QUEUE_NAME;
        const messagePolled = await sqsService.pollMessage(queueName);
        log.info(`Message polled: ${messagePolled.Body}`);
        break;
      case "create-topic":
        log.info("Creating topic...");
        if (argv.length <= 2) throw new Error("Invalid operation parameters");
        topicName = args[1] || config.DEFAULT_TOPIC_NAME;
        console.log(topicName);
        await snsService.createTopic(topicName);
        log.info("Topic Created Successfully");
        break;
      case "subscribe-to-topic":
        break;
      case "publish-message":
        if (argv.length <= 4) throw new Error("Invalid operation parameters");
        topicName = args[1] || config.DEFAULT_TOPIC_NAME;
        const messageSubject = args[3];
        const messageToPublish = args[4];
        await publishMessage(messageSubject, messageToPublish);
        log.info("Message Published Successfully");
        break;
      default:
        throw new Error("Invalid Operation");
    }
  } catch (err) {
    log.error(err.message);
  }
}

start();
