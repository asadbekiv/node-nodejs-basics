import path from "node:path";
import { fileURLToPath } from "node:url";
import { rename as renameFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  try {
    await renameFile(
      path.join(__dirname, "files", "wrongFilename.txt"),
      path.join(__dirname, "files", "properFilename.md")
    );
  } catch (error) {
    if (error.code === "EEXIST" || error.code === "ENOENT") {
      console.error("FS operation failed");
    } else {
      console.error(error.message);
    }
  }
};

await rename();
