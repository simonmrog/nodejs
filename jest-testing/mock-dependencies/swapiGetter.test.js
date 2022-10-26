const axios = require("axios");
const { swapiGetter } = require("./swapiGetter");

jest.mock("axios");
// axios.get.mockImplementation(() =>
//   Promise.resolve({ data: { name: "Luke Skywalker" } })
// );
axios.get.mockResolvedValue({ data: { name: "Luke Skywalker" } });

describe("swapiGetter", () => {
  afterEach(jest.clearAllMocks);

  test("Should return the first entry from the API", async () => {
    const result = await swapiGetter(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toBe("Luke Skywalker");
  });
});
