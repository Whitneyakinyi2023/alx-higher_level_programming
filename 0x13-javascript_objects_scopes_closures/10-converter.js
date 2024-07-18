#!/usr/bin/node
// Define a function converter that returns another function
exports.converter = function (base) {
  // Define an inner function that performs the conversion recursively
  function convert (number) {
    // Base case: if number is 0, return an empty string
    if (number === 0) {
      return '';
    } else {
      // Calculate remainder
      let remainder = number % base;
      // Convert remainder to string if greater than 9
      if (remainder >= 10) {
        remainder = String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0));
      }
      // Recursive case: convert the quotient and append the remainder
      return convert(Math.floor(number / base)) + String(remainder);
    }
  }

  // Return the inner function to perform the conversion
  return convert;
};
