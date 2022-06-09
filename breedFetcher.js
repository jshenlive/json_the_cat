const request = require("request");

const args = process.argv.slice(2, 3);


let err, desc;
const fetchBreedDescription = function (breed, callback) {

  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

  request(url, (error, response, body) => {
    if (error !== null) {
      console.log(error);
      err = error;
    }
    if (response.statusCode === 404) {
      //     console.log("Status Code: 404 (Bad URL)");
      err = response.statusCode;
    }
    const data = JSON.parse(body);
    // console.log(data);
    if (data.length < 1) {
      // console.log("Breed not found");
      err = error;
      desc = null;
    }
    if (err === null && data.length >= 1) {
      desc = data[0].description;
    }
    callback(err, desc);
  })
};

module.exports = { fetchBreedDescription };
