#!/usr/bin/node

// Function to compute factorial recursively
function factorial (n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  } else if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Retrieval of the command-line argument
const arg = process.argv[2];

// Convert the argument to an integer
const num = parseInt(arg, 10);

// Compute and print the factorial
console.log(factorial(num));
