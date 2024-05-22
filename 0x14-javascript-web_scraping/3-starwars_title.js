#!/usr/bin/node


const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL for the API request
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

//handling no index
if (!url) {
    console.error('Error: Please provide a URL as the first argument.');
    process.exit(1);
}
// Make a GET request to the API
request(url, (error, response, body) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    if (response.statusCode === 200) {
        const movie = JSON.parse(body);
        console.log(movie.title);
    } else {
        console.error(`Failed to fetch movie with ID ${movieId}. Status code: ${response.statusCode}`);
    }
});
