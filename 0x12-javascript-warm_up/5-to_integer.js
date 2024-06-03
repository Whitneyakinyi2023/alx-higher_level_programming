#!/usr/bin/node
const args = process.argv.slice(2);

// Check if the first argument can be converted to a number
if (isNaN(args[0])) {
    console.log('Not a number');
} else {
    console.log(`My number: ${args[0]}`);
}

