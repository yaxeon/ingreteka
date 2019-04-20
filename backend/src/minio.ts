import dotenv from "dotenv";
dotenv.config();

import debug from "debug";
import proxy from "http-proxy-middleware";
import * as Minio from "minio";

const minioLogger = debug("ingreteka:minio");

export const {
  MINIO_HOST = "",
  MINIO_ACCESS_KEY = "",
  MINIO_SECRET_KEY = "",
  MINIO_BUCKET = ""
} = process.env;

export const minioClient = new Minio.Client({
  endPoint: MINIO_HOST,
  useSSL: true,
  accessKey: MINIO_ACCESS_KEY,
  secretKey: MINIO_SECRET_KEY
});

export const staticProxy = (path: string) =>
  proxy(path, {
    pathRewrite: { [path]: "" },
    target: `https://${MINIO_HOST}/${MINIO_BUCKET}`,
    changeOrigin: true
  });

(async () => {
  const exists = await minioClient.bucketExists(MINIO_BUCKET);
  if (exists) {
    return;
  }

  await minioClient.makeBucket(MINIO_BUCKET, "default");
  minioLogger("bucket created");
})();
