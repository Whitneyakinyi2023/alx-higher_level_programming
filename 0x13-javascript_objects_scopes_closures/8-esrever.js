#!/usr/bin/node
// Define a function esrever that reverses a list without using reverse
exports.esrever = function (list) {
  // Get the length of the list
  const length = list.length;

  // Loop through half of the list and swap elements
  for (let i = 0; i < Math.floor(length / 2); i++) {
    // Swap elements using destructuring assignment
    [list[i], list[length - 1 - i]] = [list[length - 1 - i], list[i]];
  }

  return list;
};
