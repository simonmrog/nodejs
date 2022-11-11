const weatherAPI = require("./weatherAPI");
const { messageWeather, showWeatherStatus } = require("./showWeather");

// Overrides the complete module
jest.mock("./weatherAPI", () => ({
  getWeather: jest.fn((format) => 20),
  getWeatherAsync: jest.fn((format) => new Promise((resolve) => resolve(20))),
}));

test("Should return weather message with celsius temperature with jest.mock", () => {
  const result = messageWeather();
  const expected = "Today weather is 20, have a nice day!";

  expect(weatherAPI.getWeather).toHaveBeenCalledWith("C");
  expect(result).toBe(expected);

  weatherAPI.getWeather.mockRestore();
});

test("Should return async weather message with celsius temperature", async () => {
  const result = await showWeatherStatus();
  const expected = "Today weather is 20, have a nice day!";
  expect(result).toEqual(expected);
});
