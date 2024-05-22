#!/usr/bin/node


const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

//check if approrpte url is provided
if (url) {
    console.error('Error: Please provide a URL as the first argument.');
    process.exit(1);
}

// Make a GET request to the provided URL
request(process.argv[2], function (_err, _res, body) {
    fs.writeFile(process.argv[3], body, 'utf8', function (err) {
        if (err) {
            console.log(err);
        }
    });
});