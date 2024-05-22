#!/usr/bin/node

const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

//Handling no provision of url
if (!url) {
    console.error('Error: Please provide a URL as the first argument.');
    process.exit(1);
}
// Make a GET request to the provided URL
request(url, (error, response, body) => {
    if (error) {
        console.error(`Error:`, error.message);
        process.exit(1);
    }
    // Print the status code
    console.log(`code: ${response.statusCode}`);
});