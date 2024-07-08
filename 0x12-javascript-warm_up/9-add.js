#!/usr/bin/node

// Function to add two numbers
function add (a, b) {
  return a + b;
}

// Retrieval of command-line arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

// Check if the arguments can be converted to integers
if (isNaN(num1) || isNaN(num2)) {
  console.log('NaN');
} else {
  // Print the result of the addition
  console.log(add(num1, num2));
}
