const request = require("request");
// const breedName = process.argv[2];

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

// fetchBreedDescription(breedName, (err, desc) => {
//   if (err) return console.log(err);

//   console.log(desc);
// });

module.exports = { fetchBreedDescription };
