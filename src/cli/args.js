const parseArgs = () => {
  const envValues = process.env;

  const filterVariables = Object.entries(envValues)
    .filter(([key, _]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");
  console.log(filterVariables);
};

parseArgs();
