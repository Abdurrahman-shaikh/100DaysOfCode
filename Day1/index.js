const os = require('os');
const azmi = require('./second');
const path = require('path')
const { log } = require('console');
console.log('Hello World!');
console.log(azmi);
console.log(os.freemem());
console.log(os.hostname());
console.log(path.basename('/home/azmi/Notes/100DaysOfCode/Day1/'));
console.log(path.dirname('/home/azmi/Notes/100DaysOfCode/Day1/index.js'));
console.log(path.extname(__filename));