const fs = require('fs')

fs.readFile(process.argv[1], "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data)
})
