const request = require('request');
const arg = process.argv.slice(2);
let breed = arg[0][0] + arg[0][1] + arg[0][2];


// console.log(breed);
const domainSearch = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;
request(domainSearch,(error,response,body) => {
  // console.log(typeof body);
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (error) {
    return console.log('failed',error);
  }
  // // console.log('body:', body);
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('cat does not exist');
    return;
  }
  console.log(data[0].description);
});
