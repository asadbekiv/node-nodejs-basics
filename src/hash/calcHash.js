import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { createReadStream } from "node:fs";
import { error } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  try {
    const fileStream = createReadStream(
      `${__dirname}/files/fileToCalculateHashFor.txt`
    );
    const hash = crypto.createHash("sha256");

    fileStream.pipe(hash);

    hash.setEncoding("hex");
    hash.on("finish", () => {
      console.log(hash.read());
    });

    fileStream.on("error", (error) => {
      console.error("Reading file failed", error.message);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await calculateHash();
