#!/usr/bin/node
const Rectangle = require('./4-rectangle');

// Define a class Square that inherits from Rectangle
class Square extends Rectangle {
  constructor (size) {
    // Call the constructor of Rectangle with size for both width and height
    super(size, size);
  }
}

// Export the Square class to be used in other files
module.exports = Square;
