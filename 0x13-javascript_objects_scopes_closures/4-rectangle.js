#!/usr/bin/node
// Define a class Rectangle
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    // Print the rectangle using 'X'
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    // Swap width and height
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    // Double the width and height
    this.width *= 2;
    this.height *= 2;
  }
}

// Export the Rectangle class to be used in other files
module.exports = Rectangle;
