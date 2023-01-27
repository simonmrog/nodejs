import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";

import config from "../config.js";

const client = new S3Client({
  region: config.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadFile = async (file) => {
  "file", file;

  const uploadParams = {
    Bucket: config.AWS_BUCKET_NAME,
    Key: file.name,
    Body: file.data,
  };

  const command = new PutObjectCommand(uploadParams);
  return await client.send(command);
};

export const getFiles = async () => {
  const command = new ListObjectsCommand({
    Bucket: config.AWS_BUCKET_NAME,
  });
  return await client.send(command);
};
