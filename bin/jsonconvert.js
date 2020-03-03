#!/usr/bin/env node

const argv = require('yargs').argv
const fs = require('fs');

const json = fs.readFileSync(`./${argv.read}`, 'utf8');
let fileToWrite = '';

records = JSON.parse(json);

// get the headers
let headers = [];
for (let [key, value] of Object.entries(records[0])) {
    headers.push(key);
}
//write the headers
fileToWrite += headers.join(',') + '\n';

// write the data
records.forEach(record => {
    let data = [];
    for (let [key, value] of Object.entries(record)) {
        data.push(value);
    }
    fileToWrite += data.join(',') + '\n';
});

fs.writeFileSync(`./${argv.write}`, fileToWrite);
console.log(`Wrote to file: ${argv.write}`);
