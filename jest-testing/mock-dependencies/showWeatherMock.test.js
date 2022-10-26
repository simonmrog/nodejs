const weatherAPI = require("./weatherAPI");
const { messageWeather } = require("./showWeather");

jest.mock("./weatherAPI", () => ({
  getWeather: jest.fn((format) => 20),
}));

test("Should return weather message with celsius temperature with jest.mock", () => {
  const result = messageWeather();
  const expected = "Today weather is 20, have a nice day!";

  expect(weatherAPI.getWeather).toHaveBeenCalledWith("C");
  expect(result).toBe(expected);

  weatherAPI.getWeather.mockRestore();
});
