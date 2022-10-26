const weatherAPI = require("./weatherAPI");

const messageWeather = () => {
  let weather = weatherAPI.getWeather("C");
  return `Today weather is ${weather}, have a nice day!`;
};

module.exports = { messageWeather };
