#!/usr/bin/node
const fs = require('fs');

const data = new Uint8Array(Buffer.from(process.argv[3]))
fs.writeFile(process.argv[2], data, (err) => {
  if (err) throw err;
});


