#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];

// How to read the file and handle errors
function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err); // Reject the promise with the error object
            } else {
                resolve(data); // Resolve the promise with the file content
            }
        });
    });
}

// Read the file
readFile(filePath)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error); // Print the error object on error
    });
