#!/usr/bin/node
const args = process.argv.slice(2);

// Check if the first argument can be converted to a number
const number = parseInt(args[0]);

if (isNaN(number)) {
    console.log('Not a number');
} else {
    console.log(`My number: ${number}`);
}


