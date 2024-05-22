#!/usr/bin/node


const fs = require('fs');

const filePath = process.argv[2];
const material = process.argv[3];

// How to write the file and handle errors
function writeFile(args) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, material, 'utf8', (err, data) => {
            if (err) {
                reject(err); // Reject the promise with the error object
            } else {
                resolve(data); // Resolve the promise with the file content
            }
        });
    });
}

// Read the file
writeFile(filePath, material)
    .catch(error => {
        console.error(error); // Print the error object on error
    });