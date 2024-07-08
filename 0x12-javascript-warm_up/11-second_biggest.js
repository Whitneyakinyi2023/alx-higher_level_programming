#!/usr/bin/node
// Retrieval of command-line arguments
const args = process.argv.slice(2);

// Check the number of arguments
if (args.length <= 1) {
  console.log(0);
} else {
  // Convert arguments to integers
  const nums = args.map(arg => parseInt(arg, 10));

  // Sort the numbers in descending order
  nums.sort((a, b) => b - a);

  // Print the second biggest number
  console.log(nums[1]);
}
