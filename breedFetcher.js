const request = require('request');

const breed = process.argv[2];
request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error, response, body) => {
  const data = JSON.parse(body);
  data.length ? console.log(data[0]["description"]) : console.log("No such breed, try a substring of a different breed!");
  //console.log(data);
});
