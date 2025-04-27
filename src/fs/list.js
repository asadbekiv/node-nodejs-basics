import path from "node:path";
import { fileURLToPath } from "node:url";
import { readdir } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const data = await readdir(`${__dirname}/files`, { recursive: true });
    console.log(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("FS operation failed");
    }
  }
};

await list();
