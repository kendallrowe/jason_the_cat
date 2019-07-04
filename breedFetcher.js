const request = require("request");
const searchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, callback) {
  // request(searchURL + breedName, callback(error, body));
  request(searchURL + breedName, (error, request, body) => {
    
    if (error) {
      callback(error);
    } else if (JSON.parse(body)[0] === undefined) {
      callback("Hm. We couldn't find the breed you requested. Try checking your search term.");
    } else {
      callback("", JSON.parse(body)[0].description);
    }

  });
};


module.exports = { fetchBreedDescription };