import {
  SQSClient,
  ListQueuesCommand,
  CreateQueueCommand,
  DeleteQueueCommand,
  ReceiveMessageCommand,
  SendMessageCommand,
  DeleteMessageCommand,
} from "@aws-sdk/client-sqs";

import config from "../config.js";

const clientConfig = { region: config.AWS_REGION };

class SQSService {
  constructor() {
    this.client = new SQSClient(clientConfig);
  }

  async findQueueUrlByQueueName(queueName) {
    const response = await this.listQueues(queueName);
    const queues = response.QueueUrls;
    if (typeof queues === "undefined" || queues.length === 0)
      throw new Error("Queue does not exist");
    return queues[0];
  }

  listQueues(name = null) {
    const QueueNamePrefix = name === null ? "" : name;
    const input = { QueueNamePrefix };
    const command = new ListQueuesCommand(input);
    return this.client.send(command);
  }

  async createQueue(input) {
    // const response = await this.listQueues(input.QueueName);
    // console.log(response);
    // const queues = response.QueueUrls;
    // if (typeof queues !== "undefined" && queues.length !== 0)
    // throw new Error("A queue with that name already exists");
    const command = new CreateQueueCommand(input);
    return this.client.send(command);
  }

  async deleteQueue(queueName) {
    const queueUrl = await this.findQueueUrlByQueueName(queueName);
    const input = { QueueUrl: queueUrl };
    const command = new DeleteQueueCommand(input);
    return this.client.send(command);
  }

  poolQueue() {}

  async receiveMessage(queueName) {
    const queueUrl = await this.findQueueUrlByQueueName(queueName);
    const input = { QueueUrl: queueUrl };
    const command = new ReceiveMessageCommand(input);
    const response = await this.client.send(command);
    if (
      typeof response.Messages === "undefined" ||
      response.Messages.length === 0
    )
      throw new Error("Messages Not Found");
    return response.Messages[0];
  }

  async sendMessage(queueName, messageBody) {
    const queueUrl = await this.findQueueUrlByQueueName(queueName);
    const input = { QueueUrl: queueUrl, MessageBody: messageBody };
    const command = new SendMessageCommand(input);
    return this.client.send(command);
  }

  deleteMessage(queueUrl, receiptHandle) {
    const input = { QueueUrl: queueUrl, ReceiptHandle: receiptHandle };
    const command = new DeleteMessageCommand(input);
    return this.client.send(command);
  }

  async pollMessage(queueName) {
    const message = await this.receiveMessage(queueName);
    const receiptHandle = message.ReceiptHandle;
    const queueUrl = await this.findQueueUrlByQueueName(queueName);
    await this.deleteMessage(queueUrl, receiptHandle);
    return message;
  }
}

export default new SQSService();
