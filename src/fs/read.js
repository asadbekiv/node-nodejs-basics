import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const data = await readFile(`${__dirname}/files/fileToRead.txt`, "utf8");
    console.log(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("FS operation failed");
    }
  }
};

await read();
