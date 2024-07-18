#!/usr/bin/node
const Square5 = require('./5-square');

// Define a class Square that inherits from Square5
class Square extends Square5 {
  // No need to define a constructor here unless adding additional functionality
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }

    // Print the square using character c
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

// Export the Square class to be used in other files
module.exports = Square;
