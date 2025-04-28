import path from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(`${__dirname}/files/archive.gz`),
      createGunzip(),
      createWriteStream(`${__dirname}/files/fileToCompress.txt`)
    );
  } catch (error) {
    console.error(error.message);
  }
};

await decompress();
