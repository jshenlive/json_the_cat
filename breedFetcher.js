const request = require("request");

const args = process.argv.slice(2, 3);

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;
request(url, (error, response, body) => {
  // console.log(typeof body);

  if (error !== null) {
    console.log('error', error);
    console.log("Request failed.");
    return;
  }
  // console.log(response.statusCode);
  if (response.statusCode === 404) {
    console.log("Status Code: 404 (Bad URL)");
    return;
  }

  const data = JSON.parse(body);
  if (data.length < 1) {
    console.log("Breed not found");
    return;
  }

  console.log(data[0].description);

});
