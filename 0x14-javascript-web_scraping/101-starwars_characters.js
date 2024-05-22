#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
    console.error('Error: Please provide a movie ID as the first argument.');
    process.exit(1);
}

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    const movieData = JSON.parse(body);
    if (!movieData.title) {
        console.error('Movie not found');
        process.exit(1);
    }

    const characterUrls = movieData.characters;

    characterUrls.forEach((charUrl) => {
        request(charUrl, (error, response, body) => {
            if (error) {
                console.error('Error fetching character:', error.message);
                return; // Exit inner callback on error
            }

            const charData = JSON.parse(body);
            console.log(charData.name);
        });
    });
});
