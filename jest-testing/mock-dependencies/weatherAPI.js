const getWeather = (format) => {
  return format === "C" ? 50 : 100;
};
const getWeatherAsync = async (format) => {
  return new Promise((resolve) => {
    resolve(format === "C" ? 50 : 100);
  });
};

module.exports = { getWeather, getWeatherAsync };
