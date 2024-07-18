#!/usr/bin/node
// Define a class Rectangle
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }
}

// Export the Rectangle class to be used in other files
module.exports = Rectangle;
