const request = require("request");
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
