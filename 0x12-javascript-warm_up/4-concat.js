#!/usr/bin/node
const args = process.argv.slice(2);
if (process.argv[2] === undefined) {
    console.log('undefined is undefined');
} else {
    console.log(`${args[0]} is ${args[1]}`);
}