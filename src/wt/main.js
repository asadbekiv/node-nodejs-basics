import os from "node:os";
import path from "node:path";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
  const countCores = os.cpus().length;
  console.log(os.cpus());

  const result = new Array(countCores);

  const createWorker = (index, value) => {
    return new Promise((resolve) => {
      const worker = new Worker(path.resolve("./worker.js"));

      worker.postMessage(value);

      worker.on("message", (message) => {
        result[index] = message;
        resolve();
      });

      worker.on("error", () => {
        result[index] = { status: "error", data: null };
        resolve();
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          console.error(`exit code ${code}`);
        }
      });
    });
  };

  const promises = [];

  for (let i = 0; i < countCores; i++) {
    promises.push(createWorker(i, 10 + i));
  }

  await Promise.all(promises);

  console.table(result);
};

await performCalculations();
