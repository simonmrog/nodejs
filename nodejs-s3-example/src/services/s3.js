import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import fs from "fs";

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

export const getFileByName = async (filename) => {
  const command = new GetObjectCommand({
    Bucket: config.AWS_BUCKET_NAME,
    Key: filename,
  });
  return await client.send(command);
};

export const downloadFile = async (filename) => {
  const command = new GetObjectCommand({
    Bucket: config.AWS_BUCKET_NAME,
    Key: filename,
  });
  const result = await client.send(command);
  result.Body.pipe(fs.createWriteStream(`./public/${filename}`));
};
