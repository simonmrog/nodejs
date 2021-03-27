import { sum, diff, multiply, divide } from "../math.js";

describe("math calculations", () => {
  test("sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("positive + positive = positive", () => {
    expect(sum(1, 1)).toBeGreaterThan(0);
  });

  test("multiply two numbers", () => {
    expect(multiply(3, 6)).toBe(18);
  });

  test("negative * negative = positive", () => {
    expect(multiply(-3, -5)).toBeGreaterThan(0);
  });

  test("negative / postive = negative", () => {
    expect(divide(-3, 2)).toBeLessThan(0);
  });

  test("difference of two numbers", () => {
    expect(diff(3, 2)).toBe(1);
  });
});
