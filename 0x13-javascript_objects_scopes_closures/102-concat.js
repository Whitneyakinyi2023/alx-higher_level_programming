#!/usr/bin/node
const fs = require('fs');

// Check if the correct number of arguments is passed
if (process.argv.length !== 5) {
  console.error('Usage: node 102-concat.js fileA fileB fileC');
  process.exit(1);
}

// Extract file paths from command line arguments
const [, , fileA, fileB, fileC] = process.argv;

// Read content from fileA and fileB
fs.readFile(fileA, 'utf8', (errA, dataA) => {
  if (errA) {
    console.error(`Error reading ${fileA}:`, errA);
    process.exit(1);
  }

  fs.readFile(fileB, 'utf8', (errB, dataB) => {
    if (errB) {
      console.error(`Error reading ${fileB}:`, errB);
      process.exit(1);
    }

    // Concatenate the content of fileA and fileB
    const concatenatedData = dataA.trim() + '\n' + dataB.trim() + '\n';

    // Write the concatenated data to fileC
    fs.writeFile(fileC, concatenatedData, (errWrite) => {
      if (errWrite) {
        console.error(`Error writing ${fileC}:`, errWrite);
        process.exit(1);
      }
      console.log(`Concatenation of ${fileA} and ${fileB} saved to ${fileC}`);
    });
  });
});
