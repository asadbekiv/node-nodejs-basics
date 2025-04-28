import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    await fs.access(`${__dirname}/files_copy`);
    console.error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.cp(`${__dirname}/files`, `${__dirname}/files_copy`, {
          recursive: true,
        });
      } catch {
        console.error("FS operation failed");
      }
    } else {
      console.error("FS operation failed");
    }
  }
};

await copy();
