const weatherAPI = require("./weatherAPI");
const { messageWeather } = require("./showWeather");

test("Should return weather message with celsius temperature with jest.fn", () => {
  weatherAPI.getWeather = jest.fn((format) => 20);

  const result = messageWeather();
  const expected = "Today weather is 20, have a nice day!";

  expect(weatherAPI.getWeather).toHaveBeenCalledWith("C");
  expect(result).toBe(expected);

  weatherAPI.getWeather.mockRestore();
});

test("Should return weather message with celsius temperature with jest.spyOn", () => {
  jest.spyOn(weatherAPI, "getWeather");
  weatherAPI.getWeather.mockImplementation((format) => 20);

  const result = messageWeather();
  const expected = "Today weather is 20, have a nice day!";

  expect(weatherAPI.getWeather).toHaveBeenCalledWith("C");
  expect(result).toBe(expected);

  weatherAPI.getWeather.mockRestore();
});
