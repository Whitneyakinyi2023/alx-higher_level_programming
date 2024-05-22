#!/usr/bin/node

const request = require('request');

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL for the API request
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API to fetch the movie details
request(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }

    if (response.statusCode === 200) {
        const film = JSON.parse(body);
        const characters = film.characters;

        // Function to get character name by URL and print it
        const getCharacterName = (characterUrl) => {
            request(characterUrl, (charError, charResponse, charBody) => {
                if (charError) {
                    console.error(`Error: ${charError}`);
                    return;
                }

                if (charResponse.statusCode === 200) {
                    const character = JSON.parse(charBody);
                    console.log(character.name);
                } else {
                    console.error(`Failed to fetch character. Status code: ${charResponse.statusCode}`);
                }
            });
        };

        // Fetch and print each character name in the order they appear
        characters.forEach((characterUrl) => {
            getCharacterName(characterUrl);
        });
    } else {
        console.error(`Failed to fetch film. Status code: ${response.statusCode}`);
    }
});
