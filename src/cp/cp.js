import { spawn } from "child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const pathToScript = `${__dirname}/files/script.js`;
  const child = spawn("node", [pathToScript, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);

  child.on("error", (err) => {
    console.error("Failed", err);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["Hello", "World"]);
