const fs = require('fs');

// Check for correct number of arguments
if (process.argv.length !== 4) {
  console.error('Usage: node 102-concat.js fileA fileB fileC');
  process.exit(1);
}

const [node, script, fileA, fileB, fileC] = process.argv;

// Read the contents of fileA and fileB
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

    // Concatenate the contents
    const concatenatedData = dataA + dataB;

    // Write the concatenated data to fileC
    fs.writeFile(fileC, concatenatedData, (errWr) => {
      if (errWr) {
        console.error(`Error writing to ${fileC}:`, errWr);
        process.exit(1);
      }
      console.log(`Content from ${fileA} and ${fileB} concatenated and written to ${fileC}`);
    });
  });
});
