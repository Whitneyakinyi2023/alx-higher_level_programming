#!/usr/bin/node
// Define a function converter that returns another function
exports.converter = function (base) {
  // Define an inner function that performs the conversion recursively
  function convert (number) {
    // Base case: if number is 0, return an empty string
    if (number === 0) {
      return '';
    } else {
      // Recursive case: convert the quotient and append the remainder
      return convert(Math.floor(number / base)) + String(number % base);
    }
  }

  // Return the inner function to perform the conversion
  return convert;
};
