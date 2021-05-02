const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const inicTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting ... ${p}%`);
};

const timeFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write("Done.\n");
};

const interval = setInterval(inicTime, waitInterval);
setTimeout(timeFinished, waitTime);
