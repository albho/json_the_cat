const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      if (error !== null) return callback(error);

      const data = JSON.parse(body);

      if (!data.length) return callback(`${breedName} not found`, null);

      const description = data[0].description;
      callback(null, description);
    }
  );
};

module.exports = { fetchBreedDescription };
