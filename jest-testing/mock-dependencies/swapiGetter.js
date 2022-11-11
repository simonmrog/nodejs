const axios = require("axios");

const swapiGetter = (id) => {
  return axios
    .get(`https://swapi.dev/api/people/${id}/`)
    .then((res) => res.data.name);
};

module.exports = { swapiGetter };
