const { swapiGetter } = require("./swapiGetter");

describe("swapiGetter", () => {
  test("Should return the first entry from the API", async () => {
    const result = await swapiGetter(1);
    expect(result).toBe("Luke Skywalker");
  });
});
