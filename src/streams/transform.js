import { Transform } from "node:stream";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, `Your reverse output: ${reversed}\n`);
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);

  process.stdin.on("data", (chunk) => {
    if (chunk.toString().trim() === "quit") process.exit(0);
  });
};

await transform();
