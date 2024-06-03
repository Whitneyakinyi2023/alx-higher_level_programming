#!/usr/bin/node
// Retrieval of  the command-line argument
const arg = process.argv[2];

// Check if the argument is missing or not a positive integer
if (!arg || isNaN(arg)) {
    console.log('Missing number of occurrences');
} else {
    // Convert the argument to a positive integer
    const numOccurrences = parseInt(arg);

    // Print "C is fun" the specified number of times
    for (let i = 0; i < numOccurrences; i++) {
        console.log('C is fun');
    }
}