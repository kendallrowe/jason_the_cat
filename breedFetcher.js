const request = require("request");
const args = process.argv.slice(2);
const searchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const searchBreed = function(breed) {
  request(searchURL + breed, (error, response, body) => {
    const data = JSON.parse(body);
    
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    } else if (data[0] === undefined) {
      console.log("Hm. We couldn't find the breed you requested. Try checking your search term.");
    } else {
      console.log(data[0].description); // Print the HTML for the Google homepage.
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(typeof data);
  });
}

searchBreed(args[0]);