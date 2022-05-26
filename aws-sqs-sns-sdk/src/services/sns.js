import {
  SNSClient,
  CreateTopicCommand,
  DeleteTopicCommand,
  PublishCommand
} from "@aws-sdk/client-sns";

import config from "../config.js";

const clientConfig = { region: config.AWS_REGION };

class SNSService {
  constructor() {
    this.client = new SNSClient(clientConfig);
  }

  findTopicArnByName(topicName) {

  }

  createTopic(topicName) {
    const input = { Name: topicName };
    const command = new CreateTopicCommand(input);
    return this.client.send(command);
  }

  async deleteTopic(topicName) {
    const topicArn = await findTopicArnByName(topicName);
    const input = { TopicArn: topicArn }
    const command = new DeleteTopicCommand(input);
    const response = await this.client.send(command);
  }

  publishMessage(subject, message) {
    const command = new PublishCommand(input);
    await client.send(command);
  }
}

export default new SNSService();
