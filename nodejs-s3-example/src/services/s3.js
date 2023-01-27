import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import config from "../config.js";

const client = new S3Client({
  region: config.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadFile = async (file) => {
  console.log("file", file);

  const uploadParams = {
    Bucket: config.AWS_BUCKET_NAME,
    Key: file.name,
    Body: file.data,
  };

  console.log(uploadParams);

  const command = new PutObjectCommand(uploadParams);
  const result = await client.send(command);
  console.log(result);
};
