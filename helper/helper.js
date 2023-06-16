const fs = require('fs');
const util = require('util');

// Promise of fs.readFile
const readFromFile = util.promisify(fs.readFile);

//use fs.writeFile to write content object as a JSON string to specified destination
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

//readAndAppend function here
//reads contents of file, parses it as JSON, appends new content to data, writes updated data in original file
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };
