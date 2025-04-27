import path from "node:path";
import { fileURLToPath } from "node:url";

import fs from "node:fs/promises";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  try {
    await fs.rm(`${__dirname}/files/fileToRemove.txt`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("FS operation failed");
    }
  }
};

await remove();
