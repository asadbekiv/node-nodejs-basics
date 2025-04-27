import path from "node:path";
import { fileURLToPath } from "node:url";

import fs from "node:fs/promises";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  try {
    const content = "I am fresh and young";
    await fs.writeFile(`${__dirname}/files/fresh.txt`, content, { flag: "wx" });
  } catch (error) {
    if (error.code === "EEXIST") {
      console.error("FS operation failed");
    } else {
      console.error(error.message);
    }
  }
};

await create();
