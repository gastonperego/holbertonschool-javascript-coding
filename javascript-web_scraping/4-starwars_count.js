#!/usr/bin/node

const request = require('request');

request.get('https://swapi-api.hbtn.io/api/films/', (err, response, body) => {
  if (err) throw err;
  const data = (JSON.parse(body));
  let num = 0;
  for (const movie of data.results) {
    for (const character of movie.characters) {
      if (character.includes('18')) {
        num += 1;
      }
    }
  }
  console.log(num);
});
