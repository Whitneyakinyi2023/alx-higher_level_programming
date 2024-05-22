#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

//Handling no provision of url
if (!apiUrl) {
    console.error('Error: Please provide a URL as the first argument.');
    process.exit(1);
}

// Character ID for Wedge Antilles
const wedgeAntillesId = 18;

// Make a GET request to the provided API URL
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(error);
        return;
    }

    if (response.statusCode === 200) {
        const films = JSON.parse(body).results;
        let count = 0;

        // Iterate through each film
        for (const film of films) {
            // Check if the character ID is present in the film's characters list
            if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeAntillesId}/`)) {
                count++;
            }
        }

        // Print the number of films with Wedge Antilles
        console.log(count);
    } else {
        console.error(`Failed to fetch films. Status code: ${response.statusCode}`);
    }
});
