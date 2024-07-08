#!/usr/bin/node
// Retrieval of the command-line argument
const arg = process.argv[2];

// Check if the size of square is defined and can be converted to a positive integer
const size = parseInt(arg, 10);
if (isNaN(size) || size <= 0) {
  console.log('Missing size');
} else {
  // Print the square using the character 'X'
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
