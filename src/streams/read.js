import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const readableStream = fs.createReadStream(
      `${__dirname}/files/fileToRead.txt`,
      { encoding: "utf-8" }
    );
    readableStream.on("data", (chunk) => {
      process.stdout.write(chunk);
    });
    readableStream.on("end", () => {
      console.log("\nFile reading completed.");
    });
    readableStream.on("error", (error) => {
      console.error("Error reading file:", error.message);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await read();
