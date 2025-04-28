const parseEnv = () => {
  let argv = process.argv;

  let results = [];

  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      let propName = argv[i].slice(2);

      let value = argv[i + 1];
      results.push(`${propName} is ${value}`);
    }
  }
  console.log(results.join(", "));
};

parseEnv();
