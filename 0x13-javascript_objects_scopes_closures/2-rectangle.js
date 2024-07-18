#!/usr/bin/node
// Define a class Rectangle
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
      this.width = w;
      this.height = h;
    } else {
      // Create an empty object if w or h is 0 or not a positive integer
      return {};
    }
  }
}

// Export the Rectangle class to be used in other files
module.exports = Rectangle;
