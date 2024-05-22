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

    // Helper function to handle individual character requests
    const getCharacterName = (charUrl, callback) => {
        request(charUrl, (error, response, body) => {
            if (error) {
                callback(error); // Pass error to main callback
                return;
            }

            const charData = JSON.parse(body);
            callback(null, charData.name); // Pass null for error, name for success
        });
    };

    // Loop through character URLs and retrieve names concurrently
    const retrieveCharacters = async () => {
        try {
            const characterNames = await Promise.all(
                characterUrls.map((url) => new Promise((resolve, reject) => {
                    getCharacterName(url, (err, name) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(name);
                        }
                    });
                }))
            );
            characterNames.forEach((name) => console.log(name));
        } catch (error) {
            console.error('Error fetching characters:', error.message);
        }
    };

    retrieveCharacters();
});
