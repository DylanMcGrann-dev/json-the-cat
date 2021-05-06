const { fetchBreedDescription } = require('./breedFetcher');
// const arg = process.argv.slice(2);
// let breed = arg[0][0] + arg[0][1] + arg[0][2];

const breedName = process.argv[2];
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});