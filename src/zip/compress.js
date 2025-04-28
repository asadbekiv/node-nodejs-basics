import path from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  try {
    await pipeline(
      createReadStream(`${__dirname}/files/fileToCompress.txt`),
      createGzip(),
      createWriteStream(`${__dirname}/files/archive.gz`)
    );
  } catch (error) {
    console.error(error.message);
  }
};

await compress();
