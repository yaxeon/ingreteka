import { v4 } from "uuid";
import path from "path";

import { MINIO_BUCKET, minioClient } from "../../minio";
import { FileMutationResolvers } from "../types";

const FileMutation: FileMutationResolvers = {
  upload: async (root, { file }) => {
    const { stream, filename, mimetype } = await file;
    const dir = new Date().toISOString().substr(0, 10);
    const uri = `${dir}/${v4()}${path.extname(filename)}`;

    await minioClient.putObject(MINIO_BUCKET, uri, stream, undefined, {
      filename,
      mimetype
    });

    return { uri };
  }
};

export default {
  FileMutation
};
