const request = require("request");
<<<<<<< HEAD

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      if (error) return callback(error.message);

      const data = JSON.parse(body);
      if (!data.length) return callback(`${breedName} not found`, null);

      const description = data[0].description;
      callback(null, description);
    }
  );
};

module.exports = { fetchBreedDescription };
=======
const query = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
  function(error, response, body) {
    const data = JSON.parse(body);

    if (error) return console.log(`Error: ${error}`);
    if (!data.length) return console.log(`Sorry, nothing found for ${query}`);
    console.log(data[0].description);
  }
);
>>>>>>> parent of 1e17426... Completed tests
