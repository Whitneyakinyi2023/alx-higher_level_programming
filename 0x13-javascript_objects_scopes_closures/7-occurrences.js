#!/usr/bin/node
// Define a function nbOccurences that counts occurrences of searchElement in list
exports.nbOccurences = function (list, searchElement) {
  let count = 0;

  // Loop through the list and count occurrences of searchElement
  for (let i = 0; i < list.length; i++) {
    if (list[i] === searchElement) {
      count++;
    }
  }

  return count;
};
