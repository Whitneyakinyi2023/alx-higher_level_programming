#!/usr/bin/node
let count = 0;

// Define a function logMe that prints arguments count and the current argument value
exports.logMe = function (item) {
  console.log(`${count}: ${item}`);
  count++;
};
