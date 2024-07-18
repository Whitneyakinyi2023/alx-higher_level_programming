#!/usr/bin/node
const { list } = require('./100-data');

// Using map to create a new list where each element is multiplied by its index
const newList = list.map((num, index) => num * index);

console.log(list);
console.log(newList);
