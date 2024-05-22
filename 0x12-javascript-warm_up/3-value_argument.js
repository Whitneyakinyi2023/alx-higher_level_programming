#!/usr/bin/node
const args = process.argv.slice(2);
if (typeof process.argv[2] === undefined) {
  console.log('No argument');
} else {
  console.log(args.join(', '));
}
