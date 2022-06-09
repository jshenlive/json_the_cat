const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// fetchBreedDescription(breedName, (error, response, body) => {
//   // console.log(typeof body);

//   if (error !== null) {
//     console.log('error', error);
//     console.log("Request failed.");
//     return null;
//   }
//   // console.log(response.statusCode);
//   if (response.statusCode === 404) {
//     console.log("Status Code: 404 (Bad URL)");
//     return null;
//   }

//   const data = JSON.parse(body);
//   if (data.length < 1) {
//     console.log("Breed not found");
//     return data[0].description;
//   }

//   console.log(data[0].description);

// });