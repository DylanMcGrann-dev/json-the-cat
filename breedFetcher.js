const request = require('request');

const fetchBreedDescription = function(breedName,callback) {
  const apiLink = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(apiLink,(error,response,body) => {
    if (error) {
      return callback(error,null);
    }

    const data = JSON.parse(body);
    if (!data[0]) {
      
      return callback('cat does not exist',null);
    }
    return callback(null,data[0].description);
  });
};
module.exports = { fetchBreedDescription };
