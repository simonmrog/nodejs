const { calculateSquare } = require("./calculateSquare")

test("Should throw an error if called without an argument", () => {
  expect(calculateSquare()).toThrow("You must provide a number");
});

test("Should throw an error if called without a number", () => {
  expect(calculateSquare("45")).toThrow("You must provide a number");
});
