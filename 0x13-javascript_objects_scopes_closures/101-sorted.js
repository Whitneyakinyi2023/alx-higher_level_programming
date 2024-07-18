#!/usr/bin/node
const { dict } = require('./101-data');

// Create an empty dictionary to store the inverted mapping
const invertedDict = {};

// Iterate through the original dictionary
for (const userId in dict) {
  const occurrences = dict[userId];
  // If the occurrence is not a key in the inverted dictionary, create it
  if (!invertedDict[occurrences]) {
    invertedDict[occurrences] = [];
  }
  // Append the userId to the list of userIds for the given occurrence
  invertedDict[occurrences].push(userId);
}

console.log(invertedDict);
