function calculateSquare(num) {
  if (num === undefined || typeof num !== "number") {
    throw new Error("You must provide a number.");
  }
  return num * num;
}

module.exports = {
  calculateSquare
}
