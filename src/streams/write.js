import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  try {
    const writeableStream = fs.createWriteStream(
      `${__dirname}/files/fileToWrite.txt`,
      { encoding: "utf-8" }
    );

    process.stdin.pipe(writeableStream);

    writeableStream.on("finish", () => {
      console.log("\nFile writing completed.");
    });
    writeableStream.on("error", (error) => {
      console.error("Error writing file:", error.message);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await write();
