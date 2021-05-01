// Input: Node globalObjects.js --user Simon --password "Hello"

const grab = (flag) => {
  let indexAfterFlag = process.argv.indexOf(`--${flag}`) + 1;
  if (indexAfterFlag === 0) return null;
  return process.argv[indexAfterFlag];
};

const init = (_) => {
  const user = grab("user");

  if (user === null) {
    process.stdout.write("[ERROR] User must be entered\n");
    process.stdout.write(
      "[ERROR] Process ended with non-zero code. exit code 1\n"
    );
    return 1;
  }

  process.stdout.write(`Welcome, ${user}\n`);
  process.stdout.write("password: ");
  return 0;
};

init();

process.stdin.on("data", (data) => {
  const password = data.toString().trim();
  if (password !== "password") process.stdout.write("password: ");
  else process.exit();
});

process.on("exit", () => {
  process.stdout.write(`Successfully logged in\n`);
});
