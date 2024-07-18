#!/usr/bin/node
// Define a class Rectangle
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
      this.width = w;
      this.height = h;
    }
  }
}

// Export the Rectangle class to be used in other files
module.exports = Rectangle;
